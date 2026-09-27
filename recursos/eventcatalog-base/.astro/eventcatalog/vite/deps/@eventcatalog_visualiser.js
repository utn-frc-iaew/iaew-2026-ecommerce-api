import { i as __toESM } from "./rolldown-runtime-B-lAHAz2.js";
import { t as require_react } from "./react.js";
import { t as require_jsx_runtime } from "./react_jsx-runtime.js";
import { t as require_react_dom } from "./react-dom-CUBFEAPm.js";
import { F as useEdgesState, G as useOnSelectionChange, Q as ConnectionLineType, W as useNodesState, X as useUpdateNodeInternals, Y as useStoreApi, Z as useViewport, _ as ReactFlowProvider, d as MiniMap, et as MarkerType, ft as getSmoothStepPath, g as Panel, h as NodeToolbar, k as index, mt as getViewportForBounds, nt as Position, o as Controls, ot as getBezierPath, q as useReactFlow, r as BaseEdge, s as EdgeLabelRenderer, t as Background, u as Handle, ut as getNodesBounds, z as useNodeConnections } from "./esm-BgOtgX0v.js";
import { Arrow as Arrow2, CheckboxItem as CheckboxItem2, Content as Content2, Item as Item2, Portal as Portal2, Root as Root2, Separator as Separator2, Sub as Sub2, SubContent as SubContent2, SubTrigger as SubTrigger2, Trigger } from "./@radix-ui_react-dropdown-menu.js";
import { Close as DialogClose, Content as DialogContent, Description as DialogDescription, Dialog, DialogOverlay, DialogPortal, DialogTitle } from "./@radix-ui_react-dialog.js";
import { Content as Content2$1, Item as Item2$1, Portal as Portal2$1, Root as Root2$1, Separator as Separator2$1, Trigger as Trigger$1 } from "./@radix-ui_react-context-menu.js";
import { Kr as ForwardRef$1, dt as ForwardRef$3, fr as ForwardRef$2, qr as ForwardRef, t as esm_exports } from "./esm-D7anap2l.js";
import { Gr as ForwardRef$5, m as ForwardRef$6, qr as ForwardRef$4 } from "./esm-Ji_zoRu2.js";
import { t as esm_exports$1, wr as ForwardRef$7 } from "./esm-CN05Izp3.js";
import { t as require_dagre } from "./dagre.js";
//#region node_modules/@eventcatalog/visualiser/node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
};
//#endregion
//#region node_modules/@eventcatalog/visualiser/node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/@eventcatalog/visualiser/node_modules/lucide-react/dist/esm/Icon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => (0, import_react.createElement)("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region node_modules/@eventcatalog/visualiser/node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeftRight = createLucideIcon("arrow-left-right", [
	["path", {
		d: "M8 3 4 7l4 4",
		key: "9rb6wj"
	}],
	["path", {
		d: "M4 7h16",
		key: "6tx8e3"
	}],
	["path", {
		d: "m16 21 4-4-4-4",
		key: "siv7j2"
	}],
	["path", {
		d: "M20 17H4",
		key: "h6l3hr"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRightLeft = createLucideIcon("arrow-right-left", [
	["path", {
		d: "m16 3 4 4-4 4",
		key: "1x1c3m"
	}],
	["path", {
		d: "M20 7H4",
		key: "zbl0bi"
	}],
	["path", {
		d: "m8 21-4-4 4-4",
		key: "h9nckh"
	}],
	["path", {
		d: "M4 17h16",
		key: "g4d7ey"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Blocks = createLucideIcon("blocks", [["rect", {
	width: "7",
	height: "7",
	x: "14",
	y: "3",
	rx: "1",
	key: "6d4xhi"
}], ["path", {
	d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
	key: "1fpvtg"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bot = createLucideIcon("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Box = createLucideIcon("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Boxes = createLucideIcon("boxes", [
	["path", {
		d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
		key: "lc1i9w"
	}],
	["path", {
		d: "m7 16.5-4.74-2.85",
		key: "1o9zyk"
	}],
	["path", {
		d: "m7 16.5 5-3",
		key: "va8pkn"
	}],
	["path", {
		d: "M7 16.5v5.17",
		key: "jnp8gn"
	}],
	["path", {
		d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
		key: "8zsnat"
	}],
	["path", {
		d: "m17 16.5-5-3",
		key: "8arw3v"
	}],
	["path", {
		d: "m17 16.5 4.74-2.85",
		key: "8rfmw"
	}],
	["path", {
		d: "M17 16.5v5.17",
		key: "k6z78m"
	}],
	["path", {
		d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
		key: "1xygjf"
	}],
	["path", {
		d: "M12 8 7.26 5.15",
		key: "1vbdud"
	}],
	["path", {
		d: "m12 8 4.74-2.85",
		key: "3rx089"
	}],
	["path", {
		d: "M12 13.5V8",
		key: "1io7kd"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleHelp = createLucideIcon("circle-help", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
		key: "1u773s"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clipboard = createLucideIcon("clipboard", [["rect", {
	width: "8",
	height: "4",
	x: "8",
	y: "2",
	rx: "1",
	ry: "1",
	key: "tgr4d6"
}], ["path", {
	d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
	key: "116196"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cloud = createLucideIcon("cloud", [["path", {
	d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
	key: "p7xjir"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Code = createLucideIcon("code", [["polyline", {
	points: "16 18 22 12 16 6",
	key: "z7tu5w"
}], ["polyline", {
	points: "8 6 2 12 8 18",
	key: "1eg1df"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Database = createLucideIcon("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EllipsisVertical = createLucideIcon("ellipsis-vertical", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "12",
		cy: "5",
		r: "1",
		key: "gxeob9"
	}],
	["circle", {
		cx: "12",
		cy: "19",
		r: "1",
		key: "lyex9k"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
		key: "1rqfz7"
	}],
	["path", {
		d: "M14 2v4a2 2 0 0 0 2 2h4",
		key: "tnqrlb"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Focus = createLucideIcon("focus", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Globe = createLucideIcon("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Grid3x3 = createLucideIcon("grid-3x3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Group = createLucideIcon("group", [
	["path", {
		d: "M3 7V5c0-1.1.9-2 2-2h2",
		key: "adw53z"
	}],
	["path", {
		d: "M17 3h2c1.1 0 2 .9 2 2v2",
		key: "an4l38"
	}],
	["path", {
		d: "M21 17v2c0 1.1-.9 2-2 2h-2",
		key: "144t0e"
	}],
	["path", {
		d: "M7 21H5c-1.1 0-2-.9-2-2v-2",
		key: "rtnfgi"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "7",
		y: "7",
		rx: "1",
		key: "1eyiv7"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "10",
		y: "12",
		rx: "1",
		key: "1qlmkx"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var History = createLucideIcon("history", [
	["path", {
		d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "1357e3"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M12 7v5l4 2",
		key: "1fdv2h"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Link = createLucideIcon("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ListTree = createLucideIcon("list-tree", [
	["path", {
		d: "M21 12h-8",
		key: "1bmf0i"
	}],
	["path", {
		d: "M21 6H8",
		key: "1pqkrb"
	}],
	["path", {
		d: "M21 18h-8",
		key: "1tm79t"
	}],
	["path", {
		d: "M3 6v4c0 1.1.9 2 2 2h3",
		key: "1ywdgy"
	}],
	["path", {
		d: "M3 10v6c0 1.1.9 2 2 2h3",
		key: "2wc746"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LocateFixed = createLucideIcon("locate-fixed", [
	["line", {
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12",
		key: "bvdh0s"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12",
		key: "1tbv5k"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5",
		key: "11lu5j"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22",
		key: "x3vr5v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "7",
		key: "fim9np"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Locate = createLucideIcon("locate", [
	["line", {
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12",
		key: "bvdh0s"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12",
		key: "1tbv5k"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5",
		key: "11lu5j"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22",
		key: "x3vr5v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "7",
		key: "fim9np"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Map$1 = createLucideIcon("map", [
	["path", {
		d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
		key: "169xi5"
	}],
	["path", {
		d: "M15 5.764v15",
		key: "1pn4in"
	}],
	["path", {
		d: "M9 3.236v15",
		key: "1uimfh"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Maximize2 = createLucideIcon("maximize-2", [
	["polyline", {
		points: "15 3 21 3 21 9",
		key: "mznyad"
	}],
	["polyline", {
		points: "9 21 3 21 3 15",
		key: "1avn1i"
	}],
	["line", {
		x1: "21",
		x2: "14",
		y1: "3",
		y2: "10",
		key: "ota7mn"
	}],
	["line", {
		x1: "3",
		x2: "10",
		y1: "21",
		y2: "14",
		key: "1atl0r"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
	key: "vv11sd"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
	key: "1lielz"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Minimize2 = createLucideIcon("minimize-2", [
	["polyline", {
		points: "4 14 10 14 10 20",
		key: "11kfnr"
	}],
	["polyline", {
		points: "20 10 14 10 14 4",
		key: "rlmsce"
	}],
	["line", {
		x1: "14",
		x2: "21",
		y1: "10",
		y2: "3",
		key: "o5lafz"
	}],
	["line", {
		x1: "3",
		x2: "10",
		y1: "21",
		y2: "14",
		key: "1atl0r"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Monitor = createLucideIcon("monitor", [
	["rect", {
		width: "20",
		height: "14",
		x: "2",
		y: "3",
		rx: "2",
		key: "48i651"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21",
		key: "1svkeh"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21",
		key: "vw1qmm"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Network = createLucideIcon("network", [
	["rect", {
		x: "16",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "4q2zg0"
	}],
	["rect", {
		x: "2",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "8cvhb9"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "6",
		rx: "1",
		key: "1egb70"
	}],
	["path", {
		d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
		key: "1jsf9p"
	}],
	["path", {
		d: "M12 12V8",
		key: "2874zd"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Package = createLucideIcon("package", [
	["path", {
		d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
		key: "1a0edw"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["polyline", {
		points: "3.29 7 12 12 20.71 7",
		key: "ousv84"
	}],
	["path", {
		d: "m7.5 4.27 9 5.15",
		key: "1c824w"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Radio = createLucideIcon("radio", [
	["path", {
		d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9",
		key: "1vaf9d"
	}],
	["path", {
		d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",
		key: "u1ii0m"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",
		key: "1j5fej"
	}],
	["path", {
		d: "M19.1 4.9C23 8.8 23 15.1 19.1 19",
		key: "10b0cb"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Server = createLucideIcon("server", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "2",
		rx: "2",
		ry: "2",
		key: "ngkwjq"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		ry: "2",
		key: "iecqi9"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6",
		key: "16zg32"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18",
		key: "nzw8ys"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Share2 = createLucideIcon("share-2", [
	["circle", {
		cx: "18",
		cy: "5",
		r: "3",
		key: "gq8acd"
	}],
	["circle", {
		cx: "6",
		cy: "12",
		r: "3",
		key: "w7nqdw"
	}],
	["circle", {
		cx: "18",
		cy: "19",
		r: "3",
		key: "1xt0gg"
	}],
	["line", {
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49",
		key: "47mynk"
	}],
	["line", {
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49",
		key: "1n3mei"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
		key: "4pj2yx"
	}],
	["path", {
		d: "M20 3v4",
		key: "1olli1"
	}],
	["path", {
		d: "M22 5h-4",
		key: "1gvqau"
	}],
	["path", {
		d: "M4 17v2",
		key: "vumght"
	}],
	["path", {
		d: "M5 18H3",
		key: "zchphs"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Terminal = createLucideIcon("terminal", [["polyline", {
	points: "4 17 10 11 4 5",
	key: "akl6gq"
}], ["line", {
	x1: "12",
	x2: "20",
	y1: "19",
	y2: "19",
	key: "q2wloq"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wifi = createLucideIcon("wifi", [
	["path", {
		d: "M12 20h.01",
		key: "zekei9"
	}],
	["path", {
		d: "M2 8.82a15 15 0 0 1 20 0",
		key: "dnpr2z"
	}],
	["path", {
		d: "M5 12.859a10 10 0 0 1 14 0",
		key: "1x1e6c"
	}],
	["path", {
		d: "M8.5 16.429a5 5 0 0 1 7 0",
		key: "1bycff"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Workflow = createLucideIcon("workflow", [
	["rect", {
		width: "8",
		height: "8",
		x: "3",
		y: "3",
		rx: "2",
		key: "by2w9f"
	}],
	["path", {
		d: "M7 11v4a2 2 0 0 0 2 2h4",
		key: "xkn7yn"
	}],
	["rect", {
		width: "8",
		height: "8",
		x: "13",
		y: "13",
		rx: "2",
		key: "1cgmvn"
	}]
]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wrench = createLucideIcon("wrench", [["path", {
	d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
	key: "cbrjhi"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
/**
* @license lucide-react v0.510.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
//#region node_modules/html-to-image/es/util.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
function resolveUrl(url, baseUrl) {
	if (url.match(/^[a-z]+:\/\//i)) return url;
	if (url.match(/^\/\//)) return window.location.protocol + url;
	if (url.match(/^[a-z]+:/i)) return url;
	const doc = document.implementation.createHTMLDocument();
	const base = doc.createElement("base");
	const a = doc.createElement("a");
	doc.head.appendChild(base);
	doc.body.appendChild(a);
	if (baseUrl) base.href = baseUrl;
	a.href = url;
	return a.href;
}
var uuid = (() => {
	let counter = 0;
	const random = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
	return () => {
		counter += 1;
		return `u${random()}${counter}`;
	};
})();
function toArray(arrayLike) {
	const arr = [];
	for (let i = 0, l = arrayLike.length; i < l; i++) arr.push(arrayLike[i]);
	return arr;
}
var styleProps = null;
function getStyleProperties(options = {}) {
	if (styleProps) return styleProps;
	if (options.includeStyleProperties) {
		styleProps = options.includeStyleProperties;
		return styleProps;
	}
	styleProps = toArray(window.getComputedStyle(document.documentElement));
	return styleProps;
}
function px(node, styleProperty) {
	const val = (node.ownerDocument.defaultView || window).getComputedStyle(node).getPropertyValue(styleProperty);
	return val ? parseFloat(val.replace("px", "")) : 0;
}
function getNodeWidth(node) {
	const leftBorder = px(node, "border-left-width");
	const rightBorder = px(node, "border-right-width");
	return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
	const topBorder = px(node, "border-top-width");
	const bottomBorder = px(node, "border-bottom-width");
	return node.clientHeight + topBorder + bottomBorder;
}
function getImageSize(targetNode, options = {}) {
	return {
		width: options.width || getNodeWidth(targetNode),
		height: options.height || getNodeHeight(targetNode)
	};
}
function getPixelRatio() {
	let ratio;
	let FINAL_PROCESS;
	try {
		FINAL_PROCESS = process;
	} catch (e) {}
	const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
	if (val) {
		ratio = parseInt(val, 10);
		if (Number.isNaN(ratio)) ratio = 1;
	}
	return ratio || window.devicePixelRatio || 1;
}
var canvasDimensionLimit = 16384;
function checkCanvasDimensions(canvas) {
	if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
		if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
			if (canvas.width > canvas.height) {
				canvas.height *= canvasDimensionLimit / canvas.width;
				canvas.width = canvasDimensionLimit;
			} else {
				canvas.width *= canvasDimensionLimit / canvas.height;
				canvas.height = canvasDimensionLimit;
			}
		} else if (canvas.width > canvasDimensionLimit) {
			canvas.height *= canvasDimensionLimit / canvas.width;
			canvas.width = canvasDimensionLimit;
		} else {
			canvas.width *= canvasDimensionLimit / canvas.height;
			canvas.height = canvasDimensionLimit;
		}
	}
}
function createImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			img.decode().then(() => {
				requestAnimationFrame(() => resolve(img));
			});
		};
		img.onerror = reject;
		img.crossOrigin = "anonymous";
		img.decoding = "async";
		img.src = url;
	});
}
async function svgToDataURL(svg) {
	return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
}
async function nodeToDataURL(node, width, height) {
	const xmlns = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(xmlns, "svg");
	const foreignObject = document.createElementNS(xmlns, "foreignObject");
	svg.setAttribute("width", `${width}`);
	svg.setAttribute("height", `${height}`);
	svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
	foreignObject.setAttribute("width", "100%");
	foreignObject.setAttribute("height", "100%");
	foreignObject.setAttribute("x", "0");
	foreignObject.setAttribute("y", "0");
	foreignObject.setAttribute("externalResourcesRequired", "true");
	svg.appendChild(foreignObject);
	foreignObject.appendChild(node);
	return svgToDataURL(svg);
}
var isInstanceOfElement = (node, instance) => {
	if (node instanceof instance) return true;
	const nodePrototype = Object.getPrototypeOf(node);
	if (nodePrototype === null) return false;
	return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
};
//#endregion
//#region node_modules/html-to-image/es/clone-pseudos.js
function formatCSSText(style) {
	const content = style.getPropertyValue("content");
	return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
}
function formatCSSProperties(style, options) {
	return getStyleProperties(options).map((name) => {
		return `${name}: ${style.getPropertyValue(name)}${style.getPropertyPriority(name) ? " !important" : ""};`;
	}).join(" ");
}
function getPseudoElementStyle(className, pseudo, style, options) {
	const selector = `.${className}:${pseudo}`;
	const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style, options);
	return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo, options) {
	const style = window.getComputedStyle(nativeNode, pseudo);
	const content = style.getPropertyValue("content");
	if (content === "" || content === "none") return;
	const className = uuid();
	try {
		clonedNode.className = `${clonedNode.className} ${className}`;
	} catch (err) {
		return;
	}
	const styleElement = document.createElement("style");
	styleElement.appendChild(getPseudoElementStyle(className, pseudo, style, options));
	clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode, options) {
	clonePseudoElement(nativeNode, clonedNode, ":before", options);
	clonePseudoElement(nativeNode, clonedNode, ":after", options);
}
//#endregion
//#region node_modules/html-to-image/es/mimes.js
var WOFF = "application/font-woff";
var JPEG = "image/jpeg";
var mimes = {
	woff: WOFF,
	woff2: WOFF,
	ttf: "application/font-truetype",
	eot: "application/vnd.ms-fontobject",
	png: "image/png",
	jpg: JPEG,
	jpeg: JPEG,
	gif: "image/gif",
	tiff: "image/tiff",
	svg: "image/svg+xml",
	webp: "image/webp"
};
function getExtension(url) {
	const match = /\.([^./]*?)$/g.exec(url);
	return match ? match[1] : "";
}
function getMimeType(url) {
	return mimes[getExtension(url).toLowerCase()] || "";
}
//#endregion
//#region node_modules/html-to-image/es/dataurl.js
function getContentFromDataUrl(dataURL) {
	return dataURL.split(/,/)[1];
}
function isDataUrl(url) {
	return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
	return `data:${mimeType};base64,${content}`;
}
async function fetchAsDataURL(url, init, process) {
	const res = await fetch(url, init);
	if (res.status === 404) throw new Error(`Resource "${res.url}" not found`);
	const blob = await res.blob();
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = reject;
		reader.onloadend = () => {
			try {
				resolve(process({
					res,
					result: reader.result
				}));
			} catch (error) {
				reject(error);
			}
		};
		reader.readAsDataURL(blob);
	});
}
var cache = {};
function getCacheKey(url, contentType, includeQueryParams) {
	let key = url.replace(/\?.*/, "");
	if (includeQueryParams) key = url;
	if (/ttf|otf|eot|woff2?/i.test(key)) key = key.replace(/.*\//, "");
	return contentType ? `[${contentType}]${key}` : key;
}
async function resourceToDataURL(resourceUrl, contentType, options) {
	const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
	if (cache[cacheKey] != null) return cache[cacheKey];
	if (options.cacheBust) resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
	let dataURL;
	try {
		dataURL = makeDataUrl(await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
			if (!contentType) contentType = res.headers.get("Content-Type") || "";
			return getContentFromDataUrl(result);
		}), contentType);
	} catch (error) {
		dataURL = options.imagePlaceholder || "";
		let msg = `Failed to fetch resource: ${resourceUrl}`;
		if (error) msg = typeof error === "string" ? error : error.message;
		if (msg) console.warn(msg);
	}
	cache[cacheKey] = dataURL;
	return dataURL;
}
//#endregion
//#region node_modules/html-to-image/es/clone-node.js
async function cloneCanvasElement(canvas) {
	const dataURL = canvas.toDataURL();
	if (dataURL === "data:,") return canvas.cloneNode(false);
	return createImage(dataURL);
}
async function cloneVideoElement(video, options) {
	if (video.currentSrc) {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = video.clientWidth;
		canvas.height = video.clientHeight;
		ctx === null || ctx === void 0 || ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		return createImage(canvas.toDataURL());
	}
	const poster = video.poster;
	return createImage(await resourceToDataURL(poster, getMimeType(poster), options));
}
async function cloneIFrameElement(iframe, options) {
	var _a;
	try {
		if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) return await cloneNode(iframe.contentDocument.body, options, true);
	} catch (_b) {}
	return iframe.cloneNode(false);
}
async function cloneSingleNode(node, options) {
	if (isInstanceOfElement(node, HTMLCanvasElement)) return cloneCanvasElement(node);
	if (isInstanceOfElement(node, HTMLVideoElement)) return cloneVideoElement(node, options);
	if (isInstanceOfElement(node, HTMLIFrameElement)) return cloneIFrameElement(node, options);
	return node.cloneNode(isSVGElement(node));
}
var isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
var isSVGElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SVG";
async function cloneChildren(nativeNode, clonedNode, options) {
	var _a, _b;
	if (isSVGElement(clonedNode)) return clonedNode;
	let children = [];
	if (isSlotElement(nativeNode) && nativeNode.assignedNodes) children = toArray(nativeNode.assignedNodes());
	else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) children = toArray(nativeNode.contentDocument.body.childNodes);
	else children = toArray(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
	if (children.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) return clonedNode;
	await children.reduce((deferred, child) => deferred.then(() => cloneNode(child, options)).then((clonedChild) => {
		if (clonedChild) clonedNode.appendChild(clonedChild);
	}), Promise.resolve());
	return clonedNode;
}
function cloneCSSStyle(nativeNode, clonedNode, options) {
	const targetStyle = clonedNode.style;
	if (!targetStyle) return;
	const sourceStyle = window.getComputedStyle(nativeNode);
	if (sourceStyle.cssText) {
		targetStyle.cssText = sourceStyle.cssText;
		targetStyle.transformOrigin = sourceStyle.transformOrigin;
	} else getStyleProperties(options).forEach((name) => {
		let value = sourceStyle.getPropertyValue(name);
		if (name === "font-size" && value.endsWith("px")) value = `${Math.floor(parseFloat(value.substring(0, value.length - 2))) - .1}px`;
		if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && name === "display" && value === "inline") value = "block";
		if (name === "d" && clonedNode.getAttribute("d")) value = `path(${clonedNode.getAttribute("d")})`;
		targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
	});
}
function cloneInputValue(nativeNode, clonedNode) {
	if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) clonedNode.innerHTML = nativeNode.value;
	if (isInstanceOfElement(nativeNode, HTMLInputElement)) clonedNode.setAttribute("value", nativeNode.value);
}
function cloneSelectValue(nativeNode, clonedNode) {
	if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
		const clonedSelect = clonedNode;
		const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute("value"));
		if (selectedOption) selectedOption.setAttribute("selected", "");
	}
}
function decorate(nativeNode, clonedNode, options) {
	if (isInstanceOfElement(clonedNode, Element)) {
		cloneCSSStyle(nativeNode, clonedNode, options);
		clonePseudoElements(nativeNode, clonedNode, options);
		cloneInputValue(nativeNode, clonedNode);
		cloneSelectValue(nativeNode, clonedNode);
	}
	return clonedNode;
}
async function ensureSVGSymbols(clone, options) {
	const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
	if (uses.length === 0) return clone;
	const processedDefs = {};
	for (let i = 0; i < uses.length; i++) {
		const id = uses[i].getAttribute("xlink:href");
		if (id) {
			const exist = clone.querySelector(id);
			const definition = document.querySelector(id);
			if (!exist && definition && !processedDefs[id]) processedDefs[id] = await cloneNode(definition, options, true);
		}
	}
	const nodes = Object.values(processedDefs);
	if (nodes.length) {
		const ns = "http://www.w3.org/1999/xhtml";
		const svg = document.createElementNS(ns, "svg");
		svg.setAttribute("xmlns", ns);
		svg.style.position = "absolute";
		svg.style.width = "0";
		svg.style.height = "0";
		svg.style.overflow = "hidden";
		svg.style.display = "none";
		const defs = document.createElementNS(ns, "defs");
		svg.appendChild(defs);
		for (let i = 0; i < nodes.length; i++) defs.appendChild(nodes[i]);
		clone.appendChild(svg);
	}
	return clone;
}
async function cloneNode(node, options, isRoot) {
	if (!isRoot && options.filter && !options.filter(node)) return null;
	return Promise.resolve(node).then((clonedNode) => cloneSingleNode(clonedNode, options)).then((clonedNode) => cloneChildren(node, clonedNode, options)).then((clonedNode) => decorate(node, clonedNode, options)).then((clonedNode) => ensureSVGSymbols(clonedNode, options));
}
//#endregion
//#region node_modules/html-to-image/es/embed-resources.js
var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
var URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
var FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
	const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
	return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
}
function parseURLs(cssText) {
	const urls = [];
	cssText.replace(URL_REGEX, (raw, quotation, url) => {
		urls.push(url);
		return raw;
	});
	return urls.filter((url) => !isDataUrl(url));
}
async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
	try {
		const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
		const contentType = getMimeType(resourceURL);
		let dataURL;
		if (getContentFromUrl) dataURL = makeDataUrl(await getContentFromUrl(resolvedURL), contentType);
		else dataURL = await resourceToDataURL(resolvedURL, contentType, options);
		return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
	} catch (error) {}
	return cssText;
}
function filterPreferredFontFormat(str, { preferredFontFormat }) {
	return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match) => {
		while (true) {
			const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
			if (!format) return "";
			if (format === preferredFontFormat) return `src: ${src};`;
		}
	});
}
function shouldEmbed(url) {
	return url.search(URL_REGEX) !== -1;
}
async function embedResources(cssText, baseUrl, options) {
	if (!shouldEmbed(cssText)) return cssText;
	const filteredCSSText = filterPreferredFontFormat(cssText, options);
	return parseURLs(filteredCSSText).reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
}
//#endregion
//#region node_modules/html-to-image/es/embed-images.js
async function embedProp(propName, node, options) {
	var _a;
	const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
	if (propValue) {
		const cssString = await embedResources(propValue, null, options);
		node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
		return true;
	}
	return false;
}
async function embedBackground(clonedNode, options) {
	await embedProp("background", clonedNode, options) || await embedProp("background-image", clonedNode, options);
	await embedProp("mask", clonedNode, options) || await embedProp("-webkit-mask", clonedNode, options) || await embedProp("mask-image", clonedNode, options) || await embedProp("-webkit-mask-image", clonedNode, options);
}
async function embedImageNode(clonedNode, options) {
	const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
	if (!(isImageElement && !isDataUrl(clonedNode.src)) && !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))) return;
	const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
	const dataURL = await resourceToDataURL(url, getMimeType(url), options);
	await new Promise((resolve, reject) => {
		clonedNode.onload = resolve;
		clonedNode.onerror = options.onImageErrorHandler ? (...attributes) => {
			try {
				resolve(options.onImageErrorHandler(...attributes));
			} catch (error) {
				reject(error);
			}
		} : reject;
		const image = clonedNode;
		if (image.decode) image.decode = resolve;
		if (image.loading === "lazy") image.loading = "eager";
		if (isImageElement) {
			clonedNode.srcset = "";
			clonedNode.src = dataURL;
		} else clonedNode.href.baseVal = dataURL;
	});
}
async function embedChildren(clonedNode, options) {
	const deferreds = toArray(clonedNode.childNodes).map((child) => embedImages(child, options));
	await Promise.all(deferreds).then(() => clonedNode);
}
async function embedImages(clonedNode, options) {
	if (isInstanceOfElement(clonedNode, Element)) {
		await embedBackground(clonedNode, options);
		await embedImageNode(clonedNode, options);
		await embedChildren(clonedNode, options);
	}
}
//#endregion
//#region node_modules/html-to-image/es/apply-style.js
function applyStyle(node, options) {
	const { style } = node;
	if (options.backgroundColor) style.backgroundColor = options.backgroundColor;
	if (options.width) style.width = `${options.width}px`;
	if (options.height) style.height = `${options.height}px`;
	const manual = options.style;
	if (manual != null) Object.keys(manual).forEach((key) => {
		style[key] = manual[key];
	});
	return node;
}
//#endregion
//#region node_modules/html-to-image/es/embed-webfonts.js
var cssFetchCache = {};
async function fetchCSS(url) {
	let cache = cssFetchCache[url];
	if (cache != null) return cache;
	cache = {
		url,
		cssText: await (await fetch(url)).text()
	};
	cssFetchCache[url] = cache;
	return cache;
}
async function embedFonts(data, options) {
	let cssText = data.cssText;
	const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
	const loadFonts = (cssText.match(/url\([^)]+\)/g) || []).map(async (loc) => {
		let url = loc.replace(regexUrl, "$1");
		if (!url.startsWith("https://")) url = new URL(url, data.url).href;
		return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
			cssText = cssText.replace(loc, `url(${result})`);
			return [loc, result];
		});
	});
	return Promise.all(loadFonts).then(() => cssText);
}
function parseCSS(source) {
	if (source == null) return [];
	const result = [];
	let cssText = source.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
	const keyframesRegex = /* @__PURE__ */ new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
	while (true) {
		const matches = keyframesRegex.exec(cssText);
		if (matches === null) break;
		result.push(matches[0]);
	}
	cssText = cssText.replace(keyframesRegex, "");
	const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
	const unifiedRegex = /* @__PURE__ */ new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
	while (true) {
		let matches = importRegex.exec(cssText);
		if (matches === null) {
			matches = unifiedRegex.exec(cssText);
			if (matches === null) break;
			else importRegex.lastIndex = unifiedRegex.lastIndex;
		} else unifiedRegex.lastIndex = importRegex.lastIndex;
		result.push(matches[0]);
	}
	return result;
}
async function getCSSRules(styleSheets, options) {
	const ret = [];
	const deferreds = [];
	styleSheets.forEach((sheet) => {
		if ("cssRules" in sheet) try {
			toArray(sheet.cssRules || []).forEach((item, index) => {
				if (item.type === CSSRule.IMPORT_RULE) {
					let importIndex = index + 1;
					const url = item.href;
					const deferred = fetchCSS(url).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
						try {
							sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
						} catch (error) {
							console.error("Error inserting rule from remote css", {
								rule,
								error
							});
						}
					})).catch((e) => {
						console.error("Error loading remote css", e.toString());
					});
					deferreds.push(deferred);
				}
			});
		} catch (e) {
			const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
			if (sheet.href != null) deferreds.push(fetchCSS(sheet.href).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
				inline.insertRule(rule, inline.cssRules.length);
			})).catch((err) => {
				console.error("Error loading remote stylesheet", err);
			}));
			console.error("Error inlining remote css file", e);
		}
	});
	return Promise.all(deferreds).then(() => {
		styleSheets.forEach((sheet) => {
			if ("cssRules" in sheet) try {
				toArray(sheet.cssRules || []).forEach((item) => {
					ret.push(item);
				});
			} catch (e) {
				console.error(`Error while reading CSS rules from ${sheet.href}`, e);
			}
		});
		return ret;
	});
}
function getWebFontRules(cssRules) {
	return cssRules.filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
}
async function parseWebFontRules(node, options) {
	if (node.ownerDocument == null) throw new Error("Provided element is not within a Document");
	return getWebFontRules(await getCSSRules(toArray(node.ownerDocument.styleSheets), options));
}
function normalizeFontFamily(font) {
	return font.trim().replace(/["']/g, "");
}
function getUsedFonts(node) {
	const fonts = /* @__PURE__ */ new Set();
	function traverse(node) {
		(node.style.fontFamily || getComputedStyle(node).fontFamily).split(",").forEach((font) => {
			fonts.add(normalizeFontFamily(font));
		});
		Array.from(node.children).forEach((child) => {
			if (child instanceof HTMLElement) traverse(child);
		});
	}
	traverse(node);
	return fonts;
}
async function getWebFontCSS(node, options) {
	const rules = await parseWebFontRules(node, options);
	const usedFonts = getUsedFonts(node);
	return (await Promise.all(rules.filter((rule) => usedFonts.has(normalizeFontFamily(rule.style.fontFamily))).map((rule) => {
		const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
		return embedResources(rule.cssText, baseUrl, options);
	}))).join("\n");
}
async function embedWebFonts(clonedNode, options) {
	const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : await getWebFontCSS(clonedNode, options);
	if (cssText) {
		const styleNode = document.createElement("style");
		const sytleContent = document.createTextNode(cssText);
		styleNode.appendChild(sytleContent);
		if (clonedNode.firstChild) clonedNode.insertBefore(styleNode, clonedNode.firstChild);
		else clonedNode.appendChild(styleNode);
	}
}
//#endregion
//#region node_modules/html-to-image/es/index.js
async function toSvg(node, options = {}) {
	const { width, height } = getImageSize(node, options);
	const clonedNode = await cloneNode(node, options, true);
	await embedWebFonts(clonedNode, options);
	await embedImages(clonedNode, options);
	applyStyle(clonedNode, options);
	return await nodeToDataURL(clonedNode, width, height);
}
async function toCanvas(node, options = {}) {
	const { width, height } = getImageSize(node, options);
	const img = await createImage(await toSvg(node, options));
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	const ratio = options.pixelRatio || getPixelRatio();
	const canvasWidth = options.canvasWidth || width;
	const canvasHeight = options.canvasHeight || height;
	canvas.width = canvasWidth * ratio;
	canvas.height = canvasHeight * ratio;
	if (!options.skipAutoScale) checkCanvasDimensions(canvas);
	canvas.style.width = `${canvasWidth}`;
	canvas.style.height = `${canvasHeight}`;
	if (options.backgroundColor) {
		context.fillStyle = options.backgroundColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	context.drawImage(img, 0, 0, canvas.width, canvas.height);
	return canvas;
}
async function toPng(node, options = {}) {
	return (await toCanvas(node, options)).toDataURL();
}
//#endregion
//#region node_modules/@eventcatalog/visualiser/dist/index.mjs
var import_jsx_runtime = require_jsx_runtime();
var import_dagre = /* @__PURE__ */ __toESM(require_dagre(), 1);
var _customBuildUrl = null;
function setBuildUrlFn(fn) {
	_customBuildUrl = fn;
}
function buildUrl(path) {
	if (_customBuildUrl) return _customBuildUrl(path);
	return path;
}
function navigateTo(url) {
	if (typeof window === "undefined") return;
	const ecNavigate = window.__ecNavigate;
	if (typeof ecNavigate === "function") {
		ecNavigate(url);
		return;
	}
	window.location.href = url;
}
function isIconPath(value) {
	if (!value) return false;
	return value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://");
}
function resolveIconUrl(value) {
	if (value.startsWith("http://") || value.startsWith("https://")) return value;
	return buildUrl(value).replace(/\/$/, "");
}
var CustomIcon = (0, import_react.memo)(function CustomIcon2({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: resolveIconUrl(src),
		alt,
		loading: "lazy",
		className,
		style: {
			objectFit: "contain",
			borderRadius: 4
		}
	});
});
function subscribeTheme(callback) {
	const observer = new MutationObserver(callback);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-theme"]
	});
	return () => observer.disconnect();
}
function getIsDark() {
	return typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark";
}
function useDarkMode() {
	return (0, import_react.useSyncExternalStore)(subscribeTheme, getIsDark, () => false);
}
var NODE_WIDTH_STYLE = { width: "260px" };
var ROTATED_LABEL_STYLE = {
	transform: "rotate(-90deg)",
	letterSpacing: "0.15em",
	whiteSpace: "nowrap"
};
var TINY_FONT_STYLE = { fontSize: "0.2em" };
var LINE_CLAMP_STYLE = {
	display: "-webkit-box",
	WebkitLineClamp: 2,
	WebkitBoxOrient: "vertical"
};
var FOLDED_CORNER_SHADOW_STYLE = {
	position: "absolute",
	top: 0,
	right: 0,
	width: 0,
	height: 0,
	borderStyle: "solid",
	borderWidth: "0 18px 18px 0",
	borderColor: "transparent #1e293b12 transparent transparent"
};
var HANDLE_LEFT_STYLE = { left: "-1px" };
var HANDLE_RIGHT_STYLE = { right: "-1px" };
var HANDLE_LEFT_OFFSET_STYLE = { left: "-6px" };
var HANDLE_RIGHT_OFFSET_STYLE = { right: "-6px" };
var FULL_SIZE_STYLE = {
	width: "100%",
	height: "100%"
};
var OWNER_ICON_SIZE_STYLE = {
	width: 10,
	height: 10
};
var EXTERNAL_SYSTEM_HANDLE_STYLE = {
	width: 10,
	height: 10,
	background: "pink",
	zIndex: 10
};
var EDGE_WARNING_STYLE = {
	stroke: "red",
	strokeWidth: 2.625,
	strokeDasharray: "5 5"
};
var EDGE_DEFAULT_STYLE = {
	stroke: "var(--ec-edge-stroke, #d1d5db)",
	strokeWidth: 2.625,
	strokeDasharray: "5 5"
};
var EDGE_FLOW_BASE_STYLE = {
	strokeWidth: 3,
	stroke: "var(--ec-edge-stroke, #6b7280)",
	strokeDasharray: "5 5"
};
var EMPTY_ARRAY = [];
var EMPTY_OBJECT = {};
var HIDDEN_HANDLE_STYLE = { opacity: 0 };
function normalizeOwners(raw) {
	if (!raw || raw.length === 0) return [];
	return raw.filter(Boolean).map((o) => typeof o === "string" ? o : o?.id ?? "");
}
var OwnerIndicator = (0, import_react.memo)(function OwnerIndicator2({ owners, accentColor = "bg-pink-400", borderColor = "rgba(236,72,153,0.08)", iconClass = "text-pink-300" }) {
	if (owners.length === 0) return null;
	const primary = owners[0];
	const remaining = owners.length - 1;
	const isLikelyTeam = primary.includes(" ") || primary.includes("-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1 mt-1.5 pt-1.5",
		style: { borderTop: `1px solid ${borderColor}` },
		title: owners.join(", "),
		children: [
			isLikelyTeam ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
				className: `${iconClass} shrink-0`,
				style: OWNER_ICON_SIZE_STYLE,
				strokeWidth: 2.5
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
				className: `${iconClass} shrink-0`,
				style: OWNER_ICON_SIZE_STYLE,
				strokeWidth: 2.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[8px] text-[rgb(var(--ec-page-text-muted))] truncate leading-none",
				children: primary
			}),
			remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `shrink-0 inline-flex items-center justify-center text-[7px] font-bold text-white ${accentColor} rounded-full px-1 py-[1px] leading-none`,
				title: owners.slice(1).join(", "),
				children: ["+", remaining]
			})
		]
	});
});
var PortalContainerContext = (0, import_react.createContext)(null);
var PortalContainerProvider = PortalContainerContext.Provider;
function usePortalContainer() {
	return (0, import_react.useContext)(PortalContainerContext) ?? void 0;
}
var AMBER = {
	50: "#fffbeb",
	100: "#fef3c7",
	200: "#fde68a",
	400: "#fbbf24",
	500: "#f59e0b",
	600: "#d97706",
	700: "#b45309",
	800: "#92400e",
	900: "#78350f"
};
var PRIORITY = {
	high: {
		bg: "#fef2f2",
		fg: "#b91c1c",
		border: "#fecaca",
		label: "High",
		accent: "#ef4444"
	},
	critical: {
		bg: "#fef2f2",
		fg: "#991b1b",
		border: "#fecaca",
		label: "Critical",
		accent: "#dc2626"
	},
	low: {
		bg: "#f0fdf4",
		fg: "#15803d",
		border: "#bbf7d0",
		label: "Low",
		accent: "#22c55e"
	}
};
var AVATAR_PALETTES = [
	["#7c3aed", "#a78bfa"],
	["#2563eb", "#60a5fa"],
	["#0891b2", "#22d3ee"],
	["#059669", "#34d399"],
	["#d97706", "#fbbf24"],
	["#dc2626", "#f87171"],
	["#db2777", "#f472b6"],
	["#4f46e5", "#818cf8"]
];
function hashStr(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
	return Math.abs(h);
}
function Avatar({ name, size = 18 }) {
	const initials = name.split(/\s+/).map((w) => w[0]).join("").toUpperCase().slice(0, 2);
	const [c1, c2] = AVATAR_PALETTES[hashStr(name) % AVATAR_PALETTES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width: size,
			height: size,
			borderRadius: "50%",
			background: `linear-gradient(135deg, ${c1}, ${c2})`,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				fontSize: Math.round(size * .42),
				fontWeight: 700,
				color: "white",
				lineHeight: 1,
				letterSpacing: "-0.02em"
			},
			children: initials
		})
	});
}
function PriorityPill({ priority, size = "sm" }) {
	const p = PRIORITY[priority.toLowerCase()];
	if (!p) return null;
	const isUrgent = priority === "high" || priority === "critical";
	const md = size === "md";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: {
			display: "inline-flex",
			alignItems: "center",
			gap: md ? 4 : 2,
			fontSize: md ? 11 : 8,
			fontWeight: 700,
			color: p.fg,
			background: p.bg,
			border: `1px solid ${p.border}`,
			borderRadius: 99,
			padding: md ? "2px 8px" : "1px 5px",
			textTransform: "uppercase",
			letterSpacing: "0.04em",
			lineHeight: 1.4,
			whiteSpace: "nowrap"
		},
		children: [isUrgent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			style: {
				width: md ? 10 : 7,
				height: md ? 10 : 7
			},
			strokeWidth: 2.5
		}), p.label]
	});
}
function PopoverCard({ note, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			padding: "7px 10px",
			borderBottom: last ? "none" : "1px solid rgb(var(--ec-page-border))",
			display: "flex",
			gap: 6,
			alignItems: "flex-start"
		},
		children: [note.author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
			name: note.author,
			size: 16
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				flex: 1,
				minWidth: 0
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: 4,
					marginBottom: 2
				},
				children: [note.author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						fontSize: 9,
						fontWeight: 700,
						color: "rgb(var(--ec-page-text))",
						lineHeight: 1
					},
					children: note.author
				}), note.priority && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityPill, { priority: note.priority })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontSize: 9,
					lineHeight: 1.45,
					color: "rgb(var(--ec-page-text-muted))",
					margin: 0,
					display: "-webkit-box",
					WebkitLineClamp: 2,
					WebkitBoxOrient: "vertical",
					overflow: "hidden"
				},
				children: note.content
			})]
		})]
	});
}
function NoteCard({ note, isDark }) {
	note.priority && PRIORITY[note.priority.toLowerCase()];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: isDark ? `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), rgba(255,255,255,0.04)` : `radial-gradient(circle, rgba(212,201,168,0.4) 1px, transparent 1px), #fef9ed`,
			backgroundSize: "12px 12px",
			border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "#e5dcc3"}`,
			borderBottom: `2px dashed ${isDark ? "rgba(255,255,255,0.1)" : "#d4c9a8"}`,
			borderRadius: "8px 8px 0 0",
			padding: "14px 16px 14px",
			position: "relative"
		},
		children: [note.author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "block",
				fontSize: 11,
				fontWeight: 650,
				color: isDark ? "#e2e8f0" : "#1e293b",
				marginBottom: 8
			},
			children: note.author
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			style: {
				fontSize: 13,
				lineHeight: 1.7,
				color: isDark ? "#cbd5e1" : "#1e293b",
				margin: 0,
				whiteSpace: "pre-wrap",
				wordBreak: "break-word",
				fontStyle: "italic"
			},
			children: [
				"“",
				note.content,
				"”"
			]
		})]
	});
}
function groupNotes(notes) {
	const urgent = [];
	const low = [];
	const normal = [];
	for (const n of notes) {
		const p = n.priority?.toLowerCase();
		if (p === "critical" || p === "high") urgent.push(n);
		else if (p === "low") low.push(n);
		else normal.push(n);
	}
	const groups = [];
	if (urgent.length > 0) groups.push({
		label: "High Priority",
		notes: urgent,
		color: "#ef4444"
	});
	if (normal.length > 0) groups.push({
		label: "Notes",
		notes: normal,
		color: "#f59e0b"
	});
	if (low.length > 0) groups.push({
		label: "Low Priority",
		notes: low,
		color: "#22c55e"
	});
	return groups;
}
function NotesModal({ notes, isOpen, onClose, resourceName, resourceVersion, resourceType, accentColor, icon }) {
	const isDark = useDarkMode();
	const portalContainer = usePortalContainer();
	const count = notes.length;
	const urgent = notes.filter((n) => n.priority && (n.priority.toLowerCase() === "high" || n.priority.toLowerCase() === "critical"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
			container: portalContainer,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[99999]",
				style: { isolation: "isolate" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { style: {
					position: "fixed",
					inset: 0,
					background: isDark ? "rgba(0, 0, 0, 0.7)" : "rgba(15, 23, 42, 0.55)",
					backdropFilter: "blur(8px)"
				} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					style: {
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "92vw",
						maxWidth: 500,
						maxHeight: "80vh",
						background: isDark ? "#1e2330" : "#ffffff",
						borderRadius: 16,
						border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
						boxShadow: isDark ? "0 24px 48px rgba(0,0,0,0.5)" : "0 24px 48px rgba(0,0,0,0.15)",
						display: "flex",
						flexDirection: "column",
						overflow: "hidden",
						outline: "none"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "20px 22px 16px",
							borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
							display: "flex",
							alignItems: "center",
							gap: 14
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									width: 36,
									height: 36,
									borderRadius: 10,
									background: accentColor || `linear-gradient(135deg, ${AMBER[400]}, ${AMBER[500]})`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0
								},
								children: icon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									style: {
										width: 18,
										height: 18,
										color: "white"
									},
									strokeWidth: 2.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									flex: 1,
									minWidth: 0
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
									style: {
										fontSize: 15,
										fontWeight: 700,
										color: isDark ? "#f1f5f9" : "#0f172a",
										margin: 0,
										lineHeight: 1.3,
										letterSpacing: "-0.01em",
										display: "flex",
										alignItems: "baseline",
										gap: 6
									},
									children: [resourceName || "Notes", resourceVersion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											fontSize: 11,
											fontWeight: 500,
											color: isDark ? "#64748b" : "#94a3b8"
										},
										children: ["v", resourceVersion]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
									style: {
										fontSize: 12,
										color: isDark ? "#94a3b8" : "#64748b",
										margin: 0,
										marginTop: 3,
										lineHeight: 1.3,
										display: "flex",
										alignItems: "center",
										gap: 6
									},
									children: [
										resourceType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 10,
												fontWeight: 700,
												textTransform: "uppercase",
												letterSpacing: "0.05em"
											},
											children: resourceType
										}),
										resourceType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { opacity: .4 },
											children: "·"
										}),
										count,
										" note",
										count !== 1 ? "s" : "",
										urgent.length > 0 && ` \xB7 ${urgent.length} high priority`
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Close",
									style: {
										width: 32,
										height: 32,
										borderRadius: 8,
										border: "none",
										background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										cursor: "pointer",
										color: isDark ? "#94a3b8" : "#94a3b8",
										flexShrink: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { style: {
										width: 16,
										height: 16
									} })
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							flex: 1,
							overflowY: "auto",
							padding: "16px 22px 24px",
							display: "flex",
							flexDirection: "column",
							gap: 18
						},
						children: groupNotes(notes).map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 8,
								marginBottom: 10
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
									width: 8,
									height: 8,
									borderRadius: "50%",
									background: group.color,
									flexShrink: 0
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 11,
										fontWeight: 700,
										color: isDark ? "#94a3b8" : "#64748b",
										textTransform: "uppercase",
										letterSpacing: "0.06em"
									},
									children: group.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										fontSize: 10,
										fontWeight: 600,
										color: isDark ? "#475569" : "#94a3b8"
									},
									children: [
										"(",
										group.notes.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
									flex: 1,
									height: 1,
									background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
								} })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: 16
							},
							children: group.notes.map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteCard, {
								note,
								isDark
							}, i))
						})] }, group.label))
					})]
				})]
			})
		})
	});
}
var NotesIndicator = (0, import_react.memo)(function NotesIndicator2({ notes, resourceName }) {
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const handleClick = (0, import_react.useCallback)((e) => {
		e.stopPropagation();
		setIsHovered(false);
		setIsModalOpen(true);
	}, []);
	if (!notes || notes.length === 0) return null;
	const count = notes.length;
	const hasUrgent = notes.some((n) => n.priority && (n.priority.toLowerCase() === "high" || n.priority.toLowerCase() === "critical"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute -top-2.5 -right-2.5 z-30 nopan nodrag",
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		onPointerDown: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center cursor-pointer",
			onClick: handleClick,
			style: {
				width: 22,
				height: 22,
				borderRadius: "50%",
				background: hasUrgent ? "linear-gradient(135deg, #ef4444, #dc2626)" : `linear-gradient(135deg, ${AMBER[400]}, ${AMBER[500]})`,
				boxShadow: `0 0 0 2.5px rgb(var(--ec-card-bg)), 0 2px 6px rgba(0,0,0,0.15)`,
				transition: "transform 0.15s ease",
				transform: isHovered ? "scale(1.15)" : "scale(1)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					fontSize: 11,
					fontWeight: 800,
					color: "white",
					lineHeight: 1
				},
				children: count
			})
		}), isHovered && !isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-full right-0 mt-2 pointer-events-none",
			style: {
				minWidth: 200,
				maxWidth: 250,
				zIndex: 50
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					background: "rgb(var(--ec-card-bg))",
					borderRadius: 10,
					border: `1px solid ${AMBER[200]}`,
					boxShadow: "0 4px 20px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
					overflow: "hidden"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "6px 10px",
							background: AMBER[50],
							borderBottom: `1px solid ${AMBER[200]}`,
							display: "flex",
							alignItems: "center",
							gap: 5
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								style: {
									width: 10,
									height: 10,
									color: AMBER[600]
								},
								strokeWidth: 2.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									fontSize: 9,
									fontWeight: 700,
									color: AMBER[800],
									flex: 1,
									letterSpacing: "0.01em"
								},
								children: [
									count,
									" note",
									count !== 1 ? "s" : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontSize: 8,
									color: AMBER[600],
									fontWeight: 500,
									opacity: .8
								},
								children: "click to open"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							maxHeight: 150,
							overflowY: "auto"
						},
						children: notes.slice(0, 3).map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverCard, {
							note,
							last: i === Math.min(count, 3) - 1 && count <= 3
						}, i))
					}),
					count > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							padding: "5px 10px",
							borderTop: "1px solid rgb(var(--ec-page-border))",
							textAlign: "center"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: {
								fontSize: 8,
								fontWeight: 600,
								color: "#94a3b8"
							},
							children: [
								"+",
								count - 3,
								" more"
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				top: -5,
				right: 10,
				width: 10,
				height: 10,
				background: "rgb(var(--ec-card-bg))",
				border: `1px solid ${AMBER[200]}`,
				borderRight: "none",
				borderBottom: "none",
				transform: "rotate(45deg)",
				zIndex: 1
			} })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesModal, {
		notes,
		isOpen: isModalOpen,
		onClose: () => setIsModalOpen(false),
		resourceName
	})] });
});
function TruncatedResourceName({ as: Component = "span", children, className, style, tooltipBorderColor = "rgb(var(--ec-page-border))", value }) {
	const ref = (0, import_react.useRef)(null);
	const [isTruncated, setIsTruncated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const updateTruncation = () => {
			setIsTruncated(element.scrollWidth > element.clientWidth);
		};
		updateTruncation();
		if (typeof ResizeObserver === "undefined") {
			window.addEventListener("resize", updateTruncation);
			return () => window.removeEventListener("resize", updateTruncation);
		}
		const observer = new ResizeObserver(updateTruncation);
		observer.observe(element);
		return () => observer.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Component, {
		className: "ec-truncated-resource-name group relative min-w-0 max-w-full flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref,
			className: `block min-w-0 ${className || ""}`,
			style,
			children
		}), isTruncated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "ec-truncated-resource-name-tooltip pointer-events-none absolute left-1/2 bottom-full z-[9999] mb-4 hidden w-max max-w-[320px] -translate-x-1/2 rounded-md border-2 bg-slate-950 px-2.5 py-1.5 text-[11px] font-medium leading-snug text-white shadow-lg group-hover:block group-focus-within:block",
			style: { borderColor: tooltipBorderColor },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block whitespace-normal break-words",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r bg-slate-950",
				style: {
					borderBottomColor: tooltipBorderColor,
					borderRightColor: tooltipBorderColor
				}
			})]
		})]
	});
}
function FocusedResourceIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute -inset-1.5 z-[5] rounded-[14px] border-2 border-indigo-500/70 shadow-lg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute -bottom-2.5 right-2 z-30 inline-flex items-center gap-1 rounded-full border border-white/80 bg-indigo-600 px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest text-white shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocateFixed, {
			className: "h-2.5 w-2.5",
			strokeWidth: 2.5
		}), "Viewing"]
	})] });
}
var SPEC_LABELS = {
	openapi: "OpenAPI",
	asyncapi: "AsyncAPI",
	graphql: "GraphQL"
};
var SPEC_COLORS = {
	openapi: {
		bg: "rgba(106,170,63,0.12)",
		text: "#4d7c0f",
		darkBg: "rgba(106,170,63,0.2)",
		darkText: "#a3e635"
	},
	asyncapi: {
		bg: "rgba(116,78,194,0.12)",
		text: "#6d28d9",
		darkBg: "rgba(116,78,194,0.2)",
		darkText: "#c4b5fd"
	},
	graphql: {
		bg: "rgba(229,53,171,0.12)",
		text: "#be185d",
		darkBg: "rgba(229,53,171,0.2)",
		darkText: "#f9a8d4"
	}
};
function normalizeSpecTypes(specs) {
	const types = /* @__PURE__ */ new Set();
	if (Array.isArray(specs)) {
		for (const spec of specs) if (spec?.type) types.add(String(spec.type).toLowerCase());
	} else if (specs && typeof specs === "object") {
		const legacy = specs;
		if (legacy.asyncapiPath) types.add("asyncapi");
		if (legacy.openapiPath) types.add("openapi");
		if (legacy.graphqlPath) types.add("graphql");
	}
	return Array.from(types);
}
var SpecBadges = (0, import_react.memo)(function SpecBadges2({ specifications, isDark }) {
	const specTypes = (0, import_react.useMemo)(() => normalizeSpecTypes(specifications), [specifications]);
	if (specTypes.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1 flex-wrap justify-end",
		children: specTypes.map((type) => {
			const colors = SPEC_COLORS[type] || SPEC_COLORS.openapi;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center text-[7px] font-bold px-1.5 py-0.5 rounded",
				style: {
					background: isDark ? colors.darkBg : colors.bg,
					color: isDark ? colors.darkText : colors.text
				},
				children: SPEC_LABELS[type] || type
			}, type);
		})
	});
});
var MiniEnvelope = (0, import_react.memo)(function MiniEnvelope2({ side, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "14",
		height: "10",
		viewBox: "0 0 14 10",
		style: {
			animation: `${side === "left" ? "ec-svc-msg-in" : "ec-svc-msg-out"} 2.5s ease-in-out ${delay}s infinite`,
			opacity: 0
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "0.5",
			y: "0.5",
			width: "13",
			height: "9",
			rx: "1.5",
			fill: "#9ca3af",
			opacity: .85
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0.5,0.5 L7,5 L13.5,0.5",
			fill: "none",
			stroke: "white",
			strokeWidth: "1",
			strokeLinejoin: "round"
		})]
	});
});
(0, import_react.memo)(function ServiceMessageFlow2({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			position: "absolute",
			top: "50%",
			[side]: -4,
			transform: "translateY(-50%)",
			display: "flex",
			flexDirection: "column",
			gap: 2,
			zIndex: 15,
			pointerEvents: "none"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniEnvelope, {
				side,
				delay: 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniEnvelope, {
				side,
				delay: .8
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniEnvelope, {
				side,
				delay: 1.6
			})
		]
	});
});
var GlowHandle = (0, import_react.memo)(function GlowHandle2({ side, external }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: external ? "linear-gradient(135deg, #a855f7, #7e22ce)" : "linear-gradient(135deg, #ec4899, #be185d)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: external ? "ec-external-handle-pulse 2s ease-in-out infinite" : "ec-service-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
});
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
var POST_IT_SERVICE = {
	Icon: Server,
	label: "Service",
	gradient: "linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 40%, #ec4899 100%)",
	draftBorder: "rgba(236, 72, 153, 0.5)",
	corner: "#db2777",
	ring: "ring-2 ring-pink-400/60 ring-offset-1",
	iconClass: "w-3 h-3 text-pink-900/50",
	labelClass: "text-[8px] font-bold text-pink-900/50 uppercase tracking-widest",
	nameText: "text-pink-950",
	nameTextDeprecated: "text-pink-950/40 line-through",
	versionClass: "text-[9px] text-pink-900/40 font-semibold mt-0.5",
	summaryClass: "mt-2 pt-1.5 border-t border-pink-900/10 text-[9px] text-pink-950/60 leading-relaxed overflow-hidden",
	tooltipBorderColor: "#ec4899"
};
var POST_IT_EXTERNAL = {
	Icon: Globe,
	label: "External System",
	gradient: "linear-gradient(135deg, #e9d5ff 0%, #c084fc 40%, #a855f7 100%)",
	draftBorder: "rgba(168, 85, 247, 0.5)",
	corner: "#7e22ce",
	ring: "ring-2 ring-purple-400/60 ring-offset-1",
	iconClass: "w-3 h-3 text-purple-900/50",
	labelClass: "text-[8px] font-bold text-purple-900/50 uppercase tracking-widest",
	nameText: "text-purple-950",
	nameTextDeprecated: "text-purple-950/40 line-through",
	versionClass: "text-[9px] text-purple-900/40 font-semibold mt-0.5",
	summaryClass: "mt-2 pt-1.5 border-t border-purple-900/10 text-[9px] text-purple-950/60 leading-relaxed overflow-hidden",
	tooltipBorderColor: "#a855f7"
};
var DEFAULT_SERVICE = {
	Icon: Server,
	label: "Service",
	ring: "ring-2 ring-pink-400/60 ring-offset-2",
	borderSolid: "border-pink-500",
	borderDraftDark: "border-dashed border-pink-400",
	borderDraftLight: "border-dashed border-pink-400/60",
	draftStripeDark: "rgba(236,72,153,0.25)",
	draftStripeLight: "rgba(236,72,153,0.15)",
	nodeBgVar: "var(--ec-service-node-bg, rgb(var(--ec-card-bg)))",
	shadowColor: "rgba(236, 72, 153, 0.15)",
	badgeBg: "bg-pink-500",
	ownerAccent: "bg-pink-400",
	ownerBorder: "rgba(236,72,153,0.08)",
	ownerIcon: "text-pink-300",
	tooltipBorderColor: "#ec4899"
};
var DEFAULT_EXTERNAL = {
	Icon: Globe,
	label: "External System",
	ring: "ring-2 ring-purple-400/60 ring-offset-2",
	borderSolid: "border-purple-500",
	borderDraftDark: "border-dashed border-purple-400",
	borderDraftLight: "border-dashed border-purple-400/60",
	draftStripeDark: "rgba(168,85,247,0.25)",
	draftStripeLight: "rgba(168,85,247,0.15)",
	nodeBgVar: "var(--ec-external-node-bg, rgb(var(--ec-card-bg)))",
	shadowColor: "rgba(168, 85, 247, 0.15)",
	badgeBg: "bg-purple-500",
	ownerAccent: "bg-purple-400",
	ownerBorder: "rgba(168,85,247,0.08)",
	ownerIcon: "text-purple-300",
	tooltipBorderColor: "#a855f7"
};
function PostItService(props) {
	const { version, name, summary, deprecated, draft, notes, specifications, externalSystem, styles } = props.data.service;
	const mode = props.data.mode || "simple";
	const isDark = useDarkMode();
	const p = externalSystem ? POST_IT_EXTERNAL : POST_IT_SERVICE;
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? p.ring : ""),
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: p.gradient,
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? `2px dashed ${p.draftBorder}` : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: `${p.corner} transparent transparent transparent`,
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, {
									className: p.iconClass,
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: p.labelClass,
									children: p.label
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-[26px] h-[26px] shrink-0" : "w-6 h-6 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: p.tooltipBorderColor,
							className: classNames("text-[13px] font-bold leading-snug min-w-0 truncate", deprecated ? p.nameTextDeprecated : p.nameText),
							children: name
						})]
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: p.versionClass,
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: p.summaryClass,
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					!!specifications && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecBadges, {
							specifications,
							isDark
						})
					})
				]
			})
		]
	});
}
function DefaultService(props) {
	const { version, name, summary, deprecated, draft, notes, specifications, externalSystem, styles } = props.data.service;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const owners = (0, import_react.useMemo)(() => normalizeOwners(props.data.service.owners), [props.data.service.owners]);
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	const p = externalSystem ? DEFAULT_EXTERNAL : DEFAULT_SERVICE;
	const draftStripe = isDark ? p.draftStripeDark : p.draftStripeLight;
	const borderDraft = isDark ? p.borderDraftDark : p.borderDraftLight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? p.ring : "", deprecated ? "border-dashed border-red-500" : draft ? borderDraft : p.borderSolid),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), ${p.nodeBgVar}` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${draftStripe} 4px, ${draftStripe} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${draftStripe} 4px, ${draftStripe} 4.5px), ${p.nodeBgVar}` : p.nodeBgVar,
			boxShadow: `0 2px 12px ${p.shadowColor}`
		},
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle, {
				side: "left",
				external: externalSystem
			}),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle, {
				side: "right",
				external: externalSystem
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : p.badgeBg),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						p.label,
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-[26px] h-[26px] shrink-0" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: p.tooltipBorderColor,
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
								children: [
									"(v",
									version,
									")"
								]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
							owners,
							accentColor: p.ownerAccent,
							borderColor: p.ownerBorder,
							iconClass: p.ownerIcon
						}), !!specifications && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecBadges, {
							specifications,
							isDark
						})]
					})
				]
			})
		]
	});
}
var ServiceNode_default = (0, import_react.memo)(function Service(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItService, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultService, { ...props });
});
function classNames2(...classes) {
	return classes.filter(Boolean).join(" ");
}
function GlowHandle3({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-dp-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
var getProviderIconSrc = (provider, isDark) => {
	if (!provider) return null;
	const providerIconName = provider.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
	return resolveIconUrl(providerIconName === "openai" || providerIconName === "anthropic" ? `/icons/agent/${providerIconName}-${isDark ? "dark" : "light"}.svg` : `/icons/agent/${providerIconName}.svg`);
};
function Agent(props) {
	const { version, name, summary, deprecated, draft, notes, owners, model, styles } = props.data.agent;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const normalizedOwners = (0, import_react.useMemo)(() => normalizeOwners(owners), [owners]);
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	const draftStripe = isDark ? "rgba(14,165,233,0.25)" : "rgba(14,165,233,0.15)";
	const providerLabel = model?.provider;
	const providerIconSrc = getProviderIconSrc(providerLabel, isDark);
	const modelLabel = model?.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames2("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-sky-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? "border-dashed border-sky-400" : "border-sky-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-agent-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${draftStripe} 4px, ${draftStripe} 4.5px), var(--ec-agent-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-agent-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(14, 165, 233, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle3, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle3, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames2("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-sky-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Agent",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-[26px] h-[26px] shrink-0" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: "#0ea5e9",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
								children: [
									"(v",
									version,
									")"
								]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					(providerLabel || modelLabel) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 flex-wrap mt-1.5",
						children: [providerLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center text-[7px] font-bold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-300 uppercase tracking-wide",
							children: [providerIconSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: providerIconSrc,
								alt: "",
								className: "w-2 h-2 shrink-0 mr-1 object-contain",
								loading: "lazy"
							}), providerLabel]
						}), modelLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center text-[7px] font-bold px-1.5 py-0.5 rounded bg-[rgb(var(--ec-page-bg))] text-[rgb(var(--ec-page-text-muted))] border border-sky-500/30 max-w-[8.5rem] truncate",
							children: modelLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
						owners: normalizedOwners,
						accentColor: "bg-sky-400",
						borderColor: "rgba(14,165,233,0.08)",
						iconClass: "text-sky-300"
					})
				]
			})
		]
	});
}
var Agent_default = (0, import_react.memo)(Agent);
var mcp_dark_default = "<svg fill=\"#ffffff\" fill-rule=\"evenodd\" height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>ModelContextProtocol</title><path d=\"M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z\"/><path d=\"M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z\"/></svg>";
var mcp_light_default = "<svg fill=\"#000000\" fill-rule=\"evenodd\" height=\"1em\" style=\"flex:none;line-height:1\" viewBox=\"0 0 24 24\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><title>ModelContextProtocol</title><path d=\"M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z\"/><path d=\"M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z\"/></svg>";
function classNames3(...classes) {
	return classes.filter(Boolean).join(" ");
}
var normalizeType = (type) => (type || "").trim().toLowerCase();
function ToolTypeBadge({ type }) {
	const isDark = useDarkMode();
	const normalizedType = normalizeType(type);
	const label = type.toUpperCase();
	if (normalizedType === "mcp") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 text-[7px] font-bold px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/25",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-2 h-2 shrink-0 [&>svg]:w-2 [&>svg]:h-2",
			dangerouslySetInnerHTML: { __html: isDark ? mcp_dark_default : mcp_light_default }
		}), "MCP"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center text-[7px] font-bold px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/25",
		children: label
	});
}
function GlowHandle4({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-dp-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function AgentTool(props) {
	const { name, type, icon, url, description } = props.data.agentTool;
	const customIcon = isIconPath(icon) ? icon : void 0;
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames3("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible border-violet-500", props?.selected ? "ring-2 ring-violet-400/60 ring-offset-2" : ""),
		style: {
			background: "var(--ec-agent-tool-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(139, 92, 246, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle4, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle4, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm bg-violet-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
						className: "w-2.5 h-2.5",
						strokeWidth: 2.5
					}), "Tool"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 min-w-0",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: "w-4 h-4 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							value: name,
							tooltipBorderColor: "#8b5cf6",
							className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
							children: name
						})]
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: description,
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex items-center gap-1 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolTypeBadge, { type }), url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center text-[7px] font-bold px-1.5 py-0.5 rounded bg-[rgb(var(--ec-page-bg))] text-[rgb(var(--ec-page-text-muted))] border border-violet-500/25 max-w-[9rem] truncate",
							children: url
						})]
					})
				]
			})
		]
	});
}
var AgentTool_default = (0, import_react.memo)(AgentTool);
var METHOD_COLORS = {
	GET: {
		bg: "rgba(34,197,94,0.15)",
		text: "#22c55e"
	},
	POST: {
		bg: "rgba(59,130,246,0.15)",
		text: "#3b82f6"
	},
	PUT: {
		bg: "rgba(245,158,11,0.15)",
		text: "#f59e0b"
	},
	PATCH: {
		bg: "rgba(245,158,11,0.15)",
		text: "#f59e0b"
	},
	DELETE: {
		bg: "rgba(239,68,68,0.15)",
		text: "#ef4444"
	},
	OPTIONS: {
		bg: "rgba(139,92,246,0.15)",
		text: "#8b5cf6"
	},
	HEAD: {
		bg: "rgba(107,114,128,0.15)",
		text: "#6b7280"
	}
};
var STATUS_COLORS = {
	"2": {
		bg: "rgba(34,197,94,0.15)",
		text: "#22c55e"
	},
	"3": {
		bg: "rgba(59,130,246,0.15)",
		text: "#3b82f6"
	},
	"4": {
		bg: "rgba(245,158,11,0.15)",
		text: "#f59e0b"
	},
	"5": {
		bg: "rgba(239,68,68,0.15)",
		text: "#ef4444"
	}
};
function getStatusColor(code) {
	return STATUS_COLORS[String(code)[0]] || STATUS_COLORS["2"];
}
var MethodBadge = (0, import_react.memo)(function MethodBadge2({ method }) {
	const upper = method.toUpperCase();
	const colors = METHOD_COLORS[upper] || {
		bg: "#6b7280",
		text: "#ffffff"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center text-[8px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded",
		style: {
			background: colors.bg,
			color: colors.text
		},
		children: upper
	});
});
var StatusCodes = (0, import_react.memo)(function StatusCodes2({ codes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1 flex-wrap mt-1.5",
		children: codes.map((code) => {
			const colors = getStatusColor(code);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center text-[8px] font-bold px-1.5 py-0.5 rounded",
				style: {
					background: colors.bg,
					color: colors.text
				},
				children: code
			}, code);
		})
	});
});
var ApiPath = (0, import_react.memo)(function ApiPath2({ path }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-[12px] font-mono font-medium text-[rgb(var(--ec-page-text))] truncate min-w-0",
		title: path,
		children: path
	});
});
var GlowHandle5 = (0, import_react.memo)(function GlowHandle6({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #fb923c, #ea580c)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
});
function classNames4(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItEvent(props) {
	const { version, name, summary, deprecated, draft, notes, styles } = props?.data?.message;
	const mode = props?.data?.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames4("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-orange-400/60 ring-offset-1" : ""),
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #fed7aa 0%, #fdba74 40%, #fb923c 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(-1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(251, 146, 60, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#f97316 transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
									className: "w-3 h-3 text-orange-900/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-orange-900/50 uppercase tracking-widest",
									children: "Event"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: "#f97316",
							className: classNames4("text-[13px] font-bold leading-snug min-w-0 truncate", deprecated ? "text-orange-950/40 line-through" : "text-orange-950"),
							children: name
						})]
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] text-orange-900/40 font-semibold mt-0.5",
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-orange-900/10 text-[9px] text-orange-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultEvent(props) {
	const { version, name, summary, deprecated, draft, schema, notes, method, path, statusCodes, styles } = props?.data?.message;
	const mode = props?.data?.mode || "simple";
	const hasApiInfo = !!(method || path);
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const owners = (0, import_react.useMemo)(() => normalizeOwners(props?.data?.message?.owners), [props?.data?.message?.owners]);
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames4("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-orange-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-orange-400" : "border-orange-400/60"}` : "border-orange-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-event-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(251,146,60,0.25)" : "rgba(251,146,60,0.15)"} 4px, ${isDark ? "rgba(251,146,60,0.25)" : "rgba(251,146,60,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(251,146,60,0.25)" : "rgba(251,146,60,0.15)"} 4px, ${isDark ? "rgba(251,146,60,0.25)" : "rgba(251,146,60,0.15)"} 4.5px), var(--ec-event-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-event-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(251, 146, 60, 0.15)"
		},
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle5, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle5, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames4("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-orange-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Event",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			schema && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "z-10 text-[7px] font-semibold text-[rgb(var(--ec-page-text))] bg-[rgb(var(--ec-card-bg))] border border-orange-500 rounded-full px-1.5 py-0.5 uppercase tracking-wide",
				style: {
					position: "absolute",
					top: -8,
					right: 10
				},
				children: schema.includes(".") ? schema.split(".").pop() : schema
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					hasApiInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 mb-1 overflow-hidden min-w-0",
						children: [method && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodBadge, { method }), path && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiPath, { path })]
					}),
					!hasApiInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: "#f97316",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-normal shrink-0",
								style: { color: isDark ? "#dce3eb" : "#6b7280" },
								children: [
									"(v",
									version,
									")"
								]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] leading-relaxed overflow-hidden",
						style: {
							...LINE_CLAMP_STYLE,
							color: isDark ? "#f0f4f8" : "#374151"
						},
						title: summary,
						children: summary
					}),
					statusCodes && statusCodes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCodes, { codes: statusCodes }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
							owners,
							accentColor: "bg-orange-400",
							borderColor: "rgba(251,146,60,0.08)",
							iconClass: "text-orange-300"
						}), notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
							notes,
							resourceName: name
						})]
					})
				]
			})
		]
	});
}
var EventNode_default = (0, import_react.memo)(function Event(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItEvent, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultEvent, { ...props });
});
var SERVICE = ["service", "services"];
var AGENT = ["agent", "agents"];
var AGENT_TOOL = ["agentTool", "agent-tool"];
var EVENT = ["event", "events"];
var QUERY = [
	"queries",
	"query",
	"querie"
];
var COMMAND = ["command", "commands"];
var CHANNEL = ["channel", "channels"];
var ACTOR = ["actor", "actors"];
var DATA = ["data"];
var VIEW = ["view"];
var MESSAGE = [
	...EVENT,
	...COMMAND,
	...QUERY
];
var config_default = {
	type: "event",
	icon: Zap,
	color: "orange",
	targetCanConnectTo: [...SERVICE, ...CHANNEL],
	sourceCanConnectTo: [...SERVICE, ...CHANNEL],
	validateConnection: (connection) => {
		return connection.source !== connection.target;
	},
	getEdgeOptions: (connection) => {
		if (EVENT.includes(connection.source) && SERVICE.includes(connection.target)) return {
			label: "Publishes",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
		return {
			label: "Subscribes",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
	},
	defaultData: {
		name: "New Event",
		version: "0.0.1",
		summary: "New event. Click edit to change the details.",
		mode: "full"
	},
	editor: {
		title: "Event",
		subtitle: "Edit the details of the event",
		schema: {
			type: "object",
			required: ["name", "version"],
			properties: {
				name: {
					type: "string",
					title: "Name",
					default: "Random value",
					description: "The name of the event. Use a verb-noun format (e.g., OrderPlaced)."
				},
				version: {
					type: "string",
					title: "Version",
					default: "1.0.0",
					description: "The version number (e.g., 1.0.0)",
					pattern: "^\\d+\\.\\d+\\.\\d+(?:-[\\w.-]+)?(?:\\+[\\w.-]+)?$"
				},
				summary: {
					type: "string",
					title: "Summary",
					default: "",
					description: "A brief summary of the event"
				}
			}
		}
	}
};
var GlowHandle7 = (0, import_react.memo)(function GlowHandle8({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #22c55e, #15803d)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-query-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
});
function classNames5(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItQuery(props) {
	const { version, name, summary, deprecated, draft, notes, styles } = props.data.message;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames5("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-green-400/60 ring-offset-1" : ""),
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #bbf7d0 0%, #86efac 40%, #22c55e 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(-1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(34, 197, 94, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#16a34a transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "w-3 h-3 text-green-900/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-green-900/50 uppercase tracking-widest",
									children: "Query"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: "#22c55e",
							className: classNames5("text-[13px] font-bold leading-snug min-w-0 truncate", deprecated ? "text-green-950/40 line-through" : "text-green-950"),
							children: name
						})]
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] text-green-900/40 font-semibold mt-0.5",
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-green-900/10 text-[9px] text-green-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultQuery(props) {
	const { version, name, summary, deprecated, draft, schema, notes, method, path, statusCodes, styles } = props.data.message;
	const mode = props.data.mode || "simple";
	const hasApiInfo = !!(method || path);
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const owners = (0, import_react.useMemo)(() => normalizeOwners(props.data.message?.owners), [props.data.message?.owners]);
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames5("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-green-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-green-400" : "border-green-400/60"}` : "border-green-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-query-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.15)"} 4px, ${isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.15)"} 4px, ${isDark ? "rgba(34,197,94,0.25)" : "rgba(34,197,94,0.15)"} 4.5px), var(--ec-query-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-query-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(34, 197, 94, 0.15)"
		},
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle7, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle7, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames5("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-green-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Query",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			schema && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "z-10 text-[7px] font-semibold text-[rgb(var(--ec-page-text))] bg-[rgb(var(--ec-card-bg))] border border-green-500 rounded-full px-1.5 py-0.5 uppercase tracking-wide",
				style: {
					position: "absolute",
					top: -8,
					right: 10
				},
				children: schema.includes(".") ? schema.split(".").pop() : schema
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					hasApiInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 mb-1 overflow-hidden min-w-0",
						children: [method && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodBadge, { method }), path && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiPath, { path })]
					}),
					!hasApiInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: "#22c55e",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
								children: [
									"(v",
									version,
									")"
								]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					statusCodes && statusCodes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCodes, { codes: statusCodes }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
						owners,
						accentColor: "bg-green-400",
						borderColor: "rgba(34,197,94,0.08)",
						iconClass: "text-green-300"
					})
				]
			})
		]
	});
}
var QueryNode_default = (0, import_react.memo)(function Query(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItQuery, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultQuery, { ...props });
});
var GlowHandle9 = (0, import_react.memo)(function GlowHandle10({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-command-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
});
function classNames6(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItCommand(props) {
	const { version, name, summary, deprecated, draft, notes, styles } = props.data.message;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames6("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-blue-400/60 ring-offset-1" : ""),
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #bfdbfe 0%, #93c5fd 40%, #3b82f6 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(-1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(59, 130, 246, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#1d4ed8 transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
									className: "w-3 h-3 text-blue-900/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-blue-900/50 uppercase tracking-widest",
									children: "Command"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: "#3b82f6",
							className: classNames6("text-[13px] font-bold leading-snug min-w-0 truncate", deprecated ? "text-blue-950/40 line-through" : "text-blue-950"),
							children: name
						})]
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] text-blue-900/40 font-semibold mt-0.5",
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-blue-900/10 text-[9px] text-blue-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultCommand(props) {
	const { version, name, summary, deprecated, draft, schema, notes, method, path, statusCodes, styles } = props.data.message;
	const mode = props.data.mode || "simple";
	const hasApiInfo = !!(method || path);
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const owners = (0, import_react.useMemo)(() => normalizeOwners(props.data.message?.owners), [props.data.message?.owners]);
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames6("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-blue-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-blue-400" : "border-blue-400/60"}` : "border-blue-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-command-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.15)"} 4px, ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.15)"} 4px, ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.15)"} 4.5px), var(--ec-command-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-command-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(59, 130, 246, 0.15)"
		},
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle9, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle9, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames6("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-blue-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Command",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			schema && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "z-10 text-[7px] font-semibold text-[rgb(var(--ec-page-text))] bg-[rgb(var(--ec-card-bg))] border border-blue-500 rounded-full px-1.5 py-0.5 uppercase tracking-wide",
				style: {
					position: "absolute",
					top: -8,
					right: 10
				},
				children: schema.includes(".") ? schema.split(".").pop() : schema
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					hasApiInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 mb-1 overflow-hidden min-w-0",
						children: [method && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodBadge, { method }), path && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiPath, { path })]
					}),
					!hasApiInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: "#3b82f6",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
								children: [
									"(v",
									version,
									")"
								]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					statusCodes && statusCodes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCodes, { codes: statusCodes }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
						owners,
						accentColor: "bg-blue-400",
						borderColor: "rgba(59,130,246,0.08)",
						iconClass: "text-blue-300"
					})
				]
			})
		]
	});
}
var CommandNode_default = (0, import_react.memo)(function Command(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItCommand, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultCommand, { ...props });
});
var DELIVERY_GUARANTEE_LABELS = {
	"at-most-once": "At most once",
	"at-least-once": "At least once",
	"exactly-once": "Exactly once"
};
var GUARANTEE_COLORS = {
	"exactly-once": {
		hex: "#22d3ee",
		rgb: "34,211,238"
	},
	"at-least-once": {
		hex: "#a78bfa",
		rgb: "167,139,250"
	},
	"at-most-once": {
		hex: "#f87171",
		rgb: "248,113,113"
	}
};
var DEFAULT_GUARANTEE = {
	hex: "#6b7280",
	rgb: "107,114,128"
};
function getGuarantee(guarantee) {
	return guarantee && GUARANTEE_COLORS[guarantee] || DEFAULT_GUARANTEE;
}
function GuaranteeDot({ guarantee, size = 6 }) {
	const { hex } = getGuarantee(guarantee);
	if (guarantee === "exactly-once") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "shrink-0 rounded-full",
		style: {
			width: size,
			height: size,
			background: hex
		}
	});
	if (guarantee === "at-least-once") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "shrink-0 rounded-full overflow-hidden",
		style: {
			width: size,
			height: size,
			background: `linear-gradient(90deg, ${hex} 50%, transparent 50%)`,
			border: `1.5px solid ${hex}`,
			boxSizing: "border-box"
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "shrink-0 rounded-full",
		style: {
			width: size,
			height: size,
			border: `1.5px solid ${hex}`,
			boxSizing: "border-box"
		}
	});
}
function GlowHandle11({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #6b7280, #374151)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-channel-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function classNames7(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItChannel(props) {
	const { data } = props;
	const { version, name, summary, deprecated, draft, protocols = EMPTY_ARRAY, notes, deliveryGuarantee, styles } = data.channel;
	const mode = props.data.mode || "simple";
	const guarantee = getGuarantee(deliveryGuarantee);
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames7("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-gray-400/60 ring-offset-1" : ""),
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 40%, #6b7280 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(-1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(107, 114, 128, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#374151 transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, {
								className: "w-3 h-3 text-gray-900/50",
								strokeWidth: 2.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-bold text-gray-900/50 uppercase tracking-widest",
								children: "Channel"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}), deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1.5 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								as: "div",
								value: name,
								tooltipBorderColor: "#6b7280",
								className: classNames7("text-[13px] font-bold leading-snug truncate", deprecated ? "text-gray-950/40 line-through" : "text-gray-950"),
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[9px] text-gray-900/30 font-medium shrink-0",
								children: ["v", version]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[9px] text-gray-950/50 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					(deliveryGuarantee || protocols?.[0]) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 flex-wrap mt-2",
						children: [deliveryGuarantee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-wide rounded-full px-1.5 py-0.5",
							style: {
								background: `rgba(${guarantee.rgb}, 0.12)`,
								color: guarantee.hex
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuaranteeDot, {
								guarantee: deliveryGuarantee,
								size: 5
							}), DELIVERY_GUARANTEE_LABELS[deliveryGuarantee] || deliveryGuarantee]
						}), protocols?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center text-[7px] font-semibold text-gray-900/50 bg-gray-900/10 rounded-full px-1.5 py-0.5 uppercase tracking-wide",
							children: protocols[0]
						})]
					})
				]
			})
		]
	});
}
function DefaultChannel(props) {
	const { data } = props;
	const { version, name, summary, deprecated, draft, protocols = EMPTY_ARRAY, address, notes, deliveryGuarantee, styles } = data.channel;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const owners = (0, import_react.useMemo)(() => normalizeOwners(data.channel?.owners), [data.channel?.owners]);
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const targetConnections = useNodeConnections({ handleType: "target" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	const guarantee = getGuarantee(deliveryGuarantee);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames7("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-gray-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-gray-400" : "border-gray-400/60"}` : isDark ? "border-gray-400" : "border-gray-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-channel-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(107,114,128,0.25)" : "rgba(107,114,128,0.15)"} 4px, ${isDark ? "rgba(107,114,128,0.25)" : "rgba(107,114,128,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(107,114,128,0.25)" : "rgba(107,114,128,0.15)"} 4px, ${isDark ? "rgba(107,114,128,0.25)" : "rgba(107,114,128,0.15)"} 4.5px), var(--ec-channel-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-channel-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(107, 114, 128, 0.15)"
		},
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle11, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle11, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames7("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-gray-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Channel",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1.5 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: "#6b7280",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[9px] font-normal shrink-0",
								style: {
									color: "rgb(var(--ec-page-text-muted))",
									opacity: .5
								},
								children: ["v", version]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: {
							...LINE_CLAMP_STYLE,
							marginBottom: 4
						},
						title: summary,
						children: summary
					}),
					mode === "full" && address && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "w-2.5 h-2.5 text-[rgb(var(--ec-page-text-muted))]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[8px] text-[rgb(var(--ec-page-text-muted))] font-mono",
							children: address
						})]
					}),
					(deliveryGuarantee || protocols?.[0]) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 flex-wrap mt-2",
						children: [deliveryGuarantee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-wide rounded-full px-1.5 py-0.5",
							style: {
								background: `rgba(${guarantee.rgb}, 0.08)`,
								color: guarantee.hex
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuaranteeDot, {
								guarantee: deliveryGuarantee,
								size: 5
							}), DELIVERY_GUARANTEE_LABELS[deliveryGuarantee] || deliveryGuarantee]
						}), protocols?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center text-[7px] font-semibold rounded-full px-1.5 py-0.5 uppercase tracking-wide",
							style: {
								background: isDark ? "rgba(255,255,255,0.08)" : "rgba(107,114,128,0.1)",
								color: "rgb(var(--ec-page-text-muted))"
							},
							children: protocols[0]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
						owners,
						accentColor: "bg-gray-400",
						borderColor: "rgba(107,114,128,0.08)",
						iconClass: "text-gray-300"
					})
				]
			})
		]
	});
}
var ChannelNode_default = (0, import_react.memo)(function Channel(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItChannel, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultChannel, { ...props });
});
function GlowHandle12({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #6366f1, #4f46e5)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-data-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function classNames8(...classes) {
	return classes.filter(Boolean).join(" ");
}
var CONTAINER_TYPE_LABELS = {
	database: "Database",
	cache: "Cache",
	objectStore: "Object Store",
	searchIndex: "Search Index",
	dataWarehouse: "Data Warehouse",
	dataLake: "Data Lake",
	externalSaaS: "External SaaS",
	other: "Other"
};
function getDataNodeTypeLabel(containerType, type) {
	if (containerType) return CONTAINER_TYPE_LABELS[containerType] ?? containerType;
	return type ?? "Database";
}
function PostItData(props) {
	const { version, owners = EMPTY_ARRAY, schemas = EMPTY_ARRAY, name, summary, deprecated, draft, notes, styles } = props.data.data;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames8("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-indigo-400/60 ring-offset-1" : ""),
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 40%, #6366f1 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(-1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(99, 102, 241, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#4f46e5 transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
									className: "w-3 h-3 text-indigo-950/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-indigo-950/50 uppercase tracking-widest",
									children: "Data"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: "#6366f1",
							className: classNames8("text-[13px] font-bold leading-snug min-w-0 truncate", deprecated ? "text-indigo-950/40 line-through" : "text-indigo-950"),
							children: name
						})]
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] text-indigo-950/40 font-semibold mt-0.5",
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-indigo-950/10 text-[9px] text-indigo-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultData(props) {
	const { version, owners = EMPTY_ARRAY, schemas = EMPTY_ARRAY, name, summary, type, container_type, deprecated, draft, notes, styles } = props.data.data;
	const typeLabel = getDataNodeTypeLabel(container_type, type);
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const ownersNormalized = (0, import_react.useMemo)(() => normalizeOwners(owners), [owners]);
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames8("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-indigo-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-indigo-400" : "border-indigo-400/60"}` : "border-indigo-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-data-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4.5px), var(--ec-data-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-data-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(99, 102, 241, 0.15)"
		},
		children: [
			props.data.isFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusedResourceIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle12, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle12, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames8("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-indigo-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Data",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			typeLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "z-10 text-[7px] font-semibold text-[rgb(var(--ec-page-text))] bg-[rgb(var(--ec-card-bg))] border border-indigo-500 rounded-full px-1.5 py-0.5 uppercase tracking-wide",
				style: {
					position: "absolute",
					top: -8,
					right: 10
				},
				children: typeLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-5 h-5 shrink-0 mt-0.5" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: "#6366f1",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: name
							}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
								children: [
									"(v",
									version,
									")"
								]
							})]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerIndicator, {
						owners: ownersNormalized,
						accentColor: "bg-indigo-400",
						borderColor: "rgba(99,102,241,0.08)",
						iconClass: "text-indigo-300"
					})
				]
			})
		]
	});
}
var DataNode_default = (0, import_react.memo)(function Data(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItData, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultData, { ...props });
});
var config_default2 = {
	type: "data",
	icon: Database,
	color: "indigo",
	targetCanConnectTo: [
		...SERVICE,
		...CHANNEL,
		"external-system",
		...ACTOR
	],
	sourceCanConnectTo: [
		...SERVICE,
		...CHANNEL,
		"external-system",
		...ACTOR
	],
	validateConnection: (connection) => {
		return connection.source !== connection.target;
	},
	getEdgeOptions: (connection) => {
		if (connection.source === "data" && connection.target === "service") return {
			label: "Provides data to",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
		if (connection.source === "service" && connection.target === "data") return {
			label: "Stores data in",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
		return {
			label: "Connected to",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
	},
	defaultData: {
		name: "New Database",
		version: "0.0.1",
		summary: "New data store. Click edit to change the details.",
		type: "Database",
		mode: "full"
	},
	editor: {
		title: "Data Store",
		subtitle: "Edit the details of the data store",
		schema: {
			type: "object",
			required: ["name", "version"],
			properties: {
				name: {
					type: "string",
					title: "Name",
					default: "UserDatabase",
					description: "The name of the data store"
				},
				version: {
					type: "string",
					title: "Version",
					default: "1.0.0",
					description: "The version number (e.g., 1.0.0)",
					pattern: "^\\d+\\.\\d+\\.\\d+(?:-[\\w.-]+)?(?:\\+[\\w.-]+)?$"
				},
				summary: {
					type: "string",
					title: "Summary",
					default: "",
					description: "A brief summary of the data store"
				},
				type: {
					type: "string",
					title: "Type",
					default: "Database",
					description: "The type of data store (Database, Cache, Queue, etc.)",
					enum: [
						"Database",
						"Cache",
						"Queue",
						"File System",
						"Data Lake",
						"Data Warehouse"
					]
				}
			}
		}
	}
};
function classNames9(...classes) {
	return classes.filter(Boolean).join(" ");
}
var ViewNode_default = (0, import_react.memo)(function View(props) {
	const { data: _data, selected } = props;
	const { name, summary, screenshot } = props.data.view;
	const mode = props.data.mode || "simple";
	const nodeLabel = "View";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames9("rounded-md border flex justify-start bg-[rgb(var(--ec-card-bg))] text-[rgb(var(--ec-page-text))] min-h-[100px] relative", selected ? "border-blue-600 ring-2 ring-blue-500 shadow-lg" : "border-blue-400"),
		style: NODE_WIDTH_STYLE,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				className: "!left-[-1px] !w-2.5 !h-2.5 !bg-blue-500 !border !border-blue-600 !rounded-full !z-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				className: "!right-[-1px] !w-2.5 !h-2.5 !bg-blue-500 !border !border-blue-600 !rounded-full !z-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `bg-gradient-to-b from-blue-500 to-blue-700 relative flex flex-col items-center w-5 justify-between rounded-l-sm text-blue-100 border-r-[1px] border-blue-500`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: `w-4 h-4 opacity-90 text-white mt-1 ${mode === "full" ? "mb-2" : "mb-1"}` }), mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-center text-[8px] text-white font-bold uppercase mb-4",
					style: ROTATED_LABEL_STYLE,
					children: nodeLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-1 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold block pt-0.5 pb-0.5",
							children: name
						}), mode === "simple" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-[rgb(var(--ec-page-text-muted))] font-light block pt-0.5 pb-0.5",
							children: nodeLabel
						})]
					}),
					summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pb-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[8px] font-light text-[rgb(var(--ec-page-text-muted))] block leading-tight overflow-hidden",
							style: LINE_CLAMP_STYLE,
							title: summary,
							children: summary
						})
					}),
					screenshot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: screenshot,
							alt: `${name} screenshot`,
							className: "w-full max-w-40 h-20 object-cover rounded border border-[rgb(var(--ec-page-border))]"
						})
					})
				]
			})
		]
	});
});
function GlowHandle13({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #eab308, #a16207)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-actor-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function classNames10(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItActor(props) {
	const { name, summary, deprecated, draft, notes } = props?.data;
	const mode = props?.data?.mode || "simple";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames10("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-yellow-400/60 ring-offset-1" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #fef9c3 0%, #fde047 40%, #eab308 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(234, 179, 8, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#a16207 transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
									className: "w-3 h-3 text-yellow-900/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-yellow-900/50 uppercase tracking-widest",
									children: "Actor"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						as: "div",
						value: name,
						tooltipBorderColor: "#eab308",
						className: classNames10("text-[13px] font-bold leading-snug truncate", deprecated ? "text-yellow-950/40 line-through" : "text-yellow-950"),
						children: name
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-yellow-900/10 text-[9px] text-yellow-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultActor(props) {
	const { name, summary, deprecated, draft, notes } = props?.data;
	const mode = props?.data?.mode || "simple";
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames10("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-yellow-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-yellow-400" : "border-yellow-400/60"}` : "border-yellow-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-actor-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(234,179,8,0.25)" : "rgba(234,179,8,0.15)"} 4px, ${isDark ? "rgba(234,179,8,0.25)" : "rgba(234,179,8,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(234,179,8,0.25)" : "rgba(234,179,8,0.15)"} 4px, ${isDark ? "rgba(234,179,8,0.25)" : "rgba(234,179,8,0.15)"} 4.5px), var(--ec-actor-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-actor-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(234, 179, 8, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle13, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle13, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames10("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-yellow-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Actor",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
					as: "div",
					value: name,
					tooltipBorderColor: "#eab308",
					className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
					children: name
				}), mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
					style: LINE_CLAMP_STYLE,
					title: summary,
					children: summary
				})]
			})
		]
	});
}
var ActorNode_default = (0, import_react.memo)(function Actor(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItActor, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultActor, { ...props });
});
var config_default3 = {
	type: "actor",
	icon: User,
	color: "yellow",
	targetCanConnectTo: [
		...SERVICE,
		...MESSAGE,
		...CHANNEL,
		"external-system",
		"view"
	],
	sourceCanConnectTo: [
		...SERVICE,
		...MESSAGE,
		...CHANNEL,
		"external-system",
		"view"
	],
	validateConnection: (connection) => {
		return connection.source !== connection.target;
	},
	getEdgeOptions: (_connection) => {
		return {
			label: "Interacts",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
	},
	defaultData: {
		name: "New Actor",
		summary: "A person or user in the system. Click edit to change the details.",
		mode: "full"
	},
	editor: {
		title: "Actor",
		subtitle: "Edit the details of the actor",
		schema: {
			type: "object",
			required: ["name"],
			properties: {
				name: {
					type: "string",
					title: "Name",
					default: "New Actor",
					description: "The name of the actor (person/user)"
				},
				summary: {
					type: "string",
					title: "Description",
					default: "",
					description: "A brief description of the actor"
				}
			}
		}
	}
};
var ContextActor_default = (0, import_react.memo)(function ContextActorNode({ data }) {
	const { name } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex w-44 flex-col items-center rounded-2xl border-2 border-yellow-500 bg-[var(--ec-actor-node-bg,rgb(var(--ec-card-bg)))] px-3 pb-3 pt-5",
		style: { boxShadow: "0 2px 12px rgba(234, 179, 8, 0.15)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-4 left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-8 w-8 items-center justify-center rounded-full border-2 border-yellow-500 bg-[rgb(var(--ec-card-bg))] shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						className: "h-4 w-4 text-yellow-500",
						strokeWidth: 2
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
				as: "div",
				value: name,
				className: "mt-1 max-w-full text-center text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 text-[8px] font-bold uppercase tracking-widest text-yellow-600 dark:text-yellow-400",
				children: "Actor"
			})
		]
	});
});
var CONTAINER_STYLE = {
	width: "100%",
	height: "100%",
	borderRadius: 14,
	border: "2px solid var(--ec-system-group-border, #c4b5fd)",
	backgroundColor: "var(--ec-system-group-bg, rgba(100, 116, 139, 0.06))",
	position: "relative",
	overflow: "visible",
	boxShadow: "0 2px 16px rgba(139, 92, 246, 0.10)"
};
var HEADER_STYLE = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	height: 48,
	borderTopLeftRadius: 12,
	borderTopRightRadius: 12,
	background: "var(--ec-system-group-header-bg, rgba(139, 92, 246, 0.05))",
	borderBottom: "1px solid var(--ec-system-group-border, #c4b5fd)",
	display: "flex",
	alignItems: "center",
	padding: "0 16px",
	overflow: "visible"
};
var BADGE_STYLE = {
	position: "absolute",
	top: -11,
	left: 14,
	display: "inline-flex",
	alignItems: "center",
	gap: 4,
	fontSize: 8,
	fontWeight: 700,
	letterSpacing: "0.12em",
	textTransform: "uppercase",
	color: "white",
	background: "#8b5cf6",
	padding: "2px 7px",
	borderRadius: 5,
	boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
	zIndex: 10
};
var NAME_STYLE = {
	fontSize: 14,
	fontWeight: 700,
	color: "var(--ec-system-group-text, #5b21b6)",
	whiteSpace: "nowrap"
};
var VERSION_STYLE = {
	fontSize: 10,
	fontWeight: 500,
	color: "#a78bfa",
	marginLeft: 6
};
var SystemGroupNode_default = (0, import_react.memo)(function SystemGroupNode({ data }) {
	const { system } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: CONTAINER_STYLE,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			style: BADGE_STYLE,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
				size: 10,
				strokeWidth: 2.5
			}), "System"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: HEADER_STYLE,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
				value: system?.name || "System",
				tooltipBorderColor: "#8b5cf6",
				className: "truncate",
				style: NAME_STYLE,
				children: system?.name || "System"
			}), system?.version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: VERSION_STYLE,
				children: ["v", system.version]
			})]
		})]
	});
});
function GlowHandle14({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #a855f7, #7e22ce)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-external-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function classNames11(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItExternalSystem(props) {
	const { version, name, summary, deprecated, draft, notes } = props.data.externalSystem;
	const mode = props.data.mode || "simple";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames11("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-purple-400/60 ring-offset-1" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #e9d5ff 0%, #c084fc 40%, #a855f7 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(-1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(168, 85, 247, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#7e22ce transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
									className: "w-3 h-3 text-purple-900/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-purple-900/50 uppercase tracking-widest",
									children: "External"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						as: "div",
						value: name,
						tooltipBorderColor: "#a855f7",
						className: classNames11("text-[13px] font-bold leading-snug truncate", deprecated ? "text-purple-950/40 line-through" : "text-purple-950"),
						children: name
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] text-purple-900/40 font-semibold mt-0.5",
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-purple-900/10 text-[9px] text-purple-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultExternalSystem(props) {
	const { version, name, summary, deprecated, draft, notes } = props.data.externalSystem;
	const mode = props.data.mode || "simple";
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames11("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-purple-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-purple-400" : "border-purple-400/60"}` : "border-purple-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-external-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(168,85,247,0.25)" : "rgba(168,85,247,0.15)"} 4px, ${isDark ? "rgba(168,85,247,0.25)" : "rgba(168,85,247,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(168,85,247,0.25)" : "rgba(168,85,247,0.15)"} 4px, ${isDark ? "rgba(168,85,247,0.25)" : "rgba(168,85,247,0.15)"} 4.5px), var(--ec-external-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-external-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(168, 85, 247, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle14, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle14, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames11("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-purple-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"External System",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						value: name,
						tooltipBorderColor: "#a855f7",
						className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
						children: name
					}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
						children: [
							"(v",
							version,
							")"
						]
					})]
				}), mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
					style: LINE_CLAMP_STYLE,
					title: summary,
					children: summary
				})]
			})
		]
	});
}
var ExternalSystem_default = (0, import_react.memo)(function ExternalSystem(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItExternalSystem, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultExternalSystem, { ...props });
});
var config_default4 = {
	type: "external-system",
	icon: Globe,
	color: "pink",
	targetCanConnectTo: [
		...SERVICE,
		...CHANNEL,
		...MESSAGE,
		...ACTOR
	],
	sourceCanConnectTo: [
		...SERVICE,
		...CHANNEL,
		...MESSAGE,
		...ACTOR
	],
	validateConnection: (connection) => {
		return connection.source !== connection.target;
	},
	getEdgeOptions: (connection) => {
		return {
			label: "Connects",
			markerEnd: {
				type: MarkerType.ArrowClosed,
				color: "#000000"
			}
		};
	},
	defaultData: {
		mode: "full",
		externalSystem: {
			id: "1",
			name: "New External System",
			version: "0.0.1",
			summary: "New external system. Click edit to change the details."
		}
	},
	editor: {
		title: "External System",
		subtitle: "Edit the details of the external system",
		schema: {
			type: "object",
			required: ["externalSystem", "mode"],
			properties: { externalSystem: {
				type: "object",
				required: ["name", "version"],
				properties: {
					name: {
						type: "string",
						title: "Name",
						default: "Random value",
						description: "The name of the external system"
					},
					version: {
						type: "string",
						title: "Version",
						default: "1.0.0",
						description: "The version number (e.g., 1.0.0)",
						pattern: "^\\d+\\.\\d+\\.\\d+(?:-[\\w.-]+)?(?:\\+[\\w.-]+)?$"
					},
					summary: {
						type: "string",
						title: "Summary",
						default: "",
						description: "A brief summary of the external system"
					}
				}
			} }
		}
	}
};
function classNames12(...classes) {
	return classes.filter(Boolean).join(" ");
}
var AVAILABLE_COLORS = {
	yellow: {
		bg: "bg-gradient-to-br from-yellow-200 to-yellow-300",
		border: "border-yellow-400",
		text: "text-yellow-900",
		placeholder: "placeholder-yellow-600",
		selectedRing: "ring-yellow-500",
		tooltipBorderColor: "#facc15"
	},
	blue: {
		bg: "bg-blue-200",
		border: "border-blue-400",
		text: "text-blue-900",
		placeholder: "placeholder-blue-600",
		selectedRing: "ring-blue-500",
		tooltipBorderColor: "#60a5fa"
	},
	green: {
		bg: "bg-green-200",
		border: "border-green-400",
		text: "text-green-900",
		placeholder: "placeholder-green-600",
		selectedRing: "ring-green-500",
		tooltipBorderColor: "#4ade80"
	},
	pink: {
		bg: "bg-pink-200",
		border: "border-pink-400",
		text: "text-pink-900",
		placeholder: "placeholder-pink-600",
		selectedRing: "ring-pink-500",
		tooltipBorderColor: "#f472b6"
	},
	purple: {
		bg: "bg-purple-200",
		border: "border-purple-400",
		text: "text-purple-900",
		placeholder: "placeholder-purple-600",
		selectedRing: "ring-purple-500",
		tooltipBorderColor: "#c084fc"
	},
	gray: {
		bg: "bg-gray-200",
		border: "border-gray-400",
		text: "text-gray-900",
		placeholder: "placeholder-gray-600",
		selectedRing: "ring-gray-500",
		tooltipBorderColor: "#9ca3af"
	}
};
var POSITION_RELATIVE_STYLE = { position: "relative" };
var TEXTAREA_STYLE = {
	height: "100%",
	minHeight: 0
};
var NoteNode_default = (0, import_react.memo)(function NoteNodeComponent({ id, data, selected, onTextChange, onColorChange, readOnly = false }) {
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [currentText, setCurrentText] = (0, import_react.useState)(data.text || "Double-click to edit...");
	const [isTextOverflowing, setIsTextOverflowing] = (0, import_react.useState)(false);
	const textAreaRef = (0, import_react.useRef)(null);
	const displayRef = (0, import_react.useRef)(null);
	const currentColorName = data.color || "yellow";
	const colorClasses = AVAILABLE_COLORS[currentColorName] || AVAILABLE_COLORS.yellow;
	const formatText = (text) => {
		return text.replace(/^### (.*$)/gim, "<h3 class=\"text-xs font-medium mb-1\">$1</h3>").replace(/^## (.*$)/gim, "<h2 class=\"text-xs font-semibold mb-1\">$1</h2>").replace(/^# (.*$)/gim, "<h1 class=\"text-sm font-bold mb-1\">$1</h1>").replace(/\*\*(.*?)\*\*/gim, "<strong class=\"font-bold\">$1</strong>").replace(/\*(.*?)\*/gim, "<em class=\"italic\">$1</em>").replace(/`(.*?)`/gim, "<code class=\"bg-gray-200 px-1 rounded text-[9px] font-mono\">$1</code>").replace(/^• (.*$)/gim, "<li class=\"text-[10px] ml-3\">• $1</li>").replace(/^- (.*$)/gim, "<li class=\"text-[10px] ml-3\">• $1</li>").replace(/\n/g, "<br>");
	};
	(0, import_react.useEffect)(() => {
		setCurrentText(data.text || "Double-click to edit...");
	}, [data.text]);
	(0, import_react.useEffect)(() => {
		if (isEditing && textAreaRef.current) {
			textAreaRef.current.focus();
			textAreaRef.current.select();
		}
	}, [isEditing]);
	(0, import_react.useEffect)(() => {
		const element = displayRef.current;
		if (!element || isEditing) return;
		const updateOverflow = () => {
			setIsTextOverflowing(element.scrollHeight > element.clientHeight);
		};
		updateOverflow();
		if (typeof ResizeObserver === "undefined") {
			window.addEventListener("resize", updateOverflow);
			return () => window.removeEventListener("resize", updateOverflow);
		}
		const observer = new ResizeObserver(updateOverflow);
		observer.observe(element);
		return () => observer.disconnect();
	}, [currentText, isEditing]);
	const handleDoubleClick = (0, import_react.useCallback)(() => {
		if (!readOnly) setIsEditing(true);
	}, [readOnly]);
	const handleTextChange = (0, import_react.useCallback)((event) => {
		setCurrentText(event.target.value);
	}, []);
	const handleBlur = (0, import_react.useCallback)(() => {
		setIsEditing(false);
		if (currentText !== data.text && onTextChange) onTextChange(id, currentText);
	}, [
		currentText,
		data.text,
		id,
		onTextChange
	]);
	const handleKeyDown = (0, import_react.useCallback)((event) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			handleBlur();
		}
		if (event.key === "Escape") {
			setIsEditing(false);
			setCurrentText(data.text || "Double-click to edit...");
		}
	}, [handleBlur, data.text]);
	const handleColorChange = (0, import_react.useCallback)((newColor) => {
		if (onColorChange) onColorChange(id, newColor);
	}, [id, onColorChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative group",
		style: FULL_SIZE_STYLE,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				className: "!left-[-1px] !w-2 !h-2 !bg-gray-400 !border !border-gray-500 !rounded-full !z-10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				className: "!right-[-1px] !w-2 !h-2 !bg-gray-400 !border !border-gray-500 !rounded-full !z-10"
			}),
			selected && !isEditing && !readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-10 left-1/2 transform -translate-x-1/2 flex space-x-1 p-1 bg-[rgb(var(--ec-card-bg))] rounded-md shadow-lg border border-[rgb(var(--ec-page-border))] z-20",
				children: Object.keys(AVAILABLE_COLORS).map((colorKey) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleColorChange(colorKey),
					className: classNames12("w-6 h-6 rounded-full border-2", AVAILABLE_COLORS[colorKey].bg, AVAILABLE_COLORS[colorKey].border, currentColorName === colorKey ? "ring-2 ring-offset-1 " + AVAILABLE_COLORS[colorKey].selectedRing : ""),
					title: colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
				}, colorKey))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDoubleClick: handleDoubleClick,
				className: classNames12("w-full h-full rounded-lg border p-3 flex flex-col min-w-[150px] min-h-[150px] relative", colorClasses.bg, colorClasses.border, colorClasses.text, "prose prose-sm max-w-full", selected ? `border-blue-600 ring-2 ${colorClasses.selectedRing} shadow-xl` : "shadow-md hover:shadow-lg", currentColorName === "yellow" ? "shadow-yellow-300/50 shadow-lg transform rotate-0.5" : ""),
				style: POSITION_RELATIVE_STYLE,
				children: [isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref: textAreaRef,
					value: currentText,
					onChange: handleTextChange,
					onBlur: handleBlur,
					onKeyDown: handleKeyDown,
					className: classNames12("w-full flex-1 bg-transparent border-none outline-none resize-none text-[10px] p-0 m-0", colorClasses.text, colorClasses.placeholder),
					style: TEXTAREA_STYLE,
					placeholder: "Enter text..."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: displayRef,
					className: "whitespace-pre-wrap break-words w-full h-full overflow-y-auto custom-scrollbar text-[10px]",
					dangerouslySetInnerHTML: { __html: formatText(currentText) }
				}), isTextOverflowing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute left-1/2 bottom-full z-[9999] mb-4 hidden w-max max-w-[320px] -translate-x-1/2 rounded-md border bg-slate-950 px-2.5 py-1.5 text-[11px] font-medium leading-snug text-white shadow-lg group-hover:block",
					style: { borderColor: colorClasses.tooltipBorderColor },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block whitespace-pre-wrap break-words",
						children: currentText
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r bg-slate-950",
						style: {
							borderBottomColor: colorClasses.tooltipBorderColor,
							borderRightColor: colorClasses.tooltipBorderColor
						}
					})]
				})] }), currentColorName === "yellow" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 right-0 w-4 h-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-0 h-0 border-l-[16px] border-b-[16px] border-l-transparent border-b-yellow-400/30 rounded-br-lg" })
				})]
			})
		]
	});
});
function GlowHandle15({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #06b6d4, #0891b2)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function classNames13(...classes) {
	return classes.filter(Boolean).join(" ");
}
var FieldNode_default = (0, import_react.memo)(function Field(props) {
	const { name, type: fieldType } = props.data;
	const mode = props.data.mode || "simple";
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	useDarkMode();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames13("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-cyan-400/60 ring-offset-2" : "", "border-cyan-500"),
		style: {
			background: "var(--ec-field-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(6, 182, 212, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle15, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle15, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm bg-cyan-600",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
						className: "w-2.5 h-2.5",
						strokeWidth: 2.5
					}), "Field"]
				})
			}),
			fieldType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "z-10 text-[7px] font-semibold text-[rgb(var(--ec-page-text))] bg-[rgb(var(--ec-card-bg))] border border-cyan-500 rounded-full px-1.5 py-0.5 uppercase tracking-wide",
				style: {
					position: "absolute",
					top: -8,
					right: 10
				},
				children: fieldType
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-baseline gap-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))]",
						children: name
					})
				}), mode === "full" && fieldType && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed",
					title: `Type: ${fieldType}`,
					children: ["Type: ", fieldType]
				})]
			})
		]
	});
});
var config_default5 = {
	type: "field",
	icon: Database,
	color: "cyan",
	targetCanConnectTo: [],
	sourceCanConnectTo: [],
	validateConnection: () => false,
	getEdgeOptions: () => ({
		label: "contains",
		markerEnd: {
			type: MarkerType.ArrowClosed,
			color: "#06b6d4"
		}
	}),
	defaultData: {
		name: "New Field",
		type: "string",
		mode: "full"
	},
	editor: {
		title: "Field",
		subtitle: "Schema field",
		schema: {
			type: "object",
			required: ["name"],
			properties: {
				name: {
					type: "string",
					title: "Field Path"
				},
				type: {
					type: "string",
					title: "Type"
				}
			}
		}
	}
};
function AwsEventBridge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				x1: "0%",
				y1: "100%",
				x2: "100%",
				y2: "0%",
				id: "eb-g",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "#B0084D",
					offset: "0%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "#FF4F8B",
					offset: "100%"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "40",
				rx: "4",
				fill: "url(#eb-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FFF",
				d: "M11.056 28.594a2.09 2.09 0 01-2.08-2.096 2.09 2.09 0 012.08-2.095c1.146 0 2.08.94 2.08 2.095a2.09 2.09 0 01-2.08 2.096zm1.857.363a3.093 3.093 0 001.223-2.459c0-1.711-1.382-3.103-3.08-3.103-.42 0-.817.086-1.181.24l-1.799-3.139 2.362-4.122-.865-.504-2.506 4.375a.504.504 0 000 .503l1.966 3.43a3.09 3.09 0 00-1.056 2.32c0 1.712 1.38 3.104 3.079 3.104.342 0 .665-.07.973-.174l1.531 2.844a.5.5 0 00.44.263h5.5v-1.008h-5.203l-1.385-2.57zM29.944 16.56a2.09 2.09 0 01-2.08-2.096 2.09 2.09 0 012.08-2.096 2.09 2.09 0 012.078 2.096 2.09 2.09 0 01-2.079 2.096zm2.023.224a3.095 3.095 0 001.055-2.32c0-1.711-1.38-3.104-3.079-3.104-.34 0-.662.07-.97.173L27.442 8.62A.497.497 0 0027 8.351h-5.5V9.36h5.2l1.39 2.644a3.1 3.1 0 00-1.226 2.462c0 1.71 1.381 3.103 3.08 3.103.42 0 .818-.086 1.18-.24l1.799 3.14-2.362 4.12.866.504 2.505-4.373a.504.504 0 000-.504l-1.965-3.43zm-4.573 16.207a2.09 2.09 0 01-2.08-2.095 2.09 2.09 0 012.08-2.095 2.09 2.09 0 012.079 2.095 2.09 2.09 0 01-2.08 2.095zm-9.19-8.491l-2.293-4.002 2.292-4h4.584l2.294 4-2.294 4.002h-4.584zm-4.568-12.303a2.09 2.09 0 01-2.08-2.095 2.09 2.09 0 012.08-2.095c1.146 0 2.08.94 2.08 2.095a2.09 2.09 0 01-2.08 2.095zm13.758 15.596c-.625 0-1.206.191-1.692.515l-2.07-3.267 2.46-4.29a.504.504 0 000-.504l-2.582-4.505a.498.498 0 00-.433-.252h-4.752l-2.279-3.481a3.088 3.088 0 00.67-1.907c0-1.711-1.382-3.103-3.08-3.103-1.699 0-3.08 1.392-3.08 3.103 0 1.712 1.381 3.103 3.08 3.103a3.04 3.04 0 001.668-.502l2.09 3.194-2.492 4.35a.504.504 0 000 .503l2.58 4.506a.497.497 0 00.433.252h4.828l2.218 3.505A3.092 3.092 0 0027.395 34c1.698 0 3.079-1.393 3.079-3.103 0-1.712-1.381-3.103-3.08-3.103z"
			})
		]
	});
}
function AwsSqs({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				x1: "0%",
				y1: "100%",
				x2: "100%",
				y2: "0%",
				id: "sqs-g",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "#B0084D",
					offset: "0%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "#FF4F8B",
					offset: "100%"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "40",
				rx: "4",
				fill: "url(#sqs-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FFF",
				d: "M14.342 22.35l1.505-1.444a.501.501 0 00.013-.708l-1.505-1.555-.72.695.676.7h-2.32v.999h2.274l-.617.592.694.72zm12.016.003l1.55-1.453a.5.5 0 00.011-.717l-1.55-1.546-.708.707.694.694H24.01v.999H26.3l-.627.588.686.728zm-8.77 1.008a6.458 6.458 0 012.417-.467c.842 0 1.665.163 2.416.467-.669-1.771-.669-3.971 0-5.742-1.502.607-3.331.607-4.833 0 .669 1.77.669 3.97 0 5.742zm-1.944 1.98a.494.494 0 010-.707c1.94-1.936 1.94-6.352 0-8.289a.494.494 0 010-.706.502.502 0 01.709 0c.921.92 2.252 1.447 3.652 1.447 1.4 0 2.731-.528 3.653-1.447a.502.502 0 01.854.354c0 .128-.05.255-.146.352-1.942 1.937-1.942 6.353 0 8.29a.501.501 0 01-.708.706c-.922-.92-2.253-1.447-3.653-1.447s-2.731.527-3.652 1.447a.502.502 0 01-.709 0zm16.898-5.905a1.562 1.562 0 00-1.106-.456 1.558 1.558 0 00-1.105 2.662c.61.608 1.601.608 2.211 0a1.56 1.56 0 000-2.206zm.708 2.913a2.56 2.56 0 01-1.814.749 2.56 2.56 0 01-1.813-4.369c1-.997 2.628-.997 3.627 0 1 .999 1 2.622 0 3.62zM9.67 19.447a1.562 1.562 0 00-1.106-.456 1.56 1.56 0 00-1.105 2.662 1.56 1.56 0 102.21-2.206zm.708 2.912a2.56 2.56 0 01-1.814.749A2.559 2.559 0 016.75 18.74c1-.997 2.627-.997 3.627 0 1 .999 1 2.622 0 3.62zm17.057 6.551A10.514 10.514 0 0119.957 32a10.51 10.51 0 01-7.475-3.09c-1.316-1.312-2.074-2.44-2.537-3.774l-.947.327c.51 1.466 1.365 2.747 2.776 4.154A11.506 11.506 0 0019.957 33c3.093 0 6-1.201 8.185-3.383 1.14-1.139 2.279-2.43 2.87-4.156l-.948-.323c-.525 1.532-1.575 2.719-2.63 3.772zM9.945 15.86l-.947-.328c.512-1.467 1.368-2.749 2.778-4.156 4.51-4.5 11.85-4.502 16.362 0 1.08 1.077 2.266 2.414 2.874 4.156l-.948.328c-.54-1.55-1.635-2.78-2.634-3.777a10.508 10.508 0 00-7.473-3.087 10.508 10.508 0 00-7.472 3.087c-1.298 1.295-2.081 2.46-2.54 3.777z"
			})
		]
	});
}
function AwsSns({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				x1: "0%",
				y1: "100%",
				x2: "100%",
				y2: "0%",
				id: "sns-g",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "#B0084D",
					offset: "0%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					stopColor: "#FF4F8B",
					offset: "100%"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "40",
				height: "40",
				rx: "4",
				fill: "url(#sns-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FFF",
				d: "M7.01 20.078a1.1 1.1 0 011.105-1.093 1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.105-1.093zM20.776 33C14.813 33 9.645 28.375 8.47 22.136a2.1 2.1 0 001.69-1.558h2.949v-1h-2.95a2.104 2.104 0 00-1.653-1.554C9.72 12.252 14.838 8 20.776 8c2.933 0 5.354.643 7.194 1.911l.575-.821C26.534 7.703 23.92 7 20.776 7c-6.51 0-12.104 4.726-13.308 11.096C6.62 18.368 6 19.149 6 20.078c0 .916.602 1.688 1.431 1.971C8.591 28.894 14.24 34 20.776 34c3.285 0 6.788-1.667 8.786-3.094l-.59-.811C26.947 31.541 23.627 33 20.777 33zM14.79 18.242c1.111.274 2.523.321 3.343.321.833 0 2.271-.047 3.402-.32l-2.401 5.014a.507.507 0 00-.048.215v2.324l-1.957.915v-3.239a.514.514 0 00-.044-.206l-2.295-5.024zm3.343-1.757c2.314 0 3.554.311 3.951.52-.417.234-1.745.558-3.95.558-2.184 0-3.483-.327-3.873-.558.37-.206 1.582-.52 3.872-.52zm-1.78 11.438a.511.511 0 00.486.03l2.968-1.388a.5.5 0 00.288-.452v-2.529l2.909-6.074a.806.806 0 00.189-.51c0-1.252-2.751-1.515-5.06-1.515-2.266 0-4.969.263-4.969 1.515 0 .19.067.355.18.502l2.775 6.077V27.5c0 .172.088.331.235.423zM30.877 27a1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.104-1.093A1.1 1.1 0 0130.876 27zm0-16.03a1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.104-1.093 1.1 1.1 0 011.104-1.093zm1.01 8.015a1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.104-1.093 1.1 1.1 0 011.104-1.093zm-4.607 1.593h2.561a2.108 2.108 0 002.046 1.593A2.106 2.106 0 0034 20.078a2.106 2.106 0 00-2.114-2.093c-.992 0-1.818.681-2.046 1.593H27.28v-7.015h1.551a2.108 2.108 0 002.046 1.593 2.106 2.106 0 002.114-2.093 2.106 2.106 0 00-2.114-2.093c-.991 0-1.818.681-2.046 1.593h-2.056a.502.502 0 00-.505.5v7.515h-3.061v1h3.061v7.515c0 .277.226.5.505.5h2.056a2.108 2.108 0 002.046 1.593 2.106 2.106 0 002.114-2.093A2.106 2.106 0 0030.876 26c-.991 0-1.818.681-2.046 1.593H27.28v-7.015z"
			})
		]
	});
}
var protocolIconMap = {
	http: {
		component: Server,
		type: "lucide"
	},
	https: {
		component: Server,
		type: "lucide"
	},
	ws: {
		component: Radio,
		type: "lucide"
	},
	wss: {
		component: Radio,
		type: "lucide"
	},
	websocket: {
		component: Radio,
		type: "lucide"
	},
	mqtt: {
		component: Wifi,
		type: "lucide"
	},
	amqp: {
		component: Network,
		type: "lucide"
	},
	grpc: {
		component: Globe,
		type: "lucide"
	},
	graphql: {
		component: Globe,
		type: "lucide"
	},
	kafka: {
		component: Network,
		type: "lucide"
	},
	rabbitmq: {
		component: Network,
		type: "lucide"
	},
	redis: {
		component: Network,
		type: "lucide"
	},
	nats: {
		component: Network,
		type: "lucide"
	},
	pulsar: {
		component: Network,
		type: "lucide"
	},
	solace: {
		component: Network,
		type: "lucide"
	},
	activemq: {
		component: Network,
		type: "lucide"
	},
	sqs: {
		component: AwsSqs,
		type: "svg"
	},
	sns: {
		component: AwsSns,
		type: "svg"
	},
	eventbridge: {
		component: AwsEventBridge,
		type: "svg"
	},
	kinesis: {
		component: Network,
		type: "lucide"
	},
	msk: {
		component: Network,
		type: "lucide"
	},
	pubsub: {
		component: Cloud,
		type: "lucide"
	},
	googlepubsub: {
		component: Cloud,
		type: "lucide"
	},
	cloudtasks: {
		component: Cloud,
		type: "lucide"
	},
	servicebus: {
		component: Cloud,
		type: "lucide"
	},
	azureservicebus: {
		component: Cloud,
		type: "lucide"
	},
	eventhubs: {
		component: Cloud,
		type: "lucide"
	},
	azureeventhubs: {
		component: Cloud,
		type: "lucide"
	},
	eventgrid: {
		component: Cloud,
		type: "lucide"
	},
	azureeventgrid: {
		component: Cloud,
		type: "lucide"
	}
};
var getIconForProtocol = (protocol) => {
	if (!protocol) return null;
	return protocolIconMap[protocol.replace(/[-_\s]/g, "").toLowerCase()] || null;
};
function getIcon(iconName) {
	const entry = getIconForProtocol(iconName);
	if (entry) return entry.component;
	return esm_exports[iconName] || null;
}
function classNames14(...classes) {
	return classes.filter(Boolean).join(" ");
}
var Flow_default = (0, import_react.memo)(function FlowNode({ data, sourcePosition, targetPosition }) {
	const { mode, flow } = data;
	const canExpand = Array.isArray(data?.expandedNodes) && data.expandedNodes.length > 0;
	const { id, version, owners = EMPTY_ARRAY, name, styles } = flow.data;
	const { node: { color = "teal", label } = {}, icon = "QueueListIcon" } = styles || {};
	const Icon = (0, import_react.useMemo)(() => getIcon(icon), [icon]);
	const portalContainer = usePortalContainer();
	const nodeLabel = label || flow?.data?.sidebar?.badge || "Flow";
	const fontSize = nodeLabel.length > 10 ? "7px" : "9px";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		style: {
			isolation: "isolate",
			...NODE_WIDTH_STYLE
		},
		children: [canExpand && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute inset-0 rounded-md border border-${color}-400 bg-[rgb(var(--ec-card-bg))]`,
			style: {
				transform: "translate(6px, 6px)",
				opacity: .5
			},
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute inset-0 rounded-md border border-${color}-400 bg-[rgb(var(--ec-card-bg))]`,
			style: {
				transform: "translate(3px, 3px)",
				opacity: .7
			},
			"aria-hidden": true
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: classNames14(`relative rounded-md border flex justify-start bg-[rgb(var(--ec-card-bg))] text-[rgb(var(--ec-page-text))] border-${color}-400`),
			style: NODE_WIDTH_STYLE,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: classNames14(`bg-gradient-to-b from-${color}-500 to-${color}-700 relative flex flex-col items-center w-5 justify-between rounded-l-sm text-${color}-100`, `border-r-[1px] border-${color}-500`),
				children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 opacity-90 text-white mt-1" }), mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `text-center text-[${fontSize}] text-white font-bold uppercase mb-4`,
					style: ROTATED_LABEL_STYLE,
					children: nodeLabel
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-1 flex-1 min-w-0",
				children: [
					targetPosition && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
						type: "target",
						position: targetPosition
					}),
					sourcePosition && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
						type: "source",
						position: sourcePosition
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: classNames14(mode === "full" ? `border-b border-[rgb(var(--ec-page-border))]` : ""),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: "#14b8a6",
							className: "text-xs font-bold truncate pt-0.5 pb-0.5",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-light block pt-0.5 pb-0.5 ",
								children: ["v", version]
							}), mode === "simple" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-[rgb(var(--ec-page-text-muted))] font-light block pt-0.5 pb-0.5 ",
								children: nodeLabel
							})]
						})]
					}),
					mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-[rgb(var(--ec-page-border))] ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "leading-3 py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-light",
								children: flow.data.summary
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-4 py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs",
								style: TINY_FONT_STYLE,
								children: ["Owners: ", owners.length]
							})
						})]
					}),
					canExpand && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-1 text-[8px] text-[rgb(var(--ec-page-text-muted))]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "w-2.5 h-2.5" }), "Click to explore"]
					})
				]
			})]
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, {
		container: portalContainer,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$1, {
			className: "min-w-[220px] bg-[rgb(var(--ec-card-bg))] rounded-md p-1 shadow-md border border-[rgb(var(--ec-page-border))]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
					asChild: true,
					className: "text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-orange-100 rounded-sm flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: buildUrl(`/docs/flows/${id}/${version}`),
						children: "Read documentation"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
					asChild: true,
					className: "text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-orange-100 rounded-sm flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: buildUrl(`/visualiser/flows/${id}/${version}`),
						children: "Focus node"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2$1, { className: "h-[1px] bg-[rgb(var(--ec-page-border))] m-1" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: buildUrl(`/docs/flows/${id}/${version}/changelog`),
						className: "text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-orange-100 rounded-sm flex items-center",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Read changelog"
					})
				})
			]
		})
	})] });
});
var CONTAINER_STYLE2 = {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	border: "2px solid rgba(20, 184, 166, 0.5)",
	backgroundColor: "rgba(20, 184, 166, 0.08)",
	boxShadow: "0 2px 12px rgba(20, 184, 166, 0.12)",
	position: "relative",
	overflow: "visible"
};
var HEADER_STYLE2 = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	height: 44,
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
	background: "rgba(20, 184, 166, 0.12)",
	borderBottom: "1px solid rgba(20, 184, 166, 0.3)",
	overflow: "visible"
};
var BADGE_STYLE2 = {
	position: "absolute",
	top: -10,
	left: 12,
	display: "inline-flex",
	alignItems: "center",
	gap: 3,
	padding: "2px 8px",
	borderRadius: 4,
	background: "#0d9488",
	boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
	zIndex: 10,
	fontSize: 8,
	fontWeight: 700,
	letterSpacing: "0.08em",
	textTransform: "uppercase",
	color: "white"
};
var HEADER_CONTENT_STYLE = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	height: "100%",
	padding: "0 12px 0 14px",
	gap: 12
};
var FLOW_NAME_STYLE = {
	fontSize: 11,
	fontWeight: 700,
	color: "rgb(var(--ec-page-text))",
	letterSpacing: "0.04em",
	textTransform: "uppercase",
	whiteSpace: "nowrap"
};
var VERSION_STYLE2 = {
	fontSize: 10,
	fontWeight: 500,
	color: "#5eead4",
	marginLeft: 8
};
var COLLAPSE_BUTTON_STYLE = {
	background: "#0d9488",
	border: "1px solid #5eead4",
	borderRadius: 6,
	padding: "4px 10px",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	gap: 4,
	fontSize: 10,
	fontWeight: 600,
	color: "white"
};
var FlowExpandedNode_default = (0, import_react.memo)(function FlowExpandedNode({ data }) {
	const { flowName, version } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: CONTAINER_STYLE2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: HEADER_STYLE2,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: BADGE_STYLE2,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
					size: 10,
					strokeWidth: 2.5
				}), "Sub-flow"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: HEADER_CONTENT_STYLE,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						minWidth: 0,
						flex: 1
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						value: flowName || "Flow",
						tooltipBorderColor: "#14b8a6",
						className: "truncate",
						style: FLOW_NAME_STYLE,
						children: flowName || "Flow"
					}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: VERSION_STYLE2,
						children: ["v", version]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					style: COLLAPSE_BUTTON_STYLE,
					className: "ec-collapse-flow-btn nodrag nopan",
					onMouseDown: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, {
						size: 12,
						strokeWidth: 2.5
					}), "Collapse"]
				})]
			})]
		})
	});
});
var ENTITY_TARGET_HANDLE_ID = "__eventcatalog-entity-target";
function classNames15(...classes) {
	return classes.filter(Boolean).join(" ");
}
var getPropertyTypeLabel = (property) => {
	if (property.type === "array" && property.items?.type) return `${property.items.type}[]`;
	return property.type;
};
var getNestedEntityProperties = (property) => {
	if (property.properties?.length) return property.properties;
	if (property.type === "array" && property.items?.properties?.length) return property.items.properties;
	return [];
};
var Entity_default = (0, import_react.memo)(function EntityNode({ id, data, sourcePosition, targetPosition }) {
	const { mode, entity, externalToDomain, domainName, entityTargetHandle = ENTITY_TARGET_HANDLE_ID, referencePropertyNames = EMPTY_ARRAY } = data;
	const { name, version, properties = EMPTY_ARRAY, aggregateRoot, styles, sidebar: _sidebar } = entity.data;
	const { node: { color: _color = "blue", label: _label } = {}, icon = "CubeIcon" } = styles || {};
	const Icon = (0, import_react.useMemo)(() => getIcon(icon), [icon]);
	const [hoveredProperty, setHoveredProperty] = (0, import_react.useState)(null);
	const [expandedProperties, setExpandedProperties] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const previousExpandedProperties = (0, import_react.useRef)(expandedProperties);
	const updateNodeInternals = useUpdateNodeInternals();
	const portalContainer = usePortalContainer();
	const referenceProperties = (0, import_react.useMemo)(() => new Set(referencePropertyNames), [referencePropertyNames]);
	const toggleProperty = (0, import_react.useCallback)((propertyPath) => {
		setExpandedProperties((current) => {
			const next = new Set(current);
			if (next.has(propertyPath)) next.delete(propertyPath);
			else next.add(propertyPath);
			return next;
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (previousExpandedProperties.current === expandedProperties) return;
		previousExpandedProperties.current = expandedProperties;
		updateNodeInternals(id);
	}, [
		expandedProperties,
		id,
		updateNodeInternals
	]);
	const renderPropertyRows = (entityProperties, depth = 0, parentPath = "") => entityProperties.map((property, index) => {
		const propertyPath = parentPath ? `${parentPath}.${property.name}` : property.name;
		const propertyKey = `${propertyPath}-${index}`;
		const isHovered = hoveredProperty === propertyKey;
		const nestedProperties = getNestedEntityProperties(property);
		const isExpandable = nestedProperties.length > 0;
		const isExpanded = expandedProperties.has(propertyPath);
		const isTopLevel = depth === 0;
		const referencedEntityId = property.references || (isTopLevel && referenceProperties.has(property.name) ? property.items?.type : void 0);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: classNames15("relative flex items-center justify-between py-2 pr-4 hover:bg-[rgb(var(--ec-page-border)/0.2)]", isExpandable && "nodrag nopan cursor-pointer"),
			style: { paddingLeft: `${16 + depth * 16}px` },
			role: isExpandable ? "button" : void 0,
			tabIndex: isExpandable ? 0 : void 0,
			"aria-label": isExpandable ? `${isExpanded ? "Collapse" : "Expand"} ${property.name}` : void 0,
			"aria-expanded": isExpandable ? isExpanded : void 0,
			onClick: (event) => {
				if (!isExpandable) return;
				if (event.target.closest(".react-flow__handle")) return;
				toggleProperty(propertyPath);
			},
			onKeyDown: (event) => {
				if (!isExpandable || event.key !== "Enter" && event.key !== " ") return;
				event.preventDefault();
				toggleProperty(propertyPath);
			},
			onMouseEnter: () => property.description && setHoveredProperty(propertyKey),
			onMouseLeave: () => setHoveredProperty(null),
			children: [
				isTopLevel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
					type: "target",
					position: Position.Left,
					id: `${property.name}-target`,
					className: "!w-3 !h-3 !bg-[rgb(var(--ec-card-bg))] !border-2 !border-[rgb(var(--ec-page-border))] !rounded-full !left-[-0px]",
					style: HANDLE_LEFT_OFFSET_STYLE
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
					type: "source",
					position: Position.Right,
					id: `${property.name}-source`,
					className: "!w-3 !h-3 !bg-[rgb(var(--ec-card-bg))] !border-2 !border-[rgb(var(--ec-page-border))] !rounded-full !right-[-0px]",
					style: HANDLE_RIGHT_OFFSET_STYLE
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex items-center justify-between gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 min-w-0",
						children: [
							isExpandable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-[rgb(var(--ec-page-text-muted))]",
								"aria-hidden": "true",
								children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "h-3.5 w-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-[rgb(var(--ec-page-text))] truncate",
								children: property.name
							}),
							property.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-red-500 text-xs",
								children: "*"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-[rgb(var(--ec-page-text-muted))] font-mono shrink-0",
						children: getPropertyTypeLabel(property)
					})]
				}),
				referencedEntityId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-2 top-1/2 transform -translate-y-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-2 h-2 bg-blue-500 rounded-full",
						title: `References ${referencedEntityId}`
					})
				}),
				isHovered && property.description && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-[9999] w-[200px] bg-gray-900 text-white text-xs rounded-lg py-2 px-3 pointer-events-none shadow-xl max-w-xl opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-gray-200 whitespace-normal break-words",
						children: property.description
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900" })]
				})
			]
		}), isExpandable && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-[rgb(var(--ec-page-border))] border-t border-[rgb(var(--ec-page-border))] bg-[rgb(var(--ec-content-hover)/0.18)]",
			children: renderPropertyRows(nestedProperties, depth + 1, propertyPath)
		})] }, propertyKey);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames15("bg-[rgb(var(--ec-card-bg))] border rounded-lg shadow-sm min-w-[200px]", externalToDomain ? "border-amber-500/60" : "border-blue-400/50"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: classNames15("relative px-4 py-2 rounded-t-lg border-b border-[rgb(var(--ec-page-border))]", externalToDomain ? "bg-amber-500/20" : "bg-blue-500/15"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
						type: "target",
						position: Position.Left,
						id: entityTargetHandle,
						className: "!w-3 !h-3 !bg-[rgb(var(--ec-card-bg))] !border-2 !border-[rgb(var(--ec-page-border))] !rounded-full !left-[-0px]",
						style: HANDLE_LEFT_OFFSET_STYLE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 min-w-0",
						children: [
							Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-[rgb(var(--ec-page-text-muted))]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								value: name,
								tooltipBorderColor: externalToDomain ? "#f59e0b" : "#60a5fa",
								className: "font-semibold text-[rgb(var(--ec-page-text))] text-sm truncate",
								children: name
							}),
							aggregateRoot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded font-medium shrink-0",
								children: "AR"
							})
						]
					}),
					domainName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-[rgb(var(--ec-page-text-muted))] font-medium mt-1",
						children: [
							"from ",
							domainName,
							" domain"
						]
					}),
					mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-[rgb(var(--ec-page-text-muted))] mt-1",
						children: ["v", version]
					})
				]
			}),
			properties.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-[rgb(var(--ec-page-border))] relative",
				children: renderPropertyRows(properties)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-3 text-sm text-[rgb(var(--ec-page-text-muted))] text-center",
				children: "No properties defined"
			}),
			properties.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [targetPosition && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: targetPosition
			}), sourcePosition && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: sourcePosition
			})] })
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, {
		container: portalContainer,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$1, {
			className: "min-w-[220px] bg-[rgb(var(--ec-card-bg))] rounded-md p-1 shadow-md border border-[rgb(var(--ec-page-border))]",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
				asChild: true,
				className: "text-sm text-[rgb(var(--ec-page-text))] px-2 py-1.5 outline-none cursor-pointer hover:bg-[rgb(var(--ec-accent-subtle))] rounded-sm flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: buildUrl(`/docs/entities/${entity.data.id}/${version}`),
					children: "Read documentation"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
				asChild: true,
				className: "text-sm text-[rgb(var(--ec-page-text))] px-2 py-1.5 outline-none cursor-pointer hover:bg-[rgb(var(--ec-accent-subtle))] rounded-sm flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: buildUrl(`/visualiser/entities/${entity.data.id}/${version}`),
					children: "Focus node"
				})
			})]
		})
	})] });
});
function classNames16(...classes) {
	return classes.filter(Boolean).join(" ");
}
var User_default = (0, import_react.memo)(function UserNode({ data, sourcePosition, targetPosition }) {
	const { mode, step, showTarget: _showTarget = true, showSource: _showSource = true } = data;
	const { summary, actor: { name } = {} } = step;
	const displayName = name || step.name || step.title || "Actor";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames16(`rounded-md border flex justify-start bg-[rgb(var(--ec-card-bg))] text-[rgb(var(--ec-page-text))] border-yellow-400`, mode === "full" ? "min-h-[5em]" : "min-h-[2em]"),
		style: NODE_WIDTH_STYLE,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: classNames16("bg-gradient-to-b from-yellow-400 to-yellow-600 relative flex flex-col items-center w-5 justify-between rounded-l-sm text-orange-100-500", `border-r-[1px] border-yellow-500`),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "w-4 h-4 opacity-90 text-white mt-1" }), mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-center text-[9px] text-white font-bold uppercase mb-4",
				style: ROTATED_LABEL_STYLE,
				children: "ACTOR"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-1 flex-1 min-w-0",
			children: [
				targetPosition && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
					type: "target",
					position: targetPosition
				}),
				sourcePosition && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
					type: "source",
					position: sourcePosition
				}),
				(!summary || mode !== "full") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						as: "div",
						value: displayName,
						tooltipBorderColor: "#eab308",
						className: "text-sm font-bold truncate pb-0.5",
						children: displayName
					}), mode === "simple" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: " w-full text-[10px] text-[rgb(var(--ec-page-text-muted))] font-light block pt-0.5 pb-0.5 ",
							children: "Event"
						})
					})]
				}),
				summary && mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: classNames16(mode === "full" ? `border-b border-[rgb(var(--ec-page-border))]` : ""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						as: "div",
						value: displayName,
						tooltipBorderColor: "#eab308",
						className: "text-xs font-bold truncate pb-0.5",
						children: displayName
					})
				}), mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-[rgb(var(--ec-page-border))] ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "leading-3 py-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[8px] font-light",
							children: summary
						})
					})
				})] })
			]
		})]
	});
});
function classNames17(...classes) {
	return classes.filter(Boolean).join(" ");
}
var Step_default = (0, import_react.memo)(function StepNode({ data, sourcePosition, targetPosition }) {
	const { mode, step } = data;
	const { title, summary } = step;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames17("rounded-md border flex justify-start bg-[rgb(var(--ec-card-bg))] text-[rgb(var(--ec-page-text))] border-blue-400 min-h-[3em]"),
		style: NODE_WIDTH_STYLE,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: classNames17("bg-gradient-to-b from-gray-700 to-gray-700 relative flex flex-col items-center w-5 justify-end rounded-l-sm text-orange-100-500", `border-r-[1px] border-gray-500`),
			children: mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-center text-[9px] text-white font-bold uppercase mb-4",
				style: ROTATED_LABEL_STYLE,
				children: "Step"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-1 flex-1 min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
					type: "target",
					position: targetPosition || Position.Left,
					style: HIDDEN_HANDLE_STYLE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
					type: "source",
					position: sourcePosition || Position.Right,
					style: HIDDEN_HANDLE_STYLE
				}),
				!summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full flex items-center min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						as: "div",
						value: title,
						tooltipBorderColor: "#60a5fa",
						className: "text-sm font-bold truncate pb-0.5",
						children: title
					})
				}),
				summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: classNames17(mode === "full" ? `border-b border-[rgb(var(--ec-page-border))]` : ""),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						as: "div",
						value: title,
						tooltipBorderColor: "#60a5fa",
						className: "text-xs font-bold truncate pb-0.5",
						children: title
					})
				}), mode === "full" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-[rgb(var(--ec-page-border))] ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "leading-3 py-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[8px] font-light",
							children: summary
						})
					})
				})] })
			]
		})]
	});
});
var Domain_default = (0, import_react.memo)(function DomainNode({ data, id: nodeId }) {
	const { mode, domain } = data;
	const reactFlow = useReactFlow();
	const [highlightedServices, setHighlightedServices] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const { id, version, name, services = [], styles } = domain.data;
	const { icon = "RectangleGroupIcon" } = styles || {};
	const Icon = (0, import_react.useMemo)(() => getIcon(icon), [icon]);
	const ServerIcon5 = (0, import_react.useMemo)(() => getIcon("ServerIcon"), []);
	const portalContainer = usePortalContainer();
	const handleSelectionChange = (0, import_react.useCallback)(({ nodes: selectedNodes }) => {
		if (selectedNodes.length === 0) {
			setHighlightedServices(/* @__PURE__ */ new Set());
			return;
		}
		const selectedNode = selectedNodes[0];
		if (!selectedNode) {
			setHighlightedServices(/* @__PURE__ */ new Set());
			return;
		}
		const edges = reactFlow.getEdges();
		const connectedServiceIds = /* @__PURE__ */ new Set();
		edges.forEach((edge) => {
			if (edge.source === selectedNode.id || edge.target === selectedNode.id) {
				if (edge.source === nodeId && edge.sourceHandle) {
					const serviceId = edge.sourceHandle.replace("-source", "");
					connectedServiceIds.add(serviceId);
				}
				if (edge.target === nodeId && edge.targetHandle) {
					const serviceId = edge.targetHandle.replace("-target", "");
					connectedServiceIds.add(serviceId);
				}
			}
		});
		setHighlightedServices(connectedServiceIds);
	}, [nodeId, reactFlow]);
	useOnSelectionChange({ onChange: handleSelectionChange });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full rounded-lg border-2 border-yellow-400 bg-[rgb(var(--ec-card-bg))] shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-[rgb(var(--ec-domain-header-bg,253_224_71)/0.2)] px-3 py-2 flex items-center space-x-2",
			children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-yellow-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-bold text-[rgb(var(--ec-page-text))]",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-yellow-500 ml-2",
				children: ["v", version]
			})] })]
		}), mode === "full" && services.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: services.map((service, index) => {
			const isHighlighted = highlightedServices.has(service.data.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex items-center justify-between px-3 py-2 cursor-pointer ${index !== services.length - 1 ? "border-b border-[rgb(var(--ec-page-border))]" : ""} ${isHighlighted ? "bg-pink-100 border-pink-300" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
							type: "target",
							position: Position.Left,
							id: `${service.data.id}-target`,
							className: "!left-[-1px] !w-2 !h-2 !bg-gray-400 !border !border-gray-500 !rounded-full !z-10",
							style: HANDLE_LEFT_STYLE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
							type: "source",
							position: Position.Right,
							id: `${service.data.id}-source`,
							className: "!right-[-1px] !w-2 !h-2 !bg-gray-400 !border !border-gray-500 !rounded-full !z-10",
							style: HANDLE_RIGHT_STYLE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center space-x-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-5 h-5 bg-pink-500 rounded",
								children: ServerIcon5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerIcon5, { className: "w-3 h-3 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-[rgb(var(--ec-page-text))]",
								children: service.data.name || service.data.id
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center space-x-4 text-sm text-[rgb(var(--ec-page-text-muted))]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs",
								children: ["v", service.data.version]
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, {
				container: portalContainer,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$1, {
					className: "min-w-[220px] bg-[rgb(var(--ec-card-bg))] rounded-md p-1 shadow-md border border-[rgb(var(--ec-page-border))]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
						className: "text-sm text-[rgb(var(--ec-page-text))] px-2 py-1.5 outline-none cursor-pointer hover:bg-[rgb(var(--ec-page-border)/0.5)] rounded-sm flex items-center",
						onClick: () => window.location.href = buildUrl(`/docs/services/${service.data.id}/${service.data.version}`),
						children: "View Service Documentation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
						className: "text-sm text-[rgb(var(--ec-page-text))] px-2 py-1.5 outline-none cursor-pointer hover:bg-[rgb(var(--ec-page-border)/0.5)] rounded-sm flex items-center",
						onClick: () => window.location.href = buildUrl(`/visualiser/services/${service.data.id}/${service.data.version}`),
						children: "View Service Visualizer"
					})]
				})
			})] }, `${service.data.id}-${index}`);
		}) })]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, {
		container: portalContainer,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2$1, {
			className: "min-w-[220px] bg-[rgb(var(--ec-card-bg))] rounded-md p-1 shadow-md border border-[rgb(var(--ec-page-border))]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
				className: "text-sm text-[rgb(var(--ec-page-text))] px-2 py-1.5 outline-none cursor-pointer hover:bg-[rgb(var(--ec-page-border)/0.5)] rounded-sm flex items-center",
				onClick: () => window.location.href = buildUrl(`/docs/domains/${id}/${version}`),
				children: "View Domain Documentation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
				className: "text-sm text-[rgb(var(--ec-page-text))] px-2 py-1.5 outline-none cursor-pointer hover:bg-[rgb(var(--ec-page-border)/0.5)] rounded-sm flex items-center",
				onClick: () => window.location.href = buildUrl(`/visualiser/domains/${id}/${version}`),
				children: "View Domain Visualizer"
			})]
		})
	})] });
});
function classNames18(...classes) {
	return classes.filter(Boolean).join(" ");
}
var System_default = (0, import_react.memo)(function SystemNode({ data }) {
	const { system, mode = "simple", servicesCount = 0, entitiesCount = 0, containersCount = 0, messagesCount = 0 } = data;
	const { id, version, name, summary, scope } = system;
	const isExternal = scope === "external";
	const isDark = useDarkMode();
	const stats = [
		{
			icon: Server,
			label: "Services",
			count: servicesCount
		},
		{
			icon: MessageSquare,
			label: "Messages",
			count: messagesCount
		},
		{
			icon: Box,
			label: "Entities",
			count: entitiesCount
		},
		{
			icon: Database,
			label: "Data Stores",
			count: containersCount
		}
	].filter((stat) => stat.count > 0);
	const cardBackground = isExternal ? isDark ? "rgba(148,163,184,0.12)" : "rgba(148,163,184,0.1)" : "var(--ec-system-node-bg, rgb(var(--ec-card-bg)))";
	const goToMap = () => {
		navigateTo(buildUrl(`/visualiser/systems/${id}/${version}`));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "button",
		tabIndex: 0,
		onClick: goToMap,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") goToMap();
		},
		title: `Open the ${name} map`,
		className: classNames18("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible cursor-pointer", isExternal ? "border-dashed border-violet-400" : "border-violet-500"),
		style: {
			background: cardBackground,
			boxShadow: "0 2px 12px rgba(139, 92, 246, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm bg-violet-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
						className: "w-2.5 h-2.5",
						strokeWidth: 2.5
					}), isExternal ? "External System" : "System"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							value: name,
							tooltipBorderColor: "#8b5cf6",
							className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
							children: name
						}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
							children: [
								"(v",
								version,
								")"
							]
						})]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: classNames18("mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden"),
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					stats.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex items-center gap-3 border-t border-[rgb(var(--ec-page-border))] pt-1.5",
						children: stats.map(({ icon: Icon, label, count }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							title: `${count} ${label}`,
							className: "flex items-center gap-1 text-[10px] text-[rgb(var(--ec-page-text-muted))]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "w-3 h-3 text-violet-500",
								strokeWidth: 2
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: count
							})]
						}, label))
					})
				]
			})
		]
	});
});
var GROUP_CONTAINER_STYLE = {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	border: "2px solid var(--ec-group-border, #c4b5fd)",
	backgroundColor: "var(--ec-group-bg, rgba(250, 248, 255, 0.35))",
	position: "relative",
	overflow: "visible"
};
var GROUP_HEADER_STYLE = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	height: 44,
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
	background: "var(--ec-group-header-bg, rgba(237, 233, 254, 0.7))",
	borderBottom: "1px solid var(--ec-group-border, #c4b5fd)",
	overflow: "visible"
};
var GROUP_WATERMARK_STYLE = {
	position: "absolute",
	top: 6,
	right: 10,
	opacity: .12,
	transform: "rotate(12deg)",
	pointerEvents: "none"
};
var GROUP_ICON_CIRCLE_STYLE = {
	position: "absolute",
	top: -14,
	left: 12,
	width: 32,
	height: 32,
	borderRadius: "50%",
	background: "#7c3aed",
	border: "2px solid #a78bfa",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
	zIndex: 10
};
var GROUP_BANNER_CONTENT_STYLE = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
	padding: "0 40px",
	minWidth: 0
};
var GROUP_BANNER_INNER_STYLE = {
	display: "flex",
	alignItems: "center",
	gap: 8,
	minWidth: 0
};
var GROUP_DOMAIN_NAME_STYLE = {
	fontSize: 15,
	fontWeight: 800,
	color: "var(--ec-group-text, #5b21b6)",
	letterSpacing: "0.06em",
	textTransform: "uppercase",
	whiteSpace: "nowrap"
};
var GROUP_VERSION_STYLE = {
	fontSize: 9,
	fontWeight: 500,
	color: "#a78bfa"
};
var GROUP_ICON_COLOR_STYLE = { color: "#7c3aed" };
var GROUP_ICON_WHITE_STYLE = { color: "white" };
var GroupNode_default = (0, import_react.memo)(function GroupNode({ data }) {
	const { domain } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: GROUP_CONTAINER_STYLE,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: GROUP_HEADER_STYLE,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: GROUP_WATERMARK_STYLE,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
						size: 28,
						strokeWidth: 2,
						style: GROUP_ICON_COLOR_STYLE
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: GROUP_ICON_CIRCLE_STYLE,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
						size: 16,
						strokeWidth: 2.5,
						style: GROUP_ICON_WHITE_STYLE
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: GROUP_BANNER_CONTENT_STYLE,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: GROUP_BANNER_INNER_STYLE,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							value: domain?.name || "Domain",
							tooltipBorderColor: "#7c3aed",
							className: "truncate",
							style: GROUP_DOMAIN_NAME_STYLE,
							children: domain?.name || "Domain"
						}), domain?.version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: GROUP_VERSION_STYLE,
							children: ["v", domain.version]
						})]
					})
				})
			]
		})
	});
});
var PALETTES = {
	blue: {
		border: "border-blue-500",
		badge: "bg-blue-500",
		ring: "ring-2 ring-blue-400/60 ring-offset-2",
		shadow: "rgba(59, 130, 246, 0.15)",
		glow: "linear-gradient(135deg, #3b82f6, #2563eb)",
		pillBorder: "#3b82f6"
	},
	teal: {
		border: "border-teal-500",
		badge: "bg-teal-500",
		ring: "ring-2 ring-teal-400/60 ring-offset-2",
		shadow: "rgba(20, 184, 166, 0.15)",
		glow: "linear-gradient(135deg, #14b8a6, #0f766e)",
		pillBorder: "#14b8a6"
	},
	red: {
		border: "border-red-500",
		badge: "bg-red-500",
		ring: "ring-2 ring-red-400/60 ring-offset-2",
		shadow: "rgba(239, 68, 68, 0.15)",
		glow: "linear-gradient(135deg, #ef4444, #b91c1c)",
		pillBorder: "#ef4444"
	},
	green: {
		border: "border-green-500",
		badge: "bg-green-500",
		ring: "ring-2 ring-green-400/60 ring-offset-2",
		shadow: "rgba(34, 197, 94, 0.15)",
		glow: "linear-gradient(135deg, #22c55e, #15803d)",
		pillBorder: "#22c55e"
	},
	purple: {
		border: "border-purple-500",
		badge: "bg-purple-500",
		ring: "ring-2 ring-purple-400/60 ring-offset-2",
		shadow: "rgba(168, 85, 247, 0.15)",
		glow: "linear-gradient(135deg, #a855f7, #7e22ce)",
		pillBorder: "#a855f7"
	},
	orange: {
		border: "border-orange-500",
		badge: "bg-orange-500",
		ring: "ring-2 ring-orange-400/60 ring-offset-2",
		shadow: "rgba(251, 146, 60, 0.15)",
		glow: "linear-gradient(135deg, #fb923c, #ea580c)",
		pillBorder: "#fb923c"
	},
	pink: {
		border: "border-pink-500",
		badge: "bg-pink-500",
		ring: "ring-2 ring-pink-400/60 ring-offset-2",
		shadow: "rgba(236, 72, 153, 0.15)",
		glow: "linear-gradient(135deg, #ec4899, #be185d)",
		pillBorder: "#ec4899"
	},
	yellow: {
		border: "border-yellow-500",
		badge: "bg-yellow-500",
		ring: "ring-2 ring-yellow-400/60 ring-offset-2",
		shadow: "rgba(234, 179, 8, 0.15)",
		glow: "linear-gradient(135deg, #eab308, #a16207)",
		pillBorder: "#eab308"
	},
	gray: {
		border: "border-gray-500",
		badge: "bg-gray-500",
		ring: "ring-2 ring-gray-400/60 ring-offset-2",
		shadow: "rgba(107, 114, 128, 0.15)",
		glow: "linear-gradient(135deg, #6b7280, #374151)",
		pillBorder: "#6b7280"
	},
	indigo: {
		border: "border-indigo-500",
		badge: "bg-indigo-500",
		ring: "ring-2 ring-indigo-400/60 ring-offset-2",
		shadow: "rgba(99, 102, 241, 0.15)",
		glow: "linear-gradient(135deg, #6366f1, #4338ca)",
		pillBorder: "#6366f1"
	},
	cyan: {
		border: "border-cyan-500",
		badge: "bg-cyan-500",
		ring: "ring-2 ring-cyan-400/60 ring-offset-2",
		shadow: "rgba(6, 182, 212, 0.15)",
		glow: "linear-gradient(135deg, #06b6d4, #0e7490)",
		pillBorder: "#06b6d4"
	},
	slate: {
		border: "border-slate-500",
		badge: "bg-slate-500",
		ring: "ring-2 ring-slate-400/60 ring-offset-2",
		shadow: "rgba(100, 116, 139, 0.15)",
		glow: "linear-gradient(135deg, #64748b, #334155)",
		pillBorder: "#64748b"
	},
	amber: {
		border: "border-amber-500",
		badge: "bg-amber-500",
		ring: "ring-2 ring-amber-400/60 ring-offset-2",
		shadow: "rgba(245, 158, 11, 0.15)",
		glow: "linear-gradient(135deg, #f59e0b, #b45309)",
		pillBorder: "#f59e0b"
	},
	emerald: {
		border: "border-emerald-500",
		badge: "bg-emerald-500",
		ring: "ring-2 ring-emerald-400/60 ring-offset-2",
		shadow: "rgba(16, 185, 129, 0.15)",
		glow: "linear-gradient(135deg, #10b981, #047857)",
		pillBorder: "#10b981"
	},
	violet: {
		border: "border-violet-500",
		badge: "bg-violet-500",
		ring: "ring-2 ring-violet-400/60 ring-offset-2",
		shadow: "rgba(139, 92, 246, 0.15)",
		glow: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
		pillBorder: "#8b5cf6"
	},
	rose: {
		border: "border-rose-500",
		badge: "bg-rose-500",
		ring: "ring-2 ring-rose-400/60 ring-offset-2",
		shadow: "rgba(244, 63, 94, 0.15)",
		glow: "linear-gradient(135deg, #f43f5e, #be123c)",
		pillBorder: "#f43f5e"
	}
};
function classNames19(...classes) {
	return classes.filter(Boolean).join(" ");
}
function getPalette(color) {
	return PALETTES[color || "blue"] ?? PALETTES.blue;
}
function GlowHandle16({ side, gradient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: gradient,
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
var Custom_default = (0, import_react.memo)(function CustomNode({ data, selected }) {
	const { mode, custom: customProps, step } = data;
	const { color = "blue", title = step?.title || "Custom", icon = "CubeIcon", type = "Custom", summary = step?.summary || "", url, properties = EMPTY_OBJECT, menu = EMPTY_ARRAY, height = 5 } = customProps;
	const palette = getPalette(color);
	const IconComponent = (0, import_react.useMemo)(() => esm_exports$1[icon] || ForwardRef$7, [icon]);
	const portalContainer = usePortalContainer();
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const propertyEntries = Object.entries(properties);
	const contextMenuItems = url ? [{
		label: `Open ${type.toLowerCase()}`,
		url
	}, ...menu] : menu;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames19("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", selected ? palette.ring : "", palette.border),
		style: {
			background: "var(--ec-custom-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: `0 2px 12px ${palette.shadow}`,
			minHeight: mode === "full" ? `${height}em` : void 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle16, {
				side: "left",
				gradient: palette.glow
			}),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle16, {
				side: "right",
				gradient: palette.glow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-3 left-2.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames19("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", palette.badge),
					children: [IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
						className: "w-2.5 h-2.5",
						"aria-hidden": true
					}), type]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							value: title,
							tooltipBorderColor: palette.pillBorder,
							className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
							children: title
						})
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					}),
					mode === "full" && propertyEntries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-[rgb(var(--ec-page-border))] grid grid-cols-2 gap-x-2 gap-y-1",
						children: propertyEntries.map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[7px] font-bold uppercase tracking-wide text-[rgb(var(--ec-page-text-muted))] truncate",
								children: key
							}), typeof value === "string" && value.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: value,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "block text-[8px] text-blue-500 underline truncate",
								title: value,
								children: value
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[8px] text-[rgb(var(--ec-page-text))] truncate",
								title: String(value),
								children: value
							})]
						}, key))
					})
				]
			})
		]
	}) }), contextMenuItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, {
		container: portalContainer,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
			className: "min-w-[220px] bg-[rgb(var(--ec-card-bg))] rounded-md p-1 shadow-md border border-[rgb(var(--ec-page-border))]",
			children: contextMenuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
				asChild: true,
				className: "text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-orange-100 rounded-sm flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-[rgb(var(--ec-page-text))] no-underline",
					children: item.label
				})
			}, `${item.label}-${item.url || ""}`))
		})
	})] });
});
var ExternalSystem2_default = (0, import_react.memo)(function ExternalSystemNode(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: EXTERNAL_SYSTEM_HANDLE_STYLE,
				className: "bg-gray-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: EXTERNAL_SYSTEM_HANDLE_STYLE,
				className: "bg-gray-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalSystem_default, { ...props })
		]
	});
});
function GlowHandle17({ side }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: "50%",
		[side]: -6,
		transform: "translateY(-50%)",
		width: 12,
		height: 12,
		borderRadius: "50%",
		background: "linear-gradient(135deg, #6366f1, #4338ca)",
		border: "2px solid rgb(var(--ec-page-bg))",
		zIndex: 20,
		animation: "ec-dp-handle-pulse 2s ease-in-out infinite",
		pointerEvents: "none"
	} });
}
function classNames20(...classes) {
	return classes.filter(Boolean).join(" ");
}
function PostItDataProduct(props) {
	const { version, name, summary, deprecated, draft, notes, styles } = props.data.dataProduct;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames20("relative min-w-44 max-w-56 min-h-[120px]", props?.selected ? "ring-2 ring-indigo-400/60 ring-offset-1" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				style: {
					background: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 40%, #6366f1 100%)",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.15), 3px 4px 8px rgba(0,0,0,0.08)",
					transform: "rotate(1deg)",
					border: deprecated ? "2px dashed rgba(239, 68, 68, 0.5)" : draft ? "2px dashed rgba(99, 102, 241, 0.5)" : "none"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: FOLDED_CORNER_SHADOW_STYLE }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					position: "absolute",
					top: 0,
					right: 0,
					width: 0,
					height: 0,
					borderStyle: "solid",
					borderWidth: "18px 0 0 18px",
					borderColor: "#4338ca transparent transparent transparent",
					opacity: .3
				} })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-3.5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
									className: "w-3 h-3 text-indigo-900/50",
									strokeWidth: 2.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[8px] font-bold text-indigo-900/50 uppercase tracking-widest",
									children: "Data Product"
								})]
							}),
							draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[8px] font-extrabold text-amber-900 bg-amber-100 border border-dashed border-amber-400 px-1.5 py-0.5 rounded uppercase",
								children: "Draft"
							}),
							deprecated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[7px] font-bold text-white bg-red-500 border border-red-600 px-1.5 py-0.5 rounded uppercase",
								children: "Deprecated"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
							src: customIcon,
							alt: name,
							className: mode === "full" ? "w-[26px] h-[26px] shrink-0" : "w-4 h-4 shrink-0 -my-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							as: "div",
							value: name,
							tooltipBorderColor: "#6366f1",
							className: classNames20("text-[13px] font-bold leading-snug min-w-0 truncate", deprecated ? "text-indigo-950/40 line-through" : "text-indigo-950"),
							children: name
						})]
					}),
					version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] text-indigo-900/40 font-semibold mt-0.5",
						children: ["v", version]
					}),
					mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 pt-1.5 border-t border-indigo-900/10 text-[9px] text-indigo-950/60 leading-relaxed overflow-hidden",
						style: LINE_CLAMP_STYLE,
						title: summary,
						children: summary
					})
				]
			})
		]
	});
}
function DefaultDataProduct(props) {
	const { version, name, summary, deprecated, draft, notes, styles } = props.data.dataProduct;
	const mode = props.data.mode || "simple";
	const customIcon = isIconPath(styles?.icon) ? styles.icon : void 0;
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const isDark = useDarkMode();
	const deprecatedStripe = isDark ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.1)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: classNames20("relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible", props?.selected ? "ring-2 ring-indigo-400/60 ring-offset-2" : "", deprecated ? "border-dashed border-red-500" : draft ? `border-dashed ${isDark ? "border-indigo-400" : "border-indigo-400/60"}` : "border-indigo-500"),
		style: {
			background: deprecated ? `repeating-linear-gradient(135deg, transparent, transparent 6px, ${deprecatedStripe} 6px, ${deprecatedStripe} 7px), var(--ec-dp-node-bg, rgb(var(--ec-card-bg)))` : draft ? `repeating-linear-gradient(135deg, transparent, transparent 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4.5px), repeating-linear-gradient(45deg, transparent, transparent 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4px, ${isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.15)"} 4.5px), var(--ec-dp-node-bg, rgb(var(--ec-card-bg)))` : "var(--ec-dp-node-bg, rgb(var(--ec-card-bg)))",
			boxShadow: "0 2px 12px rgba(99, 102, 241, 0.15)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: HIDDEN_HANDLE_STYLE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: HIDDEN_HANDLE_STYLE
			}),
			notes && notes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesIndicator, {
				notes,
				resourceName: name
			}),
			targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle17, { side: "left" }),
			sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowHandle17, { side: "right" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-2.5 left-2.5 flex items-center gap-1.5 z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: classNames20("inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm", deprecated ? "bg-red-500" : "bg-indigo-500"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
							className: "w-2.5 h-2.5",
							strokeWidth: 2.5
						}),
						"Data Product",
						draft && " (Draft)",
						deprecated && " (Deprecated)"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pt-3.5 pb-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [customIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomIcon, {
						src: customIcon,
						alt: name,
						className: mode === "full" ? "w-[26px] h-[26px] shrink-0" : "w-4 h-4 shrink-0 -my-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
							value: name,
							tooltipBorderColor: "#6366f1",
							className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
							children: name
						}), version && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-normal text-[rgb(var(--ec-page-text-muted))] shrink-0",
							children: [
								"(v",
								version,
								")"
							]
						})]
					})]
				}), mode === "full" && summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 text-[9px] text-[rgb(var(--ec-page-text-muted))] leading-relaxed overflow-hidden",
					style: LINE_CLAMP_STYLE,
					title: summary,
					children: summary
				})]
			})
		]
	});
}
var DataProduct_default = (0, import_react.memo)(function DataProductNode(props) {
	if (props?.data?.style === "post-it") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostItDataProduct, { ...props });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultDataProduct, { ...props });
});
var TYPE_ICONS = {
	events: Zap,
	commands: Terminal,
	queries: CircleHelp
};
var CARD_STYLE = {
	borderRadius: 12,
	border: "2px solid rgba(139, 92, 246, 0.4)",
	background: "var(--ec-message-group-node-bg, rgb(var(--ec-card-bg)))",
	pointerEvents: "none"
};
var MessageGroupNode_default = (0, import_react.memo)(function MessageGroupNode(props) {
	const { groupName, messageCount } = props.data;
	const isDark = useDarkMode();
	const targetConnections = useNodeConnections({ handleType: "target" });
	const sourceConnections = useNodeConnections({ handleType: "source" });
	const stackDepth = messageCount >= 3 ? 3 : messageCount;
	const typeBreakdown = (0, import_react.useMemo)(() => {
		const counts = {};
		props.data.messages.forEach(({ message }) => {
			const type = message?.collection || "unknown";
			counts[type] = (counts[type] || 0) + 1;
		});
		return counts;
	}, [props.data.messages]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		style: { isolation: "isolate" },
		children: [
			stackDepth >= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				...CARD_STYLE,
				position: "absolute",
				inset: 0,
				transform: "translate(6px, 6px)",
				opacity: .5
			} }),
			stackDepth >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				...CARD_STYLE,
				position: "absolute",
				inset: 0,
				transform: "translate(3px, 3px)",
				opacity: .7
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative min-w-48 max-w-60 rounded-xl border-2 overflow-visible ${props.selected ? "ring-2 ring-violet-400/60 ring-offset-2" : ""} border-violet-500`,
				style: {
					background: "var(--ec-message-group-node-bg, rgb(var(--ec-card-bg)))",
					boxShadow: "0 2px 12px rgba(139, 92, 246, 0.15)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
						type: "target",
						position: Position.Left,
						style: HIDDEN_HANDLE_STYLE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
						type: "source",
						position: Position.Right,
						style: HIDDEN_HANDLE_STYLE
					}),
					targetConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						top: "50%",
						left: -6,
						transform: "translateY(-50%)",
						width: 12,
						height: 12,
						borderRadius: "50%",
						background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
						border: "2px solid rgb(var(--ec-page-bg))",
						zIndex: 20,
						animation: "ec-handle-pulse 2s ease-in-out infinite",
						pointerEvents: "none"
					} }),
					sourceConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						position: "absolute",
						top: "50%",
						right: -6,
						transform: "translateY(-50%)",
						width: 12,
						height: 12,
						borderRadius: "50%",
						background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
						border: "2px solid rgb(var(--ec-page-bg))",
						zIndex: 20,
						animation: "ec-handle-pulse 2s ease-in-out infinite",
						pointerEvents: "none"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-2.5 left-2.5 z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-[7px] font-bold uppercase tracking-widest text-white px-1.5 py-0.5 rounded shadow-sm bg-violet-600",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
								className: "w-2.5 h-2.5",
								strokeWidth: 2.5
							}), "Group"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 pt-3.5 pb-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
								as: "div",
								value: groupName,
								tooltipBorderColor: "#8b5cf6",
								className: "text-[13px] font-semibold leading-snug text-[rgb(var(--ec-page-text))] truncate",
								children: groupName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-medium px-1.5 py-0.5 rounded",
									style: {
										background: isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.1)",
										color: isDark ? "#c4b5fd" : "#6d28d9"
									},
									children: [
										messageCount,
										" ",
										messageCount === 1 ? "message" : "messages"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1",
									children: Object.entries(typeBreakdown).map(([type, count]) => {
										const Icon = TYPE_ICONS[type] || CircleHelp;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-0.5 text-[9px] text-[rgb(var(--ec-page-text-muted))]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "w-2.5 h-2.5",
												strokeWidth: 2
											}), count]
										}, type);
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center gap-1 text-[8px] text-[rgb(var(--ec-page-text-muted))]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "w-2.5 h-2.5" }), "Click to explore"]
							})
						]
					})
				]
			})
		]
	});
});
var CONTAINER_STYLE3 = {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	border: "2px solid rgba(139, 92, 246, 0.5)",
	backgroundColor: "rgba(139, 92, 246, 0.05)",
	position: "relative",
	overflow: "visible"
};
var HEADER_STYLE3 = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	height: 44,
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
	background: "rgba(139, 92, 246, 0.12)",
	borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
	overflow: "visible"
};
var BADGE_STYLE3 = {
	position: "absolute",
	top: -10,
	left: 12,
	display: "inline-flex",
	alignItems: "center",
	gap: 3,
	padding: "2px 8px",
	borderRadius: 4,
	background: "#7c3aed",
	boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
	zIndex: 10,
	fontSize: 8,
	fontWeight: 700,
	letterSpacing: "0.08em",
	textTransform: "uppercase",
	color: "white"
};
var HEADER_CONTENT_STYLE2 = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	height: "100%",
	padding: "0 12px 0 14px",
	gap: 12
};
var GROUP_NAME_STYLE = {
	fontSize: 11,
	fontWeight: 700,
	color: "var(--ec-group-text, #5b21b6)",
	letterSpacing: "0.04em",
	textTransform: "uppercase",
	whiteSpace: "nowrap"
};
var COLLAPSE_BUTTON_STYLE2 = {
	background: "#7c3aed",
	border: "1px solid #a78bfa",
	borderRadius: 6,
	padding: "4px 10px",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	gap: 4,
	fontSize: 10,
	fontWeight: 600,
	color: "white"
};
var MessageGroupExpandedNode_default = (0, import_react.memo)(function MessageGroupExpandedNode({ data }) {
	const { groupName, messageCount } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: CONTAINER_STYLE3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: HEADER_STYLE3,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: BADGE_STYLE3,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
					size: 10,
					strokeWidth: 2.5
				}), "Group"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: HEADER_CONTENT_STYLE2,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						minWidth: 0,
						flex: 1
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedResourceName, {
						value: groupName || "Group",
						tooltipBorderColor: "#8b5cf6",
						className: "truncate",
						style: GROUP_NAME_STYLE,
						children: groupName || "Group"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					style: COLLAPSE_BUTTON_STYLE2,
					className: "ec-collapse-group-btn nodrag nopan",
					onMouseDown: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, {
						size: 12,
						strokeWidth: 2.5
					}), "Collapse"]
				})]
			})]
		})
	});
});
function EdgeLabel({ label, labelX, labelY, style }) {
	if (label === void 0 || label === null || label === "") return null;
	const lines = String(label).split("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdgeLabelRenderer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "nodrag nopan rounded-md border border-[rgb(var(--ec-page-border))] px-2 py-1 text-center text-[10px] font-medium leading-tight text-[rgb(var(--ec-page-text))] shadow-sm",
		style: {
			position: "absolute",
			transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
			zIndex: 1e3,
			pointerEvents: "none",
			backgroundColor: "rgb(var(--ec-card-bg))",
			...style
		},
		children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `whitespace-nowrap ${index > 0 ? "italic" : ""}`,
			children: line
		}, `${line}-${index}`))
	}) });
}
function messageColor(collection) {
	switch (collection) {
		case "events": return "orange";
		case "commands": return "blue";
		case "queries": return "green";
		default: return "gray";
	}
}
var AnimatedMessageEdge_default = (0, import_react.memo)(({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, label = "", markerEnd, markerStart }) => {
	const [edgePath, labelX, labelY] = getSmoothStepPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition
	});
	const collection = data?.message?.collection;
	const opacity = data?.opacity ?? 1;
	const customColor = data?.customColor || messageColor(collection ?? "default");
	const warning = data?.warning;
	const customColors = Array.isArray(customColor) ? customColor : [customColor];
	const randomDelay = (0, import_react.useMemo)(() => Math.random() * 1, []);
	const opacityClass = opacity === 1 ? "z-30 opacity-100" : "z-30 opacity-10";
	const animatedNodes = (0, import_react.useMemo)(() => customColors.map((color, index) => {
		const delay = randomDelay + index * .3;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			className: `ec-animated-msg ${opacityClass}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "-7",
					y: "-5",
					width: "14",
					height: "10",
					rx: "1.5",
					ry: "1.5",
					fill: color
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M-7,-5 L0,1 L7,-5",
					fill: "none",
					stroke: "rgb(var(--ec-card-bg))",
					strokeWidth: "1.2",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
					dur: "2s",
					repeatCount: "indefinite",
					path: edgePath,
					rotate: "auto",
					begin: `${delay}s`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mpath", { href: `#${id}` })
				})
			] })
		}, `${id}-${color}-${index}`);
	}), [
		edgePath,
		id,
		customColors.join(","),
		opacity,
		randomDelay
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseEdge, {
			id,
			path: edgePath,
			markerEnd,
			markerStart,
			style: warning ? EDGE_WARNING_STYLE : EDGE_DEFAULT_STYLE
		}),
		animatedNodes,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdgeLabel, {
			label,
			labelX,
			labelY
		})
	] });
});
var MultilineEdgeLabel_default = (0, import_react.memo)(function MultilineEdgeLabel(props) {
	const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, markerStart, markerEnd, style, selected } = props;
	const [edgePath, labelX, labelY] = getSmoothStepPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		id,
		d: edgePath,
		className: `react-flow__edge-path${selected ? " selected" : ""}`,
		markerStart,
		markerEnd,
		style
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdgeLabel, {
		label,
		labelX,
		labelY
	})] });
});
function messageColor2(collection) {
	switch (collection) {
		case "events": return "orange";
		case "commands": return "blue";
		case "queries": return "green";
		default: return "gray";
	}
}
var EMPTY_STYLE = {};
var FlowEdge_default = (0, import_react.memo)(function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = EMPTY_STYLE, markerEnd, label, labelStyle, data }) {
	const [edgePath, labelX, labelY] = getSmoothStepPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition
	});
	const randomDelay = (0, import_react.useMemo)(() => Math.random() * 1, []);
	const collection = data?.message?.collection;
	const opacity = data?.opacity ?? 1;
	const mergedStyle = (0, import_react.useMemo)(() => ({
		...EDGE_FLOW_BASE_STYLE,
		...style
	}), [style]);
	const labelPositionStyle = (0, import_react.useMemo)(() => ({
		position: "absolute",
		transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
		zIndex: 1e3,
		...labelStyle
	}), [
		labelX,
		labelY,
		labelStyle
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseEdge, {
			path: edgePath,
			markerEnd,
			style: mergedStyle
		}),
		data?.animated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
			className: `ec-animated-msg z-30 ${opacity === 1 ? "opacity-100" : "opacity-10"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "0",
				cy: "0",
				r: "7",
				fill: messageColor2(collection || "default"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
					dur: "2s",
					repeatCount: "indefinite",
					path: edgePath,
					rotate: "auto",
					begin: `${randomDelay}s`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mpath", { href: `#${id}` })
				})
			})
		}),
		label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdgeLabelRenderer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: labelPositionStyle,
			className: "nodrag nopan max-w-[120px] text-xs bg-[rgb(var(--ec-card-bg))] px-2 py-1 rounded border border-[rgb(var(--ec-page-border))] text-[rgb(var(--ec-page-text-muted))] font-medium shadow-sm text-center",
			children: label
		}) })
	] });
});
function LabelledEdge({ pathType, ...props }) {
	const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerStart, markerEnd, style, label, labelStyle } = props;
	const pathProps = {
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition
	};
	const [edgePath, labelX, labelY] = pathType === "bezier" ? getBezierPath(pathProps) : getSmoothStepPath({
		...pathProps,
		...pathType === "step" ? { borderRadius: 0 } : {}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseEdge, {
		id,
		path: edgePath,
		markerStart,
		markerEnd,
		style
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdgeLabel, {
		label,
		labelX,
		labelY,
		style: labelStyle
	})] });
}
function LabelledDefaultEdge(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelledEdge, {
		...props,
		pathType: "bezier"
	});
}
function LabelledSmoothStepEdge(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelledEdge, {
		...props,
		pathType: "smoothstep"
	});
}
function LabelledStepEdge(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelledEdge, {
		...props,
		pathType: "step"
	});
}
var formatVersionedName = (name, version) => {
	if (version) return `${name.replace(new RegExp(`-v?${version.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`), "")} (v${version})`;
	const versionMatch = name.match(/^(.+)-v?(\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?)$/);
	if (!versionMatch) return name;
	return `${versionMatch[1]} (v${versionMatch[2]})`;
};
var normalizeCollectionType = (type) => {
	return {
		event: "events",
		command: "commands",
		query: "queries",
		agent: "agents",
		service: "services",
		domain: "domains",
		channel: "channels",
		entity: "entities"
	}[type] || type;
};
var splitVersionedName = (name, version) => {
	if (version) return {
		id: name.replace(new RegExp(`-v?${version.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`), ""),
		version
	};
	const versionMatch = name.match(/^(.+)-v?(\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?)$/);
	if (!versionMatch) return {
		id: name,
		version: void 0
	};
	return {
		id: versionMatch[1],
		version: versionMatch[2]
	};
};
var getResourceKey = ({ type, id, name, version }) => {
	const parsed = splitVersionedName(id || name, version);
	return `${normalizeCollectionType(type)}:${parsed.id}:${parsed.version || ""}`.toLowerCase();
};
var getNodeResourceData = (data, key) => {
	const resource = data?.[key];
	if (!resource || typeof resource !== "object") return void 0;
	return "data" in resource && resource.data ? resource.data : resource;
};
var VisualiserSearch = (0, import_react.memo)((0, import_react.forwardRef)(({ nodes, onNodeSelect, onClear, onPaneClick: _onPaneClick }, ref) => {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [filteredSuggestions, setFilteredSuggestions] = (0, import_react.useState)([]);
	const [showSuggestions, setShowSuggestions] = (0, import_react.useState)(false);
	const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, import_react.useState)(-1);
	const searchInputRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	const suggestionsListRef = (0, import_react.useRef)(null);
	const suggestionItemRefs = (0, import_react.useRef)([]);
	const hideSuggestions = (0, import_react.useCallback)(() => {
		setShowSuggestions(false);
		setSelectedSuggestionIndex(-1);
	}, []);
	(0, import_react.useImperativeHandle)(ref, () => ({ hideSuggestions }), [hideSuggestions]);
	const getNodeDisplayName = (0, import_react.useCallback)((node) => {
		if (node.type === "messageGroup") return node.data?.groupName || node.id;
		if (node.type === "messageGroupExpanded") return node.data?.groupName || node.id;
		const message = getNodeResourceData(node.data, "message");
		const agent = getNodeResourceData(node.data, "agent");
		const agentTool = getNodeResourceData(node.data, "agentTool");
		const service = getNodeResourceData(node.data, "service");
		const domain = getNodeResourceData(node.data, "domain");
		const system = getNodeResourceData(node.data, "system");
		const entity = getNodeResourceData(node.data, "entity");
		const channel = getNodeResourceData(node.data, "channel");
		const dataProduct = getNodeResourceData(node.data, "dataProduct");
		const data = getNodeResourceData(node.data, "data");
		return formatVersionedName(message?.name || message?.id || agent?.name || agent?.id || agentTool?.name || agentTool?.id || service?.name || service?.id || domain?.name || domain?.id || system?.name || system?.id || entity?.name || entity?.id || channel?.name || channel?.id || dataProduct?.name || dataProduct?.id || data?.name || data?.id || node.data?.name || node.id, message?.version || agent?.version || agentTool?.version || service?.version || domain?.version || system?.version || entity?.version || channel?.version || dataProduct?.version || data?.version || node.data?.version);
	}, []);
	const getNodeResourceKey = (0, import_react.useCallback)((node, label) => {
		if (node.type === "messageGroup" || node.type === "messageGroupExpanded") return `${node.type}:${node.id}`.toLowerCase();
		const data = node.data;
		const resource = getNodeResourceData(data, "message") || getNodeResourceData(data, "agent") || getNodeResourceData(data, "agentTool") || getNodeResourceData(data, "service") || getNodeResourceData(data, "domain") || getNodeResourceData(data, "system") || getNodeResourceData(data, "entity") || getNodeResourceData(data, "channel") || getNodeResourceData(data, "dataProduct") || data?.data || data;
		return getResourceKey({
			type: node.type || "unknown",
			id: resource?.id,
			name: resource?.name || resource?.id || label || node.id,
			version: resource?.version || data?.version
		});
	}, []);
	const dedupeSearchSuggestions = (0, import_react.useCallback)((suggestions) => {
		const uniqueSuggestions = [];
		const indexByResourceKey = /* @__PURE__ */ new Map();
		suggestions.forEach((suggestion) => {
			const existingIndex = indexByResourceKey.get(suggestion.resourceKey);
			if (existingIndex === void 0) {
				indexByResourceKey.set(suggestion.resourceKey, uniqueSuggestions.length);
				uniqueSuggestions.push(suggestion);
				return;
			}
			if (suggestion.isGroupedMessage && !uniqueSuggestions[existingIndex].isGroupedMessage) uniqueSuggestions[existingIndex] = suggestion;
		});
		return uniqueSuggestions;
	}, []);
	const getSearchSuggestions = (0, import_react.useCallback)((nodesToIndex) => {
		const suggestions = nodesToIndex.flatMap((node) => {
			if (node.type === "system-group") return [];
			const nodeName = getNodeDisplayName(node);
			const suggestions2 = [{
				key: node.id,
				node,
				label: nodeName,
				searchText: nodeName,
				type: node.type || "unknown",
				resourceKey: getNodeResourceKey(node, nodeName)
			}];
			if (node.type !== "messageGroup") return suggestions2;
			const groupName = node.data?.groupName || nodeName;
			(node.data?.messages || []).forEach((item, index) => {
				const message = item.message;
				const messageName = message?.data?.name || message?.data?.id;
				if (!messageName) return;
				const version = message?.data?.version;
				const label = formatVersionedName(messageName, version);
				suggestions2.push({
					key: `${node.id}:${message?.data?.id || messageName}:${version || index}`,
					node,
					label,
					searchText: `${label} ${groupName}`,
					type: message?.collection || "message",
					resourceKey: getResourceKey({
						type: message?.collection || "message",
						id: message?.data?.id,
						name: messageName,
						version
					}),
					groupName,
					isGroupedMessage: true
				});
			});
			return suggestions2;
		});
		return dedupeSearchSuggestions(suggestions);
	}, [
		dedupeSearchSuggestions,
		getNodeDisplayName,
		getNodeResourceKey
	]);
	const getNodeTypeMeta = (0, import_react.useCallback)((nodeType) => {
		return {
			events: {
				label: "Event",
				Icon: Zap,
				iconClass: "border-orange-500/25 bg-orange-500/10 text-orange-500",
				badgeClass: "border-orange-500/25 bg-orange-500/10 text-orange-700 dark:text-orange-300"
			},
			event: {
				label: "Event",
				Icon: Zap,
				iconClass: "border-orange-500/25 bg-orange-500/10 text-orange-500",
				badgeClass: "border-orange-500/25 bg-orange-500/10 text-orange-700 dark:text-orange-300"
			},
			commands: {
				label: "Command",
				Icon: MessageSquare,
				iconClass: "border-blue-500/25 bg-blue-500/10 text-blue-500",
				badgeClass: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300"
			},
			command: {
				label: "Command",
				Icon: MessageSquare,
				iconClass: "border-blue-500/25 bg-blue-500/10 text-blue-500",
				badgeClass: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300"
			},
			queries: {
				label: "Query",
				Icon: Search,
				iconClass: "border-green-500/25 bg-green-500/10 text-green-500",
				badgeClass: "border-green-500/25 bg-green-500/10 text-green-700 dark:text-green-300"
			},
			query: {
				label: "Query",
				Icon: Search,
				iconClass: "border-green-500/25 bg-green-500/10 text-green-500",
				badgeClass: "border-green-500/25 bg-green-500/10 text-green-700 dark:text-green-300"
			},
			services: {
				label: "Service",
				Icon: Server,
				iconClass: "border-pink-500/25 bg-pink-500/10 text-pink-500",
				badgeClass: "border-pink-500/25 bg-pink-500/10 text-pink-700 dark:text-pink-300"
			},
			agents: {
				label: "Agent",
				Icon: Bot,
				iconClass: "border-sky-500/25 bg-sky-500/10 text-sky-500",
				badgeClass: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300"
			},
			agent: {
				label: "Agent",
				Icon: Bot,
				iconClass: "border-sky-500/25 bg-sky-500/10 text-sky-500",
				badgeClass: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300"
			},
			agentTool: {
				label: "Agent Tool",
				Icon: Wrench,
				iconClass: "border-violet-500/25 bg-violet-500/10 text-violet-500",
				badgeClass: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
			},
			"agent-tool": {
				label: "Agent Tool",
				Icon: Wrench,
				iconClass: "border-violet-500/25 bg-violet-500/10 text-violet-500",
				badgeClass: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
			},
			domains: {
				label: "Domain",
				Icon: Blocks,
				iconClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
				badgeClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
			},
			systems: {
				label: "System",
				Icon: Group,
				iconClass: "border-violet-500/25 bg-violet-500/10 text-violet-500",
				badgeClass: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
			},
			flows: {
				label: "Flow",
				Icon: Workflow,
				iconClass: "border-teal-500/25 bg-teal-500/10 text-teal-500",
				badgeClass: "border-teal-500/25 bg-teal-500/10 text-teal-700 dark:text-teal-300"
			},
			channels: {
				label: "Channel",
				Icon: ListTree,
				iconClass: "border-gray-500/25 bg-gray-500/10 text-gray-500",
				badgeClass: "border-gray-500/25 bg-gray-500/10 text-gray-700 dark:text-gray-300"
			},
			data: {
				label: "Data",
				Icon: Database,
				iconClass: "border-blue-500/25 bg-blue-500/10 text-blue-500",
				badgeClass: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300"
			},
			entities: {
				label: "Entity",
				Icon: Database,
				iconClass: "border-blue-500/25 bg-blue-500/10 text-blue-500",
				badgeClass: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300"
			},
			externalSystem: {
				label: "External",
				Icon: Server,
				iconClass: "border-pink-500/25 bg-pink-500/10 text-pink-500",
				badgeClass: "border-pink-500/25 bg-pink-500/10 text-pink-700 dark:text-pink-300"
			},
			actor: {
				label: "Actor",
				Icon: User,
				iconClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
				badgeClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
			},
			"context-actor": {
				label: "Actor",
				Icon: User,
				iconClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
				badgeClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
			},
			user: {
				label: "User",
				Icon: User,
				iconClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
				badgeClass: "border-yellow-500/25 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
			},
			messageGroup: {
				label: "Group",
				Icon: Layers,
				iconClass: "border-violet-500/25 bg-violet-500/10 text-violet-500",
				badgeClass: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
			},
			messageGroupExpanded: {
				label: "Group",
				Icon: Layers,
				iconClass: "border-violet-500/25 bg-violet-500/10 text-violet-500",
				badgeClass: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300"
			}
		}[nodeType] || {
			label: nodeType,
			Icon: Layers,
			iconClass: "border-gray-500/25 bg-gray-500/10 text-gray-500",
			badgeClass: "border-gray-500/25 bg-gray-500/10 text-gray-700 dark:text-gray-300"
		};
	}, []);
	const handleSearchChange = (0, import_react.useCallback)((event) => {
		const query = event.target.value;
		setSearchQuery(query);
		if (query.length > 0) {
			const search = query.toLowerCase();
			const filtered = getSearchSuggestions(nodes).filter((suggestion) => suggestion.searchText.toLowerCase().includes(search));
			setFilteredSuggestions(filtered);
			setShowSuggestions(true);
			setSelectedSuggestionIndex(-1);
		} else {
			setFilteredSuggestions(getSearchSuggestions(nodes));
			setShowSuggestions(true);
			setSelectedSuggestionIndex(-1);
		}
	}, [nodes, getSearchSuggestions]);
	const handleSearchFocus = (0, import_react.useCallback)(() => {
		const suggestions = getSearchSuggestions(nodes);
		const search = searchQuery.toLowerCase();
		setFilteredSuggestions(searchQuery.length === 0 ? suggestions : suggestions.filter((suggestion) => suggestion.searchText.toLowerCase().includes(search)));
		setShowSuggestions(true);
		setSelectedSuggestionIndex(-1);
	}, [
		nodes,
		searchQuery,
		getSearchSuggestions
	]);
	const handleSuggestionClick = (0, import_react.useCallback)((suggestion) => {
		setSearchQuery("");
		setFilteredSuggestions([]);
		setShowSuggestions(false);
		setSelectedSuggestionIndex(-1);
		onNodeSelect(suggestion.node);
	}, [onNodeSelect]);
	const handleSearchKeyDown = (0, import_react.useCallback)((event) => {
		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				if (filteredSuggestions.length === 0) return;
				setShowSuggestions(true);
				setSelectedSuggestionIndex((prev) => prev < filteredSuggestions.length - 1 ? prev + 1 : 0);
				break;
			case "ArrowUp":
				event.preventDefault();
				if (filteredSuggestions.length === 0) return;
				setShowSuggestions(true);
				setSelectedSuggestionIndex((prev) => prev > 0 ? prev - 1 : filteredSuggestions.length - 1);
				break;
			case "Enter":
				event.preventDefault();
				if (showSuggestions && selectedSuggestionIndex >= 0 && selectedSuggestionIndex < filteredSuggestions.length) handleSuggestionClick(filteredSuggestions[selectedSuggestionIndex]);
				break;
			case "Escape":
				setShowSuggestions(false);
				setSelectedSuggestionIndex(-1);
		}
	}, [
		showSuggestions,
		filteredSuggestions,
		selectedSuggestionIndex,
		handleSuggestionClick
	]);
	const clearSearch = (0, import_react.useCallback)(() => {
		setSearchQuery("");
		setShowSuggestions(false);
		setFilteredSuggestions([]);
		setSelectedSuggestionIndex(-1);
		onClear();
		if (searchInputRef.current) searchInputRef.current.focus();
	}, [onClear]);
	(0, import_react.useEffect)(() => {
		suggestionItemRefs.current = suggestionItemRefs.current.slice(0, filteredSuggestions.length);
	}, [filteredSuggestions.length]);
	(0, import_react.useEffect)(() => {
		if (!showSuggestions || selectedSuggestionIndex < 0) return;
		const list = suggestionsListRef.current;
		const item = suggestionItemRefs.current[selectedSuggestionIndex];
		if (!list || !item) return;
		const itemTop = item.offsetTop;
		const itemBottom = itemTop + item.offsetHeight;
		const visibleTop = list.scrollTop;
		const visibleBottom = visibleTop + list.clientHeight;
		if (itemTop < visibleTop) list.scrollTop = itemTop;
		else if (itemBottom > visibleBottom) list.scrollTop = itemBottom - list.clientHeight;
	}, [
		showSuggestions,
		selectedSuggestionIndex,
		filteredSuggestions.length
	]);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setShowSuggestions(false);
				setSelectedSuggestionIndex(-1);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "w-full max-w-md mx-auto relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: searchInputRef,
				type: "text",
				placeholder: "Search nodes...",
				value: searchQuery,
				onChange: handleSearchChange,
				onKeyDown: handleSearchKeyDown,
				onFocus: handleSearchFocus,
				className: "w-full px-4 py-2 pr-10 bg-[rgb(var(--ec-input-bg))] border border-[rgb(var(--ec-input-border))] text-[rgb(var(--ec-input-text))] placeholder:text-[rgb(var(--ec-page-text-muted))] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))] focus:border-transparent"
			}), searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: clearSearch,
				className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-[rgb(var(--ec-page-text-muted))] hover:text-[rgb(var(--ec-page-text))]",
				"aria-label": "Clear search",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-5 h-5",
					fill: "none",
					stroke: "currentColor",
					viewBox: "0 0 24 24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M6 18L18 6M6 6l12 12"
					})
				})
			})]
		}), showSuggestions && filteredSuggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: suggestionsListRef,
			className: "absolute top-full left-0 right-0 mt-1 bg-[rgb(var(--ec-card-bg))] border border-[rgb(var(--ec-page-border))] rounded-md shadow-lg z-50 max-h-60 overflow-y-auto",
			children: filteredSuggestions.map((suggestion, index) => {
				const nodeTypeMeta = getNodeTypeMeta(suggestion.type);
				const Icon = nodeTypeMeta.Icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: (element) => {
						suggestionItemRefs.current[index] = element;
					},
					onClick: () => handleSuggestionClick(suggestion),
					onMouseEnter: () => setSelectedSuggestionIndex(index),
					className: `px-3 py-2 cursor-pointer flex items-start gap-3 ${index === selectedSuggestionIndex ? "bg-[rgb(var(--ec-accent-subtle))] outline outline-1 -outline-offset-1 outline-[rgb(var(--ec-accent))]" : "hover:bg-[rgb(var(--ec-page-border)/0.5)]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border ${nodeTypeMeta.iconClass}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm font-medium text-[rgb(var(--ec-page-text))]",
								children: suggestion.label
							}), suggestion.isGroupedMessage && suggestion.groupName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-0.5 block truncate text-xs text-[rgb(var(--ec-page-text-muted))]",
								children: ["in ", suggestion.groupName]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-0.5 flex-shrink-0 rounded border px-2 py-0.5 text-xs font-medium ${nodeTypeMeta.badgeClass}`,
							children: nodeTypeMeta.label
						})
					]
				}, `${suggestion.key}:${index}`);
			})
		})]
	});
}));
VisualiserSearch.displayName = "VisualiserSearch";
var VisualiserSearch_default = VisualiserSearch;
var StepWalkthrough_default = (0, import_react.memo)(function StepWalkthrough({ nodes, edges, isFlowVisualization, onStepChange }) {
	const [currentNodeId, setCurrentNodeId] = (0, import_react.useState)(null);
	const [pathHistory, setPathHistory] = (0, import_react.useState)([]);
	const [currentStepIndex, setCurrentStepIndex] = (0, import_react.useState)(-1);
	const [availablePaths, setAvailablePaths] = (0, import_react.useState)([]);
	const [selectedPathIndex, setSelectedPathIndex] = (0, import_react.useState)(0);
	const [startNodeId, setStartNodeId] = (0, import_react.useState)(null);
	const nodeIdsKeyRef = (0, import_react.useRef)("");
	const computedNodeIdsKey = nodes.map((n) => n.id).join(",");
	if (computedNodeIdsKey !== nodeIdsKeyRef.current) nodeIdsKeyRef.current = computedNodeIdsKey;
	const nodeIdsKey = nodeIdsKeyRef.current;
	const edgeKeyRef = (0, import_react.useRef)("");
	const computedEdgeKey = edges.map((e) => `${e.source}-${e.target}`).join(",");
	if (computedEdgeKey !== edgeKeyRef.current) edgeKeyRef.current = computedEdgeKey;
	const edgeKey = edgeKeyRef.current;
	(0, import_react.useEffect)(() => {
		if (isFlowVisualization && nodes.length > 0) {
			const incomingEdgeMap = /* @__PURE__ */ new Map();
			nodes.forEach((node) => incomingEdgeMap.set(node.id, 0));
			edges.forEach((edge) => {
				if (incomingEdgeMap.has(edge.target)) incomingEdgeMap.set(edge.target, (incomingEdgeMap.get(edge.target) || 0) + 1);
			});
			const startNodes = nodes.filter((node) => incomingEdgeMap.get(node.id) === 0);
			const cachedStartStillValid = startNodeId && nodes.some((n) => n.id === startNodeId);
			if (startNodes.length > 0 && !cachedStartStillValid) {
				const firstStartNode = startNodes[0];
				setStartNodeId(firstStartNode.id);
			}
		}
	}, [
		nodeIdsKey,
		edgeKey,
		isFlowVisualization,
		startNodeId
	]);
	(0, import_react.useEffect)(() => {
		if (currentNodeId) {
			if (!nodes.some((n) => n.id === currentNodeId)) {
				setCurrentNodeId(null);
				setCurrentStepIndex(-1);
				setPathHistory([]);
				setAvailablePaths([]);
				return;
			}
			const paths = edges.filter((edge) => edge.source === currentNodeId).map((edge) => {
				const targetNode = nodes.find((n) => n.id === edge.target);
				return {
					targetId: edge.target,
					label: edge.label,
					targetNode
				};
			});
			setAvailablePaths(paths);
			setSelectedPathIndex(0);
		} else setAvailablePaths([]);
	}, [
		currentNodeId,
		nodeIdsKey,
		edgeKey
	]);
	const handleNextStep = (0, import_react.useCallback)(() => {
		if (currentStepIndex === -1) {
			if (startNodeId) {
				setPathHistory([startNodeId]);
				setCurrentNodeId(startNodeId);
				setCurrentStepIndex(0);
				onStepChange(startNodeId);
			}
		} else if (availablePaths.length > 0) {
			const selectedPath = availablePaths[selectedPathIndex];
			const newHistory = [...pathHistory, selectedPath.targetId];
			setPathHistory(newHistory);
			setCurrentNodeId(selectedPath.targetId);
			setCurrentStepIndex((prev) => prev + 1);
			const allPaths = availablePaths.map((p) => `${currentNodeId}-${p.targetId}`);
			onStepChange(selectedPath.targetId, allPaths);
		}
	}, [
		currentStepIndex,
		startNodeId,
		availablePaths,
		selectedPathIndex,
		currentNodeId,
		onStepChange
	]);
	const handlePreviousStep = (0, import_react.useCallback)(() => {
		if (currentStepIndex > 0) {
			const newIndex = currentStepIndex - 1;
			const prevNodeId = pathHistory[newIndex];
			setCurrentNodeId(prevNodeId);
			setCurrentStepIndex(newIndex);
			onStepChange(prevNodeId);
		} else if (currentStepIndex === 0) {
			setCurrentNodeId(null);
			setCurrentStepIndex(-1);
			onStepChange(null);
		}
	}, [
		currentStepIndex,
		pathHistory,
		onStepChange
	]);
	const handlePathSelection = (0, import_react.useCallback)((index) => {
		setSelectedPathIndex(index);
	}, []);
	const handleFinish = (0, import_react.useCallback)(() => {
		setCurrentNodeId(null);
		setCurrentStepIndex(-1);
		setPathHistory([]);
		onStepChange(null, [], true);
	}, [onStepChange]);
	if (!isFlowVisualization || nodes.length === 0) return null;
	const { title, description } = (0, import_react.useMemo)(() => {
		if (currentStepIndex === -1) return {
			title: "Walk through business flow",
			description: "Step through the flow to understand the business process"
		};
		const currentNode = nodes.find((n) => n.id === currentNodeId);
		if (!currentNode) return {
			title: "Unknown step",
			description: ""
		};
		let title2 = `Step ${currentStepIndex + 1}`;
		let description2 = "";
		if (currentNode.data.step?.title) title2 += `: ${currentNode.data.step.title}`;
		else if (currentNode.data.service?.name) title2 += `: ${currentNode.data.service.name}`;
		else if (currentNode.data.message?.name) title2 += `: ${currentNode.data.message.name}`;
		else if (currentNode.data.flow?.data?.name) title2 += `: ${currentNode.data.flow.data.name}`;
		else if (currentNode.data.custom?.title) title2 += `: ${currentNode.data.custom.title}`;
		else if (currentNode.data.custom?.label) title2 += `: ${currentNode.data.custom.label}`;
		else if (currentNode.data.externalSystem?.label) title2 += `: ${currentNode.data.externalSystem.label}`;
		else if (currentNode.data.label) title2 += `: ${currentNode.data.label}`;
		if (currentNode.data.step?.summary) description2 = currentNode.data.step.summary;
		else if (currentNode.data.service?.summary) description2 = currentNode.data.service.summary;
		else if (currentNode.data.message?.summary) description2 = currentNode.data.message.summary;
		else if (currentNode.data.custom?.summary) description2 = currentNode.data.custom.summary;
		else if (currentNode.data.summary) description2 = currentNode.data.summary;
		return {
			title: title2,
			description: description2
		};
	}, [
		currentStepIndex,
		currentNodeId,
		nodeIdsKey
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ml-12 bg-[rgb(var(--ec-card-bg))] rounded-lg shadow-sm px-4 py-2 z-30 border border-[rgb(var(--ec-page-border))] w-[350px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold text-[rgb(var(--ec-page-text))]",
					children: title
				}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[rgb(var(--ec-page-text-muted))] mt-1",
					children: description
				})]
			}),
			currentNodeId && availablePaths.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-[rgb(var(--ec-page-text-muted))] mb-2",
					children: "Choose next path:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: selectedPathIndex,
					onChange: (e) => handlePathSelection(parseInt(e.target.value)),
					className: "w-full px-3 py-2 text-xs border border-[rgb(var(--ec-input-border))] rounded-md bg-[rgb(var(--ec-input-bg))] text-[rgb(var(--ec-input-text))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))] focus:border-[rgb(var(--ec-accent))]",
					children: availablePaths.map((path, index) => {
						const nodeLabel = path.targetNode.data.step?.title || path.targetNode.data.service?.name || path.targetNode.data.message?.name || path.targetNode.data.flow?.data?.name || path.targetNode.data.custom?.title || path.targetNode.data.custom?.label || path.targetNode.data.externalSystem?.label || path.targetNode.data.label || "Unknown";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: index,
							children: path.label ? `${path.label}: ${nodeLabel}` : nodeLabel
						}, path.targetId);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between",
				children: currentStepIndex === -1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleNextStep,
					className: "flex items-center justify-center px-6 py-2 text-xs font-medium bg-[rgb(var(--ec-accent))] text-white rounded-md hover:bg-[rgb(var(--ec-accent-hover))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))] focus:ring-offset-2 transition-colors",
					children: "Start"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handlePreviousStep,
					className: "flex items-center justify-center px-4 py-2 text-xs font-medium bg-[rgb(var(--ec-accent))] text-white rounded-md hover:bg-[rgb(var(--ec-accent-hover))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))] focus:ring-offset-2 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-4 h-4 mr-1" }), "Previous"]
				}), availablePaths.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleNextStep,
					className: "flex items-center justify-center px-4 py-2 text-xs font-medium bg-[rgb(var(--ec-accent))] text-white rounded-md hover:bg-[rgb(var(--ec-accent-hover))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))] focus:ring-offset-2 transition-colors",
					children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "w-4 h-4 ml-1" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleFinish,
					className: "flex items-center justify-center px-4 py-2 text-xs font-medium bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors",
					children: "Finish"
				})] })
			})
		]
	});
});
var exportNodeGraphForStudio = (data) => {
	const dataTypes = [
		"channel",
		"custom",
		"data",
		"domain",
		"entity",
		"message",
		"flow",
		"agent",
		"agentTool",
		"service",
		"step",
		"user"
	];
	const nodes = data.nodes.map((node) => {
		let nodeData = node.data;
		const hasCustomDataType = Object.keys(nodeData).find((property) => dataTypes.includes(property));
		if (hasCustomDataType && nodeData[hasCustomDataType]) {
			const resourceData = nodeData[hasCustomDataType];
			nodeData = {
				...nodeData,
				[hasCustomDataType]: {
					id: resourceData?.id,
					name: resourceData?.name,
					summary: resourceData?.summary,
					version: resourceData?.version
				}
			};
		}
		return {
			...node,
			data: {
				...nodeData,
				source: void 0,
				target: void 0,
				mode: "full"
			}
		};
	});
	const edges = data.edges.map((edge) => {
		return {
			...edge,
			data: void 0,
			type: "animatedMessage"
		};
	});
	return {
		...data,
		nodes,
		edges
	};
};
var StudioModal = ({ isOpen, onClose }) => {
	const [copySuccess, setCopySuccess] = (0, import_react.useState)(false);
	const portalContainer = usePortalContainer();
	const { toObject } = useReactFlow();
	const handleCopyToClipboard = (0, import_react.useCallback)(async () => {
		const studioData = exportNodeGraphForStudio(toObject());
		try {
			await navigator.clipboard.writeText(JSON.stringify(studioData, null, 2));
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2e3);
		} catch (error) {
			console.error("Failed to copy to clipboard:", error);
			const textarea = document.createElement("textarea");
			textarea.value = JSON.stringify(studioData, null, 2);
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2e3);
		}
	}, []);
	const handleOpenStudio = () => {
		window.open("https://app.eventcatalog.studio/playground?import=true&utm_source=eventcatalog&utm_medium=referral&utm_campaign=playground-import", "_blank");
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
			container: portalContainer,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow z-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow z-[100]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-semibold text-gray-900 mb-3",
						children: "Open in EventCatalog Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "text-sm text-gray-600 mb-6",
						children: [
							"Import your diagram into",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://eventcatalog.studio",
								className: "text-[rgb(var(--ec-accent))] hover:text-[rgb(var(--ec-accent-hover))] underline",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "EventCatalog Studio"
							}),
							" ",
							"to create designs from your visualization of your architecture."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-gray-50 rounded-lg p-4 border border-gray-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-gray-900 mb-2",
									children: "Step 1: Copy diagram"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-gray-600 mb-3",
									children: "Copy your diagram data to your clipboard."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleCopyToClipboard,
									className: `w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors ${copySuccess ? "bg-green-50 border-green-200 text-green-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`,
									children: copySuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copied!" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy diagram to clipboard" })] })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[rgb(var(--ec-accent-subtle))] rounded-lg p-4 border border-[rgb(var(--ec-accent)/0.3)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-gray-900 mb-2",
									children: "Step 2: Open EventCatalog Studio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-gray-600 mb-3",
									children: "Go to EventCatalog Studio and import your design using the \"Import from EventCatalog\" button."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleOpenStudio,
									className: "w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[rgb(var(--ec-accent))] text-white text-sm font-medium rounded-md hover:bg-[rgb(var(--ec-accent-hover))] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open EventCatalog Studio" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] text-gray-500  italic mt-4 mb-0",
									children: "Don't worry, none of your data is stored by EventCatalog Studio, everything is local to your browser."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))] focus:ring-offset-2 transition-colors",
								onClick: onClose,
								children: "Close"
							})
						})
					})
				]
			})]
		})
	});
};
var StudioModal_default = StudioModal;
function getConnectedNodes(centerNodeId, nodes, edges) {
	const leftIds = /* @__PURE__ */ new Set();
	const rightIds = /* @__PURE__ */ new Set();
	edges.forEach((edge) => {
		if (edge.target === centerNodeId) leftIds.add(edge.source);
		if (edge.source === centerNodeId) rightIds.add(edge.target);
	});
	return {
		leftNodes: nodes.filter((n) => leftIds.has(n.id)),
		rightNodes: nodes.filter((n) => rightIds.has(n.id))
	};
}
var ENTITY_KEYS = [
	"agent",
	"service",
	"message",
	"flow",
	"channel",
	"domain",
	"entity",
	"dataProduct",
	"agentTool"
];
function getNodeDisplayInfo(node) {
	const nodeType = node.type || "unknown";
	const data = node.data;
	if (nodeType === "field") return {
		id: node.id,
		name: data?.name || node.id,
		type: "field",
		version: void 0,
		description: `Type: ${data?.type || "unknown"}`
	};
	if (nodeType === "messageGroup") return {
		id: node.id,
		name: data?.groupName || node.id,
		type: "messageGroup",
		version: void 0,
		description: `${data?.messageCount || 0} messages (${data?.direction || "unknown"})`
	};
	if (nodeType === "messageGroupExpanded") return {
		id: node.id,
		name: data?.groupName || node.id,
		type: "messageGroupExpanded",
		version: void 0,
		description: `${data?.messageCount || 0} messages (expanded)`
	};
	const entityKey = ENTITY_KEYS.find((key) => data[key]);
	const entity = entityKey ? data[entityKey] : null;
	const name = entity?.data?.name || entity?.id || data.label || data.name || node.id;
	const version = entity?.data?.version || entity?.version || data.version || "";
	const description = entity?.data?.summary || entity?.data?.description || entity?.summary || entity?.description || data.summary || data.description || "";
	return {
		id: node.id,
		name,
		type: nodeType,
		version,
		description: description ? truncateDescription(description, 100) : void 0
	};
}
function truncateDescription(text, maxLength) {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength).trim() + "...";
}
var DOC_PATH_MAP = {
	service: "services",
	agent: "agents",
	flow: "flows",
	channel: "channels",
	domain: "domains",
	entity: "entities",
	dataProduct: "data-products"
};
function getNodeDocUrl(node) {
	const nodeType = node.type || "unknown";
	const data = node.data;
	if (data.message) {
		const id = data.message.data?.id || data.message.id || "";
		const version = data.message.data?.version || data.message.version || "";
		return id && version ? `/docs/${nodeType === "events" ? "events" : nodeType === "commands" ? "commands" : "queries"}/${id}/${version}` : null;
	}
	if (data.data && nodeType === "data") {
		const id = data.data.id || "";
		const version = data.data.version || "";
		return id && version ? `/docs/containers/${id}/${version}` : null;
	}
	for (const [key, path] of Object.entries(DOC_PATH_MAP)) if (data[key]) {
		const id = data[key].data?.id || data[key].id || "";
		const version = data[key].data?.version || data[key].version || "";
		return id && version ? `/docs/${path}/${id}/${version}` : null;
	}
	return null;
}
var FocusModeNodeActions = ({ node, isCenter, onSwitch }) => {
	const { zoom } = useViewport();
	if (node.type === "placeholder") return null;
	const docUrl = getNodeDocUrl(node);
	const direction = (node.position?.x ?? 0) < 0 ? "left" : "right";
	const baseButtonSize = 24;
	const baseIconSize = 12;
	const scaleFactor = Math.max(.4, Math.min(1, zoom));
	const buttonSize = Math.round(baseButtonSize * scaleFactor);
	const iconSize = Math.round(baseIconSize * scaleFactor);
	const handleSwitch = (e) => {
		e.stopPropagation();
		onSwitch(node.id, direction);
	};
	const handleDocClick = (e) => {
		e.stopPropagation();
		if (docUrl) window.location.href = buildUrl(docUrl);
	};
	if (isCenter) {
		if (!docUrl) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeToolbar, {
			nodeId: node.id,
			position: Position.Bottom,
			isVisible: true,
			offset: -16,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 bg-[rgb(var(--ec-card-bg,var(--ec-page-bg)))] border border-[rgb(var(--ec-page-border))] rounded-lg shadow-md",
				style: { padding: Math.round(4 * scaleFactor) },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleDocClick,
					className: "flex items-center justify-center rounded-md text-[rgb(var(--ec-icon-color))] hover:text-[rgb(var(--ec-accent))] hover:bg-[rgb(var(--ec-accent-subtle))] transition-colors",
					style: {
						width: buttonSize,
						height: buttonSize
					},
					title: "View documentation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { style: {
						width: iconSize,
						height: iconSize
					} })
				})
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeToolbar, {
		nodeId: node.id,
		position: Position.Bottom,
		isVisible: true,
		offset: -16,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 bg-[rgb(var(--ec-card-bg,var(--ec-page-bg)))] border border-[rgb(var(--ec-page-border))] rounded-lg shadow-md",
			style: { padding: Math.round(4 * scaleFactor) },
			children: [docUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleDocClick,
				className: "flex items-center justify-center rounded-md text-[rgb(var(--ec-icon-color))] hover:text-[rgb(var(--ec-accent))] hover:bg-[rgb(var(--ec-accent-subtle))] transition-colors",
				style: {
					width: buttonSize,
					height: buttonSize
				},
				title: "View documentation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { style: {
					width: iconSize,
					height: iconSize
				} })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleSwitch,
				className: "flex items-center justify-center rounded-md text-[rgb(var(--ec-icon-color))] hover:text-[rgb(var(--ec-accent))] hover:bg-[rgb(var(--ec-accent-subtle))] transition-colors",
				style: {
					width: buttonSize,
					height: buttonSize
				},
				title: "Focus on this node",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, { style: {
					width: iconSize,
					height: iconSize
				} })
			})]
		})
	});
};
var FocusModeNodeActions_default = FocusModeNodeActions;
var FocusModePlaceholder = ({ data }) => {
	const { label, side } = data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-4 rounded-lg border-2 border-dashed border-[rgb(var(--ec-page-border))] bg-[rgb(var(--ec-page-bg)/0.5)] max-w-[280px] flex items-center justify-center",
		style: {
			opacity: .6,
			minHeight: "130px"
		},
		children: [
			side === "right" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "target",
				position: Position.Left,
				style: { visibility: "hidden" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-sm text-[rgb(var(--ec-page-text-muted))] italic",
				children: label
			}),
			side === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {
				type: "source",
				position: Position.Right,
				style: { visibility: "hidden" }
			})
		]
	});
};
var FocusModePlaceholder_default = FocusModePlaceholder;
var HORIZONTAL_SPACING = 450;
var VERTICAL_SPACING = 200;
var SLIDE_DURATION = 300;
var FocusModeContent = ({ centerNodeId, nodes: allNodes, edges: allEdges, nodeTypes, edgeTypes: edgeTypes2, onSwitchCenter }) => {
	const { fitView } = useReactFlow();
	const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	const [needsFitView, setNeedsFitView] = (0, import_react.useState)(false);
	const [hoveredEdgeId, setHoveredEdgeId] = (0, import_react.useState)(null);
	const [isReady, setIsReady] = (0, import_react.useState)(false);
	const reactFlowInitialized = (0, import_react.useRef)(false);
	const animationTimeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
		};
	}, []);
	const calculateFocusedGraph = (0, import_react.useCallback)((centerId) => {
		const centerNode = allNodes.find((n) => n.id === centerId);
		if (!centerNode) return {
			nodes: [],
			edges: []
		};
		const { leftNodes, rightNodes } = getConnectedNodes(centerId, allNodes, allEdges);
		const centerNodeInfo = getNodeDisplayInfo(centerNode);
		const positionedNodes = [];
		positionedNodes.push({
			...centerNode,
			parentId: void 0,
			extent: void 0,
			position: {
				x: 0,
				y: 0
			},
			style: {
				...centerNode.style,
				opacity: 1
			},
			data: {
				...centerNode.data,
				isFocusCenter: true
			}
		});
		leftNodes.forEach((node, index) => {
			const yOffset = (index - (leftNodes.length - 1) / 2) * VERTICAL_SPACING;
			positionedNodes.push({
				...node,
				parentId: void 0,
				extent: void 0,
				position: {
					x: -HORIZONTAL_SPACING,
					y: yOffset
				},
				style: {
					...node.style,
					opacity: 1
				}
			});
		});
		rightNodes.forEach((node, index) => {
			const yOffset = (index - (rightNodes.length - 1) / 2) * VERTICAL_SPACING;
			positionedNodes.push({
				...node,
				parentId: void 0,
				extent: void 0,
				position: {
					x: HORIZONTAL_SPACING,
					y: yOffset
				},
				style: {
					...node.style,
					opacity: 1
				}
			});
		});
		if (leftNodes.length === 0) positionedNodes.push({
			id: "__placeholder-left__",
			type: "placeholder",
			position: {
				x: -HORIZONTAL_SPACING,
				y: 0
			},
			data: {
				label: `No inputs found for "${centerNodeInfo.name}" in this diagram`,
				side: "left"
			},
			draggable: false,
			selectable: false
		});
		if (rightNodes.length === 0) positionedNodes.push({
			id: "__placeholder-right__",
			type: "placeholder",
			position: {
				x: HORIZONTAL_SPACING,
				y: 0
			},
			data: {
				label: `No outputs found for "${centerNodeInfo.name}" in this diagram`,
				side: "right"
			},
			draggable: false,
			selectable: false
		});
		const focusedNodeIds = new Set(positionedNodes.map((n) => n.id));
		return {
			nodes: positionedNodes,
			edges: allEdges.filter((edge) => {
				const connectsToCenter = edge.source === centerId || edge.target === centerId;
				const otherEndInFocus = focusedNodeIds.has(edge.source) && focusedNodeIds.has(edge.target);
				return connectsToCenter && otherEndInFocus;
			}).map((edge) => ({
				...edge,
				style: {
					...edge.style,
					opacity: 1
				},
				labelStyle: {
					...edge.labelStyle,
					opacity: 1
				},
				data: {
					...edge.data,
					opacity: 1,
					animated: false
				},
				animated: false
			}))
		};
	}, [allNodes, allEdges]);
	const initialGraph = (0, import_react.useMemo)(() => calculateFocusedGraph(centerNodeId), [centerNodeId, calculateFocusedGraph]);
	const [displayNodes, setDisplayNodes] = useNodesState(initialGraph.nodes);
	const [displayEdges, setDisplayEdges] = useEdgesState(initialGraph.edges);
	(0, import_react.useEffect)(() => {
		const { nodes, edges } = calculateFocusedGraph(centerNodeId);
		setDisplayNodes(nodes);
		setDisplayEdges(edges);
		setNeedsFitView(true);
	}, [
		centerNodeId,
		calculateFocusedGraph,
		setDisplayNodes,
		setDisplayEdges
	]);
	(0, import_react.useEffect)(() => {
		if (needsFitView && reactFlowInitialized.current) {
			const timer = setTimeout(() => {
				fitView({
					padding: .2,
					duration: 300
				});
				setNeedsFitView(false);
			}, 50);
			return () => clearTimeout(timer);
		}
	}, [
		needsFitView,
		displayNodes,
		fitView
	]);
	const handleInit = (0, import_react.useCallback)(() => {
		reactFlowInitialized.current = true;
		requestAnimationFrame(() => {
			fitView({
				padding: .2,
				duration: 0
			});
			setIsReady(true);
		});
	}, [fitView]);
	const handleSwitchNode = (0, import_react.useCallback)((nodeId, direction) => {
		if (nodeId === centerNodeId || isAnimating) return;
		setIsAnimating(true);
		setDisplayNodes((currentNodes) => currentNodes.map((node) => {
			if (node.id === nodeId) return {
				...node,
				position: {
					x: 0,
					y: 0
				},
				style: {
					...node.style,
					transition: `all ${SLIDE_DURATION}ms ease-out`
				}
			};
			if (node.id === centerNodeId) return {
				...node,
				style: {
					...node.style,
					opacity: 0,
					transition: `opacity ${SLIDE_DURATION}ms ease-out`
				}
			};
			return node;
		}));
		animationTimeoutRef.current = setTimeout(() => {
			onSwitchCenter(nodeId, direction);
			setIsAnimating(false);
		}, SLIDE_DURATION);
	}, [
		centerNodeId,
		isAnimating,
		setDisplayNodes,
		onSwitchCenter
	]);
	const handleNodeClick = (0, import_react.useCallback)((_, clickedNode) => {
		if (clickedNode.id === centerNodeId || isAnimating) return;
		const direction = (clickedNode.position?.x ?? 0) < 0 ? "left" : "right";
		handleSwitchNode(clickedNode.id, direction);
	}, [
		centerNodeId,
		isAnimating,
		handleSwitchNode
	]);
	const handleEdgeMouseEnter = (0, import_react.useCallback)((_, edge) => {
		setHoveredEdgeId(edge.id);
	}, []);
	const handleEdgeMouseLeave = (0, import_react.useCallback)(() => {
		setHoveredEdgeId(null);
	}, []);
	const edgesWithHover = (0, import_react.useMemo)(() => {
		return displayEdges.map((edge) => {
			if (edge.id === hoveredEdgeId) return {
				...edge,
				animated: true
			};
			return edge;
		});
	}, [displayEdges, hoveredEdgeId]);
	const mergedNodeTypes = (0, import_react.useMemo)(() => ({
		...nodeTypes,
		placeholder: FocusModePlaceholder_default
	}), [nodeTypes]);
	if (displayNodes.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center h-full text-[rgb(var(--ec-page-text-muted))]",
		children: "Node not found"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full w-full focus-mode-container",
		style: { opacity: isReady ? 1 : 0 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(index, {
			nodes: displayNodes,
			edges: edgesWithHover,
			nodeTypes: mergedNodeTypes,
			edgeTypes: edgeTypes2,
			onNodeClick: handleNodeClick,
			onEdgeMouseEnter: handleEdgeMouseEnter,
			onEdgeMouseLeave: handleEdgeMouseLeave,
			onInit: handleInit,
			proOptions: { hideAttribution: true },
			nodesDraggable: true,
			nodesConnectable: false,
			elementsSelectable: true,
			panOnDrag: true,
			zoomOnScroll: true,
			minZoom: .3,
			maxZoom: 2,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background, {
					color: "rgb(var(--ec-page-border))",
					gap: 20
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, { showInteractive: false }),
				displayNodes.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusModeNodeActions_default, {
					node,
					isCenter: node.id === centerNodeId,
					onSwitch: handleSwitchNode
				}, `actions-${node.id}-${index}`))
			]
		})
	});
};
var FocusModeContent_default = FocusModeContent;
var FocusModeModal = ({ isOpen, onClose, initialNodeId, nodes, edges, nodeTypes, edgeTypes: edgeTypes2 }) => {
	const [centerNodeId, setCenterNodeId] = (0, import_react.useState)(initialNodeId);
	const isDark = useDarkMode();
	usePortalContainer();
	(0, import_react.useEffect)(() => {
		if (isOpen && initialNodeId) setCenterNodeId(initialNodeId);
	}, [isOpen, initialNodeId]);
	const handleSwitchCenter = (0, import_react.useCallback)((newCenterNodeId, _direction) => {
		setCenterNodeId(newCenterNodeId);
	}, []);
	const centerNode = centerNodeId ? nodes.find((n) => n.id === centerNodeId) : null;
	const centerNodeInfo = centerNode ? getNodeDisplayInfo(centerNode) : null;
	if (!centerNodeId) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "eventcatalog-visualizer",
			style: {
				position: "fixed",
				inset: 0,
				isolation: "isolate",
				zIndex: 99999
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { style: {
				position: "fixed",
				inset: 0,
				background: isDark ? "rgba(0, 0, 0, 0.75)" : "rgba(15, 23, 42, 0.55)",
				backdropFilter: "blur(2px)"
			} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				style: {
					position: "fixed",
					inset: "5%",
					borderRadius: 12,
					background: isDark ? "#0f172a" : "#ffffff",
					border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
					boxShadow: isDark ? "0 24px 48px rgba(0,0,0,0.5)" : "0 24px 48px rgba(0,0,0,0.15)",
					outline: "none",
					display: "flex",
					flexDirection: "column",
					overflow: "hidden"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "1rem 1.5rem",
						borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
						flexShrink: 0
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 12
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: 40,
								height: 40,
								borderRadius: 10,
								background: isDark ? "rgba(59, 130, 246, 0.18)" : "rgba(59, 130, 246, 0.12)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, { style: {
								width: 20,
								height: 20,
								color: isDark ? "#93c5fd" : "#2563eb"
							} })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							style: {
								fontSize: 18,
								fontWeight: 600,
								color: isDark ? "#f8fafc" : "#0f172a"
							},
							children: "Focus Mode"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							style: {
								marginTop: 2,
								fontSize: 14,
								color: isDark ? "#94a3b8" : "#475569"
							},
							children: centerNodeInfo ? `Exploring: ${centerNodeInfo.name} - Click on connected nodes to navigate` : "Explore node connections"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: 40,
								height: 40,
								borderRadius: 10,
								border: "none",
								cursor: "pointer",
								background: "transparent",
								color: isDark ? "#94a3b8" : "#64748b"
							},
							"aria-label": "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { style: {
								width: 20,
								height: 20
							} })
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						flex: 1,
						overflow: "hidden"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactFlowProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusModeContent_default, {
						centerNodeId,
						nodes,
						edges,
						nodeTypes,
						edgeTypes: edgeTypes2,
						onSwitchCenter: handleSwitchCenter
					}) })
				})]
			})]
		}) })
	});
};
var FocusModeModal_default = FocusModeModal;
var NODE_SHAPE_MAP = {
	agents: ["[[", "]]"],
	agent: ["[[", "]]"],
	agentTool: ["[", "]"],
	"agent-tool": ["[", "]"],
	services: ["[[", "]]"],
	service: ["[[", "]]"],
	events: [">", "]"],
	event: [">", "]"],
	commands: [">", "]"],
	command: [">", "]"],
	queries: ["{{", "}}"],
	query: ["{{", "}}"],
	channels: ["[(", ")]"],
	channel: ["[(", ")]"],
	domains: ["[", "]"],
	domain: ["[", "]"],
	flows: ["([", "])"],
	flow: ["([", "])"],
	step: ["[", "]"],
	user: ["((", "))"],
	actor: ["((", "))"],
	externalSystem: ["[[", "]]"],
	"external-system": ["[[", "]]"],
	data: ["[(", ")]"],
	"data-product": ["[[", "]]"],
	"data-products": ["[[", "]]"],
	entities: ["[", "]"],
	entity: ["[", "]"],
	custom: ["[", "]"],
	view: ["[", "]"],
	note: ["[", "]"],
	field: ["[(", ")]"],
	fields: ["[(", ")]"],
	messageGroup: ["[[", "]]"],
	messageGroupExpanded: ["[[", "]]"]
};
var NODE_STYLE_CLASSES = {
	agents: "fill:#0ea5e9,stroke:#0369a1,color:#fff",
	agent: "fill:#0ea5e9,stroke:#0369a1,color:#fff",
	agentTool: "fill:#8b5cf6,stroke:#6d28d9,color:#fff",
	"agent-tool": "fill:#8b5cf6,stroke:#6d28d9,color:#fff",
	services: "fill:#ec4899,stroke:#be185d,color:#fff",
	service: "fill:#ec4899,stroke:#be185d,color:#fff",
	events: "fill:#f97316,stroke:#c2410c,color:#fff",
	event: "fill:#f97316,stroke:#c2410c,color:#fff",
	commands: "fill:#3b82f6,stroke:#1d4ed8,color:#fff",
	command: "fill:#3b82f6,stroke:#1d4ed8,color:#fff",
	queries: "fill:#22c55e,stroke:#15803d,color:#fff",
	query: "fill:#22c55e,stroke:#15803d,color:#fff",
	channels: "fill:#6b7280,stroke:#374151,color:#fff",
	channel: "fill:#6b7280,stroke:#374151,color:#fff",
	domains: "fill:#eab308,stroke:#a16207,color:#000",
	domain: "fill:#eab308,stroke:#a16207,color:#000",
	flows: "fill:#14b8a6,stroke:#0f766e,color:#fff",
	flow: "fill:#14b8a6,stroke:#0f766e,color:#fff",
	step: "fill:#374151,stroke:#1f2937,color:#fff",
	user: "fill:#8b5cf6,stroke:#6d28d9,color:#fff",
	actor: "fill:#eab308,stroke:#a16207,color:#000",
	externalSystem: "fill:#ec4899,stroke:#be185d,color:#fff",
	"external-system": "fill:#ec4899,stroke:#be185d,color:#fff",
	data: "fill:#3b82f6,stroke:#1d4ed8,color:#fff",
	"data-product": "fill:#6366f1,stroke:#4338ca,color:#fff",
	"data-products": "fill:#6366f1,stroke:#4338ca,color:#fff",
	entities: "fill:#6b7280,stroke:#374151,color:#fff",
	entity: "fill:#6b7280,stroke:#374151,color:#fff",
	custom: "fill:#9ca3af,stroke:#6b7280,color:#000",
	view: "fill:#9ca3af,stroke:#6b7280,color:#000",
	note: "fill:#fef3c7,stroke:#d97706,color:#000",
	field: "fill:#06b6d4,stroke:#0891b2,color:#fff",
	fields: "fill:#06b6d4,stroke:#0891b2,color:#fff",
	messageGroup: "fill:#7c3aed,stroke:#5b21b6,color:#fff",
	messageGroupExpanded: "fill:#7c3aed,stroke:#5b21b6,color:#fff"
};
function sanitizeMermaidId(id) {
	return id.replace(/[^a-zA-Z0-9_]/g, "_");
}
function escapeMermaidLabel(label) {
	return label.replace(/"/g, "#quot;").replace(/\n/g, "<br/>");
}
function getMermaidNodeShape(type) {
	return NODE_SHAPE_MAP[type] || ["[", "]"];
}
function formatLabelWithVersion(name, version) {
	if (version) return `${name} (${version})`;
	return name;
}
function getNodeLabel(node) {
	const { type, data } = node;
	if (!data) return node.id;
	if (type === "agents" || type === "agent") {
		const agent = data.agent;
		return formatLabelWithVersion(agent?.name || agent?.id || node.id, agent?.data?.version || agent?.version);
	}
	if (type === "agentTool" || type === "agent-tool") {
		const agentTool = data.agentTool;
		return agentTool?.name || agentTool?.id || node.id;
	}
	if (type === "services" || type === "service") {
		const service = data.service;
		return formatLabelWithVersion(service?.name || service?.id || node.id, service?.data?.version || service?.version);
	}
	if (type === "events" || type === "event" || type === "commands" || type === "command" || type === "queries" || type === "query") {
		const message = data.message;
		return formatLabelWithVersion(message?.name || message?.id || node.id, message?.data?.version || message?.version);
	}
	if (type === "channels" || type === "channel") {
		const channel = data.channel;
		return formatLabelWithVersion(channel?.name || channel?.id || node.id, channel?.data?.version || channel?.version);
	}
	if (type === "domains" || type === "domain") {
		const domain = data.domain;
		const domainData = domain?.data || domain;
		return formatLabelWithVersion(domainData?.name || domainData?.id || node.id, domainData?.version || domain?.version);
	}
	if (type === "flows" || type === "flow") {
		const flow = data.flow;
		return formatLabelWithVersion(flow?.name || flow?.id || node.id, flow?.data?.version || flow?.version);
	}
	if (type === "step") {
		const step = data.step;
		return step?.title || step?.name || step?.id || node.id;
	}
	if (type === "user" || type === "actor") return data.name || data.label || data.id || node.id;
	if (type === "externalSystem" || type === "external-system") {
		const system = data.externalSystem || data;
		return system?.name || system?.id || node.id;
	}
	if (type === "data") {
		const dataNode = data.data;
		return dataNode?.name || dataNode?.id || node.id;
	}
	if (type === "data-product" || type === "data-products") {
		const dataProduct = data.dataProduct;
		return formatLabelWithVersion(dataProduct?.name || dataProduct?.id || node.id, dataProduct?.data?.version || dataProduct?.version);
	}
	if (type === "entities" || type === "entity") {
		const entity = data.entity;
		return entity?.name || entity?.id || node.id;
	}
	if (type === "note") return data.text || data.label || "Note";
	if (type === "field" || type === "fields") {
		const name = data.name || node.id;
		const fieldType = data.type;
		return fieldType ? `${name} (${fieldType})` : name;
	}
	if (type === "messageGroup") return `${data.groupName || node.id} (${data.messageCount || 0} messages)`;
	if (type === "messageGroupExpanded") return `${data.groupName || node.id} (${data.messageCount || 0} messages)`;
	return data.name || data.label || data.title || data.id || node.id;
}
function getEdgeLabel(edge) {
	if (edge.label && typeof edge.label === "string") return edge.label;
	if (edge.data?.label && typeof edge.data.label === "string") return edge.data.label;
}
function convertToMermaid(nodes, edges, options = {}) {
	const { includeStyles = true, direction = "LR" } = options;
	const lines = [];
	lines.push(`flowchart ${direction}`);
	const usedTypes = /* @__PURE__ */ new Set();
	if (includeStyles) {
		lines.push("");
		lines.push("    %% Style definitions");
		nodes.forEach((node) => {
			if (node.type && NODE_STYLE_CLASSES[node.type]) usedTypes.add(node.type);
		});
		usedTypes.forEach((type) => {
			const style = NODE_STYLE_CLASSES[type];
			if (style) lines.push(`    classDef ${sanitizeMermaidId(type)} ${style}`);
		});
	}
	lines.push("");
	lines.push("    %% Nodes");
	nodes.forEach((node) => {
		const sanitizedId = sanitizeMermaidId(node.id);
		const label = escapeMermaidLabel(getNodeLabel(node));
		const [prefix, suffix] = getMermaidNodeShape(node.type || "custom");
		let nodeLine = `    ${sanitizedId}${prefix}"${label}"${suffix}`;
		if (includeStyles && node.type && usedTypes.has(node.type)) nodeLine += `:::${sanitizeMermaidId(node.type)}`;
		lines.push(nodeLine);
	});
	lines.push("");
	lines.push("    %% Edges");
	edges.forEach((edge) => {
		const sourceId = sanitizeMermaidId(edge.source);
		const targetId = sanitizeMermaidId(edge.target);
		const label = getEdgeLabel(edge);
		let edgeLine;
		if (label) edgeLine = `    ${sourceId} -->|"${escapeMermaidLabel(label.replace(/\n/g, " ").trim())}"| ${targetId}`;
		else edgeLine = `    ${sourceId} --> ${targetId}`;
		lines.push(edgeLine);
	});
	return lines.join("\n");
}
async function copyToClipboard(text) {
	try {
		if (navigator?.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return true;
		}
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.left = "-999999px";
		document.body.appendChild(textArea);
		textArea.select();
		const success = document.execCommand("copy");
		document.body.removeChild(textArea);
		return success;
	} catch (error) {
		console.error("Failed to copy to clipboard:", error);
		return false;
	}
}
var MermaidView = ({ nodes, edges, maxTextSize = 1e5 }) => {
	const [copySuccess, setCopySuccess] = (0, import_react.useState)(false);
	const [mermaidCode, setMermaidCode] = (0, import_react.useState)("");
	const [previewSvg, setPreviewSvg] = (0, import_react.useState)(null);
	const [previewError, setPreviewError] = (0, import_react.useState)(null);
	const [isRendering, setIsRendering] = (0, import_react.useState)(true);
	const containerRef = (0, import_react.useRef)(null);
	const svgContainerRef = (0, import_react.useRef)(null);
	const panZoomInstanceRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const code = convertToMermaid(nodes, edges, {
			includeStyles: true,
			direction: "LR"
		});
		setMermaidCode(code);
	}, [nodes, edges]);
	(0, import_react.useEffect)(() => {
		if (!mermaidCode) return;
		let cancelled = false;
		setIsRendering(true);
		setPreviewError(null);
		const renderMermaid = async () => {
			try {
				const { default: mermaid } = await import("./mermaid.js");
				const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "default";
				mermaid.initialize({
					maxTextSize,
					startOnLoad: false,
					theme: currentTheme,
					flowchart: {
						curve: "basis",
						padding: 20
					},
					securityLevel: "loose"
				});
				const id = "mermaid-view-" + Math.random().toString(36).substring(2, 9);
				const { svg } = await mermaid.render(id, mermaidCode);
				if (!cancelled) {
					setPreviewSvg(svg);
					setPreviewError(null);
				}
			} catch (error) {
				if (!cancelled) {
					console.error("Mermaid render error:", error);
					setPreviewError(error instanceof Error ? error.message : "Failed to render diagram");
					setPreviewSvg(null);
				}
			} finally {
				if (!cancelled) setIsRendering(false);
			}
		};
		renderMermaid();
		return () => {
			cancelled = true;
		};
	}, [mermaidCode]);
	(0, import_react.useEffect)(() => {
		if (!previewSvg || !svgContainerRef.current) return;
		const initZoom = async () => {
			const svgElement = svgContainerRef.current?.querySelector("svg");
			if (!svgElement) return;
			try {
				const { default: svgPanZoom } = await import("./browserify-BNQqtYwi.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
				svgElement.style.width = "100%";
				svgElement.style.height = "100%";
				svgElement.removeAttribute("height");
				svgElement.removeAttribute("width");
				const instance = svgPanZoom(svgElement, {
					zoomEnabled: true,
					controlIconsEnabled: false,
					fit: true,
					center: true,
					minZoom: .1,
					maxZoom: 10,
					zoomScaleSensitivity: .15,
					dblClickZoomEnabled: true,
					mouseWheelZoomEnabled: true,
					panEnabled: true
				});
				panZoomInstanceRef.current = instance;
			} catch (e) {
				console.warn("Failed to initialize zoom:", e);
			}
		};
		initZoom();
		return () => {
			if (panZoomInstanceRef.current) {
				try {
					panZoomInstanceRef.current.destroy();
				} catch (e) {}
				panZoomInstanceRef.current = null;
			}
		};
	}, [previewSvg]);
	const handleCopyToClipboard = (0, import_react.useCallback)(async () => {
		await copyToClipboard(mermaidCode);
		setCopySuccess(true);
		setTimeout(() => setCopySuccess(false), 2e3);
	}, [mermaidCode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "absolute inset-0 bg-[rgb(var(--ec-page-bg))]",
		style: { animation: "fadeIn 200ms ease-out" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[10px] right-4 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleCopyToClipboard,
						className: `p-2.5 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--ec-accent))] transition-all duration-150 ${copySuccess ? "bg-green-500 text-white scale-110" : "bg-[rgb(var(--ec-card-bg))] hover:bg-[rgb(var(--ec-page-border))/0.5] text-[rgb(var(--ec-icon-color))] hover:scale-105"}`,
						"aria-label": copySuccess ? "Copied!" : "Copy Mermaid code",
						children: copySuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-full right-0 mt-2 px-2 py-1 bg-[rgb(var(--ec-page-text))] text-[rgb(var(--ec-page-bg))] text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50",
						children: copySuccess ? "Copied!" : "Copy Mermaid code"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden",
				children: [
					isRendering && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 opacity-40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-10 bg-[rgb(var(--ec-page-border))] rounded animate-pulse" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-0.5 bg-[rgb(var(--ec-page-border))] animate-pulse" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-20 h-10 bg-[rgb(var(--ec-page-border))] rounded-full animate-pulse",
										style: { animationDelay: "75ms" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-12 h-0.5 bg-[rgb(var(--ec-page-border))] animate-pulse",
										style: { animationDelay: "150ms" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-24 h-10 bg-[rgb(var(--ec-page-border))] rounded animate-pulse",
										style: { animationDelay: "225ms" }
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm text-[rgb(var(--ec-page-text-muted))] mt-4",
								children: "Rendering diagram..."
							})]
						})
					}),
					previewError && !isRendering && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full h-full flex flex-col items-center justify-center p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-red-500 text-sm mb-2",
								children: "Failed to render diagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[rgb(var(--ec-page-text-muted))] text-xs font-mono bg-[rgb(var(--ec-code-bg))] p-2 rounded max-w-lg overflow-auto",
								children: previewError
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 text-sm text-[rgb(var(--ec-page-text-muted))]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You can still copy the Mermaid code and paste it into" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://mermaid.live",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-[rgb(var(--ec-accent))] hover:underline",
									children: "mermaid.live"
								})]
							})
						]
					}),
					previewSvg && !isRendering && !previewError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: svgContainerRef,
						className: "w-full h-full cursor-grab active:cursor-grabbing [&_svg]:w-full [&_svg]:h-full",
						dangerouslySetInnerHTML: { __html: previewSvg }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-4 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 bg-[rgb(var(--ec-card-bg))]/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm border border-[rgb(var(--ec-page-border))]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "w-3.5 h-3.5 text-[rgb(var(--ec-icon-color))]",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-[rgb(var(--ec-page-text-muted))]",
						children: "Scroll to zoom · Drag to pan"
					})]
				})
			})
		]
	});
};
var MermaidView_default = MermaidView;
var generateIdForNode = (node) => {
	return `${node.data.id}-${node.data.version}`;
};
var generateIdForNodes = (nodes) => {
	return nodes.map((node) => `${node.data.id}-${node.data.version}`).join("-");
};
var generatedIdForEdge = (source, target) => {
	return `${source.data.id}-${source.data.version}-${target.data.id}-${target.data.version}`;
};
var getColorFromString = (id) => {
	let hash = 0;
	for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
	let color = "#";
	for (let i = 0; i < 3; i++) {
		const value = hash >> i * 8 & 255;
		color += value.toString(16).padStart(2, "0");
	}
	return color;
};
var getEdgeLabelForServiceAsTarget = (data) => {
	switch (data.collection) {
		case "commands": return "invokes";
		case "events": return "publishes \nevent";
		case "queries": return "requests";
		default: return "sends to";
	}
};
var getEdgeLabelForMessageAsSource = (data, throughChannel = false) => {
	switch (data.collection) {
		case "commands": return "accepts";
		case "events": return throughChannel ? "subscribed to" : "subscribed by";
		case "queries": return "accepts";
		default: return "sends to";
	}
};
var calculatedNodes = (flow, nodes) => {
	return nodes.map((node) => {
		const { x, y } = flow.node(node.id);
		return {
			...node,
			position: {
				x,
				y
			}
		};
	});
};
var createDagreGraph = ({ ranksep = 180, nodesep = 50, ...rest }) => {
	const graph = new import_dagre.default.graphlib.Graph({ compound: true });
	graph.setGraph({
		rankdir: "LR",
		ranksep,
		nodesep,
		...rest
	});
	graph.setDefaultEdgeLabel(() => ({}));
	return graph;
};
var LARGE_GRAPH_NODE_THRESHOLD = 80;
var LARGE_GRAPH_EDGE_THRESHOLD = 200;
var LARGE_GRAPH_RANKER = "tight-tree";
var selectDagreRanker = (nodeCount, edgeCount, explicitRanker) => {
	if (explicitRanker) return explicitRanker;
	if (nodeCount >= 80 || edgeCount >= 200) return LARGE_GRAPH_RANKER;
};
var layoutDagreGraph = (flow) => {
	const label = flow.graph() || {};
	const ranker = selectDagreRanker(flow.nodeCount(), flow.edgeCount(), label.ranker);
	if (ranker && label.ranker !== ranker) flow.setGraph({
		...label,
		ranker
	});
	import_dagre.default.layout(flow);
};
var createEdge = (edgeOptions) => {
	return {
		label: "subscribed by",
		animated: false,
		markerEnd: {
			type: MarkerType.ArrowClosed,
			width: 40,
			height: 40,
			color: "rgb(var(--ec-page-text-muted))"
		},
		style: {
			strokeWidth: 1.5,
			stroke: "rgb(var(--ec-page-text-muted))",
			strokeDasharray: "5 5"
		},
		...edgeOptions
	};
};
var createNode = (values) => {
	return {
		sourcePosition: Position.Right,
		targetPosition: Position.Left,
		...values
	};
};
var getNodesAndEdgesFromDagre = ({ nodes, edges, defaultFlow }) => {
	const flow = defaultFlow || createDagreGraph({
		ranksep: 300,
		nodesep: 50
	});
	nodes.forEach((node) => {
		flow.setNode(node.id, {
			width: 150,
			height: 100
		});
	});
	edges.forEach((edge) => {
		flow.setEdge(edge.source, edge.target);
	});
	layoutDagreGraph(flow);
	return {
		nodes: calculatedNodes(flow, nodes),
		edges
	};
};
var useChannelVisibility = ({ nodes, edges, setNodes, setEdges, skipProcessing = false }) => {
	const [hideChannels, setHideChannels] = (0, import_react.useState)(false);
	const [initialNodes, setInitialNodes] = (0, import_react.useState)(nodes);
	const [initialEdges, setInitialEdges] = (0, import_react.useState)(edges);
	(0, import_react.useEffect)(() => {
		const storedHideChannels = localStorage.getItem("EventCatalog:hideChannels");
		if (storedHideChannels !== null) setHideChannels(storedHideChannels === "true");
	}, []);
	(0, import_react.useEffect)(() => {
		const hasChannels = nodes.some((node) => node.type === "channels");
		if (!hideChannels || hasChannels) {
			setInitialNodes(nodes);
			setInitialEdges(edges);
		}
	}, [
		nodes,
		edges,
		hideChannels
	]);
	const toggleChannelsVisibility = (0, import_react.useCallback)(() => {
		setHideChannels((prev) => {
			const newValue = !prev;
			localStorage.setItem("EventCatalog:hideChannels", JSON.stringify(newValue));
			return newValue;
		});
	}, []);
	const channels = (0, import_react.useMemo)(() => nodes.filter((node) => node.type === "channels"), [nodes]);
	const updatedNodes = (0, import_react.useMemo)(() => nodes.filter((node) => node.type !== "channels"), [nodes]);
	const updatedEdges = (0, import_react.useMemo)(() => {
		return edges.reduce((acc, edge) => {
			const { source, target, data } = edge;
			const targetIsChannel = channels.some((channel) => channel.id === target);
			const sourceIsChannel = channels.some((channel) => channel.id === source);
			if (!sourceIsChannel && !targetIsChannel) return [...acc, edge];
			if (sourceIsChannel || targetIsChannel) {
				const rootSourceAndTarget = data?.rootSourceAndTarget;
				if (!rootSourceAndTarget) return [...acc, edge];
				const edgeLabel = rootSourceAndTarget?.target?.collection === "services" || rootSourceAndTarget?.target?.collection === "agents" ? getEdgeLabelForMessageAsSource(rootSourceAndTarget.source) : getEdgeLabelForServiceAsTarget(rootSourceAndTarget.target);
				const newEdgeId = `${rootSourceAndTarget.source.id}-${rootSourceAndTarget.target.id}`;
				return [...acc, createEdge({
					id: newEdgeId,
					source: rootSourceAndTarget.source.id,
					target: rootSourceAndTarget.target.id,
					label: edgeLabel
				})];
			}
			return acc;
		}, []).filter((edge, index, self) => index === self.findIndex((t) => t.id === edge.id));
	}, [edges, channels]);
	(0, import_react.useEffect)(() => {
		if (skipProcessing) return;
		if (hideChannels) {
			const { nodes: newNodes, edges: newEdges } = getNodesAndEdgesFromDagre({
				nodes: updatedNodes,
				edges: updatedEdges
			});
			setNodes(newNodes);
			setEdges(newEdges);
		} else {
			setNodes(initialNodes);
			setEdges(initialEdges);
		}
	}, [hideChannels, skipProcessing]);
	return {
		hideChannels,
		toggleChannelsVisibility
	};
};
var VisualizerDropdownContent = (0, import_react.memo)(({ isMermaidView, setIsMermaidView, animateMessages, toggleAnimateMessages, hideAnimateMessages = false, hideChannels, toggleChannelsVisibility, hasChannels, showMinimap, setShowMinimap, handleFitView, searchRef, isChatEnabled, openChat, handleCopyArchitectureCode, handleExportVisual, setIsShareModalOpen, toggleFullScreen, openStudioModal, isDevMode = false, onSaveLayout, onResetLayout, notesCount = 0, onOpenNotes }) => {
	const [layoutStatus, setLayoutStatus] = (0, import_react.useState)("idle");
	const portalContainer = usePortalContainer();
	const handleSaveLayout = async () => {
		if (!onSaveLayout) return;
		setLayoutStatus("saving");
		await onSaveLayout();
		setLayoutStatus("idle");
	};
	const handleResetLayout = async () => {
		if (!onResetLayout) return;
		if (!window.confirm("Reset layout to auto-positioning? This will delete your saved layout.")) return;
		setLayoutStatus("resetting");
		if (await onResetLayout()) window.location.reload();
		else setLayoutStatus("idle");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sub2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
			className: "flex items-center px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer transition-colors gap-2 outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 font-normal",
					children: "Canvas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-3 h-3 text-[rgb(var(--ec-page-text-muted))]",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M9 5l7 7-7 7"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
			container: portalContainer,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubContent2, {
				className: "min-w-[200px] bg-[rgb(var(--ec-card-bg))] rounded-lg shadow-xl border border-[rgb(var(--ec-page-border))] py-1.5 z-[60]",
				sideOffset: 8,
				alignOffset: -8,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
						checked: isMermaidView,
						onCheckedChange: setIsMermaidView,
						className: "flex items-center px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer transition-colors gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-normal",
								children: "Render as mermaid"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-7 h-4 rounded-full transition-all duration-200 flex-shrink-0 relative ${isMermaidView ? "bg-[rgb(var(--ec-accent))]" : "bg-[rgb(var(--ec-page-border))]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-all duration-200 ${isMermaidView ? "left-3.5" : "left-0.5"}` })
							})
						]
					}),
					!hideAnimateMessages && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: "my-1 h-px bg-[rgb(var(--ec-page-border))]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
						checked: animateMessages,
						onCheckedChange: toggleAnimateMessages,
						className: "flex items-center px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer transition-colors gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-normal",
								children: "Simulate Messages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-7 h-4 rounded-full transition-all duration-200 flex-shrink-0 relative ${animateMessages ? "bg-[rgb(var(--ec-accent))]" : "bg-[rgb(var(--ec-page-border))]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-all duration-200 ${animateMessages ? "left-3.5" : "left-0.5"}` })
							})
						]
					})] }),
					hasChannels && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
						checked: hideChannels,
						onCheckedChange: toggleChannelsVisibility,
						className: "flex items-center px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer transition-colors gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-normal",
								children: "Hide channels"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-7 h-4 rounded-full transition-all duration-200 flex-shrink-0 relative ${hideChannels ? "bg-[rgb(var(--ec-accent))]" : "bg-[rgb(var(--ec-page-border))]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-all duration-200 ${hideChannels ? "left-3.5" : "left-0.5"}` })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
						checked: showMinimap,
						onCheckedChange: setShowMinimap,
						className: "flex items-center px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer transition-colors gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-normal",
								children: "Show minimap"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-7 h-4 rounded-full transition-all duration-200 flex-shrink-0 relative ${showMinimap ? "bg-[rgb(var(--ec-accent))]" : "bg-[rgb(var(--ec-page-border))]"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0.5 w-3 h-3 rounded-full bg-white shadow-sm transition-all duration-200 ${showMinimap ? "left-3.5" : "left-0.5"}` })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: "my-1 h-px bg-[rgb(var(--ec-page-border))]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
						onClick: handleFitView,
						className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 font-normal",
							children: "Fit to view"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
						onClick: () => {
							searchRef.current?.hideSuggestions();
							setTimeout(() => {
								document.querySelector("input[placeholder=\"Search nodes...\"]")?.focus();
							}, 50);
						},
						className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 font-normal",
							children: "Find on canvas"
						})]
					})
				]
			})
		})] }),
		notesCount > 0 && onOpenNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: onOpenNotes,
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex-1 font-normal",
				children: [
					"View notes (",
					notesCount,
					")"
				]
			})]
		}),
		isDevMode && onSaveLayout && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sub2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
			className: "flex items-center px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer transition-colors gap-2 outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 font-normal",
					children: "Layout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-amber-600 font-medium",
					children: "DEV"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "w-3 h-3 text-[rgb(var(--ec-page-text-muted))]",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M9 5l7 7-7 7"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
			container: portalContainer,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubContent2, {
				className: "min-w-[180px] bg-[rgb(var(--ec-card-bg))] rounded-lg shadow-xl border border-[rgb(var(--ec-page-border))] py-1.5 z-[60]",
				sideOffset: 8,
				alignOffset: -8,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
					onClick: handleSaveLayout,
					disabled: layoutStatus !== "idle",
					className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
					children: [layoutStatus === "saving" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 font-normal",
						children: layoutStatus === "saving" ? "Saving..." : "Save Layout"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
					onClick: handleResetLayout,
					disabled: layoutStatus !== "idle",
					className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
					children: [layoutStatus === "resetting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 font-normal",
						children: layoutStatus === "resetting" ? "Resetting..." : "Reset Layout"
					})]
				})]
			})
		})] }),
		isChatEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: "my-1 h-px bg-[rgb(var(--ec-page-border))]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: openChat,
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 font-normal",
				children: "Ask a question"
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: "my-1 h-px bg-[rgb(var(--ec-page-border))]" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: handleCopyArchitectureCode,
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 font-normal",
				children: "Copy as mermaid"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: handleExportVisual,
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 font-normal",
				children: "Export image"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: () => setIsShareModalOpen(true),
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 font-normal",
				children: "Share Link"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: "my-1 h-px bg-[rgb(var(--ec-page-border))]" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: toggleFullScreen,
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 font-normal",
				children: "Start Presentation"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, { className: "my-1 h-px bg-[rgb(var(--ec-page-border))]" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onClick: openStudioModal,
			className: "px-3 py-2 text-xs text-[rgb(var(--ec-page-text))] hover:bg-[rgb(var(--ec-accent-subtle)/0.3)] cursor-pointer flex items-center gap-2 transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 font-normal",
				children: "Open in EventCatalog Studio"
			})]
		})
	] });
});
VisualizerDropdownContent.displayName = "VisualizerDropdownContent";
var VisualizerDropdownContent_default = VisualizerDropdownContent;
var NodeContextMenu_default = (0, import_react.memo)(function NodeContextMenu({ items, children }) {
	const portalContainer = usePortalContainer();
	if (!items || items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, {
		container: portalContainer,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
			className: "min-w-[220px] bg-white rounded-md p-1 shadow-md border border-gray-200 z-50",
			onClick: (e) => e.stopPropagation(),
			children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [item.separator && index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2$1, { className: "h-[1px] bg-gray-200 m-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
				asChild: true,
				className: "text-sm px-2 py-1.5 outline-none cursor-pointer hover:bg-orange-100 rounded-sm flex items-center text-gray-900 hover:text-gray-900 visited:text-gray-900 no-underline hover:no-underline visited:no-underline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					...item.download ? { download: item.download } : {},
					...item.external ? {
						target: "_blank",
						rel: "noopener noreferrer"
					} : {},
					children: item.label
				})
			})] }, index))
		})
	})] });
});
var MIN_IMAGE_WIDTH = 1024;
var MIN_IMAGE_HEIGHT = 768;
var EXPORT_PADDING = 40;
function getExportImageDimensions(nodesBounds) {
	const paddedBounds = {
		x: nodesBounds.x - EXPORT_PADDING,
		y: nodesBounds.y - EXPORT_PADDING,
		width: nodesBounds.width + EXPORT_PADDING * 2,
		height: nodesBounds.height + EXPORT_PADDING * 2
	};
	const width = Math.max(MIN_IMAGE_WIDTH, Math.ceil(paddedBounds.width));
	const height = Math.max(MIN_IMAGE_HEIGHT, Math.ceil(paddedBounds.height));
	return {
		width,
		height,
		viewport: getViewportForBounds(paddedBounds, width, height, .5, 2, 0)
	};
}
function extractEcVarNames(cssText) {
	return Array.from(new Set(cssText.match(/--ec-[a-z0-9-]+/g) ?? []));
}
function buildExportCss(themeVars) {
	return [`* { ${Object.entries(themeVars).map(([name, value]) => `${name}: ${value};`).join(" ")} }`, `.react-flow__edge-path { stroke: var(--ec-edge-stroke, #6b7280); stroke-width: 1.5; fill: none; }`].join("\n");
}
function collectThemeCssVars(scope) {
	const names = /* @__PURE__ */ new Set();
	for (const sheet of Array.from(document.styleSheets)) {
		let rules;
		try {
			rules = sheet.cssRules;
		} catch {
			continue;
		}
		for (const rule of Array.from(rules)) for (const name of extractEcVarNames(rule.cssText)) names.add(name);
	}
	const computed = window.getComputedStyle(scope);
	const vars = {};
	for (const name of names) {
		const value = computed.getPropertyValue(name).trim();
		if (value) vars[name] = value;
	}
	return vars;
}
var SVG_EXPORT_STYLE_PROPERTIES = [
	"fill",
	"fill-opacity",
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-linecap",
	"stroke-linejoin",
	"opacity",
	"font-family",
	"font-size",
	"font-weight",
	"letter-spacing",
	"text-anchor",
	"dominant-baseline"
];
function inlineSvgComputedStyles(viewport) {
	const restores = [];
	viewport.querySelectorAll("svg, svg *").forEach((element) => {
		if (!(element instanceof SVGElement)) return;
		const computed = window.getComputedStyle(element);
		const originalStyle = element.getAttribute("style");
		for (const property of SVG_EXPORT_STYLE_PROPERTIES) {
			const value = computed.getPropertyValue(property);
			if (value) element.style.setProperty(property, value);
		}
		restores.push(() => {
			if (originalStyle === null) element.removeAttribute("style");
			else element.setAttribute("style", originalStyle);
		});
	});
	return () => restores.forEach((restore) => restore());
}
function injectExportStyles(viewport) {
	const styleElement = document.createElement("style");
	styleElement.textContent = buildExportCss(collectThemeCssVars(viewport));
	viewport.appendChild(styleElement);
	const restoreSvgStyles = inlineSvgComputedStyles(viewport);
	return () => {
		restoreSvgStyles();
		styleElement.remove();
	};
}
var GROUP_HEADER_HEIGHT = 44;
var GROUP_CONTENT_PADDING_TOP = 50;
var GROUP_CONTENT_PADDING_BOTTOM = 30;
var GROUP_PADDING_X = 60;
var EMPTY_GROUP_WIDTH = 200;
var EMPTY_GROUP_HEIGHT = 80;
var defaultSizes = {
	service: {
		w: 300,
		h: 140
	},
	agent: {
		w: 300,
		h: 140
	},
	"agent-tool": {
		w: 260,
		h: 120
	},
	agentTool: {
		w: 260,
		h: 120
	},
	event: {
		w: 240,
		h: 140
	},
	command: {
		w: 300,
		h: 120
	},
	query: {
		w: 300,
		h: 120
	},
	channel: {
		w: 300,
		h: 140
	},
	container: {
		w: 300,
		h: 140
	},
	"data-product": {
		w: 300,
		h: 140
	},
	data: {
		w: 320,
		h: 120
	},
	domain: {
		w: 300,
		h: 120
	},
	flow: {
		w: 300,
		h: 140
	},
	actor: {
		w: 240,
		h: 100
	},
	"external-system": {
		w: 300,
		h: 100
	},
	step: {
		w: 280,
		h: 100
	},
	"message-group": {
		w: 350,
		h: 200
	}
};
var fallbackSize = {
	w: 280,
	h: 100
};
function getNodeSize(type, nodeWidth, nodeHeight) {
	const size = defaultSizes[type] || fallbackSize;
	return {
		w: nodeWidth ?? size.w,
		h: nodeHeight ?? size.h
	};
}
function buildNodeData(node, style) {
	const notes = node.metadata.notes || [];
	const owners = node.metadata.owners || [];
	const base = {
		name: node.label,
		version: node.metadata.version || "",
		summary: node.metadata.summary || "",
		deprecated: node.metadata.deprecated === true,
		draft: node.metadata.draft === true,
		...notes.length > 0 ? { notes } : {},
		...owners.length > 0 ? { owners } : {}
	};
	switch (node.type) {
		case "service": return {
			mode: "full",
			style,
			service: base
		};
		case "agent": return {
			mode: "full",
			style,
			agent: {
				...base,
				...node.metadata.model ? { model: node.metadata.model } : {},
				...Array.isArray(node.metadata.tools) ? { tools: node.metadata.tools } : {}
			}
		};
		case "agent-tool":
		case "agentTool": return {
			mode: "full",
			style,
			agentTool: {
				id: node.id,
				name: node.label,
				type: node.metadata.type || "",
				icon: node.metadata.icon || "",
				url: node.metadata.url || "",
				description: node.metadata.description || ""
			}
		};
		case "event":
		case "command":
		case "query": return {
			mode: "full",
			style,
			message: {
				...base,
				schema: node.metadata.schema || "",
				...node.metadata.method ? { method: node.metadata.method } : {},
				...node.metadata.path ? { path: node.metadata.path } : {},
				...Array.isArray(node.metadata.statusCodes) && node.metadata.statusCodes.length > 0 ? { statusCodes: node.metadata.statusCodes } : {}
			}
		};
		case "channel": return {
			mode: "full",
			style,
			channel: {
				...base,
				protocols: node.metadata.protocols || [],
				address: node.metadata.address || "",
				...node.metadata.deliveryGuarantee ? { deliveryGuarantee: node.metadata.deliveryGuarantee } : {}
			}
		};
		case "container": return {
			mode: "full",
			style,
			data: {
				...base,
				type: node.metadata.containerType || "Database"
			}
		};
		case "data-product": return {
			mode: "full",
			style,
			dataProduct: base
		};
		case "data": return {
			mode: "full",
			style,
			data: {
				...base,
				type: node.metadata.containerType || "Database"
			}
		};
		case "domain": return {
			mode: "full",
			style,
			domain: { data: {
				...base,
				id: node.id
			} }
		};
		case "flow": return {
			mode: "full",
			style,
			flow: { data: {
				...base,
				id: node.id
			} }
		};
		case "actor": return {
			...base,
			label: node.label,
			mode: "full",
			style,
			id: node.id
		};
		case "external-system": return {
			mode: "full",
			style,
			externalSystem: {
				label: node.label,
				...base,
				id: node.id
			}
		};
		case "step": return {
			mode: "full",
			style,
			step: {
				...base,
				title: node.label,
				id: node.id
			}
		};
		default: return {
			...base,
			style,
			resourceType: node.type
		};
	}
}
function layoutGraph(nodes, edges, options = {}, style) {
	if (nodes.length === 0) return {
		nodes: [],
		edges: []
	};
	const { rankdir = "LR", nodesep = 80, ranksep = 140, edgesep = 40 } = options;
	function nodeSize(type) {
		return getNodeSize(type);
	}
	const domainNodeIds = new Set(nodes.filter((n) => n.type === "domain").map((n) => n.id));
	const parentNodeIds = new Set(nodes.filter((n) => n.parentId).map((n) => n.parentId));
	const allGroupIds = /* @__PURE__ */ new Set([...domainNodeIds, ...parentNodeIds]);
	const childNodeIds = /* @__PURE__ */ new Set();
	for (const node of nodes) if (node.parentId && allGroupIds.has(node.parentId)) childNodeIds.add(node.id);
	if (allGroupIds.size === 0) return flatLayout(nodes, edges, {
		rankdir,
		nodesep,
		ranksep,
		edgesep
	}, nodeSize, style);
	const groupChildren = /* @__PURE__ */ new Map();
	for (const id of allGroupIds) groupChildren.set(id, []);
	for (const node of nodes) if (node.parentId && node.parentId !== node.id && allGroupIds.has(node.parentId)) groupChildren.get(node.parentId).push(node);
	const nodeById = new Map(nodes.map((n) => [n.id, n]));
	const groupSizes = /* @__PURE__ */ new Map();
	const groupInternalLayouts = /* @__PURE__ */ new Map();
	const computing = /* @__PURE__ */ new Set();
	function computeGroupSize(groupId) {
		if (groupSizes.has(groupId)) return groupSizes.get(groupId);
		if (computing.has(groupId)) {
			const size = {
				width: EMPTY_GROUP_WIDTH,
				height: EMPTY_GROUP_HEIGHT
			};
			groupSizes.set(groupId, size);
			return size;
		}
		computing.add(groupId);
		try {
			const children = groupChildren.get(groupId) || [];
			if (children.length === 0) {
				const size = {
					width: EMPTY_GROUP_WIDTH,
					height: EMPTY_GROUP_HEIGHT
				};
				groupSizes.set(groupId, size);
				groupInternalLayouts.set(groupId, {
					childPositions: /* @__PURE__ */ new Map(),
					width: size.width,
					height: size.height
				});
				return size;
			}
			for (const child of children) if (allGroupIds.has(child.id)) computeGroupSize(child.id);
			const ig = new import_dagre.default.graphlib.Graph();
			ig.setDefaultEdgeLabel(() => ({}));
			ig.setGraph({
				rankdir,
				nodesep: Math.max(nodesep, 80),
				ranksep: Math.max(ranksep, 100),
				edgesep
			});
			for (const child of children) if (allGroupIds.has(child.id)) {
				const childSize = groupSizes.get(child.id);
				ig.setNode(child.id, {
					width: childSize.width,
					height: childSize.height
				});
			} else {
				const s = nodeSize(child.type);
				ig.setNode(child.id, {
					width: s.w,
					height: s.h
				});
			}
			const childIdSet = new Set(children.map((c) => c.id));
			for (const edge of edges) if (childIdSet.has(edge.source) && childIdSet.has(edge.target)) ig.setEdge(edge.source, edge.target);
			import_dagre.default.layout(ig);
			const childPositions = /* @__PURE__ */ new Map();
			let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
			for (const child of children) {
				const pos = ig.node(child.id);
				if (!pos) continue;
				const left = pos.x - pos.width / 2;
				const top = pos.y - pos.height / 2;
				const right = pos.x + pos.width / 2;
				const bottom = pos.y + pos.height / 2;
				childPositions.set(child.id, {
					x: left,
					y: top,
					w: pos.width,
					h: pos.height
				});
				minX = Math.min(minX, left);
				minY = Math.min(minY, top);
				maxX = Math.max(maxX, right);
				maxY = Math.max(maxY, bottom);
			}
			const contentH = maxY - minY;
			const totalW = maxX - minX + GROUP_PADDING_X * 2;
			const totalH = GROUP_HEADER_HEIGHT + GROUP_CONTENT_PADDING_TOP + contentH + GROUP_CONTENT_PADDING_BOTTOM;
			const contentTop = GROUP_HEADER_HEIGHT + GROUP_CONTENT_PADDING_TOP;
			for (const [id, pos] of childPositions) childPositions.set(id, {
				x: pos.x - minX + GROUP_PADDING_X,
				y: pos.y - minY + contentTop,
				w: pos.w,
				h: pos.h
			});
			groupSizes.set(groupId, {
				width: totalW,
				height: totalH
			});
			groupInternalLayouts.set(groupId, {
				childPositions,
				width: totalW,
				height: totalH
			});
			return {
				width: totalW,
				height: totalH
			};
		} finally {
			computing.delete(groupId);
		}
	}
	for (const groupId of allGroupIds) computeGroupSize(groupId);
	const topLevelGroupIds = /* @__PURE__ */ new Set();
	for (const groupId of allGroupIds) {
		const node = nodeById.get(groupId);
		if (!node?.parentId || !allGroupIds.has(node.parentId)) topLevelGroupIds.add(groupId);
	}
	const outerG = new import_dagre.default.graphlib.Graph();
	outerG.setDefaultEdgeLabel(() => ({}));
	outerG.setGraph({
		rankdir,
		nodesep,
		ranksep,
		edgesep
	});
	for (const groupId of topLevelGroupIds) {
		const size = groupSizes.get(groupId);
		outerG.setNode(groupId, {
			width: size.width,
			height: size.height
		});
	}
	for (const node of nodes) {
		if (allGroupIds.has(node.id) || childNodeIds.has(node.id)) continue;
		const s = nodeSize(node.type);
		outerG.setNode(node.id, {
			width: s.w,
			height: s.h
		});
	}
	const outerEdgeSet = /* @__PURE__ */ new Set();
	for (const edge of edges) {
		const srcIsChild = childNodeIds.has(edge.source);
		const tgtIsChild = childNodeIds.has(edge.target);
		const srcIsGroup = allGroupIds.has(edge.source);
		const tgtIsGroup = allGroupIds.has(edge.target);
		if (srcIsChild && tgtIsChild) continue;
		if (srcIsGroup || tgtIsGroup) continue;
		let src = edge.source;
		let tgt = edge.target;
		if (srcIsChild) {
			let parent = nodeById.get(edge.source)?.parentId;
			while (parent && !topLevelGroupIds.has(parent)) parent = nodeById.get(parent)?.parentId;
			if (parent) src = parent;
		}
		if (tgtIsChild) {
			let parent = nodeById.get(edge.target)?.parentId;
			while (parent && !topLevelGroupIds.has(parent)) parent = nodeById.get(parent)?.parentId;
			if (parent) tgt = parent;
		}
		const key = `${src}->${tgt}`;
		if (!outerEdgeSet.has(key)) {
			outerEdgeSet.add(key);
			outerG.setEdge(src, tgt);
		}
	}
	import_dagre.default.layout(outerG);
	const outerPositions = /* @__PURE__ */ new Map();
	outerG.nodes().forEach((id) => {
		const pos = outerG.node(id);
		if (pos) outerPositions.set(id, {
			x: pos.x,
			y: pos.y,
			width: pos.width,
			height: pos.height
		});
	});
	const layoutNodes = [];
	function emitGroup(groupId, parentGroupId) {
		const node = nodeById.get(groupId);
		if (!node) return;
		const layout = groupInternalLayouts.get(groupId);
		if (!layout) return;
		const base = {
			name: node.label,
			version: node.metadata.version || "",
			summary: node.metadata.summary || ""
		};
		if (parentGroupId) {
			const childPos = groupInternalLayouts.get(parentGroupId)?.childPositions.get(groupId);
			if (!childPos) return;
			layoutNodes.push({
				id: groupId,
				type: "group",
				position: {
					x: childPos.x,
					y: childPos.y
				},
				parentId: parentGroupId,
				extent: "parent",
				data: {
					mode: "full",
					domain: base
				},
				style: {
					width: layout.width,
					height: layout.height,
					background: "transparent",
					border: "none",
					padding: 0
				}
			});
		} else {
			const outerPos = outerPositions.get(groupId);
			if (!outerPos) return;
			layoutNodes.push({
				id: groupId,
				type: "group",
				position: {
					x: outerPos.x - layout.width / 2,
					y: outerPos.y - layout.height / 2
				},
				data: {
					mode: "full",
					domain: base
				},
				style: {
					width: layout.width,
					height: layout.height,
					background: "transparent",
					border: "none",
					padding: 0
				}
			});
		}
		const children = groupChildren.get(groupId) || [];
		for (const child of children) if (allGroupIds.has(child.id)) emitGroup(child.id, groupId);
		for (const child of children) {
			if (allGroupIds.has(child.id)) continue;
			const childPos = layout.childPositions.get(child.id);
			if (!childPos) continue;
			layoutNodes.push({
				id: child.id,
				type: child.type,
				position: {
					x: childPos.x,
					y: childPos.y
				},
				parentId: groupId,
				extent: "parent",
				data: buildNodeData(child, style)
			});
		}
	}
	for (const groupId of topLevelGroupIds) emitGroup(groupId);
	for (const node of nodes) {
		if (allGroupIds.has(node.id) || childNodeIds.has(node.id)) continue;
		const pos = outerPositions.get(node.id);
		if (!pos) continue;
		layoutNodes.push({
			id: node.id,
			type: node.type,
			position: {
				x: pos.x - pos.width / 2,
				y: pos.y - pos.height / 2
			},
			data: buildNodeData(node, style)
		});
	}
	return {
		nodes: layoutNodes,
		edges: edges.filter((edge) => !allGroupIds.has(edge.source) && !allGroupIds.has(edge.target)).map((edge) => {
			const collection = getMessageCollection(edge, nodeById);
			const isFlowStep = edge.type === "flow-step";
			const isCalls = edge.type === "calls";
			const isBidirectional = edge.type === "reads-writes";
			const arrowMarker = {
				type: MarkerType.ArrowClosed,
				width: 20,
				height: 20,
				color: "rgb(var(--ec-page-text-muted))"
			};
			return {
				id: edge.id,
				source: edge.source,
				target: edge.target,
				label: isBidirectional ? "reads/writes" : isFlowStep ? edge.label || void 0 : edge.label || edge.type,
				type: isFlowStep ? "flow-edge" : isCalls ? "step" : "animated",
				markerEnd: arrowMarker,
				...isBidirectional ? { markerStart: arrowMarker } : {},
				data: {
					edgeType: edge.type,
					message: { collection }
				}
			};
		})
	};
}
var MESSAGE_TYPES = /* @__PURE__ */ new Set([
	"event",
	"command",
	"query"
]);
function getMessageCollection(edge, nodeById) {
	const targetNode = nodeById.get(edge.target);
	if (targetNode && MESSAGE_TYPES.has(targetNode.type)) return `${targetNode.type}s`;
	const sourceNode = nodeById.get(edge.source);
	if (sourceNode && MESSAGE_TYPES.has(sourceNode.type)) return `${sourceNode.type}s`;
	return targetNode ? `${targetNode.type}s` : void 0;
}
function flatLayout(nodes, edges, graphOpts, nodeSize, style) {
	const g = new import_dagre.default.graphlib.Graph();
	g.setDefaultEdgeLabel(() => ({}));
	g.setGraph(graphOpts);
	nodes.forEach((node) => {
		const s = nodeSize(node.type);
		g.setNode(node.id, {
			width: s.w,
			height: s.h
		});
	});
	edges.forEach((edge) => {
		g.setEdge(edge.source, edge.target);
	});
	import_dagre.default.layout(g);
	const layoutNodes = nodes.map((node) => {
		const pos = g.node(node.id);
		return {
			id: node.id,
			type: node.type,
			position: {
				x: pos.x - pos.width / 2,
				y: pos.y - pos.height / 2
			},
			data: buildNodeData(node, style)
		};
	});
	const nodeById = new Map(nodes.map((n) => [n.id, n]));
	return {
		nodes: layoutNodes,
		edges: edges.map((edge) => {
			const collection = getMessageCollection(edge, nodeById);
			const isFlowStep = edge.type === "flow-step";
			const isCalls = edge.type === "calls";
			const isBidirectional = edge.type === "reads-writes";
			const arrowMarker = {
				type: MarkerType.ArrowClosed,
				width: 20,
				height: 20,
				color: "rgb(var(--ec-page-text-muted))"
			};
			return {
				id: edge.id,
				source: edge.source,
				target: edge.target,
				label: isBidirectional ? "reads/writes" : isFlowStep ? edge.label || void 0 : edge.label || edge.type,
				type: isFlowStep ? "flow-edge" : isCalls ? "step" : "animated",
				markerEnd: arrowMarker,
				...isBidirectional ? { markerStart: arrowMarker } : {},
				data: {
					edgeType: edge.type,
					message: { collection }
				}
			};
		})
	};
}
var toNumber = (value) => {
	if (typeof value === "number") return value;
	if (typeof value === "string") {
		const parsed = Number.parseFloat(value);
		return Number.isFinite(parsed) ? parsed : void 0;
	}
};
var getPackableNodeSize = (node) => ({
	width: toNumber(node.measured?.width) ?? toNumber(node.width) ?? toNumber(node.style?.width) ?? 260,
	height: toNumber(node.measured?.height) ?? toNumber(node.height) ?? toNumber(node.style?.height) ?? 140
});
var rectsIntersect = (a, b, gap = 0) => a.x < b.x + b.width + gap && a.x + a.width + gap > b.x && a.y < b.y + b.height + gap && a.y + a.height + gap > b.y;
var toRect = (node, y = node.position.y) => {
	const size = getPackableNodeSize(node);
	return {
		x: node.position.x,
		y,
		width: size.width,
		height: size.height
	};
};
var packNodesAroundBounds = ({ nodes, movableNodeIds, protectedBounds, groupNodeId, gap = 40 }) => {
	const movableNodes = nodes.filter((node) => movableNodeIds.has(node.id)).sort((a, b) => a.position.y - b.position.y);
	const movableIds = new Set(movableNodes.map((node) => node.id));
	const occupiedRects = [protectedBounds, ...nodes.filter((node) => !node.parentId && node.id !== groupNodeId && !movableIds.has(node.id)).map((node) => toRect(node))];
	const plannedPositions = /* @__PURE__ */ new Map();
	const groupCenterY = protectedBounds.y + protectedBounds.height / 2;
	const placeNode = (node) => {
		const size = getPackableNodeSize(node);
		const moveDirection = node.position.y + size.height / 2 >= groupCenterY ? 1 : -1;
		let y = moveDirection > 0 ? Math.max(node.position.y, protectedBounds.y + protectedBounds.height + gap) : Math.min(node.position.y, protectedBounds.y - size.height - gap);
		let attempts = 0;
		while (attempts < occupiedRects.length + 8) {
			const rect = {
				x: node.position.x,
				y,
				width: size.width,
				height: size.height
			};
			const collision = occupiedRects.find((occupied) => rectsIntersect(rect, occupied, gap));
			if (!collision) {
				occupiedRects.push(rect);
				plannedPositions.set(node.id, {
					...node.position,
					y
				});
				return;
			}
			y = moveDirection > 0 ? collision.y + collision.height + gap : collision.y - size.height - gap;
			attempts += 1;
		}
		occupiedRects.push({
			x: node.position.x,
			y,
			width: size.width,
			height: size.height
		});
		plannedPositions.set(node.id, {
			...node.position,
			y
		});
	};
	const below = movableNodes.filter((node) => {
		const size = getPackableNodeSize(node);
		return node.position.y + size.height / 2 >= groupCenterY;
	});
	const belowIds = new Set(below.map((node) => node.id));
	const above = movableNodes.filter((node) => !belowIds.has(node.id)).reverse();
	below.forEach(placeNode);
	above.forEach(placeNode);
	return plannedPositions;
};
var getExpandedMessageGroupNode = (nodes, groupNodeId) => nodes.find((node) => node.id === groupNodeId && node.type === "messageGroupExpanded");
var buildMessageGroupExpansionNodes = ({ currentNodes, groupNodeId, expandedContainerNode, childNodes, downstreamNodes, getDownstreamPosition }) => {
	const withoutExistingGroup = currentNodes.filter((node) => node.id !== groupNodeId && node.parentId !== groupNodeId);
	const existingIds = new Set(withoutExistingGroup.map((node) => node.id));
	const newDownstream = downstreamNodes.filter((node) => !existingIds.has(node.id)).map((node, index) => ({
		...node,
		position: getDownstreamPosition(node, index)
	}));
	return [
		...withoutExistingGroup,
		expandedContainerNode,
		...childNodes,
		...newDownstream
	];
};
var NODE_TYPE_META = {
	service: {
		icon: Server,
		color: "#ec4899",
		label: "Service"
	},
	services: {
		icon: Server,
		color: "#ec4899",
		label: "Service"
	},
	agent: {
		icon: Bot,
		color: "#0ea5e9",
		label: "Agent"
	},
	agents: {
		icon: Bot,
		color: "#0ea5e9",
		label: "Agent"
	},
	event: {
		icon: Zap,
		color: "#f97316",
		label: "Event"
	},
	events: {
		icon: Zap,
		color: "#f97316",
		label: "Event"
	},
	command: {
		icon: MessageSquare,
		color: "#3b82f6",
		label: "Command"
	},
	commands: {
		icon: MessageSquare,
		color: "#3b82f6",
		label: "Command"
	},
	query: {
		icon: Search,
		color: "#22c55e",
		label: "Query"
	},
	queries: {
		icon: Search,
		color: "#22c55e",
		label: "Query"
	},
	channel: {
		icon: ArrowRightLeft,
		color: "#6b7280",
		label: "Channel"
	},
	channels: {
		icon: ArrowRightLeft,
		color: "#6b7280",
		label: "Channel"
	},
	data: {
		icon: Database,
		color: "#3b82f6",
		label: "Data"
	},
	"data-products": {
		icon: Package,
		color: "#6366f1",
		label: "Data Product"
	},
	externalSystem: {
		icon: Globe,
		color: "#ec4899",
		label: "External System"
	},
	actor: {
		icon: User,
		color: "#eab308",
		label: "Actor"
	},
	view: {
		icon: Monitor,
		color: "#8b5cf6",
		label: "View"
	},
	domain: {
		icon: Boxes,
		color: "#14b8a6",
		label: "Domain"
	},
	domains: {
		icon: Boxes,
		color: "#14b8a6",
		label: "Domain"
	}
};
function getNodeMeta(nodeType) {
	if (!nodeType) return null;
	return NODE_TYPE_META[nodeType] || null;
}
function getNotesFromNode(node) {
	const d = node.data;
	const containers = [
		d?.service,
		d?.message,
		d?.channel,
		d?.data,
		d?.dataProduct,
		d?.externalSystem,
		d?.actor
	];
	for (const container of containers) if (container?.notes && container.notes.length > 0) return {
		name: container.name || node.id,
		notes: container.notes,
		nodeType: node.type || "unknown"
	};
	if (d?.notes && d.notes.length > 0) return {
		name: d.name || node.id,
		notes: d.notes,
		nodeType: node.type || "unknown"
	};
	return null;
}
var AMBER2 = {
	50: "#fffbeb",
	100: "#fef3c7",
	200: "#fde68a",
	400: "#fbbf24",
	500: "#f59e0b",
	600: "#d97706",
	700: "#b45309",
	800: "#92400e"
};
var PRIORITY2 = {
	high: {
		bg: "#fef2f2",
		fg: "#b91c1c",
		border: "#fecaca",
		label: "High",
		accent: "#ef4444"
	},
	critical: {
		bg: "#fef2f2",
		fg: "#991b1b",
		border: "#fecaca",
		label: "Critical",
		accent: "#dc2626"
	},
	low: {
		bg: "#f0fdf4",
		fg: "#15803d",
		border: "#bbf7d0",
		label: "Low",
		accent: "#22c55e"
	}
};
var AVATAR_PALETTES2 = [
	["#7c3aed", "#a78bfa"],
	["#2563eb", "#60a5fa"],
	["#0891b2", "#22d3ee"],
	["#059669", "#34d399"],
	["#d97706", "#fbbf24"],
	["#dc2626", "#f87171"],
	["#db2777", "#f472b6"],
	["#4f46e5", "#818cf8"]
];
function hashStr2(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
	return Math.abs(h);
}
function Avatar2({ name, size = 28 }) {
	const initials = name.split(/\s+/).map((w) => w[0]).join("").toUpperCase().slice(0, 2);
	const [c1, c2] = AVATAR_PALETTES2[hashStr2(name) % AVATAR_PALETTES2.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width: size,
			height: size,
			borderRadius: "50%",
			background: `linear-gradient(135deg, ${c1}, ${c2})`,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: 0
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				fontSize: Math.round(size * .42),
				fontWeight: 700,
				color: "white",
				lineHeight: 1
			},
			children: initials
		})
	});
}
function PriorityBadge({ priority }) {
	const p = PRIORITY2[priority.toLowerCase()];
	if (!p) return null;
	const isUrgent = priority === "high" || priority === "critical";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: {
			display: "inline-flex",
			alignItems: "center",
			gap: 3,
			fontSize: 10,
			fontWeight: 600,
			color: p.fg,
			background: p.bg,
			border: `1px solid ${p.border}`,
			borderRadius: 99,
			padding: "2px 7px",
			textTransform: "uppercase",
			letterSpacing: "0.03em",
			lineHeight: 1.4
		},
		children: [isUrgent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
			style: {
				width: 9,
				height: 9
			},
			strokeWidth: 2.5
		}), p.label]
	});
}
function NoteCard2({ note, index }) {
	const prioStyle = note.priority ? PRIORITY2[note.priority.toLowerCase()] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "white",
			border: "1px solid #e2e8f0",
			borderRadius: 10,
			padding: "14px 16px",
			position: "relative",
			boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
		},
		children: [
			prioStyle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				left: 0,
				top: 10,
				bottom: 10,
				width: 3,
				borderRadius: "0 2px 2px 0",
				background: prioStyle.accent
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: 8,
					marginBottom: 8
				},
				children: [
					note.author ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar2, {
						name: note.author,
						size: 24
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							width: 24,
							height: 24,
							borderRadius: "50%",
							background: "#f1f5f9",
							border: `2px solid ${AMBER2[200]}`,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexShrink: 0
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 10,
								fontWeight: 700,
								color: AMBER2[700]
							},
							children: index + 1
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							flex: 1,
							minWidth: 0
						},
						children: note.author && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 13,
								fontWeight: 600,
								color: "#0f172a",
								lineHeight: 1
							},
							children: note.author
						})
					}),
					note.priority && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, { priority: note.priority })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontSize: 13,
					lineHeight: 1.6,
					color: "#334155",
					margin: 0,
					whiteSpace: "pre-wrap",
					wordBreak: "break-word",
					paddingLeft: prioStyle ? 6 : 0
				},
				children: note.content
			})
		]
	});
}
function AllNotesModal({ noteGroups, isOpen, onClose, nodes }) {
	const { setCenter, getZoom } = useReactFlow();
	const [selectedIdx, setSelectedIdx] = (0, import_react.useState)(0);
	const portalContainer = usePortalContainer();
	const totalNotes = noteGroups.reduce((sum, g) => sum + g.notes.length, 0);
	const selected = noteGroups[selectedIdx] || noteGroups[0];
	const handleNavigate = (0, import_react.useCallback)((nodeId) => {
		const node = nodes.find((n) => n.id === nodeId);
		if (!node) return;
		const zoom = Math.max(getZoom(), 1);
		setCenter(node.position.x + 100, node.position.y + 50, {
			zoom,
			duration: 600
		});
		onClose();
	}, [
		nodes,
		setCenter,
		getZoom,
		onClose
	]);
	if (totalNotes === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: isOpen,
		onOpenChange: (open) => {
			if (!open) {
				onClose();
				setSelectedIdx(0);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
			container: portalContainer,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[99999]",
				style: { isolation: "isolate" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { style: {
					position: "fixed",
					inset: 0,
					background: "rgba(15, 23, 42, 0.55)",
					backdropFilter: "blur(6px)"
				} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					style: {
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "94vw",
						maxWidth: 720,
						height: "78vh",
						maxHeight: 560,
						background: "white",
						borderRadius: 14,
						boxShadow: "0 0 0 1px rgba(0,0,0,0.06), 0 20px 50px rgba(0,0,0,0.2)",
						display: "flex",
						flexDirection: "column",
						overflow: "hidden",
						outline: "none"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "14px 20px",
							borderBottom: "1px solid #e2e8f0",
							display: "flex",
							alignItems: "center",
							gap: 12,
							flexShrink: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									width: 32,
									height: 32,
									borderRadius: 8,
									background: "#f1f5f9",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexShrink: 0
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									style: {
										width: 16,
										height: 16,
										color: "#64748b"
									},
									strokeWidth: 2.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									flex: 1,
									minWidth: 0
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									style: {
										fontSize: 15,
										fontWeight: 700,
										color: "#0f172a",
										margin: 0,
										lineHeight: 1.25
									},
									children: "Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
									style: {
										fontSize: 12,
										color: "#64748b",
										margin: 0,
										marginTop: 1
									},
									children: [
										totalNotes,
										" note",
										totalNotes !== 1 ? "s" : "",
										" across",
										" ",
										noteGroups.length,
										" resource",
										noteGroups.length !== 1 ? "s" : ""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									style: {
										width: 30,
										height: 30,
										borderRadius: 8,
										border: "none",
										background: "rgba(0,0,0,0.04)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										cursor: "pointer",
										color: "#94a3b8",
										flexShrink: 0
									},
									"aria-label": "Close",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { style: {
										width: 15,
										height: 15
									} })
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							flex: 1,
							overflow: "hidden"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								width: 240,
								flexShrink: 0,
								borderRight: "1px solid #e2e8f0",
								overflowY: "auto",
								background: "#f8fafc"
							},
							children: noteGroups.map((group, i) => {
								const isActive = i === selectedIdx;
								const meta = getNodeMeta(group.nodeType);
								const IconComp = meta?.icon || MessageCircle;
								const iconColor = meta?.color || "#64748b";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelectedIdx(i),
									style: {
										width: "100%",
										padding: "12px 16px",
										background: isActive ? "white" : "transparent",
										border: "none",
										borderBottom: "1px solid #f1f5f9",
										borderRight: isActive ? `2px solid ${iconColor}` : "2px solid transparent",
										cursor: "pointer",
										display: "flex",
										alignItems: "center",
										gap: 10,
										textAlign: "left",
										transition: "background 0.1s"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												width: 28,
												height: 28,
												borderRadius: 7,
												background: isActive ? iconColor : `${iconColor}14`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												flexShrink: 0,
												transition: "background 0.15s"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, {
												style: {
													width: 14,
													height: 14,
													color: isActive ? "white" : iconColor,
													transition: "color 0.15s"
												},
												strokeWidth: 2
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												flex: 1,
												minWidth: 0
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: {
													fontSize: 12,
													fontWeight: isActive ? 600 : 500,
													color: isActive ? "#0f172a" : "#475569",
													lineHeight: 1.3,
													overflow: "hidden",
													textOverflow: "ellipsis",
													whiteSpace: "nowrap"
												},
												children: group.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													fontSize: 10,
													color: "#94a3b8",
													lineHeight: 1.3,
													overflow: "hidden",
													textOverflow: "ellipsis",
													whiteSpace: "nowrap",
													marginTop: 2
												},
												children: [
													meta?.label || group.nodeType,
													" ·",
													" ",
													group.notes.length,
													" note",
													group.notes.length !== 1 ? "s" : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
											style: {
												width: 14,
												height: 14,
												color: isActive ? iconColor : "#cbd5e1",
												flexShrink: 0
											},
											strokeWidth: 2
										})
									]
								}, group.nodeId);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								flex: 1,
								overflowY: "auto",
								display: "flex",
								flexDirection: "column"
							},
							children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									padding: "14px 20px",
									borderBottom: "1px solid #f1f5f9",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									flexShrink: 0,
									background: "#fafbfc"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 10
									},
									children: [(() => {
										const meta = getNodeMeta(selected.nodeType);
										const Icon = meta?.icon || MessageCircle;
										const color = meta?.color || "#64748b";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											style: {
												width: 30,
												height: 30,
												borderRadius: 8,
												background: `${color}14`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												flexShrink: 0
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												style: {
													width: 15,
													height: 15,
													color
												},
												strokeWidth: 2
											})
										});
									})(), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 14,
											fontWeight: 600,
											color: "#0f172a",
											lineHeight: 1.3
										},
										children: selected.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											fontSize: 11,
											color: "#94a3b8",
											marginTop: 2
										},
										children: [
											getNodeMeta(selected.nodeType)?.label || selected.nodeType,
											" ",
											"· ",
											selected.notes.length,
											" note",
											selected.notes.length !== 1 ? "s" : ""
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => handleNavigate(selected.nodeId),
									style: {
										display: "flex",
										alignItems: "center",
										gap: 5,
										padding: "5px 10px",
										borderRadius: 6,
										border: "1px solid #e2e8f0",
										background: "white",
										cursor: "pointer",
										fontSize: 11,
										fontWeight: 500,
										color: "#475569",
										transition: "all 0.12s"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.borderColor = AMBER2[400];
										e.currentTarget.style.color = AMBER2[700];
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.borderColor = "#e2e8f0";
										e.currentTarget.style.color = "#475569";
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Locate, { style: {
										width: 12,
										height: 12
									} }), "Find on canvas"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									flex: 1,
									overflowY: "auto",
									padding: "16px 20px",
									display: "flex",
									flexDirection: "column",
									gap: 10
								},
								children: selected.notes.map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteCard2, {
									note,
									index: i
								}, i))
							})] })
						})]
					})]
				})]
			})
		})
	});
}
var POSITION_CHANGE_THRESHOLD = 1;
var LARGE_GRAPH_NODE_THRESHOLD2 = 30;
var NODE_ORIGIN = [.1, .1];
var INITIAL_FIT_VIEW_OPTIONS = {
	padding: .2,
	duration: 0
};
var MINIMAP_STYLE = {
	backgroundColor: "rgb(var(--ec-page-bg))",
	border: "1px solid rgb(var(--ec-page-border))",
	borderRadius: "8px"
};
var LAYOUT_CHANGE_PANEL_STYLE_WITH_WALKTHROUGH = {
	marginBottom: "20px",
	marginLeft: "420px"
};
var LAYOUT_CHANGE_PANEL_STYLE_DEFAULT = { marginLeft: "60px" };
var LEGEND_PANEL_STYLE_WITH_MINIMAP = { marginRight: "230px" };
var EXPANDED_WRAPPER_TYPES = /* @__PURE__ */ new Set(["flowExpanded", "messageGroupExpanded"]);
var isExpandedWrapper = (type) => type != null && EXPANDED_WRAPPER_TYPES.has(type);
var LEGEND_LABELS = { "context-actor": "Actors" };
var getLegendLabel = (key) => LEGEND_LABELS[key] ?? key;
var LEGEND_ICONS = {
	events: {
		Icon: Zap,
		colorClass: "text-orange-600"
	},
	agent: {
		Icon: Bot,
		colorClass: "text-sky-600"
	},
	agents: {
		Icon: Bot,
		colorClass: "text-sky-600"
	},
	agentTool: {
		Icon: Wrench,
		colorClass: "text-violet-600"
	},
	"agent-tool": {
		Icon: Wrench,
		colorClass: "text-violet-600"
	},
	services: {
		Icon: Server,
		colorClass: "text-pink-600"
	},
	flows: {
		Icon: Workflow,
		colorClass: "text-teal-600"
	},
	commands: {
		Icon: MessageSquare,
		colorClass: "text-blue-600"
	},
	queries: {
		Icon: Search,
		colorClass: "text-green-600"
	},
	channels: {
		Icon: ArrowLeftRight,
		colorClass: "text-gray-600"
	},
	externalSystem: {
		Icon: Globe,
		colorClass: "text-pink-600"
	},
	systems: {
		Icon: Group,
		colorClass: "text-purple-600"
	},
	system: {
		Icon: Group,
		colorClass: "text-purple-600"
	},
	actor: {
		Icon: User,
		colorClass: "text-yellow-500"
	},
	"context-actor": {
		Icon: User,
		colorClass: "text-yellow-500"
	},
	data: {
		Icon: Database,
		colorClass: "text-blue-600"
	},
	"data-products": {
		Icon: Boxes,
		colorClass: "text-indigo-600"
	},
	field: {
		Icon: Box,
		colorClass: "text-cyan-600"
	}
};
var getLegendIcon = (key) => LEGEND_ICONS[key];
var LegendPanel = (0, import_react.memo)(function LegendPanel2({ legend, showMinimap, onLegendClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		position: "bottom-right",
		style: showMinimap ? LEGEND_PANEL_STYLE_WITH_MINIMAP : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-[rgb(var(--ec-card-bg))] border border-[rgb(var(--ec-page-border))] font-light px-4 text-[12px] shadow-md py-1 rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "m-0 p-0 ",
				children: Object.entries(legend).map(([key, { count, colorClass, groupId }]) => {
					const legendIcon = getLegendIcon(key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex space-x-2 items-center text-[10px] cursor-pointer text-[rgb(var(--ec-page-text))] hover:text-[rgb(var(--ec-accent))] hover:underline",
						onClick: () => onLegendClick(key, groupId),
						children: [legendIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(legendIcon.Icon, {
							className: `w-3 h-3 shrink-0 ${legendIcon.colorClass}`,
							strokeWidth: 2,
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2 h-2 block ${colorClass}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block capitalize",
							children: [
								getLegendLabel(key),
								" (",
								count,
								")"
							]
						})]
					}, key);
				})
			})
		})
	});
});
var GROUP_EDGE_STYLE = {
	strokeWidth: 1,
	stroke: "var(--ec-edge-stroke, #6b7280)"
};
var GROUP_EDGE_MARKER = {
	type: MarkerType.ArrowClosed,
	width: 20,
	height: 20
};
var getChildEdgeLabel = (direction, collection) => {
	if (direction === "sends") {
		if (collection === "commands") return "invokes";
		if (collection === "queries") return "requests";
		return "publishes \nevent";
	}
	if (collection === "commands" || collection === "queries") return "accepts";
	return "subscribed by";
};
var canReachService = (msgId, serviceNodeId, expandedEdges) => {
	const adj = /* @__PURE__ */ new Map();
	for (const e of expandedEdges) {
		if (!adj.has(e.source)) adj.set(e.source, []);
		adj.get(e.source).push(e.target);
	}
	const visited = /* @__PURE__ */ new Set([msgId]);
	const queue = [msgId];
	while (queue.length > 0) {
		const current = queue.shift();
		for (const next of adj.get(current) || []) {
			if (next === serviceNodeId) return true;
			if (!visited.has(next)) {
				visited.add(next);
				queue.push(next);
			}
		}
	}
	return false;
};
var buildChildEdges = (groupData, groupNodeId, serviceNodeId, msgIdToChildId, animateMessages) => {
	const expandedEdges = groupData.expandedEdges || [];
	return (groupData.messages || []).map((item) => {
		const msg = item.message;
		const msgId = `${msg.data.id}-${msg.data.version}`;
		const childId = msgIdToChildId.get(msgId);
		const collection = msg.collection || "events";
		const label = getChildEdgeLabel(groupData.direction, collection);
		if (groupData.direction === "sends") return {
			id: `${serviceNodeId}-to-${childId}`,
			source: serviceNodeId,
			target: childId,
			label,
			type: "animated",
			animated: animateMessages,
			style: GROUP_EDGE_STYLE,
			markerEnd: GROUP_EDGE_MARKER
		};
		if (canReachService(msgId, serviceNodeId, expandedEdges)) return null;
		return {
			id: `${childId}-to-${serviceNodeId}`,
			source: childId,
			target: serviceNodeId,
			label,
			type: "animated",
			animated: animateMessages,
			style: GROUP_EDGE_STYLE,
			markerEnd: GROUP_EDGE_MARKER
		};
	}).filter(Boolean);
};
var NodeGraphBuilder = ({ nodes: initialNodes, edges: initialEdges, title, includeBackground = true, linkTo: _linkTo = "docs", includeKey = true, linksToVisualiser = false, links = [], mode = "full", showFlowWalkthrough = true, showSearch = true, zoomOnScroll = false, isStudioModalOpen, setIsStudioModalOpen = () => {}, isChatEnabled = false, maxTextSize, isDevMode = false, resourceKey, animated, disableMessageAnimation = false, focusNodeId, focusRequestId, fitRequestId, onNodeClick, onBuildUrl, onNavigate, onSaveLayout, onResetLayout }) => {
	(0, import_react.useEffect)(() => {
		if (onBuildUrl) setBuildUrlFn(onBuildUrl);
	}, []);
	const nodeTypes = (0, import_react.useMemo)(() => {
		const wrapWithContextMenu = (Component) => {
			const Wrapped = (0, import_react.memo)((props) => {
				const items = props.data?.contextMenu;
				if (!items?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ...props });
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeContextMenu_default, {
					items,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ...props })
				});
			});
			Wrapped.displayName = `WithContextMenu(${Component.displayName || Component.name || "Component"})`;
			return Wrapped;
		};
		return {
			service: wrapWithContextMenu(ServiceNode_default),
			services: wrapWithContextMenu(ServiceNode_default),
			agent: wrapWithContextMenu(Agent_default),
			agents: wrapWithContextMenu(Agent_default),
			agentTool: wrapWithContextMenu(AgentTool_default),
			"agent-tool": wrapWithContextMenu(AgentTool_default),
			flow: wrapWithContextMenu(Flow_default),
			flows: wrapWithContextMenu(Flow_default),
			event: wrapWithContextMenu(EventNode_default),
			events: wrapWithContextMenu(EventNode_default),
			channel: wrapWithContextMenu(ChannelNode_default),
			channels: wrapWithContextMenu(ChannelNode_default),
			query: wrapWithContextMenu(QueryNode_default),
			queries: wrapWithContextMenu(QueryNode_default),
			command: wrapWithContextMenu(CommandNode_default),
			commands: wrapWithContextMenu(CommandNode_default),
			domain: wrapWithContextMenu(Domain_default),
			domains: wrapWithContextMenu(Domain_default),
			system: wrapWithContextMenu(System_default),
			systems: wrapWithContextMenu(System_default),
			step: Step_default,
			user: User_default,
			custom: Custom_default,
			externalSystem: wrapWithContextMenu(ExternalSystem_default),
			"external-system": wrapWithContextMenu(ExternalSystem2_default),
			entity: wrapWithContextMenu(Entity_default),
			entities: wrapWithContextMenu(Entity_default),
			data: wrapWithContextMenu(DataNode_default),
			view: wrapWithContextMenu(ViewNode_default),
			actor: ActorNode_default,
			"context-actor": ContextActor_default,
			container: wrapWithContextMenu(DataNode_default),
			"data-product": wrapWithContextMenu(DataProduct_default),
			"data-products": wrapWithContextMenu(DataProduct_default),
			group: GroupNode_default,
			"system-group": SystemGroupNode_default,
			note: (0, import_react.memo)((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteNode_default, {
				...props,
				readOnly: true
			})),
			field: wrapWithContextMenu(FieldNode_default),
			messageGroup: MessageGroupNode_default,
			messageGroupExpanded: MessageGroupExpandedNode_default,
			flowExpanded: FlowExpandedNode_default
		};
	}, []);
	const edgeTypes2 = (0, import_react.useMemo)(() => ({
		animated: AnimatedMessageEdge_default,
		multiline: MultilineEdgeLabel_default,
		"flow-edge": FlowEdge_default,
		default: LabelledDefaultEdge,
		smoothstep: LabelledSmoothStepEdge,
		step: LabelledStepEdge
	}), []);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const { fitView, getNodes, getIntersectingNodes, getZoom, setCenter } = useReactFlow();
	const storeApi = useStoreApi();
	const previousGraphInputRef = (0, import_react.useRef)({
		nodes: initialNodes,
		edges: initialEdges
	});
	(0, import_react.useEffect)(() => {
		const previousGraphInput = previousGraphInputRef.current;
		previousGraphInputRef.current = {
			nodes: initialNodes,
			edges: initialEdges
		};
		if (previousGraphInput.nodes === initialNodes && previousGraphInput.edges === initialEdges) return;
		setNodes(initialNodes);
		setEdges(initialEdges);
		requestAnimationFrame(() => {
			fitView({
				duration: 300,
				padding: .2
			});
		});
	}, [
		initialNodes,
		initialEdges,
		setNodes,
		setEdges,
		fitView
	]);
	const [animateMessages, setAnimateMessages] = (0, import_react.useState)(true);
	const [_activeStepIndex, _setActiveStepIndex] = (0, import_react.useState)(null);
	const [_isFullscreen, _setIsFullscreen] = (0, import_react.useState)(false);
	const [isShareModalOpen, setIsShareModalOpen] = (0, import_react.useState)(false);
	const [shareUrlCopySuccess, setShareUrlCopySuccess] = (0, import_react.useState)(false);
	const [isMermaidView, setIsMermaidView] = (0, import_react.useState)(false);
	const [showMinimap, setShowMinimap] = (0, import_react.useState)(false);
	const [hasLayoutChanges, setHasLayoutChanges] = (0, import_react.useState)(false);
	const [isSavingLayout, setIsSavingLayout] = (0, import_react.useState)(false);
	const initialPositionsRef = (0, import_react.useRef)({});
	const [focusModeOpen, setFocusModeOpen] = (0, import_react.useState)(false);
	const [focusedNodeId, setFocusedNodeId] = (0, import_react.useState)(null);
	const [isNotesModalOpen, setIsNotesModalOpen] = (0, import_react.useState)(false);
	const openNotesModal = (0, import_react.useCallback)(() => setIsNotesModalOpen(true), []);
	const interactionCountRef = (0, import_react.useRef)(0);
	const startInteraction = (0, import_react.useCallback)(() => {
		interactionCountRef.current += 1;
		if (interactionCountRef.current === 1) reactFlowWrapperRef.current?.classList.add("ec-interaction-active");
	}, []);
	const endInteraction = (0, import_react.useCallback)(() => {
		interactionCountRef.current = Math.max(0, interactionCountRef.current - 1);
		if (interactionCountRef.current === 0) reactFlowWrapperRef.current?.classList.remove("ec-interaction-active");
	}, []);
	const hoveredEdgeNodesRef = (0, import_react.useRef)([]);
	const handleEdgeMouseEnter = (0, import_react.useCallback)((_, edge) => {
		const wrapper = reactFlowWrapperRef.current;
		if (!wrapper) return;
		const nodes2 = wrapper.querySelectorAll(`[data-id="${edge.source}"], [data-id="${edge.target}"]`);
		nodes2.forEach((el) => el.classList.add("ec-edge-hover-node"));
		hoveredEdgeNodesRef.current = Array.from(nodes2);
	}, []);
	const handleEdgeMouseLeave = (0, import_react.useCallback)(() => {
		hoveredEdgeNodesRef.current.forEach((el) => el.classList.remove("ec-edge-hover-node"));
		hoveredEdgeNodesRef.current = [];
	}, []);
	const hoveredNodeEdgesRef = (0, import_react.useRef)([]);
	const hoveredNodePeersRef = (0, import_react.useRef)([]);
	const handleNodeMouseEnter = (0, import_react.useCallback)((_, node) => {
		const wrapper = reactFlowWrapperRef.current;
		if (!wrapper) return;
		const peerIds = /* @__PURE__ */ new Set();
		const edgeEls = [];
		for (const edge of edgesRef.current) {
			if (edge.source !== node.id && edge.target !== node.id) continue;
			const el = wrapper.querySelector(`.react-flow__edge[data-id="${edge.id}"]`);
			if (el) {
				el.classList.add("ec-node-hover-edge");
				edgeEls.push(el);
			}
			if (edge.source !== node.id) peerIds.add(edge.source);
			if (edge.target !== node.id) peerIds.add(edge.target);
		}
		hoveredNodeEdgesRef.current = edgeEls;
		peerIds.add(node.id);
		const selector = Array.from(peerIds).map((id) => `[data-id="${id}"]`).join(", ");
		if (selector) {
			const peerEls = wrapper.querySelectorAll(selector);
			peerEls.forEach((el) => el.classList.add("ec-edge-hover-node"));
			hoveredNodePeersRef.current = Array.from(peerEls);
		}
	}, []);
	const handleNodeMouseLeave = (0, import_react.useCallback)(() => {
		hoveredNodeEdgesRef.current.forEach((el) => el.classList.remove("ec-node-hover-edge"));
		hoveredNodeEdgesRef.current = [];
		hoveredNodePeersRef.current.forEach((el) => el.classList.remove("ec-edge-hover-node"));
		hoveredNodePeersRef.current = [];
	}, []);
	const hasChannels = (0, import_react.useMemo)(() => initialNodes.some((node) => node.type === "channels"), [initialNodes]);
	const { hideChannels, toggleChannelsVisibility } = useChannelVisibility({
		nodes,
		edges,
		setNodes,
		setEdges,
		skipProcessing: !hasChannels
	});
	const searchRef = (0, import_react.useRef)(null);
	const reactFlowWrapperRef = (0, import_react.useRef)(null);
	const scrollableContainerRef = (0, import_react.useRef)(null);
	const nodesRef = (0, import_react.useRef)(nodes);
	nodesRef.current = nodes;
	const edgesRef = (0, import_react.useRef)(edges);
	edgesRef.current = edges;
	const hideChannelsRef = (0, import_react.useRef)(hideChannels);
	hideChannelsRef.current = hideChannels;
	const wrapperNodeIds = (0, import_react.useMemo)(() => {
		const ids = /* @__PURE__ */ new Set();
		nodes.forEach((n) => {
			if (isExpandedWrapper(n.type)) ids.add(n.id);
		});
		return ids;
	}, [nodes]);
	const walkthroughNodes = (0, import_react.useMemo)(() => wrapperNodeIds.size === 0 ? nodes : nodes.filter((n) => !wrapperNodeIds.has(n.id)), [nodes, wrapperNodeIds]);
	const walkthroughEdges = (0, import_react.useMemo)(() => wrapperNodeIds.size === 0 ? edges : edges.filter((e) => !wrapperNodeIds.has(e.source) && !wrapperNodeIds.has(e.target)), [edges, wrapperNodeIds]);
	const animateLayout = (0, import_react.useCallback)(() => {
		const wrapper = reactFlowWrapperRef.current;
		if (!wrapper) return;
		wrapper.classList.add("ec-animating-layout");
		setTimeout(() => wrapper.classList.remove("ec-animating-layout"), 400);
	}, []);
	const relayoutGraph = (0, import_react.useCallback)((nextNodes, nextEdges, anchor) => {
		const g = new import_dagre.default.graphlib.Graph({ compound: true });
		g.setGraph({
			rankdir: "LR",
			ranksep: 300,
			nodesep: 50
		});
		g.setDefaultEdgeLabel(() => ({}));
		nextNodes.forEach((node) => {
			if (node.parentId) return;
			const w = node.style?.width || (node.type === "messageGroupExpanded" ? 380 : 150);
			const h = node.style?.height || (node.type === "messageGroupExpanded" ? 0 : 120);
			if (node.type === "messageGroupExpanded") {
				const childHeight = nextNodes.filter((n) => n.parentId === node.id).length * 190 + 100;
				g.setNode(node.id, {
					width: w,
					height: childHeight
				});
			} else g.setNode(node.id, {
				width: w,
				height: h
			});
		});
		nextEdges.forEach((edge) => {
			const sourceNode = nextNodes.find((n) => n.id === edge.source);
			const targetNode = nextNodes.find((n) => n.id === edge.target);
			const sourceTop = sourceNode?.parentId || edge.source;
			const targetTop = targetNode?.parentId || edge.target;
			if (g.hasNode(sourceTop) && g.hasNode(targetTop) && sourceTop !== targetTop) g.setEdge(sourceTop, targetTop);
		});
		layoutDagreGraph(g);
		const positioned = nextNodes.map((node) => {
			if (node.parentId) {
				const parent = nextNodes.find((n) => n.id === node.parentId);
				if (parent?.type === "flowExpanded") return node;
				const parentWidth = parent?.style?.width || 380;
				const xOffset = Math.max(20, (parentWidth - 240) / 2);
				const index = nextNodes.filter((n) => n.parentId === node.parentId).indexOf(node);
				return {
					...node,
					position: {
						x: xOffset,
						y: 70 + index * 190
					}
				};
			}
			const pos = g.node(node.id);
			if (!pos) return node;
			return {
				...node,
				position: {
					x: pos.x - pos.width / 2,
					y: pos.y - pos.height / 2
				}
			};
		});
		if (!anchor) return positioned;
		const positionedAnchor = positioned.find((node) => node.id === anchor.id);
		if (!positionedAnchor) return positioned;
		const offset = {
			x: anchor.position.x - positionedAnchor.position.x,
			y: anchor.position.y - positionedAnchor.position.y
		};
		return positioned.map((node) => {
			if (node.parentId) return node;
			return {
				...node,
				position: {
					x: node.position.x + offset.x,
					y: node.position.y + offset.y
				}
			};
		});
	}, []);
	const makeRoomForRenderedExpandedGroup = (0, import_react.useCallback)((groupNodeId, groupBounds) => {
		const padding = 80;
		const protectedBounds = {
			x: groupBounds.x - padding,
			y: groupBounds.y - padding,
			width: groupBounds.width + 160,
			height: groupBounds.height + 160
		};
		const intersectingIds = new Set(getIntersectingNodes(protectedBounds, true).filter((node) => node.id !== groupNodeId && !node.parentId).map((node) => node.id));
		if (intersectingIds.size === 0) return;
		setNodes((currentNodes) => {
			const plannedPositions = packNodesAroundBounds({
				nodes: currentNodes,
				movableNodeIds: intersectingIds,
				protectedBounds,
				groupNodeId
			});
			return currentNodes.map((node) => {
				const plannedPosition = plannedPositions.get(node.id);
				if (!plannedPosition) return node;
				return {
					...node,
					position: plannedPosition
				};
			});
		});
	}, [getIntersectingNodes, setNodes]);
	const layoutSubFlowChildren = (0, import_react.useCallback)((children, edges2, sizeOf, opts) => {
		const { padding, headerH, fallbackW = 240, fallbackH = 120 } = opts;
		const g = new import_dagre.default.graphlib.Graph();
		g.setGraph({
			rankdir: "LR",
			ranksep: 360,
			nodesep: 200
		});
		g.setDefaultEdgeLabel(() => ({}));
		const childIds = new Set(children.map((c) => c.id));
		children.forEach((c) => {
			const { w, h } = sizeOf(c);
			g.setNode(c.id, {
				width: w,
				height: h
			});
		});
		edges2.forEach((e) => {
			if (childIds.has(e.source) && childIds.has(e.target)) g.setEdge(e.source, e.target);
		});
		layoutDagreGraph(g);
		let minX = Infinity;
		let minY = Infinity;
		let maxX = -Infinity;
		let maxY = -Infinity;
		const positions = /* @__PURE__ */ new Map();
		children.forEach((c) => {
			const pos = g.node(c.id);
			if (!pos) return;
			const x = pos.x - pos.width / 2;
			const y = pos.y - pos.height / 2;
			positions.set(c.id, {
				x,
				y
			});
			minX = Math.min(minX, x);
			minY = Math.min(minY, y);
			maxX = Math.max(maxX, x + pos.width);
			maxY = Math.max(maxY, y + pos.height);
		});
		const offsetX = padding - (Number.isFinite(minX) ? minX : 0);
		const offsetY = headerH + padding - (Number.isFinite(minY) ? minY : 0);
		const positioned = children.map((c) => {
			const p = positions.get(c.id);
			if (!p) return c;
			return {
				...c,
				position: {
					x: p.x + offsetX,
					y: p.y + offsetY
				}
			};
		});
		const finalPositions = /* @__PURE__ */ new Map();
		positions.forEach((p, id) => finalPositions.set(id, {
			x: p.x + offsetX,
			y: p.y + offsetY
		}));
		return {
			positioned,
			positions: finalPositions,
			width: Number.isFinite(minX) ? maxX - minX + padding * 2 : fallbackW + padding * 2,
			height: Number.isFinite(minY) ? maxY - minY + headerH + padding * 2 : fallbackH + headerH + padding * 2
		};
	}, []);
	const handleCollapseGroup = (0, import_react.useCallback)((e) => {
		const target = e.target;
		if (!target.closest(".ec-collapse-group-btn, .ec-collapse-flow-btn")) return;
		e.stopPropagation();
		const nodeWrapper = target.closest("[data-id]");
		if (!nodeWrapper) return;
		const groupNodeId = nodeWrapper.getAttribute("data-id");
		if (!groupNodeId) return;
		const currentNodes = nodesRef.current;
		const currentEdges = edgesRef.current;
		const expandedNode = currentNodes.find((n) => n.id === groupNodeId);
		if (!expandedNode || !isExpandedWrapper(expandedNode.type)) return;
		const stashed = expandedNode.data.__preExpansion;
		const originalNode = stashed?.node ?? initialNodes.find((n) => n.id === groupNodeId && (n.type === "messageGroup" || n.type === "flows" || n.type === "flow"));
		if (!originalNode) return;
		const originalEdges = stashed?.edges ?? initialEdges.filter((edge) => edge.source === groupNodeId || edge.target === groupNodeId);
		const childNodeIds = new Set(currentNodes.filter((n) => n.parentId === groupNodeId).map((n) => n.id));
		const originalData = originalNode.data;
		const preExistingIds = new Set(stashed ? stashed.nodeIds : initialNodes.map((n) => n.id));
		const downstreamNodeIds = new Set((originalData.expandedNodes || []).map((n) => n.id).filter((id) => !preExistingIds.has(id)));
		const isDownstreamEdge = (edge) => edge.id.startsWith(`${groupNodeId}__`);
		animateLayout();
		setNodes((prev) => {
			const nextEdges = currentEdges.filter((edge) => !childNodeIds.has(edge.source) && !childNodeIds.has(edge.target) && !isDownstreamEdge(edge)).concat(originalEdges);
			const referencedByEdges = /* @__PURE__ */ new Set();
			for (const edge of nextEdges) {
				referencedByEdges.add(edge.source);
				referencedByEdges.add(edge.target);
			}
			return [...prev.filter((n) => n.id !== groupNodeId && !childNodeIds.has(n.id) && !(downstreamNodeIds.has(n.id) && !referencedByEdges.has(n.id))).map((n) => {
				const stashedPosition = stashed?.nodePositions?.[n.id];
				if (!stashedPosition || n.parentId) return n;
				return {
					...n,
					position: stashedPosition
				};
			}), {
				...originalNode,
				position: stashed?.nodePositions?.[groupNodeId] ?? expandedNode.position
			}];
		});
		setEdges((prev) => {
			return [...prev.filter((edge) => !childNodeIds.has(edge.source) && !childNodeIds.has(edge.target) && !isDownstreamEdge(edge)), ...originalEdges];
		});
	}, [
		initialNodes,
		initialEdges,
		setNodes,
		setEdges,
		relayoutGraph,
		animateLayout
	]);
	(0, import_react.useEffect)(() => {
		if (isDevMode && initialNodes.length > 0) {
			const positions = {};
			initialNodes.forEach((node) => {
				positions[node.id] = {
					x: node.position.x,
					y: node.position.y
				};
			});
			initialPositionsRef.current = positions;
		}
	}, [isDevMode, initialNodes]);
	const checkForLayoutChanges = (0, import_react.useCallback)(() => {
		if (!isDevMode) return;
		const initial = initialPositionsRef.current;
		if (Object.keys(initial).length === 0) return;
		const hasChanges = nodesRef.current.some((node) => {
			const initialPos = initial[node.id];
			return initialPos && (Math.abs(node.position.x - initialPos.x) > POSITION_CHANGE_THRESHOLD || Math.abs(node.position.y - initialPos.y) > POSITION_CHANGE_THRESHOLD);
		});
		setHasLayoutChanges(hasChanges);
	}, [isDevMode]);
	const handleNodesChange = (0, import_react.useCallback)((changes) => {
		onNodesChange(changes);
		if (changes.some((change) => change.type === "position" && !change.dragging)) setTimeout(checkForLayoutChanges, 0);
	}, [onNodesChange, checkForLayoutChanges]);
	const resetNodesAndEdges = (0, import_react.useCallback)(() => {
		setNodes((nds) => nds.map((node) => {
			node.style = {
				...node.style,
				opacity: 1
			};
			return {
				...node,
				animated: animateMessages,
				selected: false
			};
		}));
		setEdges((eds) => eds.map((edge) => {
			edge.style = {
				...edge.style,
				opacity: 1
			};
			edge.labelStyle = {
				...edge.labelStyle,
				opacity: 1
			};
			return {
				...edge,
				data: {
					...edge.data,
					opacity: 1,
					animated: animateMessages
				},
				animated: animateMessages
			};
		}));
	}, [
		setNodes,
		setEdges,
		animateMessages
	]);
	(0, import_react.useEffect)(() => {
		if (!focusNodeId) return;
		const targetNode = nodesRef.current.find((node) => node.id === focusNodeId);
		if (!targetNode) return;
		setNodes((nds) => nds.map((node) => ({
			...node,
			selected: node.id === focusNodeId
		})));
		requestAnimationFrame(() => {
			fitView({
				duration: 450,
				padding: .35,
				nodes: [targetNode]
			});
		});
	}, [
		focusNodeId,
		focusRequestId,
		fitView,
		setNodes
	]);
	(0, import_react.useEffect)(() => {
		if (fitRequestId == null) return;
		requestAnimationFrame(() => {
			fitView({
				duration: 400,
				padding: .2
			});
		});
	}, [fitRequestId, fitView]);
	const handleNodeClick = (0, import_react.useCallback)((_, node) => {
		if (onNodeClick) {
			onNodeClick(node);
			return;
		}
		const isFlow = edgesRef.current.some((edge) => edge.type === "flow-edge");
		const isEntityVisualizer = nodesRef.current.some((n) => n.type === "entities");
		const isExpandableFlow = (node.type === "flows" || node.type === "flow") && Array.isArray(node.data?.expandedNodes) && node.data.expandedNodes.length > 0;
		if ((isFlow || isEntityVisualizer) && !isExpandableFlow) return;
		if (node.type === "domain" || node.type === "domains") return;
		if (node.type === "system" || node.type === "systems") return;
		if (node.type === "context-actor") return;
		if (node.type === "system-group") return;
		if (isExpandedWrapper(node.type)) return;
		if (node.type === "messageGroup") {
			const groupData = node.data;
			const groupNodeId = node.id;
			const currentGroupNode = getExpandedMessageGroupNode(nodesRef.current, groupNodeId);
			if (currentGroupNode?.type === "messageGroupExpanded") {
				const measured = currentGroupNode?.measured;
				const width = measured?.width ?? currentGroupNode.style?.width ?? 380;
				const height = measured?.height ?? currentGroupNode.style?.height ?? 300;
				setCenter(currentGroupNode.position.x + width / 2, currentGroupNode.position.y + height / 2, {
					duration: 300,
					zoom: Math.min(Math.max(getZoom(), .55), 1)
				});
				return;
			}
			const serviceNodeId = `${groupData.service.id}-${groupData.service.version}`;
			const childCount = groupData.messages?.length || 0;
			const containerWidth = 380;
			const containerHeight = childCount * 190 + 100;
			const preExpansionEdges = edgesRef.current.filter((e) => e.source === groupNodeId || e.target === groupNodeId);
			const preExpansionNodeIds = nodesRef.current.map((n) => n.id);
			const preExpansionNodePositions = Object.fromEntries(nodesRef.current.map((n) => [n.id, { ...n.position }]));
			const expandedContainerNode = {
				id: groupNodeId,
				type: "messageGroupExpanded",
				position: node.position,
				data: {
					groupName: groupData.groupName,
					direction: groupData.direction,
					messageCount: childCount,
					onCollapse: groupNodeId,
					__preExpansion: {
						node,
						edges: preExpansionEdges,
						nodeIds: preExpansionNodeIds,
						nodePositions: preExpansionNodePositions
					}
				},
				style: {
					width: containerWidth,
					height: containerHeight
				}
			};
			const childNodes = (groupData.messages || []).map((item, index) => {
				const msg = item.message;
				const msgId = `${msg.data.id}-${msg.data.version}`;
				return {
					id: `${groupNodeId}__${msgId}`,
					type: msg.collection,
					parentId: groupNodeId,
					extent: "parent",
					position: {
						x: 70,
						y: 70 + index * 190
					},
					data: {
						mode: groupData.mode || "simple",
						message: { ...msg.data }
					}
				};
			});
			const msgIdToChildId = /* @__PURE__ */ new Map();
			for (const item of groupData.messages || []) {
				const msg = item.message;
				const msgId = `${msg.data.id}-${msg.data.version}`;
				msgIdToChildId.set(msgId, `${groupNodeId}__${msgId}`);
			}
			const childEdges = buildChildEdges(groupData, groupNodeId, serviceNodeId, msgIdToChildId, animateMessages);
			const channelNodeIds = hideChannelsRef.current ? new Set((groupData.expandedNodes || []).filter((n) => n.type === "channels").map((n) => n.id)) : /* @__PURE__ */ new Set();
			const downstreamNodes = (groupData.expandedNodes || []).filter((n) => !channelNodeIds.has(n.id));
			const seenEdgeIds = /* @__PURE__ */ new Set();
			const downstreamEdges = (groupData.expandedEdges || []).map((e) => ({
				...e,
				type: "animated",
				source: msgIdToChildId.get(e.source) || e.source,
				target: msgIdToChildId.get(e.target) || e.target,
				id: `${groupNodeId}__${e.id}`
			})).filter((e) => {
				if (seenEdgeIds.has(e.id)) return false;
				seenEdgeIds.add(e.id);
				if (channelNodeIds.has(e.source) || channelNodeIds.has(e.target)) return false;
				return true;
			});
			animateLayout();
			setNodes((prev) => {
				const downstreamX = groupData.direction === "sends" ? node.position.x + containerWidth + 260 : node.position.x - 420;
				const downstreamY = node.position.y + 40;
				return buildMessageGroupExpansionNodes({
					currentNodes: prev,
					groupNodeId,
					expandedContainerNode,
					childNodes,
					downstreamNodes,
					getDownstreamPosition: (_downstreamNode, index) => ({
						x: downstreamX,
						y: downstreamY + index * 190
					})
				});
			});
			setEdges((prev) => {
				return [
					...prev.filter((e) => e.source !== groupNodeId && e.target !== groupNodeId),
					...childEdges,
					...downstreamEdges
				];
			});
			requestAnimationFrame(() => {
				let actualContainerBounds = {
					x: node.position.x,
					y: node.position.y,
					width: containerWidth,
					height: containerHeight
				};
				setNodes((prev) => {
					const children = prev.filter((n) => n.parentId === groupNodeId);
					if (children.length === 0) return prev;
					const measurements = children.map((n) => {
						const el = document.querySelector(`[data-id="${n.id}"]`);
						return {
							id: n.id,
							w: el?.offsetWidth ?? 240,
							h: el?.offsetHeight ?? 120
						};
					});
					const headerH = 50;
					const gap = 25;
					const actualContainerH = headerH + (measurements.reduce((sum, m) => sum + m.h, 0) + gap * (measurements.length - 1)) + 60;
					let currentY = 80;
					actualContainerBounds = {
						x: node.position.x,
						y: node.position.y,
						width: containerWidth,
						height: actualContainerH
					};
					return prev.map((n) => {
						if (n.id === groupNodeId) {
							actualContainerBounds = {
								x: n.position.x,
								y: n.position.y,
								width: containerWidth,
								height: actualContainerH
							};
							return {
								...n,
								style: {
									...n.style,
									height: actualContainerH
								}
							};
						}
						if (n.parentId !== groupNodeId) return n;
						const m = measurements.find((m2) => m2.id === n.id);
						if (!m) return n;
						const x = Math.max(0, (containerWidth - m.w) / 2);
						const y = currentY;
						currentY += m.h + gap;
						return {
							...n,
							position: {
								x,
								y
							}
						};
					});
				});
				requestAnimationFrame(() => {
					const groupNode = getNodes().find((n) => n.id === groupNodeId);
					const measured = groupNode?.measured;
					const width = measured?.width ?? groupNode?.style?.width ?? containerWidth;
					const height = measured?.height ?? groupNode?.style?.height ?? actualContainerBounds.height;
					const bounds = {
						x: groupNode?.position.x ?? actualContainerBounds.x,
						y: groupNode?.position.y ?? actualContainerBounds.y,
						width,
						height
					};
					makeRoomForRenderedExpandedGroup(groupNodeId, bounds);
					setCenter(bounds.x + width / 2, bounds.y + height / 2, {
						duration: 450,
						zoom: Math.min(Math.max(getZoom(), .55), 1)
					});
				});
			});
			return;
		}
		if (isExpandableFlow) {
			const flowData = node.data;
			const flowNodeId = node.id;
			const subFlowNodes = flowData.expandedNodes || [];
			const subFlowEdges = flowData.expandedEdges || [];
			const initialChildNodes = subFlowNodes.map((child) => ({
				...child,
				parentId: flowNodeId,
				extent: "parent",
				position: {
					x: 0,
					y: 0
				}
			}));
			const CHILD_PADDING = 60;
			const HEADER_H = 60;
			const EST_W = 240;
			const EST_H = 120;
			const { positioned: childNodes, width: containerWidth, height: containerHeight } = layoutSubFlowChildren(initialChildNodes, subFlowEdges, () => ({
				w: EST_W,
				h: EST_H
			}), {
				padding: CHILD_PADDING,
				headerH: HEADER_H
			});
			const preExpansionEdges = edgesRef.current.filter((e) => e.source === flowNodeId || e.target === flowNodeId);
			const preExpansionNodeIds = nodesRef.current.map((n) => n.id);
			const expandedContainerNode = {
				id: flowNodeId,
				type: "flowExpanded",
				position: node.position,
				data: {
					flowName: flowData.flow?.name || flowData.flow?.data?.name,
					version: flowData.flow?.version || flowData.flow?.data?.version,
					__preExpansion: {
						node,
						edges: preExpansionEdges,
						nodeIds: preExpansionNodeIds
					}
				},
				style: {
					width: containerWidth,
					height: containerHeight,
					background: "transparent",
					border: "none",
					padding: 0,
					overflow: "visible"
				}
			};
			const childIds = new Set(childNodes.map((n) => n.id));
			const hasIncoming = /* @__PURE__ */ new Set();
			const hasOutgoing = /* @__PURE__ */ new Set();
			for (const e of subFlowEdges) {
				if (childIds.has(e.target)) hasIncoming.add(e.target);
				if (childIds.has(e.source)) hasOutgoing.add(e.source);
			}
			const entryChildIds = childNodes.map((n) => n.id).filter((id) => !hasIncoming.has(id));
			const terminalChildIds = childNodes.map((n) => n.id).filter((id) => !hasOutgoing.has(id));
			const currentEdges = edgesRef.current;
			const predecessorEdges = currentEdges.filter((e) => e.target === flowNodeId);
			const successorEdges = currentEdges.filter((e) => e.source === flowNodeId);
			const stitchedPredecessors = [];
			for (const e of predecessorEdges) for (const entryId of entryChildIds.length > 0 ? entryChildIds : [flowNodeId]) stitchedPredecessors.push({
				...e,
				id: `${e.id}__to__${entryId}`,
				target: entryId
			});
			const stitchedSuccessors = [];
			for (const e of successorEdges) for (const terminalId of terminalChildIds.length > 0 ? terminalChildIds : [flowNodeId]) stitchedSuccessors.push({
				...e,
				id: `${e.id}__from__${terminalId}`,
				source: terminalId
			});
			animateLayout();
			setNodes((prev) => {
				const next = [
					...prev.filter((n) => n.id !== flowNodeId),
					expandedContainerNode,
					...childNodes
				];
				const nextEdges = [
					...currentEdges.filter((e) => e.source !== flowNodeId && e.target !== flowNodeId),
					...subFlowEdges,
					...stitchedPredecessors,
					...stitchedSuccessors
				];
				return relayoutGraph(next, nextEdges);
			});
			setEdges((prev) => {
				return [
					...prev.filter((e) => e.source !== flowNodeId && e.target !== flowNodeId),
					...subFlowEdges,
					...stitchedPredecessors,
					...stitchedSuccessors
				];
			});
			requestAnimationFrame(() => {
				const currentChildren = nodesRef.current.filter((n) => n.parentId === flowNodeId);
				if (currentChildren.length === 0) return;
				const measurements = /* @__PURE__ */ new Map();
				currentChildren.forEach((n) => {
					const el = document.querySelector(`[data-id="${n.id}"]`);
					measurements.set(n.id, {
						w: el?.offsetWidth ?? EST_W,
						h: el?.offsetHeight ?? EST_H
					});
				});
				const { positions, width: actualContainerW, height: actualContainerH } = layoutSubFlowChildren(currentChildren, subFlowEdges, (n) => measurements.get(n.id) ?? {
					w: EST_W,
					h: EST_H
				}, {
					padding: CHILD_PADDING,
					headerH: HEADER_H
				});
				setNodes((prev) => prev.map((n) => {
					if (n.id === flowNodeId) return {
						...n,
						style: {
							...n.style,
							width: actualContainerW,
							height: actualContainerH
						}
					};
					if (n.parentId !== flowNodeId) return n;
					const p = positions.get(n.id);
					if (!p) return n;
					return {
						...n,
						position: {
							x: p.x,
							y: p.y
						}
					};
				}));
			});
			requestAnimationFrame(() => {
				fitView({
					duration: 400,
					padding: .2
				});
			});
			return;
		}
		if (linksToVisualiser && onNavigate) return;
		setFocusedNodeId(node.id);
		setFocusModeOpen(true);
	}, [
		onNodeClick,
		linksToVisualiser,
		onNavigate,
		makeRoomForRenderedExpandedGroup,
		getNodes,
		getZoom,
		setCenter
	]);
	const toggleAnimateMessages = (0, import_react.useCallback)(() => {
		setAnimateMessages((prev) => {
			const next = !prev;
			localStorage.setItem("EventCatalog:animateMessages", JSON.stringify(next));
			return next;
		});
	}, []);
	const handleFitView = (0, import_react.useCallback)(() => {
		fitView({
			duration: 400,
			padding: .2
		});
	}, [fitView]);
	(0, import_react.useEffect)(() => {
		if (disableMessageAnimation) {
			setAnimateMessages(false);
			return;
		}
		if (animated !== void 0) {
			setAnimateMessages(animated);
			return;
		}
		const animateParam = new URLSearchParams(window.location.search).get("animate");
		if (animateParam === "true") setAnimateMessages(true);
		else if (animateParam === "false") setAnimateMessages(false);
		else {
			const storedAnimateMessages = localStorage.getItem("EventCatalog:animateMessages");
			if (storedAnimateMessages !== null) setAnimateMessages(storedAnimateMessages === "true");
			else setAnimateMessages(initialNodes.length <= LARGE_GRAPH_NODE_THRESHOLD2);
		}
	}, [
		animated,
		disableMessageAnimation,
		initialNodes.length
	]);
	(0, import_react.useEffect)(() => {
		setEdges((eds) => eds.map((edge) => {
			const preservesOwnRenderer = edge.type === "flow-edge" || edge.type === "multiline" || edge.type === "default" || edge.type === "step" || edge.type === "smoothstep" || edge.data?.animated === false;
			return {
				...edge,
				animated: preservesOwnRenderer ? false : animateMessages,
				type: preservesOwnRenderer ? edge.type || "default" : animateMessages ? "animated" : "smoothstep",
				data: {
					...edge.data,
					animateMessages: preservesOwnRenderer ? false : animateMessages,
					animated: preservesOwnRenderer ? false : animateMessages
				}
			};
		}));
	}, [animateMessages]);
	(0, import_react.useEffect)(() => {
		setTimeout(() => {
			fitView({ duration: 800 });
		}, 150);
	}, []);
	const generateMermaidCode = (0, import_react.useCallback)(() => {
		try {
			return convertToMermaid(nodesRef.current, edgesRef.current, {
				includeStyles: true,
				direction: "LR"
			});
		} catch (error) {
			console.error("Error generating mermaid code:", error);
			return "";
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (zoomOnScroll) return;
		const findScrollableContainer = () => {
			for (const selector of [
				".docs-layout .overflow-y-auto",
				".overflow-y-auto",
				"[style*=\"overflow-y:auto\"]",
				"[style*=\"overflow-y: auto\"]"
			]) {
				const element = document.querySelector(selector);
				if (element) return element;
			}
			return null;
		};
		if (!scrollableContainerRef.current) scrollableContainerRef.current = findScrollableContainer();
		const handleWheel = (event) => {
			if (!event.ctrlKey && !event.shiftKey && !event.metaKey) {
				event.preventDefault();
				const scrollableContainer = scrollableContainerRef.current;
				if (scrollableContainer) scrollableContainer.scrollBy({
					top: event.deltaY,
					left: event.deltaX,
					behavior: "instant"
				});
				else window.scrollBy({
					top: event.deltaY,
					left: event.deltaX,
					behavior: "instant"
				});
			}
		};
		const wrapper = reactFlowWrapperRef.current;
		if (wrapper) {
			wrapper.addEventListener("wheel", handleWheel, { passive: false });
			return () => {
				wrapper.removeEventListener("wheel", handleWheel);
			};
		}
	}, [zoomOnScroll]);
	const handlePaneClick = (0, import_react.useCallback)(() => {
		searchRef.current?.hideSuggestions();
		resetNodesAndEdges();
		fitView({ duration: 800 });
	}, [resetNodesAndEdges, fitView]);
	const handleNodeSelect = (0, import_react.useCallback)((node) => {
		handleNodeClick(null, node);
	}, [handleNodeClick]);
	const handleSearchClear = (0, import_react.useCallback)(() => {
		resetNodesAndEdges();
		fitView({ duration: 800 });
	}, [resetNodesAndEdges, fitView]);
	const downloadImage = (0, import_react.useCallback)((dataUrl, filename) => {
		const a = document.createElement("a");
		a.setAttribute("download", `${filename || "eventcatalog"}.png`);
		a.setAttribute("href", dataUrl);
		a.click();
	}, []);
	const openStudioModal = (0, import_react.useCallback)(() => {
		setIsStudioModalOpen(true);
	}, [setIsStudioModalOpen]);
	const openChat = (0, import_react.useCallback)(() => {
		window.dispatchEvent(new CustomEvent("eventcatalog:open-chat"));
	}, []);
	const handleSaveLayout = (0, import_react.useCallback)(async () => {
		if (!resourceKey || !onSaveLayout) return false;
		const positions = {};
		nodesRef.current.forEach((node) => {
			positions[node.id] = {
				x: node.position.x,
				y: node.position.y
			};
		});
		return await onSaveLayout(resourceKey, positions);
	}, [resourceKey, onSaveLayout]);
	const handleResetLayout = (0, import_react.useCallback)(async () => {
		if (!resourceKey || !onResetLayout) return false;
		return await onResetLayout(resourceKey);
	}, [resourceKey, onResetLayout]);
	const handleQuickSaveLayout = (0, import_react.useCallback)(async () => {
		setIsSavingLayout(true);
		const success = await handleSaveLayout();
		setIsSavingLayout(false);
		if (success) {
			const positions = {};
			nodesRef.current.forEach((node) => {
				positions[node.id] = {
					x: node.position.x,
					y: node.position.y
				};
			});
			initialPositionsRef.current = positions;
			setHasLayoutChanges(false);
		}
	}, [handleSaveLayout]);
	const handleCopyArchitectureCode = (0, import_react.useCallback)(async () => {
		await copyToClipboard(generateMermaidCode());
	}, [generateMermaidCode]);
	const handleCopyShareUrl = (0, import_react.useCallback)(async () => {
		await copyToClipboard(typeof window !== "undefined" ? window.location.href : "");
		setShareUrlCopySuccess(true);
		setTimeout(() => setShareUrlCopySuccess(false), 2e3);
	}, []);
	const toggleFullScreen = (0, import_react.useCallback)(() => {
		if (!document.fullscreenElement) reactFlowWrapperRef.current?.requestFullscreen().catch((err) => {
			console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
		});
		else document.exitFullscreen();
	}, []);
	(0, import_react.useEffect)(() => {
		const handleFullscreenChange = () => {
			_setIsFullscreen(!!document.fullscreenElement);
			setTimeout(() => {
				fitView({ duration: 800 });
			}, 100);
		};
		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, [fitView]);
	const handleExportVisual = (0, import_react.useCallback)(() => {
		const { width, height, viewport } = getExportImageDimensions(getNodesBounds(getNodes(), { nodeLookup: storeApi.getState().nodeLookup }));
		const controls = document.querySelector(".react-flow__controls");
		if (controls) controls.style.display = "none";
		const viewportElement = document.querySelector(".react-flow__viewport");
		const removeExportStyles = injectExportStyles(viewportElement);
		toPng(viewportElement, {
			backgroundColor: "#f1f1f1",
			width,
			height,
			style: {
				width: `${width}px`,
				height: `${height}px`,
				transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`
			}
		}).then((dataUrl) => {
			downloadImage(dataUrl, title);
		}).finally(() => {
			removeExportStyles();
			if (controls) controls.style.display = "block";
		});
	}, [
		getNodes,
		storeApi,
		downloadImage,
		title
	]);
	const handleLegendClick = (0, import_react.useCallback)((collectionType, groupId) => {
		const isLegendTarget = (node) => {
			if (groupId) return node.data.group && node.data.group?.id === groupId;
			return node.type === collectionType;
		};
		const updatedNodes = nodes.map((node) => {
			if (isLegendTarget(node)) return {
				...node,
				style: {
					...node.style,
					opacity: 1
				}
			};
			return {
				...node,
				style: {
					...node.style,
					opacity: .1
				}
			};
		});
		const updatedEdges = edges.map((edge) => {
			return {
				...edge,
				data: {
					...edge.data,
					opacity: .1
				},
				style: {
					...edge.style,
					opacity: .1
				},
				labelStyle: {
					...edge.labelStyle,
					opacity: .1
				},
				animated: animateMessages
			};
		});
		setNodes(updatedNodes);
		setEdges(updatedEdges);
		const targetNodes = updatedNodes.filter(isLegendTarget);
		if (targetNodes.length === 0) return;
		fitView({
			padding: .2,
			duration: 800,
			nodes: targetNodes
		});
	}, [
		nodes,
		edges,
		setNodes,
		setEdges,
		fitView
	]);
	const getNodesByCollectionWithColors = (0, import_react.useCallback)((nodes2) => {
		const colorClasses = {
			events: "bg-orange-600",
			agent: "bg-sky-600",
			agents: "bg-sky-600",
			agentTool: "bg-violet-600",
			"agent-tool": "bg-violet-600",
			services: "bg-pink-600",
			flows: "bg-teal-600",
			commands: "bg-blue-600",
			queries: "bg-green-600",
			channels: "bg-gray-600",
			externalSystem: "bg-pink-600",
			systems: "bg-purple-600",
			system: "bg-purple-600",
			actor: "bg-yellow-500",
			"context-actor": "bg-yellow-500",
			step: "bg-gray-700",
			data: "bg-blue-600",
			"data-products": "bg-indigo-600",
			field: "bg-cyan-600",
			messageGroup: "bg-violet-600",
			messageGroupExpanded: "bg-violet-600"
		};
		let legendForDomains = {};
		[...new Set(nodes2.filter((node) => node.data.group && node.data.group?.type === "Domain").map((node) => node.data.group?.id))].forEach((groupId) => {
			const group = nodes2.filter((node) => node.data.group && node.data.group?.id === groupId);
			legendForDomains[`${groupId} (Domain)`] = {
				count: group.length,
				colorClass: "bg-yellow-600",
				groupId
			};
		});
		const legendForNodes = nodes2.reduce((acc, node) => {
			const collection = node.type;
			if (collection) {
				if (acc[collection]) acc[collection].count += 1;
				else acc[collection] = {
					count: 1,
					colorClass: colorClasses[collection] || "bg-black"
				};
			}
			return acc;
		}, {});
		return {
			...legendForDomains,
			...legendForNodes
		};
	}, []);
	const legendKeyRef = (0, import_react.useRef)("");
	const computedLegendKey = nodes.map((n) => `${n.id}:${n.type}:${n.data.group?.id || ""}`).join(",");
	if (computedLegendKey !== legendKeyRef.current) legendKeyRef.current = computedLegendKey;
	const legendKey = legendKeyRef.current;
	const legend = (0, import_react.useMemo)(() => getNodesByCollectionWithColors(nodes), [getNodesByCollectionWithColors, legendKey]);
	const nodeIdsKeyRef = (0, import_react.useRef)("");
	const computedNodeIdsKey = nodes.map((n) => n.id).join(",");
	if (computedNodeIdsKey !== nodeIdsKeyRef.current) nodeIdsKeyRef.current = computedNodeIdsKey;
	const nodeIdsKey = nodeIdsKeyRef.current;
	const searchNodes = (0, import_react.useMemo)(() => nodes, [nodeIdsKey]);
	const allNoteGroups = (0, import_react.useMemo)(() => {
		const groups = [];
		for (const node of nodes) {
			const result = getNotesFromNode(node);
			if (result) groups.push({
				nodeId: node.id,
				name: result.name,
				notes: result.notes,
				nodeType: result.nodeType
			});
		}
		return groups;
	}, [nodeIdsKey]);
	const totalNotesCount = (0, import_react.useMemo)(() => allNoteGroups.reduce((sum, g) => sum + g.notes.length, 0), [allNoteGroups]);
	const handleStepChange = (0, import_react.useCallback)((nodeId, highlightPaths, shouldZoomOut) => {
		if (nodeId === null) {
			resetNodesAndEdges();
			_setActiveStepIndex(null);
			if (shouldZoomOut) setTimeout(() => {
				fitView({
					duration: 800,
					padding: .1
				});
			}, 100);
			return;
		}
		const activeNode = nodes.find((node) => node.id === nodeId);
		if (!activeNode) return;
		const highlightedNodeIds = /* @__PURE__ */ new Set();
		const highlightedEdgeIds = /* @__PURE__ */ new Set();
		highlightedNodeIds.add(activeNode.id);
		edges.forEach((edge) => {
			if (edge.target === activeNode.id) {
				highlightedEdgeIds.add(edge.id);
				highlightedNodeIds.add(edge.source);
			}
		});
		if (highlightPaths) highlightPaths.forEach((pathId) => {
			const [source, target] = pathId.split("-");
			edges.forEach((edge) => {
				if (edge.source === source && edge.target === target) {
					highlightedEdgeIds.add(edge.id);
					highlightedNodeIds.add(edge.target);
				}
			});
		});
		else edges.forEach((edge) => {
			if (edge.source === activeNode.id) {
				highlightedEdgeIds.add(edge.id);
				highlightedNodeIds.add(edge.target);
			}
		});
		const updatedNodes = nodes.map((node) => {
			if (highlightedNodeIds.has(node.id)) return {
				...node,
				style: {
					...node.style,
					opacity: 1
				}
			};
			return {
				...node,
				style: {
					...node.style,
					opacity: .2
				}
			};
		});
		const updatedEdges = edges.map((edge) => {
			if (highlightedEdgeIds.has(edge.id)) return {
				...edge,
				data: {
					...edge.data,
					opacity: 1,
					animated: true
				},
				style: {
					...edge.style,
					opacity: 1,
					strokeWidth: 3
				},
				labelStyle: {
					...edge.labelStyle,
					opacity: 1
				},
				animated: true
			};
			return {
				...edge,
				data: {
					...edge.data,
					opacity: .2,
					animated: false
				},
				style: {
					...edge.style,
					opacity: .2,
					strokeWidth: 2
				},
				labelStyle: {
					...edge.labelStyle,
					opacity: .2
				},
				animated: false
			};
		});
		setNodes(updatedNodes);
		setEdges(updatedEdges);
		fitView({
			padding: .4,
			duration: 800,
			nodes: [activeNode]
		});
	}, [
		nodes,
		edges,
		setNodes,
		setEdges,
		resetNodesAndEdges,
		fitView
	]);
	const isFlowVisualization = (0, import_react.useMemo)(() => edges.some((edge) => edge.type === "flow-edge"), [edges]);
	const isCompactMenuButton = !title;
	const menuButtonClassName = isCompactMenuButton ? "h-9 w-9 p-0 bg-[rgb(var(--ec-card-bg))] hover:bg-[rgb(var(--ec-accent-subtle))] border border-[rgb(var(--ec-page-border))] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--ec-accent))] flex items-center justify-center transition-colors duration-150 hover:border-[rgb(var(--ec-accent)/0.3)] group" : "py-2.5 px-4 bg-[rgb(var(--ec-card-bg))] hover:bg-[rgb(var(--ec-accent-subtle))] border border-[rgb(var(--ec-page-border))] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--ec-accent))] flex items-center gap-3 transition-colors duration-150 hover:border-[rgb(var(--ec-accent)/0.3)] group whitespace-nowrap";
	const menuIconClassName = isCompactMenuButton ? "h-4 w-4 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0 group-hover:text-[rgb(var(--ec-accent))] transition-colors duration-150" : "h-5 w-5 text-[rgb(var(--ec-page-text-muted))] flex-shrink-0 group-hover:text-[rgb(var(--ec-accent))] transition-colors duration-150";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: reactFlowWrapperRef,
		onClick: handleCollapseGroup,
		className: "w-full h-full bg-[rgb(var(--ec-page-bg))] flex flex-col eventcatalog-visualizer",
		style: {
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalContainerProvider, {
			value: reactFlowWrapperRef.current,
			children: [
				isMermaidView ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full pr-6 flex space-x-2 justify-between items-center bg-[rgb(var(--ec-page-bg))] border-b border-[rgb(var(--ec-page-border))] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex space-x-2 ml-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: menuButtonClassName,
								"aria-label": "Open menu",
								children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-medium text-[rgb(var(--ec-page-text))] leading-tight",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: menuIconClassName })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
							container: reactFlowWrapperRef.current,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2, {
								className: "min-w-56 bg-[rgb(var(--ec-page-bg))] border border-[rgb(var(--ec-page-border))] rounded-lg shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-200",
								sideOffset: 0,
								align: "end",
								alignOffset: -180,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, { className: "fill-[rgb(var(--ec-page-bg))] stroke-[rgb(var(--ec-page-border))] stroke-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualizerDropdownContent_default, {
									isMermaidView,
									setIsMermaidView,
									animateMessages,
									toggleAnimateMessages,
									hideAnimateMessages: disableMessageAnimation,
									hideChannels,
									toggleChannelsVisibility,
									hasChannels,
									showMinimap,
									setShowMinimap,
									handleFitView,
									searchRef,
									isChatEnabled,
									openChat,
									handleCopyArchitectureCode,
									handleExportVisual,
									setIsShareModalOpen,
									toggleFullScreen,
									openStudioModal,
									isDevMode,
									onSaveLayout: handleSaveLayout,
									onResetLayout: handleResetLayout
								})]
							})
						})] })
					}), mode === "full" && showSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end items-center gap-2",
						children: !isMermaidView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-96",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualiserSearch_default, {
								ref: searchRef,
								nodes: searchNodes,
								onNodeSelect: handleNodeSelect,
								onClear: handleSearchClear
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-hidden relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MermaidView_default, {
						nodes,
						edges,
						maxTextSize
					})
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(index, {
					nodeTypes,
					edgeTypes: edgeTypes2,
					minZoom: .07,
					nodes,
					edges,
					fitView: true,
					fitViewOptions: INITIAL_FIT_VIEW_OPTIONS,
					onNodesChange: handleNodesChange,
					onEdgesChange,
					onEdgeMouseEnter: handleEdgeMouseEnter,
					onEdgeMouseLeave: handleEdgeMouseLeave,
					connectionLineType: ConnectionLineType.SmoothStep,
					nodeOrigin: NODE_ORIGIN,
					onNodeClick: handleNodeClick,
					onNodeMouseEnter: handleNodeMouseEnter,
					onNodeMouseLeave: handleNodeMouseLeave,
					onPaneClick: handlePaneClick,
					onMoveStart: startInteraction,
					onMoveEnd: endInteraction,
					onNodeDragStart: startInteraction,
					onNodeDragStop: endInteraction,
					zoomOnScroll,
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
							position: "top-center",
							className: "w-full pr-6 pointer-events-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex space-x-2 justify-between items-center pointer-events-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex space-x-2 ml-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: menuButtonClassName,
											"aria-label": "Open menu",
											children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base font-medium text-[rgb(var(--ec-page-text))] leading-tight",
												children: title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: menuIconClassName })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
										container: reactFlowWrapperRef.current,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2, {
											className: "min-w-56 bg-[rgb(var(--ec-page-bg))] border border-[rgb(var(--ec-page-border))] rounded-lg shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-200",
											sideOffset: 0,
											align: "end",
											alignOffset: -180,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, { className: "fill-[rgb(var(--ec-page-bg))] stroke-[rgb(var(--ec-page-border))] stroke-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualizerDropdownContent_default, {
												isMermaidView,
												setIsMermaidView,
												animateMessages,
												toggleAnimateMessages,
												hideAnimateMessages: disableMessageAnimation,
												hideChannels,
												toggleChannelsVisibility,
												hasChannels,
												showMinimap,
												setShowMinimap,
												handleFitView,
												searchRef,
												isChatEnabled,
												openChat,
												handleCopyArchitectureCode,
												handleExportVisual,
												setIsShareModalOpen,
												toggleFullScreen,
												openStudioModal,
												isDevMode,
												onSaveLayout: handleSaveLayout,
												onResetLayout: handleResetLayout,
												notesCount: totalNotesCount,
												onOpenNotes: openNotesModal
											})]
										})
									})] })
								}), mode === "full" && showSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-end items-center gap-2",
									children: !isMermaidView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-96",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisualiserSearch_default, {
											ref: searchRef,
											nodes: searchNodes,
											onNodeSelect: handleNodeSelect,
											onClear: handleSearchClear
										})
									})
								})]
							}), links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center -mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-2 pointer-events-none flex items-center h-full",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-4 w-4 text-[rgb(var(--ec-page-text-muted))]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: links.find((link) => window.location.href.includes(link.url))?.url || links[0].url,
											onChange: (e) => {
												if (onNavigate) onNavigate(e.target.value);
												else window.location.href = e.target.value;
											},
											className: "appearance-none pl-7 pr-6 py-0 text-[14px] bg-[rgb(var(--ec-card-bg))] text-[rgb(var(--ec-page-text))] rounded-md border border-[rgb(var(--ec-page-border))] hover:bg-[rgb(var(--ec-page-border)/0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--ec-accent))]",
											style: {
												minWidth: 120,
												height: "26px"
											},
											children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: link.url,
												children: link.label
											}, link.url))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute right-2 pointer-events-none",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-4 h-4 text-[rgb(var(--ec-page-text-muted))]",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M19 9l-7 7-7-7"
												})
											})
										})
									]
								})
							})]
						}),
						includeBackground && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background, {
							color: "var(--ec-bg-dots)",
							gap: 16
						}),
						includeBackground && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, {}),
						showMinimap && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMap, {
							nodeStrokeWidth: 3,
							zoomable: true,
							pannable: true,
							style: MINIMAP_STYLE
						}),
						isFlowVisualization && showFlowWalkthrough && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							position: "bottom-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepWalkthrough_default, {
								nodes: walkthroughNodes,
								edges: walkthroughEdges,
								isFlowVisualization,
								onStepChange: handleStepChange,
								mode
							})
						}),
						isDevMode && hasLayoutChanges && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
							position: "bottom-left",
							style: isFlowVisualization && showFlowWalkthrough ? LAYOUT_CHANGE_PANEL_STYLE_WITH_WALKTHROUGH : LAYOUT_CHANGE_PANEL_STYLE_DEFAULT,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[rgb(var(--ec-card-bg))] border border-[rgb(var(--ec-page-border))] rounded-lg shadow-md px-3 py-2 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[rgb(var(--ec-page-text-muted))]",
									children: "Layout changed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleQuickSaveLayout,
									disabled: isSavingLayout,
									className: "text-xs font-medium text-white bg-[rgb(var(--ec-accent))] hover:bg-[rgb(var(--ec-accent-hover))] px-2 py-1 rounded transition-colors disabled:opacity-50",
									children: isSavingLayout ? "Saving..." : "Save"
								})]
							})
						}),
						includeKey && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendPanel, {
							legend,
							showMinimap,
							onLegendClick: handleLegendClick
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioModal_default, {
					isOpen: isStudioModalOpen || false,
					onClose: () => setIsStudioModalOpen(false)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusModeModal_default, {
					isOpen: focusModeOpen,
					onClose: () => {
						setFocusModeOpen(false);
					},
					initialNodeId: focusedNodeId,
					nodes,
					edges,
					nodeTypes,
					edgeTypes: edgeTypes2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllNotesModal, {
					noteGroups: allNoteGroups,
					isOpen: isNotesModalOpen,
					onClose: () => setIsNotesModalOpen(false),
					nodes
				}),
				isShareModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 bg-black/20 z-40",
					onClick: () => setIsShareModalOpen(false),
					style: { animation: "fadeIn 150ms ease-out" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgb(var(--ec-page-bg))] rounded-lg shadow-xl z-50 w-full max-w-md p-6 border border-[rgb(var(--ec-page-border))]",
					style: { animation: "slideInCenter 250ms ease-out" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideInCenter {
                from { opacity: 0; transform: translate(-50%, -48%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
              }
            ` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-[rgb(var(--ec-page-text))]",
								children: "Share Link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setIsShareModalOpen(false),
								className: "text-[rgb(var(--ec-page-text-muted))] hover:text-[rgb(var(--ec-page-text))] transition-colors",
								"aria-label": "Close modal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-5 h-5 rotate-180" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[rgb(var(--ec-page-text-muted))] mb-4",
							children: "Share this link with your team to let them view this visualization."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								readOnly: true,
								value: typeof window !== "undefined" ? window.location.href : "",
								className: "flex-1 px-3 py-2.5 bg-[rgb(var(--ec-input-bg))] border border-[rgb(var(--ec-input-border))] rounded-md text-[rgb(var(--ec-input-text))] text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ec-accent))]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleCopyShareUrl,
								className: `px-4 py-2.5 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${shareUrlCopySuccess ? "bg-green-500 text-white" : "bg-[rgb(var(--ec-accent))] text-white hover:opacity-90"}`,
								"aria-label": shareUrlCopySuccess ? "Copied!" : "Copy link",
								children: [shareUrlCopySuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shareUrlCopySuccess ? "Copied!" : "Copy" })]
							})]
						})
					]
				})] })
			]
		})
	});
};
var NodeGraph = ({ id, nodes: nodesProp, edges: edgesProp, graph, title: titleProp, href, linkTo = "docs", hrefLabel = "Open in visualizer", includeKey: includeKeyProp, footerLabel, linksToVisualiser = false, links = [], mode = "full", portalId, showFlowWalkthrough = true, showSearch: showSearchProp, zoomOnScroll = false, designId, isChatEnabled = false, maxTextSize, isDevMode = false, resourceKey, animated: animatedProp, focusNodeId, focusRequestId, fitRequestId, onNodeClick, onBuildUrl, onNavigate, onSaveLayout, onResetLayout }) => {
	const graphLayout = (0, import_react.useMemo)(() => {
		if (!graph) return null;
		return layoutGraph(graph.nodes, graph.edges, {
			rankdir: "LR",
			nodesep: 60,
			ranksep: 120
		}, graph.options?.style);
	}, [graph]);
	const nodes = graphLayout?.nodes ?? nodesProp ?? [];
	const edges = graphLayout?.edges ?? edgesProp ?? [];
	const title = titleProp ?? graph?.title;
	const includeKey = includeKeyProp !== void 0 ? includeKeyProp : graph?.options?.legend !== false;
	const showSearch = showSearchProp !== void 0 ? showSearchProp : graph?.options?.search !== false;
	const animated = animatedProp ?? graph?.options?.animated;
	const [elem, setElem] = (0, import_react.useState)(null);
	const [showFooter, setShowFooter] = (0, import_react.useState)(true);
	const [isStudioModalOpen, setIsStudioModalOpen] = (0, import_react.useState)(false);
	(0, import_react.useCallback)(() => {
		setIsStudioModalOpen(true);
	}, []);
	const containerToRenderInto = portalId || `${id}-portal`;
	(0, import_react.useEffect)(() => {
		setElem(document.getElementById(containerToRenderInto));
	}, []);
	(0, import_react.useEffect)(() => {
		if (new URLSearchParams(window.location.search).get("embed") === "true") setShowFooter(false);
	}, []);
	if (!elem) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReactFlowProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeGraphBuilder, {
		edges,
		nodes,
		title,
		linkTo,
		includeKey,
		linksToVisualiser,
		links,
		mode,
		showFlowWalkthrough,
		showSearch,
		zoomOnScroll,
		designId: designId || id,
		isStudioModalOpen,
		setIsStudioModalOpen,
		isChatEnabled,
		maxTextSize,
		isDevMode,
		resourceKey,
		animated,
		focusNodeId,
		focusRequestId,
		fitRequestId,
		onNodeClick,
		onBuildUrl,
		onNavigate,
		onSaveLayout,
		onResetLayout
	}), showFooter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		id: "visualiser-footer",
		children: [footerLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-2 w-full text-left ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: " text-sm no-underline py-2 text-[rgb(var(--ec-page-text-muted))]",
				children: footerLabel
			})
		}), href && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-2 w-full text-right flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: " text-sm underline text-[rgb(var(--ec-page-text))] hover:text-[rgb(var(--ec-accent))]",
				href,
				children: [hrefLabel, " →"]
			})]
		})]
	})] }), elem) });
};
var NodeGraph_default = NodeGraph;
var nodeComponents = {
	event: EventNode_default,
	command: CommandNode_default,
	query: QueryNode_default,
	service: ServiceNode_default,
	agent: Agent_default,
	agentTool: AgentTool_default,
	"agent-tool": AgentTool_default,
	channel: ChannelNode_default,
	note: NoteNode_default,
	externalSystem: ExternalSystem_default,
	data: DataNode_default,
	view: ViewNode_default,
	actor: ActorNode_default,
	field: FieldNode_default,
	custom: Custom_default,
	domain: Domain_default,
	system: System_default,
	"context-actor": ContextActor_default,
	"system-group": SystemGroupNode_default,
	entity: Entity_default,
	flow: Flow_default,
	flowExpanded: FlowExpandedNode_default,
	group: GroupNode_default,
	step: Step_default,
	user: User_default,
	dataProduct: DataProduct_default,
	externalSystem2: ExternalSystem2_default,
	messageGroup: MessageGroupNode_default,
	messageGroupExpanded: MessageGroupExpandedNode_default
};
var nodeConfigs = {
	event: config_default,
	data: config_default2,
	actor: config_default3,
	externalSystem: config_default4,
	field: config_default5
};
var edgeTypes = {
	animated: AnimatedMessageEdge_default,
	"flow-edge": FlowEdge_default,
	multiline: MultilineEdgeLabel_default,
	default: LabelledDefaultEdge,
	smoothstep: LabelledSmoothStepEdge,
	step: LabelledStepEdge
};
//#endregion
export { ACTOR, AGENT, AGENT_TOOL, ActorNode_default as Actor, Agent_default as AgentNode, AgentTool_default as AgentToolNode, AnimatedMessageEdge_default as AnimatedMessageEdge, CHANNEL, COMMAND, ChannelNode_default as Channel, CommandNode_default as Command, ContextActor_default as ContextActorNode, Custom_default as CustomNode, DATA, DataNode_default as Data, DataProduct_default as DataProductNode, Domain_default as DomainNode, ENTITY_TARGET_HANDLE_ID, EVENT, Entity_default as EntityNode, EventNode_default as Event, ExternalSystem_default as ExternalSystem, ExternalSystem2_default as ExternalSystem2Node, FieldNode_default as Field, FlowEdge_default as FlowEdge, FlowExpandedNode_default as FlowExpandedNode, Flow_default as FlowNode, FocusModeModal_default as FocusModeModal, GroupNode_default as GroupNode, LARGE_GRAPH_EDGE_THRESHOLD, LARGE_GRAPH_NODE_THRESHOLD, LARGE_GRAPH_RANKER, LabelledDefaultEdge, LabelledSmoothStepEdge, LabelledStepEdge, MESSAGE, MermaidView_default as MermaidView, MessageGroupExpandedNode_default as MessageGroupExpandedNode, MessageGroupNode_default as MessageGroupNode, MultilineEdgeLabel_default as MultilineEdgeLabel, NodeContextMenu_default as NodeContextMenu, NodeGraph_default as NodeGraph, NoteNode_default as Note, NotesIndicator, OwnerIndicator, QUERY, QueryNode_default as Query, SERVICE, ServiceNode_default as Service, Step_default as StepNode, StepWalkthrough_default as StepWalkthrough, SystemGroupNode_default as SystemGroupNode, System_default as SystemNode, User_default as UserNode, VIEW, ViewNode_default as View, VisualiserSearch_default as VisualiserSearch, config_default3 as actorConfig, buildNodeData, calculatedNodes, convertToMermaid, createDagreGraph, createEdge, createNode, config_default2 as dataNodeConfig, edgeTypes, config_default as eventConfig, exportNodeGraphForStudio, config_default4 as externalSystemConfig, config_default5 as fieldConfig, generateIdForNode, generateIdForNodes, generatedIdForEdge, getColorFromString, getEdgeLabelForMessageAsSource, getEdgeLabelForServiceAsTarget, getNestedEntityProperties, getNodesAndEdgesFromDagre, getPropertyTypeLabel, layoutDagreGraph, layoutGraph, nodeComponents, nodeConfigs, normalizeOwners, selectDagreRanker };
