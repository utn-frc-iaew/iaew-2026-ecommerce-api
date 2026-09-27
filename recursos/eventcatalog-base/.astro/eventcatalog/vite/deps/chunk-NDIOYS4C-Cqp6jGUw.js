import { o as select_default } from "./src-D3RtDGME.js";
import "./src-D_QHH7b7.js";
import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/chunk-NDIOYS4C.mjs
var getDiagramElement = /* @__PURE__ */ __name2((id, securityLevel) => {
	let sandboxElement;
	if (securityLevel === "sandbox") sandboxElement = select_default("#i" + id);
	return (securityLevel === "sandbox" ? select_default(sandboxElement.nodes()[0].contentDocument.body) : select_default("body")).select(`[id="${id}"]`);
}, "getDiagramElement");
//#endregion
export { getDiagramElement as t };
