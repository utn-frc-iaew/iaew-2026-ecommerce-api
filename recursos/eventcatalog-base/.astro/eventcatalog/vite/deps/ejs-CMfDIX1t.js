import { n as __exportAll } from "./rolldown-runtime-B-lAHAz2.js";
import { t as javascript } from "./javascript-HiEQZQqf.js";
import { t as markupTemplating } from "./markup-templating-C3CJL12V.js";
//#region node_modules/refractor/lang/ejs.js
/**
* @import {Refractor} from '../lib/core.js'
*/
var ejs_exports = /* @__PURE__ */ __exportAll({ default: () => ejs });
ejs.displayName = "ejs";
ejs.aliases = ["eta"];
/** @param {Refractor} Prism */
function ejs(Prism) {
	Prism.register(javascript);
	Prism.register(markupTemplating);
	(function(Prism) {
		Prism.languages.ejs = {
			delimiter: {
				pattern: /^<%[-_=]?|[-_]?%>$/,
				alias: "punctuation"
			},
			comment: /^#[\s\S]*/,
			"language-javascript": {
				pattern: /[\s\S]+/,
				inside: Prism.languages.javascript
			}
		};
		Prism.hooks.add("before-tokenize", function(env) {
			Prism.languages["markup-templating"].buildPlaceholders(env, "ejs", /<%(?!%)[\s\S]+?%>/g);
		});
		Prism.hooks.add("after-tokenize", function(env) {
			Prism.languages["markup-templating"].tokenizePlaceholders(env, "ejs");
		});
		Prism.languages.eta = Prism.languages.ejs;
	})(Prism);
}
//#endregion
export { ejs_exports as n, ejs as t };
