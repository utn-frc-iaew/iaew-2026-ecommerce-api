import { i as __toESM, t as __commonJSMin } from "./rolldown-runtime-B-lAHAz2.js";
import { D as diffWordsWithSpace, j as diffChars } from "./libesm-BwxW1sB7.js";
//#region node_modules/diff2html/lib-esm/types.js
var LineType;
(function(LineType) {
	LineType["INSERT"] = "insert";
	LineType["DELETE"] = "delete";
	LineType["CONTEXT"] = "context";
})(LineType || (LineType = {}));
var OutputFormatType = {
	LINE_BY_LINE: "line-by-line",
	SIDE_BY_SIDE: "side-by-side"
};
var LineMatchingType = {
	LINES: "lines",
	WORDS: "words",
	NONE: "none"
};
var DiffStyleType = {
	WORD: "word",
	CHAR: "char"
};
var ColorSchemeType;
(function(ColorSchemeType) {
	ColorSchemeType["AUTO"] = "auto";
	ColorSchemeType["DARK"] = "dark";
	ColorSchemeType["LIGHT"] = "light";
})(ColorSchemeType || (ColorSchemeType = {}));
//#endregion
//#region node_modules/diff2html/lib-esm/utils.js
var regex = RegExp("[" + [
	"-",
	"[",
	"]",
	"/",
	"{",
	"}",
	"(",
	")",
	"*",
	"+",
	"?",
	".",
	"\\",
	"^",
	"$",
	"|"
].join("\\") + "]", "g");
function escapeForRegExp(str) {
	return str.replace(regex, "\\$&");
}
function unifyPath(path) {
	return path ? path.replace(/\\/g, "/") : path;
}
function hashCode(text) {
	let i, chr, len;
	let hash = 0;
	for (i = 0, len = text.length; i < len; i++) {
		chr = text.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0;
	}
	return hash;
}
function max(arr) {
	const length = arr.length;
	let max = -Infinity;
	for (let i = 0; i < length; i++) max = Math.max(max, arr[i]);
	return max;
}
//#endregion
//#region node_modules/diff2html/lib-esm/diff-parser.js
function getExtension(filename, language) {
	const filenameParts = filename.split(".");
	return filenameParts.length > 1 ? filenameParts[filenameParts.length - 1] : language;
}
function startsWithAny(str, prefixes) {
	return prefixes.reduce((startsWith, prefix) => startsWith || str.startsWith(prefix), false);
}
var baseDiffFilenamePrefixes = [
	"a/",
	"b/",
	"i/",
	"w/",
	"c/",
	"o/"
];
function getFilename(line, linePrefix, extraPrefix) {
	const prefixes = extraPrefix !== void 0 ? [...baseDiffFilenamePrefixes, extraPrefix] : baseDiffFilenamePrefixes;
	const [, filename = ""] = (linePrefix ? new RegExp(`^${escapeForRegExp(linePrefix)} "?(.+?)"?$`) : /* @__PURE__ */ new RegExp("^\"?(.+?)\"?$")).exec(line) || [];
	const matchingPrefix = prefixes.find((p) => filename.indexOf(p) === 0);
	return (matchingPrefix ? filename.slice(matchingPrefix.length) : filename).replace(/\s+\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)? [+-]\d{4}.*$/, "");
}
function getSrcFilename(line, srcPrefix) {
	return getFilename(line, "---", srcPrefix);
}
function getDstFilename(line, dstPrefix) {
	return getFilename(line, "+++", dstPrefix);
}
function parse$1(diffInput, config = {}) {
	const files = [];
	let currentFile = null;
	let currentBlock = null;
	let oldLine = null;
	let oldLine2 = null;
	let newLine = null;
	let possibleOldName = null;
	let possibleNewName = null;
	const oldFileNameHeader = "--- ";
	const newFileNameHeader = "+++ ";
	const hunkHeaderPrefix = "@@";
	const oldMode = /^old mode (\d{6})/;
	const newMode = /^new mode (\d{6})/;
	const deletedFileMode = /^deleted file mode (\d{6})/;
	const newFileMode = /^new file mode (\d{6})/;
	const copyFrom = /^copy from "?(.+)"?/;
	const copyTo = /^copy to "?(.+)"?/;
	const renameFrom = /^rename from "?(.+)"?/;
	const renameTo = /^rename to "?(.+)"?/;
	const similarityIndex = /^similarity index (\d+)%/;
	const dissimilarityIndex = /^dissimilarity index (\d+)%/;
	const index = /^index ([\da-z]+)\.\.([\da-z]+)\s*(\d{6})?/;
	const binaryFiles = /^Binary files (.*) and (.*) differ/;
	const binaryDiff = /^GIT binary patch/;
	const combinedIndex = /^index ([\da-z]+),([\da-z]+)\.\.([\da-z]+)/;
	const combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
	const combinedNewFile = /^new file mode (\d{6})/;
	const combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;
	const diffLines = diffInput.replace(/\\ No newline at end of file/g, "").replace(/\r\n?/g, "\n").split("\n");
	function saveBlock() {
		if (currentBlock !== null && currentFile !== null) {
			currentFile.blocks.push(currentBlock);
			currentBlock = null;
		}
	}
	function saveFile() {
		if (currentFile !== null) {
			if (!currentFile.oldName && possibleOldName !== null) currentFile.oldName = possibleOldName;
			if (!currentFile.newName && possibleNewName !== null) currentFile.newName = possibleNewName;
			if (currentFile.newName) {
				files.push(currentFile);
				currentFile = null;
			}
		}
		possibleOldName = null;
		possibleNewName = null;
	}
	function startFile() {
		saveBlock();
		saveFile();
		currentFile = {
			blocks: [],
			deletedLines: 0,
			addedLines: 0
		};
	}
	function startBlock(line) {
		saveBlock();
		let values;
		if (currentFile !== null) {
			if (values = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@.*/.exec(line)) {
				currentFile.isCombined = false;
				oldLine = parseInt(values[1], 10);
				newLine = parseInt(values[2], 10);
			} else if (values = /^@@@ -(\d+)(?:,\d+)? -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@@.*/.exec(line)) {
				currentFile.isCombined = true;
				oldLine = parseInt(values[1], 10);
				oldLine2 = parseInt(values[2], 10);
				newLine = parseInt(values[3], 10);
			} else {
				if (line.startsWith(hunkHeaderPrefix)) console.error("Failed to parse lines, starting in 0!");
				oldLine = 0;
				newLine = 0;
				currentFile.isCombined = false;
			}
		}
		currentBlock = {
			lines: [],
			oldStartLine: oldLine,
			oldStartLine2: oldLine2,
			newStartLine: newLine,
			header: line
		};
	}
	function createLine(line) {
		if (currentFile === null || currentBlock === null || oldLine === null || newLine === null) return;
		const currentLine = { content: line };
		const addedPrefixes = currentFile.isCombined ? [
			"+ ",
			" +",
			"++"
		] : ["+"];
		const deletedPrefixes = currentFile.isCombined ? [
			"- ",
			" -",
			"--"
		] : ["-"];
		if (startsWithAny(line, addedPrefixes)) {
			currentFile.addedLines++;
			currentLine.type = LineType.INSERT;
			currentLine.oldNumber = void 0;
			currentLine.newNumber = newLine++;
		} else if (startsWithAny(line, deletedPrefixes)) {
			currentFile.deletedLines++;
			currentLine.type = LineType.DELETE;
			currentLine.oldNumber = oldLine++;
			currentLine.newNumber = void 0;
		} else {
			currentLine.type = LineType.CONTEXT;
			currentLine.oldNumber = oldLine++;
			currentLine.newNumber = newLine++;
		}
		currentBlock.lines.push(currentLine);
	}
	function existHunkHeader(line, lineIdx) {
		let idx = lineIdx;
		while (idx < diffLines.length - 3) {
			if (line.startsWith("diff")) return false;
			if (diffLines[idx].startsWith(oldFileNameHeader) && diffLines[idx + 1].startsWith(newFileNameHeader) && diffLines[idx + 2].startsWith(hunkHeaderPrefix)) return true;
			idx++;
		}
		return false;
	}
	diffLines.forEach((line, lineIndex) => {
		if (!line || line.startsWith("*")) return;
		let values;
		const prevLine = diffLines[lineIndex - 1];
		const nxtLine = diffLines[lineIndex + 1];
		const afterNxtLine = diffLines[lineIndex + 2];
		if (line.startsWith("diff --git") || line.startsWith("diff --combined")) {
			startFile();
			if (values = /^diff --git "?([a-ciow]\/.+)"? "?([a-ciow]\/.+)"?/.exec(line)) {
				possibleOldName = getFilename(values[1], void 0, config.dstPrefix);
				possibleNewName = getFilename(values[2], void 0, config.srcPrefix);
			}
			if (currentFile === null) throw new Error("Where is my file !!!");
			currentFile.isGitDiff = true;
			return;
		}
		if (line.startsWith("Binary files") && !(currentFile === null || currentFile === void 0 ? void 0 : currentFile.isGitDiff)) {
			startFile();
			if (values = /^Binary files "?([a-ciow]\/.+)"? and "?([a-ciow]\/.+)"? differ/.exec(line)) {
				possibleOldName = getFilename(values[1], void 0, config.dstPrefix);
				possibleNewName = getFilename(values[2], void 0, config.srcPrefix);
			}
			if (currentFile === null) throw new Error("Where is my file !!!");
			currentFile.isBinary = true;
			return;
		}
		if (!currentFile || !currentFile.isGitDiff && currentFile && line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader) && afterNxtLine.startsWith(hunkHeaderPrefix)) startFile();
		if (currentFile === null || currentFile === void 0 ? void 0 : currentFile.isTooBig) return;
		if (currentFile && (typeof config.diffMaxChanges === "number" && currentFile.addedLines + currentFile.deletedLines > config.diffMaxChanges || typeof config.diffMaxLineLength === "number" && line.length > config.diffMaxLineLength)) {
			currentFile.isTooBig = true;
			currentFile.addedLines = 0;
			currentFile.deletedLines = 0;
			currentFile.blocks = [];
			currentBlock = null;
			startBlock(typeof config.diffTooBigMessage === "function" ? config.diffTooBigMessage(files.length) : "Diff too big to be displayed");
			return;
		}
		if (line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader) || line.startsWith(newFileNameHeader) && prevLine.startsWith(oldFileNameHeader)) {
			if (currentFile && !currentFile.oldName && line.startsWith("--- ") && (values = getSrcFilename(line, config.srcPrefix))) {
				currentFile.oldName = values;
				currentFile.language = getExtension(currentFile.oldName, currentFile.language);
				return;
			}
			if (currentFile && !currentFile.newName && line.startsWith("+++ ") && (values = getDstFilename(line, config.dstPrefix))) {
				currentFile.newName = values;
				currentFile.language = getExtension(currentFile.newName, currentFile.language);
				return;
			}
		}
		if (currentFile && (line.startsWith(hunkHeaderPrefix) || currentFile.isGitDiff && currentFile.oldName && currentFile.newName && !currentBlock)) {
			startBlock(line);
			return;
		}
		if (currentBlock && (line.startsWith("+") || line.startsWith("-") || line.startsWith(" "))) {
			createLine(line);
			return;
		}
		const doesNotExistHunkHeader = !existHunkHeader(line, lineIndex);
		if (currentFile === null) throw new Error("Where is my file !!!");
		if (values = oldMode.exec(line)) currentFile.oldMode = values[1];
		else if (values = newMode.exec(line)) currentFile.newMode = values[1];
		else if (values = deletedFileMode.exec(line)) {
			currentFile.deletedFileMode = values[1];
			currentFile.isDeleted = true;
		} else if (values = newFileMode.exec(line)) {
			currentFile.newFileMode = values[1];
			currentFile.isNew = true;
		} else if (values = copyFrom.exec(line)) {
			if (doesNotExistHunkHeader) currentFile.oldName = values[1];
			currentFile.isCopy = true;
		} else if (values = copyTo.exec(line)) {
			if (doesNotExistHunkHeader) currentFile.newName = values[1];
			currentFile.isCopy = true;
		} else if (values = renameFrom.exec(line)) {
			if (doesNotExistHunkHeader) currentFile.oldName = values[1];
			currentFile.isRename = true;
		} else if (values = renameTo.exec(line)) {
			if (doesNotExistHunkHeader) currentFile.newName = values[1];
			currentFile.isRename = true;
		} else if (values = binaryFiles.exec(line)) {
			currentFile.isBinary = true;
			currentFile.oldName = getFilename(values[1], void 0, config.srcPrefix);
			currentFile.newName = getFilename(values[2], void 0, config.dstPrefix);
			startBlock("Binary file");
		} else if (binaryDiff.test(line)) {
			currentFile.isBinary = true;
			startBlock(line);
		} else if (values = similarityIndex.exec(line)) currentFile.unchangedPercentage = parseInt(values[1], 10);
		else if (values = dissimilarityIndex.exec(line)) currentFile.changedPercentage = parseInt(values[1], 10);
		else if (values = index.exec(line)) {
			currentFile.checksumBefore = values[1];
			currentFile.checksumAfter = values[2];
			if (values[3]) currentFile.mode = values[3];
		} else if (values = combinedIndex.exec(line)) {
			currentFile.checksumBefore = [values[2], values[3]];
			currentFile.checksumAfter = values[1];
		} else if (values = combinedMode.exec(line)) {
			currentFile.oldMode = [values[2], values[3]];
			currentFile.newMode = values[1];
		} else if (values = combinedNewFile.exec(line)) {
			currentFile.newFileMode = values[1];
			currentFile.isNew = true;
		} else if (values = combinedDeletedFile.exec(line)) {
			currentFile.deletedFileMode = values[1];
			currentFile.isDeleted = true;
		}
	});
	saveBlock();
	saveFile();
	return files;
}
//#endregion
//#region node_modules/diff2html/lib-esm/rematch.js
function levenshtein(a, b) {
	if (a.length === 0) return b.length;
	if (b.length === 0) return a.length;
	const matrix = [];
	let i = 0;
	for (; i <= b.length; i++) matrix[i] = [i];
	let j = 0;
	for (; j <= a.length; j++) matrix[0][j] = j;
	for (i = 1; i <= b.length; i++) for (j = 1; j <= a.length; j++) if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
	else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
	return matrix[b.length][a.length];
}
function newDistanceFn(str) {
	return (x, y) => {
		const xValue = str(x).trim();
		const yValue = str(y).trim();
		return levenshtein(xValue, yValue) / (xValue.length + yValue.length);
	};
}
function newMatcherFn(distance) {
	function findBestMatch(a, b, cache = /* @__PURE__ */ new Map()) {
		let bestMatchDist = Infinity;
		let bestMatch;
		for (let i = 0; i < a.length; ++i) for (let j = 0; j < b.length; ++j) {
			const cacheKey = JSON.stringify([a[i], b[j]]);
			let md;
			if (!(cache.has(cacheKey) && (md = cache.get(cacheKey)))) {
				md = distance(a[i], b[j]);
				cache.set(cacheKey, md);
			}
			if (md < bestMatchDist) {
				bestMatchDist = md;
				bestMatch = {
					indexA: i,
					indexB: j,
					score: bestMatchDist
				};
			}
		}
		return bestMatch;
	}
	function group(a, b, level = 0, cache = /* @__PURE__ */ new Map()) {
		const bm = findBestMatch(a, b, cache);
		if (!bm || a.length + b.length < 3) return [[a, b]];
		const a1 = a.slice(0, bm.indexA);
		const b1 = b.slice(0, bm.indexB);
		const aMatch = [a[bm.indexA]];
		const bMatch = [b[bm.indexB]];
		const tailA = bm.indexA + 1;
		const tailB = bm.indexB + 1;
		const a2 = a.slice(tailA);
		const b2 = b.slice(tailB);
		const group1 = group(a1, b1, level + 1, cache);
		const groupMatch = group(aMatch, bMatch, level + 1, cache);
		const group2 = group(a2, b2, level + 1, cache);
		let result = groupMatch;
		if (bm.indexA > 0 || bm.indexB > 0) result = group1.concat(result);
		if (a.length > tailA || b.length > tailB) result = result.concat(group2);
		return result;
	}
	return group;
}
//#endregion
//#region node_modules/diff2html/lib-esm/render-utils.js
var CSSLineClass = {
	INSERTS: "d2h-ins",
	DELETES: "d2h-del",
	CONTEXT: "d2h-cntx",
	INFO: "d2h-info",
	INSERT_CHANGES: "d2h-ins d2h-change",
	DELETE_CHANGES: "d2h-del d2h-change"
};
var defaultRenderConfig = {
	matching: LineMatchingType.NONE,
	matchWordsThreshold: .25,
	maxLineLengthHighlight: 1e4,
	diffStyle: DiffStyleType.WORD,
	colorScheme: ColorSchemeType.LIGHT
};
var separator = "/";
var distance = newDistanceFn((change) => change.value);
var matcher = newMatcherFn(distance);
function isDevNullName(name) {
	return name.indexOf("dev/null") !== -1;
}
function removeInsElements(line) {
	return line.replace(/(<ins[^>]*>((.|\n)*?)<\/ins>)/g, "");
}
function removeDelElements(line) {
	return line.replace(/(<del[^>]*>((.|\n)*?)<\/del>)/g, "");
}
function toCSSClass(lineType) {
	switch (lineType) {
		case LineType.CONTEXT: return CSSLineClass.CONTEXT;
		case LineType.INSERT: return CSSLineClass.INSERTS;
		case LineType.DELETE: return CSSLineClass.DELETES;
	}
}
function colorSchemeToCss(colorScheme) {
	switch (colorScheme) {
		case ColorSchemeType.DARK: return "d2h-dark-color-scheme";
		case ColorSchemeType.AUTO: return "d2h-auto-color-scheme";
		case ColorSchemeType.LIGHT:
		default: return "d2h-light-color-scheme";
	}
}
function prefixLength(isCombined) {
	return isCombined ? 2 : 1;
}
function escapeForHtml(str) {
	return str.slice(0).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function deconstructLine(line, isCombined, escape = true) {
	const indexToSplit = prefixLength(isCombined);
	return {
		prefix: line.substring(0, indexToSplit),
		content: escape ? escapeForHtml(line.substring(indexToSplit)) : line.substring(indexToSplit)
	};
}
function filenameDiff(file) {
	const oldFilename = unifyPath(file.oldName);
	const newFilename = unifyPath(file.newName);
	if (oldFilename !== newFilename && !isDevNullName(oldFilename) && !isDevNullName(newFilename)) {
		const prefixPaths = [];
		const suffixPaths = [];
		const oldFilenameParts = oldFilename.split(separator);
		const newFilenameParts = newFilename.split(separator);
		const oldFilenamePartsSize = oldFilenameParts.length;
		const newFilenamePartsSize = newFilenameParts.length;
		let i = 0;
		let j = oldFilenamePartsSize - 1;
		let k = newFilenamePartsSize - 1;
		while (i < j && i < k) if (oldFilenameParts[i] === newFilenameParts[i]) {
			prefixPaths.push(newFilenameParts[i]);
			i += 1;
		} else break;
		while (j > i && k > i) if (oldFilenameParts[j] === newFilenameParts[k]) {
			suffixPaths.unshift(newFilenameParts[k]);
			j -= 1;
			k -= 1;
		} else break;
		const finalPrefix = prefixPaths.join(separator);
		const finalSuffix = suffixPaths.join(separator);
		const oldRemainingPath = oldFilenameParts.slice(i, j + 1).join(separator);
		const newRemainingPath = newFilenameParts.slice(i, k + 1).join(separator);
		if (finalPrefix.length && finalSuffix.length) return finalPrefix + "/{" + oldRemainingPath + " → " + newRemainingPath + "}/" + finalSuffix;
		else if (finalPrefix.length) return finalPrefix + "/{" + oldRemainingPath + " → " + newRemainingPath + "}";
		else if (finalSuffix.length) return "{" + oldRemainingPath + " → " + newRemainingPath + "}/" + finalSuffix;
		return oldFilename + " → " + newFilename;
	} else if (!isDevNullName(newFilename)) return newFilename;
	else return oldFilename;
}
function getHtmlId(file) {
	return `d2h-${hashCode(filenameDiff(file)).toString().slice(-6)}`;
}
function getFileIcon(file) {
	let templateName = "file-changed";
	if (file.isRename) templateName = "file-renamed";
	else if (file.isCopy) templateName = "file-renamed";
	else if (file.isNew) templateName = "file-added";
	else if (file.isDeleted) templateName = "file-deleted";
	else if (file.newName !== file.oldName) templateName = "file-renamed";
	return templateName;
}
function diffHighlight(diffLine1, diffLine2, isCombined, config = {}) {
	const { matching, maxLineLengthHighlight, matchWordsThreshold, diffStyle } = Object.assign(Object.assign({}, defaultRenderConfig), config);
	const line1 = deconstructLine(diffLine1, isCombined, false);
	const line2 = deconstructLine(diffLine2, isCombined, false);
	if (line1.content.length > maxLineLengthHighlight || line2.content.length > maxLineLengthHighlight) return {
		oldLine: {
			prefix: line1.prefix,
			content: escapeForHtml(line1.content)
		},
		newLine: {
			prefix: line2.prefix,
			content: escapeForHtml(line2.content)
		}
	};
	const diff = diffStyle === "char" ? diffChars(line1.content, line2.content) : diffWordsWithSpace(line1.content, line2.content);
	const changedWords = [];
	if (diffStyle === "word" && matching === "words") {
		const removed = diff.filter((element) => element.removed);
		matcher(diff.filter((element) => element.added), removed).forEach((chunk) => {
			if (chunk[0].length === 1 && chunk[1].length === 1) {
				if (distance(chunk[0][0], chunk[1][0]) < matchWordsThreshold) {
					changedWords.push(chunk[0][0]);
					changedWords.push(chunk[1][0]);
				}
			}
		});
	}
	const highlightedLine = diff.reduce((highlightedLine, part) => {
		const elemType = part.added ? "ins" : part.removed ? "del" : null;
		const addClass = changedWords.indexOf(part) > -1 ? " class=\"d2h-change\"" : "";
		const escapedValue = escapeForHtml(part.value);
		return elemType !== null ? `${highlightedLine}<${elemType}${addClass}>${escapedValue}</${elemType}>` : `${highlightedLine}${escapedValue}`;
	}, "");
	return {
		oldLine: {
			prefix: line1.prefix,
			content: removeInsElements(highlightedLine)
		},
		newLine: {
			prefix: line2.prefix,
			content: removeDelElements(highlightedLine)
		}
	};
}
//#endregion
//#region node_modules/diff2html/lib-esm/file-list-renderer.js
var baseTemplatesPath$2 = "file-summary";
var iconsBaseTemplatesPath$2 = "icon";
var defaultFileListRendererConfig = { colorScheme: defaultRenderConfig.colorScheme };
var FileListRenderer = class {
	constructor(hoganUtils, config = {}) {
		this.hoganUtils = hoganUtils;
		this.config = Object.assign(Object.assign({}, defaultFileListRendererConfig), config);
	}
	render(diffFiles) {
		const files = diffFiles.map((file) => this.hoganUtils.render(baseTemplatesPath$2, "line", {
			fileHtmlId: getHtmlId(file),
			oldName: file.oldName,
			newName: file.newName,
			fileName: filenameDiff(file),
			deletedLines: "-" + file.deletedLines,
			addedLines: "+" + file.addedLines
		}, { fileIcon: this.hoganUtils.template(iconsBaseTemplatesPath$2, getFileIcon(file)) })).join("\n");
		return this.hoganUtils.render(baseTemplatesPath$2, "wrapper", {
			colorScheme: colorSchemeToCss(this.config.colorScheme),
			filesNumber: diffFiles.length,
			files
		});
	}
};
//#endregion
//#region node_modules/diff2html/lib-esm/line-by-line-renderer.js
var defaultLineByLineRendererConfig = Object.assign(Object.assign({}, defaultRenderConfig), {
	renderNothingWhenEmpty: false,
	matchingMaxComparisons: 2500,
	maxLineSizeInBlockForComparison: 200
});
var genericTemplatesPath$1 = "generic";
var baseTemplatesPath$1 = "line-by-line";
var iconsBaseTemplatesPath$1 = "icon";
var tagsBaseTemplatesPath$1 = "tag";
var LineByLineRenderer = class {
	constructor(hoganUtils, config = {}) {
		this.hoganUtils = hoganUtils;
		this.config = Object.assign(Object.assign({}, defaultLineByLineRendererConfig), config);
	}
	render(diffFiles) {
		const diffsHtml = diffFiles.map((file) => {
			let diffs;
			if (file.blocks.length) diffs = this.generateFileHtml(file);
			else diffs = this.generateEmptyDiff();
			return this.makeFileDiffHtml(file, diffs);
		}).join("\n");
		return this.hoganUtils.render(genericTemplatesPath$1, "wrapper", {
			colorScheme: colorSchemeToCss(this.config.colorScheme),
			content: diffsHtml
		});
	}
	makeFileDiffHtml(file, diffs) {
		if (this.config.renderNothingWhenEmpty && Array.isArray(file.blocks) && file.blocks.length === 0) return "";
		const fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath$1, "file-diff");
		const filePathTemplate = this.hoganUtils.template(genericTemplatesPath$1, "file-path");
		const fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath$1, "file");
		const fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath$1, getFileIcon(file));
		return fileDiffTemplate.render({
			file,
			fileHtmlId: getHtmlId(file),
			diffs,
			filePath: filePathTemplate.render({ fileDiffName: filenameDiff(file) }, {
				fileIcon: fileIconTemplate,
				fileTag: fileTagTemplate
			})
		});
	}
	generateEmptyDiff() {
		return this.hoganUtils.render(genericTemplatesPath$1, "empty-diff", {
			contentClass: "d2h-code-line",
			CSSLineClass
		});
	}
	generateFileHtml(file) {
		const matcher = newMatcherFn(newDistanceFn((e) => deconstructLine(e.content, file.isCombined).content));
		return file.blocks.map((block) => {
			let lines = this.hoganUtils.render(genericTemplatesPath$1, "block-header", {
				CSSLineClass,
				blockHeader: file.isTooBig ? block.header : escapeForHtml(block.header),
				lineClass: "d2h-code-linenumber",
				contentClass: "d2h-code-line"
			});
			this.applyLineGroupping(block).forEach(([contextLines, oldLines, newLines]) => {
				if (oldLines.length && newLines.length && !contextLines.length) this.applyRematchMatching(oldLines, newLines, matcher).map(([oldLines, newLines]) => {
					const { left, right } = this.processChangedLines(file, file.isCombined, oldLines, newLines);
					lines += left;
					lines += right;
				});
				else if (contextLines.length) contextLines.forEach((line) => {
					const { prefix, content } = deconstructLine(line.content, file.isCombined);
					lines += this.generateSingleLineHtml(file, {
						type: CSSLineClass.CONTEXT,
						prefix,
						content,
						oldNumber: line.oldNumber,
						newNumber: line.newNumber
					});
				});
				else if (oldLines.length || newLines.length) {
					const { left, right } = this.processChangedLines(file, file.isCombined, oldLines, newLines);
					lines += left;
					lines += right;
				} else console.error("Unknown state reached while processing groups of lines", contextLines, oldLines, newLines);
			});
			return lines;
		}).join("\n");
	}
	applyLineGroupping(block) {
		const blockLinesGroups = [];
		let oldLines = [];
		let newLines = [];
		for (let i = 0; i < block.lines.length; i++) {
			const diffLine = block.lines[i];
			if (diffLine.type !== LineType.INSERT && newLines.length || diffLine.type === LineType.CONTEXT && oldLines.length > 0) {
				blockLinesGroups.push([
					[],
					oldLines,
					newLines
				]);
				oldLines = [];
				newLines = [];
			}
			if (diffLine.type === LineType.CONTEXT) blockLinesGroups.push([
				[diffLine],
				[],
				[]
			]);
			else if (diffLine.type === LineType.INSERT && oldLines.length === 0) blockLinesGroups.push([
				[],
				[],
				[diffLine]
			]);
			else if (diffLine.type === LineType.INSERT && oldLines.length > 0) newLines.push(diffLine);
			else if (diffLine.type === LineType.DELETE) oldLines.push(diffLine);
		}
		if (oldLines.length || newLines.length) {
			blockLinesGroups.push([
				[],
				oldLines,
				newLines
			]);
			oldLines = [];
			newLines = [];
		}
		return blockLinesGroups;
	}
	applyRematchMatching(oldLines, newLines, matcher) {
		const comparisons = oldLines.length * newLines.length;
		const maxLineSizeInBlock = max(oldLines.concat(newLines).map((elem) => elem.content.length));
		return comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words") ? matcher(oldLines, newLines) : [[oldLines, newLines]];
	}
	processChangedLines(file, isCombined, oldLines, newLines) {
		const fileHtml = {
			right: "",
			left: ""
		};
		const maxLinesNumber = Math.max(oldLines.length, newLines.length);
		for (let i = 0; i < maxLinesNumber; i++) {
			const oldLine = oldLines[i];
			const newLine = newLines[i];
			const diff = oldLine !== void 0 && newLine !== void 0 ? diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
			const preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? Object.assign(Object.assign({}, diff !== void 0 ? {
				prefix: diff.oldLine.prefix,
				content: diff.oldLine.content,
				type: CSSLineClass.DELETE_CHANGES
			} : Object.assign(Object.assign({}, deconstructLine(oldLine.content, isCombined)), { type: toCSSClass(oldLine.type) })), {
				oldNumber: oldLine.oldNumber,
				newNumber: oldLine.newNumber
			}) : void 0;
			const preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? Object.assign(Object.assign({}, diff !== void 0 ? {
				prefix: diff.newLine.prefix,
				content: diff.newLine.content,
				type: CSSLineClass.INSERT_CHANGES
			} : Object.assign(Object.assign({}, deconstructLine(newLine.content, isCombined)), { type: toCSSClass(newLine.type) })), {
				oldNumber: newLine.oldNumber,
				newNumber: newLine.newNumber
			}) : void 0;
			const { left, right } = this.generateLineHtml(file, preparedOldLine, preparedNewLine);
			fileHtml.left += left;
			fileHtml.right += right;
		}
		return fileHtml;
	}
	generateLineHtml(file, oldLine, newLine) {
		return {
			left: this.generateSingleLineHtml(file, oldLine),
			right: this.generateSingleLineHtml(file, newLine)
		};
	}
	generateSingleLineHtml(file, line) {
		if (line === void 0) return "";
		const lineNumberHtml = this.hoganUtils.render(baseTemplatesPath$1, "numbers", {
			oldNumber: line.oldNumber || "",
			newNumber: line.newNumber || ""
		});
		return this.hoganUtils.render(genericTemplatesPath$1, "line", {
			type: line.type,
			lineClass: "d2h-code-linenumber",
			contentClass: "d2h-code-line",
			prefix: line.prefix === " " ? "&nbsp;" : line.prefix,
			content: line.content,
			lineNumber: lineNumberHtml,
			line,
			file
		});
	}
};
//#endregion
//#region node_modules/diff2html/lib-esm/side-by-side-renderer.js
var defaultSideBySideRendererConfig = Object.assign(Object.assign({}, defaultRenderConfig), {
	renderNothingWhenEmpty: false,
	matchingMaxComparisons: 2500,
	maxLineSizeInBlockForComparison: 200
});
var genericTemplatesPath = "generic";
var baseTemplatesPath = "side-by-side";
var iconsBaseTemplatesPath = "icon";
var tagsBaseTemplatesPath = "tag";
var SideBySideRenderer = class {
	constructor(hoganUtils, config = {}) {
		this.hoganUtils = hoganUtils;
		this.config = Object.assign(Object.assign({}, defaultSideBySideRendererConfig), config);
	}
	render(diffFiles) {
		const diffsHtml = diffFiles.map((file) => {
			let diffs;
			if (file.blocks.length) diffs = this.generateFileHtml(file);
			else diffs = this.generateEmptyDiff();
			return this.makeFileDiffHtml(file, diffs);
		}).join("\n");
		return this.hoganUtils.render(genericTemplatesPath, "wrapper", {
			colorScheme: colorSchemeToCss(this.config.colorScheme),
			content: diffsHtml
		});
	}
	makeFileDiffHtml(file, diffs) {
		if (this.config.renderNothingWhenEmpty && Array.isArray(file.blocks) && file.blocks.length === 0) return "";
		const fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath, "file-diff");
		const filePathTemplate = this.hoganUtils.template(genericTemplatesPath, "file-path");
		const fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath, "file");
		const fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, getFileIcon(file));
		return fileDiffTemplate.render({
			file,
			fileHtmlId: getHtmlId(file),
			diffs,
			filePath: filePathTemplate.render({ fileDiffName: filenameDiff(file) }, {
				fileIcon: fileIconTemplate,
				fileTag: fileTagTemplate
			})
		});
	}
	generateEmptyDiff() {
		return {
			right: "",
			left: this.hoganUtils.render(genericTemplatesPath, "empty-diff", {
				contentClass: "d2h-code-side-line",
				CSSLineClass
			})
		};
	}
	generateFileHtml(file) {
		const matcher = newMatcherFn(newDistanceFn((e) => deconstructLine(e.content, file.isCombined).content));
		return file.blocks.map((block) => {
			const fileHtml = {
				left: this.makeHeaderHtml(block.header, file),
				right: this.makeHeaderHtml("")
			};
			this.applyLineGroupping(block).forEach(([contextLines, oldLines, newLines]) => {
				if (oldLines.length && newLines.length && !contextLines.length) this.applyRematchMatching(oldLines, newLines, matcher).map(([oldLines, newLines]) => {
					const { left, right } = this.processChangedLines(file.isCombined, oldLines, newLines);
					fileHtml.left += left;
					fileHtml.right += right;
				});
				else if (contextLines.length) contextLines.forEach((line) => {
					const { prefix, content } = deconstructLine(line.content, file.isCombined);
					const { left, right } = this.generateLineHtml({
						type: CSSLineClass.CONTEXT,
						prefix,
						content,
						number: line.oldNumber
					}, {
						type: CSSLineClass.CONTEXT,
						prefix,
						content,
						number: line.newNumber
					});
					fileHtml.left += left;
					fileHtml.right += right;
				});
				else if (oldLines.length || newLines.length) {
					const { left, right } = this.processChangedLines(file.isCombined, oldLines, newLines);
					fileHtml.left += left;
					fileHtml.right += right;
				} else console.error("Unknown state reached while processing groups of lines", contextLines, oldLines, newLines);
			});
			return fileHtml;
		}).reduce((accomulated, html) => {
			return {
				left: accomulated.left + html.left,
				right: accomulated.right + html.right
			};
		}, {
			left: "",
			right: ""
		});
	}
	applyLineGroupping(block) {
		const blockLinesGroups = [];
		let oldLines = [];
		let newLines = [];
		for (let i = 0; i < block.lines.length; i++) {
			const diffLine = block.lines[i];
			if (diffLine.type !== LineType.INSERT && newLines.length || diffLine.type === LineType.CONTEXT && oldLines.length > 0) {
				blockLinesGroups.push([
					[],
					oldLines,
					newLines
				]);
				oldLines = [];
				newLines = [];
			}
			if (diffLine.type === LineType.CONTEXT) blockLinesGroups.push([
				[diffLine],
				[],
				[]
			]);
			else if (diffLine.type === LineType.INSERT && oldLines.length === 0) blockLinesGroups.push([
				[],
				[],
				[diffLine]
			]);
			else if (diffLine.type === LineType.INSERT && oldLines.length > 0) newLines.push(diffLine);
			else if (diffLine.type === LineType.DELETE) oldLines.push(diffLine);
		}
		if (oldLines.length || newLines.length) {
			blockLinesGroups.push([
				[],
				oldLines,
				newLines
			]);
			oldLines = [];
			newLines = [];
		}
		return blockLinesGroups;
	}
	applyRematchMatching(oldLines, newLines, matcher) {
		const comparisons = oldLines.length * newLines.length;
		const maxLineSizeInBlock = max(oldLines.concat(newLines).map((elem) => elem.content.length));
		return comparisons < this.config.matchingMaxComparisons && maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison && (this.config.matching === "lines" || this.config.matching === "words") ? matcher(oldLines, newLines) : [[oldLines, newLines]];
	}
	makeHeaderHtml(blockHeader, file) {
		return this.hoganUtils.render(genericTemplatesPath, "block-header", {
			CSSLineClass,
			blockHeader: (file === null || file === void 0 ? void 0 : file.isTooBig) ? blockHeader : escapeForHtml(blockHeader),
			lineClass: "d2h-code-side-linenumber",
			contentClass: "d2h-code-side-line"
		});
	}
	processChangedLines(isCombined, oldLines, newLines) {
		const fileHtml = {
			right: "",
			left: ""
		};
		const maxLinesNumber = Math.max(oldLines.length, newLines.length);
		for (let i = 0; i < maxLinesNumber; i++) {
			const oldLine = oldLines[i];
			const newLine = newLines[i];
			const diff = oldLine !== void 0 && newLine !== void 0 ? diffHighlight(oldLine.content, newLine.content, isCombined, this.config) : void 0;
			const preparedOldLine = oldLine !== void 0 && oldLine.oldNumber !== void 0 ? Object.assign(Object.assign({}, diff !== void 0 ? {
				prefix: diff.oldLine.prefix,
				content: diff.oldLine.content,
				type: CSSLineClass.DELETE_CHANGES
			} : Object.assign(Object.assign({}, deconstructLine(oldLine.content, isCombined)), { type: toCSSClass(oldLine.type) })), { number: oldLine.oldNumber }) : void 0;
			const preparedNewLine = newLine !== void 0 && newLine.newNumber !== void 0 ? Object.assign(Object.assign({}, diff !== void 0 ? {
				prefix: diff.newLine.prefix,
				content: diff.newLine.content,
				type: CSSLineClass.INSERT_CHANGES
			} : Object.assign(Object.assign({}, deconstructLine(newLine.content, isCombined)), { type: toCSSClass(newLine.type) })), { number: newLine.newNumber }) : void 0;
			const { left, right } = this.generateLineHtml(preparedOldLine, preparedNewLine);
			fileHtml.left += left;
			fileHtml.right += right;
		}
		return fileHtml;
	}
	generateLineHtml(oldLine, newLine) {
		return {
			left: this.generateSingleHtml(oldLine),
			right: this.generateSingleHtml(newLine)
		};
	}
	generateSingleHtml(line) {
		const lineClass = "d2h-code-side-linenumber";
		const contentClass = "d2h-code-side-line";
		return this.hoganUtils.render(genericTemplatesPath, "line", {
			type: (line === null || line === void 0 ? void 0 : line.type) || `${CSSLineClass.CONTEXT} d2h-emptyplaceholder`,
			lineClass: line !== void 0 ? lineClass : `${lineClass} d2h-code-side-emptyplaceholder`,
			contentClass: line !== void 0 ? contentClass : `${contentClass} d2h-code-side-emptyplaceholder`,
			prefix: (line === null || line === void 0 ? void 0 : line.prefix) === " " ? "&nbsp;" : line === null || line === void 0 ? void 0 : line.prefix,
			content: line === null || line === void 0 ? void 0 : line.content,
			lineNumber: line === null || line === void 0 ? void 0 : line.number
		});
	}
};
//#endregion
//#region node_modules/@profoundlogic/hogan/lib/compiler.js
var require_compiler = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function(Hogan) {
		var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
		Hogan.tags = {
			"#": 1,
			"^": 2,
			"<": 3,
			"$": 4,
			"/": 5,
			"!": 6,
			">": 7,
			"=": 8,
			"_v": 9,
			"{": 10,
			"&": 11,
			"_t": 12
		};
		Hogan.scan = function scan(text, delimiters) {
			var len = text.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = "", tokens = [], seenTag = false, i = 0, lineStart = 0, otag = "{{", ctag = "}}";
			function addBuf() {
				if (buf.length > 0) {
					tokens.push({
						tag: "_t",
						text: new String(buf)
					});
					buf = "";
				}
			}
			function lineIsWhitespace() {
				var isAllWhitespace = true;
				for (var j = lineStart; j < tokens.length; j++) {
					isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags["_v"] || tokens[j].tag == "_t" && tokens[j].text.match(rIsWhitespace) === null;
					if (!isAllWhitespace) return false;
				}
				return isAllWhitespace;
			}
			function filterLine(haveSeenTag, noNewLine) {
				addBuf();
				if (haveSeenTag && lineIsWhitespace()) {
					for (var j = lineStart, next; j < tokens.length; j++) if (tokens[j].text) {
						if ((next = tokens[j + 1]) && next.tag == ">") next.indent = tokens[j].text.toString();
						tokens.splice(j, 1);
					}
				} else if (!noNewLine) tokens.push({ tag: "\n" });
				seenTag = false;
				lineStart = tokens.length;
			}
			function changeDelimiters(text, index) {
				var close = "=" + ctag, closeIndex = text.indexOf(close, index), delimiters = trim(text.substring(text.indexOf("=", index) + 1, closeIndex)).split(" ");
				otag = delimiters[0];
				ctag = delimiters[delimiters.length - 1];
				return closeIndex + close.length - 1;
			}
			if (delimiters) {
				delimiters = delimiters.split(" ");
				otag = delimiters[0];
				ctag = delimiters[1];
			}
			for (i = 0; i < len; i++) if (state == IN_TEXT) {
				if (tagChange(otag, text, i)) {
					--i;
					addBuf();
					state = IN_TAG_TYPE;
				} else if (text.charAt(i) == "\n") filterLine(seenTag);
				else buf += text.charAt(i);
			} else if (state == IN_TAG_TYPE) {
				i += otag.length - 1;
				tag = Hogan.tags[text.charAt(i + 1)];
				tagType = tag ? text.charAt(i + 1) : "_v";
				if (tagType == "=") {
					i = changeDelimiters(text, i);
					state = IN_TEXT;
				} else {
					if (tag) i++;
					state = IN_TAG;
				}
				seenTag = i;
			} else if (tagChange(ctag, text, i)) {
				tokens.push({
					tag: tagType,
					n: trim(buf),
					otag,
					ctag,
					i: tagType == "/" ? seenTag - otag.length : i + ctag.length
				});
				buf = "";
				i += ctag.length - 1;
				state = IN_TEXT;
				if (tagType == "{") {
					if (ctag == "}}") i++;
					else cleanTripleStache(tokens[tokens.length - 1]);
				}
			} else buf += text.charAt(i);
			filterLine(seenTag, true);
			return tokens;
		};
		function cleanTripleStache(token) {
			if (token.n.substr(token.n.length - 1) === "}") token.n = token.n.substring(0, token.n.length - 1);
		}
		function trim(s) {
			if (s.trim) return s.trim();
			return s.replace(/^\s*|\s*$/g, "");
		}
		function tagChange(tag, text, index) {
			if (text.charAt(index) != tag.charAt(0)) return false;
			for (var i = 1, l = tag.length; i < l; i++) if (text.charAt(index + i) != tag.charAt(i)) return false;
			return true;
		}
		var allowedInSuper = {
			"_t": true,
			"\n": true,
			"$": true,
			"/": true
		};
		function buildTree(tokens, kind, stack, customTags) {
			var instructions = [], opener = null, tail = null, token = null;
			tail = stack[stack.length - 1];
			while (tokens.length > 0) {
				token = tokens.shift();
				if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) throw new Error("Illegal content in < super tag.");
				if (Hogan.tags[token.tag] <= Hogan.tags["$"] || isOpener(token, customTags)) {
					stack.push(token);
					token.nodes = buildTree(tokens, token.tag, stack, customTags);
				} else if (token.tag == "/") {
					if (stack.length === 0) throw new Error("Closing tag without opener: /" + token.n);
					opener = stack.pop();
					if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) throw new Error("Nesting error: " + opener.n + " vs. " + token.n);
					opener.end = token.i;
					return instructions;
				} else if (token.tag == "\n") token.last = tokens.length == 0 || tokens[0].tag == "\n";
				instructions.push(token);
			}
			if (stack.length > 0) throw new Error("missing closing tag: " + stack.pop().n);
			return instructions;
		}
		function isOpener(token, tags) {
			for (var i = 0, l = tags.length; i < l; i++) if (tags[i].o == token.n) {
				token.tag = "#";
				return true;
			}
		}
		function isCloser(close, open, tags) {
			for (var i = 0, l = tags.length; i < l; i++) if (tags[i].c == close && tags[i].o == open) return true;
		}
		function stringifySubstitutions(obj) {
			var items = [];
			for (var key in obj) items.push("\"" + esc(key) + "\": function(c,p,t,i) {" + obj[key] + "}");
			return "{ " + items.join(",") + " }";
		}
		function stringifyPartials(codeObj) {
			var partials = [];
			for (var key in codeObj.partials) partials.push("\"" + esc(key) + "\":{name:\"" + esc(codeObj.partials[key].name) + "\", " + stringifyPartials(codeObj.partials[key]) + "}");
			return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
		}
		Hogan.stringify = function(codeObj, text, options) {
			return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
		};
		var serialNo = 0;
		Hogan.generate = function(tree, text, options) {
			serialNo = 0;
			var context = {
				code: "",
				subs: {},
				partials: {}
			};
			Hogan.walk(tree, context);
			if (options.asString) return this.stringify(context, text, options);
			return this.makeTemplate(context, text, options);
		};
		Hogan.wrapMain = function(code) {
			return "var t=this;t.b(i=i||\"\");" + code + "return t.fl();";
		};
		Hogan.template = Hogan.Template;
		Hogan.makeTemplate = function(codeObj, text, options) {
			var template = this.makePartials(codeObj);
			template.code = new Function("c", "p", "i", this.wrapMain(codeObj.code));
			return new this.template(template, text, this, options);
		};
		Hogan.makePartials = function(codeObj) {
			var key, template = {
				subs: {},
				partials: codeObj.partials,
				name: codeObj.name
			};
			for (key in template.partials) template.partials[key] = this.makePartials(template.partials[key]);
			for (key in codeObj.subs) template.subs[key] = new Function("c", "p", "t", "i", codeObj.subs[key]);
			return template;
		};
		function esc(s) {
			return s.replace(rSlash, "\\\\").replace(rQuot, "\\\"").replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029");
		}
		function chooseMethod(s) {
			return ~s.indexOf(".") ? "d" : "f";
		}
		function createPartial(node, context) {
			var sym = "<" + (context.prefix || "") + node.n + serialNo++;
			context.partials[sym] = {
				name: node.n,
				partials: {}
			};
			context.code += "t.b(t.rp(\"" + esc(sym) + "\",c,p,\"" + (node.indent || "") + "\"));";
			return sym;
		}
		Hogan.codegen = {
			"#": function(node, context) {
				context.code += "if(t.s(t." + chooseMethod(node.n) + "(\"" + esc(node.n) + "\",c,p,1),c,p,0," + node.i + "," + node.end + ",\"" + node.otag + " " + node.ctag + "\")){t.rs(c,p,function(c,p,t){";
				Hogan.walk(node.nodes, context);
				context.code += "});c.pop();}";
			},
			"^": function(node, context) {
				context.code += "if(!t.s(t." + chooseMethod(node.n) + "(\"" + esc(node.n) + "\",c,p,1),c,p,1,0,0,\"\")){";
				Hogan.walk(node.nodes, context);
				context.code += "};";
			},
			">": createPartial,
			"<": function(node, context) {
				var ctx = {
					partials: {},
					code: "",
					subs: {},
					inPartial: true
				};
				Hogan.walk(node.nodes, ctx);
				var template = context.partials[createPartial(node, context)];
				template.subs = ctx.subs;
				template.partials = ctx.partials;
			},
			"$": function(node, context) {
				var ctx = {
					subs: {},
					code: "",
					partials: context.partials,
					prefix: node.n
				};
				Hogan.walk(node.nodes, ctx);
				context.subs[node.n] = ctx.code;
				if (!context.inPartial) context.code += "t.sub(\"" + esc(node.n) + "\",c,p,i);";
			},
			"\n": function(node, context) {
				context.code += write("\"\\n\"" + (node.last ? "" : " + i"));
			},
			"_v": function(node, context) {
				context.code += "t.b(t.v(t." + chooseMethod(node.n) + "(\"" + esc(node.n) + "\",c,p,0)));";
			},
			"_t": function(node, context) {
				context.code += write("\"" + esc(node.text) + "\"");
			},
			"{": tripleStache,
			"&": tripleStache
		};
		function tripleStache(node, context) {
			context.code += "t.b(t.t(t." + chooseMethod(node.n) + "(\"" + esc(node.n) + "\",c,p,0)));";
		}
		function write(s) {
			return "t.b(" + s + ");";
		}
		Hogan.walk = function(nodelist, context) {
			var func;
			for (var i = 0, l = nodelist.length; i < l; i++) {
				func = Hogan.codegen[nodelist[i].tag];
				func && func(nodelist[i], context);
			}
			return context;
		};
		Hogan.parse = function(tokens, text, options) {
			options = options || {};
			return buildTree(tokens, "", [], options.sectionTags || []);
		};
		Hogan.cache = {};
		Hogan.cacheKey = function(text, options) {
			return [
				text,
				!!options.asString,
				!!options.disableLambda,
				options.delimiters,
				!!options.modelGet
			].join("||");
		};
		Hogan.compile = function(text, options) {
			options = options || {};
			var key = Hogan.cacheKey(text, options);
			var template = this.cache[key];
			if (template) {
				var partials = template.partials;
				for (var name in partials) delete partials[name].instance;
				return template;
			}
			template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
			return this.cache[key] = template;
		};
	})(typeof exports !== "undefined" ? exports : Hogan);
}));
//#endregion
//#region node_modules/@profoundlogic/hogan/lib/template.js
var require_template = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function(Hogan) {
		Hogan.Template = function(codeObj, text, compiler, options) {
			codeObj = codeObj || {};
			this.r = codeObj.code || this.r;
			this.c = compiler;
			this.options = options || {};
			this.text = text || "";
			this.partials = codeObj.partials || {};
			this.subs = codeObj.subs || {};
			this.buf = "";
		};
		Hogan.Template.prototype = {
			r: function(context, partials, indent) {
				return "";
			},
			v: hoganEscape,
			t: coerceToString,
			render: function render(context, partials, indent) {
				return this.ri([context], partials || {}, indent);
			},
			ri: function(context, partials, indent) {
				return this.r(context, partials, indent);
			},
			ep: function(symbol, partials) {
				var partial = this.partials[symbol];
				var template = partials[partial.name];
				if (partial.instance && partial.base == template) return partial.instance;
				if (typeof template == "string") {
					if (!this.c) throw new Error("No compiler available.");
					template = this.c.compile(template, this.options);
				}
				if (!template) return null;
				this.partials[symbol].base = template;
				if (partial.subs) {
					if (!partials.stackText) partials.stackText = {};
					for (key in partial.subs) if (!partials.stackText[key]) partials.stackText[key] = this.activeSub !== void 0 && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
					template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
				}
				this.partials[symbol].instance = template;
				return template;
			},
			rp: function(symbol, context, partials, indent) {
				var partial = this.ep(symbol, partials);
				if (!partial) return "";
				return partial.ri(context, partials, indent);
			},
			rs: function(context, partials, section) {
				var tail = context[context.length - 1];
				if (!isArray(tail)) {
					section(context, partials, this);
					return;
				}
				for (var i = 0; i < tail.length; i++) {
					context.push(tail[i]);
					section(context, partials, this);
					context.pop();
				}
			},
			s: function(val, ctx, partials, inverted, start, end, tags) {
				var pass;
				if (isArray(val) && val.length === 0) return false;
				if (typeof val == "function") val = this.ms(val, ctx, partials, inverted, start, end, tags);
				pass = !!val;
				if (!inverted && pass && ctx) ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1]);
				return pass;
			},
			d: function(key, ctx, partials, returnFound) {
				var found, names = key.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
				if (key === "." && isArray(ctx[ctx.length - 2])) val = ctx[ctx.length - 1];
				else for (var i = 1; i < names.length; i++) {
					found = findInScope(names[i], val, doModelGet);
					if (found !== void 0) {
						cx = val;
						val = found;
					} else val = "";
				}
				if (returnFound && !val) return false;
				if (!returnFound && typeof val == "function") {
					ctx.push(cx);
					val = this.mv(val, ctx, partials);
					ctx.pop();
				}
				return val;
			},
			f: function(key, ctx, partials, returnFound) {
				var val = false, v = null, found = false, doModelGet = this.options.modelGet;
				for (var i = ctx.length - 1; i >= 0; i--) {
					v = ctx[i];
					val = findInScope(key, v, doModelGet);
					if (val !== void 0) {
						found = true;
						break;
					}
				}
				if (!found) return returnFound ? false : "";
				if (!returnFound && typeof val == "function") val = this.mv(val, ctx, partials);
				return val;
			},
			ls: function(func, cx, ctx, partials, text, tags) {
				var oldTags = this.options.delimiters;
				this.options.delimiters = tags;
				this.b(this.ct(coerceToString(func.call(cx, text, ctx)), cx, partials));
				this.options.delimiters = oldTags;
				return false;
			},
			ct: function(text, cx, partials) {
				if (this.options.disableLambda) throw new Error("Lambda features disabled.");
				return this.c.compile(text, this.options).render(cx, partials);
			},
			b: function(s) {
				this.buf += s;
			},
			fl: function() {
				var r = this.buf;
				this.buf = "";
				return r;
			},
			ms: function(func, ctx, partials, inverted, start, end, tags) {
				var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
				if (typeof result == "function") {
					if (inverted) return true;
					else {
						textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
						return this.ls(result, cx, ctx, partials, textSource.substring(start, end), tags);
					}
				}
				return result;
			},
			mv: function(func, ctx, partials) {
				var cx = ctx[ctx.length - 1];
				var result = func.call(cx);
				if (typeof result == "function") return this.ct(coerceToString(result.call(cx)), cx, partials);
				return result;
			},
			sub: function(name, context, partials, indent) {
				var f = this.subs[name];
				if (f) {
					this.activeSub = name;
					f(context, partials, this, indent);
					this.activeSub = false;
				}
			}
		};
		function findInScope(key, scope, doModelGet) {
			var val;
			if (scope && typeof scope == "object") {
				if (scope[key] !== void 0) val = scope[key];
				else if (doModelGet && scope.get && typeof scope.get == "function") val = scope.get(key);
			}
			return val;
		}
		function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
			function PartialTemplate() {}
			PartialTemplate.prototype = instance;
			function Substitutions() {}
			Substitutions.prototype = instance.subs;
			var key;
			var partial = new PartialTemplate();
			partial.subs = new Substitutions();
			partial.subsText = {};
			partial.buf = "";
			stackSubs = stackSubs || {};
			partial.stackSubs = stackSubs;
			partial.subsText = stackText;
			for (key in subs) if (!stackSubs[key]) stackSubs[key] = subs[key];
			for (key in stackSubs) partial.subs[key] = stackSubs[key];
			stackPartials = stackPartials || {};
			partial.stackPartials = stackPartials;
			for (key in partials) if (!stackPartials[key]) stackPartials[key] = partials[key];
			for (key in stackPartials) partial.partials[key] = stackPartials[key];
			return partial;
		}
		var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
		function coerceToString(val) {
			return String(val === null || val === void 0 ? "" : val);
		}
		function hoganEscape(str) {
			str = coerceToString(str);
			return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str;
		}
		var isArray = Array.isArray || function(a) {
			return Object.prototype.toString.call(a) === "[object Array]";
		};
	})(typeof exports !== "undefined" ? exports : {});
}));
//#endregion
//#region node_modules/diff2html/lib-esm/diff2html-templates.js
var import_hogan = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hogan = require_compiler();
	Hogan.Template = require_template().Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;
})))());
var defaultTemplates = {};
defaultTemplates["file-summary-line"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<li class=\"d2h-file-list-line\">");
		t.b("\n" + i);
		t.b("    <span class=\"d2h-file-name-wrapper\">");
		t.b("\n" + i);
		t.b(t.rp("<fileIcon0", c, p, "      "));
		t.b("      <a href=\"#");
		t.b(t.v(t.f("fileHtmlId", c, p, 0)));
		t.b("\" class=\"d2h-file-name\">");
		t.b(t.v(t.f("fileName", c, p, 0)));
		t.b("</a>");
		t.b("\n" + i);
		t.b("      <span class=\"d2h-file-stats\">");
		t.b("\n" + i);
		t.b("          <span class=\"d2h-lines-added\">");
		t.b(t.v(t.f("addedLines", c, p, 0)));
		t.b("</span>");
		t.b("\n" + i);
		t.b("          <span class=\"d2h-lines-deleted\">");
		t.b(t.v(t.f("deletedLines", c, p, 0)));
		t.b("</span>");
		t.b("\n" + i);
		t.b("      </span>");
		t.b("\n" + i);
		t.b("    </span>");
		t.b("\n" + i);
		t.b("</li>");
		return t.fl();
	},
	partials: { "<fileIcon0": {
		name: "fileIcon",
		partials: {},
		subs: {}
	} },
	subs: {}
});
defaultTemplates["file-summary-wrapper"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<div class=\"d2h-file-list-wrapper ");
		t.b(t.v(t.f("colorScheme", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("    <div class=\"d2h-file-list-header\">");
		t.b("\n" + i);
		t.b("        <span class=\"d2h-file-list-title\">Files changed (");
		t.b(t.v(t.f("filesNumber", c, p, 0)));
		t.b(")</span>");
		t.b("\n" + i);
		t.b("        <a class=\"d2h-file-switch d2h-hide\">hide</a>");
		t.b("\n" + i);
		t.b("        <a class=\"d2h-file-switch d2h-show\">show</a>");
		t.b("\n" + i);
		t.b("    </div>");
		t.b("\n" + i);
		t.b("    <ol class=\"d2h-file-list\">");
		t.b("\n" + i);
		t.b("    ");
		t.b(t.t(t.f("files", c, p, 0)));
		t.b("\n" + i);
		t.b("    </ol>");
		t.b("\n" + i);
		t.b("</div>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["generic-block-header"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<tr>");
		t.b("\n" + i);
		t.b("    <td class=\"");
		t.b(t.v(t.f("lineClass", c, p, 0)));
		t.b(" ");
		t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0)));
		t.b("\"></td>");
		t.b("\n" + i);
		t.b("    <td class=\"");
		t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("        <div class=\"");
		t.b(t.v(t.f("contentClass", c, p, 0)));
		t.b("\">");
		if (t.s(t.f("blockHeader", c, p, 1), c, p, 0, 156, 173, "{{ }}")) {
			t.rs(c, p, function(c, p, t) {
				t.b(t.t(t.f("blockHeader", c, p, 0)));
			});
			c.pop();
		}
		if (!t.s(t.f("blockHeader", c, p, 1), c, p, 1, 0, 0, "")) t.b("&nbsp;");
		t.b("</div>");
		t.b("\n" + i);
		t.b("    </td>");
		t.b("\n" + i);
		t.b("</tr>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["generic-empty-diff"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<tr>");
		t.b("\n" + i);
		t.b("    <td class=\"");
		t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("        <div class=\"");
		t.b(t.v(t.f("contentClass", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("            File without changes");
		t.b("\n" + i);
		t.b("        </div>");
		t.b("\n" + i);
		t.b("    </td>");
		t.b("\n" + i);
		t.b("</tr>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["generic-file-path"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<span class=\"d2h-file-name-wrapper\">");
		t.b("\n" + i);
		t.b(t.rp("<fileIcon0", c, p, "    "));
		t.b("    <span class=\"d2h-file-name\">");
		t.b(t.v(t.f("fileDiffName", c, p, 0)));
		t.b("</span>");
		t.b("\n" + i);
		t.b(t.rp("<fileTag1", c, p, "    "));
		t.b("</span>");
		t.b("\n" + i);
		t.b("<label class=\"d2h-file-collapse\">");
		t.b("\n" + i);
		t.b("    <input class=\"d2h-file-collapse-input\" type=\"checkbox\" name=\"viewed\" value=\"viewed\">");
		t.b("\n" + i);
		t.b("    Viewed");
		t.b("\n" + i);
		t.b("</label>");
		return t.fl();
	},
	partials: {
		"<fileIcon0": {
			name: "fileIcon",
			partials: {},
			subs: {}
		},
		"<fileTag1": {
			name: "fileTag",
			partials: {},
			subs: {}
		}
	},
	subs: {}
});
defaultTemplates["generic-line"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<tr>");
		t.b("\n" + i);
		t.b("    <td class=\"");
		t.b(t.v(t.f("lineClass", c, p, 0)));
		t.b(" ");
		t.b(t.v(t.f("type", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("      ");
		t.b(t.t(t.f("lineNumber", c, p, 0)));
		t.b("\n" + i);
		t.b("    </td>");
		t.b("\n" + i);
		t.b("    <td class=\"");
		t.b(t.v(t.f("type", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("        <div class=\"");
		t.b(t.v(t.f("contentClass", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		if (t.s(t.f("prefix", c, p, 1), c, p, 0, 162, 238, "{{ }}")) {
			t.rs(c, p, function(c, p, t) {
				t.b("            <span class=\"d2h-code-line-prefix\">");
				t.b(t.t(t.f("prefix", c, p, 0)));
				t.b("</span>");
				t.b("\n" + i);
			});
			c.pop();
		}
		if (!t.s(t.f("prefix", c, p, 1), c, p, 1, 0, 0, "")) {
			t.b("            <span class=\"d2h-code-line-prefix\">&nbsp;</span>");
			t.b("\n" + i);
		}
		if (t.s(t.f("content", c, p, 1), c, p, 0, 371, 445, "{{ }}")) {
			t.rs(c, p, function(c, p, t) {
				t.b("            <span class=\"d2h-code-line-ctn\">");
				t.b(t.t(t.f("content", c, p, 0)));
				t.b("</span>");
				t.b("\n" + i);
			});
			c.pop();
		}
		if (!t.s(t.f("content", c, p, 1), c, p, 1, 0, 0, "")) {
			t.b("            <span class=\"d2h-code-line-ctn\"><br></span>");
			t.b("\n" + i);
		}
		t.b("        </div>");
		t.b("\n" + i);
		t.b("    </td>");
		t.b("\n" + i);
		t.b("</tr>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["generic-wrapper"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<div class=\"d2h-wrapper ");
		t.b(t.v(t.f("colorScheme", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("    ");
		t.b(t.t(t.f("content", c, p, 0)));
		t.b("\n" + i);
		t.b("</div>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["icon-file-added"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-added\" height=\"16\" title=\"added\" version=\"1.1\" viewBox=\"0 0 14 16\"");
		t.b("\n" + i);
		t.b("     width=\"14\">");
		t.b("\n" + i);
		t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"></path>");
		t.b("\n" + i);
		t.b("</svg>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["icon-file-changed"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-changed\" height=\"16\" title=\"modified\" version=\"1.1\"");
		t.b("\n" + i);
		t.b("     viewBox=\"0 0 14 16\" width=\"14\">");
		t.b("\n" + i);
		t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z\"></path>");
		t.b("\n" + i);
		t.b("</svg>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["icon-file-deleted"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-deleted\" height=\"16\" title=\"removed\" version=\"1.1\"");
		t.b("\n" + i);
		t.b("     viewBox=\"0 0 14 16\" width=\"14\">");
		t.b("\n" + i);
		t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z\"></path>");
		t.b("\n" + i);
		t.b("</svg>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["icon-file-renamed"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-moved\" height=\"16\" title=\"renamed\" version=\"1.1\"");
		t.b("\n" + i);
		t.b("     viewBox=\"0 0 14 16\" width=\"14\">");
		t.b("\n" + i);
		t.b("    <path d=\"M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z\"></path>");
		t.b("\n" + i);
		t.b("</svg>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["icon-file"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<svg aria-hidden=\"true\" class=\"d2h-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">");
		t.b("\n" + i);
		t.b("    <path d=\"M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z\"></path>");
		t.b("\n" + i);
		t.b("</svg>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["line-by-line-file-diff"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<div id=\"");
		t.b(t.v(t.f("fileHtmlId", c, p, 0)));
		t.b("\" class=\"d2h-file-wrapper\" data-lang=\"");
		t.b(t.v(t.d("file.language", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("    <div class=\"d2h-file-header\">");
		t.b("\n" + i);
		t.b("    ");
		t.b(t.t(t.f("filePath", c, p, 0)));
		t.b("\n" + i);
		t.b("    </div>");
		t.b("\n" + i);
		t.b("    <div class=\"d2h-file-diff\">");
		t.b("\n" + i);
		t.b("        <div class=\"d2h-code-wrapper\">");
		t.b("\n" + i);
		t.b("            <table class=\"d2h-diff-table\">");
		t.b("\n" + i);
		t.b("                <tbody class=\"d2h-diff-tbody\">");
		t.b("\n" + i);
		t.b("                ");
		t.b(t.t(t.f("diffs", c, p, 0)));
		t.b("\n" + i);
		t.b("                </tbody>");
		t.b("\n" + i);
		t.b("            </table>");
		t.b("\n" + i);
		t.b("        </div>");
		t.b("\n" + i);
		t.b("    </div>");
		t.b("\n" + i);
		t.b("</div>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["line-by-line-numbers"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<div class=\"line-num1\">");
		t.b(t.v(t.f("oldNumber", c, p, 0)));
		t.b("</div>");
		t.b("\n" + i);
		t.b("<div class=\"line-num2\">");
		t.b(t.v(t.f("newNumber", c, p, 0)));
		t.b("</div>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["side-by-side-file-diff"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<div id=\"");
		t.b(t.v(t.f("fileHtmlId", c, p, 0)));
		t.b("\" class=\"d2h-file-wrapper\" data-lang=\"");
		t.b(t.v(t.d("file.language", c, p, 0)));
		t.b("\">");
		t.b("\n" + i);
		t.b("    <div class=\"d2h-file-header\">");
		t.b("\n" + i);
		t.b("      ");
		t.b(t.t(t.f("filePath", c, p, 0)));
		t.b("\n" + i);
		t.b("    </div>");
		t.b("\n" + i);
		t.b("    <div class=\"d2h-files-diff\">");
		t.b("\n" + i);
		t.b("        <div class=\"d2h-file-side-diff\">");
		t.b("\n" + i);
		t.b("            <div class=\"d2h-code-wrapper\">");
		t.b("\n" + i);
		t.b("                <table class=\"d2h-diff-table\">");
		t.b("\n" + i);
		t.b("                    <tbody class=\"d2h-diff-tbody\">");
		t.b("\n" + i);
		t.b("                    ");
		t.b(t.t(t.d("diffs.left", c, p, 0)));
		t.b("\n" + i);
		t.b("                    </tbody>");
		t.b("\n" + i);
		t.b("                </table>");
		t.b("\n" + i);
		t.b("            </div>");
		t.b("\n" + i);
		t.b("        </div>");
		t.b("\n" + i);
		t.b("        <div class=\"d2h-file-side-diff\">");
		t.b("\n" + i);
		t.b("            <div class=\"d2h-code-wrapper\">");
		t.b("\n" + i);
		t.b("                <table class=\"d2h-diff-table\">");
		t.b("\n" + i);
		t.b("                    <tbody class=\"d2h-diff-tbody\">");
		t.b("\n" + i);
		t.b("                    ");
		t.b(t.t(t.d("diffs.right", c, p, 0)));
		t.b("\n" + i);
		t.b("                    </tbody>");
		t.b("\n" + i);
		t.b("                </table>");
		t.b("\n" + i);
		t.b("            </div>");
		t.b("\n" + i);
		t.b("        </div>");
		t.b("\n" + i);
		t.b("    </div>");
		t.b("\n" + i);
		t.b("</div>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["tag-file-added"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<span class=\"d2h-tag d2h-added d2h-added-tag\">ADDED</span>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["tag-file-changed"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<span class=\"d2h-tag d2h-changed d2h-changed-tag\">CHANGED</span>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["tag-file-deleted"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<span class=\"d2h-tag d2h-deleted d2h-deleted-tag\">DELETED</span>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
defaultTemplates["tag-file-renamed"] = new import_hogan.Template({
	code: function(c, p, i) {
		var t = this;
		t.b(i = i || "");
		t.b("<span class=\"d2h-tag d2h-moved d2h-moved-tag\">RENAMED</span>");
		return t.fl();
	},
	partials: {},
	subs: {}
});
//#endregion
//#region node_modules/diff2html/lib-esm/hoganjs-utils.js
var HoganJsUtils = class {
	constructor({ compiledTemplates = {}, rawTemplates = {} }) {
		const compiledRawTemplates = Object.entries(rawTemplates).reduce((previousTemplates, [name, templateString]) => {
			const compiledTemplate = import_hogan.compile(templateString, { asString: false });
			return Object.assign(Object.assign({}, previousTemplates), { [name]: compiledTemplate });
		}, {});
		this.preCompiledTemplates = Object.assign(Object.assign(Object.assign({}, defaultTemplates), compiledTemplates), compiledRawTemplates);
	}
	static compile(templateString) {
		return import_hogan.compile(templateString, { asString: false });
	}
	render(namespace, view, params, partials, indent) {
		const templateKey = this.templateKey(namespace, view);
		try {
			return this.preCompiledTemplates[templateKey].render(params, partials, indent);
		} catch (_e) {
			throw new Error(`Could not find template to render '${templateKey}'`);
		}
	}
	template(namespace, view) {
		return this.preCompiledTemplates[this.templateKey(namespace, view)];
	}
	templateKey(namespace, view) {
		return `${namespace}-${view}`;
	}
};
//#endregion
//#region node_modules/diff2html/lib-esm/diff2html.js
var defaultDiff2HtmlConfig = Object.assign(Object.assign(Object.assign({}, defaultLineByLineRendererConfig), defaultSideBySideRendererConfig), {
	outputFormat: OutputFormatType.LINE_BY_LINE,
	drawFileList: true
});
function parse(diffInput, configuration = {}) {
	return parse$1(diffInput, Object.assign(Object.assign({}, defaultDiff2HtmlConfig), configuration));
}
function html(diffInput, configuration = {}) {
	const config = Object.assign(Object.assign({}, defaultDiff2HtmlConfig), configuration);
	const diffJson = typeof diffInput === "string" ? parse$1(diffInput, config) : diffInput;
	const hoganUtils = new HoganJsUtils(config);
	const { colorScheme } = config;
	const fileListRendererConfig = { colorScheme };
	return (config.drawFileList ? new FileListRenderer(hoganUtils, fileListRendererConfig).render(diffJson) : "") + (config.outputFormat === "side-by-side" ? new SideBySideRenderer(hoganUtils, config).render(diffJson) : new LineByLineRenderer(hoganUtils, config).render(diffJson));
}
//#endregion
export { defaultDiff2HtmlConfig, html, parse };
