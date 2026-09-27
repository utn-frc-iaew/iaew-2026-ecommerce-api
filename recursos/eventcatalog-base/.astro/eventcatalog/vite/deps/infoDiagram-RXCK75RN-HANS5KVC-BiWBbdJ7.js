import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
import { t as log } from "./chunk-YJFJOXZG-BRJXzlLC.js";
import { l as configureSvgSize } from "./chunk-W7FHEGFS-CYgalqT6.js";
import { M as parse } from "./chunk-KOCW2XDZ-CTyH0L9H.js";
import { p as selectSvgElement } from "./render-O7CIS3YK-CqknIpfN.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/infoDiagram-RXCK75RN-HANS5KVC.mjs
var parser = { parse: /* @__PURE__ */ __name2(async (input) => {
	const ast = await parse("info", input);
	log.debug(ast);
}, "parse") };
var DEFAULT_INFO_DB = { version: "11.17.0" };
var diagram = {
	parser,
	db: { getVersion: /* @__PURE__ */ __name2(() => DEFAULT_INFO_DB.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ __name2((text, id, version) => {
		log.debug("rendering info diagram\n" + text);
		const svg = selectSvgElement(id);
		configureSvgSize(svg, 100, 400, true);
		svg.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
	}, "draw") }
};
//#endregion
export { diagram };
