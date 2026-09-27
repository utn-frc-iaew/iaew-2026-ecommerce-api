import { i as __toESM, t as __commonJSMin } from "./rolldown-runtime-B-lAHAz2.js";
import { B as callCompletionApi, Gn as normalizeHeaders, Jn as safeValidateTypes, Un as isAbortError, Yn as secureJsonParse, i as DefaultChatTransport, mr as isJSONObject, n as AbstractChat, qn as resolve, r as AbstractRealtimeSession, tn as parsePartialJson, zn as asSchema, zt as isDeepEqualData } from "./dist-CsQfHOLJ.js";
import { t as require_react } from "./react.js";
import { t as require_shim } from "./shim-DWZ5dLMv.js";
import { t as require_jsx_runtime } from "./react_jsx-runtime.js";
//#region node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
//#endregion
//#region node_modules/swr/dist/config-context-ext53wcz.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var noop = () => {};
var OBJECT = Object;
var isUndefined = (v) => v === void 0;
var isFunction = (v) => typeof v == "function";
var mergeObjects = (a, b) => ({
	...a,
	...b
});
var isPromiseLike = (x) => isFunction(x.then);
var EMPTY_CACHE = {};
var INITIAL_CACHE = {};
var STR_UNDEFINED = "undefined";
var isWindowDefined = typeof window != STR_UNDEFINED;
var isDocumentDefined = typeof document != STR_UNDEFINED;
var isLegacyDeno = isWindowDefined && "Deno" in window;
var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
var createCacheHelper = (cache, key) => {
	const state = SWRGlobalState.get(cache);
	return [
		() => !isUndefined(key) && cache.get(key) || EMPTY_CACHE,
		(info) => {
			if (!isUndefined(key)) {
				const prev = cache.get(key);
				if (!(key in INITIAL_CACHE)) INITIAL_CACHE[key] = prev;
				state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
			}
		},
		state[6],
		() => {
			if (!isUndefined(key)) {
				if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
			}
			return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
		}
	];
};
/**
* Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
* it's not reliable to detect if the browser is currently online or offline
* based on `navigator.onLine`.
* As a workaround, we always assume it's online on the first load, and change
* the status upon `online` or `offline` events.
*/ var online = true;
var isOnline = () => online;
var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [noop, noop];
var isVisible = () => {
	const visibilityState = isDocumentDefined && document.visibilityState;
	return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = (callback) => {
	if (isDocumentDefined) document.addEventListener("visibilitychange", callback);
	onWindowEvent("focus", callback);
	return () => {
		if (isDocumentDefined) document.removeEventListener("visibilitychange", callback);
		offWindowEvent("focus", callback);
	};
};
var initReconnect = (callback) => {
	const onOnline = () => {
		online = true;
		callback();
	};
	const onOffline = () => {
		online = false;
	};
	onWindowEvent("online", onOnline);
	onWindowEvent("offline", onOffline);
	return () => {
		offWindowEvent("online", onOnline);
		offWindowEvent("offline", onOffline);
	};
};
var preset = {
	isOnline,
	isVisible
};
var defaultConfigOptions = {
	initFocus,
	initReconnect
};
var IS_REACT_LEGACY = !import_react.useId;
var IS_SERVER = !isWindowDefined || isLegacyDeno;
var rAF = (f) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
var useIsomorphicLayoutEffect$1 = IS_SERVER ? import_react.useEffect : import_react.useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var table = /* @__PURE__ */ new WeakMap();
var getTypeName = (value) => OBJECT.prototype.toString.call(value);
var isObjectTypeName = (typeName, type) => typeName === `[object ${type}]`;
var counter = 0;
var stableHash = (arg) => {
	const type = typeof arg;
	const typeName = getTypeName(arg);
	const isDate = isObjectTypeName(typeName, "Date");
	const isRegex = isObjectTypeName(typeName, "RegExp");
	const isPlainObject = isObjectTypeName(typeName, "Object");
	let result;
	let index;
	if (OBJECT(arg) === arg && !isDate && !isRegex) {
		result = table.get(arg);
		if (result) return result;
		result = ++counter + "~";
		table.set(arg, result);
		if (Array.isArray(arg)) {
			result = "@";
			for (index = 0; index < arg.length; index++) result += stableHash(arg[index]) + ",";
			table.set(arg, result);
		}
		if (isPlainObject) {
			result = "#";
			const keys = OBJECT.keys(arg).sort();
			while (!isUndefined(index = keys.pop())) if (!isUndefined(arg[index])) result += index + ":" + stableHash(arg[index]) + ",";
			table.set(arg, result);
		}
	} else result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
	return result;
};
var serialize = (key) => {
	if (isFunction(key)) try {
		key = key();
	} catch (err) {
		key = "";
	}
	const args = key;
	key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
	return [key, args];
};
var __timestamp = 0;
var getTimestamp = () => ++__timestamp;
async function internalMutate(...args) {
	const [cache, _key, _data, _opts] = args;
	const options = mergeObjects({
		populateCache: true,
		throwOnError: true
	}, typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {});
	let populateCache = options.populateCache;
	const rollbackOnErrorOption = options.rollbackOnError;
	let optimisticData = options.optimisticData;
	const rollbackOnError = (error) => {
		return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
	};
	const throwOnError = options.throwOnError;
	if (isFunction(_key)) {
		const keyFilter = _key;
		const matchedKeys = [];
		const it = cache.keys();
		for (const key of it) if (!/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) matchedKeys.push(key);
		return Promise.all(matchedKeys.map(mutateByKey));
	}
	return mutateByKey(_key);
	async function mutateByKey(_k) {
		const [key] = serialize(_k);
		if (!key) return;
		const [get, set] = createCacheHelper(cache, key);
		const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
		const startRevalidate = () => {
			const revalidators = EVENT_REVALIDATORS[key];
			if (isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false) {
				delete FETCH[key];
				delete PRELOAD[key];
				if (revalidators && revalidators[0]) return revalidators[0](2).then(() => get().data);
			}
			return get().data;
		};
		if (args.length < 3) return startRevalidate();
		let data = _data;
		let error;
		let isError = false;
		const beforeMutationTs = getTimestamp();
		MUTATION[key] = [beforeMutationTs, 0];
		const hasOptimisticData = !isUndefined(optimisticData);
		const state = get();
		const displayedData = state.data;
		const currentData = state._c;
		const committedData = isUndefined(currentData) ? displayedData : currentData;
		if (hasOptimisticData) {
			optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
			set({
				data: optimisticData,
				_c: committedData
			});
		}
		if (isFunction(data)) try {
			data = data(committedData);
		} catch (err) {
			error = err;
			isError = true;
		}
		if (data && isPromiseLike(data)) {
			data = await data.catch((err) => {
				error = err;
				isError = true;
			});
			if (beforeMutationTs !== MUTATION[key][0]) {
				if (isError) throw error;
				return data;
			} else if (isError && hasOptimisticData && rollbackOnError(error)) {
				populateCache = true;
				set({
					data: committedData,
					_c: void 0
				});
			}
		}
		if (populateCache) {
			if (!isError) {
				if (isFunction(populateCache)) set({
					data: populateCache(data, committedData),
					error: void 0,
					_c: void 0
				});
				else set({
					data,
					error: void 0,
					_c: void 0
				});
			}
		}
		MUTATION[key][1] = getTimestamp();
		Promise.resolve(startRevalidate()).then(() => {
			set({ _c: void 0 });
		});
		if (isError) {
			if (throwOnError) throw error;
			return;
		}
		return data;
	}
}
var revalidateAllKeys = (revalidators, type) => {
	for (const key in revalidators) if (revalidators[key][0]) revalidators[key][0](type);
};
var initCache = (provider, options) => {
	if (!SWRGlobalState.has(provider)) {
		const opts = mergeObjects(defaultConfigOptions, options);
		const EVENT_REVALIDATORS = Object.create(null);
		const mutate = internalMutate.bind(void 0, provider);
		let unmount = noop;
		const subscriptions = Object.create(null);
		const subscribe = (key, callback) => {
			const subs = subscriptions[key] || [];
			subscriptions[key] = subs;
			subs.push(callback);
			return () => {
				const index = subs.indexOf(callback);
				if (index >= 0) {
					subs[index] = subs[subs.length - 1];
					subs.pop();
				}
			};
		};
		const setter = (key, value, prev) => {
			provider.set(key, value);
			const subs = subscriptions[key];
			if (subs) for (const fn of subs) fn(value, prev);
		};
		const unload = (unloadOptions) => {
			const state = SWRGlobalState.get(provider);
			const [, MUTATION, FETCH, PRELOAD] = state;
			const ts = getTimestamp();
			state[8]++;
			for (const key in FETCH) delete FETCH[key];
			for (const key in PRELOAD) delete PRELOAD[key];
			for (const key in MUTATION) MUTATION[key] = [ts, ts];
			const emptyState = {};
			for (const key of [...provider.keys()]) {
				const prev = provider.get(key);
				provider.delete(key);
				const subs = subscriptions[key];
				if (subs) for (const fn of subs) fn(emptyState, prev);
			}
			const revalidate = !unloadOptions || unloadOptions.revalidate !== false;
			for (const key in EVENT_REVALIDATORS) {
				const revalidators = EVENT_REVALIDATORS[key];
				for (let i = 0; i < revalidators.length; i++) revalidators[i](4, { revalidate: revalidate && !i });
			}
		};
		const initProvider = () => {
			if (!SWRGlobalState.has(provider)) {
				SWRGlobalState.set(provider, [
					EVENT_REVALIDATORS,
					Object.create(null),
					Object.create(null),
					Object.create(null),
					mutate,
					setter,
					subscribe,
					unload,
					0
				]);
				if (!IS_SERVER) {
					const releaseFocus = opts.initFocus(setTimeout.bind(void 0, revalidateAllKeys.bind(void 0, EVENT_REVALIDATORS, 0)));
					const releaseReconnect = opts.initReconnect(setTimeout.bind(void 0, revalidateAllKeys.bind(void 0, EVENT_REVALIDATORS, 1)));
					unmount = () => {
						releaseFocus && releaseFocus();
						releaseReconnect && releaseReconnect();
						SWRGlobalState.delete(provider);
					};
				}
			}
		};
		initProvider();
		return [
			provider,
			mutate,
			initProvider,
			unmount,
			unload
		];
	}
	const state = SWRGlobalState.get(provider);
	return [
		provider,
		state[4],
		void 0,
		void 0,
		state[7]
	];
};
var onErrorRetry = (_, __, config, revalidate, opts) => {
	const maxRetryCount = config.errorRetryCount;
	const currentRetryCount = opts.retryCount;
	const timeout = ~~((Math.random() + .5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
	if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) return;
	setTimeout(revalidate, timeout, opts);
};
var compare = dequal;
var [cache, mutate, , , unload] = initCache(/* @__PURE__ */ new Map());
var defaultConfig = mergeObjects({
	onLoadingSlow: noop,
	onSuccess: noop,
	onError: noop,
	onErrorRetry,
	onDiscarded: noop,
	revalidateOnFocus: true,
	revalidateOnReconnect: true,
	revalidateIfStale: true,
	shouldRetryOnError: true,
	errorRetryInterval: slowConnection ? 1e4 : 5e3,
	focusThrottleInterval: 5e3,
	dedupingInterval: 2e3,
	loadingTimeout: slowConnection ? 5e3 : 3e3,
	compare,
	isPaused: () => false,
	cache,
	mutate,
	unload,
	fallback: {}
}, preset);
var mergeConfigs = (a, b) => {
	const v = mergeObjects(a, b);
	if (b) {
		const { use: u1, fallback: f1, cacheData: c1 } = a;
		const { use: u2, fallback: f2, cacheData: c2 } = b;
		if (u1 && u2) v.use = u1.concat(u2);
		if (f1 && f2) v.fallback = mergeObjects(f1, f2);
		if (c1 && c2) v.cacheData = mergeObjects(c1, c2);
	}
	return v;
};
var SWRConfigContext = (0, import_react.createContext)({});
var SWRConfig$1 = (props) => {
	const { value } = props;
	const parentConfig = (0, import_react.useContext)(SWRConfigContext);
	const isFunctionalConfig = isFunction(value);
	const config = (0, import_react.useMemo)(() => isFunctionalConfig ? value(parentConfig) : value, [
		isFunctionalConfig,
		parentConfig,
		value
	]);
	const extendedConfig = (0, import_react.useMemo)(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
		isFunctionalConfig,
		parentConfig,
		config
	]);
	const provider = config && config.provider;
	const cacheContextRef = (0, import_react.useRef)(void 0);
	if (provider && !cacheContextRef.current) cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
	const cacheContext = cacheContextRef.current;
	if (cacheContext) {
		extendedConfig.cache = cacheContext[0];
		extendedConfig.mutate = cacheContext[1];
		extendedConfig.unload = cacheContext[4];
	}
	useIsomorphicLayoutEffect$1(() => {
		if (cacheContext) {
			cacheContext[2] && cacheContext[2]();
			return cacheContext[3];
		}
	}, []);
	return (0, import_react.createElement)(SWRConfigContext.Provider, mergeObjects(props, { value: extendedConfig }));
};
//#endregion
//#region node_modules/swr/dist/_internal/index.mjs
var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
var use$1 = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
var setupDevTools = () => {
	if (enableDevtools) window.__SWR_DEVTOOLS_REACT__ = import_react.default;
};
var normalize = (args) => {
	return isFunction(args[1]) ? [
		args[0],
		args[1],
		args[2] || {}
	] : [
		args[0],
		null,
		(args[1] === null ? args[2] : args[1]) || {}
	];
};
var useSWRConfig = () => {
	const parentConfig = (0, import_react.useContext)(SWRConfigContext);
	return (0, import_react.useMemo)(() => mergeObjects(defaultConfig, parentConfig), [parentConfig]);
};
var middleware = (useSWRNext) => (key_, fetcher_, config) => {
	return useSWRNext(key_, fetcher_ && ((...args) => {
		const [key] = serialize(key_);
		const [, , , PRELOAD] = SWRGlobalState.get(cache);
		if (key.startsWith("$inf$")) return fetcher_(...args);
		const req = PRELOAD[key];
		if (isUndefined(req)) return fetcher_(...args);
		delete PRELOAD[key];
		return req;
	}), config);
};
var BUILT_IN_MIDDLEWARE = use$1.concat(middleware);
var withArgs = (hook) => {
	return function useSWRArgs(...args) {
		const fallbackConfig = useSWRConfig();
		const [key, fn, _config] = normalize(args);
		const config = mergeConfigs(fallbackConfig, _config);
		let next = hook;
		const { use } = config;
		const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
		for (let i = middleware.length; i--;) next = middleware[i](next);
		return next(key, fn || config.fetcher || null, config);
	};
};
var subscribeCallback = (key, callbacks, callback) => {
	const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
	keyedRevalidators.push(callback);
	return () => {
		const index = keyedRevalidators.indexOf(callback);
		if (index >= 0) {
			keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
			keyedRevalidators.pop();
		}
	};
};
setupDevTools();
//#endregion
//#region node_modules/swr/dist/use-swr-emll9s78.mjs
var import_shim = require_shim();
var use = import_react.default.use || ((thenable) => {
	switch (thenable.status) {
		case "pending": throw thenable;
		case "fulfilled": return thenable.value;
		case "rejected": throw thenable.reason;
		default:
			thenable.status = "pending";
			thenable.then((v) => {
				thenable.status = "fulfilled";
				thenable.value = v;
			}, (e) => {
				thenable.status = "rejected";
				thenable.reason = e;
			});
			throw thenable;
	}
});
var WITH_DEDUPE = { dedupe: true };
var isCacheDataConsumed = (consumedCacheData, cacheData, key) => {
	var _consumedCacheData_get;
	return cacheData ? ((_consumedCacheData_get = consumedCacheData.get(cacheData)) == null ? void 0 : _consumedCacheData_get.has(key)) === true : false;
};
var markCacheDataConsumed = (consumedCacheData, cacheData, key) => {
	if (!cacheData) return;
	let consumedKeys = consumedCacheData.get(cacheData);
	if (!consumedKeys) {
		consumedKeys = /* @__PURE__ */ new Set();
		consumedCacheData.set(cacheData, consumedKeys);
	}
	consumedKeys.add(key);
};
var commitCacheData = ({ value, getCacheData, canCommit, setCache }) => {
	const commit = (state) => {
		if (canCommit() && isUndefined(getCacheData())) setCache(state);
	};
	Promise.resolve(value).then((data) => {
		commit({
			data,
			error: void 0
		});
	}, (error) => {
		commit({ error });
	});
};
var resolvedUndef = Promise.resolve(void 0);
resolvedUndef.status = "fulfilled";
resolvedUndef.value = void 0;
var sub = () => noop;
/**
* The core implementation of the useSWR hook.
*
* This is the main handler function that implements all SWR functionality including
* data fetching, caching, revalidation, error handling, and state management.
* It manages the complete lifecycle of SWR requests from initialization through
* cleanup.
*
* Key responsibilities:
* - Key serialization and normalization
* - Cache state management and synchronization
* - Automatic and manual revalidation
* - Error handling and retry logic
* - Suspense integration
* - Loading state management
* - Effect cleanup and memory management
*
* @template Data - The type of data returned by the fetcher
* @template Error - The type of error that can be thrown
*
* @param _key - The SWR key (string, array, object, function, or falsy)
* @param fetcher - The fetcher function to retrieve data, or null to disable fetching
* @param config - Complete SWR configuration object with both public and internal options
*
* @returns SWRResponse object containing data, error, mutate function, and loading states
*
* @internal This is the internal implementation. Use `useSWR` instead.
*/ var useSWRHandler = (_key, fetcher, config) => {
	const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData, strictServerPrefetchWarning } = config;
	const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
	const [key, fnArg] = serialize(_key);
	const initialMountedRef = (0, import_react.useRef)(false);
	const unmountedRef = (0, import_react.useRef)(false);
	const keyRef = (0, import_react.useRef)(key);
	const fetcherRef = (0, import_react.useRef)(fetcher);
	const configRef = (0, import_react.useRef)(config);
	const getConfig = () => configRef.current;
	const isActive = () => getConfig().isVisible() && getConfig().isOnline();
	const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache, key);
	const stateDependencies = (0, import_react.useRef)({}).current;
	const fallback = isUndefined(fallbackData) ? isUndefined(config.fallback) ? void 0 : config.fallback[key] : fallbackData;
	const serverCacheData = config.cacheData;
	const configCacheData = !key ? void 0 : serverCacheData == null ? void 0 : serverCacheData[key];
	const req = key ? PRELOAD[key] : void 0;
	const hasCacheData = isUndefined(req) && !isUndefined(configCacheData);
	const preloadedData = hasCacheData ? configCacheData : req;
	const isEqual = (prev, current) => {
		for (const _ in stateDependencies) {
			const t = _;
			if (t === "data") {
				if (!compare(prev[t], current[t])) {
					if (!isUndefined(prev[t])) return false;
					if (!compare(returnedData, current[t])) return false;
				}
			} else if (current[t] !== prev[t]) return false;
		}
		return true;
	};
	const isInitialMount = !initialMountedRef.current;
	const getSnapshot = (0, import_react.useMemo)(() => {
		const cachedData = getCache();
		const initialData = getInitialCache();
		const getSelectedCache = (state) => {
			const snapshot = mergeObjects(state);
			delete snapshot._k;
			if (!(() => {
				if (!key) return false;
				if (!fetcher) return false;
				if (getConfig().isPaused()) return false;
				if (isInitialMount && !isUndefined(revalidateOnMount)) return revalidateOnMount;
				const data = !isUndefined(fallback) ? fallback : snapshot.data;
				if (suspense && hasCacheData && isUndefined(data)) return false;
				if (suspense) return isUndefined(data) || revalidateIfStale;
				return isUndefined(data) || revalidateIfStale;
			})()) return snapshot;
			return {
				isValidating: true,
				isLoading: true,
				...snapshot
			};
		};
		const clientSnapshot = getSelectedCache(cachedData);
		const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
		let memorizedSnapshot = clientSnapshot;
		return [() => {
			const newSnapshot = getSelectedCache(getCache());
			if (isEqual(newSnapshot, memorizedSnapshot)) {
				memorizedSnapshot.data = newSnapshot.data;
				memorizedSnapshot.isLoading = newSnapshot.isLoading;
				memorizedSnapshot.isValidating = newSnapshot.isValidating;
				memorizedSnapshot.error = newSnapshot.error;
				return memorizedSnapshot;
			} else {
				memorizedSnapshot = newSnapshot;
				return newSnapshot;
			}
		}, () => serverSnapshot];
	}, [cache, key]);
	const cached = (0, import_shim.useSyncExternalStore)((0, import_react.useCallback)((callback) => subscribeCache(key, (current, prev) => {
		if (!isEqual(prev, current)) callback();
	}), [cache, key]), getSnapshot[0], getSnapshot[1]);
	const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
	const cachedData = cached.data;
	let data = isUndefined(cachedData) ? fallback && isPromiseLike(fallback) ? use(fallback) : fallback : cachedData;
	const error = cached.error;
	const laggyDataRef = (0, import_react.useRef)(data);
	const consumedCacheDataRef = (0, import_react.useRef)(void 0);
	let consumedCacheData = consumedCacheDataRef.current;
	if (!consumedCacheData) {
		consumedCacheData = /* @__PURE__ */ new WeakMap();
		consumedCacheDataRef.current = consumedCacheData;
	}
	const preloadCacheRef = (0, import_react.useRef)(null);
	let returnedData = keepPreviousData ? isUndefined(cachedData) ? isUndefined(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
	const hasKeyButNoData = key && isUndefined(data);
	const hydrationRef = (0, import_react.useRef)(null);
	!IS_SERVER && (0, import_shim.useSyncExternalStore)(sub, () => {
		hydrationRef.current = false;
		return hydrationRef;
	}, () => {
		hydrationRef.current = true;
		return hydrationRef;
	});
	const isHydration = hydrationRef.current;
	if (strictServerPrefetchWarning && isHydration && !suspense && hasKeyButNoData) console.warn(`Missing pre-initiated data for serialized key "${key}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
	const shouldDoInitialRevalidation = (() => {
		if (!key || !fetcher) return false;
		if (getConfig().isPaused()) return false;
		if (hasRevalidator && !isUndefined(error)) return false;
		if (isInitialMount && !isUndefined(revalidateOnMount)) return revalidateOnMount;
		if (suspense && hasCacheData && hasKeyButNoData) return false;
		if (suspense) return isUndefined(data) ? false : revalidateIfStale;
		return isUndefined(data) || revalidateIfStale;
	})();
	const defaultValidatingState = isInitialMount && shouldDoInitialRevalidation;
	const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
	const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
	const revalidate = (0, import_react.useCallback)(async (revalidateOpts) => {
		const currentFetcher = fetcherRef.current;
		if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) return false;
		let newData;
		let startAt;
		let loading = true;
		const opts = revalidateOpts || {};
		const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
		const shouldUseRSCPreload = hasCacheData && !isCacheDataConsumed(consumedCacheData, serverCacheData, key) && !isUndefined(preloadedData) && isUndefined(getCache().data);
		const callbackSafeguard = () => {
			if (IS_REACT_LEGACY) return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
			return key === keyRef.current;
		};
		const finalState = {
			isValidating: false,
			isLoading: false
		};
		const finishRequestAndUpdateState = () => {
			setCache(finalState);
		};
		const cleanupState = () => {
			const requestInfo = FETCH[key];
			if (requestInfo && requestInfo[1] === startAt) delete FETCH[key];
		};
		const initialState = { isValidating: true };
		if (isUndefined(getCache().data)) initialState.isLoading = true;
		try {
			if (shouldStartNewRequest) {
				setCache(initialState);
				if (config.loadingTimeout && isUndefined(getCache().data)) setTimeout(() => {
					if (loading && callbackSafeguard()) getConfig().onLoadingSlow(key, config);
				}, config.loadingTimeout);
				if (shouldUseRSCPreload) markCacheDataConsumed(consumedCacheData, serverCacheData, key);
				FETCH[key] = [shouldUseRSCPreload ? preloadedData : currentFetcher(fnArg), getTimestamp()];
				if (shouldUseRSCPreload && PRELOAD[key]) delete PRELOAD[key];
			}
			[newData, startAt] = FETCH[key];
			newData = await newData;
			if (shouldStartNewRequest) setTimeout(cleanupState, config.dedupingInterval);
			if (!FETCH[key] || FETCH[key][1] !== startAt) {
				if (shouldStartNewRequest) {
					if (callbackSafeguard()) getConfig().onDiscarded(key);
				}
				return false;
			}
			finalState.error = void 0;
			const mutationInfo = MUTATION[key];
			if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
				finishRequestAndUpdateState();
				if (shouldStartNewRequest) {
					if (callbackSafeguard()) getConfig().onDiscarded(key);
				}
				return false;
			}
			const cacheData = getCache().data;
			finalState.data = compare(cacheData, newData) ? cacheData : newData;
			if (shouldStartNewRequest) {
				if (callbackSafeguard()) getConfig().onSuccess(newData, key, config);
			}
		} catch (err) {
			cleanupState();
			const currentConfig = getConfig();
			const { shouldRetryOnError } = currentConfig;
			if (!currentConfig.isPaused()) {
				finalState.error = err;
				if (shouldStartNewRequest && callbackSafeguard()) {
					currentConfig.onError(err, key, currentConfig);
					if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
						if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
							const revalidators = EVENT_REVALIDATORS[key];
							if (revalidators && revalidators[0]) revalidators[0](3, _opts);
						}, {
							retryCount: (opts.retryCount || 0) + 1,
							dedupe: true
						});
					}
				}
			}
		}
		loading = false;
		finishRequestAndUpdateState();
		return true;
	}, [key, cache]);
	const boundMutate = (0, import_react.useCallback)((...args) => {
		return internalMutate(cache, keyRef.current, ...args);
	}, []);
	useIsomorphicLayoutEffect$1(() => {
		const preloaded = preloadCacheRef.current;
		if (!preloaded) return;
		preloadCacheRef.current = null;
		markCacheDataConsumed(consumedCacheData, preloaded.cacheData, preloaded.key);
		if (isUndefined(getCache().data)) setCache({
			data: preloaded.data,
			error: void 0,
			_k: preloaded._k
		});
		if (PRELOAD[preloaded.key]) delete PRELOAD[preloaded.key];
	});
	useIsomorphicLayoutEffect$1(() => {
		fetcherRef.current = fetcher;
		configRef.current = config;
		if (!isUndefined(cachedData)) laggyDataRef.current = cachedData;
	});
	useIsomorphicLayoutEffect$1(() => {
		if (fetcher || !hasCacheData || isUndefined(preloadedData) || isCacheDataConsumed(consumedCacheData, serverCacheData, key) || !isUndefined(getCache().data)) return;
		markCacheDataConsumed(consumedCacheData, serverCacheData, key);
		const mutation = MUTATION[key];
		commitCacheData({
			value: preloadedData,
			getCacheData: () => getCache().data,
			canCommit: () => !unmountedRef.current && key === keyRef.current && MUTATION[key] === mutation,
			setCache: (state) => setCache({
				...state,
				_k: fnArg
			})
		});
	});
	useIsomorphicLayoutEffect$1(() => {
		if (!key) return;
		const softRevalidate = revalidate.bind(void 0, WITH_DEDUPE);
		let nextFocusRevalidatedAt = 0;
		if (getConfig().revalidateOnFocus) nextFocusRevalidatedAt = Date.now() + getConfig().focusThrottleInterval;
		const onRevalidate = (type, opts = {}) => {
			if (type == 0) {
				const now = Date.now();
				if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
					nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
					softRevalidate();
				}
			} else if (type == 1) {
				if (getConfig().revalidateOnReconnect && isActive()) softRevalidate();
			} else if (type == 2) return revalidate();
			else if (type == 3) return revalidate(opts);
			else if (type == 4) {
				laggyDataRef.current = void 0;
				if (opts.revalidate) return revalidate();
			}
		};
		const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
		unmountedRef.current = false;
		keyRef.current = key;
		initialMountedRef.current = true;
		setCache({ _k: fnArg });
		if (shouldDoInitialRevalidation) {
			if (!FETCH[key]) {
				if (isUndefined(data) || IS_SERVER) softRevalidate();
				else rAF(softRevalidate);
			}
		}
		return () => {
			unmountedRef.current = true;
			unsubEvents();
		};
	}, [key]);
	useIsomorphicLayoutEffect$1(() => {
		let timer;
		function next() {
			const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
			if (interval && timer !== -1) timer = setTimeout(execute, interval);
		}
		function execute() {
			if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) revalidate(WITH_DEDUPE).then(next);
			else next();
		}
		next();
		return () => {
			if (timer) {
				clearTimeout(timer);
				timer = -1;
			}
		};
	}, [
		refreshInterval,
		refreshWhenHidden,
		refreshWhenOffline,
		key
	]);
	(0, import_react.useDebugValue)(returnedData);
	if (suspense) {
		if (!IS_REACT_LEGACY && IS_SERVER && hasKeyButNoData && isUndefined(preloadedData)) throw new Error("Fallback data is required when using Suspense in SSR.");
		if (hasKeyButNoData) {
			fetcherRef.current = fetcher;
			configRef.current = config;
			unmountedRef.current = false;
		}
		const shouldConsumePreload = !isUndefined(preloadedData) && hasKeyButNoData;
		let preloadData = void 0;
		if (shouldConsumePreload && hasCacheData) {
			preloadData = preloadedData && isPromiseLike(preloadedData) ? use(preloadedData) : preloadedData;
			data = preloadData;
			returnedData = preloadData;
			if (!IS_SERVER) preloadCacheRef.current = {
				data: preloadData,
				_k: fnArg,
				key,
				cacheData: serverCacheData
			};
		} else use(shouldConsumePreload ? boundMutate(preloadedData) : resolvedUndef);
		if (!isUndefined(error) && hasKeyButNoData) throw error;
		const revalidation = hasKeyButNoData && isUndefined(preloadData) ? revalidate(WITH_DEDUPE) : resolvedUndef;
		if (!isUndefined(returnedData) && hasKeyButNoData) {
			revalidation.status = "fulfilled";
			revalidation.value = true;
		}
		use(revalidation);
	}
	return {
		mutate: boundMutate,
		get data() {
			stateDependencies.data = true;
			return returnedData;
		},
		get error() {
			stateDependencies.error = true;
			return error;
		},
		get isValidating() {
			stateDependencies.isValidating = true;
			return isValidating;
		},
		get isLoading() {
			stateDependencies.isLoading = true;
			return isLoading;
		}
	};
};
OBJECT.defineProperty(SWRConfig$1, "defaultValue", { value: defaultConfig });
/**
* A hook to fetch data.
*
* @see {@link https://swr.vercel.app}
*
* @example
* ```jsx
* import useSWR from 'swr'
* function Profile() {
*   const { data, error, isLoading } = useSWR('/api/user', fetcher)
*   if (error) return <div>failed to load</div>
*   if (isLoading) return <div>loading...</div>
*   return <div>hello {data.name}!</div>
* }
* ```
*/ var useSWR = withArgs(useSWRHandler);
//#endregion
//#region node_modules/@ai-sdk/react/dist/index.js
var import_throttleit = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	function throttle(function_, wait) {
		if (typeof function_ !== "function") throw new TypeError(`Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`);
		let timeoutId;
		let lastCallTime = 0;
		return function throttled(...arguments_) {
			clearTimeout(timeoutId);
			const now = Date.now();
			const delayForNextCall = wait - (now - lastCallTime);
			if (delayForNextCall <= 0) {
				lastCallTime = now;
				function_.apply(this, arguments_);
			} else timeoutId = setTimeout(() => {
				lastCallTime = Date.now();
				function_.apply(this, arguments_);
			}, delayForNextCall);
		};
	}
	module.exports = throttle;
})))(), 1);
var import_jsx_runtime = require_jsx_runtime();
var getOriginalFetch = () => fetch;
function useObject({ api, id, schema, initialValue, fetch: fetch2, onError, onFinish, headers, credentials }) {
	const hookId = (0, import_react.useId)();
	const { data, mutate } = useSWR([id ?? hookId, "object"], null, { fallbackData: { object: initialValue } });
	const [error, setError] = (0, import_react.useState)(void 0);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const abortControllerRef = (0, import_react.useRef)(null);
	const stop = (0, import_react.useCallback)(() => {
		try {
			abortControllerRef.current?.abort();
		} catch {} finally {
			setIsLoading(false);
			abortControllerRef.current = null;
		}
	}, []);
	const submit = async (input) => {
		const abortController = new AbortController();
		try {
			clearObject();
			setIsLoading(true);
			abortControllerRef.current = abortController;
			const resolvedHeaders = await resolve(headers);
			const response = await (fetch2 ?? getOriginalFetch())(api, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...normalizeHeaders(resolvedHeaders)
				},
				credentials,
				signal: abortController.signal,
				body: JSON.stringify(input)
			});
			if (!response.ok) throw new Error(await response.text() || "Failed to fetch the response.");
			if (response.body == null) throw new Error("The response body is empty.");
			let accumulatedText = "";
			let latestObject = void 0;
			await response.body.pipeThrough(new TextDecoderStream()).pipeTo(new WritableStream({
				async write(chunk) {
					accumulatedText += chunk;
					const { value } = await parsePartialJson(accumulatedText);
					const currentObject = value;
					if (!isDeepEqualData(latestObject, currentObject)) {
						latestObject = currentObject;
						mutate({ object: currentObject });
					}
				},
				async close() {
					if (abortControllerRef.current === abortController) setIsLoading(false);
					if (onFinish != null) {
						const validationResult = await safeValidateTypes({
							value: latestObject,
							schema: asSchema(schema)
						});
						await onFinish(validationResult.success ? {
							object: validationResult.value,
							error: void 0
						} : {
							object: void 0,
							error: validationResult.error
						});
					}
					if (abortControllerRef.current === abortController) abortControllerRef.current = null;
				}
			}));
		} catch (error2) {
			if (isAbortError(error2)) return;
			if (onError && error2 instanceof Error) onError(error2);
			if (abortControllerRef.current === abortController) {
				setIsLoading(false);
				abortControllerRef.current = null;
				setError(error2 instanceof Error ? error2 : new Error(String(error2)));
			}
		}
	};
	const clear = () => {
		stop();
		clearObject();
	};
	const clearObject = () => {
		setError(void 0);
		setIsLoading(false);
		mutate({ object: void 0 });
	};
	return {
		submit,
		object: data?.object,
		error,
		isLoading,
		stop,
		clear
	};
}
function throttle(fn, waitMs) {
	return waitMs != null ? (0, import_throttleit.default)(fn, waitMs) : fn;
}
function cloneMetadata(metadata) {
	if (Array.isArray(metadata)) return [...metadata];
	if (metadata != null && typeof metadata === "object" && (Object.getPrototypeOf(metadata) === Object.prototype || Object.getPrototypeOf(metadata) === null)) return { ...metadata };
	return metadata;
}
var ReactChatState = class {
	constructor(initialMessages = []) {
		this.#status = "ready";
		this.#error = void 0;
		this.#messagesCallbacks = /* @__PURE__ */ new Set();
		this.#statusCallbacks = /* @__PURE__ */ new Set();
		this.#errorCallbacks = /* @__PURE__ */ new Set();
		this.pushMessage = (message) => {
			this.#messages = this.#messages.concat(message);
			this.#callMessagesCallbacks();
		};
		this.popMessage = () => {
			this.#messages = this.#messages.slice(0, -1);
			this.#callMessagesCallbacks();
		};
		this.replaceMessage = (index, message) => {
			this.#messages = [
				...this.#messages.slice(0, index),
				this.snapshot(message),
				...this.#messages.slice(index + 1)
			];
			this.#callMessagesCallbacks();
		};
		this.snapshot = (value) => {
			if (value == null || typeof value !== "object" || !("parts" in value) || !Array.isArray(value.parts)) return value;
			const message = value;
			const snapshot = {
				...message,
				parts: message.parts.map((part) => ({ ...part }))
			};
			if ("metadata" in message) snapshot.metadata = cloneMetadata(message.metadata);
			return snapshot;
		};
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => {
			const callback = throttleWaitMs ? throttle(onChange, throttleWaitMs) : onChange;
			this.#messagesCallbacks.add(callback);
			return () => {
				this.#messagesCallbacks.delete(callback);
			};
		};
		this["~registerStatusCallback"] = (onChange) => {
			this.#statusCallbacks.add(onChange);
			return () => {
				this.#statusCallbacks.delete(onChange);
			};
		};
		this["~registerErrorCallback"] = (onChange) => {
			this.#errorCallbacks.add(onChange);
			return () => {
				this.#errorCallbacks.delete(onChange);
			};
		};
		this.#callMessagesCallbacks = () => {
			this.#messagesCallbacks.forEach((callback) => callback());
		};
		this.#callStatusCallbacks = () => {
			this.#statusCallbacks.forEach((callback) => callback());
		};
		this.#callErrorCallbacks = () => {
			this.#errorCallbacks.forEach((callback) => callback());
		};
		this.#messages = initialMessages;
	}
	#messages;
	#status;
	#error;
	#messagesCallbacks;
	#statusCallbacks;
	#errorCallbacks;
	get status() {
		return this.#status;
	}
	set status(newStatus) {
		this.#status = newStatus;
		this.#callStatusCallbacks();
	}
	get error() {
		return this.#error;
	}
	set error(newError) {
		this.#error = newError;
		this.#callErrorCallbacks();
	}
	get messages() {
		return this.#messages;
	}
	set messages(newMessages) {
		this.#messages = [...newMessages];
		this.#callMessagesCallbacks();
	}
	#callMessagesCallbacks;
	#callStatusCallbacks;
	#callErrorCallbacks;
};
var Chat = class extends AbstractChat {
	constructor({ messages, ...init }) {
		const state = new ReactChatState(messages);
		super({
			...init,
			state
		});
		this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => this.#state["~registerMessagesCallback"](onChange, throttleWaitMs);
		this["~registerStatusCallback"] = (onChange) => this.#state["~registerStatusCallback"](onChange);
		this["~registerErrorCallback"] = (onChange) => this.#state["~registerErrorCallback"](onChange);
		this.#state = state;
	}
	#state;
};
function useChat({ throttle: throttle2, experimental_throttle, resume = false, ...options } = {}) {
	const throttleWaitMs = throttle2 ?? experimental_throttle;
	const latestRef = (0, import_react.useRef)({});
	if (!("chat" in options)) latestRef.current = {
		onToolCall: options.onToolCall,
		onData: options.onData,
		onFinish: options.onFinish,
		onError: options.onError,
		sendAutomaticallyWhen: options.sendAutomaticallyWhen,
		transport: options.transport
	};
	let defaultTransport;
	const getTransport = () => latestRef.current.transport ?? (defaultTransport ??= new DefaultChatTransport());
	const chatOptions = {
		...options,
		transport: {
			sendMessages: (sendOptions) => getTransport().sendMessages(sendOptions),
			reconnectToStream: (reconnectOptions) => getTransport().reconnectToStream(reconnectOptions)
		},
		onToolCall: (arg) => latestRef.current.onToolCall?.(arg),
		onData: (arg) => latestRef.current.onData?.(arg),
		onFinish: (arg) => latestRef.current.onFinish?.(arg),
		onError: (arg) => latestRef.current.onError?.(arg),
		sendAutomaticallyWhen: (arg) => latestRef.current.sendAutomaticallyWhen?.(arg) ?? false
	};
	const chatKey = "chat" in options ? options.chat : options.id;
	const { chat, isExternallyManaged } = (0, import_react.useMemo)(() => ({
		chat: "chat" in options ? options.chat : new Chat(chatOptions),
		isExternallyManaged: "chat" in options
	}), [chatKey]);
	(0, import_react.useEffect)(() => {
		if (isExternallyManaged) return;
		return () => {
			chat.stop();
		};
	}, [chat, isExternallyManaged]);
	const messagesSnapshot = (0, import_react.useMemo)(() => ({ messages: chat.messages }), [chat]);
	const subscribeToMessages = (0, import_react.useCallback)((update) => {
		let isSubscribed = true;
		const updateMessages = () => {
			if (!isSubscribed) return;
			messagesSnapshot.messages = chat.messages;
			update();
		};
		const unsubscribe = chat["~registerMessagesCallback"](updateMessages, throttleWaitMs);
		messagesSnapshot.messages = chat.messages;
		return () => {
			isSubscribed = false;
			unsubscribe();
		};
	}, [
		chat,
		messagesSnapshot,
		throttleWaitMs
	]);
	const getMessagesSnapshot = (0, import_react.useCallback)(() => messagesSnapshot.messages, [messagesSnapshot]);
	const messages = (0, import_react.useSyncExternalStore)(subscribeToMessages, getMessagesSnapshot, getMessagesSnapshot);
	const subscribeToStatus = (0, import_react.useCallback)((update) => chat["~registerStatusCallback"](() => {
		if (chat.status === "ready" || chat.status === "error") messagesSnapshot.messages = chat.messages;
		update();
	}), [chat, messagesSnapshot]);
	const getStatusSnapshot = (0, import_react.useCallback)(() => chat.status, [chat]);
	const status = (0, import_react.useSyncExternalStore)(subscribeToStatus, getStatusSnapshot, getStatusSnapshot);
	const error = (0, import_react.useSyncExternalStore)(chat["~registerErrorCallback"], () => chat.error, () => chat.error);
	const setMessages = (0, import_react.useCallback)((messagesParam) => {
		if (typeof messagesParam === "function") messagesParam = messagesParam(chat.messages);
		chat.messages = messagesParam;
	}, [chat]);
	(0, import_react.useEffect)(() => {
		if (resume) chat.resumeStream();
	}, [resume, chat]);
	return {
		id: chat.id,
		messages,
		setMessages,
		sendMessage: chat.sendMessage,
		regenerate: chat.regenerate,
		clearError: chat.clearError,
		stop: chat.stop,
		error,
		resumeStream: chat.resumeStream,
		status,
		/**
		* @deprecated Use `addToolOutput` instead.
		*/
		addToolResult: chat.addToolOutput,
		addToolOutput: chat.addToolOutput,
		addToolApprovalResponse: chat.addToolApprovalResponse
	};
}
function useCompletion({ api = "/api/completion", id, initialCompletion = "", initialInput = "", credentials, headers, body, streamProtocol = "data", fetch: fetch2, onFinish, onError, throttle: throttleWait, experimental_throttle } = {}) {
	const throttleWaitMs = throttleWait ?? experimental_throttle;
	const hookId = (0, import_react.useId)();
	const completionId = id || hookId;
	const { data, mutate } = useSWR([api, completionId], null, { fallbackData: initialCompletion });
	const { data: isLoading = false, mutate: mutateLoading } = useSWR([completionId, "loading"], null);
	const [error, setError] = (0, import_react.useState)(void 0);
	const completion = data;
	const abortControllerRef = (0, import_react.useRef)(null);
	const requestIdRef = (0, import_react.useRef)(0);
	const extraMetadataRef = (0, import_react.useRef)({
		credentials,
		headers,
		body
	});
	(0, import_react.useEffect)(() => {
		extraMetadataRef.current = {
			credentials,
			headers,
			body
		};
	}, [
		credentials,
		headers,
		body
	]);
	const triggerRequest = (0, import_react.useCallback)(async (prompt, options) => {
		const requestId = ++requestIdRef.current;
		return callCompletionApi({
			api,
			prompt,
			credentials: extraMetadataRef.current.credentials,
			headers: {
				...normalizeHeaders(extraMetadataRef.current.headers),
				...normalizeHeaders(options?.headers)
			},
			body: {
				...extraMetadataRef.current.body,
				...options?.body
			},
			streamProtocol,
			fetch: fetch2,
			setCompletion: throttle((completion2) => {
				if (requestIdRef.current === requestId) mutate(completion2, false);
			}, throttleWaitMs),
			setLoading: mutateLoading,
			setError,
			setAbortController: (controller) => {
				abortControllerRef.current = controller;
			},
			getAbortController: () => abortControllerRef.current,
			onFinish,
			onError
		});
	}, [
		mutate,
		mutateLoading,
		api,
		extraMetadataRef,
		onFinish,
		onError,
		setError,
		streamProtocol,
		fetch2,
		throttleWaitMs
	]);
	const stop = (0, import_react.useCallback)(() => {
		abortControllerRef.current?.abort();
	}, []);
	const setCompletion = (0, import_react.useCallback)((completion2) => {
		mutate(completion2, false);
	}, [mutate]);
	const complete = (0, import_react.useCallback)(async (prompt, options) => {
		return triggerRequest(prompt, options);
	}, [triggerRequest]);
	const [input, setInput] = (0, import_react.useState)(initialInput);
	const handleSubmit = (0, import_react.useCallback)((event) => {
		event?.preventDefault?.();
		if (!input) return;
		const result = complete(input);
		setInput("");
		return result;
	}, [
		input,
		complete,
		setInput
	]);
	return {
		completion,
		complete,
		error,
		setCompletion,
		stop,
		input,
		setInput,
		handleInputChange: (0, import_react.useCallback)((e) => {
			setInput(e.target.value);
		}, [setInput]),
		handleSubmit,
		isLoading
	};
}
var useIsomorphicLayoutEffect = typeof window === "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
var RealtimeStore = /* @__PURE__ */ (() => class RealtimeStore extends AbstractRealtimeSession {
	constructor() {
		super(...arguments);
		this.state = {
			status: "disconnected",
			messages: [],
			events: [],
			isCapturing: false,
			isPlaying: false
		};
		this.callbacks = {
			status: /* @__PURE__ */ new Set(),
			messages: /* @__PURE__ */ new Set(),
			events: /* @__PURE__ */ new Set(),
			isCapturing: /* @__PURE__ */ new Set(),
			isPlaying: /* @__PURE__ */ new Set(),
			session: /* @__PURE__ */ new Set()
		};
	}
	get status() {
		return this.state.status;
	}
	get messages() {
		return this.state.messages;
	}
	get events() {
		return this.state.events;
	}
	get isCapturing() {
		return this.state.isCapturing;
	}
	get isPlaying() {
		return this.state.isPlaying;
	}
	get session() {
		return this.state.session;
	}
	subscribe(key, onChange) {
		this.callbacks[key].add(onChange);
		return () => {
			this.callbacks[key].delete(onChange);
		};
	}
	setState(key, value) {
		this.state = {
			...this.state,
			[key]: value
		};
		this.callbacks[key].forEach((callback) => callback());
	}
})();
function useRealtime(options) {
	const ownerRef = (0, import_react.useRef)(null);
	const { model, api, startupTimeoutMs, closeTimeoutMs, rtcDisconnectTimeoutMs, sessionConfig, sampleRate, maxEvents, maxPlaybackBufferSeconds, onToolCall, onEvent, onError } = options;
	const { token, websocket, session: sessionEndpoint } = api;
	const protocols = JSON.stringify(api.protocols ?? []);
	const rt = (0, import_react.useMemo)(() => {
		const store = new RealtimeStore({
			model,
			api: token != null ? { token } : sessionEndpoint != null ? { session: sessionEndpoint } : {
				websocket,
				protocols: secureJsonParse(protocols)
			},
			startupTimeoutMs,
			closeTimeoutMs,
			rtcDisconnectTimeoutMs,
			sessionConfig,
			sampleRate,
			maxEvents,
			maxPlaybackBufferSeconds,
			onEvent: (...args) => ownerRef.current?.store === store ? ownerRef.current.onEvent?.(...args) : void 0,
			onError: (...args) => ownerRef.current?.store === store ? ownerRef.current.onError?.(...args) : void 0
		});
		return store;
	}, [
		model,
		token,
		sessionEndpoint,
		websocket,
		protocols,
		startupTimeoutMs,
		closeTimeoutMs,
		rtcDisconnectTimeoutMs,
		sessionConfig,
		sampleRate,
		maxEvents,
		maxPlaybackBufferSeconds
	]);
	(0, import_react.useInsertionEffect)(() => {
		ownerRef.current = {
			store: rt,
			onToolCall,
			onEvent,
			onError
		};
		rt.onToolCall = onToolCall == null ? void 0 : (...args) => ownerRef.current?.store === rt ? ownerRef.current.onToolCall?.(...args) : void 0;
		return () => {
			ownerRef.current = null;
		};
	});
	useIsomorphicLayoutEffect(() => {
		return () => rt.dispose();
	}, [rt]);
	const actions = (0, import_react.useMemo)(() => {
		const current = () => {
			if (ownerRef.current == null) throw new Error("Realtime controls require a mounted hook");
			return ownerRef.current.store;
		};
		return {
			connect: async (options2) => {
				const store = current();
				return options2 == null ? store.connect() : store.connect(options2);
			},
			close: async (options2) => current().close(options2),
			resumePlayback: async () => current().resumePlayback(),
			resumeAudioCapture: async () => current().resumeAudioCapture(),
			disconnect: () => current().disconnect(),
			addToolOutput: (callId, result) => current().addToolOutput(callId, result),
			sendEvent: (event) => current().sendEvent(event),
			sendTextMessage: (text) => current().sendTextMessage(text),
			sendAudio: (audio) => current().sendAudio(audio),
			commitAudio: () => current().commitAudio(),
			clearAudioBuffer: () => current().clearAudioBuffer(),
			requestResponse: (options2) => current().requestResponse(options2),
			cancelResponse: () => current().cancelResponse(),
			startAudioCapture: (stream) => current().startAudioCapture(stream),
			stopAudioCapture: () => current().stopAudioCapture(),
			stopPlayback: () => current().stopPlayback()
		};
	}, []);
	return {
		status: (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((cb) => rt.subscribe("status", cb), [rt]), () => rt.status, () => rt.status),
		messages: (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((cb) => rt.subscribe("messages", cb), [rt]), () => rt.messages, () => rt.messages),
		events: (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((cb) => rt.subscribe("events", cb), [rt]), () => rt.events, () => rt.events),
		isCapturing: (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((cb) => rt.subscribe("isCapturing", cb), [rt]), () => rt.isCapturing, () => rt.isCapturing),
		isPlaying: (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((cb) => rt.subscribe("isPlaying", cb), [rt]), () => rt.isPlaying, () => rt.isPlaying),
		session: (0, import_react.useSyncExternalStore)((0, import_react.useCallback)((cb) => rt.subscribe("session", cb), [rt]), () => rt.session, () => rt.session),
		...actions
	};
}
var experimental_useRealtime = useRealtime;
var MCP_APP_PROTOCOL_VERSION = "2026-01-26";
function isJsonRpcMessage(value) {
	return value != null && typeof value === "object" && !Array.isArray(value) && "jsonrpc" in value && value.jsonrpc === "2.0";
}
function isRequest(message) {
	return "method" in message && "id" in message;
}
function isNotification(message) {
	return "method" in message && !("id" in message);
}
function toError(error) {
	return error instanceof Error ? error : new Error(String(error));
}
function assertToolCallParams(params) {
	if (!isJSONObject(params) || typeof params.name !== "string") throw new Error("Invalid tools/call params");
	return {
		name: params.name,
		arguments: isJSONObject(params.arguments) ? params.arguments : void 0
	};
}
function assertResourceReadParams(params) {
	if (!isJSONObject(params) || typeof params.uri !== "string") throw new Error("Invalid resources/read params");
	if (!params.uri.startsWith("ui://")) throw new Error(`resources/read is limited to ui:// resources: ${params.uri}`);
	return { uri: params.uri };
}
function assertOpenLinkParams(params) {
	if (!isJSONObject(params) || typeof params.url !== "string") throw new Error("Invalid ui/open-link params");
	let scheme;
	try {
		scheme = new URL(params.url).protocol;
	} catch {
		throw new Error(`Invalid ui/open-link url: ${params.url}`);
	}
	if (scheme !== "https:" && scheme !== "http:" && scheme !== "mailto:") throw new Error(`Disallowed ui/open-link scheme: ${scheme}`);
	return { url: params.url };
}
function assertDisplayModeParams(params) {
	if (!isJSONObject(params) || params.mode !== "inline" && params.mode !== "fullscreen" && params.mode !== "pip") throw new Error("Invalid ui/request-display-mode params");
	return { mode: params.mode };
}
var MCPAppBridge = class {
	constructor({ targetWindow, targetOrigin = "*", handlers = {}, hostInfo = {
		name: "ai-sdk-react",
		version: "1.0.0"
	}, hostContext = { displayMode: "inline" } }) {
		this.initialized = false;
		this.pendingNotifications = [];
		this.nextRequestId = 0;
		this.pendingResponses = /* @__PURE__ */ new Map();
		this.targetWindow = targetWindow;
		this.targetOrigin = targetOrigin;
		this.handlers = handlers;
		this.hostInfo = hostInfo;
		this.hostContext = hostContext;
	}
	/**
	* Replaces the callbacks used to serve iframe requests.
	*/
	setHandlers(handlers) {
		this.handlers = handlers;
	}
	/**
	* Updates host context and notifies the iframe after initialization.
	*
	* @example
	* ```ts
	* bridge.setHostContext({ theme: 'dark', displayMode: 'inline' });
	* ```
	*/
	setHostContext(hostContext) {
		this.hostContext = hostContext;
		this.sendNotification({
			method: "ui/notifications/host-context-changed",
			params: hostContext
		});
	}
	/**
	* Whether a `message` event came from the expected proxy window and origin.
	* The origin check is skipped only when `targetOrigin` is the `'*'` default.
	* Callers that intercept events before {@link handleMessage} share this check.
	*/
	acceptsEvent(event) {
		return event.source === this.targetWindow && (this.targetOrigin === "*" || event.origin === this.targetOrigin);
	}
	/**
	* Processes one `message` event from the sandbox proxy iframe.
	*/
	handleMessage(event) {
		if (!this.acceptsEvent(event) || !isJsonRpcMessage(event.data)) return;
		const message = event.data;
		if ("result" in message || "error" in message) {
			this.handleResponse(message);
			return;
		}
		if (isRequest(message)) {
			this.handleRequest(message);
			return;
		}
		if (isNotification(message)) this.handleNotification(message);
	}
	/**
	* Sends app HTML and sandbox settings to the sandbox proxy.
	*/
	sendSandboxResourceReady(params) {
		this.post({
			jsonrpc: "2.0",
			method: "ui/notifications/sandbox-resource-ready",
			params
		});
	}
	/**
	* Sends final tool arguments to the MCP App.
	*/
	sendToolInput(input) {
		this.sendNotification({
			method: "ui/notifications/tool-input",
			params: { arguments: input }
		});
	}
	/**
	* Sends a completed MCP tool result to the MCP App.
	*/
	sendToolResult(result) {
		this.sendNotification({
			method: "ui/notifications/tool-result",
			params: result
		});
	}
	/**
	* Notifies the MCP App that the related tool call was cancelled.
	*/
	sendToolCancelled(reason) {
		this.sendNotification({
			method: "ui/notifications/tool-cancelled",
			params: reason != null ? { reason } : {}
		});
	}
	/**
	* Requests graceful teardown before the host removes the iframe.
	*/
	teardownResource() {
		return this.request("ui/resource-teardown", {});
	}
	/**
	* Rejects pending bridge requests and clears queued notifications.
	*/
	close() {
		for (const pending of this.pendingResponses.values()) pending.reject(/* @__PURE__ */ new Error("MCP App bridge closed"));
		this.pendingResponses.clear();
		this.pendingNotifications = [];
	}
	/**
	* Resolves or rejects a host-initiated request when the iframe responds.
	*/
	handleResponse(response) {
		const pending = this.pendingResponses.get(response.id);
		if (pending == null) return;
		this.pendingResponses.delete(response.id);
		if (response.error != null) pending.reject(new Error(response.error.message));
		else pending.resolve(response.result);
	}
	/**
	* Runs a handler for an iframe request and posts the JSON-RPC response.
	*/
	async handleRequest(request) {
		try {
			const result = await this.getRequestResult(request);
			this.post({
				jsonrpc: "2.0",
				id: request.id,
				result
			});
		} catch (error) {
			const normalizedError = toError(error);
			this.handlers.onError?.(normalizedError);
			this.post({
				jsonrpc: "2.0",
				id: request.id,
				error: {
					code: -32603,
					message: normalizedError.message
				}
			});
		}
	}
	/**
	* Maps supported iframe request methods to host callbacks.
	*/
	async getRequestResult(request) {
		switch (request.method) {
			case "ui/initialize": return {
				protocolVersion: MCP_APP_PROTOCOL_VERSION,
				hostCapabilities: {
					...this.handlers.callTool != null ? { serverTools: {} } : {},
					...this.handlers.readResource != null ? { serverResources: {} } : {},
					...this.handlers.onLog != null ? { logging: {} } : {}
				},
				hostInfo: this.hostInfo,
				hostContext: this.hostContext
			};
			case "tools/call": {
				if (this.handlers.callTool == null) throw new Error("No tools/call handler configured");
				const params = assertToolCallParams(request.params);
				if (this.handlers.allowedTools == null || !this.handlers.allowedTools.includes(params.name)) throw new Error(`Tool is not app-visible: ${params.name}`);
				return this.handlers.callTool(params);
			}
			case "resources/read":
				if (this.handlers.readResource == null) throw new Error("No resources/read handler configured");
				return this.handlers.readResource(assertResourceReadParams(request.params));
			case "resources/list":
				if (this.handlers.listResources == null) throw new Error("No resources/list handler configured");
				return this.handlers.listResources(request.params);
			case "ui/open-link":
				if (this.handlers.openLink == null) throw new Error("No ui/open-link handler configured");
				return this.handlers.openLink(assertOpenLinkParams(request.params));
			case "ui/message": return this.handlers.sendMessage?.(request.params) ?? {};
			case "ui/update-model-context": return this.handlers.updateModelContext?.(request.params) ?? {};
			case "ui/request-display-mode": return this.handlers.requestDisplayMode?.(assertDisplayModeParams(request.params)) ?? { mode: this.hostContext.displayMode ?? "inline" };
			default: throw new Error(`Unsupported MCP App method: ${request.method}`);
		}
	}
	/**
	* Handles iframe lifecycle and telemetry notifications.
	*/
	handleNotification(notification) {
		switch (notification.method) {
			case "ui/notifications/initialized":
				this.initialized = true;
				this.flushNotifications();
				this.handlers.onInitialized?.();
				break;
			case "ui/notifications/size-changed":
				this.handlers.onSizeChange?.(notification.params);
				break;
			case "ui/notifications/request-teardown":
				this.handlers.onRequestTeardown?.(notification.params);
				break;
			case "notifications/message": this.handlers.onLog?.(notification.params);
		}
	}
	/**
	* Sends a host-to-iframe notification, queueing it until app initialization.
	*/
	sendNotification(notification) {
		const message = {
			jsonrpc: "2.0",
			...notification
		};
		if (!this.initialized && !notification.method.includes("sandbox")) {
			this.pendingNotifications.push(message);
			return;
		}
		this.post(message);
	}
	/**
	* Sends notifications that were queued before `ui/notifications/initialized`.
	*/
	flushNotifications() {
		const notifications = this.pendingNotifications;
		this.pendingNotifications = [];
		for (const notification of notifications) this.post(notification);
	}
	/**
	* Sends a host-initiated JSON-RPC request to the iframe.
	*/
	request(method, params) {
		const id = this.nextRequestId++;
		this.post({
			jsonrpc: "2.0",
			id,
			method,
			params
		});
		return new Promise((resolve2, reject) => {
			this.pendingResponses.set(id, {
				resolve: resolve2,
				reject
			});
		});
	}
	/**
	* Posts a JSON-RPC message to the sandbox proxy iframe.
	*/
	post(message) {
		this.targetWindow.postMessage(message, this.targetOrigin);
	}
};
var ALLOWED_CSP_SCHEMES = /* @__PURE__ */ new Set(["https:", "wss:"]);
function sanitizeCSPSources(sources) {
	const result = [];
	for (const source of sources ?? []) {
		if (typeof source !== "string") continue;
		let origin;
		try {
			const url = new URL(source);
			if (!ALLOWED_CSP_SCHEMES.has(url.protocol) || url.host.length === 0 || url.host === "*") continue;
			origin = url.origin;
		} catch {
			continue;
		}
		if (/["'`\s;,]/.test(origin)) continue;
		result.push(origin);
	}
	return result;
}
var MCP_APP_DEFAULT_OUTER_SANDBOX = "allow-scripts allow-same-origin allow-forms";
var MCP_APP_DEFAULT_INNER_SANDBOX = "allow-scripts allow-forms";
function getMCPAppCSP(csp) {
	if (csp == null) return;
	const connectSrc = ["'self'", ...sanitizeCSPSources(csp.connectDomains)];
	const imgSrc = [
		"'self'",
		"data:",
		...sanitizeCSPSources(csp.resourceDomains)
	];
	const frameSrc = ["'self'", ...sanitizeCSPSources(csp.frameDomains)];
	return [
		"default-src 'none'",
		"base-uri 'none'",
		"form-action 'none'",
		"script-src 'unsafe-inline'",
		"style-src 'unsafe-inline'",
		`connect-src ${connectSrc.join(" ")}`,
		`img-src ${imgSrc.join(" ")}`,
		`font-src ${imgSrc.join(" ")}`,
		`frame-src ${frameSrc.join(" ")}`
	].join("; ");
}
var MCP_APP_PERMISSION_FEATURES = {
	camera: "camera",
	microphone: "microphone",
	geolocation: "geolocation",
	clipboardWrite: "clipboard-write"
};
function getMCPAppAllowAttribute(permissions, allowedPermissions) {
	if (permissions == null || allowedPermissions == null) return;
	const allow = allowedPermissions.filter((permission) => Boolean(permissions[permission])).map((permission) => MCP_APP_PERMISSION_FEATURES[permission]);
	return allow.length > 0 ? allow.join("; ") : void 0;
}
function getMCPAppFromToolPart(part) {
	const rawAppMetadata = part.toolMetadata?.app;
	const appMetadata = isJSONObject(rawAppMetadata) ? rawAppMetadata : void 0;
	if (appMetadata == null || appMetadata.mimeType !== "text/html;profile=mcp-app" || typeof appMetadata.resourceUri !== "string" || !appMetadata.resourceUri.startsWith("ui://") || appMetadata.visibility != null && (!Array.isArray(appMetadata.visibility) || appMetadata.visibility.some((value) => value !== "model" && value !== "app"))) return;
	return appMetadata;
}
function normalizeMCPAppToolResult(output) {
	if (output != null && typeof output === "object" && "content" in output) return output;
	return {
		content: [],
		structuredContent: output
	};
}
function deriveTargetOrigin(url) {
	const location = typeof window !== "undefined" ? window.location : void 0;
	try {
		return new URL(url, location?.href).origin;
	} catch {
		return location?.origin ?? "null";
	}
}
function sendToolState({ bridge, input, output }) {
	if (bridge == null) return;
	if (input !== void 0) bridge.sendToolInput(input);
	if (output !== void 0) bridge.sendToolResult(normalizeMCPAppToolResult(output));
}
function MCPAppFrame({ app, resource, input, output, sandbox, handlers, hostInfo, hostContext }) {
	const iframeRef = (0, import_react.useRef)(null);
	const bridgeRef = (0, import_react.useRef)(void 0);
	const inputRef = (0, import_react.useRef)(input);
	const outputRef = (0, import_react.useRef)(output);
	const hostContextRef = (0, import_react.useRef)(hostContext);
	const initializedRef = (0, import_react.useRef)(false);
	inputRef.current = input;
	outputRef.current = output;
	hostContextRef.current = hostContext;
	const sandboxUrl = String(sandbox.url);
	const targetOrigin = sandbox.targetOrigin ?? deriveTargetOrigin(sandboxUrl);
	const resourceCSP = getMCPAppCSP(resource.meta?.csp);
	const resourceAllow = getMCPAppAllowAttribute(resource.meta?.permissions, sandbox.allowedPermissions);
	const innerSandbox = sandbox.innerSandbox ?? MCP_APP_DEFAULT_INNER_SANDBOX;
	const bridgeHandlers = (0, import_react.useMemo)(() => ({
		...handlers,
		onInitialized: () => {
			initializedRef.current = true;
			handlers?.onInitialized?.();
			sendToolState({
				bridge: bridgeRef.current,
				input: inputRef.current,
				output: outputRef.current
			});
		}
	}), [handlers]);
	const bridgeHandlersRef = (0, import_react.useRef)(bridgeHandlers);
	bridgeHandlersRef.current = bridgeHandlers;
	(0, import_react.useEffect)(() => {
		const targetWindow = iframeRef.current?.contentWindow;
		if (targetWindow == null) return;
		initializedRef.current = false;
		const bridge = new MCPAppBridge({
			targetWindow,
			targetOrigin,
			handlers: bridgeHandlersRef.current,
			hostInfo,
			hostContext: hostContextRef.current
		});
		bridgeRef.current = bridge;
		const onMessage = (event) => {
			if (!bridge.acceptsEvent(event)) return;
			if (event.data?.jsonrpc === "2.0" && event.data.method === "ui/notifications/sandbox-proxy-ready") {
				bridge.sendSandboxResourceReady({
					html: resource.html,
					csp: resourceCSP,
					sandbox: innerSandbox,
					allow: resourceAllow
				});
				return;
			}
			bridge.handleMessage(event);
		};
		window.addEventListener("message", onMessage);
		return () => {
			initializedRef.current = false;
			window.removeEventListener("message", onMessage);
			bridge.teardownResource().catch(() => {});
			bridge.close();
			bridgeRef.current = void 0;
		};
	}, [
		hostInfo,
		innerSandbox,
		resource.html,
		resourceAllow,
		resourceCSP,
		sandboxUrl,
		targetOrigin
	]);
	(0, import_react.useEffect)(() => {
		bridgeRef.current?.setHandlers(bridgeHandlers);
	}, [bridgeHandlers]);
	(0, import_react.useEffect)(() => {
		if (hostContext != null) bridgeRef.current?.setHostContext(hostContext);
	}, [hostContext]);
	(0, import_react.useEffect)(() => {
		if (initializedRef.current && input !== void 0) bridgeRef.current?.sendToolInput(input);
	}, [input]);
	(0, import_react.useEffect)(() => {
		if (initializedRef.current && output !== void 0) bridgeRef.current?.sendToolResult(normalizeMCPAppToolResult(output));
	}, [output]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		ref: iframeRef,
		title: "MCP App",
		"aria-label": sandbox.title ?? app.resourceUri,
		src: sandboxUrl,
		className: sandbox.className,
		style: sandbox.style,
		allow: resourceAllow,
		sandbox: sandbox.outerSandbox ?? MCP_APP_DEFAULT_OUTER_SANDBOX
	});
}
function getToolPartOutput(part) {
	return part.state === "output-available" ? part.output : void 0;
}
function getToolPartInput(part) {
	return part.state === "input-available" || part.state === "output-available" ? part.input : void 0;
}
function MCPAppRenderer({ part, sandbox, resource: resourceProp, loadResource, handlers, hostInfo, hostContext, fallback = null }) {
	const app = getMCPAppFromToolPart(part);
	const [cachedApp, setCachedApp] = (0, import_react.useState)();
	const [loadedResource, setLoadedResource] = (0, import_react.useState)();
	(0, import_react.useEffect)(() => {
		if (app != null) setCachedApp((previous) => previous?.resourceUri === app.resourceUri ? previous : app);
	}, [app?.resourceUri]);
	const appForRender = app ?? cachedApp;
	(0, import_react.useEffect)(() => {
		if (appForRender == null || resourceProp != null || loadResource == null) return;
		let cancelled = false;
		const resourceUri = appForRender.resourceUri;
		loadResource(appForRender).then((resource2) => {
			if (!cancelled) setLoadedResource({
				resourceUri,
				resource: resource2
			});
		}).catch((error2) => {
			if (!cancelled) setLoadedResource({
				resourceUri,
				error: error2 instanceof Error ? error2 : new Error(String(error2))
			});
		});
		return () => {
			cancelled = true;
		};
	}, [
		appForRender?.resourceUri,
		loadResource,
		resourceProp
	]);
	const loadedResourceForApp = loadedResource?.resourceUri === appForRender?.resourceUri ? loadedResource : void 0;
	const resource = resourceProp ?? loadedResourceForApp?.resource;
	const error = resourceProp == null ? loadedResourceForApp?.error : void 0;
	if (appForRender == null || error != null || resource == null) return fallback;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MCPAppFrame, {
		app: appForRender,
		resource,
		input: getToolPartInput(part),
		output: getToolPartOutput(part),
		sandbox,
		handlers,
		hostInfo,
		hostContext
	});
}
var experimental_useObject = useObject;
//#endregion
export { Chat, MCPAppRenderer as experimental_MCPAppRenderer, experimental_useObject, experimental_useRealtime, useChat, useCompletion, useObject };
