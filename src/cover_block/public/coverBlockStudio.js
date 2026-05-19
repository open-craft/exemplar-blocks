import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, o as u, p as d, r as f, s as p, t as m, u as h, v as g } from "./utils-BGTVQbpS.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var _ = /* @__PURE__ */ g(a()), v = /* @__PURE__ */ g(o());
function y({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ _.createElement(e, {
		...r,
		className: (0, v.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function b() {
	return /* @__PURE__ */ _.createElement("span", { className: "pgn__action-row-spacer" });
}
y.Spacer = b, (/* @__PURE__ */ e(((e, t) => {
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
function x(e, t, n) {
	var r = (0, _.useRef)(e !== void 0), i = (0, _.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, _.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function S(e, t) {
	return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, S(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function C(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, S(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function w() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function T(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function E(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
w.__suppressDeprecationWarning = !0, T.__suppressDeprecationWarning = !0, E.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function D(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function O(e) {
	var t = D(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function k(e, t) {
	return O(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var A = /([A-Z])/g;
function j(e) {
	return e.replace(A, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var M = /^ms-/;
function N(e) {
	return j(e).replace(M, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var P = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ee(e) {
	return !!(e && P.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function F(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(N(t)) || k(e).getPropertyValue(N(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(N(i)) : ee(i) ? r += i + "(" + a + ") " : n += N(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var I = /* @__PURE__ */ e(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), L = /* @__PURE__ */ e(((e, t) => {
	var n = I();
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
})), R = /* @__PURE__ */ e(((e, t) => {
	t.exports = L()();
})), te = { disabled: !1 }, ne = _.createContext(null), re = function(e) {
	return e.scrollTop;
}, z = /* @__PURE__ */ g(r()), ie = "unmounted", ae = "exited", oe = "entering", se = "entered", ce = "exiting", B = /* @__PURE__ */ function(e) {
	C(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = ae, r.appearStatus = oe) : o = se : o = t.unmountOnExit || t.mountOnEnter ? ie : ae, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: ae } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = oe) : (n === "entering" || n === "entered") && (t = ce);
		}
		this.updateStatus(!1, t);
	}, n.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, n.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, n.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : z.findDOMNode(this);
				n && re(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: ie });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [z.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || te.disabled) {
			this.safeSetState({ status: se }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: oe }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: se }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : z.findDOMNode(this);
		if (!t || te.disabled) {
			this.safeSetState({ status: ae }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: ce }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: ae }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, n.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, n.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, n.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, n.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : z.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, n.render = function() {
		var e = this.state.status;
		if (e === "unmounted") return null;
		var t = this.props, n = t.children;
		t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
		var r = d(t, [
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
		return /* @__PURE__ */ _.createElement(ne.Provider, { value: null }, typeof n == "function" ? n(e, r) : _.cloneElement(_.Children.only(n), r));
	}, t;
}(_.Component);
B.contextType = ne, B.propTypes = {};
function le() {}
B.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: le,
	onEntering: le,
	onEntered: le,
	onExit: le,
	onExiting: le,
	onExited: le
}, B.UNMOUNTED = ie, B.EXITED = ae, B.ENTERING = oe, B.ENTERED = se, B.EXITING = ce;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var ue = !!(typeof window < "u" && window.document && window.document.createElement), de = !1, fe = !1;
try {
	var pe = {
		get passive() {
			return de = !0;
		},
		get once() {
			return fe = de = !0;
		}
	};
	ue && (window.addEventListener("test", pe, pe), window.removeEventListener("test", pe, !0));
} catch {}
function me(e, t, n, r) {
	if (r && typeof r != "boolean" && !fe) {
		var i = r.once, a = r.capture, o = n;
		!fe && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, de ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function he(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function ge(e, t, n, r) {
	return me(e, t, n, r), function() {
		he(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function _e(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function ve(e) {
	var t = F(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function ye(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || _e(e, "transitionend", !0);
	}, t + n), a = ge(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function be(e, t, n, r) {
	n ??= ve(e) || 0;
	var i = ye(e, n, r), a = ge(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function xe(e, t) {
	var n = F(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Se(e, t) {
	var n = be(e, function(r) {
		r.target === e && (n(), t(r));
	}, xe(e, "transitionDuration") + xe(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function Ce() {
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
function we(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Te(e) {
	let t = (0, _.useRef)(e);
	return (0, _.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Ee(e) {
	let t = Te(e);
	return (0, _.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var De = ["className", "children"], Oe, ke = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Ae = (Oe = {}, Oe[oe] = "show", Oe[se] = "show", Oe), je = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = d(e, De), a = (0, _.useCallback)(function(e) {
		we(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ _.createElement(B, l({
		ref: t,
		addEndListener: Se
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ _.cloneElement(r, l({}, t, { className: (0, v.default)("fade", n, r.props.className, Ae[e]) }));
	});
});
je.defaultProps = ke, je.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Me = /-(.)/g;
function Ne(e) {
	return e.replace(Me, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Pe = [
	"className",
	"bsPrefix",
	"as"
], Fe = function(e) {
	return e[0].toUpperCase() + Ne(e).slice(1);
};
function Ie(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, a = r === void 0 ? Fe(e) : r, o = n.Component, s = n.defaultProps, c = /* @__PURE__ */ _.forwardRef(function(t, n) {
		var r = t.className, a = t.bsPrefix, s = t.as, c = s === void 0 ? o || "div" : s, u = d(t, Pe), f = i(a, e);
		return /* @__PURE__ */ _.createElement(c, l({
			ref: n,
			className: (0, v.default)(r, f)
		}, u));
	});
	return c.defaultProps = s, c.displayName = a, c;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Le = [
	"as",
	"disabled",
	"onKeyDown"
];
function Re(e) {
	return !e || e.trim() === "#";
}
var ze = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = d(e, Le), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || Re(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Re(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ _.createElement(r, l({ ref: t }, o, {
		onClick: s,
		onKeyDown: Ce(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
ze.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Be = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Ve = {
	variant: "primary",
	active: !1,
	disabled: !1
}, He = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, a = e.size, o = e.active, s = e.className, c = e.block, u = e.type, f = e.as, p = d(e, Be), m = i(n, "btn"), h = (0, v.default)(s, m, o && "active", r && m + "-" + r, c && m + "-block", a && m + "-" + a);
	if (p.href) return /* @__PURE__ */ _.createElement(ze, l({}, p, {
		as: f,
		ref: t,
		className: (0, v.default)(h, p.disabled && "disabled")
	}));
	t && (p.ref = t), u ? p.type = u : f || (p.type = "button");
	var g = f || "button";
	return /* @__PURE__ */ _.createElement(g, l({}, p, { className: h }));
});
He.displayName = "Button", He.defaultProps = Ve;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Ue() {
	let e = (0, _.useRef)(!0), t = (0, _.useRef)(() => e.current);
	return (0, _.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function We(e) {
	let t = (0, _.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Ge(e) {
	let t = We(e);
	(0, _.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var Ke = 2 ** 31 - 1;
function qe(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Ke ? setTimeout(t, r) : setTimeout(() => qe(e, t, n), Ke);
}
function Je() {
	let e = Ue(), t = (0, _.useRef)();
	return Ge(() => clearTimeout(t.current)), (0, _.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= Ke ? t.current = setTimeout(r, i) : qe(t, r, Date.now() + i));
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
function Ye() {
	return (0, _.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function Xe(e) {
	let t = Ue();
	return [e[0], (0, _.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var Ze = "bottom", Qe = "right", $e = "left", et = "auto", tt = [
	"top",
	Ze,
	Qe,
	$e
], nt = "start", rt = "clippingParents", it = "viewport", at = "popper", ot = "reference", st = /* @__PURE__ */ tt.reduce(function(e, t) {
	return e.concat([t + "-" + nt, t + "-end"]);
}, []), ct = /* @__PURE__ */ [].concat(tt, [et]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + nt,
		t + "-end"
	]);
}, []), lt = [
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
function ut(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function dt(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function ft(e) {
	return e instanceof dt(e).Element || e instanceof Element;
}
function pt(e) {
	return e instanceof dt(e).HTMLElement || e instanceof HTMLElement;
}
function mt(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var ht = Math.max, gt = Math.min, _t = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function vt() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function yt() {
	return !/^((?!chrome|android).)*safari/i.test(vt());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function bt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && pt(e) && (i = e.offsetWidth > 0 && _t(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && _t(r.height) / e.offsetHeight || 1);
	var o = (ft(e) ? dt(e) : window).visualViewport, s = !yt() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function xt(e) {
	var t = bt(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function St(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && mt(n)) {
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
function Ct(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function wt(e) {
	return dt(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Tt(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Ct(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Et(e) {
	return ((ft(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Dt(e) {
	return Ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (mt(e) ? e.host : null) || Et(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Ot(e) {
	return !pt(e) || wt(e).position === "fixed" ? null : e.offsetParent;
}
function kt(e) {
	var t = /firefox/i.test(vt());
	if (/Trident/i.test(vt()) && pt(e) && wt(e).position === "fixed") return null;
	var n = Dt(e);
	for (mt(n) && (n = n.host); pt(n) && ["html", "body"].indexOf(Ct(n)) < 0;) {
		var r = wt(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function At(e) {
	for (var t = dt(e), n = Ot(e); n && Tt(n) && wt(n).position === "static";) n = Ot(n);
	return n && (Ct(n) === "html" || Ct(n) === "body" && wt(n).position === "static") ? t : n || kt(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function jt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Mt(e, t, n) {
	return ht(e, gt(t, n));
}
function Nt(e, t, n) {
	var r = Mt(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Pt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Ft(e) {
	return Object.assign({}, Pt(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function It(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Lt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ft(typeof e == "number" ? It(e, tt) : e);
};
function Rt(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = ut(n.placement), c = jt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Lt(i.padding, n), d = xt(a), f = c === "y" ? "top" : $e, p = c === "y" ? Ze : Qe, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = At(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Mt(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function zt(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || St(t.elements.popper, r) && (t.elements.arrow = r));
}
var Bt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Rt,
	effect: zt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Vt(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Ht = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Ut(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: _t(n * i) / i || 0,
		y: _t(r * i) / i || 0
	};
}
function Wt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = $e, b = "top", x = window;
	if (l) {
		var S = At(n), C = "clientHeight", w = "clientWidth";
		if (S === dt(n) && (S = Et(n), wt(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = Ze;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = Qe;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Ht), O = u === !0 ? Ut({
		x: p,
		y: h
	}, dt(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Gt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: ut(t.placement),
		variation: Vt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Kt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Gt,
	data: {}
}, qt = { passive: !0 };
function Jt(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = dt(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, qt);
	}), s && c.addEventListener("resize", n.update, qt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, qt);
		}), s && c.removeEventListener("resize", n.update, qt);
	};
}
var Yt = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Jt,
	data: {}
}, Xt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Zt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return Xt[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Qt = {
	start: "end",
	end: "start"
};
function $t(e) {
	return e.replace(/start|end/g, function(e) {
		return Qt[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function en(e) {
	var t = dt(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function tn(e) {
	return bt(Et(e)).left + en(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function nn(e, t) {
	var n = dt(e), r = Et(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = yt();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + tn(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function rn(e) {
	var t = Et(e), n = en(e), r = e.ownerDocument?.body, i = ht(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = ht(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + tn(e), s = -n.scrollTop;
	return wt(r || t).direction === "rtl" && (o += ht(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function an(e) {
	var t = wt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function on(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Ct(e)) >= 0 ? e.ownerDocument.body : pt(e) && an(e) ? e : on(Dt(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function sn(e, t) {
	t === void 0 && (t = []);
	var n = on(e), r = n === e.ownerDocument?.body, i = dt(n), a = r ? [i].concat(i.visualViewport || [], an(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(sn(Dt(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function cn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function ln(e, t) {
	var n = bt(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function un(e, t, n) {
	return t === "viewport" ? cn(nn(e, n)) : ft(t) ? ln(t, n) : cn(rn(Et(e)));
}
function dn(e) {
	var t = sn(Dt(e)), n = ["absolute", "fixed"].indexOf(wt(e).position) >= 0 && pt(e) ? At(e) : e;
	return ft(n) ? t.filter(function(e) {
		return ft(e) && St(e, n) && Ct(e) !== "body";
	}) : [];
}
function fn(e, t, n, r) {
	var i = t === "clippingParents" ? dn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = un(e, n, r);
		return t.top = ht(i.top, t.top), t.right = gt(i.right, t.right), t.bottom = gt(i.bottom, t.bottom), t.left = ht(i.left, t.left), t;
	}, un(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function pn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? ut(r) : null, a = r ? Vt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case Ze:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case Qe:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case $e:
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
	var l = i ? jt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case nt:
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
function mn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? rt : s, l = n.rootBoundary, u = l === void 0 ? it : l, d = n.elementContext, f = d === void 0 ? at : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ft(typeof g == "number" ? It(g, tt) : g), v = f === "popper" ? ot : at, y = e.rects.popper, b = e.elements[m ? v : f], x = fn(ft(b) ? b : b.contextElement || Et(e.elements.popper), c, u, o), S = bt(e.elements.reference), C = pn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = cn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function hn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? ct : c, u = Vt(r), d = u ? s ? st : st.filter(function(e) {
		return Vt(e) === u;
	}) : tt, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = mn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[ut(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function gn(e) {
	if (ut(e) === "auto") return [];
	var t = Zt(e);
	return [
		$t(e),
		t,
		$t(t)
	];
}
function _n(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = ut(g) === g, v = c || (_ || !m ? [Zt(g)] : gn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(ut(n) === "auto" ? hn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = ut(E), O = Vt(E) === nt, k = ["top", Ze].indexOf(D) >= 0, A = k ? "width" : "height", j = mn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? Qe : $e : O ? Ze : "top";
			b[A] > x[A] && (M = Zt(M));
			var N = Zt(M), P = [];
			if (a && P.push(j[D] <= 0), s && P.push(j[M] <= 0, j[N] <= 0), P.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, P);
		}
		if (C) for (var ee = m ? 3 : 1, F = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, I = ee; I > 0 && F(I) !== "break"; I--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var vn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: _n,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function yn(e, t, n) {
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
function bn(e) {
	return [
		"top",
		Qe,
		Ze,
		$e
	].some(function(t) {
		return e[t] >= 0;
	});
}
function xn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = mn(t, { elementContext: "reference" }), s = mn(t, { altBoundary: !0 }), c = yn(o, r), l = yn(s, i, a), u = bn(c), d = bn(l);
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
var Sn = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: xn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function Cn(e, t, n) {
	var r = ut(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function wn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = ct.reduce(function(e, n) {
		return e[n] = Cn(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Tn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: wn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function En(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = pn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Dn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: En,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function On(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function kn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = mn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = ut(t.placement), v = Vt(t.placement), y = !v, b = jt(_), x = On(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : $e, A = b === "y" ? Ze : Qe, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], ee = p ? -w[j] / 2 : 0, F = v === "start" ? C[j] : w[j], I = v === "start" ? -w[j] : -C[j], L = t.elements.arrow, R = p && L ? xt(L) : {
				width: 0,
				height: 0
			}, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pt(), ne = te[k], re = te[A], z = Mt(0, C[j], R[j]), ie = y ? C[j] / 2 - ee - z - ne - E.mainAxis : F - z - ne - E.mainAxis, ae = y ? -C[j] / 2 + ee + z + re + E.mainAxis : I + z + re + E.mainAxis, oe = t.elements.arrow && At(t.elements.arrow), se = oe ? b === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, ce = D?.[b] ?? 0, B = M + ie - ce - se, le = M + ae - ce, ue = Mt(p ? gt(N, B) : N, M, p ? ht(P, le) : P);
			S[b] = ue, O[b] = ue - M;
		}
		if (s) {
			var de = b === "x" ? "top" : $e, fe = b === "x" ? Ze : Qe, pe = S[x], me = x === "y" ? "height" : "width", he = pe + g[de], ge = pe - g[fe], _e = ["top", $e].indexOf(_) !== -1, ve = D?.[x] ?? 0, ye = _e ? he : pe - C[me] - w[me] - ve + E.altAxis, be = _e ? pe + C[me] + w[me] - ve - E.altAxis : ge, xe = p && _e ? Nt(ye, pe, be) : Mt(p ? ye : he, pe, p ? be : ge);
			S[x] = xe, O[x] = xe - pe;
		}
		t.modifiersData[r] = O;
	}
}
var An = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: kn,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function jn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Mn(e) {
	return e === dt(e) || !pt(e) ? en(e) : jn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Nn(e) {
	var t = e.getBoundingClientRect(), n = _t(t.width) / e.offsetWidth || 1, r = _t(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Pn(e, t, n) {
	n === void 0 && (n = !1);
	var r = pt(t), i = pt(t) && Nn(t), a = Et(t), o = bt(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Ct(t) !== "body" || an(a)) && (s = Mn(t)), pt(t) ? (c = bt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = tn(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Fn(e) {
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
function In(e) {
	var t = Fn(e);
	return lt.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Ln(e) {
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
function Rn(e) {
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
var zn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Bn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Vn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? zn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, zn, a),
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
					reference: ft(e) ? sn(e) : e.contextElement ? sn(e.contextElement) : [],
					popper: sn(t)
				};
				var s = In(Rn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Bn(t, n)) {
						i.rects = {
							reference: Pn(t, At(n), i.options.strategy === "fixed"),
							popper: xt(n)
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
			update: Ln(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Bn(e, t)) return c;
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
var Hn = Vn({ defaultModifiers: [
	Sn,
	Dn,
	Kt,
	Yt,
	Tn,
	vn,
	An,
	Bt
] }), Un = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Wn = {
	name: "applyStyles",
	enabled: !1
}, Gn = {
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
}, Kn = [];
function qn(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, u = c === void 0 ? "absolute" : c, f = r.modifiers, p = f === void 0 ? Kn : f, m = d(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), h = (0, _.useRef)(), g = (0, _.useCallback)(function() {
		var e;
		(e = h.current) == null || e.update();
	}, []), v = (0, _.useCallback)(function() {
		var e;
		(e = h.current) == null || e.forceUpdate();
	}, []), y = Xe((0, _.useState)({
		placement: s,
		update: g,
		forceUpdate: v,
		attributes: {},
		styles: {
			popper: Un(u),
			arrow: {}
		}
	})), b = y[0], x = y[1], S = (0, _.useMemo)(function() {
		return {
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: function(e) {
				var t = e.state, n = {}, r = {};
				Object.keys(t.elements).forEach(function(e) {
					n[e] = t.styles[e], r[e] = t.attributes[e];
				}), x({
					state: t,
					styles: n,
					attributes: r,
					update: g,
					forceUpdate: v,
					placement: t.placement
				});
			}
		};
	}, [
		g,
		v,
		x
	]);
	return (0, _.useEffect)(function() {
		!h.current || !a || h.current.setOptions({
			placement: s,
			strategy: u,
			modifiers: [].concat(p, [S, Wn])
		});
	}, [
		u,
		s,
		S,
		a
	]), (0, _.useEffect)(function() {
		if (!(!a || e == null || t == null)) return h.current = Hn(e, t, l({}, m, {
			placement: s,
			strategy: u,
			modifiers: [].concat(p, [Gn, S])
		})), function() {
			h.current != null && (h.current.destroy(), h.current = void 0, x(function(e) {
				return l({}, e, {
					attributes: {},
					styles: { popper: Un(u) }
				});
			}));
		};
	}, [
		a,
		e,
		t
	]), b;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Jn(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var Yn = /* @__PURE__ */ e(((e, t) => {
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
function Xn(e) {
	return e && "setState" in e ? z.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var Zn = (function(e) {
	return D(Xn(e));
}), Qn = /* @__PURE__ */ g(Yn()), $n = 27, er = function() {};
function tr(e) {
	return e.button === 0;
}
function nr(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var rr = function(e) {
	return e && ("current" in e ? e.current : e);
};
function ir(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, _.useRef)(!1), c = t || er, l = (0, _.useCallback)(function(t) {
		var n = rr(e);
		(0, Qn.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || nr(t) || !tr(t) || !!Jn(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Ee(function(e) {
		s.current || c(e);
	}), d = Ee(function(e) {
		e.keyCode === $n && c(e);
	});
	(0, _.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Zn(rr(e)), r = ge(n, o, l, !0), a = ge(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = ge(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return ge(e, "mousemove", er);
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
function ar(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function or(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function sr(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, u = e.popperConfig, d = u === void 0 ? {} : u, f = ar(d.modifiers);
	return l({}, d, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : d.strategy,
		modifiers: or(l({}, f, {
			eventListeners: { enabled: n },
			preventOverflow: l({}, f.preventOverflow, { options: s ? l({ padding: s }, f.preventOverflow?.options) : f.preventOverflow?.options }),
			offset: { options: l({ offset: a }, f.offset?.options) },
			arrow: l({}, f.arrow, {
				enabled: !!c,
				options: l({}, f.arrow?.options, { element: c })
			}),
			flip: l({ enabled: !!i }, f.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var cr = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function lr(e, t) {
	let n = cr(e), r = cr(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function ur(e, t) {
	return (0, _.useMemo)(() => lr(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function dr(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function fr(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function pr() {
	var e = (0, _.useRef)(null), t = (0, _.useRef)(null), n = (0, _.useRef)(null), r = i(void 0, "popover"), a = i(void 0, "dropdown-menu");
	return [(0, _.useCallback)(function(n) {
		!n || !(dr(n, r) || dr(n, a)) || (t.current = fr(n), n.style.margin = "0", e.current = n);
	}, [r, a]), [
		(0, _.useMemo)(function() {
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
		(0, _.useMemo)(function() {
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
		(0, _.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !dr(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = fr(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = fr(i.elements.arrow);
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
var mr = /* @__PURE__ */ e(((e, t) => {
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
})), hr = /* @__PURE__ */ e(((e, t) => {
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
})), gr = /* @__PURE__ */ e(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(hr());
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
})), V = /* @__PURE__ */ g(R()), _r = [
	"as",
	"className",
	"type",
	"tooltip"
], vr = {
	type: V.default.string,
	tooltip: V.default.bool,
	as: V.default.elementType
}, yr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s === void 0 ? !1 : s, u = d(e, _r);
	return /* @__PURE__ */ _.createElement(r, l({}, u, {
		ref: t,
		className: (0, v.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
yr.displayName = "Feedback", yr.propTypes = vr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var br = /* @__PURE__ */ _.createContext({ controlId: void 0 }), xr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Sr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.type, c = s === void 0 ? "checkbox" : s, u = e.isValid, f = u === void 0 ? !1 : u, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.isStatic, g = e.as, y = g === void 0 ? "input" : g, b = d(e, xr), x = (0, _.useContext)(br), S = x.controlId, C = x.custom ? [a, "custom-control-input"] : [r, "form-check-input"], w = C[0], T = C[1];
	return r = i(w, T), /* @__PURE__ */ _.createElement(y, l({}, b, {
		ref: t,
		type: c,
		id: n || S,
		className: (0, v.default)(o, r, f && "is-valid", m && "is-invalid", h && "position-static")
	}));
});
Sr.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Cr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], wr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = d(e, Cr), c = (0, _.useContext)(br), u = c.controlId, f = c.custom ? [r, "custom-control-label"] : [n, "form-check-label"], p = f[0], m = f[1];
	return n = i(p, m), /* @__PURE__ */ _.createElement("label", l({}, s, {
		ref: t,
		htmlFor: o || u,
		className: (0, v.default)(a, n)
	}));
});
wr.displayName = "FormCheckLabel", gr();
var Tr = [
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
], Er = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.inline, s = o === void 0 ? !1 : o, c = e.disabled, u = c === void 0 ? !1 : c, f = e.isValid, p = f === void 0 ? !1 : f, m = e.isInvalid, h = m === void 0 ? !1 : m, g = e.feedbackTooltip, y = g === void 0 ? !1 : g, b = e.feedback, x = e.className, S = e.style, C = e.title, w = C === void 0 ? "" : C, T = e.type, E = T === void 0 ? "checkbox" : T, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = d(e, Tr), N = E === "switch" ? !0 : k, P = N ? [a, "custom-control"] : [r, "form-check"], ee = P[0], F = P[1];
	r = i(ee, F);
	var I = (0, _.useContext)(br).controlId, L = (0, _.useMemo)(function() {
		return {
			controlId: n || I,
			custom: N
		};
	}, [
		I,
		N,
		n
	]), R = N || D != null && D !== !1 && !O, te = /* @__PURE__ */ _.createElement(Sr, l({}, M, {
		type: E === "switch" ? "checkbox" : E,
		ref: t,
		isValid: p,
		isInvalid: h,
		isStatic: !R,
		disabled: u,
		as: j
	}));
	return /* @__PURE__ */ _.createElement(br.Provider, { value: L }, /* @__PURE__ */ _.createElement("div", {
		style: S,
		className: (0, v.default)(x, r, N && "custom-" + E, s && r + "-inline")
	}, O || /* @__PURE__ */ _.createElement(_.Fragment, null, te, R && /* @__PURE__ */ _.createElement(wr, { title: w }, D), (p || h) && /* @__PURE__ */ _.createElement(yr, {
		type: p ? "valid" : "invalid",
		tooltip: y
	}, b))));
});
Er.displayName = "FormCheck", Er.Input = Sr, Er.Label = wr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Dr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Or = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.isValid, c = e.isInvalid, u = e.lang, f = e.as, p = f === void 0 ? "input" : f, m = d(e, Dr), h = (0, _.useContext)(br), g = h.controlId, y = h.custom, b = "file", x = y ? [a, "custom-file-input"] : [r, "form-control-file"], S = x[0], C = x[1];
	return r = i(S, C), /* @__PURE__ */ _.createElement(p, l({}, m, {
		ref: t,
		id: n || g,
		type: b,
		lang: u,
		className: (0, v.default)(o, r, s && "is-valid", c && "is-invalid")
	}));
});
Or.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var kr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Ar = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = d(e, kr), c = (0, _.useContext)(br), u = c.controlId, f = c.custom ? [r, "custom-file-label"] : [n, "form-file-label"], p = f[0], m = f[1];
	return n = i(p, m), /* @__PURE__ */ _.createElement("label", l({}, s, {
		ref: t,
		htmlFor: o || u,
		className: (0, v.default)(a, n),
		"data-browse": s["data-browse"]
	}));
});
Ar.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var jr = [
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
], Mr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, a = e.bsCustomPrefix, o = e.disabled, s = o === void 0 ? !1 : o, c = e.isValid, u = c === void 0 ? !1 : c, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.feedbackTooltip, h = m === void 0 ? !1 : m, g = e.feedback, y = e.className, b = e.style, x = e.label, S = e.children, C = e.custom, w = e.lang, T = e["data-browse"], E = e.as, D = E === void 0 ? "div" : E, O = e.inputAs, k = O === void 0 ? "input" : O, A = d(e, jr), j = C ? [a, "custom"] : [r, "form-file"], M = j[0], N = j[1];
	r = i(M, N);
	var P = "file", ee = (0, _.useContext)(br).controlId, F = (0, _.useMemo)(function() {
		return {
			controlId: n || ee,
			custom: C
		};
	}, [
		ee,
		C,
		n
	]), I = x != null && x !== !1 && !S, L = /* @__PURE__ */ _.createElement(Or, l({}, A, {
		ref: t,
		isValid: u,
		isInvalid: p,
		disabled: s,
		as: k,
		lang: w
	}));
	return /* @__PURE__ */ _.createElement(br.Provider, { value: F }, /* @__PURE__ */ _.createElement(D, {
		style: b,
		className: (0, v.default)(y, r, C && "custom-" + P)
	}, S || /* @__PURE__ */ _.createElement(_.Fragment, null, C ? /* @__PURE__ */ _.createElement(_.Fragment, null, L, I && /* @__PURE__ */ _.createElement(Ar, { "data-browse": T }, x)) : /* @__PURE__ */ _.createElement(_.Fragment, null, I && /* @__PURE__ */ _.createElement(Ar, null, x), L), (u || p) && /* @__PURE__ */ _.createElement(yr, {
		type: u ? "valid" : "invalid",
		tooltip: h
	}, g))));
});
Mr.displayName = "FormFile", Mr.Input = Or, Mr.Label = Ar;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Nr = [
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
], Pr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, a = e.type, o = e.size, s = e.htmlSize, c = e.id, u = e.className, f = e.isValid, p = f === void 0 ? !1 : f, m = e.isInvalid, h = m === void 0 ? !1 : m, g = e.plaintext, y = e.readOnly, b = e.custom, x = e.as, S = x === void 0 ? "input" : x, C = d(e, Nr), w = (0, _.useContext)(br).controlId, T = b ? [r, "custom"] : [n, "form-control"], E = T[0], D = T[1];
	n = i(E, D);
	var O;
	if (g) {
		var k;
		O = (k = {}, k[n + "-plaintext"] = !0, k);
	} else if (a === "file") {
		var A;
		O = (A = {}, A[n + "-file"] = !0, A);
	} else if (a === "range") {
		var j;
		O = (j = {}, j[n + "-range"] = !0, j);
	} else if (S === "select" && b) {
		var M;
		O = (M = {}, M[n + "-select"] = !0, M[n + "-select-" + o] = o, M);
	} else {
		var N;
		O = (N = {}, N[n] = !0, N[n + "-" + o] = o, N);
	}
	return /* @__PURE__ */ _.createElement(S, l({}, C, {
		type: a,
		size: s,
		ref: t,
		readOnly: y,
		id: c || w,
		className: (0, v.default)(u, O, p && "is-valid", h && "is-invalid")
	}));
});
Pr.displayName = "FormControl";
var Fr = Object.assign(Pr, { Feedback: yr }), Ir = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Lr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.children, o = e.controlId, s = e.as, c = s === void 0 ? "div" : s, u = d(e, Ir);
	n = i(n, "form-group");
	var f = (0, _.useMemo)(function() {
		return { controlId: o };
	}, [o]);
	return /* @__PURE__ */ _.createElement(br.Provider, { value: f }, /* @__PURE__ */ _.createElement(c, l({}, u, {
		ref: t,
		className: (0, v.default)(r, n)
	}), a));
});
Lr.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Rr = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], zr = {
	column: !1,
	srOnly: !1
}, Br = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, a = e.bsPrefix, o = e.column, s = e.srOnly, c = e.className, u = e.htmlFor, f = d(e, Rr), p = (0, _.useContext)(br).controlId;
	a = i(a, "form-label");
	var m = "col-form-label";
	typeof o == "string" && (m = m + " " + m + "-" + o);
	var g = (0, v.default)(c, a, s && "sr-only", o && m);
	return u ||= p, o ? /* @__PURE__ */ _.createElement(h, l({
		ref: t,
		as: "label",
		className: g,
		htmlFor: u
	}, f)) : /* @__PURE__ */ _.createElement(r, l({
		ref: t,
		className: g,
		htmlFor: u
	}, f));
});
Br.displayName = "FormLabel", Br.defaultProps = zr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Vr = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Hr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.as, o = a === void 0 ? "small" : a, s = e.muted, c = d(e, Vr);
	return n = i(n, "form-text"), /* @__PURE__ */ _.createElement(o, l({}, c, {
		ref: t,
		className: (0, v.default)(r, n, s && "text-muted")
	}));
});
Hr.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Ur = /* @__PURE__ */ _.forwardRef(function(e, t) {
	return /* @__PURE__ */ _.createElement(Er, l({}, e, {
		ref: t,
		type: "switch"
	}));
});
Ur.displayName = "Switch", Ur.Input = Er.Input, Ur.Label = Er.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Wr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Gr = Ie("form-row"), Kr = { inline: !1 }, qr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, a = e.className, o = e.validated, s = e.as, c = s === void 0 ? "form" : s, u = d(e, Wr);
	return n = i(n, "form"), /* @__PURE__ */ _.createElement(c, l({}, u, {
		ref: t,
		className: (0, v.default)(a, o && "was-validated", r && n + "-inline")
	}));
});
qr.displayName = "Form", qr.defaultProps = Kr, qr.Row = Gr, qr.Group = Lr, qr.Control = Fr, qr.Check = Er, qr.File = Mr, qr.Switch = Ur, qr.Label = Br, qr.Text = Hr;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var Jr = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? D().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function Yr(e, t) {
	var n = (0, _.useState)(function() {
		return Jr(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Jr(e);
		a && i(a);
	}
	return (0, _.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, _.useEffect)(function() {
		var t = Jr(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var Xr = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, u = e.transition, f = Ye(), p = f[0], m = f[1], h = Ye(), g = h[0], v = h[1], y = ur(m, t), b = Yr(e.container), x = Yr(e.target), S = (0, _.useState)(!e.show), C = S[0], w = S[1], T = qn(x, p, sr({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: g,
		popperConfig: c
	})), E = T.styles, D = T.attributes, O = d(T, ["styles", "attributes"]);
	e.show ? C && w(!1) : !e.transition && !C && w(!0);
	var k = function() {
		w(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || u && !C;
	if (ir(p, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(l({}, O, {
		show: !!e.show,
		props: l({}, D.popper, {
			style: E.popper,
			ref: y
		}),
		arrowProps: l({}, D.arrow, {
			style: E.arrow,
			ref: v
		})
	}));
	if (u) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, ee = e.onEntering, F = e.onEntered;
		j = /* @__PURE__ */ _.createElement(u, {
			in: e.show,
			appear: !0,
			onExit: M,
			onExiting: N,
			onExited: k,
			onEnter: P,
			onEntering: ee,
			onEntered: F
		}, j);
	}
	return b ? /* @__PURE__ */ z.createPortal(j, b) : null;
});
Xr.displayName = "Overlay", Xr.propTypes = {
	show: V.default.bool,
	placement: V.default.oneOf(ct),
	target: V.default.any,
	container: V.default.any,
	flip: V.default.bool,
	children: V.default.func.isRequired,
	containerPadding: V.default.number,
	popperConfig: V.default.object,
	rootClose: V.default.bool,
	rootCloseEvent: V.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: V.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = V.default.func).isRequired.apply(n, [e].concat(t));
		}
		return V.default.func.apply(V.default, [e].concat(t));
	},
	transition: V.default.elementType,
	onEnter: V.default.func,
	onEntering: V.default.func,
	onEntered: V.default.func,
	onExit: V.default.func,
	onExiting: V.default.func,
	onExited: V.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var Zr = [
	"children",
	"transition",
	"popperConfig"
], Qr = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], $r = {
	transition: je,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ei(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(Xn(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(Xn(e));
	};
}
function ti(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = d(e, Zr), o = (0, _.useRef)({}), s = pr(), c = s[0], u = s[1], f = n === !0 ? je : n || null;
	return /* @__PURE__ */ _.createElement(Xr, l({}, a, {
		ref: c,
		popperConfig: l({}, i, { modifiers: u.concat(i.modifiers || []) }),
		transition: f
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, u = e.state, f = d(e, Qr);
		ei(r, i);
		var p = Object.assign(o.current, {
			state: u,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(l({}, f, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: p,
			arrowProps: i
		})) : /* @__PURE__ */ _.cloneElement(t, l({}, f, r, {
			placement: c,
			arrowProps: i,
			popper: p,
			className: (0, v.default)(t.props.className, !n && a && "show"),
			style: l({}, t.props.style, r.style)
		}));
	});
}
ti.defaultProps = $r;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var ni = [
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
], ri = /* @__PURE__ */ function(e) {
	C(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(_.Component);
function ii(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function ai(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Jn(i, a) && e.apply(void 0, t);
}
var oi = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function si(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, u = e.onToggle, f = e.delay, p = e.placement, m = e.flip, h = m === void 0 ? p && p.indexOf("auto") !== -1 : m, g = d(e, ni), v = (0, _.useRef)(null), y = Je(), b = (0, _.useRef)(""), S = x(o, c, u), C = S[0], w = S[1], T = ii(f), E = typeof r == "function" ? {} : _.Children.only(r).props, D = E.onFocus, O = E.onBlur, k = E.onClick, A = (0, _.useCallback)(function() {
		return Xn(v.current);
	}, []), j = (0, _.useCallback)(function() {
		if (y.clear(), b.current = "show", !T.show) {
			w(!0);
			return;
		}
		y.set(function() {
			b.current === "show" && w(!0);
		}, T.show);
	}, [
		T.show,
		w,
		y
	]), M = (0, _.useCallback)(function() {
		if (y.clear(), b.current = "hide", !T.hide) {
			w(!1);
			return;
		}
		y.set(function() {
			b.current === "hide" && w(!1);
		}, T.hide);
	}, [
		T.hide,
		w,
		y
	]), N = (0, _.useCallback)(function() {
		j();
		var e = [...arguments];
		D?.apply(void 0, e);
	}, [j, D]), P = (0, _.useCallback)(function() {
		M();
		var e = [...arguments];
		O?.apply(void 0, e);
	}, [M, O]), ee = (0, _.useCallback)(function() {
		w(!C), k && k.apply(void 0, arguments);
	}, [
		k,
		w,
		C
	]), F = (0, _.useCallback)(function() {
		ai(j, [...arguments], "fromElement");
	}, [j]), I = (0, _.useCallback)(function() {
		ai(M, [...arguments], "toElement");
	}, [M]), L = t == null ? [] : [].concat(t), R = {};
	return L.indexOf("click") !== -1 && (R.onClick = ee), L.indexOf("focus") !== -1 && (R.onFocus = N, R.onBlur = P), L.indexOf("hover") !== -1 && (R.onMouseOver = F, R.onMouseOut = I), /* @__PURE__ */ _.createElement(_.Fragment, null, typeof r == "function" ? r(l({}, R, { ref: v })) : /* @__PURE__ */ _.createElement(ri, { ref: v }, /* @__PURE__ */ (0, _.cloneElement)(r, R)), /* @__PURE__ */ _.createElement(ti, l({}, g, {
		show: C,
		onHide: M,
		flip: h,
		placement: p,
		popperConfig: a,
		target: A
	}), n));
}
si.defaultProps = oi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var ci = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], li = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, a = e.animation, o = e.size, s = e.children, c = e.as, u = c === void 0 ? "div" : c, f = e.className, p = d(e, ci);
	n = i(n, "spinner");
	var m = n + "-" + a;
	return /* @__PURE__ */ _.createElement(u, l({ ref: t }, p, { className: (0, v.default)(f, m, o && m + "-" + o, r && "text-" + r) }), s);
});
li.displayName = "Spinner", mr();
var ui = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], di = { placement: "right" }, fi = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, a = e.className, o = e.style, s = e.children, c = e.arrowProps;
	e.popper, e.show;
	var u = d(e, ui);
	n = i(n, "tooltip");
	var f = (r?.split("-") || [])[0];
	return /* @__PURE__ */ _.createElement("div", l({
		ref: t,
		style: o,
		role: "tooltip",
		"x-placement": f,
		className: (0, v.default)(a, n, "bs-tooltip-" + f)
	}, u), /* @__PURE__ */ _.createElement("div", l({ className: "arrow" }, c)), /* @__PURE__ */ _.createElement("div", { className: n + "-inner" }, s));
});
fi.defaultProps = di, fi.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var pi = 0, mi = (e = "id") => (pi += 1, `${e}${pi}`), hi = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function gi(e, t, n) {
	class r extends _.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case hi.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case hi.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case hi.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case hi.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ _.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function _i({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ _.createElement("span", {
			className: (0, v.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ _.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ _.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
		id: t || mi("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ _.createElement("span", { className: "sr-only" }, i));
}
_i.propTypes = {
	src: V.default.elementType,
	svgAttrs: V.default.shape({
		"aria-label": V.default.string,
		"aria-labelledby": V.default.string
	}),
	id: V.default.string,
	size: V.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: V.default.string,
	hidden: V.default.bool,
	screenReaderText: V.default.oneOfType([V.default.string, V.default.element])
}, _i.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var vi = gi(_i, "Icon", { className: {
	deprType: hi.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), yi = /* @__PURE__ */ _.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ _.createElement(He, {
	size: r,
	...i,
	className: (0, v.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ _.createElement(vi, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ _.createElement(vi, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), bi = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), xi = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Si = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Ci = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), wi = (e) => /* @__PURE__ */ _.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Ti = (e) => /* @__PURE__ */ _.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Ei = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Di = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), Oi = [
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
], ki = [
	"hover",
	"click",
	"focus"
];
function Ai(e) {
	return /* @__PURE__ */ _.createElement(ti, { ...e });
}
function ji(e) {
	return /* @__PURE__ */ _.createElement(si, { ...e }, e.children);
}
var Mi = V.default.oneOf(ki);
Ai.propTypes = {
	children: V.default.node.isRequired,
	container: V.default.oneOfType([V.default.elementType, V.default.func]),
	onEnter: V.default.func,
	onEntered: V.default.func,
	onEntering: V.default.func,
	onExit: V.default.func,
	onExited: V.default.func,
	onExiting: V.default.func,
	onHide: V.default.func,
	placement: V.default.oneOf(Oi),
	popperConfig: V.default.shape({}),
	rootClose: V.default.bool,
	rootCloseEvent: V.default.oneOf(["click", "mousedown"]),
	show: V.default.bool,
	target: V.default.oneOfType([V.default.elementType, V.default.func]),
	transition: V.default.oneOfType([V.default.object, V.default.bool])
}, ji.propTypes = {
	children: V.default.oneOfType([V.default.element, V.default.func]).isRequired,
	overlay: V.default.oneOfType([V.default.element, V.default.func]).isRequired,
	defaultShow: V.default.bool,
	delay: V.default.oneOfType([V.default.number, V.default.shape({})]),
	flip: V.default.bool,
	onHide: V.default.func,
	onToggle: V.default.func,
	placement: V.default.oneOf(Oi),
	popperConfig: V.default.shape({}),
	show: V.default.bool,
	target: V.default.instanceOf(EventTarget),
	trigger: V.default.oneOfType([Mi, V.default.arrayOf(Mi)])
}, Ai.defaultProps = {
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
	transition: je
}, ji.defaultProps = {
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
var Ni = [
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
], Pi = /* @__PURE__ */ _.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ _.createElement(fi, {
	...n,
	className: (0, v.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Pi.propTypes = {
	...fi.propTypes,
	id: V.default.string.isRequired,
	placement: V.default.oneOf(Ni),
	arrowProps: V.default.shape({
		ref: V.default.oneOfType([V.default.func, V.default.shape({ current: V.default.element })]),
		style: V.default.shape({})
	}),
	show: V.default.bool,
	popper: V.default.shape({}),
	bsPrefix: V.default.string,
	children: V.default.node,
	className: V.default.string,
	variant: V.default.string
}, Pi.defaultProps = {
	...Pi.defaultProps,
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
var Fi = /* @__PURE__ */ _.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = vi, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ _.createElement("button", {
		"aria-label": t,
		className: (0, v.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ _.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ _.createElement(g, {
		className: (0, v.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Ii({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ _.createElement(ji, {
		placement: e,
		overlay: /* @__PURE__ */ _.createElement(Pi, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ _.createElement(Fi, { ...n }));
}
Fi.IconButtonWithTooltip = Ii;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Li(e) {
	return typeof e == "string" || e instanceof String;
}
function Ri(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function zi(e, t) {
	return Array.isArray(t) ? zi(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var H = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function Bi(e) {
	switch (e) {
		case H.LEFT: return H.FORCE_LEFT;
		case H.RIGHT: return H.FORCE_RIGHT;
		default: return e;
	}
}
function Vi(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Hi(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Hi(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Hi(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Ui = class {
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
		return !this.removedCount || this.insertedCount ? H.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? H.RIGHT : H.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function U(e, t) {
	return new U.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function Wi(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? U.MaskedRegExp : Li(e) ? U.MaskedPattern : e === Date ? U.MaskedDate : e === Number ? U.MaskedNumber : Array.isArray(e) || e === Array ? U.MaskedDynamic : U.Masked && e.prototype instanceof U.Masked ? e : U.Masked && e instanceof U.Masked ? e.constructor : e instanceof Function ? U.MaskedFunction : (console.warn("Mask not found for mask", e), U.Masked);
}
function Gi(e) {
	if (!e) throw Error("Options in not defined");
	if (U.Masked) {
		if (e.prototype instanceof U.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof U.Masked ? { mask: e } : Ri(e) && e.mask instanceof U.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...zi(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Ri(e) ? { ...e } : { mask: e };
}
function Ki(e) {
	if (U.Masked && e instanceof U.Masked) return e;
	let t = Gi(e), n = Wi(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
U.createMask = Ki;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var qi = class {
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
U.MaskElement = qi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var Ji = 90, Yi = 89, Xi = class extends qi {
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
		if (this._handlers.redo && (e.keyCode === Ji && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Yi && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === Ji && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
U.HTMLMaskElement = Xi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var Zi = class extends Xi {
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
U.HTMLMaskElement = Xi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var Qi = class extends Xi {
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
U.HTMLContenteditableMaskElement = Qi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var $i = class e {
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
$i.MAX_LENGTH = 100, U.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof qi ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Qi(e) : new Zi(e), this.masked = Ki(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new $i(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof U.Masked) && this.masked.constructor === Wi(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof U.Masked ? e : Ki({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, H.LEFT));
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
		let t = new Ui({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : H.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== H.NONE && (a = this.masked.nearestInputPos(a, H.NONE)), this.updateControl(a), delete this._inputEvent;
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
var W = class e {
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
U.ChangeDetails = W;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var ea = class {
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
}, ta = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ea(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Li(e) && (e = new ea(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new W({
			inserted: e,
			rawInserted: e
		})) : new W();
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
			a || (i = new W(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new W();
	}
	_appendEager() {
		return new W();
	}
	append(e, t, n) {
		if (!Li(e)) throw Error("value should be string");
		let r = Li(n) ? new ea(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new W();
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
		return t === void 0 && (t = {}), W.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), W.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = H.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = Bi(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new W();
		if (r !== H.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? H.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== H.NONE && c === this.rawInputValue) if (r === H.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new W({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === H.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Hi(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new W();
	}
};
ta.DEFAULTS = { skipInvalid: !0 }, ta.EMPTY_VALUES = [
	void 0,
	null,
	""
], U.Masked = ta;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var na = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Li(t) ? new ea(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof ea) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof U.MaskedPattern)) return new ea(this.toString()).appendTo(t);
		let n = new W();
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
			let n = "chunks" in t ? new e() : new ea();
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
}, ra = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, H.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, H.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, H.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, H.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, H.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, H.NONE), !0;
		});
	}
}, ia = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new W();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = H.NONE);
		let n = this._value.length;
		switch (t) {
			case H.LEFT:
			case H.FORCE_LEFT: return 0;
			case H.NONE:
			case H.RIGHT:
			case H.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new W();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new W({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new W();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new ea("");
	}
	appendTail(e) {
		return Li(e) && (e = new ea(String(e))), e.appendTo(this);
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
}, aa = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = Ki(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new W();
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
		if (t === void 0 && (t = {}), this.isFilled) return new W();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new W(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new W() : (this.isFilled = !0, new W({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new W();
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
		t === void 0 && (t = H.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case H.LEFT:
			case H.FORCE_LEFT: return this.isComplete ? r : 0;
			case H.RIGHT:
			case H.FORCE_RIGHT: return this.isComplete ? r : n;
			case H.NONE:
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
		return new W();
	}
};
aa.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, U.MaskedRegExp = class extends ta {
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
var oa = class e extends ta {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, aa.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Gi(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? Ki(i) : new U.RepeatBlock(i);
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
			let c = s ? new aa({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Gi(t[o]),
				parent: this
			}) : new ia({
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
		let e = new W(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new W();
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
		let n = new na();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof na && (a.blockIndex = t), n.extend(a);
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
		let t = new W();
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
		if (t === void 0 && (t = H.NONE), !this._blocks.length) return 0;
		let n = new ra(this, e);
		if (t === H.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === H.LEFT || t === H.FORCE_LEFT) {
			if (t === H.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === H.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === H.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === H.RIGHT || t === H.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === H.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, H.LEFT))) : e;
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
		let t = new W();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
oa.DEFAULTS = {
	...ta.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, oa.STOP_CHAR = "`", oa.ESCAPE_CHAR = "\\", oa.InputDefinition = aa, oa.FixedDefinition = ia, U.MaskedPattern = oa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var sa = class extends oa {
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
		let t = new W();
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
U.MaskedRange = sa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var ca = "d{.}`m{.}`Y", la = class e extends oa {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Li(t) ? t : n
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
			mask: Li(n) ? n : r,
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
la.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: sa,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: sa,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: sa,
		from: 1900,
		to: 9999
	}
}), la.DEFAULTS = {
	...oa.DEFAULTS,
	mask: Date,
	pattern: ca,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, U.MaskedDate = la;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var ua = class e extends ta {
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
			let { expose: t, ...n } = Gi(e), r = Ki({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new W(), l = s?.state;
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
		let t = new W();
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
		let n = new W();
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
			return Hi(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
ua.DEFAULTS = {
	...ta.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, H.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, H.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, U.MaskedDynamic = ua;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var da = class e extends oa {
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
		let n = Math.min(this.nearestInputPos(0, H.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new W({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ea("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new W();
		let n = Math.min(super.nearestInputPos(0, H.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
da.DEFAULTS = {
	...oa.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, U.MaskedEnum = da, U.MaskedFunction = class extends ta {
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
var fa, pa = class e extends ta {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Vi(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Vi).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Vi(this.thousandsSeparator), "g");
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
		s ? l = new W({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new W()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new W({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case H.NONE:
			case H.LEFT:
			case H.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === H.FORCE_LEFT) return n;
				}
				break;
			}
			case H.RIGHT:
			case H.FORCE_RIGHT: {
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
fa = pa, pa.UNMASKED_RADIX = ".", pa.EMPTY_VALUES = [...ta.EMPTY_VALUES, 0], pa.DEFAULTS = {
	...ta.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [fa.UNMASKED_RADIX],
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
}, U.MaskedNumber = pa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var ma = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function ha(e, t, n) {
	t === void 0 && (t = ma.MASKED), n === void 0 && (n = ma.MASKED);
	let r = Ki(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function ga(e, t, n, r) {
	return ha(t, n, r)(e);
}
U.PIPE_TYPE = ma, U.createPipe = ha, U.pipe = ga, U.RepeatBlock = class extends oa {
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
		let { repeat: t, ...n } = Gi(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = Ki(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(Ki(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new W();
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
	globalThis.IMask = U;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var _a = {
	mask: V.default.oneOfType([
		V.default.array,
		V.default.func,
		V.default.string,
		V.default.instanceOf(RegExp),
		V.default.oneOf([
			Date,
			Number,
			U.Masked
		]),
		V.default.instanceOf(U.Masked)
	]),
	value: V.default.any,
	unmask: V.default.oneOfType([V.default.bool, V.default.oneOf(["typed"])]),
	prepare: V.default.func,
	prepareChar: V.default.func,
	validate: V.default.func,
	commit: V.default.func,
	overwrite: V.default.oneOfType([V.default.bool, V.default.oneOf(["shift"])]),
	eager: V.default.oneOfType([V.default.bool, V.default.oneOf(["append", "remove"])]),
	skipInvalid: V.default.bool,
	onAccept: V.default.func,
	onComplete: V.default.func,
	placeholderChar: V.default.string,
	displayChar: V.default.string,
	lazy: V.default.bool,
	definitions: V.default.object,
	blocks: V.default.object,
	enum: V.default.arrayOf(V.default.string),
	maxLength: V.default.number,
	from: V.default.number,
	to: V.default.number,
	pattern: V.default.string,
	format: V.default.func,
	parse: V.default.func,
	autofix: V.default.oneOfType([V.default.bool, V.default.oneOf(["pad"])]),
	radix: V.default.string,
	thousandsSeparator: V.default.string,
	mapToRadix: V.default.arrayOf(V.default.string),
	scale: V.default.number,
	normalizeZeros: V.default.bool,
	padFractionalZeros: V.default.bool,
	min: V.default.oneOfType([V.default.number, V.default.instanceOf(Date)]),
	max: V.default.oneOfType([V.default.number, V.default.instanceOf(Date)]),
	dispatch: V.default.func,
	inputRef: V.default.oneOfType([V.default.func, V.default.shape({ current: V.default.object })])
}, va = Object.keys(_a).filter((e) => e !== "value"), ya = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], ba = va.filter((e) => ya.indexOf(e) < 0);
function xa(e) {
	var t;
	let n = (t = class extends _.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = U(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => ba.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return va.forEach((e) => {
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
			return _.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = _a, _.forwardRef((e, t) => _.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Sa = xa((e) => {
	let { inputRef: t, ...n } = e;
	return _.createElement("input", {
		...n,
		ref: t
	});
}), Ca = _.forwardRef((e, t) => _.createElement(Sa, {
	...e,
	ref: t
})), wa = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Ta = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Ea = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, _.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Da = (e, t) => {
	let [n, r] = (0, _.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(mi(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, _.useState)(e);
		return (0, _.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Oa = (e) => e, ka = /* @__PURE__ */ _.createContext({
	getControlProps: Oa,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Oa,
	getDescriptorProps: Oa,
	hasFormGroupProvider: !1
}), Aa = () => _.useContext(ka);
function ja(e) {
	let [t, n] = (0, _.useState)(e);
	return [t, (e) => {
		(0, _.useEffect)(() => n(e), [e]);
	}];
}
function Ma({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, _.useMemo)(() => t || mi("form-field"), [t]), [o, s] = Da(a), [c, l] = Da(a), [u, d] = ja(!1), f = {
		getControlProps: (0, _.useCallback)((e) => {
			let t = u ? c : void 0;
			return wa({
				...e,
				"aria-describedby": (0, v.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, v.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ _.createElement(ka.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Na = {
	SMALL: "sm",
	LARGE: "lg"
}, Pa = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Fa = {
	[Pa.DEFAULT]: null,
	[Pa.VALID]: xi,
	[Pa.INVALID]: Ci,
	[Pa.WARNING]: Di,
	[Pa.CRITERIA_EMPTY]: Ei,
	[Pa.CRITERIA_VALID]: Si,
	[Pa.CRITERIA_INVALID]: bi
}, Ia = ({ isInvalid: e, isValid: t }) => t ? Pa.VALID : e ? Pa.INVALID : Pa.DEFAULT;
function La({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Fa[e];
	return n ? /* @__PURE__ */ _.createElement(vi, { src: n }) : null;
}
La.propTypes = {
	type: V.default.oneOf(Object.values(Pa)),
	customIcon: V.default.node
}, La.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Ra({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, v.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ _.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ _.createElement(La, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ _.createElement("div", null, e));
}
Ra.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	hasIcon: V.default.bool,
	type: V.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: V.default.node,
	muted: V.default.bool
}, Ra.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function za({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Aa(), a = n(t), o = (0, v.default)("pgn__form-control-description", t.className), s = t.type || Ia({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ _.createElement(Ra, {
		...a,
		className: o,
		type: s
	}, e);
}
za.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	hasIcon: V.default.bool,
	type: V.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: V.default.node,
	muted: V.default.bool
}, za.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function Ba({ children: e }) {
	let { controlId: t } = Aa();
	return /* @__PURE__ */ _.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ _.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ _.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
Ba.propTypes = { children: V.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Va({ children: e, location: t }) {
	return /* @__PURE__ */ _.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Va.propTypes = {
	children: V.default.node.isRequired,
	location: V.default.oneOf(["leading", "trailing"])
}, Va.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Ha({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Aa(a), s = a.size || o.size;
	return /* @__PURE__ */ _.createElement("div", {
		className: (0, v.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Na.LARGE,
			"pgn__form-control-decorator-group-sm": s === Na.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ _.createElement(Va, { location: "leading" }, t), n && /* @__PURE__ */ _.createElement(Va, { location: "trailing" }, n), r && /* @__PURE__ */ _.createElement(Ba, null, r));
}
Ha.propTypes = {
	children: V.default.node.isRequired,
	leadingElement: V.default.node,
	trailingElement: V.default.node,
	floatingLabel: V.default.node,
	className: V.default.string,
	size: V.default.oneOf([Na.SMALL, Na.LARGE])
}, Ha.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Ua = /* @__PURE__ */ _.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Aa(), h = _.useRef(), g = u || h, y = l.size || m.size, [b, x] = Ea({
		defaultValue: l.defaultValue,
		value: l.value
	}), S = (0, _.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, _.useEffect)(() => {
		S();
	}, [S]);
	let C = p({
		...l,
		onBlur: Ta(x, l.onBlur)
	}), w = (e) => {
		S(), s && s(e);
	};
	return /* @__PURE__ */ _.createElement(Ha, {
		size: y,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ _.createElement(Fr, {
		as: c ? Ca : e,
		ref: g,
		size: y,
		isInvalid: d,
		isValid: f,
		className: (0, v.default)(n, { "has-value": b }),
		onChange: w,
		mask: c,
		...C
	}));
});
Ua.Feedback = za, Ua.Description = za, Ua.propTypes = {
	className: V.default.string,
	as: V.default.elementType,
	onChange: V.default.func,
	defaultValue: V.default.oneOfType([V.default.string, V.default.number]),
	value: V.default.oneOfType([V.default.string, V.default.number]),
	id: V.default.string,
	controlClassName: V.default.string,
	size: V.default.oneOf(["sm", "lg"]),
	leadingElement: V.default.node,
	trailingElement: V.default.node,
	floatingLabel: V.default.node,
	plaintext: V.default.bool,
	isValid: V.default.bool,
	isInvalid: V.default.bool,
	autoResize: V.default.bool,
	inputMask: V.default.string
}, Ua.defaultProps = {
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
function Wa({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Aa(), o = (0, v.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Na.LARGE,
		"pgn__form-label-sm": r === Na.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ _.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Ga({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ _.createElement(a ?? "div", {
		...o,
		className: (0, v.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ _.createElement(Ma, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Ka = /* @__PURE__ */ _.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), qa = () => (0, _.useContext)(Ka);
function Ja({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Ta(n, e.onBlur) : n,
			onFocus: e.onFocus ? Ta(r, e.onFocus) : r,
			onChange: e.onChange ? Ta(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ _.createElement(Ka.Provider, { value: c }, e);
}
Ja.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string.isRequired,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.string,
	defaultValue: V.default.string
}, Ja.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var Ya = /* @__PURE__ */ _.forwardRef((e, t) => {
	let { getControlProps: n } = Aa(), { getRadioControlProps: r, hasRadioSetProvider: i } = qa(), a = n({
		...e,
		className: (0, v.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ _.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
Ya.propTypes = { className: V.default.string }, Ya.defaultProps = { className: void 0 };
var Xa = /* @__PURE__ */ _.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ _.createElement(Ma, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ _.createElement("div", { className: (0, v.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ _.createElement(Ya, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement(Wa, { className: r }, e), i && /* @__PURE__ */ _.createElement(za, { hasIcon: !1 }, i)))));
Xa.propTypes = {
	id: V.default.string,
	children: V.default.node.isRequired,
	className: V.default.string,
	controlClassName: V.default.string,
	labelClassName: V.default.string,
	description: V.default.node,
	isInvalid: V.default.bool,
	isValid: V.default.bool,
	disabled: V.default.bool
}, Xa.defaultProps = {
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
function Za({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ _.createElement(e, {
		className: (0, v.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Za.propTypes = {
	as: V.default.elementType,
	className: V.default.string,
	isInline: V.default.bool,
	children: V.default.node
}, Za.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function Qa({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Aa();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ _.createElement(Ja, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ _.createElement(Za, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
Qa.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.string,
	defaultValue: V.default.string,
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, Qa.defaultProps = {
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
var $a, eo = new Uint8Array(16);
function to() {
	if (!$a && ($a = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !$a)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return $a(eo);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var G = [];
for (let e = 0; e < 256; ++e) G.push((e + 256).toString(16).slice(1));
function no(e, t = 0) {
	return G[e[t + 0]] + G[e[t + 1]] + G[e[t + 2]] + G[e[t + 3]] + "-" + G[e[t + 4]] + G[e[t + 5]] + "-" + G[e[t + 6]] + G[e[t + 7]] + "-" + G[e[t + 8]] + G[e[t + 9]] + "-" + G[e[t + 10]] + G[e[t + 11]] + G[e[t + 12]] + G[e[t + 13]] + G[e[t + 14]] + G[e[t + 15]];
}
var ro = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function io(e, t, n) {
	if (ro.randomUUID && !t && !e) return ro.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || to)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return no(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var ao = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), oo = (e, t) => t.every((t) => e[t] !== void 0), so = (e, t) => ao(e, (e) => Array.isArray(t) ? oo(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), co = /* @__PURE__ */ _.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, v.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ _.createElement(li, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ _.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function lo({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function uo({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function fo({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && lo({
		event: e,
		currentIndex: s,
		activeElement: a
	}), uo({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function po(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, _.useRef)();
	return (0, _.useEffect)(() => {
		let e = (e) => {
			fo({
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
var mo = u({
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
}), ho = /* @__PURE__ */ (0, _.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: m, ...h }, g) => {
	let v = p(), y = (0, _.useRef)(), b = po({
		selectors: t,
		ignoredKeys: n
	}), [x, S] = (0, _.useState)(!1), [C, w] = (0, _.useState)(!1), [T, E] = (0, _.useState)(!1), [D, O] = (0, _.useState)(!1), [k, A] = (0, _.useState)(i?.userProvidedText || ""), [j, M] = (0, _.useState)([]), [N, P] = (0, _.useState)(null), [ee, F] = (0, _.useState)(!0), [I, L] = (0, _.useState)(""), R = (e) => {
		P(e);
	}, te = () => {
		M([]), S(!1), P(null);
	}, ne = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		E(!0), O(!0), A(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), te(), t && t(e);
	};
	function re(t = "") {
		let n = _.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? io();
			return /* @__PURE__ */ _.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => ne(e, n),
				id: i,
				onFocus: () => R(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let z = () => {
		M(re(k)), F(!0), L(""), S(!0);
	}, ie = () => {
		x ? te() : z();
	}, ae = /* @__PURE__ */ _.createElement(Fi, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: x ? Ti : wi,
		iconAs: vi,
		size: "sm",
		variant: "secondary",
		alt: x ? v.formatMessage(mo.iconButtonClosed) : v.formatMessage(mo.iconButtonOpened),
		onClick: ie
	}), oe = () => {
		w(!0);
	}, se = () => {
		if (u) {
			F(!1), L(d);
			return;
		}
		if (o && !T) {
			F(!1), L(s);
			return;
		}
		if (T && c && !D) {
			F(!1), L(l);
			return;
		}
		F(!0), L("");
	};
	(0, _.useImperativeHandle)(g, () => ({ updateErrorStateAndErrorMessage: se }));
	let ce = () => {
		w(!1), te(), se();
	}, B = (e) => {
		if (C) {
			if (e.key === "Escape") {
				e.preventDefault(), y && y.current.focus(), te();
				return;
			}
			e.key === "Tab" && ce();
		}
	}, le = (e) => {
		b.current && !b.current.contains(e.target) && C && ce();
	};
	(0, _.useEffect)(() => (document.addEventListener("keydown", B), document.addEventListener("click", le, !0), () => {
		document.removeEventListener("click", le, !0), document.removeEventListener("keydown", B);
	})), (0, _.useEffect)(() => {
		A(i ? i.userProvidedText ?? "" : ""), E(!!i && !!i.userProvidedText), O(!!i && !!i.selectionValue);
	}, [i]);
	let ue = () => {
		z();
	}, de = (e) => {
		let t = e.target.value;
		if (!t.length) {
			A(""), E(!1), O(!1), M([]), te(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0);
		let n = re(t);
		M(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			O(!1), A(t), f && f({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		O(!0), A(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: fe } = Aa(), pe = fe(h);
	return /* @__PURE__ */ _.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: b,
		onFocus: oe
	}, /* @__PURE__ */ _.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${j.length} options found`), /* @__PURE__ */ _.createElement(Ma, {
		controlId: pe.id,
		isInvalid: !ee
	}, /* @__PURE__ */ _.createElement(Ua, {
		ref: y,
		"aria-expanded": (j.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: k,
		"aria-invalid": I,
		"aria-activedescendant": N,
		onChange: de,
		onClick: ue,
		trailingElement: ae,
		"data-testid": "autosuggest-textbox-input",
		...pe
	}), m && ee && /* @__PURE__ */ _.createElement(za, { type: "default" }, m), !ee && /* @__PURE__ */ _.createElement(za, {
		type: "invalid",
		"feedback-for": pe.name
	}, I)), /* @__PURE__ */ _.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ _.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ _.createElement(co, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : j.length > 0 && j));
});
ho.defaultProps = {
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
}, ho.propTypes = {
	arrowKeyNavigationSelector: V.default.string,
	ignoredArrowKeysNames: V.default.arrayOf(V.default.string),
	isLoading: V.default.bool,
	className: V.default.string,
	floatingLabel: V.default.string,
	onChange: V.default.func,
	helpMessage: V.default.string,
	placeholder: V.default.string,
	value: V.default.shape({
		userProvidedText: V.default.string,
		selectionValue: V.default.string,
		selectionId: V.default.string
	}),
	isValueRequired: V.default.bool,
	valueRequiredErrorMessageText: so(V.default.string, "isValueRequired"),
	isSelectionRequired: V.default.bool,
	selectionRequiredErrorMessageText: so(V.default.string, "isSelectionRequired"),
	hasCustomError: V.default.bool,
	customErrorMessageText: so(V.default.string, "hasCustomError"),
	name: V.default.string,
	readOnly: V.default.bool,
	children: V.default.node,
	screenReaderText: V.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function go({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, v.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, _.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ _.createElement(_.Fragment, null, i && /* @__PURE__ */ _.createElement(vi, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ _.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ _.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ _.createElement(vi, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function _o({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ _.createElement(go, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, v.default)(t, "dropdown-item"),
		...r
	}, e);
}
_o.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, _o.propTypes = {
	className: V.default.string,
	children: V.default.string,
	onClick: V.default.func
};
var vo = /* @__PURE__ */ _.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), yo = () => (0, _.useContext)(vo);
function bo({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Ta(n, e.onBlur) : n,
			onFocus: e.onFocus ? Ta(r, e.onFocus) : r,
			onChange: e.onChange ? Ta(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ _.createElement(vo.Provider, { value: c }, e);
}
bo.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string)
}, bo.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var xo = /* @__PURE__ */ _.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = yo(), a = _.useRef(), o = n || a, { getControlProps: s } = Aa(), c = s({
		...t,
		className: (0, v.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), _.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ _.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
xo.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, xo.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var So = /* @__PURE__ */ _.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = yo(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Aa();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ _.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ _.createElement(Ma, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ _.createElement("div", {
		className: (0, v.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement(Wa, { className: r }, e), i && /* @__PURE__ */ _.createElement(za, { hasIcon: !1 }, i))));
});
So.propTypes = {
	id: V.default.string,
	children: V.default.node.isRequired,
	className: V.default.string,
	controlClassName: V.default.string,
	labelClassName: V.default.string,
	description: V.default.node,
	isInvalid: V.default.bool,
	isValid: V.default.bool,
	controlAs: V.default.elementType,
	floatLabelLeft: V.default.bool,
	disabled: V.default.bool
}, So.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: xo,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Co = /* @__PURE__ */ _.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = _.useRef(), i = n || r, { getControlProps: a } = Aa(), o = a({
		...t,
		className: (0, v.default)("pgn__form-switch-input", t.className)
	});
	return _.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ _.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Co.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, Co.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var wo = /* @__PURE__ */ _.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ _.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ _.createElement(So, {
	className: (0, v.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Co,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ _.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
wo.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	labelClassName: V.default.string,
	helperText: V.default.node,
	floatLabelLeft: V.default.bool
}, wo.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function To({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Aa();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ _.createElement(bo, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ _.createElement(Za, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
To.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string),
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, To.defaultProps = {
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
var Eo = To, K = qr;
K.Control = Ua, K.Radio = Xa, K.RadioSet = Qa, K.Autosuggest = ho, K.AutosuggestOption = _o, K.Checkbox = So, K.CheckboxSet = To, K.Switch = wo, K.SwitchSet = Eo, K.Label = Wa, K.Group = Ga, K.Text = Ra;
//#endregion
//#region src/lib/hooks.ts
var Do = (e) => {
	let t = (0, _.useContext)(s);
	return t.runtime.handlerUrl(t.element, e);
}, Oo = function(e) {
	return ko(e) && !Ao(e);
};
function ko(e) {
	return !!e && typeof e == "object";
}
function Ao(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Mo(e);
}
var jo = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Mo(e) {
	return e.$$typeof === jo;
}
function No(e) {
	return Array.isArray(e) ? [] : {};
}
function Po(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Lo(No(e), e, t) : e;
}
function Fo(e, t, n) {
	return e.concat(t).map(function(e) {
		return Po(e, n);
	});
}
function Io(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Po(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Po(t[i], n) : r[i] = Lo(e[i], t[i], n);
	}), r;
}
function Lo(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Fo, n.isMergeableObject = n.isMergeableObject || Oo;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Io(e, t, n) : Po(t, n);
}
Lo.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Lo(e, n, t);
	}, {});
};
var Ro = Lo, zo = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Bo = typeof self == "object" && self && self.Object === Object && self, Vo = zo || Bo || Function("return this")(), Ho = Vo.Symbol, Uo = Object.prototype, Wo = Uo.hasOwnProperty, Go = Uo.toString, Ko = Ho ? Ho.toStringTag : void 0;
function qo(e) {
	var t = Wo.call(e, Ko), n = e[Ko];
	try {
		e[Ko] = void 0;
		var r = !0;
	} catch {}
	var i = Go.call(e);
	return r && (t ? e[Ko] = n : delete e[Ko]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var Jo = Object.prototype.toString;
function Yo(e) {
	return Jo.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var Xo = "[object Null]", Zo = "[object Undefined]", Qo = Ho ? Ho.toStringTag : void 0;
function $o(e) {
	return e == null ? e === void 0 ? Zo : Xo : Qo && Qo in Object(e) ? qo(e) : Yo(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function es(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var ts = es(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function ns(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var rs = "[object Object]", is = Function.prototype, as = Object.prototype, os = is.toString, ss = as.hasOwnProperty, cs = os.call(Object);
function ls(e) {
	if (!ns(e) || $o(e) != rs) return !1;
	var t = ts(e);
	if (t === null) return !0;
	var n = ss.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && os.call(n) == cs;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function us() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function ds(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function fs(e, t) {
	for (var n = e.length; n--;) if (ds(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var ps = Array.prototype.splice;
function ms(e) {
	var t = this.__data__, n = fs(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : ps.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function hs(e) {
	var t = this.__data__, n = fs(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function gs(e) {
	return fs(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function _s(e, t) {
	var n = this.__data__, r = fs(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function vs(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
vs.prototype.clear = us, vs.prototype.delete = ms, vs.prototype.get = hs, vs.prototype.has = gs, vs.prototype.set = _s;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function ys() {
	this.__data__ = new vs(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function bs(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function xs(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Ss(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Cs(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var ws = "[object AsyncFunction]", Ts = "[object Function]", Es = "[object GeneratorFunction]", Ds = "[object Proxy]";
function Os(e) {
	if (!Cs(e)) return !1;
	var t = $o(e);
	return t == Ts || t == Es || t == ws || t == Ds;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var ks = Vo["__core-js_shared__"], As = function() {
	var e = /[^.]+$/.exec(ks && ks.keys && ks.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function js(e) {
	return !!As && As in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Ms = Function.prototype.toString;
function Ns(e) {
	if (e != null) {
		try {
			return Ms.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var Ps = /[\\^$.*+?()[\]{}|]/g, Fs = /^\[object .+?Constructor\]$/, Is = Function.prototype, Ls = Object.prototype, Rs = Is.toString, zs = Ls.hasOwnProperty, Bs = RegExp("^" + Rs.call(zs).replace(Ps, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Vs(e) {
	return !Cs(e) || js(e) ? !1 : (Os(e) ? Bs : Fs).test(Ns(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function Hs(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Us(e, t) {
	var n = Hs(e, t);
	return Vs(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Ws = Us(Vo, "Map"), Gs = Us(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function Ks() {
	this.__data__ = Gs ? Gs(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function qs(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Js = "__lodash_hash_undefined__", Ys = Object.prototype.hasOwnProperty;
function Xs(e) {
	var t = this.__data__;
	if (Gs) {
		var n = t[e];
		return n === Js ? void 0 : n;
	}
	return Ys.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var Zs = Object.prototype.hasOwnProperty;
function Qs(e) {
	var t = this.__data__;
	return Gs ? t[e] !== void 0 : Zs.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var $s = "__lodash_hash_undefined__";
function ec(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = Gs && t === void 0 ? $s : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function tc(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
tc.prototype.clear = Ks, tc.prototype.delete = qs, tc.prototype.get = Xs, tc.prototype.has = Qs, tc.prototype.set = ec;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function nc() {
	this.size = 0, this.__data__ = {
		hash: new tc(),
		map: new (Ws || vs)(),
		string: new tc()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function rc(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function ic(e, t) {
	var n = e.__data__;
	return rc(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function ac(e) {
	var t = ic(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function oc(e) {
	return ic(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function sc(e) {
	return ic(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function cc(e, t) {
	var n = ic(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function lc(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
lc.prototype.clear = nc, lc.prototype.delete = ac, lc.prototype.get = oc, lc.prototype.has = sc, lc.prototype.set = cc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var uc = 200;
function dc(e, t) {
	var n = this.__data__;
	if (n instanceof vs) {
		var r = n.__data__;
		if (!Ws || r.length < uc - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new lc(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function fc(e) {
	this.size = (this.__data__ = new vs(e)).size;
}
fc.prototype.clear = ys, fc.prototype.delete = bs, fc.prototype.get = xs, fc.prototype.has = Ss, fc.prototype.set = dc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function pc(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var mc = function() {
	try {
		var e = Us(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function hc(e, t, n) {
	t == "__proto__" && mc ? mc(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var gc = Object.prototype.hasOwnProperty;
function _c(e, t, n) {
	var r = e[t];
	(!(gc.call(e, t) && ds(r, n)) || n === void 0 && !(t in e)) && hc(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function vc(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? hc(n, s, c) : _c(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function yc(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var bc = "[object Arguments]";
function xc(e) {
	return ns(e) && $o(e) == bc;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var Sc = Object.prototype, Cc = Sc.hasOwnProperty, wc = Sc.propertyIsEnumerable, Tc = xc(function() {
	return arguments;
}()) ? xc : function(e) {
	return ns(e) && Cc.call(e, "callee") && !wc.call(e, "callee");
}, Ec = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Dc() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Oc = typeof exports == "object" && exports && !exports.nodeType && exports, kc = Oc && typeof module == "object" && module && !module.nodeType && module, Ac = kc && kc.exports === Oc ? Vo.Buffer : void 0, jc = (Ac ? Ac.isBuffer : void 0) || Dc, Mc = 9007199254740991, Nc = /^(?:0|[1-9]\d*)$/;
function Pc(e, t) {
	var n = typeof e;
	return t ??= Mc, !!t && (n == "number" || n != "symbol" && Nc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Fc = 9007199254740991;
function Ic(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Fc;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var Lc = "[object Arguments]", Rc = "[object Array]", zc = "[object Boolean]", Bc = "[object Date]", Vc = "[object Error]", Hc = "[object Function]", Uc = "[object Map]", Wc = "[object Number]", Gc = "[object Object]", Kc = "[object RegExp]", qc = "[object Set]", Jc = "[object String]", Yc = "[object WeakMap]", Xc = "[object ArrayBuffer]", Zc = "[object DataView]", Qc = "[object Float32Array]", $c = "[object Float64Array]", el = "[object Int8Array]", tl = "[object Int16Array]", nl = "[object Int32Array]", rl = "[object Uint8Array]", il = "[object Uint8ClampedArray]", al = "[object Uint16Array]", ol = "[object Uint32Array]", q = {};
q[Qc] = q[$c] = q[el] = q[tl] = q[nl] = q[rl] = q[il] = q[al] = q[ol] = !0, q[Lc] = q[Rc] = q[Xc] = q[zc] = q[Zc] = q[Bc] = q[Vc] = q[Hc] = q[Uc] = q[Wc] = q[Gc] = q[Kc] = q[qc] = q[Jc] = q[Yc] = !1;
function sl(e) {
	return ns(e) && Ic(e.length) && !!q[$o(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function cl(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var ll = typeof exports == "object" && exports && !exports.nodeType && exports, ul = ll && typeof module == "object" && module && !module.nodeType && module, dl = ul && ul.exports === ll && zo.process, fl = function() {
	try {
		return ul && ul.require && ul.require("util").types || dl && dl.binding && dl.binding("util");
	} catch {}
}(), pl = fl && fl.isTypedArray, ml = pl ? cl(pl) : sl, hl = Object.prototype.hasOwnProperty;
function gl(e, t) {
	var n = Ec(e), r = !n && Tc(e), i = !n && !r && jc(e), a = !n && !r && !i && ml(e), o = n || r || i || a, s = o ? yc(e.length, String) : [], c = s.length;
	for (var l in e) (t || hl.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Pc(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var _l = Object.prototype;
function vl(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || _l);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var yl = es(Object.keys, Object), bl = Object.prototype.hasOwnProperty;
function xl(e) {
	if (!vl(e)) return yl(e);
	var t = [];
	for (var n in Object(e)) bl.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Sl(e) {
	return e != null && Ic(e.length) && !Os(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Cl(e) {
	return Sl(e) ? gl(e) : xl(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function wl(e, t) {
	return e && vc(t, Cl(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Tl(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var El = Object.prototype.hasOwnProperty;
function Dl(e) {
	if (!Cs(e)) return Tl(e);
	var t = vl(e), n = [];
	for (var r in e) r == "constructor" && (t || !El.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Ol(e) {
	return Sl(e) ? gl(e, !0) : Dl(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function kl(e, t) {
	return e && vc(t, Ol(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Al = typeof exports == "object" && exports && !exports.nodeType && exports, jl = Al && typeof module == "object" && module && !module.nodeType && module, Ml = jl && jl.exports === Al ? Vo.Buffer : void 0, Nl = Ml ? Ml.allocUnsafe : void 0;
function Pl(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Nl ? Nl(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Fl(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Il(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function Ll() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Rl = Object.prototype.propertyIsEnumerable, zl = Object.getOwnPropertySymbols, Bl = zl ? function(e) {
	return e == null ? [] : (e = Object(e), Il(zl(e), function(t) {
		return Rl.call(e, t);
	}));
} : Ll;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function Vl(e, t) {
	return vc(e, Bl(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Hl(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var Ul = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Hl(t, Bl(e)), e = ts(e);
	return t;
} : Ll;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function Wl(e, t) {
	return vc(e, Ul(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function Gl(e, t, n) {
	var r = t(e);
	return Ec(e) ? r : Hl(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function Kl(e) {
	return Gl(e, Cl, Bl);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function ql(e) {
	return Gl(e, Ol, Ul);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var Jl = Us(Vo, "DataView"), Yl = Us(Vo, "Promise"), Xl = Us(Vo, "Set"), Zl = Us(Vo, "WeakMap"), Ql = "[object Map]", $l = "[object Object]", eu = "[object Promise]", tu = "[object Set]", nu = "[object WeakMap]", ru = "[object DataView]", iu = Ns(Jl), au = Ns(Ws), ou = Ns(Yl), su = Ns(Xl), cu = Ns(Zl), lu = $o;
(Jl && lu(new Jl(/* @__PURE__ */ new ArrayBuffer(1))) != ru || Ws && lu(new Ws()) != Ql || Yl && lu(Yl.resolve()) != eu || Xl && lu(new Xl()) != tu || Zl && lu(new Zl()) != nu) && (lu = function(e) {
	var t = $o(e), n = t == $l ? e.constructor : void 0, r = n ? Ns(n) : "";
	if (r) switch (r) {
		case iu: return ru;
		case au: return Ql;
		case ou: return eu;
		case su: return tu;
		case cu: return nu;
	}
	return t;
});
var uu = lu, du = Object.prototype.hasOwnProperty;
function fu(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && du.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var pu = Vo.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function mu(e) {
	var t = new e.constructor(e.byteLength);
	return new pu(t).set(new pu(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function hu(e, t) {
	var n = t ? mu(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var gu = /\w*$/;
function _u(e) {
	var t = new e.constructor(e.source, gu.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var vu = Ho ? Ho.prototype : void 0, yu = vu ? vu.valueOf : void 0;
function bu(e) {
	return yu ? Object(yu.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function xu(e, t) {
	var n = t ? mu(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var Su = "[object Boolean]", Cu = "[object Date]", wu = "[object Map]", Tu = "[object Number]", Eu = "[object RegExp]", Du = "[object Set]", Ou = "[object String]", ku = "[object Symbol]", Au = "[object ArrayBuffer]", ju = "[object DataView]", Mu = "[object Float32Array]", Nu = "[object Float64Array]", Pu = "[object Int8Array]", Fu = "[object Int16Array]", Iu = "[object Int32Array]", Lu = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", zu = "[object Uint16Array]", Bu = "[object Uint32Array]";
function Vu(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Au: return mu(e);
		case Su:
		case Cu: return new r(+e);
		case ju: return hu(e, n);
		case Mu:
		case Nu:
		case Pu:
		case Fu:
		case Iu:
		case Lu:
		case Ru:
		case zu:
		case Bu: return xu(e, n);
		case wu: return new r();
		case Tu:
		case Ou: return new r(e);
		case Eu: return _u(e);
		case Du: return new r();
		case ku: return bu(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var Hu = Object.create, Uu = function() {
	function e() {}
	return function(t) {
		if (!Cs(t)) return {};
		if (Hu) return Hu(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function Wu(e) {
	return typeof e.constructor == "function" && !vl(e) ? Uu(ts(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var Gu = "[object Map]";
function Ku(e) {
	return ns(e) && uu(e) == Gu;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var qu = fl && fl.isMap, Ju = qu ? cl(qu) : Ku, Yu = "[object Set]";
function Xu(e) {
	return ns(e) && uu(e) == Yu;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var Zu = fl && fl.isSet, Qu = Zu ? cl(Zu) : Xu, $u = 1, ed = 2, td = 4, nd = "[object Arguments]", rd = "[object Array]", id = "[object Boolean]", ad = "[object Date]", od = "[object Error]", sd = "[object Function]", cd = "[object GeneratorFunction]", ld = "[object Map]", ud = "[object Number]", dd = "[object Object]", fd = "[object RegExp]", pd = "[object Set]", md = "[object String]", hd = "[object Symbol]", gd = "[object WeakMap]", _d = "[object ArrayBuffer]", vd = "[object DataView]", yd = "[object Float32Array]", bd = "[object Float64Array]", xd = "[object Int8Array]", Sd = "[object Int16Array]", Cd = "[object Int32Array]", wd = "[object Uint8Array]", Td = "[object Uint8ClampedArray]", Ed = "[object Uint16Array]", Dd = "[object Uint32Array]", J = {};
J[nd] = J[rd] = J[_d] = J[vd] = J[id] = J[ad] = J[yd] = J[bd] = J[xd] = J[Sd] = J[Cd] = J[ld] = J[ud] = J[dd] = J[fd] = J[pd] = J[md] = J[hd] = J[wd] = J[Td] = J[Ed] = J[Dd] = !0, J[od] = J[sd] = J[gd] = !1;
function Od(e, t, n, r, i, a) {
	var o, s = t & $u, c = t & ed, l = t & td;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Cs(e)) return e;
	var u = Ec(e);
	if (u) {
		if (o = fu(e), !s) return Fl(e, o);
	} else {
		var d = uu(e), f = d == sd || d == cd;
		if (jc(e)) return Pl(e, s);
		if (d == dd || d == nd || f && !i) {
			if (o = c || f ? {} : Wu(e), !s) return c ? Wl(e, kl(o, e)) : Vl(e, wl(o, e));
		} else {
			if (!J[d]) return i ? e : {};
			o = Vu(e, d, s);
		}
	}
	a ||= new fc();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), Qu(e) ? e.forEach(function(r) {
		o.add(Od(r, t, n, r, e, a));
	}) : Ju(e) && e.forEach(function(r, i) {
		o.set(i, Od(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? ql : Kl : c ? Ol : Cl)(e);
	return pc(m || e, function(r, i) {
		m && (i = r, r = e[i]), _c(o, i, Od(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var kd = 1, Ad = 4;
function jd(e) {
	return Od(e, kd | Ad);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Md = /* @__PURE__ */ g((/* @__PURE__ */ e(((e, t) => {
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
})))()), Nd = !0;
function Pd(e, t) {
	if (!Nd) {
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
var Fd = 4;
function Id(e) {
	return Od(e, Fd);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function Ld(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var Rd = "[object Symbol]";
function zd(e) {
	return typeof e == "symbol" || ns(e) && $o(e) == Rd;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var Bd = "Expected a function";
function Vd(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Bd);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Vd.Cache || lc)(), n;
}
Vd.Cache = lc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var Hd = 500;
function Ud(e) {
	var t = Vd(e, function(e) {
		return n.size === Hd && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var Wd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gd = /\\(\\)?/g, Kd = Ud(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wd, function(e, n, r, i) {
		t.push(r ? i.replace(Gd, "$1") : n || e);
	}), t;
}), qd = Infinity;
function Jd(e) {
	if (typeof e == "string" || zd(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -qd ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var Yd = Infinity, Xd = Ho ? Ho.prototype : void 0, Zd = Xd ? Xd.toString : void 0;
function Qd(e) {
	if (typeof e == "string") return e;
	if (Ec(e)) return Ld(e, Qd) + "";
	if (zd(e)) return Zd ? Zd.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Yd ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function $d(e) {
	return e == null ? "" : Qd(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function ef(e) {
	return Ec(e) ? Ld(e, Jd) : zd(e) ? [e] : Fl(Kd($d(e)));
}
n();
function Y() {
	return Y = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Y.apply(this, arguments);
}
function tf(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function nf(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function rf(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var af = /* @__PURE__ */ (0, _.createContext)(void 0);
af.displayName = "FormikContext";
var of = af.Provider;
af.Consumer;
function sf() {
	var e = (0, _.useContext)(af);
	return !e && Pd(!1), e;
}
var cf = function(e) {
	return Array.isArray(e) && e.length === 0;
}, X = function(e) {
	return typeof e == "function";
}, lf = function(e) {
	return typeof e == "object" && !!e;
}, uf = function(e) {
	return String(Math.floor(Number(e))) === e;
}, df = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, ff = function(e) {
	return _.Children.count(e) === 0;
}, pf = function(e) {
	return lf(e) && X(e.then);
};
function Z(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = ef(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function mf(e, t, n) {
	for (var r = Id(e), i = r, a = 0, o = ef(t); a < o.length - 1; a++) {
		var s = o[a], c = Z(e, o.slice(0, a + 1));
		if (c && (lf(c) || Array.isArray(c))) i = i[s] = Id(c);
		else {
			var l = o[a + 1];
			i = i[s] = uf(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function hf(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		lf(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, hf(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function gf(e, t) {
	switch (t.type) {
		case "SET_VALUES": return Y({}, e, { values: t.payload });
		case "SET_TOUCHED": return Y({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Md.default)(e.errors, t.payload) ? e : Y({}, e, { errors: t.payload });
		case "SET_STATUS": return Y({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return Y({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return Y({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return Y({}, e, { values: mf(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return Y({}, e, { touched: mf(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return Y({}, e, { errors: mf(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return Y({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return Y({}, e, {
			touched: hf(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return Y({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return Y({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var _f = {}, vf = {};
function yf(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = nf(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = Y({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, _.useRef)(f.initialValues), m = (0, _.useRef)(f.initialErrors || _f), h = (0, _.useRef)(f.initialTouched || vf), g = (0, _.useRef)(f.initialStatus), v = (0, _.useRef)(!1), y = (0, _.useRef)({});
	(0, _.useEffect)(function() {
		return v.current = !0, function() {
			v.current = !1;
		};
	}, []);
	var b = (0, _.useState)(0)[1], x = (0, _.useRef)({
		values: jd(f.initialValues),
		errors: jd(f.initialErrors) || _f,
		touched: jd(f.initialTouched) || vf,
		status: jd(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), S = x.current, C = (0, _.useCallback)(function(e) {
		var t = x.current;
		x.current = gf(t, e), t !== x.current && b(function(e) {
			return e + 1;
		});
	}, []), w = (0, _.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(_f) : pf(i) ? i.then(function(e) {
				n(e || _f);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), T = (0, _.useCallback)(function(e, t) {
		var n = f.validationSchema, r = X(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Sf(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(_f);
			}, function(n) {
				n.name === "ValidationError" ? e(xf(n)) : t(n);
			});
		});
	}, [f.validationSchema]), E = (0, _.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(y.current[e].validate(t));
		});
	}, []), D = (0, _.useCallback)(function(e) {
		var t = Object.keys(y.current).filter(function(e) {
			return X(y.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return E(t, Z(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = mf(e, t[r], n)), e;
			}, {});
		});
	}, [E]), O = (0, _.useCallback)(function(e) {
		return Promise.all([
			D(e),
			f.validationSchema ? T(e) : {},
			f.validate ? w(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Ro.all([
				t,
				n,
				r
			], { arrayMerge: wf });
		});
	}, [
		f.validate,
		f.validationSchema,
		D,
		w,
		T
	]), k = Of(function(e) {
		return e === void 0 && (e = S.values), C({
			type: "SET_ISVALIDATING",
			payload: !0
		}), O(e).then(function(e) {
			return v.current && (C({
				type: "SET_ISVALIDATING",
				payload: !1
			}), C({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, _.useEffect)(function() {
		o && v.current === !0 && (0, Md.default)(p.current, f.initialValues) && k(p.current);
	}, [o, k]);
	var A = (0, _.useCallback)(function(e) {
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
			var o = f.onReset(S.values, B);
			pf(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, _.useEffect)(function() {
		v.current === !0 && !(0, Md.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, A(), o && k(p.current));
	}, [
		l,
		f.initialValues,
		A,
		o,
		k
	]), (0, _.useEffect)(function() {
		l && v.current === !0 && !(0, Md.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || _f, C({
			type: "SET_ERRORS",
			payload: f.initialErrors || _f
		}));
	}, [l, f.initialErrors]), (0, _.useEffect)(function() {
		l && v.current === !0 && !(0, Md.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || vf, C({
			type: "SET_TOUCHED",
			payload: f.initialTouched || vf
		}));
	}, [l, f.initialTouched]), (0, _.useEffect)(function() {
		l && v.current === !0 && !(0, Md.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, C({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var j = Of(function(e) {
		if (y.current[e] && X(y.current[e].validate)) {
			var t = Z(S.values, e), n = y.current[e].validate(t);
			return pf(n) ? (C({
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
					value: Z(t, e)
				}
			}), C({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), M = (0, _.useCallback)(function(e, t) {
		var n = t.validate;
		y.current[e] = { validate: n };
	}, []), N = (0, _.useCallback)(function(e) {
		delete y.current[e];
	}, []), P = Of(function(e, t) {
		return C({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? k(S.values) : Promise.resolve();
	}), ee = (0, _.useCallback)(function(e) {
		C({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), F = Of(function(e, t) {
		var r = X(e) ? e(S.values) : e;
		return C({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? k(r) : Promise.resolve();
	}), I = (0, _.useCallback)(function(e, t) {
		C({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), L = Of(function(e, t, r) {
		var i = X(t) ? t(Z(S.values, e)) : t;
		return C({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? k(mf(S.values, e, i)) : Promise.resolve();
	}), R = (0, _.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!df(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Ef(Z(S.values, n), u, l) : d && f ? Tf(d) : l;
		}
		n && L(n, r);
	}, [L, S.values]), te = Of(function(e) {
		if (df(e)) return function(t) {
			return R(t, e);
		};
		R(e);
	}), ne = Of(function(e, t, n) {
		return t === void 0 && (t = !0), C({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? k(S.values) : Promise.resolve();
	}), re = (0, _.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, ne(t || r || i, !0);
	}, [ne]), z = Of(function(e) {
		if (df(e)) return function(t) {
			return re(t, e);
		};
		re(e);
	}), ie = (0, _.useCallback)(function(e) {
		X(e) ? C({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : C({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ae = (0, _.useCallback)(function(e) {
		C({
			type: "SET_STATUS",
			payload: e
		});
	}, []), oe = (0, _.useCallback)(function(e) {
		C({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), se = Of(function() {
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
					return v.current && C({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (v.current) throw C({ type: "SUBMIT_FAILURE" }), e;
				});
			} else if (v.current && (C({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), ce = Of(function(e) {
		e && e.preventDefault && X(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && X(e.stopPropagation) && e.stopPropagation(), se().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), B = {
		resetForm: A,
		validateForm: k,
		validateField: j,
		setErrors: ee,
		setFieldError: I,
		setFieldTouched: ne,
		setFieldValue: L,
		setStatus: ae,
		setSubmitting: oe,
		setTouched: P,
		setValues: F,
		setFormikState: ie,
		submitForm: se
	}, le = Of(function() {
		return u(S.values, B);
	}), ue = Of(function(e) {
		e && e.preventDefault && X(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && X(e.stopPropagation) && e.stopPropagation(), A();
	}), de = (0, _.useCallback)(function(e) {
		return {
			value: Z(S.values, e),
			error: Z(S.errors, e),
			touched: !!Z(S.touched, e),
			initialValue: Z(p.current, e),
			initialTouched: !!Z(h.current, e),
			initialError: Z(m.current, e)
		};
	}, [
		S.errors,
		S.touched,
		S.values
	]), fe = (0, _.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return L(e, t, n);
			},
			setTouched: function(t, n) {
				return ne(e, t, n);
			},
			setError: function(t) {
				return I(e, t);
			}
		};
	}, [
		L,
		ne,
		I
	]), pe = (0, _.useCallback)(function(e) {
		var t = lf(e), n = t ? e.name : e, r = Z(S.values, n), i = {
			name: n,
			value: r,
			onChange: te,
			onBlur: z
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		z,
		te,
		S.values
	]), me = (0, _.useMemo)(function() {
		return !(0, Md.default)(p.current, S.values);
	}, [p.current, S.values]), he = (0, _.useMemo)(function() {
		return s === void 0 || me ? S.errors && Object.keys(S.errors).length === 0 : s !== !1 && X(s) ? s(f) : s;
	}, [
		s,
		me,
		S.errors,
		f
	]);
	return Y({}, S, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: z,
		handleChange: te,
		handleReset: ue,
		handleSubmit: ce,
		resetForm: A,
		setErrors: ee,
		setFormikState: ie,
		setFieldTouched: ne,
		setFieldValue: L,
		setFieldError: I,
		setStatus: ae,
		setSubmitting: oe,
		setTouched: P,
		setValues: F,
		submitForm: se,
		validateForm: k,
		validateField: j,
		isValid: he,
		dirty: me,
		unregisterField: N,
		registerField: M,
		getFieldProps: pe,
		getFieldMeta: de,
		getFieldHelpers: fe,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function bf(e) {
	var t = yf(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, _.useImperativeHandle)(a, function() {
		return t;
	}), (0, _.createElement)(of, { value: t }, n ? (0, _.createElement)(n, t) : i ? i(t) : r ? X(r) ? r(t) : ff(r) ? null : _.Children.only(r) : null);
}
function xf(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return mf(t, e.path, e.message);
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
			Z(t, o.path) || (t = mf(t, o.path, o.message));
		}
	}
	return t;
}
function Sf(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Cf(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Cf(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || ls(e) ? Cf(e) : e === "" ? void 0 : e;
		}) : ls(e[r]) ? t[r] = Cf(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function wf(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Ro(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Ro(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Tf(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Ef(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Df = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? _.useLayoutEffect : _.useEffect;
function Of(e) {
	var t = (0, _.useRef)(e);
	return Df(function() {
		t.current = e;
	}), (0, _.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function kf(e) {
	var t = sf(), n = t.getFieldProps, r = t.getFieldMeta, i = t.getFieldHelpers, a = t.registerField, o = t.unregisterField, s = lf(e) ? e : { name: e }, c = s.name, l = s.validate;
	(0, _.useEffect)(function() {
		return c && a(c, { validate: l }), function() {
			c && o(c);
		};
	}, [
		a,
		o,
		c,
		l
	]), !c && Pd(!1);
	var u = (0, _.useMemo)(function() {
		return i(c);
	}, [i, c]);
	return [
		n(s),
		r(c),
		u
	];
}
function Af(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = nf(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = nf(sf(), ["validate", "validationSchema"]), u = l.registerField, d = l.unregisterField;
	(0, _.useEffect)(function() {
		return u(n, { validate: t }), function() {
			d(n);
		};
	}, [
		u,
		d,
		n,
		t
	]);
	var f = l.getFieldProps(Y({ name: n }, c)), p = l.getFieldMeta(n), m = {
		field: f,
		form: l
	};
	if (r) return r(Y({}, m, { meta: p }));
	if (X(i)) return i(Y({}, m, { meta: p }));
	if (o) {
		if (typeof o == "string") {
			var h = c.innerRef, g = nf(c, ["innerRef"]);
			return (0, _.createElement)(o, Y({ ref: h }, f, g, { className: s }), i);
		}
		return (0, _.createElement)(o, Y({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var v = a || "input";
	if (typeof v == "string") {
		var y = c.innerRef, b = nf(c, ["innerRef"]);
		return (0, _.createElement)(v, Y({ ref: y }, f, b, { className: s }), i);
	}
	return (0, _.createElement)(v, Y({}, f, c, { className: s }), i);
}
var jf = /* @__PURE__ */ (0, _.forwardRef)(function(e, t) {
	var n = e.action, r = nf(e, ["action"]), i = n ?? "#", a = sf(), o = a.handleReset, s = a.handleSubmit;
	return (0, _.createElement)("form", Y({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
jf.displayName = "Form";
var Mf = function(e, t, n) {
	var r = If(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, Nf = function(e, t, n) {
	var r = If(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, Pf = function(e, t, n) {
	var r = If(e);
	return r.splice(t, 0, n), r;
}, Ff = function(e, t, n) {
	var r = If(e);
	return r[t] = n, r;
}, If = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(Y({}, e, { length: t + 1 }));
}, Lf = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || lf(e) ? n(If(e)) : e;
	};
}, Rf = /* @__PURE__ */ function(e) {
	tf(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = Lf(r, e), o = Lf(t, e), s = mf(n.values, a, e(Z(n.values, a))), c = r ? i(Z(n.errors, a)) : void 0, l = t ? o(Z(n.touched, a)) : void 0;
				return cf(c) && (c = void 0), cf(l) && (l = void 0), Y({}, n, {
					values: s,
					errors: r ? mf(n.errors, a, c) : n.errors,
					touched: t ? mf(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(If(t), [jd(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return Nf(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Mf(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return Pf(n, e, t);
			}, function(t) {
				return Pf(t, e, null);
			}, function(t) {
				return Pf(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return Ff(n, e, t);
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
		}, n.remove = n.remove.bind(rf(n)), n.pop = n.pop.bind(rf(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Md.default)(Z(e.formik.values, e.name), Z(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? If(n) : [];
			return t ||= r[e], X(r.splice) && r.splice(e, 1), X(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = nf(o, ["validate", "validationSchema"]), c = Y({}, e, {
			form: s,
			name: a
		});
		return n ? (0, _.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : ff(i) ? null : _.Children.only(i) : null;
	}, t;
}(_.Component);
Rf.defaultProps = { validateOnChange: !0 };
//#endregion
//#region src/cover-block/studio-ui/components/CoverForm.tsx
var Q = f(), zf = () => {
	let [e] = kf("variant"), [t] = kf("description"), n = e.value !== "section", r = {
		xs: 12,
		sm: n ? 8 : 12,
		lg: n ? 10 : 12
	};
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "p-3",
		children: /* @__PURE__ */ (0, Q.jsxs)(c, { children: [
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-display-name",
				xs: 12,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Display Name" }),
					/* @__PURE__ */ (0, Q.jsx)(Af, {
						as: K.Control,
						name: "display_name"
					}),
					/* @__PURE__ */ (0, Q.jsx)(K.Text, {
						muted: !0,
						children: "The label for this block, shown only in studio."
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-variant",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Variant" }), /* @__PURE__ */ (0, Q.jsxs)(K.Control, {
					as: "select",
					...e,
					children: [
						/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "section",
							children: "Section Cover"
						}),
						/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "course",
							children: "Course Cover"
						}),
						/* @__PURE__ */ (0, Q.jsx)("option", {
							value: "separator",
							children: "Separator"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-media-url",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Image URL" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "media_url"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-media-alt-text",
				xs: 12,
				children: [
					/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Image Alt Text" }),
					/* @__PURE__ */ (0, Q.jsx)(Af, {
						as: K.Control,
						name: "media_alt_text"
					}),
					/* @__PURE__ */ (0, Q.jsx)(K.Text, {
						muted: !0,
						children: "Provide a description of your image for use with screen readers."
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-top-header",
				...r,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Top Header" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "top_header"
				})]
			}),
			n && /* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-top-header-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Color" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "top_header_color",
					type: "color",
					"aria-label": "Top header color"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-main-header",
				...r,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Main Header" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "main_header"
				})]
			}),
			n && /* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-main-header-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Color" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "main_header_color",
					type: "color",
					"aria-label": "Main header color"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-subheader",
				...r,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Subheader" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "subheader"
				})]
			}),
			n && /* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-subheader-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Color" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "subheader_color",
					type: "color",
					"aria-label": "Subheader color"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-description",
				...r,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Description" }), /* @__PURE__ */ (0, Q.jsx)(K.Control, {
					as: "textarea",
					...t
				})]
			}),
			n && /* @__PURE__ */ (0, Q.jsxs)(K.Group, {
				as: h,
				controlId: "cover-form-description-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, Q.jsx)(K.Label, { children: "Color" }), /* @__PURE__ */ (0, Q.jsx)(Af, {
					as: K.Control,
					name: "description_color",
					type: "color",
					"aria-label": "Description color"
				})]
			})
		] })
	});
}, Bf = () => {
	let { runtime: e } = (0, _.useContext)(s), n = sf();
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "react-studio-block",
		children: /* @__PURE__ */ (0, Q.jsxs)(t, {
			className: "editor-with-buttons",
			children: [/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "wrapper-comp-settings is-active",
				children: /* @__PURE__ */ (0, Q.jsx)(zf, {})
			}), /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "xblock-actions",
				children: /* @__PURE__ */ (0, Q.jsxs)(y, { children: [
					/* @__PURE__ */ (0, Q.jsx)(y.Spacer, {}),
					/* @__PURE__ */ (0, Q.jsx)(yi, {
						variant: "tertiary",
						onClick: () => e.notify("cancel", {}),
						children: "Cancel"
					}),
					/* @__PURE__ */ (0, Q.jsx)(yi, {
						variant: "primary",
						onClick: n.submitForm,
						children: "Save"
					})
				] })
			})]
		})
	});
}, Vf = (e) => {
	let { runtime: t } = (0, _.useContext)(s), n = Do("studio_save");
	return /* @__PURE__ */ (0, Q.jsx)(bf, {
		initialValues: e,
		onSubmit: (e) => {
			t.notify("save", { state: "start" }), $.post(n, JSON.stringify(e)).done(() => {
				t.notify("save", { state: "end" });
			}).fail(() => {
				t.notify("error", {
					title: "Save Error",
					message: "Failed to save cover block configuration"
				});
			});
		},
		children: /* @__PURE__ */ (0, Q.jsx)(Bf, {})
	});
}, Hf = ".wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block .wrapper-comp-settings{max-height:calc(100vh - 69px);overflow-y:scroll}.react-studio-block{margin-bottom:0!important}.modal-lg .react-studio-block .wrapper-comp-settings{max-height:366px}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}", Uf = (e, t, n) => {
	m(e, t, n, Hf)(/* @__PURE__ */ (0, Q.jsx)(Vf, { ...n }));
};
//#endregion
export { Uf as renderBlock };
