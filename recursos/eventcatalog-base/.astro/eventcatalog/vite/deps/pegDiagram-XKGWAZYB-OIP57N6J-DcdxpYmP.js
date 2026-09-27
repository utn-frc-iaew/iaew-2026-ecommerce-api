import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
import { t as log } from "./chunk-YJFJOXZG-BRJXzlLC.js";
import "./chunk-W7FHEGFS-CYgalqT6.js";
import { n as getStyles, r as renderer, t as db } from "./chunk-XCWWM2C3-B-akp80R.js";
import { t as populateCommonDb } from "./chunk-VII2H2IX-CGpA8jzL.js";
import { j as MermaidParseError, v as createRailroadPegServices } from "./chunk-KOCW2XDZ-CTyH0L9H.js";
import "./render-O7CIS3YK-CqknIpfN.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/pegDiagram-XKGWAZYB-OIP57N6J.mjs
var langiumParser = createRailroadPegServices().RailroadPeg.parser.LangiumParser;
var transformOrderedChoice = /* @__PURE__ */ __name2((choice) => {
	const alternatives = choice.alternatives.map(transformSequence);
	if (alternatives.length === 1) return alternatives[0];
	return {
		type: "choice",
		alternatives
	};
}, "transformOrderedChoice");
var transformSequence = /* @__PURE__ */ __name2((sequence) => {
	const elements = sequence.elements.map(transformPrefix);
	if (elements.length === 1) return elements[0];
	return {
		type: "sequence",
		elements
	};
}, "transformSequence");
var transformPrefix = /* @__PURE__ */ __name2((prefix) => {
	const inner = transformSuffix(prefix.suffix);
	if (!prefix.operator) return inner;
	return {
		type: "special",
		text: prefix.operator === "&" ? `&${nodeToLabel(inner)}` : `!${nodeToLabel(inner)}`
	};
}, "transformPrefix");
var nodeToLabel = /* @__PURE__ */ __name2((node) => {
	switch (node.type) {
		case "terminal": return `"${node.value}"`;
		case "nonterminal": return node.name;
		case "special": return node.text;
		default: return "(...)";
	}
}, "nodeToLabel");
var transformSuffix = /* @__PURE__ */ __name2((suffix) => {
	const inner = transformPrimary(suffix.primary);
	if (!suffix.operator) return inner;
	switch (suffix.operator) {
		case "?": return {
			type: "optional",
			element: inner
		};
		case "*": return {
			type: "repetition",
			element: inner,
			min: 0,
			max: Infinity
		};
		case "+": return {
			type: "repetition",
			element: inner,
			min: 1,
			max: Infinity
		};
		default: throw new Error(`Unsupported PEG suffix operator: ${suffix.operator}`);
	}
}, "transformSuffix");
var transformPrimary = /* @__PURE__ */ __name2((primary) => {
	switch (primary.$type) {
		case "PegLiteral": return {
			type: "terminal",
			value: primary.value
		};
		case "PegIdentifier": return {
			type: "nonterminal",
			name: primary.name
		};
		case "PegGroup": return transformOrderedChoice(primary.element);
		case "PegAny": return {
			type: "special",
			text: primary.dot
		};
		default: throw new Error(`Unsupported PEG primary node: ${primary.$type}`);
	}
}, "transformPrimary");
var transformRule = /* @__PURE__ */ __name2((rule) => {
	return {
		name: rule.name,
		definition: transformOrderedChoice(rule.definition)
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
			log.debug("[PEG Parser] Starting Langium parse");
			const result = langiumParser.parse(input);
			if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
			const ast = result.value;
			log.debug("[PEG Parser] Parsed rules:", ast.rules.length);
			populateDb(ast);
			log.debug("[PEG Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
//#endregion
export { diagram };
