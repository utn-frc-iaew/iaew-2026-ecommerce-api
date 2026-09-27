import { t as __commonJSMin } from "./rolldown-runtime-B-lAHAz2.js";
import { An as never, Ar as toJSONSchema, Er as safeParseAsync, Et as _enum, Fn as object, Jn as string, Kt as custom, Lt as boolean, Mt as any, Nt as array, Ot as _instanceof, Pn as number, Sn as looseObject, Un as record, Yt as discriminatedUnion, bn as lazy, kt as _null, or as union, sr as unknown, xn as literal } from "./schemas-CwB3E6tb.js";
import { t as EventSourceParserStream } from "./stream-CM21Ame3.js";
//#region node_modules/@ai-sdk/provider/dist/index.js
var marker$2 = "vercel.ai.error";
var symbol$3 = Symbol.for(marker$2);
var _a$3;
var _b$3;
var AISDKError = class _AISDKError extends (_b$3 = Error, _a$3 = symbol$3, _b$3) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name16, message, cause }) {
		super(message);
		this[_a$3] = true;
		this.name = name16;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$2);
	}
	static hasMarker(error, marker17) {
		const markerSymbol = Symbol.for(marker17);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$3 = "AI_APICallError";
var marker2$3 = `vercel.ai.error.${name$3}`;
var symbol2$3 = Symbol.for(marker2$3);
var _a2$3;
var _b2$3;
var APICallError = class extends (_b2$3 = AISDKError, _a2$3 = symbol2$3, _b2$3) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$3,
			message,
			cause
		});
		this[_a2$3] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2$3);
	}
};
var name2$3 = "AI_EmptyResponseBodyError";
var marker3$3 = `vercel.ai.error.${name2$3}`;
var symbol3$2 = Symbol.for(marker3$3);
var _a3$2;
var _b3$2;
var EmptyResponseBodyError = class extends (_b3$2 = AISDKError, _a3$2 = symbol3$2, _b3$2) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$3,
			message
		});
		this[_a3$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3$3);
	}
};
var name3$2 = "AI_EvaluationUnsupportedQuestionTypeError";
var marker4$2 = `vercel.ai.error.${name3$2}`;
var symbol4$2 = Symbol.for(marker4$2);
var _a4$2;
var _b4$2;
var EvaluationUnsupportedQuestionTypeError = class extends (_b4$2 = AISDKError, _a4$2 = symbol4$2, _b4$2) {
	constructor({ questionId, questionType, provider, modelId, message = `Question "${questionId}" has type "${questionType}", which is not supported by provider "${provider}" and model "${modelId}".` }) {
		super({
			name: name3$2,
			message
		});
		this[_a4$2] = true;
		this.questionId = questionId;
		this.questionType = questionType;
		this.provider = provider;
		this.modelId = modelId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4$2);
	}
};
function getErrorMessage(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.toString();
	return JSON.stringify(error);
}
var name4$2 = "AI_InvalidArgumentError";
var marker5$2 = `vercel.ai.error.${name4$2}`;
var symbol5$2 = Symbol.for(marker5$2);
var _a5$2;
var _b5$2;
var InvalidArgumentError$1 = class extends (_b5$2 = AISDKError, _a5$2 = symbol5$2, _b5$2) {
	constructor({ message, cause, argument }) {
		super({
			name: name4$2,
			message,
			cause
		});
		this[_a5$2] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5$2);
	}
};
var name5$2 = "AI_InvalidPromptError";
var marker6$2 = `vercel.ai.error.${name5$2}`;
var symbol6$2 = Symbol.for(marker6$2);
var _a6$2;
var _b6$2;
var InvalidPromptError = class extends (_b6$2 = AISDKError, _a6$2 = symbol6$2, _b6$2) {
	constructor({ prompt, message, cause }) {
		super({
			name: name5$2,
			message: `Invalid prompt: ${message}`,
			cause
		});
		this[_a6$2] = true;
		this.prompt = prompt;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6$2);
	}
};
var name6$2 = "AI_InvalidResponseDataError";
var marker7$2 = `vercel.ai.error.${name6$2}`;
var symbol7$2 = Symbol.for(marker7$2);
var _a7$2;
var _b7$2;
var InvalidResponseDataError = class extends (_b7$2 = AISDKError, _a7$2 = symbol7$2, _b7$2) {
	constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }) {
		super({
			name: name6$2,
			message
		});
		this[_a7$2] = true;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7$2);
	}
};
var name7$2 = "AI_JSONParseError";
var marker8$2 = `vercel.ai.error.${name7$2}`;
var symbol8$2 = Symbol.for(marker8$2);
var _a8$2;
var _b8$2;
var JSONParseError = class extends (_b8$2 = AISDKError, _a8$2 = symbol8$2, _b8$2) {
	constructor({ text, cause }) {
		super({
			name: name7$2,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
			cause
		});
		this[_a8$2] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker8$2);
	}
};
var name8$2 = "AI_LoadAPIKeyError";
var marker9$2 = `vercel.ai.error.${name8$2}`;
var symbol9$2 = Symbol.for(marker9$2);
var _a9$2;
var _b9$2;
var LoadAPIKeyError = class extends (_b9$2 = AISDKError, _a9$2 = symbol9$2, _b9$2) {
	constructor({ message }) {
		super({
			name: name8$2,
			message
		});
		this[_a9$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker9$2);
	}
};
var name9$2 = "AI_LoadSettingError";
var marker10$2 = `vercel.ai.error.${name9$2}`;
var symbol10$2 = Symbol.for(marker10$2);
var _a10$2;
var _b10$2;
var LoadSettingError = class extends (_b10$2 = AISDKError, _a10$2 = symbol10$2, _b10$2) {
	constructor({ message }) {
		super({
			name: name9$2,
			message
		});
		this[_a10$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker10$2);
	}
};
var name10$2 = "AI_NoContentGeneratedError";
var marker11$2 = `vercel.ai.error.${name10$2}`;
var symbol11$2 = Symbol.for(marker11$2);
var _a11$2;
var _b11$2;
var NoContentGeneratedError = class extends (_b11$2 = AISDKError, _a11$2 = symbol11$2, _b11$2) {
	constructor({ message = "No content generated." } = {}) {
		super({
			name: name10$2,
			message
		});
		this[_a11$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker11$2);
	}
};
var name11$1 = "AI_NoSuchModelError";
var marker12$1 = `vercel.ai.error.${name11$1}`;
var symbol12$1 = Symbol.for(marker12$1);
var _a12$1;
var _b12$1;
var NoSuchModelError = class extends (_b12$1 = AISDKError, _a12$1 = symbol12$1, _b12$1) {
	constructor({ errorName = name11$1, modelId, modelType, message = `No such ${modelType}: ${modelId}` }) {
		super({
			name: errorName,
			message
		});
		this[_a12$1] = true;
		this.modelId = modelId;
		this.modelType = modelType;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker12$1);
	}
};
var name12$1 = "AI_NoSuchProviderReferenceError";
var marker13$1 = `vercel.ai.error.${name12$1}`;
var symbol13$1 = Symbol.for(marker13$1);
var _a13$1;
var _b13$1;
var NoSuchProviderReferenceError = class extends (_b13$1 = AISDKError, _a13$1 = symbol13$1, _b13$1) {
	constructor({ provider, reference, message = `No provider reference found for provider '${provider}'. Available providers: ${Object.keys(reference).join(", ")}` }) {
		super({
			name: name12$1,
			message
		});
		this[_a13$1] = true;
		this.provider = provider;
		this.reference = reference;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13$1);
	}
};
var name13$1 = "AI_TooManyEmbeddingValuesForCallError";
var marker14$1 = `vercel.ai.error.${name13$1}`;
var symbol14$1 = Symbol.for(marker14$1);
var _a14$1;
var _b14$1;
var TooManyEmbeddingValuesForCallError = class extends (_b14$1 = AISDKError, _a14$1 = symbol14$1, _b14$1) {
	constructor(options) {
		super({
			name: name13$1,
			message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
		});
		this[_a14$1] = true;
		this.provider = options.provider;
		this.modelId = options.modelId;
		this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
		this.values = options.values;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14$1);
	}
};
var name14$1 = "AI_TypeValidationError";
var marker15$1 = `vercel.ai.error.${name14$1}`;
var symbol15$1 = Symbol.for(marker15$1);
var _a15$1;
var _b15$1;
var TypeValidationError = class _TypeValidationError extends (_b15$1 = AISDKError, _a15$1 = symbol15$1, _b15$1) {
	constructor({ value, cause, context }) {
		let contextPrefix = "Type validation failed";
		if (context == null ? void 0 : context.field) contextPrefix += ` for ${context.field}`;
		if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
			contextPrefix += " (";
			const parts = [];
			if (context.entityName) parts.push(context.entityName);
			if (context.entityId) parts.push(`id: "${context.entityId}"`);
			contextPrefix += parts.join(", ");
			contextPrefix += ")";
		}
		super({
			name: name14$1,
			message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
			cause
		});
		this[_a15$1] = true;
		this.value = value;
		this.context = context;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker15$1);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value and context, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @param {TypeValidationContext} params.context - Optional context about what is being validated.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause, context }) {
		var _a17, _b17, _c;
		if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a17 = cause.context) == null ? void 0 : _a17.field) === (context == null ? void 0 : context.field) && ((_b17 = cause.context) == null ? void 0 : _b17.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) return cause;
		return new _TypeValidationError({
			value,
			cause,
			context
		});
	}
};
var name15$1 = "AI_UnsupportedFunctionalityError";
var marker16$1 = `vercel.ai.error.${name15$1}`;
var symbol16$1 = Symbol.for(marker16$1);
var _a16$1;
var _b16$1;
var UnsupportedFunctionalityError = class extends (_b16$1 = AISDKError, _a16$1 = symbol16$1, _b16$1) {
	constructor({ functionality, message = `'${functionality}' functionality not supported.` }) {
		super({
			name: name15$1,
			message
		});
		this[_a16$1] = true;
		this.functionality = functionality;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker16$1);
	}
};
function isJSONValue(value) {
	if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return true;
	if (Array.isArray(value)) return value.every(isJSONValue);
	if (typeof value === "object") return Object.entries(value).every(([key, val]) => typeof key === "string" && (val === void 0 || isJSONValue(val)));
	return false;
}
function isJSONArray(value) {
	return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
	return value != null && typeof value === "object" && Object.entries(value).every(([key, val]) => typeof key === "string" && (val === void 0 || isJSONValue(val)));
}
//#endregion
//#region node_modules/@workflow/serde/dist/index.js
/**
* Symbol used to define custom serialization for user-defined class instances.
* The static method should accept an instance and return serializable data.
*
* @example
* ```ts
* import { WORKFLOW_SERIALIZE, WORKFLOW_DESERIALIZE } from '@workflow/serde';
*
* class MyClass {
*   constructor(public value: string) {}
*
*   static [WORKFLOW_SERIALIZE](instance: MyClass) {
*     return { value: instance.value };
*   }
*
*   static [WORKFLOW_DESERIALIZE](data: { value: string }) {
*     return new MyClass(data.value);
*   }
* }
* ```
*/
var WORKFLOW_SERIALIZE = Symbol.for("workflow-serialize");
/**
* Symbol used to define custom deserialization for user-defined class instances.
* The static method should accept serialized data and return a class instance.
*
* @see WORKFLOW_SERIALIZE for usage example
*/
var WORKFLOW_DESERIALIZE = Symbol.for("workflow-deserialize");
//#endregion
//#region node_modules/@ai-sdk/provider-utils/dist/index.js
function asArray(value) {
	return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
function combineHeaders(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => ({
		...combinedHeaders,
		...currentHeaders
	}), {});
}
function removeUndefinedEntries(record) {
	return Object.fromEntries(Object.entries(record).filter(([_key, value]) => value != null));
}
async function delay(delayInMs, options) {
	if (delayInMs == null) return;
	const signal = options?.abortSignal;
	return new Promise((resolve2, reject) => {
		if (signal?.aborted) {
			reject(createAbortError());
			return;
		}
		const timeoutId = setTimeout(() => {
			cleanup();
			resolve2();
		}, delayInMs);
		const cleanup = () => {
			clearTimeout(timeoutId);
			signal?.removeEventListener("abort", onAbort);
		};
		const onAbort = () => {
			cleanup();
			reject(createAbortError());
		};
		signal?.addEventListener("abort", onAbort);
	});
}
function createAbortError() {
	return new DOMException("Delay was aborted", "AbortError");
}
function getWebSocketConstructor(webSocket) {
	const WebSocketConstructor = webSocket ?? globalThis.WebSocket;
	if (WebSocketConstructor == null) throw new Error("No WebSocket implementation available.");
	return WebSocketConstructor;
}
var textDecoder = new TextDecoder();
async function readWebSocketMessageText(data) {
	if (typeof data === "string") return data;
	if (data instanceof ArrayBuffer) return textDecoder.decode(data);
	if (ArrayBuffer.isView(data)) return textDecoder.decode(data);
	if (typeof Blob !== "undefined" && data instanceof Blob) return data.text();
	return String(data);
}
var WEBSOCKET_OPEN_STATE = 1;
async function waitForWebSocketBufferDrain(socket, { highWaterMark = 1048576, pollIntervalMs = 20, abortSignal } = {}) {
	while (socket.readyState === WEBSOCKET_OPEN_STATE && (socket.bufferedAmount ?? 0) > highWaterMark) {
		if (abortSignal?.aborted === true) return;
		await delay(pollIntervalMs);
	}
}
function connectToWebSocket({ url, protocols, headers, webSocket, abortSignal, onOpen, onMessageText, onProcessingError, onSocketError, onClose, onAbort }) {
	let socket;
	let abortListener;
	const close = (code) => {
		if (abortListener != null) {
			abortSignal?.removeEventListener("abort", abortListener);
			abortListener = void 0;
		}
		try {
			socket?.close(code);
		} catch {}
	};
	if (abortSignal?.aborted) {
		onAbort?.(abortSignal.reason ?? /* @__PURE__ */ new Error("Aborted"));
		return {
			socket: void 0,
			close
		};
	}
	try {
		socket = new (getWebSocketConstructor(webSocket))(url, protocols, { headers: removeUndefinedEntries(headers ?? {}) });
	} catch (error) {
		onProcessingError(error);
		return {
			socket: void 0,
			close
		};
	}
	if (abortSignal != null && onAbort != null) {
		abortListener = () => onAbort(abortSignal.reason ?? /* @__PURE__ */ new Error("Aborted"));
		abortSignal.addEventListener("abort", abortListener, { once: true });
	}
	const openedSocket = socket;
	socket.onopen = () => {
		try {
			onOpen?.(openedSocket);
		} catch (error) {
			onProcessingError(error);
		}
	};
	let tail = Promise.resolve();
	socket.onmessage = (event) => {
		tail = tail.then(() => readWebSocketMessageText(event.data)).then((text) => onMessageText(text)).catch(onProcessingError);
	};
	socket.onerror = () => {
		tail = tail.then(() => onSocketError?.()).catch(onProcessingError);
	};
	socket.onclose = (event) => {
		const closeEvent = event;
		const code = typeof closeEvent?.code === "number" ? closeEvent.code : void 0;
		const reason = typeof closeEvent?.reason === "string" ? closeEvent.reason : void 0;
		tail = tail.then(() => onClose?.({
			code,
			reason
		})).catch(onProcessingError);
	};
	return {
		socket,
		close
	};
}
function convertAsyncIteratorToReadableStream(iterator) {
	let cancelled = false;
	return new ReadableStream({
		/**
		* Called when the consumer wants to pull more data from the stream.
		*
		* @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
		* @returns {Promise<void>}
		*/
		async pull(controller) {
			if (cancelled) return;
			try {
				const { value, done } = await iterator.next();
				if (done) controller.close();
				else controller.enqueue(value);
			} catch (error) {
				controller.error(error);
			}
		},
		/**
		* Called when the consumer cancels the stream.
		*/
		async cancel(reason) {
			cancelled = true;
			if (iterator.return) try {
				await iterator.return(reason);
			} catch {}
		}
	});
}
var { btoa: btoa$1, atob: atob$1 } = globalThis;
function convertBase64ToUint8Array(base64String) {
	const latin1string = atob$1(base64String.replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
	const chunks = [];
	const chunkSize = 4096;
	for (let i = 0; i < array.length; i += chunkSize) chunks.push(String.fromCodePoint(...array.subarray(i, i + chunkSize)));
	return btoa$1(chunks.join(""));
}
var marker$1 = /* @__PURE__ */ Symbol.for("vercel.ai.providerStreamError");
function isProviderStreamError(error) {
	return typeof error === "object" && error != null && error[marker$1] === true;
}
var DelayedPromise = class {
	constructor() {
		this.status = { type: "pending" };
		this._resolve = void 0;
		this._reject = void 0;
	}
	get promise() {
		if (this._promise) return this._promise;
		this._promise = new Promise((resolve2, reject) => {
			if (this.status.type === "resolved") resolve2(this.status.value);
			else if (this.status.type === "rejected") reject(this.status.error);
			this._resolve = resolve2;
			this._reject = reject;
		});
		return this._promise;
	}
	resolve(value) {
		this.status = {
			type: "resolved",
			value
		};
		if (this._promise) this._resolve?.(value);
	}
	reject(error) {
		this.status = {
			type: "rejected",
			error
		};
		if (this._promise) this._reject?.(error);
	}
	isResolved() {
		return this.status.type === "resolved";
	}
	isRejected() {
		return this.status.type === "rejected";
	}
	isPending() {
		return this.status.type === "pending";
	}
};
function extractResponseHeaders(response) {
	return Object.fromEntries([...response.headers]);
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
	if (globalThisAny.window) return `runtime/browser`;
	if (globalThisAny.navigator?.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if (globalThisAny.process?.versions?.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function isAbortError(error) {
	return (error instanceof Error || typeof DOMException === "function" && error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var RETRYABLE_NETWORK_ERROR_CODES = /* @__PURE__ */ new Set([
	"ConnectionRefused",
	"ConnectionClosed",
	"FailedToOpenSocket",
	"ECONNRESET",
	"ECONNREFUSED",
	"ETIMEDOUT",
	"EPIPE",
	"UND_ERR_SOCKET",
	"UND_ERR_HEADERS_TIMEOUT",
	"UND_ERR_BODY_TIMEOUT",
	"UND_ERR_CONNECT_TIMEOUT"
]);
function findNetworkError(error) {
	const visited = /* @__PURE__ */ new Set();
	let current = error;
	while (current instanceof Error && !visited.has(current)) {
		visited.add(current);
		const errorWithCode = current;
		if (typeof errorWithCode.code === "string" && RETRYABLE_NETWORK_ERROR_CODES.has(errorWithCode.code)) return errorWithCode;
		current = current.cause;
	}
}
function handleFetchError({ error, url, requestBodyValues }) {
	if (isAbortError(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	const networkError = findNetworkError(error);
	if (networkError != null) {
		if (APICallError.isInstance(error)) return new APICallError({
			message: error.message,
			cause: error.cause,
			url: error.url,
			requestBodyValues: error.requestBodyValues,
			statusCode: error.statusCode,
			responseHeaders: error.responseHeaders,
			responseBody: error.responseBody,
			data: error.data,
			isRetryable: true
		});
		return new APICallError({
			message: `Cannot connect to API: ${error instanceof Error ? error.message : networkError.message}`,
			cause: error,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	return error;
}
var VERSION$2 = "5.0.49";
function normalizeHeaders(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var imageMediaTypeSignatures = [
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70,
			56,
			55,
			97
		]
	},
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70,
			56,
			57,
			97
		]
	},
	{
		mediaType: "image/png",
		bytesPrefix: [
			137,
			80,
			78,
			71
		]
	},
	{
		mediaType: "image/jpeg",
		bytesPrefix: [255, 216]
	},
	{
		mediaType: "image/webp",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			69,
			66,
			80
		]
	},
	{
		mediaType: "image/bmp",
		bytesPrefix: [
			66,
			77,
			null,
			null,
			null,
			null,
			0,
			0,
			0,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			73,
			73,
			42,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			77,
			77,
			0,
			42
		]
	},
	{
		mediaType: "image/avif",
		bytesPrefix: [
			0,
			0,
			0,
			null,
			102,
			116,
			121,
			112,
			97,
			118,
			105,
			102
		]
	},
	{
		mediaType: "image/heic",
		bytesPrefix: [
			0,
			0,
			0,
			null,
			102,
			116,
			121,
			112,
			104,
			101,
			105,
			99
		]
	}
];
var documentMediaTypeSignatures = [{
	mediaType: "application/pdf",
	bytesPrefix: [
		37,
		80,
		68,
		70
	]
}];
var audioMediaTypeSignaturesWithoutMp4 = [
	{
		mediaType: "audio/aac",
		bytesPrefix: [255, 240]
	},
	{
		mediaType: "audio/aac",
		bytesPrefix: [255, 241]
	},
	{
		mediaType: "audio/aac",
		bytesPrefix: [255, 248]
	},
	{
		mediaType: "audio/aac",
		bytesPrefix: [255, 249]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 251]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 250]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 243]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 242]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 227]
	},
	{
		mediaType: "audio/mpeg",
		bytesPrefix: [255, 226]
	},
	{
		mediaType: "audio/wav",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			65,
			86,
			69
		]
	},
	{
		mediaType: "audio/ogg",
		bytesPrefix: [
			79,
			103,
			103,
			83
		]
	},
	{
		mediaType: "audio/flac",
		bytesPrefix: [
			102,
			76,
			97,
			67
		]
	},
	{
		mediaType: "audio/aac",
		bytesPrefix: [
			64,
			21,
			0,
			0
		]
	},
	{
		mediaType: "audio/webm",
		bytesPrefix: [
			26,
			69,
			223,
			163
		]
	}
];
var audioMediaTypeSignatures = [...audioMediaTypeSignaturesWithoutMp4, {
	mediaType: "audio/mp4",
	bytesPrefix: [
		0,
		0,
		0,
		null,
		102,
		116,
		121,
		112
	]
}];
var videoMediaTypeSignatures = [
	{
		mediaType: "video/mp4",
		bytesPrefix: [
			0,
			0,
			0,
			null,
			102,
			116,
			121,
			112
		]
	},
	{
		mediaType: "video/webm",
		bytesPrefix: [
			26,
			69,
			223,
			163
		]
	},
	{
		mediaType: "video/quicktime",
		bytesPrefix: [
			0,
			0,
			0,
			20,
			102,
			116,
			121,
			112,
			113,
			116
		]
	},
	{
		mediaType: "video/x-msvideo",
		bytesPrefix: [
			82,
			73,
			70,
			70
		]
	}
];
var DEFAULT_SNIFF_BYTES = 18;
var ID3_SCAN_BYTES = 131084;
function decodePrefix(data, maxBytes) {
	if (typeof data !== "string") return data.length > maxBytes ? data.subarray(0, maxBytes) : data;
	const maxChars = Math.ceil(maxBytes / 3) * 4;
	const bytes = convertBase64ToUint8Array(data.substring(0, Math.min(data.length, maxChars)));
	return bytes.length > maxBytes ? bytes.subarray(0, maxBytes) : bytes;
}
function hasID3(bytes) {
	return bytes.length > 10 && bytes[0] === 73 && bytes[1] === 68 && bytes[2] === 51;
}
var stripID3 = (bytes) => {
	const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
	return bytes.subarray(id3Size + 10);
};
function detectMediaTypeBySignatures({ data, signatures }) {
	let bytes = decodePrefix(data, DEFAULT_SNIFF_BYTES);
	if (hasID3(bytes)) bytes = stripID3(decodePrefix(data, ID3_SCAN_BYTES));
	for (const signature of signatures) if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every((byte, index) => byte === null || bytes[index] === byte)) return signature.mediaType;
}
var topLevelSignatureTables = {
	image: imageMediaTypeSignatures,
	audio: audioMediaTypeSignatures,
	video: videoMediaTypeSignatures,
	application: documentMediaTypeSignatures
};
function detectMediaType({ data, topLevelType }) {
	if (topLevelType === void 0) return detectMediaTypeBySignatures({
		data,
		signatures: [
			...imageMediaTypeSignatures,
			...documentMediaTypeSignatures,
			...audioMediaTypeSignaturesWithoutMp4,
			...videoMediaTypeSignatures
		]
	});
	const signatures = topLevelSignatureTables[topLevelType];
	if (signatures === void 0) return;
	return detectMediaTypeBySignatures({
		data,
		signatures
	});
}
function isFullMediaType(mediaType) {
	const slashIndex = mediaType.indexOf("/");
	if (slashIndex === -1) return false;
	const subtype = mediaType.substring(slashIndex + 1);
	return subtype.length > 0 && subtype !== "*";
}
async function cancelResponseBody(response) {
	try {
		await response.body?.cancel();
	} catch {}
}
var name$2 = "AI_DownloadError";
var marker2$2 = `vercel.ai.error.${name$2}`;
var symbol$2 = Symbol.for(marker2$2);
var _a$2;
var _b$2;
var DownloadError = class extends (_b$2 = AISDKError, _a$2 = symbol$2, _b$2) {
	constructor({ url, statusCode, statusText, cause, message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}` }) {
		super({
			name: name$2,
			message,
			cause
		});
		this[_a$2] = true;
		this.url = url;
		this.statusCode = statusCode;
		this.statusText = statusText;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2$2);
	}
};
function isBrowserRuntime(globalThisAny = globalThis) {
	return globalThisAny.window != null;
}
function isSameOrigin(url, baseUrl) {
	try {
		return new URL(url).origin === new URL(baseUrl).origin;
	} catch {
		return false;
	}
}
function validateDownloadUrl(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch {
		throw new DownloadError({
			url,
			message: `Invalid URL: ${url}`
		});
	}
	if (parsed.protocol === "data:") return;
	if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new DownloadError({
		url,
		message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
	});
	const hostname = parsed.hostname.toLowerCase().replace(/\.+$/, "");
	if (!hostname) throw new DownloadError({
		url,
		message: `URL must have a hostname`
	});
	if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) throw new DownloadError({
		url,
		message: `URL with hostname ${hostname} is not allowed`
	});
	if (hostname.startsWith("[") && hostname.endsWith("]")) {
		if (isPrivateIPv6(hostname.slice(1, -1))) throw new DownloadError({
			url,
			message: `URL with IPv6 address ${hostname} is not allowed`
		});
		return;
	}
	if (isIPv4(hostname)) {
		if (isPrivateIPv4(hostname)) throw new DownloadError({
			url,
			message: `URL with IP address ${hostname} is not allowed`
		});
	}
}
function validateDownloadAddress({ address, family, hostname }) {
	if (family === 4 ? !isIPv4(address) || isPrivateIPv4(address) : family === 6 ? isPrivateIPv6(address) : true) throw new DownloadError({
		url: hostname,
		message: `Hostname ${hostname} resolved to disallowed IP address ${address}`
	});
}
function isIPv4(hostname) {
	const parts = hostname.split(".");
	if (parts.length !== 4) return false;
	return parts.every((part) => {
		const num = Number(part);
		return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
	});
}
function isPrivateIPv4(ip) {
	const [a, b, c] = ip.split(".").map(Number);
	if (a === 0) return true;
	if (a === 10) return true;
	if (a === 100 && b >= 64 && b <= 127) return true;
	if (a === 127) return true;
	if (a === 169 && b === 254) return true;
	if (a === 172 && b >= 16 && b <= 31) return true;
	if (a === 192 && b === 0 && c === 0) return true;
	if (a === 192 && b === 0 && c === 2) return true;
	if (a === 192 && b === 168) return true;
	if (a === 198 && (b === 18 || b === 19)) return true;
	if (a === 198 && b === 51 && c === 100) return true;
	if (a === 203 && b === 0 && c === 113) return true;
	if (a >= 224) return true;
	return false;
}
function parseIPv6(ip) {
	let address = ip.toLowerCase();
	const zoneIndex = address.indexOf("%");
	if (zoneIndex !== -1) address = address.slice(0, zoneIndex);
	const halves = address.split("::");
	if (halves.length > 2) return null;
	const toGroups = (segment) => {
		if (segment === "") return [];
		const groups = [];
		const parts = segment.split(":");
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.includes(".")) {
				if (i !== parts.length - 1 || !isIPv4(part)) return null;
				const [a, b, c, d] = part.split(".").map(Number);
				groups.push(a << 8 | b, c << 8 | d);
				continue;
			}
			if (!/^[0-9a-f]{1,4}$/.test(part)) return null;
			groups.push(parseInt(part, 16));
		}
		return groups;
	};
	const head = toGroups(halves[0]);
	if (head === null) return null;
	if (halves.length === 2) {
		const tail = toGroups(halves[1]);
		if (tail === null) return null;
		const fill = 8 - head.length - tail.length;
		if (fill < 0) return null;
		return [
			...head,
			...new Array(fill).fill(0),
			...tail
		];
	}
	return head.length === 8 ? head : null;
}
function isPrivateIPv6(ip) {
	const groups = parseIPv6(ip);
	if (groups === null) return true;
	const topZero = (count) => groups.slice(0, count).every((group) => group === 0);
	if (topZero(7) && (groups[7] === 0 || groups[7] === 1)) return true;
	if ((groups[0] & 65024) === 64512) return true;
	if ((groups[0] & 65472) === 65152) return true;
	if ((groups[0] & 65472) === 65216) return true;
	if ((groups[0] & 65280) === 65280) return true;
	if (groups[0] === 8193 && groups[1] === 3512) return true;
	if (groups[0] === 16383 && (groups[1] & 61440) === 0) return true;
	if (topZero(6) || topZero(5) && groups[5] === 65535 || topZero(4) && groups[4] === 65535 && groups[5] === 0 || groups[0] === 100 && groups[1] === 65435 && groups[2] === 0 && groups[3] === 0 && groups[4] === 0 && groups[5] === 0 || groups[0] === 100 && groups[1] === 65435 && groups[2] === 1) return isPrivateIPv4(`${groups[6] >> 8 & 255}.${groups[6] & 255}.${groups[7] >> 8 & 255}.${groups[7] & 255}`);
	return false;
}
function createSafeLookup(lookup) {
	return ((hostname, options, callback) => {
		lookup(hostname, {
			...options,
			all: true
		}, (error, addresses) => {
			if (error) {
				callback(error);
				return;
			}
			try {
				const [firstAddress] = addresses;
				if (firstAddress == null) throw new Error(`Hostname ${hostname} did not resolve to an address`);
				for (const { address, family } of addresses) validateDownloadAddress({
					address,
					family,
					hostname
				});
				if (options.all === true) callback(null, addresses);
				else callback(null, firstAddress.address, firstAddress.family);
			} catch (error2) {
				callback(error2 instanceof Error ? error2 : new Error(String(error2)));
			}
		});
	});
}
var safeNodeFetchPromise;
function isNodeRuntime$1() {
	const runtimeProcess = globalThis.process;
	return runtimeProcess?.release?.name === "node" && runtimeProcess.versions?.bun == null && runtimeProcess.versions?.deno == null && runtimeProcess.title !== "workerd" && globalThis.EdgeRuntime == null;
}
async function getDefaultDownloadFetch() {
	if (!isNodeRuntime$1()) return globalThis.fetch;
	return safeNodeFetchPromise ??= Promise.resolve().then(createSafeNodeFetch);
}
function createSafeNodeFetch() {
	const module = loadBuiltinModule$1("node:module");
	const { lookup } = loadBuiltinModule$1("node:dns");
	const { Agent, fetch } = module.createRequire(getCurrentModulePath())("undici");
	const dispatcher = new Agent({ connect: { lookup: createSafeLookup(lookup) } });
	return ((input, init) => fetch(input, {
		...init,
		dispatcher
	}));
}
function loadBuiltinModule$1(id) {
	const builtinModule = globalThis.process?.getBuiltinModule?.(id);
	if (builtinModule == null) throw new Error(`Node.js built-in module ${id} is unavailable`);
	return builtinModule;
}
function getCurrentModulePath() {
	const originalPrepareStackTrace = Error.prepareStackTrace;
	try {
		Error.prepareStackTrace = (_error, callSites) => callSites;
		const error = /* @__PURE__ */ new Error("Capture current module path");
		Error.captureStackTrace(error, getCurrentModulePath);
		const [caller] = error.stack;
		const fileName = caller?.getFileName();
		if (fileName == null) throw new Error("Unable to determine the current module path");
		return fileName;
	} finally {
		Error.prepareStackTrace = originalPrepareStackTrace;
	}
}
var BLOCKED_REQUEST_HEADERS = [
	"connection",
	"keep-alive",
	"te",
	"trailer",
	"transfer-encoding",
	"upgrade",
	"host",
	"forwarded",
	"proxy-authorization",
	"via",
	"x-forwarded-for",
	"x-forwarded-host",
	"x-forwarded-proto",
	"x-real-ip",
	"metadata",
	"metadata-flavor",
	"x-aws-ec2-metadata-token",
	"x-metadata-token",
	"cookie",
	"set-cookie"
];
function sanitizeRequestHeaders(input) {
	const headers = new Headers(input);
	for (const name3 of BLOCKED_REQUEST_HEADERS) headers.delete(name3);
	return headers;
}
var MAX_DOWNLOAD_REDIRECTS = 10;
var REDIRECT_STATUS_CODES = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]);
async function getValidatedFetch(customFetch) {
	return customFetch == null || customFetch === globalThis.fetch ? await getDefaultDownloadFetch() : customFetch;
}
async function fetchWithValidatedRedirects({ url, headers, abortSignal, maxRedirects = MAX_DOWNLOAD_REDIRECTS, fetch: customFetch, trustedOrigin }) {
	let currentHeaders = headers === void 0 ? void 0 : sanitizeRequestHeaders(headers);
	const perHopInit = (redirect) => {
		const init = {
			signal: abortSignal,
			redirect
		};
		if (currentHeaders !== void 0) init.headers = new Headers(currentHeaders);
		return init;
	};
	let currentUrl = url;
	for (let redirectCount = 0; redirectCount <= maxRedirects; redirectCount++) {
		const isTrustedHop = trustedOrigin !== void 0 && isSameOrigin(currentUrl, trustedOrigin);
		if (!isTrustedHop) validateDownloadUrl(currentUrl);
		const fetch = isTrustedHop && customFetch != null ? customFetch : isTrustedHop ? globalThis.fetch : await getValidatedFetch(customFetch);
		const response = await fetch(currentUrl, perHopInit("manual"));
		if (response.type === "opaqueredirect") {
			if (!isBrowserRuntime()) throw new DownloadError({
				url,
				message: `Redirect from ${currentUrl} could not be validated and was blocked`
			});
			return await fetch(currentUrl, perHopInit("follow"));
		}
		const location = response.headers?.get("location");
		if (REDIRECT_STATUS_CODES.has(response.status) && location) {
			cancelResponseBody(response);
			const nextUrl = new URL(location, currentUrl).toString();
			if (currentHeaders !== void 0 && !isSameOrigin(nextUrl, currentUrl)) {
				const userAgent = currentHeaders.get("user-agent");
				currentHeaders = new Headers(userAgent == null ? void 0 : { "user-agent": userAgent });
			}
			currentUrl = nextUrl;
			continue;
		}
		return response;
	}
	throw new DownloadError({
		url,
		message: `Too many redirects (max ${maxRedirects})`
	});
}
var SAFE_UNTRUSTED_FIRST_HOP_HEADERS = /* @__PURE__ */ new Set([
	"accept",
	"accept-language",
	"baggage",
	"cache-control",
	"idempotency-key",
	"if-match",
	"if-modified-since",
	"if-none-match",
	"if-range",
	"if-unmodified-since",
	"pragma",
	"range",
	"traceparent",
	"tracestate",
	"user-agent",
	"x-correlation-id",
	"x-request-id"
]);
async function fetchUntrustedUrl({ headers, credentialedOrigin, untrustedFirstHopHeaders, ...options }) {
	let firstHopHeaders;
	if (headers !== void 0) {
		firstHopHeaders = sanitizeRequestHeaders(headers);
		const origin = credentialedOrigin ?? options.trustedOrigin;
		if (origin === void 0 || !isSameOrigin(options.url, origin)) {
			const allowedHeaders = /* @__PURE__ */ new Set([...SAFE_UNTRUSTED_FIRST_HOP_HEADERS, ...(untrustedFirstHopHeaders ?? []).map((name3) => name3.toLowerCase())]);
			firstHopHeaders = new Headers([...firstHopHeaders].filter(([name3]) => allowedHeaders.has(name3)));
		}
	}
	return fetchWithValidatedRedirects({
		...options,
		headers: firstHopHeaders
	});
}
var DEFAULT_MAX_DOWNLOAD_SIZE = 2147483648;
async function readResponseWithSizeLimit({ response, url, maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE }) {
	const contentLength = response.headers.get("content-length");
	if (contentLength != null) {
		const length = parseInt(contentLength, 10);
		if (!isNaN(length) && length > maxBytes) {
			await cancelResponseBody(response);
			throw new DownloadError({
				url,
				message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
			});
		}
	}
	const body = response.body;
	if (body == null) return /* @__PURE__ */ new Uint8Array(0);
	const reader = body.getReader();
	const chunks = [];
	let totalBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBytes += value.length;
			if (totalBytes > maxBytes) throw new DownloadError({
				url,
				message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
			});
			chunks.push(value);
		}
	} finally {
		try {
			await reader.cancel();
		} catch {} finally {
			reader.releaseLock();
		}
	}
	const result = new Uint8Array(totalBytes);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.length;
	}
	return result;
}
var EMBEDDING_MODEL_MAX_INPUT_BYTES_PER_CALL = /* @__PURE__ */ Symbol.for("vercel.ai.embeddingModel.maxInputBytesPerCall");
var EMBEDDING_MODEL_PROVIDER_OPTIONS_TRANSFORMER = /* @__PURE__ */ Symbol.for("vercel.ai.embeddingModel.providerOptionsTransformer");
function filterNullable(...values) {
	return values.filter((value) => value != null);
}
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError$1({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
var getOriginalFetch2 = () => globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch, validateUrl, credentialedOrigin, trustedOrigin }) => {
	try {
		const requestFetch = fetch ?? getOriginalFetch2();
		const requestHeaders = withUserAgentSuffix(credentialedOrigin !== void 0 && !isSameOrigin(url, credentialedOrigin) ? {} : headers, `ai-sdk/provider-utils/${VERSION$2}`, getRuntimeEnvironmentUserAgent());
		const response = validateUrl ? await fetchWithValidatedRedirects({
			url,
			headers: requestHeaders,
			abortSignal,
			fetch,
			trustedOrigin
		}) : await requestFetch(url, {
			method: "GET",
			headers: requestHeaders,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function isBuffer(value) {
	return globalThis.Buffer?.isBuffer(value) ?? false;
}
function isNonNullable(value) {
	return value != null;
}
function isProviderReference(data) {
	return typeof data === "object" && data !== null && !(data instanceof Uint8Array) && !(data instanceof URL) && !(data instanceof ArrayBuffer) && !isBuffer(data) && !("type" in data);
}
function isRecord$1(value) {
	return value != null && typeof value === "object" && !Array.isArray(value);
}
function isUrlSupported({ mediaType, url, supportedUrls }) {
	url = url.toLowerCase();
	mediaType = mediaType.toLowerCase();
	const isTopLevelOnly = !mediaType.includes("/");
	return Object.entries(supportedUrls).map(([key, value]) => {
		const mediaType2 = key.toLowerCase();
		return mediaType2 === "*" || mediaType2 === "*/*" ? {
			mediaTypePrefix: "",
			regexes: value
		} : {
			mediaTypePrefix: mediaType2.replace(/\*/, ""),
			regexes: value
		};
	}).filter(({ mediaTypePrefix }) => {
		if (mediaTypePrefix === "") return true;
		if (isTopLevelOnly) return `${mediaType}/` === mediaTypePrefix;
		return mediaTypePrefix.endsWith("/") ? mediaType.startsWith(mediaTypePrefix) : mediaType === mediaTypePrefix;
	}).flatMap(({ regexes }) => regexes).some((pattern) => testRegExpFromStart(pattern, url));
}
function testRegExpFromStart(pattern, value) {
	if (!pattern.global && !pattern.sticky) return pattern.test(value);
	const lastIndex = pattern.lastIndex;
	pattern.lastIndex = 0;
	try {
		return pattern.test(value);
	} finally {
		pattern.lastIndex = lastIndex;
	}
}
function loadOptionalSetting({ settingValue, environmentVariableName }) {
	if (typeof settingValue === "string") return settingValue;
	if (settingValue != null || typeof process === "undefined") return;
	settingValue = process.env[environmentVariableName];
	if (settingValue == null || typeof settingValue !== "string") return;
	return settingValue;
}
function normalizeBatchRequestCounts({ total, pending, completed, failed }) {
	if (isNonNegativeSafeInteger(total) && isNonNegativeSafeInteger(pending) && isNonNegativeSafeInteger(completed) && isNonNegativeSafeInteger(failed) && pending + completed + failed === total) return {
		total,
		pending,
		completed,
		failed
	};
}
function isNonNegativeSafeInteger(value) {
	return value != null && Number.isSafeInteger(value) && value >= 0;
}
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) return obj;
	return filter(obj);
}
function filter(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch {
		return _parse(text);
	}
	try {
		return _parse(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		const { additionalProperties } = jsonSchema2;
		jsonSchema2.additionalProperties = additionalProperties != null && typeof additionalProperties !== "boolean" ? visit(additionalProperties) : false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit(definitions[key]);
	return jsonSchema2;
}
function visit(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
	...defaultOptions,
	name: options
} : {
	...defaultOptions,
	...options
};
function parseAnyDef() {
	return {};
}
function parseArrayDef(def, refs) {
	const res = { type: "array" };
	if (def.type?._def && def.type?._def?.typeName !== "ZodAny") res.items = parseDef(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseBooleanDef() {
	return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
	return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy ?? refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item) => parseDateDef(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser(def);
	}
}
var integerDateParser = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max": res.maximum = check.value;
	}
	return res;
};
function parseDefaultDef(_def, refs) {
	return {
		...parseDef(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
function parseEffectsDef(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
	const allOf = [parseDef(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties: _additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex = void 0;
var zodPatterns = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod": addPattern(res, zodPatterns.email, check.message, refs);
			}
			break;
		case "url":
			addFormat(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern(res, zodPatterns.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern(res, zodPatterns.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat(res, "date", check.message, refs);
			break;
		case "time":
			addFormat(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern(res, zodPatterns.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern(res, zodPatterns.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern(res, zodPatterns.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern(res, zodPatterns.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod": addPattern(res, zodPatterns.base64, check.message, refs);
			}
			break;
		case "nanoid": addPattern(res, zodPatterns.nanoid, check.message, refs);
	}
	return res;
}
function escapeLiteralCheckValue(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat(schema, value, message, refs) {
	if (schema.format || schema.anyOf?.some((x) => x.format)) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else schema.format = value;
}
function addPattern(schema, regex, message, refs) {
	if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else schema.pattern = stringifyRegExpWithFlags(regex, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef(def, refs) {
	const schema = {
		type: "object",
		additionalProperties: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		}) ?? refs.allowedAdditionalProperties
	};
	if (def.keyType?._def.typeName === "ZodString" && def.keyType._def.checks?.length) {
		const { type: _type, ...keyType } = parseStringDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (def.keyType?._def.typeName === "ZodEnum") return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (def.keyType?._def.typeName === "ZodBranded" && def.keyType._def.type._def.typeName === "ZodString" && def.keyType._def.type._def.checks?.length) {
		const { type: _type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
function parseMapDef(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef(), parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef() {
	return { not: parseAnyDef() };
}
function parseNullDef() {
	return { type: "null" };
}
var primitiveMappings = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings[def.innerType._def.typeName], "null"] };
	const base = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf": res.multipleOf = check.value;
	}
	return res;
}
function parseObjectDef(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional(propDef);
		const parsedDef = parseDef(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional(schema) {
	try {
		return schema.isOptional();
	} catch {
		return true;
	}
}
var parseOptionalDef = (def, refs) => {
	if (refs.currentPath.toString() === refs.propertyPath?.toString()) return parseDef(def.innerType._def, refs);
	const innerSchema = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef(def.out._def, refs);
	const inputSchema = parseDef(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [inputSchema, parseDef(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			inputSchema ? "1" : "0"
		]
	})].filter((schema) => schema !== void 0) };
};
function parsePromiseDef(def, refs) {
	return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef() {
	return { not: parseAnyDef() };
}
function parseUnknownDef() {
	return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
	switch (typeName) {
		case "ZodString": return parseStringDef(def, refs);
		case "ZodNumber": return parseNumberDef(def);
		case "ZodObject": return parseObjectDef(def, refs);
		case "ZodBigInt": return parseBigintDef(def);
		case "ZodBoolean": return parseBooleanDef();
		case "ZodDate": return parseDateDef(def, refs);
		case "ZodUndefined": return parseUndefinedDef();
		case "ZodNull": return parseNullDef();
		case "ZodArray": return parseArrayDef(def, refs);
		case "ZodUnion":
		case "ZodDiscriminatedUnion": return parseUnionDef(def, refs);
		case "ZodIntersection": return parseIntersectionDef(def, refs);
		case "ZodTuple": return parseTupleDef(def, refs);
		case "ZodRecord": return parseRecordDef(def, refs);
		case "ZodLiteral": return parseLiteralDef(def);
		case "ZodEnum": return parseEnumDef(def);
		case "ZodNativeEnum": return parseNativeEnumDef(def);
		case "ZodNullable": return parseNullableDef(def, refs);
		case "ZodOptional": return parseOptionalDef(def, refs);
		case "ZodMap": return parseMapDef(def, refs);
		case "ZodSet": return parseSetDef(def, refs);
		case "ZodLazy": return () => def.getter()._def;
		case "ZodPromise": return parsePromiseDef(def, refs);
		case "ZodNaN":
		case "ZodNever": return parseNeverDef();
		case "ZodEffects": return parseEffectsDef(def, refs);
		case "ZodAny": return parseAnyDef();
		case "ZodUnknown": return parseUnknownDef();
		case "ZodDefault": return parseDefaultDef(def, refs);
		case "ZodBranded": return parseBrandedDef(def, refs);
		case "ZodReadonly": return parseReadonlyDef(def, refs);
		case "ZodCatch": return parseCatchDef(def, refs);
		case "ZodPipeline": return parsePipelineDef(def, refs);
		case "ZodFunction":
		case "ZodVoid":
		case "ZodSymbol": return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
	}
};
var addMeta = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs = (options) => {
	const _options = getDefaultOptions(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name3, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name3
			],
			jsonSchema: void 0
		}]))
	};
};
var zod3ToJsonSchema = (schema, options) => {
	const refs = getRefs(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name4, schema2]) => ({
		...acc,
		[name4]: parseDef(schema2._def, {
			...refs,
			currentPath: [
				...refs.basePath,
				refs.definitionPath,
				name4
			]
		}, true) ?? parseAnyDef()
	}), {}) : void 0;
	const name3 = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
	const main = parseDef(schema._def, name3 === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name3
		]
	}, false) ?? parseAnyDef();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name3 === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name3
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name3]: main
		}
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
	let schema;
	return () => {
		if (schema == null) schema = createSchema();
		return schema;
	};
}
function jsonSchema(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema(value) {
	return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
	return schema == null ? jsonSchema({
		type: "object",
		properties: {},
		additionalProperties: false
	}) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
	return jsonSchema(() => {
		if (!hasStandardJsonSchema(standardSchema2)) throw new Error(`Standard schema vendor '${standardSchema2["~standard"].vendor}' does not support JSON Schema conversion.`);
		return addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" }));
	}, { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError({
				value,
				cause: result.issues
			})
		};
	} });
}
function hasStandardJsonSchema(schema) {
	return schema["~standard"].jsonSchema != null;
}
function zod3Schema(zodSchema2, options) {
	const useReferences = options?.useReferences ?? false;
	return jsonSchema(() => zod3ToJsonSchema(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema(zodSchema2, options) {
	const useReferences = options?.useReferences ?? false;
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
	if (isZod4Schema(zodSchema2)) return zod4Schema(zodSchema2, options);
	else return zod3Schema(zodSchema2, options);
}
async function validateTypes({ value, schema, context }) {
	const result = await safeValidateTypes({
		value,
		schema,
		context
	});
	if (!result.success) throw TypeValidationError.wrap({
		value,
		cause: result.error,
		context
	});
	return result.value;
}
async function safeValidateTypes({ value, schema, context }) {
	const actualSchema = asSchema(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: result.error,
				context
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: error,
				context
			}),
			rawValue: value
		};
	}
}
async function parseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return value;
		return await validateTypes({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) throw error;
		throw new JSONParseError({
			text,
			cause: error
		});
	}
}
async function safeParseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError.isInstance(error) ? error : new JSONParseError({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function parseJsonEventStream({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON({
			text: data,
			schema
		}));
	} }));
}
async function parseProviderOptions({ provider, providerOptions, schema }) {
	if (providerOptions?.[provider] == null) return;
	const parsedProviderOptions = await safeValidateTypes({
		value: providerOptions[provider],
		schema
	});
	if (!parsedProviderOptions.success) throw new InvalidArgumentError$1({
		argument: "providerOptions",
		message: `invalid ${provider} provider options`,
		cause: parsedProviderOptions.error
	});
	return parsedProviderOptions.value;
}
var getOriginalFetch4 = () => globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch }) => await postToApi({
	url,
	headers: {
		"Content-Type": "application/json",
		...headers
	},
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch
});
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch4() }) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$2}`, getRuntimeEnvironmentUserAgent()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool(tool2) {
	return tool2;
}
function dynamicTool(tool2) {
	return {
		...tool2,
		type: "dynamic"
	};
}
function createProviderExecutedToolFactory({ id, inputSchema, outputSchema, supportsDeferredResults }) {
	return ({ onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		isProviderExecuted: true,
		id,
		args,
		inputSchema,
		outputSchema,
		onInputStart,
		onInputDelta,
		onInputAvailable,
		supportsDeferredResults
	});
}
async function resolve(value) {
	if (typeof value === "function") value = value();
	return value;
}
var retryWithExponentialBackoff = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2, abortSignal, shouldRetry, getDelayInMs = ({ exponentialBackoffDelay }) => exponentialBackoffDelay, createRetryError = ({ message }) => new Error(message) }) => async (f) => retryWithExponentialBackoffInternal(f, {
	maxRetries,
	delayInMs: initialDelayInMs,
	backoffFactor,
	abortSignal,
	shouldRetry,
	getDelayInMs,
	createRetryError
});
async function retryWithExponentialBackoffInternal(f, { maxRetries, delayInMs, backoffFactor, abortSignal, shouldRetry, getDelayInMs, createRetryError }, errors = []) {
	try {
		return await f();
	} catch (error) {
		if (isAbortError(error)) throw error;
		if (maxRetries === 0) throw error;
		const errorMessage = getErrorMessage(error);
		const newErrors = [...errors, error];
		const tryNumber = newErrors.length;
		if (tryNumber > maxRetries) throw createRetryError({
			message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
			reason: "maxRetriesExceeded",
			errors: newErrors
		});
		if (await shouldRetry(error) && tryNumber <= maxRetries) {
			await delay(getDelayInMs({
				error,
				exponentialBackoffDelay: delayInMs
			}), { abortSignal });
			return retryWithExponentialBackoffInternal(f, {
				maxRetries,
				delayInMs: backoffFactor * delayInMs,
				backoffFactor,
				abortSignal,
				shouldRetry,
				getDelayInMs,
				createRetryError
			}, newErrors);
		}
		if (tryNumber === 1) throw error;
		throw createRetryError({
			message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
			reason: "errorNotRetryable",
			errors: newErrors
		});
	}
}
var textDecoder2 = new TextDecoder();
function wrapResponseBodyStream({ stream, url, requestBodyValues, statusCode, responseHeaders }) {
	const reader = stream.getReader();
	let readerReleased = false;
	const releaseReader = () => {
		if (!readerReleased) {
			reader.releaseLock();
			readerReleased = true;
		}
	};
	return new ReadableStream({
		async pull(controller) {
			try {
				const { done, value } = await reader.read();
				if (done) {
					releaseReader();
					controller.close();
				} else controller.enqueue(value);
			} catch (error) {
				releaseReader();
				if (isAbortError(error)) {
					controller.error(error);
					return;
				}
				controller.error(handleFetchError({
					error: new APICallError({
						message: "Failed to process successful response",
						cause: error,
						statusCode,
						url,
						responseHeaders,
						requestBodyValues
					}),
					url,
					requestBodyValues
				}));
			}
		},
		async cancel(reason) {
			try {
				await reader.cancel(reason);
			} finally {
				releaseReader();
			}
		}
	});
}
async function readResponseBodyAsText({ response, url }) {
	return textDecoder2.decode(await readResponseWithSizeLimit({
		response,
		url
	}));
}
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await readResponseBodyAsText({
		response,
		url
	});
	const responseHeaders = extractResponseHeaders(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable?.(response)
		})
	};
	try {
		const parsedError = await parseJSON({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable?.(response, parsedError)
			})
		};
	} catch {
		return {
			responseHeaders,
			value: new APICallError({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable?.(response)
			})
		};
	}
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response, url, requestBodyValues }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonEventStream({
			stream: wrapResponseBodyStream({
				stream: response.body,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders
			}),
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await readResponseBodyAsText({
		response,
		url
	});
	const parsedResult = await safeParseJSON({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders(response);
	if (!parsedResult.success) throw new APICallError({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
var createJsonLinesResponseHandler = (responseSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonLines({
			stream: response.body,
			schema: responseSchema
		})
	};
};
async function* parseJsonLines({ stream, schema }) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	let finished = false;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) {
				finished = true;
				buffer += decoder.decode();
				break;
			}
			buffer += decoder.decode(value, { stream: true });
			let lineEnd = buffer.indexOf("\n");
			while (lineEnd !== -1) {
				const line = buffer.slice(0, lineEnd).replace(/\r$/, "");
				buffer = buffer.slice(lineEnd + 1);
				if (line.trim().length > 0) yield await parseJSON({
					text: line,
					schema
				});
				lineEnd = buffer.indexOf("\n");
			}
		}
		const finalLine = buffer.replace(/\r$/, "");
		if (finalLine.trim().length > 0) yield await parseJSON({
			text: finalLine,
			schema
		});
	} finally {
		if (!finished) await reader.cancel().catch(() => {});
		reader.releaseLock();
	}
}
function isJSONSerializable(value) {
	if (value === null || value === void 0) return true;
	const type = typeof value;
	if (type === "string" || type === "number" || type === "boolean") return true;
	if (type === "function" || type === "symbol" || type === "bigint") return false;
	if (Array.isArray(value)) return value.every(isJSONSerializable);
	if (Object.getPrototypeOf(value) === Object.prototype) return Object.values(value).every(isJSONSerializable);
	return false;
}
var name2$2 = "AI_SerializationError";
var marker3$2 = `vercel.ai.error.${name2$2}`;
var symbol2$2 = Symbol.for(marker3$2);
var _a2$2;
var _b2$2;
var SerializationError = class extends (_b2$2 = AISDKError, _a2$2 = symbol2$2, _b2$2) {
	constructor({ message = "Failed to serialize value.", cause } = {}) {
		super({
			name: name2$2,
			message,
			cause
		});
		this[_a2$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3$2);
	}
};
function serializeModelOptions(options) {
	const serializableConfig = {};
	for (const [key, value] of Object.entries(options.config)) if (key === "headers") {
		const resolvedHeaders = resolveSync(value);
		if (isJSONSerializable(resolvedHeaders)) serializableConfig[key] = resolvedHeaders;
	} else if (isJSONSerializable(value)) serializableConfig[key] = value;
	return {
		modelId: options.modelId,
		config: serializableConfig
	};
}
function resolveSync(value) {
	let next = value;
	if (typeof value === "function") next = value();
	if (next instanceof Promise) throw new SerializationError({ message: "Cannot serialize asynchronous model options." });
	return next;
}
var TRANSCRIPTION_STREAM_START_FRAME_TYPE = "transcription-stream.start";
var TRANSCRIPTION_STREAM_AUDIO_DONE_FRAME_TYPE = "transcription-stream.audio-done";
function parseTranscriptionStreamPart(text) {
	let value;
	try {
		value = secureJsonParse(text);
	} catch {
		return;
	}
	if (value == null || typeof value !== "object" || Array.isArray(value)) return;
	const part = value;
	switch (part.type) {
		case "stream-start": return Array.isArray(part.warnings) && part.warnings.every(isWarning) ? part : void 0;
		case "transcript-delta": return isString(part.delta) && isOptional(part.id, isString) && isOptional(part.providerMetadata, isRecord$1) ? part : void 0;
		case "transcript-partial": return isString(part.text) && isOptional(part.id, isString) && isOptional(part.startSecond, isNumber) && isOptional(part.durationInSeconds, isNumber) && isOptional(part.channelIndex, isNumber) && isOptional(part.providerMetadata, isRecord$1) ? part : void 0;
		case "transcript-final": return isString(part.text) && isOptional(part.id, isString) && isOptional(part.startSecond, isNumber) && isOptional(part.endSecond, isNumber) && isOptional(part.channelIndex, isNumber) && isOptional(part.providerMetadata, isRecord$1) ? part : void 0;
		case "finish": return isString(part.text) && Array.isArray(part.segments) && part.segments.every(isSegment) && isOptional(part.language, isString) && isOptional(part.durationInSeconds, isNumber) && isOptional(part.providerMetadata, isRecord$1) ? part : void 0;
		case "response-metadata": {
			if (!(isOptional(part.modelId, isString) && isOptional(part.headers, isRecord$1))) return;
			const timestamp = part.timestamp;
			if (timestamp == null) return {
				...part,
				timestamp: void 0
			};
			if (typeof timestamp !== "string") return;
			const revived = new Date(timestamp);
			return Number.isNaN(revived.getTime()) ? void 0 : {
				...part,
				timestamp: revived
			};
		}
		case "raw": return "rawValue" in part ? part : void 0;
		case "error": return "error" in part ? part : void 0;
		default: return;
	}
}
function isString(value) {
	return typeof value === "string";
}
function isNumber(value) {
	return typeof value === "number";
}
function isOptional(value, check) {
	return value === void 0 || check(value);
}
function isWarning(value) {
	return isRecord$1(value) && isString(value.type);
}
function isSegment(value) {
	return isRecord$1(value) && isString(value.text) && isNumber(value.startSecond) && isNumber(value.endSecond);
}
function withoutTrailingSlash(url) {
	return url?.replace(/\/$/, "");
}
function isExecutableTool(tool2) {
	return tool2 != null && typeof tool2.execute === "function";
}
function isAsyncIterable(obj) {
	return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
async function* executeTool({ tool: tool2, input, options }) {
	const result = tool2.execute(input, options);
	if (isAsyncIterable(result)) {
		let lastOutput;
		for await (const output of result) {
			lastOutput = output;
			yield {
				type: "preliminary",
				output
			};
		}
		yield {
			type: "final",
			output: lastOutput
		};
	} else yield {
		type: "final",
		output: await result
	};
}
function toolCaller(tool2, definition) {
	return Object.defineProperty({ ...tool2 }, "experimental_toolCaller", { value: definition });
}
function getToolCaller(tool2) {
	return tool2?.experimental_toolCaller;
}
//#endregion
//#region node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var get_context_exports = {};
	__export(get_context_exports, {
		SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
		getContext: () => getContext
	});
	module.exports = __toCommonJS(get_context_exports);
	var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
	function getContext() {
		return globalThis[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
	}
	0 && (module.exports = {
		SYMBOL_FOR_REQ_CONTEXT,
		getContext
	});
}));
//#endregion
//#region node_modules/@vercel/oidc/dist/auth-errors.js
var require_auth_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var auth_errors_exports = {};
	__export(auth_errors_exports, {
		AccessTokenMissingError: () => AccessTokenMissingError,
		RefreshAccessTokenFailedError: () => RefreshAccessTokenFailedError
	});
	module.exports = __toCommonJS(auth_errors_exports);
	var AccessTokenMissingError = class extends Error {
		constructor() {
			super("No authentication found. Please log in with the Vercel CLI (vercel login).");
			this.name = "AccessTokenMissingError";
		}
	};
	var RefreshAccessTokenFailedError = class extends Error {
		constructor(cause) {
			super("Failed to refresh authentication token.", { cause });
			this.name = "RefreshAccessTokenFailedError";
		}
	};
	0 && (module.exports = {
		AccessTokenMissingError,
		RefreshAccessTokenFailedError
	});
}));
//#endregion
//#region node_modules/@ai-sdk/gateway/dist/index.js
var import_index_browser = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_browser_exports = {};
	__export(index_browser_exports, {
		AccessTokenMissingError: () => import_auth_errors.AccessTokenMissingError,
		RefreshAccessTokenFailedError: () => import_auth_errors.RefreshAccessTokenFailedError,
		getContext: () => import_get_context.getContext,
		getVercelOidcToken: () => getVercelOidcToken,
		getVercelOidcTokenSync: () => getVercelOidcTokenSync,
		getVercelToken: () => getVercelToken
	});
	module.exports = __toCommonJS(index_browser_exports);
	var import_get_context = require_get_context();
	var import_auth_errors = require_auth_errors();
	async function getVercelOidcToken() {
		return "";
	}
	function getVercelOidcTokenSync() {
		return "";
	}
	async function getVercelToken() {
		throw new Error("getVercelToken is not supported in browser environments");
	}
	0 && (module.exports = {
		AccessTokenMissingError,
		RefreshAccessTokenFailedError,
		getContext,
		getVercelOidcToken,
		getVercelOidcTokenSync,
		getVercelToken
	});
})))();
var GATEWAY_REALTIME_SUBPROTOCOL = "ai-gateway-realtime.v1";
var GATEWAY_TRANSCRIPTION_SUBPROTOCOL = "ai-gateway-transcription.v1";
var GATEWAY_AUTH_SUBPROTOCOL_PREFIX = "ai-gateway-auth.";
var GATEWAY_TEAM_SUBPROTOCOL_PREFIX = "ai-gateway-team.";
function getGatewayRealtimeProtocols(token, options) {
	return buildGatewayProtocols(GATEWAY_REALTIME_SUBPROTOCOL, token, options);
}
function getGatewayTranscriptionProtocols(token, options) {
	return buildGatewayProtocols(GATEWAY_TRANSCRIPTION_SUBPROTOCOL, token, options);
}
function buildGatewayProtocols(marker12, token, options) {
	const protocols = [marker12, `${GATEWAY_AUTH_SUBPROTOCOL_PREFIX}${token}`];
	if (options?.teamIdOrSlug) protocols.push(`${GATEWAY_TEAM_SUBPROTOCOL_PREFIX}${encodeSubprotocolValue(options.teamIdOrSlug)}`);
	return protocols;
}
function encodeSubprotocolValue(value) {
	const bytes = new TextEncoder().encode(value);
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}
var z$1 = {
	any,
	array,
	boolean,
	discriminatedUnion,
	enum: _enum,
	literal,
	number,
	object,
	record,
	string,
	union,
	unknown
};
var symbol$1 = Symbol.for("vercel.ai.gateway.error");
var _a$1;
var _b$1;
var GatewayError = class _GatewayError extends (_b$1 = Error, _a$1 = symbol$1, _b$1) {
	constructor({ message, statusCode = 500, cause, generationId, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500) }) {
		super(generationId ? `${message} [${generationId}]` : message);
		this[_a$1] = true;
		this.statusCode = statusCode;
		this.cause = cause;
		this.generationId = generationId;
		this.isRetryable = isRetryable;
	}
	/**
	* Checks if the given error is a Gateway Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is a Gateway Error, false otherwise.
	*/
	static isInstance(error) {
		return _GatewayError.hasMarker(error);
	}
	static hasMarker(error) {
		return typeof error === "object" && error !== null && symbol$1 in error && error[symbol$1] === true;
	}
};
var name$1 = "GatewayAuthenticationError";
var marker2$1 = `vercel.ai.gateway.error.${name$1}`;
var symbol2$1 = Symbol.for(marker2$1);
var _a2$1;
var _b2$1;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2$1 = GatewayError, _a2$1 = symbol2$1, _b2$1) {
	constructor({ message = "Authentication failed", statusCode = 401, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a2$1] = true;
		this.name = name$1;
		this.type = "authentication_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol2$1 in error;
	}
	/**
	* Creates a contextual error message when authentication fails
	*/
	static createContextualError({ apiKeyProvided, oidcTokenProvided, statusCode = 401, cause, generationId }) {
		let contextualMessage;
		if (apiKeyProvided) contextualMessage = `AI Gateway authentication failed: Invalid API key or token.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide an API key or Vercel access token via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
		else if (oidcTokenProvided) contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
or pass a Vercel access token via the 'apiKey' option.`;
		else contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - Vercel access token:
Pass a Vercel personal access token or Vercel app access token via the 'apiKey' option.

Option 3 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
		return new _GatewayAuthenticationError({
			message: contextualMessage,
			statusCode,
			cause,
			generationId
		});
	}
};
var name2$1 = "GatewayInvalidRequestError";
var marker3$1 = `vercel.ai.gateway.error.${name2$1}`;
var symbol3$1 = Symbol.for(marker3$1);
var _a3$1;
var _b3$1;
var GatewayInvalidRequestError = class extends (_b3$1 = GatewayError, _a3$1 = symbol3$1, _b3$1) {
	constructor({ message = "Invalid request", statusCode = 400, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a3$1] = true;
		this.name = name2$1;
		this.type = "invalid_request_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol3$1 in error;
	}
};
var name3$1 = "GatewayRateLimitError";
var marker4$1 = `vercel.ai.gateway.error.${name3$1}`;
var symbol4$1 = Symbol.for(marker4$1);
var _a4$1;
var _b4$1;
var GatewayRateLimitError = class extends (_b4$1 = GatewayError, _a4$1 = symbol4$1, _b4$1) {
	constructor({ message = "Rate limit exceeded", statusCode = 429, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a4$1] = true;
		this.name = name3$1;
		this.type = "rate_limit_exceeded";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol4$1 in error;
	}
};
var name4$1 = "GatewayModelNotFoundError";
var marker5$1 = `vercel.ai.gateway.error.${name4$1}`;
var symbol5$1 = Symbol.for(marker5$1);
var modelNotFoundParamSchema = lazySchema(() => zodSchema(z$1.object({ modelId: z$1.string() })));
var _a5$1;
var _b5$1;
var GatewayModelNotFoundError = class extends (_b5$1 = GatewayError, _a5$1 = symbol5$1, _b5$1) {
	constructor({ message = "Model not found", statusCode = 404, modelId, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a5$1] = true;
		this.name = name4$1;
		this.type = "model_not_found";
		this.modelId = modelId;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol5$1 in error;
	}
};
var name5$1 = "GatewayNotFoundError";
var marker6$1 = `vercel.ai.gateway.error.${name5$1}`;
var symbol6$1 = Symbol.for(marker6$1);
var _a6$1;
var _b6$1;
var GatewayNotFoundError = class extends (_b6$1 = GatewayError, _a6$1 = symbol6$1, _b6$1) {
	constructor({ message = "Resource not found", statusCode = 404, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a6$1] = true;
		this.name = name5$1;
		this.type = "not_found";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol6$1 in error;
	}
};
var name6$1 = "GatewayInternalServerError";
var marker7$1 = `vercel.ai.gateway.error.${name6$1}`;
var symbol7$1 = Symbol.for(marker7$1);
var _a7$1;
var _b7$1;
var GatewayInternalServerError = class extends (_b7$1 = GatewayError, _a7$1 = symbol7$1, _b7$1) {
	constructor({ message = "Internal server error", statusCode = 500, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a7$1] = true;
		this.name = name6$1;
		this.type = "internal_server_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol7$1 in error;
	}
};
var name7$1 = "GatewayFailedDependencyError";
var marker8$1 = `vercel.ai.gateway.error.${name7$1}`;
var symbol8$1 = Symbol.for(marker8$1);
var _a8$1;
var _b8$1;
var GatewayFailedDependencyError = class extends (_b8$1 = GatewayError, _a8$1 = symbol8$1, _b8$1) {
	constructor({ message = "Failed dependency", statusCode = 424, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a8$1] = true;
		this.name = name7$1;
		this.type = "failed_dependency";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol8$1 in error;
	}
};
var name8$1 = "GatewayForbiddenError";
var marker9$1 = `vercel.ai.gateway.error.${name8$1}`;
var symbol9$1 = Symbol.for(marker9$1);
var forbiddenParamSchema = lazySchema(() => zodSchema(z$1.object({ ruleId: z$1.string() })));
var _a9$1;
var _b9$1;
var GatewayForbiddenError = class extends (_b9$1 = GatewayError, _a9$1 = symbol9$1, _b9$1) {
	constructor({ message = "Forbidden", statusCode = 403, cause, generationId, ruleId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a9$1] = true;
		this.name = name8$1;
		this.type = "forbidden";
		this.ruleId = ruleId;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol9$1 in error;
	}
};
var name9$1 = "GatewayResponseError";
var marker10$1 = `vercel.ai.gateway.error.${name9$1}`;
var symbol10$1 = Symbol.for(marker10$1);
var _a10$1;
var _b10$1;
var GatewayResponseError = class extends (_b10$1 = GatewayError, _a10$1 = symbol10$1, _b10$1) {
	constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause, generationId, isRetryable } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId,
			isRetryable
		});
		this[_a10$1] = true;
		this.name = name9$1;
		this.type = "response_error";
		this.response = response;
		this.validationError = validationError;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol10$1 in error;
	}
};
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod, isRetryable }) {
	const parseResult = await safeValidateTypes({
		value: response,
		schema: gatewayErrorResponseSchema
	});
	if (!parseResult.success) {
		const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : void 0;
		return new GatewayResponseError({
			message: `Invalid error response format: ${defaultMessage}`,
			statusCode,
			response,
			validationError: parseResult.error,
			cause,
			generationId: rawGenerationId,
			isRetryable
		});
	}
	const validatedResponse = parseResult.value;
	const errorType = validatedResponse.error.type;
	const message = validatedResponse.error.message;
	const generationId = validatedResponse.generationId ?? void 0;
	switch (errorType) {
		case "authentication_error": return GatewayAuthenticationError.createContextualError({
			apiKeyProvided: authMethod === "api-key",
			oidcTokenProvided: authMethod === "oidc",
			statusCode,
			cause,
			generationId
		});
		case "invalid_request_error": return new GatewayInvalidRequestError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "rate_limit_exceeded": return new GatewayRateLimitError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "model_not_found": {
			const modelResult = await safeValidateTypes({
				value: validatedResponse.error.param,
				schema: modelNotFoundParamSchema
			});
			return new GatewayModelNotFoundError({
				message,
				statusCode,
				modelId: modelResult.success ? modelResult.value.modelId : void 0,
				cause,
				generationId
			});
		}
		case "not_found": return new GatewayNotFoundError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "internal_server_error": return new GatewayInternalServerError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "failed_dependency": return new GatewayFailedDependencyError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "forbidden": {
			const ruleResult = await safeValidateTypes({
				value: validatedResponse.error.param,
				schema: forbiddenParamSchema
			});
			return new GatewayForbiddenError({
				message,
				statusCode,
				cause,
				generationId,
				ruleId: ruleResult.success ? ruleResult.value.ruleId : void 0
			});
		}
		default: return new GatewayInternalServerError({
			message,
			statusCode,
			cause,
			generationId
		});
	}
}
var gatewayErrorResponseSchema = lazySchema(() => zodSchema(z$1.object({
	error: z$1.object({
		message: z$1.string(),
		type: z$1.string().nullish(),
		param: z$1.unknown().nullish(),
		code: z$1.union([z$1.string(), z$1.number()]).nullish()
	}),
	generationId: z$1.string().nullish()
})));
function extractApiCallResponse(error) {
	if (error.data !== void 0) return error.data;
	if (error.responseBody != null) try {
		return secureJsonParse(error.responseBody);
	} catch {
		return error.responseBody;
	}
	return {};
}
var name10$1 = "GatewayTimeoutError";
var marker11$1 = `vercel.ai.gateway.error.${name10$1}`;
var symbol11$1 = Symbol.for(marker11$1);
var _a11$1;
var _b11$1;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b11$1 = GatewayError, _a11$1 = symbol11$1, _b11$1) {
	constructor({ message = "Request timed out", statusCode = 408, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a11$1] = true;
		this.name = name10$1;
		this.type = "timeout_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol11$1 in error;
	}
	/**
	* Creates a helpful timeout error message with troubleshooting guidance
	*/
	static createTimeoutError({ originalMessage, statusCode = 408, cause, generationId }) {
		const message = `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
		return new _GatewayTimeoutError({
			message,
			statusCode,
			cause,
			generationId
		});
	}
};
function isTimeoutError(error) {
	if (!(error instanceof Error)) return false;
	const errorCode = error.code;
	if (typeof errorCode === "string") return [
		"UND_ERR_HEADERS_TIMEOUT",
		"UND_ERR_BODY_TIMEOUT",
		"UND_ERR_CONNECT_TIMEOUT"
	].includes(errorCode);
	return false;
}
async function asGatewayError(error, authMethod) {
	if (GatewayError.isInstance(error)) return error;
	if (isTimeoutError(error)) return GatewayTimeoutError.createTimeoutError({
		originalMessage: error instanceof Error ? error.message : "Unknown error",
		cause: error
	});
	if (APICallError.isInstance(error)) {
		if (error.cause && isTimeoutError(error.cause)) return GatewayTimeoutError.createTimeoutError({
			originalMessage: error.message,
			cause: error
		});
		return await createGatewayErrorFromResponse({
			response: extractApiCallResponse(error),
			statusCode: error.statusCode ?? 500,
			defaultMessage: "Gateway request failed",
			cause: error,
			authMethod,
			isRetryable: error.isRetryable && (error.statusCode == null || error.statusCode < 400) ? true : void 0
		});
	}
	return await createGatewayErrorFromResponse({
		response: {},
		statusCode: 500,
		defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
		cause: error,
		authMethod
	});
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
var VERCEL_AI_GATEWAY_TEAM_HEADER = "x-vercel-ai-gateway-team";
async function parseAuthMethod(headers) {
	const result = await safeValidateTypes({
		value: headers[GATEWAY_AUTH_METHOD_HEADER],
		schema: gatewayAuthMethodSchema
	});
	return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = lazySchema(() => zodSchema(z$1.union([z$1.literal("api-key"), z$1.literal("oidc")])));
var KNOWN_MODEL_TYPES = [
	"embedding",
	"evaluation",
	"image",
	"language",
	"realtime",
	"reranking",
	"speech",
	"transcription",
	"video"
];
var GatewayFetchMetadata = class {
	constructor(config) {
		this.config = config;
	}
	async getAvailableModels() {
		try {
			const { value } = await getFromApi({
				url: `${this.config.baseURL}/config`,
				validateUrl: false,
				headers: this.config.headers ? await resolve(this.config.headers) : void 0,
				successfulResponseHandler: createJsonResponseHandler(gatewayAvailableModelsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
	async getCredits() {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/credits`,
				validateUrl: false,
				headers: this.config.headers ? await resolve(this.config.headers) : void 0,
				successfulResponseHandler: createJsonResponseHandler(gatewayCreditsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayAvailableModelsResponseSchema = lazySchema(() => zodSchema(z$1.object({ models: z$1.array(z$1.object({
	id: z$1.string(),
	name: z$1.string(),
	description: z$1.string().nullish(),
	pricing: z$1.object({
		input: z$1.string(),
		output: z$1.string(),
		input_cache_read: z$1.string().nullish(),
		input_cache_write: z$1.string().nullish()
	}).transform(({ input, output, input_cache_read, input_cache_write }) => ({
		input,
		output,
		...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
		...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
	})).nullish(),
	specification: z$1.object({
		specificationVersion: z$1.literal("v4"),
		provider: z$1.string(),
		modelId: z$1.string()
	}),
	modelType: z$1.string().nullish()
})).transform((models) => models.filter((m) => m.modelType == null || KNOWN_MODEL_TYPES.includes(m.modelType))) })));
var gatewayCreditsResponseSchema = lazySchema(() => zodSchema(z$1.object({
	balance: z$1.string(),
	total_used: z$1.string()
}).transform(({ balance, total_used }) => ({
	balance,
	totalUsed: total_used
}))));
var GatewaySpendReport = class {
	constructor(config) {
		this.config = config;
	}
	async getSpendReport(params) {
		try {
			const baseUrl = new URL(this.config.baseURL);
			const searchParams = new URLSearchParams();
			searchParams.set("start_date", params.startDate);
			searchParams.set("end_date", params.endDate);
			if (params.groupBy) searchParams.set("group_by", params.groupBy);
			if (params.datePart) searchParams.set("date_part", params.datePart);
			if (params.userId) searchParams.set("user_id", params.userId);
			if (params.model) searchParams.set("model", params.model);
			if (params.provider) searchParams.set("provider", params.provider);
			if (params.credentialType) searchParams.set("credential_type", params.credentialType);
			if (params.tags && params.tags.length > 0) searchParams.set("tags", params.tags.join(","));
			const { value } = await getFromApi({
				url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
				validateUrl: false,
				headers: this.config.headers ? await resolve(this.config.headers) : void 0,
				successfulResponseHandler: createJsonResponseHandler(gatewaySpendReportResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewaySpendReportResponseSchema = lazySchema(() => zodSchema(z$1.object({ results: z$1.array(z$1.object({
	day: z$1.string().optional(),
	hour: z$1.string().optional(),
	user: z$1.string().optional(),
	model: z$1.string().optional(),
	tag: z$1.string().optional(),
	provider: z$1.string().optional(),
	credential_type: z$1.enum(["byok", "system"]).optional(),
	total_cost: z$1.number(),
	market_cost: z$1.number().optional(),
	input_tokens: z$1.number().optional(),
	output_tokens: z$1.number().optional(),
	cached_input_tokens: z$1.number().optional(),
	cache_creation_input_tokens: z$1.number().optional(),
	reasoning_tokens: z$1.number().optional(),
	request_count: z$1.number().optional()
}).transform(({ credential_type, total_cost, market_cost, input_tokens, output_tokens, cached_input_tokens, cache_creation_input_tokens, reasoning_tokens, request_count, ...rest }) => ({
	...rest,
	...credential_type !== void 0 ? { credentialType: credential_type } : {},
	totalCost: total_cost,
	...market_cost !== void 0 ? { marketCost: market_cost } : {},
	...input_tokens !== void 0 ? { inputTokens: input_tokens } : {},
	...output_tokens !== void 0 ? { outputTokens: output_tokens } : {},
	...cached_input_tokens !== void 0 ? { cachedInputTokens: cached_input_tokens } : {},
	...cache_creation_input_tokens !== void 0 ? { cacheCreationInputTokens: cache_creation_input_tokens } : {},
	...reasoning_tokens !== void 0 ? { reasoningTokens: reasoning_tokens } : {},
	...request_count !== void 0 ? { requestCount: request_count } : {}
}))) })));
var GatewayGenerationInfoFetcher = class {
	constructor(config) {
		this.config = config;
	}
	async getGenerationInfo(params) {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
				validateUrl: false,
				headers: this.config.headers ? await resolve(this.config.headers) : void 0,
				successfulResponseHandler: createJsonResponseHandler(gatewayGenerationInfoResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayGenerationInfoResponseSchema = lazySchema(() => zodSchema(z$1.object({ data: z$1.object({
	id: z$1.string(),
	total_cost: z$1.number(),
	upstream_inference_cost: z$1.number(),
	usage: z$1.number(),
	created_at: z$1.string(),
	model: z$1.string(),
	is_byok: z$1.boolean(),
	provider_name: z$1.string(),
	streamed: z$1.boolean(),
	finish_reason: z$1.string(),
	latency: z$1.number(),
	generation_time: z$1.number(),
	native_tokens_prompt: z$1.number(),
	native_tokens_completion: z$1.number(),
	native_tokens_reasoning: z$1.number(),
	native_tokens_cached: z$1.number(),
	native_tokens_cache_creation: z$1.number(),
	billable_web_search_calls: z$1.number()
}).transform(({ total_cost, upstream_inference_cost, created_at, is_byok, provider_name, finish_reason, generation_time, native_tokens_prompt, native_tokens_completion, native_tokens_reasoning, native_tokens_cached, native_tokens_cache_creation, billable_web_search_calls, ...rest }) => ({
	...rest,
	totalCost: total_cost,
	upstreamInferenceCost: upstream_inference_cost,
	createdAt: created_at,
	isByok: is_byok,
	providerName: provider_name,
	finishReason: finish_reason,
	generationTime: generation_time,
	promptTokens: native_tokens_prompt,
	completionTokens: native_tokens_completion,
	reasoningTokens: native_tokens_reasoning,
	cachedTokens: native_tokens_cached,
	cacheCreationTokens: native_tokens_cache_creation,
	billableWebSearchCalls: billable_web_search_calls
})) }).transform(({ data }) => data)));
var GatewayBatch = class {
	constructor(config) {
		this.config = config;
		this.specificationVersion = "v4";
		this.supportedUrls = { "*/*": [/.*/] };
		this.provider = `${config.provider}.batch`;
	}
	/**
	* Starts a durable batch of text-generation requests through the Gateway's
	* async batch surface (`POST {baseURL}/batch/start`). The returned
	* `batchId` is the Gateway job id — provider-native batch ids stay
	* server-side, so status and results always route back through the
	* Gateway job.
	*/
	async doStartBatch({ requests, providerOptions, headers, abortSignal, webhookUrl }) {
		assertTextBatchRequests(requests);
		const modelId = validateSingleModel(requests);
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		const idempotencyKey = getGatewayBatchIdempotencyKey(providerOptions);
		const forwardedProviderOptions = omitGatewayIdempotencyKey(providerOptions);
		try {
			const { value: responseBody } = await postJsonToApi({
				url: this.getBatchUrl("start"),
				headers: combineHeaders(resolvedHeaders, headers, { "ai-model-id": modelId }, await resolve(this.config.o11yHeaders), idempotencyKey != null ? { "idempotency-key": idempotencyKey } : void 0),
				body: {
					...webhookUrl != null && { callbackUrl: webhookUrl },
					requests: requests.map((request) => ({
						id: request.id,
						type: request.type,
						modelId: request.modelId,
						options: maybeEncodeBatchFileParts(request.options)
					})),
					...forwardedProviderOptions != null && { providerOptions: forwardedProviderOptions }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayBatchStartResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				batchId: responseBody.batchId,
				...convertGatewayBatchStatus(responseBody),
				warnings: responseBody.warnings ?? []
			};
		} catch (error) {
			if (isAbortOrTimeoutError(error)) throw error;
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	/**
	* Retrieves the lifecycle status of a Gateway batch job
	* (`POST {baseURL}/batch/status`).
	*/
	async doGetBatchStatus({ batchId, headers, abortSignal }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { value: responseBody } = await postJsonToApi({
				url: this.getBatchUrl("status"),
				headers: combineHeaders(resolvedHeaders, headers, await resolve(this.config.o11yHeaders)),
				body: { batchId },
				successfulResponseHandler: createJsonResponseHandler(gatewayBatchStatusResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return convertGatewayBatchStatus(responseBody);
		} catch (error) {
			if (isAbortOrTimeoutError(error)) throw error;
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	/**
	* Streams the per-request results of a terminal Gateway batch job
	* (`POST {baseURL}/batch/results`, `application/x-ndjson`: one
	* `BatchV4ItemResult` JSON object per line). Items are validated minimally
	* (id + status) and passed through — the Gateway sanitizes them
	* server-side. The route responds 400 while the batch is non-terminal.
	*/
	async doGetBatchResults({ batchId, headers, abortSignal }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { value: lines } = await postJsonToApi({
				url: this.getBatchUrl("results"),
				headers: combineHeaders(resolvedHeaders, headers, await resolve(this.config.o11yHeaders)),
				body: { batchId },
				successfulResponseHandler: createJsonLinesResponseHandler(gatewayBatchItemResultLineSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return convertAsyncIteratorToReadableStream(convertGatewayBatchResultLines(lines));
		} catch (error) {
			if (isAbortOrTimeoutError(error)) throw error;
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	/** Requests cancellation; status and partial results remain separate reads. */
	async doCancelBatch({ batchId, headers, abortSignal }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { value: responseBody } = await postJsonToApi({
				url: this.getBatchUrl("cancel"),
				headers: combineHeaders(resolvedHeaders, headers, await resolve(this.config.o11yHeaders)),
				body: { batchId },
				successfulResponseHandler: createJsonResponseHandler(gatewayBatchStatusResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return { ...responseBody.providerMetadata != null && { providerMetadata: responseBody.providerMetadata } };
		} catch (error) {
			if (isAbortOrTimeoutError(error)) throw error;
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	getBatchUrl(path) {
		return `${this.config.baseURL}/batch/${path}`;
	}
};
function maybeEncodeBatchFileParts(options) {
	for (const message of options.prompt) {
		if (!Array.isArray(message.content)) continue;
		for (const part of message.content) if (part.type === "file" || part.type === "reasoning-file") part.data = maybeBase64EncodeFileData(part.data);
		else if (part.type === "tool-result" && part.output.type === "content") {
			for (const contentPart of part.output.value) if (contentPart.type === "file") contentPart.data = maybeBase64EncodeFileData(contentPart.data);
		}
	}
	return options;
}
function maybeBase64EncodeFileData(data) {
	if (data.type === "data") {
		const bytes = data.data;
		if (bytes instanceof Uint8Array) return {
			...data,
			data: Buffer.from(bytes).toString("base64")
		};
	}
	return data;
}
function validateSingleModel(requests) {
	const modelId = requests[0]?.modelId;
	if (modelId == null) throw new InvalidArgumentError$1({
		argument: "requests",
		message: "The AI Gateway Batch API requires at least one request."
	});
	for (const request of requests) if (request.modelId !== modelId) throw new InvalidArgumentError$1({
		argument: "requests",
		message: `The AI Gateway Batch API requires all requests in a batch to use the same model. Found "${modelId}" and "${request.modelId}".`
	});
	return modelId;
}
function assertTextBatchRequests(requests) {
	for (const request of requests) {
		const requestType = request.type;
		if (requestType !== "text") throw new UnsupportedFunctionalityError({
			functionality: `batch request type: ${requestType}`,
			message: `The AI Gateway Batch API does not support batch requests with type "${requestType}".`
		});
	}
}
function getGatewayBatchIdempotencyKey(providerOptions) {
	const gatewayOptions = providerOptions?.gateway;
	if (gatewayOptions == null || typeof gatewayOptions !== "object" || Array.isArray(gatewayOptions)) return;
	const key = gatewayOptions.idempotencyKey;
	return typeof key === "string" && key.length > 0 ? key : void 0;
}
function omitGatewayIdempotencyKey(providerOptions) {
	const gatewayOptions = providerOptions?.gateway;
	if (gatewayOptions == null || typeof gatewayOptions !== "object" || Array.isArray(gatewayOptions) || !("idempotencyKey" in gatewayOptions)) return providerOptions;
	const { idempotencyKey: _idempotencyKey, ...restGatewayOptions } = gatewayOptions;
	const restProviderOptions = { ...providerOptions };
	if (Object.keys(restGatewayOptions).length === 0) delete restProviderOptions.gateway;
	else restProviderOptions.gateway = restGatewayOptions;
	if (Object.keys(restProviderOptions).length === 0) return;
	return restProviderOptions;
}
function isAbortOrTimeoutError(error) {
	if (!(error instanceof Error || error instanceof DOMException)) return false;
	return error.name === "AbortError" || error.name === "TimeoutError";
}
function convertGatewayBatchStatus(body) {
	const requestCounts = normalizeBatchRequestCounts({
		total: body.requestCounts?.total,
		pending: body.requestCounts?.pending,
		completed: body.requestCounts?.completed,
		failed: body.requestCounts?.failed
	});
	return {
		status: body.status,
		...body.rawStatus != null && { rawStatus: body.rawStatus },
		...requestCounts != null && { requestCounts },
		...body.error != null && { error: {
			message: body.error.message,
			...body.error.type != null && { type: body.error.type },
			...body.error.code != null && { code: body.error.code },
			...body.error.statusCode != null && { statusCode: body.error.statusCode }
		} },
		...body.createdAt != null && { createdAt: body.createdAt },
		...body.expiresAt != null && { expiresAt: body.expiresAt },
		...body.providerMetadata != null && { providerMetadata: body.providerMetadata }
	};
}
async function* convertGatewayBatchResultLines(lines) {
	for await (const line of lines) {
		const item = line;
		if (item.status === "succeeded") {
			const response = item.result?.response;
			if (response !== void 0 && typeof response.timestamp === "string") response.timestamp = new Date(response.timestamp);
		}
		yield item;
	}
}
var gatewayBatchItemResultLineSchema = z$1.object({
	type: z$1.literal("text"),
	id: z$1.string(),
	status: z$1.enum([
		"cancelled",
		"expired",
		"failed",
		"succeeded"
	])
}).catchall(z$1.unknown());
var gatewayBatchErrorSchema = z$1.object({
	message: z$1.string(),
	type: z$1.string().nullish(),
	code: z$1.string().nullish(),
	statusCode: z$1.number().nullish()
});
var gatewayBatchRequestCountsSchema = z$1.object({
	total: z$1.number().nullish(),
	pending: z$1.number().nullish(),
	completed: z$1.number().nullish(),
	failed: z$1.number().nullish()
});
var gatewayBatchProviderMetadataSchema = z$1.record(z$1.string(), z$1.record(z$1.string(), z$1.unknown()));
var gatewayBatchStatusFieldsSchema = z$1.object({
	status: z$1.enum([
		"completed",
		"failed",
		"pending"
	]),
	rawStatus: z$1.string().nullish(),
	requestCounts: gatewayBatchRequestCountsSchema.nullish(),
	error: gatewayBatchErrorSchema.nullish(),
	createdAt: z$1.string().nullish(),
	expiresAt: z$1.string().nullish(),
	providerMetadata: gatewayBatchProviderMetadataSchema.nullish()
});
var gatewayBatchStartResponseSchema = gatewayBatchStatusFieldsSchema.extend({
	batchId: z$1.string(),
	warnings: z$1.array(z$1.object({
		requestId: z$1.string().nullish(),
		warning: z$1.unknown()
	}).catchall(z$1.unknown())).nullish()
});
var gatewayBatchStatusResponseSchema = gatewayBatchStatusFieldsSchema;
var GatewayLanguageModel = class _GatewayLanguageModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
		this.supportedUrls = { "*/*": [/.*/] };
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _GatewayLanguageModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs(options) {
		const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
		return {
			args: this.maybeEncodeFileParts(optionsWithoutSignal),
			warnings: []
		};
	}
	async doGenerate(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody, rawValue: rawResponse } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createJsonResponseHandler(z$1.any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				...responseBody,
				request: { body: args },
				response: {
					headers: responseHeaders,
					body: rawResponse
				},
				warnings: [...responseBody.warnings ?? [], ...warnings]
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	async doStream(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { value: response, responseHeaders } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createEventSourceResponseHandler(z$1.any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				stream: response.pipeThrough(new TransformStream({
					start(controller) {
						if (warnings.length > 0) controller.enqueue({
							type: "stream-start",
							warnings
						});
					},
					transform(chunk, controller) {
						if (chunk.success) {
							const streamPart = chunk.value;
							if (streamPart.type === "raw" && !options.includeRawChunks) return;
							if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") streamPart.timestamp = new Date(streamPart.timestamp);
							controller.enqueue(streamPart);
						} else controller.error(chunk.error);
					}
				})),
				request: { body: args },
				response: { headers: responseHeaders }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	/**
	* Encodes inline `Uint8Array` file data to a base64 string in place.
	* @param options - The options to encode.
	* @returns The options with the file data encoded.
	*/
	maybeEncodeFileParts(options) {
		for (const message of options.prompt) {
			if (!Array.isArray(message.content)) continue;
			for (const part of message.content) if (part.type === "file" || part.type === "reasoning-file") part.data = maybeBase64EncodeFileData2(part.data);
			else if (part.type === "tool-result" && part.output.type === "content") {
				for (const contentPart of part.output.value) if (contentPart.type === "file") contentPart.data = maybeBase64EncodeFileData2(contentPart.data);
			}
		}
		return options;
	}
	getUrl() {
		return `${this.config.baseURL}/language-model`;
	}
	getModelConfigHeaders(modelId, streaming) {
		return {
			"ai-language-model-specification-version": "4",
			"ai-language-model-id": modelId,
			"ai-language-model-streaming": String(streaming)
		};
	}
};
function maybeBase64EncodeFileData2(data) {
	if (data.type === "data") {
		const bytes = data.data;
		if (bytes instanceof Uint8Array) return {
			...data,
			data: Buffer.from(bytes).toString("base64")
		};
	}
	return data;
}
var GatewayEmbeddingModel = class _GatewayEmbeddingModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
		this.maxEmbeddingsPerCall = 2048;
		this.supportsParallelCalls = true;
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _GatewayEmbeddingModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async doEmbed({ values, headers, abortSignal, providerOptions }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					values,
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayEmbeddingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				embeddings: responseBody.embeddings,
				usage: responseBody.usage ?? void 0,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: responseBody.warnings ?? []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/embedding-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-embedding-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayEmbeddingWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewayEmbeddingResponseSchema = lazySchema(() => zodSchema(z$1.object({
	embeddings: z$1.array(z$1.array(z$1.number())),
	usage: z$1.object({ tokens: z$1.number() }).nullish(),
	warnings: z$1.array(gatewayEmbeddingWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), z$1.record(z$1.string(), z$1.unknown())).optional()
})));
var GatewayImageModel = class _GatewayImageModel {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
		this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
	}
	static [WORKFLOW_SERIALIZE](model) {
		return serializeModelOptions({
			modelId: model.modelId,
			config: model.config
		});
	}
	static [WORKFLOW_DESERIALIZE](options) {
		return new _GatewayImageModel(options.modelId, options.config);
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, size, aspectRatio, seed, files, mask, providerOptions, headers, abortSignal }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					prompt,
					n,
					...size && { size },
					...aspectRatio && { aspectRatio },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...files && { files: files.map((file) => maybeEncodeImageFile(file)) },
					...mask && { mask: maybeEncodeImageFile(mask) }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayImageResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				images: responseBody.images,
				...responseBody.isRetryable != null && { isRetryable: responseBody.isRetryable },
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				},
				...responseBody.usage != null && { usage: {
					inputTokens: responseBody.usage.inputTokens ?? void 0,
					outputTokens: responseBody.usage.outputTokens ?? void 0,
					totalTokens: responseBody.usage.totalTokens ?? void 0
				} }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/image-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-image-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeImageFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema = z$1.object({ images: z$1.array(z$1.unknown()).optional() }).catchall(z$1.unknown());
var gatewayImageWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewayImageUsageSchema = z$1.object({
	inputTokens: z$1.number().nullish(),
	outputTokens: z$1.number().nullish(),
	totalTokens: z$1.number().nullish()
});
var gatewayImageResponseSchema = z$1.object({
	images: z$1.array(z$1.string()),
	isRetryable: z$1.boolean().optional(),
	warnings: z$1.array(gatewayImageWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema).optional(),
	usage: gatewayImageUsageSchema.optional()
});
var GatewayVideoModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
		this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate(options) {
		const { headers, abortSignal } = options;
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders), { accept: "text/event-stream" }),
				body: this.buildRequestBody(options),
				successfulResponseHandler: async ({ response, url, requestBodyValues }) => {
					if (response.body == null) throw new APICallError({
						message: "SSE response body is empty",
						url,
						requestBodyValues,
						statusCode: response.status
					});
					const reader = parseJsonEventStream({
						stream: response.body,
						schema: gatewayVideoEventSchema
					}).getReader();
					const { done, value: parseResult } = await reader.read();
					reader.releaseLock();
					if (done || !parseResult) throw new APICallError({
						message: "SSE stream ended without a data event",
						url,
						requestBodyValues,
						statusCode: response.status
					});
					if (!parseResult.success) throw new APICallError({
						message: "Failed to parse video SSE event",
						cause: parseResult.error,
						url,
						requestBodyValues,
						statusCode: response.status
					});
					const event = parseResult.value;
					if (event.type === "error") throw new APICallError({
						message: event.message,
						statusCode: event.statusCode,
						url,
						requestBodyValues,
						responseHeaders: Object.fromEntries([...response.headers]),
						responseBody: JSON.stringify(event),
						data: { error: {
							message: event.message,
							type: event.errorType,
							param: event.param
						} }
					});
					return {
						value: {
							videos: event.videos,
							warnings: event.warnings,
							providerMetadata: event.providerMetadata
						},
						responseHeaders: Object.fromEntries([...response.headers])
					};
				},
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				videos: responseBody.videos,
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata ?? void 0,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	async handleWebhookOption({ webhook }) {
		const { url, received } = await webhook();
		return {
			webhookUrl: url,
			received
		};
	}
	async doStart(options) {
		const { headers, abortSignal, webhookUrl } = options;
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody } = await postJsonToApi({
				url: this.getStartUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					...this.buildRequestBody(options),
					...webhookUrl && { callbackUrl: webhookUrl }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayVideoStartResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				operation: responseBody.operation,
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata ?? void 0,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	async doStatus({ operation, abortSignal, headers }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody } = await postJsonToApi({
				url: this.getStatusUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: { operation },
				successfulResponseHandler: createJsonResponseHandler(gatewayVideoStatusResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			const response = {
				timestamp: /* @__PURE__ */ new Date(),
				modelId: this.modelId,
				headers: responseHeaders
			};
			if (responseBody.status === "completed") return {
				status: "completed",
				videos: responseBody.videos,
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata ?? void 0,
				response
			};
			if (responseBody.status === "error") return {
				status: "error",
				error: responseBody.error,
				providerMetadata: responseBody.providerMetadata ?? void 0,
				response
			};
			if (responseBody.status === "cancelled") return {
				status: "error",
				error: "Video generation was cancelled.",
				providerMetadata: responseBody.providerMetadata ?? void 0,
				response
			};
			return {
				status: "pending",
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata ?? void 0,
				response
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	buildRequestBody({ prompt, n, aspectRatio, resolution, duration, fps, seed, generateAudio, image, frameImages, inputReferences, providerOptions }) {
		return {
			prompt,
			n,
			...aspectRatio && { aspectRatio },
			...resolution && { resolution },
			...duration && { duration },
			...fps && { fps },
			...seed && { seed },
			...generateAudio !== void 0 && { generateAudio },
			...providerOptions && { providerOptions },
			...image && { image: maybeEncodeVideoFile(image) },
			...frameImages && { frameImages: frameImages.map((frame) => ({
				...frame,
				image: maybeEncodeVideoFile(frame.image)
			})) },
			...inputReferences && { inputReferences: inputReferences.map((reference) => maybeEncodeVideoFile(reference)) }
		};
	}
	getUrl() {
		return `${this.config.baseURL}/video-model`;
	}
	getStartUrl() {
		return `${this.config.baseURL}/video-model/start`;
	}
	getStatusUrl() {
		return `${this.config.baseURL}/video-model/status`;
	}
	getModelConfigHeaders() {
		return {
			"ai-video-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeVideoFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema2 = z$1.object({ videos: z$1.array(z$1.unknown()).optional() }).catchall(z$1.unknown());
var gatewayVideoDataSchema = z$1.union([z$1.object({
	type: z$1.literal("url"),
	url: z$1.string(),
	mediaType: z$1.string()
}), z$1.object({
	type: z$1.literal("base64"),
	data: z$1.string(),
	mediaType: z$1.string()
})]);
var gatewayVideoWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewayVideoEventSchema = z$1.discriminatedUnion("type", [z$1.object({
	type: z$1.literal("result"),
	videos: z$1.array(gatewayVideoDataSchema),
	warnings: z$1.array(gatewayVideoWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema2).optional()
}), z$1.object({
	type: z$1.literal("error"),
	message: z$1.string(),
	errorType: z$1.string(),
	statusCode: z$1.number(),
	param: z$1.unknown().nullable()
})]);
var gatewayVideoStartResponseSchema = z$1.object({
	operation: z$1.unknown(),
	warnings: z$1.array(gatewayVideoWarningSchema).nullish(),
	providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema2).nullish()
});
var gatewayVideoStatusResponseSchema = z$1.discriminatedUnion("status", [
	z$1.object({
		status: z$1.literal("pending"),
		warnings: z$1.array(gatewayVideoWarningSchema).nullish(),
		providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema2).nullish()
	}),
	z$1.object({
		status: z$1.literal("completed"),
		videos: z$1.array(gatewayVideoDataSchema),
		warnings: z$1.array(gatewayVideoWarningSchema).nullish(),
		providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema2).nullish()
	}),
	z$1.object({
		status: z$1.literal("error"),
		error: z$1.string(),
		providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema2).nullish()
	}),
	z$1.object({
		status: z$1.literal("cancelled"),
		providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema2).nullish()
	})
]);
var EVALUATION_FALLBACK_MAX_CONDITION_DEPTH = 5;
var EVALUATION_FALLBACK_MAX_CONDITIONS_PER_LIST = 20;
var EVALUATION_FALLBACK_MAX_QUESTION_LENGTH = 256;
var gatewayEvaluationProviderOptionsSchema = lazySchema(() => zodSchema(z$1.object({ models: gatewayModelFallbacksSchema.optional() }).catchall(z$1.unknown())));
var probabilitySchema = z$1.number().finite().min(0).max(1);
var questionSchema = z$1.string().min(1).max(EVALUATION_FALLBACK_MAX_QUESTION_LENGTH);
var directConditionSchema = z$1.union([z$1.object({
	question: questionSchema,
	confidenceBelow: probabilitySchema
}).strict(), z$1.object({
	question: questionSchema,
	probabilityBetween: z$1.array(probabilitySchema).length(2).refine(([minimum, maximum]) => minimum <= maximum, { message: "probabilityBetween minimum must be less than or equal to maximum" })
}).strict()]);
var groupBeyondMaxDepthSchema = z$1.union([
	z$1.object({ any: z$1.unknown() }),
	z$1.object({ all: z$1.unknown() }),
	z$1.object({ atLeast: z$1.unknown() })
]).superRefine((_, context) => {
	context.addIssue({
		code: "custom",
		message: `conditions can be nested at most ${EVALUATION_FALLBACK_MAX_CONDITION_DEPTH} levels deep`
	});
});
var conditionalModelFallbackSchema = z$1.object({
	model: z$1.string().min(1),
	when: conditionSchema(1)
}).strict();
var gatewayModelFallbacksSchema = z$1.array(z$1.union([z$1.string(), conditionalModelFallbackSchema])).superRefine((entries, context) => {
	const conditionalIndexes = entries.flatMap((entry, index) => typeof entry === "string" ? [] : [index]);
	if (conditionalIndexes.length > 1) context.addIssue({
		code: "custom",
		message: "models supports at most one conditional evaluation fallback"
	});
	if (conditionalIndexes[0] !== void 0 && conditionalIndexes[0] !== 0) context.addIssue({
		code: "custom",
		message: "a conditional evaluation fallback must be the first models entry",
		path: [conditionalIndexes[0]]
	});
});
function conditionSchema(depth) {
	if (depth === EVALUATION_FALLBACK_MAX_CONDITION_DEPTH) return z$1.union([directConditionSchema, groupBeyondMaxDepthSchema]);
	const childConditionSchema = conditionSchema(depth + 1);
	const conditionListSchema = z$1.array(childConditionSchema).min(1).max(EVALUATION_FALLBACK_MAX_CONDITIONS_PER_LIST);
	return z$1.union([
		directConditionSchema,
		z$1.object({ any: conditionListSchema }).strict(),
		z$1.object({ all: conditionListSchema }).strict(),
		z$1.object({ atLeast: z$1.object({
			count: z$1.number().int().min(1),
			conditions: conditionListSchema
		}).strict().refine(({ count, conditions }) => count <= conditions.length, {
			message: "atLeast count cannot exceed the number of conditions",
			path: ["count"]
		}) }).strict()
	]);
}
var GatewayEvaluationModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
		this.supportedQuestionTypes = [
			"choice",
			"score",
			"boolean"
		];
	}
	get provider() {
		return this.config.provider;
	}
	async doEvaluate({ state, questions, headers, abortSignal, providerOptions }) {
		const gatewayOptions = await parseProviderOptions({
			provider: "gateway",
			providerOptions,
			schema: gatewayEvaluationProviderOptionsSchema
		});
		const validatedProviderOptions = gatewayOptions == null ? providerOptions : {
			...providerOptions,
			gateway: gatewayOptions
		};
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					state,
					questions,
					...validatedProviderOptions ? { providerOptions: validatedProviderOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayEvaluationResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				answers: responseBody.answers,
				...responseBody.rounding ? { rounding: responseBody.rounding } : {},
				...responseBody.usage ? { usage: responseBody.usage } : {},
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					modelId: responseBody.model ?? this.modelId,
					headers: responseHeaders,
					body: rawValue
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/evaluation-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-evaluation-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayEvaluationAnswerSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("choice"),
		choice: z$1.string(),
		probabilities: z$1.record(z$1.string(), z$1.number()).optional()
	}),
	z$1.object({
		type: z$1.literal("score"),
		score: z$1.number(),
		probabilities: z$1.record(z$1.string(), z$1.number()).optional()
	}),
	z$1.object({
		type: z$1.literal("boolean"),
		probability: z$1.number()
	})
]);
var gatewayEvaluationWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewayEvaluationResponseSchema = lazySchema(() => zodSchema(z$1.object({
	answers: z$1.record(z$1.string(), gatewayEvaluationAnswerSchema),
	model: z$1.string().optional(),
	rounding: z$1.object({
		probabilityDecimals: z$1.number().optional(),
		scoreDecimals: z$1.number().optional()
	}).optional(),
	usage: z$1.object({
		inputTokens: z$1.number().optional(),
		outputTokens: z$1.number().optional()
	}).optional(),
	warnings: z$1.array(gatewayEvaluationWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), z$1.record(z$1.string(), z$1.unknown())).optional()
})));
var GatewayRerankingModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	get provider() {
		return this.config.provider;
	}
	async doRerank({ documents, query, topN, headers, abortSignal, providerOptions }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					documents,
					query,
					...topN != null ? { topN } : {},
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayRerankingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				ranking: responseBody.ranking,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: responseBody.warnings ?? []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/reranking-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-reranking-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayRerankingWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewayRerankingResponseSchema = lazySchema(() => zodSchema(z$1.object({
	ranking: z$1.array(z$1.object({
		index: z$1.number(),
		relevanceScore: z$1.number()
	})),
	warnings: z$1.array(gatewayRerankingWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), z$1.record(z$1.string(), z$1.unknown())).optional()
})));
var GatewaySpeechModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ text, voice, outputFormat, instructions, speed, language, providerOptions, headers, abortSignal }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					text,
					...voice && { voice },
					...outputFormat && { outputFormat },
					...instructions && { instructions },
					...speed != null && { speed },
					...language && { language },
					...providerOptions && { providerOptions }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewaySpeechResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				audio: responseBody.audio,
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders,
					body: rawValue
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/speech-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-speech-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
var providerMetadataEntrySchema3 = z$1.object({}).catchall(z$1.unknown());
var gatewaySpeechWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewaySpeechResponseSchema = z$1.object({
	audio: z$1.string(),
	warnings: z$1.array(gatewaySpeechWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema3).optional()
});
var GatewayTranscriptionModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v4";
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ audio, mediaType, providerOptions, headers, abortSignal }) {
		const resolvedHeaders = this.config.headers ? await resolve(this.config.headers) : void 0;
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					audio: audio instanceof Uint8Array ? convertUint8ArrayToBase64(audio) : audio,
					mediaType,
					...providerOptions && { providerOptions }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayTranscriptionResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				text: responseBody.text,
				segments: responseBody.segments ?? [],
				language: responseBody.language ?? void 0,
				durationInSeconds: responseBody.durationInSeconds ?? void 0,
				warnings: responseBody.warnings ?? [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders,
					body: rawValue
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders ?? {}));
		}
	}
	async doStream(options) {
		const currentDate = this.config._internal?.currentDate?.() ?? /* @__PURE__ */ new Date();
		const headers = combineHeaders(await resolve(this.config.headers ?? {}), options.headers ?? {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders));
		const authMethod = await parseAuthMethod(headers);
		const startFrame = {
			type: TRANSCRIPTION_STREAM_START_FRAME_TYPE,
			inputAudioFormat: options.inputAudioFormat,
			...options.providerOptions != null && { providerOptions: options.providerOptions },
			...options.includeRawChunks != null && { includeRawChunks: options.includeRawChunks }
		};
		return {
			stream: createGatewayTranscriptionStream({
				webSocket: this.config.webSocket,
				url: toGatewayTranscriptionUrl(this.config.baseURL, this.modelId),
				protocols: getProtocolsFromHeaders(headers),
				headers,
				startFrame,
				audio: options.audio,
				abortSignal: options.abortSignal,
				authMethod
			}),
			request: { body: startFrame },
			response: {
				timestamp: currentDate,
				modelId: this.modelId
			}
		};
	}
	getUrl() {
		return `${this.config.baseURL}/transcription-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-transcription-model-specification-version": "4",
			"ai-model-id": this.modelId
		};
	}
};
function toGatewayTranscriptionUrl(baseURL, modelId) {
	const url = new URL(`${baseURL.replace(/^http/, "ws")}/transcription-model`);
	url.searchParams.set("ai-model-id", modelId);
	return url.toString();
}
function getProtocolsFromHeaders(headers) {
	const normalizedHeaders = normalizeHeaders(headers);
	const authorization = normalizedHeaders.authorization;
	const token = authorization?.startsWith("Bearer ") ? authorization.slice(7) : void 0;
	return token == null ? [GATEWAY_TRANSCRIPTION_SUBPROTOCOL] : getGatewayTranscriptionProtocols(token, { teamIdOrSlug: normalizedHeaders[VERCEL_AI_GATEWAY_TEAM_HEADER] });
}
var MAX_AUDIO_FRAME_BYTES = 65536;
function createGatewayTranscriptionStream({ webSocket, url, protocols, headers, startFrame, audio, abortSignal, authMethod }) {
	let finished = false;
	let cleanup = () => {};
	return new ReadableStream({
		start: (controller) => {
			let audioReader;
			let hasServerErrorPart = false;
			let lastServerError;
			let audioStopped = false;
			let connection;
			cleanup = (closeCode) => {
				if (audioReader != null) audioReader.cancel().catch(() => {});
				else audio.cancel().catch(() => {});
				connection?.close(closeCode);
			};
			const stopAudio = () => {
				audioStopped = true;
				if (audioReader != null) {
					audioReader.cancel().catch(() => {});
					audioReader = void 0;
				} else audio.cancel().catch(() => {});
			};
			const finishWithError = (error) => {
				if (finished) return;
				finished = true;
				cleanup();
				errorControllerWithGatewayError(controller, error, authMethod);
			};
			const sendAudio = async (socket) => {
				const reader = audio.getReader();
				audioReader = reader;
				try {
					while (true) {
						const { done, value } = await reader.read();
						if (done || finished) break;
						const bytes = typeof value === "string" ? convertBase64ToUint8Array(value) : value;
						for (let offset = 0; offset < bytes.length; offset += MAX_AUDIO_FRAME_BYTES) {
							if (finished) break;
							socket.send(bytes.subarray(offset, offset + MAX_AUDIO_FRAME_BYTES));
							await waitForWebSocketBufferDrain(socket);
						}
					}
				} finally {
					reader.releaseLock();
					if (audioReader === reader) audioReader = void 0;
				}
				if (!finished && !audioStopped) socket.send(JSON.stringify({ type: TRANSCRIPTION_STREAM_AUDIO_DONE_FRAME_TYPE }));
			};
			connection = connectToWebSocket({
				url,
				protocols,
				headers,
				webSocket,
				abortSignal,
				onAbort: (reason) => {
					if (finished) return;
					finished = true;
					cleanup();
					controller.error(reason);
				},
				onProcessingError: finishWithError,
				onOpen: (socket) => {
					socket.send(JSON.stringify(startFrame));
					sendAudio(socket).catch(finishWithError);
				},
				onMessageText: (text) => {
					if (finished) return;
					const part = parseTranscriptionStreamPart(text);
					if (part == null) return;
					if (part.type === "finish") {
						finished = true;
						controller.enqueue(part);
						controller.close();
						cleanup(1e3);
						return;
					}
					if (part.type === "error") {
						hasServerErrorPart = true;
						lastServerError = part.error;
						stopAudio();
					}
					controller.enqueue(part);
				},
				onSocketError: () => {
					finishWithError(/* @__PURE__ */ new Error("Connection error on AI Gateway transcription stream"));
				},
				onClose: () => {
					if (hasServerErrorPart) {
						if (finished) return;
						createErrorFromServerErrorPart(lastServerError, authMethod).then(finishWithError);
						return;
					}
					finishWithError(/* @__PURE__ */ new Error("AI Gateway transcription stream closed before a finish part was received"));
				}
			});
		},
		cancel: () => {
			if (finished) return;
			finished = true;
			cleanup();
		}
	});
}
var providerMetadataEntrySchema4 = z$1.object({}).catchall(z$1.unknown());
var gatewayTranscriptionWarningSchema = z$1.discriminatedUnion("type", [
	z$1.object({
		type: z$1.literal("unsupported"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("compatibility"),
		feature: z$1.string(),
		details: z$1.string().optional()
	}),
	z$1.object({
		type: z$1.literal("deprecated"),
		setting: z$1.string(),
		message: z$1.string()
	}),
	z$1.object({
		type: z$1.literal("other"),
		message: z$1.string()
	})
]);
var gatewayTranscriptionResponseSchema = z$1.object({
	text: z$1.string(),
	segments: z$1.array(z$1.object({
		text: z$1.string(),
		startSecond: z$1.number(),
		endSecond: z$1.number()
	})).optional(),
	language: z$1.string().nullish(),
	durationInSeconds: z$1.number().nullish(),
	warnings: z$1.array(gatewayTranscriptionWarningSchema).optional(),
	providerMetadata: z$1.record(z$1.string(), providerMetadataEntrySchema4).optional()
});
async function errorControllerWithGatewayError(controller, error, authMethod) {
	controller.error(await asGatewayError(error, authMethod));
}
function getServerErrorMessage(error) {
	if (error != null && typeof error === "object" && "message" in error && typeof error.message === "string") return error.message;
	return getErrorMessage(error);
}
var SERVER_ERROR_STATUS_CODES = {
	authentication_error: 401,
	failed_dependency: 424,
	forbidden: 403,
	internal_server_error: 500,
	invalid_request_error: 400,
	model_not_found: 404,
	rate_limit_exceeded: 429
};
async function createErrorFromServerErrorPart(error, authMethod) {
	if (typeof error === "object" && error != null && "message" in error && typeof error.message === "string" && "type" in error && typeof error.type === "string" && error.type in SERVER_ERROR_STATUS_CODES) return createGatewayErrorFromResponse({
		response: { error: {
			message: error.message,
			type: error.type
		} },
		statusCode: SERVER_ERROR_STATUS_CODES[error.type],
		authMethod
	});
	return /* @__PURE__ */ new Error(`AI Gateway transcription stream failed: ${getServerErrorMessage(error)}`);
}
var GatewayRealtimeModel = class {
	constructor(modelId, config) {
		this.specificationVersion = "v4";
		this.modelId = modelId;
		this.provider = config.provider;
		this.config = config;
	}
	/**
	* Mints a single-use, short-lived client secret (`vcst_`) the browser uses to
	* open the realtime WebSocket without ever holding the long-lived Gateway
	* credential. The customer's server calls this (via
	* `gateway.experimental_realtime.getToken`) and hands the returned token to
	* the browser, which connects with it through the `ai-gateway-auth.<token>`
	* subprotocol. `expiresAfterSeconds` is forwarded to the mint endpoint;
	* `sessionConfig` is intentionally unused here — it is applied later via the
	* normalized `session-update` event.
	*/
	async doCreateClientSecret(options) {
		const secret = await this.config.createClientSecret({
			modelId: this.modelId,
			...options?.expiresAfterSeconds != null && { expiresAfterSeconds: options.expiresAfterSeconds }
		});
		return {
			token: secret.token,
			url: toGatewayRealtimeUrl(this.config.baseURL, this.modelId),
			...secret.expiresAt != null && { expiresAt: secret.expiresAt }
		};
	}
	getWebSocketConfig(options) {
		return {
			url: options.url,
			protocols: getGatewayRealtimeProtocols(options.token, { teamIdOrSlug: this.config.teamIdOrSlug })
		};
	}
	parseServerEvent(raw) {
		return raw;
	}
	serializeClientEvent(event) {
		return event;
	}
	buildSessionConfig(config) {
		return config;
	}
};
function toGatewayRealtimeUrl(baseURL, modelId) {
	const url = new URL(`${baseURL.replace(/^http/, "ws")}/realtime-model`);
	url.searchParams.set("ai-model-id", modelId);
	return url.toString();
}
var jsonObjectSchema = z$1.record(z$1.string(), z$1.unknown());
var browserbaseFetchToolFactory = createProviderExecutedToolFactory({
	id: "gateway.browserbase_fetch",
	inputSchema: lazySchema(() => zodSchema(z$1.object({
		url: z$1.string().url().describe("URL of the page to fetch."),
		allow_redirects: z$1.boolean().optional().describe("Whether to follow HTTP redirects (default: false)."),
		allow_insecure_ssl: z$1.boolean().optional().describe("Whether to bypass TLS certificate verification (default: false). Only use for trusted hosts."),
		proxies: z$1.boolean().optional().describe("Whether to route the request through Browserbase proxies (default: false)."),
		format: z$1.enum([
			"raw",
			"json",
			"markdown"
		]).optional().describe("Output format. raw returns the response body unchanged, markdown returns page content as Markdown, and json returns structured content using schema."),
		schema: jsonObjectSchema.optional().describe("JSON Schema for structured extraction. Only use with format set to json.")
	}))),
	outputSchema: lazySchema(() => zodSchema(z$1.union([z$1.object({
		id: z$1.string(),
		content: z$1.union([z$1.string(), jsonObjectSchema]),
		contentType: z$1.string(),
		encoding: z$1.string(),
		headers: z$1.record(z$1.string(), z$1.string()),
		statusCode: z$1.number()
	}), z$1.object({
		error: z$1.enum([
			"api_error",
			"configuration_error",
			"execution_error",
			"invalid_input",
			"rate_limit",
			"timeout",
			"unknown"
		]),
		statusCode: z$1.number().optional(),
		message: z$1.string()
	})])))
});
var browserbaseFetch = (config = {}) => browserbaseFetchToolFactory(config);
var browserbaseSearchToolFactory = createProviderExecutedToolFactory({
	id: "gateway.browserbase_search",
	inputSchema: lazySchema(() => zodSchema(z$1.object({
		query: z$1.string().min(1).max(200).describe("Web search query. Must be between 1 and 200 characters."),
		num_results: z$1.number().int().min(1).max(25).optional().describe("Maximum number of results to return (1-25, default: 10).")
	}))),
	outputSchema: lazySchema(() => zodSchema(z$1.union([z$1.object({
		query: z$1.string(),
		requestId: z$1.string(),
		results: z$1.array(z$1.object({
			id: z$1.string(),
			title: z$1.string(),
			url: z$1.string(),
			author: z$1.string().optional(),
			favicon: z$1.string().optional(),
			image: z$1.string().optional(),
			publishedDate: z$1.string().optional()
		}))
	}), z$1.object({
		error: z$1.enum([
			"api_error",
			"configuration_error",
			"execution_error",
			"invalid_input",
			"rate_limit",
			"timeout",
			"unknown"
		]),
		statusCode: z$1.number().optional(),
		message: z$1.string()
	})])))
});
var browserbaseSearch = (config = {}) => browserbaseSearchToolFactory(config);
var exaSearchToolFactory = createProviderExecutedToolFactory({
	id: "gateway.exa_search",
	inputSchema: lazySchema(() => zodSchema(z$1.object({
		query: z$1.string().describe("Natural-language web search query. This is required."),
		type: z$1.enum([
			"auto",
			"fast",
			"instant"
		]).optional().describe("Search method. Use auto for the default balance of speed and quality."),
		num_results: z$1.number().optional().describe("Maximum number of results to return (1-100, default: 10)."),
		category: z$1.enum([
			"company",
			"people",
			"research paper",
			"news",
			"personal site",
			"financial report"
		]).optional().describe("Optional content category to focus results."),
		user_location: z$1.string().optional().describe("Two-letter ISO country code such as 'US'."),
		include_domains: z$1.array(z$1.string()).optional().describe("Only return results from these domains."),
		exclude_domains: z$1.array(z$1.string()).optional().describe("Exclude results from these domains."),
		start_published_date: z$1.string().optional().describe("Only return links published after this ISO 8601 date."),
		end_published_date: z$1.string().optional().describe("Only return links published before this ISO 8601 date."),
		contents: z$1.object({
			text: z$1.union([z$1.boolean(), z$1.object({
				max_characters: z$1.number().optional(),
				include_html_tags: z$1.boolean().optional(),
				verbosity: z$1.enum([
					"compact",
					"standard",
					"full"
				]).optional(),
				include_sections: z$1.array(z$1.enum([
					"header",
					"navigation",
					"banner",
					"body",
					"sidebar",
					"footer",
					"metadata"
				])).optional(),
				exclude_sections: z$1.array(z$1.enum([
					"header",
					"navigation",
					"banner",
					"body",
					"sidebar",
					"footer",
					"metadata"
				])).optional()
			})]).optional(),
			highlights: z$1.union([z$1.boolean(), z$1.object({
				query: z$1.string().optional(),
				max_characters: z$1.number().optional()
			})]).optional(),
			max_age_hours: z$1.number().optional(),
			livecrawl_timeout: z$1.number().optional(),
			subpages: z$1.number().optional(),
			subpage_target: z$1.union([z$1.string(), z$1.array(z$1.string())]).optional(),
			extras: z$1.object({
				links: z$1.number().optional(),
				image_links: z$1.number().optional()
			}).optional()
		}).optional().describe("Controls extracted page content and freshness.")
	}))),
	outputSchema: lazySchema(() => zodSchema(z$1.union([z$1.object({
		requestId: z$1.string(),
		searchType: z$1.string().optional(),
		resolvedSearchType: z$1.string().optional(),
		results: z$1.array(z$1.object({
			title: z$1.string(),
			url: z$1.string(),
			id: z$1.string(),
			publishedDate: z$1.string().nullable().optional(),
			author: z$1.string().nullable().optional(),
			image: z$1.string().nullable().optional(),
			favicon: z$1.string().nullable().optional(),
			text: z$1.string().optional(),
			highlights: z$1.array(z$1.string()).optional(),
			highlightScores: z$1.array(z$1.number()).optional(),
			summary: z$1.string().optional(),
			subpages: z$1.array(z$1.any()).optional(),
			extras: z$1.object({
				links: z$1.array(z$1.string()).optional(),
				imageLinks: z$1.array(z$1.string()).optional()
			}).optional()
		})),
		costDollars: z$1.object({
			total: z$1.number().optional(),
			search: z$1.record(z$1.string(), z$1.number()).optional()
		}).optional()
	}), z$1.object({
		error: z$1.enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"configuration_error",
			"execution_error",
			"unknown"
		]),
		statusCode: z$1.number().optional(),
		message: z$1.string()
	})])))
});
var exaSearch = (config = {}) => exaSearchToolFactory(config);
var parallelSearchToolFactory = createProviderExecutedToolFactory({
	id: "gateway.parallel_search",
	inputSchema: lazySchema(() => zodSchema(z$1.object({
		objective: z$1.string().describe("Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."),
		search_queries: z$1.array(z$1.string()).optional().describe("Optional search queries to supplement the objective. Maximum 200 characters per query."),
		mode: z$1.enum(["one-shot", "agentic"]).optional().describe("Mode preset: \"one-shot\" for comprehensive results with longer excerpts (default), \"agentic\" for concise, token-efficient results for multi-step workflows."),
		max_results: z$1.number().optional().describe("Maximum number of results to return (1-20). Defaults to 10 if not specified."),
		source_policy: z$1.object({
			include_domains: z$1.array(z$1.string()).optional().describe("Limit results to these domains. Use plain domain names only — e.g. example.com or sub.example.gov, or a bare extension like .edu. Do not include a scheme, path, or port (e.g. not https://example.com/page)."),
			exclude_domains: z$1.array(z$1.string()).optional().describe("Exclude results from these domains. Use plain domain names only — e.g. example.com or sub.example.gov, or a bare extension like .edu. Do not include a scheme, path, or port (e.g. not https://example.com/page)."),
			after_date: z$1.string().optional().describe("Only include results published after this date. Use an ISO 8601 calendar date formatted YYYY-MM-DD (e.g. 2025-01-01); do not include a time.")
		}).optional().describe("Source policy for controlling which domains to include/exclude and freshness."),
		excerpts: z$1.object({
			max_chars_per_result: z$1.number().optional().describe("Maximum characters per result."),
			max_chars_total: z$1.number().optional().describe("Maximum total characters across all results.")
		}).optional().describe("Excerpt configuration for controlling result length."),
		fetch_policy: z$1.object({ max_age_seconds: z$1.number().optional().describe("Maximum age in seconds for cached content. Set to 0 to always fetch fresh content.") }).optional().describe("Fetch policy for controlling content freshness.")
	}))),
	outputSchema: lazySchema(() => zodSchema(z$1.union([z$1.object({
		searchId: z$1.string(),
		results: z$1.array(z$1.object({
			url: z$1.string(),
			title: z$1.string(),
			excerpt: z$1.string(),
			publishDate: z$1.string().nullable().optional(),
			relevanceScore: z$1.number().optional()
		}))
	}), z$1.object({
		error: z$1.enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"configuration_error",
			"unknown"
		]),
		statusCode: z$1.number().optional(),
		message: z$1.string()
	})])))
});
var parallelSearch = (config = {}) => parallelSearchToolFactory(config);
var perplexitySearchToolFactory = createProviderExecutedToolFactory({
	id: "gateway.perplexity_search",
	inputSchema: lazySchema(() => zodSchema(z$1.object({
		query: z$1.union([z$1.string(), z$1.array(z$1.string())]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
		max_results: z$1.number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
		max_tokens_per_page: z$1.number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
		max_tokens: z$1.number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
		country: z$1.string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
		search_domain_filter: z$1.array(z$1.string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
		search_language_filter: z$1.array(z$1.string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
		search_after_date: z$1.string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		search_before_date: z$1.string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		last_updated_after_filter: z$1.string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		last_updated_before_filter: z$1.string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		search_recency_filter: z$1.enum([
			"day",
			"week",
			"month",
			"year"
		]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
	}))),
	outputSchema: lazySchema(() => zodSchema(z$1.union([z$1.object({
		results: z$1.array(z$1.object({
			title: z$1.string(),
			url: z$1.string(),
			snippet: z$1.string(),
			date: z$1.string().optional(),
			lastUpdated: z$1.string().optional()
		})),
		id: z$1.string()
	}), z$1.object({
		error: z$1.enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"unknown"
		]),
		statusCode: z$1.number().optional(),
		message: z$1.string()
	})])))
});
var perplexitySearch = (config = {}) => perplexitySearchToolFactory(config);
var takoDataSourceInputSchema = z$1.object({
	count: z$1.number().optional().describe("Maximum number of data results to return (1-20). When include_contents is true, each additional result adds its own data surcharge."),
	include_contents: z$1.boolean().optional().describe("Inline rows for each data result. This adds a data surcharge based on row count and dataset source. To estimate cost, search with include_contents disabled and inspect cards.content.export_pricing. This applies to every returned card; limit sources.data.count and sources.data.max_rows to control cost."),
	mode: z$1.enum(["inline", "url"]).optional().describe("Requested data delivery mode. Search card data is always inline."),
	content_format: z$1.enum([
		"card_json",
		"csv",
		"json_compact",
		"json_records"
	]).optional().describe("Serialization for inlined card data."),
	max_rows: z$1.number().optional().describe("Maximum rows to inline per result. Omit to use the allowance in cards.content.export_pricing. A data surcharge applies per 1,000 exported rows; lower values reduce cost."),
	node_ids: z$1.array(z$1.string()).optional().describe("Data Graph node IDs to prioritize. Maximum 20."),
	strict: z$1.boolean().optional().describe("Only return cards matching node_ids. Requires a non-empty node_ids.")
});
var takoWebSourceInputSchema = z$1.object({
	count: z$1.number().optional().describe("Maximum number of web results to return (1-20)."),
	include_contents: z$1.boolean().optional().describe("Inline extracted web page text. This can add a data charge."),
	category: z$1.enum([
		"finance",
		"news",
		"sports"
	]).optional().describe("Optional web-result category filter."),
	include_domains: z$1.array(z$1.string()).optional().describe("Only return results from these bare domains."),
	exclude_domains: z$1.array(z$1.string()).optional().describe("Exclude results from these bare domains."),
	snippet_max_chars: z$1.number().optional().describe("Maximum characters in each web-result snippet."),
	highlights: z$1.boolean().optional().describe("Include highlighted passages in web results. Defaults to true in AI Gateway."),
	article_content_max_chars: z$1.number().optional().describe("Maximum extracted characters per web page when including contents."),
	published_after: z$1.string().optional().describe("Keep results published on or after this ISO date (YYYY-MM-DD)."),
	published_before: z$1.string().optional().describe("Keep results published on or before this ISO date (YYYY-MM-DD).")
});
var takoSearchInputSchema = lazySchema(() => zodSchema(z$1.object({
	query: z$1.string().describe("Natural-language search query. Include the entity, metric, and time period. Quote a phrase to force it to one entity, for example \"Tesla\":PRODUCT price."),
	effort: z$1.enum([
		"deep",
		"fast",
		"instant"
	]).optional().describe("Search effort. fast is the balanced default, instant favors cached results and low latency, and deep broadens retrieval with reranking at higher cost and latency."),
	sources: z$1.object({
		data: takoDataSourceInputSchema.optional(),
		web: takoWebSourceInputSchema.optional()
	}).optional().describe("Sources to search. Omit to search both curated data and the web. When provided, only keys present are searched."),
	location: z$1.object({
		latitude: z$1.number().describe("Latitude between -90 and 90."),
		longitude: z$1.number().describe("Longitude between -180 and 180.")
	}).optional().describe("End-user coordinates for localized results."),
	country_code: z$1.string().optional().describe("Two-letter ISO 3166-1 country code, such as 'US'."),
	locale: z$1.string().optional().describe("BCP-47 locale, such as 'en-US'."),
	timezone: z$1.string().optional().describe("IANA timezone, such as 'America/New_York'."),
	output_settings: z$1.object({
		image_dark_mode: z$1.boolean().optional().describe("Render card preview images in dark mode."),
		force_refresh: z$1.boolean().optional().describe("Instant-effort only. Request a refreshed instant result.")
	}).optional().describe("Controls card rendering in the search response."),
	include_related: z$1.number().optional().describe("Maximum related search suggestions to include (1-20).")
})));
var takoDatasetCellSchema = z$1.union([
	z$1.boolean(),
	z$1.number(),
	z$1.string()
]).nullable();
var takoResultContentSchema = z$1.object({
	content_format: z$1.enum([
		"card_json",
		"csv",
		"json_compact",
		"json_records"
	]).nullish(),
	cost: z$1.number().optional(),
	data: z$1.string().nullish(),
	records: z$1.array(z$1.record(z$1.string(), takoDatasetCellSchema)).nullish(),
	dataset: z$1.object({
		columns: z$1.array(z$1.object({
			name: z$1.string(),
			type: z$1.enum([
				"boolean",
				"date",
				"datetime",
				"number",
				"string"
			]),
			unit: z$1.string().nullish()
		})),
		rows: z$1.array(z$1.array(takoDatasetCellSchema)),
		total_rows: z$1.number(),
		truncated: z$1.boolean(),
		ref: z$1.string(),
		sources: z$1.array(z$1.object({
			name: z$1.string(),
			index: z$1.enum(["data", "web"]).optional()
		})),
		provenance: z$1.enum(["query", "web_extraction"]).optional()
	}).nullish(),
	card_data: z$1.object({}).passthrough().nullish(),
	card_data_schema: z$1.object({}).passthrough().nullish(),
	url: z$1.string().nullish(),
	expires_at: z$1.string().nullish(),
	total_rows: z$1.number().nullish(),
	truncated: z$1.boolean().optional(),
	export_pricing: z$1.object({
		baseline_usd: z$1.number(),
		free_rows: z$1.number(),
		max_rows_ceiling: z$1.number(),
		row_cpm_usd: z$1.number()
	}).nullish(),
	manifest: z$1.array(z$1.object({
		dtype: z$1.enum([
			"boolean",
			"date",
			"datetime",
			"number",
			"string"
		]).nullish(),
		entity: z$1.string().nullish(),
		metric: z$1.string().nullish(),
		name: z$1.string().nullish(),
		unit: z$1.string().nullish()
	})).nullish()
}).passthrough();
var takoCardSchema = z$1.object({
	card_id: z$1.string().nullish(),
	title: z$1.string().nullish(),
	description: z$1.string().nullish(),
	semantic_description: z$1.string().nullish(),
	webpage_url: z$1.string().nullish(),
	image_url: z$1.string().nullish(),
	embed_url: z$1.string().nullish(),
	sources: z$1.array(z$1.object({
		source_name: z$1.string().nullish(),
		source_description: z$1.string().nullish(),
		source_index: z$1.enum(["data", "web"]),
		source_text: z$1.string().nullish(),
		url: z$1.string().nullish()
	})).nullish(),
	methodologies: z$1.array(z$1.object({
		methodology_name: z$1.string().nullable(),
		methodology_description: z$1.string().nullable()
	})).nullish(),
	source_indexes: z$1.array(z$1.enum(["data", "web"])).nullish(),
	card_type: z$1.string().nullish(),
	relevance: z$1.enum([
		"High",
		"Low",
		"Medium"
	]).nullish(),
	content: takoResultContentSchema.nullish(),
	exportable: z$1.boolean().optional(),
	nodes: z$1.array(z$1.object({
		id: z$1.string(),
		type: z$1.enum(["entity", "metric"]),
		name: z$1.string(),
		description: z$1.string().nullish()
	})).nullish(),
	metric_definitions: z$1.array(z$1.object({
		name: z$1.string(),
		definition: z$1.string()
	})).nullish(),
	data_freshness: z$1.object({
		coverage_end: z$1.string().nullish(),
		data_as_of: z$1.string().nullish(),
		last_updated: z$1.string().nullish()
	}).nullish()
}).passthrough();
var takoWebResultSchema = z$1.object({
	title: z$1.string(),
	url: z$1.string(),
	snippet: z$1.string().nullish(),
	source_name: z$1.string().nullish(),
	publish_date: z$1.string().nullish(),
	content: takoResultContentSchema.nullish()
}).passthrough();
var takoSearchToolFactory = createProviderExecutedToolFactory({
	id: "gateway.tako_search",
	inputSchema: takoSearchInputSchema,
	outputSchema: lazySchema(() => zodSchema(z$1.union([z$1.object({
		request_id: z$1.string(),
		cards: z$1.array(takoCardSchema).optional(),
		web_results: z$1.array(takoWebResultSchema).optional(),
		usage: z$1.object({
			total_cost_usd: z$1.number(),
			compute: z$1.object({ cost_usd: z$1.number() }).nullish(),
			data: z$1.object({
				cost_usd: z$1.number(),
				datasets: z$1.number()
			}).nullish()
		}).nullish(),
		related: z$1.array(z$1.object({}).passthrough()).nullish()
	}).passthrough(), z$1.object({
		error: z$1.enum([
			"api_error",
			"configuration_error",
			"execution_error",
			"invalid_input",
			"rate_limit",
			"timeout",
			"unknown_tool"
		]),
		statusCode: z$1.number().optional(),
		message: z$1.string()
	})])))
});
var takoSearch = (config = {}) => takoSearchToolFactory(config);
var gatewayTools = {
	/**
	* Fetch page content using Browserbase's lightweight Fetch API.
	*
	* Supports raw, Markdown, and schema-driven JSON output as well as redirects,
	* proxy routing, and TLS controls.
	*/
	browserbaseFetch,
	/**
	* Search the web using Browserbase's Search API for fast, structured results.
	*
	* Returns titles, URLs, and available publication metadata without requiring
	* a browser session.
	*/
	browserbaseSearch,
	/**
	* Search the web using Exa for current information and token-efficient
	* excerpts optimized for agent workflows.
	*
	* Supports search type, category, domain, date, location, and content
	* extraction controls.
	*/
	exaSearch,
	/**
	* Search the web using Parallel AI's Search API for LLM-optimized excerpts.
	*
	* Takes a natural language objective and returns relevant excerpts,
	* replacing multiple keyword searches with a single call for broad
	* or complex queries. Supports different search types for depth vs
	* breadth tradeoffs.
	*/
	parallelSearch,
	/**
	* Search the web using Perplexity's Search API for real-time information,
	* news, research papers, and articles.
	*
	* Provides ranked search results with advanced filtering options including
	* domain, language, date range, and recency filters.
	*/
	perplexitySearch,
	/**
	* Search the web and Tako's curated knowledge graph in one call for
	* token-efficient web excerpts and structured data results grounded in
	* premium sources, each with an embed-ready visualization.
	*
	* Supports effort, per-source web and data controls, localization, and inline
	* contents for agents that need to reason over underlying data.
	*/
	takoSearch
};
async function getVercelRequestId() {
	return (0, import_index_browser.getContext)().headers?.["x-vercel-id"];
}
var VERSION$1 = "4.0.96";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
var gatewayClientSecretResponseSchema = z$1.object({
	token: z$1.string(),
	expiresAt: z$1.number().nullish()
});
function createGateway(options = {}) {
	let pendingMetadata = null;
	let metadataCache = null;
	const cacheRefreshMillis = options.metadataCacheRefreshMillis ?? 3e5;
	let lastFetchTime = 0;
	const baseURL = withoutTrailingSlash(options.baseURL) ?? "https://ai-gateway.vercel.sh/v4/ai";
	const createAuthHeaders = (auth) => withUserAgentSuffix({
		Authorization: `Bearer ${auth.token}`,
		"ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
		[GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
		...options.teamIdOrSlug != null ? { [VERCEL_AI_GATEWAY_TEAM_HEADER]: options.teamIdOrSlug } : {},
		...options.headers
	}, `ai-sdk/gateway/${VERSION$1}`);
	const getHeaders = async () => {
		try {
			return createAuthHeaders(await getGatewayAuthToken(options));
		} catch (error) {
			throw GatewayAuthenticationError.createContextualError({
				apiKeyProvided: false,
				oidcTokenProvided: false,
				statusCode: 401,
				cause: error
			});
		}
	};
	const getRealtimeAuthToken = async () => {
		try {
			return await getGatewayAuthToken(options);
		} catch (error) {
			throw GatewayAuthenticationError.createContextualError({
				apiKeyProvided: false,
				oidcTokenProvided: false,
				statusCode: 401,
				cause: error
			});
		}
	};
	const mintClientSecret = async (params) => {
		assertGatewayClientSecretServerEnvironment();
		const auth = await getRealtimeAuthToken();
		const headers = createAuthHeaders(auth);
		const url = new URL("/v1/realtime/client-secrets", baseURL).toString();
		try {
			const { value } = await postJsonToApi({
				url,
				headers,
				body: {
					model: params.modelId,
					...params.routeKind != null && { routeKind: params.routeKind },
					...params.expiresAfterSeconds != null && { expiresIn: params.expiresAfterSeconds }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayClientSecretResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: z$1.any(),
					errorToMessage: (data) => getErrorMessage(data) ?? "unknown error"
				}),
				fetch: options.fetch
			});
			return {
				token: value.token,
				...value.expiresAt != null && { expiresAt: value.expiresAt }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(headers));
		}
	};
	const createO11yHeaders = () => {
		const deploymentId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_DEPLOYMENT_ID"
		});
		const environment = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_ENV"
		});
		const region = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_REGION"
		});
		const projectId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_PROJECT_ID"
		});
		return async () => {
			const requestId = await getVercelRequestId();
			return {
				...deploymentId && { "ai-o11y-deployment-id": deploymentId },
				...environment && { "ai-o11y-environment": environment },
				...region && { "ai-o11y-region": region },
				...requestId && { "ai-o11y-request-id": requestId },
				...projectId && { "ai-o11y-project-id": projectId }
			};
		};
	};
	const createLanguageModel = (modelId) => {
		return new GatewayLanguageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const createBatch = () => new GatewayBatch({
		provider: "gateway",
		baseURL,
		headers: getHeaders,
		fetch: options.fetch,
		o11yHeaders: createO11yHeaders()
	});
	const getAvailableModels = async () => {
		const now = options._internal?.currentDate?.().getTime() ?? Date.now();
		if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
			lastFetchTime = now;
			pendingMetadata = new GatewayFetchMetadata({
				baseURL,
				headers: getHeaders,
				fetch: options.fetch
			}).getAvailableModels().then((metadata) => {
				metadataCache = metadata;
				return metadata;
			}).catch(async (error) => {
				throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
			});
		}
		return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
	};
	const getCredits = async () => {
		return new GatewayFetchMetadata({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getCredits().catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const getSpendReport = async (params) => {
		return new GatewaySpendReport({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getSpendReport(params).catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const getGenerationInfo = async (params) => {
		return new GatewayGenerationInfoFetcher({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getGenerationInfo(params).catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const provider = function(modelId) {
		if (new.target) throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
		return createLanguageModel(modelId);
	};
	provider.specificationVersion = "v4";
	provider.getAvailableModels = getAvailableModels;
	provider.getCredits = getCredits;
	provider.getSpendReport = getSpendReport;
	provider.getGenerationInfo = getGenerationInfo;
	provider.imageModel = (modelId) => {
		return new GatewayImageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.languageModel = createLanguageModel;
	provider.experimental_batch = createBatch;
	const createEmbeddingModel = (modelId) => {
		return new GatewayEmbeddingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.embeddingModel = createEmbeddingModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.videoModel = (modelId) => {
		return new GatewayVideoModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const createRerankingModel = (modelId) => {
		return new GatewayRerankingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.rerankingModel = createRerankingModel;
	provider.reranking = createRerankingModel;
	const createEvaluationModel = (modelId) => {
		return new GatewayEvaluationModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.evaluationModel = createEvaluationModel;
	provider.evaluation = createEvaluationModel;
	const createSpeechModel = (modelId) => {
		return new GatewaySpeechModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.speechModel = createSpeechModel;
	provider.speech = createSpeechModel;
	const createTranscriptionModel = (modelId) => {
		return new GatewayTranscriptionModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders(),
			webSocket: options.webSocket
		});
	};
	provider.transcriptionModel = createTranscriptionModel;
	provider.transcription = createTranscriptionModel;
	provider.experimental_transcription = Object.assign((modelId) => createTranscriptionModel(modelId), { getToken: async (tokenOptions) => {
		const secret = await mintClientSecret({
			modelId: tokenOptions.model,
			routeKind: "transcription",
			...tokenOptions.expiresAfterSeconds != null && { expiresAfterSeconds: tokenOptions.expiresAfterSeconds }
		});
		return {
			token: secret.token,
			url: toGatewayTranscriptionUrl(baseURL, tokenOptions.model),
			...secret.expiresAt != null && { expiresAt: secret.expiresAt }
		};
	} });
	const createRealtimeModel = (modelId) => new GatewayRealtimeModel(modelId, {
		provider: "gateway.realtime",
		baseURL,
		teamIdOrSlug: options.teamIdOrSlug,
		createClientSecret: mintClientSecret
	});
	provider.experimental_realtime = Object.assign((modelId) => createRealtimeModel(modelId), { getToken: async (tokenOptions) => {
		const { model: modelId, ...secretOptions } = tokenOptions;
		const secret = await createRealtimeModel(modelId).doCreateClientSecret(secretOptions);
		return {
			token: secret.token,
			url: secret.url,
			...secret.expiresAt != null && { expiresAt: secret.expiresAt }
		};
	} });
	provider.chat = provider.languageModel;
	provider.embedding = provider.embeddingModel;
	provider.image = provider.imageModel;
	provider.video = provider.videoModel;
	provider.tools = gatewayTools;
	return provider;
}
var gateway = createGateway();
async function getGatewayAuthToken(options) {
	const apiKey = loadOptionalSetting({
		settingValue: options.apiKey,
		environmentVariableName: "AI_GATEWAY_API_KEY"
	});
	if (apiKey) return {
		token: apiKey,
		authMethod: "api-key"
	};
	return {
		token: await (0, import_index_browser.getVercelOidcToken)(),
		authMethod: "oidc"
	};
}
function assertGatewayClientSecretServerEnvironment() {
	if (typeof globalThis.window !== "undefined") throw new Error("AI Gateway client secrets must be minted server-side: minting needs your Gateway credential, which must never reach the browser. Call gateway.experimental_realtime.getToken() or gateway.experimental_transcription.getToken() from your server and pass the returned token to the client.");
}
//#endregion
//#region node_modules/ai/dist/index.js
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name25 in all) __defProp(target, name25, {
		get: all[name25],
		enumerable: true
	});
};
var name = "AI_InvalidArgumentError";
var marker = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker);
var _a;
var _b;
var InvalidArgumentError = class extends (_b = AISDKError, _a = symbol, _b) {
	constructor({ parameter, value, message }) {
		super({
			name,
			message: `Invalid argument for parameter ${parameter}: ${message}`
		});
		this[_a] = true;
		this.parameter = parameter;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker);
	}
};
var name2 = "AI_InvalidStreamPartError";
var marker2 = `vercel.ai.error.${name2}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var _b2;
var InvalidStreamPartError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
	constructor({ chunk, message }) {
		super({
			name: name2,
			message
		});
		this[_a2] = true;
		this.chunk = chunk;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2);
	}
};
var name3 = "AI_InvalidToolApprovalError";
var marker3 = `vercel.ai.error.${name3}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var _b3;
var InvalidToolApprovalError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
	constructor({ approvalId }) {
		super({
			name: name3,
			message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
		});
		this[_a3] = true;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3);
	}
};
var name4 = "AI_InvalidToolApprovalSignatureError";
var marker4 = `vercel.ai.error.${name4}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var _b4;
var InvalidToolApprovalSignatureError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
	constructor({ approvalId, toolCallId, reason }) {
		super({
			name: name4,
			message: `Tool approval signature verification failed for approval "${approvalId}" (tool call "${toolCallId}"): ${reason}`
		});
		this[_a4] = true;
		this.approvalId = approvalId;
		this.toolCallId = toolCallId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4);
	}
};
var name5 = "AI_InvalidToolInputError";
var marker5 = `vercel.ai.error.${name5}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var _b5;
var InvalidToolInputError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
	constructor({ toolInput, toolName, cause, message = `Invalid input for tool ${toolName}: ${getErrorMessage(cause)}` }) {
		super({
			name: name5,
			message,
			cause
		});
		this[_a5] = true;
		this.toolInput = toolInput;
		this.toolName = toolName;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5);
	}
};
var name6 = "AI_ToolCallNotFoundForApprovalError";
var marker6 = `vercel.ai.error.${name6}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var _b6;
var ToolCallNotFoundForApprovalError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
	constructor({ toolCallId, approvalId }) {
		super({
			name: name6,
			message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
		});
		this[_a6] = true;
		this.toolCallId = toolCallId;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6);
	}
};
var name7 = "AI_MissingToolResultsError";
var marker7 = `vercel.ai.error.${name7}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var _b7;
var MissingToolResultsError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
	constructor({ toolCallIds }) {
		super({
			name: name7,
			message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(", ")}.`
		});
		this[_a7] = true;
		this.toolCallIds = toolCallIds;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7);
	}
};
var name8 = "AI_NoImageGeneratedError";
var marker8 = `vercel.ai.error.${name8}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var _b8;
var NoImageGeneratedError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
	constructor({ message = "No image generated.", cause, calls, responses }) {
		super({
			name: name8,
			message,
			cause
		});
		this[_a8] = true;
		this.calls = calls;
		this.responses = responses;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker8);
	}
};
var name9 = "AI_NoObjectGeneratedError";
var marker9 = `vercel.ai.error.${name9}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var _b9;
var NoObjectGeneratedError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name9,
			message,
			cause
		});
		this[_a9] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker9);
	}
};
var name10 = "AI_NoOutputGeneratedError";
var marker10 = `vercel.ai.error.${name10}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var _b10;
var NoOutputGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
	constructor({ message = "No output generated.", cause } = {}) {
		super({
			name: name10,
			message,
			cause
		});
		this[_a10] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker10);
	}
};
var name11 = "AI_NoSpeechGeneratedError";
var marker11 = `vercel.ai.error.${name11}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var _b11;
var NoSpeechGeneratedError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
	constructor(options) {
		super({
			name: name11,
			message: "No speech audio generated."
		});
		this[_a11] = true;
		this.responses = options.responses;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker11);
	}
};
var name12 = "AI_NoTranscriptGeneratedError";
var marker12 = `vercel.ai.error.${name12}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _b12;
var NoTranscriptGeneratedError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
	constructor(options) {
		super({
			name: name12,
			message: "No transcript generated."
		});
		this[_a12] = true;
		this.responses = options.responses;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker12);
	}
};
var name13 = "AI_NoTranslationGeneratedError";
var marker13 = `vercel.ai.error.${name13}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _b13;
var NoTranslationGeneratedError = class extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
	constructor(options) {
		super({
			name: name13,
			message: "No translation generated."
		});
		this[_a13] = true;
		this.response = options.response;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13);
	}
};
var name14 = "AI_NoVideoGeneratedError";
var marker14 = `vercel.ai.error.${name14}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var _b14;
var NoVideoGeneratedError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
	constructor({ message = "No video generated.", cause, responses }) {
		super({
			name: name14,
			message,
			cause
		});
		this[_a14] = true;
		this.responses = responses;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14);
	}
	/**
	* @deprecated use `isInstance` instead
	*/
	static isNoVideoGeneratedError(error) {
		return error instanceof Error && error.name === name14 && typeof error.responses !== "undefined" ? true : false;
	}
	/**
	* @deprecated Do not use this method. It will be removed in the next major version.
	*/
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			stack: this.stack,
			cause: this.cause,
			responses: this.responses
		};
	}
};
var name15 = "AI_NoSuchToolError";
var marker15 = `vercel.ai.error.${name15}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var _b15;
var NoSuchToolError = class extends (_b15 = AISDKError, _a15 = symbol15, _b15) {
	constructor({ toolName, availableTools = void 0, message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}` }) {
		super({
			name: name15,
			message
		});
		this[_a15] = true;
		this.toolName = toolName;
		this.availableTools = availableTools;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker15);
	}
};
var name16 = "AI_StreamProviderError";
var marker16 = `vercel.ai.error.${name16}`;
var symbol16 = Symbol.for(marker16);
var _a16;
var _b16;
var StreamProviderError = class extends (_b16 = AISDKError, _a16 = symbol16, _b16) {
	constructor({ message, type, code, statusCode, isRetryable = isRetryableStatusCode(statusCode), data, cause }) {
		super({
			name: name16,
			message,
			cause
		});
		this[_a16] = true;
		this.type = type;
		this.code = code;
		this.statusCode = statusCode;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker16);
	}
};
function isRetryableStatusCode(statusCode) {
	return statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500);
}
var name17 = "AI_ToolCallRepairError";
var marker17 = `vercel.ai.error.${name17}`;
var symbol17 = Symbol.for(marker17);
var _a17;
var _b17;
var ToolCallRepairError = class extends (_b17 = AISDKError, _a17 = symbol17, _b17) {
	constructor({ cause, originalError, message = `Error repairing tool call: ${getErrorMessage(cause)}` }) {
		super({
			name: name17,
			message,
			cause
		});
		this[_a17] = true;
		this.originalError = originalError;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker17);
	}
};
var name18 = "AI_ToolChoiceViolationError";
var marker18 = `vercel.ai.error.${name18}`;
var symbol18 = Symbol.for(marker18);
var _a18;
var _b18;
var ToolChoiceViolationError = class extends (_b18 = AISDKError, _a18 = symbol18, _b18) {
	constructor({ toolChoice, finishReason, provider, modelId, content, message = toolChoice.type === "required" ? "Model response did not contain a tool call even though tool choice was required." : `Model response did not contain a call to the required tool '${toolChoice.toolName}'.` }) {
		super({
			name: name18,
			message
		});
		this[_a18] = true;
		this.toolChoice = toolChoice;
		this.finishReason = finishReason;
		this.provider = provider;
		this.modelId = modelId;
		this.content = content;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker18);
	}
};
var UnsupportedModelVersionError = class extends AISDKError {
	constructor(options) {
		super({
			name: "AI_UnsupportedModelVersionError",
			message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
		});
		this.version = options.version;
		this.provider = options.provider;
		this.modelId = options.modelId;
	}
};
var name19 = "AI_UIMessageStreamError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol19 = Symbol.for(marker19);
var _a19;
var _b19;
var UIMessageStreamError = class extends (_b19 = AISDKError, _a19 = symbol19, _b19) {
	constructor({ chunkType, chunkId, message }) {
		super({
			name: name19,
			message
		});
		this[_a19] = true;
		this.chunkType = chunkType;
		this.chunkId = chunkId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker19);
	}
};
var name20 = "AI_InvalidDataContentError";
var marker20 = `vercel.ai.error.${name20}`;
var symbol20 = Symbol.for(marker20);
var _a20;
var _b20;
var InvalidDataContentError = class extends (_b20 = AISDKError, _a20 = symbol20, _b20) {
	constructor({ content, cause, message = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof content}.` }) {
		super({
			name: name20,
			message,
			cause
		});
		this[_a20] = true;
		this.content = content;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker20);
	}
};
var name21 = "AI_InvalidMessageRoleError";
var marker21 = `vercel.ai.error.${name21}`;
var symbol21 = Symbol.for(marker21);
var _a21;
var _b21;
var InvalidMessageRoleError = class extends (_b21 = AISDKError, _a21 = symbol21, _b21) {
	constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }) {
		super({
			name: name21,
			message
		});
		this[_a21] = true;
		this.role = role;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker21);
	}
};
var name22 = "AI_MessageConversionError";
var marker22 = `vercel.ai.error.${name22}`;
var symbol22 = Symbol.for(marker22);
var _a22;
var _b22;
var MessageConversionError = class extends (_b22 = AISDKError, _a22 = symbol22, _b22) {
	constructor({ originalMessage, message }) {
		super({
			name: name22,
			message
		});
		this[_a22] = true;
		this.originalMessage = originalMessage;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker22);
	}
};
var name23 = "AI_RetryError";
var marker23 = `vercel.ai.error.${name23}`;
var symbol23 = Symbol.for(marker23);
var _a23;
var _b23;
var RetryError = class extends (_b23 = AISDKError, _a23 = symbol23, _b23) {
	constructor({ message, reason, errors }) {
		super({
			name: name23,
			message
		});
		this[_a23] = true;
		this.reason = reason;
		this.errors = errors;
		this.lastError = errors[errors.length - 1];
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker23);
	}
};
function formatWarning({ warning, provider, model }) {
	const prefix = `AI SDK Warning${provider != null && model != null ? ` (${provider} / ${model})` : ""}:`;
	switch (warning.type) {
		case "unsupported": {
			let message = `${prefix} The feature "${warning.feature}" is not supported.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "compatibility": {
			let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "deprecated": return `${prefix} Deprecated: "${warning.setting}". ${warning.message}`;
		case "other": return `${prefix} ${warning.message}`;
		default: return `${prefix} ${JSON.stringify(warning, null, 2)}`;
	}
}
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
function emitWarning({ message, type }) {
	if (typeof process !== "undefined" && typeof process.emitWarning === "function") process.emitWarning(message, { type });
	else console.warn(message);
}
var logWarnings = (options) => {
	if (options.warnings.length === 0) return;
	const logger = globalThis.AI_SDK_LOG_WARNINGS;
	if (logger === false) return;
	if (typeof logger === "function") {
		logger(options);
		return;
	}
	if (!hasLoggedBefore) {
		hasLoggedBefore = true;
		emitWarning({
			message: FIRST_WARNING_INFO_MESSAGE,
			type: "Warning"
		});
	}
	for (const warning of options.warnings) emitWarning({
		message: formatWarning({
			warning,
			provider: options.provider,
			model: options.model
		}),
		type: warning.type === "deprecated" ? "DeprecationWarning" : "Warning"
	});
};
function logV2CompatibilityWarning({ provider, modelId }) {
	logWarnings({
		warnings: [{
			type: "compatibility",
			feature: "specificationVersion",
			details: `Using v2 specification compatibility mode. Some features may not be available.`
		}],
		provider,
		model: modelId
	});
}
function asEmbeddingModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		if (prop === "specificationVersion") return "v3";
		return target[prop];
	} });
}
function asEmbeddingModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	const v3Model = model.specificationVersion === "v2" ? asEmbeddingModelV3(model) : model;
	return new Proxy(v3Model, { get(target, prop) {
		if (prop === "specificationVersion") return "v4";
		return target[prop];
	} });
}
function asImageModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		if (prop === "specificationVersion") return "v3";
		return target[prop];
	} });
}
function asImageModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	const v3Model = model.specificationVersion === "v2" ? asImageModelV3(model) : model;
	return new Proxy(v3Model, { get(target, prop) {
		if (prop === "specificationVersion") return "v4";
		return target[prop];
	} });
}
function asLanguageModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		switch (prop) {
			case "specificationVersion": return "v3";
			case "doGenerate": return async (...args) => {
				const result = await target.doGenerate(...args);
				return {
					...result,
					finishReason: convertV2FinishReasonToV3(result.finishReason),
					usage: convertV2UsageToV3(result.usage)
				};
			};
			case "doStream": return async (...args) => {
				const result = await target.doStream(...args);
				return {
					...result,
					stream: convertV2StreamToV3(result.stream)
				};
			};
			default: return target[prop];
		}
	} });
}
function convertV2StreamToV3(stream) {
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		switch (chunk.type) {
			case "finish":
				controller.enqueue({
					...chunk,
					finishReason: convertV2FinishReasonToV3(chunk.finishReason),
					usage: convertV2UsageToV3(chunk.usage)
				});
				break;
			default: controller.enqueue(chunk);
		}
	} }));
}
function convertV2FinishReasonToV3(finishReason) {
	return {
		unified: finishReason === "unknown" ? "other" : finishReason,
		raw: void 0
	};
}
function convertV2UsageToV3(usage) {
	return {
		inputTokens: {
			total: usage.inputTokens,
			noCache: void 0,
			cacheRead: usage.cachedInputTokens,
			cacheWrite: void 0
		},
		outputTokens: {
			total: usage.outputTokens,
			text: void 0,
			reasoning: usage.reasoningTokens
		}
	};
}
function asLanguageModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	const v3Model = model.specificationVersion === "v2" ? asLanguageModelV3(model) : model;
	return new Proxy(v3Model, { get(target, prop) {
		switch (prop) {
			case "specificationVersion": return "v4";
			case "doGenerate": return async (options) => {
				const result = await target.doGenerate({
					...options,
					prompt: convertV4PromptToV3(options.prompt)
				});
				return {
					...result,
					content: result.content.map(convertV3ContentToV4)
				};
			};
			case "doStream": return async (options) => {
				const result = await target.doStream({
					...options,
					prompt: convertV4PromptToV3(options.prompt)
				});
				return {
					...result,
					stream: convertV3StreamToV4(result.stream)
				};
			};
			default: return target[prop];
		}
	} });
}
function convertV4PromptToV3(prompt) {
	return prompt.map((message) => {
		if (message.role === "system") return message;
		return {
			...message,
			content: message.content.map((part) => {
				switch (part.type) {
					case "file": return {
						...part,
						data: convertV4FileDataToV3(part.data)
					};
					case "tool-result": return {
						...part,
						output: convertV4ToolResultOutputToV3(part.output)
					};
					default: return part;
				}
			})
		};
	});
}
function convertV4FileDataToV3(data) {
	switch (data.type) {
		case "data": return data.data;
		case "url": return data.url;
		case "reference":
		case "text": return data;
	}
}
function convertV4ToolResultOutputToV3(output) {
	if (output.type !== "content") return output;
	return {
		...output,
		value: output.value.map((part) => {
			if (part.type !== "file") return part;
			switch (part.data.type) {
				case "data": return {
					type: "file-data",
					data: typeof part.data.data === "string" ? part.data.data : convertUint8ArrayToBase64(part.data.data),
					mediaType: part.mediaType,
					filename: part.filename,
					providerOptions: part.providerOptions
				};
				case "url": return {
					type: "file-url",
					url: part.data.url.toString(),
					providerOptions: part.providerOptions
				};
				case "reference": return {
					type: "file-id",
					fileId: part.data.reference,
					providerOptions: part.providerOptions
				};
				case "text": return part;
			}
		})
	};
}
function convertV3ContentToV4(content) {
	return content.type === "file" ? {
		...content,
		data: {
			type: "data",
			data: content.data
		}
	} : content;
}
function convertV3StreamToV4(stream) {
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		controller.enqueue(chunk.type === "file" ? {
			...chunk,
			data: {
				type: "data",
				data: chunk.data
			}
		} : chunk);
	} }));
}
function asRerankingModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	return new Proxy(model, { get(target, prop) {
		if (prop === "specificationVersion") return "v4";
		return target[prop];
	} });
}
function asSpeechModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		if (prop === "specificationVersion") return "v3";
		return target[prop];
	} });
}
function asSpeechModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	const v3Model = model.specificationVersion === "v2" ? asSpeechModelV3(model) : model;
	return new Proxy(v3Model, { get(target, prop) {
		if (prop === "specificationVersion") return "v4";
		return target[prop];
	} });
}
function asTranscriptionModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		if (prop === "specificationVersion") return "v3";
		return target[prop];
	} });
}
function asTranscriptionModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	const v3Model = model.specificationVersion === "v2" ? asTranscriptionModelV3(model) : model;
	return new Proxy(v3Model, { get(target, prop) {
		if (prop === "specificationVersion") return "v4";
		return target[prop];
	} });
}
function asVideoModelV4(model) {
	if (model.specificationVersion === "v4") return model;
	return new Proxy(model, { get(target, prop) {
		if (prop === "specificationVersion") return "v4";
		return target[prop];
	} });
}
function asProviderV3(provider) {
	if ("specificationVersion" in provider && provider.specificationVersion === "v3") return provider;
	const v2Provider = provider;
	return {
		specificationVersion: "v3",
		languageModel: (modelId) => asLanguageModelV3(v2Provider.languageModel(modelId)),
		embeddingModel: (modelId) => asEmbeddingModelV3(v2Provider.textEmbeddingModel(modelId)),
		imageModel: (modelId) => asImageModelV3(v2Provider.imageModel(modelId)),
		transcriptionModel: v2Provider.transcriptionModel ? (modelId) => asTranscriptionModelV3(v2Provider.transcriptionModel(modelId)) : void 0,
		speechModel: v2Provider.speechModel ? (modelId) => asSpeechModelV3(v2Provider.speechModel(modelId)) : void 0,
		rerankingModel: void 0
	};
}
function asProviderV4(provider) {
	if ("specificationVersion" in provider && provider.specificationVersion === "v4") return provider;
	const v3Provider = !("specificationVersion" in provider) || provider.specificationVersion !== "v3" ? asProviderV3(provider) : provider;
	return {
		specificationVersion: "v4",
		languageModel: (modelId) => asLanguageModelV4(v3Provider.languageModel(modelId)),
		embeddingModel: (modelId) => asEmbeddingModelV4(v3Provider.embeddingModel(modelId)),
		imageModel: (modelId) => asImageModelV4(v3Provider.imageModel(modelId)),
		transcriptionModel: v3Provider.transcriptionModel ? (modelId) => asTranscriptionModelV4(v3Provider.transcriptionModel(modelId)) : void 0,
		speechModel: v3Provider.speechModel ? (modelId) => asSpeechModelV4(v3Provider.speechModel(modelId)) : void 0,
		rerankingModel: v3Provider.rerankingModel ? (modelId) => asRerankingModelV4(v3Provider.rerankingModel(modelId)) : void 0
	};
}
function resolveLanguageModel(model) {
	if (typeof model === "string") return getGlobalProvider().languageModel(model);
	if (![
		"v4",
		"v3",
		"v2"
	].includes(model.specificationVersion)) {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asLanguageModelV4(model);
}
function resolveEmbeddingModel(model) {
	if (typeof model === "string") return getGlobalProvider().embeddingModel(model);
	if (![
		"v4",
		"v3",
		"v2"
	].includes(model.specificationVersion)) {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asEmbeddingModelV4(model);
}
function resolveTranscriptionModel(model) {
	if (typeof model === "string") return getGlobalProvider().transcriptionModel?.(model);
	if (![
		"v4",
		"v3",
		"v2"
	].includes(model.specificationVersion)) {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asTranscriptionModelV4(model);
}
function resolveSpeechTranslationModel(model) {
	if (typeof model === "string") {
		const speechTranslationModel = (globalThis.AI_SDK_DEFAULT_PROVIDER ?? gateway).speechTranslationModel;
		if (!speechTranslationModel) throw new Error("The default provider does not support speech translation models. Please pass a provider model instance that implements the experimental speech translation model specification.");
		return speechTranslationModel(model);
	}
	if (model.specificationVersion !== "v4") {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return model;
}
function resolveSpeechModel(model) {
	if (typeof model === "string") return getGlobalProvider().speechModel?.(model);
	if (![
		"v4",
		"v3",
		"v2"
	].includes(model.specificationVersion)) {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asSpeechModelV4(model);
}
function resolveImageModel(model) {
	if (typeof model === "string") return getGlobalProvider().imageModel(model);
	if (![
		"v4",
		"v3",
		"v2"
	].includes(model.specificationVersion)) {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asImageModelV4(model);
}
function resolveVideoModel(model) {
	if (typeof model === "string") {
		const videoModel = (globalThis.AI_SDK_DEFAULT_PROVIDER ?? gateway).videoModel;
		if (!videoModel) throw new Error("The default provider does not support video models. Please use a Experimental_VideoModelV4 object from a provider (e.g., vertex.video(\"model-id\")).");
		return videoModel(model);
	}
	if (!["v4", "v3"].includes(model.specificationVersion)) {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asVideoModelV4(model);
}
function resolveRerankingModel(model) {
	if (typeof model === "string") {
		const rerankingModel = getGlobalProvider().rerankingModel;
		if (!rerankingModel) throw new Error("The default provider does not support reranking models. Please use a RerankingModel object from a provider (e.g., gateway.rerankingModel(\"model-id\")).");
		return rerankingModel(model);
	}
	if (model.specificationVersion !== "v4" && model.specificationVersion !== "v3") {
		const unsupportedModel = model;
		throw new UnsupportedModelVersionError({
			version: unsupportedModel.specificationVersion,
			provider: unsupportedModel.provider,
			modelId: unsupportedModel.modelId
		});
	}
	return asRerankingModelV4(model);
}
function resolveEvaluationModel(model) {
	if (typeof model === "string") {
		const provider = globalThis.AI_SDK_DEFAULT_PROVIDER ?? gateway;
		if (typeof provider?.evaluationModel !== "function") throw new NoSuchModelError({
			modelId: model,
			modelType: "evaluationModel",
			message: "The default provider does not support evaluation models. Pass an evaluation model instance or configure AI_SDK_DEFAULT_PROVIDER with an evaluationModel method."
		});
		const resolvedModel = provider.evaluationModel(model);
		if (resolvedModel == null) throw new NoSuchModelError({
			modelId: model,
			modelType: "evaluationModel"
		});
		model = resolvedModel;
	}
	if (model.specificationVersion !== "v4") throw new UnsupportedModelVersionError({
		version: model.specificationVersion,
		provider: model.provider,
		modelId: model.modelId
	});
	return model;
}
function getGlobalProvider() {
	return asProviderV4(globalThis.AI_SDK_DEFAULT_PROVIDER ?? gateway);
}
function cloneModelMessages(messages) {
	return messages.map((message) => cloneValue(message));
}
function cloneValue(value) {
	if (value instanceof URL) return new URL(value.href);
	if (Array.isArray(value)) return value.map((item) => cloneValue(item));
	if (value instanceof Uint8Array) return new Uint8Array(value);
	if (value instanceof ArrayBuffer) return value.slice(0);
	if (value instanceof Date) return new Date(value);
	if (value != null && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, value2]) => [key, cloneValue(value2)]));
	return value;
}
var VERSION = "7.0.118";
var download = async ({ url, maxBytes, abortSignal }) => {
	const urlText = url.toString();
	try {
		const response = await fetchUntrustedUrl({
			url: urlText,
			headers: withUserAgentSuffix({}, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			abortSignal
		});
		if (!response.ok) {
			await cancelResponseBody(response);
			throw new DownloadError({
				url: urlText,
				statusCode: response.status,
				statusText: response.statusText
			});
		}
		return {
			data: await readResponseWithSizeLimit({
				response,
				url: urlText,
				maxBytes: maxBytes ?? 2147483648
			}),
			mediaType: response.headers.get("content-type") ?? void 0
		};
	} catch (error) {
		if (DownloadError.isInstance(error)) throw error;
		throw new DownloadError({
			url: urlText,
			cause: error
		});
	}
};
var createDefaultDownloadFunction = (download2 = download, abortSignal) => (requestedDownloads) => Promise.all(requestedDownloads.map(async (requestedDownload) => requestedDownload.isUrlSupportedByModel ? null : await download2({
	...requestedDownload,
	abortSignal
})));
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(overrides, key)) {
			const overridesValue = overrides[key];
			if (overridesValue === void 0) continue;
			const baseValue = key in base ? base[key] : void 0;
			const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
			const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
			if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
			else result[key] = overridesValue;
		}
	}
	return result;
}
function splitDataUrl(dataUrl) {
	try {
		const [header, base64Content] = dataUrl.split(",");
		return {
			mediaType: header.split(";")[0].split(":")[1],
			base64Content
		};
	} catch {
		return {
			mediaType: void 0,
			base64Content: void 0
		};
	}
}
function isTaggedFileData(value) {
	if (typeof value !== "object" || value === null) return false;
	const type = value.type;
	return type === "data" || type === "url" || type === "reference" || type === "text";
}
function convertUrlToFilePartData(url, originalUrl) {
	if (url.protocol === "data:") {
		const { mediaType, base64Content } = splitDataUrl(url.toString());
		if (mediaType == null || base64Content == null) throw new InvalidDataContentError({
			content: url,
			message: `Invalid data URL format in content ${url.toString()}`
		});
		return {
			data: {
				type: "data",
				data: base64Content
			},
			mediaType
		};
	}
	return {
		data: {
			type: "url",
			url,
			...originalUrl != null ? { originalUrl } : {}
		},
		mediaType: void 0
	};
}
function convertUrlStringToFilePartData(content) {
	const result = convertUrlToFilePartData(new URL(content));
	if (result.data.type === "url" && result.data.url.toString() !== content) result.data.originalUrl = content;
	return result;
}
function convertInlineDataToFilePartData(content) {
	if (content instanceof Uint8Array) return {
		data: {
			type: "data",
			data: content
		},
		mediaType: void 0
	};
	if (content instanceof ArrayBuffer) return {
		data: {
			type: "data",
			data: new Uint8Array(content)
		},
		mediaType: void 0
	};
	if (isBuffer(content)) return {
		data: {
			type: "data",
			data: new Uint8Array(content)
		},
		mediaType: void 0
	};
	return {
		data: {
			type: "data",
			data: content
		},
		mediaType: void 0
	};
}
function convertToLanguageModelV4FilePart(content) {
	if (isTaggedFileData(content)) switch (content.type) {
		case "data":
			if (typeof content.data === "string" && content.data.startsWith("data:")) throw new InvalidDataContentError({
				content: content.data,
				message: "Data URLs are not valid inline data. Pass them as { type: \"url\", url } instead."
			});
			return convertInlineDataToFilePartData(content.data);
		case "url": return convertUrlToFilePartData(content.url, content.originalUrl);
		case "reference": return {
			data: {
				type: "reference",
				reference: content.reference
			},
			mediaType: void 0
		};
		case "text": return {
			data: {
				type: "text",
				text: content.text
			},
			mediaType: void 0
		};
	}
	if (content instanceof URL) return convertUrlToFilePartData(content);
	if (typeof content === "string") try {
		return convertUrlStringToFilePartData(content);
	} catch {
		return convertInlineDataToFilePartData(content);
	}
	if (isProviderReference(content)) return {
		data: {
			type: "reference",
			reference: content
		},
		mediaType: void 0
	};
	return convertInlineDataToFilePartData(content);
}
async function convertToLanguageModelPrompt({ prompt, supportedUrls, download: download2, abortSignal, provider }) {
	const downloadedAssets = await downloadAssets(prompt.messages, download2 ?? createDefaultDownloadFunction(void 0, abortSignal), supportedUrls);
	const approvalIdToToolCallId = /* @__PURE__ */ new Map();
	for (const message of prompt.messages) if (message.role === "assistant" && Array.isArray(message.content)) {
		for (const part of message.content) if (part.type === "tool-approval-request" && "approvalId" in part && "toolCallId" in part) approvalIdToToolCallId.set(part.approvalId, part.toolCallId);
	}
	const approvedToolCallIds = /* @__PURE__ */ new Set();
	for (const message of prompt.messages) if (message.role === "tool") {
		for (const part of message.content) if (part.type === "tool-approval-response") {
			const toolCallId = approvalIdToToolCallId.get(part.approvalId);
			if (toolCallId) approvedToolCallIds.add(toolCallId);
		}
	}
	const messages = [...prompt.instructions != null ? typeof prompt.instructions === "string" ? [{
		role: "system",
		content: prompt.instructions
	}] : asArray(prompt.instructions).map((message) => ({
		role: "system",
		content: message.content,
		providerOptions: message.providerOptions
	})) : [], ...prompt.messages.map((message) => convertToLanguageModelMessage({
		message,
		downloadedAssets,
		provider
	}))];
	const combinedMessages = [];
	for (const message of messages) {
		if (message.role !== "tool") {
			combinedMessages.push(message);
			continue;
		}
		const lastCombinedMessage = combinedMessages.at(-1);
		if (lastCombinedMessage?.role === "tool") {
			const lastContentPart = lastCombinedMessage.content.at(-1);
			if (lastContentPart != null && lastCombinedMessage.providerOptions != null) lastContentPart.providerOptions = mergeObjects(lastCombinedMessage.providerOptions, lastContentPart.providerOptions);
			lastCombinedMessage.content.push(...message.content);
			lastCombinedMessage.providerOptions = message.providerOptions;
		} else combinedMessages.push(message);
	}
	const toolCallIds = /* @__PURE__ */ new Set();
	for (const message of combinedMessages) switch (message.role) {
		case "assistant":
			for (const content of message.content) if (content.type === "tool-call" && !content.providerExecuted) toolCallIds.add(content.toolCallId);
			break;
		case "tool":
			for (const content of message.content) if (content.type === "tool-result") toolCallIds.delete(content.toolCallId);
			break;
		case "user":
		case "system":
			for (const id of approvedToolCallIds) toolCallIds.delete(id);
			if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
	}
	for (const id of approvedToolCallIds) toolCallIds.delete(id);
	if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
	return combinedMessages.filter((message) => message.role !== "tool" || message.content.length > 0);
}
function convertToLanguageModelMessage({ message, downloadedAssets, provider }) {
	const warnings = [];
	const role = message.role;
	switch (role) {
		case "system": return {
			role: "system",
			content: message.content,
			providerOptions: message.providerOptions
		};
		case "user": {
			if (typeof message.content === "string") return {
				role: "user",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			const converted = {
				role: "user",
				content: message.content.map((part) => {
					if (part.type === "image") warnings.push({
						type: "deprecated",
						setting: "\"image\" content part",
						message: `The "image" content part type is deprecated. Use a "file" part with mediaType: 'image' (or a more specific image/* subtype) instead.`
					});
					return convertImagePartToFilePart(part);
				}).map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
				providerOptions: message.providerOptions
			};
			if (warnings.length > 0) logWarnings({ warnings });
			return converted;
		}
		case "assistant": {
			if (typeof message.content === "string") return {
				role: "assistant",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			const converted = {
				role: "assistant",
				content: message.content.filter((part) => part.type !== "text" || part.text !== "" || part.providerOptions != null).filter((part) => part.type !== "tool-approval-request").map((part) => {
					const providerOptions = part.providerOptions;
					switch (part.type) {
						case "custom": return {
							type: "custom",
							kind: part.kind,
							providerOptions
						};
						case "file": {
							const { data, mediaType } = convertToLanguageModelV4FilePart(part.data);
							return {
								type: "file",
								data,
								filename: part.filename,
								mediaType: mediaType ?? part.mediaType,
								providerOptions
							};
						}
						case "reasoning": return {
							type: "reasoning",
							text: part.text,
							providerOptions
						};
						case "reasoning-file": {
							const { data, mediaType } = convertToLanguageModelV4FilePart(part.data);
							if (data.type !== "data" && data.type !== "url") throw new Error(`Unsupported reasoning-file data type: ${data.type}`);
							return {
								type: "reasoning-file",
								data,
								mediaType: mediaType ?? part.mediaType,
								providerOptions
							};
						}
						case "text": return {
							type: "text",
							text: part.text,
							providerOptions
						};
						case "tool-call": return {
							type: "tool-call",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							providerExecuted: part.providerExecuted,
							providerOptions
						};
						case "tool-result": return {
							type: "tool-result",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							output: mapToolResultOutput({
								output: part.output,
								provider,
								warnings,
								downloadedAssets
							}),
							providerOptions
						};
					}
				}),
				providerOptions: message.providerOptions
			};
			if (warnings.length > 0) logWarnings({ warnings });
			return converted;
		}
		case "tool": {
			const converted = {
				role: "tool",
				content: message.content.filter((part) => part.type !== "tool-approval-response" || part.providerExecuted).map((part) => {
					switch (part.type) {
						case "tool-result": return {
							type: "tool-result",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							output: mapToolResultOutput({
								output: part.output,
								provider,
								warnings,
								downloadedAssets
							}),
							providerOptions: part.providerOptions
						};
						case "tool-approval-response": return {
							type: "tool-approval-response",
							approvalId: part.approvalId,
							approved: part.approved,
							reason: part.reason
						};
					}
				}),
				providerOptions: message.providerOptions
			};
			if (warnings.length > 0) logWarnings({ warnings });
			return converted;
		}
		default: throw new InvalidMessageRoleError({ role });
	}
}
function convertImagePartToFilePart(part) {
	if (part.type !== "image") return part;
	return {
		type: "file",
		data: part.image,
		mediaType: part.mediaType ?? "image",
		providerOptions: part.providerOptions
	};
}
async function downloadAssets(messages, download2, supportedUrls) {
	const downloadableFiles = [];
	for (const message of messages) {
		if (message.role === "user" && Array.isArray(message.content)) for (const part of message.content) {
			const filePart = convertImagePartToFilePart(part);
			if (filePart.type === "file") downloadableFiles.push(filePart);
		}
		if (message.role === "tool") for (const part of message.content) {
			if (part.type !== "tool-result") continue;
			if (part.output.type !== "content") continue;
			for (const contentPart of part.output.value) if (contentPart.type === "file") downloadableFiles.push(contentPart);
		}
		if (message.role === "assistant" && Array.isArray(message.content)) for (const part of message.content) {
			if (part.type !== "tool-result") continue;
			if (part.output.type !== "content") continue;
			for (const contentPart of part.output.value) if (contentPart.type === "file") downloadableFiles.push(contentPart);
		}
	}
	const plannedDownloads = downloadableFiles.map((part) => {
		const mediaType = part.mediaType;
		const { data } = convertToLanguageModelV4FilePart(part.data);
		return {
			mediaType,
			data
		};
	}).filter((part) => part.data.type === "url").map((part) => ({
		url: part.data.url,
		isUrlSupportedByModel: part.mediaType != null && isUrlSupported({
			url: part.data.url.toString(),
			mediaType: part.mediaType,
			supportedUrls
		})
	}));
	const downloadedFiles = await download2(plannedDownloads);
	return Object.fromEntries(downloadedFiles.map((file, index) => file == null ? null : [plannedDownloads[index].url.toString(), {
		data: file.data,
		mediaType: file.mediaType
	}]).filter((file) => file != null));
}
function convertPartToLanguageModelPart(part, downloadedAssets) {
	if (part.type === "text") return {
		type: "text",
		text: part.text,
		providerOptions: part.providerOptions
	};
	const { data: normalizedData, mediaType: dataUrlMediaType } = convertToLanguageModelV4FilePart(part.data);
	let mediaType = dataUrlMediaType ?? part.mediaType;
	let data = normalizedData;
	if (data.type === "url") {
		const downloadedFile = downloadedAssets[data.url.toString()];
		if (downloadedFile) {
			data = {
				type: "data",
				data: downloadedFile.data
			};
			if (downloadedFile.mediaType != null && (mediaType == null || !isFullMediaType(mediaType))) mediaType = downloadedFile.mediaType;
		}
	}
	if (data.type === "data" && (data.data instanceof Uint8Array || typeof data.data === "string")) {
		const imageMediaType = detectMediaType({
			data: data.data,
			topLevelType: "image"
		});
		if (imageMediaType != null) mediaType = imageMediaType;
	}
	if (mediaType == null) throw new Error(`Media type is missing for file part`);
	return {
		type: "file",
		mediaType,
		filename: part.filename,
		data,
		providerOptions: part.providerOptions
	};
}
function mapToolResultOutput({ output, provider, warnings = [], downloadedAssets }) {
	if (output.type !== "content") return output;
	return {
		type: "content",
		value: output.value.map((item) => {
			switch (item.type) {
				case "file": {
					const convertedPart = convertPartToLanguageModelPart(item, downloadedAssets);
					if (convertedPart.type !== "file") throw new Error("Expected tool result file content to convert to file.");
					return convertedPart;
				}
				case "file-data":
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"file-data\"",
						message: `The "file-data" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'data', data } instead.`
					});
					return {
						type: "file",
						data: {
							type: "data",
							data: item.data
						},
						filename: item.filename,
						mediaType: item.mediaType,
						providerOptions: item.providerOptions
					};
				case "file-url": {
					const mediaType = item.mediaType ?? getMediaTypeFromUrl(item.url);
					const url = new URL(item.url);
					let message = `The "file-url" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'url', url } instead.`;
					if (!item.mediaType) {
						const inferenceSuffix = mediaType === "application/octet-stream" ? `Unable to infer media type from URL. Defaulting to 'application/octet-stream'.` : `Inferred media type '${mediaType}' from URL.`;
						message = `The "file-url" tool result content part with URL "${item.url}" is missing a "mediaType". ${inferenceSuffix} ${message}`;
					}
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"file-url\"",
						message
					});
					return {
						type: "file",
						data: {
							type: "url",
							url,
							...url.toString() !== item.url ? { originalUrl: item.url } : {}
						},
						mediaType,
						providerOptions: item.providerOptions
					};
				}
				case "file-id":
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"file-id\"",
						message: `The "file-id" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'reference', reference } instead.`
					});
					return {
						type: "file",
						data: {
							type: "reference",
							reference: convertFileIdToProviderReference({
								fileId: item.fileId,
								provider
							})
						},
						mediaType: "application",
						providerOptions: item.providerOptions
					};
				case "file-reference":
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"file-reference\"",
						message: `The "file-reference" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'reference', reference } instead.`
					});
					return {
						type: "file",
						data: {
							type: "reference",
							reference: item.providerReference
						},
						mediaType: "application",
						providerOptions: item.providerOptions
					};
				case "image-data":
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"image-data\"",
						message: `The "image-data" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'data', data } instead.`
					});
					return {
						type: "file",
						data: {
							type: "data",
							data: item.data
						},
						mediaType: item.mediaType,
						providerOptions: item.providerOptions
					};
				case "image-url": {
					const url = new URL(item.url);
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"image-url\"",
						message: `The "image-url" type for tool result content is deprecated. Use the "file" type with mediaType 'image' (or a specific image/* subtype) and { type: 'url', url } instead.`
					});
					return {
						type: "file",
						data: {
							type: "url",
							url,
							...url.toString() !== item.url ? { originalUrl: item.url } : {}
						},
						mediaType: "image",
						providerOptions: item.providerOptions
					};
				}
				case "image-file-id":
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"image-file-id\"",
						message: `The "image-file-id" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'reference', reference } instead.`
					});
					return {
						type: "file",
						data: {
							type: "reference",
							reference: convertFileIdToProviderReference({
								fileId: item.fileId,
								provider
							})
						},
						mediaType: "image",
						providerOptions: item.providerOptions
					};
				case "image-file-reference":
					warnings.push({
						type: "deprecated",
						setting: "\"tool-result\" content of type \"image-file-reference\"",
						message: `The "image-file-reference" type for tool result content is deprecated. Use the "file" type with mediaType and { type: 'reference', reference } instead.`
					});
					return {
						type: "file",
						data: {
							type: "reference",
							reference: item.providerReference
						},
						mediaType: "image",
						providerOptions: item.providerOptions
					};
				default: return item;
			}
		})
	};
}
function convertFileIdToProviderReference({ fileId, provider }) {
	if (typeof fileId === "object") return fileId;
	if (provider == null) throw new Error("Cannot convert string fileId to provider reference without a provider ID. Use a Record<string, string> fileId or switch to the file-reference type.");
	return { [provider]: fileId };
}
var URL_EXTENSION_TO_MEDIA_TYPE = {
	jpg: "image/jpeg",
	jpeg: "image/jpeg",
	png: "image/png",
	gif: "image/gif",
	webp: "image/webp",
	svg: "image/svg+xml",
	avif: "image/avif",
	heic: "image/heic",
	bmp: "image/bmp",
	tiff: "image/tiff",
	tif: "image/tiff",
	pdf: "application/pdf",
	mp4: "video/mp4",
	webm: "video/webm",
	mp3: "audio/mpeg",
	wav: "audio/wav",
	ogg: "audio/ogg"
};
function getMediaTypeFromUrl(url, fallbackMediaType = "application/octet-stream") {
	try {
		const fileExtension = new URL(url).pathname.split(".").pop()?.toLowerCase();
		if (fileExtension && Object.hasOwn(URL_EXTENSION_TO_MEDIA_TYPE, fileExtension)) return URL_EXTENSION_TO_MEDIA_TYPE[fileExtension];
	} catch {}
	return fallbackMediaType;
}
async function createToolModelOutput({ toolCallId, input, output, tool: tool3, errorMode }) {
	if (errorMode === "text") return {
		type: "error-text",
		value: getErrorMessage(output)
	};
	else if (errorMode === "json") return {
		type: "error-json",
		value: toJSONValue(output)
	};
	if (tool3?.toModelOutput) return await tool3.toModelOutput({
		toolCallId,
		input,
		output
	});
	return typeof output === "string" ? {
		type: "text",
		value: output
	} : {
		type: "json",
		value: toJSONValue(output)
	};
}
function toJSONValue(value) {
	if (value === void 0) return null;
	const serialized = JSON.stringify(value);
	return serialized === void 0 ? null : JSON.parse(serialized);
}
function prepareLanguageModelCallOptions({ maxOutputTokens, temperature, topP, topK, presencePenalty, frequencyPenalty, seed, stopSequences, reasoning }) {
	if (maxOutputTokens != null) {
		if (!Number.isInteger(maxOutputTokens)) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be an integer"
		});
		if (maxOutputTokens < 1) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be >= 1"
		});
	}
	if (temperature != null) {
		if (typeof temperature !== "number") throw new InvalidArgumentError({
			parameter: "temperature",
			value: temperature,
			message: "temperature must be a number"
		});
	}
	if (topP != null) {
		if (typeof topP !== "number") throw new InvalidArgumentError({
			parameter: "topP",
			value: topP,
			message: "topP must be a number"
		});
	}
	if (topK != null) {
		if (typeof topK !== "number") throw new InvalidArgumentError({
			parameter: "topK",
			value: topK,
			message: "topK must be a number"
		});
	}
	if (presencePenalty != null) {
		if (typeof presencePenalty !== "number") throw new InvalidArgumentError({
			parameter: "presencePenalty",
			value: presencePenalty,
			message: "presencePenalty must be a number"
		});
	}
	if (frequencyPenalty != null) {
		if (typeof frequencyPenalty !== "number") throw new InvalidArgumentError({
			parameter: "frequencyPenalty",
			value: frequencyPenalty,
			message: "frequencyPenalty must be a number"
		});
	}
	if (seed != null) {
		if (!Number.isInteger(seed)) throw new InvalidArgumentError({
			parameter: "seed",
			value: seed,
			message: "seed must be an integer"
		});
	}
	return {
		maxOutputTokens,
		temperature,
		topP,
		topK,
		presencePenalty,
		frequencyPenalty,
		stopSequences,
		seed,
		reasoning
	};
}
function prepareToolChoice({ toolChoice }) {
	return toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : {
		type: "tool",
		toolName: toolChoice.toolName
	};
}
function isNonEmptyObject(object3) {
	return object3 != null && Object.keys(object3).length > 0;
}
async function prepareTools({ tools, toolOrder, toolsContext = {}, experimental_sandbox: sandbox }) {
	if (!isNonEmptyObject(tools)) return;
	const languageModelTools = [];
	for (const [name25, tool3] of orderToolEntries({
		tools,
		toolOrder
	})) {
		const toolType = tool3.type;
		switch (toolType) {
			case void 0:
			case "dynamic":
			case "function": {
				const description = resolveToolDescription({
					tool: tool3,
					toolName: name25,
					toolsContext,
					experimental_sandbox: sandbox
				});
				const providerOptions = tool3.providerOptions;
				const inputExamples = tool3.inputExamples;
				const strict = tool3.strict;
				languageModelTools.push({
					type: "function",
					name: name25,
					inputSchema: await asSchema(tool3.inputSchema).jsonSchema,
					...description != null ? { description } : {},
					...inputExamples != null ? { inputExamples } : {},
					...providerOptions != null ? { providerOptions } : {},
					...strict != null ? { strict } : {}
				});
				break;
			}
			case "provider":
				languageModelTools.push({
					type: "provider",
					name: name25,
					id: tool3.id,
					args: tool3.args
				});
				break;
			default: throw new Error(`Unsupported tool type: ${toolType}`);
		}
	}
	return languageModelTools;
}
function orderToolEntries({ tools, toolOrder }) {
	if (toolOrder == null) return Object.entries(tools);
	const toolEntries = Object.entries(tools);
	const orderedTools = toolEntries.filter(([name25]) => toolOrder.includes(name25)).sort(([nameA], [nameB]) => toolOrder.indexOf(nameA) - toolOrder.indexOf(nameB));
	const unorderedTools = toolEntries.filter(([name25]) => !toolOrder.includes(name25)).sort(([nameA], [nameB]) => nameA < nameB ? -1 : nameA > nameB ? 1 : 0);
	return [...orderedTools, ...unorderedTools];
}
function resolveToolDescription({ tool: tool3, toolName, toolsContext, experimental_sandbox: sandbox }) {
	return tool3.description === void 0 ? void 0 : typeof tool3.description === "string" ? tool3.description : tool3.description({
		context: toolsContext[toolName],
		experimental_sandbox: sandbox
	});
}
function getTotalTimeoutMs(timeout) {
	if (timeout == null) return;
	if (typeof timeout === "number") return timeout;
	return timeout.totalMs;
}
function getStepTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.stepMs;
}
function getFirstChunkTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.firstChunkMs;
}
function getChunkTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.chunkMs;
}
function getToolTimeoutMs(timeout, toolName) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.tools?.[`${toolName}Ms`] ?? timeout.toolMs;
}
var z = {
	array,
	boolean,
	custom,
	discriminatedUnion,
	enum: _enum,
	instanceof: _instanceof,
	lazy,
	literal,
	looseObject,
	never,
	null: _null,
	number,
	object,
	record,
	string,
	union,
	unknown
};
var jsonValueSchema = z.lazy(() => z.union([
	z.null(),
	z.string(),
	z.number(),
	z.boolean(),
	z.record(z.string(), jsonValueSchema.optional()),
	z.array(jsonValueSchema)
]));
var providerMetadataSchema = z.record(z.string(), z.record(z.string(), jsonValueSchema.optional()));
var fileInlineDataSchema = z.union([
	z.string(),
	z.instanceof(Uint8Array),
	z.instanceof(ArrayBuffer),
	z.custom(isBuffer, { message: "Must be a Buffer" })
]);
var providerReferenceSchema = z.record(z.string(), z.string());
var textPartSchema = z.object({
	type: z.literal("text"),
	text: z.string(),
	providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = z.object({
	type: z.literal("image"),
	image: z.union([
		fileInlineDataSchema,
		z.instanceof(URL),
		providerReferenceSchema
	]),
	mediaType: z.string().optional(),
	providerOptions: providerMetadataSchema.optional()
});
var taggedFileDataSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("data"),
		data: fileInlineDataSchema
	}),
	z.object({
		type: z.literal("url"),
		url: z.instanceof(URL)
	}),
	z.object({
		type: z.literal("reference"),
		reference: providerReferenceSchema
	}),
	z.object({
		type: z.literal("text"),
		text: z.string()
	})
]);
var taggedReasoningFileDataSchema = z.discriminatedUnion("type", [z.object({
	type: z.literal("data"),
	data: fileInlineDataSchema
}), z.object({
	type: z.literal("url"),
	url: z.instanceof(URL)
})]);
var filePartSchema = z.object({
	type: z.literal("file"),
	data: z.union([
		taggedFileDataSchema,
		fileInlineDataSchema,
		z.instanceof(URL),
		providerReferenceSchema
	]),
	filename: z.string().optional(),
	mediaType: z.string(),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = z.object({
	type: z.literal("reasoning"),
	text: z.string(),
	providerOptions: providerMetadataSchema.optional()
});
var customPartSchema = z.object({
	type: z.literal("custom"),
	kind: z.string().transform((value) => value),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningFilePartSchema = z.object({
	type: z.literal("reasoning-file"),
	data: z.union([
		taggedReasoningFileDataSchema,
		fileInlineDataSchema,
		z.instanceof(URL)
	]),
	mediaType: z.string(),
	providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = z.object({
	type: z.literal("tool-call"),
	toolCallId: z.string(),
	toolName: z.string(),
	input: z.unknown(),
	providerOptions: providerMetadataSchema.optional(),
	providerExecuted: z.boolean().optional()
});
var outputSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("text"),
		value: z.string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	z.object({
		type: z.literal("json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	z.object({
		type: z.literal("execution-denied"),
		reason: z.string().optional(),
		providerOptions: providerMetadataSchema.optional()
	}),
	z.object({
		type: z.literal("error-text"),
		value: z.string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	z.object({
		type: z.literal("error-json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	z.object({
		type: z.literal("content"),
		value: z.array(z.union([
			z.object({
				type: z.literal("text"),
				text: z.string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("file"),
				data: taggedFileDataSchema,
				mediaType: z.string(),
				filename: z.string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("file-data"),
				data: z.string(),
				mediaType: z.string(),
				filename: z.string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("file-url"),
				url: z.string(),
				mediaType: z.string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("file-id"),
				fileId: z.union([z.string(), z.record(z.string(), z.string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("file-reference"),
				providerReference: z.record(z.string(), z.string()),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("image-data"),
				data: z.string(),
				mediaType: z.string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("image-url"),
				url: z.string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("image-file-id"),
				fileId: z.union([z.string(), z.record(z.string(), z.string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("image-file-reference"),
				providerReference: z.record(z.string(), z.string()),
				providerOptions: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("custom"),
				providerOptions: providerMetadataSchema.optional()
			})
		]))
	})
]);
var toolResultPartSchema = z.object({
	type: z.literal("tool-result"),
	toolCallId: z.string(),
	toolName: z.string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = z.object({
	type: z.literal("tool-approval-request"),
	approvalId: z.string(),
	toolCallId: z.string(),
	reason: z.string().optional(),
	isAutomatic: z.boolean().optional(),
	signature: z.string().optional(),
	inputSchemaInput: z.unknown().optional()
});
var toolApprovalResponseSchema = z.object({
	type: z.literal("tool-approval-response"),
	approvalId: z.string(),
	approved: z.boolean(),
	reason: z.string().optional()
});
var systemModelMessageSchema = z.object({
	role: z.literal("system"),
	content: z.string(),
	providerOptions: providerMetadataSchema.optional()
});
var userModelMessageSchema = z.object({
	role: z.literal("user"),
	content: z.union([z.string(), z.array(z.union([
		textPartSchema,
		imagePartSchema,
		filePartSchema
	]))]),
	providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = z.object({
	role: z.literal("assistant"),
	content: z.union([z.string(), z.array(z.union([
		textPartSchema,
		customPartSchema,
		filePartSchema,
		reasoningPartSchema,
		reasoningFilePartSchema,
		toolCallPartSchema,
		toolResultPartSchema,
		toolApprovalRequestSchema
	]))]),
	providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = z.object({
	role: z.literal("tool"),
	content: z.array(z.union([toolResultPartSchema, toolApprovalResponseSchema])),
	providerOptions: providerMetadataSchema.optional()
});
var modelMessageSchema = z.union([
	systemModelMessageSchema,
	userModelMessageSchema,
	assistantModelMessageSchema,
	toolModelMessageSchema
]);
async function standardizePrompt({ allowSystemInMessages = false, system, instructions = system, prompt, messages }) {
	if (prompt == null && messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (prompt != null && messages != null) throw new InvalidPromptError({
		prompt,
		message: "prompt and messages cannot be defined at the same time"
	});
	if (typeof instructions !== "string" && !asArray(instructions).every((message) => message.role === "system")) throw new InvalidPromptError({
		prompt,
		message: "instructions must be a string, SystemModelMessage, or array of SystemModelMessage"
	});
	if (prompt != null && typeof prompt === "string") messages = [{
		role: "user",
		content: prompt
	}];
	else if (prompt != null && Array.isArray(prompt)) messages = prompt;
	else if (messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (messages.length === 0) throw new InvalidPromptError({
		prompt,
		message: "messages must not be empty"
	});
	if (!allowSystemInMessages && messages.some((message) => message.role === "system")) throw new InvalidPromptError({
		prompt,
		message: "System messages are not allowed in the prompt or messages fields. Use the instructions option instead."
	});
	const validationResult = await safeValidateTypes({
		value: messages,
		schema: z.array(modelMessageSchema)
	});
	if (!validationResult.success) throw new InvalidPromptError({
		prompt,
		message: "The messages do not match the ModelMessage[] schema.",
		cause: validationResult.error
	});
	return {
		messages,
		instructions
	};
}
function wrapGatewayError(error) {
	if (!GatewayAuthenticationError.isInstance(error)) return error;
	return new AISDKError({
		name: "GatewayError",
		message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: https://ai-sdk.dev/unauthenticated-ai-gateway`
	});
}
function asLanguageModelUsage(usage) {
	return {
		inputTokens: usage.inputTokens.total,
		inputTokenDetails: {
			noCacheTokens: usage.inputTokens.noCache,
			cacheReadTokens: usage.inputTokens.cacheRead,
			cacheWriteTokens: usage.inputTokens.cacheWrite
		},
		outputTokens: usage.outputTokens.total,
		outputTokenDetails: {
			textTokens: usage.outputTokens.text,
			reasoningTokens: usage.outputTokens.reasoning
		},
		totalTokens: addTokenCounts(usage.inputTokens.total, usage.outputTokens.total),
		raw: usage.raw
	};
}
function createNullLanguageModelUsage() {
	return {
		inputTokens: void 0,
		inputTokenDetails: {
			noCacheTokens: void 0,
			cacheReadTokens: void 0,
			cacheWriteTokens: void 0
		},
		outputTokens: void 0,
		outputTokenDetails: {
			textTokens: void 0,
			reasoningTokens: void 0
		},
		totalTokens: void 0,
		raw: void 0
	};
}
function addLanguageModelUsage(usage1, usage2) {
	return {
		inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
		inputTokenDetails: {
			noCacheTokens: addTokenCounts(usage1.inputTokenDetails?.noCacheTokens, usage2.inputTokenDetails?.noCacheTokens),
			cacheReadTokens: addTokenCounts(usage1.inputTokenDetails?.cacheReadTokens, usage2.inputTokenDetails?.cacheReadTokens),
			cacheWriteTokens: addTokenCounts(usage1.inputTokenDetails?.cacheWriteTokens, usage2.inputTokenDetails?.cacheWriteTokens)
		},
		outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
		outputTokenDetails: {
			textTokens: addTokenCounts(usage1.outputTokenDetails?.textTokens, usage2.outputTokenDetails?.textTokens),
			reasoningTokens: addTokenCounts(usage1.outputTokenDetails?.reasoningTokens, usage2.outputTokenDetails?.reasoningTokens)
		},
		totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens)
	};
}
function addTokenCounts(tokenCount1, tokenCount2) {
	return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 ?? 0) + (tokenCount2 ?? 0);
}
function addImageModelUsage(usage1, usage2) {
	return {
		inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
		outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
		totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens)
	};
}
function getOwn(obj, key) {
	return obj != null && Object.hasOwn(obj, key) ? obj[key] : void 0;
}
function mergeAbortSignals(...signals) {
	const validSignals = filterNullable(...signals).map((signal) => typeof signal === "number" ? AbortSignal.timeout(signal) : signal);
	return validSignals.length === 0 ? void 0 : validSignals.length === 1 ? validSignals[0] : AbortSignal.any(validSignals);
}
function now() {
	return globalThis?.performance?.now() ?? Date.now();
}
async function notify(options) {
	await Promise.all(asArray(options.callbacks).map(async (callback) => {
		try {
			await callback?.(options.event);
		} catch {}
	}));
}
function getRetryDelayInMs({ error, exponentialBackoffDelay }) {
	const headers = APICallError.isInstance(error) ? error.responseHeaders : APICallError.isInstance(error.cause) ? error.cause.responseHeaders : void 0;
	if (!headers) return exponentialBackoffDelay;
	let ms;
	const retryAfterMs = headers["retry-after-ms"];
	if (retryAfterMs) {
		const timeoutMs = parseFloat(retryAfterMs);
		if (!Number.isNaN(timeoutMs)) ms = timeoutMs;
	}
	const retryAfter = headers["retry-after"];
	if (retryAfter && ms === void 0) {
		const timeoutSeconds = parseFloat(retryAfter);
		if (!Number.isNaN(timeoutSeconds)) ms = timeoutSeconds * 1e3;
		else ms = Date.parse(retryAfter) - Date.now();
	}
	if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 6e4 || ms < exponentialBackoffDelay)) return ms;
	return exponentialBackoffDelay;
}
var retryWithExponentialBackoffRespectingRetryHeaders = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2, abortSignal, additionalRetryableError } = {}) => retryWithExponentialBackoff({
	maxRetries,
	initialDelayInMs,
	backoffFactor,
	abortSignal,
	shouldRetry: async (error) => error instanceof Error && (APICallError.isInstance(error) && error.isRetryable === true || GatewayError.isInstance(error) && error.isRetryable === true) || additionalRetryableError != null && await additionalRetryableError(error),
	getDelayInMs: ({ error, exponentialBackoffDelay }) => getRetryDelayInMs({
		error,
		exponentialBackoffDelay
	}),
	createRetryError: ({ message, reason, errors }) => new RetryError({
		message,
		reason,
		errors
	})
});
function prepareRetries({ maxRetries, abortSignal, additionalRetryableError, parameter = "maxRetries", defaultMaxRetries = 2 }) {
	if (maxRetries != null) {
		if (!Number.isInteger(maxRetries)) throw new InvalidArgumentError({
			parameter,
			value: maxRetries,
			message: `${parameter} must be an integer`
		});
		if (maxRetries < 0) throw new InvalidArgumentError({
			parameter,
			value: maxRetries,
			message: `${parameter} must be >= 0`
		});
	}
	const maxRetriesResult = maxRetries ?? defaultMaxRetries;
	return {
		maxRetries: maxRetriesResult,
		retry: retryWithExponentialBackoffRespectingRetryHeaders({
			maxRetries: maxRetriesResult,
			abortSignal,
			additionalRetryableError
		})
	};
}
function setAbortTimeout({ abortController, label, timeoutMs }) {
	if (abortController == null || timeoutMs == null) return;
	return setTimeout(() => abortController.abort(new DOMException(`${label} timeout of ${timeoutMs}ms exceeded`, "TimeoutError")), timeoutMs);
}
function calculateTokensPerSecond({ tokens, durationMs }) {
	const tokenRate = 1e3 * (tokens ?? 0) / (durationMs ?? 0);
	return Number.isFinite(tokenRate) ? tokenRate : 0;
}
function collectToolApprovals({ messages }) {
	const lastMessage = messages.at(-1);
	if (lastMessage?.role != "tool") return {
		approvedToolApprovals: [],
		deniedToolApprovals: []
	};
	const toolCallsByToolCallId = /* @__PURE__ */ Object.create(null);
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-call") toolCallsByToolCallId[part.toolCallId] = part;
	}
	const toolApprovalRequestsByApprovalId = /* @__PURE__ */ Object.create(null);
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-approval-request") toolApprovalRequestsByApprovalId[part.approvalId] = part;
	}
	const toolResults = /* @__PURE__ */ Object.create(null);
	for (const part of lastMessage.content) if (part.type === "tool-result") toolResults[part.toolCallId] = part;
	const approvedToolApprovals = [];
	const deniedToolApprovals = [];
	const approvalResponses = lastMessage.content.filter((part) => part.type === "tool-approval-response");
	for (const approvalResponse of approvalResponses) {
		const approvalRequest = toolApprovalRequestsByApprovalId[approvalResponse.approvalId];
		if (approvalRequest == null) throw new InvalidToolApprovalError({ approvalId: approvalResponse.approvalId });
		const existingToolResult = toolResults[approvalRequest.toolCallId];
		if (existingToolResult != null && (approvalResponse.approved || existingToolResult.output.type !== "execution-denied")) continue;
		const toolCall = toolCallsByToolCallId[approvalRequest.toolCallId];
		if (toolCall == null) throw new ToolCallNotFoundForApprovalError({
			toolCallId: approvalRequest.toolCallId,
			approvalId: approvalRequest.approvalId
		});
		const approval = {
			approvalRequest,
			approvalResponse,
			toolCall,
			...existingToolResult != null ? { existingToolResult } : {}
		};
		if (approvalResponse.approved) approvedToolApprovals.push(approval);
		else deniedToolApprovals.push(approval);
	}
	return {
		approvedToolApprovals,
		deniedToolApprovals
	};
}
var DefaultGeneratedFile = class {
	constructor({ data, mediaType, providerMetadata }) {
		const isUint8Array = data instanceof Uint8Array;
		this.base64Data = isUint8Array ? void 0 : data;
		this.uint8ArrayData = isUint8Array ? data : void 0;
		this.mediaType = mediaType;
		this.providerMetadata = providerMetadata;
	}
	get base64() {
		if (this.base64Data == null) this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
		return this.base64Data;
	}
	get uint8Array() {
		if (this.uint8ArrayData == null) this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
		return this.uint8ArrayData;
	}
};
var DefaultGeneratedFileWithType = class extends DefaultGeneratedFile {
	constructor() {
		super(...arguments);
		this.type = "file";
	}
};
async function resolveGeneratedFileData({ data, abortSignal, cache }) {
	if (data.type === "data") return data.data;
	const cachedData = cache?.get(data);
	if (cachedData != null) return cachedData;
	const downloadedData = (await download({
		url: data.url,
		abortSignal
	})).data;
	cache?.set(data, downloadedData);
	return downloadedData;
}
async function convertLanguageModelContent({ content, toolCalls, toolOutputs, toolApprovalRequests, toolApprovalResponses, tools, abortSignal, generatedFileDataCache }) {
	const contentParts = [];
	const toolOutputsWithApprovalResponses = [];
	const toolOutputsWithoutApprovalResponses = [];
	const toolCallIdsWithApprovalResponses = new Set(toolApprovalResponses.map((toolApprovalResponse) => toolApprovalResponse.toolCall.toolCallId));
	for (const part of content) switch (part.type) {
		case "text":
		case "reasoning":
		case "custom":
		case "source":
			contentParts.push(part);
			break;
		case "file":
		case "reasoning-file":
			contentParts.push({
				type: part.type,
				file: new DefaultGeneratedFile({
					data: await resolveGeneratedFileData({
						data: part.data,
						abortSignal,
						cache: generatedFileDataCache
					}),
					mediaType: part.mediaType
				}),
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			});
			break;
		case "tool-call": {
			const toolCall = toolCalls.find((toolCall2) => toolCall2.toolCallId === part.toolCallId);
			if (toolCall == null) throw new Error(`Tool call ${part.toolCallId} not found.`);
			contentParts.push(toolCall);
			break;
		}
		case "tool-result": {
			const toolCall = toolCalls.find((toolCall2) => toolCall2.toolCallId === part.toolCallId);
			if (toolCall == null) {
				const tool3 = getOwn(tools, part.toolName);
				if (!(tool3?.type === "provider" && tool3.supportsDeferredResults)) throw new Error(`Tool call ${part.toolCallId} not found.`);
				if (part.isError) contentParts.push({
					type: "tool-error",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: void 0,
					error: part.result,
					providerExecuted: true,
					dynamic: part.dynamic,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
					...tool3?.metadata != null ? { toolMetadata: tool3.metadata } : {}
				});
				else contentParts.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: void 0,
					output: part.result,
					providerExecuted: true,
					dynamic: part.dynamic,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
					...tool3?.metadata != null ? { toolMetadata: tool3.metadata } : {}
				});
				break;
			}
			if (part.isError) contentParts.push({
				type: "tool-error",
				toolCallId: part.toolCallId,
				toolName: part.toolName,
				input: toolCall.input,
				error: part.result,
				providerExecuted: true,
				dynamic: toolCall.dynamic,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			});
			else contentParts.push({
				type: "tool-result",
				toolCallId: part.toolCallId,
				toolName: part.toolName,
				input: toolCall.input,
				output: part.result,
				providerExecuted: true,
				dynamic: toolCall.dynamic,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			});
			break;
		}
		case "tool-approval-request": {
			const toolCall = toolCalls.find((toolCall2) => toolCall2.toolCallId === part.toolCallId);
			if (toolCall == null) throw new ToolCallNotFoundForApprovalError({
				toolCallId: part.toolCallId,
				approvalId: part.approvalId
			});
			contentParts.push({
				type: "tool-approval-request",
				approvalId: part.approvalId,
				toolCall
			});
			break;
		}
	}
	for (const toolOutput of toolOutputs) if (toolCallIdsWithApprovalResponses.has(toolOutput.toolCallId)) toolOutputsWithApprovalResponses.push(toolOutput);
	else toolOutputsWithoutApprovalResponses.push(toolOutput);
	return [
		...contentParts,
		...toolOutputsWithoutApprovalResponses,
		...toolApprovalRequests,
		...toolApprovalResponses,
		...toolOutputsWithApprovalResponses
	];
}
var DIRECT_TOOL_CALL = "AI_SDK_DIRECT_TOOL_CALL";
function resolveToolCallerConfiguration({ tools, toolCallers }) {
	if (tools == null || toolCallers == null) return;
	const resolved = {};
	for (const [toolName, callers] of Object.entries(toolCallers)) {
		if (!Object.prototype.hasOwnProperty.call(tools, toolName)) throw new InvalidArgumentError({
			parameter: "experimental_toolCallers",
			value: toolCallers,
			message: `unknown tool "${toolName}".`
		});
		if (!Array.isArray(callers)) throw new InvalidArgumentError({
			parameter: "experimental_toolCallers",
			value: toolCallers,
			message: `callers for tool "${toolName}" must be an array.`
		});
		resolved[toolName] = callers.map((caller) => {
			if (caller === DIRECT_TOOL_CALL) return caller;
			if (typeof caller !== "string" || !Object.prototype.hasOwnProperty.call(tools, caller) || getToolCaller(tools[caller]) == null) throw new InvalidArgumentError({
				parameter: "experimental_toolCallers",
				value: toolCallers,
				message: `tool "${toolName}" contains an invalid caller.`
			});
			return caller;
		});
	}
	return resolved;
}
function prepareToolsForToolCallers({ tools, toolCallers }) {
	if (tools == null || toolCallers == null) return {
		executionTools: tools,
		modelTools: tools,
		toolCallerMessages: []
	};
	const executionTools = { ...tools };
	const modelTools = { ...tools };
	const localToolsByCaller = /* @__PURE__ */ new Map();
	const toolCallerMessages = [];
	for (const [toolName, callerNames] of Object.entries(toolCallers)) {
		const tool3 = executionTools[toolName];
		if (tool3 == null) continue;
		let availableDirectly = false;
		let availableToProvider = false;
		let preparedTool = tool3;
		for (const callerName of callerNames) {
			if (callerName === DIRECT_TOOL_CALL) {
				availableDirectly = true;
				continue;
			}
			const caller = getToolCaller(executionTools[callerName]);
			if (caller == null) continue;
			if (caller.type === "provider") {
				availableToProvider = true;
				preparedTool = {
					...preparedTool,
					providerOptions: caller.prepareProviderOptions(preparedTool.providerOptions)
				};
			} else {
				const localTools = localToolsByCaller.get(callerName) ?? {};
				localTools[toolName] = preparedTool;
				localToolsByCaller.set(callerName, localTools);
			}
		}
		executionTools[toolName] = preparedTool;
		if (availableDirectly || availableToProvider) modelTools[toolName] = preparedTool;
		else delete modelTools[toolName];
	}
	for (const [callerName, callerTool] of Object.entries(executionTools)) {
		const caller = getToolCaller(callerTool);
		if (caller?.type !== "local") continue;
		const callerTools = localToolsByCaller.get(callerName) ?? {};
		const boundCaller = caller.bind(callerTools);
		executionTools[callerName] = boundCaller;
		if (Object.prototype.hasOwnProperty.call(modelTools, callerName)) {
			if (caller.prepareModelMessage == null) modelTools[callerName] = boundCaller;
			else {
				const content = caller.prepareModelMessage(callerTools);
				if (content != null) toolCallerMessages.push({
					role: "user",
					content
				});
			}
		}
	}
	return {
		executionTools,
		modelTools,
		toolCallerMessages
	};
}
function appendToolCallerMessages({ messages, toolCallerMessages }) {
	if (toolCallerMessages.length === 0) return messages;
	const latestUserText = messages.findLast((message) => message.role === "user" && typeof message.content === "string")?.content;
	const existingUserText = new Set(latestUserText == null ? [] : [latestUserText]);
	const additions = toolCallerMessages.filter((message) => {
		if (typeof message.content !== "string" || existingUserText.has(message.content)) return false;
		existingUserText.add(message.content);
		return true;
	});
	return additions.length === 0 ? messages : [...messages, ...additions];
}
var toolSearchSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.toolSearch");
function toolSearch() {
	return Object.assign(tool({
		description: "Search for tools by keywords in their names and descriptions. Returns up to five matching tools. Matches become available on the next model step, after this execution finishes. Wait for their tool definitions before calling the discovered tools. If no tools match, try different keywords.",
		inputSchema: jsonSchema({
			type: "object",
			properties: { query: {
				type: "string",
				minLength: 1
			} },
			required: ["query"],
			additionalProperties: false
		}),
		outputSchema: jsonSchema({
			type: "object",
			properties: { tools: {
				type: "array",
				items: {
					type: "object",
					properties: {
						name: { type: "string" },
						description: { type: "string" }
					},
					required: ["name"],
					additionalProperties: false
				}
			} },
			required: ["tools"],
			additionalProperties: false
		}),
		execute: () => {
			throw new Error("toolSearch must be bound by an AI SDK generation.");
		}
	}), {
		type: "function",
		[toolSearchSymbol]: true
	});
}
function isToolSearch(tool3) {
	return tool3[toolSearchSymbol] === true;
}
function createToolSearchState({ tools, toolCallers }) {
	const searchTools = Object.entries(tools ?? {}).filter(([, tool3]) => tool3.deferLoading || isToolSearch(tool3));
	if (searchTools.length === 0) return (activeTools) => activeTools;
	const discovered = /* @__PURE__ */ new Set();
	const getCallers = (name25) => getOwn(toolCallers, name25) ?? [DIRECT_TOOL_CALL];
	for (const [name25, tool3] of searchTools) if (getCallers(name25).some((name26) => {
		if (name26 === DIRECT_TOOL_CALL) return false;
		const caller = getToolCaller(tools?.[name26]);
		return caller?.type !== "local" || caller.prepareModelMessage == null;
	}) || isToolSearch(tool3) && tool3.deferLoading) throw new InvalidArgumentError({
		parameter: "tools",
		value: name25,
		message: `tool "${name25}" must be callable directly or through code mode with toolDiscovery: 'conversation'. The search tool itself must not defer loading.`
	});
	return (activeTools, { toolsContext = {}, experimental_sandbox } = {}) => {
		if (activeTools == null) return;
		const entries = Object.entries(activeTools);
		return Object.fromEntries(entries.filter(([name25, tool3]) => !tool3.deferLoading || discovered.has(name25)).map(([searchName, tool3]) => {
			if (!isToolSearch(tool3)) return [searchName, tool3];
			const callers = getCallers(searchName).filter((name25) => name25 === DIRECT_TOOL_CALL || Object.hasOwn(activeTools, name25));
			const candidates = entries.filter(([name25, candidate]) => candidate.deferLoading && !isToolSearch(candidate) && callers.some((caller) => getCallers(name25).includes(caller)));
			return [searchName, {
				...tool3,
				execute: ({ query }) => {
					const terms = [...new Set(tokenize(query))];
					const matches = candidates.map(([name25, candidate]) => {
						const description = resolveToolDescription({
							tool: candidate,
							toolName: name25,
							toolsContext,
							experimental_sandbox
						});
						const nameTerms = tokenize(name25);
						const descriptionTerms = tokenize(description ?? "");
						return {
							name: name25,
							description,
							score: terms.reduce((score2, term) => score2 + (nameTerms.includes(term) ? 2 : 0) + (descriptionTerms.includes(term) ? 1 : 0), 0)
						};
					}).filter((match) => match.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
					for (const { name: name25 } of matches) discovered.add(name25);
					return { tools: matches.map(({ name: name25, description }) => ({
						name: name25,
						...description == null ? {} : { description }
					})) };
				}
			}];
		}));
	};
}
function tokenize(text2) {
	return text2.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
}
async function validateToolContext({ toolName, context, contextSchema }) {
	if (contextSchema == null) return context;
	return await validateTypes({
		value: context,
		schema: contextSchema,
		context: {
			field: "tool context",
			entityName: toolName
		}
	});
}
async function executeToolCall({ toolCall, tools, toolsContext, callId, messages, abortSignal, timeout, experimental_sandbox: sandbox, onPreliminaryToolResult, onToolExecutionStart, onToolExecutionEnd, executeToolInTelemetryContext = async ({ execute }) => await execute(), runInTracingChannelSpan = async ({ execute }) => await execute() }) {
	const { toolName, toolCallId, input } = toolCall;
	const tool3 = getOwn(tools, toolName);
	if (!isExecutableTool(tool3)) return;
	const context = await validateToolContext({
		toolName,
		context: getOwn(toolsContext, toolName),
		contextSchema: tool3.contextSchema
	});
	const toolExecutionContext = {
		toolCall,
		messages,
		toolContext: context
	};
	const baseCallbackEvent = {
		callId,
		...toolExecutionContext
	};
	return await runInTracingChannelSpan({
		type: "executeTool",
		event: baseCallbackEvent,
		execute: async () => {
			let output;
			await notify({
				event: baseCallbackEvent,
				callbacks: onToolExecutionStart
			});
			const toolAbortSignal = mergeAbortSignals(abortSignal, getToolTimeoutMs(timeout, toolName));
			let toolExecutionMs = 0;
			try {
				await executeToolInTelemetryContext({
					callId,
					toolCallId,
					...toolExecutionContext,
					execute: async () => {
						const startTime = now();
						try {
							const stream = executeTool({
								tool: tool3,
								input,
								options: {
									toolCallId,
									messages,
									abortSignal: toolAbortSignal,
									context,
									experimental_sandbox: sandbox
								}
							});
							for await (const part of stream) if (part.type === "preliminary") onPreliminaryToolResult?.({
								...toolCall,
								type: "tool-result",
								output: part.output,
								preliminary: true
							});
							else output = part.output;
						} finally {
							toolExecutionMs = now() - startTime;
						}
					}
				});
			} catch (error) {
				const toolError = {
					type: "tool-error",
					toolCallId,
					toolName,
					input,
					error,
					dynamic: tool3.type === "dynamic",
					...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
					...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
				};
				await notify({
					event: {
						...baseCallbackEvent,
						toolOutput: toolError,
						toolExecutionMs
					},
					callbacks: onToolExecutionEnd
				});
				return {
					output: toolError,
					toolExecutionMs
				};
			}
			const toolResult = {
				type: "tool-result",
				toolCallId,
				toolName,
				input,
				output,
				dynamic: tool3.type === "dynamic",
				...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			};
			await notify({
				event: {
					...baseCallbackEvent,
					toolOutput: toolResult,
					toolExecutionMs
				},
				callbacks: onToolExecutionEnd
			});
			return {
				output: toolResult,
				toolExecutionMs
			};
		}
	});
}
function filterActiveTools({ tools, activeTools }) {
	if (tools == null || activeTools == null) return tools;
	return Object.fromEntries(Object.entries(tools).filter(([name25]) => activeTools.includes(name25)));
}
function isToolExecutionAllowedFinishReason(finishReason) {
	return finishReason === "stop" || finishReason === "tool-calls";
}
var output_exports = {};
__export(output_exports, {
	array: () => array2,
	choice: () => choice,
	json: () => json,
	object: () => object2,
	text: () => text
});
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	let unicodeEscapeDigits = 0;
	function isHexDigit(char) {
		return char >= "0" && char <= "9" || char >= "A" && char <= "F" || char >= "a" && char <= "f";
	}
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				if (char === "u") {
					unicodeEscapeDigits = 0;
					stack.push("INSIDE_STRING_UNICODE_ESCAPE");
				} else lastValidIndex = i;
				break;
			case "INSIDE_STRING_UNICODE_ESCAPE":
				if (isHexDigit(char)) {
					unicodeEscapeDigits++;
					if (unicodeEscapeDigits === 4) {
						stack.pop();
						lastValidIndex = i;
					}
				}
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default: stack.pop();
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object2 = ({ schema: inputSchema, name: name25, description }) => {
	const schema = asSchema(inputSchema);
	return {
		name: "object",
		responseFormat: resolve(schema.jsonSchema).then((jsonSchema3) => ({
			type: "json",
			schema: jsonSchema3,
			...name25 != null && { name: name25 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const validationResult = await safeValidateTypes({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array2 = ({ element: inputElementSchema, minItems, maxItems, name: name25, description }) => {
	validateArrayBound({
		name: "minItems",
		value: minItems
	});
	validateArrayBound({
		name: "maxItems",
		value: maxItems
	});
	if (minItems != null && maxItems != null && minItems > maxItems) throw new InvalidArgumentError({
		parameter: "minItems",
		value: minItems,
		message: "minItems must be less than or equal to maxItems"
	});
	const elementSchema = asSchema(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema3) => {
			const { $schema: _$schema, definitions, $defs, ...itemSchema } = jsonSchema3;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					...definitions != null && { definitions },
					...$defs != null && { $defs },
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema,
						...minItems != null && { minItems },
						...maxItems != null && { maxItems }
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name25 != null && { name: name25 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const lengthValidationError = getArrayLengthValidationError({
				value: outerValue.elements,
				minItems,
				maxItems
			});
			if (lengthValidationError != null) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: lengthValidationError,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const validatedElements = [];
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context.response,
					usage: context.usage,
					finishReason: context.finishReason
				});
				validatedElements.push(validationResult.value);
			}
			return validatedElements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) {
					if (maxItems != null && publishedElements >= maxItems) {
						controller.error(getArrayLengthValidationError({
							value: partialOutput,
							maxItems
						}));
						return;
					}
					controller.enqueue(partialOutput[publishedElements]);
				}
			} });
		}
	};
};
function validateArrayBound({ name: name25, value }) {
	if (value == null) return;
	if (!Number.isInteger(value)) throw new InvalidArgumentError({
		parameter: name25,
		value,
		message: `${name25} must be an integer`
	});
	if (value < 0) throw new InvalidArgumentError({
		parameter: name25,
		value,
		message: `${name25} must be greater than or equal to 0`
	});
}
function getArrayLengthValidationError({ value, minItems, maxItems }) {
	if (minItems != null && value.length < minItems) return new TypeValidationError({
		value,
		cause: `elements array must contain at least ${minItems} items`
	});
	if (maxItems != null && value.length > maxItems) return new TypeValidationError({
		value,
		cause: `elements array must contain at most ${maxItems} items`
	});
}
var choice = ({ options: choiceOptions, name: name25, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name25 != null && { name: name25 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json = ({ name: name25, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name25 != null && { name: name25 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var inputSchemaInputSymbol = /* @__PURE__ */ Symbol("ai-sdk-tool-call-input-schema-input");
function setToolCallInputSchemaInput(toolCall, inputSchemaInput) {
	Object.defineProperty(toolCall, inputSchemaInputSymbol, { value: inputSchemaInput });
	return toolCall;
}
function getToolCallInputSchemaInput(toolCall) {
	return inputSchemaInputSymbol in toolCall ? { value: toolCall[inputSchemaInputSymbol] } : void 0;
}
async function parseToolCall({ toolCall, tools, repairToolCall, refineToolInput, messages, instructions, abortSignal }) {
	try {
		if (tools == null) {
			if (toolCall.providerExecuted && toolCall.dynamic) return await refineParsedToolCallInput({
				toolCall: await parseProviderExecutedDynamicToolCall(toolCall),
				refineToolInput
			});
			throw new NoSuchToolError({ toolName: toolCall.toolName });
		}
		try {
			return await refineParsedToolCallInput({
				toolCall: await doParseToolCall({
					toolCall,
					tools
				}),
				refineToolInput
			});
		} catch (error) {
			if (repairToolCall == null || !(NoSuchToolError.isInstance(error) || InvalidToolInputError.isInstance(error))) throw error;
			let repairedToolCall = null;
			try {
				abortSignal?.throwIfAborted();
				repairedToolCall = await waitForPromiseWithAbortSignal({
					promise: repairToolCall({
						toolCall,
						tools,
						inputSchema: async ({ toolName }) => {
							const inputSchema = getOwn(tools, toolName)?.inputSchema;
							return await asSchema(inputSchema).jsonSchema;
						},
						instructions,
						system: instructions,
						messages,
						error,
						abortSignal
					}),
					abortSignal
				});
			} catch (repairError) {
				abortSignal?.throwIfAborted();
				throw new ToolCallRepairError({
					cause: repairError,
					originalError: error
				});
			}
			if (repairedToolCall == null) throw error;
			const parsedRepairedToolCall = await refineParsedToolCallInput({
				toolCall: await doParseToolCall({
					toolCall: repairedToolCall,
					tools
				}),
				refineToolInput
			});
			abortSignal?.throwIfAborted();
			return parsedRepairedToolCall;
		}
	} catch (error) {
		abortSignal?.throwIfAborted();
		const parsedInput = await safeParseJSON({ text: toolCall.input });
		const input = parsedInput.success ? parsedInput.value : toolCall.input;
		const tool3 = getOwn(tools, toolCall.toolName);
		return {
			type: "tool-call",
			toolCallId: toolCall.toolCallId,
			toolName: toolCall.toolName,
			input,
			dynamic: true,
			invalid: true,
			error,
			title: tool3?.title,
			providerExecuted: toolCall.providerExecuted,
			providerMetadata: toolCall.providerMetadata,
			...tool3?.metadata != null ? { toolMetadata: tool3.metadata } : {}
		};
	}
}
async function waitForPromiseWithAbortSignal({ promise, abortSignal }) {
	if (abortSignal == null) return await promise;
	return await new Promise((resolve3, reject) => {
		const cleanup = () => {
			abortSignal.removeEventListener("abort", onAbort);
		};
		const onAbort = () => {
			cleanup();
			reject(abortSignal.reason);
		};
		Promise.resolve(promise).then((value) => {
			cleanup();
			resolve3(value);
		}).catch((error) => {
			cleanup();
			reject(error);
		});
		abortSignal.addEventListener("abort", onAbort, { once: true });
		if (abortSignal.aborted) onAbort();
	});
}
async function refineParsedToolCallInput({ toolCall, refineToolInput }) {
	const refine = getOwn(refineToolInput, toolCall.toolName);
	if (refine == null) return toolCall;
	const refinedToolCall = {
		...toolCall,
		input: await refine(toolCall.input)
	};
	const inputSchemaInput = getToolCallInputSchemaInput(toolCall);
	return inputSchemaInput == null ? refinedToolCall : setToolCallInputSchemaInput(refinedToolCall, inputSchemaInput.value);
}
async function parseProviderExecutedDynamicToolCall(toolCall) {
	const parseResult = toolCall.input.trim() === "" ? {
		success: true,
		value: {}
	} : await safeParseJSON({ text: toolCall.input });
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName: toolCall.toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: true,
		dynamic: true,
		providerMetadata: toolCall.providerMetadata
	};
}
async function doParseToolCall({ toolCall, tools }) {
	const toolName = toolCall.toolName;
	const tool3 = getOwn(tools, toolName);
	if (tool3 == null) {
		if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
		throw new NoSuchToolError({
			toolName: toolCall.toolName,
			availableTools: Object.keys(tools)
		});
	}
	const schema = asSchema(tool3.inputSchema);
	const parseResult = toolCall.input.trim() === "" ? await safeValidateTypes({
		value: {},
		schema
	}) : await safeParseJSON({
		text: toolCall.input,
		schema
	});
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return setToolCallInputSchemaInput(tool3.type === "dynamic" ? {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		...tool3.metadata != null ? { toolMetadata: tool3.metadata } : {},
		dynamic: true,
		title: tool3.title
	} : {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		...tool3.metadata != null ? { toolMetadata: tool3.metadata } : {},
		title: tool3.title
	}, parseResult.rawValue);
}
function prepareStepCallSettings({ callSettings, stepSettings }) {
	return prepareLanguageModelCallOptions({
		maxOutputTokens: stepSettings?.maxOutputTokens ?? callSettings.maxOutputTokens,
		temperature: stepSettings?.temperature ?? callSettings.temperature,
		topP: stepSettings?.topP ?? callSettings.topP,
		topK: stepSettings?.topK ?? callSettings.topK,
		presencePenalty: stepSettings?.presencePenalty ?? callSettings.presencePenalty,
		frequencyPenalty: stepSettings?.frequencyPenalty ?? callSettings.frequencyPenalty,
		stopSequences: stepSettings?.stopSequences ?? callSettings.stopSequences,
		seed: stepSettings?.seed ?? callSettings.seed,
		reasoning: stepSettings?.reasoning ?? callSettings.reasoning
	});
}
function unwrapReasoningFileData(data) {
	if (typeof data === "object" && data !== null && "type" in data) return data.type === "data" ? data.data : data.url;
	return data;
}
function convertFromReasoningOutputs(parts) {
	return parts.map((part) => {
		if (part.type === "reasoning") return {
			type: "reasoning",
			text: part.text,
			...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
		};
		return {
			type: "reasoning-file",
			data: part.file.base64,
			mediaType: part.file.mediaType,
			...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
		};
	});
}
function convertToReasoningOutputs(parts) {
	return parts.map((part) => {
		if (part.type === "reasoning") return {
			type: "reasoning",
			text: part.text,
			...part.providerOptions != null ? { providerMetadata: part.providerOptions } : {}
		};
		const rawData = unwrapReasoningFileData(part.data);
		return {
			type: "reasoning-file",
			file: new DefaultGeneratedFile({
				data: rawData instanceof ArrayBuffer ? new Uint8Array(rawData) : rawData instanceof URL ? rawData.toString() : rawData,
				mediaType: part.mediaType
			}),
			...part.providerOptions != null ? { providerMetadata: part.providerOptions } : {}
		};
	});
}
async function resolveToolApproval({ tools, toolCall, toolApproval, messages, toolsContext, runtimeContext }) {
	if (toolApproval != null && typeof toolApproval === "function") return normalizeToolApprovalStatus(await toolApproval({
		toolCall,
		tools,
		toolsContext,
		messages,
		runtimeContext
	}));
	const toolName = toolCall.toolName;
	const tool3 = getOwn(tools, toolName);
	const input = toolCall.input;
	const userDefinedToolApprovalStatus = getOwn(toolApproval, toolName);
	if (userDefinedToolApprovalStatus != null) return normalizeToolApprovalStatus(typeof userDefinedToolApprovalStatus === "function" ? await userDefinedToolApprovalStatus(input, {
		toolCallId: toolCall.toolCallId,
		messages,
		toolContext: await validateToolContext({
			toolName,
			context: getOwn(toolsContext, toolName),
			contextSchema: tool3?.contextSchema
		}),
		runtimeContext
	}) : userDefinedToolApprovalStatus);
	if (tool3?.needsApproval == null) return { type: "not-applicable" };
	return (typeof tool3.needsApproval === "function" ? await tool3.needsApproval(input, {
		toolCallId: toolCall.toolCallId,
		messages,
		context: await validateToolContext({
			toolName,
			context: getOwn(toolsContext, toolName),
			contextSchema: tool3?.contextSchema
		})
	}) : tool3.needsApproval) ? { type: "user-approval" } : { type: "not-applicable" };
}
function normalizeToolApprovalStatus(status) {
	return status === void 0 ? { type: "not-applicable" } : typeof status === "string" ? { type: status } : status;
}
function filterIncludedContext({ context, includeContext }) {
	if (context == null) return {};
	return Object.fromEntries(Object.entries(context).filter(([key]) => includeContext?.[key] === true));
}
function filterToolsContext({ toolsContext, includeToolsContext }) {
	if (includeToolsContext == null) return {};
	return Object.fromEntries(Object.entries(toolsContext).map(([toolName, toolContext]) => [toolName, filterToolContext({
		toolName,
		toolContext,
		includeToolsContext
	})]));
}
function filterToolContext({ toolName, toolContext, includeToolsContext }) {
	const includeToolContext = includeToolsContext?.[toolName];
	return filterIncludedContext({
		context: toolContext,
		includeContext: includeToolContext
	});
}
function mergeCallbacks(...callbacks) {
	return async (event) => {
		await Promise.allSettled(callbacks.map(async (callback) => {
			await callback?.(event);
		}));
	};
}
var AI_SDK_TELEMETRY_TRACING_CHANNEL = "ai:telemetry";
function isNodeRuntime() {
	return typeof process !== "undefined" && process.release?.name === "node";
}
var diagnosticsChannelPromise;
async function loadDiagnosticsChannel() {
	if (!isNodeRuntime()) return;
	if (diagnosticsChannelPromise == null) diagnosticsChannelPromise = Promise.resolve(loadBuiltinModule("node:diagnostics_channel"));
	return diagnosticsChannelPromise;
}
function loadBuiltinModule(id) {
	const processWithBuiltins = globalThis.process;
	try {
		return processWithBuiltins?.getBuiltinModule?.(id);
	} catch {
		return;
	}
}
async function runWithTracingChannelSpan(message, execute) {
	const tracingChannel = (await loadDiagnosticsChannel())?.tracingChannel?.(AI_SDK_TELEMETRY_TRACING_CHANNEL);
	if (tracingChannel == null || tracingChannel.hasSubscribers === false) return await execute();
	let executePromise;
	let executionResult;
	let executionError;
	let hasExecutionResult = false;
	let hasExecutionError = false;
	const tracedExecute = () => {
		try {
			executePromise = Promise.resolve(execute());
		} catch (error) {
			executePromise = Promise.reject(error);
		}
		executePromise = executePromise.then((result) => {
			executionResult = result;
			hasExecutionResult = true;
			return result;
		}, (error) => {
			executionError = error;
			hasExecutionError = true;
			throw error;
		});
		return executePromise;
	};
	try {
		return await tracingChannel.tracePromise(tracedExecute, message);
	} catch {
		if (hasExecutionError) throw executionError;
		if (hasExecutionResult) return executionResult;
		if (executePromise != null) return await executePromise;
		return await execute();
	}
}
function openTelemetryChannelSpanContext({ message, completion }) {
	if (!isNodeRuntime()) return;
	const diagnosticsChannel = loadBuiltinModule("node:diagnostics_channel");
	const asyncHooks = loadBuiltinModule("node:async_hooks");
	const tracingChannel = diagnosticsChannel?.tracingChannel?.(AI_SDK_TELEMETRY_TRACING_CHANNEL);
	if (tracingChannel == null || tracingChannel.hasSubscribers === false || asyncHooks == null) {
		Promise.resolve(completion).catch(() => {});
		return;
	}
	const context = message;
	let asyncResource;
	let asyncEndPublished = false;
	const safePublish = (publish) => {
		try {
			publish();
		} catch {}
	};
	const publishAsyncEnd = ({ result, error }) => {
		if (asyncEndPublished) return;
		asyncEndPublished = true;
		if (error !== void 0) {
			context.error = error;
			safePublish(() => tracingChannel.error.publish(context));
		}
		if (result !== void 0) context.result = result;
		safePublish(() => tracingChannel.asyncEnd.publish(context));
	};
	safePublish(() => {
		tracingChannel.start.runStores(context, () => {
			asyncResource = new asyncHooks.AsyncResource("ai.telemetry");
		});
	});
	safePublish(() => tracingChannel.end.publish(context));
	Promise.resolve(completion).then((result) => publishAsyncEnd({ result }), (error) => publishAsyncEnd({ error }));
	return { run: (execute) => asyncResource == null ? execute() : asyncResource.runInAsyncScope(execute) };
}
function registerTelemetry(...integrations) {
	if (!globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) globalThis.AI_SDK_TELEMETRY_INTEGRATIONS = [];
	globalThis.AI_SDK_TELEMETRY_INTEGRATIONS.push(...integrations);
}
function getGlobalTelemetryIntegrations() {
	return globalThis.AI_SDK_TELEMETRY_INTEGRATIONS ?? [];
}
function augmentEvent(event, telemetry, filterContext = false) {
	const augmentedEvent = Object.assign(Object.create(Object.getPrototypeOf(event)), event, {
		recordInputs: telemetry.recordInputs,
		recordOutputs: telemetry.recordOutputs,
		functionId: telemetry.functionId
	});
	if (filterContext && event != null && typeof event === "object" && "runtimeContext" in event) augmentedEvent.runtimeContext = filterIncludedContext({
		context: event.runtimeContext,
		includeContext: telemetry.includeRuntimeContext
	});
	if (filterContext && event != null && typeof event === "object") {
		if ("toolsContext" in event) augmentedEvent.toolsContext = filterToolsContext({
			toolsContext: event.toolsContext,
			includeToolsContext: telemetry.includeToolsContext
		});
		else if ("toolContext" in event && event.toolContext != null && "toolCall" in event && event.toolCall != null && typeof event.toolCall === "object" && "toolName" in event.toolCall) augmentedEvent.toolContext = filterToolContext({
			toolName: event.toolCall.toolName,
			toolContext: event.toolContext,
			includeToolsContext: telemetry.includeToolsContext
		});
	}
	return augmentedEvent;
}
function createTelemetryDispatcher({ telemetry }) {
	if (telemetry?.isEnabled === false) return {};
	const localIntegrations = telemetry?.integrations;
	const integrations = localIntegrations != null ? asArray(localIntegrations) : getGlobalTelemetryIntegrations();
	const telemetryMetadata = {
		recordInputs: telemetry?.recordInputs,
		recordOutputs: telemetry?.recordOutputs,
		functionId: telemetry?.functionId,
		includeRuntimeContext: telemetry?.includeRuntimeContext,
		includeToolsContext: telemetry?.includeToolsContext
	};
	const mergeTelemetryCallback = (key) => {
		const mergedIntegrationCallback = mergeCallbacks(...integrations.map((integration) => integration[key]?.bind(integration)).filter(Boolean).map((callback) => ((event) => callback(augmentEvent(event, telemetryMetadata)))));
		return async (event) => {
			await mergedIntegrationCallback(event);
		};
	};
	const executeLanguageModelCallWrappers = integrations.map((integration) => integration.executeLanguageModelCall?.bind(integration)).filter(Boolean);
	const executeToolWrappers = integrations.map((integration) => integration.executeTool?.bind(integration)).filter(Boolean);
	return {
		runInTracingChannelSpan: async ({ type, event, execute }) => await runWithTracingChannelSpan({
			type,
			event: augmentEvent(event, telemetryMetadata, true)
		}, execute),
		startTracingChannelContext: ({ type, event, completion }) => openTelemetryChannelSpanContext({
			message: {
				type,
				event: augmentEvent(event, telemetryMetadata, true)
			},
			completion
		}),
		onStart: mergeTelemetryCallback("onStart"),
		onStepStart: mergeTelemetryCallback("onStepStart"),
		onLanguageModelCallStart: mergeTelemetryCallback("onLanguageModelCallStart"),
		onLanguageModelCallEnd: mergeTelemetryCallback("onLanguageModelCallEnd"),
		onToolExecutionStart: mergeTelemetryCallback("onToolExecutionStart"),
		onToolExecutionEnd: mergeTelemetryCallback("onToolExecutionEnd"),
		onStepEnd: mergeCallbacks(mergeTelemetryCallback("onStepEnd"), mergeTelemetryCallback("onStepFinish")),
		onObjectStepStart: mergeTelemetryCallback("onObjectStepStart"),
		onObjectStepEnd: mergeTelemetryCallback("onObjectStepEnd"),
		onEmbedStart: mergeTelemetryCallback("onEmbedStart"),
		onEmbedEnd: mergeTelemetryCallback("onEmbedEnd"),
		onRerankStart: mergeTelemetryCallback("onRerankStart"),
		onRerankEnd: mergeTelemetryCallback("onRerankEnd"),
		experimental_onEvaluateStart: mergeTelemetryCallback("experimental_onEvaluateStart"),
		experimental_onEvaluationModelCallStart: mergeTelemetryCallback("experimental_onEvaluationModelCallStart"),
		experimental_onEvaluationModelCallEnd: mergeTelemetryCallback("experimental_onEvaluationModelCallEnd"),
		experimental_onEvaluateEnd: mergeTelemetryCallback("experimental_onEvaluateEnd"),
		onEnd: mergeTelemetryCallback("onEnd"),
		onAbort: mergeTelemetryCallback("onAbort"),
		onError: mergeTelemetryCallback("onError"),
		/**
		* Runs provider calls inside integration-specific context so
		* auto-instrumented provider requests can be associated with model work.
		*/
		executeLanguageModelCall: async ({ execute, ...event }) => {
			const augmentedEvent = augmentEvent(event, telemetryMetadata);
			let wrappedExecute = execute;
			for (const executeWrapper of executeLanguageModelCallWrappers) {
				const innerExecute = wrappedExecute;
				wrappedExecute = () => executeWrapper({
					...augmentedEvent,
					execute: innerExecute
				});
			}
			return await runWithTracingChannelSpan({
				type: "languageModelCall",
				event: augmentedEvent
			}, wrappedExecute);
		},
		/**
		* Composes all `executeTool` wrappers around the original tool execution.
		* Each wrapper receives an `execute` function that calls the next wrapper in
		* the chain, so integrations can establish nested telemetry context before
		* delegating to the underlying tool.
		*/
		executeTool: async ({ execute, ...event }) => {
			const augmentedEvent = augmentEvent(event, telemetryMetadata);
			let wrappedExecute = execute;
			for (const executeWrapper of executeToolWrappers) {
				const innerExecute = wrappedExecute;
				wrappedExecute = () => executeWrapper({
					...augmentedEvent,
					execute: innerExecute
				});
			}
			return await wrappedExecute();
		}
	};
}
function asReasoningText(reasoningParts) {
	const reasoningText = reasoningParts.map((part) => "text" in part ? part.text : "").join("");
	return reasoningText.length > 0 ? reasoningText : void 0;
}
var DefaultStepResult = class {
	constructor({ callId, stepNumber, provider, modelId, runtimeContext, toolsContext, content, finishReason, rawFinishReason, usage, performance, warnings, request, response, providerMetadata }) {
		this.callId = callId;
		this.stepNumber = stepNumber;
		this.model = {
			provider,
			modelId
		};
		this.runtimeContext = runtimeContext;
		this.toolsContext = toolsContext;
		this.content = content;
		this.finishReason = finishReason;
		this.rawFinishReason = rawFinishReason;
		this.usage = usage;
		this.performance = performance;
		this.warnings = warnings;
		this.request = request;
		this.response = response;
		this.providerMetadata = providerMetadata;
	}
	get text() {
		return this.content.filter((part) => part.type === "text").map((part) => part.text).join("");
	}
	get reasoning() {
		return convertFromReasoningOutputs(this.content.filter((part) => part.type === "reasoning" || part.type === "reasoning-file"));
	}
	get reasoningText() {
		return asReasoningText(this.reasoning);
	}
	get files() {
		return this.content.filter((part) => part.type === "file").map((part) => part.file);
	}
	get sources() {
		return this.content.filter((part) => part.type === "source");
	}
	get toolCalls() {
		return this.content.filter((part) => part.type === "tool-call");
	}
	get staticToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic !== true);
	}
	get dynamicToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic === true);
	}
	get toolResults() {
		return this.content.filter((part) => part.type === "tool-result");
	}
	get staticToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic !== true);
	}
	get dynamicToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic === true);
	}
};
function restrictStepResult({ step, includeRuntimeContext, includeToolsContext }) {
	return new DefaultStepResult({
		callId: step.callId,
		stepNumber: step.stepNumber,
		provider: step.model.provider,
		modelId: step.model.modelId,
		runtimeContext: filterIncludedContext({
			context: step.runtimeContext,
			includeContext: includeRuntimeContext
		}),
		toolsContext: filterToolsContext({
			toolsContext: step.toolsContext,
			includeToolsContext
		}),
		content: step.content,
		finishReason: step.finishReason,
		rawFinishReason: step.rawFinishReason,
		usage: step.usage,
		performance: step.performance,
		warnings: step.warnings,
		request: step.request,
		response: step.response,
		providerMetadata: step.providerMetadata
	});
}
function createRestrictedTelemetryDispatcher({ telemetry, includeRuntimeContext, includeToolsContext }) {
	const telemetryDispatcher = createTelemetryDispatcher({ telemetry });
	return {
		...telemetryDispatcher,
		onStart: (event) => telemetryDispatcher.onStart?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: includeRuntimeContext
			}),
			toolsContext: filterToolsContext({
				toolsContext: event.toolsContext,
				includeToolsContext
			})
		}),
		onStepStart: (event) => telemetryDispatcher.onStepStart?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: includeRuntimeContext
			}),
			steps: event.steps.map((step) => restrictStepResult({
				step,
				includeRuntimeContext,
				includeToolsContext
			})),
			toolsContext: filterToolsContext({
				toolsContext: event.toolsContext,
				includeToolsContext
			})
		}),
		onStepEnd: (event) => telemetryDispatcher.onStepEnd?.(restrictStepResult({
			step: event,
			includeRuntimeContext,
			includeToolsContext
		})),
		onStepFinish: (event) => telemetryDispatcher.onStepEnd?.(restrictStepResult({
			step: event,
			includeRuntimeContext,
			includeToolsContext
		})),
		onEnd: (event) => telemetryDispatcher.onEnd?.(((restrictedSteps) => {
			return {
				...event,
				runtimeContext: filterIncludedContext({
					context: event.runtimeContext,
					includeContext: includeRuntimeContext
				}),
				steps: restrictedSteps,
				finalStep: restrictedSteps.at(-1),
				toolsContext: filterToolsContext({
					toolsContext: event.toolsContext,
					includeToolsContext
				})
			};
		})(event.steps.map((step) => restrictStepResult({
			step,
			includeRuntimeContext,
			includeToolsContext
		})))),
		onAbort: (event) => telemetryDispatcher.onAbort?.({
			...event,
			steps: event.steps.map((step) => restrictStepResult({
				step,
				includeRuntimeContext,
				includeToolsContext
			}))
		}),
		onToolExecutionStart: (event) => telemetryDispatcher.onToolExecutionStart?.({
			...event,
			toolContext: filterToolContext({
				toolName: event.toolCall.toolName,
				toolContext: event.toolContext,
				includeToolsContext
			})
		}),
		onToolExecutionEnd: (event) => telemetryDispatcher.onToolExecutionEnd?.({
			...event,
			toolContext: filterToolContext({
				toolName: event.toolCall.toolName,
				toolContext: event.toolContext,
				includeToolsContext
			})
		})
	};
}
function isStepCount(stepCount) {
	return ({ steps }) => steps.length === stepCount;
}
function isLoopFinished() {
	return () => false;
}
function hasToolCall(...toolName) {
	return ({ steps }) => steps[steps.length - 1]?.toolCalls?.some((toolCall) => toolName.includes(toolCall.toolName)) ?? false;
}
async function isStopConditionMet({ stopConditions, steps }) {
	return (await Promise.all(stopConditions.map((condition) => condition({ steps })))).some((result) => result);
}
function sumTokenCounts(tokenCount1, tokenCount2) {
	return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 ?? 0) + (tokenCount2 ?? 0);
}
function isDeepEqualData(obj1, obj2) {
	if (obj1 === obj2) return true;
	if (obj1 == null || obj2 == null) return false;
	if (typeof obj1 !== "object" && typeof obj2 !== "object") return obj1 === obj2;
	if (obj1.constructor !== obj2.constructor) return false;
	if (obj1 instanceof Date && obj2 instanceof Date) return obj1.getTime() === obj2.getTime();
	if (Array.isArray(obj1)) {
		if (obj1.length !== obj2.length) return false;
		for (let i = 0; i < obj1.length; i++) if (!isDeepEqualData(obj1[i], obj2[i])) return false;
		return true;
	}
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) return false;
	for (const key of keys1) {
		if (!keys2.includes(key)) return false;
		if (!isDeepEqualData(obj1[key], obj2[key])) return false;
	}
	return true;
}
async function toResponseMessages({ content: inputContent, tools }) {
	const responseMessages = [];
	const toolCallOrder = /* @__PURE__ */ new Map();
	const content = [];
	for (const part of inputContent) {
		if (part.type === "source") continue;
		if ((part.type === "tool-result" || part.type === "tool-error") && !part.providerExecuted) continue;
		if (part.type === "text" && part.text.length === 0) continue;
		switch (part.type) {
			case "text":
				content.push({
					type: "text",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "custom":
				content.push({
					type: "custom",
					kind: part.kind,
					providerOptions: part.providerMetadata
				});
				break;
			case "reasoning":
				content.push({
					type: "reasoning",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "file":
				content.push({
					type: "file",
					data: part.file.base64,
					mediaType: part.file.mediaType,
					providerOptions: part.providerMetadata
				});
				break;
			case "reasoning-file":
				content.push({
					type: "reasoning-file",
					data: part.file.base64,
					mediaType: part.file.mediaType,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-call":
				if (!toolCallOrder.has(part.toolCallId)) toolCallOrder.set(part.toolCallId, toolCallOrder.size);
				content.push({
					type: "tool-call",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: part.invalid && typeof part.input !== "object" ? {} : part.input,
					providerExecuted: part.providerExecuted,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-result": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: getOwn(tools, part.toolName),
					output: part.output,
					errorMode: "none"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-error": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: getOwn(tools, part.toolName),
					output: part.error,
					errorMode: "json"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-approval-request":
				const inputSchemaInput = getToolCallInputSchemaInput(part.toolCall);
				content.push({
					type: "tool-approval-request",
					approvalId: part.approvalId,
					toolCallId: part.toolCall.toolCallId,
					...part.reason != null ? { reason: part.reason } : {},
					isAutomatic: part.isAutomatic,
					...part.signature != null ? { signature: part.signature } : {},
					...inputSchemaInput != null && !isDeepEqualData(inputSchemaInput.value, part.toolCall.input) ? { inputSchemaInput: inputSchemaInput.value } : {}
				});
		}
	}
	if (content.length > 0) responseMessages.push({
		role: "assistant",
		content
	});
	const toolResultContent = [];
	for (const part of inputContent) {
		if (part.type !== "tool-approval-response" && part.type !== "tool-result" && part.type !== "tool-error") continue;
		if (part.type === "tool-approval-response") {
			toolResultContent.push({
				type: "tool-approval-response",
				approvalId: part.approvalId,
				approved: part.approved,
				reason: part.reason,
				providerExecuted: part.providerExecuted
			});
			if (part.approved === false) toolResultContent.push({
				type: "tool-result",
				toolCallId: part.toolCall.toolCallId,
				toolName: part.toolCall.toolName,
				output: {
					type: "execution-denied",
					reason: part.reason
				}
			});
			continue;
		}
		if (part.providerExecuted) continue;
		const output = await createToolModelOutput({
			toolCallId: part.toolCallId,
			input: part.input,
			tool: getOwn(tools, part.toolName),
			output: part.type === "tool-result" ? part.output : part.error,
			errorMode: part.type === "tool-error" ? "text" : "none"
		});
		toolResultContent.push({
			type: "tool-result",
			toolCallId: part.toolCallId,
			toolName: part.toolName,
			output,
			...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
		});
	}
	if (toolResultContent.length > 0) responseMessages.push({
		role: "tool",
		content: sortToolResultContentByToolCallOrder({
			toolResultContent,
			toolCallOrder
		})
	});
	return responseMessages;
}
function sortToolResultContentByToolCallOrder({ toolResultContent, toolCallOrder }) {
	const sortedToolResults = toolResultContent.filter((part) => part.type === "tool-result").map((part, index) => ({
		part,
		index
	})).sort((a, b) => {
		const aOrder = toolCallOrder.get(a.part.toolCallId);
		const bOrder = toolCallOrder.get(b.part.toolCallId);
		if (aOrder == null && bOrder == null) return a.index - b.index;
		if (aOrder == null) return 1;
		if (bOrder == null) return -1;
		return aOrder - bOrder || a.index - b.index;
	}).map(({ part }) => part);
	let toolResultIndex = 0;
	return toolResultContent.map((part) => part.type === "tool-result" ? sortedToolResults[toolResultIndex++] : part);
}
var encoder = new TextEncoder();
function canonicalJSON(value) {
	if (value === null || value === void 0) return JSON.stringify(value);
	if (typeof value !== "object") return JSON.stringify(value);
	if (Array.isArray(value)) return `[${value.map((element) => element === void 0 ? "null" : canonicalJSON(element)).join(",")}]`;
	return `{${Object.keys(value).sort().map((k) => `${JSON.stringify(k)}:${canonicalJSON(value[k])}`).join(",")}}`;
}
function toBase64url(bytes) {
	return convertUint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
async function hashCanonical(value) {
	const digest = await crypto.subtle.digest("SHA-256", encoder.encode(canonicalJSON(value)));
	return toBase64url(new Uint8Array(digest));
}
var encoder2 = new TextEncoder();
function fromBase64url(str) {
	return convertBase64ToUint8Array(str);
}
async function importKey(secret) {
	const keyData = typeof secret === "string" ? encoder2.encode(secret) : secret;
	return crypto.subtle.importKey("raw", keyData, {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign", "verify"]);
}
function buildPayload(approvalId, toolCallId, toolName, inputDigest) {
	return encoder2.encode(JSON.stringify([
		"ai-sdk-tool-approval-v1",
		approvalId,
		toolCallId,
		toolName,
		inputDigest
	]));
}
function buildLegacyPayload(approvalId, toolCallId, toolName, inputDigest) {
	return encoder2.encode(`${approvalId}
${toolCallId}
${toolName}
${inputDigest}`);
}
async function signToolApproval({ secret, approvalId, toolCallId, toolName, input }) {
	const key = await importKey(secret);
	const payload = buildPayload(approvalId, toolCallId, toolName, await hashCanonical(input));
	const sig = await crypto.subtle.sign("HMAC", key, payload);
	return toBase64url(new Uint8Array(sig));
}
async function verifyToolApprovalSignature({ secret, signature, approvalId, toolCallId, toolName, input }) {
	const key = await importKey(secret);
	const inputDigest = await hashCanonical(input);
	const sigBytes = fromBase64url(signature);
	const payload = buildPayload(approvalId, toolCallId, toolName, inputDigest);
	if (await crypto.subtle.verify("HMAC", key, sigBytes, payload)) return true;
	if (!approvalId.includes("\n") && !toolCallId.includes("\n") && !toolName.includes("\n")) {
		const legacyPayload = buildLegacyPayload(approvalId, toolCallId, toolName, inputDigest);
		return crypto.subtle.verify("HMAC", key, sigBytes, legacyPayload);
	}
	return false;
}
async function maybeSignApproval({ secret, approvalId, toolCallId, toolName, input }) {
	if (secret == null) return void 0;
	return signToolApproval({
		secret,
		approvalId,
		toolCallId,
		toolName,
		input
	});
}
async function validateApprovedToolApprovals({ approvedToolApprovals, tools, toolApproval, messages, toolsContext, runtimeContext, toolApprovalSecret, refineToolInput }) {
	const approved = [];
	const denied = [];
	const invalid = [];
	for (const approval of approvedToolApprovals) {
		const { approvalRequest, toolCall } = approval;
		const tool3 = getOwn(tools, toolCall.toolName);
		if (toolApprovalSecret != null) {
			if (approvalRequest.signature == null) throw new InvalidToolApprovalSignatureError({
				approvalId: approvalRequest.approvalId,
				toolCallId: toolCall.toolCallId,
				reason: "missing signature"
			});
			if (!await verifyToolApprovalSignature({
				secret: toolApprovalSecret,
				signature: approvalRequest.signature,
				approvalId: approvalRequest.approvalId,
				toolCallId: toolCall.toolCallId,
				toolName: toolCall.toolName,
				input: toolCall.input
			})) throw new InvalidToolApprovalSignatureError({
				approvalId: approvalRequest.approvalId,
				toolCallId: toolCall.toolCallId,
				reason: "invalid signature"
			});
		}
		if (isExecutableTool(tool3) && tool3.inputSchema != null) {
			const validation = await safeValidateTypes({
				value: Object.prototype.hasOwnProperty.call(approvalRequest, "inputSchemaInput") ? approvalRequest.inputSchemaInput : toolCall.input,
				schema: asSchema(tool3.inputSchema)
			});
			let validationError;
			if (!validation.success) validationError = validation.error;
			else try {
				if (!isDeepEqualData((await refineParsedToolCallInput({
					toolCall: {
						...toolCall,
						input: validation.value
					},
					refineToolInput
				})).input, toolCall.input)) validationError = /* @__PURE__ */ new Error("Approved tool input does not match the validated schema output.");
			} catch (error) {
				validationError = error;
			}
			if (validationError != null) {
				invalid.push({
					...approval,
					error: new InvalidToolInputError({
						toolName: toolCall.toolName,
						toolInput: JSON.stringify(toolCall.input),
						cause: validationError
					})
				});
				continue;
			}
		}
		const approvalStatus = await resolveToolApproval({
			tools,
			toolApproval,
			toolCall,
			messages,
			toolsContext,
			runtimeContext
		});
		if (approvalStatus.type === "denied") denied.push({
			...approval,
			approvalResponse: {
				...approval.approvalResponse,
				approved: false,
				reason: approvalStatus.reason ?? approval.approvalResponse.reason
			}
		});
		else approved.push(approval);
	}
	return {
		approvedToolApprovals: approved,
		deniedToolApprovals: denied,
		invalidToolApprovals: invalid
	};
}
var originalGenerateId = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
var originalGenerateCallId = createIdGenerator({
	prefix: "call",
	size: 24
});
async function generateText({ model: modelArg, tools, toolChoice, instructions, system, prompt, messages, allowSystemInMessages, maxRetries: maxRetriesArg, abortSignal, timeout, headers, stopWhen = isStepCount(1), experimental_sandbox: sandbox, output, toolApproval, experimental_toolCallers, experimental_toolApprovalSecret, experimental_telemetry, telemetry = experimental_telemetry, providerOptions, activeTools, toolOrder, prepareStep, experimental_repairToolCall, repairToolCall = experimental_repairToolCall, experimental_refineToolInput: refineToolInput, experimental_download: download2, runtimeContext = {}, toolsContext = {}, experimental_include, include = experimental_include, _internal: { generateId: generateId5 = originalGenerateId, generateCallId = originalGenerateCallId, now: now2 = now } = {}, onStart, experimental_onStart, onStepStart, experimental_onStepStart, onLanguageModelCallStart, experimental_onLanguageModelCallStart, onLanguageModelCallEnd, experimental_onLanguageModelCallEnd, onToolExecutionStart, onToolExecutionEnd, experimental_onToolCallStart, experimental_onToolCallFinish, onStepEnd, onStepFinish, onFinish, onEnd = onFinish, ...settings }) {
	include = {
		requestBody: include?.requestBody ?? false,
		requestMessages: include?.requestMessages ?? false,
		responseBody: include?.responseBody ?? false
	};
	const model = resolveLanguageModel(modelArg);
	const resolvedToolCallers = resolveToolCallerConfiguration({
		tools,
		toolCallers: experimental_toolCallers
	});
	const prepareToolSearch = createToolSearchState({
		tools,
		toolCallers: resolvedToolCallers
	});
	const stopConditions = asArray(stopWhen);
	const resolvedOnStart = onStart ?? experimental_onStart;
	const resolvedOnStepStart = onStepStart ?? experimental_onStepStart;
	const resolvedOnLanguageModelCallStart = onLanguageModelCallStart ?? experimental_onLanguageModelCallStart;
	const resolvedOnLanguageModelCallEnd = onLanguageModelCallEnd ?? experimental_onLanguageModelCallEnd;
	const resolvedOnToolExecutionStart = onToolExecutionStart ?? experimental_onToolCallStart;
	const resolvedOnToolExecutionEnd = onToolExecutionEnd ?? experimental_onToolCallFinish;
	const resolvedOnStepEnd = onStepEnd ?? onStepFinish;
	const unsupportedTimeoutWarnings = [];
	if (getFirstChunkTimeoutMs(timeout) != null) unsupportedTimeoutWarnings.push({
		type: "unsupported",
		feature: "timeout.firstChunkMs",
		details: "The firstChunkMs timeout is only supported by streaming functions."
	});
	if (getChunkTimeoutMs(timeout) != null) unsupportedTimeoutWarnings.push({
		type: "unsupported",
		feature: "timeout.chunkMs",
		details: "The chunkMs timeout is only supported by streaming functions."
	});
	if (unsupportedTimeoutWarnings.length > 0) logWarnings({
		warnings: unsupportedTimeoutWarnings,
		provider: model.provider,
		model: model.modelId
	});
	const totalTimeoutMs = getTotalTimeoutMs(timeout);
	const stepTimeoutMs = getStepTimeoutMs(timeout);
	const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
	const mergedAbortSignal = mergeAbortSignals(abortSignal, totalTimeoutMs, stepAbortController?.signal);
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal: mergedAbortSignal
	});
	const callSettings = prepareLanguageModelCallOptions(settings);
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const initialPrompt = await standardizePrompt({
		instructions,
		system,
		prompt,
		messages,
		allowSystemInMessages
	});
	const callId = generateCallId();
	const telemetryDispatcher = createRestrictedTelemetryDispatcher({
		telemetry,
		includeRuntimeContext: telemetry?.includeRuntimeContext,
		includeToolsContext: telemetry?.includeToolsContext
	});
	const runInTracingChannelSpan = telemetryDispatcher.runInTracingChannelSpan ?? (async ({ execute }) => await execute());
	const generateTextStartEvent = {
		callId,
		operationId: "ai.generateText",
		provider: model.provider,
		modelId: model.modelId,
		instructions: initialPrompt.instructions,
		messages: initialPrompt.messages,
		tools,
		toolChoice,
		activeTools,
		toolOrder,
		maxOutputTokens: callSettings.maxOutputTokens,
		temperature: callSettings.temperature,
		topP: callSettings.topP,
		topK: callSettings.topK,
		presencePenalty: callSettings.presencePenalty,
		frequencyPenalty: callSettings.frequencyPenalty,
		stopSequences: callSettings.stopSequences,
		seed: callSettings.seed,
		reasoning: callSettings.reasoning,
		maxRetries,
		timeout,
		headers: headersWithUserAgent,
		providerOptions,
		output,
		runtimeContext,
		toolsContext
	};
	const executeGenerateText = async () => {
		await notify({
			event: generateTextStartEvent,
			callbacks: [resolvedOnStart, telemetryDispatcher.onStart]
		});
		try {
			const initialMessages = initialPrompt.messages;
			const initialResponseMessages = [];
			const { approvedToolApprovals, deniedToolApprovals: collectedDeniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
			const { approvedToolApprovals: localApprovedToolApprovals, deniedToolApprovals: revalidationDeniedToolApprovals, invalidToolApprovals } = await validateApprovedToolApprovals({
				approvedToolApprovals: approvedToolApprovals.filter((toolApproval2) => !toolApproval2.toolCall.providerExecuted),
				tools,
				toolApproval,
				messages: initialMessages,
				toolsContext,
				runtimeContext,
				toolApprovalSecret: experimental_toolApprovalSecret,
				refineToolInput
			});
			const deniedToolApprovalsWithoutResults = [...collectedDeniedToolApprovals, ...revalidationDeniedToolApprovals].filter((toolApproval2) => toolApproval2.existingToolResult == null);
			if (deniedToolApprovalsWithoutResults.length > 0 || localApprovedToolApprovals.length > 0 || invalidToolApprovals.length > 0) {
				const toolResults2 = await executeTools({
					toolCalls: localApprovedToolApprovals.map((toolApproval2) => toolApproval2.toolCall),
					tools,
					callId,
					messages: initialMessages,
					abortSignal: mergedAbortSignal,
					timeout,
					experimental_sandbox: sandbox,
					toolsContext,
					onToolExecutionStart: (event) => notify({
						event,
						callbacks: [resolvedOnToolExecutionStart, telemetryDispatcher.onToolExecutionStart]
					}),
					onToolExecutionEnd: (event) => notify({
						event,
						callbacks: [resolvedOnToolExecutionEnd, telemetryDispatcher.onToolExecutionEnd]
					}),
					executeToolInTelemetryContext: telemetryDispatcher.executeTool,
					runInTracingChannelSpan
				});
				const toolContent = [];
				for (const result of toolResults2) {
					const output2 = result.output;
					const modelOutput = await createToolModelOutput({
						toolCallId: output2.toolCallId,
						input: output2.input,
						tool: getOwn(tools, output2.toolName),
						output: output2.type === "tool-result" ? output2.output : output2.error,
						errorMode: output2.type === "tool-error" ? "text" : "none"
					});
					toolContent.push({
						type: "tool-result",
						toolCallId: output2.toolCallId,
						toolName: output2.toolName,
						output: modelOutput
					});
				}
				for (const toolApproval2 of invalidToolApprovals) toolContent.push({
					type: "tool-result",
					toolCallId: toolApproval2.toolCall.toolCallId,
					toolName: toolApproval2.toolCall.toolName,
					output: await createToolModelOutput({
						toolCallId: toolApproval2.toolCall.toolCallId,
						input: toolApproval2.toolCall.input,
						tool: getOwn(tools, toolApproval2.toolCall.toolName),
						output: toolApproval2.error,
						errorMode: "text"
					})
				});
				for (const toolApproval2 of deniedToolApprovalsWithoutResults) toolContent.push({
					type: "tool-result",
					toolCallId: toolApproval2.toolCall.toolCallId,
					toolName: toolApproval2.toolCall.toolName,
					output: {
						type: "execution-denied",
						reason: toolApproval2.approvalResponse.reason,
						...toolApproval2.toolCall.providerExecuted && { providerOptions: { openai: { approvalId: toolApproval2.approvalResponse.approvalId } } }
					}
				});
				initialResponseMessages.push({
					role: "tool",
					content: toolContent
				});
			}
			const callSettings2 = prepareLanguageModelCallOptions(settings);
			let currentModelResponse;
			let clientToolCalls = [];
			let clientToolOutputs = [];
			let toolApprovalResponses = [];
			let deniedToolApprovalResponses = [];
			const steps = [];
			let instructionsForNextStep = initialPrompt.instructions;
			let messagesForNextStep = [...initialMessages, ...initialResponseMessages];
			const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
			do {
				if (steps.length > 0) mergedAbortSignal?.throwIfAborted();
				const stepTimeoutId = setAbortTimeout({
					abortController: stepAbortController,
					label: "Step",
					timeoutMs: stepTimeoutMs
				});
				const stepNumber = steps.length;
				try {
					await runInTracingChannelSpan({
						type: "step",
						event: {
							callId,
							stepNumber
						},
						execute: async () => {
							const accumulatedResponseMessages = [...initialResponseMessages, ...steps.flatMap((step) => step.response.messages)];
							const stepInputMessages = messagesForNextStep;
							const prepareStepResult = await prepareStep?.({
								model,
								steps,
								stepNumber: steps.length,
								instructions: instructionsForNextStep,
								initialInstructions: initialPrompt.instructions,
								messages: stepInputMessages,
								initialMessages,
								responseMessages: accumulatedResponseMessages,
								runtimeContext,
								toolsContext,
								experimental_sandbox: sandbox
							});
							const stepSandbox = prepareStepResult?.experimental_sandbox ?? sandbox;
							const stepModel = resolveLanguageModel(prepareStepResult?.model ?? model);
							const stepInstructions = prepareStepResult?.instructions ?? prepareStepResult?.system ?? instructionsForNextStep;
							runtimeContext = prepareStepResult?.runtimeContext ?? runtimeContext;
							toolsContext = prepareStepResult?.toolsContext ?? toolsContext;
							const stepActiveTools = filterActiveTools({
								tools,
								activeTools: prepareStepResult?.activeTools ?? activeTools
							});
							const { executionTools: stepExecutionTools, modelTools: stepModelTools, toolCallerMessages } = prepareToolsForToolCallers({
								tools: prepareToolSearch(stepActiveTools, {
									toolsContext,
									experimental_sandbox: stepSandbox
								}),
								toolCallers: resolvedToolCallers
							});
							const stepToolOrder = prepareStepResult?.toolOrder ?? toolOrder;
							const stepTools = await prepareTools({
								tools: stepModelTools,
								toolOrder: stepToolOrder,
								toolsContext,
								experimental_sandbox: stepSandbox
							});
							const stepToolChoice = prepareToolChoice({ toolChoice: prepareStepResult?.toolChoice ?? toolChoice });
							const stepMessages = appendToolCallerMessages({
								messages: prepareStepResult?.messages ?? stepInputMessages,
								toolCallerMessages
							});
							const promptMessages = await convertToLanguageModelPrompt({
								prompt: {
									instructions: stepInstructions,
									messages: stepMessages
								},
								supportedUrls: await stepModel.supportedUrls,
								download: download2,
								abortSignal: mergedAbortSignal,
								provider: stepModel.provider.split(".")[0]
							});
							const stepProviderOptions = mergeObjects(providerOptions, prepareStepResult?.providerOptions);
							const stepCallSettings = prepareStepCallSettings({
								callSettings: callSettings2,
								stepSettings: prepareStepResult
							});
							await notify({
								event: {
									callId,
									provider: stepModel.provider,
									modelId: stepModel.modelId,
									stepNumber,
									instructions: stepInstructions,
									messages: stepMessages,
									tools,
									toolChoice: prepareStepResult?.toolChoice ?? toolChoice,
									activeTools: prepareStepResult?.activeTools ?? activeTools,
									toolOrder: stepToolOrder,
									steps: [...steps],
									providerOptions: stepProviderOptions,
									output,
									runtimeContext,
									promptMessages,
									stepTools,
									stepToolChoice,
									toolsContext
								},
								callbacks: [resolvedOnStepStart, telemetryDispatcher.onStepStart]
							});
							const languageModelCallContext = {
								provider: stepModel.provider,
								modelId: stepModel.modelId,
								instructions: stepInstructions,
								messages: stepMessages,
								tools: stepTools,
								...stepCallSettings
							};
							const languageModelCallStartEvent = {
								callId,
								...languageModelCallContext
							};
							const stepStartTimestampMs = now2();
							await notify({
								event: languageModelCallStartEvent,
								callbacks: [resolvedOnLanguageModelCallStart, telemetryDispatcher.onLanguageModelCallStart]
							});
							const executeLanguageModelCallInTelemetryContext = telemetryDispatcher.executeLanguageModelCall ?? (async ({ execute }) => await execute());
							currentModelResponse = await retry(async () => {
								const result = await executeLanguageModelCallInTelemetryContext({
									...languageModelCallStartEvent,
									execute: async () => await stepModel.doGenerate({
										...stepCallSettings,
										tools: stepTools,
										toolChoice: stepToolChoice,
										responseFormat: await output?.responseFormat,
										prompt: promptMessages,
										providerOptions: stepProviderOptions,
										abortSignal: mergedAbortSignal,
										headers: headersWithUserAgent
									})
								});
								const responseData = {
									id: result.response?.id ?? generateId5(),
									timestamp: result.response?.timestamp ?? /* @__PURE__ */ new Date(),
									modelId: result.response?.modelId ?? stepModel.modelId,
									headers: result.response?.headers,
									body: result.response?.body
								};
								return {
									...result,
									response: responseData
								};
							});
							const responseTimeMs = now2() - stepStartTimestampMs;
							const stepUsage = asLanguageModelUsage(currentModelResponse.usage);
							const stepToolCalls = await Promise.all(currentModelResponse.content.filter((part) => part.type === "tool-call").map((toolCall) => parseToolCall({
								toolCall,
								tools: stepModelTools,
								repairToolCall,
								refineToolInput,
								instructions: stepInstructions,
								messages: stepMessages,
								abortSignal: mergedAbortSignal
							})));
							const toolApprovalRequests = {};
							const stepToolApprovalResponses = {};
							const blockedToolCallIds = /* @__PURE__ */ new Set();
							const generatedFileDataCache = /* @__PURE__ */ new WeakMap();
							const modelCallContent = await convertLanguageModelContent({
								content: currentModelResponse.content,
								toolCalls: stepToolCalls,
								toolOutputs: [],
								toolApprovalRequests: [],
								toolApprovalResponses: [],
								tools,
								abortSignal: mergedAbortSignal,
								generatedFileDataCache
							});
							await notify({
								event: {
									callId,
									provider: stepModel.provider,
									modelId: currentModelResponse.response.modelId,
									finishReason: currentModelResponse.finishReason.unified,
									usage: stepUsage,
									content: modelCallContent,
									responseId: currentModelResponse.response.id,
									...currentModelResponse.providerMetadata != null ? { providerMetadata: currentModelResponse.providerMetadata } : {},
									performance: {
										responseTimeMs,
										effectiveOutputTokensPerSecond: calculateTokensPerSecond({
											tokens: stepUsage.outputTokens,
											durationMs: responseTimeMs
										}),
										outputTokensPerSecond: void 0,
										inputTokensPerSecond: void 0,
										effectiveTotalTokensPerSecond: calculateTokensPerSecond({
											tokens: sumTokenCounts(stepUsage.inputTokens, stepUsage.outputTokens),
											durationMs: responseTimeMs
										}),
										timeToFirstOutputMs: void 0
									}
								},
								callbacks: [resolvedOnLanguageModelCallEnd, telemetryDispatcher.onLanguageModelCallEnd]
							});
							const enforcedToolChoice = stepToolChoice.type === "required" || stepToolChoice.type === "tool" ? stepToolChoice : void 0;
							if (enforcedToolChoice != null && !stepToolCalls.some((toolCall) => enforcedToolChoice.type === "required" || toolCall.toolName === enforcedToolChoice.toolName)) throw new ToolChoiceViolationError({
								toolChoice: enforcedToolChoice,
								finishReason: currentModelResponse.finishReason.unified,
								provider: stepModel.provider,
								modelId: stepModel.modelId,
								content: currentModelResponse.content
							});
							for (const toolCall of stepToolCalls) {
								if (toolCall.invalid) continue;
								const tool3 = getOwn(stepExecutionTools, toolCall.toolName);
								if (tool3 == null) continue;
								if (tool3.onInputStart != null || tool3.onInputAvailable != null) {
									const context = await validateToolContext({
										toolName: toolCall.toolName,
										context: getOwn(toolsContext, toolCall.toolName),
										contextSchema: tool3.contextSchema
									});
									if (tool3.onInputStart != null) await tool3.onInputStart({
										toolCallId: toolCall.toolCallId,
										messages: stepMessages,
										abortSignal: mergedAbortSignal,
										context
									});
									if (tool3.onInputAvailable != null) await tool3.onInputAvailable({
										input: toolCall.input,
										toolCallId: toolCall.toolCallId,
										messages: stepMessages,
										abortSignal: mergedAbortSignal,
										context
									});
								}
								const toolApprovalStatus = await resolveToolApproval({
									tools: stepExecutionTools,
									toolApproval,
									toolCall,
									messages: stepMessages,
									toolsContext,
									runtimeContext
								});
								if (toolApprovalStatus.type === "not-applicable") continue;
								const approvalId = generateId5();
								const signature = await maybeSignApproval({
									secret: experimental_toolApprovalSecret,
									approvalId,
									toolCallId: toolCall.toolCallId,
									toolName: toolCall.toolName,
									input: toolCall.input
								});
								switch (toolApprovalStatus.type) {
									case "user-approval":
										toolApprovalRequests[toolCall.toolCallId] = {
											type: "tool-approval-request",
											approvalId,
											toolCall,
											...toolApprovalStatus.reason != null ? { reason: toolApprovalStatus.reason } : {},
											...signature != null ? { signature } : {}
										};
										blockedToolCallIds.add(toolCall.toolCallId);
										break;
									case "approved":
										toolApprovalRequests[toolCall.toolCallId] = {
											type: "tool-approval-request",
											approvalId,
											toolCall,
											isAutomatic: true,
											...signature != null ? { signature } : {}
										};
										stepToolApprovalResponses[toolCall.toolCallId] = {
											type: "tool-approval-response",
											approvalId,
											toolCall,
											approved: true,
											reason: toolApprovalStatus.reason,
											providerExecuted: toolCall.providerExecuted
										};
										break;
									case "denied":
										toolApprovalRequests[toolCall.toolCallId] = {
											type: "tool-approval-request",
											approvalId,
											toolCall,
											isAutomatic: true,
											...signature != null ? { signature } : {}
										};
										stepToolApprovalResponses[toolCall.toolCallId] = {
											type: "tool-approval-response",
											approvalId,
											toolCall,
											approved: false,
											reason: toolApprovalStatus.reason,
											providerExecuted: toolCall.providerExecuted
										};
										blockedToolCallIds.add(toolCall.toolCallId);
								}
							}
							const invalidToolCalls = stepToolCalls.filter((toolCall) => toolCall.invalid && toolCall.dynamic && !toolCall.providerExecuted);
							clientToolOutputs = [];
							for (const toolCall of invalidToolCalls) clientToolOutputs.push({
								type: "tool-error",
								toolCallId: toolCall.toolCallId,
								toolName: toolCall.toolName,
								input: toolCall.input,
								error: getErrorMessage(toolCall.error),
								dynamic: true
							});
							clientToolCalls = stepToolCalls.filter((toolCall) => !toolCall.providerExecuted);
							toolApprovalResponses = Object.values(stepToolApprovalResponses);
							deniedToolApprovalResponses = toolApprovalResponses.filter((toolApprovalResponse) => toolApprovalResponse.approved === false);
							const toolExecutionMs = {};
							if (stepExecutionTools != null && isToolExecutionAllowedFinishReason(currentModelResponse.finishReason.unified)) {
								const toolExecutionResults = await executeTools({
									toolCalls: clientToolCalls.filter((toolCall) => !toolCall.invalid && !blockedToolCallIds.has(toolCall.toolCallId)),
									tools: stepExecutionTools,
									callId,
									messages: stepMessages,
									abortSignal: mergedAbortSignal,
									timeout,
									experimental_sandbox: stepSandbox,
									toolsContext,
									onToolExecutionStart: (event) => notify({
										event,
										callbacks: [resolvedOnToolExecutionStart, telemetryDispatcher.onToolExecutionStart]
									}),
									onToolExecutionEnd: (event) => notify({
										event,
										callbacks: [resolvedOnToolExecutionEnd, telemetryDispatcher.onToolExecutionEnd]
									}),
									executeToolInTelemetryContext: telemetryDispatcher.executeTool,
									runInTracingChannelSpan
								});
								for (const result of toolExecutionResults) {
									toolExecutionMs[result.output.toolCallId] = result.toolExecutionMs;
									clientToolOutputs.push(result.output);
								}
							}
							const stepTimeMs = now2() - stepStartTimestampMs;
							const stepPerformance = {
								effectiveOutputTokensPerSecond: calculateTokensPerSecond({
									tokens: stepUsage.outputTokens,
									durationMs: responseTimeMs
								}),
								outputTokensPerSecond: void 0,
								inputTokensPerSecond: void 0,
								effectiveTotalTokensPerSecond: calculateTokensPerSecond({
									tokens: sumTokenCounts(stepUsage.inputTokens, stepUsage.outputTokens),
									durationMs: responseTimeMs
								}),
								stepTimeMs,
								responseTimeMs,
								toolExecutionMs,
								timeToFirstOutputMs: void 0
							};
							for (const toolCall of stepToolCalls) {
								if (!toolCall.providerExecuted) continue;
								const tool3 = getOwn(stepExecutionTools, toolCall.toolName);
								if (tool3?.type === "provider" && tool3.supportsDeferredResults) {
									if (!currentModelResponse.content.some((part) => part.type === "tool-result" && part.toolCallId === toolCall.toolCallId)) pendingDeferredToolCalls.set(toolCall.toolCallId, { toolName: toolCall.toolName });
								}
							}
							for (const part of currentModelResponse.content) if (part.type === "tool-result") pendingDeferredToolCalls.delete(part.toolCallId);
							const stepContent = await convertLanguageModelContent({
								content: currentModelResponse.content,
								toolCalls: stepToolCalls,
								toolOutputs: clientToolOutputs,
								toolApprovalRequests: Object.values(toolApprovalRequests),
								toolApprovalResponses,
								tools,
								abortSignal: mergedAbortSignal,
								generatedFileDataCache
							});
							const stepResponseMessages = await toResponseMessages({
								content: stepContent,
								tools
							});
							const stepRequest = {
								...currentModelResponse.request,
								body: include.requestBody ? currentModelResponse.request?.body : void 0,
								messages: include.requestMessages ? cloneModelMessages(stepMessages) : void 0
							};
							const stepResponse = {
								...currentModelResponse.response,
								messages: cloneModelMessages(stepResponseMessages),
								body: include.responseBody ? currentModelResponse.response?.body : void 0
							};
							const currentStepResult = new DefaultStepResult({
								callId,
								stepNumber,
								provider: stepModel.provider,
								modelId: stepModel.modelId,
								runtimeContext,
								content: stepContent,
								finishReason: currentModelResponse.finishReason.unified,
								rawFinishReason: currentModelResponse.finishReason.raw,
								usage: stepUsage,
								performance: stepPerformance,
								warnings: currentModelResponse.warnings,
								providerMetadata: currentModelResponse.providerMetadata,
								request: stepRequest,
								response: stepResponse,
								toolsContext
							});
							logWarnings({
								warnings: currentModelResponse.warnings ?? [],
								provider: stepModel.provider,
								model: stepModel.modelId
							});
							steps.push(currentStepResult);
							instructionsForNextStep = stepInstructions;
							messagesForNextStep = [...stepMessages, ...stepResponseMessages];
							await notify({
								event: currentStepResult,
								callbacks: [resolvedOnStepEnd, telemetryDispatcher.onStepEnd]
							});
							return currentStepResult;
						}
					});
				} finally {
					if (stepTimeoutId != null) clearTimeout(stepTimeoutId);
				}
			} while (clientToolOutputs.length + deniedToolApprovalResponses.length === clientToolCalls.length && (clientToolCalls.length > 0 || pendingDeferredToolCalls.size > 0) && !await isStopConditionMet({
				stopConditions,
				steps
			}));
			const lastStep = steps[steps.length - 1];
			const totalUsage = steps.reduce((totalUsage2, step) => {
				return addLanguageModelUsage(totalUsage2, step.usage);
			}, {
				inputTokens: void 0,
				inputTokenDetails: {
					noCacheTokens: void 0,
					cacheReadTokens: void 0,
					cacheWriteTokens: void 0
				},
				outputTokens: void 0,
				outputTokenDetails: {
					textTokens: void 0,
					reasoningTokens: void 0
				},
				totalTokens: void 0
			});
			const files = steps.flatMap((step) => step.files);
			const sources = steps.flatMap((step) => step.sources);
			const toolCalls = steps.flatMap((step) => step.toolCalls);
			const staticToolCalls = steps.flatMap((step) => step.staticToolCalls);
			const dynamicToolCalls = steps.flatMap((step) => step.dynamicToolCalls);
			const toolResults = steps.flatMap((step) => step.toolResults);
			const staticToolResults = steps.flatMap((step) => step.staticToolResults);
			const dynamicToolResults = steps.flatMap((step) => step.dynamicToolResults);
			const warnings = steps.flatMap((step) => step.warnings ?? []);
			await notify({
				event: {
					callId,
					stepNumber: lastStep.stepNumber,
					model: lastStep.model,
					runtimeContext: lastStep.runtimeContext,
					finishReason: lastStep.finishReason,
					rawFinishReason: lastStep.rawFinishReason,
					usage: totalUsage,
					totalUsage,
					content: steps.flatMap((step) => step.content),
					text: lastStep.text,
					reasoning: lastStep.reasoning,
					reasoningText: lastStep.reasoningText,
					files,
					sources,
					toolCalls,
					staticToolCalls,
					dynamicToolCalls,
					toolResults,
					staticToolResults,
					dynamicToolResults,
					responseMessages: [...initialResponseMessages, ...steps.flatMap((step) => step.response.messages)],
					warnings,
					request: lastStep.request,
					response: lastStep.response,
					providerMetadata: lastStep.providerMetadata,
					steps,
					finalStep: lastStep,
					toolsContext
				},
				callbacks: [onEnd, telemetryDispatcher.onEnd]
			});
			let resolvedOutput;
			if (lastStep.finishReason === "stop" || lastStep.finishReason !== "tool-calls" && lastStep.text.length > 0) resolvedOutput = await (output ?? text()).parseCompleteOutput({ text: lastStep.text }, {
				response: lastStep.response,
				usage: lastStep.usage,
				finishReason: lastStep.finishReason
			});
			return new DefaultGenerateTextResult({
				initialResponseMessages,
				steps,
				totalUsage,
				output: resolvedOutput
			});
		} catch (error) {
			await telemetryDispatcher.onError?.({
				callId,
				error
			});
			throw wrapGatewayError(error);
		}
	};
	return await runInTracingChannelSpan({
		type: "generateText",
		event: generateTextStartEvent,
		execute: executeGenerateText
	});
}
async function executeTools({ toolCalls, tools, callId, messages, abortSignal, timeout, experimental_sandbox: sandbox, toolsContext, onToolExecutionStart, onToolExecutionEnd, executeToolInTelemetryContext, runInTracingChannelSpan }) {
	return (await Promise.all(toolCalls.map(async (toolCall) => await executeToolCall({
		toolCall,
		tools,
		callId,
		messages,
		abortSignal,
		timeout,
		experimental_sandbox: sandbox,
		toolsContext,
		onToolExecutionStart,
		onToolExecutionEnd,
		executeToolInTelemetryContext,
		runInTracingChannelSpan
	})))).filter((result) => result != null);
}
var DefaultGenerateTextResult = class {
	constructor(options) {
		this.initialResponseMessages = options.initialResponseMessages;
		this.steps = options.steps;
		this._output = options.output;
		this.totalUsage = options.totalUsage;
	}
	get finalStep() {
		return this.steps.at(-1);
	}
	get content() {
		return this.steps.flatMap((step) => step.content);
	}
	get text() {
		return this.finalStep.text;
	}
	get files() {
		return this.steps.flatMap((step) => step.files);
	}
	get reasoningText() {
		return this.finalStep.reasoningText;
	}
	get reasoning() {
		return convertToReasoningOutputs(this.finalStep.reasoning);
	}
	get toolCalls() {
		return this.steps.flatMap((step) => step.toolCalls);
	}
	get staticToolCalls() {
		return this.steps.flatMap((step) => step.staticToolCalls);
	}
	get dynamicToolCalls() {
		return this.steps.flatMap((step) => step.dynamicToolCalls);
	}
	get toolResults() {
		return this.steps.flatMap((step) => step.toolResults);
	}
	get staticToolResults() {
		return this.steps.flatMap((step) => step.staticToolResults);
	}
	get dynamicToolResults() {
		return this.steps.flatMap((step) => step.dynamicToolResults);
	}
	get sources() {
		return this.steps.flatMap((step) => step.sources);
	}
	get finishReason() {
		return this.finalStep.finishReason;
	}
	get rawFinishReason() {
		return this.finalStep.rawFinishReason;
	}
	get warnings() {
		return this.steps.flatMap((step) => step.warnings ?? []);
	}
	get providerMetadata() {
		return this.finalStep.providerMetadata;
	}
	get response() {
		return this.finalStep.response;
	}
	get responseMessages() {
		return [...this.initialResponseMessages, ...this.steps.flatMap((step) => step.response.messages)];
	}
	get request() {
		return this.finalStep.request;
	}
	get usage() {
		return this.totalUsage;
	}
	get output() {
		if (this._output == null) throw new NoOutputGeneratedError();
		return this._output;
	}
};
function prepareHeaders(headers, defaultHeaders) {
	const responseHeaders = new Headers(headers ?? {});
	for (const [key, value] of Object.entries(defaultHeaders)) if (!responseHeaders.has(key)) responseHeaders.set(key, value);
	return responseHeaders;
}
function createTextStreamResponse({ status, statusText, headers, stream }) {
	return new Response(stream.pipeThrough(new TextEncoderStream()), {
		status: status ?? 200,
		statusText,
		headers: prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" })
	});
}
function writeToServerResponse({ response, status, statusText, headers, stream }) {
	const statusCode = status ?? 200;
	if (headers != null) response.setHeaders(headers);
	if (statusText !== void 0) response.writeHead(statusCode, statusText);
	else response.writeHead(statusCode);
	const reader = stream.getReader();
	const read = async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				const canContinue = response.write(value);
				const flush = response.flush;
				if (typeof flush === "function") flush.call(response);
				if (!canContinue) await new Promise((resolve3) => {
					response.once("drain", resolve3);
				});
			}
		} finally {
			response.end();
		}
	};
	return read();
}
function pipeTextStreamToResponse({ response, status, statusText, headers, stream }) {
	return writeToServerResponse({
		response,
		status,
		statusText,
		headers: prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" }),
		stream: stream.pipeThrough(new TextEncoderStream())
	});
}
function toTextStream({ stream }) {
	return stream.pipeThrough(new TransformStream({ transform(part, controller) {
		if (part.type === "text-delta") controller.enqueue(part.text);
	} }));
}
var JsonToSseTransformStream = class extends TransformStream {
	constructor() {
		super({
			transform(part, controller) {
				controller.enqueue(`data: ${JSON.stringify(part)}

`);
			},
			flush(controller) {
				controller.enqueue("data: [DONE]\n\n");
			}
		});
	}
};
var UI_MESSAGE_STREAM_HEADERS = {
	"content-type": "text/event-stream",
	"cache-control": "no-cache",
	connection: "keep-alive",
	"x-vercel-ai-ui-message-stream": "v1",
	"x-accel-buffering": "no"
};
function createUIMessageStreamResponse({ status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	return new Response(sseStream.pipeThrough(new TextEncoderStream()), {
		status,
		statusText,
		headers: prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS)
	});
}
function pipeUIMessageStreamToResponse({ response, status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	return writeToServerResponse({
		response,
		status,
		statusText,
		headers: prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS),
		stream: sseStream.pipeThrough(new TextEncoderStream())
	});
}
function getResponseUIMessageId({ originalMessages, responseMessageId }) {
	if (originalMessages == null) return;
	const lastMessage = originalMessages[originalMessages.length - 1];
	return lastMessage?.role === "assistant" ? lastMessage.id : typeof responseMessageId === "function" ? responseMessageId() : responseMessageId;
}
var toolMetadataSchema = z.record(z.string(), jsonValueSchema.optional());
var uiMessageChunkSchema = lazySchema(() => zodSchema(z.union([
	z.looseObject({
		type: z.literal("text-start"),
		id: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("text-delta"),
		id: z.string(),
		delta: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("text-end"),
		id: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("error"),
		errorText: z.string()
	}),
	z.looseObject({
		type: z.literal("tool-input-start"),
		toolCallId: z.string(),
		toolName: z.string(),
		providerExecuted: z.boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: z.boolean().optional(),
		title: z.string().optional()
	}),
	z.looseObject({
		type: z.literal("tool-input-delta"),
		toolCallId: z.string(),
		inputTextDelta: z.string()
	}),
	z.looseObject({
		type: z.literal("tool-input-available"),
		toolCallId: z.string(),
		toolName: z.string(),
		input: z.unknown(),
		providerExecuted: z.boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: z.boolean().optional(),
		title: z.string().optional()
	}),
	z.looseObject({
		type: z.literal("tool-input-error"),
		toolCallId: z.string(),
		toolName: z.string(),
		input: z.unknown(),
		providerExecuted: z.boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: z.boolean().optional(),
		errorText: z.string(),
		title: z.string().optional()
	}),
	z.looseObject({
		type: z.literal("tool-approval-request"),
		approvalId: z.string(),
		toolCallId: z.string(),
		approvalDescriptor: z.unknown().optional(),
		inputSchemaInput: z.unknown().optional(),
		reason: z.string().optional(),
		isAutomatic: z.boolean().optional(),
		signature: z.string().optional()
	}),
	z.looseObject({
		type: z.literal("tool-approval-response"),
		approvalId: z.string(),
		approved: z.boolean(),
		reason: z.string().optional(),
		providerExecuted: z.boolean().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("tool-output-available"),
		toolCallId: z.string(),
		output: z.unknown(),
		providerExecuted: z.boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: z.boolean().optional(),
		preliminary: z.boolean().optional()
	}),
	z.looseObject({
		type: z.literal("tool-output-error"),
		toolCallId: z.string(),
		errorText: z.string(),
		providerExecuted: z.boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		toolMetadata: toolMetadataSchema.optional(),
		dynamic: z.boolean().optional()
	}),
	z.looseObject({
		type: z.literal("tool-output-denied"),
		toolCallId: z.string()
	}),
	z.looseObject({
		type: z.literal("reasoning-start"),
		id: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("reasoning-delta"),
		id: z.string(),
		delta: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("reasoning-end"),
		id: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("custom"),
		kind: z.string().transform((value) => value),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("source-url"),
		sourceId: z.string(),
		url: z.string(),
		title: z.string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("source-document"),
		sourceId: z.string(),
		mediaType: z.string(),
		title: z.string(),
		filename: z.string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("file"),
		url: z.string(),
		mediaType: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.literal("reasoning-file"),
		url: z.string(),
		mediaType: z.string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	z.looseObject({
		type: z.custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: z.string().optional(),
		data: z.unknown(),
		transient: z.boolean().optional()
	}),
	z.looseObject({ type: z.literal("start-step") }),
	z.looseObject({ type: z.literal("finish-step") }),
	z.looseObject({ type: z.literal("reset-step") }),
	z.looseObject({
		type: z.literal("start"),
		messageId: z.string().optional(),
		messageMetadata: z.unknown().optional()
	}),
	z.looseObject({
		type: z.literal("finish"),
		finishReason: z.enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"other"
		]).optional(),
		messageMetadata: z.unknown().optional()
	}),
	z.looseObject({
		type: z.literal("abort"),
		reason: z.string().optional()
	}),
	z.looseObject({
		type: z.literal("message-metadata"),
		messageMetadata: z.unknown()
	})
])));
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
function createIdMap() {
	return /* @__PURE__ */ Object.create(null);
}
function isDataUIPart(part) {
	return part.type.startsWith("data-");
}
function isTextUIPart(part) {
	return part.type === "text";
}
function isCustomContentUIPart(part) {
	return part.type === "custom";
}
function isFileUIPart(part) {
	return part.type === "file";
}
function isReasoningFileUIPart(part) {
	return part.type === "reasoning-file";
}
function isReasoningUIPart(part) {
	return part.type === "reasoning";
}
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
function isToolOutputErrorUIPart(part) {
	return isToolUIPart(part) && part.state === "output-error";
}
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function getToolName(part) {
	return isDynamicToolUIPart(part) ? part.toolName : getStaticToolName(part);
}
var getToolOrDynamicToolName = getToolName;
var rawInputDeprecationWarning = {
	type: "deprecated",
	setting: "rawInput in output-error UI message parts",
	message: "Use the \"input\" field instead. The \"rawInput\" field will be removed in the next major version."
};
function warnIfUIMessageHasDeprecatedRawInput(messages) {
	if (messages.some((message) => message.parts.some((part) => part != null && typeof part === "object" && "type" in part && typeof part.type === "string" && (part.type === "dynamic-tool" || part.type.startsWith("tool-")) && "state" in part && part.state === "output-error" && Object.prototype.hasOwnProperty.call(part, "rawInput") && "rawInput" in part && part.rawInput !== void 0))) logWarnings({ warnings: [rawInputDeprecationWarning] });
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	return {
		message: lastMessage?.role === "assistant" ? lastMessage : {
			id: messageId,
			metadata: void 0,
			role: "assistant",
			parts: []
		},
		activeTextParts: createIdMap(),
		activeReasoningParts: createIdMap(),
		partialToolCalls: createIdMap()
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData }) {
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			function getCurrentStepParts() {
				const parts = state.message.parts;
				let currentStepStartIndex = parts.length - 1;
				while (currentStepStartIndex >= 0 && parts[currentStepStartIndex].type !== "step-start") currentStepStartIndex--;
				return parts.slice(currentStepStartIndex + 1);
			}
			function getCurrentStepToolInvocations() {
				return getCurrentStepParts().filter(isToolUIPart);
			}
			function getToolInvocation(toolCallId) {
				let toolInvocation = getCurrentStepToolInvocations().find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) {
					const parts = state.message.parts;
					for (let i = parts.length - 1; i >= 0; i--) {
						const part = parts[i];
						if (isToolUIPart(part) && part.toolCallId === toolCallId) {
							toolInvocation = part;
							break;
						}
					}
				}
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-invocation",
					chunkId: toolCallId,
					message: `No tool invocation found for tool call ID "${toolCallId}".`
				});
				return toolInvocation;
			}
			function getToolInvocationByApprovalId(approvalId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart).find((invocation) => invocation.approval?.id === approvalId);
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-approval-response",
					chunkId: approvalId,
					message: `No tool invocation found for approval ID "${approvalId}".`
				});
				return toolInvocation;
			}
			function updateToolPart(options, existingPart) {
				const part = existingPart ?? getCurrentStepParts().find((part2) => isStaticToolUIPart(part2) && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = anyOptions.providerExecuted ?? part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) {
						if (options.state === "output-available" || options.state === "output-error") {
							const resultPart = part;
							resultPart.resultProviderMetadata = providerMetadata;
						} else part.callProviderMetadata = providerMetadata;
					}
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					input: anyOptions.input,
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options, existingPart) {
				const part = existingPart ?? getCurrentStepParts().find((part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput ?? anyPart.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = anyOptions.providerExecuted ?? part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) {
						if (options.state === "output-available" || options.state === "output-error") {
							const resultPart = part;
							resultPart.resultProviderMetadata = providerMetadata;
						} else part.callProviderMetadata = providerMetadata;
					}
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes({
						value: mergedMetadata,
						schema: messageMetadataSchema,
						context: {
							field: "message.metadata",
							entityId: state.message.id
						}
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-delta",
						chunkId: chunk.id,
						message: `Received text-delta for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
					});
					textPart.text += chunk.delta;
					textPart.providerMetadata = chunk.providerMetadata ?? textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-end",
						chunkId: chunk.id,
						message: `Received text-end for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
					});
					textPart.state = "done";
					textPart.providerMetadata = chunk.providerMetadata ?? textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "custom": {
					const customPart = {
						type: "custom",
						kind: chunk.kind,
						providerMetadata: chunk.providerMetadata
					};
					state.message.parts.push(customPart);
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						id: chunk.id,
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-delta",
						chunkId: chunk.id,
						message: `Received reasoning-delta for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
					});
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = chunk.providerMetadata ?? reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-end",
						chunkId: chunk.id,
						message: `Received reasoning-end for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
					});
					reasoningPart.providerMetadata = chunk.providerMetadata ?? reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
				case "reasoning-file":
					state.message.parts.push({
						type: chunk.type,
						mediaType: chunk.mediaType,
						url: chunk.url,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = getCurrentStepParts().filter(isStaticToolUIPart);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					if (partialToolCall == null) throw new UIMessageStreamError({
						chunkType: "tool-input-delta",
						chunkId: chunk.toolCallId,
						message: `Received tool-input-delta for missing tool call with ID "${chunk.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
					});
					partialToolCall.text += chunk.inputTextDelta;
					const { value: partialArgs } = await parsePartialJson(partialToolCall.text);
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error": {
					const existingPart = getCurrentStepParts().filter(isToolUIPart).find((p) => p.toolCallId === chunk.toolCallId);
					if (existingPart != null ? existingPart.type === "dynamic-tool" : !!chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					else {
						updateToolPart({
							toolCallId: chunk.toolCallId,
							toolName: chunk.toolName,
							state: "output-error",
							input: void 0,
							rawInput: chunk.input,
							errorText: chunk.errorText,
							providerExecuted: chunk.providerExecuted,
							providerMetadata: chunk.providerMetadata,
							toolMetadata: chunk.toolMetadata
						});
						warnIfUIMessageHasDeprecatedRawInput([state.message]);
					}
					write();
					break;
				}
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = {
						id: chunk.approvalId,
						...chunk.approvalDescriptor != null ? { descriptor: chunk.approvalDescriptor } : {},
						...Object.prototype.hasOwnProperty.call(chunk, "inputSchemaInput") ? { inputSchemaInput: chunk.inputSchemaInput } : {},
						...chunk.reason != null ? { requestReason: chunk.reason } : {},
						...chunk.isAutomatic === true ? { isAutomatic: true } : {},
						...chunk.signature != null ? { signature: chunk.signature } : {}
					};
					write();
					break;
				}
				case "tool-approval-response": {
					const toolInvocation = getToolInvocationByApprovalId(chunk.approvalId);
					const approval = toolInvocation.approval == null ? { id: chunk.approvalId } : toolInvocation.approval;
					toolInvocation.state = "approval-responded";
					toolInvocation.approval = {
						...approval,
						id: chunk.approvalId,
						approved: chunk.approved,
						...chunk.reason != null ? { reason: chunk.reason } : {}
					};
					if (chunk.providerExecuted != null) toolInvocation.providerExecuted = chunk.providerExecuted;
					if (chunk.providerMetadata != null) toolInvocation.callProviderMetadata = chunk.providerMetadata;
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					}, toolInvocation);
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					}, toolInvocation);
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					}, toolInvocation);
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					}, toolInvocation);
					write();
					break;
				}
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step": break;
				case "reset-step": {
					const currentStepParts = getCurrentStepParts();
					state.activeTextParts = createIdMap();
					state.activeReasoningParts = createIdMap();
					state.partialToolCalls = createIdMap();
					if (currentStepParts.length > 0) {
						state.message.parts.splice(state.message.parts.length - currentStepParts.length, currentStepParts.length);
						write();
					}
					break;
				}
				case "start":
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageId != null || chunk.messageMetadata != null) write({ updateStatus: false });
					break;
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					if (dataPartSchemas?.[chunk.type] != null) {
						const partIdx = state.message.parts.findIndex((p) => "id" in p && "data" in p && p.id === chunk.id && p.type === chunk.type);
						const actualPartIdx = partIdx >= 0 ? partIdx : state.message.parts.length;
						await validateTypes({
							value: chunk.data,
							schema: dataPartSchemas[chunk.type],
							context: {
								field: `message.parts[${actualPartIdx}].data`,
								entityName: chunk.type,
								entityId: chunk.id
							}
						});
					}
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
function handleUIMessageStreamFinish({ messageId, originalMessages = [], onStepEnd, onStepFinish, onEnd, onFinish, onError, stream, getOutcome }) {
	let lastMessage = originalMessages?.[originalMessages.length - 1];
	if (lastMessage?.role !== "assistant") lastMessage = void 0;
	else messageId = lastMessage.id;
	let isAborted = false;
	let hasProcessingFailure = false;
	let processingError;
	const recordProcessingFailure = (error) => {
		hasProcessingFailure = true;
		processingError = error;
	};
	const idInjectedStream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		try {
			let outputChunk = chunk;
			if (chunk.type === "start") {
				const startChunk = chunk;
				if (startChunk.messageId == null && messageId != null) outputChunk = {
					...startChunk,
					messageId
				};
			}
			if (chunk.type === "abort") isAborted = true;
			controller.enqueue(outputChunk);
		} catch (error) {
			recordProcessingFailure(error);
			throw error;
		}
	} }));
	const resolvedOnStepEnd = onStepEnd ?? onStepFinish;
	const resolvedOnEnd = onEnd ?? onFinish;
	if (resolvedOnEnd == null && resolvedOnStepEnd == null) return idInjectedStream;
	const state = createStreamingUIMessageState({
		lastMessage: lastMessage ? structuredClone(lastMessage) : void 0,
		messageId: messageId ?? ""
	});
	const runUpdateMessageJob = async (job) => {
		try {
			await job({
				state,
				write: () => {}
			});
		} catch (error) {
			recordProcessingFailure(error);
			throw error;
		}
	};
	let finishCalled = false;
	const callOnEnd = async ({ isCancelled }) => {
		if (finishCalled || !resolvedOnEnd) return;
		finishCalled = true;
		const isContinuation = state.message.id === lastMessage?.id;
		const declaredOutcome = getOutcome?.() ?? { status: "unknown" };
		const outcome = hasProcessingFailure ? {
			status: "failed",
			error: processingError
		} : declaredOutcome.status === "unknown" && isAborted ? { status: "aborted" } : declaredOutcome;
		const isConsumerCancellation = isCancelled && outcome.status === "unknown";
		await resolvedOnEnd({
			isAborted: isAborted || outcome.status === "aborted",
			...isConsumerCancellation ? { isCancelled: true } : {},
			isContinuation,
			outcome,
			responseMessage: state.message,
			messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, state.message],
			finishReason: state.finishReason
		});
	};
	const callOnStepFinish = async () => {
		if (!resolvedOnStepEnd) return;
		const isContinuation = state.message.id === lastMessage?.id;
		try {
			await resolvedOnStepEnd({
				isContinuation,
				responseMessage: structuredClone(state.message),
				messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, structuredClone(state.message)]
			});
		} catch (error) {
			onError(error);
		}
	};
	return processUIMessageStream({
		stream: idInjectedStream,
		runUpdateMessageJob,
		onError
	}).pipeThrough(new TransformStream({
		async transform(chunk, controller) {
			if (chunk.type === "finish-step") await callOnStepFinish();
			controller.enqueue(chunk);
		},
		async cancel() {
			await callOnEnd({ isCancelled: true });
		},
		async flush() {
			await callOnEnd({ isCancelled: false });
		}
	}));
}
function toUIMessageChunk(part, { tools, sendReasoning = true, sendSources = false, sendStart = true, sendFinish = true, onError = () => "An error occurred.", messageMetadata, responseMessageId } = {}) {
	const isDynamic = (toolPart) => {
		const tool3 = tools?.[toolPart.toolName];
		if (tool3 == null) return toolPart.dynamic;
		return tool3?.type === "dynamic" ? true : void 0;
	};
	const partType = part.type;
	switch (partType) {
		case "text-start": return {
			type: "text-start",
			id: part.id,
			...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
		};
		case "text-delta": return {
			type: "text-delta",
			id: part.id,
			delta: part.text,
			...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
		};
		case "text-end": return {
			type: "text-end",
			id: part.id,
			...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
		};
		case "reasoning-start":
		case "reasoning-end":
			if (!sendReasoning) return;
			return {
				type: partType,
				id: part.id,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			};
		case "reasoning-delta":
			if (!sendReasoning) return;
			return {
				type: "reasoning-delta",
				id: part.id,
				delta: part.text,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			};
		case "file":
		case "reasoning-file":
			if (partType === "reasoning-file" && !sendReasoning) return;
			return {
				type: part.type,
				mediaType: part.file.mediaType,
				url: `data:${part.file.mediaType};base64,${part.file.base64}`,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			};
		case "source":
			if (!sendSources) return;
			if (part.sourceType === "url") return {
				type: "source-url",
				sourceId: part.id,
				url: part.url,
				title: part.title,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			};
			if (part.sourceType === "document") return {
				type: "source-document",
				sourceId: part.id,
				mediaType: part.mediaType,
				title: part.title,
				filename: part.filename,
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
			};
			return;
		case "custom": return {
			type: "custom",
			kind: part.kind,
			...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
		};
		case "tool-input-start": {
			const dynamic = isDynamic(part);
			return {
				type: "tool-input-start",
				toolCallId: part.id,
				toolName: part.toolName,
				...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
				...dynamic != null ? { dynamic } : {},
				...part.title != null ? { title: part.title } : {}
			};
		}
		case "tool-input-delta": return {
			type: "tool-input-delta",
			toolCallId: part.id,
			inputTextDelta: part.delta
		};
		case "tool-call": {
			const dynamic = isDynamic(part);
			if (part.invalid) return {
				type: "tool-input-error",
				toolCallId: part.toolCallId,
				toolName: part.toolName,
				input: part.input,
				...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
				...dynamic != null ? { dynamic } : {},
				errorText: onError(part.error),
				...part.title != null ? { title: part.title } : {}
			};
			return {
				type: "tool-input-available",
				toolCallId: part.toolCallId,
				toolName: part.toolName,
				input: part.input,
				...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
				...dynamic != null ? { dynamic } : {},
				...part.title != null ? { title: part.title } : {}
			};
		}
		case "tool-approval-request": {
			const inputSchemaInput = getToolCallInputSchemaInput(part.toolCall);
			return {
				type: "tool-approval-request",
				approvalId: part.approvalId,
				toolCallId: part.toolCall.toolCallId,
				...inputSchemaInput != null && !isDeepEqualData(inputSchemaInput.value, part.toolCall.input) ? { inputSchemaInput: inputSchemaInput.value } : {},
				...part.reason != null ? { reason: part.reason } : {},
				...part.isAutomatic != null ? { isAutomatic: part.isAutomatic } : {},
				...part.signature != null ? { signature: part.signature } : {}
			};
		}
		case "tool-approval-response": return {
			type: "tool-approval-response",
			approvalId: part.approvalId,
			approved: part.approved,
			...part.reason != null ? { reason: part.reason } : {},
			...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {}
		};
		case "tool-result": {
			const dynamic = isDynamic(part);
			return {
				type: "tool-output-available",
				toolCallId: part.toolCallId,
				output: part.output === void 0 ? null : part.output,
				...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
				...part.preliminary != null ? { preliminary: part.preliminary } : {},
				...dynamic != null ? { dynamic } : {}
			};
		}
		case "tool-error": {
			const dynamic = isDynamic(part);
			return {
				type: "tool-output-error",
				toolCallId: part.toolCallId,
				errorText: part.providerExecuted ? typeof part.error === "string" ? part.error : JSON.stringify(part.error) : onError(part.error),
				...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
				...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
				...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
				...dynamic != null ? { dynamic } : {}
			};
		}
		case "tool-output-denied": return {
			type: "tool-output-denied",
			toolCallId: part.toolCallId
		};
		case "error": return {
			type: "error",
			errorText: onError(part.error)
		};
		case "start-step": return { type: "start-step" };
		case "finish-step": return { type: "finish-step" };
		case "start":
			if (!sendStart) return;
			return {
				type: "start",
				...messageMetadata != null ? { messageMetadata } : {},
				...responseMessageId != null ? { messageId: responseMessageId } : {}
			};
		case "finish":
			if (!sendFinish) return;
			return {
				type: "finish",
				finishReason: part.finishReason,
				...messageMetadata != null ? { messageMetadata } : {}
			};
		case "abort": return part;
		case "tool-input-end":
		case "raw": return;
		default: throw new Error(`Unknown chunk type: ${partType}`);
	}
}
function toUIMessageStream({ stream, tools, sendReasoning = true, sendSources = false, sendStart = true, sendFinish = true, onError = () => "An error occurred.", messageMetadata, originalMessages, generateMessageId, onEnd, onFinish }) {
	let outcome = { status: "unknown" };
	let hasFatalFailure = false;
	const setSourceOutcome = (newOutcome) => {
		if (!hasFatalFailure && outcome.status !== "completed" && outcome.status !== "aborted" && newOutcome.status !== "unknown" && (outcome.status === "unknown" || newOutcome.status !== "failed")) outcome = newOutcome;
	};
	const failOutcome = (error) => {
		hasFatalFailure = true;
		outcome = {
			status: "failed",
			error
		};
	};
	const responseMessageId = generateMessageId != null ? getResponseUIMessageId({
		originalMessages,
		responseMessageId: generateMessageId
	}) : void 0;
	const sourceReader = stream.getReader();
	let sourceReaderReleased = false;
	let sourceStreamCancelled = false;
	const releaseSourceReader = () => {
		if (!sourceReaderReleased) {
			sourceReader.releaseLock();
			sourceReaderReleased = true;
		}
	};
	return handleUIMessageStreamFinish({
		stream: new ReadableStream({
			async pull(controller) {
				try {
					const { done, value } = await sourceReader.read();
					if (done) {
						releaseSourceReader();
						if (!sourceStreamCancelled) controller.close();
					} else controller.enqueue(value);
				} catch (error) {
					releaseSourceReader();
					if (!sourceStreamCancelled) {
						failOutcome(error);
						controller.error(error);
					}
				}
			},
			async cancel(reason) {
				sourceStreamCancelled = true;
				if (sourceReaderReleased) return;
				try {
					await sourceReader.cancel(reason);
				} finally {
					releaseSourceReader();
				}
			}
		}).pipeThrough(new TransformStream({ transform: async (part, controller) => {
			try {
				const messageMetadataValue = messageMetadata?.({ part });
				const uiMessageChunk = toUIMessageChunk(part, {
					tools,
					sendReasoning,
					sendSources,
					sendStart,
					sendFinish,
					onError,
					messageMetadata: messageMetadataValue,
					responseMessageId
				});
				if (uiMessageChunk != null) controller.enqueue(uiMessageChunk);
				if (messageMetadataValue != null && part.type !== "start" && part.type !== "finish") controller.enqueue({
					type: "message-metadata",
					messageMetadata: messageMetadataValue
				});
				if (part.type === "finish") setSourceOutcome({ status: "completed" });
				else if (part.type === "abort") setSourceOutcome({ status: "aborted" });
				else if (part.type === "error") setSourceOutcome({
					status: "failed",
					error: part.error
				});
			} catch (error) {
				failOutcome(error);
				throw error;
			}
		} })),
		messageId: responseMessageId ?? generateMessageId?.(),
		originalMessages,
		onEnd: onEnd ?? onFinish,
		onError,
		getOutcome: () => outcome
	});
}
function createAsyncIterableStream(source) {
	return asAsyncIterableStream(source.pipeThrough(new TransformStream()));
}
function asAsyncIterableStream(stream) {
	stream[Symbol.asyncIterator] = function() {
		const reader = this.getReader();
		let finished = false;
		async function cleanup(cancelStream) {
			if (finished) return;
			finished = true;
			try {
				if (cancelStream) await reader.cancel?.();
			} finally {
				try {
					reader.releaseLock();
				} catch {}
			}
		}
		return {
			/**
			* Reads the next chunk from the stream.
			* @returns A promise resolving to the next IteratorResult.
			*/
			async next() {
				if (finished) return {
					done: true,
					value: void 0
				};
				let result;
				try {
					result = await reader.read();
				} catch (error) {
					await cleanup(false);
					throw error;
				}
				const { done, value } = result;
				if (done) {
					await cleanup(true);
					return {
						done: true,
						value: void 0
					};
				}
				return {
					done: false,
					value
				};
			},
			/**
			* May be called on early exit (e.g., break from for-await) or after completion.
			* Ensures the stream is cancelled and resources are released.
			* @returns A promise resolving to a completed IteratorResult.
			*/
			async return() {
				await cleanup(true);
				return {
					done: true,
					value: void 0
				};
			},
			/**
			* Called on early exit with error.
			* Ensures the stream is cancelled and resources are released, then rethrows the error.
			* @param err The error to throw.
			* @returns A promise that rejects with the provided error.
			*/
			async throw(err) {
				await cleanup(true);
				throw err;
			}
		};
	};
	return stream;
}
async function consumeStream({ stream, onError, abortSignal }) {
	const reader = stream.getReader();
	const cancelOnAbort = () => {
		reader.cancel().catch(() => {});
	};
	if (abortSignal?.aborted) cancelOnAbort();
	else abortSignal?.addEventListener("abort", cancelOnAbort, { once: true });
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		abortSignal?.removeEventListener("abort", cancelOnAbort);
		reader.releaseLock();
	}
}
function createResolvablePromise() {
	let resolve3;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve3 = res;
			reject = rej;
		}),
		resolve: resolve3,
		reject
	};
}
function createStitchableStream() {
	let innerStreams = [];
	let controller = null;
	let isClosed = false;
	let isCancelled = false;
	let waitForNewStream = createResolvablePromise();
	const terminate = () => {
		if (isCancelled) return;
		isClosed = true;
		waitForNewStream.resolve();
		innerStreams.forEach(({ reader, onCancel }) => {
			onCancel?.();
			reader.cancel();
		});
		innerStreams = [];
		controller?.close();
	};
	const processPull = async () => {
		if (isCancelled) return;
		if (isClosed && innerStreams.length === 0) {
			controller?.close();
			return;
		}
		if (innerStreams.length === 0) {
			waitForNewStream = createResolvablePromise();
			await waitForNewStream.promise;
			return await processPull();
		}
		const currentStream = innerStreams[0];
		try {
			const { value, done } = await currentStream.reader.read();
			if (isCancelled) return;
			if (done) {
				innerStreams.shift();
				if (innerStreams.length === 0 && isClosed) controller?.close();
				else await processPull();
			} else controller?.enqueue(value);
		} catch (error) {
			if (isCancelled) return;
			currentStream.onError?.(error);
			controller?.error(error);
			innerStreams.shift();
			terminate();
		}
	};
	return {
		stream: new ReadableStream({
			start(controllerParam) {
				controller = controllerParam;
			},
			pull: processPull,
			async cancel() {
				isCancelled = true;
				isClosed = true;
				waitForNewStream.resolve();
				for (const { reader, onCancel } of innerStreams) {
					onCancel?.();
					await reader.cancel();
				}
				innerStreams = [];
			}
		}),
		addStream: (innerStream, callbacks) => {
			if (isCancelled) {
				callbacks?.onCancel?.();
				innerStream.cancel().catch(() => {});
				return;
			}
			if (isClosed) throw new Error("Cannot add inner stream: outer stream is closed");
			innerStreams.push({
				reader: innerStream.getReader(),
				...callbacks
			});
			waitForNewStream.resolve();
		},
		/**
		* Gracefully close the outer stream. This will let the inner streams
		* finish processing and then close the outer stream.
		*/
		close: () => {
			if (isCancelled) return;
			isClosed = true;
			waitForNewStream.resolve();
			if (innerStreams.length === 0) controller?.close();
		},
		/**
		* Immediately close the outer stream. This will cancel all inner streams
		* and close the outer stream.
		*/
		terminate
	};
}
var streamRetryAttemptBoundarySymbol = /* @__PURE__ */ Symbol("streamRetryAttemptBoundary");
function createStreamRetryAttemptBoundaryPart({ warnings }) {
	return {
		[streamRetryAttemptBoundarySymbol]: true,
		warnings
	};
}
function isStreamRetryAttemptBoundaryPart(part) {
	return typeof part === "object" && part != null && streamRetryAttemptBoundarySymbol in part;
}
function executeToolsFromStream({ stream, tools, callId, messages, abortSignal, timeout, experimental_sandbox: sandbox, toolsContext, toolApproval, runtimeContext, toolApprovalSecret, generateId: generateId5, onToolExecutionStart, onToolExecutionEnd, executeToolInTelemetryContext, runInTracingChannelSpan }) {
	const toolCallsToExecute = [];
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		controller.enqueue(chunk);
		if (isStreamRetryAttemptBoundaryPart(chunk)) {
			toolCallsToExecute.length = 0;
			return;
		}
		switch (chunk.type) {
			case "tool-call": {
				if (chunk.invalid) return;
				const tool3 = getOwn(tools, chunk.toolName);
				if (tool3 == null) return;
				const toolApprovalStatus = await resolveToolApproval({
					tools,
					toolCall: chunk,
					toolApproval,
					messages,
					toolsContext,
					runtimeContext
				});
				if (toolApprovalStatus.type === "not-applicable") {
					if (tool3.execute != null && chunk.providerExecuted !== true) toolCallsToExecute.push(chunk);
					return;
				}
				const approvalId = generateId5();
				const signature = await maybeSignApproval({
					secret: toolApprovalSecret,
					approvalId,
					toolCallId: chunk.toolCallId,
					toolName: chunk.toolName,
					input: chunk.input
				});
				switch (toolApprovalStatus.type) {
					case "user-approval":
						controller.enqueue({
							type: "tool-approval-request",
							approvalId,
							toolCall: chunk,
							...toolApprovalStatus.reason != null ? { reason: toolApprovalStatus.reason } : {},
							...signature != null ? { signature } : {}
						});
						return;
					case "denied":
						controller.enqueue({
							type: "tool-approval-request",
							approvalId,
							toolCall: chunk,
							isAutomatic: true,
							...signature != null ? { signature } : {}
						});
						controller.enqueue({
							type: "tool-approval-response",
							approvalId,
							approved: false,
							toolCall: chunk,
							reason: toolApprovalStatus.reason,
							providerExecuted: chunk.providerExecuted
						});
						controller.enqueue({
							type: "tool-output-denied",
							toolCallId: chunk.toolCallId,
							toolName: chunk.toolName
						});
						return;
					case "approved":
						controller.enqueue({
							type: "tool-approval-request",
							approvalId,
							toolCall: chunk,
							isAutomatic: true,
							...signature != null ? { signature } : {}
						});
						controller.enqueue({
							type: "tool-approval-response",
							approvalId,
							approved: true,
							toolCall: chunk,
							reason: toolApprovalStatus.reason,
							providerExecuted: chunk.providerExecuted
						});
				}
				if (tool3.execute != null && chunk.providerExecuted !== true) toolCallsToExecute.push(chunk);
				return;
			}
			case "model-call-end":
				if (!isToolExecutionAllowedFinishReason(chunk.finishReason)) return;
				await Promise.all(toolCallsToExecute.map(async (toolCall) => {
					try {
						const result = await executeToolCall({
							toolCall,
							tools,
							callId,
							messages,
							abortSignal,
							timeout,
							experimental_sandbox: sandbox,
							toolsContext,
							onToolExecutionStart,
							onToolExecutionEnd,
							executeToolInTelemetryContext,
							runInTracingChannelSpan,
							onPreliminaryToolResult: (result2) => {
								controller.enqueue(result2);
							}
						});
						if (result != null) {
							controller.enqueue({
								type: "tool-execution-end",
								toolCallId: result.output.toolCallId,
								toolExecutionMs: result.toolExecutionMs
							});
							controller.enqueue(result.output);
						}
					} catch (error) {
						controller.enqueue({
							type: "error",
							error
						});
					}
				}));
		}
	} }));
}
function invokeToolCallbacksFromStream({ stream, tools, stepInputMessages, abortSignal, toolsContext }) {
	if (tools == null) return stream;
	let ongoingToolCalls = createIdMap();
	const getValidatedContext = ({ toolCallId, toolName }) => {
		const ongoingToolCall = ongoingToolCalls[toolCallId];
		const validatedContext = ongoingToolCall?.validatedContexts[toolName];
		if (validatedContext != null) return validatedContext;
		const tool3 = getOwn(tools, toolName);
		const newValidatedContext = validateToolContext({
			toolName,
			context: getOwn(toolsContext, toolName),
			contextSchema: tool3?.contextSchema
		});
		if (ongoingToolCall != null) ongoingToolCall.validatedContexts[toolName] = newValidatedContext;
		return newValidatedContext;
	};
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		controller.enqueue(chunk);
		if (isStreamRetryAttemptBoundaryPart(chunk)) {
			ongoingToolCalls = createIdMap();
			return;
		}
		switch (chunk.type) {
			case "tool-input-start": {
				ongoingToolCalls[chunk.id] = {
					toolName: chunk.toolName,
					validatedContexts: createIdMap()
				};
				const tool3 = getOwn(tools, chunk.toolName);
				if (tool3?.onInputStart != null) await tool3.onInputStart({
					toolCallId: chunk.id,
					messages: stepInputMessages,
					abortSignal,
					context: await getValidatedContext({
						toolCallId: chunk.id,
						toolName: chunk.toolName
					})
				});
				break;
			}
			case "tool-input-delta": {
				const toolName = ongoingToolCalls[chunk.id]?.toolName;
				const tool3 = getOwn(tools, toolName);
				if (tool3?.onInputDelta != null) await tool3.onInputDelta({
					inputTextDelta: chunk.delta,
					toolCallId: chunk.id,
					messages: stepInputMessages,
					abortSignal,
					context: await getValidatedContext({
						toolCallId: chunk.id,
						toolName
					})
				});
				break;
			}
			case "tool-call": {
				const toolName = chunk.toolName;
				const tool3 = getOwn(tools, toolName);
				if (!chunk.invalid && tool3?.onInputAvailable != null) {
					const validatedContext = getValidatedContext({
						toolCallId: chunk.toolCallId,
						toolName
					});
					delete ongoingToolCalls[chunk.toolCallId];
					await tool3.onInputAvailable({
						input: chunk.input,
						toolCallId: chunk.toolCallId,
						messages: stepInputMessages,
						abortSignal,
						context: await validatedContext
					});
				} else delete ongoingToolCalls[chunk.toolCallId];
			}
		}
	} }));
}
function normalizeStreamProviderError(error) {
	if (isError(error) || AISDKError.isInstance(error) || StreamProviderError.isInstance(error)) return error;
	const outer = asRecord(error);
	if (outer == null) return error;
	const providerStreamError = isProviderStreamError(error);
	const details = providerStreamError ? outer : asRecord(asRecord(outer.response)?.error) ?? asRecord(outer.error) ?? outer;
	if (typeof details.message !== "string") return error;
	const type = getString(details.type) ?? getString(outer.type);
	const code = getStringOrNumber(details.code) ?? getStringOrNumber(outer.code);
	const explicitStatusCode = getHttpStatusCode(details.statusCode) ?? getHttpStatusCode(outer.statusCode) ?? getHttpStatusCode(details.status_code) ?? getHttpStatusCode(outer.status_code) ?? getHttpStatusCode(details.status) ?? getHttpStatusCode(outer.status) ?? getHttpStatusCode(details.code) ?? getHttpStatusCode(outer.code);
	const messageMetadata = inferExactMessageMetadata(details.message);
	const statusCode = explicitStatusCode ?? messageMetadata?.statusCode;
	const explicitRetryability = getBoolean(details.isRetryable) ?? getBoolean(outer.isRetryable) ?? getBoolean(details.is_retryable) ?? getBoolean(outer.is_retryable);
	return new StreamProviderError({
		message: details.message,
		type,
		code,
		statusCode,
		isRetryable: explicitRetryability ?? messageMetadata?.isRetryable ?? isRetryableStatusCode2(statusCode),
		data: providerStreamError ? error.data : error
	});
}
function inferExactMessageMetadata(message) {
	switch (message.trim().toLowerCase()) {
		case "overloaded":
		case "overloaded error":
		case "model overloaded": return {
			statusCode: 503,
			isRetryable: true
		};
		case "internal server error": return {
			statusCode: 500,
			isRetryable: true
		};
		case "service unavailable": return {
			statusCode: 503,
			isRetryable: true
		};
		default: return;
	}
}
function isRetryableStatusCode2(statusCode) {
	return statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500);
}
function asRecord(value) {
	return typeof value === "object" && value != null ? value : void 0;
}
function isError(value) {
	return value instanceof Error || Object.prototype.toString.call(value) === "[object Error]";
}
function getString(value) {
	return typeof value === "string" ? value : void 0;
}
function getStringOrNumber(value) {
	return typeof value === "string" || typeof value === "number" ? value : void 0;
}
function getBoolean(value) {
	return typeof value === "boolean" ? value : void 0;
}
function getHttpStatusCode(value) {
	const statusCode = typeof value === "string" && /^\d{3}$/.test(value) ? Number(value) : value;
	return typeof statusCode === "number" && Number.isInteger(statusCode) && statusCode >= 400 && statusCode <= 599 ? statusCode : void 0;
}
var originalGenerateId2 = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
var originalGenerateCallId2 = createIdGenerator({
	prefix: "call",
	size: 24
});
async function streamLanguageModelCall({ model, tools, toolOrder, output, toolChoice, prompt, system, instructions, messages, allowSystemInMessages, download: download2, abortSignal, headers, includeRawChunks, providerOptions, repairToolCall, refineToolInput, executeLanguageModelCallInTelemetryContext = async ({ execute }) => await execute(), callId, toolsContext, experimental_sandbox: sandbox, _internal: { generateId: generateId5 = originalGenerateId2, generateCallId = originalGenerateCallId2, now: now2 = now } = {}, onStart, onLanguageModelCallStart, onLanguageModelCallEnd, ...callSettings }) {
	const resolvedModel = resolveLanguageModel(model);
	const effectiveCallId = callId ?? generateCallId();
	const standardizedPrompt = await standardizePrompt({
		instructions,
		system,
		prompt,
		messages,
		allowSystemInMessages
	});
	const promptMessages = await convertToLanguageModelPrompt({
		prompt: {
			instructions: standardizedPrompt.instructions,
			messages: standardizedPrompt.messages
		},
		supportedUrls: await resolvedModel.supportedUrls,
		download: download2,
		abortSignal,
		provider: resolvedModel.provider.split(".")[0]
	});
	const stepTools = await prepareTools({
		tools,
		toolOrder,
		toolsContext,
		experimental_sandbox: sandbox
	});
	const stepToolChoice = prepareToolChoice({ toolChoice });
	await notify({
		event: { promptMessages },
		callbacks: onStart
	});
	const languageModelCallStartEvent = {
		callId: effectiveCallId,
		provider: resolvedModel.provider,
		modelId: resolvedModel.modelId,
		instructions: standardizedPrompt.instructions,
		messages: standardizedPrompt.messages,
		tools: stepTools,
		...callSettings
	};
	await notify({
		event: languageModelCallStartEvent,
		callbacks: onLanguageModelCallStart
	});
	const callStartTimestampMs = now2();
	const { stream: languageModelStream, response, request } = await executeLanguageModelCallInTelemetryContext({
		...languageModelCallStartEvent,
		execute: async () => await resolvedModel.doStream({
			...callSettings,
			tools: stepTools,
			toolChoice: stepToolChoice,
			responseFormat: await output?.responseFormat,
			prompt: promptMessages,
			providerOptions,
			abortSignal,
			headers,
			includeRawChunks
		})
	});
	return {
		stream: createAsyncIterableStream(languageModelStream.pipeThrough(createLanguageModelV4StreamPartToLanguageModelStreamPartTransform({
			tools,
			instructions: standardizedPrompt.instructions,
			messages: standardizedPrompt.messages,
			repairToolCall,
			refineToolInput,
			abortSignal,
			callId: effectiveCallId,
			provider: resolvedModel.provider,
			modelId: resolvedModel.modelId,
			toolChoice: stepToolChoice,
			generateId: generateId5,
			now: now2,
			callStartTimestampMs,
			onLanguageModelCallEnd
		}))),
		response,
		request
	};
}
function createLanguageModelV4StreamPartToLanguageModelStreamPartTransform({ tools, instructions, messages, repairToolCall, refineToolInput, abortSignal, callId, provider, modelId, toolChoice, generateId: generateId5, now: now2, callStartTimestampMs, onLanguageModelCallEnd }) {
	const toolCallsByToolCallId = /* @__PURE__ */ new Map();
	const modelCallContent = [];
	const rawModelCallContent = [];
	const textPartIndexes = /* @__PURE__ */ new Map();
	const reasoningPartIndexes = /* @__PURE__ */ new Map();
	const rawTextPartIndexes = /* @__PURE__ */ new Map();
	const rawReasoningPartIndexes = /* @__PURE__ */ new Map();
	let responseId = generateId5();
	let responseModelId = modelId;
	let timeToFirstOutputMs;
	let previousOutputChunkTimestampMs;
	const timeBetweenOutputChunksMs = [];
	return new TransformStream({ async transform(chunk, controller) {
		if (isOutputChunk(chunk)) {
			const outputChunkTimestampMs = now2();
			if (timeToFirstOutputMs == null) timeToFirstOutputMs = outputChunkTimestampMs - callStartTimestampMs;
			else if (previousOutputChunkTimestampMs != null) timeBetweenOutputChunksMs.push(outputChunkTimestampMs - previousOutputChunkTimestampMs);
			previousOutputChunkTimestampMs = outputChunkTimestampMs;
		}
		switch (chunk.type) {
			case "error":
				controller.enqueue({
					type: "error",
					error: normalizeStreamProviderError(chunk.error)
				});
				break;
			case "text-start":
				upsertTextContentPart({
					content: modelCallContent,
					rawContent: rawModelCallContent,
					partIndexes: textPartIndexes,
					rawPartIndexes: rawTextPartIndexes,
					id: chunk.id,
					type: "text",
					providerMetadata: chunk.providerMetadata
				});
				controller.enqueue(chunk);
				break;
			case "text-delta":
				upsertTextContentPart({
					content: modelCallContent,
					rawContent: rawModelCallContent,
					partIndexes: textPartIndexes,
					rawPartIndexes: rawTextPartIndexes,
					id: chunk.id,
					type: "text",
					textDelta: chunk.delta,
					providerMetadata: chunk.providerMetadata
				});
				controller.enqueue({
					type: "text-delta",
					id: chunk.id,
					text: chunk.delta,
					providerMetadata: chunk.providerMetadata
				});
				break;
			case "text-end":
				upsertTextContentPart({
					content: modelCallContent,
					rawContent: rawModelCallContent,
					partIndexes: textPartIndexes,
					rawPartIndexes: rawTextPartIndexes,
					id: chunk.id,
					type: "text",
					providerMetadata: chunk.providerMetadata
				});
				textPartIndexes.delete(chunk.id);
				rawTextPartIndexes.delete(chunk.id);
				controller.enqueue(chunk);
				break;
			case "reasoning-start":
				upsertTextContentPart({
					content: modelCallContent,
					rawContent: rawModelCallContent,
					partIndexes: reasoningPartIndexes,
					rawPartIndexes: rawReasoningPartIndexes,
					id: chunk.id,
					type: "reasoning",
					providerMetadata: chunk.providerMetadata
				});
				controller.enqueue(chunk);
				break;
			case "reasoning-delta":
				upsertTextContentPart({
					content: modelCallContent,
					rawContent: rawModelCallContent,
					partIndexes: reasoningPartIndexes,
					rawPartIndexes: rawReasoningPartIndexes,
					id: chunk.id,
					type: "reasoning",
					textDelta: chunk.delta,
					providerMetadata: chunk.providerMetadata
				});
				controller.enqueue({
					type: "reasoning-delta",
					id: chunk.id,
					text: chunk.delta,
					providerMetadata: chunk.providerMetadata
				});
				break;
			case "reasoning-end":
				upsertTextContentPart({
					content: modelCallContent,
					rawContent: rawModelCallContent,
					partIndexes: reasoningPartIndexes,
					rawPartIndexes: rawReasoningPartIndexes,
					id: chunk.id,
					type: "reasoning",
					providerMetadata: chunk.providerMetadata
				});
				reasoningPartIndexes.delete(chunk.id);
				rawReasoningPartIndexes.delete(chunk.id);
				controller.enqueue(chunk);
				break;
			case "file":
			case "reasoning-file": {
				const file = new DefaultGeneratedFileWithType({
					data: await resolveGeneratedFileData({
						data: chunk.data,
						abortSignal
					}),
					mediaType: chunk.mediaType
				});
				modelCallContent.push({
					type: chunk.type,
					file,
					...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
				});
				rawModelCallContent.push(chunk);
				controller.enqueue({
					type: chunk.type,
					file,
					providerMetadata: chunk.providerMetadata
				});
				break;
			}
			case "finish": {
				const usage = asLanguageModelUsage(chunk.usage);
				const responseTimeMs = now2() - callStartTimestampMs;
				const performance = {
					responseTimeMs,
					effectiveOutputTokensPerSecond: calculateTokensPerSecond({
						tokens: usage.outputTokens,
						durationMs: responseTimeMs
					}),
					outputTokensPerSecond: timeToFirstOutputMs == null ? void 0 : calculateTokensPerSecond({
						tokens: usage.outputTokens,
						durationMs: responseTimeMs - timeToFirstOutputMs
					}),
					inputTokensPerSecond: timeToFirstOutputMs == null ? void 0 : calculateTokensPerSecond({
						tokens: usage.inputTokens,
						durationMs: timeToFirstOutputMs
					}),
					effectiveTotalTokensPerSecond: calculateTokensPerSecond({
						tokens: sumTokenCounts(usage.inputTokens, usage.outputTokens),
						durationMs: responseTimeMs
					}),
					timeToFirstOutputMs,
					timeBetweenOutputChunksMs: timeBetweenOutputChunksMs.length > 0 ? calculateOutputChunkTimingStats(timeBetweenOutputChunksMs) : void 0
				};
				await notify({
					event: {
						callId,
						provider,
						modelId: responseModelId,
						finishReason: chunk.finishReason.unified,
						usage,
						content: modelCallContent,
						responseId,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
						performance
					},
					callbacks: onLanguageModelCallEnd
				});
				const enforcedToolChoice = toolChoice.type === "required" || toolChoice.type === "tool" ? toolChoice : void 0;
				const toolChoiceViolationError = enforcedToolChoice != null && ![...toolCallsByToolCallId.values()].some((toolCall) => enforcedToolChoice.type === "required" || toolCall.toolName === enforcedToolChoice.toolName) ? new ToolChoiceViolationError({
					toolChoice: enforcedToolChoice,
					finishReason: chunk.finishReason.unified,
					provider,
					modelId,
					content: rawModelCallContent
				}) : void 0;
				controller.enqueue({
					type: "model-call-end",
					finishReason: toolChoiceViolationError == null ? chunk.finishReason.unified : "error",
					rawFinishReason: chunk.finishReason.raw,
					usage,
					providerMetadata: chunk.providerMetadata,
					performance
				});
				if (toolChoiceViolationError != null) {
					controller.enqueue({
						type: "error",
						error: toolChoiceViolationError
					});
					break;
				}
				break;
			}
			case "tool-call":
				rawModelCallContent.push(chunk);
				try {
					const toolCall = await parseToolCall({
						toolCall: chunk,
						tools,
						repairToolCall,
						refineToolInput,
						instructions,
						messages,
						abortSignal
					});
					toolCallsByToolCallId.set(toolCall.toolCallId, toolCall);
					controller.enqueue(toolCall);
					modelCallContent.push(toolCall);
					if (toolCall.invalid) {
						if (!toolCall.providerExecuted) controller.enqueue({
							type: "tool-error",
							toolCallId: toolCall.toolCallId,
							toolName: toolCall.toolName,
							input: toolCall.input,
							error: getErrorMessage(toolCall.error),
							dynamic: true,
							title: toolCall.title,
							...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
						});
						break;
					}
				} catch (error) {
					controller.enqueue({
						type: "error",
						error
					});
				}
				break;
			case "tool-approval-request": {
				rawModelCallContent.push(chunk);
				const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
				if (toolCall == null) {
					controller.enqueue({
						type: "error",
						error: new ToolCallNotFoundForApprovalError({
							toolCallId: chunk.toolCallId,
							approvalId: chunk.approvalId
						})
					});
					break;
				}
				const toolApprovalRequest = {
					type: "tool-approval-request",
					approvalId: chunk.approvalId,
					toolCall
				};
				controller.enqueue(toolApprovalRequest);
				modelCallContent.push(toolApprovalRequest);
				break;
			}
			case "tool-result": {
				rawModelCallContent.push(chunk);
				const toolName = chunk.toolName;
				const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
				const toolResultPart = chunk.isError ? {
					type: "tool-error",
					toolCallId: chunk.toolCallId,
					toolName,
					input: toolCall?.input,
					providerExecuted: true,
					error: chunk.result,
					dynamic: chunk.dynamic,
					...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
					...toolCall?.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
				} : {
					type: "tool-result",
					toolCallId: chunk.toolCallId,
					toolName,
					input: toolCall?.input,
					output: chunk.result,
					providerExecuted: true,
					dynamic: chunk.dynamic,
					...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
					...toolCall?.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
				};
				controller.enqueue(toolResultPart);
				modelCallContent.push(toolResultPart);
				break;
			}
			case "tool-input-start": {
				const tool3 = getOwn(tools, chunk.toolName);
				controller.enqueue({
					...chunk,
					dynamic: chunk.dynamic ?? tool3?.type === "dynamic",
					title: tool3?.title,
					...tool3?.metadata != null ? { toolMetadata: tool3.metadata } : {}
				});
				break;
			}
			case "stream-start":
				controller.enqueue({
					type: "model-call-start",
					warnings: chunk.warnings
				});
				break;
			case "response-metadata":
				responseId = chunk.id ?? responseId;
				responseModelId = chunk.modelId ?? responseModelId;
				controller.enqueue({
					type: "model-call-response-metadata",
					id: chunk.id,
					timestamp: chunk.timestamp,
					modelId: chunk.modelId
				});
				break;
			default:
				if (chunk.type === "custom" || chunk.type === "source") {
					modelCallContent.push(chunk);
					rawModelCallContent.push(chunk);
				}
				controller.enqueue(chunk);
		}
	} });
}
function isOutputChunk(chunk) {
	return chunk.type === "text-delta" && chunk.delta.length > 0 || chunk.type === "reasoning-delta" && chunk.delta.length > 0 || chunk.type === "tool-input-delta" && chunk.delta.length > 0 || chunk.type === "file" || chunk.type === "reasoning-file" || chunk.type === "tool-call";
}
function calculateOutputChunkTimingStats(timingsMs) {
	const sortedTimingsMs = [...timingsMs].sort((a, b) => a - b);
	const sum = timingsMs.reduce((sum2, timingMs) => sum2 + timingMs, 0);
	return {
		min: sortedTimingsMs[0],
		p10: calculateNearestRankPercentile(sortedTimingsMs, .1),
		median: calculateNearestRankPercentile(sortedTimingsMs, .5),
		avg: sum / timingsMs.length,
		p90: calculateNearestRankPercentile(sortedTimingsMs, .9),
		max: sortedTimingsMs[sortedTimingsMs.length - 1]
	};
}
function calculateNearestRankPercentile(sortedValues, percentile) {
	return sortedValues[Math.ceil(percentile * sortedValues.length) - 1];
}
function upsertTextContentPart({ content, rawContent, partIndexes, rawPartIndexes, id, type, textDelta, providerMetadata }) {
	let partIndex = partIndexes.get(id);
	if (partIndex == null) {
		partIndex = content.push({
			type,
			text: "",
			...providerMetadata != null ? { providerMetadata } : {}
		}) - 1;
		partIndexes.set(id, partIndex);
	}
	let rawPartIndex = rawPartIndexes.get(id);
	if (rawPartIndex == null) {
		rawPartIndex = rawContent.push({
			type,
			text: "",
			...providerMetadata != null ? { providerMetadata } : {}
		}) - 1;
		rawPartIndexes.set(id, rawPartIndex);
	}
	const part = content[partIndex];
	const rawPart = rawContent[rawPartIndex];
	if (textDelta != null) {
		part.text += textDelta;
		rawPart.text += textDelta;
	}
	if (providerMetadata != null) {
		part.providerMetadata = providerMetadata;
		rawPart.providerMetadata = providerMetadata;
	}
}
var originalGenerateId3 = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
var originalGenerateCallId3 = createIdGenerator({
	prefix: "call",
	size: 24
});
var isOutputChunkType = {
	file: true,
	custom: false,
	source: false,
	"text-start": false,
	"text-end": false,
	"text-delta": true,
	"reasoning-start": false,
	"reasoning-end": false,
	"reasoning-delta": true,
	"reasoning-file": true,
	"tool-input-start": false,
	"tool-input-end": false,
	"tool-input-delta": true,
	"tool-approval-request": false,
	"tool-approval-response": false,
	"tool-call": true,
	"tool-result": false,
	"tool-error": false,
	"tool-output-denied": false,
	"tool-execution-end": false,
	"model-call-start": false,
	"model-call-response-metadata": false,
	"model-call-end": false,
	error: false,
	raw: false
};
function isOutputChunk2(chunk) {
	if (!isOutputChunkType[chunk.type]) return false;
	switch (chunk.type) {
		case "text-delta":
		case "reasoning-delta": return chunk.text.length > 0;
		case "tool-input-delta": return chunk.delta.length > 0;
		case "file":
		case "reasoning-file":
		case "tool-call": return true;
		default: return false;
	}
}
function streamText({ model, tools, toolChoice, instructions, system, prompt, messages, allowSystemInMessages, maxRetries, streamRetries, abortSignal, timeout, headers, stopWhen = isStepCount(1), experimental_sandbox: sandbox, output, toolApproval, experimental_toolCallers, experimental_toolApprovalSecret, experimental_telemetry, telemetry = experimental_telemetry, prepareStep, providerOptions, activeTools, toolOrder, experimental_repairToolCall, repairToolCall = experimental_repairToolCall, experimental_refineToolInput: refineToolInput, experimental_transform: transform, experimental_download: download2, includeRawChunks, onChunk, onError: onErrorArg, onFinish, onEnd = onFinish, onAbort, onStepEnd, onStepFinish, onStart, experimental_onStart, onStepStart, experimental_onStepStart, onLanguageModelCallStart, experimental_onLanguageModelCallStart, onLanguageModelCallEnd, experimental_onLanguageModelCallEnd, onToolExecutionStart, onToolExecutionEnd, experimental_onToolCallStart, experimental_onToolCallFinish, runtimeContext = {}, toolsContext = {}, experimental_include, include = experimental_include, _internal: { now: now2 = now, generateId: generateId5 = originalGenerateId3, generateCallId = originalGenerateCallId3 } = {}, ...settings }) {
	const totalTimeoutMs = getTotalTimeoutMs(timeout);
	const stepTimeoutMs = getStepTimeoutMs(timeout);
	const firstChunkTimeoutMs = getFirstChunkTimeoutMs(timeout);
	const chunkTimeoutMs = getChunkTimeoutMs(timeout);
	const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
	const firstChunkAbortController = firstChunkTimeoutMs != null ? new AbortController() : void 0;
	const chunkAbortController = chunkTimeoutMs != null ? new AbortController() : void 0;
	const onError = onErrorArg ?? (({ error }) => {
		console.error(error);
	});
	const resolvedOnStart = onStart ?? experimental_onStart;
	const resolvedOnStepStart = onStepStart ?? experimental_onStepStart;
	const resolvedOnLanguageModelCallStart = onLanguageModelCallStart ?? experimental_onLanguageModelCallStart;
	const resolvedOnLanguageModelCallEnd = onLanguageModelCallEnd ?? experimental_onLanguageModelCallEnd;
	const resolvedOnToolExecutionStart = onToolExecutionStart ?? experimental_onToolCallStart;
	const resolvedOnToolExecutionEnd = onToolExecutionEnd ?? experimental_onToolCallFinish;
	const resolvedOnStepEnd = onStepEnd ?? onStepFinish;
	return new DefaultStreamTextResult({
		model: resolveLanguageModel(model),
		telemetry,
		headers,
		settings,
		maxRetries,
		streamRetries,
		abortSignal: mergeAbortSignals(abortSignal, totalTimeoutMs, stepAbortController?.signal, firstChunkAbortController?.signal, chunkAbortController?.signal),
		stepTimeoutMs,
		stepAbortController,
		firstChunkTimeoutMs,
		firstChunkAbortController,
		chunkTimeoutMs,
		chunkAbortController,
		instructions,
		system,
		prompt,
		messages,
		allowSystemInMessages,
		experimental_sandbox: sandbox,
		tools,
		toolsContext,
		runtimeContext,
		toolChoice,
		transforms: asArray(transform),
		activeTools,
		toolOrder,
		repairToolCall,
		refineToolInput,
		stopConditions: asArray(stopWhen),
		output,
		toolApproval,
		experimental_toolCallers,
		experimental_toolApprovalSecret,
		providerOptions,
		prepareStep,
		timeout,
		onChunk,
		onError,
		canRetryStreamViaOnError: streamRetries !== void 0 && onErrorArg != null,
		onEnd,
		onAbort,
		onStepFinish: resolvedOnStepEnd,
		onStart: resolvedOnStart,
		onStepStart: resolvedOnStepStart,
		onLanguageModelCallStart: resolvedOnLanguageModelCallStart,
		onLanguageModelCallEnd: resolvedOnLanguageModelCallEnd,
		onToolExecutionStart: resolvedOnToolExecutionStart,
		onToolExecutionEnd: resolvedOnToolExecutionEnd,
		now: now2,
		generateId: generateId5,
		generateCallId,
		download: download2,
		include: {
			requestBody: include?.requestBody ?? false,
			requestMessages: include?.requestMessages ?? false,
			rawChunks: include?.rawChunks ?? includeRawChunks ?? false
		}
	});
}
var streamRetryBoundarySymbol = /* @__PURE__ */ Symbol("streamRetryBoundary");
function isStreamRetryBoundaryPart(part) {
	return streamRetryBoundarySymbol in part;
}
async function markPromiseAsHandled(promise) {
	try {
		await promise;
	} catch {}
}
function createOutputTransformStream(output) {
	let firstTextChunkId = void 0;
	let text2 = "";
	let textChunk = "";
	let textProviderMetadata = void 0;
	let lastPublishedValue = void 0;
	let hasPublishedValue = false;
	function resetOutputState() {
		firstTextChunkId = void 0;
		text2 = "";
		textChunk = "";
		textProviderMetadata = void 0;
		lastPublishedValue = void 0;
		hasPublishedValue = false;
	}
	function enqueueChunk({ controller, chunk }) {
		controller.enqueue(chunk);
	}
	function publishTextChunk({ controller, partialOutput = void 0 }) {
		enqueueChunk({
			controller,
			chunk: {
				part: {
					type: "text-delta",
					id: firstTextChunkId,
					text: textChunk,
					providerMetadata: textProviderMetadata
				},
				partialOutput
			}
		});
		textChunk = "";
	}
	return new TransformStream({ async transform(chunk, controller) {
		if (isStreamRetryBoundaryPart(chunk)) {
			resetOutputState();
			controller.enqueue(chunk);
			return;
		}
		if (chunk.type === "start-step") resetOutputState();
		if (chunk.type === "finish-step" && textChunk.length > 0) publishTextChunk({ controller });
		if (chunk.type !== "text-delta" && chunk.type !== "text-start" && chunk.type !== "text-end") {
			enqueueChunk({
				controller,
				chunk: {
					part: chunk,
					partialOutput: void 0
				}
			});
			return;
		}
		if (firstTextChunkId == null) firstTextChunkId = chunk.id;
		else if (chunk.id !== firstTextChunkId) {
			enqueueChunk({
				controller,
				chunk: {
					part: chunk,
					partialOutput: void 0
				}
			});
			return;
		}
		if (chunk.type === "text-start") {
			enqueueChunk({
				controller,
				chunk: {
					part: chunk,
					partialOutput: void 0
				}
			});
			return;
		}
		if (chunk.type === "text-end") {
			if (textChunk.length > 0) publishTextChunk({ controller });
			enqueueChunk({
				controller,
				chunk: {
					part: chunk,
					partialOutput: void 0
				}
			});
			return;
		}
		text2 += chunk.text;
		textChunk += chunk.text;
		textProviderMetadata = chunk.providerMetadata ?? textProviderMetadata;
		if (chunk.text.length === 0 && chunk.providerMetadata != null) {
			enqueueChunk({
				controller,
				chunk: {
					part: chunk,
					partialOutput: void 0
				}
			});
			return;
		}
		const result = await output.parsePartialOutput({ text: text2 });
		if (result !== void 0) {
			const currentValue = typeof result.partial === "string" ? result.partial : JSON.stringify(result.partial);
			if (!hasPublishedValue || currentValue !== lastPublishedValue) {
				publishTextChunk({
					controller,
					partialOutput: result.partial
				});
				lastPublishedValue = currentValue;
				hasPublishedValue = true;
			}
		}
	} });
}
function applyStreamTextTransforms({ stream, transforms, tools, stopStream }) {
	const sourceReader = stream.getReader();
	let sourceDone = false;
	let pendingBoundary;
	let transformedSegmentReader;
	const createTransformedSegmentReader = () => {
		let segment = new ReadableStream({
			async pull(controller) {
				const { done, value } = await sourceReader.read();
				if (done) {
					sourceDone = true;
					controller.close();
					return;
				}
				if (isStreamRetryBoundaryPart(value)) {
					pendingBoundary = value;
					controller.close();
					return;
				}
				controller.enqueue(value);
			},
			cancel(reason) {
				return sourceReader.cancel(reason);
			}
		}, { highWaterMark: 0 });
		for (const transform of transforms) segment = segment.pipeThrough(transform({
			tools,
			stopStream
		}));
		return segment.getReader();
	};
	return new ReadableStream({
		async pull(controller) {
			transformedSegmentReader ??= createTransformedSegmentReader();
			const { done, value } = await transformedSegmentReader.read();
			if (!done) {
				controller.enqueue(value);
				return;
			}
			transformedSegmentReader = void 0;
			if (pendingBoundary != null) {
				controller.enqueue(pendingBoundary);
				pendingBoundary = void 0;
				return;
			}
			if (sourceDone) controller.close();
		},
		async cancel(reason) {
			await transformedSegmentReader?.cancel(reason);
			await sourceReader.cancel(reason);
		}
	});
}
var DefaultStreamTextResult = class {
	constructor({ model, telemetry, headers, settings, maxRetries: maxRetriesArg, streamRetries: streamRetriesArg, abortSignal, stepTimeoutMs, stepAbortController, firstChunkTimeoutMs, firstChunkAbortController, chunkTimeoutMs, chunkAbortController, instructions, system, prompt, messages, allowSystemInMessages, experimental_sandbox: sandbox, tools, toolChoice, transforms, activeTools, toolOrder, repairToolCall, refineToolInput, stopConditions, output, toolApproval, experimental_toolCallers, experimental_toolApprovalSecret, providerOptions, prepareStep, now: now2, generateId: generateId5, generateCallId, timeout, onChunk, onError, canRetryStreamViaOnError, onEnd, onAbort, onStepFinish, onStart, onStepStart, onLanguageModelCallStart, onLanguageModelCallEnd, onToolExecutionStart, onToolExecutionEnd, runtimeContext, toolsContext, download: download2, include }) {
		this._totalUsage = new DelayedPromise();
		this._finishReason = new DelayedPromise();
		this._rawFinishReason = new DelayedPromise();
		this._steps = new DelayedPromise();
		this._initialResponseMessages = new DelayedPromise();
		this.outputSpecification = output;
		this.tools = tools;
		const resolvedToolCallers = resolveToolCallerConfiguration({
			tools,
			toolCallers: experimental_toolCallers
		});
		const prepareToolSearch = createToolSearchState({
			tools,
			toolCallers: resolvedToolCallers
		});
		const telemetryDispatcher = createRestrictedTelemetryDispatcher({
			telemetry,
			includeRuntimeContext: telemetry?.includeRuntimeContext,
			includeToolsContext: telemetry?.includeToolsContext
		});
		let stepFinish;
		let recordedContent = [];
		let recordedFinishReason = void 0;
		let recordedRawFinishReason = void 0;
		let recordedTotalUsage = void 0;
		let recordedRequest = {};
		let recordedRequestMessages = [];
		let recordedWarnings = [];
		const recordedSteps = [];
		const initialResponseMessages = [];
		let stepMessagesForNextStep;
		let currentStepMessages = [];
		let isAborted = false;
		let currentStepModel = model;
		const createPartIdReserver = () => {
			const usedIds = /* @__PURE__ */ new Set();
			return (id) => {
				if (!usedIds.has(id)) {
					usedIds.add(id);
					return id;
				}
				const generatedId = generateId5();
				let uniqueId = generatedId;
				let suffix = 0;
				while (usedIds.has(uniqueId)) uniqueId = `${generatedId}-${++suffix}`;
				usedIds.add(uniqueId);
				return uniqueId;
			};
		};
		const reserveTextPartId = createPartIdReserver();
		const reserveReasoningPartId = createPartIdReserver();
		const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
		let activeTextContent = createIdMap();
		let activeReasoningContent = createIdMap();
		let recordedNoOutputError;
		const errorsHandledForStreamRetry = /* @__PURE__ */ new Set();
		const eventProcessor = new TransformStream({
			async transform(chunk, controller) {
				if (isStreamRetryBoundaryPart(chunk)) {
					const retryBoundary = chunk[streamRetryBoundarySymbol];
					recordedContent = [];
					activeReasoningContent = createIdMap();
					activeTextContent = createIdMap();
					recordedRequest = retryBoundary.request;
					recordedRequestMessages = retryBoundary.request.messages ?? [];
					recordedWarnings = retryBoundary.warnings;
					return;
				}
				const { part } = chunk;
				controller.enqueue(chunk);
				const callbacksHandledForStreamRetry = part.type === "error" && errorsHandledForStreamRetry.has(part.error);
				if (!callbacksHandledForStreamRetry) await notify({
					event: { chunk: part },
					callbacks: onChunk
				});
				if (part.type === "error") {
					const error = wrapGatewayError(part.error);
					if (NoOutputGeneratedError.isInstance(error)) recordedNoOutputError = error;
					if (callbacksHandledForStreamRetry) errorsHandledForStreamRetry.delete(part.error);
					else await notify({
						event: { error },
						callbacks: async (event) => {
							await onError(event);
						}
					});
				}
				if (part.type === "custom" || part.type === "source" || part.type === "tool-call" || part.type === "tool-approval-request" || part.type === "tool-approval-response" || part.type === "tool-error") recordedContent.push(part);
				if (part.type === "text-start") {
					activeTextContent[part.id] = {
						type: "text",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeTextContent[part.id]);
				}
				if (part.type === "text-delta") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.text += part.text;
					activeText.providerMetadata = part.providerMetadata ?? activeText.providerMetadata;
				}
				if (part.type === "text-end") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.providerMetadata = part.providerMetadata ?? activeText.providerMetadata;
					delete activeTextContent[part.id];
				}
				if (part.type === "reasoning-start") {
					activeReasoningContent[part.id] = {
						type: "reasoning",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeReasoningContent[part.id]);
				}
				if (part.type === "reasoning-delta") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.text += part.text;
					activeReasoning.providerMetadata = part.providerMetadata ?? activeReasoning.providerMetadata;
				}
				if (part.type === "reasoning-end") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.providerMetadata = part.providerMetadata ?? activeReasoning.providerMetadata;
					delete activeReasoningContent[part.id];
				}
				if (part.type === "file" || part.type === "reasoning-file") recordedContent.push({
					type: part.type,
					file: part.file,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
				});
				if (part.type === "tool-result" && !part.preliminary) recordedContent.push(part);
				if (part.type === "start-step") {
					recordedContent = [];
					activeReasoningContent = createIdMap();
					activeTextContent = createIdMap();
					recordedRequest = part.request;
					recordedWarnings = part.warnings;
				}
				if (part.type === "finish-step") {
					const stepResponseMessages = await toResponseMessages({
						content: recordedContent,
						tools
					});
					const currentStepResult = new DefaultStepResult({
						callId,
						stepNumber: recordedSteps.length,
						provider: currentStepModel.provider,
						modelId: currentStepModel.modelId,
						runtimeContext,
						toolsContext,
						content: recordedContent,
						finishReason: part.finishReason,
						rawFinishReason: part.rawFinishReason,
						usage: part.usage,
						performance: part.performance,
						warnings: recordedWarnings,
						request: {
							...recordedRequest,
							messages: include.requestMessages ? cloneModelMessages(recordedRequestMessages) : void 0
						},
						response: {
							...part.response,
							messages: cloneModelMessages(stepResponseMessages)
						},
						providerMetadata: part.providerMetadata
					});
					await notify({
						event: currentStepResult,
						callbacks: [onStepFinish, telemetryDispatcher.onStepEnd]
					});
					logWarnings({
						warnings: recordedWarnings,
						provider: currentStepModel.provider,
						model: currentStepModel.modelId
					});
					recordedSteps.push(currentStepResult);
					stepMessagesForNextStep = [...currentStepMessages, ...stepResponseMessages];
					stepFinish.resolve();
				}
				if (part.type === "finish") {
					recordedTotalUsage = part.totalUsage;
					recordedFinishReason = part.finishReason;
					recordedRawFinishReason = part.rawFinishReason;
				}
			},
			async flush(controller) {
				try {
					if (recordedSteps.length === 0 || recordedNoOutputError != null) {
						const error = abortSignal?.aborted ? abortSignal.reason : recordedNoOutputError ?? new NoOutputGeneratedError({ message: "No output generated. Check the stream for errors." });
						self.rejectResultPromises(error);
						return;
					}
					const finishReason = recordedFinishReason ?? "other";
					const totalUsage = recordedTotalUsage ?? createNullLanguageModelUsage();
					self._finishReason.resolve(finishReason);
					self._rawFinishReason.resolve(recordedRawFinishReason);
					self._totalUsage.resolve(totalUsage);
					self._steps.resolve(recordedSteps);
					if (isAborted) return;
					const finalStep = recordedSteps[recordedSteps.length - 1];
					const content = recordedSteps.flatMap((step) => step.content);
					const files = recordedSteps.flatMap((step) => step.files);
					const sources = recordedSteps.flatMap((step) => step.sources);
					const toolCalls = recordedSteps.flatMap((step) => step.toolCalls);
					const staticToolCalls = recordedSteps.flatMap((step) => step.staticToolCalls);
					const dynamicToolCalls = recordedSteps.flatMap((step) => step.dynamicToolCalls);
					const toolResults = recordedSteps.flatMap((step) => step.toolResults);
					const staticToolResults = recordedSteps.flatMap((step) => step.staticToolResults);
					const dynamicToolResults = recordedSteps.flatMap((step) => step.dynamicToolResults);
					const warnings = recordedSteps.flatMap((step) => step.warnings ?? []);
					const onEndWithOutput = onEnd == null ? void 0 : async (event) => {
						const parsedOutput = output == null ? void 0 : await self.getOutputPromise().catch(() => void 0);
						await onEnd({
							...event,
							...output != null ? { output: parsedOutput } : {}
						});
					};
					const onEndEvent = {
						callId,
						toolsContext: finalStep.toolsContext,
						stepNumber: finalStep.stepNumber,
						model: finalStep.model,
						runtimeContext: finalStep.runtimeContext,
						finishReason: finalStep.finishReason,
						rawFinishReason: finalStep.rawFinishReason,
						usage: totalUsage,
						totalUsage,
						content,
						text: finalStep.text,
						reasoning: finalStep.reasoning,
						reasoningText: finalStep.reasoningText,
						files,
						sources,
						toolCalls,
						staticToolCalls,
						dynamicToolCalls,
						toolResults,
						staticToolResults,
						dynamicToolResults,
						responseMessages: [...initialResponseMessages, ...recordedSteps.flatMap((step) => step.response.messages)],
						warnings,
						request: finalStep.request,
						response: finalStep.response,
						providerMetadata: finalStep.providerMetadata,
						steps: recordedSteps,
						finalStep
					};
					await Promise.all([notify({
						event: onEndEvent,
						callbacks: onEndWithOutput
					}), notify({
						event: onEndEvent,
						callbacks: telemetryDispatcher.onEnd
					})]);
				} catch (error) {
					controller.error(error);
				}
			}
		});
		const stitchableStream = createStitchableStream();
		this.addStream = stitchableStream.addStream;
		this.closeStream = stitchableStream.close;
		const reader = stitchableStream.stream.getReader();
		let stream = new ReadableStream({
			async start(controller) {
				controller.enqueue({ type: "start" });
			},
			async pull(controller) {
				async function abort() {
					isAborted = true;
					await notify({
						event: {
							callId,
							steps: recordedSteps,
							...abortSignal?.reason !== void 0 ? { reason: abortSignal.reason } : {}
						},
						callbacks: [onAbort, telemetryDispatcher.onAbort]
					});
					controller.enqueue({
						type: "abort",
						...abortSignal?.reason !== void 0 ? { reason: getErrorMessage(abortSignal.reason) } : {}
					});
					controller.close();
				}
				try {
					const { done, value } = await reader.read();
					if (done) {
						controller.close();
						return;
					}
					if (abortSignal?.aborted) {
						await abort();
						return;
					}
					controller.enqueue(value);
				} catch (error) {
					if (isAbortError(error) && abortSignal?.aborted) await abort();
					else {
						await telemetryDispatcher.onError?.({
							callId,
							error
						});
						controller.error(error);
					}
				}
			},
			cancel(reason) {
				return stitchableStream.stream.cancel(reason);
			}
		});
		let isRunning = true;
		stream = stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (isRunning) controller.enqueue(chunk);
		} }));
		stream = applyStreamTextTransforms({
			stream,
			transforms,
			tools,
			stopStream() {
				stitchableStream.terminate();
				isRunning = false;
			}
		});
		this.baseStream = stream.pipeThrough(createOutputTransformStream(output ?? text())).pipeThrough(eventProcessor);
		const { maxRetries } = prepareRetries({
			maxRetries: maxRetriesArg,
			abortSignal
		});
		const { maxRetries: streamRetries } = prepareRetries({
			maxRetries: streamRetriesArg,
			abortSignal,
			parameter: "streamRetries",
			defaultMaxRetries: 0
		});
		const callSettings = prepareLanguageModelCallOptions(settings);
		const self = this;
		const callId = generateCallId();
		(async () => {
			const initialPrompt = await standardizePrompt({
				instructions,
				system,
				prompt,
				messages,
				allowSystemInMessages
			});
			const startEvent = {
				callId,
				operationId: "ai.streamText",
				provider: model.provider,
				modelId: model.modelId,
				instructions: initialPrompt.instructions,
				messages: initialPrompt.messages,
				tools,
				toolChoice,
				activeTools,
				toolOrder,
				maxOutputTokens: callSettings.maxOutputTokens,
				temperature: callSettings.temperature,
				topP: callSettings.topP,
				topK: callSettings.topK,
				presencePenalty: callSettings.presencePenalty,
				frequencyPenalty: callSettings.frequencyPenalty,
				stopSequences: callSettings.stopSequences,
				seed: callSettings.seed,
				reasoning: callSettings.reasoning,
				maxRetries,
				timeout,
				headers,
				providerOptions,
				output,
				runtimeContext,
				toolsContext
			};
			const streamTextTracingChannelContext = telemetryDispatcher.startTracingChannelContext?.({
				type: "streamText",
				event: startEvent,
				completion: self._totalUsage.promise.then(() => void 0)
			});
			const runInStreamTextTracingChannelContext = (execute) => streamTextTracingChannelContext?.run(execute) ?? execute();
			const runInTracingChannelSpanInStreamText = telemetryDispatcher.runInTracingChannelSpan == null ? void 0 : (options) => runInStreamTextTracingChannelContext(() => telemetryDispatcher.runInTracingChannelSpan(options));
			await notify({
				event: startEvent,
				callbacks: [onStart, telemetryDispatcher.onStart]
			});
			const initialMessages = initialPrompt.messages;
			let instructionsForNextStep = initialPrompt.instructions;
			const { approvedToolApprovals, deniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
			if (deniedToolApprovals.length > 0 || approvedToolApprovals.length > 0) {
				const { approvedToolApprovals: localApprovedToolApprovals, deniedToolApprovals: revalidationDeniedToolApprovals, invalidToolApprovals } = await validateApprovedToolApprovals({
					approvedToolApprovals: approvedToolApprovals.filter((toolApproval2) => !toolApproval2.toolCall.providerExecuted),
					tools,
					toolApproval,
					messages: initialMessages,
					toolsContext,
					runtimeContext,
					toolApprovalSecret: experimental_toolApprovalSecret,
					refineToolInput
				});
				const localDeniedToolApprovals = [...deniedToolApprovals.filter((toolApproval2) => !toolApproval2.toolCall.providerExecuted), ...revalidationDeniedToolApprovals];
				const localDeniedToolApprovalsWithoutResults = localDeniedToolApprovals.filter((toolApproval2) => toolApproval2.existingToolResult == null);
				const deniedProviderExecutedToolApprovals = deniedToolApprovals.filter((toolApproval2) => toolApproval2.toolCall.providerExecuted);
				let toolExecutionStepStreamController;
				const toolExecutionStepStream = new ReadableStream({ start(controller) {
					toolExecutionStepStreamController = controller;
				} });
				self.addStream(toolExecutionStepStream);
				try {
					for (const toolApproval2 of [...localDeniedToolApprovals, ...deniedProviderExecutedToolApprovals]) toolExecutionStepStreamController?.enqueue({
						type: "tool-output-denied",
						toolCallId: toolApproval2.toolCall.toolCallId,
						toolName: toolApproval2.toolCall.toolName
					});
					for (const toolApproval2 of invalidToolApprovals) toolExecutionStepStreamController?.enqueue({
						type: "tool-error",
						toolCallId: toolApproval2.toolCall.toolCallId,
						toolName: toolApproval2.toolCall.toolName,
						input: toolApproval2.toolCall.input,
						error: getErrorMessage(toolApproval2.error),
						title: toolApproval2.toolCall.title,
						...toolApproval2.toolCall.dynamic === true ? { dynamic: true } : {},
						...toolApproval2.toolCall.toolMetadata != null ? { toolMetadata: toolApproval2.toolCall.toolMetadata } : {}
					});
					const toolOutputs = [];
					await Promise.all(localApprovedToolApprovals.map(async (toolApproval2) => {
						const result = await executeToolCall({
							toolCall: toolApproval2.toolCall,
							tools,
							callId,
							messages: initialMessages,
							abortSignal,
							timeout,
							experimental_sandbox: sandbox,
							toolsContext,
							onToolExecutionStart: filterNullable(onToolExecutionStart, telemetryDispatcher.onToolExecutionStart),
							onToolExecutionEnd: filterNullable(onToolExecutionEnd, telemetryDispatcher.onToolExecutionEnd),
							executeToolInTelemetryContext: telemetryDispatcher.executeTool,
							runInTracingChannelSpan: runInTracingChannelSpanInStreamText,
							onPreliminaryToolResult: (result2) => {
								toolExecutionStepStreamController?.enqueue(result2);
							}
						});
						if (result != null) {
							toolExecutionStepStreamController?.enqueue(result.output);
							toolOutputs.push(result.output);
						}
					}));
					if (toolOutputs.length > 0 || localDeniedToolApprovalsWithoutResults.length > 0 || invalidToolApprovals.length > 0) {
						const localToolContent = [];
						for (const output2 of toolOutputs) localToolContent.push({
							type: "tool-result",
							toolCallId: output2.toolCallId,
							toolName: output2.toolName,
							output: await createToolModelOutput({
								toolCallId: output2.toolCallId,
								input: output2.input,
								tool: getOwn(tools, output2.toolName),
								output: output2.type === "tool-result" ? output2.output : output2.error,
								errorMode: output2.type === "tool-error" ? "text" : "none"
							})
						});
						for (const toolApproval2 of invalidToolApprovals) localToolContent.push({
							type: "tool-result",
							toolCallId: toolApproval2.toolCall.toolCallId,
							toolName: toolApproval2.toolCall.toolName,
							output: await createToolModelOutput({
								toolCallId: toolApproval2.toolCall.toolCallId,
								input: toolApproval2.toolCall.input,
								tool: getOwn(tools, toolApproval2.toolCall.toolName),
								output: toolApproval2.error,
								errorMode: "text"
							})
						});
						for (const toolApproval2 of localDeniedToolApprovalsWithoutResults) localToolContent.push({
							type: "tool-result",
							toolCallId: toolApproval2.toolCall.toolCallId,
							toolName: toolApproval2.toolCall.toolName,
							output: {
								type: "execution-denied",
								reason: toolApproval2.approvalResponse.reason
							}
						});
						initialResponseMessages.push({
							role: "tool",
							content: localToolContent
						});
					}
				} finally {
					toolExecutionStepStreamController?.close();
				}
			}
			self._initialResponseMessages.resolve(initialResponseMessages);
			async function streamStep({ currentStep, usage }) {
				const stepTimeoutId = setAbortTimeout({
					abortController: stepAbortController,
					label: "Step",
					timeoutMs: stepTimeoutMs
				});
				let firstChunkTimeoutId = void 0;
				function startFirstChunkTimeout() {
					if (abortSignal?.aborted) return;
					firstChunkTimeoutId = setAbortTimeout({
						abortController: firstChunkAbortController,
						label: "First chunk",
						timeoutMs: firstChunkTimeoutMs
					});
				}
				function clearFirstChunkTimeout() {
					if (firstChunkTimeoutId != null) {
						clearTimeout(firstChunkTimeoutId);
						firstChunkTimeoutId = void 0;
					}
				}
				let chunkTimeoutId = void 0;
				function resetChunkTimeout() {
					if (chunkTimeoutId != null) clearTimeout(chunkTimeoutId);
					chunkTimeoutId = setAbortTimeout({
						abortController: chunkAbortController,
						label: "Chunk",
						timeoutMs: chunkTimeoutMs
					});
				}
				function clearChunkTimeout() {
					if (chunkTimeoutId != null) {
						clearTimeout(chunkTimeoutId);
						chunkTimeoutId = void 0;
					}
				}
				function clearStepTimeout() {
					if (stepTimeoutId != null) clearTimeout(stepTimeoutId);
				}
				function clearStepTimeouts() {
					clearStepTimeout();
					clearFirstChunkTimeout();
					clearChunkTimeout();
				}
				function cleanupStepTimeouts() {
					abortSignal?.removeEventListener("abort", cleanupStepTimeouts);
					clearStepTimeouts();
				}
				abortSignal?.addEventListener("abort", cleanupStepTimeouts, { once: true });
				try {
					stepFinish = new DelayedPromise();
					const stepTracingChannelContext = telemetryDispatcher.startTracingChannelContext?.({
						type: "step",
						event: {
							callId,
							stepNumber: currentStep
						},
						completion: stepFinish.promise
					});
					const runInStepTracingChannelContext = (execute) => stepTracingChannelContext?.run(execute) ?? execute();
					const responseMessagesFromPreviousSteps = recordedSteps.flatMap((step) => step.response.messages);
					const accumulatedResponseMessages = [...initialResponseMessages, ...responseMessagesFromPreviousSteps];
					const stepInputMessages = stepMessagesForNextStep ?? [...initialMessages, ...initialResponseMessages];
					const prepareStepResult = await prepareStep?.({
						model,
						steps: recordedSteps,
						stepNumber: recordedSteps.length,
						instructions: instructionsForNextStep,
						initialInstructions: initialPrompt.instructions,
						messages: stepInputMessages,
						initialMessages,
						responseMessages: accumulatedResponseMessages,
						toolsContext,
						runtimeContext,
						experimental_sandbox: sandbox
					});
					const stepSandbox = prepareStepResult?.experimental_sandbox ?? sandbox;
					runtimeContext = prepareStepResult?.runtimeContext ?? runtimeContext;
					toolsContext = prepareStepResult?.toolsContext ?? toolsContext;
					const stepModel = resolveLanguageModel(prepareStepResult?.model ?? model);
					currentStepModel = stepModel;
					const stepActiveTools = filterActiveTools({
						tools,
						activeTools: prepareStepResult?.activeTools ?? activeTools
					});
					const { executionTools: stepExecutionTools, modelTools: stepModelTools, toolCallerMessages } = prepareToolsForToolCallers({
						tools: prepareToolSearch(stepActiveTools, {
							toolsContext,
							experimental_sandbox: stepSandbox
						}),
						toolCallers: resolvedToolCallers
					});
					const stepToolOrder = prepareStepResult?.toolOrder ?? toolOrder;
					const stepTools = await prepareTools({
						tools: stepModelTools,
						toolOrder: stepToolOrder,
						toolsContext,
						experimental_sandbox: stepSandbox
					});
					const stepToolChoice = prepareToolChoice({ toolChoice: prepareStepResult?.toolChoice ?? toolChoice });
					const stepMessages = appendToolCallerMessages({
						messages: prepareStepResult?.messages ?? stepInputMessages,
						toolCallerMessages
					});
					currentStepMessages = stepMessages;
					const stepInstructions = prepareStepResult?.instructions ?? prepareStepResult?.system ?? instructionsForNextStep;
					instructionsForNextStep = stepInstructions;
					const stepProviderOptions = mergeObjects(providerOptions, prepareStepResult?.providerOptions);
					const stepCallSettings = prepareStepCallSettings({
						callSettings,
						stepSettings: prepareStepResult
					});
					const stepStartTimestampMs = now2();
					const { retry } = prepareRetries({
						maxRetries,
						abortSignal
					});
					let hasNotifiedStepStart = false;
					const callLanguageModel = () => runInStepTracingChannelContext(() => retry(async () => streamLanguageModelCall({
						model: prepareStepResult?.model ?? model,
						tools: stepModelTools,
						toolOrder: stepToolOrder,
						toolChoice: prepareStepResult?.toolChoice ?? toolChoice,
						instructions: stepInstructions,
						messages: stepMessages,
						allowSystemInMessages,
						repairToolCall,
						refineToolInput,
						abortSignal,
						headers,
						includeRawChunks: include.rawChunks,
						providerOptions: stepProviderOptions,
						download: download2,
						output,
						callId,
						executeLanguageModelCallInTelemetryContext: telemetryDispatcher.executeLanguageModelCall,
						toolsContext,
						experimental_sandbox: stepSandbox,
						onLanguageModelCallStart: filterNullable(onLanguageModelCallStart, telemetryDispatcher.onLanguageModelCallStart),
						onLanguageModelCallEnd: filterNullable(onLanguageModelCallEnd, telemetryDispatcher.onLanguageModelCallEnd),
						onStart: async ({ promptMessages }) => {
							if (hasNotifiedStepStart) return;
							hasNotifiedStepStart = true;
							await notify({
								event: {
									callId,
									provider: stepModel.provider,
									modelId: stepModel.modelId,
									stepNumber: recordedSteps.length,
									instructions: stepInstructions,
									messages: stepMessages,
									tools,
									toolChoice: prepareStepResult?.toolChoice ?? toolChoice,
									activeTools: prepareStepResult?.activeTools ?? activeTools,
									toolOrder: stepToolOrder,
									steps: [...recordedSteps],
									providerOptions: stepProviderOptions,
									runtimeContext,
									toolsContext,
									output,
									promptMessages,
									stepTools,
									stepToolChoice
								},
								callbacks: [onStepStart, telemetryDispatcher.onStepStart]
							});
						},
						_internal: { now: now2 },
						...stepCallSettings
					})));
					const initialLanguageModelCall = await callLanguageModel();
					let request = initialLanguageModelCall.request;
					let response = initialLanguageModelCall.response;
					let languageModelStreamReader = initialLanguageModelCall.stream.getReader();
					let automaticStreamRetryCount = 0;
					let callbackStreamRetryCount = 0;
					let bufferedAttemptParts = [];
					const outputChunksHandledBeforeBuffering = /* @__PURE__ */ new WeakSet();
					const openTextParts = /* @__PURE__ */ new Set();
					const openReasoningParts = /* @__PURE__ */ new Set();
					let enqueueStreamRetryAttemptBoundary = false;
					const shouldBufferToolParts = streamRetries > 0 || canRetryStreamViaOnError;
					const languageModelStream = new ReadableStream({
						async pull(controller) {
							const enqueueAttemptPart = (part) => {
								switch (part.type) {
									case "text-start":
										openTextParts.add(part.id);
										break;
									case "text-end":
										openTextParts.delete(part.id);
										break;
									case "reasoning-start":
										openReasoningParts.add(part.id);
										break;
									case "reasoning-end": openReasoningParts.delete(part.id);
								}
								controller.enqueue(part);
							};
							const flushBufferedAttemptParts = () => {
								for (const part of bufferedAttemptParts) enqueueAttemptPart(part);
								bufferedAttemptParts = [];
							};
							const closeOpenAttemptParts = () => {
								for (const id of openTextParts) controller.enqueue({
									type: "text-end",
									id
								});
								openTextParts.clear();
								for (const id of openReasoningParts) controller.enqueue({
									type: "reasoning-end",
									id
								});
								openReasoningParts.clear();
							};
							while (true) {
								const { done, value } = await languageModelStreamReader.read();
								if (enqueueStreamRetryAttemptBoundary) {
									controller.enqueue(createStreamRetryAttemptBoundaryPart({ warnings: !done && value.type === "model-call-start" ? value.warnings : [] }));
									enqueueStreamRetryAttemptBoundary = false;
								}
								if (done) {
									flushBufferedAttemptParts();
									controller.close();
									return;
								}
								const isToolPart = value.type === "tool-input-start" || value.type === "tool-input-delta" || value.type === "tool-input-end" || value.type === "tool-call" || value.type === "tool-approval-request" || value.type === "tool-approval-response" || value.type === "tool-result" || value.type === "tool-error";
								if (value.type === "model-call-end") {
									flushBufferedAttemptParts();
									enqueueAttemptPart(value);
									return;
								}
								if (shouldBufferToolParts && value.type !== "error" && (isToolPart || bufferedAttemptParts.length > 0)) {
									if (isOutputChunk2(value)) {
										clearFirstChunkTimeout();
										resetChunkTimeout();
										outputChunksHandledBeforeBuffering.add(value);
									}
									bufferedAttemptParts.push(value);
									continue;
								}
								if (value.type !== "error") {
									enqueueAttemptPart(value);
									return;
								}
								await notify({
									event: { chunk: value },
									callbacks: onChunk
								});
								const error = wrapGatewayError(value.error);
								const isToolChoiceViolation = ToolChoiceViolationError.isInstance(error);
								let onErrorResult;
								try {
									onErrorResult = await onError({ error });
								} catch {}
								const callbackRequestedRetry = canRetryStreamViaOnError && typeof onErrorResult === "object" && onErrorResult != null && "retry" in onErrorResult && onErrorResult.retry === true;
								const automaticRetry = !isToolChoiceViolation && automaticStreamRetryCount < streamRetries;
								if (!automaticRetry && !(!isToolChoiceViolation && !automaticRetry && callbackRequestedRetry && callbackStreamRetryCount < 1)) {
									flushBufferedAttemptParts();
									errorsHandledForStreamRetry.add(value.error);
									controller.enqueue(value);
									return;
								}
								if (automaticRetry) automaticStreamRetryCount++;
								else callbackStreamRetryCount++;
								await languageModelStreamReader.cancel(error);
								bufferedAttemptParts = [];
								closeOpenAttemptParts();
								let retryLanguageModelCall;
								try {
									retryLanguageModelCall = await callLanguageModel();
								} catch (retryError) {
									controller.enqueue({
										type: "error",
										error: retryError
									});
									controller.close();
									return;
								}
								request = retryLanguageModelCall.request;
								response = retryLanguageModelCall.response;
								languageModelStreamReader = retryLanguageModelCall.stream.getReader();
								enqueueStreamRetryAttemptBoundary = true;
							}
						},
						cancel(reason) {
							return languageModelStreamReader.cancel(reason);
						}
					});
					startFirstChunkTimeout();
					const streamAfterToolCallbackInvocation = invokeToolCallbacksFromStream({
						stream: languageModelStream,
						tools: stepExecutionTools,
						stepInputMessages: stepMessages,
						abortSignal,
						toolsContext
					});
					const runInTracingChannelSpanInStep = telemetryDispatcher.runInTracingChannelSpan == null ? void 0 : (options) => runInStepTracingChannelContext(() => telemetryDispatcher.runInTracingChannelSpan(options));
					const streamWithToolResults = executeToolsFromStream({
						stream: streamAfterToolCallbackInvocation,
						tools: stepExecutionTools,
						callId,
						messages: stepMessages,
						abortSignal,
						timeout,
						experimental_sandbox: stepSandbox,
						toolsContext,
						toolApproval,
						runtimeContext,
						toolApprovalSecret: experimental_toolApprovalSecret,
						generateId: generateId5,
						onToolExecutionStart: filterNullable(onToolExecutionStart, telemetryDispatcher.onToolExecutionStart),
						onToolExecutionEnd: filterNullable(onToolExecutionEnd, telemetryDispatcher.onToolExecutionEnd),
						executeToolInTelemetryContext: telemetryDispatcher.executeTool,
						runInTracingChannelSpan: runInTracingChannelSpanInStep
					});
					const getStepRequest = () => ({
						...request,
						body: include.requestBody ? request?.body : void 0,
						messages: include.requestMessages ? cloneModelMessages(stepMessages) : void 0
					});
					recordedRequestMessages = getStepRequest().messages ?? [];
					const stepToolCalls = [];
					const stepToolOutputs = [];
					const stepToolApprovalResponses = [];
					let warnings;
					let stepFinishReason = "other";
					let stepRawFinishReason = void 0;
					let hasReceivedTerminalChunk = false;
					let hasReceivedOutputChunk = false;
					let stepUsage = createNullLanguageModelUsage();
					let stepProviderMetadata;
					let stepFirstChunk = true;
					const createModelCallPerformance = () => ({
						responseTimeMs: 0,
						effectiveOutputTokensPerSecond: 0,
						outputTokensPerSecond: void 0,
						inputTokensPerSecond: void 0,
						effectiveTotalTokensPerSecond: 0,
						timeToFirstOutputMs: void 0,
						timeBetweenOutputChunksMs: void 0
					});
					let modelCallPerformance = createModelCallPerformance();
					const toolExecutionMs = {};
					const createStepResponse = () => ({
						id: generateId5(),
						timestamp: /* @__PURE__ */ new Date(),
						modelId: stepModel.modelId
					});
					let stepResponse = createStepResponse();
					const textPartIds = /* @__PURE__ */ new Map();
					const reasoningPartIds = /* @__PURE__ */ new Map();
					const enqueueStepPart = (controller, part) => {
						controller.enqueue(part);
					};
					self.addStream(streamWithToolResults.pipeThrough(new TransformStream({
						async transform(chunk, controller) {
							if (isStreamRetryAttemptBoundaryPart(chunk)) {
								warnings = chunk.warnings;
								stepFinishReason = "other";
								stepRawFinishReason = void 0;
								hasReceivedTerminalChunk = false;
								hasReceivedOutputChunk = false;
								stepUsage = createNullLanguageModelUsage();
								stepProviderMetadata = void 0;
								modelCallPerformance = createModelCallPerformance();
								stepResponse = createStepResponse();
								textPartIds.clear();
								reasoningPartIds.clear();
								controller.enqueue({ [streamRetryBoundarySymbol]: {
									request: getStepRequest(),
									warnings
								} });
								return;
							}
							if (chunk.type === "model-call-start") {
								warnings = chunk.warnings;
								return;
							}
							if (stepFirstChunk) {
								stepFirstChunk = false;
								enqueueStepPart(controller, {
									type: "start-step",
									request: getStepRequest(),
									warnings: warnings ?? []
								});
							}
							const chunkType = chunk.type;
							if (isOutputChunk2(chunk)) {
								const timeoutHandledBeforeBuffering = outputChunksHandledBeforeBuffering.has(chunk);
								if (!hasReceivedOutputChunk && !timeoutHandledBeforeBuffering) clearFirstChunkTimeout();
								hasReceivedOutputChunk = true;
								if (!timeoutHandledBeforeBuffering) resetChunkTimeout();
							}
							switch (chunkType) {
								case "file":
								case "custom":
								case "source":
								case "reasoning-file":
								case "tool-input-start":
								case "tool-input-end":
								case "tool-input-delta":
								case "tool-approval-request":
								case "tool-output-denied":
									enqueueStepPart(controller, chunk);
									break;
								case "text-start": {
									const id = reserveTextPartId(chunk.id);
									textPartIds.set(chunk.id, id);
									enqueueStepPart(controller, {
										...chunk,
										id
									});
									break;
								}
								case "text-delta":
									if (chunk.text.length > 0 || chunk.providerMetadata != null) enqueueStepPart(controller, {
										...chunk,
										id: textPartIds.get(chunk.id) ?? chunk.id
									});
									break;
								case "text-end":
									enqueueStepPart(controller, {
										...chunk,
										id: textPartIds.get(chunk.id) ?? chunk.id
									});
									textPartIds.delete(chunk.id);
									break;
								case "reasoning-start": {
									const id = reserveReasoningPartId(chunk.id);
									reasoningPartIds.set(chunk.id, id);
									enqueueStepPart(controller, {
										...chunk,
										id
									});
									break;
								}
								case "reasoning-delta":
									enqueueStepPart(controller, {
										...chunk,
										id: reasoningPartIds.get(chunk.id) ?? chunk.id
									});
									break;
								case "reasoning-end":
									enqueueStepPart(controller, {
										...chunk,
										id: reasoningPartIds.get(chunk.id) ?? chunk.id
									});
									reasoningPartIds.delete(chunk.id);
									break;
								case "tool-call":
									enqueueStepPart(controller, chunk);
									stepToolCalls.push(chunk);
									break;
								case "tool-approval-response":
									enqueueStepPart(controller, chunk);
									stepToolApprovalResponses.push(chunk);
									break;
								case "tool-result":
									enqueueStepPart(controller, chunk);
									if (!chunk.preliminary) stepToolOutputs.push(chunk);
									break;
								case "tool-error":
									enqueueStepPart(controller, chunk);
									stepToolOutputs.push(chunk);
									break;
								case "tool-execution-end":
									toolExecutionMs[chunk.toolCallId] = chunk.toolExecutionMs;
									break;
								case "model-call-response-metadata":
									stepResponse = {
										id: chunk.id ?? stepResponse.id,
										timestamp: chunk.timestamp ?? stepResponse.timestamp,
										modelId: chunk.modelId ?? stepResponse.modelId
									};
									break;
								case "model-call-end":
									hasReceivedTerminalChunk = true;
									stepUsage = chunk.usage;
									stepFinishReason = chunk.finishReason;
									stepRawFinishReason = chunk.rawFinishReason;
									stepProviderMetadata = chunk.providerMetadata;
									modelCallPerformance = chunk.performance;
									break;
								case "error":
									hasReceivedTerminalChunk = true;
									enqueueStepPart(controller, chunk);
									stepFinishReason = "error";
									break;
								case "raw":
									if (include.rawChunks) enqueueStepPart(controller, chunk);
									break;
								default: throw new Error(`Unknown chunk type: ${chunkType}`);
							}
						},
						async flush(controller) {
							if (!hasReceivedTerminalChunk && !hasReceivedOutputChunk) {
								enqueueStepPart(controller, {
									type: "error",
									error: new NoOutputGeneratedError({ message: "No output generated. The model stream ended without a finish chunk." })
								});
								cleanupStepTimeouts();
								self.closeStream();
								return;
							}
							const stepTimeMs = now2() - stepStartTimestampMs;
							const finishStepPart = {
								type: "finish-step",
								finishReason: stepFinishReason,
								rawFinishReason: stepRawFinishReason,
								usage: stepUsage,
								performance: {
									stepTimeMs,
									toolExecutionMs,
									...modelCallPerformance
								},
								providerMetadata: stepProviderMetadata,
								response: {
									...stepResponse,
									headers: response?.headers
								}
							};
							enqueueStepPart(controller, finishStepPart);
							const combinedUsage = addLanguageModelUsage(usage, stepUsage);
							await stepFinish.promise;
							const clientToolCalls = stepToolCalls.filter((toolCall) => toolCall.providerExecuted !== true);
							const clientToolOutputs = stepToolOutputs.filter((toolOutput) => toolOutput.providerExecuted !== true);
							const deniedToolApprovalResponses = stepToolApprovalResponses.filter((toolApprovalResponse) => toolApprovalResponse.approved === false);
							for (const toolCall of stepToolCalls) {
								if (toolCall.providerExecuted !== true) continue;
								const tool3 = getOwn(stepExecutionTools, toolCall.toolName);
								if (tool3?.type === "provider" && tool3.supportsDeferredResults) {
									if (!stepToolOutputs.some((output2) => (output2.type === "tool-result" || output2.type === "tool-error") && output2.toolCallId === toolCall.toolCallId)) pendingDeferredToolCalls.set(toolCall.toolCallId, { toolName: toolCall.toolName });
								}
							}
							for (const output2 of stepToolOutputs) if (output2.type === "tool-result" || output2.type === "tool-error") pendingDeferredToolCalls.delete(output2.toolCallId);
							cleanupStepTimeouts();
							if (clientToolCalls.length === clientToolOutputs.length + deniedToolApprovalResponses.length && (clientToolCalls.length > 0 || pendingDeferredToolCalls.size > 0) && !await isStopConditionMet({
								stopConditions,
								steps: recordedSteps
							})) try {
								await runInStreamTextTracingChannelContext(() => streamStep({
									currentStep: currentStep + 1,
									usage: combinedUsage
								}));
							} catch (error) {
								enqueueStepPart(controller, {
									type: "error",
									error
								});
								self.closeStream();
							}
							else {
								enqueueStepPart(controller, {
									type: "finish",
									finishReason: stepFinishReason,
									rawFinishReason: stepRawFinishReason,
									totalUsage: combinedUsage
								});
								self.closeStream();
							}
						}
					})), {
						onError: cleanupStepTimeouts,
						onCancel: cleanupStepTimeouts
					});
				} catch (error) {
					cleanupStepTimeouts();
					throw error;
				}
			}
			await runInStreamTextTracingChannelContext(() => streamStep({
				currentStep: 0,
				usage: createNullLanguageModelUsage()
			}));
		})().catch(async (error) => {
			await telemetryDispatcher.onError?.({
				callId,
				error
			});
			self._initialResponseMessages.reject(error);
			markPromiseAsHandled(self._initialResponseMessages.promise);
			self.addStream(new ReadableStream({ start(controller) {
				controller.enqueue({
					type: "error",
					error
				});
				controller.close();
			} }));
			self.closeStream();
		});
	}
	get steps() {
		this.consumeStream();
		return this._steps.promise;
	}
	get finalStep() {
		return this.steps.then((steps) => steps.at(-1));
	}
	get content() {
		return this.steps.then((steps) => steps.flatMap((step) => step.content));
	}
	get warnings() {
		return this.steps.then((steps) => steps.flatMap((step) => step.warnings ?? []));
	}
	get providerMetadata() {
		return this.finalStep.then((step) => step.providerMetadata);
	}
	get text() {
		return this.finalStep.then((step) => step.text);
	}
	get reasoningText() {
		return this.finalStep.then((step) => step.reasoningText);
	}
	get reasoning() {
		return this.finalStep.then((step) => convertToReasoningOutputs(step.reasoning));
	}
	get sources() {
		return this.steps.then((steps) => steps.flatMap((step) => step.sources));
	}
	get files() {
		return this.steps.then((steps) => steps.flatMap((step) => step.files));
	}
	get toolCalls() {
		return this.steps.then((steps) => steps.flatMap((step) => step.toolCalls));
	}
	get staticToolCalls() {
		return this.steps.then((steps) => steps.flatMap((step) => step.staticToolCalls));
	}
	get dynamicToolCalls() {
		return this.steps.then((steps) => steps.flatMap((step) => step.dynamicToolCalls));
	}
	get toolResults() {
		return this.steps.then((steps) => steps.flatMap((step) => step.toolResults));
	}
	get staticToolResults() {
		return this.steps.then((steps) => steps.flatMap((step) => step.staticToolResults));
	}
	get dynamicToolResults() {
		return this.steps.then((steps) => steps.flatMap((step) => step.dynamicToolResults));
	}
	get usage() {
		return this.totalUsage;
	}
	get request() {
		return this.finalStep.then((step) => step.request);
	}
	get response() {
		return this.finalStep.then((step) => step.response);
	}
	get responseMessages() {
		return Promise.all([this._initialResponseMessages.promise, this.steps]).then(([initialResponseMessages, steps]) => [...initialResponseMessages, ...steps.flatMap((step) => step.response.messages)]);
	}
	get totalUsage() {
		this.consumeStream();
		return this._totalUsage.promise;
	}
	get finishReason() {
		this.consumeStream();
		return this._finishReason.promise;
	}
	get rawFinishReason() {
		this.consumeStream();
		return this._rawFinishReason.promise;
	}
	/**
	* Split out a new stream from the original stream.
	* The original stream is replaced to allow for further splitting,
	* since we do not know how many times the stream will be split.
	*
	* Note: this leads to buffering the stream content on the server.
	* However, the LLM results are expected to be small enough to not cause issues.
	*/
	teeStream() {
		const [stream1, stream2] = this.baseStream.tee();
		this.baseStream = stream2;
		return stream1;
	}
	get textStream() {
		return createAsyncIterableStream(toTextStream({ stream: this.stream }));
	}
	get stream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			controller.enqueue(part);
		} })));
	}
	get fullStream() {
		return this.stream;
	}
	rejectResultPromises(error) {
		this.rejectResultPromise({
			delayedPromise: this._finishReason,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._rawFinishReason,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._totalUsage,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._steps,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._initialResponseMessages,
			error
		});
	}
	rejectResultPromise({ delayedPromise, error }) {
		if (delayedPromise.isPending()) {
			delayedPromise.reject(error);
			markPromiseAsHandled(delayedPromise.promise);
		}
	}
	async consumeStream(options) {
		try {
			await consumeStream({
				stream: this.stream,
				onError: (error) => {
					this.rejectResultPromises(error);
					options?.onError?.(error);
				}
			});
		} catch (error) {
			this.rejectResultPromises(error);
			options?.onError?.(error);
		}
	}
	get experimental_partialOutputStream() {
		return this.partialOutputStream;
	}
	get partialOutputStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ partialOutput }, controller) {
			if (partialOutput !== void 0) controller.enqueue(partialOutput);
		} })));
	}
	get elementStream() {
		const transform = this.outputSpecification?.createElementStreamTransform();
		if (transform == null) throw new UnsupportedFunctionalityError({ functionality: `element streams in ${this.outputSpecification?.name ?? "text"} mode` });
		return createAsyncIterableStream(this.teeStream().pipeThrough(transform));
	}
	getOutputPromise() {
		if (this.outputPromise == null) this.outputPromise = this.finalStep.then((step) => {
			return (this.outputSpecification ?? text()).parseCompleteOutput({ text: step.text }, {
				response: step.response,
				usage: step.usage,
				finishReason: step.finishReason
			});
		});
		return this.outputPromise;
	}
	get output() {
		return this.getOutputPromise();
	}
	toUIMessageStream({ originalMessages, generateMessageId, onEnd, onFinish, messageMetadata, sendReasoning, sendSources, sendStart, sendFinish, onError } = {}) {
		return createAsyncIterableStream(toUIMessageStream({
			stream: this.stream,
			tools: this.tools,
			originalMessages,
			generateMessageId,
			onEnd: onEnd ?? onFinish,
			messageMetadata,
			sendReasoning,
			sendSources,
			sendStart,
			sendFinish,
			onError
		}));
	}
	pipeUIMessageStreamToResponse(response, { originalMessages, generateMessageId, onEnd, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		return pipeUIMessageStreamToResponse({
			response,
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onEnd: onEnd ?? onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	pipeTextStreamToResponse(response, init) {
		return pipeTextStreamToResponse({
			response,
			stream: this.textStream,
			...init
		});
	}
	toUIMessageStreamResponse({ originalMessages, generateMessageId, onEnd, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		return createUIMessageStreamResponse({
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onEnd: onEnd ?? onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	toTextStreamResponse(init) {
		return createTextStreamResponse({
			stream: this.textStream,
			...init
		});
	}
};
var ToolLoopAgent = class {
	constructor(settings) {
		this.version = "agent-v1";
		const { onFinish, onEnd = onFinish } = settings;
		this.settings = {
			...settings,
			onEnd
		};
	}
	/**
	* The id of the agent.
	*/
	get id() {
		return this.settings.id;
	}
	/**
	* The tools that the agent can use.
	*/
	get tools() {
		return this.settings.tools;
	}
	async prepareCall(options) {
		if (this.settings.callOptionsSchema != null && options.options !== void 0) {
			const validatedOptions = await validateTypes({
				value: options.options,
				schema: this.settings.callOptionsSchema,
				context: { field: "options" }
			});
			options = {
				...options,
				options: validatedOptions
			};
		}
		const { onStart: _settingsStableOnStart, experimental_onStart: _settingsExperimentalOnStart, onStepStart: _settingsStableOnStepStart, experimental_onStepStart: _settingsExperimentalOnStepStart, onToolExecutionStart: _settingsOnToolExecutionStart, onToolExecutionEnd: _settingsOnToolExecutionEnd, onStepEnd: _settingsOnStepEnd, onStepFinish: _settingsOnStepFinish, onFinish: _settingsOnFinish, onEnd: _settingsOnEnd, ...settingsWithoutCallbacks } = this.settings;
		const baseCallArgs = {
			...settingsWithoutCallbacks,
			stopWhen: this.settings.stopWhen ?? isStepCount(20),
			...options
		};
		const { instructions, allowSystemInMessages, messages, prompt, runtimeContext, ...callArgs } = await this.settings.prepareCall?.(baseCallArgs) ?? baseCallArgs;
		const promptArgs = {
			instructions,
			allowSystemInMessages,
			messages,
			prompt
		};
		if (runtimeContext === void 0) return {
			...callArgs,
			...promptArgs
		};
		return {
			...callArgs,
			runtimeContext,
			...promptArgs
		};
	}
	/**
	* Tags outgoing requests so usage can be attributed to ToolLoopAgent. Chains
	* with the `ai/<version>` and `ai-sdk/<provider>/<version>` suffixes added
	* downstream by generateText/streamText and the provider.
	*/
	agentHeaders(preparedCall) {
		return withUserAgentSuffix(preparedCall.headers ?? {}, "ai-sdk-agent/tool-loop");
	}
	/**
	* Generates an output from the agent (non-streaming).
	*/
	async generate({ abortSignal, timeout, experimental_sandbox: sandbox, onStart, experimental_onStart, onStepStart, experimental_onStepStart, onToolExecutionStart, onToolExecutionEnd, onStepEnd, onStepFinish, onFinish, onEnd = onFinish, ...options }) {
		const generate = generateText;
		const preparedCall = await this.prepareCall({
			...options,
			experimental_sandbox: sandbox
		});
		const callbackArgs = {
			abortSignal,
			timeout: timeout ?? preparedCall.timeout,
			experimental_sandbox: sandbox,
			onStart: mergeCallbacks(this.settings.onStart ?? this.settings.experimental_onStart, onStart ?? experimental_onStart),
			onStepStart: mergeCallbacks(this.settings.onStepStart ?? this.settings.experimental_onStepStart, onStepStart ?? experimental_onStepStart),
			onToolExecutionStart: mergeCallbacks(this.settings.onToolExecutionStart, onToolExecutionStart),
			onToolExecutionEnd: mergeCallbacks(this.settings.onToolExecutionEnd, onToolExecutionEnd),
			onStepEnd: mergeCallbacks(this.settings.onStepEnd ?? this.settings.onStepFinish, onStepEnd ?? onStepFinish),
			onEnd: mergeCallbacks(this.settings.onEnd, onEnd)
		};
		return await generate({
			...preparedCall,
			...callbackArgs,
			headers: this.agentHeaders(preparedCall)
		});
	}
	/**
	* Streams an output from the agent (streaming).
	*/
	async stream({ abortSignal, timeout, experimental_sandbox: sandbox, experimental_transform, onStart, experimental_onStart, onStepStart, experimental_onStepStart, onToolExecutionStart, onToolExecutionEnd, onStepEnd, onStepFinish, onFinish, onEnd = onFinish, ...options }) {
		const stream = streamText;
		const preparedCall = await this.prepareCall({
			...options,
			experimental_sandbox: sandbox
		});
		const callbackArgs = {
			abortSignal,
			timeout: timeout ?? preparedCall.timeout,
			experimental_sandbox: sandbox,
			experimental_transform,
			onStart: mergeCallbacks(this.settings.onStart ?? this.settings.experimental_onStart, onStart ?? experimental_onStart),
			onStepStart: mergeCallbacks(this.settings.onStepStart ?? this.settings.experimental_onStepStart, onStepStart ?? experimental_onStepStart),
			onToolExecutionStart: mergeCallbacks(this.settings.onToolExecutionStart, onToolExecutionStart),
			onToolExecutionEnd: mergeCallbacks(this.settings.onToolExecutionEnd, onToolExecutionEnd),
			onStepEnd: mergeCallbacks(this.settings.onStepEnd ?? this.settings.onStepFinish, onStepEnd ?? onStepFinish),
			onEnd: mergeCallbacks(this.settings.onEnd, onEnd)
		};
		return await stream({
			...preparedCall,
			...callbackArgs,
			headers: this.agentHeaders(preparedCall)
		});
	}
};
function createUIMessageStream({ execute, onError = () => "An error occurred.", originalMessages, onStepEnd, onStepFinish, onEnd, onFinish, generateId: generateId5 = generateId }) {
	let controller;
	const ongoingStreamPromises = [];
	let outcome = { status: "unknown" };
	const stream = new ReadableStream({ start(controllerArg) {
		controller = controllerArg;
	} });
	function safeEnqueue(data) {
		try {
			controller.enqueue(data);
		} catch {}
	}
	function setOutcome(newOutcome) {
		if (outcome.status === "unknown" && newOutcome.status !== "unknown") outcome = newOutcome;
	}
	function failOutcome(error) {
		outcome = {
			status: "failed",
			error
		};
	}
	function safeError(error) {
		try {
			controller.error(error);
		} catch {}
	}
	function handleError(error) {
		failOutcome(error);
		let errorText;
		try {
			errorText = onError(error);
		} catch (onErrorError) {
			failOutcome(onErrorError);
			safeError(onErrorError);
			return;
		}
		safeEnqueue({
			type: "error",
			errorText
		});
	}
	try {
		const result = execute({ writer: {
			write(part) {
				safeEnqueue(part);
			},
			merge(streamArg) {
				ongoingStreamPromises.push((async () => {
					const reader = streamArg.getReader();
					while (true) {
						const { done, value } = await reader.read();
						if (done) break;
						safeEnqueue(value);
					}
				})().catch((error) => {
					handleError(error);
				}));
			},
			setOutcome,
			onError
		} });
		if (result) ongoingStreamPromises.push(result.catch((error) => {
			handleError(error);
		}));
	} catch (error) {
		handleError(error);
	}
	(async () => {
		while (ongoingStreamPromises.length > 0) await ongoingStreamPromises.shift();
	})().finally(() => {
		try {
			controller.close();
		} catch {}
	});
	return handleUIMessageStreamFinish({
		stream,
		messageId: generateId5(),
		originalMessages,
		onStepEnd: onStepEnd ?? onStepFinish,
		onEnd: onEnd ?? onFinish,
		onError,
		getOutcome: () => outcome
	});
}
function createUIMessageSnapshot(message) {
	const textByPartIndex = /* @__PURE__ */ new Map();
	const messageWithoutText = {
		...message,
		parts: message.parts.map((part, index) => {
			if (part.type === "text" || part.type === "reasoning") {
				textByPartIndex.set(index, part.text);
				return {
					...part,
					text: ""
				};
			}
			return part;
		})
	};
	const snapshot = structuredClone(messageWithoutText);
	for (const [index, text2] of textByPartIndex) {
		const part = snapshot.parts[index];
		if (part.type === "text" || part.type === "reasoning") part.text = text2;
	}
	return snapshot;
}
function readUIMessageStream({ message, stream, onError, terminateOnError = false }) {
	let controller;
	let hasErrored = false;
	let isCancelled = false;
	const abortController = new AbortController();
	const outputStream = new ReadableStream({
		start(controllerParam) {
			controller = controllerParam;
		},
		cancel() {
			isCancelled = true;
			abortController.abort();
		}
	});
	const state = createStreamingUIMessageState({
		messageId: message?.id ?? "",
		lastMessage: message
	});
	const handleError = (error) => {
		onError?.(error);
		if (!hasErrored && terminateOnError) {
			hasErrored = true;
			controller?.error(error);
		}
	};
	consumeStream({
		stream: processUIMessageStream({
			stream,
			runUpdateMessageJob(job) {
				return job({
					state,
					write: () => {
						if (!isCancelled) controller?.enqueue(createUIMessageSnapshot(state.message));
					}
				});
			},
			onError: handleError
		}),
		onError: handleError,
		abortSignal: abortController.signal
	}).finally(() => {
		if (!hasErrored && !isCancelled) controller?.close();
	});
	return createAsyncIterableStream(outputStream);
}
async function convertToModelMessages(messages, options) {
	const modelMessages = [];
	warnIfUIMessageHasDeprecatedRawInput(messages);
	if (options?.ignoreIncompleteToolCalls) messages = messages.map((message) => ({
		...message,
		parts: message.parts.filter((part) => !isToolUIPart(part) || part.state === "approval-responded" || part.state === "output-available" && part.preliminary !== true || part.state === "output-error" || part.state === "output-denied")
	}));
	for (const message of messages) switch (message.role) {
		case "system": {
			const textParts = message.parts.filter((part) => part.type === "text");
			const providerMetadata = textParts.reduce((acc, part) => {
				if (part.providerMetadata != null) return {
					...acc,
					...part.providerMetadata
				};
				return acc;
			}, {});
			modelMessages.push({
				role: "system",
				content: textParts.map((part) => part.text).join(""),
				...Object.keys(providerMetadata).length > 0 ? { providerOptions: providerMetadata } : {}
			});
			break;
		}
		case "user":
			modelMessages.push({
				role: "user",
				content: message.parts.map((part) => {
					if (isTextUIPart(part)) return {
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isFileUIPart(part)) return {
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.providerReference != null ? {
							type: "reference",
							reference: part.providerReference
						} : {
							type: "url",
							url: new URL(part.url)
						},
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isDataUIPart(part)) return options?.convertDataPart?.(part);
				}).filter(isNonNullable)
			});
			break;
		case "assistant":
			if (message.parts != null) {
				let block = [];
				async function processBlock() {
					if (block.length === 0) return;
					const content = [];
					for (const part of block) if (isTextUIPart(part)) content.push({
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isCustomContentUIPart(part)) content.push({
						type: "custom",
						kind: part.kind,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isFileUIPart(part)) content.push({
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.providerReference != null ? {
							type: "reference",
							reference: part.providerReference
						} : {
							type: "url",
							url: new URL(part.url)
						},
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isReasoningFileUIPart(part)) content.push({
						type: "reasoning-file",
						data: {
							type: "url",
							url: new URL(part.url)
						},
						mediaType: part.mediaType,
						providerOptions: part.providerMetadata
					});
					else if (isReasoningUIPart(part)) content.push({
						type: "reasoning",
						text: part.text,
						providerOptions: part.providerMetadata
					});
					else if (isToolUIPart(part)) {
						const toolName = getToolName(part);
						if (part.state !== "input-streaming") {
							const callProviderMetadata = part.callProviderMetadata ?? (part.state === "output-error" ? part.resultProviderMetadata : void 0);
							content.push({
								type: "tool-call",
								toolCallId: part.toolCallId,
								toolName,
								input: part.state === "output-error" ? part.input ?? ("rawInput" in part ? part.rawInput : void 0) : part.input,
								providerExecuted: part.providerExecuted,
								...callProviderMetadata != null ? { providerOptions: callProviderMetadata } : {}
							});
							if (part.approval != null) content.push({
								type: "tool-approval-request",
								approvalId: part.approval.id,
								toolCallId: part.toolCallId,
								isAutomatic: part.approval.isAutomatic,
								...part.approval.requestReason != null ? { reason: part.approval.requestReason } : {},
								...Object.prototype.hasOwnProperty.call(part.approval, "inputSchemaInput") ? { inputSchemaInput: part.approval.inputSchemaInput } : {},
								...part.approval.signature != null ? { signature: part.approval.signature } : {}
							});
							if (part.providerExecuted === true && part.state !== "approval-responded" && (part.state === "output-available" || part.state === "output-error")) {
								const resultProviderMetadata = part.resultProviderMetadata ?? part.callProviderMetadata;
								content.push({
									type: "tool-result",
									toolCallId: part.toolCallId,
									toolName,
									output: await createToolModelOutput({
										toolCallId: part.toolCallId,
										input: part.input,
										output: part.state === "output-error" ? part.errorText : part.output,
										tool: getOwn(options?.tools, toolName),
										errorMode: part.state === "output-error" ? "json" : "none"
									}),
									...resultProviderMetadata != null ? { providerOptions: resultProviderMetadata } : {}
								});
							}
						}
					} else if (isDataUIPart(part)) {
						const dataPart = options?.convertDataPart?.(part);
						if (dataPart != null) content.push(dataPart);
					} else throw new Error(`Unsupported part: ${part}`);
					if (content.length > 0) modelMessages.push({
						role: "assistant",
						content
					});
					const toolParts = block.filter((part) => isToolUIPart(part) && (part.providerExecuted !== true || part.approval?.approved != null));
					if (toolParts.length > 0) {
						const content2 = [];
						for (const toolPart of toolParts) {
							if (toolPart.approval?.approved != null) content2.push({
								type: "tool-approval-response",
								approvalId: toolPart.approval.id,
								approved: toolPart.approval.approved,
								reason: toolPart.approval.reason,
								providerExecuted: toolPart.providerExecuted
							});
							if (toolPart.state === "approval-responded" && toolPart.approval?.approved === false) content2.push({
								type: "tool-result",
								toolCallId: toolPart.toolCallId,
								toolName: getToolName(toolPart),
								output: {
									type: "execution-denied",
									reason: toolPart.approval.reason
								},
								...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
							});
							if (toolPart.providerExecuted === true) continue;
							switch (toolPart.state) {
								case "output-denied":
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName: getToolName(toolPart),
										output: {
											type: "error-text",
											value: toolPart.approval?.reason ?? "Tool call execution denied."
										},
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								case "output-error":
								case "output-available": {
									const toolName = getToolName(toolPart);
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName,
										output: await createToolModelOutput({
											toolCallId: toolPart.toolCallId,
											input: toolPart.input,
											output: toolPart.state === "output-error" ? toolPart.errorText : toolPart.output,
											tool: getOwn(options?.tools, toolName),
											errorMode: toolPart.state === "output-error" ? "text" : "none"
										}),
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								}
							}
						}
						if (content2.length > 0) modelMessages.push({
							role: "tool",
							content: content2
						});
					}
					block = [];
				}
				for (const part of message.parts) if (isCustomContentUIPart(part) || isTextUIPart(part) || isReasoningUIPart(part) || isReasoningFileUIPart(part) || isFileUIPart(part) || isToolUIPart(part) || isDataUIPart(part)) block.push(part);
				else if (part.type === "step-start") await processBlock();
				await processBlock();
				break;
			}
			break;
		default: {
			const _exhaustiveCheck = message.role;
			throw new MessageConversionError({
				originalMessage: message,
				message: `Unsupported role: ${_exhaustiveCheck}`
			});
		}
	}
	return modelMessages;
}
var toolMetadataSchema2 = z.record(z.string(), jsonValueSchema.optional());
var providerReferenceSchema2 = z.record(z.string(), z.string());
function isEmptyObject(value) {
	return value != null && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0;
}
function asDynamicToolPart(toolPart) {
	const { type, ...part } = toolPart;
	return {
		...part,
		type: "dynamic-tool",
		toolName: type.slice(5)
	};
}
function getToolPartInputSchemaInput(toolPart) {
	return toolPart.approval != null && Object.prototype.hasOwnProperty.call(toolPart.approval, "inputSchemaInput") ? { value: toolPart.approval.inputSchemaInput } : void 0;
}
var uiMessagesSchema = lazySchema(() => {
	const approvalRequestedSchema = z.object({
		id: z.string(),
		approved: z.never().optional(),
		descriptor: z.unknown().optional(),
		requestReason: z.string().optional(),
		reason: z.never().optional(),
		isAutomatic: z.boolean().optional(),
		signature: z.string().optional(),
		inputSchemaInput: z.unknown().optional()
	});
	const approvalRespondedSchema = approvalRequestedSchema.extend({
		approved: z.boolean(),
		reason: z.string().optional()
	});
	const approvalGrantedSchema = approvalRespondedSchema.extend({ approved: z.literal(true) });
	const approvalDeniedSchema = approvalRespondedSchema.extend({ approved: z.literal(false) });
	return zodSchema(z.array(z.object({
		id: z.string(),
		role: z.enum([
			"system",
			"user",
			"assistant"
		]),
		metadata: z.unknown().optional(),
		parts: z.array(z.union([
			z.object({
				type: z.literal("text"),
				text: z.string(),
				state: z.enum(["streaming", "done"]).optional(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("reasoning"),
				id: z.string().optional(),
				text: z.string(),
				state: z.enum(["streaming", "done"]).optional(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("custom"),
				kind: z.string(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("source-url"),
				sourceId: z.string(),
				url: z.string(),
				title: z.string().optional(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("source-document"),
				sourceId: z.string(),
				mediaType: z.string(),
				title: z.string(),
				filename: z.string().optional(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("file"),
				mediaType: z.string(),
				filename: z.string().optional(),
				url: z.string(),
				providerReference: providerReferenceSchema2.optional(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({
				type: z.literal("reasoning-file"),
				mediaType: z.string(),
				url: z.string(),
				providerMetadata: providerMetadataSchema.optional()
			}),
			z.object({ type: z.literal("step-start") }),
			z.object({
				type: z.string().startsWith("data-"),
				id: z.string().optional(),
				data: z.unknown()
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("input-streaming"),
				input: z.unknown().optional(),
				providerExecuted: z.boolean().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				approval: z.never().optional()
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("input-available"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: z.never().optional()
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("approval-requested"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalRequestedSchema
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("approval-responded"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalRespondedSchema
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("output-available"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.unknown(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				resultProviderMetadata: providerMetadataSchema.optional(),
				preliminary: z.boolean().optional(),
				approval: approvalGrantedSchema.optional()
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("output-error"),
				input: z.unknown().optional(),
				rawInput: z.unknown().optional(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.string(),
				callProviderMetadata: providerMetadataSchema.optional(),
				resultProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalGrantedSchema.optional()
			}),
			z.object({
				type: z.literal("dynamic-tool"),
				toolName: z.string(),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("output-denied"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalDeniedSchema
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("input-streaming"),
				providerExecuted: z.boolean().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				input: z.unknown().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				approval: z.never().optional()
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("input-available"),
				providerExecuted: z.boolean().optional(),
				input: z.unknown(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: z.never().optional()
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("approval-requested"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalRequestedSchema
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("approval-responded"),
				input: z.unknown(),
				providerExecuted: z.boolean().optional(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalRespondedSchema
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("output-available"),
				providerExecuted: z.boolean().optional(),
				input: z.unknown(),
				output: z.unknown(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				resultProviderMetadata: providerMetadataSchema.optional(),
				preliminary: z.boolean().optional(),
				approval: approvalGrantedSchema.optional()
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("output-error"),
				providerExecuted: z.boolean().optional(),
				input: z.unknown().optional(),
				rawInput: z.unknown().optional(),
				output: z.never().optional(),
				errorText: z.string(),
				callProviderMetadata: providerMetadataSchema.optional(),
				resultProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalGrantedSchema.optional()
			}),
			z.object({
				type: z.string().startsWith("tool-"),
				toolCallId: z.string(),
				title: z.string().optional(),
				toolMetadata: toolMetadataSchema2.optional(),
				state: z.literal("output-denied"),
				providerExecuted: z.boolean().optional(),
				input: z.unknown(),
				output: z.never().optional(),
				errorText: z.never().optional(),
				callProviderMetadata: providerMetadataSchema.optional(),
				approval: approvalDeniedSchema
			})
		]))
	}).superRefine((message, context) => {
		if (message.role !== "assistant" && message.parts.length === 0) context.addIssue({
			origin: "array",
			code: "too_small",
			minimum: 1,
			inclusive: true,
			input: message.parts,
			path: ["parts"],
			message: "Message must contain at least one part"
		});
	})).nonempty("Messages array must not be empty"));
});
async function safeValidateUIMessagesInternal({ messages, metadataSchema, dataSchemas, tools, experimental_refineToolInput }, { convertMissingTerminalToolsToDynamic }) {
	try {
		if (messages == null) return {
			success: false,
			error: new InvalidArgumentError({
				parameter: "messages",
				value: messages,
				message: "messages parameter must be provided"
			})
		};
		const validatedMessages = await validateTypes({
			value: messages,
			schema: uiMessagesSchema
		});
		warnIfUIMessageHasDeprecatedRawInput(validatedMessages);
		if (metadataSchema) for (const [msgIdx, message] of validatedMessages.entries()) message.metadata = await validateTypes({
			value: message.metadata,
			schema: metadataSchema,
			context: {
				field: `messages[${msgIdx}].metadata`,
				entityId: message.id
			}
		});
		const shouldValidateToolParts = tools != null || convertMissingTerminalToolsToDynamic;
		if (dataSchemas || shouldValidateToolParts) for (const [msgIdx, message] of validatedMessages.entries()) for (const [partIdx, part] of message.parts.entries()) {
			if (dataSchemas && part.type.startsWith("data-")) {
				const dataPart = part;
				const dataName = dataPart.type.slice(5);
				const dataSchema = dataSchemas[dataName];
				if (!dataSchema) return {
					success: false,
					error: new TypeValidationError({
						value: dataPart.data,
						cause: `No data schema found for data part ${dataName}`,
						context: {
							field: `messages[${msgIdx}].parts[${partIdx}].data`,
							entityName: dataName,
							entityId: dataPart.id
						}
					})
				};
				dataPart.data = await validateTypes({
					value: dataPart.data,
					schema: dataSchema,
					context: {
						field: `messages[${msgIdx}].parts[${partIdx}].data`,
						entityName: dataName,
						entityId: dataPart.id
					}
				});
			}
			if (shouldValidateToolParts && part.type.startsWith("tool-")) {
				const toolPart = part;
				const toolName = toolPart.type.slice(5);
				const tool3 = tools == null ? void 0 : getOwn(tools, toolName);
				const isTerminal = toolPart.state === "output-available" || toolPart.state === "output-error" || toolPart.state === "output-denied";
				if (!tool3 && isTerminal) {
					if (tools != null || convertMissingTerminalToolsToDynamic) message.parts[partIdx] = asDynamicToolPart(toolPart);
					continue;
				}
				if (!tool3) return {
					success: false,
					error: new TypeValidationError({
						value: toolPart.input,
						cause: `No tool schema found for tool part ${toolName}`,
						context: {
							field: `messages[${msgIdx}].parts[${partIdx}].input`,
							entityName: toolName,
							entityId: toolPart.toolCallId
						}
					})
				};
				const inputValidationContext = {
					field: `messages[${msgIdx}].parts[${partIdx}].input`,
					entityName: toolName,
					entityId: toolPart.toolCallId
				};
				const inputSchemaInput = getToolPartInputSchemaInput(toolPart);
				const inputToValidate = inputSchemaInput == null ? toolPart.input : inputSchemaInput.value;
				let convertToDynamic = false;
				if (toolPart.state !== "input-streaming" && (toolPart.state !== "output-error" || inputSchemaInput != null || toolPart.input !== void 0)) {
					const result = await safeValidateTypes({
						value: inputToValidate,
						schema: tool3.inputSchema,
						context: inputValidationContext
					});
					let inputError;
					if (!result.success) inputError = result.error;
					else if (inputSchemaInput != null) try {
						const refine = getOwn(experimental_refineToolInput, toolName);
						if (!isDeepEqualData(refine == null ? result.value : await refine(result.value), toolPart.input)) inputError = new TypeValidationError({
							value: toolPart.input,
							cause: "Tool input does not match the output reconstructed from inputSchemaInput.",
							context: inputValidationContext
						});
					} catch (error) {
						inputError = new TypeValidationError({
							value: inputToValidate,
							cause: error,
							context: inputValidationContext
						});
					}
					if (inputError != null) {
						if (toolPart.state === "output-error" || toolPart.state === "output-available" && isEmptyObject(toolPart.input)) convertToDynamic = true;
						else throw inputError;
					}
				}
				if (toolPart.state === "output-available" && tool3.outputSchema) await validateTypes({
					value: toolPart.output,
					schema: tool3.outputSchema,
					context: {
						field: `messages[${msgIdx}].parts[${partIdx}].output`,
						entityName: toolName,
						entityId: toolPart.toolCallId
					}
				});
				if (convertToDynamic) message.parts[partIdx] = asDynamicToolPart(toolPart);
			}
		}
		return {
			success: true,
			data: validatedMessages
		};
	} catch (error) {
		return {
			success: false,
			error
		};
	}
}
async function safeValidateUIMessages(options) {
	return safeValidateUIMessagesInternal(options, { convertMissingTerminalToolsToDynamic: false });
}
async function validateUIMessages(options) {
	const response = await safeValidateUIMessages(options);
	if (!response.success) throw response.error;
	return response.data;
}
async function validateUIMessagesForAgent(options) {
	const response = await safeValidateUIMessagesInternal(options, { convertMissingTerminalToolsToDynamic: true });
	if (!response.success) throw response.error;
	return response.data;
}
async function createAgentUIStream({ agent, uiMessages, options, abortSignal, timeout, experimental_sandbox: sandbox, experimental_transform, onStepEnd, onStepFinish, ...uiMessageStreamOptions }) {
	const validatedMessages = await validateUIMessagesForAgent({
		messages: uiMessages,
		tools: agent.tools
	});
	const modelMessages = await convertToModelMessages(validatedMessages, { tools: agent.tools });
	const result = await agent.stream({
		prompt: modelMessages,
		options,
		abortSignal,
		timeout,
		experimental_sandbox: sandbox,
		experimental_transform,
		onStepEnd: onStepEnd ?? onStepFinish
	});
	const originalMessages = uiMessageStreamOptions.originalMessages ?? validatedMessages;
	return createAsyncIterableStream(toUIMessageStream({
		...uiMessageStreamOptions,
		originalMessages,
		stream: result.stream,
		tools: agent.tools
	}));
}
async function createAgentUIStreamResponse({ headers, status, statusText, consumeSseStream, ...options }) {
	return createUIMessageStreamResponse({
		headers,
		status,
		statusText,
		consumeSseStream,
		stream: await createAgentUIStream(options)
	});
}
async function pipeAgentUIStreamToResponse({ response, headers, status, statusText, consumeSseStream, ...options }) {
	return pipeUIMessageStreamToResponse({
		response,
		headers,
		status,
		statusText,
		consumeSseStream,
		stream: await createAgentUIStream(options)
	});
}
function convertDataContentToBase64String(content) {
	if (typeof content === "string") return content;
	if (content instanceof ArrayBuffer) return convertUint8ArrayToBase64(new Uint8Array(content));
	return convertUint8ArrayToBase64(content);
}
function convertDataContentToUint8Array(content) {
	if (content instanceof Uint8Array) return content;
	if (typeof content === "string") try {
		return convertBase64ToUint8Array(content);
	} catch (error) {
		throw new InvalidDataContentError({
			message: "Invalid data content. Content string is not a base64-encoded media.",
			content,
			cause: error
		});
	}
	if (content instanceof ArrayBuffer) return new Uint8Array(content);
	throw new InvalidDataContentError({ content });
}
var gatewayCostMetadataKeys = [
	"cost",
	"gatewayCost",
	"inferenceCost",
	"inputInferenceCost",
	"marketCost",
	"outputInferenceCost",
	"surchargeCost"
];
var RetryableNoImageResultError = class extends Error {
	constructor() {
		super("No image generated.");
		this.name = "RetryableNoImageResultError";
	}
};
async function generateImage({ model: modelArg, prompt: promptArg, n = 1, maxImagesPerCall, size, aspectRatio, seed, providerOptions, maxRetries: maxRetriesArg, abortSignal, headers }) {
	const model = resolveImageModel(modelArg);
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const { retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal,
		additionalRetryableError: (error) => error instanceof RetryableNoImageResultError
	});
	const maxImagesPerCallWithDefault = maxImagesPerCall ?? await invokeModelMaxImagesPerCall(model) ?? 1;
	const callCount = Math.ceil(n / maxImagesPerCallWithDefault);
	const callImageCounts = Array.from({ length: callCount }, (_, i) => {
		if (i < callCount - 1) return maxImagesPerCallWithDefault;
		const remainder = n % maxImagesPerCallWithDefault;
		return remainder === 0 ? maxImagesPerCallWithDefault : remainder;
	});
	const results = (await Promise.all(callImageCounts.map(async (callImageCount) => {
		const callResults = [];
		try {
			await retry(async () => {
				const { prompt, files, mask } = normalizePrompt(promptArg);
				const result = await model.doGenerate({
					prompt,
					files,
					mask,
					n: callImageCount,
					abortSignal,
					headers: headersWithUserAgent,
					size,
					aspectRatio,
					seed,
					providerOptions: providerOptions ?? {}
				});
				callResults.push(result);
				if (result.images.length === 0 && result.isRetryable !== false) throw new RetryableNoImageResultError();
				return result;
			});
			return callResults;
		} catch (error) {
			if ((error instanceof RetryableNoImageResultError ? error : RetryError.isInstance(error) && error.lastError instanceof RetryableNoImageResultError ? error.lastError : void 0) != null) return callResults;
			throw error;
		}
	}))).flat();
	const images = [];
	const calls = [];
	const warnings = [];
	const responses = [];
	const providerMetadata = {};
	let totalUsage = {
		inputTokens: void 0,
		outputTokens: void 0,
		totalTokens: void 0
	};
	for (const result of results) {
		const callImages = result.images.map((image, index) => new DefaultGeneratedFile({
			data: image,
			mediaType: detectMediaType({
				data: image,
				topLevelType: "image"
			}) ?? "image/png",
			providerMetadata: getImageProviderMetadata(result.providerMetadata, index)
		}));
		images.push(...callImages);
		calls.push({
			images: callImages,
			providerMetadata: result.providerMetadata,
			response: result.response,
			warnings: result.warnings,
			usage: result.usage
		});
		warnings.push(...result.warnings);
		if (result.usage != null) totalUsage = addImageModelUsage(totalUsage, result.usage);
		if (result.providerMetadata) for (const [providerName, metadata] of Object.entries(result.providerMetadata)) if (providerName === "gateway") {
			const currentEntry = providerMetadata[providerName];
			if (currentEntry != null && typeof currentEntry === "object") {
				const currentGatewayMetadata = currentEntry;
				const newGatewayMetadata = metadata;
				providerMetadata[providerName] = {
					...currentEntry,
					...metadata,
					...Object.fromEntries(gatewayCostMetadataKeys.flatMap((key) => {
						const total = addDecimalStrings(currentGatewayMetadata[key], newGatewayMetadata[key]);
						return total == null ? [] : [[key, total]];
					}))
				};
			} else providerMetadata[providerName] = { ...metadata };
			const imagesValue = providerMetadata[providerName].images;
			if (Array.isArray(imagesValue) && imagesValue.length === 0) delete providerMetadata[providerName].images;
		} else {
			providerMetadata[providerName] ??= { images: [] };
			providerMetadata[providerName].images.push(...metadata.images);
		}
		responses.push(result.response);
	}
	logWarnings({
		warnings,
		provider: model.provider,
		model: model.modelId
	});
	if (!images.length) throw new NoImageGeneratedError({
		calls,
		responses
	});
	return new DefaultGenerateImageResult({
		images,
		calls,
		warnings,
		responses,
		providerMetadata,
		usage: totalUsage
	});
}
var DefaultGenerateImageResult = class {
	constructor(options) {
		this.images = options.images;
		this.calls = options.calls;
		this.warnings = options.warnings;
		this.responses = options.responses;
		this.providerMetadata = options.providerMetadata;
		this.usage = options.usage;
	}
	get image() {
		return this.images[0];
	}
};
function getImageProviderMetadata(providerMetadata, imageIndex) {
	if (providerMetadata == null) return;
	let imageMetadata;
	for (const [providerName, metadata] of Object.entries(providerMetadata)) {
		const value = metadata.images?.[imageIndex];
		if (isJSONObject(value) && !Array.isArray(value)) (imageMetadata ??= {})[providerName] = value;
	}
	return imageMetadata;
}
async function invokeModelMaxImagesPerCall(model) {
	if (!(model.maxImagesPerCall instanceof Function)) return model.maxImagesPerCall;
	return model.maxImagesPerCall({ modelId: model.modelId });
}
function addDecimalStrings(value1, value2) {
	if (typeof value1 !== "string" || typeof value2 !== "string" || !/^\d+(?:\.\d+)?$/.test(value1) || !/^\d+(?:\.\d+)?$/.test(value2)) return;
	const [integer1, fraction1 = ""] = value1.split(".");
	const [integer2, fraction2 = ""] = value2.split(".");
	const precision = Math.max(fraction1.length, fraction2.length);
	const sumString = (BigInt(integer1 + fraction1.padEnd(precision, "0")) + BigInt(integer2 + fraction2.padEnd(precision, "0"))).toString().padStart(precision + 1, "0");
	return precision === 0 ? sumString : `${sumString.slice(0, -precision)}.${sumString.slice(-precision)}`.replace(/\.?0+$/, "");
}
function normalizePrompt(prompt) {
	if (typeof prompt === "string") return {
		prompt,
		files: void 0,
		mask: void 0
	};
	return {
		prompt: prompt.text,
		files: prompt.images.map(toImageModelV4File),
		mask: prompt.mask ? toImageModelV4File(prompt.mask) : void 0
	};
}
function toImageModelV4File(dataContent) {
	if (typeof dataContent === "string" && dataContent.startsWith("http")) return {
		type: "url",
		url: dataContent
	};
	if (typeof dataContent === "string" && dataContent.startsWith("data:")) {
		const { mediaType: dataUrlMediaType, base64Content } = splitDataUrl(dataContent);
		if (base64Content != null) {
			const uint8Data2 = convertBase64ToUint8Array(base64Content);
			return {
				type: "file",
				data: uint8Data2,
				mediaType: dataUrlMediaType || detectMediaType({
					data: uint8Data2,
					topLevelType: "image"
				}) || "image/png"
			};
		}
	}
	const uint8Data = convertDataContentToUint8Array(dataContent);
	return {
		type: "file",
		data: uint8Data,
		mediaType: detectMediaType({
			data: uint8Data,
			topLevelType: "image"
		}) || "image/png"
	};
}
async function cancelBatch({ provider, batch, providerOptions, abortSignal, headers, timeout }) {
	const batchApi = resolveBatchApi(provider);
	validateBatchReference({
		batchApi,
		batch
	});
	if (batchApi.doCancelBatch == null) throw new UnsupportedFunctionalityError({
		functionality: "batch cancellation",
		message: "The provider does not support batch cancellation."
	});
	const operationAbortSignal = mergeAbortSignals(abortSignal, getTotalTimeoutMs(timeout));
	try {
		return await batchApi.doCancelBatch({
			batchId: batch.id,
			providerOptions,
			abortSignal: operationAbortSignal,
			headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`)
		});
	} catch (error) {
		throw wrapGatewayError(error);
	}
}
async function listBatches({ provider, providerOptions, limit, cursor, maxRetries, abortSignal, headers, timeout } = {}) {
	const batchApi = resolveBatchApi(provider);
	const doListBatches = batchApi.doListBatches?.bind(batchApi);
	if (doListBatches == null) throw new UnsupportedFunctionalityError({
		functionality: "batch listing",
		message: "The provider does not support listing batches."
	});
	const operationAbortSignal = mergeAbortSignals(abortSignal, getTotalTimeoutMs(timeout));
	const { retry } = prepareRetries({
		maxRetries,
		abortSignal: operationAbortSignal
	});
	try {
		const { batches, nextCursor, providerMetadata } = await retry(() => doListBatches({
			providerOptions,
			abortSignal: operationAbortSignal,
			headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`),
			...limit != null && { limit },
			...cursor != null && { cursor }
		}));
		return {
			batches: batches.map(({ batchId, ...status }) => ({
				version: 2,
				id: batchId,
				provider: batchApi.provider,
				...status
			})),
			...nextCursor != null && { nextCursor },
			...providerMetadata != null && { providerMetadata }
		};
	} catch (error) {
		throw wrapGatewayError(error);
	}
}
async function startBatch({ provider, requests, providerOptions, webhookUrl, abortSignal, headers, timeout }) {
	validateRequests(requests);
	const batchApi = resolveBatchApi(provider);
	const operationAbortSignal = mergeAbortSignals(abortSignal, getTotalTimeoutMs(timeout));
	const supportedUrls = await batchApi.supportedUrls;
	operationAbortSignal?.throwIfAborted();
	const normalizedRequests = [];
	const toolsByName = /* @__PURE__ */ new Map();
	for (const request of requests) {
		const requestType = request.type;
		switch (requestType) {
			case "text": {
				const standardizedPrompt = await standardizePrompt(request);
				const preparedTools = await prepareTools({
					tools: request.tools,
					toolOrder: request.toolOrder,
					toolsContext: request.toolsContext
				});
				validateCompatibleTools({
					requestId: request.id,
					tools: preparedTools,
					toolsByName
				});
				normalizedRequests.push({
					id: request.id,
					type: request.type,
					modelId: request.model,
					options: {
						...prepareLanguageModelCallOptions(request),
						prompt: await convertToLanguageModelPrompt({
							prompt: standardizedPrompt,
							supportedUrls,
							download: void 0,
							abortSignal: operationAbortSignal,
							provider: batchApi.provider.split(".")[0]
						}),
						tools: preparedTools,
						toolChoice: prepareToolChoice({ toolChoice: request.toolChoice }),
						providerOptions: request.providerOptions
					}
				});
				break;
			}
			case "image": {
				const { prompt, files, mask } = normalizePrompt(request.prompt);
				normalizedRequests.push({
					id: request.id,
					type: request.type,
					modelId: request.model,
					options: {
						prompt,
						n: request.n ?? 1,
						size: request.size,
						aspectRatio: request.aspectRatio,
						seed: request.seed,
						files,
						mask,
						providerOptions: request.providerOptions ?? {}
					}
				});
				break;
			}
			default: {
				const _exhaustiveCheck = requestType;
				throw new InvalidArgumentError({
					parameter: "requests",
					value: _exhaustiveCheck,
					message: `Unsupported batch request type "${_exhaustiveCheck}".`
				});
			}
		}
		operationAbortSignal?.throwIfAborted();
	}
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	try {
		const { batchId, warnings, ...status } = await batchApi.doStartBatch({
			requests: normalizedRequests,
			providerOptions,
			abortSignal: operationAbortSignal,
			headers: headersWithUserAgent,
			...webhookUrl != null && { webhookUrl }
		});
		const modelByRequestId = new Map(normalizedRequests.map((request) => [request.id, request.modelId]));
		for (const { requestId, warning } of warnings) logWarnings({
			warnings: [warning],
			provider: batchApi.provider,
			model: requestId == null ? void 0 : modelByRequestId.get(requestId)
		});
		return {
			version: 2,
			id: batchId,
			provider: batchApi.provider,
			...status,
			warnings
		};
	} catch (error) {
		throw wrapGatewayError(error);
	}
}
function validateCompatibleTools({ requestId, tools, toolsByName }) {
	for (const tool3 of tools ?? []) {
		const previousTool = toolsByName.get(tool3.name);
		if (previousTool != null && !isDeepEqualData(previousTool, tool3)) throw new InvalidArgumentError({
			parameter: "requests",
			value: requestId,
			message: `tool "${tool3.name}" must have the same definition in every batch request`
		});
		toolsByName.set(tool3.name, tool3);
	}
}
async function getBatchStatus({ provider, batch, providerOptions, maxRetries, abortSignal, headers, timeout }) {
	const batchApi = resolveBatchApi(provider);
	validateBatchReference({
		batchApi,
		batch
	});
	const operationAbortSignal = mergeAbortSignals(abortSignal, getTotalTimeoutMs(timeout));
	const { retry } = prepareRetries({
		maxRetries,
		abortSignal: operationAbortSignal
	});
	try {
		return await retry(() => batchApi.doGetBatchStatus({
			batchId: batch.id,
			providerOptions,
			abortSignal: operationAbortSignal,
			headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`)
		}));
	} catch (error) {
		throw wrapGatewayError(error);
	}
}
function getBatchResults({ provider, batch, tools, providerOptions, maxRetries, abortSignal, headers, timeout }) {
	const batchApi = resolveBatchApi(provider);
	validateBatchReference({
		batchApi,
		batch
	});
	const streamAbortController = new AbortController();
	const operationAbortSignal = mergeAbortSignals(abortSignal, getTotalTimeoutMs(timeout), streamAbortController.signal);
	const { retry } = prepareRetries({
		maxRetries,
		abortSignal: operationAbortSignal
	});
	const transform = new TransformStream({
		async transform(item, controller) {
			controller.enqueue(await convertBatchItemResult({
				item,
				tools,
				abortSignal: operationAbortSignal
			}));
		},
		cancel(reason) {
			streamAbortController.abort(reason ?? /* @__PURE__ */ new Error("Batch results stream was cancelled."));
		}
	});
	(async () => {
		try {
			await (await retry(() => batchApi.doGetBatchResults({
				batchId: batch.id,
				providerOptions,
				abortSignal: operationAbortSignal,
				headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`)
			}))).pipeTo(transform.writable, { signal: operationAbortSignal });
		} catch (error) {
			await transform.writable.abort(wrapGatewayError(error)).catch(() => {});
		}
	})();
	return asAsyncIterableStream(transform.readable);
}
function resolveBatchApi(provider) {
	provider ??= asProviderV4(globalThis.AI_SDK_DEFAULT_PROVIDER ?? gateway);
	if (isBatchApi(provider)) return provider;
	if (!hasBatchFactory(provider)) throw new UnsupportedFunctionalityError({
		functionality: "batch processing",
		message: "The provider does not support batch processing. Make sure it exposes an experimental_batch() method."
	});
	return provider.experimental_batch();
}
function hasBatchFactory(provider) {
	return typeof provider.experimental_batch === "function";
}
function isBatchApi(provider) {
	const candidate = provider;
	return typeof candidate.doStartBatch === "function" && typeof candidate.doGetBatchStatus === "function" && typeof candidate.doGetBatchResults === "function";
}
function validateRequests(requests) {
	if (requests.length === 0) throw new InvalidArgumentError({
		parameter: "requests",
		value: requests,
		message: "requests must not be empty"
	});
	const ids = /* @__PURE__ */ new Set();
	for (const request of requests) {
		if (request.id.trim().length === 0) throw new InvalidArgumentError({
			parameter: "requests",
			value: requests,
			message: "request IDs must not be empty"
		});
		if (ids.has(request.id)) throw new InvalidArgumentError({
			parameter: "requests",
			value: requests,
			message: `request IDs must be unique; duplicate ID "${request.id}"`
		});
		ids.add(request.id);
	}
}
function validateBatchReference({ batchApi, batch }) {
	if (batch.version !== 2) throw new InvalidArgumentError({
		parameter: "batch",
		value: batch,
		message: "batch must be a supported batch reference"
	});
	if (batch.provider !== batchApi.provider) throw new InvalidArgumentError({
		parameter: "provider",
		value: batchApi,
		message: `provider ${batchApi.provider} is not compatible with batch provider ${batch.provider}`
	});
}
async function convertBatchItemResult({ item, tools, abortSignal }) {
	switch (item.type) {
		case "text": switch (item.status) {
			case "succeeded": return {
				type: item.type,
				id: item.id,
				status: item.status,
				...await convertGenerateResult({
					result: item.result,
					tools,
					abortSignal
				})
			};
			case "failed": return {
				type: item.type,
				id: item.id,
				status: item.status,
				error: item.error,
				providerMetadata: item.providerMetadata
			};
			case "cancelled":
			case "expired": return {
				type: item.type,
				id: item.id,
				status: item.status,
				error: item.error,
				providerMetadata: item.providerMetadata
			};
		}
		case "image": switch (item.status) {
			case "succeeded": return {
				type: item.type,
				id: item.id,
				status: item.status,
				...convertImageResult(item.result)
			};
			case "failed": return {
				type: item.type,
				id: item.id,
				status: item.status,
				error: item.error,
				providerMetadata: item.providerMetadata
			};
			case "cancelled":
			case "expired": return {
				type: item.type,
				id: item.id,
				status: item.status,
				error: item.error,
				providerMetadata: item.providerMetadata
			};
		}
	}
}
function convertImageResult(result) {
	return {
		images: result.images.map((image, index) => new DefaultGeneratedFile({
			data: image,
			mediaType: detectMediaType({
				data: image,
				topLevelType: "image"
			}) ?? "image/png",
			providerMetadata: getImageProviderMetadata(result.providerMetadata, index)
		})),
		warnings: result.warnings,
		response: {
			timestamp: result.response.timestamp,
			modelId: result.response.modelId,
			headers: result.response.headers
		},
		providerMetadata: result.providerMetadata,
		usage: result.usage
	};
}
async function convertGenerateResult({ result, tools, abortSignal }) {
	const toolCalls = await Promise.all(result.content.filter((part) => part.type === "tool-call").map((toolCall) => parseToolCall({
		toolCall,
		tools,
		repairToolCall: void 0,
		refineToolInput: void 0,
		instructions: void 0,
		messages: []
	})));
	return {
		content: await convertLanguageModelContent({
			content: result.content,
			toolCalls,
			toolOutputs: [],
			toolApprovalRequests: [],
			toolApprovalResponses: [],
			tools,
			abortSignal
		}),
		text: result.content.filter((part) => part.type === "text").map((part) => part.text).join(""),
		finishReason: result.finishReason.unified,
		rawFinishReason: result.finishReason.raw,
		usage: asLanguageModelUsage(result.usage),
		...result.response != null ? { response: {
			id: result.response.id,
			timestamp: result.response.timestamp?.toISOString(),
			modelId: result.response.modelId
		} } : {},
		providerMetadata: result.providerMetadata
	};
}
function createRestrictedTelemetryDispatcher2({ telemetry }) {
	const dispatcher = createTelemetryDispatcher({ telemetry });
	return {
		...dispatcher,
		onStart: (event) => dispatcher.onStart?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: telemetry?.includeRuntimeContext
			})
		}),
		onEnd: (event) => dispatcher.onEnd?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: telemetry?.includeRuntimeContext
			})
		})
	};
}
var originalGenerateCallId4 = createIdGenerator({
	prefix: "call",
	size: 24
});
async function embed({ model: modelArg, value, providerOptions, maxRetries: maxRetriesArg, abortSignal, headers, experimental_telemetry, telemetry = experimental_telemetry, runtimeContext = {}, onStart, experimental_onStart, onEnd, experimental_onEnd, _internal: { generateCallId = originalGenerateCallId4 } = {} }) {
	const model = resolveEmbeddingModel(modelArg);
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const resolvedOnStart = onStart ?? experimental_onStart;
	const resolvedOnEnd = onEnd ?? experimental_onEnd;
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const callId = generateCallId();
	const telemetryDispatcher = createRestrictedTelemetryDispatcher2({ telemetry });
	const runInTracingChannelSpan = telemetryDispatcher.runInTracingChannelSpan ?? (async ({ execute }) => await execute());
	const startEvent = {
		callId,
		operationId: "ai.embed",
		runtimeContext,
		provider: model.provider,
		modelId: model.modelId,
		value,
		maxRetries,
		headers: headersWithUserAgent,
		providerOptions
	};
	return await runInTracingChannelSpan({
		type: "embed",
		event: startEvent,
		execute: async () => {
			await notify({
				event: startEvent,
				callbacks: [resolvedOnStart, telemetryDispatcher.onStart]
			});
			try {
				const { embedding, usage, warnings, response, providerMetadata } = await retry(async () => {
					const embedCallId = generateCallId();
					await notify({
						event: {
							callId,
							embedCallId,
							operationId: "ai.embed.doEmbed",
							provider: model.provider,
							modelId: model.modelId,
							values: [value]
						},
						callbacks: [telemetryDispatcher.onEmbedStart]
					});
					const modelResponse = await model.doEmbed({
						values: [value],
						abortSignal,
						headers: headersWithUserAgent,
						providerOptions
					});
					const embedding2 = modelResponse.embeddings[0];
					const usage2 = modelResponse.usage ?? { tokens: NaN };
					await notify({
						event: {
							callId,
							embedCallId,
							operationId: "ai.embed.doEmbed",
							provider: model.provider,
							modelId: model.modelId,
							values: [value],
							embeddings: modelResponse.embeddings,
							usage: usage2
						},
						callbacks: [telemetryDispatcher.onEmbedEnd]
					});
					if (embedding2 == null) throw new InvalidResponseDataError({
						data: modelResponse.embeddings,
						message: "No embedding generated."
					});
					return {
						embedding: embedding2,
						usage: usage2,
						warnings: modelResponse.warnings ?? [],
						providerMetadata: modelResponse.providerMetadata,
						response: modelResponse.response
					};
				});
				logWarnings({
					warnings,
					provider: model.provider,
					model: model.modelId
				});
				await notify({
					event: {
						callId,
						operationId: "ai.embed",
						runtimeContext,
						provider: model.provider,
						modelId: model.modelId,
						value,
						embedding,
						usage,
						warnings,
						providerMetadata,
						response
					},
					callbacks: [resolvedOnEnd, telemetryDispatcher.onEnd]
				});
				return new DefaultEmbedResult({
					value,
					embedding,
					usage,
					warnings,
					providerMetadata,
					response
				});
			} catch (error) {
				await telemetryDispatcher.onError?.({
					callId,
					error
				});
				throw error;
			}
		}
	});
}
var DefaultEmbedResult = class {
	constructor(options) {
		this.value = options.value;
		this.embedding = options.embedding;
		this.usage = options.usage;
		this.warnings = options.warnings;
		this.providerMetadata = options.providerMetadata;
		this.response = options.response;
	}
};
function getEmbeddingModelMaxInputBytesPerCall(model) {
	return model[EMBEDDING_MODEL_MAX_INPUT_BYTES_PER_CALL];
}
function getEmbeddingModelProviderOptionsTransformer(model) {
	return model[EMBEDDING_MODEL_PROVIDER_OPTIONS_TRANSFORMER];
}
function splitArray(array3, chunkSize) {
	if (chunkSize <= 0) throw new InvalidArgumentError({
		parameter: "chunkSize",
		value: chunkSize,
		message: "chunkSize must be greater than 0"
	});
	const result = [];
	for (let i = 0; i < array3.length; i += chunkSize) result.push(array3.slice(i, i + chunkSize));
	return result;
}
var originalGenerateCallId5 = createIdGenerator({
	prefix: "call",
	size: 24
});
async function embedMany({ model: modelArg, values, maxParallelCalls = Infinity, maxRetries: maxRetriesArg, abortSignal, headers, providerOptions, experimental_telemetry, telemetry = experimental_telemetry, runtimeContext = {}, onStart, experimental_onStart, onEnd, experimental_onEnd, _internal: { generateCallId = originalGenerateCallId5 } = {} }) {
	const model = resolveEmbeddingModel(modelArg);
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const resolvedOnStart = onStart ?? experimental_onStart;
	const resolvedOnEnd = onEnd ?? experimental_onEnd;
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const callId = generateCallId();
	const telemetryDispatcher = createRestrictedTelemetryDispatcher2({ telemetry });
	const runInTracingChannelSpan = telemetryDispatcher.runInTracingChannelSpan ?? (async ({ execute }) => await execute());
	const startEvent = {
		callId,
		operationId: "ai.embedMany",
		runtimeContext,
		provider: model.provider,
		modelId: model.modelId,
		value: values,
		maxRetries,
		headers: headersWithUserAgent,
		providerOptions
	};
	return await runInTracingChannelSpan({
		type: "embedMany",
		event: startEvent,
		execute: async () => {
			await notify({
				event: startEvent,
				callbacks: [resolvedOnStart, telemetryDispatcher.onStart]
			});
			try {
				const [maxEmbeddingsPerCall, maxInputBytesPerCall, supportsParallelCalls] = await Promise.all([
					model.maxEmbeddingsPerCall,
					getEmbeddingModelMaxInputBytesPerCall(model),
					model.supportsParallelCalls
				]);
				const hasEmbeddingLimit = maxEmbeddingsPerCall != null && maxEmbeddingsPerCall !== Infinity;
				const hasInputByteLimit = maxInputBytesPerCall != null && maxInputBytesPerCall !== Infinity;
				if (!hasEmbeddingLimit && !hasInputByteLimit) {
					const { embeddings: embeddings2, usage, warnings: warnings2, response, providerMetadata: providerMetadata2 } = await retry(async () => {
						const embedCallId = generateCallId();
						await notify({
							event: {
								callId,
								embedCallId,
								operationId: "ai.embedMany.doEmbed",
								provider: model.provider,
								modelId: model.modelId,
								values
							},
							callbacks: [telemetryDispatcher.onEmbedStart]
						});
						const modelResponse = await model.doEmbed({
							values,
							abortSignal,
							headers: headersWithUserAgent,
							providerOptions
						});
						const embeddings3 = modelResponse.embeddings;
						const usage2 = modelResponse.usage ?? { tokens: NaN };
						await notify({
							event: {
								callId,
								embedCallId,
								operationId: "ai.embedMany.doEmbed",
								provider: model.provider,
								modelId: model.modelId,
								values,
								embeddings: embeddings3,
								usage: usage2
							},
							callbacks: [telemetryDispatcher.onEmbedEnd]
						});
						return {
							embeddings: embeddings3,
							usage: usage2,
							warnings: modelResponse.warnings ?? [],
							providerMetadata: modelResponse.providerMetadata,
							response: modelResponse.response
						};
					});
					validateEmbeddingCount({
						embeddings: embeddings2,
						values
					});
					logWarnings({
						warnings: warnings2,
						provider: model.provider,
						model: model.modelId
					});
					await notify({
						event: {
							callId,
							operationId: "ai.embedMany",
							runtimeContext,
							provider: model.provider,
							modelId: model.modelId,
							value: values,
							embedding: embeddings2,
							usage,
							warnings: warnings2,
							providerMetadata: providerMetadata2,
							response: [response]
						},
						callbacks: [resolvedOnEnd, telemetryDispatcher.onEnd]
					});
					return new DefaultEmbedManyResult({
						values,
						embeddings: embeddings2,
						usage,
						warnings: warnings2,
						providerMetadata: providerMetadata2,
						responses: [response]
					});
				}
				const valueChunks = splitByEmbeddingLimits({
					values,
					maxEmbeddingsPerCall: hasEmbeddingLimit ? maxEmbeddingsPerCall : Infinity,
					maxInputBytesPerCall: hasInputByteLimit ? maxInputBytesPerCall : Infinity
				});
				const providerOptionsTransformer = getEmbeddingModelProviderOptionsTransformer(model);
				const embeddings = [];
				const warnings = [];
				const responses = [];
				let tokens = 0;
				let providerMetadata;
				const parallelChunks = splitArray(valueChunks, supportsParallelCalls ? maxParallelCalls : 1);
				let nextChunkStartIndex = 0;
				for (const parallelChunk of parallelChunks) {
					const results = await Promise.all(parallelChunk.map(async (chunk) => {
						const startIndex = nextChunkStartIndex;
						nextChunkStartIndex += chunk.length;
						const chunkProviderOptions = providerOptionsTransformer ? await providerOptionsTransformer({
							providerOptions,
							values,
							startIndex,
							endIndex: startIndex + chunk.length
						}) : providerOptions;
						const result = await retry(async () => {
							const embedCallId = generateCallId();
							await notify({
								event: {
									callId,
									embedCallId,
									operationId: "ai.embedMany.doEmbed",
									provider: model.provider,
									modelId: model.modelId,
									values: chunk
								},
								callbacks: [telemetryDispatcher.onEmbedStart]
							});
							const modelResponse = await model.doEmbed({
								values: chunk,
								abortSignal,
								headers: headersWithUserAgent,
								providerOptions: chunkProviderOptions
							});
							const chunkEmbeddings = modelResponse.embeddings;
							const usage = modelResponse.usage ?? { tokens: NaN };
							await notify({
								event: {
									callId,
									embedCallId,
									operationId: "ai.embedMany.doEmbed",
									provider: model.provider,
									modelId: model.modelId,
									values: chunk,
									embeddings: chunkEmbeddings,
									usage
								},
								callbacks: [telemetryDispatcher.onEmbedEnd]
							});
							return {
								embeddings: chunkEmbeddings,
								usage,
								warnings: modelResponse.warnings ?? [],
								providerMetadata: modelResponse.providerMetadata,
								response: modelResponse.response
							};
						});
						validateEmbeddingCount({
							embeddings: result.embeddings,
							values: chunk
						});
						return result;
					}));
					for (const result of results) {
						embeddings.push(...result.embeddings);
						warnings.push(...result.warnings);
						responses.push(result.response);
						tokens += result.usage.tokens;
						if (result.providerMetadata) {
							if (!providerMetadata) providerMetadata = { ...result.providerMetadata };
							else for (const [providerName, metadata] of Object.entries(result.providerMetadata)) providerMetadata[providerName] = {
								...providerMetadata[providerName],
								...metadata
							};
						}
					}
				}
				logWarnings({
					warnings,
					provider: model.provider,
					model: model.modelId
				});
				await notify({
					event: {
						callId,
						operationId: "ai.embedMany",
						runtimeContext,
						provider: model.provider,
						modelId: model.modelId,
						value: values,
						embedding: embeddings,
						usage: { tokens },
						warnings,
						providerMetadata,
						response: responses
					},
					callbacks: [resolvedOnEnd, telemetryDispatcher.onEnd]
				});
				return new DefaultEmbedManyResult({
					values,
					embeddings,
					usage: { tokens },
					warnings,
					providerMetadata,
					responses
				});
			} catch (error) {
				await telemetryDispatcher.onError?.({
					callId,
					error
				});
				throw error;
			}
		}
	});
}
function validateEmbeddingCount({ embeddings, values }) {
	if (embeddings.length !== values.length) throw new InvalidResponseDataError({
		data: embeddings,
		message: `Expected ${values.length} embeddings, but received ${embeddings.length}.`
	});
}
var textEncoder = new TextEncoder();
function splitByEmbeddingLimits({ values, maxEmbeddingsPerCall, maxInputBytesPerCall }) {
	if (maxEmbeddingsPerCall <= 0) throw new Error("maxEmbeddingsPerCall must be greater than 0");
	if (maxInputBytesPerCall <= 0) throw new Error("maxInputBytesPerCall must be greater than 0");
	if (values.length === 0) return [];
	const chunks = [];
	let currentChunk = [];
	let currentInputBytes = 0;
	for (const value of values) {
		const inputBytes = textEncoder.encode(value).length;
		if (currentChunk.length > 0 && (currentChunk.length >= maxEmbeddingsPerCall || currentInputBytes + inputBytes > maxInputBytesPerCall)) {
			chunks.push(currentChunk);
			currentChunk = [];
			currentInputBytes = 0;
		}
		currentChunk.push(value);
		currentInputBytes += inputBytes;
	}
	chunks.push(currentChunk);
	return chunks;
}
var DefaultEmbedManyResult = class {
	constructor(options) {
		this.values = options.values;
		this.embeddings = options.embeddings;
		this.usage = options.usage;
		this.warnings = options.warnings;
		this.providerMetadata = options.providerMetadata;
		this.responses = options.responses;
	}
};
function createRestrictedTelemetryDispatcher3({ telemetry }) {
	const dispatcher = createTelemetryDispatcher({ telemetry });
	return {
		...dispatcher,
		onStart: (event) => dispatcher.experimental_onEvaluateStart?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: telemetry?.includeRuntimeContext
			})
		}),
		onEnd: (event) => dispatcher.experimental_onEvaluateEnd?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: telemetry?.includeRuntimeContext
			})
		})
	};
}
var tolerance = 1e-6;
function isRecord(value) {
	if (value == null || typeof value !== "object" || Array.isArray(value)) return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === Object.prototype || prototype === null;
}
function isJSON(value, ancestors = /* @__PURE__ */ new Set()) {
	if (value === null || typeof value === "string" || typeof value === "boolean") return true;
	if (typeof value === "number") return Number.isFinite(value);
	if (typeof value !== "object" || !Array.isArray(value) && !isRecord(value)) return false;
	if (ancestors.has(value)) return false;
	ancestors.add(value);
	const valid = Object.getOwnPropertySymbols(value).length === 0 && (Array.isArray(value) ? Array.from(value).every((item) => isJSON(item, ancestors)) : Object.values(value).every((item) => isJSON(item, ancestors)));
	ancestors.delete(value);
	return valid;
}
function isInput(value) {
	return (typeof value === "string" || Array.isArray(value) || isRecord(value)) && isJSON(value);
}
function invalidInput(parameter, value, message) {
	throw new InvalidArgumentError({
		parameter,
		value,
		message
	});
}
function validateEvaluationInput({ state, questions }) {
	if (!isInput(state)) invalidInput("state", state, "must be a JSON-compatible string, object, or array");
	if (!isRecord(questions) || Object.keys(questions).length === 0) invalidInput("questions", questions, "must be a nonempty question map");
	for (const [id, question] of Object.entries(questions)) {
		const parameter = `questions.${id}`;
		if (!isRecord(question) || !isInput(question.instructions)) invalidInput(parameter, question, "instructions must be a JSON-compatible string, object, or array");
		const criteria = question.criteria;
		switch (question.type) {
			case "choice":
				if (!isRecord(criteria) || Object.keys(criteria).length === 0) invalidInput(parameter, question, "choice criteria must be a nonempty option map");
				break;
			case "score":
				if (!Array.isArray(criteria) || criteria.length < 2) invalidInput(parameter, question, "score criteria must contain at least two ordered levels");
				break;
			case "boolean":
				if (criteria === void 0) continue;
				if (!isRecord(criteria) || Object.keys(criteria).some((key) => key !== "true" && key !== "false")) invalidInput(parameter, question, "boolean criteria may only describe true and false");
				break;
			default: invalidInput(parameter, question, "question type must be choice, score, or boolean");
		}
		if (!isJSON(criteria) || Object.values(criteria).some((value) => value !== null && !isInput(value))) invalidInput(parameter, question, "criteria descriptions must be JSON-compatible strings, objects, arrays, or null");
	}
}
function invalidAnswer(answers, message) {
	throw new InvalidResponseDataError({
		data: answers,
		message
	});
}
function isProbability(value) {
	return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1;
}
function hasExactKeys(value, keys) {
	return Object.keys(value).length === keys.length && keys.every((key) => Object.hasOwn(value, key));
}
function validateDistribution(value, keys, answers, id, roundingError) {
	if (!isRecord(value) || !hasExactKeys(value, keys) || !Object.values(value).every(isProbability)) invalidAnswer(answers, `Question "${id}" must have a complete distribution of finite probabilities in [0, 1].`);
	const sum = Object.values(value).reduce((total, probability) => total + probability, 0);
	if (Math.abs(sum - 1) > tolerance + keys.length * roundingError) invalidAnswer(answers, `Question "${id}" probabilities must sum to 1 within the declared rounding precision.`);
}
function validateEvaluationAnswers({ questions, answers, rounding }) {
	function roundingError(decimals) {
		if (decimals === void 0) return 0;
		if (!Number.isInteger(decimals) || decimals < 0 || decimals > 15) invalidAnswer(answers, "Evaluation rounding decimals must be integers between 0 and 15.");
		return .5 * 10 ** -decimals;
	}
	const probabilityError = roundingError(rounding?.probabilityDecimals);
	const scoreError = roundingError(rounding?.scoreDecimals);
	if (!isRecord(answers) || !hasExactKeys(answers, Object.keys(questions))) invalidAnswer(answers, "Evaluation must return exactly one answer for every question.");
	for (const [id, question] of Object.entries(questions)) {
		const answer = answers[id];
		if (!isRecord(answer) || answer.type !== question.type) invalidAnswer(answers, `Question "${id}" returned an answer with the wrong type.`);
		switch (question.type) {
			case "choice":
				if (typeof answer.choice !== "string" || !Object.hasOwn(question.criteria, answer.choice)) invalidAnswer(answers, `Question "${id}" selected an unknown option.`);
				if (answer.probabilities !== void 0) {
					validateDistribution(answer.probabilities, Object.keys(question.criteria), answers, id, probabilityError);
					const selected = answer.probabilities[answer.choice];
					if (Object.values(answer.probabilities).some((probability) => probability > selected + tolerance)) invalidAnswer(answers, `Question "${id}" did not select a highest-probability option.`);
				}
				break;
			case "score":
				if (typeof answer.score !== "number" || !Number.isFinite(answer.score) || answer.score < 0 || answer.score > question.criteria.length - 1) invalidAnswer(answers, `Question "${id}" score must be in [0, ${question.criteria.length - 1}].`);
				if (answer.probabilities !== void 0) {
					const keys = question.criteria.map((_, index) => String(index));
					validateDistribution(answer.probabilities, keys, answers, id, probabilityError);
					const mean = Object.entries(answer.probabilities).reduce((total, [index, probability]) => total + Number(index) * probability, 0);
					const meanRoundingError = keys.reduce((total, index) => total + Number(index) * probabilityError, 0);
					if (Math.abs(mean - answer.score) > tolerance + meanRoundingError + scoreError) invalidAnswer(answers, `Question "${id}" score must equal the probability-weighted mean within the declared rounding precision.`);
				}
				break;
			case "boolean": if (!isProbability(answer.probability)) invalidAnswer(answers, `Question "${id}" must return P(true) as a finite probability in [0, 1].`);
		}
	}
}
var originalGenerateCallId6 = createIdGenerator({
	prefix: "call",
	size: 24
});
async function evaluate({ model: modelArg, state, questions, maxRetries, abortSignal, headers, providerOptions = {}, telemetry, runtimeContext = {}, onStart, onEnd, _internal: { generateCallId = originalGenerateCallId6 } = {} }) {
	const model = resolveEvaluationModel(modelArg);
	validateEvaluationInput({
		state,
		questions
	});
	for (const [questionId, question] of Object.entries(questions)) if (!model.supportedQuestionTypes.includes(question.type)) throw new EvaluationUnsupportedQuestionTypeError({
		questionId,
		questionType: question.type,
		provider: model.provider,
		modelId: model.modelId
	});
	const callId = generateCallId();
	const { maxRetries: resolvedMaxRetries, retry } = prepareRetries({
		maxRetries,
		abortSignal
	});
	const telemetryDispatcher = createRestrictedTelemetryDispatcher3({ telemetry });
	const runInTracingChannelSpan = telemetryDispatcher.runInTracingChannelSpan ?? (async ({ execute }) => await execute());
	const startEvent = {
		callId,
		operationId: "ai.evaluate",
		runtimeContext,
		provider: model.provider,
		modelId: model.modelId,
		state,
		questions,
		maxRetries: resolvedMaxRetries,
		headers,
		providerOptions
	};
	return await runInTracingChannelSpan({
		type: "experimental_evaluate",
		event: startEvent,
		execute: async () => {
			await notify({
				event: startEvent,
				callbacks: [onStart, telemetryDispatcher.onStart]
			});
			try {
				const modelCallEvent = {
					callId,
					operationId: "ai.evaluate.doEvaluate",
					provider: model.provider,
					modelId: model.modelId,
					state,
					questions
				};
				await notify({
					event: modelCallEvent,
					callbacks: [telemetryDispatcher.experimental_onEvaluationModelCallStart]
				});
				const result = await retry(async () => {
					abortSignal?.throwIfAborted();
					return await model.doEvaluate({
						state,
						questions,
						abortSignal,
						headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`),
						providerOptions
					});
				});
				abortSignal?.throwIfAborted();
				validateEvaluationAnswers({
					questions,
					answers: result.answers,
					rounding: result.rounding
				});
				await notify({
					event: {
						...modelCallEvent,
						...result
					},
					callbacks: [telemetryDispatcher.experimental_onEvaluationModelCallEnd]
				});
				logWarnings({
					warnings: result.warnings,
					provider: model.provider,
					model: model.modelId
				});
				const inputTokens = result.usage?.inputTokens;
				const outputTokens = result.usage?.outputTokens;
				const evaluationResult = {
					answers: result.answers,
					usage: {
						inputTokens,
						outputTokens,
						totalTokens: inputTokens != null && outputTokens != null ? inputTokens + outputTokens : void 0
					},
					warnings: result.warnings,
					rounding: result.rounding,
					providerMetadata: result.providerMetadata,
					response: {
						...result.response,
						timestamp: result.response?.timestamp ?? /* @__PURE__ */ new Date(),
						modelId: result.response?.modelId ?? model.modelId
					}
				};
				await notify({
					event: {
						...startEvent,
						...evaluationResult
					},
					callbacks: [onEnd, telemetryDispatcher.onEnd]
				});
				return evaluationResult;
			} catch (error) {
				await telemetryDispatcher.onError?.({
					callId,
					error
				});
				throw error;
			}
		}
	});
}
function extractReasoningContent(content) {
	const parts = content.filter((content2) => content2.type === "reasoning");
	return parts.length === 0 ? void 0 : parts.map((content2) => content2.text).join("\n");
}
function extractTextContent(content) {
	const parts = content.filter((content2) => content2.type === "text");
	if (parts.length === 0) return;
	return parts.map((content2) => content2.text).join("");
}
var noSchemaOutputStrategy = {
	type: "no-schema",
	jsonSchema: async () => void 0,
	async validatePartialResult({ value, textDelta }) {
		return {
			success: true,
			value: {
				partial: value,
				textDelta
			}
		};
	},
	async validateFinalResult(value, context) {
		return value === void 0 ? {
			success: false,
			error: new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				text: context.text,
				response: context.response,
				usage: context.usage,
				finishReason: context.finishReason
			})
		} : {
			success: true,
			value
		};
	},
	createElementStream() {
		throw new UnsupportedFunctionalityError({ functionality: "element streams in no-schema mode" });
	}
};
var objectOutputStrategy = (schema) => ({
	type: "object",
	jsonSchema: async () => await schema.jsonSchema,
	async validatePartialResult({ value, textDelta }) {
		return {
			success: true,
			value: {
				partial: value,
				textDelta
			}
		};
	},
	async validateFinalResult(value) {
		return safeValidateTypes({
			value,
			schema
		});
	},
	createElementStream() {
		throw new UnsupportedFunctionalityError({ functionality: "element streams in object mode" });
	}
});
var arrayOutputStrategy = (schema) => {
	return {
		type: "array",
		jsonSchema: async () => {
			const { $schema: _$schema, definitions, $defs, ...itemSchema } = await schema.jsonSchema;
			return {
				$schema: "http://json-schema.org/draft-07/schema#",
				...definitions != null && { definitions },
				...$defs != null && { $defs },
				type: "object",
				properties: { elements: {
					type: "array",
					items: itemSchema
				} },
				required: ["elements"],
				additionalProperties: false
			};
		},
		async validatePartialResult({ value, latestObject, isFirstDelta, isFinalDelta }) {
			if (!isJSONObject(value) || !isJSONArray(value.elements)) return {
				success: false,
				error: new TypeValidationError({
					value,
					cause: "value must be an object that contains an array of elements"
				})
			};
			const inputArray = value.elements;
			const resultArray = [];
			for (let i = 0; i < inputArray.length; i++) {
				const element = inputArray[i];
				const result = await safeValidateTypes({
					value: element,
					schema
				});
				if (i === inputArray.length - 1 && !isFinalDelta) continue;
				if (!result.success) return result;
				resultArray.push(result.value);
			}
			const publishedElementCount = latestObject?.length ?? 0;
			let textDelta = "";
			if (isFirstDelta) textDelta += "[";
			if (publishedElementCount > 0) textDelta += ",";
			textDelta += resultArray.slice(publishedElementCount).map((element) => JSON.stringify(element)).join(",");
			if (isFinalDelta) textDelta += "]";
			return {
				success: true,
				value: {
					partial: resultArray,
					textDelta
				}
			};
		},
		async validateFinalResult(value) {
			if (!isJSONObject(value) || !isJSONArray(value.elements)) return {
				success: false,
				error: new TypeValidationError({
					value,
					cause: "value must be an object that contains an array of elements"
				})
			};
			const inputArray = value.elements;
			const resultArray = [];
			for (const element of inputArray) {
				const result = await safeValidateTypes({
					value: element,
					schema
				});
				if (!result.success) return result;
				resultArray.push(result.value);
			}
			return {
				success: true,
				value: resultArray
			};
		},
		createElementStream(originalStream) {
			let publishedElements = 0;
			return createAsyncIterableStream(originalStream.pipeThrough(new TransformStream({ transform(chunk, controller) {
				switch (chunk.type) {
					case "object": {
						const array3 = chunk.object;
						for (; publishedElements < array3.length; publishedElements++) controller.enqueue(array3[publishedElements]);
						break;
					}
					case "text-delta":
					case "finish":
					case "error": break;
					default: throw new Error(`Unsupported chunk type: ${chunk}`);
				}
			} })));
		}
	};
};
var enumOutputStrategy = (enumValues) => {
	return {
		type: "enum",
		jsonSchema: async () => ({
			$schema: "http://json-schema.org/draft-07/schema#",
			type: "object",
			properties: { result: {
				type: "string",
				enum: enumValues
			} },
			required: ["result"],
			additionalProperties: false
		}),
		async validateFinalResult(value) {
			if (!isJSONObject(value) || typeof value.result !== "string") return {
				success: false,
				error: new TypeValidationError({
					value,
					cause: "value must be an object that contains a string in the \"result\" property."
				})
			};
			const result = value.result;
			return enumValues.includes(result) ? {
				success: true,
				value: result
			} : {
				success: false,
				error: new TypeValidationError({
					value,
					cause: "value must be a string in the enum"
				})
			};
		},
		async validatePartialResult({ value, textDelta }) {
			if (!isJSONObject(value) || typeof value.result !== "string") return {
				success: false,
				error: new TypeValidationError({
					value,
					cause: "value must be an object that contains a string in the \"result\" property."
				})
			};
			const result = value.result;
			const possibleEnumValues = enumValues.filter((enumValue) => enumValue.startsWith(result));
			if (value.result.length === 0 || possibleEnumValues.length === 0) return {
				success: false,
				error: new TypeValidationError({
					value,
					cause: "value must be a string in the enum"
				})
			};
			return {
				success: true,
				value: {
					partial: possibleEnumValues.length > 1 ? result : possibleEnumValues[0],
					textDelta
				}
			};
		},
		createElementStream() {
			throw new UnsupportedFunctionalityError({ functionality: "element streams in enum mode" });
		}
	};
};
function getOutputStrategy({ output, schema, enumValues }) {
	switch (output) {
		case "object": return objectOutputStrategy(asSchema(schema));
		case "array": return arrayOutputStrategy(asSchema(schema));
		case "enum": return enumOutputStrategy(enumValues);
		case "no-schema": return noSchemaOutputStrategy;
		default: throw new Error(`Unsupported output: ${output}`);
	}
}
async function parseAndValidateObjectResult(result, outputStrategy, context) {
	const parseResult = await safeParseJSON({ text: result });
	if (!parseResult.success) throw new NoObjectGeneratedError({
		message: "No object generated: could not parse the response.",
		cause: parseResult.error,
		text: result,
		response: context.response,
		usage: context.usage,
		finishReason: context.finishReason
	});
	const validationResult = await outputStrategy.validateFinalResult(parseResult.value, {
		text: result,
		response: context.response,
		usage: context.usage
	});
	if (!validationResult.success) throw new NoObjectGeneratedError({
		message: "No object generated: response did not match schema.",
		cause: validationResult.error,
		text: result,
		response: context.response,
		usage: context.usage,
		finishReason: context.finishReason
	});
	return validationResult.value;
}
async function parseAndValidateObjectResultWithRepair(result, outputStrategy, repairText, context) {
	try {
		return await parseAndValidateObjectResult(result, outputStrategy, context);
	} catch (error) {
		if (repairText != null && NoObjectGeneratedError.isInstance(error) && (JSONParseError.isInstance(error.cause) || TypeValidationError.isInstance(error.cause))) {
			const repairedText = await repairText({
				text: result,
				error: error.cause
			});
			if (repairedText === null) throw error;
			return await parseAndValidateObjectResult(repairedText, outputStrategy, context);
		}
		throw error;
	}
}
function validateObjectGenerationInput({ output, schema, schemaName, schemaDescription, enumValues }) {
	if (output != null && output !== "object" && output !== "array" && output !== "enum" && output !== "no-schema") throw new InvalidArgumentError({
		parameter: "output",
		value: output,
		message: "Invalid output type."
	});
	if (output === "no-schema") {
		if (schema != null) throw new InvalidArgumentError({
			parameter: "schema",
			value: schema,
			message: "Schema is not supported for no-schema output."
		});
		if (schemaDescription != null) throw new InvalidArgumentError({
			parameter: "schemaDescription",
			value: schemaDescription,
			message: "Schema description is not supported for no-schema output."
		});
		if (schemaName != null) throw new InvalidArgumentError({
			parameter: "schemaName",
			value: schemaName,
			message: "Schema name is not supported for no-schema output."
		});
		if (enumValues != null) throw new InvalidArgumentError({
			parameter: "enumValues",
			value: enumValues,
			message: "Enum values are not supported for no-schema output."
		});
	}
	if (output === "object") {
		if (schema == null) throw new InvalidArgumentError({
			parameter: "schema",
			value: schema,
			message: "Schema is required for object output."
		});
		if (enumValues != null) throw new InvalidArgumentError({
			parameter: "enumValues",
			value: enumValues,
			message: "Enum values are not supported for object output."
		});
	}
	if (output === "array") {
		if (schema == null) throw new InvalidArgumentError({
			parameter: "schema",
			value: schema,
			message: "Element schema is required for array output."
		});
		if (enumValues != null) throw new InvalidArgumentError({
			parameter: "enumValues",
			value: enumValues,
			message: "Enum values are not supported for array output."
		});
	}
	if (output === "enum") {
		if (schema != null) throw new InvalidArgumentError({
			parameter: "schema",
			value: schema,
			message: "Schema is not supported for enum output."
		});
		if (schemaDescription != null) throw new InvalidArgumentError({
			parameter: "schemaDescription",
			value: schemaDescription,
			message: "Schema description is not supported for enum output."
		});
		if (schemaName != null) throw new InvalidArgumentError({
			parameter: "schemaName",
			value: schemaName,
			message: "Schema name is not supported for enum output."
		});
		if (enumValues == null) throw new InvalidArgumentError({
			parameter: "enumValues",
			value: enumValues,
			message: "Enum values are required for enum output."
		});
		for (const value of enumValues) if (typeof value !== "string") throw new InvalidArgumentError({
			parameter: "enumValues",
			value,
			message: "Enum values must be strings."
		});
	}
}
var originalGenerateId4 = createIdGenerator({
	prefix: "aiobj",
	size: 24
});
async function generateObject(options) {
	const { model: modelArg, output = "object", instructions, system, prompt, messages, allowSystemInMessages, maxRetries: maxRetriesArg, abortSignal, headers, experimental_repairText, repairText = experimental_repairText, experimental_telemetry, telemetry = experimental_telemetry, experimental_download: download2, providerOptions, onStart, experimental_onStart, onStepStart, experimental_onStepStart, onStepEnd, onStepFinish, onFinish, _internal: { generateId: generateId5 = originalGenerateId4, currentDate = () => /* @__PURE__ */ new Date() } = {}, ...settings } = options;
	const model = resolveLanguageModel(modelArg);
	const enumValues = "enum" in options ? options.enum : void 0;
	const { schema: inputSchema, schemaDescription, schemaName } = "schema" in options ? options : {};
	validateObjectGenerationInput({
		output,
		schema: inputSchema,
		schemaName,
		schemaDescription,
		enumValues
	});
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const outputStrategy = getOutputStrategy({
		output,
		schema: inputSchema,
		enumValues
	});
	const callSettings = prepareLanguageModelCallOptions(settings);
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const telemetryDispatcher = createTelemetryDispatcher({ telemetry });
	const resolvedOnStart = onStart ?? experimental_onStart;
	const resolvedOnStepStart = onStepStart ?? experimental_onStepStart;
	const resolvedOnStepEnd = onStepEnd ?? onStepFinish;
	const jsonSchema3 = await outputStrategy.jsonSchema();
	const callId = generateId5();
	await notify({
		event: {
			callId,
			operationId: "ai.generateObject",
			provider: model.provider,
			modelId: model.modelId,
			system: instructions ?? system,
			prompt,
			messages,
			maxOutputTokens: callSettings.maxOutputTokens,
			temperature: callSettings.temperature,
			topP: callSettings.topP,
			topK: callSettings.topK,
			presencePenalty: callSettings.presencePenalty,
			frequencyPenalty: callSettings.frequencyPenalty,
			seed: callSettings.seed,
			maxRetries,
			headers: headersWithUserAgent,
			providerOptions,
			output: outputStrategy.type,
			schema: jsonSchema3,
			schemaName,
			schemaDescription
		},
		callbacks: [resolvedOnStart, telemetryDispatcher.onStart]
	});
	try {
		const promptMessages = await convertToLanguageModelPrompt({
			prompt: await standardizePrompt({
				instructions,
				system,
				prompt,
				messages,
				allowSystemInMessages
			}),
			supportedUrls: await model.supportedUrls,
			download: download2,
			abortSignal,
			provider: model.provider.split(".")[0]
		});
		await notify({
			event: {
				callId,
				stepNumber: 0,
				provider: model.provider,
				modelId: model.modelId,
				providerOptions,
				headers: headersWithUserAgent,
				promptMessages
			},
			callbacks: [resolvedOnStepStart, telemetryDispatcher.onObjectStepStart]
		});
		const generateResult = await retry(() => model.doGenerate({
			responseFormat: {
				type: "json",
				schema: jsonSchema3,
				name: schemaName,
				description: schemaDescription
			},
			...prepareLanguageModelCallOptions(settings),
			prompt: promptMessages,
			providerOptions,
			abortSignal,
			headers: headersWithUserAgent
		}));
		const responseData = {
			id: generateResult.response?.id ?? generateId5(),
			timestamp: generateResult.response?.timestamp ?? currentDate(),
			modelId: generateResult.response?.modelId ?? model.modelId,
			headers: generateResult.response?.headers,
			body: generateResult.response?.body
		};
		const text2 = extractTextContent(generateResult.content);
		const reasoning = extractReasoningContent(generateResult.content);
		if (text2 === void 0) throw new NoObjectGeneratedError({
			message: "No object generated: the model did not return a response.",
			response: responseData,
			usage: asLanguageModelUsage(generateResult.usage),
			finishReason: generateResult.finishReason.unified
		});
		const finishReason = generateResult.finishReason.unified;
		const usage = asLanguageModelUsage(generateResult.usage);
		const warnings = generateResult.warnings;
		const resultProviderMetadata = generateResult.providerMetadata;
		const request = generateResult.request ?? {};
		const response = responseData;
		logWarnings({
			warnings,
			provider: model.provider,
			model: model.modelId
		});
		await notify({
			event: {
				callId,
				stepNumber: 0,
				provider: model.provider,
				modelId: model.modelId,
				finishReason,
				usage,
				objectText: text2,
				msToFirstChunk: void 0,
				reasoning,
				warnings,
				request,
				response,
				providerMetadata: resultProviderMetadata
			},
			callbacks: [resolvedOnStepEnd, telemetryDispatcher.onObjectStepEnd]
		});
		const object3 = await parseAndValidateObjectResultWithRepair(text2, outputStrategy, repairText, {
			response,
			usage,
			finishReason
		});
		await notify({
			event: {
				callId,
				object: object3,
				error: void 0,
				reasoning,
				finishReason,
				usage,
				warnings,
				request,
				response,
				providerMetadata: resultProviderMetadata
			},
			callbacks: [onFinish, telemetryDispatcher.onEnd]
		});
		return new DefaultGenerateObjectResult({
			object: object3,
			reasoning,
			finishReason,
			usage,
			warnings,
			request,
			response,
			providerMetadata: resultProviderMetadata
		});
	} catch (error) {
		await telemetryDispatcher.onError?.({
			callId,
			error
		});
		throw wrapGatewayError(error);
	}
}
var DefaultGenerateObjectResult = class {
	constructor(options) {
		this.object = options.object;
		this.finishReason = options.finishReason;
		this.usage = options.usage;
		this.warnings = options.warnings;
		this.providerMetadata = options.providerMetadata;
		this.response = options.response;
		this.request = options.request;
		this.reasoning = options.reasoning;
	}
	toJsonResponse(init) {
		return new Response(JSON.stringify(this.object), {
			status: init?.status ?? 200,
			headers: prepareHeaders(init?.headers, { "content-type": "application/json; charset=utf-8" })
		});
	}
};
function cosineSimilarity(vector1, vector2) {
	if (vector1.length !== vector2.length) throw new InvalidArgumentError({
		parameter: "vector1,vector2",
		value: {
			vector1Length: vector1.length,
			vector2Length: vector2.length
		},
		message: `Vectors must have the same length`
	});
	const n = vector1.length;
	if (n === 0) return 0;
	let magnitudeSquared1 = 0;
	let magnitudeSquared2 = 0;
	let dotProduct = 0;
	for (let i = 0; i < n; i++) {
		const value1 = vector1[i];
		const value2 = vector2[i];
		magnitudeSquared1 += value1 * value1;
		magnitudeSquared2 += value2 * value2;
		dotProduct += value1 * value2;
	}
	return magnitudeSquared1 === 0 || magnitudeSquared2 === 0 ? 0 : dotProduct / (Math.sqrt(magnitudeSquared1) * Math.sqrt(magnitudeSquared2));
}
function createDownload(options) {
	return ({ url, abortSignal }) => download({
		url,
		maxBytes: options?.maxBytes,
		abortSignal
	});
}
var { atob: atob2 } = globalThis;
function getTextFromDataUrl(dataUrl) {
	const [header, base64Content] = dataUrl.split(",");
	const mediaType = header.split(";")[0].split(":")[1];
	const charsetMatch = /(?:^|;)\s*charset\s*=\s*(?:"([^"]+)"|([^;\s]+))/i.exec(header);
	const charset = charsetMatch?.[1] ?? charsetMatch?.[2];
	if (mediaType == null || base64Content == null) throw new InvalidArgumentError({
		parameter: "dataUrl",
		value: dataUrl,
		message: "Invalid data URL format"
	});
	try {
		const byteString = atob2(base64Content);
		if (charset == null) return byteString;
		return new TextDecoder(charset).decode(Uint8Array.from(byteString, (byte) => byte.codePointAt(0)));
	} catch {
		throw new InvalidArgumentError({
			parameter: "dataUrl",
			value: dataUrl,
			message: "Error decoding data URL"
		});
	}
}
var SerialJobExecutor = class {
	constructor() {
		this.queue = [];
		this.isProcessing = false;
	}
	async processQueue() {
		if (this.isProcessing) return;
		this.isProcessing = true;
		while (this.queue.length > 0) {
			await this.queue[0]();
			this.queue.shift();
		}
		this.isProcessing = false;
	}
	async run(job) {
		return new Promise((resolve3, reject) => {
			this.queue.push(async () => {
				try {
					await job();
					resolve3();
				} catch (error) {
					reject(error);
				}
			});
			this.processQueue();
		});
	}
};
function simulateReadableStream({ chunks, initialDelayInMs = 0, chunkDelayInMs = 0, _internal }) {
	const delay$1 = _internal?.delay ?? delay;
	let index = 0;
	return new ReadableStream({ async pull(controller) {
		if (index < chunks.length) {
			await delay$1(index === 0 ? initialDelayInMs : chunkDelayInMs);
			controller.enqueue(chunks[index++]);
		} else controller.close();
	} });
}
var originalGenerateId5 = createIdGenerator({
	prefix: "aiobj",
	size: 24
});
async function markPromiseAsHandled2(promise) {
	try {
		await promise;
	} catch {}
}
function streamObject(options) {
	const { model, output = "object", instructions, system, prompt, messages, allowSystemInMessages, maxRetries, abortSignal, headers, experimental_repairText, repairText = experimental_repairText, experimental_telemetry, telemetry = experimental_telemetry, experimental_download: download2, providerOptions, onStart, experimental_onStart, onStepStart, experimental_onStepStart, onStepEnd, onStepFinish, onError = ({ error }) => {
		console.error(error);
	}, onFinish, _internal: { generateId: generateId5 = originalGenerateId5, currentDate = () => /* @__PURE__ */ new Date(), now: now2 = now } = {}, ...settings } = options;
	const enumValues = "enum" in options && options.enum ? options.enum : void 0;
	const { schema: inputSchema, schemaDescription, schemaName } = "schema" in options ? options : {};
	validateObjectGenerationInput({
		output,
		schema: inputSchema,
		schemaName,
		schemaDescription,
		enumValues
	});
	return new DefaultStreamObjectResult({
		model,
		telemetry,
		headers,
		settings,
		maxRetries,
		abortSignal,
		outputStrategy: getOutputStrategy({
			output,
			schema: inputSchema,
			enumValues
		}),
		instructions,
		system,
		prompt,
		messages,
		allowSystemInMessages,
		schemaName,
		schemaDescription,
		providerOptions,
		repairText,
		onStart: onStart ?? experimental_onStart,
		onStepStart: onStepStart ?? experimental_onStepStart,
		onStepFinish: onStepEnd ?? onStepFinish,
		onError,
		onFinish,
		download: download2,
		generateId: generateId5,
		currentDate,
		now: now2
	});
}
var DefaultStreamObjectResult = class {
	constructor({ model: modelArg, headers, telemetry, settings, maxRetries: maxRetriesArg, abortSignal, outputStrategy, instructions, system, prompt, messages, allowSystemInMessages, schemaName, schemaDescription, providerOptions, repairText, onStart, onStepStart, onStepFinish, onError, onFinish, download: download2, generateId: generateId5, currentDate, now: now2 }) {
		this._object = new DelayedPromise();
		this._usage = new DelayedPromise();
		this._providerMetadata = new DelayedPromise();
		this._warnings = new DelayedPromise();
		this._request = new DelayedPromise();
		this._response = new DelayedPromise();
		this._finishReason = new DelayedPromise();
		const model = resolveLanguageModel(modelArg);
		const { maxRetries, retry } = prepareRetries({
			maxRetries: maxRetriesArg,
			abortSignal
		});
		const callSettings = prepareLanguageModelCallOptions(settings);
		const telemetryDispatcher = createTelemetryDispatcher({ telemetry });
		const self = this;
		const stitchableStream = createStitchableStream();
		const eventProcessor = new TransformStream({ transform(chunk, controller) {
			controller.enqueue(chunk);
			if (chunk.type === "error") notify({
				event: { error: wrapGatewayError(chunk.error) },
				callbacks: onError
			});
		} });
		this.baseStream = stitchableStream.stream.pipeThrough(eventProcessor);
		const callId = generateId5();
		(async () => {
			const jsonSchema3 = await outputStrategy.jsonSchema();
			await notify({
				event: {
					callId,
					operationId: "ai.streamObject",
					provider: model.provider,
					modelId: model.modelId,
					system: instructions ?? system,
					prompt,
					messages,
					maxOutputTokens: callSettings.maxOutputTokens,
					temperature: callSettings.temperature,
					topP: callSettings.topP,
					topK: callSettings.topK,
					presencePenalty: callSettings.presencePenalty,
					frequencyPenalty: callSettings.frequencyPenalty,
					seed: callSettings.seed,
					maxRetries,
					headers,
					providerOptions,
					output: outputStrategy.type,
					schema: jsonSchema3,
					schemaName,
					schemaDescription
				},
				callbacks: [onStart, telemetryDispatcher.onStart]
			});
			const standardizedPrompt = await standardizePrompt({
				instructions,
				system,
				prompt,
				messages,
				allowSystemInMessages
			});
			const callOptions = {
				responseFormat: {
					type: "json",
					schema: jsonSchema3,
					name: schemaName,
					description: schemaDescription
				},
				...prepareLanguageModelCallOptions(settings),
				prompt: await convertToLanguageModelPrompt({
					prompt: standardizedPrompt,
					supportedUrls: await model.supportedUrls,
					download: download2,
					abortSignal,
					provider: model.provider.split(".")[0]
				}),
				providerOptions,
				abortSignal,
				headers,
				includeRawChunks: false
			};
			await notify({
				event: {
					callId,
					stepNumber: 0,
					provider: model.provider,
					modelId: model.modelId,
					providerOptions,
					headers,
					promptMessages: callOptions.prompt
				},
				callbacks: [onStepStart, telemetryDispatcher.onObjectStepStart]
			});
			const transformer = { transform: (chunk, controller) => {
				switch (chunk.type) {
					case "text-delta":
						controller.enqueue(chunk.delta);
						break;
					case "response-metadata":
					case "finish":
					case "error":
					case "stream-start": controller.enqueue(chunk);
				}
			} };
			const startTimestampMs = now2();
			const { stream, response, request } = await retry(() => model.doStream(callOptions));
			self._request.resolve(request ?? {});
			let warnings;
			let usage = createNullLanguageModelUsage();
			let finishReason;
			let providerMetadata;
			let object3;
			let error;
			let terminalError;
			let msToFirstChunk = void 0;
			let accumulatedText = "";
			let textDelta = "";
			let fullResponse = {
				id: generateId5(),
				timestamp: currentDate(),
				modelId: model.modelId
			};
			let latestObjectJson = void 0;
			let latestObject = void 0;
			let isFirstChunk = true;
			let isFirstDelta = true;
			const transformedStream = stream.pipeThrough(new TransformStream(transformer)).pipeThrough(new TransformStream({
				async transform(chunk, controller) {
					if (typeof chunk === "object" && chunk.type === "stream-start") {
						warnings = chunk.warnings;
						return;
					}
					if (isFirstChunk) {
						msToFirstChunk = now2() - startTimestampMs;
						isFirstChunk = false;
					}
					if (typeof chunk === "string") {
						accumulatedText += chunk;
						textDelta += chunk;
						const { value: currentObjectJson, state: parseState } = await parsePartialJson(accumulatedText);
						if (currentObjectJson !== void 0 && !isDeepEqualData(latestObjectJson, currentObjectJson)) {
							const validationResult = await outputStrategy.validatePartialResult({
								value: currentObjectJson,
								textDelta,
								latestObject,
								isFirstDelta,
								isFinalDelta: parseState === "successful-parse"
							});
							if (validationResult.success && !isDeepEqualData(latestObject, validationResult.value.partial)) {
								latestObjectJson = currentObjectJson;
								latestObject = validationResult.value.partial;
								controller.enqueue({
									type: "object",
									object: latestObject
								});
								controller.enqueue({
									type: "text-delta",
									textDelta: validationResult.value.textDelta
								});
								textDelta = "";
								isFirstDelta = false;
							}
						}
						return;
					}
					switch (chunk.type) {
						case "response-metadata":
							fullResponse = {
								id: chunk.id ?? fullResponse.id,
								timestamp: chunk.timestamp ?? fullResponse.timestamp,
								modelId: chunk.modelId ?? fullResponse.modelId
							};
							break;
						case "error":
							if (terminalError === void 0) {
								const wrappedError = wrapGatewayError(chunk.error);
								terminalError = { error: wrappedError };
								error = wrappedError;
								finishReason = "error";
								self.rejectResultPromises(wrappedError);
							}
							controller.enqueue(chunk);
							break;
						case "finish":
							if (textDelta !== "") controller.enqueue({
								type: "text-delta",
								textDelta
							});
							finishReason = terminalError === void 0 ? chunk.finishReason.unified : "error";
							usage = asLanguageModelUsage(chunk.usage);
							providerMetadata = chunk.providerMetadata;
							controller.enqueue({
								...chunk,
								finishReason,
								usage,
								response: fullResponse
							});
							logWarnings({
								warnings: warnings ?? [],
								provider: model.provider,
								model: model.modelId
							});
							if (terminalError !== void 0) break;
							self._usage.resolve(usage);
							self._providerMetadata.resolve(providerMetadata);
							self._warnings.resolve(warnings);
							self._response.resolve({
								...fullResponse,
								headers: response?.headers
							});
							self._finishReason.resolve(finishReason ?? "other");
							try {
								object3 = await parseAndValidateObjectResultWithRepair(accumulatedText, outputStrategy, repairText, {
									response: fullResponse,
									usage,
									finishReason
								});
								self._object.resolve(object3);
							} catch (e) {
								error = e;
								self._object.reject(e);
							}
							break;
						default: controller.enqueue(chunk);
					}
				},
				async flush(controller) {
					try {
						const finalUsage = usage ?? {
							promptTokens: NaN,
							completionTokens: NaN,
							totalTokens: NaN
						};
						await notify({
							event: {
								callId,
								stepNumber: 0,
								provider: model.provider,
								modelId: model.modelId,
								finishReason: finishReason ?? "other",
								usage: finalUsage,
								objectText: accumulatedText,
								msToFirstChunk,
								reasoning: void 0,
								warnings,
								request: request ?? {},
								response: {
									...fullResponse,
									headers: response?.headers
								},
								providerMetadata
							},
							callbacks: [onStepFinish, telemetryDispatcher.onObjectStepEnd]
						});
						await notify({
							event: {
								callId,
								object: object3,
								error,
								reasoning: void 0,
								finishReason: finishReason ?? "other",
								usage: finalUsage,
								warnings,
								request: request ?? {},
								response: {
									...fullResponse,
									headers: response?.headers
								},
								providerMetadata
							},
							callbacks: [onFinish, telemetryDispatcher.onEnd]
						});
					} catch (error2) {
						controller.enqueue({
							type: "error",
							error: error2
						});
					}
				}
			}));
			stitchableStream.addStream(transformedStream, { onError(error2) {
				const wrappedError = wrapGatewayError(error2);
				self.rejectResultPromises(wrappedError);
				notify({
					event: { error: wrappedError },
					callbacks: onError
				});
			} });
		})().catch(async (error) => {
			self.rejectResultPromises(error);
			await telemetryDispatcher.onError?.({
				callId,
				error
			});
			stitchableStream.addStream(new ReadableStream({ start(controller) {
				controller.enqueue({
					type: "error",
					error
				});
				controller.close();
			} }));
		}).finally(() => {
			stitchableStream.close();
		});
		this.outputStrategy = outputStrategy;
	}
	rejectResultPromises(error) {
		this.rejectResultPromise({
			delayedPromise: this._object,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._usage,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._providerMetadata,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._warnings,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._request,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._response,
			error
		});
		this.rejectResultPromise({
			delayedPromise: this._finishReason,
			error
		});
	}
	rejectResultPromise({ delayedPromise, error }) {
		if (delayedPromise.isPending()) {
			delayedPromise.reject(error);
			markPromiseAsHandled2(delayedPromise.promise);
		}
	}
	get object() {
		return this._object.promise;
	}
	get usage() {
		return this._usage.promise;
	}
	get providerMetadata() {
		return this._providerMetadata.promise;
	}
	get warnings() {
		return this._warnings.promise;
	}
	get request() {
		return this._request.promise;
	}
	get response() {
		return this._response.promise;
	}
	get finishReason() {
		return this._finishReason.promise;
	}
	get partialObjectStream() {
		return createAsyncIterableStream(this.baseStream.pipeThrough(new TransformStream({ transform(chunk, controller) {
			switch (chunk.type) {
				case "object":
					controller.enqueue(chunk.object);
					break;
				case "text-delta":
				case "finish":
				case "error": break;
				default: throw new Error(`Unsupported chunk type: ${chunk}`);
			}
		} })));
	}
	get elementStream() {
		return this.outputStrategy.createElementStream(this.baseStream);
	}
	get textStream() {
		return createAsyncIterableStream(this.baseStream.pipeThrough(new TransformStream({ transform(chunk, controller) {
			switch (chunk.type) {
				case "text-delta":
					controller.enqueue(chunk.textDelta);
					break;
				case "object":
				case "finish":
				case "error": break;
				default: throw new Error(`Unsupported chunk type: ${chunk}`);
			}
		} })));
	}
	get fullStream() {
		return createAsyncIterableStream(this.baseStream);
	}
	pipeTextStreamToResponse(response, init) {
		return pipeTextStreamToResponse({
			response,
			stream: this.textStream,
			...init
		});
	}
	toTextStreamResponse(init) {
		return createTextStreamResponse({
			stream: this.textStream,
			...init
		});
	}
};
var DefaultGeneratedAudioFile = class extends DefaultGeneratedFile {
	constructor({ data, mediaType }) {
		super({
			data,
			mediaType
		});
		let format = "mp3";
		if (mediaType) {
			const mediaTypeParts = mediaType.split("/");
			if (mediaTypeParts.length === 2) {
				if (mediaType !== "audio/mpeg") format = mediaTypeParts[1];
			}
		}
		if (!format) throw new Error("Audio format must be provided or determinable from media type");
		this.format = format;
	}
};
async function generateSpeech({ model, text: text2, voice, outputFormat, instructions, speed, language, providerOptions = {}, maxRetries: maxRetriesArg, abortSignal, headers }) {
	const resolvedModel = resolveSpeechModel(model);
	if (!resolvedModel) throw new Error("Model could not be resolved");
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const { retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const result = await retry(() => resolvedModel.doGenerate({
		text: text2,
		voice,
		outputFormat,
		instructions,
		speed,
		language,
		abortSignal,
		headers: headersWithUserAgent,
		providerOptions
	}));
	if (!result.audio || result.audio.length === 0) throw new NoSpeechGeneratedError({ responses: [result.response] });
	logWarnings({
		warnings: result.warnings,
		provider: resolvedModel.provider,
		model: resolvedModel.modelId
	});
	const detectedMediaType = detectMediaType({
		data: result.audio,
		topLevelType: "audio"
	});
	return new DefaultSpeechResult({
		audio: new DefaultGeneratedAudioFile({
			data: result.audio,
			mediaType: detectedMediaType ?? getResponseAudioMediaType(result.response.headers) ?? getOutputFormatMediaType(outputFormat) ?? "audio/mp3"
		}),
		warnings: result.warnings,
		responses: [result.response],
		providerMetadata: result.providerMetadata
	});
}
function getResponseAudioMediaType(headers) {
	const mediaType = Object.entries(headers ?? {}).find(([name25]) => name25.toLowerCase() === "content-type")?.[1];
	if (mediaType == null) return;
	const normalizedMediaType = mediaType.split(";", 1)[0].trim().toLowerCase();
	if (normalizedMediaType.length === 0) return;
	return normalizedMediaType.startsWith("audio/") ? normalizedMediaType : void 0;
}
function getOutputFormatMediaType(outputFormat) {
	if (outputFormat == null) return;
	switch (outputFormat.trim().toLowerCase()) {
		case "pcm":
		case "audio/pcm": return "audio/pcm";
		case "audio/l16": return "audio/l16";
		case "mulaw":
		case "audio/mulaw": return "audio/mulaw";
		case "alaw":
		case "audio/alaw": return "audio/alaw";
		default: return;
	}
}
var DefaultSpeechResult = class {
	constructor(options) {
		this.audio = options.audio;
		this.warnings = options.warnings;
		this.responses = options.responses;
		this.providerMetadata = options.providerMetadata ?? {};
	}
};
var experimental_generateSpeech = generateSpeech;
function pruneMessages({ messages, reasoning = "none", toolCalls = [], emptyMessages = "remove" }) {
	if (reasoning === "all" || reasoning === "before-last-message") messages = messages.map((message, messageIndex) => {
		if (message.role !== "assistant" || typeof message.content === "string" || reasoning === "before-last-message" && messageIndex === messages.length - 1) return message;
		return {
			...message,
			content: message.content.filter((part) => part.type !== "reasoning" && part.type !== "reasoning-file")
		};
	});
	if (toolCalls === "none") toolCalls = [];
	else if (toolCalls === "all") toolCalls = [{ type: "all" }];
	else if (toolCalls === "before-last-message") toolCalls = [{ type: "before-last-message" }];
	else if (typeof toolCalls === "string") toolCalls = [{ type: toolCalls }];
	for (const toolCall of toolCalls) {
		const keepLastMessagesCount = toolCall.type === "all" ? void 0 : toolCall.type === "before-last-message" ? 1 : Number(toolCall.type.slice(12).slice(0, -9));
		const keptToolCallIds = /* @__PURE__ */ new Set();
		const keptApprovalIds = /* @__PURE__ */ new Set();
		if (keepLastMessagesCount != null) {
			for (const message of messages.slice(-keepLastMessagesCount)) if ((message.role === "assistant" || message.role === "tool") && typeof message.content !== "string") {
				for (const part of message.content) if (part.type === "tool-call" || part.type === "tool-result") keptToolCallIds.add(part.toolCallId);
				else if (part.type === "tool-approval-request" || part.type === "tool-approval-response") keptApprovalIds.add(part.approvalId);
			}
		}
		const toolCallIdToToolName = /* @__PURE__ */ new Map();
		for (const message of messages) if ((message.role === "assistant" || message.role === "tool") && typeof message.content !== "string") {
			for (const part of message.content) if (part.type === "tool-call" || part.type === "tool-result") toolCallIdToToolName.set(part.toolCallId, part.toolName);
		}
		const approvalIdToToolCallId = /* @__PURE__ */ new Map();
		const approvalIdToToolName = /* @__PURE__ */ new Map();
		for (const message of messages) if ((message.role === "assistant" || message.role === "tool") && typeof message.content !== "string") {
			for (const part of message.content) if (part.type === "tool-approval-request") {
				approvalIdToToolCallId.set(part.approvalId, part.toolCallId);
				const toolName = toolCallIdToToolName.get(part.toolCallId);
				if (toolName != null) approvalIdToToolName.set(part.approvalId, toolName);
			}
		}
		for (const approvalId of keptApprovalIds) {
			const toolCallId = approvalIdToToolCallId.get(approvalId);
			if (toolCallId != null) keptToolCallIds.add(toolCallId);
		}
		messages = messages.map((message, messageIndex) => {
			if (message.role !== "assistant" && message.role !== "tool" || typeof message.content === "string" || keepLastMessagesCount && messageIndex >= messages.length - keepLastMessagesCount) return message;
			return {
				...message,
				content: message.content.filter((part) => {
					if (part.type !== "tool-call" && part.type !== "tool-result" && part.type !== "tool-approval-request" && part.type !== "tool-approval-response") return true;
					if ((part.type === "tool-call" || part.type === "tool-result") && keptToolCallIds.has(part.toolCallId) || (part.type === "tool-approval-request" || part.type === "tool-approval-response") && keptApprovalIds.has(part.approvalId)) return true;
					const partToolName = part.type === "tool-call" || part.type === "tool-result" ? part.toolName : approvalIdToToolName.get(part.approvalId);
					return toolCall.tools != null && partToolName != null && !toolCall.tools.includes(partToolName);
				})
			};
		});
	}
	if (emptyMessages === "remove") messages = messages.filter((message) => message.content.length > 0);
	return messages;
}
var CHUNKING_REGEXPS = {
	word: /\S+\s+/m,
	line: /\n+/m
};
function isDocumentHidden() {
	return typeof document !== "undefined" && document.visibilityState === "hidden";
}
function smoothStream({ delayInMs = 10, chunking = "word", _internal: { delay: delay$2 = delay } = {} } = {}) {
	let detectChunk;
	if (chunking != null && typeof chunking === "object" && "segment" in chunking && typeof chunking.segment === "function") {
		const segmenter = chunking;
		detectChunk = (buffer) => {
			if (buffer.length === 0) return null;
			return segmenter.segment(buffer)[Symbol.iterator]().next().value?.segment || null;
		};
	} else if (typeof chunking === "function") detectChunk = (buffer) => {
		const match = chunking(buffer);
		if (match == null) return null;
		if (!match.length) throw new Error(`Chunking function must return a non-empty string.`);
		if (!buffer.startsWith(match)) throw new Error(`Chunking function must return a match that is a prefix of the buffer. Received: "${match}" expected to start with "${buffer}"`);
		return match;
	};
	else {
		const chunkingRegex = typeof chunking === "string" ? CHUNKING_REGEXPS[chunking] : chunking instanceof RegExp ? chunking : void 0;
		if (chunkingRegex == null) throw new InvalidArgumentError$1({
			argument: "chunking",
			message: `Chunking must be "word", "line", a RegExp, an Intl.Segmenter, or a ChunkDetector function. Received: ${chunking}`
		});
		detectChunk = (buffer) => {
			const lastIndex = chunkingRegex.lastIndex;
			chunkingRegex.lastIndex = 0;
			let match;
			try {
				match = chunkingRegex.exec(buffer);
			} finally {
				chunkingRegex.lastIndex = lastIndex;
			}
			if (!match) return null;
			if (!match[0].length) throw new Error(`Chunking RegExp must not match an empty string.`);
			return buffer.slice(0, match.index) + match[0];
		};
	}
	return () => {
		let buffer = "";
		let id = "";
		let type = void 0;
		let providerMetadata = void 0;
		function flushBuffer(controller) {
			if (type !== void 0 && (buffer.length > 0 || providerMetadata != null)) {
				controller.enqueue({
					type,
					text: buffer,
					id,
					...providerMetadata != null ? { providerMetadata } : {}
				});
				buffer = "";
				providerMetadata = void 0;
			}
		}
		return new TransformStream({ async transform(chunk, controller) {
			if (chunk.type !== "text-delta" && chunk.type !== "reasoning-delta") {
				flushBuffer(controller);
				controller.enqueue(chunk);
				return;
			}
			if ((chunk.type !== type || chunk.id !== id) && (buffer.length > 0 || providerMetadata != null)) flushBuffer(controller);
			buffer += chunk.text;
			id = chunk.id;
			type = chunk.type;
			if (chunk.providerMetadata != null) providerMetadata = chunk.providerMetadata;
			let match;
			while ((match = detectChunk(buffer)) != null) {
				controller.enqueue({
					type,
					text: match,
					id
				});
				buffer = buffer.slice(match.length);
				await delay$2(isDocumentHidden() ? null : delayInMs);
			}
		} });
	};
}
function tagDescription(description) {
	if (typeof description === "string") return {
		type: "string",
		value: description
	};
	if (description == null) return { type: "none" };
	return { type: "function" };
}
async function fingerprintTools(tools) {
	const entries = await Promise.all(Object.keys(tools).map(async (name25) => {
		const tool3 = tools[name25];
		return [name25, await hashCanonical({
			description: tagDescription(tool3.description),
			inputSchema: await asSchema(tool3.inputSchema).jsonSchema,
			title: tool3.title
		})];
	}));
	return Object.fromEntries(entries);
}
function detectToolDrift(current, baseline) {
	const added = [];
	const removed = [];
	const changed = [];
	for (const name25 of Object.keys(current)) if (!Object.hasOwn(baseline, name25)) added.push(name25);
	else if (current[name25] !== baseline[name25]) changed.push(name25);
	for (const name25 of Object.keys(baseline)) if (!Object.hasOwn(current, name25)) removed.push(name25);
	return {
		added,
		removed,
		changed
	};
}
var defaultDownload = createDownload();
async function experimental_generateVideo({ model: modelArg, prompt: promptArg, n = 1, maxVideosPerCall, aspectRatio, resolution, duration, fps, seed, frameImages, inputReferences, generateAudio, providerOptions, maxRetries: maxRetriesArg, abortSignal, headers, download: downloadFn = defaultDownload, poll, webhook }) {
	const model = resolveVideoModel(modelArg);
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const { prompt, resolvedImage, normalizedFrameImages, effectiveInputReferences, warnings } = normalizeVideoCallInputs({
		promptArg,
		frameImages,
		inputReferences
	});
	const maxVideosPerCallWithDefault = maxVideosPerCall ?? await invokeModelMaxVideosPerCall(model) ?? 1;
	const hasStartStatus = model.doStart != null && model.doStatus != null;
	const useStartStatus = hasStartStatus && (poll != null || webhook != null || model.doGenerate == null);
	if (model.doGenerate == null && !hasStartStatus) throw new Error(`Video model ${model.modelId} does not implement doGenerate or doStart/doStatus.`);
	if ((poll != null || webhook != null) && !hasStartStatus) logWarnings({
		warnings: [{
			type: "other",
			message: "poll/webhook options were provided but the model does not support doStart/doStatus. Falling back to doGenerate."
		}],
		provider: model.provider,
		model: model.modelId
	});
	const callCount = Math.ceil(n / maxVideosPerCallWithDefault);
	const callVideoCounts = Array.from({ length: callCount }, (_, index) => {
		const remaining = n - index * maxVideosPerCallWithDefault;
		return Math.min(remaining, maxVideosPerCallWithDefault);
	});
	const results = await Promise.all(callVideoCounts.map(async (callVideoCount) => {
		const callOptions = {
			prompt,
			n: callVideoCount,
			aspectRatio,
			resolution,
			duration,
			fps,
			seed,
			image: resolvedImage,
			frameImages: normalizedFrameImages,
			inputReferences: effectiveInputReferences,
			generateAudio,
			providerOptions: providerOptions ?? {},
			headers: headersWithUserAgent,
			abortSignal
		};
		if (useStartStatus) return executeStartStatusFlow({
			model,
			callOptions,
			poll,
			webhook,
			maxRetries,
			retry
		});
		return retry(() => model.doGenerate(callOptions));
	}));
	const videos = [];
	const responses = [];
	const providerMetadata = {};
	for (const result of results) {
		for (const videoData of result.videos) switch (videoData.type) {
			case "url": {
				const { data, mediaType: downloadedMediaType } = await downloadFn({
					url: new URL(videoData.url),
					abortSignal
				});
				const isUsableMediaType = (type) => !!type && type !== "application/octet-stream";
				const mediaType = isUsableMediaType(videoData.mediaType) && videoData.mediaType || isUsableMediaType(downloadedMediaType) && downloadedMediaType || detectMediaType({
					data,
					topLevelType: "video"
				}) || "video/mp4";
				videos.push(new DefaultGeneratedFile({
					data,
					mediaType
				}));
				break;
			}
			case "base64":
				videos.push(new DefaultGeneratedFile({
					data: videoData.data,
					mediaType: videoData.mediaType || "video/mp4"
				}));
				break;
			case "binary": {
				const mediaType = videoData.mediaType || detectMediaType({
					data: videoData.data,
					topLevelType: "video"
				}) || "video/mp4";
				videos.push(new DefaultGeneratedFile({
					data: videoData.data,
					mediaType
				}));
				break;
			}
		}
		warnings.push(...result.warnings);
		responses.push({
			timestamp: result.response.timestamp,
			modelId: result.response.modelId,
			headers: result.response.headers,
			providerMetadata: result.providerMetadata
		});
		if (result.providerMetadata != null) mergeProviderMetadata(providerMetadata, result.providerMetadata);
	}
	if (videos.length === 0) throw new NoVideoGeneratedError({ responses });
	if (warnings.length > 0) logWarnings({
		warnings,
		provider: model.provider,
		model: model.modelId
	});
	return {
		video: videos[0],
		videos,
		warnings,
		responses,
		providerMetadata
	};
}
async function executeStartStatusFlow({ model, callOptions, poll: pollConfig, webhook: webhookFactory, maxRetries, retry }) {
	const earlyWarnings = [];
	let webhookUrl;
	let webhookReceived;
	if (webhookFactory != null) {
		if (model.handleWebhookOption != null) {
			const result = await model.handleWebhookOption({ webhook: webhookFactory });
			webhookReceived = Promise.resolve(result.received);
			webhookReceived.catch(() => {});
			webhookUrl = result.webhookUrl;
		} else earlyWarnings.push({
			type: "unsupported",
			feature: "webhook",
			details: "This model does not support webhooks. Falling back to polling."
		});
	}
	const callerIdempotencyKey = Object.entries(callOptions.headers ?? {}).find(([key, value]) => key.toLowerCase() === "idempotency-key" && value !== void 0);
	const startCallOptions = {
		...callOptions,
		headers: {
			...callOptions.headers,
			...callerIdempotencyKey ? {} : { "idempotency-key": `aisdk_vid_${generateId()}` }
		},
		webhookUrl
	};
	const startResult = await retry(() => model.doStart(startCallOptions));
	const allWarnings = [...earlyWarnings, ...startResult.warnings];
	let operationProviderMetadata = startResult.providerMetadata == null ? void 0 : { ...startResult.providerMetadata };
	const intervalMs = pollConfig?.intervalMs ?? 5e3;
	const timeoutMs = pollConfig?.timeoutMs ?? 6e5;
	const delay$3 = pollConfig?.delay ?? delay;
	const startTime = Date.now();
	const pollingTimeoutError = /* @__PURE__ */ new Error(`Video generation timed out after ${timeoutMs}ms.`);
	if (webhookReceived != null) await waitForWebhook({
		received: webhookReceived,
		timeoutMs,
		abortSignal: callOptions.abortSignal,
		delay: delay$3
	});
	while (true) {
		if (webhookReceived == null) {
			const elapsedMs = Date.now() - startTime;
			if (elapsedMs >= timeoutMs) throw pollingTimeoutError;
			await delay$3(Math.min(intervalMs, timeoutMs - elapsedMs), { abortSignal: callOptions.abortSignal });
			if (Date.now() - startTime >= timeoutMs) throw pollingTimeoutError;
		}
		let statusResult;
		if (webhookReceived != null) statusResult = await retry(() => model.doStatus({
			operation: startResult.operation,
			abortSignal: callOptions.abortSignal,
			headers: callOptions.headers
		}));
		else {
			const statusTimeoutController = new AbortController();
			const statusAbortSignal = mergeAbortSignals(callOptions.abortSignal, statusTimeoutController.signal);
			const statusTimeoutId = setTimeout(() => statusTimeoutController.abort(pollingTimeoutError), timeoutMs - (Date.now() - startTime));
			const statusTimeoutPromise = new Promise((_, reject) => {
				statusTimeoutController.signal.addEventListener("abort", () => reject(pollingTimeoutError), { once: true });
			});
			const { retry: statusRetry } = prepareRetries({
				maxRetries,
				abortSignal: statusAbortSignal
			});
			try {
				statusResult = await Promise.race([statusRetry(() => model.doStatus({
					operation: startResult.operation,
					abortSignal: statusAbortSignal,
					headers: callOptions.headers
				})), statusTimeoutPromise]);
			} catch (error) {
				if (statusTimeoutController.signal.aborted) throw pollingTimeoutError;
				throw error;
			} finally {
				clearTimeout(statusTimeoutId);
			}
		}
		if (statusResult.status === "error") throw new Error(statusResult.error);
		if (statusResult.warnings != null) allWarnings.push(...statusResult.warnings);
		if (statusResult.providerMetadata != null) {
			operationProviderMetadata ??= {};
			mergeProviderMetadata(operationProviderMetadata, statusResult.providerMetadata);
		}
		if (statusResult.status === "completed") return {
			videos: statusResult.videos,
			warnings: allWarnings,
			providerMetadata: operationProviderMetadata,
			response: statusResult.response
		};
		if (webhookReceived != null) throw new Error("Video generation did not complete after webhook notification.");
	}
}
async function waitForWebhook({ received, timeoutMs, abortSignal, delay }) {
	const timeoutController = typeof globalThis.AbortController === "function" ? new globalThis.AbortController() : void 0;
	try {
		await Promise.race([received, delay(timeoutMs, { abortSignal: timeoutController == null ? abortSignal : mergeAbortSignals(abortSignal, timeoutController.signal) }).then(() => {
			throw new Error(`Video generation timed out after ${timeoutMs}ms.`);
		})]);
	} finally {
		timeoutController?.abort();
	}
}
function mergeProviderMetadata(target, source) {
	for (const [providerName, metadataValue] of Object.entries(source)) {
		const existingMetadata = target[providerName];
		if (existingMetadata != null && typeof existingMetadata === "object" && metadataValue != null && typeof metadataValue === "object") {
			target[providerName] = {
				...existingMetadata,
				...metadataValue
			};
			if ("videos" in existingMetadata && Array.isArray(existingMetadata.videos) && "videos" in metadataValue && Array.isArray(metadataValue.videos)) target[providerName].videos = [...existingMetadata.videos, ...metadataValue.videos];
		} else target[providerName] = metadataValue;
	}
}
function normalizePrompt2(promptArg) {
	if (typeof promptArg === "string") return {
		prompt: promptArg,
		image: void 0
	};
	return {
		prompt: promptArg.text,
		image: promptArg.image != null ? normalizeImageData(promptArg.image) : void 0
	};
}
function normalizeVideoCallInputs({ promptArg, frameImages, inputReferences }) {
	const { prompt, image } = normalizePrompt2(promptArg);
	const normalizedFrameImages = frameImages?.flatMap((frame) => {
		const normalizedImage = normalizeImageData(frame.image);
		return normalizedImage != null ? [{
			image: normalizedImage,
			frameType: frame.frameType
		}] : [];
	});
	const normalizedInputReferences = inputReferences?.flatMap((reference) => {
		const normalized = normalizeReferenceData(reference);
		return normalized != null ? [normalized] : [];
	});
	const effectiveInputReferences = normalizedFrameImages != null && normalizedFrameImages.length > 0 ? void 0 : normalizedInputReferences;
	const warnings = [];
	if (normalizedFrameImages != null && normalizedFrameImages.length > 0 && normalizedInputReferences != null && normalizedInputReferences.length > 0) warnings.push({
		type: "other",
		message: "inputReferences were ignored because frameImages were provided; frameImages and inputReferences cannot be combined."
	});
	const firstFrameImage = normalizedFrameImages?.find((frame) => frame.frameType === "first_frame")?.image;
	if (image != null && firstFrameImage != null) warnings.push({
		type: "other",
		message: "prompt.image was ignored because a first_frame frameImage was provided; the first_frame frameImage takes precedence as the start image."
	});
	return {
		prompt,
		resolvedImage: firstFrameImage ?? image,
		normalizedFrameImages,
		effectiveInputReferences,
		warnings
	};
}
function detectFileMediaType(data, restrictToImages) {
	return (restrictToImages ? detectMediaType({
		data,
		topLevelType: "image"
	}) : detectMediaType({ data })) ?? "image/png";
}
function normalizeImageData(dataContent, { restrictToImages = true } = {}) {
	if (typeof dataContent === "string") {
		if (dataContent.startsWith("http://") || dataContent.startsWith("https://")) return {
			type: "url",
			url: dataContent
		};
		if (dataContent.startsWith("data:")) {
			const { mediaType, base64Content } = splitDataUrl(dataContent);
			const data = convertBase64ToUint8Array(base64Content ?? "");
			return {
				type: "file",
				mediaType: mediaType ?? detectFileMediaType(data, restrictToImages),
				data
			};
		}
		const bytes = convertBase64ToUint8Array(dataContent);
		return {
			type: "file",
			mediaType: detectFileMediaType(bytes, restrictToImages),
			data: bytes
		};
	}
	if (dataContent instanceof Uint8Array || dataContent instanceof ArrayBuffer) {
		const bytes = dataContent instanceof Uint8Array ? dataContent : new Uint8Array(dataContent);
		return {
			type: "file",
			mediaType: detectFileMediaType(bytes, restrictToImages),
			data: bytes
		};
	}
}
function normalizeReferenceData(reference) {
	if (!(typeof reference === "object" && reference != null && !(reference instanceof Uint8Array) && !(reference instanceof ArrayBuffer) && "data" in reference)) return normalizeImageData(reference, { restrictToImages: false });
	const normalized = normalizeImageData(reference.data, { restrictToImages: false });
	if (normalized == null) return normalized;
	return {
		...normalized,
		...reference.mediaType != null ? { mediaType: reference.mediaType } : {}
	};
}
async function invokeModelMaxVideosPerCall(model) {
	if (typeof model.maxVideosPerCall === "function") return await model.maxVideosPerCall({ modelId: model.modelId });
	return model.maxVideosPerCall;
}
async function experimental_startVideo({ model: modelArg, prompt: promptArg, n = 1, maxVideosPerCall, aspectRatio, resolution, duration, fps, seed, frameImages, inputReferences, generateAudio, providerOptions, maxRetries: maxRetriesArg, abortSignal, headers, webhookUrl }) {
	const model = resolveVideoModel(modelArg);
	if (model.doStart == null) throw new Error(`Video model ${model.modelId} does not implement doStart. Use generateVideo for models without an asynchronous start/status flow.`);
	if (!Number.isInteger(n) || n < 1) throw new Error(`Invalid n: expected a positive integer, received ${JSON.stringify(n)}.`);
	const knownMaxVideosPerCall = maxVideosPerCall ?? (typeof model.maxVideosPerCall === "function" ? await model.maxVideosPerCall({ modelId: model.modelId }) : model.maxVideosPerCall);
	if (knownMaxVideosPerCall != null && n > knownMaxVideosPerCall) throw new Error(`Video model ${model.modelId} supports at most ${knownMaxVideosPerCall} video(s) per call, but ${n} were requested. Split the batch across multiple startVideo calls.`);
	const { prompt, resolvedImage, normalizedFrameImages, effectiveInputReferences, warnings } = normalizeVideoCallInputs({
		promptArg,
		frameImages,
		inputReferences
	});
	const { retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const callerIdempotencyKey = Object.entries(headers ?? {}).find(([key, value]) => key.toLowerCase() === "idempotency-key" && value !== void 0);
	const callOptions = {
		prompt,
		n,
		aspectRatio,
		resolution,
		duration,
		fps,
		seed,
		image: resolvedImage,
		frameImages: normalizedFrameImages,
		inputReferences: effectiveInputReferences,
		generateAudio,
		providerOptions: providerOptions ?? {},
		headers: {
			...withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`),
			...callerIdempotencyKey ? {} : { "idempotency-key": `aisdk_vid_${generateId()}` }
		},
		abortSignal,
		webhookUrl
	};
	const startResult = await retry(() => model.doStart(callOptions));
	return {
		operation: startResult.operation,
		warnings: [...warnings, ...startResult.warnings],
		providerMetadata: startResult.providerMetadata,
		response: startResult.response
	};
}
async function experimental_getVideoStatus(modelArg, { operation, headers, abortSignal, maxRetries: maxRetriesArg }) {
	const model = resolveVideoModel(modelArg);
	if (model.doStatus == null) throw new Error(`Video model ${model.modelId} does not implement doStatus.`);
	const { retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	return retry(() => model.doStatus({
		operation,
		headers: withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`),
		abortSignal
	}));
}
function defaultEmbeddingSettingsMiddleware({ settings }) {
	return {
		specificationVersion: "v4",
		transformParams: async ({ params }) => {
			return mergeObjects(settings, params);
		}
	};
}
function defaultInstructionsMiddleware({ instructions }) {
	const defaultSystemMessages = typeof instructions === "string" ? [{
		role: "system",
		content: instructions
	}] : asArray(instructions).map((message) => ({
		role: "system",
		content: message.content,
		providerOptions: message.providerOptions
	}));
	return {
		specificationVersion: "v4",
		transformParams: async ({ params }) => {
			if (defaultSystemMessages.length === 0 || params.prompt.some((message) => message.role === "system")) return params;
			return {
				...params,
				prompt: [...defaultSystemMessages, ...params.prompt]
			};
		}
	};
}
function defaultSettingsMiddleware({ settings }) {
	return {
		specificationVersion: "v4",
		transformParams: async ({ params }) => {
			return mergeObjects(settings, params);
		}
	};
}
function defaultTransform(text2) {
	return text2.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "").trim();
}
function stripMarkdownCodeFenceSuffix(text2) {
	return text2.replace(/\n?```\s*$/, "").trimEnd();
}
function getPotentialSuffixStart(text2) {
	let index = text2.length;
	while (index > 0 && /\s/.test(text2[index - 1])) index--;
	let backtickCount = 0;
	while (index > 0 && backtickCount < 3 && text2[index - 1] === "`") {
		index--;
		backtickCount++;
	}
	if (backtickCount > 0) while (index > 0 && /\s/.test(text2[index - 1])) index--;
	return index;
}
function extractJsonMiddleware(options) {
	const transform = options?.transform ?? defaultTransform;
	const hasCustomTransform = options?.transform !== void 0;
	return {
		specificationVersion: "v4",
		wrapGenerate: async ({ doGenerate }) => {
			const { content, ...rest } = await doGenerate();
			const transformedContent = [];
			for (const part of content) {
				if (part.type !== "text") {
					transformedContent.push(part);
					continue;
				}
				transformedContent.push({
					...part,
					text: transform(part.text)
				});
			}
			return {
				content: transformedContent,
				...rest
			};
		},
		wrapStream: async ({ doStream }) => {
			const { stream, ...rest } = await doStream();
			const textBlocks = createIdMap();
			return {
				stream: stream.pipeThrough(new TransformStream({ transform: (chunk, controller) => {
					if (chunk.type === "text-start") {
						textBlocks[chunk.id] = {
							startEvent: chunk,
							phase: hasCustomTransform ? "buffering" : "prefix",
							buffer: "",
							prefixStripped: false
						};
						return;
					}
					if (chunk.type === "text-delta") {
						const block = textBlocks[chunk.id];
						if (!block) {
							controller.enqueue(chunk);
							return;
						}
						block.buffer += chunk.delta;
						if (block.phase === "buffering") return;
						if (block.phase === "prefix") {
							if (block.buffer.length > 0 && !block.buffer.startsWith("`")) {
								block.phase = "streaming";
								controller.enqueue(block.startEvent);
							} else if (block.buffer.startsWith("```")) {
								if (block.buffer.includes("\n")) {
									const prefixMatch = block.buffer.match(/^```(?:json)?\s*\n/);
									if (prefixMatch) {
										block.buffer = block.buffer.slice(prefixMatch[0].length);
										block.prefixStripped = true;
										block.phase = "streaming";
										controller.enqueue(block.startEvent);
									} else {
										block.phase = "streaming";
										controller.enqueue(block.startEvent);
									}
								}
							} else if (block.buffer.length >= 3 && !block.buffer.startsWith("```")) {
								block.phase = "streaming";
								controller.enqueue(block.startEvent);
							}
						}
						if (block.phase === "streaming") {
							const potentialSuffixStart = getPotentialSuffixStart(block.buffer);
							const toStream = block.buffer.slice(0, potentialSuffixStart);
							block.buffer = block.buffer.slice(potentialSuffixStart);
							if (toStream.length === 0) return;
							controller.enqueue({
								type: "text-delta",
								id: chunk.id,
								delta: toStream
							});
						}
						return;
					}
					if (chunk.type === "text-end") {
						const block = textBlocks[chunk.id];
						if (block) {
							if (block.phase === "prefix" || block.phase === "buffering") controller.enqueue(block.startEvent);
							let remaining = block.buffer;
							if (block.phase === "buffering") remaining = transform(remaining);
							else if (block.prefixStripped) remaining = stripMarkdownCodeFenceSuffix(remaining);
							else if (block.phase === "prefix") remaining = transform(remaining);
							else remaining = stripMarkdownCodeFenceSuffix(remaining);
							if (remaining.length > 0) controller.enqueue({
								type: "text-delta",
								id: chunk.id,
								delta: remaining
							});
							controller.enqueue(chunk);
							delete textBlocks[chunk.id];
							return;
						}
					}
					controller.enqueue(chunk);
				} })),
				...rest
			};
		}
	};
}
function getPotentialStartIndex(text2, searchedText) {
	if (searchedText.length === 0) return null;
	const directIndex = text2.indexOf(searchedText);
	if (directIndex !== -1) return directIndex;
	for (let i = text2.length - 1; i >= 0; i--) {
		const suffix = text2.substring(i);
		if (searchedText.startsWith(suffix)) return i;
	}
	return null;
}
function extractReasoningMiddleware({ tagName, separator = "\n", startWithReasoning = false }) {
	const openingTag = `<${tagName}>`;
	const closingTag = `</${tagName}>`;
	return {
		specificationVersion: "v4",
		wrapGenerate: async ({ doGenerate }) => {
			const { content, ...rest } = await doGenerate();
			const transformedContent = [];
			for (const part of content) {
				if (part.type !== "text") {
					transformedContent.push(part);
					continue;
				}
				const text2 = startWithReasoning ? openingTag + part.text : part.text;
				const regexp = new RegExp(`${openingTag}(.*?)${closingTag}`, "gs");
				const matches = Array.from(text2.matchAll(regexp));
				if (!matches.length) {
					transformedContent.push(part);
					continue;
				}
				const reasoningText = matches.map((match) => match[1]).join(separator);
				let textWithoutReasoning = text2;
				for (let i = matches.length - 1; i >= 0; i--) {
					const match = matches[i];
					const beforeMatch = textWithoutReasoning.slice(0, match.index);
					const afterMatch = textWithoutReasoning.slice(match.index + match[0].length);
					textWithoutReasoning = beforeMatch + (beforeMatch.length > 0 && afterMatch.length > 0 ? separator : "") + afterMatch;
				}
				transformedContent.push({
					type: "reasoning",
					text: reasoningText
				});
				transformedContent.push({
					type: "text",
					text: textWithoutReasoning
				});
			}
			return {
				content: transformedContent,
				...rest
			};
		},
		wrapStream: async ({ doStream }) => {
			const { stream, ...rest } = await doStream();
			const reasoningExtractions = createIdMap();
			let reasoningIdCounter = 0;
			const delayedTextStarts = createIdMap();
			return {
				stream: stream.pipeThrough(new TransformStream({ transform: (chunk, controller) => {
					if (chunk.type === "text-start") {
						delayedTextStarts[chunk.id] = chunk;
						return;
					}
					if (chunk.type === "text-end" && delayedTextStarts[chunk.id] != null) {
						controller.enqueue(delayedTextStarts[chunk.id]);
						delete delayedTextStarts[chunk.id];
					}
					if (chunk.type !== "text-delta") {
						controller.enqueue(chunk);
						return;
					}
					if (reasoningExtractions[chunk.id] == null) reasoningExtractions[chunk.id] = {
						isFirstReasoning: true,
						isFirstText: true,
						afterSwitch: false,
						isReasoning: startWithReasoning,
						buffer: "",
						reasoningId: void 0,
						textId: chunk.id
					};
					const activeExtraction = reasoningExtractions[chunk.id];
					activeExtraction.buffer += chunk.delta;
					function getReasoningId() {
						return activeExtraction.reasoningId ??= `reasoning-${reasoningIdCounter++}`;
					}
					function publish(text2) {
						if (text2.length > 0) {
							const prefix = activeExtraction.afterSwitch && (activeExtraction.isReasoning ? !activeExtraction.isFirstReasoning : !activeExtraction.isFirstText) ? separator : "";
							if (activeExtraction.isReasoning && (activeExtraction.afterSwitch || activeExtraction.isFirstReasoning)) controller.enqueue({
								type: "reasoning-start",
								id: getReasoningId()
							});
							if (activeExtraction.isReasoning) controller.enqueue({
								type: "reasoning-delta",
								delta: prefix + text2,
								id: getReasoningId()
							});
							else {
								if (delayedTextStarts[activeExtraction.textId] != null) {
									controller.enqueue(delayedTextStarts[activeExtraction.textId]);
									delete delayedTextStarts[activeExtraction.textId];
								}
								controller.enqueue({
									type: "text-delta",
									delta: prefix + text2,
									id: activeExtraction.textId
								});
							}
							activeExtraction.afterSwitch = false;
							if (activeExtraction.isReasoning) activeExtraction.isFirstReasoning = false;
							else activeExtraction.isFirstText = false;
						}
					}
					do {
						const nextTag = activeExtraction.isReasoning ? closingTag : openingTag;
						const startIndex = getPotentialStartIndex(activeExtraction.buffer, nextTag);
						if (startIndex == null) {
							publish(activeExtraction.buffer);
							activeExtraction.buffer = "";
							break;
						}
						publish(activeExtraction.buffer.slice(0, startIndex));
						if (startIndex + nextTag.length <= activeExtraction.buffer.length) {
							activeExtraction.buffer = activeExtraction.buffer.slice(startIndex + nextTag.length);
							if (activeExtraction.isReasoning) {
								if (activeExtraction.isFirstReasoning) controller.enqueue({
									type: "reasoning-start",
									id: getReasoningId()
								});
								controller.enqueue({
									type: "reasoning-end",
									id: getReasoningId()
								});
								activeExtraction.reasoningId = void 0;
							}
							activeExtraction.isReasoning = !activeExtraction.isReasoning;
							activeExtraction.afterSwitch = true;
						} else {
							activeExtraction.buffer = activeExtraction.buffer.slice(startIndex);
							break;
						}
					} while (true);
				} })),
				...rest
			};
		}
	};
}
function simulateStreamingMiddleware() {
	return {
		specificationVersion: "v4",
		wrapStream: async ({ doGenerate }) => {
			const result = await doGenerate();
			let id = 0;
			return {
				stream: new ReadableStream({ start(controller) {
					controller.enqueue({
						type: "stream-start",
						warnings: result.warnings
					});
					controller.enqueue({
						type: "response-metadata",
						...result.response
					});
					for (const part of result.content) switch (part.type) {
						case "text":
							if (part.text.length > 0) {
								controller.enqueue({
									type: "text-start",
									id: String(id),
									...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
								});
								controller.enqueue({
									type: "text-delta",
									id: String(id),
									delta: part.text
								});
								controller.enqueue({
									type: "text-end",
									id: String(id)
								});
								id++;
							}
							break;
						case "reasoning":
							controller.enqueue({
								type: "reasoning-start",
								id: String(id),
								providerMetadata: part.providerMetadata
							});
							controller.enqueue({
								type: "reasoning-delta",
								id: String(id),
								delta: part.text
							});
							controller.enqueue({
								type: "reasoning-end",
								id: String(id)
							});
							id++;
							break;
						default: controller.enqueue(part);
					}
					controller.enqueue({
						type: "finish",
						finishReason: result.finishReason,
						usage: result.usage,
						providerMetadata: result.providerMetadata
					});
					controller.close();
				} }),
				request: result.request,
				response: result.response
			};
		}
	};
}
function defaultFormatExample(example) {
	return JSON.stringify(example.input);
}
function addToolInputExamplesMiddleware({ prefix = "Input Examples:", format = defaultFormatExample, remove = true } = {}) {
	return {
		specificationVersion: "v4",
		transformParams: async ({ params }) => {
			if (!params.tools?.length) return params;
			const transformedTools = params.tools.map((tool3) => {
				if (tool3.type !== "function" || !tool3.inputExamples?.length) return tool3;
				const examplesSection = `${prefix}
${tool3.inputExamples.map((example, index) => format(example, index)).join("\n")}`;
				const toolDescription = tool3.description ? `${tool3.description}

${examplesSection}` : examplesSection;
				return {
					...tool3,
					description: toolDescription,
					inputExamples: remove ? void 0 : tool3.inputExamples
				};
			});
			return {
				...params,
				tools: transformedTools
			};
		}
	};
}
var wrapLanguageModel = ({ model: inputModel, middleware: middlewareArg, modelId, providerId }) => {
	const model = asLanguageModelV4(inputModel);
	return [...asArray(middlewareArg)].reverse().reduce((wrappedModel, middleware) => {
		return doWrap({
			model: wrappedModel,
			middleware,
			modelId,
			providerId
		});
	}, model);
};
var doWrap = ({ model, middleware: { transformParams, wrapGenerate, wrapStream, overrideProvider, overrideModelId, overrideSupportedUrls }, modelId, providerId }) => {
	async function doTransform({ params, type }) {
		return transformParams ? await transformParams({
			params,
			type,
			model
		}) : params;
	}
	return {
		specificationVersion: "v4",
		provider: providerId ?? overrideProvider?.({ model }) ?? model.provider,
		modelId: modelId ?? overrideModelId?.({ model }) ?? model.modelId,
		supportedUrls: overrideSupportedUrls?.({ model }) ?? model.supportedUrls,
		async doGenerate(params) {
			const transformedParams = await doTransform({
				params,
				type: "generate"
			});
			const doGenerate = async () => await model.doGenerate(transformedParams);
			const doStream = async () => await model.doStream(transformedParams);
			return wrapGenerate ? await wrapGenerate({
				doGenerate,
				doStream,
				params: transformedParams,
				model
			}) : await doGenerate();
		},
		async doStream(params) {
			const transformedParams = await doTransform({
				params,
				type: "stream"
			});
			const doGenerate = async () => await model.doGenerate(transformedParams);
			const doStream = async () => await model.doStream(transformedParams);
			return wrapStream ? await wrapStream({
				doGenerate,
				doStream,
				params: transformedParams,
				model
			}) : await doStream();
		}
	};
};
var wrapEmbeddingModel = ({ model: inputModel, middleware: middlewareArg, modelId, providerId }) => {
	const model = asEmbeddingModelV4(inputModel);
	return [...asArray(middlewareArg)].reverse().reduce((wrappedModel, middleware) => {
		return doWrap2({
			model: wrappedModel,
			middleware,
			modelId,
			providerId
		});
	}, model);
};
var doWrap2 = ({ model, middleware: { transformParams, wrapEmbed, overrideProvider, overrideModelId, overrideMaxEmbeddingsPerCall, overrideSupportsParallelCalls }, modelId, providerId }) => {
	async function doTransform({ params }) {
		return transformParams ? await transformParams({
			params,
			model
		}) : params;
	}
	return {
		specificationVersion: "v4",
		provider: providerId ?? overrideProvider?.({ model }) ?? model.provider,
		modelId: modelId ?? overrideModelId?.({ model }) ?? model.modelId,
		maxEmbeddingsPerCall: overrideMaxEmbeddingsPerCall?.({ model }) ?? model.maxEmbeddingsPerCall,
		[EMBEDDING_MODEL_MAX_INPUT_BYTES_PER_CALL]: getEmbeddingModelMaxInputBytesPerCall(model),
		[EMBEDDING_MODEL_PROVIDER_OPTIONS_TRANSFORMER]: getEmbeddingModelProviderOptionsTransformer(model),
		supportsParallelCalls: overrideSupportsParallelCalls?.({ model }) ?? model.supportsParallelCalls,
		async doEmbed(params) {
			const transformedParams = await doTransform({ params });
			const doEmbed = async () => await model.doEmbed(transformedParams);
			return wrapEmbed ? await wrapEmbed({
				doEmbed,
				params: transformedParams,
				model
			}) : await doEmbed();
		}
	};
};
var wrapImageModel = ({ model: inputModel, middleware: middlewareArg, modelId, providerId }) => {
	const model = asImageModelV4(inputModel);
	return [...asArray(middlewareArg)].reverse().reduce((wrappedModel, middleware) => {
		return doWrap3({
			model: wrappedModel,
			middleware,
			modelId,
			providerId
		});
	}, model);
};
var doWrap3 = ({ model, middleware: { transformParams, wrapGenerate, overrideProvider, overrideModelId, overrideMaxImagesPerCall }, modelId, providerId }) => {
	async function doTransform({ params }) {
		return transformParams ? await transformParams({
			params,
			model
		}) : params;
	}
	const maxImagesPerCallRaw = overrideMaxImagesPerCall?.({ model }) ?? model.maxImagesPerCall;
	const maxImagesPerCall = maxImagesPerCallRaw instanceof Function ? maxImagesPerCallRaw.bind(model) : maxImagesPerCallRaw;
	return {
		specificationVersion: "v4",
		provider: providerId ?? overrideProvider?.({ model }) ?? model.provider,
		modelId: modelId ?? overrideModelId?.({ model }) ?? model.modelId,
		maxImagesPerCall,
		async doGenerate(params) {
			const transformedParams = await doTransform({ params });
			const doGenerate = async () => await model.doGenerate(transformedParams);
			return wrapGenerate ? await wrapGenerate({
				doGenerate,
				params: transformedParams,
				model
			}) : await doGenerate();
		}
	};
};
function wrapProvider({ provider, languageModelMiddleware, imageModelMiddleware }) {
	const providerV4 = asProviderV4(provider);
	return {
		specificationVersion: "v4",
		languageModel: (modelId) => wrapLanguageModel({
			model: providerV4.languageModel(modelId),
			middleware: languageModelMiddleware
		}),
		embeddingModel: providerV4.embeddingModel,
		imageModel: (modelId) => {
			let model = providerV4.imageModel(modelId);
			if (imageModelMiddleware != null) model = wrapImageModel({
				model,
				middleware: imageModelMiddleware
			});
			return model;
		},
		transcriptionModel: providerV4.transcriptionModel,
		speechModel: providerV4.speechModel,
		rerankingModel: providerV4.rerankingModel,
		...providerV4.files != null ? { files: providerV4.files } : {},
		...providerV4.skills != null ? { skills: providerV4.skills } : {}
	};
}
function encodeRealtimeAudio(float32Array) {
	const buffer = /* @__PURE__ */ new ArrayBuffer(float32Array.length * 2);
	const view = new DataView(buffer);
	for (let i = 0; i < float32Array.length; i++) {
		const s = Math.max(-1, Math.min(1, float32Array[i]));
		view.setInt16(i * 2, s < 0 ? s * 32768 : s * 32767, true);
	}
	const bytes = new Uint8Array(buffer);
	const chunkSize = 32768;
	let binary = "";
	for (let i = 0; i < bytes.length; i += chunkSize) {
		const chunk = bytes.subarray(i, i + chunkSize);
		binary += String.fromCharCode(...chunk);
	}
	return btoa(binary);
}
function decodeRealtimeAudio(base64Audio) {
	const binaryString = atob(base64Audio);
	const bytes = new Uint8Array(binaryString.length);
	for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
	const pcm16 = new Int16Array(bytes.buffer);
	const float32 = new Float32Array(pcm16.length);
	for (let i = 0; i < pcm16.length; i++) float32[i] = pcm16[i] / 32768;
	return float32;
}
function resampleAudio(input, inputRate, outputRate) {
	if (inputRate === outputRate) return input;
	const ratio = inputRate / outputRate;
	const outputLength = Math.round(input.length / ratio);
	const output = new Float32Array(outputLength);
	for (let i = 0; i < outputLength; i++) {
		const srcIndex = i * ratio;
		const srcIndexFloor = Math.floor(srcIndex);
		const srcIndexCeil = Math.min(srcIndexFloor + 1, input.length - 1);
		const fraction = srcIndex - srcIndexFloor;
		output[i] = input[srcIndexFloor] * (1 - fraction) + input[srcIndexCeil] * fraction;
	}
	return output;
}
async function getRealtimeToolDefinitions({ tools, toolsContext = {} }) {
	const definitions = [];
	for (const [name25, tool3] of Object.entries(tools)) {
		const toolType = tool3.type;
		switch (toolType) {
			case void 0:
			case "function":
			case "dynamic": {
				const description = resolveRealtimeToolDescription({
					tool: tool3,
					toolName: name25,
					toolsContext
				});
				definitions.push({
					type: "function",
					name: name25,
					description,
					parameters: await asSchema(tool3.inputSchema).jsonSchema
				});
				break;
			}
			case "provider": break;
			default: throw new Error(`Unsupported tool type: ${toolType}`);
		}
	}
	return definitions;
}
function resolveRealtimeToolDescription({ tool: tool3, toolName, toolsContext }) {
	return tool3.description === void 0 ? void 0 : typeof tool3.description === "string" ? tool3.description : tool3.description({ context: toolsContext[toolName] });
}
var BrowserRealtimeAudio = class {
	constructor(options) {
		this.captureContext = null;
		this.captureProcessor = null;
		this.captureSource = null;
		this.captureStream = null;
		this.ownsCaptureStream = true;
		this.captureCleanup = [];
		this.captureGeneration = 0;
		this.playbackContext = null;
		this.playbackQueue = [];
		this.playbackTime = 0;
		this.playbackStartTime = 0;
		this.activeSources = /* @__PURE__ */ new Set();
		this.isPlaying = false;
		this.playbackPaused = false;
		this.captureSampleRate = options.captureSampleRate;
		this.playbackSampleRate = options.playbackSampleRate;
		this.onAudio = options.onAudio;
		this.onPlayingChange = options.onPlayingChange;
		this.maxPlaybackSeconds = options.maxPlaybackSeconds ?? Infinity;
		this.onError = options.onError;
		this.onCapturingChange = options.onCapturingChange;
	}
	ensurePlaybackContext() {
		if (this.playbackContext == null) {
			this.playbackContext = new AudioContext({ sampleRate: this.playbackSampleRate });
			const context = this.playbackContext;
			context.onstatechange = () => {
				if (this.playbackContext === context) this.setPlaying(context.state === "running" && this.activeSources.size > 0);
			};
		}
	}
	async resumePlayback() {
		this.ensurePlaybackContext();
		const context = this.playbackContext;
		if (this.playbackPaused) this.stopPlayback();
		if (this.playbackContext !== context) return;
		await context?.resume();
		if (this.playbackContext !== context) return;
		this.playbackPaused = false;
		this.setPlaying(this.playbackContext?.state === "running" && this.activeSources.size > 0);
	}
	startCapture(stream, options) {
		const generation = this.captureGeneration + 1;
		this.stopCapture();
		if (generation !== this.captureGeneration) {
			if (options?.ownsStream ?? true) stream.getTracks().forEach((track) => track.stop());
			return;
		}
		this.captureStream = stream;
		this.ownsCaptureStream = options?.ownsStream ?? true;
		const ctx = new AudioContext({ sampleRate: this.captureSampleRate });
		this.captureContext = ctx;
		ctx.resume().catch((error) => {
			if (this.captureContext === ctx) this.onError?.(error);
		});
		const source = ctx.createMediaStreamSource(stream);
		this.captureSource = source;
		const processor = ctx.createScriptProcessor(1024, 1, 1);
		this.captureProcessor = processor;
		processor.onaudioprocess = (event) => {
			if (this.captureContext !== ctx) return;
			const inputData = event.inputBuffer.getChannelData(0);
			const samples = resampleAudio(new Float32Array(inputData), ctx.sampleRate, this.captureSampleRate);
			try {
				this.onAudio(encodeRealtimeAudio(samples));
			} catch (error) {
				this.onError?.(error instanceof Error ? error : new Error(String(error)));
			}
		};
		source.connect(processor);
		processor.connect(ctx.destination);
		const updateCapturing = () => this.onCapturingChange(stream.getAudioTracks().some((track) => track.enabled && !track.muted && track.readyState === "live"));
		for (const track of stream.getAudioTracks()) for (const event of [
			"ended",
			"mute",
			"unmute"
		]) {
			track.addEventListener(event, updateCapturing);
			this.captureCleanup.push(() => track.removeEventListener(event, updateCapturing));
		}
		updateCapturing();
	}
	stopCapture() {
		this.captureGeneration++;
		if (this.captureProcessor != null) this.captureProcessor.onaudioprocess = null;
		for (const cleanup of this.captureCleanup) cleanup();
		this.captureCleanup = [];
		this.captureProcessor?.disconnect();
		this.captureSource?.disconnect();
		this.captureContext?.close().catch(() => {});
		if (this.ownsCaptureStream) this.captureStream?.getTracks().forEach((track) => track.stop());
		this.captureProcessor = null;
		this.captureSource = null;
		this.captureContext = null;
		this.captureStream = null;
		this.onCapturingChange(false);
	}
	playAudio(base64Audio) {
		if (this.playbackPaused) return;
		this.ensurePlaybackContext();
		const samples = decodeRealtimeAudio(base64Audio);
		if (Math.max(0, this.playbackTime - (this.playbackContext?.currentTime ?? 0)) + samples.length / this.playbackSampleRate > this.maxPlaybackSeconds) {
			this.playbackPaused = true;
			this.stopPlayback();
			this.onError?.(/* @__PURE__ */ new Error("Realtime audio playback buffer is full; playback paused, call resumePlayback() to resume at the live edge"));
			return;
		}
		this.playbackQueue.push(samples);
		this.schedulePlayback();
	}
	stopPlayback() {
		this.playbackQueue = [];
		for (const source of this.activeSources) try {
			source.onended = null;
			source.stop();
			source.disconnect();
		} catch {}
		this.activeSources.clear();
		if (this.playbackContext != null) this.playbackTime = this.playbackContext.currentTime;
		this.setPlaying(false);
	}
	getPlaybackOffsetMs() {
		const ctx = this.playbackContext;
		if (ctx == null) return 0;
		return (ctx.currentTime - this.playbackStartTime) * 1e3;
	}
	dispose() {
		this.stopCapture();
		this.stopPlayback();
		if (this.playbackContext != null) this.playbackContext.onstatechange = null;
		this.playbackContext?.close().catch(() => {});
		this.playbackContext = null;
		this.playbackTime = 0;
		this.playbackPaused = false;
	}
	setPlaying(isPlaying) {
		if (isPlaying && !this.isPlaying) this.playbackStartTime = this.playbackContext?.currentTime ?? 0;
		if (this.isPlaying !== isPlaying) {
			this.isPlaying = isPlaying;
			this.onPlayingChange(isPlaying);
		}
	}
	schedulePlayback() {
		const ctx = this.playbackContext;
		if (ctx == null || this.playbackQueue.length === 0) return;
		while (this.playbackQueue.length > 0) {
			const samples = this.playbackQueue.shift();
			const buffer = ctx.createBuffer(1, samples.length, this.playbackSampleRate);
			buffer.getChannelData(0).set(samples);
			const source = ctx.createBufferSource();
			source.buffer = buffer;
			source.connect(ctx.destination);
			const startTime = Math.max(this.playbackTime, ctx.currentTime);
			source.start(startTime);
			this.playbackTime = startTime + buffer.duration;
			this.activeSources.add(source);
			this.setPlaying(ctx.state === "running");
			if (this.playbackContext !== ctx) return;
			source.onended = () => {
				source.disconnect();
				this.activeSources.delete(source);
				if (this.playbackQueue.length === 0 && this.activeSources.size === 0) this.setPlaying(false);
			};
		}
	}
};
var RealtimeEventChannel = class {
	constructor(options) {
		this.options = options;
		this.active = true;
		this.finishing = false;
		this.incoming = Promise.resolve();
		this.outgoing = Promise.resolve();
		this.incomingCount = 0;
		this.incomingBytes = 0;
		this.outgoingCount = 0;
		this.parse = options.model.createServerEventParser?.() ?? options.model.parseServerEvent.bind(options.model);
	}
	get hasPendingIncoming() {
		return this.incomingCount > 0;
	}
	dispose() {
		this.active = false;
	}
	/** Stop accepting messages, but deliver already received terminal events. */
	async finish() {
		this.stopWriting();
		await this.incoming;
		this.dispose();
	}
	stopWriting() {
		this.finishing = true;
	}
	send(event, shouldSend) {
		if (!this.active || this.finishing) throw new Error("Realtime connection is closed");
		if (this.outgoingCount >= (this.options.maxPending ?? 512)) throw new Error("Realtime outgoing queue is full");
		this.outgoingCount++;
		const operation = this.outgoing.then(async () => {
			if (!this.active || this.finishing) throw new Error("Realtime connection is closed");
			if (shouldSend?.() === false) return;
			if (!this.active || this.finishing) throw new Error("Realtime connection is closed");
			const data = await this.options.model.serializeClientEvent(event);
			if (!this.active || this.finishing) throw new Error("Realtime connection is closed");
			if (shouldSend?.() === false) return;
			if (!this.active || this.finishing) throw new Error("Realtime connection is closed");
			if (data != null) this.options.send(data);
		});
		this.outgoing = operation.catch((error) => {
			if (!this.finishing) {
				if (event.type !== "input-audio-append" && event.type !== "session-close") this.report(error);
			}
		}).finally(() => {
			this.outgoingCount--;
		});
		return operation;
	}
	receive(data) {
		if (!this.active || this.finishing) return;
		const bytes = typeof data === "string" ? data.length * 2 : data instanceof Blob ? data.size : data.byteLength ?? 0;
		if (this.incomingCount >= (this.options.maxPending ?? 512) || this.incomingBytes + bytes > (this.options.maxPendingBytes ?? 8388608)) {
			this.finishing = true;
			this.fatal(/* @__PURE__ */ new Error("Realtime incoming queue is full; input protocol continuity was lost"));
			return;
		}
		this.incomingCount++;
		this.incomingBytes += bytes;
		this.incoming = this.incoming.then(async () => {
			if (!this.active) return;
			const parsed = await safeParseJSON({ text: typeof data === "string" ? data : data instanceof Blob ? await data.text() : new TextDecoder().decode(data) });
			if (!this.active) return;
			if (!parsed.success) throw new Error("Invalid JSON in realtime server message", { cause: parsed.error });
			const health = this.options.model.getHealthCheckResponse?.(parsed.value);
			if (!this.active) return;
			if (health != null && !this.finishing) this.options.send(health);
			if (!this.active) return;
			const result = this.parse(parsed.value);
			for (const event of Array.isArray(result) ? result : [result]) {
				if (!this.active) return;
				try {
					await this.options.onEvent(event);
				} catch (error) {
					this.report(error);
				}
			}
		}).catch((error) => {
			this.finishing = true;
			this.fatal(error instanceof Error ? error : new Error(String(error)));
		}).finally(() => {
			this.incomingCount--;
			this.incomingBytes -= bytes;
		});
	}
	fatal(error) {
		if (!this.active) return;
		if (this.options.onFatalError != null) this.options.onFatalError(error);
		else this.report(error);
	}
	report(error) {
		if (!this.active) return;
		try {
			this.options.onError(error instanceof Error ? error : new Error(String(error)));
		} catch {}
	}
};
var REALTIME_MAX_FRAME_BYTES = 131072;
var REALTIME_MAX_BUFFERED_BYTES = 131072;
function encodeRealtimeFrame(value) {
	if (value instanceof ArrayBuffer || ArrayBuffer.isView(value)) return {
		data: value,
		byteLength: value.byteLength
	};
	if (value instanceof Blob) return {
		data: value,
		byteLength: value.size
	};
	const data = typeof value === "string" ? value : JSON.stringify(value);
	if (data === void 0) throw new Error("Realtime event could not be encoded as JSON");
	return {
		data,
		byteLength: new TextEncoder().encode(data).byteLength
	};
}
function assertRealtimeFrameBudget(frame, bufferedAmount) {
	if (frame.byteLength > REALTIME_MAX_FRAME_BYTES) throw new Error(`Realtime frame exceeds the ${REALTIME_MAX_FRAME_BYTES}-byte limit; reduce the event payload`);
	if (bufferedAmount + frame.byteLength > REALTIME_MAX_BUFFERED_BYTES) throw new Error(`Realtime send buffer is full (${REALTIME_MAX_BUFFERED_BYTES}-byte limit); wait before retrying`);
}
function getCloseError(event) {
	if (event.code === 1e3 && event.wasClean) return void 0;
	return /* @__PURE__ */ new Error(`Realtime WebSocket closed unexpectedly (code ${event.code}${event.reason === "" ? "" : `: ${event.reason}`})`);
}
var BrowserRealtimeTransport = class {
	constructor(options) {
		this.options = options;
		this.ws = null;
		this.epoch = 0;
		this.failing = false;
		this.closing = false;
		this.model = options.model;
		this.continuous = options.model.capabilities?.conversation === "continuous";
		this.onServerEvent = options.onServerEvent;
		this.onError = options.onError;
		this.onClose = options.onClose;
	}
	get isOpen() {
		return !this.closing && !this.failing && this.ws?.readyState === WebSocket.OPEN;
	}
	connect({ mode, token, url, onOpen, protocols }) {
		this.disconnect();
		const epoch = this.epoch;
		if (mode !== "relay" && (mode !== "client-secret" || typeof token !== "string" || token.trim() === "")) throw new Error("Realtime client-secret connection requires a nonempty token");
		const wsConfig = mode === "relay" ? {
			url,
			protocols
		} : this.model.getWebSocketConfig?.({
			token,
			url
		});
		if (this.epoch !== epoch) return;
		if (wsConfig == null) throw new Error("Model does not support client-secret WebSockets");
		const finalUrl = wsConfig.url;
		const finalProtocols = wsConfig.protocols;
		if (this.epoch !== epoch) return;
		try {
			if (typeof finalUrl !== "string" || !/^wss?:\/\//i.test(finalUrl)) throw new Error("Invalid realtime WebSocket URL");
			const parsed = new URL(finalUrl);
			if (!["ws:", "wss:"].includes(parsed.protocol) || parsed.hostname === "" || finalUrl.includes("#")) throw new Error("Invalid realtime WebSocket URL");
		} catch {
			throw new Error("Invalid realtime WebSocket URL; expected an absolute ws:// or wss:// URL with a host and no fragment");
		}
		if (this.epoch !== epoch) return;
		const ws = new WebSocket(finalUrl, finalProtocols);
		this.ws = ws;
		let starting = false;
		let connectionError;
		const codec = new RealtimeEventChannel({
			model: this.model,
			send: (data) => {
				if (this.epoch !== epoch || this.ws !== ws || !this.isOpen) throw new Error("Realtime WebSocket is not open");
				this.sendRaw(data);
			},
			onEvent: this.onServerEvent,
			onError: (error) => {
				if (!starting) this.onError(error);
			},
			onFatalError: (error) => this.fail(error)
		});
		if (this.epoch !== epoch) {
			codec.dispose();
			return;
		}
		this.codec = codec;
		ws.onopen = () => {
			if (this.ws !== ws) return;
			starting = true;
			try {
				Promise.resolve(onOpen()).catch((error) => {
					if (this.ws === ws) this.fail(error instanceof Error ? error : new Error(String(error)));
				}).finally(() => {
					starting = false;
				});
			} catch (error) {
				if (this.epoch === epoch) this.fail(error instanceof Error ? error : new Error(String(error)));
			}
		};
		ws.onmessage = (messageEvent) => {
			if (this.ws === ws) this.codec?.receive(messageEvent.data);
		};
		ws.onerror = () => {
			if (this.ws === ws) {
				connectionError = /* @__PURE__ */ new Error("WebSocket connection error");
				this.failing = true;
			}
		};
		ws.onclose = (event) => {
			if (this.ws === ws) {
				this.ws = null;
				const closeError = getCloseError(event) ?? connectionError;
				const reportCloseErrorImmediately = closeError != null && !codec.hasPendingIncoming;
				codec.stopWriting();
				this.notifyClosing();
				if (this.epoch !== epoch) return;
				const drain = codec.finish();
				if (reportCloseErrorImmediately) {
					try {
						this.onError(closeError);
					} catch {}
					if (this.epoch !== epoch) return;
				}
				const complete = () => {
					if (this.epoch !== epoch) return;
					clearTimeout(this.drainTimer);
					this.epoch++;
					codec.dispose();
					try {
						this.onClose(closeError);
					} catch (error) {
						this.reportCallbackError(error);
					}
				};
				this.drainTimer = setTimeout(complete, 1e3);
				this.awaitDrain(drain, complete);
			}
		};
	}
	disconnect() {
		this.epoch++;
		clearTimeout(this.drainTimer);
		const ws = this.ws;
		this.ws = null;
		this.codec?.dispose();
		this.codec = void 0;
		this.failing = false;
		this.closing = false;
		ws?.close();
	}
	sendEvent(event, shouldSend, automaticAudio = false) {
		if (this.failing || this.closing) throw new Error("Realtime connection is closed");
		if (this.codec == null) return Promise.resolve();
		const epoch = this.epoch;
		const failed = (error) => {
			if (automaticAudio && this.epoch === epoch && this.isOpen) this.fail(error instanceof Error ? error : new Error(String(error)));
		};
		try {
			const sent = this.codec.send(event, shouldSend);
			sent.catch(failed);
			return sent;
		} catch (error) {
			failed(error);
			throw error;
		}
	}
	finish() {
		return this.codec?.finish() ?? Promise.resolve();
	}
	/** Drain accepted events when media or protocol continuity is lost. */
	fail(error) {
		if (this.failing) return;
		this.failing = true;
		const epoch = this.epoch;
		const ws = this.ws;
		this.ws = null;
		this.codec?.stopWriting();
		ws?.close();
		this.notifyClosing();
		if (this.epoch !== epoch) return;
		const drain = this.finish();
		if (this.options.onFatalError != null) this.options.onFatalError(error, drain);
		else {
			const complete = () => {
				if (epoch !== this.epoch) return;
				this.disconnect();
				try {
					this.onClose();
				} catch (cause) {
					this.reportCallbackError(cause);
				}
			};
			this.drainTimer = setTimeout(complete, 1e3);
			this.awaitDrain(drain, complete);
			this.reportCallbackError(error);
		}
	}
	notifyClosing() {
		if (this.closing) return;
		this.closing = true;
		try {
			this.options.onClosing?.();
		} catch (error) {
			this.reportCallbackError(error);
		}
	}
	async awaitDrain(drain, complete) {
		try {
			await drain;
		} catch {}
		try {
			complete();
		} catch (error) {
			this.reportCallbackError(error);
		}
	}
	reportCallbackError(error) {
		try {
			this.onError(error instanceof Error ? error : new Error(String(error)));
		} catch {}
	}
	sendRaw(data) {
		const ws = this.ws;
		const epoch = this.epoch;
		if (ws == null || !this.isOpen) return;
		const frame = encodeRealtimeFrame(data);
		if (this.epoch !== epoch || this.ws !== ws || !this.isOpen) throw new Error("Realtime connection is closed");
		if (this.continuous) assertRealtimeFrameBudget(frame, ws.bufferedAmount);
		ws.send(frame.data);
	}
	dispose() {
		this.disconnect();
	}
};
var BrowserRealtimeLiveWebSocket = class {
	constructor(options) {
		this.options = options;
		this.generation = 0;
		this.ready = false;
		this.capturingStarted = false;
		this.pendingAudio = 0;
		this.captureGeneration = 0;
		this.captureEnabled = true;
		const input = options.sessionConfig?.inputAudioFormat;
		const output = options.sessionConfig?.outputAudioFormat;
		const sampleRate = input?.rate ?? output?.rate ?? options.sampleRate ?? 24e3;
		const format = {
			type: input?.type ?? output?.type ?? "audio/pcm",
			rate: sampleRate
		};
		this.config = {
			...options.sessionConfig,
			inputAudioFormat: {
				...format,
				...input
			},
			outputAudioFormat: {
				...format,
				...output
			}
		};
		this.transport = new BrowserRealtimeTransport({
			model: options.model,
			onServerEvent: options.onEvent,
			onError: options.onError,
			onFatalError: options.onFatalError,
			onClosing: () => {
				const generation = this.generation;
				options.onClosing?.();
				if (generation === this.generation) this.stopCapture();
			},
			onClose: options.onClose
		});
		this.audio = new BrowserRealtimeAudio({
			captureSampleRate: this.config.inputAudioFormat?.rate ?? sampleRate,
			playbackSampleRate: this.config.outputAudioFormat?.rate ?? sampleRate,
			maxPlaybackSeconds: options.maxPlaybackBufferSeconds ?? 2,
			onAudio: (audio) => this.sendAudio(audio),
			onError: options.onError,
			onCapturingChange: options.onCapturing,
			onPlayingChange: options.onPlaying
		});
	}
	connect(options) {
		const generation = this.generation + 1;
		this.dispose();
		if (generation !== this.generation) return;
		for (const format of [this.config.inputAudioFormat, this.config.outputAudioFormat]) {
			if (format?.type !== "audio/pcm") throw new UnsupportedFunctionalityError({ functionality: "Continuous browser WebSocket audio supports PCM16 only" });
			if (format.rate == null || !Number.isFinite(format.rate) || format.rate < 8e3 || format.rate > 96e3) throw new Error("Invalid realtime PCM sample rate");
		}
		this.stream = options.stream;
		this.captureEnabled = options.capture !== false;
		this.audio.ensurePlaybackContext();
		this.audio.resumePlayback().catch((error) => {
			if (generation === this.generation) this.options.onError(error);
		});
		this.transport.connect({
			mode: "relay",
			url: options.url,
			protocols: options.protocols,
			onOpen: () => {
				return this.transport.sendEvent({
					type: this.options.model.capabilities?.startup ?? "session-update",
					config: this.config
				});
			}
		});
	}
	startCapture() {
		this.ready = true;
		if (!this.captureEnabled || this.capturingStarted) return;
		this.resumeCapture().catch((error) => this.options.onError(error));
	}
	async resumeCapture(suppliedStream) {
		const generation = this.captureGeneration + 1;
		this.stopCapture();
		if (generation !== this.captureGeneration) return;
		this.ready = true;
		this.capturingStarted = true;
		this.captureEnabled = true;
		if (suppliedStream != null) this.stream = suppliedStream;
		const supplied = this.stream;
		const stream = supplied ?? await navigator.mediaDevices.getUserMedia({ audio: true });
		if (generation !== this.captureGeneration || !this.ready) {
			if (supplied == null) stream.getTracks().forEach((track) => track.stop());
			return;
		}
		if (!stream.getAudioTracks().some((track) => track.readyState === "live")) {
			if (supplied == null) stream.getTracks().forEach((track) => track.stop());
			throw new Error("Realtime requires a live audio track");
		}
		this.audio.startCapture(stream, { ownsStream: supplied == null });
	}
	sendAudio(audio) {
		if (!this.ready || !this.transport.isOpen) return;
		if (this.pendingAudio >= 8) {
			this.transport.fail(/* @__PURE__ */ new Error("Realtime audio send queue is full"));
			return;
		}
		const generation = this.generation;
		let sent;
		try {
			sent = this.transport.sendEvent({
				type: "input-audio-append",
				audio
			}, void 0, true);
		} catch (error) {
			if (!this.ready || !this.transport.isOpen) return;
			throw error;
		}
		this.pendingAudio++;
		sent.then(() => {
			if (generation === this.generation) this.pendingAudio--;
		}, (error) => {
			if (generation === this.generation && this.ready && this.transport.isOpen) this.options.onFatalError(error);
		});
	}
	sendEvent(event, shouldSend) {
		if (event.type === "session-update") for (const key of ["inputAudioFormat", "outputAudioFormat"]) {
			const update = event.config[key];
			if (update != null && (update.type !== this.config[key]?.type || update.rate != null && update.rate !== this.config[key]?.rate)) throw new Error("Changing Live WebSocket audio format requires reconnecting");
		}
		return this.transport.sendEvent(event, shouldSend);
	}
	playAudio(audio) {
		try {
			this.audio.playAudio(audio);
		} catch (error) {
			this.options.onError(error instanceof Error ? error : new Error(String(error)));
		}
	}
	stopPlayback() {
		this.audio.stopPlayback();
	}
	resumePlayback() {
		return this.audio.resumePlayback();
	}
	stopCapture() {
		this.captureGeneration++;
		this.ready = false;
		this.capturingStarted = false;
		this.captureEnabled = false;
		this.audio.stopCapture();
	}
	finish() {
		return this.transport.finish();
	}
	dispose() {
		this.generation++;
		this.stopCapture();
		this.ready = false;
		this.capturingStarted = false;
		this.pendingAudio = 0;
		this.stream = void 0;
		this.transport.disconnect();
		this.audio.dispose();
	}
};
var MAX_SESSION_ANSWER_BYTES = 1048576;
async function readSessionAnswer(response) {
	const reader = response.body?.getReader();
	if (reader == null) throw new Error("Invalid realtime session answer");
	const decoder = new TextDecoder();
	let bytes = 0;
	let text2 = "";
	try {
		if (Number(response.headers.get("content-length")) > MAX_SESSION_ANSWER_BYTES) throw new Error("Realtime session answer exceeds the 1 MiB limit");
		while (true) {
			const { done, value } = await reader.read();
			if (done) return text2 + decoder.decode();
			bytes += value.byteLength;
			if (bytes > MAX_SESSION_ANSWER_BYTES) throw new Error("Realtime session answer exceeds the 1 MiB limit");
			text2 += decoder.decode(value, { stream: true });
		}
	} catch (error) {
		reader.cancel(error).catch(() => {});
		throw error;
	} finally {
		reader.releaseLock();
	}
}
function selectAudioTrack(stream) {
	const live = stream.getAudioTracks().filter((track) => track.readyState === "live");
	return live.find((track) => track.enabled && !track.muted) ?? live[0];
}
var BrowserRealtimeWebRTC = class {
	constructor(options) {
		this.options = options;
		this.ownsStream = false;
		this.generation = 0;
		this.closingNotified = false;
		this.captureGeneration = 0;
		this.senderOperations = Promise.resolve();
		this.trackCleanups = [];
	}
	async connect({ api, sessionConfig, stream, timeoutMs, capture = true }) {
		const generation = this.generation + 1;
		this.dispose();
		const current = () => generation === this.generation;
		if (!current()) return;
		const config = this.options.model.getWebRTCConfig?.();
		if (!current()) return;
		if (config == null) throw new Error("This model does not support WebRTC configuration");
		const abort = new AbortController();
		this.abort = abort;
		const timeout = setTimeout(() => abort.abort(/* @__PURE__ */ new Error("Realtime startup timed out")), timeoutMs);
		const cancelled = new Promise((_, reject) => {
			abort.signal.addEventListener("abort", () => reject(abort.signal.reason), { once: true });
		});
		const start = async () => {
			const captureGeneration = this.captureGeneration;
			let media = capture ? stream ?? await navigator.mediaDevices.getUserMedia({ audio: true }) : void 0;
			if (!current() || abort.signal.aborted) {
				if (stream == null) media?.getTracks().forEach((track2) => track2.stop());
				throw new Error("Realtime connection cancelled");
			}
			if (captureGeneration !== this.captureGeneration) {
				if (stream == null) media?.getTracks().forEach((track2) => track2.stop());
				media = void 0;
			}
			this.stream = media;
			this.ownsStream = stream == null;
			const track = media == null ? void 0 : selectAudioTrack(media);
			if (media != null && track == null) throw new Error("Realtime requires a live audio track");
			const pc = new RTCPeerConnection();
			this.pc = pc;
			const audio = document.createElement("audio");
			audio.autoplay = true;
			this.audio = audio;
			audio.onplaying = () => {
				if (current()) this.options.onPlaying(true);
			};
			const stopped = () => {
				if (current()) this.options.onPlaying(false);
			};
			audio.onpause = stopped;
			audio.onended = stopped;
			audio.onwaiting = stopped;
			pc.ontrack = (event) => {
				if (!current()) return;
				audio.srcObject = event.streams[0] ?? new MediaStream([event.track]);
				audio.play().catch((error) => {
					if (current()) this.options.onError(error);
				});
			};
			pc.onconnectionstatechange = () => {
				if (!current()) return;
				if (pc.connectionState === "connected") clearTimeout(this.disconnectTimer);
				else if (pc.connectionState === "disconnected") {
					clearTimeout(this.disconnectTimer);
					this.disconnectTimer = setTimeout(() => {
						if (current() && pc.connectionState === "disconnected") this.fail(/* @__PURE__ */ new Error("Realtime peer disconnected beyond recovery grace period"));
					}, this.options.disconnectTimeoutMs ?? 5e3);
				} else if (pc.connectionState === "closed") this.drainClose(/* @__PURE__ */ new Error("Realtime peer connection closed"));
				else if (pc.connectionState === "failed") this.fail(/* @__PURE__ */ new Error(`Realtime peer connection ${pc.connectionState}`));
			};
			pc.oniceconnectionstatechange = () => {
				if (current() && pc.iceConnectionState === "failed") this.fail(/* @__PURE__ */ new Error("Realtime ICE connection failed"));
			};
			const dc = pc.createDataChannel(config.dataChannelLabel);
			this.dc = dc;
			const codec = new RealtimeEventChannel({
				model: this.options.model,
				onEvent: this.options.onEvent,
				onError: this.options.onError,
				onFatalError: (error) => {
					if (current()) this.fail(error);
				},
				send: (data) => {
					if (!current() || this.finishing || dc.readyState !== "open") throw new Error("Realtime data channel is not open");
					if (dc.bufferedAmount > 1048576) throw new Error("Realtime data channel buffer is full");
					const encoded = typeof data === "string" ? data : JSON.stringify(data);
					if (!current() || this.finishing || dc.readyState !== "open") throw new Error("Realtime data channel is not open");
					dc.send(encoded);
				}
			});
			if (!current()) {
				codec.dispose();
				return;
			}
			this.codec = codec;
			dc.onmessage = (event) => {
				if (current()) this.codec?.receive(event.data);
			};
			dc.onclose = () => {
				if (current()) this.drainClose(/* @__PURE__ */ new Error("Realtime data channel closed"));
			};
			dc.onerror = () => {
				if (current()) this.fail(/* @__PURE__ */ new Error("Realtime data channel error"));
			};
			const opened = new Promise((resolve3, reject) => {
				this.rejectStartup = reject;
				dc.onopen = () => {
					this.rejectStartup = void 0;
					resolve3();
				};
			});
			opened.catch(() => {});
			const gathered = new Promise((resolve3) => {
				pc.onicegatheringstatechange = () => {
					if (pc.iceGatheringState === "complete") resolve3();
				};
			});
			this.sender = media != null && track != null ? pc.addTrack(track, media) : pc.addTransceiver("audio", { direction: "sendrecv" }).sender;
			this.observeCapture();
			if (!current() || abort.signal.aborted) return;
			const offer = await pc.createOffer();
			if (!current() || abort.signal.aborted) return;
			await pc.setLocalDescription(offer);
			if (pc.iceGatheringState !== "complete") await Promise.race([gathered, cancelled]);
			if (!current() || abort.signal.aborted) return;
			const sdp = pc.localDescription?.sdp;
			if (sdp == null) throw new Error("Realtime offer has no SDP");
			const response = await fetch(api, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					sdp,
					sessionConfig
				}),
				signal: abort.signal
			});
			if (!response.ok) throw new Error(`Failed to create realtime session: ${response.status}`);
			const parsed = await safeParseJSON({ text: await readSessionAnswer(response) });
			if (!current() || abort.signal.aborted) return;
			if (!parsed.success || typeof parsed.value !== "object" || parsed.value == null || !("sdp" in parsed.value) || typeof parsed.value.sdp !== "string" || parsed.value.sdp.trim().length === 0 || !("sessionId" in parsed.value) || typeof parsed.value.sessionId !== "string" || parsed.value.sessionId.trim().length === 0) throw new Error("Invalid realtime session answer");
			await pc.setRemoteDescription({
				type: "answer",
				sdp: parsed.value.sdp
			});
			await Promise.race([opened, cancelled]);
		};
		try {
			await Promise.race([start(), cancelled]);
		} catch (error) {
			if (current()) this.dispose();
			throw error;
		} finally {
			clearTimeout(timeout);
			this.rejectStartup = void 0;
		}
	}
	sendEvent(event, shouldSend) {
		if (this.finishing || this.dc?.readyState !== "open") throw new Error("Realtime data channel is not open");
		return this.codec?.send(event, shouldSend) ?? Promise.resolve();
	}
	async resumePlayback() {
		if (this.audio == null) throw new Error("Realtime playback is not connected");
		await this.audio.play();
	}
	stopPlayback() {
		this.audio?.pause();
	}
	finish() {
		return this.codec?.finish() ?? Promise.resolve();
	}
	fail(error) {
		if (this.finishing === "failure") return;
		this.finishing = "failure";
		clearTimeout(this.finishTimer);
		if (this.rejectStartup != null) {
			this.rejectStartup(error);
			this.abort?.abort(error);
			return;
		}
		const generation = this.generation;
		const drain = this.finish();
		this.notifyClosing();
		if (generation !== this.generation) return;
		this.stopCaptureForShutdown(generation);
		if (generation !== this.generation) return;
		if (this.options.onFatalError != null) {
			this.options.onFatalError(error, drain);
			return;
		}
		const complete = () => {
			if (generation !== this.generation) return;
			this.dispose();
			try {
				this.options.onClose();
			} catch (cause) {
				this.reportCallbackError(cause);
			}
		};
		this.finishTimer = setTimeout(complete, 1e3);
		this.awaitDrain(drain, complete);
		try {
			this.options.onError(error);
		} catch {}
	}
	drainClose(error) {
		if (this.finishing) return;
		if (this.rejectStartup != null) {
			this.fail(error);
			return;
		}
		this.finishing = "close";
		const generation = this.generation;
		const complete = () => {
			if (generation !== this.generation || this.finishing !== "close") return;
			clearTimeout(this.finishTimer);
			try {
				this.options.onClose(error);
			} catch (cause) {
				this.reportCallbackError(cause);
			} finally {
				if (generation === this.generation) this.dispose();
			}
		};
		this.finishTimer = setTimeout(complete, 1e3);
		this.awaitDrain(this.finish(), complete);
		this.notifyClosing();
		if (generation !== this.generation) return;
		this.stopCaptureForShutdown(generation);
	}
	notifyClosing() {
		if (this.closingNotified) return;
		this.closingNotified = true;
		try {
			this.options.onClosing?.();
		} catch (error) {
			this.reportCallbackError(error);
		}
	}
	async stopCaptureForShutdown(generation) {
		try {
			await this.stopCapture();
		} catch (cause) {
			if (generation !== this.generation || this.finishing !== "close") return;
			try {
				this.fail(cause instanceof Error ? cause : new Error(String(cause)));
			} catch (error) {
				this.reportCallbackError(error);
			}
		}
	}
	async awaitDrain(drain, complete) {
		try {
			await drain;
		} catch {}
		try {
			complete();
		} catch (error) {
			this.reportCallbackError(error);
		}
	}
	reportCallbackError(error) {
		try {
			this.options.onError(error instanceof Error ? error : new Error(String(error)));
		} catch {}
	}
	async stopCapture() {
		const generation = ++this.captureGeneration;
		for (const cleanup of this.trackCleanups) cleanup();
		this.trackCleanups = [];
		if (this.ownsStream) this.stream?.getTracks().forEach((track) => track.stop());
		this.stream = void 0;
		const pc = this.pc;
		const sender = this.sender;
		await this.queueSenderOperation(async () => {
			if (pc !== this.pc || sender !== this.sender) return;
			if (pc != null && sender != null) await this.detachSender(pc, sender);
			if (generation === this.captureGeneration && pc === this.pc) this.options.onCapturing(false);
		});
	}
	async startCapture(supplied) {
		const generation = this.captureGeneration + 1;
		await this.stopCapture();
		if (generation !== this.captureGeneration || this.pc == null || this.finishing) return;
		const media = supplied ?? await navigator.mediaDevices.getUserMedia({ audio: true });
		if (generation !== this.captureGeneration || this.pc == null || this.finishing) {
			if (supplied == null) media.getTracks().forEach((track2) => track2.stop());
			return;
		}
		const track = selectAudioTrack(media);
		if (track == null) {
			if (supplied == null) media.getTracks().forEach((track2) => track2.stop());
			throw new Error("Realtime requires a live audio track");
		}
		const pc = this.pc;
		const sender = this.sender;
		await this.queueSenderOperation(async () => {
			const current = () => generation === this.captureGeneration && pc === this.pc && sender === this.sender && pc.connectionState !== "closed" && !this.finishing;
			let attached = false;
			try {
				if (!current() || sender == null) return;
				await sender.replaceTrack(track);
				if (!current()) {
					if (pc === this.pc) await this.detachSender(pc, sender);
					return;
				}
				this.stream = media;
				this.ownsStream = supplied == null;
				attached = true;
				this.observeCapture();
			} finally {
				if (!attached && supplied == null) media.getTracks().forEach((track2) => track2.stop());
			}
		});
	}
	queueSenderOperation(operation) {
		const pending = this.senderOperations.then(operation);
		this.senderOperations = pending.catch(() => {});
		return pending;
	}
	async detachSender(pc, sender) {
		if (pc.connectionState === "closed") return;
		try {
			await sender.replaceTrack(null);
		} catch (error) {
			if (pc !== this.pc) return;
			this.closePeer(pc);
			this.fail(error instanceof Error ? error : new Error(String(error)));
		}
	}
	closePeer(pc) {
		pc.ontrack = null;
		pc.onconnectionstatechange = null;
		pc.oniceconnectionstatechange = null;
		pc.onicegatheringstatechange = null;
		if (pc.connectionState !== "closed") pc.close();
	}
	observeCapture() {
		const generation = this.captureGeneration;
		const sender = this.sender;
		const track = sender?.track;
		const update = () => {
			if (generation === this.captureGeneration && this.sender === sender) this.options.onCapturing(sender?.track != null && sender.track.readyState === "live" && sender.track.enabled && !sender.track.muted);
		};
		if (track != null) for (const event of [
			"ended",
			"mute",
			"unmute"
		]) {
			track.addEventListener(event, update);
			this.trackCleanups.push(() => track.removeEventListener(event, update));
		}
		update();
	}
	dispose() {
		this.generation++;
		this.captureGeneration++;
		clearTimeout(this.finishTimer);
		clearTimeout(this.disconnectTimer);
		this.finishing = void 0;
		this.closingNotified = false;
		this.senderOperations = Promise.resolve();
		this.abort?.abort(/* @__PURE__ */ new Error("Realtime connection cancelled"));
		this.abort = void 0;
		this.codec?.dispose();
		this.codec = void 0;
		if (this.dc != null) {
			this.dc.onopen = null;
			this.dc.onclose = null;
			this.dc.onerror = null;
			this.dc.onmessage = null;
			this.dc.close();
			this.dc = void 0;
		}
		if (this.pc != null) {
			this.closePeer(this.pc);
			this.pc = void 0;
		}
		for (const cleanup of this.trackCleanups) cleanup();
		this.trackCleanups = [];
		if (this.ownsStream) this.stream?.getTracks().forEach((track) => track.stop());
		this.stream = void 0;
		this.sender = void 0;
		if (this.audio != null) {
			this.audio.onplaying = null;
			this.audio.onpause = null;
			this.audio.onended = null;
			this.audio.onwaiting = null;
			this.audio.pause();
			this.audio.srcObject = null;
			this.audio = void 0;
		}
		this.options.onCapturing(false);
		this.options.onPlaying(false);
	}
};
var RealtimeAttempt = class {
	constructor() {
		this.abort = new AbortController();
		this.timers = /* @__PURE__ */ new Map();
		this.active = true;
		this.ready = false;
		this.closing = false;
		this.transportClosing = false;
	}
	timer(name25, duration, callback) {
		this.clearTimer(name25);
		this.timers.set(name25, setTimeout(() => {
			this.timers.delete(name25);
			if (this.active) callback();
		}, duration));
	}
	clearTimer(name25) {
		clearTimeout(this.timers.get(name25));
		this.timers.delete(name25);
	}
	beginClose() {
		this.closing = true;
		return this.closePromise ??= new Promise((resolve3) => {
			this.settleClose = resolve3;
		});
	}
	retire() {
		if (!this.active) return;
		this.active = false;
		this.abort.abort();
		for (const timer of this.timers.values()) clearTimeout(timer);
		this.timers.clear();
		this.settleClose?.();
		this.settleClose = void 0;
	}
};
var RealtimeCommandTracker = class {
	constructor(sendCommand) {
		this.sendCommand = sendCommand;
		this.pending = /* @__PURE__ */ new Map();
		this.recent = /* @__PURE__ */ new Set();
	}
	validateId(id) {
		if (this.pending.has(id) || this.recent.has(id)) throw new Error("Realtime command ID was already used; retry with a fresh eventId");
		if (this.pending.size >= 512) throw new Error("Too many pending realtime commands");
	}
	complete(id) {
		const command = this.pending.get(id);
		if (command == null) return;
		this.pending.delete(id);
		this.recent.add(id);
		if (this.recent.size > 4096) {
			const oldest = this.recent.values().next().value;
			if (oldest != null) this.recent.delete(oldest);
		}
		return command;
	}
	send(event) {
		const muted = event.type === "input-audio-mute" ? true : event.type === "input-audio-unmute" ? false : void 0;
		if (event.type === "input-audio-mute" || event.type === "input-audio-unmute") event = {
			...event,
			eventId: event.eventId ?? generateId()
		};
		const id = "eventId" in event ? event.eventId : void 0;
		if (id != null) {
			this.validateId(id);
			this.pending.set(id, { muted });
		}
		const awaitsAcknowledgement = event.type === "context-append" || event.type === "session-update" || muted != null;
		try {
			const sent = this.sendCommand(event);
			sent.then(() => {
				if (id != null && !awaitsAcknowledgement) this.complete(id);
			}, () => {
				if (id != null) this.complete(id);
			});
			return sent;
		} catch (error) {
			if (id != null) this.complete(id);
			throw error;
		}
	}
	receive(event) {
		if (event.type === "command-acknowledged" && event.clientEventId != null) return this.complete(event.clientEventId);
		if (event.type === "error" && event.clientEventId != null) this.complete(event.clientEventId);
	}
};
var setupSchema = z.object({
	token: z.string().refine((value) => value.trim().length > 0),
	url: z.string().refine((value) => {
		try {
			const url = new URL(value);
			return (url.protocol === "ws:" || url.protocol === "wss:") && url.hostname !== "";
		} catch {
			return false;
		}
	}),
	expiresAt: z.number().positive().max(Number.MAX_SAFE_INTEGER).optional(),
	tools: z.array(z.object({
		type: z.literal("function"),
		name: z.string().min(1),
		description: z.string().optional(),
		parameters: z.record(z.string(), z.unknown())
	})).optional()
});
function validateRealtimeSetup(payload) {
	const result = setupSchema.safeParse(payload);
	if (!result.success) throw new Error("Invalid realtime setup: expected a nonempty token, a ws(s) URL, and valid optional expiresAt/tools");
	return result.data;
}
function createSessionState() {
	return {
		transcripts: [],
		delegations: [],
		isInputMuted: false,
		finalization: "pending"
	};
}
function reduceSessionState(state, event, limit, muted) {
	switch (event.type) {
		case "session-started": return {
			...state,
			sessionId: event.sessionId,
			delegationMode: event.delegationMode
		};
		case "session-usage": return {
			...state,
			usage: event.usage
		};
		case "session-closed": return {
			...state,
			sessionId: event.sessionId ?? state.sessionId,
			usage: event.usage,
			terminationReason: event.reason,
			finalization: "confirmed"
		};
		case "transcript-fragment": return {
			...state,
			transcripts: [...state.transcripts, event].slice(-limit)
		};
		case "delegation-created": return state.delegations.some((item) => item.delegationId === event.delegationId) ? state : {
			...state,
			delegations: [...state.delegations, event].slice(-limit)
		};
		case "command-acknowledged": return muted == null ? state : {
			...state,
			isInputMuted: muted
		};
		default: return state;
	}
}
function createInitialRealtimeState() {
	return {
		status: "disconnected",
		messages: [],
		events: [],
		isCapturing: false,
		isPlaying: false
	};
}
var RealtimeEventReducer = class {
	constructor(maxEvents = 500) {
		this.maxEvents = maxEvents;
		this.currentAssistantMessageId = null;
		this.textAccumulators = /* @__PURE__ */ new Map();
		this.toolArgAccumulators = /* @__PURE__ */ new Map();
		this.toolCallIdToMessageId = /* @__PURE__ */ new Map();
		this.toolCallIdToName = /* @__PURE__ */ new Map();
		this.inputAudioMessageInsertIndex = /* @__PURE__ */ new Map();
		this.itemIdToPartLocation = /* @__PURE__ */ new Map();
	}
	setStatus(state, status) {
		return {
			...state,
			status
		};
	}
	setCapturing(state, isCapturing) {
		return {
			...state,
			isCapturing
		};
	}
	setPlaying(state, isPlaying) {
		return {
			...state,
			isPlaying
		};
	}
	addUserTextMessage(state, text2) {
		return {
			...state,
			messages: [...state.messages, {
				id: `user-${Date.now()}`,
				role: "user",
				parts: [{
					type: "text",
					text: text2,
					state: "done"
				}]
			}]
		};
	}
	addToolOutput(state, callId, result) {
		return {
			state: this.updateToolPartState(state, callId, result),
			output: {
				callId,
				name: this.toolCallIdToName.get(callId),
				output: JSON.stringify(result)
			}
		};
	}
	async reduceServerEvent(state, event) {
		let nextState = this.pushEvent(state, event);
		const effects = [];
		switch (event.type) {
			case "session-created":
			case "session-updated":
				if (nextState.status === "connecting") nextState = this.setStatus(nextState, "connected");
				break;
			case "audio-delta":
				effects.push({
					type: "play-audio",
					itemId: event.itemId,
					delta: event.delta
				});
				break;
			case "audio-committed":
				if (event.itemId != null) this.inputAudioMessageInsertIndex.set(event.itemId, nextState.messages.length);
				break;
			case "audio-transcript-delta":
			case "text-delta":
				nextState = this.appendTextDelta(nextState, event.itemId, event.delta);
				break;
			case "audio-transcript-done":
				nextState = this.finalizeText(nextState, event.itemId, event.transcript);
				break;
			case "text-done":
				nextState = this.finalizeText(nextState, event.itemId, event.text);
				break;
			case "input-transcription-completed":
				nextState = this.addInputTranscriptionMessage(nextState, event.itemId, event.transcript);
				break;
			case "response-created":
			case "response-done":
				this.currentAssistantMessageId = null;
				break;
			case "speech-started":
				this.currentAssistantMessageId = null;
				effects.push({ type: "speech-started" });
				break;
			case "function-call-arguments-delta": {
				const { state: updatedState, messageId } = this.getOrCreateAssistantMessage(nextState);
				nextState = updatedState;
				this.toolCallIdToMessageId.set(event.callId, messageId);
				const acc = this.toolArgAccumulators.get(event.callId) ?? "";
				this.toolArgAccumulators.set(event.callId, acc + event.delta);
				nextState = this.ensureToolPart(nextState, messageId, event.callId);
				break;
			}
			case "function-call-arguments-done": {
				this.toolArgAccumulators.delete(event.callId);
				this.toolCallIdToName.set(event.callId, event.name);
				const parseResult = await safeParseJSON({ text: event.arguments });
				const parsedInput = parseResult.success ? parseResult.value : {};
				const messageId = this.toolCallIdToMessageId.get(event.callId);
				if (messageId != null) nextState = this.markToolInputAvailable(nextState, messageId, event.callId, event.name, parsedInput);
				if (!parseResult.success) effects.push({
					type: "error",
					error: /* @__PURE__ */ new Error(`Failed to parse tool arguments: ${event.arguments}`)
				});
				else effects.push({
					type: "tool-call",
					callId: event.callId,
					name: event.name,
					args: parsedInput,
					rawArguments: event.arguments
				});
				break;
			}
			case "error": effects.push({
				type: "error",
				error: new Error(event.message)
			});
		}
		return {
			state: nextState,
			effects
		};
	}
	pushEvent(state, event) {
		const events = [...state.events, event];
		return {
			...state,
			events: events.length > this.maxEvents ? events.slice(-this.maxEvents) : events
		};
	}
	getOrCreateAssistantMessage(state) {
		if (this.currentAssistantMessageId != null) return {
			state,
			messageId: this.currentAssistantMessageId
		};
		const messageId = `assistant-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
		this.currentAssistantMessageId = messageId;
		return {
			state: {
				...state,
				messages: [...state.messages, {
					id: messageId,
					role: "assistant",
					parts: []
				}]
			},
			messageId
		};
	}
	addInputTranscriptionMessage(state, itemId, transcript) {
		const messageId = `user-${itemId}`;
		if (state.messages.find((message) => message.id === messageId) != null) return {
			...state,
			messages: state.messages.map((message) => message.id === messageId ? {
				...message,
				parts: [{
					type: "text",
					text: transcript,
					state: "done"
				}]
			} : message)
		};
		const insertIndex = Math.min(this.inputAudioMessageInsertIndex.get(itemId) ?? state.messages.length, state.messages.length);
		const messages = [...state.messages];
		messages.splice(insertIndex, 0, {
			id: messageId,
			role: "user",
			parts: [{
				type: "text",
				text: transcript,
				state: "done"
			}]
		});
		return {
			...state,
			messages
		};
	}
	appendTextDelta(state, itemId, delta) {
		const { state: stateWithMessage, messageId } = this.getOrCreateAssistantMessage(state);
		const text2 = (this.textAccumulators.get(itemId) ?? "") + delta;
		this.textAccumulators.set(itemId, text2);
		const location = this.itemIdToPartLocation.get(itemId);
		if (location != null) return this.updateMessagePart(stateWithMessage, location.messageId, location.partIndex, {
			type: "text",
			text: text2,
			state: "streaming"
		});
		return {
			...stateWithMessage,
			messages: stateWithMessage.messages.map((message) => {
				if (message.id !== messageId) return message;
				const partIndex = message.parts.length;
				this.itemIdToPartLocation.set(itemId, {
					messageId,
					partIndex
				});
				return {
					...message,
					parts: [...message.parts, {
						type: "text",
						text: text2,
						state: "streaming"
					}]
				};
			})
		};
	}
	finalizeText(state, itemId, finalText) {
		const text2 = finalText ?? this.textAccumulators.get(itemId) ?? "";
		this.textAccumulators.delete(itemId);
		const location = this.itemIdToPartLocation.get(itemId);
		if (location == null) return state;
		this.itemIdToPartLocation.delete(itemId);
		return this.updateMessagePart(state, location.messageId, location.partIndex, {
			type: "text",
			text: text2,
			state: "done"
		});
	}
	ensureToolPart(state, messageId, callId) {
		return {
			...state,
			messages: state.messages.map((message) => {
				if (message.id !== messageId) return message;
				if (message.parts.find((part) => part.type === "dynamic-tool" && part.toolCallId === callId) != null) return message;
				return {
					...message,
					parts: [...message.parts, {
						type: "dynamic-tool",
						toolName: "",
						toolCallId: callId,
						state: "input-streaming",
						input: void 0
					}]
				};
			})
		};
	}
	markToolInputAvailable(state, messageId, callId, name25, input) {
		return {
			...state,
			messages: state.messages.map((message) => {
				if (message.id !== messageId) return message;
				return {
					...message,
					parts: message.parts.map((part) => {
						if (part.type !== "dynamic-tool") return part;
						const toolPart = part;
						if (toolPart.toolCallId !== callId) return part;
						return {
							...toolPart,
							toolName: name25,
							state: "input-available",
							input
						};
					})
				};
			})
		};
	}
	updateToolPartState(state, callId, result) {
		const messageId = this.toolCallIdToMessageId.get(callId);
		if (messageId == null) return state;
		return {
			...state,
			messages: state.messages.map((message) => {
				if (message.id !== messageId) return message;
				return {
					...message,
					parts: message.parts.map((part) => {
						if (part.type !== "dynamic-tool") return part;
						const toolPart = part;
						if (toolPart.toolCallId !== callId) return part;
						return {
							...toolPart,
							state: "output-available",
							output: result
						};
					})
				};
			})
		};
	}
	updateMessagePart(state, messageId, partIndex, part) {
		return {
			...state,
			messages: state.messages.map((message) => {
				if (message.id !== messageId) return message;
				const parts = [...message.parts];
				parts[partIndex] = part;
				return {
					...message,
					parts
				};
			})
		};
	}
};
var AbstractRealtimeSession = class {
	constructor(options) {
		this.options = options;
		this.state = createInitialRealtimeState();
		this.publication = 0;
		this.captureGeneration = 0;
		this.captureRequested = false;
		this.currentResponseItemId = null;
		this.toolCallsInResponse = /* @__PURE__ */ new Set();
		this.submittedToolOutputs = /* @__PURE__ */ new Set();
		this.responseToolCallsClosed = false;
		const capabilities = options.model.capabilities;
		this.sessionLifecycle = capabilities?.startup === "session-start" || capabilities?.finalization === "session-close";
		this.continuous = capabilities?.conversation === "continuous";
		this.maxEvents = options.maxEvents ?? 500;
		if (!Number.isSafeInteger(this.maxEvents) || this.maxEvents < 1) throw new Error("maxEvents must be a positive integer");
		for (const timeout of [
			options.startupTimeoutMs ?? 3e4,
			options.closeTimeoutMs ?? 15e3,
			options.rtcDisconnectTimeoutMs ?? 5e3
		]) if (!Number.isFinite(timeout) || timeout <= 0 || timeout > 2147483647) throw new Error("Realtime timeouts must be positive finite timer durations");
		const budget = options.maxPlaybackBufferSeconds ?? 2;
		if (!Number.isFinite(budget) || budget <= 0) throw new Error("maxPlaybackBufferSeconds must be positive and finite");
		this.reducer = new RealtimeEventReducer(this.maxEvents);
		this.onToolCall = options.onToolCall;
		this.onEvent = options.onEvent;
		this.onError = options.onError;
	}
	validateConnection() {
		const { model, api } = this.options;
		if ((!this.continuous || api.session != null) && this.options.maxPlaybackBufferSeconds != null) throw new Error("maxPlaybackBufferSeconds is supported only for continuous PCM sessions");
		const connection = api.session != null ? "webrtc" : api.token != null ? "client-secret-websocket" : "server-websocket";
		if (!(model.capabilities?.connections ?? ["client-secret-websocket"]).includes(connection) || model.capabilities?.transports != null && !model.capabilities.transports.includes(api.session != null ? "webrtc" : "websocket")) throw new Error(`Realtime model does not support ${connection}`);
		if (api.session != null) {
			if (model.getWebRTCConfig == null) throw new Error("Realtime model does not support WebRTC configuration");
			return;
		}
		if (this.continuous && api.websocket == null) throw new Error("Continuous PCM sessions require an application WebSocket relay");
		if (api.token != null && model.getWebSocketConfig == null) throw new Error("Realtime model does not support client-secret WebSocket configuration");
	}
	async connect(connectOptions) {
		if (this.attempt?.active) throw new Error("Realtime session is already active");
		const attempt = new RealtimeAttempt();
		this.attempt = attempt;
		const current = () => this.attempt === attempt && attempt.active;
		try {
			this.applyState({
				...this.state,
				status: "connecting"
			});
			if (!current()) return;
			this.validateConnection();
			const { model, api, sessionConfig } = this.options;
			if (connectOptions?.capture === false) this.stopAudioCapture();
			if (!current()) return;
			if (connectOptions?.stream != null && connectOptions.stream !== this.suppliedStream) {
				if (this.captureRequested && !this.sessionLifecycle && !this.continuous && api.session == null) this.startAudioCapture(connectOptions.stream);
				else this.suppliedStream = connectOptions.stream;
			}
			if (!current()) return;
			this.reducer = new RealtimeEventReducer(this.maxEvents);
			this.currentResponseItemId = null;
			this.toolCallsInResponse.clear();
			this.submittedToolOutputs.clear();
			this.responseToolCallsClosed = false;
			if (this.sessionLifecycle) this.applyState({
				...this.state,
				session: createSessionState()
			});
			if (!current()) return;
			this.commands = new RealtimeCommandTracker((event) => {
				const writable = () => current() && !attempt.transportClosing && attempt.cause == null && (!attempt.closing || event.type === "session-close");
				if (!writable()) throw new Error("Realtime connection is closed");
				return this.sendTransport(event, writable);
			});
			attempt.timer("startup", this.options.startupTimeoutMs ?? 3e4, () => {
				if (current()) this.fail(/* @__PURE__ */ new Error("Realtime session startup timed out"));
			});
			const reportedTransportErrors = /* @__PURE__ */ new WeakSet();
			const callbacks = {
				model,
				onEvent: async (event) => {
					if (!current()) return;
					try {
						await this.handleServerEvent(event, attempt);
					} catch (error) {
						if (current()) this.fail(error, (this.rtc ?? this.pcm ?? this.transport)?.finish());
					}
				},
				onError: (error) => {
					if (current()) {
						reportedTransportErrors.add(error);
						this.reportError(error, attempt);
					}
				},
				onFatalError: (error, drain) => {
					if (current()) this.fail(error, drain);
				},
				onClosing: () => {
					if (!current()) return;
					attempt.beginClose();
					attempt.transportClosing = true;
					attempt.clearTimer("startup");
					attempt.clearTimer("close");
					this.stopAudioCapture();
					if (!current()) return;
					this.applyState({
						...this.state,
						status: attempt.cause == null ? "closing" : "error"
					});
				},
				onClose: (error) => {
					if (!current()) return;
					const finalizationConfirmed = model.capabilities?.finalization === "session-close" && this.state.session?.finalization === "confirmed";
					if (error != null && !finalizationConfirmed) this.fail(error, void 0, !reportedTransportErrors.has(error));
					else if (!attempt.ready && !finalizationConfirmed) this.fail(/* @__PURE__ */ new Error("Realtime connection closed before becoming ready"));
					else this.disconnect();
				},
				onCapturing: (isCapturing) => {
					if (current()) this.applyState({
						...this.state,
						isCapturing
					});
				},
				onPlaying: (isPlaying) => {
					if (current()) this.applyState({
						...this.state,
						isPlaying
					});
				}
			};
			if (api.session != null) {
				this.rtc = new BrowserRealtimeWebRTC({
					...callbacks,
					disconnectTimeoutMs: this.options.rtcDisconnectTimeoutMs
				});
				await this.rtc.connect({
					api: api.session,
					sessionConfig,
					stream: connectOptions?.stream,
					capture: connectOptions?.capture,
					timeoutMs: this.options.startupTimeoutMs ?? 3e4
				});
			} else if (api.websocket != null && model.capabilities?.conversation === "continuous") {
				this.pcm = new BrowserRealtimeLiveWebSocket({
					...callbacks,
					sessionConfig,
					sampleRate: this.options.sampleRate,
					maxPlaybackBufferSeconds: this.options.maxPlaybackBufferSeconds
				});
				this.pcm.connect({
					url: api.websocket,
					protocols: api.protocols,
					stream: connectOptions?.stream,
					capture: connectOptions?.capture
				});
			} else {
				this.ensureAudio();
				let config = sessionConfig ?? {};
				let token;
				let url = api.websocket;
				if (api.token != null) {
					const response = await fetch(api.token, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ sessionConfig }),
						signal: attempt.abort.signal
					});
					if (!current()) return;
					if (!response.ok) throw new Error(`Failed to fetch realtime setup: ${response.status}`);
					const payload = await response.json().catch(() => {
						throw new Error("Invalid realtime setup response");
					});
					if (!current() || attempt.closing) return;
					const setup = validateRealtimeSetup(payload);
					token = setup.token;
					url = setup.url;
					config = {
						...sessionConfig,
						...setup.tools == null ? {} : { tools: setup.tools }
					};
				}
				if (url == null) throw new Error("Realtime WebSocket URL is missing");
				if (api.token != null && token == null) throw new Error("Realtime client-secret connection requires a token");
				this.ensureAudio().ensurePlaybackContext();
				if (!current()) return;
				this.transport = new BrowserRealtimeTransport({
					...callbacks,
					onServerEvent: callbacks.onEvent
				});
				this.transport.connect({
					...token != null ? {
						mode: "client-secret",
						token
					} : {
						mode: "relay",
						protocols: api.protocols
					},
					url,
					onOpen: () => {
						const writable = () => current() && !attempt.closing && attempt.cause == null;
						if (!writable()) return;
						return this.sendTransport({
							type: model.capabilities?.startup ?? "session-update",
							config
						}, writable);
					}
				});
			}
		} catch (error) {
			if (current()) this.fail(error);
		}
	}
	fail(error, drain, report = true) {
		const attempt = this.attempt;
		if (attempt == null || !attempt.active || attempt.cause != null) return;
		attempt.cause = error instanceof Error ? error : new Error(String(error));
		if (drain != null) attempt.beginClose();
		this.applyState({
			...this.state,
			status: "error"
		});
		if (this.attempt !== attempt || !attempt.active) return;
		this.stopAudioCapture();
		if (this.attempt !== attempt || !attempt.active) return;
		if (drain == null) this.disconnect();
		else this.drainAttempt(attempt, drain);
		if (report) this.reportError(attempt.cause, attempt);
	}
	async drainAttempt(attempt, drain) {
		if (this.attempt === attempt && attempt.active) attempt.timer("drain", 1e3, () => this.finishAttempt(attempt));
		try {
			await drain;
		} catch {}
		this.finishAttempt(attempt);
	}
	finishAttempt(attempt) {
		if (this.attempt !== attempt || !attempt.active) return;
		try {
			this.disconnect();
		} catch (error) {
			this.reportError(error, attempt);
		}
	}
	closeFailed(attempt, error) {
		if (this.attempt !== attempt || !attempt.active || attempt.transportClosing) return;
		attempt.clearTimer("close");
		const transport = this.rtc ?? this.pcm ?? this.transport;
		this.drainAttempt(attempt, transport?.finish());
		this.reportError(error, attempt);
	}
	disconnect() {
		const attempt = this.attempt;
		this.captureGeneration++;
		this.captureRequested = false;
		this.suppliedStream = void 0;
		const transport = this.transport;
		const audio = this.audio;
		const pcm = this.pcm;
		const rtc = this.rtc;
		this.transport = void 0;
		this.audio = void 0;
		this.pcm = void 0;
		this.rtc = void 0;
		this.commands = void 0;
		attempt?.retire();
		transport?.dispose();
		audio?.dispose();
		pcm?.dispose();
		rtc?.dispose();
		if (this.attempt !== attempt) return;
		const session = this.state.session;
		this.applyState({
			...this.state,
			status: attempt?.cause != null ? "error" : "disconnected",
			isCapturing: false,
			isPlaying: false,
			...session != null ? { session: session.finalization === "confirmed" ? session : {
				...session,
				finalization: "unconfirmed"
			} } : {}
		});
	}
	/** Wait for final usage when the model supports a session-close acknowledgement. */
	close(options) {
		const attempt = this.attempt;
		if (attempt?.closePromise != null) return attempt.closePromise;
		if (this.state.status !== "connected" || this.options.model.capabilities?.finalization !== "session-close" || attempt == null) {
			this.disconnect();
			return Promise.resolve();
		}
		if (options?.eventId != null) this.commands?.validateId(options.eventId);
		const promise = attempt.beginClose();
		this.applyState({
			...this.state,
			status: "closing"
		});
		if (this.attempt !== attempt || !attempt.active || attempt.transportClosing) return promise;
		this.stopAudioCapture();
		if (this.attempt !== attempt || !attempt.active || attempt.transportClosing) return promise;
		attempt.timer("close", this.options.closeTimeoutMs ?? 15e3, () => this.finishAttempt(attempt));
		const failed = (error) => this.closeFailed(attempt, error);
		try {
			this.commands?.send({
				type: "session-close",
				eventId: options?.eventId
			}).catch(failed);
		} catch (error) {
			failed(error);
		}
		return promise;
	}
	sendTransport(event, guard, automaticAudio = false) {
		const transport = this.rtc ?? this.pcm ?? this.transport;
		if (transport == null) throw new Error("Realtime connection is not open");
		if (transport === this.transport) return this.transport.sendEvent(event, guard, automaticAudio);
		return transport.sendEvent(event, guard);
	}
	sendEvent(event) {
		if (this.state.status === "error" || this.state.status === "closing" || this.attempt?.closing || !this.attempt?.active) throw new Error("Realtime session is not accepting submissions");
		if (this.sessionLifecycle && this.state.status !== "connected") throw new Error("Realtime session is not accepting submissions");
		if (this.rtc != null && event.type === "input-audio-append" || (this.continuous || this.rtc != null) && (event.type === "input-audio-commit" || event.type === "input-audio-clear")) throw new UnsupportedFunctionalityError({ functionality: "JSON audio commands unsupported for this session transport" });
		if (event.type === "session-close") return this.close({ eventId: event.eventId });
		if (event.type === "session-start" && this.sessionLifecycle) throw new Error("Realtime session has already started");
		if (!this.sessionLifecycle && this.state.session == null) {
			const attempt = this.attempt;
			return this.sendTransport(event, () => this.attempt === attempt && attempt.active && !attempt.closing && attempt.cause == null);
		}
		return this.commands?.send(event) ?? this.sendTransport(event);
	}
	sendTextMessage(text2) {
		if (this.continuous) throw new UnsupportedFunctionalityError({ functionality: "sendTextMessage for continuous sessions; client-delegation text is application-owned, use context-append for context" });
		this.sendEvent({
			type: "conversation-item-create",
			item: {
				type: "text-message",
				role: "user",
				text: text2
			}
		});
		this.sendEvent({ type: "response-create" });
		this.applyState(this.reducer.addUserTextMessage(this.state, text2));
	}
	sendAudio(audio) {
		const attempt = this.attempt;
		this.sendEvent({
			type: "input-audio-append",
			audio
		}).catch((error) => {
			if (attempt?.active && this.attempt === attempt) this.reportError(error, attempt);
		});
	}
	commitAudio() {
		this.sendEvent({ type: "input-audio-commit" });
	}
	clearAudioBuffer() {
		this.sendEvent({ type: "input-audio-clear" });
	}
	requestResponse(options) {
		this.sendEvent({
			type: "response-create",
			...options != null ? { options } : {}
		});
	}
	cancelResponse() {
		this.sendEvent({ type: "response-cancel" });
	}
	sendAutomaticAudio(audio) {
		if (this.state.status !== "connected" || !this.attempt?.active || this.attempt.closing) return;
		const attempt = this.attempt;
		const failed = (error) => {
			if (attempt?.active && this.attempt === attempt && !attempt.closing) this.fail(error);
		};
		try {
			this.sendTransport({
				type: "input-audio-append",
				audio
			}, () => this.attempt === attempt && attempt.active && !attempt.closing, true).catch(failed);
		} catch (error) {
			failed(error);
		}
	}
	addToolOutput(callId, result) {
		if (this.continuous) throw new UnsupportedFunctionalityError({ functionality: "addToolOutput for continuous sessions; client delegation is application-owned" });
		const attempt = this.attempt;
		if (!attempt?.active || attempt.closing || attempt.cause != null) throw new Error("Realtime session is not accepting submissions");
		const { state, output } = this.reducer.addToolOutput(this.state, callId, result);
		this.applyState(state);
		if (this.attempt !== attempt || !attempt?.active) return;
		this.sendEvent({
			type: "conversation-item-create",
			item: {
				type: "function-call-output",
				...output
			}
		});
		this.submittedToolOutputs.add(callId);
		this.maybeRequestToolResponse();
	}
	maybeRequestToolResponse() {
		if (this.state.status !== "connected" || this.attempt?.closing || !this.responseToolCallsClosed || this.toolCallsInResponse.size === 0 || [...this.toolCallsInResponse].some((id) => !this.submittedToolOutputs.has(id))) return;
		this.sendEvent({ type: "response-create" });
		this.toolCallsInResponse.clear();
		this.submittedToolOutputs.clear();
		this.responseToolCallsClosed = false;
	}
	startAudioCapture(stream) {
		const legacy = !this.sessionLifecycle && !this.continuous && this.options.api.session == null;
		if (!legacy && this.state.status !== "connected") throw new Error("Realtime session is not accepting capture");
		if (this.attempt?.active && (this.attempt.closing || this.attempt.cause != null)) throw new Error("Realtime session is not accepting capture");
		this.suppliedStream = stream;
		if (legacy) {
			this.captureGeneration++;
			this.captureRequested = true;
			this.ensureAudio().startCapture(stream);
			return;
		}
		const attempt = this.attempt;
		this.resumeAudioCapture().catch((error) => {
			if (attempt?.active) this.reportError(error, attempt);
		});
	}
	async resumeAudioCapture() {
		const accepting = () => !this.attempt?.closing && this.attempt?.cause == null && (this.state.status === "connected" || !this.sessionLifecycle && this.state.status === "connecting");
		if (!accepting()) throw new Error("Realtime session is not accepting capture");
		this.captureRequested = true;
		if (this.rtc != null) return this.rtc.startCapture(this.suppliedStream);
		if (this.pcm != null) return this.pcm.resumeCapture(this.suppliedStream);
		const audio = this.audio;
		if (audio == null) throw new Error("Realtime capture transport is not ready");
		const captureGeneration = ++this.captureGeneration;
		const attempt = this.attempt;
		const supplied = this.suppliedStream;
		const stream = supplied ?? await navigator.mediaDevices.getUserMedia({ audio: true });
		if (!attempt?.active || this.attempt !== attempt || this.audio !== audio || !accepting() || captureGeneration !== this.captureGeneration) {
			if (supplied == null) stream.getTracks().forEach((track) => track.stop());
			return;
		}
		audio.startCapture(stream, { ownsStream: supplied == null || !this.sessionLifecycle || this.options.api.token != null });
	}
	stopAudioCapture() {
		this.captureGeneration++;
		this.captureRequested = false;
		if (this.audio != null && (!this.sessionLifecycle || this.options.api.token != null)) this.suppliedStream = void 0;
		const pcm = this.pcm;
		const audio = this.audio;
		const rtc = this.rtc;
		const attempt = this.attempt;
		if (rtc != null) rtc.stopCapture().catch((error) => {
			if (attempt?.active && this.attempt === attempt) this.reportError(error, attempt);
		});
		pcm?.stopCapture();
		audio?.stopCapture();
	}
	stopPlayback() {
		(this.rtc ?? this.pcm ?? this.audio)?.stopPlayback();
	}
	async resumePlayback() {
		await (this.rtc ?? this.pcm ?? this.audio)?.resumePlayback();
	}
	dispose() {
		this.disconnect();
	}
	ensureAudio() {
		if (this.audio != null) return this.audio;
		const { sessionConfig, sampleRate } = this.options;
		const audio = new BrowserRealtimeAudio({
			captureSampleRate: sessionConfig?.inputAudioFormat?.rate ?? sampleRate ?? 24e3,
			playbackSampleRate: sessionConfig?.outputAudioFormat?.rate ?? sampleRate ?? 24e3,
			onAudio: (value) => {
				if (this.audio === audio) this.sendAutomaticAudio(value);
			},
			onError: (error) => {
				if (this.audio !== audio) return;
				this.reportError(error, this.attempt);
			},
			onCapturingChange: (isCapturing) => {
				if (this.audio === audio) this.applyState({
					...this.state,
					isCapturing
				});
			},
			onPlayingChange: (isPlaying) => {
				if (this.audio === audio) this.applyState({
					...this.state,
					isPlaying
				});
			}
		});
		this.audio = audio;
		return audio;
	}
	applyState(nextState) {
		const publication = ++this.publication;
		const previous = this.state;
		this.state = nextState;
		const update = (key) => {
			if (publication === this.publication && previous[key] !== nextState[key]) this.setState(key, nextState[key]);
		};
		update("status");
		update("messages");
		update("events");
		update("isCapturing");
		update("isPlaying");
		update("session");
	}
	async executeTool(callId, name25, args, attempt) {
		if (this.continuous || this.attempt !== attempt || !attempt.active || attempt.closing || attempt.cause != null) return;
		try {
			if (this.onToolCall == null) {
				this.reportError(/* @__PURE__ */ new Error(`No handler provided for tool "${name25}"`), attempt);
				return;
			}
			const result = await this.onToolCall({ toolCall: {
				toolCallId: callId,
				toolName: name25,
				args
			} });
			if (result !== void 0 && this.attempt === attempt && attempt?.active && this.state.status === "connected") this.addToolOutput(callId, result);
		} catch (error) {
			if (attempt.active) this.reportError(error, attempt);
		}
	}
	async handleServerEvent(event, attempt) {
		const current = () => this.attempt === attempt && attempt.active;
		if (!current()) return;
		if (event.type === "session-started" && event.delegationMode === "provider") throw new UnsupportedFunctionalityError({ functionality: "Provider delegation mode; this realtime runtime supports client delegation only" });
		if (this.continuous && event.type === "audio-delta") throw new UnsupportedFunctionalityError({ functionality: "Turn-based audio-delta in a continuous PCM session; use audio-chunk" });
		const command = this.commands?.receive(event);
		const result = await this.reducer.reduceServerEvent(this.state, event);
		if (!current()) return;
		const session = this.state.session ?? (event.type === "session-started" ? createSessionState() : void 0);
		this.applyState({
			...result.state,
			status: this.state.status,
			...session == null ? {} : { session: reduceSessionState(session, event, this.maxEvents, command?.muted) }
		});
		if (!current()) return;
		for (const effect of result.effects) {
			this.handleReducerEffect(effect, attempt);
			if (!current()) return;
		}
		if (event.type === "audio-chunk") (this.pcm ?? this.audio)?.playAudio(event.delta);
		if (!current()) return;
		if (event.type === "response-done" && this.toolCallsInResponse.size > 0) {
			this.responseToolCallsClosed = true;
			this.maybeRequestToolResponse();
		}
		if (!current()) return;
		if (event.type === "session-closed" && session != null) {
			this.disconnect();
			this.notifyEvent(event, attempt, true);
			return;
		}
		if ((event.type === "session-started" || event.type === "session-created" || event.type === "session-updated") && attempt.active && !attempt.closing && attempt.cause == null) {
			if (this.options.model.capabilities?.startup === "session-start" ? event.type === "session-started" : event.type !== "session-started") {
				attempt.ready = true;
				attempt.clearTimer("startup");
				this.applyState({
					...this.state,
					status: "connected"
				});
				if (!current() || attempt.closing) return;
				this.pcm?.startCapture();
			}
		}
		if (current()) this.notifyEvent(event, attempt);
	}
	handleReducerEffect(effect, attempt) {
		switch (effect.type) {
			case "play-audio":
				this.currentResponseItemId = effect.itemId;
				this.audio?.playAudio(effect.delta);
				break;
			case "speech-started":
				if (!this.continuous && this.state.isPlaying) {
					const playedMs = this.audio?.getPlaybackOffsetMs() ?? 0;
					const itemId = this.currentResponseItemId;
					this.audio?.stopPlayback();
					if (this.attempt !== attempt || !attempt.active) return;
					if (itemId != null && !attempt.closing && attempt.cause == null) this.sendEvent({
						type: "conversation-item-truncate",
						itemId,
						contentIndex: 0,
						audioEndMs: Math.round(playedMs)
					});
				}
				break;
			case "tool-call":
				if (this.continuous) break;
				this.toolCallsInResponse.add(effect.callId);
				this.executeTool(effect.callId, effect.name, effect.args, attempt);
				break;
			case "error": this.reportError(effect.error, attempt);
		}
	}
	async reportError(error, attempt) {
		if (this.attempt !== attempt) return;
		try {
			await this.onError?.(error instanceof Error ? error : new Error(String(error)));
		} catch {}
	}
	notifyEvent(event, attempt, terminal = false) {
		if (this.attempt !== attempt || !attempt.active && !terminal) return;
		const report = (error) => {
			if (attempt.active || terminal) this.reportError(error, attempt);
		};
		try {
			Promise.resolve(this.onEvent?.(event)).catch(report);
		} catch (error) {
			report(error);
		}
	}
};
function customProvider({ languageModels, embeddingModels, imageModels, transcriptionModels, speechModels, rerankingModels, videoModels, evaluationModels, files, skills, fallbackProvider: fallbackProviderArg }) {
	const fallbackProvider = fallbackProviderArg == null ? void 0 : asProviderV4(fallbackProviderArg);
	const baseProvider = {
		specificationVersion: "v4",
		languageModel(modelId) {
			if (languageModels != null && modelId in languageModels) return resolveLanguageModel(languageModels[modelId]);
			if (fallbackProvider) return fallbackProvider.languageModel(modelId);
			throw new NoSuchModelError({
				modelId,
				modelType: "languageModel"
			});
		},
		embeddingModel(modelId) {
			if (embeddingModels != null && modelId in embeddingModels) return resolveEmbeddingModel(embeddingModels[modelId]);
			if (fallbackProvider) return fallbackProvider.embeddingModel(modelId);
			throw new NoSuchModelError({
				modelId,
				modelType: "embeddingModel"
			});
		},
		imageModel(modelId) {
			if (imageModels != null && modelId in imageModels) return resolveImageModel(imageModels[modelId]);
			if (fallbackProvider?.imageModel) return fallbackProvider.imageModel(modelId);
			throw new NoSuchModelError({
				modelId,
				modelType: "imageModel"
			});
		},
		transcriptionModel(modelId) {
			if (transcriptionModels != null && modelId in transcriptionModels) {
				const model = resolveTranscriptionModel(transcriptionModels[modelId]);
				if (model != null) return model;
			}
			if (fallbackProvider?.transcriptionModel) return fallbackProvider.transcriptionModel(modelId);
			throw new NoSuchModelError({
				modelId,
				modelType: "transcriptionModel"
			});
		},
		speechModel(modelId) {
			if (speechModels != null && modelId in speechModels) {
				const model = resolveSpeechModel(speechModels[modelId]);
				if (model != null) return model;
			}
			if (fallbackProvider?.speechModel) return fallbackProvider.speechModel(modelId);
			throw new NoSuchModelError({
				modelId,
				modelType: "speechModel"
			});
		},
		rerankingModel(modelId) {
			if (rerankingModels != null && modelId in rerankingModels) return resolveRerankingModel(rerankingModels[modelId]);
			if (fallbackProvider?.rerankingModel) return fallbackProvider.rerankingModel(modelId);
			throw new NoSuchModelError({
				modelId,
				modelType: "rerankingModel"
			});
		},
		evaluationModel(modelId) {
			if (evaluationModels != null && Object.hasOwn(evaluationModels, modelId)) return resolveEvaluationModel(evaluationModels[modelId]);
			const provider = fallbackProviderArg;
			if (typeof provider?.evaluationModel === "function") {
				const model = provider.evaluationModel(modelId);
				if (model != null) return resolveEvaluationModel(model);
			}
			throw new NoSuchModelError({
				modelId,
				modelType: "evaluationModel"
			});
		},
		videoModel(modelId) {
			if (videoModels != null && modelId in videoModels) return resolveVideoModel(videoModels[modelId]);
			const provider = fallbackProviderArg;
			if (provider?.videoModel) return resolveVideoModel(provider.videoModel(modelId));
			throw new NoSuchModelError({
				modelId,
				modelType: "videoModel"
			});
		}
	};
	const filesAndSkills = {
		...files != null || fallbackProvider?.files != null ? { files() {
			return files ?? fallbackProvider.files();
		} } : {},
		...skills != null || fallbackProvider?.skills != null ? { skills() {
			return skills ?? fallbackProvider.skills();
		} } : {}
	};
	return Object.assign(baseProvider, filesAndSkills);
}
var name24 = "AI_NoSuchProviderError";
var marker24 = `vercel.ai.error.${name24}`;
var symbol24 = Symbol.for(marker24);
var _a24;
var _b24;
var NoSuchProviderError = class extends (_b24 = NoSuchModelError, _a24 = symbol24, _b24) {
	constructor({ modelId, modelType, providerId, availableProviders, message = `No such provider: ${providerId} (available providers: ${availableProviders.join()})` }) {
		super({
			errorName: name24,
			modelId,
			modelType,
			message
		});
		this[_a24] = true;
		this.providerId = providerId;
		this.availableProviders = availableProviders;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker24);
	}
};
function createProviderRegistry(providers, { separator = ":", languageModelMiddleware, imageModelMiddleware } = {}) {
	const registry = new DefaultProviderRegistry({
		separator,
		languageModelMiddleware,
		imageModelMiddleware
	});
	for (const [id, provider] of Object.entries(providers)) registry.registerProvider({
		id,
		provider
	});
	return registry;
}
var experimental_createProviderRegistry = createProviderRegistry;
var DefaultProviderRegistry = class {
	constructor({ separator, languageModelMiddleware, imageModelMiddleware }) {
		this.providers = {};
		this.separator = separator;
		this.languageModelMiddleware = languageModelMiddleware;
		this.imageModelMiddleware = imageModelMiddleware;
	}
	registerProvider({ id, provider }) {
		const providerV4 = asProviderV4(provider);
		const videoModel = provider.videoModel?.bind(provider);
		const evaluationModel = provider.evaluationModel?.bind(provider);
		const registeredProvider = videoModel == null ? providerV4 : Object.assign(Object.create(Object.getPrototypeOf(providerV4)), {
			...providerV4,
			videoModel: (modelId) => asVideoModelV4(videoModel(modelId))
		});
		if (registeredProvider !== provider && evaluationModel != null) Object.assign(registeredProvider, { evaluationModel });
		this.providers[id] = registeredProvider;
	}
	getProvider(id, modelType) {
		const provider = this.providers[id];
		if (provider == null) throw new NoSuchProviderError({
			modelId: id,
			modelType,
			providerId: id,
			availableProviders: Object.keys(this.providers)
		});
		return provider;
	}
	splitId(id, modelType) {
		const index = id.indexOf(this.separator);
		if (index === -1) throw new NoSuchModelError({
			modelId: id,
			modelType,
			message: `Invalid ${modelType} id for registry: ${id} (must be in the format "providerId${this.separator}modelId")`
		});
		return [id.slice(0, index), id.slice(index + this.separator.length)];
	}
	languageModel(id) {
		const [providerId, modelId] = this.splitId(id, "languageModel");
		let model = this.getProvider(providerId, "languageModel").languageModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "languageModel"
		});
		if (this.languageModelMiddleware != null) model = wrapLanguageModel({
			model,
			middleware: this.languageModelMiddleware
		});
		return model;
	}
	embeddingModel(id) {
		const [providerId, modelId] = this.splitId(id, "embeddingModel");
		const model = this.getProvider(providerId, "embeddingModel").embeddingModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "embeddingModel"
		});
		return model;
	}
	imageModel(id) {
		const [providerId, modelId] = this.splitId(id, "imageModel");
		let model = this.getProvider(providerId, "imageModel").imageModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "imageModel"
		});
		if (this.imageModelMiddleware != null) model = wrapImageModel({
			model,
			middleware: this.imageModelMiddleware
		});
		return model;
	}
	transcriptionModel(id) {
		const [providerId, modelId] = this.splitId(id, "transcriptionModel");
		const model = this.getProvider(providerId, "transcriptionModel").transcriptionModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "transcriptionModel"
		});
		return model;
	}
	speechModel(id) {
		const [providerId, modelId] = this.splitId(id, "speechModel");
		const model = this.getProvider(providerId, "speechModel").speechModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "speechModel"
		});
		return model;
	}
	rerankingModel(id) {
		const [providerId, modelId] = this.splitId(id, "rerankingModel");
		const model = this.getProvider(providerId, "rerankingModel").rerankingModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "rerankingModel"
		});
		return model;
	}
	videoModel(id) {
		const [providerId, modelId] = this.splitId(id, "videoModel");
		const model = this.getProvider(providerId, "videoModel").videoModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "videoModel"
		});
		return asVideoModelV4(model);
	}
	evaluationModel(id) {
		const [providerId, modelId] = this.splitId(id, "evaluationModel");
		const model = this.getProvider(providerId, "evaluationModel").evaluationModel?.(modelId);
		if (model == null) throw new NoSuchModelError({
			modelId: id,
			modelType: "evaluationModel"
		});
		return resolveEvaluationModel(model);
	}
	files(id) {
		const files = this.getProvider(id, "languageModel").files?.();
		if (files == null) throw new Error(`The provider "${id}" does not support file uploads. Make sure it exposes a files() method.`);
		return files;
	}
	skills(id) {
		const skills = this.getProvider(id, "languageModel").skills?.();
		if (skills == null) throw new Error(`The provider "${id}" does not support skills. Make sure it exposes a skills() method.`);
		return skills;
	}
};
function createRestrictedTelemetryDispatcher4({ telemetry }) {
	const dispatcher = createTelemetryDispatcher({ telemetry });
	return {
		...dispatcher,
		onStart: (event) => dispatcher.onStart?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: telemetry?.includeRuntimeContext
			})
		}),
		onEnd: (event) => dispatcher.onEnd?.({
			...event,
			runtimeContext: filterIncludedContext({
				context: event.runtimeContext,
				includeContext: telemetry?.includeRuntimeContext
			})
		})
	};
}
var originalGenerateCallId7 = createIdGenerator({
	prefix: "call",
	size: 24
});
async function rerank({ model: modelArg, documents, query, topN, maxRetries: maxRetriesArg, abortSignal, headers, providerOptions, experimental_telemetry, telemetry = experimental_telemetry, runtimeContext = {}, onStart, experimental_onStart, onEnd, experimental_onEnd, _internal: { generateCallId = originalGenerateCallId7 } = {} }) {
	const model = resolveRerankingModel(modelArg);
	const callId = generateCallId();
	const resolvedOnStart = onStart ?? experimental_onStart;
	const resolvedOnEnd = onEnd ?? experimental_onEnd;
	const telemetryDispatcher = createRestrictedTelemetryDispatcher4({ telemetry });
	const runInTracingChannelSpan = telemetryDispatcher.runInTracingChannelSpan ?? (async ({ execute }) => await execute());
	if (documents.length === 0) {
		await notify({
			event: {
				callId,
				operationId: "ai.rerank",
				runtimeContext,
				provider: model.provider,
				modelId: model.modelId,
				documents,
				query,
				topN,
				maxRetries: maxRetriesArg ?? 2,
				headers,
				providerOptions
			},
			callbacks: [resolvedOnStart, telemetryDispatcher.onStart]
		});
		await notify({
			event: {
				callId,
				operationId: "ai.rerank",
				runtimeContext,
				provider: model.provider,
				modelId: model.modelId,
				documents,
				query,
				ranking: [],
				warnings: [],
				providerMetadata: void 0,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: model.modelId
				}
			},
			callbacks: [resolvedOnEnd, telemetryDispatcher.onEnd]
		});
		return new DefaultRerankResult({
			originalDocuments: [],
			ranking: [],
			providerMetadata: void 0,
			response: {
				timestamp: /* @__PURE__ */ new Date(),
				modelId: model.modelId
			}
		});
	}
	const { maxRetries, retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const documentsToSend = typeof documents[0] === "string" ? {
		type: "text",
		values: documents
	} : {
		type: "object",
		values: documents
	};
	const startEvent = {
		callId,
		operationId: "ai.rerank",
		runtimeContext,
		provider: model.provider,
		modelId: model.modelId,
		documents,
		query,
		topN,
		maxRetries,
		headers,
		providerOptions
	};
	return await runInTracingChannelSpan({
		type: "rerank",
		event: startEvent,
		execute: async () => {
			await notify({
				event: startEvent,
				callbacks: [resolvedOnStart, telemetryDispatcher.onStart]
			});
			try {
				const { ranking, response, providerMetadata, warnings } = await retry(async () => {
					await notify({
						event: {
							callId,
							operationId: "ai.rerank.doRerank",
							provider: model.provider,
							modelId: model.modelId,
							documents,
							documentsType: documentsToSend.type,
							query,
							topN
						},
						callbacks: [telemetryDispatcher.onRerankStart]
					});
					const modelResponse = await model.doRerank({
						documents: documentsToSend,
						query,
						topN,
						providerOptions,
						abortSignal,
						headers
					});
					const ranking2 = modelResponse.ranking;
					await notify({
						event: {
							callId,
							operationId: "ai.rerank.doRerank",
							provider: model.provider,
							modelId: model.modelId,
							documentsType: documentsToSend.type,
							ranking: ranking2
						},
						callbacks: [telemetryDispatcher.onRerankEnd]
					});
					return {
						ranking: ranking2,
						providerMetadata: modelResponse.providerMetadata,
						response: modelResponse.response,
						warnings: modelResponse.warnings
					};
				});
				validateRankingIndices({
					ranking,
					documents
				});
				logWarnings({
					warnings: warnings ?? [],
					provider: model.provider,
					model: model.modelId
				});
				await notify({
					event: {
						callId,
						operationId: "ai.rerank",
						runtimeContext,
						provider: model.provider,
						modelId: model.modelId,
						documents,
						query,
						ranking: ranking.map((ranking2) => ({
							originalIndex: ranking2.index,
							score: ranking2.relevanceScore,
							document: documents[ranking2.index]
						})),
						warnings: warnings ?? [],
						providerMetadata,
						response: {
							id: response?.id,
							timestamp: response?.timestamp ?? /* @__PURE__ */ new Date(),
							modelId: response?.modelId ?? model.modelId,
							headers: response?.headers,
							body: response?.body
						}
					},
					callbacks: [resolvedOnEnd, telemetryDispatcher.onEnd]
				});
				return new DefaultRerankResult({
					originalDocuments: documents,
					ranking: ranking.map((ranking2) => ({
						originalIndex: ranking2.index,
						score: ranking2.relevanceScore,
						document: documents[ranking2.index]
					})),
					providerMetadata,
					response: {
						id: response?.id,
						timestamp: response?.timestamp ?? /* @__PURE__ */ new Date(),
						modelId: response?.modelId ?? model.modelId,
						headers: response?.headers,
						body: response?.body
					}
				});
			} catch (error) {
				await telemetryDispatcher.onError?.({
					callId,
					error
				});
				throw error;
			}
		}
	});
}
function validateRankingIndices({ ranking, documents }) {
	for (const { index } of ranking) if (!Number.isInteger(index) || index < 0 || index >= documents.length) throw new InvalidResponseDataError({
		data: ranking,
		message: `Invalid ranking index ${index}. Expected an integer between 0 and ${documents.length - 1}.`
	});
}
var DefaultRerankResult = class {
	constructor(options) {
		this.originalDocuments = options.originalDocuments;
		this.ranking = options.ranking;
		this.response = options.response;
		this.providerMetadata = options.providerMetadata;
	}
	get rerankedDocuments() {
		return this.ranking.map((ranking) => ranking.document);
	}
};
var defaultDownload2 = createDownload();
async function transcribe({ model, audio, providerOptions = {}, maxRetries: maxRetriesArg, abortSignal, headers, download: downloadFn = defaultDownload2 }) {
	const resolvedModel = resolveTranscriptionModel(model);
	if (!resolvedModel) throw new Error("Model could not be resolved");
	const { retry } = prepareRetries({
		maxRetries: maxRetriesArg,
		abortSignal
	});
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const audioData = audio instanceof URL ? (await downloadFn({
		url: audio,
		abortSignal
	})).data : convertDataContentToUint8Array(audio);
	const result = await retry(() => resolvedModel.doGenerate({
		audio: audioData,
		abortSignal,
		headers: headersWithUserAgent,
		providerOptions,
		mediaType: detectMediaType({
			data: audioData,
			topLevelType: "audio"
		}) ?? "audio/wav"
	}));
	logWarnings({
		warnings: result.warnings,
		provider: resolvedModel.provider,
		model: resolvedModel.modelId
	});
	if (!result.text) throw new NoTranscriptGeneratedError({ responses: [result.response] });
	return new DefaultTranscriptionResult({
		text: result.text,
		segments: result.segments,
		language: result.language,
		durationInSeconds: result.durationInSeconds,
		warnings: result.warnings,
		responses: [result.response],
		providerMetadata: result.providerMetadata
	});
}
var DefaultTranscriptionResult = class {
	constructor(options) {
		this.text = options.text;
		this.segments = options.segments;
		this.language = options.language;
		this.durationInSeconds = options.durationInSeconds;
		this.warnings = options.warnings;
		this.responses = options.responses;
		this.providerMetadata = options.providerMetadata ?? {};
	}
};
function streamTranscribe({ model, audio, inputAudioFormat, providerOptions = {}, abortSignal, headers, includeRawChunks, _internal: { currentDate = () => /* @__PURE__ */ new Date() } = {} }) {
	const resolvedModel = resolveTranscriptionModel(model);
	if (!resolvedModel) throw new Error("Model could not be resolved");
	const doStream = resolvedModel.doStream?.bind(resolvedModel);
	if (doStream == null) throw new UnsupportedFunctionalityError({
		functionality: "streaming transcription",
		message: `The ${resolvedModel.provider} model "${resolvedModel.modelId}" does not support streaming transcription.` + (typeof model === "string" ? " String model IDs resolve through the global provider (AI Gateway by default). If that provider does not support streaming transcription, pass a provider model instance instead (e.g. openai.transcription('gpt-realtime-whisper')) or upgrade @ai-sdk/gateway to a version with streaming transcription support." : "")
	});
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const textPromise = new DelayedPromise();
	const segmentsPromise = new DelayedPromise();
	const languagePromise = new DelayedPromise();
	const durationInSecondsPromise = new DelayedPromise();
	const warningsPromise = new DelayedPromise();
	const responsesPromise = new DelayedPromise();
	const providerMetadataPromise = new DelayedPromise();
	const rejectPendingPromises = (error) => {
		for (const promise of [
			textPromise,
			segmentsPromise,
			languagePromise,
			durationInSecondsPromise,
			warningsPromise,
			responsesPromise,
			providerMetadataPromise
		]) if (promise.isPending()) promise.reject(error);
	};
	const startedAt = currentDate();
	let response;
	const currentResponseMetadata = () => response ?? {
		timestamp: startedAt,
		modelId: resolvedModel.modelId
	};
	const resolveWarnings = (warnings) => {
		warningsPromise.resolve(warnings);
		logWarnings({
			warnings,
			provider: resolvedModel.provider,
			model: resolvedModel.modelId
		});
	};
	const pipeAbortController = new AbortController();
	const transform = new TransformStream({
		transform(value, controller) {
			switch (value.type) {
				case "stream-start":
					resolveWarnings(value.warnings);
					break;
				case "response-metadata":
					response = {
						timestamp: value.timestamp ?? currentResponseMetadata().timestamp,
						modelId: value.modelId ?? currentResponseMetadata().modelId,
						headers: value.headers ?? response?.headers
					};
					break;
				case "transcript-delta":
				case "transcript-partial":
				case "transcript-final":
				case "raw":
				case "error":
					controller.enqueue(value);
					break;
				case "finish":
					if (!warningsPromise.isResolved()) resolveWarnings([]);
					if (!value.text) throw new NoTranscriptGeneratedError({ responses: [currentResponseMetadata()] });
					textPromise.resolve(value.text);
					segmentsPromise.resolve(value.segments);
					languagePromise.resolve(value.language);
					durationInSecondsPromise.resolve(value.durationInSeconds);
					responsesPromise.resolve([currentResponseMetadata()]);
					providerMetadataPromise.resolve(value.providerMetadata ?? {});
			}
		},
		flush() {
			if (textPromise.isPending()) throw new NoTranscriptGeneratedError({ responses: [currentResponseMetadata()] });
		},
		cancel(reason) {
			pipeAbortController.abort(reason ?? /* @__PURE__ */ new Error("Transcription stream was cancelled."));
		}
	});
	(async () => {
		const result = await doStream({
			audio,
			inputAudioFormat,
			providerOptions,
			abortSignal: mergeAbortSignals(abortSignal, pipeAbortController.signal),
			headers: headersWithUserAgent,
			includeRawChunks
		});
		response = {
			timestamp: result.response?.timestamp ?? startedAt,
			modelId: result.response?.modelId ?? resolvedModel.modelId,
			headers: result.response?.headers
		};
		await result.stream.pipeTo(transform.writable, { signal: pipeAbortController.signal });
	})().catch((error) => {
		const reason = error ?? /* @__PURE__ */ new Error("Transcription stream was cancelled or errored.");
		rejectPendingPromises(reason);
		audio.cancel(reason).catch(() => {});
		transform.writable.abort(reason).catch(() => {});
	});
	let streamOwner = "unclaimed";
	function consumeStream2() {
		if (streamOwner === "full-stream" || streamOwner === "result-promises") return;
		streamOwner = "result-promises";
		const reader = transform.readable.getReader();
		(async () => {
			while (!(await reader.read()).done);
		})().catch(() => {});
	}
	function getFullStream() {
		if (streamOwner !== "unclaimed") throw new Error(streamOwner === "full-stream" ? "fullStream can only be accessed once." : "fullStream cannot be accessed after a result promise.");
		streamOwner = "full-stream";
		return asAsyncIterableStream(transform.readable);
	}
	return {
		get text() {
			consumeStream2();
			return textPromise.promise;
		},
		get segments() {
			consumeStream2();
			return segmentsPromise.promise;
		},
		get language() {
			consumeStream2();
			return languagePromise.promise;
		},
		get durationInSeconds() {
			consumeStream2();
			return durationInSecondsPromise.promise;
		},
		get warnings() {
			consumeStream2();
			return warningsPromise.promise;
		},
		get responses() {
			consumeStream2();
			return responsesPromise.promise;
		},
		get providerMetadata() {
			consumeStream2();
			return providerMetadataPromise.promise;
		},
		get fullStream() {
			return getFullStream();
		}
	};
}
var experimental_transcribe = transcribe;
function streamTranslate({ model, audio, inputAudioFormat, targetLanguage, sourceLanguage, outputAudioFormat, providerOptions = {}, abortSignal, headers, includeRawChunks, _internal: { currentDate = () => /* @__PURE__ */ new Date() } = {} }) {
	const resolvedModel = resolveSpeechTranslationModel(model);
	const doStream = resolvedModel.doStream.bind(resolvedModel);
	const headersWithUserAgent = withUserAgentSuffix(headers ?? {}, `ai/${VERSION}`);
	const sourceTextPromise = new DelayedPromise();
	const translationTextPromise = new DelayedPromise();
	const durationInSecondsPromise = new DelayedPromise();
	const usagePromise = new DelayedPromise();
	const warningsPromise = new DelayedPromise();
	const responsePromise = new DelayedPromise();
	const providerMetadataPromise = new DelayedPromise();
	const rejectPendingPromises = (error) => {
		for (const promise of [
			sourceTextPromise,
			translationTextPromise,
			durationInSecondsPromise,
			usagePromise,
			warningsPromise,
			responsePromise,
			providerMetadataPromise
		]) if (promise.isPending()) promise.reject(error);
	};
	const startedAt = currentDate();
	let response;
	const currentResponseMetadata = () => response ?? {
		timestamp: startedAt,
		modelId: resolvedModel.modelId
	};
	const resolveWarnings = (warnings) => {
		warningsPromise.resolve(warnings);
		logWarnings({
			warnings,
			provider: resolvedModel.provider,
			model: resolvedModel.modelId
		});
	};
	const pipeAbortController = new AbortController();
	let hasAudioOutput = false;
	const transform = new TransformStream({
		transform(value, controller) {
			switch (value.type) {
				case "stream-start":
					resolveWarnings(value.warnings);
					break;
				case "response-metadata":
					response = {
						timestamp: value.timestamp ?? currentResponseMetadata().timestamp,
						modelId: value.modelId ?? currentResponseMetadata().modelId,
						headers: value.headers ?? response?.headers
					};
					break;
				case "audio":
					hasAudioOutput = true;
					controller.enqueue(value);
					break;
				case "output-text-delta":
				case "output-text-final":
				case "source-transcript-delta":
				case "source-transcript-partial":
				case "source-transcript-final":
				case "raw":
				case "error":
					controller.enqueue(value);
					break;
				case "finish":
					if (!warningsPromise.isResolved()) resolveWarnings([]);
					if (!hasAudioOutput && !value.outputText) throw new NoTranslationGeneratedError({ response: currentResponseMetadata() });
					sourceTextPromise.resolve(value.sourceText);
					translationTextPromise.resolve(value.outputText);
					durationInSecondsPromise.resolve(value.durationInSeconds);
					usagePromise.resolve(value.usage);
					responsePromise.resolve(currentResponseMetadata());
					providerMetadataPromise.resolve(value.providerMetadata ?? {});
					break;
				default: throw new Error(`Unsupported part type: ${value}`);
			}
		},
		flush() {
			if (translationTextPromise.isPending()) throw new NoTranslationGeneratedError({ response: currentResponseMetadata() });
		},
		cancel(reason) {
			pipeAbortController.abort(reason ?? /* @__PURE__ */ new Error("Translation stream was cancelled."));
		}
	});
	(async () => {
		const result = await doStream({
			audio,
			inputAudioFormat,
			targetLanguage,
			sourceLanguage,
			outputAudioFormat,
			providerOptions,
			abortSignal: mergeAbortSignals(abortSignal, pipeAbortController.signal),
			headers: headersWithUserAgent,
			includeRawChunks
		});
		response = {
			timestamp: result.response?.timestamp ?? startedAt,
			modelId: result.response?.modelId ?? resolvedModel.modelId,
			headers: result.response?.headers
		};
		await result.stream.pipeTo(transform.writable, { signal: pipeAbortController.signal });
	})().catch((error) => {
		const reason = error ?? /* @__PURE__ */ new Error("Translation stream was cancelled or errored.");
		rejectPendingPromises(reason);
		audio.cancel(reason).catch(() => {});
		transform.writable.abort(reason).catch(() => {});
	});
	let streamOwner = "unclaimed";
	function consumeStream2() {
		if (streamOwner === "full-stream" || streamOwner === "result-promises") return;
		streamOwner = "result-promises";
		const reader = transform.readable.getReader();
		(async () => {
			while (!(await reader.read()).done);
		})().catch(() => {});
	}
	function getFullStream() {
		if (streamOwner !== "unclaimed") throw new Error(streamOwner === "full-stream" ? "fullStream can only be accessed once." : "fullStream cannot be accessed after a result promise.");
		streamOwner = "full-stream";
		return asAsyncIterableStream(transform.readable);
	}
	return {
		get sourceText() {
			consumeStream2();
			return sourceTextPromise.promise;
		},
		get translationText() {
			consumeStream2();
			return translationTextPromise.promise;
		},
		get durationInSeconds() {
			consumeStream2();
			return durationInSecondsPromise.promise;
		},
		get usage() {
			consumeStream2();
			return usagePromise.promise;
		},
		get warnings() {
			consumeStream2();
			return warningsPromise.promise;
		},
		get response() {
			consumeStream2();
			return responsePromise.promise;
		},
		get providerMetadata() {
			consumeStream2();
			return providerMetadataPromise.promise;
		},
		get fullStream() {
			return getFullStream();
		}
	};
}
async function createUIApiCallError({ response, url, fallbackMessage }) {
	const responseBody = await response.text();
	return new APICallError({
		message: responseBody || fallbackMessage,
		url,
		requestBodyValues: void 0,
		statusCode: response.status,
		responseBody
	});
}
async function processTextStream({ stream, onTextPart }) {
	const reader = stream.pipeThrough(new TextDecoderStream()).getReader();
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		await onTextPart(value);
	}
}
var getOriginalFetch = () => fetch;
async function callCompletionApi({ api, prompt, credentials, headers, body, streamProtocol = "data", setCompletion, setLoading, setError, setAbortController, getAbortController, onFinish, onError, fetch: fetch2 = getOriginalFetch() }) {
	const abortController = new AbortController();
	const isCurrentRequest = () => getAbortController == null || getAbortController() === abortController;
	try {
		setLoading(true);
		setError(void 0);
		setAbortController(abortController);
		setCompletion("");
		const response = await fetch2(api, {
			method: "POST",
			body: JSON.stringify({
				prompt,
				...body
			}),
			credentials,
			headers: withUserAgentSuffix({
				"Content-Type": "application/json",
				...headers
			}, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			signal: abortController.signal
		}).catch((err) => {
			throw err;
		});
		if (!response.ok) throw await createUIApiCallError({
			response,
			url: api,
			fallbackMessage: "Failed to fetch the chat response."
		});
		if (!response.body) throw new EmptyResponseBodyError({ message: "The response body is empty." });
		let result = "";
		switch (streamProtocol) {
			case "text":
				await processTextStream({
					stream: response.body,
					onTextPart: (chunk) => {
						result += chunk;
						if (isCurrentRequest()) setCompletion(result);
					}
				});
				break;
			case "data":
				await consumeStream({
					stream: parseJsonEventStream({
						stream: response.body,
						schema: uiMessageChunkSchema
					}).pipeThrough(new TransformStream({ async transform(part) {
						if (!part.success) throw part.error;
						const streamPart = part.value;
						if (streamPart.type === "text-delta") {
							result += streamPart.delta;
							if (isCurrentRequest()) setCompletion(result);
						} else if (streamPart.type === "error") throw new UIMessageStreamError({
							chunkType: "error",
							chunkId: "",
							message: streamPart.errorText
						});
					} })),
					onError: (error) => {
						throw error;
					}
				});
				break;
			default: {
				const exhaustiveCheck = streamProtocol;
				throw new InvalidArgumentError({
					parameter: "streamProtocol",
					value: exhaustiveCheck,
					message: `Unknown stream protocol: ${exhaustiveCheck}`
				});
			}
		}
		if (onFinish) onFinish(prompt, result);
		return result;
	} catch (err) {
		if (err.name === "AbortError") return null;
		if (err instanceof Error) {
			if (onError) onError(err);
		}
		if (isCurrentRequest()) setError(err);
	} finally {
		if (isCurrentRequest()) {
			setAbortController(null);
			setLoading(false);
		}
	}
}
async function convertFileListToFileUIParts(files) {
	if (files == null) return [];
	if (!globalThis.FileList || !(files instanceof globalThis.FileList)) throw new UnsupportedFunctionalityError({
		functionality: "FileList",
		message: "FileList is not supported in the current environment"
	});
	return Promise.all(Array.from(files).map(async (file) => {
		const { name: name25, type } = file;
		return {
			type: "file",
			mediaType: type,
			filename: name25,
			url: await new Promise((resolve3, reject) => {
				const reader = new FileReader();
				reader.onload = (readerEvent) => {
					resolve3(readerEvent.target?.result);
				};
				reader.onerror = (error) => reject(error);
				reader.readAsDataURL(file);
			})
		};
	}));
}
function appendPathToUrl(url, path) {
	const queryOrFragmentStart = url.search(/[?#]/);
	return queryOrFragmentStart === -1 ? `${url}${path}` : `${url.slice(0, queryOrFragmentStart)}${path}${url.slice(queryOrFragmentStart)}`;
}
var HttpChatTransport = class {
	constructor({ api = "/api/chat", credentials, headers, body, fetch: fetch2, prepareSendMessagesRequest, prepareReconnectToStreamRequest }) {
		this.api = api;
		this.credentials = credentials;
		this.headers = headers;
		this.body = body;
		this.fetch = fetch2;
		this.prepareSendMessagesRequest = prepareSendMessagesRequest;
		this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
	}
	async sendMessages({ abortSignal, ...options }) {
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await this.prepareSendMessagesRequest?.({
			api: this.api,
			id: options.chatId,
			messages: options.messages,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata,
			trigger: options.trigger,
			messageId: options.messageId
		});
		const api = preparedRequest?.api ?? this.api;
		const headers = preparedRequest?.headers !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const body = preparedRequest?.body !== void 0 ? preparedRequest.body : {
			...resolvedBody,
			...options.body,
			id: options.chatId,
			messages: options.messages,
			trigger: options.trigger,
			messageId: options.messageId
		};
		const credentials = preparedRequest?.credentials ?? resolvedCredentials;
		const response = await (this.fetch ?? globalThis.fetch)(api, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				...headers
			},
			body: JSON.stringify(body),
			credentials,
			signal: abortSignal
		});
		if (!response.ok) throw await createUIApiCallError({
			response,
			url: api,
			fallbackMessage: "Failed to fetch the chat response."
		});
		if (!response.body) throw new EmptyResponseBodyError({ message: "The response body is empty." });
		return this.processResponseStream(response.body);
	}
	async reconnectToStream(options) {
		const resolvedBody = await resolve(this.body);
		const resolvedHeaders = await resolve(this.headers);
		const resolvedCredentials = await resolve(this.credentials);
		const baseHeaders = {
			...normalizeHeaders(resolvedHeaders),
			...normalizeHeaders(options.headers)
		};
		const preparedRequest = await this.prepareReconnectToStreamRequest?.({
			api: this.api,
			id: options.chatId,
			body: {
				...resolvedBody,
				...options.body
			},
			headers: baseHeaders,
			credentials: resolvedCredentials,
			requestMetadata: options.metadata
		});
		const api = preparedRequest?.api ?? appendPathToUrl(this.api, `/${options.chatId}/stream`);
		const headers = preparedRequest?.headers !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
		const credentials = preparedRequest?.credentials ?? resolvedCredentials;
		const response = await (this.fetch ?? globalThis.fetch)(api, {
			method: "GET",
			headers,
			credentials,
			signal: options.abortSignal
		});
		if (response.status === 204) return null;
		if (!response.ok) throw await createUIApiCallError({
			response,
			url: api,
			fallbackMessage: "Failed to fetch the chat response."
		});
		if (!response.body) throw new EmptyResponseBodyError({ message: "The response body is empty." });
		return this.processResponseStream(response.body);
	}
};
var DefaultChatTransport = class extends HttpChatTransport {
	constructor(options = {}) {
		super(options);
	}
	processResponseStream(stream) {
		return parseJsonEventStream({
			stream,
			schema: uiMessageChunkSchema
		}).pipeThrough(new TransformStream({ async transform(chunk, controller) {
			if (!chunk.success) throw chunk.error;
			controller.enqueue(chunk.value);
		} }));
	}
};
var AbstractChat = class {
	constructor({ generateId: generateId5 = generateId, id = generateId5(), transport = new DefaultChatTransport(), messageMetadataSchema, dataPartSchemas, state, onError, onToolCall, onFinish, onData, sendAutomaticallyWhen }) {
		this.pendingMessagePreparations = /* @__PURE__ */ new Set();
		this.activeResponse = void 0;
		this.activeResumeRequest = void 0;
		this.jobExecutor = new SerialJobExecutor();
		/**
		* Appends or replaces a user message to the chat list. This triggers the API call to fetch
		* the assistant's response.
		*
		* If a messageId is provided, the message will be replaced.
		*/
		this.sendMessage = async (message, options) => {
			if (message == null) {
				let messageId = this.pendingApprovalMessageId;
				if (messageId == null) {
					messageId = this.lastMessage?.id;
					for (let i = this.state.messages.length - 1; i >= 0; i--) {
						const candidate = this.state.messages[i];
						if (candidate.role === "assistant" && candidate.parts.some((part) => isToolUIPart(part) && part.state === "approval-responded")) {
							messageId = candidate.id;
							break;
						}
					}
				}
				const pendingApprovalMessageIndex = messageId != null && messageId === this.pendingApprovalMessageId ? this.state.messages.findIndex((message2) => message2.id === messageId) : -1;
				await this.makeRequestForToolApproval({
					messageId,
					messageIndex: pendingApprovalMessageIndex,
					...options
				});
				return;
			}
			let uiMessage;
			if ("text" in message || "files" in message) {
				const abortController = new AbortController();
				this.pendingMessagePreparations.add(abortController);
				let fileParts;
				try {
					fileParts = Array.isArray(message.files) ? message.files : await convertFileListToFileUIParts(message.files);
				} finally {
					this.pendingMessagePreparations.delete(abortController);
				}
				if (abortController.signal.aborted) return;
				uiMessage = { parts: [...fileParts, ..."text" in message && message.text != null ? [{
					type: "text",
					text: message.text
				}] : []] };
			} else uiMessage = message;
			if (message.messageId != null) {
				const messageIndex = this.state.messages.findIndex((m) => m.id === message.messageId);
				if (messageIndex === -1) throw new InvalidArgumentError({
					parameter: "message.messageId",
					value: message.messageId,
					message: `message with id ${message.messageId} not found`
				});
				if (this.state.messages[messageIndex].role !== "user") throw new InvalidArgumentError({
					parameter: "message.messageId",
					value: message.messageId,
					message: `message with id ${message.messageId} is not a user message`
				});
				this.state.messages = this.state.messages.slice(0, messageIndex + 1);
				this.state.replaceMessage(messageIndex, {
					id: message.messageId,
					...uiMessage,
					role: uiMessage.role ?? "user",
					metadata: message.metadata
				});
			} else this.state.pushMessage({
				...uiMessage,
				id: uiMessage.id ?? this.generateId(),
				role: uiMessage.role ?? "user",
				metadata: message.metadata
			});
			await this.makeRequest({
				trigger: "submit-message",
				messageId: message.messageId,
				...options
			});
		};
		/**
		* Regenerate the assistant message with the provided message id.
		* If no message id is provided, the last assistant message will be regenerated.
		*/
		this.regenerate = async ({ messageId, ...options } = {}) => {
			const messageIndex = messageId == null ? this.state.messages.length - 1 : this.state.messages.findIndex((message) => message.id === messageId);
			if (messageIndex === -1) throw new InvalidArgumentError({
				parameter: "messageId",
				value: messageId,
				message: `message ${messageId} not found`
			});
			this.state.messages = this.state.messages.slice(0, this.messages[messageIndex].role === "assistant" ? messageIndex : messageIndex + 1);
			await this.makeRequest({
				trigger: "regenerate-message",
				messageId,
				...options
			});
		};
		/**
		* Attempt to resume an ongoing streaming response.
		*/
		this.resumeStream = async (options = {}) => {
			await this.makeRequest({
				trigger: "resume-stream",
				...options
			});
		};
		/**
		* Clear the error state and set the status to ready if the chat is in an error state.
		*/
		this.clearError = () => {
			if (this.status === "error") {
				this.state.error = void 0;
				this.setStatus({ status: "ready" });
			}
		};
		this.addToolApprovalResponse = async ({ id, approved, reason, options }) => this.jobExecutor.run(async () => {
			const messages = this.state.messages;
			const updatePart = (part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id ? {
				...part,
				state: "approval-responded",
				approval: {
					...part.approval,
					id,
					approved,
					reason
				}
			} : part;
			const messageIndex = messages.findIndex((message) => message.parts.some((part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id));
			if (messageIndex !== -1) {
				const message = messages[messageIndex];
				this.state.replaceMessage(messageIndex, {
					...message,
					parts: message.parts.map(updatePart)
				});
				this.pendingApprovalMessageId = message.id;
			}
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) this.shouldSendAutomatically().then((shouldSend) => {
				if (shouldSend) {
					const messageId = messageIndex === -1 ? this.lastMessage?.id : messages[messageIndex].id;
					this.makeRequestForToolApproval({
						messageId,
						messageIndex,
						...options
					});
				}
			});
		});
		this.addToolOutput = async ({ state = "output-available", toolCallId, output, errorText, options }) => this.jobExecutor.run(async () => {
			const messages = this.state.messages;
			const lastMessage = messages[messages.length - 1];
			const updatePart = (part) => isToolUIPart(part) && part.toolCallId === toolCallId ? {
				...part,
				state,
				output,
				errorText
			} : part;
			this.state.replaceMessage(messages.length - 1, {
				...lastMessage,
				parts: lastMessage.parts.map(updatePart)
			});
			if (this.activeResponse) this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
			if (this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen) this.shouldSendAutomatically().then((shouldSend) => {
				if (shouldSend) this.makeRequest({
					trigger: "submit-message",
					messageId: this.lastMessage?.id,
					...options
				});
			});
		});
		/** @deprecated Use addToolOutput */
		this.addToolResult = this.addToolOutput;
		/**
		* Abort the current request immediately, keep the generated tokens if any.
		*/
		this.stop = async () => {
			for (const controller of this.pendingMessagePreparations) controller.abort();
			this.activeResumeRequest?.abortController.abort();
			this.activeResponse?.abortController.abort();
		};
		this.id = id;
		this.transport = transport;
		this.generateId = generateId5;
		this.messageMetadataSchema = messageMetadataSchema;
		this.dataPartSchemas = dataPartSchemas;
		this.state = state;
		this.onError = onError;
		this.onToolCall = onToolCall;
		this.onFinish = onFinish;
		this.onData = onData;
		this.sendAutomaticallyWhen = sendAutomaticallyWhen;
	}
	/**
	* Hook status:
	*
	* - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
	* - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
	* - `ready`: The full response has been received and processed; a new user message can be submitted.
	* - `error`: An error occurred during the API request, preventing successful completion.
	*/
	get status() {
		return this.state.status;
	}
	setStatus({ status, error }) {
		if (this.status === status) return;
		this.state.status = status;
		this.state.error = error;
	}
	get error() {
		return this.state.error;
	}
	get messages() {
		return this.state.messages;
	}
	get lastMessage() {
		return this.state.messages[this.state.messages.length - 1];
	}
	set messages(messages) {
		this.state.messages = messages;
	}
	async shouldSendAutomatically() {
		if (!this.sendAutomaticallyWhen) return false;
		const result = this.sendAutomaticallyWhen({ messages: this.state.messages });
		if (result && typeof result === "object" && "then" in result) return await result;
		return result;
	}
	async makeRequestForToolApproval({ messageId, messageIndex, ...options }) {
		const consumesPendingApproval = messageId != null && messageId === this.pendingApprovalMessageId;
		if (consumesPendingApproval) this.pendingApprovalMessageId = void 0;
		await this.makeRequest({
			trigger: "submit-message",
			messageId,
			...options
		});
		if (consumesPendingApproval && this.status === "error" && this.pendingApprovalMessageId == null) this.pendingApprovalMessageId = this.state.messages[messageIndex]?.id ?? messageId;
	}
	async makeRequest({ trigger, metadata, headers, body, messageId }) {
		const abortController = new AbortController();
		const activeResumeRequest = trigger === "resume-stream" ? { abortController } : void 0;
		if (activeResumeRequest) {
			this.activeResumeRequest?.abortController.abort();
			this.activeResumeRequest = activeResumeRequest;
		}
		const isCurrentRequest = () => activeResumeRequest == null || this.activeResumeRequest === activeResumeRequest;
		const clearActiveResumeRequest = () => {
			if (this.activeResumeRequest === activeResumeRequest) this.activeResumeRequest = void 0;
		};
		let resumeStream;
		if (trigger === "resume-stream") try {
			const reconnect = await this.transport.reconnectToStream({
				chatId: this.id,
				abortSignal: abortController.signal,
				metadata,
				headers,
				body
			});
			if (abortController.signal.aborted || !isCurrentRequest()) {
				await reconnect?.cancel().catch(() => {});
				if (isCurrentRequest()) this.setStatus({ status: "ready" });
				clearActiveResumeRequest();
				return;
			}
			if (reconnect == null) {
				this.setStatus({ status: "ready" });
				clearActiveResumeRequest();
				return;
			}
			resumeStream = reconnect;
		} catch (err) {
			if (abortController.signal.aborted || err.name === "AbortError") {
				if (isCurrentRequest()) this.setStatus({ status: "ready" });
				clearActiveResumeRequest();
				return;
			}
			if (!isCurrentRequest()) return;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
			clearActiveResumeRequest();
			return;
		}
		this.setStatus({
			status: "submitted",
			error: void 0
		});
		const lastMessage = this.lastMessage;
		const responseMessageIndex = trigger === "submit-message" && messageId != null ? this.state.messages.findIndex((message) => message.id === messageId) : this.state.messages.length - 1;
		const responseMessage = responseMessageIndex === -1 ? lastMessage : this.state.messages[responseMessageIndex];
		const usesEarlierAssistantMessage = responseMessageIndex !== -1 && responseMessageIndex < this.state.messages.length - 1 && responseMessage?.role === "assistant";
		let isAbort = false;
		let isDisconnect = false;
		let isError2 = false;
		let activeResponse;
		try {
			const response = {
				state: createStreamingUIMessageState({
					lastMessage: trigger === "resume-stream" || trigger === "regenerate-message" ? void 0 : this.state.snapshot(responseMessage),
					messageId: this.generateId()
				}),
				abortController
			};
			activeResponse = response;
			response.abortController.signal.addEventListener("abort", () => {
				isAbort = true;
			});
			this.activeResponse = response;
			let stream;
			if (trigger === "resume-stream") stream = resumeStream;
			else stream = await this.transport.sendMessages({
				chatId: this.id,
				messages: this.state.messages,
				abortSignal: response.abortController.signal,
				metadata,
				headers,
				body,
				trigger,
				messageId
			});
			const runUpdateMessageJob = (job) => this.jobExecutor.run(() => {
				if (response.abortController.signal.aborted) return Promise.resolve();
				return job({
					state: response.state,
					write: ({ updateStatus = true } = {}) => {
						if (response.abortController.signal.aborted) return;
						if (updateStatus) this.setStatus({ status: "streaming" });
						if (usesEarlierAssistantMessage) this.state.replaceMessage(responseMessageIndex, response.state.message);
						else if (response.state.message.id === this.lastMessage?.id) this.state.replaceMessage(this.state.messages.length - 1, response.state.message);
						else this.state.pushMessage(response.state.message);
					}
				});
			});
			await consumeStream({
				stream: processUIMessageStream({
					stream,
					onToolCall: this.onToolCall,
					onData: this.onData,
					messageMetadataSchema: this.messageMetadataSchema,
					dataPartSchemas: this.dataPartSchemas,
					runUpdateMessageJob,
					onError: (error) => {
						throw error;
					}
				}),
				abortSignal: response.abortController.signal,
				onError: (error) => {
					throw error;
				}
			});
			if (isAbort) {
				if (isCurrentRequest()) this.setStatus({ status: "ready" });
				return null;
			}
			if (isCurrentRequest()) this.setStatus({ status: "ready" });
		} catch (err) {
			if (isAbort || err.name === "AbortError") {
				isAbort = true;
				if (isCurrentRequest()) this.setStatus({ status: "ready" });
				return null;
			}
			if (!isCurrentRequest()) return null;
			isError2 = true;
			if (err instanceof TypeError && (err.message.toLowerCase().includes("fetch") || err.message.toLowerCase().includes("network"))) isDisconnect = true;
			if (this.onError && err instanceof Error) this.onError(err);
			this.setStatus({
				status: "error",
				error: err
			});
		} finally {
			try {
				if (activeResponse) this.onFinish?.({
					message: activeResponse.state.message,
					messages: this.state.messages,
					isAbort,
					isDisconnect,
					isError: isError2,
					finishReason: activeResponse.state.finishReason
				});
			} finally {
				if (this.activeResponse === activeResponse) this.activeResponse = void 0;
				clearActiveResumeRequest();
			}
		}
		if (!isError2 && await this.shouldSendAutomatically()) await this.makeRequest({
			trigger: "submit-message",
			messageId: this.lastMessage?.id,
			metadata,
			headers,
			body
		});
	}
};
var DirectChatTransport = class {
	constructor({ agent, options, ...uiMessageStreamOptions }) {
		this.agent = agent;
		this.agentOptions = options;
		this.uiMessageStreamOptions = uiMessageStreamOptions;
	}
	async sendMessages({ messages, abortSignal }) {
		const validatedMessages = await validateUIMessagesForAgent({
			messages,
			tools: this.agent.tools
		});
		const modelMessages = await convertToModelMessages(validatedMessages, { tools: this.agent.tools });
		const result = await this.agent.stream({
			prompt: modelMessages,
			abortSignal,
			...this.agentOptions !== void 0 ? { options: this.agentOptions } : {}
		});
		return toUIMessageStream({
			...this.uiMessageStreamOptions,
			originalMessages: this.uiMessageStreamOptions.originalMessages ?? validatedMessages,
			stream: result.stream,
			tools: this.agent.tools
		});
	}
	/**
	* Direct transport does not support reconnection since there is no
	* persistent server-side stream to reconnect to.
	*
	* @returns Always returns `null`
	*/
	async reconnectToStream(_options) {
		return null;
	}
};
function lastAssistantMessageIsCompleteWithApprovalResponses({ messages }) {
	const message = messages[messages.length - 1];
	if (!message) return false;
	if (message.role !== "assistant") return false;
	const lastStepStartIndex = message.parts.reduce((lastIndex, part, index) => {
		return part.type === "step-start" ? index : lastIndex;
	}, -1);
	const lastStepToolInvocations = message.parts.slice(lastStepStartIndex + 1).filter(isToolUIPart);
	return lastStepToolInvocations.filter((part) => part.state === "approval-responded").length > 0 && lastStepToolInvocations.every((part) => part.state === "output-available" && part.preliminary !== true || part.state === "output-error" || part.state === "output-denied" || part.state === "approval-responded");
}
function lastAssistantMessageIsCompleteWithToolCalls({ messages }) {
	const message = messages[messages.length - 1];
	if (!message) return false;
	if (message.role !== "assistant") return false;
	const lastStepStartIndex = message.parts.reduce((lastIndex, part, index) => {
		return part.type === "step-start" ? index : lastIndex;
	}, -1);
	const lastStepToolInvocations = message.parts.slice(lastStepStartIndex + 1).filter(isToolUIPart).filter((part) => !part.providerExecuted);
	return lastStepToolInvocations.length > 0 && lastStepToolInvocations.every((part) => part.state === "output-available" && part.preliminary !== true || part.state === "output-error");
}
function transformTextToUiMessageStream({ stream }) {
	return stream.pipeThrough(new TransformStream({
		start(controller) {
			controller.enqueue({ type: "start" });
			controller.enqueue({ type: "start-step" });
			controller.enqueue({
				type: "text-start",
				id: "text-1"
			});
		},
		async transform(part, controller) {
			controller.enqueue({
				type: "text-delta",
				id: "text-1",
				delta: part
			});
		},
		async flush(controller) {
			controller.enqueue({
				type: "text-end",
				id: "text-1"
			});
			controller.enqueue({ type: "finish-step" });
			controller.enqueue({ type: "finish" });
		}
	}));
}
var TextStreamChatTransport = class extends HttpChatTransport {
	constructor(options = {}) {
		super(options);
	}
	processResponseStream(stream) {
		return transformTextToUiMessageStream({ stream: stream.pipeThrough(new TextDecoderStream()) });
	}
};
async function uploadFile({ api, data: dataArg, mediaType: mediaTypeArg, filename, abortSignal, headers, providerOptions }) {
	const data = dataArg instanceof Uint8Array || typeof dataArg === "string" ? {
		type: "data",
		data: dataArg
	} : dataArg;
	const mediaType = mediaTypeArg ?? (data.type === "text" ? "text/plain" : data.type === "stream" ? "application/octet-stream" : detectMediaType({ data: data.data }) ?? (isLikelyText(data.data) ? "text/plain" : "application/octet-stream"));
	let result;
	try {
		result = await ("uploadFile" in api ? api : typeof api.files === "function" ? api.files() : (() => {
			throw new Error("The provider does not support file uploads. Make sure it exposes a files() method.");
		})()).uploadFile({
			data,
			mediaType,
			filename,
			abortSignal,
			headers,
			providerOptions
		});
	} catch (error) {
		if (data.type === "stream") await data.stream.cancel(error).catch(() => {});
		throw error;
	}
	return new DefaultUploadFileResult({
		providerReference: result.providerReference,
		mediaType: result.mediaType,
		filename: result.filename,
		byteSize: result.byteSize,
		createdAt: result.createdAt,
		expiresAt: result.expiresAt,
		providerMetadata: result.providerMetadata,
		warnings: result.warnings
	});
}
var DefaultUploadFileResult = class {
	constructor(options) {
		this.providerReference = options.providerReference;
		this.mediaType = options.mediaType;
		this.filename = options.filename;
		this.byteSize = options.byteSize;
		this.createdAt = options.createdAt;
		this.expiresAt = options.expiresAt;
		this.providerMetadata = options.providerMetadata;
		this.warnings = options.warnings;
	}
};
function isLikelyText(data) {
	const CHECK_LENGTH = 512;
	const BASE64_CHECK_LENGTH = Math.ceil(172) * 4;
	const bytes = typeof data === "string" ? convertBase64ToUint8Array(data.substring(0, Math.min(data.length, BASE64_CHECK_LENGTH))) : data;
	const checkLength = Math.min(bytes.length, CHECK_LENGTH);
	if (checkLength === 0) return false;
	for (let i = 0; i < checkLength; i++) {
		const byte = bytes[i];
		if (byte === 0 || byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) return false;
	}
	return true;
}
async function uploadSkill({ api, files, displayTitle, providerOptions }) {
	const skillsApi = "uploadSkill" in api ? api : typeof api.skills === "function" ? api.skills() : (() => {
		throw new Error("The provider does not support skills. Make sure it exposes a skills() method.");
	})();
	const normalizedFiles = files.map((file) => ({
		...file,
		data: file.data instanceof Uint8Array || typeof file.data === "string" ? {
			type: "data",
			data: file.data
		} : file.data
	}));
	return await skillsApi.uploadSkill({
		files: normalizedFiles,
		displayTitle,
		providerOptions
	});
}
//#endregion
export { createUIMessageStreamResponse as $, AISDKError as $n, modelMessageSchema as $t, TextStreamChatTransport as A, userModelMessageSchema as An, getStepTimeoutMs as At, callCompletionApi as B, createIdGenerator as Bn, isDynamicToolUIPart as Bt, NoSuchToolError as C, toUIMessageStream as Cn, generateText as Ct, RetryError as D, uiMessageChunkSchema as Dn, getFirstChunkTimeoutMs as Dt, NoVideoGeneratedError as E, transcribe as En, getChunkTimeoutMs as Et, UIMessageStreamError as F, wrapProvider as Fn, getTotalTimeoutMs as Ft, convertToModelMessages as G, normalizeHeaders as Gn, isStaticToolUIPart as Gt, consumeStream as H, generateId as Hn, isLoopFinished as Ht, UI_MESSAGE_STREAM_HEADERS as I, createGateway as In, hasToolCall as It, createAgentUIStreamResponse as J, safeValidateTypes as Jn, isToolOutputErrorUIPart as Jt, cosineSimilarity as K, parseJsonEventStream as Kn, isStepCount as Kt, UnsupportedModelVersionError as L, gateway as Ln, isCustomContentUIPart as Lt, ToolCallRepairError as M, wrapEmbeddingModel as Mn, getToolName as Mt, ToolChoiceViolationError as N, wrapImageModel as Nn, getToolOrDynamicToolName as Nt, SerialJobExecutor as O, uploadFile as On, getRealtimeToolDefinitions as Ot, ToolLoopAgent as P, wrapLanguageModel as Pn, getToolTimeoutMs as Pt, createUIMessageStream as Q, zodSchema as Qn, listBatches as Qt, addToolInputExamplesMiddleware as R, DownloadError as Rn, isDataUIPart as Rt, NoSuchProviderError as S, toUIMessageChunk as Sn, generateSpeech as St, NoTranslationGeneratedError as T, toolSearch as Tn, getBatchStatus as Tt, convertDataContentToBase64String as U, isAbortError as Un, isReasoningFileUIPart as Ut, cancelBatch as V, dynamicTool as Vn, isFileUIPart as Vt, convertFileListToFileUIParts as W, jsonSchema as Wn, isReasoningUIPart as Wt, createProviderRegistry as X, tool as Xn, lastAssistantMessageIsCompleteWithApprovalResponses as Xt, createDownload as Y, secureJsonParse as Yn, isToolUIPart as Yt, createTextStreamResponse as Z, toolCaller as Zn, lastAssistantMessageIsCompleteWithToolCalls as Zt, MissingToolResultsError as _, streamText as _n, extractReasoningMiddleware as _t, DefaultGeneratedFile as a, pruneMessages as an, JSONParseError as ar, detectToolDrift as at, NoOutputGeneratedError as b, systemModelMessageSchema as bn, generateImage as bt, InvalidArgumentError as c, rerank as cn, NoContentGeneratedError as cr, encodeRealtimeAudio as ct, InvalidStreamPartError as d, simulateReadableStream as dn, TooManyEmbeddingValuesForCallError as dr, experimental_generateSpeech as dt, output_exports as en, APICallError as er, customProvider as et, InvalidToolApprovalError as f, simulateStreamingMiddleware as fn, TypeValidationError as fr, experimental_generateVideo as ft, MessageConversionError as g, streamObject as gn, extractJsonMiddleware as gt, JsonToSseTransformStream as h, streamLanguageModelCall as hn, experimental_transcribe as ht, DefaultChatTransport as i, pipeUIMessageStreamToResponse as in, InvalidResponseDataError as ir, defaultSettingsMiddleware as it, ToolCallNotFoundForApprovalError as j, validateUIMessages as jn, getTextFromDataUrl as jt, StreamProviderError as k, uploadSkill as kn, getStaticToolName as kt, InvalidDataContentError as l, resampleAudio as ln, NoSuchModelError as lr, evaluate as lt, InvalidToolInputError as m, startBatch as mn, isJSONObject as mr, experimental_startVideo as mt, AbstractChat as n, pipeAgentUIStreamToResponse as nn, EvaluationUnsupportedQuestionTypeError as nr, defaultEmbeddingSettingsMiddleware as nt, DirectChatTransport as o, readUIMessageStream as on, LoadAPIKeyError as or, embed as ot, InvalidToolApprovalSignatureError as p, smoothStream as pn, UnsupportedFunctionalityError as pr, experimental_getVideoStatus as pt, createAgentUIStream as q, resolve as qn, isTextUIPart as qt, AbstractRealtimeSession as r, pipeTextStreamToResponse as rn, InvalidPromptError as rr, defaultInstructionsMiddleware as rt, HttpChatTransport as s, registerTelemetry as sn, LoadSettingError as sr, embedMany as st, AI_SDK_TELEMETRY_TRACING_CHANNEL as t, parsePartialJson as tn, EmptyResponseBodyError as tr, decodeRealtimeAudio as tt, InvalidMessageRoleError as u, safeValidateUIMessages as un, NoSuchProviderReferenceError as ur, experimental_createProviderRegistry as ut, NoImageGeneratedError as v, streamTranscribe as vn, filterActiveTools as vt, NoTranscriptGeneratedError as w, toolModelMessageSchema as wn, getBatchResults as wt, NoSpeechGeneratedError as x, toTextStream as xn, generateObject as xt, NoObjectGeneratedError as y, streamTranslate as yn, fingerprintTools as yt, assistantModelMessageSchema as z, asSchema as zn, isDeepEqualData as zt };
