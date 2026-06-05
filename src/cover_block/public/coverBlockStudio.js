import { S as e, _ as t, b as n, c as r, d as i, f as a, g as o, h as s, i as c, l, m as u, n as d, o as f, p, r as m, s as h, t as g, u as _, v, x as y, y as b } from "./apiTypes-DMXXkwh0.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var x = /* @__PURE__ */ e(n()), S = /* @__PURE__ */ e(b());
function C({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ x.createElement(e, {
		...r,
		className: (0, S.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function w() {
	return /* @__PURE__ */ x.createElement("span", { className: "pgn__action-row-spacer" });
}
C.Spacer = w, (/* @__PURE__ */ y(((e, t) => {
	t.exports = function(e, t, n, r, i, a, o, s) {
		if (!e) {
			var c;
			if (t === void 0) c = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var l = [
					n,
					r,
					i,
					a,
					o,
					s
				], u = 0;
				c = Error(t.replace(/%s/g, function() {
					return l[u++];
				})), c.name = "Invariant Violation";
			}
			throw c.framesToPop = 1, c;
		}
	};
})))();
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function T(e, t, n) {
	var r = (0, x.useRef)(e !== void 0), i = (0, x.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, x.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function E(e, t) {
	return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, E(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function D(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, E(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function O() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function k(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function A(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
O.__suppressDeprecationWarning = !0, k.__suppressDeprecationWarning = !0, A.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function j(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function M(e) {
	var t = j(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function N(e, t) {
	return M(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var P = /([A-Z])/g;
function F(e) {
	return e.replace(P, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var I = /^ms-/;
function L(e) {
	return F(e).replace(I, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var R = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function z(e) {
	return !!(e && R.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function B(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(L(t)) || N(e).getPropertyValue(L(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(L(i)) : z(i) ? r += i + "(" + a + ") " : n += L(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ee = /* @__PURE__ */ y(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), te = /* @__PURE__ */ y(((e, t) => {
	var n = ee();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), ne = /* @__PURE__ */ y(((e, t) => {
	t.exports = te()();
})), re = { disabled: !1 }, ie = x.createContext(null), ae = function(e) {
	return e.scrollTop;
}, oe = /* @__PURE__ */ e(s()), se = "unmounted", ce = "exited", le = "entering", ue = "entered", de = "exiting", fe = /* @__PURE__ */ function(e) {
	D(n, e);
	function n(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = ce, r.appearStatus = le) : o = ue : o = t.unmountOnExit || t.mountOnEnter ? se : ce, r.state = { status: o }, r.nextCallback = null, r;
	}
	n.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: ce } : null;
	};
	var r = n.prototype;
	return r.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, r.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = le) : (n === "entering" || n === "entered") && (t = de);
		}
		this.updateStatus(!1, t);
	}, r.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, r.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, r.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : oe.findDOMNode(this);
				n && ae(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: se });
	}, r.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [oe.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || re.disabled) {
			this.safeSetState({ status: ue }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: le }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: ue }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, r.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : oe.findDOMNode(this);
		if (!t || re.disabled) {
			this.safeSetState({ status: ce }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: de }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: ce }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, r.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, r.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, r.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, r.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : oe.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, r.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var n = this.props, r = n.children;
		n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef;
		var i = t(n, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ x.createElement(ie.Provider, { value: null }, typeof r == "function" ? r(e, i) : x.cloneElement(x.Children.only(r), i));
	}, n;
}(x.Component);
fe.contextType = ie, fe.propTypes = {};
function V() {}
fe.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: V,
	onEntering: V,
	onEntered: V,
	onExit: V,
	onExiting: V,
	onExited: V
}, fe.UNMOUNTED = se, fe.EXITED = ce, fe.ENTERING = le, fe.ENTERED = ue, fe.EXITING = de;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var pe = !!(typeof window < "u" && window.document && window.document.createElement), me = !1, he = !1;
try {
	var ge = {
		get passive() {
			return me = !0;
		},
		get once() {
			return he = me = !0;
		}
	};
	pe && (window.addEventListener("test", ge, ge), window.removeEventListener("test", ge, !0));
} catch {}
function _e(e, t, n, r) {
	if (r && typeof r != "boolean" && !he) {
		var i = r.once, a = r.capture, o = n;
		!he && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, me ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function ve(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function ye(e, t, n, r) {
	return _e(e, t, n, r), function() {
		ve(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function be(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function xe(e) {
	var t = B(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function Se(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || be(e, "transitionend", !0);
	}, t + n), a = ye(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Ce(e, t, n, r) {
	n ??= xe(e) || 0;
	var i = Se(e, n, r), a = ye(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function we(e, t) {
	var n = B(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Te(e, t) {
	var n = Ce(e, function(r) {
		r.target === e && (n(), t(r));
	}, we(e, "transitionDuration") + we(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Ee() {
	return [...arguments].filter(function(e) {
		return e != null;
	}).reduce(function(e, t) {
		if (typeof t != "function") throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");
		return e === null ? t : function() {
			var n = [...arguments];
			e.apply(this, n), t.apply(this, n);
		};
	}, null);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function De(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Oe(e) {
	let t = (0, x.useRef)(e);
	return (0, x.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function ke(e) {
	let t = Oe(e);
	return (0, x.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Ae = ["className", "children"], je, Me = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Ne = (je = {}, je[le] = "show", je[ue] = "show", je), Pe = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.className, i = e.children, a = t(e, Ae), o = (0, x.useCallback)(function(e) {
		De(e), a.onEnter && a.onEnter(e);
	}, [a]);
	return /* @__PURE__ */ x.createElement(fe, v({
		ref: n,
		addEndListener: Te
	}, a, { onEnter: o }), function(e, t) {
		return /* @__PURE__ */ x.cloneElement(i, v({}, t, { className: (0, S.default)("fade", r, i.props.className, Ne[e]) }));
	});
});
Pe.defaultProps = Me, Pe.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Fe = /-(.)/g;
function Ie(e) {
	return e.replace(Fe, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Le = [
	"className",
	"bsPrefix",
	"as"
], Re = function(e) {
	return e[0].toUpperCase() + Ie(e).slice(1);
};
function ze(e, n) {
	var r = n === void 0 ? {} : n, i = r.displayName, a = i === void 0 ? Re(e) : i, s = r.Component, c = r.defaultProps, l = /* @__PURE__ */ x.forwardRef(function(n, r) {
		var i = n.className, a = n.bsPrefix, c = n.as, l = c === void 0 ? s || "div" : c, u = t(n, Le), d = o(a, e);
		return /* @__PURE__ */ x.createElement(l, v({
			ref: r,
			className: (0, S.default)(i, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = a, l;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Be = [
	"as",
	"disabled",
	"onKeyDown"
];
function Ve(e) {
	return !e || e.trim() === "#";
}
var He = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.as, i = r === void 0 ? "a" : r, a = e.disabled, o = e.onKeyDown, s = t(e, Be), c = function(e) {
		var t = s.href, n = s.onClick;
		if ((a || Ve(t)) && e.preventDefault(), a) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Ve(s.href) && (s.role = s.role || "button", s.href = s.href || "#"), a && (s.tabIndex = -1, s["aria-disabled"] = !0), /* @__PURE__ */ x.createElement(i, v({ ref: n }, s, {
		onClick: c,
		onKeyDown: Ee(function(e) {
			e.key === " " && (e.preventDefault(), c(e));
		}, o)
	}));
});
He.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Ue = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], We = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Ge = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.variant, a = e.size, s = e.active, c = e.className, l = e.block, u = e.type, d = e.as, f = t(e, Ue), p = o(r, "btn"), m = (0, S.default)(c, p, s && "active", i && p + "-" + i, l && p + "-block", a && p + "-" + a);
	if (f.href) return /* @__PURE__ */ x.createElement(He, v({}, f, {
		as: d,
		ref: n,
		className: (0, S.default)(m, f.disabled && "disabled")
	}));
	n && (f.ref = n), u ? f.type = u : d || (f.type = "button");
	var h = d || "button";
	return /* @__PURE__ */ x.createElement(h, v({}, f, { className: m }));
});
Ge.displayName = "Button", Ge.defaultProps = We;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Ke() {
	let e = (0, x.useRef)(!0), t = (0, x.useRef)(() => e.current);
	return (0, x.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function qe(e) {
	let t = (0, x.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Je(e) {
	let t = qe(e);
	(0, x.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var Ye = 2 ** 31 - 1;
function Xe(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Ye ? setTimeout(t, r) : setTimeout(() => Xe(e, t, n), Ye);
}
function Ze() {
	let e = Ke(), t = (0, x.useRef)();
	return Je(() => clearTimeout(t.current)), (0, x.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= Ye ? t.current = setTimeout(r, i) : Xe(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function Qe() {
	return (0, x.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function $e(e) {
	let t = Ke();
	return [e[0], (0, x.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var et = "bottom", tt = "right", nt = "left", rt = "auto", it = [
	"top",
	et,
	tt,
	nt
], at = "start", ot = "clippingParents", st = "viewport", ct = "popper", lt = "reference", ut = /* @__PURE__ */ it.reduce(function(e, t) {
	return e.concat([t + "-" + at, t + "-end"]);
}, []), dt = /* @__PURE__ */ [].concat(it, [rt]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + at,
		t + "-end"
	]);
}, []), ft = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function pt(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function mt(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function ht(e) {
	return e instanceof mt(e).Element || e instanceof Element;
}
function gt(e) {
	return e instanceof mt(e).HTMLElement || e instanceof HTMLElement;
}
function _t(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof mt(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var vt = Math.max, yt = Math.min, bt = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function xt() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function St() {
	return !/^((?!chrome|android).)*safari/i.test(xt());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Ct(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && gt(e) && (i = e.offsetWidth > 0 && bt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && bt(r.height) / e.offsetHeight || 1);
	var o = (ht(e) ? mt(e) : window).visualViewport, s = !St() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function wt(e) {
	var t = Ct(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function Tt(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && _t(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function Et(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Dt(e) {
	return mt(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ot(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Et(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function kt(e) {
	return ((ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function At(e) {
	return Et(e) === "html" ? e : e.assignedSlot || e.parentNode || (_t(e) ? e.host : null) || kt(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function jt(e) {
	return !gt(e) || Dt(e).position === "fixed" ? null : e.offsetParent;
}
function Mt(e) {
	var t = /firefox/i.test(xt());
	if (/Trident/i.test(xt()) && gt(e) && Dt(e).position === "fixed") return null;
	var n = At(e);
	for (_t(n) && (n = n.host); gt(n) && ["html", "body"].indexOf(Et(n)) < 0;) {
		var r = Dt(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Nt(e) {
	for (var t = mt(e), n = jt(e); n && Ot(n) && Dt(n).position === "static";) n = jt(n);
	return n && (Et(n) === "html" || Et(n) === "body" && Dt(n).position === "static") ? t : n || Mt(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function Pt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Ft(e, t, n) {
	return vt(e, yt(t, n));
}
function It(e, t, n) {
	var r = Ft(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Lt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Rt(e) {
	return Object.assign({}, Lt(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function zt(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Bt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Rt(typeof e == "number" ? zt(e, it) : e);
};
function Vt(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = pt(n.placement), c = Pt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Bt(i.padding, n), d = wt(a), f = c === "y" ? "top" : nt, p = c === "y" ? et : tt, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Nt(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Ft(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Ht(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Tt(t.elements.popper, r) && (t.elements.arrow = r));
}
var Ut = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Vt,
	effect: Ht,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Wt(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Gt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Kt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: bt(n * i) / i || 0,
		y: bt(r * i) / i || 0
	};
}
function qt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = nt, b = "top", x = window;
	if (l) {
		var S = Nt(n), C = "clientHeight", w = "clientWidth";
		if (S === mt(n) && (S = kt(n), Dt(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = et;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = tt;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Gt), O = u === !0 ? Kt({
		x: p,
		y: h
	}, mt(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Jt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: pt(t.placement),
		variation: Wt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Yt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Jt,
	data: {}
}, Xt = { passive: !0 };
function Zt(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = mt(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Xt);
	}), s && c.addEventListener("resize", n.update, Xt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Xt);
		}), s && c.removeEventListener("resize", n.update, Xt);
	};
}
var Qt = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Zt,
	data: {}
}, $t = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function en(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return $t[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var tn = {
	start: "end",
	end: "start"
};
function nn(e) {
	return e.replace(/start|end/g, function(e) {
		return tn[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function rn(e) {
	var t = mt(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function an(e) {
	return Ct(kt(e)).left + rn(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function on(e, t) {
	var n = mt(e), r = kt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = St();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + an(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function sn(e) {
	var t = kt(e), n = rn(e), r = e.ownerDocument?.body, i = vt(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = vt(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + an(e), s = -n.scrollTop;
	return Dt(r || t).direction === "rtl" && (o += vt(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function cn(e) {
	var t = Dt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function ln(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Et(e)) >= 0 ? e.ownerDocument.body : gt(e) && cn(e) ? e : ln(At(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function un(e, t) {
	t === void 0 && (t = []);
	var n = ln(e), r = n === e.ownerDocument?.body, i = mt(n), a = r ? [i].concat(i.visualViewport || [], cn(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(un(At(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function dn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function fn(e, t) {
	var n = Ct(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function pn(e, t, n) {
	return t === "viewport" ? dn(on(e, n)) : ht(t) ? fn(t, n) : dn(sn(kt(e)));
}
function mn(e) {
	var t = un(At(e)), n = ["absolute", "fixed"].indexOf(Dt(e).position) >= 0 && gt(e) ? Nt(e) : e;
	return ht(n) ? t.filter(function(e) {
		return ht(e) && Tt(e, n) && Et(e) !== "body";
	}) : [];
}
function hn(e, t, n, r) {
	var i = t === "clippingParents" ? mn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = pn(e, n, r);
		return t.top = vt(i.top, t.top), t.right = yt(i.right, t.right), t.bottom = yt(i.bottom, t.bottom), t.left = vt(i.left, t.left), t;
	}, pn(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function gn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? pt(r) : null, a = r ? Wt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case et:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case tt:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case nt:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? Pt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case at:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
			default:
		}
	}
	return c;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function _n(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? ot : s, l = n.rootBoundary, u = l === void 0 ? st : l, d = n.elementContext, f = d === void 0 ? ct : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Rt(typeof g == "number" ? zt(g, it) : g), v = f === "popper" ? lt : ct, y = e.rects.popper, b = e.elements[m ? v : f], x = hn(ht(b) ? b : b.contextElement || kt(e.elements.popper), c, u, o), S = Ct(e.elements.reference), C = gn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = dn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function vn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? dt : c, u = Wt(r), d = u ? s ? ut : ut.filter(function(e) {
		return Wt(e) === u;
	}) : it, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = _n(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[pt(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function yn(e) {
	if (pt(e) === "auto") return [];
	var t = en(e);
	return [
		nn(e),
		t,
		nn(t)
	];
}
function bn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = pt(g) === g, v = c || (_ || !m ? [en(g)] : yn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(pt(n) === "auto" ? vn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = pt(E), O = Wt(E) === at, k = ["top", et].indexOf(D) >= 0, A = k ? "width" : "height", j = _n(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? tt : nt : O ? et : "top";
			b[A] > x[A] && (M = en(M));
			var N = en(M), P = [];
			if (a && P.push(j[D] <= 0), s && P.push(j[M] <= 0, j[N] <= 0), P.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, P);
		}
		if (C) for (var F = m ? 3 : 1, I = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, L = F; L > 0 && I(L) !== "break"; L--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var xn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: bn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Sn(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function Cn(e) {
	return [
		"top",
		tt,
		et,
		nt
	].some(function(t) {
		return e[t] >= 0;
	});
}
function wn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = _n(t, { elementContext: "reference" }), s = _n(t, { altBoundary: !0 }), c = Sn(o, r), l = Sn(s, i, a), u = Cn(c), d = Cn(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var Tn = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: wn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function En(e, t, n) {
	var r = pt(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Dn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = dt.reduce(function(e, n) {
		return e[n] = En(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var On = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Dn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function kn(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = gn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var An = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: kn,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function jn(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Mn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = _n(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = pt(t.placement), v = Wt(t.placement), y = !v, b = Pt(_), x = jn(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : nt, A = b === "y" ? et : tt, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, z = p && R ? wt(R) : {
				width: 0,
				height: 0
			}, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Lt(), ee = B[k], te = B[A], ne = Ft(0, C[j], z[j]), re = y ? C[j] / 2 - F - ne - ee - E.mainAxis : I - ne - ee - E.mainAxis, ie = y ? -C[j] / 2 + F + ne + te + E.mainAxis : L + ne + te + E.mainAxis, ae = t.elements.arrow && Nt(t.elements.arrow), oe = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, se = D?.[b] ?? 0, ce = M + re - se - oe, le = M + ie - se, ue = Ft(p ? yt(N, ce) : N, M, p ? vt(P, le) : P);
			S[b] = ue, O[b] = ue - M;
		}
		if (s) {
			var de = b === "x" ? "top" : nt, fe = b === "x" ? et : tt, V = S[x], pe = x === "y" ? "height" : "width", me = V + g[de], he = V - g[fe], ge = ["top", nt].indexOf(_) !== -1, _e = D?.[x] ?? 0, ve = ge ? me : V - C[pe] - w[pe] - _e + E.altAxis, ye = ge ? V + C[pe] + w[pe] - _e - E.altAxis : he, be = p && ge ? It(ve, V, ye) : Ft(p ? ve : me, V, p ? ye : he);
			S[x] = be, O[x] = be - V;
		}
		t.modifiersData[r] = O;
	}
}
var Nn = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Mn,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Pn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Fn(e) {
	return e === mt(e) || !gt(e) ? rn(e) : Pn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function In(e) {
	var t = e.getBoundingClientRect(), n = bt(t.width) / e.offsetWidth || 1, r = bt(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Ln(e, t, n) {
	n === void 0 && (n = !1);
	var r = gt(t), i = gt(t) && In(t), a = kt(t), o = Ct(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Et(t) !== "body" || cn(a)) && (s = Fn(t)), gt(t) ? (c = Ct(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = an(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Rn(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function zn(e) {
	var t = Rn(e);
	return ft.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Bn(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function Vn(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var Hn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Un() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Wn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Hn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Hn, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: ht(e) ? un(e) : e.contextElement ? un(e.contextElement) : [],
					popper: un(t)
				};
				var s = zn(Vn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Un(t, n)) {
						i.rects = {
							reference: Ln(t, Nt(n), i.options.strategy === "fixed"),
							popper: wt(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: Bn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Un(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/popper.js
var Gn = Wn({ defaultModifiers: [
	Tn,
	An,
	Yt,
	Qt,
	On,
	xn,
	Nn,
	Ut
] }), Kn = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, qn = {
	name: "applyStyles",
	enabled: !1
}, Jn = {
	name: "ariaDescribedBy",
	enabled: !0,
	phase: "afterWrite",
	effect: function(e) {
		var t = e.state;
		return function() {
			var e = t.elements, n = e.reference, r = e.popper;
			if ("removeAttribute" in n) {
				var i = (n.getAttribute("aria-describedby") || "").split(",").filter(function(e) {
					return e.trim() !== r.id;
				});
				i.length ? n.setAttribute("aria-describedby", i.join(",")) : n.removeAttribute("aria-describedby");
			}
		};
	},
	fn: function(e) {
		var t = e.state.elements, n = t.popper, r = t.reference, i = n.getAttribute("role")?.toLowerCase();
		if (n.id && i === "tooltip" && "setAttribute" in r) {
			var a = r.getAttribute("aria-describedby");
			if (a && a.split(",").indexOf(n.id) !== -1) return;
			r.setAttribute("aria-describedby", a ? a + "," + n.id : n.id);
		}
	}
}, Yn = [];
function Xn(e, n, r) {
	var i = r === void 0 ? {} : r, a = i.enabled, o = a === void 0 ? !0 : a, s = i.placement, c = s === void 0 ? "bottom" : s, l = i.strategy, u = l === void 0 ? "absolute" : l, d = i.modifiers, f = d === void 0 ? Yn : d, p = t(i, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), m = (0, x.useRef)(), h = (0, x.useCallback)(function() {
		var e;
		(e = m.current) == null || e.update();
	}, []), g = (0, x.useCallback)(function() {
		var e;
		(e = m.current) == null || e.forceUpdate();
	}, []), _ = $e((0, x.useState)({
		placement: c,
		update: h,
		forceUpdate: g,
		attributes: {},
		styles: {
			popper: Kn(u),
			arrow: {}
		}
	})), y = _[0], b = _[1], S = (0, x.useMemo)(function() {
		return {
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: function(e) {
				var t = e.state, n = {}, r = {};
				Object.keys(t.elements).forEach(function(e) {
					n[e] = t.styles[e], r[e] = t.attributes[e];
				}), b({
					state: t,
					styles: n,
					attributes: r,
					update: h,
					forceUpdate: g,
					placement: t.placement
				});
			}
		};
	}, [
		h,
		g,
		b
	]);
	return (0, x.useEffect)(function() {
		!m.current || !o || m.current.setOptions({
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [S, qn])
		});
	}, [
		u,
		c,
		S,
		o
	]), (0, x.useEffect)(function() {
		if (!(!o || e == null || n == null)) return m.current = Gn(e, n, v({}, p, {
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [Jn, S])
		})), function() {
			m.current != null && (m.current.destroy(), m.current = void 0, b(function(e) {
				return v({}, e, {
					attributes: {},
					styles: { popper: Kn(u) }
				});
			}));
		};
	}, [
		o,
		e,
		n
	]), y;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Zn(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var Qn = /* @__PURE__ */ y(((e, t) => {
	var n = !1, r = function() {};
	if (n) {
		var i = function(e, t) {
			var n = arguments.length;
			t = Array(n > 1 ? n - 1 : 0);
			for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
			var i = 0, a = "Warning: " + e.replace(/%s/g, function() {
				return t[i++];
			});
			typeof console < "u" && console.error(a);
			try {
				throw Error(a);
			} catch {}
		};
		r = function(e, t, n) {
			var r = arguments.length;
			n = Array(r > 2 ? r - 2 : 0);
			for (var a = 2; a < r; a++) n[a - 2] = arguments[a];
			if (t === void 0) throw Error("`warning(condition, format, ...args)` requires a warning message argument");
			e || i.apply(null, [t].concat(n));
		};
	}
	t.exports = r;
}));
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
function $n(e) {
	return e && "setState" in e ? oe.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var er = (function(e) {
	return j($n(e));
}), tr = /* @__PURE__ */ e(Qn()), nr = 27, rr = function() {};
function ir(e) {
	return e.button === 0;
}
function ar(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var or = function(e) {
	return e && ("current" in e ? e.current : e);
};
function sr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, x.useRef)(!1), c = t || rr, l = (0, x.useCallback)(function(t) {
		var n = or(e);
		(0, tr.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || ar(t) || !ir(t) || !!Zn(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = ke(function(e) {
		s.current || c(e);
	}), d = ke(function(e) {
		e.keyCode === nr && c(e);
	});
	(0, x.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = er(or(e)), r = ye(n, o, l, !0), a = ye(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = ye(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return ye(e, "mousemove", rr);
			})), function() {
				r(), a(), s(), c.forEach(function(e) {
					return e();
				});
			};
		}
	}, [
		e,
		i,
		o,
		l,
		u,
		d
	]);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function cr(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function lr(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function ur(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = cr(u.modifiers);
	return v({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: lr(v({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: v({}, d.preventOverflow, { options: s ? v({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: v({ offset: a }, d.offset?.options) },
			arrow: v({}, d.arrow, {
				enabled: !!c,
				options: v({}, d.arrow?.options, { element: c })
			}),
			flip: v({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var dr = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function fr(e, t) {
	let n = dr(e), r = dr(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function pr(e, t) {
	return (0, x.useMemo)(() => fr(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function mr(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function hr(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function gr() {
	var e = (0, x.useRef)(null), t = (0, x.useRef)(null), n = (0, x.useRef)(null), r = o(void 0, "popover"), i = o(void 0, "dropdown-menu");
	return [(0, x.useCallback)(function(n) {
		!n || !(mr(n, r) || mr(n, i)) || (t.current = hr(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, x.useMemo)(function() {
			return {
				name: "offset",
				options: { offset: function(e) {
					var n = e.placement;
					if (!t.current) return [0, 0];
					var r = t.current, i = r.top, a = r.left, o = r.bottom, s = r.right;
					switch (n.split("-")[0]) {
						case "top": return [0, o];
						case "left": return [0, s];
						case "bottom": return [0, i];
						case "right": return [0, a];
						default: return [0, 0];
					}
				} }
			};
		}, [t]),
		(0, x.useMemo)(function() {
			return {
				name: "arrow",
				options: { padding: function() {
					if (!n.current) return 0;
					var e = n.current, t = e.top, r = e.right, i = t || r;
					return {
						top: i,
						left: i,
						right: i,
						bottom: i
					};
				} }
			};
		}, [n]),
		(0, x.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !mr(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = hr(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = hr(i.elements.arrow);
						return i.elements.arrow.style.margin = "0", function() {
							i.elements.arrow && (i.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [r])
	]];
}
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/isRequiredForA11y.js
var _r = /* @__PURE__ */ y(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = n;
	function n(e) {
		return function(t, n, r, i, a) {
			var o = r || "<<anonymous>>", s = a || n;
			if (t[n] == null) return /* @__PURE__ */ Error("The " + i + " `" + s + "` is required to make " + ("`" + o + "` accessible for users of assistive ") + "technologies such as screen readers.");
			var c = [...arguments].slice(5);
			return e.apply(void 0, [
				t,
				n,
				r,
				i,
				a
			].concat(c));
		};
	}
	t.exports = e.default;
})), vr = /* @__PURE__ */ y(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = n;
	function n(e) {
		function t(t, n, r, i, a, o) {
			var s = i || "<<anonymous>>", c = o || r;
			if (n[r] == null) return t ? /* @__PURE__ */ Error("Required " + a + " `" + c + "` was not specified " + ("in `" + s + "`.")) : null;
			var l = [...arguments].slice(6);
			return e.apply(void 0, [
				n,
				r,
				s,
				a,
				c
			].concat(l));
		}
		var n = t.bind(null, !1);
		return n.isRequired = t.bind(null, !0), n;
	}
	t.exports = e.default;
})), yr = /* @__PURE__ */ y(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(vr());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i() {
		var e = [...arguments];
		function t() {
			var t = [...arguments], n = null;
			return e.forEach(function(e) {
				if (n == null) {
					var r = e.apply(void 0, t);
					r != null && (n = r);
				}
			}), n;
		}
		return (0, n.default)(t);
	}
	t.exports = e.default;
})), H = /* @__PURE__ */ e(ne()), br = [
	"as",
	"className",
	"type",
	"tooltip"
], xr = {
	type: H.default.string,
	tooltip: H.default.bool,
	as: H.default.elementType
}, Sr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c === void 0 ? !1 : c, u = t(e, br);
	return /* @__PURE__ */ x.createElement(i, v({}, u, {
		ref: n,
		className: (0, S.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Sr.displayName = "Feedback", Sr.propTypes = xr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Cr = /* @__PURE__ */ x.createContext({ controlId: void 0 }), wr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Tr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.type, l = c === void 0 ? "checkbox" : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = t(e, wr), y = (0, x.useContext)(Cr), b = y.controlId, C = y.custom ? [a, "custom-control-input"] : [i, "form-check-input"], w = C[0], T = C[1];
	return i = o(w, T), /* @__PURE__ */ x.createElement(g, v({}, _, {
		ref: n,
		type: l,
		id: r || b,
		className: (0, S.default)(s, i, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
Tr.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Er = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Dr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = t(e, Er), l = (0, x.useContext)(Cr), u = l.controlId, d = l.custom ? [i, "custom-control-label"] : [r, "form-check-label"], f = d[0], p = d[1];
	return r = o(f, p), /* @__PURE__ */ x.createElement("label", v({}, c, {
		ref: n,
		htmlFor: s || u,
		className: (0, S.default)(a, r)
	}));
});
Dr.displayName = "FormCheckLabel", yr();
var Or = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"inline",
	"disabled",
	"isValid",
	"isInvalid",
	"feedbackTooltip",
	"feedback",
	"className",
	"style",
	"title",
	"type",
	"label",
	"children",
	"custom",
	"as"
], kr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.inline, c = s === void 0 ? !1 : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, y = e.className, b = e.style, C = e.title, w = C === void 0 ? "" : C, T = e.type, E = T === void 0 ? "checkbox" : T, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = t(e, Or), N = E === "switch" ? !0 : k, P = N ? [a, "custom-control"] : [i, "form-check"], F = P[0], I = P[1];
	i = o(F, I);
	var L = (0, x.useContext)(Cr).controlId, R = (0, x.useMemo)(function() {
		return {
			controlId: r || L,
			custom: N
		};
	}, [
		L,
		N,
		r
	]), z = N || D != null && D !== !1 && !O, B = /* @__PURE__ */ x.createElement(Tr, v({}, M, {
		type: E === "switch" ? "checkbox" : E,
		ref: n,
		isValid: f,
		isInvalid: m,
		isStatic: !z,
		disabled: u,
		as: j
	}));
	return /* @__PURE__ */ x.createElement(Cr.Provider, { value: R }, /* @__PURE__ */ x.createElement("div", {
		style: b,
		className: (0, S.default)(y, i, N && "custom-" + E, c && i + "-inline")
	}, O || /* @__PURE__ */ x.createElement(x.Fragment, null, B, z && /* @__PURE__ */ x.createElement(Dr, { title: w }, D), (f || m) && /* @__PURE__ */ x.createElement(Sr, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
kr.displayName = "FormCheck", kr.Input = Tr, kr.Label = Dr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Ar = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], jr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.isValid, l = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = t(e, Ar), m = (0, x.useContext)(Cr), h = m.controlId, g = m.custom, _ = "file", y = g ? [a, "custom-file-input"] : [i, "form-control-file"], b = y[0], C = y[1];
	return i = o(b, C), /* @__PURE__ */ x.createElement(f, v({}, p, {
		ref: n,
		id: r || h,
		type: _,
		lang: u,
		className: (0, S.default)(s, i, c && "is-valid", l && "is-invalid")
	}));
});
jr.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Mr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Nr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = t(e, Mr), l = (0, x.useContext)(Cr), u = l.controlId, d = l.custom ? [i, "custom-file-label"] : [r, "form-file-label"], f = d[0], p = d[1];
	return r = o(f, p), /* @__PURE__ */ x.createElement("label", v({}, c, {
		ref: n,
		htmlFor: s || u,
		className: (0, S.default)(a, r),
		"data-browse": c["data-browse"]
	}));
});
Nr.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Pr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"disabled",
	"isValid",
	"isInvalid",
	"feedbackTooltip",
	"feedback",
	"className",
	"style",
	"label",
	"children",
	"custom",
	"lang",
	"data-browse",
	"as",
	"inputAs"
], Fr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, y = e.label, b = e.children, C = e.custom, w = e.lang, T = e["data-browse"], E = e.as, D = E === void 0 ? "div" : E, O = e.inputAs, k = O === void 0 ? "input" : O, A = t(e, Pr), j = C ? [a, "custom"] : [i, "form-file"], M = j[0], N = j[1];
	i = o(M, N);
	var P = "file", F = (0, x.useContext)(Cr).controlId, I = (0, x.useMemo)(function() {
		return {
			controlId: r || F,
			custom: C
		};
	}, [
		F,
		C,
		r
	]), L = y != null && y !== !1 && !b, R = /* @__PURE__ */ x.createElement(jr, v({}, A, {
		ref: n,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: k,
		lang: w
	}));
	return /* @__PURE__ */ x.createElement(Cr.Provider, { value: I }, /* @__PURE__ */ x.createElement(D, {
		style: _,
		className: (0, S.default)(g, i, C && "custom-" + P)
	}, b || /* @__PURE__ */ x.createElement(x.Fragment, null, C ? /* @__PURE__ */ x.createElement(x.Fragment, null, R, L && /* @__PURE__ */ x.createElement(Nr, { "data-browse": T }, y)) : /* @__PURE__ */ x.createElement(x.Fragment, null, L && /* @__PURE__ */ x.createElement(Nr, null, y), R), (u || f) && /* @__PURE__ */ x.createElement(Sr, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Fr.displayName = "FormFile", Fr.Input = jr, Fr.Label = Nr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Ir = [
	"bsPrefix",
	"bsCustomPrefix",
	"type",
	"size",
	"htmlSize",
	"id",
	"className",
	"isValid",
	"isInvalid",
	"plaintext",
	"readOnly",
	"custom",
	"as"
], Lr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.type, s = e.size, c = e.htmlSize, l = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, y = e.as, b = y === void 0 ? "input" : y, C = t(e, Ir), w = (0, x.useContext)(Cr).controlId, T = _ ? [i, "custom"] : [r, "form-control"], E = T[0], D = T[1];
	r = o(E, D);
	var O;
	if (h) {
		var k;
		O = (k = {}, k[r + "-plaintext"] = !0, k);
	} else if (a === "file") {
		var A;
		O = (A = {}, A[r + "-file"] = !0, A);
	} else if (a === "range") {
		var j;
		O = (j = {}, j[r + "-range"] = !0, j);
	} else if (b === "select" && _) {
		var M;
		O = (M = {}, M[r + "-select"] = !0, M[r + "-select-" + s] = s, M);
	} else {
		var N;
		O = (N = {}, N[r] = !0, N[r + "-" + s] = s, N);
	}
	return /* @__PURE__ */ x.createElement(b, v({}, C, {
		type: a,
		size: c,
		ref: n,
		readOnly: g,
		id: l || w,
		className: (0, S.default)(u, O, f && "is-valid", m && "is-invalid")
	}));
});
Lr.displayName = "FormControl";
var Rr = Object.assign(Lr, { Feedback: Sr }), zr = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Br = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.controlId, c = e.as, l = c === void 0 ? "div" : c, u = t(e, zr);
	r = o(r, "form-group");
	var d = (0, x.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ x.createElement(Cr.Provider, { value: d }, /* @__PURE__ */ x.createElement(l, v({}, u, {
		ref: n,
		className: (0, S.default)(i, r)
	}), a));
});
Br.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Vr = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Hr = {
	column: !1,
	srOnly: !1
}, Ur = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.as, i = r === void 0 ? "label" : r, a = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, d = e.htmlFor, f = t(e, Vr), p = (0, x.useContext)(Cr).controlId;
	a = o(a, "form-label");
	var m = "col-form-label";
	typeof s == "string" && (m = m + " " + m + "-" + s);
	var h = (0, S.default)(l, a, c && "sr-only", s && m);
	return d ||= p, s ? /* @__PURE__ */ x.createElement(u, v({
		ref: n,
		as: "label",
		className: h,
		htmlFor: d
	}, f)) : /* @__PURE__ */ x.createElement(i, v({
		ref: n,
		className: h,
		htmlFor: d
	}, f));
});
Ur.displayName = "FormLabel", Ur.defaultProps = Hr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Wr = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Gr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, a = e.as, s = a === void 0 ? "small" : a, c = e.muted, l = t(e, Wr);
	return r = o(r, "form-text"), /* @__PURE__ */ x.createElement(s, v({}, l, {
		ref: n,
		className: (0, S.default)(i, r, c && "text-muted")
	}));
});
Gr.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Kr = /* @__PURE__ */ x.forwardRef(function(e, t) {
	return /* @__PURE__ */ x.createElement(kr, v({}, e, {
		ref: t,
		type: "switch"
	}));
});
Kr.displayName = "Switch", Kr.Input = kr.Input, Kr.Label = kr.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var qr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Jr = ze("form-row"), Yr = { inline: !1 }, Xr = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.inline, a = e.className, s = e.validated, c = e.as, l = c === void 0 ? "form" : c, u = t(e, qr);
	return r = o(r, "form"), /* @__PURE__ */ x.createElement(l, v({}, u, {
		ref: n,
		className: (0, S.default)(a, s && "was-validated", i && r + "-inline")
	}));
});
Xr.displayName = "Form", Xr.defaultProps = Yr, Xr.Row = Jr, Xr.Group = Br, Xr.Control = Rr, Xr.Check = kr, Xr.File = Fr, Xr.Switch = Kr, Xr.Label = Ur, Xr.Text = Gr;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var Zr = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? j().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function Qr(e, t) {
	var n = (0, x.useState)(function() {
		return Zr(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Zr(e);
		a && i(a);
	}
	return (0, x.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, x.useEffect)(function() {
		var t = Zr(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var $r = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.flip, i = e.offset, a = e.placement, o = e.containerPadding, s = o === void 0 ? 5 : o, c = e.popperConfig, l = c === void 0 ? {} : c, u = e.transition, d = Qe(), f = d[0], p = d[1], m = Qe(), h = m[0], g = m[1], _ = pr(p, n), y = Qr(e.container), b = Qr(e.target), S = (0, x.useState)(!e.show), C = S[0], w = S[1], T = Xn(b, f, ur({
		placement: a,
		enableEvents: !!e.show,
		containerPadding: s || 5,
		flip: r,
		offset: i,
		arrowElement: h,
		popperConfig: l
	})), E = T.styles, D = T.attributes, O = t(T, ["styles", "attributes"]);
	e.show ? C && w(!1) : !e.transition && !C && w(!0);
	var k = function() {
		w(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || u && !C;
	if (sr(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(v({}, O, {
		show: !!e.show,
		props: v({}, D.popper, {
			style: E.popper,
			ref: _
		}),
		arrowProps: v({}, D.arrow, {
			style: E.arrow,
			ref: g
		})
	}));
	if (u) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, I = e.onEntered;
		j = /* @__PURE__ */ x.createElement(u, {
			in: e.show,
			appear: !0,
			onExit: M,
			onExiting: N,
			onExited: k,
			onEnter: P,
			onEntering: F,
			onEntered: I
		}, j);
	}
	return y ? /* @__PURE__ */ oe.createPortal(j, y) : null;
});
$r.displayName = "Overlay", $r.propTypes = {
	show: H.default.bool,
	placement: H.default.oneOf(dt),
	target: H.default.any,
	container: H.default.any,
	flip: H.default.bool,
	children: H.default.func.isRequired,
	containerPadding: H.default.number,
	popperConfig: H.default.object,
	rootClose: H.default.bool,
	rootCloseEvent: H.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: H.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = H.default.func).isRequired.apply(n, [e].concat(t));
		}
		return H.default.func.apply(H.default, [e].concat(t));
	},
	transition: H.default.elementType,
	onEnter: H.default.func,
	onEntering: H.default.func,
	onEntered: H.default.func,
	onExit: H.default.func,
	onExiting: H.default.func,
	onExited: H.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var ei = [
	"children",
	"transition",
	"popperConfig"
], ti = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], ni = {
	transition: Pe,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ri(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n($n(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r($n(e));
	};
}
function ii(e) {
	var n = e.children, r = e.transition, i = e.popperConfig, a = i === void 0 ? {} : i, o = t(e, ei), s = (0, x.useRef)({}), c = gr(), l = c[0], u = c[1], d = r === !0 ? Pe : r || null;
	return /* @__PURE__ */ x.createElement($r, v({}, o, {
		ref: l,
		popperConfig: v({}, a, { modifiers: u.concat(a.modifiers || []) }),
		transition: d
	}), function(e) {
		var i = e.props, a = e.arrowProps, o = e.show, c = e.update;
		e.forceUpdate;
		var l = e.placement, u = e.state, d = t(e, ti);
		ri(i, a);
		var f = Object.assign(s.current, {
			state: u,
			scheduleUpdate: c,
			placement: l,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof n == "function" ? n(v({}, d, i, {
			placement: l,
			show: o
		}, !r && o && { className: "show" }, {
			popper: f,
			arrowProps: a
		})) : /* @__PURE__ */ x.cloneElement(n, v({}, d, i, {
			placement: l,
			arrowProps: a,
			popper: f,
			className: (0, S.default)(n.props.className, !r && o && "show"),
			style: v({}, n.props.style, i.style)
		}));
	});
}
ii.defaultProps = ni;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var ai = [
	"trigger",
	"overlay",
	"children",
	"popperConfig",
	"show",
	"defaultShow",
	"onToggle",
	"delay",
	"placement",
	"flip"
], oi = /* @__PURE__ */ function(e) {
	D(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(x.Component);
function si(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function ci(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Zn(i, a) && e.apply(void 0, t);
}
var li = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function ui(e) {
	var n = e.trigger, r = e.overlay, i = e.children, a = e.popperConfig, o = a === void 0 ? {} : a, s = e.show, c = e.defaultShow, l = c === void 0 ? !1 : c, u = e.onToggle, d = e.delay, f = e.placement, p = e.flip, m = p === void 0 ? f && f.indexOf("auto") !== -1 : p, h = t(e, ai), g = (0, x.useRef)(null), _ = Ze(), y = (0, x.useRef)(""), b = T(s, l, u), S = b[0], C = b[1], w = si(d), E = typeof i == "function" ? {} : x.Children.only(i).props, D = E.onFocus, O = E.onBlur, k = E.onClick, A = (0, x.useCallback)(function() {
		return $n(g.current);
	}, []), j = (0, x.useCallback)(function() {
		if (_.clear(), y.current = "show", !w.show) {
			C(!0);
			return;
		}
		_.set(function() {
			y.current === "show" && C(!0);
		}, w.show);
	}, [
		w.show,
		C,
		_
	]), M = (0, x.useCallback)(function() {
		if (_.clear(), y.current = "hide", !w.hide) {
			C(!1);
			return;
		}
		_.set(function() {
			y.current === "hide" && C(!1);
		}, w.hide);
	}, [
		w.hide,
		C,
		_
	]), N = (0, x.useCallback)(function() {
		j();
		var e = [...arguments];
		D?.apply(void 0, e);
	}, [j, D]), P = (0, x.useCallback)(function() {
		M();
		var e = [...arguments];
		O?.apply(void 0, e);
	}, [M, O]), F = (0, x.useCallback)(function() {
		C(!S), k && k.apply(void 0, arguments);
	}, [
		k,
		C,
		S
	]), I = (0, x.useCallback)(function() {
		ci(j, [...arguments], "fromElement");
	}, [j]), L = (0, x.useCallback)(function() {
		ci(M, [...arguments], "toElement");
	}, [M]), R = n == null ? [] : [].concat(n), z = {};
	return R.indexOf("click") !== -1 && (z.onClick = F), R.indexOf("focus") !== -1 && (z.onFocus = N, z.onBlur = P), R.indexOf("hover") !== -1 && (z.onMouseOver = I, z.onMouseOut = L), /* @__PURE__ */ x.createElement(x.Fragment, null, typeof i == "function" ? i(v({}, z, { ref: g })) : /* @__PURE__ */ x.createElement(oi, { ref: g }, /* @__PURE__ */ (0, x.cloneElement)(i, z)), /* @__PURE__ */ x.createElement(ii, v({}, h, {
		show: S,
		onHide: M,
		flip: m,
		placement: f,
		popperConfig: o,
		target: A
	}), r));
}
ui.defaultProps = li;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var di = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], fi = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.variant, a = e.animation, s = e.size, c = e.children, l = e.as, u = l === void 0 ? "div" : l, d = e.className, f = t(e, di);
	r = o(r, "spinner");
	var p = r + "-" + a;
	return /* @__PURE__ */ x.createElement(u, v({ ref: n }, f, { className: (0, S.default)(d, p, s && p + "-" + s, i && "text-" + i) }), c);
});
fi.displayName = "Spinner", _r();
var pi = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], mi = { placement: "right" }, hi = /* @__PURE__ */ x.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.placement, a = e.className, s = e.style, c = e.children, l = e.arrowProps;
	e.popper, e.show;
	var u = t(e, pi);
	r = o(r, "tooltip");
	var d = (i?.split("-") || [])[0];
	return /* @__PURE__ */ x.createElement("div", v({
		ref: n,
		style: s,
		role: "tooltip",
		"x-placement": d,
		className: (0, S.default)(a, r, "bs-tooltip-" + d)
	}, u), /* @__PURE__ */ x.createElement("div", v({ className: "arrow" }, l)), /* @__PURE__ */ x.createElement("div", { className: r + "-inner" }, c));
});
hi.defaultProps = mi, hi.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var gi = 0, _i = (e = "id") => (gi += 1, `${e}${gi}`), vi = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function yi(e, t, n) {
	class r extends x.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case vi.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case vi.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case vi.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case vi.MOVED_AND_FORMAT: {
					let n = this.props[r], i = `${t}: The prop '${r}' has been moved to '${a}'`;
					o && !o(n) && (i += " and expects a new format"), i += c ? `. ${c}` : "", this.warn(i), e[a] = s ? s(n, this.props) : n;
					break;
				}
				default:
					e[r] = this.props[r];
					break;
			}
			return e;
		}
		render() {
			let { children: t, ...n } = Object.keys(this.props).reduce(this.transformProps, {});
			return /* @__PURE__ */ x.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function bi({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ x.createElement("span", {
			className: (0, S.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ x.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ x.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("span", {
		id: t || _i("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ x.createElement("span", { className: "sr-only" }, i));
}
bi.propTypes = {
	src: H.default.elementType,
	svgAttrs: H.default.shape({
		"aria-label": H.default.string,
		"aria-labelledby": H.default.string
	}),
	id: H.default.string,
	size: H.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: H.default.string,
	hidden: H.default.bool,
	screenReaderText: H.default.oneOfType([H.default.string, H.default.element])
}, bi.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var xi = yi(bi, "Icon", { className: {
	deprType: vi.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), Si = /* @__PURE__ */ x.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ x.createElement(Ge, {
	size: r,
	...i,
	className: (0, S.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ x.createElement(xi, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ x.createElement(xi, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), Ci = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), wi = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Ti = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Ei = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Di = (e) => /* @__PURE__ */ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Oi = (e) => /* @__PURE__ */ x.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), ki = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Ai = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), ji = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], Mi = [
	"hover",
	"click",
	"focus"
];
function Ni(e) {
	return /* @__PURE__ */ x.createElement(ii, { ...e });
}
function Pi(e) {
	return /* @__PURE__ */ x.createElement(ui, { ...e }, e.children);
}
var Fi = H.default.oneOf(Mi);
Ni.propTypes = {
	children: H.default.node.isRequired,
	container: H.default.oneOfType([H.default.elementType, H.default.func]),
	onEnter: H.default.func,
	onEntered: H.default.func,
	onEntering: H.default.func,
	onExit: H.default.func,
	onExited: H.default.func,
	onExiting: H.default.func,
	onHide: H.default.func,
	placement: H.default.oneOf(ji),
	popperConfig: H.default.shape({}),
	rootClose: H.default.bool,
	rootCloseEvent: H.default.oneOf(["click", "mousedown"]),
	show: H.default.bool,
	target: H.default.oneOfType([H.default.elementType, H.default.func]),
	transition: H.default.oneOfType([H.default.object, H.default.bool])
}, Pi.propTypes = {
	children: H.default.oneOfType([H.default.element, H.default.func]).isRequired,
	overlay: H.default.oneOfType([H.default.element, H.default.func]).isRequired,
	defaultShow: H.default.bool,
	delay: H.default.oneOfType([H.default.number, H.default.shape({})]),
	flip: H.default.bool,
	onHide: H.default.func,
	onToggle: H.default.func,
	placement: H.default.oneOf(ji),
	popperConfig: H.default.shape({}),
	show: H.default.bool,
	target: H.default.instanceOf(EventTarget),
	trigger: H.default.oneOfType([Fi, H.default.arrayOf(Fi)])
}, Ni.defaultProps = {
	container: void 0,
	onEnter: void 0,
	onEntered: void 0,
	onEntering: void 0,
	onExit: void 0,
	onExited: void 0,
	onExiting: void 0,
	onHide: void 0,
	placement: "top",
	popperConfig: {},
	rootClose: !1,
	rootCloseEvent: void 0,
	show: !1,
	target: void 0,
	transition: Pe
}, Pi.defaultProps = {
	defaultShow: !1,
	delay: void 0,
	flip: void 0,
	onHide: void 0,
	onToggle: void 0,
	placement: void 0,
	popperConfig: {},
	show: void 0,
	target: void 0,
	trigger: ["hover", "focus"]
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Tooltip/index.js
var Ii = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], Li = /* @__PURE__ */ x.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ x.createElement(hi, {
	...n,
	className: (0, S.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Li.propTypes = {
	...hi.propTypes,
	id: H.default.string.isRequired,
	placement: H.default.oneOf(Ii),
	arrowProps: H.default.shape({
		ref: H.default.oneOfType([H.default.func, H.default.shape({ current: H.default.element })]),
		style: H.default.shape({})
	}),
	show: H.default.bool,
	popper: H.default.shape({}),
	bsPrefix: H.default.string,
	children: H.default.node,
	className: H.default.string,
	variant: H.default.string
}, Li.defaultProps = {
	...Li.defaultProps,
	id: void 0,
	placement: "right",
	arrowProps: void 0,
	show: void 0,
	popper: void 0,
	children: void 0,
	className: void 0,
	variant: void 0,
	bsPrefix: "tooltip"
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/IconButton/index.js
var Ri = /* @__PURE__ */ x.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = xi, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ x.createElement("button", {
		"aria-label": t,
		className: (0, S.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ x.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ x.createElement(g, {
		className: (0, S.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function zi({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ x.createElement(Pi, {
		placement: e,
		overlay: /* @__PURE__ */ x.createElement(Li, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ x.createElement(Ri, { ...n }));
}
Ri.IconButtonWithTooltip = zi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Bi(e) {
	return typeof e == "string" || e instanceof String;
}
function Vi(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Hi(e, t) {
	return Array.isArray(t) ? Hi(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var U = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function Ui(e) {
	switch (e) {
		case U.LEFT: return U.FORCE_LEFT;
		case U.RIGHT: return U.FORCE_RIGHT;
		default: return e;
	}
}
function Wi(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Gi(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Gi(t[i], e[i])) return !1;
		return !0;
	}
	if (n != r) return !1;
	if (t && e && typeof t == "object" && typeof e == "object") {
		let n = t instanceof Date, r = e instanceof Date;
		if (n && r) return t.getTime() == e.getTime();
		if (n != r) return !1;
		let a = t instanceof RegExp, o = e instanceof RegExp;
		if (a && o) return t.toString() == e.toString();
		if (a != o) return !1;
		let s = Object.keys(t);
		for (i = 0; i < s.length; i++) if (!Object.prototype.hasOwnProperty.call(e, s[i])) return !1;
		for (i = 0; i < s.length; i++) if (!Gi(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Ki = class {
	constructor(e) {
		for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start;
		if (this.insertedCount) for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end);) this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
	}
	get startChangePos() {
		return Math.min(this.cursorPos, this.oldSelection.start);
	}
	get insertedCount() {
		return this.cursorPos - this.startChangePos;
	}
	get inserted() {
		return this.value.substr(this.startChangePos, this.insertedCount);
	}
	get removedCount() {
		return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
	}
	get removed() {
		return this.oldValue.substr(this.startChangePos, this.removedCount);
	}
	get head() {
		return this.value.substring(0, this.startChangePos);
	}
	get tail() {
		return this.value.substring(this.startChangePos + this.insertedCount);
	}
	get removeDirection() {
		return !this.removedCount || this.insertedCount ? U.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? U.RIGHT : U.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function W(e, t) {
	return new W.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function qi(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? W.MaskedRegExp : Bi(e) ? W.MaskedPattern : e === Date ? W.MaskedDate : e === Number ? W.MaskedNumber : Array.isArray(e) || e === Array ? W.MaskedDynamic : W.Masked && e.prototype instanceof W.Masked ? e : W.Masked && e instanceof W.Masked ? e.constructor : e instanceof Function ? W.MaskedFunction : (console.warn("Mask not found for mask", e), W.Masked);
}
function Ji(e) {
	if (!e) throw Error("Options in not defined");
	if (W.Masked) {
		if (e.prototype instanceof W.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof W.Masked ? { mask: e } : Vi(e) && e.mask instanceof W.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Hi(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Vi(e) ? { ...e } : { mask: e };
}
function Yi(e) {
	if (W.Masked && e instanceof W.Masked) return e;
	let t = Ji(e), n = qi(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
W.createMask = Yi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var Xi = class {
	get selectionStart() {
		let e;
		try {
			e = this._unsafeSelectionStart;
		} catch {}
		return e ?? this.value.length;
	}
	get selectionEnd() {
		let e;
		try {
			e = this._unsafeSelectionEnd;
		} catch {}
		return e ?? this.value.length;
	}
	select(e, t) {
		if (!(e == null || t == null || e === this.selectionStart && t === this.selectionEnd)) try {
			this._unsafeSelect(e, t);
		} catch {}
	}
	get isActive() {
		return !1;
	}
};
W.MaskElement = Xi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var Zi = 90, Qi = 89, $i = class extends Xi {
	constructor(e) {
		super(), this.input = e, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
	}
	get rootElement() {
		var e;
		return (e = this.input).getRootNode?.call(e) ?? document;
	}
	get isActive() {
		return this.input === this.rootElement.activeElement;
	}
	bindEvents(e) {
		this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", e.drop), this.input.addEventListener("click", e.click), this.input.addEventListener("focus", e.focus), this.input.addEventListener("blur", e.commit), this._handlers = e;
	}
	_onKeydown(e) {
		if (this._handlers.redo && (e.keyCode === Zi && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Qi && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === Zi && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
		e.isComposing || this._handlers.selectionChange(e);
	}
	_onBeforeinput(e) {
		if (e.inputType === "historyUndo" && this._handlers.undo) return e.preventDefault(), this._handlers.undo(e);
		if (e.inputType === "historyRedo" && this._handlers.redo) return e.preventDefault(), this._handlers.redo(e);
	}
	_onCompositionEnd(e) {
		this._handlers.input(e);
	}
	_onInput(e) {
		e.isComposing || this._handlers.input(e);
	}
	unbindEvents() {
		this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
	}
};
W.HTMLMaskElement = $i;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var ea = class extends $i {
	constructor(e) {
		super(e), this.input = e;
	}
	get _unsafeSelectionStart() {
		return this.input.selectionStart == null ? this.value.length : this.input.selectionStart;
	}
	get _unsafeSelectionEnd() {
		return this.input.selectionEnd;
	}
	_unsafeSelect(e, t) {
		this.input.setSelectionRange(e, t);
	}
	get value() {
		return this.input.value;
	}
	set value(e) {
		this.input.value = e;
	}
};
W.HTMLMaskElement = $i;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var ta = class extends $i {
	get _unsafeSelectionStart() {
		let e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset, r = t && t.focusOffset;
		return r == null || n == null || n < r ? n : r;
	}
	get _unsafeSelectionEnd() {
		let e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset, r = t && t.focusOffset;
		return r == null || n == null || n > r ? n : r;
	}
	_unsafeSelect(e, t) {
		if (!this.rootElement.createRange) return;
		let n = this.rootElement.createRange();
		n.setStart(this.input.firstChild || this.input, e), n.setEnd(this.input.lastChild || this.input, t);
		let r = this.rootElement, i = r.getSelection && r.getSelection();
		i && (i.removeAllRanges(), i.addRange(n));
	}
	get value() {
		return this.input.textContent || "";
	}
	set value(e) {
		this.input.textContent = e;
	}
};
W.HTMLContenteditableMaskElement = ta;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var na = class e {
	constructor() {
		this.states = [], this.currentIndex = 0;
	}
	get currentState() {
		return this.states[this.currentIndex];
	}
	get isEmpty() {
		return this.states.length === 0;
	}
	push(t) {
		this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > e.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
	}
	go(e) {
		return this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1), this.currentState;
	}
	undo() {
		return this.go(-1);
	}
	redo() {
		return this.go(1);
	}
	clear() {
		this.states.length = 0, this.currentIndex = 0;
	}
};
na.MAX_LENGTH = 100, W.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof Xi ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new ta(e) : new ea(e), this.masked = Yi(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new na(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof W.Masked) && this.masked.constructor === qi(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof W.Masked ? e : Yi({ mask: e });
		t.unmaskedValue = this.masked.unmaskedValue, this.masked = t;
	}
	get value() {
		return this._value;
	}
	set value(e) {
		this.value !== e && (this.masked.value = e, this.updateControl("auto"));
	}
	get unmaskedValue() {
		return this._unmaskedValue;
	}
	set unmaskedValue(e) {
		this.unmaskedValue !== e && (this.masked.unmaskedValue = e, this.updateControl("auto"));
	}
	get rawInputValue() {
		return this._rawInputValue;
	}
	set rawInputValue(e) {
		this.rawInputValue !== e && (this.masked.rawInputValue = e, this.updateControl(), this.alignCursor());
	}
	get typedValue() {
		return this.masked.typedValue;
	}
	set typedValue(e) {
		this.masked.typedValueEquals(e) || (this.masked.typedValue = e, this.updateControl("auto"));
	}
	get displayValue() {
		return this.masked.displayValue;
	}
	_bindEvents() {
		this.el.bindEvents({
			selectionChange: this._saveSelection,
			input: this._onInput,
			drop: this._onDrop,
			click: this._onClick,
			focus: this._onFocus,
			commit: this._onChange,
			undo: this._onUndo,
			redo: this._onRedo
		});
	}
	_unbindEvents() {
		this.el && this.el.unbindEvents();
	}
	_fireEvent(e, t) {
		let n = this._listeners[e];
		n && n.forEach((e) => e(t));
	}
	get selectionStart() {
		return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
	}
	get cursorPos() {
		return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
	}
	set cursorPos(e) {
		!this.el || !this.el.isActive || (this.el.select(e, e), this._saveSelection());
	}
	_saveSelection() {
		this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
			start: this.selectionStart,
			end: this.cursorPos
		};
	}
	updateValue() {
		this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue;
	}
	updateControl(e) {
		let t = this.masked.unmaskedValue, n = this.masked.value, r = this.masked.rawInputValue, i = this.displayValue, a = this.unmaskedValue !== t || this.value !== n || this._rawInputValue !== r;
		this._unmaskedValue = t, this._value = n, this._rawInputValue = r, this.el.value !== i && (this.el.value = i), e === "auto" ? this.alignCursor() : e != null && (this.cursorPos = e), a && this._fireChangeEvents(), !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
			unmaskedValue: t,
			selection: {
				start: this.selectionStart,
				end: this.cursorPos
			}
		});
	}
	updateOptions(e) {
		let { mask: t, ...n } = e, r = !this.maskEquals(t), i = this.masked.optionsIsChanged(n);
		r && (this.mask = t), i && this.masked.updateOptions(n), (r || i) && this.updateControl();
	}
	updateCursor(e) {
		e != null && (this.cursorPos = e, this._delayUpdateCursor(e));
	}
	_delayUpdateCursor(e) {
		this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(() => {
			this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor());
		}, 10);
	}
	_fireChangeEvents() {
		this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
	}
	_abortUpdateCursor() {
		this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
	}
	alignCursor() {
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, U.LEFT));
	}
	alignCursorFriendly() {
		this.selectionStart === this.cursorPos && this.alignCursor();
	}
	on(e, t) {
		return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this;
	}
	off(e, t) {
		if (!this._listeners[e]) return this;
		if (!t) return delete this._listeners[e], this;
		let n = this._listeners[e].indexOf(t);
		return n >= 0 && this._listeners[e].splice(n, 1), this;
	}
	_onInput(e) {
		this._inputEvent = e, this._abortUpdateCursor();
		let t = new Ki({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : U.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== U.NONE && (a = this.masked.nearestInputPos(a, U.NONE)), this.updateControl(a), delete this._inputEvent;
	}
	_onChange() {
		this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
	}
	_onDrop(e) {
		e.preventDefault(), e.stopPropagation();
	}
	_onFocus(e) {
		this.alignCursorFriendly();
	}
	_onClick(e) {
		this.alignCursorFriendly();
	}
	_onUndo() {
		this._applyHistoryState(this.history.undo());
	}
	_onRedo() {
		this._applyHistoryState(this.history.redo());
	}
	_applyHistoryState(e) {
		e && (this._historyChanging = !0, this.unmaskedValue = e.unmaskedValue, this.el.select(e.selection.start, e.selection.end), this._saveSelection(), this._historyChanging = !1);
	}
	destroy() {
		this._unbindEvents(), this._listeners.length = 0, delete this.el;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/change-details.js
var G = class e {
	static normalize(t) {
		return Array.isArray(t) ? t : [t, new e()];
	}
	constructor(e) {
		Object.assign(this, {
			inserted: "",
			rawInserted: "",
			tailShift: 0,
			skip: !1
		}, e);
	}
	aggregate(e) {
		return this.inserted += e.inserted, this.rawInserted += e.rawInserted, this.tailShift += e.tailShift, this.skip = this.skip || e.skip, this;
	}
	get offset() {
		return this.tailShift + this.inserted.length;
	}
	get consumed() {
		return !!this.rawInserted || this.skip;
	}
	equals(e) {
		return this.inserted === e.inserted && this.tailShift === e.tailShift && this.rawInserted === e.rawInserted && this.skip === e.skip;
	}
};
W.ChangeDetails = G;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var ra = class {
	constructor(e, t, n) {
		e === void 0 && (e = ""), t === void 0 && (t = 0), this.value = e, this.from = t, this.stop = n;
	}
	toString() {
		return this.value;
	}
	extend(e) {
		this.value += String(e);
	}
	appendTo(e) {
		return e.append(this.toString(), { tail: !0 }).aggregate(e._appendPlaceholder());
	}
	get state() {
		return {
			value: this.value,
			from: this.from,
			stop: this.stop
		};
	}
	set state(e) {
		Object.assign(this, e);
	}
	unshift(e) {
		if (!this.value.length || e != null && this.from >= e) return "";
		let t = this.value[0];
		return this.value = this.value.slice(1), t;
	}
	shift() {
		if (!this.value.length) return "";
		let e = this.value[this.value.length - 1];
		return this.value = this.value.slice(0, -1), e;
	}
}, ia = class e {
	constructor(t) {
		this._value = "", this._update({
			...e.DEFAULTS,
			...t
		}), this._initialized = !0;
	}
	updateOptions(e) {
		this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e));
	}
	_update(e) {
		Object.assign(this, e);
	}
	get state() {
		return {
			_value: this.value,
			_rawInputValue: this.rawInputValue
		};
	}
	set state(e) {
		this._value = e._value;
	}
	reset() {
		this._value = "";
	}
	get value() {
		return this._value;
	}
	set value(e) {
		this.resolve(e, { input: !0 });
	}
	resolve(e, t) {
		t === void 0 && (t = { input: !0 }), this.reset(), this.append(e, t, ""), this.doCommit();
	}
	get unmaskedValue() {
		return this.value;
	}
	set unmaskedValue(e) {
		this.resolve(e, {});
	}
	get typedValue() {
		return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
	}
	set typedValue(e) {
		this.format ? this.value = this.format(e, this) : this.unmaskedValue = String(e);
	}
	get rawInputValue() {
		return this.extractInput(0, this.displayValue.length, { raw: !0 });
	}
	set rawInputValue(e) {
		this.resolve(e, { raw: !0 });
	}
	get displayValue() {
		return this.value;
	}
	get isComplete() {
		return !0;
	}
	get isFilled() {
		return this.isComplete;
	}
	nearestInputPos(e, t) {
		return e;
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), Math.min(this.displayValue.length, t - e);
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this.displayValue.slice(e, t);
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ra(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Bi(e) && (e = new ra(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new G({
			inserted: e,
			rawInserted: e
		})) : new G();
	}
	_appendChar(e, t, n) {
		t === void 0 && (t = {});
		let r = this.state, i;
		if ([e, i] = this.doPrepareChar(e, t), e && (i = i.aggregate(this._appendCharRaw(e, t)), !i.rawInserted && this.autofix === "pad")) {
			let n = this.state;
			this.state = r;
			let a = this.pad(t), o = this._appendCharRaw(e, t);
			a = a.aggregate(o), o.rawInserted || a.equals(i) ? i = a : this.state = n;
		}
		if (i.inserted) {
			let e, a = this.doValidate(t) !== !1;
			if (a && n != null) {
				let t = this.state;
				if (this.overwrite === !0) {
					e = n.state;
					for (let e = 0; e < i.rawInserted.length; ++e) n.unshift(this.displayValue.length - i.tailShift);
				}
				let r = this.appendTail(n);
				if (a = r.rawInserted.length === n.toString().length, !(a && r.inserted) && this.overwrite === "shift") {
					this.state = t, e = n.state;
					for (let e = 0; e < i.rawInserted.length; ++e) n.shift();
					r = this.appendTail(n), a = r.rawInserted.length === n.toString().length;
				}
				a && r.inserted && (this.state = t);
			}
			a || (i = new G(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new G();
	}
	_appendEager() {
		return new G();
	}
	append(e, t, n) {
		if (!Bi(e)) throw Error("value should be string");
		let r = Bi(n) ? new ra(String(n)) : n;
		t != null && t.tail && (t._beforeTailState = this.state);
		let i;
		[e, i] = this.doPrepare(e, t);
		for (let n = 0; n < e.length; ++n) {
			let a = this._appendChar(e[n], t, r);
			if (!a.rawInserted && !this.doSkipInvalid(e[n], t, r)) break;
			i.aggregate(a);
		}
		return (this.eager === !0 || this.eager === "append") && t != null && t.input && e && i.aggregate(this._appendEager()), r != null && (i.tailShift += this.appendTail(r).tailShift), i;
	}
	remove(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new G();
	}
	withValueRefresh(e) {
		if (this._refreshing || !this._initialized) return e();
		this._refreshing = !0;
		let t = this.rawInputValue, n = this.value, r = e();
		return this.rawInputValue = t, this.value && this.value !== n && n.indexOf(this.value) === 0 && (this.append(n.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, r;
	}
	runIsolated(e) {
		if (this._isolated || !this._initialized) return e(this);
		this._isolated = !0;
		let t = this.state, n = e(this);
		return this.state = t, delete this._isolated, n;
	}
	doSkipInvalid(e, t, n) {
		return !!this.skipInvalid;
	}
	doPrepare(e, t) {
		return t === void 0 && (t = {}), G.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), G.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = U.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = Ui(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new G();
		if (r !== U.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? U.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== U.NONE && c === this.rawInputValue) if (r === U.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new G({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === U.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Gi(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new G();
	}
};
ia.DEFAULTS = { skipInvalid: !0 }, ia.EMPTY_VALUES = [
	void 0,
	null,
	""
], W.Masked = ia;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var aa = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Bi(t) ? new ra(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof ra) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof W.MaskedPattern)) return new ra(this.toString()).appendTo(t);
		let n = new G();
		for (let r = 0; r < this.chunks.length; ++r) {
			let i = this.chunks[r], a = t._mapPosToBlock(t.displayValue.length), o = i.stop, s;
			if (o != null && (!a || a.index <= o) && ((i instanceof e || t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), s = i instanceof e && t._blocks[o]), s) {
				let e = s.appendTail(i);
				n.aggregate(e);
				let r = i.toString().slice(e.rawInserted.length);
				r && n.aggregate(t.append(r, { tail: !0 }));
			} else n.aggregate(t.append(i.toString(), { tail: !0 }));
		}
		return n;
	}
	get state() {
		return {
			chunks: this.chunks.map((e) => e.state),
			from: this.from,
			stop: this.stop,
			blockIndex: this.blockIndex
		};
	}
	set state(t) {
		let { chunks: n, ...r } = t;
		Object.assign(this, r), this.chunks = n.map((t) => {
			let n = "chunks" in t ? new e() : new ra();
			return n.state = t, n;
		});
	}
	unshift(e) {
		if (!this.chunks.length || e != null && this.from >= e) return "";
		let t = e == null ? e : e - this.from, n = 0;
		for (; n < this.chunks.length;) {
			let e = this.chunks[n], r = e.unshift(t);
			if (e.toString()) {
				if (!r) break;
				++n;
			} else this.chunks.splice(n, 1);
			if (r) return r;
		}
		return "";
	}
	shift() {
		if (!this.chunks.length) return "";
		let e = this.chunks.length - 1;
		for (; 0 <= e;) {
			let t = this.chunks[e], n = t.shift();
			if (t.toString()) {
				if (!n) break;
				--e;
			} else this.chunks.splice(e, 1);
			if (n) return n;
		}
		return "";
	}
}, oa = class {
	constructor(e, t) {
		this.masked = e, this._log = [];
		let { offset: n, index: r } = e._mapPosToBlock(t) || (t < 0 ? {
			index: 0,
			offset: 0
		} : {
			index: this.masked._blocks.length,
			offset: 0
		});
		this.offset = n, this.index = r, this.ok = !1;
	}
	get block() {
		return this.masked._blocks[this.index];
	}
	get pos() {
		return this.masked._blockStartPos(this.index) + this.offset;
	}
	get state() {
		return {
			index: this.index,
			offset: this.offset,
			ok: this.ok
		};
	}
	set state(e) {
		Object.assign(this, e);
	}
	pushState() {
		this._log.push(this.state);
	}
	popState() {
		let e = this._log.pop();
		return e && (this.state = e), e;
	}
	bindBlock() {
		this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
	}
	_pushLeft(e) {
		for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (t = this.block)?.displayValue.length || 0) {
			var t;
			if (e()) return this.ok = !0;
		}
		return this.ok = !1;
	}
	_pushRight(e) {
		for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return this.ok = !0;
		return this.ok = !1;
	}
	pushLeftBeforeFilled() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, U.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, U.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, U.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, U.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, U.NONE), !0;
		});
	}
}, sa = class {
	constructor(e) {
		Object.assign(this, e), this._value = "", this.isFixed = !0;
	}
	get value() {
		return this._value;
	}
	get unmaskedValue() {
		return this.isUnmasking ? this.value : "";
	}
	get rawInputValue() {
		return this._isRawInput ? this.value : "";
	}
	get displayValue() {
		return this.value;
	}
	reset() {
		this._isRawInput = !1, this._value = "";
	}
	remove(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new G();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = U.NONE);
		let n = this._value.length;
		switch (t) {
			case U.LEFT:
			case U.FORCE_LEFT: return 0;
			case U.NONE:
			case U.RIGHT:
			case U.FORCE_RIGHT:
			default: return n;
		}
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._isRawInput ? t - e : 0;
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), n === void 0 && (n = {}), n.raw && this._isRawInput && this._value.slice(e, t) || "";
	}
	get isComplete() {
		return !0;
	}
	get isFilled() {
		return !!this._value;
	}
	_appendChar(e, t) {
		if (t === void 0 && (t = {}), this.isFilled) return new G();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new G({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new G();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new ra("");
	}
	appendTail(e) {
		return Bi(e) && (e = new ra(String(e))), e.appendTo(this);
	}
	append(e, t, n) {
		let r = this._appendChar(e[0], t);
		return n != null && (r.tailShift += this.appendTail(n).tailShift), r;
	}
	doCommit() {}
	get state() {
		return {
			_value: this._value,
			_rawInputValue: this.rawInputValue
		};
	}
	set state(e) {
		this._value = e._value, this._isRawInput = !!e._rawInputValue;
	}
	pad(e) {
		return this._appendPlaceholder();
	}
}, ca = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = Yi(s), Object.assign(this, {
			parent: t,
			isOptional: n,
			placeholderChar: r,
			displayChar: i,
			lazy: a,
			eager: o
		});
	}
	reset() {
		this.isFilled = !1, this.masked.reset();
	}
	remove(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new G();
	}
	get value() {
		return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
	}
	get unmaskedValue() {
		return this.masked.unmaskedValue;
	}
	get rawInputValue() {
		return this.masked.rawInputValue;
	}
	get displayValue() {
		return this.masked.value && this.displayChar || this.value;
	}
	get isComplete() {
		return !!this.masked.value || this.isOptional;
	}
	_appendChar(e, t) {
		if (t === void 0 && (t = {}), this.isFilled) return new G();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new G(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new G() : (this.isFilled = !0, new G({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new G();
	}
	extractTail(e, t) {
		return this.masked.extractTail(e, t);
	}
	appendTail(e) {
		return this.masked.appendTail(e);
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), this.masked.extractInput(e, t, n);
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = U.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case U.LEFT:
			case U.FORCE_LEFT: return this.isComplete ? r : 0;
			case U.RIGHT:
			case U.FORCE_RIGHT: return this.isComplete ? r : n;
			case U.NONE:
			default: return r;
		}
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), this.value.slice(e, t).length;
	}
	doValidate(e) {
		return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)));
	}
	doCommit() {
		this.masked.doCommit();
	}
	get state() {
		return {
			_value: this.value,
			_rawInputValue: this.rawInputValue,
			masked: this.masked.state,
			isFilled: this.isFilled
		};
	}
	set state(e) {
		this.masked.state = e.masked, this.isFilled = e.isFilled;
	}
	currentMaskFlags(e) {
		var t;
		return {
			...e,
			_beforeTailState: (e == null || (t = e._beforeTailState) == null ? void 0 : t.masked) || e?._beforeTailState
		};
	}
	pad(e) {
		return new G();
	}
};
ca.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, W.MaskedRegExp = class extends ia {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let t = e.mask;
		t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern.js
var la = class e extends ia {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, ca.DEFAULT_DEFINITIONS, t?.definitions)
		});
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		e.definitions = Object.assign({}, this.definitions, e.definitions), super._update(e), this._rebuildMask();
	}
	_rebuildMask() {
		let t = this.definitions;
		this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
		let n = this.mask;
		if (!n || !t) return;
		let r = !1, i = !1;
		for (let a = 0; a < n.length; ++a) {
			if (this.blocks) {
				let e = n.slice(a), t = Object.keys(this.blocks).filter((t) => e.indexOf(t) === 0);
				t.sort((e, t) => t.length - e.length);
				let r = t[0];
				if (r) {
					let { expose: e, repeat: t, ...n } = Ji(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? Yi(i) : new W.RepeatBlock(i);
					o && (this._blocks.push(o), e && (this.exposeBlock = o), this._maskedBlocks[r] || (this._maskedBlocks[r] = []), this._maskedBlocks[r].push(this._blocks.length - 1)), a += r.length - 1;
					continue;
				}
			}
			let o = n[a], s = o in t;
			if (o === e.STOP_CHAR) {
				this._stops.push(this._blocks.length);
				continue;
			}
			if (o === "{" || o === "}") {
				r = !r;
				continue;
			}
			if (o === "[" || o === "]") {
				i = !i;
				continue;
			}
			if (o === e.ESCAPE_CHAR) {
				if (++a, o = n[a], !o) break;
				s = !1;
			}
			let c = s ? new ca({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Ji(t[o]),
				parent: this
			}) : new sa({
				char: o,
				eager: this.eager,
				isUnmasking: r
			});
			this._blocks.push(c);
		}
	}
	get state() {
		return {
			...super.state,
			_blocks: this._blocks.map((e) => e.state)
		};
	}
	set state(e) {
		if (!e) {
			this.reset();
			return;
		}
		let { _blocks: t, ...n } = e;
		this._blocks.forEach((e, n) => e.state = t[n]), super.state = n;
	}
	reset() {
		super.reset(), this._blocks.forEach((e) => e.reset());
	}
	get isComplete() {
		return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((e) => e.isComplete);
	}
	get isFilled() {
		return this._blocks.every((e) => e.isFilled);
	}
	get isFixed() {
		return this._blocks.every((e) => e.isFixed);
	}
	get isOptional() {
		return this._blocks.every((e) => e.isOptional);
	}
	doCommit() {
		this._blocks.forEach((e) => e.doCommit()), super.doCommit();
	}
	get unmaskedValue() {
		return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((e, t) => e += t.unmaskedValue, "");
	}
	set unmaskedValue(e) {
		if (this.exposeBlock) {
			let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
			this.exposeBlock.unmaskedValue = e, this.appendTail(t), this.doCommit();
		} else super.unmaskedValue = e;
	}
	get value() {
		return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((e, t) => e += t.value, "");
	}
	set value(e) {
		if (this.exposeBlock) {
			let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
			this.exposeBlock.value = e, this.appendTail(t), this.doCommit();
		} else super.value = e;
	}
	get typedValue() {
		return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
	}
	set typedValue(e) {
		if (this.exposeBlock) {
			let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
			this.exposeBlock.typedValue = e, this.appendTail(t), this.doCommit();
		} else super.typedValue = e;
	}
	get displayValue() {
		return this._blocks.reduce((e, t) => e += t.displayValue, "");
	}
	appendTail(e) {
		return super.appendTail(e).aggregate(this._appendPlaceholder());
	}
	_appendEager() {
		let e = new G(), t = this._mapPosToBlock(this.displayValue.length)?.index;
		if (t == null) return e;
		this._blocks[t].isFilled && ++t;
		for (let n = t; n < this._blocks.length; ++n) {
			let t = this._blocks[n]._appendEager();
			if (!t.inserted) break;
			e.aggregate(t);
		}
		return e;
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = this._mapPosToBlock(this.displayValue.length), r = new G();
		if (!n) return r;
		for (let a = n.index, o; o = this._blocks[a]; ++a) {
			var i;
			let n = o._appendChar(e, {
				...t,
				_beforeTailState: (i = t._beforeTailState) == null || (i = i._blocks) == null ? void 0 : i[a]
			});
			if (r.aggregate(n), n.consumed) break;
		}
		return r;
	}
	extractTail(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = new aa();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof aa && (a.blockIndex = t), n.extend(a);
		}), n;
	}
	extractInput(e, t, n) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), n === void 0 && (n = {}), e === t) return "";
		let r = "";
		return this._forEachBlocksInRange(e, t, (e, t, i, a) => {
			r += e.extractInput(i, a, n);
		}), r;
	}
	_findStopBefore(e) {
		let t;
		for (let n = 0; n < this._stops.length; ++n) {
			let r = this._stops[n];
			if (r <= e) t = r;
			else break;
		}
		return t;
	}
	_appendPlaceholder(e) {
		let t = new G();
		if (this.lazy && e == null) return t;
		let n = this._mapPosToBlock(this.displayValue.length);
		if (!n) return t;
		let r = n.index, i = e ?? this._blocks.length;
		return this._blocks.slice(r, i).forEach((n) => {
			(!n.lazy || e != null) && t.aggregate(n._appendPlaceholder(n._blocks?.length));
		}), t;
	}
	_mapPosToBlock(e) {
		let t = "";
		for (let n = 0; n < this._blocks.length; ++n) {
			let r = this._blocks[n], i = t.length;
			if (t += r.displayValue, e <= t.length) return {
				index: n,
				offset: e - i
			};
		}
	}
	_blockStartPos(e) {
		return this._blocks.slice(0, e).reduce((e, t) => e += t.displayValue.length, 0);
	}
	_forEachBlocksInRange(e, t, n) {
		t === void 0 && (t = this.displayValue.length);
		let r = this._mapPosToBlock(e);
		if (r) {
			let e = this._mapPosToBlock(t), i = e && r.index === e.index, a = r.offset, o = e && i ? e.offset : this._blocks[r.index].displayValue.length;
			if (n(this._blocks[r.index], r.index, a, o), e && !i) {
				for (let t = r.index + 1; t < e.index; ++t) n(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
				n(this._blocks[e.index], e.index, 0, e.offset);
			}
		}
	}
	remove(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = super.remove(e, t);
		return this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			n.aggregate(e.remove(r, i));
		}), n;
	}
	nearestInputPos(e, t) {
		if (t === void 0 && (t = U.NONE), !this._blocks.length) return 0;
		let n = new oa(this, e);
		if (t === U.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === U.LEFT || t === U.FORCE_LEFT) {
			if (t === U.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === U.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === U.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === U.RIGHT || t === U.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === U.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, U.LEFT))) : e;
	}
	totalInputPositions(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = 0;
		return this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			n += e.totalInputPositions(r, i);
		}), n;
	}
	maskedBlock(e) {
		return this.maskedBlocks(e)[0];
	}
	maskedBlocks(e) {
		let t = this._maskedBlocks[e];
		return t ? t.map((e) => this._blocks[e]) : [];
	}
	pad(e) {
		let t = new G();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
la.DEFAULTS = {
	...ia.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, la.STOP_CHAR = "`", la.ESCAPE_CHAR = "\\", la.InputDefinition = ca, la.FixedDefinition = sa, W.MaskedPattern = la;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var ua = class extends la {
	get _matchFrom() {
		return this.maxLength - String(this.from).length;
	}
	constructor(e) {
		super(e);
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let { to: t = this.to || 0, from: n = this.from || 0, maxLength: r = this.maxLength || 0, autofix: i = this.autofix, ...a } = e;
		this.to = t, this.from = n, this.maxLength = Math.max(String(t).length, r), this.autofix = i;
		let o = String(this.from).padStart(this.maxLength, "0"), s = String(this.to).padStart(this.maxLength, "0"), c = 0;
		for (; c < s.length && s[c] === o[c];) ++c;
		a.mask = s.slice(0, c).replace(/0/g, "\\0") + "0".repeat(this.maxLength - c), super._update(a);
	}
	get isComplete() {
		return super.isComplete && !!this.value;
	}
	boundaries(e) {
		let t = "", n = "", [, r, i] = e.match(/^(\D*)(\d*)(\D*)/) || [];
		return i && (t = "0".repeat(r.length) + i, n = "9".repeat(r.length) + i), t = t.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9"), [t, n];
	}
	doPrepareChar(e, t) {
		t === void 0 && (t = {});
		let n;
		return [e, n] = super.doPrepareChar(e.replace(/\D/g, ""), t), e || (n.skip = !this.isComplete), [e, n];
	}
	_appendCharRaw(e, t) {
		if (t === void 0 && (t = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(e, t);
		let n = String(this.from).padStart(this.maxLength, "0"), r = String(this.to).padStart(this.maxLength, "0"), [i, a] = this.boundaries(this.value + e);
		return Number(a) < this.from ? super._appendCharRaw(n[this.value.length], t) : Number(i) > this.to ? !t.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(n[this.value.length], t).aggregate(this._appendCharRaw(e, t)) : super._appendCharRaw(r[this.value.length], t) : super._appendCharRaw(e, t);
	}
	doValidate(e) {
		let t = this.value;
		if (t.search(/[^0]/) === -1 && t.length <= this._matchFrom) return !0;
		let [n, r] = this.boundaries(t);
		return this.from <= Number(r) && Number(n) <= this.to && super.doValidate(e);
	}
	pad(e) {
		let t = new G();
		if (this.value.length === this.maxLength) return t;
		let n = this.value, r = this.maxLength - this.value.length;
		if (r) {
			this.reset();
			for (let n = 0; n < r; ++n) t.aggregate(super._appendCharRaw("0", e));
			n.split("").forEach((e) => this._appendCharRaw(e));
		}
		return t;
	}
};
W.MaskedRange = ua;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var da = "d{.}`m{.}`Y", fa = class e extends la {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Bi(t) ? t : n
		};
	}
	constructor(t) {
		super(e.extractPatternOptions({
			...e.DEFAULTS,
			...t
		}));
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(t) {
		let { mask: n, pattern: r, blocks: i, ...a } = {
			...e.DEFAULTS,
			...t
		}, o = Object.assign({}, e.GET_DEFAULT_BLOCKS());
		t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
			...a,
			mask: Bi(n) ? n : r,
			blocks: o
		});
	}
	doValidate(e) {
		let t = this.date;
		return super.doValidate(e) && (!this.isComplete || this.isDateExist(this.value) && t != null && (this.min == null || this.min <= t) && (this.max == null || t <= this.max));
	}
	isDateExist(e) {
		return this.format(this.parse(e, this), this).indexOf(e) >= 0;
	}
	get date() {
		return this.typedValue;
	}
	set date(e) {
		this.typedValue = e;
	}
	get typedValue() {
		return this.isComplete ? super.typedValue : null;
	}
	set typedValue(e) {
		super.typedValue = e;
	}
	maskEquals(e) {
		return e === Date || super.maskEquals(e);
	}
	optionsIsChanged(t) {
		return super.optionsIsChanged(e.extractPatternOptions(t));
	}
};
fa.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: ua,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: ua,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: ua,
		from: 1900,
		to: 9999
	}
}), fa.DEFAULTS = {
	...la.DEFAULTS,
	mask: Date,
	pattern: da,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, W.MaskedDate = fa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var pa = class e extends ia {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t
		}), this.currentMask = void 0;
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		super._update(e), "mask" in e && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(e.mask) ? e.mask.map((e) => {
			let { expose: t, ...n } = Ji(e), r = Yi({
				overwrite: this._overwrite,
				eager: this._eager,
				skipInvalid: this._skipInvalid,
				...n
			});
			return t && (this.exposeMask = r), r;
		}) : []);
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = this._applyDispatch(e, t);
		return this.currentMask && n.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), n;
	}
	_applyDispatch(e, t, n) {
		e === void 0 && (e = ""), t === void 0 && (t = {}), n === void 0 && (n = "");
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new G(), l = s?.state;
		return this.currentMask = this.doDispatch(e, { ...t }, n), this.currentMask && (this.currentMask === s ? l && (this.currentMask.state = l) : (this.currentMask.reset(), a && (this.currentMask.append(a, { raw: !0 }), c.tailShift = this.currentMask.value.length - r.length), o && (c.tailShift += this.currentMask.append(o, {
			raw: !0,
			tail: !0
		}).tailShift))), c;
	}
	_appendPlaceholder() {
		let e = this._applyDispatch();
		return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e;
	}
	_appendEager() {
		let e = this._applyDispatch();
		return this.currentMask && e.aggregate(this.currentMask._appendEager()), e;
	}
	appendTail(e) {
		let t = new G();
		return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e));
	}
	currentMaskFlags(e) {
		return {
			...e,
			_beforeTailState: e._beforeTailState?.currentMaskRef === this.currentMask && e._beforeTailState?.currentMask || e._beforeTailState
		};
	}
	doDispatch(e, t, n) {
		return t === void 0 && (t = {}), n === void 0 && (n = ""), this.dispatch(e, this, t, n);
	}
	doValidate(e) {
		return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)));
	}
	doPrepare(e, t) {
		t === void 0 && (t = {});
		let [n, r] = super.doPrepare(e, t);
		if (this.currentMask) {
			let e;
			[n, e] = super.doPrepare(n, this.currentMaskFlags(t)), r = r.aggregate(e);
		}
		return [n, r];
	}
	doPrepareChar(e, t) {
		t === void 0 && (t = {});
		let [n, r] = super.doPrepareChar(e, t);
		if (this.currentMask) {
			let e;
			[n, e] = super.doPrepareChar(n, this.currentMaskFlags(t)), r = r.aggregate(e);
		}
		return [n, r];
	}
	reset() {
		var e;
		(e = this.currentMask) == null || e.reset(), this.compiledMasks.forEach((e) => e.reset());
	}
	get value() {
		return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
	}
	set value(e) {
		this.exposeMask ? (this.exposeMask.value = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = e;
	}
	get unmaskedValue() {
		return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
	}
	set unmaskedValue(e) {
		this.exposeMask ? (this.exposeMask.unmaskedValue = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = e;
	}
	get typedValue() {
		return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
	}
	set typedValue(e) {
		if (this.exposeMask) {
			this.exposeMask.typedValue = e, this.currentMask = this.exposeMask, this._applyDispatch();
			return;
		}
		let t = String(e);
		this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t;
	}
	get displayValue() {
		return this.currentMask ? this.currentMask.displayValue : "";
	}
	get isComplete() {
		return !!this.currentMask?.isComplete;
	}
	get isFilled() {
		return !!this.currentMask?.isFilled;
	}
	remove(e, t) {
		let n = new G();
		return this.currentMask && n.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()), n;
	}
	get state() {
		return {
			...super.state,
			_rawInputValue: this.rawInputValue,
			compiledMasks: this.compiledMasks.map((e) => e.state),
			currentMaskRef: this.currentMask,
			currentMask: this.currentMask?.state
		};
	}
	set state(e) {
		let { compiledMasks: t, currentMaskRef: n, currentMask: r, ...i } = e;
		t && this.compiledMasks.forEach((e, n) => e.state = t[n]), n != null && (this.currentMask = n, this.currentMask.state = r), super.state = i;
	}
	extractInput(e, t, n) {
		return this.currentMask ? this.currentMask.extractInput(e, t, n) : "";
	}
	extractTail(e, t) {
		return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t);
	}
	doCommit() {
		this.currentMask && this.currentMask.doCommit(), super.doCommit();
	}
	nearestInputPos(e, t) {
		return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t);
	}
	get overwrite() {
		return this.currentMask ? this.currentMask.overwrite : this._overwrite;
	}
	set overwrite(e) {
		this._overwrite = e;
	}
	get eager() {
		return this.currentMask ? this.currentMask.eager : this._eager;
	}
	set eager(e) {
		this._eager = e;
	}
	get skipInvalid() {
		return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
	}
	set skipInvalid(e) {
		this._skipInvalid = e;
	}
	get autofix() {
		return this.currentMask ? this.currentMask.autofix : this._autofix;
	}
	set autofix(e) {
		this._autofix = e;
	}
	maskEquals(e) {
		return Array.isArray(e) ? this.compiledMasks.every((t, n) => {
			if (!e[n]) return;
			let { mask: r, ...i } = e[n];
			return Gi(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
pa.DEFAULTS = {
	...ia.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, U.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, U.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, W.MaskedDynamic = pa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var ma = class e extends la {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t
		});
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let { enum: t, ...n } = e;
		if (t) {
			let e = t.map((e) => e.length), r = Math.min(...e), i = Math.max(...e) - r;
			n.mask = "*".repeat(r), i && (n.mask += "[" + "*".repeat(i) + "]"), this.enum = t;
		}
		super._update(n);
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = Math.min(this.nearestInputPos(0, U.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new G({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ra("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new G();
		let n = Math.min(super.nearestInputPos(0, U.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
ma.DEFAULTS = {
	...la.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, W.MaskedEnum = ma, W.MaskedFunction = class extends ia {
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		super._update({
			...e,
			validate: e.mask
		});
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/number.js
var ha, ga = class e extends ia {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t
		});
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		super._update(e), this._updateRegExps();
	}
	_updateRegExps() {
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Wi(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Wi).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Wi(this.thousandsSeparator), "g");
	}
	_removeThousandsSeparators(e) {
		return e.replace(this._thousandsSeparatorRegExp, "");
	}
	_insertThousandsSeparators(e) {
		let t = e.split(this.radix);
		return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix);
	}
	doPrepareChar(e, t) {
		t === void 0 && (t = {});
		let [n, r] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (t.input && t.raw || !t.input && !t.raw) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
		return e && !n && (r.skip = !0), n && !this.allowPositive && !this.value && n !== "-" && r.aggregate(this._appendChar("-")), [n, r];
	}
	_separatorsCount(e, t) {
		t === void 0 && (t = !1);
		let n = 0;
		for (let r = 0; r < e; ++r) this._value.indexOf(this.thousandsSeparator, r) === r && (++n, t && (e += this.thousandsSeparator.length));
		return n;
	}
	_separatorsCountFromSlice(e) {
		return e === void 0 && (e = this._value), this._separatorsCount(this._removeThousandsSeparators(e).length, !0);
	}
	extractInput(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t), this._removeThousandsSeparators(super.extractInput(e, t, n));
	}
	_appendCharRaw(t, n) {
		n === void 0 && (n = {});
		let r = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, i = this._separatorsCountFromSlice(r);
		this._value = this._removeThousandsSeparators(this.value);
		let a = this._value;
		this._value += t;
		let o = this.number, s = !isNaN(o), c = !1;
		if (s) {
			let t;
			this.min != null && this.min < 0 && this.number < this.min && (t = this.min), this.max != null && this.max > 0 && this.number > this.max && (t = this.max), t != null && (this.autofix ? (this._value = this.format(t, this).replace(e.UNMASKED_RADIX, this.radix), c ||= a === this._value && !n.tail) : s = !1), s &&= !!this._value.match(this._numberRegExp);
		}
		let l;
		s ? l = new G({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new G()), this._value = this._insertThousandsSeparators(this._value);
		let u = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, d = this._separatorsCountFromSlice(u);
		return l.tailShift += (d - i) * this.thousandsSeparator.length, l;
	}
	_findSeparatorAround(e) {
		if (this.thousandsSeparator) {
			let t = e - this.thousandsSeparator.length + 1, n = this.value.indexOf(this.thousandsSeparator, t);
			if (n <= e) return n;
		}
		return -1;
	}
	_adjustRangeWithSeparators(e, t) {
		let n = this._findSeparatorAround(e);
		n >= 0 && (e = n);
		let r = this._findSeparatorAround(t);
		return r >= 0 && (t = r + this.thousandsSeparator.length), [e, t];
	}
	remove(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t);
		let n = this.value.slice(0, e), r = this.value.slice(t), i = this._separatorsCount(n.length);
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new G({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case U.NONE:
			case U.LEFT:
			case U.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === U.FORCE_LEFT) return n;
				}
				break;
			}
			case U.RIGHT:
			case U.FORCE_RIGHT: {
				let t = this._findSeparatorAround(e);
				if (t >= 0) return t + this.thousandsSeparator.length;
			}
		}
		return e;
	}
	doCommit() {
		if (this.value) {
			let e = this.number, t = e;
			this.min != null && (t = Math.max(t, this.min)), this.max != null && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.format(t, this));
			let n = this.value;
			this.normalizeZeros && (n = this._normalizeZeros(n)), this.padFractionalZeros && this.scale > 0 && (n = this._padFractionalZeros(n)), this._value = n;
		}
		super.doCommit();
	}
	_normalizeZeros(e) {
		let t = this._removeThousandsSeparators(e).split(this.radix);
		return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, n, r) => t + r), e.length && !/\d$/.test(t[0]) && (t[0] += "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix));
	}
	_padFractionalZeros(e) {
		if (!e) return e;
		let t = e.split(this.radix);
		return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix);
	}
	doSkipInvalid(t, n, r) {
		n === void 0 && (n = {});
		let i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === e.UNMASKED_RADIX || this.mapToRadix.includes(t));
		return super.doSkipInvalid(t, n, r) && !i;
	}
	get unmaskedValue() {
		return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, e.UNMASKED_RADIX);
	}
	set unmaskedValue(e) {
		super.unmaskedValue = e;
	}
	get typedValue() {
		return this.parse(this.unmaskedValue, this);
	}
	set typedValue(t) {
		this.rawInputValue = this.format(t, this).replace(e.UNMASKED_RADIX, this.radix);
	}
	get number() {
		return this.typedValue;
	}
	set number(e) {
		this.typedValue = e;
	}
	get allowNegative() {
		return this.min != null && this.min < 0 || this.max != null && this.max < 0;
	}
	get allowPositive() {
		return this.min != null && this.min > 0 || this.max != null && this.max > 0;
	}
	typedValueEquals(t) {
		return (super.typedValueEquals(t) || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
	}
};
ha = ga, ga.UNMASKED_RADIX = ".", ga.EMPTY_VALUES = [...ia.EMPTY_VALUES, 0], ga.DEFAULTS = {
	...ia.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [ha.UNMASKED_RADIX],
	min: -(2 ** 53 - 1),
	max: 2 ** 53 - 1,
	scale: 2,
	normalizeZeros: !0,
	padFractionalZeros: !1,
	parse: Number,
	format: (e) => e.toLocaleString("en-US", {
		useGrouping: !1,
		maximumFractionDigits: 20
	})
}, W.MaskedNumber = ga;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var _a = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function va(e, t, n) {
	t === void 0 && (t = _a.MASKED), n === void 0 && (n = _a.MASKED);
	let r = Yi(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function ya(e, t, n, r) {
	return va(t, n, r)(e);
}
W.PIPE_TYPE = _a, W.createPipe = va, W.pipe = ya, W.RepeatBlock = class extends la {
	get repeatFrom() {
		return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) ?? 0;
	}
	get repeatTo() {
		return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? Infinity;
	}
	constructor(e) {
		super(e);
	}
	updateOptions(e) {
		super.updateOptions(e);
	}
	_update(e) {
		let { repeat: t, ...n } = Ji(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = Yi(this._blockOpts);
		this.repeat = t ?? r.repeat ?? this.repeat ?? Infinity, super._update({
			mask: "m".repeat(Math.max(this.repeatTo === Infinity && this._blocks?.length || 0, this.repeatFrom)),
			blocks: { m: r },
			eager: r.eager,
			overwrite: r.overwrite,
			skipInvalid: r.skipInvalid,
			lazy: r.lazy,
			placeholderChar: r.placeholderChar,
			displayChar: r.displayChar
		});
	}
	_allocateBlock(e) {
		if (e < this._blocks.length) return this._blocks[e];
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(Yi(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new G();
		for (let s = (r = (i = this._mapPosToBlock(this.displayValue.length))?.index) ?? Math.max(this._blocks.length - 1, 0), c, l; c = (a = this._blocks[s]) ?? (l = !l && this._allocateBlock(s)); ++s) {
			var r, i, a, o;
			let u = c._appendChar(e, {
				...t,
				_beforeTailState: (o = t._beforeTailState) == null || (o = o._blocks) == null ? void 0 : o[s]
			});
			if (u.skip && l) {
				this._blocks.pop(), this.mask = this.mask.slice(1);
				break;
			}
			if (n.aggregate(u), u.consumed) break;
		}
		return n;
	}
	_trimEmptyTail(e, t) {
		e === void 0 && (e = 0);
		let n = Math.max(this._mapPosToBlock(e)?.index || 0, this.repeatFrom, 0), r;
		t != null && (r = this._mapPosToBlock(t)?.index), r ??= this._blocks.length - 1;
		let i = 0;
		for (let e = r; n <= e && !this._blocks[e].unmaskedValue; --e, ++i);
		i && (this._blocks.splice(r - i + 1, i), this.mask = this.mask.slice(i));
	}
	reset() {
		super.reset(), this._trimEmptyTail();
	}
	remove(e, t) {
		e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
		let n = super.remove(e, t);
		return this._trimEmptyTail(e, t), n;
	}
	totalInputPositions(e, t) {
		return e === void 0 && (e = 0), t == null && this.repeatTo === Infinity ? Infinity : super.totalInputPositions(e, t);
	}
	get state() {
		return super.state;
	}
	set state(e) {
		this._blocks.length = e._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = e;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/index.js
try {
	globalThis.IMask = W;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var ba = {
	mask: H.default.oneOfType([
		H.default.array,
		H.default.func,
		H.default.string,
		H.default.instanceOf(RegExp),
		H.default.oneOf([
			Date,
			Number,
			W.Masked
		]),
		H.default.instanceOf(W.Masked)
	]),
	value: H.default.any,
	unmask: H.default.oneOfType([H.default.bool, H.default.oneOf(["typed"])]),
	prepare: H.default.func,
	prepareChar: H.default.func,
	validate: H.default.func,
	commit: H.default.func,
	overwrite: H.default.oneOfType([H.default.bool, H.default.oneOf(["shift"])]),
	eager: H.default.oneOfType([H.default.bool, H.default.oneOf(["append", "remove"])]),
	skipInvalid: H.default.bool,
	onAccept: H.default.func,
	onComplete: H.default.func,
	placeholderChar: H.default.string,
	displayChar: H.default.string,
	lazy: H.default.bool,
	definitions: H.default.object,
	blocks: H.default.object,
	enum: H.default.arrayOf(H.default.string),
	maxLength: H.default.number,
	from: H.default.number,
	to: H.default.number,
	pattern: H.default.string,
	format: H.default.func,
	parse: H.default.func,
	autofix: H.default.oneOfType([H.default.bool, H.default.oneOf(["pad"])]),
	radix: H.default.string,
	thousandsSeparator: H.default.string,
	mapToRadix: H.default.arrayOf(H.default.string),
	scale: H.default.number,
	normalizeZeros: H.default.bool,
	padFractionalZeros: H.default.bool,
	min: H.default.oneOfType([H.default.number, H.default.instanceOf(Date)]),
	max: H.default.oneOfType([H.default.number, H.default.instanceOf(Date)]),
	dispatch: H.default.func,
	inputRef: H.default.oneOfType([H.default.func, H.default.shape({ current: H.default.object })])
}, xa = Object.keys(ba).filter((e) => e !== "value"), Sa = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Ca = xa.filter((e) => Sa.indexOf(e) < 0);
function wa(e) {
	var t;
	let n = (t = class extends x.Component {
		constructor(e) {
			super(e), this._inputRef = this._inputRef.bind(this);
		}
		componentDidMount() {
			this.props.mask && this.initMask();
		}
		componentDidUpdate() {
			let e = this.props, t = this._extractMaskOptionsFromProps(e);
			if (t.mask) this.maskRef ? (this.maskRef.updateOptions(t), "value" in e && e.value !== void 0 && (this.maskValue = e.value)) : this.initMask(t);
			else if (this.destroyMask(), "value" in e && e.value !== void 0) {
				var n;
				(n = this.element) != null && n.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = e.value : this.element.value = e.value;
			}
		}
		componentWillUnmount() {
			this.destroyMask();
		}
		_inputRef(e) {
			this.element = e, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = e : this.props.inputRef(e));
		}
		initMask(e) {
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = W(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Ca.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return xa.forEach((e) => {
				e !== "maxLength" && delete t[e];
			}), "defaultValue" in t || (t.defaultValue = e.mask ? "" : t.value), delete t.value, t;
		}
		get maskValue() {
			return this.maskRef ? this.props.unmask === "typed" ? this.maskRef.typedValue : this.props.unmask ? this.maskRef.unmaskedValue : this.maskRef.value : "";
		}
		set maskValue(e) {
			this.maskRef && (e = e == null && this.props.unmask !== "typed" ? "" : e, this.props.unmask === "typed" ? this.maskRef.typedValue = e : this.props.unmask ? this.maskRef.unmaskedValue = e : this.maskRef.value = e);
		}
		_onAccept(e) {
			this.props.onAccept && this.maskRef && this.props.onAccept(this.maskValue, this.maskRef, e);
		}
		_onComplete(e) {
			this.props.onComplete && this.maskRef && this.props.onComplete(this.maskValue, this.maskRef, e);
		}
		render() {
			return x.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = ba, x.forwardRef((e, t) => x.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Ta = wa((e) => {
	let { inputRef: t, ...n } = e;
	return x.createElement("input", {
		...n,
		ref: t
	});
}), Ea = x.forwardRef((e, t) => x.createElement(Ta, {
	...e,
	ref: t
})), Da = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Oa = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, ka = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, x.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Aa = (e, t) => {
	let [n, r] = (0, x.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(_i(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, x.useState)(e);
		return (0, x.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, ja = (e) => e, Ma = /* @__PURE__ */ x.createContext({
	getControlProps: ja,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: ja,
	getDescriptorProps: ja,
	hasFormGroupProvider: !1
}), Na = () => x.useContext(Ma);
function Pa(e) {
	let [t, n] = (0, x.useState)(e);
	return [t, (e) => {
		(0, x.useEffect)(() => n(e), [e]);
	}];
}
function Fa({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, x.useMemo)(() => t || _i("form-field"), [t]), [o, s] = Aa(a), [c, l] = Aa(a), [u, d] = Pa(!1), f = {
		getControlProps: (0, x.useCallback)((e) => {
			let t = u ? c : void 0;
			return Da({
				...e,
				"aria-describedby": (0, S.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, S.default)(e["aria-labelledby"], t) || void 0,
				id: a
			});
		}, [
			u,
			o,
			c,
			a
		]),
		getLabelProps: (e) => {
			let t = l(e?.id);
			return u ? {
				...e,
				id: t
			} : {
				...e,
				htmlFor: a
			};
		},
		getDescriptorProps: (e) => {
			let t = s(e?.id);
			return {
				...e,
				id: t
			};
		},
		useSetIsControlGroupEffect: d,
		isControlGroup: u,
		controlId: a,
		isInvalid: n,
		isValid: r,
		size: i,
		hasFormGroupProvider: !0
	};
	return /* @__PURE__ */ x.createElement(Ma.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Ia = {
	SMALL: "sm",
	LARGE: "lg"
}, La = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Ra = {
	[La.DEFAULT]: null,
	[La.VALID]: wi,
	[La.INVALID]: Ei,
	[La.WARNING]: Ai,
	[La.CRITERIA_EMPTY]: ki,
	[La.CRITERIA_VALID]: Ti,
	[La.CRITERIA_INVALID]: Ci
}, za = ({ isInvalid: e, isValid: t }) => t ? La.VALID : e ? La.INVALID : La.DEFAULT;
function Ba({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Ra[e];
	return n ? /* @__PURE__ */ x.createElement(xi, { src: n }) : null;
}
Ba.propTypes = {
	type: H.default.oneOf(Object.values(La)),
	customIcon: H.default.node
}, Ba.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Va({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, S.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ x.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ x.createElement(Ba, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ x.createElement("div", null, e));
}
Va.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	hasIcon: H.default.bool,
	type: H.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: H.default.node,
	muted: H.default.bool
}, Va.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Ha({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Na(), a = n(t), o = (0, S.default)("pgn__form-control-description", t.className), s = t.type || za({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ x.createElement(Va, {
		...a,
		className: o,
		type: s
	}, e);
}
Ha.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	hasIcon: H.default.bool,
	type: H.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: H.default.node,
	muted: H.default.bool
}, Ha.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function Ua({ children: e }) {
	let { controlId: t } = Na();
	return /* @__PURE__ */ x.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ x.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ x.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
Ua.propTypes = { children: H.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Wa({ children: e, location: t }) {
	return /* @__PURE__ */ x.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Wa.propTypes = {
	children: H.default.node.isRequired,
	location: H.default.oneOf(["leading", "trailing"])
}, Wa.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Ga({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Na(a), s = a.size || o.size;
	return /* @__PURE__ */ x.createElement("div", {
		className: (0, S.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Ia.LARGE,
			"pgn__form-control-decorator-group-sm": s === Ia.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ x.createElement(Wa, { location: "leading" }, t), n && /* @__PURE__ */ x.createElement(Wa, { location: "trailing" }, n), r && /* @__PURE__ */ x.createElement(Ua, null, r));
}
Ga.propTypes = {
	children: H.default.node.isRequired,
	leadingElement: H.default.node,
	trailingElement: H.default.node,
	floatingLabel: H.default.node,
	className: H.default.string,
	size: H.default.oneOf([Ia.SMALL, Ia.LARGE])
}, Ga.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Ka = /* @__PURE__ */ x.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Na(), h = x.useRef(), g = u || h, _ = l.size || m.size, [v, y] = ka({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, x.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, x.useEffect)(() => {
		b();
	}, [b]);
	let C = p({
		...l,
		onBlur: Oa(y, l.onBlur)
	}), w = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ x.createElement(Ga, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ x.createElement(Rr, {
		as: c ? Ea : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, S.default)(n, { "has-value": v }),
		onChange: w,
		mask: c,
		...C
	}));
});
Ka.Feedback = Ha, Ka.Description = Ha, Ka.propTypes = {
	className: H.default.string,
	as: H.default.elementType,
	onChange: H.default.func,
	defaultValue: H.default.oneOfType([H.default.string, H.default.number]),
	value: H.default.oneOfType([H.default.string, H.default.number]),
	id: H.default.string,
	controlClassName: H.default.string,
	size: H.default.oneOf(["sm", "lg"]),
	leadingElement: H.default.node,
	trailingElement: H.default.node,
	floatingLabel: H.default.node,
	plaintext: H.default.bool,
	isValid: H.default.bool,
	isInvalid: H.default.bool,
	autoResize: H.default.bool,
	inputMask: H.default.string
}, Ka.defaultProps = {
	as: "input",
	className: void 0,
	id: void 0,
	controlClassName: void 0,
	onChange: void 0,
	defaultValue: void 0,
	value: void 0,
	size: void 0,
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	plaintext: !1,
	isValid: void 0,
	isInvalid: void 0,
	autoResize: !1,
	inputMask: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormLabel.js
function qa({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Na(), o = (0, S.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Ia.LARGE,
		"pgn__form-label-sm": r === Ia.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ x.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Ja({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ x.createElement(a ?? "div", {
		...o,
		className: (0, S.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ x.createElement(Fa, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Ya = /* @__PURE__ */ x.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), Xa = () => (0, x.useContext)(Ya);
function Za({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Oa(n, e.onBlur) : n,
			onFocus: e.onFocus ? Oa(r, e.onFocus) : r,
			onChange: e.onChange ? Oa(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ x.createElement(Ya.Provider, { value: c }, e);
}
Za.propTypes = {
	children: H.default.node.isRequired,
	name: H.default.string.isRequired,
	onBlur: H.default.func,
	onFocus: H.default.func,
	onChange: H.default.func,
	value: H.default.string,
	defaultValue: H.default.string
}, Za.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var Qa = /* @__PURE__ */ x.forwardRef((e, t) => {
	let { getControlProps: n } = Na(), { getRadioControlProps: r, hasRadioSetProvider: i } = Xa(), a = n({
		...e,
		className: (0, S.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ x.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
Qa.propTypes = { className: H.default.string }, Qa.defaultProps = { className: void 0 };
var $a = /* @__PURE__ */ x.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ x.createElement(Fa, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ x.createElement("div", { className: (0, S.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ x.createElement(Qa, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement(qa, { className: r }, e), i && /* @__PURE__ */ x.createElement(Ha, { hasIcon: !1 }, i)))));
$a.propTypes = {
	id: H.default.string,
	children: H.default.node.isRequired,
	className: H.default.string,
	controlClassName: H.default.string,
	labelClassName: H.default.string,
	description: H.default.node,
	isInvalid: H.default.bool,
	isValid: H.default.bool,
	disabled: H.default.bool
}, $a.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlSet.js
function eo({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ x.createElement(e, {
		className: (0, S.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
eo.propTypes = {
	as: H.default.elementType,
	className: H.default.string,
	isInline: H.default.bool,
	children: H.default.node
}, eo.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function to({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Na();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ x.createElement(Za, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ x.createElement(eo, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
to.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	name: H.default.string.isRequired,
	value: H.default.string,
	defaultValue: H.default.string,
	isInline: H.default.bool,
	onChange: H.default.func,
	onFocus: H.default.func,
	onBlur: H.default.func
}, to.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var no, ro = new Uint8Array(16);
function io() {
	if (!no && (no = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !no)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return no(ro);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var K = [];
for (let e = 0; e < 256; ++e) K.push((e + 256).toString(16).slice(1));
function ao(e, t = 0) {
	return K[e[t + 0]] + K[e[t + 1]] + K[e[t + 2]] + K[e[t + 3]] + "-" + K[e[t + 4]] + K[e[t + 5]] + "-" + K[e[t + 6]] + K[e[t + 7]] + "-" + K[e[t + 8]] + K[e[t + 9]] + "-" + K[e[t + 10]] + K[e[t + 11]] + K[e[t + 12]] + K[e[t + 13]] + K[e[t + 14]] + K[e[t + 15]];
}
var oo = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function so(e, t, n) {
	if (oo.randomUUID && !t && !e) return oo.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || io)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return ao(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var co = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), lo = (e, t) => t.every((t) => e[t] !== void 0), uo = (e, t) => co(e, (e) => Array.isArray(t) ? lo(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), fo = /* @__PURE__ */ x.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, S.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ x.createElement(fi, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ x.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function po({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function mo({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function ho({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
	if (!n) return;
	let { key: i } = e;
	if (![
		"ArrowUp",
		"ArrowDown",
		"ArrowRight",
		"ArrowLeft",
		"Enter",
		"Home",
		"End"
	].includes(i) || t.includes(i)) return;
	let { activeElement: a } = document;
	if (!n.contains(a)) return;
	let o = n.querySelectorAll(r);
	if (!o.length) return;
	let s = Array.from(o).findIndex((e) => e === a);
	i === "Enter" && a && po({
		event: e,
		currentIndex: s,
		activeElement: a
	}), mo({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function go(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, x.useRef)();
	return (0, x.useEffect)(() => {
		let e = (e) => {
			ho({
				event: e,
				ignoredKeys: n,
				parentNode: r.current,
				selectors: t
			});
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [n, t]), r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/messages.js
var _o = _({
	iconButtonOpened: {
		id: "pgn.FormAutosuggest.iconButtonOpened",
		defaultMessage: "Open the options menu",
		description: "A message shown in case when the autosuggest menu is closed."
	},
	iconButtonClosed: {
		id: "pgn.FormAutosuggest.iconButtonClosed",
		defaultMessage: "Close the options menu",
		description: "A message shown in case when the autosuggest menu is opened."
	}
}), vo = /* @__PURE__ */ (0, x.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: a, isLoading: o, isValueRequired: s, valueRequiredErrorMessageText: c, isSelectionRequired: l, selectionRequiredErrorMessageText: u, hasCustomError: d, customErrorMessageText: f, onChange: p, helpMessage: m, ...h }, g) => {
	let _ = i(), v = (0, x.useRef)(), y = go({
		selectors: t,
		ignoredKeys: n
	}), [b, S] = (0, x.useState)(!1), [C, w] = (0, x.useState)(!1), [T, E] = (0, x.useState)(!1), [D, O] = (0, x.useState)(!1), [k, A] = (0, x.useState)(a?.userProvidedText || ""), [j, M] = (0, x.useState)([]), [N, P] = (0, x.useState)(null), [F, I] = (0, x.useState)(!0), [L, R] = (0, x.useState)(""), z = (e) => {
		P(e);
	}, B = () => {
		M([]), S(!1), P(null);
	}, ee = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		E(!0), O(!0), A(n), p && (!a || a && n !== a.selectionValue) && p({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), B(), t && t(e);
	};
	function te(t = "") {
		let n = x.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? so();
			return /* @__PURE__ */ x.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => ee(e, n),
				id: i,
				onFocus: () => z(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let ne = () => {
		M(te(k)), I(!0), R(""), S(!0);
	}, re = () => {
		b ? B() : ne();
	}, ie = /* @__PURE__ */ x.createElement(Ri, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? Oi : Di,
		iconAs: xi,
		size: "sm",
		variant: "secondary",
		alt: b ? _.formatMessage(_o.iconButtonClosed) : _.formatMessage(_o.iconButtonOpened),
		onClick: re
	}), ae = () => {
		w(!0);
	}, oe = () => {
		if (d) {
			I(!1), R(f);
			return;
		}
		if (s && !T) {
			I(!1), R(c);
			return;
		}
		if (T && l && !D) {
			I(!1), R(u);
			return;
		}
		I(!0), R("");
	};
	(0, x.useImperativeHandle)(g, () => ({ updateErrorStateAndErrorMessage: oe }));
	let se = () => {
		w(!1), B(), oe();
	}, ce = (e) => {
		if (C) {
			if (e.key === "Escape") {
				e.preventDefault(), v && v.current.focus(), B();
				return;
			}
			e.key === "Tab" && se();
		}
	}, le = (e) => {
		y.current && !y.current.contains(e.target) && C && se();
	};
	(0, x.useEffect)(() => (document.addEventListener("keydown", ce), document.addEventListener("click", le, !0), () => {
		document.removeEventListener("click", le, !0), document.removeEventListener("keydown", ce);
	})), (0, x.useEffect)(() => {
		A(a ? a.userProvidedText ?? "" : ""), E(!!a && !!a.userProvidedText), O(!!a && !!a.selectionValue);
	}, [a]);
	let ue = () => {
		ne();
	}, de = (e) => {
		let t = e.target.value;
		if (!t.length) {
			A(""), E(!1), O(!1), M([]), B(), p && p({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0);
		let n = te(t);
		M(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			O(!1), A(t), p && p({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		O(!0), A(r.props.children), p && p({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: fe } = Na(), V = fe(h);
	return /* @__PURE__ */ x.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: ae
	}, /* @__PURE__ */ x.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${j.length} options found`), /* @__PURE__ */ x.createElement(Fa, {
		controlId: V.id,
		isInvalid: !F
	}, /* @__PURE__ */ x.createElement(Ka, {
		ref: v,
		"aria-expanded": (j.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: k,
		"aria-invalid": L,
		"aria-activedescendant": N,
		onChange: de,
		onClick: ue,
		trailingElement: ie,
		"data-testid": "autosuggest-textbox-input",
		...V
	}), m && F && /* @__PURE__ */ x.createElement(Ha, { type: "default" }, m), !F && /* @__PURE__ */ x.createElement(Ha, {
		type: "invalid",
		"feedback-for": V.name
	}, L)), /* @__PURE__ */ x.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, o ? /* @__PURE__ */ x.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ x.createElement(fo, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : j.length > 0 && j));
});
vo.defaultProps = {
	arrowKeyNavigationSelector: "a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)",
	ignoredArrowKeysNames: ["ArrowRight", "ArrowLeft"],
	isLoading: !1,
	className: null,
	floatingLabel: null,
	onChange: null,
	helpMessage: "",
	placeholder: "",
	value: null,
	isValueRequired: !1,
	valueRequiredErrorMessageText: null,
	isSelectionRequired: !1,
	selectionRequiredErrorMessageText: null,
	hasCustomError: !1,
	customErrorMessageText: null,
	readOnly: !1,
	children: null,
	name: "form-autosuggest",
	screenReaderText: "loading"
}, vo.propTypes = {
	arrowKeyNavigationSelector: H.default.string,
	ignoredArrowKeysNames: H.default.arrayOf(H.default.string),
	isLoading: H.default.bool,
	className: H.default.string,
	floatingLabel: H.default.string,
	onChange: H.default.func,
	helpMessage: H.default.string,
	placeholder: H.default.string,
	value: H.default.shape({
		userProvidedText: H.default.string,
		selectionValue: H.default.string,
		selectionId: H.default.string
	}),
	isValueRequired: H.default.bool,
	valueRequiredErrorMessageText: uo(H.default.string, "isValueRequired"),
	isSelectionRequired: H.default.bool,
	selectionRequiredErrorMessageText: uo(H.default.string, "isSelectionRequired"),
	hasCustomError: H.default.bool,
	customErrorMessageText: uo(H.default.string, "hasCustomError"),
	name: H.default.string,
	readOnly: H.default.bool,
	children: H.default.node,
	screenReaderText: H.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function yo({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, S.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, x.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ x.createElement(x.Fragment, null, i && /* @__PURE__ */ x.createElement(xi, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ x.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ x.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ x.createElement(xi, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function bo({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ x.createElement(yo, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, S.default)(t, "dropdown-item"),
		...r
	}, e);
}
bo.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, bo.propTypes = {
	className: H.default.string,
	children: H.default.string,
	onClick: H.default.func
};
var xo = /* @__PURE__ */ x.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), So = () => (0, x.useContext)(xo);
function Co({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Oa(n, e.onBlur) : n,
			onFocus: e.onFocus ? Oa(r, e.onFocus) : r,
			onChange: e.onChange ? Oa(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ x.createElement(xo.Provider, { value: c }, e);
}
Co.propTypes = {
	children: H.default.node.isRequired,
	name: H.default.string,
	onBlur: H.default.func,
	onFocus: H.default.func,
	onChange: H.default.func,
	value: H.default.arrayOf(H.default.string),
	defaultValue: H.default.arrayOf(H.default.string)
}, Co.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var wo = /* @__PURE__ */ x.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = So(), a = x.useRef(), o = n || a, { getControlProps: s } = Na(), c = s({
		...t,
		className: (0, S.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), x.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ x.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
wo.propTypes = {
	isIndeterminate: H.default.bool,
	className: H.default.string
}, wo.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var To = /* @__PURE__ */ x.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = So(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Na();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ x.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ x.createElement(Fa, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ x.createElement("div", {
		className: (0, S.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement(qa, { className: r }, e), i && /* @__PURE__ */ x.createElement(Ha, { hasIcon: !1 }, i))));
});
To.propTypes = {
	id: H.default.string,
	children: H.default.node.isRequired,
	className: H.default.string,
	controlClassName: H.default.string,
	labelClassName: H.default.string,
	description: H.default.node,
	isInvalid: H.default.bool,
	isValid: H.default.bool,
	controlAs: H.default.elementType,
	floatLabelLeft: H.default.bool,
	disabled: H.default.bool
}, To.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: wo,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Eo = /* @__PURE__ */ x.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = x.useRef(), i = n || r, { getControlProps: a } = Na(), o = a({
		...t,
		className: (0, S.default)("pgn__form-switch-input", t.className)
	});
	return x.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ x.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Eo.propTypes = {
	isIndeterminate: H.default.bool,
	className: H.default.string
}, Eo.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Do = /* @__PURE__ */ x.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ x.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ x.createElement(To, {
	className: (0, S.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Eo,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ x.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Do.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	labelClassName: H.default.string,
	helperText: H.default.node,
	floatLabelLeft: H.default.bool
}, Do.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Oo({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Na();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ x.createElement(Co, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ x.createElement(eo, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Oo.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	name: H.default.string.isRequired,
	value: H.default.arrayOf(H.default.string),
	defaultValue: H.default.arrayOf(H.default.string),
	isInline: H.default.bool,
	onChange: H.default.func,
	onFocus: H.default.func,
	onBlur: H.default.func
}, Oo.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var ko = Oo, q = Xr;
q.Control = Ka, q.Radio = $a, q.RadioSet = to, q.Autosuggest = vo, q.AutosuggestOption = bo, q.Checkbox = To, q.CheckboxSet = Oo, q.Switch = Do, q.SwitchSet = ko, q.Label = qa, q.Group = Ja, q.Text = Va;
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var Ao = function(e) {
	return jo(e) && !Mo(e);
};
function jo(e) {
	return !!e && typeof e == "object";
}
function Mo(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Po(e);
}
var No = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Po(e) {
	return e.$$typeof === No;
}
function Fo(e) {
	return Array.isArray(e) ? [] : {};
}
function Io(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? zo(Fo(e), e, t) : e;
}
function Lo(e, t, n) {
	return e.concat(t).map(function(e) {
		return Io(e, n);
	});
}
function Ro(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Io(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Io(t[i], n) : r[i] = zo(e[i], t[i], n);
	}), r;
}
function zo(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Lo, n.isMergeableObject = n.isMergeableObject || Ao;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Ro(e, t, n) : Io(t, n);
}
zo.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return zo(e, n, t);
	}, {});
};
var Bo = zo, Vo = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Ho = typeof self == "object" && self && self.Object === Object && self, Uo = Vo || Ho || Function("return this")(), Wo = Uo.Symbol, Go = Object.prototype, Ko = Go.hasOwnProperty, qo = Go.toString, Jo = Wo ? Wo.toStringTag : void 0;
function Yo(e) {
	var t = Ko.call(e, Jo), n = e[Jo];
	try {
		e[Jo] = void 0;
		var r = !0;
	} catch {}
	var i = qo.call(e);
	return r && (t ? e[Jo] = n : delete e[Jo]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var Xo = Object.prototype.toString;
function Zo(e) {
	return Xo.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var Qo = "[object Null]", $o = "[object Undefined]", es = Wo ? Wo.toStringTag : void 0;
function ts(e) {
	return e == null ? e === void 0 ? $o : Qo : es && es in Object(e) ? Yo(e) : Zo(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function ns(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var rs = ns(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function is(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var as = "[object Object]", os = Function.prototype, ss = Object.prototype, cs = os.toString, ls = ss.hasOwnProperty, us = cs.call(Object);
function ds(e) {
	if (!is(e) || ts(e) != as) return !1;
	var t = rs(e);
	if (t === null) return !0;
	var n = ls.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && cs.call(n) == us;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function fs() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function ps(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function ms(e, t) {
	for (var n = e.length; n--;) if (ps(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var hs = Array.prototype.splice;
function gs(e) {
	var t = this.__data__, n = ms(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : hs.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function _s(e) {
	var t = this.__data__, n = ms(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function vs(e) {
	return ms(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function ys(e, t) {
	var n = this.__data__, r = ms(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function bs(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
bs.prototype.clear = fs, bs.prototype.delete = gs, bs.prototype.get = _s, bs.prototype.has = vs, bs.prototype.set = ys;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function xs() {
	this.__data__ = new bs(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Ss(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Cs(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function ws(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Ts(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Es = "[object AsyncFunction]", Ds = "[object Function]", Os = "[object GeneratorFunction]", ks = "[object Proxy]";
function As(e) {
	if (!Ts(e)) return !1;
	var t = ts(e);
	return t == Ds || t == Os || t == Es || t == ks;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var js = Uo["__core-js_shared__"], Ms = function() {
	var e = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Ns(e) {
	return !!Ms && Ms in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Ps = Function.prototype.toString;
function Fs(e) {
	if (e != null) {
		try {
			return Ps.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var Is = /[\\^$.*+?()[\]{}|]/g, Ls = /^\[object .+?Constructor\]$/, Rs = Function.prototype, zs = Object.prototype, Bs = Rs.toString, Vs = zs.hasOwnProperty, Hs = RegExp("^" + Bs.call(Vs).replace(Is, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Us(e) {
	return !Ts(e) || Ns(e) ? !1 : (As(e) ? Hs : Ls).test(Fs(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function Ws(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Gs(e, t) {
	var n = Ws(e, t);
	return Us(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Ks = Gs(Uo, "Map"), qs = Gs(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function Js() {
	this.__data__ = qs ? qs(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function Ys(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Xs = "__lodash_hash_undefined__", Zs = Object.prototype.hasOwnProperty;
function Qs(e) {
	var t = this.__data__;
	if (qs) {
		var n = t[e];
		return n === Xs ? void 0 : n;
	}
	return Zs.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var $s = Object.prototype.hasOwnProperty;
function ec(e) {
	var t = this.__data__;
	return qs ? t[e] !== void 0 : $s.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var tc = "__lodash_hash_undefined__";
function nc(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = qs && t === void 0 ? tc : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function rc(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
rc.prototype.clear = Js, rc.prototype.delete = Ys, rc.prototype.get = Qs, rc.prototype.has = ec, rc.prototype.set = nc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function ic() {
	this.size = 0, this.__data__ = {
		hash: new rc(),
		map: new (Ks || bs)(),
		string: new rc()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function ac(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function oc(e, t) {
	var n = e.__data__;
	return ac(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function sc(e) {
	var t = oc(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function cc(e) {
	return oc(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function lc(e) {
	return oc(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function uc(e, t) {
	var n = oc(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function dc(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
dc.prototype.clear = ic, dc.prototype.delete = sc, dc.prototype.get = cc, dc.prototype.has = lc, dc.prototype.set = uc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var fc = 200;
function pc(e, t) {
	var n = this.__data__;
	if (n instanceof bs) {
		var r = n.__data__;
		if (!Ks || r.length < fc - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new dc(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function mc(e) {
	this.size = (this.__data__ = new bs(e)).size;
}
mc.prototype.clear = xs, mc.prototype.delete = Ss, mc.prototype.get = Cs, mc.prototype.has = ws, mc.prototype.set = pc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function hc(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var gc = function() {
	try {
		var e = Gs(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function _c(e, t, n) {
	t == "__proto__" && gc ? gc(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var vc = Object.prototype.hasOwnProperty;
function yc(e, t, n) {
	var r = e[t];
	(!(vc.call(e, t) && ps(r, n)) || n === void 0 && !(t in e)) && _c(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function bc(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? _c(n, s, c) : yc(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function xc(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Sc = "[object Arguments]";
function Cc(e) {
	return is(e) && ts(e) == Sc;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var wc = Object.prototype, Tc = wc.hasOwnProperty, Ec = wc.propertyIsEnumerable, Dc = Cc(function() {
	return arguments;
}()) ? Cc : function(e) {
	return is(e) && Tc.call(e, "callee") && !Ec.call(e, "callee");
}, Oc = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function kc() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Ac = typeof exports == "object" && exports && !exports.nodeType && exports, jc = Ac && typeof module == "object" && module && !module.nodeType && module, Mc = jc && jc.exports === Ac ? Uo.Buffer : void 0, Nc = (Mc ? Mc.isBuffer : void 0) || kc, Pc = 9007199254740991, Fc = /^(?:0|[1-9]\d*)$/;
function Ic(e, t) {
	var n = typeof e;
	return t ??= Pc, !!t && (n == "number" || n != "symbol" && Fc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Lc = 9007199254740991;
function Rc(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lc;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var zc = "[object Arguments]", Bc = "[object Array]", Vc = "[object Boolean]", Hc = "[object Date]", Uc = "[object Error]", Wc = "[object Function]", Gc = "[object Map]", Kc = "[object Number]", qc = "[object Object]", Jc = "[object RegExp]", Yc = "[object Set]", Xc = "[object String]", Zc = "[object WeakMap]", Qc = "[object ArrayBuffer]", $c = "[object DataView]", el = "[object Float32Array]", tl = "[object Float64Array]", nl = "[object Int8Array]", rl = "[object Int16Array]", il = "[object Int32Array]", al = "[object Uint8Array]", ol = "[object Uint8ClampedArray]", sl = "[object Uint16Array]", cl = "[object Uint32Array]", J = {};
J[el] = J[tl] = J[nl] = J[rl] = J[il] = J[al] = J[ol] = J[sl] = J[cl] = !0, J[zc] = J[Bc] = J[Qc] = J[Vc] = J[$c] = J[Hc] = J[Uc] = J[Wc] = J[Gc] = J[Kc] = J[qc] = J[Jc] = J[Yc] = J[Xc] = J[Zc] = !1;
function ll(e) {
	return is(e) && Rc(e.length) && !!J[ts(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function ul(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var dl = typeof exports == "object" && exports && !exports.nodeType && exports, fl = dl && typeof module == "object" && module && !module.nodeType && module, pl = fl && fl.exports === dl && Vo.process, ml = function() {
	try {
		return fl && fl.require && fl.require("util").types || pl && pl.binding && pl.binding("util");
	} catch {}
}(), hl = ml && ml.isTypedArray, gl = hl ? ul(hl) : ll, _l = Object.prototype.hasOwnProperty;
function vl(e, t) {
	var n = Oc(e), r = !n && Dc(e), i = !n && !r && Nc(e), a = !n && !r && !i && gl(e), o = n || r || i || a, s = o ? xc(e.length, String) : [], c = s.length;
	for (var l in e) (t || _l.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ic(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var yl = Object.prototype;
function bl(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || yl);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var xl = ns(Object.keys, Object), Sl = Object.prototype.hasOwnProperty;
function Cl(e) {
	if (!bl(e)) return xl(e);
	var t = [];
	for (var n in Object(e)) Sl.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function wl(e) {
	return e != null && Rc(e.length) && !As(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Tl(e) {
	return wl(e) ? vl(e) : Cl(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function El(e, t) {
	return e && bc(t, Tl(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Dl(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Ol = Object.prototype.hasOwnProperty;
function kl(e) {
	if (!Ts(e)) return Dl(e);
	var t = bl(e), n = [];
	for (var r in e) r == "constructor" && (t || !Ol.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Al(e) {
	return wl(e) ? vl(e, !0) : kl(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function jl(e, t) {
	return e && bc(t, Al(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Ml = typeof exports == "object" && exports && !exports.nodeType && exports, Nl = Ml && typeof module == "object" && module && !module.nodeType && module, Pl = Nl && Nl.exports === Ml ? Uo.Buffer : void 0, Fl = Pl ? Pl.allocUnsafe : void 0;
function Il(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Fl ? Fl(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Ll(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Rl(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function zl() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Bl = Object.prototype.propertyIsEnumerable, Vl = Object.getOwnPropertySymbols, Hl = Vl ? function(e) {
	return e == null ? [] : (e = Object(e), Rl(Vl(e), function(t) {
		return Bl.call(e, t);
	}));
} : zl;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function Ul(e, t) {
	return bc(e, Hl(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Wl(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var Gl = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Wl(t, Hl(e)), e = rs(e);
	return t;
} : zl;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function Kl(e, t) {
	return bc(e, Gl(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function ql(e, t, n) {
	var r = t(e);
	return Oc(e) ? r : Wl(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function Jl(e) {
	return ql(e, Tl, Hl);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function Yl(e) {
	return ql(e, Al, Gl);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var Xl = Gs(Uo, "DataView"), Zl = Gs(Uo, "Promise"), Ql = Gs(Uo, "Set"), $l = Gs(Uo, "WeakMap"), eu = "[object Map]", tu = "[object Object]", nu = "[object Promise]", ru = "[object Set]", iu = "[object WeakMap]", au = "[object DataView]", ou = Fs(Xl), su = Fs(Ks), cu = Fs(Zl), lu = Fs(Ql), uu = Fs($l), du = ts;
(Xl && du(new Xl(/* @__PURE__ */ new ArrayBuffer(1))) != au || Ks && du(new Ks()) != eu || Zl && du(Zl.resolve()) != nu || Ql && du(new Ql()) != ru || $l && du(new $l()) != iu) && (du = function(e) {
	var t = ts(e), n = t == tu ? e.constructor : void 0, r = n ? Fs(n) : "";
	if (r) switch (r) {
		case ou: return au;
		case su: return eu;
		case cu: return nu;
		case lu: return ru;
		case uu: return iu;
	}
	return t;
});
var fu = du, pu = Object.prototype.hasOwnProperty;
function mu(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && pu.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var hu = Uo.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function gu(e) {
	var t = new e.constructor(e.byteLength);
	return new hu(t).set(new hu(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function _u(e, t) {
	var n = t ? gu(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var vu = /\w*$/;
function yu(e) {
	var t = new e.constructor(e.source, vu.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var bu = Wo ? Wo.prototype : void 0, xu = bu ? bu.valueOf : void 0;
function Su(e) {
	return xu ? Object(xu.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Cu(e, t) {
	var n = t ? gu(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var wu = "[object Boolean]", Tu = "[object Date]", Eu = "[object Map]", Du = "[object Number]", Ou = "[object RegExp]", ku = "[object Set]", Au = "[object String]", ju = "[object Symbol]", Mu = "[object ArrayBuffer]", Nu = "[object DataView]", Pu = "[object Float32Array]", Fu = "[object Float64Array]", Iu = "[object Int8Array]", Lu = "[object Int16Array]", Ru = "[object Int32Array]", zu = "[object Uint8Array]", Bu = "[object Uint8ClampedArray]", Vu = "[object Uint16Array]", Hu = "[object Uint32Array]";
function Uu(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Mu: return gu(e);
		case wu:
		case Tu: return new r(+e);
		case Nu: return _u(e, n);
		case Pu:
		case Fu:
		case Iu:
		case Lu:
		case Ru:
		case zu:
		case Bu:
		case Vu:
		case Hu: return Cu(e, n);
		case Eu: return new r();
		case Du:
		case Au: return new r(e);
		case Ou: return yu(e);
		case ku: return new r();
		case ju: return Su(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var Wu = Object.create, Gu = function() {
	function e() {}
	return function(t) {
		if (!Ts(t)) return {};
		if (Wu) return Wu(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function Ku(e) {
	return typeof e.constructor == "function" && !bl(e) ? Gu(rs(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var qu = "[object Map]";
function Ju(e) {
	return is(e) && fu(e) == qu;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var Yu = ml && ml.isMap, Xu = Yu ? ul(Yu) : Ju, Zu = "[object Set]";
function Qu(e) {
	return is(e) && fu(e) == Zu;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var $u = ml && ml.isSet, ed = $u ? ul($u) : Qu, td = 1, nd = 2, rd = 4, id = "[object Arguments]", ad = "[object Array]", od = "[object Boolean]", sd = "[object Date]", cd = "[object Error]", ld = "[object Function]", ud = "[object GeneratorFunction]", dd = "[object Map]", fd = "[object Number]", pd = "[object Object]", md = "[object RegExp]", hd = "[object Set]", gd = "[object String]", _d = "[object Symbol]", vd = "[object WeakMap]", yd = "[object ArrayBuffer]", bd = "[object DataView]", xd = "[object Float32Array]", Sd = "[object Float64Array]", Cd = "[object Int8Array]", wd = "[object Int16Array]", Td = "[object Int32Array]", Ed = "[object Uint8Array]", Dd = "[object Uint8ClampedArray]", Od = "[object Uint16Array]", kd = "[object Uint32Array]", Y = {};
Y[id] = Y[ad] = Y[yd] = Y[bd] = Y[od] = Y[sd] = Y[xd] = Y[Sd] = Y[Cd] = Y[wd] = Y[Td] = Y[dd] = Y[fd] = Y[pd] = Y[md] = Y[hd] = Y[gd] = Y[_d] = Y[Ed] = Y[Dd] = Y[Od] = Y[kd] = !0, Y[cd] = Y[ld] = Y[vd] = !1;
function Ad(e, t, n, r, i, a) {
	var o, s = t & td, c = t & nd, l = t & rd;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Ts(e)) return e;
	var u = Oc(e);
	if (u) {
		if (o = mu(e), !s) return Ll(e, o);
	} else {
		var d = fu(e), f = d == ld || d == ud;
		if (Nc(e)) return Il(e, s);
		if (d == pd || d == id || f && !i) {
			if (o = c || f ? {} : Ku(e), !s) return c ? Kl(e, jl(o, e)) : Ul(e, El(o, e));
		} else {
			if (!Y[d]) return i ? e : {};
			o = Uu(e, d, s);
		}
	}
	a ||= new mc();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), ed(e) ? e.forEach(function(r) {
		o.add(Ad(r, t, n, r, e, a));
	}) : Xu(e) && e.forEach(function(r, i) {
		o.set(i, Ad(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Yl : Jl : c ? Al : Tl)(e);
	return hc(m || e, function(r, i) {
		m && (i = r, r = e[i]), yc(o, i, Ad(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var jd = 1, Md = 4;
function Nd(e) {
	return Ad(e, jd | Md);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Pd = /* @__PURE__ */ e((/* @__PURE__ */ y(((e, t) => {
	var n = Array.isArray, r = Object.keys, i = Object.prototype.hasOwnProperty, a = typeof Element < "u";
	function o(e, t) {
		if (e === t) return !0;
		if (e && t && typeof e == "object" && typeof t == "object") {
			var s = n(e), c = n(t), l, u, d;
			if (s && c) {
				if (u = e.length, u != t.length) return !1;
				for (l = u; l-- !== 0;) if (!o(e[l], t[l])) return !1;
				return !0;
			}
			if (s != c) return !1;
			var f = e instanceof Date, p = t instanceof Date;
			if (f != p) return !1;
			if (f && p) return e.getTime() == t.getTime();
			var m = e instanceof RegExp, h = t instanceof RegExp;
			if (m != h) return !1;
			if (m && h) return e.toString() == t.toString();
			var g = r(e);
			if (u = g.length, u !== r(t).length) return !1;
			for (l = u; l-- !== 0;) if (!i.call(t, g[l])) return !1;
			if (a && e instanceof Element && t instanceof Element) return e === t;
			for (l = u; l-- !== 0;) if (d = g[l], !(d === "_owner" && e.$$typeof) && !o(e[d], t[d])) return !1;
			return !0;
		}
		return e !== e && t !== t;
	}
	t.exports = function(e, t) {
		try {
			return o(e, t);
		} catch (e) {
			if (e.message && e.message.match(/stack|recursion/i) || e.number === -2146828260) return console.warn("Warning: react-fast-compare does not handle circular references.", e.name, e.message), !1;
			throw e;
		}
	};
})))()), Fd = !0;
function Id(e, t) {
	if (!Fd) {
		if (e) return;
		var n = "Warning: " + t;
		typeof console < "u" && console.warn(n);
		try {
			throw Error(n);
		} catch {}
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/clone.js
var Ld = 4;
function Rd(e) {
	return Ad(e, Ld);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function zd(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var Bd = "[object Symbol]";
function Vd(e) {
	return typeof e == "symbol" || is(e) && ts(e) == Bd;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var Hd = "Expected a function";
function Ud(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Hd);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Ud.Cache || dc)(), n;
}
Ud.Cache = dc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var Wd = 500;
function Gd(e) {
	var t = Ud(e, function(e) {
		return n.size === Wd && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var Kd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qd = /\\(\\)?/g, Jd = Gd(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Kd, function(e, n, r, i) {
		t.push(r ? i.replace(qd, "$1") : n || e);
	}), t;
}), Yd = Infinity;
function Xd(e) {
	if (typeof e == "string" || Vd(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Yd ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var Zd = Infinity, Qd = Wo ? Wo.prototype : void 0, $d = Qd ? Qd.toString : void 0;
function ef(e) {
	if (typeof e == "string") return e;
	if (Oc(e)) return zd(e, ef) + "";
	if (Vd(e)) return $d ? $d.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Zd ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function tf(e) {
	return e == null ? "" : ef(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function nf(e) {
	return Oc(e) ? zd(e, Xd) : Vd(e) ? [e] : Ll(Jd(tf(e)));
}
a();
function X() {
	return X = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, X.apply(this, arguments);
}
function rf(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function af(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function of(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var sf = /* @__PURE__ */ (0, x.createContext)(void 0);
sf.displayName = "FormikContext";
var cf = sf.Provider;
sf.Consumer;
function lf() {
	var e = (0, x.useContext)(sf);
	return !e && Id(!1), e;
}
var uf = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Z = function(e) {
	return typeof e == "function";
}, df = function(e) {
	return typeof e == "object" && !!e;
}, ff = function(e) {
	return String(Math.floor(Number(e))) === e;
}, pf = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, mf = function(e) {
	return x.Children.count(e) === 0;
}, hf = function(e) {
	return df(e) && Z(e.then);
};
function Q(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = nf(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function gf(e, t, n) {
	for (var r = Rd(e), i = r, a = 0, o = nf(t); a < o.length - 1; a++) {
		var s = o[a], c = Q(e, o.slice(0, a + 1));
		if (c && (df(c) || Array.isArray(c))) i = i[s] = Rd(c);
		else {
			var l = o[a + 1];
			i = i[s] = ff(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function _f(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		df(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, _f(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function vf(e, t) {
	switch (t.type) {
		case "SET_VALUES": return X({}, e, { values: t.payload });
		case "SET_TOUCHED": return X({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Pd.default)(e.errors, t.payload) ? e : X({}, e, { errors: t.payload });
		case "SET_STATUS": return X({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return X({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return X({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return X({}, e, { values: gf(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return X({}, e, { touched: gf(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return X({}, e, { errors: gf(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return X({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return X({}, e, {
			touched: _f(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return X({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return X({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var yf = {}, bf = {};
function xf(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = af(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = X({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, x.useRef)(f.initialValues), m = (0, x.useRef)(f.initialErrors || yf), h = (0, x.useRef)(f.initialTouched || bf), g = (0, x.useRef)(f.initialStatus), _ = (0, x.useRef)(!1), v = (0, x.useRef)({});
	(0, x.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, x.useState)(0)[1], b = (0, x.useRef)({
		values: Nd(f.initialValues),
		errors: Nd(f.initialErrors) || yf,
		touched: Nd(f.initialTouched) || bf,
		status: Nd(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), S = b.current, C = (0, x.useCallback)(function(e) {
		var t = b.current;
		b.current = vf(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), w = (0, x.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(yf) : hf(i) ? i.then(function(e) {
				n(e || yf);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), T = (0, x.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Z(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : wf(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(yf);
			}, function(n) {
				n.name === "ValidationError" ? e(Cf(n)) : t(n);
			});
		});
	}, [f.validationSchema]), E = (0, x.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), D = (0, x.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Z(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return E(t, Q(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = gf(e, t[r], n)), e;
			}, {});
		});
	}, [E]), O = (0, x.useCallback)(function(e) {
		return Promise.all([
			D(e),
			f.validationSchema ? T(e) : {},
			f.validate ? w(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Bo.all([
				t,
				n,
				r
			], { arrayMerge: Ef });
		});
	}, [
		f.validate,
		f.validationSchema,
		D,
		w,
		T
	]), k = Af(function(e) {
		return e === void 0 && (e = S.values), C({
			type: "SET_ISVALIDATING",
			payload: !0
		}), O(e).then(function(e) {
			return _.current && (C({
				type: "SET_ISVALIDATING",
				payload: !1
			}), C({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, x.useEffect)(function() {
		o && _.current === !0 && (0, Pd.default)(p.current, f.initialValues) && k(p.current);
	}, [o, k]);
	var A = (0, x.useCallback)(function(e) {
		var t = e && e.values ? e.values : p.current, n = e && e.errors ? e.errors : m.current ? m.current : f.initialErrors || {}, r = e && e.touched ? e.touched : h.current ? h.current : f.initialTouched || {}, i = e && e.status ? e.status : g.current ? g.current : f.initialStatus;
		p.current = t, m.current = n, h.current = r, g.current = i;
		var a = function() {
			C({
				type: "RESET_FORM",
				payload: {
					isSubmitting: !!e && !!e.isSubmitting,
					errors: n,
					touched: r,
					status: i,
					values: t,
					isValidating: !!e && !!e.isValidating,
					submitCount: e && e.submitCount && typeof e.submitCount == "number" ? e.submitCount : 0
				}
			});
		};
		if (f.onReset) {
			var o = f.onReset(S.values, ce);
			hf(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, x.useEffect)(function() {
		_.current === !0 && !(0, Pd.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, A(), o && k(p.current));
	}, [
		l,
		f.initialValues,
		A,
		o,
		k
	]), (0, x.useEffect)(function() {
		l && _.current === !0 && !(0, Pd.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || yf, C({
			type: "SET_ERRORS",
			payload: f.initialErrors || yf
		}));
	}, [l, f.initialErrors]), (0, x.useEffect)(function() {
		l && _.current === !0 && !(0, Pd.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || bf, C({
			type: "SET_TOUCHED",
			payload: f.initialTouched || bf
		}));
	}, [l, f.initialTouched]), (0, x.useEffect)(function() {
		l && _.current === !0 && !(0, Pd.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, C({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var j = Af(function(e) {
		if (v.current[e] && Z(v.current[e].validate)) {
			var t = Q(S.values, e), n = v.current[e].validate(t);
			return hf(n) ? (C({
				type: "SET_ISVALIDATING",
				payload: !0
			}), n.then(function(e) {
				return e;
			}).then(function(t) {
				C({
					type: "SET_FIELD_ERROR",
					payload: {
						field: e,
						value: t
					}
				}), C({
					type: "SET_ISVALIDATING",
					payload: !1
				});
			})) : (C({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: n
				}
			}), Promise.resolve(n));
		} else if (f.validationSchema) return C({
			type: "SET_ISVALIDATING",
			payload: !0
		}), T(S.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			C({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: Q(t, e)
				}
			}), C({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), M = (0, x.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), N = (0, x.useCallback)(function(e) {
		delete v.current[e];
	}, []), P = Af(function(e, t) {
		return C({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? k(S.values) : Promise.resolve();
	}), F = (0, x.useCallback)(function(e) {
		C({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), I = Af(function(e, t) {
		var r = Z(e) ? e(S.values) : e;
		return C({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? k(r) : Promise.resolve();
	}), L = (0, x.useCallback)(function(e, t) {
		C({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), R = Af(function(e, t, r) {
		var i = Z(t) ? t(Q(S.values, e)) : t;
		return C({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? k(gf(S.values, e, i)) : Promise.resolve();
	}), z = (0, x.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!pf(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Of(Q(S.values, n), u, l) : d && f ? Df(d) : l;
		}
		n && R(n, r);
	}, [R, S.values]), B = Af(function(e) {
		if (pf(e)) return function(t) {
			return z(t, e);
		};
		z(e);
	}), ee = Af(function(e, t, n) {
		return t === void 0 && (t = !0), C({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? k(S.values) : Promise.resolve();
	}), te = (0, x.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, ee(t || r || i, !0);
	}, [ee]), ne = Af(function(e) {
		if (pf(e)) return function(t) {
			return te(t, e);
		};
		te(e);
	}), re = (0, x.useCallback)(function(e) {
		Z(e) ? C({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : C({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ie = (0, x.useCallback)(function(e) {
		C({
			type: "SET_STATUS",
			payload: e
		});
	}, []), ae = (0, x.useCallback)(function(e) {
		C({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), oe = Af(function() {
		return C({ type: "SUBMIT_ATTEMPT" }), k().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = le(), n === void 0) return;
				} catch (e) {
					throw e;
				}
				return Promise.resolve(n).then(function(e) {
					return _.current && C({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (_.current) throw C({ type: "SUBMIT_FAILURE" }), e;
				});
			} else if (_.current && (C({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), se = Af(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), oe().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), ce = {
		resetForm: A,
		validateForm: k,
		validateField: j,
		setErrors: F,
		setFieldError: L,
		setFieldTouched: ee,
		setFieldValue: R,
		setStatus: ie,
		setSubmitting: ae,
		setTouched: P,
		setValues: I,
		setFormikState: re,
		submitForm: oe
	}, le = Af(function() {
		return u(S.values, ce);
	}), ue = Af(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), A();
	}), de = (0, x.useCallback)(function(e) {
		return {
			value: Q(S.values, e),
			error: Q(S.errors, e),
			touched: !!Q(S.touched, e),
			initialValue: Q(p.current, e),
			initialTouched: !!Q(h.current, e),
			initialError: Q(m.current, e)
		};
	}, [
		S.errors,
		S.touched,
		S.values
	]), fe = (0, x.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return R(e, t, n);
			},
			setTouched: function(t, n) {
				return ee(e, t, n);
			},
			setError: function(t) {
				return L(e, t);
			}
		};
	}, [
		R,
		ee,
		L
	]), V = (0, x.useCallback)(function(e) {
		var t = df(e), n = t ? e.name : e, r = Q(S.values, n), i = {
			name: n,
			value: r,
			onChange: B,
			onBlur: ne
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		ne,
		B,
		S.values
	]), pe = (0, x.useMemo)(function() {
		return !(0, Pd.default)(p.current, S.values);
	}, [p.current, S.values]), me = (0, x.useMemo)(function() {
		return s === void 0 || pe ? S.errors && Object.keys(S.errors).length === 0 : s !== !1 && Z(s) ? s(f) : s;
	}, [
		s,
		pe,
		S.errors,
		f
	]);
	return X({}, S, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: ne,
		handleChange: B,
		handleReset: ue,
		handleSubmit: se,
		resetForm: A,
		setErrors: F,
		setFormikState: re,
		setFieldTouched: ee,
		setFieldValue: R,
		setFieldError: L,
		setStatus: ie,
		setSubmitting: ae,
		setTouched: P,
		setValues: I,
		submitForm: oe,
		validateForm: k,
		validateField: j,
		isValid: me,
		dirty: pe,
		unregisterField: N,
		registerField: M,
		getFieldProps: V,
		getFieldMeta: de,
		getFieldHelpers: fe,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Sf(e) {
	var t = xf(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, x.useImperativeHandle)(a, function() {
		return t;
	}), (0, x.createElement)(cf, { value: t }, n ? (0, x.createElement)(n, t) : i ? i(t) : r ? Z(r) ? r(t) : mf(r) ? null : x.Children.only(r) : null);
}
function Cf(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return gf(t, e.path, e.message);
		for (var n = e.inner, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
			var a;
			if (r) {
				if (i >= n.length) break;
				a = n[i++];
			} else {
				if (i = n.next(), i.done) break;
				a = i.value;
			}
			var o = a;
			Q(t, o.path) || (t = gf(t, o.path, o.message));
		}
	}
	return t;
}
function wf(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Tf(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Tf(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || ds(e) ? Tf(e) : e === "" ? void 0 : e;
		}) : ds(e[r]) ? t[r] = Tf(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Ef(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Bo(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Bo(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Df(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Of(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var kf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? x.useLayoutEffect : x.useEffect;
function Af(e) {
	var t = (0, x.useRef)(e);
	return kf(function() {
		t.current = e;
	}), (0, x.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function jf(e) {
	var t = lf(), n = t.getFieldProps, r = t.getFieldMeta, i = t.getFieldHelpers, a = t.registerField, o = t.unregisterField, s = df(e) ? e : { name: e }, c = s.name, l = s.validate;
	(0, x.useEffect)(function() {
		return c && a(c, { validate: l }), function() {
			c && o(c);
		};
	}, [
		a,
		o,
		c,
		l
	]), !c && Id(!1);
	var u = (0, x.useMemo)(function() {
		return i(c);
	}, [i, c]);
	return [
		n(s),
		r(c),
		u
	];
}
function Mf(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = af(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = af(lf(), ["validate", "validationSchema"]), u = l.registerField, d = l.unregisterField;
	(0, x.useEffect)(function() {
		return u(n, { validate: t }), function() {
			d(n);
		};
	}, [
		u,
		d,
		n,
		t
	]);
	var f = l.getFieldProps(X({ name: n }, c)), p = l.getFieldMeta(n), m = {
		field: f,
		form: l
	};
	if (r) return r(X({}, m, { meta: p }));
	if (Z(i)) return i(X({}, m, { meta: p }));
	if (o) {
		if (typeof o == "string") {
			var h = c.innerRef, g = af(c, ["innerRef"]);
			return (0, x.createElement)(o, X({ ref: h }, f, g, { className: s }), i);
		}
		return (0, x.createElement)(o, X({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = af(c, ["innerRef"]);
		return (0, x.createElement)(_, X({ ref: v }, f, y, { className: s }), i);
	}
	return (0, x.createElement)(_, X({}, f, c, { className: s }), i);
}
var Nf = /* @__PURE__ */ (0, x.forwardRef)(function(e, t) {
	var n = e.action, r = af(e, ["action"]), i = n ?? "#", a = lf(), o = a.handleReset, s = a.handleSubmit;
	return (0, x.createElement)("form", X({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Nf.displayName = "Form";
var Pf = function(e, t, n) {
	var r = Rf(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Ff = function(e, t, n) {
	var r = Rf(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, If = function(e, t, n) {
	var r = Rf(e);
	return r.splice(t, 0, n), r;
}, Lf = function(e, t, n) {
	var r = Rf(e);
	return r[t] = n, r;
}, Rf = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(X({}, e, { length: t + 1 }));
}, zf = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || df(e) ? n(Rf(e)) : e;
	};
}, Bf = /* @__PURE__ */ function(e) {
	rf(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = zf(r, e), o = zf(t, e), s = gf(n.values, a, e(Q(n.values, a))), c = r ? i(Q(n.errors, a)) : void 0, l = t ? o(Q(n.touched, a)) : void 0;
				return uf(c) && (c = void 0), uf(l) && (l = void 0), X({}, n, {
					values: s,
					errors: r ? gf(n.errors, a, c) : n.errors,
					touched: t ? gf(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(Rf(t), [Nd(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Ff(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Pf(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return If(n, e, t);
			}, function(t) {
				return If(t, e, null);
			}, function(t) {
				return If(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return Lf(n, e, t);
			}, !1, !1);
		}, n.handleReplace = function(e, t) {
			return function() {
				return n.replace(e, t);
			};
		}, n.unshift = function(e) {
			var t = -1;
			return n.updateArrayField(function(n) {
				var r = n ? [e].concat(n) : [e];
				return t = r.length, r;
			}, function(e) {
				return e ? [null].concat(e) : [null];
			}, function(e) {
				return e ? [null].concat(e) : [null];
			}), t;
		}, n.handleUnshift = function(e) {
			return function() {
				return n.unshift(e);
			};
		}, n.handleRemove = function(e) {
			return function() {
				return n.remove(e);
			};
		}, n.handlePop = function() {
			return function() {
				return n.pop();
			};
		}, n.remove = n.remove.bind(of(n)), n.pop = n.pop.bind(of(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Pd.default)(Q(e.formik.values, e.name), Q(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? Rf(n) : [];
			return t ||= r[e], Z(r.splice) && r.splice(e, 1), Z(r.every) && r.every(function(e) {
				return e === void 0;
			}) ? [] : r;
		}, !0, !0), t;
	}, n.pop = function() {
		var e;
		return this.updateArrayField(function(t) {
			var n = t.slice();
			return e ||= n && n.pop && n.pop(), n;
		}, !0, !0), e;
	}, n.render = function() {
		var e = {
			push: this.push,
			pop: this.pop,
			swap: this.swap,
			move: this.move,
			insert: this.insert,
			replace: this.replace,
			unshift: this.unshift,
			remove: this.remove,
			handlePush: this.handlePush,
			handlePop: this.handlePop,
			handleSwap: this.handleSwap,
			handleMove: this.handleMove,
			handleInsert: this.handleInsert,
			handleReplace: this.handleReplace,
			handleUnshift: this.handleUnshift,
			handleRemove: this.handleRemove
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = af(o, ["validate", "validationSchema"]), c = X({}, e, {
			form: s,
			name: a
		});
		return n ? (0, x.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : mf(i) ? null : x.Children.only(i) : null;
	}, t;
}(x.Component);
Bf.defaultProps = { validateOnChange: !0 };
//#endregion
//#region src/cover-block/studio-ui/components/CoverForm.tsx
var $ = r(), Vf = () => {
	let [e] = jf("variant"), [t] = jf("image_position"), [n] = jf("description"), r = e.value !== d.section, i = e.value === d.section, a = {
		xs: 12,
		sm: r ? 8 : 12,
		lg: r ? 10 : 12
	};
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "p-3",
		children: /* @__PURE__ */ (0, $.jsxs)(p, { children: [
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-display-name",
				xs: 12,
				children: [
					/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Display Name" }),
					/* @__PURE__ */ (0, $.jsx)(Mf, {
						as: q.Control,
						name: "display_name"
					}),
					/* @__PURE__ */ (0, $.jsx)(q.Text, {
						muted: !0,
						children: "The label for this block, shown only in studio."
					})
				]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-variant",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Variant" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
					as: "select",
					...e,
					children: [
						/* @__PURE__ */ (0, $.jsx)("option", {
							value: d.section,
							children: "Section Cover"
						}),
						/* @__PURE__ */ (0, $.jsx)("option", {
							value: d.course,
							children: "Course Cover"
						}),
						/* @__PURE__ */ (0, $.jsx)("option", {
							value: d.separator,
							children: "Separator"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-media-url",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image URL" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "media_url"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-media-alt-text",
				xs: 12,
				children: [
					/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Alt Text" }),
					/* @__PURE__ */ (0, $.jsx)(Mf, {
						as: q.Control,
						name: "media_alt_text"
					}),
					/* @__PURE__ */ (0, $.jsx)(q.Text, {
						muted: !0,
						children: "Provide a description of your image for use with screen readers."
					})
				]
			}),
			i && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-image-position",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Position" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
					as: "select",
					...t,
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: g.right,
						children: "Image Right"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: g.left,
						children: "Image Left"
					})]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-top-header",
				...a,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Top Header" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "top_header"
				})]
			}),
			r && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-top-header-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "top_header_color",
					type: "color",
					"aria-label": "Top header color"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-main-header",
				...a,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Main Header" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "main_header"
				})]
			}),
			r && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-main-header-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "main_header_color",
					type: "color",
					"aria-label": "Main header color"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-subheader",
				...a,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Subheader" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "subheader"
				})]
			}),
			r && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-subheader-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "subheader_color",
					type: "color",
					"aria-label": "Subheader color"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-description",
				...a,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Description" }), /* @__PURE__ */ (0, $.jsx)(q.Control, {
					as: "textarea",
					...n
				})]
			}),
			r && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: u,
				controlId: "cover-form-description-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(Mf, {
					as: q.Control,
					name: "description_color",
					type: "color",
					"aria-label": "Description color"
				})]
			})
		] })
	});
}, Hf = () => {
	let { runtime: e } = (0, x.useContext)(m), t = lf();
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "react-studio-block",
		children: /* @__PURE__ */ (0, $.jsxs)(l, {
			className: "editor-with-buttons",
			children: [/* @__PURE__ */ (0, $.jsx)("div", {
				className: "wrapper-comp-settings is-active",
				children: /* @__PURE__ */ (0, $.jsx)(Vf, {})
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: "xblock-actions",
				children: /* @__PURE__ */ (0, $.jsxs)(C, { children: [
					/* @__PURE__ */ (0, $.jsx)(C.Spacer, {}),
					/* @__PURE__ */ (0, $.jsx)(Si, {
						variant: "tertiary",
						onClick: () => e.notify("cancel", {}),
						children: "Cancel"
					}),
					/* @__PURE__ */ (0, $.jsx)(Si, {
						variant: "primary",
						onClick: t.submitForm,
						children: "Save"
					})
				] })
			})]
		})
	});
}, Uf = (e) => {
	let { runtime: t } = (0, x.useContext)(m), n = h("studio_save");
	return /* @__PURE__ */ (0, $.jsx)(Sf, {
		initialValues: e,
		onSubmit: (e) => {
			f({
				saveUrl: n,
				data: e,
				runtime: t,
				errorMessage: "Failed to save cover block configuration"
			});
		},
		children: /* @__PURE__ */ (0, $.jsx)(Hf, {})
	});
}, Wf = ".wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block .wrapper-comp-settings{max-height:var(--exemplar-block-studio-ui-max-height,calc(100vh - 69px));height:100%;overflow-y:scroll}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", Gf = (e, t, n) => {
	c({
		runtime: e,
		element: t,
		config: n.config,
		styles: Wf
	})(/* @__PURE__ */ (0, $.jsx)(Uf, { ...n.data }));
};
//#endregion
export { Gf as renderBlock };
