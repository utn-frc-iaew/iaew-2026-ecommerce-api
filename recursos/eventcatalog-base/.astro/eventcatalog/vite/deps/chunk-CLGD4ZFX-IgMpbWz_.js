import { o as select_default } from "./src-D3RtDGME.js";
import { n as __name } from "./chunk-Y2CYZVJY-CrOJDJJy.js";
import { x as getConfig2 } from "./chunk-DU6HZSFF-D4sgRKOo.js";
import "./src-D_QHH7b7.js";
//#region node_modules/mermaid/dist/chunks/mermaid.core/chunk-CLGD4ZFX.mjs
var selectSvgElement = /* @__PURE__ */ __name((id) => {
	const { securityLevel } = getConfig2();
	let root = select_default("body");
	if (securityLevel === "sandbox") {
		const doc = select_default(`#i${id}`).node()?.contentDocument ?? document;
		root = select_default(doc.body);
	}
	return root.select(`#${id}`);
}, "selectSvgElement");
//#endregion
export { selectSvgElement as t };
