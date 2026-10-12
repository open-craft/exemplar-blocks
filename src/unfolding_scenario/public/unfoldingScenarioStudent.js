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
}, ce = {
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
var le = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(le || {}), ue = /* @__PURE__ */ (0, b.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ b.createElement(D, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, T.default)(a.className, e && le[e])
}, t)), P = "right-scroll-bar-position", F = "width-before-scroll-bar", de = "with-scroll-bars-hidden", fe = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function pe(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function me(e, t) {
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
var he = typeof window < "u" ? b.useLayoutEffect : b.useEffect, ge = /* @__PURE__ */ new WeakMap();
function _e(e, t) {
	var n = me(t || null, function(t) {
		return e.forEach(function(e) {
			return pe(e, t);
		});
	});
	return he(function() {
		var t = ge.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || pe(e, null);
			}), i.forEach(function(e) {
				r.has(e) || pe(e, a);
			});
		}
		ge.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ve(e) {
	return e;
}
function ye(e, t) {
	t === void 0 && (t = ve);
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
function be(e, t) {
	return t === void 0 && (t = ve), ye(e, t);
}
function xe(e) {
	e === void 0 && (e = {});
	var t = ye(null);
	return t.options = a({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Se = function(e) {
	var t = e.sideCar, n = y(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return b.createElement(r, a({}, n));
};
Se.isSideCarExport = !0;
function Ce(e, t) {
	return e.useMedium(t), Se;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var we = xe(), Te = function() {}, Ee = b.forwardRef(function(e, t) {
	var n = b.useRef(null), r = b.useState({
		onScrollCapture: Te,
		onWheelCapture: Te,
		onTouchMoveCapture: Te
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
	]), w = p, T = _e([n, t]), E = a(a({}, C), i);
	return b.createElement(b.Fragment, null, d && b.createElement(w, {
		sideCar: we,
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
Ee.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Ee.classNames = {
	fullWidth: F,
	zeroRight: P
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var De = "data-focus-lock", Oe = "data-focus-lock-disabled", ke = "data-no-focus-lock", Ae = "data-autofocus-inside", je = "data-no-autofocus", I = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Me = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: I
	}), n, n && /* @__PURE__ */ b.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: I
	}));
};
Me.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Ne = be({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Pe = be(), Fe = be(), Ie = xe({
	async: !0,
	ssr: typeof document < "u"
}), Le = /* @__PURE__ */ (0, b.createContext)(void 0), Re = [], ze = /* @__PURE__ */ (0, b.forwardRef)(function(e, t) {
	var n, r = (0, b.useState)(), i = r[0], a = r[1], o = (0, b.useRef)(), c = (0, b.useRef)(!1), l = (0, b.useRef)(null), u = (0, b.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, x = e.autoFocus, S = x === void 0 ? !0 : x;
	e.allowTextSelection;
	var C = e.group, w = e.className, T = e.whiteList, E = e.hasPositiveIndices, ee = e.shards, D = ee === void 0 ? Re : ee, O = e.as, te = O === void 0 ? "div" : O, ne = e.lockProps, k = ne === void 0 ? {} : ne, re = e.sideCar, ie = e.returnFocus, A = ie === void 0 ? !1 : ie, j = e.focusOptions, M = e.onActivation, N = e.onDeactivation, ae = (0, b.useState)({})[0], oe = (0, b.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		o.current && M && M(o.current), c.current = !0, u();
	}, [M]), se = (0, b.useCallback)(function() {
		c.current = !1, N && N(o.current), u();
	}, [N]), ce = (0, b.useCallback)(function(e) {
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
	}, [A]), le = (0, b.useCallback)(function(e) {
		c.current && Ne.useMedium(e);
	}, []), ue = Pe.useMedium, P = (0, b.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), F = s((n = {}, n[Oe] = p && "disabled", n[De] = C, n), k), de = h !== !0, fe = de && h !== "tail", pe = _e([t, P]), me = (0, b.useMemo)(function() {
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
	return /* @__PURE__ */ b.createElement(b.Fragment, null, de && [/* @__PURE__ */ b.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: I
	}), E ? /* @__PURE__ */ b.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: I
	}) : null], !p && /* @__PURE__ */ b.createElement(re, {
		id: ae,
		sideCar: Ie,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: S,
		whiteList: T,
		shards: D,
		onActivation: oe,
		onDeactivation: se,
		returnFocus: ce,
		focusOptions: j,
		noFocusGuards: h
	}), /* @__PURE__ */ b.createElement(te, s({ ref: pe }, F, {
		className: w,
		onBlur: ue,
		onFocus: le
	}), /* @__PURE__ */ b.createElement(Le.Provider, { value: me }, d)), fe && /* @__PURE__ */ b.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: I
	}));
});
ze.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Be(e) {
	setTimeout(e, 1);
}
var Ve = function(e) {
	return e && "current" in e ? e.current : e;
}, He = ze, Ue = xe(), We = "data-focus-on-hidden", Ge = { preventScroll: !0 }, Ke = b.forwardRef(function(e, t) {
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
	return b.createElement(b.Fragment, null, b.createElement(He, {
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
		focusOptions: D ? Ge : void 0,
		as: Ee
	}, l), m && b.createElement(re, a({}, k, {
		sideCar: Ue,
		setLockProps: i,
		shards: d,
		activeNode: s
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function L(e) {
	"@babel/helpers - typeof";
	return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, L(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function qe(e, t) {
	if (L(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (L(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Je(e) {
	var t = qe(e, "string");
	return L(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Ye(e, t, n) {
	return (t = Je(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Xe(e, t) {
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
		return Ye(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var R = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, z = function(e) {
	return Array.isArray(e) ? e : [e];
}, Ze = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Qe = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, $e = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, et = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, tt = function(e) {
	return e.hasAttribute("inert");
}, nt = function(e, t) {
	return !e || et(e) || !Qe(e) && !tt(e) && t($e(e));
}, rt = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = nt(t, rt.bind(void 0, e));
	return e.set(t, r), r;
}, it = function(e, t) {
	return e && !et(e) ? dt(e) ? t($e(e)) : !1 : !0;
}, at = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = it(t, at.bind(void 0, e));
	return e.set(t, r), r;
}, ot = function(e) {
	return e.dataset;
}, st = function(e) {
	return e.tagName === "BUTTON";
}, ct = function(e) {
	return e.tagName === "INPUT";
}, lt = function(e) {
	return ct(e) && e.type === "radio";
}, ut = function(e) {
	return !((ct(e) || st(e)) && (e.type === "hidden" || e.disabled));
}, dt = function(e) {
	var t = e.getAttribute(je);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, ft = function(e) {
	return !!(e && ot(e)?.focusGuard);
}, pt = function(e) {
	return !ft(e);
}, mt = function(e) {
	return !!e;
}, ht = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, gt = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, _t = function(e, t, n) {
	return R(e).map(function(e, t) {
		var r = gt(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(ht);
}, vt = [
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
].join(","), yt = `${vt}, [data-focus-guard]`, bt = function(e, t) {
	return R((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? yt : vt) ? [n] : [], bt(n));
	}, []);
}, xt = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? B([e.contentDocument.body], t) : [e];
}, B = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = bt(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return xt(e, t);
		}));
		return e.concat(a, n.parentNode ? R(n.parentNode.querySelectorAll(vt)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, St = function(e) {
	return R(e.querySelectorAll(`[${Ae}]`)).map(function(e) {
		return B([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Ct = function(e, t) {
	return R(e).filter(function(e) {
		return rt(t, e);
	}).filter(function(e) {
		return ut(e);
	});
}, wt = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), R(e).filter(function(e) {
		return at(t, e);
	});
}, Tt = function(e, t, n) {
	return _t(Ct(B(e, n), t), !0, n);
}, V = function(e, t) {
	return _t(Ct(B(e), t), !1);
}, Et = function(e, t) {
	return Ct(St(e), t);
}, H = function(e, t) {
	return e.shadowRoot ? H(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : R(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? H(n, t) : !1;
		}
		return H(e, t);
	});
}, Dt = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Ot = function(e) {
	return e.parentNode ? Ot(e.parentNode) : e;
}, kt = function(e) {
	return z(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(De);
		return e.push.apply(e, n ? Dt(R(Ot(t).querySelectorAll(`[${De}="${n}"]:not([${Oe}="disabled"])`))) : [t]), e;
	}, []);
}, At = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, U = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? U(t.shadowRoot) : t instanceof HTMLIFrameElement && At(function() {
			return t.contentWindow.document;
		}) ? U(t.contentWindow.document) : t;
	}
}, jt = function(e, t) {
	return e === t;
}, Mt = function(e, t) {
	return !!R(e.querySelectorAll("iframe")).some(function(e) {
		return jt(e, t);
	});
}, Nt = function(e, t) {
	return t === void 0 && (t = U(Ze(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : kt(e).some(function(e) {
		return H(e, t) || Mt(e, t);
	});
}, Pt = function(e) {
	e === void 0 && (e = document);
	var t = U(e);
	return t ? R(e.querySelectorAll(`[${ke}]`)).some(function(e) {
		return H(e, t);
	}) : !1;
}, Ft = function(e, t) {
	return t.filter(lt).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, It = function(e, t) {
	return lt(e) && e.name ? Ft(e, t) : e;
}, Lt = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(It(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Rt = function(e) {
	return e[0] && e.length > 1 ? It(e[0], e) : e[0];
}, zt = function(e, t) {
	return e.indexOf(It(t, e));
}, Bt = "NEW_FOCUS", Vt = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = ft(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Bt : d;
		if (d === -1) return Bt;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Lt(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = zt(e, t[0]), C = zt(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Ht = function(e) {
	return function(t) {
		var n = ot(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Ut = function(e, t, n) {
	var r = wt(e.map(function(e) {
		return e.node;
	}).filter(Ht(n)));
	return r && r.length ? Rt(r) : Rt(wt(t));
}, Wt = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Wt(e.parentNode.host || e.parentNode, t), t;
}, Gt = function(e, t) {
	for (var n = Wt(e), r = Wt(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Kt = function(e, t, n) {
	var r = z(e), i = z(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Gt(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Gt(a, e);
			t && (o = !o || H(t, o) ? t : Gt(t, o));
		});
	}), o;
}, qt = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Et(n, t));
	}, []);
}, Jt = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(mt);
}, Yt = function(e, t) {
	var n = U(z(e).length > 0 ? document : Ze(e).ownerDocument), r = kt(e).filter(pt), i = Kt(n || e, e, r), a = /* @__PURE__ */ new Map(), o = V(r, a), s = o.filter(function(e) {
		var t = e.node;
		return pt(t);
	});
	if (s[0]) {
		var c = V([i], a).map(function(e) {
			return e.node;
		}), l = Jt(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Vt(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Ut(o, d, qt(r, a)) || Ut(o, u, qt(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Xt = function(e) {
	var t = kt(e).filter(pt), n = _t(B([Kt(e, e, t)], !0), !0, !0), r = B(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: ft(t)
		};
	});
}, Zt = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Qt = 0, $t = !1, en = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Yt(e, t);
	if (!$t && r) {
		if (Qt > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), $t = !0, setTimeout(function() {
				$t = !1;
			}, 1);
			return;
		}
		Qt++, Zt(r.node, n.focusOptions), Qt--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function W(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var tn = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: W(n),
		parent: W(n.parentElement),
		left: W(n.previousElementSibling),
		right: W(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: W(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, nn = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Tt([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, rn = function(e) {
	var t = tn(e);
	return function() {
		return nn(t);
	};
}, an = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = z(t);
	if (r.every(function(t) {
		return !H(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Tt(r, /* @__PURE__ */ new Map()) : V(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, on = function(e, t) {
	var n = t ? Tt(z(e), /* @__PURE__ */ new Map()) : V(z(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, sn = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, cn = function(e, t, n) {
	t === void 0 && (t = {});
	var r = sn(t), i = an(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Zt(a.node, r.focusOptions);
	}
}, ln = function(e, t) {
	t === void 0 && (t = {}), cn(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, un = function(e, t) {
	t === void 0 && (t = {}), cn(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, dn = function(e, t, n) {
	var r = on(e, t.onlyTabbable ?? !0)[n];
	r && Zt(r.node, t.focusOptions);
}, fn = function(e, t) {
	t === void 0 && (t = {}), dn(e, t, "first");
}, pn = function(e, t) {
	t === void 0 && (t = {}), dn(e, t, "last");
}, mn = function() {
	return document && document.activeElement === document.body;
}, hn = function() {
	return mn() || Pt();
}, G = null, K = null, gn = function() {
	return null;
}, q = null, J = !1, _n = !1, vn = function() {
	return !0;
}, yn = function(e) {
	return (G.whiteList || vn)(e);
}, bn = function(e, t) {
	q = {
		observerNode: e,
		portaledElement: t
	};
}, xn = function(e) {
	return q && q.portaledElement === e;
};
function Sn(e, t, n, r) {
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
var Cn = function(e) {
	return e ? !!J : J === "meanwhile";
}, wn = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Tn = function(e, t) {
	return t.some(function(t) {
		return wn(e, t, t);
	});
}, En = function(e) {
	return V(e, /* @__PURE__ */ new Map());
}, Dn = function(e) {
	return !En([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, On = function() {
	var e = !1;
	if (G) {
		var t = G, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || q && q.portaledElement;
		if (mn() && K && K !== document.body && (!document.body.contains(K) || Dn(K))) {
			var u = gn();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Ve).filter(Boolean));
			if ((!d || yn(d)) && (r || function() {
				if (!Cn(o) || !c || !K || _n) return !1;
				var e = En(f), t = e.findIndex(function(e) {
					return e.node === K;
				});
				return t === 0 || t === e.length - 1;
			}() || !hn() || !K && i) && (l && !(Nt(f) || d && Tn(d, f) || xn(d, l)) && (document && !K && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = en(f, K, { focusOptions: s }), q = {})), K = document && document.activeElement, K !== document.body && (gn = rn(K)), J = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Xt(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Sn(h, m.length, 1, m), Sn(h, -1, -1, m));
			}
		}
	}
	return e;
}, kn = function(e) {
	On() && e && (e.stopPropagation(), e.preventDefault());
}, An = function() {
	return Be(On);
}, jn = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || bn(n, t);
}, Mn = function() {
	return null;
}, Nn = function(e) {
	var t = e.children;
	return /* @__PURE__ */ b.createElement("div", {
		onBlur: An,
		onFocus: jn
	}, t);
};
Nn.propTypes = {};
var Pn = function() {
	_n = !0;
}, Fn = function() {
	_n = !1, J = "just", Be(function() {
		J = "meanwhile";
	});
}, In = function() {
	document.addEventListener("focusin", kn), document.addEventListener("focusout", An), window.addEventListener("focus", Pn), window.addEventListener("blur", Fn);
}, Ln = function() {
	document.removeEventListener("focusin", kn), document.removeEventListener("focusout", An), window.removeEventListener("focus", Pn), window.removeEventListener("blur", Fn);
};
function Rn(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var zn = {
	moveFocusInside: en,
	focusInside: Nt,
	focusNextElement: ln,
	focusPrevElement: un,
	focusFirstElement: fn,
	focusLastElement: pn,
	captureFocusRestore: rn
};
function Bn(e) {
	var t = e.slice(-1)[0];
	t && !G && In();
	var n = G, r = n && t && t.id === n.id;
	G = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (K = null, (!r || n.observed !== t.observed) && t.onActivation(zn), On(!0), Be(On)) : (Ln(), K = null);
}
Ne.assignSyncMedium(jn), Pe.assignMedium(An), Fe.assignMedium(function(e) {
	return e(zn);
}), Ce(Ie, Xe(Rn, Bn)(Mn));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Vn, Hn = function() {
	if (Vn) return Vn;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Un() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Hn();
	return t && e.setAttribute("nonce", t), e;
}
function Wn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Kn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Un()) && (Wn(t, n), Gn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, qn = function() {
	var e = Kn();
	return function(t, n) {
		b.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Jn = function() {
	var e = qn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Yn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Xn = function(e) {
	return parseInt(e || "", 10) || 0;
}, Zn = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Xn(n),
		Xn(r),
		Xn(i)
	];
}, Qn = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Yn;
	var t = Zn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, $n = Jn(), Y = "data-scroll-locked", er = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${de} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Y}] {
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
  
  .${P} {
    right: ${s}px ${r};
  }
  
  .${F} {
    margin-right: ${s}px ${r};
  }
  
  .${P} .${P} {
    right: 0 ${r};
  }
  
  .${F} .${F} {
    margin-right: 0 ${r};
  }
  
  body[${Y}] {
    ${fe}: ${s}px;
  }
`;
}, tr = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, nr = function() {
	b.useEffect(function() {
		return document.body.setAttribute(Y, (tr() + 1).toString()), function() {
			var e = tr() - 1;
			e <= 0 ? document.body.removeAttribute(Y) : document.body.setAttribute(Y, e.toString());
		};
	}, []);
}, rr = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	nr();
	var a = b.useMemo(function() {
		return Qn(i);
	}, [i]);
	return b.createElement($n, { styles: er(a, !t, i, n ? "" : "!important") });
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
	var t = b.useRef([]), r = b.useRef([0, 0]), i = b.useRef(), a = b.useState(Sr++)[0], o = b.useState(Jn)[0], s = b.useRef(e);
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
Ce(we, Cr);
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
}, Nr = Jn(), Pr = "\n [" + We + "] {\n   pointer-events: none !important;\n }\n", Fr = function() {
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
		if (!(c || !l)) return Mr(e([l], (a || []).map(Ir)), l.ownerDocument.body, We);
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
var Rr = Ce(Ue, Lr), zr = function(e) {
	return b.createElement(Rr, a({}, e));
}, Br = b.forwardRef(function(e, t) {
	return b.createElement(Ke, a({}, e, {
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
}), Gr = ({ outcome: e, onRestart: t, onExit: n, imageURL: r }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: "d-flex flex-grow-1",
	children: [/* @__PURE__ */ (0, $.jsxs)("div", {
		className: "p-4-5",
		style: { flex: "0 0 60%" },
		children: [/* @__PURE__ */ (0, $.jsx)("p", {
			className: "font-size-lg font-weight-bold text-interact-accent",
			children: e.heading
		}), /* @__PURE__ */ (0, $.jsx)("p", {
			className: "pb-3 text-interact-content",
			children: e.description
		})]
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: "d-flex flex-column",
		style: {
			flex: "0 0 40%",
			backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${r}")`,
			backgroundSize: "cover"
		},
		children: /* @__PURE__ */ (0, $.jsxs)("div", {
			className: "fixed-bottom align-content-end text-right p-4-5",
			children: [/* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "outline-unfolding-scenario-action",
				className: "rounded-pill",
				onClick: t,
				children: ["Restart ", /* @__PURE__ */ (0, $.jsx)(m, { src: w })]
			}), /* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "unfolding-scenario-action",
				className: "rounded-pill ml-3",
				onClick: n,
				children: ["Exit ", /* @__PURE__ */ (0, $.jsx)(m, { src: p })]
			})]
		})
	})]
}), Kr = ({ index: e, total: t, onReset: n, className: r }) => /* @__PURE__ */ (0, $.jsxs)("div", {
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
}), qr = ({ onClose: e }) => /* @__PURE__ */ (0, $.jsx)(g, {
	className: "text-icon-action-sec-neutral",
	src: p,
	onClick: e,
	alt: "Close activity"
}), Jr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex w-100 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsx)(ue, {
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
					children: /* @__PURE__ */ (0, $.jsx)(Kr, {
						onReset: n,
						index: r,
						total: i,
						className: "d-inline-flex rounded-lg-bottom py-3 pl-2 pr-3"
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(f, {
					className: "d-flex justify-content-end align-items-center mx-3",
					children: /* @__PURE__ */ (0, $.jsx)(qr, { onClose: e })
				})
			]
		})
	})
}), Yr = ({ onClose: e, title: t, activeScenarioIndex: n, totalScenarios: r }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex mx-2 mt-4 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(ue, {
		fluid: !0,
		className: "d-flex align-items-center",
		children: [
			/* @__PURE__ */ (0, $.jsx)(Xr, {
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
			/* @__PURE__ */ (0, $.jsx)(qr, { onClose: e })
		]
	})
}), Xr = ({ current: e, total: t }) => {
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
}, Zr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top d-flex w-100 pb-2 bg-interact-default",
	children: /* @__PURE__ */ (0, $.jsxs)(ue, {
		className: "mx-3",
		fluid: !0,
		children: [/* @__PURE__ */ (0, $.jsxs)(j, { children: [/* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex align-items-center small-heading text-interact-headings",
			children: t
		}), /* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex justify-content-end align-items-center",
			children: /* @__PURE__ */ (0, $.jsx)(qr, { onClose: e })
		})] }), /* @__PURE__ */ (0, $.jsx)(j, { children: /* @__PURE__ */ (0, $.jsx)(f, {
			className: "d-flex justify-content-center",
			children: /* @__PURE__ */ (0, $.jsx)(Kr, {
				onReset: n,
				index: r,
				total: i,
				className: "d-flex w-100 p-3 rounded-lg"
			})
		}) })]
	})
}), Qr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => {
	let a = Ur().width || window.innerWidth;
	return a < ce.extraSmall.maxWidth ? /* @__PURE__ */ (0, $.jsx)(Yr, {
		onClose: e,
		title: t,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : a < ce.large.maxWidth ? /* @__PURE__ */ (0, $.jsx)(Zr, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	}) : /* @__PURE__ */ (0, $.jsx)(Jr, {
		onClose: e,
		title: t,
		onReset: n,
		activeScenarioIndex: r,
		totalScenarios: i
	});
}, $r = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, $.jsxs)("button", {
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
}), ei = ({ scenario: e, onContinue: t }) => {
	let [n, r] = (0, b.useState)(null), [i, a] = (0, b.useState)([]), o = (e) => {
		a([...i, e]), r(e);
	};
	return n === null ? /* @__PURE__ */ (0, $.jsxs)(j, {
		className: "pt-3 mx-3",
		children: [/* @__PURE__ */ (0, $.jsxs)(f, { children: [
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
		] }), /* @__PURE__ */ (0, $.jsxs)(f, { children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-interact-headings font-size-md font-weight-bold",
				children: e.prompt
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "d-flex flex-column flex-grow-1",
				children: e.options.map((e, t) => /* @__PURE__ */ (0, $.jsx)($r, {
					active: !1,
					onClick: () => o(t),
					preSelected: i.includes(t),
					children: e.value
				}))
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-action",
					className: "rounded-pill",
					onClick: t,
					children: "Continue"
				})
			})
		] })]
	}) : /* @__PURE__ */ (0, $.jsxs)(j, {
		className: "pt-3 mx-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)(f, {
				xs: "1",
				className: "d-flex align-items-center",
				children: /* @__PURE__ */ (0, $.jsx)(g, {
					className: "text-icon-action-sec-neutral",
					src: C,
					alt: "Return",
					onClick: () => r(null)
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)(f, {
				xs: "5",
				children: [
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-interact-headings font-size-md font-weight-bold",
						children: e.prompt
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "d-flex flex-column flex-grow-1",
						children: e.options.map((e, t) => /* @__PURE__ */ (0, $.jsx)($r, {
							active: n === t,
							onClick: () => o(t),
							preSelected: i.includes(t),
							children: e.value
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "d-flex justify-content-end",
						children: /* @__PURE__ */ (0, $.jsx)(d, {
							variant: "unfolding-scenario-action",
							className: "rounded-pill",
							onClick: t,
							children: "Continue"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsx)(f, {
				className: "d-flex align-items-center",
				children: e.options[n].feedback
			})
		]
	});
}, ti = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, $.jsx)(Br, {
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
}), ni = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(ti, {
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
}), ri = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(ti, {
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
}), ii = ({ data: e, onExit: t }) => {
	let [n, r] = (0, b.useState)(0), [i, a] = (0, b.useState)(null);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "unfolding-scenario-activity-wrapper min-vh-100 bg-interact-default d-flex flex-column",
		children: [
			/* @__PURE__ */ (0, $.jsx)(Qr, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, $.jsx)(ei, {
				scenario: e.scenarios[n],
				onContinue: () => {
					n + 1 >= e.scenarios.length && e.outcome === null ? t() : r(n + 1);
				}
			}, n) : e.outcome && /* @__PURE__ */ (0, $.jsx)(Gr, {
				outcome: e.outcome,
				onRestart: () => a("restart"),
				onExit: t,
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, $.jsx)(ni, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, $.jsx)(ri, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, ai = /* @__PURE__ */ t(v(), 1), oi = ({ children: e, className: t, cssContent: n, themeUrls: r, onClose: i }) => {
	let [a, o] = (0, b.useState)(null);
	if (a === null) {
		let e = document.createElement("div");
		e.className = t, o(e);
	}
	return (0, b.useEffect)(() => {
		if (a) {
			let e = window.open();
			if (e == null) {
				alert("Activity failed to open in a popup window or new tab. Please enable popups and try again."), i();
				return;
			}
			e.addEventListener("beforeunload", () => {
				i();
			}), e.document.body.appendChild(a), r.forEach((t) => {
				let n = e.document.createElement("link");
				n.rel = "stylesheet", n.href = t, e.document.head.appendChild(n.cloneNode());
			});
			let t = e.document.createElement("style");
			return t.textContent = n, e.document.head.appendChild(t), () => e.close();
		}
	}, [a]), a && (0, ai.createPortal)(e, a);
}, si = ({ data: e, themeUrls: t, cssContent: n }) => {
	let [r, i] = (0, b.useState)(!1), a = "xblock-unfolding-scenario-wrapper";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: a,
		children: [r && /* @__PURE__ */ (0, $.jsx)(oi, {
			className: `${a} min-vh-100`,
			themeUrls: t,
			cssContent: n,
			onClose: () => i(!1),
			children: /* @__PURE__ */ (0, $.jsx)(ii, {
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
}, ci = ".xblock-unfolding-scenario-wrapper{--color-action-default:var(--pgn-unfolding-scenario-color-action-default,#3874bc);--color-background-interactive:var(--pgn-unfolding-scenario-color-background-interactive,#8cc9d1);--color-text-interactive:var(--pgn-unfolding-scenario-color-text-interactive,#2f808e);--color-bg-emphasis:var(--pgn-unfolding-scenario-color-bg-emphasis,#223e5d);--color-bg-main:var(--pgn-unfolding-scenario-color-bg-main,#1b324a);--color-border-interact-default:var(--pgn-unfolding-scenario-color-border-interact-default,#b2d8de);--color-border-interact-emphasis:var(--pgn-unfolding-scenario-color-border-interact-emphasis,#327d8a);--color-border-sec-action-focus:var(--pgn-unfolding-scenario-color-border-sec-action-focus,#0e1d2f);--color-icon-action-sec-default:var(--pgn-unfolding-scenario-color-icon-action-sec-default,#3874bc);--color-icon-interact-default:var(--pgn-unfolding-scenario-color-icon-interact-default,#327d8a);--color-interact-default:var(--pgn-unfolding-scenario-color-interact-default,#ecf5f7);--color-interact-emphasis:var(--pgn-unfolding-scenario-color-interact-emphasis,#d9ebef);--color-interact-raised-emphasis:var(--pgn-unfolding-scenario-color-interact-raised-emphasis,#327d8a);--color-txt-interact-accent:var(--pgn-unfolding-scenario-color-txt-interact-accent,#2a578d);--color-txt-interact-content-inverse:var(--pgn-unfolding-scenario-color-txt-interact-content-inverse,#fff);--color-txt-interact-content:var(--pgn-unfolding-scenario-color-txt-interact-content,#223e5d);--color-txt-interact-headings:var(--pgn-unfolding-scenario-color-txt-interact-headings,#327d8a);--color-txt-action-prim-default:var(--pgn-unfolding-scenario-color-txt-action-prim-default,#fff);--color-txt-content:var(--pgn-unfolding-scenario-color-txt-content,#fff);--color-txt-sec-content:var(--pgn-unfolding-scenario-color-txt-sec-content,#223e5d);--color-icon-action-default:var(--pgn-unfolding-scenario-color-icon-action-default,#fff);--color-border-default:var(--pgn-unfolding-scenario-color-border-default,#4e657d);--color-interact-raised:var(--pgn-unfolding-scenario-color-interact-raised,#fff);--color-icon-inverse:var(--pgn-unfolding-scenario-color-icon-inverse,#fff);--color-icon-default:var(--pgn-unfolding-scenario-color-icon-default,#8cc4ce);--color-icon-action-sec-neutral:var(--pgn-unfolding-scenario-color-icon-action-sec-neutral,#1c3a5e);--btn-min-width:var(--pgn-unfolding-scenario-btn-min-width,200px)}.xblock-unfolding-scenario-wrapper .text-interact-headings{color:var(--color-txt-interact-headings)!important}.xblock-unfolding-scenario-wrapper .text-interact-accent{color:var(--color-txt-interact-accent)!important}.xblock-unfolding-scenario-wrapper .text-interact-content{color:var(--color-txt-interact-content)!important}.xblock-unfolding-scenario-wrapper .text-interact-content-inverse{color:var(--color-txt-interact-content-inverse)!important}.xblock-unfolding-scenario-wrapper .text-content{color:var(--color-txt-content)!important}.xblock-unfolding-scenario-wrapper .text-sec-content{color:var(--color-txt-sec-content)!important}.xblock-unfolding-scenario-wrapper .text-icon-inverse{color:var(--color-icon-inverse)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-default{color:var(--color-icon-action-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-default{color:var(--color-icon-action-sec-default)!important}.xblock-unfolding-scenario-wrapper .text-icon-action-sec-neutral{color:var(--color-icon-action-sec-neutral)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised-emphasis{background-color:var(--color-interact-raised-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-interact-raised{background-color:var(--color-interact-raised)!important}.xblock-unfolding-scenario-wrapper .bg-emphasis{background-color:var(--color-bg-emphasis)!important}.xblock-unfolding-scenario-wrapper .bg-icon-default{background-color:var(--color-icon-default)!important}.xblock-unfolding-scenario-wrapper .bg-interact-default{background-color:var(--color-interact-default)!important}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--color-bg-main)!important}.xblock-unfolding-scenario-wrapper .rounded-lg-bottom{border-bottom-right-radius:var(--pgn-size-border-radius-lg)!important;border-bottom-left-radius:var(--pgn-size-border-radius-lg)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{color:var(--color-text-interactive);background-color:var(--color-interact-emphasis);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--color-border-interact-default)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{color:var(--color-interact-raised-emphasis);zoom:2}.xblock-unfolding-scenario-wrapper .btn-unfolding-scenario-action{--pgn-btn-bg:var(--color-action-default);--pgn-btn-color:var(--color-txt-action-prim-default);--pgn-btn-hover-bg:var(--color-action-default);--pgn-btn-hover-color:var(--color-txt-action-prim-default);--pgn-btn-focus-bg:var(--color-action-default);--pgn-btn-focus-color:var(--color-txt-action-prim-default);--pgn-btn-focus-outline-color:var(--color-border-sec-action-focus);--pgn-btn-active-bg:var(--color-action-default);--pgn-btn-active-color:var(--color-txt-action-prim-default)}.xblock-unfolding-scenario-wrapper .btn-outline-unfolding-scenario-action{--pgn-size-btn-border-width:2px;--pgn-btn-bg:var(--color-txt-action-prim-default);--pgn-btn-color:var(--color-action-default);--pgn-btn-border-color:var(--color-action-default);--pgn-btn-hover-bg:var(--color-txt-action-prim-default);--pgn-btn-hover-color:var(--color-action-default);--pgn-btn-hover-border-color:var(--color-action-default);--pgn-btn-focus-bg:var(--color-txt-action-prim-default);--pgn-btn-focus-color:var(--color-action-default);--pgn-btn-focus-border-color:var(--color-action-default);--pgn-btn-focus-outline-color:var(--color-action-default);--pgn-btn-active-bg:var(--color-txt-action-prim-default);--pgn-btn-active-color:var(--color-action-default);--pgn-btn-active-border-color:var(--color-action-default)}.xblock-unfolding-scenario-wrapper .btn{min-width:var(--btn-min-width);padding:var(--pgn-spacing-spacer-2-5) var(--pgn-spacing-spacer-4-5)}.xblock-unfolding-scenario-wrapper .small-heading{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold)}.xblock-unfolding-scenario-wrapper .font-weight-lessbold{font-weight:calc(var(--pgn-typography-font-weight-bold) - 100)}.xblock-unfolding-scenario-wrapper .typography-headings{font-family:var(--pgn-typography-headings-font-family)}.xblock-unfolding-scenario-wrapper .font-size-lg{font-size:calc(var(--pgn-typography-font-size-base) * 1.25)}.xblock-unfolding-scenario-wrapper .font-size-md{font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .font-size-sm-md{font-size:calc(var(--pgn-typography-font-size-base) * .875)}.xblock-unfolding-scenario-wrapper .font-size-sm{font-size:calc(var(--pgn-typography-font-size-base) * .75)}.xblock-unfolding-scenario-wrapper .m-4-5{margin:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .ml-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mr-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mt-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mb-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .p-4-5{padding:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pl-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pr-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pt-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pb-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .unfolding-scenario-activity-wrapper{height:100%}.xblock-unfolding-scenario-wrapper .step-indicator{height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .step-indicator-separator{background-color:var(--color-border-default);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--color-interact-emphasis);color:var(--color-icon-interact-default);border:1px solid var(--color-border-interact-default);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2)}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--color-border-interact-emphasis)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{min-width:10px}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--color-option-focus-border)}", li = async (e, t, n) => {
	let r = await ui(n.config.mfe_config_api);
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: ci
	})(/* @__PURE__ */ (0, $.jsx)(si, {
		data: n.data,
		themeUrls: r,
		cssContent: ci
	}));
}, ui = async (e) => {
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
export { li as renderBlock };
