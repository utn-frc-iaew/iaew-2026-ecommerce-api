import { n as __name } from "./chunk-Q5MVOS3D-COL7qICA.js";
import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/sizeCapture-X5ZJPWSS-PSGVOMYM.mjs
var DDLT_SIZE_CAPTURE_VERSION = 1;
function getCaptureGlobal() {
	if (typeof globalThis === "undefined") return;
	return globalThis;
}
__name(getCaptureGlobal, "getCaptureGlobal");
__name2(getCaptureGlobal, "getCaptureGlobal");
function shouldCaptureSizes() {
	return Boolean(getCaptureGlobal()?.mermaidCaptureSizes);
}
__name(shouldCaptureSizes, "shouldCaptureSizes");
__name2(shouldCaptureSizes, "shouldCaptureSizes");
function capturedFromLocation() {
	if (typeof location === "undefined") return "browser-dev";
	return `${location.pathname}${location.search}`;
}
__name(capturedFromLocation, "capturedFromLocation");
__name2(capturedFromLocation, "capturedFromLocation");
function emitCapturedSizes(captured, element) {
	const g = getCaptureGlobal();
	if (!g) return;
	const domNode = element.node();
	const svgId = ((domNode && "ownerSVGElement" in domNode ? domNode.ownerSVGElement : null) ?? domNode)?.id ?? "(unknown)";
	g.mermaidCapturedSizes ??= [];
	const entry = {
		svgId,
		sizes: captured
	};
	g.mermaidCapturedSizes.push(entry);
	g.mermaidLastCapturedSizes = entry;
}
__name(emitCapturedSizes, "emitCapturedSizes");
__name2(emitCapturedSizes, "emitCapturedSizes");
function captureNodeSizes(element, data4Layout) {
	const nodes = [];
	for (const node of data4Layout.nodes) {
		if (node.isGroup) continue;
		nodes.push({
			id: node.id,
			width: node.width ?? 0,
			height: node.height ?? 0
		});
	}
	if (nodes.length === 0) return;
	emitCapturedSizes({
		metadata: {
			captureVersion: DDLT_SIZE_CAPTURE_VERSION,
			capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
			capturedFrom: capturedFromLocation()
		},
		nodes
	}, element);
}
__name(captureNodeSizes, "captureNodeSizes");
__name2(captureNodeSizes, "captureNodeSizes");
//#endregion
export { captureNodeSizes };
