const FORM_TITLE = 'Registro de grupos TPI - IAEW 2026';
const DOMAIN_ITEM_TITLE = 'Dominio elegido';
const GROUP_HEADER = 'Grupo asignado';
const STATUS_HEADER = 'Estado de asignación';
const EMAIL_SENT_HEADER = 'Confirmación enviada';

const DOMAINS = [
  'Pedidos en restaurante con cocina',
  'E-commerce simplificado',
  'Reserva de turnos de salud',
  'Mesa de ayuda',
  'Biblioteca digital',
  'Eventos y entradas',
  'Alquiler de vehículos urbanos',
  'Reserva de salas de co-working'
];

function crearFormularioRegistroTpi() {
  const form = FormApp.create(FORM_TITLE);
  form.setDescription(
    'Debe completar este formulario un integrante por grupo. ' +
      'El dominio elegido queda reservado para ese grupo.'
  );
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setConfirmationMessage(
    'Registro recibido. El responsable recibirá por correo el nombre del grupo asignado.'
  );

  agregarIntegrante(form, 1, true);
  agregarIntegrante(form, 2, true);
  agregarIntegrante(form, 3, true);
  agregarIntegrante(form, 4, false);
  agregarIntegrante(form, 5, false);

  form.addListItem()
    .setTitle(DOMAIN_ITEM_TITLE)
    .setChoiceValues(DOMAINS)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Comentarios para la cátedra')
    .setRequired(false);

  const sheet = SpreadsheetApp.create('Respuestas - ' + FORM_TITLE);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  moverArchivosACarpetaDelScript([form.getId(), sheet.getId()]);

  ScriptApp.newTrigger('actualizarDominiosDisponibles')
    .forForm(form)
    .onFormSubmit()
    .create();

  PropertiesService.getScriptProperties().setProperties({
    FORM_ID: form.getId(),
    SPREADSHEET_ID: sheet.getId()
  });

  actualizarDominiosDisponibles();

  Logger.log('Formulario de edición: ' + form.getEditUrl());
  Logger.log('Formulario para estudiantes: ' + form.getPublishedUrl());
  Logger.log('Planilla de respuestas: ' + sheet.getUrl());
}

function moverArchivosACarpetaDelScript(fileIds) {
  const scriptFile = DriveApp.getFileById(ScriptApp.getScriptId());
  const parents = scriptFile.getParents();

  if (!parents.hasNext()) {
    Logger.log('No se encontró carpeta padre del script. Los archivos quedan en Mi unidad.');
    return;
  }

  const targetFolder = parents.next();

  fileIds.forEach((fileId) => {
    const file = DriveApp.getFileById(fileId);
    file.moveTo(targetFolder);
  });
}

function agregarIntegrante(form, numero, requerido) {
  const emailValidation = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText('Ingresá un correo válido.')
    .build();

  form.addSectionHeaderItem()
    .setTitle('Integrante ' + numero + (requerido ? '' : ' (opcional)'));

  form.addTextItem()
    .setTitle('Integrante ' + numero + ' - Nombre')
    .setRequired(requerido);

  form.addTextItem()
    .setTitle('Integrante ' + numero + ' - Apellido')
    .setRequired(requerido);

  form.addTextItem()
    .setTitle('Integrante ' + numero + ' - Legajo')
    .setRequired(requerido);

  form.addTextItem()
    .setTitle('Integrante ' + numero + ' - Mail')
    .setRequired(requerido)
    .setValidation(emailValidation);
}

