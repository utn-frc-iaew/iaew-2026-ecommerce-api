import { n as __name } from "./chunk-Q5MVOS3D-COL7qICA.js";
import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/chunk-RE4WF27V.mjs
var ImperativeState = class {
	static {
		__name(this, "ImperativeState");
	}
	/**
	* @param init - Function that creates the default state.
	*/
	constructor(init) {
		this.init = init;
		this.records = this.init();
	}
	static {
		__name2(this, "ImperativeState");
	}
	reset() {
		this.records = this.init();
	}
};
//#endregion
export { ImperativeState as t };
