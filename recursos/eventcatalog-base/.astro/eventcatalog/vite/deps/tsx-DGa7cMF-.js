import { n as __exportAll } from "./rolldown-runtime-B-lAHAz2.js";
import { t as typescript } from "./typescript-DHyXHIEx.js";
import { t as jsx } from "./jsx-BFvPAKpv.js";
//#region node_modules/refractor/lang/tsx.js
/**
* @import {Refractor} from '../lib/core.js'
*/
var tsx_exports = /* @__PURE__ */ __exportAll({ default: () => tsx });
tsx.displayName = "tsx";
tsx.aliases = [];
/** @param {Refractor} Prism */
function tsx(Prism) {
	Prism.register(jsx);
	Prism.register(typescript);
	(function(Prism) {
		var typescript = Prism.util.clone(Prism.languages.typescript);
		Prism.languages.tsx = Prism.languages.extend("jsx", typescript);
		delete Prism.languages.tsx["parameter"];
		delete Prism.languages.tsx["literal-property"];
		var tag = Prism.languages.tsx.tag;
		tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
		tag.lookbehind = true;
	})(Prism);
}
//#endregion
export { tsx_exports as n, tsx as t };
