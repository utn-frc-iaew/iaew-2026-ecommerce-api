import { _ as extend, f as Color, g as define_default, h as rgbConvert, l as hue, p as Rgb, u as nogamma } from "./src-BzEAV6RG.js";
import { a as bisector, i as tickStep, n as continuous, r as copy } from "./linear-5woL8hQl.js";
import { $ as durationMinute, B as utcYear, J as utcSunday, Q as durationHour, R as timeFormat, W as timeSunday, X as unixDay, Y as timeDay, Z as durationDay, et as durationMonth, it as timeInterval, nt as durationWeek, rt as durationYear, tt as durationSecond, z as timeYear } from "./src-D_QHH7b7.js";
import { t as initRange } from "./init-DHdG6DHP.js";
//#region node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;
//#endregion
//#region node_modules/d3-color/src/lab.js
var K = 18;
var Xn = .96422;
var Yn = 1;
var Zn = .82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
	if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	if (o instanceof Hcl) return hcl2lab(o);
	if (!(o instanceof Rgb)) o = rgbConvert(o);
	var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((.2225045 * r + .7168786 * g + .0606169 * b) / Yn), x, z;
	if (r === g && g === b) x = z = y;
	else {
		x = xyz2lab((.4360747 * r + .3850649 * g + .1430804 * b) / Xn);
		z = xyz2lab((.0139322 * r + .0971045 * g + .7141733 * b) / Zn);
	}
	return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab(l, a, b, opacity) {
	return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
	this.l = +l;
	this.a = +a;
	this.b = +b;
	this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
	brighter(k) {
		return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
	},
	darker(k) {
		return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
	},
	rgb() {
		var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
		x = Xn * lab2xyz(x);
		y = Yn * lab2xyz(y);
		z = Zn * lab2xyz(z);
		return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - .4906146 * z), lrgb2rgb(-.9787684 * x + 1.9161415 * y + .033454 * z), lrgb2rgb(.0719453 * x - .2289914 * y + 1.4052427 * z), this.opacity);
	}
}));
function xyz2lab(t) {
	return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
	return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
	return 255 * (x <= .0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - .055);
}
function rgb2lrgb(x) {
	return (x /= 255) <= .04045 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4);
}
function hclConvert(o) {
	if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	if (!(o instanceof Lab)) o = labConvert(o);
	if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
	var h = Math.atan2(o.b, o.a) * degrees;
	return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl$1(h, c, l, opacity) {
	return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
	this.h = +h;
	this.c = +c;
	this.l = +l;
	this.opacity = +opacity;
}
function hcl2lab(o) {
	if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
	var h = o.h * radians;
	return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl$1, extend(Color, {
	brighter(k) {
		return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
	},
	darker(k) {
		return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
	},
	rgb() {
		return hcl2lab(this).rgb();
	}
}));
//#endregion
//#region node_modules/d3-interpolate/src/hcl.js
function hcl(hue) {
	return function(start, end) {
		var h = hue((start = hcl$1(start)).h, (end = hcl$1(end)).h), c = nogamma(start.c, end.c), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
		return function(t) {
			start.h = h(t);
			start.c = c(t);
			start.l = l(t);
			start.opacity = opacity(t);
			return start + "";
		};
	};
}
var hcl_default = hcl(hue);
//#endregion
//#region node_modules/d3-array/src/max.js
function max(values, valueof) {
	let max;
	if (valueof === void 0) {
		for (const value of values) if (value != null && (max < value || max === void 0 && value >= value)) max = value;
	} else {
		let index = -1;
		for (let value of values) if ((value = valueof(value, ++index, values)) != null && (max < value || max === void 0 && value >= value)) max = value;
	}
	return max;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function min(values, valueof) {
	let min;
	if (valueof === void 0) {
		for (const value of values) if (value != null && (min > value || min === void 0 && value >= value)) min = value;
	} else {
		let index = -1;
		for (let value of values) if ((value = valueof(value, ++index, values)) != null && (min > value || min === void 0 && value >= value)) min = value;
	}
	return min;
}
//#endregion
//#region node_modules/d3-axis/src/identity.js
function identity_default(x) {
	return x;
}
//#endregion
//#region node_modules/d3-axis/src/axis.js
var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
function translateX(x) {
	return "translate(" + x + ",0)";
}
function translateY(y) {
	return "translate(0," + y + ")";
}
function number$1(scale) {
	return (d) => +scale(d);
}
function center(scale, offset) {
	offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
	if (scale.round()) offset = Math.round(offset);
	return (d) => +scale(d) + offset;
}
function entering() {
	return !this.__axis;
}
function axis(orient, scale) {
	var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : .5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
	function axis(context) {
		var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number$1)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([null]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
		path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
		tick = tick.merge(tickEnter);
		line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
		text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
		if (context !== selection) {
			path = path.transition(context);
			tick = tick.transition(context);
			line = line.transition(context);
			text = text.transition(context);
			tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
				return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
			});
			tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
				var p = this.parentNode.__axis;
				return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
			});
		}
		tickExit.remove();
		path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
		tick.attr("opacity", 1).attr("transform", function(d) {
			return transform(position(d) + offset);
		});
		line.attr(x + "2", k * tickSizeInner);
		text.attr(x, k * spacing).text(format);
		selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
		selection.each(function() {
			this.__axis = position;
		});
	}
	axis.scale = function(_) {
		return arguments.length ? (scale = _, axis) : scale;
	};
	axis.ticks = function() {
		return tickArguments = Array.from(arguments), axis;
	};
	axis.tickArguments = function(_) {
		return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
	};
	axis.tickValues = function(_) {
		return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
	};
	axis.tickFormat = function(_) {
		return arguments.length ? (tickFormat = _, axis) : tickFormat;
	};
	axis.tickSize = function(_) {
		return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
	};
	axis.tickSizeInner = function(_) {
		return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
	};
	axis.tickSizeOuter = function(_) {
		return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
	};
	axis.tickPadding = function(_) {
		return arguments.length ? (tickPadding = +_, axis) : tickPadding;
	};
	axis.offset = function(_) {
		return arguments.length ? (offset = +_, axis) : offset;
	};
	return axis;
}
function axisTop(scale) {
	return axis(top, scale);
}
function axisBottom(scale) {
	return axis(bottom, scale);
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
	domain = domain.slice();
	var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
	if (x1 < x0) {
		t = i0, i0 = i1, i1 = t;
		t = x0, x0 = x1, x1 = t;
	}
	domain[i0] = interval.floor(x0);
	domain[i1] = interval.ceil(x1);
	return domain;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {}, (date, step) => {
	date.setTime(+date + step);
}, (start, end) => {
	return end - start;
});
millisecond.every = (k) => {
	k = Math.floor(k);
	if (!isFinite(k) || !(k > 0)) return null;
	if (!(k > 1)) return millisecond;
	return timeInterval((date) => {
		date.setTime(Math.floor(date / k) * k);
	}, (date, step) => {
		date.setTime(+date + step * k);
	}, (start, end) => {
		return (end - start) / k;
	});
};
millisecond.range;
//#endregion
//#region node_modules/d3-time/src/second.js
var second = timeInterval((date) => {
	date.setTime(date - date.getMilliseconds());
}, (date, step) => {
	date.setTime(+date + step * durationSecond);
}, (start, end) => {
	return (end - start) / durationSecond;
}, (date) => {
	return date.getUTCSeconds();
});
second.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date) => {
	date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
	date.setTime(+date + step * durationMinute);
}, (start, end) => {
	return (end - start) / durationMinute;
}, (date) => {
	return date.getMinutes();
});
timeMinute.range;
var utcMinute = timeInterval((date) => {
	date.setUTCSeconds(0, 0);
}, (date, step) => {
	date.setTime(+date + step * durationMinute);
}, (start, end) => {
	return (end - start) / durationMinute;
}, (date) => {
	return date.getUTCMinutes();
});
utcMinute.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date) => {
	date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
	date.setTime(+date + step * durationHour);
}, (start, end) => {
	return (end - start) / durationHour;
}, (date) => {
	return date.getHours();
});
timeHour.range;
var utcHour = timeInterval((date) => {
	date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
	date.setTime(+date + step * durationHour);
}, (start, end) => {
	return (end - start) / durationHour;
}, (date) => {
	return date.getUTCHours();
});
utcHour.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date) => {
	date.setDate(1);
	date.setHours(0, 0, 0, 0);
}, (date, step) => {
	date.setMonth(date.getMonth() + step);
}, (start, end) => {
	return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
	return date.getMonth();
});
timeMonth.range;
var utcMonth = timeInterval((date) => {
	date.setUTCDate(1);
	date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
	date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
	return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
	return date.getUTCMonth();
});
utcMonth.range;
//#endregion
//#region node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
	const tickIntervals = [
		[
			second,
			1,
			durationSecond
		],
		[
			second,
			5,
			5 * durationSecond
		],
		[
			second,
			15,
			15 * durationSecond
		],
		[
			second,
			30,
			30 * durationSecond
		],
		[
			minute,
			1,
			durationMinute
		],
		[
			minute,
			5,
			5 * durationMinute
		],
		[
			minute,
			15,
			15 * durationMinute
		],
		[
			minute,
			30,
			30 * durationMinute
		],
		[
			hour,
			1,
			durationHour
		],
		[
			hour,
			3,
			3 * durationHour
		],
		[
			hour,
			6,
			6 * durationHour
		],
		[
			hour,
			12,
			12 * durationHour
		],
		[
			day,
			1,
			durationDay
		],
		[
			day,
			2,
			2 * durationDay
		],
		[
			week,
			1,
			durationWeek
		],
		[
			month,
			1,
			durationMonth
		],
		[
			month,
			3,
			3 * durationMonth
		],
		[
			year,
			1,
			durationYear
		]
	];
	function ticks(start, stop, count) {
		const reverse = stop < start;
		if (reverse) [start, stop] = [stop, start];
		const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
		const ticks = interval ? interval.range(start, +stop + 1) : [];
		return reverse ? ticks.reverse() : ticks;
	}
	function tickInterval(start, stop, count) {
		const target = Math.abs(stop - start) / count;
		const i = bisector(([, , step]) => step).right(tickIntervals, target);
		if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
		if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
		const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
		return t.every(step);
	}
	return [ticks, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
//#endregion
//#region node_modules/d3-scale/src/time.js
function date(t) {
	return new Date(t);
}
function number(t) {
	return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
	var scale = continuous(), invert = scale.invert, domain = scale.domain;
	var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
	function tickFormat(date) {
		return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
	}
	scale.invert = function(y) {
		return new Date(invert(y));
	};
	scale.domain = function(_) {
		return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
	};
	scale.ticks = function(interval) {
		var d = domain();
		return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
	};
	scale.tickFormat = function(count, specifier) {
		return specifier == null ? tickFormat : format(specifier);
	};
	scale.nice = function(interval) {
		var d = domain();
		if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
		return interval ? domain(nice(d, interval)) : scale;
	};
	scale.copy = function() {
		return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
	};
	return scale;
}
function time() {
	return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
export { second as a, axisTop as c, hcl_default as d, timeMinute as i, min as l, timeMonth as n, millisecond as o, timeHour as r, axisBottom as s, time as t, max as u };
