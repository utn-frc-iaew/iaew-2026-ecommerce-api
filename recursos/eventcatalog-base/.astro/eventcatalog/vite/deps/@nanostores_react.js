import { i as __toESM } from "./rolldown-runtime-B-lAHAz2.js";
import { t as require_react } from "./react.js";
import { r as listenKeys } from "./nanostores-DLSuKIwL.js";
//#region node_modules/@nanostores/react/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var emit = (snapshotRef, onChange) => (value) => {
	if (snapshotRef.current === value) return;
	snapshotRef.current = value;
	onChange();
};
function useStore(store, { keys, deps = [store, keys], ssr } = {}) {
	let snapshotRef = (0, import_react.useRef)();
	snapshotRef.current = store.get();
	let subscribe = (0, import_react.useCallback)((onChange) => {
		emit(snapshotRef, onChange)(store.value);
		return keys?.length > 0 ? listenKeys(store, keys, emit(snapshotRef, onChange)) : store.listen(emit(snapshotRef, onChange));
	}, deps);
	let get = () => snapshotRef.current;
	let server = get;
	if (ssr && "init" in store) server = ssr === "initial" ? () => store.init : ssr;
	return (0, import_react.useSyncExternalStore)(subscribe, get, server);
}
//#endregion
export { useStore };
