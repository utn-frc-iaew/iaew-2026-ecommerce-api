import { Ci as isObject, Lt as getXmlBodyExample, Rt as getExampleFromSchema, Si as mergeSiblingReferences, b as setPathItemOperation, g as getPathItemOperation, h as forEachPathItemOperation, pi as isXmlMediaType, ui as unescapeJsonPointer, v as getResolvedPathItem, vt as isHttpMethod, xi as getResolvedRef, yt as HTTP_METHODS } from "./request-example-CCgTHEb8.js";
import { d as asciiAlphanumeric, g as asciiPunctuation, s as classifyCharacter, u as asciiAlpha } from "./lib-pfgmhSsx.js";
import { a as htmlBlockNames, i as decodeString, o as htmlRawNames, r as remarkParse, t as unified } from "./lib-DSnkxr3l.js";
import { a as formatCodeAsIndented, i as encodeCharacterReference, n as handle, o as patternInScope, r as formatHeadingAsSetext, s as phrasing$1, t as remarkGfm } from "./remark-gfm-DoW5EEgY.js";
//#region node_modules/zwitch/index.js
/**
* @callback Handler
*   Handle a value, with a certain ID field set to a certain value.
*   The ID field is passed to `zwitch`, and it’s value is this function’s
*   place on the `handlers` record.
* @param {...any} parameters
*   Arbitrary parameters passed to the zwitch.
*   The first will be an object with a certain ID field set to a certain value.
* @returns {any}
*   Anything!
*/
/**
* @callback UnknownHandler
*   Handle values that do have a certain ID field, but it’s set to a value
*   that is not listed in the `handlers` record.
* @param {unknown} value
*   An object with a certain ID field set to an unknown value.
* @param {...any} rest
*   Arbitrary parameters passed to the zwitch.
* @returns {any}
*   Anything!
*/
/**
* @callback InvalidHandler
*   Handle values that do not have a certain ID field.
* @param {unknown} value
*   Any unknown value.
* @param {...any} rest
*   Arbitrary parameters passed to the zwitch.
* @returns {void|null|undefined|never}
*   This should crash or return nothing.
*/
/**
* @template {InvalidHandler} [Invalid=InvalidHandler]
* @template {UnknownHandler} [Unknown=UnknownHandler]
* @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
* @typedef Options
*   Configuration (required).
* @property {Invalid} [invalid]
*   Handler to use for invalid values.
* @property {Unknown} [unknown]
*   Handler to use for unknown values.
* @property {Handlers} [handlers]
*   Handlers to use.
*/
var own$2 = {}.hasOwnProperty;
/**
* Handle values based on a field.
*
* @template {InvalidHandler} [Invalid=InvalidHandler]
* @template {UnknownHandler} [Unknown=UnknownHandler]
* @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
* @param {string} key
*   Field to switch on.
* @param {Options<Invalid, Unknown, Handlers>} [options]
*   Configuration (required).
* @returns {{unknown: Unknown, invalid: Invalid, handlers: Handlers, (...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<Handlers[keyof Handlers]>, (...parameters: Parameters<Unknown>): ReturnType<Unknown>}}
*/
function zwitch(key, options) {
	const settings = options || {};
	/**
	* Handle one value.
	*
	* Based on the bound `key`, a respective handler will be called.
	* If `value` is not an object, or doesn’t have a `key` property, the special
	* “invalid” handler will be called.
	* If `value` has an unknown `key`, the special “unknown” handler will be
	* called.
	*
	* All arguments, and the context object, are passed through to the handler,
	* and it’s result is returned.
	*
	* @this {unknown}
	*   Any context object.
	* @param {unknown} [value]
	*   Any value.
	* @param {...unknown} parameters
	*   Arbitrary parameters passed to the zwitch.
	* @property {Handler} invalid
	*   Handle for values that do not have a certain ID field.
	* @property {Handler} unknown
	*   Handle values that do have a certain ID field, but it’s set to a value
	*   that is not listed in the `handlers` record.
	* @property {Handlers} handlers
	*   Record of handlers.
	* @returns {unknown}
	*   Anything.
	*/
	function one(value, ...parameters) {
		/** @type {Handler|undefined} */
		let fn = one.invalid;
		const handlers = one.handlers;
		if (value && own$2.call(value, key)) {
			const id = String(value[key]);
			fn = own$2.call(handlers, id) ? handlers[id] : one.unknown;
		}
		if (fn) return fn.call(this, value, ...parameters);
	}
	one.handlers = settings.handlers || {};
	one.invalid = settings.invalid;
	one.unknown = settings.unknown;
	return one;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/configure.js
/**
* @import {Options, State} from './types.js'
*/
var own$1 = {}.hasOwnProperty;
/**
* Configure a base state w/ an extension.
*
* @param {State} base
*   Base state to configure.
* @param {Options} extension
*   Extension to apply.
* @returns {State}
*   Given `base`.
*/
function configure(base, extension) {
	let index = -1;
	/** @type {keyof Options} */
	let key;
	if (extension.extensions) while (++index < extension.extensions.length) configure(base, extension.extensions[index]);
	for (key in extension) if (own$1.call(extension, key)) switch (key) {
		case "extensions": break;
		/* c8 ignore next 4 */
		case "unsafe":
			list$1(base[key], extension[key]);
			break;
		case "join":
			list$1(base[key], extension[key]);
			break;
		case "handlers":
			map(base[key], extension[key]);
			break;
		default: base.options[key] = extension[key];
	}
	return base;
}
/**
* Merge arrays from the extension into the base state.
*
* @template T
*   Kind.
* @param {Array<T>} left
*   List to merge into.
* @param {Array<T> | null | undefined} right
*   List to merge from.
* @returns {undefined}
*   Nothing.
*/
function list$1(left, right) {
	if (right) left.push(...right);
}
/**
* Merge objects from the extension into the base state.
*
* @template T
*   Kind.
* @param {Record<string, T>} left
*   Object to merge into.
* @param {Record<string, T> | null | undefined} right
*   Object to merge from.
* @returns {undefined}
*   Nothing.
*/
function map(left, right) {
	if (right) Object.assign(left, right);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/html-kind.js
/**
* @typedef {1 | 2 | 3 | 4 | 5 | 6 | 7} Kind
*   Kind of HTML (flow) element.
*/
/**
* Infer the kind of HTML that `value` is.
*
* This works on valid trees as produced by `micromark`.
* Kinds:
*
* 1. raw
* 2. comment
* 3. instruction
* 4. declaration
* 5. cdata
* 6. block
* 7. other
*
* See: <https://spec.commonmark.org/0.31.2/#html-blocks>.
*
* @param {string} value
*   HTML.
* @returns {Kind | undefined}
*   Kind; `undefined` if unknown.
*/
function htmlKind(value) {
	if (value.charCodeAt(0) !== 60) return;
	const next = value.charCodeAt(1);
	if (next === 33) {
		const code = value.charCodeAt(2);
		if (code === 45) return 2;
		if (code === 91) return 5;
		if (asciiAlpha(code)) return 4;
		return;
	}
	if (next === 63) return 3;
	const closing = next === 47;
	const start = closing ? 2 : 1;
	let end = start;
	let code = value.charCodeAt(end);
	if (!asciiAlpha(code)) return;
	while (code === 45 || asciiAlphanumeric(code)) code = value.charCodeAt(++end);
	const name = value.slice(start, end).toLowerCase();
	if (!closing && code !== 47 && htmlRawNames.includes(name)) return 1;
	return htmlBlockNames.includes(name) ? 6 : 7;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/join.js
/**
* @import {Join} from 'mdast-util-to-markdown'
*/
/** @type {Array<Join>} */
var join = [joinDefaults];
/**
* Default join function.
*
* @type {Join}
*/
function joinDefaults(left, right, parent, state) {
	if (right.type === "code" && formatCodeAsIndented(right, state) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, state))) return false;
	if ("spread" in parent && typeof parent.spread === "boolean") {
		if (left.type === "paragraph" && (left.type === right.type || right.type === "definition" || right.type === "heading" && formatHeadingAsSetext(right, state))) return;
		if (left.type === "html") {
			const kind = htmlKind(left.value);
			if (kind === void 0 || kind === 6 || kind === 7) return 1;
		}
		if (left.type === "paragraph" && right.type === "html") {
			const kind = htmlKind(right.value);
			if (kind === void 0 || kind === 7) return 1;
		}
		return parent.spread ? 1 : 0;
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/unsafe.js
/**
* @import {ConstructName, Unsafe} from 'mdast-util-to-markdown'
*/
/**
* List of constructs that occur in phrasing (paragraphs, headings), but cannot
* contain things like attention (emphasis, strong), images, or links.
* So they sort of cancel each other out.
* Note: could use a better name.
*
* @type {Array<ConstructName>}
*/
var fullPhrasingSpans = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
/** @type {Array<Unsafe>} */
var unsafe = [
	{
		character: "	",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "	",
		before: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "	",
		inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
	},
	{
		character: "\r",
		inConstruct: [
			"codeFencedLangGraveAccent",
			"codeFencedLangTilde",
			"codeFencedMetaGraveAccent",
			"codeFencedMetaTilde",
			"destinationLiteral",
			"headingAtx"
		]
	},
	{
		character: "\n",
		inConstruct: [
			"codeFencedLangGraveAccent",
			"codeFencedLangTilde",
			"codeFencedMetaGraveAccent",
			"codeFencedMetaTilde",
			"destinationLiteral",
			"headingAtx"
		]
	},
	{
		character: "\r",
		before: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "\r",
		after: "\\r",
		inConstruct: "phrasing"
	},
	{
		character: "\n",
		before: "\\n",
		inConstruct: "phrasing"
	},
	{
		character: "\n",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: " ",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: " ",
		before: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: " ",
		inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
	},
	{
		character: "!",
		after: "\\[",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		character: "\"",
		inConstruct: "titleQuote"
	},
	{
		atBreak: true,
		character: "#"
	},
	{
		character: "#",
		inConstruct: "headingAtx",
		after: "(?:[\r\n]|$)"
	},
	{
		character: "&",
		after: "[#A-Za-z]",
		inConstruct: "phrasing"
	},
	{
		character: "'",
		inConstruct: "titleApostrophe"
	},
	{
		character: "(",
		inConstruct: "destinationRaw"
	},
	{
		before: "\\]",
		character: "(",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		atBreak: true,
		before: "\\d+",
		character: ")"
	},
	{
		character: ")",
		inConstruct: "destinationRaw"
	},
	{
		atBreak: true,
		character: "*",
		after: "(?:[ 	\r\n*])"
	},
	{
		character: "*",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		atBreak: true,
		character: "+",
		after: "(?:[ 	\r\n])"
	},
	{
		atBreak: true,
		character: "-",
		after: "(?:[ 	\r\n-])"
	},
	{
		atBreak: true,
		before: "\\d+",
		character: ".",
		after: "(?:[ 	\r\n]|$)"
	},
	{
		atBreak: true,
		character: "<",
		after: "[!/?A-Za-z]"
	},
	{
		character: "<",
		after: "[!/?A-Za-z]",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		character: "<",
		inConstruct: "destinationLiteral"
	},
	{
		atBreak: true,
		character: "="
	},
	{
		atBreak: true,
		character: ">"
	},
	{
		character: ">",
		inConstruct: "destinationLiteral"
	},
	{
		atBreak: true,
		character: "["
	},
	{
		character: "[",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		character: "[",
		inConstruct: ["label", "reference"]
	},
	{
		character: "\\",
		after: "[\\r\\n]",
		inConstruct: "phrasing"
	},
	{
		character: "]",
		inConstruct: ["label", "reference"]
	},
	{
		atBreak: true,
		character: "_"
	},
	{
		character: "_",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		atBreak: true,
		character: "`"
	},
	{
		character: "`",
		inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
	},
	{
		character: "`",
		inConstruct: "phrasing",
		notInConstruct: fullPhrasingSpans
	},
	{
		atBreak: true,
		character: "~"
	},
	{
		character: "<",
		inConstruct: "autolink"
	},
	{
		character: ">",
		inConstruct: "autolink"
	},
	{
		character: "",
		inConstruct: "autolink"
	}
];
var code = -1;
while (++code < 33) unsafe.push({
	character: String.fromCharCode(code),
	inConstruct: "autolink"
});
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/association.js
/**
* @import {AssociationId} from '../types.js'
*/
/**
* Get an identifier from an association to match it to others.
*
* Associations are nodes that match to something else through an ID:
* <https://github.com/syntax-tree/mdast#association>.
*
* The `label` of an association is the string value: character escapes and
* references work, and casing is intact.
* The `identifier` is used to match one association to another:
* controversially, character escapes and references don’t work in this
* matching: `&copy;` does not match `©`, and `\+` does not match `+`.
*
* But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
* matches `a b`.
* So, we do prefer the label when figuring out how we’re going to serialize:
* it has whitespace, casing, and we can ignore most useless character
* escapes and all character references.
*
* @type {AssociationId}
*/
function association(node) {
	if (node.label || !node.identifier) return node.label || "";
	return decodeString(node.identifier);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/compile-pattern.js
/**
* @import {CompilePattern} from '../types.js'
*/
/**
* Compiles a pattern object into a regular expression.
*
* @type {CompilePattern}
*/
function compilePattern(pattern) {
	if (!pattern._compiled) {
		const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
		pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[$()*+\-.?[\\\]^{|}]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
	}
	return pattern._compiled;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/character.js
/**
* Get the first character of a value.
*
* Is aware of astral characters (such as emoji).
*
* @param {string} value
*   Value.
* @returns {string}
*   First character; empty if `value` is empty.
*/
function firstCharacter(value) {
	const code = value.codePointAt(0);
	return code === void 0 ? "" : String.fromCodePoint(code);
}
/**
* Get the last character of a value.
*
* Is aware of astral characters (such as emoji).
*
* @param {string} value
*   Value.
* @returns {string}
*   Last character; empty if `value` is empty.
*/
function lastCharacter(value) {
	const code = value.codePointAt(value.length - 2);
	return code !== void 0 && code > 65535 ? value.slice(-2) : value.slice(-1);
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/encode-info.js
/**
* @import {EncodeSides} from '../types.js'
*/
/**
* Check whether to encode (as a character reference) the characters
* surrounding an attention run.
*
* Which characters are around an attention run influence whether it works or
* not.
*
* See <https://github.com/orgs/syntax-tree/discussions/60> for more info.
* See this markdown in a particular renderer to see what works:
*
* ```markdown
* |                         | A (letter inside) | B (punctuation inside) | C (whitespace inside) | D (nothing inside) |
* | ----------------------- | ----------------- | ---------------------- | --------------------- | ------------------ |
* | 1 (letter outside)      | x*y*z             | x*.*z                  | x* *z                 | x**z               |
* | 2 (punctuation outside) | .*y*.             | .*.*.                  | .* *.                 | .**.               |
* | 3 (whitespace outside)  | x *y* z           | x *.* z                | x * * z               | x ** z             |
* | 4 (nothing outside)     | *x*               | *.*                    | * *                   | **                 |
* ```
*
* @param {number} outside
*   Code point on the outer side of the run.
* @param {number} inside
*   Code point on the inner side of the run.
* @param {string} marker
*   Marker of the run.
*   Underscores are handled more strictly (they form less often) than
*   asterisks.
* @returns {EncodeSides}
*   Whether to encode characters.
*/
function encodeInfo(outside, inside, marker) {
	const outsideKind = classifyCharacter(outside);
	const insideKind = classifyCharacter(inside);
	if (outsideKind === void 0) return insideKind === void 0 ? marker === "_" ? {
		inside: true,
		outside: true
	} : {
		inside: false,
		outside: false
	} : insideKind === 1 ? {
		inside: true,
		outside: true
	} : {
		inside: false,
		outside: true
	};
	if (outsideKind === 1) return insideKind === void 0 ? {
		inside: false,
		outside: false
	} : insideKind === 1 ? {
		inside: true,
		outside: true
	} : {
		inside: false,
		outside: false
	};
	return insideKind === void 0 ? {
		inside: false,
		outside: false
	} : insideKind === 1 ? {
		inside: true,
		outside: false
	} : {
		inside: false,
		outside: false
	};
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
/**
* @import {Attention, Handle, Info, State} from 'mdast-util-to-markdown'
* @import {PhrasingParents} from '../types.js'
*/
/**
* Markers for builtin attention (emphasis, strong) to whether they are stricter:
* whether they cannot open and close inside words.
*
* Builtin runs pair following CommonMark rules for emphasis and strong:
* they are split,
* using one or two markers at a time,
* with the rule of 3.
* Other markers pair like GFM strikethrough:
* whole runs pair with a run of the same size.
*
* @type {Map<string, boolean>}
*/
var builtins = /* @__PURE__ */ new Map([["*", false], ["_", true]]);
/**
* @typedef AttentionResult
*   Attention, of which the sequence is chosen later.
* @property {Array<Item>} children
*   Serialized children.
* @property {Array<string>} sequences
*   Sequences that can be used, in order of preference.
*/
/**
* @typedef Improvement
*   Improvement of attention sequences.
* @property {Map<AttentionResult, string>} chosen
*   Chosen sequences for each attention.
* @property {Array<Token>} tokens
*   Tokens involved in the improvement.
* @property {Mistake | undefined} mistake
*   Mistake that led to this improvement, if any.
*/
/**
* @typedef {AttentionResult | string} Item
*   Serialized phrasing.
*/
/**
* @typedef Mistake
*   Sequence that does not form its attention.
* @property {Array<AttentionResult>} attention
*   Attention to try other sequences for.
* @property {number} index
*   Index of the token.
*/
/**
* @typedef Run
*   Sequences next to each other with the same marker.
* @property {boolean} close
*   Whether it can close.
* @property {number} end
*   Index after the last marker not used (to open).
* @property {Array<Token>} markers
*   Sequence of each marker.
* @property {boolean} open
*   Whether it can open.
* @property {boolean} split
*   Whether it can be split (built-in attention).
* @property {number} start
*   Index of the first marker not used (to close).
* @property {Array<Token>} tokens
*   Sequences.
*/
/**
* @typedef Token
*   Rendered phrasing.
* @property {AttentionResult | undefined} attention
*   Attention, if this is one of its sequences.
* @property {string} value
*   Value.
*/
/**
* Get candidates for a mistake:
* attention to try other sequences for,
* later first.
*
* @param {Array<Token>} tokens
*   Tokens.
* @param {Array<Token>} involved
*   Sequences involved in the mistake.
* @param {Map<Token, Run>} runOf
*   Run of each sequence.
* @returns {Array<AttentionResult>}
*   Candidates.
*/
function candidates(tokens, involved, runOf) {
	/** @type {Set<AttentionResult | undefined>} */
	const related = /* @__PURE__ */ new Set();
	for (const token of tokens) {
		const siblings = runOf.get(token);
		if (siblings && token.attention && involved.some((d) => d.attention === token.attention)) for (const sibling of siblings.tokens) related.add(sibling.attention);
	}
	/** @type {Array<AttentionResult>} */
	const ordered = [];
	for (const token of tokens) if (token.attention && related.delete(token.attention)) ordered.push(token.attention);
	ordered.reverse();
	return ordered;
}
/**
* Check whether sequences form their attention, like `micromark`.
*
* Sequences of `*` and `_` pair like emphasis and strong in CommonMark,
* others like strikethrough in GFM.
*
* @param {Array<Token>} tokens
*   Tokens.
* @param {string} before
*   Characters before.
* @param {string} after
*   Characters after.
* @returns {Mistake | undefined}
*   First mistake, if any.
*/
function check(tokens, before, after) {
	/** @type {Array<Run>} */
	const runs = [];
	/** @type {Map<Token, Array<Token>>} */
	const wrong = /* @__PURE__ */ new Map();
	/** @type {Map<Token, Run>} */
	const runOf = /* @__PURE__ */ new Map();
	let index = 0;
	while (index < tokens.length) {
		if (!tokens[index].attention) {
			index++;
			continue;
		}
		const marker = tokens[index].value.charAt(0);
		const strict = builtins.get(marker);
		let end = index + 1;
		while (end < tokens.length && tokens[end].attention && tokens[end].value.charAt(0) === marker) end++;
		const head = index ? tokens[index - 1].value : before;
		const previous = classifyCharacter(head.charCodeAt(head.length - 1));
		const next = classifyCharacter((end < tokens.length ? tokens[end].value : after).charCodeAt(0));
		const open = !next || next === 2 && Boolean(previous);
		const close = !previous || previous === 2 && Boolean(next);
		/** @type {Run} */
		const run = {
			tokens: tokens.slice(index, end),
			markers: [],
			start: 0,
			end: 0,
			open: strict ? open && (Boolean(previous) || !close) : open,
			close: strict ? close && (Boolean(next) || !open) : close,
			split: strict !== void 0
		};
		for (const token of run.tokens) {
			wrong.set(token, [...run.tokens]);
			runOf.set(token, run);
			let size = token.value.length;
			while (size--) run.markers.push(token);
		}
		run.end = run.markers.length;
		runs.push(run);
		index = end;
	}
	pair(runs, wrong);
	index = -1;
	while (++index < tokens.length) {
		const involved = wrong.get(tokens[index]);
		if (involved) return {
			attention: candidates(tokens, involved, runOf),
			index
		};
	}
}
/**
* Serialize the children of a parent that contains phrasing children.
*
* @param {PhrasingParents} parent
*   Parent of phrasing nodes.
* @param {State} state
*   Info passed around about the current state.
* @param {Info} info
*   Info on where we are in the document we are generating.
* @returns {string}
*   Serialized result.
*/
function containerPhrasing(parent, state, info) {
	return serialize(phrasing(parent, state, info), info.before, info.after);
}
/**
* Encode the first or last character of tokens as a character reference,
* if it is text.
*
* @param {Array<Token>} tokens
*   Tokens.
* @param {boolean} start
*   Whether to encode the first or last character.
* @returns {undefined}
*   Nothing.
*/
function encode(tokens, start) {
	const token = tokens[start ? 0 : tokens.length - 1];
	if (!token || token.attention) return;
	const character = start ? firstCharacter(token.value) : lastCharacter(token.value);
	const reference = encodeCharacterReference(character.codePointAt(0));
	token.value = start ? reference + token.value.slice(character.length) : token.value.slice(0, token.value.length - character.length) + reference;
}
/**
* Try other sequences for the candidates of a mistake and use the first that
* moves the mistake further.
*
* @param {Array<Item>} items
*   Items.
* @param {Map<AttentionResult, string>} chosen
*   Sequences to use instead of preferred sequences.
* @param {Mistake} mistake
*   Mistake.
* @param {string} before
*   Characters before.
* @param {string} after
*   Characters after.
* @returns {Improvement | undefined}
*   Result if better.
*/
function improve(items, chosen, mistake, before, after) {
	for (const attention of mistake.attention) {
		const current = chosen.get(attention) || attention.sequences[0];
		for (const sequence of attention.sequences) {
			if (sequence === current) continue;
			const trial = new Map(chosen);
			trial.set(attention, sequence);
			const tokens = render(items, trial, before, after);
			const next = check(tokens, before, after);
			if (!next || next.index > mistake.index) return {
				chosen: trial,
				mistake: next,
				tokens
			};
		}
	}
}
/**
* Pair runs like `micromark` and mark sequences that do form their attention
* as fine.
*
* Each pair uses markers from the end of an opener and the start of a closer.
* It forms the intended attention if those markers are exactly the whole
* opening and closing sequence of one attention.
* Otherwise attention is mixed up:
* either sequences of different attention pair,
* part of a sequence is used (such as `**` of strong as `*`),
* or several sequences are used together (such as `*` and `*` as `**`).
* Then the sequences involved are recorded with each other.
*
* @param {Array<Run>} runs
*   Runs.
* @param {Map<Token, Array<Token>>} wrong
*   Sequences that are wrong, with the sequences involved.
* @returns {undefined}
*   Nothing, `wrong` is changed.
*/
function pair(runs, wrong) {
	let index = 0;
	while (index < runs.length) {
		const closer = runs[index];
		const marker = closer.tokens[0].value.charAt(0);
		const closerSize = closer.end - closer.start;
		let open = closer.close && closerSize ? index : 0;
		while (open--) {
			const opener = runs[open];
			const openerSize = opener.end - opener.start;
			if (opener.tokens[0].value.charAt(0) === marker && opener.open && openerSize && (closer.split ? !((opener.close || closer.open) && closerSize % 3) || (openerSize + closerSize) % 3 : openerSize === opener.markers.length && openerSize === closerSize)) {
				const size = closer.split ? openerSize > 1 && closerSize > 1 ? 2 : 1 : closerSize;
				const opening = opener.markers.slice(opener.end - size, opener.end);
				const closing = closer.markers.slice(closer.start, closer.start + size);
				const openToken = opening[0];
				const closeToken = closing[0];
				if (openToken === opening[size - 1] && openToken.value.length === size && closeToken === closing[size - 1] && closeToken.value.length === size && openToken.attention === closeToken.attention) {
					wrong.delete(openToken);
					wrong.delete(closeToken);
				} else {
					const involved = [.../* @__PURE__ */ new Set([...opening, ...closing])];
					for (const token of involved) {
						const list = wrong.get(token);
						if (list) list.push(...involved);
					}
				}
				opener.end -= size;
				closer.start += size;
				break;
			}
		}
		if (open === -1 || closer.start === closer.end) index++;
	}
}
/**
* Get the sequences that can be used for attention, in order of preference.
*
* @param {string} type
*   Node type.
* @param {Array<string>} markers
*   Markers.
* @param {Array<number>} sizes
*   Sizes.
* @returns {Array<string>}
*   Sequences.
*/
function attentionSequences(type, markers, sizes) {
	if (markers.length === 0) throw new Error("Cannot serialize `" + type + "` as attention without markers, expected one or more markers");
	if (sizes.length === 0) throw new Error("Cannot serialize `" + type + "` as attention without sizes, expected one or more sizes");
	for (const size of sizes) if (!Number.isSafeInteger(size) || size < 1) throw new Error("Cannot serialize `" + type + "` as attention with `" + size + "` as size, expected positive integer");
	/** @type {Array<string>} */
	const sequences = [];
	for (const marker of markers) {
		if (marker.length !== 1) throw new Error("Cannot serialize `" + type + "` as attention with `" + marker + "` as marker, expected a single ascii character");
		if (!asciiPunctuation(marker.charCodeAt(0))) throw new Error("Cannot serialize `" + type + "` as attention with `" + marker + "` as marker, expected ascii punctuation");
		for (const size of sizes) sequences.push(marker.repeat(size));
	}
	return sequences;
}
/**
* Serialize the children of a parent that contains phrasing children,
* keeping attention separate,
* so that its markers can be chosen later.
*
* @param {PhrasingParents} parent
*   Parent of phrasing nodes.
* @param {State} state
*   Info passed around about the current state.
* @param {Info} info
*   Info on where we are in the document we are generating.
* @returns {Array<Item>}
*   Items.
*/
function phrasing(parent, state, info) {
	const indexStack = state.indexStack;
	const children = parent.children || [];
	/** @type {Array<Item>} */
	const results = [];
	let index = -1;
	let before = info.before;
	indexStack.push(-1);
	let tracker = state.createTracker(info);
	while (++index < children.length) {
		const child = children[index];
		/** @type {string} */
		let after;
		indexStack[indexStack.length - 1] = index;
		if (index + 1 < children.length) {
			/** @type {Handle} */
			let handle = state.handle.handlers[children[index + 1].type];
			if (handle && handle.peek) handle = handle.peek;
			after = handle ? firstCharacter(handle(children[index + 1], parent, state, {
				before: "",
				after: "",
				...tracker.current()
			})) : "";
		} else after = info.after;
		const previous = results[results.length - 1];
		if (typeof previous === "string" && (before === "\r" || before === "\n") && child.type === "html" && htmlKind(child.value) !== 7) {
			results[results.length - 1] = previous.replace(/(\r?\n|\r)$/, " ");
			before = " ";
			tracker = state.createTracker(info);
			tracker.move(serialize(results, info.before, info.after));
		}
		/** @type {(Handle & {attention?: Attention | undefined}) | undefined} */
		const handle = state.handle.handlers[child.type];
		if (handle && handle.attention) {
			const { construct, markers, sizes } = handle.attention(child, state);
			const sequences = attentionSequences(child.type, markers, sizes);
			const sequence = sequences[0];
			const exit = state.enter(construct);
			tracker.move(sequence);
			const inside = phrasing(child, state, {
				...tracker.current(),
				before: sequence,
				after: sequence
			});
			tracker.move(serialize(inside, sequence, sequence));
			tracker.move(sequence);
			exit();
			results.push({
				children: inside,
				sequences
			});
			before = sequence.charAt(sequence.length - 1);
		} else {
			const value = state.handle(child, parent, state, {
				...tracker.current(),
				after,
				before
			});
			if (!value) continue;
			tracker.move(value);
			results.push(value);
			before = lastCharacter(value);
		}
	}
	indexStack.pop();
	return results;
}
/**
* Render items with sequences;
* encoding characters around attention where needed.
*
* @param {Array<Item>} items
*   Serialized phrasing.
* @param {Map<AttentionResult, string>} chosen
*   Sequences to use instead of preferred sequences.
* @param {string} before
*   Characters before.
* @param {string} after
*   Characters after.
* @returns {Array<Token>}
*   Tokens.
*/
function render(items, chosen, before, after) {
	/** @type {Array<Token>} */
	const tokens = [];
	/** @type {string | undefined} */
	let encodeAfter;
	let previous = lastCharacter(before);
	let index = -1;
	while (++index < items.length) {
		const item = items[index];
		if (typeof item === "string") {
			/** @type {Token} */
			const token = {
				value: item,
				attention: void 0
			};
			if (encodeAfter && encodeAfter === firstCharacter(item)) encode([token], true);
			encodeAfter = void 0;
			tokens.push(token);
			if (token.value) previous = lastCharacter(token.value);
			continue;
		}
		const sequence = chosen.get(item) || item.sequences[0];
		const marker = sequence.charAt(0);
		const next = items[index + 1];
		const outsideBefore = previous;
		const outsideAfter = firstCharacter(next === void 0 ? after : typeof next === "string" ? next : chosen.get(next) || next.sequences[0]);
		const inside = render(item.children, chosen, sequence, sequence);
		const head = inside.length > 0 ? inside[0].value : "";
		const open = encodeInfo(outsideBefore.charCodeAt(outsideBefore.length - 1), head.charCodeAt(0), marker);
		if (open.inside) encode(inside, true);
		const tail = inside.length > 0 ? lastCharacter(inside[inside.length - 1].value) : "";
		const close = encodeInfo(outsideAfter.charCodeAt(0), tail.charCodeAt(tail.length - 1), marker);
		if (close.inside) encode(inside, false);
		if (open.outside && outsideBefore !== "\n" && outsideBefore !== "\r") encode(tokens, false);
		if (close.outside) encodeAfter = outsideAfter;
		tokens.push({
			value: sequence,
			attention: item
		}, ...inside, {
			value: sequence,
			attention: item
		});
		previous = sequence.charAt(sequence.length - 1);
	}
	return tokens;
}
/**
* Serialize phrasing with attention.
*
* Whether attention forms depends on everything around it.
* This checks that it does and tries other sequences if not.
*
* @param {Array<Item>} items
*   Phrasing items.
* @param {string} before
*   Characters before.
* @param {string} after
*   Characters after.
* @returns {string}
*   Serialized markdown.
*/
function serialize(items, before, after) {
	/** @type {Map<AttentionResult, string>} */
	let chosen = /* @__PURE__ */ new Map();
	const initial = render(items, chosen, before, after);
	let tokens = initial;
	let mistake = check(tokens, before, after);
	while (mistake) {
		const next = improve(items, chosen, mistake, before, after);
		if (!next) {
			tokens = initial;
			break;
		}
		chosen = next.chosen;
		tokens = next.tokens;
		mistake = next.mistake;
	}
	let result = "";
	for (const token of tokens) result += token.value;
	return result;
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/container-flow.js
/**
* @import {State} from 'mdast-util-to-markdown'
* @import {FlowChildren, FlowParents, TrackFields} from '../types.js'
*/
/**
* Serialize the children of a parent that contains flow children.
*
* @param {FlowParents} parent
*   Parent of flow nodes.
* @param {State} state
*   Info passed around about the current state.
* @param {TrackFields} info
*   Info on where we are in the document we are generating.
* @returns {string}
*   Serialized children, joined by (blank) lines.
*/
function containerFlow(parent, state, info) {
	const indexStack = state.indexStack;
	const children = parent.children || [];
	const tracker = state.createTracker(info);
	/** @type {Array<string>} */
	const results = [];
	let index = -1;
	indexStack.push(-1);
	while (++index < children.length) {
		const child = children[index];
		indexStack[indexStack.length - 1] = index;
		results.push(tracker.move(state.handle(child, parent, state, {
			before: "\n",
			after: "\n",
			...tracker.current()
		})));
		if (child.type !== "list") state.bulletLastUsed = void 0;
		if (index < children.length - 1) results.push(tracker.move(between(child, children[index + 1], parent, state)));
	}
	indexStack.pop();
	return results.join("");
}
/**
* Determine the markdown to insert between two flow nodes.
*
* @param {FlowChildren} left
*   Left flow node.
* @param {FlowChildren} right
*   Right flow node.
* @param {FlowParents} parent
*   Parent of the flow nodes.
* @param {State} state
*   Info passed around.
* @returns {string}
*   Markdown to insert between the two flow nodes.
*/
function between(left, right, parent, state) {
	let index = state.join.length;
	while (index--) {
		const result = state.join[index](left, right, parent, state);
		if (result === true || result === 1) break;
		if (typeof result === "number") return "\n".repeat(1 + result);
		if (result === false) return "\n\n<!---->\n\n";
	}
	return "\n\n";
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
/**
* @import {IndentLines} from '../types.js'
*/
var eol = /\r?\n|\r/g;
/**
* Indents each line.
*
* @type {IndentLines}
*/
function indentLines(value, map) {
	/** @type {Array<string>} */
	const result = [];
	let start = 0;
	let line = 0;
	/** @type {RegExpExecArray | null} */
	let match;
	while (match = eol.exec(value)) {
		one(value.slice(start, match.index));
		result.push(match[0]);
		start = match.index + match[0].length;
		line++;
	}
	one(value.slice(start));
	return result.join("");
	/**
	* Indents a single line.
	*
	* @param {string} value
	*   Line.
	*/
	function one(value) {
		result.push(map(value, line, !value));
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/safe.js
/**
* @import {SafeConfig, State} from 'mdast-util-to-markdown'
*/
var own = {}.hasOwnProperty;
/**
* Make a string safe for embedding in markdown constructs.
*
* In markdown, almost all punctuation characters can, in certain cases,
* result in something.
* Whether they do is highly subjective to where they happen and in what
* they happen.
*
* To solve this, `mdast-util-to-markdown` tracks:
*
* * characters before and after something;
* * what “constructs” we are in.
*
* This information is then used by this function to escape or encode
* special characters.
*
* @param {State} state
*   Info passed around about the current state.
* @param {string | null | undefined} input
*   Raw value to make safe.
* @param {SafeConfig} config
*   Configuration.
* @returns {string}
*   Serialized markdown safe for embedding.
*/
function safe(state, input, config) {
	const value = (config.before || "") + (input || "") + (config.after || "");
	/** @type {Array<number>} */
	const positions = [];
	/** @type {Array<string>} */
	const result = [];
	/** @type {Record<number, {before: boolean, after: boolean}>} */
	const infos = {};
	const percentEncode = state.stack.includes("autolink");
	let index = -1;
	while (++index < state.unsafe.length) {
		const pattern = state.unsafe[index];
		if (!patternInScope(state.stack, pattern)) continue;
		const expression = state.compilePattern(pattern);
		/** @type {RegExpExecArray | null} */
		let match;
		while (match = expression.exec(value)) {
			const before = "before" in pattern || Boolean(pattern.atBreak);
			const after = "after" in pattern;
			const position = match.index + (before ? match[1].length : 0);
			if (own.call(infos, position)) {
				if (infos[position].before && !before) infos[position].before = false;
				if (infos[position].after && !after) infos[position].after = false;
			} else {
				positions.push(position);
				infos[position] = {
					before,
					after
				};
			}
		}
	}
	positions.sort(numerical);
	const offset = config.before ? config.before.length : 0;
	const end = value.length - (config.after ? config.after.length : 0);
	let start = offset;
	index = -1;
	while (++index < positions.length) {
		const position = positions[index];
		if (position < start || position >= end) continue;
		if (value.charAt(position) === "_" && position > 0 && classifyCharacter(value.charCodeAt(position - 1)) === void 0 && !own.call(infos, position - 1) && !(position - 1 === offset && /[*_]/.test(value.charAt(offset - 1)))) {
			let sequenceEnd = position + 1;
			while (sequenceEnd < end && value.charAt(sequenceEnd) === "_") sequenceEnd++;
			const skip = sequenceEnd - position - 1;
			if (positions[index + skip] === sequenceEnd - 1 && sequenceEnd < value.length && classifyCharacter(value.charCodeAt(sequenceEnd)) === void 0 && !own.call(infos, sequenceEnd) && !(sequenceEnd === end - 1 && /[*_]/.test(value.charAt(end)))) {
				index += skip;
				continue;
			}
		}
		if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after || positions[index - 1] === position - 1 && infos[position].before && !infos[position - 1].before && !infos[position - 1].after) continue;
		if (start !== position) {
			const slice = value.slice(start, position);
			result.push(percentEncode ? slice : escapeBackslashes(slice, "\\"));
		}
		start = position;
		if (percentEncode) {
			result.push("%" + value.charCodeAt(position).toString(16).toUpperCase().padStart(2, "0"));
			start++;
		} else if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) result.push("\\");
		else {
			result.push(encodeCharacterReference(value.charCodeAt(position)));
			start++;
		}
	}
	const rest = value.slice(start, end);
	result.push(percentEncode ? rest : escapeBackslashes(rest, config.after));
	return result.join("");
}
/**
* Compare two numbers.
*
* @param {number} a
*   Number.
* @param {number} b
*   Other number.
* @returns {number}
*   Result.
*/
function numerical(a, b) {
	return a - b;
}
/**
* Escape backslashes in a string, considering characters that follow.
*
* @param {string} value
*   Value.
* @param {string} after
*   Characters that follow the value.
* @returns {string}
*   Escaped string.
*/
function escapeBackslashes(value, after) {
	const expression = /\\(?=[!-/:-@[-`{-~])/g;
	/** @type {Array<number>} */
	const positions = [];
	/** @type {Array<string>} */
	const results = [];
	const whole = value + after;
	let index = -1;
	let start = 0;
	/** @type {RegExpExecArray | null} */
	let match;
	while (match = expression.exec(whole)) positions.push(match.index);
	while (++index < positions.length) {
		if (start !== positions[index]) results.push(value.slice(start, positions[index]));
		results.push("\\");
		start = positions[index];
	}
	results.push(value.slice(start));
	return results.join("");
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/util/track.js
/**
* @import {CreateTracker, TrackCurrent, TrackMove, TrackShift} from '../types.js'
*/
/**
* Track positional info in the output.
*
* @type {CreateTracker}
*/
function track(config) {
	/* c8 ignore next 5 */
	const options = config || {};
	const now = options.now || {};
	let lineShift = options.lineShift || 0;
	let line = now.line || 1;
	let column = now.column || 1;
	return {
		move,
		current,
		shift
	};
	/**
	* Get the current tracked info.
	*
	* @type {TrackCurrent}
	*/
	function current() {
		return {
			now: {
				line,
				column
			},
			lineShift
		};
	}
	/**
	* Define an increased line shift (the typical indent for lines).
	*
	* @type {TrackShift}
	*/
	function shift(value) {
		lineShift += value;
	}
	/**
	* Move past some generated markdown.
	*
	* @type {TrackMove}
	*/
	function move(input) {
		const value = input || "";
		const chunks = value.split(/\r?\n|\r/g);
		const tail = chunks[chunks.length - 1];
		line += chunks.length - 1;
		column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
		return value;
	}
}
//#endregion
//#region node_modules/mdast-util-to-markdown/lib/index.js
/**
* @import {Info, Join, Options, SafeConfig, State} from 'mdast-util-to-markdown'
* @import {Nodes} from 'mdast'
* @import {Enter, FlowParents, PhrasingParents, TrackFields} from './types.js'
*/
/**
* Turn an mdast syntax tree into markdown.
*
* @param {Nodes} tree
*   Tree to serialize.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {string}
*   Serialized markdown representing `tree`.
*/
function toMarkdown(tree, options) {
	const settings = options || {};
	/** @type {State} */
	const state = {
		associationId: association,
		bulletCurrent: void 0,
		bulletLastUsed: void 0,
		containerPhrasing: containerPhrasingBound,
		containerFlow: containerFlowBound,
		createTracker: track,
		compilePattern,
		enter,
		handlers: { ...handle },
		handle: void 0,
		indentLines,
		indexStack: [],
		join: [...join],
		options: {},
		safe: safeBound,
		stack: [],
		unsafe: [...unsafe]
	};
	configure(state, settings);
	if (state.options.tightDefinitions) state.join.push(joinDefinition);
	state.handle = zwitch("type", {
		invalid,
		unknown,
		handlers: state.handlers
	});
	let result = state.handle(phrasing$1(tree) ? {
		type: "root",
		children: [tree]
	} : tree, void 0, state, {
		before: "\n",
		after: "\n",
		now: {
			line: 1,
			column: 1
		},
		lineShift: 0
	});
	if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) result += "\n";
	return result;
	/**
	* Enter a construct.
	*
	* @type {Enter}
	*/
	function enter(name) {
		state.stack.push(name);
		return exit;
		/**
		* Exit a construct.
		*
		* @returns {undefined}
		*   Nothing.
		*/
		function exit() {
			state.stack.pop();
		}
	}
}
/**
* Handle an invalid value that cannot be processed.
*
* @param {unknown} value
*   Value.
* @returns {never}
*   Never.
* @throws {Error}
*   Always.
*/
function invalid(value) {
	throw new Error("Cannot handle value `" + value + "`, expected node");
}
/**
* Handle an unknown node.
*
* @param {unknown} value
*   Value.
* @returns {never}
*   Never.
* @throws {Error}
*   Always.
*/
function unknown(value) {
	throw new Error("Cannot handle unknown node `" + value.type + "`");
}
/**
* Join function for `tightDefinitions` option.
*
* @type {Join}
*/
function joinDefinition(left, right) {
	if (left.type === "definition" && left.type === right.type) return 0;
}
/**
* Serialize the children of a parent that contains phrasing children.
*
* These children will be joined flush together.
*
* @this {State}
*   Info passed around about the current state.
* @param {PhrasingParents} parent
*   Parent of flow nodes.
* @param {Info} info
*   Info on where we are in the document we are generating.
* @returns {string}
*   Serialized children, joined together.
*/
function containerPhrasingBound(parent, info) {
	return containerPhrasing(parent, this, info);
}
/**
* Serialize the children of a parent that contains flow children.
*
* These children will typically be joined by blank lines.
* What they are joined by exactly is defined by `Join` functions.
*
* @this {State}
*   Info passed around about the current state.
* @param {FlowParents} parent
*   Parent of flow nodes.
* @param {TrackFields} info
*   Info on where we are in the document we are generating.
* @returns {string}
*   Serialized children, joined by (blank) lines.
*/
function containerFlowBound(parent, info) {
	return containerFlow(parent, this, info);
}
/**
* Make a string safe for embedding in markdown constructs.
*
* In markdown, almost all punctuation characters can, in certain cases,
* result in something.
* Whether they do is highly subjective to where they happen and in what
* they happen.
*
* To solve this, `mdast-util-to-markdown` tracks:
*
* * Characters before and after something;
* * What “constructs” we are in.
*
* This information is then used by this function to escape or encode
* special characters.
*
* @this {State}
*   Info passed around about the current state.
* @param {string | null | undefined} value
*   Raw value to make safe.
* @param {SafeConfig} config
*   Configuration.
* @returns {string}
*   Serialized markdown safe for embedding.
*/
function safeBound(value, config) {
	return safe(this, value, config);
}
//#endregion
//#region node_modules/remark-stringify/lib/index.js
/**
* @typedef {import('mdast').Root} Root
* @typedef {import('mdast-util-to-markdown').Options} ToMarkdownOptions
* @typedef {import('unified').Compiler<Root, string>} Compiler
* @typedef {import('unified').Processor<undefined, undefined, undefined, Root, string>} Processor
*/
/**
* @typedef {Omit<ToMarkdownOptions, 'extensions'>} Options
*/
/**
* Add support for serializing to markdown.
*
* @param {Readonly<Options> | null | undefined} [options]
*   Configuration (optional).
* @returns {undefined}
*   Nothing.
*/
function remarkStringify(options) {
	/** @type {Processor} */
	const self = this;
	self.compiler = compiler;
	/**
	* @type {Compiler}
	*/
	function compiler(tree) {
		return toMarkdown(tree, {
			...self.data("settings"),
			...options,
			extensions: self.data("toMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/markdown-nodes.js
/** Collapse HTML-style inline whitespace; the serializer escapes generated text as Markdown. */
var text = (value) => ({
	type: "text",
	value: String(value ?? "").replace(/[\t\n\f\r ]+/g, " ")
});
/** Inline code fences are chosen by the serializer. */
var inlineCode = (value) => ({
	type: "inlineCode",
	value: String(value ?? "")
});
/** Construct a paragraph from phrasing nodes. */
var paragraph = (...children) => ({
	type: "paragraph",
	children
});
/** Construct an emphasized label. */
var strong = (...children) => ({
	type: "strong",
	children
});
/** Construct a section heading. */
var heading = (depth, ...children) => ({
	type: "heading",
	depth,
	children
});
/** Construct a list item that may contain nested blocks. */
var item = (...children) => ({
	type: "listItem",
	spread: false,
	children
});
/** Construct an unordered list. */
var list = (children) => ({
	type: "list",
	ordered: false,
	spread: false,
	children
});
/**
* Retain rehype-sanitize's protocol policy. The general sanitizeUrl helper allows
* additional schemes and excludes IRC/XMPP, so it is not compatible here.
*/
var safeUrl = (url) => {
	const normalized = url.replace(/[\u0000-\u0020\u007f-\u009f]/g, "");
	const protocol = /^([^/?#]*):/.exec(normalized)?.[1];
	return protocol && ![
		"http",
		"https",
		"irc",
		"ircs",
		"mailto",
		"xmpp"
	].includes(protocol.toLowerCase()) ? "" : url;
};
/** Links from OpenAPI metadata follow the same URL policy as descriptions. */
var link = (url, label) => ({
	type: "link",
	url: safeUrl(url),
	children: [text(label)]
});
/** Render a metadata label and value with the established nonbreaking separator. */
var field = (label, value) => item(paragraph(strong(text(`${label}:`)), text("\xA0"), value));
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/parse-description.js
var parser = unified().use(remarkParse).use(remarkGfm).freeze();
var containsHtml = (node) => node.type === "html" || "children" in node && node.children.some(containsHtml);
/** Remove images and unsafe URLs without converting ordinary Markdown to HTML. */
var clean = (node) => {
	if ("url" in node) node.url = safeUrl(node.url);
	if ("children" in node) {
		for (const child of node.children) clean(child);
		const previousLength = node.children.length;
		node.children = node.children.filter((child) => child.type !== "image" && child.type !== "imageReference" && !([
			"strong",
			"emphasis",
			"delete",
			"link",
			"linkReference",
			"paragraph",
			"heading",
			"blockquote",
			"list",
			"listItem"
		].includes(child.type) && "children" in child && child.children.every((descendant) => descendant.type === "text" && !descendant.value.trim())));
		if (node.children.length !== previousLength) {
			const first = node.children.at(0);
			const last = node.children.at(-1);
			if (first?.type === "text") first.value = first.value.trimStart();
			if (last?.type === "text") last.value = last.value.trimEnd();
		}
	}
	delete node.position;
};
/** Removed images must not leave their reference definitions or empty paragraphs behind. */
var pruneDefinitions = (tree) => {
	const links = /* @__PURE__ */ new Set();
	const footnotes = /* @__PURE__ */ new Set();
	const definitions = new Map(tree.children.filter((node) => node.type === "footnoteDefinition").map((node) => [node.identifier, node]));
	const collect = (node) => {
		if (node.type === "linkReference") links.add(node.identifier);
		if (node.type === "footnoteReference") footnotes.add(node.identifier);
		if ("children" in node) node.children.forEach(collect);
	};
	tree.children.filter((node) => node.type !== "footnoteDefinition").forEach(collect);
	for (const identifier of footnotes) definitions.get(identifier)?.children.forEach(collect);
	tree.children = tree.children.filter((node) => {
		if (node.type === "definition") return links.has(node.identifier);
		if (node.type === "footnoteDefinition") return footnotes.has(node.identifier);
		if (node.type === "paragraph") return node.children.some((child) => child.type !== "text" || child.value.trim());
		return true;
	});
};
/** Share parsing across pages while giving every rendered document its own reference namespace. */
var createDescriptionParser = () => {
	const cache = /* @__PURE__ */ new Map();
	const parse = async (value) => {
		const parsed = parser.parse(value);
		const tree = containsHtml(parsed) || /^\s*>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|SUCCESS)\]/im.test(value) ? await (await import("./parse-html-description-C3g4MUHx.js")).parseHtmlDescription(value) : parsed;
		clean(tree);
		pruneDefinitions(tree);
		return tree.children;
	};
	const namespace = (node, prefix) => {
		const copy = { ...node };
		if ("identifier" in copy) {
			copy.identifier = `${prefix}${copy.identifier}`;
			if ("label" in copy) copy.label = copy.identifier;
			if ("referenceType" in copy) copy.referenceType = "full";
		}
		if ("children" in copy) copy.children = copy.children.map((child) => namespace(child, prefix));
		return copy;
	};
	const hasReference = (node) => "identifier" in node || "children" in node && node.children.some(hasReference);
	return () => {
		const state = { nextId: 0 };
		return async (value) => {
			if (!value) return [];
			const prefix = `description-${state.nextId++}-`;
			const cached = cache.get(value) ?? parse(value);
			if (!cache.has(value)) {
				if (cache.size >= 256) cache.clear();
				cache.set(value, cached);
			}
			return (await cached).map((node) => hasReference(node) ? namespace(node, prefix) : node);
		};
	};
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/get-markdown-examples.js
/** Mirrors the depth at which `getExampleFromSchema` stops following nested schemas. */
var EXAMPLE_DEPTH = 10;
/**
* Generated examples repeat every shared schema at each place it is used, up to ten levels deep.
* A densely shared schema graph therefore produces billions of values, so larger examples are skipped.
* The largest generated examples in the Stripe, GitHub, and Cloudflare descriptions have about 7,600 values.
*/
var MAX_GENERATED_EXAMPLE_VALUES = 1e4;
/**
* Estimate how many values an example generated from this schema contains, stopping just past the limit.
* Counts are cached per schema and level, so this is linear in the size of the schema graph.
*/
var countGeneratedExampleValues = (root, limit = MAX_GENERATED_EXAMPLE_VALUES) => {
	const counts = /* @__PURE__ */ new WeakMap();
	const count = (input, level) => {
		if (level > EXAMPLE_DEPTH || !isObject(input)) return 1;
		const cached = counts.get(input)?.get(level);
		if (cached !== void 0) return cached;
		const schema = getResolvedRef(input, mergeSiblingReferences);
		if (!isObject(schema)) return 1;
		if (schema.example !== void 0 || Array.isArray(schema.examples) && schema.examples.length > 0) return 1;
		let total = 1;
		const add = (child) => {
			if (total <= limit) total += count(child, level + 1);
		};
		if (isObject(schema.properties)) Object.values(schema.properties).forEach(add);
		if (isObject(schema.patternProperties)) Object.values(schema.patternProperties).forEach(add);
		if (isObject(schema.additionalProperties)) add(schema.additionalProperties);
		if (schema.items !== void 0) add(schema.items);
		if (Array.isArray(schema.prefixItems)) schema.prefixItems.forEach(add);
		if (Array.isArray(schema.allOf)) schema.allOf.forEach(add);
		const variants = Array.isArray(schema.oneOf) ? schema.oneOf : Array.isArray(schema.anyOf) ? schema.anyOf : [];
		const nonNull = variants.find((variant) => {
			const resolved = getResolvedRef(variant, mergeSiblingReferences);
			return isObject(resolved) && resolved.type !== "null";
		});
		const candidates = isObject(schema.discriminator) && schema.discriminator.defaultMapping !== void 0 ? variants : [variants[0], nonNull];
		let variantCount = 0;
		for (const candidate of candidates) if (candidate !== void 0 && total <= limit && variantCount <= limit) variantCount = Math.max(variantCount, count(candidate, level + 1));
		total += variantCount;
		const levels = counts.get(input) ?? /* @__PURE__ */ new Map();
		levels.set(level, total);
		counts.set(input, levels);
		return total;
	};
	return count(root, 0);
};
/** Preserve supplied values; generate a fallback only when examples are not supplied. */
var getMarkdownExamples = (source, mediaType, mode, openapiVersion = "3.2.0", schemaOpenapiVersion = openapiVersion) => {
	if (source.example !== void 0) return [{ value: source.example }];
	if (source.examples && Object.keys(source.examples).length) return Object.entries(source.examples).flatMap(([name, reference]) => {
		const example = getResolvedRef(reference);
		if (!isObject(example)) return [];
		const metadata = {
			name,
			summary: typeof example.summary === "string" ? example.summary : void 0,
			description: typeof example.description === "string" ? example.description : void 0
		};
		if (example.value !== void 0) return [{
			...metadata,
			value: example.value
		}];
		if (/^3\.2\./.test(openapiVersion) && typeof example.serializedValue === "string") return [{
			...metadata,
			serializedValue: example.serializedValue
		}];
		if (typeof example.externalValue === "string") return [{
			...metadata,
			externalValue: example.externalValue
		}];
		if (/^3\.2\./.test(openapiVersion) && example.dataValue !== void 0) return [{
			...metadata,
			dataValue: example.dataValue
		}];
		return [];
	});
	const schema = getResolvedRef(source.schema);
	if (!isObject(schema)) return [];
	if (countGeneratedExampleValues(source.schema) > MAX_GENERATED_EXAMPLE_VALUES) return [{ omitted: true }];
	if (isXmlMediaType(mediaType)) {
		const result = getXmlBodyExample(source.schema, void 0, {
			mode,
			openapiVersion: schemaOpenapiVersion
		});
		return [result.xml === void 0 ? { error: "Unable to generate an XML example." } : { serializedValue: result.xml }];
	}
	const value = getExampleFromSchema(getResolvedRef(source.schema, mergeSiblingReferences), { mode });
	return value === void 0 ? [] : [{ value }];
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/render-examples.js
/** Render supplied examples before considering a schema-generated fallback. */
var renderExamples = async (source, description, mediaType = "application/json", mode, openapiVersion = "3.2.0", schemaOpenapiVersion = openapiVersion) => {
	const nodes = [];
	for (const example of getMarkdownExamples(source, mediaType, mode, openapiVersion, schemaOpenapiVersion)) {
		nodes.push(paragraph(strong(text(example.name ? `Example: ${example.name}` : "Example:"))));
		if ("omitted" in example) {
			nodes.push(paragraph(text("[Generated example omitted because it is too large]")));
			continue;
		}
		if (example.summary) nodes.push(paragraph(text(example.summary)));
		nodes.push(...await description(example.description));
		if ("error" in example) {
			nodes.push(paragraph(text(example.error)));
			continue;
		}
		if ("externalValue" in example) {
			nodes.push(paragraph(strong(text("External value:")), text(" "), link(example.externalValue, example.externalValue)));
			continue;
		}
		if ("serializedValue" in example) {
			nodes.push({
				type: "code",
				lang: isXmlMediaType(mediaType) ? "xml" : mediaType.includes("json") ? "json" : "text",
				value: example.serializedValue
			});
			continue;
		}
		const xml = isXmlMediaType(mediaType);
		const value = "dataValue" in example ? example.dataValue : example.value;
		if (xml && !source.schema && "value" in example && (value === null || typeof value !== "object")) {
			nodes.push({
				type: "code",
				lang: "xml",
				value: String(value)
			});
			continue;
		}
		const result = xml ? getXmlBodyExample(source.schema, example, {
			mode,
			openapiVersion: schemaOpenapiVersion
		}) : void 0;
		if (xml && result?.xml === void 0) {
			nodes.push(paragraph(text("Unable to generate an XML example.")));
			continue;
		}
		nodes.push({
			type: "code",
			lang: xml ? "xml" : "json",
			value: result?.xml ?? JSON.stringify(value, null, 2) ?? ""
		});
	}
	return nodes;
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/render-operation-details.js
/** Render response or multipart headers, whose names come from their containing map. */
var renderHeaders = async (headers, description, schemas, openapiVersion, schemaOpenapiVersion = openapiVersion) => {
	const entries = [];
	for (const [name, reference] of Object.entries(headers ?? {})) {
		if (name.toLowerCase() === "content-type") continue;
		if (!getResolvedRef(reference)) continue;
		const header = getResolvedRef(reference, mergeSiblingReferences);
		const blocks = [paragraph(strong(inlineCode(name)), text(header.required ? " (required)" : "")), ...await description(header.description)];
		if ("schema" in header && header.schema !== void 0) blocks.push(...schemas.render(header.schema));
		if ("example" in header || "examples" in header) blocks.push(...await renderExamples({
			example: header.example,
			examples: header.examples
		}, description, "application/json", void 0, openapiVersion, schemaOpenapiVersion));
		for (const [mediaType, content] of Object.entries("content" in header ? header.content ?? {} : {})) {
			blocks.push(paragraph(strong(text("Content-Type:")), text(` ${mediaType}`)));
			if (content.schema !== void 0) blocks.push(...schemas.render(content.schema));
			blocks.push(...await renderExamples(content, description, mediaType, void 0, openapiVersion, schemaOpenapiVersion));
		}
		entries.push(item(...blocks));
	}
	return entries.length ? [paragraph(strong(text("Headers:"))), list(entries)] : [];
};
/** Preserve explicit encoding settings, including false flags and part headers. */
var renderEncoding = async (encoding, mediaType, description, schemas, openapiVersion, schemaOpenapiVersion = openapiVersion) => {
	const multipart = mediaType.startsWith("multipart/");
	if (!multipart && mediaType !== "application/x-www-form-urlencoded") return [];
	const entries = [];
	for (const [name, entry] of Object.entries(encoding ?? {})) {
		const fields = [];
		for (const [key, label] of [
			["contentType", "Content-Type"],
			["style", "Style"],
			["explode", "Explode"],
			["allowReserved", "Allow reserved"]
		]) if (entry[key] !== void 0) fields.push(item(paragraph(text(`${label}: `), inlineCode(entry[key]))));
		const blocks = [paragraph(strong(inlineCode(name)))];
		if (fields.length) blocks.push(list(fields));
		if (multipart) blocks.push(...await renderHeaders(entry.headers, description, schemas, openapiVersion, schemaOpenapiVersion));
		entries.push(item(...blocks));
	}
	return entries.length ? [paragraph(strong(text("Encoding:"))), list(entries)] : [];
};
var formatValue = (value) => typeof value === "string" ? value : JSON.stringify(value) ?? "";
/** Render response link expressions as literal values, without evaluating them. */
var renderResponseLinks = async (links, description) => {
	const entries = [];
	for (const [name, reference] of Object.entries(links ?? {})) {
		if (!getResolvedRef(reference)) continue;
		const link = getResolvedRef(reference, mergeSiblingReferences);
		const blocks = [paragraph(strong(text(name))), ...await description(link.description)];
		if (link.operationId) blocks.push(paragraph(strong(text("Operation ID:")), text(" "), inlineCode(link.operationId)));
		if (link.operationRef) blocks.push(paragraph(strong(text("Operation reference:")), text(" "), inlineCode(link.operationRef)));
		const parameters = Object.entries(link.parameters ?? {});
		if (parameters.length) blocks.push(list(parameters.map(([name, value]) => item(paragraph(strong(text(`${name}:`)), text(" "), inlineCode(formatValue(value)))))));
		if (link.requestBody !== void 0) blocks.push(paragraph(strong(text("Request body:")), text(" "), inlineCode(formatValue(link.requestBody))));
		if (link.server) blocks.push(paragraph(strong(text("Server:")), text(" "), inlineCode(link.server.url)));
		entries.push(item(...blocks));
	}
	return entries.length ? [paragraph(strong(text("Links:"))), list(entries)] : [];
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/render-security.js
/** Preserve OR between requirements and AND between schemes within a requirement. */
var renderSecurity = async (requirements, schemes, description) => {
	if (!requirements) return [];
	const nodes = [heading(4, text("Authentication"))];
	if (!requirements.length) nodes.push(paragraph(text("No authentication required.")));
	for (const [index, requirement] of requirements.entries()) {
		if (index) nodes.push(paragraph(text("Or:")));
		const entries = Object.entries(requirement);
		if (!entries.length) {
			nodes.push(paragraph(text("No authentication required.")));
			continue;
		}
		const entriesNodes = [];
		for (const [name, scopes] of entries) {
			const blocks = [paragraph(strong(text(name)), ...scopes?.length ? [text(` Scopes: ${scopes.join(", ")}`)] : [])];
			const scheme = getResolvedRef(schemes?.[name]);
			if (scheme) {
				blocks.push({
					type: "code",
					value: JSON.stringify(scheme, null, 2)
				});
				blocks.push(...await description(scheme.description));
			}
			entriesNodes.push(item(...blocks));
		}
		nodes.push(list(entriesNodes));
	}
	return nodes;
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/render-operation.js
/** Render effective operation context without mutating the prepared document. */
var renderOperation = async (document, path, method, pathItem, operation, webhook, { description, schemas }) => {
	const displayMethod = method === method.toLowerCase() && isHttpMethod(method) ? method.toUpperCase() : method;
	const openapiVersion = document["x-original-oas-version"] ?? document.openapi;
	const stability = operation["x-scalar-stability"];
	const title = (operation.summary || `${displayMethod} ${path}`) + (stability ? ` (${stability})` : operation.deprecated ? " ⚠️ Deprecated" : "");
	const metadata = [field("Method", inlineCode(displayMethod)), field(webhook ? "Webhook" : "Path", inlineCode(path))];
	if (operation.operationId) metadata.push(field("Operation ID", inlineCode(operation.operationId)));
	if (operation.tags) metadata.push(field("Tags", text(operation.tags.join(", "))));
	if (stability) metadata.push(field("Stability", text(stability)));
	const nodes = [
		heading(3, text(title)),
		list(metadata),
		...await description(operation.description)
	];
	const servers = operation.servers ?? pathItem.servers ?? document.servers;
	if (servers?.length) {
		nodes.push(heading(4, text("Effective servers")));
		const serverItems = [];
		for (const server of servers) {
			const blocks = [paragraph(inlineCode(server.url)), ...await description(server.description)];
			const variables = Object.entries(server.variables ?? {});
			if (variables.length) blocks.push(list(variables.map(([name, variable]) => item(paragraph(text(`${name}: `), inlineCode(variable.default))))));
			serverItems.push(item(...blocks));
		}
		nodes.push(list(serverItems));
	}
	nodes.push(...await renderSecurity(operation.security ?? document.security, document.components?.securitySchemes, description));
	const parameters = /* @__PURE__ */ new Map();
	for (const reference of [...pathItem.parameters ?? [], ...operation.parameters ?? []]) {
		const parameter = getResolvedRef(reference, mergeSiblingReferences);
		if (parameter) parameters.set(`${parameter.in}:${parameter.name}`, parameter);
	}
	if (parameters.size) nodes.push(heading(4, text("Parameters")));
	for (const parameter of parameters.values()) {
		nodes.push(heading(5, inlineCode(parameter.name), text(`${parameter.required ? " required" : ""}${parameter.deprecated ? " deprecated" : ""}`)));
		const fields = [field("In", inlineCode(parameter.in))];
		if ("style" in parameter && parameter.style) fields.push(field("Style", inlineCode(parameter.style)));
		if ("explode" in parameter && typeof parameter.explode === "boolean") fields.push(field("Explode", inlineCode(parameter.explode)));
		if (parameter.allowEmptyValue) fields.push(field("Allow Empty Value", text("true")));
		if ("allowReserved" in parameter && parameter.allowReserved) fields.push(field("Allow Reserved", text("true")));
		nodes.push(list(fields), ...await description(parameter.description));
		if ("schema" in parameter && parameter.schema !== void 0) nodes.push(...schemas.render(parameter.schema));
		if ("example" in parameter || "examples" in parameter) nodes.push(...await renderExamples({
			example: parameter.example,
			examples: parameter.examples
		}, description, "application/json", "write", openapiVersion, document.openapi));
		for (const [mediaType, content] of Object.entries("content" in parameter ? parameter.content ?? {} : {})) {
			nodes.push(heading(6, text(`Content-Type: ${mediaType}`)));
			if (content.schema !== void 0) nodes.push(...schemas.render(content.schema));
			nodes.push(...await renderExamples(content, description, mediaType, "write", openapiVersion, document.openapi));
		}
	}
	const body = getResolvedRef(operation.requestBody, mergeSiblingReferences);
	if (body) {
		nodes.push(heading(4, text("Request Body")), ...await description(body.description));
		if (typeof body.required === "boolean") nodes.push(paragraph(strong(text("Required:")), text(" "), inlineCode(body.required)));
		for (const [mediaType, content] of Object.entries(body.content ?? {})) {
			nodes.push(heading(5, text(`Content-Type: ${mediaType}`)));
			if (content.schema !== void 0) nodes.push(...schemas.render(content.schema));
			nodes.push(...await renderExamples(content, description, mediaType, "write", openapiVersion, document.openapi));
			nodes.push(...await renderEncoding(content.encoding, mediaType, description, schemas, openapiVersion, document.openapi));
		}
	}
	const responses = Object.entries(operation.responses ?? {}).flatMap(([status, reference]) => {
		const response = getResolvedRef(reference, mergeSiblingReferences);
		return response ? [{
			status,
			response
		}] : [];
	});
	if (responses.length) nodes.push(heading(4, text("Responses")));
	for (const { status, response } of responses) {
		nodes.push(heading(5, text(`Status: ${status}${response.description ? ` ${response.description}` : ""}`)));
		nodes.push(...await renderHeaders(response.headers, description, schemas, openapiVersion, document.openapi), ...await renderResponseLinks(response.links, description));
		for (const [mediaType, content] of Object.entries(response.content ?? {})) {
			nodes.push(heading(6, text(`Content-Type: ${mediaType}`)));
			if (content.schema !== void 0) nodes.push(...schemas.render(content.schema));
			nodes.push(...await renderExamples(content, description, mediaType, "read", openapiVersion, document.openapi));
		}
	}
	return nodes;
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/render-schema.js
/** Guards against stack exhaustion. Past it, references to models point to their own section instead. */
var MAX_DEPTH = 64;
/**
* Deduplicated output is proportional to the schema graph, so only a pathological description
* (for example a YAML alias graph without references) reaches this.
*/
var MAX_NODES = 1e5;
/** Keywords that `render` expands, as opposed to annotations that `details` prints on one line. */
var structuralKeywords = /* @__PURE__ */ new Set([
	"allOf",
	"anyOf",
	"oneOf",
	"not",
	"properties",
	"required",
	"items",
	"additionalProperties",
	"discriminator",
	"minItems",
	"maxItems",
	"uniqueItems"
]);
/** Link bookkeeping that is not a sibling keyword of a reference. */
var referenceKeys = /* @__PURE__ */ new Set([
	"$ref",
	"$ref-value",
	"$global",
	"$status"
]);
var emphasis = (...children) => ({
	type: "emphasis",
	children
});
/** Prefer the component name, which is how model sections and other references identify the schema. */
var getReferenceName = (ref) => {
	const match = /^#\/components\/schemas\/([^/]+)$/.exec(ref);
	if (!match) return ref;
	try {
		return unescapeJsonPointer(match[1]);
	} catch {
		return ref;
	}
};
/** Only references that add nothing structural can be replaced by the schema they point to. */
var getSharedName = (input, view) => {
	const ref = isObject(input) ? input.$ref : void 0;
	if (typeof ref !== "string" || typeof view.schema !== "object") return void 0;
	if (Object.keys(input).some((key) => structuralKeywords.has(key))) return void 0;
	return Boolean(view.allOf?.length || view.anyOf?.length || view.oneOf?.length || view.properties.length) || view.not !== void 0 || view.items !== void 0 || view.additionalProperties !== void 0 ? getReferenceName(ref) : void 0;
};
/** Boolean targets still combine with adjacent schema keywords. */
var resolveMarkdownSchema = (input) => {
	const target = getResolvedRef(input);
	const merged = getResolvedRef(input, mergeSiblingReferences);
	if (typeof target !== "boolean") return merged;
	if (!isObject(merged) || !Object.keys(merged).some((key) => ![
		"$ref",
		"$ref-value",
		"$global",
		"$status"
	].includes(key))) return target;
	if (target) return merged;
	return {
		...merged,
		allOf: [false, ...Array.isArray(merged.allOf) ? merged.allOf : []]
	};
};
/** Keep merged reference siblings and sorted properties stable throughout an export. */
var createSchemaRenderer = ({ maxNodes = MAX_NODES } = {}) => {
	const views = /* @__PURE__ */ new WeakMap();
	const view = (input) => {
		const cached = typeof input === "object" ? views.get(input) : void 0;
		if (cached) return cached;
		const schema = resolveMarkdownSchema(input);
		const value = typeof schema === "object" ? schema : {};
		const required = new Set(value.required ?? []);
		const properties = Object.entries(value.properties ?? {}).filter(([, child]) => typeof child === "boolean" || child !== null && typeof child === "object").sort(([a], [b]) => Number(required.has(b)) - Number(required.has(a)) || a.localeCompare(b));
		const result = {
			...value,
			type: typeof schema === "boolean" ? schema ? "any" : "never" : value.type,
			schema,
			required,
			properties
		};
		result.name = getSharedName(input, result);
		if (typeof input === "object") views.set(input, result);
		return result;
	};
	const details = (value, property = false, hideDescription = false, showType = true) => {
		if (typeof value.schema === "boolean") return [text(value.schema ? "any (true schema)" : "never (false schema)")];
		const type = Array.isArray(value.type) ? value.type.join(" | ") : value.type;
		const nodes = showType && (type || property) ? [inlineCode(type || "object")] : [];
		const add = (label, entry) => {
			if (entry !== void 0) nodes.push(text(`${nodes.length ? ", " : ""}${label}: `), inlineCode(entry));
		};
		add("schema", value.name);
		add("format", value.format);
		if (value.enum) add("possible values", value.enum.map((entry) => JSON.stringify(entry)).join(", "));
		if (value.const !== void 0) add("const", JSON.stringify(value.const));
		if (value.default !== void 0) add("default", JSON.stringify(value.default));
		for (const key of [
			"minimum",
			"maximum",
			"exclusiveMinimum",
			"exclusiveMaximum",
			"multipleOf",
			"minLength",
			"maxLength",
			"pattern",
			"minProperties",
			"maxProperties"
		]) add(key, value[key]);
		for (const key of ["readOnly", "writeOnly"]) if (value[key]) nodes.push(text(`${nodes.length ? ", " : ""}${key}`));
		if (!hideDescription && value.description) nodes.push(text(`${nodes.length ? " — " : ""}${value.description}`));
		return nodes;
	};
	const forDocument = (models = {}) => {
		/** Shared schemas this document already expanded, with the name later references use. */
		const shown = /* @__PURE__ */ new Map();
		/** Models that the document renders in their own sections after the operations. */
		const sections = new Set(Object.values(models).map((model) => getResolvedRef(model) ?? model));
		let nodeCount = 0;
		/** Refer to a schema expanded elsewhere, keeping annotations the reference itself adds. */
		const reference = (input, value, options, name, location) => {
			const nodes = [];
			if (isObject(input) && Object.keys(input).some((key) => !referenceKeys.has(key)) && !options.hideDetails) {
				const annotations = details({
					...value,
					name: void 0
				}, false, options.hideDescription);
				if (annotations.length) nodes.push(paragraph(...annotations));
			}
			nodes.push(paragraph(emphasis(text("Schema "), inlineCode(name), text(` is shown ${location}.`))));
			return nodes;
		};
		const render = (input, depth = 0, ancestors = [], options = {}) => {
			const identity = getResolvedRef(input) ?? input;
			if (typeof identity === "object" && ancestors.includes(identity)) return [paragraph(emphasis(text("[Circular Reference]")))];
			const value = view(input);
			const sharedIdentity = isObject(input) && "$ref" in input && Object.keys(input).some((key) => structuralKeywords.has(key)) ? input : identity;
			const shared = typeof sharedIdentity === "object" && sharedIdentity !== null ? sharedIdentity : void 0;
			const name = options.name ?? value.name;
			if (shared && name !== void 0) {
				const previous = shown.get(shared);
				if (previous !== void 0) {
					const referenceOptions = options.name === void 0 ? options : {
						...options,
						hideDetails: true
					};
					return reference(input, value, referenceOptions, previous, "above");
				}
				if (value.name !== void 0 && options.name === void 0 && depth >= MAX_DEPTH && sections.has(shared)) return reference(input, value, options, value.name, "below under Schemas");
			}
			if (depth >= MAX_DEPTH) return [paragraph(text("[Maximum schema depth reached]"))];
			if (nodeCount >= maxNodes) return [paragraph(emphasis(text("[Schema output truncated]")))];
			nodeCount++;
			if (shared && name !== void 0 && !shown.has(shared)) shown.set(shared, name);
			if (typeof value.schema === "boolean") return options.hideDetails ? [] : [paragraph(...details(value))];
			const childAncestors = [...ancestors, identity];
			const nodes = [];
			for (const [key, label] of [
				["allOf", "All of:"],
				["anyOf", "Any of:"],
				["oneOf", "One of:"]
			]) if (value[key]?.length) nodes.push(paragraph(strong(text(label))), ...value[key].flatMap((child) => render(child, depth + 1, childAncestors)));
			if (value.not !== void 0) nodes.push(paragraph(strong(text("Not:"))), ...render(value.not, depth + 1, childAncestors));
			const array = value.type === "array" || value.items !== void 0;
			if (!options.hideDetails) {
				const impliedType = value.type === "object" && value.properties.length > 0 || value.type === "array" && value.items !== void 0;
				const annotations = details(value, false, options.hideDescription, !impliedType);
				if (annotations.length) nodes.push(paragraph(...annotations));
			}
			if (value.properties.length) {
				const properties = value.properties.map(([name, schema]) => {
					const child = view(schema);
					const label = [inlineCode(name)];
					if (value.required.has(name)) label.push(text(" (required)"));
					const blocks = [paragraph(strong(...label)), paragraph(...details(child, true))];
					blocks.push(...render(schema, depth + 1, childAncestors, {
						hideDetails: true,
						property: true
					}));
					return item(...blocks);
				});
				nodes.push(list(properties));
			}
			if (array && value.items !== void 0) nodes.push(paragraph(strong(text(options.property ? "Items:" : "Array of:"))), ...render(value.items, depth + 1, childAncestors));
			const constraints = [];
			if (value.minItems !== void 0) constraints.push(item(paragraph(text("Min items: "), inlineCode(value.minItems))));
			if (value.maxItems !== void 0) constraints.push(item(paragraph(text("Max items: "), inlineCode(value.maxItems))));
			if (value.uniqueItems !== void 0) constraints.push(item(paragraph(text("Unique items: "), inlineCode(value.uniqueItems))));
			if (constraints.length) nodes.push(list(constraints));
			if (value.additionalProperties !== void 0) nodes.push(paragraph(strong(text("Additional properties:"))), ...render(value.additionalProperties, depth + 1, childAncestors));
			if (value.discriminator) {
				nodes.push(paragraph(strong(text("Discriminator:")), text(" "), inlineCode(value.discriminator.propertyName)));
				const mappings = Object.entries(value.discriminator.mapping ?? {});
				if (mappings.length) nodes.push(list(mappings.map(([name, target]) => item(paragraph(inlineCode(name), text(": "), inlineCode(target))))));
			}
			return nodes;
		};
		return {
			view,
			render,
			beginSection: () => {
				nodeCount = 0;
			},
			forDocument
		};
	};
	return forDocument();
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/render-document.js
var serializer = unified().use(remarkGfm).use(remarkStringify, { bullet: "-" }).freeze();
/** Build Markdown directly, retaining caches only for this immutable document snapshot. */
var createDocumentRenderer = () => {
	const descriptions = createDescriptionParser();
	const schemaRenderer = createSchemaRenderer();
	return async (document) => {
		const description = descriptions();
		const schemas = schemaRenderer.forDocument(document.components?.schemas);
		const { info } = document;
		const metadata = [field("OpenAPI Version", inlineCode(document.openapi)), field("API Version", inlineCode(info.version))];
		if (info.termsOfService) metadata.push(field("Terms of service", link(info.termsOfService, info.termsOfService)));
		if (info.contact) {
			const contact = [text(info.contact.name ?? "")];
			metadata.push(item(paragraph(strong(text("Contact:")), text(" "), ...contact, ...info.contact.url ? [text(" "), link(info.contact.url, info.contact.url)] : [], ...info.contact.email ? [text(" "), link(`mailto:${info.contact.email}`, info.contact.email)] : [])));
		}
		if (info.license) metadata.push(field("License", info.license.url ? link(info.license.url, info.license.name ?? "") : text(info.license.name)));
		const nodes = [
			heading(1, text(info.title)),
			list(metadata),
			...await description(info.description)
		];
		if (document.servers?.length) {
			nodes.push(heading(2, text("Servers")));
			const servers = document.servers.map((server) => {
				const nested = [];
				if (server.description) nested.push(field("Description", text(server.description)));
				const variables = Object.entries(server.variables ?? {});
				if (variables.length) nested.push(item(paragraph(strong(text("Variables:"))), list(variables.map(([name, variable]) => item(paragraph(inlineCode(name), text(" (default: "), inlineCode(variable.default), text(`)${variable.description ? `: ${variable.description}` : ""}`)))))));
				const entry = field("URL", inlineCode(server.url));
				if (nested.length) entry.children.push(list(nested));
				return entry;
			});
			nodes.push(list(servers));
		}
		nodes.push(...await renderSecurity(document.security, document.components?.securitySchemes, description));
		if (document.tags?.length) {
			nodes.push(heading(2, text("Tags")));
			for (const tag of document.tags) {
				nodes.push(heading(3, text(tag.name)), ...await description(tag.description));
				if (tag.externalDocs) nodes.push(paragraph(link(tag.externalDocs.url, tag.externalDocs.description ?? tag.externalDocs.url)));
			}
		}
		const sections = [];
		const flush = () => {
			if (nodes.length) {
				const tree = {
					type: "root",
					children: nodes.splice(0)
				};
				sections.push(serializer.stringify(tree).trimEnd());
			}
		};
		flush();
		for (const group of [{
			title: "Operations",
			paths: document.paths,
			webhook: false
		}, {
			title: "Webhooks",
			paths: document.webhooks,
			webhook: true
		}]) {
			let hasOperations = false;
			for (const [path, reference] of Object.entries(group.paths ?? {})) {
				const pathItem = getResolvedPathItem(reference);
				if (!pathItem) continue;
				const entries = [];
				forEachPathItemOperation(reference, (method, operation) => {
					entries.push({
						method,
						operation: getResolvedRef(operation, mergeSiblingReferences)
					});
				});
				for (const { method, operation } of entries) {
					if (!hasOperations) {
						nodes.push(heading(2, text(group.title)));
						hasOperations = true;
					}
					schemas.beginSection();
					nodes.push(...await renderOperation(document, path, method, pathItem, operation, group.webhook, {
						description,
						schemas
					}));
					flush();
				}
			}
		}
		const models = Object.entries(document.components?.schemas ?? {});
		if (models.length) nodes.push(heading(2, text("Schemas")));
		for (const [name, schema] of models) {
			schemas.beginSection();
			const view = schemas.view(schema);
			nodes.push(heading(3, text(view.title ?? name)), list([view.type ? field("Type", inlineCode(Array.isArray(view.type) ? view.type.join(" | ") : view.type)) : item(paragraph(strong(text("Type:"))))]), ...await description(view.description), ...schemas.render(schema, 0, [], {
				hideDescription: true,
				name
			}));
			if (view.type === "object") nodes.push(...await renderExamples({ schema }, description, "application/json", void 0, document["x-original-oas-version"] ?? document.openapi));
			flush();
		}
		flush();
		return `${sections.join("\n\n")}\n`;
	};
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/select-document.js
var HTTP_METHOD_SET = new Set(HTTP_METHODS);
var normalizeHttpMethod = (method) => {
	const normalized = method.toLowerCase();
	if (HTTP_METHOD_SET.has(normalized)) return normalized;
	return null;
};
var normalizeJsonPointer = (pointer) => {
	if (/~(?![01])/.test(pointer)) throw new Error(`Invalid JSON pointer escape in "${pointer}"`);
	if (pointer.startsWith("#/")) return pointer.slice(1);
	if (pointer.startsWith("/")) return pointer;
	throw new Error(`Invalid JSON pointer "${pointer}". JSON pointers must start with "#/"`);
};
var parseJsonPointer = (pointer) => normalizeJsonPointer(pointer).slice(1).split("/").map((segment) => segment.replaceAll("~1", "/").replaceAll("~0", "~"));
var getOperationSelectorFromPointer = (pointer) => {
	const segments = parseJsonPointer(pointer);
	if (segments[0] !== "paths" || !(segments.length === 3 || segments.length === 4 && segments[2] === "additionalOperations")) throw new Error(`JSON pointer "${pointer}" must target an operation object under "/paths/{path}/{method}"`);
	const path = segments[1];
	const method = segments.length === 4 ? segments[3] : segments[2];
	if (!path || !method || (segments.length === 3 ? !HTTP_METHOD_SET.has(method) : HTTP_METHOD_SET.has(method))) throw new Error(`JSON pointer "${pointer}" must target an operation object under "/paths/{path}/{method}"`);
	return {
		path,
		method
	};
};
var getPathEntries = (document) => {
	const paths = document.paths;
	if (!isObject(paths)) return [];
	return Object.entries(paths).flatMap(([path, pathItemRef]) => {
		const pathItem = getResolvedPathItem(pathItemRef);
		return pathItem ? [[path, pathItem]] : [];
	});
};
/** Keep path metadata while excluding every unselected fixed or additional operation. */
var filterPathItemOperations = (pathItem, methods) => {
	const selected = Object.fromEntries(Object.entries(pathItem).filter(([key]) => !HTTP_METHOD_SET.has(key) && key !== "additionalOperations"));
	forEachPathItemOperation(pathItem, (method, operation) => {
		if (methods.includes(method)) setPathItemOperation(selected, method, operation);
	});
	return selected;
};
/** Exact authored methods take precedence over the legacy uppercase fixed-method aliases. */
var resolveMethod = (pathItem, method) => getPathItemOperation(pathItem, method) ? method : normalizeHttpMethod(method);
var findOperationByPathAndMethod = (document, selector) => {
	const method = resolveMethod(getResolvedPathItem(document.paths?.[selector.path]), selector.method);
	if (!method) throw new Error(`Invalid HTTP method "${selector.method}". Supported methods: ${HTTP_METHODS.join(", ")}`);
	const pathItemRef = document.paths?.[selector.path];
	if (!getPathItemOperation(pathItemRef, method)) throw new Error(`Operation not found for path "${selector.path}" and method "${method.toUpperCase()}"`);
	return {
		path: selector.path,
		method
	};
};
var findOperationsByOperationId = (document, operationId) => getPathEntries(document).flatMap(([path, pathItem]) => {
	const matches = [];
	forEachPathItemOperation(pathItem, (method, operation) => {
		if (getResolvedRef(operation)?.operationId === operationId) matches.push({
			path,
			method
		});
	});
	return matches;
});
var resolveOperationMatch = (document, selector) => {
	if ("pointer" in selector) {
		const match = getOperationSelectorFromPointer(selector.pointer);
		if (!getPathItemOperation(document.paths?.[match.path], match.method)) throw new Error(`Operation not found at JSON pointer "${selector.pointer}"`);
		return match;
	}
	if ("operationId" in selector) {
		const matches = findOperationsByOperationId(document, selector.operationId);
		if (!matches.length) throw new Error(`Operation with operationId "${selector.operationId}" was not found`);
		if (matches.length > 1) {
			const uniqueCandidates = matches.map(({ path, method }) => `"${method.toUpperCase()} ${path}"`);
			throw new Error(`Multiple operations found for operationId "${selector.operationId}". Use { path, method } instead. Matches: ${uniqueCandidates.join(", ")}`);
		}
		return matches[0];
	}
	return findOperationByPathAndMethod(document, selector);
};
var filterDocumentByOperation = (document, selector) => {
	const match = resolveOperationMatch(document, selector);
	const pathItem = getPathEntries(document).find(([path]) => path === match.path)?.[1];
	if (!pathItem) throw new Error(`Operation not found for path "${match.path}" and method "${match.method.toUpperCase()}"`);
	return {
		...document,
		paths: { [match.path]: filterPathItemOperations(pathItem, [match.method]) }
	};
};
/** Scope after resolving references and migrating older documents. */
var selectDocument = (document, options = {}) => {
	if (!isObject(options)) throw new Error("Render options must be an object");
	const keys = Object.keys(options).filter((key) => options[key] !== void 0);
	if (!keys.length) return document;
	if (keys.length !== 1 || ![
		"operation",
		"tag",
		"model",
		"webhook",
		"introduction"
	].includes(keys[0])) throw new Error("Specify exactly one of operation, tag, model, webhook, or introduction");
	if (options.introduction !== void 0 && options.introduction !== true) throw new Error("Introduction selector must be true");
	for (const key of ["tag", "model"]) if (options[key] !== void 0 && (typeof options[key] !== "string" || !options[key].length)) throw new Error(`${key} selector must be a non-empty string`);
	if (options.operation !== void 0) {
		const selector = options.operation;
		if (!isObject(selector) || !(Object.keys(selector).length === 1 && ("operationId" in selector ? typeof selector.operationId === "string" && selector.operationId.length : "pointer" in selector && typeof selector.pointer === "string" && selector.pointer.length) || Object.keys(selector).length === 2 && "path" in selector && typeof selector.path === "string" && "method" in selector && typeof selector.method === "string")) throw new Error("Invalid operation selector. Use { path, method }, { operationId }, or { pointer }");
	}
	const selected = {
		...document,
		paths: {},
		webhooks: {},
		tags: []
	};
	const modelRoots = [];
	if (options.operation) selected.paths = filterDocumentByOperation(document, options.operation).paths;
	if (options.tag !== void 0) {
		const metadata = document.tags?.filter((tag) => tag.name === options.tag) ?? [];
		if (metadata.length > 1) throw new Error(`Multiple tags found for "${options.tag}"`);
		selected.tags = metadata.length ? metadata : [{ name: options.tag }];
		for (const [path, item] of getPathEntries(document)) {
			const methods = [];
			forEachPathItemOperation(item, (method, operation) => {
				if (getResolvedRef(operation)?.tags?.includes(options.tag)) methods.push(method);
			});
			if (methods.length) selected.paths[path] = filterPathItemOperations(item, methods);
		}
		if (!metadata.length && !Object.keys(selected.paths ?? {}).length) throw new Error(`Tag "${options.tag}" was not found`);
	}
	if (options.model !== void 0) {
		const schema = document.components?.schemas?.[options.model];
		if (schema === void 0 || !Object.hasOwn(document.components?.schemas ?? {}, options.model)) throw new Error(`Model "${options.model}" was not found`);
		modelRoots.push(schema);
	}
	if (options.webhook !== void 0) {
		const selector = options.webhook;
		if (!isObject(selector) || typeof selector.name !== "string" || !selector.name || typeof selector.method !== "string" || Object.keys(selector).length !== 2) throw new Error("Invalid webhook selector. Use { name, method }");
		const item = getResolvedPathItem(document.webhooks?.[selector.name]);
		const method = resolveMethod(item, selector.method);
		if (!method) throw new Error(`Invalid HTTP method "${selector.method}"`);
		if (!item || !getPathItemOperation(item, method)) throw new Error(`Webhook "${selector.name}" with method "${method.toUpperCase()}" was not found`);
		selected.webhooks = { [selector.name]: filterPathItemOperations(item, [method]) };
	}
	const securityNames = /* @__PURE__ */ new Set();
	const tagNames = /* @__PURE__ */ new Set();
	for (const items of [selected.paths, selected.webhooks]) for (const [path, itemRef] of Object.entries(items ?? {})) {
		const item = getResolvedPathItem(itemRef);
		const scoped = {
			...item,
			additionalOperations: item.additionalOperations ? { ...item.additionalOperations } : void 0,
			parameters: void 0,
			servers: void 0
		};
		forEachPathItemOperation(item, (method, operationRef) => {
			const operation = getResolvedRef(operationRef);
			if (!operation) return;
			const parameters = /* @__PURE__ */ new Map();
			for (const ref of [...item.parameters ?? [], ...operation.parameters ?? []]) {
				const parameter = getResolvedRef(ref);
				if (parameter) parameters.set(`${parameter.in}:${parameter.name}`, ref);
			}
			const security = operation.security ?? document.security ?? [];
			for (const requirement of security) for (const name of Object.keys(requirement)) securityNames.add(name);
			for (const name of operation.tags ?? []) tagNames.add(name);
			setPathItemOperation(scoped, method, {
				...operation,
				parameters: [...parameters.values()],
				servers: operation.servers ?? item.servers ?? document.servers,
				security,
				tags: options.tag !== void 0 ? [options.tag] : operation.tags
			});
		});
		items[path] = scoped;
	}
	if (options.operation || options.webhook) selected.tags = document.tags?.filter((tag) => tagNames.has(tag.name)) ?? [];
	if (options.introduction) for (const requirement of document.security ?? []) for (const name of Object.keys(requirement)) securityNames.add(name);
	else {
		selected.servers = [];
		selected.security = void 0;
	}
	const schemas = document.components?.schemas ?? {};
	const needed = new Set(options.model !== void 0 ? [options.model] : []);
	const visited = /* @__PURE__ */ new WeakSet();
	const references = /* @__PURE__ */ new Set();
	const opaqueValues = /* @__PURE__ */ new Set([
		"example",
		"examples",
		"default",
		"enum",
		"const",
		"value",
		"dataValue"
	]);
	const namedMaps = /* @__PURE__ */ new Set([
		"paths",
		"webhooks",
		"responses",
		"content",
		"headers",
		"links",
		"encoding",
		"variables",
		"parameters",
		"requestBodies",
		"securitySchemes",
		"pathItems",
		"callbacks",
		"mediaTypes",
		"additionalOperations",
		"schemas",
		"properties",
		"patternProperties",
		"$defs",
		"definitions",
		"dependentSchemas"
	]);
	const visit = (value, namedLevels = 0) => {
		if (!value || typeof value !== "object" || visited.has(value)) return;
		visited.add(value);
		if (!namedLevels && "$ref" in value && typeof value.$ref === "string") {
			const ref = value.$ref;
			if (!references.has(ref)) {
				references.add(ref);
				if (ref.startsWith("#/components/schemas/")) {
					const name = parseJsonPointer(ref)[2];
					if (Object.hasOwn(schemas, name)) {
						needed.add(name);
						visit(schemas[name]);
					}
				}
				visit(getResolvedRef(value), namedLevels);
			}
		}
		for (const [key, child] of Object.entries(value)) if (key !== "$ref-value" && (namedLevels || !opaqueValues.has(key) && !key.startsWith("x-"))) {
			const childNamedLevels = namedLevels ? namedLevels - 1 : key === "callbacks" ? 2 : namedMaps.has(key) ? 1 : 0;
			visit(child, childNamedLevels);
		}
	};
	visit({
		paths: selected.paths,
		webhooks: selected.webhooks
	});
	for (const root of modelRoots) visit(root);
	selected.components = {
		...document.components,
		schemas: Object.fromEntries(Object.entries(schemas).filter(([name]) => needed.has(name))),
		securitySchemes: Object.fromEntries(Object.entries(document.components?.securitySchemes ?? {}).filter(([name]) => securityNames.has(name)))
	};
	return selected;
};
//#endregion
//#region node_modules/@scalar/openapi-to-markdown/dist/browser.js
/**
* Convert an OpenAPI document from the workspace store to Markdown in the browser.
* References must already be resolved by the store. This entry point does not load
* files, fetch URLs, or migrate raw API descriptions.
*/
var createMarkdownFromOpenApi = async (document, options) => await createDocumentRenderer()(selectDocument(document, options));
//#endregion
export { createMarkdownFromOpenApi };