function actualizarDominiosDisponibles() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const form = FormApp.openById(getRequiredProperty('FORM_ID'));
    const sheet = SpreadsheetApp.openById(getRequiredProperty('SPREADSHEET_ID'));
    const responseSheet = sheet.getSheets()[0];
    const values = responseSheet.getDataRange().getValues();

    if (values.length < 1) {
      actualizarOpcionesDominio(form, DOMAINS);
      return;
    }

    const headers = values[0];
    const domainColumn = headers.indexOf(DOMAIN_ITEM_TITLE);

    if (domainColumn === -1) {
      throw new Error('No se encontró la columna "' + DOMAIN_ITEM_TITLE + '".');
    }

    const groupColumn = asegurarColumna(responseSheet, headers, GROUP_HEADER);
    const statusColumn = asegurarColumna(responseSheet, headers, STATUS_HEADER);
    asegurarColumna(responseSheet, headers, EMAIL_SENT_HEADER);
    const dominiosTomados = new Set();

    for (let row = 1; row < values.length; row++) {
      const dominio = values[row][domainColumn];
      if (!dominio) continue;

      if (dominiosTomados.has(dominio)) {
        responseSheet
          .getRange(row + 1, statusColumn + 1)
          .setValue('DUPLICADO - revisar manualmente');
      } else {
        dominiosTomados.add(dominio);
        const groupName = 'Grupo ' + String(dominiosTomados.size).padStart(2, '0');
        responseSheet
          .getRange(row + 1, groupColumn + 1)
          .setValue(groupName);
        responseSheet
          .getRange(row + 1, statusColumn + 1)
          .setValue('Asignado');
        enviarConfirmacionSiCorresponde(responseSheet, headers, row, groupName, dominio);
      }
    }

    const disponibles = DOMAINS.filter((dominio) => !dominiosTomados.has(dominio));
    actualizarOpcionesDominio(form, disponibles);
  } finally {
    lock.releaseLock();
  }
}

function actualizarOpcionesDominio(form, disponibles) {
  const items = form.getItems(FormApp.ItemType.LIST);
  const domainItem = items
    .map((item) => item.asListItem())
    .find((item) => item.getTitle() === DOMAIN_ITEM_TITLE);

  if (!domainItem) {
    throw new Error('No se encontró la pregunta "' + DOMAIN_ITEM_TITLE + '".');
  }

  if (disponibles.length === 0) {
    domainItem.setChoiceValues(['Sin dominios disponibles']);
    form.setAcceptingResponses(false);
    form.setCustomClosedFormMessage('Ya no hay dominios disponibles para registrar.');
    return;
  }

  domainItem.setChoiceValues(disponibles);
  form.setAcceptingResponses(true);
}

function enviarConfirmacionSiCorresponde(sheet, headers, row, groupName, dominio) {
  const emailColumn = headers.indexOf('Dirección de correo electrónico');
  if (emailColumn === -1) return;

  const emailSentColumn = headers.indexOf(EMAIL_SENT_HEADER);
  if (emailSentColumn !== -1 && sheet.getRange(row + 1, emailSentColumn + 1).getValue() === 'Sí') {
    return;
  }

  const email = sheet.getRange(row + 1, emailColumn + 1).getValue();
  if (!email) return;

  MailApp.sendEmail({
    to: email,
    subject: 'Registro TPI IAEW 2026 - ' + groupName,
    body:
      'Registro recibido.\n\n' +
      'Grupo asignado: ' + groupName + '\n' +
      'Dominio elegido: ' + dominio + '\n\n' +
      'La cátedra usará este nombre para identificar al equipo durante el TPI.'
  });

  if (emailSentColumn !== -1) {
    sheet.getRange(row + 1, emailSentColumn + 1).setValue('Sí');
  }
}

function asegurarColumna(sheet, headers, title) {
  const existingIndex = headers.indexOf(title);
  if (existingIndex !== -1) return existingIndex;

  const nextColumn = headers.length + 1;
  sheet.getRange(1, nextColumn).setValue(title);
  headers.push(title);
  return nextColumn - 1;
}

function getRequiredProperty(name) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value) {
    throw new Error(
      'Falta la propiedad ' + name + '. Ejecuta primero crearFormularioRegistroTpi().'
    );
  }
  return value;
}
