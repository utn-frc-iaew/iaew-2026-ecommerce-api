import { A as syncParametersForPathChange, B as posix, C as traverseDocument, Et as ScalarFormInput_default, F as fetchUrls, Hn as validate, In as useScalarIcon, Jn as getValueAtPath, K as ScalarCopyButton_default, L as generateHash, Ln as useBindCx, P as createExternalExampleResolver, R as isHttpUrl, T as traverseAsyncApiDocument, Un as isObject, Wn as DEFAULT_MODELS_SECTION_LABEL, at as safeAssign, it as isLocalRef$1, q as ScalarCopyBackdrop_default, qn as createLocalization, rt as createAuthStore, tt as slugify, ut as useClipboard, z as resolveReferencePath } from "./workspace-events-BHk-czww.js";
import { $n as boolean, $t as XScalarStability, An as XScalarSdkInstallation$1, Ar as IsArray, Bn as XPostResponse, Br as IsPromise, Bt as OpenAPIDocumentSchema, Ci as isObject$1, Cn as XScalarTokenUrl, Cr as Get$1, Dr as Kind, E as isOpenApiDocument, En as XScalarCredentialsLocation, Er as Has, Fn as XScalarOrder, Fr as IsFunction, Gn as XScalarIsDirty$1, Gt as XVariable$1, Hn as XScalarRegistryMeta$1, Hr as IsSymbol, In as XScalarCookies, Ir as IsInteger, Jr as escapeJsonPointer$1, Jt as XEnumDescriptions$1, Kn as XScalarIcon$1, Kt as XExamples$1, Lr as IsIterator, M as isPollutionKey, Mn as XDisabled, Mr as IsBigInt, N as preventPollution, Nn as XTagGroups, Nr as IsBoolean, On as XOrder, Or as TypeBoxError, Pn as XScalarSelectedServer$1, Pr as IsDate, Qn as array, Qt as XGlobal, Rn as XScalarActiveEnvironment, Rr as IsNull, Sr as Never, T as isAsyncApiDocument, Tn as XScalarSecurityBody, Tr as Get, Un as XScalarOriginalSourceUrl$1, Ur as IsUint8Array, Ut as XDisplayName, Vn as XScalarWatchMode$1, Vr as IsString, Wn as XScalarOriginalDocumentHash$1, Wr as IsUndefined, Wt as XDefaultScopes, Xn as XScalarDefaultRequestBodyView, Xt as XTags$1, Yt as XAdditionalPropertiesName$1, Zn as any, Zt as XScalarSelectedContentType, _r as Deref, a as mergeObjects$1, ai as createMagicProxy, an as XInternal$1, ar as nullable, br as ExtendsUndefinedCheck, ci as getId, cr as optional, ct as redirectToProxy, dn as XusePkce, dr as union, dt as isLocalUrl, ei as unpackProxyObject, er as evaluate, fn as XTokenName, fr as unknown, gr as Hash, hr as Check, in as XBadges, ir as literal, jn as XScalarLinks$1, jr as IsAsyncIterator, kn as XScalarIgnore$1, kr as TypeSystemPolicy, li as parseJsonPointerSegments, lr as record, mr as coerceValue, ni as createOverridesProxy, nn as XDraftExamples, nr as intersection, o as deepClone, oi as getRaw, or as number, pn as XScalarAuthUrl, pr as extensions$1, qn as XScalarEnvironments$1, qt as XEnumVarNames$1, ri as createDetectChangesProxy, rn as XCodeSamples, rr as lazy, si as getValueByPath, sr as object, ti as unpackProxyShallow, tn as XScalarDisableParameters, tr as fn, ur as string, vt as isHttpMethod, wi as isObjectLike, wn as XScalarSecurityQuery, wr as Has$1, x as escapeJsonPointer, xi as getResolvedRef$1, xr as KeyOfPattern, yr as Type, yt as HTTP_METHODS, zn as XPreRequest, zr as IsNumber } from "./request-example-CCgTHEb8.js";
import { At as unref, C as createSlots, E as createVNode, F as mergeModels, I as mergeProps, It as toDisplayString, J as openBlock, N as inject, O as defineComponent, W as onMounted, Z as renderSlot, _ as computed, b as createCommentVNode, dt as withDirectives, f as withModifiers, mt as getCurrentScope, ot as watch, rt as useModel, s as vModelDynamic, ut as withCtx, v as createBaseVNode, vt as onScopeDispose, wt as shallowRef, x as createElementBlock, xt as ref, y as createBlock, yt as reactive } from "./vue.runtime.esm-bundler-BqKG0iLx.js";
import { t as browser_default } from "./browser-8PVv9PKY.js";
//#region node_modules/@scalar/api-reference/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/localization/use-localization.js
/**
* The API Reference localization instance.
*
* This binds the shared `@scalar/localization` engine to the API Reference translations. The engine
* lives in its own package so other packages (for example `@scalar/blocks`) can consume the same
* provide/inject context and contribute their own translations.
*/
var { resolveLocalization, provideLocalization, useLocalization } = createLocalization({
	localeTranslations: {
		en: {
			common: {
				streamItem: "Stream item",
				description: "Description",
				httpMethod: "HTTP Method",
				path: "Path",
				copyDefault: "Copy default value",
				copyExample: "Copy example value"
			},
			search: {
				label: "Search",
				inputLabel: "Enter search query",
				open: "Open Search",
				placeholder: "Search...",
				clear: "Clear Search",
				noResults: "No results found",
				keyboardShortcut: "Keyboard Shortcut:",
				command: "Command",
				control: "Control",
				results: "Reference Search Results",
				navigate: "Navigate",
				select: "Select",
				instructions: "Press up arrow / down arrow to navigate, enter to select, type to filter results",
				entryHeading: "Heading",
				entryOperation: "Operation",
				entryTag: "Tag",
				entryTagGroup: "Tag Group",
				entryWebhook: "Webhook"
			},
			navigation: {
				introduction: "Introduction",
				closeGroup: "Close Group",
				closeMenu: "Close Menu",
				openGroup: "Open Group",
				openMenu: "Open Menu",
				operations: "Operations",
				endpoints: "{name} endpoints",
				showAllEndpoints: "Show all {name} endpoints",
				sidebarFor: "Sidebar for {name}",
				mainContent: "API documentation for {name}",
				collapsed: "Collapsed",
				webhooks: "Webhooks",
				channels: "Channels"
			},
			server: {
				label: "Server",
				select: "Select a server"
			},
			info: { termsOfService: "Terms of Service" },
			asyncapi: {
				servers: "Servers",
				protocols: "Protocols"
			},
			clientLibraries: {
				heading: "Client Libraries",
				more: "More",
				selectAll: "Select from all clients"
			},
			operation: {
				codeSampleUnavailable: "No code sample available for this example.",
				body: "Body",
				cookies: "Cookies",
				headers: "Headers",
				pathParameters: "Path Parameters",
				queryParameters: "Query Parameters",
				requestBody: "Request Body",
				responses: "Responses",
				testRequest: "Test Request",
				webhook: "Webhook",
				selectedContentType: "Selected Content Type",
				callbacks: "Callbacks"
			},
			response: {
				xmlGenerationLimit: "The XML example exceeds the generation limit. Supply a serialized XML example to display the complete payload.",
				xmlGenerationFailed: "Unable to generate an XML example: {message}",
				exampleResponses: "Example Responses",
				noBody: "No Body",
				showSchema: "Show Schema",
				status: "Status"
			},
			schema: {
				noAllowedValues: "No values satisfy this enum constraint.",
				example: "Example",
				examples: "Examples",
				default: "Default",
				schema: "Schema",
				emptyObject: "Empty object",
				showAdditionalProperties: "Show additional properties",
				forName: "for {name}",
				showSchemaDetails: "Show Schema Details",
				oneOf: "One of",
				anyOf: "Any of",
				allOf: "All of",
				not: "Not",
				unknownType: "unknown type",
				propertyCount: "Properties: {count}",
				headerCount: "Headers: {count}",
				recursiveReference: "Recursive reference to {name}",
				recursive: "recursive",
				additionalProperties: "additional properties",
				const: "const",
				deprecated: "deprecated",
				discriminator: "Discriminator",
				enum: "enum",
				format: "Format",
				greaterThan: "greater than",
				keys: "keys",
				lessThan: "less than",
				max: "max",
				min: "min",
				maxLength: "max length",
				minLength: "min length",
				multipleOf: "multiple of",
				nullable: "nullable",
				propertyNames: "property names",
				pattern: "Pattern",
				copyPattern: "Copy pattern",
				readOnly: "read-only",
				required: "required",
				hideValues: "Hide values",
				showAllValues: "Show all values",
				type: "Type",
				unique: "unique",
				values: "values",
				writeOnly: "write-only"
			},
			download: {
				openapi: "Download OpenAPI Document",
				asyncapi: "Download AsyncAPI Document"
			},
			models: { label: "Models" },
			actions: {
				copyAsMarkdown: "Copy as Markdown",
				copied: "Copied",
				copyMarkdownFailed: "Failed to copy Markdown",
				copyLink: "Copy link",
				copyLinkTo: "Copy link to {name}",
				copyToClipboard: "Copy link to clipboard",
				copyEndpointUrl: "Copy endpoint URL",
				showMore: "Show More"
			},
			agent: {
				askAi: "Ask AI",
				askAiAgent: "Ask AI Agent",
				close: "Close Client"
			},
			mcp: {
				generate: "Generate MCP",
				connect: "Connect MCP"
			},
			developerTools: {
				title: "Developer Tools",
				configure: "Configure",
				share: "Share",
				deploy: "Deploy",
				scalarConfiguration: "Scalar Configuration",
				theme: "Theme",
				layout: "Layout",
				layoutOptions: "Layout Options",
				intro: "The developer tools allow you to customize the appearance and behavior of your documentation. You can also share your documentation using the Scalar Registry.",
				disableToolbarBefore: "To disable the toolbar, set",
				disableToolbarAfter: "in your configuration.",
				localhostOnly: "The developer tools will only appear when running on localhost.",
				layoutModern: "Modern",
				layoutClassic: "Classic",
				showSidebar: "Show Sidebar",
				defaultOpenFirstTag: "Default Open First Tag",
				defaultOpenAllTags: "Default Open All Tags",
				expandAll: "Expand All {label}",
				expandAllResponses: "Expand All Responses",
				hideClientButton: "Hide Client Button",
				hideDarkModeToggle: "Hide Dark Mode Toggle",
				hideModels: "Hide {label}",
				hideSearch: "Hide Search",
				showOperationId: "Show Operation ID",
				hideTestRequestButton: "Hide Test Request Button",
				scalarDocs: "Scalar Docs",
				deployDescription: "Deploy your documentation on Scalar, the modern documentation platform for your API and everything else.",
				shareTitle: "Share your API Reference",
				shareDescription: "Upload your OpenAPI document to share your API Reference with others. As easy as pressing a button.",
				uploadDocument: "Upload Document",
				temporaryLinkExpiration: "Your document will automatically be deleted after 7 days.",
				deployOnScalar: "Deploy on Scalar",
				deployFree: "Deploy your documentation for free.",
				additionalFeaturesMightRequire: "Additional features might require",
				generate: "Generate",
				passwordProtection: "Password Protection",
				customDomains: "Custom Domains",
				freeFormContent: "Free-form content",
				cdnInfrastructure: "CDN Infrastructure",
				pullFromGitHub: "Pull from GitHub",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Spectral Linting",
				jsonSchemaHosting: "JSON Schema Hosting",
				askAi: "Ask AI",
				mcpServers: "MCP Servers",
				unableToExportDocument: "Unable to export active document",
				unknownError: "An unknown error occurred"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "Welcome to the Scalar API References + Swagger Editor, a Free & Open-Source tool that takes your Swagger/OAS file and generates Beautiful API references.",
				showExample: "Show Example",
				uploadFile: "Upload File",
				integrations: "INTEGRATIONS",
				theming: "THEMING",
				features: "Features",
				customize: "Customize",
				customizeDescription: "Bring your typography & color palettes, or use our themes!",
				testing: "Testing",
				testingDescription: "A deeply integrated Rest API Client (Also Free & Open-Source)",
				search: "Search",
				searchDescription: "Fully integrated Search (Using fuse.js)",
				hosting: "Hosting",
				hostingDescription: "Free subdomain hosting on https://apidocumentation.com",
				openApiSwagger: "OpenAPI & Swagger",
				openApiSwaggerDescription: "Support for OpenAPI 3.1, OpenAPI 3.0, and Swagger 2.0",
				codeSamples: "Code Samples",
				codeSamplesDescription: "Code samples to show off your API in most popular languages"
			},
			footer: { poweredByScalar: "Powered by Scalar" },
			authentication: {
				detailsRequired: "Authentication required",
				detailsOptional: "Authentication optional",
				apiKey: "API key",
				mutualTLS: "Mutual TLS",
				apiKeyCookie: "Send the API key in the “{name}” cookie.",
				apiKeyHeader: "Send the API key in the “{name}” header.",
				apiKeyQuery: "Send the API key in the “{name}” query parameter.",
				title: "Authentication",
				accepts: "Accepts",
				allOf: "all of:",
				authentication: "authentication",
				optional: "Auth Optional",
				oneOf: "one of:",
				required: "Auth Required",
				requires: "Requires",
				scopes: "OAuth scopes"
			}
		},
		ru: {
			common: {
				streamItem: "Элемент потока",
				description: "Описание",
				httpMethod: "HTTP-метод",
				path: "Путь",
				copyDefault: "Скопировать значение по умолчанию",
				copyExample: "Скопировать пример значения"
			},
			search: {
				label: "Поиск",
				inputLabel: "Введите поисковый запрос",
				open: "Открыть поиск",
				placeholder: "Поиск...",
				clear: "Очистить поиск",
				noResults: "Результаты не найдены",
				keyboardShortcut: "Сочетание клавиш:",
				command: "Command",
				control: "Control",
				results: "Результаты поиска по документации",
				navigate: "Навигация",
				select: "Выбрать",
				instructions: "Нажмите стрелку вверх или вниз для навигации, Enter для выбора, вводите текст для фильтрации результатов",
				entryHeading: "Заголовок",
				entryOperation: "Операция",
				entryTag: "Тег",
				entryTagGroup: "Группа тегов",
				entryWebhook: "Вебхук"
			},
			navigation: {
				introduction: "Введение",
				closeGroup: "Закрыть группу",
				closeMenu: "Закрыть меню",
				openGroup: "Открыть группу",
				openMenu: "Открыть меню",
				operations: "Операции",
				endpoints: "Эндпоинты {name}",
				showAllEndpoints: "Показать все эндпоинты {name}",
				sidebarFor: "Боковая панель для {name}",
				mainContent: "Документация API для {name}",
				collapsed: "Свернуто",
				webhooks: "Вебхуки",
				channels: "Каналы"
			},
			server: {
				label: "Сервер",
				select: "Выберите сервер"
			},
			info: { termsOfService: "Условия использования" },
			asyncapi: {
				servers: "Серверы",
				protocols: "Протоколы"
			},
			clientLibraries: {
				heading: "Клиентские библиотеки",
				more: "Ещё",
				selectAll: "Выбрать из всех клиентов"
			},
			operation: {
				codeSampleUnavailable: "Для этого примера нет доступного образца кода.",
				body: "Тело",
				cookies: "Cookie",
				headers: "Заголовки",
				pathParameters: "Параметры пути",
				queryParameters: "Query-параметры",
				requestBody: "Тело запроса",
				responses: "Ответы",
				testRequest: "Проверить запрос",
				webhook: "Вебхук",
				selectedContentType: "Выбранный тип содержимого",
				callbacks: "Обратные вызовы"
			},
			response: {
				xmlGenerationLimit: "Пример XML превышает ограничение генерации. Укажите сериализованный пример XML, чтобы отобразить содержимое полностью.",
				xmlGenerationFailed: "Не удалось создать пример XML: {message}",
				exampleResponses: "Примеры ответов",
				noBody: "Нет тела",
				showSchema: "Показать схему",
				status: "Статус"
			},
			schema: {
				noAllowedValues: "Ни одно значение не удовлетворяет этому ограничению enum.",
				example: "Пример",
				examples: "Примеры",
				default: "Значение по умолчанию",
				schema: "Схема",
				emptyObject: "Пустой объект",
				showAdditionalProperties: "Показать дополнительные свойства",
				forName: "для {name}",
				showSchemaDetails: "Показать детали схемы",
				oneOf: "Один из",
				anyOf: "Любой из",
				allOf: "Все из",
				not: "Не",
				unknownType: "неизвестный тип",
				propertyCount: "Свойства: {count}",
				headerCount: "Заголовки: {count}",
				recursiveReference: "Рекурсивная ссылка на {name}",
				recursive: "рекурсивно",
				additionalProperties: "дополнительные свойства",
				const: "константа",
				deprecated: "устарело",
				discriminator: "Дискриминатор",
				enum: "enum",
				format: "Формат",
				greaterThan: "больше чем",
				keys: "ключи",
				lessThan: "меньше чем",
				max: "макс.",
				min: "мин.",
				maxLength: "макс. длина",
				minLength: "мин. длина",
				multipleOf: "кратно",
				nullable: "может быть null",
				propertyNames: "имена свойств",
				pattern: "Шаблон",
				copyPattern: "Скопировать шаблон",
				readOnly: "только чтение",
				required: "обязательно",
				hideValues: "Скрыть значения",
				showAllValues: "Показать все значения",
				type: "Тип",
				unique: "уникально",
				values: "значения",
				writeOnly: "только запись"
			},
			download: {
				openapi: "Скачать OpenAPI-документ",
				asyncapi: "Скачать AsyncAPI-документ"
			},
			models: { label: "Модели" },
			actions: {
				copyAsMarkdown: "Копировать как Markdown",
				copied: "Скопировано",
				copyMarkdownFailed: "Не удалось скопировать Markdown",
				copyLink: "Скопировать ссылку",
				copyLinkTo: "Скопировать ссылку на {name}",
				copyToClipboard: "Скопировать ссылку в буфер обмена",
				copyEndpointUrl: "Скопировать URL endpoint-а",
				showMore: "Показать ещё"
			},
			agent: {
				askAi: "Спросить AI",
				askAiAgent: "Спросить AI-агента",
				close: "Закрыть клиент"
			},
			mcp: {
				generate: "Создать MCP",
				connect: "Подключить MCP"
			},
			developerTools: {
				title: "Инструменты разработчика",
				configure: "Настроить",
				share: "Поделиться",
				deploy: "Опубликовать",
				scalarConfiguration: "Конфигурация Scalar",
				theme: "Тема",
				layout: "Макет",
				layoutOptions: "Параметры макета",
				intro: "Инструменты разработчика позволяют настроить внешний вид и поведение документации. Также можно поделиться документацией через Scalar Registry.",
				disableToolbarBefore: "Чтобы отключить панель, установите",
				disableToolbarAfter: "в конфигурации.",
				localhostOnly: "Инструменты разработчика отображаются только при запуске на localhost.",
				layoutModern: "Современный",
				layoutClassic: "Классический",
				showSidebar: "Показать боковую панель",
				defaultOpenFirstTag: "Открывать первый тег по умолчанию",
				defaultOpenAllTags: "Открывать все теги по умолчанию",
				expandAll: "Развернуть все {label}",
				expandAllResponses: "Развернуть все ответы",
				hideClientButton: "Скрыть кнопку клиента",
				hideDarkModeToggle: "Скрыть переключатель тёмной темы",
				hideModels: "Скрыть {label}",
				hideSearch: "Скрыть поиск",
				showOperationId: "Показать ID операции",
				hideTestRequestButton: "Скрыть кнопку тестового запроса",
				scalarDocs: "Scalar Docs",
				deployDescription: "Опубликуйте документацию на Scalar — современной платформе документации для вашего API и не только.",
				shareTitle: "Поделиться API Reference",
				shareDescription: "Загрузите документ OpenAPI, чтобы поделиться API Reference с другими. Так же просто, как нажать кнопку.",
				uploadDocument: "Загрузить документ",
				temporaryLinkExpiration: "Документ будет автоматически удалён через 7 дней.",
				deployOnScalar: "Опубликовать на Scalar",
				deployFree: "Опубликуйте документацию бесплатно.",
				additionalFeaturesMightRequire: "Для дополнительных возможностей может потребоваться",
				generate: "Создать",
				passwordProtection: "Защита паролем",
				customDomains: "Пользовательские домены",
				freeFormContent: "Произвольный контент",
				cdnInfrastructure: "CDN-инфраструктура",
				pullFromGitHub: "Загрузка из GitHub",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Линтинг Spectral",
				jsonSchemaHosting: "Хостинг JSON Schema",
				askAi: "Спросить AI",
				mcpServers: "MCP-серверы",
				unableToExportDocument: "Не удалось экспортировать активный документ",
				unknownError: "Произошла неизвестная ошибка"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "Добро пожаловать в Scalar API References + Swagger Editor — бесплатный инструмент с открытым исходным кодом, который принимает файл Swagger/OAS и создаёт красивые API Reference.",
				showExample: "Показать пример",
				uploadFile: "Загрузить файл",
				integrations: "ИНТЕГРАЦИИ",
				theming: "ТЕМЫ",
				features: "Возможности",
				customize: "Настройка",
				customizeDescription: "Используйте свою типографику и цветовые палитры или наши темы!",
				testing: "Тестирование",
				testingDescription: "Глубоко интегрированный REST API Client (тоже бесплатный и с открытым исходным кодом)",
				search: "Поиск",
				searchDescription: "Полностью интегрированный поиск (с использованием fuse.js)",
				hosting: "Хостинг",
				hostingDescription: "Бесплатный хостинг на поддомене https://apidocumentation.com",
				openApiSwagger: "OpenAPI и Swagger",
				openApiSwaggerDescription: "Поддержка OpenAPI 3.1, OpenAPI 3.0 и Swagger 2.0",
				codeSamples: "Примеры кода",
				codeSamplesDescription: "Примеры кода для демонстрации вашего API на самых популярных языках"
			},
			footer: { poweredByScalar: "Работает на Scalar" },
			authentication: {
				detailsRequired: "Требуется аутентификация",
				detailsOptional: "Аутентификация необязательна",
				apiKey: "Ключ API",
				mutualTLS: "Взаимная аутентификация TLS",
				apiKeyCookie: "Передайте ключ API в cookie «{name}».",
				apiKeyHeader: "Передайте ключ API в заголовке «{name}».",
				apiKeyQuery: "Передайте ключ API в параметре запроса «{name}».",
				title: "Аутентификация",
				accepts: "Принимает",
				allOf: "все из:",
				authentication: "аутентификация",
				optional: "Аутентификация необязательна",
				oneOf: "одно из:",
				required: "Требуется аутентификация",
				requires: "Требуется",
				scopes: "Области OAuth"
			}
		},
		es: {
			common: {
				streamItem: "Elemento del flujo",
				description: "Descripción",
				httpMethod: "Método HTTP",
				path: "Ruta",
				copyDefault: "Copiar valor por defecto",
				copyExample: "Copiar valor de ejemplo"
			},
			search: {
				label: "Buscar",
				inputLabel: "Introduce tu consulta de búsqueda",
				open: "Abrir búsqueda",
				placeholder: "Buscar...",
				clear: "Borrar búsqueda",
				noResults: "No se encontraron resultados",
				keyboardShortcut: "Atajo de teclado:",
				command: "Comando",
				control: "Control",
				results: "Resultados de búsqueda de la referencia",
				navigate: "Navegar",
				select: "Seleccionar",
				instructions: "Pulsa flecha arriba o abajo para navegar, Enter para seleccionar y escribe para filtrar resultados",
				entryHeading: "Encabezado",
				entryOperation: "Operación",
				entryTag: "Etiqueta",
				entryTagGroup: "Grupo de etiquetas",
				entryWebhook: "Webhook"
			},
			navigation: {
				introduction: "Introducción",
				closeGroup: "Cerrar grupo",
				closeMenu: "Cerrar menú",
				openGroup: "Abrir grupo",
				openMenu: "Abrir menú",
				operations: "Operaciones",
				endpoints: "Endpoints de {name}",
				showAllEndpoints: "Mostrar todos los endpoints de {name}",
				sidebarFor: "Barra lateral de {name}",
				mainContent: "Documentación de la API de {name}",
				collapsed: "Contraído",
				webhooks: "Webhooks",
				channels: "Canales"
			},
			server: {
				label: "Servidor",
				select: "Seleccionar un servidor"
			},
			info: { termsOfService: "Términos del servicio" },
			asyncapi: {
				servers: "Servidores",
				protocols: "Protocolos"
			},
			clientLibraries: {
				heading: "Bibliotecas cliente",
				more: "Más",
				selectAll: "Seleccionar entre todos los clientes"
			},
			operation: {
				codeSampleUnavailable: "No hay ninguna muestra de código disponible para este ejemplo.",
				body: "Cuerpo",
				cookies: "Cookies",
				headers: "Encabezados",
				pathParameters: "Parámetros de ruta",
				queryParameters: "Parámetros de consulta",
				requestBody: "Cuerpo de la solicitud",
				responses: "Respuestas",
				testRequest: "Probar solicitud",
				webhook: "Webhook",
				selectedContentType: "Tipo de contenido seleccionado",
				callbacks: "Callbacks"
			},
			response: {
				xmlGenerationLimit: "El ejemplo XML supera el límite de generación. Proporcione un ejemplo XML serializado para mostrar el contenido completo.",
				xmlGenerationFailed: "No se puede generar un ejemplo XML: {message}",
				exampleResponses: "Ejemplos de respuesta",
				noBody: "Sin cuerpo",
				showSchema: "Mostrar esquema",
				status: "Estado"
			},
			schema: {
				noAllowedValues: "Ningún valor satisface esta restricción enum.",
				example: "Ejemplo",
				examples: "Ejemplos",
				default: "Predeterminado",
				schema: "Esquema",
				emptyObject: "Objeto vacío",
				showAdditionalProperties: "Mostrar propiedades adicionales",
				forName: "para {name}",
				showSchemaDetails: "Mostrar detalles del esquema",
				oneOf: "Uno de",
				anyOf: "Cualquiera de",
				allOf: "Todos de",
				not: "No",
				unknownType: "tipo desconocido",
				propertyCount: "Propiedades: {count}",
				headerCount: "Encabezados: {count}",
				recursiveReference: "Referencia recursiva a {name}",
				recursive: "recursivo",
				additionalProperties: "propiedades adicionales",
				const: "constante",
				deprecated: "obsoleto",
				discriminator: "Discriminador",
				enum: "enum",
				format: "Formato",
				greaterThan: "mayor que",
				keys: "claves",
				lessThan: "menor que",
				max: "máx.",
				min: "mín.",
				maxLength: "longitud máx.",
				minLength: "longitud mín.",
				multipleOf: "múltiplo de",
				nullable: "admite null",
				propertyNames: "nombres de propiedades",
				pattern: "Patrón",
				copyPattern: "Copiar patrón",
				readOnly: "solo lectura",
				required: "obligatorio",
				hideValues: "Ocultar valores",
				showAllValues: "Mostrar todos los valores",
				type: "Tipo",
				unique: "único",
				values: "valores",
				writeOnly: "solo escritura"
			},
			download: {
				openapi: "Descargar documento OpenAPI",
				asyncapi: "Descargar documento AsyncAPI"
			},
			models: { label: "Modelos" },
			actions: {
				copyAsMarkdown: "Copiar como Markdown",
				copied: "Copiado",
				copyMarkdownFailed: "No se pudo copiar Markdown",
				copyLink: "Copiar enlace",
				copyLinkTo: "Copiar enlace a {name}",
				copyToClipboard: "Copiar enlace al portapapeles",
				copyEndpointUrl: "Copiar URL del endpoint",
				showMore: "Mostrar más"
			},
			agent: {
				askAi: "Preguntar a IA",
				askAiAgent: "Preguntar al agente de IA",
				close: "Cerrar cliente"
			},
			mcp: {
				generate: "Generar MCP",
				connect: "Conectar MCP"
			},
			developerTools: {
				title: "Herramientas de desarrollo",
				configure: "Configurar",
				share: "Compartir",
				deploy: "Desplegar",
				scalarConfiguration: "Configuración de Scalar",
				theme: "Tema",
				layout: "Diseño",
				layoutOptions: "Opciones de diseño",
				intro: "Las herramientas de desarrollo te permiten personalizar la apariencia y el comportamiento de tu documentación. También puedes compartir tu documentación con Scalar Registry.",
				disableToolbarBefore: "Para desactivar la barra de herramientas, configura",
				disableToolbarAfter: "en tu configuración.",
				localhostOnly: "Las herramientas de desarrollo solo aparecerán al ejecutarse en localhost.",
				layoutModern: "Moderno",
				layoutClassic: "Clásico",
				showSidebar: "Mostrar barra lateral",
				defaultOpenFirstTag: "Abrir la primera etiqueta por defecto",
				defaultOpenAllTags: "Abrir todas las etiquetas por defecto",
				expandAll: "Expandir todo {label}",
				expandAllResponses: "Expandir todas las respuestas",
				hideClientButton: "Ocultar botón del cliente",
				hideDarkModeToggle: "Ocultar selector de modo oscuro",
				hideModels: "Ocultar {label}",
				hideSearch: "Ocultar búsqueda",
				showOperationId: "Mostrar ID de operación",
				hideTestRequestButton: "Ocultar botón de solicitud de prueba",
				scalarDocs: "Scalar Docs",
				deployDescription: "Despliega tu documentación en Scalar, la plataforma moderna de documentación para tu API y mucho más.",
				shareTitle: "Comparte tu API Reference",
				shareDescription: "Sube tu documento OpenAPI para compartir tu API Reference con otras personas. Tan fácil como pulsar un botón.",
				uploadDocument: "Subir documento",
				temporaryLinkExpiration: "Tu documento se eliminará automáticamente después de 7 días.",
				deployOnScalar: "Desplegar en Scalar",
				deployFree: "Despliega tu documentación gratis.",
				additionalFeaturesMightRequire: "Las funciones adicionales pueden requerir",
				generate: "Generar",
				passwordProtection: "Protección con contraseña",
				customDomains: "Dominios personalizados",
				freeFormContent: "Contenido libre",
				cdnInfrastructure: "Infraestructura CDN",
				pullFromGitHub: "Importar desde GitHub",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Linting de Spectral",
				jsonSchemaHosting: "Alojamiento de JSON Schema",
				askAi: "Preguntar a IA",
				mcpServers: "Servidores MCP",
				unableToExportDocument: "No se pudo exportar el documento activo",
				unknownError: "Se produjo un error desconocido"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "Bienvenido a Scalar API References + Swagger Editor, una herramienta gratuita y de código abierto que toma tu archivo Swagger/OAS y genera API References elegantes.",
				showExample: "Mostrar ejemplo",
				uploadFile: "Subir archivo",
				integrations: "INTEGRACIONES",
				theming: "TEMAS",
				features: "Funciones",
				customize: "Personalizar",
				customizeDescription: "Usa tu tipografía y paletas de colores, o nuestros temas.",
				testing: "Pruebas",
				testingDescription: "Un REST API Client profundamente integrado (también gratuito y de código abierto)",
				search: "Búsqueda",
				searchDescription: "Búsqueda completamente integrada (con fuse.js)",
				hosting: "Hosting",
				hostingDescription: "Hosting gratuito en un subdominio de https://apidocumentation.com",
				openApiSwagger: "OpenAPI y Swagger",
				openApiSwaggerDescription: "Compatibilidad con OpenAPI 3.1, OpenAPI 3.0 y Swagger 2.0",
				codeSamples: "Ejemplos de código",
				codeSamplesDescription: "Ejemplos de código para mostrar tu API en los lenguajes más populares"
			},
			footer: { poweredByScalar: "Desarrollado por Scalar" },
			authentication: {
				detailsRequired: "Autenticación obligatoria",
				detailsOptional: "Autenticación opcional",
				apiKey: "Clave API",
				mutualTLS: "TLS mutuo",
				apiKeyCookie: "Envía la clave API en la cookie «{name}».",
				apiKeyHeader: "Envía la clave API en la cabecera «{name}».",
				apiKeyQuery: "Envía la clave API en el parámetro de consulta «{name}».",
				title: "Autenticación",
				accepts: "Acepta",
				allOf: "todo lo siguiente:",
				authentication: "autenticación",
				optional: "Autenticación opcional",
				oneOf: "uno de:",
				required: "Autenticación requerida",
				requires: "Requiere",
				scopes: "Ámbitos de OAuth"
			}
		},
		fr: {
			common: {
				streamItem: "Élément du flux",
				description: "Description",
				httpMethod: "Méthode HTTP",
				path: "Chemin",
				copyDefault: "Copier la valeur par défaut",
				copyExample: "Copier la valeur d’exemple"
			},
			search: {
				label: "Rechercher",
				inputLabel: "Saisissez votre recherche",
				open: "Ouvrir la recherche",
				placeholder: "Rechercher...",
				clear: "Effacer la recherche",
				noResults: "Aucun résultat trouvé",
				keyboardShortcut: "Raccourci clavier :",
				command: "Commande",
				control: "Contrôle",
				results: "Résultats de recherche de la référence",
				navigate: "Naviguer",
				select: "Sélectionner",
				instructions: "Appuyez sur flèche haut ou bas pour naviguer, Entrée pour sélectionner, saisissez du texte pour filtrer les résultats",
				entryHeading: "Titre",
				entryOperation: "Opération",
				entryTag: "Balise",
				entryTagGroup: "Groupe de balises",
				entryWebhook: "Webhook"
			},
			navigation: {
				introduction: "Introduction",
				closeGroup: "Fermer le groupe",
				closeMenu: "Fermer le menu",
				openGroup: "Ouvrir le groupe",
				openMenu: "Ouvrir le menu",
				operations: "Opérations",
				endpoints: "Endpoints de {name}",
				showAllEndpoints: "Afficher tous les endpoints de {name}",
				sidebarFor: "Barre latérale pour {name}",
				mainContent: "Documentation de l’API pour {name}",
				collapsed: "Réduit",
				webhooks: "Webhooks",
				channels: "Canaux"
			},
			server: {
				label: "Serveur",
				select: "Sélectionner un serveur"
			},
			info: { termsOfService: "Conditions d’utilisation" },
			asyncapi: {
				servers: "Serveurs",
				protocols: "Protocoles"
			},
			clientLibraries: {
				heading: "Bibliothèques clientes",
				more: "Plus",
				selectAll: "Sélectionner parmi tous les clients"
			},
			operation: {
				codeSampleUnavailable: "Aucun extrait de code disponible pour cet exemple.",
				body: "Corps",
				cookies: "Cookies",
				headers: "En-têtes",
				pathParameters: "Paramètres de chemin",
				queryParameters: "Paramètres de requête",
				requestBody: "Corps de la requête",
				responses: "Réponses",
				testRequest: "Tester la requête",
				webhook: "Webhook",
				selectedContentType: "Type de contenu sélectionné",
				callbacks: "Callbacks"
			},
			response: {
				xmlGenerationLimit: "L’exemple XML dépasse la limite de génération. Fournissez un exemple XML sérialisé pour afficher le contenu complet.",
				xmlGenerationFailed: "Impossible de générer un exemple XML : {message}",
				exampleResponses: "Exemples de réponses",
				noBody: "Aucun corps",
				showSchema: "Afficher le schéma",
				status: "Statut"
			},
			schema: {
				noAllowedValues: "Aucune valeur ne satisfait cette contrainte enum.",
				example: "Exemple",
				examples: "Exemples",
				default: "Par défaut",
				schema: "Schéma",
				emptyObject: "Objet vide",
				showAdditionalProperties: "Afficher les propriétés supplémentaires",
				forName: "pour {name}",
				showSchemaDetails: "Afficher les détails du schéma",
				oneOf: "Un parmi",
				anyOf: "N’importe lequel parmi",
				allOf: "Tous parmi",
				not: "Non",
				unknownType: "type inconnu",
				propertyCount: "Propriétés : {count}",
				headerCount: "En-têtes : {count}",
				recursiveReference: "Référence récursive vers {name}",
				recursive: "récursif",
				additionalProperties: "propriétés supplémentaires",
				const: "constante",
				deprecated: "obsolète",
				discriminator: "Discriminateur",
				enum: "enum",
				format: "Format",
				greaterThan: "supérieur à",
				keys: "clés",
				lessThan: "inférieur à",
				max: "max.",
				min: "min.",
				maxLength: "longueur max.",
				minLength: "longueur min.",
				multipleOf: "multiple de",
				nullable: "nullable",
				propertyNames: "noms des propriétés",
				pattern: "Motif",
				copyPattern: "Copier le motif",
				readOnly: "lecture seule",
				required: "obligatoire",
				hideValues: "Masquer les valeurs",
				showAllValues: "Afficher toutes les valeurs",
				type: "Type",
				unique: "unique",
				values: "valeurs",
				writeOnly: "écriture seule"
			},
			download: {
				openapi: "Télécharger le document OpenAPI",
				asyncapi: "Télécharger le document AsyncAPI"
			},
			models: { label: "Modèles" },
			actions: {
				copyAsMarkdown: "Copier en Markdown",
				copied: "Copié",
				copyMarkdownFailed: "Impossible de copier le Markdown",
				copyLink: "Copier le lien",
				copyLinkTo: "Copier le lien vers {name}",
				copyToClipboard: "Copier le lien dans le presse-papiers",
				copyEndpointUrl: "Copier l’URL de l’endpoint",
				showMore: "Afficher plus"
			},
			agent: {
				askAi: "Demander à l’IA",
				askAiAgent: "Demander à l’agent IA",
				close: "Fermer le client"
			},
			mcp: {
				generate: "Générer MCP",
				connect: "Connecter MCP"
			},
			developerTools: {
				title: "Outils de développement",
				configure: "Configurer",
				share: "Partager",
				deploy: "Déployer",
				scalarConfiguration: "Configuration Scalar",
				theme: "Thème",
				layout: "Mise en page",
				layoutOptions: "Options de mise en page",
				intro: "Les outils de développement vous permettent de personnaliser l’apparence et le comportement de votre documentation. Vous pouvez aussi partager votre documentation avec Scalar Registry.",
				disableToolbarBefore: "Pour désactiver la barre d’outils, définissez",
				disableToolbarAfter: "dans votre configuration.",
				localhostOnly: "Les outils de développement apparaissent uniquement lors d’une exécution sur localhost.",
				layoutModern: "Moderne",
				layoutClassic: "Classique",
				showSidebar: "Afficher la barre latérale",
				defaultOpenFirstTag: "Ouvrir le premier tag par défaut",
				defaultOpenAllTags: "Ouvrir tous les tags par défaut",
				expandAll: "Tout développer pour {label}",
				expandAllResponses: "Développer toutes les réponses",
				hideClientButton: "Masquer le bouton client",
				hideDarkModeToggle: "Masquer le sélecteur de mode sombre",
				hideModels: "Masquer {label}",
				hideSearch: "Masquer la recherche",
				showOperationId: "Afficher l’ID d’opération",
				hideTestRequestButton: "Masquer le bouton de requête de test",
				scalarDocs: "Scalar Docs",
				deployDescription: "Déployez votre documentation sur Scalar, la plateforme moderne de documentation pour votre API et bien plus encore.",
				shareTitle: "Partager votre API Reference",
				shareDescription: "Téléversez votre document OpenAPI pour partager votre API Reference avec d’autres personnes. Aussi simple qu’un clic.",
				uploadDocument: "Téléverser le document",
				temporaryLinkExpiration: "Votre document sera automatiquement supprimé après 7 jours.",
				deployOnScalar: "Déployer sur Scalar",
				deployFree: "Déployez votre documentation gratuitement.",
				additionalFeaturesMightRequire: "Les fonctionnalités supplémentaires peuvent nécessiter",
				generate: "Générer",
				passwordProtection: "Protection par mot de passe",
				customDomains: "Domaines personnalisés",
				freeFormContent: "Contenu libre",
				cdnInfrastructure: "Infrastructure CDN",
				pullFromGitHub: "Import depuis GitHub",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Linting Spectral",
				jsonSchemaHosting: "Hébergement JSON Schema",
				askAi: "Demander à l’IA",
				mcpServers: "Serveurs MCP",
				unableToExportDocument: "Impossible d’exporter le document actif",
				unknownError: "Une erreur inconnue est survenue"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "Bienvenue dans Scalar API References + Swagger Editor, un outil gratuit et open source qui transforme votre fichier Swagger/OAS en belles API References.",
				showExample: "Afficher l’exemple",
				uploadFile: "Téléverser un fichier",
				integrations: "INTÉGRATIONS",
				theming: "THÈMES",
				features: "Fonctionnalités",
				customize: "Personnaliser",
				customizeDescription: "Utilisez votre typographie et vos palettes de couleurs, ou nos thèmes !",
				testing: "Tests",
				testingDescription: "Un REST API Client profondément intégré (également gratuit et open source)",
				search: "Recherche",
				searchDescription: "Recherche entièrement intégrée (avec fuse.js)",
				hosting: "Hébergement",
				hostingDescription: "Hébergement gratuit sur un sous-domaine de https://apidocumentation.com",
				openApiSwagger: "OpenAPI et Swagger",
				openApiSwaggerDescription: "Prise en charge d’OpenAPI 3.1, OpenAPI 3.0 et Swagger 2.0",
				codeSamples: "Exemples de code",
				codeSamplesDescription: "Des exemples de code pour présenter votre API dans les langages les plus populaires"
			},
			footer: { poweredByScalar: "Propulsé par Scalar" },
			authentication: {
				detailsRequired: "Authentification requise",
				detailsOptional: "Authentification facultative",
				apiKey: "Clé API",
				mutualTLS: "TLS mutuel",
				apiKeyCookie: "Envoyez la clé API dans le cookie « {name} ».",
				apiKeyHeader: "Envoyez la clé API dans l’en-tête « {name} ».",
				apiKeyQuery: "Envoyez la clé API dans le paramètre de requête « {name} ».",
				title: "Authentification",
				accepts: "Accepte",
				allOf: "tous les éléments :",
				authentication: "authentification",
				optional: "Authentification optionnelle",
				oneOf: "l’un des éléments :",
				required: "Authentification requise",
				requires: "Requiert",
				scopes: "Portées OAuth"
			}
		},
		de: {
			common: {
				streamItem: "Stream-Element",
				description: "Beschreibung",
				httpMethod: "HTTP-Methode",
				path: "Pfad",
				copyDefault: "Standardwert kopieren",
				copyExample: "Beispielwert kopieren"
			},
			search: {
				label: "Suchen",
				inputLabel: "Suchbegriff eingeben",
				open: "Suche öffnen",
				placeholder: "Suchen...",
				clear: "Suche löschen",
				noResults: "Keine Ergebnisse gefunden",
				keyboardShortcut: "Tastenkürzel:",
				command: "Befehl",
				control: "Steuerung",
				results: "Suchergebnisse der Referenz",
				navigate: "Navigieren",
				select: "Auswählen",
				instructions: "Drücken Sie Pfeil nach oben oder unten zum Navigieren, Enter zum Auswählen und tippen Sie zum Filtern der Ergebnisse",
				entryHeading: "Überschrift",
				entryOperation: "Operation",
				entryTag: "Tag",
				entryTagGroup: "Tag-Gruppe",
				entryWebhook: "Webhook"
			},
			navigation: {
				introduction: "Einführung",
				closeGroup: "Gruppe schließen",
				closeMenu: "Menü schließen",
				openGroup: "Gruppe öffnen",
				openMenu: "Menü öffnen",
				operations: "Operationen",
				endpoints: "{name}-Endpunkte",
				showAllEndpoints: "Alle {name}-Endpunkte anzeigen",
				sidebarFor: "Seitenleiste für {name}",
				mainContent: "API-Dokumentation für {name}",
				collapsed: "Eingeklappt",
				webhooks: "Webhooks",
				channels: "Kanäle"
			},
			server: {
				label: "Server",
				select: "Server auswählen"
			},
			info: { termsOfService: "Nutzungsbedingungen" },
			asyncapi: {
				servers: "Server",
				protocols: "Protokolle"
			},
			clientLibraries: {
				heading: "Client-Bibliotheken",
				more: "Mehr",
				selectAll: "Aus allen Clients auswählen"
			},
			operation: {
				codeSampleUnavailable: "Für dieses Beispiel ist kein Codebeispiel verfügbar.",
				body: "Body",
				cookies: "Cookies",
				headers: "Header",
				pathParameters: "Pfadparameter",
				queryParameters: "Query-Parameter",
				requestBody: "Request Body",
				responses: "Antworten",
				testRequest: "Request testen",
				webhook: "Webhook",
				selectedContentType: "Ausgewählter Inhaltstyp",
				callbacks: "Callbacks"
			},
			response: {
				xmlGenerationLimit: "Das XML-Beispiel überschreitet das Generierungslimit. Geben Sie ein serialisiertes XML-Beispiel an, um den vollständigen Inhalt anzuzeigen.",
				xmlGenerationFailed: "XML-Beispiel konnte nicht generiert werden: {message}",
				exampleResponses: "Beispielantworten",
				noBody: "Kein Body",
				showSchema: "Schema anzeigen",
				status: "Status"
			},
			schema: {
				noAllowedValues: "Keine Werte erfüllen diese Enum-Bedingung.",
				example: "Beispiel",
				examples: "Beispiele",
				default: "Standard",
				schema: "Schema",
				emptyObject: "Leeres Objekt",
				showAdditionalProperties: "Zusätzliche Eigenschaften anzeigen",
				forName: "für {name}",
				showSchemaDetails: "Schema-Details anzeigen",
				oneOf: "Eines von",
				anyOf: "Beliebiges von",
				allOf: "Alle von",
				not: "Nicht",
				unknownType: "unbekannter Typ",
				propertyCount: "Eigenschaften: {count}",
				headerCount: "Header: {count}",
				recursiveReference: "Rekursiver Verweis auf {name}",
				recursive: "rekursiv",
				additionalProperties: "zusätzliche Eigenschaften",
				const: "Konstante",
				deprecated: "veraltet",
				discriminator: "Diskriminator",
				enum: "enum",
				format: "Format",
				greaterThan: "größer als",
				keys: "Schlüssel",
				lessThan: "kleiner als",
				max: "max.",
				min: "min.",
				maxLength: "max. Länge",
				minLength: "min. Länge",
				multipleOf: "Vielfaches von",
				nullable: "nullable",
				propertyNames: "Eigenschaftsnamen",
				pattern: "Muster",
				copyPattern: "Muster kopieren",
				readOnly: "nur lesbar",
				required: "erforderlich",
				hideValues: "Werte ausblenden",
				showAllValues: "Alle Werte anzeigen",
				type: "Typ",
				unique: "eindeutig",
				values: "Werte",
				writeOnly: "nur schreibbar"
			},
			download: {
				openapi: "OpenAPI-Dokument herunterladen",
				asyncapi: "AsyncAPI-Dokument herunterladen"
			},
			models: { label: "Modelle" },
			actions: {
				copyAsMarkdown: "Als Markdown kopieren",
				copied: "Kopiert",
				copyMarkdownFailed: "Markdown konnte nicht kopiert werden",
				copyLink: "Link kopieren",
				copyLinkTo: "Link zu {name} kopieren",
				copyToClipboard: "Link in die Zwischenablage kopieren",
				copyEndpointUrl: "Endpoint-URL kopieren",
				showMore: "Mehr anzeigen"
			},
			agent: {
				askAi: "KI fragen",
				askAiAgent: "KI-Agent fragen",
				close: "Client schließen"
			},
			mcp: {
				generate: "MCP generieren",
				connect: "MCP verbinden"
			},
			developerTools: {
				title: "Entwicklertools",
				configure: "Konfigurieren",
				share: "Teilen",
				deploy: "Bereitstellen",
				scalarConfiguration: "Scalar-Konfiguration",
				theme: "Theme",
				layout: "Layout",
				layoutOptions: "Layout-Optionen",
				intro: "Mit den Entwicklertools kannst du das Aussehen und Verhalten deiner Dokumentation anpassen. Du kannst deine Dokumentation auch über Scalar Registry teilen.",
				disableToolbarBefore: "Um die Toolbar zu deaktivieren, setze",
				disableToolbarAfter: "in deiner Konfiguration.",
				localhostOnly: "Die Entwicklertools werden nur angezeigt, wenn sie auf localhost ausgeführt werden.",
				layoutModern: "Modern",
				layoutClassic: "Klassisch",
				showSidebar: "Seitenleiste anzeigen",
				defaultOpenFirstTag: "Ersten Tag standardmäßig öffnen",
				defaultOpenAllTags: "Alle Tags standardmäßig öffnen",
				expandAll: "Alle {label} erweitern",
				expandAllResponses: "Alle Antworten erweitern",
				hideClientButton: "Client-Schaltfläche ausblenden",
				hideDarkModeToggle: "Dark-Mode-Umschalter ausblenden",
				hideModels: "{label} ausblenden",
				hideSearch: "Suche ausblenden",
				showOperationId: "Operation-ID anzeigen",
				hideTestRequestButton: "Test-Request-Schaltfläche ausblenden",
				scalarDocs: "Scalar Docs",
				deployDescription: "Veröffentliche deine Dokumentation auf Scalar, der modernen Dokumentationsplattform für deine API und alles Weitere.",
				shareTitle: "API Reference teilen",
				shareDescription: "Lade dein OpenAPI-Dokument hoch, um deine API Reference mit anderen zu teilen. So einfach wie ein Klick.",
				uploadDocument: "Dokument hochladen",
				temporaryLinkExpiration: "Dein Dokument wird nach 7 Tagen automatisch gelöscht.",
				deployOnScalar: "Auf Scalar veröffentlichen",
				deployFree: "Veröffentliche deine Dokumentation kostenlos.",
				additionalFeaturesMightRequire: "Zusätzliche Funktionen erfordern möglicherweise",
				generate: "Generieren",
				passwordProtection: "Passwortschutz",
				customDomains: "Eigene Domains",
				freeFormContent: "Freiform-Inhalte",
				cdnInfrastructure: "CDN-Infrastruktur",
				pullFromGitHub: "Von GitHub laden",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Spectral-Linting",
				jsonSchemaHosting: "JSON-Schema-Hosting",
				askAi: "KI fragen",
				mcpServers: "MCP-Server",
				unableToExportDocument: "Aktives Dokument konnte nicht exportiert werden",
				unknownError: "Ein unbekannter Fehler ist aufgetreten"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "Willkommen bei Scalar API References + Swagger Editor, einem kostenlosen Open-Source-Tool, das deine Swagger/OAS-Datei in schöne API References verwandelt.",
				showExample: "Beispiel anzeigen",
				uploadFile: "Datei hochladen",
				integrations: "INTEGRATIONEN",
				theming: "THEMES",
				features: "Funktionen",
				customize: "Anpassen",
				customizeDescription: "Nutze deine Typografie und Farbpaletten oder unsere Themes!",
				testing: "Testen",
				testingDescription: "Ein tief integrierter REST API Client (ebenfalls kostenlos und Open Source)",
				search: "Suche",
				searchDescription: "Vollständig integrierte Suche (mit fuse.js)",
				hosting: "Hosting",
				hostingDescription: "Kostenloses Subdomain-Hosting auf https://apidocumentation.com",
				openApiSwagger: "OpenAPI und Swagger",
				openApiSwaggerDescription: "Unterstützung für OpenAPI 3.1, OpenAPI 3.0 und Swagger 2.0",
				codeSamples: "Codebeispiele",
				codeSamplesDescription: "Codebeispiele, um deine API in den beliebtesten Sprachen zu präsentieren"
			},
			footer: { poweredByScalar: "Bereitgestellt von Scalar" },
			authentication: {
				detailsRequired: "Authentifizierung erforderlich",
				detailsOptional: "Authentifizierung optional",
				apiKey: "API-Schlüssel",
				mutualTLS: "Gegenseitiges TLS",
				apiKeyCookie: "Sende den API-Schlüssel im Cookie „{name}“.",
				apiKeyHeader: "Sende den API-Schlüssel im Header „{name}“.",
				apiKeyQuery: "Sende den API-Schlüssel im Abfrageparameter „{name}“.",
				title: "Authentifizierung",
				accepts: "Akzeptiert",
				allOf: "alle von:",
				authentication: "Authentifizierung",
				optional: "Authentifizierung optional",
				oneOf: "eines von:",
				required: "Authentifizierung erforderlich",
				requires: "Erfordert",
				scopes: "OAuth-Scopes"
			}
		},
		"zh-CN": {
			common: {
				streamItem: "流项目",
				description: "描述",
				httpMethod: "HTTP 方法",
				path: "路径",
				copyDefault: "复制默认值",
				copyExample: "复制示例值"
			},
			search: {
				label: "搜索",
				inputLabel: "输入搜索查询",
				open: "打开搜索",
				placeholder: "搜索...",
				clear: "清除搜索",
				noResults: "未找到结果",
				keyboardShortcut: "键盘快捷键：",
				command: "Command 键",
				control: "Control 键",
				results: "参考文档搜索结果",
				navigate: "导航",
				select: "选择",
				instructions: "按上/下箭头导航，按 Enter 选择，输入内容筛选结果",
				entryHeading: "标题",
				entryOperation: "操作",
				entryTag: "标签",
				entryTagGroup: "标签组",
				entryWebhook: "Webhook"
			},
			navigation: {
				introduction: "简介",
				closeGroup: "关闭分组",
				closeMenu: "关闭菜单",
				openGroup: "打开分组",
				openMenu: "打开菜单",
				operations: "操作",
				endpoints: "{name} 端点",
				showAllEndpoints: "显示 {name} 的所有端点",
				sidebarFor: "{name} 的侧边栏",
				mainContent: "{name} 的 API 文档",
				collapsed: "已折叠",
				webhooks: "Webhooks",
				channels: "频道"
			},
			server: {
				label: "服务器",
				select: "选择服务器"
			},
			info: { termsOfService: "服务条款" },
			asyncapi: {
				servers: "服务器",
				protocols: "协议"
			},
			clientLibraries: {
				heading: "客户端库",
				more: "更多",
				selectAll: "从所有客户端中选择"
			},
			operation: {
				codeSampleUnavailable: "此示例暂无可用的代码示例。",
				body: "请求体",
				cookies: "Cookie",
				headers: "请求头",
				pathParameters: "路径参数",
				queryParameters: "查询参数",
				requestBody: "请求体",
				responses: "响应",
				testRequest: "测试请求",
				webhook: "Webhook",
				selectedContentType: "已选内容类型",
				callbacks: "回调"
			},
			response: {
				xmlGenerationLimit: "XML 示例超出生成限制。请提供序列化的 XML 示例以显示完整内容。",
				xmlGenerationFailed: "无法生成 XML 示例：{message}",
				exampleResponses: "响应示例",
				noBody: "无内容",
				showSchema: "显示 Schema",
				status: "状态"
			},
			schema: {
				noAllowedValues: "没有值满足此枚举约束。",
				example: "示例",
				examples: "示例",
				default: "默认值",
				schema: "架构",
				emptyObject: "空对象",
				showAdditionalProperties: "显示附加属性",
				forName: "对于 {name}",
				showSchemaDetails: "显示架构详情",
				oneOf: "其中一个",
				anyOf: "任意一个",
				allOf: "全部",
				not: "非",
				unknownType: "未知类型",
				propertyCount: "属性：{count}",
				headerCount: "标头：{count}",
				recursiveReference: "递归引用 {name}",
				recursive: "递归",
				additionalProperties: "附加属性",
				const: "常量",
				deprecated: "已弃用",
				discriminator: "鉴别器",
				enum: "枚举",
				format: "格式",
				greaterThan: "大于",
				keys: "键",
				lessThan: "小于",
				max: "最大值",
				min: "最小值",
				maxLength: "最大长度",
				minLength: "最小长度",
				multipleOf: "倍数",
				nullable: "可为 null",
				propertyNames: "属性名称",
				pattern: "模式",
				copyPattern: "复制模式",
				readOnly: "只读",
				required: "必填",
				hideValues: "隐藏值",
				showAllValues: "显示所有值",
				type: "类型",
				unique: "唯一",
				values: "值",
				writeOnly: "只写"
			},
			download: {
				openapi: "下载 OpenAPI 文档",
				asyncapi: "下载 AsyncAPI 文档"
			},
			models: { label: "模型" },
			actions: {
				copyAsMarkdown: "复制为 Markdown",
				copied: "已复制",
				copyMarkdownFailed: "无法复制 Markdown",
				copyLink: "复制链接",
				copyLinkTo: "复制指向 {name} 的链接",
				copyToClipboard: "复制链接到剪贴板",
				copyEndpointUrl: "复制端点 URL",
				showMore: "显示更多"
			},
			agent: {
				askAi: "询问 AI",
				askAiAgent: "询问 AI 助手",
				close: "关闭客户端"
			},
			mcp: {
				generate: "生成 MCP",
				connect: "连接 MCP"
			},
			developerTools: {
				title: "开发者工具",
				configure: "配置",
				share: "分享",
				deploy: "部署",
				scalarConfiguration: "Scalar 配置",
				theme: "主题",
				layout: "布局",
				layoutOptions: "布局选项",
				intro: "开发者工具可用于自定义文档的外观和行为。你也可以通过 Scalar Registry 分享文档。",
				disableToolbarBefore: "要禁用工具栏，请在配置中设置",
				disableToolbarAfter: "。",
				localhostOnly: "开发者工具只会在 localhost 上运行时显示。",
				layoutModern: "现代",
				layoutClassic: "经典",
				showSidebar: "显示侧边栏",
				defaultOpenFirstTag: "默认打开第一个标签",
				defaultOpenAllTags: "默认打开所有标签",
				expandAll: "展开所有 {label}",
				expandAllResponses: "展开所有响应",
				hideClientButton: "隐藏客户端按钮",
				hideDarkModeToggle: "隐藏深色模式开关",
				hideModels: "隐藏 {label}",
				hideSearch: "隐藏搜索",
				showOperationId: "显示操作 ID",
				hideTestRequestButton: "隐藏测试请求按钮",
				scalarDocs: "Scalar Docs",
				deployDescription: "将你的文档部署到 Scalar，这是适用于 API 等内容的现代文档平台。",
				shareTitle: "分享你的 API Reference",
				shareDescription: "上传 OpenAPI 文档，与其他人分享你的 API Reference。只需点击按钮即可。",
				uploadDocument: "上传文档",
				temporaryLinkExpiration: "你的文档将在 7 天后自动删除。",
				deployOnScalar: "部署到 Scalar",
				deployFree: "免费部署你的文档。",
				additionalFeaturesMightRequire: "其他功能可能需要",
				generate: "生成",
				passwordProtection: "密码保护",
				customDomains: "自定义域名",
				freeFormContent: "自由内容",
				cdnInfrastructure: "CDN 基础设施",
				pullFromGitHub: "从 GitHub 拉取",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Spectral Linting",
				jsonSchemaHosting: "JSON Schema 托管",
				askAi: "询问 AI",
				mcpServers: "MCP 服务器",
				unableToExportDocument: "无法导出当前文档",
				unknownError: "发生未知错误"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "欢迎使用 Scalar API References + Swagger Editor，这是一款免费开源工具，可将你的 Swagger/OAS 文件生成精美的 API References。",
				showExample: "显示示例",
				uploadFile: "上传文件",
				integrations: "集成",
				theming: "主题",
				features: "功能",
				customize: "自定义",
				customizeDescription: "使用你的排版和调色板，或使用我们的主题！",
				testing: "测试",
				testingDescription: "深度集成的 REST API Client（同样免费且开源）",
				search: "搜索",
				searchDescription: "完整集成的搜索（使用 fuse.js）",
				hosting: "托管",
				hostingDescription: "在 https://apidocumentation.com 上免费托管子域名",
				openApiSwagger: "OpenAPI 和 Swagger",
				openApiSwaggerDescription: "支持 OpenAPI 3.1、OpenAPI 3.0 和 Swagger 2.0",
				codeSamples: "代码示例",
				codeSamplesDescription: "用最流行语言展示你的 API 的代码示例"
			},
			footer: { poweredByScalar: "由 Scalar 提供支持" },
			authentication: {
				detailsRequired: "需要身份验证",
				detailsOptional: "身份验证可选",
				apiKey: "API 密钥",
				mutualTLS: "双向 TLS",
				apiKeyCookie: "在 Cookie “{name}” 中发送 API 密钥。",
				apiKeyHeader: "在请求头 “{name}” 中发送 API 密钥。",
				apiKeyQuery: "在查询参数 “{name}” 中发送 API 密钥。",
				title: "身份验证",
				accepts: "接受",
				allOf: "全部：",
				authentication: "身份认证",
				optional: "身份认证可选",
				oneOf: "其中之一：",
				required: "需要身份认证",
				requires: "需要",
				scopes: "OAuth 作用域"
			}
		},
		ar: {
			common: {
				streamItem: "عنصر التدفق",
				description: "الوصف",
				httpMethod: "طريقة HTTP",
				path: "المسار",
				copyDefault: "نسخ القيمة الافتراضية",
				copyExample: "نسخ القيمة النموذجية"
			},
			search: {
				label: "بحث",
				inputLabel: "أدخل استعلام البحث",
				open: "فتح البحث",
				placeholder: "بحث...",
				clear: "مسح البحث",
				noResults: "لم يتم العثور على نتائج",
				keyboardShortcut: "اختصار لوحة المفاتيح:",
				command: "مفتاح الأوامر",
				control: "مفتاح التحكم",
				results: "نتائج البحث في المرجع",
				navigate: "تنقّل",
				select: "اختيار",
				instructions: "اضغط السهم للأعلى أو للأسفل للتنقل، Enter للاختيار، واكتب لتصفية النتائج",
				entryHeading: "عنوان",
				entryOperation: "عملية",
				entryTag: "وسم",
				entryTagGroup: "مجموعة وسوم",
				entryWebhook: "خطاف ويب"
			},
			navigation: {
				introduction: "المقدمة",
				closeGroup: "إغلاق المجموعة",
				closeMenu: "إغلاق القائمة",
				openGroup: "فتح المجموعة",
				openMenu: "فتح القائمة",
				operations: "العمليات",
				endpoints: "نقاط نهاية {name}",
				showAllEndpoints: "إظهار كل نقاط نهاية {name}",
				sidebarFor: "الشريط الجانبي لـ {name}",
				mainContent: "وثائق واجهة برمجة التطبيقات لـ {name}",
				collapsed: "مطوي",
				webhooks: "خطافات الويب",
				channels: "القنوات"
			},
			server: {
				label: "الخادم",
				select: "اختر خادماً"
			},
			info: { termsOfService: "شروط الخدمة" },
			asyncapi: {
				servers: "الخوادم",
				protocols: "البروتوكولات"
			},
			clientLibraries: {
				heading: "مكتبات العملاء",
				more: "المزيد",
				selectAll: "اختر من جميع العملاء"
			},
			operation: {
				codeSampleUnavailable: "لا يوجد نموذج تعليمات برمجية متاح لهذا المثال.",
				body: "الجسم",
				cookies: "ملفات تعريف الارتباط",
				headers: "الرؤوس",
				pathParameters: "معاملات المسار",
				queryParameters: "معاملات الاستعلام",
				requestBody: "جسم الطلب",
				responses: "الاستجابات",
				testRequest: "اختبار الطلب",
				webhook: "خطاف ويب",
				selectedContentType: "نوع المحتوى المحدد",
				callbacks: "عمليات الاستدعاء"
			},
			response: {
				xmlGenerationLimit: "يتجاوز مثال XML حد الإنشاء. قدّم مثال XML متسلسلاً لعرض المحتوى كاملاً.",
				xmlGenerationFailed: "تعذّر إنشاء مثال XML: {message}",
				exampleResponses: "أمثلة الاستجابات",
				noBody: "لا يوجد جسم",
				showSchema: "عرض المخطط",
				status: "الحالة"
			},
			schema: {
				noAllowedValues: "لا توجد قيم تستوفي قيد التعداد هذا.",
				example: "مثال",
				examples: "أمثلة",
				default: "الافتراضي",
				schema: "المخطط",
				emptyObject: "كائن فارغ",
				showAdditionalProperties: "إظهار الخصائص الإضافية",
				forName: "لـ {name}",
				showSchemaDetails: "إظهار تفاصيل المخطط",
				oneOf: "واحد من",
				anyOf: "أي من",
				allOf: "كل من",
				not: "ليس",
				unknownType: "نوع غير معروف",
				propertyCount: "الخصائص: {count}",
				headerCount: "الترويسات: {count}",
				recursiveReference: "مرجع تكراري إلى {name}",
				recursive: "تكراري",
				additionalProperties: "خصائص إضافية",
				const: "ثابت",
				deprecated: "مهمل",
				discriminator: "المميّز",
				enum: "تعداد",
				format: "التنسيق",
				greaterThan: "أكبر من",
				keys: "المفاتيح",
				lessThan: "أقل من",
				max: "الحد الأقصى",
				min: "الحد الأدنى",
				maxLength: "أقصى طول",
				minLength: "أدنى طول",
				multipleOf: "مضاعف لـ",
				nullable: "يقبل null",
				propertyNames: "أسماء الخصائص",
				pattern: "النمط",
				copyPattern: "نسخ النمط",
				readOnly: "قراءة فقط",
				required: "مطلوب",
				hideValues: "إخفاء القيم",
				showAllValues: "عرض كل القيم",
				type: "النوع",
				unique: "فريد",
				values: "القيم",
				writeOnly: "كتابة فقط"
			},
			download: {
				openapi: "تنزيل مستند OpenAPI",
				asyncapi: "تنزيل مستند AsyncAPI"
			},
			models: { label: "النماذج" },
			actions: {
				copyAsMarkdown: "نسخ بصيغة Markdown",
				copied: "تم النسخ",
				copyMarkdownFailed: "تعذر نسخ Markdown",
				copyLink: "نسخ الرابط",
				copyLinkTo: "نسخ الرابط إلى {name}",
				copyToClipboard: "نسخ الرابط إلى الحافظة",
				copyEndpointUrl: "نسخ رابط endpoint",
				showMore: "عرض المزيد"
			},
			agent: {
				askAi: "اسأل الذكاء الاصطناعي",
				askAiAgent: "اسأل وكيل الذكاء الاصطناعي",
				close: "إغلاق العميل"
			},
			mcp: {
				generate: "إنشاء MCP",
				connect: "ربط MCP"
			},
			developerTools: {
				title: "أدوات المطورين",
				configure: "الإعداد",
				share: "مشاركة",
				deploy: "نشر",
				scalarConfiguration: "إعدادات Scalar",
				theme: "السمة",
				layout: "التخطيط",
				layoutOptions: "خيارات التخطيط",
				intro: "تتيح لك أدوات المطورين تخصيص مظهر الوثائق وسلوكها. يمكنك أيضًا مشاركة وثائقك باستخدام Scalar Registry.",
				disableToolbarBefore: "لتعطيل شريط الأدوات، عيّن",
				disableToolbarAfter: "في الإعدادات.",
				localhostOnly: "لن تظهر أدوات المطورين إلا عند التشغيل على localhost.",
				layoutModern: "حديث",
				layoutClassic: "كلاسيكي",
				showSidebar: "إظهار الشريط الجانبي",
				defaultOpenFirstTag: "فتح أول وسم افتراضيًا",
				defaultOpenAllTags: "فتح كل الوسوم افتراضيًا",
				expandAll: "توسيع كل {label}",
				expandAllResponses: "توسيع كل الاستجابات",
				hideClientButton: "إخفاء زر العميل",
				hideDarkModeToggle: "إخفاء مفتاح الوضع الداكن",
				hideModels: "إخفاء {label}",
				hideSearch: "إخفاء البحث",
				showOperationId: "إظهار معرّف العملية",
				hideTestRequestButton: "إخفاء زر طلب الاختبار",
				scalarDocs: "Scalar Docs",
				deployDescription: "انشر وثائقك على Scalar، منصة الوثائق الحديثة لواجهة API الخاصة بك وكل شيء آخر.",
				shareTitle: "مشاركة API Reference",
				shareDescription: "حمّل مستند OpenAPI لمشاركة API Reference مع الآخرين. الأمر بسيط كضغط زر.",
				uploadDocument: "تحميل المستند",
				temporaryLinkExpiration: "سيتم حذف المستند تلقائيًا بعد 7 أيام.",
				deployOnScalar: "النشر على Scalar",
				deployFree: "انشر وثائقك مجانًا.",
				additionalFeaturesMightRequire: "قد تتطلب الميزات الإضافية",
				generate: "إنشاء",
				passwordProtection: "الحماية بكلمة مرور",
				customDomains: "نطاقات مخصصة",
				freeFormContent: "محتوى حر",
				cdnInfrastructure: "بنية CDN التحتية",
				pullFromGitHub: "السحب من GitHub",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "فحص Spectral",
				jsonSchemaHosting: "استضافة JSON Schema",
				askAi: "اسأل الذكاء الاصطناعي",
				mcpServers: "خوادم MCP",
				unableToExportDocument: "تعذر تصدير المستند النشط",
				unknownError: "حدث خطأ غير معروف"
			},
			gettingStarted: {
				swaggerEditor: "Swagger Editor",
				description: "مرحبًا بك في Scalar API References + Swagger Editor، أداة مجانية ومفتوحة المصدر تأخذ ملف Swagger/OAS الخاص بك وتنشئ API References جميلة.",
				showExample: "إظهار مثال",
				uploadFile: "تحميل ملف",
				integrations: "التكاملات",
				theming: "السمات",
				features: "الميزات",
				customize: "التخصيص",
				customizeDescription: "استخدم الخطوط ولوحات الألوان الخاصة بك، أو استخدم سماتنا!",
				testing: "الاختبار",
				testingDescription: "REST API Client مدمج بعمق (مجاني ومفتوح المصدر أيضًا)",
				search: "البحث",
				searchDescription: "بحث مدمج بالكامل (باستخدام fuse.js)",
				hosting: "الاستضافة",
				hostingDescription: "استضافة مجانية لنطاق فرعي على https://apidocumentation.com",
				openApiSwagger: "OpenAPI و Swagger",
				openApiSwaggerDescription: "دعم OpenAPI 3.1 و OpenAPI 3.0 و Swagger 2.0",
				codeSamples: "أمثلة التعليمات البرمجية",
				codeSamplesDescription: "أمثلة تعليمات برمجية لعرض API الخاص بك بأشهر اللغات"
			},
			footer: { poweredByScalar: "مدعوم من Scalar" },
			authentication: {
				detailsRequired: "المصادقة مطلوبة",
				detailsOptional: "المصادقة اختيارية",
				apiKey: "مفتاح API",
				mutualTLS: "TLS متبادل",
				apiKeyCookie: "أرسل مفتاح API في ملف تعريف الارتباط «{name}».",
				apiKeyHeader: "أرسل مفتاح API في الترويسة «{name}».",
				apiKeyQuery: "أرسل مفتاح API في معامل الاستعلام «{name}».",
				title: "المصادقة",
				accepts: "يقبل",
				allOf: "كل ما يلي:",
				authentication: "المصادقة",
				optional: "المصادقة اختيارية",
				oneOf: "واحد من:",
				required: "المصادقة مطلوبة",
				requires: "يتطلب",
				scopes: "نطاقات OAuth"
			}
		},
		pt: {
			common: {
				streamItem: "Item do fluxo",
				description: "Descrição",
				httpMethod: "Método HTTP",
				path: "Caminho",
				copyDefault: "Copiar valor padrão",
				copyExample: "Copiar valor de exemplo"
			},
			search: {
				label: "Buscar",
				inputLabel: "Digite o termo de busca",
				open: "Abrir Busca",
				placeholder: "Buscar...",
				clear: "Limpar Busca",
				noResults: "Nenhum resultado encontrado",
				keyboardShortcut: "Atalho de Teclado:",
				command: "Command",
				control: "Control",
				results: "Resultados da Busca de Referência",
				navigate: "Navegar",
				select: "Selecionar",
				instructions: "Pressione seta para cima / seta para baixo para navegar, enter para selecionar, digite para filtrar resultados",
				entryHeading: "Título",
				entryOperation: "Operação",
				entryTag: "Tag",
				entryTagGroup: "Grupo de Tags",
				entryWebhook: "Webhook"
			},
			navigation: {
				introduction: "Introdução",
				closeGroup: "Fechar Grupo",
				closeMenu: "Fechar Menu",
				openGroup: "Abrir Grupo",
				openMenu: "Abrir Menu",
				operations: "Operações",
				endpoints: "Endpoints de {name}",
				showAllEndpoints: "Mostrar todos os endpoints de {name}",
				sidebarFor: "Barra lateral de {name}",
				mainContent: "Documentação da API para {name}",
				collapsed: "Recolhido",
				webhooks: "Webhooks",
				channels: "Canais"
			},
			server: {
				label: "Servidor",
				select: "Selecione um servidor"
			},
			info: { termsOfService: "Termos de Serviço" },
			asyncapi: {
				servers: "Servidores",
				protocols: "Protocolos"
			},
			clientLibraries: {
				heading: "Bibliotecas Cliente",
				more: "Mais",
				selectAll: "Selecionar de todos os clientes"
			},
			operation: {
				codeSampleUnavailable: "Nenhuma amostra de código disponível para este exemplo.",
				body: "Corpo",
				cookies: "Cookies",
				headers: "Cabeçalhos",
				pathParameters: "Parâmetros de Caminho",
				queryParameters: "Parâmetros de Consulta",
				requestBody: "Corpo da Requisição",
				responses: "Respostas",
				testRequest: "Testar Requisição",
				webhook: "Webhook",
				selectedContentType: "Tipo de Conteúdo Selecionado",
				callbacks: "Callbacks"
			},
			response: {
				xmlGenerationLimit: "O exemplo XML excede o limite de geração. Forneça um exemplo XML serializado para exibir o conteúdo completo.",
				xmlGenerationFailed: "Não foi possível gerar um exemplo XML: {message}",
				exampleResponses: "Exemplos de Respostas",
				noBody: "Sem Corpo",
				showSchema: "Mostrar Schema",
				status: "Status"
			},
			schema: {
				noAllowedValues: "Nenhum valor satisfaz esta restrição enum.",
				example: "Exemplo",
				examples: "Exemplos",
				default: "Padrão",
				schema: "Schema",
				emptyObject: "Objeto vazio",
				showAdditionalProperties: "Mostrar propriedades adicionais",
				forName: "para {name}",
				showSchemaDetails: "Mostrar Detalhes do Schema",
				oneOf: "Um de",
				anyOf: "Qualquer um de",
				allOf: "Todos de",
				not: "Não",
				unknownType: "tipo desconhecido",
				propertyCount: "Propriedades: {count}",
				headerCount: "Cabeçalhos: {count}",
				recursiveReference: "Referência recursiva a {name}",
				recursive: "recursivo",
				additionalProperties: "propriedades adicionais",
				const: "const",
				deprecated: "obsoleto",
				discriminator: "Discriminador",
				enum: "enum",
				format: "Formato",
				greaterThan: "maior que",
				keys: "chaves",
				lessThan: "menor que",
				max: "máx",
				min: "mín",
				maxLength: "tamanho máximo",
				minLength: "tamanho mínimo",
				multipleOf: "múltiplo de",
				nullable: "aceita nulo",
				propertyNames: "nomes de propriedades",
				pattern: "Padrão",
				copyPattern: "Copiar padrão",
				readOnly: "somente leitura",
				required: "obrigatório",
				hideValues: "Ocultar valores",
				showAllValues: "Mostrar todos os valores",
				type: "Tipo",
				unique: "único",
				values: "valores",
				writeOnly: "somente escrita"
			},
			download: {
				openapi: "Baixar Documento OpenAPI",
				asyncapi: "Baixar Documento AsyncAPI"
			},
			models: { label: "Modelos" },
			actions: {
				copyAsMarkdown: "Copiar como Markdown",
				copied: "Copiado",
				copyMarkdownFailed: "Não foi possível copiar o Markdown",
				copyLink: "Copiar link",
				copyLinkTo: "Copiar link para {name}",
				copyToClipboard: "Copiar link para a área de transferência",
				copyEndpointUrl: "Copiar URL do endpoint",
				showMore: "Mostrar Mais"
			},
			agent: {
				askAi: "Perguntar à IA",
				askAiAgent: "Perguntar ao Agente de IA",
				close: "Fechar Cliente"
			},
			mcp: {
				generate: "Gerar MCP",
				connect: "Conectar MCP"
			},
			developerTools: {
				title: "Ferramentas de Desenvolvedor",
				configure: "Configurar",
				share: "Compartilhar",
				deploy: "Implantar",
				scalarConfiguration: "Configuração do Scalar",
				theme: "Tema",
				layout: "Layout",
				layoutOptions: "Opções de Layout",
				intro: "As ferramentas de desenvolvedor permitem personalizar a aparência e o comportamento da sua documentação. Você também pode compartilhar sua documentação usando o Scalar Registry.",
				disableToolbarBefore: "Para desativar a barra de ferramentas, defina",
				disableToolbarAfter: "na sua configuração.",
				localhostOnly: "As ferramentas de desenvolvedor só aparecerão ao rodar em localhost.",
				layoutModern: "Moderno",
				layoutClassic: "Clássico",
				showSidebar: "Mostrar Barra Lateral",
				defaultOpenFirstTag: "Abrir Primeira Tag por Padrão",
				defaultOpenAllTags: "Abrir Todas as Tags por Padrão",
				expandAll: "Expandir Todos {label}",
				expandAllResponses: "Expandir Todas as Respostas",
				hideClientButton: "Ocultar Botão do Cliente",
				hideDarkModeToggle: "Ocultar Alternador de Modo Escuro",
				hideModels: "Ocultar {label}",
				hideSearch: "Ocultar Busca",
				showOperationId: "Mostrar ID da Operação",
				hideTestRequestButton: "Ocultar Botão de Testar Requisição",
				scalarDocs: "Documentação do Scalar",
				deployDescription: "Implante sua documentação no Scalar, a plataforma de documentação moderna para sua API e tudo mais.",
				shareTitle: "Compartilhe sua Referência de API",
				shareDescription: "Envie seu documento OpenAPI para compartilhar sua Referência de API com outras pessoas. Tão fácil quanto apertar um botão.",
				uploadDocument: "Enviar Documento",
				temporaryLinkExpiration: "Seu documento será excluído automaticamente após 7 dias.",
				deployOnScalar: "Implantar no Scalar",
				deployFree: "Implante sua documentação gratuitamente.",
				additionalFeaturesMightRequire: "Recursos adicionais podem exigir",
				generate: "Gerar",
				passwordProtection: "Proteção por Senha",
				customDomains: "Domínios Personalizados",
				freeFormContent: "Conteúdo de formato livre",
				cdnInfrastructure: "Infraestrutura de CDN",
				pullFromGitHub: "Importar do GitHub",
				markdownMdx: "Markdown/MDX",
				spectralLinting: "Linting com Spectral",
				jsonSchemaHosting: "Hospedagem de JSON Schema",
				askAi: "Perguntar à IA",
				mcpServers: "Servidores MCP",
				unableToExportDocument: "Não foi possível exportar o documento ativo",
				unknownError: "Ocorreu um erro desconhecido"
			},
			gettingStarted: {
				swaggerEditor: "Editor Swagger",
				description: "Bem-vindo às Referências de API Scalar + Editor Swagger, uma ferramenta gratuita e de código aberto que transforma seu arquivo Swagger/OAS em belas referências de API.",
				showExample: "Mostrar Exemplo",
				uploadFile: "Enviar Arquivo",
				integrations: "INTEGRAÇÕES",
				theming: "TEMAS",
				features: "Recursos",
				customize: "Personalizar",
				customizeDescription: "Traga sua tipografia e paletas de cores, ou use nossos temas!",
				testing: "Testes",
				testingDescription: "Um Cliente de API REST profundamente integrado (Também gratuito e de código aberto)",
				search: "Busca",
				searchDescription: "Busca totalmente integrada (usando fuse.js)",
				hosting: "Hospedagem",
				hostingDescription: "Hospedagem gratuita de subdomínio em https://apidocumentation.com",
				openApiSwagger: "OpenAPI e Swagger",
				openApiSwaggerDescription: "Suporte para OpenAPI 3.1, OpenAPI 3.0 e Swagger 2.0",
				codeSamples: "Exemplos de Código",
				codeSamplesDescription: "Exemplos de código para mostrar sua API nas linguagens mais populares"
			},
			footer: { poweredByScalar: "Desenvolvido com Scalar" },
			authentication: {
				detailsRequired: "Autenticação obrigatória",
				detailsOptional: "Autenticação opcional",
				apiKey: "Chave de API",
				mutualTLS: "TLS mútuo",
				apiKeyCookie: "Envie a chave de API no cookie “{name}”.",
				apiKeyHeader: "Envie a chave de API no cabeçalho “{name}”.",
				apiKeyQuery: "Envie a chave de API no parâmetro de consulta “{name}”.",
				title: "Autenticação",
				accepts: "Aceita",
				allOf: "todos de:",
				authentication: "autenticação",
				optional: "Autenticação Opcional",
				oneOf: "um de:",
				required: "Autenticação Obrigatória",
				requires: "Requer",
				scopes: "Escopos OAuth"
			}
		}
	},
	defaultLocale: "en",
	rtlLocales: /* @__PURE__ */ new Set([
		"ar",
		"fa",
		"he",
		"ur"
	]),
	logPrefix: "[@scalar/api-reference]"
});
//#endregion
//#region node_modules/@scalar/typebox/build/esm/errors/function.mjs
/** Creates an error message using en-US as the default locale */
function DefaultErrorFunction(error) {
	switch (error.errorType) {
		case ValueErrorType.ArrayContains: return "Expected array to contain at least one matching value";
		case ValueErrorType.ArrayMaxContains: return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
		case ValueErrorType.ArrayMinContains: return `Expected array to contain at least ${error.schema.minContains} matching values`;
		case ValueErrorType.ArrayMaxItems: return `Expected array length to be less or equal to ${error.schema.maxItems}`;
		case ValueErrorType.ArrayMinItems: return `Expected array length to be greater or equal to ${error.schema.minItems}`;
		case ValueErrorType.ArrayUniqueItems: return "Expected array elements to be unique";
		case ValueErrorType.Array: return "Expected array";
		case ValueErrorType.AsyncIterator: return "Expected AsyncIterator";
		case ValueErrorType.BigIntExclusiveMaximum: return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
		case ValueErrorType.BigIntExclusiveMinimum: return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
		case ValueErrorType.BigIntMaximum: return `Expected bigint to be less or equal to ${error.schema.maximum}`;
		case ValueErrorType.BigIntMinimum: return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
		case ValueErrorType.BigIntMultipleOf: return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
		case ValueErrorType.BigInt: return "Expected bigint";
		case ValueErrorType.Boolean: return "Expected boolean";
		case ValueErrorType.DateExclusiveMinimumTimestamp: return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
		case ValueErrorType.DateExclusiveMaximumTimestamp: return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
		case ValueErrorType.DateMinimumTimestamp: return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
		case ValueErrorType.DateMaximumTimestamp: return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
		case ValueErrorType.DateMultipleOfTimestamp: return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
		case ValueErrorType.Date: return "Expected Date";
		case ValueErrorType.Function: return "Expected function";
		case ValueErrorType.IntegerExclusiveMaximum: return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
		case ValueErrorType.IntegerExclusiveMinimum: return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
		case ValueErrorType.IntegerMaximum: return `Expected integer to be less or equal to ${error.schema.maximum}`;
		case ValueErrorType.IntegerMinimum: return `Expected integer to be greater or equal to ${error.schema.minimum}`;
		case ValueErrorType.IntegerMultipleOf: return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
		case ValueErrorType.Integer: return "Expected integer";
		case ValueErrorType.IntersectUnevaluatedProperties: return "Unexpected property";
		case ValueErrorType.Intersect: return "Expected all values to match";
		case ValueErrorType.Iterator: return "Expected Iterator";
		case ValueErrorType.Literal: return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
		case ValueErrorType.Never: return "Never";
		case ValueErrorType.Not: return "Value should not match";
		case ValueErrorType.Null: return "Expected null";
		case ValueErrorType.NumberExclusiveMaximum: return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
		case ValueErrorType.NumberExclusiveMinimum: return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
		case ValueErrorType.NumberMaximum: return `Expected number to be less or equal to ${error.schema.maximum}`;
		case ValueErrorType.NumberMinimum: return `Expected number to be greater or equal to ${error.schema.minimum}`;
		case ValueErrorType.NumberMultipleOf: return `Expected number to be a multiple of ${error.schema.multipleOf}`;
		case ValueErrorType.Number: return "Expected number";
		case ValueErrorType.Object: return "Expected object";
		case ValueErrorType.ObjectAdditionalProperties: return "Unexpected property";
		case ValueErrorType.ObjectMaxProperties: return `Expected object to have no more than ${error.schema.maxProperties} properties`;
		case ValueErrorType.ObjectMinProperties: return `Expected object to have at least ${error.schema.minProperties} properties`;
		case ValueErrorType.ObjectRequiredProperty: return "Expected required property";
		case ValueErrorType.Promise: return "Expected Promise";
		case ValueErrorType.RegExp: return "Expected string to match regular expression";
		case ValueErrorType.StringFormatUnknown: return `Unknown format '${error.schema.format}'`;
		case ValueErrorType.StringFormat: return `Expected string to match '${error.schema.format}' format`;
		case ValueErrorType.StringMaxLength: return `Expected string length less or equal to ${error.schema.maxLength}`;
		case ValueErrorType.StringMinLength: return `Expected string length greater or equal to ${error.schema.minLength}`;
		case ValueErrorType.StringPattern: return `Expected string to match '${error.schema.pattern}'`;
		case ValueErrorType.String: return "Expected string";
		case ValueErrorType.Symbol: return "Expected symbol";
		case ValueErrorType.TupleLength: return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
		case ValueErrorType.Tuple: return "Expected tuple";
		case ValueErrorType.Uint8ArrayMaxByteLength: return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
		case ValueErrorType.Uint8ArrayMinByteLength: return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
		case ValueErrorType.Uint8Array: return "Expected Uint8Array";
		case ValueErrorType.Undefined: return "Expected undefined";
		case ValueErrorType.Union: return "Expected union value";
		case ValueErrorType.Void: return "Expected void";
		case ValueErrorType.Kind: return `Expected kind '${error.schema[Kind]}'`;
		default: return "Unknown error type";
	}
}
/** Manages error message providers */
var errorFunction = DefaultErrorFunction;
/** Gets the error function used to generate error messages */
function GetErrorFunction() {
	return errorFunction;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType) {
	ValueErrorType[ValueErrorType["ArrayContains"] = 0] = "ArrayContains";
	ValueErrorType[ValueErrorType["ArrayMaxContains"] = 1] = "ArrayMaxContains";
	ValueErrorType[ValueErrorType["ArrayMaxItems"] = 2] = "ArrayMaxItems";
	ValueErrorType[ValueErrorType["ArrayMinContains"] = 3] = "ArrayMinContains";
	ValueErrorType[ValueErrorType["ArrayMinItems"] = 4] = "ArrayMinItems";
	ValueErrorType[ValueErrorType["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
	ValueErrorType[ValueErrorType["Array"] = 6] = "Array";
	ValueErrorType[ValueErrorType["AsyncIterator"] = 7] = "AsyncIterator";
	ValueErrorType[ValueErrorType["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
	ValueErrorType[ValueErrorType["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
	ValueErrorType[ValueErrorType["BigIntMaximum"] = 10] = "BigIntMaximum";
	ValueErrorType[ValueErrorType["BigIntMinimum"] = 11] = "BigIntMinimum";
	ValueErrorType[ValueErrorType["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
	ValueErrorType[ValueErrorType["BigInt"] = 13] = "BigInt";
	ValueErrorType[ValueErrorType["Boolean"] = 14] = "Boolean";
	ValueErrorType[ValueErrorType["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
	ValueErrorType[ValueErrorType["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
	ValueErrorType[ValueErrorType["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
	ValueErrorType[ValueErrorType["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
	ValueErrorType[ValueErrorType["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
	ValueErrorType[ValueErrorType["Date"] = 20] = "Date";
	ValueErrorType[ValueErrorType["Function"] = 21] = "Function";
	ValueErrorType[ValueErrorType["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
	ValueErrorType[ValueErrorType["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
	ValueErrorType[ValueErrorType["IntegerMaximum"] = 24] = "IntegerMaximum";
	ValueErrorType[ValueErrorType["IntegerMinimum"] = 25] = "IntegerMinimum";
	ValueErrorType[ValueErrorType["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
	ValueErrorType[ValueErrorType["Integer"] = 27] = "Integer";
	ValueErrorType[ValueErrorType["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
	ValueErrorType[ValueErrorType["Intersect"] = 29] = "Intersect";
	ValueErrorType[ValueErrorType["Iterator"] = 30] = "Iterator";
	ValueErrorType[ValueErrorType["Kind"] = 31] = "Kind";
	ValueErrorType[ValueErrorType["Literal"] = 32] = "Literal";
	ValueErrorType[ValueErrorType["Never"] = 33] = "Never";
	ValueErrorType[ValueErrorType["Not"] = 34] = "Not";
	ValueErrorType[ValueErrorType["Null"] = 35] = "Null";
	ValueErrorType[ValueErrorType["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
	ValueErrorType[ValueErrorType["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
	ValueErrorType[ValueErrorType["NumberMaximum"] = 38] = "NumberMaximum";
	ValueErrorType[ValueErrorType["NumberMinimum"] = 39] = "NumberMinimum";
	ValueErrorType[ValueErrorType["NumberMultipleOf"] = 40] = "NumberMultipleOf";
	ValueErrorType[ValueErrorType["Number"] = 41] = "Number";
	ValueErrorType[ValueErrorType["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
	ValueErrorType[ValueErrorType["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
	ValueErrorType[ValueErrorType["ObjectMinProperties"] = 44] = "ObjectMinProperties";
	ValueErrorType[ValueErrorType["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
	ValueErrorType[ValueErrorType["Object"] = 46] = "Object";
	ValueErrorType[ValueErrorType["Promise"] = 47] = "Promise";
	ValueErrorType[ValueErrorType["RegExp"] = 48] = "RegExp";
	ValueErrorType[ValueErrorType["StringFormatUnknown"] = 49] = "StringFormatUnknown";
	ValueErrorType[ValueErrorType["StringFormat"] = 50] = "StringFormat";
	ValueErrorType[ValueErrorType["StringMaxLength"] = 51] = "StringMaxLength";
	ValueErrorType[ValueErrorType["StringMinLength"] = 52] = "StringMinLength";
	ValueErrorType[ValueErrorType["StringPattern"] = 53] = "StringPattern";
	ValueErrorType[ValueErrorType["String"] = 54] = "String";
	ValueErrorType[ValueErrorType["Symbol"] = 55] = "Symbol";
	ValueErrorType[ValueErrorType["TupleLength"] = 56] = "TupleLength";
	ValueErrorType[ValueErrorType["Tuple"] = 57] = "Tuple";
	ValueErrorType[ValueErrorType["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
	ValueErrorType[ValueErrorType["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
	ValueErrorType[ValueErrorType["Uint8Array"] = 60] = "Uint8Array";
	ValueErrorType[ValueErrorType["Undefined"] = 61] = "Undefined";
	ValueErrorType[ValueErrorType["Union"] = 62] = "Union";
	ValueErrorType[ValueErrorType["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));
var ValueErrorsUnknownTypeError = class extends TypeBoxError {
	constructor(schema) {
		super("Unknown type");
		this.schema = schema;
	}
};
function EscapeKey(key) {
	return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined(value) {
	return value !== void 0;
}
var ValueErrorIterator = class {
	constructor(iterator) {
		this.iterator = iterator;
	}
	[Symbol.iterator]() {
		return this.iterator;
	}
	/** Returns the first value error or undefined if no errors */
	First() {
		const next = this.iterator.next();
		return next.done ? void 0 : next.value;
	}
};
function Create(errorType, schema, path, value, errors = []) {
	return {
		type: errorType,
		schema,
		path,
		value,
		message: GetErrorFunction()({
			errorType,
			path,
			schema,
			value,
			errors
		}),
		errors
	};
}
function* FromAny(schema, references, path, value) {}
function* FromArgument(schema, references, path, value) {}
function* FromArray(schema, references, path, value) {
	if (!IsArray(value)) return yield Create(ValueErrorType.Array, schema, path, value);
	if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
	if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
	for (let i = 0; i < value.length; i++) yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
	if (schema.uniqueItems === true && !(function() {
		const set = /* @__PURE__ */ new Set();
		for (const element of value) {
			const hashed = Hash(element);
			if (set.has(hashed)) return false;
			else set.add(hashed);
		}
		return true;
	})()) yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
	if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) return;
	const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
	const containsCount = value.reduce((acc, value, index) => Visit(containsSchema, references, `${path}${index}`, value).next().done === true ? acc + 1 : acc, 0);
	if (containsCount === 0) yield Create(ValueErrorType.ArrayContains, schema, path, value);
	if (IsNumber(schema.minContains) && containsCount < schema.minContains) yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
	if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
}
function* FromAsyncIterator(schema, references, path, value) {
	if (!IsAsyncIterator(value)) yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt(schema, references, path, value) {
	if (!IsBigInt(value)) return yield Create(ValueErrorType.BigInt, schema, path, value);
	if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
	if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
	if (IsDefined(schema.maximum) && !(value <= schema.maximum)) yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
	if (IsDefined(schema.minimum) && !(value >= schema.minimum)) yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
	if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
}
function* FromBoolean(schema, references, path, value) {
	if (!IsBoolean(value)) yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor(schema, references, path, value) {
	yield* Visit(schema.returns, references, path, value.prototype);
}
function* FromDate(schema, references, path, value) {
	if (!IsDate(value)) return yield Create(ValueErrorType.Date, schema, path, value);
	if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
	if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
	if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
	if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
	if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
}
function* FromFunction(schema, references, path, value) {
	if (!IsFunction(value)) yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromImport(schema, references, path, value) {
	const definitions = globalThis.Object.values(schema.$defs);
	const target = schema.$defs[schema.$ref];
	yield* Visit(target, [...references, ...definitions], path, value);
}
function* FromInteger(schema, references, path, value) {
	if (!IsInteger(value)) return yield Create(ValueErrorType.Integer, schema, path, value);
	if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
	if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
	if (IsDefined(schema.maximum) && !(value <= schema.maximum)) yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
	if (IsDefined(schema.minimum) && !(value >= schema.minimum)) yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
	if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
}
function* FromIntersect(schema, references, path, value) {
	let hasError = false;
	for (const inner of schema.allOf) for (const error of Visit(inner, references, path, value)) {
		hasError = true;
		yield error;
	}
	if (hasError) return yield Create(ValueErrorType.Intersect, schema, path, value);
	if (schema.unevaluatedProperties === false) {
		const keyCheck = new RegExp(KeyOfPattern(schema));
		for (const valueKey of Object.getOwnPropertyNames(value)) if (!keyCheck.test(valueKey)) yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
	}
	if (typeof schema.unevaluatedProperties === "object") {
		const keyCheck = new RegExp(KeyOfPattern(schema));
		for (const valueKey of Object.getOwnPropertyNames(value)) if (!keyCheck.test(valueKey)) {
			const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
			if (!next.done) yield next.value;
		}
	}
}
function* FromIterator(schema, references, path, value) {
	if (!IsIterator(value)) yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral(schema, references, path, value) {
	if (!(value === schema.const)) yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever(schema, references, path, value) {
	yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot(schema, references, path, value) {
	if (Visit(schema.not, references, path, value).next().done === true) yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull(schema, references, path, value) {
	if (!IsNull(value)) yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber(schema, references, path, value) {
	if (!TypeSystemPolicy.IsNumberLike(value)) return yield Create(ValueErrorType.Number, schema, path, value);
	if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
	if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
	if (IsDefined(schema.maximum) && !(value <= schema.maximum)) yield Create(ValueErrorType.NumberMaximum, schema, path, value);
	if (IsDefined(schema.minimum) && !(value >= schema.minimum)) yield Create(ValueErrorType.NumberMinimum, schema, path, value);
	if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
}
function* FromObject(schema, references, path, value) {
	if (!TypeSystemPolicy.IsObjectLike(value)) return yield Create(ValueErrorType.Object, schema, path, value);
	if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
	if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
	const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
	const knownKeys = Object.getOwnPropertyNames(schema.properties);
	const unknownKeys = Object.getOwnPropertyNames(value);
	for (const requiredKey of requiredKeys) {
		if (unknownKeys.includes(requiredKey)) continue;
		yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
	}
	if (schema.additionalProperties === false) {
		for (const valueKey of unknownKeys) if (!knownKeys.includes(valueKey)) yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
	}
	if (typeof schema.additionalProperties === "object") for (const valueKey of unknownKeys) {
		if (knownKeys.includes(valueKey)) continue;
		yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
	}
	for (const knownKey of knownKeys) {
		const property = schema.properties[knownKey];
		if (schema.required && schema.required.includes(knownKey)) {
			yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
			if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
		} else if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
	}
}
function* FromPromise(schema, references, path, value) {
	if (!IsPromise(value)) yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord(schema, references, path, value) {
	if (!TypeSystemPolicy.IsRecordLike(value)) return yield Create(ValueErrorType.Object, schema, path, value);
	if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
	if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
	const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
	const regex = new RegExp(patternKey);
	for (const [propertyKey, propertyValue] of Object.entries(value)) if (regex.test(propertyKey)) yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
	if (typeof schema.additionalProperties === "object") {
		for (const [propertyKey, propertyValue] of Object.entries(value)) if (!regex.test(propertyKey)) yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
	}
	if (schema.additionalProperties === false) for (const [propertyKey, propertyValue] of Object.entries(value)) {
		if (regex.test(propertyKey)) continue;
		return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
	}
}
function* FromRef(schema, references, path, value) {
	yield* Visit(Deref(schema, references), references, path, value);
}
function* FromRegExp(schema, references, path, value) {
	if (!IsString(value)) return yield Create(ValueErrorType.String, schema, path, value);
	if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) yield Create(ValueErrorType.StringMinLength, schema, path, value);
	if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) yield Create(ValueErrorType.StringMaxLength, schema, path, value);
	if (!new RegExp(schema.source, schema.flags).test(value)) return yield Create(ValueErrorType.RegExp, schema, path, value);
}
function* FromString(schema, references, path, value) {
	if (!IsString(value)) return yield Create(ValueErrorType.String, schema, path, value);
	if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) yield Create(ValueErrorType.StringMinLength, schema, path, value);
	if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) yield Create(ValueErrorType.StringMaxLength, schema, path, value);
	if (IsString(schema.pattern)) {
		if (!new RegExp(schema.pattern).test(value)) yield Create(ValueErrorType.StringPattern, schema, path, value);
	}
	if (IsString(schema.format)) {
		if (!Has(schema.format)) yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
		else if (!Get(schema.format)(value)) yield Create(ValueErrorType.StringFormat, schema, path, value);
	}
}
function* FromSymbol(schema, references, path, value) {
	if (!IsSymbol(value)) yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral(schema, references, path, value) {
	if (!IsString(value)) return yield Create(ValueErrorType.String, schema, path, value);
	if (!new RegExp(schema.pattern).test(value)) yield Create(ValueErrorType.StringPattern, schema, path, value);
}
function* FromThis(schema, references, path, value) {
	yield* Visit(Deref(schema, references), references, path, value);
}
function* FromTuple(schema, references, path, value) {
	if (!IsArray(value)) return yield Create(ValueErrorType.Tuple, schema, path, value);
	if (schema.items === void 0 && !(value.length === 0)) return yield Create(ValueErrorType.TupleLength, schema, path, value);
	if (!(value.length === schema.maxItems)) return yield Create(ValueErrorType.TupleLength, schema, path, value);
	if (!schema.items) return;
	for (let i = 0; i < schema.items.length; i++) yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
}
function* FromUndefined(schema, references, path, value) {
	if (!IsUndefined(value)) yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion(schema, references, path, value) {
	if (Check(schema, references, value)) return;
	const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit(variant, references, path, value)));
	yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* FromUint8Array(schema, references, path, value) {
	if (!IsUint8Array(value)) return yield Create(ValueErrorType.Uint8Array, schema, path, value);
	if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
	if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
}
function* FromUnknown(schema, references, path, value) {}
function* FromVoid(schema, references, path, value) {
	if (!TypeSystemPolicy.IsVoidLike(value)) yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind(schema, references, path, value) {
	if (!Get$1(schema[Kind])(schema, value)) yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit(schema, references, path, value) {
	const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
	const schema_ = schema;
	switch (schema_[Kind]) {
		case "Any": return yield* FromAny(schema_, references_, path, value);
		case "Argument": return yield* FromArgument(schema_, references_, path, value);
		case "Array": return yield* FromArray(schema_, references_, path, value);
		case "AsyncIterator": return yield* FromAsyncIterator(schema_, references_, path, value);
		case "BigInt": return yield* FromBigInt(schema_, references_, path, value);
		case "Boolean": return yield* FromBoolean(schema_, references_, path, value);
		case "Constructor": return yield* FromConstructor(schema_, references_, path, value);
		case "Date": return yield* FromDate(schema_, references_, path, value);
		case "Function": return yield* FromFunction(schema_, references_, path, value);
		case "Import": return yield* FromImport(schema_, references_, path, value);
		case "Integer": return yield* FromInteger(schema_, references_, path, value);
		case "Intersect": return yield* FromIntersect(schema_, references_, path, value);
		case "Iterator": return yield* FromIterator(schema_, references_, path, value);
		case "Literal": return yield* FromLiteral(schema_, references_, path, value);
		case "Never": return yield* FromNever(schema_, references_, path, value);
		case "Not": return yield* FromNot(schema_, references_, path, value);
		case "Null": return yield* FromNull(schema_, references_, path, value);
		case "Number": return yield* FromNumber(schema_, references_, path, value);
		case "Object": return yield* FromObject(schema_, references_, path, value);
		case "Promise": return yield* FromPromise(schema_, references_, path, value);
		case "Record": return yield* FromRecord(schema_, references_, path, value);
		case "Ref": return yield* FromRef(schema_, references_, path, value);
		case "RegExp": return yield* FromRegExp(schema_, references_, path, value);
		case "String": return yield* FromString(schema_, references_, path, value);
		case "Symbol": return yield* FromSymbol(schema_, references_, path, value);
		case "TemplateLiteral": return yield* FromTemplateLiteral(schema_, references_, path, value);
		case "This": return yield* FromThis(schema_, references_, path, value);
		case "Tuple": return yield* FromTuple(schema_, references_, path, value);
		case "Undefined": return yield* FromUndefined(schema_, references_, path, value);
		case "Union": return yield* FromUnion(schema_, references_, path, value);
		case "Uint8Array": return yield* FromUint8Array(schema_, references_, path, value);
		case "Unknown": return yield* FromUnknown(schema_, references_, path, value);
		case "Void": return yield* FromVoid(schema_, references_, path, value);
		default:
			if (!Has$1(schema_[Kind])) throw new ValueErrorsUnknownTypeError(schema);
			return yield* FromKind(schema_, references_, path, value);
	}
}
/** Returns an iterator for each error in this value. */
function Errors(...args) {
	return new ValueErrorIterator(args.length === 3 ? Visit(args[0], args[1], "", args[2]) : Visit(args[0], [], "", args[1]));
}
//#endregion
//#region node_modules/@scalar/validation/dist/coerce.js
/**
* How many object levels below a union node `scoreUnion` descends before it
* stops scoring child values. Picking a union branch is a local decision, so
* the shape near the union node is what matters. Scoring the whole subtree
* made the cost grow as 2^depth on recursive unions (a few hundred bytes of
* JSON could block the main thread for seconds). It also let a branch win
* just because the value under it happened to be deep.
*
* Three is a safety margin, not a derived minimum. The existing
* branch-selection tests only need the discriminator to be scored, which
* happens at any depth.
*/
var MAX_VALUE_DEPTH = 3;
/**
* How many `lazy` nodes deep one scoring path may go before it returns a
* neutral score. `lazy` is the only way to build an infinite schema, so this
* stops schema cycles that never descend into a value, such as
* `T = lazy(() => union([T, string()]))` scored against `'s'`.
*
* It limits depth, not fan-out. The in-progress guard only tracks objects, so
* a schema cycle that branches over a primitive can still do a lot of work.
* Only a schema author can build one of those, and the OpenAPI and AsyncAPI
* schemas do not contain one.
*/
var MAX_LAZY_DEPTH = 64;
/**
* How many nested `coerceInner` calls one `coerce` call makes before it
* stops and returns the remaining value unchanged. This has to fire before
* the JavaScript stack overflows, or it does nothing. Without it, a deeply
* nested document, or a schema cycle over a primitive such as
* `lazy(() => union([T, string()]))`, throws a `RangeError`.
*
* Measured against the real OpenAPI Schema Object in Node, the stack
* overflows at about 3,200 nested calls. That comes from 6 to 11 calls per
* document level, depending on shape. We stop at roughly a third of that,
* because browsers, web workers and the caller's own frames can leave less
* stack. Schema Objects nested 90 to 165 levels deep still coerce fully.
*/
var MAX_COERCE_DEPTH = 1e3;
var resolveLazy = (schema, lazyCache) => {
	const cached = lazyCache.get(schema);
	if (cached) return cached;
	const resolved = schema.schema();
	lazyCache.set(schema, resolved);
	return resolved;
};
/**
* True when this property schema is only used to discriminate union branches
* (single literal, or a union of literals). No presence bonus when the value
* does not match — avoids ties like `type: literal('a')` vs `type: union([lit('b'), lit('c')])`.
*/
var isDiscriminatorProperty = (schema) => {
	if (schema.type === "optional") return isDiscriminatorProperty(schema.schema);
	if (schema.type === "literal") return true;
	if (schema.type === "union") return schema.schemas.length > 0 && schema.schemas.every(isDiscriminatorProperty);
	return false;
};
/**
* Computes a "score" indicating how well a value matches a schema,
* used for picking the best branch in union coercion.
*
* Higher score means a closer match. Literals and matching object shapes
* are weighted more heavily. Objects are scored by shape/literals;
* arrays/records by structural type; primitives by validation; unions try all branches.
*
* The `scoringCache` tracks `(value, schema)` pairs that are currently being
* scored higher up the call stack. Without it, a recursive lazy schema such as
* `lazy(() => union([object({ child: optional(lazy(() => T)) }), …]))` scored
* against a self-referential value would recurse forever through
* `lazy → union → object → property → lazy → …` and overflow the stack.
*
* On re-entry of a pair we return `1` rather than `0` — a neutral positive
* score consistent with `validateInner` short-circuiting cycles to `true`.
* Markers are removed in `finally` so sibling union branches that share a
* schema reference are scored independently rather than inheriting a stale
* "in cycle" marker.
*
* The marker only stops *nested* re-entry. It does not stop the same pair
* being scored again through a sibling path, so it cannot bound the work on
* its own. Two budgets do that, each checked in the branch that uses it:
* - `valueDepth` counts descents into object properties below the union node.
*   Past {@link MAX_VALUE_DEPTH}, non-discriminator properties score a flat `1`
*   and are not descended into.
* - `lazyDepth` counts `lazy` nodes on the current path, capped at {@link MAX_LAZY_DEPTH}.
*
* Every schema node still runs its own type check at the cap. So an `object`
* schema against a string still scores `0`, and the budgets only cut off
* descent into child values.
*/
var scoreUnion = (schema, value, lazyCache, scoringCache = /* @__PURE__ */ new WeakMap(), valueDepth = 0, lazyDepth = 0) => {
	if (isObject(value) && scoringCache.get(value)?.has(schema)) return 1;
	const trackable = isObject(value);
	if (trackable) {
		const schemas = scoringCache.get(value) ?? /* @__PURE__ */ new Set();
		schemas.add(schema);
		scoringCache.set(value, schemas);
	}
	try {
		if (schema.type === "object") {
			if (!isObject(value)) return 0;
			const keys = Object.keys(schema.properties);
			if (keys.length === 0) return 1;
			return keys.reduce((acc, key) => {
				if (!(key in value)) return acc;
				const propSchema = schema.properties[key];
				const raw = value[key];
				const isDiscriminator = isDiscriminatorProperty(propSchema);
				const base = valueDepth >= MAX_VALUE_DEPTH ? isDiscriminator ? scoreUnion(propSchema, raw, lazyCache, scoringCache, valueDepth, lazyDepth) : 1 : scoreUnion(propSchema, raw, lazyCache, scoringCache, valueDepth + 1, lazyDepth);
				if (isDiscriminator) return acc + (base > 0 ? base * 10 : 0);
				return acc + (base > 0 ? base : 1);
			}, 0);
		}
		if (schema.type === "array") return Array.isArray(value) ? 1 : 0;
		if (schema.type === "record") return isObject(value) ? 1 : 0;
		if (schema.type === "optional") return value === void 0 ? 1 : scoreUnion(schema.schema, value, lazyCache, scoringCache, valueDepth, lazyDepth);
		if (schema.type === "union") return Math.max(...schema.schemas.map((branch) => scoreUnion(branch, value, lazyCache, scoringCache, valueDepth, lazyDepth)));
		if (schema.type === "intersection") {
			if (schema.schemas.length === 0) return 1;
			return schema.schemas.reduce((acc, sub) => acc + scoreUnion(sub, value, lazyCache, scoringCache, valueDepth, lazyDepth), 0);
		}
		if (schema.type === "lazy") {
			if (lazyDepth >= MAX_LAZY_DEPTH) return 1;
			return scoreUnion(resolveLazy(schema, lazyCache), value, lazyCache, scoringCache, valueDepth, lazyDepth + 1);
		}
		if (schema.type === "evaluate") return scoreUnion(schema.schema, schema.expression(value), lazyCache, scoringCache, valueDepth, lazyDepth);
		return validate(schema, value) ? 1 : 0;
	} finally {
		if (trackable) scoringCache.get(value)?.delete(schema);
	}
};
/**
* Records the in-progress `result` for a given `(value, schema)` pair so that
* recursive calls hitting the same pair return the already-allocated result
* instead of recursing forever. Plain objects and arrays are both tracked;
* other values cannot form cycles and are ignored.
*/
var trackCycle = (value, schema, result, cache) => {
	if (isObject(value) || Array.isArray(value)) {
		const schemas = cache.get(value) || /* @__PURE__ */ new Map();
		schemas.set(schema, result);
		cache.set(value, schemas);
	}
};
/**
* Internal coercion implementation. Takes the wide `Schema` union and returns `unknown` so that
* recursive calls do not pay the cost of relating two generic `Static<S>` instantiations, which
* can overflow the type checker now that `LazyStatic` resolves recursive schemas without a depth
* cap. The public `coerce` wrapper preserves the typed surface.
*/
var coerceInner = (schema, value, cache, lazyCache, depth, warningState) => {
	if (depth >= MAX_COERCE_DEPTH) {
		if (!warningState.emitted) {
			warningState.emitted = true;
			console.warn(`[@scalar/validation] coerce stopped at nesting depth ${MAX_COERCE_DEPTH}; deeper values are left as-is.`);
		}
		return value;
	}
	if ((isObject(value) || Array.isArray(value)) && cache.get(value)?.has(schema)) return cache.get(value)?.get(schema);
	if (!schema) return value;
	if (schema.type === "any" || schema.type === "unknown") return value;
	if (schema.type === "function") {
		if (typeof value === "function") return value;
		return () => void 0;
	}
	if (schema.type === "number") {
		if (validate(schema, value)) return value;
		return schema.default ?? 0;
	}
	if (schema.type === "string") {
		if (validate(schema, value)) return value;
		return schema.default ?? "";
	}
	if (schema.type === "boolean") {
		if (validate(schema, value)) return value;
		return schema.default ?? false;
	}
	if (schema.type === "nullable") return null;
	if (schema.type === "notDefined") return;
	if (schema.type === "optional") {
		if (value === void 0) return;
		return coerceInner(schema.schema, value, cache, lazyCache, depth + 1, warningState);
	}
	if (schema.type === "array") {
		if (!Array.isArray(value)) return [];
		const result = new Array(value.length);
		trackCycle(value, schema, result, cache);
		for (let i = 0; i < value.length; i++) result[i] = coerceInner(schema.items, value[i], cache, lazyCache, depth + 1, warningState);
		return result;
	}
	if (schema.type === "record") {
		if (!isObject(value)) return {};
		const result = {};
		trackCycle(value, schema, result, cache);
		for (const key of Object.keys(value)) result[key] = coerceInner(schema.value, value[key], cache, lazyCache, depth + 1, warningState);
		return result;
	}
	if (schema.type === "object") {
		const keys = Object.keys(schema.properties);
		const target = isObject(value) ? value : null;
		const result = {};
		trackCycle(value, schema, result, cache);
		for (const key of keys) {
			const propSchema = schema.properties[key];
			const raw = target?.[key];
			if (propSchema.type === "optional" && raw === void 0) continue;
			result[key] = coerceInner(propSchema, raw, cache, lazyCache, depth + 1, warningState);
		}
		return result;
	}
	if (schema.type === "union") return coerceInner(schema.schemas.reduce((acc, branchSchema) => {
		const score = scoreUnion(branchSchema, value, lazyCache);
		return score > acc.score ? {
			schema: branchSchema,
			score
		} : acc;
	}, {
		schema: schema.schemas[0],
		score: 0
	}).schema, value, cache, lazyCache, depth + 1, warningState);
	if (schema.type === "intersection") return schema.schemas.reduce((acc, subSchema) => Object.assign(acc, coerceInner(subSchema, value, cache, lazyCache, depth + 1, warningState)), {});
	if (schema.type === "literal") return schema.value;
	if (schema.type === "lazy") return coerceInner(resolveLazy(schema, lazyCache), value, cache, lazyCache, depth + 1, warningState);
	if (schema.type === "evaluate") return coerceInner(schema.schema, schema.expression(value), cache, lazyCache, depth + 1, warningState);
	console.warn("Unknown schema type:", schema);
	return value;
};
/**
* Coerces an unknown value toward the static type implied by `schema`. Values that
* pass {@link validate} for that branch are kept; otherwise primitives default to
* `0`, `''`, or `false`, and arrays, records, and objects are built recursively.
* Unions pick the best-matching branch; `evaluate` runs `expression` before the inner schema.
*
* @example
* ```ts
* import { coerce, number, object, string } from '@scalar/validation'
*
* coerce(number(), 42) // 42
* coerce(number(), 'nope') // 0 — invalid number uses default
* coerce(object({ id: number(), name: string() }), { id: '1', name: 'Ada' }) // { id: 0, name: 'Ada' }
* ```
*
* The optional `cache` argument tracks visited object–schema pairs to stop infinite recursion
* on cyclic graphs; callers normally omit it.
*/
var coerce = (schema, value, cache = /* @__PURE__ */ new WeakMap(), lazyCache = /* @__PURE__ */ new WeakMap()) => coerceInner(schema, value, cache, lazyCache, 0, { emitted: false });
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconArrowUp.vue.script.js
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$2 = { key: 1 };
var _hoisted_3$2 = { key: 2 };
var _hoisted_4$2 = { key: 3 };
var _hoisted_5$2 = { key: 4 };
var _hoisted_6$2 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconArrowUp.js
var ScalarIconArrowUp_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconArrowUp",
	props: {
		label: {},
		weight: {}
	},
	setup(__props) {
		const { bind, weight } = useScalarIcon(__props);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", mergeProps({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 256 256",
				fill: "currentColor"
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$2, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$2, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M200,112H56l72-72Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$2, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$2, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$2, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$2, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconLockSimple.vue.script.js
var _hoisted_1$1 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var _hoisted_3$1 = { key: 2 };
var _hoisted_4$1 = { key: 3 };
var _hoisted_5$1 = { key: 4 };
var _hoisted_6$1 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconLockSimple.js
var ScalarIconLockSimple_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconLockSimple",
	props: {
		label: {},
		weight: {}
	},
	setup(__props) {
		const { bind, weight } = useScalarIcon(__props);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("svg", mergeProps({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 256 256",
				fill: "currentColor"
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$1, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$1, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$1, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$1, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$1, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$1, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/hooks/use-agent.js
var AGENT_CONTEXT_SYMBOL = Symbol();
/**
* Module-level ref so useAgentContext() can resolve context even when inject fails
* (e.g. async component boundary or mount order). Set when ApiReference calls useAgent().
*/
var agentStateRef = ref(null);
/**
* Hook for agent visibility and enabled state.
* Call from the API Reference root (e.g. ApiReference.vue) with options to create the state, then provide it so descendants can inject it.
*
* Returns:
* - showAgent: whether the agent panel is visible
* - agentEnabled: whether the agent is enabled
* - openAgent, closeAgent, toggleAgent: imperative controls
*/
function useAgent(options) {
	const showAgent = ref(false);
	const prefilledMessage = ref("");
	const agentEnabled = options.agentEnabled ?? computed(() => isLocalUrl(window.location.href));
	const openAgent = (message) => {
		prefilledMessage.value = message ?? "";
		showAgent.value = true;
	};
	const closeAgent = () => {
		showAgent.value = false;
		prefilledMessage.value = "";
	};
	const toggleAgent = () => {
		showAgent.value = !showAgent.value;
		if (!showAgent.value) prefilledMessage.value = "";
	};
	const state = {
		showAgent,
		agentEnabled,
		prefilledMessage,
		openAgent,
		closeAgent,
		toggleAgent
	};
	agentStateRef.value = state;
	return state;
}
/**
* Inject the agent context provided by ApiReference.
* Falls back to module-level state when inject is undefined (e.g. async boundary or mount order).
* Use in descendant components (e.g. AskAgentButton) to open the agent or check if it is enabled.
*
* Returns a computed ref; use v-if="agentContext?.agentEnabled" so the button only renders when context exists and agent is enabled.
*/
function useAgentContext() {
	const injected = inject(AGENT_CONTEXT_SYMBOL, void 0);
	return computed(() => injected ?? agentStateRef.value ?? void 0);
}
//#endregion
//#region node_modules/@scalar/helpers/dist/object/local-storage.js
/**
* localStorage keys for all reference resources
* to ensure we do not have any conflicts
*/
var REFERENCE_LS_KEYS = {
	/**
	* Store the selected client as a string in localStorage
	*/
	SELECTED_CLIENT: "scalar-reference-selected-client-v2",
	/**
	* Store the auth as a string in localStorage
	*/
	AUTH: "scalar-reference-auth"
};
/** SSR safe alias for localStorage */
var safeLocalStorage = () => typeof window === "undefined" ? {
	getItem: () => null,
	setItem: () => null,
	removeItem: () => null
} : localStorage;
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/is-json-object.js
/**
* Determines if a string represents a valid JSON object (i.e., a plain object, not an array, primitive, or null).
* The function first checks if the string appears to start with an opening curly brace (ignoring leading whitespace),
* which is a quick heuristic to rule out arrays, primitives, and most invalid JSON. If this check passes,
* it attempts to parse the string with JSON.parse. The result is then checked to ensure it is a plain object
* (not an array, null, or primitive) using the isObject utility.
*
* @param value - The string to evaluate
* @returns true if the string is valid JSON and parses to a plain object, false otherwise
*
* @example
* isJsonObject('{"foo": "bar"}') // true
* isJsonObject('[1,2,3]') // false
* isJsonObject('not json') // false
* isJsonObject('42') // false
*/
function isJsonObject(value) {
	if (!/^\s*(\{)/.test(value.slice(0, 500))) return false;
	try {
		const val = JSON.parse(value);
		return isObject$1(val);
	} catch {
		return false;
	}
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/is-yaml.js
/**
* Checks if a string appears to be YAML content.
* This function uses a simple heuristic: it looks for a line that starts with an optional dash,
* followed by a key (alphanumeric or dash), a colon, and a value, and then at least one more line.
* This is not a full YAML parser, but works for basic detection.
*
* @param value - The string to check
* @returns true if the string looks like YAML, false otherwise
*
* @example
* isYaml('openapi: 3.0.0\ninfo:\n  title: Example') // true
* isYaml('{"openapi": "3.0.0", "info": {"title": "Example"}}') // false
* isYaml('- name: value\n- name: value2') // true
* isYaml('type: object') // false (only one line)
*/
function isYaml(value) {
	return /^\s*(?:-\s*)?[\w\-]+\s*:\s*.+\n.*/.test(value);
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/is-file-path.js
/**
* Checks if a string represents a file path by ensuring it's not a remote URL,
* YAML content, or JSON content.
*
* @param value - The string to check
* @returns true if the string appears to be a file path, false otherwise
* @example
* ```ts
* isFilePath('./schemas/user.json') // true
* isFilePath('https://example.com/schema.json') // false
* isFilePath('{"type": "object"}') // false
* isFilePath('type: object') // false
* ```
*/
function isFilePath(value) {
	return !isHttpUrl(value) && !isYaml(value) && !isJsonObject(value);
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/unescape-json-pointer.js
/**
* Unescape JSON pointer
*
* Examples:
* /foo~1bar~0baz -> /foo/bar~baz
*/
function unescapeJsonPointer(uri) {
	return decodeURI(uri.replace(/~1/g, "/").replace(/~0/g, "~"));
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/get-segments-from-path.js
/**
* Translate `/paths/~1test` to `['paths', '/test']`
*/
function getSegmentsFromPath(path) {
	return path.split("/").slice(1).map(unescapeJsonPointer);
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/set-value-at-path.js
/**
* Sets a value at a specified path in an object, creating intermediate objects/arrays as needed.
* This function traverses the object structure and creates any missing intermediate objects
* or arrays based on the path segments. If the next segment is a numeric string, it creates
* an array instead of an object.
*
* ⚠️ Warning: Be careful with object keys that look like numbers (e.g. "123") as this function
* will interpret them as array indices and create arrays instead of objects. If you need to
* use numeric-looking keys, consider prefixing them with a non-numeric character.
*
* @param obj - The target object to set the value in
* @param path - The JSON pointer path where the value should be set
* @param value - The value to set at the specified path
* @throws {Error} If attempting to set a value at the root path ('')
*
* @example
* const obj = {}
* setValueAtPath(obj, '/foo/bar/0', 'value')
* // Result:
* // {
* //   foo: {
* //     bar: ['value']
* //   }
* // }
*
* @example
* const obj = { existing: { path: 'old' } }
* setValueAtPath(obj, '/existing/path', 'new')
* // Result:
* // {
* //   existing: {
* //     path: 'new'
* //   }
* // }
*
* @example
* // ⚠️ Warning: This will create an array instead of an object with key "123"
* setValueAtPath(obj, '/foo/123/bar', 'value')
* // Result:
* // {
* //   foo: [
* //     undefined,
* //     undefined,
* //     undefined,
* //     { bar: 'value' }
* //   ]
* // }
*/
function setValueAtPath(obj, path, value) {
	if (path === "") throw new Error("Cannot set value at root ('') pointer");
	const parts = getSegmentsFromPath(path);
	parts.forEach((part) => preventPollution(part));
	let current = obj;
	for (let i = 0; i < parts.length; i++) {
		const key = parts[i];
		const isLast = i === parts.length - 1;
		const nextKey = parts[i + 1];
		const shouldBeArray = /^\d+$/.test(nextKey ?? "");
		if (isLast) current[key] = value;
		else {
			if (!(key in current) || typeof current[key] !== "object") current[key] = shouldBeArray ? [] : {};
			current = current[key];
		}
	}
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/to-relative-path.js
/**
* Converts an input path or URL to a relative path based on the provided base.
* Handles both remote URLs and local file system paths.
* - If both input and base are remote URLs and share the same origin, computes the relative pathname.
* - If base is a remote URL but input is local, returns a remote URL with a relative pathname.
* - If input is a remote URL but base is local, returns input as is.
* - Otherwise, computes the relative path between two local paths.
*/
var toRelativePath = (input, base) => {
	if (URL.canParse(input) && !isHttpUrl(input) && !/^[a-z]:[\\/]/i.test(input)) return input;
	if (isHttpUrl(input) && isHttpUrl(base)) {
		const inputUrl = new URL(input);
		const baseUrl = new URL(base);
		if (inputUrl.origin !== baseUrl.origin) return input;
		const baseDir = baseUrl.pathname.endsWith("/") ? baseUrl.pathname : posix.dirname(baseUrl.pathname);
		const inputPath = posix.posix.resolve("/", inputUrl.pathname);
		const relativePath = posix.posix.relative(baseDir, inputPath);
		const relativeUri = `${relativePath}${relativePath && inputUrl.pathname.endsWith("/") ? "/" : ""}${inputUrl.search}${inputUrl.hash}`;
		return new URL(relativeUri, base).href === inputUrl.href ? relativeUri : input;
	}
	if (isHttpUrl(base)) {
		const baseUrl = new URL(base);
		const baseDir = posix.dirname(posix.posix.resolve("/", baseUrl.pathname));
		baseUrl.pathname = posix.posix.relative(baseDir, posix.posix.resolve("/", input));
		return baseUrl.toString();
	}
	if (isHttpUrl(input)) return input;
	const baseDir = base.endsWith("/") ? posix.resolve(base) : posix.dirname(posix.resolve(base));
	const inputPath = posix.resolve(input);
	return posix.relative(baseDir, inputPath);
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/bundle/document-references.js
/**
* Indexes complete documents before following their references. A declared identity
* can point to content already in memory even when that URI cannot be fetched.
*/
var documentReferences = (externalDocumentsKey, resolveDocument) => {
	const identities = /* @__PURE__ */ new Map();
	const resources = /* @__PURE__ */ new Map();
	const origins = /* @__PURE__ */ new WeakMap();
	const bundledResources = /* @__PURE__ */ new Map();
	const register = (document, retrievalUri, path = []) => {
		const identity = resolveDocument?.(document, retrievalUri);
		const base = identity === void 0 ? retrievalUri : resolveReferencePath(retrievalUri, identity.baseUri);
		if (identity !== void 0) identities.set(document, {
			...identity,
			baseUri: base
		});
		const resource = {
			value: document,
			path,
			schema: false,
			embedded: path.length > 0,
			document,
			documentPath: path
		};
		resources.set(retrievalUri, resource);
		resources.set(base, resource);
		if (path.length > 1) bundledResources.set(path[1], resource);
		const visited = /* @__PURE__ */ new WeakSet();
		const visit = (value, origin, location, inheritedIdentifier = "") => {
			if (value === null || typeof value !== "object" || visited.has(value)) return;
			visited.add(value);
			const id = getId(value);
			const identifier = id ?? inheritedIdentifier;
			const current = id === void 0 ? origin : resolveReferencePath(origin, id);
			origins.set(value, current);
			const anchor = isObject$1(value) && typeof value.$anchor === "string" ? value.$anchor : void 0;
			if (id !== void 0 || anchor !== void 0) {
				const schemaResource = {
					value,
					path: location,
					schema: true,
					identifier,
					embedded: path.length > 0,
					document,
					documentPath: path
				};
				if (id !== void 0) resources.set(current, schemaResource);
				if (anchor !== void 0) resources.set(`${current}#${anchor}`, schemaResource);
			}
			for (const [key, child] of Object.entries(value)) if (key !== externalDocumentsKey) visit(child, current, [...location, key], identifier);
		};
		visit(document, base, path);
	};
	return {
		identity: (document) => identities.get(document),
		register,
		isSchemaResource: (uri) => resources.get(uri)?.schema === true,
		origin: (node) => origins.get(node),
		resolve: (ref, base) => {
			const [prefix, fragment = ""] = ref.split("#", 2);
			const uri = prefix ? resolveReferencePath(base, prefix) : base;
			const pointer = fragment.startsWith("/") ? getSegmentsFromPath(fragment) : [];
			const bundled = (!prefix || resources.get(uri)?.path.length === 0) && pointer[0] === externalDocumentsKey ? bundledResources.get(pointer[1]) : void 0;
			const resource = bundled ?? resources.get(fragment && !fragment.startsWith("/") ? `${uri}#${fragment}` : uri);
			if (!resource) return;
			const segments = bundled ? pointer.slice(2) : pointer;
			const location = [...resource.path, ...segments];
			const value = getValueByPath(resource.value, segments).value;
			const isUnresolved = value === void 0;
			const isLocalSchemaReference = resource.schema && !prefix;
			const isDeclaredRootSchemaReference = !resource.embedded && resource.schema && Boolean(prefix) && prefix === resource.identifier;
			const isLocalRootDocumentReference = !resource.embedded && !resource.schema && !prefix;
			return {
				path: location.map(escapeJsonPointer).join("/"),
				value,
				document: resource.document,
				documentPath: resource.documentPath,
				preserveReference: isUnresolved || isLocalSchemaReference || isDeclaredRootSchemaReference || isLocalRootDocumentReference
			};
		}
	};
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/bundle/value-generator.js
/**
* Generates a short hash from a string value using xxhash.
*
* This function is used to create unique identifiers for external references
* while keeping the hash length manageable. It uses xxhash-wasm instead of
* crypto.subtle because crypto.subtle is only available in secure contexts (HTTPS) or on localhost.
* Returns the first 7 characters of the hash string.
* If the hash would be all numbers, it ensures at least one letter is included.
*
* @param value - The string to hash
* @returns A Promise that resolves to a 7-character hexadecimal hash with at least one letter
* @example
* // Returns "2ae91d7"
* getHash("https://example.com/schema.json")
*/
function getHash(value) {
	const hash = generateHash(value).substring(0, 7);
	return hash.match(/^\d+$/) ? "a" + hash.substring(1) : hash;
}
/**
* Generates a unique compressed value for a string, handling collisions by recursively compressing
* until a unique value is found. This is used to create unique identifiers for external
* references in the bundled OpenAPI document.
*
* @param compress - Function that generates a compressed value from a string
* @param value - The original string value to compress
* @param compressedToValue - Object mapping compressed values to their original values
* @param prevCompressedValue - Optional previous compressed value to use as input for generating a new value
* @param depth - Current recursion depth to prevent infinite loops
* @returns A unique compressed value that doesn't conflict with existing values
*
* @example
* const valueMap = {}
* // First call generates compressed value for "example.com/schema.json"
* const value1 = await generateUniqueValue(compress, "example.com/schema.json", valueMap)
* // Returns something like "2ae91d7"
*
* // Second call with same value returns same compressed value
* const value2 = await generateUniqueValue(compress, "example.com/schema.json", valueMap)
* // Returns same value as value1
*
* // Call with different value generates new unique compressed value
* const value3 = await generateUniqueValue(compress, "example.com/other.json", valueMap)
* // Returns different value like "3bf82e9"
*/
async function generateUniqueValue(compress, value, compressedToValue, prevCompressedValue, depth = 0) {
	if (depth >= 100) throw "Can not generate unique compressed values";
	const compressedValue = await compress(prevCompressedValue ?? value);
	if (compressedToValue[compressedValue] !== void 0 && compressedToValue[compressedValue] !== value) return generateUniqueValue(compress, value, compressedToValue, compressedValue, depth + 1);
	compressedToValue[compressedValue] = value;
	return compressedValue;
}
/**
* Factory function that creates a value generator with caching capabilities.
* The generator maintains a bidirectional mapping between original values and their compressed forms.
*
* @param compress - Function that generates a compressed value from a string
* @param compressedToValue - Initial mapping of compressed values to their original values
* @returns An object with a generate method that produces unique compressed values
*
* @example
* const compress = (value) => value.substring(0, 6) // Simple compression example
* const initialMap = { 'abc123': 'example.com/schema.json' }
* const generator = uniqueValueGeneratorFactory(compress, initialMap)
*
* // Generate compressed value for new string
* const compressed = await generator.generate('example.com/other.json')
* // Returns something like 'example'
*
* // Generate compressed value for existing string
* const cached = await generator.generate('example.com/schema.json')
* // Returns 'abc123' from cache
*/
var uniqueValueGeneratorFactory = (compress, compressedToValue) => {
	const valueToCompressed = Object.fromEntries(Object.entries(compressedToValue).map(([key, value]) => [value, key]));
	return { 
	/**
	* Generates a unique compressed value for the given input string.
	* First checks if a compressed value already exists in the cache.
	* If not, generates a new unique compressed value and stores it in the cache.
	*
	* @param value - The original string value to compress
	* @returns A Promise that resolves to the compressed string value
	*
	* @example
	* const generator = uniqueValueGeneratorFactory(compress, {})
	* const compressed = await generator.generate('example.com/schema.json')
	* // Returns a unique compressed value like 'example'
	*/
generate: async (value) => {
		const cache = valueToCompressed[value];
		if (cache) return cache;
		const generatedValue = await generateUniqueValue(compress, value, compressedToValue);
		const compressedValue = generatedValue.match(/^\d+$/) ? `a${generatedValue}` : generatedValue;
		valueToCompressed[value] = compressedValue;
		return compressedValue;
	} };
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/bundle/bundle.js
/** Type guard to check if a value is an object with a $ref property */
var hasRef = (value) => isObject$1(value) && "$ref" in value && typeof value["$ref"] === "string";
/**
* Checks if a string is a local reference (starts with #)
* @param value - The reference string to check
* @returns true if the string is a local reference, false otherwise
* @example
* ```ts
* isLocalRef('#/components/schemas/User') // true
* isLocalRef('https://example.com/schema.json') // false
* isLocalRef('./local-schema.json') // false
* ```
*/
function isLocalRef(value) {
	return value.startsWith("#");
}
/**
* Resolves a string by finding and executing the appropriate plugin.
* @param value - The string to resolve (URL, file path, etc)
* @param plugins - Array of plugins that can handle different types of strings
* @returns A promise that resolves to either the content or an error result
* @example
* // Using a URL plugin
* await resolveContents('https://example.com/schema.json', [urlPlugin])
* // Using a file plugin
* await resolveContents('./schemas/user.json', [filePlugin])
* // No matching plugin returns { ok: false }
* await resolveContents('#/components/schemas/User', [urlPlugin, filePlugin])
*/
function resolveContents(value, plugins) {
	const plugin = plugins.find((p) => p.validate(value));
	if (plugin) return plugin.exec(value);
	return Promise.resolve({ ok: false });
}
/**
* Prefixes an internal JSON reference with a given path prefix.
* Takes a local reference (starting with #) and prepends the provided prefix segments.
*
* @param input - The internal reference string to prefix (must start with #)
* @param prefix - Array of path segments to prepend to the reference
* @returns The prefixed reference string
* @throws Error if input is not a local reference
* @example
* prefixInternalRef('#/components/schemas/User', ['definitions'])
* // Returns: '#/definitions/components/schemas/User'
*/
function prefixInternalRef(input, prefix) {
	if (!isLocalRef(input)) throw "Please provide an internal ref";
	return `#/${prefix.map(escapeJsonPointer).join("/")}${input.substring(1)}`;
}
/**
* Resolves and copies referenced values from a source document to a target document.
* This function traverses the document and copies referenced values to the target document,
* while tracking processed references to avoid duplicates. It only processes references
* that belong to the same external document.
*
* @param targetDocument - The document to copy referenced values to
* @param sourceDocument - The source document containing the references
* @param referencePath - The JSON pointer path to the reference
* @param externalRefsKey - The key used for external references (e.g. 'x-ext')
* @param documentKey - The key identifying the external document
* @param bundleLocalRefs - Also bundles the local refs
* @param processedNodes - Set of already processed nodes to prevent duplicates
* @example
* ```ts
* const source = {
*   components: {
*     schemas: {
*       User: {
*         $ref: '#/x-ext/users~1schema/definitions/Person'
*       }
*     }
*   }
* }
*
* const target = {}
* resolveAndCopyReferences(
*   target,
*   source,
*   '/components/schemas/User',
*   'x-ext',
*   'users/schema'
* )
* // Result: target will contain the User schema with resolved references
* ```
*/
var resolveAndCopyReferences = (targetDocument, sourceDocument, referencePath, externalRefsKey, documentKey, bundleLocalRefs = false, processedNodes = /* @__PURE__ */ new Set(), documentMetadata = {}) => {
	const referencedValue = getValueByPath(sourceDocument, getSegmentsFromPath(referencePath)).value;
	if (processedNodes.has(referencedValue)) return;
	processedNodes.add(referencedValue);
	const segments = getSegmentsFromPath(referencePath);
	setValueAtPath(targetDocument, referencePath, segments.length === 2 && isObject$1(referencedValue) && Object.keys(documentMetadata).length > 0 ? {
		...referencedValue,
		...documentMetadata
	} : referencedValue);
	for (let length = 2; length < segments.length; length++) {
		const ancestorPath = segments.slice(0, length);
		const ancestor = getValueByPath(sourceDocument, ancestorPath).value;
		if (!isObject$1(ancestor)) continue;
		if (length === 2) for (const [key, value] of Object.entries(documentMetadata)) setValueAtPath(targetDocument, `/${[...ancestorPath, key].map(escapeJsonPointer).join("/")}`, value);
		if (typeof ancestor.$id === "string") setValueAtPath(targetDocument, `/${[...ancestorPath, "$id"].map(escapeJsonPointer).join("/")}`, ancestor.$id);
	}
	const traverse = (node) => {
		if (!node || typeof node !== "object") return;
		if ("$ref" in node && typeof node["$ref"] === "string") {
			if (node["$ref"].startsWith(`#/${externalRefsKey}/${escapeJsonPointer(documentKey)}`)) resolveAndCopyReferences(targetDocument, sourceDocument, node["$ref"].substring(1), externalRefsKey, documentKey, bundleLocalRefs, processedNodes, documentMetadata);
			else if (bundleLocalRefs) resolveAndCopyReferences(targetDocument, sourceDocument, node["$ref"].substring(1), externalRefsKey, documentKey, bundleLocalRefs, processedNodes, documentMetadata);
		}
		for (const value of Object.values(node)) traverse(value);
	};
	traverse(referencedValue);
};
/**
* Extension keys used for bundling external references in OpenAPI documents.
* These custom extensions help maintain the structure and traceability of bundled documents.
*/
var extensions = {
	/**
	* Custom OpenAPI extension key used to store external references.
	* This key will contain all bundled external documents.
	* The x-ext key is used to maintain a clean separation between the main
	* OpenAPI document and its bundled external references.
	*/
	externalDocuments: "x-ext",
	/**
	* Custom OpenAPI extension key used to maintain a mapping between
	* hashed keys and their original URLs in x-ext.
	* This mapping is essential for tracking the source of bundled references
	*/
	externalDocumentsMappings: "x-ext-urls"
};
/**
* Bundles an OpenAPI specification by resolving all external references.
* This function traverses the input object recursively and embeds external $ref
* references into an x-ext section. External references can be URLs or local files.
* The original $refs are updated to point to their embedded content in the x-ext section.
* If the input is an object, it will be modified in place by adding an x-ext
* property to store resolved external references.
*
* @param input - The OpenAPI specification to bundle. Can be either an object or string.
*                If a string is provided, it will be resolved using the provided plugins.
*                If no plugin can process the input, the onReferenceError hook will be invoked
*                and an error will be emitted to the console.
* @param config - Configuration object containing plugins and options for bundling OpenAPI specifications
* @returns A promise that resolves to the bundled specification with all references embedded
* @example
* // Example with object input
* const spec = {
*   paths: {
*     '/users': {
*       $ref: 'https://example.com/schemas/users.yaml'
*     }
*   }
* }
*
* const bundled = await bundle(spec, {
*   plugins: [fetchUrls()],
*   treeShake: true,
*   urlMap: true,
*   hooks: {
*     onResolveStart: (ref) => console.log('Resolving:', ref.$ref),
*     onResolveSuccess: (ref) => console.log('Resolved:', ref.$ref),
*     onResolveError: (ref) => console.log('Failed to resolve:', ref.$ref)
*   }
* })
* // Result:
* // {
* //   paths: {
* //     '/users': {
* //       $ref: '#/x-ext/abc123'
* //     }
* //   },
* //   'x-ext': {
* //     'abc123': {
* //       // Resolved content from users.yaml
* //     }
* //   },
* //   'x-ext-urls': {
* //     'https://example.com/schemas/users.yaml': 'abc123'
* //   }
* // }
*
* // Example with URL input
* const bundledFromUrl = await bundle('https://example.com/openapi.yaml', {
*   plugins: [fetchUrls()],
*   treeShake: true,
*   urlMap: true,
*   hooks: {
*     onResolveStart: (ref) => console.log('Resolving:', ref.$ref),
*     onResolveSuccess: (ref) => console.log('Resolved:', ref.$ref),
*     onResolveError: (ref) => console.log('Failed to resolve:', ref.$ref)
*   }
* })
* // The function will first fetch the OpenAPI spec from the URL,
* // then bundle all its external references into the x-ext section
*/
async function bundle(input, config) {
	config.externalDocumentsKey = config.externalDocumentsKey ?? extensions.externalDocuments;
	config.externalDocumentsMappingsKey = config.externalDocumentsMappingsKey ?? extensions.externalDocumentsMappings;
	const cache = config.cache ?? /* @__PURE__ */ new Map();
	const loaderPlugins = config.plugins.filter((it) => it.type === "loader");
	const lifecyclePlugin = config.plugins.filter((it) => it.type === "lifecycle");
	/**
	* Resolves the input value by either returning it directly if it's not a string,
	* or attempting to resolve it using the provided plugins if it is a string.
	* @returns The resolved input data or throws an error if resolution fails
	*/
	const resolveInput = async () => {
		if (typeof input !== "string") return input;
		const result = await resolveContents(input, loaderPlugins);
		if (result.ok && typeof result.data === "object") return result.data;
		throw new Error("Failed to resolve input: Please provide a valid string value or pass a loader to process the input");
	};
	const rawSpecification = await resolveInput();
	const documentRoot = config.root ?? rawSpecification;
	const isPartialBundling = config.root !== void 0 && config.root !== rawSpecification || config.depth !== void 0;
	const processedNodes = config.visitedNodes ?? /* @__PURE__ */ new Set();
	const getDefaultOrigin = () => {
		if (config.origin) return config.origin;
		if (typeof input !== "string") return "/";
		if (isHttpUrl(input) || isFilePath(input)) return input;
		return "/";
	};
	const references = documentReferences(config.externalDocumentsKey, (document, retrievalUri) => {
		for (const resolver of [config.hooks?.resolveDocument, ...lifecyclePlugin.map((plugin) => plugin.resolveDocument)]) {
			const identity = resolver?.(document, retrievalUri);
			if (identity !== void 0) return identity;
		}
	});
	references.register(documentRoot, getDefaultOrigin());
	const defaultOrigin = references.origin(documentRoot) ?? getDefaultOrigin();
	const hasRootIdentity = references.identity(documentRoot) !== void 0 || getId(documentRoot) !== void 0;
	const referenceToRoot = (pointer, sourceOrigin) => {
		return hasRootIdentity && references.isSchemaResource(sourceOrigin) && sourceOrigin !== defaultOrigin ? `${defaultOrigin}${pointer}` : pointer;
	};
	if (documentRoot[config.externalDocumentsMappingsKey] === void 0) documentRoot[config.externalDocumentsMappingsKey] = {};
	const { generate } = uniqueValueGeneratorFactory(config.compress ?? getHash, documentRoot[config.externalDocumentsMappingsKey]);
	const storedDocuments = documentRoot[config.externalDocumentsKey];
	if (isObject$1(storedDocuments)) for (const [key, document] of Object.entries(storedDocuments)) {
		const retrievalUri = resolveReferencePath(defaultOrigin, documentRoot[config.externalDocumentsMappingsKey][key] ?? key);
		references.register(document, retrievalUri, [config.externalDocumentsKey, key]);
	}
	for (const [uri, pending] of cache) {
		const result = await pending;
		if (result.ok) {
			const retrievalUri = resolveReferencePath(defaultOrigin, uri);
			const key = await generate(toRelativePath(retrievalUri, defaultOrigin));
			references.register(result.data, retrievalUri, [config.externalDocumentsKey, key]);
		}
	}
	/**
	* Executes lifecycle hooks defined both in the bundler configuration and any extended lifecycle plugins.
	* This utility function ensures that all relevant hooks for a given event type are called in order:
	* - First, the hook directly provided via the config (if present)
	* - Then, all matching hooks from registered lifecycle plugins (if present)
	*
	* Hooks are awaited in sequence for the given event type and argument list.
	*
	* @param type The hook event type, corresponding to a key of Config['hooks'].
	* @param args Arguments to pass to the hook function, matching HookFn<T>.
	*/
	const executeHooks = async (type, ...args) => {
		const hook = config.hooks?.[type];
		if (hook) await hook(...args);
		for (const plugin of lifecyclePlugin) {
			const pluginHook = plugin[type];
			if (pluginHook) await pluginHook(...args);
		}
	};
	const bundler = async (root, origin = defaultOrigin, isChunkParent = false, depth = 0, currentPath = [], parent = null, referencedFromPath) => {
		if (config.depth !== void 0 && depth > config.depth) return;
		if (!isObject$1(root) && !Array.isArray(root)) return;
		if (processedNodes.has(root)) return;
		processedNodes.add(root);
		const id = getId(root);
		const nodeOrigin = references.origin(root) ?? (id ? resolveReferencePath(origin, id) : origin);
		const context = {
			path: currentPath,
			referencedFromPath,
			resolutionCache: cache,
			parentNode: parent,
			rootNode: documentRoot,
			loaders: loaderPlugins,
			origin: nodeOrigin
		};
		await executeHooks("onBeforeNodeProcess", root, context);
		if (hasRef(root)) {
			const ref = root["$ref"];
			const isChunk = "$global" in root && typeof root["$global"] === "boolean" && root["$global"];
			const local = references.resolve(ref, nodeOrigin);
			const localRef = local?.path;
			if (localRef !== void 0) {
				const preserveRootResourceReference = !hasRootIdentity && local.document === documentRoot && references.isSchemaResource(nodeOrigin) && nodeOrigin !== defaultOrigin;
				if (!local.preserveReference && !preserveRootResourceReference) root.$ref = referenceToRoot(localRef ? `#/${localRef}` : "#", nodeOrigin);
				if (isPartialBundling) {
					const segments = getSegmentsFromPath(`/${localRef}`);
					const parent = segments.length > 0 ? getValueByPath(documentRoot, segments.slice(0, -1)).value : void 0;
					const targetValue = {
						value: local.value,
						context: isObject$1(local.value) ? references.origin(local.value) : nodeOrigin
					};
					await bundler(targetValue.value, targetValue.context || defaultOrigin, isChunkParent, depth + 1, segments, parent, referencedFromPath);
				}
				if (local.documentPath.length > 0) {
					const origin = isObject$1(local.document) || Array.isArray(local.document) ? references.origin(local.document) : nodeOrigin;
					await bundler(local.document, origin, isChunkParent, depth + 1, local.documentPath);
					if (config.treeShake) {
						const [key, documentKey] = local.documentPath;
						resolveAndCopyReferences(documentRoot, { [key]: { [documentKey]: local.document } }, `/${localRef}`, key, documentKey, false, /* @__PURE__ */ new Set(), references.identity(local.document)?.metadata);
					} else {
						const metadata = references.identity(local.document)?.metadata;
						setValueAtPath(documentRoot, `/${local.documentPath.map(escapeJsonPointer).join("/")}`, isObject$1(local.document) && metadata ? {
							...local.document,
							...metadata
						} : local.document);
					}
				}
				await executeHooks("onAfterNodeProcess", root, context);
				return;
			}
			const [prefix, path = ""] = ref.split("#", 2);
			const resolvedPath = resolveReferencePath(nodeOrigin, prefix);
			const relativePath = toRelativePath(resolvedPath, defaultOrigin);
			const compressedPath = await generate(relativePath);
			const seen = cache.has(relativePath);
			if (!seen) cache.set(relativePath, resolveContents(resolvedPath, loaderPlugins));
			await executeHooks("onResolveStart", root);
			const result = await cache.get(relativePath);
			if (result.ok) {
				if (!seen) {
					if (!isChunk) references.register(result.data, resolvedPath, [config.externalDocumentsKey, compressedPath]);
					await bundler(result.data, isChunk ? origin : resolvedPath, isChunk, depth + 1, [config.externalDocumentsKey, compressedPath], null, referencedFromPath ? [...referencedFromPath, ...currentPath.slice(2)] : currentPath);
					setValueAtPath(documentRoot, `/${config.externalDocumentsMappingsKey}/${escapeJsonPointer(compressedPath)}`, relativePath);
				}
				if (config.treeShake === true) resolveAndCopyReferences(documentRoot, { [config.externalDocumentsKey]: { [compressedPath]: result.data } }, prefixInternalRef(`#${path}`, [config.externalDocumentsKey, compressedPath]).substring(1), config.externalDocumentsKey, compressedPath, false, /* @__PURE__ */ new Set(), references.identity(result.data)?.metadata);
				else if (!seen) {
					const metadata = references.identity(result.data)?.metadata;
					setValueAtPath(documentRoot, `/${config.externalDocumentsKey}/${compressedPath}`, isObject$1(result.data) && metadata ? {
						...result.data,
						...metadata
					} : result.data);
				}
				root.$ref = referenceToRoot(prefixInternalRef(`#${path}`, [config.externalDocumentsKey, compressedPath]), nodeOrigin);
				await executeHooks("onResolveSuccess", root);
				await executeHooks("onAfterNodeProcess", root, context);
				return;
			}
			await executeHooks("onResolveError", root);
			await executeHooks("onAfterNodeProcess", root, context);
			return console.warn(`Failed to resolve external reference "${resolvedPath}". The reference may be invalid, inaccessible, or missing a loader for this type of reference.`);
		}
		for (const key in root) {
			if (key === config.externalDocumentsKey || key === config.externalDocumentsMappingsKey) continue;
			await bundler(root[key], nodeOrigin, isChunkParent, depth + 1, [...currentPath, key], root, referencedFromPath);
		}
		await executeHooks("onAfterNodeProcess", root, context);
	};
	await bundler(rawSpecification);
	if (!config.urlMap && !isPartialBundling) delete documentRoot[config.externalDocumentsMappingsKey];
	return rawSpecification;
}
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInput.vue.script.js
var _hoisted_1 = { class: "flex items-center flex-1 relative" };
var _hoisted_2 = {
	key: 0,
	class: "select-none whitespace-nowrap text-transparent"
};
var _hoisted_3 = ["aria-readonly", "readonly"];
var _hoisted_4 = {
	key: 1,
	class: "absolute flex items-center inset-0 select-none overflow-hidden whitespace-nowrap"
};
var _hoisted_5 = {
	key: 0,
	class: "text-c-2"
};
var _hoisted_6 = { class: "text-transparent" };
var _hoisted_7 = {
	key: 1,
	class: "text-c-2"
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInput.vue.js
var ScalarTextInput_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarTextInput",
	props: /*@__PURE__*/ mergeModels({ readonly: { type: Boolean } }, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["click"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const model = useModel(__props, "modelValue");
		const input = ref();
		const { stylingAttrsCx, otherAttrs } = useBindCx();
		onMounted(() => {
			if ("autofocus" in otherAttrs.value) input.value?.focus();
		});
		function handleClick(event) {
			emit("click", event);
			if (__props.readonly) input.value?.select();
			else input.value?.focus();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "div" }, unref(stylingAttrsCx)("cursor-text bg-b-1 text-c-1 dark:bg-b-1.5"), { onClick: handleClick }), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					_ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "prefix")])) : createCommentVNode("", true),
					withDirectives(createBaseVNode("input", mergeProps({
						ref_key: "input",
						ref: input,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
						"aria-readonly": __props.readonly || void 0,
						class: "z-1 min-w-0 flex-1 rounded-none border-none bg-transparent placeholder:font-[inherit] focus-within:outline-none",
						readonly: __props.readonly
					}, unref(otherAttrs)), null, 16, _hoisted_3), [[vModelDynamic, model.value]]),
					_ctx.$slots.prefix || _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_4, [
						_ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_5, [renderSlot(_ctx.$slots, "prefix")])) : createCommentVNode("", true),
						createBaseVNode("span", _hoisted_6, toDisplayString(model.value || _ctx.$attrs.placeholder), 1),
						_ctx.$slots.suffix ? (openBlock(), createElementBlock("span", _hoisted_7, [renderSlot(_ctx.$slots, "suffix")])) : createCommentVNode("", true)
					])) : createCommentVNode("", true)
				]), renderSlot(_ctx.$slots, "aside")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInputCopy.vue.js
var ScalarTextInputCopy_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarTextInputCopy",
	props: /*@__PURE__*/ mergeModels({
		duration: { default: 1500 },
		editable: { type: Boolean },
		immediate: { type: Boolean }
	}, {
		"modelValue": {},
		"modelModifiers": {},
		"copied": {
			type: Boolean,
			default: false
		},
		"copiedModifiers": {}
	}),
	emits: ["update:modelValue", "update:copied"],
	setup(__props) {
		onMounted(() => {
			if (__props.immediate && model.value) copy(model.value);
		});
		const model = useModel(__props, "modelValue");
		const copied = useModel(__props, "copied");
		const { copy, copied: clipboardCopied } = useClipboard({
			legacy: true,
			copiedDuring: __props.duration
		});
		/** Watch the clipboard copied state and emit it to the consuming component */
		watch(clipboardCopied, (v) => copied.value = v);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ScalarTextInput_default, {
				modelValue: model.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
				readonly: !__props.editable,
				onClick: _cache[2] || (_cache[2] = ($event) => model.value && unref(copy)(model.value))
			}, {
				aside: withCtx(() => [createVNode(unref(ScalarCopyButton_default), {
					class: "z-1 bg-b-1 hover:bg-b-1.5 dark:bg-b-2 dark:hover:bg-b-2",
					copied: copied.value || unref(clipboardCopied),
					placement: "left",
					onClick: _cache[0] || (_cache[0] = withModifiers(($event) => model.value && unref(copy)(model.value), ["stop"]))
				}, createSlots({
					backdrop: withCtx(() => [createVNode(unref(ScalarCopyBackdrop_default), { class: "bg-b-1 group-hover/copy-button:bg-b-1.5 dark:bg-b-1.5 dark:group-hover/copy-button:bg-b-1.5" })]),
					_: 2
				}, [_ctx.$slots.copy ? {
					name: "copy",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "copy")]),
					key: "0"
				} : void 0, _ctx.$slots.copied ? {
					name: "copied",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "copied")]),
					key: "1"
				} : void 0]), 1032, ["copied"])]),
				_: 3
			}, 8, ["modelValue", "readonly"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/schemas/dist/api-reference/api-reference-plugin.js
object({
	name: string({ typeComment: "Name of specification extension property. Has to start with `x-`." }),
	component: unknown({ typeComment: "Vue component to render the specification extension" }),
	renderer: optional(unknown({ typeComment: "Custom renderer to render the specification extension" }))
});
var viewComponentSchema = object({
	component: unknown({ typeComment: "Vue component to render in the view" }),
	renderer: optional(unknown({ typeComment: "Custom renderer to render the view component (e.g., ReactRenderer)" })),
	props: optional(record(string(), any()), { typeComment: "Additional props to pass to the component" }),
	sidebar: optional(object({
		show: boolean(),
		label: string()
	}), { typeComment: "Sidebar configuration. Set show: true to display in sidebar." })
});
object({
	"content.start": optional(array(viewComponentSchema), { typeComment: "Components to render before the Introduction/Info section" }),
	"content.end": optional(array(viewComponentSchema), { typeComment: "Components to render at specific views in the API Reference" })
});
object({
	onInit: optional(fn()),
	onConfigChange: optional(fn()),
	onDestroy: optional(fn())
});
var apiReferencePluginSchema = fn();
//#endregion
//#region node_modules/@scalar/schemas/dist/api-reference/base-configuration.js
var externalUrlsSchema = object({
	dashboardUrl: string({ default: "https://dashboard.scalar.com" }),
	registryUrl: string({ default: "https://registry.scalar.com" }),
	proxyUrl: string({ default: "https://proxy.scalar.com" }),
	apiBaseUrl: string({ default: "https://api.scalar.com" })
}, { typeComment: "External service URLs used by Scalar packages" });
var baseConfigurationSchema = object({
	title: optional(string(), { typeComment: "The title of the OpenAPI document." }),
	slug: optional(string(), { typeComment: "The slug of the OpenAPI document used in the URL. If none is passed, the title will be used. If no title is used, it will just use the index." }),
	authentication: optional(any(), { typeComment: "Prefill authentication" }),
	baseServerURL: optional(string(), { typeComment: "Base URL for the API server" }),
	hideClientButton: boolean({
		default: false,
		typeComment: "Whether to hide the client button"
	}),
	proxyUrl: optional(string(), { typeComment: "URL to a request proxy for the API client" }),
	oauth2RedirectUri: optional(string(), { typeComment: "Default OAuth 2.0 redirect URI used to prefill auth flows in the API client." }),
	searchHotKey: optional(union([
		literal("a"),
		literal("b"),
		literal("c"),
		literal("d"),
		literal("e"),
		literal("f"),
		literal("g"),
		literal("h"),
		literal("i"),
		literal("j"),
		literal("k"),
		literal("l"),
		literal("m"),
		literal("n"),
		literal("o"),
		literal("p"),
		literal("q"),
		literal("r"),
		literal("s"),
		literal("t"),
		literal("u"),
		literal("v"),
		literal("w"),
		literal("x"),
		literal("y"),
		literal("z")
	]), { typeComment: "Key used with CTRL/CMD to open the search modal (defaults to 'k' e.g. CMD+k)" }),
	servers: optional(array(any()), { typeComment: "List of OpenAPI server objects" }),
	showSidebar: boolean({
		default: true,
		typeComment: "Whether to show the sidebar"
	}),
	showDeveloperTools: union([
		literal("localhost"),
		literal("always"),
		literal("never")
	], { typeComment: "Whether and when to show the developer tools." }),
	showToolbar: union([
		literal("localhost"),
		literal("always"),
		literal("never")
	], { typeComment: "@deprecated Use showDeveloperTools instead" }),
	operationTitleSource: union([literal("summary"), literal("path")], { typeComment: "Whether to use the operation summary or the operation path for the sidebar and search" }),
	theme: union([
		literal("default"),
		literal("alternate"),
		literal("moon"),
		literal("purple"),
		literal("solarized"),
		literal("bluePlanet"),
		literal("deepSpace"),
		literal("saturn"),
		literal("kepler"),
		literal("elysiajs"),
		literal("fastify"),
		literal("mars"),
		literal("laserwave"),
		literal("none")
	], { typeComment: "A string to use one of the color presets" }),
	_integration: optional(union([
		literal("adonisjs"),
		literal("astro"),
		literal("docusaurus"),
		literal("dotnet"),
		literal("elysiajs"),
		literal("express"),
		literal("fastapi"),
		literal("fastify"),
		literal("go"),
		literal("hono"),
		literal("html"),
		literal("laravel"),
		literal("litestar"),
		literal("nestjs"),
		literal("nextjs"),
		literal("nitro"),
		literal("nuxt"),
		literal("platformatic"),
		literal("react"),
		literal("rust"),
		literal("svelte"),
		literal("vue"),
		nullable()
	]), { typeComment: "Integration type identifier" }),
	onRequestSent: optional(fn(), { typeComment: "onRequestSent is fired when a request is sent" }),
	persistAuth: boolean({
		default: false,
		typeComment: "Whether to persist auth to local storage"
	}),
	telemetry: boolean({
		default: true,
		typeComment: "Enables / disables telemetry"
	}),
	externalUrls: externalUrlsSchema
});
//#endregion
//#region node_modules/@scalar/schemas/dist/api-reference/source-configuration.js
/**
* The content of an OpenAPI document. Accepts any of:
*  - a raw string (YAML or JSON),
*  - `null` to explicitly opt out of inline content,
*  - a plain object representing the parsed document, or
*  - a function that returns either of the above (sync or async resolution
*    happens further downstream).
*/
var contentSchema = union([
	string(),
	nullable(),
	record(string(), any()),
	fn()
]);
/**
* A source is any potential document input used for API Reference
* and API Client integrations. Sources may be specified in the configuration
* or used independently. Some configurations may have multiple sources.
*/
var sourceConfigurationSchema = object({
	default: boolean({ default: false }),
	url: optional(string(), { typeComment: "URL to an OpenAPI/Swagger document" }),
	content: optional(contentSchema, { typeComment: "Directly embed the OpenAPI document. Can be a string, object, function returning an object, or null. It is recommended to pass a URL instead of content." }),
	title: optional(string(), { typeComment: "The title of the OpenAPI document. Used for the page title and the document name in the dropdown. With multiple `sources`, set this per source." }),
	slug: optional(string(), { typeComment: "The slug of the OpenAPI document used in the URL. If none is passed, the title will be used. With multiple `sources`, set this per source." }),
	spec: optional(object({
		url: optional(string()),
		content: optional(contentSchema)
	}), { typeComment: "@deprecated Use `url` and `content` on the top level instead." }),
	agent: optional(object({
		key: optional(string()),
		disabled: optional(boolean()),
		hideAddApi: optional(boolean(), { typeComment: "When true, hide the control to add more APIs in the agent chat. Only preloaded/registry documents are shown; the public API list is not offered." })
	}), { typeComment: "Agent Scalar configuration" })
});
//#endregion
//#region node_modules/@scalar/schemas/dist/api-reference/api-reference-configuration.js
var apiReferenceConfigurationSchema = intersection([
	baseConfigurationSchema,
	sourceConfigurationSchema,
	object({
		layout: union([literal("modern"), literal("classic")], { typeComment: "The layout to use for the references" }),
		proxy: optional(string(), { typeComment: "@deprecated Use proxyUrl instead" }),
		fetch: optional(fn(), { typeComment: "@deprecated Use `customFetch` instead." }),
		customFetch: optional(fn(), { typeComment: "Custom fetch function used both when loading the OpenAPI document and when sending requests from the API client. Can be used to add custom headers, attach credentials (for example `credentials: 'include'`), handle auth, etc." }),
		plugins: optional(array(apiReferencePluginSchema), { typeComment: "Plugins for the API reference" }),
		pluginUrls: optional(array(string()), { typeComment: "URLs of ESM modules that provide additional plugins for the API reference. Each module is loaded with a dynamic `import()` before the API reference mounts, and its default export is registered as a plugin. Unlike `plugins`, this option is JSON-serializable, so integrations that pass their configuration as JSON can load plugins without replacing the whole bundle. Only supported by the standalone browser build (`Scalar.createApiReference`)." }),
		isEditable: boolean({
			default: false,
			typeComment: "Allows the user to inject an editor for the spec"
		}),
		hideModels: boolean({
			default: false,
			typeComment: "Whether to show models in the sidebar, search, and content."
		}),
		modelsSectionLabel: optional(union([
			literal("Models"),
			literal("Schemas"),
			string()
		]), { typeComment: "Label for the components.schemas section in the sidebar, content, and search. Use `Schemas` for OpenAPI terminology." }),
		localization: optional(object({
			locale: optional(string()),
			direction: optional(union([
				literal("auto"),
				literal("ltr"),
				literal("rtl")
			])),
			translations: optional(record(string(), any()))
		}), { typeComment: "API Reference UI localization. Select a built-in locale, override labels, and control LTR/RTL rendering." }),
		documentDownloadType: union([
			literal("both"),
			literal("yaml"),
			literal("json"),
			literal("direct"),
			literal("none")
		], { typeComment: "Sets the file type of the document to download, set to `none` to hide the download button" }),
		hideDownloadButton: optional(boolean(), { typeComment: "@deprecated Use `documentDownloadType: 'none'` instead" }),
		hideTestRequestButton: boolean({
			default: false,
			typeComment: "Whether to show the \"Test Request\" button"
		}),
		hideSearch: boolean({
			default: false,
			typeComment: "Whether to show the sidebar search bar"
		}),
		showOperationId: boolean({
			default: false,
			typeComment: "Whether to show the operationId"
		}),
		darkMode: optional(boolean(), { typeComment: "Whether dark mode is on or off initially (light mode)" }),
		forceDarkModeState: optional(union([literal("dark"), literal("light")]), { typeComment: "forceDarkModeState makes it always this state no matter what" }),
		hideDarkModeToggle: boolean({
			default: false,
			typeComment: "Whether to show the dark mode toggle"
		}),
		metaData: optional(any(), { typeComment: "If used, passed data will be added to the HTML header. @see https://unhead.unjs.io/usage/composables/use-seo-meta" }),
		favicon: optional(string(), { typeComment: "Path to a favicon image" }),
		hiddenClients: optional(union([
			record(string(), union([boolean(), array(string())])),
			array(string()),
			literal(true)
		]), { typeComment: "List of httpsnippet clients to hide from the clients menu. By default hides Unirest, pass `[]` to show all clients" }),
		defaultHttpClient: optional(object({
			targetKey: string(),
			clientKey: string()
		}), { typeComment: "Determine the HTTP client that is selected by default" }),
		defaultRequestBodyView: optional(union([literal("form"), literal("raw")]), { typeComment: "Initial view for the request body editor with structured (JSON/YAML) bodies" }),
		customCss: optional(string(), { typeComment: "Custom CSS to be added to the page" }),
		onServerChange: optional(fn(), { typeComment: "onServerChange is fired on selected server change" }),
		onDocumentSelect: optional(fn(), { typeComment: "onDocumentSelect is fired when the config is selected" }),
		onLoaded: optional(fn(), { typeComment: "Callback fired when the reference is fully loaded" }),
		onBeforeRequest: optional(fn(), { typeComment: "Fired before the outbound request is built; callback receives a mutable request builder. Experimental API." }),
		onRequestBuilt: optional(fn(), { typeComment: "Fired right before the outbound request is sent; callback receives the exact fetch Request that goes over the wire. Experimental API." }),
		onResponseReceived: optional(fn(), { typeComment: "Fired before response processing. Return a Response to replace it, or nothing to keep it." }),
		onShowMore: optional(fn(), { typeComment: "onShowMore is fired when the user clicks the \"Show more\" button on the references" }),
		onSidebarClick: optional(fn(), { typeComment: "onSidebarClick is fired when the user clicks on a sidebar item" }),
		pathRouting: optional(object({ basePath: string() }), { typeComment: "Route using paths instead of hashes, your server MUST support this. @experimental" }),
		mcp: optional(object({
			name: optional(string(), { typeComment: "Display name for the MCP server" }),
			url: optional(string(), { typeComment: "URL of the MCP server" }),
			disabled: optional(boolean(), { typeComment: "When true, disables the MCP integration" })
		}), { typeComment: "MCP (Model Context Protocol) configuration. When provided, enables MCP integration with the given name and url." }),
		generateHeadingSlug: optional(fn(), { typeComment: "Customize the heading portion of the hash" }),
		generateModelSlug: optional(fn(), { typeComment: "Customize the model portion of the hash" }),
		generateTagSlug: optional(fn(), { typeComment: "Customize the tag portion of the hash" }),
		generateOperationSlug: optional(fn(), { typeComment: "Customize the operation portion of the hash" }),
		generateWebhookSlug: optional(fn(), { typeComment: "Customize the webhook portion of the hash" }),
		setPageTitle: optional(fn(), { typeComment: "Customize the browser tab title for the section currently in view" }),
		redirect: optional(fn(), { typeComment: "To handle redirects, pass a function that receives the current path/hash and passes that to history.replaceState" }),
		withDefaultFonts: boolean({
			default: true,
			typeComment: "Whether to include default fonts"
		}),
		defaultOpenFirstTag: boolean({
			default: true,
			typeComment: "Whether to expand the first tag in the sidebar when no specific URL target is present"
		}),
		defaultOpenAllTags: boolean({
			default: false,
			typeComment: "Whether to expand all tags by default. Warning: this can cause performance issues on big documents"
		}),
		expandAllModelSections: boolean({
			default: false,
			typeComment: "Whether to expand all models by default. Warning: this can cause performance issues on big documents"
		}),
		expandAllParameters: boolean({
			default: true,
			typeComment: "Whether to show parameter details by default. Set to false to collapse each parameter."
		}),
		expandAllResponses: boolean({
			default: false,
			typeComment: "Whether to expand all responses by default. Warning: this can cause performance issues on big documents"
		}),
		expandAllSchemaProperties: boolean({
			default: false,
			typeComment: "Whether to expand all nested schema properties by default. Each row keeps its own disclosure control, so nested sections can still be collapsed manually. Warning: this can cause performance issues on big documents"
		}),
		tagsSorter: optional(union([literal("alpha"), fn()]), { typeComment: "Function to sort tags" }),
		operationsSorter: optional(union([
			literal("alpha"),
			literal("method"),
			fn()
		]), { typeComment: "Function to sort operations" }),
		orderSchemaPropertiesBy: union([literal("alpha"), literal("preserve")], { typeComment: "Order the schema properties by" }),
		schemaKeyboardNav: boolean({
			default: false,
			typeComment: "Arrow-key navigation over the schema disclosure toggles (APG tree bindings). Off until screen-reader interaction questions are settled"
		}),
		orderRequiredPropertiesFirst: boolean({
			default: true,
			typeComment: "Sort the schema properties by required ones first"
		})
	})
]);
var OLD_PROXY_URL = "https://api.scalar.com/request-proxy";
var NEW_PROXY_URL = "https://proxy.scalar.com";
var apiReferenceConfigurationWithSourceSchema = (rawInput) => {
	const input = coerce(apiReferenceConfigurationSchema, rawInput);
	if (input.hideDownloadButton) {
		console.warn(`[DEPRECATED] You're using the deprecated 'hideDownloadButton' attribute. Use 'documentDownloadType: 'none'' instead.`);
		input.documentDownloadType = "none";
	}
	if (input.spec?.url) {
		console.warn(`[DEPRECATED] You're using the deprecated 'spec.url' attribute. Remove the spec prefix and move the 'url' attribute to the top level.`);
		input.url = input.spec.url;
		delete input.spec;
	}
	if (input.spec?.content) {
		console.warn(`[DEPRECATED] You're using the deprecated 'spec.content' attribute. Remove the spec prefix and move the 'content' attribute to the top level.`);
		input.content = input.spec.content;
		delete input.spec;
	}
	if (input.proxy) {
		console.warn(`[DEPRECATED] You're using the deprecated 'proxy' attribute. Use 'proxyUrl' instead.`);
		if (!input.proxyUrl) input.proxyUrl = input.proxy;
		delete input.proxy;
	}
	if (input.fetch) {
		console.warn(`[DEPRECATED] You're using the deprecated 'fetch' attribute. Use 'customFetch' instead.`);
		if (!input.customFetch) input.customFetch = input.fetch;
		delete input.fetch;
	}
	if (input.proxyUrl === OLD_PROXY_URL) {
		console.warn(`[DEPRECATED] Warning: configuration.proxyUrl points to our old proxy (${OLD_PROXY_URL}).`);
		console.warn(`[DEPRECATED] We are overwriting the value and use the new proxy URL (${NEW_PROXY_URL}) instead.`);
		console.warn(`[DEPRECATED] Action Required: You should manually update your configuration to use the new URL (${NEW_PROXY_URL}). Read more: https://github.com/scalar/scalar`);
		input.proxyUrl = NEW_PROXY_URL;
	}
	if (input.showToolbar && input.showToolbar !== "localhost") {
		console.warn(`[DEPRECATED] You're using the deprecated 'showToolbar' attribute. Use 'showDeveloperTools' instead.`);
		input.showDeveloperTools = input.showToolbar;
		delete input.showToolbar;
	}
	input.modelsSectionLabel ??= DEFAULT_MODELS_SECTION_LABEL;
	return input;
};
object({
	/**
	* The URL to the Scalar API Reference UMD bundle (the classic build that registers `window.Scalar`
	* and is loaded via `<script src>`).
	*
	* Setting it selects the UMD build instead of the default ESM build — use it to pin a specific
	* version of the classic bundle.
	*
	* @default https://cdn.jsdelivr.net/npm/@scalar/api-reference
	*
	* @example https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.25.122
	*/
	cdn: string({ default: "https://cdn.jsdelivr.net/npm/@scalar/api-reference" }),
	/**
	* Which build to load. The modern, code-split ESM build is the default.
	*
	* Pass a URL string to load a specific ESM build, or `false` to fall back to the classic UMD bundle.
	* When set, `bundle` takes precedence over both `cdn` and the `nonce` fallback.
	*
	* When a `nonce` is set (a strict, nonce-based CSP) the UMD bundle is used by default, because the
	* ESM build's `import`-loaded chunks cannot be nonced. Pass `bundle: true` to force the ESM build if
	* your CSP uses `'strict-dynamic'`.
	*/
	bundle: optional(union([string(), boolean()])),
	pageTitle: string({ default: "Scalar API Reference" }),
	/**
	* A Content Security Policy (CSP) nonce to apply to the generated inline `<script>` and `<style>`
	* tags so the API Reference can render under a strict CSP without `unsafe-inline`.
	*
	* Generate a fresh value per request and match it in your `script-src` and `style-src` directives.
	*/
	nonce: optional(string())
});
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/use-lazy-api-client.js
/** Load and mount the client only when requested, retaining the latest open intent during loading. */
var useLazyApiClient = ({ eventBus, load, status = shallowRef("idle") }) => {
	const scope = getCurrentScope();
	const client = shallowRef(null);
	let disposed = false;
	let loading = false;
	let pending = null;
	const unsubscribeOpen = eventBus.on("ui:open:client-modal", (payload) => {
		pending = { payload };
		status.value = "loading";
		if (loading) return;
		loading = true;
		load().then((createClient) => {
			if (disposed || !pending) return;
			client.value = (scope ? scope.run(createClient) : createClient()) ?? null;
			if (!client.value) return;
			unsubscribeOpen();
			unsubscribeClose();
			eventBus.emit("ui:open:client-modal", pending.payload);
		}).catch((error) => {
			if (!disposed && pending) status.value = "error";
			console.error("[@scalar/api-client] Could not load the API client modal.", error);
		}).finally(() => {
			pending = null;
			loading = false;
			if (status.value === "loading") status.value = "idle";
		});
	});
	const unsubscribeClose = eventBus.on("ui:close:client-modal", () => {
		pending = null;
		status.value = "idle";
	});
	onScopeDispose(() => {
		disposed = true;
		status.value = "idle";
		pending = null;
		unsubscribeOpen();
		unsubscribeClose();
		client.value?.app.unmount();
	}, true);
	return client;
};
//#endregion
//#region node_modules/@scalar/asyncapi-upgrader/dist/1.2-to-2.6/upgrade-from-one-to-two.js
/** The AsyncAPI version produced by this upgrade step. */
var ASYNCAPI_VERSION$2 = "2.6.0";
/** The synthetic channel name used when consolidating a 1.x `stream` or `events` object. */
var ROOT_CHANNEL = "/";
/**
* Upgrade an AsyncAPI 1.x document to 2.6.0.
*
* Each transformation is the smallest change needed to bring the 1.x shape in line with 2.x.
* See `upgrade-from-one-to-two.test.ts` for the source of truth — every rule is one test.
*/
function upgradeFromOneToTwo(originalDocument) {
	const document = originalDocument;
	if (!isObject$1(document) || typeof document.asyncapi !== "string" || !document.asyncapi.startsWith("1.")) return document;
	document.asyncapi = ASYNCAPI_VERSION$2;
	upgradeServers$1(document);
	upgradeChannels(document);
	upgradeStream(document);
	upgradeEvents(document);
	return document;
}
/** Servers: array of { url, scheme, schemeVersion, ... } → map { key: { url, protocol, protocolVersion, ... } }. */
function upgradeServers$1(document) {
	if (!Array.isArray(document.servers)) return;
	const result = {};
	const usedKeys = /* @__PURE__ */ new Set();
	for (const [index, server] of document.servers.entries()) {
		if (!isObject$1(server)) continue;
		const upgraded = {};
		for (const [field, value] of Object.entries(server)) if (field === "scheme") upgraded.protocol = value;
		else if (field === "schemeVersion") upgraded.protocolVersion = value;
		else upgraded[field] = value;
		const key = uniqueServerKey(typeof server.description === "string" ? server.description : "", index, usedKeys);
		usedKeys.add(key);
		result[key] = upgraded;
	}
	document.servers = result;
}
/** Slugify a description; fall back to `server-{index}`; dedupe collisions with `-2`, `-3`, … */
function uniqueServerKey(description, index, usedKeys) {
	const base = slugify(description) || `server-${index}`;
	if (!usedKeys.has(base)) return base;
	let suffix = 2;
	while (usedKeys.has(`${base}-${suffix}`)) suffix += 1;
	return `${base}-${suffix}`;
}
/** topics → channels, with operation/parameter shape changes and `baseTopic` prepending. */
function upgradeChannels(document) {
	if (!isObject$1(document.topics)) {
		if (typeof document.baseTopic === "string") delete document.baseTopic;
		return;
	}
	const baseTopic = typeof document.baseTopic === "string" ? document.baseTopic : "";
	const channels = {};
	for (const [topic, item] of Object.entries(document.topics)) {
		if (!isObject$1(item)) continue;
		const channelName = baseTopic ? `${baseTopic}.${topic}` : topic;
		const channel = {};
		for (const [field, value] of Object.entries(item)) if (field === "parameters") {
			const parameters = upgradeChannelParameters(value);
			if (parameters) channel.parameters = parameters;
		} else if (field === "publish" || field === "subscribe") channel[field] = { message: value };
		else channel[field] = value;
		channels[channelName] = channel;
	}
	document.channels = channels;
	delete document.topics;
	delete document.baseTopic;
}
/** `parameters: [{ name, ... }]` → `parameters: { name: { ... } }`. Also handles `$ref` items. */
function upgradeChannelParameters(parameters) {
	if (!Array.isArray(parameters)) return;
	const result = {};
	for (const parameter of parameters) {
		if (!isObject$1(parameter)) continue;
		if (typeof parameter.$ref === "string") {
			const key = parameter.$ref.split("/").pop() ?? "";
			if (key) result[key] = { $ref: parameter.$ref };
			continue;
		}
		if (typeof parameter.name !== "string") continue;
		const { name, ...rest } = parameter;
		result[name] = rest;
	}
	return result;
}
/**
* `stream: { framing, read, write }` → `channels['/']` with subscribe/publish. Framing is dropped.
*
* AsyncAPI 1.x makes `topics`, `stream`, and `events` mutually exclusive at the document root, so a
* collision on the `/` channel between this transform, `upgradeEvents`, and any user-defined topic
* cannot happen in valid input.
*/
function upgradeStream(document) {
	if (!isObject$1(document.stream)) return;
	const channel = {};
	if (Array.isArray(document.stream.read)) channel.subscribe = { message: { oneOf: document.stream.read } };
	if (Array.isArray(document.stream.write)) channel.publish = { message: { oneOf: document.stream.write } };
	const channels = isObject$1(document.channels) ? document.channels : {};
	channels[ROOT_CHANNEL] = channel;
	document.channels = channels;
	delete document.stream;
}
/** `events: { receive, send }` → `channels['/']` with subscribe/publish. */
function upgradeEvents(document) {
	if (!isObject$1(document.events)) return;
	const channel = {};
	if (Array.isArray(document.events.receive)) channel.subscribe = { message: { oneOf: document.events.receive } };
	if (Array.isArray(document.events.send)) channel.publish = { message: { oneOf: document.events.send } };
	const channels = isObject$1(document.channels) ? document.channels : {};
	channels[ROOT_CHANNEL] = channel;
	document.channels = channels;
	delete document.events;
}
//#endregion
//#region node_modules/@scalar/asyncapi-upgrader/dist/2.6-to-3.0/upgrade-from-two-to-three.js
/** The AsyncAPI version produced by this upgrade step. */
var ASYNCAPI_VERSION$1 = "3.0.0";
/**
* Upgrade an AsyncAPI 2.x document to 3.0.0.
*
* Each transformation is the smallest change needed to bring the 2.x shape in line with 3.0.
* See `upgrade-from-two-to-three.test.ts` for the source of truth — every rule is one test.
*/
function upgradeFromTwoToThree$1(originalDocument) {
	const document = originalDocument;
	if (!isObject$1(document) || typeof document.asyncapi !== "string" || !document.asyncapi.startsWith("2.")) return document;
	document.asyncapi = ASYNCAPI_VERSION$1;
	upgradeComponentOAuthScopes(document);
	upgradeServers(document);
	upgradeChannelsAndOperations(document);
	return document;
}
/**
* Servers: `url` becomes `host` (+ optional `pathname` when the URL contains a path).
* `security` entries become either `$ref` (non-OAuth) or inline scheme + scopes array (OAuth).
*/
function upgradeServers(document) {
	if (!isObject$1(document.servers)) return;
	const securitySchemes = getSecuritySchemes(document);
	for (const server of Object.values(document.servers)) {
		if (!isObject$1(server)) continue;
		if (typeof server.url === "string") {
			const { host, pathname } = splitUrl(server.url);
			server.host = host;
			if (pathname) server.pathname = pathname;
			delete server.url;
		}
		if (Array.isArray(server.security)) server.security = upgradeSecurity(server.security, securitySchemes);
	}
}
/**
* Splits a 2.x server URL into a 3.0 `host` (hostname plus optional port) and `pathname`.
*
* The scheme is dropped because AsyncAPI 3.0 carries the protocol exclusively in the `protocol`
* field — keeping it on `host` would duplicate that information and violate the spec.
*/
function splitUrl(url) {
	const schemeMatch = url.match(/^[a-zA-Z][a-zA-Z0-9+\-.]*:\/\/(.*)$/);
	const rest = schemeMatch ? schemeMatch[1] : url;
	const slashIndex = rest.indexOf("/");
	if (slashIndex === -1) return {
		host: rest,
		pathname: ""
	};
	return {
		host: rest.slice(0, slashIndex),
		pathname: rest.slice(slashIndex)
	};
}
/** Maps every 2.x security requirement to its 3.0 form (`$ref` or inline OAuth + `scopes`). */
function upgradeSecurity(security, securitySchemes) {
	return security.map((requirement) => upgradeSecurityRequirement(requirement, securitySchemes)).filter((entry) => entry !== void 0);
}
/**
* Rewrites one 2.x security requirement object into its 3.0 form. 2.x security requirement objects
* have exactly one key (the scheme name) and an array of scope names — we read that single entry.
*/
function upgradeSecurityRequirement(requirement, securitySchemes) {
	if (!isObject$1(requirement)) return;
	const [entry] = Object.entries(requirement);
	if (!entry) return;
	const [name, scopes] = entry;
	const scheme = securitySchemes[name];
	if (isObject$1(scheme) && scheme.type === "oauth2" && Array.isArray(scopes)) return {
		...scheme,
		scopes
	};
	return { $ref: `#/components/securitySchemes/${name}` };
}
function getSecuritySchemes(document) {
	if (!isObject$1(document.components) || !isObject$1(document.components.securitySchemes)) return {};
	const schemes = {};
	for (const [name, value] of Object.entries(document.components.securitySchemes)) if (isObject$1(value)) schemes[name] = value;
	return schemes;
}
/** Renames `scopes` → `availableScopes` on every flow of every OAuth scheme in components. */
function upgradeComponentOAuthScopes(document) {
	if (!isObject$1(document.components) || !isObject$1(document.components.securitySchemes)) return;
	for (const scheme of Object.values(document.components.securitySchemes)) {
		if (!isObject$1(scheme) || scheme.type !== "oauth2" || !isObject$1(scheme.flows)) continue;
		for (const flow of Object.values(scheme.flows)) if (isObject$1(flow) && "scopes" in flow) {
			flow.availableScopes = flow.scopes;
			delete flow.scopes;
		}
	}
}
/**
* Channels become identifier-keyed with an `address` field. Each `publish`/`subscribe` operation is
* lifted to the top-level `operations` map with `action: 'receive' | 'send'`, and its message(s)
* move into `channel.messages` (keyed by message id derived from the `$ref` or `name`).
*
* The 2.x `publish` semantics — the application receives the message — maps to 3.0 `action: 'receive'`.
* The 2.x `subscribe` semantics — the application sends the message — maps to 3.0 `action: 'send'`.
*/
function upgradeChannelsAndOperations(document) {
	if (!isObject$1(document.channels)) return;
	const securitySchemes = getSecuritySchemes(document);
	const channels = {};
	const operations = {};
	const usedChannelIds = /* @__PURE__ */ new Set();
	const usedOperationKeys = /* @__PURE__ */ new Set();
	for (const [path, channel] of Object.entries(document.channels)) {
		if (!isObject$1(channel)) continue;
		const channelId = uniqueKey(slugifyChannelPath(path), usedChannelIds);
		const newChannel = { address: path };
		const messages = {};
		for (const [field, value] of Object.entries(channel)) {
			if (field === "publish" || field === "subscribe" || field === "parameters") continue;
			if (field === "servers" && Array.isArray(value)) {
				newChannel.servers = value.map((name) => ({ $ref: `#/servers/${name}` }));
				continue;
			}
			newChannel[field] = value;
		}
		if (isObject$1(channel.parameters)) newChannel.parameters = channel.parameters;
		const publishMessages = collectMessages(channel.publish, messages);
		const subscribeMessages = collectMessages(channel.subscribe, messages);
		newChannel.messages = messages;
		channels[channelId] = newChannel;
		if (isObject$1(channel.publish)) {
			const opKey = uniqueKey(operationKey(channel.publish, "receive", channelId), usedOperationKeys);
			operations[opKey] = buildOperation(channel.publish, "receive", channelId, publishMessages, securitySchemes);
		}
		if (isObject$1(channel.subscribe)) {
			const opKey = uniqueKey(operationKey(channel.subscribe, "send", channelId), usedOperationKeys);
			operations[opKey] = buildOperation(channel.subscribe, "send", channelId, subscribeMessages, securitySchemes);
		}
	}
	document.channels = channels;
	document.operations = operations;
}
/**
* Extracts each message reference from a 2.x operation's `message` field (single or `oneOf`) into
* the channel-level `messages` map; returns the message ids in order for use in `operation.messages`.
*/
function collectMessages(operation, channelMessages) {
	if (!isObject$1(operation) || !isObject$1(operation.message)) return [];
	const message = operation.message;
	const items = Array.isArray(message.oneOf) ? message.oneOf : [message];
	const ids = [];
	for (const item of items) {
		if (!isObject$1(item)) continue;
		const id = messageId(item, channelMessages);
		channelMessages[id] = item;
		ids.push(id);
	}
	return ids;
}
/**
* Derives a channel-message map key from a message: last `$ref` segment, `name`, or a generated
* `message-N`. The generated fallback is checked against the keys already present in the shared
* channel-message map so that anonymous inline messages from `publish` and `subscribe` do not
* collide on `message-0` and overwrite each other.
*/
function messageId(message, existingMessages) {
	if (typeof message.$ref === "string") {
		const last = message.$ref.split("/").pop();
		if (last) return last;
	}
	if (typeof message.name === "string" && message.name) return message.name;
	let index = 0;
	while (`message-${index}` in existingMessages) index += 1;
	return `message-${index}`;
}
/** Reuses 2.x `operationId` when present; otherwise generates `${action}-${channelId}`. */
function operationKey(operation, action, channelId) {
	if (typeof operation.operationId === "string" && operation.operationId) return operation.operationId;
	return `${action}-${channelId}`;
}
/** Assembles the 3.0 Operation Object from the 2.x publish/subscribe shape. */
function buildOperation(operation, action, channelId, messageIds, securitySchemes) {
	const result = {
		action,
		channel: { $ref: `#/channels/${channelId}` }
	};
	for (const [field, value] of Object.entries(operation)) {
		if (field === "message" || field === "operationId") continue;
		if (field === "security" && Array.isArray(value)) {
			result.security = upgradeSecurity(value, securitySchemes);
			continue;
		}
		result[field] = value;
	}
	result.messages = messageIds.map((id) => ({ $ref: `#/channels/${channelId}/messages/${id}` }));
	return result;
}
/**
* Slugify a channel path (e.g. `user/{id}/signedup` → `user-id-signedup`).
*
* `@scalar/helpers/string/slugify` drops non-word characters outright, but channel paths use `/`,
* `.`, `{`, and `}` as logical separators we want preserved as hyphens — so we pre-replace any run
* of non-alphanumerics with a space and let the shared slugify collapse those into hyphens.
*/
function slugifyChannelPath(value) {
	return slugify(value.replace(/[^a-zA-Z0-9]+/g, " "));
}
/** Returns the base key if unused, otherwise appends `-2`, `-3`, … until unique. Mutates `usedKeys`. */
function uniqueKey(base, usedKeys) {
	if (!usedKeys.has(base)) {
		usedKeys.add(base);
		return base;
	}
	let suffix = 2;
	while (usedKeys.has(`${base}-${suffix}`)) suffix += 1;
	const key = `${base}-${suffix}`;
	usedKeys.add(key);
	return key;
}
//#endregion
//#region node_modules/@scalar/asyncapi-upgrader/dist/3.0-to-3.1/upgrade-from-three-to-three-one.js
/** The AsyncAPI version produced by this upgrade step. */
var ASYNCAPI_VERSION = "3.1.0";
var COMPONENT_MESSAGE_REF = /^#\/components\/messages\/(.+)$/;
/**
* Upgrade an AsyncAPI 3.0 document to 3.1.0.
*
* 3.1 is a clarification release — the only real schema rule it tightens is that operation
* `messages` $refs MUST use the channel-scoped form (`#/channels/{id}/messages/{name}`). The 3.0
* spec's own examples used the components-scoped form, so many real-world 3.0 documents do too.
* We canonicalize on upgrade and pull the referenced message into the channel's `messages` map if
* it isn't already there.
*/
function upgradeFromThreeToThreeOne$1(originalDocument) {
	const document = originalDocument;
	if (!isObject$1(document) || typeof document.asyncapi !== "string" || !document.asyncapi.startsWith("3.0")) return document;
	document.asyncapi = ASYNCAPI_VERSION;
	rewriteOperationMessageRefs(document);
	return document;
}
/**
* For every operation with a channel `$ref`, rewrite any `#/components/messages/{name}` entry in
* its `messages` (and `reply.messages`) to `#/channels/{channelId}/messages/{name}`, registering
* the message on the channel if needed.
*/
function rewriteOperationMessageRefs(document) {
	if (!isObject$1(document.operations) || !isObject$1(document.channels)) return;
	const channels = document.channels;
	for (const operation of Object.values(document.operations)) {
		if (!isObject$1(operation)) continue;
		rewriteMessageList(operation.messages, operation.channel, channels);
		if (isObject$1(operation.reply)) rewriteMessageList(operation.reply.messages, operation.reply.channel ?? operation.channel, channels);
	}
}
/**
* Rewrites every `#/components/messages/{name}` entry in `messageList` in-place, given the channel
* reference that the surrounding operation/reply points at.
*/
function rewriteMessageList(messageList, channelRef, channels) {
	if (!Array.isArray(messageList)) return;
	const channelId = extractChannelId(channelRef);
	if (!channelId) return;
	const channel = channels[channelId];
	if (!isObject$1(channel)) return;
	for (let i = 0; i < messageList.length; i += 1) {
		const entry = messageList[i];
		if (!isObject$1(entry) || typeof entry.$ref !== "string") continue;
		const [, messageName] = entry.$ref.match(COMPONENT_MESSAGE_REF) ?? [];
		if (!messageName) continue;
		registerChannelMessage(channel, messageName, entry.$ref);
		messageList[i] = { $ref: `#/channels/${channelId}/messages/${messageName}` };
	}
	dedupeRefs(messageList);
}
/** Removes duplicate `{ $ref: 'X' }` entries (keeps the first occurrence). Mutates `list`. */
function dedupeRefs(list) {
	const seen = /* @__PURE__ */ new Set();
	let writeIndex = 0;
	for (const entry of list) {
		if (isObject$1(entry) && typeof entry.$ref === "string") {
			if (seen.has(entry.$ref)) continue;
			seen.add(entry.$ref);
		}
		list[writeIndex] = entry;
		writeIndex += 1;
	}
	list.length = writeIndex;
}
/** Returns the channel id from a `{ $ref: '#/channels/{id}' }` value, or `undefined` for anything else. */
function extractChannelId(channelRef) {
	if (!isObject$1(channelRef) || typeof channelRef.$ref !== "string") return;
	const match = channelRef.$ref.match(/^#\/channels\/([^/]+)$/);
	return match ? match[1] : void 0;
}
/** Ensures `channel.messages[name]` exists, defaulting to a `$ref` pointing at the original component message. */
function registerChannelMessage(channel, name, componentRef) {
	if (!isObject$1(channel.messages)) channel.messages = {};
	const messages = channel.messages;
	if (!(name in messages)) messages[name] = { $ref: componentRef };
}
//#endregion
//#region node_modules/@scalar/asyncapi-upgrader/dist/upgrade.js
/**
* Upgrade an AsyncAPI document to the latest version.
*
* Each step migrates the document through one major version, applying the structural
* transformations that version requires (for example 2.x → 3.0 lifts channel
* `publish`/`subscribe` operations into the top-level `operations` map and splits a
* server `url` into `host`/`pathname`), mirroring `@scalar/openapi-upgrader`.
*/
function upgrade$1(value) {
	return upgradeFromThreeToThreeOne$1(upgradeFromTwoToThree$1(upgradeFromOneToTwo(value)));
}
//#endregion
//#region node_modules/@scalar/helpers/dist/testing/measure.js
/**
* Measures the execution time of a function and logs it.
*
* Works only with sync functions and returns the result of the measured function.
*
* @example
*
* ```ts
* // Sync function
* const result = measureSync('computation', () => {
*   return heavyComputation()
* })
* ```
*/
var measureSync = (name, fn) => {
	const start = performance.now();
	const result = fn();
	const end = performance.now();
	const duration = Math.round(end - start);
	console.info(`${name}: ${duration} ms`);
	return result;
};
/**
* Measures the execution time of an async function and logs it.
*
* Works only with async functions and returns the result of the measured function.
*
* @example
*
* ```ts
* // Async function
* const result = await measure('api-call', async () => {
*   return await fetchData()
* })
* ````
*/
var measureAsync = async (name, fn) => {
	const start = performance.now();
	const result = await fn();
	const end = performance.now();
	const duration = Math.round(end - start);
	console.info(`${name}: ${duration} ms`);
	return result;
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/diff/apply.js
var InvalidChangesDetectedError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidChangesDetectedError";
	}
};
/**
* Applies a set of differences to a document object.
* The function traverses the document structure following the paths specified in the differences
* and applies the corresponding changes (add, update, or delete) at each location.
*
* Paths that reach the prototype chain (`__proto__`, `constructor` or `prototype`) are rejected
* before anything is written, so a hostile changeset cannot poison `Object.prototype`.
*
* A change with an empty path asks to replace the document itself, which is not supported: the
* function writes through the parent container of each path and the root has no parent. `diff`
* emits such a change whenever the two documents differ at the root, which covers a different
* `typeof`, `null` against an object, and an array on one side against a plain object on the
* other. Those changesets have to be handled by the caller instead of being applied.
*
* ⚠️ `document` is mutated in place and the result shares structure with the document the diff was
* built from: every `add` and `update` writes the change into the document by reference, and those
* changes are live references into the target document `diff` compared (see `diff`). A later write
* into the result can therefore be seen through that document, and the other way around. Callers
* that need an isolated result have to deep clone the document and the changes first.
*
* @param document - The original document to apply changes to, mutated in place
* @param diff - Array of differences to apply, each containing a path and change type
* @returns The modified document with all changes applied, structurally shared with the changes
* @throws {InvalidChangesDetectedError} When a path is unusable, empty or reaches the prototype chain
*
* @example
* const original = {
*   paths: {
*     '/users': {
*       get: { responses: { '200': { description: 'OK' } } }
*     }
*   }
* }
*
* const changes = [
*   {
*     path: ['paths', '/users', 'get', 'responses', '200', 'content'],
*     type: 'add',
*     changes: { 'application/json': { schema: { type: 'object' } } }
*   }
* ]
*
* const updated = apply(original, changes)
* // Result: original document with content added to the 200 response
*/
var apply = (document, diff) => {
	const applyChange = (current, path, d, depth = 0) => {
		if (path[depth] === void 0) throw new InvalidChangesDetectedError(`Process aborted. Path ${path.join(".")} at depth ${depth} is undefined, check diff object`);
		if (depth >= path.length - 1) {
			if (d.type === "add" || d.type === "update") current[path[depth]] = d.changes;
			else if (Array.isArray(current)) current.splice(Number.parseInt(path[depth]), 1);
			else delete current[path[depth]];
			return;
		}
		if (current[path[depth]] === void 0 || typeof current[path[depth]] !== "object") throw new InvalidChangesDetectedError("Process aborted, check diff object");
		applyChange(current[path[depth]], path, d, depth + 1);
	};
	for (const d of diff) {
		if (d.path.length === 0) throw new InvalidChangesDetectedError("Process aborted. Root-level replacement is not supported, the change targets the document itself instead of a property inside it");
		const unsafeSegment = d.path.find(isPollutionKey);
		if (unsafeSegment !== void 0) throw new InvalidChangesDetectedError(`Process aborted. Path ${d.path.join(".")} contains the unsafe segment "${unsafeSegment}", which can modify the prototype chain`);
	}
	for (const d of diff) applyChange(document, d.path, d);
	return document;
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/diff/diff.js
/**
* Get the difference between two objects.
*
* This function performs a breadth-first comparison between two objects and returns
* a list of operations needed to transform the first object into the second.
*
* Keys that reach the prototype chain (`__proto__`, `constructor` and `prototype`) are skipped, so
* an untrusted document cannot produce a diff that poisons `Object.prototype` once applied.
*
* ⚠️ The returned `changes` are live references into the documents, not clones. An `add` or an
* `update` carries the very subtree `doc2` holds, and a `delete` carries the subtree from `doc1`,
* so writing into a change writes into the document it came from. This matters downstream:
* `merge` merges values into these objects, and `apply` writes them into its target document,
* which leaves the result structurally shared with `doc2`. Callers that need isolation have to
* deep clone the documents before diffing them, or the changes afterwards.
*
* @param doc1 - The source object to compare from
* @param doc2 - The target object to compare to
* @returns A list of operations (add/update/delete) with their paths and changes
*
* @example
* // Compare two simple objects
* const original = { name: 'John', age: 30 }
* const updated = { name: 'John', age: 31, city: 'New York' }
* const differences = diff(original, updated)
* // Returns:
* // [
* //   { path: ['age'], changes: 31, type: 'update' },
* //   { path: ['city'], changes: 'New York', type: 'add' }
* // ]
*
* @example
* // Compare nested objects
* const original = {
*   user: { name: 'John', settings: { theme: 'light' } }
* }
* const updated = {
*   user: { name: 'John', settings: { theme: 'dark' } }
* }
* const differences = diff(original, updated)
* // Returns:
* // [
* //   { path: ['user', 'settings', 'theme'], changes: 'dark', type: 'update' }
* // ]
*/
var diff = (doc1, doc2) => {
	const diff = [];
	const bfs = (el1, el2, prefix = []) => {
		if (typeof el1 !== typeof el2) {
			if (typeof el1 === "undefined") {
				diff.push({
					path: prefix,
					changes: el2,
					type: "add"
				});
				return;
			}
			if (typeof el2 === "undefined") {
				diff.push({
					path: prefix,
					changes: el1,
					type: "delete"
				});
				return;
			}
			diff.push({
				path: prefix,
				changes: el2,
				type: "update"
			});
			return;
		}
		if (typeof el1 === "object" && typeof el2 === "object" && el1 !== null && el2 !== null) {
			if (Array.isArray(el1) !== Array.isArray(el2)) {
				diff.push({
					path: prefix,
					changes: el2,
					type: "update"
				});
				return;
			}
			const keys = [.../* @__PURE__ */ new Set([...Object.keys(el1), ...Object.keys(el2)])].filter((key) => !isPollutionKey(key));
			const orderedKeys = Array.isArray(el1) && Array.isArray(el2) && el1.length >= el2.length ? keys.reverse() : keys;
			for (const key of orderedKeys) bfs(el1[key], el2[key], [...prefix, key]);
			return;
		}
		if (el1 !== el2) diff.push({
			path: prefix,
			changes: el2,
			type: "update"
		});
	};
	bfs(doc1, doc2);
	return diff;
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/diff/trie.js
/**
* Trie data structure
*
* Read more: https://en.wikipedia.org/wiki/Trie
*/
/**
* Represents a node in the trie data structure.
* Each node can store a value and has a map of child nodes.
*
* @template Value - The type of value that can be stored in the node
*/
var TrieNode = class {
	value;
	/**
	* Children are keyed by path segments taken from untrusted documents, so the map has a null
	* prototype. A plain object would resolve `children['__proto__']` to `Object.prototype`, and
	* `addPath` would then write onto the prototype of every object in the runtime. The map is built
	* here rather than taken as an argument, so a caller cannot hand back a polluting one.
	*/
	children = Object.create(null);
	constructor(value) {
		this.value = value;
	}
};
/**
* A trie (prefix tree) data structure implementation.
* This class provides efficient storage and retrieval of values associated with string paths.
*
* @template Value - The type of value to store at each node
*
* @example
* const trie = new Trie<number>()
* trie.addPath(['a', 'b', 'c'], 1)
* trie.addPath(['a', 'b', 'd'], 2)
* trie.findMatch(['a', 'b'], (value) => console.log(value)) // Logs: 1, 2
*/
var Trie = class {
	root;
	constructor() {
		this.root = new TrieNode(null);
	}
	/**
	* Adds a value to the trie at the specified path.
	* Creates new nodes as needed to build the path.
	*
	* @param path - Array of strings representing the path to store the value
	* @param value - The value to store at the end of the path
	*
	* @example
	* const trie = new Trie<number>()
	* trie.addPath(['users', 'john', 'age'], 30)
	*/
	addPath(path, value) {
		let current = this.root;
		for (const dir of path) if (current.children[dir]) current = current.children[dir];
		else {
			current.children[dir] = new TrieNode(null);
			current = current.children[dir];
		}
		current.value = value;
	}
	/**
	* Finds all matches along a given path in the trie.
	* This method traverses both the exact path and all deeper paths,
	* executing a callback for each matching value found.
	*
	* The search is performed in two phases:
	* 1. Traverse the exact path, checking for matches at each node
	* 2. Perform a depth-first search from the end of the path to find all deeper matches
	*
	* @param path - Array of strings representing the path to search
	* @param callback - Function to execute for each matching value found
	*
	* @example
	* const trie = new Trie<number>()
	* trie.addPath(['a', 'b', 'c'], 1)
	* trie.addPath(['a', 'b', 'd'], 2)
	* trie.findMatch(['a', 'b'], (value) => console.log(value)) // Logs: 1, 2
	*/
	findMatch(path, callback) {
		let current = this.root;
		for (const dir of path) {
			if (current.value !== null) callback(current.value);
			const next = current.children[dir];
			if (!next) return;
			current = next;
		}
		const dfs = (current) => {
			for (const child of Object.keys(current?.children ?? {})) if (current && Object.hasOwn(current.children, child)) dfs(current?.children[child]);
			if (current?.value) callback(current.value);
		};
		dfs(current);
	}
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/diff/utils.js
/**
* Deep check for objects for collisions
* Check primitives if their values are different
*
* @param a - First value to compare
* @param b - Second value to compare
* @returns true if there is a collision, false otherwise
*
* @example
* // Objects with different values for same key
* isKeyCollisions({ a: 1 }, { a: 2 }) // true
*
* // Objects with different types
* isKeyCollisions({ a: 1 }, { a: '1' }) // true
*
* // Objects with no collisions
* isKeyCollisions({ a: 1 }, { b: 2 }) // false
*
* // Nested objects with collision
* isKeyCollisions({ a: { b: 1 } }, { a: { b: 2 } }) // true
*
* // An array against a plain object
* isKeyCollisions([1, 2], { 0: 1, 1: 2 }) // true
*/
var isKeyCollisions = (a, b) => {
	if (typeof a !== typeof b) return true;
	if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
		if (Array.isArray(a) !== Array.isArray(b)) return true;
		const keys = /* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)]);
		for (const key of keys) {
			if (isPollutionKey(key)) continue;
			if (a[key] !== void 0 && b[key] !== void 0) {
				if (isKeyCollisions(a[key], b[key])) return true;
			}
		}
		return false;
	}
	return a !== b;
};
/**
* Deep merges two objects, combining their properties recursively.
*
* ⚠️ Note: This operation assumes there are no key collisions between the objects.
* Use isKeyCollisions() to check for collisions before merging.
*
* ⚠️ Note: `a` is mutated in place and the subtrees `b` contributes are attached by reference, not
* cloned. Those subtrees stay shared with `b`, so a later write into one of them is seen through
* `b` as well. A key both objects already hold keeps the subtree of `a` and merges into it, so
* only what `b` brings along is shared. `merge` relies on this to fold two changes into one, which
* is how a merge ends up writing into the documents its diffs were built from.
*
* @param a - Target object to merge into, mutated in place
* @param b - Source object to merge from, whose subtrees are shared with the result
* @returns The merged object (mutates and returns a)
*
* @example
* // Simple merge
* const a = { name: 'John' }
* const b = { age: 30 }
* mergeObjects(a, b) // { name: 'John', age: 30 }
*
* // Nested merge
* const a = { user: { name: 'John' } }
* const b = { user: { age: 30 } }
* mergeObjects(a, b) // { user: { name: 'John', age: 30 } }
*/
var mergeObjects = (a, b) => {
	for (const key in b) {
		if (isPollutionKey(key)) continue;
		if (!(key in a)) a[key] = b[key];
		else {
			const aValue = a[key];
			const bValue = b[key];
			if (isObjectLike(aValue) && isObjectLike(bValue)) a[key] = mergeObjects(aValue, bValue);
		}
	}
	return a;
};
/**
* Checks if two arrays have the same elements in the same order.
*
* @param a - First array to compare
* @param b - Second array to compare
* @returns True if arrays have same length and elements, false otherwise
*
* @example
* // Arrays with same elements
* isArrayEqual([1, 2, 3], [1, 2, 3]) // true
*
* // Arrays with different elements
* isArrayEqual([1, 2, 3], [1, 2, 4]) // false
*
* // Arrays with different lengths
* isArrayEqual([1, 2], [1, 2, 3]) // false
*/
var isArrayEqual = (a, b) => {
	if (a.length !== b.length) return false;
	for (let i = 0; i <= a.length; ++i) if (a[i] !== b[i]) return false;
	return true;
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/diff/merge.js
/**
* Merges two sets of differences from the same document and resolves conflicts.
* This function combines changes from two diff lists while handling potential conflicts
* that arise when both diffs modify the same paths. It uses a trie data structure for
* efficient path matching and conflict detection.
*
* ⚠️ This function mutates the entries of `diff2`. When two changes on the same path can be folded
* together without a collision, the value from `diff1` is merged into the `changes` of the `diff2`
* entry, in place. Diffs built by `diff` carry live references into the documents they came from
* (see `diff`), so folding two changes together also writes into the document behind `diff2`.
* Callers that need the source documents to stay untouched have to deep clone them before diffing,
* or clone the changes afterwards.
*
* @param diff1 - First list of differences
* @param diff2 - Second list of differences, whose entries are mutated, see the note above
* @returns Object containing:
*   - diffs: Combined list of non-conflicting differences
*   - conflicts: Array of conflicting difference pairs that need manual resolution
*
* @example
* // Merge two sets of changes to a user profile
* const diff1 = [
*   { path: ['name'], changes: 'John', type: 'update' },
*   { path: ['age'], changes: 30, type: 'add' }
* ]
* const diff2 = [
*   { path: ['name'], changes: 'Johnny', type: 'update' },
*   { path: ['address'], changes: { city: 'NY' }, type: 'add' }
* ]
* const { diffs, conflicts } = merge(diff1, diff2)
* // Returns:
* // {
* //   diffs: [
* //     { path: ['age'], changes: 30, type: 'add' },
* //     { path: ['address'], changes: { city: 'NY' }, type: 'add' }
* //   ],
* //   conflicts: [
* //     [
* //       [{ path: ['name'], changes: 'John', type: 'update' }],
* //       [{ path: ['name'], changes: 'Johnny', type: 'update' }]
* //     ]
* //   ]
* // }
*/
var merge = (diff1, diff2) => {
	const trie = new Trie();
	for (const [index, diff] of diff1.entries()) trie.addPath(diff.path, {
		index,
		changes: diff
	});
	const skipDiff1 = /* @__PURE__ */ new Set();
	const skipDiff2 = /* @__PURE__ */ new Set();
	const conflictsMap1 = /* @__PURE__ */ new Map();
	const conflictsMap2 = /* @__PURE__ */ new Map();
	for (const [index, diff] of diff2.entries()) trie.findMatch(diff.path, (value) => {
		if (diff.type === "delete") {
			if (value.changes.type === "delete") {
				if (value.changes.path.length > diff.path.length) skipDiff1.add(value.index);
				else skipDiff2.add(index);
			} else {
				skipDiff1.add(value.index);
				skipDiff2.add(index);
				const conflictEntry = conflictsMap2.get(index);
				if (conflictEntry !== void 0) conflictEntry[0].push(value.changes);
				else conflictsMap2.set(index, [[value.changes], [diff]]);
			}
		}
		if (diff.type === "add" || diff.type === "update") {
			if (isArrayEqual(diff.path, value.changes.path) && value.changes.type !== "delete" && !isKeyCollisions(diff.changes, value.changes.changes)) {
				skipDiff1.add(value.index);
				if (typeof diff.changes === "object") mergeObjects(diff.changes, value.changes.changes);
				return;
			}
			skipDiff1.add(value.index);
			skipDiff2.add(index);
			const conflictEntry = conflictsMap1.get(value.index);
			if (conflictEntry !== void 0) conflictEntry[1].push(diff);
			else conflictsMap1.set(value.index, [[value.changes], [diff]]);
		}
	});
	const conflicts = [...conflictsMap1.values(), ...conflictsMap2.values()];
	return {
		diffs: [...diff1.filter((_, index) => !skipDiff1.has(index)), ...diff2.filter((_, index) => !skipDiff2.has(index))],
		conflicts
	};
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/helpers/clone-document.js
/** Allow small shared values while capping amplified allocation, not ordinary document size. */
var ALIAS_EXPANSION_ENTRY_FLOOR = 1e5;
/** More than ten copies per unique source entry is treated as disproportionate alias expansion. */
var MAX_ALIAS_EXPANSION_RATIO = 10;
/**
* Clone each occurrence independently so YAML aliases cannot couple schema
* transformations to literal examples. Undefined values are preserved.
*/
var cloneDocument = (document) => {
	const ancestors = /* @__PURE__ */ new WeakSet();
	const expansion = {
		sourceEntries: 0,
		copiedEntries: 0,
		sizes: /* @__PURE__ */ new Map()
	};
	const clone = (value) => {
		if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined") return value;
		if (!Array.isArray(value) && !isObject$1(value)) return structuredClone(value);
		if (ancestors.has(value)) throw new Error("Cannot upgrade to OpenAPI 3.2: cyclic objects cannot be represented in JSON. Use $ref instead.");
		const size = expansion.sizes.get(value) ?? 1 + (Array.isArray(value) ? value.length : Object.keys(value).length);
		if (!expansion.sizes.has(value)) {
			expansion.sizes.set(value, size);
			expansion.sourceEntries += size;
		}
		expansion.copiedEntries += size;
		if (expansion.copiedEntries > ALIAS_EXPANSION_ENTRY_FLOOR && expansion.copiedEntries > expansion.sourceEntries * MAX_ALIAS_EXPANSION_RATIO) throw new Error("Cannot upgrade to OpenAPI 3.2: excessive YAML alias expansion. Use $ref for shared schemas.");
		ancestors.add(value);
		const result = Array.isArray(value) ? value.map(clone) : Object.fromEntries(Object.entries(value).map(([key, item]) => [key, clone(item)]));
		ancestors.delete(value);
		return result;
	};
	return clone(document);
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/upgrade-incompatibility-error.js
/**
* Compatibility diagnostics that prevent a semantics-preserving OpenAPI 3.2 upgrade.
* Callers may retain the original version; malformed input and clone safety errors
* use ordinary Errors and must not be treated as a compatibility fallback.
*/
var UpgradeIncompatibilityError = class extends AggregateError {
	errors;
	constructor(errors) {
		super(errors, errors.map((error) => error.message).join("\n"));
		this.errors = errors;
		this.name = "UpgradeIncompatibilityError";
	}
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/3.1-to-3.2/migrate-objects.js
var schemaMaps$1 = [
	"properties",
	"patternProperties",
	"$defs",
	"dependentSchemas"
];
var schemaArrays$1 = [
	"allOf",
	"anyOf",
	"oneOf",
	"prefixItems"
];
var schemaSingles = [
	"items",
	"contains",
	"additionalProperties",
	"unevaluatedProperties",
	"unevaluatedItems",
	"propertyNames",
	"not",
	"if",
	"then",
	"else",
	"contentSchema"
];
/** Apply migrations, optionally tolerating incompatibilities established within this document. */
var migrateObjects = (document, onIncompatible = "throw") => {
	const properties = /* @__PURE__ */ new WeakMap();
	const own = (value, key) => {
		const entries = properties.get(value) ?? new Map(Object.entries(Object.getOwnPropertyDescriptors(value)).filter(([, descriptor]) => Object.hasOwn(descriptor, "value")).map(([name, descriptor]) => [name, descriptor.value]));
		properties.set(value, entries);
		return entries.get(key);
	};
	const operationTags = /* @__PURE__ */ new Set();
	const errors = [];
	const requiredCache = /* @__PURE__ */ new WeakMap();
	const cyclicRequired = /* @__PURE__ */ new WeakSet();
	const requiredWork = { evaluations: 0 };
	const propertySchemas = /* @__PURE__ */ new WeakSet();
	const xmlRoots = [];
	const markPropertySchema = (schema) => {
		if (!isObject$1(schema) || propertySchemas.has(schema)) return;
		propertySchemas.add(schema);
		markPropertySchema(schema.items);
		if (Array.isArray(schema.prefixItems)) schema.prefixItems.forEach(markPropertySchema);
	};
	const xmlCache = /* @__PURE__ */ new WeakMap();
	const visited = /* @__PURE__ */ new WeakMap();
	const fail = (path, message) => {
		errors.push(/* @__PURE__ */ new Error(`Cannot upgrade to OpenAPI 3.2 at ${path}: ${message}`));
	};
	const resolve = (ref, schemaReference = false) => {
		if (typeof ref !== "string" || !ref.startsWith("#/")) return;
		try {
			return parseJsonPointerSegments(decodeURIComponent(ref.slice(1))).reduce((value, key) => {
				if (schemaReference && isObject$1(value) && (value.$id !== void 0 || value.$schema !== void 0)) return;
				if (Array.isArray(value) && !/^(0|[1-9]\d*)$/.test(key)) return;
				if (!isObject$1(value) && !Array.isArray(value) || !Object.hasOwn(value, key)) return;
				return own(value, key);
			}, document);
		} catch {
			return;
		}
	};
	const repeatedVariables = (value, path) => {
		if (typeof value !== "string") return;
		const names = [...value.matchAll(/\{([^{}]+)\}/g)].map((match) => match[1]);
		if (new Set(names).size !== names.length) fail(path, "Template variables must not be repeated. Rename the repeated variable and define it separately.");
	};
	const requires = (schema, name, seen = /* @__PURE__ */ new Set()) => {
		if (schema === false) return true;
		if (schema === true) return false;
		if (!isObject$1(schema) || schema.$id !== void 0 || schema.$schema !== void 0) return;
		if (seen.has(schema)) {
			for (const ancestor of seen) cyclicRequired.add(ancestor);
			return;
		}
		const cached = requiredCache.get(schema) ?? /* @__PURE__ */ new Map();
		if (cached.has(name)) return cached.get(name);
		if (++requiredWork.evaluations > 1e5) {
			if (requiredWork.evaluations === 100001) fail("#", "Discriminator requiredness analysis was truncated after 100,000 evaluations.");
			return;
		}
		const remember = (result) => {
			if (result !== void 0 || !cyclicRequired.has(schema)) {
				cached.set(name, result);
				requiredCache.set(schema, cached);
			}
			return result;
		};
		if (Array.isArray(schema.required) && schema.required.includes(name)) return remember(true);
		const next = /* @__PURE__ */ new Set([...seen, schema]);
		const constraints = [];
		if (schema.$ref !== void 0) constraints.push(requires(resolve(schema.$ref, true), name, next));
		if (Array.isArray(schema.allOf)) constraints.push(...schema.allOf.map((item) => requires(item, name, next)));
		for (const keyword of ["oneOf", "anyOf"]) if (Array.isArray(schema[keyword])) {
			const alternatives = schema[keyword].map((item) => requires(item, name, next));
			if (alternatives.every((value) => value === true)) constraints.push(true);
			else if (alternatives.every((value) => value === false)) constraints.push(false);
			else constraints.push(void 0);
		}
		if (constraints.includes(true)) return remember(true);
		if (constraints.includes(void 0) || [
			"if",
			"not",
			"$dynamicRef",
			"const",
			"enum",
			"minProperties",
			"dependentRequired",
			"dependentSchemas"
		].some((key) => key in schema)) return remember(void 0);
		return remember(false);
	};
	const validateXmlNames = (schema, path, { inferredName, propertyName, dialect, ancestors = /* @__PURE__ */ new Set(), baseChanged = false }) => {
		if (!isObject$1(schema) || ancestors.has(schema) || (schema.$schema ?? dialect) !== void 0) return;
		const changedBase = baseChanged || schema.$id !== void 0;
		const context = [
			inferredName,
			propertyName,
			changedBase
		].join(":");
		const completed = xmlCache.get(schema) ?? /* @__PURE__ */ new Set();
		if (completed.has(context)) return;
		const xml = isObject$1(schema.xml) ? schema.xml : {};
		const defaultNodeType = schema.$ref !== void 0 || schema.$dynamicRef !== void 0 || schema.type === "array" ? "none" : "element";
		const wrappedNodeType = xml.wrapped === true ? "element" : defaultNodeType;
		const nodeType = xml.nodeType ?? (xml.attribute === true ? "attribute" : wrappedNodeType);
		if ((nodeType === "element" || nodeType === "attribute") && !inferredName && xml.name === void 0) fail(path, "An inline XML element needs an explicit xml.name.");
		const childContext = {
			dialect,
			ancestors: /* @__PURE__ */ new Set([...ancestors, schema]),
			baseChanged: changedBase
		};
		if (!changedBase && typeof schema.$ref === "string") {
			const target = resolve(schema.$ref, true);
			if (isObject$1(target)) {
				const segments = parseJsonPointerSegments(decodeURIComponent(schema.$ref.slice(1)));
				const componentRoot = segments.length === 3 && segments[0] === "components" && segments[1] === "schemas";
				const fromProperty = propertySchemas.has(target);
				validateXmlNames(target, schema.$ref, {
					...childContext,
					inferredName: componentRoot || fromProperty,
					propertyName: fromProperty
				});
			}
		}
		for (const keyword of [
			"allOf",
			"anyOf",
			"oneOf"
		]) {
			const branches = schema[keyword];
			if (Array.isArray(branches)) branches.forEach((branch, index) => validateXmlNames(branch, path + "/" + keyword + "/" + index, {
				...childContext,
				inferredName: false,
				propertyName: false
			}));
		}
		validateXmlNames(schema.items, path + "/items", {
			...childContext,
			inferredName: propertyName,
			propertyName
		});
		if (Array.isArray(schema.prefixItems)) schema.prefixItems.forEach((item, index) => validateXmlNames(item, path + "/prefixItems/" + index, {
			...childContext,
			inferredName: propertyName,
			propertyName
		}));
		if (isObject$1(schema.properties)) for (const [name, property] of Object.entries(schema.properties)) validateXmlNames(property, path + "/properties/" + escapeJsonPointer$1(name), {
			...childContext,
			inferredName: true,
			propertyName: true
		});
		completed.add(context);
		xmlCache.set(schema, completed);
	};
	const visit = (value, kind, path, dialect = document.jsonSchemaDialect, baseChanged = false) => {
		if (!isObject$1(value)) return;
		const schemaDialect = kind === "schema" ? value.$schema ?? dialect : dialect;
		const schemaBaseChanged = baseChanged || kind === "schema" && value.$id !== void 0;
		const visitKey = `${kind}:${String(schemaDialect)}:${schemaBaseChanged}`;
		const seen = visited.get(value) ?? /* @__PURE__ */ new Set();
		if (seen.has(visitKey)) return;
		seen.add(visitKey);
		visited.set(value, seen);
		const child = (key, type) => visit(own(value, key), type, `${path}/${escapeJsonPointer$1(key)}`, schemaDialect, schemaBaseChanged);
		const list = (key, type) => {
			const items = own(value, key);
			if (Array.isArray(items)) items.forEach((item, index) => visit(item, type, `${path}/${key}/${index}`, schemaDialect, schemaBaseChanged));
		};
		const map = (key, type) => {
			const items = own(value, key);
			if (isObject$1(items)) for (const [name, item] of Object.entries(items)) {
				if (key === "responses" && name.startsWith("x-")) continue;
				if (kind === "schema" && key === "properties") markPropertySchema(item);
				visit(item, type, `${path}/${key}/${escapeJsonPointer$1(name)}`, schemaDialect, schemaBaseChanged);
			}
		};
		if (kind === "schema") {
			if (schemaDialect !== void 0) return;
			const xml = own(value, "xml");
			if (isObject$1(xml)) {
				if (xml.wrapped === true && xml.attribute === true) fail(`${path}/xml`, "wrapped and attribute cannot both be true.");
				if (xml.wrapped === true || xml.attribute === true) {
					xml.nodeType = xml.attribute === true ? "attribute" : "element";
					delete xml.wrapped;
					delete xml.attribute;
				}
			}
			if (!schemaBaseChanged && value.$ref !== void 0) visit(resolve(value.$ref, true), "schema", String(value.$ref), schemaDialect);
			const discriminator = value.discriminator;
			if (isObject$1(discriminator) && typeof discriminator.propertyName === "string" && discriminator.defaultMapping === void 0 && !schemaBaseChanged && requires(value, discriminator.propertyName) === false) fail(`${path}/discriminator`, "An optional discriminating property needs an explicit defaultMapping.");
			for (const key of schemaMaps$1) map(key, "schema");
			for (const key of schemaArrays$1) list(key, "schema");
			for (const key of schemaSingles) child(key, "schema");
			return;
		}
		if (value.$ref !== void 0) visit(resolve(value.$ref), kind, String(value.$ref), schemaDialect);
		switch (kind) {
			case "document": {
				const paths = own(value, "paths");
				if (isObject$1(paths)) for (const [name, item] of Object.entries(paths)) {
					if (!name.startsWith("/")) continue;
					const location = `${path}/paths/${escapeJsonPointer$1(name)}`;
					repeatedVariables(name, location);
					visit(item, "pathItem", location);
				}
				map("webhooks", "pathItem");
				list("servers", "server");
				const componentObjects = own(value, "components");
				if (isObject$1(componentObjects)) for (const [key, type] of Object.entries({
					schemas: "schema",
					parameters: "parameter",
					headers: "header",
					requestBodies: "body",
					responses: "response",
					callbacks: "callback",
					pathItems: "pathItem"
				})) {
					const entries = own(componentObjects, key);
					if (isObject$1(entries)) for (const [name, item] of Object.entries(entries)) visit(item, type, `${path}/components/${key}/${escapeJsonPointer$1(name)}`);
				}
				break;
			}
			case "pathItem":
				for (const method of [
					"get",
					"put",
					"post",
					"delete",
					"options",
					"head",
					"patch",
					"trace"
				]) child(method, "operation");
				list("parameters", "parameter");
				list("servers", "server");
				break;
			case "operation":
				if (Array.isArray(value.tags)) {
					for (const tag of value.tags) if (typeof tag === "string") operationTags.add(tag);
				}
				list("parameters", "parameter");
				list("servers", "server");
				child("requestBody", "body");
				map("responses", "response");
				map("callbacks", "callback");
				break;
			case "callback":
				for (const [name, item] of Object.entries(value)) if (!name.startsWith("x-") && name !== "$ref") visit(item, "pathItem", `${path}/${escapeJsonPointer$1(name)}`, schemaDialect, schemaBaseChanged);
				break;
			case "parameter":
				if (value.in === "path" || value.in === "cookie") delete value.allowReserved;
				child("schema", "schema");
				map("content", "media");
				break;
			case "header":
				child("schema", "schema");
				map("content", "media");
				break;
			case "response":
				map("headers", "header");
				map("content", "media");
				break;
			case "body":
				map("content", "media");
				break;
			case "media":
				if (/\/(?:[^;]+\+)?xml(?:\s*;|$)/i.test(path.slice(path.lastIndexOf("/") + 1).replace(/~1/g, "/"))) xmlRoots.push({
					schema: value.schema,
					path: `${path}/schema`,
					dialect: schemaDialect
				});
				child("schema", "schema");
				map("encoding", "encoding");
				break;
			case "encoding":
				map("headers", "header");
				break;
			case "server": repeatedVariables(value.url, `${path}/url`);
		}
	};
	visit(document, "document", "#");
	for (const { schema, path, dialect } of xmlRoots) validateXmlNames(schema, path, {
		inferredName: false,
		propertyName: false,
		dialect
	});
	if (errors.length > 0 && onIncompatible === "throw") throw new UpgradeIncompatibilityError(errors);
	return operationTags;
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/3.1-to-3.2/migrate-tag-groups.js
/**
* Add native navigation parents only when every group has an unambiguous mapping.
* Keep the extension to preserve renderer-specific ordering and visibility rules.
*/
var migrateTagGroups = (document, operationTags) => {
	const groups = document["x-tagGroups"];
	if (!Array.isArray(groups) || groups.length === 0) return;
	if (document.tags !== void 0 && !Array.isArray(document.tags)) return;
	const tags = document.tags ?? [];
	if (!tags.every((tag) => isObject$1(tag) && typeof tag.name === "string")) return;
	const existing = new Map(tags.map((tag) => [tag.name, tag]));
	const parents = /* @__PURE__ */ new Set();
	const children = /* @__PURE__ */ new Set();
	for (const group of groups) {
		if (!isObject$1(group) || typeof group.name !== "string" || !group.name || !Array.isArray(group.tags) || !group.tags.every((name) => typeof name === "string") || Object.keys(group).some((key) => key !== "name" && key !== "tags") || parents.has(group.name) || existing.has(group.name) || operationTags.has(group.name)) return;
		parents.add(group.name);
		for (const name of group.tags) {
			if (children.has(name) || existing.get(name)?.parent !== void 0) return;
			children.add(name);
		}
	}
	if ([...parents].some((name) => children.has(name)) || existing.size !== tags.length) return;
	const result = [];
	for (const group of groups) {
		result.push({
			name: group.name,
			kind: "nav"
		});
		for (const name of group.tags) result.push({
			...existing.get(name) ?? { name },
			parent: group.name
		});
	}
	document.tags = [...result, ...tags.filter((tag) => !children.has(tag.name))];
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/3.1-to-3.2/upgrade-from-three-one-to-three-two.js
/** Reject malformed 3.1 declarations instead of silently leaving a requested upgrade incomplete. */
var isThreeOneDocument = (document) => {
	if (!isObject$1(document) || typeof document.openapi !== "string") return false;
	if (/^3\.1\.\d+$/.test(document.openapi)) return true;
	if (/^3\.1(?:\D|$)/.test(document.openapi)) throw new Error(`Cannot upgrade to OpenAPI 3.2: invalid OpenAPI version "${document.openapi}". Expected 3.1.x with a numeric patch version.`);
	return false;
};
/** Apply the final migration to a document already owned by the upgrade pipeline. */
var migrateThreeOneToThreeTwo = (document, onIncompatible = "throw") => {
	if (!isThreeOneDocument(document)) return document;
	migrateTagGroups(document, migrateObjects(document, onIncompatible));
	document.openapi = "3.2.0";
	return document;
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/helpers/traverse.js
/**
* Recursively traverses the content and applies the transform function to each node.
*/
function traverse(content, transform, path = []) {
	const result = {};
	for (const [key, value] of Object.entries(content)) {
		const currentPath = [...path, key];
		if (Array.isArray(value)) {
			result[key] = value.map((item, index) => {
				if (typeof item === "object" && !Array.isArray(item) && item !== null) return traverse(item, transform, [...currentPath, index.toString()]);
				return item;
			});
			continue;
		}
		if (isObjectLike(value)) {
			result[key] = traverse(value, transform, currentPath);
			continue;
		}
		result[key] = value;
	}
	return transform(result, path);
}
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/2.0-to-3.0/upgrade-from-two-to-three.js
var DEFAULT_MEDIA_TYPE = "application/json";
/** Extracts and removes x-example and x-examples extensions from an object */
function extractXExampleExtensions(obj) {
	const xExample = obj["x-example"];
	const xExamples = obj["x-examples"];
	delete obj["x-example"];
	delete obj["x-examples"];
	return {
		xExample,
		xExamples
	};
}
/** Checks if a value is a non-null, non-array object with at least one entry */
function isNonEmptyObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length > 0;
}
/**
* Checks if a value looks like a collection of named examples (all values are objects).
* This helps distinguish between:
* - A single example: { message: 'OK', type: 'success' } - values are primitives
* - Named examples: { 'my-example': { message: 'OK' } } - values are objects
*/
function isNamedExamplesCollection(value) {
	return isNonEmptyObject(value) && Object.values(value).every((v) => typeof v === "object" && v !== null && !Array.isArray(v));
}
/** Checks if a schema is empty (no meaningful properties defined) */
function isEmptySchema(schema) {
	if (!isObjectLike(schema)) return true;
	const s = schema;
	if (s.allOf || s.oneOf || s.anyOf || s.items || s.$ref || "additionalProperties" in s || [
		"enum",
		"const",
		"not",
		"format",
		"multipleOf",
		"maximum",
		"exclusiveMaximum",
		"minimum",
		"exclusiveMinimum",
		"maxLength",
		"minLength",
		"pattern",
		"maxItems",
		"minItems",
		"uniqueItems",
		"maxProperties",
		"minProperties",
		"required"
	].some((key) => key in s)) return false;
	if (typeof s.properties === "object" && s.properties !== null && Object.keys(s.properties).length > 0) return false;
	return true;
}
/**
* Removes content entries that only have an empty schema (no example/examples)
* when other entries with actual examples exist. This prevents the UI from
* selecting a meaningless produces-based entry over one with a real example.
*/
function removeEmptySchemaOnlyContentEntries(content) {
	const keys = Object.keys(content);
	if (!keys.some((key) => {
		const entry = content[key];
		return isObjectLike(entry) && (entry.example !== void 0 || entry.examples !== void 0);
	})) return;
	for (const key of keys) {
		const entry = content[key];
		if (!isObjectLike(entry)) continue;
		const hasExample = entry.example !== void 0 || entry.examples !== void 0;
		if (entry.schema !== void 0 && !hasExample && Object.keys(entry).length === 1 && isEmptySchema(entry.schema)) delete content[key];
	}
}
/** The allowed properties for an OpenAPI 3.x ExampleObject */
var EXAMPLE_OBJECT_PROPERTIES = /* @__PURE__ */ new Set([
	"summary",
	"description",
	"value",
	"externalValue"
]);
/**
* Checks if a value is a valid OpenAPI 3.x ExampleObject.
*
* An ExampleObject must have a `value` (or `externalValue`) property and can only contain
* properties from the allowed set: `summary`, `description`, `value`, `externalValue`.
*
* This prevents false positives when user's example data happens to have a `value` property
* (e.g., `{ value: "some data", count: 5 }` should NOT be treated as an ExampleObject).
*/
function isExampleObject(value) {
	if (typeof value !== "object" || value === null) return false;
	const obj = value;
	const hasValueOrExternalValue = "value" in obj || "externalValue" in obj;
	const onlyHasAllowedProperties = Object.keys(obj).every((key) => EXAMPLE_OBJECT_PROPERTIES.has(key));
	return hasValueOrExternalValue && onlyHasAllowedProperties;
}
/** Wraps a value as an ExampleObject, preserving existing structure if valid */
function wrapAsExampleObject(value) {
	if (isExampleObject(value)) return value;
	return { value };
}
/**
* True if the key looks like a MIME media type (e.g. application/json, text/plain).
* Used to distinguish media-type example keys from named example keys when migrating
* Swagger 2.0 examples to OpenAPI 3.0 content. Requires exactly one slash and
* token-style type/subtype (no spaces or semicolons) to avoid false positives
* for named keys that contain a slash (e.g. "Error 404/Not Found").
*/
var MEDIA_TYPE_KEY_PATTERN = /^[a-zA-Z0-9*+.-]+\/[a-zA-Z0-9*+.+-]+$/;
function isMediaTypeKey(key) {
	return MEDIA_TYPE_KEY_PATTERN.test(key);
}
/** Transforms x-example entries to OpenAPI 3.x examples format */
function transformXExampleToExamples(xExample) {
	return Object.entries(xExample).reduce((acc, [key, value]) => {
		acc[key] = { value };
		return acc;
	}, {});
}
/** Update the flow names to OpenAPI 3.1.0 format */
var upgradeFlow = (flow) => {
	switch (flow) {
		case "application": return "clientCredentials";
		case "accessCode": return "authorizationCode";
		case "implicit": return "implicit";
		case "password": return "password";
		default: return flow;
	}
};
/**
* Upgrade Swagger 2.0 to OpenAPI 3.0
*
* https://swagger.io/blog/news/whats-new-in-openapi-3-0/
*/
function upgradeFromTwoToThree(originalSpecification) {
	let document = originalSpecification;
	if (document !== null && typeof document === "object" && typeof document.swagger === "string" && document.swagger?.startsWith("2.0")) {
		document.openapi = "3.0.4";
		delete document.swagger;
	} else return document;
	if (document.host) {
		const schemes = Array.isArray(document.schemes) && document.schemes?.length ? document.schemes : ["http"];
		document.servers = schemes.map((scheme) => ({ url: `${scheme}://${document.host}${document.basePath ?? ""}` }));
		delete document.basePath;
		delete document.schemes;
		delete document.host;
	} else if (document.basePath) {
		document.servers = [{ url: document.basePath }];
		delete document.basePath;
	}
	if (document.definitions) {
		for (const schema of Object.values(document.definitions)) migrateSchemaNullability(schema);
		document.components = Object.assign({}, document.components, { schemas: document.definitions });
		delete document.definitions;
		document = traverse(document, (schema) => {
			if (typeof schema.$ref === "string" && schema.$ref.startsWith("#/definitions/")) schema.$ref = schema.$ref.replace(/^#\/definitions\//, "#/components/schemas/");
			return schema;
		});
	}
	document = traverse(document, (schema) => {
		if (schema.type === "file") {
			schema.type = "string";
			schema.format = "binary";
		}
		return schema;
	});
	if (Object.hasOwn(document, "parameters")) {
		document = traverse(document, (schema) => {
			if (typeof schema.$ref === "string" && schema.$ref.startsWith("#/parameters/")) {
				const schemaName = schema.$ref.split("/")[2];
				if (!schemaName) return schema;
				const param = isObjectLike(document.parameters) && schemaName in document.parameters ? document.parameters[schemaName] : void 0;
				if (param && typeof param === "object" && "in" in param && (param.in === "body" || param.in === "formData")) schema.$ref = schema.$ref.replace(/^#\/parameters\//, "#/components/requestBodies/");
				else schema.$ref = schema.$ref.replace(/^#\/parameters\//, "#/components/parameters/");
			}
			return schema;
		});
		document.components ??= {};
		const params = {};
		const bodyParams = {};
		const parameters = isObjectLike(document.parameters) ? document.parameters : {};
		for (const [name, param] of Object.entries(parameters)) if (param && typeof param === "object") {
			if ("$ref" in param) params[name] = transformParameterObject(param);
			else if ("in" in param) {
				if (param.in === "body") bodyParams[name] = migrateBodyParameter(param, document.consumes ?? [DEFAULT_MEDIA_TYPE]);
				else if (param.in === "formData") bodyParams[name] = migrateFormDataParameter([param], document.consumes);
				else params[name] = transformParameterObject(param);
			}
		}
		if (Object.keys(params).length > 0) document.components.parameters = params;
		if (Object.keys(bodyParams).length > 0) document.components.requestBodies = bodyParams;
		delete document.parameters;
	}
	if (Object.hasOwn(document, "responses") && typeof document.responses === "object" && document.responses !== null) {
		document = traverse(document, (schema) => {
			if (typeof schema.$ref === "string" && schema.$ref.startsWith("#/responses/")) schema.$ref = schema.$ref.replace(/^#\/responses\//, "#/components/responses/");
			return schema;
		});
		document.components ??= {};
		const migratedResponses = {};
		const responses = document.responses;
		for (const [name, response] of Object.entries(responses)) if (isObjectLike(response)) {
			if ("$ref" in response) migratedResponses[name] = response;
			else {
				const responseObj = response;
				const produces = document.produces ?? [DEFAULT_MEDIA_TYPE];
				if (responseObj.schema) {
					migrateSchemaNullability(responseObj.schema);
					if (typeof responseObj.content !== "object") responseObj.content = {};
					for (const type of produces) responseObj.content[type] = { schema: responseObj.schema };
					delete responseObj.schema;
				}
				if (responseObj.examples && typeof responseObj.examples === "object") {
					if (typeof responseObj.content !== "object") responseObj.content = {};
					const defaultMediaType = produces[0] ?? DEFAULT_MEDIA_TYPE;
					for (const [key, exampleValue] of Object.entries(responseObj.examples)) if (isMediaTypeKey(key)) {
						if (typeof responseObj.content[key] !== "object") responseObj.content[key] = {};
						responseObj.content[key].example = exampleValue;
					} else {
						if (typeof responseObj.content[defaultMediaType] !== "object") responseObj.content[defaultMediaType] = {};
						const mediaEntry = responseObj.content[defaultMediaType];
						if (typeof mediaEntry.examples !== "object") mediaEntry.examples = {};
						mediaEntry.examples[key] = wrapAsExampleObject(exampleValue);
					}
					delete responseObj.examples;
				}
				if (responseObj.content && typeof responseObj.content === "object") removeEmptySchemaOnlyContentEntries(responseObj.content);
				if (isObjectLike(responseObj.headers)) responseObj.headers = Object.entries(responseObj.headers).reduce((acc, [headerName, header]) => {
					if (header && typeof header === "object") return {
						[headerName]: transformResponseHeader(header),
						...acc
					};
					return acc;
				}, {});
				migratedResponses[name] = responseObj;
			}
		}
		if (Object.keys(migratedResponses).length > 0) document.components.responses = migratedResponses;
		delete document.responses;
	}
	if (typeof document.paths === "object") {
		for (const path in document.paths) if (Object.hasOwn(document.paths, path)) {
			const pathItem = isObjectLike(document.paths) && path in document.paths ? document.paths[path] : void 0;
			if (!pathItem || typeof pathItem !== "object") continue;
			let requestBodyObject;
			for (const methodOrParameters in pathItem) if (methodOrParameters === "parameters" && Object.hasOwn(pathItem, methodOrParameters)) {
				const pathItemParameters = migrateParameters(pathItem.parameters, document.consumes ?? [DEFAULT_MEDIA_TYPE]);
				pathItem.parameters = pathItemParameters.parameters;
				requestBodyObject = pathItemParameters.requestBody;
			} else if (Object.hasOwn(pathItem, methodOrParameters)) {
				const operationItem = pathItem[methodOrParameters];
				if (requestBodyObject) operationItem.requestBody = requestBodyObject;
				if (operationItem.parameters) {
					const migrationResult = migrateParameters(operationItem.parameters, operationItem.consumes ?? document.consumes ?? [DEFAULT_MEDIA_TYPE]);
					operationItem.parameters = migrationResult.parameters;
					if (migrationResult.requestBody) operationItem.requestBody = migrationResult.requestBody;
				}
				delete operationItem.consumes;
				if (operationItem.responses) {
					for (const response in operationItem.responses) if (Object.hasOwn(operationItem.responses, response)) {
						const responseItem = operationItem.responses[response];
						if (responseItem.headers && typeof responseItem.headers === "object") responseItem.headers = Object.entries(responseItem.headers).reduce((acc, [name, header]) => {
							if (header && typeof header === "object") return {
								[name]: transformResponseHeader(header),
								...acc
							};
							return acc;
						}, {});
						if (responseItem.schema) {
							migrateSchemaNullability(responseItem.schema);
							const produces = document.produces ?? operationItem.produces ?? [DEFAULT_MEDIA_TYPE];
							if (typeof responseItem.content !== "object") responseItem.content = {};
							for (const type of produces) responseItem.content[type] = { schema: responseItem.schema };
							delete responseItem.schema;
						}
						if (responseItem.examples && typeof responseItem.examples === "object") {
							if (typeof responseItem.content !== "object") responseItem.content = {};
							const defaultMediaType = (document.produces ?? operationItem.produces ?? [DEFAULT_MEDIA_TYPE])[0] ?? DEFAULT_MEDIA_TYPE;
							for (const [key, exampleValue] of Object.entries(responseItem.examples)) if (isMediaTypeKey(key)) {
								if (typeof responseItem.content[key] !== "object") responseItem.content[key] = {};
								responseItem.content[key].example = exampleValue;
							} else {
								if (typeof responseItem.content[defaultMediaType] !== "object") responseItem.content[defaultMediaType] = {};
								const mediaEntry = responseItem.content[defaultMediaType];
								if (typeof mediaEntry.examples !== "object") mediaEntry.examples = {};
								mediaEntry.examples[key] = wrapAsExampleObject(exampleValue);
							}
							delete responseItem.examples;
						}
						if (responseItem.content && typeof responseItem.content === "object") removeEmptySchemaOnlyContentEntries(responseItem.content);
					}
				}
				delete operationItem.produces;
				if (operationItem.parameters?.length === 0) delete operationItem.parameters;
			}
		}
	}
	if (document.securityDefinitions) {
		if (typeof document.components !== "object" || document.components === null) document.components = {};
		if (document.components && typeof document.components === "object") Object.assign(document.components, { securitySchemes: {} });
		for (const [key, securityScheme] of Object.entries(document.securityDefinitions)) if (typeof securityScheme === "object") {
			if ("type" in securityScheme && securityScheme.type === "oauth2") {
				const { flow, authorizationUrl, tokenUrl, scopes } = securityScheme;
				if (document.components && typeof document.components === "object" && "securitySchemes" in document.components && document.components.securitySchemes) Object.assign(document.components.securitySchemes, { [key]: {
					type: "oauth2",
					flows: { [upgradeFlow(flow || "implicit")]: Object.assign({}, authorizationUrl && { authorizationUrl }, tokenUrl && { tokenUrl }, scopes && { scopes }) }
				} });
			} else if ("type" in securityScheme && securityScheme.type === "basic") {
				if (document.components && typeof document.components === "object" && "securitySchemes" in document.components && document.components.securitySchemes) Object.assign(document.components.securitySchemes, { [key]: {
					type: "http",
					scheme: "basic"
				} });
			} else if (document.components && typeof document.components === "object" && "securitySchemes" in document.components && document.components.securitySchemes) Object.assign(document.components.securitySchemes, { [key]: securityScheme });
		}
		delete document.securityDefinitions;
	}
	delete document.consumes;
	delete document.produces;
	return document;
}
/**
* Swagger tooling uses x-nullable for the nullability keyword introduced in OpenAPI 3.0.
* Visit only subschemas so example/default values and custom extensions remain user data.
*/
var migrateSchemaNullability = (schema) => {
	if (!isObjectLike(schema)) return;
	if (typeof schema["x-nullable"] === "boolean") {
		if (schema["x-nullable"]) schema.nullable = true;
		delete schema["x-nullable"];
	}
	if (isObjectLike(schema.properties)) for (const property of Object.values(schema.properties)) migrateSchemaNullability(property);
	migrateSchemaNullability(schema.items);
	migrateSchemaNullability(schema.additionalProperties);
	if (Array.isArray(schema.allOf)) for (const member of schema.allOf) migrateSchemaNullability(member);
};
function transformItemsObject(obj) {
	const schema = [
		"type",
		"format",
		"default",
		"items",
		"maximum",
		"exclusiveMaximum",
		"minimum",
		"exclusiveMinimum",
		"maxLength",
		"minLength",
		"pattern",
		"maxItems",
		"minItems",
		"uniqueItems",
		"enum",
		"multipleOf",
		"x-nullable"
	].reduce((acc, property) => {
		if (Object.hasOwn(obj, property)) {
			acc[property] = obj[property];
			delete obj[property];
		}
		return acc;
	}, {});
	migrateSchemaNullability(schema);
	return schema;
}
function getParameterLocation(location) {
	if (location === "formData") throw new Error("Encountered a formData parameter which should have been filtered out by the caller");
	if (location === "body") throw new Error("Encountered a body parameter which should have been filtered out by the caller");
	return location;
}
function transformParameterObject(parameter) {
	if (Object.hasOwn(parameter, "$ref") && typeof parameter.$ref === "string") return { $ref: parameter.$ref };
	const serializationStyle = getParameterSerializationStyle(parameter);
	const schema = transformItemsObject(parameter);
	const { xExample, xExamples } = extractXExampleExtensions(parameter);
	if (isNonEmptyObject(xExample)) parameter.examples = transformXExampleToExamples(xExample);
	else if (isNonEmptyObject(xExamples)) parameter.examples = Object.entries(xExamples).reduce((acc, [key, exampleValue]) => {
		acc[key] = wrapAsExampleObject(exampleValue);
		return acc;
	}, {});
	delete parameter.collectionFormat;
	delete parameter.default;
	if (!parameter.in) throw new Error("Parameter object must have an \"in\" property");
	return {
		schema,
		...serializationStyle,
		...parameter,
		in: getParameterLocation(parameter.in)
	};
}
/**
* Transform OpenAPI 2.0 response header to OpenAPI 3.0 format.
* Response headers do not have "in", "name", "style", or "explode" properties.
*/
function transformResponseHeader(header) {
	if (Object.hasOwn(header, "$ref") && typeof header.$ref === "string") return { $ref: header.$ref };
	const schema = transformItemsObject(header);
	return {
		...header,
		schema
	};
}
var querySerialization = {
	ssv: {
		style: "spaceDelimited",
		explode: false
	},
	pipes: {
		style: "pipeDelimited",
		explode: false
	},
	multi: {
		style: "form",
		explode: true
	},
	csv: {
		style: "form",
		explode: false
	},
	tsv: {}
};
var pathAndHeaderSerialization = {
	ssv: {},
	pipes: {},
	multi: {},
	csv: {
		style: "simple",
		explode: false
	},
	tsv: {}
};
var serializationStyles = {
	header: pathAndHeaderSerialization,
	query: querySerialization,
	path: pathAndHeaderSerialization
};
function getParameterSerializationStyle(parameter) {
	if (parameter.type !== "array" || !(parameter.in === "query" || parameter.in === "path" || parameter.in === "header")) return {};
	const collectionFormat = parameter.collectionFormat ?? "csv";
	if (parameter.in in serializationStyles && collectionFormat in serializationStyles[parameter.in]) return serializationStyles[parameter.in][collectionFormat];
	return {};
}
/**
* Translate the Swagger 2.0 `collectionFormat` of a formData array parameter into an OpenAPI 3.0
* encoding entry. Form bodies serialize arrays with the same styles as query parameters, so the
* query serialization mapping is reused. Returns undefined when there is nothing to preserve, for
* example a non-array parameter, one without a `collectionFormat`, or `tsv` which has no OpenAPI
* 3.0 equivalent.
*/
function getFormDataEncoding(parameter) {
	if (parameter.type !== "array" || typeof parameter.collectionFormat !== "string") return;
	const encoding = querySerialization[parameter.collectionFormat];
	if (!encoding || Object.keys(encoding).length === 0) return;
	return encoding;
}
function migrateBodyParameter(bodyParameter, consumes) {
	const { xExample, xExamples } = extractXExampleExtensions(bodyParameter);
	delete bodyParameter.name;
	delete bodyParameter.in;
	const { schema, ...requestBody } = bodyParameter;
	migrateSchemaNullability(schema);
	const requestBodyObject = {
		content: {},
		...requestBody
	};
	if (requestBodyObject.content) for (const type of consumes) {
		requestBodyObject.content[type] = { schema };
		if (isNonEmptyObject(xExamples) && type in xExamples) {
			const examples = xExamples[type];
			if (isNonEmptyObject(examples) && Object.values(examples).every((example) => isExampleObject(example))) requestBodyObject.content[type].examples = examples;
			else if (isNamedExamplesCollection(examples)) requestBodyObject.content[type].examples = Object.entries(examples).reduce((acc, [key, exampleValue]) => {
				acc[key] = wrapAsExampleObject(exampleValue);
				return acc;
			}, {});
			else requestBodyObject.content[type].examples = { default: wrapAsExampleObject(examples) };
		} else if (isNonEmptyObject(xExamples) && !Object.keys(xExamples).some(isMediaTypeKey)) requestBodyObject.content[type].examples = Object.entries(xExamples).reduce((acc, [key, exampleValue]) => {
			acc[key] = wrapAsExampleObject(exampleValue);
			return acc;
		}, {});
		if (!requestBodyObject.content[type].examples && isNonEmptyObject(xExample) && type in xExample) requestBodyObject.content[type].example = xExample[type];
	}
	return requestBodyObject;
}
function migrateFormDataParameter(parameters, consumes = ["multipart/form-data"]) {
	const requestBodyObject = { content: {} };
	const filtered = consumes.filter((type) => type === "multipart/form-data" || type === "application/x-www-form-urlencoded");
	const contentTypes = filtered.length > 0 ? filtered : ["multipart/form-data"];
	if (requestBodyObject.content) for (const contentType of contentTypes) {
		requestBodyObject.content[contentType] = { schema: {
			type: "object",
			properties: {},
			required: []
		} };
		const formContent = requestBodyObject.content?.[contentType];
		if (formContent?.schema && typeof formContent.schema === "object" && "properties" in formContent.schema) {
			for (const param of parameters) if (param.name && formContent.schema.properties) {
				formContent.schema.properties[param.name] = {
					...transformItemsObject(structuredClone(param)),
					...param.description !== void 0 ? { description: param.description } : {}
				};
				const encoding = getFormDataEncoding(param);
				if (encoding) {
					formContent.encoding ??= {};
					formContent.encoding[param.name] = encoding;
				}
				if (param.required && Array.isArray(formContent.schema.required)) formContent.schema.required.push(param.name);
			}
		}
	}
	return requestBodyObject;
}
function migrateParameters(parameters, consumes) {
	const result = { parameters: parameters.filter((parameter) => !(parameter.in === "body" || parameter.in === "formData")).map((parameter) => transformParameterObject(parameter)) };
	const bodyParameter = structuredClone(parameters.find((parameter) => parameter.in === "body") ?? {});
	if (bodyParameter && Object.keys(bodyParameter).length) result.requestBody = migrateBodyParameter(bodyParameter, consumes);
	const formDataParameters = parameters.filter((parameter) => parameter.in === "formData");
	if (formDataParameters.length > 0) {
		const requestBodyObject = migrateFormDataParameter(formDataParameters, consumes);
		if (typeof result.requestBody !== "object") result.requestBody = requestBodyObject;
		else result.requestBody = {
			...result.requestBody,
			content: {
				...result.requestBody.content,
				...requestBodyObject.content
			}
		};
		if (typeof result.requestBody !== "object") result.requestBody = { content: {} };
	}
	return result;
}
//#endregion
//#region node_modules/@scalar/helpers/dist/openapi/is-schema-path.js
/**
* OpenAPI keywords whose values are (or contain) Schema Objects. When any of
* these appears as a keyword segment in a document path, the node lives inside
* a schema.
*/
var SCHEMA_SEGMENTS = /* @__PURE__ */ new Set([
	"properties",
	"items",
	"allOf",
	"anyOf",
	"oneOf",
	"not",
	"additionalProperties",
	"schema",
	"schemas"
]);
/**
* OpenAPI keywords whose value is a map with user-defined keys (component
* names, path templates, media types, status codes, header names, …). A key
* inside one of these maps is a *name*, never a keyword, so it must not be
* matched against the schema keywords above — a parameter called `not` or a
* response called `ErrorSchema` does not put us inside a schema.
*/
var USER_KEYED_MAPS = /* @__PURE__ */ new Set([
	"paths",
	"webhooks",
	"responses",
	"content",
	"headers",
	"examples",
	"links",
	"encoding",
	"variables",
	"parameters",
	"requestBodies",
	"securitySchemes",
	"pathItems",
	"scopes"
]);
/**
* Determine whether a document path points inside a JSON Schema.
*
* OpenAPI 3.1 schemas are reachable through a handful of well-known keywords
* (`schema`, `properties`, `items`, the composition keywords, …), through any
* `*Schema` keyword (such as `contentSchema`), or directly under
* `components/schemas`. Knowing this lets callers treat schema `$ref`s — which
* may legally carry sibling keywords in JSON Schema 2020-12 — differently from
* plain OpenAPI Reference Objects, where only `summary` and `description` are
* allowed next to `$ref`.
*
* The path is walked left to right so that segments in user-defined key
* positions (component names, path templates, header names, …) are never
* mistaken for schema keywords. Bundled external documents are stored below
* `x-ext/<hash>`; that wrapper is skipped before evaluating the embedded path.
*/
var isSchemaPath = (path) => {
	if (!path) return false;
	const segments = path[0] === "x-ext" && path[1] !== void 0 ? path.slice(2) : path;
	let userKeySegments = 0;
	for (const segment of segments) {
		if (userKeySegments > 0) {
			userKeySegments--;
			continue;
		}
		if (SCHEMA_SEGMENTS.has(segment) || segment.endsWith("Schema")) return true;
		if (segment === "callbacks") {
			userKeySegments = 2;
			continue;
		}
		if (USER_KEYED_MAPS.has(segment)) userKeySegments = 1;
	}
	return false;
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/3.0-to-3.1/upgrade-from-three-to-three-one.js
var NAMED_SCHEMA_MAP_SEGMENTS = /* @__PURE__ */ new Set([
	"properties",
	"patternProperties",
	"$defs",
	"definitions"
]);
/**
* Determine if the node at `path` is a map of named subschemas rather than a schema object.
*
* This matters because the 3.0 to 3.1 upgrade rewrites the `example` keyword into `examples`.
* A key called `example` (or `examples`) inside one of these maps is a member *name*, not the
* schema keyword, so it must be left untouched.
*/
function isNamedSchemaMap(path) {
	const last = path?.[path.length - 1];
	if (last === void 0) return false;
	if (last === "schemas" && path?.[path.length - 2] === "components") return true;
	return NAMED_SCHEMA_MAP_SEGMENTS.has(last);
}
var DATA_KEYWORDS = /* @__PURE__ */ new Set([
	"example",
	"default",
	"const",
	"enum"
]);
/**
* Determine if the node at `path` lives inside a data value rather than a schema.
*
* The traversal visits every object node, but a value held by keywords like `example` or
* `default` is user data, not a schema. Applying the schema transforms to it would mangle it
* (turning `nullable: true` into a type array, renaming a nested `x-webhooks`, and so on).
*/
function isInsideDataValue(path) {
	if (!path) return false;
	for (const [index, segment] of path.entries()) {
		if (DATA_KEYWORDS.has(segment) && !isNamedSchemaMap(path.slice(0, index))) return true;
		if (segment === "value" && path[index - 2] === "examples" && !isNamedSchemaMap(path.slice(0, index - 2))) return true;
	}
	return false;
}
/**
* Upgrade from OpenAPI 3.0.x to 3.1.1
*
* https://www.openapis.org/blog/2021/02/16/migrating-from-openapi-3-0-to-3-1-0
*/
function upgradeFromThreeToThreeOne(originalContent) {
	let content = originalContent;
	if (content === null || typeof content.openapi !== "string" || !content.openapi.startsWith("3.0")) return content;
	content.openapi = "3.1.1";
	content = traverse(content, applyChangesToDocument);
	return content;
}
var applyChangesToDocument = (schema, path) => {
	if (isInsideDataValue(path)) return schema;
	if (schema.type !== void 0 && schema.nullable === true) {
		schema.type = [schema.type, "null"];
		delete schema.nullable;
	} else if (schema.nullable === true && schema.type === void 0) {
		if (typeof schema.$ref === "string") {
			const { nullable: _nullable, $ref, ...rest } = schema;
			return {
				...rest,
				anyOf: [{ $ref }, { type: "null" }]
			};
		}
		if (Array.isArray(schema.allOf)) {
			const { nullable: _nullable, allOf, ...rest } = schema;
			const base = allOf.length === 1 ? allOf[0] : { allOf };
			return {
				...rest,
				anyOf: [base, { type: "null" }]
			};
		}
	}
	if (schema.exclusiveMinimum === true && schema.minimum !== void 0) {
		schema.exclusiveMinimum = schema.minimum;
		delete schema.minimum;
	} else if (typeof schema.exclusiveMinimum === "boolean") delete schema.exclusiveMinimum;
	if (schema.exclusiveMaximum === true && schema.maximum !== void 0) {
		schema.exclusiveMaximum = schema.maximum;
		delete schema.maximum;
	} else if (typeof schema.exclusiveMaximum === "boolean") delete schema.exclusiveMaximum;
	const isInsideExamplesMap = path?.some((segment, index) => {
		if (segment === "examples" && index > 0) return !isNamedSchemaMap(path.slice(0, index));
		return false;
	});
	if (schema.example !== void 0 && !isInsideExamplesMap && !isNamedSchemaMap(path)) {
		if (isSchemaPath(path)) schema.examples = [schema.example];
		else schema.examples = { default: { value: schema.example } };
		delete schema.example;
	}
	const { format: _, ...rest } = schema;
	if (schema.type === "string" || Array.isArray(schema.type) && schema.type.includes("string")) {
		if (schema.format === "binary") {
			const { type: _type, ...binarySchema } = rest;
			return path?.at(-1) === "schema" && path.at(-3) === "content" ? binarySchema : {
				contentMediaType: "application/octet-stream",
				...binarySchema
			};
		}
		if (schema.format === "base64" || schema.format === "byte") return {
			...rest,
			contentEncoding: "base64"
		};
	}
	if (schema["x-webhooks"] !== void 0 && (path === void 0 || path.length === 0)) {
		schema.webhooks = schema["x-webhooks"];
		delete schema["x-webhooks"];
	}
	return schema;
};
//#endregion
//#region node_modules/@scalar/openapi-upgrader/dist/upgrade.js
function upgrade(value, targetVersion, options) {
	if (targetVersion === "3.2") {
		const openapi31 = upgradeFromThreeToThreeOne(upgradeFromTwoToThree(cloneDocument(value)));
		try {
			const document = migrateThreeOneToThreeTwo(openapi31, options?.onIncompatible === "ignore" ? "ignore" : "throw");
			return options?.onIncompatible === "collect" ? {
				document,
				diagnostics: []
			} : document;
		} catch (error) {
			if (options?.onIncompatible !== "collect" || !(error instanceof UpgradeIncompatibilityError)) throw error;
			return {
				document: upgrade(cloneDocument(value), "3.1"),
				diagnostics: error.errors
			};
		}
	}
	const openapi30 = upgradeFromTwoToThree(value);
	return targetVersion === "3.0" ? openapi30 : upgradeFromThreeToThreeOne(openapi30);
}
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/type-comment.js
var TYPE_COMMENT_FENCE = "```";
/**
* Fenced code block for typeComment strings (used by type generation for JSDoc).
* Example bodies are passed through as-is so backticks and `${...}` appear literally in docs.
*/
var typeCommentCodeBlock = (language, body) => `${TYPE_COMMENT_FENCE}${language}\n${body.trimEnd()}\n${TYPE_COMMENT_FENCE}`;
/** `@example` section with a fenced code block for typeComment. */
var typeCommentExample = (language, body) => `@example\n${typeCommentCodeBlock(language, body)}`;
/** Inline code span for typeComment strings (for example `` `enum` ``). */
var typeCommentInlineCode = (text) => `\`${text}\``;
/** Join typeComment sections with a blank line between each. */
var typeCommentSections = (...sections) => sections.join("\n\n");
/** Description plus an `@example` fenced code block for typeComment. */
var typeCommentWithExample = (description, example) => typeCommentSections(description, typeCommentExample(example.language, example.body));
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-internal.js
var XInternal = object({ "x-internal": optional(boolean({ typeComment: "When true, hides the entity from public documentation" })) }, {
	typeName: "XInternal",
	typeComment: typeCommentWithExample("Marks an entity as internal (hidden from external consumers).", {
		language: "yaml",
		body: "x-internal: true"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-original-aas-version.js
var XOriginalAasVersion = object({ "x-original-aas-version": optional(string({ typeComment: "Original AsyncAPI Specification version the document was loaded with." })) }, {
	typeName: "XOriginalAasVersion",
	typeComment: typeCommentWithExample("Original AsyncAPI Specification version of the source document before ingestion.", {
		language: "yaml",
		body: "x-original-aas-version: \"3.0.0\""
	})
});
object({ "x-original-oas-version": optional(string({ typeComment: "Original OpenAPI Specification version of the source document." })) }, {
	typeName: "XOriginalOasVersion",
	typeComment: typeCommentWithExample("Original OpenAPI Specification version of the source document before ingestion.", {
		language: "yaml",
		body: "x-original-oas-version: \"3.1.0\""
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-environments.js
/** A scalar environment variable */
var XScalarEnvVar = object({
	name: string({ typeComment: "Variable name" }),
	value: union([object({
		description: optional(string()),
		default: string()
	}), string()], { typeComment: "Variable value as a string, or an object with description and default" })
}, {
	typeName: "XScalarEnvVar",
	typeComment: "An environment variable definition"
});
/** An environment definition */
var XScalarEnvironment = object({
	description: optional(string({ typeComment: "Optional description for the environment" })),
	color: string({ typeComment: "Color for the environment (for example a hex value)" }),
	variables: array(XScalarEnvVar, { typeComment: "Variables available in this environment" })
}, {
	typeName: "XScalarEnvironment",
	typeComment: "A named environment with variables and display color"
});
object({ "x-scalar-environments": optional(record(string(), XScalarEnvironment, { typeComment: "Environments keyed by name" })) }, {
	typeName: "XScalarEnvironments",
	typeComment: typeCommentWithExample("Named environments with variables for the API client (base URLs, tokens, etc.).", {
		language: "yaml",
		body: `x-scalar-environments:
  production:
    color: "#00ff00"
    variables:
      - name: apiKey
        value: prod-key`
	})
});
object({ "x-scalar-icon": optional(string({ typeComment: "Icon identifier or URL for the API description" })) }, {
	typeName: "XScalarIcon",
	typeComment: typeCommentWithExample("A custom icon representing the API description in the Scalar UI.", {
		language: "yaml",
		body: "x-scalar-icon: rocket"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-ignore.js
/** Internal extension to mark an entity as ignored in the Scalar UI */
var XScalarIgnore = object({ "x-scalar-ignore": optional(boolean({ typeComment: "When true, the entity is hidden or ignored in the UI" })) }, {
	typeName: "XScalarIgnore",
	typeComment: typeCommentWithExample("Internal extension to mark an entity as ignored in the Scalar UI.", {
		language: "yaml",
		body: "x-scalar-ignore: true"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-is-dirty.js
var XScalarIsDirty = object({ "x-scalar-is-dirty": optional(boolean({ typeComment: "When true, the document has unsaved changes" })) }, {
	typeName: "XScalarIsDirty",
	typeComment: typeCommentWithExample("Tracks whether the document has been modified since it was last saved.", {
		language: "yaml",
		body: "x-scalar-is-dirty: true"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-links.js
var XScalarLinkItem = object({
	name: string({ typeComment: "The label to display for the link." }),
	url: string({ typeComment: "The URL the link points to." })
}, {
	typeName: "XScalarLinkItem",
	typeComment: "A named link to display alongside the API info"
});
object({ "x-scalar-links": optional(array(XScalarLinkItem, { typeComment: "Additional named links to display alongside the API info (e.g. privacy policy, imprint)" })) }, {
	typeName: "XScalarLinks",
	typeComment: typeCommentWithExample("Additional named links to display alongside the API info, for example a privacy policy or an imprint. This is handy for the legal texts that some countries require on public websites.", {
		language: "yaml",
		body: `x-scalar-links:
  - name: Privacy Policy
    url: https://example.com/privacy
  - name: Imprint
    url: https://example.com/imprint`
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-navigation.js
var XScalarNavigation = object({ "x-scalar-navigation": optional(any({ typeComment: "Serialized client navigation tree (`TraversedDocument`) for this API description" })) }, {
	typeName: "XScalarNavigation",
	typeComment: "Client-side navigation tree persisted on the document. Matches `TraversedDocumentObjectRef` in strict OpenAPI schemas."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-original-document-hash.js
var XScalarOriginalDocumentHash = object({ "x-scalar-original-document-hash": string({ typeComment: "Hash of the document as originally loaded from an external source" }) }, {
	typeName: "XScalarOriginalDocumentHash",
	typeComment: typeCommentWithExample("Tracks the original document hash when loading from an external source. Used to detect modifications since last save.", {
		language: "yaml",
		body: "x-scalar-original-document-hash: \"abc123\""
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-original-source-url.js
var XScalarOriginalSourceUrl = object({ "x-scalar-original-source-url": optional(string({ typeComment: "Original document source URL when loaded from an external source" })) }, {
	typeName: "XScalarOriginalSourceUrl",
	typeComment: typeCommentWithExample("Original document source URL when the API description was loaded from an external source.", {
		language: "yaml",
		body: "x-scalar-original-source-url: https://example.com/openapi.yaml"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-registry-meta.js
var XScalarRegistryMetaInner = object({
	namespace: string({ typeComment: "The namespace under which this registry meta is scoped." }),
	slug: string({ typeComment: "A unique slug identifier for this registry meta within the namespace." }),
	version: string({ typeComment: "The version of the registry meta." }),
	commitHash: optional(string({ typeComment: "Last known commit hash of this document. Is going to be used to track if the document has been modified since it was last saved." })),
	conflictCheckedAgainstHash: optional(string({ typeComment: "Registry commit hash that the cached `hasConflict` flag was computed against. When the registry advertises a different hash later, the cached result is stale and the conflict check must be re-run." })),
	hasConflict: optional(boolean({ typeComment: "Cached outcome of the last conflict check, valid only while `conflictCheckedAgainstHash` matches the registry current hash for this version." }))
}, {
	typeName: "XScalarRegistryMetaInner",
	typeComment: "Registry meta namespace and slug"
});
var XScalarRegistryMeta = object({ "x-scalar-registry-meta": optional(XScalarRegistryMetaInner) }, {
	typeName: "XScalarRegistryMeta",
	typeComment: typeCommentWithExample("Registry sync metadata for a document published to Scalar Registry.", {
		language: "yaml",
		body: `x-scalar-registry-meta:
  namespace: acme
  slug: public-api
  version: "1.0.0"`
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-sdk-installation.js
var XScalarSdkInstallationItem = object({
	lang: string({ typeComment: "Programming language or platform (for example `TypeScript`, `Java`, `Python`)" }),
	description: optional(string({ typeComment: "Installation instructions in Markdown (supports fenced code blocks)" })),
	source: optional(string({ typeComment: "@deprecated Use `description` instead. When set, it is appended to `description` as a fenced code block (or used on its own when there is no `description`)." }))
}, {
	typeName: "XScalarSdkInstallationItem",
	typeComment: "One SDK installation instruction block"
});
object({ "x-scalar-sdk-installation": optional(array(XScalarSdkInstallationItem, { typeComment: "Installation instructions shown in the API reference" })) }, {
	typeName: "XScalarSdkInstallation",
	typeComment: typeCommentWithExample("Scalar SDK installation instructions for the API description.", {
		language: "yaml",
		body: `x-scalar-sdk-installation:
  - lang: TypeScript
    description: Install our SDK from npm with \`npm install @scalar/sdk\``
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-scalar-watch-mode.js
var XScalarWatchMode = object({ "x-scalar-watch-mode": optional(boolean({ typeComment: "When true, the document is watched for external file changes" })) }, {
	typeName: "XScalarWatchMode",
	typeComment: typeCommentWithExample("Whether the document is in watch mode (reloads when the source file changes).", {
		language: "yaml",
		body: "x-scalar-watch-mode: true"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/document/x-tags.js
var XTags = object({ "x-tags": optional(array(string(), { typeComment: "Ordered list of tag names for this schema object" })) }, {
	typeName: "XTags",
	typeComment: typeCommentWithExample("Custom tag ordering hints for schema objects in the sidebar.", {
		language: "yaml",
		body: `x-tags:
  - users
  - admin`
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/server/x-scalar-selected-server.js
var XScalarSelectedServer = object({ "x-scalar-selected-server": optional(string({ typeComment: "The currently selected server. For OpenAPI documents this is the server URL; for AsyncAPI documents this is the server name (key in `document.servers`)." })) }, {
	typeName: "XScalarSelectedServer",
	typeComment: typeCommentWithExample("The currently selected server for this API description. For OpenAPI documents the value is the server URL; for AsyncAPI documents the value is the server name (key in `document.servers`).", {
		language: "yaml",
		body: "x-scalar-selected-server: https://api.example.com"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/schema/x-additional-properties-name.js
/**
* x-additionalPropertiesName
*
* Custom attribute name for additionalProperties in a schema.
* This allows specifying a descriptive name for additional properties that may be present in an object.
*/
var XAdditionalPropertiesName = object({ "x-additionalPropertiesName": optional(string({ typeComment: "Human-readable label for additional properties on this schema" })) }, {
	typeName: "XAdditionalPropertiesName",
	typeComment: typeCommentWithExample("Display name for additional properties on a schema object.", {
		language: "yaml",
		body: "x-additionalPropertiesName: metadata"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/schema/x-enum-descriptions.js
var enumDescriptionValue = union([record(string(), string()), array(string())]);
/**
* x-enumDescriptions / x-enum-descriptions
*
* Maps enum values to their descriptions. Each key should correspond to an enum value,
* and the value is the description for that enum value.
*
* @example
* ```yaml
* x-enumDescriptions:
*   missing_features: Missing features
*   too_expensive: Too expensive
*   unused: Unused
*   other: Other
* ```
*/
var XEnumDescriptions = object({
	"x-enumDescriptions": optional(enumDescriptionValue, { typeComment: "Map or list of descriptions keyed by enum value (camelCase spelling)" }),
	"x-enum-descriptions": optional(enumDescriptionValue, { typeComment: "Map or list of descriptions keyed by enum value (kebab-case spelling)" })
}, {
	typeName: "XEnumDescriptions",
	typeComment: typeCommentWithExample("Descriptions for enum values. Keys must match enum values.", {
		language: "yaml",
		body: `x-enumDescriptions:
  other: Other reason`
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/schema/x-enum-varnames.js
/**
* x-enum-varnames / x-enumNames
*
* Names the enum values. Must be in the same order as the enum values.
*
* @example
* ```yaml
* enum:
*   - moon
*   - asteroid
*   - comet
* x-enum-varnames:
*   - Moon
*   - Asteroid
*   - Comet
* ```
*/
var XEnumVarNames = object({
	"x-enum-varnames": optional(array(string(), { typeComment: "Display names for enum values (same order as `enum`)" })),
	"x-enumNames": optional(array(string(), { typeComment: "Alias for x-enum-varnames — display names for enum values" }))
}, {
	typeName: "XEnumVarNames",
	typeComment: typeCommentWithExample(`Display names for enum values. Must match the order of the ${typeCommentInlineCode("enum")} array.`, {
		language: "yaml",
		body: `enum: [moon, asteroid]
x-enum-varnames: [Moon, Asteroid]`
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/schema/x-examples.js
var XExamples = object({ "x-examples": optional(record(string(), any(), { typeComment: "Map of example name to example value" })) }, {
	typeName: "XExamples",
	typeComment: typeCommentWithExample("Named examples attached to a schema. Keys are example names; values are the example payloads.", {
		language: "yaml",
		body: `x-examples:
  user:
    id: 1
    name: Ada`
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/extensions/schema/x-variable.js
var XVariable = object({ "x-variable": optional(string({ typeComment: "Variable name used for substitution in the API client" })) }, {
	typeName: "XVariable",
	typeComment: typeCommentWithExample("References a variable for schema property substitution in the API client.", {
		language: "yaml",
		body: "x-variable: userId"
	})
});
//#endregion
//#region node_modules/@scalar/schemas/dist/openapi/3.1/discriminator.js
var discriminatorObject$1 = object({
	propertyName: string({ typeComment: "REQUIRED. The name of the property in the payload that will hold the discriminating value. This property SHOULD be required in the payload schema, as the behavior when the property is absent is undefined." }),
	mapping: optional(record(string(), string(), { typeComment: "An object to hold mappings between payload values and schema names or URI references." }))
}, { typeName: "DiscriminatorObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/openapi/3.1/external-docs.js
var externalDocs$1 = object({
	url: string({ typeComment: "REQUIRED. The URI for the target documentation. This MUST be in the form of a URI." }),
	description: optional(string({ typeComment: "A description of the target documentation. CommonMark syntax MAY be used for rich text representation." }))
}, { typeName: "ExternalDocumentationObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/general/bundler-extensions.js
var referenceExtensions$1 = object({
	"$status": optional(union([literal("loading"), literal("error")]), { typeComment: `Indicates the current status of the reference resolution. Can be either 'loading' while fetching the reference or 'error' if the resolution failed.` }),
	"$global": optional(boolean({ typeComment: "Indicates whether this reference should be resolved globally across all documents, rather than just within the current document context." }))
}, { typeName: "ReferenceObjectExtensions" });
//#endregion
//#region node_modules/@scalar/schemas/dist/openapi/3.1/reference.js
var reference$1 = object({
	"$ref": string({ typeComment: "REQUIRED. The reference identifier. This MUST be in the form of a URI." }),
	summary: optional(string({ typeComment: "A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect." })),
	description: optional(string({ typeComment: "A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect." }))
}, { typeName: "ReferenceObject" });
/**
* Wraps a JSON Schema so it may also be satisfied by a Reference Object (no resolved `$ref-value`).
*
* Use for `components.schemas` and schema composition (`allOf`, `properties`, `items`, and similar)
* where references follow JSON Schema / OpenAPI schema rules only.
*/
var normalRef = (inner) => union([reference$1, inner]);
//#endregion
//#region node_modules/@scalar/schemas/dist/openapi/3.1/xml.js
var xml$1 = object({
	name: optional(string({ typeComment: "Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being \"array\" (outside the items), it will affect the wrapping element if and only if wrapped is true. If wrapped is false, it will be ignored." })),
	namespace: optional(string({ typeComment: "The URI of the namespace definition. Value MUST be in the form of a non-relative URI." })),
	prefix: optional(string({ typeComment: "The prefix to be used for the name." })),
	attribute: optional(boolean({ typeComment: "Declares whether the property definition translates to an attribute instead of an element. Default value is false." })),
	wrapped: optional(boolean({ typeComment: "MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being \"array\" (outside the items)." }))
}, { typeName: "XMLObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/openapi/3.1/schema.js
var schemaExtensionObjects = [
	XScalarIgnore,
	XInternal,
	XVariable,
	XExamples,
	XEnumDescriptions,
	XEnumVarNames,
	XAdditionalPropertiesName,
	XTags
];
var coreSchemaProperties = object({
	name: optional(string({ typeComment: "Schema name (extension)." })),
	title: optional(string({ typeComment: "A title for the schema." })),
	description: optional(string({ typeComment: "A description of the schema." })),
	default: optional(any({ typeComment: "Default value for the schema." })),
	enum: optional(array(any(), {
		typeComment: "Array of allowed values.",
		typeName: "JsonSchemaEnum"
	})),
	const: optional(any({ typeComment: "Constant value that must match exactly." })),
	contentMediaType: optional(string({ typeComment: "Media type for content validation." })),
	contentEncoding: optional(string({ typeComment: "Content encoding." })),
	contentSchema: optional(normalRef(lazy(() => schema))),
	deprecated: optional(boolean({ typeComment: "Whether the schema is deprecated." })),
	discriminator: optional(discriminatorObject$1),
	readOnly: optional(boolean({ typeComment: "Whether the schema is read-only." })),
	writeOnly: optional(boolean({ typeComment: "Whether the schema is write-only." })),
	xml: optional(xml$1),
	externalDocs: optional(externalDocs$1),
	example: optional(any({ typeComment: "A free-form field to include an example of an instance for this schema. Deprecated in favor of the JSON Schema examples keyword." })),
	examples: optional(array(any(), {
		typeComment: "An array of examples of valid instances for this schema. This keyword follows the JSON Schema Draft 2020-12 specification.",
		typeName: "SchemaExamplesArray"
	})),
	allOf: optional(array(normalRef(lazy(() => schema)), { typeName: "SchemaObjectAllOf" })),
	oneOf: optional(array(normalRef(lazy(() => schema)), { typeName: "SchemaObjectOneOf" })),
	anyOf: optional(array(normalRef(lazy(() => schema)), { typeName: "SchemaObjectAnyOf" })),
	not: optional(normalRef(lazy(() => schema)))
});
var numericValidationKeywords = object({
	multipleOf: optional(number({ typeComment: "Number must be a multiple of this value." })),
	maximum: optional(number({ typeComment: "Maximum value (inclusive)." })),
	exclusiveMaximum: optional(number({ typeComment: "Maximum value (exclusive)." })),
	minimum: optional(number({ typeComment: "Minimum value (inclusive)." })),
	exclusiveMinimum: optional(number({ typeComment: "Minimum value (exclusive)." }))
});
var numericSchema = intersection([object({
	type: union([literal("number"), literal("integer")]),
	format: optional(string({ typeComment: "Different subtypes." }))
}), numericValidationKeywords], { typeName: "NumberSchemaObject" });
var stringValidationKeywords = object({
	maxLength: optional(number({ typeComment: "Maximum string length." })),
	minLength: optional(number({ typeComment: "Minimum string length." })),
	pattern: optional(string({ typeComment: "Regular expression pattern." }))
});
var stringSchema = intersection([object({
	type: literal("string"),
	format: optional(string({ typeComment: "Different subtypes." }))
}), stringValidationKeywords], { typeName: "StringSchemaObject" });
var objectValidationKeywords = object({
	maxProperties: optional(number({ typeComment: "Maximum number of properties." })),
	minProperties: optional(number({ typeComment: "Minimum number of properties." })),
	properties: optional(record(string(), normalRef(lazy(() => schema)), { typeName: "SchemaObjectProperties" })),
	required: optional(array(string(), { typeName: "SchemaObjectRequired" })),
	additionalProperties: optional(union([
		normalRef(lazy(() => schema)),
		object({}),
		boolean()
	], { typeName: "SchemaObjectAdditionalProperties" })),
	patternProperties: optional(record(string(), normalRef(lazy(() => schema)), { typeName: "SchemaObjectPatternProperties" })),
	propertyNames: optional(normalRef(lazy(() => schema)))
});
var objectSchema = intersection([object({ type: literal("object") }), objectValidationKeywords], { typeName: "ObjectSchemaObject" });
var arrayValidationKeywords = object({
	maxItems: optional(number({ typeComment: "Maximum number of items in array." })),
	minItems: optional(number({ typeComment: "Minimum number of items in array." })),
	uniqueItems: optional(boolean({ typeComment: "Whether array items must be unique." })),
	items: optional(normalRef(lazy(() => schema))),
	prefixItems: optional(array(normalRef(lazy(() => schema)), { typeComment: "Schema for tuple validation." }))
});
var arraySchema = intersection([object({ type: literal("array") }), arrayValidationKeywords], { typeName: "ArraySchemaObject" });
var schemaTypeMulti = union([
	literal("null"),
	literal("boolean"),
	literal("string"),
	literal("number"),
	literal("integer"),
	literal("object"),
	literal("array")
], { typeName: "SchemaObjectMultiTypeKeywords" });
var otherTypeSchema = object({ type: union([literal("null"), literal("boolean")], { typeName: "SchemaObjectOtherTypeKeyword" }) });
var multiTypeSchema = intersection([
	object({
		type: array(schemaTypeMulti, { typeName: "SchemaObjectMultiTypeKeywordArray" }),
		format: optional(string({ typeComment: "Different subtypes." }))
	}),
	numericValidationKeywords,
	stringValidationKeywords,
	arrayValidationKeywords,
	objectValidationKeywords
], { typeName: "MultiTypeSchemaObject" });
var schema = intersection([
	coreSchemaProperties,
	...schemaExtensionObjects,
	union([
		otherTypeSchema,
		numericSchema,
		stringSchema,
		objectSchema,
		arraySchema,
		multiTypeSchema,
		object({})
	])
], { typeName: "SchemaObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/reference.js
/**
* AsyncAPI Reference Object (JSON Reference). Only `$ref` is defined; additional
* properties SHALL be ignored per the specification.
*/
var asyncApiReferenceObject = object({ "$ref": string({ typeComment: "REQUIRED. The reference string." }) }, {
	typeName: "AsyncApiReferenceObject",
	typeComment: "JSON Reference for AsyncAPI components."
});
/**
* Follows a chain of references to the value at its end. References can form a loop (`A` points at
* `B` and `B` points back at `A`, or a schema points at itself), so we stop at the first reference we
* have already passed. Without that, a loop in an untrusted document overflows the stack.
*/
var e$1 = (value) => {
	const seen = /* @__PURE__ */ new Set();
	let current = value;
	while (isObject$1(current) && "$ref" in current && !seen.has(current)) {
		seen.add(current);
		current = current["$ref-value"];
	}
	return current;
};
/**
* Reference Object with resolved `$ref-value` and bundle extensions.
*
* Use when the specification allows only a Reference Object (not an inline object), for example
* `operation.channel` or `channel.servers`.
*
* `$ref-value` is a resolved-document extension populated by the bundler/proxy at access time, so it
* is optional here. If coercion required it, an unresolved `{ $ref }` would be filled with a default
* instance of `schema` (for a security scheme, the first `type` literal — `userPassword`). Because the
* magic proxy shares one target object between a `$ref-value` and the component it points at, that
* synthetic default then leaks back over the real definition, clobbering its `type`.
*/
var asyncApiResolvedReference = (schema) => intersection([
	asyncApiReferenceObject,
	object({ "$ref-value": optional(evaluate(e$1, schema)) }),
	referenceExtensions$1
]);
/** Inline object or Reference Object with resolved `$ref-value`. */
var recursiveRef$1 = (schema) => union([schema, asyncApiResolvedReference(schema)]);
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/schema-payload.js
var asyncApiMultiFormatSchemaObject = object({
	schemaFormat: optional(string({ typeComment: "Media type identifying the schema format. When omitted, defaults to the AsyncAPI JSON Schema vocabulary for the document version." })),
	schema: unknown({ typeComment: "REQUIRED. Schema definition in the format given by schemaFormat." })
}, { typeName: "AsyncApiMultiFormatSchemaObject" });
var asyncApiSchemaJsonShape = union([
	literal(true),
	literal(false),
	schema
], { typeName: "AsyncApiSchemaJsonShape" });
/** Schema Object | Reference Object */
var asyncApiSchemaObjectOrReference = recursiveRef$1(asyncApiSchemaJsonShape);
/** Multi Format Schema Object | Schema Object | Reference Object */
var asyncApiSchemaPayload = recursiveRef$1(union([asyncApiMultiFormatSchemaObject, asyncApiSchemaJsonShape], { typeName: "AsyncApiMultiFormatSchemaOrSchemaObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/ws-binding.js
/**
* AsyncAPI WebSocket binding (channel / operation / server).
*
* @see https://github.com/asyncapi/bindings/tree/master/websockets
*/
var asyncApiWsBindingObject = object({
	method: optional(union([literal("GET"), literal("POST")], { typeComment: "HTTP method used when establishing the WebSocket connection (typically GET)." })),
	query: optional(asyncApiSchemaObjectOrReference, { typeComment: "Schema Object describing WebSocket handshake query parameters (type object with properties). May be a Reference Object." }),
	headers: optional(asyncApiSchemaObjectOrReference, { typeComment: "Schema Object describing HTTP headers sent during the WebSocket handshake (type object with properties). May be a Reference Object." }),
	bindingVersion: optional(string({ typeComment: "Version of the WebSocket binding. When omitted, \"latest\" is assumed per the binding spec." }))
}, {
	typeName: "AsyncApiWsBindingObject",
	typeComment: "AsyncAPI WebSocket binding for handshake method, query, and headers."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/bindings.js
/**
* Protocol keys listed for binding objects in AsyncAPI 3.1.0. Values are
* protocol-specific; we accept any JSON-compatible structure.
*/
var ASYNCAPI_3_1_BINDING_PROTOCOL_KEYS = [
	"http",
	"ws",
	"kafka",
	"anypointmq",
	"amqp",
	"amqp1",
	"mqtt",
	"mqtt5",
	"nats",
	"jms",
	"sns",
	"solace",
	"sqs",
	"stomp",
	"redis",
	"mercure",
	"ibmmq",
	"googlepubsub",
	"pulsar",
	"ros2"
];
var optionalBindingPayload = () => optional(unknown({ typeComment: "Protocol-specific binding definition (see AsyncAPI protocol bindings)." }));
var bindingObjectProperties = () => {
	const properties = {};
	for (const key of ASYNCAPI_3_1_BINDING_PROTOCOL_KEYS) properties[key] = key === "ws" ? optional(asyncApiWsBindingObject) : optionalBindingPayload();
	return properties;
};
var makeBindingsObject = (typeName, typeComment) => object(bindingObjectProperties(), {
	typeName,
	typeComment
});
var asyncApiServerBindingsObject = makeBindingsObject("AsyncApiServerBindingsObject", "Map describing protocol-specific definitions for a server (AsyncAPI 3.1.0).");
var asyncApiChannelBindingsObject = makeBindingsObject("AsyncApiChannelBindingsObject", "Map describing protocol-specific definitions for a channel (AsyncAPI 3.1.0).");
var asyncApiOperationBindingsObject = makeBindingsObject("AsyncApiOperationBindingsObject", "Map describing protocol-specific definitions for an operation (AsyncAPI 3.1.0).");
var asyncApiMessageBindingsObject = makeBindingsObject("AsyncApiMessageBindingsObject", "Map describing protocol-specific definitions for a message (AsyncAPI 3.1.0).");
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/external-documentation.js
/** External Documentation Object | Reference Object */
var asyncApiExternalDocumentationObject = recursiveRef$1(object({
	description: optional(string({ typeComment: "A short description of the target documentation. CommonMark syntax MAY be used for rich text representation." })),
	url: string({ typeComment: "REQUIRED. The URL for the target documentation. This MUST be in the form of an absolute URL." })
}, { typeName: "AsyncApiExternalDocumentationObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/correlation-id.js
/** Correlation ID Object | Reference Object */
var asyncApiCorrelationIdObject = recursiveRef$1(object({
	description: optional(string({ typeComment: "An optional description of the identifier. CommonMark syntax MAY be used for rich text representation." })),
	location: string({ typeComment: "REQUIRED. A runtime expression that specifies the location of the correlation ID." })
}, { typeName: "AsyncApiCorrelationIdObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/message-example.js
var asyncApiMessageExampleObject = object({
	headers: optional(record(string(), unknown(), { typeComment: "Example headers; MUST validate against the Message Object headers field when present." })),
	payload: optional(unknown({ typeComment: "Example payload; MUST validate against the Message Object payload field when present." })),
	name: optional(string({ typeComment: "A machine-friendly name." })),
	summary: optional(string({ typeComment: "A short summary of what the example is about." }))
}, { typeName: "AsyncApiMessageExampleObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/tag.js
/** Tag Object | Reference Object */
var asyncApiTagObject = recursiveRef$1(object({
	name: string({ typeComment: "REQUIRED. The name of the tag." }),
	description: optional(string({ typeComment: "A short description for the tag. CommonMark syntax MAY be used for rich text representation." })),
	externalDocs: optional(asyncApiExternalDocumentationObject)
}, { typeName: "AsyncApiTagObject" }));
var asyncApiTagsObject = array(asyncApiTagObject, {
	typeName: "AsyncApiTagsObject",
	typeComment: "A list of Tag Objects (entries MAY be Reference Objects)."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/message-trait.js
/** Message Trait Object | Reference Object */
var asyncApiMessageTraitObject = recursiveRef$1(object({
	headers: optional(asyncApiSchemaPayload),
	correlationId: optional(asyncApiCorrelationIdObject),
	contentType: optional(string({ typeComment: "The content type to use when encoding/decoding a message payload (for example application/json)." })),
	name: optional(string({ typeComment: "A machine-friendly name for the message." })),
	title: optional(string({ typeComment: "A human-friendly title for the message." })),
	summary: optional(string({ typeComment: "A short summary of what the message is about." })),
	description: optional(string({ typeComment: "A verbose explanation of the message. CommonMark syntax MAY be used for rich text representation." })),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject),
	bindings: optional(recursiveRef$1(asyncApiMessageBindingsObject)),
	examples: optional(array(recursiveRef$1(asyncApiMessageExampleObject)))
}, { typeName: "AsyncApiMessageTraitObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/message.js
/** Message Object | Reference Object */
var asyncApiMessageObject = lazy(() => recursiveRef$1(object({
	headers: optional(asyncApiSchemaPayload),
	payload: optional(asyncApiSchemaPayload),
	correlationId: optional(asyncApiCorrelationIdObject),
	contentType: optional(string({ typeComment: "The content type to use when encoding/decoding a message payload (for example application/json)." })),
	name: optional(string({ typeComment: "A machine-friendly name for the message." })),
	title: optional(string({ typeComment: "A human-friendly title for the message." })),
	summary: optional(string({ typeComment: "A short summary of what the message is about." })),
	description: optional(string({ typeComment: "A verbose explanation of the message. CommonMark syntax MAY be used for rich text representation." })),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject),
	bindings: optional(recursiveRef$1(asyncApiMessageBindingsObject)),
	examples: optional(array(recursiveRef$1(asyncApiMessageExampleObject))),
	traits: optional(array(asyncApiMessageTraitObject))
}, { typeName: "AsyncApiMessageObject" })));
var asyncApiMessagesObject = record(string(), asyncApiMessageObject, {
	typeName: "AsyncApiMessagesObject",
	typeComment: "Map of messageId to Message Object or Reference Object."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/parameter.js
/** Parameter Object | Reference Object */
var asyncApiParameterObject = recursiveRef$1(object({
	enum: optional(array(string(), { typeComment: "An enumeration of string values for substitution." })),
	default: optional(string({ typeComment: "The default value to use for substitution, and to send, if an alternate value is not supplied." })),
	description: optional(string({ typeComment: "An optional description for the parameter. CommonMark syntax MAY be used for rich text representation." })),
	examples: optional(array(string(), { typeComment: "Examples of the parameter value." })),
	location: optional(string({ typeComment: "A runtime expression that specifies the location of the parameter value." }))
}, { typeName: "AsyncApiParameterObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/parameters.js
var asyncApiParametersObject = record(string(), asyncApiParameterObject, {
	typeName: "AsyncApiParametersObject",
	typeComment: "Map of parameter name to Parameter Object or Reference Object."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/oauth.js
var asyncApiOAuthFlowObject = object({
	authorizationUrl: optional(string({ typeComment: "REQUIRED for implicit and authorizationCode flows. The authorization URL (absolute URL)." })),
	tokenUrl: optional(string({ typeComment: "REQUIRED for password, clientCredentials, and authorizationCode flows. The token URL (absolute URL)." })),
	refreshUrl: optional(string({ typeComment: "The URL to be used for obtaining refresh tokens. This MUST be in the form of an absolute URL." })),
	availableScopes: optional(record(string(), string(), { typeComment: "REQUIRED for OAuth2 flows. Map of scope name to a short description." }))
}, { typeName: "AsyncApiOAuthFlowObject" });
var asyncApiOAuthFlowsObject = object({
	implicit: optional(recursiveRef$1(asyncApiOAuthFlowObject)),
	password: optional(recursiveRef$1(asyncApiOAuthFlowObject)),
	clientCredentials: optional(recursiveRef$1(asyncApiOAuthFlowObject)),
	authorizationCode: optional(recursiveRef$1(asyncApiOAuthFlowObject))
}, { typeName: "AsyncApiOAuthFlowsObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/security-scheme.js
/** Security Scheme Object | Reference Object */
var asyncApiSecuritySchemeObject = recursiveRef$1(object({
	type: union([
		literal("userPassword"),
		literal("apiKey"),
		literal("X509"),
		literal("symmetricEncryption"),
		literal("asymmetricEncryption"),
		literal("httpApiKey"),
		literal("http"),
		literal("oauth2"),
		literal("openIdConnect"),
		literal("plain"),
		literal("scramSha256"),
		literal("scramSha512"),
		literal("gssapi")
	], { typeComment: "REQUIRED. Security scheme type: userPassword, apiKey, X509, symmetricEncryption, asymmetricEncryption, httpApiKey, http, oauth2, openIdConnect, plain, scramSha256, scramSha512, gssapi." }),
	description: optional(string({ typeComment: "A short description for security scheme. CommonMark syntax MAY be used for rich text representation." })),
	name: optional(string({ typeComment: "REQUIRED for httpApiKey. The name of the header, query or cookie parameter." })),
	"in": optional(union([
		literal("user"),
		literal("password"),
		literal("query"),
		literal("header"),
		literal("cookie")
	], { typeComment: "REQUIRED for apiKey and httpApiKey. Location of the API key: user, password, query, header, or cookie." })),
	scheme: optional(string({ typeComment: "REQUIRED for http. The name of the HTTP Authorization scheme to be used in the Authorization header." })),
	bearerFormat: optional(string({ typeComment: "A hint to the client to identify how the bearer token is formatted." })),
	flows: optional(recursiveRef$1(asyncApiOAuthFlowsObject)),
	openIdConnectUrl: optional(string({ typeComment: "REQUIRED for openIdConnect. OpenId Connect URL to discover OAuth2 configuration values (absolute URL)." })),
	scopes: optional(array(string(), { typeComment: "List of the needed scope names for oauth2 and openIdConnect." }))
}, { typeName: "AsyncApiSecuritySchemeObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/server-variable.js
/** Server Variable Object | Reference Object */
var asyncApiServerVariableObject = recursiveRef$1(object({
	enum: optional(array(string(), { typeComment: "An enumeration of string values for substitution." })),
	default: optional(string({ typeComment: "The default value to use for substitution, and to send, if an alternate value is not supplied." })),
	description: optional(string({ typeComment: "An optional description for the server variable. CommonMark syntax MAY be used for rich text representation." })),
	examples: optional(array(string(), { typeComment: "Examples of the server variable." }))
}, { typeName: "AsyncApiServerVariableObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/server.js
/** Server Object | Reference Object */
var asyncApiServerObject = recursiveRef$1(object({
	host: string({ typeComment: "REQUIRED. The server host name. It MAY include the port. Supports Server Variables in {braces}." }),
	protocol: string({ typeComment: "REQUIRED. The protocol this server supports for connection." }),
	protocolVersion: optional(string({ typeComment: "The version of the protocol used for connection (for example 0-9-1 for AMQP)." })),
	pathname: optional(string({ typeComment: "The path to a resource in the host. Supports Server Variables in {braces}." })),
	description: optional(string({ typeComment: "An optional string describing the server. CommonMark syntax MAY be used for rich text representation." })),
	title: optional(string({ typeComment: "A human-friendly title for the server." })),
	summary: optional(string({ typeComment: "A short summary of the server." })),
	variables: optional(record(string(), asyncApiServerVariableObject, { typeComment: "Map between a variable name and its Server Variable Object or Reference Object." })),
	security: optional(array(asyncApiSecuritySchemeObject, { typeComment: "Alternative security schemes for this server; only one of the security scheme objects need to be satisfied." })),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject),
	bindings: optional(recursiveRef$1(asyncApiServerBindingsObject))
}, { typeName: "AsyncApiServerObject" }));
var asyncApiServersObject = record(string(), asyncApiServerObject, {
	typeName: "AsyncApiServersObject",
	typeComment: "Map of server name to Server Object or Reference Object."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/channel.js
/** Channel Object */
var asyncApiChannelObject = lazy(() => object({
	address: optional(union([string(), nullable()], { typeComment: "Channel address or null when unknown." })),
	messages: optional(asyncApiMessagesObject),
	title: optional(string({ typeComment: "A human-friendly title for the channel." })),
	summary: optional(string({ typeComment: "A short summary of the channel." })),
	description: optional(string({ typeComment: "An optional description of this channel. CommonMark syntax MAY be used for rich text representation." })),
	servers: optional(array(asyncApiResolvedReference(asyncApiServerObject), { typeComment: "References to Server definitions where this channel is available (Reference Objects only in the raw document)." })),
	parameters: optional(asyncApiParametersObject),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject),
	bindings: optional(recursiveRef$1(asyncApiChannelBindingsObject))
}, { typeName: "AsyncApiChannelObject" }));
var asyncApiChannelsObject = record(string(), recursiveRef$1(asyncApiChannelObject), {
	typeName: "AsyncApiChannelsObject",
	typeComment: "Map of channelId to Channel Object or Reference Object."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/operation-reply-address.js
/** Operation Reply Address Object | Reference Object */
var asyncApiOperationReplyAddressObject = recursiveRef$1(object({
	description: optional(string({ typeComment: "An optional description of the address. CommonMark syntax MAY be used for rich text representation." })),
	location: string({ typeComment: "REQUIRED. A runtime expression that specifies the location of the reply address." })
}, { typeName: "AsyncApiOperationReplyAddressObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/operation-reply.js
/** Operation Reply Object | Reference Object */
var asyncApiOperationReplyObject = lazy(() => recursiveRef$1(object({
	address: optional(asyncApiOperationReplyAddressObject),
	channel: optional(asyncApiResolvedReference(asyncApiChannelObject)),
	messages: optional(array(asyncApiResolvedReference(asyncApiMessageObject), { typeComment: "List of $ref pointers to Message Objects used as reply payloads (Reference Objects only in the raw document)." }))
}, { typeName: "AsyncApiOperationReplyObject" })));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/operation-trait.js
/** Operation Trait Object | Reference Object */
var asyncApiOperationTraitObject = recursiveRef$1(object({
	title: optional(string({ typeComment: "A human-friendly title for the operation." })),
	summary: optional(string({ typeComment: "A short summary of what the operation is about." })),
	description: optional(string({ typeComment: "A verbose explanation of the operation. CommonMark syntax MAY be used for rich text representation." })),
	security: optional(array(asyncApiSecuritySchemeObject, { typeComment: "Security schemes for this operation. Only one of the security scheme objects MUST be satisfied." })),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject),
	bindings: optional(recursiveRef$1(asyncApiOperationBindingsObject))
}, { typeName: "AsyncApiOperationTraitObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/operation.js
/** Operation Object | Reference Object */
var asyncApiOperationObject = lazy(() => recursiveRef$1(object({
	action: union([literal("send"), literal("receive")], { typeComment: "REQUIRED. send when the application sends to the channel; receive when it receives from the channel." }),
	channel: asyncApiResolvedReference(asyncApiChannelObject),
	title: optional(string({ typeComment: "A human-friendly title for the operation." })),
	summary: optional(string({ typeComment: "A short summary of what the operation is about." })),
	description: optional(string({ typeComment: "A verbose explanation of the operation. CommonMark syntax MAY be used for rich text representation." })),
	security: optional(array(asyncApiSecuritySchemeObject, { typeComment: "Security schemes for this operation. Only one of the security scheme objects MUST be satisfied." })),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject),
	bindings: optional(recursiveRef$1(asyncApiOperationBindingsObject)),
	traits: optional(array(asyncApiOperationTraitObject)),
	messages: optional(array(asyncApiResolvedReference(asyncApiMessageObject), { typeComment: "Subset of channel messages as Reference Objects only. Omit to include all channel messages; use [] for none." })),
	reply: optional(asyncApiOperationReplyObject)
}, { typeName: "AsyncApiOperationObject" })));
var asyncApiOperationsObject = record(string(), asyncApiOperationObject, {
	typeName: "AsyncApiOperationsObject",
	typeComment: "Map of operationId to Operation Object or Reference Object."
});
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/components.js
var asyncApiComponentsObject = lazy(() => object({
	schemas: optional(record(string(), asyncApiSchemaPayload, { typeComment: "Reusable Multi Format Schema, Schema Object, or Reference Object." })),
	servers: optional(record(string(), asyncApiServerObject)),
	channels: optional(asyncApiChannelsObject),
	operations: optional(record(string(), asyncApiOperationObject)),
	messages: optional(record(string(), asyncApiMessageObject)),
	securitySchemes: optional(record(string(), asyncApiSecuritySchemeObject)),
	serverVariables: optional(record(string(), asyncApiServerVariableObject)),
	parameters: optional(record(string(), asyncApiParameterObject)),
	correlationIds: optional(record(string(), asyncApiCorrelationIdObject)),
	replies: optional(record(string(), asyncApiOperationReplyObject)),
	replyAddresses: optional(record(string(), asyncApiOperationReplyAddressObject)),
	externalDocs: optional(record(string(), asyncApiExternalDocumentationObject)),
	tags: optional(record(string(), asyncApiTagObject)),
	operationTraits: optional(record(string(), asyncApiOperationTraitObject)),
	messageTraits: optional(record(string(), asyncApiMessageTraitObject)),
	serverBindings: optional(record(string(), recursiveRef$1(asyncApiServerBindingsObject))),
	channelBindings: optional(record(string(), recursiveRef$1(asyncApiChannelBindingsObject))),
	operationBindings: optional(record(string(), recursiveRef$1(asyncApiOperationBindingsObject))),
	messageBindings: optional(record(string(), recursiveRef$1(asyncApiMessageBindingsObject)))
}, {
	typeName: "AsyncApiComponentsObject",
	typeComment: "Reusable objects. Definitions here have no effect unless referenced from outside components."
}));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/contact.js
var asyncApiContactObject = object({
	name: optional(string({ typeComment: "The identifying name of the contact person/organization." })),
	url: optional(string({ typeComment: "The URL pointing to the contact information. This MUST be in the form of an absolute URL." })),
	email: optional(string({ typeComment: "The email address of the contact person/organization." }))
}, { typeName: "AsyncApiContactObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/license.js
/** License Object | Reference Object */
var asyncApiLicenseObject = recursiveRef$1(object({
	name: string({ typeComment: "REQUIRED. The license name used for the API." }),
	url: optional(string({ typeComment: "A URL to the license used for the API. This MUST be in the form of an absolute URL." }))
}, { typeName: "AsyncApiLicenseObject" }));
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/info.js
var asyncApiInfoObject = object({
	title: string({ typeComment: "REQUIRED. The title of the application." }),
	version: string({ typeComment: "REQUIRED. Provides the version of the application API (not to be confused with the AsyncAPI Specification version)." }),
	description: optional(string({ typeComment: "A short description of the application. CommonMark syntax MAY be used for rich text representation." })),
	termsOfService: optional(string({ typeComment: "A URL to the Terms of Service for the API (absolute URL)." })),
	contact: optional(asyncApiContactObject),
	license: optional(asyncApiLicenseObject),
	tags: optional(asyncApiTagsObject),
	externalDocs: optional(asyncApiExternalDocumentationObject)
}, { typeName: "AsyncApiInfoObject" });
//#endregion
//#region node_modules/@scalar/schemas/dist/asyncapi/3.1/asyncapi-object.js
var asyncApiExtensions = intersection([
	XOriginalAasVersion,
	XScalarNavigation,
	XScalarOriginalSourceUrl,
	XScalarOriginalDocumentHash,
	XScalarIsDirty,
	XScalarWatchMode,
	XScalarRegistryMeta,
	XScalarSelectedServer
], {
	typeName: "AsyncApiExtensions",
	typeComment: "AsyncAPI document-level Scalar extensions shared with workspace tooling."
});
var asyncApiDocumentCore = object({
	asyncapi: string({ typeComment: "REQUIRED. AsyncAPI Specification version (major.minor.patch). Patch MAY include a hyphen suffix." }),
	id: optional(string({ typeComment: "Identifier of the application the AsyncAPI document is defining (URI, RFC3986)." })),
	info: asyncApiInfoObject,
	servers: optional(asyncApiServersObject),
	defaultContentType: optional(string({ typeComment: "Default content type when encoding/decoding a message payload (for example application/json)." })),
	channels: optional(asyncApiChannelsObject),
	operations: optional(asyncApiOperationsObject),
	components: optional(recursiveRef$1(asyncApiComponentsObject))
}, {
	typeName: "AsyncApiDocumentCore",
	typeComment: "Root AsyncAPI 3.1.0 document combining resource listing and API declaration."
});
/**
* Root AsyncAPI 3.1.0 document (the A2S / AsyncAPI Object).
*
* @see https://www.asyncapi.com/docs/reference/specification/v3.1.0#A2SObject
*/
var asyncApiObjectSchema = intersection([asyncApiDocumentCore, asyncApiExtensions], {
	typeName: "AsyncApiObject",
	typeComment: "Root AsyncAPI 3.1.0 document including Scalar workspace extensions (AsyncApiExtensionsSchema)."
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/entities/history/schema.js
var HeaderSchema = Type.Object({
	name: Type.String(),
	value: Type.String()
});
/**
* This object contains detailed info about performed request.
*/
var RequestSchema = Type.Object({
	/** Absolute URL of the request (fragments are not included). */
	url: Type.String(),
	/** Request method (`GET`, `POST`, ...). */
	method: Type.String(),
	/** Request HTTP Version. */
	httpVersion: Type.String(),
	/** List of header objects. */
	headers: Type.Array(HeaderSchema),
	/** List of cookie objects. */
	cookies: Type.Array(HeaderSchema),
	/**
	* Total number of bytes from the start of the HTTP request message until
	* (and including) the double CRLF before the body.
	*
	* Set to `-1` if the info is not available.
	*/
	headersSize: Type.Number(),
	/** List of query string objects. */
	queryString: Type.Array(HeaderSchema),
	/**
	* Size of the request body (POST data payload) in bytes.
	*
	* Set to `-1` if the info is not available.
	*/
	bodySize: Type.Number(),
	/** Posted data info. */
	postData: Type.Optional(Type.Union([Type.Object({
		/** Mime type of posted data. */
		mimeType: Type.String(),
		text: Type.String()
	}), Type.Object({
		/** Mime type of posted data. */
		mimeType: Type.String(),
		params: Type.Array(Type.Object({
			name: Type.String(),
			value: Type.Optional(Type.String())
		}))
	})]))
});
var ResponseSchema = Type.Object({
	status: Type.Number(),
	statusText: Type.String(),
	headers: Type.Array(HeaderSchema),
	cookies: Type.Array(HeaderSchema),
	httpVersion: Type.String(),
	redirectURL: Type.String(),
	headersSize: Type.Number(),
	bodySize: Type.Number(),
	content: Type.Object({
		size: Type.Number(),
		mimeType: Type.String(),
		encoding: Type.Optional(Type.String()),
		text: Type.Optional(Type.String())
	})
});
var HistoryEntrySchema = Type.Object({
	/**
	* Total elapsed time of the request in milliseconds.
	*
	* This is the sum of all timings available in the timings object
	* (i.e. not including `-1` values).
	*/
	time: Type.Number(),
	/** Timestamp of the request. */
	timestamp: Type.Number(),
	/** Detailed info about the request. */
	request: RequestSchema,
	/** Detailed info about the response. */
	response: ResponseSchema,
	/** Meta data about the request. */
	meta: Type.Object({ 
	/** The example key for the request. */
example: Type.String() }),
	requestMetadata: Type.Object({ 
	/** Variables used in the request.
	*
	* Since HAR format does not support variables, we need to store them here.
	* This way we can easily re-use the request with the same variables.
	* We don't need to do any server + variables matching and replacement.
	*/
variables: Type.Record(Type.String(), Type.String()) })
});
/**
* Schema for the path method history.
*
* {
*   "path": {
*     "method": [Entry]
*   }
* }
*/
var PathMethodHistorySchema = Type.Record(Type.String(), Type.Record(Type.String(), Type.Array(HistoryEntrySchema)));
var DocumentHistorySchema = Type.Record(Type.String(), PathMethodHistorySchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/entities/history/index.js
var HISTORY_LIMIT = 5;
/**
* Creates a reactive history store for tracking request and response entries for documents and operations.
*
* @param hooks (Optional) - Lifecycle hooks for store events, such as onHistoryChange.
* @returns HistoryStore - Methods for interacting with the operation history.
*
* ## Example
* ```ts
* const historyStore = createHistoryStore({
*   hooks: {
*     onHistoryChange: (documentName, operationName, history) => {
*       console.log(`History changed for ${documentName}/${operationName}`, history)
*     }
*   }
* })
*
* // Add a history entry
* historyStore.addHistory('petstore.yaml', 'getPets', { ...entry })
*
* // Get history entries for an operation
* const entries = historyStore.getHistory('petstore.yaml', 'getPets')
* ```
*/
var createHistoryStore = ({ hooks }) => {
	const history = reactive({});
	const getHistory = (documentName, path, method) => {
		return history[documentName]?.[path]?.[method];
	};
	const addHistory = (documentName, path, method, entry) => {
		history[documentName] ||= {};
		history[documentName][path] ||= {};
		history[documentName][path][method] ||= [];
		if (history[documentName][path][method].length >= HISTORY_LIMIT) history[documentName][path][method] = unpackProxyObject(history[documentName][path][method].filter((_, i) => i !== 0), { depth: 1 });
		history[documentName][path][method].push(entry);
		hooks?.onHistoryChange?.(documentName);
	};
	const clearOperationHistory = (documentName, path, method) => {
		delete history[documentName]?.[path]?.[method];
		hooks?.onHistoryChange?.(documentName);
	};
	const clearPathHistory = (documentName, path) => {
		delete history[documentName]?.[path];
		hooks?.onHistoryChange?.(documentName);
	};
	const clearDocumentHistory = (documentName) => {
		delete history[documentName];
		hooks?.onHistoryChange?.(documentName);
	};
	const load = (data) => {
		const coercedData = coerceValue(DocumentHistorySchema, data);
		safeAssign(history, coercedData);
		Object.keys(coercedData).forEach((documentName) => {
			hooks?.onHistoryChange?.(documentName);
		});
	};
	const exportHistory = () => {
		return unpackProxyObject(history);
	};
	return {
		getHistory,
		addHistory,
		clearOperationHistory,
		clearPathHistory,
		clearDocumentHistory,
		load,
		export: exportHistory
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/encode-chunk-name.js
/** Encodes a chunk name as one portable filename and URL segment. */
var encodeChunkName = (name) => {
	const escaped = escapeJsonPointer(name).replace(/[^a-zA-Z0-9_.~{}-]/gu, (character) => `~x${character.codePointAt(0)?.toString(16)}~`);
	let trailingDotsStart = escaped.length;
	while (trailingDotsStart > 0 && escaped[trailingDotsStart - 1] === ".") trailingDotsStart--;
	const portable = escaped.slice(0, trailingDotsStart) + "~x2e~".repeat(escaped.length - trailingDotsStart);
	return /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(portable) || portable === "" ? `~x~${portable}` : portable;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/chunk-index.js
/**
* The extension key a compact sparse document carries its chunk index under.
*
* It exists on the wire only: the client expands the index back into per-node references while the
* document is ingested and removes the key, so nothing downstream ever sees it.
*/
var CHUNK_INDEX_KEY = "x-scalar-chunk-index";
/** Matches a `{slot}` in a template, or a doubled brace standing for a literal one. */
var TEMPLATE_SLOT = /\{\{|\}\}|\{(\w+)\}/g;
/**
* Fills the `{slot}`s of a chunk-reference template.
*
* `{{` and `}}` stand for literal braces, so text the writer inlined into a template — a document
* name, a base URL — may contain braces without being read back as a slot. An unknown slot is left
* alone rather than blanked, so a template from a newer writer fails visibly instead of resolving
* to the wrong chunk.
*/
var fillChunkRef = (template, values = {}) => template.replace(TEMPLATE_SLOT, (match, slot) => slot === void 0 ? match.charAt(0) : values[slot] ?? match);
var identity = (value) => value;
/**
* How each template slot is spelled, per mode.
*
* Static references name files, so their variable segments go through `encodeChunkName` — the same
* call `generateWorkspaceChunks` makes when it writes those files. SSR references name pointers
* into the store's in-memory assets, which `get()` looks up with JSON Pointer segments, so only the
* path is escaped. A method is never encoded in either mode: it is written as it was read, and
* `isHttpMethod` keeps it to letters.
*
* Both sides read the table from here. A reader that encoded a segment differently would build a
* reference to a chunk that does not exist.
*/
var SLOT_ENCODERS = {
	static: {
		type: encodeChunkName,
		name: encodeChunkName,
		path: encodeChunkName,
		method: identity
	},
	ssr: {
		type: identity,
		name: identity,
		path: escapeJsonPointer,
		method: identity
	}
};
/** The reference a lazily loaded chunk is reached through. */
var chunkReference = (ref) => ({
	"$ref": ref,
	$global: true
});
/** Whether a value is shaped like an index this build knows how to expand. */
var isChunkIndex = (value) => isObject$1(value) && (value["mode"] === "static" || value["mode"] === "ssr") && isObject$1(value["refs"]) && isObject$1(value["components"]) && isObject$1(value["paths"]);
/**
* Expands a compact sparse document into the one a non-compact server store would have sent.
*
* Mutates the document in place and drops the index key, so what the rest of the store sees is an
* ordinary sparse document: `resolve()`, the bundler and anything enumerating `paths` or
* `components` are looking at the shape they always have.
*
* A document without an index is left alone, which is every document a non-compact server store or
* an author produces.
*
* @param document - The document to expand, mutated in place
* @returns Whether an index was found and expanded
*/
var expandChunkIndex = (document) => {
	if (!isObject$1(document) || document["x-scalar-chunk-index"] === void 0) return false;
	const index = document[CHUNK_INDEX_KEY];
	if (!isChunkIndex(index)) {
		delete document[CHUNK_INDEX_KEY];
		console.warn(`Ignoring an unreadable "${CHUNK_INDEX_KEY}"; this document's chunks cannot be resolved.`);
		return false;
	}
	const encoders = SLOT_ENCODERS[index.mode];
	const components = Object.fromEntries(Object.entries(index.components).map(([type, names]) => [type, Object.fromEntries(names.map((name) => [name, chunkReference(fillChunkRef(index.refs.components, {
		type: encoders.type(type),
		name: encoders.name(name)
	}))]))]));
	const paths = Object.fromEntries(Object.entries(index.paths).map(([path, pathItem]) => [path, Object.fromEntries(Object.entries(pathItem).map(([key, value]) => [key, isHttpMethod(key) ? chunkReference(fillChunkRef(index.refs.operations, {
		path: encoders.path(path),
		method: encoders.method(key)
	})) : value]))]));
	document["components"] = components;
	document["paths"] = paths;
	delete document[CHUNK_INDEX_KEY];
	return true;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/document-revision.js
/**
* How many writes the store has recorded against each document, keyed by the raw document object.
*
* Keyed on the raw object rather than on a proxy, because the writer and the reader hold different
* views of the same document: the store writes through `reactive(detectChanges(overrides(magic(raw))))`,
* while a reader may hold any inner layer — the API reference strips the outer two for schema reads.
* `unpackProxyShallow` lands on the same object from any of them.
*/
var revisions = /* @__PURE__ */ new WeakMap();
/**
* Records a write against a document.
*
* Called from the store's change hooks, which see every mutation made through the store.
*/
var bumpDocumentRevision = (document) => {
	const raw = unpackProxyShallow(document);
	if (typeof raw !== "object" || raw === null) return;
	revisions.set(raw, (revisions.get(raw) ?? 0) + 1);
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-fetch.js
/**
* Get the fetch function from the configuration
*
* @param config - The API reference configuration.
* @returns The fetch function.
*/
var getFetch = (config) => {
	if (config.fetch) return config.fetch;
	return ((input, init) => fetch(redirectToProxy(config.proxyUrl, input.toString()), init));
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/normalize-boolean-schemas.js
var schemaMaps = /* @__PURE__ */ new Set([
	"properties",
	"patternProperties",
	"$defs",
	"definitions",
	"dependentSchemas"
]);
var schemaArrays = /* @__PURE__ */ new Set([
	"allOf",
	"anyOf",
	"oneOf",
	"prefixItems"
]);
var childSchemas = /* @__PURE__ */ new Set([
	"items",
	"not",
	"if",
	"then",
	"else",
	"contains",
	"propertyNames",
	"contentSchema",
	"$ref-value"
]);
var openApiMaps = /* @__PURE__ */ new Set([
	"paths",
	"webhooks",
	"responses",
	"content",
	"headers",
	"examples",
	"links",
	"encoding",
	"variables",
	"parameters",
	"requestBodies",
	"securitySchemes",
	"pathItems",
	"mediaTypes",
	"additionalOperations",
	"callbacks",
	"x-ext"
]);
var opaqueValues = /* @__PURE__ */ new Set([
	"example",
	"examples",
	"default",
	"enum",
	"const",
	"value",
	"dataValue"
]);
/**
* Normalize boolean schemas without mutating caller-owned data.
* Only changed schema containers and their ancestors are copied. Unchanged bundled
* documents and opaque example/extension payloads retain their identity. Iterative
* discovery and copy propagation preserve cycles without recursive cloning.
* The marker represents an untyped schema; false is its negation. additionalProperties
* already accepts booleans and therefore retains its authored representation.
*/
var normalizeBooleanSchemas = (document) => {
	const nodes = /* @__PURE__ */ new WeakMap();
	const changed = /* @__PURE__ */ new Set();
	const schemas = /* @__PURE__ */ new WeakSet();
	const documents = /* @__PURE__ */ new WeakSet();
	const tasks = [];
	const getNode = (source) => {
		const existing = nodes.get(source);
		if (existing) return existing;
		const node = { source };
		nodes.set(source, node);
		return node;
	};
	const root = getNode(document);
	const link = (parent, key, child) => {
		const node = getNode(child);
		if (!node.parent) node.parent = {
			node: parent,
			key
		};
		else if (node.parent.node !== parent || node.parent.key !== key) {
			const parents = node.otherParents ??= [];
			if (!parents.some((edge) => edge.node === parent && edge.key === key)) parents.push({
				node: parent,
				key
			});
		}
		return node;
	};
	const schema = (parent, key, value) => {
		if (typeof value === "boolean") {
			(parent.replacements ??= /* @__PURE__ */ new Map()).set(key, value ? { __scalar_: "" } : {
				__scalar_: "",
				not: { __scalar_: "" }
			});
			changed.add(parent);
		} else if (isObject$1(value)) tasks.push({
			node: link(parent, key, value),
			kind: "schema"
		});
	};
	const reference = (pointer) => {
		const segments = parseJsonPointerSegments(pointer);
		let parent = root;
		for (const [index, key] of segments.entries()) {
			if (!Object.hasOwn(parent.source, key)) return;
			const value = Reflect.get(parent.source, key);
			if (index === segments.length - 1) schema(parent, key, value);
			else if (value !== null && typeof value === "object") parent = link(parent, key, value);
			else return;
		}
	};
	tasks.push({
		node: root,
		kind: "document",
		path: [],
		mapDepth: 0
	});
	while (tasks.length > 0) {
		const task = tasks.pop();
		if (!task) break;
		const { node } = task;
		const visited = task.kind === "schema" ? schemas : documents;
		if (visited.has(node.source)) continue;
		visited.add(node.source);
		if (task.kind === "schema") {
			const value = node.source;
			if (typeof value.$ref === "string" && value.$ref.startsWith("#/")) reference(value.$ref.slice(1));
			for (const [key, child] of Object.entries(value)) if (schemaMaps.has(key) && isObject$1(child) || schemaArrays.has(key) && Array.isArray(child)) {
				const container = link(node, key, child);
				for (const [name, nested] of Object.entries(child)) schema(container, name, nested);
			} else if (childSchemas.has(key)) schema(node, key, child);
			else if ([
				"additionalProperties",
				"unevaluatedProperties",
				"unevaluatedItems"
			].includes(key) && isObject$1(child)) schema(node, key, child);
			continue;
		}
		const { path } = task;
		for (const [key, child] of Object.entries(node.source)) {
			const childPath = [...path, key];
			const isMapEntry = task.mapDepth > 0;
			if (key === "schemas" && path.at(-1) === "components" && isObject$1(child)) {
				const container = link(node, key, child);
				for (const [name, nested] of Object.entries(child)) schema(container, name, nested);
			} else if ((key === "schema" || key === "itemSchema") && !isMapEntry && isSchemaPath(childPath)) schema(node, key, child);
			else if (isMapEntry || !opaqueValues.has(key) && (!key.startsWith("x-") || key === "x-ext")) {
				if (child !== null && typeof child === "object") tasks.push({
					node: link(node, key, child),
					kind: "document",
					path: childPath,
					mapDepth: isMapEntry ? task.mapDepth - 1 : key === "callbacks" ? 2 : openApiMaps.has(key) ? 1 : 0
				});
			}
		}
	}
	const forEachParent = (node, callback) => {
		if (node.parent) callback(node.parent);
		node.otherParents?.forEach(callback);
	};
	for (const node of changed) forEachParent(node, (parent) => changed.add(parent.node));
	for (const node of changed) node.copy = Array.isArray(node.source) ? [] : {};
	for (const node of changed) forEachParent(node, (parent) => (parent.node.replacements ??= /* @__PURE__ */ new Map()).set(parent.key, node.copy));
	for (const node of changed) for (const [key, value] of Object.entries(node.source)) Object.defineProperty(node.copy, key, {
		value: node.replacements?.has(key) ? node.replacements.get(key) : value,
		enumerable: true,
		writable: true,
		configurable: true
	});
	return root.copy ?? document;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/plugins/bundler/helpers.js
/**
* Recursively resolves the value behind a $ref pointer within the current document tree.
* For example, given a node with { $ref: '#/some/path' }, this will locate and return
* the referenced node, following the $ref chain if necessary.
*
* @param node - The node that may be a $ref object. If not, returns the node as is.
* @returns The resolved node if a $ref chain exists, otherwise the original node.
*/
var getResolvedRef = (node, context) => {
	if (node && typeof node === "object" && "$ref" in node && typeof node["$ref"] === "string" && node["$ref"].startsWith("#")) {
		const segments = getSegmentsFromPath(node["$ref"].slice(1));
		return getResolvedRef(getValueAtPath(context.rootNode, segments), context);
	}
	return node;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/plugins/bundler/openapi-document.js
/** Resolves an OpenAPI document's declared identity against its retrieval location. */
var resolveOpenApiDocument = (document, retrievalUri) => {
	if (!isObject$1(document) || typeof document.openapi !== "string" || !/^3\.2\.\d+$/.test(document.openapi) || typeof document.$self !== "string") return;
	const self = resolveReferencePath(retrievalUri, document.$self);
	const fragmentIndex = self.indexOf("#");
	return {
		baseUri: fragmentIndex === -1 ? self : self.slice(0, fragmentIndex),
		metadata: {
			openapi: document.openapi,
			$self: self
		}
	};
};
/** Honors `$self` for complete OpenAPI documents, including external and cached documents. */
var openApiDocument = () => {
	const authoredRefs = /* @__PURE__ */ new WeakMap();
	const paths = /* @__PURE__ */ new WeakMap();
	const indexPaths = (value, path) => {
		if (value === null || typeof value !== "object" || paths.has(value)) return;
		paths.set(value, path);
		for (const [key, child] of Object.entries(value)) indexPaths(child, [...path, key]);
	};
	return {
		type: "lifecycle",
		resolveDocument: resolveOpenApiDocument,
		onBeforeNodeProcess: (node, context) => {
			if (typeof node.$ref === "string" && resolveOpenApiDocument(context.rootNode, context.origin)) {
				indexPaths(context.rootNode, []);
				authoredRefs.set(node, node.$ref);
			}
		},
		onAfterNodeProcess: (node, context) => {
			const authored = authoredRefs.get(node);
			if (authored === void 0 || authored === node.$ref) return;
			const root = context.rootNode;
			const existing = root["x-scalar-original-refs"];
			const mapping = isObject$1(existing) ? existing : {};
			const key = JSON.stringify(paths.get(node) ?? context.path);
			const previous = mapping[key];
			mapping[key] = {
				original: isObject$1(previous) && previous.rewritten === authored ? previous.original : authored,
				rewritten: node.$ref
			};
			root["x-scalar-original-refs"] = mapping;
		}
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/plugins/bundler/index.js
/**
* This file contains a collection of plugins used for the bundler.
* Plugins defined here can extend or modify the behavior of the bundling process,
* such as adding lifecycle hooks or custom processing logic.
*/
/**
* A lifecycle plugin that adds a `$status` property to nodes during resolution.
* - Sets `$status` to 'loading' when resolution starts.
* - Sets `$status` to 'error' if resolution fails.
* - Removes `$status` when resolution succeeds.
*/
var loadingStatus = () => {
	return {
		type: "lifecycle",
		onResolveStart: (node) => {
			node["$status"] = "loading";
		},
		onResolveError: (node) => {
			node["$status"] = "error";
		},
		onResolveSuccess: (node) => {
			delete node["$status"];
		}
	};
};
/**
* Lifecycle plugin to resolve and embed external content referenced by an 'externalValue' property in a node.
*
* When a node contains an 'externalValue' property (as a string), this plugin will:
*   - Fetch the external resource (such as a URL or file) using the fetchUrls plugin.
*   - If the fetch is successful, assign the fetched data to the node's 'value' property.
*
* This is useful for inlining external content (like examples or schemas) into the OpenAPI document during bundling.
*
* In lazy mode, preserve the absolute URL for on-demand client resolution without fetching a payload.
* The default eager mode remains available to existing bundler consumers.
*/
var externalValueResolver = (options) => {
	return {
		type: "lifecycle",
		onAfterNodeProcess: async (node, context) => {
			const externalValue = node["externalValue"];
			const cache = context.resolutionCache;
			if (typeof externalValue !== "string" || node["value"] !== void 0) return;
			const resolvedValue = resolveReferencePath(context.origin, externalValue);
			if (options?.lazy) {
				const path = context.path.at(-2) === "examples" ? context.path : context.referencedFromPath ?? context.path;
				if (path.at(-2) !== "examples" || isSchemaPath(path)) return;
				node["externalValue"] = resolvedValue;
				return;
			}
			const loader = context.loaders.find((it) => it.validate(resolvedValue));
			if (!loader) return;
			if (!cache.has(resolvedValue)) cache.set(resolvedValue, loader.exec(resolvedValue));
			const result = await cache.get(resolvedValue);
			if (result?.ok) node["value"] = result.data;
		}
	};
};
/**
* Lifecycle plugin to resolve $ref on any object, including non-standard locations like the info object.
*
* This plugin will:
*   - Detect if a node contains a $ref property (as a string).
*   - If the node is under the 'info' path, attempt to resolve the reference using fetchUrls.
*   - Replace the node's properties with the resolved data if successful.
*
* Note: This currently only supports refs on the 'info' object and does not handle primitive types.
*/
var refsEverywhere = () => {
	return {
		type: "lifecycle",
		onBeforeNodeProcess: async (node, context) => {
			const { path, resolutionCache, parentNode } = context;
			const ref = node["$ref"];
			if (typeof ref !== "string") return;
			if (!parentNode || !path.length) return;
			const loader = context.loaders.find((it) => it.validate(ref));
			if (!loader) return;
			if (path[0] === "info") {
				if (!resolutionCache.has(ref)) resolutionCache.set(ref, loader.exec(ref));
				const result = await resolutionCache.get(ref);
				if (result?.ok) parentNode[path.at(-1)] = result.data;
			}
		}
	};
};
/**
* Lifecycle plugin to restore original $ref values after processing.
*
* This plugin is intended to be used as a "lifecycle" plugin in the bundling process.
* It operates in the `onAfterNodeProcess` hook, and its main purpose is to restore
* the original $ref values for external references that may have been replaced or
* rewritten during the bundling process.
*
* How it works:
* - For each node processed, if the node contains a $ref property (as a string),
*   and the root document contains an "x-ext-urls" mapping object,
*   the plugin will attempt to restore the original $ref value.
* - The "x-ext-urls" object is expected to be a mapping from the rewritten $ref
*   (e.g., a hashed or compressed reference) back to the original external URL or path.
* - If a mapping exists for the current $ref, the plugin replaces the $ref value
*   with the original value from the mapping. If no mapping exists (e.g., for local refs),
*   the $ref value is left unchanged.
*
* This is useful for scenarios where you want to present or export the bundled document
* with the original external $ref values, rather than the internal or rewritten ones.
*
* @returns {LifecyclePlugin} The plugin object for use in the bundler.
*/
var restoreOriginalRefs = () => {
	return {
		type: "lifecycle",
		onAfterNodeProcess: (node, context) => {
			const ref = node["$ref"];
			const root = context.rootNode;
			const authoredRefs = root["x-scalar-original-refs"];
			const authored = isObject$1(authoredRefs) ? authoredRefs[JSON.stringify(context.path)] : void 0;
			if (isObject$1(authored) && typeof authored.original === "string" && authored.rewritten === ref) {
				node["$ref"] = authored.original;
				return;
			}
			const extUrls = root["x-ext-urls"];
			if (typeof ref !== "string" || typeof extUrls !== "object" || extUrls === null || !isLocalRef$1(ref)) return;
			node["$ref"] = extUrls[ref.split("/").at(-1) ?? ""] ?? ref;
		}
	};
};
/**
* Lifecycle plugin to normalize the `scheme` property in securitySchemes to lowercase.
*
* Our typebox schemas require the `scheme` property to be a lowercase string.
* This plugin ensures that any `scheme` field under `components.securitySchemes` is normalized to lowercase, fixing
* potential user input errors such as "Bearer" or "BASIC".
*
* Example:
* ```yaml
* Before normalization:
*   components:
*     securitySchemes:
*       bearerAuth:
*         type: http
*         scheme: Bearer
* ```
* After normalization:
* ```yaml
*   components:
*     securitySchemes:
*       bearerAuth:
*         type: http
*         scheme: bearer
* ```
*/
var normalizeAuthSchemes = () => {
	return {
		type: "lifecycle",
		onAfterNodeProcess: (node, context) => {
			const { path } = context;
			if (path.length === 3 && path[0] === "components" && path[1] === "securitySchemes") {
				const targetNode = getResolvedRef(node, context);
				if (typeof targetNode === "object" && targetNode !== null && "scheme" in targetNode && typeof targetNode["scheme"] === "string" && targetNode["scheme"].toLowerCase() !== targetNode["scheme"]) targetNode["scheme"] = targetNode["scheme"].toLowerCase();
			}
		}
	};
};
/**
* Lifecycle plugin to normalize $ref nodes:
* Ensures that for any OpenAPI Reference Object containing a $ref, only $ref,
* summary, description, and $status properties are preserved.
* This keeps $ref references clean and predictable for downstream consumers.
*
* Schema Objects are deliberately skipped: in JSON Schema 2020-12 a $ref may
* carry sibling keywords, so their siblings must not be stripped.
*/
var normalizeRefs = () => {
	return {
		type: "lifecycle",
		onBeforeNodeProcess: (node, context) => {
			const { path, referencedFromPath } = context;
			const isSchema = isSchemaPath(path) || isSchemaPath(referencedFromPath);
			if (typeof node["$ref"] === "string" && !isSchema) {
				const keepProperties = /* @__PURE__ */ new Set([
					"$ref",
					"summary",
					"description",
					"$status"
				]);
				Object.keys(node).forEach((key) => {
					if (!keepProperties.has(key)) delete node[key];
				});
			}
		}
	};
};
/**
* Lifecycle plugin to sync path parameters for all operations under a path item.
*
* When processing a path item (e.g., '/users/{id}'), this plugin will:
*   - Extract path variables from the path string
*   - For each HTTP method operation (get, post, put, delete, etc.)
*   - Sync the operation's parameters to match the path variables
*   - Preserve existing parameter configurations when possible
*
* This ensures that path parameters are always in sync with the path string,
* even after bundling or other transformations.
*/
var syncPathParameters = () => {
	return {
		type: "lifecycle",
		onBeforeNodeProcess: (node, context) => {
			const { path } = context;
			if (path.length !== 2 || path[0] !== "paths" || typeof path[1] !== "string") return;
			const pathString = path[1];
			const additionalOperations = isObject$1(node.additionalOperations) ? Object.values(node.additionalOperations) : [];
			for (const operationNode of [...HTTP_METHODS.map((method) => node[method]), ...additionalOperations]) {
				const operation = getResolvedRef(operationNode, context);
				if (!isObject$1(operation)) continue;
				const isParameterNode = (param) => {
					const resolved = getResolvedRef(param, context);
					return isObject$1(resolved) && "name" in resolved && typeof resolved.name === "string" && "in" in resolved && typeof resolved.in === "string";
				};
				const isPathParameterNode = (param) => {
					const resolved = getResolvedRef(param, context);
					return isParameterNode(resolved) && resolved.in === "path";
				};
				const existingParameters = ("parameters" in operation && Array.isArray(operation.parameters) ? operation.parameters : []).filter(isParameterNode);
				const existingPathParameters = new Set(existingParameters.map((param) => getResolvedRef(param, context)).filter(isPathParameterNode).map((param) => param.name));
				const pathItemPathParameters = ("parameters" in node && Array.isArray(node.parameters) ? node.parameters : []).filter((param) => {
					const resolved = getResolvedRef(param, context);
					if (!isPathParameterNode(resolved)) return false;
					const result = !existingPathParameters.has(resolved.name);
					if (result) existingPathParameters.add(resolved.name);
					return result;
				});
				const result = syncParametersForPathChange(pathString, pathString, [...existingParameters, ...pathItemPathParameters], (node) => getResolvedRef(node, context));
				if (result.length > 0) operation.parameters = result;
			}
		}
	};
};
var NESTED_INTERNAL_KEYS = ["__scalar_", "$status"];
/**
* Lifecycle plugin to remove extra Scalar internal keys from nodes.
*
* This plugin is used to remove extra Scalar internal keys from nodes during the bundling process.
* These keys are used for internal purposes and are not needed in the final bundled document.
*/
var removeExtraScalarKeys = () => {
	return {
		type: "lifecycle",
		onBeforeNodeProcess: (node) => {
			if (isObject$1(node)) {
				for (const key of NESTED_INTERNAL_KEYS) if (key in node) delete node[key];
			}
		}
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/openapi/index.js
var externalDocs = object({
	url: string({ typeComment: "REQUIRED. The URI for the target documentation. This MUST be in the form of a URI." }),
	description: optional(string({ typeComment: "A description of the target documentation. CommonMark syntax MAY be used for rich text representation." }))
}, { typeName: "ExternalDocumentationObject" });
var xml = object({
	nodeType: optional(union([
		literal("element"),
		literal("attribute"),
		literal("text"),
		literal("cdata"),
		literal("none")
	])),
	name: optional(string({ typeComment: "Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being \"array\" (outside the items), it will affect the wrapping element if and only if wrapped is true. If wrapped is false, it will be ignored." })),
	namespace: optional(string({ typeComment: "The URI of the namespace definition. Value MUST be in the form of a non-relative URI." })),
	prefix: optional(string({ typeComment: "The prefix to be used for the name." })),
	attribute: optional(boolean({ typeComment: "Declares whether the property definition translates to an attribute instead of an element. Default value is false." })),
	wrapped: optional(boolean({ typeComment: "MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being \"array\" (outside the items)." }))
}, { typeName: "XMLObject" });
var discriminatorObject = object({
	defaultMapping: optional(string({ typeComment: "Schema name or URI reference used when the discriminator value is absent or unmapped." })),
	propertyName: string({ typeComment: "REQUIRED. The name of the property in the payload that will hold the discriminating value. This property SHOULD be required in the payload schema, as the behavior when the property is absent is undefined." }),
	mapping: optional(record(string(), string(), { typeComment: "An object to hold mappings between payload values and schema names or URI references." }))
}, { typeName: "DiscriminatorObject" });
/**
* Builds the OpenAPI Schema Object schema, the self-referential type every schema position uses.
*
* Exported so callers can supply their own to {@link generateSchema} rather than the default.
*/
var generateSchemaObject = (maybeRef) => {
	const schemaExtensionObjects = [
		XScalarIgnore$1,
		XInternal$1,
		XVariable$1,
		XExamples$1,
		XEnumDescriptions$1,
		XEnumVarNames$1,
		XAdditionalPropertiesName$1,
		XOrder,
		XTags$1
	];
	const coreSchemaProperties = object({
		name: optional(string({ typeComment: "Schema name (extension)." })),
		$id: optional(string({ typeComment: "JSON Schema 2020-12 schema identifier." })),
		$anchor: optional(string({ typeComment: "JSON Schema 2020-12 plain-name anchor." })),
		$dynamicAnchor: optional(string({ typeComment: "JSON Schema 2020-12 dynamic anchor; the target a matching `$dynamicRef` resolves to." })),
		$dynamicRef: optional(string({ typeComment: "JSON Schema 2020-12 dynamic reference, resolved against the active `$dynamicAnchor`." })),
		title: optional(string({ typeComment: "A title for the schema." })),
		description: optional(string({ typeComment: "A description of the schema." })),
		default: optional(any({ typeComment: "Default value for the schema." })),
		enum: optional(array(any(), {
			typeComment: "Array of allowed values.",
			typeName: "JsonSchemaEnum"
		})),
		const: optional(any({ typeComment: "Constant value that must match exactly." })),
		contentMediaType: optional(string({ typeComment: "Media type for content validation." })),
		contentEncoding: optional(string({ typeComment: "Content encoding." })),
		contentSchema: optional(maybeRef(lazy(() => schema))),
		deprecated: optional(boolean({ typeComment: "Whether the schema is deprecated." })),
		discriminator: optional(discriminatorObject),
		readOnly: optional(boolean({ typeComment: "Whether the schema is read-only." })),
		writeOnly: optional(boolean({ typeComment: "Whether the schema is write-only." })),
		xml: optional(xml),
		externalDocs: optional(externalDocs),
		example: optional(any({ typeComment: "A free-form field to include an example of an instance for this schema. Deprecated in favor of the JSON Schema examples keyword." })),
		examples: optional(array(any(), {
			typeComment: "An array of examples of valid instances for this schema. This keyword follows the JSON Schema Draft 2020-12 specification.",
			typeName: "SchemaExamplesArray"
		})),
		allOf: optional(array(maybeRef(lazy(() => schema)), { typeName: "SchemaObjectAllOf" })),
		oneOf: optional(array(maybeRef(lazy(() => schema)), { typeName: "SchemaObjectOneOf" })),
		anyOf: optional(array(maybeRef(lazy(() => schema)), { typeName: "SchemaObjectAnyOf" })),
		not: optional(maybeRef(lazy(() => schema)))
	});
	const schemaScalarMarker = object({ __scalar_: string({ typeComment: "Internal marker for schema object disambiguation." }) });
	const numericValidationKeywords = object({
		multipleOf: optional(number({ typeComment: "Number must be a multiple of this value." })),
		maximum: optional(number({ typeComment: "Maximum value (inclusive)." })),
		exclusiveMaximum: optional(number({ typeComment: "Maximum value (exclusive)." })),
		minimum: optional(number({ typeComment: "Minimum value (inclusive)." })),
		exclusiveMinimum: optional(number({ typeComment: "Minimum value (exclusive)." }))
	});
	const numericSchema = intersection([object({
		type: union([literal("number"), literal("integer")]),
		format: optional(string({ typeComment: "Different subtypes." }))
	}), numericValidationKeywords], { typeName: "NumberSchemaObject" });
	const stringValidationKeywords = object({
		maxLength: optional(number({ typeComment: "Maximum string length." })),
		minLength: optional(number({ typeComment: "Minimum string length." })),
		pattern: optional(string({ typeComment: "Regular expression pattern." }))
	});
	const stringSchema = intersection([object({
		type: literal("string"),
		format: optional(string({ typeComment: "Different subtypes." }))
	}), stringValidationKeywords], { typeName: "StringSchemaObject" });
	const objectValidationKeywords = object({
		maxProperties: optional(number({ typeComment: "Maximum number of properties." })),
		minProperties: optional(number({ typeComment: "Minimum number of properties." })),
		properties: optional(record(string(), maybeRef(lazy(() => schema)), { typeName: "SchemaObjectProperties" })),
		required: optional(array(string(), { typeName: "SchemaObjectRequired" })),
		additionalProperties: optional(union([boolean(), maybeRef(lazy(() => schema))], { typeName: "SchemaObjectAdditionalProperties" })),
		patternProperties: optional(record(string(), maybeRef(lazy(() => schema)), { typeName: "SchemaObjectPatternProperties" })),
		propertyNames: optional(maybeRef(lazy(() => schema)))
	});
	const objectSchema = intersection([object({ type: literal("object") }), objectValidationKeywords], { typeName: "ObjectSchemaObject" });
	const arrayValidationKeywords = object({
		maxItems: optional(number({ typeComment: "Maximum number of items in array." })),
		minItems: optional(number({ typeComment: "Minimum number of items in array." })),
		uniqueItems: optional(boolean({ typeComment: "Whether array items must be unique." })),
		items: optional(maybeRef(lazy(() => schema))),
		prefixItems: optional(array(maybeRef(lazy(() => schema)), { typeComment: "Schema for tuple validation." }))
	});
	const arraySchema = intersection([object({ type: literal("array") }), arrayValidationKeywords], { typeName: "ArraySchemaObject" });
	const schemaTypeMulti = union([
		literal("null"),
		literal("boolean"),
		literal("string"),
		literal("number"),
		literal("integer"),
		literal("object"),
		literal("array")
	], { typeName: "SchemaObjectMultiTypeKeywords" });
	const otherTypeSchema = object({ type: union([literal("null"), literal("boolean")], { typeName: "SchemaObjectOtherTypeKeyword" }) });
	const multiTypeSchema = intersection([
		object({
			type: array(schemaTypeMulti, { typeName: "SchemaObjectMultiTypeKeywordArray" }),
			format: optional(string({ typeComment: "Different subtypes." }))
		}),
		numericValidationKeywords,
		stringValidationKeywords,
		arrayValidationKeywords,
		objectValidationKeywords
	], { typeName: "MultiTypeSchemaObject" });
	const schema = intersection([
		coreSchemaProperties,
		...schemaExtensionObjects,
		union([
			schemaScalarMarker,
			otherTypeSchema,
			numericSchema,
			stringSchema,
			objectSchema,
			arraySchema,
			multiTypeSchema
		])
	], { typeName: "SchemaObject" });
	return schema;
};
var generateSchema = (maybeRef, options = {}) => {
	const contact = object({
		name: optional(string({ typeComment: "The name of the contact." })),
		url: optional(string({ typeComment: "The URI for the contact information. This MUST be in the form of a URI." })),
		email: optional(string({ typeComment: "The email address of the contact person/organization. This MUST be in the form of an email address." }))
	}, { typeName: "ContactObject" });
	const license = object({
		name: optional(string({ typeComment: "REQUIRED. The license name used for the API." })),
		identifier: optional(string({ typeComment: "An SPDX license expression for the API. The identifier field is mutually exclusive of the url field." })),
		url: optional(string({ typeComment: "A URI for the license used for the API. This MUST be in the form of a URI. The url field is mutually exclusive of the identifier field." }))
	}, { typeName: "LicenseObject" });
	const info = intersection([
		object({
			title: string({ typeComment: "REQUIRED. The title of the API." }),
			version: string({ typeComment: "REQUIRED. The version of the OpenAPI Document (which is distinct from the OpenAPI Specification version or the version of the API being described or the version of the OpenAPI Description)." }),
			summary: optional(string({ typeComment: "A short summary of the API." })),
			description: optional(string({ typeComment: "A description of the API. CommonMark syntax MAY be used for rich text representation." })),
			termsOfService: optional(string({ typeComment: "A URI for the Terms of Service for the API. This MUST be in the form of a URI." })),
			contact: optional(contact),
			license: optional(license)
		}, { typeName: "InfoObject" }),
		XScalarSdkInstallation$1,
		XScalarLinks$1
	]);
	const serverVariable = object({
		enum: optional(array(string(), { typeComment: "An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty." })),
		default: optional(string({ typeComment: `The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. If the enum is defined, the value MUST exist in the enum\'s values. Note that this behavior is different from the Schema Object's default keyword, which documents the receiver's behavior rather than inserting the value into the data.` })),
		description: optional(string({ typeComment: "An optional description for the server variable. CommonMark syntax MAY be used for rich text representation." }))
	}, { typeName: "ServerVariableObject" });
	const servers = object({
		name: optional(string({ typeComment: "A name for the server." })),
		url: string({ typeComment: "REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the document containing the Server Object is being served. Variable substitutions will be made when a variable is named in {braces}." }),
		description: optional(string({ typeComment: "An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation." })),
		variables: optional(record(string(), serverVariable, { typeComment: `A map between a variable name and its value. The value is used for substitution in the server's URL template.` }))
	}, { typeName: "ServerObject" });
	const schema = options.schemaObject ?? generateSchemaObject(maybeRef);
	const tag = intersection([
		object({
			name: string({ typeComment: "REQUIRED. The name of the tag." }),
			summary: optional(string({ typeComment: "A short summary of the tag." })),
			parent: optional(string({ typeComment: "The name of the parent tag." })),
			kind: optional(string({ typeComment: "A machine-readable category for the tag." })),
			description: optional(string({ typeComment: "A description for the tag. CommonMark syntax MAY be used for rich text representation." })),
			externalDocs: optional(externalDocs)
		}, { typeName: "TagObject" }),
		XDisplayName,
		XInternal$1,
		XScalarIgnore$1,
		XScalarOrder
	]);
	const securityRequirement = record(string(), array(string()), {
		typeName: "SecurityRequirementObject",
		typeComment: "Lists the required security schemes to execute this operation. An empty object ({}) indicates anonymous access is supported."
	});
	const securitySchemeBase = object({
		deprecated: optional(boolean({ typeComment: "Whether the security scheme is deprecated." })),
		description: optional(string({ typeComment: "A description for security scheme. CommonMark syntax MAY be used for rich text representation." }))
	});
	const apiKeySecurityScheme = object({
		...securitySchemeBase.properties,
		type: literal("apiKey"),
		name: string({ typeComment: "REQUIRED. The name of the header, query or cookie parameter to be used." }),
		in: union([
			literal("query"),
			literal("header"),
			literal("cookie")
		], { typeComment: "REQUIRED. The location of the API key. Valid values are \"query\", \"header\", or \"cookie\"." })
	}, { typeName: "ApiKeySecuritySchemeObject" });
	const httpSecurityScheme = object({
		...securitySchemeBase.properties,
		type: literal("http"),
		scheme: union([literal("basic"), literal("bearer")], {
			typeName: "HttpSecuritySchemeScheme",
			typeComment: "REQUIRED. The name of the HTTP Authentication scheme to be used in the Authorization header as defined in RFC7235."
		}),
		bearerFormat: optional(string({ typeComment: "A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes." }))
	}, { typeName: "HttpSecuritySchemeObject" });
	const mutualTlsSecurityScheme = object({
		...securitySchemeBase.properties,
		type: literal("mutualTLS")
	}, { typeName: "MutualTlsSecuritySchemeObject" });
	const oauthFlowExtensionObjects = [
		XScalarSecurityQuery,
		XScalarSecurityBody,
		XTokenName,
		XScalarAuthUrl,
		XScalarTokenUrl
	];
	const oauthFlowCore = object({
		refreshUrl: string({ typeComment: "The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS." }),
		scopes: record(string(), string(), {
			typeComment: "REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty.",
			typeName: "OAuthFlowScopes"
		})
	}, { typeName: "OAuthFlowBaseCore" });
	const implicitOAuth2Flow = intersection([
		oauthFlowCore,
		...oauthFlowExtensionObjects,
		object({ authorizationUrl: string({ typeComment: "REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS." }) }, { typeName: "ImplicitOAuthFlowObject" })
	]);
	const passwordOAuth2Flow = intersection([
		oauthFlowCore,
		...oauthFlowExtensionObjects,
		object({ tokenUrl: string({ typeComment: "REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS." }) }, { typeName: "PasswordOAuthFlowObject" }),
		XScalarCredentialsLocation
	]);
	const clientCredentialsOAuth2Flow = intersection([
		oauthFlowCore,
		...oauthFlowExtensionObjects,
		object({ tokenUrl: string({ typeComment: "REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS." }) }, { typeName: "ClientCredentialsOAuthFlowObject" }),
		XScalarCredentialsLocation
	]);
	const authorizationCodeOAuth2Flow = intersection([
		oauthFlowCore,
		...oauthFlowExtensionObjects,
		object({
			authorizationUrl: string({ typeComment: "REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS." }),
			tokenUrl: string({ typeComment: "REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS." })
		}, { typeName: "AuthorizationCodeOAuthFlowObject" }),
		XusePkce,
		XScalarCredentialsLocation
	]);
	const deviceAuthorizationOAuth2Flow = intersection([
		oauthFlowCore,
		...oauthFlowExtensionObjects,
		object({
			deviceAuthorizationUrl: string({ typeComment: "The device authorization endpoint URL." }),
			tokenUrl: string({ typeComment: "The token endpoint URL." })
		}, { typeName: "DeviceAuthorizationOAuthFlowObject" }),
		XScalarCredentialsLocation
	]);
	const oauth2Flows = object({
		implicit: optional(implicitOAuth2Flow),
		password: optional(passwordOAuth2Flow),
		clientCredentials: optional(clientCredentialsOAuth2Flow),
		authorizationCode: optional(authorizationCodeOAuth2Flow),
		deviceAuthorization: optional(deviceAuthorizationOAuth2Flow)
	}, { typeName: "OAuthFlowsObject" });
	const oauth2SecurityScheme = intersection([object({
		...securitySchemeBase.properties,
		type: literal("oauth2"),
		flows: oauth2Flows,
		oauth2MetadataUrl: optional(string({ typeComment: "URL to the OAuth2 authorization server metadata (RFC8414). Use HTTPS, or HTTP for local development URLs." }))
	}, { typeName: "OAuth2SecuritySchemeObject" }), XDefaultScopes]);
	const openIdConnectSecurityScheme = object({
		...securitySchemeBase.properties,
		type: literal("openIdConnect"),
		openIdConnectUrl: string({ typeComment: "REQUIRED. Well-known URL to discover the [[OpenID-Connect-Discovery]] provider metadata." })
	}, { typeName: "OpenIdConnectSecuritySchemeObject" });
	const securityScheme = union([
		apiKeySecurityScheme,
		httpSecurityScheme,
		mutualTlsSecurityScheme,
		oauth2SecurityScheme,
		openIdConnectSecurityScheme
	], { typeName: "SecuritySchemeObject" });
	const components = object({
		schemas: optional(record(string(), maybeRef(schema), { typeName: "ComponentsSchemas" })),
		mediaTypes: optional(record(string(), maybeRef(lazy(() => mediaType)), { typeName: "ComponentsMediaTypes" })),
		responses: optional(record(string(), maybeRef(lazy(() => response)), { typeName: "ComponentsResponses" })),
		parameters: optional(record(string(), maybeRef(lazy(() => parameter)), { typeName: "ComponentsParameters" })),
		examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "ComponentsExamples" })),
		requestBodies: optional(record(string(), maybeRef(lazy(() => requestBody)), { typeName: "ComponentsRequestBodies" })),
		headers: optional(record(string(), maybeRef(lazy(() => header)), { typeName: "ComponentsHeaders" })),
		securitySchemes: optional(record(string(), maybeRef(lazy(() => securityScheme)), { typeName: "ComponentsSecuritySchemes" })),
		links: optional(record(string(), maybeRef(lazy(() => link)), { typeName: "ComponentsLinks" })),
		callbacks: optional(record(string(), maybeRef(lazy(() => callback)), { typeName: "ComponentsCallbacks" })),
		pathItems: optional(record(string(), lazy(() => pathItem), { typeName: "ComponentsPathItems" }))
	}, { typeName: "ComponentsObject" });
	const example = intersection([object({
		summary: optional(string({ typeComment: "Short description for the example." })),
		description: optional(string({ typeComment: "Long description for the example. CommonMark syntax MAY be used for rich text representation." })),
		value: optional(any({ typeComment: "Embedded literal example. The value field and externalValue field are mutually exclusive." })),
		dataValue: optional(any()),
		serializedValue: optional(string()),
		externalValue: optional(string({ typeComment: "A URI that identifies the literal example. The value field and externalValue field are mutually exclusive." }))
	}, { typeName: "ExampleObject" }), XDisabled]);
	const headerBase = object({
		description: optional(string({ typeComment: "A brief description of the header. This could contain examples of use. CommonMark syntax MAY be used for rich text representation." })),
		required: optional(boolean({ typeComment: "Determines whether this header is mandatory. The default value is false." })),
		deprecated: optional(boolean({ typeComment: "Specifies that the header is deprecated and SHOULD be transitioned out of usage. Default value is false." }))
	}, { typeName: "HeaderBase" });
	const headerWithSchema = intersection([headerBase, object({
		style: optional(string({ typeComment: "Describes how the header value will be serialized. The default (and only legal value for headers) is \"simple\"." })),
		explode: optional(boolean({ typeComment: "When this is true, header values of type array or object generate a single header whose value is a comma-separated list of the array items or key-value pairs of the map, see Style Examples." })),
		schema: optional(maybeRef(lazy(() => schema))),
		example: optional(any()),
		examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "HeaderExamples" }))
	}, { typeName: "HeaderObjectWithSchema" })]);
	const headerWithContent = intersection([headerBase, object({ content: optional(record(string(), maybeRef(lazy(() => mediaType)), { typeName: "HeaderContent" })) }, { typeName: "HeaderObjectWithContent" })]);
	const header = union([headerWithSchema, headerWithContent], { typeName: "HeaderObject" });
	const encoding = object({
		style: optional(string()),
		explode: optional(boolean()),
		allowReserved: optional(boolean()),
		encoding: optional(record(string(), lazy(() => encoding))),
		prefixEncoding: optional(array(lazy(() => encoding))),
		itemEncoding: optional(lazy(() => encoding)),
		contentType: optional(string({ typeComment: "The Content-Type for encoding a specific property. The value is a comma-separated list, each element of which is either a specific media type (e.g. image/png) or a wildcard media type (e.g. image/*)." })),
		headers: optional(record(string(), maybeRef(lazy(() => header)), { typeName: "EncodingHeaders" }))
	}, { typeName: "EncodingObject" });
	const mediaType = object({
		description: optional(string()),
		prefixEncoding: optional(array(encoding)),
		itemEncoding: optional(encoding),
		schema: optional(maybeRef(lazy(() => schema))),
		itemSchema: optional(maybeRef(lazy(() => schema))),
		example: optional(any({ typeComment: "Example of the media type." })),
		examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "MediaTypeExamples" })),
		encoding: optional(record(string(), encoding, {
			typeComment: "A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property.",
			typeName: "MediaTypeEncoding"
		}))
	}, { typeName: "MediaTypeObject" });
	const parameterWithSchema = intersection([
		object({
			name: string({ typeComment: "REQUIRED. The name of the parameter. Parameter names are case sensitive. If in is \"path\", the name field MUST correspond to a template expression occurring within the path field in the Paths Object." }),
			in: union([
				literal("query"),
				literal("header"),
				literal("path"),
				literal("cookie"),
				literal("querystring")
			], {
				typeName: "ParameterLocation",
				typeComment: "REQUIRED. The location of the parameter. Possible values are \"query\", \"header\", \"path\", \"cookie\" or \"querystring\"."
			}),
			description: optional(string({ typeComment: "A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation." })),
			required: optional(boolean({ typeComment: "Determines whether this parameter is mandatory. If the parameter location is \"path\", this field is REQUIRED and its value MUST be true." })),
			deprecated: optional(boolean({ typeComment: "Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false." })),
			allowEmptyValue: optional(boolean({ typeComment: "If true, clients MAY pass a zero-length string value in place of parameters that would otherwise be omitted entirely. This field is valid only for query parameters." })),
			allowReserved: optional(boolean({ typeComment: "When this is true, parameter values are serialized using reserved expansion, as defined by RFC6570. This field only applies to parameters with an in value of query. The default value is false." })),
			style: optional(string({ typeComment: "Describes how the parameter value will be serialized (depending on the schema type)." })),
			explode: optional(boolean({ typeComment: "When this is true, parameter values of type array or object generate separate parameters for each array item or object property." })),
			schema: optional(maybeRef(lazy(() => schema))),
			example: optional(any()),
			examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "ParameterExamples" }))
		}, { typeName: "ParameterObjectWithSchema" }),
		XGlobal,
		XInternal$1,
		XScalarIgnore$1
	]);
	const parameterWithContent = intersection([
		object({
			name: string({ typeComment: "REQUIRED. The name of the parameter. Parameter names are case sensitive. If in is \"path\", the name field MUST correspond to a template expression occurring within the path field in the Paths Object." }),
			in: union([
				literal("query"),
				literal("header"),
				literal("path"),
				literal("cookie"),
				literal("querystring")
			], {
				typeName: "ParameterLocation",
				typeComment: "REQUIRED. The location of the parameter. Possible values are \"query\", \"header\", \"path\", \"cookie\" or \"querystring\"."
			}),
			description: optional(string({ typeComment: "A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation." })),
			required: optional(boolean({ typeComment: "Determines whether this parameter is mandatory. If the parameter location is \"path\", this field is REQUIRED and its value MUST be true." })),
			deprecated: optional(boolean({ typeComment: "Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false." })),
			allowEmptyValue: optional(boolean({ typeComment: "If true, clients MAY pass a zero-length string value in place of parameters that would otherwise be omitted entirely. This field is valid only for query parameters." })),
			allowReserved: optional(boolean({ typeComment: "When this is true, parameter values are serialized using reserved expansion, as defined by RFC6570. This field only applies to parameters with an in value of query. The default value is false." })),
			example: optional(any()),
			examples: optional(record(string(), maybeRef(example))),
			content: optional(record(string(), maybeRef(lazy(() => mediaType)), { typeName: "ParameterContent" }))
		}, { typeName: "ParameterObjectWithContent" }),
		XGlobal,
		XInternal$1,
		XScalarIgnore$1
	]);
	const parameter = union([parameterWithSchema, parameterWithContent], { typeName: "ParameterObject" });
	const requestBody = intersection([object({
		description: optional(string({ typeComment: "A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation." })),
		content: record(string(), maybeRef(lazy(() => mediaType)), {
			typeComment: "REQUIRED. The content of the request body. The key is a media type or media type range and the value describes it.",
			typeName: "RequestBodyContent"
		}),
		required: optional(boolean({ typeComment: "Determines if the request body is required in the request. Defaults to false." }))
	}, { typeName: "RequestBodyObject" }), XScalarSelectedContentType]);
	const link = object({
		operationRef: optional(string({ typeComment: "A URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object." })),
		operationId: optional(string({ typeComment: "The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field." })),
		parameters: optional(record(string(), any(), {
			typeComment: "A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.",
			typeName: "LinkParameters"
		})),
		requestBody: optional(any({ typeComment: "A literal value or {expression} to use as a request body when calling the target operation." })),
		description: optional(string({ typeComment: "A description of the link. CommonMark syntax MAY be used for rich text representation." })),
		server: optional(servers)
	}, { typeName: "LinkObject" });
	const response = object({
		summary: optional(string({ typeComment: "A short summary of the response." })),
		description: optional(string({ typeComment: "A description of the response. CommonMark syntax MAY be used for rich text representation." })),
		headers: optional(record(string(), maybeRef(lazy(() => header)), { typeName: "ResponseHeaders" })),
		content: optional(record(string(), maybeRef(lazy(() => mediaType)), { typeName: "ResponseContent" })),
		links: optional(record(string(), maybeRef(lazy(() => link)), { typeName: "ResponseLinks" }))
	}, { typeName: "ResponseObject" });
	const responsesObject = record(string(), maybeRef(lazy(() => response)), { typeName: "ResponsesObject" });
	const callback = record(string(), maybeRef(lazy(() => pathItem)), { typeName: "CallbackObject" });
	const operation = intersection([
		object({
			tags: optional(array(string(), {
				typeComment: "A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.",
				typeName: "OperationTags"
			})),
			summary: optional(string({ typeComment: "A short summary of what the operation does." })),
			description: optional(string({ typeComment: "A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation." })),
			externalDocs: optional(externalDocs),
			operationId: optional(string({ typeComment: "Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive." })),
			parameters: optional(array(maybeRef(lazy(() => parameter)), { typeName: "OperationParameters" })),
			requestBody: optional(maybeRef(lazy(() => requestBody))),
			responses: optional(lazy(() => responsesObject)),
			deprecated: optional(boolean({ typeComment: "Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false." })),
			security: optional(array(securityRequirement, { typeName: "OperationSecurity" })),
			servers: optional(array(servers, { typeName: "OperationServers" })),
			callbacks: optional(record(string(), maybeRef(lazy(() => callback)), { typeName: "OperationCallbacks" }))
		}, { typeName: "OperationObject" }),
		XBadges,
		XInternal$1,
		XScalarIgnore$1,
		XCodeSamples,
		XScalarStability,
		XScalarDisableParameters,
		XPostResponse,
		XPreRequest,
		XDraftExamples,
		XScalarSelectedServer$1
	]);
	const pathItem = object({
		$ref: optional(string({ typeComment: "Allows for a referenced definition of this path item. The value MUST be in the form of a URI, and the referenced structure MUST be in the form of a Path Item Object." })),
		summary: optional(string({ typeComment: "An optional string summary, intended to apply to all operations in this path." })),
		description: optional(string({ typeComment: "An optional string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation." })),
		get: optional(maybeRef(lazy(() => operation))),
		put: optional(maybeRef(lazy(() => operation))),
		post: optional(maybeRef(lazy(() => operation))),
		delete: optional(maybeRef(lazy(() => operation))),
		patch: optional(maybeRef(lazy(() => operation))),
		connect: optional(maybeRef(lazy(() => operation))),
		options: optional(maybeRef(lazy(() => operation))),
		head: optional(maybeRef(lazy(() => operation))),
		trace: optional(maybeRef(lazy(() => operation))),
		query: optional(maybeRef(lazy(() => operation))),
		additionalOperations: optional(record(string(), maybeRef(lazy(() => operation)), { typeName: "AdditionalOperations" })),
		servers: optional(array(servers, { typeName: "PathItemServers" })),
		parameters: optional(array(maybeRef(lazy(() => parameter)), { typeName: "PathItemParameters" }))
	}, { typeName: "PathItemObject" });
	const openApiExtensionsPartial = object({
		"x-original-oas-version": optional(string({ typeComment: "Original OpenAPI Specification version of the source document." })),
		[extensions$1.document.navigation]: optional(any({ typeComment: "Client navigation tree (TraversedDocument) for this OpenAPI description. Matches TraversedDocumentObjectRef in strict schemas." }))
	}, { typeName: "OpenApiExtensionsPartial" });
	const openApiDocumentCore = object({
		$self: optional(string({ typeComment: "The URI identifying this OpenAPI document." })),
		openapi: string({ typeComment: "REQUIRED. This string MUST be the version number of the OpenAPI Specification that the OpenAPI Document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI Document. This is not related to the API info.version string." }),
		info,
		jsonSchemaDialect: optional(string({ typeComment: "The default value for the $schema keyword within Schema Objects contained within this OAS document. This MUST be in the form of a URI." })),
		servers: optional(array(servers, {
			typeComment: "An array of Server Objects, which provide connectivity information to a target server. If the servers field is not provided, or is an empty array, the default value would be a Server Object with a url value of /.",
			typeName: "OpenApiServers"
		})),
		paths: optional(record(string(), pathItem, {
			typeComment: "The available paths and operations for the API.",
			typeName: "PathsObject"
		})),
		webhooks: optional(record(string(), pathItem, {
			typeComment: "The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement.",
			typeName: "WebhooksObject"
		})),
		components: optional(components),
		security: optional(array(securityRequirement, {
			typeComment: "A declaration of which security mechanisms can be used across the API. The list of values includes alternative Security Requirement Objects that can be used. Only one of the Security Requirement Objects need to be satisfied to authorize a request.",
			typeName: "OpenApiSecurity"
		})),
		tags: optional(array(tag, { typeComment: "A list of tags used by the OpenAPI Description with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools." })),
		externalDocs: optional(externalDocs)
	}, { typeName: "OpenApiDocumentCore" });
	return intersection([
		openApiDocumentCore,
		openApiExtensionsPartial,
		XScalarOriginalSourceUrl$1,
		XTagGroups,
		XScalarEnvironments$1,
		XScalarSelectedServer$1,
		XScalarIcon$1,
		XScalarOrder,
		XScalarCookies,
		XScalarOriginalDocumentHash$1,
		XScalarIsDirty$1,
		XScalarActiveEnvironment,
		XScalarWatchMode$1,
		XScalarRegistryMeta$1,
		XScalarDefaultRequestBodyView,
		XPreRequest,
		XPostResponse
	], {
		typeName: "OpenApiDocument",
		typeComment: "Root OpenAPI 3.2 document including Scalar workspace extensions (OpenApiExtensionsSchema)."
	});
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/openapi/reference.js
var referenceExtensions = object({
	"$status": optional(union([literal("loading"), literal("error")]), { typeComment: `Indicates the current status of the reference resolution. Can be either 'loading' while fetching the reference or 'error' if the resolution failed.` }),
	"$global": optional(boolean({ typeComment: "Indicates whether this reference should be resolved globally across all documents, rather than just within the current document context." }))
}, { typeName: "ReferenceObjectExtensions" });
var reference = object({
	"$ref": string({ typeComment: "REQUIRED. The reference identifier. This MUST be in the form of a URI." }),
	summary: optional(string({ typeComment: "A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect." })),
	description: optional(string({ typeComment: "A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect." }))
}, { typeName: "ReferenceObject" });
/**
* Follows a chain of references to the value at its end. References can form a loop (`A` points at
* `B` and `B` points back at `A`, or a schema points at itself), so we stop at the first reference we
* have already passed. Without that, a loop in an untrusted document overflows the stack.
*/
var e = (value) => {
	const seen = /* @__PURE__ */ new Set();
	let current = value;
	while (isObject$1(current) && "$ref" in current && !seen.has(current)) {
		seen.add(current);
		current = current["$ref-value"];
	}
	return current;
};
var recursiveRef = (schema) => union([schema, intersection([
	reference,
	object({ "$ref-value": evaluate(e, schema) }),
	referenceExtensions
])]);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/client.js
/**
* Maximum number of external references and example `externalValue`s fetched at once while bundling
* a document. Keeps large documents (which can reference thousands of external examples) from opening
* an unbounded number of connections on load.
*/
var EXTERNAL_FETCH_CONCURRENCY_LIMIT = 10;
/**
* Resolves a workspace document from various input sources (URL, local file, or direct document object).
*
* @param workspaceDocument - The document input to resolve, which can be:
*   - A URL to fetch the document from
*   - A direct document object
* @returns A promise that resolves to an object containing:
*   - ok: boolean indicating if the resolution was successful
*   - data: The resolved document data
*
* @example
* // Resolve from URL
* const urlDoc = await loadDocument({ name: 'api', url: 'https://api.example.com/openapi.json' })
*
* // Resolve direct document
* const directDoc = await loadDocument({
*   name: 'inline',
*   document: { openapi: '3.0.0', paths: {} }
* })
*/
function loadDocument(workspaceDocument) {
	if ("url" in workspaceDocument) return fetchUrls({ fetch: workspaceDocument.fetch }).exec(workspaceDocument.url);
	if ("path" in workspaceDocument) {
		const loader = workspaceDocument.fileLoader;
		if (!loader) {
			console.error("No loader provided for loading files");
			return Promise.resolve({ ok: false });
		}
		return loader.exec(workspaceDocument.path);
	}
	return Promise.resolve({
		ok: true,
		data: workspaceDocument.document,
		raw: JSON.stringify(workspaceDocument.document)
	});
}
/**
* Returns the base source of a workspace document if it was loaded from a URL or file.
* If the document was loaded from a file, returns the path to the file.
* If the document was provided directly as an object, returns undefined.
* Which can be used to resolve relative references in the document.
*
* @param input - The workspace document input (either UrlDoc or ObjectDoc)
* @returns The URL string if present, otherwise undefined
*/
var getDocumentSource = (input) => {
	if ("url" in input) return input.url;
	if ("path" in input) return input.path;
};
var openapiSchema = generateSchema(recursiveRef);
/**
* Top-level document keys that the dirty-tracker treats as metadata-only.
* Mutations under these keys are programmatic bookkeeping (commit hashes,
* cached conflict state, etc.) and never represent a user edit, so they
* must not flip `x-scalar-is-dirty` to `true`.
*/
var METADATA_ONLY_DOCUMENT_KEYS = /* @__PURE__ */ new Set(["x-scalar-is-dirty", "x-scalar-registry-meta"]);
/**
* Removes internal and metadata keys from the provided document object.
*
* This function deletes a list of known internal keys that are only meant for
* in-memory/document processing use and should not be present in the final bundled document.
* Most of these keys are injected by the bundler or used for Scalar OpenAPI document state tracking.
*
* Note: Nested internal keys are handled elsewhere in the bundler pipeline.
*
* @param document - The OpenAPI document object to be sanitized in-place.
*/
var purgeInternalDocumentKeys = (input) => {
	const result = deepClone(input);
	for (const property of [
		"x-ext",
		"x-ext-urls",
		"x-scalar-original-refs",
		"x-scalar-navigation",
		"x-scalar-navigation-chunk",
		"x-scalar-is-dirty",
		"x-original-oas-version",
		"x-scalar-original-document-hash",
		"x-scalar-original-source-url",
		"x-scalar-registry-meta"
	]) delete result[property];
	return result;
};
/**
* Creates a reactive workspace store that manages documents and their metadata.
* The store provides functionality for accessing, updating, and resolving document references.
*
* @param workspaceProps - Configuration object for the workspace
* @param workspaceProps.meta - Optional metadata for the workspace
* @param workspaceProps.documents - Optional record of documents to initialize the workspace with
*  Documents that require asynchronous loading must be added using `1` after the store is created
*  this allows atomic awaiting and does not block page load for the store initialization
* @returns An object containing methods and getters for managing the workspace
*/
var createWorkspaceStore = (workspaceProps) => {
	const { verbose = false, reactive: isReactiveWorkspace = true } = workspaceProps ?? {};
	const withMeasurementSync = (name, fn) => verbose ? measureSync(name, fn) : fn();
	const withMeasurementAsync = (name, fn) => verbose ? measureAsync(name, fn) : fn();
	/**
	* Holds additional configuration options for each document in the workspace.
	*
	* This can include settings that can not be persisted between sessions (not JSON serializable)
	*/
	const extraDocumentConfigurations = {};
	const externalExampleResolvers = /* @__PURE__ */ new WeakMap();
	const fallbackExternalExamples = createExternalExampleResolver({
		fetch: workspaceProps?.fetch,
		fileLoader: workspaceProps?.fileLoader
	});
	/**
	* Notifies all workspace plugins of a workspace state change event.
	*
	* This function iterates through all registered plugins (if any) and invokes
	* their onWorkspaceStateChanges hook with the given event object.
	*
	* @param event - The workspace state change event to broadcast to plugins
	*/
	const fireWorkspaceChange = (event) => {
		workspaceProps?.plugins?.forEach((plugin) => plugin.hooks?.onWorkspaceStateChanges?.(event));
	};
	/**
	* The plain workspace state, before any observability wrappers are applied.
	*/
	const workspaceState = {
		...workspaceProps?.meta,
		documents: {},
		/**
		* Returns the currently active document from the workspace.
		* The active document is determined by the 'x-scalar-active-document' metadata field,
		* falling back to the first document in the workspace if no active document is specified.
		*
		* @returns The active document or undefined if no document is found
		*/
		get activeDocument() {
			return workspace.documents[getActiveDocumentName()];
		}
	};
	/**
	* An object containing the reactive workspace state.
	*
	* Every change to the workspace, is tracked and broadcast to all registered plugins.
	* allowing for change tracking.
	*
	* With `reactive: false` the state is used as-is, so reads cost nothing beyond the plain object and
	* nothing observes a write. See the `reactive` option for the full list of what stops happening.
	*
	* NOTE:
	* The detect changes proxy is applied separately beacause the vue reactitvity proxy have to be the outer most proxy.
	* If the order is reversed, Vue cannot properly track mutations, leading to lost reactivity and bugs.
	* By wrapping the contents with the detect changes proxy first, and then passing the result to Vue's `reactive`,
	* we ensure that Vue manages its reactivity as expected and our change detection hooks
	* are also triggered reliably.
	* Do not reverse this order‼️
	*/
	const workspace = !isReactiveWorkspace ? workspaceState : reactive(createDetectChangesProxy(workspaceState, { hooks: { onAfterChange(path) {
		const type = path[0];
		/** Document changes */
		if (type === "documents") {
			if (path.length < 2) {
				console.log("[WARN]: Overriding entire documents object is not supported");
				return;
			}
			const documentName = path[1];
			const document = workspace.documents[documentName] ?? {
				openapi: "3.1.0",
				info: {
					title: "",
					version: ""
				},
				"x-scalar-original-document-hash": ""
			};
			bumpDocumentRevision(document);
			const event = {
				type: "documents",
				documentName,
				value: unpackProxyObject(document),
				path: path.slice(2)
			};
			if (event.path.length > 0 && !METADATA_ONLY_DOCUMENT_KEYS.has(event.path[0])) document["x-scalar-is-dirty"] = true;
			fireWorkspaceChange(event);
			return;
		}
		/** Active document changes */
		if (type === "activeDocument") {
			const documentName = getActiveDocumentName();
			const document = workspace.documents[documentName] ?? {
				openapi: "3.1.0",
				info: {
					title: "",
					version: ""
				},
				"x-scalar-original-document-hash": ""
			};
			bumpDocumentRevision(document);
			const event = {
				type: "documents",
				documentName,
				value: unpackProxyObject(document),
				path: path.slice(2)
			};
			if (event.path.length > 0 && !METADATA_ONLY_DOCUMENT_KEYS.has(event.path[0])) document["x-scalar-is-dirty"] = true;
			fireWorkspaceChange(event);
			return;
		}
		/** Workspace meta changes */
		const { activeDocument: _a, documents: _d, ...meta } = workspace;
		const event = {
			type: "meta",
			value: unpackProxyObject(meta, { depth: 1 })
		};
		fireWorkspaceChange(event);
	} } }));
	/**
	* The plain document snapshot maps, before the detect changes proxy is applied.
	*/
	const documentSnapshots = {
		/**
		* Holds the original, unmodified documents as they were initially loaded into the workspace.
		* These documents are stored in their raw form—prior to any reactive wrapping, dereferencing, or bundling.
		* This map preserves the pristine structure of each document, using deep clones to ensure that
		* subsequent mutations in the workspace do not affect the originals.
		* The originals are retained so that we can restore, compare, or sync with the remote registry as needed.
		*/
		originalDocuments: {},
		/**
		* Stores the intermediate state of documents after local edits but before syncing with the remote registry.
		*
		* This map acts as a local "saved" version of the document, reflecting the user's changes after they hit "save".
		* The `originalDocuments` map, by contrast, always mirrors the document as it exists in the remote registry.
		*
		* Use this map to stage local changes that are ready to be propagated back to the remote registry.
		* This separation allows us to distinguish between:
		*   - The last known remote version (`originalDocuments`)
		*   - The latest locally saved version (`intermediateDocuments`)
		*   - The current in-memory (possibly unsaved) workspace document (`workspace.documents`)
		*/
		intermediateDocuments: {},
		/**
		* Stores per-document overrides for OpenAPI documents.
		* This object is used to override specific fields of a document
		* when you cannot (or should not) modify the source document directly.
		* For example, this enables UI-driven or temporary changes to be applied
		* on top of the original document, without mutating the source.
		* The key is the document name, and the value is a deep partial
		* OpenAPI document representing the overridden fields.
		*/
		overrides: {}
	};
	/**
	* An object containing all the workspace state, wrapped in a detect changes proxy.
	*
	* Every change to the workspace state (documents, configs, metadata, etc.) can be detected here,
	* allowing for change tracking.
	*
	* With `reactive: false` the maps are used as-is and a write to them notifies nobody.
	*/
	const { originalDocuments, intermediateDocuments, overrides } = !isReactiveWorkspace ? documentSnapshots : createDetectChangesProxy(documentSnapshots, { hooks: { onAfterChange(path) {
		const type = path[0];
		if (!type) return;
		if (path.length < 2) return;
		const documentName = path[1];
		if (type === "originalDocuments") {
			const event = {
				type,
				documentName,
				value: unpackProxyObject(originalDocuments[documentName] ?? {}),
				path: path.splice(2)
			};
			fireWorkspaceChange(event);
		}
		if (type === "intermediateDocuments") {
			const event = {
				type,
				documentName,
				value: unpackProxyObject(intermediateDocuments[documentName] ?? {}),
				path: path.splice(2)
			};
			fireWorkspaceChange(event);
		}
		if (type === "overrides") {
			const event = {
				type,
				documentName,
				value: unpackProxyObject(overrides[documentName] ?? {})
			};
			fireWorkspaceChange(event);
		}
	} } });
	/**
	* This store is used to track the history of requests and responses for documents and operations.
	*/
	const history = createHistoryStore({ hooks: { onHistoryChange: (documentName) => {
		fireWorkspaceChange({
			type: "history",
			documentName,
			value: history.export()[documentName] ?? {}
		});
	} } });
	/**
	* The auth store for the workspace
	*/
	const auth = createAuthStore({ hooks: { onAuthChange: (documentName) => {
		fireWorkspaceChange({
			type: "auth",
			documentName,
			value: auth.export()[documentName] ?? {
				secrets: {},
				selected: {
					document: {
						selectedIndex: 0,
						selectedSchemes: []
					},
					path: {}
				}
			}
		});
	} } });
	/**
	* Whether a document needs to be wrapped in the overrides proxy.
	*
	* A reactive workspace always wraps, so the default mode keeps every document the same shape it has
	* always had. A non-reactive workspace wraps only a document that actually has overrides: with an
	* empty override map the proxy resolves to the target on every read and write anyway, so all it adds
	* is a proxy hop on every nested read. Nothing outside this file reads the proxy's identity, and the
	* store rebuilds the document from the current override map whenever the map changes, so a document
	* that gains overrides later gains the proxy along with them.
	*/
	const needsOverridesProxy = (documentOverrides) => isReactiveWorkspace || isObject$1(documentOverrides) && Object.keys(documentOverrides).length > 0;
	/**
	* Returns the name of the currently active document in the workspace.
	* The active document is determined by the 'x-scalar-active-document' metadata field,
	* falling back to the first document in the workspace if no active document is specified.
	*
	* @returns The name of the active document or an empty string if no document is found
	*/
	function getActiveDocumentName() {
		return workspace[extensions$1.workspace.activeDocument] ?? Object.keys(workspace.documents)[0] ?? "";
	}
	function exportDocument(documentName, format, minify) {
		const savedDocument = originalDocuments[documentName];
		if (!savedDocument) return;
		if (format === "json") return minify ? JSON.stringify(savedDocument) : JSON.stringify(savedDocument, null, 2);
		return browser_default.stringify(savedDocument);
	}
	const saveDocument = async (documentName) => {
		const activeDocument = workspace.documents[documentName];
		const newDocument = await getEditableDocument(documentName);
		if (!activeDocument || !newDocument) {
			console.warn("Failed to save document, active document is missing");
			return false;
		}
		originalDocuments[documentName] = newDocument;
		intermediateDocuments[documentName] = deepClone(newDocument);
		activeDocument["x-scalar-is-dirty"] = false;
		return true;
	};
	async function addInMemoryDocument(input, navigationOptions) {
		const { name } = input;
		const meta = deepClone(input.meta);
		const clonedRawInputDocument = withMeasurementSync("deepClone", () => deepClone(input.document));
		withMeasurementSync("expandChunkIndex", () => expandChunkIndex(clonedRawInputDocument));
		withMeasurementSync("initialize", () => {
			if (input.initialize !== false) {
				originalDocuments[name] = deepClone(clonedRawInputDocument);
				intermediateDocuments[name] = deepClone(clonedRawInputDocument);
				overrides[name] = input.overrides ?? {};
				extraDocumentConfigurations[name] = { fetch: input.fetch };
			}
		});
		const loaders = [fetchUrls({
			fetch: extraDocumentConfigurations[name]?.fetch ?? workspaceProps?.fetch,
			limit: EXTERNAL_FETCH_CONCURRENCY_LIMIT
		})];
		if (workspaceProps?.fileLoader) loaders.push(workspaceProps.fileLoader);
		if (isAsyncApiDocument(clonedRawInputDocument)) {
			const originalAasVersion = clonedRawInputDocument.asyncapi;
			const upgradedAsyncApiDocument = withMeasurementSync("upgrade", () => upgrade$1(deepClone(clonedRawInputDocument)));
			const asyncApiDocument = createMagicProxy({
				...upgradedAsyncApiDocument,
				...meta,
				"x-original-aas-version": originalAasVersion,
				"x-scalar-original-document-hash": input.documentHash,
				"x-scalar-original-source-url": input.documentSource
			});
			await withMeasurementAsync("bundle", async () => await bundle(getRaw(asyncApiDocument), {
				treeShake: false,
				plugins: loaders,
				urlMap: true,
				origin: input.documentSource
			}));
			const coerced = withMeasurementSync("coerceValue", () => coerce(asyncApiObjectSchema, deepClone(getRaw(asyncApiDocument))));
			withMeasurementSync("mergeObjects", () => mergeObjects$1(asyncApiDocument, coerced));
			if (asyncApiDocument[extensions$1.document.navigation] === void 0) {
				const navigation = traverseAsyncApiDocument(name, asyncApiDocument, navigationOptions);
				asyncApiDocument[extensions$1.document.navigation] = navigation;
			}
			const asyncApiOverrides = unpackProxyObject(overrides[name]);
			workspace.documents[name] = needsOverridesProxy(asyncApiOverrides) ? createOverridesProxy(asyncApiDocument, { overrides: asyncApiOverrides }) : asyncApiDocument;
			return;
		}
		const inputDocument = withMeasurementSync("upgrade", () => upgrade(deepClone(clonedRawInputDocument), "3.1"));
		const strictDocument = createMagicProxy({
			...inputDocument,
			...meta,
			"x-original-oas-version": clonedRawInputDocument.openapi ?? clonedRawInputDocument.swagger,
			"x-scalar-original-document-hash": input.documentHash,
			"x-scalar-original-source-url": input.documentSource
		}, {
			showInternal: true,
			documentUri: resolveOpenApiDocument(inputDocument, input.documentSource ?? "/")?.baseUri
		});
		if (strictDocument[extensions$1.document.navigation] === void 0) {
			await withMeasurementAsync("bundle", async () => await bundle(getRaw(strictDocument), {
				treeShake: false,
				plugins: [
					...loaders,
					openApiDocument(),
					normalizeRefs(),
					externalValueResolver({ lazy: true }),
					refsEverywhere(),
					normalizeAuthSchemes(),
					syncPathParameters()
				],
				urlMap: true,
				origin: input.documentSource
			}));
			const coerced = withMeasurementSync("coerceValue", () => coerce(openapiSchema, normalizeBooleanSchemas(deepClone(strictDocument))));
			withMeasurementSync("mergeObjects", () => mergeObjects$1(strictDocument, coerced));
		}
		if (!Check(OpenAPIDocumentSchema, strictDocument)) {
			const validationErrors = Array.from(Errors(OpenAPIDocumentSchema, strictDocument));
			console.warn("document validation errors: ");
			console.warn(validationErrors.map((error) => ({
				message: error.message,
				path: error.path,
				schema: error.schema,
				value: error.value
			})));
		}
		if (strictDocument[extensions$1.document.navigation] === void 0) {
			const navigation = traverseDocument(name, strictDocument, navigationOptions);
			strictDocument[extensions$1.document.navigation] = navigation;
		}
		const documentOverrides = unpackProxyObject(overrides[name]);
		const magicDocument = createMagicProxy(getRaw(strictDocument), { documentUri: resolveOpenApiDocument(getRaw(strictDocument), input.documentSource ?? "/")?.baseUri });
		workspace.documents[name] = needsOverridesProxy(documentOverrides) ? createOverridesProxy(magicDocument, { overrides: documentOverrides }) : magicDocument;
	}
	async function addDocument(input, navigationOptions) {
		const { name, meta } = input;
		/** Ensure we use the active proxy to fetch documents unless we have a custom fetch override */
		const fetch = getFetch({
			fetch: input.fetch ?? workspaceProps?.fetch,
			proxyUrl: workspace["x-scalar-active-proxy"] ?? void 0
		});
		const resolve = await withMeasurementAsync("loadDocument", async () => await loadDocument({
			...input,
			fetch,
			fileLoader: workspaceProps?.fileLoader
		}));
		return await withMeasurementAsync("addDocument", async () => {
			if (!resolve.ok) {
				console.error(`Failed to fetch document '${name}': request was not successful`);
				workspace.documents[name] = {
					...meta,
					openapi: "3.1.0",
					info: {
						title: `Document '${name}' could not be loaded`,
						version: "unknown"
					},
					"x-scalar-original-document-hash": "not-a-hash"
				};
				return false;
			}
			if (!isObject$1(resolve.data)) {
				console.error(`Failed to load document '${name}': response data is not a valid object`);
				workspace.documents[name] = {
					...meta,
					openapi: "3.1.0",
					info: {
						title: `Document '${name}' could not be loaded`,
						version: "unknown"
					},
					"x-scalar-original-document-hash": "not-a-hash"
				};
				return false;
			}
			await addInMemoryDocument({
				...input,
				document: resolve.data,
				documentSource: getDocumentSource(input),
				documentHash: generateHash(resolve.raw)
			}, navigationOptions);
			return true;
		});
	}
	const getOriginalDocument = (documentName) => {
		const rawDocument = unpackProxyObject(originalDocuments[documentName], { depth: 1 });
		if (!rawDocument) return null;
		return rawDocument;
	};
	const getIntermediateDocument = (documentName) => {
		const rawDocument = unpackProxyObject(intermediateDocuments[documentName], { depth: 1 });
		if (!rawDocument) return null;
		return rawDocument;
	};
	/**
	* Promotes the intermediate document to the original document so the
	* current intermediate becomes the new baseline.
	*
	* The intermediate layer is deprecated: `saveDocument` now writes
	* directly into `originalDocuments`, so by the time anyone could call
	* this method the original map already holds the latest saved baseline.
	* Copying the (now stale) intermediate over the original would clobber
	* the user's save, so this is a no-op for existing documents and only
	* reports `false` when the document does not exist at all.
	*/
	const promoteIntermediateToOriginal = (documentName) => {
		return Boolean(intermediateDocuments[documentName]);
	};
	/**
	* Retrieves an editable clone of a workspace document.
	*
	* - Unpacks the proxied document from the workspace.
	* - Reverses all external references, restoring original $refs.
	* - Removes transient/in-memory keys defined in EXCLUDE_KEYS.
	*
	* @param documentName The name of the document to retrieve.
	* @returns The editable document object, or null if not found.
	*/
	const getEditableDocument = async (documentName) => {
		const rawDocument = unpackProxyObject(workspace.documents[documentName], { depth: 1 });
		if (!rawDocument) return null;
		return purgeInternalDocumentKeys(await bundle(deepClone(rawDocument), {
			plugins: [
				openApiDocument(),
				restoreOriginalRefs(),
				removeExtraScalarKeys()
			],
			treeShake: false,
			urlMap: true
		}));
	};
	/**
	* Builds (or updates) the navigation sidebar for the specified document.
	*
	* This method generates the sidebar navigation structure for a workspace document,
	* and attaches it to the document's metadata under the navigation extension key.
	* The document is unpacked to avoid assigning proxy objects as direct property references.
	*
	* - Only the top-level object is proxied; all child objects should be unproxied.
	* - This approach enables safe unpacking of the proxy object without recursively traversing the full object tree.
	*
	* @param documentName - The name/key of the document whose sidebar should be built.
	* @returns {boolean} True if the sidebar was built successfully, false if the document does not exist.
	*/
	const buildSidebar = (documentName) => {
		const document = workspace.documents[documentName];
		if (!document) {
			console.error(`Document '${documentName}' does not exist in the workspace.`);
			return false;
		}
		if (!isOpenApiDocument(document)) return false;
		const navigation = traverseDocument(documentName, document);
		document[extensions$1.document.navigation] = navigation;
		return true;
	};
	/**
	* Fetches the chunk a compact document keeps its navigation children in.
	*
	* The reference is bundled on an object of its own rather than in the document, so nothing of it
	* is left behind: the chunk lands in that object's `x-ext` and is dropped along with it, and the
	* navigation is never a reference, not even while the request is in flight. Navigation has one
	* owner, so the children go on the document as they are and there is nothing for a shared `x-ext`
	* entry to save.
	*
	* `depth: 0` stops the bundler at the reference itself, which is as far as a navigation chunk
	* goes: its entries address the document through their own `ref` strings and carry no `$ref`.
	*
	* The chunk is handed back unwrapped: what it holds goes on the document, and a magic proxy there
	* would enumerate a virtual `$ref-value` and stop the document being structured-cloned into
	* storage. Unwrapping one level is enough, because the proxy wraps lazily.
	*
	* @returns The navigation the chunk holds, or `undefined` when it could not be loaded — the
	*   bundler reports that failure the same way it reports an unreachable component chunk.
	*/
	const fetchNavigationChunk = async (documentName, ref, origin) => {
		const holder = createMagicProxy(chunkReference(ref));
		await bundle(getRaw(holder), {
			plugins: [fetchUrls({
				fetch: extraDocumentConfigurations[documentName]?.fetch ?? workspaceProps?.fetch,
				limit: EXTERNAL_FETCH_CONCURRENCY_LIMIT
			}), ...workspaceProps?.fileLoader ? [workspaceProps.fileLoader] : []],
			treeShake: false,
			origin,
			depth: 0,
			urlMap: true
		});
		return getRaw(getResolvedRef$1(holder));
	};
	/** Share concurrent requests only within the same document instance, including after a workspace reload. */
	const navigationChildrenLoads = /* @__PURE__ */ new WeakMap();
	/**
	* Loads a compact document's navigation children and assigns them onto its navigation in place.
	*
	* Only a compact document carries `x-scalar-navigation-chunk`, and only until its children are
	* loaded, so the key answers both "is there anything to load" and "has it already happened". It
	* travels with the document, which is what lets a workspace exported before the children were
	* loaded still load them once it has been imported into another store. A failed load leaves the
	* key in place, so asking again retries.
	*/
	const loadNavigationChildren = async (documentName) => {
		const document = workspace.documents[documentName];
		if (!isOpenApiDocument(document)) return;
		const ref = document[extensions$1.document.navigationChunk];
		const navigation = document[extensions$1.document.navigation];
		if (ref === void 0 || navigation === void 0) return;
		const pending = navigationChildrenLoads.get(document);
		if (pending) return pending;
		const load = (async () => {
			const chunk = await fetchNavigationChunk(documentName, ref, document["x-scalar-original-source-url"]);
			if (chunk === void 0 || workspace.documents[documentName] !== document) return;
			navigation.children = chunk.children ?? [];
			delete document[extensions$1.document.navigationChunk];
		})();
		navigationChildrenLoads.set(document, load);
		try {
			await load;
		} finally {
			navigationChildrenLoads.delete(document);
		}
	};
	const visitedNodesCache = /* @__PURE__ */ new Set();
	return {
		externalExamples: (documentName) => {
			const name = documentName ?? getActiveDocumentName();
			const document = workspace.documents[name];
			if (!document) return fallbackExternalExamples;
			const existing = externalExampleResolvers.get(document);
			if (existing) return existing;
			const resolver = createExternalExampleResolver({
				origin: document["x-scalar-original-source-url"],
				fileLoader: workspaceProps?.fileLoader,
				fetch: extraDocumentConfigurations[name]?.fetch ?? workspaceProps?.fetch
			});
			externalExampleResolvers.set(document, resolver);
			return resolver;
		},
		get workspace() {
			return workspace;
		},
		get history() {
			return history;
		},
		get auth() {
			return auth;
		},
		update(key, value) {
			preventPollution(key);
			Object.assign(workspace, { [key]: value });
		},
		getEditableDocument,
		getOriginalDocument,
		getIntermediateDocument,
		updateDocument(name, key, value) {
			const currentDocument = workspace.documents[name === "active" ? getActiveDocumentName() : name];
			if (!currentDocument) return false;
			preventPollution(key);
			Object.assign(currentDocument, { [key]: value });
			return true;
		},
		async replaceDocument(documentName, input) {
			const currentDocument = unpackProxyObject(workspace.documents[documentName], { depth: 1 });
			if (!currentDocument) return console.error(`Document '${documentName}' does not exist in the workspace.`);
			await addInMemoryDocument({
				name: documentName,
				document: input,
				documentSource: currentDocument["x-scalar-original-source-url"],
				documentHash: currentDocument["x-scalar-original-document-hash"],
				meta: {
					"x-scalar-registry-meta": currentDocument["x-scalar-registry-meta"],
					"x-scalar-is-dirty": true,
					"x-scalar-navigation": void 0
				},
				initialize: false
			});
		},
		resolve: async (path) => {
			const activeDocument = workspace.activeDocument;
			if (path[0] === extensions$1.document.navigation) {
				await loadNavigationChildren(getActiveDocumentName());
				return getValueAtPath(activeDocument, path);
			}
			const target = getValueAtPath(activeDocument, path);
			if (!isObject$1(target)) {
				console.error(`Invalid path provided for resolution. Path: [${path.join(", ")}]. Found value of type: ${typeof target}. Expected an object.`);
				return Promise.resolve();
			}
			return bundle(target, {
				root: activeDocument,
				origin: activeDocument?.["x-scalar-original-source-url"],
				treeShake: false,
				plugins: [
					openApiDocument(),
					fetchUrls({
						fetch: extraDocumentConfigurations[getActiveDocumentName()]?.fetch ?? workspaceProps?.fetch,
						limit: EXTERNAL_FETCH_CONCURRENCY_LIMIT
					}),
					...workspaceProps?.fileLoader ? [workspaceProps.fileLoader] : [],
					loadingStatus(),
					externalValueResolver({ lazy: true })
				],
				urlMap: true,
				visitedNodes: visitedNodesCache
			});
		},
		addDocument,
		/**
		* Deletes a document from the workspace and all associated data.
		*
		* This function removes the document and all related data structures.
		* If the deleted document was active, it automatically selects the first remaining document.
		*/
		deleteDocument: (documentName) => {
			if (!workspace.documents[documentName]) return;
			delete workspace.documents[documentName];
			delete originalDocuments[documentName];
			delete intermediateDocuments[documentName];
			delete overrides[documentName];
			delete extraDocumentConfigurations[documentName];
			history.clearDocumentHistory(documentName);
			auth.clearDocumentAuth(documentName);
			const remainingDocuments = Object.keys(workspace.documents);
			if (workspace["x-scalar-active-document"] === documentName) workspace["x-scalar-active-document"] = remainingDocuments[0] ?? void 0;
			fireWorkspaceChange({
				type: "deleteDocument",
				documentName
			});
		},
		exportDocument,
		exportActiveDocument: (format, minify) => exportDocument(getActiveDocumentName(), format, minify),
		buildSidebar,
		saveDocument,
		promoteIntermediateToOriginal,
		async revertDocumentChanges(documentName) {
			const workspaceDocument = unpackProxyObject(workspace.documents[documentName], { depth: 1 });
			const baseline = unpackProxyObject(originalDocuments[documentName], { depth: 1 });
			if (!workspaceDocument || !baseline) return;
			intermediateDocuments[documentName] = deepClone(baseline);
			await addInMemoryDocument({
				name: documentName,
				document: baseline,
				documentSource: workspaceDocument["x-scalar-original-source-url"],
				documentHash: workspaceDocument["x-scalar-original-document-hash"],
				initialize: false,
				meta: { "x-scalar-registry-meta": workspaceDocument["x-scalar-registry-meta"] }
			});
		},
		commitDocument(documentName) {
			console.warn(`Commit operation for document '${documentName}' is not implemented yet.`);
		},
		exportWorkspace() {
			const { activeDocument: _, documents, ...meta } = unpackProxyObject(workspace);
			return {
				documents: { ...Object.fromEntries(Object.entries(documents).map(([name, doc]) => [name, unpackProxyObject(doc)])) },
				meta: unpackProxyObject(meta) ?? {},
				originalDocuments: unpackProxyObject(originalDocuments),
				intermediateDocuments: unpackProxyObject(intermediateDocuments),
				overrides: unpackProxyObject(overrides),
				history: history.export(),
				auth: auth.export()
			};
		},
		loadWorkspace(input) {
			for (const document of Object.values(input.documents)) expandChunkIndex(document);
			safeAssign(workspace.documents, Object.fromEntries(Object.entries(input.documents).map(([name, doc]) => {
				const magicDocument = createMagicProxy(doc, { documentUri: resolveOpenApiDocument(doc, doc["x-scalar-original-source-url"] ?? "/")?.baseUri });
				const documentOverrides = input.overrides[name];
				return [name, needsOverridesProxy(documentOverrides) ? createOverridesProxy(magicDocument, { overrides: documentOverrides }) : magicDocument];
			})));
			safeAssign(originalDocuments, input.originalDocuments);
			safeAssign(intermediateDocuments, input.intermediateDocuments);
			safeAssign(overrides, input.overrides);
			safeAssign(workspace, input.meta);
			history.load(input.history);
			auth.load(input.auth);
		},
		importWorkspaceFromSpecification: (specification) => {
			const { documents, overrides, info: _info, workspace: _workspaceVersion, ...meta } = specification;
			safeAssign(workspace, meta);
			return Promise.all(Object.entries(documents ?? {}).map(([name, doc]) => addDocument({
				url: doc.$ref,
				name,
				overrides: overrides?.[name]
			})));
		},
		rebaseDocument: async (input) => {
			const { name } = input;
			const originalDocument = unpackProxyObject(originalDocuments[name], { depth: 1 });
			const activeDocumentRaw = unpackProxyObject(workspace.documents[name], { depth: 1 });
			const activeDocument = await getEditableDocument(name);
			if (!originalDocument || !activeDocument || !activeDocumentRaw) return {
				ok: false,
				type: "CORRUPTED_STATE",
				message: `Cannot rebase document '${name}': missing original or active document state`
			};
			const resolve = await withMeasurementAsync("loadDocument", async () => await loadDocument({
				...input,
				fetch: input.fetch ?? workspaceProps?.fetch,
				fileLoader: workspaceProps?.fileLoader
			}));
			if (!resolve.ok || !isObject$1(resolve.data)) return {
				ok: false,
				type: "FETCH_FAILED",
				message: `Failed to fetch document '${name}': request was not successful or returned invalid data`
			};
			const newHash = generateHash(resolve.raw);
			if (activeDocumentRaw["x-scalar-original-document-hash"] === newHash) return {
				ok: false,
				type: "NO_CHANGES_DETECTED",
				message: `No changes detected for document '${name}': document hash matches the active document`
			};
			const newDocumentOrigin = resolve.data;
			overrides[name] = input.overrides ?? {};
			extraDocumentConfigurations[name] = { fetch: input.fetch };
			const changelogIncoming = diff(originalDocument, newDocumentOrigin);
			if (changelogIncoming.length === 0) return {
				ok: false,
				type: "NO_CHANGES_DETECTED",
				message: `No changes detected for document '${name}' after fetching the latest version.`
			};
			const merged = merge(changelogIncoming, diff(originalDocument, activeDocument));
			return {
				ok: true,
				conflicts: merged.conflicts,
				changes: merged.diffs,
				applyChanges: async (applyChangesInput) => {
					const getNewActiveDocument = () => {
						if ("resolvedConflicts" in applyChangesInput) {
							const changeset = merged.diffs.concat(applyChangesInput.resolvedConflicts);
							return apply(deepClone(originalDocument), changeset);
						}
						return applyChangesInput.resolvedDocument;
					};
					const mergedDocument = getNewActiveDocument();
					const hasLocalChangesAgainstUpstream = diff(newDocumentOrigin, mergedDocument).length > 0;
					originalDocuments[name] = mergedDocument;
					intermediateDocuments[name] = deepClone(mergedDocument);
					const isOpenApi = isOpenApiDocument(activeDocumentRaw);
					const environments = isOpenApi ? activeDocumentRaw["x-scalar-environments"] : void 0;
					const order = isOpenApi ? activeDocumentRaw["x-scalar-order"] : void 0;
					const mergedServers = mergedDocument.servers;
					const activeServers = activeDocumentRaw.servers;
					const mergedHasServers = Array.isArray(mergedServers) && mergedServers.length > 0;
					const activeHasServers = Array.isArray(activeServers) && activeServers.length > 0;
					const preservedServers = !isAsyncApiDocument(mergedDocument) && !mergedHasServers && activeHasServers ? deepClone(activeServers) : void 0;
					await addInMemoryDocument({
						...input,
						document: {
							...mergedDocument,
							[extensions$1.document.navigation]: void 0
						},
						documentSource: getDocumentSource(input),
						documentHash: generateHash(resolve.raw),
						initialize: false,
						meta: {
							...input.meta,
							"x-scalar-registry-meta": activeDocumentRaw["x-scalar-registry-meta"],
							"x-scalar-watch-mode": activeDocumentRaw["x-scalar-watch-mode"],
							"x-scalar-selected-server": activeDocumentRaw["x-scalar-selected-server"],
							...environments !== void 0 ? { "x-scalar-environments": environments } : {},
							...order !== void 0 ? { "x-scalar-order": order } : {},
							...preservedServers !== void 0 ? { servers: preservedServers } : {},
							"x-scalar-is-dirty": hasLocalChangesAgainstUpstream
						}
					});
				}
			};
		}
	};
};
//#endregion
export { provideLocalization as _, apiReferenceConfigurationWithSourceSchema as a, _plugin_vue_export_helper_default as b, bundle as c, AGENT_CONTEXT_SYMBOL as d, useAgent as f, coerce as g, ScalarIconArrowUp_default as h, apiReferenceConfigurationSchema as i, REFERENCE_LS_KEYS as l, ScalarIconLockSimple_default as m, openApiDocument as n, ScalarTextInputCopy_default as o, useAgentContext as p, useLazyApiClient as r, ScalarTextInput_default as s, createWorkspaceStore as t, safeLocalStorage as u, resolveLocalization as v, useLocalization as y };
