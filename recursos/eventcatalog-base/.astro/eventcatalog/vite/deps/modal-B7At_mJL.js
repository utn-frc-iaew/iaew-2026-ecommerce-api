import { a as flip, c as offset, l as shift, n as autoUpdate, o as hide, s as limitShift, u as size } from "./floating-ui.dom-C4gUy5sW.js";
import { Cn as ScalarIcon_default, Dn as ScalarIconPlus_default, Fn as ScalarIconCaretDown_default, Ft as useModal, In as useScalarIcon, Kn as entry_default, Ln as useBindCx, M as ScalarTeleportRoot_default, Mt as isMacOS, N as createWorkspaceEventBus, O as getOperationEntries, Pn as ScalarIconCaretRight_default, Q as useLocalization, Rn as cva, Sn as ScalarIconLegacyAdapter_default, Z as provideLocalization, _t as notNullish, f as ScalarDropdownDivider_default, gn as useFloating, h as ScalarDropdownMenu_default, hn as arrow, jn as ScalarIconGear_default, jt as ScalarListboxCheckbox_default, k as getParentEntry, kn as ScalarIconMagnifyingGlass_default, lt as unrefElement, mn as ScalarIconButton_default, p as ScalarDropdownButton_default, t as initializeWorkspaceEventHandlers, v as _plugin_vue_export_helper_default, vt as toArray, wt as ScalarToasts_default, yt as tryOnScopeDispose } from "./workspace-events-BHk-czww.js";
import { a as tabbable, i as isTabbable, n as getTabIndex, r as isFocusable, t as focusable } from "./index.esm-MKPckxPD.js";
import { B as isElectron, E as isOpenApiDocument, Pt as getSelectedBodyContentType, S as getActiveEnvironment, Yr as isDefined, f as getActiveProxyUrl, g as getPathItemOperation, h as forEachPathItemOperation, t as getRequestExampleContext, vt as isHttpMethod, xi as getResolvedRef } from "./request-example-CCgTHEb8.js";
import { $ as resolveDynamicComponent, A as guardReactiveProps, At as unref, B as onBeforeUnmount, C as createSlots, Dt as toRefs, E as createVNode, Et as toRef, F as mergeModels, Ft as normalizeStyle, I as mergeProps, It as toDisplayString, J as openBlock, K as onUnmounted, L as nextTick, Lt as toHandlerKey, N as inject, Nt as normalizeClass, O as defineComponent, Ot as toValue, P as mergeDefaults, Pt as normalizeProps, T as createTextVNode, V as onBeforeUpdate, W as onMounted, X as renderList, Y as provide, Z as renderSlot, _ as computed, _t as markRaw, b as createCommentVNode, bt as readonly, ct as watchPostEffect, d as withKeys, dt as withDirectives, f as withModifiers, ft as customRef, g as cloneVNode, gt as isRef, h as Teleport, it as useSlots, j as h, jt as camelize, k as getCurrentInstance, m as Fragment, mt as getCurrentScope, n as createApp, nt as useId, ot as watch, p as Comment, pt as effectScope, q as onUpdated, rt as useModel, st as watchEffect, u as vShow, ut as withCtx, v as createBaseVNode, vt as onScopeDispose, wt as shallowRef, x as createElementBlock, xt as ref, y as createBlock, yt as reactive, z as onBeforeMount } from "./vue.runtime.esm-bundler-BqKG0iLx.js";
import { A as generateReverseIndex, B as ScalarIconBook_default, N as ScalarSidebarSearchInput_default, V as ScalarIconArrowUpRight_default, a as subscribePluginEvents, d as useExternalExamples, f as getOperationExamples, j as ScalarSidebar_default, k as createSidebarState, l as EXTERNAL_EXAMPLES, n as OperationBlock_default, o as mapHiddenClientsConfig, p as resolveOperationExamples, t as addScalarClassesToHeadless, u as useExampleVisibility, z as ScalarIconEnvelopeSimple_default } from "./add-scalar-classes-B9nZH9kB.js";
//#region node_modules/@scalar/icons/dist/components/ScalarIconBookOpenText.vue.script.js
var _hoisted_1$15 = { key: 0 };
var _hoisted_2$12 = { key: 1 };
var _hoisted_3$10 = { key: 2 };
var _hoisted_4$8 = { key: 3 };
var _hoisted_5$7 = { key: 4 };
var _hoisted_6$7 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconBookOpenText.js
var ScalarIconBookOpenText_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconBookOpenText",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$15, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60ZM164,96h32a12,12,0,0,1,0,24H164a12,12,0,0,1,0-24Zm44,52a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h32A12,12,0,0,1,208,148Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$12, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M232,56V200H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$10, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M232,48H168a32,32,0,0,0-32,32v87.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V80A32,32,0,0,0,88,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,23.94,7.9,7.9,0,0,0,5.12,7.55A8,8,0,0,0,136,232a24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM208,168H168.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h39.73a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,208,168Zm0-32H168.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h39.73a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,208,136Zm0-32H168.27A8.17,8.17,0,0,1,160,96.53,8,8,0,0,1,168,88h39.73A8.17,8.17,0,0,1,216,95.47,8,8,0,0,1,208,104Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$8, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66ZM160,90h40a6,6,0,0,1,0,12H160a6,6,0,0,1,0-12Zm46,38a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,128Zm0,32a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h40A6,6,0,0,1,206,160Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$7, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$7, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.94,35.94,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68ZM160,92h40a4,4,0,0,1,0,8H160a4,4,0,0,1,0-8Zm44,36a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,128Zm0,32a4,4,0,0,1-4,4H160a4,4,0,0,1,0-8h40A4,4,0,0,1,204,160Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconDiscordLogo.vue.script.js
var _hoisted_1$14 = { key: 0 };
var _hoisted_2$11 = { key: 1 };
var _hoisted_3$9 = { key: 2 };
var _hoisted_4$7 = { key: 3 };
var _hoisted_5$6 = { key: 4 };
var _hoisted_6$6 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconDiscordLogo.js
var ScalarIconDiscordLogo_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconDiscordLogo",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$14, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M108,136a16,16,0,1,1-16-16A16,16,0,0,1,108,136Zm56-16a16,16,0,1,0,16,16A16,16,0,0,0,164,120Zm76.07,76.56-67,29.71A20.15,20.15,0,0,1,146,214.9l-8.54-23.13c-3.13.14-6.27.24-9.45.24s-6.32-.1-9.45-.24L110,214.9a20.19,20.19,0,0,1-27.08,11.37l-67-29.71A19.93,19.93,0,0,1,4.62,173.41L34.15,57A20,20,0,0,1,50.37,42.19l36.06-5.93A20.26,20.26,0,0,1,109.22,51.1l4.41,17.41c4.74-.33,9.52-.51,14.37-.51s9.63.18,14.37.51l4.41-17.41a20.25,20.25,0,0,1,22.79-14.84l36.06,5.93A20,20,0,0,1,221.85,57l29.53,116.38A19.93,19.93,0,0,1,240.07,196.56ZM227.28,176,199.23,65.46l-30.07-4.94-2.84,11.17c2.9.58,5.78,1.2,8.61,1.92a12,12,0,1,1-5.86,23.27A168.43,168.43,0,0,0,128,92a168.43,168.43,0,0,0-41.07,4.88,12,12,0,0,1-5.86-23.27c2.83-.72,5.71-1.34,8.61-1.92L86.85,60.52,56.77,65.46,28.72,176l60.22,26.7,5-13.57c-4.37-.76-8.67-1.65-12.88-2.71a12,12,0,0,1,5.86-23.28A168.43,168.43,0,0,0,128,168a168.43,168.43,0,0,0,41.07-4.88,12,12,0,0,1,5.86,23.28c-4.21,1.06-8.51,1.95-12.88,2.71l5,13.57Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$11, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M235.21,185.59l-67,29.7a8.15,8.15,0,0,1-11-4.56L147,183.06a190.5,190.5,0,0,1-19,.94,190.5,190.5,0,0,1-19-.94L98.75,210.73a8.15,8.15,0,0,1-11,4.56l-67-29.7a8,8,0,0,1-4.55-9.24L45.77,60A8.08,8.08,0,0,1,52.31,54l36.06-5.92a8.1,8.1,0,0,1,9.21,6l5,19.63a192.32,192.32,0,0,1,50.88,0l5-19.63a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37A8,8,0,0,1,235.21,185.59Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.94,15.94,0,0,1-9.06-18.51L38,58A16.08,16.08,0,0,1,51,46.13l36.06-5.92a16.21,16.21,0,0,1,18.26,11.88l3.26,12.83Q118.11,64,128,64t19.4.92l3.26-12.83a16.22,16.22,0,0,1,18.26-11.88L205,46.13A16.08,16.08,0,0,1,218,58l29.53,116.38A15.94,15.94,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56a.21.21,0,0,0-.12,0h0L53.61,61.92a.24.24,0,0,0-.09,0L24,178.33,91,208a.21.21,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$9, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$7, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M102,140a10,10,0,1,1-10-10A10,10,0,0,1,102,140Zm62-10a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm73.64,61.08-67,29.71a14.43,14.43,0,0,1-5.77,1.21,14.13,14.13,0,0,1-13.25-9.18L143,189.43c-4.93.37-9.92.58-15,.58s-10.06-.21-15-.58l-8.63,23.39A14.13,14.13,0,0,1,91.13,222a14.43,14.43,0,0,1-5.77-1.21l-67-29.71a14,14,0,0,1-7.93-16.2L40,58.5A14.07,14.07,0,0,1,51.34,48.11L87.4,42.19a14.19,14.19,0,0,1,16,10.39l3.69,14.53a197.5,197.5,0,0,1,41.82,0l3.69-14.53a14.19,14.19,0,0,1,16-10.39l36.06,5.92A14.07,14.07,0,0,1,216,58.5l29.53,116.38A14,14,0,0,1,237.64,191.08Zm-3.7-13.25L204.41,61.45a2.08,2.08,0,0,0-1.7-1.5L166.65,54a2.13,2.13,0,0,0-2.42,1.5l-3.36,13.24a169.28,169.28,0,0,1,16.75,3.76A6,6,0,0,1,176,84.31a5.71,5.71,0,0,1-1.62-.23A174.26,174.26,0,0,0,128,78a174.26,174.26,0,0,0-46.38,6.08,6,6,0,1,1-3.24-11.55,169.28,169.28,0,0,1,16.75-3.76L91.77,55.53A2.12,2.12,0,0,0,89.35,54L53.29,60a2.08,2.08,0,0,0-1.7,1.5L22.06,177.83a2,2,0,0,0,1.16,2.28l67,29.7a2.19,2.19,0,0,0,1.76,0,2.07,2.07,0,0,0,1.14-1.17l7.58-20.55a171.46,171.46,0,0,1-22.33-4.64,6,6,0,1,1,3.24-11.55A174.26,174.26,0,0,0,128,178a174.26,174.26,0,0,0,46.38-6.08,6,6,0,1,1,3.24,11.55,171.46,171.46,0,0,1-22.33,4.64l7.58,20.55a2.07,2.07,0,0,0,1.14,1.17,2.19,2.19,0,0,0,1.76,0l67-29.7A2,2,0,0,0,233.94,177.83Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$6, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$6, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64-8a8,8,0,1,0,8,8A8,8,0,0,0,164,132Zm72.83,57.25-67,29.71a12.36,12.36,0,0,1-5,1,12.13,12.13,0,0,1-11.38-7.88l-9.15-24.81c-5.36.45-10.81.69-16.34.69s-11-.24-16.34-.69l-9.15,24.81A12.13,12.13,0,0,1,91.13,220a12.36,12.36,0,0,1-5-1l-67-29.71a12,12,0,0,1-6.8-13.88L41.9,59a12.06,12.06,0,0,1,9.77-8.91l36.06-5.92a12.18,12.18,0,0,1,13.73,8.91l4.12,16.22a195.47,195.47,0,0,1,44.84,0l4.12-16.22a12.18,12.18,0,0,1,13.73-8.91l36.06,5.92A12.06,12.06,0,0,1,214.1,59l29.53,116.38A12,12,0,0,1,236.83,189.25Zm-1-11.91L206.35,61A4.07,4.07,0,0,0,203,58L167,52.05a4.15,4.15,0,0,0-4.69,3L158.4,70.38a166.74,166.74,0,0,1,18.68,4.08,4,4,0,1,1-2.16,7.7A176.21,176.21,0,0,0,128,76a176.21,176.21,0,0,0-46.92,6.16,4,4,0,1,1-2.16-7.7A166.74,166.74,0,0,1,97.6,70.38L93.71,55a4.15,4.15,0,0,0-4.69-3L53,58a4.07,4.07,0,0,0-3.31,3L20.12,177.34a4,4,0,0,0,2.29,4.59l67,29.71a4.16,4.16,0,0,0,3.35,0A4,4,0,0,0,95,209.35l8.45-22.88a171.49,171.49,0,0,1-24.53-4.92,4,4,0,0,1,2.16-7.71A176.21,176.21,0,0,0,128,180a176.21,176.21,0,0,0,46.92-6.16,4,4,0,0,1,2.16,7.71,171.49,171.49,0,0,1-24.53,4.92L161,209.35a4,4,0,0,0,2.23,2.32,4.16,4.16,0,0,0,3.35,0l67-29.71A4,4,0,0,0,235.88,177.34Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconFileDashed.vue.script.js
var _hoisted_1$13 = { key: 0 };
var _hoisted_2$10 = { key: 1 };
var _hoisted_3$8 = { key: 2 };
var _hoisted_4$6 = { key: 3 };
var _hoisted_5$5 = { key: 4 };
var _hoisted_6$5 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconFileDashed.js
var ScalarIconFileDashed_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconFileDashed",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$13, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M84,224a12,12,0,0,1-12,12H56a20,20,0,0,1-20-20V184a12,12,0,0,1,24,0v28H72A12,12,0,0,1,84,224ZM220,88v48a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H120a12,12,0,0,1,0-24h32a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57ZM80,20H56A20,20,0,0,0,36,40V64a12,12,0,0,0,24,0V44H80a12,12,0,0,0,0-24ZM208,164a12,12,0,0,0-12,12v36h-4a12,12,0,0,0,0,24h8a20,20,0,0,0,20-20V176A12,12,0,0,0,208,164ZM48,156a12,12,0,0,0,12-12V104a12,12,0,0,0-24,0v40A12,12,0,0,0,48,156Zm104,56H112a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$10, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M208,88H152V32Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$8, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$6, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M78,224a6,6,0,0,1-6,6H56a14,14,0,0,1-14-14V184a6,6,0,0,1,12,0v32a2,2,0,0,0,2,2H72A6,6,0,0,1,78,224ZM214,88v48a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H120a6,6,0,0,1,0-12h32a6,6,0,0,1,4.24,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.51L158,46.49ZM80,26H56A14,14,0,0,0,42,40V64a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12ZM208,170a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14V176A6,6,0,0,0,208,170ZM48,150a6,6,0,0,0,6-6V104a6,6,0,0,0-12,0v40A6,6,0,0,0,48,150Zm104,68H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$5, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$5, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M76,224a4,4,0,0,1-4,4H56a12,12,0,0,1-12-12V184a4,4,0,0,1,8,0v32a4,4,0,0,0,4,4H72A4,4,0,0,1,76,224ZM212,88v48a4,4,0,0,1-8,0V92H152a4,4,0,0,1-4-4V36H120a4,4,0,0,1,0-8h32a4,4,0,0,1,2.83,1.17l56,56A4,4,0,0,1,212,88Zm-56-4h42.34L156,41.66ZM80,28H56A12,12,0,0,0,44,40V64a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8ZM208,172a4,4,0,0,0-4,4v40a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V176A4,4,0,0,0,208,172ZM48,148a4,4,0,0,0,4-4V104a4,4,0,0,0-8,0v40A4,4,0,0,0,48,148Zm104,72H112a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconFileText.vue.script.js
var _hoisted_1$12 = { key: 0 };
var _hoisted_2$9 = { key: 1 };
var _hoisted_3$7 = { key: 2 };
var _hoisted_4$5 = { key: 3 };
var _hoisted_5$4 = { key: 4 };
var _hoisted_6$4 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconFileText.js
var ScalarIconFileText_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconFileText",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$12, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$9, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M208,88H152V32Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$7, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$5, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$4, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$4, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGithubLogo.vue.script.js
var _hoisted_1$11 = { key: 0 };
var _hoisted_2$8 = { key: 1 };
var _hoisted_3$6 = { key: 2 };
var _hoisted_4$4 = { key: 3 };
var _hoisted_5$3 = { key: 4 };
var _hoisted_6$3 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconGithubLogo.js
var ScalarIconGithubLogo_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconGithubLogo",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$11, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$8, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$6, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$4, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$3, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$3, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconHouse.vue.script.js
var _hoisted_1$10 = { key: 0 };
var _hoisted_2$7 = { key: 1 };
var _hoisted_3$5 = { key: 2 };
var _hoisted_4$3 = { key: 3 };
var _hoisted_5$2 = { key: 4 };
var _hoisted_6$2 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconHouse.js
var ScalarIconHouse_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconHouse",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$10, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$7, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$5, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$3, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$2, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$2, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconNotepad.vue.script.js
var _hoisted_1$9 = { key: 0 };
var _hoisted_2$6 = { key: 1 };
var _hoisted_3$4 = { key: 2 };
var _hoisted_4$2 = { key: 3 };
var _hoisted_5$1 = { key: 4 };
var _hoisted_6$1 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconNotepad.js
var ScalarIconNotepad_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconNotepad",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$9, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M172,124a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,124Zm-12,28H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM220,40V200a36,36,0,0,1-36,36H72a36,36,0,0,1-36-36V40A12,12,0,0,1,48,28H72V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h24A12,12,0,0,1,220,40ZM196,52H184v4a12,12,0,0,1-24,0V52H140v4a12,12,0,0,1-24,0V52H96v4a12,12,0,0,1-24,0V52H60V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$6, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M208,40V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$4, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H136V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48a8,8,0,0,0-8,8V200a32,32,0,0,0,32,32H184a32,32,0,0,0,32-32V40A8,8,0,0,0,208,32ZM120,56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM80,72a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0v8A8,8,0,0,1,80,72Zm80,96H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm24-72a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$2, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,40V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V40a6,6,0,0,1,6-6H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h26A6,6,0,0,1,214,40Zm-12,6H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H54V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5$1, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6$1, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M164,128a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,128Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM212,40V200a28,28,0,0,1-28,28H72a28,28,0,0,1-28-28V40a4,4,0,0,1,4-4H76V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h28A4,4,0,0,1,212,40Zm-8,4H180V56a4,4,0,0,1-8,0V44H132V56a4,4,0,0,1-8,0V44H84V56a4,4,0,0,1-8,0V44H52V200a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconSwap.vue.script.js
var _hoisted_1$8 = { key: 0 };
var _hoisted_2$5 = { key: 1 };
var _hoisted_3$3 = { key: 2 };
var _hoisted_4$1 = { key: 3 };
var _hoisted_5 = { key: 4 };
var _hoisted_6 = { key: 5 };
//#endregion
//#region node_modules/@scalar/icons/dist/components/ScalarIconSwap.js
var ScalarIconSwap_default = /* @__PURE__ */ defineComponent({
	name: "ScalarIconSwap",
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
			}, unref(bind)), [renderSlot(_ctx.$slots, "default"), unref(weight) === "bold" ? (openBlock(), createElementBlock("g", _hoisted_1$8, [..._cache[0] || (_cache[0] = [createBaseVNode("path", { d: "M228,48V152a20,20,0,0,1-20,20H112.92a12,12,0,0,1-17.41,16.49l-20-20a12,12,0,0,1,0-17l20-20A12,12,0,0,1,112.92,148H204V52H100a12,12,0,0,1-24,0V48A20,20,0,0,1,96,28H208A20,20,0,0,1,228,48ZM168,192a12,12,0,0,0-12,12H52V108h91.08a12,12,0,0,0,17.41,16.49l20-20a12,12,0,0,0,0-17l-20-20A12,12,0,0,0,143.08,84H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H160a20,20,0,0,0,20-20v-4A12,12,0,0,0,168,192Z" }, null, -1)])])) : unref(weight) === "duotone" ? (openBlock(), createElementBlock("g", _hoisted_2$5, [..._cache[1] || (_cache[1] = [createBaseVNode("path", {
				d: "M216,48V152a8,8,0,0,1-8,8H168v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H88V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
				opacity: "0.2"
			}, null, -1), createBaseVNode("path", { d: "M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z" }, null, -1)])])) : unref(weight) === "fill" ? (openBlock(), createElementBlock("g", _hoisted_3$3, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M224,48V152a16,16,0,0,1-16,16H112v16a8,8,0,0,1-13.66,5.66l-24-24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,112,136v16h96V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104h96v16a8,8,0,0,0,13.66,5.66l24-24a8,8,0,0,0,0-11.32l-24-24A8,8,0,0,0,144,72V88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z" }, null, -1)])])) : unref(weight) === "light" ? (openBlock(), createElementBlock("g", _hoisted_4$1, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M222,48V152a14,14,0,0,1-14,14H94.49l13.75,13.76a6,6,0,1,1-8.48,8.48l-24-24a6,6,0,0,1,0-8.48l24-24a6,6,0,0,1,8.48,8.48L94.49,154H208a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2v8a6,6,0,0,1-12,0V48A14,14,0,0,1,96,34H208A14,14,0,0,1,222,48ZM168,194a6,6,0,0,0-6,6v8a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V104a2,2,0,0,1,2-2H161.51l-13.75,13.76a6,6,0,1,0,8.48,8.48l24-24a6,6,0,0,0,0-8.48l-24-24a6,6,0,0,0-8.48,8.48L161.51,90H48a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14H160a14,14,0,0,0,14-14v-8A6,6,0,0,0,168,194Z" }, null, -1)])])) : unref(weight) === "regular" ? (openBlock(), createElementBlock("g", _hoisted_5, [..._cache[4] || (_cache[4] = [createBaseVNode("path", { d: "M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z" }, null, -1)])])) : unref(weight) === "thin" ? (openBlock(), createElementBlock("g", _hoisted_6, [..._cache[5] || (_cache[5] = [createBaseVNode("path", { d: "M220,48V152a12,12,0,0,1-12,12H89.66l17.17,17.17a4,4,0,0,1-5.66,5.66l-24-24a4,4,0,0,1,0-5.66l24-24a4,4,0,0,1,5.66,5.66L89.66,156H208a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4H96a4,4,0,0,0-4,4v8a4,4,0,0,1-8,0V48A12,12,0,0,1,96,36H208A12,12,0,0,1,220,48ZM168,196a4,4,0,0,0-4,4v8a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V104a4,4,0,0,1,4-4H166.34l-17.17,17.17a4,4,0,0,0,5.66,5.66l24-24a4,4,0,0,0,0-5.66l-24-24a4,4,0,0,0-5.66,5.66L166.34,92H48a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12H160a12,12,0,0,0,12-12v-8A4,4,0,0,0,168,196Z" }, null, -1)])])) : createCommentVNode("", true)], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/sidebar/dist/helpers/get-child-entry.js
