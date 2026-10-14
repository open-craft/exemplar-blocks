import { C as e, D as t, S as n, T as r, _ as i, b as a, c as o, d as s, f as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, w as v, x as y } from "./IconButton-Bd-D0icB.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/ArrowForward.js
var b = /* @__PURE__ */ t(r()), x = (e) => /* @__PURE__ */ b.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ b.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), S = (e) => /* @__PURE__ */ b.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ b.createElement("path", {
	d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	fill: "currentColor"
})), C = (e) => /* @__PURE__ */ b.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ b.createElement("path", {
	d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z",
	fill: "currentColor"
})), w = (e) => /* @__PURE__ */ b.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ b.createElement("path", {
	d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
	fill: "currentColor"
})), T = /* @__PURE__ */ t(c()), E = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], ee = { fluid: !1 }, D = /* @__PURE__ */ b.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.fluid, i = e.as, a = i === void 0 ? "div" : i, c = e.className, l = _(e, E), u = o(n, "container"), d = typeof r == "string" ? "-" + r : "-fluid";
	return /* @__PURE__ */ b.createElement(a, s({ ref: t }, l, { className: (0, T.default)(c, r ? "" + u + d : u) }));
});
D.displayName = "Container", D.defaultProps = ee;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var O = /* @__PURE__ */ t(h()), te = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
O.default.string, O.default.bool, O.default.bool, O.default.bool, O.default.bool;
var ne = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, k = /* @__PURE__ */ b.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, c = e.roundedCircle, l = e.thumbnail, u = _(e, te);
	n = o(n, "img");
	var d = (0, T.default)(i && n + "-fluid", a && "rounded", c && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ b.createElement("img", s({ ref: t }, u, { className: (0, T.default)(r, d) }));
});
k.displayName = "Image", k.defaultProps = ne;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var re = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], ie = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], A = { noGutters: !1 }, j = /* @__PURE__ */ b.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, a = e.as, c = a === void 0 ? "div" : a, l = _(e, re), u = o(n, "row"), d = u + "-cols", f = [];
	return ie.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && f.push("" + d + r + "-" + n);
	}), /* @__PURE__ */ b.createElement(c, s({ ref: t }, l, { className: T.default.apply(void 0, [
		r,
		u,
		i && "no-gutters"
	].concat(f)) }));
});
j.displayName = "Row", j.defaultProps = A;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/breakpoints.js
var { sm: M, md: N, lg: ae, xl: oe, xxl: se } = {
	xs: "0",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1200px",
	xxl: "1400px"
}, P = {
	extraSmall: { maxWidth: parseFloat(M) || 575.98 },
	small: {
		minWidth: parseFloat(M) || 576,
		maxWidth: parseFloat(N) || 767.98
	},
	medium: {
		minWidth: parseFloat(N) || 768,
		maxWidth: parseFloat(ae) || 991.98
	},
	large: {
		minWidth: parseFloat(ae) || 992,
		maxWidth: parseFloat(oe) || 1199.98
	},
	extraLarge: {
		minWidth: parseFloat(oe) || 1200,
		maxWidth: parseFloat(se) || 1399.98
	},
	extraExtraLarge: { minWidth: parseFloat(se) || 1400 }
};
Object.freeze({
	xs: "extraSmall",
	sm: "small",
	md: "medium",
	lg: "large",
	xl: "extraLarge",
	xxl: "extraExtraLarge"
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Container/index.js
var ce = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(ce || {}), le = /* @__PURE__ */ (0, b.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ b.createElement(D, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, T.default)(a.className, e && ce[e])
}, t)), F = "right-scroll-bar-position", I = "width-before-scroll-bar", ue = "with-scroll-bars-hidden", de = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function fe(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function pe(e, t) {
	var n = (0, b.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var me = typeof window < "u" ? b.useLayoutEffect : b.useEffect, he = /* @__PURE__ */ new WeakMap();
function ge(e, t) {
	var n = pe(t || null, function(t) {
		return e.forEach(function(e) {
			return fe(e, t);
		});
	});
	return me(function() {
		var t = he.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || fe(e, null);
			}), i.forEach(function(e) {
				r.has(e) || fe(e, a);
			});
		}
		he.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function _e(e) {
	return e;
}
function ve(e, t) {
	t === void 0 && (t = _e);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function ye(e, t) {
	return t === void 0 && (t = _e), ve(e, t);
}
function be(e) {
	e === void 0 && (e = {});
	var t = ve(null);
	return t.options = a({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var xe = function(e) {
	var t = e.sideCar, n = y(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return b.createElement(r, a({}, n));
};
xe.isSideCarExport = !0;
function Se(e, t) {
	return e.useMedium(t), xe;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ce = be(), we = function() {}, Te = b.forwardRef(function(e, t) {
	var n = b.useRef(null), r = b.useState({
		onScrollCapture: we,
		onWheelCapture: we,
		onTouchMoveCapture: we
	}), i = r[0], o = r[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, x = v === void 0 ? "div" : v, S = e.gapMode, C = y(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), w = p, T = ge([n, t]), E = a(a({}, C), i);
	return b.createElement(b.Fragment, null, d && b.createElement(w, {
		sideCar: Ce,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: S
	}), s ? b.cloneElement(b.Children.only(c), a(a({}, E), { ref: T })) : b.createElement(x, a({}, E, {
		className: l,
		ref: T
	}), c));
});
Te.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Te.classNames = {
	fullWidth: I,
	zeroRight: F
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Ee = "data-focus-lock", De = "data-focus-lock-disabled", Oe = "data-no-focus-lock", ke = "data-autofocus-inside", Ae = "data-no-autofocus", L = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, je = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: L
	}), n, n && /* @__PURE__ */ b.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: L
	}));
};
je.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Me = ye({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ne = ye(), Pe = ye(), Fe = be({
	async: !0,
	ssr: typeof document < "u"
}), Ie = /* @__PURE__ */ (0, b.createContext)(void 0), Le = [], Re = /* @__PURE__ */ (0, b.forwardRef)(function(e, t) {
	var n, r = (0, b.useState)(), i = r[0], a = r[1], o = (0, b.useRef)(), c = (0, b.useRef)(!1), l = (0, b.useRef)(null), u = (0, b.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, x = e.autoFocus, S = x === void 0 ? !0 : x;
	e.allowTextSelection;
	var C = e.group, w = e.className, T = e.whiteList, E = e.hasPositiveIndices, ee = e.shards, D = ee === void 0 ? Le : ee, O = e.as, te = O === void 0 ? "div" : O, ne = e.lockProps, k = ne === void 0 ? {} : ne, re = e.sideCar, ie = e.returnFocus, A = ie === void 0 ? !1 : ie, j = e.focusOptions, M = e.onActivation, N = e.onDeactivation, ae = (0, b.useState)({})[0], oe = (0, b.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		o.current && M && M(o.current), c.current = !0, u();
	}, [M]), se = (0, b.useCallback)(function() {
		c.current = !1, N && N(o.current), u();
	}, [N]), P = (0, b.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof A == "function" ? A(n) : A;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [A]), ce = (0, b.useCallback)(function(e) {
		c.current && Me.useMedium(e);
	}, []), le = Ne.useMedium, F = (0, b.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), I = s((n = {}, n[De] = p && "disabled", n[Ee] = C, n), k), ue = h !== !0, de = ue && h !== "tail", fe = ge([t, F]), pe = (0, b.useMemo)(function() {
		return {
			observed: o,
			shards: D,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		D,
		o
	]);
	return /* @__PURE__ */ b.createElement(b.Fragment, null, ue && [/* @__PURE__ */ b.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: L
	}), E ? /* @__PURE__ */ b.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: L
	}) : null], !p && /* @__PURE__ */ b.createElement(re, {
		id: ae,
		sideCar: Fe,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: S,
		whiteList: T,
		shards: D,
		onActivation: oe,
		onDeactivation: se,
		returnFocus: P,
		focusOptions: j,
		noFocusGuards: h
	}), /* @__PURE__ */ b.createElement(te, s({ ref: fe }, I, {
		className: w,
		onBlur: le,
		onFocus: ce
	}), /* @__PURE__ */ b.createElement(Ie.Provider, { value: pe }, d)), de && /* @__PURE__ */ b.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: L
	}));
});
Re.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function ze(e) {
	setTimeout(e, 1);
}
var Be = function(e) {
	return e && "current" in e ? e.current : e;
}, Ve = Re, He = be(), Ue = "data-focus-on-hidden", We = { preventScroll: !0 }, Ge = b.forwardRef(function(e, t) {
	var n = b.useState(!1), r = n[0], i = n[1], o = b.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 ? !0 : p, h = e.scrollLock, g = h === void 0 ? !0 : h, _ = e.focusLock, v = _ === void 0 ? !0 : _, x = e.returnFocus, S = x === void 0 ? !0 : x, C = e.inert, w = e.allowPinchZoom, T = e.sideCar, E = e.className, ee = e.shouldIgnore, D = e.preventScrollOnFocus, O = e.style, te = e.as, ne = e.gapMode, k = y(e, [
		"children",
		"autoFocus",
		"shards",
		"crossFrame",
		"enabled",
		"scrollLock",
		"focusLock",
		"returnFocus",
		"inert",
		"allowPinchZoom",
		"sideCar",
		"className",
		"shouldIgnore",
		"preventScrollOnFocus",
		"style",
		"as",
		"gapMode"
	]), re = T, ie = a(a({}, r), {
		as: te,
		style: O,
		sideCar: T,
		shards: d,
		allowPinchZoom: w,
		gapMode: ne,
		inert: C,
		enabled: m && g
	}), A = b.useCallback(function(e) {
		c(e);
	}, []), j = b.useCallback(function() {
		c(null);
	}, []);
	return b.createElement(b.Fragment, null, b.createElement(Ve, {
		ref: t,
		sideCar: T,
		disabled: !(m && v),
		returnFocus: S,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: A,
		onDeactivation: j,
		className: E,
		whiteList: ee,
		lockProps: ie,
		focusOptions: D ? We : void 0,
		as: Te
	}, l), m && b.createElement(re, a({}, k, {
		sideCar: He,
		setLockProps: i,
		shards: d,
		activeNode: s
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function R(e) {
	"@babel/helpers - typeof";
	return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, R(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Ke(e, t) {
	if (R(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (R(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function qe(e) {
	var t = Ke(e, "string");
	return R(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Je(e, t, n) {
	return (t = qe(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Ye(e, t) {
	function n(e) {
		return e.displayName || e.name || "Component";
	}
	return function(r) {
		var i = [], a;
		function o() {
			a = e(i.map(function(e) {
				return e.props;
			})), t(a);
		}
		var s = /* @__PURE__ */ function(e) {
			l(t, e);
			function t() {
				return e.apply(this, arguments) || this;
			}
			t.peek = function() {
				return a;
			};
			var n = t.prototype;
			return n.componentDidMount = function() {
				i.push(this), o();
			}, n.componentDidUpdate = function() {
				o();
			}, n.componentWillUnmount = function() {
				var e = i.indexOf(this);
				i.splice(e, 1), o();
			}, n.render = function() {
				return /* @__PURE__ */ b.createElement(r, this.props);
			}, t;
		}(b.PureComponent);
		return Je(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var z = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, B = function(e) {
	return Array.isArray(e) ? e : [e];
}, Xe = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Ze = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Qe = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, $e = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, et = function(e) {
	return e.hasAttribute("inert");
}, tt = function(e, t) {
	return !e || $e(e) || !Ze(e) && !et(e) && t(Qe(e));
}, nt = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = tt(t, nt.bind(void 0, e));
	return e.set(t, r), r;
}, rt = function(e, t) {
	return e && !$e(e) ? ut(e) ? t(Qe(e)) : !1 : !0;
}, it = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = rt(t, it.bind(void 0, e));
	return e.set(t, r), r;
}, at = function(e) {
	return e.dataset;
}, ot = function(e) {
	return e.tagName === "BUTTON";
}, st = function(e) {
	return e.tagName === "INPUT";
}, ct = function(e) {
	return st(e) && e.type === "radio";
}, lt = function(e) {
	return !((st(e) || ot(e)) && (e.type === "hidden" || e.disabled));
}, ut = function(e) {
	var t = e.getAttribute(Ae);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, dt = function(e) {
	return !!(e && at(e)?.focusGuard);
}, ft = function(e) {
	return !dt(e);
}, pt = function(e) {
	return !!e;
}, mt = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, ht = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, gt = function(e, t, n) {
	return z(e).map(function(e, t) {
		var r = ht(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(mt);
}, _t = [
	"button:enabled",
	"select:enabled",
	"textarea:enabled",
	"input:enabled",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[tabindex]",
	"[contenteditable]",
	"[autofocus]"
].join(","), vt = `${_t}, [data-focus-guard]`, yt = function(e, t) {
	return z((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? vt : _t) ? [n] : [], yt(n));
	}, []);
}, bt = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? V([e.contentDocument.body], t) : [e];
}, V = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = yt(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return bt(e, t);
		}));
		return e.concat(a, n.parentNode ? z(n.parentNode.querySelectorAll(_t)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, xt = function(e) {
	return z(e.querySelectorAll(`[${ke}]`)).map(function(e) {
		return V([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, St = function(e, t) {
	return z(e).filter(function(e) {
		return nt(t, e);
	}).filter(function(e) {
		return lt(e);
	});
}, Ct = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), z(e).filter(function(e) {
		return it(t, e);
	});
}, wt = function(e, t, n) {
	return gt(St(V(e, n), t), !0, n);
}, H = function(e, t) {
	return gt(St(V(e), t), !1);
}, Tt = function(e, t) {
	return St(xt(e), t);
}, U = function(e, t) {
	return e.shadowRoot ? U(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : z(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? U(n, t) : !1;
		}
		return U(e, t);
	});
}, Et = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Dt = function(e) {
	return e.parentNode ? Dt(e.parentNode) : e;
}, Ot = function(e) {
	return B(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Ee);
		return e.push.apply(e, n ? Et(z(Dt(t).querySelectorAll(`[${Ee}="${n}"]:not([${De}="disabled"])`))) : [t]), e;
	}, []);
}, kt = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, W = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? W(t.shadowRoot) : t instanceof HTMLIFrameElement && kt(function() {
			return t.contentWindow.document;
		}) ? W(t.contentWindow.document) : t;
	}
}, At = function(e, t) {
	return e === t;
}, jt = function(e, t) {
	return !!z(e.querySelectorAll("iframe")).some(function(e) {
		return At(e, t);
	});
}, Mt = function(e, t) {
	return t === void 0 && (t = W(Xe(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Ot(e).some(function(e) {
		return U(e, t) || jt(e, t);
	});
}, Nt = function(e) {
	e === void 0 && (e = document);
	var t = W(e);
	return t ? z(e.querySelectorAll(`[${Oe}]`)).some(function(e) {
		return U(e, t);
	}) : !1;
}, Pt = function(e, t) {
	return t.filter(ct).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Ft = function(e, t) {
	return ct(e) && e.name ? Pt(e, t) : e;
}, It = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Ft(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Lt = function(e) {
	return e[0] && e.length > 1 ? Ft(e[0], e) : e[0];
}, Rt = function(e, t) {
	return e.indexOf(Ft(t, e));
}, zt = "NEW_FOCUS", Bt = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = dt(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? zt : d;
		if (d === -1) return zt;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = It(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Rt(e, t[0]), C = Rt(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Vt = function(e) {
	return function(t) {
		var n = at(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Ht = function(e, t, n) {
	var r = Ct(e.map(function(e) {
		return e.node;
	}).filter(Vt(n)));
	return r && r.length ? Lt(r) : Lt(Ct(t));
}, Ut = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Ut(e.parentNode.host || e.parentNode, t), t;
}, Wt = function(e, t) {
	for (var n = Ut(e), r = Ut(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Gt = function(e, t, n) {
	var r = B(e), i = B(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Wt(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Wt(a, e);
			t && (o = !o || U(t, o) ? t : Wt(t, o));
		});
	}), o;
}, Kt = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Tt(n, t));
	}, []);
}, qt = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(pt);
}, Jt = function(e, t) {
	var n = W(B(e).length > 0 ? document : Xe(e).ownerDocument), r = Ot(e).filter(ft), i = Gt(n || e, e, r), a = /* @__PURE__ */ new Map(), o = H(r, a), s = o.filter(function(e) {
		var t = e.node;
		return ft(t);
	});
	if (s[0]) {
		var c = H([i], a).map(function(e) {
			return e.node;
		}), l = qt(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Bt(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Ht(o, d, Kt(r, a)) || Ht(o, u, Kt(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Yt = function(e) {
	var t = Ot(e).filter(ft), n = gt(V([Gt(e, e, t)], !0), !0, !0), r = V(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: dt(t)
		};
	});
}, Xt = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Zt = 0, Qt = !1, $t = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Jt(e, t);
	if (!Qt && r) {
		if (Zt > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Qt = !0, setTimeout(function() {
				Qt = !1;
			}, 1);
			return;
		}
		Zt++, Xt(r.node, n.focusOptions), Zt--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function G(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var en = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: G(n),
		parent: G(n.parentElement),
		left: G(n.previousElementSibling),
		right: G(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: G(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, tn = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = wt([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, nn = function(e) {
	var t = en(e);
	return function() {
		return tn(t);
	};
}, rn = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = B(t);
	if (r.every(function(t) {
		return !U(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? wt(r, /* @__PURE__ */ new Map()) : H(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, an = function(e, t) {
	var n = t ? wt(B(e), /* @__PURE__ */ new Map()) : H(B(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, on = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, sn = function(e, t, n) {
	t === void 0 && (t = {});
	var r = on(t), i = rn(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Xt(a.node, r.focusOptions);
	}
}, cn = function(e, t) {
	t === void 0 && (t = {}), sn(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, ln = function(e, t) {
	t === void 0 && (t = {}), sn(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, un = function(e, t, n) {
	var r = an(e, t.onlyTabbable ?? !0)[n];
	r && Xt(r.node, t.focusOptions);
}, dn = function(e, t) {
	t === void 0 && (t = {}), un(e, t, "first");
}, fn = function(e, t) {
	t === void 0 && (t = {}), un(e, t, "last");
}, pn = function() {
	return document && document.activeElement === document.body;
}, mn = function() {
	return pn() || Nt();
}, K = null, q = null, hn = function() {
	return null;
}, J = null, Y = !1, gn = !1, _n = function() {
	return !0;
}, vn = function(e) {
	return (K.whiteList || _n)(e);
}, yn = function(e, t) {
	J = {
		observerNode: e,
		portaledElement: t
	};
}, bn = function(e) {
	return J && J.portaledElement === e;
};
function xn(e, t, n, r) {
	var i = null, a = e;
	do {
		var o = r[a];
		if (o.guard) o.node.dataset.focusAutoGuard && (i = o);
		else if (o.lockItem) {
			if (a !== e) return;
			i = null;
		} else break;
	} while ((a += n) !== t);
	i && (i.node.tabIndex = 0);
}
var Sn = function(e) {
	return e ? !!Y : Y === "meanwhile";
}, Cn = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, wn = function(e, t) {
	return t.some(function(t) {
		return Cn(e, t, t);
	});
}, Tn = function(e) {
	return H(e, /* @__PURE__ */ new Map());
}, En = function(e) {
	return !Tn([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Dn = function() {
	var e = !1;
	if (K) {
		var t = K, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || J && J.portaledElement;
		if (pn() && q && q !== document.body && (!document.body.contains(q) || En(q))) {
			var u = hn();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Be).filter(Boolean));
			if ((!d || vn(d)) && (r || function() {
				if (!Sn(o) || !c || !q || gn) return !1;
				var e = Tn(f), t = e.findIndex(function(e) {
					return e.node === q;
				});
				return t === 0 || t === e.length - 1;
			}() || !mn() || !q && i) && (l && !(Mt(f) || d && wn(d, f) || bn(d, l)) && (document && !q && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = $t(f, q, { focusOptions: s }), J = {})), q = document && document.activeElement, q !== document.body && (hn = nn(q)), Y = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Yt(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), xn(h, m.length, 1, m), xn(h, -1, -1, m));
			}
		}
	}
	return e;
}, On = function(e) {
	Dn() && e && (e.stopPropagation(), e.preventDefault());
}, kn = function() {
	return ze(Dn);
}, An = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || yn(n, t);
}, jn = function() {
	return null;
}, Mn = function(e) {
	var t = e.children;
	return /* @__PURE__ */ b.createElement("div", {
		onBlur: kn,
		onFocus: An
	}, t);
};
Mn.propTypes = {};
var Nn = function() {
	gn = !0;
}, Pn = function() {
	gn = !1, Y = "just", ze(function() {
		Y = "meanwhile";
	});
}, Fn = function() {
	document.addEventListener("focusin", On), document.addEventListener("focusout", kn), window.addEventListener("focus", Nn), window.addEventListener("blur", Pn);
}, In = function() {
	document.removeEventListener("focusin", On), document.removeEventListener("focusout", kn), window.removeEventListener("focus", Nn), window.removeEventListener("blur", Pn);
};
function Ln(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Rn = {
	moveFocusInside: $t,
	focusInside: Mt,
	focusNextElement: cn,
	focusPrevElement: ln,
	focusFirstElement: dn,
	focusLastElement: fn,
	captureFocusRestore: nn
};
function zn(e) {
	var t = e.slice(-1)[0];
	t && !K && Fn();
	var n = K, r = n && t && t.id === n.id;
	K = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (q = null, (!r || n.observed !== t.observed) && t.onActivation(Rn), Dn(!0), ze(Dn)) : (In(), q = null);
}
Me.assignSyncMedium(An), Ne.assignMedium(kn), Pe.assignMedium(function(e) {
	return e(Rn);
}), Se(Fe, Ye(Ln, zn)(jn));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Bn, Vn = function() {
	if (Bn) return Bn;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Hn() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Vn();
	return t && e.setAttribute("nonce", t), e;
}
function Un(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Wn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Gn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Hn()) && (Un(t, n), Wn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Kn = function() {
	var e = Gn();
	return function(t, n) {
		b.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, qn = function() {
	var e = Kn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Jn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Yn = function(e) {
	return parseInt(e || "", 10) || 0;
}, Xn = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Yn(n),
		Yn(r),
		Yn(i)
	];
}, Zn = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Jn;
	var t = Xn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Qn = qn(), $n = "data-scroll-locked", er = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ue} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${$n}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${F} {
    right: ${s}px ${r};
  }
  
  .${I} {
    margin-right: ${s}px ${r};
  }
  
  .${F} .${F} {
    right: 0 ${r};
  }
  
  .${I} .${I} {
    margin-right: 0 ${r};
  }
  
  body[${$n}] {
    ${de}: ${s}px;
  }
`;
}, tr = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, nr = function() {
	b.useEffect(function() {
		return document.body.setAttribute($n, (tr() + 1).toString()), function() {
			var e = tr() - 1;
			e <= 0 ? document.body.removeAttribute($n) : document.body.setAttribute($n, e.toString());
		};
	}, []);
}, rr = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	nr();
	var a = b.useMemo(function() {
		return Zn(i);
	}, [i]);
	return b.createElement(Qn, { styles: er(a, !t, i, n ? "" : "!important") });
}, ir = !1;
if (typeof window < "u") try {
	var ar = Object.defineProperty({}, "passive", { get: function() {
		return ir = !0, !0;
	} });
	window.addEventListener("test", ar, ar), window.removeEventListener("test", ar, ar);
} catch {
	ir = !1;
}
var X = ir ? { passive: !1 } : !1, or = function(e) {
	return e.tagName === "TEXTAREA";
}, sr = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !or(e) && n[t] === "visible");
}, cr = function(e) {
	return sr(e, "overflowY");
}, lr = function(e) {
	return sr(e, "overflowX");
}, ur = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), pr(e, r)) {
			var i = mr(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, dr = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, fr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, pr = function(e, t) {
	return e === "v" ? cr(t) : lr(t);
}, mr = function(e, t) {
	return e === "v" ? dr(t) : fr(t);
}, hr = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, gr = function(e, t, n, r, i) {
	var a = hr(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = mr(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && pr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, _r = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vr = function(e) {
	return [e.deltaX, e.deltaY];
}, yr = function(e) {
	return e && "current" in e ? e.current : e;
}, br = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, xr = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Sr = 0, Z = [];
function Cr(e) {
	var t = b.useRef([]), r = b.useRef([0, 0]), i = b.useRef(), a = b.useState(Sr++)[0], o = b.useState(qn)[0], s = b.useRef(e);
	b.useEffect(function() {
		s.current = e;
	}, [e]), b.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var t = n([e.lockRef.current], (e.shards || []).map(yr), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var c = b.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = _r(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = ur(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = ur(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return gr(h, t, e, h === "h" ? o : c, !0);
	}, []), l = b.useCallback(function(e) {
		var n = e;
		if (!(!Z.length || Z[Z.length - 1] !== o)) {
			var r = "deltaY" in n ? vr(n) : _r(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && br(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(yr).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), u = b.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: wr(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = b.useCallback(function(e) {
		r.current = _r(e), i.current = void 0;
	}, []), f = b.useCallback(function(t) {
		u(t.type, vr(t), t.target, c(t, e.lockRef.current));
	}, []), p = b.useCallback(function(t) {
		u(t.type, _r(t), t.target, c(t, e.lockRef.current));
	}, []);
	b.useEffect(function() {
		return Z.push(o), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, X), document.addEventListener("touchmove", l, X), document.addEventListener("touchstart", d, X), function() {
			Z = Z.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, X), document.removeEventListener("touchmove", l, X), document.removeEventListener("touchstart", d, X);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return b.createElement(b.Fragment, null, h ? b.createElement(o, { styles: xr(a) }) : null, m ? b.createElement(rr, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function wr(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Se(Ce, Cr);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Tr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Q = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Dr = {}, Or = 0, kr = function(e) {
	return e && (e.host || kr(e.parentNode));
}, Ar = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = kr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, jr = function(e, t, n, r) {
	var i = Ar(t, Array.isArray(e) ? e : [e]);
	Dr[n] || (Dr[n] = /* @__PURE__ */ new WeakMap());
	var a = Dr[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Q.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Q.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Er.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Or++, function() {
		o.forEach(function(e) {
			var t = Q.get(e) - 1, i = a.get(e) - 1;
			Q.set(e, t), a.set(e, i), t || (Er.has(e) || e.removeAttribute(r), Er.delete(e)), i || e.removeAttribute(n);
		}), Or--, Or || (Q = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Dr = {});
	};
}, Mr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Tr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), jr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Nr = qn(), Pr = "\n [" + Ue + "] {\n   pointer-events: none !important;\n }\n", Fr = function() {
	return b.createElement(Nr, { styles: Pr });
}, Ir = function(e) {
	return "current" in e ? e.current : e;
};
function Lr(t) {
	var n = t.setLockProps, r = t.onEscapeKey, i = t.onClickOutside, a = t.shards, o = t.onActivation, s = t.onDeactivation, c = t.noIsolation, l = t.activeNode, u = (0, b.useRef)(null), d = (0, b.useRef)(0);
	return b.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && r && r(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || a && a.map(Ir).some(function(t) {
				return t && t.contains(e.target) || t === e.target;
			}) || i && i(e);
		}, n = function(e) {
			t(e), d.current = e.touches.length;
		}, o = function(e) {
			d.current = e.touches.length;
		};
		if (l) return l.ownerDocument.addEventListener("keydown", e), l.ownerDocument.addEventListener("mousedown", t), l.ownerDocument.addEventListener("touchstart", n), l.ownerDocument.addEventListener("touchend", o), function() {
			l.ownerDocument.removeEventListener("keydown", e), l.ownerDocument.removeEventListener("mousedown", t), l.ownerDocument.removeEventListener("touchstart", n), l.ownerDocument.removeEventListener("touchend", o);
		};
	}, [
		l,
		i,
		r
	]), (0, b.useEffect)(function() {
		if (l) return o && o(l), function() {
			s && s();
		};
	}, [!!l]), (0, b.useEffect)(function() {
		if (!(c || !l)) return Mr(e([l], (a || []).map(Ir)), l.ownerDocument.body, Ue);
	}, [l, c]), (0, b.useEffect)(function() {
		return n({
			onMouseDown: function(e) {
				u.current = e.target;
			},
			onTouchStart: function(e) {
				u.current = e.target;
			}
		}), function() {
			n(!1);
		};
	}, []), b.createElement(Fr, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Rr = Se(He, Lr), zr = function(e) {
	return b.createElement(Rr, a({}, e));
}, Br = b.forwardRef(function(e, t) {
	return b.createElement(Ge, a({}, e, {
		ref: t,
		sideCar: zr
	}));
}), $ = i();
function Vr({ onClick: e }) {
	return /* @__PURE__ */ b.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Hr({ children: e = null }) {
	return /* @__PURE__ */ b.createElement("div", { className: "pgn__modal-content-container" }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useWindowSizeHook.js
function Ur() {
	let [e, t] = (0, b.useState)({
		width: void 0,
		height: void 0
	});
	return (0, b.useLayoutEffect)(() => {
		function e() {
			t({
				width: globalThis.innerWidth,
				height: globalThis.innerHeight
			});
		}
		return globalThis.addEventListener("resize", e), e(), () => globalThis.removeEventListener("resize", e);
	}, []), e;
}
//#endregion
//#region src/unfolding-scenario-block/student-ui/components/Intro.tsx
var Wr = ({ name: e, introduction: t, onLaunch: n, activityOpen: r }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "rounded-lg overflow-hidden scenario-intro bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(j, {
		className: "p-0",
		children: [/* @__PURE__ */ (0, $.jsxs)(f, {
			xs: "12",
			md: "8",
			className: "p-5 d-flex flex-column",
			children: [
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "scenario-name border border-primary d-flex align-items-center p-3 mb-5",
					children: [/* @__PURE__ */ (0, $.jsx)("div", {
						className: "border-right",
						children: /* @__PURE__ */ (0, $.jsx)(m, {
							src: S,
							className: "mr-2"
						})
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "ml-3 small-heading",
						children: e
					})]
				}),
				/* @__PURE__ */ (0, $.jsx)("h4", {
					className: "text-interact-accent",
					children: t.heading
				}),
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "flex-grow-1 text-sec-content",
					children: t.description
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex justify-content-end",
					children: /* @__PURE__ */ (0, $.jsx)(d, {
						variant: "unfolding-scenario-action",
						className: "rounded-pill",
						onClick: n,
						disabled: r,
						children: "Launch Interactive"
					})
				})
			]
		}), /* @__PURE__ */ (0, $.jsx)(f, {
			xs: "12",
			md: "4",
			className: "p-0",
			children: /* @__PURE__ */ (0, $.jsx)(k, {
				src: t.imageURL,
				style: {
					objectFit: "cover",
					width: "100%",
					height: "100%"
				}
			})
		})]
	})
}), Gr = ({ scenarios: e, selectedOptions: t }) => /* @__PURE__ */ (0, $.jsx)(le, {
	fluid: !0,
	children: e.map((e, n) => {
		let r = e.options[t.get(n)];
		return /* @__PURE__ */ (0, $.jsxs)(j, {
			className: "outcome-option-row",
			children: [/* @__PURE__ */ (0, $.jsxs)(f, {
				className: "bg-interact-raised rounded-lg p-3",
				children: [/* @__PURE__ */ (0, $.jsxs)("p", {
					className: "font-weight-bold text-interact-headings",
					children: ["Step ", n + 1]
				}), /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-interact-content",
					children: r.value
				})]
			}), /* @__PURE__ */ (0, $.jsx)(f, {
				className: "",
				children: /* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-interact-content",
					children: r.feedback
				})
			})]
		});
	})
}), Kr = ({ outcome: e, scenarios: t, selectedOptions: n, onRestart: r, onExit: i, imageURL: a }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: "d-flex flex-grow-1",
	children: [/* @__PURE__ */ (0, $.jsxs)("div", {
		className: "p-4-5",
		style: { flex: "0 0 60%" },
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-lg font-weight-bold text-interact-accent",
				children: e.heading
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "pb-3 text-interact-content",
				children: e.description
			}),
			e.displaySelectedOptions && /* @__PURE__ */ (0, $.jsx)(Gr, {
				scenarios: t,
				selectedOptions: n
			})
		]
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: "d-flex flex-column",
		style: {
			flex: "0 0 40%",
			backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${a}")`,
			backgroundSize: "cover"
		},
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "fixed-bottom align-content-end text-right p-4-5",
			children: [/* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "outline-unfolding-scenario-action",
				className: "rounded-pill",
				onClick: r,
				children: ["Restart ", /* @__PURE__ */ (0, $.jsx)(m, { src: w })]
			}), /* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "unfolding-scenario-action",
				className: "rounded-pill ml-3",
				onClick: i,
				children: ["Exit ", /* @__PURE__ */ (0, $.jsx)(m, { src: p })]
			})]
		})
	})]
}), qr = ({ index: e, total: t, onReset: n, className: r }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: `align-items-center justify-content-center bg-main ${r}`,
	children: [
		/* @__PURE__ */ (0, $.jsx)(g, {
			className: "text-icon-action-default bg-main mr-3",
			src: w,
			onClick: n,
			alt: "Reset activity",
			size: "inline"
		}),
		Array.from(Array(t)).map((n, r) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: `step-indicator d-flex justify-content-center align-items-center rounded-pill p-1 ${r <= e ? "bg-icon-default text-interact-content" : "bg-emphasis text-content"}`,
			children: r + 1
		}), r < t - 1 && /* @__PURE__ */ (0, $.jsx)("div", { className: "step-indicator-separator" })] })),
		e >= t && /* @__PURE__ */ (0, $.jsx)("span", {
			className: "ml-4 text-content font-size-md font-weight-bold",
			children: "Completed!"
		})
	]
}), Jr = ({ onClose: e }) => /* @__PURE__ */ (0, $.jsx)(g, {
	className: "text-icon-action-sec-neutral",
	src: p,
	onClick: e,
	alt: "Close activity"
}), Yr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex w-100 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsx)(le, {
		fluid: !0,
		children: /* @__PURE__ */ (0, $.jsxs)(j, {
			className: "px-3",
			children: [
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex align-items-center mx-3 small-heading text-interact-headings",
					children: t
				}),
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex justify-content-center",
					children: /* @__PURE__ */ (0, $.jsx)(qr, {
						onReset: n,
						index: r,
						total: i,
						className: "d-inline-flex rounded-lg-bottom py-3 pl-2 pr-3"
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex justify-content-end align-items-center mx-3",
					children: /* @__PURE__ */ (0, $.jsx)(Jr, { onClose: e })
				})
			]
		})
	})
}), Xr = ({ onClose: e, title: t, activeScenarioIndex: n, totalScenarios: r }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex mx-2 mt-4 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(le, {
		fluid: !0,
		className: "d-flex align-items-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)(Zr, {
				current: Math.min(n + 1, r),
				total: r
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "px-2 mx-1 flex-grow-1",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "typography-headings font-weight-bold font-size-md text-interact-headings",
					children: t
				}), n >= r && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "text-interact-accent font-size-sm-md font-weight-lessbold typography-headings mt-n1",
					children: "Completed!"
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)(Jr, { onClose: e })
		]
	})
}), Zr = ({ current: e, total: t }) => {
	let n = 52 * Math.PI, r = n * (1 - e / t);
	return /* @__PURE__ */ (0, $.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: 56,
		height: 56,
		children: [
			/* @__PURE__ */ (0, $.jsx)("circle", {
				r: 26,
				cx: 28,
				cy: 28,
				fill: "none",
				stroke: "var(--color-interact-raised-emphasis)",
				"stroke-width": 4,
				"stroke-dashoffset": n - r,
				"stroke-dasharray": n,
				transform: `rotate(${e / t * 360 - 90} 28 28)`
			}),
			/* @__PURE__ */ (0, $.jsx)("circle", {
				r: 26,
				cx: 28,
				cy: 28,
				fill: "none",
				stroke: "var(--color-interact-emphasis)",
				"stroke-width": 4,
				"stroke-dashoffset": r,
				"stroke-dasharray": n,
				transform: "rotate(-90 28 28)"
			}),
			/* @__PURE__ */ (0, $.jsx)("foreignObject", {
				x: "0",
				y: "0",
				width: 56,
				height: 56,
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "h-100 d-flex justify-content-center align-items-center text-interact-content font-size-sm",
					children: [
						e,
						" of ",
						t
					]
				})
			})
		]
	});
}, Qr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex w-100 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(le, {
		className: "mx-3",
		fluid: !0,
		children: [/* @__PURE__ */ (0, $.jsxs)(j, { children: [/* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex align-items-center small-heading text-interact-headings",
			children: t
		}), /* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex justify-content-end align-items-center",
			children: /* @__PURE__ */ (0, $.jsx)(Jr, { onClose: e })
		})] }), /* @__PURE__ */ (0, $.jsx)(j, { children: /* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex justify-content-center",
			children: /* @__PURE__ */ (0, $.jsx)(qr, {
				onReset: n,
				index: r,
				total: i,
				className: "d-flex w-100 p-3 rounded-lg"
			})
		}) })]
	})
}), $r = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => {
	let a = Ur().width || window.innerWidth;
	return a < P.extraSmall.maxWidth ? /* @__PURE__ */ (0, $.jsx)(Xr, {
		onClose: e,
		title: t,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : a < P.large.maxWidth ? /* @__PURE__ */ (0, $.jsx)(Qr, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : /* @__PURE__ */ (0, $.jsx)(Yr, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	});
}, ei = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, $.jsxs)("button", {
	className: `scenario-option-btn rounded-sm d-flex justify-content-start border-0 overflow-hidden align-items-center p-0 mb-3 ${n ? "text-interact-content-inverse bg-interact-raised-emphasis active" : "bg-interact-raised text-interact-content"} ${r ? "pre-selected" : ""}`,
	onClick: e,
	children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: "flex-grow-1 text-left mx-3 px-3 my-3",
		children: t
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: "h-100 bg-interact-raised-emphasis d-flex align-items-center hover-arrow",
		children: /* @__PURE__ */ (0, $.jsx)(m, {
			src: x,
			size: "lg",
			className: "text-icon-inverse mx-3"
		})
	})]
}), ti = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "pt-3 mx-3 h-100",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "position-relative w-100 h-100 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: `w-50 position-absolute ${t === null ? "" : "active"} options-pane options-pane-1`,
				children: [
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "font-size-lg font-weight-bold text-interact-accent",
						children: e.heading
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-interact-content pb-3",
						children: e.description
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "d-flex align-items-center mt-3 mb-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "arrow-bubble p-2 text-icon-interact-default",
							children: /* @__PURE__ */ (0, $.jsx)(m, { src: S })
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-interact-headings font-size-medium font-weight-bold pl-2",
							children: e.instructionTitle
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-interact-content",
						children: e.instructionDescription
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: `d-flex w-50 position-absolute ${t === null ? "" : "active"} options-pane options-pane-2`,
				children: [t !== null && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex mr-3 align-items-center",
					children: /* @__PURE__ */ (0, $.jsx)(g, {
						className: "text-icon-action-sec-neutral",
						src: C,
						alt: "Return",
						onClick: () => a(null)
					})
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex-grow-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-interact-headings font-size-md font-weight-bold",
							children: e.prompt
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex flex-column flex-grow-1",
							children: e.options.map((e, r) => /* @__PURE__ */ (0, $.jsx)(ei, {
								active: t === r,
								onClick: () => a(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, $.jsx)(d, {
								variant: "unfolding-scenario-action",
								className: "rounded-pill",
								disabled: !r,
								onClick: i,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: `w-50 position-absolute d-flex align-items-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : e.options[t].feedback
			})
		]
	})
}), ni = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: "position-relative w-100 h-100 overflow-hidden",
	children: [/* @__PURE__ */ (0, $.jsxs)("div", {
		className: `w-100 h-100 position-absolute p-4 d-flex flex-column ${t === null ? "" : "active"} tablet-options-pane tablet-options-pane-1`,
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", { children: [
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "font-size-lg font-weight-bold text-interact-accent",
					children: e.heading
				}),
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-interact-content pb-3",
					children: e.description
				}),
				/* @__PURE__ */ (0, $.jsxs)("div", {
					className: "d-flex align-items-center mt-3 mb-2",
					children: [/* @__PURE__ */ (0, $.jsx)("div", {
						className: "arrow-bubble p-2 text-icon-interact-default",
						children: /* @__PURE__ */ (0, $.jsx)(m, { src: S })
					}), /* @__PURE__ */ (0, $.jsx)("span", {
						className: "text-interact-headings font-size-medium font-weight-bold pl-2",
						children: e.instructionTitle
					})]
				})
			] }),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-interact-content",
				children: e.instructionDescription
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "flex-grow-1",
				children: [/* @__PURE__ */ (0, $.jsx)("p", {
					className: "text-interact-headings font-size-md font-weight-bold",
					children: e.prompt
				}), /* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex flex-column flex-grow-1",
					children: e.options.map((e, r) => /* @__PURE__ */ (0, $.jsx)(ei, {
						active: t === r,
						onClick: () => a(r),
						preSelected: n.has(r),
						children: e.value
					}))
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					disabled: !r,
					onClick: i,
					children: "Continue"
				})
			})
		]
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: `w-100 h-100 position-absolute d-flex flex-column justify-content-center p-4-5 bg-interact-raised ${t === null ? "" : "active"} tablet-options-pane tablet-options-pane-2`,
		children: t !== null && /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-interact-headings font-size-md font-weight-bold",
				children: e.options[t].value
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-interact-content",
				children: e.options[t].feedback
			}),
			/* @__PURE__ */ (0, $.jsx)(g, {
				className: "text-icon-action-sec-neutral",
				src: C,
				alt: "Return",
				onClick: () => a(null)
			})
		] })
	})]
}), ri = ({ scenario: e, activeOptionIndex: t, preSelectedOptions: n, isContinueEnabled: r, onContinue: i, onSelectOption: a }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "pt-3 mx-3 h-100",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "position-relative w-100 h-100 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: `w-50 position-absolute ${t === null ? "" : "active"} options-pane options-pane-1`,
				children: [
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "font-size-lg font-weight-bold text-interact-accent",
						children: e.heading
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-interact-content pb-3",
						children: e.description
					}),
					/* @__PURE__ */ (0, $.jsxs)("div", {
						className: "d-flex align-items-center mt-3 mb-2",
						children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: "arrow-bubble p-2 text-icon-interact-default",
							children: /* @__PURE__ */ (0, $.jsx)(m, { src: S })
						}), /* @__PURE__ */ (0, $.jsx)("span", {
							className: "text-interact-headings font-size-medium font-weight-bold pl-2",
							children: e.instructionTitle
						})]
					}),
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-interact-content",
						children: e.instructionDescription
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: `d-flex w-50 position-absolute ${t === null ? "" : "active"} options-pane options-pane-2`,
				children: [t !== null && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex mr-3 align-items-center",
					children: /* @__PURE__ */ (0, $.jsx)(g, {
						className: "text-icon-action-sec-neutral",
						src: C,
						alt: "Return",
						onClick: () => a(null)
					})
				}), /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "flex-grow-1",
					children: [
						/* @__PURE__ */ (0, $.jsx)("p", {
							className: "text-interact-headings font-size-md font-weight-bold",
							children: e.prompt
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex flex-column flex-grow-1",
							children: e.options.map((e, r) => /* @__PURE__ */ (0, $.jsx)(ei, {
								active: t === r,
								onClick: () => a(r),
								preSelected: n.has(r),
								children: e.value
							}))
						}),
						/* @__PURE__ */ (0, $.jsx)("div", {
							className: "d-flex justify-content-end",
							children: /* @__PURE__ */ (0, $.jsx)(d, {
								variant: "unfolding-scenario-action",
								className: "rounded-pill",
								disabled: !r,
								onClick: i,
								children: "Continue"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: `w-50 position-absolute d-flex align-items-center ${t === null ? "" : "active"} options-pane options-pane-3`,
				children: t === null ? null : e.options[t].feedback
			})
		]
	})
}), ii = ({ interactionType: e, scenario: t, onContinue: n, onSelectOption: r }) => {
	let i = Ur(), [a, o] = (0, b.useState)(null), [s, c] = (0, b.useState)(/* @__PURE__ */ new Set()), l = e == "Explore" && s.size == t.options.length || e == "SelectOne" && a !== null, u = i.width || window.innerWidth;
	return u < P.extraSmall.maxWidth ? /* @__PURE__ */ (0, $.jsx)(ri, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	}) : u < P.large.maxWidth ? /* @__PURE__ */ (0, $.jsx)(ni, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	}) : /* @__PURE__ */ (0, $.jsx)(ti, {
		scenario: t,
		activeOptionIndex: a,
		preSelectedOptions: s,
		isContinueEnabled: l,
		onContinue: n,
		onSelectOption: (e) => {
			e === null ? o(null) : (c(new Set([...s, e])), o(e), r(e));
		}
	});
}, ai = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, $.jsx)(Br, {
	allowPinchZoom: !0,
	scrollLock: !0,
	enabled: !0,
	onEscapeKey: e,
	onClickOutside: e,
	className: "pgn__modal-layer",
	children: /* @__PURE__ */ (0, $.jsxs)(Hr, { children: [/* @__PURE__ */ (0, $.jsx)(Vr, { onClick: e }), /* @__PURE__ */ (0, $.jsx)("div", {
		role: "dialog",
		"aria-label": t,
		className: "pgn__modal pgn__modal-md pgn__modal-default p-3",
		children: n
	})] })
}), oi = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(ai, {
	onCancel: e,
	title: "Leave interactive?",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "m-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-md text-interact-headings font-weight-bold",
				children: "Leave interactive?"
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-sec-content",
				children: "If you leave now, your progress in this interactive will be lost."
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex justify-content-between",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "outline-unfolding-scenario-action",
					className: "rounded-pill",
					onClick: t,
					children: "Leave"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					onClick: e,
					children: "Stay"
				})]
			})
		]
	})
}), si = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(ai, {
	onCancel: e,
	title: "Restart interactive?",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "m-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-md text-interact-headings font-weight-bold",
				children: "Restart interactive?"
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-sec-content",
				children: "If you restart, your progress in this interactive will be lost."
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex justify-content-between",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "outline-unfolding-scenario-action",
					className: "rounded-pill",
					onClick: t,
					children: "Restart"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					onClick: e,
					children: "Stay"
				})]
			})
		]
	})
}), ci = ({ data: e, onExit: t }) => {
	let [n, r] = (0, b.useState)(0), [i, a] = (0, b.useState)(null), [o, s] = (0, b.useState)(/* @__PURE__ */ new Map());
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "unfolding-scenario-activity-wrapper min-vh-100 bg-interact-default d-flex flex-column",
		children: [
			/* @__PURE__ */ (0, $.jsx)($r, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, $.jsx)(ii, {
				scenario: e.scenarios[n],
				interactionType: e.interactionType,
				onContinue: () => {
					(0, b.startTransition)(() => {
						r(n + 1);
					});
				},
				onSelectOption: (e) => s(new Map(o).set(n, e))
			}, n) : e.outcome && /* @__PURE__ */ (0, $.jsx)(Kr, {
				outcome: e.outcome,
				scenarios: e.scenarios,
				selectedOptions: o,
				onRestart: () => a("restart"),
				onExit: t,
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, $.jsx)(oi, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, $.jsx)(si, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, li = /* @__PURE__ */ t(v(), 1), ui = ({ children: e, className: t, cssContent: n, themeUrls: r, title: i, onClose: a }) => {
	let [o, s] = (0, b.useState)(null);
	if (o === null) {
		let e = document.createElement("div");
		e.className = t, s(e);
	}
	return (0, b.useEffect)(() => {
		if (o) {
			let e = window.open();
			if (e == null) {
				alert("Activity failed to open in a popup window or new tab. Please enable popups and try again."), a();
				return;
			}
			e.addEventListener("beforeunload", () => {
				a();
			});
			let t = e.document.createElement("meta");
			t.name = "viewport", t.content = "width=device-width,initial-scale=1", e.document.head.appendChild(t);
			let s = e.document.createElement("title");
			s.textContent = i, e.document.head.appendChild(s), e.document.body.appendChild(o), r.forEach((t) => {
				let n = e.document.createElement("link");
				n.rel = "stylesheet", n.href = t, e.document.head.appendChild(n.cloneNode());
			});
			let c = e.document.createElement("style");
			return c.textContent = n, e.document.head.appendChild(c), () => e.close();
		}
	}, [o]), o && (0, li.createPortal)(e, o);
}, di = ({ data: e, themeUrls: t, cssContent: n }) => {
	let [r, i] = (0, b.useState)(!1), a = "xblock-unfolding-scenario-wrapper";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: a,
		children: [r && /* @__PURE__ */ (0, $.jsx)(ui, {
			title: e.scenarioData.name,
			className: `${a} min-vh-100`,
			themeUrls: t,
			cssContent: n,
			onClose: () => i(!1),
			children: /* @__PURE__ */ (0, $.jsx)(ci, {
				data: e.scenarioData,
				onExit: () => i(!1)
			})
		}), /* @__PURE__ */ (0, $.jsx)(Wr, {
			name: e.scenarioData.name,
			introduction: e.scenarioData.introduction,
			onLaunch: () => i(!0),
			activityOpen: r
		})]
	});
}, fi = ".xblock-unfolding-scenario-wrapper{--color-action-default:var(--pgn-unfolding-scenario-color-action-default,#3874bc);--color-background-interactive:var(--pgn-unfolding-scenario-color-background-interactive,#8cc9d1);--color-text-interactive:var(--pgn-unfolding-scenario-color-text-interactive,#2f808e);--color-bg-emphasis:var(--pgn-unfolding-scenario-color-bg-emphasis,#223e5d);--color-bg-main:var(--pgn-unfolding-scenario-color-bg-main,#1b324a);--color-border-interact-default:var(--pgn-unfolding-scenario-color-border-interact-default,#b2d8de);--color-border-interact-emphasis:var(--pgn-unfolding-scenario-color-border-interact-emphasis,#327d8a);--color-border-sec-action-focus:var(--pgn-unfolding-scenario-color-border-sec-action-focus,#0e1d2f);--color-icon-action-sec-default:var(--pgn-unfolding-scenario-color-icon-action-sec-default,#3874bc);--color-icon-interact-default:var(--pgn-unfolding-scenario-color-icon-interact-default,#327d8a);--color-interact-default:var(--pgn-unfolding-scenario-color-interact-default,#ecf5f7);--color-interact-emphasis:var(--pgn-unfolding-scenario-color-interact-emphasis,#d9ebef);--color-interact-raised-emphasis:var(--pgn-unfolding-scenario-color-interact-raised-emphasis,#327d8a);--color-txt-interact-accent:var(--pgn-unfolding-scenario-color-txt-interact-accent,#2a578d);--color-txt-interact-content-inverse:var(--pgn-unfolding-scenario-color-txt-interact-content-inverse,#fff);--color-txt-interact-content:var(--pgn-unfolding-scenario-color-txt-interact-content,#223e5d);--color-txt-interact-headings:var(--pgn-unfolding-scenario-color-txt-interact-headings,#327d8a);--color-txt-action-prim-default:var(--pgn-unfolding-scenario-color-txt-action-prim-default,#fff);--color-txt-content:var(--pgn-unfolding-scenario-color-txt-content,#fff);--color-txt-sec-content:var(--pgn-unfolding-scenario-color-txt-sec-content,#223e5d);--color-icon-action-default:var(--pgn-unfolding-scenario-color-icon-action-default,#fff);--color-border-default:var(--pgn-unfolding-scenario-color-border-default,#4e657d);--color-interact-raised:var(--pgn-unfolding-scenario-color-interact-raised,#fff);--color-icon-inverse:var(--pgn-unfolding-scenario-color-icon-inverse,#fff);--color-icon-default:var(--pgn-unfolding-scenario-color-icon-default,#8cc4ce);--color-icon-action-sec-neutral:var(--pgn-unfolding-scenario-color-icon-action-sec-neutral,#1c3a5e);--btn-min-width:var(--pgn-unfolding-scenario-btn-min-width,200px)}.xblock-unfolding-scenario-wrapper .text-interact-headings{color:var(--color-txt-interact-headings)!important}.xblock-unfolding-scenario-wrapper .text-interact-accent{color:var(--color-txt-interact-accent)!important}.xblock-unfolding-scenario-wrapper .text-interact-content{color:var(--color-txt-interact-content)!important}.xblock-unfolding-scenario-wrapper .text-interact-content-inverse{color:var(--color-txt-interact-content-inverse)!important}.xblock-unfolding-scenario-wrapper .text-content{color:var(--color-txt-content)!important}.xblock-unfolding-scenario-wrapper .text-sec-content{color:var(--color-txt-sec-content)!important}.xblock-unfolding-scenario-wrapper .text-icon-inverse{color:var(--color-icon-inverse)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-default{color:var(--color-icon-action-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-default{color:var(--color-icon-action-sec-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-neutral{color:var(--color-icon-action-sec-neutral)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised-emphasis{background-color:var(--color-interact-raised-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised{background-color:var(--color-interact-raised)!important}.xblock-unfolding-scenario-wrapper .bg-emphasis{background-color:var(--color-bg-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-icon-default{background-color:var(--color-icon-default)!important}.xblock-unfolding-scenario-wrapper .bg-interact-default{background-color:var(--color-interact-default)!important}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--color-bg-main)!important}.xblock-unfolding-scenario-wrapper .rounded-lg-bottom{border-bottom-right-radius:var(--pgn-size-border-radius-lg)!important;border-bottom-left-radius:var(--pgn-size-border-radius-lg)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{color:var(--color-text-interactive);background-color:var(--color-interact-emphasis);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{color:var(--color-interact-raised-emphasis);zoom:2}.xblock-unfolding-scenario-wrapper .btn-unfolding-scenario-action{--pgn-btn-bg:var(--color-action-default);--pgn-btn-color:var(--color-txt-action-prim-default);--pgn-btn-hover-bg:var(--color-action-default);--pgn-btn-hover-color:var(--color-txt-action-prim-default);--pgn-btn-focus-bg:var(--color-action-default);--pgn-btn-focus-color:var(--color-txt-action-prim-default);--pgn-btn-focus-outline-color:var(--color-border-sec-action-focus);--pgn-btn-active-bg:var(--color-action-default);--pgn-btn-active-color:var(--color-txt-action-prim-default)}.xblock-unfolding-scenario-wrapper .btn-outline-unfolding-scenario-action{--pgn-size-btn-border-width:2px;--pgn-btn-bg:var(--color-txt-action-prim-default);--pgn-btn-color:var(--color-action-default);--pgn-btn-border-color:var(--color-action-default);--pgn-btn-hover-bg:var(--color-txt-action-prim-default);--pgn-btn-hover-color:var(--color-action-default);--pgn-btn-hover-border-color:var(--color-action-default);--pgn-btn-focus-bg:var(--color-txt-action-prim-default);--pgn-btn-focus-color:var(--color-action-default);--pgn-btn-focus-border-color:var(--color-action-default);--pgn-btn-focus-outline-color:var(--color-action-default);--pgn-btn-active-bg:var(--color-txt-action-prim-default);--pgn-btn-active-color:var(--color-action-default);--pgn-btn-active-border-color:var(--color-action-default)}.xblock-unfolding-scenario-wrapper .btn{min-width:var(--btn-min-width);padding:var(--pgn-spacing-spacer-2-5) var(--pgn-spacing-spacer-4-5)}.xblock-unfolding-scenario-wrapper .small-heading{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold)}.xblock-unfolding-scenario-wrapper .font-weight-lessbold{font-weight:calc(var(--pgn-typography-font-weight-bold) - 100)}.xblock-unfolding-scenario-wrapper .typography-headings{font-family:var(--pgn-typography-headings-font-family)}.xblock-unfolding-scenario-wrapper .font-size-lg{font-size:calc(var(--pgn-typography-font-size-base) * 1.25)}.xblock-unfolding-scenario-wrapper .font-size-md{font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .font-size-sm-md{font-size:calc(var(--pgn-typography-font-size-base) * .875)}.xblock-unfolding-scenario-wrapper .font-size-sm{font-size:calc(var(--pgn-typography-font-size-base) * .75)}.xblock-unfolding-scenario-wrapper .m-4-5{margin:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .ml-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mr-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mt-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mb-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .p-4-5{padding:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pl-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pr-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pt-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pb-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .unfolding-scenario-activity-wrapper{height:100%}.xblock-unfolding-scenario-wrapper .step-indicator{height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .step-indicator-separator{background-color:var(--color-border-default);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--color-interact-emphasis);color:var(--color-icon-interact-default);border:1px solid var(--color-border-interact-default);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2)}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--color-border-interact-emphasis)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{min-width:10px}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--color-option-focus-border)}.xblock-unfolding-scenario-wrapper .outcome-option-row+.outcome-option-row{margin-top:var(--pgn-spacing-spacer-4);padding-top:var(--pgn-spacing-spacer-4);border-top:1px solid var(--color-border-interact-default)}.xblock-unfolding-scenario-wrapper .options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .options-pane-2{left:50%}.xblock-unfolding-scenario-wrapper .options-pane-3{left:100%}.xblock-unfolding-scenario-wrapper .active.options-pane-1{left:-50%}.xblock-unfolding-scenario-wrapper .active.options-pane-2{left:0%}.xblock-unfolding-scenario-wrapper .active.options-pane-3{left:50%}.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:left .5s}@media (prefers-reduced-motion:reduce){.xblock-unfolding-scenario-wrapper .tablet-options-pane{transition:unset}}.xblock-unfolding-scenario-wrapper .tablet-options-pane-1{left:0%}.xblock-unfolding-scenario-wrapper .tablet-options-pane-2{border-left:var(--pgn-spacing-spacer-3) solid var(--color-interact-default);left:100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-1{left:-100%}.xblock-unfolding-scenario-wrapper .active.tablet-options-pane-2{left:0%}", pi = async (e, t, n) => {
	let r = await mi(n.config.mfe_config_api);
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: fi
	})(/* @__PURE__ */ (0, $.jsx)(di, {
		data: n.data,
		themeUrls: r,
		cssContent: fi
	}));
}, mi = async (e) => {
	let t = {};
	try {
		t = (await (await fetch(e)).json()).PARAGON_THEME_URLS;
	} catch (e) {
		console.error("Failed to fetch theme URLs:", e);
	}
	let n = t?.default?.light;
	return [
		"https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/core.min.css",
		t?.core?.urls?.brandOverride,
		"https://cdn.jsdelivr.net/npm/@openedx/paragon@23/dist/light.min.css",
		t?.variants?.[n]?.urls?.brandOverride
	].filter(Boolean);
};
//#endregion
export { pi as renderBlock };
