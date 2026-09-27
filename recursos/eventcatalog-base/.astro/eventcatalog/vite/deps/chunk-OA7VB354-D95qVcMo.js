import { n as __name } from "./chunk-Q5MVOS3D-COL7qICA.js";
import { n as __name2 } from "./chunk-AMVFOWMQ-DhPR11QG.js";
import { t as log } from "./chunk-YJFJOXZG-BRJXzlLC.js";
import { G as sanitizeText, S as getConfig } from "./chunk-W7FHEGFS-CYgalqT6.js";
//#region node_modules/@mermaid-js/layout-elk/dist/chunks/mermaid-layout-elk.core/chunk-OA7VB354.mjs
var defaultIconDimensions = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
});
var defaultIconTransformations = Object.freeze({
	rotate: 0,
	vFlip: false,
	hFlip: false
});
var defaultIconProps = Object.freeze({
	...defaultIconDimensions,
	...defaultIconTransformations
});
var defaultExtendedIconProps = Object.freeze({
	...defaultIconProps,
	body: "",
	hidden: false
});
var defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
});
var defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
});
var stringToIcon = /* @__PURE__ */ __name((value, validate, allowSimpleName, provider = "") => {
	const colonSeparated = value.split(":");
	if (value.slice(0, 1) === "@") {
		if (colonSeparated.length < 2 || colonSeparated.length > 3) return null;
		provider = colonSeparated.shift().slice(1);
	}
	if (colonSeparated.length > 3 || !colonSeparated.length) return null;
	if (colonSeparated.length > 1) {
		const name$1 = colonSeparated.pop();
		const prefix = colonSeparated.pop();
		const result = {
			provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
			prefix,
			name: name$1
		};
		return validate && !validateIconName(result) ? null : result;
	}
	const name = colonSeparated[0];
	const dashSeparated = name.split("-");
	if (dashSeparated.length > 1) {
		const result = {
			provider,
			prefix: dashSeparated.shift(),
			name: dashSeparated.join("-")
		};
		return validate && !validateIconName(result) ? null : result;
	}
	if (allowSimpleName && provider === "") {
		const result = {
			provider,
			prefix: "",
			name
		};
		return validate && !validateIconName(result, allowSimpleName) ? null : result;
	}
	return null;
}, "stringToIcon");
var validateIconName = /* @__PURE__ */ __name((icon, allowSimpleName) => {
	if (!icon) return false;
	return !!((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
}, "validateIconName");
function mergeIconTransformations(obj1, obj2) {
	const result = {};
	if (!obj1.hFlip !== !obj2.hFlip) result.hFlip = true;
	if (!obj1.vFlip !== !obj2.vFlip) result.vFlip = true;
	const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
	if (rotate) result.rotate = rotate;
	return result;
}
__name(mergeIconTransformations, "mergeIconTransformations");
function mergeIconData(parent, child) {
	const result = mergeIconTransformations(parent, child);
	for (const key in defaultExtendedIconProps) if (key in defaultIconTransformations) {
		if (key in parent && !(key in result)) result[key] = defaultIconTransformations[key];
	} else if (key in child) result[key] = child[key];
	else if (key in parent) result[key] = parent[key];
	return result;
}
__name(mergeIconData, "mergeIconData");
function getIconsTree(data, names) {
	const icons = data.icons;
	const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
	const resolved = /* @__PURE__ */ Object.create(null);
	function resolve(name) {
		if (icons[name]) return resolved[name] = [];
		if (!(name in resolved)) {
			resolved[name] = null;
			const parent = aliases[name] && aliases[name].parent;
			const value = parent && resolve(parent);
			if (value) resolved[name] = [parent].concat(value);
		}
		return resolved[name];
	}
	__name(resolve, "resolve");
	(names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
	return resolved;
}
__name(getIconsTree, "getIconsTree");
function internalGetIconData(data, name, tree) {
	const icons = data.icons;
	const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
	let currentProps = {};
	function parse(name$1) {
		currentProps = mergeIconData(icons[name$1] || aliases[name$1], currentProps);
	}
	__name(parse, "parse");
	parse(name);
	tree.forEach(parse);
	return mergeIconData(data, currentProps);
}
__name(internalGetIconData, "internalGetIconData");
function getIconData(data, name) {
	if (data.icons[name]) return internalGetIconData(data, name, []);
	const tree = getIconsTree(data, [name])[name];
	return tree ? internalGetIconData(data, name, tree) : null;
}
__name(getIconData, "getIconData");
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
	if (ratio === 1) return size;
	precision = precision || 100;
	if (typeof size === "number") return Math.ceil(size * ratio * precision) / precision;
	if (typeof size !== "string") return size;
	const oldParts = size.split(unitsSplit);
	if (oldParts === null || !oldParts.length) return size;
	const newParts = [];
	let code = oldParts.shift();
	let isNumber = unitsTest.test(code);
	while (true) {
		if (isNumber) {
			const num = parseFloat(code);
			if (isNaN(num)) newParts.push(code);
			else newParts.push(Math.ceil(num * ratio * precision) / precision);
		} else newParts.push(code);
		code = oldParts.shift();
		if (code === void 0) return newParts.join("");
		isNumber = !isNumber;
	}
}
__name(calculateSize, "calculateSize");
function splitSVGDefs(content, tag = "defs") {
	let defs = "";
	const index = content.indexOf("<" + tag);
	while (index >= 0) {
		const start = content.indexOf(">", index);
		const end = content.indexOf("</" + tag);
		if (start === -1 || end === -1) break;
		const endEnd = content.indexOf(">", end);
		if (endEnd === -1) break;
		defs += content.slice(start + 1, end).trim();
		content = content.slice(0, index).trim() + content.slice(endEnd + 1);
	}
	return {
		defs,
		content
	};
}
__name(splitSVGDefs, "splitSVGDefs");
function mergeDefsAndContent(defs, content) {
	return defs ? "<defs>" + defs + "</defs>" + content : content;
}
__name(mergeDefsAndContent, "mergeDefsAndContent");
function wrapSVGContent(body, start, end) {
	const split = splitSVGDefs(body);
	return mergeDefsAndContent(split.defs, start + split.content + end);
}
__name(wrapSVGContent, "wrapSVGContent");
var isUnsetKeyword = /* @__PURE__ */ __name((value) => value === "unset" || value === "undefined" || value === "none", "isUnsetKeyword");
function iconToSVG(icon, customisations) {
	const fullIcon = {
		...defaultIconProps,
		...icon
	};
	const fullCustomisations = {
		...defaultIconCustomisations,
		...customisations
	};
	const box = {
		left: fullIcon.left,
		top: fullIcon.top,
		width: fullIcon.width,
		height: fullIcon.height
	};
	let body = fullIcon.body;
	[fullIcon, fullCustomisations].forEach((props) => {
		const transformations = [];
		const hFlip = props.hFlip;
		const vFlip = props.vFlip;
		let rotation = props.rotate;
		if (hFlip) if (vFlip) rotation += 2;
		else {
			transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
			transformations.push("scale(-1 1)");
			box.top = box.left = 0;
		}
		else if (vFlip) {
			transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
			transformations.push("scale(1 -1)");
			box.top = box.left = 0;
		}
		let tempValue;
		if (rotation < 0) rotation -= Math.floor(rotation / 4) * 4;
		rotation = rotation % 4;
		switch (rotation) {
			case 1:
				tempValue = box.height / 2 + box.top;
				transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
				break;
			case 2:
				transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
				break;
			case 3:
				tempValue = box.width / 2 + box.left;
				transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
		}
		if (rotation % 2 === 1) {
			if (box.left !== box.top) {
				tempValue = box.left;
				box.left = box.top;
				box.top = tempValue;
			}
			if (box.width !== box.height) {
				tempValue = box.width;
				box.width = box.height;
				box.height = tempValue;
			}
		}
		if (transformations.length) body = wrapSVGContent(body, "<g transform=\"" + transformations.join(" ") + "\">", "</g>");
	});
	const customisationsWidth = fullCustomisations.width;
	const customisationsHeight = fullCustomisations.height;
	const boxWidth = box.width;
	const boxHeight = box.height;
	let width;
	let height;
	if (customisationsWidth === null) {
		height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
		width = calculateSize(height, boxWidth / boxHeight);
	} else {
		width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
		height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
	}
	const attributes = {};
	const setAttr = /* @__PURE__ */ __name((prop, value) => {
		if (!isUnsetKeyword(value)) attributes[prop] = value.toString();
	}, "setAttr");
	setAttr("width", width);
	setAttr("height", height);
	const viewBox = [
		box.left,
		box.top,
		boxWidth,
		boxHeight
	];
	attributes.viewBox = viewBox.join(" ");
	return {
		attributes,
		viewBox,
		body
	};
}
__name(iconToSVG, "iconToSVG");
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
	const ids = [];
	let match;
	while (match = regex.exec(body)) ids.push(match[1]);
	if (!ids.length) return body;
	const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	ids.forEach((id) => {
		const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
		const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		body = body.replace(new RegExp("([#;\"])(" + escapedID + ")([\")]|\\.[a-z])", "g"), "$1" + newID + suffix + "$3");
	});
	body = body.replace(new RegExp(suffix, "g"), "");
	return body;
}
__name(replaceIDs, "replaceIDs");
function iconToHTML(body, attributes) {
	let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (const attr in attributes) renderAttribsHTML += " " + attr + "=\"" + attributes[attr] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + renderAttribsHTML + ">" + body + "</svg>";
}
__name(iconToHTML, "iconToHTML");
var unknownIcon = {
	body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
	height: 80,
	width: 80
};
var iconsStore = /* @__PURE__ */ new Map();
var loaderStore = /* @__PURE__ */ new Map();
var registerIconPacks = /* @__PURE__ */ __name2((iconLoaders) => {
	for (const iconLoader of iconLoaders) {
		if (!iconLoader.name) throw new Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
		log.debug("Registering icon pack:", iconLoader.name);
		if ("loader" in iconLoader) loaderStore.set(iconLoader.name, iconLoader.loader);
		else if ("icons" in iconLoader) iconsStore.set(iconLoader.name, iconLoader.icons);
		else {
			log.error("Invalid icon loader:", iconLoader);
			throw new Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
		}
	}
}, "registerIconPacks");
var getRegisteredIconData = /* @__PURE__ */ __name2(async (iconName, fallbackPrefix) => {
	const data = stringToIcon(iconName, true, fallbackPrefix !== void 0);
	if (!data) throw new Error(`Invalid icon name: ${iconName}`);
	const prefix = data.prefix || fallbackPrefix;
	if (!prefix) throw new Error(`Icon name must contain a prefix: ${iconName}`);
	let icons = iconsStore.get(prefix);
	if (!icons) {
		const loader = loaderStore.get(prefix);
		if (!loader) throw new Error(`Icon set not found: ${data.prefix}`);
		try {
			icons = {
				...await loader(),
				prefix
			};
			iconsStore.set(prefix, icons);
		} catch (e) {
			log.error(e);
			throw new Error(`Failed to load icon set: ${data.prefix}`);
		}
	}
	const iconData = getIconData(icons, data.name);
	if (!iconData) throw new Error(`Icon not found: ${iconName}`);
	return iconData;
}, "getRegisteredIconData");
var isIconAvailable = /* @__PURE__ */ __name2(async (iconName) => {
	try {
		await getRegisteredIconData(iconName);
		return true;
	} catch {
		return false;
	}
}, "isIconAvailable");
var getIconSVG = /* @__PURE__ */ __name2(async (iconName, customisations, extraAttributes) => {
	let iconData;
	try {
		iconData = await getRegisteredIconData(iconName, customisations?.fallbackPrefix);
	} catch (e) {
		log.error(e);
		iconData = unknownIcon;
	}
	const renderData = iconToSVG(iconData, customisations);
	const svg = iconToHTML(replaceIDs(renderData.body), {
		...renderData.attributes,
		...extraAttributes
	});
	return sanitizeText(svg, getConfig());
}, "getIconSVG");
//#endregion
export { unknownIcon as i, isIconAvailable as n, registerIconPacks as r, getIconSVG as t };