/**
* Recursively searches for and returns the first child node (including the given node itself)
* of a specific type within the provided node's subtree.
*
* @template Type - The type of node to search for.
* @param type - The node type to match.
* @param node - The root node to begin searching from.
* @returns The first child node of the specified type, or null if not found.
*/
var getChildEntry = (type, node) => {
	if (node.type === type) return node;
	if ("children" in node) for (const child of node.children ?? []) {
		const result = getChildEntry(type, child);
		if (result) return result;
	}
	return null;
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/modal-events.js
var EMPTY_REQUEST_BODY_COMPOSITION_SELECTION = Object.freeze({});
function initializeModalEvents({ eventBus, isSidebarOpen, requestBodyCompositionSelection, sidebarState, modalState, store }) {
	/** Initialize workspace event handlers */
	initializeWorkspaceEventHandlers({
		eventBus,
		store: ref(store),
		hooks: { "operation:create:draft-example": { onAfterExecute: ({ documentName, meta: { path, method }, exampleName }) => {
			store.buildSidebar(documentName);
			const entry = sidebarState.getEntryByLocation({
				document: documentName,
				path,
				method,
				example: exampleName
			});
			if (entry) sidebarState.handleSelectItem(entry.id);
		} } }
	});
	eventBus.on("scroll-to:nav-item", ({ id }) => sidebarState.handleSelectItem(id));
	eventBus.on("ui:toggle:sidebar", () => isSidebarOpen.value = !isSidebarOpen.value);
	eventBus.on("ui:close:client-modal", () => modalState.hide());
	eventBus.on("ui:open:client-modal", (payload) => {
		const nextRequestBodyCompositionSelection = payload && "requestBodyCompositionSelection" in payload && payload.requestBodyCompositionSelection ? payload.requestBodyCompositionSelection : EMPTY_REQUEST_BODY_COMPOSITION_SELECTION;
		if (!payload) {
			requestBodyCompositionSelection.value = nextRequestBodyCompositionSelection;
			modalState.show();
			return;
		}
		const previousSelectedId = sidebarState.state.selectedItem.value;
		if ("id" in payload && payload.id) {
			let targetId = payload.id;
			if ("exampleName" in payload && payload.exampleName) {
				const operationEntry = sidebarState.state.getEntryById(payload.id);
				if (operationEntry && "children" in operationEntry && operationEntry.children) {
					const exampleEntry = operationEntry.children.find((child) => child.type === "example" && child.name === payload.exampleName);
					if (exampleEntry) targetId = exampleEntry.id;
				}
			}
			sidebarState.handleSelectItem(targetId);
		} else if ("method" in payload && "path" in payload) {
			const activeDoc = store.workspace.activeDocument;
			sidebarState.handleSelectItem(sidebarState.getEntryByLocation({
				document: isOpenApiDocument(activeDoc) ? activeDoc["x-scalar-navigation"]?.id ?? "" : "",
				path: payload.path,
				method: payload.method,
				example: payload.exampleName
			})?.id ?? "");
		}
		if (!(modalState.open && sidebarState.state.selectedItem.value === previousSelectedId)) requestBodyCompositionSelection.value = nextRequestBodyCompositionSelection;
		modalState.show();
	});
}
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/helpers/resolve-route-parameters.js
/** Type guard to check if an entry is an example. */
var isExample = (entry) => entry.type === "example";
/**
* Gets the document from the workspace store.
* Returns undefined if the document slug is not provided or the document does not exist.
* Modal routing is OpenAPI-only — AsyncAPI docs surface as undefined here.
*/
var getDocument = (ctx) => {
	const doc = ctx.store.workspace.documents[ctx.documentSlug ?? ""];
	return isOpenApiDocument(doc) ? doc : void 0;
};
/**
* Resolves the document slug from a raw input value.
*
* When "default" is specified and no document exists with that slug,
* we fall back to the active document or the first available document.
* Modal routing is OpenAPI-only, so the fallback skips AsyncAPI documents —
* otherwise opening the modal with default params on a workspace that has
* an AsyncAPI active or first document would hand a slug back that
* `getDocument` then resolves to undefined, rendering the modal with
* `document: null` even when OpenAPI documents exist.
*/
var resolveDocumentSlug = (store, slug) => {
	if (slug !== "default" || store.workspace.documents[slug] !== void 0) return slug;
	const activeSlug = store.workspace["x-scalar-active-document"];
	if (activeSlug && isOpenApiDocument(store.workspace.documents[activeSlug])) return activeSlug;
	return Object.entries(store.workspace.documents).find(([, document]) => isOpenApiDocument(document))?.[0];
};
/**
* Resolves the path from a raw input value.
*
* When "default" is specified, returns the first available path in the document.
* This is useful for initial navigation when no specific path is requested.
*/
var resolvePath = (ctx, path, isWebhook = false) => {
	const document = getDocument(ctx);
	if (!document) return;
	if (path === "default") return Object.keys(isWebhook ? document.webhooks ?? {} : document.paths ?? {})[0];
	return path;
};
/**
* Resolves the HTTP method from a raw input value.
*
* When "default" is specified, returns the first valid HTTP method for the given path.
* This ensures we select a real method rather than metadata keys like "parameters" or "summary".
*/
var resolveMethod = (ctx, path, method, isWebhook = false) => {
	const document = getDocument(ctx);
	if (!document || !path) return;
	const pathItem = isWebhook ? document.webhooks?.[path] : document.paths?.[path];
	if (method === "default" && !getPathItemOperation(pathItem, method)) {
		const methods = [];
		forEachPathItemOperation(pathItem, (method) => methods.push(method));
		return methods[0];
	}
	return method && (isHttpMethod(method) || getPathItemOperation(pathItem, method)) ? method : void 0;
};
/**
* Resolves the example name from a raw input value.
*
* When "default" is specified, returns the first available example name.
* Falls back to "default" when no examples exist, which signals to use the default request body.
*/
var resolveExampleName = (ctx, operation, exampleKey) => {
	if (!getDocument(ctx) || operation?.type !== "operation") return "default";
	const examples = operation.children?.filter(isExample) ?? [];
	const matchingExample = examples.find((child) => child.name === exampleKey);
	if (matchingExample) return matchingExample.name;
	if (exampleKey === "default") return examples[0]?.name ?? "default";
	return "default";
};
/**
* Resolves all route parameters from raw input values to their actual values.
*
* This function handles "default" placeholders by looking up actual values from the workspace store.
* It ensures the modal can be opened even when the caller does not know specific paths, methods, or examples.
*/
var resolveRouteParameters = (store, params) => {
	const documentSlug = resolveDocumentSlug(store, params.documentSlug);
	const ctx = {
		store,
		documentSlug
	};
	const isWebhook = params.isWebhook ?? false;
	const path = resolvePath(ctx, params.path, isWebhook);
	const method = resolveMethod(ctx, path, params.method, isWebhook);
	const routeType = isWebhook ? { isWebhook: true } : {};
	const traversedDocument = getDocument(ctx)?.["x-scalar-navigation"];
	if (!traversedDocument) return {
		documentSlug,
		path,
		method,
		example: "default",
		...routeType
	};
	const operation = getOperationEntries(traversedDocument).get(`${path}|${method}`)?.find((entry) => entry.type === (isWebhook ? "webhook" : "operation"));
	return {
		documentSlug,
		path,
		method,
		example: resolveExampleName(ctx, operation, params.example),
		...routeType
	};
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/helpers/generate-location-id.js
/**
* Generates a unique string ID for an API location, based on the document, path, method, and example.
* Filters out undefined values and serializes the composite array into a stable string.
*
* @param params - An object containing document, path, method, and optional example name.
* @returns A stringified array representing the unique location identifier.
*
* Example:
*   generateLocationId({ document: 'mydoc', path: '/users', method: 'get', example: 'default' })
*   // => '["mydoc","/users","get","default"]'
*/
var generateLocationId = ({ document, path, method, example, isWebhook = false }) => {
	return JSON.stringify([
		document,
		isWebhook ? "webhook" : void 0,
		path,
		method,
		example
	].filter(isDefined));
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/hooks/use-modal-sidebar.js
/**
* useSidebarState - Custom hook to manage the sidebar state and navigation logic in the Scalar API client
*
* This composable manages the sidebar structure, synchronizes selection state
* with the current route, and provides a handler for selecting sidebar items.
*
* Example usage:
*
* const { handleSelectItem, sidebarState } = useSidebarState({
*   workspaceStore,
*   workspaceSlug,
*   documentSlug,
*   path,
*   method,
*   exampleName,
* })
*/
var useModalSidebar = ({ workspaceStore, documentSlug, path, method, exampleName, isWebhook, route }) => {
	const activeIsWebhook = isWebhook ?? computed(() => false);
	const entries = computed(() => {
		const doc = workspaceStore?.workspace.documents[toValue(documentSlug) ?? ""];
		return isOpenApiDocument(doc) ? doc["x-scalar-navigation"]?.children ?? [] : [];
	});
	const state = createSidebarState(entries);
	/**
	* Computed index for fast lookup of sidebar nodes by their unique API location.
	*
	* - Only indexes nodes of type 'operation', or 'example'.
	* - The lookup key is a serialized array of: [operationPath, operationMethod, exampleName?].
	* - Supports precise resolution of sidebar entries given an API "location".
	*/
	const locationIndex = computed(() => generateReverseIndex({
		items: entries.value,
		nestedKey: "children",
		filter: (node) => node.type === "operation" || node.type === "example" || node.type === "webhook",
		getId: (node) => {
			if (node.type === "webhook") return generateLocationId({
				document: toValue(documentSlug) ?? "",
				path: node.name,
				method: node.method,
				isWebhook: true
			});
			const operation = getParentEntry("operation", node);
			return generateLocationId({
				document: toValue(documentSlug) ?? "",
				path: operation?.path,
				method: operation?.method,
				example: node.type === "example" ? node.name : void 0
			});
		}
	}));
	/**
	* Looks up a sidebar entry by its unique API location.
	* - First tries to find an entry matching all provided properties (including example).
	* - If not found, falls back to matching only the operation (ignores example field).
	* This allows resolving either examples, operations, or documents as appropriate.
	*
	* @param location - Object specifying the document name, path, method, and optional example name.
	* @returns The matching sidebar entry, or undefined if none found.
	*
	* Example:
	*   const entry = getEntryByLocation({
	*     document: 'pets',
	*     path: '/pets',
	*     method: 'get',
	*     example: 'default',
	*   })
	*/
	const getEntryByLocation = (location) => {
		const entryWithExample = locationIndex.value.get(generateLocationId({
			document: location.document,
			path: location.path,
			method: location.method,
			example: location.example,
			isWebhook: location.isWebhook
		}));
		if (entryWithExample) return entryWithExample;
		return locationIndex.value.get(generateLocationId({
			document: location.document,
			path: location.path,
			method: location.method,
			isWebhook: location.isWebhook
		}));
	};
	/**
	* Handles item selection from the sidebar and routes navigation accordingly.
	*
	* Example:
	*   handleSelectItem('id-of-entry')
	*/
	const handleSelectItem = (id) => {
		const entry = state.getEntryById(id);
		if (!entry) {
			console.warn(`Could not find sidebar entry with id ${id} to select`);
			return;
		}
		if (entry.type === "operation" || entry.type === "example") {
			if (state.isSelected(id)) {
				state.setExpanded(id, !state.isExpanded(id));
				return;
			}
			const operation = getParentEntry("operation", entry);
			const example = getChildEntry("example", entry);
			if (example) {
				state.setSelected(example.id);
				state.setExpanded(example.id, true);
			} else state.setSelected(id);
			if (!operation) return;
			return route({
				documentSlug: toValue(documentSlug),
				path: operation.path,
				method: operation.method,
				example: example?.name ?? "default"
			});
		}
		if (entry.type === "webhook") {
			state.setSelected(id);
			return route({
				documentSlug: toValue(documentSlug),
				path: entry.name,
				method: entry.method,
				example: "default",
				isWebhook: true
			});
		}
		state.setExpanded(id, !state.isExpanded(id));
	};
	/** Keep the sidebar state in sync with the modal parameters */
	watch([
		documentSlug,
		path,
		method,
		exampleName,
		activeIsWebhook
	], ([newDocument, newPath, newMethod, newExample, newIsWebhook]) => {
		if (!newDocument) {
			state.setSelected(null);
			return;
		}
		const entry = getEntryByLocation({
			document: newDocument,
			path: newPath,
			method: newMethod,
			example: newExample,
			isWebhook: newIsWebhook
		});
		if (entry) {
			state.setSelected(entry.id);
			state.setExpanded(entry.id, true);
		}
	}, { immediate: true });
	return {
		handleSelectItem,
		state,
		getEntryByLocation
	};
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/helpers/handle-hotkeys.js
/** Default hotkeys available in most contexts */
var DEFAULT_HOTKEYS = {
	Enter: {
		event: "operation:send:request:hotkey",
		modifiers: ["default"]
	},
	b: {
		event: "ui:toggle:sidebar",
		modifiers: ["default"]
	},
	k: {
		event: "ui:open:command-palette",
		modifiers: ["default"]
	},
	l: {
		event: "ui:focus:address-bar",
		modifiers: ["default"]
	},
	j: {
		event: "ui:focus:search",
		modifiers: ["default"]
	},
	i: {
		event: "ui:open:settings",
		modifiers: ["default"]
	},
	s: {
		event: "ui:save:local-document",
		modifiers: ["default"]
	}
};
/** Hotkey map by layout, we can allow the user to override this later */
var HOTKEYS = {
	web: DEFAULT_HOTKEYS,
	modal: {
		...DEFAULT_HOTKEYS,
		Escape: {
			event: "ui:close:client-modal",
			modifiers: []
		},
		l: {
			event: "ui:focus:send-button",
			modifiers: ["default"]
		}
	},
	desktop: {
		...DEFAULT_HOTKEYS,
		n: {
			event: "ui:open:command-palette",
			modifiers: ["default"]
		},
		t: {
			event: "tabs:add:tab",
			modifiers: ["default"]
		},
		w: {
			event: "tabs:close:tab",
			modifiers: ["default"]
		},
		ArrowLeft: {
			event: "tabs:navigate:previous",
			modifiers: ["default", "altKey"]
		},
		ArrowRight: {
			event: "tabs:navigate:next",
			modifiers: ["default", "altKey"]
		},
		1: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		2: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		3: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		4: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		5: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		6: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		7: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		8: {
			event: "tabs:focus:tab",
			modifiers: ["default"]
		},
		9: {
			event: "tabs:focus:tab-last",
			modifiers: ["default"]
		}
	}
};
/** Keys that should work in input fields when the modifier is pressed */
var INPUT_ALLOWED_KEYS = /* @__PURE__ */ new Set([
	"Escape",
	"ArrowDown",
	"ArrowUp",
	"Enter"
]);
/**
* Checks if all required modifiers are pressed.
* Resolves 'default' to metaKey (macOS) or ctrlKey (Windows/Linux).
*/
var areModifiersPressed = (event, modifiers) => modifiers.length > 0 && modifiers.map((modifier) => modifier === "default" ? isMacOS() ? "metaKey" : "ctrlKey" : modifier).every((key) => event[key] === true);
/**
* Determines if the event target is an editable element where hotkeys should be blocked.
* Returns true if we should block the hotkey, false otherwise.
*/
var isEditableElement = (event, key) => {
	if (!(event.target instanceof HTMLElement)) return false;
	const target = event.target;
	if (target.tagName === "INPUT") return !INPUT_ALLOWED_KEYS.has(key);
	return target.tagName === "TEXTAREA" || target.contentEditable === "true" || target.hasAttribute("contenteditable");
};
/**
* Handles global keyboard shortcuts.
* Checks modifier keys and input context before emitting events.
*
* @param event - the keyboard event
* @param eventBus - event bus for emitting hotkey actions
* @param layout - client layout
*/
var handleHotkeys = (event, eventBus, layout) => {
	/** Special case for space */
	const key = event.key === " " ? "Space" : event.key;
	/** Get the discriminated hotkey event with payload  */
	const hotkeyEvent = HOTKEYS[layout][key];
	if (!hotkeyEvent) return;
	const payload = { event };
	if (key === "Escape") {
		eventBus.emit(hotkeyEvent.event, payload, { skipUnpackProxy: true });
		return;
	}
	if (areModifiersPressed(event, hotkeyEvent.modifiers)) {
		eventBus.emit(hotkeyEvent.event, payload, { skipUnpackProxy: true });
		return;
	}
	if (hotkeyEvent.modifiers.length > 0) return;
	if (!isEditableElement(event, key)) eventBus.emit(hotkeyEvent.event, payload, { skipUnpackProxy: true });
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/hooks/use-global-hot-keys.js
/**
* Global hotkey handler for the app (web + desktop)
*
* @param eventBus - workspace event bus
* @param layout - client layout
* @param disableListeners - whether to disable the listeners
*/
var useGlobalHotKeys = (eventBus, layout, disableListeners) => {
	const handleKeyDown = (ev) => {
		if (toValue(disableListeners)) return;
		handleHotkeys(ev, eventBus, layout);
	};
	onMounted(() => window.addEventListener("keydown", handleKeyDown));
	onBeforeUnmount(() => window.removeEventListener("keydown", handleKeyDown));
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/resize/Resize.vue.script.js
var draggingClassName = "scalar-dragging";
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/resize/Resize.vue.js
var Resize_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Resize",
	props: { width: {} },
	emits: ["update:width"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const isDragging = ref(false);
		const startDrag = (event) => {
			event.preventDefault();
			const startX = event.clientX;
			/** Current sidebar width when dragging starts */
			const startWidth = __props.width;
			const doDrag = (dragEvent) => {
				isDragging.value = true;
				document.body.classList.add(draggingClassName);
				let newWidth = startWidth + dragEvent.clientX - startX;
				if (newWidth > 420)
 /** Elastic effect */
				newWidth = 420 + (newWidth - 420) * .2;
				if (newWidth < 240) newWidth = 240;
				emit("update:width", newWidth);
			};
			const stopDrag = () => {
				isDragging.value = false;
				document.body.classList.remove(draggingClassName);
				document.documentElement.removeEventListener("mousemove", doDrag, false);
				document.documentElement.removeEventListener("mouseup", stopDrag, false);
				/** Reset to max width if exceeded */
				if (__props.width > 420) emit("update:width", 360);
				else if (__props.width < 240) emit("update:width", 240);
			};
			document.documentElement.addEventListener("mousemove", doDrag, false);
			document.documentElement.addEventListener("mouseup", stopDrag, false);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "relative",
				style: normalizeStyle({ width: `${__props.width}px` })
			}, [renderSlot(_ctx.$slots, "default", {}, void 0, true), createBaseVNode("div", {
				class: "resizer",
				onMousedown: startDrag
			}, null, 32)], 4);
		};
	}
}), [["__scopeId", "data-v-e2c54c18"]]);
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/search/helpers/create-fuse-instance.js
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
				name: "description",
				weight: .3
			},
			{
				name: "operationId",
				weight: .6
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
				name: "method",
				weight: .3
			},
			{
				name: "documentName",
				weight: .3
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
//#region node_modules/@scalar/api-client/dist/v2/features/search/helpers/create-search-index.js
/**
* Create a search index from a list of entries.
*/
function createSearchIndex(documents) {
	const index = [];
	/**
	* Recursively processes entries and their children to build the search index.
	*/
	function processEntries(entriesToProcess, document) {
		entriesToProcess.forEach((entry) => {
			addEntryToIndex(entry, index, document);
			if ("children" in entry && entry.children) processEntries(entry.children, document);
		});
	}
	documents?.forEach((document) => processEntries(document["x-scalar-navigation"]?.children ?? [], document));
	return index;
}
/**
* Adds a single entry to the search index, handling all entry types recursively.
*/
function addEntryToIndex(entry, index, document) {
	if (entry.type === "operation") {
		const operation = getResolvedRef(getPathItemOperation(document?.paths?.[entry.path], entry.method)) ?? {};
		index.push({
			type: "operation",
			title: entry.title,
			id: entry.id,
			description: operation.description || "",
			method: entry.method,
			path: entry.path,
			operationId: operation.operationId,
			entry,
			documentName: document?.info.title ?? ""
		});
		return;
	}
	if (entry.type === "tag" && entry.isTagGroup !== true) {
		index.push({
			id: entry.id,
			title: entry.title,
			description: entry.description || "",
			type: "tag",
			entry,
			documentName: document?.info.title ?? ""
		});
		return;
	}
	if (entry.type === "tag" && entry.isTagGroup === true) {
		index.push({
			id: entry.id,
			title: entry.title,
			description: "Tag Group",
			type: "tag",
			entry,
			documentName: document?.info.title ?? ""
		});
		return;
	}
	if (entry.type === "text") {
		index.push({
			id: entry.id,
			type: "heading",
			title: entry.title ?? "",
			description: "Heading",
			entry,
			documentName: document?.info.title ?? ""
		});
		return;
	}
}
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/search/hooks/use-search-index.js
var MAX_SEARCH_RESULTS = 25;
/**
* Creates the search index from multiple OpenAPI documents
*/
var useSearchIndex = (documents) => {
	/** When the document changes we replace the search index */
	const fuse = computed(() => {
		const instance = createFuseInstance();
		instance.setCollection(createSearchIndex(toValue(documents)));
		return instance;
	});
	const query = ref("");
	return {
		results: computed(() => {
			if (query.value.length !== 0) return fuse.value.search(query.value, { limit: MAX_SEARCH_RESULTS }).flatMap((result) => {
				if (result.item.entry.type !== "operation") return [];
				return result.item.entry;
			});
			return null;
		}),
		query
	};
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarHeader/ScalarHeaderButton.vue.js
var ScalarHeaderButton_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarHeaderButton",
	props: {
		is: { default: "button" },
		cta: { type: Boolean }
	},
	setup(__props) {
		const variants = cva({
			base: "group/button flex items-center rounded px-3 py-2 text-base/4 no-underline",
			variants: { cta: {
				true: "font-bold bg-b-header-cta text-sm/4 text-c-header-cta hover:bg-h-header-cta",
				false: "text-c-header-2 hover:text-c-header-1"
			} }
		});
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.is), mergeProps({ type: __props.is === "button" ? "button" : void 0 }, unref(cx)(unref(variants)({ cta: __props.cta }))), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["type"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuButton.vue.script.js
var _hoisted_1$7 = { class: "h-5 w-auto" };
var _hoisted_2$4 = {
	key: 0,
	class: "ml-1 truncate text-sm font-medium"
};
var _hoisted_3$2 = { class: "sr-only" };
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuButton.vue.js
var ScalarMenuButton_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarMenuButton",
	props: { open: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarHeaderButton_default), { class: "gap-0.75 px-2 py-1.5 text-c-header-1 hover:bg-b-header-2" }, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_1$7, [renderSlot(_ctx.$slots, "logo", {}, () => [createVNode(unref(ScalarIcon_default), {
						icon: "Logo",
						size: "lg"
					})])]),
					_ctx.$slots.title ? (openBlock(), createElementBlock("span", _hoisted_2$4, [renderSlot(_ctx.$slots, "title")])) : createCommentVNode("", true),
					createBaseVNode("span", _hoisted_3$2, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString(__props.open ? "Close Menu" : "Open Menu"), 1)])]),
					createVNode(unref(ScalarIconCaretDown_default), {
						class: normalizeClass(["shrink-0 text-c-header-2 group-hover/button:text-c-header-1 size-3.5", __props.open ? "rotate-180" : ""]),
						weight: "bold"
					}, null, 8, ["class"])
				]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/@internationalized/date/dist/private/utils.mjs
