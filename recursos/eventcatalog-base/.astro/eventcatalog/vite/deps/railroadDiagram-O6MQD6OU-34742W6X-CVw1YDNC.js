import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
import { t as log } from "./chunk-YJFJOXZG-BRJXzlLC.js";
import "./chunk-W7FHEGFS-CYgalqT6.js";
import { n as getStyles, r as renderer, t as db } from "./chunk-XCWWM2C3-B-akp80R.js";
import { t as populateCommonDb } from "./chunk-VII2H2IX-CGpA8jzL.js";
import { j as MermaidParseError, w as createRailroadServices } from "./chunk-KOCW2XDZ-CTyH0L9H.js";
import "./render-O7CIS3YK-CqknIpfN.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/railroadDiagram-O6MQD6OU-34742W6X.mjs
var langiumParser = createRailroadServices().Railroad.parser.LangiumParser;
var transformExpression = /* @__PURE__ */ __name2((expr) => {
	switch (expr.$type) {
		case "RailroadTerminalExpr": return {
			type: "terminal",
			value: expr.value
		};
		case "RailroadNonTerminalExpr": return {
			type: "nonterminal",
			name: expr.name
		};
		case "RailroadSpecialExpr": return {
			type: "special",
			text: expr.text
		};
		case "RailroadSequenceExpr": {
			const elements = expr.elements.map(transformExpression);
			return elements.length === 1 ? elements[0] : {
				type: "sequence",
				elements
			};
		}
		case "RailroadChoiceExpr": {
			const alternatives = expr.alternatives.map(transformExpression);
			return alternatives.length === 1 ? alternatives[0] : {
				type: "choice",
				alternatives
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: transformExpression(expr.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: transformExpression(expr.element),
			min: 1,
			max: Infinity
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: transformExpression(expr.element),
			min: 0,
			max: Infinity
		};
		default: throw new Error(`Unsupported railroad expression: ${expr.$type}`);
	}
}, "transformExpression");
var transformRule = /* @__PURE__ */ __name2((rule) => {
	return {
		name: rule.name,
		definition: transformExpression(rule.definition)
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
			log.debug("[Railroad Parser] Starting Langium parse");
			const result = langiumParser.parse(input);
			if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) throw new MermaidParseError(result);
			const ast = result.value;
			log.debug("[Railroad Parser] Parsed rules:", ast.rules.length);
			populateDb(ast);
			log.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
//#endregion
export { diagram };
