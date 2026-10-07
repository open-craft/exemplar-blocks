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
})), T = /* @__PURE__ */ t(c()), E = /* @__PURE__ */ t(h()), ee = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
E.default.string, E.default.bool, E.default.bool, E.default.bool, E.default.bool;
var D = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, O = /* @__PURE__ */ b.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, c = e.roundedCircle, l = e.thumbnail, u = _(e, ee);
	n = o(n, "img");
	var d = (0, T.default)(i && n + "-fluid", a && "rounded", c && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ b.createElement("img", s({ ref: t }, u, { className: (0, T.default)(r, d) }));
});
O.displayName = "Image", O.defaultProps = D;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var te = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], ne = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], re = { noGutters: !1 }, k = /* @__PURE__ */ b.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, a = e.as, c = a === void 0 ? "div" : a, l = _(e, te), u = o(n, "row"), d = u + "-cols", f = [];
	return ne.forEach(function(e) {
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
k.displayName = "Row", k.defaultProps = re;
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var A = "right-scroll-bar-position", j = "width-before-scroll-bar", ie = "with-scroll-bars-hidden", ae = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function M(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function oe(e, t) {
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
var se = typeof window < "u" ? b.useLayoutEffect : b.useEffect, ce = /* @__PURE__ */ new WeakMap();
function le(e, t) {
	var n = oe(t || null, function(t) {
		return e.forEach(function(e) {
			return M(e, t);
		});
	});
	return se(function() {
		var t = ce.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || M(e, null);
			}), i.forEach(function(e) {
				r.has(e) || M(e, a);
			});
		}
		ce.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ue(e) {
	return e;
}
function de(e, t) {
	t === void 0 && (t = ue);
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
function fe(e, t) {
	return t === void 0 && (t = ue), de(e, t);
}
function pe(e) {
	e === void 0 && (e = {});
	var t = de(null);
	return t.options = a({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var me = function(e) {
	var t = e.sideCar, n = y(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return b.createElement(r, a({}, n));
};
me.isSideCarExport = !0;
function N(e, t) {
	return e.useMedium(t), me;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var he = pe(), P = function() {}, F = b.forwardRef(function(e, t) {
	var n = b.useRef(null), r = b.useState({
		onScrollCapture: P,
		onWheelCapture: P,
		onTouchMoveCapture: P
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
	]), w = p, T = le([n, t]), E = a(a({}, C), i);
	return b.createElement(b.Fragment, null, d && b.createElement(w, {
		sideCar: he,
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
F.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, F.classNames = {
	fullWidth: j,
	zeroRight: A
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var ge = "data-focus-lock", _e = "data-focus-lock-disabled", ve = "data-no-focus-lock", ye = "data-autofocus-inside", be = "data-no-autofocus", I = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, xe = function(e) {
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
xe.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Se = fe({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ce = fe(), we = fe(), Te = pe({
	async: !0,
	ssr: typeof document < "u"
}), Ee = /* @__PURE__ */ (0, b.createContext)(void 0), De = [], Oe = /* @__PURE__ */ (0, b.forwardRef)(function(e, t) {
	var n, r = (0, b.useState)(), i = r[0], a = r[1], o = (0, b.useRef)(), c = (0, b.useRef)(!1), l = (0, b.useRef)(null), u = (0, b.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, x = e.autoFocus, S = x === void 0 ? !0 : x;
	e.allowTextSelection;
	var C = e.group, w = e.className, T = e.whiteList, E = e.hasPositiveIndices, ee = e.shards, D = ee === void 0 ? De : ee, O = e.as, te = O === void 0 ? "div" : O, ne = e.lockProps, re = ne === void 0 ? {} : ne, k = e.sideCar, A = e.returnFocus, j = A === void 0 ? !1 : A, ie = e.focusOptions, ae = e.onActivation, M = e.onDeactivation, oe = (0, b.useState)({})[0], se = (0, b.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		o.current && ae && ae(o.current), c.current = !0, u();
	}, [ae]), ce = (0, b.useCallback)(function() {
		c.current = !1, M && M(o.current), u();
	}, [M]), ue = (0, b.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof j == "function" ? j(n) : j;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [j]), de = (0, b.useCallback)(function(e) {
		c.current && Se.useMedium(e);
	}, []), fe = Ce.useMedium, pe = (0, b.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), me = s((n = {}, n[_e] = p && "disabled", n[ge] = C, n), re), N = h !== !0, he = N && h !== "tail", P = le([t, pe]), F = (0, b.useMemo)(function() {
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
	return /* @__PURE__ */ b.createElement(b.Fragment, null, N && [/* @__PURE__ */ b.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: I
	}), E ? /* @__PURE__ */ b.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: I
	}) : null], !p && /* @__PURE__ */ b.createElement(k, {
		id: oe,
		sideCar: Te,
		observed: i,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: S,
		whiteList: T,
		shards: D,
		onActivation: se,
		onDeactivation: ce,
		returnFocus: ue,
		focusOptions: ie,
		noFocusGuards: h
	}), /* @__PURE__ */ b.createElement(te, s({ ref: P }, me, {
		className: w,
		onBlur: fe,
		onFocus: de
	}), /* @__PURE__ */ b.createElement(Ee.Provider, { value: F }, d)), he && /* @__PURE__ */ b.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: I
	}));
});
Oe.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function ke(e) {
	setTimeout(e, 1);
}
var Ae = function(e) {
	return e && "current" in e ? e.current : e;
}, je = Oe, Me = pe(), Ne = "data-focus-on-hidden", Pe = { preventScroll: !0 }, Fe = b.forwardRef(function(e, t) {
	var n = b.useState(!1), r = n[0], i = n[1], o = b.useState(null), s = o[0], c = o[1], l = e.children, u = e.autoFocus, d = e.shards, f = e.crossFrame, p = e.enabled, m = p === void 0 ? !0 : p, h = e.scrollLock, g = h === void 0 ? !0 : h, _ = e.focusLock, v = _ === void 0 ? !0 : _, x = e.returnFocus, S = x === void 0 ? !0 : x, C = e.inert, w = e.allowPinchZoom, T = e.sideCar, E = e.className, ee = e.shouldIgnore, D = e.preventScrollOnFocus, O = e.style, te = e.as, ne = e.gapMode, re = y(e, [
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
	]), k = T, A = a(a({}, r), {
		as: te,
		style: O,
		sideCar: T,
		shards: d,
		allowPinchZoom: w,
		gapMode: ne,
		inert: C,
		enabled: m && g
	}), j = b.useCallback(function(e) {
		c(e);
	}, []), ie = b.useCallback(function() {
		c(null);
	}, []);
	return b.createElement(b.Fragment, null, b.createElement(je, {
		ref: t,
		sideCar: T,
		disabled: !(m && v),
		returnFocus: S,
		autoFocus: u,
		shards: d,
		crossFrame: f,
		onActivation: j,
		onDeactivation: ie,
		className: E,
		whiteList: ee,
		lockProps: A,
		focusOptions: D ? Pe : void 0,
		as: F
	}, l), m && b.createElement(k, a({}, re, {
		sideCar: Me,
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
function Ie(e, t) {
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
function Le(e) {
	var t = Ie(e, "string");
	return L(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Re(e, t, n) {
	return (t = Le(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function ze(e, t) {
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
		return Re(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var R = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, z = function(e) {
	return Array.isArray(e) ? e : [e];
}, Be = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Ve = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, He = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Ue = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, We = function(e) {
	return e.hasAttribute("inert");
}, Ge = function(e, t) {
	return !e || Ue(e) || !Ve(e) && !We(e) && t(He(e));
}, Ke = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Ge(t, Ke.bind(void 0, e));
	return e.set(t, r), r;
}, qe = function(e, t) {
	return e && !Ue(e) ? et(e) ? t(He(e)) : !1 : !0;
}, Je = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = qe(t, Je.bind(void 0, e));
	return e.set(t, r), r;
}, Ye = function(e) {
	return e.dataset;
}, Xe = function(e) {
	return e.tagName === "BUTTON";
}, Ze = function(e) {
	return e.tagName === "INPUT";
}, Qe = function(e) {
	return Ze(e) && e.type === "radio";
}, $e = function(e) {
	return !((Ze(e) || Xe(e)) && (e.type === "hidden" || e.disabled));
}, et = function(e) {
	var t = e.getAttribute(be);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, tt = function(e) {
	return !!(e && Ye(e)?.focusGuard);
}, nt = function(e) {
	return !tt(e);
}, rt = function(e) {
	return !!e;
}, it = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, at = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, ot = function(e, t, n) {
	return R(e).map(function(e, t) {
		var r = at(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(it);
}, st = [
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
].join(","), ct = `${st}, [data-focus-guard]`, lt = function(e, t) {
	return R((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? ct : st) ? [n] : [], lt(n));
	}, []);
}, ut = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? B([e.contentDocument.body], t) : [e];
}, B = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = lt(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return ut(e, t);
		}));
		return e.concat(a, n.parentNode ? R(n.parentNode.querySelectorAll(st)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, dt = function(e) {
	return R(e.querySelectorAll(`[${ye}]`)).map(function(e) {
		return B([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, ft = function(e, t) {
	return R(e).filter(function(e) {
		return Ke(t, e);
	}).filter(function(e) {
		return $e(e);
	});
}, pt = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), R(e).filter(function(e) {
		return Je(t, e);
	});
}, mt = function(e, t, n) {
	return ot(ft(B(e, n), t), !0, n);
}, V = function(e, t) {
	return ot(ft(B(e), t), !1);
}, ht = function(e, t) {
	return ft(dt(e), t);
}, H = function(e, t) {
	return e.shadowRoot ? H(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : R(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? H(n, t) : !1;
		}
		return H(e, t);
	});
}, gt = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, _t = function(e) {
	return e.parentNode ? _t(e.parentNode) : e;
}, vt = function(e) {
	return z(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(ge);
		return e.push.apply(e, n ? gt(R(_t(t).querySelectorAll(`[${ge}="${n}"]:not([${_e}="disabled"])`))) : [t]), e;
	}, []);
}, yt = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, U = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? U(t.shadowRoot) : t instanceof HTMLIFrameElement && yt(function() {
			return t.contentWindow.document;
		}) ? U(t.contentWindow.document) : t;
	}
}, bt = function(e, t) {
	return e === t;
}, xt = function(e, t) {
	return !!R(e.querySelectorAll("iframe")).some(function(e) {
		return bt(e, t);
	});
}, St = function(e, t) {
	return t === void 0 && (t = U(Be(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : vt(e).some(function(e) {
		return H(e, t) || xt(e, t);
	});
}, Ct = function(e) {
	e === void 0 && (e = document);
	var t = U(e);
	return t ? R(e.querySelectorAll(`[${ve}]`)).some(function(e) {
		return H(e, t);
	}) : !1;
}, wt = function(e, t) {
	return t.filter(Qe).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Tt = function(e, t) {
	return Qe(e) && e.name ? wt(e, t) : e;
}, Et = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Tt(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Dt = function(e) {
	return e[0] && e.length > 1 ? Tt(e[0], e) : e[0];
}, Ot = function(e, t) {
	return e.indexOf(Tt(t, e));
}, kt = "NEW_FOCUS", At = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = tt(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? kt : d;
		if (d === -1) return kt;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Et(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = Ot(e, t[0]), C = Ot(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, jt = function(e) {
	return function(t) {
		var n = Ye(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Mt = function(e, t, n) {
	var r = pt(e.map(function(e) {
		return e.node;
	}).filter(jt(n)));
	return r && r.length ? Dt(r) : Dt(pt(t));
}, Nt = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Nt(e.parentNode.host || e.parentNode, t), t;
}, Pt = function(e, t) {
	for (var n = Nt(e), r = Nt(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Ft = function(e, t, n) {
	var r = z(e), i = z(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Pt(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Pt(a, e);
			t && (o = !o || H(t, o) ? t : Pt(t, o));
		});
	}), o;
}, It = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(ht(n, t));
	}, []);
}, Lt = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(rt);
}, Rt = function(e, t) {
	var n = U(z(e).length > 0 ? document : Be(e).ownerDocument), r = vt(e).filter(nt), i = Ft(n || e, e, r), a = /* @__PURE__ */ new Map(), o = V(r, a), s = o.filter(function(e) {
		var t = e.node;
		return nt(t);
	});
	if (s[0]) {
		var c = V([i], a).map(function(e) {
			return e.node;
		}), l = Lt(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = At(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Mt(o, d, It(r, a)) || Mt(o, u, It(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, zt = function(e) {
	var t = vt(e).filter(nt), n = ot(B([Ft(e, e, t)], !0), !0, !0), r = B(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: tt(t)
		};
	});
}, Bt = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Vt = 0, Ht = !1, Ut = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Rt(e, t);
	if (!Ht && r) {
		if (Vt > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ht = !0, setTimeout(function() {
				Ht = !1;
			}, 1);
			return;
		}
		Vt++, Bt(r.node, n.focusOptions), Vt--;
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
var Wt = function(e) {
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
}, Gt = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = mt([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Kt = function(e) {
	var t = Wt(e);
	return function() {
		return Gt(t);
	};
}, qt = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = z(t);
	if (r.every(function(t) {
		return !H(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? mt(r, /* @__PURE__ */ new Map()) : V(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Jt = function(e, t) {
	var n = t ? mt(z(e), /* @__PURE__ */ new Map()) : V(z(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Yt = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, Xt = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Yt(t), i = qt(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Bt(a.node, r.focusOptions);
	}
}, Zt = function(e, t) {
	t === void 0 && (t = {}), Xt(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, Qt = function(e, t) {
	t === void 0 && (t = {}), Xt(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, $t = function(e, t, n) {
	var r = Jt(e, t.onlyTabbable ?? !0)[n];
	r && Bt(r.node, t.focusOptions);
}, en = function(e, t) {
	t === void 0 && (t = {}), $t(e, t, "first");
}, tn = function(e, t) {
	t === void 0 && (t = {}), $t(e, t, "last");
}, nn = function() {
	return document && document.activeElement === document.body;
}, rn = function() {
	return nn() || Ct();
}, G = null, K = null, an = function() {
	return null;
}, q = null, J = !1, on = !1, sn = function() {
	return !0;
}, cn = function(e) {
	return (G.whiteList || sn)(e);
}, ln = function(e, t) {
	q = {
		observerNode: e,
		portaledElement: t
	};
}, un = function(e) {
	return q && q.portaledElement === e;
};
function dn(e, t, n, r) {
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
var fn = function(e) {
	return e ? !!J : J === "meanwhile";
}, pn = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, mn = function(e, t) {
	return t.some(function(t) {
		return pn(e, t, t);
	});
}, hn = function(e) {
	return V(e, /* @__PURE__ */ new Map());
}, gn = function(e) {
	return !hn([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, _n = function() {
	var e = !1;
	if (G) {
		var t = G, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || q && q.portaledElement;
		if (nn() && K && K !== document.body && (!document.body.contains(K) || gn(K))) {
			var u = an();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Ae).filter(Boolean));
			if ((!d || cn(d)) && (r || function() {
				if (!fn(o) || !c || !K || on) return !1;
				var e = hn(f), t = e.findIndex(function(e) {
					return e.node === K;
				});
				return t === 0 || t === e.length - 1;
			}() || !rn() || !K && i) && (l && !(St(f) || d && mn(d, f) || un(d, l)) && (document && !K && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Ut(f, K, { focusOptions: s }), q = {})), K = document && document.activeElement, K !== document.body && (an = Kt(K)), J = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = zt(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), dn(h, m.length, 1, m), dn(h, -1, -1, m));
			}
		}
	}
	return e;
}, vn = function(e) {
	_n() && e && (e.stopPropagation(), e.preventDefault());
}, yn = function() {
	return ke(_n);
}, bn = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || ln(n, t);
}, xn = function() {
	return null;
}, Sn = function(e) {
	var t = e.children;
	return /* @__PURE__ */ b.createElement("div", {
		onBlur: yn,
		onFocus: bn
	}, t);
};
Sn.propTypes = {};
var Cn = function() {
	on = !0;
}, wn = function() {
	on = !1, J = "just", ke(function() {
		J = "meanwhile";
	});
}, Tn = function() {
	document.addEventListener("focusin", vn), document.addEventListener("focusout", yn), window.addEventListener("focus", Cn), window.addEventListener("blur", wn);
}, En = function() {
	document.removeEventListener("focusin", vn), document.removeEventListener("focusout", yn), window.removeEventListener("focus", Cn), window.removeEventListener("blur", wn);
};
function Dn(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var On = {
	moveFocusInside: Ut,
	focusInside: St,
	focusNextElement: Zt,
	focusPrevElement: Qt,
	focusFirstElement: en,
	focusLastElement: tn,
	captureFocusRestore: Kt
};
function kn(e) {
	var t = e.slice(-1)[0];
	t && !G && Tn();
	var n = G, r = n && t && t.id === n.id;
	G = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (K = null, (!r || n.observed !== t.observed) && t.onActivation(On), _n(!0), ke(_n)) : (En(), K = null);
}
Se.assignSyncMedium(bn), Ce.assignMedium(yn), we.assignMedium(function(e) {
	return e(On);
}), N(Te, ze(Dn, kn)(xn));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var An, jn = function() {
	if (An) return An;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Mn() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = jn();
	return t && e.setAttribute("nonce", t), e;
}
function Nn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Pn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Fn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Mn()) && (Nn(t, n), Pn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, In = function() {
	var e = Fn();
	return function(t, n) {
		b.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Ln = function() {
	var e = In();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Rn = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, zn = function(e) {
	return parseInt(e || "", 10) || 0;
}, Bn = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		zn(n),
		zn(r),
		zn(i)
	];
}, Vn = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Rn;
	var t = Bn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Hn = Ln(), Y = "data-scroll-locked", Un = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ie} {
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
  
  .${A} {
    right: ${s}px ${r};
  }
  
  .${j} {
    margin-right: ${s}px ${r};
  }
  
  .${A} .${A} {
    right: 0 ${r};
  }
  
  .${j} .${j} {
    margin-right: 0 ${r};
  }
  
  body[${Y}] {
    ${ae}: ${s}px;
  }
`;
}, Wn = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Gn = function() {
	b.useEffect(function() {
		return document.body.setAttribute(Y, (Wn() + 1).toString()), function() {
			var e = Wn() - 1;
			e <= 0 ? document.body.removeAttribute(Y) : document.body.setAttribute(Y, e.toString());
		};
	}, []);
}, Kn = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Gn();
	var a = b.useMemo(function() {
		return Vn(i);
	}, [i]);
	return b.createElement(Hn, { styles: Un(a, !t, i, n ? "" : "!important") });
}, qn = !1;
if (typeof window < "u") try {
	var Jn = Object.defineProperty({}, "passive", { get: function() {
		return qn = !0, !0;
	} });
	window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
	qn = !1;
}
var X = qn ? { passive: !1 } : !1, Yn = function(e) {
	return e.tagName === "TEXTAREA";
}, Xn = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Yn(e) && n[t] === "visible");
}, Zn = function(e) {
	return Xn(e, "overflowY");
}, Qn = function(e) {
	return Xn(e, "overflowX");
}, $n = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), nr(e, r)) {
			var i = rr(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, er = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, tr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, nr = function(e, t) {
	return e === "v" ? Zn(t) : Qn(t);
}, rr = function(e, t) {
	return e === "v" ? er(t) : tr(t);
}, ir = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ar = function(e, t, n, r, i) {
	var a = ir(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = rr(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && nr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, or = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, sr = function(e) {
	return [e.deltaX, e.deltaY];
}, cr = function(e) {
	return e && "current" in e ? e.current : e;
}, lr = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ur = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, dr = 0, Z = [];
function fr(e) {
	var t = b.useRef([]), r = b.useRef([0, 0]), i = b.useRef(), a = b.useState(dr++)[0], o = b.useState(Ln)[0], s = b.useRef(e);
	b.useEffect(function() {
		s.current = e;
	}, [e]), b.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var t = n([e.lockRef.current], (e.shards || []).map(cr), !0).filter(Boolean);
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
		var n = or(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = $n(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = $n(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return ar(h, t, e, h === "h" ? o : c, !0);
	}, []), l = b.useCallback(function(e) {
		var n = e;
		if (!(!Z.length || Z[Z.length - 1] !== o)) {
			var r = "deltaY" in n ? sr(n) : or(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && lr(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(cr).filter(Boolean).filter(function(e) {
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
			shadowParent: pr(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = b.useCallback(function(e) {
		r.current = or(e), i.current = void 0;
	}, []), f = b.useCallback(function(t) {
		u(t.type, sr(t), t.target, c(t, e.lockRef.current));
	}, []), p = b.useCallback(function(t) {
		u(t.type, or(t), t.target, c(t, e.lockRef.current));
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
	return b.createElement(b.Fragment, null, h ? b.createElement(o, { styles: ur(a) }) : null, m ? b.createElement(Kn, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function pr(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
N(he, fr);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var mr = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Q = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = {}, _r = 0, vr = function(e) {
	return e && (e.host || vr(e.parentNode));
}, yr = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = vr(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, br = function(e, t, n, r) {
	var i = yr(t, Array.isArray(e) ? e : [e]);
	gr[n] || (gr[n] = /* @__PURE__ */ new WeakMap());
	var a = gr[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Q.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Q.set(e, c), a.set(e, l), o.push(e), c === 1 && i && hr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), _r++, function() {
		o.forEach(function(e) {
			var t = Q.get(e) - 1, i = a.get(e) - 1;
			Q.set(e, t), a.set(e, i), t || (hr.has(e) || e.removeAttribute(r), hr.delete(e)), i || e.removeAttribute(n);
		}), _r--, _r || (Q = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = {});
	};
}, xr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || mr(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), br(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Sr = Ln(), Cr = "\n [" + Ne + "] {\n   pointer-events: none !important;\n }\n", wr = function() {
	return b.createElement(Sr, { styles: Cr });
}, Tr = function(e) {
	return "current" in e ? e.current : e;
};
function Er(t) {
	var n = t.setLockProps, r = t.onEscapeKey, i = t.onClickOutside, a = t.shards, o = t.onActivation, s = t.onDeactivation, c = t.noIsolation, l = t.activeNode, u = (0, b.useRef)(null), d = (0, b.useRef)(0);
	return b.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && r && r(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || a && a.map(Tr).some(function(t) {
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
		if (!(c || !l)) return xr(e([l], (a || []).map(Tr)), l.ownerDocument.body, Ne);
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
	}, []), b.createElement(wr, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Dr = N(Me, Er), Or = function(e) {
	return b.createElement(Dr, a({}, e));
}, kr = b.forwardRef(function(e, t) {
	return b.createElement(Fe, a({}, e, {
		ref: t,
		sideCar: Or
	}));
}), $ = i();
function Ar({ onClick: e }) {
	return /* @__PURE__ */ b.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function jr({ children: e = null }) {
	return /* @__PURE__ */ b.createElement("div", { className: "pgn__modal-content-container" }, e);
}
//#endregion
//#region src/unfolding-scenario-block/student-ui/components/Intro.tsx
var Mr = ({ name: e, introduction: t, onLaunch: n, activityOpen: r }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "rounded-lg overflow-hidden scenario-intro bg-offwhite",
	children: /* @__PURE__ */ (0, $.jsxs)(k, {
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
						className: "ml-3",
						children: e
					})]
				}),
				/* @__PURE__ */ (0, $.jsx)("h4", {
					className: "text-secondary-700",
					children: t.heading
				}),
				/* @__PURE__ */ (0, $.jsx)("p", {
					className: "flex-grow-1",
					children: t.description
				}),
				/* @__PURE__ */ (0, $.jsx)("div", {
					className: "d-flex justify-content-end",
					children: /* @__PURE__ */ (0, $.jsx)(d, {
						variant: "unfolding-scenario-blue",
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
			children: /* @__PURE__ */ (0, $.jsx)(O, {
				src: t.imageURL,
				style: {
					objectFit: "cover",
					width: "100%",
					height: "100%"
				}
			})
		})]
	})
}), Nr = ({ outcome: e, onRestart: t, onExit: n, imageURL: r }) => /* @__PURE__ */ (0, $.jsxs)("div", {
	className: "d-flex flex-grow-1",
	children: [/* @__PURE__ */ (0, $.jsxs)("div", {
		className: "p-4-5",
		style: { flex: "0 0 60%" },
		children: [/* @__PURE__ */ (0, $.jsx)("p", {
			className: "font-size-lg font-weight-bold text-secondary-700",
			children: e.heading
		}), /* @__PURE__ */ (0, $.jsx)("p", {
			className: "pb-3",
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
				variant: "outline-unfolding-scenario-blue",
				className: "rounded-pill",
				onClick: t,
				children: ["Restart ", /* @__PURE__ */ (0, $.jsx)(m, { src: w })]
			}), /* @__PURE__ */ (0, $.jsxs)(d, {
				variant: "unfolding-scenario-blue",
				className: "rounded-pill ml-3",
				onClick: n,
				children: ["Exit ", /* @__PURE__ */ (0, $.jsx)(m, { src: p })]
			})]
		})
	})]
}), Pr = ({ onClose: e, title: t, onReset: n, activeScenarioIndex: r, totalScenarios: i }) => /* @__PURE__ */ (0, $.jsx)("div", {
	className: "sticky-top bg-offwhite",
	children: /* @__PURE__ */ (0, $.jsxs)(k, {
		className: "justify-content-between px-3 w-100",
		children: [
			/* @__PURE__ */ (0, $.jsx)(f, {
				className: "d-flex align-items-center mx-3 small-heading text-main",
				children: t
			}),
			/* @__PURE__ */ (0, $.jsx)(f, {
				className: "d-flex justify-content-center",
				children: /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "d-inline-flex align-items-center py-3 pl-2 pr-3 rounded-lg-bottom bg-main-navy",
					children: [
						/* @__PURE__ */ (0, $.jsx)(g, {
							className: "text-white bg-main-navy mr-3",
							src: w,
							onClick: n,
							alt: "Reset activity"
						}),
						Array.from(Array(i)).map((e, t) => /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)("div", {
							className: `step-indicator d-flex justify-content-center align-items-center rounded-pill p-1 text-white ${t <= r ? "bg-medium text-darkest" : "bg-darkest text-white"}`,
							children: t + 1
						}), t < i - 1 && /* @__PURE__ */ (0, $.jsx)("div", { className: "step-indicator-separator" })] })),
						r >= i && /* @__PURE__ */ (0, $.jsx)("span", {
							className: "ml-4 text-white font-size-md font-weight-bold",
							children: "Completed!"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, $.jsx)(f, {
				className: "d-flex justify-content-end align-items-center mx-3",
				children: /* @__PURE__ */ (0, $.jsx)(g, {
					className: "text-main-navy",
					src: p,
					onClick: e,
					alt: "Close activity"
				})
			})
		]
	})
}), Fr = ({ onClick: e, children: t, active: n, preSelected: r }) => /* @__PURE__ */ (0, $.jsxs)("button", {
	className: `scenario-option-btn rounded-sm d-flex justify-content-start border-0 overflow-hidden align-items-center p-0 mb-3 ${n ? "text-white bg-main active" : "bg-white"} ${r ? "pre-selected" : ""}`,
	onClick: e,
	children: [/* @__PURE__ */ (0, $.jsx)("div", {
		className: "flex-grow-1 text-left mx-3 px-3 my-3",
		children: t
	}), /* @__PURE__ */ (0, $.jsx)("div", {
		className: "h-100 bg-main d-flex align-items-center hover-arrow",
		children: /* @__PURE__ */ (0, $.jsx)(m, {
			src: x,
			size: "lg",
			className: "text-white mx-3"
		})
	})]
}), Ir = ({ scenario: e, onContinue: t }) => {
	let [n, r] = (0, b.useState)(null), [i, a] = (0, b.useState)([]), o = (e) => {
		a([...i, e]), r(e);
	};
	return n === null ? /* @__PURE__ */ (0, $.jsxs)(k, {
		className: "pt-3 mx-3",
		children: [/* @__PURE__ */ (0, $.jsxs)(f, { children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-lg font-weight-bold text-secondary-700",
				children: e.heading
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "pb-3",
				children: e.description
			}),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex align-items-center mt-3 mb-2",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "arrow-bubble p-2",
					children: /* @__PURE__ */ (0, $.jsx)(m, { src: S })
				}), /* @__PURE__ */ (0, $.jsx)("span", {
					className: "text-main font-size-medium font-weight-bold pl-2",
					children: e.instructionTitle
				})]
			}),
			/* @__PURE__ */ (0, $.jsx)("p", { children: e.instructionDescription })
		] }), /* @__PURE__ */ (0, $.jsxs)(f, { children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-main font-size-md font-weight-bold",
				children: e.prompt
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "d-flex flex-column flex-grow-1",
				children: e.options.map((e, t) => /* @__PURE__ */ (0, $.jsx)(Fr, {
					active: !1,
					onClick: () => o(t),
					preSelected: i.includes(t),
					children: e.value
				}))
			}),
			/* @__PURE__ */ (0, $.jsx)("div", {
				className: "d-flex justify-content-end",
				children: /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-blue",
					className: "rounded-pill",
					onClick: t,
					children: "Continue"
				})
			})
		] })]
	}) : /* @__PURE__ */ (0, $.jsxs)(k, {
		className: "pt-3 mx-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)(f, {
				xs: "1",
				className: "d-flex align-items-center",
				children: /* @__PURE__ */ (0, $.jsx)(g, {
					src: C,
					alt: "Return",
					onClick: () => r(null)
				})
			}),
			/* @__PURE__ */ (0, $.jsxs)(f, {
				xs: "5",
				children: [
					/* @__PURE__ */ (0, $.jsx)("p", {
						className: "text-main font-size-md font-weight-bold",
						children: e.prompt
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "d-flex flex-column flex-grow-1",
						children: e.options.map((e, t) => /* @__PURE__ */ (0, $.jsx)(Fr, {
							active: n === t,
							onClick: () => o(t),
							preSelected: i.includes(t),
							children: e.value
						}))
					}),
					/* @__PURE__ */ (0, $.jsx)("div", {
						className: "d-flex justify-content-end",
						children: /* @__PURE__ */ (0, $.jsx)(d, {
							variant: "unfolding-scenario-blue",
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
}, Lr = ({ onCancel: e, title: t, children: n }) => /* @__PURE__ */ (0, $.jsx)(kr, {
	allowPinchZoom: !0,
	scrollLock: !0,
	enabled: !0,
	onEscapeKey: e,
	onClickOutside: e,
	className: "pgn__modal-layer",
	children: /* @__PURE__ */ (0, $.jsxs)(jr, { children: [/* @__PURE__ */ (0, $.jsx)(Ar, { onClick: e }), /* @__PURE__ */ (0, $.jsx)("div", {
		role: "dialog",
		"aria-label": t,
		className: "pgn__modal pgn__modal-md pgn__modal-default p-3",
		children: n
	})] })
}), Rr = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(Lr, {
	onCancel: e,
	title: "Leave interactive?",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "m-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-md text-main font-weight-bold",
				children: "Leave interactive?"
			}),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "If you leave now, your progress in this interactive will be lost." }),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex justify-content-between",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "outline-unfolding-scenario-blue",
					className: "rounded-pill",
					onClick: t,
					children: "Leave"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-blue",
					className: "rounded-pill",
					onClick: e,
					children: "Stay"
				})]
			})
		]
	})
}), zr = ({ onCancel: e, onConfirm: t }) => /* @__PURE__ */ (0, $.jsx)(Lr, {
	onCancel: e,
	title: "Restart interactive?",
	children: /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "m-3",
		children: [
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "font-size-md text-main font-weight-bold",
				children: "Restart interactive?"
			}),
			/* @__PURE__ */ (0, $.jsx)("p", { children: "If you restart, your progress in this interactive will be lost." }),
			/* @__PURE__ */ (0, $.jsxs)("div", {
				className: "d-flex justify-content-between",
				children: [/* @__PURE__ */ (0, $.jsx)(d, {
					variant: "outline-unfolding-scenario-blue",
					className: "rounded-pill",
					onClick: t,
					children: "Restart"
				}), /* @__PURE__ */ (0, $.jsx)(d, {
					variant: "unfolding-scenario-blue",
					className: "rounded-pill",
					onClick: e,
					children: "Stay"
				})]
			})
		]
	})
}), Br = ({ data: e, onExit: t }) => {
	let [n, r] = (0, b.useState)(0), [i, a] = (0, b.useState)(null);
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "unfolding-scenario-activity-wrapper bg-offwhite d-flex flex-column",
		children: [
			/* @__PURE__ */ (0, $.jsx)(Pr, {
				onClose: () => a("leave"),
				title: e.name,
				onReset: () => a("restart"),
				activeScenarioIndex: n,
				totalScenarios: e.scenarios.length
			}),
			n < e.scenarios.length ? /* @__PURE__ */ (0, $.jsx)(Ir, {
				scenario: e.scenarios[n],
				onContinue: () => {
					n + 1 >= e.scenarios.length && e.outcome === null ? t() : r(n + 1);
				}
			}, n) : e.outcome && /* @__PURE__ */ (0, $.jsx)(Nr, {
				outcome: e.outcome,
				onRestart: () => a("restart"),
				onExit: t,
				imageURL: e.introduction.imageURL
			}),
			i == "leave" && /* @__PURE__ */ (0, $.jsx)(Rr, {
				onConfirm: t,
				onCancel: () => a(null)
			}),
			i == "restart" && /* @__PURE__ */ (0, $.jsx)(zr, {
				onConfirm: () => {
					r(0), a(null);
				},
				onCancel: () => a(null)
			})
		]
	});
}, Vr = /* @__PURE__ */ t(v(), 1), Hr = ({ children: e, className: t, cssContent: n, themeUrls: r, onClose: i }) => {
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
	}, [a]), a && (0, Vr.createPortal)(e, a);
}, Ur = ({ data: e, themeUrls: t, cssContent: n }) => {
	let [r, i] = (0, b.useState)(!1), a = "xblock-unfolding-scenario-wrapper";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: a,
		children: [r && /* @__PURE__ */ (0, $.jsx)(Hr, {
			className: a,
			themeUrls: t,
			cssContent: n,
			onClose: () => i(!1),
			children: /* @__PURE__ */ (0, $.jsx)(Br, {
				data: e.scenarioData,
				onExit: () => i(!1)
			})
		}), /* @__PURE__ */ (0, $.jsx)(Mr, {
			name: e.scenarioData.name,
			introduction: e.scenarioData.introduction,
			onLaunch: () => i(!0),
			activityOpen: r
		})]
	});
}, Wr = ".xblock-unfolding-scenario-wrapper{--palette-darkest:var(--pgn-unfolding-scenario-palette-darkest,#285672);--palette-main:var(--pgn-unfolding-scenario-palette-main,#2f808e);--palette-medium:var(--pgn-unfolding-scenario-palette-medium,#8cc9d1);--palette-light:var(--pgn-unfolding-scenario-palette-light,#cdeaea);--palette-lightest:var(--pgn-unfolding-scenario-palette-lightest,#e0f2f2);--palette-offwhite:var(--pgn-unfolding-scenario-palette-offwhite,#e9f6f5);--palette-main-navy:var(--pgn-unfolding-scenario-palette-main-navy,#223e5d);--color-btn-bg-blue:var(--pgn-unfolding-scenario-color-btn-bg-blue,#3376c3);--color-btn-hover-bg-blue:var(--pgn-unfolding-scenario-color-btn-hover-bg-blue,#1f4775);--color-btn-active-bg-blue:var(--pgn-unfolding-scenario-color-btn-active-bg-blue,#142f4e);--color-btn-text-blue:var(--pgn-unfolding-scenario-color-btn-text-blue,#fff);--btn-min-width:var(--pgn-unfolding-scenario-btn-min-width,200px);--color-option-focus-border:var(--pgn-unfolding-scenario-color-option-focus-border,#f0664a)}.xblock-unfolding-scenario-wrapper .bg-darkest{background-color:var(--palette-darkest)}.xblock-unfolding-scenario-wrapper .bg-main{background-color:var(--palette-main)}.xblock-unfolding-scenario-wrapper .bg-medium{background-color:var(--palette-medium)}.xblock-unfolding-scenario-wrapper .bg-light{background-color:var(--palette-light)}.xblock-unfolding-scenario-wrapper .bg-lightest{background-color:var(--palette-lightest)}.xblock-unfolding-scenario-wrapper .bg-offwhite{background-color:var(--palette-offwhite)}.xblock-unfolding-scenario-wrapper .bg-main-navy{background-color:var(--palette-main-navy)}.xblock-unfolding-scenario-wrapper .text-darkest{color:var(--palette-darkest)}.xblock-unfolding-scenario-wrapper .text-main{color:var(--palette-main)}.xblock-unfolding-scenario-wrapper .text-medium{color:var(--palette-medium)}.xblock-unfolding-scenario-wrapper .text-light{color:var(--palette-light)}.xblock-unfolding-scenario-wrapper .text-lightest{color:var(--palette-lightest)}.xblock-unfolding-scenario-wrapper .text-offwhite{color:var(--palette-offwhite)}.xblock-unfolding-scenario-wrapper .text-main-navy{color:var(--palette-main-navy)}.xblock-unfolding-scenario-wrapper .rounded-lg-bottom{border-bottom-right-radius:var(--pgn-size-border-radius-lg)!important;border-bottom-left-radius:var(--pgn-size-border-radius-lg)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold);color:var(--palette-main);background-color:var(--palette-lightest);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--palette-medium)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .border-right{border-color:var(--palette-medium)!important}.xblock-unfolding-scenario-wrapper .scenario-intro .scenario-name .pgn__icon{zoom:2}.xblock-unfolding-scenario-wrapper .btn-unfolding-scenario-blue{--pgn-btn-bg:var(--color-btn-bg-blue);--pgn-btn-color:var(--color-btn-text-blue);--pgn-btn-hover-color:var(--color-btn-text-blue);--pgn-btn-hover-bg:var(--color-btn-hover-bg-blue);--pgn-btn-focus-color:var(--color-btn-text-blue);--pgn-btn-focus-bg:var(--color-btn-bg-blue);--pgn-btn-focus-outline-color:var(--color-btn-bg-blue);--pgn-btn-active-color:var(--color-btn-text-blue);--pgn-btn-active-bg:var(--color-btn-active-bg-blue)}.xblock-unfolding-scenario-wrapper .btn-outline-unfolding-scenario-blue{--pgn-size-btn-border-width:2px;--pgn-btn-bg:var(--color-btn-text-blue);--pgn-btn-color:var(--color-btn-bg-blue);--pgn-btn-border-color:var(--color-btn-bg-blue);--pgn-btn-hover-bg:var(--color-btn-text-blue);--pgn-btn-hover-color:var(--color-btn-hover-bg-blue);--pgn-btn-hover-border-color:var(--color-btn-hover-bg-blue);--pgn-btn-focus-bg:var(--color-btn-text-blue);--pgn-btn-focus-color:var(--color-btn-bg-blue);--pgn-btn-focus-border-color:var(--color-btn-bg-blue);--pgn-btn-focus-outline-color:var(--color-btn-bg-blue);--pgn-btn-active-bg:var(--color-btn-text-blue);--pgn-btn-active-color:var(--color-btn-active-bg-blue);--pgn-btn-active-border-color:var(--color-btn-active-bg-blue)}.xblock-unfolding-scenario-wrapper .btn{min-width:var(--btn-min-width);padding:var(--pgn-spacing-spacer-2-5) var(--pgn-spacing-spacer-4-5)}.xblock-unfolding-scenario-wrapper .small-heading{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold)}.xblock-unfolding-scenario-wrapper .font-size-lg{font-size:calc(var(--pgn-typography-font-size-base) * 1.25)}.xblock-unfolding-scenario-wrapper .font-size-md{font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .m-4-5{margin:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .ml-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mr-4-5,.xblock-unfolding-scenario-wrapper .mx-4-5{margin-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mt-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .mb-4-5,.xblock-unfolding-scenario-wrapper .my-4-5{margin-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .p-4-5{padding:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pl-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-left:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pr-4-5,.xblock-unfolding-scenario-wrapper .px-4-5{padding-right:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pt-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-top:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .pb-4-5,.xblock-unfolding-scenario-wrapper .py-4-5{padding-bottom:var(--pgn-spacing-spacer-4-5)!important}.xblock-unfolding-scenario-wrapper .unfolding-scenario-activity-wrapper{height:100%}.xblock-unfolding-scenario-wrapper .step-indicator{height:var(--pgn-spacing-spacer-4-5);width:var(--pgn-spacing-spacer-4-5);font-size:calc(var(--pgn-typography-font-size-base) * 1.125)}.xblock-unfolding-scenario-wrapper .step-indicator-separator{background-color:var(--palette-darkest);width:17px;height:1px}.xblock-unfolding-scenario-wrapper .arrow-bubble{background-color:var(--palette-lightest);color:var(--palette-main);border:1px solid var(--palette-medium);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;display:inline-block}.xblock-unfolding-scenario-wrapper .scenario-option-btn{height:calc(var(--pgn-typography-line-height-base) * var(--pgn-typography-font-size-base) * 3 + var(--pgn-spacing-spacer-base) * 2)}.xblock-unfolding-scenario-wrapper .scenario-option-btn.pre-selected{outline:2px solid var(--palette-main)}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow{min-width:10px}.xblock-unfolding-scenario-wrapper .scenario-option-btn .hover-arrow .pgn__icon{display:none}.xblock-unfolding-scenario-wrapper .scenario-option-btn:hover .hover-arrow .pgn__icon,.xblock-unfolding-scenario-wrapper .scenario-option-btn.active .hover-arrow .pgn__icon{display:block}.xblock-unfolding-scenario-wrapper .scenario-option-btn:focus-visible{outline:2px solid var(--color-option-focus-border)}", Gr = async (e, t, n) => {
	let r = await Kr(n.config.mfe_config_api);
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: Wr
	})(/* @__PURE__ */ (0, $.jsx)(Ur, {
		data: n.data,
		themeUrls: r,
		cssContent: Wr
	}));
}, Kr = async (e) => {
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
export { Gr as renderBlock };