function $09ec6a572d60460f$export$842a2cf37af977e1(amount, numerator) {
	return amount - numerator * Math.floor(amount / numerator);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var $93635573935797de$var$EPOCH = 1721426;
function $93635573935797de$export$f297eb839006d339(era, year, month, day) {
	year = $93635573935797de$export$c36e0ecb2d4fa69d(era, year);
	let y1 = year - 1;
	let monthOffset = -2;
	if (month <= 2) monthOffset = 0;
	else if ($93635573935797de$export$553d7fa8e3805fc0(year)) monthOffset = -1;
	return 1721425 + 365 * y1 + Math.floor(y1 / 4) - Math.floor(y1 / 100) + Math.floor(y1 / 400) + Math.floor((367 * month - 362) / 12 + monthOffset + day);
}
function $93635573935797de$export$553d7fa8e3805fc0(year) {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function $93635573935797de$export$c36e0ecb2d4fa69d(era, year) {
	return era === "BC" ? 1 - year : year;
}
function $93635573935797de$export$4475b7e617eb123c(year) {
	let era = "AD";
	if (year <= 0) {
		era = "BC";
		year = 1 - year;
	}
	return [era, year];
}
var $93635573935797de$var$daysInMonth = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
};
var $93635573935797de$export$80ee6245ec4f29ec = class {
	fromJulianDay(jd) {
		let jd0 = jd;
		let depoch = jd0 - $93635573935797de$var$EPOCH;
		let quadricent = Math.floor(depoch / 146097);
		let dqc = $09ec6a572d60460f$export$842a2cf37af977e1(depoch, 146097);
		let cent = Math.floor(dqc / 36524);
		let dcent = $09ec6a572d60460f$export$842a2cf37af977e1(dqc, 36524);
		let quad = Math.floor(dcent / 1461);
		let dquad = $09ec6a572d60460f$export$842a2cf37af977e1(dcent, 1461);
		let yindex = Math.floor(dquad / 365);
		let [era, year] = $93635573935797de$export$4475b7e617eb123c(quadricent * 400 + cent * 100 + quad * 4 + yindex + (cent !== 4 && yindex !== 4 ? 1 : 0));
		let yearDay = jd0 - $93635573935797de$export$f297eb839006d339(era, year, 1, 1);
		let leapAdj = 2;
		if (jd0 < $93635573935797de$export$f297eb839006d339(era, year, 3, 1)) leapAdj = 0;
		else if ($93635573935797de$export$553d7fa8e3805fc0(year)) leapAdj = 1;
		let month = Math.floor(((yearDay + leapAdj) * 12 + 373) / 367);
		return new $2aaf608024c21ca1$export$99faa760c7908e4f(era, year, month, jd0 - $93635573935797de$export$f297eb839006d339(era, year, month, 1) + 1);
	}
	toJulianDay(date) {
		return $93635573935797de$export$f297eb839006d339(date.era, date.year, date.month, date.day);
	}
	getDaysInMonth(date) {
		return $93635573935797de$var$daysInMonth[$93635573935797de$export$553d7fa8e3805fc0(date.year) ? "leapyear" : "standard"][date.month - 1];
	}
	getMonthsInYear(date) {
		return 12;
	}
	getDaysInYear(date) {
		return $93635573935797de$export$553d7fa8e3805fc0(date.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(date) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(date) {
		return date.era === "BC";
	}
	balanceDate(date) {
		if (date.year <= 0) {
			date.era = date.era === "BC" ? "AD" : "BC";
			date.year = 1 - date.year;
		}
	}
	constructor() {
		this.identifier = "gregory";
	}
};
function $ad063034c8620db8$export$dbc69fd56b53d5e(a, b) {
	return a.isEqual?.(b) ?? b.isEqual?.(a) ?? a.identifier === b.identifier;
}
function $ad063034c8620db8$export$68781ddf31c0090f(a, b) {
	return a.calendar.toJulianDay(a) - b.calendar.toJulianDay(b);
}
function $ad063034c8620db8$export$c19a80a9721b80f6(a, b) {
	return $ad063034c8620db8$var$timeToMs(a) - $ad063034c8620db8$var$timeToMs(b);
}
function $ad063034c8620db8$var$timeToMs(a) {
	return a.hour * 36e5 + a.minute * 6e4 + a.second * 1e3 + a.millisecond;
}
var $ad063034c8620db8$var$localTimeZone = null;
var $ad063034c8620db8$var$localTimeZoneOverride = false;
function $ad063034c8620db8$export$aa8b41735afcabd2() {
	if ($ad063034c8620db8$var$localTimeZone == null) $ad063034c8620db8$var$localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
	return $ad063034c8620db8$var$localTimeZone;
}
function $ad063034c8620db8$export$6ab69b273755230b() {
	return $ad063034c8620db8$var$localTimeZoneOverride;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/conversion.mjs
function $d07e34cce18680fd$export$bd4fb2bc8bb06fb(date) {
	date = $d07e34cce18680fd$export$b4a036af3fc0b032(date, new $93635573935797de$export$80ee6245ec4f29ec());
	return $d07e34cce18680fd$var$epochFromParts($93635573935797de$export$c36e0ecb2d4fa69d(date.era, date.year), date.month, date.day, date.hour, date.minute, date.second, date.millisecond);
}
function $d07e34cce18680fd$var$epochFromParts(year, month, day, hour, minute, second, millisecond) {
	let date = /* @__PURE__ */ new Date();
	date.setUTCHours(hour, minute, second, millisecond);
	date.setUTCFullYear(year, month - 1, day);
	return date.getTime();
}
function $d07e34cce18680fd$export$59c99f3515d3493f(ms, timeZone) {
	if (timeZone === "UTC") return 0;
	if (ms > 0 && timeZone === $ad063034c8620db8$export$aa8b41735afcabd2() && !$ad063034c8620db8$export$6ab69b273755230b()) return new Date(ms).getTimezoneOffset() * -6e4;
	let { year, month, day, hour, minute, second } = $d07e34cce18680fd$var$getTimeZoneParts(ms, timeZone);
	return $d07e34cce18680fd$var$epochFromParts(year, month, day, hour, minute, second, 0) - Math.floor(ms / 1e3) * 1e3;
}
var $d07e34cce18680fd$var$formattersByTimeZone = /* @__PURE__ */ new Map();
function $d07e34cce18680fd$var$getTimeZoneParts(ms, timeZone) {
	let formatter = $d07e34cce18680fd$var$formattersByTimeZone.get(timeZone);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat("en-US", {
			timeZone,
			hour12: false,
			era: "short",
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		});
		$d07e34cce18680fd$var$formattersByTimeZone.set(timeZone, formatter);
	}
	let parts = formatter.formatToParts(new Date(ms));
	let namedParts = {};
	for (let part of parts) if (part.type !== "literal") namedParts[part.type] = part.value;
	return {
		year: namedParts.era === "BC" || namedParts.era === "B" ? -namedParts.year + 1 : +namedParts.year,
		month: +namedParts.month,
		day: +namedParts.day,
		hour: namedParts.hour === "24" ? 0 : +namedParts.hour,
		minute: +namedParts.minute,
		second: +namedParts.second
	};
}
var $d07e34cce18680fd$var$DAYMILLIS = 864e5;
function $d07e34cce18680fd$var$getValidWallTimes(date, timeZone, earlier, later) {
	return (earlier === later ? [earlier] : [earlier, later]).filter((absolute) => $d07e34cce18680fd$var$isValidWallTime(date, timeZone, absolute));
}
function $d07e34cce18680fd$var$isValidWallTime(date, timeZone, absolute) {
	let parts = $d07e34cce18680fd$var$getTimeZoneParts(absolute, timeZone);
	return date.year === parts.year && date.month === parts.month && date.day === parts.day && date.hour === parts.hour && date.minute === parts.minute && date.second === parts.second;
}
function $d07e34cce18680fd$export$5107c82f94518f5c(date, timeZone, disambiguation = "compatible") {
	let dateTime = $d07e34cce18680fd$export$b21e0b124e224484(date);
	if (timeZone === "UTC") return $d07e34cce18680fd$export$bd4fb2bc8bb06fb(dateTime);
	if (timeZone === $ad063034c8620db8$export$aa8b41735afcabd2() && disambiguation === "compatible" && !$ad063034c8620db8$export$6ab69b273755230b()) {
		dateTime = $d07e34cce18680fd$export$b4a036af3fc0b032(dateTime, new $93635573935797de$export$80ee6245ec4f29ec());
		let date = /* @__PURE__ */ new Date();
		let year = $93635573935797de$export$c36e0ecb2d4fa69d(dateTime.era, dateTime.year);
		date.setFullYear(year, dateTime.month - 1, dateTime.day);
		date.setHours(dateTime.hour, dateTime.minute, dateTime.second, dateTime.millisecond);
		return date.getTime();
	}
	let ms = $d07e34cce18680fd$export$bd4fb2bc8bb06fb(dateTime);
	let offsetBefore = $d07e34cce18680fd$export$59c99f3515d3493f(ms - $d07e34cce18680fd$var$DAYMILLIS, timeZone);
	let offsetAfter = $d07e34cce18680fd$export$59c99f3515d3493f(ms + $d07e34cce18680fd$var$DAYMILLIS, timeZone);
	let valid = $d07e34cce18680fd$var$getValidWallTimes(dateTime, timeZone, ms - offsetBefore, ms - offsetAfter);
	if (valid.length === 1) return valid[0];
	if (valid.length > 1) switch (disambiguation) {
		case "compatible":
		case "earlier": return valid[0];
		case "later": return valid[valid.length - 1];
		case "reject": throw new RangeError("Multiple possible absolute times found");
	}
	switch (disambiguation) {
		case "earlier": return Math.min(ms - offsetBefore, ms - offsetAfter);
		case "compatible":
		case "later": return Math.max(ms - offsetBefore, ms - offsetAfter);
		case "reject": throw new RangeError("No such absolute time found");
	}
}
function $d07e34cce18680fd$export$e67a095c620b86fe(dateTime, timeZone, disambiguation = "compatible") {
	return new Date($d07e34cce18680fd$export$5107c82f94518f5c(dateTime, timeZone, disambiguation));
}
function $d07e34cce18680fd$export$1b96692a1ba042ac(ms, timeZone) {
	let offset = $d07e34cce18680fd$export$59c99f3515d3493f(ms, timeZone);
	let date = new Date(ms + offset);
	let year = date.getUTCFullYear();
	let month = date.getUTCMonth() + 1;
	let day = date.getUTCDate();
	let hour = date.getUTCHours();
	let minute = date.getUTCMinutes();
	let second = date.getUTCSeconds();
	let millisecond = date.getUTCMilliseconds();
	return new $2aaf608024c21ca1$export$d3b7288e7994edea(year < 1 ? "BC" : "AD", year < 1 ? -year + 1 : year, month, day, timeZone, offset, hour, minute, second, millisecond);
}
function $d07e34cce18680fd$export$b21e0b124e224484(date, time) {
	let hour = 0, minute = 0, second = 0, millisecond = 0;
	if ("timeZone" in date) ({hour: hour, minute: minute, second: second, millisecond: millisecond} = date);
	else if ("hour" in date && !time) return date;
	if (time) ({hour: hour, minute: minute, second: second, millisecond: millisecond} = time);
	return new $2aaf608024c21ca1$export$ca871e8dbb80966f(date.calendar, date.era, date.year, date.month, date.day, hour, minute, second, millisecond);
}
function $d07e34cce18680fd$export$b4a036af3fc0b032(date, calendar) {
	if ($ad063034c8620db8$export$dbc69fd56b53d5e(date.calendar, calendar)) return date;
	let calendarDate = calendar.fromJulianDay(date.calendar.toJulianDay(date));
	let copy = date.copy();
	copy.calendar = calendar;
	copy.era = calendarDate.era;
	copy.year = calendarDate.year;
	copy.month = calendarDate.month;
	copy.day = calendarDate.day;
	$435a2ceaa8778ed8$export$c4e2ecac49351ef2(copy);
	return copy;
}
function $d07e34cce18680fd$export$84c95a83c799e074(date, timeZone, disambiguation) {
	if (date instanceof $2aaf608024c21ca1$export$d3b7288e7994edea) {
		if (date.timeZone === timeZone) return date;
		return $d07e34cce18680fd$export$538b00033cc11c75(date, timeZone);
	}
	return $d07e34cce18680fd$export$1b96692a1ba042ac($d07e34cce18680fd$export$5107c82f94518f5c(date, timeZone, disambiguation), timeZone);
}
function $d07e34cce18680fd$export$83aac07b4c37b25(date) {
	let ms = $d07e34cce18680fd$export$bd4fb2bc8bb06fb(date) - date.offset;
	return new Date(ms);
}
function $d07e34cce18680fd$export$538b00033cc11c75(date, timeZone) {
	return $d07e34cce18680fd$export$b4a036af3fc0b032($d07e34cce18680fd$export$1b96692a1ba042ac($d07e34cce18680fd$export$bd4fb2bc8bb06fb(date) - date.offset, timeZone), date.calendar);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/manipulation.mjs
var $435a2ceaa8778ed8$var$ONE_HOUR = 36e5;
function $435a2ceaa8778ed8$export$e16d8520af44a096(date, duration) {
	let mutableDate = date.copy();
	let days = "hour" in mutableDate ? $435a2ceaa8778ed8$var$addTimeFields(mutableDate, duration) : 0;
	$435a2ceaa8778ed8$var$addYears(mutableDate, duration.years || 0);
	if (mutableDate.calendar.balanceYearMonth) mutableDate.calendar.balanceYearMonth(mutableDate, date);
	mutableDate.month += duration.months || 0;
	$435a2ceaa8778ed8$var$balanceYearMonth(mutableDate);
	$435a2ceaa8778ed8$var$constrainMonthDay(mutableDate);
	mutableDate.day += (duration.weeks || 0) * 7;
	mutableDate.day += duration.days || 0;
	mutableDate.day += days;
	$435a2ceaa8778ed8$var$balanceDay(mutableDate);
	if (mutableDate.calendar.balanceDate) mutableDate.calendar.balanceDate(mutableDate);
	if (mutableDate.year < 1) {
		mutableDate.year = 1;
		mutableDate.month = 1;
		mutableDate.day = 1;
	}
	let maxYear = mutableDate.calendar.getYearsInEra(mutableDate);
	if (mutableDate.year > maxYear) {
		let isInverseEra = mutableDate.calendar.isInverseEra?.(mutableDate);
		mutableDate.year = maxYear;
		mutableDate.month = isInverseEra ? 1 : mutableDate.calendar.getMonthsInYear(mutableDate);
		mutableDate.day = isInverseEra ? 1 : mutableDate.calendar.getDaysInMonth(mutableDate);
	}
	if (mutableDate.month < 1) {
		mutableDate.month = 1;
		mutableDate.day = 1;
	}
	let maxMonth = mutableDate.calendar.getMonthsInYear(mutableDate);
	if (mutableDate.month > maxMonth) {
		mutableDate.month = maxMonth;
		mutableDate.day = mutableDate.calendar.getDaysInMonth(mutableDate);
	}
	mutableDate.day = Math.max(1, Math.min(mutableDate.calendar.getDaysInMonth(mutableDate), mutableDate.day));
	return mutableDate;
}
function $435a2ceaa8778ed8$var$addYears(date, years) {
	if (date.calendar.isInverseEra?.(date)) years = -years;
	date.year += years;
}
function $435a2ceaa8778ed8$var$balanceYearMonth(date) {
	while (date.month < 1) {
		$435a2ceaa8778ed8$var$addYears(date, -1);
		date.month += date.calendar.getMonthsInYear(date);
	}
	let monthsInYear = 0;
	while (date.month > (monthsInYear = date.calendar.getMonthsInYear(date))) {
		date.month -= monthsInYear;
		$435a2ceaa8778ed8$var$addYears(date, 1);
	}
}
function $435a2ceaa8778ed8$var$balanceDay(date) {
	while (date.day < 1) {
		date.month--;
		$435a2ceaa8778ed8$var$balanceYearMonth(date);
		date.day += date.calendar.getDaysInMonth(date);
	}
	while (date.day > date.calendar.getDaysInMonth(date)) {
		date.day -= date.calendar.getDaysInMonth(date);
		date.month++;
		$435a2ceaa8778ed8$var$balanceYearMonth(date);
	}
}
function $435a2ceaa8778ed8$var$constrainMonthDay(date) {
	date.month = Math.max(1, Math.min(date.calendar.getMonthsInYear(date), date.month));
	date.day = Math.max(1, Math.min(date.calendar.getDaysInMonth(date), date.day));
}
function $435a2ceaa8778ed8$export$c4e2ecac49351ef2(date) {
	if (date.calendar.constrainDate) date.calendar.constrainDate(date);
	date.year = Math.max(1, Math.min(date.calendar.getYearsInEra(date), date.year));
	$435a2ceaa8778ed8$var$constrainMonthDay(date);
}
function $435a2ceaa8778ed8$export$3e2544e88a25bff8(duration) {
	let inverseDuration = {};
	for (let key in duration) if (typeof duration[key] === "number") inverseDuration[key] = -duration[key];
	return inverseDuration;
}
function $435a2ceaa8778ed8$export$4e2d2ead65e5f7e3(date, duration) {
	return $435a2ceaa8778ed8$export$e16d8520af44a096(date, $435a2ceaa8778ed8$export$3e2544e88a25bff8(duration));
}
function $435a2ceaa8778ed8$export$adaa4cf7ef1b65be(date, fields) {
	let mutableDate = date.copy();
	if (fields.era != null) mutableDate.era = fields.era;
	if (fields.year != null) mutableDate.year = fields.year;
	if (fields.month != null) mutableDate.month = fields.month;
	if (fields.day != null) mutableDate.day = fields.day;
	$435a2ceaa8778ed8$export$c4e2ecac49351ef2(mutableDate);
	return mutableDate;
}
function $435a2ceaa8778ed8$export$e5d5e1c1822b6e56(value, fields) {
	let mutableValue = value.copy();
	if (fields.hour != null) mutableValue.hour = fields.hour;
	if (fields.minute != null) mutableValue.minute = fields.minute;
	if (fields.second != null) mutableValue.second = fields.second;
	if (fields.millisecond != null) mutableValue.millisecond = fields.millisecond;
	$435a2ceaa8778ed8$export$7555de1e070510cb(mutableValue);
	return mutableValue;
}
function $435a2ceaa8778ed8$var$balanceTime(time) {
	time.second += Math.floor(time.millisecond / 1e3);
	time.millisecond = $435a2ceaa8778ed8$var$nonNegativeMod(time.millisecond, 1e3);
	time.minute += Math.floor(time.second / 60);
	time.second = $435a2ceaa8778ed8$var$nonNegativeMod(time.second, 60);
	time.hour += Math.floor(time.minute / 60);
	time.minute = $435a2ceaa8778ed8$var$nonNegativeMod(time.minute, 60);
	let days = Math.floor(time.hour / 24);
	time.hour = $435a2ceaa8778ed8$var$nonNegativeMod(time.hour, 24);
	return days;
}
function $435a2ceaa8778ed8$export$7555de1e070510cb(time) {
	time.millisecond = Math.max(0, Math.min(time.millisecond, 999));
	time.second = Math.max(0, Math.min(time.second, 59));
	time.minute = Math.max(0, Math.min(time.minute, 59));
	time.hour = Math.max(0, Math.min(time.hour, 23));
}
function $435a2ceaa8778ed8$var$nonNegativeMod(a, b) {
	let result = a % b;
	if (result < 0) result += b;
	return result;
}
function $435a2ceaa8778ed8$var$addTimeFields(time, duration) {
	time.hour += duration.hours || 0;
	time.minute += duration.minutes || 0;
	time.second += duration.seconds || 0;
	time.millisecond += duration.milliseconds || 0;
	return $435a2ceaa8778ed8$var$balanceTime(time);
}
function $435a2ceaa8778ed8$export$d52ced6badfb9a4c(value, field, amount, options) {
	let mutable = value.copy();
	switch (field) {
		case "era": {
			let eras = value.calendar.getEras();
			let eraIndex = eras.indexOf(value.era);
			if (eraIndex < 0) throw new Error("Invalid era: " + value.era);
			eraIndex = $435a2ceaa8778ed8$var$cycleValue(eraIndex, amount, 0, eras.length - 1, options?.round);
			mutable.era = eras[eraIndex];
			$435a2ceaa8778ed8$export$c4e2ecac49351ef2(mutable);
			break;
		}
		case "year":
			if (mutable.calendar.isInverseEra?.(mutable)) amount = -amount;
			mutable.year = $435a2ceaa8778ed8$var$cycleValue(value.year, amount, -Infinity, 9999, options?.round);
			if (mutable.year === -Infinity) mutable.year = 1;
			if (mutable.calendar.balanceYearMonth) mutable.calendar.balanceYearMonth(mutable, value);
			break;
		case "month":
			mutable.month = $435a2ceaa8778ed8$var$cycleValue(value.month, amount, 1, value.calendar.getMonthsInYear(value), options?.round);
			break;
		case "day":
			mutable.day = $435a2ceaa8778ed8$var$cycleValue(value.day, amount, 1, value.calendar.getDaysInMonth(value), options?.round);
			break;
		default: throw new Error("Unsupported field " + field);
	}
	if (value.calendar.balanceDate) value.calendar.balanceDate(mutable);
	$435a2ceaa8778ed8$export$c4e2ecac49351ef2(mutable);
	return mutable;
}
function $435a2ceaa8778ed8$export$dd02b3e0007dfe28(value, field, amount, options) {
	let mutable = value.copy();
	switch (field) {
		case "hour": {
			let hours = value.hour;
			let min = 0;
			let max = 23;
			if (options?.hourCycle === 12) {
				let isPM = hours >= 12;
				min = isPM ? 12 : 0;
				max = isPM ? 23 : 11;
			}
			mutable.hour = $435a2ceaa8778ed8$var$cycleValue(hours, amount, min, max, options?.round);
			break;
		}
		case "minute":
			mutable.minute = $435a2ceaa8778ed8$var$cycleValue(value.minute, amount, 0, 59, options?.round);
			break;
		case "second":
			mutable.second = $435a2ceaa8778ed8$var$cycleValue(value.second, amount, 0, 59, options?.round);
			break;
		case "millisecond":
			mutable.millisecond = $435a2ceaa8778ed8$var$cycleValue(value.millisecond, amount, 0, 999, options?.round);
			break;
		default: throw new Error("Unsupported field " + field);
	}
	return mutable;
}
function $435a2ceaa8778ed8$var$cycleValue(value, amount, min, max, round = false) {
	if (round) {
		value += Math.sign(amount);
		if (value < min) value = max;
		let div = Math.abs(amount);
		if (amount > 0) value = Math.ceil(value / div) * div;
		else value = Math.floor(value / div) * div;
		if (value > max) value = min;
	} else {
		value += amount;
		if (value < min) value = max - (min - value - 1);
		else if (value > max) value = min + (value - max - 1);
	}
	return value;
}
function $435a2ceaa8778ed8$export$96b1d28349274637(dateTime, duration) {
	let ms;
	if (duration.years != null && duration.years !== 0 || duration.months != null && duration.months !== 0 || duration.weeks != null && duration.weeks !== 0 || duration.days != null && duration.days !== 0) ms = $d07e34cce18680fd$export$5107c82f94518f5c($435a2ceaa8778ed8$export$e16d8520af44a096($d07e34cce18680fd$export$b21e0b124e224484(dateTime), {
		years: duration.years,
		months: duration.months,
		weeks: duration.weeks,
		days: duration.days
	}), dateTime.timeZone);
	else ms = $d07e34cce18680fd$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
	ms += duration.milliseconds || 0;
	ms += (duration.seconds || 0) * 1e3;
	ms += (duration.minutes || 0) * 6e4;
	ms += (duration.hours || 0) * 36e5;
	return $d07e34cce18680fd$export$b4a036af3fc0b032($d07e34cce18680fd$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
}
function $435a2ceaa8778ed8$export$6814caac34ca03c7(dateTime, duration) {
	return $435a2ceaa8778ed8$export$96b1d28349274637(dateTime, $435a2ceaa8778ed8$export$3e2544e88a25bff8(duration));
}
function $435a2ceaa8778ed8$export$9a297d111fc86b79(dateTime, field, amount, options) {
	switch (field) {
		case "hour": {
			let min = 0;
			let max = 23;
			if (options?.hourCycle === 12) {
				let isPM = dateTime.hour >= 12;
				min = isPM ? 12 : 0;
				max = isPM ? 23 : 11;
			}
			let plainDateTime = $d07e34cce18680fd$export$b21e0b124e224484(dateTime);
			let minDate = $d07e34cce18680fd$export$b4a036af3fc0b032($435a2ceaa8778ed8$export$e5d5e1c1822b6e56(plainDateTime, { hour: min }), new $93635573935797de$export$80ee6245ec4f29ec());
			let minAbsolute = [$d07e34cce18680fd$export$5107c82f94518f5c(minDate, dateTime.timeZone, "earlier"), $d07e34cce18680fd$export$5107c82f94518f5c(minDate, dateTime.timeZone, "later")].filter((ms) => $d07e34cce18680fd$export$1b96692a1ba042ac(ms, dateTime.timeZone).day === minDate.day)[0];
			let maxDate = $d07e34cce18680fd$export$b4a036af3fc0b032($435a2ceaa8778ed8$export$e5d5e1c1822b6e56(plainDateTime, { hour: max }), new $93635573935797de$export$80ee6245ec4f29ec());
			let maxAbsolute = [$d07e34cce18680fd$export$5107c82f94518f5c(maxDate, dateTime.timeZone, "earlier"), $d07e34cce18680fd$export$5107c82f94518f5c(maxDate, dateTime.timeZone, "later")].filter((ms) => $d07e34cce18680fd$export$1b96692a1ba042ac(ms, dateTime.timeZone).day === maxDate.day).pop();
			let ms = $d07e34cce18680fd$export$bd4fb2bc8bb06fb(dateTime) - dateTime.offset;
			let hours = Math.floor(ms / $435a2ceaa8778ed8$var$ONE_HOUR);
			let remainder = ms % $435a2ceaa8778ed8$var$ONE_HOUR;
			ms = $435a2ceaa8778ed8$var$cycleValue(hours, amount, Math.floor(minAbsolute / $435a2ceaa8778ed8$var$ONE_HOUR), Math.floor(maxAbsolute / $435a2ceaa8778ed8$var$ONE_HOUR), options?.round) * $435a2ceaa8778ed8$var$ONE_HOUR + remainder;
			return $d07e34cce18680fd$export$b4a036af3fc0b032($d07e34cce18680fd$export$1b96692a1ba042ac(ms, dateTime.timeZone), dateTime.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return $435a2ceaa8778ed8$export$dd02b3e0007dfe28(dateTime, field, amount, options);
		case "era":
		case "year":
		case "month":
		case "day": return $d07e34cce18680fd$export$b4a036af3fc0b032($d07e34cce18680fd$export$1b96692a1ba042ac($d07e34cce18680fd$export$5107c82f94518f5c($435a2ceaa8778ed8$export$d52ced6badfb9a4c($d07e34cce18680fd$export$b21e0b124e224484(dateTime), field, amount, options), dateTime.timeZone), dateTime.timeZone), dateTime.calendar);
		default: throw new Error("Unsupported field " + field);
	}
}
function $435a2ceaa8778ed8$export$31b5430eb18be4f8(dateTime, fields, disambiguation) {
	let plainDateTime = $d07e34cce18680fd$export$b21e0b124e224484(dateTime);
	let res = $435a2ceaa8778ed8$export$e5d5e1c1822b6e56($435a2ceaa8778ed8$export$adaa4cf7ef1b65be(plainDateTime, fields), fields);
	if (res.compare(plainDateTime) === 0) return dateTime;
	return $d07e34cce18680fd$export$b4a036af3fc0b032($d07e34cce18680fd$export$1b96692a1ba042ac($d07e34cce18680fd$export$5107c82f94518f5c(res, dateTime.timeZone, disambiguation), dateTime.timeZone), dateTime.calendar);
}
function $58246871e4652552$export$f59dee82248f5ad4(time) {
	return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second).padStart(2, "0")}${time.millisecond ? String(time.millisecond / 1e3).slice(1) : ""}`;
}
function $58246871e4652552$export$60dfd74aa96791bd(date) {
	let gregorianDate = $d07e34cce18680fd$export$b4a036af3fc0b032(date, new $93635573935797de$export$80ee6245ec4f29ec());
	let year;
	if (gregorianDate.era === "BC") year = gregorianDate.year === 1 ? "0000" : "-" + String(Math.abs(1 - gregorianDate.year)).padStart(6, "00");
	else year = String(gregorianDate.year).padStart(4, "0");
	return `${year}-${String(gregorianDate.month).padStart(2, "0")}-${String(gregorianDate.day).padStart(2, "0")}`;
}
function $58246871e4652552$export$4223de14708adc63(date) {
	return `${$58246871e4652552$export$60dfd74aa96791bd(date)}T${$58246871e4652552$export$f59dee82248f5ad4(date)}`;
}
function $58246871e4652552$var$offsetToString(offset) {
	let sign = Math.sign(offset) < 0 ? "-" : "+";
	offset = Math.abs(offset);
	let offsetHours = Math.floor(offset / 36e5);
	let offsetMinutes = Math.floor(offset % 36e5 / 6e4);
	let offsetSeconds = Math.floor(offset % 36e5 % 6e4 / 1e3);
	let stringOffset = `${sign}${String(offsetHours).padStart(2, "0")}:${String(offsetMinutes).padStart(2, "0")}`;
	if (offsetSeconds !== 0) stringOffset += `:${String(offsetSeconds).padStart(2, "0")}`;
	return stringOffset;
}
function $58246871e4652552$export$bf79f1ebf4b18792(date) {
	return `${$58246871e4652552$export$4223de14708adc63(date)}${$58246871e4652552$var$offsetToString(date.offset)}[${date.timeZone}]`;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function $2aaf608024c21ca1$var$shiftArgs(args) {
	let calendar = typeof args[0] === "object" ? args.shift() : new $93635573935797de$export$80ee6245ec4f29ec();
	let era;
	if (typeof args[0] === "string") era = args.shift();
	else {
		let eras = calendar.getEras();
		era = eras[eras.length - 1];
	}
	let year = args.shift();
	let month = args.shift();
	let day = args.shift();
	return [
		calendar,
		era,
		year,
		month,
		day
	];
}
var $2aaf608024c21ca1$export$99faa760c7908e4f = class $2aaf608024c21ca1$export$99faa760c7908e4f {
	#type;
	constructor(...args) {
		let [calendar, era, year, month, day] = $2aaf608024c21ca1$var$shiftArgs(args);
		this.calendar = calendar;
		this.era = era;
		this.year = year;
		this.month = month;
		this.day = day;
		$435a2ceaa8778ed8$export$c4e2ecac49351ef2(this);
	}
	/** Returns a copy of this date. */ copy() {
		if (this.era) return new $2aaf608024c21ca1$export$99faa760c7908e4f(this.calendar, this.era, this.year, this.month, this.day);
		else return new $2aaf608024c21ca1$export$99faa760c7908e4f(this.calendar, this.year, this.month, this.day);
	}
	/** Returns a new `CalendarDate` with the given duration added to it. */ add(duration) {
		return $435a2ceaa8778ed8$export$e16d8520af44a096(this, duration);
	}
	/** Returns a new `CalendarDate` with the given duration subtracted from it. */ subtract(duration) {
		return $435a2ceaa8778ed8$export$4e2d2ead65e5f7e3(this, duration);
	}
	/**
	* Returns a new `CalendarDate` with the given fields set to the provided values. Other fields
	* will be constrained accordingly.
	*/ set(fields) {
		return $435a2ceaa8778ed8$export$adaa4cf7ef1b65be(this, fields);
	}
	/**
	* Returns a new `CalendarDate` with the given field adjusted by a specified amount.
	* When the resulting value reaches the limits of the field, it wraps around.
	*/ cycle(field, amount, options) {
		return $435a2ceaa8778ed8$export$d52ced6badfb9a4c(this, field, amount, options);
	}
	/**
	* Converts the date to a native JavaScript Date object, with the time set to midnight in the
	* given time zone.
	*/ toDate(timeZone) {
		return $d07e34cce18680fd$export$e67a095c620b86fe(this, timeZone);
	}
	/** Converts the date to an ISO 8601 formatted string. */ toString() {
		return $58246871e4652552$export$60dfd74aa96791bd(this);
	}
	/**
	* Compares this date with another. A negative result indicates that this date is before the given
	* one, and a positive date indicates that it is after.
	*/ compare(b) {
		return $ad063034c8620db8$export$68781ddf31c0090f(this, b);
	}
};
var $2aaf608024c21ca1$export$ca871e8dbb80966f = class $2aaf608024c21ca1$export$ca871e8dbb80966f {
	#type;
	constructor(...args) {
		let [calendar, era, year, month, day] = $2aaf608024c21ca1$var$shiftArgs(args);
		this.calendar = calendar;
		this.era = era;
		this.year = year;
		this.month = month;
		this.day = day;
		this.hour = args.shift() || 0;
		this.minute = args.shift() || 0;
		this.second = args.shift() || 0;
		this.millisecond = args.shift() || 0;
		$435a2ceaa8778ed8$export$c4e2ecac49351ef2(this);
	}
	/** Returns a copy of this date. */ copy() {
		if (this.era) return new $2aaf608024c21ca1$export$ca871e8dbb80966f(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
		else return new $2aaf608024c21ca1$export$ca871e8dbb80966f(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	/** Returns a new `CalendarDateTime` with the given duration added to it. */ add(duration) {
		return $435a2ceaa8778ed8$export$e16d8520af44a096(this, duration);
	}
	/** Returns a new `CalendarDateTime` with the given duration subtracted from it. */ subtract(duration) {
		return $435a2ceaa8778ed8$export$4e2d2ead65e5f7e3(this, duration);
	}
	/**
	* Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields
	* will be constrained accordingly.
	*/ set(fields) {
		return $435a2ceaa8778ed8$export$adaa4cf7ef1b65be($435a2ceaa8778ed8$export$e5d5e1c1822b6e56(this, fields), fields);
	}
	/**
	* Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
	* When the resulting value reaches the limits of the field, it wraps around.
	*/ cycle(field, amount, options) {
		switch (field) {
			case "era":
			case "year":
			case "month":
			case "day": return $435a2ceaa8778ed8$export$d52ced6badfb9a4c(this, field, amount, options);
			default: return $435a2ceaa8778ed8$export$dd02b3e0007dfe28(this, field, amount, options);
		}
	}
	/** Converts the date to a native JavaScript Date object in the given time zone. */ toDate(timeZone, disambiguation) {
		return $d07e34cce18680fd$export$e67a095c620b86fe(this, timeZone, disambiguation);
	}
	/** Converts the date to an ISO 8601 formatted string. */ toString() {
		return $58246871e4652552$export$4223de14708adc63(this);
	}
	/**
	* Compares this date with another. A negative result indicates that this date is before the given
	* one, and a positive date indicates that it is after.
	*/ compare(b) {
		let res = $ad063034c8620db8$export$68781ddf31c0090f(this, b);
		if (res === 0) return $ad063034c8620db8$export$c19a80a9721b80f6(this, $d07e34cce18680fd$export$b21e0b124e224484(b));
		return res;
	}
};
var $2aaf608024c21ca1$export$d3b7288e7994edea = class $2aaf608024c21ca1$export$d3b7288e7994edea {
	#type;
	constructor(...args) {
		let [calendar, era, year, month, day] = $2aaf608024c21ca1$var$shiftArgs(args);
		let timeZone = args.shift();
		let offset = args.shift();
		this.calendar = calendar;
		this.era = era;
		this.year = year;
		this.month = month;
		this.day = day;
		this.timeZone = timeZone;
		this.offset = offset;
		this.hour = args.shift() || 0;
		this.minute = args.shift() || 0;
		this.second = args.shift() || 0;
		this.millisecond = args.shift() || 0;
		$435a2ceaa8778ed8$export$c4e2ecac49351ef2(this);
	}
	/** Returns a copy of this date. */ copy() {
		if (this.era) return new $2aaf608024c21ca1$export$d3b7288e7994edea(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
		else return new $2aaf608024c21ca1$export$d3b7288e7994edea(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	/** Returns a new `ZonedDateTime` with the given duration added to it. */ add(duration) {
		return $435a2ceaa8778ed8$export$96b1d28349274637(this, duration);
	}
	/** Returns a new `ZonedDateTime` with the given duration subtracted from it. */ subtract(duration) {
		return $435a2ceaa8778ed8$export$6814caac34ca03c7(this, duration);
	}
	/**
	* Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields
	* will be constrained accordingly.
	*/ set(fields, disambiguation) {
		return $435a2ceaa8778ed8$export$31b5430eb18be4f8(this, fields, disambiguation);
	}
	/**
	* Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
	* When the resulting value reaches the limits of the field, it wraps around.
	*/ cycle(field, amount, options) {
		return $435a2ceaa8778ed8$export$9a297d111fc86b79(this, field, amount, options);
	}
	/** Converts the date to a native JavaScript Date object. */ toDate() {
		return $d07e34cce18680fd$export$83aac07b4c37b25(this);
	}
	/**
	* Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone
	* identifier.
	*/ toString() {
		return $58246871e4652552$export$bf79f1ebf4b18792(this);
	}
	/** Converts the date to an ISO 8601 formatted string in UTC. */ toAbsoluteString() {
		return this.toDate().toISOString();
	}
	/**
	* Compares this date with another. A negative result indicates that this date is before the given
	* one, and a positive date indicates that it is after.
	*/ compare(b) {
		return this.toDate().getTime() - $d07e34cce18680fd$export$84c95a83c799e074(b, this.timeZone).toDate().getTime();
	}
};
//#endregion
//#region node_modules/@internationalized/number/dist/private/NumberFormatter.mjs
var $1dfb119a85e764e5$var$formatterCache = /* @__PURE__ */ new Map();
var $1dfb119a85e764e5$var$supportsSignDisplay = false;
try {
	$1dfb119a85e764e5$var$supportsSignDisplay = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var $1dfb119a85e764e5$var$supportsUnit = false;
try {
	$1dfb119a85e764e5$var$supportsUnit = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var $1dfb119a85e764e5$var$UNITS = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } };
var $1dfb119a85e764e5$export$cc77c4ff7e8673c5 = class {
	constructor(locale, options = {}) {
		this.numberFormatter = $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options);
		this.options = options;
	}
	/**
	* Formats a number value as a string, according to the locale and options provided to the
	* constructor.
	*/ format(value) {
		let res = "";
		if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) res = $1dfb119a85e764e5$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
		else res = this.numberFormatter.format(value);
		if (this.options.style === "unit" && !$1dfb119a85e764e5$var$supportsUnit) {
			let { unit, unitDisplay = "short", locale } = this.resolvedOptions();
			if (!unit) return res;
			let values = $1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay];
			res += values[locale] || values.default;
		}
		return res;
	}
	/** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
		return this.numberFormatter.formatToParts(value);
	}
	/** Formats a number range as a string. */ formatRange(start, end) {
		if (typeof this.numberFormatter.formatRange === "function") return this.numberFormatter.formatRange(start, end);
		if (end < start) throw new RangeError("End date must be >= start date");
		return `${this.format(start)} \u{2013} ${this.format(end)}`;
	}
	/** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
		if (typeof this.numberFormatter.formatRangeToParts === "function") return this.numberFormatter.formatRangeToParts(start, end);
		if (end < start) throw new RangeError("End date must be >= start date");
		let startParts = this.numberFormatter.formatToParts(start);
		let endParts = this.numberFormatter.formatToParts(end);
		return [
			...startParts.map((p) => ({
				...p,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...endParts.map((p) => ({
				...p,
				source: "endRange"
			}))
		];
	}
	/** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
		let options = this.numberFormatter.resolvedOptions();
		if (!$1dfb119a85e764e5$var$supportsSignDisplay && this.options.signDisplay != null) options = {
			...options,
			signDisplay: this.options.signDisplay
		};
		if (!$1dfb119a85e764e5$var$supportsUnit && this.options.style === "unit") options = {
			...options,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		};
		return options;
	}
};
function $1dfb119a85e764e5$var$getCachedNumberFormatter(locale, options = {}) {
	let { numberingSystem } = options;
	if (numberingSystem && locale.includes("-nu-")) {
		if (!locale.includes("-u-")) locale += "-u-";
		locale += `-nu-${numberingSystem}`;
	}
	if (options.style === "unit" && !$1dfb119a85e764e5$var$supportsUnit) {
		let { unit, unitDisplay = "short" } = options;
		if (!unit) throw new Error("unit option must be provided with style: \"unit\"");
		if (!$1dfb119a85e764e5$var$UNITS[unit]?.[unitDisplay]) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
		options = {
			...options,
			style: "decimal"
		};
	}
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	if ($1dfb119a85e764e5$var$formatterCache.has(cacheKey)) return $1dfb119a85e764e5$var$formatterCache.get(cacheKey);
	let numberFormatter = new Intl.NumberFormat(locale, options);
	$1dfb119a85e764e5$var$formatterCache.set(cacheKey, numberFormatter);
	return numberFormatter;
}
function $1dfb119a85e764e5$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
	if (signDisplay === "auto") return numberFormat.format(num);
	else if (signDisplay === "never") return numberFormat.format(Math.abs(num));
	else {
		let needsPositiveSign = false;
		if (signDisplay === "always") needsPositiveSign = num > 0 || Object.is(num, 0);
		else if (signDisplay === "exceptZero") {
			if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
			else needsPositiveSign = num > 0;
		}
		if (needsPositiveSign) {
			let negative = numberFormat.format(-num);
			let noSign = numberFormat.format(num);
			let minus = negative.replace(noSign, "").replace(/\u200e|\u061C/, "");
			if ([...minus].length !== 1) console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
			return negative.replace(noSign, "!!!").replace(minus, "+").replace("!!!", noSign);
		} else return numberFormat.format(num);
	}
}
//#endregion
//#region node_modules/@internationalized/number/dist/private/NumberParser.mjs
var $eb76cf4feb040f77$var$CURRENCY_SIGN_REGEX = /* @__PURE__ */ new RegExp("^.*\\(.*\\).*$");
var $eb76cf4feb040f77$var$NUMBERING_SYSTEMS = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
];
var $eb76cf4feb040f77$export$cd11ab140839f11d = class {
	constructor(locale, options = {}) {
		this.locale = locale;
		this.options = options;
	}
	/**
	* Parses the given string to a number. Returns NaN if a valid number could not be parsed.
	*/ parse(value) {
		return $eb76cf4feb040f77$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
	}
	/**
	* Returns whether the given string could potentially be a valid number. This should be used to
	* validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
	* of the minus/plus sign characters can be checked.
	*/ isValidPartialNumber(value, minValue, maxValue) {
		return $eb76cf4feb040f77$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
	}
	/**
	* Returns a numbering system for which the given string is valid in the current locale.
	* If no numbering system could be detected, the default numbering system for the current
	* locale is returned.
	*/ getNumberingSystem(value) {
		return $eb76cf4feb040f77$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
	}
};
var $eb76cf4feb040f77$var$numberParserCache = /* @__PURE__ */ new Map();
function $eb76cf4feb040f77$var$getNumberParserImpl(locale, options, value) {
	let defaultParser = $eb76cf4feb040f77$var$getCachedNumberParser(locale, options);
	if (!locale.includes("-nu-") && !defaultParser.isValidPartialNumber(value)) {
		for (let numberingSystem of $eb76cf4feb040f77$var$NUMBERING_SYSTEMS) if (numberingSystem !== defaultParser.options.numberingSystem) {
			let parser = $eb76cf4feb040f77$var$getCachedNumberParser(locale + (locale.includes("-u-") ? "-nu-" : "-u-nu-") + numberingSystem, options);
			if (parser.isValidPartialNumber(value)) return parser;
		}
	}
	return defaultParser;
}
function $eb76cf4feb040f77$var$getCachedNumberParser(locale, options) {
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	let parser = $eb76cf4feb040f77$var$numberParserCache.get(cacheKey);
	if (!parser) {
		parser = new $eb76cf4feb040f77$var$NumberParserImpl(locale, options);
		$eb76cf4feb040f77$var$numberParserCache.set(cacheKey, parser);
	}
	return parser;
}
var $eb76cf4feb040f77$var$NumberParserImpl = class {
	constructor(locale, options = {}) {
		this.locale = locale;
		if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
			if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
				options.maximumFractionDigits = 0;
				options.minimumFractionDigits = 0;
			} else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
			else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
		}
		this.formatter = new Intl.NumberFormat(locale, options);
		this.options = this.formatter.resolvedOptions();
		this.symbols = $eb76cf4feb040f77$var$getSymbols(locale, this.formatter, this.options, options);
		if (this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18)) console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
	}
	parse(value) {
		let isGroupSymbolAllowed = this.formatter.resolvedOptions().useGrouping;
		let fullySanitizedValue = this.sanitize(value);
		if (!isGroupSymbolAllowed && this.symbols.group && fullySanitizedValue.includes(this.symbols.group)) return NaN;
		else if (this.symbols.group) fullySanitizedValue = fullySanitizedValue.replaceAll(this.symbols.group, "");
		if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, ".");
		if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, "-");
		fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
		if (this.options.style === "percent") {
			let isNegative = fullySanitizedValue.indexOf("-");
			fullySanitizedValue = fullySanitizedValue.replace("-", "");
			fullySanitizedValue = fullySanitizedValue.replace("+", "");
			let index = fullySanitizedValue.indexOf(".");
			if (index === -1) index = fullySanitizedValue.length;
			fullySanitizedValue = fullySanitizedValue.replace(".", "");
			if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
			else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
			else if (index - 2 === -2) fullySanitizedValue = "0.00";
			else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
			if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
		}
		let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
		if (isNaN(newValue)) return NaN;
		if (this.options.style === "percent") {
			let options = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
				maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
			};
			return new $eb76cf4feb040f77$export$cd11ab140839f11d(this.locale, options).parse(new $1dfb119a85e764e5$export$cc77c4ff7e8673c5(this.locale, options).format(newValue));
		}
		if (this.options.currencySign === "accounting" && $eb76cf4feb040f77$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
		return newValue;
	}
	sanitize(value) {
		let isGroupSymbolAllowed = this.formatter.resolvedOptions().useGrouping;
		if (this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((obj) => obj.unit === value)) return this.symbols.noNumeralUnits.find((obj) => obj.unit === value).value.toString();
		value = value.replace(this.symbols.literals, "");
		if (this.symbols.minusSign) value = value.replace("-", this.symbols.minusSign);
		if (this.options.numberingSystem === "arab") {
			if (this.symbols.decimal) {
				value = $eb76cf4feb040f77$var$replaceAll(value, ",", this.symbols.decimal);
				value = $eb76cf4feb040f77$var$replaceAll(value, String.fromCharCode(1548), this.symbols.decimal);
			}
			if (this.symbols.group && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, ".", this.symbols.group);
		}
		if (this.symbols.group === "’" && value.includes("'") && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, "'", this.symbols.group);
		if (this.symbols.group === "'" && value.includes("’") && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, "’", this.symbols.group);
		if (this.options.locale === "fr-FR" && this.symbols.group && isGroupSymbolAllowed) {
			value = $eb76cf4feb040f77$var$replaceAll(value, " ", this.symbols.group);
			value = $eb76cf4feb040f77$var$replaceAll(value, /\u00A0/g, this.symbols.group);
		}
		return value;
	}
	isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
		let isGroupSymbolAllowed = this.formatter.resolvedOptions().useGrouping;
		value = this.sanitize(value);
		if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
		else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
		if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
		if (this.symbols.group && isGroupSymbolAllowed) value = $eb76cf4feb040f77$var$replaceAll(value, this.symbols.group, "");
		value = value.replace(this.symbols.numeral, "");
		if (this.symbols.decimal) value = value.replace(this.symbols.decimal, "");
		return value.length === 0;
	}
};
var $eb76cf4feb040f77$var$nonLiteralParts = /* @__PURE__ */ new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]);
var $eb76cf4feb040f77$var$pluralNumbers = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function $eb76cf4feb040f77$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
	let symbolFormatter = new Intl.NumberFormat(locale, {
		...intlOptions,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: true
	});
	let allParts = symbolFormatter.formatToParts(-10000.111);
	let posAllParts = symbolFormatter.formatToParts(10000.111);
	let pluralParts = $eb76cf4feb040f77$var$pluralNumbers.map((n) => symbolFormatter.formatToParts(n));
	let noNumeralUnits = pluralParts.map((p, i) => {
		let unit = p.find((p) => p.type === "unit");
		if (unit && !p.some((p) => p.type === "integer" || p.type === "fraction")) return {
			unit: unit.value,
			value: $eb76cf4feb040f77$var$pluralNumbers[i]
		};
		return null;
	}).filter((p) => !!p);
	let minusSign = allParts.find((p) => p.type === "minusSign")?.value ?? "-";
	let plusSign = posAllParts.find((p) => p.type === "plusSign")?.value;
	if (!plusSign && (originalOptions?.signDisplay === "exceptZero" || originalOptions?.signDisplay === "always")) plusSign = "+";
	let decimal = new Intl.NumberFormat(locale, {
		...intlOptions,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((p) => p.type === "decimal")?.value;
	let group = allParts.find((p) => p.type === "group")?.value;
	let allPartsLiterals = allParts.filter((p) => !$eb76cf4feb040f77$var$nonLiteralParts.has(p.type)).map((p) => $eb76cf4feb040f77$var$escapeRegex(p.value));
	let pluralPartsLiterals = pluralParts.flatMap((p) => p.filter((p) => !$eb76cf4feb040f77$var$nonLiteralParts.has(p.type)).map((p) => $eb76cf4feb040f77$var$escapeRegex(p.value)));
	let sortedLiterals = [.../* @__PURE__ */ new Set([...allPartsLiterals, ...pluralPartsLiterals])].sort((a, b) => b.length - a.length);
	let literals = sortedLiterals.length === 0 ? /* @__PURE__ */ new RegExp("\\p{White_Space}|\\p{Cf}", "gu") : new RegExp(`${sortedLiterals.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu");
	let numerals = [...new Intl.NumberFormat(intlOptions.locale, { useGrouping: false }).format(9876543210)].reverse();
	let indexes = new Map(numerals.map((d, i) => [d, i]));
	let numeral = new RegExp(`[${numerals.join("")}]`, "g");
	let index = (d) => String(indexes.get(d));
	return {
		minusSign,
		plusSign,
		decimal,
		group,
		literals,
		numeral,
		numerals,
		index,
		noNumeralUnits
	};
}
function $eb76cf4feb040f77$var$replaceAll(str, find, replace) {
	if (str.replaceAll) return str.replaceAll(find, replace);
	return str.split(find).join(replace);
}
function $eb76cf4feb040f77$var$escapeRegex(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/radix-vue/dist/index.js
function te(a, t) {
	const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
	return [(r) => {
		const i = inject(n, r);
		if (i || i === null) return i;
		throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(", ")}` : `\`${a}\``}`);
	}, (r) => (provide(n, r), r)];
}
function jt(a, t, e) {
	const n = e.originalEvent.target, l = new CustomEvent(a, {
		bubbles: !1,
		cancelable: !0,
		detail: e
	});
	t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
var Wn = [
	"day",
	"month",
	"year"
];
var xl = [
	"hour",
	"minute",
	"second",
	"dayPeriod"
];
[...Wn, ...xl];
function ni(a, t) {
	var e;
	const n = shallowRef();
	return watchEffect(() => {
		n.value = a();
	}, {
		...t,
		flush: (e = void 0) != null ? e : "sync"
	}), readonly(n);
}
function bt(a) {
	return getCurrentScope() ? (onScopeDispose(a), !0) : !1;
}
function li(a) {
	let t = !1, e;
	const n = effectScope(!0);
	return (...l) => (t || (e = n.run(() => a(...l)), t = !0), e);
}
function Dl(a) {
	let t = 0, e, n;
	const l = () => {
		t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
	};
	return (...s) => (t += 1, e || (n = effectScope(!0), e = n.run(() => a(...s))), bt(l), e);
}
function je(a) {
	return typeof a == "function" ? a() : unref(a);
}
var Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ri = (a) => typeof a < "u";
var ui = Object.prototype.toString;
var di = (a) => ui.call(a) === "[object Object]";
var Na = () => {};
var jo = /* @__PURE__ */ ci();
function ci() {
	var a, t;
	return Je && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Tl(a) {
	return getCurrentInstance();
}
function Tt(a, t = 1e4) {
	return customRef((e, n) => {
		let l = je(a), s;
		const r = () => setTimeout(() => {
			l = je(a), n();
		}, je(t));
		return bt(() => {
			clearTimeout(s);
		}), {
			get() {
				return e(), l;
			},
			set(i) {
				l = i, n(), clearTimeout(s), s = r();
			}
		};
	});
}
function hi(a, t) {
	Tl() && onBeforeUnmount(a, t);
}
function $e(a) {
	var t;
	const e = je(a);
	return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var Rt = Je ? window : void 0;
function He(...a) {
	let t, e, n, l;
	if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, n, l] = a, t = Rt) : [t, e, n, l] = a, !t) return Na;
	Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
	const s = [], r = () => {
		s.forEach((c) => c()), s.length = 0;
	}, i = (c, f, v, p) => (c.addEventListener(f, v, p), () => c.removeEventListener(f, v, p)), u = watch(() => [$e(t), je(l)], ([c, f]) => {
		if (r(), !c) return;
		const v = di(f) ? { ...f } : f;
		s.push(...e.flatMap((p) => n.map((g) => i(c, p, g, v))));
	}, {
		immediate: !0,
		flush: "post"
	}), d = () => {
		u(), r();
	};
	return bt(d), d;
}
function Ci(a) {
	return typeof a == "function" ? a : typeof a == "string" ? (t) => t.key === a : Array.isArray(a) ? (t) => a.includes(t.key) : () => !0;
}
function Gn(...a) {
	let t, e, n = {};
	a.length === 3 ? (t = a[0], e = a[1], n = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (t = !0, e = a[0], n = a[1]) : (t = a[0], e = a[1]) : (t = !0, e = a[0]);
	const { target: l = Rt, eventName: s = "keydown", passive: r = !1, dedupe: i = !1 } = n, u = Ci(t);
	return He(l, s, (c) => {
		c.repeat && je(i) || u(c) && e(c);
	}, r);
}
function Ga() {
	const a = ref(!1), t = getCurrentInstance();
	return t && onMounted(() => {
		a.value = !0;
	}, t), a;
}
function _i(a) {
	return JSON.parse(JSON.stringify(a));
}
function ne(a, t, e, n = {}) {
	var l, s, r;
	const { clone: i = !1, passive: u = !1, eventName: d, deep: c = !1, defaultValue: f, shouldEmit: v } = n, p = getCurrentInstance(), g = e || (p == null ? void 0 : p.emit) || ((l = p == null ? void 0 : p.$emit) == null ? void 0 : l.bind(p)) || ((r = (s = p == null ? void 0 : p.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(p == null ? void 0 : p.proxy));
	let m = d;
	t || (t = "modelValue"), m = m || `update:${t.toString()}`;
	const _ = (h) => i ? typeof i == "function" ? i(h) : _i(h) : h, C = () => ri(a[t]) ? _(a[t]) : f, $ = (h) => {
		v ? v(h) && g(m, h) : g(m, h);
	};
	if (u) {
		const h = C(), E = ref(h);
		let P = !1;
		return watch(() => a[t], (D) => {
			P || (P = !0, E.value = _(D), nextTick(() => P = !1));
		}), watch(E, (D) => {
			!P && (D !== a[t] || c) && $(D);
		}, { deep: c }), E;
	} else return computed({
		get() {
			return C();
		},
		set(h) {
			$(h);
		}
	});
}
function qa(a) {
	return a ? a.flatMap((t) => t.type === Fragment ? qa(t.children) : [t]) : [];
}
function me() {
	let a = document.activeElement;
	if (a == null) return null;
	for (; a != null && a.shadowRoot != null && a.shadowRoot.activeElement != null;) a = a.shadowRoot.activeElement;
	return a;
}
var Ei = ["INPUT", "TEXTAREA"];
function At(a, t, e, n = {}) {
	if (!t || n.enableIgnoredElement && Ei.includes(t.nodeName)) return null;
	const { arrowKeyOptions: l = "both", attributeName: s = "[data-radix-vue-collection-item]", itemsArray: r = [], loop: i = !0, dir: u = "ltr", preventScroll: d = !0, focus: c = !1 } = n, [f, v, p, g, m, _] = [
		a.key === "ArrowRight",
		a.key === "ArrowLeft",
		a.key === "ArrowUp",
		a.key === "ArrowDown",
		a.key === "Home",
		a.key === "End"
	], C = p || g, $ = f || v;
	if (!m && !_ && (!C && !$ || l === "vertical" && $ || l === "horizontal" && C)) return null;
	const h = e ? Array.from(e.querySelectorAll(s)) : r;
	if (!h.length) return null;
	d && a.preventDefault();
	let E = null;
	return $ || C ? E = Ml(h, t, {
		goForward: C ? g : u === "ltr" ? f : v,
		loop: i
	}) : m ? E = h.at(0) || null : _ && (E = h.at(-1) || null), c && E?.focus(), E;
}
function Ml(a, t, e, n = a.length) {
	if (--n === 0) return null;
	const l = a.indexOf(t), s = e.goForward ? l + 1 : l - 1;
	if (!e.loop && (s < 0 || s >= a.length)) return null;
	const i = a[(s + a.length) % a.length];
	return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Ml(a, i, e, n) : i : null;
}
function Cn(a) {
	if (a === null || typeof a != "object") return !1;
	const t = Object.getPrototypeOf(a);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a ? !1 : Symbol.toStringTag in a ? Object.prototype.toString.call(a) === "[object Module]" : !0;
}
function $n(a, t, e = ".", n) {
	if (!Cn(t)) return $n(a, {}, e, n);
	const l = Object.assign({}, t);
	for (const s in a) {
		if (s === "__proto__" || s === "constructor") continue;
		const r = a[s];
		r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : Cn(r) && Cn(l[s]) ? l[s] = $n(r, l[s], (e ? `${e}.` : "") + s.toString(), n) : l[s] = r));
	}
	return l;
}
function Pi(a) {
	return (...t) => t.reduce((e, n) => $n(e, n, "", a), {});
}
var Di = Pi(), [Ya, $i] = te("ConfigProvider");
var Bi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var Ii = (a = 21) => {
	let t = "", e = a;
	for (; e--;) t += Bi[Math.random() * 64 | 0];
	return t;
};
var Ti = Dl(() => {
	const a = ref(/* @__PURE__ */ new Map()), t = ref(), e = computed(() => {
		for (const r of a.value.values()) if (r) return !0;
		return !1;
	}), n = Ya({ scrollBody: ref(!0) });
	let l = null;
	const s = () => {
		document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", jo && l?.(), t.value = void 0;
	};
	return watch(e, (r, i) => {
		var f;
		if (!Je) return;
		if (!r) {
			i && s();
			return;
		}
		t.value === void 0 && (t.value = document.body.style.overflow);
		const u = window.innerWidth - document.documentElement.clientWidth, d = {
			padding: u,
			margin: 0
		}, c = (f = n.scrollBody) != null && f.value ? typeof n.scrollBody.value == "object" ? Di({
			padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
			margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
		}, d) : d : {
			padding: 0,
			margin: 0
		};
		u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), jo && (l = He(document, "touchmove", (v) => Ri(v), { passive: !1 })), nextTick(() => {
			document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
		});
	}, {
		immediate: !0,
		flush: "sync"
	}), a;
});
function ya(a) {
	const t = Ii(6), e = Ti();
	e.value.set(t, a ?? !1);
	const n = computed({
		get: () => e.value.get(t) ?? !1,
		set: (l) => e.value.set(t, l)
	});
	return hi(() => {
		e.value.delete(t);
	}), n;
}
function Vl(a) {
	const t = window.getComputedStyle(a);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && a.clientWidth < a.scrollWidth || t.overflowY === "auto" && a.clientHeight < a.scrollHeight) return !0;
	{
		const e = a.parentNode;
		return !(e instanceof Element) || e.tagName === "BODY" ? !1 : Vl(e);
	}
}
function Ri(a) {
	const t = a || window.event, e = t.target;
	return e instanceof Element && Vl(e) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
var Ai = "data-radix-vue-collection-item";
function Fe(a, t = Ai) {
	const e = a ?? Symbol();
	return {
		createCollection: (s) => {
			const r = ref([]);
			function i() {
				const u = $e(s);
				return u ? r.value = Array.from(u.querySelectorAll(`[${t}]:not([data-disabled])`)) : r.value = [];
			}
			return onBeforeUpdate(() => {
				r.value = [];
			}), onMounted(i), onUpdated(i), watch(() => s == null ? void 0 : s.value, i, { immediate: !0 }), provide(e, r), r;
		},
		injectCollection: () => inject(e, ref([]))
	};
}
function we(a) {
	const t = Ya({ dir: ref("ltr") });
	return computed(() => {
		var e;
		return (a == null ? void 0 : a.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
	});
}
function Te(a) {
	const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, n = {};
	return e != null && e.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), e?.forEach((l) => {
		n[toHandlerKey(camelize(l))] = (...s) => a(l, ...s);
	}), n;
}
var wn = 0;
function Yn() {
	watchEffect((a) => {
		if (!Je) return;
		const t = document.querySelectorAll("[data-radix-focus-guard]");
		document.body.insertAdjacentElement("afterbegin", t[0] ?? Go()), document.body.insertAdjacentElement("beforeend", t[1] ?? Go()), wn++, a(() => {
			wn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), wn--;
		});
	});
}
function Go() {
	const a = document.createElement("span");
	return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a;
}
function Ot(a) {
	const t = getCurrentInstance(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
		const r = (t == null ? void 0 : t.type.props[s]).default;
		return r !== void 0 && (l[s] = r), l;
	}, {}), n = toRef(a);
	return computed(() => {
		const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
		return Object.keys(s).forEach((r) => {
			l[camelize(r)] = s[r];
		}), Object.keys({
			...e,
			...l
		}).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
	});
}
function Se(a, t) {
	const e = Ot(a), n = t ? Te(t) : {};
	return computed(() => ({
		...e.value,
		...n
	}));
}
function R() {
	const a = getCurrentInstance(), t = ref(), e = computed(() => {
		var r, i;
		return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : $e(t);
	}), n = Object.assign({}, a.exposed), l = {};
	for (const r in a.props) Object.defineProperty(l, r, {
		enumerable: !0,
		configurable: !0,
		get: () => a.props[r]
	});
	if (Object.keys(n).length > 0) for (const r in n) Object.defineProperty(l, r, {
		enumerable: !0,
		configurable: !0,
		get: () => n[r]
	});
	Object.defineProperty(l, "$el", {
		enumerable: !0,
		configurable: !0,
		get: () => a.vnode.el
	}), a.exposed = l;
	function s(r) {
		t.value = r, r && (Object.defineProperty(l, "$el", {
			enumerable: !0,
			configurable: !0,
			get: () => r instanceof Element ? r : r.$el
		}), a.exposed = l);
	}
	return {
		forwardRef: s,
		currentRef: t,
		currentElement: e
	};
}
var Li = function(a) {
	if (typeof document > "u") return null;
	return (Array.isArray(a) ? a[0] : a).ownerDocument.body;
};
var Kt = /* @__PURE__ */ new WeakMap();
var $a = /* @__PURE__ */ new WeakMap();
var Ba = {};
var _n = 0;
var Nl = function(a) {
	return a && (a.host || Nl(a.parentNode));
};
var zi = function(a, t) {
	return t.map(function(e) {
		if (a.contains(e)) return e;
		var n = Nl(e);
		return n && a.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
};
var Ki = function(a, t, e, n) {
	var l = zi(t, Array.isArray(a) ? a : [a]);
	Ba[e] || (Ba[e] = /* @__PURE__ */ new WeakMap());
	var s = Ba[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(f) {
		!f || i.has(f) || (i.add(f), d(f.parentNode));
	};
	l.forEach(d);
	var c = function(f) {
		!f || u.has(f) || Array.prototype.forEach.call(f.children, function(v) {
			if (i.has(v)) c(v);
			else try {
				var p = v.getAttribute(n), g = p !== null && p !== "false", m = (Kt.get(v) || 0) + 1, _ = (s.get(v) || 0) + 1;
				Kt.set(v, m), s.set(v, _), r.push(v), m === 1 && g && $a.set(v, !0), _ === 1 && v.setAttribute(e, "true"), g || v.setAttribute(n, "true");
			} catch (C) {
				console.error("aria-hidden: cannot operate on ", v, C);
			}
		});
	};
	return c(t), i.clear(), _n++, function() {
		r.forEach(function(f) {
			var v = Kt.get(f) - 1, p = s.get(f) - 1;
			Kt.set(f, v), s.set(f, p), v || ($a.has(f) || f.removeAttribute(n), $a.delete(f)), p || f.removeAttribute(e);
		}), _n--, _n || (Kt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Ba = {});
	};
};
var Hi = function(a, t, e) {
	e === void 0 && (e = "data-aria-hidden");
	var n = Array.from(Array.isArray(a) ? a : [a]), l = Li(a);
	return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), Ki(n, l, e, "aria-hidden")) : function() {
		return null;
	};
};
function ga(a) {
	let t;
	watch(() => $e(a), (e) => {
		e ? t = Hi(e) : t && t();
	}), onUnmounted(() => {
		t && t();
	});
}
var Wi = 0;
function ge(a, t = "radix") {
	if (a) return a;
	const e = Ya({ useId: void 0 });
	return useId ? `${t}-${useId()}` : e.useId ? `${t}-${e.useId()}` : `${t}-${++Wi}`;
}
function Ll(a) {
	const t = ref(), e = computed(() => {
		var l;
		return ((l = t.value) == null ? void 0 : l.width) ?? 0;
	}), n = computed(() => {
		var l;
		return ((l = t.value) == null ? void 0 : l.height) ?? 0;
	});
	return onMounted(() => {
		const l = $e(a);
		if (l) {
			t.value = {
				width: l.offsetWidth,
				height: l.offsetHeight
			};
			const s = new ResizeObserver((r) => {
				if (!Array.isArray(r) || !r.length) return;
				const i = r[0];
				let u, d;
				if ("borderBoxSize" in i) {
					const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
					u = f.inlineSize, d = f.blockSize;
				} else u = l.offsetWidth, d = l.offsetHeight;
				t.value = {
					width: u,
					height: d
				};
			});
			return s.observe(l, { box: "border-box" }), () => s.unobserve(l);
		} else t.value = void 0;
	}), {
		width: e,
		height: n
	};
}
function zl(a, t) {
	const e = ref(a);
	function n(s) {
		return t[e.value][s] ?? e.value;
	}
	return {
		state: e,
		dispatch: (s) => {
			e.value = n(s);
		}
	};
}
var Ui = "data-item-text";
function ba(a) {
	const t = Tt("", 1e3);
	return {
		search: t,
		handleTypeaheadSearch: (l, s) => {
			if (!(a != null && a.value) && !s) return;
			t.value = t.value + l;
			const r = (a == null ? void 0 : a.value) ?? s, i = me(), u = r.map((p) => {
				var g;
				return {
					ref: p,
					textValue: ((g = (p.querySelector(`[${Ui}]`) ?? p).textContent) == null ? void 0 : g.trim()) ?? ""
				};
			}), d = u.find((p) => p.ref === i), f = Zn(u.map((p) => p.textValue), t.value, d == null ? void 0 : d.textValue), v = u.find((p) => p.textValue === f);
			return v && v.ref.focus(), v == null ? void 0 : v.ref;
		},
		resetTypeahead: () => {
			t.value = "";
		}
	};
}
function Xn(a, t) {
	return a.map((e, n) => a[(t + n) % a.length]);
}
function Zn(a, t, e) {
	const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a.indexOf(e) : -1;
	let r = Xn(a, Math.max(s, 0));
	l.length === 1 && (r = r.filter((d) => d !== e));
	const u = r.find((d) => d.toLowerCase().startsWith(l.toLowerCase()));
	return u !== e ? u : void 0;
}
var Jn = defineComponent({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(a, { attrs: t, slots: e }) {
		return () => {
			var u, d;
			if (!e.default) return null;
			const n = qa(e.default()), l = n.findIndex((c) => c.type !== Comment);
			if (l === -1) return n;
			const s = n[l];
			(u = s.props) == null || delete u.ref;
			const r = s.props ? mergeProps(t, s.props) : t;
			t.class && (d = s.props) != null && d.class && delete s.props.class;
			const i = cloneVNode(s, r);
			for (const c in r) c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
			return n.length === 1 ? i : (n[l] = i, n);
		};
	}
});
var O = defineComponent({
	name: "Primitive",
	inheritAttrs: !1,
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(a, { attrs: t, slots: e }) {
		const n = a.asChild ? "template" : a.as;
		return typeof n == "string" && [
			"area",
			"img",
			"input"
		].includes(n) ? () => h(n, t) : n !== "template" ? () => h(a.as, t, { default: e.default }) : () => h(Jn, t, { default: e.default });
	}
});
function Re() {
	const a = ref();
	return {
		primitiveElement: a,
		currentElement: computed(() => {
			var e, n;
			return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : $e(a);
		})
	};
}
var [Kl, Gi] = te("CollapsibleRoot");
function Xi(a, t) {
	var _;
	const e = ref({}), n = ref("none"), l = ref(a), s = a.value ? "mounted" : "unmounted";
	let r;
	const i = ((_ = t.value) == null ? void 0 : _.ownerDocument.defaultView) ?? Rt, { state: u, dispatch: d } = zl(s, {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	}), c = (C) => {
		var $;
		if (Je) {
			const h = new CustomEvent(C, {
				bubbles: !1,
				cancelable: !1
			});
			($ = t.value) == null || $.dispatchEvent(h);
		}
	};
	watch(a, async (C, $) => {
		var E;
		const h = $ !== C;
		if (await nextTick(), h) {
			const P = n.value, D = Ia(t.value);
			C ? (d("MOUNT"), c("enter"), D === "none" && c("after-enter")) : D === "none" || ((E = e.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : $ && P !== D ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
		}
	}, { immediate: !0 });
	const f = (C) => {
		const $ = Ia(t.value), h = $.includes(C.animationName), E = u.value === "mounted" ? "enter" : "leave";
		if (C.target === t.value && h && (c(`after-${E}`), d("ANIMATION_END"), !l.value)) {
			const P = t.value.style.animationFillMode;
			t.value.style.animationFillMode = "forwards", r = i == null ? void 0 : i.setTimeout(() => {
				var D;
				((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
			});
		}
		C.target === t.value && $ === "none" && d("ANIMATION_END");
	}, v = (C) => {
		C.target === t.value && (n.value = Ia(t.value));
	}, p = watch(t, (C, $) => {
		C ? (e.value = getComputedStyle(C), C.addEventListener("animationstart", v), C.addEventListener("animationcancel", f), C.addEventListener("animationend", f)) : (d("ANIMATION_END"), r !== void 0 && i?.clearTimeout(r), $?.removeEventListener("animationstart", v), $?.removeEventListener("animationcancel", f), $?.removeEventListener("animationend", f));
	}, { immediate: !0 }), g = watch(u, () => {
		const C = Ia(t.value);
		n.value = u.value === "mounted" ? C : "none";
	});
	return onUnmounted(() => {
		p(), g();
	}), { isPresent: computed(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Ia(a) {
	return a && getComputedStyle(a).animationName || "none";
}
var Pe = defineComponent({
	name: "Presence",
	props: {
		present: {
			type: Boolean,
			required: !0
		},
		forceMount: { type: Boolean }
	},
	slots: {},
	setup(a, { slots: t, expose: e }) {
		var d;
		const { present: n, forceMount: l } = toRefs(a), s = ref(), { isPresent: r } = Xi(n, s);
		e({ present: r });
		let i = t.default({ present: r });
		i = qa(i || []);
		const u = getCurrentInstance();
		if (i && (i == null ? void 0 : i.length) > 1) {
			const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
			throw new Error([
				`Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
				"",
				"Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
				"You can apply a few solutions:",
				["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((f) => `  - ${f}`).join(`
`)
			].join(`
`));
		}
		return () => l.value || n.value || r.value ? h(t.default({ present: r })[0], { ref: (c) => {
			const f = $e(c);
			return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
		} }) : null;
	}
});
var [Xa, eu] = te("AccordionRoot"), [Qn, tu] = te("AccordionItem"), [ot, au] = te("DialogRoot"), rt = /* @__PURE__ */ defineComponent({
	__name: "Teleport",
	props: {
		to: { default: "body" },
		disabled: { type: Boolean },
		forceMount: { type: Boolean }
	},
	setup(a) {
		const t = Ga();
		return (e, n) => unref(t) || e.forceMount ? (openBlock(), createBlock(Teleport, {
			key: 0,
			to: e.to,
			disabled: e.disabled
		}, [renderSlot(e.$slots, "default")], 8, ["to", "disabled"])) : createCommentVNode("", !0);
	}
}), lu = "dismissableLayer.pointerDownOutside", su = "dismissableLayer.focusOutside";
function jl(a, t) {
	const e = t.closest("[data-dismissable-layer]"), n = a.dataset.dismissableLayer === "" ? a : a.querySelector("[data-dismissable-layer]"), l = Array.from(a.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function Ul(a, t) {
	var s;
	const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(!1), l = ref(() => {});
	return watchEffect((r) => {
		if (!Je) return;
		const i = async (d) => {
			const c = d.target;
			if (t != null && t.value) {
				if (jl(t.value, c)) {
					n.value = !1;
					return;
				}
				if (d.target && !n.value) {
					let f = function() {
						jt(lu, a, v);
					};
					const v = { originalEvent: d };
					d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = f, e.addEventListener("click", l.value, { once: !0 })) : f();
				} else e.removeEventListener("click", l.value);
				n.value = !1;
			}
		}, u = window.setTimeout(() => {
			e.addEventListener("pointerdown", i);
		}, 0);
		r(() => {
			window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", l.value);
		});
	}), { onPointerDownCapture: () => n.value = !0 };
}
function Gl(a, t) {
	var l;
	const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(!1);
	return watchEffect((s) => {
		if (!Je) return;
		const r = async (i) => {
			t != null && t.value && (await nextTick(), t.value && !jl(t.value, i.target) && i.target && !n.value && jt(su, a, { originalEvent: i }));
		};
		e.addEventListener("focusin", r), s(() => e.removeEventListener("focusin", r));
	}), {
		onFocusCapture: () => n.value = !0,
		onBlurCapture: () => n.value = !1
	};
}
var Ge = reactive({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
});
var Ct = /* @__PURE__ */ defineComponent({
	__name: "DismissableLayer",
	props: {
		disableOutsidePointerEvents: {
			type: Boolean,
			default: !1
		},
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"dismiss"
	],
	setup(a, { emit: t }) {
		const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = computed(() => {
			var g;
			return ((g = s.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
		}), i = computed(() => Ge.layersRoot), u = computed(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = computed(() => Ge.layersWithOutsidePointerEventsDisabled.size > 0), c = computed(() => {
			const g = Array.from(i.value), [m] = [...Ge.layersWithOutsidePointerEventsDisabled].slice(-1), _ = g.indexOf(m);
			return u.value >= _;
		}), f = Ul(async (g) => {
			const m = [...Ge.branches].some((_) => _ == null ? void 0 : _.contains(g.target));
			!c.value || m || (n("pointerDownOutside", g), n("interactOutside", g), await nextTick(), g.defaultPrevented || n("dismiss"));
		}, s), v = Gl((g) => {
			[...Ge.branches].some((_) => _ == null ? void 0 : _.contains(g.target)) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
		}, s);
		Gn("Escape", (g) => {
			u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
		});
		let p;
		return watchEffect((g) => {
			s.value && (e.disableOutsidePointerEvents && (Ge.layersWithOutsidePointerEventsDisabled.size === 0 && (p = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), Ge.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
				e.disableOutsidePointerEvents && Ge.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = p);
			}));
		}), watchEffect((g) => {
			g(() => {
				s.value && (i.value.delete(s.value), Ge.layersWithOutsidePointerEventsDisabled.delete(s.value));
			});
		}), (g, m) => (openBlock(), createBlock(unref(O), {
			ref: unref(l),
			"as-child": g.asChild,
			as: g.as,
			"data-dismissable-layer": "",
			style: normalizeStyle({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
			onFocusCapture: unref(v).onFocusCapture,
			onBlurCapture: unref(v).onBlurCapture,
			onPointerdownCapture: unref(f).onPointerDownCapture
		}, {
			default: withCtx(() => [renderSlot(g.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"style",
			"onFocusCapture",
			"onBlurCapture",
			"onPointerdownCapture"
		]));
	}
});
var xn = "focusScope.autoFocusOnMount";
var Sn = "focusScope.autoFocusOnUnmount";
var qo = {
	bubbles: !1,
	cancelable: !0
};
function Ma(a, { select: t = !1 } = {}) {
	const e = me();
	for (const n of a) if (pt(n, { select: t }), me() !== e) return !0;
}
function iu(a) {
	const t = eo(a);
	return [Yo(t, a), Yo(t.reverse(), a)];
}
function eo(a) {
	const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
		const l = n.tagName === "INPUT" && n.type === "hidden";
		return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; e.nextNode();) t.push(e.currentNode);
	return t;
}
function Yo(a, t) {
	for (const e of a) if (!uu(e, { upTo: t })) return e;
}
function uu(a, { upTo: t }) {
	if (getComputedStyle(a).visibility === "hidden") return !0;
	for (; a;) {
		if (t !== void 0 && a === t) return !1;
		if (getComputedStyle(a).display === "none") return !0;
		a = a.parentElement;
	}
	return !1;
}
function du(a) {
	return a instanceof HTMLInputElement && "select" in a;
}
function pt(a, { select: t = !1 } = {}) {
	if (a && a.focus) {
		const e = me();
		a.focus({ preventScroll: !0 }), a !== e && du(a) && t && a.select();
	}
}
var cu = li(() => ref([]));
function fu() {
	const a = cu();
	return {
		add(t) {
			const e = a.value[0];
			t !== e && e?.pause(), a.value = Xo(a.value, t), a.value.unshift(t);
		},
		remove(t) {
			var e;
			a.value = Xo(a.value, t), (e = a.value[0]) == null || e.resume();
		}
	};
}
function Xo(a, t) {
	const e = [...a], n = e.indexOf(t);
	return n !== -1 && e.splice(n, 1), e;
}
function pu(a) {
	return a.filter((t) => t.tagName !== "A");
}
var Za = /* @__PURE__ */ defineComponent({
	__name: "FocusScope",
	props: {
		loop: {
			type: Boolean,
			default: !1
		},
		trapped: {
			type: Boolean,
			default: !1
		},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["mountAutoFocus", "unmountAutoFocus"],
	setup(a, { emit: t }) {
		const e = a, n = t, { currentRef: l, currentElement: s } = R(), r = ref(null), i = fu(), u = reactive({
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		});
		watchEffect((c) => {
			if (!Je) return;
			const f = s.value;
			if (!e.trapped) return;
			function v(_) {
				if (u.paused || !f) return;
				const C = _.target;
				f.contains(C) ? r.value = C : pt(r.value, { select: !0 });
			}
			function p(_) {
				if (u.paused || !f) return;
				const C = _.relatedTarget;
				C !== null && (f.contains(C) || pt(r.value, { select: !0 }));
			}
			function g(_) {
				f.contains(r.value) || pt(f);
			}
			document.addEventListener("focusin", v), document.addEventListener("focusout", p);
			const m = new MutationObserver(g);
			f && m.observe(f, {
				childList: !0,
				subtree: !0
			}), c(() => {
				document.removeEventListener("focusin", v), document.removeEventListener("focusout", p), m.disconnect();
			});
		}), watchEffect(async (c) => {
			const f = s.value;
			if (await nextTick(), !f) return;
			i.add(u);
			const v = me();
			if (!f.contains(v)) {
				const g = new CustomEvent(xn, qo);
				f.addEventListener(xn, (m) => n("mountAutoFocus", m)), f.dispatchEvent(g), g.defaultPrevented || (Ma(pu(eo(f)), { select: !0 }), me() === v && pt(f));
			}
			c(() => {
				f.removeEventListener(xn, (_) => n("mountAutoFocus", _));
				const g = new CustomEvent(Sn, qo), m = (_) => {
					n("unmountAutoFocus", _);
				};
				f.addEventListener(Sn, m), f.dispatchEvent(g), setTimeout(() => {
					g.defaultPrevented || pt(v ?? document.body, { select: !0 }), f.removeEventListener(Sn, m), i.remove(u);
				}, 0);
			});
		});
		function d(c) {
			if (!e.loop && !e.trapped || u.paused) return;
			const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = me();
			if (f && v) {
				const p = c.currentTarget, [g, m] = iu(p);
				g && m ? !c.shiftKey && v === m ? (c.preventDefault(), e.loop && pt(g, { select: !0 })) : c.shiftKey && v === g && (c.preventDefault(), e.loop && pt(m, { select: !0 })) : v === p && c.preventDefault();
			}
		}
		return (c, f) => (openBlock(), createBlock(unref(O), {
			ref_key: "currentRef",
			ref: l,
			tabindex: "-1",
			"as-child": c.asChild,
			as: c.as,
			onKeydown: d
		}, {
			default: withCtx(() => [renderSlot(c.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
});
var vu = "menu.itemSelect";
var Bn = ["Enter", " "];
var mu = [
	"ArrowDown",
	"PageUp",
	"Home"
];
var ql = [
	"ArrowUp",
	"PageDown",
	"End"
];
var hu = [...mu, ...ql];
var yu = {
	ltr: [...Bn, "ArrowRight"],
	rtl: [...Bn, "ArrowLeft"]
};
var gu = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
};
function to(a) {
	return a ? "open" : "closed";
}
function La(a) {
	return a === "indeterminate";
}
function ao(a) {
	return La(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function In(a) {
	const t = me();
	for (const e of a) if (e === t || (e.focus(), me() !== t)) return;
}
function bu(a, t) {
	const { x: e, y: n } = a;
	let l = !1;
	for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
		const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
		u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
	}
	return l;
}
function Cu(a, t) {
	if (!t) return !1;
	return bu({
		x: a.clientX,
		y: a.clientY
	}, t);
}
function da(a) {
	return a.pointerType === "mouse";
}
var [Tu, Ru] = te("AlertDialogContent"), [Zl, Au] = te("AvatarRoot"), [Xt, Ku] = te("CalendarRoot"), [ad, nd] = te("CheckboxRoot"), [es, od] = te("PopperRoot"), kt = /* @__PURE__ */ defineComponent({
	inheritAttrs: !1,
	__name: "PopperRoot",
	setup(a) {
		const t = ref();
		return od({
			anchor: t,
			onAnchorChange: (e) => t.value = e
		}), (e, n) => renderSlot(e.$slots, "default");
	}
}), Mt = /* @__PURE__ */ defineComponent({
	__name: "PopperAnchor",
	props: {
		element: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a, { forwardRef: e, currentElement: n } = R(), l = es();
		return watchEffect(() => {
			l.onAnchorChange(t.element ?? n.value);
		}), (s, r) => (openBlock(), createBlock(unref(O), {
			ref: unref(e),
			as: s.as,
			"as-child": s.asChild
		}, {
			default: withCtx(() => [renderSlot(s.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
});
function ld(a) {
	return a !== null;
}
function sd(a) {
	return {
		name: "transformOrigin",
		options: a,
		fn(t) {
			var _, C, $;
			const { placement: e, rects: n, middlewareData: l } = t, r = ((_ = l.arrow) == null ? void 0 : _.centerOffset) !== 0, i = r ? 0 : a.arrowWidth, u = r ? 0 : a.arrowHeight, [d, c] = Tn(e), f = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[c], v = (((C = l.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, p = ((($ = l.arrow) == null ? void 0 : $.y) ?? 0) + u / 2;
			let g = "", m = "";
			return d === "bottom" ? (g = r ? f : `${v}px`, m = `${-u}px`) : d === "top" ? (g = r ? f : `${v}px`, m = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, m = r ? f : `${p}px`) : d === "left" && (g = `${n.floating.width + u}px`, m = r ? f : `${p}px`), { data: {
				x: g,
				y: m
			} };
		}
	};
}
function Tn(a) {
	const [t, e = "center"] = a.split("-");
	return [t, e];
}
var ts = {
	side: "bottom",
	sideOffset: 0,
	align: "center",
	alignOffset: 0,
	arrowPadding: 0,
	avoidCollisions: !0,
	collisionBoundary: () => [],
	collisionPadding: 0,
	sticky: "partial",
	hideWhenDetached: !1,
	updatePositionStrategy: "optimized",
	prioritizePosition: !1
}, [rd, id] = te("PopperContent"), It = /* @__PURE__ */ defineComponent({
	inheritAttrs: !1,
	__name: "PopperContent",
	props: /* @__PURE__ */ mergeDefaults({
		side: {},
		sideOffset: {},
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	}, { ...ts }),
	emits: ["placed"],
	setup(a, { emit: t }) {
		const e = a, n = t, l = es(), { forwardRef: s, currentElement: r } = R(), i = ref(), u = ref(), { width: d, height: c } = Ll(u), f = computed(() => e.side + (e.align !== "center" ? `-${e.align}` : "")), v = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...e.collisionPadding
		}), p = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = computed(() => ({
			padding: v.value,
			boundary: p.value.filter(ld),
			altBoundary: p.value.length > 0
		})), m = ni(() => [
			offset({
				mainAxis: e.sideOffset + c.value,
				alignmentAxis: e.alignOffset
			}),
			e.prioritizePosition && e.avoidCollisions && flip({ ...g.value }),
			e.avoidCollisions && shift({
				mainAxis: !0,
				crossAxis: !!e.prioritizePosition,
				limiter: e.sticky === "partial" ? limitShift() : void 0,
				...g.value
			}),
			!e.prioritizePosition && e.avoidCollisions && flip({ ...g.value }),
			size({
				...g.value,
				apply: ({ elements: A, rects: F, availableWidth: j, availableHeight: H }) => {
					const { width: Q, height: G } = F.reference, J = A.floating.style;
					J.setProperty("--radix-popper-available-width", `${j}px`), J.setProperty("--radix-popper-available-height", `${H}px`), J.setProperty("--radix-popper-anchor-width", `${Q}px`), J.setProperty("--radix-popper-anchor-height", `${G}px`);
				}
			}),
			u.value && arrow({
				element: u.value,
				padding: e.arrowPadding
			}),
			sd({
				arrowWidth: d.value,
				arrowHeight: c.value
			}),
			e.hideWhenDetached && hide({
				strategy: "referenceHidden",
				...g.value
			})
		]), { floatingStyles: _, placement: C, isPositioned: $, middlewareData: h } = useFloating(l.anchor, i, {
			strategy: "fixed",
			placement: f,
			whileElementsMounted: (...A) => autoUpdate(...A, { animationFrame: e.updatePositionStrategy === "always" }),
			middleware: m
		}), E = computed(() => Tn(C.value)[0]), P = computed(() => Tn(C.value)[1]);
		watchPostEffect(() => {
			$.value && n("placed");
		});
		const D = computed(() => {
			var A;
			return ((A = h.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
		}), I = ref("");
		watchEffect(() => {
			r.value && (I.value = window.getComputedStyle(r.value).zIndex);
		});
		return id({
			placedSide: E,
			onArrowChange: (A) => u.value = A,
			arrowX: computed(() => {
				var A;
				return ((A = h.value.arrow) == null ? void 0 : A.x) ?? 0;
			}),
			arrowY: computed(() => {
				var A;
				return ((A = h.value.arrow) == null ? void 0 : A.y) ?? 0;
			}),
			shouldHideArrow: D
		}), (A, F) => {
			var j, H, Q;
			return openBlock(), createElementBlock("div", {
				ref_key: "floatingRef",
				ref: i,
				"data-radix-popper-content-wrapper": "",
				style: normalizeStyle({
					...unref(_),
					transform: unref($) ? unref(_).transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: I.value,
					"--radix-popper-transform-origin": [(j = unref(h).transformOrigin) == null ? void 0 : j.x, (H = unref(h).transformOrigin) == null ? void 0 : H.y].join(" "),
					...((Q = unref(h).hide) == null ? void 0 : Q.referenceHidden) && {
						visibility: "hidden",
						pointerEvents: "none"
					}
				})
			}, [createVNode(unref(O), mergeProps({ ref: unref(s) }, A.$attrs, {
				"as-child": e.asChild,
				as: A.as,
				"data-side": E.value,
				"data-align": P.value,
				style: { animation: unref($) ? void 0 : "none" }
			}), {
				default: withCtx(() => [renderSlot(A.$slots, "default")]),
				_: 3
			}, 16, [
				"as-child",
				"as",
				"data-side",
				"data-align",
				"style"
			])], 4);
		};
	}
}), ud = /* @__PURE__ */ createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1), dd = /* @__PURE__ */ defineComponent({
	__name: "Arrow",
	props: {
		width: { default: 10 },
		height: { default: 5 },
		asChild: { type: Boolean },
		as: { default: "svg" }
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, {
			width: e.width,
			height: e.height,
			viewBox: e.asChild ? void 0 : "0 0 30 10",
			preserveAspectRatio: e.asChild ? void 0 : "none"
		}), {
			default: withCtx(() => [renderSlot(e.$slots, "default", {}, () => [ud])]),
			_: 3
		}, 16, [
			"width",
			"height",
			"viewBox",
			"preserveAspectRatio"
		]));
	}
}), cd = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Zt = /* @__PURE__ */ defineComponent({
	inheritAttrs: !1,
	__name: "PopperArrow",
	props: {
		width: {},
		height: {},
		asChild: { type: Boolean },
		as: { default: "svg" }
	},
	setup(a) {
		const { forwardRef: t } = R(), e = rd(), n = computed(() => cd[e.placedSide.value]);
		return (l, s) => {
			var r, i, u, d;
			return openBlock(), createElementBlock("span", {
				ref: (c) => {
					unref(e).onArrowChange(c);
				},
				style: normalizeStyle({
					position: "absolute",
					left: (r = unref(e).arrowX) != null && r.value ? `${(i = unref(e).arrowX) == null ? void 0 : i.value}px` : void 0,
					top: (u = unref(e).arrowY) != null && u.value ? `${(d = unref(e).arrowY) == null ? void 0 : d.value}px` : void 0,
					[n.value]: 0,
					transformOrigin: {
						top: "",
						right: "0 0",
						bottom: "center 0",
						left: "100% 0"
					}[unref(e).placedSide.value],
					transform: {
						top: "translateY(100%)",
						right: "translateY(50%) rotate(90deg) translateX(-50%)",
						bottom: "rotate(180deg)",
						left: "translateY(50%) rotate(-90deg) translateX(50%)"
					}[unref(e).placedSide.value],
					visibility: unref(e).shouldHideArrow.value ? "hidden" : void 0
				})
			}, [createVNode(dd, mergeProps(l.$attrs, {
				ref: unref(t),
				style: { display: "block" },
				as: l.as,
				"as-child": l.asChild,
				width: l.width,
				height: l.height
			}), {
				default: withCtx(() => [renderSlot(l.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"width",
				"height"
			])], 4);
		};
	}
}), fd = "data-radix-vue-collection-item", [oo, pd] = te("CollectionProvider");
function Ca(a = fd) {
	const t = ref(/* @__PURE__ */ new Map()), n = pd({
		collectionRef: ref(),
		itemMap: t,
		attrName: a
	}), { getItems: l } = ea(n);
	return {
		getItems: l,
		reactiveItems: computed(() => Array.from(n.itemMap.value.values())),
		itemMapSize: computed(() => n.itemMap.value.size)
	};
}
var wa = defineComponent({
	name: "CollectionSlot",
	setup(a, { slots: t }) {
		const e = oo(), { primitiveElement: n, currentElement: l } = Re();
		return watch(l, () => {
			e.collectionRef.value = l.value;
		}), () => h(Jn, { ref: n }, t);
	}
});
var Qt = defineComponent({
	name: "CollectionItem",
	inheritAttrs: !1,
	props: { value: { validator: () => !0 } },
	setup(a, { slots: t, attrs: e }) {
		const n = oo(), { primitiveElement: l, currentElement: s } = Re();
		return watchEffect((r) => {
			if (s.value) {
				const i = markRaw(s.value);
				n.itemMap.value.set(i, {
					ref: s.value,
					value: a.value
				}), r(() => n.itemMap.value.delete(i));
			}
		}), () => h(Jn, {
			...e,
			[n.attrName]: "",
			ref: l
		}, t);
	}
});
function ea(a) {
	const t = a ?? oo();
	return { getItems: () => {
		const n = t.collectionRef.value;
		if (!n) return [];
		const l = Array.from(n.querySelectorAll(`[${t.attrName}]`));
		return Array.from(t.itemMap.value.values()).sort((i, u) => l.indexOf(i.ref) - l.indexOf(u.ref));
	} };
}
var [it, vd] = te("ComboboxRoot"), [as, md] = te("ComboboxGroup"), [hd, yd] = te("ComboboxContent"), [bd, Cd] = te("ComboboxItem"), Qa = /* @__PURE__ */ defineComponent({
	__name: "MenuAnchor",
	props: {
		element: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(Mt), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), lo = /* @__PURE__ */ defineComponent({
	__name: "MenuArrow",
	props: {
		width: {},
		height: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(Zt), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
function _d() {
	const a = ref(!1);
	return onMounted(() => {
		He("keydown", () => {
			a.value = !0;
		}, {
			capture: !0,
			passive: !0
		}), He(["pointerdown", "pointermove"], () => {
			a.value = !1;
		}, {
			capture: !0,
			passive: !0
		});
	}), a;
}
var xd = Dl(_d), [Vt, ns] = te(["MenuRoot", "MenuSub"], "MenuContext"), [_a, Sd] = te("MenuRoot"), so = /* @__PURE__ */ defineComponent({
	__name: "MenuRoot",
	props: {
		open: {
			type: Boolean,
			default: !1
		},
		dir: {},
		modal: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(a, { emit: t }) {
		const e = a, n = t, { modal: l, dir: s } = toRefs(e), r = we(s), i = ne(e, "open", n), u = ref(), d = xd();
		return ns({
			open: i,
			onOpenChange: (c) => {
				i.value = c;
			},
			content: u,
			onContentChange: (c) => {
				u.value = c;
			}
		}), Sd({
			onClose: () => {
				i.value = !1;
			},
			isUsingKeyboardRef: d,
			dir: r,
			modal: l
		}), (c, f) => (openBlock(), createBlock(unref(kt), null, {
			default: withCtx(() => [renderSlot(c.$slots, "default")]),
			_: 3
		}));
	}
}), Ed = "rovingFocusGroup.onEntryFocus", Pd = {
	bubbles: !1,
	cancelable: !0
};
function ls(a, t = !1) {
	const e = me();
	for (const n of a) if (n === e || (n.focus({ preventScroll: t }), me() !== e)) return;
}
var [Bd, Id] = te("RovingFocusGroup"), Ft = /* @__PURE__ */ defineComponent({
	__name: "RovingFocusGroup",
	props: {
		orientation: { default: void 0 },
		dir: {},
		loop: {
			type: Boolean,
			default: !1
		},
		currentTabStopId: {},
		defaultCurrentTabStopId: {},
		preventScrollOnEntryFocus: {
			type: Boolean,
			default: !1
		},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["entryFocus", "update:currentTabStopId"],
	setup(a, { expose: t, emit: e }) {
		const n = a, l = e, { loop: s, orientation: r, dir: i } = toRefs(n), u = we(i), d = ne(n, "currentTabStopId", l, {
			defaultValue: n.defaultCurrentTabStopId,
			passive: n.currentTabStopId === void 0
		}), c = ref(!1), f = ref(!1), v = ref(0), { getItems: p } = Ca();
		function g(_) {
			const C = !f.value;
			if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
				const $ = new CustomEvent(Ed, Pd);
				if (_.currentTarget.dispatchEvent($), l("entryFocus", $), !$.defaultPrevented) {
					const h = p().map((I) => I.ref).filter((I) => I.dataset.disabled !== "");
					ls([
						h.find((I) => I.getAttribute("data-active") === "true"),
						h.find((I) => I.id === d.value),
						...h
					].filter(Boolean), n.preventScrollOnEntryFocus);
				}
			}
			f.value = !1;
		}
		function m() {
			setTimeout(() => {
				f.value = !1;
			}, 1);
		}
		return t({ getItems: p }), Id({
			loop: s,
			dir: u,
			orientation: r,
			currentTabStopId: d,
			onItemFocus: (_) => {
				d.value = _;
			},
			onItemShiftTab: () => {
				c.value = !0;
			},
			onFocusableItemAdd: () => {
				v.value++;
			},
			onFocusableItemRemove: () => {
				v.value--;
			}
		}), (_, C) => (openBlock(), createBlock(unref(wa), null, {
			default: withCtx(() => [createVNode(unref(O), {
				tabindex: c.value || v.value === 0 ? -1 : 0,
				"data-orientation": unref(r),
				as: _.as,
				"as-child": _.asChild,
				dir: unref(u),
				style: { outline: "none" },
				onMousedown: C[0] || (C[0] = ($) => f.value = !0),
				onMouseup: m,
				onFocus: g,
				onBlur: C[1] || (C[1] = ($) => c.value = !1)
			}, {
				default: withCtx(() => [renderSlot(_.$slots, "default")]),
				_: 3
			}, 8, [
				"tabindex",
				"data-orientation",
				"as",
				"as-child",
				"dir"
			])]),
			_: 3
		}));
	}
}), [ro, Td] = te("MenuContent"), io = /* @__PURE__ */ defineComponent({
	__name: "MenuContentImpl",
	props: /* @__PURE__ */ mergeDefaults({
		loop: { type: Boolean },
		disableOutsidePointerEvents: { type: Boolean },
		disableOutsideScroll: { type: Boolean },
		trapFocus: { type: Boolean },
		side: {},
		sideOffset: {},
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	}, { ...ts }),
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus",
		"dismiss"
	],
	setup(a, { emit: t }) {
		const e = a, n = t, l = Vt(), s = _a(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
		Yn(), ya(i.value);
		const d = ref(""), c = ref(0), f = ref(0), v = ref(null), p = ref("right"), g = ref(0), m = ref(null), { createCollection: _ } = Fe(), { forwardRef: C, currentElement: $ } = R(), h = _($);
		watch($, (A) => {
			l.onContentChange(A);
		});
		const { handleTypeaheadSearch: E } = ba(h);
		onUnmounted(() => {
			window.clearTimeout(c.value);
		});
		function P(A) {
			var j, H;
			return p.value === ((j = v.value) == null ? void 0 : j.side) && Cu(A, (H = v.value) == null ? void 0 : H.area);
		}
		async function D(A) {
			var F;
			n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (F = $.value) == null || F.focus({ preventScroll: !0 }));
		}
		function I(A) {
			if (A.defaultPrevented) return;
			const j = A.target.closest("[data-radix-menu-content]") === A.currentTarget, H = A.ctrlKey || A.altKey || A.metaKey, Q = A.key.length === 1, G = At(A, me(), $.value, {
				loop: u.value,
				arrowKeyOptions: "vertical",
				dir: s == null ? void 0 : s.dir.value,
				focus: !0,
				attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
			});
			if (G) return G == null ? void 0 : G.focus();
			if (A.code === "Space" || (j && (A.key === "Tab" && A.preventDefault(), !H && Q && E(A.key)), A.target !== $.value) || !hu.includes(A.key)) return;
			A.preventDefault();
			const J = h.value;
			ql.includes(A.key) && J.reverse(), In(J);
		}
		function M(A) {
			var F, j;
			(j = (F = A == null ? void 0 : A.currentTarget) == null ? void 0 : F.contains) != null && j.call(F, A.target) || (window.clearTimeout(c.value), d.value = "");
		}
		function V(A) {
			var H;
			if (!da(A)) return;
			const F = A.target, j = g.value !== A.clientX;
			if ((H = A == null ? void 0 : A.currentTarget) != null && H.contains(F) && j) {
				const Q = A.clientX > g.value ? "right" : "left";
				p.value = Q, g.value = A.clientX;
			}
		}
		return Td({
			onItemEnter: (A) => !!P(A),
			onItemLeave: (A) => {
				var F;
				P(A) || ((F = $.value) == null || F.focus(), m.value = null);
			},
			onTriggerLeave: (A) => !!P(A),
			searchRef: d,
			pointerGraceTimerRef: f,
			onPointerGraceIntentChange: (A) => {
				v.value = A;
			}
		}), (A, F) => (openBlock(), createBlock(unref(Za), {
			"as-child": "",
			trapped: unref(r),
			onMountAutoFocus: D,
			onUnmountAutoFocus: F[7] || (F[7] = (j) => n("closeAutoFocus", j))
		}, {
			default: withCtx(() => [createVNode(unref(Ct), {
				"as-child": "",
				"disable-outside-pointer-events": unref(i),
				onEscapeKeyDown: F[2] || (F[2] = (j) => n("escapeKeyDown", j)),
				onPointerDownOutside: F[3] || (F[3] = (j) => n("pointerDownOutside", j)),
				onFocusOutside: F[4] || (F[4] = (j) => n("focusOutside", j)),
				onInteractOutside: F[5] || (F[5] = (j) => n("interactOutside", j)),
				onDismiss: F[6] || (F[6] = (j) => n("dismiss"))
			}, {
				default: withCtx(() => [createVNode(unref(Ft), {
					"current-tab-stop-id": m.value,
					"onUpdate:currentTabStopId": F[0] || (F[0] = (j) => m.value = j),
					"as-child": "",
					orientation: "vertical",
					dir: unref(s).dir.value,
					loop: unref(u),
					onEntryFocus: F[1] || (F[1] = (j) => {
						n("entryFocus", j), unref(s).isUsingKeyboardRef.value || j.preventDefault();
					})
				}, {
					default: withCtx(() => [createVNode(unref(It), {
						ref: unref(C),
						role: "menu",
						as: A.as,
						"as-child": A.asChild,
						"aria-orientation": "vertical",
						"data-radix-menu-content": "",
						"data-state": unref(to)(unref(l).open.value),
						dir: unref(s).dir.value,
						side: A.side,
						"side-offset": A.sideOffset,
						align: A.align,
						"align-offset": A.alignOffset,
						"avoid-collisions": A.avoidCollisions,
						"collision-boundary": A.collisionBoundary,
						"collision-padding": A.collisionPadding,
						"arrow-padding": A.arrowPadding,
						"prioritize-position": A.prioritizePosition,
						sticky: A.sticky,
						"hide-when-detached": A.hideWhenDetached,
						onKeydown: I,
						onBlur: M,
						onPointermove: V
					}, {
						default: withCtx(() => [renderSlot(A.$slots, "default")]),
						_: 3
					}, 8, [
						"as",
						"as-child",
						"data-state",
						"dir",
						"side",
						"side-offset",
						"align",
						"align-offset",
						"avoid-collisions",
						"collision-boundary",
						"collision-padding",
						"arrow-padding",
						"prioritize-position",
						"sticky",
						"hide-when-detached"
					])]),
					_: 3
				}, 8, [
					"current-tab-stop-id",
					"dir",
					"loop"
				])]),
				_: 3
			}, 8, ["disable-outside-pointer-events"])]),
			_: 3
		}, 8, ["trapped"]));
	}
}), ss = /* @__PURE__ */ defineComponent({
	inheritAttrs: !1,
	__name: "MenuItemImpl",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a, e = ro(), { forwardRef: n } = R(), l = ref(!1);
		async function s(i) {
			if (!i.defaultPrevented && da(i)) {
				if (t.disabled) e.onItemLeave(i);
				else if (!e.onItemEnter(i)) i.currentTarget?.focus({ preventScroll: !0 });
			}
		}
		async function r(i) {
			await nextTick(), !i.defaultPrevented && da(i) && e.onItemLeave(i);
		}
		return (i, u) => (openBlock(), createBlock(unref(Qt), { value: { textValue: i.textValue } }, {
			default: withCtx(() => [createVNode(unref(O), mergeProps({
				ref: unref(n),
				role: "menuitem",
				tabindex: "-1"
			}, i.$attrs, {
				as: i.as,
				"as-child": i.asChild,
				"data-radix-vue-collection-item": "",
				"aria-disabled": i.disabled || void 0,
				"data-disabled": i.disabled ? "" : void 0,
				"data-highlighted": l.value ? "" : void 0,
				onPointermove: s,
				onPointerleave: r,
				onFocus: u[0] || (u[0] = async (d) => {
					await nextTick(), !(d.defaultPrevented || i.disabled) && (l.value = !0);
				}),
				onBlur: u[1] || (u[1] = async (d) => {
					await nextTick(), !d.defaultPrevented && (l.value = !1);
				})
			}), {
				default: withCtx(() => [renderSlot(i.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"aria-disabled",
				"data-disabled",
				"data-highlighted"
			])]),
			_: 3
		}, 8, ["value"]));
	}
}), xa = /* @__PURE__ */ defineComponent({
	__name: "MenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(a, { emit: t }) {
		const e = a, n = t, { forwardRef: l, currentElement: s } = R(), r = _a(), i = ro(), u = ref(!1);
		async function d() {
			const c = s.value;
			if (!e.disabled && c) {
				const f = new CustomEvent(vu, {
					bubbles: !0,
					cancelable: !0
				});
				n("select", f), await nextTick(), f.defaultPrevented ? u.value = !1 : r.onClose();
			}
		}
		return (c, f) => (openBlock(), createBlock(ss, mergeProps(e, {
			ref: unref(l),
			onClick: d,
			onPointerdown: f[0] || (f[0] = () => {
				u.value = !0;
			}),
			onPointerup: f[1] || (f[1] = async (v) => {
				var p;
				await nextTick(), !v.defaultPrevented && (u.value || (p = v.currentTarget) == null || p.click());
			}),
			onKeydown: f[2] || (f[2] = async (v) => {
				const p = unref(i).searchRef.value !== "";
				c.disabled || p && v.key === " " || unref(Bn).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
			})
		}), {
			default: withCtx(() => [renderSlot(c.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Rd, rs] = te(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext"), uo = /* @__PURE__ */ defineComponent({
	__name: "MenuItemIndicator",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: { default: "span" }
	},
	setup(a) {
		const t = Rd({ checked: ref(!1) });
		return (e, n) => (openBlock(), createBlock(unref(Pe), { present: e.forceMount || unref(La)(unref(t).checked.value) || unref(t).checked.value === !0 }, {
			default: withCtx(() => [createVNode(unref(O), {
				as: e.as,
				"as-child": e.asChild,
				"data-state": unref(ao)(unref(t).checked.value)
			}, {
				default: withCtx(() => [renderSlot(e.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-state"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), co = /* @__PURE__ */ defineComponent({
	__name: "MenuCheckboxItem",
	props: {
		checked: {
			type: [Boolean, String],
			default: !1
		},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select", "update:checked"],
	setup(a, { emit: t }) {
		const e = a, n = t, l = ne(e, "checked", n);
		return rs({ checked: l }), (s, r) => (openBlock(), createBlock(xa, mergeProps({ role: "menuitemcheckbox" }, e, {
			"aria-checked": unref(La)(unref(l)) ? "mixed" : unref(l),
			"data-state": unref(ao)(unref(l)),
			onSelect: r[0] || (r[0] = async (i) => {
				n("select", i), unref(La)(unref(l)) ? l.value = !0 : l.value = !unref(l);
			})
		}), {
			default: withCtx(() => [renderSlot(s.$slots, "default", { checked: unref(l) })]),
			_: 3
		}, 16, ["aria-checked", "data-state"]));
	}
}), Ad = /* @__PURE__ */ defineComponent({
	__name: "MenuRootContentModal",
	props: {
		loop: { type: Boolean },
		side: {},
		sideOffset: {},
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(a, { emit: t }) {
		const e = a, n = t, l = Se(e, n), s = Vt(), { forwardRef: r, currentElement: i } = R();
		return ga(i), (u, d) => (openBlock(), createBlock(io, mergeProps(unref(l), {
			ref: unref(r),
			"trap-focus": unref(s).open.value,
			"disable-outside-pointer-events": unref(s).open.value,
			"disable-outside-scroll": !0,
			onDismiss: d[0] || (d[0] = (c) => unref(s).onOpenChange(!1)),
			onFocusOutside: d[1] || (d[1] = withModifiers((c) => n("focusOutside", c), ["prevent"]))
		}), {
			default: withCtx(() => [renderSlot(u.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus", "disable-outside-pointer-events"]));
	}
}), Od = /* @__PURE__ */ defineComponent({
	__name: "MenuRootContentNonModal",
	props: {
		loop: { type: Boolean },
		side: {},
		sideOffset: {},
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(a, { emit: t }) {
		const l = Se(a, t), s = Vt();
		return (r, i) => (openBlock(), createBlock(io, mergeProps(unref(l), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			"disable-outside-scroll": !1,
			onDismiss: i[0] || (i[0] = (u) => unref(s).onOpenChange(!1))
		}), {
			default: withCtx(() => [renderSlot(r.$slots, "default")]),
			_: 3
		}, 16));
	}
}), fo = /* @__PURE__ */ defineComponent({
	__name: "MenuContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		side: {},
		sideOffset: {},
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(a, { emit: t }) {
		const l = Se(a, t), s = Vt(), r = _a();
		return (i, u) => (openBlock(), createBlock(unref(Pe), { present: i.forceMount || unref(s).open.value }, {
			default: withCtx(() => [unref(r).modal.value ? (openBlock(), createBlock(Ad, normalizeProps(mergeProps({ key: 0 }, {
				...i.$attrs,
				...unref(l)
			})), {
				default: withCtx(() => [renderSlot(i.$slots, "default")]),
				_: 3
			}, 16)) : (openBlock(), createBlock(Od, normalizeProps(mergeProps({ key: 1 }, {
				...i.$attrs,
				...unref(l)
			})), {
				default: withCtx(() => [renderSlot(i.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), tn = /* @__PURE__ */ defineComponent({
	__name: "MenuGroup",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(O), mergeProps({ role: "group" }, t), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), po = /* @__PURE__ */ defineComponent({
	__name: "MenuLabel",
	props: {
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vo = /* @__PURE__ */ defineComponent({
	__name: "MenuPortal",
	props: {
		to: {},
		disabled: { type: Boolean },
		forceMount: { type: Boolean }
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(rt), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [kd, Md] = te("MenuRadioGroup"), mo = /* @__PURE__ */ defineComponent({
	__name: "MenuRadioGroup",
	props: {
		modelValue: { default: "" },
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(a, { emit: t }) {
		const e = a, l = ne(e, "modelValue", t);
		return Md({
			modelValue: l,
			onValueChange: (s) => {
				l.value = s;
			}
		}), (s, r) => (openBlock(), createBlock(tn, normalizeProps(guardReactiveProps(e)), {
			default: withCtx(() => [renderSlot(s.$slots, "default", { modelValue: unref(l) })]),
			_: 3
		}, 16));
	}
}), ho = /* @__PURE__ */ defineComponent({
	__name: "MenuRadioItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(a, { emit: t }) {
		const e = a, n = t, { value: l } = toRefs(e), s = kd(), r = computed(() => s.modelValue.value === (l == null ? void 0 : l.value));
		return rs({ checked: r }), (i, u) => (openBlock(), createBlock(xa, mergeProps({ role: "menuitemradio" }, e, {
			"aria-checked": r.value,
			"data-state": unref(ao)(r.value),
			onSelect: u[0] || (u[0] = async (d) => {
				n("select", d), unref(s).onValueChange(unref(l));
			})
		}), {
			default: withCtx(() => [renderSlot(i.$slots, "default")]),
			_: 3
		}, 16, ["aria-checked", "data-state"]));
	}
}), yo = /* @__PURE__ */ defineComponent({
	__name: "MenuSeparator",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(O), mergeProps(t, {
			role: "separator",
			"aria-orientation": "horizontal"
		}), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [is, Vd] = te("MenuSub"), go = /* @__PURE__ */ defineComponent({
	__name: "MenuSub",
	props: { open: {
		type: Boolean,
		default: void 0
	} },
	emits: ["update:open"],
	setup(a, { emit: t }) {
		const e = a, l = ne(e, "open", t, {
			defaultValue: !1,
			passive: e.open === void 0
		}), s = Vt(), r = ref(), i = ref();
		return watchEffect((u) => {
			(s == null ? void 0 : s.open.value) === !1 && (l.value = !1), u(() => l.value = !1);
		}), ns({
			open: l,
			onOpenChange: (u) => {
				l.value = u;
			},
			content: i,
			onContentChange: (u) => {
				i.value = u;
			}
		}), Vd({
			triggerId: "",
			contentId: "",
			trigger: r,
			onTriggerChange: (u) => {
				r.value = u;
			}
		}), (u, d) => (openBlock(), createBlock(unref(kt), null, {
			default: withCtx(() => [renderSlot(u.$slots, "default")]),
			_: 3
		}));
	}
}), bo = /* @__PURE__ */ defineComponent({
	__name: "MenuSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: {
			type: Boolean,
			default: !0
		},
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(a, { emit: t }) {
		const l = Se(a, t), s = Vt(), r = _a(), i = is(), { forwardRef: u, currentElement: d } = R();
		return i.contentId || (i.contentId = ge(void 0, "radix-vue-menu-sub-content")), (c, f) => (openBlock(), createBlock(unref(Pe), { present: c.forceMount || unref(s).open.value }, {
			default: withCtx(() => [createVNode(io, mergeProps(unref(l), {
				id: unref(i).contentId,
				ref: unref(u),
				"aria-labelledby": unref(i).triggerId,
				align: "start",
				side: unref(r).dir.value === "rtl" ? "left" : "right",
				"disable-outside-pointer-events": !1,
				"disable-outside-scroll": !1,
				"trap-focus": !1,
				onOpenAutoFocus: f[0] || (f[0] = withModifiers((v) => {
					var p;
					unref(r).isUsingKeyboardRef.value && ((p = unref(d)) == null || p.focus());
				}, ["prevent"])),
				onCloseAutoFocus: f[1] || (f[1] = withModifiers(() => {}, ["prevent"])),
				onFocusOutside: f[2] || (f[2] = (v) => {
					v.defaultPrevented || v.target !== unref(i).trigger.value && unref(s).onOpenChange(!1);
				}),
				onEscapeKeyDown: f[3] || (f[3] = (v) => {
					unref(r).onClose(), v.preventDefault();
				}),
				onKeydown: f[4] || (f[4] = (v) => {
					var m, _;
					const p = (m = v.currentTarget) == null ? void 0 : m.contains(v.target), g = unref(gu)[unref(r).dir.value].includes(v.key);
					p && g && (unref(s).onOpenChange(!1), (_ = unref(i).trigger.value) == null || _.focus(), v.preventDefault());
				})
			}), {
				default: withCtx(() => [renderSlot(c.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"aria-labelledby",
				"side"
			])]),
			_: 3
		}, 8, ["present"]));
	}
}), Co = /* @__PURE__ */ defineComponent({
	__name: "MenuSubTrigger",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a, e = Vt(), n = _a(), l = is(), s = ro(), r = ref(null);
		l.triggerId || (l.triggerId = ge(void 0, "radix-vue-menu-sub-trigger"));
		function i() {
			r.value && window.clearTimeout(r.value), r.value = null;
		}
		onUnmounted(() => {
			i();
		});
		function u(f) {
			!da(f) || s.onItemEnter(f) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
				e.onOpenChange(!0), i();
			}, 100));
		}
		async function d(f) {
			var p, g;
			if (!da(f)) return;
			i();
			const v = (p = e.content.value) == null ? void 0 : p.getBoundingClientRect();
			if (v != null && v.width) {
				const m = (g = e.content.value) == null ? void 0 : g.dataset.side, _ = m === "right", C = _ ? -5 : 5, $ = v[_ ? "left" : "right"], h = v[_ ? "right" : "left"];
				s.onPointerGraceIntentChange({
					area: [
						{
							x: f.clientX + C,
							y: f.clientY
						},
						{
							x: $,
							y: v.top
						},
						{
							x: h,
							y: v.top
						},
						{
							x: h,
							y: v.bottom
						},
						{
							x: $,
							y: v.bottom
						}
					],
					side: m
				}), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300);
			} else {
				if (s.onTriggerLeave(f)) return;
				s.onPointerGraceIntentChange(null);
			}
		}
		async function c(f) {
			var p;
			const v = s.searchRef.value !== "";
			t.disabled || v && f.key === " " || yu[n.dir.value].includes(f.key) && (e.onOpenChange(!0), await nextTick(), (p = e.content.value) == null || p.focus(), f.preventDefault());
		}
		return (f, v) => (openBlock(), createBlock(Qa, { "as-child": "" }, {
			default: withCtx(() => [createVNode(ss, mergeProps(t, {
				id: unref(l).triggerId,
				ref: (p) => {
					var g;
					(g = unref(l)) == null || g.onTriggerChange(p == null ? void 0 : p.$el);
				},
				"aria-haspopup": "menu",
				"aria-expanded": unref(e).open.value,
				"aria-controls": unref(l).contentId,
				"data-state": unref(to)(unref(e).open.value),
				onClick: v[0] || (v[0] = async (p) => {
					t.disabled || p.defaultPrevented || (p.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(!0));
				}),
				onPointermove: u,
				onPointerleave: d,
				onKeydown: c
			}), {
				default: withCtx(() => [renderSlot(f.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"aria-expanded",
				"aria-controls",
				"data-state"
			])]),
			_: 3
		}));
	}
}), [us, Fd] = te("ContextMenuRoot"), [Hd, Wd] = te("DateFieldRoot");
var [wo, oc] = te("DatePickerRoot"), [_o, lc] = te("DateRangePickerRoot"), [rc, ic] = te("DateRangeFieldRoot"), [fs, cc] = te("DropdownMenuRoot"), uh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuRoot",
	props: {
		defaultOpen: { type: Boolean },
		open: {
			type: Boolean,
			default: void 0
		},
		dir: {},
		modal: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["update:open"],
	setup(a, { emit: t }) {
		const e = a, n = t;
		R();
		const l = ne(e, "open", n, {
			defaultValue: e.defaultOpen,
			passive: e.open === void 0
		}), s = ref(), { modal: r, dir: i } = toRefs(e), u = we(i);
		return cc({
			open: l,
			onOpenChange: (d) => {
				l.value = d;
			},
			onOpenToggle: () => {
				l.value = !l.value;
			},
			triggerId: "",
			triggerElement: s,
			contentId: "",
			modal: r,
			dir: u
		}), (d, c) => (openBlock(), createBlock(unref(so), {
			open: unref(l),
			"onUpdate:open": c[0] || (c[0] = (f) => isRef(l) ? l.value = f : null),
			dir: unref(u),
			modal: unref(r)
		}, {
			default: withCtx(() => [renderSlot(d.$slots, "default", { open: unref(l) })]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), dh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(a) {
		const t = a, e = fs(), { forwardRef: n, currentElement: l } = R();
		return onMounted(() => {
			e.triggerElement = l;
		}), e.triggerId || (e.triggerId = ge(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (openBlock(), createBlock(unref(Qa), { "as-child": "" }, {
			default: withCtx(() => [createVNode(unref(O), {
				id: unref(e).triggerId,
				ref: unref(n),
				type: s.as === "button" ? "button" : void 0,
				"as-child": t.asChild,
				as: s.as,
				"aria-haspopup": "menu",
				"aria-expanded": unref(e).open.value,
				"aria-controls": unref(e).open.value ? unref(e).contentId : void 0,
				"data-disabled": s.disabled ? "" : void 0,
				disabled: s.disabled,
				"data-state": unref(e).open.value ? "open" : "closed",
				onClick: r[0] || (r[0] = async (i) => {
					var u;
					!s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = unref(e)) == null || u.onOpenToggle(), await nextTick(), unref(e).open.value && i.preventDefault());
				}),
				onKeydown: r[1] || (r[1] = withKeys((i) => {
					s.disabled || (["Enter", " "].includes(i.key) && unref(e).onOpenToggle(), i.key === "ArrowDown" && unref(e).onOpenChange(!0), [
						"Enter",
						" ",
						"ArrowDown"
					].includes(i.key) && i.preventDefault());
				}, [
					"enter",
					"space",
					"arrow-down"
				]))
			}, {
				default: withCtx(() => [renderSlot(s.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"type",
				"as-child",
				"as",
				"aria-expanded",
				"aria-controls",
				"data-disabled",
				"disabled",
				"data-state"
			])]),
			_: 3
		}));
	}
}), ch = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuPortal",
	props: {
		to: {},
		disabled: { type: Boolean },
		forceMount: { type: Boolean }
	},
	setup(a) {
		const t = a;
		return (e, n) => (openBlock(), createBlock(unref(vo), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), fh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		side: {},
		sideOffset: {},
		align: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"closeAutoFocus"
	],
	setup(a, { emit: t }) {
		const l = Se(a, t);
		R();
		const s = fs(), r = ref(!1);
		function i(u) {
			u.defaultPrevented || (r.value || setTimeout(() => {
				var d;
				(d = s.triggerElement.value) == null || d.focus();
			}, 0), r.value = !1, u.preventDefault());
		}
		return s.contentId || (s.contentId = ge(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
			var c;
			return openBlock(), createBlock(unref(fo), mergeProps(unref(l), {
				id: unref(s).contentId,
				"aria-labelledby": (c = unref(s)) == null ? void 0 : c.triggerId,
				style: {
					"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
					"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
					"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
				},
				onCloseAutoFocus: i,
				onInteractOutside: d[0] || (d[0] = (f) => {
					var m;
					if (f.defaultPrevented) return;
					const v = f.detail.originalEvent, p = v.button === 0 && v.ctrlKey === !0, g = v.button === 2 || p;
					(!unref(s).modal.value || g) && (r.value = !0), (m = unref(s).triggerElement.value) != null && m.contains(f.target) && f.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(u.$slots, "default")]),
				_: 3
			}, 16, ["id", "aria-labelledby"]);
		};
	}
}), ph = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuArrow",
	props: {
		width: { default: 10 },
		height: { default: 5 },
		asChild: { type: Boolean },
		as: { default: "svg" }
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(lo), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuItem",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(a, { emit: t }) {
		const e = a, l = Te(t);
		return R(), (s, r) => (openBlock(), createBlock(unref(xa), normalizeProps(guardReactiveProps({
			...e,
			...unref(l)
		})), {
			default: withCtx(() => [renderSlot(s.$slots, "default")]),
			_: 3
		}, 16));
	}
}), mh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuGroup",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(tn), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), hh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSeparator",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(yo), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), yh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuCheckboxItem",
	props: {
		checked: { type: [Boolean, String] },
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select", "update:checked"],
	setup(a, { emit: t }) {
		const e = a, l = Te(t);
		return R(), (s, r) => (openBlock(), createBlock(unref(co), normalizeProps(guardReactiveProps({
			...e,
			...unref(l)
		})), {
			default: withCtx(() => [renderSlot(s.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuItemIndicator",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(uo), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), bh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuLabel",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(po), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ch = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(a, { emit: t }) {
		const e = a, l = Te(t);
		return R(), (s, r) => (openBlock(), createBlock(unref(mo), normalizeProps(guardReactiveProps({
			...e,
			...unref(l)
		})), {
			default: withCtx(() => [renderSlot(s.$slots, "default")]),
			_: 3
		}, 16));
	}
}), wh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuRadioItem",
	props: {
		value: {},
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["select"],
	setup(a, { emit: t }) {
		const l = Se(a, t);
		return R(), (s, r) => (openBlock(), createBlock(unref(ho), normalizeProps(guardReactiveProps(unref(l))), {
			default: withCtx(() => [renderSlot(s.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _h = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: {
			type: Boolean,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(a, { emit: t }) {
		const e = a, l = ne(e, "open", t, {
			passive: e.open === void 0,
			defaultValue: e.defaultOpen ?? !1
		});
		return R(), (s, r) => (openBlock(), createBlock(unref(go), {
			open: unref(l),
			"onUpdate:open": r[0] || (r[0] = (i) => isRef(l) ? l.value = i : null)
		}, {
			default: withCtx(() => [renderSlot(s.$slots, "default", { open: unref(l) })]),
			_: 3
		}, 8, ["open"]));
	}
}), xh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSubContent",
	props: {
		forceMount: { type: Boolean },
		loop: { type: Boolean },
		sideOffset: {},
		alignOffset: {},
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		updatePositionStrategy: {},
		prioritizePosition: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(a, { emit: t }) {
		const l = Se(a, t);
		return R(), (s, r) => (openBlock(), createBlock(unref(bo), mergeProps(unref(l), { style: {
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		} }), {
			default: withCtx(() => [renderSlot(s.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Sh = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSubTrigger",
	props: {
		disabled: { type: Boolean },
		textValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(a) {
		const t = a;
		return R(), (e, n) => (openBlock(), createBlock(unref(Co), normalizeProps(guardReactiveProps(t)), {
			default: withCtx(() => [renderSlot(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [ta, pc] = te("EditableRoot"), [xo, vc] = te("HoverCardRoot"), [an, bc] = te("ListboxRoot"), [wc, _c] = te("ListboxItem");
typeof window > "u" || "onscrollend" in window;
var [kc, Mc] = te("ListboxGroup"), [nn, Vc] = te("MenubarRoot"), [So, Fc] = te("MenubarMenu"), [_t, ms] = te(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), [Po, zc] = te("NavigationMenuItem"), [Do, Uc] = te("NumberFieldRoot"), [aa, Gc] = te("PaginationRoot"), [Zc, Jc] = te("PinInputRoot"), [Lt, Qc] = te("PopoverRoot"), [af, nf] = te("ProgressRoot"), [sf, rf] = te("RadioGroupRoot"), [cf, ff] = te("RadioGroupItem"), [na, hf] = te("RangeCalendarRoot"), [Ue, Bf] = te("ScrollAreaRoot");
var [sn, Of] = te("ScrollAreaScrollbarVisible"), [rn, Vf] = te("ScrollAreaScrollbar"), [xt, Rs] = te("SelectRoot"), [Kf, Hf] = te("SelectRoot"), [Io, Uf] = te("SelectItemAlignedPosition"), [St, Yf] = te("SelectContent"), [Os, Qf] = te("SelectItem"), [ep, tp] = te("SelectGroup"), [zs, Ks] = te(["SliderVertical", "SliderHorizontal"]), [un, vp] = te("SliderRoot");
function xp() {
	if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
xp();
function sl(a) {
	try {
		if (typeof localStorage < "u") a.getItem = (t) => localStorage.getItem(t), a.setItem = (t, e) => {
			localStorage.setItem(t, e);
		};
		else throw new TypeError("localStorage not supported in this environment");
	} catch (t) {
		console.error(t), a.getItem = () => null, a.setItem = () => {};
	}
}
var ra = {
	getItem: (a) => (sl(ra), ra.getItem(a)),
	setItem: (a, t) => {
		sl(ra), ra.setItem(a, t);
	}
}, [rr, Vp] = te("PanelGroup"), [ko, Lp] = te("StepperRoot"), [Sa, zp] = te("StepperItem"), [Hp, Wp] = te("SwitchRoot"), [vn, jp] = te("TabsRoot"), [mn, Up] = te("TagsInputRoot"), [dr, Gp] = te("TagsInputItem"), [hn, qp] = te("ToastProvider"), [tv, av] = te("ToastRoot"), [sv, rv] = te("ToggleGroupRoot"), [pr, dv] = te("ToolbarRoot"), [Mo, fv] = te("TooltipProvider"), [yn, pv] = te("TooltipRoot"), [hr, mv] = te("TreeRoot");
//#endregion
//#region node_modules/radix-vue/dist/namespaced/index.mjs
var DropdownMenu = {
	Root: uh,
	Trigger: dh,
	Portal: ch,
	Content: fh,
	Arrow: ph,
	Item: vh,
	Group: mh,
	Separator: hh,
	CheckboxItem: yh,
	ItemIndicator: gh,
	Label: bh,
	RadioGroup: Ch,
	RadioItem: wh,
	Sub: _h,
	SubContent: xh,
	SubTrigger: Sh
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuLink.vue.script.js
var _hoisted_1$6 = {
	key: 1,
	class: "size-3"
};
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuLink.vue.js
var ScalarMenuLink_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarMenuLink",
	props: {
		is: { default: "a" },
		icon: { type: [Object, Function] },
		strong: { type: Boolean },
		submenu: { type: Boolean }
	},
	setup(__props) {
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarDropdownButton_default), mergeProps(unref(cx)("flex items-center"), {
				is: __props.submenu ? unref(DropdownMenu).SubTrigger : unref(DropdownMenu).Item,
				as: __props.is
			}), {
				default: withCtx(() => [__props.icon ? (openBlock(), createBlock(unref(ScalarIconLegacyAdapter_default), {
					key: 0,
					class: normalizeClass([__props.strong ? "text-c-1" : "text-c-2", typeof __props.icon === "string" ? "size-3" : "size-3.5 -mx-px"]),
					icon: __props.icon,
					thickness: __props.strong ? "2.5" : "2",
					weight: __props.strong ? "bold" : "regular"
				}, null, 8, [
					"class",
					"icon",
					"thickness",
					"weight"
				])) : (openBlock(), createElementBlock("div", _hoisted_1$6)), createBaseVNode("div", { class: normalizeClass(["flex items-center flex-1 min-w-0 truncate", __props.strong ? "font-medium" : "font-normal"]) }, [renderSlot(_ctx.$slots, "default")], 2)]),
				_: 3
			}, 16, ["is", "as"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuProduct.vue.js
var ScalarMenuProduct_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarMenuProduct",
	props: {
		is: { default: "a" },
		selected: { type: Boolean },
		icon: { type: [Object, Function] }
	},
	setup(__props) {
		const { cx } = useBindCx();
		const variants = cva({
			base: "gap-1.5",
			variants: { selected: {
				true: "pointer-events-none bg-b-2 dark:bg-b-3",
				false: "cursor-pointer hover:bg-b-2 dark:hover:bg-b-3"
			} }
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarMenuLink_default), mergeProps({
				is: __props.is,
				icon: __props.icon,
				strong: "",
				target: "_blank"
			}, unref(cx)(unref(variants)({ selected: __props.selected }))), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["is", "icon"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuProducts.vue.js
var ScalarMenuProducts_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarMenuProducts",
	props: {
		selected: {},
		showDocs: { type: Boolean },
		hrefs: {}
	},
	emits: ["open"],
	setup(__props) {
		const { cx } = useBindCx();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(unref(cx)("flex flex-col"))), [
				createVNode(ScalarMenuProduct_default, {
					href: __props.hrefs?.dashboard ?? "https://dashboard.scalar.com",
					icon: unref(ScalarIconHouse_default),
					selected: __props.selected === "dashboard",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open", $event, "dashboard"))
				}, {
					default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode(" Dashboard ", -1)])]),
					_: 1
				}, 8, [
					"href",
					"icon",
					"selected"
				]),
				__props.showDocs || __props.selected === "docs" ? (openBlock(), createBlock(ScalarMenuProduct_default, {
					key: 0,
					href: __props.hrefs?.docs ?? "https://docs.scalar.com",
					icon: unref(ScalarIconBook_default),
					selected: __props.selected === "docs",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("open", $event, "docs"))
				}, {
					default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode(" Docs ", -1)])]),
					_: 1
				}, 8, [
					"href",
					"icon",
					"selected"
				])) : createCommentVNode("", true),
				createVNode(ScalarMenuProduct_default, {
					href: __props.hrefs?.editor ?? "https://editor.scalar.com",
					icon: unref(ScalarIconNotepad_default),
					selected: __props.selected === "editor",
					onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("open", $event, "editor"))
				}, {
					default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Editor ", -1)])]),
					_: 1
				}, 8, [
					"href",
					"icon",
					"selected"
				]),
				createVNode(ScalarMenuProduct_default, {
					href: __props.hrefs?.client ?? "https://client.scalar.com",
					icon: unref(ScalarIconArrowUpRight_default),
					selected: __props.selected === "client",
					onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("open", $event, "client"))
				}, {
					default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" Client ", -1)])]),
					_: 1
				}, 8, [
					"href",
					"icon",
					"selected"
				])
			], 16);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuSection.vue.js
var ScalarMenuSection_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarMenuSection",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(ScalarDropdownDivider_default)), renderSlot(_ctx.$slots, "default")], 64);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuResources.vue.js
var ScalarMenuResources_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarMenuResources",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ScalarMenuSection_default, null, {
				title: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Resources", -1)])]),
				default: withCtx(() => [
					createVNode(ScalarMenuLink_default, {
						href: "mailto:support@scalar.com",
						icon: unref(ScalarIconEnvelopeSimple_default),
						target: "_blank"
					}, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Sales & Support ", -1)])]),
						_: 1
					}, 8, ["icon"]),
					createVNode(ScalarMenuLink_default, {
						href: "https://scalar.com/terms-and-conditions",
						icon: unref(ScalarIconFileText_default),
						target: "_blank"
					}, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Terms & Conditions ", -1)])]),
						_: 1
					}, 8, ["icon"]),
					createVNode(ScalarMenuLink_default, {
						href: "https://scalar.com/privacy-policy",
						icon: unref(ScalarIconBookOpenText_default),
						target: "_blank"
					}, {
						default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Privacy Policy ", -1)])]),
						_: 1
					}, 8, ["icon"])
				]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenu.vue.js
var ScalarMenu_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarMenu",
	setup(__props) {
		/** Whether the menu is open */
		const open = ref(false);
		/** Close the menu */
		function close() {
			open.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu).Root, {
				open: open.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event)
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu).Trigger, { asChild: "" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "button", { open: open.value }, () => [createVNode(ScalarMenuButton_default, {
						class: "min-w-0",
						open: open.value
					}, createSlots({ _: 2 }, [
						_ctx.$slots.logo ? {
							name: "logo",
							fn: withCtx(() => [renderSlot(_ctx.$slots, "logo")]),
							key: "0"
						} : void 0,
						_ctx.$slots.title ? {
							name: "title",
							fn: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
							key: "1"
						} : void 0,
						_ctx.$slots.label ? {
							name: "label",
							fn: withCtx(() => [renderSlot(_ctx.$slots, "label")]),
							key: "2"
						} : void 0
					]), 1032, ["open"])])]),
					_: 3
				}), createVNode(unref(DropdownMenu).Content, mergeProps({
					align: "start",
					as: unref(ScalarDropdownMenu_default),
					class: "max-h-radix-popper z-context",
					sideOffset: 5
				}, _ctx.$attrs), {
					default: withCtx(() => [
						renderSlot(_ctx.$slots, "products", { close }, () => [createVNode(ScalarMenuProducts_default)]),
						renderSlot(_ctx.$slots, "profile", { close }),
						renderSlot(_ctx.$slots, "sections", { close }, () => [createVNode(ScalarMenuResources_default)])
					]),
					_: 3
				}, 16, ["as"])]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuSupport.vue.js
var ScalarMenuSupport_default = /* @__PURE__ */ defineComponent({
	__name: "ScalarMenuSupport",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ScalarMenuSection_default, null, {
				title: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Resources", -1)])]),
				default: withCtx(() => [createVNode(ScalarMenuLink_default, {
					href: "https://discord.gg/scalar",
					icon: unref(ScalarIconDiscordLogo_default),
					target: "_blank"
				}, {
					default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Discord ", -1)])]),
					_: 1
				}, 8, ["icon"]), createVNode(ScalarMenuLink_default, {
					href: "https://github.com/scalar/scalar",
					icon: unref(ScalarIconGithubLogo_default),
					target: "_blank"
				}, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" GitHub ", -1)])]),
					_: 1
				}, 8, ["icon"])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuWorkspacePicker.vue.script.js
var _hoisted_1$5 = { class: "flex h-full items-center gap-1 flex-1 truncate" };
//#endregion
//#region node_modules/@scalar/components/dist/components/ScalarMenu/ScalarMenuWorkspacePicker.vue.js
var ScalarMenuWorkspacePicker_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScalarMenuWorkspacePicker",
	props: /*@__PURE__*/ mergeModels({ workspaceOptions: {} }, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["createWorkspace"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const model = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu).Sub, null, {
				default: withCtx(() => [createVNode(ScalarMenuLink_default, mergeProps({
					icon: unref(ScalarIconSwap_default),
					submenu: ""
				}, _ctx.$attrs), {
					default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("div", null, "Change workspace", -1)), createVNode(unref(ScalarIconCaretRight_default), {
						class: "ml-auto text-c-2 -mr-px size-3",
						weight: "bold"
					})]),
					_: 1
				}, 16, ["icon"]), createVNode(unref(DropdownMenu).Portal, null, {
					default: withCtx(() => [createVNode(unref(DropdownMenu).SubContent, {
						as: unref(ScalarDropdownMenu_default),
						class: "max-h-radix-popper z-context-plus",
						sideOffset: 3
					}, {
						default: withCtx(() => [createVNode(unref(DropdownMenu).RadioGroup, {
							modelValue: model.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
							class: "contents"
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.workspaceOptions, (group, groupIndex) => {
								return openBlock(), createElementBlock(Fragment, { key: groupIndex }, [
									group.label ? (openBlock(), createBlock(unref(DropdownMenu).Label, {
										key: 0,
										class: "px-3 py-1.5 text-xs font-medium text-c-3 select-none"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
										_: 2
									}, 1024)) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(group.options, (w) => {
										return openBlock(), createBlock(unref(DropdownMenu).RadioItem, {
											key: w.id,
											as: unref(ScalarDropdownButton_default),
											class: "group/item flex items-center",
											value: w.id
										}, {
											default: withCtx(() => [createBaseVNode("div", _hoisted_1$5, toDisplayString(w.label), 1), createVNode(unref(ScalarListboxCheckbox_default), {
												class: "ml-auto",
												selected: w.id === model.value
											}, null, 8, ["selected"])]),
											_: 2
										}, 1032, ["as", "value"]);
									}), 128)),
									groupIndex < __props.workspaceOptions.length - 1 ? (openBlock(), createBlock(unref(DropdownMenu).Separator, {
										key: 1,
										class: "h-px bg-b-3 my-1.5"
									})) : createCommentVNode("", true)
								], 64);
							}), 128))]),
							_: 1
						}, 8, ["modelValue"]), createVNode(unref(DropdownMenu).Item, {
							as: unref(ScalarDropdownButton_default),
							class: "flex items-center",
							onClick: _cache[1] || (_cache[1] = ($event) => emit("createWorkspace"))
						}, {
							default: withCtx(() => [createVNode(unref(ScalarIconPlus_default), {
								class: "bg-b-3 -ml-0.75 rounded p-1 size-5 text-c-3",
								weight: "bold"
							}), _cache[3] || (_cache[3] = createTextVNode(" Create workspace ", -1))]),
							_: 1
						}, 8, ["as"])]),
						_: 1
					}, 8, ["as"])]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/sidebar/SidebarMenu.vue.js
var SidebarMenu_default = /* @__PURE__ */ defineComponent({
	__name: "SidebarMenu",
	props: {
		activeWorkspace: {},
		workspaces: {}
	},
	emits: [
		"create:workspace",
		"select:workspace",
		"navigate:to:settings"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { translate } = useLocalization();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScalarMenu_default), null, {
				products: withCtx(() => [createVNode(unref(ScalarMenuProducts_default), { selected: "client" })]),
				sections: withCtx(({ close }) => [
					createVNode(unref(ScalarMenuSection_default), null, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "sidebarMenuActions", {}, () => [createVNode(unref(ScalarMenuWorkspacePicker_default), {
							modelValue: __props.activeWorkspace.id,
							workspaceOptions: __props.workspaces,
							onCreateWorkspace: _cache[0] || (_cache[0] = ($event) => emit("create:workspace")),
							"onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => emit("select:workspace", value))
						}, null, 8, ["modelValue", "workspaceOptions"]), createVNode(unref(ScalarMenuLink_default), {
							is: "button",
							icon: unref(ScalarIconGear_default),
							onClick: () => {
								close();
								emit("navigate:to:settings");
							}
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("apiClient.sidebarMenu.settings")), 1)]),
							_: 1
						}, 8, ["icon", "onClick"])])]),
						_: 2
					}, 1024),
					createVNode(unref(ScalarMenuResources_default)),
					createVNode(unref(ScalarMenuSupport_default))
				]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/sidebar/Sidebar.vue.script.js
var _hoisted_1$4 = { key: 1 };
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/sidebar/Sidebar.vue.js
var Sidebar_default = /* @__PURE__ */ defineComponent({
	__name: "Sidebar",
	props: /*@__PURE__*/ mergeModels({
		sidebarState: {},
		layout: {},
		activeWorkspace: {},
		workspaces: {},
		documents: {},
		isDroppable: { type: [Boolean, Function] }
	}, {
		"sidebarWidth": {
			required: true,
			default: 288
		},
		"sidebarWidthModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"selectItem",
		"select:workspace",
		"create:workspace",
		"reorder",
		"navigate:to:settings"
	], ["update:sidebarWidth"]),
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { translate } = useLocalization();
		const slots = useSlots();
		/** Controls the visibility of the search input */
		const isSearchVisible = ref(false);
		/** Controls the width of the sidebar */
		const sidebarWidth = useModel(__props, "sidebarWidth");
		const isDraft = (item) => {
			return item.type === "example" && item.title === "draft";
		};
		/** We handle search results out here so we can show them in the sidebar */
		const { query, results } = useSearchIndex(() => __props.documents.filter(isOpenApiDocument));
		/** We show either the search results or the sidebar items */
		const items = computed(() => results.value ?? __props.sidebarState.items.value);
		/** Select an item and clear the search query */
		const handleSelectItem = (id) => {
			emit("selectItem", id);
			query.value = "";
			isSearchVisible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Resize_default), {
				width: sidebarWidth.value,
				"onUpdate:width": _cache[6] || (_cache[6] = ($event) => sidebarWidth.value = $event),
				class: "flex flex-col"
			}, {
				default: withCtx(() => [createVNode(unref(ScalarSidebar_default), {
					class: "flex w-auto flex-1",
					indent: 20,
					isDraggable: __props.layout !== "modal",
					isDroppable: __props.isDroppable,
					isExpanded: __props.sidebarState.isExpanded,
					isSelected: __props.sidebarState.isSelected,
					items: items.value,
					layout: "client",
					options: { hideOperationDefaultExamples: __props.layout === "modal" },
					onReorder: _cache[5] || (_cache[5] = (draggingItem, hoveredItem) => emit("reorder", draggingItem, hoveredItem)),
					onSelectItem: handleSelectItem
				}, createSlots({
					header: withCtx(() => [_cache[7] || (_cache[7] = createBaseVNode("div", { class: "mac:h-12 mac:app-drag-region h-2" }, null, -1)), createBaseVNode("div", { class: normalizeClass(["bg-sidebar-b-1 z-1 flex flex-col gap-1.5 px-3 pb-1.5", {
						"max-md:pt-12": __props.layout === "desktop",
						"max-md:pt-2 max-md:pl-4!": __props.layout === "modal",
						"pt-1 max-md:pt-2 max-md:pl-14": __props.layout === "web"
					}]) }, [__props.layout !== "web" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(["flex items-center justify-between", { "max-md:pl-10": __props.layout === "desktop" }])
					}, [__props.layout !== "modal" ? (openBlock(), createBlock(SidebarMenu_default, {
						key: 0,
						activeWorkspace: __props.activeWorkspace,
						workspaces: __props.workspaces,
						"onCreate:workspace": _cache[0] || (_cache[0] = ($event) => emit("create:workspace")),
						"onNavigate:to:settings": _cache[1] || (_cache[1] = ($event) => emit("navigate:to:settings")),
						"onSelect:workspace": _cache[2] || (_cache[2] = (id) => emit("select:workspace", id))
					}, {
						sidebarMenuActions: withCtx(() => [renderSlot(_ctx.$slots, "sidebarMenuActions")]),
						_: 3
					}, 8, ["activeWorkspace", "workspaces"])) : __props.layout === "modal" ? (openBlock(), createElementBlock("div", _hoisted_1$4)) : createCommentVNode("", true), createVNode(unref(ScalarIconButton_default), {
						class: "hover:bg-b-2 active:text-c-1 size-8 rounded p-2",
						icon: unref(ScalarIconMagnifyingGlass_default),
						label: unref(translate)("apiClient.sidebar.search"),
						size: "sm",
						onClick: _cache[3] || (_cache[3] = ($event) => isSearchVisible.value = !isSearchVisible.value)
					}, null, 8, ["icon", "label"])], 2)) : createCommentVNode("", true), isSearchVisible.value || __props.layout === "web" ? (openBlock(), createBlock(unref(ScalarSidebarSearchInput_default), {
						key: 1,
						modelValue: unref(query),
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(query) ? query.value = $event : null),
						autofocus: __props.layout !== "web"
					}, null, 8, ["modelValue", "autofocus"])) : createCommentVNode("", true)], 2)]),
					spacer: withCtx(() => [_cache[8] || (_cache[8] = createBaseVNode("div", { class: "flex-1" }, null, -1))]),
					icon: withCtx((iconProps) => [slots.icon || isDraft(iconProps.item) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [isDraft(iconProps.item) ? (openBlock(), createBlock(unref(ScalarIconFileDashed_default), { key: 0 })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "icon", normalizeProps(guardReactiveProps(iconProps)))], 64)) : createCommentVNode("", true)]),
					before: withCtx(() => [renderSlot(_ctx.$slots, "workspaceButton")]),
					footer: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
					_: 2
				}, [slots.decorator ? {
					name: "decorator",
					fn: withCtx((decoratorProps) => [renderSlot(_ctx.$slots, "decorator", normalizeProps(guardReactiveProps(decoratorProps)))]),
					key: "0"
				} : void 0, slots.empty ? {
					name: "empty",
					fn: withCtx((emptyProps) => [renderSlot(_ctx.$slots, "empty", normalizeProps(guardReactiveProps(emptyProps)))]),
					key: "1"
				} : void 0]), 1032, [
					"isDraggable",
					"isDroppable",
					"isExpanded",
					"isSelected",
					"items",
					"options"
				])]),
				_: 3
			}, 8, ["width"]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/sidebar/SidebarToggle.vue.script.js
var _hoisted_1$3 = ["aria-pressed"];
var _hoisted_2$3 = { class: "sr-only" };
var _hoisted_3$1 = {
	class: "size-4",
	fill: "none",
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_4 = { "clip-path": "url(#mask)" };
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/sidebar/SidebarToggle.vue.js
var SidebarToggle_default = /* @__PURE__ */ defineComponent({
	__name: "SidebarToggle",
	props: {
		"modelValue": {
			type: Boolean,
			required: true
		},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const { translate } = useLocalization();
		const isSidebarOpen = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				"aria-pressed": isSidebarOpen.value,
				class: "scalar-sidebar-toggle text-c-3 hover:bg-b-2 active:text-c-1 rounded p-2",
				type: "button",
				onClick: _cache[0] || (_cache[0] = ($event) => isSidebarOpen.value = !isSidebarOpen.value)
			}, [createBaseVNode("span", _hoisted_2$3, toDisplayString(isSidebarOpen.value ? unref(translate)("apiClient.sidebarToggle.hide") : unref(translate)("apiClient.sidebarToggle.show")), 1), (openBlock(), createElementBlock("svg", _hoisted_3$1, [
				_cache[1] || (_cache[1] = createBaseVNode("defs", null, [createBaseVNode("clipPath", { id: "mask" }, [createBaseVNode("path", {
					"clip-rule": "evenodd",
					d: "M9 3.2H4c-1.7 0-3 1.3-3 3v11.5c0 1.7 1.3 3 3 3h5V3.2z"
				})])], -1)),
				createBaseVNode("g", _hoisted_4, [createBaseVNode("path", {
					class: normalizeClass(["transition-transform duration-300", isSidebarOpen.value ? "translate-x-0" : "-translate-x-1/2"]),
					d: "M1 3.2h8v17.5H1z",
					fill: "currentColor"
				}, null, 2)]),
				_cache[2] || (_cache[2] = createBaseVNode("path", {
					d: "M20 20.8H4c-1.7 0-3-1.3-3-3V6.2c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v11.5c0 1.7-1.3 3-3 3zM9 3.2v17.5",
					stroke: "currentColor",
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					"stroke-width": "2"
				}, null, -1))
			]))], 8, _hoisted_1$3);
		};
	}
});
//#endregion
//#region node_modules/focus-trap/dist/focus-trap.esm.js
/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
	var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (!t) {
		if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
			t && (r = t);
			var n = 0, F = function() {};
			return {
				s: F,
				n: function() {
					return n >= r.length ? { done: true } : {
						done: false,
						value: r[n++]
					};
				},
				e: function(r) {
					throw r;
				},
				f: F
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var o, a = true, u = false;
	return {
		s: function() {
			t = t.call(r);
		},
		n: function() {
			var r = t.next();
			return a = r.done, r;
		},
		e: function(r) {
			u = true, o = r;
		},
		f: function() {
			try {
				a || null == t.return || t.return();
			} finally {
				if (u) throw o;
			}
		}
	};
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: true,
		configurable: true,
		writable: true
	}) : e[r] = t, e;
}
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), true).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r);
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
var activeFocusTraps = {
	getActiveTrap: function getActiveTrap(trapStack) {
		if ((trapStack === null || trapStack === void 0 ? void 0 : trapStack.length) > 0) return trapStack[trapStack.length - 1];
		return null;
	},
	activateTrap: function activateTrap(trapStack, trap) {
		if (trap !== activeFocusTraps.getActiveTrap(trapStack)) activeFocusTraps.pauseTrap(trapStack);
		var trapIndex = trapStack.indexOf(trap);
		if (trapIndex === -1) trapStack.push(trap);
		else {
			trapStack.splice(trapIndex, 1);
			trapStack.push(trap);
		}
	},
	deactivateTrap: function deactivateTrap(trapStack, trap) {
		var trapIndex = trapStack.indexOf(trap);
		if (trapIndex !== -1) trapStack.splice(trapIndex, 1);
		activeFocusTraps.unpauseTrap(trapStack);
	},
	pauseTrap: function pauseTrap(trapStack) {
		var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
		activeTrap === null || activeTrap === void 0 || activeTrap._setPausedState(true);
	},
	unpauseTrap: function unpauseTrap(trapStack) {
		var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
		if (activeTrap && !activeTrap._isManuallyPaused()) activeTrap._setPausedState(false);
	}
};
var isSelectableInput = function isSelectableInput(node) {
	return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent(e) {
	return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
	return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
var isKeyForward = function isKeyForward(e) {
	return isTabEvent(e) && !e.shiftKey;
};
var isKeyBackward = function isKeyBackward(e) {
	return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
	return setTimeout(fn, 0);
};
/**
* Get an option's value when it could be a plain value, or a handler that provides
*  the value.
* @param {*} value Option's value to check.
* @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
* @returns {*} The `value`, or the handler's returned value.
*/
var valueOrHandler = function valueOrHandler(value) {
	for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) params[_key - 1] = arguments[_key];
	return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
	return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
	var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
	var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
	var config = _objectSpread2({
		returnFocusOnDeactivate: true,
		escapeDeactivates: true,
		delayInitialFocus: true,
		isolateSubtrees: false,
		isKeyForward,
		isKeyBackward
	}, userOptions);
	var state = {
		/** @type {Array<HTMLElement>} */
		containers: [],
		/** @type {Array<{
		*    container: HTMLElement,
		*    tabbableNodes: Array<HTMLElement>, // empty if none
		*    focusableNodes: Array<HTMLElement>, // empty if none
		*    posTabIndexesFound: boolean,
		*    firstTabbableNode: HTMLElement|undefined,
		*    lastTabbableNode: HTMLElement|undefined,
		*    firstDomTabbableNode: HTMLElement|undefined,
		*    lastDomTabbableNode: HTMLElement|undefined,
		*    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
		*  }>}
		*/
		containerGroups: [],
		tabbableGroups: [],
		/** @type {Set<HTMLElement>} */
		adjacentElements: /* @__PURE__ */ new Set(),
		/** @type {Set<HTMLElement>} */
		alreadySilent: /* @__PURE__ */ new Set(),
		nodeFocusedBeforeActivation: null,
		mostRecentlyFocusedNode: null,
		active: false,
		paused: false,
		manuallyPaused: false,
		delayInitialFocusTimer: void 0,
		recentNavEvent: void 0
	};
	var trap;
	/**
	* Gets a configuration option value.
	* @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
	*  value will be taken from this object. Otherwise, value will be taken from base configuration.
	* @param {string} optionName Name of the option whose value is sought.
	* @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
	*  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
	*/
	var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
		return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
	};
	/**
	* Finds the index of the container that contains the element.
	* @param {HTMLElement} element
	* @param {Event} [event] If available, and `element` isn't directly found in any container,
	*  the event's composed path is used to see if includes any known trap containers in the
	*  case where the element is inside a Shadow DOM.
	* @returns {number} Index of the container in either `state.containers` or
	*  `state.containerGroups` (the order/length of these lists are the same); -1
	*  if the element isn't found.
	*/
	var findContainerIndex = function findContainerIndex(element, event) {
		var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
		return state.containerGroups.findIndex(function(_ref) {
			var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
			return container.contains(element) || (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
				return node === element;
			});
		});
	};
	/**
	* Gets the node for the given option, which is expected to be an option that
	*  can be either a DOM node, a string that is a selector to get a node, `false`
	*  (if a node is explicitly NOT given), or a function that returns any of these
	*  values.
	* @param {string} optionName
	* @param {Object} options
	* @param {boolean} [options.hasFallback] True if the option could be a selector string
	*  and the option allows for a fallback scenario in the case where the selector is
	*  valid but does not match a node (i.e. the queried node doesn't exist in the DOM).
	* @param {Array} [options.params] Params to pass to the option if it's a function.
	* @returns {undefined | null | false | HTMLElement | SVGElement} Returns
	*  `undefined` if the option is not specified; `null` if the option didn't resolve
	*  to a node but `options.hasFallback=true`, `false` if the option resolved to `false`
	*  (node explicitly not given); otherwise, the resolved DOM node.
	* @throws {Error} If the option is set, not `false`, and is not, or does not
	*  resolve to a node, unless the option is a selector string and `options.hasFallback=true`.
	*/
	var getNodeForOption = function getNodeForOption(optionName) {
		var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
		var optionValue = config[optionName];
		if (typeof optionValue === "function") optionValue = optionValue.apply(void 0, _toConsumableArray(params));
		if (optionValue === true) optionValue = void 0;
		if (!optionValue) {
			if (optionValue === void 0 || optionValue === false) return optionValue;
			throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
		}
		var node = optionValue;
		if (typeof optionValue === "string") {
			try {
				node = doc.querySelector(optionValue);
			} catch (err) {
				throw new Error("`".concat(optionName, "` appears to be an invalid selector; error=\"").concat(err.message, "\""));
			}
			if (!node) {
				if (!hasFallback) throw new Error("`".concat(optionName, "` as selector refers to no known node"));
			}
		}
		return node;
	};
	var getInitialFocusNode = function getInitialFocusNode() {
		var node = getNodeForOption("initialFocus", { hasFallback: true });
		if (node === false) return false;
		if (node === void 0 || node && !isFocusable(node, config.tabbableOptions)) {
			if (findContainerIndex(doc.activeElement) >= 0) node = doc.activeElement;
			else {
				var firstTabbableGroup = state.tabbableGroups[0];
				node = firstTabbableGroup && firstTabbableGroup.firstTabbableNode || getNodeForOption("fallbackFocus");
			}
		} else if (node === null) node = getNodeForOption("fallbackFocus");
		if (!node) throw new Error("Your focus-trap needs to have at least one focusable element");
		return node;
	};
	var updateTabbableNodes = function updateTabbableNodes() {
		state.containerGroups = state.containers.map(function(container) {
			var tabbableNodes = tabbable(container, config.tabbableOptions);
			var focusableNodes = focusable(container, config.tabbableOptions);
			var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
			var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
			var firstDomTabbableNode = focusableNodes.find(function(node) {
				return isTabbable(node);
			});
			var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
				return isTabbable(node);
			});
			return {
				container,
				tabbableNodes,
				focusableNodes,
				/** True if at least one node with positive `tabindex` was found in this container. */
				posTabIndexesFound: !!tabbableNodes.find(function(node) {
					return getTabIndex(node) > 0;
				}),
				/** First tabbable node in container, __tabindex__ order; `undefined` if none. */
				firstTabbableNode,
				/** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
				lastTabbableNode,
				/** First tabbable node in container, __DOM__ order; `undefined` if none. */
				firstDomTabbableNode,
				/** Last tabbable node in container, __DOM__ order; `undefined` if none. */
				lastDomTabbableNode,
				/**
				* Finds the __tabbable__ node that follows the given node in the specified direction,
				*  in this container, if any.
				* @param {HTMLElement} node
				* @param {boolean} [forward] True if going in forward tab order; false if going
				*  in reverse.
				* @returns {HTMLElement|undefined} The next tabbable node, if any.
				*/
				nextTabbableNode: function nextTabbableNode(node) {
					var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
					var nodeIdx = tabbableNodes.indexOf(node);
					if (nodeIdx < 0) {
						if (forward) return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
							return isTabbable(el);
						});
						return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
							return isTabbable(el);
						});
					}
					return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
				}
			};
		});
		state.tabbableGroups = state.containerGroups.filter(function(group) {
			return group.tabbableNodes.length > 0;
		});
		if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
		if (state.containerGroups.find(function(g) {
			return g.posTabIndexesFound;
		}) && state.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
	};
	/**
	* Gets the current activeElement. If it's a web-component and has open shadow-root
	* it will recursively search inside shadow roots for the "true" activeElement.
	*
	* @param {Document | ShadowRoot} el
	*
	* @returns {HTMLElement} The element that currently has the focus
	**/
	var _getActiveElement = function getActiveElement(el) {
		var activeElement = el.activeElement;
		if (!activeElement) return;
		if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) return _getActiveElement(activeElement.shadowRoot);
		return activeElement;
	};
	var _tryFocus = function tryFocus(node) {
		if (node === false) return;
		if (node === _getActiveElement(document)) return;
		if (!node || !node.focus) {
			_tryFocus(getInitialFocusNode());
			return;
		}
		node.focus({ preventScroll: !!config.preventScroll });
		state.mostRecentlyFocusedNode = node;
		if (isSelectableInput(node)) node.select();
	};
	var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
		var node = getNodeForOption("setReturnFocus", { params: [previousActiveElement] });
		return node ? node : node === false ? false : previousActiveElement;
	};
	/**
	* Finds the next node (in either direction) where focus should move according to a
	*  keyboard focus-in event.
	* @param {Object} params
	* @param {Node} [params.target] Known target __from which__ to navigate, if any.
	* @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
	*  will be used to determine the `target`). Ignored if `target` is specified.
	* @param {boolean} [params.isBackward] True if focus should move backward.
	* @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
	*  determined given the current state of the trap.
	*/
	var findNextNavNode = function findNextNavNode(_ref3) {
		var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
		target = target || getActualTarget(event);
		updateTabbableNodes();
		var destinationNode = null;
		if (state.tabbableGroups.length > 0) {
			var containerIndex = findContainerIndex(target, event);
			var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
			if (containerIndex < 0) {
				if (isBackward) destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
				else destinationNode = state.tabbableGroups[0].firstTabbableNode;
			} else if (isBackward) {
				var startOfGroupIndex = state.tabbableGroups.findIndex(function(_ref4) {
					var firstTabbableNode = _ref4.firstTabbableNode;
					return target === firstTabbableNode;
				});
				if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) startOfGroupIndex = containerIndex;
				if (startOfGroupIndex >= 0) {
					var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
					var destinationGroup = state.tabbableGroups[destinationGroupIndex];
					destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
				} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target, false);
			} else {
				var lastOfGroupIndex = state.tabbableGroups.findIndex(function(_ref5) {
					var lastTabbableNode = _ref5.lastTabbableNode;
					return target === lastTabbableNode;
				});
				if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) lastOfGroupIndex = containerIndex;
				if (lastOfGroupIndex >= 0) {
					var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
					var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
					destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
				} else if (!isTabEvent(event)) destinationNode = containerGroup.nextTabbableNode(target);
			}
		} else destinationNode = getNodeForOption("fallbackFocus");
		return destinationNode;
	};
	var checkPointerDown = function checkPointerDown(e) {
		if (findContainerIndex(getActualTarget(e), e) >= 0) return;
		if (valueOrHandler(config.clickOutsideDeactivates, e)) {
			trap.deactivate({ returnFocus: config.returnFocusOnDeactivate });
			return;
		}
		if (valueOrHandler(config.allowOutsideClick, e)) return;
		e.preventDefault();
	};
	var checkFocusIn = function checkFocusIn(event) {
		var target = getActualTarget(event);
		var targetContained = findContainerIndex(target, event) >= 0;
		if (targetContained || target instanceof Document) {
			if (targetContained) state.mostRecentlyFocusedNode = target;
		} else {
			event.stopImmediatePropagation();
			var nextNode;
			var navAcrossContainers = true;
			if (state.mostRecentlyFocusedNode) {
				if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
					var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
					var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
					if (tabbableNodes.length > 0) {
						var mruTabIdx = tabbableNodes.findIndex(function(node) {
							return node === state.mostRecentlyFocusedNode;
						});
						if (mruTabIdx >= 0) {
							if (config.isKeyForward(state.recentNavEvent)) {
								if (mruTabIdx + 1 < tabbableNodes.length) {
									nextNode = tabbableNodes[mruTabIdx + 1];
									navAcrossContainers = false;
								}
							} else if (mruTabIdx - 1 >= 0) {
								nextNode = tabbableNodes[mruTabIdx - 1];
								navAcrossContainers = false;
							}
						}
					}
				} else if (!state.containerGroups.some(function(g) {
					return g.tabbableNodes.some(function(n) {
						return getTabIndex(n) > 0;
					});
				})) navAcrossContainers = false;
			} else navAcrossContainers = false;
			if (navAcrossContainers) nextNode = findNextNavNode({
				target: state.mostRecentlyFocusedNode,
				isBackward: config.isKeyBackward(state.recentNavEvent)
			});
			if (nextNode) _tryFocus(nextNode);
			else _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
		}
		state.recentNavEvent = void 0;
	};
	var checkKeyNav = function checkKeyNav(event) {
		var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		state.recentNavEvent = event;
		var destinationNode = findNextNavNode({
			event,
			isBackward
		});
		if (destinationNode) {
			if (isTabEvent(event)) event.preventDefault();
			_tryFocus(destinationNode);
		}
	};
	var checkTabKey = function checkTabKey(event) {
		if (config.isKeyForward(event) || config.isKeyBackward(event)) checkKeyNav(event, config.isKeyBackward(event));
	};
	var checkEscapeKey = function checkEscapeKey(event) {
		if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
			event.preventDefault();
			trap.deactivate();
		}
	};
	var checkClick = function checkClick(e) {
		if (findContainerIndex(getActualTarget(e), e) >= 0) return;
		if (valueOrHandler(config.clickOutsideDeactivates, e)) return;
		if (valueOrHandler(config.allowOutsideClick, e)) return;
		e.preventDefault();
		e.stopImmediatePropagation();
	};
	var addListeners = function addListeners() {
		if (!state.active) return;
		activeFocusTraps.activateTrap(trapStack, trap);
		state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
			_tryFocus(getInitialFocusNode());
		}) : _tryFocus(getInitialFocusNode());
		doc.addEventListener("focusin", checkFocusIn, true);
		doc.addEventListener("mousedown", checkPointerDown, {
			capture: true,
			passive: false
		});
		doc.addEventListener("touchstart", checkPointerDown, {
			capture: true,
			passive: false
		});
		doc.addEventListener("click", checkClick, {
			capture: true,
			passive: false
		});
		doc.addEventListener("keydown", checkTabKey, {
			capture: true,
			passive: false
		});
		doc.addEventListener("keydown", checkEscapeKey);
		return trap;
	};
	/**
	* Traverses up the DOM from each of `containers`, collecting references to
	* the elements that are siblings to `container` or an ancestor of `container`.
	* @param {Array<HTMLElement>} containers
	*/
	var collectAdjacentElements = function collectAdjacentElements(containers) {
		if (state.active && !state.paused) trap._setSubtreeIsolation(false);
		state.adjacentElements.clear();
		state.alreadySilent.clear();
		var containerAncestors = /* @__PURE__ */ new Set();
		var adjacentElements = /* @__PURE__ */ new Set();
		var _iterator = _createForOfIteratorHelper(containers), _step;
		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var container = _step.value;
				containerAncestors.add(container);
				var insideShadowRoot = typeof ShadowRoot !== "undefined" && container.getRootNode() instanceof ShadowRoot;
				var current = container;
				while (current) {
					containerAncestors.add(current);
					var parent = current.parentElement;
					var siblings = [];
					if (parent) siblings = parent.children;
					else if (!parent && insideShadowRoot) {
						siblings = current.getRootNode().children;
						parent = current.getRootNode().host;
						insideShadowRoot = typeof ShadowRoot !== "undefined" && parent.getRootNode() instanceof ShadowRoot;
					}
					var _iterator2 = _createForOfIteratorHelper(siblings), _step2;
					try {
						for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
							var child = _step2.value;
							adjacentElements.add(child);
						}
					} catch (err) {
						_iterator2.e(err);
					} finally {
						_iterator2.f();
					}
					current = parent;
				}
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
		containerAncestors.forEach(function(el) {
			adjacentElements["delete"](el);
		});
		state.adjacentElements = adjacentElements;
	};
	var removeListeners = function removeListeners() {
		if (!state.active) return;
		doc.removeEventListener("focusin", checkFocusIn, true);
		doc.removeEventListener("mousedown", checkPointerDown, true);
		doc.removeEventListener("touchstart", checkPointerDown, true);
		doc.removeEventListener("click", checkClick, true);
		doc.removeEventListener("keydown", checkTabKey, true);
		doc.removeEventListener("keydown", checkEscapeKey);
		return trap;
	};
	var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(function checkDomRemoval(mutations) {
		if (mutations.some(function(mutation) {
			return Array.from(mutation.removedNodes).some(function(node) {
				return node === state.mostRecentlyFocusedNode;
			});
		})) _tryFocus(getInitialFocusNode());
	}) : void 0;
	var updateObservedNodes = function updateObservedNodes() {
		if (!mutationObserver) return;
		mutationObserver.disconnect();
		if (state.active && !state.paused) state.containers.map(function(container) {
			mutationObserver.observe(container, {
				subtree: true,
				childList: true
			});
		});
	};
	trap = {
		get active() {
			return state.active;
		},
		get paused() {
			return state.paused;
		},
		activate: function activate(activateOptions) {
			if (state.active) return this;
			var onActivate = getOption(activateOptions, "onActivate");
			var onPostActivate = getOption(activateOptions, "onPostActivate");
			var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
			var preexistingTrap = activeFocusTraps.getActiveTrap(trapStack);
			var revertState = false;
			if (preexistingTrap && !preexistingTrap.paused) {
				var _preexistingTrap$_set;
				(_preexistingTrap$_set = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set === void 0 || _preexistingTrap$_set.call(preexistingTrap, false);
				revertState = true;
			}
			try {
				if (!checkCanFocusTrap) updateTabbableNodes();
				state.active = true;
				state.paused = false;
				state.nodeFocusedBeforeActivation = _getActiveElement(doc);
				onActivate === null || onActivate === void 0 || onActivate();
				var finishActivation = function finishActivation() {
					if (checkCanFocusTrap) updateTabbableNodes();
					addListeners();
					updateObservedNodes();
					if (config.isolateSubtrees) trap._setSubtreeIsolation(true);
					onPostActivate === null || onPostActivate === void 0 || onPostActivate();
				};
				if (checkCanFocusTrap) {
					checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
					return this;
				}
				finishActivation();
			} catch (error) {
				if (preexistingTrap === activeFocusTraps.getActiveTrap(trapStack) && revertState) {
					var _preexistingTrap$_set2;
					(_preexistingTrap$_set2 = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set2 === void 0 || _preexistingTrap$_set2.call(preexistingTrap, true);
				}
				throw error;
			}
			return this;
		},
		deactivate: function deactivate(deactivateOptions) {
			if (!state.active) return this;
			var options = _objectSpread2({
				onDeactivate: config.onDeactivate,
				onPostDeactivate: config.onPostDeactivate,
				checkCanReturnFocus: config.checkCanReturnFocus
			}, deactivateOptions);
			clearTimeout(state.delayInitialFocusTimer);
			state.delayInitialFocusTimer = void 0;
			if (!state.paused) trap._setSubtreeIsolation(false);
			state.alreadySilent.clear();
			removeListeners();
			state.active = false;
			state.paused = false;
			updateObservedNodes();
			activeFocusTraps.deactivateTrap(trapStack, trap);
			var onDeactivate = getOption(options, "onDeactivate");
			var onPostDeactivate = getOption(options, "onPostDeactivate");
			var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
			var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
			onDeactivate === null || onDeactivate === void 0 || onDeactivate();
			var finishDeactivation = function finishDeactivation() {
				delay(function() {
					if (returnFocus) _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
					onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
				});
			};
			if (returnFocus && checkCanReturnFocus) {
				checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
				return this;
			}
			finishDeactivation();
			return this;
		},
		pause: function pause(pauseOptions) {
			if (!state.active) return this;
			state.manuallyPaused = true;
			return this._setPausedState(true, pauseOptions);
		},
		unpause: function unpause(unpauseOptions) {
			if (!state.active) return this;
			state.manuallyPaused = false;
			if (trapStack[trapStack.length - 1] !== this) return this;
			return this._setPausedState(false, unpauseOptions);
		},
		updateContainerElements: function updateContainerElements(containerElements) {
			state.containers = [].concat(containerElements).filter(Boolean).map(function(element) {
				return typeof element === "string" ? doc.querySelector(element) : element;
			});
			if (config.isolateSubtrees) collectAdjacentElements(state.containers);
			if (state.active) {
				updateTabbableNodes();
				if (config.isolateSubtrees && !state.paused) trap._setSubtreeIsolation(true);
			}
			updateObservedNodes();
			return this;
		}
	};
	Object.defineProperties(trap, {
		_isManuallyPaused: { value: function value() {
			return state.manuallyPaused;
		} },
		_setPausedState: { value: function value(paused, options) {
			if (state.paused === paused) return this;
			state.paused = paused;
			if (paused) {
				var onPause = getOption(options, "onPause");
				var onPostPause = getOption(options, "onPostPause");
				onPause === null || onPause === void 0 || onPause();
				removeListeners();
				updateObservedNodes();
				trap._setSubtreeIsolation(false);
				onPostPause === null || onPostPause === void 0 || onPostPause();
			} else {
				var onUnpause = getOption(options, "onUnpause");
				var onPostUnpause = getOption(options, "onPostUnpause");
				onUnpause === null || onUnpause === void 0 || onUnpause();
				trap._setSubtreeIsolation(true);
				updateTabbableNodes();
				addListeners();
				updateObservedNodes();
				onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
			}
			return this;
		} },
		_setSubtreeIsolation: { value: function value(isEnabled) {
			if (config.isolateSubtrees) state.adjacentElements.forEach(function(el) {
				var _el$getAttribute;
				if (isEnabled) switch (config.isolateSubtrees) {
					case "aria-hidden":
						if (el.ariaHidden === "true" || ((_el$getAttribute = el.getAttribute("aria-hidden")) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.toLowerCase()) === "true") state.alreadySilent.add(el);
						el.setAttribute("aria-hidden", "true");
						break;
					default:
						if (el.inert || el.hasAttribute("inert")) state.alreadySilent.add(el);
						el.setAttribute("inert", true);
				}
				else if (state.alreadySilent.has(el));
				else switch (config.isolateSubtrees) {
					case "aria-hidden":
						el.removeAttribute("aria-hidden");
						break;
					default: el.removeAttribute("inert");
				}
			});
		} }
	});
	trap.updateContainerElements(elements);
	return trap;
};
//#endregion
//#region node_modules/@vueuse/integrations/useFocusTrap.mjs
function useFocusTrap(target, options = {}) {
	let trap;
	const { immediate, ...focusTrapOptions } = options;
	const hasFocus = shallowRef(false);
	const isPaused = shallowRef(false);
	const activate = (opts) => trap && trap.activate(opts);
	const deactivate = (opts) => trap && trap.deactivate(opts);
	const pause = () => {
		if (trap) {
			trap.pause();
			isPaused.value = true;
		}
	};
	const unpause = () => {
		if (trap) {
			trap.unpause();
			isPaused.value = false;
		}
	};
	const targets = computed(() => {
		const _targets = toValue(target);
		return toArray(_targets).map((el) => {
			const _el = toValue(el);
			return typeof _el === "string" ? _el : unrefElement(_el);
		}).filter(notNullish);
	});
	watch(targets, (els) => {
		if (!els.length) return;
		if (!trap) {
			trap = createFocusTrap(els, {
				...focusTrapOptions,
				onActivate() {
					hasFocus.value = true;
					if (options.onActivate) options.onActivate();
				},
				onDeactivate() {
					hasFocus.value = false;
					if (options.onDeactivate) options.onDeactivate();
				}
			});
			if (immediate) activate();
		} else {
			const isActive = trap == null ? void 0 : trap.active;
			trap?.updateContainerElements(els);
			if (!isActive && immediate) activate();
		}
	}, { flush: "post" });
	tryOnScopeDispose(() => deactivate());
	return {
		hasFocus,
		isPaused,
		activate,
		deactivate,
		pause,
		unpause
	};
}
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/modals/ModalClientContainer.vue.script.js
var _hoisted_1$2 = { class: "scalar scalar-app z-overlay relative" };
var _hoisted_2$2 = ["aria-label"];
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/components/modals/ModalClientContainer.vue.js
var ModalClientContainer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ModalClientContainer",
	props: { modalState: {} },
	emits: ["open", "close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { translate } = useLocalization();
		const client = ref(null);
		const { activate: activateFocusTrap, deactivate: deactivateFocusTrap } = useFocusTrap(client, {
			allowOutsideClick: true,
			fallbackFocus: () => client.value
		});
		onBeforeMount(() => addScalarClassesToHeadless());
		watch(() => props.modalState.open, async (open) => {
			if (open) {
				await nextTick();
				activateFocusTrap();
				emit("open");
			} else {
				deactivateFocusTrap();
				emit("close");
			}
		}, { immediate: false });
		onBeforeUnmount(() => {
			deactivateFocusTrap();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", { class: normalizeClass(["scalar-container", { "scalar-client--open": __props.modalState.open }]) }, [createBaseVNode("div", mergeProps({
				ref_key: "client",
				ref: client,
				"aria-label": unref(translate)("apiClient.modalClientContainer.label"),
				"aria-modal": "true"
			}, _ctx.$attrs, {
				class: "scalar-app-layout scalar-client",
				role: "dialog",
				tabindex: "-1"
			}), [createVNode(unref(ScalarTeleportRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
				_: 3
			})], 16, _hoisted_2$2), createBaseVNode("div", {
				class: "scalar-app-exit",
				onClick: _cache[0] || (_cache[0] = ($event) => __props.modalState.hide())
			})], 2)]);
		};
	}
}), [["__scopeId", "data-v-0eebddf5"]]);
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/constants.js
/** The version number taken from the package.json. Consumers can override at build time via define (e.g. OVERRIDE_PACKAGE_VERSION: JSON.stringify('1.2.3')). */
var APP_VERSION = typeof OVERRIDE_PACKAGE_VERSION !== "undefined" ? OVERRIDE_PACKAGE_VERSION : "3.21.1";
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/operation/Operation.vue.script.js
var _hoisted_1$1 = ["dir", "lang"];
var _hoisted_2$1 = { class: "text-c-3" };
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/operation/Operation.vue.js
var Operation_default = /* @__PURE__ */ defineComponent({
	__name: "Operation",
	props: {
		isActive: {
			type: Boolean,
			default: true
		},
		documentSlug: {},
		document: {},
		eventBus: {},
		layout: {},
		path: {},
		method: {},
		exampleName: {},
		isWebhook: {
			type: Boolean,
			default: false
		},
		environment: {},
		workspaceStore: {},
		plugins: {},
		options: {},
		requestBodyCompositionSelection: {}
	},
	setup(__props) {
		const inheritedLocalization = useLocalization();
		const { translate, locale, direction } = provideLocalization(() => toValue(__props.options)?.localization ?? {
			locale: inheritedLocalization.locale.value,
			direction: inheritedLocalization.direction.value,
			translations: inheritedLocalization.translations.value
		});
		/**
		* Shared request-example context (operation, servers, auth scope, cookies). Recomputed when any
		* underlying workspace or route input changes — same reactivity as the previous local computeds.
		*/
		const requestExample = computed(() => {
			if (!__props.path || !__props.method || !__props.exampleName || !__props.document) return null;
			const result = getRequestExampleContext(__props.workspaceStore, __props.documentSlug, {
				path: __props.path,
				method: __props.method,
				exampleName: __props.exampleName,
				isWebhook: __props.isWebhook
			}, {
				baseServerUrl: toValue(__props.options)?.baseServerURL,
				fallbackDocument: __props.document,
				isElectron: isElectron(),
				layout: __props.layout === "web" ? "web" : "other",
				servers: toValue(__props.options)?.servers,
				appVersion: APP_VERSION,
				authentication: toValue(__props.options)?.authentication
			});
			return result.ok ? result.data : null;
		});
		const sourceOperation = computed(() => requestExample.value?.operation ?? null);
		const getResolver = () => __props.workspaceStore.externalExamples(__props.documentSlug);
		provide(EXTERNAL_EXAMPLES, getResolver);
		const contentType = computed(() => getSelectedBodyContentType(getResolvedRef(sourceOperation.value?.requestBody), __props.exampleName) ?? void 0);
		const container = ref(null);
		const visible = useExampleVisibility(container);
		const externalExamples = useExternalExamples(() => sourceOperation.value ? getOperationExamples(sourceOperation.value, __props.exampleName ?? "", contentType.value) : [], () => __props.isActive && visible.value, getResolver);
		const operation = computed(() => sourceOperation.value ? resolveOperationExamples(sourceOperation.value, __props.exampleName ?? "", contentType.value, externalExamples.resolve) : null);
		const workspaceCookies = computed(() => requestExample.value?.cookies.workspace ?? []);
		const documentCookies = computed(() => requestExample.value?.cookies.document ?? []);
		const servers = computed(() => requestExample.value?.servers.list ?? []);
		const selectedServer = computed(() => requestExample.value?.servers.selected ?? null);
		const serverMeta = computed(() => requestExample.value?.servers.meta ?? { type: "document" });
		const securitySchemes = computed(() => requestExample.value?.security.schemes ?? {});
		const selectedSecurity = computed(() => requestExample.value?.security.selected ?? {
			selectedIndex: -1,
			selectedSchemes: []
		});
		const selectedSecuritySchemes = computed(() => requestExample.value?.security.selectedSchemes ?? []);
		const securityRequirements = computed(() => requestExample.value?.security.requirements ?? []);
		const authMeta = computed(() => requestExample.value?.security.meta ?? { type: "document" });
		const defaultHeaders = computed(() => requestExample.value?.headers.default ?? {});
		/** Combine environments from document and workspace into a unique array of environment names */
		const environments = computed(() => {
			return Array.from(new Set(Object.keys({
				...__props.document?.["x-scalar-environments"],
				...__props.workspaceStore.workspace["x-scalar-environments"]
			})));
		});
		/** Temporarily use the old config.hiddenClients until we migrate to the new httpClients config */
		const httpClients = computed(() => mapHiddenClientsConfig(toValue(__props.options)?.hiddenClients));
		return (_ctx, _cache) => {
			return __props.path && __props.method && __props.exampleName && operation.value && __props.document ? (openBlock(), createBlock(unref(OperationBlock_default), {
				key: 0,
				ref_key: "container",
				ref: container,
				activeEnvironment: __props.workspaceStore.workspace["x-scalar-active-environment"],
				appVersion: unref(APP_VERSION),
				authMeta: authMeta.value,
				defaultHeaders: defaultHeaders.value,
				dir: unref(direction),
				document: __props.document,
				documentCookies: documentCookies.value,
				documentSecurity: __props.document?.security ?? [],
				documentSlug: __props.documentSlug,
				documentUrl: __props.document?.["x-scalar-original-source-url"],
				environment: __props.environment,
				environments: environments.value,
				eventBus: __props.eventBus,
				exampleKey: __props.exampleName,
				externalExamplesFailed: unref(externalExamples).failed.value,
				externalExamplesPending: unref(externalExamples).pending.value,
				hideClientButton: toValue(__props.options)?.hideClientButton ?? false,
				history: __props.workspaceStore.history.getHistory(__props.documentSlug, __props.path, __props.method),
				httpClients: httpClients.value,
				isWebhook: __props.isWebhook,
				lang: unref(locale),
				layout: __props.layout,
				method: __props.method,
				operation: operation.value,
				options: __props.options,
				path: __props.path,
				plugins: __props.plugins,
				proxyUrl: unref(getActiveProxyUrl)(__props.workspaceStore.workspace["x-scalar-active-proxy"], __props.layout === "web" ? "web" : "other") ?? "",
				requestBodyCompositionSelection: __props.requestBodyCompositionSelection,
				securityRequirements: securityRequirements.value,
				securitySchemes: securitySchemes.value,
				selectedClient: __props.workspaceStore.workspace["x-scalar-default-client"],
				selectedSecurity: selectedSecurity.value,
				selectedSecuritySchemes: selectedSecuritySchemes.value,
				server: selectedServer.value,
				serverMeta: serverMeta.value,
				servers: servers.value,
				sourceOperation: sourceOperation.value ?? void 0,
				workspaceCookies: workspaceCookies.value,
				"onRetry:externalExamples": unref(externalExamples).retry
			}, null, 8, [
				"activeEnvironment",
				"appVersion",
				"authMeta",
				"defaultHeaders",
				"dir",
				"document",
				"documentCookies",
				"documentSecurity",
				"documentSlug",
				"documentUrl",
				"environment",
				"environments",
				"eventBus",
				"exampleKey",
				"externalExamplesFailed",
				"externalExamplesPending",
				"hideClientButton",
				"history",
				"httpClients",
				"isWebhook",
				"lang",
				"layout",
				"method",
				"operation",
				"options",
				"path",
				"plugins",
				"proxyUrl",
				"requestBodyCompositionSelection",
				"securityRequirements",
				"securitySchemes",
				"selectedClient",
				"selectedSecurity",
				"selectedSecuritySchemes",
				"server",
				"serverMeta",
				"servers",
				"sourceOperation",
				"workspaceCookies",
				"onRetry:externalExamples"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: "flex h-full w-full items-center justify-center",
				dir: unref(direction),
				lang: unref(locale)
			}, [createBaseVNode("span", _hoisted_2$1, toDisplayString(unref(translate)("apiClient.operation.selectAnOperationToViewDetails")), 1)], 8, _hoisted_1$1));
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/hooks/use-scroll-lock.js
/**
* useScrollLock - A Vue composition function to lock and unlock scrolling on a specific element.
*
* This hook provides a computed ref that allows you to enable or disable scrolling on a given HTMLElement.
* Locking sets the element's `overflow` style to `'hidden'`.
* Unlocking restores the original `overflow` value.
*
* The lock state will be automatically cleaned up (unlocked) when the component is unmounted.
*
* @param element - MaybeRefOrGetter for the HTMLElement to lock scrolling on. Can be a ref or a function.
* @returns A computed ref: assign `true` to lock, `false` to unlock, read for current state.
*
* @example
* ```ts
* // In your setup():
* const container = ref<HTMLElement | null>(null)
* const scrollLock = useScrollLock(container)
*
* // To lock scrolling:
* scrollLock.value = true
*
* // To unlock scrolling:
* scrollLock.value = false
* ```
*/
var useScrollLock = (element) => {
	const initialValue = ref("");
	const isLocked = ref(false);
	const lock = () => {
		const el = toValue(element);
		if (!el) return;
		initialValue.value = el.style.overflow;
		el.style.overflow = "hidden";
	};
	const unlock = () => {
		const el = toValue(element);
		if (!el) return;
		if (initialValue.value !== "") el.style.overflow = initialValue.value;
		else el.style.removeProperty("overflow");
	};
	const state = computed({
		get: () => isLocked.value,
		set: (value) => {
			isLocked.value = value;
			value ? lock() : unlock();
		}
	});
	onBeforeUnmount(() => {
		if (isLocked.value) unlock();
	});
	return state;
};
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/Modal.vue.script.js
var _hoisted_1 = {
	key: 0,
	class: "relative flex h-full min-h-0 w-full flex-1"
};
var _hoisted_2 = {
	key: 1,
	class: "flex h-full w-full items-center justify-center"
};
var _hoisted_3 = { class: "text-c-3" };
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/Modal.vue.js
var Modal_default = /* @__PURE__ */ defineComponent({
	__name: "Modal",
	props: {
		workspaceStore: {},
		document: {},
		path: {},
		eventBus: {},
		method: {},
		exampleName: {},
		isWebhook: {},
		requestBodyCompositionSelection: {},
		modalState: {},
		sidebarState: {},
		plugins: {},
		options: {}
	},
	setup(__props, { expose: __expose }) {
		const { translate, locale, direction } = provideLocalization(() => __props.options.value.localization);
		const activeWorkspace = {
			label: "default",
			id: "default"
		};
		/** Controls the visibility of the sidebar. */
		const isSidebarOpen = ref(false);
		/** Initialize modal events */
		initializeModalEvents({
			eventBus: __props.eventBus,
			isSidebarOpen,
			requestBodyCompositionSelection: __props.requestBodyCompositionSelection,
			sidebarState: __props.sidebarState,
			modalState: __props.modalState,
			store: __props.workspaceStore
		});
		/** Register global hotkeys for the app, passing the workspace event bus and layout state */
		useGlobalHotKeys(__props.eventBus, "modal", () => !__props.modalState.open);
		/** Clean up on close */
		const cleanUp = () => {
			__props.eventBus.emit("operation:cancel:request");
		};
		const isLocked = useScrollLock(() => {
			if (typeof window !== "undefined") return window.document.body;
			return null;
		});
		watch(() => __props.modalState.open, (open) => {
			isLocked.value = open;
			if (!open) cleanUp();
		});
		onBeforeUnmount(() => cleanUp());
		/** Default sidebar width in pixels. */
		const DEFAULT_SIDEBAR_WIDTH = 288;
		/** Width of the sidebar, with fallback to default. */
		const sidebarWidth = computed(() => __props.workspaceStore?.workspace?.["x-scalar-sidebar-width"] ?? DEFAULT_SIDEBAR_WIDTH);
		/** Handler for sidebar width changes. */
		const handleSidebarWidthUpdate = (width) => __props.workspaceStore?.update("x-scalar-sidebar-width", width);
		/**
		* Merged environment variables from workspace and document levels.
		* Variables from both sources are combined, with document variables
		* taking precedence in case of naming conflicts.
		*/
		const environment = computed(() => getActiveEnvironment(__props.workspaceStore, __props.document.value).environment);
		__expose({
			sidebarWidth,
			environment
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ModalClientContainer_default, {
				dir: unref(direction),
				lang: unref(locale),
				modalState: __props.modalState
			}, {
				default: withCtx(() => [createVNode(unref(ScalarToasts_default)), __props.document.value && __props.path?.value && __props.method?.value ? (openBlock(), createElementBlock("main", _hoisted_1, [
					createVNode(unref(SidebarToggle_default), {
						modelValue: isSidebarOpen.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isSidebarOpen.value = $event),
						class: "absolute top-2 left-4 z-10 max-md:top-4"
					}, null, 8, ["modelValue"]),
					withDirectives(createVNode(unref(Sidebar_default), {
						sidebarWidth: sidebarWidth.value,
						"onUpdate:sidebarWidth": [_cache[1] || (_cache[1] = ($event) => sidebarWidth.value = $event), handleSidebarWidthUpdate],
						activeWorkspace,
						class: "h-full max-md:absolute! max-md:z-5 max-md:w-full!",
						documents: [__props.document.value],
						eventBus: __props.eventBus,
						isDroppable: () => false,
						layout: "modal",
						sidebarState: __props.sidebarState.state,
						workspaces: [],
						onSelectItem: __props.sidebarState.handleSelectItem
					}, null, 8, [
						"sidebarWidth",
						"documents",
						"eventBus",
						"sidebarState",
						"onSelectItem"
					]), [[vShow, isSidebarOpen.value]]),
					createVNode(Operation_default, {
						activeWorkspace,
						class: "flex-1",
						document: __props.document.value,
						documentSlug: __props.document.value["x-scalar-navigation"]?.name ?? "",
						environment: environment.value,
						eventBus: __props.eventBus,
						exampleName: __props.exampleName?.value,
						isActive: __props.modalState.open,
						isWebhook: __props.isWebhook.value,
						layout: "modal",
						method: __props.method?.value,
						options: __props.options,
						path: __props.path?.value,
						plugins: __props.plugins,
						requestBodyCompositionSelection: __props.requestBodyCompositionSelection.value,
						workspaceStore: __props.workspaceStore
					}, null, 8, [
						"document",
						"documentSlug",
						"environment",
						"eventBus",
						"exampleName",
						"isActive",
						"isWebhook",
						"method",
						"options",
						"path",
						"plugins",
						"requestBodyCompositionSelection",
						"workspaceStore"
					])
				])) : (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("span", _hoisted_3, toDisplayString(unref(translate)("apiClient.modal.noDocumentSelected")), 1)]))]),
				_: 1
			}, 8, [
				"dir",
				"lang",
				"modalState"
			]);
		};
	}
});
//#endregion
//#region node_modules/@scalar/api-client/dist/v2/features/modal/helpers/create-api-client-modal.js
/**
* Monotonic counter used to give every modal Vue app a unique `idPrefix`.
*
* Vue derives `useId()` values (and therefore our teleport target ids) from the app's
* `idPrefix`. When more than one client app mounts on the same page — for example, the
* API reference embeds this modal alongside another client instance — a shared prefix
* makes both apps emit identical ids. A teleported popover then resolves to the first
* matching target in the DOM, which can be a hidden app, so the popover never appears.
* A per-app suffix keeps the ids unique across instances.
*/
var modalAppCount = 0;
/**
* Creates the API Client Modal.
*
* The modal does not require a router. Instead, navigation is handled by setting
* active entities directly through the returned `route` function.
*/
var createApiClientModal = ({ el, eventBus = createWorkspaceEventBus({ debug: false }), mountOnInitialize = true, plugins = [], workspaceStore, options = {} }) => {
	const requestBodyCompositionSelection = ref({});
	/** This is to ensure that the options are a ref if they are not already, useful for react */
	const optionsRef = isRef(options) ? options : ref(toValue(options));
	const defaultEntities = {
		path: "default",
		method: "default",
		example: "default",
		documentSlug: workspaceStore.workspace["x-scalar-active-document"] || "default",
		isWebhook: false
	};
	const parameters = reactive({ ...defaultEntities });
	/** Navigate to the specified path, method, and example. */
	const route = (payload) => {
		Object.assign(parameters, defaultEntities, payload);
	};
	/** Resolved parameters from the workspace store. */
	const resolvedParameters = computed(() => resolveRouteParameters(workspaceStore, parameters));
	const documentSlug = computed(() => resolvedParameters.value.documentSlug);
	const path = computed(() => resolvedParameters.value.path);
	const method = computed(() => resolvedParameters.value.method);
	const exampleName = computed(() => resolvedParameters.value.example);
	const isWebhook = computed(() => resolvedParameters.value.isWebhook ?? false);
	/** The document from the workspace store. Modal is OpenAPI-only; AsyncAPI docs surface as null. */
	const document = computed(() => {
		const doc = workspaceStore.workspace.documents[documentSlug.value ?? ""];
		return isOpenApiDocument(doc) ? doc : null;
	});
	/** Sidebar state and selection handling. */
	const sidebarState = useModalSidebar({
		workspaceStore,
		documentSlug,
		path,
		method,
		exampleName,
		isWebhook,
		route
	});
	const modalState = useModal();
	const app = createApp(Modal_default, {
		document,
		eventBus,
		exampleName,
		isWebhook,
		method,
		modalState,
		path,
		plugins,
		requestBodyCompositionSelection,
		sidebarState,
		workspaceStore,
		options: optionsRef
	});
	/** Initialize plugins and subscribe to event bus events */
	const pluginUnsubscribes = [];
	for (const plugin of plugins) {
		plugin.lifecycle?.onInit?.();
		pluginUnsubscribes.push(subscribePluginEvents(eventBus, plugin));
	}
	/** Clean up plugin lifecycle and event bus subscriptions when the app is unmounted */
	app.onUnmount(() => {
		for (const unsub of pluginUnsubscribes) unsub();
		for (const plugin of plugins) plugin.lifecycle?.onDestroy?.();
	});
	watch(() => toValue(optionsRef).proxyUrl, (newProxyUrl) => workspaceStore.update("x-scalar-active-proxy", newProxyUrl), { immediate: true });
	app.config.idPrefix = `scalar-client-${modalAppCount++}`;
	/** Mount the modal to a given element. */
	const mount = (mountingEl = el) => {
		if (!mountingEl) {
			console.error("[@scalar/api-client] Could not create the API client Modal.", "Invalid HTML element provided.", "Read more: https://github.com/scalar/scalar/tree/main/packages/api-client");
			return;
		}
		app.mount(mountingEl);
	};
	if (mountOnInitialize) mount();
	return {
		/** The Vue app instance for the modal. Use with caution. */
		app,
		/** Open the modal and optionally navigate to a specific route. */
		open: (payload) => {
			requestBodyCompositionSelection.value = {};
			modalState.open = true;
			if (payload) route(payload);
		},
		/** Mount the modal to a given element. */
		mount,
		/** Navigate to the specified path, method, and example. */
		route,
		/** Controls the visibility of the modal. */
		modalState,
		/**
		* Merge new options into the current modal options.
		*
		* @param newOptions - The new options to merge into the current modal options.
		* @param overwrite - Whether to overwrite the current modal options with the new options. If false, the new options will be merged with the current options.
		*/
		updateOptions: (newOptions, overwrite = false) => {
			optionsRef.value = overwrite ? newOptions : {
				...optionsRef.value,
				...newOptions
			};
		}
	};
};
//#endregion
export { createApiClientModal };
