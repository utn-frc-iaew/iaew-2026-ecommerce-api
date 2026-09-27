import { at as Color, ot as Utils } from "./chunk-DU6HZSFF-D4sgRKOo.js";
//#region node_modules/khroma/dist/methods/channel.js
var channel = (color, channel) => {
	return Utils.lang.round(Color.parse(color)[channel]);
};
//#endregion
export { channel as t };
