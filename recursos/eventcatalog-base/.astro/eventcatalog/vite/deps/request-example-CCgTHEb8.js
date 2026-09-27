import { n as __exportAll } from "./rolldown-runtime-B-lAHAz2.js";
import { Tt as toRaw } from "./vue.runtime.esm-bundler-BqKG0iLx.js";
//#region node_modules/@scalar/helpers/dist/object/is-object.js
/**
* Returns true if the provided value is a record object
* (i.e. not null, not an array, and has an actual object as the prototype).
*
* Differs from the previous isObject in that it returns false for Date,
* RegExp, Error, Map, Set, WeakMap, WeakSet, Promise, and other non-plain objects.
*
* | Value | Result |
* | :--- | :--- |
* | `isObject({})` | `true` |
* | `isObject({ a: 1 })` | `true` |
* | `isObject([])` | `false` (Array) |
* | `isObject(null)` | `false` |
* | `isObject(123)` | `false` |
* | `isObject('string')` | `false` |
* | `isObject(new Error('test'))` | `false` |
* | `isObject(new Date())` | `false` |
* | `isObject(Object.create(null))` | `true` |
*/
var isObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
};
/**
* A cheaper version of isObject if you do not care about arrays, errors, and dates.
*
* This helper is useful when you only need to guard against `null` and primitives.
*
* | Value | Result |
* | :--- | :--- |
* | `isObjectLike({})` | `true` |
* | `isObjectLike([])` | `true` (Array) |
* | `isObjectLike(new Date())` | `true` |
* | `isObjectLike(null)` | `false` |
* | `isObjectLike(123)` | `false` |
* | `isObjectLike('string')` | `false` |
*/
var isObjectLike = (value) => typeof value === "object" && value !== null;
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-resolved-ref.js
/**
* Keys the store writes on an externalized stub for its own bookkeeping.
*
* They describe the stub — whether it is shared across documents, whether its chunk has loaded — not the
* node it points at.
*/
var STUB_BOOKKEEPING_KEYS = /* @__PURE__ */ new Set(["$global", "$status"]);
var isReferenceNode = (value) => typeof value === "object" && value !== null && "$ref" in value;
/**
* Whether a reference is pure indirection: a `$ref` and the store's own bookkeeping, nothing more.
*
* A reference that carries anything else is a schema in its own right — an `$id` opens a schema
* resource, `$defs` and `$dynamicAnchor` bind a generic's type parameter, and `description` annotates
* the target — so it stays its own hop and the caller resolves it as it descends, the way it always
* has. Collapsing such a node into the one it points at merges two schema resources into one, and the
* `$dynamicRef` in the inner one then has no outer scope left to bind against.
*/
var isPassThroughReference = (node) => {
	for (const key of Object.keys(node)) if (key !== "$ref" && key !== "$ref-value" && !STUB_BOOKKEEPING_KEYS.has(key)) return false;
	return true;
};
/**
* Follow `$ref-value` onward for as long as it lands on another reference that is pure indirection.
*
* A reference can point at a second reference. `resolve()` on a static or SSR workspace leaves exactly
* that behind: the component stays in the document as a `{ $ref: '#/x-ext/<hash>', $global: true }` stub
* and the content lives under `x-ext`, so `#/components/schemas/User` reaches the schema in two hops.
* Stopping at the first hop hands consumers the stub, a node with no `type` and no `properties`, which
* renders as an empty, non-expandable schema.
*
* Stops at a reference that has not been resolved yet and hands that node back, which is what a single
* hop onto an unresolved reference produces today. `seen` terminates a reference cycle on the node it
* comes back around to rather than looping.
*
* @param value - The value the first hop produced.
* @param seen - References already crossed, including the node the chain started at.
*/
var followPassThroughReferences = (value, seen) => {
	let current = value;
	while (isReferenceNode(current) && isPassThroughReference(current) && !seen.has(current)) {
		const next = current["$ref-value"];
		if (next === void 0) return current;
		seen.add(current);
		current = next;
	}
	return current;
};
var defaultTransform = (node) => {
	const value = node["$ref-value"];
	if (value === void 0) return;
	return followPassThroughReferences(value, /* @__PURE__ */ new Set([node]));
};
/**
* Transform for getResolvedRef that merges sibling properties of a $ref wrapper
* onto the dereferenced value. Wrapper siblings take precedence over the resolved value,
* which matches OpenAPI 3.1 semantics where annotations alongside $ref override the target.
*/
var mergeSiblingReferences = (node) => {
	const { "$ref-value": value, ...rest } = node;
	const target = value === void 0 ? void 0 : followPassThroughReferences(value, /* @__PURE__ */ new Set([node]));
	if (!isObject(target)) return rest;
	const merged = {
		...target,
		...rest
	};
	if (Object.hasOwn(target, "$ref-value") && !Object.hasOwn(merged, "$ref-value")) Object.defineProperty(merged, "$ref-value", {
		value: target["$ref-value"],
		enumerable: false,
		configurable: true,
		writable: true
	});
	return merged;
};
function getResolvedRef(node, transform = defaultTransform) {
	if (typeof node === "object" && node !== null && "$ref" in node) return transform(node);
	return node;
}
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/type-guards.js
var isObjectSchema = (schema) => {
	return "type" in schema && (schema.type === "object" || Array.isArray(schema.type) && schema.type.includes("object"));
};
var isArraySchema = (schema) => {
	return "type" in schema && (schema.type === "array" || Array.isArray(schema.type) && schema.type.includes("array"));
};
var isStringSchema = (schema) => {
	return "type" in schema && (schema.type === "string" || Array.isArray(schema.type) && schema.type.includes("string"));
};
var isNumberSchema = (schema) => {
	return "type" in schema && (schema.type === "number" || schema.type === "integer" || Array.isArray(schema.type) && schema.type.includes("number") || Array.isArray(schema.type) && schema.type.includes("integer"));
};
/** Special type guard to remove our internal type */
var isSchema = (schema) => schema !== void 0 && "type" in schema;
/**
* Type guard to check if the given parameter is a ParameterWithContentObject,
* i.e., it has a 'content' property defined.
*/
var isContentTypeParameterObject = (parameter) => {
	return "content" in parameter && parameter.content !== void 0;
};
//#endregion
//#region node_modules/@scalar/helpers/dist/http/mime-type.js
var HTTP_TOKEN_CODE_POINT = /^[!#$%&'*+\-.^_`|~A-Za-z0-9]+$/;
var quoteParameterValue = (value) => {
	return `"${value.replaceAll(/(["\\])/g, "\\$1")}"`;
};
var parseParameter = (entry) => {
	const separator = entry.indexOf("=");
	if (separator === -1) return null;
	const rawName = entry.slice(0, separator).trim().toLowerCase();
	if (!rawName || !HTTP_TOKEN_CODE_POINT.test(rawName)) return null;
	const rawValue = entry.slice(separator + 1).trim();
	if (!rawValue) return null;
	if (rawValue.startsWith("\"") && rawValue.endsWith("\"") && rawValue.length >= 2) return [rawName, rawValue.slice(1, -1).replaceAll(/\\(["\\])/g, "$1")];
	return [rawName, rawValue];
};
var parseEssence = (value) => {
	const [rawType = "", rawSubtype = ""] = value.split("/", 2);
	const type = rawType.trim().toLowerCase();
	const subtype = rawSubtype.trim().toLowerCase();
	if (!type || !subtype || !HTTP_TOKEN_CODE_POINT.test(type) || !HTTP_TOKEN_CODE_POINT.test(subtype)) throw new Error(`Invalid MIME type: "${value}"`);
	return {
		essence: `${type}/${subtype}`,
		type,
		subtype
	};
};
/**
* Parses a MIME type value into a normalized object with essence and parameters.
*
* This intentionally covers the subset we need in Scalar packages:
* essence, parameters, and stable stringification.
*/
var parseMimeType = (value = "text/plain") => {
	const [essencePart = "", ...parameterParts] = value.split(";");
	let parsedEssence;
	try {
		parsedEssence = parseEssence(essencePart);
	} catch {
		parsedEssence = parseEssence("text/plain");
	}
	const { essence, type, subtype } = parsedEssence;
	const parameters = /* @__PURE__ */ new Map();
	parameterParts.forEach((entry) => {
		const parsed = parseParameter(entry);
		if (!parsed) return;
		const [name, parameterValue] = parsed;
		parameters.set(name, parameterValue);
	});
	const toString = () => {
		const serializedParameters = Array.from(parameters.entries()).map(([name, parameterValue]) => {
			return `${name}=${HTTP_TOKEN_CODE_POINT.test(parameterValue) ? parameterValue : quoteParameterValue(parameterValue)}`;
		});
		return serializedParameters.length ? `${essence}; ${serializedParameters.join("; ")}` : essence;
	};
	return {
		essence,
		type,
		subtype,
		parameters,
		toString
	};
};
//#endregion
//#region node_modules/@scalar/helpers/dist/http/is-xml-media-type.js
/** Recognize XML media types, including structured suffixes and content-type parameters. */
var isXmlMediaType = (contentType) => {
	const { subtype } = parseMimeType(contentType);
	return subtype === "xml" || subtype.endsWith("+xml");
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-example-value.js
/** Select an explicit example without confusing false, zero, null, or empty text with absence. */
var getExampleValue = (input) => {
	const example = getResolvedRef(input);
	if (example?.serializedValue !== void 0) return {
		source: "serialized",
		value: example.serializedValue
	};
	if (example?.dataValue !== void 0) return {
		source: "data",
		value: example.dataValue
	};
	if (example?.value !== void 0) return {
		source: "value",
		value: example.value
	};
};
/** Preserve explicit wire text for any media type, or serialize structured JSON data. */
var getExplicitExampleText = (example, contentType, indent) => {
	if (example?.source === "serialized") return example.value;
	const { essence, subtype } = parseMimeType(contentType);
	if (example?.source === "data" && (essence === "application/json" || subtype.endsWith("+json"))) return JSON.stringify(example.value, null, indent);
};
//#endregion
//#region node_modules/@scalar/helpers/dist/json/unescape-json-pointer.js
/**
* Unescape JSON pointer
*
* Examples:
* /foo~1bar~0baz -> /foo/bar~baz
*/
var unescapeJsonPointer = (uri) => decodeURI(uri.replace(/~1/g, "/").replace(/~0/g, "~"));
//#endregion
//#region node_modules/@scalar/helpers/dist/json/parse-json-pointer-segments.js
/**
* Translate `/paths/~1test` to `['paths', '/test']`
*/
var parseJsonPointerSegments = (path) => path.split("/").slice(1).map(unescapeJsonPointer);
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/convert-to-local-ref.js
/**
* Translates a JSON Reference ($ref) to a local object path within the root schema.
*
* @param ref - The JSON Reference string (e.g., "#/foo/bar", "other.json#/baz", "other.json#anchor")
* @param currentContext - The current base context (usually the $id of the current schema or parent)
* @param schemas - A map of schema identifiers ($id, $anchor) to their local object paths
* @returns The local object path as a string, or undefined if the reference cannot be resolved
*/
var convertToLocalRef = (ref, currentContext, schemas) => {
	const [baseUrl, pathOrAnchor] = ref.split("#", 2);
	if (baseUrl) {
		if (!schemas.has(baseUrl)) return;
		if (!pathOrAnchor) return schemas.get(baseUrl);
		if (pathOrAnchor.startsWith("/")) {
			const rootPath = schemas.get(baseUrl);
			return rootPath ? `${rootPath}${pathOrAnchor}` : pathOrAnchor.slice(1);
		}
		return schemas.get(`${baseUrl}#${pathOrAnchor}`);
	}
	if (pathOrAnchor) {
		if (pathOrAnchor.startsWith("/")) return pathOrAnchor.slice(1);
		return schemas.get(`${currentContext}#${pathOrAnchor}`);
	}
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/get-schemas.js
/**
* Retrieves the $id property from the input object if it exists and is a string.
*
* @param input - The object to extract the $id from.
* @returns The $id string if present, otherwise undefined.
*/
var getId = (input) => {
	if (input && typeof input === "object" && input["$id"] && typeof input["$id"] === "string") return input["$id"];
};
/**
* Joins an array of path segments into a single string separated by '/'.
*
* @param segments - The array of path segments.
* @returns The joined path string.
*/
var getPath = (segments) => {
	return segments.join("/");
};
/**
* Recursively traverses the input object to collect all schemas identified by $id and $anchor properties.
*
* - If an object has a $id property, it is added to the map with its $id as the key.
* - If an object has a $anchor property, it is added to the map with a key composed of the current base and the anchor.
* - The function performs a depth-first search (DFS) through all nested objects.
*
* @param input - The input object to traverse.
* @param base - The current base URI, used for resolving anchors.
* @param map - The map collecting found schemas.
* @returns A map of schema identifiers to their corresponding objects.
*/
var getSchemas = (input, base = "", segments = [], map = /* @__PURE__ */ new Map(), visited = /* @__PURE__ */ new WeakSet()) => {
	if (typeof input !== "object" || input === null) return map;
	if (visited.has(input)) return map;
	visited.add(input);
	const id = getId(input);
	if (id) map.set(id, getPath(segments));
	const newBase = id ?? base;
	if (input["$anchor"] && typeof input["$anchor"] === "string") map.set(`${newBase}#${input["$anchor"]}`, getPath(segments));
	for (const key in input) if (typeof input[key] === "object" && input[key] !== null) getSchemas(input[key], newBase, [...segments, key], map, visited);
	return map;
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/get-value-by-path.js
/**
* Traverses an object using an array of string segments (path keys) and returns
* the value at the specified path along with its context (id if available).
*
* @param target - The root object to traverse.
* @param segments - An array of string keys representing the path to traverse.
* @returns An object containing the final context (id or previous context) and the value at the path.
*
* @example
* const obj = {
*   foo: {
*     bar: {
*       baz: 42
*     }
*   }
* };
* // Returns: { context: '', value: 42 }
* getValueByPath(obj, ['foo', 'bar', 'baz']);
*/
function getValueByPath(target, segments) {
	return segments.reduce((acc, key) => {
		if (acc.value === void 0) return {
			context: "",
			value: void 0
		};
		if (typeof acc.value !== "object" || acc.value === null || !Object.hasOwn(acc.value, key)) return {
			context: "",
			value: void 0
		};
		return {
			context: getId(acc.value) ?? acc.context,
			value: acc.value?.[key]
		};
	}, {
		context: "",
		value: target
	});
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/json-path-utils.js
/**
* Creates a nested path in an object from an array of path segments.
* Only creates intermediate objects/arrays if they don't already exist.
*
* @param obj - The target object to create the path in
* @param segments - Array of path segments to create
* @returns The final nested object/array at the end of the path
*
* @example
* ```ts
* const obj = {}
* createPathFromSegments(obj, ['components', 'schemas', 'User'])
* // Creates: { components: { schemas: { User: {} } } }
*
* createPathFromSegments(obj, ['items', '0', 'name'])
* // Creates: { items: [{ name: {} }] }
* ```
*/
function createPathFromSegments(obj, segments) {
	return segments.reduce((acc, part) => {
		if (!Object.hasOwn(acc, part) || acc[part] === void 0) {
			const value = isNaN(Number(part)) ? {} : [];
			if (part === "__proto__") Object.defineProperty(acc, part, {
				value,
				enumerable: true,
				configurable: true,
				writable: true
			});
			else acc[part] = value;
		}
		return acc[part];
	}, obj);
}
//#endregion
//#region node_modules/@scalar/json-magic/dist/magic-proxy/proxy.js
var isMagicProxy = Symbol("isMagicProxy");
var magicProxyTarget = Symbol("magicProxyTarget");
var REF_VALUE = "$ref-value";
var REF_KEY = "$ref";
/**
* Creates a "magic" proxy for a given object or array, enabling transparent access to
* JSON Reference ($ref) values as if they were directly present on the object.
*
* Features:
* - If an object contains a `$ref` property, accessing the special `$ref-value` property will resolve and return the referenced value from the root object.
* - All nested objects and arrays are recursively wrapped in proxies, so reference resolution works at any depth.
* - Properties starting with `__scalar_` are considered internal and are hidden by default: they return undefined on access, are excluded from enumeration, and `'in'` checks return false. This can be overridden with the `showInternal` option.
* - Setting, deleting, and enumerating properties works as expected, including for proxied references.
* - Ensures referential stability by caching proxies for the same target object.
*
* @param target - The object or array to wrap in a magic proxy
* @param options - Optional settings (e.g., showInternal to expose internal properties)
* @param args - Internal arguments for advanced usage (root object, proxy/cache maps, current context)
* @returns A proxied version of the input object/array with magic $ref-value support
*
* @example
* const input = {
*   definitions: {
*     foo: { bar: 123 }
*   },
*   refObj: { $ref: '#/definitions/foo' },
*   __scalar_internal: 'hidden property'
* }
* const proxy = createMagicProxy(input)
*
* // Accessing proxy.refObj['$ref-value'] will resolve to { bar: 123 }
* console.log(proxy.refObj['$ref-value']) // { bar: 123 }
*
* // Properties starting with __scalar_ are hidden
* console.log(proxy.__scalar_internal) // undefined
* console.log('__scalar_internal' in proxy) // false
* console.log(Object.keys(proxy)) // ['definitions', 'refObj'] (no '__scalar_internal')
*
* // Setting and deleting properties works as expected
* proxy.refObj.extra = 'hello'
* delete proxy.refObj.extra
*/
var createMagicProxy = (target, options, args = {
	root: target,
	proxyCache: /* @__PURE__ */ new WeakMap(),
	cache: /* @__PURE__ */ new Map(),
	schemas: getSchemas(target, "", [], new Map(options?.documentUri ? [[options.documentUri, ""]] : [])),
	currentContext: ""
}) => {
	if (!isObject(target) && !Array.isArray(target)) return target;
	if (args.proxyCache.has(target)) return args.proxyCache.get(target);
	const proxied = new Proxy(target, {
		/**
		* Proxy "get" trap for magic proxy.
		* - If accessing the special isMagicProxy symbol, return true to identify proxy.
		* - If accessing the magicProxyTarget symbol, return the original target object.
		* - Hide properties starting with __scalar_ by returning undefined.
		* - If accessing "$ref-value" and the object has a local $ref, resolve and return the referenced value as a new magic proxy.
		* - For all other properties, recursively wrap the returned value in a magic proxy (if applicable).
		*/
		get(target, prop, receiver) {
			if (prop === isMagicProxy) return true;
			if (prop === magicProxyTarget) return target;
			if (typeof prop === "string" && prop.startsWith("__scalar_") && !options?.showInternal) return;
			const ref = Reflect.get(target, REF_KEY, receiver);
			const id = getId(target);
			if (prop === REF_VALUE && typeof ref === "string") {
				if (args.cache.has(ref)) return args.cache.get(ref);
				const path = convertToLocalRef(ref, id ?? args.currentContext, args.schemas);
				if (path === void 0) return;
				const resolvedValue = getValueByPath(args.root, parseJsonPointerSegments(`/${path}`));
				if (isMagicProxyObject(resolvedValue.value)) return resolvedValue.value;
				const proxiedValue = createMagicProxy(resolvedValue.value, options, {
					...args,
					currentContext: resolvedValue.context
				});
				args.cache.set(ref, proxiedValue);
				return proxiedValue;
			}
			const value = Reflect.get(target, prop, receiver);
			if (isMagicProxyObject(value)) return value;
			return createMagicProxy(value, options, {
				...args,
				currentContext: id ?? args.currentContext
			});
		},
		/**
		* Proxy "set" trap for magic proxy.
		* Allows setting properties on the proxied object.
		* This will update the underlying target object.
		*
		* Note: it will not update if the property starts with __scalar_
		* Those will be considered private properties by the proxy
		*/
		set(target, prop, newValue, receiver) {
			const ref = Reflect.get(target, REF_KEY, receiver);
			if (typeof prop === "string" && prop.startsWith("__scalar_") && !options?.showInternal) return true;
			if (prop === REF_VALUE && typeof ref === "string") {
				const path = convertToLocalRef(ref, getId(target) ?? args.currentContext, args.schemas);
				if (path === void 0) return;
				const segments = parseJsonPointerSegments(`/${path}`);
				if (segments.length === 0) return false;
				const getParentNode = () => getValueByPath(args.root, segments.slice(0, -1)).value;
				if (getParentNode() === void 0) {
					createPathFromSegments(args.root, segments.slice(0, -1));
					console.warn(`Trying to set $ref-value for invalid reference: ${ref}\n\nPlease fix your input file to fix this issue.`);
				}
				const parent = getParentNode();
				const key = segments.at(-1);
				if (key === "__proto__") Object.defineProperty(parent, key, {
					value: newValue,
					enumerable: true,
					configurable: true,
					writable: true
				});
				else parent[key] = newValue;
				return true;
			}
			return Reflect.set(target, prop, newValue, receiver);
		},
		/**
		* Proxy "deleteProperty" trap for magic proxy.
		* Allows deleting properties from the proxied object.
		* This will update the underlying target object.
		*/
		deleteProperty(target, prop) {
			return Reflect.deleteProperty(target, prop);
		},
		/**
		* Proxy "has" trap for magic proxy.
		* - Pretend that "$ref-value" exists if "$ref" exists on the target.
		*   This allows expressions like `"$ref-value" in obj` to return true for objects with a $ref,
		*   even though "$ref-value" is a virtual property provided by the proxy.
		* - Hide properties starting with __scalar_ by returning false.
		* - For all other properties, defer to the default Reflect.has behavior.
		*/
		has(target, prop) {
			if (typeof prop === "string" && prop.startsWith("__scalar_") && !options?.showInternal) return false;
			if (prop === REF_VALUE && REF_KEY in target) return true;
			return Reflect.has(target, prop);
		},
		/**
		* Proxy "ownKeys" trap for magic proxy.
		* - Returns the list of own property keys for the proxied object.
		* - If the object has a "$ref" property, ensures that "$ref-value" is also included in the keys,
		*   even though "$ref-value" is a virtual property provided by the proxy.
		*   This allows Object.keys, Reflect.ownKeys, etc. to include "$ref-value" for objects with $ref.
		* - Filters out properties starting with __scalar_.
		*/
		ownKeys(target) {
			const filteredKeys = Reflect.ownKeys(target).filter((key) => typeof key !== "string" || !(key.startsWith("__scalar_") && !options?.showInternal));
			if (REF_KEY in target && !filteredKeys.includes(REF_VALUE)) filteredKeys.push(REF_VALUE);
			return filteredKeys;
		},
		/**
		* Proxy "getOwnPropertyDescriptor" trap for magic proxy.
		* - For the virtual "$ref-value" property, returns a descriptor that makes it appear as a regular property.
		* - Hide properties starting with __scalar_ by returning undefined.
		* - For all other properties, delegates to the default Reflect.getOwnPropertyDescriptor behavior.
		* - This ensures that Object.getOwnPropertyDescriptor and similar methods work correctly with the virtual property.
		*/
		getOwnPropertyDescriptor(target, prop) {
			if (typeof prop === "string" && prop.startsWith("__scalar_") && !options?.showInternal) return;
			const ref = Reflect.get(target, REF_KEY);
			if (prop === REF_VALUE && typeof ref === "string") return {
				configurable: true,
				enumerable: true,
				value: void 0,
				writable: false
			};
			return Reflect.getOwnPropertyDescriptor(target, prop);
		}
	});
	args.proxyCache.set(target, proxied);
	return proxied;
};
var isMagicProxyObject = (obj) => {
	return typeof obj === "object" && obj !== null && obj[isMagicProxy] === true;
};
/**
* Gets the raw (non-proxied) version of an object created by createMagicProxy.
* This is useful when you need to access the original object without the magic proxy wrapper.
*
* @param obj - The magic proxy object to get the raw version of
* @returns The raw version of the object
* @example
* const proxy = createMagicProxy({ foo: { $ref: '#/bar' } })
* const raw = getRaw(proxy) // { foo: { $ref: '#/bar' } }
*/
function getRaw(obj) {
	if (typeof obj !== "object" || obj === null) return obj;
	if (obj[isMagicProxy]) return obj[magicProxyTarget];
	return obj;
}
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/detect-changes-proxy.js
var isDetectChangesProxy = Symbol("isDetectChangesProxy");
var detectChangesProxyTarget = Symbol("detectChangesProxyTarget");
/** Build the `string[]` a hook expects, from the chain of links above the property being written. */
var materializePath = (parent, prop) => {
	let depth = 1;
	for (let link = parent; link !== void 0; link = link.parent) depth++;
	const path = new Array(depth);
	path[--depth] = prop;
	for (let link = parent; link !== void 0; link = link.parent) path[--depth] = link.key;
	return path;
};
/** Turn the caller-supplied starting path into the link chain the proxies carry. */
var toPathLink = (path) => {
	let link = void 0;
	for (const key of path) link = {
		parent: link,
		key
	};
	return link;
};
var createProxy = (target, options, proxyCache, pathLink) => {
	if (!isObject(target) && !Array.isArray(target)) return target;
	const cached = proxyCache.get(target);
	if (cached !== void 0) return cached;
	const proxy = new Proxy(target, {
		get(target, prop, receiver) {
			if (prop === isDetectChangesProxy) return true;
			if (prop === detectChangesProxyTarget) return target;
			const value = Reflect.get(target, prop, receiver);
			if (value === null || typeof value !== "object") return value;
			const cachedChild = proxyCache.get(value);
			if (cachedChild !== void 0) return cachedChild;
			if (isDetectChangesProxyObject(value)) return value;
			return createProxy(value, options, proxyCache, {
				parent: pathLink,
				key: String(prop)
			});
		},
		set(target, prop, value, receiver) {
			const onBeforeChange = options?.hooks?.onBeforeChange;
			const onAfterChange = options?.hooks?.onAfterChange;
			const path = onBeforeChange || onAfterChange ? materializePath(pathLink, String(prop)) : void 0;
			if (path) onBeforeChange?.(path, value);
			const result = Reflect.set(target, prop, value, receiver);
			if (path) onAfterChange?.(path, value);
			return result;
		},
		deleteProperty(target, prop) {
			const onBeforeChange = options?.hooks?.onBeforeChange;
			const onAfterChange = options?.hooks?.onAfterChange;
			const path = onBeforeChange || onAfterChange ? materializePath(pathLink, String(prop)) : void 0;
			if (path) onBeforeChange?.(path);
			const result = Reflect.deleteProperty(target, prop);
			if (path) onAfterChange?.(path);
			return result;
		}
	});
	proxyCache.set(target, proxy);
	return proxy;
};
/**
* createDetectChangesProxy - Creates a proxy for an object or array that detects and triggers hooks on changes.
*
* This proxy enables detection of set operations, triggering optional hooks (onBeforeChange, onAfterChange) with the path and value changed.
* The proxy can be applied recursively to all nested objects/arrays, and caches proxies to prevent creating multiple proxies for the same object.
*
* Example usage:
*
* const obj = { foo: 1, bar: { baz: 2 } };
* const proxy = createDetectChangesProxy(obj, {
*   hooks: {
*     onBeforeChange: (path, value) => console.log('Before', path, value),
*     onAfterChange: (path, value) => console.log('After', path, value),
*   }
* });
* proxy.foo = 42; // Console: Before ['foo'] '42', After ['foo'] '42'
* proxy.bar.baz = 99; // Console: Before ['bar', 'baz'] '99', After ['bar', 'baz'] '99'
*
* @param target The target object or array to wrap in a proxy
* @param options Optional: hooks for change detection
* @param args Internal: proxy cache and current property path (used for recursion)
* @returns The proxied object/array with change detection capabilities
*/
var createDetectChangesProxy = (target, options, args = {
	proxyCache: /* @__PURE__ */ new WeakMap(),
	path: []
}) => createProxy(target, options, args.proxyCache, toPathLink(args.path));
var isDetectChangesProxyObject = (obj) => {
	return typeof obj === "object" && obj !== null && obj[isDetectChangesProxy] === true;
};
/**
* Returns the raw/original (non-proxy) object if the passed object is a detect-changes proxy.
* If the object is not a proxy, it returns the same object.
*
* @example
* const proxy = createDetectChangesProxy({ a: 1 });
* const raw = unpackDetectChangesProxy(proxy); // Gets the original object { a: 1 }
* const notProxy = { b: 2 };
* const stillRaw = unpackDetectChangesProxy(notProxy); // Returns { b: 2 }, unchanged
*/
var unpackDetectChangesProxy = (obj) => {
	if (typeof obj !== "object" || obj === null) return obj;
	if (obj[isDetectChangesProxy]) return obj[detectChangesProxyTarget];
	return obj;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/overrides-proxy.js
var isOverridesProxy = Symbol("isOverridesProxy");
var getOverridesTarget = Symbol("getOverridesTarget");
/**
* Creates a proxy object that overlays "overrides" on top of a target object.
*
* - When reading a property, if an override exists, it is returned; otherwise, the original value is returned.
* - When writing to a property, if an override exists, it is updated; otherwise, the original object is updated.
* - This works recursively for nested objects, so overrides can be deeply partial.
* - Special symbols are used to identify the proxy and to access the original target.
*
* @template T - The type of the target object.
* @param target - The original object to proxy.
* @param overrides - An optional object containing override values (deeply partial).
* @returns A proxy object that reflects overrides on top of the target.
*
* @example
* const original = { a: 1, b: { c: 2 } }
* const overrides = { b: { c: 42 } }
* const proxy = createOverridesProxy(original, { overrides })
*
* console.log(proxy.a) // 1 (from original)
* console.log(proxy.b.c) // 42 (from overrides)
*
* proxy.a = 100
* console.log(original.a) // 100
*
* proxy.b.c = 99
* console.log(overrides.b.c) // 99
*/
var createOverridesProxy = (target, options, args = { cache: /* @__PURE__ */ new WeakMap() }) => {
	if (!target || typeof target !== "object") return target;
	if (args.cache.has(target)) return args.cache.get(target);
	const { overrides } = options ?? {};
	const proxy = new Proxy(target, {
		get(target, prop, receiver) {
			if (prop === isOverridesProxy) return true;
			if (prop === getOverridesTarget) return target;
			const value = Reflect.get(target, prop, receiver);
			if (isOverridesProxyObject(value)) return value;
			if (!isObject(value)) return Reflect.get(overrides ?? {}, prop) ?? value;
			return createOverridesProxy(value, { overrides: Reflect.get(overrides ?? {}, prop) }, args);
		},
		set(target, prop, value, receiver) {
			if (prop === isOverridesProxy || prop === getOverridesTarget) return false;
			if (overrides && Reflect.has(overrides, prop) && overrides && typeof overrides === "object") {
				overrides[prop] = value;
				return true;
			}
			return Reflect.set(target, prop, value, receiver);
		}
	});
	args.cache.set(target, proxy);
	return proxy;
};
var isOverridesProxyObject = (obj) => {
	return typeof obj === "object" && obj !== null && obj[isOverridesProxy] === true;
};
/**
* Unpacks an object from the overrides proxy, returning the original (unproxied) target object.
* If the input is not an overrides proxy, returns the object as-is.
*
* @param input - The potentially proxied object
* @returns The original unproxied target object or the input object
*/
function unpackOverridesProxy(input) {
	if (typeof input === "object" && input !== null && input[isOverridesProxy]) return input[getOverridesTarget];
	return input;
}
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/unpack-proxy.js
/**
* Unpacks special vue reactivity & override & detect-changes & magic proxy from an input object or array,
* returning the "raw" plain object or array.
*
* This function recursively traverses the input object or array, removing any proxies
* (e.g. Vue reactivity proxies, magic proxies, override proxies, detect-changes proxies)
* to obtain and return the underlying "raw" plain object or array.
*
* The recursion is controlled by the `depth` parameter. If `depth` is `null`, unlimited depth is allowed.
* If a proxied object is detected and unwrapped at non-root level, a warning is logged.
*
* @param input - The object or array (possibly deeply nested or proxied) to recursively unwrap.
* @param depth - Optional, limits recursion depth. `null` means unlimited depth (default is 1).
* @returns - A plain object or array with all proxies removed up to the specified depth.
*/
/**
* Strips the known proxies (Vue reactivity, overrides, detect-changes, magic) from a value without
* touching its properties, returning the raw object underneath.
*
* Use this when the raw object is wanted as an identity — a cache key or a cycle guard — rather than as
* data. `unpackProxyObject` walks the value's own properties and writes each one back, which costs a
* read and a write per property and mutates the object it unpacks; callers that only compare identities
* pay for neither.
*/
var unpackProxyShallow = (input) => {
	if (typeof input !== "object" || input === null) return input;
	return unpackDetectChangesProxy(toRaw(getRaw(unpackOverridesProxy(input))));
};
var unpackProxyObject = (input, { depth = 0 } = {}) => {
	const dfs = (value, currentDepth = 0) => {
		if (typeof value !== "object" || value === null) return value;
		const raw = unpackDetectChangesProxy(toRaw(getRaw(unpackOverridesProxy(value))));
		if (depth !== null && currentDepth >= depth) return raw;
		if (currentDepth !== 0 && raw !== value) {
			console.warn("%c⚠ Warning:%c You tried to assign a proxied object (depth: %d).\n%c💡 Tip:%c Pass a plain object instead — wrapping a proxy inside another proxy may cause weird bugs.\n%c🔍 Debug Info:%c The problematic value is shown below:", "background: #fdd835; color: #000; font-weight: bold; padding: 2px 4px; border-radius: 3px;", "color: inherit;", currentDepth, "color: #00bfa5; font-weight: bold;", "color: inherit;", "color: #03a9f4; font-weight: bold;", "color: inherit;", value, input);
			console.groupCollapsed("%c📜 Proxy assignment trace", "color: #9c27b0; font-weight: bold;");
			console.trace({
				value,
				raw
			});
			console.groupEnd();
		}
		Object.entries(raw).forEach(([key, value]) => {
			const propertyResult = dfs(value, currentDepth + 1);
			if (!Reflect.set(raw, key, propertyResult)) console.warn("%c🚫 Readonly Property Error:%c Failed to set property \"%s\" on object.\n%c💡 Tip:%c This property is readonly or non-configurable. You cannot unpack a readonly property — the value was not updated.\n%c🔍 Debug Info:%c Property: %s | Value: %o | Object: %o", "background: #f44336; color: #fff; font-weight: bold; padding: 2px 4px; border-radius: 3px;", "color: inherit;", key, "color: #00bfa5; font-weight: bold;", "color: inherit;", "color: #03a9f4; font-weight: bold;", "color: inherit;", key, propertyResult, raw);
		});
		return raw;
	};
	return dfs(input);
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-resolved-ref-deep.js
/**
* Recursively resolves all $ref objects in a data structure to their actual values.
* Traverses through objects, arrays, and nested structures to find and resolve
* any $ref references at any depth level.
*
* Handles circular references gracefully by detecting them and returning '[circular]'
* to prevent infinite loops.
*/
var getResolvedRefDeep = (node) => {
	const visited = /* @__PURE__ */ new WeakSet();
	const cachedResults = /* @__PURE__ */ new WeakMap();
	const resolveNode = (current) => {
		if (!isObject(current) && !Array.isArray(current)) return current;
		const rawValue = unpackProxyShallow(current);
		if (cachedResults.has(rawValue)) return cachedResults.get(rawValue);
		if (visited.has(rawValue)) return "[circular]";
		visited.add(rawValue);
		if ("$ref" in current) {
			const resolved = getResolvedRef(current);
			const result = resolveNode(resolved);
			let merged = void 0;
			if (isObject(result)) for (const key of Object.keys(current)) {
				if (key === "$ref" || key === "$ref-value") continue;
				merged ??= { ...result };
				merged[key] = resolveNode(current[key]);
			}
			const value = merged ?? result;
			cachedResults.set(rawValue, value);
			return value;
		}
		if (Array.isArray(current)) {
			const result = new Array(current.length);
			for (let index = 0; index < current.length; index++) result[index] = resolveNode(current[index]);
			cachedResults.set(rawValue, result);
			return result;
		}
		const result = {};
		for (const key of Object.keys(current)) result[key] = resolveNode(current[key]);
		cachedResults.set(rawValue, result);
		return result;
	};
	return resolveNode(node);
};
//#endregion
//#region node_modules/@scalar/helpers/dist/http/is-streaming-content-type.js
/** Classify streaming bodies so consumers share one set of supported media types. */
var getStreamFormat = (contentType) => {
	const { essence, subtype, type } = parseMimeType(contentType ?? "");
	if (essence === "text/event-stream") return "sse";
	if (essence === "application/json-seq" || subtype.endsWith("+json-seq")) return "json-seq";
	if ([
		"application/jsonl",
		"application/x-ndjson",
		"application/json-lines"
	].includes(essence)) return "json-lines";
	return type === "multipart" && (subtype === "mixed" || subtype === "x-mixed-replace") ? "multipart" : void 0;
};
/** Identifies response formats whose bodies may continue indefinitely. */
var isStreamingContentType = (contentType) => getStreamFormat(contentType) !== void 0;
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/serialize-stream-example.js
/**
* Frame generated values and authored structured examples as sequential content.
* Callers bypass this helper for authored strings that already contain wire framing.
* SSE objects with no valid fields are omitted with one warning per call; an empty
* input sequence is valid and does not produce a warning.
*/
var serializeStreamExample = (value, contentType, singleItem) => {
	if (value === void 0) return;
	const format = getStreamFormat(contentType);
	const items = singleItem ? [value] : Array.isArray(value) ? value : [value];
	if (format === "json-lines") return items.map((item) => `${JSON.stringify(item)}\n`).join("");
	if (format === "json-seq") return items.map((item) => `\u001e${JSON.stringify(item)}\n`).join("");
	if (format === "sse") {
		const frames = items.map((item) => {
			if (!isObject(item)) return `data: ${JSON.stringify(item)}\n\n`;
			const fields = [
				"event",
				"id",
				"retry",
				"data"
			].flatMap((field) => {
				const fieldValue = item[field];
				if (field === "retry") return typeof fieldValue === "number" && Number.isInteger(fieldValue) && fieldValue >= 0 ? [`retry: ${fieldValue}`] : [];
				if (field === "data" && fieldValue !== void 0) return (typeof fieldValue === "string" ? fieldValue : JSON.stringify(fieldValue)).split(/\r\n|\r|\n/).map((line) => `data: ${line}`);
				if (typeof fieldValue !== "string" || field === "id" && fieldValue.includes("\0")) return [];
				return fieldValue.split(/\r\n|\r|\n/).length === 1 ? [`${field}: ${fieldValue}`] : [];
			});
			return fields.length ? `${fields.join("\n")}\n\n` : "";
		});
		const omitted = frames.filter((frame) => frame === "").length;
		if (omitted > 0) console.warn(`Skipped ${omitted} SSE example item(s) with no valid event, id, retry, or data fields.`);
		return frames.join("");
	}
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/helpers/get-example.js
/** Helper to get example from examples object with fallback to example field */
var getExampleFromExamples = (examples, exampleField, exampleName) => {
	if (!examples && exampleField === void 0) return;
	const hasExamples = !!examples && Object.keys(examples).length > 0;
	const key = exampleName || Object.keys(examples ?? {})[0] || "";
	const example = getResolvedRef(examples?.[key]);
	if (example !== void 0) return example;
	if ((!hasExamples || !exampleName) && exampleField !== void 0) return { value: getResolvedRef(exampleField) };
};
/**
* Resolve an example value for a parameter or requestBody from either `examples` or `content.*.examples`.
* Or the [deprecated] `example` field.
* If no exampleKey is provided it will fallback to the first example in the examples object then the [deprecated]
* `example` field.
* When the parameter carries both its own `examples`/`example` and a `content` object, the parameter-level value
* takes priority to preserve edits saved by older clients before they are migrated into the media type.
* Used both for send-request and generating code snippets.
*/
var getExample = (param, exampleName, contentType) => {
	if ("examples" in param || "example" in param) {
		const result = getExampleFromExamples(param.examples, param.example, exampleName);
		if (result !== void 0) return result;
	}
	if ("content" in param) {
		const content = param.content?.[contentType ?? Object.keys(param.content)[0] ?? ""];
		const result = getExampleFromExamples(content?.examples, content?.example, exampleName);
		if (result !== void 0) return result;
	}
	const resolvedParam = getResolvedRef(param);
	if (resolvedParam && "schema" in resolvedParam && resolvedParam.schema) {
		const schema = getResolvedRef(resolvedParam.schema, mergeSiblingReferences);
		if (!schema) return;
		if ("default" in schema && schema.default !== void 0) return { value: schema.default };
		if ("enum" in schema && schema.enum?.[0] !== void 0) return { value: schema.enum[0] };
		if ("examples" in schema && schema.examples?.[0] !== void 0) return { value: schema.examples[0] };
		if ("example" in schema && schema.example !== void 0) return { value: schema.example };
	}
};
//#endregion
//#region node_modules/@scalar/helpers/dist/array/is-defined.js
/**
* Type safe alternative to array.filter(Boolean)
*
* @example
*
* ```ts
* const dataArray = [1, null, 2, undefined, 3].filter(isDefined)
* ```
*
* @see https://jaketrent.com/post/typescript-type-safe-filter-boolean/
*/
var isDefined = (value) => value !== null && value !== void 0;
//#endregion
//#region node_modules/@scalar/helpers/dist/json/escape-json-pointer.js
/**
* Escapes a JSON pointer string.
*
* Example: `/foo/bar~baz` -> `~1foo~1bar~0baz`
*/
var escapeJsonPointer$1 = (str) => str.replace(/~/g, "~0").replace(/\//g, "~1");
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/dynamic-ref.js
/** Narrow a schema to one that carries a `$dynamicRef`. */
var isDynamicRef = (schema) => typeof schema === "object" && schema !== null && "$dynamicRef" in schema && typeof schema.$dynamicRef === "string";
/**
* Whether a schema introduces something a `$dynamicRef` could later bind to.
*
* We only grow the dynamic scope with schemas that could hold a `$dynamicAnchor`: those declaring one
* directly, or resource boundaries (`$id`) / definition containers (`$defs`) that may hold one. Plain
* subschemas are skipped to keep the scope small.
*/
var carriesDynamicAnchor = (schema) => "$dynamicAnchor" in schema || "$id" in schema || "$defs" in schema;
/**
* Collect the `$dynamicAnchor` declarations of a single schema resource, keyed by anchor name.
*
* Anchors are looked for at the resource root and inside `$defs` — the two placements used by the
* common generic and recursive patterns. Anchors nested deeper are not collected (a documented v1
* limitation). Each target is dereferenced so callers receive the concrete schema the anchor points to.
*/
var anchorCache = /* @__PURE__ */ new WeakMap();
var collectDynamicAnchors = (resource) => {
	const cacheTarget = unpackProxyObject(resource, { depth: 1 });
	const cached = anchorCache.get(cacheTarget);
	if (cached) return cached;
	const anchors = /* @__PURE__ */ new Map();
	const add = (node) => {
		if (!node || typeof node !== "object") return;
		const anchor = node.$dynamicAnchor;
		if (typeof anchor === "string" && !anchors.has(anchor)) anchors.set(anchor, getResolvedRef(node, mergeSiblingReferences));
	};
	add(resource);
	const defs = resource.$defs;
	if (defs && typeof defs === "object") for (const key of Object.keys(defs)) add(defs[key]);
	anchorCache.set(cacheTarget, anchors);
	return anchors;
};
/**
* Append a schema resource to the dynamic scope when it could hold a `$dynamicAnchor`.
*
* A schema that carries the binding inline — its own `$dynamicAnchor`, or the `$id`/`$defs` binding
* written next to a `$ref` (how `Paginated<Planet>` is expressed) — enters the scope directly. A bare
* `$ref` to a *named* binding resource (e.g. `$ref: '#/components/schemas/PaginatedUserResponse'`)
* hides that resource's `$id`/`$defs` behind the ref, so the anchor is invisible here; follow the ref
* to reach the resource. Ordinary `$ref`s resolve to a schema without an anchor and are still skipped;
* an unresolved `$ref` resolves to `undefined` and is skipped too.
*
* See https://github.com/scalar/scalar/issues/9883.
*/
var pushDynamicScope = (scope, schema) => {
	const resource = carriesDynamicAnchor(schema) ? schema : getResolvedRef(schema);
	return isObject(resource) && carriesDynamicAnchor(resource) ? [...scope, resource] : scope;
};
/**
* Resolve a `$dynamicRef` fragment against the dynamic scope.
*
* Scans the scope outermost-first and returns the first resource that declares a `$dynamicAnchor` with
* the referenced name. Returns `undefined` when nothing matches, in which case callers should leave the
* reference unresolved (the schema renders as it did before, with no regression).
*/
var resolveDynamicRef = (dynamicRef, scope) => {
	const name = dynamicRef.startsWith("#") ? dynamicRef.slice(1) : void 0;
	if (!name || name.startsWith("/")) return;
	for (const resource of scope) {
		const match = collectDynamicAnchors(resource).get(name);
		if (match) return match;
	}
};
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/guard/value.mjs
/** Returns true if this value is an async iterator */
function IsAsyncIterator$3(value) {
	return IsObject$3(value) && !IsArray$3(value) && !IsUint8Array$3(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is an array */
function IsArray$3(value) {
	return Array.isArray(value);
}
/** Returns true if this value is bigint */
function IsBigInt$3(value) {
	return typeof value === "bigint";
}
/** Returns true if this value is a boolean */
function IsBoolean$3(value) {
	return typeof value === "boolean";
}
/** Returns true if this value is a Date object */
function IsDate$3(value) {
	return value instanceof globalThis.Date;
}
/** Returns true if this value is a function */
function IsFunction$3(value) {
	return typeof value === "function";
}
/** Returns true if this value is an iterator */
function IsIterator$3(value) {
	return IsObject$3(value) && !IsArray$3(value) && !IsUint8Array$3(value) && Symbol.iterator in value;
}
/** Returns true if this value is null */
function IsNull$3(value) {
	return value === null;
}
/** Returns true if this value is number */
function IsNumber$3(value) {
	return typeof value === "number";
}
/** Returns true if this value is an object */
function IsObject$3(value) {
	return typeof value === "object" && value !== null;
}
/** Returns true if this value is RegExp */
function IsRegExp$2(value) {
	return value instanceof globalThis.RegExp;
}
/** Returns true if this value is string */
function IsString$3(value) {
	return typeof value === "string";
}
/** Returns true if this value is symbol */
function IsSymbol$3(value) {
	return typeof value === "symbol";
}
/** Returns true if this value is a Uint8Array */
function IsUint8Array$3(value) {
	return value instanceof globalThis.Uint8Array;
}
/** Returns true if this value is undefined */
function IsUndefined$3(value) {
	return value === void 0;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/clone/value.mjs
function ArrayType$1(value) {
	return value.map((value) => Visit$6(value));
}
function DateType$1(value) {
	return new Date(value.getTime());
}
function Uint8ArrayType$1(value) {
	return new Uint8Array(value);
}
function RegExpType(value) {
	return new RegExp(value.source, value.flags);
}
function ObjectType$1(value) {
	const result = {};
	for (const key of Object.getOwnPropertyNames(value)) result[key] = Visit$6(value[key]);
	for (const key of Object.getOwnPropertySymbols(value)) result[key] = Visit$6(value[key]);
	return result;
}
function Visit$6(value) {
	return IsArray$3(value) ? ArrayType$1(value) : IsDate$3(value) ? DateType$1(value) : IsUint8Array$3(value) ? Uint8ArrayType$1(value) : IsRegExp$2(value) ? RegExpType(value) : IsObject$3(value) ? ObjectType$1(value) : value;
}
/** Clones a value */
function Clone$1(value) {
	return Visit$6(value);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/clone/type.mjs
/** Clones a Type */
function CloneType(schema, options) {
	return options === void 0 ? Clone$1(schema) : Clone$1({
		...options,
		...schema
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/guard/guard.mjs
/** Returns true if this value is an async iterator */
function IsAsyncIterator$2(value) {
	return IsObject$2(value) && globalThis.Symbol.asyncIterator in value;
}
/** Returns true if this value is an iterator */
function IsIterator$2(value) {
	return IsObject$2(value) && globalThis.Symbol.iterator in value;
}
/** Returns true if this value is a Promise */
function IsPromise$2(value) {
	return value instanceof globalThis.Promise;
}
/** Returns true if this value is a Date */
function IsDate$2(value) {
	return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
/** Returns true if this value is an instance of Map<K, T> */
function IsMap(value) {
	return value instanceof globalThis.Map;
}
/** Returns true if this value is an instance of Set<T> */
function IsSet(value) {
	return value instanceof globalThis.Set;
}
/** Returns true if this value is a typed array */
function IsTypedArray(value) {
	return globalThis.ArrayBuffer.isView(value);
}
/** Returns true if the value is a Uint8Array */
function IsUint8Array$2(value) {
	return value instanceof globalThis.Uint8Array;
}
/** Returns true if this value has this property key */
function HasPropertyKey(value, key) {
	return key in value;
}
/** Returns true of this value is an object type */
function IsObject$2(value) {
	return value !== null && typeof value === "object";
}
/** Returns true if this value is an array, but not a typed array */
function IsArray$2(value) {
	return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
/** Returns true if this value is an undefined */
function IsUndefined$2(value) {
	return value === void 0;
}
/** Returns true if this value is an null */
function IsNull$2(value) {
	return value === null;
}
/** Returns true if this value is an boolean */
function IsBoolean$2(value) {
	return typeof value === "boolean";
}
/** Returns true if this value is an number */
function IsNumber$2(value) {
	return typeof value === "number";
}
/** Returns true if this value is an integer */
function IsInteger$2(value) {
	return globalThis.Number.isInteger(value);
}
/** Returns true if this value is bigint */
function IsBigInt$2(value) {
	return typeof value === "bigint";
}
/** Returns true if this value is string */
function IsString$2(value) {
	return typeof value === "string";
}
/** Returns true if this value is a function */
function IsFunction$2(value) {
	return typeof value === "function";
}
/** Returns true if this value is a symbol */
function IsSymbol$2(value) {
	return typeof value === "symbol";
}
/** Returns true if this value is a value type such as number, string, boolean */
function IsValueType(value) {
	return IsBigInt$2(value) || IsBoolean$2(value) || IsNull$2(value) || IsNumber$2(value) || IsString$2(value) || IsSymbol$2(value) || IsUndefined$2(value);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy) {
	/**
	* Configures the instantiation behavior of TypeBox types. The `default` option assigns raw JavaScript
	* references for embedded types, which may cause side effects if type properties are explicitly updated
	* outside the TypeBox type builder. The `clone` option creates copies of any shared types upon creation,
	* preventing unintended side effects. The `freeze` option applies `Object.freeze()` to the type, making
	* it fully readonly and immutable. Implementations should use `default` whenever possible, as it is the
	* fastest way to instantiate types. The default setting is `default`.
	*/
	TypeSystemPolicy.InstanceMode = "default";
	/** Sets whether TypeBox should assert optional properties using the TypeScript `exactOptionalPropertyTypes` assertion policy. The default is `false` */
	TypeSystemPolicy.ExactOptionalPropertyTypes = false;
	/** Sets whether arrays should be treated as a kind of objects. The default is `false` */
	TypeSystemPolicy.AllowArrayObject = false;
	/** Sets whether `NaN` or `Infinity` should be treated as valid numeric values. The default is `false` */
	TypeSystemPolicy.AllowNaN = false;
	/** Sets whether `null` should validate for void types. The default is `false` */
	TypeSystemPolicy.AllowNullVoid = false;
	/** Checks this value using the ExactOptionalPropertyTypes policy */
	function IsExactOptionalProperty(value, key) {
		return TypeSystemPolicy.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
	}
	TypeSystemPolicy.IsExactOptionalProperty = IsExactOptionalProperty;
	/** Checks this value using the AllowArrayObjects policy */
	function IsObjectLike(value) {
		const isObject = IsObject$2(value);
		return TypeSystemPolicy.AllowArrayObject ? isObject : isObject && !IsArray$2(value);
	}
	TypeSystemPolicy.IsObjectLike = IsObjectLike;
	/** Checks this value as a record using the AllowArrayObjects policy */
	function IsRecordLike(value) {
		return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
	}
	TypeSystemPolicy.IsRecordLike = IsRecordLike;
	/** Checks this value using the AllowNaN policy */
	function IsNumberLike(value) {
		return TypeSystemPolicy.AllowNaN ? IsNumber$2(value) : Number.isFinite(value);
	}
	TypeSystemPolicy.IsNumberLike = IsNumberLike;
	/** Checks this value using the AllowVoidNull policy */
	function IsVoidLike(value) {
		const isUndefined = IsUndefined$2(value);
		return TypeSystemPolicy.AllowNullVoid ? isUndefined || value === null : isUndefined;
	}
	TypeSystemPolicy.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/create/immutable.mjs
function ImmutableArray(value) {
	return globalThis.Object.freeze(value).map((value) => Immutable(value));
}
function ImmutableDate(value) {
	return value;
}
function ImmutableUint8Array(value) {
	return value;
}
function ImmutableRegExp(value) {
	return value;
}
function ImmutableObject(value) {
	const result = {};
	for (const key of Object.getOwnPropertyNames(value)) result[key] = Immutable(value[key]);
	for (const key of Object.getOwnPropertySymbols(value)) result[key] = Immutable(value[key]);
	return globalThis.Object.freeze(result);
}
/** Specialized deep immutable value. Applies freeze recursively to the given value */
function Immutable(value) {
	return IsArray$3(value) ? ImmutableArray(value) : IsDate$3(value) ? ImmutableDate(value) : IsUint8Array$3(value) ? ImmutableUint8Array(value) : IsRegExp$2(value) ? ImmutableRegExp(value) : IsObject$3(value) ? ImmutableObject(value) : value;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/create/type.mjs
/** Creates TypeBox schematics using the configured InstanceMode */
function CreateType(schema, options) {
	const result = options !== void 0 ? {
		...options,
		...schema
	} : schema;
	switch (TypeSystemPolicy.InstanceMode) {
		case "freeze": return Immutable(result);
		case "clone": return Clone$1(result);
		default: return result;
	}
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/error/error.mjs
/** The base Error type thrown for all TypeBox exceptions  */
var TypeBoxError = class extends Error {
	constructor(message) {
		super(message);
	}
};
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/symbols/symbols.mjs
/** Symbol key applied to transform types */
var TransformKind = Symbol.for("TypeBox.Transform");
/** Symbol key applied to readonly types */
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
/** Symbol key applied to optional types */
var OptionalKind = Symbol.for("TypeBox.Optional");
/** Symbol key applied to types */
var Hint = Symbol.for("TypeBox.Hint");
/** Symbol key applied to types */
var Kind = Symbol.for("TypeBox.Kind");
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/guard/kind.mjs
/** `[Kind-Only]` Returns true if this value has a Readonly symbol */
function IsReadonly(value) {
	return IsObject$3(value) && value[ReadonlyKind] === "Readonly";
}
/** `[Kind-Only]` Returns true if this value has a Optional symbol */
function IsOptional$1(value) {
	return IsObject$3(value) && value[OptionalKind] === "Optional";
}
/** `[Kind-Only]` Returns true if the given value is TAny */
function IsAny$1(value) {
	return IsKindOf$1(value, "Any");
}
/** `[Kind-Only]` Returns true if the given value is TArgument */
function IsArgument$1(value) {
	return IsKindOf$1(value, "Argument");
}
/** `[Kind-Only]` Returns true if the given value is TArray */
function IsArray$1(value) {
	return IsKindOf$1(value, "Array");
}
/** `[Kind-Only]` Returns true if the given value is TAsyncIterator */
function IsAsyncIterator$1(value) {
	return IsKindOf$1(value, "AsyncIterator");
}
/** `[Kind-Only]` Returns true if the given value is TBigInt */
function IsBigInt$1(value) {
	return IsKindOf$1(value, "BigInt");
}
/** `[Kind-Only]` Returns true if the given value is TBoolean */
function IsBoolean$1(value) {
	return IsKindOf$1(value, "Boolean");
}
/** `[Kind-Only]` Returns true if the given value is TComputed */
function IsComputed$1(value) {
	return IsKindOf$1(value, "Computed");
}
/** `[Kind-Only]` Returns true if the given value is TConstructor */
function IsConstructor$1(value) {
	return IsKindOf$1(value, "Constructor");
}
/** `[Kind-Only]` Returns true if the given value is TDate */
function IsDate$1(value) {
	return IsKindOf$1(value, "Date");
}
/** `[Kind-Only]` Returns true if the given value is TFunction */
function IsFunction$1(value) {
	return IsKindOf$1(value, "Function");
}
/** `[Kind-Only]` Returns true if the given value is TInteger */
function IsInteger$1(value) {
	return IsKindOf$1(value, "Integer");
}
/** `[Kind-Only]` Returns true if the given value is TIntersect */
function IsIntersect$1(value) {
	return IsKindOf$1(value, "Intersect");
}
/** `[Kind-Only]` Returns true if the given value is TIterator */
function IsIterator$1(value) {
	return IsKindOf$1(value, "Iterator");
}
/** `[Kind-Only]` Returns true if the given value is a TKind with the given name. */
function IsKindOf$1(value, kind) {
	return IsObject$3(value) && Kind in value && value[Kind] === kind;
}
/** `[Kind-Only]` Returns true if the given value is TLiteralValue */
function IsLiteralValue$1(value) {
	return IsBoolean$3(value) || IsNumber$3(value) || IsString$3(value);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral */
function IsLiteral$1(value) {
	return IsKindOf$1(value, "Literal");
}
/** `[Kind-Only]` Returns true if the given value is a TMappedKey */
function IsMappedKey$1(value) {
	return IsKindOf$1(value, "MappedKey");
}
/** `[Kind-Only]` Returns true if the given value is TMappedResult */
function IsMappedResult$1(value) {
	return IsKindOf$1(value, "MappedResult");
}
/** `[Kind-Only]` Returns true if the given value is TNever */
function IsNever$1(value) {
	return IsKindOf$1(value, "Never");
}
/** `[Kind-Only]` Returns true if the given value is TNot */
function IsNot$1(value) {
	return IsKindOf$1(value, "Not");
}
/** `[Kind-Only]` Returns true if the given value is TNull */
function IsNull$1(value) {
	return IsKindOf$1(value, "Null");
}
/** `[Kind-Only]` Returns true if the given value is TNumber */
function IsNumber$1(value) {
	return IsKindOf$1(value, "Number");
}
/** `[Kind-Only]` Returns true if the given value is TObject */
function IsObject$1(value) {
	return IsKindOf$1(value, "Object");
}
/** `[Kind-Only]` Returns true if the given value is TPromise */
function IsPromise$1(value) {
	return IsKindOf$1(value, "Promise");
}
/** `[Kind-Only]` Returns true if the given value is TRecord */
function IsRecord$1(value) {
	return IsKindOf$1(value, "Record");
}
/** `[Kind-Only]` Returns true if the given value is TRef */
function IsRef$1(value) {
	return IsKindOf$1(value, "Ref");
}
/** `[Kind-Only]` Returns true if the given value is TRegExp */
function IsRegExp$1(value) {
	return IsKindOf$1(value, "RegExp");
}
/** `[Kind-Only]` Returns true if the given value is TString */
function IsString$1(value) {
	return IsKindOf$1(value, "String");
}
/** `[Kind-Only]` Returns true if the given value is TSymbol */
function IsSymbol$1(value) {
	return IsKindOf$1(value, "Symbol");
}
/** `[Kind-Only]` Returns true if the given value is TTemplateLiteral */
function IsTemplateLiteral$1(value) {
	return IsKindOf$1(value, "TemplateLiteral");
}
/** `[Kind-Only]` Returns true if the given value is TThis */
function IsThis$1(value) {
	return IsKindOf$1(value, "This");
}
/** `[Kind-Only]` Returns true of this value is TTransform */
function IsTransform$1(value) {
	return IsObject$3(value) && TransformKind in value;
}
/** `[Kind-Only]` Returns true if the given value is TTuple */
function IsTuple$1(value) {
	return IsKindOf$1(value, "Tuple");
}
/** `[Kind-Only]` Returns true if the given value is TUndefined */
function IsUndefined$1(value) {
	return IsKindOf$1(value, "Undefined");
}
/** `[Kind-Only]` Returns true if the given value is TUnion */
function IsUnion$1(value) {
	return IsKindOf$1(value, "Union");
}
/** `[Kind-Only]` Returns true if the given value is TUint8Array */
function IsUint8Array$1(value) {
	return IsKindOf$1(value, "Uint8Array");
}
/** `[Kind-Only]` Returns true if the given value is TUnknown */
function IsUnknown$1(value) {
	return IsKindOf$1(value, "Unknown");
}
/** `[Kind-Only]` Returns true if the given value is a raw TUnsafe */
function IsUnsafe$1(value) {
	return IsKindOf$1(value, "Unsafe");
}
/** `[Kind-Only]` Returns true if the given value is TVoid */
function IsVoid$1(value) {
	return IsKindOf$1(value, "Void");
}
/** `[Kind-Only]` Returns true if the given value is TKind */
function IsKind$1(value) {
	return IsObject$3(value) && Kind in value && IsString$3(value[Kind]);
}
/** `[Kind-Only]` Returns true if the given value is TSchema */
function IsSchema$1(value) {
	return IsAny$1(value) || IsArgument$1(value) || IsArray$1(value) || IsBoolean$1(value) || IsBigInt$1(value) || IsAsyncIterator$1(value) || IsComputed$1(value) || IsConstructor$1(value) || IsDate$1(value) || IsFunction$1(value) || IsInteger$1(value) || IsIntersect$1(value) || IsIterator$1(value) || IsLiteral$1(value) || IsMappedKey$1(value) || IsMappedResult$1(value) || IsNever$1(value) || IsNot$1(value) || IsNull$1(value) || IsNumber$1(value) || IsObject$1(value) || IsPromise$1(value) || IsRecord$1(value) || IsRef$1(value) || IsRegExp$1(value) || IsString$1(value) || IsSymbol$1(value) || IsTemplateLiteral$1(value) || IsThis$1(value) || IsTuple$1(value) || IsUndefined$1(value) || IsUnion$1(value) || IsUint8Array$1(value) || IsUnknown$1(value) || IsUnsafe$1(value) || IsVoid$1(value) || IsKind$1(value);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/guard/type.mjs
var KnownTypes = [
	"Argument",
	"Any",
	"Array",
	"AsyncIterator",
	"BigInt",
	"Boolean",
	"Computed",
	"Constructor",
	"Date",
	"Enum",
	"Function",
	"Integer",
	"Intersect",
	"Iterator",
	"Literal",
	"MappedKey",
	"MappedResult",
	"Not",
	"Null",
	"Number",
	"Object",
	"Promise",
	"Record",
	"Ref",
	"RegExp",
	"String",
	"Symbol",
	"TemplateLiteral",
	"This",
	"Tuple",
	"Undefined",
	"Union",
	"Uint8Array",
	"Unknown",
	"Void"
];
function IsPattern(value) {
	try {
		new RegExp(value);
		return true;
	} catch {
		return false;
	}
}
function IsControlCharacterFree(value) {
	if (!IsString$3(value)) return false;
	for (let i = 0; i < value.length; i++) {
		const code = value.charCodeAt(i);
		if (code >= 7 && code <= 13 || code === 27 || code === 127) return false;
	}
	return true;
}
function IsAdditionalProperties(value) {
	return IsOptionalBoolean(value) || IsSchema(value);
}
function IsOptionalBigInt(value) {
	return IsUndefined$3(value) || IsBigInt$3(value);
}
function IsOptionalNumber(value) {
	return IsUndefined$3(value) || IsNumber$3(value);
}
function IsOptionalBoolean(value) {
	return IsUndefined$3(value) || IsBoolean$3(value);
}
function IsOptionalString(value) {
	return IsUndefined$3(value) || IsString$3(value);
}
function IsOptionalPattern(value) {
	return IsUndefined$3(value) || IsString$3(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
	return IsUndefined$3(value) || IsString$3(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
	return IsUndefined$3(value) || IsSchema(value);
}
/** Returns true if this value has a Optional symbol */
function IsOptional(value) {
	return IsObject$3(value) && value[OptionalKind] === "Optional";
}
/** Returns true if the given value is TAny */
function IsAny(value) {
	return IsKindOf(value, "Any") && IsOptionalString(value.$id);
}
/** Returns true if the given value is TArgument */
function IsArgument(value) {
	return IsKindOf(value, "Argument") && IsNumber$3(value.index);
}
/** Returns true if the given value is TArray */
function IsArray(value) {
	return IsKindOf(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
/** Returns true if the given value is TAsyncIterator */
function IsAsyncIterator(value) {
	return IsKindOf(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema(value.items);
}
/** Returns true if the given value is TBigInt */
function IsBigInt(value) {
	return IsKindOf(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
/** Returns true if the given value is TBoolean */
function IsBoolean(value) {
	return IsKindOf(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
/** Returns true if the given value is TComputed */
function IsComputed(value) {
	return IsKindOf(value, "Computed") && IsString$3(value.target) && IsArray$3(value.parameters) && value.parameters.every((schema) => IsSchema(schema));
}
/** Returns true if the given value is TConstructor */
function IsConstructor(value) {
	return IsKindOf(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray$3(value.parameters) && value.parameters.every((schema) => IsSchema(schema)) && IsSchema(value.returns);
}
/** Returns true if the given value is TDate */
function IsDate(value) {
	return IsKindOf(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
/** Returns true if the given value is TFunction */
function IsFunction(value) {
	return IsKindOf(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray$3(value.parameters) && value.parameters.every((schema) => IsSchema(schema)) && IsSchema(value.returns);
}
/** Returns true if the given value is TInteger */
function IsInteger(value) {
	return IsKindOf(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
/** Returns true if the given schema is TProperties */
function IsProperties(value) {
	return IsObject$3(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema(schema));
}
/** Returns true if the given value is TIntersect */
function IsIntersect(value) {
	return IsKindOf(value, "Intersect") && (IsString$3(value.type) && value.type !== "object" ? false : true) && IsArray$3(value.allOf) && value.allOf.every((schema) => IsSchema(schema) && !IsTransform(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
/** Returns true if the given value is TIterator */
function IsIterator(value) {
	return IsKindOf(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema(value.items);
}
/** Returns true if the given value is a TKind with the given name. */
function IsKindOf(value, kind) {
	return IsObject$3(value) && Kind in value && value[Kind] === kind;
}
/** Returns true if the given value is TLiteral<string> */
function IsLiteralString(value) {
	return IsLiteral(value) && IsString$3(value.const);
}
/** Returns true if the given value is TLiteral<number> */
function IsLiteralNumber(value) {
	return IsLiteral(value) && IsNumber$3(value.const);
}
/** Returns true if the given value is TLiteral<boolean> */
function IsLiteralBoolean(value) {
	return IsLiteral(value) && IsBoolean$3(value.const);
}
/** Returns true if the given value is TLiteral */
function IsLiteral(value) {
	return IsKindOf(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue(value.const);
}
/** Returns true if the given value is a TLiteralValue */
function IsLiteralValue(value) {
	return IsBoolean$3(value) || IsNumber$3(value) || IsString$3(value);
}
/** Returns true if the given value is a TMappedKey */
function IsMappedKey(value) {
	return IsKindOf(value, "MappedKey") && IsArray$3(value.keys) && value.keys.every((key) => IsNumber$3(key) || IsString$3(key));
}
/** Returns true if the given value is TMappedResult */
function IsMappedResult(value) {
	return IsKindOf(value, "MappedResult") && IsProperties(value.properties);
}
/** Returns true if the given value is TNever */
function IsNever(value) {
	return IsKindOf(value, "Never") && IsObject$3(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
/** Returns true if the given value is TNot */
function IsNot(value) {
	return IsKindOf(value, "Not") && IsSchema(value.not);
}
/** Returns true if the given value is TNull */
function IsNull(value) {
	return IsKindOf(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
/** Returns true if the given value is TNumber */
function IsNumber(value) {
	return IsKindOf(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
/** Returns true if the given value is TObject */
function IsObject(value) {
	return IsKindOf(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
/** Returns true if the given value is TPromise */
function IsPromise(value) {
	return IsKindOf(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema(value.item);
}
/** Returns true if the given value is TRecord */
function IsRecord(value) {
	return IsKindOf(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject$3(value.patternProperties) && ((schema) => {
		const keys = Object.getOwnPropertyNames(schema.patternProperties);
		return keys.length === 1 && IsPattern(keys[0]) && IsObject$3(schema.patternProperties) && IsSchema(schema.patternProperties[keys[0]]);
	})(value);
}
/** Returns true if the given value is TRef */
function IsRef(value) {
	return IsKindOf(value, "Ref") && IsOptionalString(value.$id) && IsString$3(value.$ref);
}
/** Returns true if the given value is TRegExp */
function IsRegExp(value) {
	return IsKindOf(value, "RegExp") && IsOptionalString(value.$id) && IsString$3(value.source) && IsString$3(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
/** Returns true if the given value is TString */
function IsString(value) {
	return IsKindOf(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
/** Returns true if the given value is TSymbol */
function IsSymbol(value) {
	return IsKindOf(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
/** Returns true if the given value is TTemplateLiteral */
function IsTemplateLiteral(value) {
	return IsKindOf(value, "TemplateLiteral") && value.type === "string" && IsString$3(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
/** Returns true if the given value is TThis */
function IsThis(value) {
	return IsKindOf(value, "This") && IsOptionalString(value.$id) && IsString$3(value.$ref);
}
/** Returns true of this value is TTransform */
function IsTransform(value) {
	return IsObject$3(value) && TransformKind in value;
}
/** Returns true if the given value is TTuple */
function IsTuple(value) {
	return IsKindOf(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber$3(value.minItems) && IsNumber$3(value.maxItems) && value.minItems === value.maxItems && (IsUndefined$3(value.items) && IsUndefined$3(value.additionalItems) && value.minItems === 0 || IsArray$3(value.items) && value.items.every((schema) => IsSchema(schema)));
}
/** Returns true if the given value is TUndefined */
function IsUndefined(value) {
	return IsKindOf(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
/** Returns true if the given value is TUnion */
function IsUnion(value) {
	return IsKindOf(value, "Union") && IsOptionalString(value.$id) && IsObject$3(value) && IsArray$3(value.anyOf) && value.anyOf.every((schema) => IsSchema(schema));
}
/** Returns true if the given value is TUint8Array */
function IsUint8Array(value) {
	return IsKindOf(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
/** Returns true if the given value is TUnknown */
function IsUnknown(value) {
	return IsKindOf(value, "Unknown") && IsOptionalString(value.$id);
}
/** Returns true if the given value is a raw TUnsafe */
function IsUnsafe(value) {
	return IsKindOf(value, "Unsafe");
}
/** Returns true if the given value is TVoid */
function IsVoid(value) {
	return IsKindOf(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
/** Returns true if the given value is TKind */
function IsKind(value) {
	return IsObject$3(value) && Kind in value && IsString$3(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
/** Returns true if the given value is TSchema */
function IsSchema(value) {
	return IsObject$3(value) && (IsAny(value) || IsArgument(value) || IsArray(value) || IsBoolean(value) || IsBigInt(value) || IsAsyncIterator(value) || IsComputed(value) || IsConstructor(value) || IsDate(value) || IsFunction(value) || IsInteger(value) || IsIntersect(value) || IsIterator(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull(value) || IsNumber(value) || IsObject(value) || IsPromise(value) || IsRecord(value) || IsRef(value) || IsRegExp(value) || IsString(value) || IsSymbol(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined(value) || IsUnion(value) || IsUint8Array(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
`${PatternBoolean}`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/registry/format.mjs
/** A registry for user defined string formats */
var map$1 = /* @__PURE__ */ new Map();
/** Returns true if the user defined string format exists */
function Has$1(format) {
	return map$1.has(format);
}
/** Gets a validation function for a user defined string format */
function Get$1(format) {
	return map$1.get(format);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/registry/type.mjs
/** A registry for user defined types */
var map = /* @__PURE__ */ new Map();
/** Returns true if this registry contains this kind */
function Has(kind) {
	return map.has(kind);
}
/** Gets a custom validation function for a user defined type */
function Get(kind) {
	return map.get(kind);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/sets/set.mjs
/** Returns true if element right is in the set of left */
function SetIncludes(T, S) {
	return T.includes(S);
}
/** Returns a distinct set of elements */
function SetDistinct(T) {
	return [...new Set(T)];
}
/** Returns the Intersect of the given sets */
function SetIntersect(T, S) {
	return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
	return T.reduce((Acc, L) => {
		return SetIntersect(Acc, L);
	}, Init);
}
function SetIntersectMany(T) {
	return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
/** Returns the Union of multiple sets */
function SetUnionMany(T) {
	const Acc = [];
	for (const L of T) Acc.push(...L);
	return Acc;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/any/any.mjs
/** `[Json]` Creates an Any type */
function Any(options) {
	return CreateType({ [Kind]: "Any" }, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/array/array.mjs
/** `[Json]` Creates an Array type */
function Array$1(items, options) {
	return CreateType({
		[Kind]: "Array",
		type: "array",
		items
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/argument/argument.mjs
/** `[JavaScript]` Creates an Argument Type. */
function Argument(index) {
	return CreateType({
		[Kind]: "Argument",
		index
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/async-iterator/async-iterator.mjs
/** `[JavaScript]` Creates a AsyncIterator type */
function AsyncIterator(items, options) {
	return CreateType({
		[Kind]: "AsyncIterator",
		type: "AsyncIterator",
		items
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/computed/computed.mjs
/** `[Internal]` Creates a deferred computed type. This type is used exclusively in modules to defer resolution of computable types that contain interior references  */
function Computed(target, parameters, options) {
	return CreateType({
		[Kind]: "Computed",
		target,
		parameters
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
	const { [key]: _, ...rest } = value;
	return rest;
}
/** Discards property keys from the given value. This function returns a shallow Clone. */
function Discard(value, keys) {
	return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/never/never.mjs
/** `[Json]` Creates a Never type */
function Never(options) {
	return CreateType({
		[Kind]: "Never",
		not: {}
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
	return CreateType({
		[Kind]: "MappedResult",
		properties
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/constructor/constructor.mjs
/** `[JavaScript]` Creates a Constructor type */
function Constructor(parameters, returns, options) {
	return CreateType({
		[Kind]: "Constructor",
		type: "Constructor",
		parameters,
		returns
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/function/function.mjs
/** `[JavaScript]` Creates a Function type */
function Function(parameters, returns, options) {
	return CreateType({
		[Kind]: "Function",
		type: "Function",
		parameters,
		returns
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
	return CreateType({
		[Kind]: "Union",
		anyOf: T
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
	return types.some((type) => IsOptional$1(type));
}
function RemoveOptionalFromRest$1(types) {
	return types.map((left) => IsOptional$1(left) ? RemoveOptionalFromType$1(left) : left);
}
function RemoveOptionalFromType$1(T) {
	return Discard(T, [OptionalKind]);
}
function ResolveUnion(types, options) {
	return IsUnionOptional(types) ? Optional(UnionCreate(RemoveOptionalFromRest$1(types), options)) : UnionCreate(RemoveOptionalFromRest$1(types), options);
}
/** `[Json]` Creates an evaluated Union type */
function UnionEvaluated(T, options) {
	return T.length === 1 ? CreateType(T[0], options) : T.length === 0 ? Never(options) : ResolveUnion(T, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/union/union.mjs
/** `[Json]` Creates a Union type */
function Union$1(types, options) {
	return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/parse.mjs
var TemplateLiteralParserError = class extends TypeBoxError {};
function Unescape(pattern) {
	return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
	return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
	return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
	return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
	return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
	if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1))) return false;
	let count = 0;
	for (let index = 0; index < pattern.length; index++) {
		if (IsOpenParen(pattern, index)) count += 1;
		if (IsCloseParen(pattern, index)) count -= 1;
		if (count === 0 && index !== pattern.length - 1) return false;
	}
	return true;
}
function InGroup(pattern) {
	return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
	let count = 0;
	for (let index = 0; index < pattern.length; index++) {
		if (IsOpenParen(pattern, index)) count += 1;
		if (IsCloseParen(pattern, index)) count -= 1;
		if (IsSeparator(pattern, index) && count === 0) return true;
	}
	return false;
}
function IsPrecedenceAnd(pattern) {
	for (let index = 0; index < pattern.length; index++) if (IsOpenParen(pattern, index)) return true;
	return false;
}
function Or(pattern) {
	let [count, start] = [0, 0];
	const expressions = [];
	for (let index = 0; index < pattern.length; index++) {
		if (IsOpenParen(pattern, index)) count += 1;
		if (IsCloseParen(pattern, index)) count -= 1;
		if (IsSeparator(pattern, index) && count === 0) {
			const range = pattern.slice(start, index);
			if (range.length > 0) expressions.push(TemplateLiteralParse(range));
			start = index + 1;
		}
	}
	const range = pattern.slice(start);
	if (range.length > 0) expressions.push(TemplateLiteralParse(range));
	if (expressions.length === 0) return {
		type: "const",
		const: ""
	};
	if (expressions.length === 1) return expressions[0];
	return {
		type: "or",
		expr: expressions
	};
}
function And(pattern) {
	function Group(value, index) {
		if (!IsOpenParen(value, index)) throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
		let count = 0;
		for (let scan = index; scan < value.length; scan++) {
			if (IsOpenParen(value, scan)) count += 1;
			if (IsCloseParen(value, scan)) count -= 1;
			if (count === 0) return [index, scan];
		}
		throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
	}
	function Range(pattern, index) {
		for (let scan = index; scan < pattern.length; scan++) if (IsOpenParen(pattern, scan)) return [index, scan];
		return [index, pattern.length];
	}
	const expressions = [];
	for (let index = 0; index < pattern.length; index++) if (IsOpenParen(pattern, index)) {
		const [start, end] = Group(pattern, index);
		const range = pattern.slice(start, end + 1);
		expressions.push(TemplateLiteralParse(range));
		index = end;
	} else {
		const [start, end] = Range(pattern, index);
		const range = pattern.slice(start, end);
		if (range.length > 0) expressions.push(TemplateLiteralParse(range));
		index = end - 1;
	}
	return expressions.length === 0 ? {
		type: "const",
		const: ""
	} : expressions.length === 1 ? expressions[0] : {
		type: "and",
		expr: expressions
	};
}
/** Parses a pattern and returns an expression tree */
function TemplateLiteralParse(pattern) {
	return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : {
		type: "const",
		const: Unescape(pattern)
	};
}
/** Parses a pattern and strips forward and trailing ^ and $ */
function TemplateLiteralParseExact(pattern) {
	return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/finite.mjs
var TemplateLiteralFiniteError = class extends TypeBoxError {};
function IsNumberExpression(expression) {
	return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
	return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
	return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
	return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
		throw new TemplateLiteralFiniteError(`Unknown expression type`);
	})();
}
/** Returns true if this TemplateLiteral resolves to a finite set of values */
function IsTemplateLiteralFinite(schema) {
	return IsTemplateLiteralExpressionFinite(TemplateLiteralParseExact(schema.pattern));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/generate.mjs
var TemplateLiteralGenerateError = class extends TypeBoxError {};
function* GenerateReduce(buffer) {
	if (buffer.length === 1) return yield* buffer[0];
	for (const left of buffer[0]) for (const right of GenerateReduce(buffer.slice(1))) yield `${left}${right}`;
}
function* GenerateAnd(expression) {
	return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
	for (const expr of expression.expr) yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
	return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
	return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
		throw new TemplateLiteralGenerateError("Unknown expression");
	})();
}
/** Generates a tuple of strings from the given TemplateLiteral. Returns an empty tuple if infinite. */
function TemplateLiteralGenerate(schema) {
	const expression = TemplateLiteralParseExact(schema.pattern);
	return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/literal/literal.mjs
/** `[Json]` Creates a Literal type */
function Literal(value, options) {
	return CreateType({
		[Kind]: "Literal",
		const: value,
		type: typeof value
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/boolean/boolean.mjs
/** `[Json]` Creates a Boolean type */
function Boolean$1(options) {
	return CreateType({
		[Kind]: "Boolean",
		type: "boolean"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/bigint/bigint.mjs
/** `[JavaScript]` Creates a BigInt type */
function BigInt$1(options) {
	return CreateType({
		[Kind]: "BigInt",
		type: "bigint"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/number/number.mjs
/** `[Json]` Creates a Number type */
function Number$1(options) {
	return CreateType({
		[Kind]: "Number",
		type: "number"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/string/string.mjs
/** `[Json]` Creates a String type */
function String$1(options) {
	return CreateType({
		[Kind]: "String",
		type: "string"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion$12(syntax) {
	const trim = syntax.trim().replace(/"|'/g, "");
	return trim === "boolean" ? yield Boolean$1() : trim === "number" ? yield Number$1() : trim === "bigint" ? yield BigInt$1() : trim === "string" ? yield String$1() : yield (() => {
		const literals = trim.split("|").map((literal) => Literal(literal.trim()));
		return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
	})();
}
function* FromTerminal(syntax) {
	if (syntax[1] !== "{") return yield* [Literal("$"), ...FromSyntax(syntax.slice(1))];
	for (let i = 2; i < syntax.length; i++) if (syntax[i] === "}") {
		const L = FromUnion$12(syntax.slice(2, i));
		const R = FromSyntax(syntax.slice(i + 1));
		return yield* [...L, ...R];
	}
	yield Literal(syntax);
}
function* FromSyntax(syntax) {
	for (let i = 0; i < syntax.length; i++) if (syntax[i] === "$") return yield* [Literal(syntax.slice(0, i)), ...FromTerminal(syntax.slice(i))];
	yield Literal(syntax);
}
/** Parses TemplateLiteralSyntax and returns a tuple of TemplateLiteralKinds */
function TemplateLiteralSyntax(syntax) {
	return [...FromSyntax(syntax)];
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/pattern.mjs
var TemplateLiteralPatternError = class extends TypeBoxError {};
function Escape(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit$5(schema, acc) {
	return IsTemplateLiteral$1(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion$1(schema) ? `(${schema.anyOf.map((schema) => Visit$5(schema, acc)).join("|")})` : IsNumber$1(schema) ? `${acc}${PatternNumber}` : IsInteger$1(schema) ? `${acc}${PatternNumber}` : IsBigInt$1(schema) ? `${acc}${PatternNumber}` : IsString$1(schema) ? `${acc}${PatternString}` : IsLiteral$1(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean$1(schema) ? `${acc}${PatternBoolean}` : (() => {
		throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
	})();
}
function TemplateLiteralPattern(kinds) {
	return `^${kinds.map((schema) => Visit$5(schema, "")).join("")}\$`;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/union.mjs
/** Returns a Union from the given TemplateLiteral */
function TemplateLiteralToUnion(schema) {
	return UnionEvaluated(TemplateLiteralGenerate(schema).map((S) => Literal(S)));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/template-literal/template-literal.mjs
/** `[Json]` Creates a TemplateLiteral type */
function TemplateLiteral(unresolved, options) {
	const pattern = IsString$3(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
	return CreateType({
		[Kind]: "TemplateLiteral",
		type: "string",
		pattern
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral$4(templateLiteral) {
	return TemplateLiteralGenerate(templateLiteral).map((key) => key.toString());
}
function FromUnion$11(types) {
	const result = [];
	for (const type of types) result.push(...IndexPropertyKeys(type));
	return result;
}
function FromLiteral$3(literalValue) {
	return [literalValue.toString()];
}
/** Returns a tuple of PropertyKeys derived from the given TSchema */
function IndexPropertyKeys(type) {
	return [...new Set(IsTemplateLiteral$1(type) ? FromTemplateLiteral$4(type) : IsUnion$1(type) ? FromUnion$11(type.anyOf) : IsLiteral$1(type) ? FromLiteral$3(type.const) : IsNumber$1(type) ? ["[number]"] : IsInteger$1(type) ? ["[number]"] : [])];
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties$18(type, properties, options) {
	const result = {};
	for (const K2 of Object.getOwnPropertyNames(properties)) result[K2] = Index(type, IndexPropertyKeys(properties[K2]), options);
	return result;
}
function FromMappedResult$11(type, mappedResult, options) {
	return FromProperties$18(type, mappedResult.properties, options);
}
function IndexFromMappedResult(type, mappedResult, options) {
	return MappedResult(FromMappedResult$11(type, mappedResult, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/indexed/indexed.mjs
function FromRest$6(types, key) {
	return types.map((type) => IndexFromPropertyKey(type, key));
}
function FromIntersectRest(types) {
	return types.filter((type) => !IsNever$1(type));
}
function FromIntersect$10(types, key) {
	return IntersectEvaluated(FromIntersectRest(FromRest$6(types, key)));
}
function FromUnionRest(types) {
	return types.some((L) => IsNever$1(L)) ? [] : types;
}
function FromUnion$10(types, key) {
	return UnionEvaluated(FromUnionRest(FromRest$6(types, key)));
}
function FromTuple$7(types, key) {
	return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
function FromArray$9(type, key) {
	return key === "[number]" ? type : Never();
}
function FromProperty$2(properties, propertyKey) {
	return propertyKey in properties ? properties[propertyKey] : Never();
}
function IndexFromPropertyKey(type, propertyKey) {
	return IsIntersect$1(type) ? FromIntersect$10(type.allOf, propertyKey) : IsUnion$1(type) ? FromUnion$10(type.anyOf, propertyKey) : IsTuple$1(type) ? FromTuple$7(type.items ?? [], propertyKey) : IsArray$1(type) ? FromArray$9(type.items, propertyKey) : IsObject$1(type) ? FromProperty$2(type.properties, propertyKey) : Never();
}
function IndexFromPropertyKeys(type, propertyKeys) {
	return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
function FromSchema(type, propertyKeys) {
	return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
/** `[Json]` Returns an Indexed property type for the given keys */
function Index(type, key, options) {
	if (IsRef$1(type) || IsRef$1(key)) {
		const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
		if (!IsSchema$1(type) || !IsSchema$1(key)) throw new TypeBoxError(error);
		return Computed("Index", [type, key]);
	}
	if (IsMappedResult$1(key)) return IndexFromMappedResult(type, key, options);
	if (IsMappedKey$1(key)) return IndexFromMappedKey(type, key, options);
	return CreateType(IsSchema$1(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
	return { [key]: Index(type, [key], Clone$1(options)) };
}
function MappedIndexPropertyKeys(type, propertyKeys, options) {
	return propertyKeys.reduce((result, left) => {
		return {
			...result,
			...MappedIndexPropertyKey(type, left, options)
		};
	}, {});
}
function MappedIndexProperties(type, mappedKey, options) {
	return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
function IndexFromMappedKey(type, mappedKey, options) {
	return MappedResult(MappedIndexProperties(type, mappedKey, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/iterator/iterator.mjs
/** `[JavaScript]` Creates an Iterator type */
function Iterator(items, options) {
	return CreateType({
		[Kind]: "Iterator",
		type: "Iterator",
		items
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/object/object.mjs
function RequiredKeys(properties) {
	const keys = [];
	for (let key in properties) if (!IsOptional$1(properties[key])) keys.push(key);
	return keys;
}
/** `[Json]` Creates an Object type */
function _Object(properties, options) {
	const required = RequiredKeys(properties);
	return CreateType(required.length > 0 ? {
		[Kind]: "Object",
		type: "object",
		properties,
		required
	} : {
		[Kind]: "Object",
		type: "object",
		properties
	}, options);
}
/** `[Json]` Creates an Object type */
var Object$1 = _Object;
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/promise/promise.mjs
/** `[JavaScript]` Creates a Promise type */
function Promise$1(item, options) {
	return CreateType({
		[Kind]: "Promise",
		type: "Promise",
		item
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
	return CreateType(Discard(schema, [ReadonlyKind]));
}
function AddReadonly(schema) {
	return CreateType({
		...schema,
		[ReadonlyKind]: "Readonly"
	});
}
function ReadonlyWithFlag(schema, F) {
	return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
/** `[Json]` Creates a Readonly property */
function Readonly(schema, enable) {
	const F = enable ?? true;
	return IsMappedResult$1(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties$17(K, F) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(K)) Acc[K2] = Readonly(K[K2], F);
	return Acc;
}
function FromMappedResult$10(R, F) {
	return FromProperties$17(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
	return MappedResult(FromMappedResult$10(R, F));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/tuple/tuple.mjs
/** `[Json]` Creates a Tuple type */
function Tuple(types, options) {
	return CreateType(types.length > 0 ? {
		[Kind]: "Tuple",
		type: "array",
		items: types,
		additionalItems: false,
		minItems: types.length,
		maxItems: types.length
	} : {
		[Kind]: "Tuple",
		type: "array",
		minItems: types.length,
		maxItems: types.length
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult$9(K, P) {
	return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
	return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
	const Acc = {};
	for (const L of P) Acc[L] = Literal(L);
	return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
	return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey$3(K, P) {
	return FromMappedResult$9(K, MappedKeyToMappedResultProperties(K, P));
}
function FromRest$5(K, T) {
	return T.map((L) => FromSchemaType(K, L));
}
function FromProperties$16(K, T) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(T)) Acc[K2] = FromSchemaType(K, T[K2]);
	return Acc;
}
function FromSchemaType(K, T) {
	const options = { ...T };
	return IsOptional$1(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult$1(T) ? FromMappedResult$9(K, T.properties) : IsMappedKey$1(T) ? FromMappedKey$3(K, T.keys) : IsConstructor$1(T) ? Constructor(FromRest$5(K, T.parameters), FromSchemaType(K, T.returns), options) : IsFunction$1(T) ? Function(FromRest$5(K, T.parameters), FromSchemaType(K, T.returns), options) : IsAsyncIterator$1(T) ? AsyncIterator(FromSchemaType(K, T.items), options) : IsIterator$1(T) ? Iterator(FromSchemaType(K, T.items), options) : IsIntersect$1(T) ? Intersect$1(FromRest$5(K, T.allOf), options) : IsUnion$1(T) ? Union$1(FromRest$5(K, T.anyOf), options) : IsTuple$1(T) ? Tuple(FromRest$5(K, T.items ?? []), options) : IsObject$1(T) ? Object$1(FromProperties$16(K, T.properties), options) : IsArray$1(T) ? Array$1(FromSchemaType(K, T.items), options) : IsPromise$1(T) ? Promise$1(FromSchemaType(K, T.item), options) : T;
}
function MappedFunctionReturnType(K, T) {
	const Acc = {};
	for (const L of K) Acc[L] = FromSchemaType(L, T);
	return Acc;
}
/** `[Json]` Creates a Mapped object type */
function Mapped(key, map, options) {
	const K = IsSchema$1(key) ? IndexPropertyKeys(key) : key;
	return Object$1(MappedFunctionReturnType(K, map({
		[Kind]: "MappedKey",
		keys: K
	})), options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
	return CreateType(Discard(schema, [OptionalKind]));
}
function AddOptional(schema) {
	return CreateType({
		...schema,
		[OptionalKind]: "Optional"
	});
}
function OptionalWithFlag(schema, F) {
	return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
/** `[Json]` Creates a Optional property */
function Optional(schema, enable) {
	const F = enable ?? true;
	return IsMappedResult$1(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties$15(P, F) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(P)) Acc[K2] = Optional(P[K2], F);
	return Acc;
}
function FromMappedResult$8(R, F) {
	return FromProperties$15(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
	return MappedResult(FromMappedResult$8(R, F));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options = {}) {
	const allObjects = T.every((schema) => IsObject$1(schema));
	const clonedUnevaluatedProperties = IsSchema$1(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
	return CreateType(options.unevaluatedProperties === false || IsSchema$1(options.unevaluatedProperties) || allObjects ? {
		...clonedUnevaluatedProperties,
		[Kind]: "Intersect",
		type: "object",
		allOf: T
	} : {
		...clonedUnevaluatedProperties,
		[Kind]: "Intersect",
		allOf: T
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
	return types.every((left) => IsOptional$1(left));
}
function RemoveOptionalFromType(type) {
	return Discard(type, [OptionalKind]);
}
function RemoveOptionalFromRest(types) {
	return types.map((left) => IsOptional$1(left) ? RemoveOptionalFromType(left) : left);
}
function ResolveIntersect(types, options) {
	return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest(types), options)) : IntersectCreate(RemoveOptionalFromRest(types), options);
}
/** `[Json]` Creates an evaluated Intersect type */
function IntersectEvaluated(types, options = {}) {
	if (types.length === 1) return CreateType(types[0], options);
	if (types.length === 0) return Never(options);
	if (types.some((schema) => IsTransform$1(schema))) throw new Error("Cannot intersect transform types");
	return ResolveIntersect(types, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intersect/intersect.mjs
/** `[Json]` Creates an evaluated Intersect type */
function Intersect$1(types, options) {
	if (types.length === 1) return CreateType(types[0], options);
	if (types.length === 0) return Never(options);
	if (types.some((schema) => IsTransform$1(schema))) throw new Error("Cannot intersect transform types");
	return IntersectCreate(types, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/ref/ref.mjs
/** `[Json]` Creates a Ref type. The referenced type must contain a $id */
function Ref(...args) {
	const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
	if (typeof $ref !== "string") throw new TypeBoxError("Ref: $ref must be a string");
	return CreateType({
		[Kind]: "Ref",
		$ref
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed$4(target, parameters) {
	return Computed("Awaited", [Computed(target, parameters)]);
}
function FromRef$6($ref) {
	return Computed("Awaited", [Ref($ref)]);
}
function FromIntersect$9(types) {
	return Intersect$1(FromRest$4(types));
}
function FromUnion$9(types) {
	return Union$1(FromRest$4(types));
}
function FromPromise$4(type) {
	return Awaited(type);
}
function FromRest$4(types) {
	return types.map((type) => Awaited(type));
}
/** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
function Awaited(type, options) {
	return CreateType(IsComputed$1(type) ? FromComputed$4(type.target, type.parameters) : IsIntersect$1(type) ? FromIntersect$9(type.allOf) : IsUnion$1(type) ? FromUnion$9(type.anyOf) : IsPromise$1(type) ? FromPromise$4(type.item) : IsRef$1(type) ? FromRef$6(type.$ref) : type, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest$3(types) {
	const result = [];
	for (const L of types) result.push(KeyOfPropertyKeys(L));
	return result;
}
function FromIntersect$8(types) {
	return SetUnionMany(FromRest$3(types));
}
function FromUnion$8(types) {
	return SetIntersectMany(FromRest$3(types));
}
function FromTuple$6(types) {
	return types.map((_, indexer) => indexer.toString());
}
function FromArray$8(_) {
	return ["[number]"];
}
function FromProperties$14(T) {
	return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
	if (!includePatternProperties) return [];
	return globalThis.Object.getOwnPropertyNames(patternProperties).map((key) => {
		return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
	});
}
/** Returns a tuple of PropertyKeys derived from the given TSchema. */
function KeyOfPropertyKeys(type) {
	return IsIntersect$1(type) ? FromIntersect$8(type.allOf) : IsUnion$1(type) ? FromUnion$8(type.anyOf) : IsTuple$1(type) ? FromTuple$6(type.items ?? []) : IsArray$1(type) ? FromArray$8(type.items) : IsObject$1(type) ? FromProperties$14(type.properties) : IsRecord$1(type) ? FromPatternProperties(type.patternProperties) : [];
}
var includePatternProperties = false;
/** Returns a regular expression pattern derived from the given TSchema */
function KeyOfPattern(schema) {
	includePatternProperties = true;
	const keys = KeyOfPropertyKeys(schema);
	includePatternProperties = false;
	return `^(${keys.map((key) => `(${key})`).join("|")})$`;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed$3(target, parameters) {
	return Computed("KeyOf", [Computed(target, parameters)]);
}
function FromRef$5($ref) {
	return Computed("KeyOf", [Ref($ref)]);
}
function KeyOfFromType(type, options) {
	return CreateType(UnionEvaluated(KeyOfPropertyKeysToRest(KeyOfPropertyKeys(type))), options);
}
function KeyOfPropertyKeysToRest(propertyKeys) {
	return propertyKeys.map((L) => L === "[number]" ? Number$1() : Literal(L));
}
/** `[Json]` Creates a KeyOf type */
function KeyOf(type, options) {
	return IsComputed$1(type) ? FromComputed$3(type.target, type.parameters) : IsRef$1(type) ? FromRef$5(type.$ref) : IsMappedResult$1(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties$13(properties, options) {
	const result = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(properties)) result[K2] = KeyOf(properties[K2], Clone$1(options));
	return result;
}
function FromMappedResult$7(mappedResult, options) {
	return FromProperties$13(mappedResult.properties, options);
}
function KeyOfFromMappedResult(mappedResult, options) {
	return MappedResult(FromMappedResult$7(mappedResult, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
	const Acc = [];
	for (const L of T) Acc.push(...KeyOfPropertyKeys(L));
	return SetDistinct(Acc);
}
function FilterNever(T) {
	return T.filter((L) => !IsNever$1(L));
}
function CompositeProperty(T, K) {
	const Acc = [];
	for (const L of T) Acc.push(...IndexFromPropertyKeys(L, [K]));
	return FilterNever(Acc);
}
function CompositeProperties(T, K) {
	const Acc = {};
	for (const L of K) Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
	return Acc;
}
function Composite(T, options) {
	return Object$1(CompositeProperties(T, CompositeKeys(T)), options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/date/date.mjs
/** `[JavaScript]` Creates a Date type */
function Date$1(options) {
	return CreateType({
		[Kind]: "Date",
		type: "Date"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/null/null.mjs
/** `[Json]` Creates a Null type */
function Null(options) {
	return CreateType({
		[Kind]: "Null",
		type: "null"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/symbol/symbol.mjs
/** `[JavaScript]` Creates a Symbol type */
function Symbol$1(options) {
	return CreateType({
		[Kind]: "Symbol",
		type: "symbol"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/undefined/undefined.mjs
/** `[JavaScript]` Creates a Undefined type */
function Undefined(options) {
	return CreateType({
		[Kind]: "Undefined",
		type: "undefined"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/uint8array/uint8array.mjs
/** `[JavaScript]` Creates a Uint8Array type */
function Uint8Array$1(options) {
	return CreateType({
		[Kind]: "Uint8Array",
		type: "Uint8Array"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/unknown/unknown.mjs
/** `[Json]` Creates an Unknown type */
function Unknown(options) {
	return CreateType({ [Kind]: "Unknown" }, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/const/const.mjs
function FromArray$7(T) {
	return T.map((L) => FromValue$1(L, false));
}
function FromProperties$12(value) {
	const Acc = {};
	for (const K of globalThis.Object.getOwnPropertyNames(value)) Acc[K] = Readonly(FromValue$1(value[K], false));
	return Acc;
}
function ConditionalReadonly(T, root) {
	return root === true ? T : Readonly(T);
}
function FromValue$1(value, root) {
	return IsAsyncIterator$3(value) ? ConditionalReadonly(Any(), root) : IsIterator$3(value) ? ConditionalReadonly(Any(), root) : IsArray$3(value) ? Readonly(Tuple(FromArray$7(value))) : IsUint8Array$3(value) ? Uint8Array$1() : IsDate$3(value) ? Date$1() : IsObject$3(value) ? ConditionalReadonly(Object$1(FromProperties$12(value)), root) : IsFunction$3(value) ? ConditionalReadonly(Function([], Unknown()), root) : IsUndefined$3(value) ? Undefined() : IsNull$3(value) ? Null() : IsSymbol$3(value) ? Symbol$1() : IsBigInt$3(value) ? BigInt$1() : IsNumber$3(value) ? Literal(value) : IsBoolean$3(value) ? Literal(value) : IsString$3(value) ? Literal(value) : Object$1({});
}
/** `[JavaScript]` Creates a readonly const type from the given value. */
function Const(T, options) {
	return CreateType(FromValue$1(T, true), options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
function ConstructorParameters(schema, options) {
	return IsConstructor$1(schema) ? Tuple(schema.parameters, options) : Never(options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/enum/enum.mjs
/** `[Json]` Creates a Enum type */
function Enum(item, options) {
	if (IsUndefined$3(item)) throw new Error("Enum undefined or empty");
	const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
	return Union$1([...new Set(values1)].map((value) => Literal(value)), {
		...options,
		[Hint]: "Enum"
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extends/extends-check.mjs
var ExtendsResolverError = class extends TypeBoxError {};
var ExtendsResult;
(function(ExtendsResult) {
	ExtendsResult[ExtendsResult["Union"] = 0] = "Union";
	ExtendsResult[ExtendsResult["True"] = 1] = "True";
	ExtendsResult[ExtendsResult["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
	return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
	throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
	return IsNever(right) || IsIntersect(right) || IsUnion(right) || IsUnknown(right) || IsAny(right);
}
function StructuralRight(left, right) {
	return IsNever(right) ? FromNeverRight(left, right) : IsIntersect(right) ? FromIntersectRight(left, right) : IsUnion(right) ? FromUnionRight(left, right) : IsUnknown(right) ? FromUnknownRight(left, right) : IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
	return ExtendsResult.True;
}
function FromAny$2(left, right) {
	return IsIntersect(right) ? FromIntersectRight(left, right) : IsUnion(right) && right.anyOf.some((schema) => IsAny(schema) || IsUnknown(schema)) ? ExtendsResult.True : IsUnion(right) ? ExtendsResult.Union : IsUnknown(right) ? ExtendsResult.True : IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
	return IsUnknown(left) ? ExtendsResult.False : IsAny(left) ? ExtendsResult.Union : IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray$6(left, right) {
	return IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit$4(left.items, right.items));
}
function FromAsyncIterator$4(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : !IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit$4(left.items, right.items));
}
function FromBigInt$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
	return IsLiteralBoolean(left) ? ExtendsResult.True : IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor$5(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : !IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit$4(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit$4(left.returns, right.returns));
}
function FromDate$3(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction$4(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : !IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit$4(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit$4(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
	return IsLiteral(left) && IsNumber$3(left.const) ? ExtendsResult.True : IsNumber(left) || IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger$2(left, right) {
	return IsInteger(right) || IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
	return right.allOf.every((schema) => Visit$4(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect$7(left, right) {
	return left.allOf.some((schema) => Visit$4(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator$4(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : !IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit$4(left.items, right.items));
}
function FromLiteral$2(left, right) {
	return IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsString(right) ? FromStringRight(left, right) : IsNumber(right) ? FromNumberRight(left, right) : IsInteger(right) ? FromIntegerRight(left, right) : IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
	return ExtendsResult.False;
}
function FromNever$3(left, right) {
	return ExtendsResult.True;
}
function UnwrapTNot(schema) {
	let [current, depth] = [schema, 0];
	while (true) {
		if (!IsNot(current)) break;
		current = current.not;
		depth += 1;
	}
	return depth % 2 === 0 ? current : Unknown();
}
function FromNot$2(left, right) {
	return IsNot(left) ? Visit$4(UnwrapTNot(left), right) : IsNot(right) ? Visit$4(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
	return IsLiteralNumber(left) ? ExtendsResult.True : IsNumber(left) || IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsInteger(right) || IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
	return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
	return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
	return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (IsString(schema.properties.description.anyOf[0]) && IsUndefined(schema.properties.description.anyOf[1]) || IsString(schema.properties.description.anyOf[1]) && IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
	return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
	return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
	return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
	return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
	return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
	const length = Number$1();
	return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit$4(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
	return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
	const length = Number$1();
	return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit$4(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
	const then = Function([Any()], Any());
	return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit$4(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
	return Visit$4(left, right) === ExtendsResult.False ? ExtendsResult.False : IsOptional(left) && !IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
	return IsUnknown(left) ? ExtendsResult.False : IsAny(left) ? ExtendsResult.Union : IsNever(left) || IsLiteralString(left) && IsObjectStringLike(right) || IsLiteralNumber(left) && IsObjectNumberLike(right) || IsLiteralBoolean(left) && IsObjectBooleanLike(right) || IsSymbol(left) && IsObjectSymbolLike(right) || IsBigInt(left) && IsObjectBigIntLike(right) || IsString(left) && IsObjectStringLike(right) || IsSymbol(left) && IsObjectSymbolLike(right) || IsNumber(left) && IsObjectNumberLike(right) || IsInteger(left) && IsObjectNumberLike(right) || IsBoolean(left) && IsObjectBooleanLike(right) || IsUint8Array(left) && IsObjectUint8ArrayLike(right) || IsDate(left) && IsObjectDateLike(right) || IsConstructor(left) && IsObjectConstructorLike(right) || IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : IsRecord(left) && IsString(RecordKey$1(left)) ? (() => {
		return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
	})() : IsRecord(left) && IsNumber(RecordKey$1(left)) ? (() => {
		return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
	})() : ExtendsResult.False;
}
function FromObject$10(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : !IsObject(right) ? ExtendsResult.False : (() => {
		for (const key of Object.getOwnPropertyNames(right.properties)) {
			if (!(key in left.properties) && !IsOptional(right.properties[key])) return ExtendsResult.False;
			if (IsOptional(right.properties[key])) return ExtendsResult.True;
			if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) return ExtendsResult.False;
		}
		return ExtendsResult.True;
	})();
}
function FromPromise$3(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit$4(left.item, right.item));
}
function RecordKey$1(schema) {
	return PatternNumberExact in schema.patternProperties ? Number$1() : PatternStringExact in schema.patternProperties ? String$1() : Throw("Unknown record key pattern");
}
function RecordValue$1(schema) {
	return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : PatternStringExact in schema.patternProperties ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
	const [Key, Value] = [RecordKey$1(right), RecordValue$1(right)];
	return IsLiteralString(left) && IsNumber(Key) && IntoBooleanResult(Visit$4(left, Value)) === ExtendsResult.True ? ExtendsResult.True : IsUint8Array(left) && IsNumber(Key) ? Visit$4(left, Value) : IsString(left) && IsNumber(Key) ? Visit$4(left, Value) : IsArray(left) && IsNumber(Key) ? Visit$4(left, Value) : IsObject(left) ? (() => {
		for (const key of Object.getOwnPropertyNames(left.properties)) if (Property(Value, left.properties[key]) === ExtendsResult.False) return ExtendsResult.False;
		return ExtendsResult.True;
	})() : ExtendsResult.False;
}
function FromRecord$5(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : !IsRecord(right) ? ExtendsResult.False : Visit$4(RecordValue$1(left), RecordValue$1(right));
}
function FromRegExp$2(left, right) {
	return Visit$4(IsRegExp(left) ? String$1() : left, IsRegExp(right) ? String$1() : right);
}
function FromStringRight(left, right) {
	return IsLiteral(left) && IsString$3(left.const) ? ExtendsResult.True : IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral$3(left, right) {
	return IsTemplateLiteral(left) ? Visit$4(TemplateLiteralToUnion(left), right) : IsTemplateLiteral(right) ? Visit$4(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
	return IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit$4(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
	return IsNever(left) ? ExtendsResult.True : IsUnknown(left) ? ExtendsResult.False : IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple$5(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !IsTuple(right) ? ExtendsResult.False : IsUndefined$3(left.items) && !IsUndefined$3(right.items) || !IsUndefined$3(left.items) && IsUndefined$3(right.items) ? ExtendsResult.False : IsUndefined$3(left.items) && !IsUndefined$3(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit$4(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined$2(left, right) {
	return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsRecord(right) ? FromRecordRight(left, right) : IsVoid(right) ? FromVoidRight(left, right) : IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
	return right.anyOf.some((schema) => Visit$4(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion$7(left, right) {
	return left.anyOf.every((schema) => Visit$4(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
	return ExtendsResult.True;
}
function FromUnknown$2(left, right) {
	return IsNever(right) ? FromNeverRight(left, right) : IsIntersect(right) ? FromIntersectRight(left, right) : IsUnion(right) ? FromUnionRight(left, right) : IsAny(right) ? FromAnyRight(left, right) : IsString(right) ? FromStringRight(left, right) : IsNumber(right) ? FromNumberRight(left, right) : IsInteger(right) ? FromIntegerRight(left, right) : IsBoolean(right) ? FromBooleanRight(left, right) : IsArray(right) ? FromArrayRight(left, right) : IsTuple(right) ? FromTupleRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
	return IsUndefined(left) ? ExtendsResult.True : IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid$2(left, right) {
	return IsIntersect(right) ? FromIntersectRight(left, right) : IsUnion(right) ? FromUnionRight(left, right) : IsUnknown(right) ? FromUnknownRight(left, right) : IsAny(right) ? FromAnyRight(left, right) : IsObject(right) ? FromObjectRight(left, right) : IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit$4(left, right) {
	return IsTemplateLiteral(left) || IsTemplateLiteral(right) ? FromTemplateLiteral$3(left, right) : IsRegExp(left) || IsRegExp(right) ? FromRegExp$2(left, right) : IsNot(left) || IsNot(right) ? FromNot$2(left, right) : IsAny(left) ? FromAny$2(left, right) : IsArray(left) ? FromArray$6(left, right) : IsBigInt(left) ? FromBigInt$2(left, right) : IsBoolean(left) ? FromBoolean$2(left, right) : IsAsyncIterator(left) ? FromAsyncIterator$4(left, right) : IsConstructor(left) ? FromConstructor$5(left, right) : IsDate(left) ? FromDate$3(left, right) : IsFunction(left) ? FromFunction$4(left, right) : IsInteger(left) ? FromInteger$2(left, right) : IsIntersect(left) ? FromIntersect$7(left, right) : IsIterator(left) ? FromIterator$4(left, right) : IsLiteral(left) ? FromLiteral$2(left, right) : IsNever(left) ? FromNever$3(left, right) : IsNull(left) ? FromNull$2(left, right) : IsNumber(left) ? FromNumber$2(left, right) : IsObject(left) ? FromObject$10(left, right) : IsRecord(left) ? FromRecord$5(left, right) : IsString(left) ? FromString$2(left, right) : IsSymbol(left) ? FromSymbol$2(left, right) : IsTuple(left) ? FromTuple$5(left, right) : IsPromise(left) ? FromPromise$3(left, right) : IsUint8Array(left) ? FromUint8Array$2(left, right) : IsUndefined(left) ? FromUndefined$2(left, right) : IsUnion(left) ? FromUnion$7(left, right) : IsUnknown(left) ? FromUnknown$2(left, right) : IsVoid(left) ? FromVoid$2(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
	return Visit$4(left, right);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties$11(P, Right, True, False, options) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(P)) Acc[K2] = Extends(P[K2], Right, True, False, Clone$1(options));
	return Acc;
}
function FromMappedResult$6(Left, Right, True, False, options) {
	return FromProperties$11(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
	return MappedResult(FromMappedResult$6(Left, Right, True, False, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
	const R = ExtendsCheck(left, right);
	return R === ExtendsResult.Union ? Union$1([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
/** `[Json]` Creates a Conditional type */
function Extends(L, R, T, F, options) {
	return IsMappedResult$1(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey$1(L) ? CreateType(ExtendsFromMappedKey(L, R, T, F, options)) : CreateType(ExtendsResolve(L, R, T, F), options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey$2(K, U, L, R, options) {
	return { [K]: Extends(Literal(K), U, L, R, Clone$1(options)) };
}
function FromPropertyKeys$2(K, U, L, R, options) {
	return K.reduce((Acc, LK) => {
		return {
			...Acc,
			...FromPropertyKey$2(LK, U, L, R, options)
		};
	}, {});
}
function FromMappedKey$2(K, U, L, R, options) {
	return FromPropertyKeys$2(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
	return MappedResult(FromMappedKey$2(T, U, L, R, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extends/extends-undefined.mjs
/** Fast undefined check used for properties of type undefined */
function Intersect(schema) {
	return schema.allOf.every((schema) => ExtendsUndefinedCheck(schema));
}
function Union(schema) {
	return schema.anyOf.some((schema) => ExtendsUndefinedCheck(schema));
}
function Not$1(schema) {
	return !ExtendsUndefinedCheck(schema.not);
}
/** Fast undefined check used for properties of type undefined */
function ExtendsUndefinedCheck(schema) {
	return schema[Kind] === "Intersect" ? Intersect(schema) : schema[Kind] === "Union" ? Union(schema) : schema[Kind] === "Not" ? Not$1(schema) : schema[Kind] === "Undefined" ? true : false;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
	return Exclude(TemplateLiteralToUnion(L), R);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
	const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
	return excluded.length === 1 ? excluded[0] : Union$1(excluded);
}
/** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
function Exclude(L, R, options = {}) {
	if (IsTemplateLiteral$1(L)) return CreateType(ExcludeFromTemplateLiteral(L, R), options);
	if (IsMappedResult$1(L)) return CreateType(ExcludeFromMappedResult(L, R), options);
	return CreateType(IsUnion$1(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties$10(P, U) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(P)) Acc[K2] = Exclude(P[K2], U);
	return Acc;
}
function FromMappedResult$5(R, T) {
	return FromProperties$10(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
	return MappedResult(FromMappedResult$5(R, T));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
	return Extract(TemplateLiteralToUnion(L), R);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
	const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
	return extracted.length === 1 ? extracted[0] : Union$1(extracted);
}
/** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
function Extract(L, R, options) {
	if (IsTemplateLiteral$1(L)) return CreateType(ExtractFromTemplateLiteral(L, R), options);
	if (IsMappedResult$1(L)) return CreateType(ExtractFromMappedResult(L, R), options);
	return CreateType(IsUnion$1(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties$9(P, T) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(P)) Acc[K2] = Extract(P[K2], T);
	return Acc;
}
function FromMappedResult$4(R, T) {
	return FromProperties$9(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
	return MappedResult(FromMappedResult$4(R, T));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/instance-type/instance-type.mjs
/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
function InstanceType(schema, options) {
	return IsConstructor$1(schema) ? CreateType(schema.returns, options) : Never(options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
/** `[Json]` Creates a Readonly and Optional property */
function ReadonlyOptional(schema) {
	return Readonly(Optional(schema));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern, T, options) {
	return CreateType({
		[Kind]: "Record",
		type: "object",
		patternProperties: { [pattern]: T }
	}, options);
}
function RecordCreateFromKeys(K, T, options) {
	const result = {};
	for (const K2 of K) result[K2] = T;
	return Object$1(result, {
		...options,
		[Hint]: "Record"
	});
}
function FromTemplateLiteralKey(K, T, options) {
	return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(key, type, options) {
	return RecordCreateFromKeys(IndexPropertyKeys(Union$1(key)), type, options);
}
function FromLiteralKey(key, type, options) {
	return RecordCreateFromKeys([key.toString()], type, options);
}
function FromRegExpKey(key, type, options) {
	return RecordCreateFromPattern(key.source, type, options);
}
function FromStringKey(key, type, options) {
	return RecordCreateFromPattern(IsUndefined$3(key.pattern) ? PatternStringExact : key.pattern, type, options);
}
function FromAnyKey(_, type, options) {
	return RecordCreateFromPattern(PatternStringExact, type, options);
}
function FromNeverKey(_key, type, options) {
	return RecordCreateFromPattern(PatternNeverExact, type, options);
}
function FromBooleanKey(_key, type, options) {
	return Object$1({
		true: type,
		false: type
	}, options);
}
function FromIntegerKey(_key, type, options) {
	return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function FromNumberKey(_, type, options) {
	return RecordCreateFromPattern(PatternNumberExact, type, options);
}
/** `[Json]` Creates a Record type */
function Record(key, type, options = {}) {
	return IsUnion$1(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral$1(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral$1(key) ? FromLiteralKey(key.const, type, options) : IsBoolean$1(key) ? FromBooleanKey(key, type, options) : IsInteger$1(key) ? FromIntegerKey(key, type, options) : IsNumber$1(key) ? FromNumberKey(key, type, options) : IsRegExp$1(key) ? FromRegExpKey(key, type, options) : IsString$1(key) ? FromStringKey(key, type, options) : IsAny$1(key) ? FromAnyKey(key, type, options) : IsNever$1(key) ? FromNeverKey(key, type, options) : Never(options);
}
/** Gets the Records Pattern */
function RecordPattern(record) {
	return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
/** Gets the Records Key Type */
function RecordKey(type) {
	const pattern = RecordPattern(type);
	return pattern === PatternStringExact ? String$1() : pattern === PatternNumberExact ? Number$1() : String$1({ pattern });
}
/** Gets a Record Value Type */
function RecordValue(type) {
	return type.patternProperties[RecordPattern(type)];
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor$4(args, type) {
	type.parameters = FromTypes$1(args, type.parameters);
	type.returns = FromType$1(args, type.returns);
	return type;
}
function FromFunction$3(args, type) {
	type.parameters = FromTypes$1(args, type.parameters);
	type.returns = FromType$1(args, type.returns);
	return type;
}
function FromIntersect$6(args, type) {
	type.allOf = FromTypes$1(args, type.allOf);
	return type;
}
function FromUnion$6(args, type) {
	type.anyOf = FromTypes$1(args, type.anyOf);
	return type;
}
function FromTuple$4(args, type) {
	if (IsUndefined$3(type.items)) return type;
	type.items = FromTypes$1(args, type.items);
	return type;
}
function FromArray$5(args, type) {
	type.items = FromType$1(args, type.items);
	return type;
}
function FromAsyncIterator$3(args, type) {
	type.items = FromType$1(args, type.items);
	return type;
}
function FromIterator$3(args, type) {
	type.items = FromType$1(args, type.items);
	return type;
}
function FromPromise$2(args, type) {
	type.item = FromType$1(args, type.item);
	return type;
}
function FromObject$9(args, type) {
	const mappedProperties = FromProperties$8(args, type.properties);
	return {
		...type,
		...Object$1(mappedProperties)
	};
}
function FromRecord$4(args, type) {
	const result = Record(FromType$1(args, RecordKey(type)), FromType$1(args, RecordValue(type)));
	return {
		...type,
		...result
	};
}
function FromArgument$2(args, argument) {
	return argument.index in args ? args[argument.index] : Unknown();
}
function FromProperty$1(args, type) {
	const isReadonly = IsReadonly(type);
	const isOptional = IsOptional$1(type);
	const mapped = FromType$1(args, type);
	return isReadonly && isOptional ? ReadonlyOptional(mapped) : isReadonly && !isOptional ? Readonly(mapped) : !isReadonly && isOptional ? Optional(mapped) : mapped;
}
function FromProperties$8(args, properties) {
	return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
		return {
			...result,
			[key]: FromProperty$1(args, properties[key])
		};
	}, {});
}
function FromTypes$1(args, types) {
	return types.map((type) => FromType$1(args, type));
}
function FromType$1(args, type) {
	return IsConstructor$1(type) ? FromConstructor$4(args, type) : IsFunction$1(type) ? FromFunction$3(args, type) : IsIntersect$1(type) ? FromIntersect$6(args, type) : IsUnion$1(type) ? FromUnion$6(args, type) : IsTuple$1(type) ? FromTuple$4(args, type) : IsArray$1(type) ? FromArray$5(args, type) : IsAsyncIterator$1(type) ? FromAsyncIterator$3(args, type) : IsIterator$1(type) ? FromIterator$3(args, type) : IsPromise$1(type) ? FromPromise$2(args, type) : IsObject$1(type) ? FromObject$9(args, type) : IsRecord$1(type) ? FromRecord$4(args, type) : IsArgument$1(type) ? FromArgument$2(args, type) : type;
}
/** `[JavaScript]` Instantiates a type with the given parameters */
function Instantiate(type, args) {
	return FromType$1(args, CloneType(type));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/integer/integer.mjs
/** `[Json]` Creates an Integer type */
function Integer(options) {
	return CreateType({
		[Kind]: "Integer",
		type: "integer"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
	return { [K]: Intrinsic(Literal(K), M, Clone$1(options)) };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
	return K.reduce((Acc, L) => {
		return {
			...Acc,
			...MappedIntrinsicPropertyKey(L, M, options)
		};
	}, {});
}
function MappedIntrinsicProperties(T, M, options) {
	return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
	return MappedResult(MappedIntrinsicProperties(T, M, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
	const [first, rest] = [value.slice(0, 1), value.slice(1)];
	return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value) {
	const [first, rest] = [value.slice(0, 1), value.slice(1)];
	return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value) {
	return value.toUpperCase();
}
function ApplyLowercase(value) {
	return value.toLowerCase();
}
function FromTemplateLiteral$2(schema, mode, options) {
	const expression = TemplateLiteralParseExact(schema.pattern);
	if (!IsTemplateLiteralExpressionFinite(expression)) return {
		...schema,
		pattern: FromLiteralValue(schema.pattern, mode)
	};
	return TemplateLiteral([Union$1(FromRest$2([...TemplateLiteralExpressionGenerate(expression)].map((value) => Literal(value)), mode))], options);
}
function FromLiteralValue(value, mode) {
	return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
function FromRest$2(T, M) {
	return T.map((L) => Intrinsic(L, M));
}
/** Applies an intrinsic string manipulation to the given type. */
function Intrinsic(schema, mode, options = {}) {
	return IsMappedKey$1(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral$1(schema) ? FromTemplateLiteral$2(schema, mode, options) : IsUnion$1(schema) ? Union$1(FromRest$2(schema.anyOf, mode), options) : IsLiteral$1(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : CreateType(schema, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intrinsic/capitalize.mjs
/** `[Json]` Intrinsic function to Capitalize LiteralString types */
function Capitalize(T, options = {}) {
	return Intrinsic(T, "Capitalize", options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intrinsic/lowercase.mjs
/** `[Json]` Intrinsic function to Lowercase LiteralString types */
function Lowercase(T, options = {}) {
	return Intrinsic(T, "Lowercase", options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intrinsic/uncapitalize.mjs
/** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
function Uncapitalize(T, options = {}) {
	return Intrinsic(T, "Uncapitalize", options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/intrinsic/uppercase.mjs
/** `[Json]` Intrinsic function to Uppercase LiteralString types */
function Uppercase(T, options = {}) {
	return Intrinsic(T, "Uppercase", options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties$7(properties, propertyKeys, options) {
	const result = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(properties)) result[K2] = Omit(properties[K2], propertyKeys, Clone$1(options));
	return result;
}
function FromMappedResult$3(mappedResult, propertyKeys, options) {
	return FromProperties$7(mappedResult.properties, propertyKeys, options);
}
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
	return MappedResult(FromMappedResult$3(mappedResult, propertyKeys, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/omit/omit.mjs
function FromIntersect$5(types, propertyKeys) {
	return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromUnion$5(types, propertyKeys) {
	return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromProperty(properties, key) {
	const { [key]: _, ...R } = properties;
	return R;
}
function FromProperties$6(properties, propertyKeys) {
	return propertyKeys.reduce((T, K2) => FromProperty(T, K2), properties);
}
function FromObject$8(properties, propertyKeys) {
	const options = Discard(properties, [
		TransformKind,
		"$id",
		"required",
		"properties"
	]);
	return Object$1(FromProperties$6(properties["properties"], propertyKeys), options);
}
function UnionFromPropertyKeys$1(propertyKeys) {
	return Union$1(propertyKeys.reduce((result, key) => IsLiteralValue$1(key) ? [...result, Literal(key)] : result, []));
}
function OmitResolve(properties, propertyKeys) {
	return IsIntersect$1(properties) ? Intersect$1(FromIntersect$5(properties.allOf, propertyKeys)) : IsUnion$1(properties) ? Union$1(FromUnion$5(properties.anyOf, propertyKeys)) : IsObject$1(properties) ? FromObject$8(properties, propertyKeys) : Object$1({});
}
/** `[Json]` Constructs a type whose keys are picked from the given type */
function Omit(type, key, options) {
	const typeKey = IsArray$3(key) ? UnionFromPropertyKeys$1(key) : key;
	const propertyKeys = IsSchema$1(key) ? IndexPropertyKeys(key) : key;
	const isTypeRef = IsRef$1(type);
	const isKeyRef = IsRef$1(key);
	return IsMappedResult$1(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey$1(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({
		...OmitResolve(type, propertyKeys),
		...options
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey$1(type, key, options) {
	return { [key]: Omit(type, [key], Clone$1(options)) };
}
function FromPropertyKeys$1(type, propertyKeys, options) {
	return propertyKeys.reduce((Acc, LK) => {
		return {
			...Acc,
			...FromPropertyKey$1(type, LK, options)
		};
	}, {});
}
function FromMappedKey$1(type, mappedKey, options) {
	return FromPropertyKeys$1(type, mappedKey.keys, options);
}
function OmitFromMappedKey(type, mappedKey, options) {
	return MappedResult(FromMappedKey$1(type, mappedKey, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties$5(properties, propertyKeys, options) {
	const result = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(properties)) result[K2] = Pick(properties[K2], propertyKeys, Clone$1(options));
	return result;
}
function FromMappedResult$2(mappedResult, propertyKeys, options) {
	return FromProperties$5(mappedResult.properties, propertyKeys, options);
}
function PickFromMappedResult(mappedResult, propertyKeys, options) {
	return MappedResult(FromMappedResult$2(mappedResult, propertyKeys, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/pick/pick.mjs
function FromIntersect$4(types, propertyKeys) {
	return types.map((type) => PickResolve(type, propertyKeys));
}
function FromUnion$4(types, propertyKeys) {
	return types.map((type) => PickResolve(type, propertyKeys));
}
function FromProperties$4(properties, propertyKeys) {
	const result = {};
	for (const K2 of propertyKeys) if (K2 in properties) result[K2] = properties[K2];
	return result;
}
function FromObject$7(T, K) {
	const options = Discard(T, [
		TransformKind,
		"$id",
		"required",
		"properties"
	]);
	return Object$1(FromProperties$4(T["properties"], K), options);
}
function UnionFromPropertyKeys(propertyKeys) {
	return Union$1(propertyKeys.reduce((result, key) => IsLiteralValue$1(key) ? [...result, Literal(key)] : result, []));
}
function PickResolve(properties, propertyKeys) {
	return IsIntersect$1(properties) ? Intersect$1(FromIntersect$4(properties.allOf, propertyKeys)) : IsUnion$1(properties) ? Union$1(FromUnion$4(properties.anyOf, propertyKeys)) : IsObject$1(properties) ? FromObject$7(properties, propertyKeys) : Object$1({});
}
/** `[Json]` Constructs a type whose keys are picked from the given type */
function Pick(type, key, options) {
	const typeKey = IsArray$3(key) ? UnionFromPropertyKeys(key) : key;
	const propertyKeys = IsSchema$1(key) ? IndexPropertyKeys(key) : key;
	const isTypeRef = IsRef$1(type);
	const isKeyRef = IsRef$1(key);
	return IsMappedResult$1(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey$1(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({
		...PickResolve(type, propertyKeys),
		...options
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey(type, key, options) {
	return { [key]: Pick(type, [key], Clone$1(options)) };
}
function FromPropertyKeys(type, propertyKeys, options) {
	return propertyKeys.reduce((result, leftKey) => {
		return {
			...result,
			...FromPropertyKey(type, leftKey, options)
		};
	}, {});
}
function FromMappedKey(type, mappedKey, options) {
	return FromPropertyKeys(type, mappedKey.keys, options);
}
function PickFromMappedKey(type, mappedKey, options) {
	return MappedResult(FromMappedKey(type, mappedKey, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/partial/partial.mjs
function FromComputed$2(target, parameters) {
	return Computed("Partial", [Computed(target, parameters)]);
}
function FromRef$4($ref) {
	return Computed("Partial", [Ref($ref)]);
}
function FromProperties$3(properties) {
	const partialProperties = {};
	for (const K of globalThis.Object.getOwnPropertyNames(properties)) partialProperties[K] = Optional(properties[K]);
	return partialProperties;
}
function FromObject$6(type) {
	const options = Discard(type, [
		TransformKind,
		"$id",
		"required",
		"properties"
	]);
	return Object$1(FromProperties$3(type["properties"]), options);
}
function FromRest$1(types) {
	return types.map((type) => PartialResolve(type));
}
function PartialResolve(type) {
	return IsComputed$1(type) ? FromComputed$2(type.target, type.parameters) : IsRef$1(type) ? FromRef$4(type.$ref) : IsIntersect$1(type) ? Intersect$1(FromRest$1(type.allOf)) : IsUnion$1(type) ? Union$1(FromRest$1(type.anyOf)) : IsObject$1(type) ? FromObject$6(type) : IsBigInt$1(type) ? type : IsBoolean$1(type) ? type : IsInteger$1(type) ? type : IsLiteral$1(type) ? type : IsNull$1(type) ? type : IsNumber$1(type) ? type : IsString$1(type) ? type : IsSymbol$1(type) ? type : IsUndefined$1(type) ? type : Object$1({});
}
/** `[Json]` Constructs a type where all properties are optional */
function Partial(type, options) {
	if (IsMappedResult$1(type)) return PartialFromMappedResult(type, options);
	else return CreateType({
		...PartialResolve(type),
		...options
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties$2(K, options) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(K)) Acc[K2] = Partial(K[K2], Clone$1(options));
	return Acc;
}
function FromMappedResult$1(R, options) {
	return FromProperties$2(R.properties, options);
}
function PartialFromMappedResult(R, options) {
	return MappedResult(FromMappedResult$1(R, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/required/required.mjs
function FromComputed$1(target, parameters) {
	return Computed("Required", [Computed(target, parameters)]);
}
function FromRef$3($ref) {
	return Computed("Required", [Ref($ref)]);
}
function FromProperties$1(properties) {
	const requiredProperties = {};
	for (const K of globalThis.Object.getOwnPropertyNames(properties)) requiredProperties[K] = Discard(properties[K], [OptionalKind]);
	return requiredProperties;
}
function FromObject$5(type) {
	const options = Discard(type, [
		TransformKind,
		"$id",
		"required",
		"properties"
	]);
	return Object$1(FromProperties$1(type["properties"]), options);
}
function FromRest(types) {
	return types.map((type) => RequiredResolve(type));
}
function RequiredResolve(type) {
	return IsComputed$1(type) ? FromComputed$1(type.target, type.parameters) : IsRef$1(type) ? FromRef$3(type.$ref) : IsIntersect$1(type) ? Intersect$1(FromRest(type.allOf)) : IsUnion$1(type) ? Union$1(FromRest(type.anyOf)) : IsObject$1(type) ? FromObject$5(type) : IsBigInt$1(type) ? type : IsBoolean$1(type) ? type : IsInteger$1(type) ? type : IsLiteral$1(type) ? type : IsNull$1(type) ? type : IsNumber$1(type) ? type : IsString$1(type) ? type : IsSymbol$1(type) ? type : IsUndefined$1(type) ? type : Object$1({});
}
/** `[Json]` Constructs a type where all properties are required */
function Required(type, options) {
	if (IsMappedResult$1(type)) return RequiredFromMappedResult(type, options);
	else return CreateType({
		...RequiredResolve(type),
		...options
	});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties(P, options) {
	const Acc = {};
	for (const K2 of globalThis.Object.getOwnPropertyNames(P)) Acc[K2] = Required(P[K2], options);
	return Acc;
}
function FromMappedResult(R, options) {
	return FromProperties(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
	return MappedResult(FromMappedResult(R, options));
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
	return types.map((type) => {
		return IsRef$1(type) ? Dereference(moduleProperties, type.$ref) : FromType(moduleProperties, type);
	});
}
function Dereference(moduleProperties, ref) {
	return ref in moduleProperties ? IsRef$1(moduleProperties[ref]) ? Dereference(moduleProperties, moduleProperties[ref].$ref) : FromType(moduleProperties, moduleProperties[ref]) : Never();
}
function FromAwaited(parameters) {
	return Awaited(parameters[0]);
}
function FromIndex(parameters) {
	return Index(parameters[0], parameters[1]);
}
function FromKeyOf(parameters) {
	return KeyOf(parameters[0]);
}
function FromPartial(parameters) {
	return Partial(parameters[0]);
}
function FromOmit(parameters) {
	return Omit(parameters[0], parameters[1]);
}
function FromPick(parameters) {
	return Pick(parameters[0], parameters[1]);
}
function FromRequired(parameters) {
	return Required(parameters[0]);
}
function FromComputed(moduleProperties, target, parameters) {
	const dereferenced = DereferenceParameters(moduleProperties, parameters);
	return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
function FromArray$4(moduleProperties, type) {
	return Array$1(FromType(moduleProperties, type));
}
function FromAsyncIterator$2(moduleProperties, type) {
	return AsyncIterator(FromType(moduleProperties, type));
}
function FromConstructor$3(moduleProperties, parameters, instanceType) {
	return Constructor(FromTypes(moduleProperties, parameters), FromType(moduleProperties, instanceType));
}
function FromFunction$2(moduleProperties, parameters, returnType) {
	return Function(FromTypes(moduleProperties, parameters), FromType(moduleProperties, returnType));
}
function FromIntersect$3(moduleProperties, types) {
	return Intersect$1(FromTypes(moduleProperties, types));
}
function FromIterator$2(moduleProperties, type) {
	return Iterator(FromType(moduleProperties, type));
}
function FromObject$4(moduleProperties, properties) {
	return Object$1(globalThis.Object.keys(properties).reduce((result, key) => {
		return {
			...result,
			[key]: FromType(moduleProperties, properties[key])
		};
	}, {}));
}
function FromRecord$3(moduleProperties, type) {
	const [value, pattern] = [FromType(moduleProperties, RecordValue(type)), RecordPattern(type)];
	const result = CloneType(type);
	result.patternProperties[pattern] = value;
	return result;
}
function FromTransform(moduleProperties, transform) {
	return IsRef$1(transform) ? {
		...Dereference(moduleProperties, transform.$ref),
		[TransformKind]: transform[TransformKind]
	} : transform;
}
function FromTuple$3(moduleProperties, types) {
	return Tuple(FromTypes(moduleProperties, types));
}
function FromUnion$3(moduleProperties, types) {
	return Union$1(FromTypes(moduleProperties, types));
}
function FromTypes(moduleProperties, types) {
	return types.map((type) => FromType(moduleProperties, type));
}
function FromType(moduleProperties, type) {
	return IsOptional$1(type) ? CreateType(FromType(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType(moduleProperties, Discard(type, [ReadonlyKind])), type) : IsTransform$1(type) ? CreateType(FromTransform(moduleProperties, type), type) : IsArray$1(type) ? CreateType(FromArray$4(moduleProperties, type.items), type) : IsAsyncIterator$1(type) ? CreateType(FromAsyncIterator$2(moduleProperties, type.items), type) : IsComputed$1(type) ? CreateType(FromComputed(moduleProperties, type.target, type.parameters)) : IsConstructor$1(type) ? CreateType(FromConstructor$3(moduleProperties, type.parameters, type.returns), type) : IsFunction$1(type) ? CreateType(FromFunction$2(moduleProperties, type.parameters, type.returns), type) : IsIntersect$1(type) ? CreateType(FromIntersect$3(moduleProperties, type.allOf), type) : IsIterator$1(type) ? CreateType(FromIterator$2(moduleProperties, type.items), type) : IsObject$1(type) ? CreateType(FromObject$4(moduleProperties, type.properties), type) : IsRecord$1(type) ? CreateType(FromRecord$3(moduleProperties, type)) : IsTuple$1(type) ? CreateType(FromTuple$3(moduleProperties, type.items || []), type) : IsUnion$1(type) ? CreateType(FromUnion$3(moduleProperties, type.anyOf), type) : type;
}
function ComputeType(moduleProperties, key) {
	return key in moduleProperties ? FromType(moduleProperties, moduleProperties[key]) : Never();
}
function ComputeModuleProperties(moduleProperties) {
	return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
		return {
			...result,
			[key]: ComputeType(moduleProperties, key)
		};
	}, {});
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/module/module.mjs
var TModule = class {
	constructor($defs) {
		const computed = ComputeModuleProperties($defs);
		const identified = this.WithIdentifiers(computed);
		this.$defs = identified;
	}
	/** `[Json]` Imports a Type by Key. */
	Import(key, options) {
		const $defs = {
			...this.$defs,
			[key]: CreateType(this.$defs[key], options)
		};
		return CreateType({
			[Kind]: "Import",
			$defs,
			$ref: key
		});
	}
	WithIdentifiers($defs) {
		return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
			return {
				...result,
				[key]: {
					...$defs[key],
					$id: key
				}
			};
		}, {});
	}
};
/** `[Json]` Creates a Type Definition Module. */
function Module(properties) {
	return new TModule(properties);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/not/not.mjs
/** `[Json]` Creates a Not type */
function Not(type, options) {
	return CreateType({
		[Kind]: "Not",
		not: type
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/parameters/parameters.mjs
/** `[JavaScript]` Extracts the Parameters from the given Function type */
function Parameters(schema, options) {
	return IsFunction$1(schema) ? Tuple(schema.parameters, options) : Never();
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
/** `[Json]` Creates a Recursive type */
function Recursive(callback, options = {}) {
	if (IsUndefined$3(options.$id)) options.$id = `T${Ordinal++}`;
	const thisType = CloneType(callback({
		[Kind]: "This",
		$ref: `${options.$id}`
	}));
	thisType.$id = options.$id;
	return CreateType({
		[Hint]: "Recursive",
		...thisType
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/regexp/regexp.mjs
/** `[JavaScript]` Creates a RegExp type */
function RegExp$1(unresolved, options) {
	const expr = IsString$3(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
	return CreateType({
		[Kind]: "RegExp",
		type: "RegExp",
		source: expr.source,
		flags: expr.flags
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
	return IsIntersect$1(T) ? T.allOf : IsUnion$1(T) ? T.anyOf : IsTuple$1(T) ? T.items ?? [] : [];
}
/** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
function Rest(T) {
	return RestResolve(T);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/return-type/return-type.mjs
/** `[JavaScript]` Extracts the ReturnType from the given Function type */
function ReturnType(schema, options) {
	return IsFunction$1(schema) ? CreateType(schema.returns, options) : Never(options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/transform/transform.mjs
var TransformDecodeBuilder = class {
	constructor(schema) {
		this.schema = schema;
	}
	Decode(decode) {
		return new TransformEncodeBuilder(this.schema, decode);
	}
};
var TransformEncodeBuilder = class {
	constructor(schema, decode) {
		this.schema = schema;
		this.decode = decode;
	}
	EncodeTransform(encode, schema) {
		const Encode = (value) => schema[TransformKind].Encode(encode(value));
		const Decode = (value) => this.decode(schema[TransformKind].Decode(value));
		const Codec = {
			Encode,
			Decode
		};
		return {
			...schema,
			[TransformKind]: Codec
		};
	}
	EncodeSchema(encode, schema) {
		const Codec = {
			Decode: this.decode,
			Encode: encode
		};
		return {
			...schema,
			[TransformKind]: Codec
		};
	}
	Encode(encode) {
		return IsTransform$1(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
	}
};
/** `[Json]` Creates a Transform type */
function Transform(schema) {
	return new TransformDecodeBuilder(schema);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/unsafe/unsafe.mjs
/** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
function Unsafe(options = {}) {
	return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/void/void.mjs
/** `[JavaScript]` Creates a Void type */
function Void(options) {
	return CreateType({
		[Kind]: "Void",
		type: "void"
	}, options);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/type/type/index.mjs
/** JavaScript Type Builder with Static Resolution for TypeScript */
var Type = /* @__PURE__ */ __exportAll({
	Any: () => Any,
	Argument: () => Argument,
	Array: () => Array$1,
	AsyncIterator: () => AsyncIterator,
	Awaited: () => Awaited,
	BigInt: () => BigInt$1,
	Boolean: () => Boolean$1,
	Capitalize: () => Capitalize,
	Composite: () => Composite,
	Const: () => Const,
	Constructor: () => Constructor,
	ConstructorParameters: () => ConstructorParameters,
	Date: () => Date$1,
	Enum: () => Enum,
	Exclude: () => Exclude,
	Extends: () => Extends,
	Extract: () => Extract,
	Function: () => Function,
	Index: () => Index,
	InstanceType: () => InstanceType,
	Instantiate: () => Instantiate,
	Integer: () => Integer,
	Intersect: () => Intersect$1,
	Iterator: () => Iterator,
	KeyOf: () => KeyOf,
	Literal: () => Literal,
	Lowercase: () => Lowercase,
	Mapped: () => Mapped,
	Module: () => Module,
	Never: () => Never,
	Not: () => Not,
	Null: () => Null,
	Number: () => Number$1,
	Object: () => Object$1,
	Omit: () => Omit,
	Optional: () => Optional,
	Parameters: () => Parameters,
	Partial: () => Partial,
	Pick: () => Pick,
	Promise: () => Promise$1,
	Readonly: () => Readonly,
	ReadonlyOptional: () => ReadonlyOptional,
	Record: () => Record,
	Recursive: () => Recursive,
	Ref: () => Ref,
	RegExp: () => RegExp$1,
	Required: () => Required,
	Rest: () => Rest,
	ReturnType: () => ReturnType,
	String: () => String$1,
	Symbol: () => Symbol$1,
	TemplateLiteral: () => TemplateLiteral,
	Transform: () => Transform,
	Tuple: () => Tuple,
	Uint8Array: () => Uint8Array$1,
	Uncapitalize: () => Uncapitalize,
	Undefined: () => Undefined,
	Union: () => Union$1,
	Unknown: () => Unknown,
	Unsafe: () => Unsafe,
	Uppercase: () => Uppercase,
	Void: () => Void
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/compose.js
/**
* Work around for: https://github.com/sinclairzx81/typebox/issues/1264
*/
var compose = (...args) => {
	return Type.Composite(args);
};
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/deref/deref.mjs
var TypeDereferenceError = class extends TypeBoxError {
	constructor(schema) {
		super(`Unable to dereference schema with $id '${schema.$ref}'`);
		this.schema = schema;
	}
};
function Resolve(schema, references) {
	const target = references.find((target) => target.$id === schema.$ref);
	if (target === void 0) throw new TypeDereferenceError(schema);
	return Deref(target, references);
}
/** `[Internal]` Pushes a schema onto references if the schema has an $id and does not exist on references */
function Pushref(schema, references) {
	if (!IsString$2(schema.$id) || references.some((target) => target.$id === schema.$id)) return references;
	references.push(schema);
	return references;
}
/** `[Internal]` Dereferences a schema from the references array or throws if not found */
function Deref(schema, references) {
	return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/hash/hash.mjs
var ValueHashError = class extends TypeBoxError {
	constructor(value) {
		super(`Unable to hash value`);
		this.value = value;
	}
};
var ByteMarker;
(function(ByteMarker) {
	ByteMarker[ByteMarker["Undefined"] = 0] = "Undefined";
	ByteMarker[ByteMarker["Null"] = 1] = "Null";
	ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
	ByteMarker[ByteMarker["Number"] = 3] = "Number";
	ByteMarker[ByteMarker["String"] = 4] = "String";
	ByteMarker[ByteMarker["Object"] = 5] = "Object";
	ByteMarker[ByteMarker["Array"] = 6] = "Array";
	ByteMarker[ByteMarker["Date"] = 7] = "Date";
	ByteMarker[ByteMarker["Uint8Array"] = 8] = "Uint8Array";
	ByteMarker[ByteMarker["Symbol"] = 9] = "Symbol";
	ByteMarker[ByteMarker["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("18446744073709551616")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = /* @__PURE__ */ new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
	const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
	for (let i = 0; i < byteCount; i++) yield value >> 8 * (byteCount - 1 - i) & 255;
}
function ArrayType(value) {
	FNV1A64(ByteMarker.Array);
	for (const item of value) Visit$3(item);
}
function BooleanType(value) {
	FNV1A64(ByteMarker.Boolean);
	FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
	FNV1A64(ByteMarker.BigInt);
	F64In.setBigInt64(0, value);
	for (const byte of F64Out) FNV1A64(byte);
}
function DateType(value) {
	FNV1A64(ByteMarker.Date);
	Visit$3(value.getTime());
}
function NullType(value) {
	FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
	FNV1A64(ByteMarker.Number);
	F64In.setFloat64(0, value);
	for (const byte of F64Out) FNV1A64(byte);
}
function ObjectType(value) {
	FNV1A64(ByteMarker.Object);
	for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
		Visit$3(key);
		Visit$3(value[key]);
	}
}
function StringType(value) {
	FNV1A64(ByteMarker.String);
	for (let i = 0; i < value.length; i++) for (const byte of NumberToBytes(value.charCodeAt(i))) FNV1A64(byte);
}
function SymbolType(value) {
	FNV1A64(ByteMarker.Symbol);
	Visit$3(value.description);
}
function Uint8ArrayType(value) {
	FNV1A64(ByteMarker.Uint8Array);
	for (let i = 0; i < value.length; i++) FNV1A64(value[i]);
}
function UndefinedType(value) {
	return FNV1A64(ByteMarker.Undefined);
}
function Visit$3(value) {
	if (IsArray$2(value)) return ArrayType(value);
	if (IsBoolean$2(value)) return BooleanType(value);
	if (IsBigInt$2(value)) return BigIntType(value);
	if (IsDate$2(value)) return DateType(value);
	if (IsNull$2(value)) return NullType(value);
	if (IsNumber$2(value)) return NumberType(value);
	if (IsObject$2(value)) return ObjectType(value);
	if (IsString$2(value)) return StringType(value);
	if (IsSymbol$2(value)) return SymbolType(value);
	if (IsUint8Array$2(value)) return Uint8ArrayType(value);
	if (IsUndefined$2(value)) return UndefinedType(value);
	throw new ValueHashError(value);
}
function FNV1A64(byte) {
	Accumulator = Accumulator ^ Bytes[byte];
	Accumulator = Accumulator * Prime % Size;
}
/** Creates a FNV1A-64 non cryptographic hash of the given value */
function Hash(value) {
	Accumulator = BigInt("14695981039346656037");
	Visit$3(value);
	return Accumulator;
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/check/check.mjs
var ValueCheckUnknownTypeError = class extends TypeBoxError {
	constructor(schema) {
		super(`Unknown type`);
		this.schema = schema;
	}
};
function setCache(cache, value, schema) {
	const cachedValue = cache.get(value);
	if (cachedValue && cachedValue.has(schema)) return false;
	if (cachedValue) {
		cachedValue.add(schema);
		return true;
	}
	cache.set(value, new WeakSet([schema]));
}
function IsAnyOrUnknown(schema) {
	return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined(value) {
	return value !== void 0;
}
function FromAny$1(schema, references, value) {
	return true;
}
function FromArgument$1(schema, references, value) {
	return true;
}
function FromArray$3(schema, references, value, cache) {
	if (!IsArray$2(value)) return false;
	if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) return false;
	if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) return false;
	if (setCache(cache, value, schema) === false) return true;
	if (!value.every((value) => Visit$2(schema.items, references, value, cache))) return false;
	if (schema.uniqueItems === true && !(function() {
		const set = /* @__PURE__ */ new Set();
		for (const element of value) {
			const hashed = Hash(element);
			if (set.has(hashed)) return false;
			else set.add(hashed);
		}
		return true;
	})()) return false;
	if (!(IsDefined(schema.contains) || IsNumber$2(schema.minContains) || IsNumber$2(schema.maxContains))) return true;
	const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
	const containsCount = value.reduce((acc, value) => Visit$2(containsSchema, references, value, cache) ? acc + 1 : acc, 0);
	if (containsCount === 0) return false;
	if (IsNumber$2(schema.minContains) && containsCount < schema.minContains) return false;
	if (IsNumber$2(schema.maxContains) && containsCount > schema.maxContains) return false;
	return true;
}
function FromAsyncIterator$1(schema, references, value) {
	return IsAsyncIterator$2(value);
}
function FromBigInt$1(schema, references, value) {
	if (!IsBigInt$2(value)) return false;
	if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) return false;
	if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) return false;
	if (IsDefined(schema.maximum) && !(value <= schema.maximum)) return false;
	if (IsDefined(schema.minimum) && !(value >= schema.minimum)) return false;
	if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) return false;
	return true;
}
function FromBoolean$1(schema, references, value) {
	return IsBoolean$2(value);
}
function FromConstructor$2(schema, references, value, cache) {
	return Visit$2(schema.returns, references, value.prototype, cache);
}
function FromDate$2(schema, references, value) {
	if (!IsDate$2(value)) return false;
	if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) return false;
	if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) return false;
	if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) return false;
	if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) return false;
	if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) return false;
	return true;
}
function FromFunction$1(schema, references, value) {
	return IsFunction$2(value);
}
function FromImport$2(schema, references, value, cache) {
	const definitions = globalThis.Object.values(schema.$defs);
	const target = schema.$defs[schema.$ref];
	return Visit$2(target, [...references, ...definitions], value, cache);
}
function FromInteger$1(schema, references, value) {
	if (!IsInteger$2(value)) return false;
	if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) return false;
	if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) return false;
	if (IsDefined(schema.maximum) && !(value <= schema.maximum)) return false;
	if (IsDefined(schema.minimum) && !(value >= schema.minimum)) return false;
	if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) return false;
	return true;
}
function FromIntersect$2(schema, references, value, cache) {
	const check1 = schema.allOf.every((schema) => Visit$2(schema, references, value, cache));
	if (schema.unevaluatedProperties === false) {
		const keyPattern = new RegExp(KeyOfPattern(schema));
		const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
		return check1 && check2;
	} else if (IsSchema$1(schema.unevaluatedProperties)) {
		const keyCheck = new RegExp(KeyOfPattern(schema));
		const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit$2(schema.unevaluatedProperties, references, value[key], cache));
		return check1 && check2;
	} else return check1;
}
function FromIterator$1(schema, references, value) {
	return IsIterator$2(value);
}
function FromLiteral$1(schema, references, value) {
	return value === schema.const;
}
function FromNever$2(schema, references, value) {
	return false;
}
function FromNot$1(schema, references, value, cache) {
	return !Visit$2(schema.not, references, value, cache);
}
function FromNull$1(schema, references, value) {
	return IsNull$2(value);
}
function FromNumber$1(schema, references, value) {
	if (!TypeSystemPolicy.IsNumberLike(value)) return false;
	if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) return false;
	if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) return false;
	if (IsDefined(schema.minimum) && !(value >= schema.minimum)) return false;
	if (IsDefined(schema.maximum) && !(value <= schema.maximum)) return false;
	if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) return false;
	return true;
}
function FromObject$3(schema, references, value, cache) {
	if (!TypeSystemPolicy.IsObjectLike(value)) return false;
	if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) return false;
	if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) return false;
	if (setCache(cache, value, schema) === false) return true;
	const knownKeys = Object.getOwnPropertyNames(schema.properties);
	for (const knownKey of knownKeys) {
		const property = schema.properties[knownKey];
		if (schema.required && schema.required.includes(knownKey)) {
			if (!Visit$2(property, references, value[knownKey], cache)) return false;
			if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) return false;
		} else if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit$2(property, references, value[knownKey], cache)) return false;
	}
	if (schema.additionalProperties === false) {
		const valueKeys = Object.getOwnPropertyNames(value);
		if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) return true;
		else return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
	} else if (typeof schema.additionalProperties === "object") return Object.getOwnPropertyNames(value).every((key) => knownKeys.includes(key) || Visit$2(schema.additionalProperties, references, value[key], cache));
	else return true;
}
function FromPromise$1(schema, references, value) {
	return IsPromise$2(value);
}
function FromRecord$2(schema, references, value, cache) {
	if (!TypeSystemPolicy.IsRecordLike(value)) return false;
	if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) return false;
	if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) return false;
	const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
	const regex = new RegExp(patternKey);
	const check1 = Object.entries(value).every(([key, value]) => {
		return regex.test(key) ? Visit$2(patternSchema, references, value, cache) : true;
	});
	const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value]) => {
		return !regex.test(key) ? Visit$2(schema.additionalProperties, references, value, cache) : true;
	}) : true;
	const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
		return regex.test(key);
	}) : true;
	return check1 && check2 && check3;
}
function FromRef$2(schema, references, value, cache) {
	return Visit$2(Deref(schema, references), references, value, cache);
}
function FromRegExp$1(schema, references, value) {
	const regex = new RegExp(schema.source, schema.flags);
	if (IsDefined(schema.minLength)) {
		if (!(value.length >= schema.minLength)) return false;
	}
	if (IsDefined(schema.maxLength)) {
		if (!(value.length <= schema.maxLength)) return false;
	}
	return regex.test(value);
}
function FromString$1(schema, references, value) {
	if (!IsString$2(value)) return false;
	if (IsDefined(schema.minLength)) {
		if (!(value.length >= schema.minLength)) return false;
	}
	if (IsDefined(schema.maxLength)) {
		if (!(value.length <= schema.maxLength)) return false;
	}
	if (IsDefined(schema.pattern)) {
		if (!new RegExp(schema.pattern).test(value)) return false;
	}
	if (IsDefined(schema.format)) {
		if (!Has$1(schema.format)) return false;
		return Get$1(schema.format)(value);
	}
	return true;
}
function FromSymbol$1(schema, references, value) {
	return IsSymbol$2(value);
}
function FromTemplateLiteral$1(schema, references, value) {
	return IsString$2(value) && new RegExp(schema.pattern).test(value);
}
function FromThis$2(schema, references, value, cache) {
	return Visit$2(Deref(schema, references), references, value, cache);
}
function FromTuple$2(schema, references, value, cache) {
	if (!IsArray$2(value)) return false;
	if (schema.items === void 0 && !(value.length === 0)) return false;
	if (!(value.length === schema.maxItems)) return false;
	if (!schema.items) return true;
	for (let i = 0; i < schema.items.length; i++) if (!Visit$2(schema.items[i], references, value[i], cache)) return false;
	return true;
}
function FromUndefined$1(schema, references, value) {
	return IsUndefined$2(value);
}
function FromUnion$2(schema, references, value, cache) {
	return schema.anyOf.some((inner) => Visit$2(inner, references, value, cache));
}
function FromUint8Array$1(schema, references, value) {
	if (!IsUint8Array$2(value)) return false;
	if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) return false;
	if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) return false;
	return true;
}
function FromUnknown$1(schema, references, value) {
	return true;
}
function FromVoid$1(schema, references, value) {
	return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind$1(schema, references, value) {
	if (!Has(schema[Kind])) return false;
	return Get(schema[Kind])(schema, value);
}
function Visit$2(schema, references, value, cache) {
	const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
	const schema_ = schema;
	switch (schema_[Kind]) {
		case "Any": return FromAny$1(schema_, references_, value);
		case "Argument": return FromArgument$1(schema_, references_, value);
		case "Array": return FromArray$3(schema_, references_, value, cache);
		case "AsyncIterator": return FromAsyncIterator$1(schema_, references_, value);
		case "BigInt": return FromBigInt$1(schema_, references_, value);
		case "Boolean": return FromBoolean$1(schema_, references_, value);
		case "Constructor": return FromConstructor$2(schema_, references_, value, cache);
		case "Date": return FromDate$2(schema_, references_, value);
		case "Function": return FromFunction$1(schema_, references_, value);
		case "Import": return FromImport$2(schema_, references_, value, cache);
		case "Integer": return FromInteger$1(schema_, references_, value);
		case "Intersect": return FromIntersect$2(schema_, references_, value, cache);
		case "Iterator": return FromIterator$1(schema_, references_, value);
		case "Literal": return FromLiteral$1(schema_, references_, value);
		case "Never": return FromNever$2(schema_, references_, value);
		case "Not": return FromNot$1(schema_, references_, value, cache);
		case "Null": return FromNull$1(schema_, references_, value);
		case "Number": return FromNumber$1(schema_, references_, value);
		case "Object": return FromObject$3(schema_, references_, value, cache);
		case "Promise": return FromPromise$1(schema_, references_, value);
		case "Record": return FromRecord$2(schema_, references_, value, cache);
		case "Ref": return FromRef$2(schema_, references_, value, cache);
		case "RegExp": return FromRegExp$1(schema_, references_, value);
		case "String": return FromString$1(schema_, references_, value);
		case "Symbol": return FromSymbol$1(schema_, references_, value);
		case "TemplateLiteral": return FromTemplateLiteral$1(schema_, references_, value);
		case "This": return FromThis$2(schema_, references_, value, cache);
		case "Tuple": return FromTuple$2(schema_, references_, value, cache);
		case "Undefined": return FromUndefined$1(schema_, references_, value);
		case "Union": return FromUnion$2(schema_, references_, value, cache);
		case "Uint8Array": return FromUint8Array$1(schema_, references_, value);
		case "Unknown": return FromUnknown$1(schema_, references_, value);
		case "Void": return FromVoid$1(schema_, references_, value);
		default:
			if (!Has(schema_[Kind])) throw new ValueCheckUnknownTypeError(schema_);
			return FromKind$1(schema_, references_, value);
	}
}
/** Returns true if the value matches the given type. */
function Check(...args) {
	if (args.length === 2 || args.length === 3 && args[2] instanceof WeakMap) return Visit$2(args[0], [], args[1], args[2] ?? /* @__PURE__ */ new WeakMap());
	return Visit$2(args[0], args[1], args[2], args[3] ?? /* @__PURE__ */ new WeakMap());
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/clone/clone.mjs
function FromObject$2(value, cache) {
	if (cache.has(value)) return cache.get(value);
	const Acc = {};
	cache.set(value, Acc);
	for (const key of Object.getOwnPropertyNames(value)) Acc[key] = Clone(value[key], cache);
	for (const key of Object.getOwnPropertySymbols(value)) Acc[key] = Clone(value[key], cache);
	return Acc;
}
function FromArray$2(value, cache) {
	if (cache.has(value)) return cache.get(value);
	const Acc = [];
	cache.set(value, Acc);
	for (let i = 0; i < value.length; i++) Acc.push(Clone(value[i], cache));
	return Acc;
}
function FromTypedArray(value) {
	return value.slice();
}
function FromMap(value) {
	return new Map(Clone([...value.entries()]));
}
function FromSet(value) {
	return new Set(Clone([...value.entries()]));
}
function FromDate$1(value) {
	return new Date(value.toISOString());
}
function FromValue(value) {
	return value;
}
/** Returns a clone of the given value */
function Clone(value, cache = /* @__PURE__ */ new WeakMap()) {
	if (IsArray$2(value)) return FromArray$2(value, cache);
	if (IsDate$2(value)) return FromDate$1(value);
	if (IsTypedArray(value)) return FromTypedArray(value);
	if (IsMap(value)) return FromMap(value);
	if (IsSet(value)) return FromSet(value);
	if (IsObject$2(value)) return FromObject$2(value, cache);
	if (IsValueType(value)) return FromValue(value);
	throw new Error("ValueClone: Unable to clone value");
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/create/create.mjs
var ValueCreateError = class extends TypeBoxError {
	constructor(schema, message) {
		super(message);
		this.schema = schema;
	}
};
function FromDefault(value) {
	return IsFunction$2(value) ? value() : Clone(value);
}
function FromAny(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return {};
}
function FromArgument(schema, references) {
	return {};
}
function FromArray$1(schema, references) {
	if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
	else if ("contains" in schema && !HasPropertyKey(schema, "default")) throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
	else if ("default" in schema) return FromDefault(schema.default);
	else if (schema.minItems !== void 0) return Array.from({ length: schema.minItems }).map((item) => {
		return Visit$1(schema.items, references);
	});
	else return [];
}
function FromAsyncIterator(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return (async function* () {})();
}
function FromBigInt(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return BigInt(0);
}
function FromBoolean(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return false;
}
function FromConstructor$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else {
		const value = Visit$1(schema.returns, references);
		if (typeof value === "object" && !Array.isArray(value)) return class {
			constructor() {
				for (const [key, val] of Object.entries(value)) {
					const self = this;
					self[key] = val;
				}
			}
		};
		else return class {};
	}
}
function FromDate(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if (schema.minimumTimestamp !== void 0) return new Date(schema.minimumTimestamp);
	else return /* @__PURE__ */ new Date();
}
function FromFunction(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return () => Visit$1(schema.returns, references);
}
function FromImport$1(schema, references) {
	const definitions = globalThis.Object.values(schema.$defs);
	const target = schema.$defs[schema.$ref];
	return Visit$1(target, [...references, ...definitions]);
}
function FromInteger(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if (schema.minimum !== void 0) return schema.minimum;
	else return 0;
}
function FromIntersect$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else {
		const value = schema.allOf.reduce((acc, schema) => {
			const next = Visit$1(schema, references);
			return typeof next === "object" ? {
				...acc,
				...next
			} : next;
		}, {});
		if (!Check(schema, references, value)) throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
		return value;
	}
}
function FromIterator(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return (function* () {})();
}
function FromLiteral(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return schema.const;
}
function FromNever$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
}
function FromNot(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else throw new ValueCreateError(schema, "Not types must have a default value");
}
function FromNull(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return null;
}
function FromNumber(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if (schema.minimum !== void 0) return schema.minimum;
	else return 0;
}
function FromObject$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else {
		const required = new Set(schema.required);
		const Acc = {};
		for (const [key, subschema] of Object.entries(schema.properties)) {
			if (!required.has(key)) continue;
			Acc[key] = Visit$1(subschema, references);
		}
		return Acc;
	}
}
function FromPromise(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return Promise.resolve(Visit$1(schema.item, references));
}
function FromRecord$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return {};
}
function FromRef$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return Visit$1(Deref(schema, references), references);
}
function FromRegExp(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
}
function FromString(schema, references) {
	if (schema.pattern !== void 0) {
		if (!HasPropertyKey(schema, "default")) throw new ValueCreateError(schema, "String types with patterns must specify a default value");
		else return FromDefault(schema.default);
	} else if (schema.format !== void 0) {
		if (!HasPropertyKey(schema, "default")) throw new ValueCreateError(schema, "String types with formats must specify a default value");
		else return FromDefault(schema.default);
	} else if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if (schema.minLength !== void 0) return Array.from({ length: schema.minLength }).map(() => " ").join("");
	else return "";
}
function FromSymbol(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if ("value" in schema) return Symbol.for(schema.value);
	else return Symbol();
}
function FromTemplateLiteral(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	if (!IsTemplateLiteralFinite(schema)) throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
	return TemplateLiteralGenerate(schema)[0];
}
function FromThis$1(schema, references) {
	if (recursiveDepth++ > recursiveMaxDepth) throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return Visit$1(Deref(schema, references), references);
}
function FromTuple$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	if (schema.items === void 0) return [];
	else return Array.from({ length: schema.minItems }).map((_, index) => Visit$1(schema.items[index], references));
}
function FromUndefined(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return;
}
function FromUnion$1(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if (schema.anyOf.length === 0) throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
	else return Visit$1(schema.anyOf[0], references);
}
function FromUint8Array(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else if (schema.minByteLength !== void 0) return new Uint8Array(schema.minByteLength);
	else return /* @__PURE__ */ new Uint8Array(0);
}
function FromUnknown(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return {};
}
function FromVoid(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else return;
}
function FromKind(schema, references) {
	if (HasPropertyKey(schema, "default")) return FromDefault(schema.default);
	else throw new Error("User defined types must specify a default value");
}
function Visit$1(schema, references) {
	const references_ = Pushref(schema, references);
	const schema_ = schema;
	switch (schema_[Kind]) {
		case "Any": return FromAny(schema_, references_);
		case "Argument": return FromArgument(schema_, references_);
		case "Array": return FromArray$1(schema_, references_);
		case "AsyncIterator": return FromAsyncIterator(schema_, references_);
		case "BigInt": return FromBigInt(schema_, references_);
		case "Boolean": return FromBoolean(schema_, references_);
		case "Constructor": return FromConstructor$1(schema_, references_);
		case "Date": return FromDate(schema_, references_);
		case "Function": return FromFunction(schema_, references_);
		case "Import": return FromImport$1(schema_, references_);
		case "Integer": return FromInteger(schema_, references_);
		case "Intersect": return FromIntersect$1(schema_, references_);
		case "Iterator": return FromIterator(schema_, references_);
		case "Literal": return FromLiteral(schema_, references_);
		case "Never": return FromNever$1(schema_, references_);
		case "Not": return FromNot(schema_, references_);
		case "Null": return FromNull(schema_, references_);
		case "Number": return FromNumber(schema_, references_);
		case "Object": return FromObject$1(schema_, references_);
		case "Promise": return FromPromise(schema_, references_);
		case "Record": return FromRecord$1(schema_, references_);
		case "Ref": return FromRef$1(schema_, references_);
		case "RegExp": return FromRegExp(schema_, references_);
		case "String": return FromString(schema_, references_);
		case "Symbol": return FromSymbol(schema_, references_);
		case "TemplateLiteral": return FromTemplateLiteral(schema_, references_);
		case "This": return FromThis$1(schema_, references_);
		case "Tuple": return FromTuple$1(schema_, references_);
		case "Undefined": return FromUndefined(schema_, references_);
		case "Union": return FromUnion$1(schema_, references_);
		case "Uint8Array": return FromUint8Array(schema_, references_);
		case "Unknown": return FromUnknown(schema_, references_);
		case "Void": return FromVoid(schema_, references_);
		default:
			if (!Has(schema_[Kind])) throw new ValueCreateError(schema_, "Unknown type");
			return FromKind(schema_, references_);
	}
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
/** Creates a value from the given schema */
function Create(...args) {
	recursiveDepth = 0;
	return args.length === 2 ? Visit$1(args[0], args[1]) : Visit$1(args[0], []);
}
//#endregion
//#region node_modules/@scalar/typebox/build/esm/value/cast/cast.mjs
var ValueCastError = class extends TypeBoxError {
	constructor(schema, message) {
		super(message);
		this.schema = schema;
	}
};
function ScoreUnion(schema, references, value) {
	if (schema[Kind] === "Object" && typeof value === "object" && !IsNull$2(value)) {
		const object = schema;
		const keys = Object.getOwnPropertyNames(value);
		return Object.entries(object.properties).reduce((acc, [key, schema]) => {
			const literal = schema[Kind] === "Literal" && schema.const === value[key] ? 100 : 0;
			const checks = Check(schema, references, value[key]) ? 10 : 0;
			const exists = keys.includes(key) ? 1 : 0;
			return acc + (literal + checks + exists);
		}, 0);
	} else if (schema[Kind] === "Union") {
		const scores = schema.anyOf.map((schema) => Deref(schema, references)).map((schema) => ScoreUnion(schema, references, value));
		return Math.max(...scores);
	} else return Check(schema, references, value) ? 1 : 0;
}
function SelectUnion(union, references, value) {
	const schemas = union.anyOf.map((schema) => Deref(schema, references));
	let [select, best] = [schemas[0], 0];
	for (const schema of schemas) {
		const score = ScoreUnion(schema, references, value);
		if (score > best) {
			select = schema;
			best = score;
		}
	}
	return select;
}
function CastUnion(union, references, value, cache) {
	if ("default" in union) return typeof value === "function" ? union.default : Clone(union.default);
	else return Cast(SelectUnion(union, references, value), references, value, cache);
}
function DefaultClone(schema, references, value) {
	return Check(schema, references, value) ? Clone(value) : Create(schema, references);
}
function Default(schema, references, value) {
	return Check(schema, references, value) ? value : Create(schema, references);
}
function FromArray(schema, references, value, cache) {
	if (Check(schema, references, value)) return Clone(value);
	const created = IsArray$2(value) ? value : Create(schema, references);
	const minimum = IsNumber$2(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
	const casted = (IsNumber$2(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum).map((value) => Visit(schema.items, references, value, cache));
	if (schema.uniqueItems !== true) return casted;
	const unique = [...new Set(casted)];
	if (!Check(schema, references, unique)) throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
	return unique;
}
function FromConstructor(schema, references, value, cache) {
	if (Check(schema, references, value)) return Create(schema, references);
	const required = new Set(schema.returns.required || []);
	const result = function() {};
	for (const [key, property] of Object.entries(schema.returns.properties)) {
		if (!required.has(key) && value.prototype[key] === void 0) continue;
		result.prototype[key] = Visit(property, references, value.prototype[key], cache);
	}
	return result;
}
function FromImport(schema, references, value, cache) {
	const definitions = globalThis.Object.values(schema.$defs);
	const target = schema.$defs[schema.$ref];
	return Visit(target, [...references, ...definitions], value, cache);
}
function IntersectAssign(correct, value) {
	if (IsObject$2(correct) && !IsObject$2(value) || !IsObject$2(correct) && IsObject$2(value)) return correct;
	if (!IsObject$2(correct) || !IsObject$2(value)) return value;
	return globalThis.Object.getOwnPropertyNames(correct).reduce((result, key) => {
		const property = key in value ? IntersectAssign(correct[key], value[key]) : correct[key];
		return {
			...result,
			[key]: property
		};
	}, {});
}
function FromIntersect(schema, references, value) {
	if (Check(schema, references, value)) return value;
	const correct = Create(schema, references);
	const assigned = IntersectAssign(correct, value);
	return Check(schema, references, assigned) ? assigned : correct;
}
function FromNever(schema, references, value) {
	throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject(schema, references, value, cache) {
	if (cache.has(value)) return cache.get(value);
	if (Check(schema, references, value)) return value;
	if (value === null || typeof value !== "object") return Create(schema, references);
	const required = new Set(schema.required || []);
	const result = {};
	cache.set(value, result);
	for (const [key, property] of Object.entries(schema.properties)) {
		if (!required.has(key) && value[key] === void 0) continue;
		result[key] = Visit(property, references, value[key], cache);
	}
	if (typeof schema.additionalProperties === "object") {
		const propertyNames = Object.getOwnPropertyNames(schema.properties);
		for (const propertyName of Object.getOwnPropertyNames(value)) {
			if (propertyNames.includes(propertyName)) continue;
			result[propertyName] = Visit(schema.additionalProperties, references, value[propertyName], cache);
		}
	}
	return result;
}
function FromRecord(schema, references, value, cache) {
	if (Check(schema, references, value)) return Clone(value);
	if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date) return Create(schema, references);
	const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
	const subschema = schema.patternProperties[subschemaPropertyName];
	const result = {};
	for (const [propKey, propValue] of Object.entries(value)) result[propKey] = Visit(subschema, references, propValue, cache);
	return result;
}
function FromRef(schema, references, value, cache) {
	return Visit(Deref(schema, references), references, value, cache);
}
function FromThis(schema, references, value, cache) {
	return Visit(Deref(schema, references), references, value, cache);
}
function FromTuple(schema, references, value, cache) {
	if (Check(schema, references, value)) return Clone(value);
	if (!IsArray$2(value)) return Create(schema, references);
	if (schema.items === void 0) return [];
	return schema.items.map((schema, index) => Visit(schema, references, value[index], cache));
}
function FromUnion(schema, references, value, cache) {
	return Check(schema, references, value) ? Clone(value) : CastUnion(schema, references, value, cache);
}
function Visit(schema, references, value, cache) {
	const references_ = IsString$2(schema.$id) ? Pushref(schema, references) : references;
	const schema_ = schema;
	switch (schema[Kind]) {
		case "Array": return FromArray(schema_, references_, value, cache);
		case "Constructor": return FromConstructor(schema_, references_, value, cache);
		case "Import": return FromImport(schema_, references_, value, cache);
		case "Intersect": return FromIntersect(schema_, references_, value);
		case "Never": return FromNever(schema_, references_, value);
		case "Object": return FromObject(schema_, references_, value, cache);
		case "Record": return FromRecord(schema_, references_, value, cache);
		case "Ref": return FromRef(schema_, references_, value, cache);
		case "This": return FromThis(schema_, references_, value, cache);
		case "Tuple": return FromTuple(schema_, references_, value, cache);
		case "Union": return FromUnion(schema_, references_, value, cache);
		case "Date":
		case "Symbol":
		case "Uint8Array": return DefaultClone(schema, references, value);
		default: return Default(schema_, references_, value);
	}
}
/** Casts a value into a given type. The return value will retain as much information of the original value as possible. */
function Cast(...args) {
	if (args.length === 2 || args.length === 3 && args[2] instanceof WeakMap) return Visit(args[0], [], args[1], args[2] ?? /* @__PURE__ */ new WeakMap());
	return Visit(args[0], args[1], args[2], args[3] ?? /* @__PURE__ */ new WeakMap());
}
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/typebox-coerce.js
/**
* Coerces a value to match the provided TypeBox schema by first converting and then casting the value.
* This is useful for ensuring values match their expected types, especially when dealing with
* form inputs or API responses that may need type conversion.
*
* @param schema - The TypeBox schema to coerce the value against
* @param value - The value to coerce
* @returns The coerced value that matches the schema
*
* @example
* // Convert string "123" to number
* const schema = Type.Number()
* const value = "123"
* const coerced = coerceValue(schema, value) // Returns 123
*
* @example
* // Convert string "true" to boolean
* const schema = Type.Boolean()
* const value = "true"
* const coerced = coerceValue(schema, value) // Returns true
*/
var coerceValue = (schema, value) => Cast(schema, value);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions.js
var extensions = {
	document: {
		navigation: "x-scalar-navigation",
		/**
		* Where a compact document's navigation children are, until they are loaded.
		*
		* Only a compact server workspace sets it, and `resolve(['x-scalar-navigation'])` removes it once
		* the children are on the document. Its presence is what "not loaded yet" means, so it has to
		* travel with the document: `exportWorkspace` carries it, and a store the workspace is loaded
		* into resolves from it.
		*/
		navigationChunk: "x-scalar-navigation-chunk"
	},
	workspace: {
		colorMode: "x-scalar-color-mode",
		sidebarWidth: "x-scalar-sidebar-width",
		defaultClient: "x-scalar-default-client",
		defaultExample: "x-scalar-default-example",
		activeDocument: "x-scalar-active-document",
		theme: "x-scalar-theme"
	}
};
//#endregion
//#region node_modules/@scalar/validation/dist/schema.js
var number = (options) => ({
	type: "number",
	default: options?.default,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var string = (options) => ({
	type: "string",
	default: options?.default,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var boolean = (options) => ({
	type: "boolean",
	default: options?.default,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var nullable = (options) => ({
	type: "nullable",
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var any = (options) => ({
	type: "any",
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var unknown = (options) => ({
	type: "unknown",
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var fn = (options) => ({
	type: "function",
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var array = (items, options) => ({
	type: "array",
	items,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var record = (key, value, options) => ({
	type: "record",
	key,
	value,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var object = (properties, options) => ({
	type: "object",
	properties,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
/**
* The conditional return type mirrors {@link intersection}: lightweight input constraint,
* precise `UnionSchema<Schemas>` output without re-triggering eager evaluation.
*/
var union = (schemas, options) => ({
	type: "union",
	schemas,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
/**
* The conditional return type is what unlocks circular `intersection([... lazy(() => self) ...])`.
*
* The input constraint is the lightweight `IntersectionMember` (discriminant-only) so the call-site
* constraint check does not force TypeScript to eagerly evaluate each tuple element. The conditional
* `Schemas extends readonly Schema[]` is always true in practice (every passed value is a real schema)
* and lets us produce a precise `IntersectionSchema<Schemas>` without re-introducing the heavy check.
*/
var intersection = (schemas, options) => ({
	type: "intersection",
	schemas,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var optional = (schema, options) => ({
	type: "optional",
	schema,
	typeName: options?.typeName,
	typeComment: options?.typeComment
});
var literal = (value) => ({
	type: "literal",
	value
});
var lazy = (schema) => ({
	type: "lazy",
	schema
});
var evaluate = (expression, schema) => ({
	type: "evaluate",
	expression,
	schema
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-default-request-body-view.js
/**
* Schema for the x-scalar-default-request-body-view extension on an OpenAPI document.
*
* Sets the initial view of the request body editor for structured (JSON/YAML) bodies.
* Use `form` to open the schema-driven form view by default, or `raw` for the code editor.
* When the body cannot be shown as a form, Scalar falls back to `raw` automatically.
*
* @example
* ```yaml
* x-scalar-default-request-body-view: form
* ```
*/
var XScalarDefaultRequestBodyViewSchema = Type.Object({ "x-scalar-default-request-body-view": Type.Optional(Type.Union([Type.Literal("form"), Type.Literal("raw")])) });
var XScalarDefaultRequestBodyView = object({ "x-scalar-default-request-body-view": optional(union([literal("form"), literal("raw")])) }, {
	typeName: "XScalarDefaultRequestBodyView",
	typeComment: "Initial request body editor view for structured bodies (form or raw)"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-environments.js
var xScalarEnvVarSchema = Type.Object({
	name: Type.String(),
	value: Type.Union([Type.Object({
		description: Type.Optional(Type.String()),
		default: Type.String({ default: "" })
	}), Type.String()])
});
var XScalarEnvVar = object({
	name: string(),
	value: union([object({
		description: optional(string()),
		default: string()
	}), string()])
}, { typeName: "XScalarEnvVar" });
var xScalarEnvironmentSchema = Type.Object({
	description: Type.Optional(Type.String()),
	color: Type.String({ default: "#FFFFFF" }),
	variables: Type.Array(xScalarEnvVarSchema)
});
var XScalarEnvironment = object({
	description: optional(string()),
	color: string({ typeComment: "Color for the environment" }),
	variables: array(XScalarEnvVar, { typeComment: "An array of variables" })
}, {
	typeName: "XScalarEnvironment",
	typeComment: "A map of environments by name"
});
var xScalarEnvironmentsSchema = Type.Object({ "x-scalar-environments": Type.Optional(Type.Record(Type.String(), xScalarEnvironmentSchema)) });
var XScalarEnvironments = object({ "x-scalar-environments": optional(record(string(), XScalarEnvironment)) }, {
	typeName: "XScalarEnvironments",
	typeComment: "A record of environments by name"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-icon.js
var XScalarIconSchema = Type.Object({ "x-scalar-icon": Type.Optional(Type.String()) });
var XScalarIcon = object({ "x-scalar-icon": optional(string()) }, {
	typeName: "XScalarIcon",
	typeComment: "A custom icon representing the collection"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-is-dirty.js
/**
* Schema for the "x-scalar-is-dirty" OpenAPI extension.
* This extension allows specifying an optional boolean value,
* which can be used to track if the document state is dirty.
*
* This is used to track if the document has been modified since it was last saved.
*
* @example
* ```yaml
* x-scalar-is-dirty: true
* ```
*
* @example
* ```yaml
* x-scalar-is-dirty: false
* ```
*/
var XScalarIsDirtySchema = Type.Object({ 
/** Whether the document state is dirty, this is used to track if the document has been modified since it was last saved */
"x-scalar-is-dirty": Type.Optional(Type.Boolean()) });
var XScalarIsDirty = object({ "x-scalar-is-dirty": optional(boolean({ typeComment: "Whether the document state is dirty, this is used to track if the document has been modified since it was last saved" })) }, {
	typeName: "XScalarIsDirty",
	typeComment: "Tracks whether the document has been modified since it was last saved"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-original-document-hash.js
/**
* Schema for the "x-scalar-original-document-hash" OpenAPI extension.
* This extension allows specifying an optional string value,
* which can be used to track the original document hash.
*
* This is used to track the original document hash when loading a document from an external source.
* Which can be helpful to track if the document has been modified since it was last saved.
*
* @example
* ```yaml
* x-scalar-original-document-hash: "1234567890"
* ```
*/
var XScalarOriginalDocumentHashSchema = Type.Object({ 
/** Original input document hash */
"x-scalar-original-document-hash": Type.String() });
var XScalarOriginalDocumentHash = object({ "x-scalar-original-document-hash": string({ typeComment: "Original input document hash" }) }, {
	typeName: "XScalarOriginalDocumentHash",
	typeComment: "Original input document hash"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-original-source-url.js
/**
* Schema for the `x-scalar-original-source-url` OpenAPI extension.
* Tracks where the document was loaded from (file path or remote URL).
*/
var XScalarOriginalSourceUrlSchema = Type.Partial(Type.Object({ 
/** Original document source URL when loaded from an external source. */
"x-scalar-original-source-url": Type.String() }));
var XScalarOriginalSourceUrl = object({ "x-scalar-original-source-url": optional(string({ typeComment: "Original document source URL when loaded from an external source" })) }, {
	typeName: "XScalarOriginalSourceUrl",
	typeComment: "Original document source URL when loaded from an external source."
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-registry-meta.js
var XScalarRegistryMetaInnerSchema = Type.Object({
	/**
	* The namespace under which this registry meta is scoped.
	*/
	"namespace": Type.String(),
	/**
	* A unique slug identifier for this registry meta within the namespace.
	*/
	"slug": Type.String(),
	/**
	* The version of the registry meta.
	*/
	"version": Type.String(),
	/**
	* Last known commit hash of this document.
	*
	* Is going to be used to track if the document has been modified since it was last saved.
	*/
	"commitHash": Type.Optional(Type.String()),
	/**
	* Registry commit hash that the cached `hasConflict` flag was computed
	* against. When the registry advertises a different hash later, the
	* cached result is stale and the conflict check has to be re-run.
	*/
	"conflictCheckedAgainstHash": Type.Optional(Type.String()),
	/**
	* Cached outcome of the last conflict check, valid only while
	* `conflictCheckedAgainstHash` matches the registry's current hash for
	* this version.
	*/
	"hasConflict": Type.Optional(Type.Boolean())
});
var XScalarRegistryMetaSchema = Type.Object({ 
/**
* The registry meta for the document.
*/
"x-scalar-registry-meta": Type.Optional(XScalarRegistryMetaInnerSchema) });
var XScalarRegistryMeta = object({ "x-scalar-registry-meta": optional(object({
	namespace: string({ typeComment: "The namespace under which this registry meta is scoped." }),
	slug: string({ typeComment: "A unique slug identifier for this registry meta within the namespace." }),
	version: string({ typeComment: "The version of the registry meta." }),
	commitHash: optional(string({ typeComment: "Last known commit hash of this document. Is going to be used to track if the document has been modified since it was last saved." })),
	conflictCheckedAgainstHash: optional(string({ typeComment: "Registry commit hash that the cached hasConflict flag was computed against. The cache is invalid when this no longer matches the registry hash." })),
	hasConflict: optional(boolean({ typeComment: "Cached outcome of the last conflict check, valid only while conflictCheckedAgainstHash matches the registry hash." }))
}, {
	typeName: "XScalarRegistryMetaInner",
	typeComment: "Registry meta namespace and slug"
})) }, {
	typeName: "XScalarRegistryMeta",
	typeComment: "The registry meta for the document"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-watch-mode.js
var XScalarWatchModeSchema = Type.Object({ 
/** Whether the document is in watch mode */
"x-scalar-watch-mode": Type.Optional(Type.Boolean()) });
var XScalarWatchMode = object({ "x-scalar-watch-mode": optional(boolean({ typeComment: "Whether the document is in watch mode" })) }, {
	typeName: "XScalarWatchMode",
	typeComment: "Whether the document is in watch mode"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/general/x-post-response.js
/**
* Post response scripts allow to execute arbitrary code after a response is received
*
* This is useful for:
* - Extracting data from the response, or
* - Testing the response
*
* @example
* ```yaml
* x-post-response: |
*   pm.test("Status code is 200", () => {
*     pm.response.to.have.status(200)
*   })
* ```
*/
var XPostResponseSchema = Type.Object({ "x-post-response": Type.Optional(Type.String()) });
var XPostResponse = object({ "x-post-response": optional(string({ typeComment: "Script to run after a response is received" })) }, {
	typeName: "XPostResponse",
	typeComment: "Post-response script for an operation"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/general/x-pre-request.js
/**
* Pre-request scripts run before a request is sent. They are used to prepare or modify anything needed for the request to succeed.
*
* Common uses:
* - Set up data and variables
* - Generate timestamps, random values, IDs, or nonces
* - Set environment or collection variables for use in the URL, headers, or body
*
* @example
* ```yaml
* x-pre-request: |
*   var token = pm.environment.get("token")
*   pm.request.headers.set("Authorization", `Bearer ${token}`)
* ```
*/
var XPreRequestSchema = Type.Object({ "x-pre-request": Type.Optional(Type.String()) });
var XPreRequest = object({ "x-pre-request": optional(string()) }, {
	typeName: "XPreRequest",
	typeComment: "Pre-request script to run before the request is sent."
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/general/x-scalar-active-environment.js
var XScalarActiveEnvironmentSchema = Type.Object({ "x-scalar-active-environment": Type.Optional(Type.String()) });
var XScalarActiveEnvironment = object({ "x-scalar-active-environment": optional(string({ typeComment: "The currently selected environment" })) }, {
	typeName: "XScalarActiveEnvironment",
	typeComment: "The currently selected environment"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/general/x-scalar-cookies.js
var xScalarCookieSchema = Type.Object({
	name: Type.String(),
	value: Type.String(),
	domain: Type.Optional(Type.String()),
	path: Type.Optional(Type.String()),
	isDisabled: Type.Optional(Type.Boolean())
});
var XScalarCookie = object({
	name: string({ typeComment: "Defines the cookie name and its value." }),
	value: string({ typeComment: "Defines the cookie value." }),
	domain: optional(string({ typeComment: "Allows this domain and all subdomains." })),
	path: optional(string({ typeComment: "Restricts this cookie to requests that contain this path." })),
	isDisabled: optional(boolean({ typeComment: "Indicates if the cookie is disabled." }))
}, {
	typeName: "XScalarCookie",
	typeComment: "A persisted cookie definition for the workspace"
});
var xScalarCookiesSchema = Type.Object({ "x-scalar-cookies": Type.Optional(Type.Array(xScalarCookieSchema)) });
var XScalarCookies = object({ "x-scalar-cookies": optional(array(XScalarCookie, { typeComment: "Cookies persisted for the workspace" })) }, {
	typeName: "XScalarCookies",
	typeComment: "Persisted workspace cookies"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/general/x-scalar-order.js
/**
* Schema for the "x-scalar-order" OpenAPI extension.
* This extension allows specifying an optional array of strings,
* which can be used to represent a custom order for elements (e.g., tags, operations) in the Scalar UI.
*/
var XScalarOrderSchema = Type.Object({ "x-scalar-order": Type.Optional(Type.Array(Type.String())) });
var XScalarOrder = object({ "x-scalar-order": optional(array(string())) }, {
	typeName: "XScalarOrder",
	typeComment: "Custom order for elements in the Scalar UI"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/server/x-scalar-selected-server.js
var XScalarSelectedServerSchema = Type.Object({ "x-scalar-selected-server": Type.Optional(Type.String()) });
var XScalarSelectedServer = object({ "x-scalar-selected-server": optional(string({ typeComment: "The currently selected server. For OpenAPI documents this is the server URL; for AsyncAPI documents this is the server name (key in `document.servers`)." })) }, {
	typeName: "XScalarSelectedServer",
	typeComment: "The currently selected server. For OpenAPI documents this is the server URL; for AsyncAPI documents this is the server name (key in `document.servers`)."
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/tag/x-tag-groups.js
var XTagGroupSchema = compose(Type.Object({
	/**
	* The group name.
	*/
	name: Type.String(),
	/**
	* List of tags to include in this group.
	*/
	tags: Type.Array(Type.String())
}), XScalarOrderSchema);
var XTagGroup = intersection([object({
	name: string({ typeComment: "The group name." }),
	tags: array(string(), { typeComment: "List of tags to include in this group." })
}, { typeName: "XTagGroupBase" }), XScalarOrder], {
	typeName: "XTagGroup",
	typeComment: "A tag group with optional custom ordering"
});
/**
* x-tagGroups
*
* List of tags to include in this group.
*/
var XTagGroupsSchema = Type.Object({ "x-tagGroups": Type.Optional(Type.Array(XTagGroupSchema)) });
var XTagGroups = object({ "x-tagGroups": optional(array(XTagGroup, { typeComment: "Tag groups for organizing tags in the UI" })) }, {
	typeName: "XTagGroups",
	typeComment: "Groups of tags for the OpenAPI document"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/ref-definitions.js
/**
* Reference definitions for OpenAPI 3.1 objects.
* These can be used with Type.Ref to create references to these objects in other schemas.
*
* Referencing them this way helps avoid circular dependencies in TypeBox schemas while keeping the overhead performance lower.
*/
var REF_DEFINITIONS = {
	ComponentsObject: "ComponentsObject",
	SecurityRequirementObject: "SecurityRequirementObject",
	TagObject: "TagObject",
	CallbackObject: "CallbackObject",
	PathsObject: "PathsObject",
	PathItemObject: "PathItemObject",
	OperationObject: "OperationObject",
	SchemaObject: "SchemaObject",
	EncodingObject: "EncodingObject",
	HeaderObject: "HeaderObject",
	MediaTypeObject: "MediaTypeObject",
	ServerObject: "ServerObject",
	ExternalDocumentationObject: "ExternalDocumentationObject",
	InfoObject: "InfoObject",
	ContactObject: "ContactObject",
	LicenseObject: "LicenseObject",
	ResponseObject: "ResponseObject",
	ResponsesObject: "ResponsesObject",
	ParameterObject: "ParameterObject",
	ExampleObject: "ExampleObject",
	RequestBodyObject: "RequestBodyObject",
	SecuritySchemeObject: "SecuritySchemeObject",
	SecuritySchemes: "SecuritySchemes",
	LinkObject: "LinkObject",
	XMLObject: "XMLObject",
	DiscriminatorObject: "DiscriminatorObject",
	OAuthFlowsObject: "OAuthFlowsObject",
	ServerVariableObject: "ServerVariableObject",
	TraversedDescriptionObject: "TraversedDescriptionObject",
	TraversedOperationObject: "TraversedOperationObject",
	TraversedAsyncApiOperationObject: "TraversedAsyncApiOperationObject",
	TraversedAsyncApiChannelObject: "TraversedAsyncApiChannelObject",
	TraversedAsyncApiMessageObject: "TraversedAsyncApiMessageObject",
	TraversedSchemaObject: "TraversedSchemaObject",
	TraversedWebhookObject: "TraversedWebhookObject",
	TraversedTagObject: "TraversedTagObject",
	TraversedEntryObject: "TraversedEntryObject",
	TraversedDocumentObject: "TraversedDocumentObject"
};
var ComponentsObjectRef = Type.Ref(REF_DEFINITIONS.ComponentsObject);
var SecurityRequirementObjectRef = Type.Ref(REF_DEFINITIONS.SecurityRequirementObject);
var TagObjectRef = Type.Ref(REF_DEFINITIONS.TagObject);
var CallbackObjectRef = Type.Ref(REF_DEFINITIONS.CallbackObject);
var PathItemObjectRef = Type.Ref(REF_DEFINITIONS.PathItemObject);
var PathsObjectRef = Type.Ref(REF_DEFINITIONS.PathsObject);
var OperationObjectRef = Type.Ref(REF_DEFINITIONS.OperationObject);
var SchemaObjectRef = Type.Ref(REF_DEFINITIONS.SchemaObject);
var EncodingObjectRef = Type.Ref(REF_DEFINITIONS.EncodingObject);
var HeaderObjectRef = Type.Ref(REF_DEFINITIONS.HeaderObject);
var MediaTypeObjectRef = Type.Ref(REF_DEFINITIONS.MediaTypeObject);
var ServerObjectRef = Type.Ref(REF_DEFINITIONS.ServerObject);
var ExternalDocumentationObjectRef = Type.Ref(REF_DEFINITIONS.ExternalDocumentationObject);
var InfoObjectRef = Type.Ref(REF_DEFINITIONS.InfoObject);
var ContactObjectRef = Type.Ref(REF_DEFINITIONS.ContactObject);
var LicenseObjectRef = Type.Ref(REF_DEFINITIONS.LicenseObject);
var ResponseObjectRef = Type.Ref(REF_DEFINITIONS.ResponseObject);
var ResponsesObjectRef = Type.Ref(REF_DEFINITIONS.ResponsesObject);
var ParameterObjectRef = Type.Ref(REF_DEFINITIONS.ParameterObject);
var ExampleObjectRef = Type.Ref(REF_DEFINITIONS.ExampleObject);
var RequestBodyObjectRef = Type.Ref(REF_DEFINITIONS.RequestBodyObject);
var SecuritySchemeObjectRef = Type.Ref(REF_DEFINITIONS.SecuritySchemeObject);
var LinkObjectRef = Type.Ref(REF_DEFINITIONS.LinkObject);
var XMLObjectRef = Type.Ref(REF_DEFINITIONS.XMLObject);
var DiscriminatorObjectRef = Type.Ref(REF_DEFINITIONS.DiscriminatorObject);
var OAuthFlowsObjectRef = Type.Ref(REF_DEFINITIONS.OAuthFlowsObject);
var ServerVariableObjectRef = Type.Ref(REF_DEFINITIONS.ServerVariableObject);
var TraversedEntryObjectRef = Type.Ref(REF_DEFINITIONS.TraversedEntryObject);
var TraversedDocumentObjectRef = Type.Ref(REF_DEFINITIONS.TraversedDocumentObject);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/navigation.js
var NavigationBaseSchemaDefinition = Type.Object({
	id: Type.String(),
	title: Type.String()
});
var TraversedDocumentSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("document"),
	name: Type.String(),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef)),
	icon: Type.Optional(Type.String())
}));
var TraversedDescriptionSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("text"),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef))
}));
var TraversedExampleSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("example"),
	name: Type.String()
}));
var TraversedOperationSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("operation"),
	ref: Type.String(),
	method: Type.String(),
	path: Type.String(),
	isDeprecated: Type.Optional(Type.Boolean()),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef))
}));
var TraversedAsyncApiOperationSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("asyncapi-operation"),
	operationName: Type.String(),
	action: Type.Union([Type.Literal("send"), Type.Literal("receive")]),
	channelName: Type.String(),
	channelAddress: Type.String(),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef))
}));
var TraversedAsyncApiChannelSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("asyncapi-channel"),
	channelName: Type.String(),
	channelAddress: Type.String(),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef))
}));
var TraversedAsyncApiMessageSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("asyncapi-message"),
	messageName: Type.String(),
	channelName: Type.String()
}));
var TraversedSchemaSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("model"),
	ref: Type.String(),
	name: Type.String()
}));
var TraversedWebhookSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("webhook"),
	ref: Type.String(),
	method: Type.String(),
	name: Type.String(),
	isDeprecated: Type.Optional(Type.Boolean())
}));
var TraversedTagSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("tag"),
	name: Type.String(),
	description: Type.Optional(Type.String()),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef)),
	isGroup: Type.Boolean(),
	isTagGroup: Type.Optional(Type.Boolean()),
	isWebhooks: Type.Optional(Type.Boolean()),
	xKeys: Type.Optional(Type.Record(Type.String(), Type.Unknown()))
}));
var TraversedModelsSchemaDefinition = compose(NavigationBaseSchemaDefinition, Type.Object({
	type: Type.Literal("models"),
	name: Type.String(),
	children: Type.Optional(Type.Array(TraversedEntryObjectRef))
}));
var TraversedEntrySchemaDefinition = Type.Union([
	TraversedDescriptionSchemaDefinition,
	TraversedOperationSchemaDefinition,
	TraversedAsyncApiOperationSchemaDefinition,
	TraversedAsyncApiChannelSchemaDefinition,
	TraversedAsyncApiMessageSchemaDefinition,
	TraversedSchemaSchemaDefinition,
	TraversedTagSchemaDefinition,
	TraversedWebhookSchemaDefinition,
	TraversedExampleSchemaDefinition,
	TraversedDocumentSchemaDefinition,
	TraversedModelsSchemaDefinition
]);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/reference.js
var ReferenceObjectExtensionsSchema = Type.Object({
	/** Indicates the current status of the reference resolution. Can be either 'loading' while fetching the reference or 'error' if the resolution failed. */
	"$status": Type.Optional(Type.Union([Type.Literal("loading"), Type.Literal("error")])),
	/** Indicates whether this reference should be resolved globally across all documents, rather than just within the current document context. */
	"$global": Type.Optional(Type.Boolean())
});
/**
* A simple object to allow referencing other components in the OpenAPI Description, internally and externally.
*
* The $ref string value contains a URI RFC3986, which identifies the value being referenced.
*
* See the rules for resolving Relative References. */
var ReferenceObjectSchema = compose(Type.Object({
	/** REQUIRED. The reference identifier. This MUST be in the form of a URI. */
	"$ref": Type.String(),
	/** A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect. */
	summary: Type.Optional(Type.String()),
	/** A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect. */
	description: Type.Optional(Type.String())
}), ReferenceObjectExtensionsSchema);
/**
* Object or Reference Object with a resolved `$ref-value`.
*
* `$ref-value` is kept optional on purpose (mirroring the schema position in `schema.ts`): an
* unresolved reference — for example a sparse chunk `$ref` produced by the server store — is just
* `{ $ref }` with no resolved value yet. If it were required, such a value would match neither
* union branch, so coercion would fall back to the plain-object branch and silently drop the
* `$ref`. With it optional the `{ $ref }` matches the reference branch and is preserved unchanged.
*
* The bundler/proxy still populates `$ref-value` for resolved documents, so `getResolvedRef` keeps
* returning the value in practice.
*/
var reference = (schema) => compose(ReferenceObjectSchema, Type.Object({ "$ref-value": Type.Optional(schema) }));
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/callback.js
var CallbackObjectSchemaDefinition = Type.Record(
	Type.String(),
	/** A Path Item Object used to define a callback request and expected responses. A complete example is available. */
	Type.Union([PathItemObjectRef, reference(PathItemObjectRef)])
);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/components.js
var SecuritySchemesSchemaDefinition = Type.Record(Type.String(), Type.Union([SecuritySchemeObjectRef, reference(SecuritySchemeObjectRef)]));
/** Holds a set of reusable objects for different aspects of the OAS. All objects defined within the Components Object will have no effect on the API unless they are explicitly referenced from outside the Components Object. */
var ComponentsObjectSchemaDefinition = Type.Object({
	/** An object to hold reusable Schema Objects. */
	schemas: Type.Optional(Type.Record(Type.String(), Type.Union([SchemaObjectRef, reference(SchemaObjectRef)]))),
	/** An object to hold reusable Response Objects. */
	responses: Type.Optional(Type.Record(Type.String(), Type.Union([ResponseObjectRef, reference(ResponseObjectRef)]))),
	/** An object to hold reusable Parameter Objects. */
	parameters: Type.Optional(Type.Record(Type.String(), Type.Union([ParameterObjectRef, reference(ParameterObjectRef)]))),
	/** An object to hold reusable Example Objects. */
	examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectRef, reference(ExampleObjectRef)]))),
	/** An object to hold reusable Request Body Objects. */
	requestBodies: Type.Optional(Type.Record(Type.String(), Type.Union([RequestBodyObjectRef, reference(RequestBodyObjectRef)]))),
	/** An object to hold reusable Header Objects. */
	headers: Type.Optional(Type.Record(Type.String(), Type.Union([HeaderObjectRef, reference(HeaderObjectRef)]))),
	/** An object to hold reusable Security Scheme Objects. */
	securitySchemes: Type.Optional(SecuritySchemesSchemaDefinition),
	/** An object to hold reusable Link Objects. */
	links: Type.Optional(Type.Record(Type.String(), Type.Union([LinkObjectRef, reference(LinkObjectRef)]))),
	/** An object to hold reusable Callback Objects. */
	callbacks: Type.Optional(Type.Record(Type.String(), Type.Union([CallbackObjectRef, reference(CallbackObjectRef)]))),
	/** An object to hold reusable Path Item Objects. */
	pathItems: Type.Optional(Type.Record(Type.String(), Type.Union([PathItemObjectRef, reference(PathItemObjectRef)]))),
	/** An object to hold reusable Media Type Objects. Added in OpenAPI 3.2. */
	mediaTypes: Type.Optional(Type.Record(Type.String(), Type.Union([MediaTypeObjectRef, reference(MediaTypeObjectRef)])))
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/contact.js
/** Contact information for the exposed API. */
var ContactObjectSchemaDefinition = Type.Object({
	/** The identifying name of the contact person/organization. */
	name: Type.Optional(Type.String()),
	/** The URI for the contact information. This MUST be in the form of a URI. */
	url: Type.Optional(Type.String()),
	/** The email address of the contact person/organization. This MUST be in the form of an email address. */
	email: Type.Optional(Type.String())
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/discriminator.js
/**
* When request bodies or response payloads may be one of a number of different schemas, a Discriminator Object gives a hint about the expected schema of the document. This hint can be used to aid in serialization, deserialization, and validation. The Discriminator Object does this by implicitly or explicitly associating the possible values of a named property with alternative schemas.
*
* Note that discriminator MUST NOT change the validation outcome of the schema.
*/
var DiscriminatorObjectSchemaDefinition = Type.Object({
	/** REQUIRED. The name of the property in the payload that will hold the discriminating value. This property SHOULD be required in the payload schema, as the behavior when the property is absent is undefined. */
	propertyName: Type.String(),
	/** An object to hold mappings between payload values and schema names or URI references. */
	mapping: Type.Optional(Type.Record(Type.String(), Type.String())),
	/** The schema name or URI reference to the schema that should validate the value of the discriminating property when it is absent or not found in the mapping. Added in OpenAPI 3.2. */
	defaultMapping: Type.Optional(Type.String())
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/encoding.js
/**
* A single encoding definition applied to a single schema property. See Appendix B for a discussion of converting values of various types to string representations.
*
* Properties are correlated with multipart parts using the name parameter of Content-Disposition: form-data, and with application/x-www-form-urlencoded using the query string parameter names. In both cases, their order is implementation-defined.
*
* See Appendix E for a detailed examination of percent-encoding concerns for form media types.
*/
var EncodingObjectSchemaDefinition = Type.Object({
	/** The Content-Type for encoding a specific property. The value is a comma-separated list, each element of which is either a specific media type (e.g. image/png) or a wildcard media type (e.g. image/*). Default value depends on the property type as shown in the table below. */
	contentType: Type.Optional(Type.String()),
	/** A map allowing additional information to be provided as headers. Content-Type is described separately and SHALL be ignored in this section. This field SHALL be ignored if the request body media type is not a multipart. */
	headers: Type.Optional(Type.Record(Type.String(), Type.Union([HeaderObjectRef, reference(HeaderObjectRef)]))),
	/** Describes how a specific property value will be serialized depending on its type. See the Parameter Object for details on the style field. The behavior follows the same values as query parameters, including default values. Valid values are "form", "spaceDelimited", "pipeDelimited", and "deepObject". This field SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored. */
	style: Type.Optional(Type.Union([
		Type.Literal("form"),
		Type.Literal("spaceDelimited"),
		Type.Literal("pipeDelimited"),
		Type.Literal("deepObject")
	])),
	/** When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this field has no effect. When style is "form", the default value is true. For all other styles, the default value is false. This field SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored. */
	explode: Type.Optional(Type.Boolean()),
	/** When this is true, parameter values are serialized using reserved expansion, as defined by RFC6570, which allows RFC3986's reserved character set, as well as percent-encoded triples, to pass through unchanged, while still percent-encoding all other disallowed characters (including % outside of percent-encoded triples). The default value is false. This field SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored. */
	allowReserved: Type.Optional(Type.Boolean()),
	/** Applies nested Encoding Objects in the same manner as the Media Type Object's encoding field. Added in OpenAPI 3.2. */
	encoding: Type.Optional(Type.Record(Type.String(), EncodingObjectRef)),
	/** Applies nested Encoding Objects in the same manner as the Media Type Object's prefixEncoding field. Added in OpenAPI 3.2. */
	prefixEncoding: Type.Optional(Type.Array(EncodingObjectRef)),
	/** Applies nested Encoding Objects in the same manner as the Media Type Object's itemEncoding field. Added in OpenAPI 3.2. */
	itemEncoding: Type.Optional(EncodingObjectRef)
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/example/x-disabled.js
/**
* OpenAPI extension to control whether a parameter example is enabled (checkbox on) or disabled (checkbox off).
*
* This extension is typically used in API tools to determine if a parameter (such as a header, query, or cookie)
* should be included in the request when sending an example. If `x-disabled: true`, the parameter example is considered
* "off" (checkbox unchecked) and will not be sent with the request. If `x-disabled: false` or omitted, the parameter
* example is "on" (checkbox checked) and will be sent.
*
* @example
* ```yaml
* x-disabled: true   # Do not send this parameter example in the request
* x-disabled: false  # Send this parameter example in the request
* ```
*/
var XDisabledSchema = Type.Object({ "x-disabled": Type.Optional(Type.Boolean()) });
var XDisabled = object({ "x-disabled": optional(boolean()) }, {
	typeName: "XDisabled",
	typeComment: "Whether a parameter example is disabled in the API client"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/example.js
/**
* An object grouping an internal or external example value with basic summary and description metadata. This object is typically used in fields named examples (plural), and is a referenceable alternative to older example (singular) fields that do not support referencing or metadata.
*
* Examples allow demonstration of the usage of properties, parameters and objects within OpenAPI.
*/
var ExampleObjectSchemaDefinition = compose(Type.Object({
	/** Short description for the example. */
	summary: Type.Optional(Type.String()),
	/** Long description for the example. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** An example of the data structure that MUST be valid according to the relevant Schema Object. If this field is present, value MUST be absent. Added in OpenAPI 3.2. */
	dataValue: Type.Optional(Type.Unknown()),
	/** An example of the serialized form of the value, including encoding and escaping as described under Validating Examples. This field SHOULD NOT be used if the serialization format is JSON. If this field is present, value and externalValue MUST be absent. Added in OpenAPI 3.2. */
	serializedValue: Type.Optional(Type.String()),
	/** Embedded literal example. The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary. */
	value: Type.Optional(Type.Any()),
	/** A URI that identifies the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive. See the rules for resolving Relative References. */
	externalValue: Type.Optional(Type.String())
}), XDisabledSchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/external-documentation.js
/** Allows referencing an external resource for extended documentation. */
var ExternalDocumentationObjectSchemaDefinition = Type.Object({
	/** REQUIRED. The URI for the target documentation. This MUST be in the form of a URI. */
	url: Type.String(),
	/** A description of the target documentation. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String())
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/header.js
var HeaderObjectSchemaBase = Type.Object({
	/** A brief description of the header. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** Determines whether this header is mandatory. The default value is false. */
	required: Type.Optional(Type.Boolean()),
	/** Specifies that the header is deprecated and SHOULD be transitioned out of usage. Default value is false. */
	deprecated: Type.Optional(Type.Boolean())
});
var HeaderObjectWithSchemaSchema = compose(HeaderObjectSchemaBase, Type.Object({
	/** Describes how the header value will be serialized. The default (and only legal value for headers) is "simple". */
	style: Type.Optional(Type.String()),
	/** When this is true, header values of type array or object generate a single header whose value is a comma-separated list of the array items or key-value pairs of the map, see Style Examples. For other data types this field has no effect. The default value is false. */
	explode: Type.Optional(Type.Boolean()),
	/** The schema defining the type used for the header. */
	schema: Type.Optional(Type.Union([SchemaObjectRef, reference(SchemaObjectRef)])),
	/** Example of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
	example: Type.Optional(Type.Any()),
	/** Examples of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
	examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectRef, reference(ExampleObjectRef)])))
}));
/**
* Describes a single header for HTTP responses and for individual parts in multipart representations; see the relevant Response Object and Encoding Object documentation for restrictions on which headers can be described.
*
* The Header Object follows the structure of the Parameter Object, including determining its serialization strategy based on whether schema or content is present, with the following changes:
*
*    - name MUST NOT be specified, it is given in the corresponding headers map.
*    - in MUST NOT be specified, it is implicitly in header.
*    - All traits that are affected by the location MUST be applicable to a location of header (for example, style). This means that allowEmptyValue and allowReserved MUST NOT be used, and style, if used, MUST be limited to "simple".
*/
var HeaderObjectSchemaDefinition = Type.Union([HeaderObjectWithSchemaSchema, compose(HeaderObjectSchemaBase, Type.Object({ content: Type.Optional(Type.Record(Type.String(), MediaTypeObjectRef)) }))]);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-links.js
var XScalarLinkItemSchema = Type.Object({
	name: Type.String(),
	url: Type.String()
});
var XScalarLinksSchema = Type.Object({ "x-scalar-links": Type.Optional(Type.Array(XScalarLinkItemSchema)) });
var XScalarLinks = object({ "x-scalar-links": optional(array(object({
	name: string(),
	url: string()
}, {
	typeName: "XScalarLinkItem",
	typeComment: "A named link to display alongside the API info"
}), { typeComment: "Additional named links to display alongside the API info (e.g. privacy policy, imprint)" })) }, {
	typeName: "XScalarLinks",
	typeComment: "Additional named links to display alongside the API info"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-sdk-installation.js
var XScalarSdkInstallationItemSchema = Type.Object({
	lang: Type.String(),
	description: Type.Optional(Type.String()),
	source: Type.Optional(Type.String())
});
var XScalarSdkInstallationSchema = Type.Object({ "x-scalar-sdk-installation": Type.Optional(Type.Array(XScalarSdkInstallationItemSchema)) });
var XScalarSdkInstallation = object({ "x-scalar-sdk-installation": optional(array(object({
	lang: string(),
	description: optional(string()),
	source: optional(string())
}, {
	typeName: "XScalarSdkInstallationItem",
	typeComment: "Scalar SDK installation entry"
}), { typeComment: "Scalar SDK installation information" })) }, {
	typeName: "XScalarSdkInstallation",
	typeComment: "Scalar SDK installation information"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/info.js
/**
* The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
*/
var InfoObjectSchemaDefinition = compose(Type.Object({
	/** REQUIRED. The title of the API. */
	title: Type.String(),
	/** REQUIRED. The version of the OpenAPI Document (which is distinct from the OpenAPI Specification version or the version of the API being described or the version of the OpenAPI Description). */
	version: Type.String(),
	/** A short summary of the API. */
	summary: Type.Optional(Type.String()),
	/** A description of the API. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** A URI for the Terms of Service for the API. This MUST be in the form of a URI. */
	termsOfService: Type.Optional(Type.String()),
	/** The contact information for the exposed API. */
	contact: Type.Optional(ContactObjectRef),
	/** The license information for the exposed API. */
	license: Type.Optional(LicenseObjectRef)
}), XScalarSdkInstallationSchema, XScalarLinksSchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/license.js
/** The license information for the exposed API. */
var LicenseObjectSchemaDefinition = Type.Object({
	/** REQUIRED. The license name used for the API. */
	name: Type.Optional(Type.String()),
	/** An SPDX license expression for the API. The identifier field is mutually exclusive of the url field. */
	identifier: Type.Optional(Type.String()),
	/** A URI for the license used for the API. This MUST be in the form of a URI. The url field is mutually exclusive of the identifier field. */
	url: Type.Optional(Type.String())
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/link.js
/**
* The Link Object represents a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
*
* Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response.
*
* For computing links and providing instructions to execute them, a runtime expression is used for accessing values in an operation and using them as parameters while invoking the linked operation.
*/
var LinkObjectSchemaDefinition = Type.Object({
	/** A URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI Description. */
	operationRef: Type.Optional(Type.String()),
	/** The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field. */
	operationId: Type.Optional(Type.String()),
	/** A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used (optionally qualified with the parameter location, e.g. path.id for an id parameter in the path), whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. */
	parameters: Type.Optional(Type.Record(Type.String(), Type.Any())),
	/** A literal value or {expression} to use as a request body when calling the target operation. */
	requestBody: Type.Optional(Type.Any()),
	/** A description of the link. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** A server object to be used by the target operation. */
	server: Type.Optional(ServerObjectRef)
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/media-type.js
/**
* Each Media Type Object provides schema and examples for the media type identified by its key.
*
* When example or examples are provided, the example SHOULD match the specified schema and be in the correct format as specified by the media type and its encoding. The example and examples fields are mutually exclusive, and if either is present it SHALL override any example in the schema. See Working With Examples for further guidance regarding the different ways of specifying examples, including non-JSON/YAML values.
*/
var MediaTypeObjectSchemaDefinition = Type.Object({
	/** A description of the media type, intended to explain the usage of the content. CommonMark syntax MAY be used for rich text representation. Added in OpenAPI 3.2. */
	description: Type.Optional(Type.String()),
	/** The schema defining the content of the request, response, parameter, or header. */
	schema: Type.Optional(Type.Union([SchemaObjectRef, reference(SchemaObjectRef)])),
	/** A schema describing each item within a sequential media type. Added in OpenAPI 3.2. */
	itemSchema: Type.Optional(Type.Union([SchemaObjectRef, reference(SchemaObjectRef)])),
	/** Example of the media type */
	example: Type.Optional(Type.Any()),
	/** Examples of the media type */
	examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectRef, reference(ExampleObjectRef)]))),
	/** A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding field SHALL only apply to Request Body Objects, and only when the media type is multipart or application/x-www-form-urlencoded. If no Encoding Object is provided for a property, the behavior is determined by the default values documented for the Encoding Object. */
	encoding: Type.Optional(Type.Record(Type.String(), EncodingObjectRef)),
	/** An array of positional encoding information, as defined under Encoding By Position. The prefixEncoding field SHALL only apply when the media type is multipart. This field MUST NOT be present if encoding is present. Added in OpenAPI 3.2. */
	prefixEncoding: Type.Optional(Type.Array(EncodingObjectRef)),
	/** A single Encoding Object that provides encoding information for multiple array items, as defined under Encoding By Position. The itemEncoding field SHALL only apply when the media type is multipart. This field MUST NOT be present if encoding is present. Added in OpenAPI 3.2. */
	itemEncoding: Type.Optional(EncodingObjectRef)
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-scalar-ignore.js
var XScalarIgnoreSchema = Type.Object({ "x-scalar-ignore": Type.Optional(Type.Boolean()) });
var XScalarIgnore = object({ "x-scalar-ignore": optional(boolean()) }, {
	typeName: "XScalarIgnore",
	typeComment: "Internal extension to mark an entity as ignored"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/schema/x-order.js
/**
* x-order
*
* Controls the display order of schema properties. Properties with `x-order` are
* sorted by their numeric value (ascending) and shown before properties without it.
*/
var XOrderSchema = Type.Object({ "x-order": Type.Optional(Type.Number()) });
var XOrder = object({ "x-order": optional(number()) }, {
	typeName: "XOrder",
	typeComment: "Display order for a schema property"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-scalar-credentials-location.js
/**
* An OpenAPI extension to specify where OAuth2 credentials should be sent
*
* @example
* ```yaml
* x-scalar-credentials-location: header
* ```
*
* @example
* ```yaml
* x-scalar-credentials-location: body
* ```
*/
var XScalarCredentialsLocationSchema = Type.Object({ "x-scalar-credentials-location": Type.Optional(Type.Union([Type.Literal("header"), Type.Literal("body")])) });
var XScalarCredentialsLocation = object({ "x-scalar-credentials-location": optional(union([literal("header"), literal("body")])) }, {
	typeName: "XScalarCredentialsLocation",
	typeComment: "Where OAuth2 credentials are sent"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-scalar-security-body.js
/**
* An OpenAPI extension to set any additional body parameters for the OAuth token request
*
* @example
* ```yaml
* x-scalar-security-body: {
*   audience: 'https://api.example.com',
*   resource: 'user-profile'
* }
* ```
*/
var XScalarSecurityBodySchema = Type.Object({ "x-scalar-security-body": Type.Optional(Type.Record(Type.String(), Type.String())) });
var XScalarSecurityBody = object({ "x-scalar-security-body": optional(record(string(), string())) }, {
	typeName: "XScalarSecurityBody",
	typeComment: "Additional OAuth token request body parameters"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-scalar-security-query.js
/**
* An OpenAPI extension set any query parameters for the OAuth authorize request
*
* @example
* ```yaml
* x-scalar-security-query: {
*   prompt: 'consent',
*   audience: 'scalar'
* }
* ```
*/
var XScalarSecurityQuerySchema = Type.Object({ "x-scalar-security-query": Type.Optional(Type.Record(Type.String(), Type.String())) });
var XScalarSecurityQuery = object({ "x-scalar-security-query": optional(record(string(), string())) }, {
	typeName: "XScalarSecurityQuery",
	typeComment: "Additional OAuth authorize query parameters"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-scalar-security-secrets.js
/**
* A scalar secret token
*
* We should not export this when exporting the document
*/
var XScalarSecretTokenSchema = Type.Object({ "x-scalar-secret-token": Type.String() });
object({ "x-scalar-secret-token": string() }, {
	typeName: "XScalarSecretToken",
	typeComment: "Persisted OAuth access token (sensitive)"
});
/**
* OAuth refresh token
*
* We should not export this when exporting the document
*/
var XScalarSecretRefreshTokenSchema = Type.Object({ "x-scalar-secret-refresh-token": Type.Optional(Type.String()) });
object({ "x-scalar-secret-refresh-token": optional(string()) }, {
	typeName: "XScalarSecretRefreshToken",
	typeComment: "Persisted OAuth refresh token (sensitive)"
});
/**
* OAuth auth url
*
* We should not export this when exporting the document
*/
var XScalarAuthUrlSchema = Type.Object({ "x-scalar-secret-auth-url": Type.Optional(Type.String()) });
var XScalarAuthUrl = object({ "x-scalar-secret-auth-url": optional(string()) }, {
	typeName: "XScalarAuthUrl",
	typeComment: "Persisted OAuth authorization URL override"
});
/**
* OAuth token url
*
* We should not export this when exporting the document
*/
var XScalarTokenUrlSchema = Type.Object({ "x-scalar-secret-token-url": Type.Optional(Type.String()) });
var XScalarTokenUrl = object({ "x-scalar-secret-token-url": optional(string()) }, {
	typeName: "XScalarTokenUrl",
	typeComment: "Persisted OAuth token URL override"
});
/**
* Username and password for HTTP authentication
*
* We should not export this when exporting the document
*/
var XScalarSecretHTTPSchema = Type.Object({
	"x-scalar-secret-username": Type.String(),
	"x-scalar-secret-password": Type.String()
});
object({
	"x-scalar-secret-username": string(),
	"x-scalar-secret-password": string()
}, {
	typeName: "XScalarSecretHTTP",
	typeComment: "Persisted HTTP basic credentials (sensitive)"
});
/**
* Oauth client secret
*
* We should not export this when exporting the document
*/
var XScalarSecretClientSecretSchema = Type.Object({ "x-scalar-secret-client-secret": Type.String() });
object({ "x-scalar-secret-client-secret": string() }, {
	typeName: "XScalarSecretClientSecret",
	typeComment: "Persisted OAuth client secret (sensitive)"
});
/**
* Oauth client ID
*
* We should not export this when exporting the document
*/
var XScalarSecretClientIdSchema = Type.Object({ "x-scalar-secret-client-id": Type.String() });
object({ "x-scalar-secret-client-id": string() }, {
	typeName: "XScalarSecretClientId",
	typeComment: "Persisted OAuth client ID"
});
/**
* Oauth Redirect URI
*
* We should not export this when exporting the document
*/
var XScalarSecretRedirectUriSchema = Type.Object({ "x-scalar-secret-redirect-uri": Type.String() });
object({ "x-scalar-secret-redirect-uri": string() }, {
	typeName: "XScalarSecretRedirectUri",
	typeComment: "Persisted OAuth redirect URI"
});
/**
* Client certificate (PEM) for X509 authentication
*
* We should not export this when exporting the document
*/
var XScalarSecretClientCertificateSchema = Type.Object({ "x-scalar-secret-client-certificate": Type.String() });
/**
* Private key (PEM) for X509 authentication
*
* We should not export this when exporting the document
*/
var XScalarSecretPrivateKeySchema = Type.Object({ "x-scalar-secret-private-key": Type.String() });
/**
* Service name for GSSAPI (Kerberos) authentication
*
* We should not export this when exporting the document
*/
var XScalarSecretServiceNameSchema = Type.Object({ "x-scalar-secret-service-name": Type.String() });
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-tokenName.js
/**
* An OpenAPI extension to specify a custom token name for OAuth2 flows
*
* @example
* ```yaml
* x-tokenName: 'custom_access_token'
* ```
*/
var XTokenNameSchema = Type.Object({ "x-tokenName": Type.Optional(Type.String()) });
var XTokenName = object({ "x-tokenName": optional(string()) }, {
	typeName: "XTokenName",
	typeComment: "Custom OAuth2 access token field name"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-use-pkce.js
var XusePkceSchema = Type.Object({ 
/**
* Use x-usePkce to enable Proof Key for Code Exchange (PKCE) for the Oauth2 authorization code flow.
*/
"x-usePkce": Type.Union([
	Type.Literal("SHA-256"),
	Type.Literal("plain"),
	Type.Literal("no")
], { default: "no" }) });
var XusePkce = object({ "x-usePkce": union([
	literal("SHA-256"),
	literal("plain"),
	literal("no")
], { typeComment: "PKCE mode for the OAuth2 authorization code flow" }) }, {
	typeName: "XusePkce",
	typeComment: "PKCE setting for OAuth2"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/oauth-flow.js
/** Common properties used across all OAuth flows */
var OAuthFlowCommonSchema = compose(Type.Object({
	/** The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
	refreshUrl: Type.String(),
	/** REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty. */
	scopes: Type.Record(Type.String(), Type.String())
}), XScalarSecurityQuerySchema, XScalarSecurityBodySchema, XTokenNameSchema, XScalarAuthUrlSchema, XScalarTokenUrlSchema, XOrderSchema, XScalarIgnoreSchema);
/** Configuration for the OAuth Implicit flow */
var OAuthFlowImplicitSchema = compose(OAuthFlowCommonSchema, Type.Object({ 
/** REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
authorizationUrl: Type.String() }));
/** Configuration for the OAuth Resource Owner Password flow */
var OAuthFlowPasswordSchema = compose(OAuthFlowCommonSchema, Type.Object({ 
/** REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
tokenUrl: Type.String() }), XScalarCredentialsLocationSchema);
/** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
var OAuthFlowClientCredentialsSchema = compose(OAuthFlowCommonSchema, Type.Object({ 
/** REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
tokenUrl: Type.String() }), XScalarCredentialsLocationSchema);
/** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0. */
var OAuthFlowAuthorizationCodeSchema = compose(OAuthFlowCommonSchema, Type.Object({
	/** REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
	authorizationUrl: Type.String(),
	/** REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
	tokenUrl: Type.String()
}), XusePkceSchema, XScalarCredentialsLocationSchema);
/** Configuration for the OAuth Device Authorization flow. Added in OpenAPI 3.2. */
var OAuthFlowDeviceAuthorizationSchema = compose(OAuthFlowCommonSchema, Type.Object({
	/** REQUIRED. The device authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. Added in OpenAPI 3.2. */
	deviceAuthorizationUrl: Type.String(),
	/** REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. Added in OpenAPI 3.2. */
	tokenUrl: Type.String()
}), XScalarCredentialsLocationSchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/oauthflows.js
/**
* Allows configuration of the supported OAuth Flows.
*/
var OAuthFlowsObjectSchemaDefinition = Type.Object({
	/** Configuration for the OAuth Implicit flow */
	implicit: Type.Optional(OAuthFlowImplicitSchema),
	/** Configuration for the OAuth Resource Owner Password flow */
	password: Type.Optional(OAuthFlowPasswordSchema),
	/** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
	clientCredentials: Type.Optional(OAuthFlowClientCredentialsSchema),
	/** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0. */
	authorizationCode: Type.Optional(OAuthFlowAuthorizationCodeSchema),
	/** Configuration for the OAuth Device Authorization flow. Added in OpenAPI 3.2. */
	deviceAuthorization: Type.Optional(OAuthFlowDeviceAuthorizationSchema)
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-internal.js
var XInternalSchema = Type.Object({ "x-internal": Type.Optional(Type.Boolean()) });
var XInternal = object({ "x-internal": optional(boolean({ typeComment: "Extension to mark an entity as internal" })) }, {
	typeName: "XInternal",
	typeComment: "Extension to mark an entity as internal"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/operation/x-badge.js
/**
* Schema for individual badge configuration in x-badges extension.
* Badges are indicators that can be displayed in API documentation.
*/
var XBadgeSchema = Type.Object({
	/** The text that displays in the badge. This is required for all badges. */
	name: Type.String({
		description: "The text that displays in the badge",
		minLength: 1
	}),
	/**
	* The position of the badge in relation to the header.
	* Defaults to 'after' if not specified.
	*/
	position: Type.Optional(Type.Union([Type.Literal("before"), Type.Literal("after")], {
		description: "The position of the badge in relation to the header",
		default: "after"
	})),
	/**
	* The color of the badge. Can be defined in various formats such as color keywords,
	* RGB, RGBA, HSL, HSLA, and Hexadecimal.
	*/
	color: Type.Optional(Type.String({
		description: "The color of the badge in various formats (keywords, RGB, RGBA, HSL, HSLA, Hexadecimal)",
		pattern: "^(#([0-9A-Fa-f]{3}){1,2}|rgb\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)|rgba\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*[0-9.]*\\s*\\)|hsl\\(\\s*\\d+\\s*,\\s*\\d+%\\s*,\\s*\\d+%\\s*\\)|hsla\\(\\s*\\d+\\s*,\\s*\\d+%\\s*,\\s*\\d+%\\s*,\\s*[0-9.]*\\s*\\)|[a-zA-Z]+)$"
	}))
}, { description: "Configuration for a single badge in the x-badges extension" });
var XBadge = object({
	name: string({ typeComment: "The text that displays in the badge. This is required for all badges." }),
	position: optional(union([literal("before"), literal("after")], { typeComment: "The position of the badge in relation to the header" })),
	color: optional(string({ typeComment: "The color of the badge in various formats (keywords, RGB, RGBA, HSL, HSLA, Hexadecimal)" }))
}, {
	typeName: "XBadge",
	typeComment: "Configuration for a single badge in the x-badges extension"
});
var XBadgesSchema = Type.Object({ 
/**
* You can add badges to operations to use as indicators in documentation. Each operation can have multiple badges, and the displayed color is also configurable. The following example sets badges on the GET `/hello-world` operation:
*
* ```yaml
* openapi: 3.1.0
* info:
*   title: x-badges
*   version: 1.0.0
* paths:
*   /hello-world:
*     get:
*       summary: Hello World
*       x-badges:
*         - name: 'Alpha'
*         - name: 'Beta'
*           position: before
*         - name: 'Gamma'
*           position: after
*           color: '#ffcc00'
```
*/
"x-badges": Type.Optional(Type.Array(XBadgeSchema)) });
var XBadges = object({ "x-badges": optional(array(XBadge, { typeComment: "Badges displayed for this operation in documentation" })) }, {
	typeName: "XBadges",
	typeComment: "Badges for an operation in the Scalar UI"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/operation/x-code-samples.js
var XCodeSampleSchema = Type.Object({
	lang: Type.Optional(Type.String()),
	label: Type.Optional(Type.String()),
	source: Type.String(),
	example: Type.Optional(Type.String()),
	contentType: Type.Optional(Type.String())
});
/** A single ReadMe custom code sample (`x-readme.code-samples`). */
var XReadmeCodeSampleSchema = Type.Object({
	language: Type.Optional(Type.String()),
	code: Type.String(),
	name: Type.Optional(Type.String()),
	install: Type.Optional(Type.String()),
	correspondingExample: Type.Optional(Type.String())
});
/** ReadMe extension object. Only `code-samples` carries source code. */
var XReadmeSchema = Type.Object({
	"code-samples": Type.Optional(Type.Array(XReadmeCodeSampleSchema)),
	"samples-languages": Type.Optional(Type.Array(Type.String()))
});
/**
* A Stainless/Scalar example: per-language request snippets, with an optional
* title and response. Matches the shape of `x-stainless-examples`.
*/
var XLanguageExampleSchema = Type.Object({
	title: Type.Optional(Type.String()),
	request: Type.Optional(Type.Record(Type.String(), Type.String())),
	response: Type.Optional(Type.Unknown())
});
/** A single example or an array of examples. */
var XLanguageExamplesSchema = Type.Union([XLanguageExampleSchema, Type.Array(XLanguageExampleSchema)]);
var XCodeSamplesSchema = Type.Object({
	"x-codeSamples": Type.Optional(Type.Array(XCodeSampleSchema)),
	"x-code-samples": Type.Optional(Type.Array(XCodeSampleSchema)),
	"x-custom-examples": Type.Optional(Type.Array(XCodeSampleSchema)),
	"x-readme": Type.Optional(XReadmeSchema),
	"x-stainless-snippets": Type.Optional(Type.Record(Type.String(), Type.String())),
	"x-stainless-examples": Type.Optional(XLanguageExamplesSchema),
	"x-scalar-examples": Type.Optional(Type.Array(XCodeSampleSchema))
});
var XCodeSample = object({
	lang: optional(string()),
	label: optional(string()),
	source: string(),
	example: optional(string()),
	contentType: optional(string())
});
var XReadme = object({
	"code-samples": optional(array(object({
		language: optional(string()),
		code: string(),
		name: optional(string()),
		install: optional(string()),
		correspondingExample: optional(string())
	}))),
	"samples-languages": optional(array(string()))
});
var XLanguageExample = object({
	title: optional(string()),
	request: optional(record(string(), string())),
	response: optional(unknown())
});
var XLanguageExamples = union([XLanguageExample, array(XLanguageExample)]);
var XCodeSamples = object({
	"x-codeSamples": optional(array(XCodeSample)),
	"x-code-samples": optional(array(XCodeSample)),
	"x-custom-examples": optional(array(XCodeSample)),
	"x-readme": optional(XReadme),
	"x-stainless-snippets": optional(record(string(), string())),
	"x-stainless-examples": optional(XLanguageExamples),
	"x-scalar-examples": optional(array(XCodeSample))
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/operation/x-draft-examples.js
var XDraftExamplesSchema = Type.Object({ "x-draft-examples": Type.Optional(Type.Array(Type.String())) });
var XDraftExamples = object({ "x-draft-examples": optional(array(string())) }, {
	typeName: "XDraftExamples",
	typeComment: "Draft example identifiers for an operation"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/operation/x-scalar-disable-parameters.js
/**
* Schema for parameter disabled states within a single example.
* Maps parameter names (strings) to their disabled state (boolean).
*/
var ExampleParameterStateSchema = Type.Record(Type.String(), Type.Boolean());
/**
* Schema for all example parameter states across multiple examples.
* Maps example keys (strings) to their parameter disabled states.
*/
var ExamplesParameterStatesSchema = Type.Record(Type.String(), ExampleParameterStateSchema);
/**
* Custom OpenAPI extension to track which parameters are disabled across different contexts.
*
* This extension allows the API client to persist disabled states for different types of
* parameters (global cookies, global headers, default headers) across multiple examples.
*
* This is necessary because:
* - Different parameter types have different scopes and behaviors
* - Users need to disable specific parameters per example without affecting others
* - The disabled state must persist across sessions
* - Global parameters can be disabled independently of operation-specific ones
*
* Structure:
* - Top level: Parameter category ("global-cookies", "global-headers", "default-headers")
* - Second level: Example keys (like "default", "custom-example")
* - Third level: Parameter names (like "Content-Type", "Cookie")
* - Values: true = disabled, false = enabled
*
* @example
* ```json
* {
*   "x-scalar-disable-parameters": {
*     "global-cookies": {
*       "default": {
*         "session": true
*       }
*     },
*     "global-headers": {
*       "default": {
*         "X-API-Key": false
*       }
*     },
*     "default-headers": {
*       "default": {
*         "Content-Type": true,
*         "Accept": false
*       }
*     }
*   }
* }
* ```
*/
var XScalarDisableParametersSchema = Type.Object({ "x-scalar-disable-parameters": Type.Optional(Type.Object({
	"global-cookies": Type.Optional(ExamplesParameterStatesSchema),
	"global-headers": Type.Optional(ExamplesParameterStatesSchema),
	"default-headers": Type.Optional(ExamplesParameterStatesSchema)
})) });
var ExampleParameterState = record(string(), boolean());
var ExamplesParameterStates = record(string(), ExampleParameterState);
var XScalarDisableParameters = object({ "x-scalar-disable-parameters": optional(object({
	"global-cookies": optional(ExamplesParameterStates),
	"global-headers": optional(ExamplesParameterStates),
	"default-headers": optional(ExamplesParameterStates)
}, {
	typeName: "DisableParametersConfig",
	typeComment: "Disabled parameter state by category and example"
})) }, {
	typeName: "XScalarDisableParameters",
	typeComment: "Tracks which parameters are disabled across examples"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/operation/x-scalar-stability.js
var XScalarStabilityValues = {
	Deprecated: "deprecated",
	Experimental: "experimental",
	Stable: "stable"
};
/**
* An OpenAPI extension to indicate the stability of the operation
*
* @example
* ```yaml
* x-scalar-stability: deprecated
* ```
*/
var XScalarStabilitySchema = Type.Object({ "x-scalar-stability": Type.Optional(Type.Union([
	Type.Literal("deprecated"),
	Type.Literal("experimental"),
	Type.Literal("stable")
])) });
var XScalarStability = object({ "x-scalar-stability": optional(union([
	literal("deprecated"),
	literal("experimental"),
	literal("stable")
], { typeComment: "Stability level of the operation" })) }, {
	typeName: "XScalarStability",
	typeComment: "Stability of the operation in the Scalar UI"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/operation.js
var OperationObjectSchemaDefinition = compose(Type.Object({
	/** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
	tags: Type.Optional(Type.Array(Type.String())),
	/** A short summary of what the operation does. */
	summary: Type.Optional(Type.String()),
	/** A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** Additional external documentation for this operation. */
	externalDocs: Type.Optional(ExternalDocumentationObjectRef),
	/** Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions. */
	operationId: Type.Optional(Type.String()),
	/** A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined in the OpenAPI Object's components.parameters. */
	parameters: Type.Optional(Type.Array(Type.Union([ParameterObjectRef, reference(ParameterObjectRef)]))),
	/** The request body applicable for this operation. The requestBody is fully supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague (such as GET, HEAD and DELETE), requestBody is permitted but does not have well-defined semantics and SHOULD be avoided if possible. */
	requestBody: Type.Optional(Type.Union([RequestBodyObjectRef, reference(RequestBodyObjectRef)])),
	/** The list of possible responses as they are returned from executing this operation. */
	responses: Type.Optional(ResponsesObjectRef),
	/** Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false. */
	deprecated: Type.Optional(Type.Boolean()),
	/** A declaration of which security mechanisms can be used for this operation. The list of values includes alternative Security Requirement Objects that can be used. Only one of the Security Requirement Objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used. */
	security: Type.Optional(Type.Array(SecurityRequirementObjectRef)),
	/** An alternative servers array to service this operation. If a servers array is specified at the Path Item Object or OpenAPI Object level, it will be overridden by this value. */
	servers: Type.Optional(Type.Array(ServerObjectRef)),
	/** A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses. */
	callbacks: Type.Optional(Type.Record(Type.String(), Type.Union([CallbackObjectRef, reference(CallbackObjectRef)])))
}), XBadgesSchema, XInternalSchema, XScalarIgnoreSchema, XCodeSamplesSchema, XScalarStabilitySchema, XScalarDisableParametersSchema, XPostResponseSchema, XPreRequestSchema, XDraftExamplesSchema, XScalarSelectedServerSchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/parameter/x-global.js
/**
* OpenAPI extension used by the api-client application to determine if a parameter is considered global in scope
* for the entire workspace. When set, this parameter will be injected into every request automatically.
*
* @example
* ```yaml
* x-global: true
* ```
*/
var XGlobalSchema = Type.Object({ "x-global": Type.Optional(Type.Boolean()) });
var XGlobal = object({ "x-global": optional(boolean()) }, {
	typeName: "XGlobal",
	typeComment: "When true, the parameter is injected into every request for the workspace"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/parameter.js
var ParameterObjectBaseSchema = compose(Type.Object({
	/** REQUIRED. The name of the parameter. Parameter names are case sensitive.
	*    - If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information.
	*    - If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
	*    - For all other cases, the name corresponds to the parameter name used by the in field. */
	name: Type.String(),
	/** REQUIRED. The location of the parameter. Possible values are "query", "querystring", "header", "path" or "cookie". The "querystring" value was added in OpenAPI 3.2. */
	in: Type.Union([
		Type.Literal("query"),
		Type.Literal("querystring"),
		Type.Literal("header"),
		Type.Literal("path"),
		Type.Literal("cookie")
	]),
	/** A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** Determines whether this parameter is mandatory. If the parameter location is "path", this field is REQUIRED and its value MUST be true. Otherwise, the field MAY be included and its default value is false. */
	required: Type.Optional(Type.Boolean()),
	/** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false. */
	deprecated: Type.Optional(Type.Boolean()),
	/** If true, clients MAY pass a zero-length string value in place of parameters that would otherwise be omitted entirely, which the server SHOULD interpret as the parameter being unused. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Interactions between this field and the parameter's Schema Object are implementation-defined. This field is valid only for query parameters. Use of this field is NOT RECOMMENDED, and it is likely to be removed in a later revision. */
	allowEmptyValue: Type.Optional(Type.Boolean()),
	/** When this is true, parameter values are serialized using reserved expansion, as defined by RFC6570, which allows RFC3986's reserved character set, as well as percent-encoded triples, to pass through unchanged, while still percent-encoding all other disallowed characters (including % outside of percent-encoded triples). Applications are still responsible for percent-encoding reserved characters that are not allowed in the query string ([, ], #), or have a special meaning in application/x-www-form-urlencoded (-, &, +); see Appendices C and E for details. This field only applies to parameters with an in value of query. The default value is false. */
	allowReserved: Type.Optional(Type.Boolean())
}), XGlobalSchema, XInternalSchema, XScalarIgnoreSchema);
var ParameterObjectWithSchemaSchema = compose(ParameterObjectBaseSchema, Type.Object({
	/** Describes how the header value will be serialized. The default (and only legal value for headers) is "simple". */
	style: Type.Optional(Type.String()),
	/** When this is true, header values of type array or object generate a single header whose value is a comma-separated list of the array items or key-value pairs of the map, see Style Examples. For other data types this field has no effect. The default value is false. */
	explode: Type.Optional(Type.Boolean()),
	/** The schema defining the type used for the header. */
	schema: Type.Optional(Type.Union([SchemaObjectRef, reference(SchemaObjectRef)])),
	/** Example of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
	example: Type.Optional(Type.Any()),
	/** Examples of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
	examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectRef, reference(ExampleObjectRef)])))
}));
var ParameterObjectWithContentSchema = compose(ParameterObjectBaseSchema, Type.Object({
	content: Type.Optional(Type.Record(Type.String(), MediaTypeObjectRef)),
	example: Type.Optional(Type.Unknown()),
	examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectRef, reference(ExampleObjectRef)])))
}));
/**
* Describes a single operation parameter.
*
* A unique parameter is defined by a combination of a name and location.
*
* See Appendix E for a detailed examination of percent-encoding concerns, including interactions with the application/x-www-form-urlencoded query string format.
*/
var ParameterObjectSchemaDefinition = Type.Union([ParameterObjectWithSchemaSchema, ParameterObjectWithContentSchema]);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/path-item.js
var PathItemObjectSchemaDefinition = Type.Object({
	/**
	* Allows for a referenced definition of this path item. The value MUST be in the form of a URI, and the referenced structure MUST be in the form of a Path Item Object. In case a Path Item Object field appears both in the defined object and the referenced object, the behavior is undefined. See the rules for resolving Relative References.
	*
	* Note: The behavior of $ref with adjacent properties is likely to change in future versions of this specification to bring it into closer alignment with the behavior of the Reference Object.
	*/
	"$ref": Type.Optional(Type.String()),
	/** An optional string summary, intended to apply to all operations in this path. */
	summary: Type.Optional(Type.String()),
	/** An optional string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** A definition of a GET operation on this path. */
	get: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a PUT operation on this path. */
	put: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a POST operation on this path. */
	post: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a DELETE operation on this path. */
	delete: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a PATCH operation on this path. */
	patch: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a CONNECT operation on this path. */
	connect: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a OPTIONS operation on this path. */
	options: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a HEAD operation on this path. */
	head: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a TRACE operation on this path. */
	trace: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A definition of a QUERY operation, as defined in the most recent IETF draft or its RFC successor, on this path. Added in OpenAPI 3.2. */
	query: Type.Optional(Type.Union([OperationObjectRef, reference(OperationObjectRef)])),
	/** A map of additional operations on this path. The map key is the HTTP method with the same capitalization that is to be sent in the request. This map MUST NOT contain any entry for the methods that can be defined by other fixed fields with Operation Object values (e.g. no POST entry, as the post field is used for this method). Added in OpenAPI 3.2. */
	additionalOperations: Type.Optional(Type.Record(Type.String(), Type.Union([OperationObjectRef, reference(OperationObjectRef)]))),
	/** An alternative servers array to service all operations in this path. If a servers array is specified at the OpenAPI Object level, it will be overridden by this value. */
	servers: Type.Optional(Type.Array(ServerObjectRef)),
	/** A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined in the OpenAPI Object's components.parameters. */
	parameters: Type.Optional(Type.Array(Type.Union([ParameterObjectRef, reference(ParameterObjectRef)])))
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/paths.js
/**
* Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the Server Object in order to construct the full URL. The Paths Object MAY be empty, due to Access Control List (ACL) constraints.
*/
var PathsObjectSchemaDefinition = Type.Record(
	Type.String(),
	/** A relative path to an individual endpoint. The field name MUST begin with a forward slash (/). The path is appended (no relative URL resolution) to the expanded URL from the Server Object's url field in order to construct the full URL. Path templating is allowed. When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the tooling to decide which one to use. */
	Type.Union([PathItemObjectRef, reference(PathItemObjectRef)])
);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/operation/x-scalar-selected-content-type.js
/**
* Schema for the x-scalar-selected-content-type extension on an OpenAPI operation.
*
* The key represents the example name, and the value is the selected content type string.
* Used by Scalar to track which content type is selected for each example in request or response bodies.
*/
var XScalarSelectedContentTypeSchema = Type.Object({ "x-scalar-selected-content-type": Type.Optional(Type.Record(Type.String(), Type.String())) });
var XScalarSelectedContentType = object({ "x-scalar-selected-content-type": optional(record(string(), string(), { typeComment: "Selected content type per example name" })) }, {
	typeName: "XScalarSelectedContentType",
	typeComment: "Selected content type per example for request or response bodies"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/request-body.js
/** Describes a single request body. */
var RequestBodyObjectSchemaDefinition = compose(Type.Object({
	/** A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** REQUIRED. The content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. "text/plain" overrides "text/* */
	content: Type.Record(Type.String(), MediaTypeObjectRef),
	/** Determines if the request body is required in the request. Defaults to false. */
	required: Type.Optional(Type.Boolean())
}), XScalarSelectedContentTypeSchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/response.js
var ResponseObjectSchemaDefinition = Type.Object({
	/** A short summary of the meaning of the response. Added in OpenAPI 3.2. */
	summary: Type.Optional(Type.String()),
	/** A description of the response. CommonMark syntax MAY be used for rich text representation. Optional as of OpenAPI 3.2. */
	description: Type.Optional(Type.String()),
	/** Maps a header name to its definition. RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored. */
	headers: Type.Optional(Type.Record(Type.String(), Type.Union([HeaderObjectRef, reference(HeaderObjectRef)]))),
	/** A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. "text/plain" overrides "text/*"  */
	content: Type.Optional(Type.Record(Type.String(), MediaTypeObjectRef)),
	/** A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects. */
	links: Type.Optional(Type.Record(Type.String(), Type.Union([LinkObjectRef, reference(LinkObjectRef)])))
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/responses.js
/**
* A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
*
* The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
*
* The default MAY be used as a default Response Object for all HTTP codes that are not covered individually by the Responses Object.
*
* The Responses Object MUST contain at least one response code, and if only one response code is provided it SHOULD be the response for a successful operation call.
*/
var ResponsesObjectSchemaDefinition = Type.Record(Type.String(), Type.Union([ResponseObjectRef, reference(ResponseObjectRef)]));
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/document/x-tags.js
var XTagsSchema = Type.Object({ "x-tags": Type.Optional(Type.Array(Type.String())) });
var XTags = object({ "x-tags": optional(array(string())) }, {
	typeName: "XTags",
	typeComment: "Custom tag ordering or grouping hints for schema objects"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/schema/x-additional-properties-name.js
/**
* x-additionalPropertiesName
*
* Custom attribute name for additionalProperties in a schema.
* This allows specifying a descriptive name for additional properties
* that may be present in an object.
*/
var XAdditionalPropertiesNameSchema = Type.Object({ "x-additionalPropertiesName": Type.Optional(Type.String()) });
var XAdditionalPropertiesName = object({ "x-additionalPropertiesName": optional(string()) }, {
	typeName: "XAdditionalPropertiesName",
	typeComment: "Display name for additional properties on a schema"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/schema/x-enum-descriptions.js
/**
* x-enumDescriptions
*
* Maps enum values to their descriptions. Each key should correspond to
* an enum value, and the value is the description for that enum value.
*
* Example:
* x-enumDescriptions:
*   missing_features: "Missing features"
*   too_expensive: "Too expensive"
*   unused: "Unused"
*   other: "Other"
*/
var XEnumDescriptionsSchema = Type.Object({
	"x-enumDescriptions": Type.Optional(Type.Union([Type.Record(Type.String(), Type.String()), Type.Array(Type.String())])),
	"x-enum-descriptions": Type.Optional(Type.Union([Type.Record(Type.String(), Type.String()), Type.Array(Type.String())]))
});
var enumDescriptionValue = union([record(string(), string()), array(string())]);
var XEnumDescriptions = object({
	"x-enumDescriptions": optional(enumDescriptionValue),
	"x-enum-descriptions": optional(enumDescriptionValue)
}, {
	typeName: "XEnumDescriptions",
	typeComment: "Descriptions for enum values"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/schema/x-enum-varnames.js
/**
* x-enum-varnames
*
* Names the enum values, must be in the same order as the enum values.
*
* @example
* ```yaml
* enum:
*   - moon
*   - asteroid
*   - comet
* x-enum-varnames:
*   - Moon
*   - Asteroid
*   - Comet
* ```
*/
var XEnumVarNamesSchema = Type.Object({
	"x-enum-varnames": Type.Optional(Type.Array(Type.String())),
	"x-enumNames": Type.Optional(Type.Array(Type.String()))
});
var XEnumVarNames = object({
	"x-enum-varnames": optional(array(string())),
	"x-enumNames": optional(array(string()))
}, {
	typeName: "XEnumVarNames",
	typeComment: "Display names for enum values"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/schema/x-examples.js
var XExamplesSchema = Type.Object({ "x-examples": Type.Optional(Type.Record(Type.String(), Type.Unknown())) });
var XExamples = object({ "x-examples": optional(record(string(), any())) }, {
	typeName: "XExamples",
	typeComment: "Named examples attached to a schema"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/schema/x-variable.js
var XVariableSchema = Type.Object({ "x-variable": Type.Optional(Type.String()) });
var XVariable = object({ "x-variable": optional(string()) }, {
	typeName: "XVariable",
	typeComment: "Variable reference for a schema property"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/schema.js
/**
* A schema position can hold either a schema object or a reference to one.
*
* The reference variant keeps `$ref-value` optional on purpose: an unresolved
* reference (for example a sparse chunk `$ref` produced by the server store) is
* just `{ $ref }` with no resolved value yet. If the reference variant required
* `$ref-value`, such a value would match neither variant, so coercion would fall
* back to the schema-object variant and silently drop the `$ref`, which breaks
* lazy chunk resolution. With `$ref-value` optional the `{ $ref }` already matches
* the reference variant and is preserved unchanged, independent of order.
*
* The schema-object variant comes first so that a value matching neither variant
* (genuinely invalid input, never a reference) falls back to an empty schema
* object rather than a bogus `{ $ref: '' }` that would read as a real reference.
*/
var schemaOrReference = Type.Union([SchemaObjectRef, compose(ReferenceObjectSchema, Type.Object({ "$ref-value": Type.Optional(Type.Unknown()) }))]);
var PrimitiveSchemaTypeSchema = Type.Union([
	Type.Literal("null"),
	Type.Literal("boolean"),
	Type.Literal("string"),
	Type.Literal("number"),
	Type.Literal("integer"),
	Type.Literal("object"),
	Type.Literal("array")
]);
/**
* Primitive types that don't have additional validation properties.
* These types (null, boolean) can be used
* without additional validation constraints.
*/
var OtherTypes = Type.Object({ type: Type.Union([Type.Literal("null"), Type.Literal("boolean")]) });
var Extensions = compose(XScalarIgnoreSchema, XInternalSchema, XVariableSchema, XExamplesSchema, XEnumDescriptionsSchema, XEnumVarNamesSchema, XAdditionalPropertiesNameSchema, XOrderSchema, XTagsSchema);
var CorePropertiesWithSchema = Type.Object({
	/**
	* JSON Schema 2020-12 core reference keywords.
	*
	* OpenAPI 3.1 adopts the JSON Schema 2020-12 dialect for Schema Objects, which means a schema may carry an
	* identifier (`$id`), a plain-name anchor (`$anchor`), and the dynamic binding keywords (`$dynamicAnchor` /
	* `$dynamicRef`) used for generic and recursive patterns such as `PaginatedResponse<T>`. We keep these typed so
	* the keywords survive parsing instead of being dropped as unknown properties. Resolution of `$dynamicRef`
	* against the active `$dynamicAnchor` is tracked separately, see https://github.com/scalar/scalar/issues/9414.
	*/
	$id: Type.Optional(Type.String()),
	/** Plain-name anchor that other schemas can reference with `#anchor`. */
	$anchor: Type.Optional(Type.String()),
	/** Dynamic anchor, the target a matching `$dynamicRef` resolves to within the dynamic scope. */
	$dynamicAnchor: Type.Optional(Type.String()),
	/** Dynamic reference, resolved against the outermost matching `$dynamicAnchor` in the dynamic scope. */
	$dynamicRef: Type.Optional(Type.String()),
	name: Type.Optional(Type.String()),
	/** A title for the schema. */
	title: Type.Optional(Type.String()),
	/** A description of the schema. */
	description: Type.Optional(Type.String()),
	/** Default value for the schema. */
	default: Type.Optional(Type.Unknown()),
	/** Array of allowed values. */
	enum: Type.Optional(Type.Array(Type.Unknown())),
	/** Constant value that must match exactly. */
	const: Type.Optional(Type.Unknown()),
	/** Media type for content validation. */
	contentMediaType: Type.Optional(Type.String()),
	/** Content encoding. */
	contentEncoding: Type.Optional(Type.String()),
	/** Schema for content validation. */
	contentSchema: Type.Optional(schemaOrReference),
	/** Whether the schema is deprecated. */
	deprecated: Type.Optional(Type.Boolean()),
	/** Adds support for polymorphism. The discriminator is used to determine which of a set of schemas a payload is expected to satisfy. See Composition and Inheritance for more details. */
	discriminator: Type.Optional(DiscriminatorObjectRef),
	/** Whether the schema is read-only. */
	readOnly: Type.Optional(Type.Boolean()),
	/** Whether the schema is write-only. */
	writeOnly: Type.Optional(Type.Boolean()),
	/** This MAY be used only on property schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property. */
	xml: Type.Optional(XMLObjectRef),
	/** Additional external documentation for this schema. */
	externalDocs: Type.Optional(ExternalDocumentationObjectRef),
	/**
	* A free-form field to include an example of an instance for this schema. To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
	*
	* @deprecated The example field has been deprecated in favor of the JSON Schema examples keyword. Use of example is discouraged, and later versions of this specification may remove it.
	*/
	example: Type.Optional(Type.Unknown()),
	/**
	* An array of examples of valid instances for this schema. This keyword follows the JSON Schema Draft 2020-12 specification.
	* Each example should be a valid instance of the schema.
	*/
	examples: Type.Optional(Type.Array(Type.Unknown())),
	/** All schemas must be valid. */
	allOf: Type.Optional(Type.Array(schemaOrReference)),
	/** Exactly one schema must be valid. */
	oneOf: Type.Optional(Type.Array(schemaOrReference)),
	/** At least one schema must be valid. */
	anyOf: Type.Optional(Type.Array(schemaOrReference)),
	/** Schema must not be valid. */
	not: Type.Optional(schemaOrReference)
});
/**
* Numeric validation properties for number and integer types.
*/
var NumericValidationKeywords = Type.Object({
	/** Number must be a multiple of this value. */
	multipleOf: Type.Optional(Type.Number()),
	/** Maximum value (inclusive). */
	maximum: Type.Optional(Type.Number()),
	/** Maximum value (exclusive). */
	exclusiveMaximum: Type.Optional(Type.Number({ minimum: 0 })),
	/** Minimum value (inclusive). */
	minimum: Type.Optional(Type.Number()),
	/** Minimum value (exclusive). */
	exclusiveMinimum: Type.Optional(Type.Number({ minimum: 0 }))
});
var NumericProperties = compose(Type.Object({
	type: Type.Union([Type.Literal("number"), Type.Literal("integer")]),
	/** Different subtypes */
	format: Type.Optional(Type.String())
}), NumericValidationKeywords);
/**
* String validation properties for string types.
*/
var StringValidationKeywords = Type.Object({
	/** Maximum string length. */
	maxLength: Type.Optional(Type.Integer({ minimum: 0 })),
	/** Minimum string length. */
	minLength: Type.Optional(Type.Integer({ minimum: 0 })),
	/** Regular expression pattern. */
	pattern: Type.Optional(Type.String())
});
var StringValidationProperties = compose(Type.Object({
	type: Type.Literal("string"),
	/** Different subtypes - allow any arbitrary string, this negates the purpose of having a union of formats so we type it in typescript instead */
	format: Type.Optional(Type.String())
}), StringValidationKeywords);
var ArrayValidationKeywordsWithSchema = Type.Object({
	/** Maximum number of items in array. */
	maxItems: Type.Optional(Type.Integer({ minimum: 0 })),
	/** Minimum number of items in array. */
	minItems: Type.Optional(Type.Integer({ minimum: 0 })),
	/** Whether array items must be unique. */
	uniqueItems: Type.Optional(Type.Boolean()),
	/** Schema for array items. */
	items: Type.Optional(schemaOrReference),
	/** Schema for tuple validation. */
	prefixItems: Type.Optional(Type.Array(schemaOrReference))
});
var ArrayValidationPropertiesWithSchema = compose(Type.Object({ type: Type.Literal("array") }), ArrayValidationKeywordsWithSchema);
var ObjectValidationKeywordsWithSchema = Type.Object({
	/** Maximum number of properties. */
	maxProperties: Type.Optional(Type.Integer({ minimum: 0 })),
	/** Minimum number of properties. */
	minProperties: Type.Optional(Type.Integer({ minimum: 0 })),
	/** Array of required property names. */
	required: Type.Optional(Type.Array(Type.String())),
	/** Object property definitions. */
	properties: Type.Optional(Type.Record(Type.String(), schemaOrReference)),
	/** Schema for additional properties. */
	additionalProperties: Type.Optional(Type.Union([Type.Boolean(), schemaOrReference])),
	/** Properties matching regex patterns. */
	patternProperties: Type.Optional(Type.Record(Type.String(), schemaOrReference)),
	/** Constraints on property names (JSON Schema propertyNames keyword). */
	propertyNames: Type.Optional(schemaOrReference)
});
var ObjectValidationPropertiesWithSchema = compose(Type.Object({ type: Type.Literal("object") }), ObjectValidationKeywordsWithSchema);
var MultiTypeValidationPropertiesWithSchema = compose(Type.Object({
	type: Type.Array(PrimitiveSchemaTypeSchema),
	/** Different subtypes - allow any arbitrary string, this negates the purpose of having a union of formats so we type it in typescript instead */
	format: Type.Optional(Type.String())
}), NumericValidationKeywords, StringValidationKeywords, ArrayValidationKeywordsWithSchema, ObjectValidationKeywordsWithSchema);
/** Builds the recursive schema schema */
var SchemaObjectSchemaDefinition = Type.Union([
	compose(Type.Object({ __scalar_: Type.String() }), CorePropertiesWithSchema, Extensions),
	compose(OtherTypes, CorePropertiesWithSchema, Extensions),
	compose(NumericProperties, CorePropertiesWithSchema, Extensions),
	compose(StringValidationProperties, CorePropertiesWithSchema, Extensions),
	compose(ObjectValidationPropertiesWithSchema, CorePropertiesWithSchema, Extensions),
	compose(ArrayValidationPropertiesWithSchema, CorePropertiesWithSchema, Extensions),
	compose(MultiTypeValidationPropertiesWithSchema, CorePropertiesWithSchema, Extensions)
]);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/security-requirement.js
/**
* Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.
*
* A Security Requirement Object MAY refer to multiple security schemes in which case all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
*
* When the security field is defined on the OpenAPI Object or Operation Object and contains multiple Security Requirement Objects, only one of the entries in the list needs to be satisfied to authorize the request. This enables support for scenarios where the API allows multiple, independent security schemes.
*
* An empty Security Requirement Object ({}) indicates anonymous access is supported.
*/
var SecurityRequirementObjectSchemaDefinition = Type.Partial(Type.Record(
	/** Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MAY contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band. */
	Type.String(),
	Type.Array(Type.String())
));
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/security/x-default-scopes.js
/**
* Default selected scopes for the oauth flow
*
* @example
* ```json
* {
*   "x-default-scopes": [
*     "profile",
*     "email"
*   ]
* }
* ```
*/
var XDefaultScopesSchema = Type.Object({ "x-default-scopes": Type.Optional(Type.Array(Type.String())) });
var XDefaultScopes = object({ "x-default-scopes": optional(array(string())) }, {
	typeName: "XDefaultScopes",
	typeComment: "Default selected OAuth scopes"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/security-scheme.js
var DescriptionSchema = compose(Type.Object({
	/** A description for security scheme. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** Declares this security scheme to be deprecated. Consumers SHOULD refrain from usage of the declared scheme. Added in OpenAPI 3.2. */
	deprecated: Type.Optional(Type.Boolean())
}), XScalarIgnoreSchema);
var ApiKeySchema = compose(DescriptionSchema, Type.Object({
	/** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
	type: Type.Literal("apiKey"),
	/** REQUIRED. The name of the header, query or cookie parameter to be used. */
	name: Type.String(),
	/** REQUIRED. The location of the API key. Valid values are "query", "header", or "cookie". */
	in: Type.Union([
		Type.Literal("query"),
		Type.Literal("header"),
		Type.Literal("cookie")
	])
}));
var HttpSchema = compose(DescriptionSchema, Type.Object({
	/** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
	type: Type.Literal("http"),
	/** REQUIRED. The name of the HTTP Authentication scheme to be used in the Authorization header as defined in RFC7235. The values used SHOULD be registered in the IANA Authentication Scheme registry. The value is case-insensitive, as defined in RFC7235. */
	scheme: Type.Union([Type.Literal("basic"), Type.Literal("bearer")]),
	/** A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes. */
	bearerFormat: Type.Optional(Type.String())
}));
var MutualTlsSchema = compose(DescriptionSchema, Type.Object({ 
/** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
type: Type.Literal("mutualTLS") }));
var OAuth2 = compose(DescriptionSchema, Type.Object({
	/** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
	type: Type.Literal("oauth2"),
	/** REQUIRED. An object containing configuration information for the flow types supported. */
	flows: OAuthFlowsObjectRef,
	/** URL to the OAuth2 authorization server metadata (RFC8414). Use HTTPS, or HTTP for local development URLs. Added in OpenAPI 3.2. */
	oauth2MetadataUrl: Type.Optional(Type.String())
}), XDefaultScopesSchema);
var OpenIdConnect = compose(DescriptionSchema, Type.Object({
	/** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
	type: Type.Literal("openIdConnect"),
	/** REQUIRED. Well-known URL to discover the [[OpenID-Connect-Discovery]] provider metadata. */
	openIdConnectUrl: Type.String()
}));
/**
* Defines a security scheme that can be used by the operations.
*
* Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), mutual TLS (use of a client certificate), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in RFC6749, and [[OpenID-Connect-Core]]. Please note that as of 2020, the implicit flow is about to be deprecated by OAuth 2.0 Security Best Current Practice. Recommended for most use cases is Authorization Code Grant flow with PKCE.
*/
var SecuritySchemeObjectSchemaDefinition = Type.Union([
	ApiKeySchema,
	HttpSchema,
	MutualTlsSchema,
	OAuth2,
	OpenIdConnect
]);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/server.js
/** An object representing a Server. */
var ServerObjectSchemaDefinition = Type.Object({
	/** REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the document containing the Server Object is being served. Variable substitutions will be made when a variable is named in {braces}. */
	url: Type.String(),
	/** An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** An optional unique string to refer to the host designated by the URL. Added in OpenAPI 3.2. */
	name: Type.Optional(Type.String()),
	/** A map between a variable name and its value. The value is used for substitution in the server's URL template. */
	variables: Type.Optional(Type.Record(Type.String(), ServerVariableObjectRef))
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/server-variable.js
/** An object representing a Server Variable for server URL template substitution. */
var ServerVariableObjectSchemaDefinition = Type.Object({
	/** An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty. */
	enum: Type.Optional(Type.Array(Type.String())),
	/** REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. If the enum is defined, the value MUST exist in the enum's values. Note that this behavior is different from the Schema Object's default keyword, which documents the receiver's behavior rather than inserting the value into the data. */
	default: Type.Optional(Type.String()),
	/** An optional description for the server variable. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String())
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/extensions/tag/x-display-name.js
/**
* An OpenAPI extension to overwrite tag names with a display-friendly version
*
* @example
* ```yaml
* x-displayName: planets
* ```
*/
var XDisplayNameSchema = Type.Object({ "x-displayName": Type.Optional(Type.String()) });
var XDisplayName = object({ "x-displayName": optional(string()) }, {
	typeName: "XDisplayName",
	typeComment: "Display-friendly name for a tag"
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/tag.js
/** Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances. */
var TagObjectSchemaDefinition = compose(Type.Object({
	/** REQUIRED. The name of the tag. */
	name: Type.String(),
	/** A short summary of the tag, used for display purposes. Added in OpenAPI 3.2. */
	summary: Type.Optional(Type.String()),
	/** A description for the tag. CommonMark syntax MAY be used for rich text representation. */
	description: Type.Optional(Type.String()),
	/** Additional external documentation for this tag. */
	externalDocs: Type.Optional(ExternalDocumentationObjectRef),
	/** The name of a tag that this tag is nested under. The named tag MUST exist in the API description, and circular references between parent and child tags MUST NOT be used. Added in OpenAPI 3.2. */
	parent: Type.Optional(Type.String()),
	/** A machine-readable string to categorize what sort of tag it is. Any string value can be used; common uses are nav for Navigation, badge for visible badges, audience for APIs used by different groups. Added in OpenAPI 3.2. */
	kind: Type.Optional(Type.String())
}), XDisplayNameSchema, XInternalSchema, XScalarIgnoreSchema, XScalarOrderSchema);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/xml.js
/**
* A metadata object that allows for more fine-tuned XML model definitions.
*
* When using arrays, XML element names are not inferred (for singular/plural forms) and the name field SHOULD be used to add that information. See examples for expected behavior.
*/
var XMLObjectSchemaDefinition = Type.Object({
	/** Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being "array" (outside the items), it will affect the wrapping element if and only if wrapped is true. If wrapped is false, it will be ignored. */
	name: Type.Optional(Type.String()),
	/** The URI of the namespace definition. Value MUST be in the form of a non-relative URI. */
	namespace: Type.Optional(Type.String()),
	/** The prefix to be used for the name. */
	prefix: Type.Optional(Type.String()),
	/** Declares whether the property definition translates to an attribute instead of an element. Default value is false. */
	attribute: Type.Optional(Type.Boolean()),
	/** MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being "array" (outside the items). */
	wrapped: Type.Optional(Type.Boolean()),
	/** Declares the type of XML node used to represent the described schema. Valid values are "element", "attribute", "text", "cdata", and "none". Added in OpenAPI 3.2. */
	nodeType: Type.Optional(Type.Union([
		Type.Literal("element"),
		Type.Literal("attribute"),
		Type.Literal("text"),
		Type.Literal("cdata"),
		Type.Literal("none")
	]))
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/v3.2/strict/openapi-document.js
var OpenApiExtensionsSchema = compose(Type.Partial(Type.Object({
	"x-original-oas-version": Type.String(),
	[extensions.document.navigation]: TraversedDocumentObjectRef,
	/**
	* The chunk a compact document's navigation children are loaded from.
	*
	* The navigation itself is always the tree, so every reader gets `name`, `title` and the rest
	* by plain property access; only the children are externalized, and this says where they are
	* until `resolve(['x-scalar-navigation'])` puts them on the document and removes the key.
	*/
	[extensions.document.navigationChunk]: Type.String()
})), XScalarOriginalSourceUrlSchema, XTagGroupsSchema, xScalarEnvironmentsSchema, XScalarSelectedServerSchema, XScalarIconSchema, XScalarOrderSchema, xScalarCookiesSchema, XScalarOriginalDocumentHashSchema, XScalarIsDirtySchema, XScalarActiveEnvironmentSchema, XScalarWatchModeSchema, XScalarRegistryMetaSchema, XScalarDefaultRequestBodyViewSchema, XPreRequestSchema, XPostResponseSchema);
var OpenApiDocumentSchemaDefinition = compose(Type.Object({
	/** REQUIRED. This string MUST be the version number of the OpenAPI Specification that the OpenAPI Document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI Document. This is not related to the API info.version string. */
	openapi: Type.String(),
	/** The URI of the OpenAPI Description, used to resolve relative references and identify the document. This MUST be in the form of a URI. Added in OpenAPI 3.2. */
	$self: Type.Optional(Type.String()),
	/** REQUIRED. Provides metadata about the API. The metadata MAY be used by tooling as required. */
	info: InfoObjectRef,
	/** The default value for the $schema keyword within Schema Objects contained within this OAS document. This MUST be in the form of a URI. */
	jsonSchemaDialect: Type.Optional(Type.String()),
	/** An array of Server Objects, which provide connectivity information to a target server. If the servers field is not provided, or is an empty array, the default value would be a Server Object with a url value of /. */
	servers: Type.Optional(Type.Array(ServerObjectRef)),
	/** The available paths and operations for the API. */
	paths: Type.Optional(PathsObjectRef),
	/** The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement. Closely related to the callbacks feature, this section describes requests initiated other than by an API call, for example by an out of band registration. The key name is a unique string to refer to each webhook, while the (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the expected responses. An example is available. */
	webhooks: Type.Optional(PathsObjectRef),
	/** An element to hold various Objects for the OpenAPI Description. */
	components: Type.Optional(ComponentsObjectRef),
	/** A declaration of which security mechanisms can be used across the API. The list of values includes alternative Security Requirement Objects that can be used. Only one of the Security Requirement Objects need to be satisfied to authorize a request. Individual operations can override this definition. The list can be incomplete, up to being empty or absent. To make security explicitly optional, an empty security requirement ({}) can be included in the array. */
	security: Type.Optional(Type.Array(SecurityRequirementObjectRef)),
	/** A list of tags used by the OpenAPI Description with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique. */
	tags: Type.Optional(Type.Array(TagObjectRef)),
	/** Additional external documentation. */
	externalDocs: Type.Optional(ExternalDocumentationObjectRef)
}), OpenApiExtensionsSchema);
var module = Type.Module({
	[REF_DEFINITIONS.ComponentsObject]: ComponentsObjectSchemaDefinition,
	[REF_DEFINITIONS.SecurityRequirementObject]: SecurityRequirementObjectSchemaDefinition,
	[REF_DEFINITIONS.TagObject]: TagObjectSchemaDefinition,
	[REF_DEFINITIONS.CallbackObject]: CallbackObjectSchemaDefinition,
	[REF_DEFINITIONS.PathItemObject]: PathItemObjectSchemaDefinition,
	[REF_DEFINITIONS.PathsObject]: PathsObjectSchemaDefinition,
	[REF_DEFINITIONS.OperationObject]: OperationObjectSchemaDefinition,
	[REF_DEFINITIONS.SchemaObject]: SchemaObjectSchemaDefinition,
	[REF_DEFINITIONS.EncodingObject]: EncodingObjectSchemaDefinition,
	[REF_DEFINITIONS.MediaTypeObject]: MediaTypeObjectSchemaDefinition,
	[REF_DEFINITIONS.HeaderObject]: HeaderObjectSchemaDefinition,
	[REF_DEFINITIONS.ServerObject]: ServerObjectSchemaDefinition,
	[REF_DEFINITIONS.ExternalDocumentationObject]: ExternalDocumentationObjectSchemaDefinition,
	[REF_DEFINITIONS.InfoObject]: InfoObjectSchemaDefinition,
	[REF_DEFINITIONS.ContactObject]: ContactObjectSchemaDefinition,
	[REF_DEFINITIONS.LicenseObject]: LicenseObjectSchemaDefinition,
	[REF_DEFINITIONS.ResponseObject]: ResponseObjectSchemaDefinition,
	[REF_DEFINITIONS.ResponsesObject]: ResponsesObjectSchemaDefinition,
	[REF_DEFINITIONS.ParameterObject]: ParameterObjectSchemaDefinition,
	[REF_DEFINITIONS.ExampleObject]: ExampleObjectSchemaDefinition,
	[REF_DEFINITIONS.RequestBodyObject]: RequestBodyObjectSchemaDefinition,
	[REF_DEFINITIONS.SecuritySchemes]: SecuritySchemesSchemaDefinition,
	[REF_DEFINITIONS.SecuritySchemeObject]: SecuritySchemeObjectSchemaDefinition,
	[REF_DEFINITIONS.LinkObject]: LinkObjectSchemaDefinition,
	[REF_DEFINITIONS.XMLObject]: XMLObjectSchemaDefinition,
	[REF_DEFINITIONS.DiscriminatorObject]: DiscriminatorObjectSchemaDefinition,
	[REF_DEFINITIONS.OAuthFlowsObject]: OAuthFlowsObjectSchemaDefinition,
	[REF_DEFINITIONS.ServerVariableObject]: ServerVariableObjectSchemaDefinition,
	OpenApiDocument: OpenApiDocumentSchemaDefinition,
	[REF_DEFINITIONS.TraversedDescriptionObject]: TraversedDescriptionSchemaDefinition,
	[REF_DEFINITIONS.TraversedOperationObject]: TraversedOperationSchemaDefinition,
	[REF_DEFINITIONS.TraversedAsyncApiOperationObject]: TraversedAsyncApiOperationSchemaDefinition,
	[REF_DEFINITIONS.TraversedAsyncApiChannelObject]: TraversedAsyncApiChannelSchemaDefinition,
	[REF_DEFINITIONS.TraversedAsyncApiMessageObject]: TraversedAsyncApiMessageSchemaDefinition,
	[REF_DEFINITIONS.TraversedSchemaObject]: TraversedSchemaSchemaDefinition,
	[REF_DEFINITIONS.TraversedWebhookObject]: TraversedWebhookSchemaDefinition,
	[REF_DEFINITIONS.TraversedTagObject]: TraversedTagSchemaDefinition,
	[REF_DEFINITIONS.TraversedEntryObject]: TraversedEntrySchemaDefinition,
	[REF_DEFINITIONS.TraversedDocumentObject]: TraversedDocumentSchemaDefinition
});
var OpenAPIDocumentSchema = module.Import("OpenApiDocument");
module.Import("ComponentsObject");
var SecurityRequirementObjectSchema = module.Import("SecurityRequirementObject");
module.Import("TagObject");
module.Import("CallbackObject");
module.Import("PathItemObject");
module.Import("PathsObject");
module.Import("OperationObject");
var SchemaObjectSchema = module.Import("SchemaObject");
module.Import("EncodingObject");
module.Import("MediaTypeObject");
module.Import("HeaderObject");
var ServerObjectSchema = module.Import("ServerObject");
module.Import("ExternalDocumentationObject");
module.Import("InfoObject");
module.Import("ContactObject");
module.Import("LicenseObject");
module.Import("ResponseObject");
module.Import("ResponsesObject");
module.Import("ParameterObject");
module.Import("ExampleObject");
module.Import("RequestBodyObject");
module.Import("SecuritySchemes");
var SecuritySchemeObjectSchema = module.Import("SecuritySchemeObject");
module.Import("LinkObject");
module.Import("XMLObject");
module.Import("DiscriminatorObject");
module.Import("OAuthFlowsObject");
module.Import("ServerVariableObject");
module.Import("TraversedDescriptionObject");
module.Import("TraversedEntryObject");
module.Import("TraversedTagObject");
module.Import("TraversedOperationObject");
module.Import("TraversedSchemaObject");
module.Import("TraversedWebhookObject");
//#endregion
//#region node_modules/@scalar/workspace-store/dist/resolve.js
/**
* The coercion target: a schema object that may still carry the `$ref` it was resolved from.
*
* `Type.Composite` merges every property of `SchemaObjectSchema` to build this, so it belongs at module
* scope. `resolve.schema` runs once per property of every schema a render walks, and rebuilding the
* composite per call dominated that walk.
*/
var resolvedSchemaSchema = compose(SchemaObjectSchema, Type.Object({ $ref: Type.Optional(Type.String()) }));
var resolve = { schema: (schema) => {
	if (schema === void 0) return;
	return coerceValue(resolvedSchemaSchema, getResolvedRef(schema, mergeSiblingReferences));
} };
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/helpers/example-evaluation.js
/** Internal option: keep the default JSON generation path free of provenance allocations. */
var EXAMPLE_EVALUATION = Symbol("example-evaluation");
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/helpers/get-example-from-schema.js
/** Maximum recursion depth to prevent infinite loops in circular references */
var MAX_LEVELS_DEEP = 10;
/** Default name used for additional properties when no custom name is provided */
var DEFAULT_ADDITIONAL_PROPERTIES_NAME = "additionalProperty";
/**
* Pre-computed date/time values to avoid expensive Date operations on every call.
* These are calculated once at module load time for better performance.
*/
var currentISOString = (/* @__PURE__ */ new Date()).toISOString();
/**
* Mapping of OpenAPI string formats to example values.
* Used to generate realistic examples for different string formats.
*/
var genericExampleValues = {
	"date-time": currentISOString,
	"date": currentISOString.split("T")[0],
	"email": "hello@example.com",
	"hostname": "example.com",
	"idn-email": "jane.doe@example.com",
	"idn-hostname": "example.com",
	"ipv4": "127.0.0.1",
	"ipv6": "51d4:7fab:bfbf:b7d7:b2cb:d4b4:3dad:d998",
	"iri-reference": "/entitiy/1",
	"iri": "https://example.com/entity/123",
	"json-pointer": "/nested/objects",
	"password": "super-secret",
	"regex": "/[a-z]/",
	"relative-json-pointer": "1/nested/objects",
	"time": currentISOString.split("T")[1].split(".")[0],
	"uri-reference": "../folder",
	"uri-template": "https://example.com/{id}",
	"uri": "https://example.com",
	"uuid": "123e4567-e89b-12d3-a456-426614174000",
	"object-id": "6592008029c8c3e4dc76256c"
};
/**
* Extract enum values from the propertyNames keyword of an object schema.
* JSON Schema's propertyNames constrains which keys are valid in a map/dict.
*/
var getPropertyNamesEnumValues = (schema) => {
	if (!("propertyNames" in schema) || !schema.propertyNames) return;
	const resolved = resolve.schema(schema.propertyNames);
	if (resolved && "enum" in resolved && Array.isArray(resolved.enum) && resolved.enum.length > 0) return resolved.enum;
};
/**
* Generate example values for string types based on their format.
* Special handling for binary format which returns a File object.
*/
var guessFromFormat = (schema, makeUpRandomData = false, fallback = "") => {
	if ("type" in schema && schema.type === "string" && "format" in schema && schema.format === "binary") return "@filename";
	if (makeUpRandomData && "format" in schema && schema.format) return genericExampleValues[/^uuid[1-8]$/.test(schema.format) ? "uuid" : schema.format] ?? fallback;
	return fallback;
};
/**
* WeakMap cache for memoizing resolved example results.
* Uses the resolved schema object as the key for efficient lookups.
*/
var resultCache = /* @__PURE__ */ new WeakMap();
/**
* Set once the depth cap has truncated something in the current top-level call.
*
* A truncated value only holds at the level it was produced at, but `resultCache` keys carry no level,
* so a value assembled around one must not be stored. Composition reaches that case: an `allOf` member
* climbs a level without growing `schemaPath`, so a schema rendered just above the cap in one chain
* shares its key with the same schema used at the top of a document, and the shallow use is served the
* truncated result. Widening the key would cost the cache its hits everywhere, so storing simply stops
* for the rest of the call instead. The walk is synchronous, so resetting at level 0 scopes this to one
* top-level call.
*/
var truncated = false;
/** Cache required property names per parent schema for O(1) membership checks */
var requiredNamesCache = /* @__PURE__ */ new WeakMap();
/** Normalize schema identity for cache and cycle tracking */
var getSchemaCacheTarget = (schema) => unpackProxyObject(schema, { depth: 1 });
/**
* Retrieves the set of required property names from a schema.
* Caches the result in a WeakMap for efficient lookups.
*/
var getRequiredNames = (parentSchema) => {
	if (!parentSchema) return;
	const cached = requiredNamesCache.get(parentSchema);
	if (cached) return cached;
	if ("required" in parentSchema) {
		const required = parentSchema.required;
		if (Array.isArray(required) && required.length > 0) {
			const set = new Set(required);
			requiredNamesCache.set(parentSchema, set);
			return set;
		}
	}
};
/**
* Cache the result for a schema if it is an object type.
* Primitive values are not cached to avoid unnecessary WeakMap operations.
* Stores a map of cacheKey strings which is made up of the options object.
*
* Skips the cache while a dynamic scope is active: the same shared schema node can resolve to
* different examples depending on the dynamic scope it was reached through, so caching it by object
* identity would leak one scope's result into another.
*/
var cache = (schema, result, cacheKey, skip = false) => {
	if (skip || truncated || typeof result !== "object" || result === null) return result;
	const rawSchema = getSchemaCacheTarget(schema);
	const cacheMap = resultCache.get(rawSchema) ?? /* @__PURE__ */ new Map();
	if (cacheMap) cacheMap.set(cacheKey, result);
	resultCache.set(rawSchema, cacheMap);
	return result;
};
/**
* Check if a schema uses composition keywords (allOf, oneOf, anyOf).
* These require special handling for merging or selecting schemas.
*/
var isComposed = (schema) => !!(schema.allOf || schema.oneOf || schema.anyOf);
/**
* Determine if a property should be omitted based on the options.
* Properties are omitted if they are not required and the option is enabled.
*/
var shouldOmitProperty = (schema, parentSchema, propertyName, options) => {
	if (schema.deprecated && options?.includeDeprecated !== true || options?.mode === "write" && schema.readOnly || options?.mode === "read" && schema.writeOnly) return true;
	if (options?.omitEmptyAndOptionalProperties !== true) return false;
	if ("type" in schema && (schema.type === "object" || schema.type === "array") || isComposed(schema)) return false;
	if ("examples" in schema && Array.isArray(schema.examples) && schema.examples.length > 0 || "example" in schema && schema.example !== void 0 || "default" in schema && schema.default !== void 0 || "const" in schema && schema.const !== void 0 || "enum" in schema && Array.isArray(schema.enum) && schema.enum.length > 0) return false;
	const name = propertyName ?? schema.title ?? "";
	const requiredNames = getRequiredNames(parentSchema);
	return !(requiredNames ? requiredNames.has(name) : false);
};
/**
* Merge two example values with predictable semantics.
* Arrays are concatenated, objects are merged, otherwise the new value wins.
*/
var mergeExamples = (baseValue, newValue) => {
	if (newValue === void 0 || newValue === null) return baseValue;
	if (baseValue === void 0 || baseValue === null) return newValue;
	if (Array.isArray(baseValue) && Array.isArray(newValue)) return [...baseValue, ...newValue];
	if (baseValue && typeof baseValue === "object" && newValue && typeof newValue === "object") return {
		...baseValue,
		...newValue
	};
	return newValue;
};
var MAX_SCHEMA_VALIDATION_DEPTH = 50;
/** Cache composed schema resolution to preserve identity across recursion checks. */
var composedSchemaResolutionCache = /* @__PURE__ */ new WeakMap();
var isValueOfType = (value, targetType) => {
	switch (targetType) {
		case "string": return typeof value === "string";
		case "number": return typeof value === "number" && !Number.isNaN(value);
		case "integer": return typeof value === "number" && Number.isInteger(value);
		case "boolean": return typeof value === "boolean";
		case "object": return typeof value === "object" && value !== null && !Array.isArray(value);
		case "array": return Array.isArray(value);
		case "null": return value === null;
		default: return false;
	}
};
var resolveComposedSchemaMember = (schema) => {
	const rawSchema = getSchemaCacheTarget(schema);
	if (composedSchemaResolutionCache.has(rawSchema)) return composedSchemaResolutionCache.get(rawSchema);
	const resolved = "$ref" in schema ? resolve.schema(schema) : schema;
	composedSchemaResolutionCache.set(rawSchema, resolved);
	return resolved;
};
var schemaAllowsValue = (schema, value, seen = /* @__PURE__ */ new Set(), level = 0) => {
	if (level > MAX_SCHEMA_VALIDATION_DEPTH) return true;
	const rawSchema = getSchemaCacheTarget(schema);
	if (seen.has(rawSchema)) return true;
	seen.add(rawSchema);
	if ("type" in schema && schema.type) {
		if (!(Array.isArray(schema.type) ? schema.type : [schema.type]).some((targetType) => {
			if (targetType === "number" && isValueOfType(value, "integer")) return true;
			return isValueOfType(value, targetType);
		})) {
			seen.delete(rawSchema);
			return false;
		}
	}
	const anyOf = schema.anyOf;
	if (Array.isArray(anyOf) && anyOf.length > 0) {
		if (!anyOf.some((item) => {
			const resolved = resolveComposedSchemaMember(item);
			return !!resolved && schemaAllowsValue(resolved, value, seen, level + 1);
		})) {
			seen.delete(rawSchema);
			return false;
		}
	}
	const oneOf = schema.oneOf;
	if (Array.isArray(oneOf) && oneOf.length > 0) {
		if (!oneOf.some((item) => {
			const resolved = resolveComposedSchemaMember(item);
			return !!resolved && schemaAllowsValue(resolved, value, seen, level + 1);
		})) {
			seen.delete(rawSchema);
			return false;
		}
	}
	const allOf = schema.allOf;
	if (Array.isArray(allOf) && allOf.length > 0) {
		if (!allOf.every((item) => {
			const resolved = resolveComposedSchemaMember(item);
			return !resolved || schemaAllowsValue(resolved, value, seen, level + 1);
		})) {
			seen.delete(rawSchema);
			return false;
		}
	}
	seen.delete(rawSchema);
	return true;
};
var INVALID_DEFAULT = Symbol("INVALID_DEFAULT");
var normalizeSchemaDefault = (schema) => {
	const defaultValue = schema.default;
	if (schemaAllowsValue(schema, defaultValue)) return defaultValue;
	return INVALID_DEFAULT;
};
var getCompositionSelectionKey = (schemaPath, composition) => [...schemaPath, composition].join(".");
var getCompositionSelectionIndex = (schemaPath, composition, options, length) => {
	const rawIndex = options?.compositionSelection?.[getCompositionSelectionKey(schemaPath, composition)];
	if (typeof rawIndex !== "number" || Number.isNaN(rawIndex)) return;
	return Math.max(0, Math.min(rawIndex, length - 1));
};
/** A choice applies once at its path; a union inside the chosen branch makes its own choice. */
var consumeCompositionSelection = (options, schemaPath, composition) => {
	const key = getCompositionSelectionKey(schemaPath, composition);
	if (options?.compositionSelection?.[key] === void 0) return options;
	const { [key]: _selection, ...compositionSelection } = options.compositionSelection;
	return {
		...options,
		compositionSelection
	};
};
/** Select a composition branch once for both generated values and supplied example metadata. */
var selectExampleComposition = (schema, schemaPath, options, arrayItem = false, value) => {
	const keyword = schema.oneOf ? "oneOf" : schema.anyOf ? "anyOf" : void 0;
	const members = keyword ? schema[keyword] : void 0;
	if (!keyword || !members?.length) return;
	const index = getCompositionSelectionIndex(schemaPath, keyword, options, members.length) ?? getDiscriminatorSelectionIndex(schema, members, options, value);
	const isObject = "properties" in schema || "type" in schema && schema.type === "object";
	return index !== void 0 || isObject || arrayItem ? members[index ?? 0] : members.find((item) => {
		const resolved = resolve.schema(item);
		return resolved && (!("type" in resolved) || resolved.type !== "null");
	});
};
/**
* Use the discriminator as a generation hint. Only referenced variants have
* implicit names; inline titles are display labels, not discriminator mappings.
*/
var getDiscriminatorSelectionIndex = (schema, variants, options, value) => {
	const discriminator = schema.discriminator;
	if (discriminator?.defaultMapping === void 0) return;
	const property = "properties" in schema ? schema.properties?.[discriminator.propertyName] : void 0;
	const resolvedProperty = property ? resolve.schema(property) : void 0;
	const propertyName = options?.xml && resolvedProperty && "xml" in resolvedProperty ? resolvedProperty.xml?.name ?? discriminator.propertyName : discriminator.propertyName;
	const variableValue = resolvedProperty?.["x-variable"] ? options?.variables?.[resolvedProperty["x-variable"]] : void 0;
	const declaredValue = resolvedProperty ? getDeclaredValue(resolvedProperty) : void 0;
	const tag = value ? value[propertyName] : variableValue !== void 0 ? variableValue : declaredValue;
	const findReference = (reference) => variants.findIndex((variant) => "$ref" in variant && variant.$ref === reference);
	const findComponent = (name) => findReference(`#/components/schemas/${escapeJsonPointer$1(name)}`);
	const findTarget = (target) => {
		const componentIndex = findComponent(target);
		return componentIndex >= 0 ? componentIndex : findReference(target);
	};
	if (typeof tag === "string") {
		const explicit = discriminator.mapping && Object.hasOwn(discriminator.mapping, tag) ? discriminator.mapping[tag] : void 0;
		const mappedIndex = explicit === void 0 ? findComponent(tag) : findTarget(explicit);
		if (explicit !== void 0 || mappedIndex >= 0) return mappedIndex >= 0 ? mappedIndex : void 0;
	}
	const fallbackIndex = findTarget(discriminator.defaultMapping);
	return fallbackIndex >= 0 ? fallbackIndex : void 0;
};
/**
* Read the numeric `x-order` extension value from a raw property entry, if present.
* The entry may be a schema or a `$ref` object, so we check membership before reading.
*/
var getXOrder = (property) => {
	if (property && typeof property === "object" && "x-order" in property) {
		const order = Number(property["x-order"]);
		return Number.isNaN(order) ? void 0 : order;
	}
};
/**
* Sort property names by the `x-order` extension.
* Properties with `x-order` come first, ascending by value; the rest keep their
* original insertion order thanks to a stable sort.
*/
var sortPropertyNamesByXOrder = (properties) => Object.keys(properties).sort((a, b) => {
	const aOrder = getXOrder(properties[a]);
	const bOrder = getXOrder(properties[b]);
	if (aOrder !== void 0 && bOrder !== void 0) return aOrder - bOrder;
	if (aOrder !== void 0) return -1;
	if (bOrder !== void 0) return 1;
	return 0;
});
/**
* Build an example for an object schema, including properties, patternProperties,
* additionalProperties, and composition (allOf/oneOf/anyOf) merging.
*/
var handleObjectSchema = (schema, options, level, seen, cacheKey, schemaPath, dynamicScope) => {
	const response = {};
	const childScope = pushDynamicScope(dynamicScope, schema);
	const skipCache = dynamicScope.length > 0 || !!options?.[EXAMPLE_EVALUATION];
	if ("properties" in schema && schema.properties) {
		const properties = schema.properties;
		const propertyNames = sortPropertyNamesByXOrder(properties);
		const limit = propertyNames.length;
		for (let i = 0; i < limit; i++) {
			const propertyName = propertyNames[i];
			const propertySchema = resolve.schema(properties[propertyName]);
			if (!propertySchema) continue;
			const propertyXmlName = options?.xml && "xml" in propertySchema ? propertySchema.xml?.name : void 0;
			const value = getExampleFromSchema(propertySchema, options, {
				level: level + 1,
				parentSchema: schema,
				name: propertyName,
				schemaPath: [...schemaPath, propertyName],
				seen,
				dynamicScope: childScope
			});
			if (typeof value !== "undefined") response[propertyXmlName ?? propertyName] = value;
		}
	}
	if ("patternProperties" in schema && schema.patternProperties) for (const pattern of Object.keys(schema.patternProperties)) {
		const propertySchema = resolve.schema(schema.patternProperties[pattern]);
		if (!propertySchema) continue;
		response[pattern] = getExampleFromSchema(propertySchema, options, {
			level: level + 1,
			parentSchema: schema,
			name: pattern,
			schemaPath: [...schemaPath, pattern],
			seen,
			dynamicScope: childScope
		});
	}
	if ("additionalProperties" in schema && schema.additionalProperties) {
		const additional = typeof schema.additionalProperties === "boolean" ? schema.additionalProperties : resolve.schema(schema.additionalProperties);
		const isAnyType = schema.additionalProperties === true || typeof schema.additionalProperties === "object" && Object.keys(schema.additionalProperties).length === 0;
		const customName = typeof additional === "object" && "x-additionalPropertiesName" in additional ? additional["x-additionalPropertiesName"] : void 0;
		const hasCustomName = typeof customName === "string" && customName.trim().length > 0;
		const propertyNamesEnum = hasCustomName ? void 0 : getPropertyNamesEnumValues(schema);
		const additionalName = hasCustomName ? customName.trim() : DEFAULT_ADDITIONAL_PROPERTIES_NAME;
		const additionalValue = isAnyType ? "anything" : typeof additional === "object" ? getExampleFromSchema(additional, options, {
			level: level + 1,
			schemaPath: [...schemaPath, additionalName],
			seen,
			dynamicScope: childScope
		}) : "anything";
		if (propertyNamesEnum && propertyNamesEnum.length > 0) response[String(propertyNamesEnum[0])] = additionalValue;
		else response[additionalName] = additionalValue;
	}
	const compositionKeyword = schema.oneOf ? "oneOf" : schema.anyOf ? "anyOf" : void 0;
	const oneOfAnyOf = compositionKeyword ? schema[compositionKeyword] : void 0;
	if (compositionKeyword && oneOfAnyOf?.length) {
		const chosen = selectExampleComposition(schema, schemaPath, options, false, response);
		if (chosen) Object.assign(response, getExampleFromSchema(chosen, consumeCompositionSelection(options, schemaPath, compositionKeyword), {
			level: level + 1,
			schemaPath,
			seen,
			dynamicScope: childScope
		}));
	} else if (Array.isArray(schema.allOf) && schema.allOf.length > 0) {
		let merged = response;
		let choiceIndex = 0;
		for (const item of schema.allOf) {
			const resolvedItem = resolve.schema(item);
			const memberSchemaPath = !!resolvedItem && (Array.isArray(resolvedItem.oneOf) || Array.isArray(resolvedItem.anyOf)) ? [...schemaPath, String(choiceIndex++)] : schemaPath;
			const ex = getExampleFromSchema(resolvedItem, options, {
				level: level + 1,
				parentSchema: schema,
				seen,
				dynamicScope: childScope,
				schemaPath: memberSchemaPath
			});
			merged = mergeExamples(merged, ex);
		}
		if (merged && typeof merged === "object") Object.assign(response, merged);
	}
	if (options?.xml && "xml" in schema && schema.xml?.name && level === 0) {
		const wrapped = {};
		wrapped[schema.xml.name] = response;
		return cache(schema, wrapped, cacheKey, skipCache);
	}
	return cache(schema, response, cacheKey, skipCache);
};
/** Build an example for an array schema, including items, allOf, oneOf/anyOf, and XML wrapping */
var handleArraySchema = (schema, options, level, seen, cacheKey, schemaPath, dynamicScope) => {
	const childScope = pushDynamicScope(dynamicScope, schema);
	const skipCache = dynamicScope.length > 0 || !!options?.[EXAMPLE_EVALUATION];
	if ("prefixItems" in schema && Array.isArray(schema.prefixItems)) return cache(schema, schema.prefixItems.map((item, index) => getExampleFromSchema(item, options, {
		level: level + 1,
		schemaPath: [
			...schemaPath,
			"prefixItems",
			String(index)
		],
		seen,
		dynamicScope: childScope
	})), cacheKey, skipCache);
	let items = "items" in schema ? resolve.schema(schema.items) : void 0;
	let itemsSeen = seen;
	if (items && isDynamicRef(items)) {
		const resolvedDynamic = resolveDynamicRef(items.$dynamicRef, childScope);
		if (resolvedDynamic) {
			items = resolvedDynamic;
			itemsSeen = /* @__PURE__ */ new WeakSet();
		}
	}
	const itemsSchemaPath = [...schemaPath, "items"];
	const itemsXmlTagName = items && typeof items === "object" && "xml" in items ? items.xml?.name : void 0;
	const wrapItems = !!(options?.xml && "xml" in schema && schema.xml?.wrapped && itemsXmlTagName);
	if (schema.example !== void 0) return cache(schema, wrapItems ? { [itemsXmlTagName]: schema.example } : schema.example, cacheKey, skipCache);
	if (items && typeof items === "object") {
		if (Array.isArray(items.allOf) && items.allOf.length > 0) {
			const allOf = items.allOf.filter(isDefined);
			const first = resolve.schema(allOf[0]);
			if (first && typeof first === "object" && "type" in first && first.type === "object") {
				const merged = getExampleFromSchema({
					type: "object",
					allOf
				}, options, {
					level: level + 1,
					parentSchema: schema,
					schemaPath: itemsSchemaPath,
					seen: itemsSeen,
					dynamicScope: childScope
				});
				return cache(schema, wrapItems ? [{ [itemsXmlTagName]: merged }] : [merged], cacheKey, skipCache);
			}
			const examples = allOf.map((s) => getExampleFromSchema(resolve.schema(s), options, {
				level: level + 1,
				parentSchema: schema,
				schemaPath: itemsSchemaPath,
				seen: itemsSeen,
				dynamicScope: childScope
			})).filter(isDefined);
			return cache(schema, wrapItems ? examples.map((e) => ({ [itemsXmlTagName]: e })) : examples, cacheKey, skipCache);
		}
		const compositionKeyword = items.oneOf ? "oneOf" : items.anyOf ? "anyOf" : void 0;
		const union = compositionKeyword ? items[compositionKeyword] : void 0;
		if (compositionKeyword && union && union.length > 0) {
			const selected = union[getCompositionSelectionIndex(itemsSchemaPath, compositionKeyword, options, union.length) ?? getDiscriminatorSelectionIndex(items, union, options) ?? 0];
			const ex = getExampleFromSchema(resolve.schema(selected), consumeCompositionSelection(options, itemsSchemaPath, compositionKeyword), {
				level: level + 1,
				parentSchema: schema,
				schemaPath: itemsSchemaPath,
				seen: itemsSeen,
				dynamicScope: childScope
			});
			return cache(schema, wrapItems ? [{ [itemsXmlTagName]: ex }] : [ex], cacheKey, skipCache);
		}
	}
	const isObject = items && typeof items === "object" && ("type" in items && items.type === "object" || "properties" in items);
	const isArray = items && typeof items === "object" && ("type" in items && items.type === "array" || "items" in items);
	if (items && typeof items === "object" && ("type" in items && items.type || isObject || isArray)) {
		const ex = getExampleFromSchema(items, options, {
			level: level + 1,
			schemaPath: itemsSchemaPath,
			seen: itemsSeen,
			dynamicScope: childScope
		});
		return cache(schema, wrapItems ? [{ [itemsXmlTagName]: ex }] : [ex], cacheKey, skipCache);
	}
	return cache(schema, [], cacheKey, skipCache);
};
/** Return primitive example value for single-type schemas, or undefined if not primitive */
var getPrimitiveValue = (schema, makeUpRandomData, emptyString) => {
	if ("type" in schema && schema.type && !Array.isArray(schema.type)) switch (schema.type) {
		case "string": return guessFromFormat(schema, makeUpRandomData, emptyString ?? "");
		case "boolean": return true;
		case "integer": return "minimum" in schema && typeof schema.minimum === "number" ? schema.minimum : 1;
		case "number": return "minimum" in schema && typeof schema.minimum === "number" ? schema.minimum : 1;
		case "array": return [];
		default: return;
	}
};
/** Return primitive example value for union-type schemas (type: string[]) */
var getUnionPrimitiveValue = (schema, makeUpRandomData, emptyString) => {
	if ("type" in schema && Array.isArray(schema.type)) {
		if (schema.type.includes("null")) return null;
		const first = schema.type[0];
		if (first) switch (first) {
			case "string": return guessFromFormat(schema, makeUpRandomData, emptyString ?? "");
			case "boolean": return true;
			case "integer": return "minimum" in schema && typeof schema.minimum === "number" ? schema.minimum : 1;
			case "number": return "minimum" in schema && typeof schema.minimum === "number" ? schema.minimum : 1;
			case "null": return null;
			default: return;
		}
	}
};
/** Create stable cache key from the options object */
var createOptionsCacheKey = (options) => JSON.stringify({
	emptyString: options?.emptyString,
	xml: options?.xml,
	mode: options?.mode,
	variables: options?.variables,
	omitEmptyAndOptionalProperties: options?.omitEmptyAndOptionalProperties,
	includeDeprecated: options?.includeDeprecated,
	compositionSelection: options?.compositionSelection ? Object.entries(options.compositionSelection).sort(([a], [b]) => a.localeCompare(b)) : void 0
});
/** The options object `lastOptionsKey` was built from. */
var lastOptions = Symbol("NO_OPTIONS");
var lastOptionsKey = "";
/**
* The options half of the result-cache key, built once per top-level call instead of once per node.
*
* `createOptionsCacheKey` serializes the whole options object, and every schema the walk enters needs
* the same string. The walk is synchronous and passes the same `options` object down, so rebuilding at
* level 0, or whenever the identity changes, is enough: a caller that mutates its options object in
* place still gets a fresh key on its next top-level call, exactly as before.
*/
var getOptionsCacheKey = (options, level) => {
	if (level === 0 || options !== lastOptions) {
		lastOptionsKey = createOptionsCacheKey(options);
		lastOptions = options;
	}
	return lastOptionsKey;
};
/** Stand-in for a truncated schema whose shape cannot be read off the document. */
var MAX_DEPTH_EXCEEDED = "[Max Depth Exceeded]";
/** How long a chain of composition wrappers may be unwrapped before the stack becomes the concern. */
var MAX_COMPOSITION_DEPTH = 50;
/** Read a schema's declared types as a list, so `type: 'object'` and `type: ['object']` behave alike. */
var getDeclaredTypes = (schema) => {
	if (!("type" in schema) || !schema.type) return [];
	return Array.isArray(schema.type) ? schema.type : [schema.type];
};
/** Return the empty container a schema declares, or `undefined` when it declares neither. */
var getEmptyContainer = (schema) => {
	const types = getDeclaredTypes(schema);
	if ("properties" in schema || types.includes("object")) return {};
	if ("items" in schema || types.includes("array")) return [];
};
/** Pick the `oneOf`/`anyOf` variant the walk itself would have rendered, honoring an explicit selection. */
var getSelectedVariant = (schema, options, schemaPath) => {
	const compositionKeyword = schema.oneOf ? "oneOf" : schema.anyOf ? "anyOf" : void 0;
	const variants = compositionKeyword ? schema[compositionKeyword] : void 0;
	if (!compositionKeyword || !Array.isArray(variants) || variants.length === 0) return;
	const index = getCompositionSelectionIndex(schemaPath, compositionKeyword, options, variants.length) ?? getDiscriminatorSelectionIndex(schema, variants, options);
	const candidate = index !== void 0 ? variants[index] : variants.find((variant) => {
		const resolved = resolve.schema(variant);
		return resolved && (!("type" in resolved) || resolved.type !== "null");
	});
	return candidate ? resolve.schema(candidate) : void 0;
};
/**
* Return the value a schema states outright, in the order the walk prefers them.
*
* The walk applies this before the cap, so a truncated schema has already had its turn — but a
* composition member reached from below the cap has not, and answering an `allOf`-wrapped enum with an
* empty string hands back a value that very schema forbids.
*/
var getDeclaredValue = (schema) => {
	if (Array.isArray(schema.examples) && schema.examples.length > 0) return schema.examples[0];
	if (schema.example !== void 0) return schema.example;
	if (schema.default !== void 0) {
		const normalizedDefault = normalizeSchemaDefault(schema);
		if (normalizedDefault !== INVALID_DEFAULT) return normalizedDefault;
	}
	if (schema.const !== void 0) return schema.const;
	if (Array.isArray(schema.enum) && schema.enum.length > 0) return schema.enum[0];
};
/**
* Describe a composed schema by the member the walk itself would have rendered.
* Returns `undefined` when no member describes a shape.
*/
var describeComposition = (schema, options, schemaPath, seen) => {
	const variant = getSelectedVariant(schema, options, schemaPath);
	if (variant) return getMaxDepthValue(variant, options, schemaPath, seen);
	if (!Array.isArray(schema.allOf) || schema.allOf.length === 0) return;
	let merged = void 0;
	let choiceIndex = 0;
	for (const member of schema.allOf) {
		const resolved = resolve.schema(member);
		const memberSchemaPath = !!resolved && (Array.isArray(resolved.oneOf) || Array.isArray(resolved.anyOf)) ? [...schemaPath, String(choiceIndex++)] : schemaPath;
		const value = resolved ? getMaxDepthValue(resolved, options, memberSchemaPath, seen) : void 0;
		if (value !== void 0 && value !== MAX_DEPTH_EXCEEDED) merged = mergeExamples(merged, value);
	}
	return merged;
};
/**
* Build the value that stands in for a schema the recursion depth cap cut off.
*
* The stand-in is still read as an example of the schema it replaced, so a plain string makes the
* example contradict its own type: a mock server answering a `type: object` field with
* `[Max Depth Exceeded]` hands a strict SDK decoder a body it cannot parse. Describe the declared
* type instead, dispatching in the order the walk does, so a truncated value differs from a full render
* in having no children. A schema that describes no shape at all keeps the sentinel, which is then the
* only signal that truncation happened.
*
* Two deliberate departures from the walk, both answering with the declared container where the walk
* answers `null`: a container spelled as a list (`type: ['object']`, or `['object', 'null']`) is read
* here as the container it names, where the walk's strict comparison misses it.
*
* The value is empty rather than complete: satisfying `required` or `minItems` means descending
* again, which is exactly what the cap exists to prevent.
*/
var getMaxDepthValue = (schema, options, schemaPath, seen = /* @__PURE__ */ new Set()) => {
	const declared = getDeclaredValue(schema);
	if (declared !== void 0) return declared;
	const container = getEmptyContainer(schema);
	if (container !== void 0) {
		truncated = true;
		return container;
	}
	const makeUpRandomData = !!options?.emptyString;
	const primitive = getPrimitiveValue(schema, makeUpRandomData, options?.emptyString);
	if (primitive !== void 0) return primitive;
	const target = getSchemaCacheTarget(schema);
	if (!seen.has(target) && seen.size < MAX_COMPOSITION_DEPTH) {
		seen.add(target);
		const composed = describeComposition(schema, options, schemaPath, seen);
		seen.delete(target);
		if (composed !== void 0) return composed;
	} else truncated = true;
	const unionPrimitive = getUnionPrimitiveValue(schema, makeUpRandomData, options?.emptyString);
	if (unionPrimitive !== void 0) return unionPrimitive;
	if (getDeclaredTypes(schema).includes("null")) return null;
	if (isComposed(schema) || "not" in schema) return null;
	truncated = true;
	return MAX_DEPTH_EXCEEDED;
};
/**
* Generate an example value from a given OpenAPI SchemaObject.
*
* This function recursively processes OpenAPI schemas to create realistic example data.
* It handles all OpenAPI schema types including primitives, objects, arrays, and
* composition schemas (allOf, oneOf, anyOf).
* Uses a tonne of caching for maximum performance.
*
* @param schema - The OpenAPI SchemaObject to generate an example from.
* @param options - Options to customize example generation.
* @param level - The current recursion depth.
* @param parentSchema - The parent schema, if any.
* @param name - The name of the property being processed.
* @returns An example value for the given schema.
*/
var generateExampleFromSchema = (schema, options, { level = 0, parentSchema, name, seen = /* @__PURE__ */ new WeakSet(), schemaPath = [], dynamicScope = [] } = {}) => {
	if (level === 0) truncated = false;
	const _schema = resolve.schema(schema);
	if (!isDefined(_schema)) return;
	if (isDynamicRef(_schema)) {
		const resolvedDynamic = resolveDynamicRef(_schema.$dynamicRef, dynamicScope);
		if (resolvedDynamic) return getExampleFromSchema(resolvedDynamic, options, {
			level: level + 1,
			parentSchema,
			name,
			seen: /* @__PURE__ */ new WeakSet(),
			schemaPath,
			dynamicScope
		});
	}
	const childScope = pushDynamicScope(dynamicScope, _schema);
	const skipCache = dynamicScope.length > 0 || !!options?.[EXAMPLE_EVALUATION];
	const targetValue = getSchemaCacheTarget(_schema);
	if (seen.has(targetValue)) return;
	seen.add(targetValue);
	/** Make the cache key unique per options and schema path */
	const cacheKey = getOptionsCacheKey(options, level) + (schemaPath.length > 0 ? `:path:${schemaPath.join(".")}` : "");
	if (!skipCache) {
		const cached = resultCache.get(targetValue)?.get(cacheKey);
		if (typeof cached !== "undefined") {
			seen.delete(targetValue);
			return cached;
		}
	}
	const makeUpRandomData = !!options?.emptyString;
	if (shouldOmitProperty(_schema, parentSchema, name, options)) {
		seen.delete(targetValue);
		return;
	}
	if ("x-variable" in _schema && _schema["x-variable"]) {
		const value = options?.variables?.[_schema["x-variable"]];
		if (value !== void 0) {
			if ("type" in _schema && (_schema.type === "number" || _schema.type === "integer")) {
				seen.delete(targetValue);
				return cache(_schema, Number(value), cacheKey, skipCache);
			}
			seen.delete(targetValue);
			return cache(_schema, value, cacheKey, skipCache);
		}
	}
	if (Array.isArray(_schema.examples) && _schema.examples.length > 0) {
		seen.delete(targetValue);
		return cache(_schema, _schema.examples[0], cacheKey, skipCache);
	}
	if (_schema.example !== void 0) {
		seen.delete(targetValue);
		return cache(_schema, _schema.example, cacheKey, skipCache);
	}
	if (_schema.default !== void 0) {
		const normalizedDefault = normalizeSchemaDefault(_schema);
		if (normalizedDefault !== INVALID_DEFAULT) {
			seen.delete(targetValue);
			return cache(_schema, normalizedDefault, cacheKey, skipCache);
		}
	}
	if (_schema.const !== void 0) {
		seen.delete(targetValue);
		return cache(_schema, _schema.const, cacheKey, skipCache);
	}
	if (Array.isArray(_schema.enum) && _schema.enum.length > 0) {
		seen.delete(targetValue);
		return cache(_schema, _schema.enum[0], cacheKey, skipCache);
	}
	if (level > MAX_LEVELS_DEEP) {
		seen.delete(targetValue);
		return getMaxDepthValue(_schema, options, schemaPath);
	}
	const selectedComposition = _schema.oneOf ? "oneOf" : _schema.anyOf ? "anyOf" : void 0;
	const selectedVariant = getSelectedVariant(_schema, options, schemaPath);
	if (selectedComposition && selectedVariant) {
		const rootType = "type" in _schema ? _schema.type : void 0;
		const selectedType = ("type" in selectedVariant ? selectedVariant.type : void 0) ?? rootType ?? ("items" in _schema && !("properties" in _schema) ? "array" : void 0);
		if (selectedType !== void 0 && selectedType !== "object") {
			const { oneOf: _oneOf, anyOf: _anyOf, ...base } = _schema;
			const selectedSchema = {
				...base,
				...selectedVariant
			};
			if ("properties" in selectedSchema) delete selectedSchema.properties;
			if (selectedType !== "array" && "items" in selectedSchema) delete selectedSchema.items;
			const result = getExampleFromSchema(selectedSchema, consumeCompositionSelection(options, schemaPath, selectedComposition), {
				level: level + 1,
				parentSchema,
				name,
				schemaPath,
				seen,
				dynamicScope: childScope
			});
			seen.delete(targetValue);
			return cache(_schema, result, cacheKey, skipCache);
		}
	}
	if ("properties" in _schema || "type" in _schema && _schema.type === "object") {
		const result = handleObjectSchema(_schema, options, level, seen, cacheKey, schemaPath, dynamicScope);
		seen.delete(targetValue);
		return result;
	}
	if ("type" in _schema && _schema.type === "array" || "items" in _schema || "prefixItems" in _schema) {
		const result = handleArraySchema(_schema, options, level, seen, cacheKey, schemaPath, dynamicScope);
		seen.delete(targetValue);
		return result;
	}
	const primitive = getPrimitiveValue(_schema, makeUpRandomData, options?.emptyString);
	if (primitive !== void 0) {
		seen.delete(targetValue);
		return cache(_schema, primitive, cacheKey, skipCache);
	}
	const compositionKeyword = _schema.oneOf ? "oneOf" : _schema.anyOf ? "anyOf" : void 0;
	const discriminate = compositionKeyword ? _schema[compositionKeyword] : void 0;
	if (compositionKeyword && Array.isArray(discriminate) && discriminate.length > 0) {
		const candidate = selectExampleComposition(_schema, schemaPath, options);
		if (candidate) {
			const resolved = resolve.schema(candidate);
			if (resolved) {
				seen.delete(targetValue);
				return cache(_schema, getExampleFromSchema(resolved, consumeCompositionSelection(options, schemaPath, compositionKeyword), {
					level: level + 1,
					schemaPath,
					seen,
					dynamicScope: childScope
				}), cacheKey, skipCache);
			}
		}
		seen.delete(targetValue);
		return cache(_schema, null, cacheKey, skipCache);
	}
	if (Array.isArray(_schema.allOf) && _schema.allOf.length > 0) {
		let merged = void 0;
		const items = _schema.allOf;
		let choiceIndex = 0;
		for (const item of items) {
			const resolvedItem = resolve.schema(item);
			const memberSchemaPath = !!resolvedItem && (Array.isArray(resolvedItem.oneOf) || Array.isArray(resolvedItem.anyOf)) ? [...schemaPath, String(choiceIndex++)] : schemaPath;
			const ex = getExampleFromSchema(item, options, {
				level: level + 1,
				parentSchema: _schema,
				schemaPath: memberSchemaPath,
				seen,
				dynamicScope: childScope
			});
			if (merged === void 0) merged = ex;
			else if (merged && typeof merged === "object" && ex && typeof ex === "object") merged = mergeExamples(merged, ex);
			else if (ex !== void 0 && ex !== null) merged = ex;
		}
		seen.delete(targetValue);
		return cache(_schema, merged ?? null, cacheKey, skipCache);
	}
	const unionPrimitive = getUnionPrimitiveValue(_schema, makeUpRandomData, options?.emptyString);
	if (unionPrimitive !== void 0) {
		seen.delete(targetValue);
		return cache(_schema, unionPrimitive, cacheKey, skipCache);
	}
	seen.delete(targetValue);
	return cache(_schema, null, cacheKey, skipCache);
};
/** Generate data, optionally retaining the exact schema decisions for another output format. */
var getExampleFromSchema = (schema, options, context = {}) => {
	const capture = options?.[EXAMPLE_EVALUATION];
	if (!capture) return generateExampleFromSchema(schema, options, context);
	const node = {
		schema,
		value: void 0,
		path: context.schemaPath ?? [],
		name: context.name,
		dynamicScope: context.dynamicScope ?? [],
		children: []
	};
	const parent = capture.stack.at(-1);
	if (parent) parent.children.push(node);
	else capture.root = node;
	capture.stack.push(node);
	try {
		node.value = generateExampleFromSchema(schema, options, context);
		return node.value;
	} finally {
		capture.stack.pop();
	}
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/xml/match-xml-property-pattern.js
/**
* Match the bounded, non-branching subset needed by common property prefixes and character classes.
* JavaScript regexes cannot be interrupted, so arbitrary schema expressions must not run on the UI
* thread or mock-server event loop. Unsupported expressions are reported rather than guessed.
* With groups, alternation, backreferences, and multiple quantifiers excluded, repetitions
* cannot interact to create exponential backtracking. The single quantified atom may
* still backtrack or restart matching, so both pattern and input lengths are bounded.
*/
var matchXmlPropertyPattern = (pattern, name) => {
	if (pattern.length > 256 || name.length > 256) return;
	let inClass = false;
	let repetitions = 0;
	for (let index = 0; index < pattern.length; index++) {
		const character = pattern[index];
		if (character === "\\") {
			const escaped = pattern[++index];
			if (!escaped || !inClass && /[1-9k]/.test(escaped)) return;
			continue;
		}
		if (character === "[" && !inClass) {
			inClass = true;
			continue;
		}
		if (character === "]" && inClass) {
			inClass = false;
			continue;
		}
		if (inClass) continue;
		if ("(){}|".includes(character ?? "")) return;
		if ("*+?".includes(character ?? "") && ++repetitions > 1) return;
	}
	try {
		return new RegExp(pattern).test(name);
	} catch {
		return;
	}
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/xml/write-xml.js
var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
var NAME_START = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\u{10000}-\\u{EFFFF}";
var namePattern = new RegExp(`^[${NAME_START}][${NAME_START}\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`, "u");
var invalidCharacter = /[^\u0009\u000A\u000D\u0020-\uD7FF\uE000-\uFFFD\u{10000}-\u{10FFFF}]/u;
/** Serialize an XML document, validating names, characters, and namespace bindings. */
var writeXml = (nodes, options = {}) => {
	const diagnostics = [];
	const fail = (code, message, path) => {
		diagnostics.push({
			severity: "error",
			code,
			message,
			path
		});
	};
	const escape = (value, attribute, path) => {
		if (invalidCharacter.test(value)) fail("invalid-character", "The value contains a character XML 1.0 cannot represent.", path);
		const escaped = value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#13;");
		return attribute ? escaped.replace(/"/g, "&quot;").replace(/\n/g, "&#10;").replace(/\t/g, "&#9;") : escaped;
	};
	let generatedPrefix = 0;
	let count = 0;
	const render = (node, inherited, depth, path, pretty) => {
		if (++count > 1e4 || depth > 100) {
			fail("limit-exceeded", "The XML example exceeds the node or depth limit.", path);
			return "";
		}
		if (node.type !== "element") {
			if (node.type === "text") return escape(node.value, false, path);
			if (invalidCharacter.test(node.value)) fail("invalid-character", "The CDATA contains a character XML 1.0 cannot represent.", path);
			return `<![CDATA[${node.value.replace(/]]>/g, "]]]]><![CDATA[>").replace(/\r/g, "]]>&#13;<![CDATA[")}]]>`;
		}
		const bindings = new Map(inherited);
		const declarations = /* @__PURE__ */ new Map();
		const usedPrefixes = /* @__PURE__ */ new Map();
		const explicitPrefixes = /* @__PURE__ */ new Set([node.prefix, ...node.attributes.map((attribute) => attribute.prefix)]);
		const qualify = (input, attribute) => {
			if (!namePattern.test(input.name) || input.prefix !== void 0 && !namePattern.test(input.prefix)) fail("invalid-name", `Invalid XML name: ${input.prefix ? `${input.prefix}:` : ""}${input.name}`, path);
			let prefix = input.prefix ?? "";
			const namespace = input.namespace ?? (prefix ? bindings.get(prefix) : attribute ? "" : bindings.get("")) ?? "";
			if (prefix === "xmlns" || namespace === XMLNS_NAMESPACE || attribute && !prefix && input.name === "xmlns") fail("reserved-namespace", "Namespace declarations must be expressed through XML namespace metadata.", path);
			if (namespace === XML_NAMESPACE && !prefix) prefix = "xml";
			if (prefix === "xml" !== (namespace === XML_NAMESPACE)) fail("reserved-namespace", "The xml prefix is reserved for the XML namespace.", path);
			if (prefix && !namespace) fail("unbound-prefix", `The prefix ${prefix} has no namespace binding.`, path);
			if (attribute && namespace && !prefix) {
				prefix = [...bindings].find(([candidate, uri]) => candidate !== "" && uri === namespace)?.[0] ?? "";
				if (!prefix) do
					prefix = `ns${++generatedPrefix}`;
				while (bindings.has(prefix) || explicitPrefixes.has(prefix));
			}
			if (!attribute || prefix) {
				if (usedPrefixes.has(prefix) && usedPrefixes.get(prefix) !== namespace) fail("namespace-conflict", `The prefix ${prefix || "(default)"} is assigned incompatible namespaces on one element.`, path);
				usedPrefixes.set(prefix, namespace);
				if ((bindings.get(prefix) ?? "") !== namespace) {
					declarations.set(prefix, namespace);
					bindings.set(prefix, namespace);
				}
			}
			return {
				name: prefix ? `${prefix}:${input.name}` : input.name,
				namespace
			};
		};
		const element = qualify(node, false);
		const attributeNames = /* @__PURE__ */ new Set();
		const attributes = node.attributes.map((attribute) => {
			const qualified = qualify(attribute, true);
			const key = `${qualified.namespace}\0${attribute.name}`;
			if (attributeNames.has(key)) fail("duplicate-attribute", `Duplicate XML attribute: ${qualified.name}`, path);
			attributeNames.add(key);
			return ` ${qualified.name}="${escape(attribute.value, true, path)}"`;
		}).join("");
		const namespaces = [...declarations].map(([prefix, uri]) => ` xmlns${prefix ? `:${prefix}` : ""}="${escape(uri, true, path)}"`).join("");
		const opening = `<${element.name}${namespaces}${attributes}`;
		if (node.children.length === 0) return `${opening}/>`;
		const indentChildren = pretty && node.children.every((child) => child.type === "element");
		const children = node.children.map((child, index) => render(child, bindings, depth + 1, [...path, String(index)], pretty));
		if (indentChildren) return `${opening}>\n${children.map((child) => `${"  ".repeat(depth + 1)}${child}`).join("\n")}\n${"  ".repeat(depth)}</${element.name}>`;
		return `${opening}>${children.join("")}</${element.name}>`;
	};
	if (nodes.length !== 1 || nodes[0]?.type !== "element") {
		fail("invalid-root", "An XML document must contain exactly one root element.", []);
		return {
			xml: void 0,
			diagnostics
		};
	}
	const body = render(nodes[0], /* @__PURE__ */ new Map([["xml", XML_NAMESPACE]]), 0, [], options.format !== false);
	const declaration = options.xmlDeclaration === false ? "" : `<?xml version="1.0" encoding="UTF-8"?>${options.format === false ? "" : "\n"}`;
	return {
		xml: diagnostics.some((diagnostic) => diagnostic.severity === "error") ? void 0 : declaration + body,
		diagnostics
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/xml/get-xml-example.js
var xsi = "http://www.w3.org/2001/XMLSchema-instance";
/** Keep failures visible even when a consumer only reads the XML string. */
var reportXmlResult = (result, options) => {
	for (const diagnostic of result.diagnostics) if (options.onDiagnostic) options.onDiagnostic(diagnostic);
	else if (diagnostic.severity === "error") console.warn("Unable to generate an XML example:", diagnostic);
	return result;
};
/** Generate XML using the same value evaluator and selected branches as JSON examples. */
var getXmlExampleFromSchema = (schema, options = {}) => {
	const capture = { stack: [] };
	return reportXmlResult(buildXmlExample(getExampleFromSchema(schema, {
		...options,
		[EXAMPLE_EVALUATION]: capture
	}, { schemaPath: options.schemaPath }), schema, options, capture.root), options);
};
/** Serialize schema-ready example data. Serialized XML strings bypass this function at the media boundary. */
var serializeXmlExample = (value, schema, options = {}) => reportXmlResult(buildXmlExample(value, schema, options), options);
var buildXmlExample = (value, input, options, evaluation) => {
	const diagnostics = [];
	const report = (severity, code, message, path) => {
		diagnostics.push({
			severity,
			code,
			message,
			path
		});
	};
	const componentNameFromRef = (reference, path) => {
		const name = reference?.match(/\/schemas\/([^/]+)$/)?.[1];
		if (name === void 0) return;
		try {
			return unescapeJsonPointer(name);
		} catch {
			report("error", "invalid-reference", "The component reference contains invalid URI escaping.", path);
			return;
		}
	};
	const mergeXml = (base, next, path) => {
		if (!base) return next;
		if (!next) return base;
		for (const key of [
			"name",
			"namespace",
			"prefix",
			"nodeType",
			"attribute",
			"wrapped"
		]) if (base[key] !== void 0 && next[key] !== void 0 && base[key] !== next[key]) report("error", "composition-xml-conflict", `Composition members disagree on xml.${key}.`, path);
		return {
			...base,
			...next
		};
	};
	const version32 = options.openapiVersion !== void 0 && /^3\.[2-9](?:\.|$)/.test(options.openapiVersion);
	const validateXmlMetadata = (xml, path) => {
		if (xml.namespace !== void 0 && !/^[A-Za-z][A-Za-z0-9+.-]*:/.test(xml.namespace)) report("error", "relative-namespace", "XML namespaces must be non-relative IRIs.", path);
		if (xml.nodeType !== void 0 && (xml.attribute !== void 0 || xml.wrapped !== void 0)) report("error", "conflicting-node-type", "xml.nodeType cannot be combined with xml.attribute or xml.wrapped.", path);
		if (xml.nodeType && options.openapiVersion && !/^3\.[2-9](?:\.|$)/.test(options.openapiVersion)) report("warning", "xml-version", "xml.nodeType requires OpenAPI 3.2.", path);
	};
	const shape = (source, context, seen = /* @__PURE__ */ new Set()) => {
		if (!source || typeof source !== "object" || seen.has(source) || seen.size > 50) return {
			schema: {},
			scope: context.scope,
			evaluations: []
		};
		seen.add(source);
		if (!context.evaluation && "$ref" in source && !("$ref-value" in source && source["$ref-value"] !== void 0)) report("error", "unresolved-reference", "Resolve schema references before generating XML.", context.path);
		if (version32 && "$ref-value" in source && source["$ref-value"]) return {
			schema: source,
			scope: context.scope,
			evaluations: context.evaluation?.children ?? []
		};
		let schema = getResolvedRef(source, mergeSiblingReferences);
		if (isDynamicRef(schema)) {
			const bound = resolveDynamicRef(schema.$dynamicRef, context.scope);
			if (bound) return shape(bound, context, seen);
		}
		const scope = pushDynamicScope(context.scope, schema);
		const evaluations = [...context.evaluation?.children ?? []];
		const contributions = context.evaluation?.children.filter((child) => child.path.length === context.path.length || child.name === void 0 && child.path.length === context.path.length + 1 && /^\d+$/.test(child.path.at(-1) ?? "")) ?? [];
		const members = [];
		const selectedSource = selectExampleComposition(schema, context.path, options, context.path.at(-1) === "items");
		for (const member of selectedSource ? [selectedSource] : schema.allOf ?? []) if (member && "$ref" in member && !("$ref-value" in member && member["$ref-value"] !== void 0)) {
			report("error", "unresolved-reference", "Resolve schema references before generating XML.", context.path);
			return {
				schema,
				scope,
				evaluations
			};
		}
		if (version32 && selectedSource) members.push({
			schema: selectedSource,
			path: context.path,
			evaluation: contributions[0]
		});
		else if (contributions.length && !(version32 && schema.allOf)) members.push(...contributions.map((child) => ({
			schema: child.schema,
			path: child.path,
			evaluation: child
		})));
		else {
			const selected = selectExampleComposition(schema, context.path, options, context.path.at(-1) === "items");
			if (selected) members.push({
				schema: selected,
				path: context.path
			});
			else if (schema.allOf) {
				let choice = 0;
				for (const member of schema.allOf) {
					const resolved = getResolvedRef(member, mergeSiblingReferences);
					const isChoice = resolved && (resolved.oneOf || resolved.anyOf);
					members.push({
						schema: member,
						path: isChoice ? [...context.path, String(choice++)] : context.path
					});
				}
			}
		}
		for (const member of members) {
			const contribution = shape(member.schema, {
				...context,
				scope,
				path: member.path,
				evaluation: member.evaluation
			}, new Set(seen));
			const properties = "properties" in schema ? schema.properties : void 0;
			const extra = "properties" in contribution.schema ? contribution.schema.properties : void 0;
			const xml = mergeXml(schema.xml, contribution.schema.xml, context.path);
			const combinedProperties = {
				...properties,
				...extra
			};
			for (const key of Object.keys(properties ?? {})) if (properties?.[key] && extra?.[key]) combinedProperties[key] = { allOf: [properties[key], extra[key]] };
			schema = {
				...schema,
				...contribution.schema,
				...properties || extra ? { properties: combinedProperties } : {},
				xml
			};
			evaluations.push(...contribution.evaluations);
		}
		return {
			schema,
			scope,
			evaluations
		};
	};
	const active = /* @__PURE__ */ new Set();
	let count = 0;
	const map = (data, source, inheritedName, context, parentAttributes) => {
		if (source && "$ref" in source && !("$ref-value" in source && source["$ref-value"] !== void 0)) {
			report("error", "unresolved-reference", "Resolve schema references before generating XML.", context.path);
			return [];
		}
		if (data === void 0) return [];
		if (++count > 1e4 || context.depth > 50) {
			report("error", "limit-exceeded", "The XML example exceeds the node or depth limit.", context.path);
			return [];
		}
		const referenceTarget = source && "$ref-value" in source ? source["$ref-value"] : void 0;
		const dynamicTarget = isDynamicRef(source) ? resolveDynamicRef(source.$dynamicRef, context.scope) : void 0;
		const target = referenceTarget ?? dynamicTarget;
		if (version32 && target && typeof target === "object") {
			const localXml = source.xml ?? {};
			validateXmlMetadata(localXml, context.path);
			const localKind = localXml.nodeType ?? (localXml.attribute ? "attribute" : "none");
			const referenceName = "$ref" in source && typeof source.$ref === "string" ? componentNameFromRef(source.$ref, context.path) : void 0;
			const attributes = localKind === "none" ? parentAttributes : [];
			const children = map(data, target, referenceName ?? inheritedName, {
				...context,
				depth: context.depth + 1,
				scope: pushDynamicScope(context.scope, source),
				evaluation: dynamicTarget ? context.evaluation?.children[0] : context.evaluation
			}, attributes);
			if (localKind === "none") return children;
			if (localKind !== "element") {
				report("error", "reference-node-type", "A reference wrapper must be an element or a transparent node.", context.path);
				return [];
			}
			return [{
				type: "element",
				name: localXml.name ?? inheritedName ?? "root",
				namespace: localXml.namespace,
				prefix: localXml.prefix,
				attributes,
				children
			}];
		}
		const { schema, scope, evaluations } = shape(source, context);
		if (version32 && "$ref-value" in schema && schema["$ref-value"]) return map(data, schema, inheritedName, {
			...context,
			scope,
			evaluation: void 0,
			depth: context.depth + 1
		}, parentAttributes);
		if (schema.deprecated || options.mode === "write" && schema.readOnly || options.mode === "read" && schema.writeOnly) return [];
		const xml = schema.xml ?? {};
		validateXmlMetadata(xml, context.path);
		const kind = xml.nodeType ?? (xml.attribute ? "attribute" : Array.isArray(data) && !xml.wrapped ? "none" : "element");
		const selectedComponentName = context.depth === 0 && "$ref" in schema && typeof schema.$ref === "string" ? componentNameFromRef(schema.$ref, context.path) : void 0;
		const nodeName = kind === "none" || kind === "text" || kind === "cdata" ? inheritedName : xml.name ?? inheritedName ?? selectedComponentName;
		const name = {
			name: nodeName ?? "root",
			namespace: xml.namespace,
			prefix: xml.prefix
		};
		if (kind === "attribute") {
			if (data === null) report("warning", "null-attribute", "A null XML attribute is omitted.", context.path);
			else if (typeof data === "object") report("error", "attribute-value", "An XML attribute requires a primitive value.", context.path);
			else parentAttributes.push({
				...name,
				value: String(data)
			});
			return [];
		}
		if (kind === "text" || kind === "cdata") {
			if (data !== null && typeof data !== "object") return [{
				type: kind,
				value: String(data)
			}];
			report("error", "text-value", "XML text and CDATA require a non-null primitive value.", context.path);
			return [];
		}
		if (typeof data === "object" && data !== null) {
			if (active.has(data)) {
				report("error", "circular-value", "The supplied XML example contains a circular value.", context.path);
				return [];
			}
			active.add(data);
		}
		const attributes = kind === "none" ? parentAttributes : [];
		const children = [];
		if (data === null) {
			if (kind === "none") report("error", "null-fragment", "A null value cannot be represented by an XML fragment.", context.path);
			else attributes.push({
				name: "nil",
				prefix: "xsi",
				namespace: xsi,
				value: "true"
			});
		} else if (Array.isArray(data)) {
			const prefixes = "prefixItems" in schema ? schema.prefixItems : void 0;
			const itemSchema = "items" in schema && typeof schema.items === "object" ? schema.items : {};
			for (let index = 0; index < data.length; index++) {
				if (count > 1e4) break;
				const itemPath = prefixes?.[index] ? [
					...context.path,
					"prefixItems",
					String(index)
				] : [...context.path, "items"];
				const itemEvaluations = evaluations.filter((child) => child.path.join(".") === itemPath.join("."));
				const itemEvaluation = itemEvaluations.length === data.length ? itemEvaluations[index] : itemEvaluations[0];
				children.push(...map(data[index], prefixes?.[index] ?? itemSchema, inheritedName ?? nodeName, {
					path: itemPath,
					scope: itemEvaluation?.dynamicScope ?? scope,
					evaluation: itemEvaluation,
					depth: context.depth + 1
				}, attributes));
			}
		} else if (isObject(data)) {
			const properties = "properties" in schema ? schema.properties : void 0;
			const evaluationByName = new Map(evaluations.map((child) => [child.name ?? child.path.at(-1), child]));
			for (const [key, childValue] of Object.entries(data)) {
				if (count > 1e4) break;
				const childEvaluation = evaluationByName.get(key);
				const additional = "additionalProperties" in schema && typeof schema.additionalProperties === "object" ? schema.additionalProperties : void 0;
				const property = properties?.[key];
				const patterns = "patternProperties" in schema ? schema.patternProperties : void 0;
				const matchingPatterns = Object.entries(patterns ?? {}).flatMap(([pattern, patternSchema]) => {
					const matches = matchXmlPropertyPattern(pattern, key);
					if (matches === void 0) report("error", "unsupported-pattern", "Property patterns must use the bounded XML matching subset.", [...context.path, key]);
					return matches ? [patternSchema] : [];
				});
				const propertySchemas = [...property ? [property] : [], ...matchingPatterns];
				const childSchema = propertySchemas.length > 1 ? { allOf: propertySchemas } : propertySchemas[0] ?? childEvaluation?.schema ?? additional ?? {};
				const resolved = getResolvedRef(childSchema, mergeSiblingReferences);
				if (resolved?.deprecated || options.mode === "write" && resolved?.readOnly || options.mode === "read" && resolved?.writeOnly) continue;
				children.push(...map(childValue, childSchema, key, {
					path: [...context.path, key],
					scope: childEvaluation?.dynamicScope ?? scope,
					evaluation: childEvaluation,
					depth: context.depth + 1
				}, attributes));
			}
		} else children.push({
			type: "text",
			value: String(data)
		});
		if (typeof data === "object" && data !== null) active.delete(data);
		return kind === "none" ? children : [{
			type: "element",
			...name,
			attributes,
			children
		}];
	};
	const componentName = componentNameFromRef(input && "$ref" in input && typeof input.$ref === "string" ? input.$ref : void 0, options.schemaPath ?? []);
	const rootName = options.rootName ?? componentName;
	const rootAttributes = [];
	const nodes = map(value, input, rootName, {
		path: options.schemaPath ?? [],
		scope: [],
		evaluation,
		depth: 0
	}, rootAttributes);
	if (rootAttributes.length) report("error", "root-attribute", "An XML attribute requires a parent element.", []);
	if (!rootName && nodes.length === 1 && nodes[0]?.type === "element" && nodes[0].name === "root" && !input.xml?.name) report("warning", "root-name-fallback", "No XML root name was supplied; using root.", []);
	if (diagnostics.some((diagnostic) => diagnostic.severity === "error")) return {
		xml: void 0,
		diagnostics
	};
	if (value === void 0) return {
		xml: void 0,
		diagnostics
	};
	const result = writeXml(nodes, options);
	return {
		xml: result.xml,
		diagnostics: [...diagnostics, ...result.diagnostics]
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/xml/get-xml-body-example.js
/** Resolve media-level XML examples without treating schema string values as serialized payloads. */
var getXmlBodyExample = (schema, inputExample, options = {}) => {
	const example = getResolvedRef(inputExample);
	if (example?.serializedValue !== void 0) return {
		xml: example.serializedValue,
		diagnostics: []
	};
	if (example?.dataValue !== void 0) return serializeXmlExample(example.dataValue, schema ?? coerceValue(SchemaObjectSchema, {}), options);
	if (typeof example?.value === "string") return {
		xml: example.value,
		diagnostics: []
	};
	if (example?.value !== void 0) return serializeXmlExample(example.value, schema ?? coerceValue(SchemaObjectSchema, {}), options);
	return schema ? getXmlExampleFromSchema(schema, options) : {
		xml: void 0,
		diagnostics: []
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/get-request-body-example.js
/**
* Generate a write-mode example directly from a request body's schema, ignoring any stored example.
*
* This is the schema-generation half of {@link getExampleFromBody}. It is exposed on its own so
* callers that need to regenerate a body for a freshly selected composition branch (rather than the
* edited example that would otherwise shadow it) produce the exact same value the initial example
* does. Data generation deep-resolves nested `$ref` members. XML retains reference sites so node
* naming and version-specific wrappers survive serialization.
*
* Returns `undefined` when there is no schema for the content type.
*/
var getSchemaExampleFromBody = (requestBody, contentType, requestBodyCompositionSelection, openapiVersion) => {
	const mediaType = requestBody.content?.[contentType];
	const schema = mediaType?.schema ?? (mediaType?.itemSchema && parseMimeType(contentType).type === "multipart" ? {
		type: "array",
		items: mediaType.itemSchema
	} : mediaType?.itemSchema);
	if (isXmlMediaType(contentType)) return getXmlBodyExample(mediaType?.schema, void 0, {
		openapiVersion,
		mode: "write",
		compositionSelection: requestBodyCompositionSelection,
		schemaPath: ["requestBody"]
	}).xml;
	if (!schema) return;
	const value = getExampleFromSchema(getResolvedRefDeep(schema), {
		mode: "write",
		compositionSelection: requestBodyCompositionSelection
	}, { schemaPath: ["requestBody"] });
	return serializeStreamExample(value, contentType, mediaType?.schema === void 0) ?? value;
};
/**
* Basically getExample + we generate an example from the schema if no example is found
*/
var getExampleFromBody = (requestBody, contentType, exampleName, requestBodyCompositionSelection, openapiVersion) => {
	const example = getExample(requestBody, exampleName, contentType);
	if (isXmlMediaType(contentType)) {
		const result = getXmlBodyExample(requestBody.content?.[contentType]?.schema, example, {
			openapiVersion,
			mode: "write",
			compositionSelection: requestBodyCompositionSelection,
			schemaPath: ["requestBody"]
		});
		if (result.xml === void 0) return null;
		return example?.dataValue !== void 0 ? {
			...example,
			value: result.xml,
			serializedValue: result.xml
		} : {
			...example,
			value: result.xml
		};
	}
	const selected = getExampleValue(example);
	if (example && selected) {
		const stream = typeof selected.value === "string" ? void 0 : serializeStreamExample(selected.value, contentType, false);
		if (stream !== void 0) return selected.source === "data" ? {
			...example,
			value: stream,
			serializedValue: stream
		} : {
			...example,
			value: stream
		};
		return selected.source === "value" ? example : {
			...example,
			value: selected.value
		};
	}
	const schemaExample = getSchemaExampleFromBody(requestBody, contentType, requestBodyCompositionSelection, openapiVersion);
	if (schemaExample === void 0 || schemaExample === null) return null;
	return { value: schemaExample };
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/get-selected-body-content-type.js
/**
* Returns the selected body content type for the given request body and exampleKey.
* Priority:
*   1. requestBody?.['x-scalar-selected-content-type']?.[exampleKey] (if set)
*   2. First key in requestBody?.content (if available)
*   3. null (if none available)
*/
var getSelectedBodyContentType = (requestBody, exampleKey = "default") => {
	return requestBody?.["x-scalar-selected-content-type"]?.[exampleKey] ?? Object.keys(requestBody?.content ?? {})[0] ?? null;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/schema-value-coercion.js
/** Normalize a schema's `type` (string | string[] | absent) into a plain string array. */
var normalizeSchemaTypes = (schema) => {
	const type = "type" in schema ? schema.type : void 0;
	return Array.isArray(type) ? [...type] : type == null ? [] : [type];
};
/**
* Walk an object schema along a dotted-row path and return the resolved leaf schema,
* or undefined when any segment is not a declared object property.
*/
var resolveLeafSchema = (schema, segments) => {
	let current = schema;
	for (const segment of segments) {
		if (!current || !isObjectSchema(current) || !current.properties) return;
		current = getResolvedRef(current.properties[segment], mergeSiblingReferences);
	}
	return current;
};
/** True when a JSON-parsed value's runtime type is allowed by the schema's declared types. */
var parsedValueMatchesSchemaType = (value, types) => {
	if (value === null) return types.includes("null");
	if (Array.isArray(value)) return types.includes("array");
	if (typeof value === "object") return types.includes("object");
	if (typeof value === "boolean") return types.includes("boolean");
	if (typeof value === "number") return types.includes("number") || types.includes("integer") && Number.isInteger(value);
	if (typeof value === "string") return types.includes("string");
	return false;
};
/**
* The form table stringifies every value for display, so an edited nested field comes back
* as a string (`false` -> "false", `[]` -> "[]"). When the leaf schema declares a non-string
* type, parse the string back to that type so the regrouped JSON part keeps its original
* shape instead of becoming string-typed (issue #9416).
*
* Coercion is deliberately conservative: schemas that allow `string` keep the raw text, and a
* value that does not parse as its declared type is left untouched so user input is never lost.
*/
var coerceLeafValueToSchemaType = (value, schema) => {
	if (typeof value !== "string" || !schema) return value;
	const types = normalizeSchemaTypes(schema);
	if (types.length === 0 || types.includes("string")) return value;
	try {
		const parsed = JSON.parse(value);
		return parsedValueMatchesSchemaType(parsed, types) ? parsed : value;
	} catch {
		return value;
	}
};
/**
* Best-effort coercion for row values whose property is not declared in the schema.
*
* Without a declared type we have no authority to keep `"5"` a string, and leaving it
* untouched would string-type every undeclared number/boolean on the first form edit.
* So values that parse as non-string JSON (`5`, `true`, `null`, `[1]`, `{"a":1}`) become
* that value, and anything else stays the raw text the user typed.
*/
var coerceUntypedValue = (value) => {
	if (typeof value !== "string") return value;
	try {
		const parsed = JSON.parse(value);
		return typeof parsed === "string" ? value : parsed;
	} catch {
		return value;
	}
};
/**
* Build a predicate that recognizes rows whose dotted name encodes a path into a nested
* object property of the body schema. Without a schema (or when the dotted prefix is not
* declared as a nested object), a row like `user.email` is treated as a literal name and
* stays flat — only schema-derived leaves emitted by the form-row builders are folded
* back into nested objects.
*/
var buildDottedNestedRowPredicate = (schema) => {
	const resolved = schema ? getResolvedRef(schema, mergeSiblingReferences) : void 0;
	if (!resolved || !isObjectSchema(resolved) || !resolved.properties) return (_name, _value) => false;
	const nestedTopKeys = /* @__PURE__ */ new Set();
	for (const [key, child] of Object.entries(resolved.properties)) {
		const childResolved = child ? getResolvedRef(child, mergeSiblingReferences) : void 0;
		if (childResolved && isObjectSchema(childResolved) && childResolved.properties) nestedTopKeys.add(key);
	}
	return (name, value) => {
		if (value instanceof File || !name.includes(".")) return false;
		const head = name.split(".", 1)[0];
		return !!head && nestedTopKeys.has(head);
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/serialize-parameter.js
/**
* Shared parameter serialization utilities for OpenAPI style values.
* Used by both build-request-parameters and process-parameters.
*
* @see https://spec.openapis.org/oas/v3.1.1.html#style-values
*/
/**
* Serializes a value based on the content type for content-based query parameters.
* Content-based query parameters do not use style serialization and instead follow
* their content type specification (e.g., application/json should be JSON.stringified).
*
* @param value - The value to serialize
* @param contentType - The content type to use for serialization
* @returns The serialized value as a string
*/
var serializeContentValue = (value, contentType) => {
	if (typeof value === "string") return value;
	if (contentType.includes("json") || isObjectLike(value) && !Array.isArray(value)) return JSON.stringify(value);
	return String(value);
};
/**
* Serializes a value according to OpenAPI simple style.
* Used for path and header parameters.
*
* Simple style with explode: false
* - Primitive: blue
* - Array: blue,black,brown
* - Object: R,100,G,200,B,150
*
* Simple style with explode: true
* - Primitive: blue
* - Array: blue,black,brown
* - Object: R=100,G=200,B=150
*/
var serializeSimpleStyle = (value, explode) => {
	if (Array.isArray(value)) return value.join(",");
	if (isObjectLike(value)) {
		const entries = Object.entries(value);
		if (explode) return entries.map(([k, v]) => `${k}=${v}`).join(",");
		return entries.map(([k, v]) => `${k},${v}`).join(",");
	}
	return value;
};
/**
* Serializes a value according to OpenAPI form style.
* Used for query and cookie parameters.
*
* Form style with explode: true (default for query)
* - Primitive: color=blue
* - Array: color=blue&color=black&color=brown (multiple entries)
* - Object: R=100&G=200&B=150 (multiple entries)
*
* Form style with explode: false
* - Primitive: color=blue
* - Array: color=blue,black,brown
* - Object: color=R,100,G,200,B,150
*/
var serializeFormStyle = (value, explode) => {
	if (Array.isArray(value) && explode) return value.map((v) => ({
		key: "",
		value: v
	}));
	if (Array.isArray(value)) return value.join(",");
	if (isObjectLike(value) && explode) return Object.entries(value).map(([k, v]) => ({
		key: k,
		value: v
	}));
	if (isObjectLike(value)) return Object.entries(value).map(([k, v]) => `${k},${v}`).join(",");
	return value;
};
/**
* Serializes a value according to OpenAPI form style for cookies.
* This is similar to serializeFormStyle but handles nested objects recursively
* and treats null values specially for cookie serialization.
*
* Form style with explode: true (default for cookies)
* - Primitive: color=blue
* - Array: color=blue&color=black&color=brown (multiple entries)
* - Object: R=100&G=200&B=150 (multiple entries)
*
* Form style with explode: false
* - Primitive: color=blue
* - Array: color=blue,black,brown (null becomes "null")
* - Object: color=R,100,G,200,B,150 (recursively flattened)
*/
var serializeFormStyleForCookies = (value, explode) => {
	if (Array.isArray(value) && explode) return value.map((v) => ({
		key: "",
		value: v
	}));
	if (Array.isArray(value)) return value.map((v) => v === null ? "null" : String(v)).join(",");
	if (isObjectLike(value) && explode) return Object.entries(value).map(([k, v]) => ({
		key: k,
		value: v
	}));
	if (isObjectLike(value)) {
		const flattenObject = (obj) => {
			const result = [];
			for (const [key, val] of Object.entries(obj)) if (isObjectLike(val) && !Array.isArray(val)) result.push(key, ...flattenObject(val));
			else result.push(key, val === null ? "null" : String(val));
			return result;
		};
		return flattenObject(value).join(",");
	}
	return value;
};
/**
* Serializes a value according to OpenAPI spaceDelimited style.
* Only valid for query parameters with array or object values.
*
* SpaceDelimited array: blue black brown
* SpaceDelimited object: R 100 G 200 B 150
*/
var serializeSpaceDelimitedStyle = (value) => {
	if (Array.isArray(value)) return value.join(" ");
	if (isObjectLike(value)) return Object.entries(value).map(([k, v]) => `${k} ${v}`).join(" ");
	return String(value);
};
/**
* Serializes a value according to OpenAPI pipeDelimited style.
* Only valid for query parameters with array or object values.
*
* PipeDelimited array: blue|black|brown
* PipeDelimited object: R|100|G|200|B|150
*/
var serializePipeDelimitedStyle = (value) => {
	if (Array.isArray(value)) return value.join("|");
	if (isObjectLike(value)) return Object.entries(value).flat().join("|");
	return String(value);
};
/**
* Serializes a value according to OpenAPI deepObject style.
* Only valid for query parameters with explode: true.
*
* DeepObject: color[R]=100&color[G]=200&color[B]=150
* Nested: user[name][first]=Alex&user[name][last]=Smith&user[role]=admin
* Arrays: filter[ids][]=1&filter[ids][]=2 (the common trailing-bracket convention)
*/
var serializeDeepObjectStyle = (paramName, value) => {
	const result = [];
	/**
	* Appends a single value at the given key, recursing into nested objects and arrays.
	*
	* Array values use the de-facto `key[]` convention (qs, PHP, Rails) so that each item becomes
	* its own query entry instead of collapsing into a comma-joined string. The OpenAPI spec leaves
	* deepObject-on-array undefined, but this matches what most servers expect.
	*/
	const append = (fullKey, val) => {
		if (Array.isArray(val)) for (const item of val) append(`${fullKey}[]`, item);
		else if (isObjectLike(val)) flatten(val, fullKey);
		else result.push({
			key: fullKey,
			value: String(val)
		});
	};
	/**
	* Recursively flattens nested objects into deepObject notation.
	*/
	const flatten = (obj, prefix) => {
		for (const [key, val] of Object.entries(obj)) append(`${prefix}[${key}]`, val);
	};
	if (isObjectLike(value) && !Array.isArray(value)) flatten(value, paramName);
	return result;
};
var warnedCookieParameterNames = /* @__PURE__ */ new Set();
/**
* Serializes OpenAPI 3.2 cookie style without escaping names or values.
* Cookie arrays and objects always expand into separate entries: explode: false
* is invalid because comma-separated cookie values violate RFC6265.
* Invalid declarations warn once per parameter name and retain the expanded fallback.
* Header builders join these entries with a semicolon and a single space.
*/
var serializeCookieStyle = (name, value, explode = true) => {
	if (!explode && !warnedCookieParameterNames.has(name)) {
		warnedCookieParameterNames.add(name);
		console.warn(`Cookie parameter "${name}" uses invalid explode: false with style: cookie; serializing with explode: true.`);
	}
	if (Array.isArray(value)) return value.map((item) => ({
		name,
		value: String(item)
	}));
	if (isObjectLike(value)) return Object.entries(value).map(([key, item]) => ({
		name: key,
		value: String(item)
	}));
	return [{
		name,
		value: String(value)
	}];
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/serialize-form-property.js
/** Explicit RFC6570 fields select style serialization instead of media-type encoding. */
var hasEncodingStyle = (encoding) => !!encoding && (encoding.style !== void 0 || encoding.explode !== void 0 || encoding.allowReserved !== void 0);
/**
* Stringify a value emitted by `serializeFormStyle` into a form field value.
*
* Form-style serialization only addresses one level of nesting per RFC6570; deeper
* structures (an object or array still sitting in `entry.value`) are spec-undefined.
* JSON-stringify them so the output stays readable instead of `String(value)` returning
* `"[object Object]"`. Primitives pass through `String()` to preserve the existing wire
* shape (e.g. `true` -> `"true"`).
*/
var stringifyEntryValue = (value) => value !== null && typeof value === "object" ? JSON.stringify(value) : String(value);
/**
* Serialize a `multipart/form-data` or `application/x-www-form-urlencoded` property
* according to its OpenAPI Encoding Object when `style` / `explode` / `allowReserved`
* is set. The value is serialized RFC6570-style (like a query parameter) into one or
* more key/value parts — for example `style: deepObject` turns `{ address: { city } }`
* into `address[city]=...` bracket notation, and `style: form, explode: true` breaks an
* object into one part per property.
*
* Returns `null` when the encoding does not opt into style-based serialization, so callers
* keep their default handling (JSON for objects, `contentType` parts, file uploads). This
* is shared by the request builder (`build-request-body`) and the code-snippet generator
* (`process-body`) so the request sent over the wire matches the generated snippet.
*
* @see https://spec.openapis.org/oas/v3.1.1.html#encoding-object
*/
var serializeFormPropertyWithEncoding = (key, value, encoding) => {
	if (!hasEncodingStyle(encoding)) return null;
	/**
	* Style is a no-op for primitives, and RFC6570 expansion of binary data is undefined
	* (spec §Appendix C). Files and arrays containing Files keep their dedicated handling in
	* the caller, so we bail out and let the default path emit those parts.
	*/
	if (typeof value !== "object" || value === null || value instanceof File || Array.isArray(value) && value.some((item) => item instanceof File)) return null;
	const unpacked = unpackProxyObject(value);
	/**
	* OAS Encoding follows query-parameter defaults: when no `style` is set the default is
	* "form"; when no `explode` is set the default is `true` for "form" and `false` otherwise.
	*/
	const style = encoding?.style ?? "form";
	const explode = encoding?.explode ?? style === "form";
	const params = [];
	if (style === "deepObject") {
		if (Array.isArray(unpacked)) {
			/**
			* deepObject-on-array is marked n/a by the spec; fall back to the form/explode:true
			* shape so the array still reaches the wire instead of being silently dropped.
			*/
			const serialized = serializeFormStyle(unpacked, true);
			if (Array.isArray(serialized)) for (const entry of serialized) params.push({
				key: entry.key || key,
				value: stringifyEntryValue(entry.value)
			});
			else params.push({
				key,
				value: String(serialized)
			});
		} else for (const entry of serializeDeepObjectStyle(key, unpacked)) params.push({
			key: entry.key,
			value: String(entry.value)
		});
	} else if (style === "spaceDelimited") params.push({
		key,
		value: String(serializeSpaceDelimitedStyle(unpacked))
	});
	else if (style === "pipeDelimited") params.push({
		key,
		value: String(serializePipeDelimitedStyle(unpacked))
	});
	else {
		const serialized = serializeFormStyle(unpacked, explode);
		if (Array.isArray(serialized)) for (const entry of serialized)
 /**
		* Arrays: `entry.key === ''` -> fall back to the outer name.
		* Objects: `entry.key` is the inner property name (the spec strips the outer name).
		*/
		params.push({
			key: entry.key || key,
			value: stringifyEntryValue(entry.value)
		});
		else params.push({
			key,
			value: String(serialized)
		});
	}
	return params;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/serialize-multipart-array.js
/**
* Named multipart arrays produce one part per item, using the same property name.
* Encoding applies to each item, including its content type. Without an explicit
* style, nested arrays remain individual JSON values instead of expanding again.
*
* @see https://spec.openapis.org/oas/v3.2.0.html#encoding-by-name
*/
var serializeMultipartArray = (key, value, encoding) => {
	if (!Array.isArray(value)) return null;
	const hasStyle = encoding?.style !== void 0 || encoding?.explode !== void 0 || encoding?.allowReserved !== void 0;
	const contentType = hasStyle ? void 0 : encoding?.contentType;
	return value.flatMap((item) => {
		const parts = serializeFormPropertyWithEncoding(key, item, encoding);
		if (parts) return parts;
		if (item instanceof File) return [{
			key,
			value: unpackProxyObject(item),
			...contentType ? { contentType } : {}
		}];
		const structured = typeof item === "object" && item !== null;
		const itemContentType = contentType ?? (!hasStyle && structured ? "application/json" : void 0);
		const subtype = itemContentType ? parseMimeType(itemContentType).subtype : void 0;
		const isJson = subtype === "json" || subtype?.endsWith("+json");
		return [{
			key,
			value: structured || isJson ? JSON.stringify(unpackProxyObject(item)) : String(item),
			...itemContentType ? { contentType: itemContentType } : {}
		}];
	});
};
//#endregion
//#region node_modules/@scalar/helpers/dist/http/http-methods.js
/** All OpenAPI HTTP methods */
var HTTP_METHODS = [
	"delete",
	"get",
	"head",
	"options",
	"patch",
	"post",
	"put",
	"query",
	"trace"
];
//#endregion
//#region node_modules/@scalar/helpers/dist/http/is-http-method.js
var knownMethods = Object.freeze(new Set(HTTP_METHODS));
/** Type guard which takes in a string and returns true if it is in fact an HTTPMethod */
var isHttpMethod = (method) => method && typeof method === "string" ? knownMethods.has(method.toLowerCase()) : false;
//#endregion
//#region node_modules/@scalar/helpers/dist/http/scalar-headers.js
var X_SCALAR_COOKIE = "x-scalar-cookie";
var X_SCALAR_SET_COOKIE = "x-scalar-set-cookie";
var X_SCALAR_USER_AGENT = "x-scalar-user-agent";
var X_SCALAR_DATE = "x-scalar-date";
var X_SCALAR_DNT = "x-scalar-dnt";
var X_SCALAR_REFERER = "x-scalar-referer";
//#endregion
//#region node_modules/@scalar/helpers/dist/regex/regex-helpers.js
/**
* Collection of regular expressions used throughout the application.
* These patterns handle URL parsing, variable detection, and reference path extraction.
*/
var REGEX = {
	/** Checks for a valid scheme */
	PROTOCOL: /^(?:https?|ftp|file|mailto|tel|data|wss?)*:\/\//,
	/** Finds multiple slashes after the scheme to replace with a single slash */
	MULTIPLE_SLASHES: /(?<!:)\/{2,}/g,
	/** Finds all variables wrapped in {{double}} */
	VARIABLES: /{{((?:[^{}]|{[^{}]*})*)}}/g,
	/** Finds all variables wrapped in {single} */
	PATH: /(?:{)([^{}]+)}(?!})/g,
	/** Finds the name of the schema from the ref path */
	REF_NAME: /\/([^\/]+)$/,
	/** Finds template variables in multiple formats: {{var}}, {var}, or :var */
	TEMPLATE_VARIABLE: /{{\s*([^}\s]+?)\s*}}|{\s*([^}\s]+?)\s*}|:\b[\w.]+\b/g
};
//#endregion
//#region node_modules/@scalar/helpers/dist/regex/replace-variables.js
/**
* This function takes a string and replaces both {single} and {{double}} curly brace variables with given values.
* Use the replacePathVariables and replaceEnvVariables functions if you only need to replace one type of variable.
*/
function replaceVariables(value, variablesOrCallback) {
	const doubleCurlyBrackets = /{{\s*([\w.-]+)\s*}}/g;
	const singleCurlyBrackets = /{\s*([\w.-]+)\s*}/g;
	const callback = (_, match) => {
		if (typeof variablesOrCallback === "function") return variablesOrCallback(match);
		return variablesOrCallback[match]?.toString() || `{${match}}`;
	};
	return value.replace(doubleCurlyBrackets, callback).replace(singleCurlyBrackets, callback);
}
/** Replace {path} variables with their values */
var replacePathVariables = (path, variables = {}) => path.replace(REGEX.PATH, (match, key) => variables[key] ?? match);
/** Replace {{env}} variables with their values */
var replaceEnvVariables = (path, variables = {}) => path.replace(REGEX.VARIABLES, (match, key) => typeof variables === "function" ? variables(key) ?? match : variables[key] ?? match);
//#endregion
//#region node_modules/@scalar/helpers/dist/types/result.js
/**
* Convenience constructor for the success variant of {@link Result}.
*
* Lets call sites avoid spelling out `{ ok: true, data: ... }` over and
* over while keeping the discriminant inferable.
*
* @example
* return ok(user)
*/
var ok = (data) => ({
	ok: true,
	data
});
/**
* Convenience constructor for the failure variant of {@link Result}.
*
* Accepts the typed error and an optional human-readable message so
* callers can surface user-facing details alongside the discriminated
* code.
*
* @example
* return err('CONFLICT', 'Slug is already taken')
*
* @example
* return err('Document not found')
*/
var err = (error, message) => ({
	ok: false,
	error,
	message
});
//#endregion
//#region node_modules/@scalar/helpers/dist/types/safe-run.js
var formatCaughtError = (error) => error instanceof Error ? error.message : String(error);
function safeRun(fn) {
	try {
		const out = fn();
		if (out instanceof Promise) return out.then((data) => ok(data), (error) => {
			console.error(error);
			return err(formatCaughtError(error));
		});
		return ok(out);
	} catch (error) {
		console.error(error);
		return err(formatCaughtError(error));
	}
}
//#endregion
//#region node_modules/@scalar/helpers/dist/url/is-local-url.js
/** Obviously local hostnames */
var LOCAL_HOSTNAMES = [
	"localhost",
	"127.0.0.1",
	"[::1]",
	"0.0.0.0"
];
/** Reserved TLDs that are guaranteed to never be assigned */
var RESERVED_TLDS = [
	"test",
	"example",
	"invalid",
	"localhost"
];
/**
* Detect requests to localhost or reserved TLDs
*/
function isLocalUrl(url) {
	try {
		const { hostname } = new URL(url);
		if (LOCAL_HOSTNAMES.includes(hostname)) return true;
		const tld = hostname.split(".").pop();
		if (tld && RESERVED_TLDS.includes(tld)) return true;
		return false;
	} catch {
		return true;
	}
}
//#endregion
//#region node_modules/@scalar/helpers/dist/url/is-relative-path.js
/**
* Check if the URL is relative or if it's a domain without protocol
**/
var isRelativePath = (url) => {
	if (REGEX.PROTOCOL.test(url)) return false;
	if (/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(\/|$)/.test(url)) return false;
	return true;
};
//#endregion
//#region node_modules/@scalar/helpers/dist/url/redirect-to-proxy.js
/**
* Redirects the request to a proxy server with a given URL. But not for:
*
* - Relative URLs
* - URLs that seem to point to a local IP (except the proxy is on the same domain)
* - URLs that don't look like a domain
**/
var redirectToProxy = (proxyUrl, url) => {
	try {
		if (!proxyUrl || !shouldUseProxy(proxyUrl, url)) return url ?? "";
		const newUrl = new URL(url);
		newUrl.href = isRelativePath(proxyUrl) ? `http://localhost${proxyUrl}` : proxyUrl;
		newUrl.searchParams.append("scalar_url", url);
		return isRelativePath(proxyUrl) ? newUrl.toString().replace(/^http:\/\/localhost/, "") : newUrl.toString();
	} catch {
		return url ?? "";
	}
};
/**
* Returns false for requests to localhost, relative URLs, if no proxy is defined …
**/
var shouldUseProxy = (proxyUrl, url) => {
	try {
		if (!proxyUrl || !url) return false;
		if (isRelativePath(url)) return false;
		if (isRelativePath(proxyUrl)) return true;
		if (isLocalUrl(proxyUrl)) return true;
		if (isLocalUrl(url)) return false;
		return true;
	} catch {
		return false;
	}
};
//#endregion
//#region node_modules/js-base64/base64.mjs
/**
*  base64.ts
*
*  Licensed under the BSD 3-Clause License.
*    http://opensource.org/licenses/BSD-3-Clause
*
*  References:
*    http://en.wikipedia.org/wiki/Base64
*
* @author Dan Kogai (https://github.com/dankogai)
*/
var version = "3.9.4";
/**
* @deprecated use lowercase `version`.
*/
var VERSION = version;
var _TD = typeof TextDecoder === "function" ? new TextDecoder("utf-8", { ignoreBOM: true }) : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64chs = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
var b64tab = ((a) => {
	let tab = {};
	a.forEach((c, i) => tab[c] = i);
	return tab;
})(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
/**
* polyfill version of `btoa`
*/
var btoaPolyfill = (bin) => {
	let u32, c0, c1, c2, asc = "";
	const pad = bin.length % 3;
	for (let i = 0; i < bin.length;) {
		if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
		u32 = c0 << 16 | c1 << 8 | c2;
		asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
	}
	return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
* does what `window.btoa` of web browsers do.
* @param {String} bin binary string
* @returns {string} Base64-encoded string
*/
var _btoa = typeof btoa === "function" ? (bin) => btoa(bin) : btoaPolyfill;
var _fromUint8Array = typeof Uint8Array.prototype.toBase64 === "function" ? (u8a) => u8a.toBase64() : (u8a) => {
	const maxargs = 4096;
	let strs = [];
	for (let i = 0, l = u8a.length; i < l; i += maxargs) strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
	return _btoa(strs.join(""));
};
/**
* converts a Uint8Array to a Base64 string.
* @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
* @returns {string} Base64 string
*/
var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
var cb_utob = (c) => {
	if (c.length < 2) {
		var cc = c.charCodeAt(0);
		return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
	} else {
		var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
		return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
	}
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\x00-\x7F]/g;
/**
* @deprecated should have been internal use only.
* @param {string} src UTF-8 string
* @returns {string} UTF-16 string
*/
var utob = (u) => u.replace(re_utob, cb_utob);
var _encode = _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
/**
* converts a UTF-8-encoded string to a Base64 string.
* @param {boolean} [urlsafe] if `true` make the result URL-safe
* @returns {string} Base64 string
*/
var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
* converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
* @returns {string} Base64 string
*/
var encodeURI = (src) => encode(src, true);
var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = (cccc) => {
	switch (cccc.length) {
		case 4:
			var offset = ((7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3)) - 65536;
			return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
		case 3: return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
		default: return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
	}
};
/**
* @deprecated should have been internal use only.
* @param {string} src UTF-16 string
* @returns {string} UTF-8 string
*/
var btou = (b) => b.replace(re_btou, cb_btou);
/**
* polyfill version of `atob`
*/
var atobPolyfill = (asc) => {
	asc = asc.replace(/\s+/g, "");
	if (!b64re.test(asc)) throw new TypeError("malformed base64.");
	asc += "==".slice(2 - (asc.length & 3));
	let u24, r1, r2;
	let binArray = [];
	for (let i = 0; i < asc.length;) {
		u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
		if (r1 === 64) binArray.push(_fromCC(u24 >> 16 & 255));
		else if (r2 === 64) binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255));
		else binArray.push(_fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255));
	}
	return binArray.join("");
};
/**
* does what `window.atob` of web browsers do.
* @param {String} asc Base64-encoded string
* @returns {string} binary string
*/
var _atob = typeof atob === "function" ? (asc) => atob(_tidyB64(asc)) : atobPolyfill;
var _toUint8Array = typeof Uint8Array.fromBase64 === "function" ? (a) => Uint8Array.fromBase64(a) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
/**
* converts a Base64 string to a Uint8Array.
*/
var toUint8Array = (a) => _toUint8Array(_unURI(a));
var _decode = _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
/**
* converts a Base64 string to a UTF-8 string.
* @param {String} src Base64 string.  Both normal and URL-safe are supported
* @returns {string} UTF-8 string
*/
var decode = (src) => _decode(_unURI(src));
/**
* check if a value is a valid Base64 string
* @param {String} src a value to check
*/
var isValid = (src) => {
	if (typeof src !== "string") return false;
	const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
	return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
var _noEnum = (v) => {
	return {
		value: v,
		enumerable: false,
		writable: true,
		configurable: true
	};
};
/**
* extend String.prototype with relevant methods
*/
var extendString = function() {
	const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
	_add("fromBase64", function() {
		return decode(this);
	});
	_add("toBase64", function(urlsafe) {
		return encode(this, urlsafe);
	});
	_add("toBase64URI", function() {
		return encode(this, true);
	});
	_add("toBase64URL", function() {
		return encode(this, true);
	});
	_add("toUint8Array", function() {
		return toUint8Array(this);
	});
};
/**
* extend Uint8Array.prototype with relevant methods
*/
var extendUint8Array = function() {
	const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
	_add("toBase64", function(urlsafe) {
		return fromUint8Array(this, urlsafe);
	});
	_add("toBase64URI", function() {
		return fromUint8Array(this, true);
	});
	_add("toBase64URL", function() {
		return fromUint8Array(this, true);
	});
};
/**
* extend Builtin prototypes with relevant methods
*/
var extendBuiltins = () => {
	extendString();
	extendUint8Array();
};
var gBase64 = {
	version,
	VERSION,
	atob: _atob,
	atobPolyfill,
	btoa: _btoa,
	btoaPolyfill,
	fromBase64: decode,
	toBase64: encode,
	encode,
	encodeURI,
	encodeURL: encodeURI,
	utob,
	btou,
	decode,
	isValid,
	fromUint8Array,
	toUint8Array,
	extendString,
	extendUint8Array,
	extendBuiltins
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/encode-multipart-body.js
/** Escape disposition parameters using the same percent escapes as browser form submissions. */
var escapeParameter = (value) => value.replace(/\r\n|\r|\n/g, "\r\n").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22");
/** Keep equal-length boundaries distinct from nested delimiters and resolved text. */
var createBoundary = (chunks) => {
	const text = chunks.filter((chunk) => typeof chunk === "string").join("");
	for (const _attempt of Array.from({ length: 10 })) {
		const random = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(24));
		const boundary = `----scalar-${Array.from(random, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
		if (!text.includes(boundary)) return boundary;
	}
	throw new Error("Unable to generate a distinct multipart boundary");
};
/** Serialize nested multipart bodies for both fetch and synchronous code snippets. */
var serializeMultipartBody = (parts, contentType = "multipart/form-data", replace = (value) => value, nesting = 0) => {
	if (nesting >= 8) throw new Error("Maximum multipart nesting exceeded");
	if (/[\r\n\0]/.test(contentType)) throw new Error("Invalid multipart content type");
	const mime = parseMimeType(contentType);
	const partsChunks = parts.map((part) => {
		const encoded = part.type === "multipart" ? serializeMultipartBody(part.value, part.contentType, replace, nesting + 1) : {
			chunks: [part.type === "text" ? replace(part.value) : part.value],
			contentType: part.contentType
		};
		const filename = part.type === "file" ? part.value.name : part.type === "blob" ? "blob" : void 0;
		const partContentType = encoded.contentType ?? (part.type === "file" || part.type === "blob" ? part.value.type || "application/octet-stream" : void 0);
		if (partContentType && /[\r\n\0]/.test(partContentType)) throw new Error("Invalid multipart content type");
		const disposition = part.key === void 0 ? "" : `Content-Disposition: form-data; name="${escapeParameter(replace(part.key))}"${filename === void 0 ? "" : `; filename="${escapeParameter(filename)}"`}\r\n`;
		const extraHeaders = Object.entries(part.headers ?? {}).map(([name, value]) => {
			const resolved = replace(value);
			if (!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(name) || /[\r\n\0]/.test(resolved)) throw new Error("Invalid multipart header");
			return name.toLowerCase() === "content-type" ? "" : `${name}: ${resolved}\r\n`;
		}).join("");
		return [
			`${disposition}${partContentType ? `Content-Type: ${partContentType}\r\n` : ""}${extraHeaders}\r\n`,
			...encoded.chunks.map((value) => typeof value === "string" && !part.contentType ? value.replace(/\r\n|\r|\n/g, "\r\n") : value),
			"\r\n"
		];
	});
	const boundary = createBoundary(partsChunks.flat());
	mime.parameters.set("boundary", boundary);
	return {
		chunks: [...partsChunks.flatMap((part) => [`--${boundary}\r\n`, ...part]), `--${boundary}--\r\n`],
		contentType: mime.toString()
	};
};
/** Encode multipart parts without losing binary bytes or assigning filenames to typed text. */
var encodeMultipartBody = (parts, contentType = "multipart/form-data", replace) => {
	const encoded = serializeMultipartBody(parts, contentType, replace);
	return new Blob(encoded.chunks, { type: encoded.contentType });
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/matches-domain.js
/**
* Matches, when:
* - Isn't scoped to a domain, or
* - matches the current host, or
* - or ends with the current host, or
* - matches the current host with a wildcard.
*/
var matchesDomain = (givenUrl, configuredHostname) => {
	if (!givenUrl || !configuredHostname) return true;
	try {
		const urlWithProtocol = givenUrl.startsWith("http") ? givenUrl : `http://${givenUrl}`;
		const givenHostname = new URL(urlWithProtocol).hostname;
		const noHostnameConfigured = !configuredHostname;
		const hostnameMatches = configuredHostname === givenHostname;
		const domainMatchesWildcard = configuredHostname.startsWith(".") && configuredHostname === `.${givenHostname}`;
		const subdomainMatchesWildcard = configuredHostname.startsWith(".") && givenHostname?.endsWith(configuredHostname);
		return noHostnameConfigured || hostnameMatches || subdomainMatchesWildcard || domainMatchesWildcard;
	} catch {
		return false;
	}
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/filter-global-cookies.js
/**
* Filter a global cookie to determine if it should be included with a request to the given URL.
* - Returns false if the cookie is disabled, in the disabledGlobalCookies map, or missing a name.
* - Returns false if the domain does not match.
* - Returns false if the path is specified and does not match the URL pathname.
* - Returns true otherwise.
*/
var filterGlobalCookie = ({ cookie, url, disabledGlobalCookies }) => {
	if (cookie.isDisabled || disabledGlobalCookies[cookie.name.toLowerCase()] === true || !cookie.name) return false;
	const urlObject = new URL(url, "https://example.com");
	if (cookie.domain && !matchesDomain(url, cookie.domain)) return false;
	if (cookie.path && !urlObject.pathname.startsWith(cookie.path)) return false;
	return true;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/build-request-cookie-header.js
var CUSTOM_COOKIE_HEADER_WARNING = "We're using a `X-Scalar-Cookie` custom header to the request. The proxy will forward this as a `Cookie` header. We do this to avoid the browser omitting the `Cookie` header for cross-origin requests for security reasons.";
var COOKIE_HEADER_WARNING = `We're trying to add a Cookie header, but browsers often omit them for cross-origin requests for various security reasons. If it's not working, that's probably why. Here are the requirements for it to work:

        - The browser URL must be on the same domain as the server URL.
        - The connection must be made over HTTPS.
        `;
/**
* Generate a cookie header from the cookie params
*/
var getCookieHeader = (cookieParams, originalCookieHeader) => {
	const cookieHeader = cookieParams.map((c) => `${c.name}=${c.value}`).join("; ");
	if (originalCookieHeader && cookieHeader) return `${originalCookieHeader}; ${cookieHeader}`;
	return originalCookieHeader || cookieHeader || "";
};
/**
* Build out the cookies header taking in global, param and security scheme cookies
*/
var buildRequestCookieHeader = ({ cookies, originalCookieHeader, url, useCustomCookieHeader }) => {
	/** Filter the global cookies by domain + parse */
	/** Generate the cookie header */
	const cookieHeader = getCookieHeader(cookies.filter((cookie) => filterGlobalCookie({
		url,
		cookie,
		disabledGlobalCookies: {}
	})), originalCookieHeader ?? void 0);
	if (cookieHeader) {
		if (useCustomCookieHeader) {
			console.warn(CUSTOM_COOKIE_HEADER_WARNING);
			return {
				name: X_SCALAR_COOKIE,
				value: cookieHeader
			};
		}
		console.warn(COOKIE_HEADER_WARNING);
		return {
			name: "Cookie",
			value: cookieHeader
		};
	}
	return null;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/helpers/apply-allow-reserved-to-url.js
/**
* Reserved characters we can safely decode in query values when OpenAPI
* `allowReserved` is enabled.
*
* We intentionally keep percent-encodings for characters that can break query
* parsing (`#`, `&`, `=`, `?`, `[`, `]`) or change x-www-form-urlencoded
* semantics (`+`).
*
* @see https://spec.openapis.org/oas/v3.1.0.html#fixed-fields-10
*/
var DECODABLE_RESERVED_CHARACTERS_BY_PERCENT_ENCODING = {
	"21": "!",
	"24": "$",
	"27": "'",
	"28": "(",
	"29": ")",
	"2A": "*",
	"2C": ",",
	"2F": "/",
	"3A": ":",
	"3B": ";",
	"40": "@"
};
var decodeReservedCharacters = (value) => value.replace(/%([0-9A-Fa-f]{2})/g, (match, code) => DECODABLE_RESERVED_CHARACTERS_BY_PERCENT_ENCODING[code.toUpperCase()] ?? match);
var decodeQueryKey = (key) => {
	try {
		return decodeURIComponent(key.replaceAll("+", "%20"));
	} catch {
		return key;
	}
};
/**
* Decodes reserved character percent-encodings only for query keys marked with
* OpenAPI's `allowReserved: true`.
*/
var applyAllowReservedToUrl = (url, allowReservedQueryParameters) => {
	if (allowReservedQueryParameters.size === 0) return url;
	const queryStart = url.indexOf("?");
	if (queryStart === -1) return url;
	const hashStart = url.indexOf("#", queryStart);
	const urlPrefix = url.slice(0, queryStart + 1);
	const query = hashStart === -1 ? url.slice(queryStart + 1) : url.slice(queryStart + 1, hashStart);
	const hash = hashStart === -1 ? "" : url.slice(hashStart);
	if (!query) return url;
	return `${urlPrefix}${query.split("&").map((segment) => {
		if (!segment) return segment;
		const equalsIndex = segment.indexOf("=");
		const rawKey = equalsIndex === -1 ? segment : segment.slice(0, equalsIndex);
		const key = decodeQueryKey(rawKey);
		if (!allowReservedQueryParameters.has(key) || equalsIndex === -1) return segment;
		return `${rawKey}=${decodeReservedCharacters(segment.slice(equalsIndex + 1))}`;
	}).join("&")}${hash}`;
};
//#endregion
//#region node_modules/@scalar/helpers/dist/url/ensure-protocol.js
/** Ensure URL has a protocol prefix */
function ensureProtocol(url) {
	if (REGEX.PROTOCOL.test(url)) return url;
	return `http://${url.replace(/^\//, "")}`;
}
//#endregion
//#region node_modules/@scalar/helpers/dist/url/merge-urls.js
/**
* Merges multiple URLSearchParams objects, preserving multiple values per param
* within each source, but later sources overwrite earlier ones completely
* This should de-dupe our query params while allowing multiple keys for "arrays"
*/
var mergeSearchParams = (...params) => {
	const merged = {};
	params.forEach((p) => {
		const keys = Array.from(p.keys());
		new Set(keys).forEach((key) => {
			const values = p.getAll(key);
			const value = values.length > 1 ? values : values[0] ?? "";
			merged[key] = value;
		});
	});
	const result = new URLSearchParams();
	Object.entries(merged).forEach(([key, value]) => {
		if (Array.isArray(value)) value.forEach((v) => result.append(key, v));
		else result.append(key, value);
	});
	return result;
};
/** Combines a base URL and a path ensuring there's only one slash between them */
var combineUrlAndPath = (url, path) => {
	if (!path || url === path) return url.trim();
	if (!url) return path.trim();
	return `${url.trim()}/${path.trim()}`.replace(REGEX.MULTIPLE_SLASHES, "/");
};
/**
* Creates a URL from the path and server
* also optionally merges query params if you include urlSearchParams
* This was re-written without using URL to support variables in the scheme
*/
var mergeUrls = (url, path, urlParams = new URLSearchParams(), disableOriginPrefix = false) => {
	if (url && (!isRelativePath(url) || typeof window !== "undefined")) {
		const [baseUrl = "", baseQuery] = (disableOriginPrefix ? url : isRelativePath(url) ? combineUrlAndPath(window.location.origin, url) : ensureProtocol(url)).split("?");
		const baseParams = new URLSearchParams(baseQuery || "");
		const [pathWithoutQuery = "", pathQuery] = path.split("?");
		const pathParams = new URLSearchParams(pathQuery || "");
		const mergedUrl = url === path ? baseUrl : combineUrlAndPath(baseUrl, pathWithoutQuery);
		const search = mergeSearchParams(baseParams, pathParams, urlParams).toString();
		return search ? `${mergedUrl}?${search}` : mergedUrl;
	}
	if (path) return combineUrlAndPath(url, path);
	return "";
};
//#endregion
//#region node_modules/@scalar/helpers/dist/http/get-first-media-type.js
/** Select the first declared content entry, preserving its media-type parameters and value. */
var getFirstMediaType = (content) => Object.entries(content ?? {})[0];
//#endregion
//#region node_modules/@scalar/helpers/dist/http/is-json-media-type.js
/** Match JSON media types and structured JSON suffixes, ignoring case and parameters. */
var isJsonMediaType = (value) => {
	const { subtype } = parseMimeType(value);
	return subtype === "json" || subtype.endsWith("+json");
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/is-param-disabled.js
/**
* Determines if a parameter is disabled
*
* First we explicitly check if its been disabled via the `x-disabled` extension.
* Populated examples are enabled unless explicitly disabled. Empty optional parameters stay disabled.
*
* @param param - The parameter to check.
* @param example - The example to check.
* @param defaultDisabled - When true (default), empty optional parameters are treated as disabled unless explicitly enabled. When false, only parameters explicitly marked `x-disabled: true` are disabled.
* @returns true if the parameter is disabled, false otherwise.
*/
var isParamDisabled = (param, example, defaultDisabled = true) => {
	const xDisabled = example?.["x-disabled"];
	if (typeof xDisabled === "boolean") return xDisabled;
	const value = getExampleValue(example)?.value;
	if (!defaultDisabled || value !== void 0 && value !== "" && value !== null) return false;
	return !param.required && param.in !== "path";
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/querystring-parameter.js
/** Classify provenance before serialization so generated strings remain data, not pre-serialized media. */
var getQuerystringValueKind = (example, source) => {
	if (example?.serializedValue !== void 0) return source === "parameter" ? "uri-ready" : "serialized";
	if (example?.dataValue !== void 0) return "data";
	if (typeof example?.value === "string") return "serialized";
	return "data";
};
/**
* Resolve the selected whole-query example, including content-schema defaults.
* This module serializes outgoing queries; mock-server/src/utils/querystring-parameter.ts decodes incoming ones.
*/
var getQuerystringParameter = (parameter, exampleName, { defaultDisabled = true, includeDisabled = false } = {}) => {
	if (parameter.in !== "querystring" || !("content" in parameter) || !parameter.content) return;
	const [contentType, media] = getFirstMediaType(parameter.content) ?? [];
	if (!contentType) return;
	const mediaType = getResolvedRef(media);
	const parameterExample = getExample({
		...parameter,
		content: void 0
	}, exampleName, void 0);
	const example = parameterExample ?? getExample({
		...mediaType,
		schema: void 0
	}, exampleName, contentType);
	if (!includeDisabled && isParamDisabled(parameter, example, defaultDisabled)) return;
	const value = example?.serializedValue ?? (example?.dataValue !== void 0 ? example.dataValue : example?.value);
	const schema = getResolvedRef(mediaType?.schema);
	return {
		value: value !== void 0 ? value : schema ? getExampleFromSchema(schema) : "",
		contentType,
		encoding: mediaType?.encoding,
		kind: getQuerystringValueKind(example, parameterExample === void 0 ? "media" : "parameter")
	};
};
/** Serialize without introducing a parameter name or re-encoding URI-ready examples. */
var serializeQuerystringParameter = (parameter, variables = {}) => {
	const replace = (value) => {
		if (typeof value === "string") return replaceEnvVariables(value, variables);
		if (Array.isArray(value)) return value.map(replace);
		if (isObject(value)) return Object.fromEntries(Object.entries(value).map(([key, item]) => [replaceEnvVariables(key, variables), replace(item)]));
		return value;
	};
	const value = replace(parameter.value);
	if (parameter.kind === "uri-ready") return String(value);
	const contentType = parseMimeType(parameter.contentType).essence;
	if (contentType === "application/x-www-form-urlencoded") {
		if (typeof value === "string") return value;
		const params = new URLSearchParams();
		const reservedKeys = /* @__PURE__ */ new Set();
		for (const [key, item] of Object.entries(isObject(value) ? value : {})) {
			const encoding = parameter.encoding?.[key];
			const entries = serializeFormPropertyWithEncoding(key, item, encoding);
			if (entries) {
				for (const entry of entries) {
					params.append(entry.key, entry.value);
					if (encoding?.allowReserved) reservedKeys.add(entry.key);
				}
				continue;
			}
			const styleBased = encoding?.style !== void 0 || encoding?.explode !== void 0 || encoding?.allowReserved !== void 0;
			for (const part of Array.isArray(item) ? item : [item]) {
				const json = !styleBased && (isJsonMediaType(encoding?.contentType) || part !== null && typeof part === "object");
				params.append(key, json ? JSON.stringify(part) : String(part ?? ""));
			}
			if (encoding?.allowReserved) reservedKeys.add(key);
		}
		return applyAllowReservedToUrl(`?${params}`, reservedKeys).slice(1);
	}
	const serialized = parameter.kind === "serialized" ? String(value) : isJsonMediaType(contentType) ? JSON.stringify(value) : String(value);
	return encodeURIComponent(serialized).replace(/[!'()*]/g, (char) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`);
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/resolve-request-factory-url.js
/**
* Discriminated error code when the merged request URL is not a complete absolute target
* (for example no OpenAPI server, or unresolved `{{environment}}` segments left in the merged URL).
*/
var MISSING_REQUEST_SERVER_BASE = "MISSING_REQUEST_SERVER_BASE";
/**
* Discriminated error code when the merged URL cannot be encoded or parsed (invalid path params, malformed URL).
*/
var INVALID_REQUEST_FACTORY_URL = "INVALID_REQUEST_FACTORY_URL";
var INCOMPLETE_MERGED_URL_MESSAGE = "No server URL is configured for this request. Add a servers entry to your OpenAPI document (or set a server in the client) before sending.";
/**
* Resolves the request URL string from a {@link RequestFactory} using the same
* rules as {@link buildRequest} (path variables, query, security query params),
* without proxy rewriting or reserved-query encoding.
*/
var resolveRequestFactoryUrl = (request, options) => {
	const variables = options.envVariables;
	const pathVariablesEncoded = safeRun(() => Object.fromEntries(Object.entries(request.path.variables).map(([key, value]) => [key, request.path.serializedParameters?.has(key) ? replaceEnvVariables(value, variables) : encodeURIComponent(replaceEnvVariables(value, variables))])));
	if (!pathVariablesEncoded.ok) return err(INVALID_REQUEST_FACTORY_URL, "The request URL contains invalid characters in path parameters.");
	const pathVariables = pathVariablesEncoded.data;
	const mergedUrl = mergeUrls(replaceEnvVariables(request.baseUrl, variables), replacePathVariables(replaceEnvVariables(request.path.raw, variables), pathVariables));
	if (!options.allowMissingRequestServerBase && isRelativePath(mergedUrl)) return err(MISSING_REQUEST_SERVER_BASE, INCOMPLETE_MERGED_URL_MESSAGE);
	const origin = globalThis.window?.location?.origin;
	const urlBase = origin && origin !== "null" ? origin : "http://localhost:3000";
	const urlParsed = safeRun(() => new URL(mergedUrl, urlBase));
	if (!urlParsed.ok) return err(INVALID_REQUEST_FACTORY_URL, "The request URL could not be parsed. Check the server URL and path for invalid characters.");
	const url = urlParsed.data;
	const operationQueryParams = new URLSearchParams();
	for (const [key, value] of request.query.entries()) operationQueryParams.append(replaceEnvVariables(key, variables), replaceEnvVariables(value, variables));
	const securityQueryParams = new URLSearchParams();
	for (const [key, value] of options.securityQueryParams.entries()) securityQueryParams.append(key, value);
	if (request.querystring) url.search = [serializeQuerystringParameter(request.querystring, variables), mergeSearchParams(operationQueryParams, securityQueryParams).toString()].filter(Boolean).join("&");
	else url.search = mergeSearchParams(url.searchParams, operationQueryParams, securityQueryParams).toString();
	if (request.serializedQuery?.length) {
		const query = request.serializedQuery.map((value) => replaceEnvVariables(value, variables)).join("&");
		url.search = [url.search.slice(1), query].filter(Boolean).join("&");
	}
	return ok(url.toString());
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/random-data.js
/** Pre-generated random data pools to avoid bundling faker.js (~800 KB). */
var uuids = [
	"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
	"f47ac10b-58cc-4372-a567-0e02b2c3d479",
	"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
	"6ba7b810-9dad-11d1-80b4-00c04fd430c8",
	"a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
	"3fa85f64-5717-4562-b3fc-2c963f66afa6",
	"550e8400-e29b-41d4-a716-446655440000",
	"c56a4180-65aa-42ec-a945-5fd21dec0538",
	"7c9e6679-7425-40de-944b-e07fc1f90ae7",
	"e4eaaaf2-d142-11e1-b3e4-080027620cdd",
	"aab5d5fd-70c1-11e5-a4fb-b026b977eb28",
	"2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d",
	"d9428888-122b-11e1-b85c-61cd3cbed5a2",
	"fb1a38e6-4be3-4e38-b8ec-c0c2c2d9e2a7",
	"01234567-89ab-cdef-0123-456789abcdef"
];
var alphanumericChars = "abcdefghijklmnopqrstuvwxyz0123456789";
var hexColors = [
	"#e34f26",
	"#3498db",
	"#2ecc71",
	"#9b59b6",
	"#f1c40f",
	"#1abc9c",
	"#e74c3c",
	"#2c3e50",
	"#d35400",
	"#8e44ad",
	"#27ae60",
	"#c0392b",
	"#16a085",
	"#f39c12",
	"#7f8c8d"
];
var abbreviations = [
	"HTTP",
	"SQL",
	"TCP",
	"JSON",
	"XML",
	"API",
	"SSL",
	"CSS",
	"HTML",
	"RAM",
	"FTP",
	"SSH",
	"DNS",
	"URL",
	"USB"
];
var ipv4Addresses = [
	"192.168.1.42",
	"10.0.0.134",
	"172.16.254.1",
	"203.0.113.50",
	"198.51.100.23",
	"100.24.56.78",
	"54.239.28.85",
	"13.107.42.14",
	"151.101.1.140",
	"216.58.214.206",
	"93.184.216.34",
	"104.16.249.249",
	"172.217.14.206",
	"185.199.108.153",
	"140.82.121.4"
];
var ipv6Addresses = [
	"2001:0db8:85a3:0000:0000:8a2e:0370:7334",
	"fe80:0000:0000:0000:0202:b3ff:fe1e:8329",
	"2607:f8b0:4004:0800:0000:0000:0000:200e",
	"2001:4860:4860:0000:0000:0000:0000:8888",
	"2a03:2880:f10c:0083:face:b00c:0000:25de",
	"fd12:3456:789a:1000:0000:0000:0000:0001",
	"2600:1f18:2489:8200:a953:2c7b:e7e0:d12f",
	"2001:0db8:0000:0042:0000:8a2e:0370:7334",
	"fe80:0000:0000:0000:4c5a:e8ff:fe7c:3d92",
	"2001:0db8:aaaa:bbbb:cccc:dddd:eeee:0001"
];
var macAddresses = [
	"00:1A:2B:3C:4D:5E",
	"A4:83:E7:2D:6B:9F",
	"48:2C:6A:1E:59:3D",
	"00:50:56:C0:00:08",
	"D4:BE:D9:19:6F:F2",
	"3C:22:FB:4A:88:C1",
	"08:00:27:5B:8E:A4",
	"F0:18:98:43:65:DA",
	"5C:CF:7F:2B:1D:E3",
	"00:0C:29:3E:71:BC",
	"1C:6F:65:A2:8D:49",
	"B8:27:EB:63:4F:78"
];
var locales = [
	"en",
	"es",
	"fr",
	"de",
	"it",
	"pt",
	"ja",
	"zh",
	"ko",
	"ar",
	"ru",
	"nl",
	"sv",
	"pl",
	"da",
	"fi",
	"nb",
	"tr",
	"hi",
	"th"
];
var userAgents = [
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
	"Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
	"Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1",
	"Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.43 Mobile Safari/537.36",
	"Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
	"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0"
];
var protocols = ["http", "https"];
var semvers = [
	"1.0.0",
	"2.3.1",
	"0.9.4",
	"3.12.0",
	"1.5.7",
	"4.0.0-beta.1",
	"0.1.0",
	"2.0.3",
	"1.2.0",
	"5.4.2",
	"3.1.0",
	"0.8.12",
	"2.7.5",
	"1.14.0",
	"6.0.0"
];
var firstNames = [
	"Emma",
	"Liam",
	"Olivia",
	"Noah",
	"Ava",
	"James",
	"Sophia",
	"Oliver",
	"Isabella",
	"Lucas",
	"Mia",
	"Ethan",
	"Charlotte",
	"Mason",
	"Amelia"
];
var lastNames = [
	"Smith",
	"Johnson",
	"Williams",
	"Brown",
	"Jones",
	"Garcia",
	"Miller",
	"Davis",
	"Rodriguez",
	"Martinez",
	"Hernandez",
	"Lopez",
	"Gonzalez",
	"Wilson",
	"Anderson"
];
var namePrefixes = [
	"Mr.",
	"Mrs.",
	"Ms.",
	"Dr.",
	"Prof.",
	"Rev.",
	"Sir",
	"Mx."
];
var nameSuffixes = [
	"Jr.",
	"Sr.",
	"II",
	"III",
	"IV",
	"PhD",
	"MD",
	"DDS",
	"Esq."
];
var jobAreas = [
	"Marketing",
	"Engineering",
	"Finance",
	"Operations",
	"Human Resources",
	"Sales",
	"Research",
	"Design",
	"Legal",
	"Product",
	"Data",
	"Support",
	"Quality",
	"Security",
	"Communications"
];
var jobDescriptors = [
	"Senior",
	"Lead",
	"Junior",
	"Principal",
	"Chief",
	"Associate",
	"Global",
	"Regional",
	"Internal",
	"Dynamic",
	"Staff",
	"Executive",
	"National",
	"Strategic",
	"Corporate"
];
var jobTitles = [
	"Software Engineer",
	"Product Manager",
	"Data Analyst",
	"UX Designer",
	"DevOps Engineer",
	"Marketing Director",
	"Sales Representative",
	"Financial Analyst",
	"Project Manager",
	"QA Engineer",
	"Technical Writer",
	"System Administrator",
	"Business Analyst",
	"Account Executive",
	"Operations Manager"
];
var jobTypes = [
	"Full-time",
	"Part-time",
	"Contract",
	"Freelance",
	"Internship",
	"Temporary",
	"Remote",
	"Hybrid",
	"Consultant",
	"Seasonal"
];
var phoneNumbers = [
	"(555) 123-4567",
	"(555) 987-6543",
	"(555) 246-8135",
	"(555) 369-2580",
	"(555) 741-8520",
	"(555) 852-9631",
	"(555) 147-2583",
	"(555) 963-8520",
	"(555) 321-6540",
	"(555) 654-9870",
	"(555) 789-0123",
	"(555) 234-5678",
	"(555) 876-5432",
	"(555) 468-1357",
	"(555) 531-2468"
];
var cities = [
	"New York",
	"London",
	"Tokyo",
	"Paris",
	"Sydney",
	"Toronto",
	"Berlin",
	"Singapore",
	"Mumbai",
	"São Paulo",
	"Amsterdam",
	"Seoul",
	"Dublin",
	"Barcelona",
	"Melbourne"
];
var streetNames = [
	"Main Street",
	"Oak Avenue",
	"Park Boulevard",
	"Cedar Lane",
	"Elm Drive",
	"Maple Court",
	"Pine Road",
	"Walnut Street",
	"Birch Avenue",
	"Cherry Lane",
	"Willow Way",
	"Spruce Circle",
	"Aspen Drive",
	"Hickory Place",
	"Chestnut Road"
];
var streetAddresses = [
	"123 Main Street",
	"456 Oak Avenue",
	"789 Park Boulevard",
	"321 Cedar Lane",
	"654 Elm Drive",
	"987 Maple Court",
	"147 Pine Road",
	"258 Walnut Street",
	"369 Birch Avenue",
	"741 Cherry Lane",
	"852 Willow Way",
	"963 Spruce Circle",
	"159 Aspen Drive",
	"357 Hickory Place",
	"486 Chestnut Road"
];
var countries = [
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"Germany",
	"France",
	"Japan",
	"Brazil",
	"India",
	"Netherlands",
	"South Korea",
	"Singapore",
	"Ireland",
	"Spain",
	"Sweden"
];
var countryCodes = [
	"US",
	"GB",
	"CA",
	"AU",
	"DE",
	"FR",
	"JP",
	"BR",
	"IN",
	"NL",
	"KR",
	"SG",
	"IE",
	"ES",
	"SE",
	"IT",
	"NO",
	"DK",
	"FI",
	"CH"
];
var latitudes = [
	"40.7128",
	"-33.8688",
	"51.5074",
	"35.6762",
	"48.8566",
	"-23.5505",
	"19.4326",
	"55.7558",
	"1.3521",
	"37.7749",
	"52.3676",
	"34.0522",
	"41.9028",
	"39.9042",
	"25.2048"
];
var longitudes = [
	"-74.0060",
	"151.2093",
	"-0.1278",
	"139.6503",
	"2.3522",
	"-46.6333",
	"-99.1332",
	"37.6173",
	"103.8198",
	"-122.4194",
	"4.9041",
	"-118.2437",
	"12.4964",
	"116.4074",
	"55.2708"
];
var avatarUrls = [
	"https://avatars.githubusercontent.com/u/12345678",
	"https://avatars.githubusercontent.com/u/23456789",
	"https://avatars.githubusercontent.com/u/34567890",
	"https://avatars.githubusercontent.com/u/45678901",
	"https://avatars.githubusercontent.com/u/56789012",
	"https://avatars.githubusercontent.com/u/67890123",
	"https://avatars.githubusercontent.com/u/78901234",
	"https://avatars.githubusercontent.com/u/89012345",
	"https://avatars.githubusercontent.com/u/90123456",
	"https://avatars.githubusercontent.com/u/10234567"
];
var imageUrls = [
	"https://picsum.photos/seed/scalar1/640/480",
	"https://picsum.photos/seed/scalar2/640/480",
	"https://picsum.photos/seed/scalar3/640/480",
	"https://picsum.photos/seed/scalar4/640/480",
	"https://picsum.photos/seed/scalar5/640/480",
	"https://picsum.photos/seed/scalar6/640/480",
	"https://picsum.photos/seed/scalar7/640/480",
	"https://picsum.photos/seed/scalar8/640/480",
	"https://picsum.photos/seed/scalar9/640/480",
	"https://picsum.photos/seed/scalar10/640/480"
];
var flickrBase = "https://loremflickr.com/640/480";
var abstractImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/abstract?lock=${i + 1}`);
var animalsImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/animals?lock=${i + 1}`);
var businessImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/business?lock=${i + 1}`);
var catsImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/cat?lock=${i + 1}`);
var cityImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/city?lock=${i + 1}`);
var foodImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/food?lock=${i + 1}`);
var nightlifeImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/nightlife?lock=${i + 1}`);
var fashionImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/fashion?lock=${i + 1}`);
var peopleImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/people?lock=${i + 1}`);
var natureImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/nature?lock=${i + 1}`);
var sportsImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/sports?lock=${i + 1}`);
var transportImageUrls = Array.from({ length: 10 }, (_, i) => `${flickrBase}/transport?lock=${i + 1}`);
var dataUris = [
	"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Crect%20fill%3D%22%233498db%22%20width%3D%2264%22%20height%3D%2264%22%2F%3E%3C%2Fsvg%3E",
	"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Crect%20fill%3D%22%23e74c3c%22%20width%3D%2264%22%20height%3D%2264%22%2F%3E%3C%2Fsvg%3E",
	"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Crect%20fill%3D%22%232ecc71%22%20width%3D%2264%22%20height%3D%2264%22%2F%3E%3C%2Fsvg%3E",
	"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Crect%20fill%3D%22%239b59b6%22%20width%3D%2264%22%20height%3D%2264%22%2F%3E%3C%2Fsvg%3E",
	"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%3E%3Crect%20fill%3D%22%23f1c40f%22%20width%3D%2264%22%20height%3D%2264%22%2F%3E%3C%2Fsvg%3E"
];
var bankAccountNumbers = [
	"34042448",
	"34102758",
	"02997566",
	"52631809",
	"75412296",
	"37762776",
	"44117882",
	"13865687",
	"44377086",
	"74440091"
];
var bankAccountNames = [
	"Personal Checking",
	"Savings Account",
	"Money Market",
	"Home Loan",
	"Auto Loan",
	"Investment Account",
	"Business Checking",
	"Credit Card",
	"Retirement Fund",
	"College Savings"
];
var bicCodes = [
	"DEUTDEFF",
	"BNPAFRPP",
	"CHASUS33",
	"HSBCGB2L",
	"COBADEFF",
	"SCBLSGSG",
	"ANZBAU3M",
	"CITIUS33",
	"BOFAUS3N",
	"NWBKGB2L"
];
var ibanNumbers = [
	"GB29NWBK60161331926819",
	"DE89370400440532013000",
	"FR7630006000011234567890189",
	"ES9121000418450200051332",
	"IT60X0542811101000000123456",
	"NL91ABNA0417164300",
	"CH9300762011623852957",
	"BE68539007547034",
	"AT611904300234573201",
	"FI2112345600000785"
];
var transactionTypes = [
	"deposit",
	"withdrawal",
	"payment",
	"invoice",
	"transfer"
];
var currencyCodes = [
	"USD",
	"EUR",
	"GBP",
	"JPY",
	"AUD",
	"CAD",
	"CHF",
	"CNY",
	"INR",
	"BRL",
	"SEK",
	"NOK",
	"DKK",
	"SGD",
	"HKD"
];
var currencyNames = [
	"US Dollar",
	"Euro",
	"British Pound",
	"Japanese Yen",
	"Australian Dollar",
	"Canadian Dollar",
	"Swiss Franc",
	"Chinese Yuan",
	"Indian Rupee",
	"Brazilian Real",
	"Swedish Krona",
	"Norwegian Krone",
	"Danish Krone",
	"Singapore Dollar",
	"Hong Kong Dollar"
];
var currencySymbols = [
	"$",
	"€",
	"£",
	"¥",
	"A$",
	"C$",
	"CHF",
	"¥",
	"₹",
	"R$"
];
var bitcoinAddresses = [
	"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
	"3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
	"bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
	"1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
	"3Kzh9qAqVWQhEsfQz7zEQL1EuSx5tyNLNS",
	"1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
	"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
	"3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
	"1P5ZEDWTKTFGxQjZphgWPQUpe554WKDfHQ",
	"bc1q42lja79elem0anu8q860g3milve2ycq5t8g3ux"
];
var companyNames = [
	"Acme Corp",
	"Globex",
	"Initech",
	"Umbrella Industries",
	"Stark Enterprises",
	"Wayne Corp",
	"Cyberdyne Systems",
	"Tyrell Corp",
	"Soylent Corp",
	"Aperture Science",
	"Massive Dynamic",
	"Oscorp",
	"Abstergo",
	"Weyland-Yutani",
	"Hooli"
];
var companySuffixes = [
	"Inc",
	"LLC",
	"Group",
	"Ltd",
	"PLC",
	"Corp"
];
var buzzPhrases = [
	"leverage agile frameworks",
	"iterate revolutionary convergence",
	"drive seamless solutions",
	"enable viral e-services",
	"synergize scalable supply-chains",
	"harness real-time channels",
	"orchestrate integrated experiences",
	"deliver frictionless partnerships",
	"transform dynamic mindshare",
	"cultivate open-source communities"
];
var buzzAdjectives = [
	"innovative",
	"scalable",
	"seamless",
	"cutting-edge",
	"robust",
	"synergistic",
	"dynamic",
	"holistic",
	"strategic",
	"disruptive",
	"frictionless",
	"proactive",
	"world-class",
	"collaborative",
	"granular"
];
var buzzVerbs = [
	"leverage",
	"iterate",
	"synergize",
	"monetize",
	"orchestrate",
	"disintermediate",
	"harness",
	"incentivize",
	"optimize",
	"streamline",
	"revolutionize",
	"cultivate",
	"empower",
	"facilitate",
	"aggregate"
];
var buzzNouns = [
	"frameworks",
	"paradigms",
	"synergies",
	"platforms",
	"infrastructures",
	"bandwidth",
	"channels",
	"communities",
	"convergence",
	"deliverables",
	"e-markets",
	"experiences",
	"initiatives",
	"interfaces",
	"methodologies"
];
var catchPhrases = [
	"Adaptive zero defect data-warehouse",
	"Automated scalable protocol",
	"Business-focused zero defect hub",
	"Cloned responsive flexibility",
	"Cross-group background collaboration",
	"De-engineered stable conglomeration",
	"Distributed actuating throughput",
	"Enhanced client-server capability",
	"Face to face explicit superstructure",
	"Front-line multimedia interface"
];
var catchPhraseAdjectives = [
	"Adaptive",
	"Advanced",
	"Automated",
	"Balanced",
	"Business-focused",
	"Centralized",
	"Cloned",
	"Configurable",
	"Cross-group",
	"Customizable",
	"De-engineered",
	"Decentralized",
	"Digitized",
	"Distributed",
	"Enhanced"
];
var catchPhraseDescriptors = [
	"24 hour",
	"actuating",
	"analyzing",
	"asymmetric",
	"asynchronous",
	"background",
	"bandwidth-monitored",
	"bi-directional",
	"bifurcated",
	"bottom-line",
	"clear-thinking",
	"client-driven",
	"client-server",
	"coherent",
	"cohesive"
];
var catchPhraseNouns = [
	"ability",
	"access",
	"algorithm",
	"alliance",
	"analyzer",
	"application",
	"approach",
	"architecture",
	"array",
	"attitude",
	"benchmark",
	"budgetary management",
	"capability",
	"capacity",
	"challenge"
];
var databaseColumns = [
	"id",
	"name",
	"email",
	"status",
	"created_at",
	"updated_at",
	"description",
	"amount",
	"category",
	"token",
	"avatar",
	"phone",
	"address",
	"comment",
	"title"
];
var databaseTypes = [
	"int",
	"varchar",
	"text",
	"boolean",
	"date",
	"timestamp",
	"float",
	"bigint",
	"json",
	"uuid",
	"decimal",
	"enum",
	"blob",
	"char",
	"smallint"
];
var databaseCollations = [
	"utf8_general_ci",
	"utf8mb4_unicode_ci",
	"ascii_general_ci",
	"latin1_swedish_ci",
	"utf8_unicode_ci",
	"utf8mb4_general_ci",
	"utf8_bin",
	"latin1_general_ci",
	"utf8mb4_bin",
	"ascii_bin"
];
var databaseEngines = [
	"InnoDB",
	"MyISAM",
	"MEMORY",
	"CSV",
	"ARCHIVE",
	"FEDERATED",
	"NDB",
	"MERGE",
	"BLACKHOLE",
	"EXAMPLE"
];
var weekdays = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
var months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var domainNames = [
	"example.com",
	"test-site.org",
	"my-app.io",
	"dev-portal.net",
	"api-hub.com",
	"code-base.dev",
	"data-flow.co",
	"web-pulse.io",
	"cloud-nest.org",
	"tech-wave.net",
	"open-source.dev",
	"byte-craft.io",
	"pixel-lab.co",
	"node-spark.com",
	"vue-forge.dev"
];
var domainSuffixes = [
	"com",
	"org",
	"net",
	"io",
	"dev",
	"co",
	"info",
	"app",
	"me",
	"xyz"
];
var domainWords = [
	"example",
	"test-site",
	"my-app",
	"dev-portal",
	"api-hub",
	"code-base",
	"data-flow",
	"web-pulse",
	"cloud-nest",
	"tech-wave",
	"open-source",
	"byte-craft",
	"pixel-lab",
	"node-spark",
	"vue-forge"
];
var emails = [
	"emma.smith@example.com",
	"liam.johnson@test.org",
	"olivia.williams@demo.io",
	"noah.brown@sample.net",
	"ava.jones@mail.com",
	"james.garcia@inbox.dev",
	"sophia.miller@webmail.co",
	"oliver.davis@post.io",
	"isabella.rodriguez@email.org",
	"lucas.martinez@connect.net",
	"mia.hernandez@hub.com",
	"ethan.lopez@office.dev",
	"charlotte.gonzalez@corp.io",
	"mason.wilson@biz.co",
	"amelia.anderson@pro.net"
];
var exampleEmails = [
	"emma@example.com",
	"liam@example.org",
	"olivia@example.net",
	"noah@example.com",
	"ava@example.org",
	"james@example.net",
	"sophia@example.com",
	"oliver@example.org",
	"isabella@example.net",
	"lucas@example.com",
	"mia@example.org",
	"ethan@example.net"
];
var usernames = [
	"emma_dev42",
	"liam.codes",
	"olivia_tech",
	"noah_builds",
	"ava.hacks",
	"james_ops",
	"sophia_data",
	"oliver.api",
	"isa_design",
	"lucas_vue",
	"mia_cloud",
	"ethan.stack",
	"char_pixel",
	"mason_byte",
	"amelia_net"
];
var urls = [
	"https://example.com",
	"https://test-site.org",
	"https://my-app.io",
	"https://dev-portal.net",
	"https://api-hub.com",
	"https://code-base.dev",
	"https://data-flow.co",
	"https://web-pulse.io",
	"https://cloud-nest.org",
	"https://tech-wave.net",
	"https://open-source.dev",
	"https://byte-craft.io"
];
var fileNames = [
	"report.pdf",
	"data.csv",
	"image.png",
	"backup.tar.gz",
	"readme.md",
	"config.yml",
	"schema.json",
	"styles.css",
	"app.tsx",
	"index.html",
	"notes.txt",
	"archive.zip",
	"log.xml",
	"script.sh",
	"database.sql"
];
var fileTypes = [
	"application",
	"text",
	"image",
	"audio",
	"video",
	"font",
	"model",
	"multipart",
	"message",
	"chemical"
];
var fileExtensions = [
	"pdf",
	"csv",
	"png",
	"json",
	"md",
	"yml",
	"html",
	"txt",
	"xml",
	"sql",
	"tar",
	"gz",
	"wasm",
	"webp"
];
var commonFileNames = [
	"report.pdf",
	"photo.jpg",
	"document.docx",
	"spreadsheet.xlsx",
	"presentation.pptx",
	"image.png",
	"video.mp4",
	"audio.mp3",
	"archive.zip",
	"readme.txt"
];
var commonFileTypes = [
	"text",
	"application",
	"image",
	"audio",
	"video"
];
var commonFileExtensions = [
	"pdf",
	"jpg",
	"png",
	"gif",
	"mp3",
	"mp4",
	"doc",
	"xls",
	"ppt",
	"txt",
	"zip",
	"html",
	"css",
	"js",
	"json"
];
var filePaths = [
	"/home/user/documents/report.pdf",
	"/var/log/app/server.log",
	"/tmp/upload/image.png",
	"/opt/data/backup.tar.gz",
	"/home/user/projects/app/src/index.ts",
	"/etc/config/settings.yml",
	"/usr/local/bin/script.sh",
	"/home/user/downloads/archive.zip",
	"/var/www/html/index.html",
	"/home/user/.config/app.json"
];
var directoryPaths = [
	"/home/user/documents",
	"/var/log/app",
	"/tmp/uploads",
	"/opt/data",
	"/home/user/projects/app/src",
	"/etc/config",
	"/usr/local/bin",
	"/home/user/downloads",
	"/var/www/html",
	"/home/user/.config"
];
var mimeTypes = [
	"application/json",
	"text/html",
	"image/png",
	"application/pdf",
	"text/plain",
	"image/jpeg",
	"application/xml",
	"text/css",
	"application/javascript",
	"image/svg+xml",
	"application/zip",
	"audio/mpeg",
	"video/mp4",
	"font/woff2",
	"application/octet-stream"
];
var products = [
	"Chair",
	"Computer",
	"Keyboard",
	"Mouse",
	"Table",
	"Phone",
	"Shoes",
	"Shirt",
	"Pants",
	"Hat",
	"Bike",
	"Towels",
	"Gloves",
	"Soap",
	"Tuna"
];
var productAdjectives = [
	"Refined",
	"Elegant",
	"Rustic",
	"Gorgeous",
	"Practical",
	"Fantastic",
	"Handcrafted",
	"Incredible",
	"Licensed",
	"Sleek",
	"Intelligent",
	"Recycled",
	"Modern",
	"Bespoke",
	"Ergonomic"
];
var productMaterials = [
	"Cotton",
	"Steel",
	"Wooden",
	"Concrete",
	"Rubber",
	"Granite",
	"Plastic",
	"Frozen",
	"Soft",
	"Metal",
	"Bronze",
	"Silk",
	"Leather",
	"Ceramic",
	"Bamboo"
];
var productNames = [
	"Refined Cotton Chair",
	"Sleek Steel Computer",
	"Elegant Wooden Table",
	"Practical Rubber Keyboard",
	"Gorgeous Granite Mouse",
	"Rustic Metal Bike",
	"Handcrafted Silk Shirt",
	"Incredible Bamboo Towels",
	"Modern Leather Shoes",
	"Ergonomic Plastic Phone",
	"Fantastic Ceramic Soap",
	"Licensed Bronze Hat",
	"Intelligent Soft Gloves",
	"Bespoke Cotton Pants",
	"Recycled Steel Tuna"
];
var departments = [
	"Electronics",
	"Clothing",
	"Books",
	"Home",
	"Garden",
	"Sports",
	"Toys",
	"Automotive",
	"Grocery",
	"Health",
	"Beauty",
	"Music",
	"Movies",
	"Games",
	"Outdoors"
];
var nouns = [
	"server",
	"database",
	"network",
	"protocol",
	"system",
	"algorithm",
	"interface",
	"module",
	"component",
	"function",
	"framework",
	"library",
	"instance",
	"variable",
	"endpoint"
];
var verbs = [
	"run",
	"build",
	"deploy",
	"parse",
	"fetch",
	"render",
	"compile",
	"stream",
	"cache",
	"merge",
	"sync",
	"push",
	"pull",
	"test",
	"debug"
];
var ingVerbs = [
	"running",
	"building",
	"deploying",
	"parsing",
	"fetching",
	"rendering",
	"compiling",
	"streaming",
	"caching",
	"merging",
	"syncing",
	"pushing",
	"pulling",
	"testing",
	"debugging"
];
var adjectives = [
	"fast",
	"secure",
	"scalable",
	"robust",
	"dynamic",
	"modular",
	"stable",
	"lightweight",
	"portable",
	"resilient",
	"efficient",
	"responsive",
	"concurrent",
	"stateless",
	"distributed"
];
var words = [
	"pixel",
	"quantum",
	"cipher",
	"matrix",
	"vector",
	"nexus",
	"pulse",
	"flux",
	"forge",
	"prism",
	"vortex",
	"helix",
	"orbit",
	"spark",
	"nebula"
];
var loremWords = [
	"lorem",
	"ipsum",
	"dolor",
	"sit",
	"amet",
	"consectetur",
	"adipiscing",
	"elit",
	"sed",
	"do",
	"eiusmod",
	"tempor",
	"incididunt",
	"ut",
	"labore",
	"et",
	"dolore",
	"magna",
	"aliqua",
	"enim"
];
var loremSentences = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
	"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
	"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
	"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
	"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
	"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
	"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
];
var loremParagraphs = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
	"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
];
var loremSlugs = [
	"lorem-ipsum-dolor",
	"sed-tempor-incididunt",
	"amet-consectetur-adipiscing",
	"eiusmod-labore-dolore",
	"veniam-nostrud-exercitation",
	"voluptate-velit-cillum",
	"occaecat-cupidatat-proident",
	"perspiciatis-omnis-natus",
	"aspernatur-odit-fugit",
	"dolorem-ipsum-amet"
];
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/functions.js
/** Pick a random element from a non-empty pre-generated pool. */
var pick = (pool) => pool[Math.floor(Math.random() * pool.length)];
/** Generate a random integer in [min, max]. */
var randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
/** Generate a random numeric string of the given length. */
var numericString = (length) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
/** Generate a random alphanumeric string of the given length. */
var alphanumeric = (length) => Array.from({ length }, () => alphanumericChars[Math.floor(Math.random() * alphanumericChars.length)]).join("");
/** Generate a future ISO timestamp (1–365 days from now). */
var futureDate = () => {
	const ms = Date.now() + randInt(1, 365) * 864e5;
	return new Date(ms).toISOString();
};
/** Generate a past ISO timestamp (1–365 days ago). */
var pastDate = () => {
	const ms = Date.now() - randInt(1, 365) * 864e5;
	return new Date(ms).toISOString();
};
/** Generate a recent ISO timestamp (1–3 days ago). */
var recentDate = () => {
	const ms = Date.now() - randInt(1, 3) * 864e5;
	return new Date(ms).toISOString();
};
/** Pick N random words from a pool and join them. */
var pickWords = (pool, min, max) => {
	const count = randInt(min, max);
	return Array.from({ length: count }, () => pick(pool)).join(" ");
};
/** Pick N random sentences and join them. */
var pickSentences = (pool, min, max) => {
	const count = randInt(min, max);
	return Array.from({ length: count }, () => pick(pool)).join(" ");
};
/** Pick N random lines (sentences) and join with newlines. */
var pickLines = (pool, min, max) => {
	const count = randInt(min, max);
	return Array.from({ length: count }, () => pick(pool)).join("\n");
};
var contextFunctions = {
	$guid: {
		fn: () => pick(uuids),
		comment: "A uuid-v4 style guid"
	},
	$timestamp: {
		fn: () => Math.floor(Date.now() / 1e3).toString(),
		comment: "The current UNIX timestamp in seconds"
	},
	$isoTimestamp: {
		fn: () => (/* @__PURE__ */ new Date()).toISOString(),
		comment: "The current ISO timestamp at zero UTC"
	},
	$randomUUID: {
		fn: () => pick(uuids),
		comment: "A random 36-character UUID"
	},
	$randomAlphaNumeric: {
		fn: () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)] ?? "a",
		comment: "A random alpha-numeric character"
	},
	$randomBoolean: {
		fn: () => Math.random() < .5 ? "true" : "false",
		comment: "A random boolean value"
	},
	$randomInt: {
		fn: () => randInt(0, 1e3).toString(),
		comment: "A random integer between 0 and 1000"
	},
	$randomColor: {
		fn: () => pick(hexColors),
		comment: "A random color in hex format"
	},
	$randomHexColor: {
		fn: () => pick(hexColors),
		comment: "A random hex value"
	},
	$randomAbbreviation: {
		fn: () => pick(abbreviations),
		comment: "A random abbreviation"
	},
	$randomIP: {
		fn: () => pick(ipv4Addresses),
		comment: "A random IPv4 address"
	},
	$randomIPV6: {
		fn: () => pick(ipv6Addresses),
		comment: "A random IPv6 address"
	},
	$randomMACAddress: {
		fn: () => pick(macAddresses),
		comment: "A random MAC address"
	},
	$randomPassword: {
		fn: () => alphanumeric(15),
		comment: "A random 15-character alpha-numeric password"
	},
	$randomLocale: {
		fn: () => pick(locales),
		comment: "A random two-letter language code (ISO 639-1)"
	},
	$randomUserAgent: {
		fn: () => pick(userAgents),
		comment: "A random user agent"
	},
	$randomProtocol: {
		fn: () => pick(protocols),
		comment: "A random internet protocol"
	},
	$randomSemver: {
		fn: () => pick(semvers),
		comment: "A random semantic version number"
	},
	$randomFirstName: {
		fn: () => pick(firstNames),
		comment: "A random first name"
	},
	$randomLastName: {
		fn: () => pick(lastNames),
		comment: "A random last name"
	},
	$randomFullName: {
		fn: () => `${pick(firstNames)} ${pick(lastNames)}`,
		comment: "A random first and last name"
	},
	$randomNamePrefix: {
		fn: () => pick(namePrefixes),
		comment: "A random name prefix"
	},
	$randomNameSuffix: {
		fn: () => pick(nameSuffixes),
		comment: "A random name suffix"
	},
	$randomJobArea: {
		fn: () => pick(jobAreas),
		comment: "A random job area"
	},
	$randomJobDescriptor: {
		fn: () => pick(jobDescriptors),
		comment: "A random job descriptor"
	},
	$randomJobTitle: {
		fn: () => pick(jobTitles),
		comment: "A random job title"
	},
	$randomJobType: {
		fn: () => pick(jobTypes),
		comment: "A random job type"
	},
	$randomPhoneNumber: {
		fn: () => pick(phoneNumbers),
		comment: "A random ten-digit phone number"
	},
	$randomPhoneNumberExt: {
		fn: () => `${randInt(10, 99)}-${pick(phoneNumbers)}`,
		comment: "A random phone number prefixed with a two-digit extension (10–99)"
	},
	$randomCity: {
		fn: () => pick(cities),
		comment: "A random city name"
	},
	$randomStreetName: {
		fn: () => pick(streetNames),
		comment: "A random street name"
	},
	$randomStreetAddress: {
		fn: () => pick(streetAddresses),
		comment: "A random street address"
	},
	$randomCountry: {
		fn: () => pick(countries),
		comment: "A random country"
	},
	$randomCountryCode: {
		fn: () => pick(countryCodes),
		comment: "A random two-letter country code (ISO 3166-1 alpha-2)"
	},
	$randomLatitude: {
		fn: () => pick(latitudes),
		comment: "A random latitude coordinate"
	},
	$randomLongitude: {
		fn: () => pick(longitudes),
		comment: "A random longitude coordinate"
	},
	$randomAvatarImage: {
		fn: () => pick(avatarUrls),
		comment: "A random avatar image"
	},
	$randomImageUrl: {
		fn: () => pick(imageUrls),
		comment: "A URL of a random image"
	},
	$randomAbstractImage: {
		fn: () => pick(abstractImageUrls),
		comment: "A URL of a random abstract image"
	},
	$randomAnimalsImage: {
		fn: () => pick(animalsImageUrls),
		comment: "A URL of a random animal image"
	},
	$randomBusinessImage: {
		fn: () => pick(businessImageUrls),
		comment: "A URL of a random stock business image"
	},
	$randomCatsImage: {
		fn: () => pick(catsImageUrls),
		comment: "A URL of a random cat image"
	},
	$randomCityImage: {
		fn: () => pick(cityImageUrls),
		comment: "A URL of a random city image"
	},
	$randomFoodImage: {
		fn: () => pick(foodImageUrls),
		comment: "A URL of a random food image"
	},
	$randomNightlifeImage: {
		fn: () => pick(nightlifeImageUrls),
		comment: "A URL of a random nightlife image"
	},
	$randomFashionImage: {
		fn: () => pick(fashionImageUrls),
		comment: "A URL of a random fashion image"
	},
	$randomPeopleImage: {
		fn: () => pick(peopleImageUrls),
		comment: "A URL of a random image of a person"
	},
	$randomNatureImage: {
		fn: () => pick(natureImageUrls),
		comment: "A URL of a random nature image"
	},
	$randomSportsImage: {
		fn: () => pick(sportsImageUrls),
		comment: "A URL of a random sports image"
	},
	$randomTransportImage: {
		fn: () => pick(transportImageUrls),
		comment: "A URL of a random transportation image"
	},
	$randomImageDataUri: {
		fn: () => pick(dataUris),
		comment: "A random image data URI"
	},
	$randomBankAccount: {
		fn: () => pick(bankAccountNumbers),
		comment: "A random 8-digit bank account number"
	},
	$randomBankAccountName: {
		fn: () => pick(bankAccountNames),
		comment: "A random bank account name"
	},
	$randomCreditCardMask: {
		fn: () => `**** **** **** ${numericString(4)}`,
		comment: "A random masked credit card number"
	},
	$randomBankAccountBic: {
		fn: () => pick(bicCodes),
		comment: "A random BIC (Bank Identifier Code)"
	},
	$randomBankAccountIban: {
		fn: () => pick(ibanNumbers),
		comment: "A random 15-31 character IBAN (International Bank Account Number)"
	},
	$randomTransactionType: {
		fn: () => pick(transactionTypes),
		comment: "A random transaction type"
	},
	$randomCurrencyCode: {
		fn: () => pick(currencyCodes),
		comment: "A random 3-letter currency code (ISO-4217)"
	},
	$randomCurrencyName: {
		fn: () => pick(currencyNames),
		comment: "A random currency name"
	},
	$randomCurrencySymbol: {
		fn: () => pick(currencySymbols),
		comment: "A random currency symbol"
	},
	$randomBitcoin: {
		fn: () => pick(bitcoinAddresses),
		comment: "A random bitcoin address"
	},
	$randomCompanyName: {
		fn: () => pick(companyNames),
		comment: "A random company name"
	},
	$randomCompanySuffix: {
		fn: () => pick(companySuffixes),
		comment: "A random company suffix"
	},
	$randomBs: {
		fn: () => pick(buzzPhrases),
		comment: "A random phrase of business-speak"
	},
	$randomBsAdjective: {
		fn: () => pick(buzzAdjectives),
		comment: "A random business-speak adjective"
	},
	$randomBsBuzz: {
		fn: () => pick(buzzVerbs),
		comment: "A random business-speak buzzword"
	},
	$randomBsNoun: {
		fn: () => pick(buzzNouns),
		comment: "A random business-speak noun"
	},
	$randomCatchPhrase: {
		fn: () => pick(catchPhrases),
		comment: "A random catchphrase"
	},
	$randomCatchPhraseAdjective: {
		fn: () => pick(catchPhraseAdjectives),
		comment: "A random catchphrase adjective"
	},
	$randomCatchPhraseDescriptor: {
		fn: () => pick(catchPhraseDescriptors),
		comment: "A random catchphrase descriptor"
	},
	$randomCatchPhraseNoun: {
		fn: () => pick(catchPhraseNouns),
		comment: "Randomly generates a catchphrase noun"
	},
	$randomDatabaseColumn: {
		fn: () => pick(databaseColumns),
		comment: "A random database column name"
	},
	$randomDatabaseType: {
		fn: () => pick(databaseTypes),
		comment: "A random database type"
	},
	$randomDatabaseCollation: {
		fn: () => pick(databaseCollations),
		comment: "A random database collation"
	},
	$randomDatabaseEngine: {
		fn: () => pick(databaseEngines),
		comment: "A random database engine"
	},
	$randomDateFuture: {
		fn: futureDate,
		comment: "A random future datetime"
	},
	$randomDatePast: {
		fn: pastDate,
		comment: "A random past datetime"
	},
	$randomDateRecent: {
		fn: recentDate,
		comment: "A random recent datetime"
	},
	$randomWeekday: {
		fn: () => pick(weekdays),
		comment: "A random weekday"
	},
	$randomMonth: {
		fn: () => pick(months),
		comment: "A random month"
	},
	$randomDomainName: {
		fn: () => pick(domainNames),
		comment: "A random domain name"
	},
	$randomDomainSuffix: {
		fn: () => pick(domainSuffixes),
		comment: "A random domain suffix"
	},
	$randomDomainWord: {
		fn: () => pick(domainWords),
		comment: "A random unqualified domain name"
	},
	$randomEmail: {
		fn: () => pick(emails),
		comment: "A random email address"
	},
	$randomExampleEmail: {
		fn: () => pick(exampleEmails),
		comment: "A random email address from an example domain"
	},
	$randomUserName: {
		fn: () => pick(usernames),
		comment: "A random username"
	},
	$randomUrl: {
		fn: () => pick(urls),
		comment: "A random URL"
	},
	$randomFileName: {
		fn: () => pick(fileNames),
		comment: "A random file name (includes uncommon extensions)"
	},
	$randomFileType: {
		fn: () => pick(fileTypes),
		comment: "A random file type (includes uncommon file types)"
	},
	$randomFileExt: {
		fn: () => pick(fileExtensions),
		comment: "A random file extension (includes uncommon extensions)"
	},
	$randomCommonFileName: {
		fn: () => pick(commonFileNames),
		comment: "A random file name"
	},
	$randomCommonFileType: {
		fn: () => pick(commonFileTypes),
		comment: "A random, common file type"
	},
	$randomCommonFileExt: {
		fn: () => pick(commonFileExtensions),
		comment: "A random, common file extension"
	},
	$randomFilePath: {
		fn: () => pick(filePaths),
		comment: "A random file path"
	},
	$randomDirectoryPath: {
		fn: () => pick(directoryPaths),
		comment: "A random directory path"
	},
	$randomMimeType: {
		fn: () => pick(mimeTypes),
		comment: "A random MIME type"
	},
	$randomPrice: {
		fn: () => (Math.random() * 1e3).toFixed(2),
		comment: "A random price between 0.00 and 1000.00"
	},
	$randomProduct: {
		fn: () => pick(products),
		comment: "A random product"
	},
	$randomProductAdjective: {
		fn: () => pick(productAdjectives),
		comment: "A random product adjective"
	},
	$randomProductMaterial: {
		fn: () => pick(productMaterials),
		comment: "A random product material"
	},
	$randomProductName: {
		fn: () => pick(productNames),
		comment: "A random product name"
	},
	$randomDepartment: {
		fn: () => pick(departments),
		comment: "A random commerce department"
	},
	$randomNoun: {
		fn: () => pick(nouns),
		comment: "A random noun"
	},
	$randomVerb: {
		fn: () => pick(verbs),
		comment: "A random verb"
	},
	$randomIngverb: {
		fn: () => pick(ingVerbs),
		comment: "A random verb ending in `-ing`"
	},
	$randomAdjective: {
		fn: () => pick(adjectives),
		comment: "A random adjective"
	},
	$randomWord: {
		fn: () => pick(words),
		comment: "A random word"
	},
	$randomWords: {
		fn: () => pickWords(words, 2, 5),
		comment: "Some random words"
	},
	$randomPhrase: {
		fn: () => pick(buzzPhrases),
		comment: "A random phrase"
	},
	$randomLoremWord: {
		fn: () => pick(loremWords),
		comment: "A random word of lorem ipsum text"
	},
	$randomLoremWords: {
		fn: () => pickWords(loremWords, 3, 3),
		comment: "Some random words of lorem ipsum text"
	},
	$randomLoremSentence: {
		fn: () => pick(loremSentences),
		comment: "A random sentence of lorem ipsum text"
	},
	$randomLoremSentences: {
		fn: () => pickSentences(loremSentences, 2, 6),
		comment: "A random 2 to 6 sentences of lorem ipsum text"
	},
	$randomLoremParagraph: {
		fn: () => pick(loremParagraphs),
		comment: "A random paragraph of lorem ipsum text"
	},
	$randomLoremParagraphs: {
		fn: () => pickSentences(loremParagraphs, 3, 3),
		comment: "3 random paragraphs of lorem ipsum text"
	},
	$randomLoremText: {
		fn: () => pickSentences(loremParagraphs, 1, 3),
		comment: "A random amount of lorem ipsum text"
	},
	$randomLoremSlug: {
		fn: () => pick(loremSlugs),
		comment: "A random lorem ipsum URL slug"
	},
	$randomLoremLines: {
		fn: () => pickLines(loremSentences, 1, 5),
		comment: "1 to 5 random lines of lorem ipsum"
	}
};
var getContextFunctionComment = (name) => contextFunctions[name].comment;
/** Keys surfaced first in empty-query autocomplete (common request placeholders). */
var POPULAR_CONTEXT_FUNCTION_KEYS = [
	"$guid",
	"$timestamp",
	"$isoTimestamp",
	"$randomUUID",
	"$randomEmail",
	"$randomInt",
	"$randomFirstName",
	"$randomLastName"
];
var CONTEXT_FUNCTION_NAMES = Object.keys(contextFunctions);
var isContextFunctionName = (name) => Object.hasOwn(contextFunctions, name);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/build-request.js
var FORBIDDEN_HEADERS = [
	{
		header: "date",
		scalarHeader: X_SCALAR_DATE
	},
	{
		header: "dnt",
		scalarHeader: X_SCALAR_DNT
	},
	{
		header: "referer",
		scalarHeader: X_SCALAR_REFERER
	},
	{
		header: "user-agent",
		scalarHeader: X_SCALAR_USER_AGENT
	}
];
var formatSecurityValue = (security, replace) => {
	const substitutedValue = replaceEnvVariables(security.value, replace);
	if (security.format === "basic") return `Basic ${encode(substitutedValue)}`;
	if (security.format === "bearer") return `Bearer ${substitutedValue.trim()}`;
	return substitutedValue;
};
var createEnvReplaceFn = (envVariables) => {
	return (value) => {
		if (isContextFunctionName(value)) return contextFunctions[value].fn() ?? null;
		return envVariables[value] ?? null;
	};
};
/**
* Resolved request URL string (path vars, operation query, **security query**
* params, env substitution, reserved-query rules) without proxy rewriting —
* aligned with {@link buildRequest} before `redirectToProxy`.
*
* By default allows incomplete merged URLs (same as permissive copy / preview); pass
* `allowMissingRequestServerBase: false` to enforce a complete absolute URL.
*/
var resolveExecutableRequestUrl = (request, envVariables, resolveOptions) => {
	const replace = createEnvReplaceFn(envVariables);
	const securityQueryParams = new URLSearchParams();
	if (!request.options?.disableSecurity) request.security.forEach((security) => {
		if (security.in !== "query") return;
		const name = replaceEnvVariables(security.name, replace);
		securityQueryParams.append(name, formatSecurityValue(security, replace));
	});
	const requestUrl = resolveRequestFactoryUrl(request, {
		envVariables: replace,
		securityQueryParams,
		allowMissingRequestServerBase: resolveOptions?.allowMissingRequestServerBase ?? true
	});
	if (!requestUrl.ok) throw new Error(requestUrl.message ?? requestUrl.error);
	return applyAllowReservedToUrl(requestUrl.data, request.allowedReservedQueryParameters ?? /* @__PURE__ */ new Set());
};
/** Catch-all code when an unexpected synchronous error escapes a helper during request construction. */
var BUILD_REQUEST_FAILED = "BUILD_REQUEST_FAILED";
var buildRequest = (request, options) => {
	const guarded = safeRun(() => buildRequestInner(request, options));
	if (!guarded.ok) return err(BUILD_REQUEST_FAILED, guarded.error);
	return guarded.data;
};
var buildRequestInner = (request, options) => {
	/** Replace the value with the environment variable or context function */
	const replace = createEnvReplaceFn(options.envVariables);
	/** Create a new abort controller */
	const controller = new AbortController();
	/** Create a new headers object with the replaced values */
	const headers = (() => {
		const headers = new Headers();
		request.headers.forEach((value, key) => {
			headers.set(replaceEnvVariables(key, replace), replaceEnvVariables(value, replace));
		});
		return headers;
	})();
	/** Create a new body object with the replaced values */
	const body = (() => {
		if (request.body?.mode === "multipart") {
			const encoded = encodeMultipartBody(request.body.value, request.body.contentType, (value) => replaceEnvVariables(value, replace));
			headers.set("content-type", encoded.type);
			return encoded;
		}
		if (request.body?.mode === "raw") {
			if (typeof request.body.value === "string") return replaceEnvVariables(request.body.value, replace);
			return request.body.value;
		}
		if (request.body?.mode === "formdata") {
			const resolvedParts = request.body.value.map((item) => ({
				...item,
				key: replaceEnvVariables(item.key, replace)
			})).map((item) => item.type === "text" ? {
				...item,
				value: replaceEnvVariables(item.value, replace)
			} : item);
			if (request.body.value.some((item) => item.type === "text" && item.contentType)) {
				const encoded = encodeMultipartBody(resolvedParts);
				headers.set("content-type", encoded.type);
				return encoded;
			}
			const form = new FormData();
			resolvedParts.forEach((item) => form.append(item.key, item.value));
			return form;
		}
		if (request.body?.mode === "urlencoded") return new URLSearchParams(request.body.value.map((item) => [replaceEnvVariables(item.key, replace), replaceEnvVariables(item.value, replace)]));
		return null;
	})();
	const securityQueryParams = new URLSearchParams();
	const securityCookies = [];
	/** Build the request security unless the consumer opted out via disableSecurity  */
	if (!request.options?.disableSecurity) request.security.forEach((security) => {
		const name = replaceEnvVariables(security.name, replace);
		const securityValue = formatSecurityValue(security, replace);
		if (security.in === "header") {
			headers.append(name, securityValue);
			return;
		}
		if (security.in === "query") {
			securityQueryParams.append(name, securityValue);
			return;
		}
		if (security.in === "cookie") securityCookies.push({
			name,
			value: securityValue,
			isDisabled: false
		});
	});
	/** Resolve the request URL with the replaced values */
	const requestUrlResult = resolveRequestFactoryUrl(request, {
		envVariables: replace,
		securityQueryParams,
		allowMissingRequestServerBase: options.allowMissingRequestServerBase
	});
	if (!requestUrlResult.ok) return err(requestUrlResult.error, requestUrlResult.message);
	const requestUrl = requestUrlResult.data;
	/** Check if the request should be proxied */
	const isUsingProxy = shouldUseProxy(request.proxyUrl, requestUrl);
	/** Build the request cookie header */
	const cookieHeader = buildRequestCookieHeader({
		cookies: [...request.cookies, ...securityCookies].map((c) => ({
			...c,
			name: replaceEnvVariables(c.name, replace),
			value: replaceEnvVariables(c.value, replace)
		})),
		originalCookieHeader: headers.get("cookie"),
		url: requestUrl,
		useCustomCookieHeader: (isUsingProxy || request.options?.isElectron) ?? false
	});
	/** Add the cookie header to the headers */
	if (cookieHeader) headers.set(cookieHeader.name, cookieHeader.value);
	/**
	* Browsers strip some forbidden headers from outgoing requests.
	* For a small, explicit allowlist we mirror those values to `X-Scalar-*`
	* so proxy/Electron can apply them server-side.
	*/
	if (isUsingProxy || request.options?.isElectron) FORBIDDEN_HEADERS.forEach(({ header, scalarHeader }) => {
		const headerValue = headers.get(header);
		if (headerValue) {
			headers.set(scalarHeader, headerValue);
			headers.delete(header);
		}
	});
	/** Encode the URL with the allowed reserved query parameters */
	const encodedUrl = applyAllowReservedToUrl(requestUrl, request.allowedReservedQueryParameters ?? /* @__PURE__ */ new Set());
	return ok({
		requestPayload: [isUsingProxy ? redirectToProxy(request.proxyUrl, encodedUrl) : encodedUrl, {
			/**
			* Ensure that all methods are uppercased (though only needed for patch)
			*
			* @see https://github.com/whatwg/fetch/issues/50
			*/
			method: isHttpMethod(request.method) ? request.method.toUpperCase() : request.method,
			headers,
			body,
			cache: request.cache,
			signal: controller.signal
		}],
		controller,
		isUsingProxy
	});
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/de-serialize-parameter.js
/**
* Coerces a parameter example from the UI (always a string from CodeInput) into a value
* request building can serialize. Only structured types are parsed; primitives stay as strings.
*/
var deSerializeParameter = (example, param) => {
	if ("content" in param) return deSerializeContentExample(example, Object.keys(param.content ?? {})[0] ?? "");
	if ("schema" in param) return deSerializeSchemaValue(example, param.schema);
	return example;
};
/**
* Content-based parameters (e.g. `application/json`) may hold full JSON payloads;
* parse those so nested structure is available to serializers.
*/
var deSerializeContentExample = (example, contentType) => {
	if (typeof example === "string" && contentType.includes("json")) try {
		return JSON.parse(example);
	} catch {
		return example;
	}
	return example;
};
/** Schema types that must become arrays/objects — serializers branch on `Array.isArray` / objects. */
var structuredSchemaTypes = /* @__PURE__ */ new Set(["array", "object"]);
/**
* Find the structured (`array` or `object`) type a schema represents, looking through
* `anyOf`/`oneOf`/`allOf` composition.
*
* Optional array/object parameters are commonly described as `anyOf: [{ type: 'array' }, { type: 'null' }]`
* (e.g. FastAPI/Pydantic `Optional[List[str]]`). Without unwrapping these we would treat the value as a
* plain string and send a single `id=a,b` query parameter instead of repeating `id=a&id=b`.
*/
var getStructuredType = (schema) => {
	const resolved = getResolvedRef(schema);
	if (!isObjectLike(resolved)) return;
	if ("type" in resolved && resolved.type) {
		const type = Array.isArray(resolved.type) ? resolved.type.find((t) => structuredSchemaTypes.has(t)) : resolved.type;
		if (type === "array" || type === "object") return type;
	}
	for (const key of [
		"anyOf",
		"oneOf",
		"allOf"
	]) {
		const subSchemas = resolved[key];
		if (Array.isArray(subSchemas)) for (const subSchema of subSchemas) {
			const type = getStructuredType(subSchema);
			if (type) return type;
		}
	}
};
/**
* Coerces a single schema-typed value from the request editor (always a string from CodeInput)
* back into the structure its schema describes.
*
* Primitives (`string`, `integer`, `number`, `boolean`, `null`) are left as the typed string.
* Only `array` and `object` values are parsed so OpenAPI style serialization can expand them.
*
* Exposed on its own (not just through {@link deSerializeParameter}) so callers that reassemble an
* expanded object parameter from individual rows — e.g. a `deepObject` query parameter edited row by
* row in the API client — can coerce each leaf against its property schema. Otherwise an edited array
* leaf stays the comma-joined display string and collapses back into a single `key=1,2` entry.
*/
var deSerializeSchemaValue = (example, schema) => {
	if (typeof example === "string") {
		const type = getStructuredType(schema);
		if (type) {
			try {
				const parsed = JSON.parse(example);
				if (type !== "array" || Array.isArray(parsed)) return parsed;
				if (typeof parsed === "string") return [parsed];
			} catch {}
			if (type === "array") return example.split(/,\s?/).filter((v) => v !== "");
		}
	}
	return example;
};
//#endregion
//#region node_modules/@scalar/helpers/dist/object/object-entries.js
/** Type safe version of Object.entries */
var objectEntries = (obj) => Object.entries(obj);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/helpers/get-server-variables.js
/**
* Extracts the default values of variables defined in a ServerObject into a simple key-value map.
* Ignores variables with no default value.
*
* @param server The OpenAPI ServerObject (may be null).
* @returns Record of variableName -> defaultValue.
*/
var getServerVariables = (server) => {
	if (!server) return {};
	return objectEntries(server?.variables ?? {}).reduce((acc, [name, variable]) => {
		if (variable.default) acc[name] = variable.default;
		return acc;
	}, {});
};
//#endregion
//#region node_modules/@scalar/helpers/dist/general/is-electron.js
/**
* Checks if the user is in an Electron environment
*
* @returns true if the user is in an Electron environment, false otherwise
*/
var isElectron = () => typeof window !== "undefined" && "electron" in window;
//#endregion
//#region node_modules/@scalar/helpers/dist/http/http-token.js
/** RFC 9110 token grammar, shared by HTTP method and header token validation. */
var HTTP_TOKEN = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
//#endregion
//#region node_modules/@scalar/helpers/dist/http/is-forbidden-http-method.js
/** Methods forbidden by the Fetch standard, irrespective of their body semantics. */
var isForbiddenHttpMethod = (method) => [
	"connect",
	"trace",
	"track"
].includes(method.toLowerCase());
//#endregion
//#region node_modules/@scalar/helpers/dist/http/can-method-have-body.js
/** HTTP Methods which can have a body */
var BODY_METHODS = /* @__PURE__ */ new Set([
	"post",
	"put",
	"patch",
	"delete",
	"query"
]);
/**
* Whether Scalar can send this method with a body in the current runtime.
* Browser-forbidden methods are excluded along with methods whose bodies are unsupported.
*
* When running inside Electron, all requests are also allowed to have a body because the underlying
* undici implementation does not reject it, which matches the behavior users expect from desktop API clients.
*/
var canMethodHaveBody = (method, skipElectron = false) => {
	const normalized = method.toLowerCase();
	if (isElectron() && !skipElectron) return true;
	const isExtensionMethod = !isHttpMethod(method) && HTTP_TOKEN.test(method);
	return !isForbiddenHttpMethod(method) && (BODY_METHODS.has(normalized) || isExtensionMethod);
};
/*** We must purge body from requests that cannot accept it, skips the electron check */
var buildSafeBodyRequest = (url, init) => new Request(url, {
	...init,
	body: canMethodHaveBody(init.method ?? "GET", true) ? init.body : null
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/security/build-request-security.js
/**
* Generates the headers, cookies and query params for selected security schemes
* In the future we can add customization for where the security is applied
*/
var buildRequestSecurity = (selectedSecuritySchemes, emptyTokenPlaceholder = "") => {
	const result = [];
	selectedSecuritySchemes.forEach((scheme) => {
		if (scheme.type === "apiKey") {
			const value = scheme["x-scalar-secret-token"] || emptyTokenPlaceholder;
			if (scheme.in === "header") return result.push({
				in: scheme.in,
				name: scheme.name,
				value
			});
			if (scheme.in === "query") return result.push({
				in: "query",
				name: scheme.name,
				value
			});
			if (scheme.in === "cookie") return result.push({
				in: "cookie",
				name: scheme.name,
				value
			});
		}
		if (scheme.type === "http") {
			if (scheme.scheme === "basic") {
				const username = scheme["x-scalar-secret-username"] || "";
				const password = scheme["x-scalar-secret-password"] || "";
				if (username === "" && password === "") return null;
				return result.push({
					in: "header",
					name: "Authorization",
					value: `${username}:${password}`,
					format: "basic"
				});
			}
			const value = scheme["x-scalar-secret-token"];
			return result.push({
				in: "header",
				name: "Authorization",
				value: value || emptyTokenPlaceholder,
				format: "bearer"
			});
		}
		if (scheme.type === "oauth2") {
			const token = Object.values(scheme?.flows ?? {}).filter(isDefined).find((f) => f["x-scalar-secret-token"])?.["x-scalar-secret-token"] ?? "";
			return result.push({
				in: "header",
				name: "Authorization",
				value: token || emptyTokenPlaceholder,
				format: "bearer"
			});
		}
		if (scheme.type === "openIdConnect") {
			const token = Object.values(scheme?.flows ?? {}).filter(isDefined).find((f) => f["x-scalar-secret-token"])?.["x-scalar-secret-token"] ?? "";
			return result.push({
				in: "header",
				name: "Authorization",
				value: token || emptyTokenPlaceholder,
				format: "bearer"
			});
		}
		return null;
	});
	return result;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/headers.js
/** Default Accept header value to accept all response types. */
var DEFAULT_ACCEPT = "*/*";
var CONVENTIONAL_DEFAULT_HEADER_NAMES = {
	accept: "Accept",
	"content-type": "Content-Type",
	"user-agent": "User-Agent"
};
/**
* Restores conventional casing for well-known default headers.
*
* We keep this intentionally scoped to the defaults we auto-generate so we do not
* unexpectedly rewrite user-defined header parameter names.
*/
var restoreConventionalHeaderName = (headerName) => CONVENTIONAL_DEFAULT_HEADER_NAMES[headerName.toLowerCase()] ?? headerName;
/**
* Restores conventional casing for default header keys.
*/
var restoreConventionalDefaultHeaderNames = (headers) => Object.fromEntries(Object.entries(headers).map(([name, value]) => [restoreConventionalHeaderName(name), value]));
/**
* Lowercase names of **enabled** operation parameters with `in: header` for the given example.
* Uses the same example selection and enablement rules as the request builder, including schema defaults.
*/
var getEnabledOperationHeaderParameterNames = (operation, exampleName) => {
	const names = /* @__PURE__ */ new Set();
	for (const ref of operation.parameters ?? []) {
		const param = getResolvedRef(ref);
		if (!param || param.in !== "header") continue;
		if (!isParamDisabled(param, getExample(param, exampleName, void 0))) names.add(param.name.toLowerCase());
	}
	return names;
};
var filterDefaultHeadersByVisibility = (operation, exampleName, headers, flags) => {
	const headerParamNames = flags.hideOverriddenHeaders ? getEnabledOperationHeaderParameterNames(operation, exampleName) : null;
	const disabledHeaders = flags.hideDisabledHeaders ? operation["x-scalar-disable-parameters"]?.["default-headers"]?.[exampleName] ?? {} : null;
	return Object.fromEntries(Object.entries(headers).filter(([name]) => {
		const key = name.toLowerCase();
		if (headerParamNames?.has(key)) return false;
		if (disabledHeaders && disabledHeaders[key] === true) return false;
		return true;
	}));
};
/**
* Drops default header entries that are disabled for this example via
* `operation['x-scalar-disable-parameters']['default-headers'][exampleName]`.
*
* Context builders keep the full default header map for the UI; call this when merging into the
* outbound request (for example in `requestFactory`).
*/
var filterDisabledDefaultHeaders = (operation, exampleName, headers) => filterDefaultHeadersByVisibility(operation, exampleName, headers, {
	hideOverriddenHeaders: false,
	hideDisabledHeaders: true
});
/**
* Generates default headers for an OpenAPI operation and HTTP method.
*
* This function adds standard HTTP headers based on the request context:
* - Content-Type: Added only if the HTTP method supports a request body and the OpenAPI operation
*   defines a request body content type. Uses the selected content type from the operation or the
*   first defined request body content type. Omitted when the selection is `none` or `other`.
* - Accept: Derived from the 2xx response content types in the spec (joined as a comma-separated list), falling back to a wildcard.
* - User-Agent: Added in Electron environments (desktop app or proxy) to identify the client.
*
* @param hideDisabledHeaders If true, filters out headers marked as disabled for this example via
*   `x-scalar-disable-parameters.default-headers`.
* @param hideOverriddenHeaders If true, omits any default header whose name matches an **enabled**
*   operation parameter with `in: header` (disabled optional header parameters do not shadow defaults).
*/
var getDefaultHeaders = ({ method, operation, exampleName, hideDisabledHeaders = false, hideOverriddenHeaders = false, options = {
	isElectron: false,
	appVersion: "0.0.0"
} }) => {
	const headers = new Headers();
	const requestBody = getResolvedRef(operation.requestBody);
	if (canMethodHaveBody(method) && requestBody) {
		const contentType = requestBody["x-scalar-selected-content-type"]?.[exampleName] ?? Object.keys(requestBody.content ?? {})[0];
		if (contentType && contentType !== "none" && contentType !== "other") headers.set("Content-Type", contentType);
	}
	const successResponseKey = Object.keys(operation.responses ?? {}).find((k) => k.startsWith("2"));
	const successResponse = successResponseKey ? getResolvedRef(operation.responses[successResponseKey]) : null;
	const acceptValue = Object.keys(successResponse?.content ?? {}).join(", ") || DEFAULT_ACCEPT;
	headers.set("Accept", acceptValue);
	if (options.isElectron && options.appVersion) headers.set("User-Agent", `Scalar/${options.appVersion}`);
	const result = Object.fromEntries(headers.entries());
	if (hideOverriddenHeaders || hideDisabledHeaders) return filterDefaultHeadersByVisibility(operation, exampleName, result, {
		hideOverriddenHeaders,
		hideDisabledHeaders
	});
	return result;
};
//#endregion
//#region node_modules/@scalar/helpers/dist/object/prevent-pollution.js
/**
* Set of dangerous keys that can be used for prototype pollution attacks.
* These keys should never be used as property names in dynamic object operations.
*/
var PROTOTYPE_POLLUTION_KEYS = /* @__PURE__ */ new Set([
	"__proto__",
	"prototype",
	"constructor"
]);
/**
* Validates that a key is safe to use and does not pose a prototype pollution risk.
* Throws an error if a dangerous key is detected.
*
* @param key - The key to validate
* @param context - Optional context string to help identify where the validation failed
* @throws {Error} If the key matches a known prototype pollution vector
*
* @example
* ```ts
* preventPollution('__proto__') // throws Error
* preventPollution('safeName') // passes
* preventPollution('constructor', 'operation update') // throws Error with context
* ```
*/
var preventPollution = (key, context) => {
	if (PROTOTYPE_POLLUTION_KEYS.has(key)) {
		const errorMessage = context ? `Prototype pollution key detected: "${key}" in ${context}` : `Prototype pollution key detected: "${key}"`;
		throw new Error(errorMessage);
	}
};
/**
* Checks whether a key poses a prototype pollution risk, without throwing.
*
* Use this when a dangerous key should be filtered out rather than rejected, for example when
* walking the keys of an untrusted document. Use `preventPollution` when the key should be
* rejected outright.
*
* @param key - The key to check
* @returns true when the key matches a known prototype pollution vector, false otherwise
*
* @example
* ```ts
* isPollutionKey('__proto__') // true
* isPollutionKey('safeName') // false
* ```
*/
var isPollutionKey = (key) => PROTOTYPE_POLLUTION_KEYS.has(key);
//#endregion
//#region node_modules/@scalar/helpers/dist/object/set-value-at-path.js
/**
* Sets a nested value on the target object using a path array, creating
* intermediate plain objects as needed.
*
* Unlike json-magic's `setValueAtPath` (which accepts a JSON-pointer string and
* creates arrays for numeric segments), this helper uses an array of string
* segments and only ever creates plain objects. It mirrors the shape of
* `getValueAtPath` so the two compose cleanly.
*
* @example
* ```ts
* const target = {}
* setValueAtPath(target, ['filter', 'status'], 'active')
*
* { filter: { status: 'active' } }
* ```
*/
var setValueAtPath = (target, path, value) => {
	const [key, ...rest] = path;
	if (!key) return;
	preventPollution(key);
	if (!rest.length) {
		target[key] = value;
		return;
	}
	const next = isObject(target[key]) ? target[key] : {};
	target[key] = next;
	setValueAtPath(next, rest, value);
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/xml/serialize-xml-part.js
/**
* Serialize structured XML part data through the shared schema-aware writer.
* A part must contain a complete XML document, so mapping errors reject serialization.
* Already serialized strings bypass this boundary in request builders.
*/
var serializeXmlPart = (value, schema) => {
	const result = serializeXmlExample(value, schema ?? coerceValue(SchemaObjectSchema, {}), {
		mode: "write",
		rootName: "root"
	});
	if (result.xml === void 0) throw new Error(`Unable to serialize XML part: ${result.diagnostics.map(({ code }) => code).join(", ")}`);
	return result.xml;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/build-multipart.js
/** Identify ordered multipart independently of the editor's row representation. */
var isPositionalMultipart = (contentType, media) => {
	const schema = getResolvedRef(media.schema);
	return parseMimeType(contentType).essence !== "multipart/form-data" || media.prefixEncoding !== void 0 || media.itemEncoding !== void 0 || schema !== void 0 && isArraySchema(schema) || media.itemSchema !== void 0;
};
/** Whether a media type needs ordered or nested multipart serialization. */
var needsMultipartEncoding = (contentType, media) => {
	return parseMimeType(contentType).type === "multipart" && (isPositionalMultipart(contentType, media) || Object.values(media.encoding ?? {}).some((encoding) => parseMimeType(encoding.contentType).type === "multipart" || encoding.encoding !== void 0));
};
var defaultContentType = (schema, value) => {
	if (value instanceof Blob) return value.type || "application/octet-stream";
	if (schema && (!("type" in schema) || !schema.type || schema.type === "string" && schema.contentEncoding)) return "application/octet-stream";
	return typeof value === "object" && value !== null ? "application/json" : "text/plain";
};
/** Encoding accepts ranges, but each wire header needs a single concrete media type. */
var selectContentType = (encoding, schema, value) => {
	const fallback = defaultContentType(schema, value);
	if (!encoding) return fallback;
	if (/[\r\n\0]/.test(encoding)) throw new Error("Invalid multipart content type");
	const choices = encoding.split(",").map((choice) => choice.trim());
	const preferred = parseMimeType(fallback);
	const match = choices.find((choice) => {
		const mime = parseMimeType(choice);
		return (mime.type === "*" || mime.type === preferred.type) && (mime.subtype === "*" || mime.subtype === preferred.subtype);
	});
	if (match) {
		if (!parseMimeType(match).essence.includes("*")) return match;
		return match.replace(/^[^;]+/, preferred.essence);
	}
	return choices.find((choice) => !parseMimeType(choice).essence.includes("*")) ?? fallback;
};
/** Resolve a positional item's schema independently of the encoding prefix length. */
var getMultipartItemSchema = (schema, index, itemSchema) => getResolvedRef((schema && "prefixItems" in schema ? schema.prefixItems?.[index] : void 0) ?? (schema && "items" in schema ? schema.items : void 0) ?? itemSchema, mergeSiblingReferences);
/** Serialize structured values to the selected part format; strings already containing XML stay intact. */
var serializePartValue = (value, contentType, schema) => {
	const subtype = contentType ? parseMimeType(contentType).subtype : void 0;
	if ((subtype === "xml" || subtype?.endsWith("+xml")) && isObject(value)) return serializeXmlPart(value, schema);
	return subtype === "json" || subtype?.endsWith("+json") || value !== null && typeof value === "object" ? JSON.stringify(unpackProxyObject(value)) : String(value ?? "");
};
/** Build ordered parts, applying prefix encodings independently of schema prefix lengths. */
var buildMultipart = (value, contentType, encoding = {}, schema, nesting = 0) => {
	if (nesting >= 8) throw new Error("Maximum multipart nesting exceeded");
	const named = parseMimeType(contentType).essence === "multipart/form-data";
	return (Array.isArray(value) ? value.map((item, index) => {
		const itemEncoding = index < (encoding.prefixEncoding?.length ?? 0) ? encoding.prefixEncoding?.[index] : encoding.itemEncoding;
		const itemSchema = getMultipartItemSchema(schema, index, encoding.itemSchema);
		if (named && item !== null && typeof item === "object" && !Array.isArray(item)) {
			const entries = Object.entries(item);
			const entry = entries[0];
			if (entries.length !== 1 || !entry) throw new Error("Named positional multipart items must contain exactly one property");
			return [
				entry[0],
				entry[1],
				itemEncoding,
				resolveLeafSchema(itemSchema, [entry[0]])
			];
		}
		return [
			void 0,
			item,
			itemEncoding,
			itemSchema
		];
	}) : value !== null && typeof value === "object" ? Object.entries(value).flatMap(([key, item]) => {
		const propertySchema = resolveLeafSchema(schema, [key]);
		return (Array.isArray(item) ? item : [item]).map((part) => [
			key,
			part,
			encoding.encoding?.[key],
			Array.isArray(item) ? getResolvedRef(propertySchema && isArraySchema(propertySchema) ? propertySchema.items : void 0, mergeSiblingReferences) : propertySchema
		]);
	}) : []).flatMap(([key, item, partEncoding, partSchema]) => {
		const style = named && hasEncodingStyle(partEncoding);
		const styleParts = style ? serializeFormPropertyWithEncoding(key ?? "", item, partEncoding) : null;
		const partContentType = style ? void 0 : selectContentType(partEncoding?.contentType, partSchema, item);
		const headers = Object.fromEntries(Object.entries(partEncoding?.headers ?? {}).flatMap(([name, ref]) => {
			if (name.toLowerCase() === "content-type") return [];
			const header = getResolvedRef(ref);
			if (!header || !("schema" in header)) return [];
			const headerSchema = getResolvedRef(header.schema);
			const example = header?.example ?? getResolvedRef(Object.values(header?.examples ?? {})[0])?.value ?? headerSchema?.const ?? headerSchema?.default;
			return example === void 0 ? [] : [[name, String(example)]];
		}));
		if (partSchema?.contentEncoding && !Object.keys(headers).some((name) => name.toLowerCase() === "content-transfer-encoding")) headers["Content-Transfer-Encoding"] = partSchema.contentEncoding;
		const metadata = {
			...key === void 0 ? {} : { key },
			...partContentType ? { contentType: partContentType } : {},
			...Object.keys(headers).length ? { headers } : {}
		};
		if (styleParts) return styleParts.map((part) => ({
			...metadata,
			type: "text",
			...part
		}));
		if (partContentType && parseMimeType(partContentType).type === "multipart" && typeof item !== "string" && !(item instanceof Blob)) return [{
			...metadata,
			type: "multipart",
			contentType: partContentType,
			value: buildMultipart(item, partContentType, partEncoding, partSchema, nesting + 1)
		}];
		if (partContentType && parseMimeType(partContentType).essence === "application/x-www-form-urlencoded" && item !== null && typeof item === "object") {
			const params = Object.entries(item).flatMap(([name, fieldValue]) => (Array.isArray(fieldValue) ? fieldValue : [fieldValue]).flatMap((field) => {
				const fieldEncoding = partEncoding?.encoding?.[name];
				const styled = serializeFormPropertyWithEncoding(name, field, fieldEncoding);
				if (styled) return styled;
				return [{
					key: name,
					value: serializePartValue(field, hasEncodingStyle(fieldEncoding) ? void 0 : fieldEncoding?.contentType)
				}];
			}));
			return [{
				...metadata,
				type: "text",
				value: new URLSearchParams(params.map((part) => [part.key, part.value])).toString()
			}];
		}
		if (item instanceof File) return [{
			...metadata,
			type: "file",
			value: unpackProxyObject(item)
		}];
		if (item instanceof Blob) return [{
			...metadata,
			type: "blob",
			value: unpackProxyObject(item)
		}];
		return [{
			...metadata,
			type: "text",
			value: serializePartValue(item, partContentType, partSchema)
		}];
	});
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/body/build-request-body.js
/** Preserve per-item media types while keeping uploaded file bytes and names intact. */
var toMultipartPart = (part) => {
	if (part.value instanceof File) {
		const file = part.value;
		return {
			type: "file",
			key: part.key,
			value: part.contentType && part.contentType !== file.type ? new File([file], file.name, {
				type: part.contentType,
				lastModified: file.lastModified
			}) : file,
			contentType: part.contentType
		};
	}
	return {
		type: "text",
		key: part.key,
		value: part.value,
		...part.contentType ? { contentType: part.contentType } : {}
	};
};
var getMultipartEncodingContentType = (requestBody, bodyContentType, fieldName) => requestBody.content[bodyContentType]?.encoding?.[fieldName]?.contentType;
/** Preserve schema-backed nested objects and repeated flat fields from form editor rows. */
var regroupMultipartRows = (rows, multipartSchema) => {
	const isDottedNestedRow = buildDottedNestedRowPredicate(multipartSchema);
	const entries = [];
	const regroupedByTopKey = /* @__PURE__ */ new Map();
	for (const row of rows) {
		if (!isDottedNestedRow(row.name, row.value)) {
			entries.push(row);
			continue;
		}
		const segments = row.name.split(".");
		const topKey = segments[0];
		if (!topKey) continue;
		let target = regroupedByTopKey.get(topKey);
		if (!target) {
			target = {};
			regroupedByTopKey.set(topKey, target);
			entries.push({
				name: topKey,
				value: target
			});
		}
		setValueAtPath(target, segments.slice(1), coerceLeafValueToSchemaType(row.value, resolveLeafSchema(multipartSchema, segments)));
	}
	return entries;
};
/**
* Create the fetch request body
*/
var buildRequestBody = (requestBody, exampleName = "default", requestBodyCompositionSelection, openapiVersion) => {
	if (!requestBody) return null;
	/** Selected content type for the body from the dropdown, stored as x-scalar-selected-content-type */
	const bodyContentType = getSelectedBodyContentType(requestBody, exampleName);
	if (!bodyContentType) return null;
	/** An example value */
	const example = getExampleFromBody(requestBody, bodyContentType, exampleName, requestBodyCompositionSelection, openapiVersion);
	if (!example) return null;
	const explicitText = getExplicitExampleText(getExampleValue(example), bodyContentType);
	if (explicitText !== void 0) return {
		mode: "raw",
		value: explicitText,
		contentType: bodyContentType
	};
	const resolvedBodySchema = getResolvedRef(requestBody.content[bodyContentType]?.schema, mergeSiblingReferences);
	const objectBodySchema = resolvedBodySchema && isObjectSchema(resolvedBodySchema) ? resolvedBodySchema : void 0;
	const isComposed = Boolean(objectBodySchema?.allOf || objectBodySchema?.oneOf || objectBodySchema?.anyOf);
	const bodyProperties = objectBodySchema && !isComposed ? objectBodySchema.properties : void 0;
	const requiredBodyProperties = new Set(objectBodySchema && !isComposed ? objectBodySchema.required ?? [] : []);
	const isOptionalBodyProperty = (key) => Boolean(bodyProperties && Object.hasOwn(bodyProperties, key) && !requiredBodyProperties.has(key));
	const media = requestBody.content[bodyContentType];
	if (media && needsMultipartEncoding(bodyContentType, media)) {
		const value = (() => {
			if (typeof example.value !== "string") return example.value;
			try {
				return JSON.parse(example.value);
			} catch {
				return example.value;
			}
		})();
		if (typeof value === "string" || value instanceof Blob) return {
			mode: "raw",
			value,
			contentType: bodyContentType
		};
		const positional = isPositionalMultipart(bodyContentType, media);
		const orderedValue = positional && parseMimeType(bodyContentType).essence === "multipart/form-data" && Array.isArray(value) ? value.filter((item) => !(isObject(item) && typeof item.name === "string" && "value" in item && item.isDisabled)).map((item, index) => {
			if (!isObject(item) || typeof item.name !== "string" || !("value" in item)) return item;
			const itemSchema = getMultipartItemSchema(resolvedBodySchema, index, media.itemSchema);
			return { [item.name]: coerceLeafValueToSchemaType(item.value, resolveLeafSchema(itemSchema, [item.name])) };
		}) : value;
		return {
			mode: "multipart",
			contentType: bodyContentType,
			value: !positional && Array.isArray(value) ? regroupMultipartRows(value.filter((row) => !row.isDisabled), resolvedBodySchema).flatMap((row) => buildMultipart({ [row.name]: coerceLeafValueToSchemaType(row.value, resolveLeafSchema(resolvedBodySchema, [row.name])) }, bodyContentType, media, resolvedBodySchema)) : buildMultipart(!positional && isObject(value) ? Object.fromEntries(Object.entries(value).filter(([key]) => !isOptionalBodyProperty(key))) : orderedValue, bodyContentType, media, resolvedBodySchema)
		};
	}
	if ((bodyContentType === "multipart/form-data" || bodyContentType === "application/x-www-form-urlencoded") && Array.isArray(example.value)) {
		const exampleValue = (Array.isArray(example.value) ? example.value : []).filter((item) => !item.isDisabled);
		const result = bodyContentType === "multipart/form-data" ? {
			mode: "formdata",
			value: []
		} : {
			mode: "urlencoded",
			value: []
		};
		const multipartSchema = result.mode === "formdata" ? getResolvedRef(requestBody.content[bodyContentType]?.schema, mergeSiblingReferences) : void 0;
		(result.mode === "formdata" ? regroupMultipartRows(exampleValue, multipartSchema) : exampleValue).forEach(({ name, value }) => {
			if (!name) return;
			const partEncoding = requestBody.content[bodyContentType]?.encoding?.[name];
			if (result.mode === "formdata") {
				const restored = coerceLeafValueToSchemaType(value, resolveLeafSchema(multipartSchema, [name]));
				const arrayParts = serializeMultipartArray(name, Array.isArray(restored) ? restored : value, partEncoding);
				if (arrayParts) {
					result.value.push(...arrayParts.map(toMultipartPart));
					return;
				}
			}
			const styleParts = serializeFormPropertyWithEncoding(name, value, partEncoding);
			if (styleParts) {
				for (const part of styleParts) result.value.push({
					type: "text",
					key: part.key,
					value: part.value
				});
				return;
			}
			const partContentType = result.mode === "formdata" ? partEncoding?.contentType : void 0;
			if (value instanceof File && result.mode === "formdata") {
				/**
				* We need to unwrap the proxies to get the file name due to the
				* "this" context in the proxy causing an illegal invocation error
				*/
				const unwrappedValue = unpackProxyObject(value);
				const encodedValue = partContentType && partContentType !== unwrappedValue.type ? new File([unwrappedValue], unwrappedValue.name, {
					type: partContentType,
					lastModified: unwrappedValue.lastModified
				}) : unwrappedValue;
				return result.value.push({
					type: "file",
					key: name,
					value: encodedValue,
					contentType: partContentType
				});
			}
			if (value !== void 0 && value !== null) {
				const serializedValue = typeof value === "object" && value !== null ? JSON.stringify(unpackProxyObject(value)) : String(value);
				if (result.mode === "formdata" && partContentType) return result.value.push({
					type: "text",
					key: name,
					value: serializedValue,
					contentType: partContentType
				});
				return result.value.push({
					type: "text",
					key: name,
					value: serializedValue
				});
			}
		});
		return result;
	}
	if (bodyContentType === "application/x-www-form-urlencoded" && isObject(example.value)) {
		const result = {
			mode: "urlencoded",
			value: []
		};
		for (const [key, value] of Object.entries(example.value)) {
			if (isOptionalBodyProperty(key)) continue;
			if (key && value !== void 0 && value !== null) {
				const partEncoding = requestBody.content[bodyContentType]?.encoding?.[key];
				const styleParts = serializeFormPropertyWithEncoding(key, value, partEncoding);
				if (styleParts) {
					for (const part of styleParts) result.value.push({
						key: part.key,
						value: part.value
					});
					continue;
				}
				const stringValue = typeof value === "object" && value !== null ? JSON.stringify(unpackProxyObject(value)) : String(value);
				result.value.push({
					key,
					value: stringValue
				});
			}
		}
		return result;
	}
	if (bodyContentType === "multipart/form-data" && isObject(example.value)) {
		const result = {
			mode: "formdata",
			value: []
		};
		for (const [key, value] of Object.entries(example.value)) {
			if (!key || value === void 0 || value === null) continue;
			if (isOptionalBodyProperty(key)) continue;
			const partEncoding = requestBody.content[bodyContentType]?.encoding?.[key];
			const arrayParts = serializeMultipartArray(key, value, partEncoding);
			if (arrayParts) {
				result.value.push(...arrayParts.map(toMultipartPart));
				continue;
			}
			const styleParts = serializeFormPropertyWithEncoding(key, value, partEncoding);
			if (styleParts) {
				for (const part of styleParts) result.value.push({
					type: "text",
					key: part.key,
					value: part.value
				});
				continue;
			}
			const partContentType = getMultipartEncodingContentType(requestBody, bodyContentType, key);
			if (value instanceof File) {
				const unwrappedValue = unpackProxyObject(value);
				const encodedValue = partContentType && partContentType !== unwrappedValue.type ? new File([unwrappedValue], unwrappedValue.name, {
					type: partContentType,
					lastModified: unwrappedValue.lastModified
				}) : unwrappedValue;
				result.value.push({
					type: "file",
					key,
					value: encodedValue,
					contentType: partContentType
				});
				continue;
			}
			const serializedValue = typeof value === "object" && value !== null ? JSON.stringify(unpackProxyObject(value)) : String(value);
			if (partContentType) {
				result.value.push({
					type: "text",
					key,
					value: serializedValue,
					contentType: partContentType
				});
				continue;
			}
			result.value.push({
				type: "text",
				key,
				value: serializedValue
			});
		}
		return result;
	}
	const exampleValue = example.value !== null && typeof example.value === "object" ? unpackProxyObject(example.value) : example.value;
	if (exampleValue instanceof File) return {
		mode: "raw",
		value: exampleValue,
		contentType: exampleValue.type
	};
	if (typeof exampleValue === "object") return {
		mode: "raw",
		value: JSON.stringify(exampleValue),
		contentType: "application/json"
	};
	return {
		mode: "raw",
		value: exampleValue
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/get-parameter-example.js
/** Resolve new and legacy example fields without serializing parameter-level wire text again. */
var getParameterExample = (parameter, exampleName) => {
	const authored = getExample({
		...parameter,
		content: void 0,
		schema: void 0
	}, exampleName, void 0);
	const example = authored ?? getExample(parameter, exampleName, void 0);
	const selected = getExampleValue(example);
	const contentType = "content" in parameter ? getFirstMediaType(parameter.content)?.[0] : void 0;
	const mediaText = contentType ? getExplicitExampleText(selected, contentType) : void 0;
	return {
		example,
		value: contentType && selected && !(authored && selected.source === "serialized") ? mediaText ?? selected.value : selected?.value,
		mediaSerialized: contentType !== void 0 && mediaText !== void 0 && !(authored && selected?.source === "serialized"),
		serialized: authored !== void 0 && selected?.source === "serialized"
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/header/build-request-parameters.js
/** Helper to get explode value with default */
var getExplode = (param, defaultValue) => "explode" in param && param.explode !== void 0 ? param.explode : defaultValue;
/**
* Converts the parameters into a set of headers, cookies and url params while
* replacing environment variables and extracting example values. Also builds up a record of the path
* parameters which can then be used to replace variables in the path.
* Also handles both content based and schema based parameters.
*
* @param parameters - Unfiltered parameters
* @param exampleName - The key of the current example
* @returns A set of headers, cookies and url params
*/
var buildRequestParameters = (parameters = [], exampleName = "default") => {
	const result = {
		cookies: [],
		headers: {},
		pathVariables: {},
		allowReservedQueryParameters: /* @__PURE__ */ new Set(),
		urlParams: new URLSearchParams()
	};
	if (parameters.length === 0) return result;
	for (const referencedParam of parameters) {
		const param = getResolvedRef(referencedParam);
		if (!param) continue;
		const selected = getParameterExample(param, exampleName);
		const { example, value } = selected;
		if (!example || isParamDisabled(param, example)) continue;
		/** Parameter-level wire text already contains its name, delimiters, and encoding. */
		if (selected.serialized) {
			const wireValue = String(value);
			switch (param.in) {
				case "query":
					(result.serializedQuery ??= []).push(wireValue);
					break;
				case "path":
					result.pathVariables[param.name] = wireValue;
					(result.serializedPathParameters ??= /* @__PURE__ */ new Set()).add(param.name);
					break;
				case "header":
					result.headers[param.name] = wireValue;
					break;
				case "cookie": result.headers.Cookie = [result.headers.Cookie, wireValue].filter(Boolean).join("; ");
			}
			continue;
		}
		if (selected.mediaSerialized) {
			const text = String(value);
			switch (param.in) {
				case "query":
					result.urlParams.set(param.name, text);
					break;
				case "header":
					result.headers[param.name] = text;
					break;
				case "path":
					result.pathVariables[param.name] = text;
					break;
				case "cookie": result.cookies.push(coerceValue(xScalarCookieSchema, {
					name: encodeURIComponent(param.name),
					value: encodeURIComponent(text),
					path: "/"
				}));
			}
			continue;
		}
		/** De-serialize the example value if it is a string and matches the schema type */
		const deSerializedValue = deSerializeParameter(value, param);
		const paramName = param.name;
		switch (param.in) {
			case "header": {
				if (paramName.toLowerCase() === "content-type" && deSerializedValue === "multipart/form-data") break;
				/** Headers only support simple style according to OpenAPI 3.1.1 */
				const serialized = serializeSimpleStyle(deSerializedValue, getExplode(param, false));
				if (!isDefined(serialized)) break;
				/** Headers can only be strings so we can cast numbers etc */
				const serializedString = String(serialized);
				if (result.headers[paramName]) result.headers[paramName] = `${result.headers[paramName]},${serializedString}`;
				else result.headers[paramName] = serializedString;
				break;
			}
			case "path": {
				const serialized = serializeSimpleStyle(deSerializedValue, getExplode(param, false));
				result.pathVariables[paramName] = String(serialized);
				break;
			}
			case "query":
				processQueryParameter(param, paramName, deSerializedValue, result.urlParams, result.allowReservedQueryParameters);
				break;
			case "cookie":
				if ("style" in param && param.style === "cookie") {
					result.cookies.push(...serializeCookieStyle(paramName, deSerializedValue, getExplode(param, true)).map((cookie) => coerceValue(xScalarCookieSchema, {
						...cookie,
						path: "/"
					})));
					break;
				}
				processCookieParameter(paramName, deSerializedValue, getExplode(param, true), result.cookies);
		}
	}
	return result;
};
/** Ensure we only apply the correcet style to the correct types */
var getStyle = (param, replacedValue) => {
	if (!("style" in param) || !param.style) return "form";
	if (param.style === "deepObject") {
		if (isObject(replacedValue)) return "deepObject";
		return "form";
	}
	return param.style;
};
/** Whether the parameter allows reserved characters (from param or schema). */
var isAllowReserved = (param) => {
	if ("allowReserved" in param && param.allowReserved !== void 0) return param.allowReserved;
	if ("schema" in param && param.schema && typeof param.schema === "object" && "allowReserved" in param.schema) return param.schema.allowReserved === true;
	return false;
};
/** When allowReserved is true, add keys to the set so reserved chars stay unescaped in the URL. */
var trackReservedKeys = (allowReservedQueryParameters, allowReserved, ...keys) => {
	if (allowReserved) for (const key of keys) allowReservedQueryParameters.add(key);
};
/**
* Helper function to process query parameters.
* Extracted to reduce complexity in main function.
*/
var processQueryParameter = (param, paramName, replacedValue, urlParams, allowReservedQueryParameters) => {
	/** If the parameter should be exploded, defaults to true for form style */
	const explodeParam = "explode" in param && param.explode !== void 0 ? param.explode : true;
	/** Whether the parameter allows reserved characters (from param or schema). */
	const allowReserved = isAllowReserved(param);
	/** Style of the parameter, defaults to form */
	const style = getStyle(param, replacedValue);
	if ("content" in param && param.content) {
		const serializedValue = serializeContentValue(replacedValue, Object.keys(param.content)[0] ?? "application/json");
		urlParams.set(paramName, serializedValue);
		trackReservedKeys(allowReservedQueryParameters, allowReserved, paramName);
		return;
	}
	if (style === "deepObject" && explodeParam) {
		const entries = serializeDeepObjectStyle(paramName, replacedValue);
		for (const entry of entries) {
			urlParams.append(entry.key, entry.value);
			trackReservedKeys(allowReservedQueryParameters, allowReserved, paramName);
		}
		return;
	}
	if (style === "spaceDelimited") {
		const serialized = serializeSpaceDelimitedStyle(replacedValue);
		const existingValue = urlParams.get(paramName);
		urlParams.set(paramName, existingValue ? `${existingValue} ${serialized}` : serialized);
		trackReservedKeys(allowReservedQueryParameters, allowReserved, paramName);
		return;
	}
	if (style === "pipeDelimited") {
		const serialized = serializePipeDelimitedStyle(replacedValue);
		const existingValue = urlParams.get(paramName);
		urlParams.set(paramName, existingValue ? `${existingValue}|${serialized}` : serialized);
		trackReservedKeys(allowReservedQueryParameters, allowReserved, paramName);
		return;
	}
	const serialized = serializeFormStyle(replacedValue, explodeParam);
	if (Array.isArray(serialized)) for (const entry of serialized) {
		const key = entry.key || paramName;
		urlParams.append(key, String(entry.value));
		trackReservedKeys(allowReservedQueryParameters, allowReserved, paramName);
	}
	else {
		urlParams.append(paramName, String(serialized));
		trackReservedKeys(allowReservedQueryParameters, allowReserved, paramName);
	}
};
/**
* Helper function to process cookie parameters.
* Extracted to reduce complexity in main function.
*/
var processCookieParameter = (paramName, replacedValue, explode, cookies) => {
	const serialized = serializeFormStyleForCookies(replacedValue, explode);
	if (Array.isArray(serialized)) for (const entry of serialized) {
		const key = entry.key || paramName;
		cookies.push(coerceValue(xScalarCookieSchema, {
			name: key,
			value: String(entry.value),
			path: "/"
		}));
	}
	else cookies.push(coerceValue(xScalarCookieSchema, {
		name: paramName,
		value: String(serialized),
		path: "/"
	}));
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/request-factory.js
/**
* Builds a request object fastory which can be used to build a request object.
* @returns A request object factory
*/
var requestFactory = ({ exampleName, globalCookies, method, operation, path, proxyUrl, server, defaultHeaders, isElectron, selectedSecuritySchemes, openapiVersion, requestBodyCompositionSelection }) => {
	const requestBody = getResolvedRef(operation.requestBody);
	/** Build out the request parameters */
	const params = buildRequestParameters(operation.parameters ?? [], exampleName);
	const querystringParameter = operation.parameters?.map((parameter) => getResolvedRef(parameter)).find((parameter) => parameter?.in === "querystring");
	const querystring = querystringParameter ? getQuerystringParameter(querystringParameter, exampleName) : void 0;
	const security = buildRequestSecurity(selectedSecuritySchemes);
	const headers = new Headers({
		...filterDisabledDefaultHeaders(operation, exampleName, defaultHeaders),
		...params.headers
	});
	const body = canMethodHaveBody(method) ? buildRequestBody(requestBody, exampleName, requestBodyCompositionSelection, openapiVersion) : null;
	if (body?.mode === "formdata" || body?.mode === "urlencoded") headers.delete("Content-Type");
	/** Combine the server url, path and url params into a single url */
	const serverVariables = getServerVariables(server);
	const baseUrl = replacePathVariables(server?.url ?? "", serverVariables);
	const globalCookieFilter = operation["x-scalar-disable-parameters"]?.["global-cookies"]?.[exampleName] ?? {};
	const cookiesList = [...globalCookies.map((c) => ({
		...c,
		isDisabled: (c.isDisabled || globalCookieFilter[c.name.toLowerCase()]) ?? false
	})), ...params.cookies];
	const isSseAcceptHeader = headers.get("Accept")?.toLowerCase().includes("text/event-stream") ?? false;
	const requestCacheMode = isSseAcceptHeader ? "no-store" : "default";
	if (isSseAcceptHeader) {
		headers.set("Cache-Control", "no-cache");
		headers.set("Pragma", "no-cache");
	}
	return { request: {
		baseUrl,
		proxyUrl,
		path: {
			variables: params.pathVariables,
			...params.serializedPathParameters ? { serializedParameters: params.serializedPathParameters } : {},
			raw: path
		},
		query: params.urlParams,
		...params.serializedQuery ? { serializedQuery: params.serializedQuery } : {},
		...querystring ? { querystring } : {},
		method: isHttpMethod(method) && method === method.toLowerCase() ? method.toUpperCase() : method,
		headers,
		body,
		cookies: cookiesList,
		cache: requestCacheMode,
		security,
		options: { isElectron },
		allowedReservedQueryParameters: params.allowReservedQueryParameters
	} };
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/builder/security/broker-scheme-types.js
/**
* AsyncAPI broker security scheme type names, grouped by the credential shape they share.
*
* These sets are the single source of truth for the runtime type guards used both when extracting
* stored secrets and when rendering the credential inputs, so the two stay in sync.
*/
/** SASL-style broker schemes: all of them authenticate with a username + password pair. */
var SASL_SCHEME_TYPES = [
	"userPassword",
	"plain",
	"scramSha256",
	"scramSha512"
];
var isSaslSchemeType = (type) => SASL_SCHEME_TYPES.some((schemeType) => schemeType === type);
/** Encryption broker schemes: a single key value. */
var ENCRYPTION_SCHEME_TYPES = ["symmetricEncryption", "asymmetricEncryption"];
var isEncryptionSchemeType = (type) => ENCRYPTION_SCHEME_TYPES.some((schemeType) => schemeType === type);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/schemas/type-guards.js
/**
* Narrow a value to an OpenAPI document.
*
* Discriminated by the required `openapi` string field on OAS documents. Accepts `unknown`
* so it can narrow at any call site (e.g., workspace lookups typed as `WorkspaceDocument`,
* or broader contexts that mix documents with the workspace itself).
*/
var isOpenApiDocument = (value) => isObject(value) && "openapi" in value && typeof value.openapi === "string";
/**
* Narrow a value to an AsyncAPI document.
*
* Discriminated by the required `asyncapi` string field on AsyncAPI documents.
*/
var isAsyncApiDocument = (value) => isObject(value) && "asyncapi" in value && typeof value.asyncapi === "string";
/**
* Identify the document type of a value.
*
* Returns `'openapi'` or `'asyncapi'` when the value matches one of the known
* document shapes, or `undefined` when it matches neither.
*/
var getDocumentType = (value) => {
	if (isOpenApiDocument(value)) return "openapi";
	if (isAsyncApiDocument(value)) return "asyncapi";
};
/**
* Human-readable label for a document type, e.g. for badges and warnings.
*
* Defaults to `'OpenAPI'` when the type is unknown, matching the OpenAPI-native surfaces that
* only distinguish AsyncAPI as the exception.
*/
var getDocumentTypeLabel = (documentType) => documentType === "asyncapi" ? "AsyncAPI" : "OpenAPI";
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/environment.js
/**
* Returns the active environment context for a given workspace and document.
*
* - If there is no workspace, returns a default (empty) environment.
* - If no environment is selected (no active environment), returns a default environment.
* - Otherwise, combines variables from both the workspace and document environments,
*   merging document environment values over workspace ones. The variables arrays from both
*   sources are concatenated and passed through the environment schema.
*
* @param workspace Workspace store instance or null if unavailable
* @param document Document data or null if unavailable
* @returns An object with the environment name (or null) and a validated XScalarEnvironment
*/
var getActiveEnvironment = (workspace, document) => {
	if (workspace === null) return {
		name: null,
		environment: coerceValue(xScalarEnvironmentSchema, {})
	};
	const activeEnv = workspace.workspace["x-scalar-active-environment"];
	if (!activeEnv) return {
		name: null,
		environment: coerceValue(xScalarEnvironmentSchema, {})
	};
	const workspaceEnv = workspace.workspace["x-scalar-environments"]?.[activeEnv] ?? { variables: [] };
	const documentEnv = (isOpenApiDocument(document) ? document["x-scalar-environments"]?.[activeEnv] : void 0) ?? { variables: [] };
	return {
		name: activeEnv,
		environment: coerceValue(xScalarEnvironmentSchema, {
			...workspaceEnv,
			...documentEnv,
			variables: [...workspaceEnv.variables, ...documentEnv.variables]
		})
	};
};
//#endregion
//#region node_modules/@scalar/json-magic/dist/helpers/escape-json-pointer.js
/**
* Escapes a JSON pointer string.
*
* Example: `/foo/bar~baz` -> `'~1foo~1bar~0baz'`
*/
function escapeJsonPointer(str) {
	return str.replace(/~/g, "~0").replace(/\//g, "~1");
}
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/for-each-path-item-operation.js
/**
* How many `$ref` hops to follow before treating a chain as circular.
*
* Real documents chain two or three deep at the very most, so anything past this is a reference
* cycle rather than a deep chain, and following it would never terminate.
*/
var MAX_REF_HOPS = 10;
/** Fixed OpenAPI fields use lowercase keys; mixed-case wire methods belong in additionalOperations. */
var isFixedOperationKey = (method) => method === method.toLowerCase() && isHttpMethod(method);
/**
* Whether a merged path item still carries an unfollowed hop.
*
* `mergeSiblingReferences` preserves the resolved target's `$ref-value`, including non-enumerable
* links in plain documents. That link signals that one more hop is waiting. A fully resolved path
* item never has one: the `$ref` sibling is kept (it is what the author wrote) but nothing resolves
* through it any more.
*/
var hasUnfollowedRef = (pathItem) => isObjectLike(pathItem) && Object.hasOwn(pathItem, "$ref-value");
/**
* Resolves a path item (or webhook path item), merging sibling properties alongside `$ref`.
*
* References are followed through chains, not just one hop. Bundling a split-file document does not
* inline its external references — it moves each target into the `x-ext` bucket and rewrites the
* reference to point there — so a file that is itself only a `$ref` to another file bundles into a
* bucket entry holding a `$ref` to a second bucket entry. Stopping after one hop leaves that path
* item unresolved, and its operations reach neither the sidebar nor the generated chunks.
*/
var getResolvedPathItem = (pathItem) => {
	if (!pathItem || typeof pathItem !== "object") return;
	let resolved = getResolvedRef(pathItem, mergeSiblingReferences);
	for (let hop = 1; hasUnfollowedRef(resolved); hop++) {
		if (hop >= MAX_REF_HOPS) {
			const { "$ref-value": _unfollowed, ...withoutUnfollowedRef } = resolved;
			console.warn(`Stopped resolving "${resolved.$ref}" after ${MAX_REF_HOPS} hops.\n\nThis reference most likely points at itself, directly or through another reference.`);
			return withoutUnfollowedRef;
		}
		resolved = getResolvedRef(resolved, mergeSiblingReferences);
	}
	return resolved;
};
/**
* Returns an operation from a path item, resolving $ref wrappers on the path item first.
*/
var getPathItemOperation = (pathItem, method) => {
	const resolvedPathItem = getResolvedPathItem(pathItem);
	if (!resolvedPathItem) return;
	if (isFixedOperationKey(method)) return resolvedPathItem[method];
	const operations = resolvedPathItem.additionalOperations;
	return operations && Object.hasOwn(operations, method) ? operations[method] : void 0;
};
/**
* Assigns an operation on a path item, including when the path item is a $ref wrapper.
*/
var setPathItemOperation = (pathItem, method, operation) => {
	if (!pathItem || typeof pathItem !== "object") return;
	const target = "$ref" in pathItem && "$ref-value" in pathItem ? pathItem["$ref-value"] ?? pathItem : pathItem;
	if (isFixedOperationKey(method)) target[method] = operation;
	else {
		preventPollution(method);
		target.additionalOperations ??= {};
		target.additionalOperations[method] = operation;
	}
};
/**
* Every node a path item's operations can live on, following the `$ref` chain.
*
* A reference can carry an operation on its dereferenced value and as a sibling override alongside
* the `$ref`, at any depth, and `getResolvedPathItem` merges all of them. Anything that writes to a
* path item therefore has to see the same set of nodes that reading it does.
*/
var pathItemRefChain = (pathItem) => {
	const chain = [];
	let node = pathItem;
	while (isObjectLike(node) && !chain.includes(node) && chain.length < MAX_REF_HOPS) {
		chain.push(node);
		if (!("$ref" in node) || !("$ref-value" in node)) break;
		node = node["$ref-value"];
	}
	return chain;
};
/**
* Deletes an operation from a path item, including when the path item is a $ref wrapper.
*
* Every hop is cleared, not just the first. `getResolvedPathItem` resolves through chains — which
* bundling a split-file document produces — and gives a sibling precedence over the value it
* resolves to, so a copy left anywhere along the chain keeps surfacing after the delete.
*/
var deletePathItemOperation = (pathItem, method) => {
	if (!pathItem || typeof pathItem !== "object") return;
	for (const node of pathItemRefChain(pathItem)) if (isFixedOperationKey(method)) delete node[method];
	else if (isObjectLike(node.additionalOperations)) {
		delete node.additionalOperations[method];
		if (Object.keys(node.additionalOperations).length === 0) delete node.additionalOperations;
	}
};
/**
* Invokes a callback for each HTTP method operation on a path item, resolving $ref wrappers first.
*/
var forEachPathItemOperation = (pathItem, callback) => {
	const resolvedPathItem = getResolvedPathItem(pathItem);
	if (!resolvedPathItem) return;
	for (const [key, operation] of Object.entries(resolvedPathItem)) {
		if (!isFixedOperationKey(key) || operation === void 0) continue;
		callback(key, operation);
	}
	for (const [method, operation] of Object.entries(resolvedPathItem.additionalOperations ?? {})) if (operation !== void 0 && !isFixedOperationKey(method)) callback(method, operation);
};
/**
* Returns whether a path item has no remaining keys after resolving $ref wrappers.
*
* Used when cleaning up after deleting an operation: a path entry is only removed once nothing is
* left, so path-level metadata (`parameters`, `summary`, `servers`) and $ref wrappers are preserved
* even when every HTTP method has been removed.
*/
var pathItemIsEmpty = (pathItem) => {
	const resolvedPathItem = getResolvedPathItem(pathItem);
	return !resolvedPathItem || Object.keys(resolvedPathItem).length === 0;
};
/** JSON pointer suffix for an operation within its Path Item Object. */
var getPathItemOperationKey = (method) => isFixedOperationKey(method) ? method : `additionalOperations/${escapeJsonPointer(method)}`;
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/helpers/combine-params.js
/** Combine pathItem and operation parameters into a single, dereferenced parameter array */
var combineParams = (pathParams = [], operationParams = []) => {
	const operationKeys = operationParams.flatMap((unresolvedParam) => {
		const param = getResolvedRef(unresolvedParam);
		if (!param) return [];
		return `${param.in}:${param.name}`;
	});
	const operationSet = new Set(operationKeys);
	return [...pathParams.filter((unresolvedParam) => {
		const param = getResolvedRef(unresolvedParam);
		if (!param) return false;
		return !operationSet.has(`${param.in}:${param.name}`);
	}), ...operationParams];
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/proxy.js
/**
* Returns the default proxy URL for web layout.
* For the 'web' layout, this ensures requests use Scalar's hosted proxy unless overridden,
* which is important for browser environments with CORS or network restrictions.
* For 'desktop' or 'modal' layouts, returns null to indicate no proxy by default.
*/
var getDefaultProxyUrl = (layout) => {
	if (layout === "web") return "https://proxy.scalar.com";
	return null;
};
/**
* Returns the active proxy URL for the workspace.
*
* Logic:
* - If the active proxy url is not set, use the default proxy url.
* - Otherwise, use the active proxy url.
*/
var getActiveProxyUrl = (activeProxyUrl, layout) => {
	if (activeProxyUrl === void 0) return getDefaultProxyUrl(layout);
	return activeProxyUrl;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/security/get-security-requirements.js
/**
* Compute what the security requirements should be for a request
*
* If an operation has only one optional security requirement,
* use the document security and ensure it includes an optional object.
*
* Otherwise we generally go operation -> document security.
*/
var getSecurityRequirements = (documentSecurity, operationSecurity) => {
	if (JSON.stringify(operationSecurity) === "[{}]" && documentSecurity?.length) return Boolean(documentSecurity.find((s) => JSON.stringify(s) === "{}")) ? documentSecurity : [...documentSecurity, {}];
	return operationSecurity ?? documentSecurity ?? [];
};
//#endregion
//#region node_modules/@scalar/helpers/dist/object/object-keys.js
/**
* Type safe version of Object.keys
* Can probably remove this whenever typescript adds it
*/
var objectKeys = (obj) => Object.keys(obj);
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/security/get-security-schemes.js
/**
* Get the selected security schemes from security requirements.
* Takes security requirement objects and resolves them to actual security scheme objects.
*/
var getSecuritySchemes = (securitySchemes, selectedSecurity) => objectKeys(selectedSecurity).flatMap((key) => {
	const scheme = getResolvedRef(securitySchemes?.[key]);
	if (scheme) return scheme;
	return [];
});
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/security/is-auth-optional.js
/** Determines if the authentication is optional */
var isAuthOptional = (securityRequirements) => {
	const hasComplexRequirement = securityRequirements.some((requirement) => Object.keys(requirement).length > 1);
	return securityRequirements.some((requirement) => Object.keys(requirement).length === 0) && !hasComplexRequirement;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/security/get-selected-security.js
/** Extracts the default scopes for a security scheme (only OAuth2 schemes support this) */
var getDefaultScopes = (scheme) => {
	if (!scheme || scheme.type !== "oauth2") return [];
	return scheme["x-default-scopes"] ?? [];
};
var applyDefaultScopes = (requirement, securitySchemes) => {
	return Object.fromEntries(Object.entries(requirement).map(([name, scopes]) => {
		if (Array.isArray(scopes) && scopes.length > 0) return [name, [...scopes]];
		const scheme = getResolvedRef(securitySchemes[name]);
		const defaultScopes = scheme?.type === "oauth2" ? scheme["x-default-scopes"] : void 0;
		if (Array.isArray(defaultScopes) && defaultScopes.length > 0) return [name, [...defaultScopes]];
		return [name, Array.isArray(scopes) ? [...scopes] : scopes];
	}));
};
/**
* Builds a security requirement from the preferred security scheme configuration.
* Handles both string and array formats for complex auth scenarios.
*/
var buildSecurityRequirementFromPreferred = (preferredSecurityScheme, securitySchemes) => {
	if (!Array.isArray(preferredSecurityScheme)) {
		const scheme = getResolvedRef(securitySchemes[preferredSecurityScheme]);
		return { [preferredSecurityScheme]: getDefaultScopes(scheme) };
	}
	const requirement = {};
	for (const item of preferredSecurityScheme) if (Array.isArray(item)) for (const schemeName of item) requirement[schemeName] = getDefaultScopes(getResolvedRef(securitySchemes[schemeName]));
	else requirement[item] = getDefaultScopes(getResolvedRef(securitySchemes[item]));
	return requirement;
};
/**
* Resolves which security selection to use for an operation.
*
* Priority order:
* 1. Operation-level selection (if set)
* 2. Document-level selection (if set)
* 3. Preferred security scheme from configuration (if provided)
* 4. First security requirement from the OpenAPI spec
* 5. No selection (if auth is optional or no requirements exist)
*/
var getSelectedSecurity = (documentSelectedSecurity, operationSelectedSecurity, securityRequirements = [], securitySchemes = {}, preferredSecurityScheme) => {
	if (operationSelectedSecurity) return operationSelectedSecurity;
	if (documentSelectedSecurity) return documentSelectedSecurity;
	if (isAuthOptional(securityRequirements) && !preferredSecurityScheme) return {
		selectedIndex: -1,
		selectedSchemes: []
	};
	if (preferredSecurityScheme) return {
		selectedIndex: 0,
		selectedSchemes: [buildSecurityRequirementFromPreferred(preferredSecurityScheme, securitySchemes)]
	};
	const firstRequirement = securityRequirements[0];
	if (!firstRequirement) return {
		selectedIndex: -1,
		selectedSchemes: []
	};
	return {
		selectedIndex: 0,
		selectedSchemes: [applyDefaultScopes(firstRequirement, securitySchemes)]
	};
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/deep-clone.js
/**
* Deeply clones an object or array, handling circular references.
*
* This function recursively copies all properties of the input value,
* creating a new object or array. If the input contains circular references,
* they are preserved in the clone using a WeakMap to track already-cloned objects.
*
* @param value - The value to deep clone (object, array, or primitive)
* @param hash - (internal) WeakMap for tracking circular references
* @returns A deep clone of the input value
*
* @example
* const obj: any = { a: 1 }
* obj.self = obj
* const clone = deepClone(obj)
* console.log(clone) // { a: 1, self: [Circular] }
* console.log(clone !== obj) // true
* console.log(clone.self === clone) // true
*/
var deepClone = (value, hash = /* @__PURE__ */ new WeakMap()) => {
	if (typeof value !== "object" || value === null) return value;
	if (hash.has(value)) return hash.get(value);
	const result = Array.isArray(value) ? [] : {};
	hash.set(value, result);
	Object.keys(value).forEach((key) => {
		result[key] = deepClone(value[key], hash);
	});
	return result;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/helpers/merge-object.js
/**
* Deep merges two objects, combining their properties recursively.
* Handles circular references by tracking visited objects to prevent infinite recursion.
*
* ⚠️ Note: This operation assumes there are no key collisions between the objects.
* Use isKeyCollisions() to check for collisions before merging.
*
* @param a - Target object to merge into
* @param b - Source object to merge from
* @param cache - Set of visited objects to prevent circular reference issues
* @returns The merged object (mutates and returns a)
*
* @example
* // Simple merge
* const a = { name: 'John' }
* const b = { age: 30 }
* mergeObjects(a, b) // { name: 'John', age: 30 }
*
* // Nested merge
* const a = { user: { name: 'John' } }
* const b = { user: { age: 30 } }
* mergeObjects(a, b) // { user: { name: 'John', age: 30 } }
*
* // Circular reference safe
* const obj = { name: 'John' }
* obj.self = obj
* const target = { age: 30 }
* mergeObjects(target, obj) // Safely merges without infinite recursion
*/
var mergeObjects = (a, b, replaceArrays = false, cache = /* @__PURE__ */ new Set()) => {
	for (const key of Object.keys(b)) if (!Object.hasOwn(a, key)) {
		if (key === "__proto__") Object.defineProperty(a, key, {
			value: b[key],
			enumerable: true,
			configurable: true,
			writable: true
		});
		else a[key] = b[key];
	} else {
		const aValue = a[key];
		const bValue = b[key];
		/** Replace whole array instead of replacing each index */
		const shouldReplaceArrays = replaceArrays && (Array.isArray(aValue) || Array.isArray(bValue));
		if (isObjectLike(aValue) && isObjectLike(bValue) && !shouldReplaceArrays) {
			const rawA = getRaw(aValue);
			const rawB = getRaw(bValue);
			if (cache.has(rawA) || cache.has(rawB)) continue;
			cache.add(rawA);
			cache.add(rawB);
			mergeObjects(aValue, bValue, replaceArrays, cache);
		} else try {
			a[key] = bValue;
		} catch (error) {
			console.warn(`Issue setting ${key} on object`);
			console.warn(error);
		}
	}
	return a;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/security/extract-security-scheme-secrets.js
/**
* Maps x-scalar-secret fields to their corresponding input field names.
* This allows us to fall back to config values when auth store secrets are not available.
*/
var SECRET_TO_INPUT_FIELD_MAP = {
	"x-scalar-secret-client-id": "x-scalar-client-id",
	"x-scalar-secret-client-secret": "clientSecret",
	"x-scalar-secret-password": "password",
	"x-scalar-secret-redirect-uri": "x-scalar-redirect-uri",
	"x-scalar-secret-token": "token",
	"x-scalar-secret-username": "username",
	"x-scalar-secret-auth-url": "authorizationUrl",
	"x-scalar-secret-token-url": "tokenUrl"
};
var mergeFlowSecrets = (properties, configSecrets, authStoreSecrets = {}, oauth2RedirectUri) => Object.fromEntries(properties.map((property) => {
	const authStoreValue = typeof authStoreSecrets[property] === "string" ? authStoreSecrets[property] : void 0;
	const configValue = typeof configSecrets[property] === "string" ? configSecrets[property] : void 0;
	const configInputValue = typeof configSecrets[SECRET_TO_INPUT_FIELD_MAP[property]] === "string" ? configSecrets[SECRET_TO_INPUT_FIELD_MAP[property]] : void 0;
	return [property, property === "x-scalar-secret-redirect-uri" ? authStoreValue ?? configValue ?? configInputValue ?? oauth2RedirectUri ?? "" : authStoreValue || configValue || configInputValue || ""];
}));
/** Secret extensions are not part of the strict scheme types, so they are read the same way the OAuth flows read theirs */
var documentSecret = (scheme, property) => {
	const value = property in scheme ? Reflect.get(scheme, property) : void 0;
	return typeof value === "string" ? value : "";
};
var extractRefreshTokenSecret = (authStoreSecrets = {}) => {
	const refreshToken = authStoreSecrets["x-scalar-secret-refresh-token"];
	if (typeof refreshToken === "string") return { "x-scalar-secret-refresh-token": refreshToken };
	return {};
};
var extractCredentialsLocation = (configSecrets, authStoreSecrets = {}) => {
	const credentialsLocation = authStoreSecrets["x-scalar-credentials-location"] ?? configSecrets["x-scalar-credentials-location"];
	return credentialsLocation ? { "x-scalar-credentials-location": credentialsLocation } : {};
};
/**
* Extract flow secrets and selected scopes for OAuth-like flows.
* Reused by both oauth2 and openIdConnect security schemes.
*/
var extractOAuthFlowSecrets = (flows, storeSecrets, oauth2RedirectUri) => {
	const selectedScopes = /* @__PURE__ */ new Set();
	return {
		flows: objectEntries(flows ?? {}).reduce((acc, [key, flow]) => {
			if (!isObject(flow)) return acc;
			const flowSelectedScopes = flow["selectedScopes"];
			if (Array.isArray(flowSelectedScopes)) flowSelectedScopes.forEach((scope) => typeof scope === "string" && selectedScopes.add(scope));
			if (key === "implicit") acc.implicit = {
				...flow,
				...mergeFlowSecrets([
					"x-scalar-secret-client-id",
					"x-scalar-secret-redirect-uri",
					"x-scalar-secret-token",
					"x-scalar-secret-auth-url"
				], flow, storeSecrets?.implicit, oauth2RedirectUri),
				...extractRefreshTokenSecret(storeSecrets?.implicit)
			};
			if (key === "password") acc[key] = {
				...flow,
				...mergeFlowSecrets([
					"x-scalar-secret-client-id",
					"x-scalar-secret-client-secret",
					"x-scalar-secret-username",
					"x-scalar-secret-password",
					"x-scalar-secret-token",
					"x-scalar-secret-token-url"
				], flow, storeSecrets?.password),
				...extractCredentialsLocation(flow, storeSecrets?.password),
				...extractRefreshTokenSecret(storeSecrets?.password)
			};
			if (key === "clientCredentials") acc[key] = {
				...flow,
				...mergeFlowSecrets([
					"x-scalar-secret-client-id",
					"x-scalar-secret-client-secret",
					"x-scalar-secret-token",
					"x-scalar-secret-token-url"
				], flow, storeSecrets?.clientCredentials),
				...extractCredentialsLocation(flow, storeSecrets?.clientCredentials),
				...extractRefreshTokenSecret(storeSecrets?.clientCredentials)
			};
			if (key === "deviceAuthorization") acc[key] = {
				...flow,
				...mergeFlowSecrets([
					"x-scalar-secret-client-id",
					"x-scalar-secret-client-secret",
					"x-scalar-secret-token",
					"x-scalar-secret-token-url"
				], flow, storeSecrets?.deviceAuthorization),
				...extractCredentialsLocation(flow, storeSecrets?.deviceAuthorization),
				...extractRefreshTokenSecret(storeSecrets?.deviceAuthorization)
			};
			if (key === "authorizationCode") acc[key] = {
				...flow,
				...mergeFlowSecrets([
					"x-scalar-secret-client-id",
					"x-scalar-secret-client-secret",
					"x-scalar-secret-redirect-uri",
					"x-scalar-secret-token",
					"x-scalar-secret-auth-url",
					"x-scalar-secret-token-url"
				], flow, storeSecrets?.authorizationCode, oauth2RedirectUri),
				...extractCredentialsLocation(flow, storeSecrets?.authorizationCode),
				...extractRefreshTokenSecret(storeSecrets?.authorizationCode)
			};
			return acc;
		}, {}),
		selectedScopes: Array.from(selectedScopes)
	};
};
/** Extract the secrets from the config and the auth store */
var extractSecuritySchemeSecrets = (scheme, authStore, name, documentSlug, oauth2RedirectUri) => {
	const secrets = authStore.getAuthSecrets(documentSlug, name);
	if (scheme.type === "apiKey") {
		const storeSecrets = secrets?.type === "apiKey" ? secrets : void 0;
		return {
			...scheme,
			"x-scalar-secret-token": storeSecrets?.["x-scalar-secret-token"] || documentSecret(scheme, "x-scalar-secret-token") || scheme.value || ""
		};
	}
	if (scheme.type === "http") {
		const storeSecrets = secrets?.type === "http" ? secrets : void 0;
		return {
			...scheme,
			"x-scalar-secret-token": storeSecrets?.["x-scalar-secret-token"] || documentSecret(scheme, "x-scalar-secret-token") || scheme.token || "",
			"x-scalar-secret-username": storeSecrets?.["x-scalar-secret-username"] || documentSecret(scheme, "x-scalar-secret-username") || scheme.username || "",
			"x-scalar-secret-password": storeSecrets?.["x-scalar-secret-password"] || documentSecret(scheme, "x-scalar-secret-password") || scheme.password || ""
		};
	}
	if (scheme.type === "oauth2") {
		const storeSecrets = secrets?.type === "oauth2" ? secrets : void 0;
		const extracted = extractOAuthFlowSecrets(scheme.flows, storeSecrets, oauth2RedirectUri);
		const configuredDefaultScopes = Array.isArray(scheme["x-default-scopes"]) ? scheme["x-default-scopes"].filter((scope) => typeof scope === "string") : [];
		const mergedDefaultScopes = Array.from(/* @__PURE__ */ new Set([...configuredDefaultScopes, ...extracted.selectedScopes]));
		return {
			...scheme,
			flows: extracted.flows,
			"x-default-scopes": mergedDefaultScopes
		};
	}
	if (scheme.type === "openIdConnect") {
		const storeSecrets = secrets?.type === "openIdConnect" ? secrets : void 0;
		const extracted = extractOAuthFlowSecrets({
			implicit: storeSecrets?.implicit,
			password: storeSecrets?.password,
			clientCredentials: storeSecrets?.clientCredentials,
			authorizationCode: storeSecrets?.authorizationCode,
			deviceAuthorization: storeSecrets?.deviceAuthorization
		}, storeSecrets, oauth2RedirectUri);
		return {
			...scheme,
			...objectEntries(extracted.flows).length ? { flows: extracted.flows } : {}
		};
	}
	if (scheme.type === "userPassword" || scheme.type === "plain" || scheme.type === "scramSha256" || scheme.type === "scramSha512") {
		const storeSecrets = secrets?.type === scheme.type ? secrets : void 0;
		return {
			...scheme,
			type: scheme.type,
			"x-scalar-secret-username": storeSecrets?.["x-scalar-secret-username"] || scheme.username || "",
			"x-scalar-secret-password": storeSecrets?.["x-scalar-secret-password"] || scheme.password || ""
		};
	}
	if (scheme.type === "X509") {
		const storeSecrets = secrets?.type === "X509" ? secrets : void 0;
		return {
			...scheme,
			type: scheme.type,
			"x-scalar-secret-client-certificate": storeSecrets?.["x-scalar-secret-client-certificate"] || "",
			"x-scalar-secret-private-key": storeSecrets?.["x-scalar-secret-private-key"] || ""
		};
	}
	if (scheme.type === "symmetricEncryption" || scheme.type === "asymmetricEncryption") {
		const storeSecrets = secrets?.type === scheme.type ? secrets : void 0;
		return {
			...scheme,
			type: scheme.type,
			"x-scalar-secret-token": storeSecrets?.["x-scalar-secret-token"] || scheme.token || ""
		};
	}
	if (scheme.type === "gssapi") {
		const storeSecrets = secrets?.type === "gssapi" ? secrets : void 0;
		return {
			...scheme,
			type: scheme.type,
			"x-scalar-secret-service-name": storeSecrets?.["x-scalar-secret-service-name"] || ""
		};
	}
	return scheme;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/security/merge-security.js
var hasAvailableScopes = (flow) => {
	const resolved = getResolvedRef(flow);
	return resolved !== null && typeof resolved === "object" && "availableScopes" in resolved;
};
/**
* Rename each AsyncAPI OAuth2 flow's `availableScopes` map onto OpenAPI's `scopes`.
*
* AsyncAPI and OpenAPI use the same scope-name → description map, but under different keys. The
* auth UI reads `flow.scopes`, so without this rename an AsyncAPI OAuth2 scheme would render with
* no selectable scopes. Flows that already use `scopes` (OpenAPI) are returned untouched, so this
* is a no-op for OpenAPI schemes.
*/
var normalizeAsyncApiOAuthFlows = (flows) => {
	const resolvedFlows = getResolvedRef(flows);
	if (!resolvedFlows || typeof resolvedFlows !== "object") return flows;
	const entries = Object.entries(resolvedFlows);
	if (!entries.some(([, flowValue]) => hasAvailableScopes(flowValue))) return flows;
	return Object.fromEntries(entries.map(([flowKey, flowValue]) => {
		if (!hasAvailableScopes(flowValue)) return [flowKey, flowValue];
		const resolved = getResolvedRef(flowValue);
		if (!isObjectLike(resolved)) return [flowKey, flowValue];
		const { availableScopes, scopes: existingScopes, ...rest } = resolved;
		return [flowKey, {
			...rest,
			scopes: existingScopes ?? availableScopes ?? {}
		}];
	}));
};
/**
* Map AsyncAPI-only security scheme shapes onto their OpenAPI equivalents where one exists.
*
* AsyncAPI's `httpApiKey` (a named key in `query`/`header`/`cookie`) is structurally identical to
* OpenAPI's `apiKey`, so we rename the type and let the shared apiKey path handle rendering and
* request injection. AsyncAPI OAuth2 flows carry their scope map under `availableScopes`, which we
* rename to OpenAPI's `scopes`. Everything else is returned unchanged — including AsyncAPI's own
* `apiKey` (`in: user | password`, no name), which has no OpenAPI counterpart and is value-only.
*/
var normalizeAsyncApiSecurityScheme = (scheme) => {
	if (!(scheme && typeof scheme === "object" && "type" in scheme)) return scheme;
	if (scheme.type === "http" && "scheme" in scheme && typeof scheme.scheme === "string") return {
		...scheme,
		scheme: scheme.scheme.toLowerCase()
	};
	if (scheme.type === "httpApiKey") return {
		...scheme,
		type: "apiKey"
	};
	if (scheme.type === "oauth2" && "flows" in scheme && scheme.flows) {
		const normalizedFlows = normalizeAsyncApiOAuthFlows(scheme.flows);
		if (normalizedFlows !== scheme.flows) return {
			...scheme,
			flows: normalizedFlows
		};
	}
	return scheme;
};
/**
* Merge the authentication config with the document security schemes + the auth store secrets.
*
* AsyncAPI keeps its security schemes in the same `components.securitySchemes` slot and shares the
* `http`/`apiKey`/`oauth2`/`openIdConnect` shapes with OpenAPI, so we accept either spec's schemes
* here. HTTP schemes are coerced into the OpenAPI shape, while broker credentials retain their
* AsyncAPI type and location.
*/
var mergeSecurity = (documentSecuritySchemes = {}, configSecuritySchemes = {}, authStore, documentName, oauth2RedirectUri) => {
	/** Convert the config secrets to the new secret extensions */
	return objectEntries(mergeObjects(objectEntries(documentSecuritySchemes).reduce((acc, [key, value]) => {
		const resolved = deepClone(getResolvedRef(value));
		if (resolved) acc[key] = resolved;
		return acc;
	}, {}), configSecuritySchemes)).reduce((acc, [name, value]) => {
		const scheme = normalizeAsyncApiSecurityScheme(value);
		const type = isObjectLike(scheme) && typeof scheme.type === "string" ? scheme.type : void 0;
		if (isSaslSchemeType(type) || isEncryptionSchemeType(type) || type === "X509" || type === "gssapi") {
			acc[name] = extractSecuritySchemeSecrets({
				...coerceValue(Type.Object({
					description: Type.Optional(Type.String()),
					username: Type.Optional(Type.String()),
					password: Type.Optional(Type.String()),
					token: Type.Optional(Type.String())
				}), scheme),
				type
			}, authStore, name, documentName, oauth2RedirectUri);
			return acc;
		}
		if (isObjectLike(scheme) && scheme.type === "apiKey" && (scheme.in === "user" || scheme.in === "password")) {
			acc[name] = extractSecuritySchemeSecrets({
				...coerceValue(Type.Object({
					description: Type.Optional(Type.String()),
					name: Type.Optional(Type.String()),
					value: Type.Optional(Type.String())
				}), scheme),
				type: "apiKey",
				in: scheme.in
			}, authStore, name, documentName, oauth2RedirectUri);
			return acc;
		}
		const coerced = coerceValue(SecuritySchemeObjectSchema, scheme);
		acc[name] = extractSecuritySchemeSecrets({
			...isObjectLike(scheme) ? scheme : {},
			...coerced
		}, authStore, name, documentName, oauth2RedirectUri);
		return acc;
	}, {});
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/servers.js
/**
* Retrieves and processes servers from an OpenAPI document.
*
* This function handles several scenarios:
* 1. No servers provided - creates a default server from document URL or fallback
* 2. Invalid server configurations - filters them out with warnings
* 3. Relative URLs - resolves them to absolute URLs using available base URLs
*
* @param servers - Array of OpenAPI server objects from the document
* @param options - Configuration options for server processing
* @returns Array of validated Server entities
*/
function getServers(servers, options = {}) {
	if (!Array.isArray(servers)) return [];
	return servers.map((server) => processServerObject(server, options));
}
/**
* Extracts the base URL (protocol + hostname) from a document URL.
* Returns undefined if the URL is invalid.
*/
function extractBaseUrlFromDocumentUrl(documentUrl) {
	try {
		const url = new URL(documentUrl);
		const port = url.port ? `:${url.port}` : "";
		return `${url.protocol}//${url.hostname}${port}`;
	} catch {
		return;
	}
}
/**
* Gets the fallback URL from window.location.origin if available.
*/
function getFallbackUrl() {
	if (typeof window === "undefined" || typeof window?.location?.origin !== "string") return;
	return window.location.origin;
}
/**
* Resolves a relative server URL to an absolute URL using available base URLs.
* Uses a priority system: baseServerURL > documentUrl > fallbackUrl.
*/
function resolveRelativeServerUrl(serverUrl, options) {
	const { baseServerUrl: baseServerURL, documentUrl } = options;
	if (baseServerURL) return combineUrlAndPath(baseServerURL, serverUrl);
	if (documentUrl) {
		const baseUrl = extractBaseUrlFromDocumentUrl(documentUrl);
		if (baseUrl) return combineUrlAndPath(baseUrl, serverUrl);
	}
	const fallbackUrl = getFallbackUrl();
	if (fallbackUrl) return combineUrlAndPath(fallbackUrl, serverUrl);
	return serverUrl;
}
/**
* Processes a single server object, handling validation and URL resolution.
*/
function processServerObject(server, options) {
	if (server.url?.startsWith("/")) server.url = resolveRelativeServerUrl(server.url, options);
	return server;
}
var getSelectedServer = (document, operation, configServers, servers) => {
	const documentSelectedServer = isOpenApiDocument(document) ? document["x-scalar-selected-server"] : void 0;
	const selectedServerUrl = configServers != null ? documentSelectedServer : operation?.["x-scalar-selected-server"] ?? documentSelectedServer;
	if (selectedServerUrl == null) return servers[0] ?? null;
	return servers.find(({ url }) => url === selectedServerUrl) ?? null;
};
//#endregion
//#region node_modules/@scalar/workspace-store/dist/request-example/context/get-request-example-context.js
var getRequestExampleContext = (workspaceStore, documentName, requestExampleMeta, options = {}) => {
	const { path, method, exampleName, isWebhook = false } = requestExampleMeta;
	const document = workspaceStore.workspace.documents[documentName] ?? options.fallbackDocument ?? void 0;
	if (!document) return {
		ok: false,
		error: `Document ${documentName} not found`
	};
	if (!isOpenApiDocument(document)) return {
		ok: false,
		error: `Document ${documentName} is not an OpenAPI document`
	};
	const pathItem = getResolvedPathItem(isWebhook ? document.webhooks?.[path] : document.paths?.[path]);
	if (!pathItem) return {
		ok: false,
		error: isWebhook ? `Webhook ${path} not found` : `Path ${path} not found`
	};
	const resolvedOperation = getResolvedRef(getPathItemOperation(pathItem, method));
	if (!resolvedOperation) return {
		ok: false,
		error: isWebhook ? `Method ${method} not found on webhook ${path}` : `Method ${method} not found on path ${path}`
	};
	const operation = {
		...resolvedOperation,
		parameters: combineParams(pathItem.parameters, resolvedOperation.parameters ?? [])
	};
	const environment = getActiveEnvironment(workspaceStore, document);
	const serverList = getServers(isWebhook ? options.servers ?? operation.servers : options.servers ?? operation.servers ?? document.servers, {
		baseServerUrl: options.baseServerUrl,
		documentUrl: document["x-scalar-original-source-url"]
	});
	const selectedServer = getSelectedServer(document, operation, options.servers ?? null, serverList);
	const documentSelectedSecurity = workspaceStore.auth.getAuthSelectedSchemas({
		type: "document",
		documentName
	});
	const operationSelectedSecurity = workspaceStore.auth.getAuthSelectedSchemas({
		type: "operation",
		documentName,
		path: path ?? "",
		method: method ?? "get"
	});
	const securitySchemes = mergeSecurity(document.components?.securitySchemes ?? {}, options.authentication?.securitySchemes ?? {}, workspaceStore.auth, documentName);
	const securityRequirements = getSecurityRequirements(document.security, operation.security);
	const selectedSecurity = getSelectedSecurity(documentSelectedSecurity, operationSelectedSecurity, securityRequirements, securitySchemes, options.authentication?.preferredSecurityScheme);
	/** The above selected requirements in scheme form */
	const selectedSecuritySchemes = getSecuritySchemes(securitySchemes, selectedSecurity.selectedSchemes[selectedSecurity.selectedIndex] ?? {});
	const serverMeta = !isWebhook && options.servers == null && operation.servers != null ? {
		type: "operation",
		path: path ?? "",
		method: method ?? "get"
	} : { type: "document" };
	const authMeta = operationSelectedSecurity !== void 0 ? {
		type: "operation",
		path: path ?? "",
		method: method ?? "get"
	} : { type: "document" };
	const proxyUrl = getActiveProxyUrl(workspaceStore.workspace["x-scalar-active-proxy"], options.layout ?? "other");
	const defaultHeaders = getDefaultHeaders({
		method,
		operation,
		exampleName,
		options: {
			appVersion: options.appVersion ?? "0.0.0",
			isElectron: options.isElectron ?? false
		}
	});
	return {
		ok: true,
		data: {
			operation,
			environment,
			cookies: {
				workspace: workspaceStore.workspace["x-scalar-cookies"] ?? [],
				document: document["x-scalar-cookies"] ?? []
			},
			headers: { default: defaultHeaders },
			servers: {
				list: serverList,
				selected: selectedServer,
				meta: serverMeta
			},
			proxy: { url: proxyUrl },
			security: {
				schemes: securitySchemes,
				requirements: securityRequirements,
				selected: selectedSecurity,
				selectedSchemes: selectedSecuritySchemes,
				meta: authMeta
			}
		}
	};
};
//#endregion
export { isParamDisabled as $, boolean as $n, getResolvedRefDeep as $r, XScalarStability as $t, needsMultipartEncoding as A, XScalarSdkInstallation as An, IsArray$2 as Ar, buildDottedNestedRowPredicate as At, isElectron as B, XPostResponse as Bn, IsPromise$2 as Br, OpenAPIDocumentSchema as Bt, getDocumentType as C, isObject as Ci, XScalarTokenUrl as Cn, Get as Cr, serializeCookieStyle as Ct, requestFactory as D, XScalarCredentialsLocationSchema as Dn, Kind as Dr, serializePipeDelimitedStyle as Dt, isOpenApiDocument as E, XScalarCredentialsLocation as En, Has$1 as Er, serializeFormStyleForCookies as Et, restoreConventionalDefaultHeaderNames as F, XScalarOrder as Fn, IsFunction$2 as Fr, getExampleFromBody as Ft, buildRequest as G, XScalarIsDirty as Gn, isDynamicRef as Gr, XVariable as Gt, objectEntries as H, XScalarRegistryMeta as Hn, IsSymbol$2 as Hr, ServerObjectSchema as Ht, buildRequestSecurity as I, XScalarCookies as In, IsInteger$2 as Ir, getSchemaExampleFromBody as It, POPULAR_CONTEXT_FUNCTION_KEYS as J, xScalarEnvVarSchema as Jn, escapeJsonPointer$1 as Jr, XEnumDescriptions as Jt, resolveExecutableRequestUrl as K, XScalarIcon as Kn, pushDynamicScope as Kr, XExamples as Kt, buildSafeBodyRequest as L, xScalarCookieSchema as Ln, IsIterator$2 as Lr, getXmlBodyExample as Lt, isPollutionKey as M, XDisabled as Mn, IsBigInt$2 as Mr, coerceUntypedValue as Mt, preventPollution as N, XTagGroups as Nn, IsBoolean$2 as Nr, resolveLeafSchema as Nt, getParameterExample as O, XOrder as On, TypeBoxError as Or, serializeSimpleStyle as Ot, getDefaultHeaders as P, XScalarSelectedServer as Pn, IsDate$2 as Pr, getSelectedBodyContentType as Pt, serializeQuerystringParameter as Q, array as Qn, isStreamingContentType as Qr, XGlobal as Qt, canMethodHaveBody as R, XScalarActiveEnvironment as Rn, IsNull$2 as Rr, getExampleFromSchema as Rt, getActiveEnvironment as S, mergeSiblingReferences as Si, XScalarSecretTokenSchema as Sn, Never as Sr, serializeContentValue as St, isAsyncApiDocument as T, XScalarSecurityBody as Tn, Get$1 as Tr, serializeFormStyle as Tt, deSerializeParameter as U, XScalarOriginalSourceUrl as Un, IsUint8Array$2 as Ur, XDisplayName as Ut, getServerVariables as V, XScalarWatchMode as Vn, IsString$2 as Vr, SecurityRequirementObjectSchema as Vt, deSerializeSchemaValue as W, XScalarOriginalDocumentHash as Wn, IsUndefined$2 as Wr, XDefaultScopes as Wt, isContextFunctionName as X, XScalarDefaultRequestBodyView as Xn, getExample as Xr, XTags as Xt, getContextFunctionComment as Y, xScalarEnvironmentSchema as Yn, isDefined as Yr, XAdditionalPropertiesName as Yt, getQuerystringParameter as Z, any as Zn, serializeStreamExample as Zr, XScalarSelectedContentType as Zt, getPathItemOperationKey as _, isNumberSchema as _i, XScalarSecretHTTPSchema as _n, Deref as _r, X_SCALAR_SET_COOKIE as _t, mergeObjects as a, createMagicProxy as ai, XInternal as an, nullable as ar, encode as at, setPathItemOperation as b, isStringSchema as bi, XScalarSecretRefreshTokenSchema as bn, ExtendsUndefinedCheck as br, serializeMultipartArray as bt, isAuthOptional as c, getId as ci, OAuthFlowDeviceAuthorizationSchema as cn, optional as cr, redirectToProxy as ct, getSecurityRequirements as d, getExampleValue as di, XusePkce as dn, union as dr, isLocalUrl as dt, unpackProxyObject as ei, XScalarStabilityValues as en, evaluate as er, isJsonMediaType as et, getActiveProxyUrl as f, getExplicitExampleText as fi, XTokenName as fn, unknown as fr, safeRun as ft, getPathItemOperation as g, isContentTypeParameterObject as gi, XScalarSecretClientSecretSchema as gn, Hash as gr, REGEX as gt, forEachPathItemOperation as h, isArraySchema as hi, XScalarSecretClientIdSchema as hn, Check as hr, replaceVariables as ht, mergeSecurity as i, unpackDetectChangesProxy as ii, XBadges as in, literal as ir, serializeMultipartBody as it, setValueAtPath as j, XScalarLinks as jn, IsAsyncIterator$2 as jr, coerceLeafValueToSchemaType as jt, buildRequestBody as k, XScalarIgnore as kn, TypeSystemPolicy as kr, serializeSpaceDelimitedStyle as kt, getSecuritySchemes as l, parseJsonPointerSegments as li, OAuthFlowImplicitSchema as ln, record as lr, shouldUseProxy as lt, deletePathItemOperation as m, parseMimeType as mi, XScalarSecretClientCertificateSchema as mn, coerceValue as mr, replacePathVariables as mt, getSelectedServer as n, createOverridesProxy as ni, XDraftExamples as nn, intersection as nr, mergeUrls as nt, deepClone as o, getRaw as oi, OAuthFlowAuthorizationCodeSchema as on, number as or, fromUint8Array as ot, combineParams as p, isXmlMediaType as pi, XScalarAuthUrl as pn, extensions as pr, replaceEnvVariables as pt, CONTEXT_FUNCTION_NAMES as q, XScalarEnvironments as qn, resolveDynamicRef as qr, XEnumVarNames as qt, getServers as r, createDetectChangesProxy as ri, XCodeSamples as rn, lazy as rr, filterGlobalCookie as rt, getSelectedSecurity as s, getValueByPath as si, OAuthFlowClientCredentialsSchema as sn, object as sr, gBase64 as st, getRequestExampleContext as t, unpackProxyShallow as ti, XScalarDisableParameters as tn, fn as tr, combineUrlAndPath as tt, objectKeys as u, unescapeJsonPointer as ui, OAuthFlowPasswordSchema as un, string as ur, isRelativePath as ut, getResolvedPathItem as v, isObjectSchema as vi, XScalarSecretPrivateKeySchema as vn, compose as vr, isHttpMethod as vt, getDocumentTypeLabel as w, isObjectLike as wi, XScalarSecurityQuery as wn, Has as wr, serializeDeepObjectStyle as wt, escapeJsonPointer as x, getResolvedRef as xi, XScalarSecretServiceNameSchema as xn, KeyOfPattern as xr, serializeFormPropertyWithEncoding as xt, pathItemIsEmpty as y, isSchema as yi, XScalarSecretRedirectUriSchema as yn, Type as yr, HTTP_METHODS as yt, isForbiddenHttpMethod as z, XPreRequest as zn, IsNumber$2 as zr, resolve as zt };
