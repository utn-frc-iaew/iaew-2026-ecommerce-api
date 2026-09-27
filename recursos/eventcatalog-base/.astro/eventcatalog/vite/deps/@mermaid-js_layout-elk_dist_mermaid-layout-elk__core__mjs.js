import { n as __name } from "./chunk-Q5MVOS3D-COL7qICA.js";
//#region node_modules/@mermaid-js/layout-elk/dist/mermaid-layout-elk.core.mjs
var loader = /* @__PURE__ */ __name(async () => await import("./render-O7CIS3YK-CqknIpfN.js").then((n) => n.t), "loader");
var layouts_default = [{
	name: "elk",
	loader,
	algorithm: "elk.layered"
}, ...[
	"elk.stress",
	"elk.force",
	"elk.mrtree",
	"elk.sporeOverlap"
].map((algo) => ({
	name: algo,
	loader,
	algorithm: algo
}))];
//#endregion
export { layouts_default as default };
