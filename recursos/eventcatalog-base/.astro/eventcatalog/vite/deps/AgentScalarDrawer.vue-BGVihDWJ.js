import { t as __commonJSMin } from "./rolldown-runtime-B-lAHAz2.js";
import { Ar as toJSONSchema, Er as safeParseAsync, Et as _enum, Fn as object$2, Jn as string, Kt as custom, Lt as boolean, Mt as any, Nt as array$2, Ot as _instanceof, Pn as number, Un as record, Yt as discriminatedUnion, bn as lazy, kt as _null, or as union, qn as strictObject, sr as unknown, xn as literal } from "./schemas-CwB3E6tb.js";
import { t as EventSourceParserStream } from "./stream-CM21Ame3.js";
import { $ as ScalarButton_default, An as ScalarIconInfo_default, Bn as getResolvedUrl, Cn as ScalarIcon_default, Ct as useLoadingState, Dn as ScalarIconPlus_default, F as fetchUrls, Fn as ScalarIconCaretDown_default, Ft as useModal, H as ScalarCodeBlock_default, Hn as validate, In as useScalarIcon, N as createWorkspaceEventBus, Nn as ScalarIconCheck_default, Nt as ScalarSearchInput_default, Ot as ScalarListbox_default, Pn as ScalarIconCaretRight_default, Pt as ScalarModal_default, Tn as ScalarIconX_default, Tt as useToasts, X as ServerVariablesForm_default, Y as ScalarMarkdown_default, _n as ScalarLoading_default, bt as useDebounceFn, d as ScalarDropdownItem_default, kn as ScalarIconMagnifyingGlass_default, m as ScalarDropdown_default, mn as ScalarIconButton_default, mt as useFocusWithin, n as ScalarPopover_default, nt as debounce, ot as AuthSchema, r as AuthSelector_default, s as ScalarTooltip_default, t as initializeWorkspaceEventHandlers, vn as ScalarColorModeToggle_default } from "./workspace-events-BHk-czww.js";
import { E as isOpenApiDocument, I as buildRequestSecurity, Qn as array$3, S as getActiveEnvironment, ar as nullable, at as encode, cr as optional, ct as redirectToProxy, d as getSecurityRequirements, dr as union$1, i as mergeSecurity, l as getSecuritySchemes, lr as record$1, mi as parseMimeType, mr as coerceValue, n as getSelectedServer, or as number$1, r as getServers, s as getSelectedSecurity, sr as object$3, ur as string$1 } from "./request-example-CCgTHEb8.js";
import { b as _plugin_vue_export_helper_default$1, c as bundle, g as coerce, h as ScalarIconArrowUp_default, i as apiReferenceConfigurationSchema, l as REFERENCE_LS_KEYS, m as ScalarIconLockSimple_default, n as openApiDocument, p as useAgentContext, r as useLazyApiClient, s as ScalarTextInput_default, t as createWorkspaceStore, u as safeLocalStorage, y as useLocalization } from "./client-CDFj7Xt_.js";
import { At as unref, B as onBeforeUnmount, Dt as toRefs, E as createVNode, Et as toRef, I as mergeProps, It as toDisplayString, J as openBlock, L as nextTick, M as hasInjectionContext, N as inject, Nt as normalizeClass, O as defineComponent, T as createTextVNode, W as onMounted, X as renderList, Y as provide, Z as renderSlot, _ as computed, at as useTemplateRef, b as createCommentVNode, d as withKeys, dt as withDirectives, f as withModifiers, gt as isRef, ht as isReadonly, k as getCurrentInstance, l as vModelText, m as Fragment, mt as getCurrentScope, nt as useId, ot as watch, t as Transition, u as vShow, ut as withCtx, v as createBaseVNode, vt as onScopeDispose, w as createStaticVNode, wt as shallowRef, x as createElementBlock, xt as ref, y as createBlock, yt as reactive } from "./vue.runtime.esm-bundler-BqKG0iLx.js";
//#region node_modules/@scalar/icons/dist/components/ScalarIconArrowRight.vue.script.js
var _hoisted_1$41 = { key: 0 };
var _hoisted_2$20 = { key: 1 };
var _hoisted_3$17 = { key: 2 };
var _hoisted_4$10 = { key: 3 };
var _hoisted_5$8 = { key: 4 };
var _hoisted_6$7 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconArrowRight.js
var ScalarIconArrowRight_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconArrowRight",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$41, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$20, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,128l-72,72V56Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$17, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$10, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$8, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$7, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconUpload.vue.script.js
var _hoisted_1$40 = { key: 0 };
var _hoisted_2$19 = { key: 1 };
var _hoisted_3$16 = { key: 2 };
var _hoisted_4$9 = { key: 3 };
var _hoisted_5$7 = { key: 4 };
var _hoisted_6$6 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconUpload.js
var ScalarIconUpload_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconUpload",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$40, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M188,184a16,16,0,1,1,16-16A16,16,0,0,1,188,184Zm36-68H180a12,12,0,0,0,0,24h40v56H36V140H76a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116ZM88.49,80.49,116,53v75a12,12,0,0,0,24,0V53l27.51,27.52a12,12,0,1,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,1,0,17,17Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$19, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$16, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M74.34,77.66a8,8,0,0,1,0-11.32l48-48a8,8,0,0,1,11.32,0l48,48a8,8,0,0,1-11.32,11.32L136,43.31V128a8,8,0,0,1-16,0V43.31L85.66,77.66A8,8,0,0,1,74.34,77.66ZM240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16h68a4,4,0,0,1,4,4v3.46c0,13.45,11,24.79,24.46,24.54A24,24,0,0,0,152,128v-4a4,4,0,0,1,4-4h68A16,16,0,0,1,240,136Zm-40,32a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$9, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M238,136v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V136a14,14,0,0,1,14-14H80a6,6,0,0,1,0,12H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2V136a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h48A14,14,0,0,1,238,136ZM84.24,76.24,122,38.49V128a6,6,0,0,0,12,0V38.49l37.76,37.75a6,6,0,0,0,8.48-8.48l-48-48a6,6,0,0,0-8.48,0l-48,48a6,6,0,0,0,8.48,8.48ZM198,168a10,10,0,1,0-10,10A10,10,0,0,0,198,168Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$7, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$6, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M236,136v64a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V136a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H32a4,4,0,0,0-4,4v64a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4V136a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h48A12,12,0,0,1,236,136ZM82.83,74.83,124,33.66V128a4,4,0,0,0,8,0V33.66l41.17,41.17a4,4,0,1,0,5.66-5.66l-48-48a4,4,0,0,0-5.66,0l-48,48a4,4,0,0,0,5.66,5.66ZM196,168a8,8,0,1,0-8,8A8,8,0,0,0,196,168Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconXCircle.vue.script.js
var _hoisted_1$39 = { key: 0 };
var _hoisted_2$18 = { key: 1 };
var _hoisted_3$15 = { key: 2 };
var _hoisted_4$8 = { key: 3 };
var _hoisted_5$6 = { key: 4 };
var _hoisted_6$5 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconXCircle.js
var ScalarIconXCircle_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconXCircle",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$39, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$18, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$15, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$8, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$6, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$5, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/entities/error/helpers.js
function createError(code, detail) {
	return {
		code,
		detail
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/entities/registry/document.js
var registryApiMetadata = object$3({
	id: string$1(),
	title: string$1(),
	namespace: string$1(),
	currentVersion: string$1(),
	logoUrl: union$1([string$1(), nullable()]),
	slug: string$1()
});
//#endregion
//#region node_modules/neverpanic/dist/index.js
/**
* Create a safe function from an unsafe one.
*
* @param cb - The async function to wrap.
* @param [eh] - Optional fallback error handler.
* @returns A new function that returns a typesafe Result.
*
* @example
* const getUser = n.safeFn(
*   async (id: string) => {
*     const res = await fetch(`https://example.com/users/${id}`);
*     if (!res.ok) return { success: false, error: "FAILED_TO_FETCH" };
*
*     return { success: true, data: await res.json() };
*   },
*   () => "FAILED_TO_GET_USER"
* );
*
* const getUserResult = await getUser("some-user-id");
* if (!getUserResult.success) {
*   console.error(getUserResult.error);
* } else {
*   console.log(getUserResult.data);
* }
*/
function safeFn(cb, eh) {
	const createErrorResult = (e) => ({
		success: false,
		error: eh?.(e) ?? null
	});
	return (...args) => {
		try {
			const result = cb(...args);
			if (result instanceof Promise) return result.catch(createErrorResult);
			return result;
		} catch (e) {
			return createErrorResult(e);
		}
	};
}
/**
* Run an unsafe function, handle any errors and return a Result.
*
* @param cb - The async function to call.
* @param [eh] - Optional fallback error handler.
* @returns The awaited return value of cb.
*
* @example
* const user = await n.fromUnsafe(() => db.findUser('some-user-id'), () => 'FAILED_T0_FIND_USER')
* if (!user.success) {
* 	console.error(user.error)
* } else {
* 	console.log(user.data)
* }
*/
function fromUnsafe(cb, eh) {
	const createErrorResult = (e) => ({
		success: false,
		error: eh?.(e) ?? null
	});
	const createSuccessResult = (data) => ({
		success: true,
		data
	});
	try {
		const result = cb();
		if (result instanceof Promise) return result.then(createSuccessResult).catch(createErrorResult);
		return createSuccessResult(result);
	} catch (e) {
		return createErrorResult(e);
	}
}
function resultsToResult(results) {
	let success = true;
	const error = [];
	const data = [];
	for (const result of results) if (!result.success) {
		success = false;
		error.push(result.error);
	} else data.push(result.data);
	return success ? {
		success: true,
		data
	} : {
		success: false,
		error
	};
}
var n = {
	safeFn,
	fromUnsafe,
	resultsToResult
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/api.js
function createAuthorizationHeaders({ getAccessToken, getAgentKey }) {
	const token = getAccessToken?.();
	const agentKey = getAgentKey?.();
	return {
		...token && { Authorization: `Bearer ${token}` },
		...agentKey && { "x-scalar-agent-key": agentKey }
	};
}
/** Minimal set of API requests needed for agent chat */
function createApi({ baseUrl, getAccessToken, getAgentKey }) {
	const serviceErrorSchema = object$3({
		message: string$1(),
		code: string$1()
	});
	const request = n.safeFn(async ({ path, method = "get", query, body, responseSchema }) => {
		const url = `${baseUrl}${path}${query ? `?${new URLSearchParams(query)}` : ""}`;
		const fetchResult = await n.fromUnsafe(async () => fetch(url, {
			method,
			...body && { body: JSON.stringify(body) },
			headers: { ...createAuthorizationHeaders({
				getAccessToken,
				getAgentKey
			}) }
		}), (originalError) => createError("FAILED_TO_FETCH", originalError));
		if (!fetchResult.success) return fetchResult;
		const fetchDataResult = await n.fromUnsafe(async () => fetchResult.data.json(), (originalError) => createError("FAILED_TO_FETCH_DATA", originalError));
		if (!fetchDataResult.success) return {
			success: false,
			error: createError("UNKNOWN_ERROR", "Unknown error occurred. Please contact support.")
		};
		if (!fetchResult.data.ok) {
			if (!validate(serviceErrorSchema, fetchDataResult.data)) return {
				success: false,
				error: createError("UNKNOWN_ERROR", "Unknown error occurred. Please contact support.")
			};
			const errorData = coerce(serviceErrorSchema, fetchDataResult.data);
			return {
				success: false,
				error: createError(errorData.code, errorData.message)
			};
		}
		if (!validate(responseSchema, fetchDataResult.data)) return {
			success: false,
			error: createError("INVALID_RESPONSE", "Invalid response. Please contact support")
		};
		return {
			success: true,
			data: coerce(responseSchema, fetchDataResult.data)
		};
	});
	const search = async (query) => request({
		path: "/vector/registry/search",
		query: { query },
		responseSchema: object$3({ results: array$3(registryApiMetadata) })
	});
	const getDocument = async (params) => request({
		path: `/vector/registry/document/${params.namespace}/${params.slug}`,
		responseSchema: registryApiMetadata
	});
	const getKeyDocuments = async () => request({
		path: "/vector/registry/documents",
		responseSchema: object$3({ documents: array$3(registryApiMetadata) })
	});
	const getCuratedDocuments = async () => request({
		path: "/vector/registry/curated",
		responseSchema: object$3({ results: array$3(registryApiMetadata) })
	});
	return {
		search,
		getDocument,
		getKeyDocuments,
		getCuratedDocuments
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/registry/create-document-name.js
function createDocumentName(namespace, slug) {
	return `${namespace}/${slug}`;
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/entities/tools/execute-request.js
var EXECUTE_CLIENT_SIDE_REQUEST_TOOL_NAME = "execute-request";
object$3({
	method: string$1(),
	path: string$1(),
	headers: optional(record$1(string$1(), string$1())),
	body: optional(string$1()),
	documentName: string$1(),
	documentIdentifier: string$1({ typeComment: "Needed for legacy support for old clients" })
});
//#endregion
//#region node_modules/guess-json-indent/build/src/main.js
var guessJsonIndent = (jsonString) => {
	const firstIndex = skipWhitespaces(jsonString, 0);
	if (firstIndex === void 0 || !isJsonObjectOrArray(jsonString[firstIndex])) return;
	const secondIndex = skipWhitespaces(jsonString, firstIndex + 1);
	if (secondIndex === void 0) return;
	return getIndent$1(jsonString, firstIndex, secondIndex);
};
var skipWhitespaces = (jsonString, startIndex) => {
	for (let index = startIndex; index < jsonString.length; index += 1) {
		const character = jsonString[index];
		if (!isJsonWhitespace(character)) return index;
	}
};
var isJsonWhitespace = (character) => character === " " || character === "	" || character === "\n" || character === "\r";
var isJsonObjectOrArray = (character) => character === "{" || character === "[";
var getIndent$1 = (jsonString, firstIndex, secondIndex) => {
	let indent;
	for (let index = secondIndex - 1; index > firstIndex; index -= 1) {
		const character = jsonString[index];
		if (character === "\r") return;
		if (character === "\n") return normalizeIndent(indent);
		if (indent === void 0) indent = character;
		else if (indent[0] === character) indent += character;
		else return;
	}
};
var normalizeIndent = (indent) => {
	if (indent === void 0) return 0;
	return indent[0] === " " ? indent.length : indent;
};
//#endregion
//#region node_modules/truncate-json/build/src/number.js
var truncateNumber = (value, maxSize) => {
	const valueString = truncateNumberPrecision(value, "toPrecision", maxSize, maxSize);
	return valueString === void 0 ? truncateNumberPrecision(value, "toExponential", maxSize, maxSize) : valueString;
};
var truncateNumberPrecision = (value, methodName, maxSize, size) => {
	const valueStringA = value[methodName](size).replace(POSITIVE_EXPONENT, "$1").replace(TRIMMED_NUMBER_REGEXP, "$1");
	if (valueStringA.length <= maxSize) return valueStringA;
	return size === 1 ? void 0 : truncateNumberPrecision(value, methodName, maxSize, size - 1);
};
var POSITIVE_EXPONENT = /(e)\+/iu;
var TRIMMED_NUMBER_REGEXP = /\.?0*($|e)/iu;
//#endregion
//#region node_modules/truncate-json/build/src/options.js
var validateOptions = (jsonString, maxSize) => {
	if (typeof jsonString !== "string") throw new TypeError(`Input must be a JSON string: ${jsonString}`);
	validateMaxSize(maxSize);
};
var validateMaxSize = (maxSize) => {
	checkMaxSizeType(maxSize);
	if (maxSize < 0) throw new TypeError(`"maxSize" argument must be positive: ${maxSize}`);
	if (maxSize < 7) throw new TypeError(`"maxSize" argument must be at least 7: ${maxSize}`);
};
var checkMaxSizeType = (maxSize) => {
	if (maxSize === void 0) throw new TypeError("\"maxSize\" argument must be defined");
	if (!Number.isInteger(maxSize)) throw new TypeError(`"maxSize" argument must be an integer: ${maxSize}`);
};
//#endregion
//#region node_modules/string-byte-slice/build/src/bytes.js
var getByteStart = (buffer, bufferLength, byteStart) => {
	return findByteStart(buffer, bufferLength, convertNegativeIndex(bufferLength, byteStart));
};
var findByteStart = (buffer, bufferLength, byteStart) => {
	if (byteStart >= bufferLength) return byteStart;
	const byte = buffer[byteStart];
	return byte >= NEXT_BYTES_START && byte <= NEXT_BYTES_END ? findByteStart(buffer, bufferLength, byteStart + 1) : byteStart;
};
var getByteEnd$1 = (buffer, bufferLength, byteEnd) => {
	if (byteEnd === void 0) return byteEnd;
	return findByteEnd(buffer, convertNegativeIndex(bufferLength, byteEnd));
};
var findByteEnd = (buffer, byteEndA) => {
	if (isInvalid4Sequence(buffer, byteEndA)) return byteEndA - 3;
	if (isInvalid3Sequence(buffer, byteEndA)) return byteEndA - 2;
	if (isInvalid2Sequence(buffer, byteEndA)) return byteEndA - 1;
	return byteEndA;
};
var isInvalid4Sequence = (buffer, byteEnd) => byteEnd >= 3 && buffer[byteEnd - 3] >= FIRST_BYTE_4_START && buffer[byteEnd - 3] <= FIRST_BYTE_4_END;
var isInvalid3Sequence = (buffer, byteEnd) => byteEnd >= 2 && buffer[byteEnd - 2] >= FIRST_BYTE_3_START;
var isInvalid2Sequence = (buffer, byteEnd) => byteEnd >= 1 && buffer[byteEnd - 1] >= FIRST_BYTE_2_START;
var convertNegativeIndex = (bufferLength, byteIndex) => byteIndex < 0 || Object.is(byteIndex, -0) ? Math.max(bufferLength + byteIndex, 0) : byteIndex;
var FIRST_BYTE_4_START = 240;
var FIRST_BYTE_4_END = 244;
var FIRST_BYTE_3_START = 224;
var FIRST_BYTE_2_START = 194;
var NEXT_BYTES_START = 128;
var NEXT_BYTES_END = 191;
//#endregion
//#region node_modules/string-byte-slice/build/src/buffer.js
var bufferSlice = (input, byteStart, byteEnd) => {
	const buffer = globalThis.Buffer.from(input);
	const byteStartA = getByteStart(buffer, buffer.length, byteStart);
	const byteEndA = getByteEnd$1(buffer, buffer.length, byteEnd);
	return byteStartA === 0 && byteEndA >= buffer.length ? buffer.toString() : buffer.toString("utf8", byteStartA, byteEndA);
};
var FIRST_HIGH_SURROGATE$1 = 55296;
var LAST_HIGH_SURROGATE$1 = 56319;
var FIRST_LOW_SURROGATE$1 = 56320;
var LAST_LOW_SURROGATE$1 = 57343;
var SURROGATE_REGEXP = /[\uD800-\uDFFF]/gu;
//#endregion
//#region node_modules/string-byte-slice/build/src/surrogate.js
var replaceInvalidSurrogate = (input) => hasSurrogates(input) ? input.replace(SURROGATE_REGEXP, "�") : input;
var hasSurrogates = (input) => {
	for (let index = 0; index < input.length; index += 1) {
		const codepoint = input.codePointAt(index);
		if (codepoint >= 55296 && codepoint <= 57343) return true;
	}
	return false;
};
//#endregion
//#region node_modules/string-byte-slice/build/src/char_code/indices.js
var findCharIndex = ({ input, targetByteCount, firstStartSurrogate, lastStartSurrogate, firstEndSurrogate, lastEndSurrogate, increment, canBacktrack, shift, charIndexInit }) => {
	let charIndex = charIndexInit;
	let previousCharIndex = charIndex;
	let byteCount = 0;
	for (; byteCount < targetByteCount; charIndex += increment) {
		previousCharIndex = charIndex;
		const codepoint = input.charCodeAt(charIndex);
		if (Number.isNaN(codepoint)) break;
		if (codepoint <= 127) {
			byteCount += 1;
			continue;
		}
		if (codepoint <= 2047) {
			byteCount += 2;
			continue;
		}
		byteCount += 3;
		if (codepoint < firstStartSurrogate || codepoint > lastStartSurrogate) continue;
		const nextCodepoint = input.charCodeAt(charIndex + increment);
		if (Number.isNaN(nextCodepoint) || nextCodepoint < firstEndSurrogate || nextCodepoint > lastEndSurrogate) continue;
		byteCount += 1;
		charIndex += increment;
	}
	return (canBacktrack && byteCount > targetByteCount ? previousCharIndex : charIndex) + shift;
};
//#endregion
//#region node_modules/string-byte-slice/build/src/char_code/direction.js
var byteToChar = (input, byteIndex, isStart) => byteIndex < 0 || Object.is(byteIndex, -0) ? byteToCharBackward(input, byteIndex, isStart) : byteToCharForward(input, byteIndex, isStart);
var byteToCharForward = (input, byteIndex, isEnd) => findCharIndex({
	input,
	targetByteCount: byteIndex,
	firstStartSurrogate: FIRST_HIGH_SURROGATE$1,
	lastStartSurrogate: LAST_HIGH_SURROGATE$1,
	firstEndSurrogate: FIRST_LOW_SURROGATE$1,
	lastEndSurrogate: LAST_LOW_SURROGATE$1,
	increment: 1,
	canBacktrack: isEnd,
	shift: 0,
	charIndexInit: 0
});
var byteToCharBackward = (input, byteIndex, isEnd) => findCharIndex({
	input,
	targetByteCount: -byteIndex,
	firstStartSurrogate: FIRST_LOW_SURROGATE$1,
	lastStartSurrogate: LAST_LOW_SURROGATE$1,
	firstEndSurrogate: FIRST_HIGH_SURROGATE$1,
	lastEndSurrogate: LAST_HIGH_SURROGATE$1,
	increment: -1,
	canBacktrack: !isEnd,
	shift: 1,
	charIndexInit: input.length - 1
});
//#endregion
//#region node_modules/string-byte-slice/build/src/char_code/main.js
var charCodeSlice = (input, byteStart, byteEnd) => {
	const charStart = byteToChar(input, byteStart, false);
	const charEnd = getByteEnd(input, byteEnd);
	return replaceInvalidSurrogate(charStart === 0 && charEnd === void 0 ? input : input.slice(charStart, charEnd));
};
var getByteEnd = (input, byteEnd) => {
	if (byteEnd === void 0) return byteEnd;
	const charEnd = byteToChar(input, byteEnd, true);
	return charEnd === input.length ? void 0 : charEnd;
};
//#endregion
//#region node_modules/string-byte-slice/build/src/encoder.js
var textEncoderSlice = (input, byteStart, byteEnd) => {
	const { textEncoder, textDecoder } = getEncoderDecoder();
	const buffer = getBuffer$1(input);
	const { written } = textEncoder.encodeInto(input, buffer);
	const byteStartA = getByteStart(buffer, written, byteStart);
	const byteEndA = getByteEnd$1(buffer, written, byteEnd);
	const byteEndB = byteEndA === void 0 ? written : Math.min(byteEndA, written);
	const bufferA = buffer.subarray(byteStartA, byteEndB);
	return textDecoder.decode(bufferA);
};
var getEncoderDecoder = () => {
	if (textEncoderCache === void 0) {
		textEncoderCache = new globalThis.TextEncoder();
		textDecoderCache = new globalThis.TextDecoder("utf8", { fatal: false });
	}
	return {
		textEncoder: textEncoderCache,
		textDecoder: textDecoderCache
	};
};
var textEncoderCache;
var textDecoderCache;
var getBuffer$1 = (input) => {
	const size = input.length * 3;
	if (size > 1e5) return new Uint8Array(size);
	if (cachedEncoderBuffer$1 === void 0 || cachedEncoderBuffer$1.length < size) cachedEncoderBuffer$1 = new Uint8Array(size);
	return cachedEncoderBuffer$1;
};
var cachedEncoderBuffer$1;
//#endregion
//#region node_modules/string-byte-slice/build/src/normalize.js
var normalizeByteEnd = (input, byteEnd) => {
	if (byteEnd === void 0) return byteEnd;
	const byteEndA = normalizeByteIndex(input, byteEnd);
	return byteEndA >= input.length * MAX_UTF8_CHAR_LENGTH ? void 0 : byteEndA;
};
var normalizeByteIndex = (input, byteIndex) => byteIndex <= input.length * -MAX_UTF8_CHAR_LENGTH ? 0 : byteIndex;
var MAX_UTF8_CHAR_LENGTH = 4;
//#endregion
//#region node_modules/string-byte-slice/build/src/validate.js
var validateInput = (input, byteStart, byteEnd) => {
	if (typeof input !== "string") throw new TypeError(`First argument must be a string: ${input}`);
	validateByteStart(byteStart);
	validateByteEnd(byteEnd);
};
var validateByteStart = (byteStart) => {
	if (byteStart === void 0) throw new TypeError("Second argument is required.");
	validateIndex("Second", byteStart);
};
var validateByteEnd = (byteEnd) => {
	if (byteEnd !== void 0) validateIndex("Third", byteEnd);
};
var validateIndex = (name, byteIndex) => {
	if (!Number.isInteger(byteIndex)) throw new TypeError(`${name} argument must be an integer: ${byteIndex}`);
};
//#endregion
//#region node_modules/string-byte-slice/build/src/width.js
var estimateCharWidth = (input) => {
	let asciiOnly = true;
	let longCharsCount = 0;
	for (let index = 0; index < SAMPLE_SIZE; index += 1) {
		const codepoint = getCodepoint(input, index);
		if (codepoint <= 127) continue;
		if (asciiOnly) asciiOnly = false;
		if (codepoint > 2047) longCharsCount += 1;
	}
	return {
		asciiOnly,
		longCharsPercentage: longCharsCount / SAMPLE_SIZE
	};
};
var getCodepoint = (input, index) => {
	const sampleSize = SAMPLE_SIZE - 1;
	const percentage = 1 - (sampleSize - index) / sampleSize;
	const charIndex = Math.round(percentage * (input.length - 1));
	return input.charCodeAt(charIndex);
};
var SAMPLE_SIZE = 50;
//#endregion
//#region node_modules/string-byte-slice/build/src/main.js
var stringByteSlice = (input, byteStart, byteEnd) => {
	validateInput(input, byteStart, byteEnd);
	if (input === "") return input;
	const byteStartA = normalizeByteIndex(input, byteStart);
	const byteEndA = normalizeByteEnd(input, byteEnd);
	if (byteEndA === void 0 && Object.is(byteStartA, 0)) return replaceInvalidSurrogate(input);
	return useBestSlice(input, byteStartA, byteEndA);
};
var useBestSlice = (input, byteStart, byteEnd) => {
	if (input.length <= CHAR_CODE_MIN_LENGTH) return charCodeSlice(input, byteStart, byteEnd);
	const { asciiOnly, longCharsPercentage } = estimateCharWidth(input);
	if (asciiOnly) return tryBufferSlice(input, byteStart, byteEnd);
	return longCharsPercentage >= CHAR_CODE_MIN_PERC ? charCodeSlice(input, byteStart, byteEnd) : tryTextEncoderSlice(input, byteStart, byteEnd);
};
var CHAR_CODE_MIN_LENGTH = 200;
var CHAR_CODE_MIN_PERC = .4;
var tryBufferSlice = (input, byteStart, byteEnd) => "Buffer" in globalThis && "from" in globalThis.Buffer ? bufferSlice(input, byteStart, byteEnd) : 
/* c8 ignore next */
tryTextEncoderSlice(input, byteStart, byteEnd);
var tryTextEncoderSlice = (input, byteStart, byteEnd) => "TextEncoder" in globalThis ? textEncoderSlice(input, byteStart, byteEnd) : 
/* c8 ignore next */
charCodeSlice(input, byteStart, byteEnd);
//#endregion
//#region node_modules/truncate-json/build/src/string.js
var truncateString = (value, maxSize) => {
	return addQuotes(`${fixUnicodeSequenceEnd(stringByteSlice(removeQuotes(JSON.stringify(value)), 0, maxSize - ELLIPSIS.length - QUOTE.length * 2))}${ELLIPSIS}`);
};
var fixUnicodeSequenceEnd = (truncatedString) => truncatedString.replace(INVALID_JSON_END, "");
var INVALID_JSON_END = /(\\|\\u[0-9a-fA-F]{0,3})$/u;
var removeQuotes = (jsonString) => jsonString.slice(QUOTE.length, -QUOTE.length);
var addQuotes = (truncatedString) => `${QUOTE}${truncatedString}${QUOTE}`;
var QUOTE = "\"";
var ELLIPSIS = "...";
//#endregion
//#region node_modules/string-byte-length/build/src/buffer.js
var getNodeByteLength = (string) => globalThis.Buffer.byteLength(string);
//#endregion
//#region node_modules/string-byte-length/build/src/char_code.js
var getCharCodeByteLength = (string) => {
	const charLength = string.length;
	let byteLength = charLength;
	for (let charIndex = 0; charIndex < charLength; charIndex += 1) {
		const codepoint = string.charCodeAt(charIndex);
		if (codepoint <= LAST_ASCII_CODEPOINT) continue;
		if (codepoint <= LAST_TWO_BYTES_CODEPOINT) {
			byteLength += 1;
			continue;
		}
		byteLength += 2;
		if (codepoint < FIRST_HIGH_SURROGATE || codepoint > LAST_HIGH_SURROGATE) continue;
		const nextCodepoint = string.charCodeAt(charIndex + 1);
		if (nextCodepoint < FIRST_LOW_SURROGATE || nextCodepoint > LAST_LOW_SURROGATE) continue;
		charIndex += 1;
	}
	return byteLength;
};
var LAST_ASCII_CODEPOINT = 127;
var LAST_TWO_BYTES_CODEPOINT = 2047;
var FIRST_HIGH_SURROGATE = 55296;
var LAST_HIGH_SURROGATE = 56319;
var FIRST_LOW_SURROGATE = 56320;
var LAST_LOW_SURROGATE = 57343;
//#endregion
//#region node_modules/string-byte-length/build/src/encoder.js
var createTextEncoderFunc = () => getTextEncoderByteLength.bind(void 0, new TextEncoder());
var getTextEncoderByteLength = (textEncoder, string) => {
	const encoderBuffer = getBuffer(string);
	return textEncoder.encodeInto(string, encoderBuffer).written;
};
var getBuffer = (string) => {
	const size = string.length * 3;
	if (size > 1e5) return new Uint8Array(size);
	if (cachedEncoderBuffer === void 0 || cachedEncoderBuffer.length < size) cachedEncoderBuffer = new Uint8Array(size);
	return cachedEncoderBuffer;
};
var cachedEncoderBuffer;
//#endregion
//#region node_modules/string-byte-length/build/src/main.js
var getMainFunction = () => {
	if ("Buffer" in globalThis && "byteLength" in globalThis.Buffer) return getNodeByteLength;
	if ("TextEncoder" in globalThis) return getByteLength.bind(void 0, createTextEncoderFunc());
	return getCharCodeByteLength;
};
var getByteLength = (getTextEncoderByteLength, string) => string.length < 100 ? getCharCodeByteLength(string) : getTextEncoderByteLength(string);
var main_default = getMainFunction();
//#endregion
//#region node_modules/truncate-json/build/src/length.js
var getJsonLength = (value) => {
	if (value === null) return NULL_LENGTH;
	if (value === true) return TRUE_LENGTH;
	if (value === false) return FALSE_LENGTH;
	const type = typeof value;
	if (type === "object") return OBJ_ARR_LENGTH;
	if (type === "number") return JSON.stringify(value).length;
	return getJsonStringLength(value);
};
var NULL_LENGTH = 4;
var TRUE_LENGTH = 4;
var FALSE_LENGTH = 5;
var OBJ_ARR_LENGTH = 2;
var getJsonStringLength = (string) => main_default(JSON.stringify(string));
//#endregion
//#region node_modules/truncate-json/build/src/size.js
var addSize = ({ size, increment, maxSize, truncatedProps, path, value }) => {
	const newSize = size + increment;
	const stop = newSize > maxSize;
	return stop ? {
		size,
		stop,
		truncatedProps: [...truncatedProps, {
			path,
			value
		}]
	} : {
		size: newSize,
		stop,
		truncatedProps
	};
};
var getValueSize = (value) => getJsonLength(value);
var getArrayItemSize = (empty, indent, depth) => {
	return getIndentSize({
		empty,
		indent,
		depth,
		keySpaceSize: 0
	}) + getCommaSize(empty);
};
var getObjectPropSize = ({ key, empty, indent, depth }) => {
	const indentSize = getIndentSize({
		empty,
		indent,
		depth,
		keySpaceSize: 1
	});
	const keySize = getJsonStringLength(key);
	const commaSize = getCommaSize(empty);
	return indentSize + keySize + COLON_SIZE + commaSize;
};
var COLON_SIZE = 1;
var getIndentSize = ({ empty, indent, depth, keySpaceSize }) => {
	if (indent === void 0) return 0;
	const propSpaces = NEWLINE_SIZE + indent * (depth + 1);
	const parentSpaces = empty ? NEWLINE_SIZE + indent * depth : 0;
	return keySpaceSize + propSpaces + parentSpaces;
};
var NEWLINE_SIZE = 1;
var getCommaSize = (empty) => empty ? 0 : COMMA_SIZE;
var COMMA_SIZE = 1;
//#endregion
//#region node_modules/truncate-json/build/src/prop.js
var truncateProp = ({ parent, truncatedProps, path, increment, maxSize, key, empty, size, truncateValue, indent, depth }) => {
	const value = parent[key];
	const pathA = [...path, key];
	const { size: newSize, stop, truncatedProps: truncatedPropsA } = addSize({
		size,
		increment,
		maxSize,
		truncatedProps,
		path: pathA,
		value
	});
	return stop ? {
		empty,
		size: newSize,
		truncatedProps: truncatedPropsA
	} : truncatePropValue({
		value,
		truncatedProps,
		path: pathA,
		maxSize,
		empty,
		size,
		newSize,
		truncateValue,
		indent,
		depth
	});
};
var truncatePropValue = ({ value, truncatedProps, path, maxSize, empty, size, newSize, truncateValue, indent, depth }) => {
	const { value: valueA, size: newSizeA, truncatedProps: truncatedPropsB } = truncateValue({
		value,
		truncatedProps,
		path,
		size: newSize,
		maxSize,
		indent,
		depth: depth + 1
	});
	return valueA === void 0 ? {
		empty,
		size,
		truncatedProps: truncatedPropsB
	} : {
		empty: false,
		size: newSizeA,
		value: valueA,
		truncatedProps: truncatedPropsB
	};
};
//#endregion
//#region node_modules/truncate-json/build/src/array.js
var truncateArray = ({ array, truncatedProps, path, size, maxSize, truncateValue, indent, depth }) => {
	const newArray = [];
	let state = {
		empty: true,
		size,
		truncatedProps
	};
	for (let index = 0; index < array.length; index += 1) {
		const increment = getArrayItemSize(state.empty, indent, depth);
		state = truncateProp({
			parent: array,
			truncatedProps: state.truncatedProps,
			path,
			increment,
			maxSize,
			key: index,
			empty: state.empty,
			size: state.size,
			truncateValue,
			indent,
			depth
		});
		if (state.value !== void 0) newArray.push(state.value);
	}
	return {
		value: newArray,
		size: state.size,
		truncatedProps: state.truncatedProps
	};
};
//#endregion
//#region node_modules/truncate-json/build/src/object.js
var truncateObject = ({ object, truncatedProps, path, size, maxSize, truncateValue, indent, depth }) => {
	const newObject = {};
	let state = {
		empty: true,
		size,
		truncatedProps
	};
	for (const key in object) {
		const increment = getObjectPropSize({
			key,
			empty: state.empty,
			indent,
			depth
		});
		state = truncateProp({
			parent: object,
			truncatedProps: state.truncatedProps,
			path,
			increment,
			maxSize,
			key,
			empty: state.empty,
			size: state.size,
			truncateValue,
			indent,
			depth
		});
		if (state.value !== void 0) newObject[key] = state.value;
	}
	return {
		value: newObject,
		size: state.size,
		truncatedProps: state.truncatedProps
	};
};
//#endregion
//#region node_modules/truncate-json/build/src/value.js
var truncateValue = ({ value, truncatedProps, path, size, maxSize, indent, depth }) => {
	const { size: sizeA, stop, truncatedProps: truncatedPropsA } = addSize({
		size,
		increment: getValueSize(value),
		maxSize,
		truncatedProps,
		path,
		value
	});
	return stop ? {
		value: void 0,
		size: sizeA,
		truncatedProps: truncatedPropsA
	} : recurseValue({
		value,
		truncatedProps: truncatedPropsA,
		path,
		size: sizeA,
		maxSize,
		indent,
		depth
	});
};
var recurseValue = ({ value, truncatedProps, path, size, maxSize, indent, depth }) => {
	if (typeof value !== "object" || value === null) return {
		value,
		size,
		truncatedProps
	};
	return Array.isArray(value) ? truncateArray({
		array: value,
		truncatedProps,
		path,
		size,
		maxSize,
		truncateValue,
		indent,
		depth
	}) : truncateObject({
		object: value,
		truncatedProps,
		path,
		size,
		maxSize,
		truncateValue,
		indent,
		depth
	});
};
//#endregion
//#region node_modules/truncate-json/build/src/main.js
var truncateJson = (jsonString, maxSize) => {
	validateOptions(jsonString, maxSize);
	const indent = getIndent(jsonString);
	const value = parseJson(jsonString);
	const { value: newValue, truncatedProps } = truncateValue({
		value,
		truncatedProps: [],
		path: [],
		size: 0,
		maxSize,
		indent,
		depth: 0
	});
	return {
		jsonString: serializeJson({
			newValue,
			value,
			maxSize,
			indent
		}),
		truncatedProps
	};
};
var getIndent = (jsonString) => {
	const indent = guessJsonIndent(jsonString);
	return typeof indent === "string" ? indent.length : indent;
};
var parseJson = (jsonString) => {
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		throw new TypeError(`Invalid JSON string: "${jsonString}"\n${error.message}`);
	}
};
var serializeJson = ({ newValue, value, maxSize, indent }) => {
	if (newValue !== void 0) return JSON.stringify(newValue, void 0, indent);
	return typeof value === "number" ? truncateNumber(value, maxSize) : truncateString(value, maxSize);
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/client-tools/execute-request.js
var MAX_RESPONSE_SIZE = 5e4;
var getBody = n.safeFn(async (response) => {
	if (response.headers.get("content-type") === "application/json") return {
		success: true,
		data: await response.json()
	};
	return {
		success: true,
		data: await response.text()
	};
}, (originalError) => createError("FAILED_TO_PARSE_RESPONSE_BODY", { originalError }));
var truncateResponse = (response) => JSON.parse(truncateJson(JSON.stringify(response), MAX_RESPONSE_SIZE).jsonString);
var safeFetch = n.safeFn(async (url, init) => {
	const response = await fetch(url, init);
	const responseBodyResult = await getBody(response);
	if (!response.ok) return {
		success: false,
		error: createError("REQUEST_NOT_OK", {
			status: response.status,
			url: response.url,
			responseBody: truncateResponse(responseBodyResult.success ? responseBodyResult.data : void 0),
			headers: Object.fromEntries(response.headers.entries())
		})
	};
	if (!responseBodyResult.success) return responseBodyResult;
	return {
		success: true,
		data: {
			status: response.status,
			responseBody: truncateResponse(responseBodyResult.data),
			headers: Object.fromEntries(response.headers.entries())
		}
	};
}, (originalError) => createError("FAILED_TO_FETCH", { originalError }));
function createUrl({ path, activeServer, proxyUrl, queryParams }) {
	return redirectToProxy(proxyUrl, getResolvedUrl({
		path,
		server: activeServer,
		urlParams: queryParams
	}));
}
/**
* Executes an HTTP request with the specified options, including method, path, headers, and security schemes, and returns the processed response.
*/
var executeRequestTool = n.safeFn(async ({ documentSettings, toolCallId, chat, proxyUrl, input: { method, path, body, headers, documentName } }) => {
	const settings = documentSettings[documentName];
	if (!settings) return {
		success: false,
		error: createError("DOCUMENT_SETTINGS_COULD_NOT_BE_DETERMINED", { documentName })
	};
	const requestSecurity = buildRequestSecurity(settings.securitySchemes).reduce((acc, securityOption) => {
		/** Format the security value based on its authentication scheme. */
		const securityValue = (() => {
			if (securityOption.format === "basic") return `Basic ${encode(securityOption.value)}`;
			if (securityOption.format === "bearer") return `Bearer ${securityOption.value}`;
			return securityOption.value;
		})();
		if (securityOption.in === "header") acc.headers[securityOption.name] = securityValue;
		else if (securityOption.in === "query") acc.queryParams.set(securityOption.name, securityValue);
		else if (securityOption.in === "cookie") acc.cookies[securityOption.name] = securityValue;
		return acc;
	}, {
		headers: {},
		queryParams: new URLSearchParams(),
		cookies: {}
	});
	const cookieHeader = Object.entries(requestSecurity.cookies).map(([name, value]) => `${name}=${value}`).join("; ");
	const fetchOptions = {
		method,
		body,
		headers: {
			...headers,
			...requestSecurity.headers,
			Cookie: cookieHeader
		}
	};
	const result = await safeFetch(createUrl({
		path,
		activeServer: settings.activeServer,
		proxyUrl,
		queryParams: requestSecurity.queryParams
	}), fetchOptions);
	chat.addToolOutput({
		tool: EXECUTE_CLIENT_SIDE_REQUEST_TOOL_NAME,
		toolCallId,
		output: result,
		state: "output-available"
	});
	return result;
}, (originalError) => createError("FAILED_TO_EXECUTE_REQUEST", originalError));
//#endregion
//#region node_modules/@scalar/agent-chat/dist/consts/urls.js
var URLS = {
	DEFAULT_PROXY_URL: "https://proxy.scalar.com",
	PRIVACY_POLICY: "https://scalar.com/legal/privacy-policy",
	TERMS_AND_CONDITIONS: "https://scalar.com/legal/terms-and-conditions",
	AGENT_SCALAR_DOCUMENTATION: "https://scalar.com/products/agent/getting-started",
	PROXY_SOURCE_CODE: "https://github.com/scalar/scalar/tree/main/projects/proxy-scalar-com"
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/helpers.js
function getOperations(doc) {
	return Object.values(doc.paths ?? {}).flatMap((path) => Object.values(path ?? {}));
}
/** Flattens all security requirements from a document */
function getSecurityFromDocument(documentName, document, authStore) {
	const mergedSecurity = mergeSecurity(document?.components?.securitySchemes, {}, authStore, documentName);
	const securityRequirements = getSecurityRequirements(document.security);
	const selectedSecurity = getSelectedSecurity(authStore.getAuthSelectedSchemas({
		type: "document",
		documentName
	}), void 0, securityRequirements);
	return getSecuritySchemes(mergedSecurity, selectedSecurity.selectedSchemes[selectedSecurity.selectedIndex] ?? {});
}
/** Generate document settings from workspace store. AsyncAPI docs are skipped — this feature is OpenAPI-native. */
function createDocumentSettings(workspaceStore) {
	const openApiEntries = [];
	for (const [key, document] of Object.entries(workspaceStore.workspace.documents)) if (isOpenApiDocument(document)) openApiEntries.push([key, document]);
	return Object.fromEntries(openApiEntries.map(([key, document]) => {
		return [key, {
			activeServer: getSelectedServer(document, null, null, getServers(document.servers, { documentUrl: document["x-scalar-original-source-url"] })),
			securitySchemes: getSecurityFromDocument(key, document, workspaceStore.auth)
		}];
	}));
}
var storage = safeLocalStorage();
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
/**
* Restores authentication secrets from local storage to the workspace store.
*
* This function iterates through stored authentication schemes and restores
* any secret values (keys starting with x-scalar-secret-) to the active
* document's security schemes. It uses the current security schemes as the
* source of truth, only restoring secrets for structures that exist in the
* current document.
*/
var restoreAuthSecretsFromStorage = ({ documentName, workspaceStore }) => {
	const auth = authStorage().getAuth(documentName);
	workspaceStore.auth.load({ [documentName]: auth });
};
function safeParseJson(value) {
	try {
		return JSON.parse(value);
	} catch {
		return;
	}
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-term-and-conditions.js
var TERMS_AND_CONDITIONS_LS_KEY = "scalar/agent-terms-accepted";
function useTermsAndConditions() {
	const accepted = ref(false);
	onMounted(() => {
		accepted.value = localStorage.getItem(TERMS_AND_CONDITIONS_LS_KEY) === "true";
	});
	function accept() {
		accepted.value = true;
		localStorage.setItem(TERMS_AND_CONDITIONS_LS_KEY, "true");
	}
	return {
		accepted,
		accept
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-upload-tmp-document.js
var SHOW_UPLOAD_SUCCESS_DELAY = 5e3;
var TMP_DOC_LS_KEY = "scalar-tmp-doc";
function saveTmpDocumentInLocalStorage({ namespace, slug }) {
	localStorage.setItem(TMP_DOC_LS_KEY, JSON.stringify({
		namespace,
		slug
	}));
}
var tmpDocSchema = object$3({
	namespace: string$1(),
	slug: string$1()
});
function getTmpDocFromLocalStorage() {
	const tmpDoc = localStorage.getItem(TMP_DOC_LS_KEY);
	if (!tmpDoc) return;
	return coerce(tmpDocSchema, JSON.parse(tmpDoc));
}
function removeTmpDocFromLocalStorage() {
	if (!localStorage.getItem(TMP_DOC_LS_KEY)) return;
	localStorage.removeItem(TMP_DOC_LS_KEY);
}
/**
* Handle uploading a temporary OpenAPI document.
*/
function useUploadTmpDocument() {
	const state = useState();
	const uploadState = ref();
	function createUrl(path) {
		const fullUrl = `${state.baseUrl}${path}`;
		return redirectToProxy(state.platformProxyUrl, fullUrl);
	}
	async function uploadTempDocument(document, isAgent = false) {
		try {
			uploadState.value = { type: "uploading" };
			const response = await fetch(createUrl(`/core/share/upload/apis${isAgent ? "?source=agent" : ""}`), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ document })
			});
			if (!response.ok) {
				uploadState.value = {
					type: "error",
					error: "Failed to upload your OpenAPI document."
				};
				return;
			}
			const json = await response.json();
			const uploadResponseSchema = object$3({
				url: string$1(),
				namespace: string$1(),
				slug: string$1()
			});
			if (!validate(uploadResponseSchema, json)) {
				uploadState.value = {
					type: "error",
					error: "Failed to process document."
				};
				return;
			}
			const uploadData = coerce(uploadResponseSchema, json);
			uploadState.value = { type: "processing" };
			const embeddingStatusResponse = await fetch(createUrl(`/vector/registry/embeddings/${uploadData.namespace}/${uploadData.slug}`), { method: "GET" });
			saveTmpDocumentInLocalStorage({
				namespace: uploadData.namespace,
				slug: uploadData.slug
			});
			await state.addDocument({
				namespace: uploadData.namespace,
				slug: uploadData.slug,
				removable: false,
				tmp: true
			});
			if (!embeddingStatusResponse.ok) {
				uploadState.value = {
					type: "error",
					error: "Failed to embed document."
				};
				return;
			}
			uploadState.value = { type: "done" };
			state.uploadedTmpDocumentUrl.value = uploadData.url;
			setTimeout(() => {
				uploadState.value = void 0;
			}, SHOW_UPLOAD_SUCCESS_DELAY);
			return uploadData;
		} catch {
			uploadState.value = {
				type: "error",
				error: "Failed to upload your OpenAPI document."
			};
			return;
		}
	}
	return {
		uploadTempDocument,
		uploadState
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/plugins/persistance.js
/**
* Plugin to persist workspace state changes with debounced writes.
*/
var persistencePlugin = ({ debounceDelay = 500, maxWait = 1e4, persistAuth = false }) => {
	const { execute } = debounce({
		delay: debounceDelay,
		maxWait
	});
	const authPersistence = authStorage();
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
		if (getPersistAuth() && event.type === "auth") execute("auth", () => authPersistence.setAuth(event.documentName, event.value));
	} } };
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/registry/add-documents-to-store.js
var loadDocument = n.safeFn(async ({ namespace, slug, workspaceStore, registryDocuments, getAccessToken, registryUrl, config, api, removable }) => {
	const getDocumentResult = await api.getDocument({
		namespace,
		slug
	});
	if (!getDocumentResult.success) return getDocumentResult;
	registryDocuments.value.push({
		...getDocumentResult.data,
		removable
	});
	const url = new URL(`/@${namespace}/apis/${slug}/latest`, registryUrl);
	const headers = [];
	const token = getAccessToken?.();
	if (token) headers.push({
		domains: [new URL(registryUrl).host],
		headers: { "x-scalar-auth": token }
	});
	const document = await bundle(url.toString(), {
		plugins: [openApiDocument(), fetchUrls({ headers })],
		treeShake: false
	});
	const documentName = createDocumentName(namespace, slug);
	await workspaceStore.addDocument({
		name: documentName,
		document
	}, config);
	workspaceStore.update("x-scalar-active-document", documentName);
	restoreAuthSecretsFromStorage({
		documentName,
		workspaceStore
	});
	return {
		success: true,
		data: getDocumentResult.data
	};
}, (originalError) => createError("UNABLE_TO_LOAD_DOCUMENT", originalError));
//#endregion
//#region node_modules/@ai-sdk/vue/node_modules/@ai-sdk/provider/dist/index.mjs
var marker$5 = "vercel.ai.error";
var symbol$7 = Symbol.for(marker$5);
var _a$7;
var _b$5;
var AISDKError$1 = class _AISDKError extends (_b$5 = Error, _a$7 = symbol$7, _b$5) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name14, message, cause }) {
		super(message);
		this[_a$7] = true;
		this.name = name14;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$5);
	}
	static hasMarker(error, marker15) {
		const markerSymbol = Symbol.for(marker15);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$7 = "AI_APICallError";
var marker2$5 = `vercel.ai.error.${name$7}`;
var symbol2$5 = Symbol.for(marker2$5);
var _a2$5;
var _b2$3;
var APICallError$1 = class extends (_b2$3 = AISDKError$1, _a2$5 = symbol2$5, _b2$3) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$7,
			message,
			cause
		});
		this[_a2$5] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker2$5);
	}
};
var name2$5 = "AI_EmptyResponseBodyError";
var marker3$5 = `vercel.ai.error.${name2$5}`;
var symbol3$5 = Symbol.for(marker3$5);
var _a3$5;
var _b3$3;
var EmptyResponseBodyError$1 = class extends (_b3$3 = AISDKError$1, _a3$5 = symbol3$5, _b3$3) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$5,
			message
		});
		this[_a3$5] = true;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker3$5);
	}
};
function getErrorMessage$1(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
var name3$5 = "AI_InvalidArgumentError";
var marker4$5 = `vercel.ai.error.${name3$5}`;
var symbol4$5 = Symbol.for(marker4$5);
var _a4$5;
var _b4$3;
var InvalidArgumentError$1 = class extends (_b4$3 = AISDKError$1, _a4$5 = symbol4$5, _b4$3) {
	constructor({ message, cause, argument }) {
		super({
			name: name3$5,
			message,
			cause
		});
		this[_a4$5] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker4$5);
	}
};
var name6$5 = "AI_JSONParseError";
var marker7$5 = `vercel.ai.error.${name6$5}`;
var symbol7$5 = Symbol.for(marker7$5);
var _a7$5;
var _b7$3;
var JSONParseError$1 = class extends (_b7$3 = AISDKError$1, _a7$5 = symbol7$5, _b7$3) {
	constructor({ text, cause }) {
		super({
			name: name6$5,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage$1(cause)}`,
			cause
		});
		this[_a7$5] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker7$5);
	}
};
var name12$3 = "AI_TypeValidationError";
var marker13$3 = `vercel.ai.error.${name12$3}`;
var symbol13$3 = Symbol.for(marker13$3);
var _a13$3;
var _b13$1;
var TypeValidationError$1 = class _TypeValidationError extends (_b13$1 = AISDKError$1, _a13$3 = symbol13$3, _b13$1) {
	constructor({ value, cause }) {
		super({
			name: name12$3,
			message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage$1(cause)}`,
			cause
		});
		this[_a13$3] = true;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker13$3);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause }) {
		return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
			value,
			cause
		});
	}
};
//#endregion
//#region node_modules/zod/v3/helpers/util.js
var util;
(function(util) {
	util.assertEqual = (_) => {};
	function assertIs(_arg) {}
	util.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	util.assertNever = assertNever;
	util.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) obj[item] = item;
		return obj;
	};
	util.getValidEnumValues = (obj) => {
		const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
		const filtered = {};
		for (const k of validKeys) filtered[k] = obj[k];
		return util.objectValues(filtered);
	};
	util.objectValues = (obj) => {
		return util.objectKeys(obj).map(function(e) {
			return obj[e];
		});
	};
	util.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
		const keys = [];
		for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
		return keys;
	};
	util.find = (arr, checker) => {
		for (const item of arr) if (checker(item)) return item;
	};
	util.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
	function joinValues(array, separator = " | ") {
		return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
	}
	util.joinValues = joinValues;
	util.jsonStringifyReplacer = (_, value) => {
		if (typeof value === "bigint") return value.toString();
		return value;
	};
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
	objectUtil.mergeShapes = (first, second) => {
		return {
			...first,
			...second
		};
	};
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]);
var getParsedType = (data) => {
	switch (typeof data) {
		case "undefined": return ZodParsedType.undefined;
		case "string": return ZodParsedType.string;
		case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean": return ZodParsedType.boolean;
		case "function": return ZodParsedType.function;
		case "bigint": return ZodParsedType.bigint;
		case "symbol": return ZodParsedType.symbol;
		case "object":
			if (Array.isArray(data)) return ZodParsedType.array;
			if (data === null) return ZodParsedType.null;
			if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
			if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
			if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
			if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
			return ZodParsedType.object;
		default: return ZodParsedType.unknown;
	}
};
//#endregion
//#region node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]);
var ZodError = class ZodError extends Error {
	get errors() {
		return this.issues;
	}
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
		else this.__proto__ = actualProto;
		this.name = "ZodError";
		this.issues = issues;
	}
	format(_mapper) {
		const mapper = _mapper || function(issue) {
			return issue.message;
		};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue of error.issues) if (issue.code === "invalid_union") issue.unionErrors.map(processError);
			else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
			else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
			else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < issue.path.length) {
					const el = issue.path[i];
					const terminal = i === issue.path.length - 1;
					if (el === "_errors") {
						if (terminal) curr._errors.push(mapper(issue));
						i++;
						continue;
					}
					if (!Object.prototype.hasOwnProperty.call(curr, el)) {
						if (el === "__proto__") Object.defineProperty(curr, el, {
							value: { _errors: [] },
							writable: true,
							enumerable: true,
							configurable: true
						});
						else curr[el] = { _errors: [] };
					}
					curr = curr[el];
					if (terminal) curr._errors.push(mapper(issue));
					i++;
				}
			}
		};
		processError(this);
		return fieldErrors;
	}
	static assert(value) {
		if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = Object.create(null);
		const formErrors = [];
		for (const sub of this.issues) if (sub.path.length > 0) {
			const firstEl = sub.path[0];
			fieldErrors[firstEl] = fieldErrors[firstEl] || [];
			fieldErrors[firstEl].push(mapper(sub));
		} else formErrors.push(mapper(sub));
		return {
			formErrors,
			fieldErrors
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
ZodError.create = (issues) => {
	return new ZodError(issues);
};
//#endregion
//#region node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
	let message;
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) message = "Required";
			else message = `Expected ${issue.expected}, received ${issue.received}`;
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === "object") {
				if ("includes" in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`;
					if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
				} else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
				else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
				else util.assertNever(issue.validation);
			} else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
			else message = "Invalid";
			break;
		case ZodIssueCode.too_small:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.too_big:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = "Number must be finite";
			break;
		default:
			message = _ctx.defaultError;
			util.assertNever(issue);
	}
	return { message };
};
//#endregion
//#region node_modules/zod/v3/errors.js
var overrideErrorMap = errorMap;
function getErrorMap() {
	return overrideErrorMap;
}
//#endregion
//#region node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
	const { data, path, errorMaps, issueData } = params;
	const fullPath = [...path, ...issueData.path || []];
	const fullIssue = {
		...issueData,
		path: fullPath
	};
	if (issueData.message !== void 0) return {
		...issueData,
		path: fullPath,
		message: issueData.message
	};
	let errorMessage = "";
	const maps = errorMaps.filter((m) => !!m).slice().reverse();
	for (const map of maps) errorMessage = map(fullIssue, {
		data,
		defaultError: errorMessage
	}).message;
	return {
		...issueData,
		path: fullPath,
		message: errorMessage
	};
};
function addIssueToContext(ctx, issueData) {
	const overrideMap = getErrorMap();
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			overrideMap,
			overrideMap === errorMap ? void 0 : errorMap
		].filter((x) => !!x)
	});
	ctx.common.issues.push(issue);
}
var ParseStatus = class ParseStatus {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		if (this.value === "valid") this.value = "dirty";
	}
	abort() {
		if (this.value !== "aborted") this.value = "aborted";
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === "aborted") return INVALID;
			if (s.status === "dirty") status.dirty();
			arrayValue.push(s.value);
		}
		return {
			status: status.value,
			value: arrayValue
		};
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = [];
		for (const pair of pairs) {
			const key = await pair.key;
			const value = await pair.value;
			syncPairs.push({
				key,
				value
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {};
		for (const pair of pairs) {
			const { key, value } = pair;
			if (key.status === "aborted") return INVALID;
			if (value.status === "aborted") return INVALID;
			if (key.status === "dirty") status.dirty();
			if (value.status === "dirty") status.dirty();
			if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
		}
		return {
			status: status.value,
			value: finalObject
		};
	}
};
var INVALID = Object.freeze({ status: "aborted" });
var DIRTY = (value) => ({
	status: "dirty",
	value
});
var OK = (value) => ({
	status: "valid",
	value
});
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
//#endregion
//#region node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil) {
	errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
	errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
//#endregion
//#region node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
	constructor(parent, value, path, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) {
			if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
			else this._cachedPath.push(...this._path, this._key);
		}
		return this._cachedPath;
	}
};
var handleResult = (ctx, result) => {
	if (isValid(result)) return {
		success: true,
		data: result.value
	};
	else {
		if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				const error = new ZodError(ctx.common.issues);
				this._error = error;
				return this._error;
			}
		};
	}
};
function processCreateParams(params) {
	if (!params) return {};
	const { errorMap, invalid_type_error, required_error, description } = params;
	if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
	if (errorMap) return {
		errorMap,
		description
	};
	const customMap = (iss, ctx) => {
		const { message } = params;
		if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
		if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
		if (iss.code !== "invalid_type") return { message: ctx.defaultError };
		return { message: message ?? invalid_type_error ?? ctx.defaultError };
	};
	return {
		errorMap: customMap,
		description
	};
}
var ZodType = class {
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return ctx || {
			common: input.parent.common,
			data: input.data,
			parsedType: getParsedType(input.data),
			schemaErrorMap: this._def.errorMap,
			path: input.path,
			parent: input.parent
		};
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent
			}
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		const ctx = {
			common: {
				issues: [],
				async: params?.async ?? false,
				contextualErrorMap: params?.errorMap
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		return handleResult(ctx, this._parseSync({
			data,
			path: ctx.path,
			parent: ctx
		}));
	}
	"~validate"(data) {
		const ctx = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		if (!this["~standard"].async) try {
			const result = this._parseSync({
				data,
				path: [],
				parent: ctx
			});
			return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
		} catch (err) {
			if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
			ctx.common = {
				issues: [],
				async: true
			};
		}
		return this._parseAsync({
			data,
			path: [],
			parent: ctx
		}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params?.errorMap,
				async: true
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		const maybeAsyncResult = this._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
		return handleResult(ctx, await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult)));
	}
	refine(check, message) {
		const getIssueProperties = (val) => {
			if (typeof message === "string" || typeof message === "undefined") return { message };
			else if (typeof message === "function") return message(val);
			else return message;
		};
		return this._refinement((val, ctx) => {
			const result = check(val);
			const setError = () => ctx.addIssue({
				code: ZodIssueCode.custom,
				...getIssueProperties(val)
			});
			if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
				if (!data) {
					setError();
					return false;
				} else return true;
			});
			if (!result) {
				setError();
				return false;
			} else return true;
		});
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
				return false;
			} else return true;
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "refinement",
				refinement
			}
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	constructor(def) {
		/** Alias of safeParseAsync */
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
		this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (data) => this["~validate"](data)
		};
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(option) {
		return ZodUnion.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def);
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "transform",
				transform
			}
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === "function" ? def : () => def;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def)
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === "function" ? def : () => def;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
var emojiRegex$2;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
	let secondsRegexSource = `[0-5]\\d`;
	if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
	else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
	const secondsQuantifier = args.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
	return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
	let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
	const opts = [];
	opts.push(args.local ? `Z?` : `Z`);
	if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
	regex = `${regex}(${opts.join("|")})`;
	return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
	if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
	return false;
}
function isValidJWT(jwt, alg) {
	if (!jwtRegex.test(jwt)) return false;
	try {
		const [header] = jwt.split(".");
		if (!header) return false;
		const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
		const decoded = JSON.parse(atob(base64));
		if (typeof decoded !== "object" || decoded === null) return false;
		if ("typ" in decoded && decoded?.typ !== "JWT") return false;
		if (!decoded.alg) return false;
		if (alg && decoded.alg !== alg) return false;
		return true;
	} catch {
		return false;
	}
}
function isValidCidr(ip, version) {
	if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
	return false;
}
var ZodString = class ZodString extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = String(input.data);
		if (this._getType(input) !== ZodParsedType.string) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.length < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.length > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "length") {
			const tooBig = input.data.length > check.value;
			const tooSmall = input.data.length < check.value;
			if (tooBig || tooSmall) {
				ctx = this._getOrReturnCtx(input, ctx);
				if (tooBig) addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				else if (tooSmall) addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "email") {
			if (!emailRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "email",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "emoji") {
			if (!emojiRegex$2) emojiRegex$2 = new RegExp(_emojiRegex, "u");
			if (!emojiRegex$2.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "emoji",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "uuid") {
			if (!uuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "uuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "nanoid") {
			if (!nanoidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "nanoid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid") {
			if (!cuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid2") {
			if (!cuid2Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid2",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ulid") {
			if (!ulidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ulid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "url") try {
			new URL(input.data);
		} catch {
			ctx = this._getOrReturnCtx(input, ctx);
			addIssueToContext(ctx, {
				validation: "url",
				code: ZodIssueCode.invalid_string,
				message: check.message
			});
			status.dirty();
		}
		else if (check.kind === "regex") {
			check.regex.lastIndex = 0;
			if (!check.regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "regex",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "trim") input.data = input.data.trim();
		else if (check.kind === "includes") {
			if (!input.data.includes(check.value, check.position)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: {
						includes: check.value,
						position: check.position
					},
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
		else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
		else if (check.kind === "startsWith") {
			if (!input.data.startsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { startsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "endsWith") {
			if (!input.data.endsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { endsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "datetime") {
			if (!datetimeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "datetime",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "date") {
			if (!dateRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "date",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "time") {
			if (!timeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "time",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "duration") {
			if (!durationRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "duration",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ip") {
			if (!isValidIP(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ip",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "jwt") {
			if (!isValidJWT(input.data, check.alg)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "jwt",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cidr") {
			if (!isValidCidr(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cidr",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64") {
			if (!base64Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64url") {
			if (!base64urlRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64url",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message)
		});
	}
	_addCheck(check) {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	email(message) {
		return this._addCheck({
			kind: "email",
			...errorUtil.errToObj(message)
		});
	}
	url(message) {
		return this._addCheck({
			kind: "url",
			...errorUtil.errToObj(message)
		});
	}
	emoji(message) {
		return this._addCheck({
			kind: "emoji",
			...errorUtil.errToObj(message)
		});
	}
	uuid(message) {
		return this._addCheck({
			kind: "uuid",
			...errorUtil.errToObj(message)
		});
	}
	nanoid(message) {
		return this._addCheck({
			kind: "nanoid",
			...errorUtil.errToObj(message)
		});
	}
	cuid(message) {
		return this._addCheck({
			kind: "cuid",
			...errorUtil.errToObj(message)
		});
	}
	cuid2(message) {
		return this._addCheck({
			kind: "cuid2",
			...errorUtil.errToObj(message)
		});
	}
	ulid(message) {
		return this._addCheck({
			kind: "ulid",
			...errorUtil.errToObj(message)
		});
	}
	base64(message) {
		return this._addCheck({
			kind: "base64",
			...errorUtil.errToObj(message)
		});
	}
	base64url(message) {
		return this._addCheck({
			kind: "base64url",
			...errorUtil.errToObj(message)
		});
	}
	jwt(options) {
		return this._addCheck({
			kind: "jwt",
			...errorUtil.errToObj(options)
		});
	}
	ip(options) {
		return this._addCheck({
			kind: "ip",
			...errorUtil.errToObj(options)
		});
	}
	cidr(options) {
		return this._addCheck({
			kind: "cidr",
			...errorUtil.errToObj(options)
		});
	}
	datetime(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "datetime",
			precision: null,
			offset: false,
			local: false,
			message: options
		});
		return this._addCheck({
			kind: "datetime",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			offset: options?.offset ?? false,
			local: options?.local ?? false,
			...errorUtil.errToObj(options?.message)
		});
	}
	date(message) {
		return this._addCheck({
			kind: "date",
			message
		});
	}
	time(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "time",
			precision: null,
			message: options
		});
		return this._addCheck({
			kind: "time",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			...errorUtil.errToObj(options?.message)
		});
	}
	duration(message) {
		return this._addCheck({
			kind: "duration",
			...errorUtil.errToObj(message)
		});
	}
	regex(regex, message) {
		return this._addCheck({
			kind: "regex",
			regex,
			...errorUtil.errToObj(message)
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: "includes",
			value,
			position: options?.position,
			...errorUtil.errToObj(options?.message)
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: "startsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: "endsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: "min",
			value: minLength,
			...errorUtil.errToObj(message)
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: "max",
			value: maxLength,
			...errorUtil.errToObj(message)
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: "length",
			value: len,
			...errorUtil.errToObj(message)
		});
	}
	/**
	* Equivalent to `.min(1)`
	*/
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((ch) => ch.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((ch) => ch.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((ch) => ch.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((ch) => ch.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((ch) => ch.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((ch) => ch.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((ch) => ch.kind === "base64url");
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodString.create = (params) => {
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepDecCount = (step.toString().split(".")[1] || "").length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
}
var ZodNumber = class ZodNumber extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) input.data = Number(input.data);
		if (this._getType(input) !== ZodParsedType.number) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx.parsedType
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "int") {
			if (!util.isInteger(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: "integer",
					received: "float",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (floatSafeRemainder(input.data, check.value) !== 0) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "finite") {
			if (!Number.isFinite(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_finite,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	int(message) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(message)
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	finite(message) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(message)
		});
	}
	safe(message) {
		return this._addCheck({
			kind: "min",
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message)
		})._addCheck({
			kind: "max",
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
	}
	get isFinite() {
		let max = null;
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
		else if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		} else if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
};
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodBigInt = class ZodBigInt extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) try {
			input.data = BigInt(input.data);
		} catch {
			return this._getInvalidInput(input);
		}
		if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					type: "bigint",
					minimum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					type: "bigint",
					maximum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (input.data % check.value !== BigInt(0)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_getInvalidInput(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.bigint,
			received: ctx.parsedType
		});
		return INVALID;
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodBigInt.create = (params) => {
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
var ZodBoolean = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = Boolean(input.data);
		if (this._getType(input) !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodDate = class ZodDate extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = new Date(input.data);
		if (this._getType(input) !== ZodParsedType.date) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (Number.isNaN(input.data.getTime())) {
			addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode.invalid_date });
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.getTime() < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					message: check.message,
					inclusive: true,
					exact: false,
					minimum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.getTime() > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					message: check.message,
					inclusive: true,
					exact: false,
					maximum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: new Date(input.data.getTime())
		};
	}
	_addCheck(check) {
		return new ZodDate({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: "min",
			value: minDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: "max",
			value: maxDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max != null ? new Date(max) : null;
	}
};
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce: params?.coerce || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params)
	});
};
var ZodSymbol = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params)
	});
};
var ZodUndefined = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params)
	});
};
var ZodNull = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params)
	});
};
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params)
	});
};
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params)
	});
};
var ZodNever = class extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType
		});
		return INVALID;
	}
};
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params)
	});
};
var ZodVoid = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params)
	});
};
var ZodArray = class ZodArray extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: "array",
					inclusive: true,
					exact: true,
					message: def.exactLength.message
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.minLength.message
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.maxLength.message
				});
				status.dirty();
			}
		}
		if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
			return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		})).then((result) => {
			return ParseStatus.mergeArray(status, result);
		});
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray({
			...this._def,
			minLength: {
				value: minLength,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxLength, message) {
		return new ZodArray({
			...this._def,
			maxLength: {
				value: maxLength,
				message: errorUtil.toString(message)
			}
		});
	}
	length(len, message) {
		return new ZodArray({
			...this._def,
			exactLength: {
				value: len,
				message: errorUtil.toString(message)
			}
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params)
	});
};
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {};
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key];
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape
		});
	} else if (schema instanceof ZodArray) return new ZodArray({
		...schema._def,
		type: deepPartialify(schema.element)
	});
	else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
	else return schema;
}
var ZodObject = class ZodObject extends ZodType {
	constructor() {
		super(...arguments);
		this._cached = null;
		/**
		* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
		* If you want to pass through unknown properties, use `.passthrough()` instead.
		*/
		this.nonstrict = this.passthrough;
		/**
		* @deprecated Use `.extend` instead
		*  */
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		const keys = util.objectKeys(shape);
		this._cached = {
			shape,
			keys
		};
		return this._cached;
	}
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.object) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
			for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
		}
		const pairs = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === "passthrough") for (const key of extraKeys) pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: {
					status: "valid",
					value: ctx.data[key]
				}
			});
			else if (unknownKeys === "strict") {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys
					});
					status.dirty();
				}
			} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
		}
		if (ctx.common.async) return Promise.resolve().then(async () => {
			const syncPairs = [];
			for (const pair of pairs) {
				const key = await pair.key;
				const value = await pair.value;
				syncPairs.push({
					key,
					value,
					alwaysSet: pair.alwaysSet
				});
			}
			return syncPairs;
		}).then((syncPairs) => {
			return ParseStatus.mergeObjectSync(status, syncPairs);
		});
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject({
			...this._def,
			unknownKeys: "strict",
			...message !== void 0 ? { errorMap: (issue, ctx) => {
				const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
				if (issue.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
				return { message: defaultError };
			} } : {}
		});
	}
	strip() {
		return new ZodObject({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new ZodObject({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(augmentation) {
		return new ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation
			})
		});
	}
	/**
	* Prior to zod@1.0.12 there was a bug in the
	* inferred type of merged objects. Please
	* upgrade if you are experiencing issues.
	*/
	merge(merging) {
		return new ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape()
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject
		});
	}
	setKey(key, schema) {
		return this.augment({ [key]: schema });
	}
	catchall(index) {
		return new ZodObject({
			...this._def,
			catchall: index
		});
	}
	pick(mask) {
		const shape = {};
		for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	omit(mask) {
		const shape = {};
		for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	/**
	* @deprecated
	*/
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) newShape[key] = fieldSchema;
			else newShape[key] = fieldSchema.optional();
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	required(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
		else {
			let newField = this.shape[key];
			while (newField instanceof ZodOptional) newField = newField._def.innerType;
			newShape[key] = newField;
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strict",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
var ZodUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) if (result.result.status === "valid") return result.result;
			for (const result of results) if (result.result.status === "dirty") {
				ctx.common.issues.push(...result.ctx.common.issues);
				return result.result;
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
		if (ctx.common.async) return Promise.all(options.map(async (option) => {
			const childCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await option._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				}),
				ctx: childCtx
			};
		})).then(handleResults);
		else {
			let dirty = void 0;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: []
					},
					parent: null
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				});
				if (result.status === "valid") return result;
				else if (result.status === "dirty" && !dirty) dirty = {
					result,
					ctx: childCtx
				};
				if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues) => new ZodError(issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
ZodUnion.create = (types, params) => {
	return new ZodUnion({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params)
	});
};
var getDiscriminator = (type) => {
	if (type instanceof ZodLazy) return getDiscriminator(type.schema);
	else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
	else if (type instanceof ZodLiteral) return [type.value];
	else if (type instanceof ZodEnum) return type.options;
	else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
	else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
	else if (type instanceof ZodUndefined) return [void 0];
	else if (type instanceof ZodNull) return [null];
	else if (type instanceof ZodOptional) return [void 0, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodNullable) return [null, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
	else return [];
};
var ZodDiscriminatedUnion = class ZodDiscriminatedUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator]
			});
			return INVALID;
		}
		if (ctx.common.async) return option._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
		else return option._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	/**
	* The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	* However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	* have a different value for each object in the union.
	* @param discriminator the name of the discriminator property
	* @param types an array of object schemas
	* @param params
	*/
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params)
		});
	}
};
function mergeValues(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) return {
		valid: true,
		data: a
	};
	else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b);
		const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		if (Object.prototype.hasOwnProperty.call(newObj, "__proto__")) delete newObj.__proto__;
		for (const key of sharedKeys) {
			if (key === "__proto__") continue;
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return { valid: false };
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) return { valid: false };
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return { valid: false };
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
		valid: true,
		data: a
	};
	else return { valid: false };
}
var ZodIntersection = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
			const merged = mergeValues(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, { code: ZodIssueCode.invalid_intersection_types });
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
			return {
				status: status.value,
				value: merged.data
			};
		};
		if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		})]).then(([left, right]) => handleParsed(left, right));
		else return handleParsed(this._def.left._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}));
	}
};
ZodIntersection.create = (left, right, params) => {
	return new ZodIntersection({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params)
	});
};
var ZodTuple = class ZodTuple extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			return INVALID;
		}
		if (!this._def.rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			status.dirty();
		}
		const items = [...ctx.data].map((item, itemIndex) => {
			const schema = this._def.items[itemIndex] || this._def.rest;
			if (!schema) return null;
			return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
		}).filter((x) => !!x);
		if (ctx.common.async) return Promise.all(items).then((results) => {
			return ParseStatus.mergeArray(status, results);
		});
		else return ParseStatus.mergeArray(status, items);
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple({
			...this._def,
			rest
		});
	}
};
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params)
	});
};
var ZodRecord = class ZodRecord extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const pairs = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) pairs.push({
			key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
			value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
			alwaysSet: key in ctx.data
		});
		if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType) return new ZodRecord({
			keyType: first,
			valueType: second,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(third)
		});
		return new ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second)
		});
	}
};
var ZodMap = class extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs = [...ctx.data.entries()].map(([key, value], index) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
			};
		});
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			});
		} else {
			const finalMap = /* @__PURE__ */ new Map();
			for (const pair of pairs) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === "aborted" || value.status === "aborted") return INVALID;
				if (key.status === "dirty" || value.status === "dirty") status.dirty();
				finalMap.set(key.value, value.value);
			}
			return {
				status: status.value,
				value: finalMap
			};
		}
	}
};
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params)
	});
};
var ZodSet = class ZodSet extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.minSize.message
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.maxSize.message
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements) {
			const parsedSet = /* @__PURE__ */ new Set();
			for (const element of elements) {
				if (element.status === "aborted") return INVALID;
				if (element.status === "dirty") status.dirty();
				parsedSet.add(element.value);
			}
			return {
				status: status.value,
				value: parsedSet
			};
		}
		const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
		if (ctx.common.async) return Promise.all(elements).then((elements) => finalizeSet(elements));
		else return finalizeSet(elements);
	}
	min(minSize, message) {
		return new ZodSet({
			...this._def,
			minSize: {
				value: minSize,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxSize, message) {
		return new ZodSet({
			...this._def,
			maxSize: {
				value: maxSize,
				message: errorUtil.toString(message)
			}
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params)
	});
};
var ZodFunction = class ZodFunction extends ZodType {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error
				}
			});
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error
				}
			});
		}
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise) {
			const me = this;
			return OK(async function(...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e));
					throw error;
				});
				const result = await Reflect.apply(fn, this, parsedArgs);
				return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
					error.addIssue(makeReturnsIssue(result, e));
					throw error;
				});
			});
		} else {
			const me = this;
			return OK(function(...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create())
		});
	}
	returns(returnType) {
		return new ZodFunction({
			...this._def,
			returns: returnType
		});
	}
	implement(func) {
		return this.parse(func);
	}
	strictImplement(func) {
		return this.parse(func);
	}
	static create(args, returns, params) {
		return new ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params)
		});
	}
};
var ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		return this._def.getter()._parse({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
};
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params)
	});
};
var ZodLiteral = class extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
	get value() {
		return this._def.value;
	}
};
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params)
	});
};
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params)
	});
}
var ZodEnum = class ZodEnum extends ZodType {
	_parse(input) {
		if (typeof input.data !== "string") {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(this._def.values);
		if (!this._cache.has(input.data)) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	extract(values, newDef = this._def) {
		return ZodEnum.create(values, {
			...this._def,
			...newDef
		});
	}
	exclude(values, newDef = this._def) {
		return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
			...this._def,
			...newDef
		});
	}
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
		if (!this._cache.has(input.data)) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
};
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params)
	});
};
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK((ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)).then((data) => {
			return this._def.type.parseAsync(data, {
				path: ctx.path,
				errorMap: ctx.common.contextualErrorMap
			});
		}));
	}
};
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params)
	});
};
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) status.abort();
				else status.dirty();
			},
			get path() {
				return ctx.path;
			}
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === "preprocess") {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.async) return Promise.resolve(processed).then(async (processed) => {
				if (status.value === "aborted") return INVALID;
				const result = await this._def.schema._parseAsync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			});
			else {
				if (status.value === "aborted") return INVALID;
				const result = this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			}
		}
		if (effect.type === "refinement") {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) return Promise.resolve(result);
				if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return acc;
			};
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				executeRefinement(inner.value);
				return {
					status: status.value,
					value: inner.value
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((inner) => {
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				return executeRefinement(inner.value).then(() => {
					return {
						status: status.value,
						value: inner.value
					};
				});
			});
		}
		if (effect.type === "transform") {
			if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (!isValid(base)) return INVALID;
				const result = effect.transform(base.value, checkCtx);
				if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
				return {
					status: status.value,
					value: result
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((base) => {
				if (!isValid(base)) return INVALID;
				return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
					status: status.value,
					value: result
				}));
			});
		}
		util.assertNever(effect);
	}
};
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params)
	});
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
	return new ZodEffects({
		schema,
		effect: {
			type: "preprocess",
			transform: preprocess
		},
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params)
	});
};
var ZodOptional = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params)
	});
};
var ZodNullable = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.null) return OK(null);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params)
	});
};
var ZodDefault = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === "function" ? params.default : () => params.default,
		...processCreateParams(params)
	});
};
var ZodCatch = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: []
			}
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: { ...newCtx }
		});
		if (isAsync(result)) return result.then((result) => {
			return {
				status: "valid",
				value: result.status === "valid" ? result.value : this._def.catchValue({
					get error() {
						return new ZodError(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		});
		else return {
			status: "valid",
			value: result.status === "valid" ? result.value : this._def.catchValue({
				get error() {
					return new ZodError(newCtx.common.issues);
				},
				input: newCtx.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
		...processCreateParams(params)
	});
};
var ZodNaN = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
};
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params)
	});
};
var ZodBranded = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	unwrap() {
		return this._def.type;
	}
};
var ZodPipeline = class ZodPipeline extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return DIRTY(inResult.value);
				} else return this._def.out._parseAsync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			};
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (inResult.status === "aborted") return INVALID;
			if (inResult.status === "dirty") {
				status.dirty();
				return {
					status: "dirty",
					value: inResult.value
				};
			} else return this._def.out._parseSync({
				data: inResult.value,
				path: ctx.path,
				parent: ctx
			});
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline
		});
	}
};
var ZodReadonly = class extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		const freeze = (data) => {
			if (isValid(data)) data.value = Object.freeze(data.value);
			return data;
		};
		return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate;
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
	ZodFirstPartyTypeKind["ZodString"] = "ZodString";
	ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
	ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
	ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
	ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
	ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
	ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
	ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
	ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
	ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
	ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
	ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
	ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
	ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
	ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
	ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
	ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
	ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
	ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
	ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
	ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
	ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
	ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
	ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
	ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
	ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
	ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
	ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
	ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
	ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
	ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
	ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
	ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
	ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
	ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
	ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
ZodString.create;
ZodNumber.create;
ZodNaN.create;
ZodBigInt.create;
ZodBoolean.create;
ZodDate.create;
ZodSymbol.create;
ZodUndefined.create;
ZodNull.create;
ZodAny.create;
ZodUnknown.create;
ZodNever.create;
ZodVoid.create;
ZodArray.create;
ZodObject.create;
ZodObject.strictCreate;
ZodUnion.create;
ZodDiscriminatedUnion.create;
ZodIntersection.create;
ZodTuple.create;
ZodRecord.create;
ZodMap.create;
ZodSet.create;
ZodFunction.create;
ZodLazy.create;
ZodLiteral.create;
ZodEnum.create;
ZodNativeEnum.create;
ZodPromise.create;
ZodEffects.create;
ZodOptional.create;
ZodNullable.create;
ZodEffects.createWithPreprocess;
ZodPipeline.create;
//#endregion
//#region node_modules/@ai-sdk/vue/node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders$1(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => ({
		...combinedHeaders,
		...currentHeaders != null ? currentHeaders : {}
	}), {});
}
function extractResponseHeaders$1(response) {
	return Object.fromEntries([...response.headers]);
}
var { btoa: btoa$1, atob: atob$2 } = globalThis;
function convertUint8ArrayToBase64$1(array) {
	let latin1string = "";
	for (let i = 0; i < array.length; i++) latin1string += String.fromCodePoint(array[i]);
	return btoa$1(latin1string);
}
var createIdGenerator$1 = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError$1({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
var generateId$1 = createIdGenerator$1();
function isAbortError$1(error) {
	return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES$1 = ["fetch failed", "failed to fetch"];
function handleFetchError$1({ error, url, requestBodyValues }) {
	if (isAbortError$1(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES$1.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError$1({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	return error;
}
function getRuntimeEnvironmentUserAgent$1(globalThisAny = globalThis) {
	var _a2, _b2, _c;
	if (globalThisAny.window) return `runtime/browser`;
	if ((_a2 = globalThisAny.navigator) == null ? void 0 : _a2.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if ((_c = (_b2 = globalThisAny.process) == null ? void 0 : _b2.versions) == null ? void 0 : _c.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function normalizeHeaders$1(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix$1(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders$1(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var VERSION$5 = "4.0.5";
var getOriginalFetch$1 = () => globalThis.fetch;
var getFromApi$1 = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch$1() }) => {
	try {
		const response = await fetch2(url, {
			method: "GET",
			headers: withUserAgentSuffix$1(headers, `ai-sdk/provider-utils/${VERSION$5}`, getRuntimeEnvironmentUserAgent$1()),
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders$1(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
				throw new APICallError$1({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
			}
			throw new APICallError$1({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError$1({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function loadOptionalSetting$1({ settingValue, environmentVariableName }) {
	if (typeof settingValue === "string") return settingValue;
	if (settingValue != null || typeof process === "undefined") return;
	settingValue = process.env[environmentVariableName];
	if (settingValue == null || typeof settingValue !== "string") return;
	return settingValue;
}
var suspectProtoRx$1 = /"__proto__"\s*:/;
var suspectConstructorRx$1 = /"constructor"\s*:/;
function _parse$1(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx$1.test(text) === false && suspectConstructorRx$1.test(text) === false) return obj;
	return filter$1(obj);
}
function filter$1(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse$1(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch (e) {
		return _parse$1(text);
	}
	try {
		return _parse$1(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema$1(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		jsonSchema2.additionalProperties = false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit$1(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit$1) : visit$1(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit$1);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit$1);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit$1);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit$1(definitions[key]);
	return jsonSchema2;
}
function visit$1(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema$1(def);
}
var ignoreOverride$1 = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions$1 = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions$1 = (options) => typeof options === "string" ? {
	...defaultOptions$1,
	name: options
} : {
	...defaultOptions$1,
	...options
};
function parseAnyDef$1() {
	return {};
}
function parseArrayDef$1(def, refs) {
	var _a2, _b2, _c;
	const res = { type: "array" };
	if (((_a2 = def.type) == null ? void 0 : _a2._def) && ((_c = (_b2 = def.type) == null ? void 0 : _b2._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) res.items = parseDef$1(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef$1(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseBooleanDef$1() {
	return { type: "boolean" };
}
function parseBrandedDef$1(_def, refs) {
	return parseDef$1(_def.type._def, refs);
}
var parseCatchDef$1 = (def, refs) => {
	return parseDef$1(def.innerType._def, refs);
};
function parseDateDef$1(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item, i) => parseDateDef$1(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser$1(def);
	}
}
var integerDateParser$1 = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max": res.maximum = check.value;
	}
	return res;
};
function parseDefaultDef$1(_def, refs) {
	return {
		...parseDef$1(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
function parseEffectsDef$1(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef$1(_def.schema._def, refs) : parseAnyDef$1();
}
function parseEnumDef$1(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType$1 = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef$1(def, refs) {
	const allOf = [parseDef$1(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef$1(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType$1(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef$1(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex$1 = void 0;
var zodPatterns$1 = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex$1 === void 0) emojiRegex$1 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex$1;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef$1(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat$1(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat$1(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod": addPattern$1(res, zodPatterns$1.email, check.message, refs);
			}
			break;
		case "url":
			addFormat$1(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat$1(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern$1(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern$1(res, zodPatterns$1.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern$1(res, zodPatterns$1.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern$1(res, RegExp(`^${escapeLiteralCheckValue$1(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern$1(res, RegExp(`${escapeLiteralCheckValue$1(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat$1(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat$1(res, "date", check.message, refs);
			break;
		case "time":
			addFormat$1(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat$1(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern$1(res, RegExp(escapeLiteralCheckValue$1(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat$1(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat$1(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern$1(res, zodPatterns$1.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern$1(res, zodPatterns$1.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern$1(res, zodPatterns$1.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern$1(res, zodPatterns$1.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern$1(res, zodPatterns$1.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern$1(res, zodPatterns$1.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat$1(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod": addPattern$1(res, zodPatterns$1.base64, check.message, refs);
			}
			break;
		case "nanoid": addPattern$1(res, zodPatterns$1.nanoid, check.message, refs);
	}
	return res;
}
function escapeLiteralCheckValue$1(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric$1(literal) : literal;
}
var ALPHA_NUMERIC$1 = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric$1(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC$1.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat$1(schema, value, message, refs) {
	var _a2;
	if (schema.format || ((_a2 = schema.anyOf) == null ? void 0 : _a2.some((x) => x.format))) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else schema.format = value;
}
function addPattern$1(schema, regex, message, refs) {
	var _a2;
	if (schema.pattern || ((_a2 = schema.allOf) == null ? void 0 : _a2.some((x) => x.pattern))) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags$1(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else schema.pattern = stringifyRegExpWithFlags$1(regex, refs);
}
function stringifyRegExpWithFlags$1(regex, refs) {
	var _a2;
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && ((_a2 = source[i + 2]) == null ? void 0 : _a2.match(/[a-z]/))) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch (e) {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef$1(def, refs) {
	var _a2, _b2, _c, _d, _e, _f;
	const schema = {
		type: "object",
		additionalProperties: (_a2 = parseDef$1(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		})) != null ? _a2 : refs.allowedAdditionalProperties
	};
	if (((_b2 = def.keyType) == null ? void 0 : _b2._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
		const { type, ...keyType } = parseStringDef$1(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
		const { type, ...keyType } = parseBrandedDef$1(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
function parseMapDef$1(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef$1(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef$1(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef$1(), parseDef$1(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef$1()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef$1(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef$1() {
	return { not: parseAnyDef$1() };
}
function parseNullDef$1() {
	return { type: "null" };
}
var primitiveMappings$1 = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef$1(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings$1 && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings$1[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf$1(def, refs);
}
var asAnyOf$1 = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef$1(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef$1(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings$1[def.innerType._def.typeName], "null"] };
	const base = parseDef$1(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef$1(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseObjectDef$1(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional$1(propDef);
		const parsedDef = parseDef$1(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties$1(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties$1(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef$1(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional$1(schema) {
	try {
		return schema.isOptional();
	} catch (e) {
		return true;
	}
}
var parseOptionalDef$1 = (def, refs) => {
	var _a2;
	if (refs.currentPath.toString() === ((_a2 = refs.propertyPath) == null ? void 0 : _a2.toString())) return parseDef$1(def.innerType._def, refs);
	const innerSchema = parseDef$1(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef$1() }, innerSchema] } : parseAnyDef$1();
};
var parsePipelineDef$1 = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef$1(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef$1(def.out._def, refs);
	const a = parseDef$1(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [a, parseDef$1(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			a ? "1" : "0"
		]
	})].filter((x) => x !== void 0) };
};
function parsePromiseDef$1(def, refs) {
	return parseDef$1(def.type._def, refs);
}
function parseSetDef$1(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef$1(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef$1(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef$1(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef$1(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef$1(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef$1() {
	return { not: parseAnyDef$1() };
}
function parseUnknownDef$1() {
	return parseAnyDef$1();
}
var parseReadonlyDef$1 = (def, refs) => {
	return parseDef$1(def.innerType._def, refs);
};
var selectParser$1 = (def, typeName, refs) => {
	switch (typeName) {
		case ZodFirstPartyTypeKind.ZodString: return parseStringDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodNumber: return parseNumberDef$1(def);
		case ZodFirstPartyTypeKind.ZodObject: return parseObjectDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodBigInt: return parseBigintDef$1(def);
		case ZodFirstPartyTypeKind.ZodBoolean: return parseBooleanDef$1();
		case ZodFirstPartyTypeKind.ZodDate: return parseDateDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodUndefined: return parseUndefinedDef$1();
		case ZodFirstPartyTypeKind.ZodNull: return parseNullDef$1();
		case ZodFirstPartyTypeKind.ZodArray: return parseArrayDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodUnion:
		case ZodFirstPartyTypeKind.ZodDiscriminatedUnion: return parseUnionDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodIntersection: return parseIntersectionDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodTuple: return parseTupleDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodRecord: return parseRecordDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodLiteral: return parseLiteralDef$1(def);
		case ZodFirstPartyTypeKind.ZodEnum: return parseEnumDef$1(def);
		case ZodFirstPartyTypeKind.ZodNativeEnum: return parseNativeEnumDef$1(def);
		case ZodFirstPartyTypeKind.ZodNullable: return parseNullableDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodOptional: return parseOptionalDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodMap: return parseMapDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodSet: return parseSetDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodLazy: return () => def.getter()._def;
		case ZodFirstPartyTypeKind.ZodPromise: return parsePromiseDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodNaN:
		case ZodFirstPartyTypeKind.ZodNever: return parseNeverDef$1();
		case ZodFirstPartyTypeKind.ZodEffects: return parseEffectsDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodAny: return parseAnyDef$1();
		case ZodFirstPartyTypeKind.ZodUnknown: return parseUnknownDef$1();
		case ZodFirstPartyTypeKind.ZodDefault: return parseDefaultDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodBranded: return parseBrandedDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodReadonly: return parseReadonlyDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodCatch: return parseCatchDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodPipeline: return parsePipelineDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodFunction:
		case ZodFirstPartyTypeKind.ZodVoid:
		case ZodFirstPartyTypeKind.ZodSymbol: return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath$1 = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef$1(def, refs, forceResolution = false) {
	var _a2;
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = (_a2 = refs.override) == null ? void 0 : _a2.call(refs, def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride$1) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref$1(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser$1(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef$1(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta$1(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref$1 = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath$1(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef$1();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef$1() : void 0;
	}
};
var addMeta$1 = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs$1 = (options) => {
	const _options = getDefaultOptions$1(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name2, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name2
			],
			jsonSchema: void 0
		}]))
	};
};
var zod3ToJsonSchema$1 = (schema, options) => {
	var _a2;
	const refs = getRefs$1(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name3, schema2]) => {
		var _a3;
		return {
			...acc,
			[name3]: (_a3 = parseDef$1(schema2._def, {
				...refs,
				currentPath: [
					...refs.basePath,
					refs.definitionPath,
					name3
				]
			}, true)) != null ? _a3 : parseAnyDef$1()
		};
	}, {}) : void 0;
	const name2 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
	const main = (_a2 = parseDef$1(schema._def, name2 === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name2
		]
	}, false)) != null ? _a2 : parseAnyDef$1();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name2 === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name2
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name2]: main
		}
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol$1 = Symbol.for("vercel.ai.schema");
function lazySchema$1(createSchema) {
	let schema;
	return () => {
		if (schema == null) schema = createSchema();
		return schema;
	};
}
function jsonSchema$1(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol$1]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema$1(value) {
	return typeof value === "object" && value !== null && schemaSymbol$1 in value && value[schemaSymbol$1] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema$1(schema) {
	return schema == null ? jsonSchema$1({
		properties: {},
		additionalProperties: false
	}) : isSchema$1(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema$1(schema) : standardSchema$1(schema) : schema();
}
function standardSchema$1(standardSchema2) {
	return jsonSchema$1(() => addAdditionalPropertiesToJsonSchema$1(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" })), { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError$1({
				value,
				cause: result.issues
			})
		};
	} });
}
function zod3Schema$1(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema$1(() => zod3ToJsonSchema$1(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema$1(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema$1(() => addAdditionalPropertiesToJsonSchema$1(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema$1(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema$1(zodSchema2, options) {
	if (isZod4Schema$1(zodSchema2)) return zod4Schema$1(zodSchema2, options);
	else return zod3Schema$1(zodSchema2, options);
}
async function validateTypes$1({ value, schema }) {
	const result = await safeValidateTypes$1({
		value,
		schema
	});
	if (!result.success) throw TypeValidationError$1.wrap({
		value,
		cause: result.error
	});
	return result.value;
}
async function safeValidateTypes$1({ value, schema }) {
	const actualSchema = asSchema$1(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError$1.wrap({
				value,
				cause: result.error
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError$1.wrap({
				value,
				cause: error
			}),
			rawValue: value
		};
	}
}
async function parseJSON$1({ text, schema }) {
	try {
		const value = secureJsonParse$1(text);
		if (schema == null) return value;
		return validateTypes$1({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError$1.isInstance(error) || TypeValidationError$1.isInstance(error)) throw error;
		throw new JSONParseError$1({
			text,
			cause: error
		});
	}
}
async function safeParseJSON$1({ text, schema }) {
	try {
		const value = secureJsonParse$1(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes$1({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError$1.isInstance(error) ? error : new JSONParseError$1({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function parseJsonEventStream$1({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON$1({
			text: data,
			schema
		}));
	} }));
}
var getOriginalFetch2$1 = () => globalThis.fetch;
var postJsonToApi$1 = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 }) => postToApi$1({
	url,
	headers: {
		"Content-Type": "application/json",
		...headers
	},
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch: fetch2
});
var postToApi$1 = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2$1() }) => {
	try {
		const response = await fetch2(url, {
			method: "POST",
			headers: withUserAgentSuffix$1(headers, `ai-sdk/provider-utils/${VERSION$5}`, getRuntimeEnvironmentUserAgent$1()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders$1(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
				throw new APICallError$1({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
			}
			throw new APICallError$1({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError$1({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool$1(tool2) {
	return tool2;
}
function createProviderToolFactoryWithOutputSchema$1({ id, inputSchema, outputSchema, supportsDeferredResults }) {
	return ({ execute, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool$1({
		type: "provider",
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable,
		supportsDeferredResults
	});
}
async function resolve$1(value) {
	if (typeof value === "function") value = value();
	return Promise.resolve(value);
}
var createJsonErrorResponseHandler$1 = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const responseHeaders = extractResponseHeaders$1(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError$1({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable == null ? void 0 : isRetryable(response)
		})
	};
	try {
		const parsedError = await parseJSON$1({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError$1({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
			})
		};
	} catch (parseError) {
		return {
			responseHeaders,
			value: new APICallError$1({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response)
			})
		};
	}
};
var createEventSourceResponseHandler$1 = (chunkSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders$1(response);
	if (response.body == null) throw new EmptyResponseBodyError$1({});
	return {
		responseHeaders,
		value: parseJsonEventStream$1({
			stream: response.body,
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler$1 = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const parsedResult = await safeParseJSON$1({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders$1(response);
	if (!parsedResult.success) throw new APICallError$1({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
function withoutTrailingSlash$1(url) {
	return url == null ? void 0 : url.replace(/\/$/, "");
}
//#endregion
//#region node_modules/@ai-sdk/vue/node_modules/@vercel/oidc/dist/get-context.js
var require_get_context$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var get_context_exports = {};
	__export(get_context_exports, {
		SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
		getContext: () => getContext
	});
	module.exports = __toCommonJS(get_context_exports);
	var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
	function getContext() {
		return globalThis[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
	}
	0 && (module.exports = {
		SYMBOL_FOR_REQ_CONTEXT,
		getContext
	});
}));
//#endregion
//#region node_modules/@ai-sdk/vue/node_modules/@ai-sdk/gateway/dist/index.mjs
var import_index_browser$1 = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_browser_exports = {};
	__export(index_browser_exports, {
		getContext: () => import_get_context.getContext,
		getVercelOidcToken: () => getVercelOidcToken,
		getVercelOidcTokenSync: () => getVercelOidcTokenSync
	});
	module.exports = __toCommonJS(index_browser_exports);
	var import_get_context = require_get_context$1();
	async function getVercelOidcToken() {
		return "";
	}
	function getVercelOidcTokenSync() {
		return "";
	}
	0 && (module.exports = {
		getContext,
		getVercelOidcToken,
		getVercelOidcTokenSync
	});
})))();
var symbol$5 = Symbol.for("vercel.ai.gateway.error");
var _a$5;
var _b$3;
var GatewayError$1 = class _GatewayError extends (_b$3 = Error, _a$5 = symbol$5, _b$3) {
	constructor({ message, statusCode = 500, cause }) {
		super(message);
		this[_a$5] = true;
		this.statusCode = statusCode;
		this.cause = cause;
	}
	/**
	* Checks if the given error is a Gateway Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is a Gateway Error, false otherwise.
	*/
	static isInstance(error) {
		return _GatewayError.hasMarker(error);
	}
	static hasMarker(error) {
		return typeof error === "object" && error !== null && symbol$5 in error && error[symbol$5] === true;
	}
};
var name$5 = "GatewayAuthenticationError";
var marker2$4 = `vercel.ai.gateway.error.${name$5}`;
var symbol2$4 = Symbol.for(marker2$4);
var _a2$4;
var _b2$2;
var GatewayAuthenticationError$1 = class _GatewayAuthenticationError extends (_b2$2 = GatewayError$1, _a2$4 = symbol2$4, _b2$2) {
	constructor({ message = "Authentication failed", statusCode = 401, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a2$4] = true;
		this.name = name$5;
		this.type = "authentication_error";
	}
	static isInstance(error) {
		return GatewayError$1.hasMarker(error) && symbol2$4 in error;
	}
	/**
	* Creates a contextual error message when authentication fails
	*/
	static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause }) {
		let contextualMessage;
		if (apiKeyProvided) contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
		else if (oidcTokenProvided) contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
		else contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
		return new _GatewayAuthenticationError({
			message: contextualMessage,
			statusCode,
			cause
		});
	}
};
var name2$4 = "GatewayInvalidRequestError";
var marker3$4 = `vercel.ai.gateway.error.${name2$4}`;
var symbol3$4 = Symbol.for(marker3$4);
var _a3$4;
var _b3$2;
var GatewayInvalidRequestError$1 = class extends (_b3$2 = GatewayError$1, _a3$4 = symbol3$4, _b3$2) {
	constructor({ message = "Invalid request", statusCode = 400, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a3$4] = true;
		this.name = name2$4;
		this.type = "invalid_request_error";
	}
	static isInstance(error) {
		return GatewayError$1.hasMarker(error) && symbol3$4 in error;
	}
};
var name3$4 = "GatewayRateLimitError";
var marker4$4 = `vercel.ai.gateway.error.${name3$4}`;
var symbol4$4 = Symbol.for(marker4$4);
var _a4$4;
var _b4$2;
var GatewayRateLimitError$1 = class extends (_b4$2 = GatewayError$1, _a4$4 = symbol4$4, _b4$2) {
	constructor({ message = "Rate limit exceeded", statusCode = 429, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a4$4] = true;
		this.name = name3$4;
		this.type = "rate_limit_exceeded";
	}
	static isInstance(error) {
		return GatewayError$1.hasMarker(error) && symbol4$4 in error;
	}
};
var name4$4 = "GatewayModelNotFoundError";
var marker5$4 = `vercel.ai.gateway.error.${name4$4}`;
var symbol5$4 = Symbol.for(marker5$4);
var modelNotFoundParamSchema$1 = lazySchema$1(() => zodSchema$1(object$2({ modelId: string() })));
var _a5$4;
var _b5$2;
var GatewayModelNotFoundError$1 = class extends (_b5$2 = GatewayError$1, _a5$4 = symbol5$4, _b5$2) {
	constructor({ message = "Model not found", statusCode = 404, modelId, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a5$4] = true;
		this.name = name4$4;
		this.type = "model_not_found";
		this.modelId = modelId;
	}
	static isInstance(error) {
		return GatewayError$1.hasMarker(error) && symbol5$4 in error;
	}
};
var name5$4 = "GatewayInternalServerError";
var marker6$4 = `vercel.ai.gateway.error.${name5$4}`;
var symbol6$4 = Symbol.for(marker6$4);
var _a6$4;
var _b6$2;
var GatewayInternalServerError$1 = class extends (_b6$2 = GatewayError$1, _a6$4 = symbol6$4, _b6$2) {
	constructor({ message = "Internal server error", statusCode = 500, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a6$4] = true;
		this.name = name5$4;
		this.type = "internal_server_error";
	}
	static isInstance(error) {
		return GatewayError$1.hasMarker(error) && symbol6$4 in error;
	}
};
var name6$4 = "GatewayResponseError";
var marker7$4 = `vercel.ai.gateway.error.${name6$4}`;
var symbol7$4 = Symbol.for(marker7$4);
var _a7$4;
var _b7$2;
var GatewayResponseError$1 = class extends (_b7$2 = GatewayError$1, _a7$4 = symbol7$4, _b7$2) {
	constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a7$4] = true;
		this.name = name6$4;
		this.type = "response_error";
		this.response = response;
		this.validationError = validationError;
	}
	static isInstance(error) {
		return GatewayError$1.hasMarker(error) && symbol7$4 in error;
	}
};
async function createGatewayErrorFromResponse$1({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
	const parseResult = await safeValidateTypes$1({
		value: response,
		schema: gatewayErrorResponseSchema$1
	});
	if (!parseResult.success) return new GatewayResponseError$1({
		message: `Invalid error response format: ${defaultMessage}`,
		statusCode,
		response,
		validationError: parseResult.error,
		cause
	});
	const validatedResponse = parseResult.value;
	const errorType = validatedResponse.error.type;
	const message = validatedResponse.error.message;
	switch (errorType) {
		case "authentication_error": return GatewayAuthenticationError$1.createContextualError({
			apiKeyProvided: authMethod === "api-key",
			oidcTokenProvided: authMethod === "oidc",
			statusCode,
			cause
		});
		case "invalid_request_error": return new GatewayInvalidRequestError$1({
			message,
			statusCode,
			cause
		});
		case "rate_limit_exceeded": return new GatewayRateLimitError$1({
			message,
			statusCode,
			cause
		});
		case "model_not_found": {
			const modelResult = await safeValidateTypes$1({
				value: validatedResponse.error.param,
				schema: modelNotFoundParamSchema$1
			});
			return new GatewayModelNotFoundError$1({
				message,
				statusCode,
				modelId: modelResult.success ? modelResult.value.modelId : void 0,
				cause
			});
		}
		case "internal_server_error": return new GatewayInternalServerError$1({
			message,
			statusCode,
			cause
		});
		default: return new GatewayInternalServerError$1({
			message,
			statusCode,
			cause
		});
	}
}
var gatewayErrorResponseSchema$1 = lazySchema$1(() => zodSchema$1(object$2({ error: object$2({
	message: string(),
	type: string().nullish(),
	param: unknown().nullish(),
	code: union([string(), number()]).nullish()
}) })));
function asGatewayError$1(error, authMethod) {
	var _a8;
	if (GatewayError$1.isInstance(error)) return error;
	if (APICallError$1.isInstance(error)) return createGatewayErrorFromResponse$1({
		response: extractApiCallResponse$1(error),
		statusCode: (_a8 = error.statusCode) != null ? _a8 : 500,
		defaultMessage: "Gateway request failed",
		cause: error,
		authMethod
	});
	return createGatewayErrorFromResponse$1({
		response: {},
		statusCode: 500,
		defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
		cause: error,
		authMethod
	});
}
function extractApiCallResponse$1(error) {
	if (error.data !== void 0) return error.data;
	if (error.responseBody != null) try {
		return JSON.parse(error.responseBody);
	} catch (e) {
		return error.responseBody;
	}
	return {};
}
var GATEWAY_AUTH_METHOD_HEADER$1 = "ai-gateway-auth-method";
async function parseAuthMethod$1(headers) {
	const result = await safeValidateTypes$1({
		value: headers[GATEWAY_AUTH_METHOD_HEADER$1],
		schema: gatewayAuthMethodSchema$1
	});
	return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema$1 = lazySchema$1(() => zodSchema$1(union([literal("api-key"), literal("oidc")])));
var GatewayFetchMetadata$1 = class {
	constructor(config) {
		this.config = config;
	}
	async getAvailableModels() {
		try {
			const { value } = await getFromApi$1({
				url: `${this.config.baseURL}/config`,
				headers: await resolve$1(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler$1(gatewayAvailableModelsResponseSchema$1),
				failedResponseHandler: createJsonErrorResponseHandler$1({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError$1(error);
		}
	}
	async getCredits() {
		try {
			const { value } = await getFromApi$1({
				url: `${new URL(this.config.baseURL).origin}/v1/credits`,
				headers: await resolve$1(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler$1(gatewayCreditsResponseSchema$1),
				failedResponseHandler: createJsonErrorResponseHandler$1({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError$1(error);
		}
	}
};
var gatewayAvailableModelsResponseSchema$1 = lazySchema$1(() => zodSchema$1(object$2({ models: array$2(object$2({
	id: string(),
	name: string(),
	description: string().nullish(),
	pricing: object$2({
		input: string(),
		output: string(),
		input_cache_read: string().nullish(),
		input_cache_write: string().nullish()
	}).transform(({ input, output, input_cache_read, input_cache_write }) => ({
		input,
		output,
		...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
		...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
	})).nullish(),
	specification: object$2({
		specificationVersion: literal("v3"),
		provider: string(),
		modelId: string()
	}),
	modelType: _enum([
		"language",
		"embedding",
		"image"
	]).nullish()
})) })));
var gatewayCreditsResponseSchema$1 = lazySchema$1(() => zodSchema$1(object$2({
	balance: string(),
	total_used: string()
}).transform(({ balance, total_used }) => ({
	balance,
	totalUsed: total_used
}))));
var GatewayLanguageModel$1 = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.supportedUrls = { "*/*": [/.*/] };
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs(options) {
		const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
		return {
			args: this.maybeEncodeFileParts(optionsWithoutSignal),
			warnings: []
		};
	}
	async doGenerate(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve$1(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue: rawResponse } = await postJsonToApi$1({
				url: this.getUrl(),
				headers: combineHeaders$1(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await resolve$1(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createJsonResponseHandler$1(any()),
				failedResponseHandler: createJsonErrorResponseHandler$1({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				...responseBody,
				request: { body: args },
				response: {
					headers: responseHeaders,
					body: rawResponse
				},
				warnings
			};
		} catch (error) {
			throw await asGatewayError$1(error, await parseAuthMethod$1(resolvedHeaders));
		}
	}
	async doStream(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve$1(this.config.headers());
		try {
			const { value: response, responseHeaders } = await postJsonToApi$1({
				url: this.getUrl(),
				headers: combineHeaders$1(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await resolve$1(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createEventSourceResponseHandler$1(any()),
				failedResponseHandler: createJsonErrorResponseHandler$1({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				stream: response.pipeThrough(new TransformStream({
					start(controller) {
						if (warnings.length > 0) controller.enqueue({
							type: "stream-start",
							warnings
						});
					},
					transform(chunk, controller) {
						if (chunk.success) {
							const streamPart = chunk.value;
							if (streamPart.type === "raw" && !options.includeRawChunks) return;
							if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") streamPart.timestamp = new Date(streamPart.timestamp);
							controller.enqueue(streamPart);
						} else controller.error(chunk.error);
					}
				})),
				request: { body: args },
				response: { headers: responseHeaders }
			};
		} catch (error) {
			throw await asGatewayError$1(error, await parseAuthMethod$1(resolvedHeaders));
		}
	}
	isFilePart(part) {
		return part && typeof part === "object" && "type" in part && part.type === "file";
	}
	/**
	* Encodes file parts in the prompt to base64. Mutates the passed options
	* instance directly to avoid copying the file data.
	* @param options - The options to encode.
	* @returns The options with the file parts encoded.
	*/
	maybeEncodeFileParts(options) {
		for (const message of options.prompt) for (const part of message.content) if (this.isFilePart(part)) {
			const filePart = part;
			if (filePart.data instanceof Uint8Array) {
				const buffer = Uint8Array.from(filePart.data);
				const base64Data = Buffer.from(buffer).toString("base64");
				filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
			}
		}
		return options;
	}
	getUrl() {
		return `${this.config.baseURL}/language-model`;
	}
	getModelConfigHeaders(modelId, streaming) {
		return {
			"ai-language-model-specification-version": "3",
			"ai-language-model-id": modelId,
			"ai-language-model-streaming": String(streaming)
		};
	}
};
var GatewayEmbeddingModel$1 = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxEmbeddingsPerCall = 2048;
		this.supportsParallelCalls = true;
	}
	get provider() {
		return this.config.provider;
	}
	async doEmbed({ values, headers, abortSignal, providerOptions }) {
		var _a8;
		const resolvedHeaders = await resolve$1(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi$1({
				url: this.getUrl(),
				headers: combineHeaders$1(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve$1(this.config.o11yHeaders)),
				body: {
					values,
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler$1(gatewayEmbeddingResponseSchema$1),
				failedResponseHandler: createJsonErrorResponseHandler$1({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				embeddings: responseBody.embeddings,
				usage: (_a8 = responseBody.usage) != null ? _a8 : void 0,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: []
			};
		} catch (error) {
			throw await asGatewayError$1(error, await parseAuthMethod$1(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/embedding-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-embedding-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayEmbeddingResponseSchema$1 = lazySchema$1(() => zodSchema$1(object$2({
	embeddings: array$2(array$2(number())),
	usage: object$2({ tokens: number() }).nullish(),
	providerMetadata: record(string(), record(string(), unknown())).optional()
})));
var GatewayImageModel$1 = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, size, aspectRatio, seed, files, mask, providerOptions, headers, abortSignal }) {
		var _a8;
		const resolvedHeaders = await resolve$1(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi$1({
				url: this.getUrl(),
				headers: combineHeaders$1(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve$1(this.config.o11yHeaders)),
				body: {
					prompt,
					n,
					...size && { size },
					...aspectRatio && { aspectRatio },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...files && { files: files.map((file) => maybeEncodeImageFile$1(file)) },
					...mask && { mask: maybeEncodeImageFile$1(mask) }
				},
				successfulResponseHandler: createJsonResponseHandler$1(gatewayImageResponseSchema$1),
				failedResponseHandler: createJsonErrorResponseHandler$1({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				images: responseBody.images,
				warnings: (_a8 = responseBody.warnings) != null ? _a8 : [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				}
			};
		} catch (error) {
			throw asGatewayError$1(error, await parseAuthMethod$1(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/image-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-image-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeImageFile$1(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64$1(file.data)
	};
	return file;
}
var providerMetadataEntrySchema$1 = object$2({ images: array$2(unknown()).optional() }).catchall(unknown());
var gatewayImageResponseSchema$1 = object$2({
	images: array$2(string()),
	warnings: array$2(object$2({
		type: literal("other"),
		message: string()
	})).optional(),
	providerMetadata: record(string(), providerMetadataEntrySchema$1).optional()
});
var perplexitySearchToolFactory$1 = createProviderToolFactoryWithOutputSchema$1({
	id: "gateway.perplexity_search",
	inputSchema: lazySchema$1(() => zodSchema$1(object$2({
		query: union([string(), array$2(string())]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
		max_results: number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
		max_tokens_per_page: number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
		max_tokens: number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
		country: string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
		search_domain_filter: array$2(string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
		search_language_filter: array$2(string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
		search_after_date: string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		search_before_date: string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		last_updated_after_filter: string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		last_updated_before_filter: string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		search_recency_filter: _enum([
			"day",
			"week",
			"month",
			"year"
		]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
	}))),
	outputSchema: lazySchema$1(() => zodSchema$1(union([object$2({
		results: array$2(object$2({
			title: string(),
			url: string(),
			snippet: string(),
			date: string().optional(),
			lastUpdated: string().optional()
		})),
		id: string()
	}), object$2({
		error: _enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"unknown"
		]),
		statusCode: number().optional(),
		message: string()
	})])))
});
var perplexitySearch$1 = (config = {}) => perplexitySearchToolFactory$1(config);
var gatewayTools$1 = { 
/**
* Search the web using Perplexity's Search API for real-time information,
* news, research papers, and articles.
*
* Provides ranked search results with advanced filtering options including
* domain, language, date range, and recency filters.
*/
perplexitySearch: perplexitySearch$1 };
async function getVercelRequestId$1() {
	var _a8;
	return (_a8 = (0, import_index_browser$1.getContext)().headers) == null ? void 0 : _a8["x-vercel-id"];
}
var VERSION$4 = "3.0.13";
var AI_GATEWAY_PROTOCOL_VERSION$1 = "0.0.1";
function createGatewayProvider$1(options = {}) {
	var _a8, _b8;
	let pendingMetadata = null;
	let metadataCache = null;
	const cacheRefreshMillis = (_a8 = options.metadataCacheRefreshMillis) != null ? _a8 : 3e5;
	let lastFetchTime = 0;
	const baseURL = (_b8 = withoutTrailingSlash$1(options.baseURL)) != null ? _b8 : "https://ai-gateway.vercel.sh/v3/ai";
	const getHeaders = async () => {
		try {
			const auth = await getGatewayAuthToken$1(options);
			return withUserAgentSuffix$1({
				Authorization: `Bearer ${auth.token}`,
				"ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION$1,
				[GATEWAY_AUTH_METHOD_HEADER$1]: auth.authMethod,
				...options.headers
			}, `ai-sdk/gateway/${VERSION$4}`);
		} catch (error) {
			throw GatewayAuthenticationError$1.createContextualError({
				apiKeyProvided: false,
				oidcTokenProvided: false,
				statusCode: 401,
				cause: error
			});
		}
	};
	const createO11yHeaders = () => {
		const deploymentId = loadOptionalSetting$1({
			settingValue: void 0,
			environmentVariableName: "VERCEL_DEPLOYMENT_ID"
		});
		const environment = loadOptionalSetting$1({
			settingValue: void 0,
			environmentVariableName: "VERCEL_ENV"
		});
		const region = loadOptionalSetting$1({
			settingValue: void 0,
			environmentVariableName: "VERCEL_REGION"
		});
		return async () => {
			const requestId = await getVercelRequestId$1();
			return {
				...deploymentId && { "ai-o11y-deployment-id": deploymentId },
				...environment && { "ai-o11y-environment": environment },
				...region && { "ai-o11y-region": region },
				...requestId && { "ai-o11y-request-id": requestId }
			};
		};
	};
	const createLanguageModel = (modelId) => {
		return new GatewayLanguageModel$1(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const getAvailableModels = async () => {
		var _a9, _b9, _c;
		const now = (_c = (_b9 = (_a9 = options._internal) == null ? void 0 : _a9.currentDate) == null ? void 0 : _b9.call(_a9).getTime()) != null ? _c : Date.now();
		if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
			lastFetchTime = now;
			pendingMetadata = new GatewayFetchMetadata$1({
				baseURL,
				headers: getHeaders,
				fetch: options.fetch
			}).getAvailableModels().then((metadata) => {
				metadataCache = metadata;
				return metadata;
			}).catch(async (error) => {
				throw await asGatewayError$1(error, await parseAuthMethod$1(await getHeaders()));
			});
		}
		return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
	};
	const getCredits = async () => {
		return new GatewayFetchMetadata$1({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getCredits().catch(async (error) => {
			throw await asGatewayError$1(error, await parseAuthMethod$1(await getHeaders()));
		});
	};
	const provider = function(modelId) {
		if (new.target) throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
		return createLanguageModel(modelId);
	};
	provider.specificationVersion = "v3";
	provider.getAvailableModels = getAvailableModels;
	provider.getCredits = getCredits;
	provider.imageModel = (modelId) => {
		return new GatewayImageModel$1(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.languageModel = createLanguageModel;
	const createEmbeddingModel = (modelId) => {
		return new GatewayEmbeddingModel$1(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.embeddingModel = createEmbeddingModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.tools = gatewayTools$1;
	return provider;
}
createGatewayProvider$1();
async function getGatewayAuthToken$1(options) {
	const apiKey = loadOptionalSetting$1({
		settingValue: options.apiKey,
		environmentVariableName: "AI_GATEWAY_API_KEY"
	});
	if (apiKey) return {
		token: apiKey,
		authMethod: "api-key"
	};
	return {
		token: await (0, import_index_browser$1.getVercelOidcToken)(),
		authMethod: "oidc"
	};
}
//#endregion
//#region node_modules/@ai-sdk/vue/node_modules/ai/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __export$1 = (target, all) => {
	for (var name16 in all) __defProp$1(target, name16, {
		get: all[name16],
		enumerable: true
	});
};
var name7$2 = "AI_NoObjectGeneratedError";
var marker7$3 = `vercel.ai.error.${name7$2}`;
var symbol7$3 = Symbol.for(marker7$3);
var _a7$3;
var NoObjectGeneratedError$1 = class extends AISDKError$1 {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name7$2,
			message,
			cause
		});
		this[_a7$3] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker7$3);
	}
};
_a7$3 = symbol7$3;
var VERSION$3 = "6.0.33";
var dataContentSchema$1 = union([
	string(),
	_instanceof(Uint8Array),
	_instanceof(ArrayBuffer),
	custom((value) => {
		var _a16, _b;
		return (_b = (_a16 = globalThis.Buffer) == null ? void 0 : _a16.isBuffer(value)) != null ? _b : false;
	}, { message: "Must be a Buffer" })
]);
var jsonValueSchema$1 = lazy(() => union([
	_null(),
	string(),
	number(),
	boolean(),
	record(string(), jsonValueSchema$1.optional()),
	array$2(jsonValueSchema$1)
]));
var providerMetadataSchema$1 = record(string(), record(string(), jsonValueSchema$1.optional()));
var textPartSchema$1 = object$2({
	type: literal("text"),
	text: string(),
	providerOptions: providerMetadataSchema$1.optional()
});
var imagePartSchema$1 = object$2({
	type: literal("image"),
	image: union([dataContentSchema$1, _instanceof(URL)]),
	mediaType: string().optional(),
	providerOptions: providerMetadataSchema$1.optional()
});
var filePartSchema$1 = object$2({
	type: literal("file"),
	data: union([dataContentSchema$1, _instanceof(URL)]),
	filename: string().optional(),
	mediaType: string(),
	providerOptions: providerMetadataSchema$1.optional()
});
var reasoningPartSchema$1 = object$2({
	type: literal("reasoning"),
	text: string(),
	providerOptions: providerMetadataSchema$1.optional()
});
var toolCallPartSchema$1 = object$2({
	type: literal("tool-call"),
	toolCallId: string(),
	toolName: string(),
	input: unknown(),
	providerOptions: providerMetadataSchema$1.optional(),
	providerExecuted: boolean().optional()
});
var outputSchema$1 = discriminatedUnion("type", [
	object$2({
		type: literal("text"),
		value: string(),
		providerOptions: providerMetadataSchema$1.optional()
	}),
	object$2({
		type: literal("json"),
		value: jsonValueSchema$1,
		providerOptions: providerMetadataSchema$1.optional()
	}),
	object$2({
		type: literal("execution-denied"),
		reason: string().optional(),
		providerOptions: providerMetadataSchema$1.optional()
	}),
	object$2({
		type: literal("error-text"),
		value: string(),
		providerOptions: providerMetadataSchema$1.optional()
	}),
	object$2({
		type: literal("error-json"),
		value: jsonValueSchema$1,
		providerOptions: providerMetadataSchema$1.optional()
	}),
	object$2({
		type: literal("content"),
		value: array$2(union([
			object$2({
				type: literal("text"),
				text: string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("media"),
				data: string(),
				mediaType: string()
			}),
			object$2({
				type: literal("file-data"),
				data: string(),
				mediaType: string(),
				filename: string().optional(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("file-url"),
				url: string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("image-data"),
				data: string(),
				mediaType: string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("image-url"),
				url: string(),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("image-file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema$1.optional()
			}),
			object$2({
				type: literal("custom"),
				providerOptions: providerMetadataSchema$1.optional()
			})
		]))
	})
]);
var toolResultPartSchema$1 = object$2({
	type: literal("tool-result"),
	toolCallId: string(),
	toolName: string(),
	output: outputSchema$1,
	providerOptions: providerMetadataSchema$1.optional()
});
var toolApprovalRequestSchema$1 = object$2({
	type: literal("tool-approval-request"),
	approvalId: string(),
	toolCallId: string()
});
var toolApprovalResponseSchema$1 = object$2({
	type: literal("tool-approval-response"),
	approvalId: string(),
	approved: boolean(),
	reason: string().optional()
});
var systemModelMessageSchema$1 = object$2({
	role: literal("system"),
	content: string(),
	providerOptions: providerMetadataSchema$1.optional()
});
var userModelMessageSchema$1 = object$2({
	role: literal("user"),
	content: union([string(), array$2(union([
		textPartSchema$1,
		imagePartSchema$1,
		filePartSchema$1
	]))]),
	providerOptions: providerMetadataSchema$1.optional()
});
var assistantModelMessageSchema$1 = object$2({
	role: literal("assistant"),
	content: union([string(), array$2(union([
		textPartSchema$1,
		filePartSchema$1,
		reasoningPartSchema$1,
		toolCallPartSchema$1,
		toolResultPartSchema$1,
		toolApprovalRequestSchema$1
	]))]),
	providerOptions: providerMetadataSchema$1.optional()
});
var toolModelMessageSchema$1 = object$2({
	role: literal("tool"),
	content: array$2(union([toolResultPartSchema$1, toolApprovalResponseSchema$1])),
	providerOptions: providerMetadataSchema$1.optional()
});
union([
	systemModelMessageSchema$1,
	userModelMessageSchema$1,
	assistantModelMessageSchema$1,
	toolModelMessageSchema$1
]);
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) if (Object.prototype.hasOwnProperty.call(overrides, key)) {
		const overridesValue = overrides[key];
		if (overridesValue === void 0) continue;
		const baseValue = key in base ? base[key] : void 0;
		const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
		const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
		if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
		else result[key] = overridesValue;
	}
	return result;
}
__export$1({}, {
	array: () => array$1,
	choice: () => choice$1,
	json: () => json$1,
	object: () => object$1,
	text: () => text$1
});
function fixJson$1(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				lastValidIndex = i;
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default: stack.pop();
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson$1(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON$1({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON$1({ text: fixJson$1(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text$1 = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object$1 = ({ schema: inputSchema, name: name16, description }) => {
	const schema = asSchema$1(inputSchema);
	return {
		name: "object",
		responseFormat: resolve$1(schema.jsonSchema).then((jsonSchema2) => ({
			type: "json",
			schema: jsonSchema2,
			...name16 != null && { name: name16 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON$1({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError$1({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const validationResult = await safeValidateTypes$1({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError$1({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson$1(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array$1 = ({ element: inputElementSchema, name: name16, description }) => {
	const elementSchema = asSchema$1(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve$1(elementSchema.jsonSchema).then((jsonSchema2) => {
			const { $schema, ...itemSchema } = jsonSchema2;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name16 != null && { name: name16 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON$1({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError$1({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError$1({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError$1({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes$1({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError$1({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context.response,
					usage: context.usage,
					finishReason: context.finishReason
				});
			}
			return outerValue.elements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson$1(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes$1({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) controller.enqueue(partialOutput[publishedElements]);
			} });
		}
	};
};
var choice$1 = ({ options: choiceOptions, name: name16, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name16 != null && { name: name16 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON$1({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError$1({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError$1({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError$1({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson$1(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json$1 = ({ name: name16, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name16 != null && { name: name16 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON$1({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError$1({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson$1(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
createIdGenerator$1({
	prefix: "aitxt",
	size: 24
});
TransformStream;
var uiMessageChunkSchema$1 = lazySchema$1(() => zodSchema$1(union([
	strictObject({
		type: literal("text-start"),
		id: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("text-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("text-end"),
		id: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("error"),
		errorText: string()
	}),
	strictObject({
		type: literal("tool-input-start"),
		toolCallId: string(),
		toolName: string(),
		providerExecuted: boolean().optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-delta"),
		toolCallId: string(),
		inputTextDelta: string()
	}),
	strictObject({
		type: literal("tool-input-available"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema$1.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-error"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema$1.optional(),
		dynamic: boolean().optional(),
		errorText: string(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-approval-request"),
		approvalId: string(),
		toolCallId: string()
	}),
	strictObject({
		type: literal("tool-output-available"),
		toolCallId: string(),
		output: unknown(),
		providerExecuted: boolean().optional(),
		dynamic: boolean().optional(),
		preliminary: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-error"),
		toolCallId: string(),
		errorText: string(),
		providerExecuted: boolean().optional(),
		dynamic: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-denied"),
		toolCallId: string()
	}),
	strictObject({
		type: literal("reasoning-start"),
		id: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("reasoning-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("reasoning-end"),
		id: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("source-url"),
		sourceId: string(),
		url: string(),
		title: string().optional(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("source-document"),
		sourceId: string(),
		mediaType: string(),
		title: string(),
		filename: string().optional(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: literal("file"),
		url: string(),
		mediaType: string(),
		providerMetadata: providerMetadataSchema$1.optional()
	}),
	strictObject({
		type: custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: string().optional(),
		data: unknown(),
		transient: boolean().optional()
	}),
	strictObject({ type: literal("start-step") }),
	strictObject({ type: literal("finish-step") }),
	strictObject({
		type: literal("start"),
		messageId: string().optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("finish"),
		finishReason: _enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"other"
		]).optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("abort"),
		reason: string().optional()
	}),
	strictObject({
		type: literal("message-metadata"),
		messageMetadata: unknown()
	})
])));
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
function isStaticToolUIPart$1(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart$1(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart$1(part) {
	return isStaticToolUIPart$1(part) || isDynamicToolUIPart$1(part);
}
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	return {
		message: (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage : {
			id: messageId,
			metadata: void 0,
			role: "assistant",
			parts: []
		},
		activeTextParts: {},
		activeReasoningParts: {},
		partialToolCalls: {}
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData }) {
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			var _a16, _b, _c, _d;
			function getToolInvocation(toolCallId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart$1).find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) throw new Error(`no tool invocation found for tool call ${toolCallId}`);
				return toolInvocation;
			}
			function updateToolPart(options) {
				var _a17;
				const part = state.message.parts.find((part2) => isStaticToolUIPart$1(part2) && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					anyPart.providerExecuted = (_a17 = anyOptions.providerExecuted) != null ? _a17 : part.providerExecuted;
					if (anyOptions.providerMetadata != null && part.state === "input-available") part.callProviderMetadata = anyOptions.providerMetadata;
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					input: anyOptions.input,
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options) {
				var _a17, _b2;
				const part = state.message.parts.find((part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = (_a17 = anyOptions.rawInput) != null ? _a17 : anyPart.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					anyPart.providerExecuted = (_b2 = anyOptions.providerExecuted) != null ? _b2 : part.providerExecuted;
					if (anyOptions.providerMetadata != null && part.state === "input-available") part.callProviderMetadata = anyOptions.providerMetadata;
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...anyOptions.providerMetadata != null ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes$1({
						value: mergedMetadata,
						schema: messageMetadataSchema
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					textPart.text += chunk.delta;
					textPart.providerMetadata = (_a16 = chunk.providerMetadata) != null ? _a16 : textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					textPart.state = "done";
					textPart.providerMetadata = (_b = chunk.providerMetadata) != null ? _b : textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = (_c = chunk.providerMetadata) != null ? _c : reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					reasoningPart.providerMetadata = (_d = chunk.providerMetadata) != null ? _d : reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
					state.message.parts.push({
						type: "file",
						mediaType: chunk.mediaType,
						url: chunk.url
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = state.message.parts.filter(isStaticToolUIPart$1);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					partialToolCall.text += chunk.inputTextDelta;
					const { value: partialArgs } = await parsePartialJson$1(partialToolCall.text);
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: void 0,
						rawInput: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = { id: chunk.approvalId };
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						title: toolInvocation.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						title: toolInvocation.title
					});
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						title: toolInvocation.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						title: toolInvocation.title
					});
					write();
					break;
				}
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step":
					state.activeTextParts = {};
					state.activeReasoningParts = {};
					break;
				case "start":
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageId != null || chunk.messageMetadata != null) write();
					break;
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					if ((dataPartSchemas == null ? void 0 : dataPartSchemas[chunk.type]) != null) await validateTypes$1({
						value: chunk.data,
						schema: dataPartSchemas[chunk.type]
					});
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
async function consumeStream({ stream, onError }) {
	const reader = stream.getReader();
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		reader.releaseLock();
	}
}
createIdGenerator$1({
	prefix: "aitxt",
	size: 24
});
createIdGenerator$1({
	prefix: "aiobj",
	size: 24
});
var SerialJobExecutor = class {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
	}
	async processQueue() {
		if (this.isProcessing) return;
		this.isProcessing = true;
		while (this.queue.length > 0) {
			await this.queue[0]();
			this.queue.shift();
		}
		this.isProcessing = false;
	}
	async run(job) {
		return new Promise((resolve3, reject) => {
			this.queue.push(async () => {
				try {
					await job();
					resolve3();
				} catch (error) {
					reject(error);
				}
			});
			this.processQueue();
		});
	}
};
createIdGenerator$1({
	prefix: "aiobj",
	size: 24
});
async function convertFileListToFileUIParts(files) {
	if (files == null) return [];
	if (!globalThis.FileList || !(files instanceof globalThis.FileList)) throw new Error("FileList is not supported in the current environment");
	return Promise.all(Array.from(files).map(async (file) => {
		const { name: name16, type } = file;
		return {
			type: "file",
			mediaType: type,
			filename: name16,
			url: await new Promise((resolve3, reject) => {
				const reader = new FileReader();
				reader.onload = (readerEvent) => {
					var _a16;
					resolve3((_a16 = readerEvent.target) == null ? void 0 : _a16.result);
				};
				reader.onerror = (error) => reject(error);
				reader.readAsDataURL(file);
			})
		};
	}));
}
var HttpChatTransport$1 = class {
	constructor({ api = "/api/chat", credentials, headers, body, fetch: fetch2, prepareSendMessagesRequest, prepareReconnectToStreamRequest }) {
		this.api = api;
		this.credentials = credentials;
		this.headers = headers;
		this.body = body;
		this.fetch = fetch2;
		this.prepareSendMessagesRequest = prepareSendMessagesRequest;
		this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
	}
	async sendMessages({ abortSignal, ...options }) {
		var _a16, _b, _c, _d, _e;
		const resolvedBody = await resolve$1(this.body);
		const resolvedHeaders = await resolve$1(this.headers);
		const resolvedCredentials = await resolve$1(this.credentials);
		const baseHeaders = {
			...normalizeHeaders$1(resolvedHeaders),
			...normalizeHeaders$1(options.headers)
		};
		const preparedRequest = await ((_a16 = this.prepareSendMessagesRequest) == null ? void 0 : _a16.call(this, {
			api: this.api,
			id: options.chatId,
			messages: options.messages,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata,
			trigger: options.trigger,
			messageId: options.messageId
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : this.api;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders$1(preparedRequest.headers) : baseHeaders;
		const body = (preparedRequest == null ? void 0 : preparedRequest.body) !== void 0 ? preparedRequest.body : {
			...resolvedBody,
			...options.body,
			id: options.chatId,
			messages: options.messages,
			trigger: options.trigger,
			messageId: options.messageId
		};
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "POST",
			headers: withUserAgentSuffix$1({
				"Content-Type": "application/json",
				...headers
			}, `ai-sdk/${VERSION$3}`, getRuntimeEnvironmentUserAgent$1()),
			body: JSON.stringify(body),
			credentials,
			signal: abortSignal
		});
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
	async reconnectToStream(options) {
		var _a16, _b, _c, _d, _e;
		const resolvedBody = await resolve$1(this.body);
		const resolvedHeaders = await resolve$1(this.headers);
		const resolvedCredentials = await resolve$1(this.credentials);
		const baseHeaders = {
			...normalizeHeaders$1(resolvedHeaders),
			...normalizeHeaders$1(options.headers)
		};
		const preparedRequest = await ((_a16 = this.prepareReconnectToStreamRequest) == null ? void 0 : _a16.call(this, {
			api: this.api,
			id: options.chatId,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : `${this.api}/${options.chatId}/stream`;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders$1(preparedRequest.headers) : baseHeaders;
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "GET",
			headers: withUserAgentSuffix$1(headers, `ai-sdk/${VERSION$3}`, getRuntimeEnvironmentUserAgent$1()),
			credentials
		});
		if (response.status === 204) return null;
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
};
var DefaultChatTransport$1 = class extends HttpChatTransport$1 {
	constructor(options = {}) {
		super(options);
	}
	processResponseStream(stream) {
		return parseJsonEventStream$1({
			stream,
			schema: uiMessageChunkSchema$1
		}).pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (!chunk.success) throw chunk.error;
			controller.enqueue(chunk.value);
		} }));
	}
};
var AbstractChat = class {
	constructor({ generateId: generateId2 = generateId$1, id = generateId2(), transport = new DefaultChatTransport$1(), messageMetadataSchema, dataPartSchemas, state, onError, onToolCall, onFinish, onData, sendAutomaticallyWhen }) {
		this.activeResponse = void 0;
		this.jobExecutor = new SerialJobExecutor();
		/**
		* Appends or replaces a user message to the chat list. This triggers the API call to fetch
		* the assistant's response.
		*
		* If a messageId is provided, the message will be replaced.
		*/
		this.sendMessage = async (message, options) => {
			var _a16, _b, _c, _d;
			if (message == null) {
				await this.makeRequest({
					trigger: "submit-message",
					messageId: (_a16 = this.lastMessage) == null ? void 0 : _a16.id,
					...options
				});
				return;
			}
			let uiMessage;
			if ("text" in message || "files" in message) uiMessage = { parts: [...Array.isArray(message.files) ? message.files : await convertFileListToFileUIParts(message.files), ..."text" in message && message.text != null ? [{
				type: "text",
				text: message.text
			}] : []] };
			else uiMessage = message;
			if (message.messageId != null) {
				const messageIndex = this.state.messages.findIndex((m) => m.id === message.messageId);
				if (messageIndex === -1) throw new Error(`message with id ${message.messageId} not found`);
				if (this.state.messages[messageIndex].role !== "user") throw new Error(`message with id ${message.messageId} is not a user message`);
				this.state.messages = this.state.messages.slice(0, messageIndex + 1);
				this.state.replaceMessage(messageIndex, {
					...uiMessage,
					id: message.messageId,
					role: (_b = uiMessage.role) != null ? _b : "user",
					metadata: message.metadata
				});
			} else this.state.pushMessage({
				...uiMessage,
				id: (_c = uiMessage.id) != null ? _c : this.generateId(),
				role: (_d = uiMessage.role) != null ? _d : "user",
				metadata: message.metadata
			});
			await this.makeRequest({
				trigger: "submit-message",
				messageId: message.messageId,
				...options
			});
		};
		/**
		* Regenerate the assistant message with the provided message id.
		* If no message id is provided, the last assistant message will be regenerated.
		*/
		this.regenerate = async ({ messageId, ...options } = {}) => {
			const messageIndex = messageId == null ? this.state.messages.length - 1 : this.state.messages.findIndex((message) => message.id === messageId);
			if (messageIndex === -1) throw new Error(`message ${messageId} not found`);
			this.state.messages = this.state.messages.slice(0, this.messages[messageIndex].role === "assistant" ? messageIndex : messageIndex + 1);
			await this.makeRequest({
				trigger: "regenerate-message",
				messageId,
				...options
			});
		};
		/**
		* Attempt to resume an ongoing streaming response.
		*/
		this.resumeStream = async (options = {}) => {
			await this.makeRequest({
				trigger: "resume-stream",
				...options
			});
		};
		/**
		* Clear the error state and set the status to ready if the chat is in an error state.
		*/
		this.clearError = () => {
			if (this.status === "error") {
				this.state.error = void 0;
				this.setStatus({ status: "ready" });
			}
		};
		this.addToolApprovalResponse = async ({ id, approved, reason }) => this.jobExecutor.run(async () => {
			var _a16, _b;
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart$1(part) && part.state === "approval-requested" && part.approval.id === id ? {
				...part,
				state: "approval-responded",
				approval: {
					id,
					approved,
					reason
				}
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && ((_a16 = this.sendAutomaticallyWhen) == null ? void 0 : _a16.call(this, { messages: this.state.messages }))) this.makeRequest({
				trigger: "submit-message",
				messageId: (_b = this.lastMessage) == null ? void 0 : _b.id
			});
		});
		this.addToolOutput = async ({ state = "output-available", tool: tool2, toolCallId, output, errorText }) => this.jobExecutor.run(async () => {
			var _a16, _b;
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart$1(part) && part.toolCallId === toolCallId ? {
				...part,
				state,
				output,
				errorText
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && ((_a16 = this.sendAutomaticallyWhen) == null ? void 0 : _a16.call(this, { messages: this.state.messages }))) this.makeRequest({
				trigger: "submit-message",
				messageId: (_b = this.lastMessage) == null ? void 0 : _b.id
			});
		});
		/** @deprecated Use addToolOutput */
		this.addToolResult = this.addToolOutput;
		/**
		* Abort the current request immediately, keep the generated tokens if any.
		*/
		this.stop = async () => {
			var _a16;
			if (this.status !== "streaming" && this.status !== "submitted") return;
			if ((_a16 = this.activeResponse) == null ? void 0 : _a16.abortController) this.activeResponse.abortController.abort();
		};
		this.id = id;
		this.transport = transport;
		this.generateId = generateId2;
		this.messageMetadataSchema = messageMetadataSchema;
		this.dataPartSchemas = dataPartSchemas;
		this.state = state;
		this.onError = onError;
		this.onToolCall = onToolCall;
		this.onFinish = onFinish;
		this.onData = onData;
		this.sendAutomaticallyWhen = sendAutomaticallyWhen;
	}
	/**
	* Hook status:
	*
	* - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
	* - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
	* - `ready`: The full response has been received and processed; a new user message can be submitted.
	* - `error`: An error occurred during the API request, preventing successful completion.
	*/
	get status() {
		return this.state.status;
	}
	setStatus({ status, error }) {
		if (this.status === status) return;
		this.state.status = status;
		this.state.error = error;
	}
	get error() {
		return this.state.error;
	}
	get messages() {
		return this.state.messages;
	}
	get lastMessage() {
		return this.state.messages[this.state.messages.length - 1];
	}
	set messages(messages) {
		this.state.messages = messages;
	}
	async makeRequest({ trigger, metadata, headers, body, messageId }) {
		var _a16, _b, _c, _d;
		this.setStatus({
			status: "submitted",
			error: void 0
		});
		const lastMessage = this.lastMessage;
		let isAbort = false;
		let isDisconnect = false;
		let isError = false;
		try {
			const activeResponse = {
				state: createStreamingUIMessageState({
					lastMessage: this.state.snapshot(lastMessage),
					messageId: this.generateId()
				}),
				abortController: new AbortController()
			};
			activeResponse.abortController.signal.addEventListener("abort", () => {
				isAbort = true;
			});
			this.activeResponse = activeResponse;
			let stream;
			if (trigger === "resume-stream") {
				const reconnect = await this.transport.reconnectToStream({
					chatId: this.id,
					metadata,
					headers,
					body
				});
				if (reconnect == null) {
					this.setStatus({ status: "ready" });
					return;
				}
				stream = reconnect;
			} else stream = await this.transport.sendMessages({
				chatId: this.id,
				messages: this.state.messages,
				abortSignal: activeResponse.abortController.signal,
				metadata,
				headers,
				body,
				trigger,
				messageId
			});
			const runUpdateMessageJob = (job) => this.jobExecutor.run(() => job({
				state: activeResponse.state,
				write: () => {
					var _a17;
					this.setStatus({ status: "streaming" });
					if (activeResponse.state.message.id === ((_a17 = this.lastMessage) == null ? void 0 : _a17.id)) this.state.replaceMessage(this.state.messages.length - 1, activeResponse.state.message);
					else this.state.pushMessage(activeResponse.state.message);
				}
			}));
			await consumeStream({
				stream: processUIMessageStream({
					stream,
					onToolCall: this.onToolCall,
					onData: this.onData,
					messageMetadataSchema: this.messageMetadataSchema,
					dataPartSchemas: this.dataPartSchemas,
					runUpdateMessageJob,
					onError: (error) => {
						throw error;
					}
				}),
				onError: (error) => {
					throw error;
				}
			});
			this.setStatus({ status: "ready" });
		} catch (err) {
			if (isAbort || err.name === "AbortError") {
				isAbort = true;
				this.setStatus({ status: "ready" });
				return null;
			}
			isError = true;
			if (err instanceof TypeError && (err.message.toLowerCase().includes("fetch") || err.message.toLowerCase().includes("network"))) isDisconnect = true;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
		} finally {
			try {
				(_b = this.onFinish) == null || _b.call(this, {
					message: this.activeResponse.state.message,
					messages: this.state.messages,
					isAbort,
					isDisconnect,
					isError,
					finishReason: (_a16 = this.activeResponse) == null ? void 0 : _a16.state.finishReason
				});
			} catch (err) {
				console.error(err);
			}
			this.activeResponse = void 0;
		}
		if (((_c = this.sendAutomaticallyWhen) == null ? void 0 : _c.call(this, { messages: this.state.messages })) && !isError) await this.makeRequest({
			trigger: "submit-message",
			messageId: (_d = this.lastMessage) == null ? void 0 : _d.id,
			metadata,
			headers,
			body
		});
	}
};
//#endregion
//#region node_modules/swrv/esm/lib/hash.js
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
function hash(args) {
	if (!args.length) return "";
	var key = "arg";
	for (var i = 0; i < args.length; ++i) {
		var _hash = void 0;
		if (args[i] === null || typeof args[i] !== "object" && typeof args[i] !== "function") {
			if (typeof args[i] === "string") _hash = "\"" + args[i] + "\"";
			else _hash = String(args[i]);
		} else if (!table.has(args[i])) {
			_hash = counter;
			table.set(args[i], counter++);
		} else _hash = table.get(args[i]);
		key += "@" + _hash;
	}
	return key;
}
//#endregion
//#region node_modules/swrv/esm/cache/SWRVCache.js
function serializeKeyDefault(key) {
	if (typeof key === "function") try {
		key = key();
	} catch (err) {
		key = "";
	}
	if (Array.isArray(key)) key = hash(key);
	else key = String(key || "");
	return key;
}
var SWRVCache = function() {
	function SWRVCache(ttl) {
		if (ttl === void 0) ttl = 0;
		this.items = /* @__PURE__ */ new Map();
		this.ttl = ttl;
	}
	SWRVCache.prototype.serializeKey = function(key) {
		return serializeKeyDefault(key);
	};
	SWRVCache.prototype.get = function(k) {
		var _key = this.serializeKey(k);
		return this.items.get(_key);
	};
	SWRVCache.prototype.set = function(k, v, ttl) {
		var _key = this.serializeKey(k);
		var timeToLive = ttl || this.ttl;
		var now = Date.now();
		var item = {
			data: v,
			createdAt: now,
			expiresAt: timeToLive ? now + timeToLive : Infinity
		};
		this.dispatchExpire(timeToLive, item, _key);
		this.items.set(_key, item);
	};
	SWRVCache.prototype.dispatchExpire = function(ttl, item, serializedKey) {
		var _this = this;
		ttl && setTimeout(function() {
			if (Date.now() >= item.expiresAt) _this.delete(serializedKey);
		}, ttl);
	};
	SWRVCache.prototype.delete = function(serializedKey) {
		this.items.delete(serializedKey);
	};
	return SWRVCache;
}();
//#endregion
//#region node_modules/swrv/esm/cache/adapters/localStorage.js
var __extends = (function() {
	var extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		return extendStatics(d, b);
	};
	return function(d, b) {
		if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
		extendStatics(d, b);
		function __() {
			this.constructor = d;
		}
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
})();
(function(_super) {
	__extends(LocalStorageCache, _super);
	function LocalStorageCache(key, ttl) {
		if (key === void 0) key = "swrv";
		if (ttl === void 0) ttl = 0;
		var _this = _super.call(this, ttl) || this;
		_this.STORAGE_KEY = key;
		return _this;
	}
	LocalStorageCache.prototype.encode = function(storage) {
		return JSON.stringify(storage);
	};
	LocalStorageCache.prototype.decode = function(storage) {
		return JSON.parse(storage);
	};
	LocalStorageCache.prototype.get = function(k) {
		var item = localStorage.getItem(this.STORAGE_KEY);
		if (item) {
			var _key = this.serializeKey(k);
			var itemParsed = JSON.parse(item)[_key];
			if ((itemParsed === null || itemParsed === void 0 ? void 0 : itemParsed.expiresAt) === null) itemParsed.expiresAt = Infinity;
			return itemParsed;
		}
	};
	LocalStorageCache.prototype.set = function(k, v, ttl) {
		var _a;
		var payload = {};
		var _key = this.serializeKey(k);
		var timeToLive = ttl || this.ttl;
		var storage = localStorage.getItem(this.STORAGE_KEY);
		var now = Date.now();
		var item = {
			data: v,
			createdAt: now,
			expiresAt: timeToLive ? now + timeToLive : Infinity
		};
		if (storage) {
			payload = this.decode(storage);
			payload[_key] = item;
		} else payload = (_a = {}, _a[_key] = item, _a);
		this.dispatchExpire(timeToLive, item, _key);
		localStorage.setItem(this.STORAGE_KEY, this.encode(payload));
	};
	LocalStorageCache.prototype.dispatchExpire = function(ttl, item, serializedKey) {
		var _this = this;
		ttl && setTimeout(function() {
			if (Date.now() >= item.expiresAt) _this.delete(serializedKey);
		}, ttl);
	};
	LocalStorageCache.prototype.delete = function(serializedKey) {
		var storage = localStorage.getItem(this.STORAGE_KEY);
		var payload = {};
		if (storage) {
			payload = this.decode(storage);
			delete payload[serializedKey];
		}
		localStorage.setItem(this.STORAGE_KEY, this.encode(payload));
	};
	return LocalStorageCache;
})(SWRVCache);
//#endregion
//#region node_modules/swrv/esm/lib/web-preset.js
function isOnline() {
	if (typeof navigator.onLine !== "undefined") return navigator.onLine;
	return true;
}
function isDocumentVisible() {
	if (typeof document !== "undefined" && typeof document.visibilityState !== "undefined") return document.visibilityState !== "hidden";
	return true;
}
var fetcher = function(url) {
	return fetch(url).then(function(res) {
		return res.json();
	});
};
var web_preset_default = {
	isOnline,
	isDocumentVisible,
	fetcher
};
//#endregion
//#region node_modules/swrv/esm/use-swrv.js
/**              ____
*--------------/    \.------------------/
*            /  swrv  \.               /    //
*          /         / /\.            /    //
*        /     _____/ /   \.         /
*      /      /  ____/   .  \.      /
*    /        \ \_____        \.   /
*  /     .     \_____ \         \ /    //
*  \          _____/ /        ./ /    //
*    \       / _____/       ./  /
*      \    / /      .    ./   /
*        \ / /          ./    /
*    .     \/         ./     /    //
*            \      ./      /    //
*              \.. /       /
*         .     |||       /
*               |||      /
*     .         |||     /    //
*               |||    /    //
*               |||   /
*/
var __assign = function() {
	__assign = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
var __awaiter = function(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};
var __generator = function(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	};
	return typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (_) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
};
var __read = function(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
};
var __spreadArray = function(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
};
/**
* hasInjectionContext() is Vue 3.3+; this package supports >=3.2.26, so fall back to the
* getCurrentInstance() internal where it is not exported.
*/
var hasInjectionContextCompat = hasInjectionContext;
function canInject() {
	return hasInjectionContextCompat ? hasInjectionContextCompat() : Boolean(getCurrentInstance());
}
var DATA_CACHE = new SWRVCache();
var REF_CACHE = new SWRVCache();
var PROMISES_CACHE = new SWRVCache();
/**
* Symbol.for, so that two copies of this package in one dependency graph compute the same key
* and resolve each other's provide. Mismatched keys fail silently, as stale data. The suffix
* versions SwrvCacheBundle, not the package: bump it only when that shape changes
* incompatibly, or two releases that could safely share a bundle stop seeing each other.
*/
var swrvCacheInjectionKey = Symbol.for("swrv.cache.v1");
var defaultConfig = {
	cache: DATA_CACHE,
	refreshInterval: 0,
	ttl: 0,
	serverTTL: 1e3,
	dedupingInterval: 2e3,
	revalidateOnFocus: true,
	revalidateDebounce: 0,
	shouldRetryOnError: true,
	errorRetryInterval: 5e3,
	errorRetryCount: 5,
	fetcher: web_preset_default.fetcher,
	isOnline: web_preset_default.isOnline,
	isDocumentVisible: web_preset_default.isDocumentVisible
};
/**
* Cache the refs for later revalidation
*/
function setRefCache(key, theRef, ttl, refsCache) {
	if (refsCache === void 0) refsCache = REF_CACHE;
	var refCacheItem = refsCache.get(key);
	if (refCacheItem) refCacheItem.data.push(theRef);
	else refsCache.set(key, [theRef], ttl > 0 ? ttl + 5e3 : ttl);
}
function onErrorRetry(revalidate, errorRetryCount, config) {
	if (!config.isDocumentVisible()) return;
	if (config.errorRetryCount !== void 0 && errorRetryCount > config.errorRetryCount) return;
	var count = Math.min(errorRetryCount || 0, config.errorRetryCount);
	var timeout = count * config.errorRetryInterval;
	setTimeout(function() {
		revalidate(null, {
			errorRetryCount: count + 1,
			shouldRetryOnError: true
		});
	}, timeout);
}
/**
* Evaluate shouldRetryOnError option
*/
function resolveRetryFlag(_a) {
	var _b = _a.shouldRetry, shouldRetry = _b === void 0 ? void 0 : _b, error = _a.error;
	if (typeof shouldRetry === "function") return shouldRetry(error);
	if (typeof shouldRetry === "boolean") return shouldRetry;
	return defaultConfig.shouldRetryOnError;
}
/**
* Main mutation function for receiving data from promises to change state and
* set data cache. To write into an app's provided bundle, pass its caches: inject the bundle in
* setup(), where injection is legal, and use it from the handler or callback that mutates.
*/
var mutate = function(key, res, cache, ttl, refsCache) {
	if (cache === void 0) cache = DATA_CACHE;
	if (ttl === void 0) ttl = defaultConfig.ttl;
	if (refsCache === void 0) refsCache = REF_CACHE;
	return __awaiter(void 0, void 0, void 0, function() {
		var data, error, isValidating, err_1, newData, stateRef, refs_1;
		return __generator(this, function(_a) {
			switch (_a.label) {
				case 0:
					if (!isPromise(res)) return [3, 5];
					_a.label = 1;
				case 1:
					_a.trys.push([
						1,
						3,
						,
						4
					]);
					return [4, res];
				case 2:
					data = _a.sent();
					return [3, 4];
				case 3:
					err_1 = _a.sent();
					error = err_1;
					return [3, 4];
				case 4: return [3, 6];
				case 5:
					data = res;
					_a.label = 6;
				case 6:
					isValidating = false;
					newData = {
						data,
						error,
						isValidating
					};
					if (typeof data !== "undefined") try {
						cache.set(key, newData, ttl);
					} catch (err) {
						console.error("swrv(mutate): failed to set cache", err);
					}
					stateRef = refsCache.get(key);
					if (stateRef && stateRef.data.length) {
						refs_1 = stateRef.data.filter(function(r) {
							return r.key === key;
						});
						refs_1.forEach(function(r, idx) {
							if (typeof newData.data !== "undefined") r.data = newData.data;
							r.error = newData.error;
							r.isValidating = newData.isValidating;
							r.isLoading = newData.isValidating;
							if (!(idx === refs_1.length - 1)) delete refs_1[idx];
						});
						refs_1 = refs_1.filter(Boolean);
					}
					return [2, newData];
			}
		});
	});
};
function useSWRV$1() {
	var _this = this;
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	var key;
	var fn;
	var config = __assign({}, defaultConfig);
	var unmounted = false;
	var isHydrated = false;
	if (!getCurrentScope()) {
		console.error("useSWRV must be called inside setup() or an active effectScope().");
		return null;
	}
	var promisesCache = PROMISES_CACHE;
	var refsCache = REF_CACHE;
	if (canInject()) {
		var injectedCache = inject(swrvCacheInjectionKey, void 0);
		if (injectedCache) {
			config.cache = injectedCache.data;
			promisesCache = injectedCache.promises;
			refsCache = injectedCache.refs;
		}
	}
	var IS_SERVER = typeof window === "undefined" || typeof document === "undefined";
	/**
	const isSsrHydration = Boolean(
	\!IS_SERVER &&
	vm.$vnode &&
	vm.$vnode.elm &&
	vm.$vnode.elm.dataset &&
	vm.$vnode.elm.dataset.swrvKey)
	*/
	if (args.length >= 1) key = args[0];
	if (args.length >= 2) fn = args[1];
	if (args.length > 2) config = __assign(__assign({}, config), args[2]);
	var ttl = IS_SERVER ? config.serverTTL : config.ttl;
	var keyRef = typeof key === "function" ? key : ref(key);
	if (typeof fn === "undefined") fn = config.fetcher;
	var stateRef = null;
	if (!stateRef) stateRef = reactive({
		data: void 0,
		error: void 0,
		isValidating: true,
		isLoading: true,
		key: null
	});
	/**
	* Revalidate the cache, mutate data
	*/
	var revalidate = function(data, opts) {
		return __awaiter(_this, void 0, void 0, function() {
			var isFirstFetch, keyVal, cacheItem, newData, fetcher, shouldRevalidate, trigger;
			var _this = this;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						isFirstFetch = stateRef.data === void 0;
						keyVal = keyRef.value;
						if (!keyVal) return [2];
						cacheItem = config.cache.get(keyVal);
						newData = cacheItem && cacheItem.data;
						stateRef.isValidating = true;
						stateRef.isLoading = !newData;
						if (newData) {
							stateRef.data = newData.data;
							stateRef.error = newData.error;
						}
						fetcher = data || fn;
						if (!fetcher || !config.isDocumentVisible() && !isFirstFetch || (opts === null || opts === void 0 ? void 0 : opts.forceRevalidate) !== void 0 && !(opts === null || opts === void 0 ? void 0 : opts.forceRevalidate)) {
							stateRef.isValidating = false;
							stateRef.isLoading = false;
							return [2];
						}
						if (cacheItem) {
							shouldRevalidate = Boolean(Date.now() - cacheItem.createdAt >= config.dedupingInterval || (opts === null || opts === void 0 ? void 0 : opts.forceRevalidate));
							if (!shouldRevalidate) {
								stateRef.isValidating = false;
								stateRef.isLoading = false;
								return [2];
							}
						}
						trigger = function() {
							return __awaiter(_this, void 0, void 0, function() {
								var promiseFromCache, fetcherArgs, newPromise, configAllows, optsAllows, shouldRetryOnError;
								return __generator(this, function(_a) {
									switch (_a.label) {
										case 0:
											promiseFromCache = promisesCache.get(keyVal);
											if (!!promiseFromCache) return [3, 2];
											fetcherArgs = Array.isArray(keyVal) ? keyVal : [keyVal];
											newPromise = fetcher.apply(void 0, __spreadArray([], __read(fetcherArgs), false));
											promisesCache.set(keyVal, newPromise, config.dedupingInterval);
											return [4, mutate(keyVal, newPromise, config.cache, ttl, refsCache)];
										case 1:
											_a.sent();
											return [3, 4];
										case 2: return [4, mutate(keyVal, promiseFromCache.data, config.cache, ttl, refsCache)];
										case 3:
											_a.sent();
											_a.label = 4;
										case 4:
											stateRef.isValidating = false;
											stateRef.isLoading = false;
											promisesCache.delete(keyVal);
											if (stateRef.error !== void 0) {
												configAllows = resolveRetryFlag({
													shouldRetry: config.shouldRetryOnError,
													error: stateRef.error
												});
												optsAllows = resolveRetryFlag({
													shouldRetry: opts ? opts.shouldRetryOnError : true,
													error: stateRef.error
												});
												shouldRetryOnError = !unmounted && configAllows && optsAllows;
												if (shouldRetryOnError) onErrorRetry(revalidate, opts ? opts.errorRetryCount : 1, config);
											}
											return [2];
									}
								});
							});
						};
						if (!(newData && config.revalidateDebounce)) return [3, 1];
						setTimeout(function() {
							return __awaiter(_this, void 0, void 0, function() {
								return __generator(this, function(_a) {
									switch (_a.label) {
										case 0:
											if (!!unmounted) return [3, 2];
											return [4, trigger()];
										case 1:
											_a.sent();
											_a.label = 2;
										case 2: return [2];
									}
								});
							});
						}, config.revalidateDebounce);
						return [3, 3];
					case 1: return [4, trigger()];
					case 2:
						_a.sent();
						_a.label = 3;
					case 3: return [2];
				}
			});
		});
	};
	var revalidateCall = function() {
		return __awaiter(_this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, revalidate(null, { shouldRetryOnError: false })];
			});
		});
	};
	var timer = null;
	if (!IS_SERVER) {
		var tick_1 = function() {
			return __awaiter(_this, void 0, void 0, function() {
				return __generator(this, function(_a) {
					switch (_a.label) {
						case 0:
							if (!(!stateRef.error && config.isOnline())) return [3, 2];
							return [4, revalidate()];
						case 1:
							_a.sent();
							return [3, 3];
						case 2:
							if (timer) {
								clearTimeout(timer);
								timer = null;
							}
							_a.label = 3;
						case 3:
							if (config.refreshInterval && !unmounted) timer = setTimeout(tick_1, config.refreshInterval);
							return [2];
					}
				});
			});
		};
		if (config.refreshInterval) timer = setTimeout(tick_1, config.refreshInterval);
		if (config.revalidateOnFocus) {
			document.addEventListener("visibilitychange", revalidateCall, false);
			window.addEventListener("focus", revalidateCall, false);
		}
	}
	onScopeDispose(function() {
		unmounted = true;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		if (!IS_SERVER && config.revalidateOnFocus) {
			document.removeEventListener("visibilitychange", revalidateCall, false);
			window.removeEventListener("focus", revalidateCall, false);
		}
		var refCacheItem = refsCache.get(keyRef.value);
		if (refCacheItem) refCacheItem.data = refCacheItem.data.filter(function(ref) {
			return ref !== stateRef;
		});
	});
	/**
	* Revalidate when key dependencies change
	*/
	try {
		watch(keyRef, function(val) {
			if (!isReadonly(keyRef)) keyRef.value = val;
			stateRef.key = val;
			stateRef.isValidating = Boolean(val);
			setRefCache(keyRef.value, stateRef, ttl, refsCache);
			if (!IS_SERVER && !isHydrated && keyRef.value) revalidate();
			isHydrated = false;
		}, { immediate: true });
	} catch (_a) {}
	return __assign(__assign({}, toRefs(stateRef)), { mutate: function(data, opts) {
		return revalidate(data, __assign(__assign({}, opts), { forceRevalidate: true }));
	} });
}
function isPromise(p) {
	return p !== null && typeof p === "object" && typeof p.then === "function";
}
//#endregion
//#region node_modules/swrv/esm/index.js
var esm_default = useSWRV$1;
esm_default.default;
var VueChatState = class {
	constructor(messages) {
		this.statusRef = ref("ready");
		this.errorRef = ref(void 0);
		this.pushMessage = (message) => {
			this.messagesRef.value = [...this.messagesRef.value, message];
		};
		this.popMessage = () => {
			this.messagesRef.value = this.messagesRef.value.slice(0, -1);
		};
		this.replaceMessage = (index, message) => {
			this.messagesRef.value[index] = { ...message };
		};
		this.snapshot = (value) => value;
		this.messagesRef = ref(messages != null ? messages : []);
	}
	get messages() {
		return this.messagesRef.value;
	}
	set messages(messages) {
		this.messagesRef.value = messages;
	}
	get status() {
		return this.statusRef.value;
	}
	set status(status) {
		this.statusRef.value = status;
	}
	get error() {
		return this.errorRef.value;
	}
	set error(error) {
		this.errorRef.value = error;
	}
};
var Chat = class extends AbstractChat {
	constructor({ messages, ...init }) {
		super({
			...init,
			state: new VueChatState(messages)
		});
	}
};
esm_default.default;
//#endregion
//#region node_modules/@scalar/agent-chat/node_modules/@ai-sdk/provider/dist/index.mjs
var marker$2 = "vercel.ai.error";
var symbol$3 = Symbol.for(marker$2);
var _a$3;
var _b$2;
var AISDKError = class _AISDKError extends (_b$2 = Error, _a$3 = symbol$3, _b$2) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name14, message, cause }) {
		super(message);
		this[_a$3] = true;
		this.name = name14;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$2);
	}
	static hasMarker(error, marker15) {
		const markerSymbol = Symbol.for(marker15);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$3 = "AI_APICallError";
var marker2$2 = `vercel.ai.error.${name$3}`;
var symbol2$2 = Symbol.for(marker2$2);
var _a2$2;
var _b2$1;
var APICallError = class extends (_b2$1 = AISDKError, _a2$2 = symbol2$2, _b2$1) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$3,
			message,
			cause
		});
		this[_a2$2] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2$2);
	}
};
var name2$2 = "AI_EmptyResponseBodyError";
var marker3$2 = `vercel.ai.error.${name2$2}`;
var symbol3$2 = Symbol.for(marker3$2);
var _a3$2;
var _b3$1;
var EmptyResponseBodyError = class extends (_b3$1 = AISDKError, _a3$2 = symbol3$2, _b3$1) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$2,
			message
		});
		this[_a3$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3$2);
	}
};
function getErrorMessage(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
var name3$2 = "AI_InvalidArgumentError";
var marker4$2 = `vercel.ai.error.${name3$2}`;
var symbol4$2 = Symbol.for(marker4$2);
var _a4$2;
var _b4$1;
var InvalidArgumentError = class extends (_b4$1 = AISDKError, _a4$2 = symbol4$2, _b4$1) {
	constructor({ message, cause, argument }) {
		super({
			name: name3$2,
			message,
			cause
		});
		this[_a4$2] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4$2);
	}
};
var name6$2 = "AI_JSONParseError";
var marker7$2 = `vercel.ai.error.${name6$2}`;
var symbol7$2 = Symbol.for(marker7$2);
var _a7$2;
var _b7$1;
var JSONParseError = class extends (_b7$1 = AISDKError, _a7$2 = symbol7$2, _b7$1) {
	constructor({ text, cause }) {
		super({
			name: name6$2,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
			cause
		});
		this[_a7$2] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7$2);
	}
};
var name12$1 = "AI_TypeValidationError";
var marker13$1 = `vercel.ai.error.${name12$1}`;
var symbol13$1 = Symbol.for(marker13$1);
var _a13$1;
var _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13$1 = symbol13$1, _b13) {
	constructor({ value, cause }) {
		super({
			name: name12$1,
			message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
			cause
		});
		this[_a13$1] = true;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13$1);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause }) {
		return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
			value,
			cause
		});
	}
};
//#endregion
//#region node_modules/@scalar/agent-chat/node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => ({
		...combinedHeaders,
		...currentHeaders != null ? currentHeaders : {}
	}), {});
}
function extractResponseHeaders(response) {
	return Object.fromEntries([...response.headers]);
}
var { btoa, atob: atob$1 } = globalThis;
function convertUint8ArrayToBase64(array) {
	let latin1string = "";
	for (let i = 0; i < array.length; i++) latin1string += String.fromCodePoint(array[i]);
	return btoa(latin1string);
}
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
createIdGenerator();
function isAbortError(error) {
	return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
function handleFetchError({ error, url, requestBodyValues }) {
	if (isAbortError(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	return error;
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
	var _a2, _b2, _c;
	if (globalThisAny.window) return `runtime/browser`;
	if ((_a2 = globalThisAny.navigator) == null ? void 0 : _a2.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if ((_c = (_b2 = globalThisAny.process) == null ? void 0 : _b2.versions) == null ? void 0 : _c.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function normalizeHeaders(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var VERSION$2 = "4.0.5";
var getOriginalFetch = () => globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch() }) => {
	try {
		const response = await fetch2(url, {
			method: "GET",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$2}`, getRuntimeEnvironmentUserAgent()),
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function loadOptionalSetting({ settingValue, environmentVariableName }) {
	if (typeof settingValue === "string") return settingValue;
	if (settingValue != null || typeof process === "undefined") return;
	settingValue = process.env[environmentVariableName];
	if (settingValue == null || typeof settingValue !== "string") return;
	return settingValue;
}
var suspectProtoRx = /"__proto__"\s*:/;
var suspectConstructorRx = /"constructor"\s*:/;
function _parse(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) return obj;
	return filter(obj);
}
function filter(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch (e) {
		return _parse(text);
	}
	try {
		return _parse(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		jsonSchema2.additionalProperties = false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit(definitions[key]);
	return jsonSchema2;
}
function visit(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
	...defaultOptions,
	name: options
} : {
	...defaultOptions,
	...options
};
function parseAnyDef() {
	return {};
}
function parseArrayDef(def, refs) {
	var _a2, _b2, _c;
	const res = { type: "array" };
	if (((_a2 = def.type) == null ? void 0 : _a2._def) && ((_c = (_b2 = def.type) == null ? void 0 : _b2._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) res.items = parseDef(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseBooleanDef() {
	return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
	return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item, i) => parseDateDef(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser(def);
	}
}
var integerDateParser = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max": res.maximum = check.value;
	}
	return res;
};
function parseDefaultDef(_def, refs) {
	return {
		...parseDef(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
function parseEffectsDef(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
	const allOf = [parseDef(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex = void 0;
var zodPatterns = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod": addPattern(res, zodPatterns.email, check.message, refs);
			}
			break;
		case "url":
			addFormat(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern(res, zodPatterns.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern(res, zodPatterns.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat(res, "date", check.message, refs);
			break;
		case "time":
			addFormat(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern(res, zodPatterns.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern(res, zodPatterns.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern(res, zodPatterns.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern(res, zodPatterns.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod": addPattern(res, zodPatterns.base64, check.message, refs);
			}
			break;
		case "nanoid": addPattern(res, zodPatterns.nanoid, check.message, refs);
	}
	return res;
}
function escapeLiteralCheckValue(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat(schema, value, message, refs) {
	var _a2;
	if (schema.format || ((_a2 = schema.anyOf) == null ? void 0 : _a2.some((x) => x.format))) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else schema.format = value;
}
function addPattern(schema, regex, message, refs) {
	var _a2;
	if (schema.pattern || ((_a2 = schema.allOf) == null ? void 0 : _a2.some((x) => x.pattern))) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else schema.pattern = stringifyRegExpWithFlags(regex, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
	var _a2;
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && ((_a2 = source[i + 2]) == null ? void 0 : _a2.match(/[a-z]/))) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch (e) {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef(def, refs) {
	var _a2, _b2, _c, _d, _e, _f;
	const schema = {
		type: "object",
		additionalProperties: (_a2 = parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		})) != null ? _a2 : refs.allowedAdditionalProperties
	};
	if (((_b2 = def.keyType) == null ? void 0 : _b2._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
		const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
		const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
function parseMapDef(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef(), parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef() {
	return { not: parseAnyDef() };
}
function parseNullDef() {
	return { type: "null" };
}
var primitiveMappings = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings[def.innerType._def.typeName], "null"] };
	const base = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseObjectDef(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional(propDef);
		const parsedDef = parseDef(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional(schema) {
	try {
		return schema.isOptional();
	} catch (e) {
		return true;
	}
}
var parseOptionalDef = (def, refs) => {
	var _a2;
	if (refs.currentPath.toString() === ((_a2 = refs.propertyPath) == null ? void 0 : _a2.toString())) return parseDef(def.innerType._def, refs);
	const innerSchema = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef(def.out._def, refs);
	const a = parseDef(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [a, parseDef(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			a ? "1" : "0"
		]
	})].filter((x) => x !== void 0) };
};
function parsePromiseDef(def, refs) {
	return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef() {
	return { not: parseAnyDef() };
}
function parseUnknownDef() {
	return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
	switch (typeName) {
		case ZodFirstPartyTypeKind.ZodString: return parseStringDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNumber: return parseNumberDef(def);
		case ZodFirstPartyTypeKind.ZodObject: return parseObjectDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBigInt: return parseBigintDef(def);
		case ZodFirstPartyTypeKind.ZodBoolean: return parseBooleanDef();
		case ZodFirstPartyTypeKind.ZodDate: return parseDateDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUndefined: return parseUndefinedDef();
		case ZodFirstPartyTypeKind.ZodNull: return parseNullDef();
		case ZodFirstPartyTypeKind.ZodArray: return parseArrayDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUnion:
		case ZodFirstPartyTypeKind.ZodDiscriminatedUnion: return parseUnionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodIntersection: return parseIntersectionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodTuple: return parseTupleDef(def, refs);
		case ZodFirstPartyTypeKind.ZodRecord: return parseRecordDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLiteral: return parseLiteralDef(def);
		case ZodFirstPartyTypeKind.ZodEnum: return parseEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNativeEnum: return parseNativeEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNullable: return parseNullableDef(def, refs);
		case ZodFirstPartyTypeKind.ZodOptional: return parseOptionalDef(def, refs);
		case ZodFirstPartyTypeKind.ZodMap: return parseMapDef(def, refs);
		case ZodFirstPartyTypeKind.ZodSet: return parseSetDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLazy: return () => def.getter()._def;
		case ZodFirstPartyTypeKind.ZodPromise: return parsePromiseDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNaN:
		case ZodFirstPartyTypeKind.ZodNever: return parseNeverDef();
		case ZodFirstPartyTypeKind.ZodEffects: return parseEffectsDef(def, refs);
		case ZodFirstPartyTypeKind.ZodAny: return parseAnyDef();
		case ZodFirstPartyTypeKind.ZodUnknown: return parseUnknownDef();
		case ZodFirstPartyTypeKind.ZodDefault: return parseDefaultDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBranded: return parseBrandedDef(def, refs);
		case ZodFirstPartyTypeKind.ZodReadonly: return parseReadonlyDef(def, refs);
		case ZodFirstPartyTypeKind.ZodCatch: return parseCatchDef(def, refs);
		case ZodFirstPartyTypeKind.ZodPipeline: return parsePipelineDef(def, refs);
		case ZodFirstPartyTypeKind.ZodFunction:
		case ZodFirstPartyTypeKind.ZodVoid:
		case ZodFirstPartyTypeKind.ZodSymbol: return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
	var _a2;
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = (_a2 = refs.override) == null ? void 0 : _a2.call(refs, def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
	}
};
var addMeta = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs = (options) => {
	const _options = getDefaultOptions(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name2, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name2
			],
			jsonSchema: void 0
		}]))
	};
};
var zod3ToJsonSchema = (schema, options) => {
	var _a2;
	const refs = getRefs(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name3, schema2]) => {
		var _a3;
		return {
			...acc,
			[name3]: (_a3 = parseDef(schema2._def, {
				...refs,
				currentPath: [
					...refs.basePath,
					refs.definitionPath,
					name3
				]
			}, true)) != null ? _a3 : parseAnyDef()
		};
	}, {}) : void 0;
	const name2 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
	const main = (_a2 = parseDef(schema._def, name2 === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name2
		]
	}, false)) != null ? _a2 : parseAnyDef();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name2 === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name2
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name2]: main
		}
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol = Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
	let schema;
	return () => {
		if (schema == null) schema = createSchema();
		return schema;
	};
}
function jsonSchema(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema(value) {
	return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
	return schema == null ? jsonSchema({
		properties: {},
		additionalProperties: false
	}) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" })), { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError({
				value,
				cause: result.issues
			})
		};
	} });
}
function zod3Schema(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema(() => zod3ToJsonSchema(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
	if (isZod4Schema(zodSchema2)) return zod4Schema(zodSchema2, options);
	else return zod3Schema(zodSchema2, options);
}
async function validateTypes({ value, schema }) {
	const result = await safeValidateTypes({
		value,
		schema
	});
	if (!result.success) throw TypeValidationError.wrap({
		value,
		cause: result.error
	});
	return result.value;
}
async function safeValidateTypes({ value, schema }) {
	const actualSchema = asSchema(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: result.error
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: error
			}),
			rawValue: value
		};
	}
}
async function parseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return value;
		return validateTypes({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) throw error;
		throw new JSONParseError({
			text,
			cause: error
		});
	}
}
async function safeParseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError.isInstance(error) ? error : new JSONParseError({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function parseJsonEventStream({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON({
			text: data,
			schema
		}));
	} }));
}
var getOriginalFetch2 = () => globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 }) => postToApi({
	url,
	headers: {
		"Content-Type": "application/json",
		...headers
	},
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch: fetch2
});
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2() }) => {
	try {
		const response = await fetch2(url, {
			method: "POST",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$2}`, getRuntimeEnvironmentUserAgent()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool(tool2) {
	return tool2;
}
function createProviderToolFactoryWithOutputSchema({ id, inputSchema, outputSchema, supportsDeferredResults }) {
	return ({ execute, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable,
		supportsDeferredResults
	});
}
async function resolve(value) {
	if (typeof value === "function") value = value();
	return Promise.resolve(value);
}
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const responseHeaders = extractResponseHeaders(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable == null ? void 0 : isRetryable(response)
		})
	};
	try {
		const parsedError = await parseJSON({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
			})
		};
	} catch (parseError) {
		return {
			responseHeaders,
			value: new APICallError({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response)
			})
		};
	}
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonEventStream({
			stream: response.body,
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const parsedResult = await safeParseJSON({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders(response);
	if (!parsedResult.success) throw new APICallError({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
function withoutTrailingSlash(url) {
	return url == null ? void 0 : url.replace(/\/$/, "");
}
//#endregion
//#region node_modules/@scalar/agent-chat/node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var get_context_exports = {};
	__export(get_context_exports, {
		SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
		getContext: () => getContext
	});
	module.exports = __toCommonJS(get_context_exports);
	var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
	function getContext() {
		return globalThis[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
	}
	0 && (module.exports = {
		SYMBOL_FOR_REQ_CONTEXT,
		getContext
	});
}));
//#endregion
//#region node_modules/@scalar/agent-chat/node_modules/@ai-sdk/gateway/dist/index.mjs
var import_index_browser = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_browser_exports = {};
	__export(index_browser_exports, {
		getContext: () => import_get_context.getContext,
		getVercelOidcToken: () => getVercelOidcToken,
		getVercelOidcTokenSync: () => getVercelOidcTokenSync
	});
	module.exports = __toCommonJS(index_browser_exports);
	var import_get_context = require_get_context();
	async function getVercelOidcToken() {
		return "";
	}
	function getVercelOidcTokenSync() {
		return "";
	}
	0 && (module.exports = {
		getContext,
		getVercelOidcToken,
		getVercelOidcTokenSync
	});
})))();
var symbol$1 = Symbol.for("vercel.ai.gateway.error");
var _a$1;
var _b;
var GatewayError = class _GatewayError extends (_b = Error, _a$1 = symbol$1, _b) {
	constructor({ message, statusCode = 500, cause }) {
		super(message);
		this[_a$1] = true;
		this.statusCode = statusCode;
		this.cause = cause;
	}
	/**
	* Checks if the given error is a Gateway Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is a Gateway Error, false otherwise.
	*/
	static isInstance(error) {
		return _GatewayError.hasMarker(error);
	}
	static hasMarker(error) {
		return typeof error === "object" && error !== null && symbol$1 in error && error[symbol$1] === true;
	}
};
var name$1 = "GatewayAuthenticationError";
var marker2$1 = `vercel.ai.gateway.error.${name$1}`;
var symbol2$1 = Symbol.for(marker2$1);
var _a2$1;
var _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2 = GatewayError, _a2$1 = symbol2$1, _b2) {
	constructor({ message = "Authentication failed", statusCode = 401, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a2$1] = true;
		this.name = name$1;
		this.type = "authentication_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol2$1 in error;
	}
	/**
	* Creates a contextual error message when authentication fails
	*/
	static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause }) {
		let contextualMessage;
		if (apiKeyProvided) contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
		else if (oidcTokenProvided) contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
		else contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
		return new _GatewayAuthenticationError({
			message: contextualMessage,
			statusCode,
			cause
		});
	}
};
var name2$1 = "GatewayInvalidRequestError";
var marker3$1 = `vercel.ai.gateway.error.${name2$1}`;
var symbol3$1 = Symbol.for(marker3$1);
var _a3$1;
var _b3;
var GatewayInvalidRequestError = class extends (_b3 = GatewayError, _a3$1 = symbol3$1, _b3) {
	constructor({ message = "Invalid request", statusCode = 400, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a3$1] = true;
		this.name = name2$1;
		this.type = "invalid_request_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol3$1 in error;
	}
};
var name3$1 = "GatewayRateLimitError";
var marker4$1 = `vercel.ai.gateway.error.${name3$1}`;
var symbol4$1 = Symbol.for(marker4$1);
var _a4$1;
var _b4;
var GatewayRateLimitError = class extends (_b4 = GatewayError, _a4$1 = symbol4$1, _b4) {
	constructor({ message = "Rate limit exceeded", statusCode = 429, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a4$1] = true;
		this.name = name3$1;
		this.type = "rate_limit_exceeded";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol4$1 in error;
	}
};
var name4$1 = "GatewayModelNotFoundError";
var marker5$1 = `vercel.ai.gateway.error.${name4$1}`;
var symbol5$1 = Symbol.for(marker5$1);
var modelNotFoundParamSchema = lazySchema(() => zodSchema(object$2({ modelId: string() })));
var _a5$1;
var _b5;
var GatewayModelNotFoundError = class extends (_b5 = GatewayError, _a5$1 = symbol5$1, _b5) {
	constructor({ message = "Model not found", statusCode = 404, modelId, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a5$1] = true;
		this.name = name4$1;
		this.type = "model_not_found";
		this.modelId = modelId;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol5$1 in error;
	}
};
var name5$1 = "GatewayInternalServerError";
var marker6$1 = `vercel.ai.gateway.error.${name5$1}`;
var symbol6$1 = Symbol.for(marker6$1);
var _a6$1;
var _b6;
var GatewayInternalServerError = class extends (_b6 = GatewayError, _a6$1 = symbol6$1, _b6) {
	constructor({ message = "Internal server error", statusCode = 500, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a6$1] = true;
		this.name = name5$1;
		this.type = "internal_server_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol6$1 in error;
	}
};
var name6$1 = "GatewayResponseError";
var marker7$1 = `vercel.ai.gateway.error.${name6$1}`;
var symbol7$1 = Symbol.for(marker7$1);
var _a7$1;
var _b7;
var GatewayResponseError = class extends (_b7 = GatewayError, _a7$1 = symbol7$1, _b7) {
	constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause } = {}) {
		super({
			message,
			statusCode,
			cause
		});
		this[_a7$1] = true;
		this.name = name6$1;
		this.type = "response_error";
		this.response = response;
		this.validationError = validationError;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol7$1 in error;
	}
};
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
	const parseResult = await safeValidateTypes({
		value: response,
		schema: gatewayErrorResponseSchema
	});
	if (!parseResult.success) return new GatewayResponseError({
		message: `Invalid error response format: ${defaultMessage}`,
		statusCode,
		response,
		validationError: parseResult.error,
		cause
	});
	const validatedResponse = parseResult.value;
	const errorType = validatedResponse.error.type;
	const message = validatedResponse.error.message;
	switch (errorType) {
		case "authentication_error": return GatewayAuthenticationError.createContextualError({
			apiKeyProvided: authMethod === "api-key",
			oidcTokenProvided: authMethod === "oidc",
			statusCode,
			cause
		});
		case "invalid_request_error": return new GatewayInvalidRequestError({
			message,
			statusCode,
			cause
		});
		case "rate_limit_exceeded": return new GatewayRateLimitError({
			message,
			statusCode,
			cause
		});
		case "model_not_found": {
			const modelResult = await safeValidateTypes({
				value: validatedResponse.error.param,
				schema: modelNotFoundParamSchema
			});
			return new GatewayModelNotFoundError({
				message,
				statusCode,
				modelId: modelResult.success ? modelResult.value.modelId : void 0,
				cause
			});
		}
		case "internal_server_error": return new GatewayInternalServerError({
			message,
			statusCode,
			cause
		});
		default: return new GatewayInternalServerError({
			message,
			statusCode,
			cause
		});
	}
}
var gatewayErrorResponseSchema = lazySchema(() => zodSchema(object$2({ error: object$2({
	message: string(),
	type: string().nullish(),
	param: unknown().nullish(),
	code: union([string(), number()]).nullish()
}) })));
function asGatewayError(error, authMethod) {
	var _a8;
	if (GatewayError.isInstance(error)) return error;
	if (APICallError.isInstance(error)) return createGatewayErrorFromResponse({
		response: extractApiCallResponse(error),
		statusCode: (_a8 = error.statusCode) != null ? _a8 : 500,
		defaultMessage: "Gateway request failed",
		cause: error,
		authMethod
	});
	return createGatewayErrorFromResponse({
		response: {},
		statusCode: 500,
		defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
		cause: error,
		authMethod
	});
}
function extractApiCallResponse(error) {
	if (error.data !== void 0) return error.data;
	if (error.responseBody != null) try {
		return JSON.parse(error.responseBody);
	} catch (e) {
		return error.responseBody;
	}
	return {};
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
	const result = await safeValidateTypes({
		value: headers[GATEWAY_AUTH_METHOD_HEADER],
		schema: gatewayAuthMethodSchema
	});
	return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = lazySchema(() => zodSchema(union([literal("api-key"), literal("oidc")])));
var GatewayFetchMetadata = class {
	constructor(config) {
		this.config = config;
	}
	async getAvailableModels() {
		try {
			const { value } = await getFromApi({
				url: `${this.config.baseURL}/config`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayAvailableModelsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
	async getCredits() {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/credits`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayCreditsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayAvailableModelsResponseSchema = lazySchema(() => zodSchema(object$2({ models: array$2(object$2({
	id: string(),
	name: string(),
	description: string().nullish(),
	pricing: object$2({
		input: string(),
		output: string(),
		input_cache_read: string().nullish(),
		input_cache_write: string().nullish()
	}).transform(({ input, output, input_cache_read, input_cache_write }) => ({
		input,
		output,
		...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
		...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
	})).nullish(),
	specification: object$2({
		specificationVersion: literal("v3"),
		provider: string(),
		modelId: string()
	}),
	modelType: _enum([
		"language",
		"embedding",
		"image"
	]).nullish()
})) })));
var gatewayCreditsResponseSchema = lazySchema(() => zodSchema(object$2({
	balance: string(),
	total_used: string()
}).transform(({ balance, total_used }) => ({
	balance,
	totalUsed: total_used
}))));
var GatewayLanguageModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.supportedUrls = { "*/*": [/.*/] };
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs(options) {
		const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
		return {
			args: this.maybeEncodeFileParts(optionsWithoutSignal),
			warnings: []
		};
	}
	async doGenerate(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue: rawResponse } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createJsonResponseHandler(any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				...responseBody,
				request: { body: args },
				response: {
					headers: responseHeaders,
					body: rawResponse
				},
				warnings
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	async doStream(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { value: response, responseHeaders } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createEventSourceResponseHandler(any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				stream: response.pipeThrough(new TransformStream({
					start(controller) {
						if (warnings.length > 0) controller.enqueue({
							type: "stream-start",
							warnings
						});
					},
					transform(chunk, controller) {
						if (chunk.success) {
							const streamPart = chunk.value;
							if (streamPart.type === "raw" && !options.includeRawChunks) return;
							if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") streamPart.timestamp = new Date(streamPart.timestamp);
							controller.enqueue(streamPart);
						} else controller.error(chunk.error);
					}
				})),
				request: { body: args },
				response: { headers: responseHeaders }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	isFilePart(part) {
		return part && typeof part === "object" && "type" in part && part.type === "file";
	}
	/**
	* Encodes file parts in the prompt to base64. Mutates the passed options
	* instance directly to avoid copying the file data.
	* @param options - The options to encode.
	* @returns The options with the file parts encoded.
	*/
	maybeEncodeFileParts(options) {
		for (const message of options.prompt) for (const part of message.content) if (this.isFilePart(part)) {
			const filePart = part;
			if (filePart.data instanceof Uint8Array) {
				const buffer = Uint8Array.from(filePart.data);
				const base64Data = Buffer.from(buffer).toString("base64");
				filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
			}
		}
		return options;
	}
	getUrl() {
		return `${this.config.baseURL}/language-model`;
	}
	getModelConfigHeaders(modelId, streaming) {
		return {
			"ai-language-model-specification-version": "3",
			"ai-language-model-id": modelId,
			"ai-language-model-streaming": String(streaming)
		};
	}
};
var GatewayEmbeddingModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxEmbeddingsPerCall = 2048;
		this.supportsParallelCalls = true;
	}
	get provider() {
		return this.config.provider;
	}
	async doEmbed({ values, headers, abortSignal, providerOptions }) {
		var _a8;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					values,
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayEmbeddingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				embeddings: responseBody.embeddings,
				usage: (_a8 = responseBody.usage) != null ? _a8 : void 0,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/embedding-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-embedding-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayEmbeddingResponseSchema = lazySchema(() => zodSchema(object$2({
	embeddings: array$2(array$2(number())),
	usage: object$2({ tokens: number() }).nullish(),
	providerMetadata: record(string(), record(string(), unknown())).optional()
})));
var GatewayImageModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, size, aspectRatio, seed, files, mask, providerOptions, headers, abortSignal }) {
		var _a8;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					prompt,
					n,
					...size && { size },
					...aspectRatio && { aspectRatio },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...files && { files: files.map((file) => maybeEncodeImageFile(file)) },
					...mask && { mask: maybeEncodeImageFile(mask) }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayImageResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				images: responseBody.images,
				warnings: (_a8 = responseBody.warnings) != null ? _a8 : [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				}
			};
		} catch (error) {
			throw asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/image-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-image-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeImageFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema = object$2({ images: array$2(unknown()).optional() }).catchall(unknown());
var gatewayImageResponseSchema = object$2({
	images: array$2(string()),
	warnings: array$2(object$2({
		type: literal("other"),
		message: string()
	})).optional(),
	providerMetadata: record(string(), providerMetadataEntrySchema).optional()
});
var perplexitySearchToolFactory = createProviderToolFactoryWithOutputSchema({
	id: "gateway.perplexity_search",
	inputSchema: lazySchema(() => zodSchema(object$2({
		query: union([string(), array$2(string())]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
		max_results: number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
		max_tokens_per_page: number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
		max_tokens: number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
		country: string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
		search_domain_filter: array$2(string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
		search_language_filter: array$2(string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
		search_after_date: string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		search_before_date: string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		last_updated_after_filter: string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		last_updated_before_filter: string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		search_recency_filter: _enum([
			"day",
			"week",
			"month",
			"year"
		]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
	}))),
	outputSchema: lazySchema(() => zodSchema(union([object$2({
		results: array$2(object$2({
			title: string(),
			url: string(),
			snippet: string(),
			date: string().optional(),
			lastUpdated: string().optional()
		})),
		id: string()
	}), object$2({
		error: _enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"unknown"
		]),
		statusCode: number().optional(),
		message: string()
	})])))
});
var perplexitySearch = (config = {}) => perplexitySearchToolFactory(config);
var gatewayTools = { 
/**
* Search the web using Perplexity's Search API for real-time information,
* news, research papers, and articles.
*
* Provides ranked search results with advanced filtering options including
* domain, language, date range, and recency filters.
*/
perplexitySearch };
async function getVercelRequestId() {
	var _a8;
	return (_a8 = (0, import_index_browser.getContext)().headers) == null ? void 0 : _a8["x-vercel-id"];
}
var VERSION$1 = "3.0.13";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
	var _a8, _b8;
	let pendingMetadata = null;
	let metadataCache = null;
	const cacheRefreshMillis = (_a8 = options.metadataCacheRefreshMillis) != null ? _a8 : 3e5;
	let lastFetchTime = 0;
	const baseURL = (_b8 = withoutTrailingSlash(options.baseURL)) != null ? _b8 : "https://ai-gateway.vercel.sh/v3/ai";
	const getHeaders = async () => {
		try {
			const auth = await getGatewayAuthToken(options);
			return withUserAgentSuffix({
				Authorization: `Bearer ${auth.token}`,
				"ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
				[GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
				...options.headers
			}, `ai-sdk/gateway/${VERSION$1}`);
		} catch (error) {
			throw GatewayAuthenticationError.createContextualError({
				apiKeyProvided: false,
				oidcTokenProvided: false,
				statusCode: 401,
				cause: error
			});
		}
	};
	const createO11yHeaders = () => {
		const deploymentId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_DEPLOYMENT_ID"
		});
		const environment = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_ENV"
		});
		const region = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_REGION"
		});
		return async () => {
			const requestId = await getVercelRequestId();
			return {
				...deploymentId && { "ai-o11y-deployment-id": deploymentId },
				...environment && { "ai-o11y-environment": environment },
				...region && { "ai-o11y-region": region },
				...requestId && { "ai-o11y-request-id": requestId }
			};
		};
	};
	const createLanguageModel = (modelId) => {
		return new GatewayLanguageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const getAvailableModels = async () => {
		var _a9, _b9, _c;
		const now = (_c = (_b9 = (_a9 = options._internal) == null ? void 0 : _a9.currentDate) == null ? void 0 : _b9.call(_a9).getTime()) != null ? _c : Date.now();
		if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
			lastFetchTime = now;
			pendingMetadata = new GatewayFetchMetadata({
				baseURL,
				headers: getHeaders,
				fetch: options.fetch
			}).getAvailableModels().then((metadata) => {
				metadataCache = metadata;
				return metadata;
			}).catch(async (error) => {
				throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
			});
		}
		return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
	};
	const getCredits = async () => {
		return new GatewayFetchMetadata({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getCredits().catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const provider = function(modelId) {
		if (new.target) throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
		return createLanguageModel(modelId);
	};
	provider.specificationVersion = "v3";
	provider.getAvailableModels = getAvailableModels;
	provider.getCredits = getCredits;
	provider.imageModel = (modelId) => {
		return new GatewayImageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.languageModel = createLanguageModel;
	const createEmbeddingModel = (modelId) => {
		return new GatewayEmbeddingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.embeddingModel = createEmbeddingModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.tools = gatewayTools;
	return provider;
}
createGatewayProvider();
async function getGatewayAuthToken(options) {
	const apiKey = loadOptionalSetting({
		settingValue: options.apiKey,
		environmentVariableName: "AI_GATEWAY_API_KEY"
	});
	if (apiKey) return {
		token: apiKey,
		authMethod: "api-key"
	};
	return {
		token: await (0, import_index_browser.getVercelOidcToken)(),
		authMethod: "oidc"
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/node_modules/ai/dist/index.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name16 in all) __defProp(target, name16, {
		get: all[name16],
		enumerable: true
	});
};
var name7 = "AI_NoObjectGeneratedError";
var marker7 = `vercel.ai.error.${name7}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var NoObjectGeneratedError = class extends AISDKError {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name7,
			message,
			cause
		});
		this[_a7] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7);
	}
};
_a7 = symbol7;
var VERSION = "6.0.33";
var dataContentSchema = union([
	string(),
	_instanceof(Uint8Array),
	_instanceof(ArrayBuffer),
	custom((value) => {
		var _a16, _b;
		return (_b = (_a16 = globalThis.Buffer) == null ? void 0 : _a16.isBuffer(value)) != null ? _b : false;
	}, { message: "Must be a Buffer" })
]);
var jsonValueSchema = lazy(() => union([
	_null(),
	string(),
	number(),
	boolean(),
	record(string(), jsonValueSchema.optional()),
	array$2(jsonValueSchema)
]));
var providerMetadataSchema = record(string(), record(string(), jsonValueSchema.optional()));
var textPartSchema = object$2({
	type: literal("text"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = object$2({
	type: literal("image"),
	image: union([dataContentSchema, _instanceof(URL)]),
	mediaType: string().optional(),
	providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = object$2({
	type: literal("file"),
	data: union([dataContentSchema, _instanceof(URL)]),
	filename: string().optional(),
	mediaType: string(),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = object$2({
	type: literal("reasoning"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = object$2({
	type: literal("tool-call"),
	toolCallId: string(),
	toolName: string(),
	input: unknown(),
	providerOptions: providerMetadataSchema.optional(),
	providerExecuted: boolean().optional()
});
var outputSchema = discriminatedUnion("type", [
	object$2({
		type: literal("text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$2({
		type: literal("json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$2({
		type: literal("execution-denied"),
		reason: string().optional(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$2({
		type: literal("error-text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$2({
		type: literal("error-json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$2({
		type: literal("content"),
		value: array$2(union([
			object$2({
				type: literal("text"),
				text: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("media"),
				data: string(),
				mediaType: string()
			}),
			object$2({
				type: literal("file-data"),
				data: string(),
				mediaType: string(),
				filename: string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("file-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("image-data"),
				data: string(),
				mediaType: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("image-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("image-file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$2({
				type: literal("custom"),
				providerOptions: providerMetadataSchema.optional()
			})
		]))
	})
]);
var toolResultPartSchema = object$2({
	type: literal("tool-result"),
	toolCallId: string(),
	toolName: string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = object$2({
	type: literal("tool-approval-request"),
	approvalId: string(),
	toolCallId: string()
});
var toolApprovalResponseSchema = object$2({
	type: literal("tool-approval-response"),
	approvalId: string(),
	approved: boolean(),
	reason: string().optional()
});
var systemModelMessageSchema = object$2({
	role: literal("system"),
	content: string(),
	providerOptions: providerMetadataSchema.optional()
});
var userModelMessageSchema = object$2({
	role: literal("user"),
	content: union([string(), array$2(union([
		textPartSchema,
		imagePartSchema,
		filePartSchema
	]))]),
	providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = object$2({
	role: literal("assistant"),
	content: union([string(), array$2(union([
		textPartSchema,
		filePartSchema,
		reasoningPartSchema,
		toolCallPartSchema,
		toolResultPartSchema,
		toolApprovalRequestSchema
	]))]),
	providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = object$2({
	role: literal("tool"),
	content: array$2(union([toolResultPartSchema, toolApprovalResponseSchema])),
	providerOptions: providerMetadataSchema.optional()
});
union([
	systemModelMessageSchema,
	userModelMessageSchema,
	assistantModelMessageSchema,
	toolModelMessageSchema
]);
__export({}, {
	array: () => array,
	choice: () => choice,
	json: () => json,
	object: () => object,
	text: () => text
});
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				lastValidIndex = i;
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default: stack.pop();
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object = ({ schema: inputSchema, name: name16, description }) => {
	const schema = asSchema(inputSchema);
	return {
		name: "object",
		responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
			type: "json",
			schema: jsonSchema2,
			...name16 != null && { name: name16 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const validationResult = await safeValidateTypes({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array = ({ element: inputElementSchema, name: name16, description }) => {
	const elementSchema = asSchema(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
			const { $schema, ...itemSchema } = jsonSchema2;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name16 != null && { name: name16 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context.response,
					usage: context.usage,
					finishReason: context.finishReason
				});
			}
			return outerValue.elements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) controller.enqueue(partialOutput[publishedElements]);
			} });
		}
	};
};
var choice = ({ options: choiceOptions, name: name16, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name16 != null && { name: name16 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json = ({ name: name16, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name16 != null && { name: name16 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
TransformStream;
var uiMessageChunkSchema = lazySchema(() => zodSchema(union([
	strictObject({
		type: literal("text-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("error"),
		errorText: string()
	}),
	strictObject({
		type: literal("tool-input-start"),
		toolCallId: string(),
		toolName: string(),
		providerExecuted: boolean().optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-delta"),
		toolCallId: string(),
		inputTextDelta: string()
	}),
	strictObject({
		type: literal("tool-input-available"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-error"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional(),
		errorText: string(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-approval-request"),
		approvalId: string(),
		toolCallId: string()
	}),
	strictObject({
		type: literal("tool-output-available"),
		toolCallId: string(),
		output: unknown(),
		providerExecuted: boolean().optional(),
		dynamic: boolean().optional(),
		preliminary: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-error"),
		toolCallId: string(),
		errorText: string(),
		providerExecuted: boolean().optional(),
		dynamic: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-denied"),
		toolCallId: string()
	}),
	strictObject({
		type: literal("reasoning-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-url"),
		sourceId: string(),
		url: string(),
		title: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-document"),
		sourceId: string(),
		mediaType: string(),
		title: string(),
		filename: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("file"),
		url: string(),
		mediaType: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: string().optional(),
		data: unknown(),
		transient: boolean().optional()
	}),
	strictObject({ type: literal("start-step") }),
	strictObject({ type: literal("finish-step") }),
	strictObject({
		type: literal("start"),
		messageId: string().optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("finish"),
		finishReason: _enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"other"
		]).optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("abort"),
		reason: string().optional()
	}),
	strictObject({
		type: literal("message-metadata"),
		messageMetadata: unknown()
	})
])));
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
var HttpChatTransport = class {
	constructor({ api = "/api/chat", credentials, headers, body, fetch: fetch2, prepareSendMessagesRequest, prepareReconnectToStreamRequest }) {
		this.api = api;
		this.credentials = credentials;
		this.headers = headers;
		this.body = body;
		this.fetch = fetch2;
		this.prepareSendMessagesRequest = prepareSendMessagesRequest;
		this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
	}
	async sendMessages({ abortSignal, ...options }) {
		var _a16, _b, _c, _d, _e;
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await ((_a16 = this.prepareSendMessagesRequest) == null ? void 0 : _a16.call(this, {
			api: this.api,
			id: options.chatId,
			messages: options.messages,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata,
			trigger: options.trigger,
			messageId: options.messageId
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : this.api;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const body = (preparedRequest == null ? void 0 : preparedRequest.body) !== void 0 ? preparedRequest.body : {
			...resolvedBody,
			...options.body,
			id: options.chatId,
			messages: options.messages,
			trigger: options.trigger,
			messageId: options.messageId
		};
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "POST",
			headers: withUserAgentSuffix({
				"Content-Type": "application/json",
				...headers
			}, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			body: JSON.stringify(body),
			credentials,
			signal: abortSignal
		});
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
	async reconnectToStream(options) {
		var _a16, _b, _c, _d, _e;
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await ((_a16 = this.prepareReconnectToStreamRequest) == null ? void 0 : _a16.call(this, {
			api: this.api,
			id: options.chatId,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata
		}));
		const api = (_b = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b : `${this.api}/${options.chatId}/stream`;
		const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
		const response = await ((_d = this.fetch) != null ? _d : globalThis.fetch)(api, {
			method: "GET",
			headers: withUserAgentSuffix(headers, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			credentials
		});
		if (response.status === 204) return null;
		if (!response.ok) throw new Error((_e = await response.text()) != null ? _e : "Failed to fetch the chat response.");
		if (!response.body) throw new Error("The response body is empty.");
		return this.processResponseStream(response.body);
	}
};
var DefaultChatTransport = class extends HttpChatTransport {
	constructor(options = {}) {
		super(options);
	}
	processResponseStream(stream) {
		return parseJsonEventStream({
			stream,
			schema: uiMessageChunkSchema
		}).pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (!chunk.success) throw chunk.error;
			controller.enqueue(chunk.value);
		} }));
	}
};
function lastAssistantMessageIsCompleteWithToolCalls({ messages }) {
	const message = messages[messages.length - 1];
	if (!message) return false;
	if (message.role !== "assistant") return false;
	const lastStepStartIndex = message.parts.reduce((lastIndex, part, index) => {
		return part.type === "step-start" ? index : lastIndex;
	}, -1);
	const lastStepToolInvocations = message.parts.slice(lastStepStartIndex + 1).filter(isToolUIPart).filter((part) => !part.providerExecuted);
	return lastStepToolInvocations.length > 0 && lastStepToolInvocations.every((part) => part.state === "output-available" || part.state === "output-error");
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/state/state.js
var STATE_SYMBOL = Symbol("STATE_SYMBOL");
var { toast } = useToasts();
function createChat({ registryDocuments, workspaceStore, baseUrl, proxyUrl, getAccessToken, getAgentKey }) {
	const chat = new Chat({
		sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
		transport: new DefaultChatTransport({
			api: `${baseUrl}/vector/openapi/chat`,
			headers: () => createAuthorizationHeaders({
				getAccessToken,
				getAgentKey
			}),
			body: () => ({ registryDocuments: registryDocuments.value })
		}),
		async onToolCall({ toolCall }) {
			if (toolCall.dynamic) return;
			if (toolCall.toolName === "execute-request" && toolCall.input.method.toLowerCase() === "get") await executeRequestTool({
				documentSettings: createDocumentSettings(workspaceStore),
				input: toolCall.input,
				toolCallId: toolCall.toolCallId,
				chat,
				proxyUrl: proxyUrl.value
			});
		}
	});
	return chat;
}
function createState({ initialRegistryDocuments, registryUrl, dashboardUrl, platformProxyUrl, baseUrl, mode, isLoggedIn, getAccessToken, getAgentKey, getActiveDocumentJson, prefilledMessageRef, hideAddApi }) {
	const prompt = ref(prefilledMessageRef?.value ?? "");
	const registryDocuments = ref([]);
	const pendingDocuments = reactive({});
	const curatedDocuments = ref([]);
	const proxyUrlRaw = ref(URLS.DEFAULT_PROXY_URL);
	const proxyUrl = computed(() => proxyUrlRaw.value?.trim() || URLS.DEFAULT_PROXY_URL);
	const uploadedTmpDocumentUrl = ref();
	const terms = useTermsAndConditions();
	const eventBus = createWorkspaceEventBus();
	const workspaceStore = createWorkspaceStore({ plugins: [persistencePlugin({ persistAuth: true })] });
	const config = computed(() => coerce(apiReferenceConfigurationSchema, {
		proxyUrl: proxyUrl.value,
		persistAuth: true
	}));
	const chat = createChat({
		registryDocuments,
		workspaceStore,
		baseUrl,
		proxyUrl,
		getAccessToken,
		getAgentKey
	});
	const api = createApi({
		baseUrl,
		getAccessToken,
		getAgentKey
	});
	const loading = computed(() => chat.status === "submitted" || chat.status === "streaming" && !chat.lastMessage?.parts.some((part) => part.type === "text"));
	watch(() => chat.status, () => {
		if (chat.status === "streaming") prompt.value = "";
	});
	if (prefilledMessageRef) watch(prefilledMessageRef, async (val) => {
		if (val) {
			prompt.value = val;
			if (terms.accepted.value) await chat.sendMessage({ text: prompt.value });
		}
	});
	const settingsModal = useModal();
	async function addDocument({ namespace, slug, removable = true, tmp = false }) {
		if (registryDocuments.value.find((doc) => doc.namespace === namespace && doc.slug === slug)) return;
		const identifier = `@${namespace}/${slug}`;
		pendingDocuments[identifier] = true;
		const loadDocumentResult = await loadDocument({
			namespace,
			slug,
			workspaceStore,
			registryUrl,
			registryDocuments,
			config: config.value,
			getAccessToken,
			api,
			removable
		});
		pendingDocuments[identifier] = false;
		if (!loadDocumentResult.success) {
			/**
			* If we are unable to load a document, we just remove it
			* from tmp local storage, do not warn the user.
			*/
			if (tmp) {
				removeTmpDocFromLocalStorage();
				throw loadDocumentResult.error;
			}
			console.warn("[AGENT]: Unable to load document", loadDocumentResult.error);
			toast(`Unable to load the document @${namespace}/${slug}`, "warn");
			throw loadDocumentResult.error;
		}
	}
	/**
	* Waits for document to be available in embeddings
	* and adds to the list
	*/
	async function addDocumentAsync({ namespace, slug, removable = true }) {
		if (registryDocuments.value.find((doc) => doc.namespace === namespace && doc.slug === slug)) return;
		const identifier = `@${namespace}/${slug}`;
		pendingDocuments[identifier] = true;
		const embeddingStatusResponse = await n.fromUnsafe(() => fetch(`${baseUrl}/vector/registry/embeddings/${namespace}/${slug}`, { method: "GET" }), (originalError) => createError("FAILED_TO_GET_EMBEDDING_STATUS", originalError));
		if (embeddingStatusResponse.success && embeddingStatusResponse.data.ok) {
			const loadDocumentResult = await loadDocument({
				namespace,
				slug,
				workspaceStore,
				registryUrl,
				registryDocuments,
				config: config.value,
				getAccessToken,
				api,
				removable
			});
			if (!loadDocumentResult.success) {
				console.warn("[AGENT]: Unable to load document", loadDocumentResult.error);
				toast(`Unable to load the document @${namespace}/${slug}`, "warn");
			}
		} else {
			console.warn("[AGENT]: Document could not be embedded");
			toast(`Unable to embed the document @${namespace}/${slug}`, "warn");
		}
		pendingDocuments[identifier] = false;
	}
	function removeDocument({ namespace, slug }) {
		registryDocuments.value = registryDocuments.value.filter((doc) => !(doc.namespace === namespace && doc.slug === slug));
		workspaceStore.deleteDocument(createDocumentName(namespace, slug));
	}
	initialRegistryDocuments.forEach(({ namespace, slug }) => addDocument({
		namespace,
		slug,
		removable: false
	}));
	return {
		prompt,
		chat,
		workspaceStore,
		eventBus,
		loading,
		settingsModal,
		config,
		registryUrl,
		dashboardUrl,
		platformProxyUrl,
		baseUrl,
		registryDocuments,
		pendingDocuments,
		proxyUrl,
		proxyUrlRaw,
		mode,
		terms,
		isLoggedIn,
		addDocument,
		addDocumentAsync,
		removeDocument,
		getAccessToken,
		getAgentKey,
		api,
		uploadedTmpDocumentUrl,
		curatedDocuments,
		getActiveDocumentJson,
		hideAddApi
	};
}
function useState() {
	const state = inject(STATE_SYMBOL);
	if (!state) throw new Error("No state provided.");
	return state;
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-agent-key-documents.js
function useAgentKeyDocuments() {
	const { api, addDocument, mode, getAgentKey } = useState();
	const { toast } = useToasts();
	onMounted(async () => {
		if (mode !== "full" || !getAgentKey) return;
		const keyDocumentsResult = await api.getKeyDocuments();
		if (!keyDocumentsResult.success) {
			toast("Failed to fetch your OpenAPI document. The Agent key may be invalid.", "error");
			return;
		}
		keyDocumentsResult.data.documents.forEach(({ namespace, slug }) => addDocument({
			namespace,
			slug,
			removable: false
		}));
	});
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-chat-scroll.js
function useChatScroll() {
	const state = useState();
	function getMsgContent(msg) {
		const lastPart = msg?.parts.at(-1);
		if (!lastPart) return;
		if (lastPart.type !== "text") return;
		return lastPart.text;
	}
	watch([() => state.chat.status, () => getMsgContent(state.chat.lastMessage)], async () => {
		await nextTick();
		window.scrollTo(0, document.body.scrollHeight);
	});
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-curated-documents.js
function useCuratedDocuments() {
	const { api, curatedDocuments } = useState();
	onMounted(async () => {
		const getCuratedDocumentsResult = await api.getCuratedDocuments();
		if (!getCuratedDocumentsResult.success) return;
		curatedDocuments.value = getCuratedDocumentsResult.data.results;
	});
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/entities/tools/ask-for-authentication.js
var ASK_FOR_AUTHENTICATION_TOOL_NAME = "ask-for-authentication";
object$3({
	documentName: string$1(),
	uniqueIdentifier: string$1({ typeComment: "Needed for legacy support for old clients" })
});
object$3({ question: string$1() });
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/AuthenticationProvided.vue.js
var _sfc_main$12 = {};
var _hoisted_1$38 = { class: "authenticationProvided" };
function _sfc_render$12(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$38, [..._cache[0] || (_cache[0] = [createStaticVNode("<svg fill=\"none\" height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" data-v-e3416cd5><rect height=\"14.25\" rx=\"7.125\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-e3416cd5></rect><rect height=\"14.25\" rx=\"7.125\" stroke=\"currentColor\" stroke-width=\"1.75\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-e3416cd5></rect><g clip-path=\"url(#clip0_74_840)\" data-v-e3416cd5><path d=\"M11.6037 6.841L7.59117 10.8535C7.49742 10.9472 7.37029 10.9998 7.23774 10.9998C7.10519 10.9998 6.97806 10.9472 6.8843 10.8535L4.64617 8.6035C4.55257 8.50975 4.5 8.38269 4.5 8.25022C4.5 8.11774 4.55257 7.99068 4.64617 7.89694L5.27117 7.27194C5.36488 7.17862 5.49174 7.12623 5.62399 7.12623C5.75623 7.12623 5.88309 7.17862 5.9768 7.27194L7.25024 8.50694L10.274 5.52037C10.3677 5.42696 10.4946 5.37451 10.627 5.37451C10.7593 5.37451 10.8862 5.42696 10.9799 5.52037L11.6034 6.131C11.6502 6.17746 11.6875 6.23274 11.7129 6.29366C11.7383 6.35458 11.7514 6.41993 11.7514 6.48593C11.7514 6.55194 11.7384 6.6173 11.713 6.67824C11.6877 6.73918 11.6505 6.7945 11.6037 6.841Z\" fill=\"currentColor\" data-v-e3416cd5></path></g><defs data-v-e3416cd5><clipPath id=\"clip0_74_840\" data-v-e3416cd5><rect height=\"8\" rx=\"4\" width=\"8\" x=\"4\" y=\"4\" data-v-e3416cd5></rect></clipPath></defs></svg> Authorized ", 2)])]);
}
var AuthenticationProvided_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$12, [["render", _sfc_render$12], ["__scopeId", "data-v-e3416cd5"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/AuthenticationRequired.vue.js
var _sfc_main$11 = {};
var _hoisted_1$37 = { class: "authenticationRequired" };
function _sfc_render$11(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$37, [..._cache[0] || (_cache[0] = [createStaticVNode("<svg fill=\"none\" height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" data-v-d15ef40b><rect height=\"14.25\" rx=\"7.125\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-d15ef40b></rect><rect height=\"14.25\" rx=\"7.125\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-d15ef40b></rect><g clip-path=\"url(#clip0_74_585)\" data-v-d15ef40b><path d=\"M10.75 5.5V10.5C10.75 10.6326 10.6973 10.7598 10.6036 10.8536C10.5098 10.9473 10.3826 11 10.25 11H9C8.86739 11 8.74021 10.9473 8.64645 10.8536C8.55268 10.7598 8.5 10.6326 8.5 10.5V5.5C8.5 5.36739 8.55268 5.24021 8.64645 5.14645C8.74021 5.05268 8.86739 5 9 5H10.25C10.3826 5 10.5098 5.05268 10.6036 5.14645C10.6973 5.24021 10.75 5.36739 10.75 5.5ZM7 5H5.75C5.61739 5 5.49021 5.05268 5.39645 5.14645C5.30268 5.24021 5.25 5.36739 5.25 5.5V10.5C5.25 10.6326 5.30268 10.7598 5.39645 10.8536C5.49021 10.9473 5.61739 11 5.75 11H7C7.13261 11 7.25979 10.9473 7.35355 10.8536C7.44732 10.7598 7.5 10.6326 7.5 10.5V5.5C7.5 5.36739 7.44732 5.24021 7.35355 5.14645C7.25979 5.05268 7.13261 5 7 5Z\" fill=\"currentColor\" data-v-d15ef40b></path></g><defs data-v-d15ef40b><clipPath id=\"clip0_74_585\" data-v-d15ef40b><rect height=\"8\" rx=\"4\" width=\"8\" x=\"4\" y=\"4\" data-v-d15ef40b></rect></clipPath></defs></svg> Authentication required ", 2)])]);
}
var AuthenticationRequired_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$11, [["render", _sfc_render$11], ["__scopeId", "data-v-d15ef40b"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Settings/Auth.vue.js
var Auth_default = /* @__PURE__ */ defineComponent({
	__name: "Auth",
	props: {
		options: {},
		name: {},
		authStore: {},
		document: {},
		eventBus: {},
		selectedServer: {},
		environment: {}
	},
	setup(__props) {
		const { workspaceStore } = useState();
		/** Compute what the security requirements should be for the document */
		const securityRequirements = computed(() => getSecurityRequirements(__props.document?.security));
		/** Merge the security schemes with the authentication config and the auth store */
		const securitySchemes = computed(() => mergeSecurity(__props.document?.components?.securitySchemes ?? {}, __props.options.authentication?.securitySchemes, __props.authStore, __props.name));
		/** The selected security keys for the document */
		const selectedSecurity = computed(() => getSelectedSecurity(__props.authStore.getAuthSelectedSchemas({
			type: "document",
			documentName: __props.name
		}), void 0, securityRequirements.value, securitySchemes.value, __props.options.authentication?.preferredSecurityScheme));
		const focusRef = shallowRef();
		const { focused } = useFocusWithin(focusRef);
		watch(focused, (isFocused) => {
			if (!isFocused) return;
			workspaceStore.update("x-scalar-active-document", __props.name);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "focusRef",
				ref: focusRef,
				tabindex: "0"
			}, [Object.keys(securitySchemes.value).length ? (openBlock(), createBlock(unref(AuthSelector_default), {
				key: 0,
				authStore: __props.authStore,
				documentSlug: __props.name,
				environment: __props.environment,
				eventBus: __props.eventBus,
				isReadOnly: "",
				isStatic: "",
				layout: "reference",
				meta: { type: "document" },
				persistAuth: __props.options.persistAuth,
				proxyUrl: __props.options.proxyUrl ?? "",
				securityRequirements: securityRequirements.value,
				securitySchemes: securitySchemes.value,
				selectedSecurity: selectedSecurity.value,
				server: __props.selectedServer,
				title: "Authentication"
			}, null, 8, [
				"authStore",
				"documentSlug",
				"environment",
				"eventBus",
				"persistAuth",
				"proxyUrl",
				"securityRequirements",
				"securitySchemes",
				"selectedSecurity",
				"server"
			])) : createCommentVNode("", true)], 512);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/AskForAuthentication.vue.script.js
var _hoisted_1$36 = { class: "toggleButton" };
var _hoisted_2$17 = { class: "authContent" };
var _hoisted_3$14 = { class: "authContentInner" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/AskForAuthentication.vue.js
var AskForAuthentication_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AskForAuthentication",
	props: { messagePart: {} },
	setup(__props) {
		const { workspaceStore, eventBus, config, chat } = useState();
		const documentName = computed(() => __props.messagePart.value.input?.documentName);
		const document = computed(() => {
			if (!documentName.value) return;
			const doc = workspaceStore.workspace.documents[documentName.value];
			return isOpenApiDocument(doc) ? doc : void 0;
		});
		const environment = computed(() => {
			if (!document.value) return;
			return getActiveEnvironment(workspaceStore, document.value).environment;
		});
		const selectedServer = computed(() => {
			if (!document.value) return;
			const servers = getServers(document.value.servers, { documentUrl: document.value["x-scalar-original-source-url"] });
			return getSelectedServer(document.value, null, null, servers);
		});
		const isAuthenticationExpanded = computed(() => documentName.value && environment.value && selectedServer.value);
		async function authorizeClicked() {
			await chat.addToolOutput({
				toolCallId: __props.messagePart.value.toolCallId,
				output: "Authentication provided.",
				tool: ASK_FOR_AUTHENTICATION_TOOL_NAME,
				state: "output-available"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["askForAuthentication", { open: isAuthenticationExpanded.value }]) }, [createBaseVNode("div", _hoisted_1$36, [
				__props.messagePart.value.state === "output-available" ? (openBlock(), createBlock(AuthenticationProvided_default, { key: 0 })) : createCommentVNode("", true),
				__props.messagePart.value.state === "input-available" ? (openBlock(), createBlock(AuthenticationRequired_default, { key: 1 })) : createCommentVNode("", true),
				__props.messagePart.value.state === "input-available" ? (openBlock(), createBlock(unref(ScalarButton_default), {
					key: 2,
					class: "authorizeButton",
					size: "xs",
					onClick: authorizeClicked
				}, {
					default: withCtx(() => [_cache[0] || (_cache[0] = createTextVNode(" Authorize ", -1)), createVNode(unref(ScalarIconArrowRight_default), { weight: "bold" })]),
					_: 1
				})) : createCommentVNode("", true)
			]), createBaseVNode("div", _hoisted_2$17, [createBaseVNode("div", _hoisted_3$14, [documentName.value && document.value && environment.value && selectedServer.value ? (openBlock(), createBlock(Auth_default, {
				key: 0,
				authStore: unref(workspaceStore).auth,
				document: document.value,
				environment: environment.value,
				eventBus: unref(eventBus),
				name: documentName.value,
				options: unref(config),
				selectedServer: selectedServer.value
			}, null, 8, [
				"authStore",
				"document",
				"environment",
				"eventBus",
				"name",
				"options",
				"selectedServer"
			])) : createCommentVNode("", true)])])], 2);
		};
	}
}), [["__scopeId", "data-v-19cedfcd"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/AutosendPaused.vue.js
var _sfc_main$10 = {};
var _hoisted_1$35 = { class: "autosendPaused" };
function _sfc_render$10(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$35, [..._cache[0] || (_cache[0] = [createStaticVNode("<svg fill=\"none\" height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" data-v-d08225db><rect height=\"14.25\" rx=\"7.125\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-d08225db></rect><rect height=\"14.25\" rx=\"7.125\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-d08225db></rect><g clip-path=\"url(#clip0_74_585)\" data-v-d08225db><path d=\"M10.75 5.5V10.5C10.75 10.6326 10.6973 10.7598 10.6036 10.8536C10.5098 10.9473 10.3826 11 10.25 11H9C8.86739 11 8.74021 10.9473 8.64645 10.8536C8.55268 10.7598 8.5 10.6326 8.5 10.5V5.5C8.5 5.36739 8.55268 5.24021 8.64645 5.14645C8.74021 5.05268 8.86739 5 9 5H10.25C10.3826 5 10.5098 5.05268 10.6036 5.14645C10.6973 5.24021 10.75 5.36739 10.75 5.5ZM7 5H5.75C5.61739 5 5.49021 5.05268 5.39645 5.14645C5.30268 5.24021 5.25 5.36739 5.25 5.5V10.5C5.25 10.6326 5.30268 10.7598 5.39645 10.8536C5.49021 10.9473 5.61739 11 5.75 11H7C7.13261 11 7.25979 10.9473 7.35355 10.8536C7.44732 10.7598 7.5 10.6326 7.5 10.5V5.5C7.5 5.36739 7.44732 5.24021 7.35355 5.14645C7.25979 5.05268 7.13261 5 7 5Z\" fill=\"currentColor\" data-v-d08225db></path></g><defs data-v-d08225db><clipPath id=\"clip0_74_585\" data-v-d08225db><rect height=\"8\" rx=\"4\" width=\"8\" x=\"4\" y=\"4\" data-v-d08225db></rect></clipPath></defs></svg> Accept Request to Continue ", 2)])]);
}
var AutosendPaused_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$10, [["render", _sfc_render$10], ["__scopeId", "data-v-d08225db"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/BuildingRequest.vue.js
var _sfc_main$9 = {};
var _hoisted_1$34 = { class: "buildingRequest" };
function _sfc_render$9(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$34, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, [createBaseVNode("svg", {
		fill: "currentColor",
		height: "32",
		viewBox: "0 0 256 256",
		width: "32",
		xmlns: "http://www.w3.org/2000/svg"
	}, [createBaseVNode("path", { d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" })])], -1), createTextVNode(" Building Request... ", -1)])]);
}
var BuildingRequest_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-5a1d2b16"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/RequestApproved.vue.js
var _sfc_main$8 = {};
var _hoisted_1$33 = { class: "requestApproved" };
function _sfc_render$8(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$33, [..._cache[0] || (_cache[0] = [createStaticVNode("<svg fill=\"none\" height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" data-v-bb311586><rect height=\"14.25\" rx=\"7.125\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-bb311586></rect><rect height=\"14.25\" rx=\"7.125\" stroke=\"var(--scalar-color-green)\" stroke-width=\"1.75\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-bb311586></rect><g clip-path=\"url(#clip0_74_840)\" data-v-bb311586><path d=\"M11.6037 6.841L7.59117 10.8535C7.49742 10.9472 7.37029 10.9998 7.23774 10.9998C7.10519 10.9998 6.97806 10.9472 6.8843 10.8535L4.64617 8.6035C4.55257 8.50975 4.5 8.38269 4.5 8.25022C4.5 8.11774 4.55257 7.99068 4.64617 7.89694L5.27117 7.27194C5.36488 7.17862 5.49174 7.12623 5.62399 7.12623C5.75623 7.12623 5.88309 7.17862 5.9768 7.27194L7.25024 8.50694L10.274 5.52037C10.3677 5.42696 10.4946 5.37451 10.627 5.37451C10.7593 5.37451 10.8862 5.42696 10.9799 5.52037L11.6034 6.131C11.6502 6.17746 11.6875 6.23274 11.7129 6.29366C11.7383 6.35458 11.7514 6.41993 11.7514 6.48593C11.7514 6.55194 11.7384 6.6173 11.713 6.67824C11.6877 6.73918 11.6505 6.7945 11.6037 6.841Z\" fill=\"var(--scalar-color-green)\" data-v-bb311586></path></g><defs data-v-bb311586><clipPath id=\"clip0_74_840\" data-v-bb311586><rect height=\"8\" rx=\"4\" width=\"8\" x=\"4\" y=\"4\" data-v-bb311586></rect></clipPath></defs></svg> Request Approved ", 2)])]);
}
var RequestApproved_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-bb311586"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/RequestFailed.vue.js
var _sfc_main$7 = {};
var _hoisted_1$32 = { class: "requestFailed" };
function _sfc_render$7(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$32, [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "requestFailedIcon" }, [createBaseVNode("svg", {
		fill: "currentColor",
		height: "100%",
		viewBox: "0 0 256 256",
		width: "100%",
		xmlns: "http://www.w3.org/2000/svg"
	}, [createBaseVNode("path", { d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z" })])], -1), createTextVNode(" Request Failed ", -1)])]);
}
var RequestFailed_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-29140773"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/RequestRejected.vue.js
var _sfc_main$6 = {};
var _hoisted_1$31 = { class: "requestRejected" };
function _sfc_render$6(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$31, [..._cache[0] || (_cache[0] = [createBaseVNode("svg", {
		fill: "currentColor",
		height: "16",
		viewBox: "0 0 256 256",
		width: "16",
		xmlns: "http://www.w3.org/2000/svg"
	}, [createBaseVNode("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l7.81,8.59A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81a108.08,108.08,0,0,0,112.55-8.66l7.8,8.58a12,12,0,0,0,17.76-16.14ZM128,212a83.91,83.91,0,0,1-42-11.27,12,12,0,0,0-9.82-1l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.82,84,84,0,0,1,7.94-95.49l111.84,123A83.83,83.83,0,0,1,128,212Zm108-84a107.22,107.22,0,0,1-8.65,42.4A12,12,0,0,1,205.28,161a84.07,84.07,0,0,0-102.77-113,12,12,0,0,1-7.27-22.87A108.08,108.08,0,0,1,236,128Z" })], -1), createTextVNode(" Request Rejected ", -1)])]);
}
var RequestRejected_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-9803a54c"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/RequestSuccess.vue.js
var _sfc_main$5 = {};
var _hoisted_1$30 = { class: "requestSuccess" };
function _sfc_render$5(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$30, [..._cache[0] || (_cache[0] = [createStaticVNode("<svg fill=\"none\" height=\"16\" viewBox=\"0 0 16 16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" data-v-acc2c0d8><rect height=\"14.25\" rx=\"7.125\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-acc2c0d8></rect><rect height=\"14.25\" rx=\"7.125\" stroke=\"currentColor\" stroke-width=\"1.75\" width=\"14.25\" x=\"0.875\" y=\"0.875\" data-v-acc2c0d8></rect><g clip-path=\"url(#clip0_74_840)\" data-v-acc2c0d8><path d=\"M11.6037 6.841L7.59117 10.8535C7.49742 10.9472 7.37029 10.9998 7.23774 10.9998C7.10519 10.9998 6.97806 10.9472 6.8843 10.8535L4.64617 8.6035C4.55257 8.50975 4.5 8.38269 4.5 8.25022C4.5 8.11774 4.55257 7.99068 4.64617 7.89694L5.27117 7.27194C5.36488 7.17862 5.49174 7.12623 5.62399 7.12623C5.75623 7.12623 5.88309 7.17862 5.9768 7.27194L7.25024 8.50694L10.274 5.52037C10.3677 5.42696 10.4946 5.37451 10.627 5.37451C10.7593 5.37451 10.8862 5.42696 10.9799 5.52037L11.6034 6.131C11.6502 6.17746 11.6875 6.23274 11.7129 6.29366C11.7383 6.35458 11.7514 6.41993 11.7514 6.48593C11.7514 6.55194 11.7384 6.6173 11.713 6.67824C11.6877 6.73918 11.6505 6.7945 11.6037 6.841Z\" fill=\"currentColor\" data-v-acc2c0d8></path></g><defs data-v-acc2c0d8><clipPath id=\"clip0_74_840\" data-v-acc2c0d8><rect height=\"8\" rx=\"4\" width=\"8\" x=\"4\" y=\"4\" data-v-acc2c0d8></rect></clipPath></defs></svg> Request Succeeded ", 2)])]);
}
var RequestSuccess_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-acc2c0d8"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/helpers/media-types.js
/** Media Type (MIME Type) Definitions */
var mediaTypes = {
	"application/epub+zip": { extension: ".epub" },
	"application/gzip": { extension: ".gz" },
	"application/java-archive": { extension: ".jar" },
	"application/javascript": {
		extension: ".js",
		raw: true
	},
	"application/json": {
		extension: ".json",
		raw: true,
		language: "json"
	},
	"application/ld+json": {
		extension: ".jsonld",
		raw: true,
		language: "json"
	},
	"application/problem+json": {
		extension: ".json",
		raw: true,
		language: "json"
	},
	"application/vnd.api+json": {
		extension: ".json",
		raw: true,
		language: "json"
	},
	"application/dns-json": {
		extension: ".json",
		raw: true,
		language: "json"
	},
	"application/x-ndjson": {
		extension: ".ndjson",
		raw: true,
		language: "json"
	},
	"application/ndjson": {
		extension: ".ndjson",
		raw: true,
		language: "json"
	},
	"application/msword": { extension: ".doc" },
	"application/octet-stream": { extension: ".bin" },
	"application/ogg": { extension: ".ogx" },
	"application/pdf": {
		extension: ".pdf",
		preview: "object"
	},
	"application/rtf": {
		extension: ".rtf",
		raw: true
	},
	"application/vnd.amazon.ebook": { extension: ".azw" },
	"application/vnd.apple.installer+xml": {
		extension: ".mpkg",
		raw: true,
		language: "xml"
	},
	"application/vnd.mozilla.xul+xml": {
		extension: ".xul",
		raw: true,
		language: "xml"
	},
	"application/vnd.ms-excel": { extension: ".xls" },
	"application/vnd.ms-fontobject": { extension: ".eot" },
	"application/vnd.ms-powerpoint": { extension: ".ppt" },
	"application/vnd.oasis.opendocument.presentation": { extension: ".odp" },
	"application/vnd.oasis.opendocument.spreadsheet": { extension: ".ods" },
	"application/vnd.oasis.opendocument.text": { extension: ".odt" },
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": { extension: ".pptx" },
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { extension: ".xlsx" },
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": { extension: ".docx" },
	"application/vnd.rar": { extension: ".rar" },
	"application/vnd.visio": { extension: ".vsd" },
	"application/x-7z-compressed": { extension: ".7z" },
	"application/x-abiword": { extension: ".abw" },
	"application/x-bzip": { extension: ".bz" },
	"application/x-bzip2": { extension: ".bz2" },
	"application/x-cdf": { extension: ".cda" },
	"application/x-csh": { extension: ".csh" },
	"application/x-freearc": { extension: ".arc" },
	"application/x-httpd-php": {
		extension: ".php",
		raw: true
	},
	"application/x-sh": {
		extension: ".sh",
		raw: true
	},
	"application/x-tar": { extension: ".tar" },
	"application/xhtml+xml": {
		extension: ".xhtml",
		raw: true,
		language: "html"
	},
	"application/xml": {
		extension: ".xml",
		raw: true,
		language: "xml"
	},
	"application/yaml": {
		extension: ".yaml",
		raw: true,
		language: "yaml"
	},
	"application/zip": { extension: ".zip" },
	"audio/aac": { extension: ".aac" },
	"audio/midi": { extension: ".midi" },
	"audio/mpeg": {
		extension: ".mp3",
		preview: "audio"
	},
	"audio/ogg": { extension: ".oga" },
	"audio/wav": { extension: ".wav" },
	"audio/webm": { extension: ".weba" },
	"font/otf": { extension: ".otf" },
	"font/ttf": { extension: ".ttf" },
	"font/woff": { extension: ".woff" },
	"font/woff2": { extension: ".woff2" },
	"image/apng": {
		extension: ".apng",
		preview: "image",
		alpha: true
	},
	"image/avif": {
		extension: ".avif",
		preview: "image"
	},
	"image/bmp": {
		extension: ".bmp",
		preview: "image"
	},
	"image/gif": {
		extension: ".gif",
		preview: "image",
		alpha: true
	},
	"image/jpeg": {
		extension: ".jpg",
		preview: "image"
	},
	"image/png": {
		extension: ".png",
		preview: "image",
		alpha: true
	},
	"image/svg+xml": {
		extension: ".svg",
		raw: true,
		language: "xml",
		preview: "image",
		alpha: true
	},
	"image/tiff": { extension: ".tiff" },
	"image/vnd.microsoft.icon": {
		extension: ".ico",
		preview: "image"
	},
	"image/webp": {
		extension: ".webp",
		preview: "image",
		alpha: true
	},
	"text/calendar": {
		extension: ".ics",
		raw: true
	},
	"text/css": {
		extension: ".css",
		raw: true,
		language: "css"
	},
	"text/csv": {
		extension: ".csv",
		raw: true
	},
	"text/html": {
		extension: ".html",
		raw: true,
		language: "html",
		preview: "object"
	},
	"text/javascript": {
		extension: ".js",
		raw: true
	},
	"text/plain": {
		extension: ".txt",
		raw: true
	},
	"text/xml": {
		extension: ".xml",
		raw: true,
		language: "xml"
	},
	"text/yaml": {
		extension: ".yaml",
		raw: true,
		language: "yaml"
	},
	"video/3gpp": { extension: ".3gp" },
	"audio/3gpp": { extension: ".3gp" },
	"video/3gpp2": { extension: ".3g2" },
	"audio/3gpp2": { extension: ".3g2" },
	"video/mp2t": { extension: ".ts" },
	"video/mp4": {
		extension: ".mp4",
		preview: "video"
	},
	"video/mpeg": { extension: ".mpeg" },
	"video/ogg": { extension: ".ogv" },
	"video/webm": {
		extension: ".webm",
		preview: "video"
	},
	"video/x-msvideo": { extension: ".avi" }
};
/** Get the config for a media type */
function getMediaTypeConfig(type) {
	const config = mediaTypes[type];
	if (config) return config;
	if (type.endsWith("+json")) return {
		extension: ".json",
		raw: true,
		language: "json"
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/helpers/process-response-body.js
var decodeURIComponentSafe = (str) => {
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
};
function extractFilename(contentDisposition) {
	let filename = "";
	if (contentDisposition) {
		const fileNameMatch = contentDisposition.match(/filename\*=UTF-8''([^;]+)/)?.[1] ?? contentDisposition.match(/filename\s*=\s*"?([^";]+)"?/)?.[1];
		if (fileNameMatch) filename = decodeURIComponentSafe(fileNameMatch.trim());
	}
	return filename;
}
var isBlob = (b) => b instanceof Blob;
var getResponseHeaders = (headers) => {
	return headers ? Object.keys(headers).map((key) => ({
		name: key,
		value: headers[key] ?? ""
	})) : [];
};
function processResponseBody({ data, headers }) {
	const responseHeaders = getResponseHeaders(headers);
	const contentType = responseHeaders.find((header) => header.name.toLowerCase() === "content-type");
	const mimeType = contentType?.value ? parseMimeType(contentType.value) : void 0;
	return {
		mimeType,
		attachmentFilename: extractFilename(responseHeaders.find((header) => header.name.toLowerCase() === "content-disposition")?.value ?? ""),
		dataUrl: (() => {
			if (isBlob(data)) return URL.createObjectURL(data);
			if (typeof data === "string") return URL.createObjectURL(new Blob([data], { type: mimeType ? mimeType.toString() : void 0 }));
			if (data instanceof Object && Object.keys(data).length) return URL.createObjectURL(new Blob([JSON.stringify(data)], { type: mimeType ? mimeType.toString() : void 0 }));
			return "";
		})()
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyInfo.vue.js
var _sfc_main$4 = {};
var _hoisted_1$29 = { class: "flex justify-center px-2 py-3" };
var _hoisted_2$16 = { class: "text-c-3 p-2 text-sm" };
function _sfc_render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$29, [createBaseVNode("div", _hoisted_2$16, [renderSlot(_ctx.$slots, "default")])]);
}
var ResponseBodyInfo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["render", _sfc_render$4]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyPreview.vue.script.js
var _hoisted_1$28 = ["src"];
var _hoisted_2$15 = ["src", "type"];
var _hoisted_3$13 = ["src", "type"];
var _hoisted_4$7 = ["data", "type"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyPreview.vue.js
var ResponseBodyPreview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ResponseBodyPreview",
	props: {
		src: {},
		type: {},
		mode: {},
		alpha: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const error = ref(false);
		watch(() => __props.src, () => {
			error.value = false;
		});
		return (_ctx, _cache) => {
			return !error.value && __props.src ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(["flex justify-center overflow-auto rounded-b", { "bg-preview p-2": __props.alpha }])
			}, [__props.mode === "image" ? (openBlock(), createElementBlock("img", {
				key: 0,
				class: normalizeClass(["h-full max-w-full", { rounded: __props.alpha }]),
				src: __props.src,
				onError: _cache[0] || (_cache[0] = ($event) => error.value = true)
			}, null, 42, _hoisted_1$28)) : __props.mode === "video" ? (openBlock(), createElementBlock("video", {
				key: 1,
				autoplay: "",
				controls: "",
				width: "100%",
				onError: _cache[1] || (_cache[1] = ($event) => error.value = true)
			}, [createBaseVNode("source", {
				src: __props.src,
				type: __props.type
			}, null, 8, _hoisted_2$15)], 32)) : __props.mode === "audio" ? (openBlock(), createElementBlock("audio", {
				key: 2,
				class: "my-12",
				controls: "",
				onError: _cache[2] || (_cache[2] = ($event) => error.value = true)
			}, [createBaseVNode("source", {
				src: __props.src,
				type: __props.type
			}, null, 8, _hoisted_3$13)], 32)) : (openBlock(), createElementBlock("object", {
				key: 3,
				class: "aspect-[4/3] w-full",
				data: __props.src,
				type: __props.type,
				onError: _cache[3] || (_cache[3] = ($event) => error.value = true)
			}, null, 40, _hoisted_4$7))], 2)) : (openBlock(), createBlock(ResponseBodyInfo_default, { key: 1 }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Preview unavailable", -1)])]),
				_: 1
			}));
		};
	}
}), [["__scopeId", "data-v-92f84612"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyRaw.vue.js
var ResponseBodyRaw_default = /* @__PURE__ */ defineComponent({
	__name: "ResponseBodyRaw",
	props: {
		content: {},
		language: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarCodeBlock_default), {
				class: "codeBlock",
				content: props.content,
				lang: __props.language
			}, null, 8, ["content", "lang"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBody.vue.js
var ResponseBody_default = /* @__PURE__ */ defineComponent({
	__name: "ResponseBody",
	props: {
		data: {},
		responseBody: {},
		mediaConfig: {},
		display: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				__props.mediaConfig?.raw && __props.display === "raw" && __props.mediaConfig.language ? (openBlock(), createBlock(ResponseBodyRaw_default, {
					key: __props.responseBody.dataUrl,
					content: __props.data,
					language: __props.mediaConfig.language
				}, null, 8, ["content", "language"])) : createCommentVNode("", true),
				__props.mediaConfig?.preview && __props.display === "preview" ? (openBlock(), createBlock(ResponseBodyPreview_default, {
					key: __props.responseBody.dataUrl,
					alpha: __props.mediaConfig.alpha,
					mode: __props.mediaConfig.preview,
					src: __props.responseBody.dataUrl,
					type: __props.responseBody.mimeType?.essence ?? ""
				}, null, 8, [
					"alpha",
					"mode",
					"src",
					"type"
				])) : createCommentVNode("", true),
				!__props.mediaConfig?.raw && !__props.mediaConfig?.preview ? (openBlock(), createBlock(ResponseBodyInfo_default, { key: 2 }, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" Binary file ", -1)])]),
					_: 1
				})) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyToggle.vue.script.js
var _hoisted_1$27 = { class: "text-c-3 text-xxs -my-1 flex justify-center gap-0.5 rounded p-0.5" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyToggle.vue.js
var ResponseBodyToggle_default = /* @__PURE__ */ defineComponent({
	__name: "ResponseBodyToggle",
	props: { modelValue: {} },
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$27, [createBaseVNode("button", {
				class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": __props.modelValue === "preview" }]),
				type: "button",
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("toggle", "preview"), ["stop"]))
			}, " Preview ", 2), createBaseVNode("button", {
				class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": __props.modelValue === "raw" }]),
				type: "button",
				onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("toggle", "raw"), ["stop"]))
			}, " Raw ", 2)]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/SendingRequest.vue.js
var _sfc_main$3 = {};
var _hoisted_1$26 = { class: "sendingRequest" };
function _sfc_render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$26, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, [createBaseVNode("svg", {
		fill: "currentColor",
		height: "32",
		viewBox: "0 0 256 256",
		width: "32",
		xmlns: "http://www.w3.org/2000/svg"
	}, [createBaseVNode("path", { d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" })])], -1), createTextVNode(" Sending Request to Endpoint ", -1)])]);
}
var SendingRequest_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-a375f414"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/RequestPreview.vue.script.js
var _hoisted_1$25 = {
	key: 1,
	class: "autosendContainer"
};
var _hoisted_2$14 = {
	key: 2,
	class: "autosendContainer"
};
var _hoisted_3$12 = { class: "requestContent" };
var _hoisted_4$6 = { class: "requestContentInner" };
var _hoisted_5$5 = {
	key: 0,
	class: "code"
};
var _hoisted_6$4 = {
	key: 1,
	class: "code"
};
var _hoisted_7$3 = { class: "requestHeaderContainer" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/RequestPreview.vue.js
var RequestPreview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "RequestPreview",
	props: {
		request: {},
		response: {},
		state: {}
	},
	setup(__props) {
		const responseData = computed(() => {
			if (__props.response?.success) return {
				data: __props.response.data.responseBody,
				headers: __props.response.data.headers
			};
			if (__props.response?.error?.code === "REQUEST_NOT_OK") return {
				data: __props.response.error.detail.responseBody,
				headers: __props.response.error.detail.headers
			};
		});
		const showRequestToggle = ref(false);
		/** Show request preview automatically for failed requests or when approval is required. */
		const shouldShowRequest = computed(() => {
			if (__props.state === "requestFailed" || __props.state === "requiresApproval") return true;
			return showRequestToggle.value;
		});
		const responseBody = computed(() => processResponseBody({
			data: responseData.value?.data,
			headers: responseData.value?.headers
		}));
		const mediaConfig = computed(() => getMediaTypeConfig(responseBody.value.mimeType?.essence ?? ""));
		const displayToggle = ref();
		function toggleDisplay(mode) {
			displayToggle.value = mode;
		}
		const displayMode = computed(() => {
			if (displayToggle.value) return displayToggle.value;
			if (mediaConfig.value?.raw && !mediaConfig.value.preview) return "raw";
			if (mediaConfig.value?.preview) return "preview";
			return "raw";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["requestPreview", {
				open: shouldShowRequest.value,
				succeeded: __props.state === "requestSucceeded"
			}]) }, [__props.state === "approved" ? (openBlock(), createBlock(RequestApproved_default, { key: 0 })) : __props.state === "buildingRequest" ? (openBlock(), createElementBlock("div", _hoisted_1$25, [createVNode(BuildingRequest_default)])) : __props.state === "requiresApproval" ? (openBlock(), createElementBlock("div", _hoisted_2$14, [createVNode(AutosendPaused_default)])) : __props.state === "sendingRequest" ? (openBlock(), createElementBlock("button", {
				key: 3,
				class: "toggleButton",
				type: "button",
				onClick: _cache[0] || (_cache[0] = ($event) => showRequestToggle.value = !showRequestToggle.value)
			}, [createVNode(SendingRequest_default), shouldShowRequest.value ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))])) : __props.state === "requestSucceeded" ? (openBlock(), createElementBlock("button", {
				key: 4,
				class: "toggleButton",
				type: "button",
				onClick: _cache[1] || (_cache[1] = ($event) => showRequestToggle.value = !showRequestToggle.value)
			}, [createVNode(RequestSuccess_default), shouldShowRequest.value ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))])) : __props.state === "rejected" ? (openBlock(), createElementBlock("button", {
				key: 5,
				class: "toggleButton",
				type: "button",
				onClick: _cache[2] || (_cache[2] = ($event) => showRequestToggle.value = !showRequestToggle.value)
			}, [createVNode(RequestRejected_default), shouldShowRequest.value ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))])) : __props.state === "requestFailed" ? (openBlock(), createBlock(RequestFailed_default, { key: 6 })) : createCommentVNode("", true), createBaseVNode("div", _hoisted_3$12, [createBaseVNode("div", _hoisted_4$6, [__props.request ? (openBlock(), createElementBlock("div", _hoisted_5$5, [_cache[4] || (_cache[4] = createBaseVNode("div", { class: "requestHeaderContainer" }, [createBaseVNode("h1", null, "Request")], -1)), createVNode(unref(ScalarCodeBlock_default), {
				class: "codeBlock",
				content: JSON.stringify(__props.request, null, 2),
				lang: "json"
			}, null, 8, ["content"])])) : createCommentVNode("", true), responseData.value ? (openBlock(), createElementBlock("div", _hoisted_6$4, [createBaseVNode("div", _hoisted_7$3, [_cache[5] || (_cache[5] = createBaseVNode("h1", null, "Response", -1)), mediaConfig.value?.raw && mediaConfig.value.preview ? (openBlock(), createBlock(ResponseBodyToggle_default, {
				key: 0,
				modelValue: displayMode.value,
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => displayMode.value = $event),
				onToggle: toggleDisplay
			}, null, 8, ["modelValue"])) : createCommentVNode("", true)]), createVNode(ResponseBody_default, {
				data: responseData.value.data,
				display: displayMode.value,
				mediaConfig: mediaConfig.value,
				responseBody: responseBody.value
			}, null, 8, [
				"data",
				"display",
				"mediaConfig",
				"responseBody"
			])])) : createCommentVNode("", true)])])], 2);
		};
	}
}), [["__scopeId", "data-v-1e1f4549"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-chat-approvals.js
function requestPartRequiresApproval(part) {
	return part.type === `tool-execute-request` && part.state === "input-available" && part.input?.method?.toLowerCase() !== "get";
}
function useRequestApprovals() {
	const state = useState();
	const approvalRequiredParts = computed(() => {
		return state.chat.messages.filter((message) => message.parts.some(requestPartRequiresApproval)).flatMap((message) => message.parts).filter(requestPartRequiresApproval);
	});
	async function respondToRequestApprovals(approved) {
		const approvalPromises = approvalRequiredParts.value.map(async (toolPart) => {
			if (!approved) return await state.chat.addToolOutput({
				tool: EXECUTE_CLIENT_SIDE_REQUEST_TOOL_NAME,
				toolCallId: toolPart.toolCallId,
				state: "output-error",
				errorText: "The user denied the request."
			});
			await executeRequestTool({
				documentSettings: createDocumentSettings(state.workspaceStore),
				proxyUrl: state.proxyUrl.value,
				input: toolPart.input,
				toolCallId: toolPart.toolCallId,
				chat: state.chat
			});
		});
		await Promise.all(approvalPromises);
	}
	return {
		approvalRequiredParts,
		respondToRequestApprovals
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/ExecuteRequestTool.vue.script.js
var _hoisted_1$24 = { class: "executeRequestTool" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/ExecuteRequestTool.vue.js
var ExecuteRequestTool_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ExecuteRequestTool",
	props: { messagePart: {} },
	setup(__props) {
		const state = useState();
		const requestState = computed(() => {
			if (__props.messagePart.value.state === "input-streaming") return "buildingRequest";
			if (__props.messagePart.value.state === "approval-responded" && state.chat.status === "submitted") return "sendingRequest";
			if (requestPartRequiresApproval(__props.messagePart.value)) return "requiresApproval";
			if (__props.messagePart.value.state === "output-available") return __props.messagePart.value.output.success ? "requestSucceeded" : "requestFailed";
			if (__props.messagePart.value.state === "output-error") return "rejected";
			return null;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$24, [requestState.value ? (openBlock(), createBlock(RequestPreview_default, {
				key: 0,
				request: __props.messagePart.value.input,
				response: __props.messagePart.value.output,
				state: requestState.value
			}, null, 8, [
				"request",
				"response",
				"state"
			])) : createCommentVNode("", true)]);
		};
	}
}), [["__scopeId", "data-v-9025b7d4"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/LoadingOpenAPISpecsSummary.vue.js
var _sfc_main$2 = {};
var _hoisted_1$23 = { class: "loadingApiSpecs" };
function _sfc_render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$23, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, null, -1), createTextVNode(" Loading APIs... ", -1)])]);
}
var LoadingOpenAPISpecsSummary_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-0248d9dc"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/GetOpenAPISpecsSummary.vue.script.js
var _hoisted_1$22 = { key: 0 };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/GetOpenAPISpecsSummary.vue.js
var GetOpenAPISpecsSummary_default = /* @__PURE__ */ defineComponent({
	__name: "GetOpenAPISpecsSummary",
	props: {
		messagePart: {},
		message: {}
	},
	setup(__props) {
		const messageFinished = ref(false);
		watch(() => __props.message, () => {
			const parts = __props.message.parts;
			const index = parts.findIndex((part) => "toolCallId" in part && part.toolCallId === __props.messagePart.value.toolCallId);
			messageFinished.value = Boolean(parts[index + 1]);
		});
		return (_ctx, _cache) => {
			return !messageFinished.value ? (openBlock(), createElementBlock("div", _hoisted_1$22, [createVNode(LoadingOpenAPISpecsSummary_default)])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ContextItem.vue.script.js
var _hoisted_1$21 = { class: "contextItemText" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ContextItem.vue.js
var ContextItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ContextItem",
	props: { loading: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["contextItem", { shimmer: __props.loading }]) }, [createBaseVNode("span", _hoisted_1$21, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 2);
		};
	}
}), [["__scopeId", "data-v-0509fef2"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/LoadingSearchOpenAPIOperations.vue.js
var _sfc_main$1 = {};
var _hoisted_1$20 = { class: "sendingRequest" };
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$20, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, null, -1), createTextVNode(" Retrieving relevant information... ", -1)])]);
}
var LoadingSearchOpenAPIOperations_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-43864661"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/SearchOpenAPIOperationsTool.vue.script.js
var _hoisted_1$19 = { key: 0 };
var _hoisted_2$13 = {
	key: 1,
	class: "operations"
};
var _hoisted_3$11 = { class: "overflowPopover" };
var MAX_VISIBLE = 5;
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/SearchOpenAPIOperationsTool.vue.js
var SearchOpenAPIOperationsTool_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SearchOpenAPIOperationsTool",
	props: {
		messagePart: {},
		message: {}
	},
	setup(__props) {
		const messageFinished = ref(false);
		watch(() => __props.message, () => {
			const parts = __props.message.parts;
			const index = parts.findIndex((part) => "toolCallId" in part && part.toolCallId === __props.messagePart.value.toolCallId);
			messageFinished.value = Boolean(parts[index + 1]);
		});
		const operations = computed(() => {
			if (!__props.messagePart.value.output) return;
			return __props.messagePart.value.output.flatMap((spec) => {
				const title = spec.info?.title;
				return getOperations(spec).map((operation) => `${title ? `${title} - ` : ""}${operation.summary ?? ""}`).filter(Boolean);
			});
		});
		const visibleOperations = computed(() => operations.value?.slice(0, MAX_VISIBLE));
		const hiddenOperations = computed(() => operations.value?.slice(MAX_VISIBLE) ?? []);
		const state = useState();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [__props.messagePart.value.state === "input-available" && unref(state).chat.status === "streaming" ? (openBlock(), createElementBlock("div", _hoisted_1$19, [createVNode(LoadingSearchOpenAPIOperations_default)])) : createCommentVNode("", true), operations.value ? (openBlock(), createElementBlock("div", _hoisted_2$13, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleOperations.value, (operation) => {
				return openBlock(), createBlock(ContextItem_default, {
					key: operation,
					loading: !messageFinished.value
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(operation), 1)]),
					_: 2
				}, 1032, ["loading"]);
			}), 128)), hiddenOperations.value.length ? (openBlock(), createBlock(unref(ScalarPopover_default), {
				key: 0,
				placement: "bottom-start"
			}, {
				popover: withCtx(() => [createBaseVNode("div", _hoisted_3$11, [(openBlock(true), createElementBlock(Fragment, null, renderList(hiddenOperations.value, (operation) => {
					return openBlock(), createBlock(ContextItem_default, {
						key: operation,
						loading: !messageFinished.value
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(operation), 1)]),
						_: 2
					}, 1032, ["loading"]);
				}), 128))])]),
				default: withCtx(() => [createVNode(ContextItem_default, { loading: !messageFinished.value }, {
					default: withCtx(() => [createTextVNode(" +" + toDisplayString(hiddenOperations.value.length), 1)]),
					_: 1
				}, 8, ["loading"])]),
				_: 1
			})) : createCommentVNode("", true)])) : createCommentVNode("", true)], 64);
		};
	}
}), [["__scopeId", "data-v-cbff70ed"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Messages/Text.vue.js
var Text_default = /* @__PURE__ */ defineComponent({
	__name: "Text",
	props: { messagePart: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarMarkdown_default), { value: __props.messagePart.value.text }, null, 8, ["value"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/entities/error/constants.js
var AgentErrorCodes = { LIMIT_REACHED: "LIMIT_REACHED" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/entities/prompt/constants.js
var MAX_PROMPT_SIZE = 1e4;
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-search.js
function useSearch() {
	const { api } = useState();
	const queryRef = ref("");
	const search = useDebounceFn(async (q) => {
		const searchResponse = await api.search(q);
		if (!searchResponse.success) return;
		results.value = searchResponse.data.results;
	}, 200);
	const query = computed({
		get: () => {
			return queryRef.value;
		},
		set: (v) => {
			search(v);
			queryRef.value = v;
		}
	});
	const results = ref([]);
	search("");
	return {
		query,
		results
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Catalog/Catalog.vue.script.js
var _hoisted_1$18 = {
	key: 0,
	class: "catalog custom-scroll"
};
var _hoisted_2$12 = ["onClick"];
var _hoisted_3$10 = { class: "left" };
var _hoisted_4$5 = ["src"];
var _hoisted_5$4 = { class: "right" };
var _hoisted_6$3 = { class: "item-top" };
var _hoisted_7$2 = { class: "version" };
var _hoisted_8$1 = { class: "description" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Catalog/Catalog.vue.js
var Catalog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Catalog",
	props: { modal: {} },
	setup(__props) {
		const search = useSearch();
		const state = useState();
		const searchOptions = computed(() => search.results.value.filter((r) => {
			return !state.registryDocuments.value.some((d) => d.namespace === r.namespace && d.slug === r.slug);
		}).map((result) => ({
			...result,
			label: result.title,
			id: result.id
		})));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarModal_default), {
				class: "catalogModal",
				state: __props.modal
			}, {
				default: withCtx(() => [createVNode(unref(ScalarSearchInput_default), {
					autofocus: "",
					class: "searchInput",
					modelValue: unref(search).query.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => unref(search).query.value = v ?? "")
				}, null, 8, ["modelValue"]), searchOptions.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$18, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchOptions.value, (option) => {
					return openBlock(), createElementBlock("button", {
						key: option.id,
						class: "item",
						type: "button",
						onClick: () => {
							unref(state).addDocument(option);
							__props.modal.hide();
						}
					}, [createBaseVNode("div", _hoisted_3$10, [option.logoUrl ? (openBlock(), createElementBlock("img", {
						key: 0,
						class: "logo",
						src: option.logoUrl
					}, null, 8, _hoisted_4$5)) : (openBlock(), createBlock(unref(ScalarIcon_default), {
						key: 1,
						class: "logo",
						logo: "Openapi"
					}))]), createBaseVNode("div", _hoisted_5$4, [createBaseVNode("div", _hoisted_6$3, [createBaseVNode("span", null, toDisplayString(option.title), 1), createBaseVNode("span", _hoisted_7$2, "v" + toDisplayString(option.currentVersion), 1)]), createBaseVNode("span", _hoisted_8$1, " @" + toDisplayString(option.namespace) + "/" + toDisplayString(option.slug), 1)])], 8, _hoisted_2$12);
				}), 128))])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["state"]);
		};
	}
}), [["__scopeId", "data-v-18b2aea2"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ActionsDropdown.vue.script.js
var _hoisted_1$17 = { class: "dropdown-item" };
var _hoisted_2$11 = { class: "dropdown-item" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ActionsDropdown.vue.js
var ActionsDropdown_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ActionsDropdown",
	emits: ["uploadApi"],
	setup(__props) {
		const catalogModal = useModal();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(ScalarDropdown_default), { offset: {
				crossAxis: -5,
				mainAxis: 5
			} }, {
				items: withCtx(() => [createVNode(unref(ScalarDropdownItem_default), { onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("uploadApi")) }, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1$17, [createVNode(unref(ScalarIconUpload_default)), _cache[2] || (_cache[2] = createTextVNode(" Upload API ", -1))])]),
					_: 1
				}), createVNode(unref(ScalarDropdownItem_default), { onClick: _cache[1] || (_cache[1] = ($event) => unref(catalogModal).show()) }, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_2$11, [createVNode(unref(ScalarIconMagnifyingGlass_default)), _cache[3] || (_cache[3] = createTextVNode(" Search Catalog ", -1))])]),
					_: 1
				})]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			}), unref(catalogModal).open ? (openBlock(), createBlock(Catalog_default, {
				key: 0,
				modal: unref(catalogModal)
			}, null, 8, ["modal"])) : createCommentVNode("", true)], 64);
		};
	}
}), [["__scopeId", "data-v-e2c3bd19"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ApprovalSection.vue.script.js
var _hoisted_1$16 = { class: "approvalSection" };
var _hoisted_2$10 = { class: "approvalText flex items-center gap-1.5" };
var _hoisted_3$9 = { class: "approveContainer" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ApprovalSection.vue.js
var ApprovalSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ApprovalSection",
	emits: ["approve", "reject"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$16, [createBaseVNode("strong", _hoisted_2$10, [createVNode(unref(ScalarIconInfo_default), {
				class: "text-blue size-4",
				weight: "bold"
			}), _cache[2] || (_cache[2] = createTextVNode(" One or more requests require approval. ", -1))]), createBaseVNode("div", _hoisted_3$9, [createBaseVNode("button", {
				type: "button",
				class: "actionButton rejectButton",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("reject"))
			}, " Reject "), createBaseVNode("button", {
				type: "button",
				class: "actionButton approveButton",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("approve"))
			}, " Approve ")])]);
		};
	}
}), [["__scopeId", "data-v-fb5102df"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ErrorMessage.vue.script.js
var _hoisted_1$15 = {
	key: 0,
	class: "error gap-1.5"
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ErrorMessage.vue.js
var ErrorMessage_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ErrorMessage",
	props: { error: {} },
	setup(__props) {
		const HIDDEN_ERROR_CODES = [AgentErrorCodes.LIMIT_REACHED];
		return (_ctx, _cache) => {
			return !HIDDEN_ERROR_CODES.includes(__props.error.code) ? (openBlock(), createElementBlock("div", _hoisted_1$15, [createVNode(unref(ScalarIconInfo_default), {
				class: "text-red size-4",
				weight: "bold"
			}), createTextVNode(" " + toDisplayString(__props.error.message), 1)])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-130cb1d5"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-signup-link.js
/**
* Agent Scalar signup/upgrade URL for both full (agent.scalar.com) and embedded
* (@scalar/api-reference) modes.
*
* In embedded mode, includes register flow and optional docUrl when a temporary document was uploaded.
*/
function useSignupLink() {
	const { dashboardUrl, mode, uploadedTmpDocumentUrl } = useState();
	const signupLink = computed(() => {
		if (mode === "full") return dashboardUrl;
		return uploadedTmpDocumentUrl.value ? `${dashboardUrl}/register?flow=oss-agent&docUrl=${uploadedTmpDocumentUrl.value}` : dashboardUrl;
	});
	function navigateToSignup() {
		window.location.assign(signupLink.value);
	}
	return {
		signupLink,
		navigateToSignup
	};
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/FreeMessagesInfoSection.vue.script.js
var _hoisted_1$14 = { class: "freeMessagesInfoSection" };
var _hoisted_2$9 = { class: "infoText flex items-center gap-1.5" };
var _hoisted_3$8 = ["href"];
var _hoisted_4$4 = { class: "actionsContainer" };
var _hoisted_5$3 = ["href"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/FreeMessagesInfoSection.vue.js
var FreeMessagesInfoSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "FreeMessagesInfoSection",
	setup(__props) {
		const isDismissed = ref(false);
		const { signupLink } = useSignupLink();
		/**
		* Dismiss the free messages info section.
		*/
		function dismiss() {
			isDismissed.value = true;
		}
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$14, [createBaseVNode("strong", _hoisted_2$9, [
				createVNode(unref(ScalarIconInfo_default), {
					class: "text-blue size-4",
					weight: "bold"
				}),
				createBaseVNode("a", {
					class: "underline",
					href: unref(signupLink),
					target: "_blank"
				}, "Sign up for Agent Scalar", 8, _hoisted_3$8),
				_cache[0] || (_cache[0] = createTextVNode(" to continue without hitting limits. ", -1))
			]), createBaseVNode("div", _hoisted_4$4, [createBaseVNode("a", {
				class: "actionButton upgradeButton",
				href: unref(URLS).AGENT_SCALAR_DOCUMENTATION,
				target: "_blank",
				type: "button"
			}, " Read more ", 8, _hoisted_5$3), createBaseVNode("button", {
				"aria-label": "Close",
				class: "closeButton",
				type: "button",
				onClick: dismiss
			}, [createVNode(unref(ScalarIconX_default), {
				class: "size-4",
				weight: "bold"
			})])])], 512)), [[vShow, !isDismissed.value]]);
		};
	}
}), [["__scopeId", "data-v-1921dede"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/PaymentSection.vue.script.js
var _hoisted_1$13 = { class: "paymentSection" };
var _hoisted_2$8 = { class: "approvalText flex items-center gap-1.5" };
var _hoisted_3$7 = { class: "paymentContainer" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/PaymentSection.vue.js
var PaymentSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PaymentSection",
	setup(__props) {
		const { navigateToSignup } = useSignupLink();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$13, [createBaseVNode("strong", _hoisted_2$8, [createVNode(unref(ScalarIconInfo_default), {
				class: "text-blue size-4",
				weight: "bold"
			}), _cache[1] || (_cache[1] = createTextVNode(" You've used up your complimentary Scalar Credits. Sign up to get free Credits. ", -1))]), createBaseVNode("div", _hoisted_3$7, [createBaseVNode("button", {
				class: "actionButton approveButton",
				type: "button",
				onClick: _cache[0] || (_cache[0] = (...args) => unref(navigateToSignup) && unref(navigateToSignup)(...args))
			}, " Sign up "), _cache[2] || (_cache[2] = createStaticVNode("<div class=\"paymentInfo\" data-v-9d163ea1><h3 data-v-9d163ea1>$0 <span data-v-9d163ea1>/ month</span></h3><div class=\"paymentInfoSection\" data-v-9d163ea1><div class=\"paymentInfoItem\" data-v-9d163ea1><span data-v-9d163ea1>Credits</span><span data-v-9d163ea1>100</span></div><div class=\"paymentInfoItem\" data-v-9d163ea1><span data-v-9d163ea1>MCP Servers</span><span data-v-9d163ea1>Unlimited</span></div><div class=\"paymentInfoItem\" data-v-9d163ea1><span data-v-9d163ea1>Base monthly total</span><span data-v-9d163ea1>$0.00</span></div></div><div class=\"paymentInfoSection\" data-v-9d163ea1><div class=\"paymentInfoItem\" data-v-9d163ea1><span data-v-9d163ea1>Additional Credits</span><span data-v-9d163ea1>+ $0.02 per Credit</span></div></div></div>", 1))])]);
		};
	}
}), [["__scopeId", "data-v-9d163ea1"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/SearchPopover.vue.script.js
var _hoisted_1$12 = ["onClick"];
var _hoisted_2$7 = ["src"];
var _hoisted_3$6 = {
	key: 1,
	class: "searchResultsEmpty"
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/SearchPopover.vue.js
var SearchPopover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SearchPopover",
	setup(__props) {
		const state = useState();
		const search = useSearch();
		const searchOptions = computed(() => search.results.value.filter((r) => !state.registryDocuments.value.some((d) => d.namespace === r.namespace && d.slug === r.slug)).map((result) => ({
			...result,
			label: result.title,
			id: result.id
		})));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarPopover_default), {
				offset: 0,
				placement: "top-start",
				resize: "",
				style: { "width": "220px" }
			}, {
				popover: withCtx(({ close }) => [createVNode(unref(ScalarTextInput_default), {
					autofocus: "",
					class: "searchInput",
					modelValue: unref(search).query.value,
					placeholder: "Add an API",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => unref(search).query.value = v ?? "")
				}, {
					prefix: withCtx(() => [createVNode(unref(ScalarIconMagnifyingGlass_default), { class: "searchIcon" })]),
					_: 1
				}, 8, ["modelValue"]), searchOptions.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(searchOptions.value, (option) => {
					return openBlock(), createElementBlock("button", {
						key: option.id,
						class: "searchItem",
						type: "button",
						onClick: () => {
							unref(state).addDocument(option);
							close();
						}
					}, [option.logoUrl ? (openBlock(), createElementBlock("img", {
						key: 0,
						class: "searchItemLogo",
						src: option.logoUrl
					}, null, 8, _hoisted_2$7)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(option.title), 1)], 8, _hoisted_1$12);
				}), 128)) : (openBlock(), createElementBlock("span", _hoisted_3$6, " No APIs found "))]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			});
		};
	}
}), [["__scopeId", "data-v-3e0405c7"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/UploadSection.vue.script.js
var _hoisted_1$11 = {
	key: 0,
	class: "flex items-center gap-1.5"
};
var _hoisted_2$6 = {
	key: 0,
	class: "uploadText"
};
var _hoisted_3$5 = {
	key: 1,
	class: "uploadText"
};
var _hoisted_4$3 = {
	key: 2,
	class: "uploadText"
};
var _hoisted_5$2 = {
	key: 1,
	class: "uploadText flex items-center gap-1.5"
};
var _hoisted_6$2 = {
	key: 2,
	class: "uploadText flex items-center gap-1.5"
};
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/UploadSection.vue.js
var UploadSection_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "UploadSection",
	props: { uploadState: {} },
	setup(__props) {
		const loadingState = useLoadingState();
		const isLoading = computed(() => [
			"uploading",
			"processing",
			"loading"
		].includes(__props.uploadState.type));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["uploadSection", {
				error: __props.uploadState.type === "error",
				done: __props.uploadState.type === "done"
			}]) }, [
				isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$11, [createVNode(unref(ScalarLoading_default), {
					class: "text-blue",
					loader: {
						...unref(loadingState),
						isLoading: true
					},
					size: "lg"
				}, null, 8, ["loader"]), __props.uploadState.type === "loading" ? (openBlock(), createElementBlock("strong", _hoisted_2$6, " Loading OpenAPI document… ")) : __props.uploadState.type === "processing" ? (openBlock(), createElementBlock("strong", _hoisted_3$5, " Processing OpenAPI document… ")) : (openBlock(), createElementBlock("strong", _hoisted_4$3, " Uploading OpenAPI document… "))])) : createCommentVNode("", true),
				__props.uploadState.type === "done" ? (openBlock(), createElementBlock("strong", _hoisted_5$2, [createVNode(unref(ScalarIconCheck_default), { class: "icon text-green" }), _cache[0] || (_cache[0] = createTextVNode(" Your OpenAPI document has been processed successfully. ", -1))])) : createCommentVNode("", true),
				__props.uploadState.type === "error" ? (openBlock(), createElementBlock("strong", _hoisted_6$2, [createVNode(unref(ScalarIconXCircle_default), { class: "icon text-red" }), createTextVNode(" " + toDisplayString(__props.uploadState.error), 1)])) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__scopeId", "data-v-9621c76b"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-chat-error.js
var chatErrorSchema = object$3({
	message: string$1(),
	code: string$1(),
	status: optional(number$1())
});
function useChatError() {
	const { chat } = useState();
	return computed(() => {
		if (!chat.error) return;
		const errorJson = safeParseJson(chat.error.message);
		if (!errorJson || !validate(chatErrorSchema, errorJson)) return {
			message: chat.error.message,
			code: "UNKNOWN_ERROR"
		};
		return coerce(chatErrorSchema, errorJson);
	});
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/hooks/use-chat-pending-client-tool-parts.js
function isPendingClientToolPart(part) {
	return part.type.startsWith("tool") && part.state === "input-available";
}
function useChatPendingClientToolParts() {
	const state = useState();
	return { pendingClientToolParts: computed(() => {
		return state.chat.messages.filter((message) => message.parts.some(isPendingClientToolPart)).flatMap((message) => message.parts).filter(isPendingClientToolPart);
	}) };
}
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/PromptForm.vue.script.js
var _hoisted_1$10 = { class: "actionContainer" };
var _hoisted_2$5 = ["disabled"];
var _hoisted_3$4 = { class: "inputActionsContainer" };
var _hoisted_4$2 = { class: "inputActionsLeft" };
var _hoisted_5$1 = {
	class: "addAPIButton",
	type: "button"
};
var _hoisted_6$1 = {
	class: "addAPIButton",
	type: "button"
};
var _hoisted_7$1 = ["src"];
var _hoisted_8 = ["onClick"];
var _hoisted_9 = { class: "inputActionsRight" };
var _hoisted_10 = { class: "sendCheckboxContinue" };
var _hoisted_11 = {
	key: 0,
	class: "relative flex items-center gap-1.5"
};
var _hoisted_12 = {
	class: "termsAgree",
	for: "agentTermsAgree"
};
var _hoisted_13 = {
	key: 5,
	class: "addMoreContext"
};
var _hoisted_14 = { class: "ml-auto flex items-center gap-1" };
var _hoisted_15 = ["onClick"];
var _hoisted_16 = ["alt", "src"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/PromptForm.vue.js
var PromptForm_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromptForm",
	emits: ["submit", "uploadApi"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		__expose({ focusPrompt });
		const promptRef = useTemplateRef("agentPrompt");
		const state = useState();
		const inputHasContent = computed(() => state.prompt.value.trim().length > 0);
		const promptTooLarge = computed(() => state.prompt.value.trim().length > MAX_PROMPT_SIZE);
		/** Show free messages info only after at least one message has been sent and when no API key is set. */
		const showFreeMessagesInfo = computed(() => state.chat.messages.length > 1 && !state.getAgentKey?.() && chatError?.value?.code !== AgentErrorCodes.LIMIT_REACHED);
		watch(state.prompt, () => {
			if (!promptRef?.value) return;
			if (!state.prompt.value.length) {
				promptRef.value.style.height = "0px";
				return;
			}
			promptRef.value.style.height = "auto";
			promptRef.value.style.height = promptRef.value.scrollHeight + "px";
		});
		function handlePromptKeydown(e) {
			if (e.isComposing) return;
			if (state.loading.value) return;
			if (e.key === "Enter" && !e.shiftKey) {
				e.preventDefault();
				handleSubmit();
				window.scrollTo(0, document.body.scrollHeight);
			}
		}
		function focusPrompt() {
			promptRef.value?.focus();
		}
		watch(() => state.chat.status, (status) => {
			if (status === "ready" || status === "error") promptRef.value?.focus();
		});
		const { approvalRequiredParts, respondToRequestApprovals } = useRequestApprovals();
		const { pendingClientToolParts } = useChatPendingClientToolParts();
		const uploadTmpDoc = useUploadTmpDocument();
		function acceptTerms() {
			state.terms.accept();
			if (state.mode === "preview" && state.getActiveDocumentJson) uploadTmpDoc.uploadTempDocument(state.getActiveDocumentJson(), true);
		}
		const isPending = computed(() => Object.values(state.pendingDocuments).some(Boolean));
		const submitDisabled = computed(() => {
			const tooLarge = promptTooLarge.value;
			const missingInput = !inputHasContent.value;
			const awaitingApproval = approvalRequiredParts.value.length > 0;
			const pendingToolParts = pendingClientToolParts.value.length > 0;
			const isPreview = state.mode === "preview";
			const termsNotAccepted = isPreview && !state.terms.accepted.value;
			const uploadingTmpDoc = isPreview && !!uploadTmpDoc.uploadState.value;
			const isLoading = isPending.value;
			return tooLarge || missingInput || awaitingApproval || pendingToolParts || termsNotAccepted || uploadingTmpDoc || isLoading;
		});
		function handleSubmit() {
			if (submitDisabled.value) return;
			emit("submit");
		}
		const chatError = useChatError();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$10, [
				unref(uploadTmpDoc).uploadState.value || isPending.value ? (openBlock(), createBlock(UploadSection_default, {
					key: 0,
					uploadState: unref(uploadTmpDoc).uploadState.value ?? { type: "loading" }
				}, null, 8, ["uploadState"])) : createCommentVNode("", true),
				unref(chatError) ? (openBlock(), createBlock(ErrorMessage_default, {
					key: 1,
					error: unref(chatError)
				}, null, 8, ["error"])) : createCommentVNode("", true),
				unref(approvalRequiredParts).length ? (openBlock(), createBlock(ApprovalSection_default, {
					key: 2,
					onApprove: _cache[0] || (_cache[0] = ($event) => unref(respondToRequestApprovals)(true)),
					onReject: _cache[1] || (_cache[1] = ($event) => unref(respondToRequestApprovals)(false))
				})) : createCommentVNode("", true),
				unref(chatError)?.code === unref(AgentErrorCodes).LIMIT_REACHED ? (openBlock(), createBlock(PaymentSection_default, { key: 3 })) : createCommentVNode("", true),
				showFreeMessagesInfo.value ? (openBlock(), createBlock(FreeMessagesInfoSection_default, { key: 4 })) : createCommentVNode("", true),
				createBaseVNode("form", {
					class: "promptForm",
					onSubmit: withModifiers(handleSubmit, ["prevent"])
				}, [
					_cache[6] || (_cache[6] = createBaseVNode("label", {
						class: "agentLabel",
						for: "agentTextarea"
					}, " Type a Request To get Started ", -1)),
					withDirectives(createBaseVNode("textarea", {
						id: "agentTextarea",
						ref: "agentPrompt",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(state).prompt.value = $event),
						class: "prompt custom-scroll",
						disabled: unref(state).loading.value,
						name: "prompt",
						placeholder: "Ask me anything…",
						onKeydown: handlePromptKeydown
					}, null, 40, _hoisted_2$5), [[vModelText, unref(state).prompt.value]]),
					createBaseVNode("div", _hoisted_3$4, [createBaseVNode("div", _hoisted_4$2, [!unref(state).hideAddApi ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!unref(state).isLoggedIn?.value ? (openBlock(), createBlock(SearchPopover_default, { key: 0 }, {
						default: withCtx(() => [createBaseVNode("button", _hoisted_5$1, [createVNode(unref(ScalarIconPlus_default), {
							class: "size-4",
							weight: "bold"
						})])]),
						_: 1
					})) : (openBlock(), createBlock(ActionsDropdown_default, {
						key: 1,
						onUploadApi: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("uploadApi"))
					}, {
						default: withCtx(() => [createBaseVNode("button", _hoisted_6$1, [createVNode(unref(ScalarIconPlus_default), {
							class: "size-4",
							weight: "bold"
						})])]),
						_: 1
					}))], 64)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).registryDocuments.value, (document) => {
						return openBlock(), createElementBlock("div", {
							key: document.id,
							class: "apiPill"
						}, [
							document.logoUrl ? (openBlock(), createElementBlock("img", {
								key: 0,
								class: "apiPillLogo",
								src: document.logoUrl
							}, null, 8, _hoisted_7$1)) : createCommentVNode("", true),
							createTextVNode(" " + toDisplayString(document.title) + " ", 1),
							document.removable ? (openBlock(), createElementBlock("button", {
								key: 1,
								class: "apiPillRemove",
								type: "button",
								onClick: ($event) => unref(state).removeDocument(document)
							}, [createVNode(unref(ScalarIconX_default), {
								class: "size-4",
								weight: "bold"
							})], 8, _hoisted_8)) : createCommentVNode("", true)
						]);
					}), 128))]), createBaseVNode("div", _hoisted_9, [!unref(state).loading.value ? (openBlock(), createBlock(unref(ScalarTooltip_default), {
						key: 0,
						content: "Settings"
					}, {
						default: withCtx(() => [createVNode(unref(ScalarIconButton_default), {
							class: "settingsButton h-7 w-7 p-1.5",
							icon: unref(ScalarIconLockSimple_default),
							label: "Scalar",
							size: "md",
							weight: "bold",
							onClick: _cache[4] || (_cache[4] = ($event) => unref(state).settingsModal.show())
						}, null, 8, ["icon"])]),
						_: 1
					})) : createCommentVNode("", true), createBaseVNode("div", _hoisted_10, [!unref(state).terms.accepted.value && unref(state).mode === "preview" ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("input", {
						id: "agentTermsAgree",
						class: "sr-only",
						type: "checkbox",
						onChange: acceptTerms
					}, null, 32), createBaseVNode("label", _hoisted_12, [createVNode(unref(ScalarIconCheck_default), {
						class: "termsAgreeIcon",
						weight: "bold"
					}), _cache[5] || (_cache[5] = createTextVNode(" Agree to Terms & Conditions ", -1))])])) : createCommentVNode("", true), !unref(state).loading.value ? (openBlock(), createBlock(unref(ScalarIconButton_default), {
						key: 1,
						class: "sendButton h-7 w-7 p-1.5",
						disabled: submitDisabled.value,
						icon: unref(ScalarIconArrowUp_default),
						label: "Scalar",
						size: "md",
						type: "submit",
						weight: "bold"
					}, null, 8, ["disabled", "icon"])) : (openBlock(), createBlock(unref(ScalarLoading_default), {
						key: 2,
						class: "loader h-7 w-7",
						loader: {
							isLoading: unref(state).loading.value,
							isValid: false,
							clear: async () => {},
							invalidate: async () => {},
							isInvalid: false,
							isActive: false,
							validate: async () => {},
							start: () => {}
						},
						size: "2xl"
					}, null, 8, ["loader"]))])])])
				], 32),
				unref(state).chat.messages.length <= 1 && !unref(state).hideAddApi ? (openBlock(), createElementBlock("div", _hoisted_13, [_cache[7] || (_cache[7] = createBaseVNode("span", null, "Load additional APIs", -1)), createBaseVNode("div", _hoisted_14, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).curatedDocuments.value, (doc) => {
					return openBlock(), createElementBlock("button", {
						key: doc.id,
						class: "addAPIContext",
						type: "button",
						onClick: ($event) => unref(state).addDocument(doc)
					}, [doc.logoUrl ? (openBlock(), createElementBlock("img", {
						key: 0,
						alt: doc.title,
						class: "size-4",
						src: doc.logoUrl
					}, null, 8, _hoisted_16)) : createCommentVNode("", true)], 8, _hoisted_15);
				}), 128))])])) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-ba1161a7"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Chat.vue.script.js
var _hoisted_1$9 = { class: "chat" };
var _hoisted_2$4 = { key: 0 };
var _hoisted_3$3 = { class: "formContainer" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Chat/Chat.vue.js
var Chat_default$1 = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Chat",
	emits: ["submit", "uploadApi"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const state = useState();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1$9, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).chat.messages, (message) => {
				return openBlock(), createElementBlock(Fragment, { key: message.id }, [message.role === "user" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(message.parts, (part, index) => {
					return openBlock(), createElementBlock("div", {
						key: `${message.id}-${index}`,
						class: "userMessage"
					}, [part.type === "text" ? (openBlock(), createElementBlock("p", _hoisted_2$4, toDisplayString(part.text), 1)) : createCommentVNode("", true)]);
				}), 128)) : createCommentVNode("", true), message.role === "assistant" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(message.parts, (part, index) => {
					return openBlock(), createElementBlock("div", { key: `${message.id}-${index}` }, [
						part.type === "text" ? (openBlock(), createBlock(Text_default, {
							key: 0,
							messagePart: toRef(part)
						}, null, 8, ["messagePart"])) : createCommentVNode("", true),
						part.type === `tool-${unref("execute-request")}` ? (openBlock(), createBlock(ExecuteRequestTool_default, {
							key: 1,
							messagePart: toRef(part)
						}, null, 8, ["messagePart"])) : createCommentVNode("", true),
						part.type === `tool-${unref("search-openapi-operations")}` ? (openBlock(), createBlock(SearchOpenAPIOperationsTool_default, {
							key: 2,
							message: reactive(message),
							messagePart: toRef(part)
						}, null, 8, ["message", "messagePart"])) : createCommentVNode("", true),
						part.type === `tool-${unref("summarize-openapi-specs")}` ? (openBlock(), createBlock(GetOpenAPISpecsSummary_default, {
							key: 3,
							message: reactive(message),
							messagePart: toRef(part)
						}, null, 8, ["message", "messagePart"])) : createCommentVNode("", true),
						part.type === `tool-${unref("ask-for-authentication")}` ? (openBlock(), createBlock(AskForAuthentication_default, {
							key: 4,
							message: reactive(message),
							messagePart: toRef(part)
						}, null, 8, ["message", "messagePart"])) : createCommentVNode("", true)
					]);
				}), 128)) : createCommentVNode("", true)], 64);
			}), 128)), _cache[2] || (_cache[2] = createBaseVNode("div", { class: "spacer" }, null, -1))]), createBaseVNode("div", _hoisted_3$3, [createVNode(PromptForm_default, {
				onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit")),
				onUploadApi: _cache[1] || (_cache[1] = ($event) => emit("uploadApi"))
			})])], 64);
		};
	}
}), [["__scopeId", "data-v-6573ec87"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/Logo.vue.js
var _sfc_main = {};
var _hoisted_1$8 = {
	fill: "none",
	height: "54",
	viewBox: "0 0 64 54",
	width: "64",
	xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		"clip-rule": "evenodd",
		d: "M31.0667 0C40.2667 0 48.3333 6.13333 52.6 14.9333H57.2667C59.6 14.9333 61.5333 16.8 61.5333 19.1333V32.2C61.5333 33.4667 60.8667 34.6 60 35.3333L63.3333 45.4V45.4667C63.5639 46.207 63.6166 46.9912 63.4874 47.7557C63.3582 48.5202 63.0505 49.2435 62.5895 49.8669C62.1284 50.4903 61.5269 50.9962 60.8338 51.3437C60.1406 51.6911 59.3754 51.8703 58.6 51.8667H54.3333C53.9895 52.4222 53.5082 52.8797 52.936 53.195C52.3638 53.5103 51.72 53.6728 51.0667 53.6667H47.0667C46.5764 53.6755 46.0892 53.5877 45.6328 53.4082C45.1765 53.2287 44.76 52.961 44.4071 52.6205C44.0542 52.28 43.7719 51.8733 43.5762 51.4237C43.3805 50.9741 43.2753 50.4903 43.2667 50C43.2667 47.9333 44.9333 46.2667 47 46.2667H51.0667C52.4667 46.2667 53.7333 46.9333 54.3333 48.0667H58.6C59.3333 48.0667 59.9333 47.4 59.6667 46.6L56.3333 36.3333H51.3333C49.9333 36.3333 48.6 35.6667 47.8 34.5333V34.4667L46.8 32.9333C46.7585 32.8643 46.6999 32.8072 46.6298 32.7675C46.5597 32.7279 46.4805 32.707 46.4 32.707C46.3195 32.707 46.2403 32.7279 46.1702 32.7675C46.1001 32.8072 46.0415 32.8643 46 32.9333L45.4667 34C45.1162 34.7065 44.5739 35.3 43.9019 35.7126C43.2299 36.1253 42.4552 36.3404 41.6667 36.3333H24.9333C23.4 36.3333 21.9333 35.7333 20.8667 34.6667H20.8L19.8667 33.6667C19.6667 33.4667 19.4667 33.3333 19.2 33.3333L17.4667 33.1333C17.3333 38.8667 13.4667 43.4667 8.73333 43.4667C3.93333 43.4667 0 38.6667 0 32.9333C0 32.2667 0 31.6667 0.133333 31.1333V31C0.8 26.8 3.46667 23.4667 6.93333 22.6C9.46667 9.93333 19.3333 0 31.0667 0ZM3.93333 31.5333C4.46667 28 6.93333 26.2 8.73333 26.2C10.7333 26.2 13.6 28.4 13.6 32.8667C13.6 34.4667 13.2667 35.7333 12.7333 36.7333C11.7333 38.7333 10.0667 39.6667 8.73333 39.6667C7.67025 39.6269 6.66506 39.1722 5.93333 38.4C5.8414 38.3142 5.75246 38.2253 5.66667 38.1333C5.19113 37.6008 4.80806 36.9924 4.53333 36.3333C4.0607 35.2169 3.83335 34.0119 3.86667 32.8V31.6667L3.93333 31.6V31.5333ZM24.3333 20.6667C24.3333 19.6667 25.2 18.8 26.2667 18.8H55.8667C56.9333 18.8 57.8 19.6667 57.7333 20.7333V30.7333C57.6667 31.8 56.8 32.6667 55.7333 32.6667H53.4C53.0667 32.6667 52.7333 32.6667 52.4 32.5333C51.5333 32.3333 50.7333 31.8667 50.4 31.3333L47.9333 27.6C47.7363 27.2901 47.4602 27.0383 47.1336 26.8706C46.8069 26.7028 46.4414 26.6251 46.0747 26.6455C45.7081 26.6658 45.3535 26.7835 45.0474 26.9865C44.7413 27.1894 44.4948 27.4702 44.3333 27.8L42.6667 31C42.4199 31.4974 42.04 31.9165 41.5692 32.2107C41.0984 32.505 40.5552 32.6628 40 32.6667L26.2 32.8C25.1333 32.8 24.2667 31.9333 24.2667 30.8667V20.6667H24.3333ZM11 22.2C13.5333 11.5333 22 3.86667 31 3.86667C37.9333 3.86667 44.4 8.2 48.3333 15H24.3333C21.4667 15 18.6 16 16.3333 17.8L16.2667 17.8667L10.9333 22.2H11Z",
		fill: "currentColor",
		"fill-rule": "evenodd"
	}, null, -1)])]);
}
var Logo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Start.vue.script.js
var _hoisted_1$7 = { class: "startContainer" };
var _hoisted_2$3 = { class: "disclaimerText" };
var _hoisted_3$2 = ["href"];
var _hoisted_4$1 = ["href"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Start.vue.js
var Start_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Start",
	emits: ["submit", "uploadApi"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { mode } = useState();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$7, [
				createVNode(Logo_default, { class: "agentLogo" }),
				_cache[4] || (_cache[4] = createBaseVNode("p", { class: "promptText" }, "How can I help you today?", -1)),
				createVNode(PromptForm_default, {
					ref: "promptFormField",
					onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit")),
					onUploadApi: _cache[1] || (_cache[1] = ($event) => emit("uploadApi"))
				}, null, 512),
				createBaseVNode("p", _hoisted_2$3, [
					unref(mode) === "preview" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" By messaging Agent Scalar your OpenAPI document will be temporarily uploaded to Scalar's servers. You must agree to our ")], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode("By messaging Agent Scalar you agree to our ")], 64)),
					createBaseVNode("a", {
						class: "disclaimerLink",
						href: unref(URLS).TERMS_AND_CONDITIONS,
						target: "_blank"
					}, "Terms", 8, _hoisted_3$2),
					_cache[2] || (_cache[2] = createTextVNode(" and ", -1)),
					createBaseVNode("a", {
						class: "disclaimerLink",
						href: unref(URLS).PRIVACY_POLICY,
						target: "_blank"
					}, "Privacy Policy", 8, _hoisted_4$1),
					_cache[3] || (_cache[3] = createTextVNode(". ", -1))
				])
			]);
		};
	}
}), [["__scopeId", "data-v-f9ec1d34"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Layout.vue.script.js
var _hoisted_1$6 = { class: "wrapper" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Layout.vue.js
var Layout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Layout",
	emits: ["submit", "uploadApi"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { chat } = useState();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$6, [unref(chat).messages.length && (unref(chat).messages.length > 1 || unref(chat).status !== "submitted") ? (openBlock(), createBlock(Chat_default$1, {
				key: 0,
				onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit")),
				onUploadApi: _cache[1] || (_cache[1] = ($event) => emit("uploadApi"))
			})) : (openBlock(), createBlock(Start_default, {
				key: 1,
				onSubmit: _cache[2] || (_cache[2] = ($event) => emit("submit")),
				onUploadApi: _cache[3] || (_cache[3] = ($event) => emit("uploadApi"))
			}))]);
		};
	}
}), [["__scopeId", "data-v-f1eee0af"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/Selector.vue.script.js
var _hoisted_1$5 = { class: "overflow-x-auto" };
var _hoisted_2$2 = {
	key: 1,
	class: "text-c-1 flex h-auto w-full items-center gap-0.75 rounded-b-lg px-3 py-1.5 text-base leading-[20px] whitespace-nowrap"
};
var _hoisted_3$1 = { class: "overflow-x-auto" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/Selector.vue.js
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
		const serverOptions = computed(() => __props.servers.map((server) => ({
			id: server.url,
			label: server.url
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
					class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-1.5 overflow-x-auto rounded-t-none rounded-b-xl px-3 py-1.5 text-base font-normal whitespace-nowrap -outline-offset-1",
					variant: "ghost"
				}, {
					default: withCtx(() => [
						_cache[1] || (_cache[1] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)),
						createBaseVNode("span", _hoisted_1$5, toDisplayString(serverUrlWithoutTrailingSlash.value || "Select a server"), 1),
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
			])) : (openBlock(), createElementBlock("div", _hoisted_2$2, [_cache[2] || (_cache[2] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)), createBaseVNode("span", _hoisted_3$1, toDisplayString(serverUrlWithoutTrailingSlash.value), 1)]));
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ServerSelector.vue.script.js
var _hoisted_1$4 = ["id"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/components/ServerSelector.vue.js
var ServerSelector_default = /* @__PURE__ */ defineComponent({
	__name: "ServerSelector",
	props: {
		eventBus: {},
		selectedServer: {},
		servers: {}
	},
	setup(__props) {
		const id = useId();
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
				_cache[0] || (_cache[0] = createBaseVNode("label", { class: "bg-b-2 flex h-8 items-center rounded-t-xl border-x border-t px-3 py-2.5 font-medium" }, " Server ", -1)),
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
				])) : createCommentVNode("", true)], 10, _hoisted_1$4),
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
//#region node_modules/@scalar/agent-chat/dist/views/Settings/DocSettings.vue.script.js
var _hoisted_1$3 = { class: "docSettings" };
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Settings/DocSettings.vue.js
var DocSettings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DocSettings",
	props: {
		document: {},
		name: {}
	},
	setup(__props) {
		const { workspaceStore, config, eventBus } = useState();
		const environment = computed(() => getActiveEnvironment(workspaceStore, __props.document).environment);
		const selectedServer = computed(() => {
			const servers = getServers(__props.document.servers, { documentUrl: __props.document["x-scalar-original-source-url"] });
			return getSelectedServer(__props.document, null, null, servers);
		});
		const securitySchemes = computed(() => __props.document.components?.securitySchemes ?? {});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", null, [createVNode(Auth_default, {
				authStore: unref(workspaceStore).auth,
				document: __props.document,
				environment: environment.value,
				eventBus: unref(eventBus),
				name: __props.name,
				options: unref(config),
				securitySchemes: securitySchemes.value,
				selectedServer: selectedServer.value
			}, null, 8, [
				"authStore",
				"document",
				"environment",
				"eventBus",
				"name",
				"options",
				"securitySchemes",
				"selectedServer"
			])]), createBaseVNode("div", null, [createVNode(ServerSelector_default, {
				eventBus: unref(eventBus),
				selectedServer: selectedServer.value,
				servers: __props.document.servers ?? []
			}, null, 8, [
				"eventBus",
				"selectedServer",
				"servers"
			])])]);
		};
	}
}), [["__scopeId", "data-v-5134b4f8"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Settings/Settings.vue.script.js
var _hoisted_1$2 = { class: "settingsHeading" };
var _hoisted_2$1 = { class: "documentList" };
var _hoisted_3 = ["onClick"];
var _hoisted_4 = { key: 0 };
var _hoisted_5 = {
	key: 1,
	class: "noDocuments"
};
var _hoisted_6 = { class: "proxyUrlContainer" };
var _hoisted_7 = ["href"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/views/Settings/Settings.vue.js
var Settings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Settings",
	props: { modalState: {} },
	setup(__props) {
		const { workspaceStore, proxyUrlRaw } = useState();
		function selectDocument(name) {
			workspaceStore.update("x-scalar-active-document", name);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarModal_default), {
				class: "settingsModal",
				state: __props.modalState
			}, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_1$2, [_cache[1] || (_cache[1] = createBaseVNode("h1", null, "Settings", -1)), createVNode(unref(ScalarColorModeToggle_default), { class: "colorToggle ml-auto" })]),
					createBaseVNode("div", _hoisted_2$1, [Object.entries(unref(workspaceStore).workspace.documents).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.entries(unref(workspaceStore).workspace.documents), ([name, document]) => {
						return openBlock(), createElementBlock("div", {
							key: name,
							class: "document"
						}, [createBaseVNode("button", {
							class: normalizeClass(["documentName", { documentNameActive: unref(workspaceStore).workspace.activeDocument === document }]),
							type: "button",
							onClick: ($event) => selectDocument(name)
						}, [createTextVNode(" @" + toDisplayString(name) + " ", 1), unref(workspaceStore).workspace.activeDocument === document ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))], 10, _hoisted_3), unref(workspaceStore).workspace.activeDocument === document && unref(isOpenApiDocument)(document) ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(DocSettings_default, {
							document,
							name
						}, null, 8, ["document", "name"])])) : createCommentVNode("", true)]);
					}), 128)) : (openBlock(), createElementBlock("div", _hoisted_5, " There's no API definition loaded. Use the + button to load APIs. "))]),
					createBaseVNode("div", _hoisted_6, [
						_cache[3] || (_cache[3] = createBaseVNode("label", { for: "proxyUrl" }, "CORS Proxy", -1)),
						createBaseVNode("p", null, [_cache[2] || (_cache[2] = createTextVNode(" All requests will be sent through the specified proxy URL to help avoid CORS (Cross-Origin Resource Sharing) issues. ", -1)), createBaseVNode("a", {
							class: "underline",
							href: unref(URLS).PROXY_SOURCE_CODE,
							target: "_blank"
						}, " Read more ", 8, _hoisted_7)]),
						createVNode(unref(ScalarTextInput_default), {
							id: "proxyUrl",
							modelValue: unref(proxyUrlRaw),
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(proxyUrlRaw) ? proxyUrlRaw.value = $event : null),
							label: "Proxy URL",
							placeholder: unref(URLS).DEFAULT_PROXY_URL
						}, null, 8, ["modelValue", "placeholder"])
					])
				]),
				_: 1
			}, 8, ["state"]);
		};
	}
}), [["__scopeId", "data-v-dd2544e6"]]);
//#endregion
//#region node_modules/@scalar/agent-chat/dist/Chat.vue.script.js
var _hoisted_1$1 = { ref: "clientModal" };
var _hoisted_2 = ["role"];
//#endregion
//#region node_modules/@scalar/agent-chat/dist/Chat.vue.js
var Chat_default = /* @__PURE__ */ defineComponent({
	__name: "Chat",
	emits: ["uploadApi"],
	setup(__props) {
		const { chat, prompt, settingsModal, eventBus, workspaceStore, config, mode, addDocument } = useState();
		const clientModalRef = useTemplateRef("clientModal");
		const stopClientEvents = initializeWorkspaceEventHandlers({
			eventBus,
			store: ref(workspaceStore),
			hooks: {}
		});
		const clientLoadingStatus = ref("idle");
		useLazyApiClient({
			eventBus,
			status: clientLoadingStatus,
			load: async () => {
				const { createApiClientModal } = await import("./modal-B7At_mJL.js");
				return () => {
					if (!clientModalRef.value) return null;
					stopClientEvents();
					return createApiClientModal({
						el: clientModalRef.value,
						options: config,
						eventBus,
						workspaceStore
					});
				};
			}
		});
		onBeforeUnmount(stopClientEvents);
		onMounted(async () => {
			const tmpDoc = getTmpDocFromLocalStorage();
			if (mode === "preview" && tmpDoc) await addDocument({
				namespace: tmpDoc.namespace,
				slug: tmpDoc.slug,
				removable: false,
				tmp: true
			});
		});
		useChatScroll();
		useAgentKeyDocuments();
		useCuratedDocuments();
		async function handleSubmit() {
			await chat.sendMessage({ text: prompt.value });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createBaseVNode("div", _hoisted_1$1, null, 512),
				clientLoadingStatus.value !== "idle" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "bg-b-1 text-c-1 fixed right-4 bottom-4 z-[10001] rounded-lg border px-4 py-3 text-sm shadow-lg",
					role: clientLoadingStatus.value === "error" ? "alert" : "status"
				}, toDisplayString(clientLoadingStatus.value === "loading" ? "Loading request editor…" : "Could not load the request editor. Refresh the page and try again."), 9, _hoisted_2)) : createCommentVNode("", true),
				createVNode(Layout_default, {
					onSubmit: handleSubmit,
					onUploadApi: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("uploadApi"))
				}),
				createVNode(Settings_default, { modalState: unref(settingsModal) }, null, 8, ["modalState"])
			], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/agent-chat/dist/App.vue.js
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	props: {
		registryDocuments: {},
		registryUrl: {},
		dashboardUrl: {},
		platformProxyUrl: {},
		baseUrl: {},
		mode: { default: "full" },
		getAccessToken: { type: Function },
		getAgentKey: { type: Function },
		getActiveDocumentJson: { type: Function },
		isLoggedIn: {},
		prefilledMessage: {},
		hideAddApi: { type: Boolean }
	},
	emits: ["uploadApi"],
	setup(__props, { expose: __expose }) {
		const state = createState({
			getActiveDocumentJson: __props.getActiveDocumentJson,
			initialRegistryDocuments: __props.registryDocuments,
			prefilledMessageRef: __props.prefilledMessage,
			platformProxyUrl: __props.platformProxyUrl,
			registryUrl: __props.registryUrl,
			baseUrl: __props.baseUrl,
			mode: __props.mode,
			getAccessToken: __props.getAccessToken,
			getAgentKey: __props.getAgentKey,
			isLoggedIn: __props.isLoggedIn,
			dashboardUrl: __props.dashboardUrl,
			hideAddApi: __props.hideAddApi
		});
		provide(STATE_SYMBOL, state);
		__expose({ addDocumentAsync: state.addDocumentAsync });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Chat_default, { onUploadApi: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("uploadApi")) });
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarChatInterface.vue.js
var AgentScalarChatInterface_default = /* @__PURE__ */ defineComponent({
	__name: "AgentScalarChatInterface",
	props: {
		agentScalarConfiguration: {},
		externalUrls: {},
		workspaceStore: {},
		prefilledMessage: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(App_default), {
				baseUrl: __props.externalUrls.apiBaseUrl,
				dashboardUrl: __props.externalUrls.dashboardUrl,
				getActiveDocumentJson: () => __props.workspaceStore.exportActiveDocument("json"),
				getAgentKey: __props.agentScalarConfiguration?.key ? () => __props.agentScalarConfiguration?.key ?? "" : void 0,
				hideAddApi: __props.agentScalarConfiguration?.hideAddApi,
				mode: __props.agentScalarConfiguration?.key ? "full" : "preview",
				platformProxyUrl: __props.externalUrls.proxyUrl,
				prefilledMessage: __props.prefilledMessage,
				registryDocuments: [],
				registryUrl: __props.externalUrls.registryUrl
			}, null, 8, [
				"baseUrl",
				"dashboardUrl",
				"getActiveDocumentJson",
				"getAgentKey",
				"hideAddApi",
				"mode",
				"platformProxyUrl",
				"prefilledMessage",
				"registryUrl"
			]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarDrawer.vue.script.js
var _hoisted_1 = { class: "agent-scalar-container custom-scroll custom-scroll-self-contain-overflow overflow-auto px-6" };
//#endregion
//#region node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarDrawer.vue.js
var AgentScalarDrawer_default = /*#__PURE__*/ _plugin_vue_export_helper_default$1(/* @__PURE__ */ defineComponent({
	__name: "AgentScalarDrawer",
	props: {
		agentScalarConfiguration: {},
		externalUrls: {},
		workspaceStore: {}
	},
	setup(__props) {
		const agentContext = useAgentContext();
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(Transition, {
				appear: "",
				enterActiveClass: "transition-opacity duration-500",
				enterFromClass: "opacity-0",
				enterToClass: "opacity-100",
				leaveActiveClass: "transition-opacity duration-200",
				leaveFromClass: "opacity-100",
				leaveToClass: "opacity-0"
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", {
					class: "agent-scalar-overlay bg-backdrop fixed inset-0 z-10 ease-[cubic-bezier(0.77,0,0.175,1)]",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(agentContext)?.closeAgent())
				}, null, 512), [[vShow, unref(agentContext)?.showAgent.value]])]),
				_: 1
			}), createVNode(Transition, {
				appear: "",
				enterActiveClass: "transition-transform duration-300",
				enterFromClass: "-translate-x-full",
				enterToClass: "translate-x-0",
				leaveActiveClass: "transition-transform duration-200",
				leaveFromClass: "translate-x-0",
				leaveToClass: "-translate-x-full"
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", {
					class: "agent-scalar left-refs-w-sidebar bg-b-1 fixed inset-y-0 right-12 z-10 grid border-r shadow-lg",
					onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => unref(agentContext)?.closeAgent(), ["escape"]))
				}, [createBaseVNode("div", _hoisted_1, [createVNode(AgentScalarChatInterface_default, {
					agentScalarConfiguration: __props.agentScalarConfiguration,
					externalUrls: __props.externalUrls,
					prefilledMessage: unref(agentContext)?.prefilledMessage,
					workspaceStore: __props.workspaceStore
				}, null, 8, [
					"agentScalarConfiguration",
					"externalUrls",
					"prefilledMessage",
					"workspaceStore"
				])]), createVNode(unref(ScalarIconButton_default), {
					class: "agent-scalar-exit-button absolute top-2 right-2",
					icon: unref(ScalarIconX_default),
					label: unref(translate)("agent.close"),
					weight: "bold",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(agentContext)?.closeAgent())
				}, null, 8, ["icon", "label"])], 544), [[vShow, unref(agentContext)?.showAgent.value]])]),
				_: 1
			})], 64);
		};
	}
}), [["__scopeId", "data-v-7081e73d"]]);
//#endregion
export { AgentScalarDrawer_default as default };
