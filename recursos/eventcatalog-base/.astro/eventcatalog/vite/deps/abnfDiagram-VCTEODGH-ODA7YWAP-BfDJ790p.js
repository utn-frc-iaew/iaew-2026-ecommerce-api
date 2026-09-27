import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
import { t as log } from "./chunk-YJFJOXZG-BRJXzlLC.js";
import "./chunk-W7FHEGFS-CYgalqT6.js";
import { n as getStyles, r as renderer, t as db } from "./chunk-XCWWM2C3-B-akp80R.js";
import { t as populateCommonDb } from "./chunk-VII2H2IX-CGpA8jzL.js";
import { b as createRailroadAbnfServices, j as MermaidParseError } from "./chunk-KOCW2XDZ-CTyH0L9H.js";
import "./render-O7CIS3YK-CqknIpfN.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/abnfDiagram-VCTEODGH-ODA7YWAP.mjs
var langiumParser = createRailroadAbnfServices().RailroadAbnf.parser.LangiumParser;
var transformAlternation = /* @__PURE__ */ __name2((alt) => {
	const alternatives = alt.alternatives.map(transformConcatenation);
	if (alternatives.length === 1) return alternatives[0];
	return {
		type: "choice",
		alternatives
	};
}, "transformAlternation");
var transformConcatenation = /* @__PURE__ */ __name2((concat) => {
	const elements = concat.elements.map(transformElement);
	if (elements.length === 1) return elements[0];
	return {
		type: "sequence",
		elements
	};
}, "transformConcatenation");
var parseRepeat = /* @__PURE__ */ __name2((repeat) => {
	if (repeat.includes("*")) {
		const [minStr, maxStr] = repeat.split("*");
		return {
			min: minStr ? parseInt(minStr, 10) : 0,
			max: maxStr ? parseInt(maxStr, 10) : Infinity
		};
	}
	const exact = parseInt(repeat, 10);
	return {
		min: exact,
		max: exact
	};
}, "parseRepeat");
var transformElement = /* @__PURE__ */ __name2((element) => {
	const inner = transformPrimary(element.primary);
	if (!element.repeat) return inner;
	const { min, max } = parseRepeat(element.repeat);
	if (min === 0 && max === 1) return {
		type: "optional",
		element: inner
	};
	return {
		type: "repetition",
		element: inner,
		min,
		max
	};
}, "transformElement");
var transformPrimary = /* @__PURE__ */ __name2((primary) => {
	switch (primary.$type) {
		case "AbnfStringLiteral": return {
			type: "terminal",
			value: primary.value
		};
		case "AbnfNumVal": return {
			type: "terminal",
			value: primary.value
		};
		case "AbnfRuleName": return {
			type: "nonterminal",
			name: primary.name
		};
		case "AbnfGroup": return transformAlternation(primary.element);
		case "AbnfOptionalGroup": return {
			type: "optional",
			element: transformAlternation(primary.element)
		};
		default: throw new Error(`Unsupported ABNF primary node: ${primary.$type}`);
	}
}, "transformPrimary");
var transformRule = /* @__PURE__ */ __name2((rule) => {
	return {
		name: rule.name,
		definition: transformAlternation(rule.definition)
	};
}, "transformRule");
var populateDb = /* @__PURE__ */ __name2((ast) => {
	populateCommonDb(ast, db);
	if (ast.title) db.setTitle(ast.title);
	ast.rules.map((rule) => db.addRule(transformRule(rule)));
}, "populateDb");
var diagram = {
	parser: {
		parse: /* @__PURE__ */ __name2((input) => {
			db.clear();
			log.debug("[ABNF Parser] Starting Langium parse");
			const result = langiumParser.parse(input);
			if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
			const ast = result.value;
			log.debug("[ABNF Parser] Parsed rules:", ast.rules.length);
			populateDb(ast);
			log.debug("[ABNF Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
//#endregion
export { diagram };
