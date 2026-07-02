import { C as e, E as t, S as n, T as r, _ as i, b as a, c as o, d as s, f as c, g as l, h as u, i as d, l as f, m as p, n as m, o as h, p as g, r as _, s as v, t as y, u as b, v as x, w as S, x as C, y as w } from "./apiTypes-CCMVIwg9.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var T = /* @__PURE__ */ t(S()), E = /* @__PURE__ */ t(e());
function D({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ T.createElement(e, {
		...r,
		className: (0, E.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function O() {
	return /* @__PURE__ */ T.createElement("span", { className: "pgn__action-row-spacer" });
}
D.Spacer = O, (/* @__PURE__ */ r(((e, t) => {
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
function k(e, t, n) {
	var r = (0, T.useRef)(e !== void 0), i = (0, T.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, T.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function A(e, t) {
	return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, A(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function j(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, A(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function M() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function N(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function P(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
M.__suppressDeprecationWarning = !0, N.__suppressDeprecationWarning = !0, P.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function F(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function I(e) {
	var t = F(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function L(e, t) {
	return I(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var R = /([A-Z])/g;
function z(e) {
	return e.replace(R, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var ee = /^ms-/;
function te(e) {
	return z(e).replace(ee, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var ne = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function re(e) {
	return !!(e && ne.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function ie(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(te(t)) || L(e).getPropertyValue(te(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(te(i)) : re(i) ? r += i + "(" + a + ") " : n += te(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ae = /* @__PURE__ */ r(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), oe = /* @__PURE__ */ r(((e, t) => {
	var n = ae();
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
})), se = /* @__PURE__ */ r(((e, t) => {
	t.exports = oe()();
})), ce = { disabled: !1 }, le = T.createContext(null), ue = function(e) {
	return e.scrollTop;
}, de = /* @__PURE__ */ t(w()), fe = "unmounted", pe = "exited", B = "entering", me = "entered", he = "exiting", ge = /* @__PURE__ */ function(e) {
	j(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = pe, r.appearStatus = B) : o = me : o = t.unmountOnExit || t.mountOnEnter ? fe : pe, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: pe } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = B) : (n === "entering" || n === "entered") && (t = he);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : de.findDOMNode(this);
				n && ue(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: fe });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [de.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || ce.disabled) {
			this.safeSetState({ status: me }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: B }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: me }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : de.findDOMNode(this);
		if (!t || ce.disabled) {
			this.safeSetState({ status: pe }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: he }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: pe }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : de.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = C(t, [
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
		return /* @__PURE__ */ T.createElement(le.Provider, { value: null }, typeof n == "function" ? n(e, r) : T.cloneElement(T.Children.only(n), r));
	}, t;
}(T.Component);
ge.contextType = le, ge.propTypes = {};
function _e() {}
ge.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: _e,
	onEntering: _e,
	onEntered: _e,
	onExit: _e,
	onExiting: _e,
	onExited: _e
}, ge.UNMOUNTED = fe, ge.EXITED = pe, ge.ENTERING = B, ge.ENTERED = me, ge.EXITING = he;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var ve = !!(typeof window < "u" && window.document && window.document.createElement), ye = !1, be = !1;
try {
	var xe = {
		get passive() {
			return ye = !0;
		},
		get once() {
			return be = ye = !0;
		}
	};
	ve && (window.addEventListener("test", xe, xe), window.removeEventListener("test", xe, !0));
} catch {}
function Se(e, t, n, r) {
	if (r && typeof r != "boolean" && !be) {
		var i = r.once, a = r.capture, o = n;
		!be && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, ye ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function Ce(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function we(e, t, n, r) {
	return Se(e, t, n, r), function() {
		Ce(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function Te(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function Ee(e) {
	var t = ie(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function De(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || Te(e, "transitionend", !0);
	}, t + n), a = we(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function Oe(e, t, n, r) {
	n ??= Ee(e) || 0;
	var i = De(e, n, r), a = we(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function ke(e, t) {
	var n = ie(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Ae(e, t) {
	var n = Oe(e, function(r) {
		r.target === e && (n(), t(r));
	}, ke(e, "transitionDuration") + ke(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function je() {
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
function Me(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Ne(e) {
	let t = (0, T.useRef)(e);
	return (0, T.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Pe(e) {
	let t = Ne(e);
	return (0, T.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Fe = ["className", "children"], Ie, Le = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Re = (Ie = {}, Ie[B] = "show", Ie[me] = "show", Ie), ze = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.className, i = e.children, a = C(e, Fe), o = (0, T.useCallback)(function(e) {
		Me(e), a.onEnter && a.onEnter(e);
	}, [a]);
	return /* @__PURE__ */ T.createElement(ge, n({
		ref: t,
		addEndListener: Ae
	}, a, { onEnter: o }), function(e, t) {
		return /* @__PURE__ */ T.cloneElement(i, n({}, t, { className: (0, E.default)("fade", r, i.props.className, Re[e]) }));
	});
});
ze.defaultProps = Le, ze.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Be = /-(.)/g;
function Ve(e) {
	return e.replace(Be, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var He = [
	"className",
	"bsPrefix",
	"as"
], Ue = function(e) {
	return e[0].toUpperCase() + Ve(e).slice(1);
};
function We(e, t) {
	var r = t === void 0 ? {} : t, i = r.displayName, o = i === void 0 ? Ue(e) : i, s = r.Component, c = r.defaultProps, l = /* @__PURE__ */ T.forwardRef(function(t, r) {
		var i = t.className, o = t.bsPrefix, c = t.as, l = c === void 0 ? s || "div" : c, u = C(t, He), d = a(o, e);
		return /* @__PURE__ */ T.createElement(l, n({
			ref: r,
			className: (0, E.default)(i, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = o, l;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Ge = [
	"as",
	"disabled",
	"onKeyDown"
];
function Ke(e) {
	return !e || e.trim() === "#";
}
var qe = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "a" : r, a = e.disabled, o = e.onKeyDown, s = C(e, Ge), c = function(e) {
		var t = s.href, n = s.onClick;
		if ((a || Ke(t)) && e.preventDefault(), a) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return Ke(s.href) && (s.role = s.role || "button", s.href = s.href || "#"), a && (s.tabIndex = -1, s["aria-disabled"] = !0), /* @__PURE__ */ T.createElement(i, n({ ref: t }, s, {
		onClick: c,
		onKeyDown: je(function(e) {
			e.key === " " && (e.preventDefault(), c(e));
		}, o)
	}));
});
qe.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Je = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Ye = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Xe = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.variant, o = e.size, s = e.active, c = e.className, l = e.block, u = e.type, d = e.as, f = C(e, Je), p = a(r, "btn"), m = (0, E.default)(c, p, s && "active", i && p + "-" + i, l && p + "-block", o && p + "-" + o);
	if (f.href) return /* @__PURE__ */ T.createElement(qe, n({}, f, {
		as: d,
		ref: t,
		className: (0, E.default)(m, f.disabled && "disabled")
	}));
	t && (f.ref = t), u ? f.type = u : d || (f.type = "button");
	var h = d || "button";
	return /* @__PURE__ */ T.createElement(h, n({}, f, { className: m }));
});
Xe.displayName = "Button", Xe.defaultProps = Ye;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function Ze() {
	let e = (0, T.useRef)(!0), t = (0, T.useRef)(() => e.current);
	return (0, T.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Qe(e) {
	let t = (0, T.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function $e(e) {
	let t = Qe(e);
	(0, T.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var et = 2 ** 31 - 1;
function tt(e, t, n) {
	let r = n - Date.now();
	e.current = r <= et ? setTimeout(t, r) : setTimeout(() => tt(e, t, n), et);
}
function nt() {
	let e = Ze(), t = (0, T.useRef)();
	return $e(() => clearTimeout(t.current)), (0, T.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= et ? t.current = setTimeout(r, i) : tt(t, r, Date.now() + i));
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
function rt() {
	return (0, T.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function it(e) {
	let t = Ze();
	return [e[0], (0, T.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var at = "bottom", ot = "right", st = "left", ct = "auto", lt = [
	"top",
	at,
	ot,
	st
], ut = "start", dt = "clippingParents", ft = "viewport", pt = "popper", mt = "reference", ht = /* @__PURE__ */ lt.reduce(function(e, t) {
	return e.concat([t + "-" + ut, t + "-end"]);
}, []), gt = /* @__PURE__ */ [].concat(lt, [ct]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + ut,
		t + "-end"
	]);
}, []), _t = [
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
function vt(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function yt(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function bt(e) {
	return e instanceof yt(e).Element || e instanceof Element;
}
function xt(e) {
	return e instanceof yt(e).HTMLElement || e instanceof HTMLElement;
}
function St(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof yt(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Ct = Math.max, wt = Math.min, Tt = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function Et() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Dt() {
	return !/^((?!chrome|android).)*safari/i.test(Et());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Ot(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && xt(e) && (i = e.offsetWidth > 0 && Tt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Tt(r.height) / e.offsetHeight || 1);
	var o = (bt(e) ? yt(e) : window).visualViewport, s = !Dt() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function kt(e) {
	var t = Ot(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function At(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && St(n)) {
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
function jt(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Mt(e) {
	return yt(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Nt(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(jt(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Pt(e) {
	return ((bt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Ft(e) {
	return jt(e) === "html" ? e : e.assignedSlot || e.parentNode || (St(e) ? e.host : null) || Pt(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function It(e) {
	return !xt(e) || Mt(e).position === "fixed" ? null : e.offsetParent;
}
function Lt(e) {
	var t = /firefox/i.test(Et());
	if (/Trident/i.test(Et()) && xt(e) && Mt(e).position === "fixed") return null;
	var n = Ft(e);
	for (St(n) && (n = n.host); xt(n) && ["html", "body"].indexOf(jt(n)) < 0;) {
		var r = Mt(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Rt(e) {
	for (var t = yt(e), n = It(e); n && Nt(n) && Mt(n).position === "static";) n = It(n);
	return n && (jt(n) === "html" || jt(n) === "body" && Mt(n).position === "static") ? t : n || Lt(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function zt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function Bt(e, t, n) {
	return Ct(e, wt(t, n));
}
function Vt(e, t, n) {
	var r = Bt(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Ht() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Ut(e) {
	return Object.assign({}, Ht(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Wt(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Gt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ut(typeof e == "number" ? Wt(e, lt) : e);
};
function Kt(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = vt(n.placement), c = zt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Gt(i.padding, n), d = kt(a), f = c === "y" ? "top" : st, p = c === "y" ? at : ot, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Rt(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Bt(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function qt(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || At(t.elements.popper, r) && (t.elements.arrow = r));
}
var Jt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Kt,
	effect: qt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function Yt(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Xt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Zt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Tt(n * i) / i || 0,
		y: Tt(r * i) / i || 0
	};
}
function Qt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = st, b = "top", x = window;
	if (l) {
		var S = Rt(n), C = "clientHeight", w = "clientWidth";
		if (S === yt(n) && (S = Pt(n), Mt(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = at;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = ot;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Xt), O = u === !0 ? Zt({
		x: p,
		y: h
	}, yt(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function $t(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: vt(t.placement),
		variation: Yt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var en = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: $t,
	data: {}
}, tn = { passive: !0 };
function nn(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = yt(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, tn);
	}), s && c.addEventListener("resize", n.update, tn), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, tn);
		}), s && c.removeEventListener("resize", n.update, tn);
	};
}
var rn = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: nn,
	data: {}
}, an = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function on(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return an[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var sn = {
	start: "end",
	end: "start"
};
function cn(e) {
	return e.replace(/start|end/g, function(e) {
		return sn[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function ln(e) {
	var t = yt(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function un(e) {
	return Ot(Pt(e)).left + ln(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function dn(e, t) {
	var n = yt(e), r = Pt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Dt();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + un(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function fn(e) {
	var t = Pt(e), n = ln(e), r = e.ownerDocument?.body, i = Ct(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Ct(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + un(e), s = -n.scrollTop;
	return Mt(r || t).direction === "rtl" && (o += Ct(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function pn(e) {
	var t = Mt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function mn(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(jt(e)) >= 0 ? e.ownerDocument.body : xt(e) && pn(e) ? e : mn(Ft(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function hn(e, t) {
	t === void 0 && (t = []);
	var n = mn(e), r = n === e.ownerDocument?.body, i = yt(n), a = r ? [i].concat(i.visualViewport || [], pn(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(hn(Ft(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function gn(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function _n(e, t) {
	var n = Ot(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function vn(e, t, n) {
	return t === "viewport" ? gn(dn(e, n)) : bt(t) ? _n(t, n) : gn(fn(Pt(e)));
}
function yn(e) {
	var t = hn(Ft(e)), n = ["absolute", "fixed"].indexOf(Mt(e).position) >= 0 && xt(e) ? Rt(e) : e;
	return bt(n) ? t.filter(function(e) {
		return bt(e) && At(e, n) && jt(e) !== "body";
	}) : [];
}
function bn(e, t, n, r) {
	var i = t === "clippingParents" ? yn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = vn(e, n, r);
		return t.top = Ct(i.top, t.top), t.right = wt(i.right, t.right), t.bottom = wt(i.bottom, t.bottom), t.left = Ct(i.left, t.left), t;
	}, vn(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function xn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? vt(r) : null, a = r ? Yt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case at:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case ot:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case st:
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
	var l = i ? zt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case ut:
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
function Sn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? dt : s, l = n.rootBoundary, u = l === void 0 ? ft : l, d = n.elementContext, f = d === void 0 ? pt : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Ut(typeof g == "number" ? Wt(g, lt) : g), v = f === "popper" ? mt : pt, y = e.rects.popper, b = e.elements[m ? v : f], x = bn(bt(b) ? b : b.contextElement || Pt(e.elements.popper), c, u, o), S = Ot(e.elements.reference), C = xn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = gn(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function Cn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? gt : c, u = Yt(r), d = u ? s ? ht : ht.filter(function(e) {
		return Yt(e) === u;
	}) : lt, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Sn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[vt(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function wn(e) {
	if (vt(e) === "auto") return [];
	var t = on(e);
	return [
		cn(e),
		t,
		cn(t)
	];
}
function Tn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = vt(g) === g, v = c || (_ || !m ? [on(g)] : wn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(vt(n) === "auto" ? Cn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = vt(E), O = Yt(E) === ut, k = ["top", at].indexOf(D) >= 0, A = k ? "width" : "height", j = Sn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? ot : st : O ? at : "top";
			b[A] > x[A] && (M = on(M));
			var N = on(M), P = [];
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
var En = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Tn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function Dn(e, t, n) {
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
function On(e) {
	return [
		"top",
		ot,
		at,
		st
	].some(function(t) {
		return e[t] >= 0;
	});
}
function kn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Sn(t, { elementContext: "reference" }), s = Sn(t, { altBoundary: !0 }), c = Dn(o, r), l = Dn(s, i, a), u = On(c), d = On(l);
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
var An = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: kn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function jn(e, t, n) {
	var r = vt(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Mn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = gt.reduce(function(e, n) {
		return e[n] = jn(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Nn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Mn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function Pn(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = xn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Fn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: Pn,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function In(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Ln(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Sn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = vt(t.placement), v = Yt(t.placement), y = !v, b = zt(_), x = In(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : st, A = b === "y" ? at : ot, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, z = p && R ? kt(R) : {
				width: 0,
				height: 0
			}, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ht(), te = ee[k], ne = ee[A], re = Bt(0, C[j], z[j]), ie = y ? C[j] / 2 - F - re - te - E.mainAxis : I - re - te - E.mainAxis, ae = y ? -C[j] / 2 + F + re + ne + E.mainAxis : L + re + ne + E.mainAxis, oe = t.elements.arrow && Rt(t.elements.arrow), se = oe ? b === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, ce = D?.[b] ?? 0, le = M + ie - ce - se, ue = M + ae - ce, de = Bt(p ? wt(N, le) : N, M, p ? Ct(P, ue) : P);
			S[b] = de, O[b] = de - M;
		}
		if (s) {
			var fe = b === "x" ? "top" : st, pe = b === "x" ? at : ot, B = S[x], me = x === "y" ? "height" : "width", he = B + g[fe], ge = B - g[pe], _e = ["top", st].indexOf(_) !== -1, ve = D?.[x] ?? 0, ye = _e ? he : B - C[me] - w[me] - ve + E.altAxis, be = _e ? B + C[me] + w[me] - ve - E.altAxis : ge, xe = p && _e ? Vt(ye, B, be) : Bt(p ? ye : he, B, p ? be : ge);
			S[x] = xe, O[x] = xe - B;
		}
		t.modifiersData[r] = O;
	}
}
var Rn = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Ln,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function zn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function Bn(e) {
	return e === yt(e) || !xt(e) ? ln(e) : zn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Vn(e) {
	var t = e.getBoundingClientRect(), n = Tt(t.width) / e.offsetWidth || 1, r = Tt(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Hn(e, t, n) {
	n === void 0 && (n = !1);
	var r = xt(t), i = xt(t) && Vn(t), a = Pt(t), o = Ot(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((jt(t) !== "body" || pn(a)) && (s = Bn(t)), xt(t) ? (c = Ot(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = un(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Un(e) {
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
function Wn(e) {
	var t = Un(e);
	return _t.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Gn(e) {
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
function Kn(e) {
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
var qn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Jn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function Yn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? qn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, qn, a),
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
					reference: bt(e) ? hn(e) : e.contextElement ? hn(e.contextElement) : [],
					popper: hn(t)
				};
				var s = Wn(Kn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Jn(t, n)) {
						i.rects = {
							reference: Hn(t, Rt(n), i.options.strategy === "fixed"),
							popper: kt(n)
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
			update: Gn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Jn(e, t)) return c;
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
var Xn = Yn({ defaultModifiers: [
	An,
	Fn,
	en,
	rn,
	Nn,
	En,
	Rn,
	Jt
] }), Zn = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Qn = {
	name: "applyStyles",
	enabled: !1
}, $n = {
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
}, er = [];
function tr(e, t, r) {
	var i = r === void 0 ? {} : r, a = i.enabled, o = a === void 0 ? !0 : a, s = i.placement, c = s === void 0 ? "bottom" : s, l = i.strategy, u = l === void 0 ? "absolute" : l, d = i.modifiers, f = d === void 0 ? er : d, p = C(i, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), m = (0, T.useRef)(), h = (0, T.useCallback)(function() {
		var e;
		(e = m.current) == null || e.update();
	}, []), g = (0, T.useCallback)(function() {
		var e;
		(e = m.current) == null || e.forceUpdate();
	}, []), _ = it((0, T.useState)({
		placement: c,
		update: h,
		forceUpdate: g,
		attributes: {},
		styles: {
			popper: Zn(u),
			arrow: {}
		}
	})), v = _[0], y = _[1], b = (0, T.useMemo)(function() {
		return {
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: function(e) {
				var t = e.state, n = {}, r = {};
				Object.keys(t.elements).forEach(function(e) {
					n[e] = t.styles[e], r[e] = t.attributes[e];
				}), y({
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
		y
	]);
	return (0, T.useEffect)(function() {
		!m.current || !o || m.current.setOptions({
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [b, Qn])
		});
	}, [
		u,
		c,
		b,
		o
	]), (0, T.useEffect)(function() {
		if (!(!o || e == null || t == null)) return m.current = Xn(e, t, n({}, p, {
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [$n, b])
		})), function() {
			m.current != null && (m.current.destroy(), m.current = void 0, y(function(e) {
				return n({}, e, {
					attributes: {},
					styles: { popper: Zn(u) }
				});
			}));
		};
	}, [
		o,
		e,
		t
	]), v;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function nr(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var rr = /* @__PURE__ */ r(((e, t) => {
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
function ir(e) {
	return e && "setState" in e ? de.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var ar = (function(e) {
	return F(ir(e));
}), or = /* @__PURE__ */ t(rr()), sr = 27, cr = function() {};
function lr(e) {
	return e.button === 0;
}
function ur(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var dr = function(e) {
	return e && ("current" in e ? e.current : e);
};
function fr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, T.useRef)(!1), c = t || cr, l = (0, T.useCallback)(function(t) {
		var n = dr(e);
		(0, or.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || ur(t) || !lr(t) || !!nr(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Pe(function(e) {
		s.current || c(e);
	}), d = Pe(function(e) {
		e.keyCode === sr && c(e);
	});
	(0, T.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = ar(dr(e)), r = we(n, o, l, !0), a = we(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = we(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return we(e, "mousemove", cr);
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
function pr(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function mr(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function hr(e) {
	var t = e.enabled, r = e.enableEvents, i = e.placement, a = e.flip, o = e.offset, s = e.fixed, c = e.containerPadding, l = e.arrowElement, u = e.popperConfig, d = u === void 0 ? {} : u, f = pr(d.modifiers);
	return n({}, d, {
		placement: i,
		enabled: t,
		strategy: s ? "fixed" : d.strategy,
		modifiers: mr(n({}, f, {
			eventListeners: { enabled: r },
			preventOverflow: n({}, f.preventOverflow, { options: c ? n({ padding: c }, f.preventOverflow?.options) : f.preventOverflow?.options }),
			offset: { options: n({ offset: o }, f.offset?.options) },
			arrow: n({}, f.arrow, {
				enabled: !!l,
				options: n({}, f.arrow?.options, { element: l })
			}),
			flip: n({ enabled: !!a }, f.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var gr = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function _r(e, t) {
	let n = gr(e), r = gr(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function vr(e, t) {
	return (0, T.useMemo)(() => _r(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function yr(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function br(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function xr() {
	var e = (0, T.useRef)(null), t = (0, T.useRef)(null), n = (0, T.useRef)(null), r = a(void 0, "popover"), i = a(void 0, "dropdown-menu");
	return [(0, T.useCallback)(function(n) {
		!n || !(yr(n, r) || yr(n, i)) || (t.current = br(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, T.useMemo)(function() {
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
		(0, T.useMemo)(function() {
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
		(0, T.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !yr(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = br(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = br(i.elements.arrow);
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
var Sr = /* @__PURE__ */ r(((e, t) => {
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
})), Cr = /* @__PURE__ */ r(((e, t) => {
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
})), wr = /* @__PURE__ */ r(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(Cr());
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
})), V = /* @__PURE__ */ t(se()), Tr = [
	"as",
	"className",
	"type",
	"tooltip"
], Er = {
	type: V.default.string,
	tooltip: V.default.bool,
	as: V.default.elementType
}, Dr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c === void 0 ? !1 : c, u = C(e, Tr);
	return /* @__PURE__ */ T.createElement(i, n({}, u, {
		ref: t,
		className: (0, E.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Dr.displayName = "Feedback", Dr.propTypes = Er;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Or = /* @__PURE__ */ T.createContext({ controlId: void 0 }), kr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Ar = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, o = e.bsCustomPrefix, s = e.className, c = e.type, l = c === void 0 ? "checkbox" : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = C(e, kr), v = (0, T.useContext)(Or), y = v.controlId, b = v.custom ? [o, "custom-control-input"] : [i, "form-check-input"], x = b[0], S = b[1];
	return i = a(x, S), /* @__PURE__ */ T.createElement(g, n({}, _, {
		ref: t,
		type: l,
		id: r || y,
		className: (0, E.default)(s, i, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
Ar.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var jr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Mr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, o = e.className, s = e.htmlFor, c = C(e, jr), l = (0, T.useContext)(Or), u = l.controlId, d = l.custom ? [i, "custom-control-label"] : [r, "form-check-label"], f = d[0], p = d[1];
	return r = a(f, p), /* @__PURE__ */ T.createElement("label", n({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, E.default)(o, r)
	}));
});
Mr.displayName = "FormCheckLabel", wr();
var Nr = [
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
], Pr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, o = e.bsCustomPrefix, s = e.inline, c = s === void 0 ? !1 : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, S = e.type, w = S === void 0 ? "checkbox" : S, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = C(e, Nr), N = w === "switch" ? !0 : k, P = N ? [o, "custom-control"] : [i, "form-check"], F = P[0], I = P[1];
	i = a(F, I);
	var L = (0, T.useContext)(Or).controlId, R = (0, T.useMemo)(function() {
		return {
			controlId: r || L,
			custom: N
		};
	}, [
		L,
		N,
		r
	]), z = N || D != null && D !== !1 && !O, ee = /* @__PURE__ */ T.createElement(Ar, n({}, M, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: f,
		isInvalid: m,
		isStatic: !z,
		disabled: u,
		as: j
	}));
	return /* @__PURE__ */ T.createElement(Or.Provider, { value: R }, /* @__PURE__ */ T.createElement("div", {
		style: y,
		className: (0, E.default)(v, i, N && "custom-" + w, c && i + "-inline")
	}, O || /* @__PURE__ */ T.createElement(T.Fragment, null, ee, z && /* @__PURE__ */ T.createElement(Mr, { title: x }, D), (f || m) && /* @__PURE__ */ T.createElement(Dr, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
Pr.displayName = "FormCheck", Pr.Input = Ar, Pr.Label = Mr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Fr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Ir = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, o = e.bsCustomPrefix, s = e.className, c = e.isValid, l = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = C(e, Fr), m = (0, T.useContext)(Or), h = m.controlId, g = m.custom, _ = "file", v = g ? [o, "custom-file-input"] : [i, "form-control-file"], y = v[0], b = v[1];
	return i = a(y, b), /* @__PURE__ */ T.createElement(f, n({}, p, {
		ref: t,
		id: r || h,
		type: _,
		lang: u,
		className: (0, E.default)(s, i, c && "is-valid", l && "is-invalid")
	}));
});
Ir.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Lr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Rr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, o = e.className, s = e.htmlFor, c = C(e, Lr), l = (0, T.useContext)(Or), u = l.controlId, d = l.custom ? [i, "custom-file-label"] : [r, "form-file-label"], f = d[0], p = d[1];
	return r = a(f, p), /* @__PURE__ */ T.createElement("label", n({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, E.default)(o, r),
		"data-browse": c["data-browse"]
	}));
});
Rr.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var zr = [
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
], Br = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, o = e.bsCustomPrefix, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, S = e["data-browse"], w = e.as, D = w === void 0 ? "div" : w, O = e.inputAs, k = O === void 0 ? "input" : O, A = C(e, zr), j = b ? [o, "custom"] : [i, "form-file"], M = j[0], N = j[1];
	i = a(M, N);
	var P = "file", F = (0, T.useContext)(Or).controlId, I = (0, T.useMemo)(function() {
		return {
			controlId: r || F,
			custom: b
		};
	}, [
		F,
		b,
		r
	]), L = v != null && v !== !1 && !y, R = /* @__PURE__ */ T.createElement(Ir, n({}, A, {
		ref: t,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: k,
		lang: x
	}));
	return /* @__PURE__ */ T.createElement(Or.Provider, { value: I }, /* @__PURE__ */ T.createElement(D, {
		style: _,
		className: (0, E.default)(g, i, b && "custom-" + P)
	}, y || /* @__PURE__ */ T.createElement(T.Fragment, null, b ? /* @__PURE__ */ T.createElement(T.Fragment, null, R, L && /* @__PURE__ */ T.createElement(Rr, { "data-browse": S }, v)) : /* @__PURE__ */ T.createElement(T.Fragment, null, L && /* @__PURE__ */ T.createElement(Rr, null, v), R), (u || f) && /* @__PURE__ */ T.createElement(Dr, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Br.displayName = "FormFile", Br.Input = Ir, Br.Label = Rr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Vr = [
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
], Hr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, o = e.type, s = e.size, c = e.htmlSize, l = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = C(e, Vr), x = (0, T.useContext)(Or).controlId, S = _ ? [i, "custom"] : [r, "form-control"], w = S[0], D = S[1];
	r = a(w, D);
	var O;
	if (h) {
		var k;
		O = (k = {}, k[r + "-plaintext"] = !0, k);
	} else if (o === "file") {
		var A;
		O = (A = {}, A[r + "-file"] = !0, A);
	} else if (o === "range") {
		var j;
		O = (j = {}, j[r + "-range"] = !0, j);
	} else if (y === "select" && _) {
		var M;
		O = (M = {}, M[r + "-select"] = !0, M[r + "-select-" + s] = s, M);
	} else {
		var N;
		O = (N = {}, N[r] = !0, N[r + "-" + s] = s, N);
	}
	return /* @__PURE__ */ T.createElement(y, n({}, b, {
		type: o,
		size: c,
		ref: t,
		readOnly: g,
		id: l || x,
		className: (0, E.default)(u, O, f && "is-valid", m && "is-invalid")
	}));
});
Hr.displayName = "FormControl";
var Ur = Object.assign(Hr, { Feedback: Dr }), Wr = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Gr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, o = e.children, s = e.controlId, c = e.as, l = c === void 0 ? "div" : c, u = C(e, Wr);
	r = a(r, "form-group");
	var d = (0, T.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ T.createElement(Or.Provider, { value: d }, /* @__PURE__ */ T.createElement(l, n({}, u, {
		ref: t,
		className: (0, E.default)(i, r)
	}), o));
});
Gr.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Kr = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], qr = {
	column: !1,
	srOnly: !1
}, Jr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "label" : r, o = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, u = e.htmlFor, d = C(e, Kr), f = (0, T.useContext)(Or).controlId;
	o = a(o, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var m = (0, E.default)(l, o, c && "sr-only", s && p);
	return u ||= f, s ? /* @__PURE__ */ T.createElement(x, n({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /* @__PURE__ */ T.createElement(i, n({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
Jr.displayName = "FormLabel", Jr.defaultProps = qr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Yr = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Xr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, o = e.as, s = o === void 0 ? "small" : o, c = e.muted, l = C(e, Yr);
	return r = a(r, "form-text"), /* @__PURE__ */ T.createElement(s, n({}, l, {
		ref: t,
		className: (0, E.default)(i, r, c && "text-muted")
	}));
});
Xr.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Zr = /* @__PURE__ */ T.forwardRef(function(e, t) {
	return /* @__PURE__ */ T.createElement(Pr, n({}, e, {
		ref: t,
		type: "switch"
	}));
});
Zr.displayName = "Switch", Zr.Input = Pr.Input, Zr.Label = Pr.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Qr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], $r = We("form-row"), ei = { inline: !1 }, ti = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.inline, o = e.className, s = e.validated, c = e.as, l = c === void 0 ? "form" : c, u = C(e, Qr);
	return r = a(r, "form"), /* @__PURE__ */ T.createElement(l, n({}, u, {
		ref: t,
		className: (0, E.default)(o, s && "was-validated", i && r + "-inline")
	}));
});
ti.displayName = "Form", ti.defaultProps = ei, ti.Row = $r, ti.Group = Gr, ti.Control = Ur, ti.Check = Pr, ti.File = Br, ti.Switch = Zr, ti.Label = Jr, ti.Text = Xr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var ni = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], ri = We("input-group-append"), ii = We("input-group-prepend"), ai = We("input-group-text", { Component: "span" }), oi = function(e) {
	return /* @__PURE__ */ T.createElement(ai, null, /* @__PURE__ */ T.createElement("input", n({ type: "checkbox" }, e)));
}, si = function(e) {
	return /* @__PURE__ */ T.createElement(ai, null, /* @__PURE__ */ T.createElement("input", n({ type: "radio" }, e)));
}, ci = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.size, o = e.hasValidation, s = e.className, c = e.as, l = c === void 0 ? "div" : c, u = C(e, ni);
	return r = a(r, "input-group"), /* @__PURE__ */ T.createElement(l, n({ ref: t }, u, { className: (0, E.default)(s, r, i && r + "-" + i, o && "has-validation") }));
});
ci.displayName = "InputGroup", ci.Text = ai, ci.Radio = si, ci.Checkbox = oi, ci.Append = ri, ci.Prepend = ii;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var li = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? F().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function ui(e, t) {
	var n = (0, T.useState)(function() {
		return li(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = li(e);
		a && i(a);
	}
	return (0, T.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, T.useEffect)(function() {
		var t = li(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var di = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.flip, i = e.offset, a = e.placement, o = e.containerPadding, s = o === void 0 ? 5 : o, c = e.popperConfig, l = c === void 0 ? {} : c, u = e.transition, d = rt(), f = d[0], p = d[1], m = rt(), h = m[0], g = m[1], _ = vr(p, t), v = ui(e.container), y = ui(e.target), b = (0, T.useState)(!e.show), x = b[0], S = b[1], w = tr(y, f, hr({
		placement: a,
		enableEvents: !!e.show,
		containerPadding: s || 5,
		flip: r,
		offset: i,
		arrowElement: h,
		popperConfig: l
	})), E = w.styles, D = w.attributes, O = C(w, ["styles", "attributes"]);
	e.show ? x && S(!1) : !e.transition && !x && S(!0);
	var k = function() {
		S(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || u && !x;
	if (fr(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(n({}, O, {
		show: !!e.show,
		props: n({}, D.popper, {
			style: E.popper,
			ref: _
		}),
		arrowProps: n({}, D.arrow, {
			style: E.arrow,
			ref: g
		})
	}));
	if (u) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, I = e.onEntered;
		j = /* @__PURE__ */ T.createElement(u, {
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
	return v ? /* @__PURE__ */ de.createPortal(j, v) : null;
});
di.displayName = "Overlay", di.propTypes = {
	show: V.default.bool,
	placement: V.default.oneOf(gt),
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
var fi = [
	"children",
	"transition",
	"popperConfig"
], pi = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], mi = {
	transition: ze,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function hi(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(ir(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(ir(e));
	};
}
function gi(e) {
	var t = e.children, r = e.transition, i = e.popperConfig, a = i === void 0 ? {} : i, o = C(e, fi), s = (0, T.useRef)({}), c = xr(), l = c[0], u = c[1], d = r === !0 ? ze : r || null;
	return /* @__PURE__ */ T.createElement(di, n({}, o, {
		ref: l,
		popperConfig: n({}, a, { modifiers: u.concat(a.modifiers || []) }),
		transition: d
	}), function(e) {
		var i = e.props, a = e.arrowProps, o = e.show, c = e.update;
		e.forceUpdate;
		var l = e.placement, u = e.state, d = C(e, pi);
		hi(i, a);
		var f = Object.assign(s.current, {
			state: u,
			scheduleUpdate: c,
			placement: l,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(n({}, d, i, {
			placement: l,
			show: o
		}, !r && o && { className: "show" }, {
			popper: f,
			arrowProps: a
		})) : /* @__PURE__ */ T.cloneElement(t, n({}, d, i, {
			placement: l,
			arrowProps: a,
			popper: f,
			className: (0, E.default)(t.props.className, !r && o && "show"),
			style: n({}, t.props.style, i.style)
		}));
	});
}
gi.defaultProps = mi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var _i = [
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
], vi = /* @__PURE__ */ function(e) {
	j(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(T.Component);
function yi(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function bi(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !nr(i, a) && e.apply(void 0, t);
}
var xi = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Si(e) {
	var t = e.trigger, r = e.overlay, i = e.children, a = e.popperConfig, o = a === void 0 ? {} : a, s = e.show, c = e.defaultShow, l = c === void 0 ? !1 : c, u = e.onToggle, d = e.delay, f = e.placement, p = e.flip, m = p === void 0 ? f && f.indexOf("auto") !== -1 : p, h = C(e, _i), g = (0, T.useRef)(null), _ = nt(), v = (0, T.useRef)(""), y = k(s, l, u), b = y[0], x = y[1], S = yi(d), w = typeof i == "function" ? {} : T.Children.only(i).props, E = w.onFocus, D = w.onBlur, O = w.onClick, A = (0, T.useCallback)(function() {
		return ir(g.current);
	}, []), j = (0, T.useCallback)(function() {
		if (_.clear(), v.current = "show", !S.show) {
			x(!0);
			return;
		}
		_.set(function() {
			v.current === "show" && x(!0);
		}, S.show);
	}, [
		S.show,
		x,
		_
	]), M = (0, T.useCallback)(function() {
		if (_.clear(), v.current = "hide", !S.hide) {
			x(!1);
			return;
		}
		_.set(function() {
			v.current === "hide" && x(!1);
		}, S.hide);
	}, [
		S.hide,
		x,
		_
	]), N = (0, T.useCallback)(function() {
		j();
		var e = [...arguments];
		E?.apply(void 0, e);
	}, [j, E]), P = (0, T.useCallback)(function() {
		M();
		var e = [...arguments];
		D?.apply(void 0, e);
	}, [M, D]), F = (0, T.useCallback)(function() {
		x(!b), O && O.apply(void 0, arguments);
	}, [
		O,
		x,
		b
	]), I = (0, T.useCallback)(function() {
		bi(j, [...arguments], "fromElement");
	}, [j]), L = (0, T.useCallback)(function() {
		bi(M, [...arguments], "toElement");
	}, [M]), R = t == null ? [] : [].concat(t), z = {};
	return R.indexOf("click") !== -1 && (z.onClick = F), R.indexOf("focus") !== -1 && (z.onFocus = N, z.onBlur = P), R.indexOf("hover") !== -1 && (z.onMouseOver = I, z.onMouseOut = L), /* @__PURE__ */ T.createElement(T.Fragment, null, typeof i == "function" ? i(n({}, z, { ref: g })) : /* @__PURE__ */ T.createElement(vi, { ref: g }, /* @__PURE__ */ (0, T.cloneElement)(i, z)), /* @__PURE__ */ T.createElement(gi, n({}, h, {
		show: b,
		onHide: M,
		flip: m,
		placement: f,
		popperConfig: o,
		target: A
	}), r));
}
Si.defaultProps = xi;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Ci = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], wi = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.variant, o = e.animation, s = e.size, c = e.children, l = e.as, u = l === void 0 ? "div" : l, d = e.className, f = C(e, Ci);
	r = a(r, "spinner");
	var p = r + "-" + o;
	return /* @__PURE__ */ T.createElement(u, n({ ref: t }, f, { className: (0, E.default)(d, p, s && p + "-" + s, i && "text-" + i) }), c);
});
wi.displayName = "Spinner", Sr();
var Ti = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Ei = { placement: "right" }, Di = /* @__PURE__ */ T.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.placement, o = e.className, s = e.style, c = e.children, l = e.arrowProps;
	e.popper, e.show;
	var u = C(e, Ti);
	r = a(r, "tooltip");
	var d = (i?.split("-") || [])[0];
	return /* @__PURE__ */ T.createElement("div", n({
		ref: t,
		style: s,
		role: "tooltip",
		"x-placement": d,
		className: (0, E.default)(o, r, "bs-tooltip-" + d)
	}, u), /* @__PURE__ */ T.createElement("div", n({ className: "arrow" }, l)), /* @__PURE__ */ T.createElement("div", { className: r + "-inner" }, c));
});
Di.defaultProps = Ei, Di.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var Oi = /* @__PURE__ */ r(((e) => {
	e.match = o, e.parse = s;
	var t = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, r = /^(?:(min|max)-)?(.+)/, i = /(em|rem|px|cm|mm|in|pt|pc)?$/, a = /(dpi|dpcm|dppx)?$/;
	function o(e, t) {
		return s(e).some(function(e) {
			var n = e.inverse, r = e.type === "all" || t.type === e.type;
			if (r && n || !(r || n)) return !1;
			var i = e.expressions.every(function(e) {
				var n = e.feature, r = e.modifier, i = e.value, a = t[n];
				if (!a) return !1;
				switch (n) {
					case "orientation":
					case "scan": return a.toLowerCase() === i.toLowerCase();
					case "width":
					case "height":
					case "device-width":
					case "device-height":
						i = u(i), a = u(a);
						break;
					case "resolution":
						i = l(i), a = l(a);
						break;
					case "aspect-ratio":
					case "device-aspect-ratio":
					case "device-pixel-ratio":
						i = c(i), a = c(a);
						break;
					case "grid":
					case "color":
					case "color-index":
					case "monochrome":
						i = parseInt(i, 10) || 1, a = parseInt(a, 10) || 0;
						break;
				}
				switch (r) {
					case "min": return a >= i;
					case "max": return a <= i;
					default: return a === i;
				}
			});
			return i && !n || !i && n;
		});
	}
	function s(e) {
		return e.split(",").map(function(e) {
			e = e.trim();
			var i = e.match(t), a = i[1], o = i[2], s = i[3] || "", c = {};
			return c.inverse = !!a && a.toLowerCase() === "not", c.type = o ? o.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], c.expressions = s.map(function(e) {
				var t = e.match(n), i = t[1].toLowerCase().match(r);
				return {
					modifier: i[1],
					feature: i[2],
					value: t[2]
				};
			}), c;
		});
	}
	function c(e) {
		var t = Number(e), n;
		return t ||= (n = e.match(/^(\d+)\s*\/\s*(\d+)$/), n[1] / n[2]), t;
	}
	function l(e) {
		var t = parseFloat(e);
		switch (String(e).match(a)[1]) {
			case "dpcm": return t / 2.54;
			case "dppx": return t * 96;
			default: return t;
		}
	}
	function u(e) {
		var t = parseFloat(e);
		switch (String(e).match(i)[1]) {
			case "em": return t * 16;
			case "rem": return t * 16;
			case "cm": return t * 96 / 2.54;
			case "mm": return t * 96 / 2.54 / 10;
			case "in": return t * 96;
			case "pt": return t * 72;
			case "pc": return t * 72 / 12;
			default: return t;
		}
	}
})), ki = /* @__PURE__ */ r(((e, t) => {
	var n = Oi().match, r = typeof window < "u" ? window.matchMedia : null;
	function i(e, t, i) {
		var a = this, o;
		r && !i && (o = r.call(window, e)), o ? (this.matches = o.matches, this.media = o.media, o.addListener(l)) : (this.matches = n(e, t), this.media = e), this.addListener = s, this.removeListener = c, this.dispose = u;
		function s(e) {
			o && o.addListener(e);
		}
		function c(e) {
			o && o.removeListener(e);
		}
		function l(e) {
			a.matches = e.matches, a.media = e.media;
		}
		function u() {
			o && o.removeListener(l);
		}
	}
	function a(e, t, n) {
		return new i(e, t, n);
	}
	t.exports = a;
})), Ai = /[A-Z]/g, ji = /^ms-/, Mi = {};
function Ni(e) {
	return "-" + e.toLowerCase();
}
function Pi(e) {
	if (Mi.hasOwnProperty(e)) return Mi[e];
	var t = e.replace(Ai, Ni);
	return Mi[e] = ji.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function Fi(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t), i = n.length;
	if (r.length !== i) return !1;
	for (let r = 0; r < i; r++) {
		let i = n[r];
		if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1;
	}
	return !0;
}
//#endregion
//#region node_modules/.pnpm/react-responsive@10.0.1_react@18.3.1/node_modules/react-responsive/dist/esm/index.js
var Ii = /* @__PURE__ */ t(ki()), H = V.default.oneOfType([V.default.string, V.default.number]), Li = {
	all: V.default.bool,
	grid: V.default.bool,
	aural: V.default.bool,
	braille: V.default.bool,
	handheld: V.default.bool,
	print: V.default.bool,
	projection: V.default.bool,
	screen: V.default.bool,
	tty: V.default.bool,
	tv: V.default.bool,
	embossed: V.default.bool
}, Ri = {
	orientation: V.default.oneOf(["portrait", "landscape"]),
	scan: V.default.oneOf(["progressive", "interlace"]),
	aspectRatio: V.default.string,
	deviceAspectRatio: V.default.string,
	height: H,
	deviceHeight: H,
	width: H,
	deviceWidth: H,
	color: V.default.bool,
	colorIndex: V.default.bool,
	monochrome: V.default.bool,
	resolution: H,
	type: Object.keys(Li)
}, { type: zi, ...Bi } = Ri, Vi = {
	minAspectRatio: V.default.string,
	maxAspectRatio: V.default.string,
	minDeviceAspectRatio: V.default.string,
	maxDeviceAspectRatio: V.default.string,
	minHeight: H,
	maxHeight: H,
	minDeviceHeight: H,
	maxDeviceHeight: H,
	minWidth: H,
	maxWidth: H,
	minDeviceWidth: H,
	maxDeviceWidth: H,
	minColor: V.default.number,
	maxColor: V.default.number,
	minColorIndex: V.default.number,
	maxColorIndex: V.default.number,
	minMonochrome: V.default.number,
	maxMonochrome: V.default.number,
	minResolution: H,
	maxResolution: H,
	...Bi
}, Hi = {
	all: {
		...Li,
		...Vi
	},
	types: Li,
	matchers: Ri,
	features: Vi
}, Ui = (e) => `not ${e}`, Wi = (e, t) => {
	let n = Pi(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? Ui(n) : `(${n}: ${t})`;
}, Gi = (e) => e.join(" and "), Ki = (e) => {
	let t = [];
	return Object.keys(Hi.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(Wi(n, r));
	}), Gi(t);
}, qi = (0, T.createContext)(void 0), Ji = (e) => e.query || Ki(e), Yi = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[Pi(n)] = e[n], t), {});
}, Xi = () => {
	let e = (0, T.useRef)(!1);
	return (0, T.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, Zi = (e) => {
	let t = (0, T.useContext)(qi), n = () => Yi(e) || Yi(t), [r, i] = (0, T.useState)(n);
	return (0, T.useEffect)(() => {
		let e = n();
		Fi(r, e) || i(e);
	}, [e, t]), r;
}, Qi = (e) => {
	let t = () => Ji(e), [n, r] = (0, T.useState)(t);
	return (0, T.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, $i = (e, t) => {
	let n = () => (0, Ii.default)(e, t || {}, !!t), [r, i] = (0, T.useState)(n), a = Xi();
	return (0, T.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, ea = (e) => {
	let [t, n] = (0, T.useState)(e.matches);
	return (0, T.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, ta = (e, t, n) => {
	let r = Zi(t), i = Qi(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = $i(i, r), o = ea(a), s = Xi();
	return (0, T.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, T.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, na = 0, ra = (e = "id") => (na += 1, `${e}${na}`), ia = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function aa(e, t, n) {
	class r extends T.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case ia.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case ia.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case ia.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case ia.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ T.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function oa({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ T.createElement("span", {
			className: (0, E.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ T.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ T.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("span", {
		id: t || ra("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ T.createElement("span", { className: "sr-only" }, i));
}
oa.propTypes = {
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
}, oa.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var sa = aa(oa, "Icon", { className: {
	deprType: ia.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), ca = /* @__PURE__ */ T.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ T.createElement(Xe, {
	size: r,
	...i,
	className: (0, E.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ T.createElement(sa, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ T.createElement(sa, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), la = (e) => /* @__PURE__ */ T.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), ua = (e) => /* @__PURE__ */ T.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), da = (e) => /* @__PURE__ */ T.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), fa = (e) => /* @__PURE__ */ T.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), pa = (e) => /* @__PURE__ */ T.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), ma = (e) => /* @__PURE__ */ T.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), ha = (e) => /* @__PURE__ */ T.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), ga = (e) => /* @__PURE__ */ T.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ T.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), _a = [
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
], va = [
	"hover",
	"click",
	"focus"
];
function ya(e) {
	return /* @__PURE__ */ T.createElement(gi, { ...e });
}
function ba(e) {
	return /* @__PURE__ */ T.createElement(Si, { ...e }, e.children);
}
var xa = V.default.oneOf(va);
ya.propTypes = {
	children: V.default.node.isRequired,
	container: V.default.oneOfType([V.default.elementType, V.default.func]),
	onEnter: V.default.func,
	onEntered: V.default.func,
	onEntering: V.default.func,
	onExit: V.default.func,
	onExited: V.default.func,
	onExiting: V.default.func,
	onHide: V.default.func,
	placement: V.default.oneOf(_a),
	popperConfig: V.default.shape({}),
	rootClose: V.default.bool,
	rootCloseEvent: V.default.oneOf(["click", "mousedown"]),
	show: V.default.bool,
	target: V.default.oneOfType([V.default.elementType, V.default.func]),
	transition: V.default.oneOfType([V.default.object, V.default.bool])
}, ba.propTypes = {
	children: V.default.oneOfType([V.default.element, V.default.func]).isRequired,
	overlay: V.default.oneOfType([V.default.element, V.default.func]).isRequired,
	defaultShow: V.default.bool,
	delay: V.default.oneOfType([V.default.number, V.default.shape({})]),
	flip: V.default.bool,
	onHide: V.default.func,
	onToggle: V.default.func,
	placement: V.default.oneOf(_a),
	popperConfig: V.default.shape({}),
	show: V.default.bool,
	target: V.default.instanceOf(EventTarget),
	trigger: V.default.oneOfType([xa, V.default.arrayOf(xa)])
}, ya.defaultProps = {
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
	transition: ze
}, ba.defaultProps = {
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
var Sa = [
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
], Ca = /* @__PURE__ */ T.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ T.createElement(Di, {
	...n,
	className: (0, E.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Ca.propTypes = {
	...Di.propTypes,
	id: V.default.string.isRequired,
	placement: V.default.oneOf(Sa),
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
}, Ca.defaultProps = {
	...Ca.defaultProps,
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
var wa = /* @__PURE__ */ T.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = sa, isActive: u = !1, children: d, ...f }, p) => {
	let m = n ? "inverse-" : "", h = u ? `${c}-` : "", g = l;
	return /* @__PURE__ */ T.createElement("button", {
		"aria-label": t,
		className: (0, E.default)("btn-icon", `btn-icon-${m}${c}`, `btn-icon-${s}`, { [`btn-icon-${m}${h}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: p,
		...f
	}, /* @__PURE__ */ T.createElement("span", { className: "btn-icon__icon-container" }, g && /* @__PURE__ */ T.createElement(g, {
		className: (0, E.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Ta({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ T.createElement(ba, {
		placement: e,
		overlay: /* @__PURE__ */ T.createElement(Ca, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ T.createElement(wa, { ...n }));
}
wa.IconButtonWithTooltip = Ta;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Ea(e) {
	return typeof e == "string" || e instanceof String;
}
function Da(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Oa(e, t) {
	return Array.isArray(t) ? Oa(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
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
function ka(e) {
	switch (e) {
		case U.LEFT: return U.FORCE_LEFT;
		case U.RIGHT: return U.FORCE_RIGHT;
		default: return e;
	}
}
function Aa(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ja(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!ja(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!ja(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Ma = class {
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
function Na(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? W.MaskedRegExp : Ea(e) ? W.MaskedPattern : e === Date ? W.MaskedDate : e === Number ? W.MaskedNumber : Array.isArray(e) || e === Array ? W.MaskedDynamic : W.Masked && e.prototype instanceof W.Masked ? e : W.Masked && e instanceof W.Masked ? e.constructor : e instanceof Function ? W.MaskedFunction : (console.warn("Mask not found for mask", e), W.Masked);
}
function Pa(e) {
	if (!e) throw Error("Options in not defined");
	if (W.Masked) {
		if (e.prototype instanceof W.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof W.Masked ? { mask: e } : Da(e) && e.mask instanceof W.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Oa(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Da(e) ? { ...e } : { mask: e };
}
function Fa(e) {
	if (W.Masked && e instanceof W.Masked) return e;
	let t = Pa(e), n = Na(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
W.createMask = Fa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var Ia = class {
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
W.MaskElement = Ia;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var La = 90, Ra = 89, za = class extends Ia {
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
		if (this._handlers.redo && (e.keyCode === La && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Ra && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === La && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
W.HTMLMaskElement = za;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var Ba = class extends za {
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
W.HTMLMaskElement = za;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var Va = class extends za {
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
W.HTMLContenteditableMaskElement = Va;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Ha = class e {
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
Ha.MAX_LENGTH = 100, W.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof Ia ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Va(e) : new Ba(e), this.masked = Fa(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Ha(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof W.Masked) && this.masked.constructor === Na(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof W.Masked ? e : Fa({ mask: e });
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
		let t = new Ma({
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
var Ua = class {
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
}, Wa = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Ua(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Ea(e) && (e = new Ua(String(e))), e.appendTo(this);
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
		if (!Ea(e)) throw Error("value should be string");
		let r = Ea(n) ? new Ua(String(n)) : n;
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
		s && (r = ka(r), c = this.extractInput(0, a, { raw: !0 }));
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
		return !ja(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new G();
	}
};
Wa.DEFAULTS = { skipInvalid: !0 }, Wa.EMPTY_VALUES = [
	void 0,
	null,
	""
], W.Masked = Wa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var Ga = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Ea(t) ? new Ua(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof Ua) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof W.MaskedPattern)) return new Ua(this.toString()).appendTo(t);
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
			let n = "chunks" in t ? new e() : new Ua();
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
}, Ka = class {
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
}, qa = class {
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
		return new Ua("");
	}
	appendTail(e) {
		return Ea(e) && (e = new Ua(String(e))), e.appendTo(this);
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
}, Ja = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = Fa(s), Object.assign(this, {
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
Ja.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, W.MaskedRegExp = class extends Wa {
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
var Ya = class e extends Wa {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, Ja.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Pa(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? Fa(i) : new W.RepeatBlock(i);
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
			let c = s ? new Ja({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Pa(t[o]),
				parent: this
			}) : new qa({
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
		let n = new Ga();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof Ga && (a.blockIndex = t), n.extend(a);
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
		let n = new Ka(this, e);
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
Ya.DEFAULTS = {
	...Wa.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, Ya.STOP_CHAR = "`", Ya.ESCAPE_CHAR = "\\", Ya.InputDefinition = Ja, Ya.FixedDefinition = qa, W.MaskedPattern = Ya;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var Xa = class extends Ya {
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
W.MaskedRange = Xa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Za = "d{.}`m{.}`Y", Qa = class e extends Ya {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Ea(t) ? t : n
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
			mask: Ea(n) ? n : r,
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
Qa.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: Xa,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: Xa,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: Xa,
		from: 1900,
		to: 9999
	}
}), Qa.DEFAULTS = {
	...Ya.DEFAULTS,
	mask: Date,
	pattern: Za,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, W.MaskedDate = Qa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var $a = class e extends Wa {
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
			let { expose: t, ...n } = Pa(e), r = Fa({
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
			return ja(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
$a.DEFAULTS = {
	...Wa.DEFAULTS,
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
}, W.MaskedDynamic = $a;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var eo = class e extends Ya {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Ua("", e);
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
eo.DEFAULTS = {
	...Ya.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, W.MaskedEnum = eo, W.MaskedFunction = class extends Wa {
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
var to, no = class e extends Wa {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Aa(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Aa).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Aa(this.thousandsSeparator), "g");
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
to = no, no.UNMASKED_RADIX = ".", no.EMPTY_VALUES = [...Wa.EMPTY_VALUES, 0], no.DEFAULTS = {
	...Wa.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [to.UNMASKED_RADIX],
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
}, W.MaskedNumber = no;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var ro = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function io(e, t, n) {
	t === void 0 && (t = ro.MASKED), n === void 0 && (n = ro.MASKED);
	let r = Fa(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function ao(e, t, n, r) {
	return io(t, n, r)(e);
}
W.PIPE_TYPE = ro, W.createPipe = io, W.pipe = ao, W.RepeatBlock = class extends Ya {
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
		let { repeat: t, ...n } = Pa(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = Fa(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(Fa(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
var oo = {
	mask: V.default.oneOfType([
		V.default.array,
		V.default.func,
		V.default.string,
		V.default.instanceOf(RegExp),
		V.default.oneOf([
			Date,
			Number,
			W.Masked
		]),
		V.default.instanceOf(W.Masked)
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
}, so = Object.keys(oo).filter((e) => e !== "value"), co = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], lo = so.filter((e) => co.indexOf(e) < 0);
function uo(e) {
	var t;
	let n = (t = class extends T.Component {
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
			return Object.keys(t).filter((e) => lo.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return so.forEach((e) => {
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
			return T.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = oo, T.forwardRef((e, t) => T.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var fo = uo((e) => {
	let { inputRef: t, ...n } = e;
	return T.createElement("input", {
		...n,
		ref: t
	});
}), po = T.forwardRef((e, t) => T.createElement(fo, {
	...e,
	ref: t
})), mo = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), ho = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, go = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, T.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, _o = (e, t) => {
	let [n, r] = (0, T.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(ra(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, T.useState)(e);
		return (0, T.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, vo = (e) => e, yo = /* @__PURE__ */ T.createContext({
	getControlProps: vo,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: vo,
	getDescriptorProps: vo,
	hasFormGroupProvider: !1
}), bo = () => T.useContext(yo);
function xo(e) {
	let [t, n] = (0, T.useState)(e);
	return [t, (e) => {
		(0, T.useEffect)(() => n(e), [e]);
	}];
}
function So({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, T.useMemo)(() => t || ra("form-field"), [t]), [o, s] = _o(a), [c, l] = _o(a), [u, d] = xo(!1), f = {
		getControlProps: (0, T.useCallback)((e) => {
			let t = u ? c : void 0;
			return mo({
				...e,
				"aria-describedby": (0, E.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, E.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ T.createElement(yo.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Co = {
	SMALL: "sm",
	LARGE: "lg"
}, wo = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, To = {
	[wo.DEFAULT]: null,
	[wo.VALID]: ua,
	[wo.INVALID]: fa,
	[wo.WARNING]: ga,
	[wo.CRITERIA_EMPTY]: ha,
	[wo.CRITERIA_VALID]: da,
	[wo.CRITERIA_INVALID]: la
}, Eo = ({ isInvalid: e, isValid: t }) => t ? wo.VALID : e ? wo.INVALID : wo.DEFAULT;
function Do({ type: e, customIcon: t }) {
	if (t) return t;
	let n = To[e];
	return n ? /* @__PURE__ */ T.createElement(sa, { src: n }) : null;
}
Do.propTypes = {
	type: V.default.oneOf(Object.values(wo)),
	customIcon: V.default.node
}, Do.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Oo({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, E.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ T.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ T.createElement(Do, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ T.createElement("div", null, e));
}
Oo.propTypes = {
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
}, Oo.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function ko({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = bo(), a = n(t), o = (0, E.default)("pgn__form-control-description", t.className), s = t.type || Eo({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ T.createElement(Oo, {
		...a,
		className: o,
		type: s
	}, e);
}
ko.propTypes = {
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
}, ko.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function Ao({ children: e }) {
	let { controlId: t } = bo();
	return /* @__PURE__ */ T.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ T.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ T.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
Ao.propTypes = { children: V.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function jo({ children: e, location: t }) {
	return /* @__PURE__ */ T.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
jo.propTypes = {
	children: V.default.node.isRequired,
	location: V.default.oneOf(["leading", "trailing"])
}, jo.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Mo({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = bo(a), s = a.size || o.size;
	return /* @__PURE__ */ T.createElement("div", {
		className: (0, E.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Co.LARGE,
			"pgn__form-control-decorator-group-sm": s === Co.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ T.createElement(jo, { location: "leading" }, t), n && /* @__PURE__ */ T.createElement(jo, { location: "trailing" }, n), r && /* @__PURE__ */ T.createElement(Ao, null, r));
}
Mo.propTypes = {
	children: V.default.node.isRequired,
	leadingElement: V.default.node,
	trailingElement: V.default.node,
	floatingLabel: V.default.node,
	className: V.default.string,
	size: V.default.oneOf([Co.SMALL, Co.LARGE])
}, Mo.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var No = /* @__PURE__ */ T.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = bo(), h = T.useRef(), g = u || h, _ = l.size || m.size, [v, y] = go({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, T.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, T.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: ho(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ T.createElement(Mo, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ T.createElement(Ur, {
		as: c ? po : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, E.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
No.Feedback = ko, No.Description = ko, No.propTypes = {
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
}, No.defaultProps = {
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
function Po({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = bo(), o = (0, E.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Co.LARGE,
		"pgn__form-label-sm": r === Co.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ T.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Fo({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ T.createElement(a ?? "div", {
		...o,
		className: (0, E.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ T.createElement(So, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Io = /* @__PURE__ */ T.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), Lo = () => (0, T.useContext)(Io);
function Ro({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? ho(n, e.onBlur) : n,
			onFocus: e.onFocus ? ho(r, e.onFocus) : r,
			onChange: e.onChange ? ho(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ T.createElement(Io.Provider, { value: c }, e);
}
Ro.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string.isRequired,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.string,
	defaultValue: V.default.string
}, Ro.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var zo = /* @__PURE__ */ T.forwardRef((e, t) => {
	let { getControlProps: n } = bo(), { getRadioControlProps: r, hasRadioSetProvider: i } = Lo(), a = n({
		...e,
		className: (0, E.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ T.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
zo.propTypes = { className: V.default.string }, zo.defaultProps = { className: void 0 };
var Bo = /* @__PURE__ */ T.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ T.createElement(So, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ T.createElement("div", { className: (0, E.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ T.createElement(zo, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ T.createElement("div", null, /* @__PURE__ */ T.createElement(Po, { className: r }, e), i && /* @__PURE__ */ T.createElement(ko, { hasIcon: !1 }, i)))));
Bo.propTypes = {
	id: V.default.string,
	children: V.default.node.isRequired,
	className: V.default.string,
	controlClassName: V.default.string,
	labelClassName: V.default.string,
	description: V.default.node,
	isInvalid: V.default.bool,
	isValid: V.default.bool,
	disabled: V.default.bool
}, Bo.defaultProps = {
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
function Vo({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ T.createElement(e, {
		className: (0, E.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Vo.propTypes = {
	as: V.default.elementType,
	className: V.default.string,
	isInline: V.default.bool,
	children: V.default.node
}, Vo.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function Ho({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = bo();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ T.createElement(Ro, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ T.createElement(Vo, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
Ho.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.string,
	defaultValue: V.default.string,
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, Ho.defaultProps = {
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
var Uo, Wo = new Uint8Array(16);
function Go() {
	if (!Uo && (Uo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Uo)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Uo(Wo);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var K = [];
for (let e = 0; e < 256; ++e) K.push((e + 256).toString(16).slice(1));
function Ko(e, t = 0) {
	return K[e[t + 0]] + K[e[t + 1]] + K[e[t + 2]] + K[e[t + 3]] + "-" + K[e[t + 4]] + K[e[t + 5]] + "-" + K[e[t + 6]] + K[e[t + 7]] + "-" + K[e[t + 8]] + K[e[t + 9]] + "-" + K[e[t + 10]] + K[e[t + 11]] + K[e[t + 12]] + K[e[t + 13]] + K[e[t + 14]] + K[e[t + 15]];
}
var qo = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Jo(e, t, n) {
	if (qo.randomUUID && !t && !e) return qo.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || Go)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Ko(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var Yo = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Xo = (e, t) => t.every((t) => e[t] !== void 0), Zo = (e, t) => Yo(e, (e) => Array.isArray(t) ? Xo(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Qo = /* @__PURE__ */ T.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, E.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ T.createElement(wi, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ T.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function $o({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function es({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function ts({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && $o({
		event: e,
		currentIndex: s,
		activeElement: a
	}), es({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function ns(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, T.useRef)();
	return (0, T.useEffect)(() => {
		let e = (e) => {
			ts({
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
var rs = b({
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
}), is = /* @__PURE__ */ (0, T.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: c, isSelectionRequired: l, selectionRequiredErrorMessageText: u, hasCustomError: d, customErrorMessageText: f, onChange: p, helpMessage: m, ...h }, g) => {
	let _ = s(), v = (0, T.useRef)(), y = ns({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, T.useState)(!1), [S, C] = (0, T.useState)(!1), [w, E] = (0, T.useState)(!1), [D, O] = (0, T.useState)(!1), [k, A] = (0, T.useState)(i?.userProvidedText || ""), [j, M] = (0, T.useState)([]), [N, P] = (0, T.useState)(null), [F, I] = (0, T.useState)(!0), [L, R] = (0, T.useState)(""), z = (e) => {
		P(e);
	}, ee = () => {
		M([]), x(!1), P(null);
	}, te = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		E(!0), O(!0), A(n), p && (!i || i && n !== i.selectionValue) && p({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ee(), t && t(e);
	};
	function ne(t = "") {
		let n = T.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? Jo();
			return /* @__PURE__ */ T.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => te(e, n),
				id: i,
				onFocus: () => z(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let re = () => {
		M(ne(k)), I(!0), R(""), x(!0);
	}, ie = () => {
		b ? ee() : re();
	}, ae = /* @__PURE__ */ T.createElement(wa, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? ma : pa,
		iconAs: sa,
		size: "sm",
		variant: "secondary",
		alt: b ? _.formatMessage(rs.iconButtonClosed) : _.formatMessage(rs.iconButtonOpened),
		onClick: ie
	}), oe = () => {
		C(!0);
	}, se = () => {
		if (d) {
			I(!1), R(f);
			return;
		}
		if (o && !w) {
			I(!1), R(c);
			return;
		}
		if (w && l && !D) {
			I(!1), R(u);
			return;
		}
		I(!0), R("");
	};
	(0, T.useImperativeHandle)(g, () => ({ updateErrorStateAndErrorMessage: se }));
	let ce = () => {
		C(!1), ee(), se();
	}, le = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), v && v.current.focus(), ee();
				return;
			}
			e.key === "Tab" && ce();
		}
	}, ue = (e) => {
		y.current && !y.current.contains(e.target) && S && ce();
	};
	(0, T.useEffect)(() => (document.addEventListener("keydown", le), document.addEventListener("click", ue, !0), () => {
		document.removeEventListener("click", ue, !0), document.removeEventListener("keydown", le);
	})), (0, T.useEffect)(() => {
		A(i ? i.userProvidedText ?? "" : ""), E(!!i && !!i.userProvidedText), O(!!i && !!i.selectionValue);
	}, [i]);
	let de = () => {
		re();
	}, fe = (e) => {
		let t = e.target.value;
		if (!t.length) {
			A(""), E(!1), O(!1), M([]), ee(), p && p({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0);
		let n = ne(t);
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
	}, { getControlProps: pe } = bo(), B = pe(h);
	return /* @__PURE__ */ T.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: oe
	}, /* @__PURE__ */ T.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${j.length} options found`), /* @__PURE__ */ T.createElement(So, {
		controlId: B.id,
		isInvalid: !F
	}, /* @__PURE__ */ T.createElement(No, {
		ref: v,
		"aria-expanded": (j.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: k,
		"aria-invalid": L,
		"aria-activedescendant": N,
		onChange: fe,
		onClick: de,
		trailingElement: ae,
		"data-testid": "autosuggest-textbox-input",
		...B
	}), m && F && /* @__PURE__ */ T.createElement(ko, { type: "default" }, m), !F && /* @__PURE__ */ T.createElement(ko, {
		type: "invalid",
		"feedback-for": B.name
	}, L)), /* @__PURE__ */ T.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ T.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ T.createElement(Qo, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : j.length > 0 && j));
});
is.defaultProps = {
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
}, is.propTypes = {
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
	valueRequiredErrorMessageText: Zo(V.default.string, "isValueRequired"),
	isSelectionRequired: V.default.bool,
	selectionRequiredErrorMessageText: Zo(V.default.string, "isSelectionRequired"),
	hasCustomError: V.default.bool,
	customErrorMessageText: Zo(V.default.string, "hasCustomError"),
	name: V.default.string,
	readOnly: V.default.bool,
	children: V.default.node,
	screenReaderText: V.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function as({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, E.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, T.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ T.createElement(T.Fragment, null, i && /* @__PURE__ */ T.createElement(sa, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ T.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ T.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ T.createElement(sa, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function os({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ T.createElement(as, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, E.default)(t, "dropdown-item"),
		...r
	}, e);
}
os.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, os.propTypes = {
	className: V.default.string,
	children: V.default.string,
	onClick: V.default.func
};
var ss = /* @__PURE__ */ T.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), cs = () => (0, T.useContext)(ss);
function ls({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? ho(n, e.onBlur) : n,
			onFocus: e.onFocus ? ho(r, e.onFocus) : r,
			onChange: e.onChange ? ho(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ T.createElement(ss.Provider, { value: c }, e);
}
ls.propTypes = {
	children: V.default.node.isRequired,
	name: V.default.string,
	onBlur: V.default.func,
	onFocus: V.default.func,
	onChange: V.default.func,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string)
}, ls.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var us = /* @__PURE__ */ T.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = cs(), a = T.useRef(), o = n || a, { getControlProps: s } = bo(), c = s({
		...t,
		className: (0, E.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), T.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ T.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
us.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, us.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ds = /* @__PURE__ */ T.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = cs(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = bo();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ T.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ T.createElement(So, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ T.createElement("div", {
		className: (0, E.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ T.createElement("div", null, /* @__PURE__ */ T.createElement(Po, { className: r }, e), i && /* @__PURE__ */ T.createElement(ko, { hasIcon: !1 }, i))));
});
ds.propTypes = {
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
}, ds.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: us,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var fs = /* @__PURE__ */ T.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = T.useRef(), i = n || r, { getControlProps: a } = bo(), o = a({
		...t,
		className: (0, E.default)("pgn__form-switch-input", t.className)
	});
	return T.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ T.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
fs.propTypes = {
	isIndeterminate: V.default.bool,
	className: V.default.string
}, fs.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ps = /* @__PURE__ */ T.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ T.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ T.createElement(ds, {
	className: (0, E.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: fs,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ T.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
ps.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	labelClassName: V.default.string,
	helperText: V.default.node,
	floatLabelLeft: V.default.bool
}, ps.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function ms({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = bo();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ T.createElement(ls, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ T.createElement(Vo, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
ms.propTypes = {
	children: V.default.node.isRequired,
	className: V.default.string,
	name: V.default.string.isRequired,
	value: V.default.arrayOf(V.default.string),
	defaultValue: V.default.arrayOf(V.default.string),
	isInline: V.default.bool,
	onChange: V.default.func,
	onFocus: V.default.func,
	onBlur: V.default.func
}, ms.defaultProps = {
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
var hs = ms, q = ti;
q.Control = No, q.Radio = Bo, q.RadioSet = Ho, q.Autosuggest = is, q.AutosuggestOption = os, q.Checkbox = ds, q.CheckboxSet = ms, q.Switch = ps, q.SwitchSet = hs, q.Label = Po, q.Group = Fo, q.Text = Oo;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var gs = /* @__PURE__ */ T.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function _s({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, T.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ T.createElement(gs.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var vs = "right-scroll-bar-position", ys = "width-before-scroll-bar", bs = "with-scroll-bars-hidden", xs = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ss(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Cs(e, t) {
	var n = (0, T.useState)(function() {
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
var ws = typeof window < "u" ? T.useLayoutEffect : T.useEffect, Ts = /* @__PURE__ */ new WeakMap();
function Es(e, t) {
	var n = Cs(t || null, function(t) {
		return e.forEach(function(e) {
			return Ss(e, t);
		});
	});
	return ws(function() {
		var t = Ts.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ss(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ss(e, a);
			});
		}
		Ts.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Ds(e) {
	return e;
}
function Os(e, t) {
	t === void 0 && (t = Ds);
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
function ks(e, t) {
	return t === void 0 && (t = Ds), Os(e, t);
}
function As(e) {
	e === void 0 && (e = {});
	var t = Os(null);
	return t.options = g({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var js = function(e) {
	var t = e.sideCar, n = p(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return T.createElement(r, g({}, n));
};
js.isSideCarExport = !0;
function Ms(e, t) {
	return e.useMedium(t), js;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Ns = As(), Ps = function() {}, Fs = T.forwardRef(function(e, t) {
	var n = T.useRef(null), r = T.useState({
		onScrollCapture: Ps,
		onWheelCapture: Ps,
		onTouchMoveCapture: Ps
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, m = e.noRelative, h = e.noIsolation, _ = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, x = e.gapMode, S = p(e, [
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
	]), C = f, w = Es([n, t]), E = g(g({}, S), i);
	return T.createElement(T.Fragment, null, u && T.createElement(C, {
		sideCar: Ns,
		removeScrollBar: l,
		shards: d,
		noRelative: m,
		noIsolation: h,
		inert: _,
		setCallbacks: a,
		allowPinchZoom: !!v,
		lockRef: n,
		gapMode: x
	}), o ? T.cloneElement(T.Children.only(s), g(g({}, E), { ref: w })) : T.createElement(b, g({}, E, {
		className: c,
		ref: w
	}), s));
});
Fs.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Fs.classNames = {
	fullWidth: ys,
	zeroRight: vs
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Is = "data-focus-lock", Ls = "data-focus-lock-disabled", Rs = "data-no-focus-lock", zs = "data-autofocus-inside", Bs = "data-no-autofocus", Vs = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Hs = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Vs
	}), n, n && /* @__PURE__ */ T.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Vs
	}));
};
Hs.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Us = ks({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ws = ks(), Gs = ks(), Ks = As({
	async: !0,
	ssr: typeof document < "u"
}), qs = /* @__PURE__ */ (0, T.createContext)(void 0), Js = [], Ys = /* @__PURE__ */ (0, T.forwardRef)(function(e, t) {
	var r, i = (0, T.useState)(), a = i[0], o = i[1], s = (0, T.useRef)(), c = (0, T.useRef)(!1), l = (0, T.useRef)(null), u = (0, T.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, w = e.whiteList, E = e.hasPositiveIndices, D = e.shards, O = D === void 0 ? Js : D, k = e.as, A = k === void 0 ? "div" : k, j = e.lockProps, M = j === void 0 ? {} : j, N = e.sideCar, P = e.returnFocus, F = P === void 0 ? !1 : P, I = e.focusOptions, L = e.onActivation, R = e.onDeactivation, z = (0, T.useState)({})[0], ee = (0, T.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		s.current && L && L(s.current), c.current = !0, u();
	}, [L]), te = (0, T.useCallback)(function() {
		c.current = !1, R && R(s.current), u();
	}, [R]), ne = (0, T.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof F == "function" ? F(n) : F;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [F]), re = (0, T.useCallback)(function(e) {
		c.current && Us.useMedium(e);
	}, []), ie = Ws.useMedium, ae = (0, T.useCallback)(function(e) {
		s.current !== e && (s.current = e, o(e));
	}, []), oe = n((r = {}, r[Ls] = p && "disabled", r[Is] = S, r), M), se = h !== !0, ce = se && h !== "tail", le = Es([t, ae]), ue = (0, T.useMemo)(function() {
		return {
			observed: s,
			shards: O,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		O,
		s
	]);
	return /* @__PURE__ */ T.createElement(T.Fragment, null, se && [/* @__PURE__ */ T.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: Vs
	}), E ? /* @__PURE__ */ T.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: Vs
	}) : null], !p && /* @__PURE__ */ T.createElement(N, {
		id: z,
		sideCar: Ks,
		observed: a,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: w,
		shards: O,
		onActivation: ee,
		onDeactivation: te,
		returnFocus: ne,
		focusOptions: I,
		noFocusGuards: h
	}), /* @__PURE__ */ T.createElement(A, n({ ref: le }, oe, {
		className: C,
		onBlur: ie,
		onFocus: re
	}), /* @__PURE__ */ T.createElement(qs.Provider, { value: ue }, d)), ce && /* @__PURE__ */ T.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: Vs
	}));
});
Ys.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Xs(e) {
	setTimeout(e, 1);
}
var Zs = function(e) {
	return e && "current" in e ? e.current : e;
}, Qs = Ys, $s = As(), ec = "data-focus-on-hidden", tc = { preventScroll: !0 }, nc = T.forwardRef(function(e, t) {
	var n = T.useState(!1), r = n[0], i = n[1], a = T.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, u = e.shards, d = e.crossFrame, f = e.enabled, m = f === void 0 ? !0 : f, h = e.scrollLock, _ = h === void 0 ? !0 : h, v = e.focusLock, y = v === void 0 ? !0 : v, b = e.returnFocus, x = b === void 0 ? !0 : b, S = e.inert, C = e.allowPinchZoom, w = e.sideCar, E = e.className, D = e.shouldIgnore, O = e.preventScrollOnFocus, k = e.style, A = e.as, j = e.gapMode, M = p(e, [
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
	]), N = w, P = g(g({}, r), {
		as: A,
		style: k,
		sideCar: w,
		shards: u,
		allowPinchZoom: C,
		gapMode: j,
		inert: S,
		enabled: m && _
	}), F = T.useCallback(function(e) {
		s(e);
	}, []), I = T.useCallback(function() {
		s(null);
	}, []);
	return T.createElement(T.Fragment, null, T.createElement(Qs, {
		ref: t,
		sideCar: w,
		disabled: !(m && y),
		returnFocus: x,
		autoFocus: l,
		shards: u,
		crossFrame: d,
		onActivation: F,
		onDeactivation: I,
		className: E,
		whiteList: D,
		lockProps: P,
		focusOptions: O ? tc : void 0,
		as: Fs
	}, c), m && T.createElement(N, g({}, M, {
		sideCar: $s,
		setLockProps: i,
		shards: u,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function rc(e) {
	"@babel/helpers - typeof";
	return rc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, rc(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function ic(e, t) {
	if (rc(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (rc(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function ac(e) {
	var t = ic(e, "string");
	return rc(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function oc(e, t, n) {
	return (t = ac(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function sc(e, t) {
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
			j(t, e);
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
				return /* @__PURE__ */ T.createElement(r, this.props);
			}, t;
		}(T.PureComponent);
		return oc(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var cc = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, lc = function(e) {
	return Array.isArray(e) ? e : [e];
}, uc = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, dc = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, fc = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, pc = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, mc = function(e) {
	return e.hasAttribute("inert");
}, hc = function(e, t) {
	return !e || pc(e) || !dc(e) && !mc(e) && t(fc(e));
}, gc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = hc(t, gc.bind(void 0, e));
	return e.set(t, r), r;
}, _c = function(e, t) {
	return e && !pc(e) ? wc(e) ? t(fc(e)) : !1 : !0;
}, vc = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = _c(t, vc.bind(void 0, e));
	return e.set(t, r), r;
}, yc = function(e) {
	return e.dataset;
}, bc = function(e) {
	return e.tagName === "BUTTON";
}, xc = function(e) {
	return e.tagName === "INPUT";
}, Sc = function(e) {
	return xc(e) && e.type === "radio";
}, Cc = function(e) {
	return !((xc(e) || bc(e)) && (e.type === "hidden" || e.disabled));
}, wc = function(e) {
	var t = e.getAttribute(Bs);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, Tc = function(e) {
	return !!(e && yc(e)?.focusGuard);
}, Ec = function(e) {
	return !Tc(e);
}, Dc = function(e) {
	return !!e;
}, Oc = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, kc = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Ac = function(e, t, n) {
	return cc(e).map(function(e, t) {
		var r = kc(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Oc);
}, jc = [
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
].join(","), Mc = `${jc}, [data-focus-guard]`, Nc = function(e, t) {
	return cc((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Mc : jc) ? [n] : [], Nc(n));
	}, []);
}, Pc = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Fc([e.contentDocument.body], t) : [e];
}, Fc = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = Nc(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Pc(e, t);
		}));
		return e.concat(a, n.parentNode ? cc(n.parentNode.querySelectorAll(jc)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Ic = function(e) {
	return cc(e.querySelectorAll(`[${zs}]`)).map(function(e) {
		return Fc([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Lc = function(e, t) {
	return cc(e).filter(function(e) {
		return gc(t, e);
	}).filter(function(e) {
		return Cc(e);
	});
}, Rc = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), cc(e).filter(function(e) {
		return vc(t, e);
	});
}, zc = function(e, t, n) {
	return Ac(Lc(Fc(e, n), t), !0, n);
}, Bc = function(e, t) {
	return Ac(Lc(Fc(e), t), !1);
}, Vc = function(e, t) {
	return Lc(Ic(e), t);
}, Hc = function(e, t) {
	return e.shadowRoot ? Hc(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : cc(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Hc(n, t) : !1;
		}
		return Hc(e, t);
	});
}, Uc = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Wc = function(e) {
	return e.parentNode ? Wc(e.parentNode) : e;
}, Gc = function(e) {
	return lc(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Is);
		return e.push.apply(e, n ? Uc(cc(Wc(t).querySelectorAll(`[${Is}="${n}"]:not([${Ls}="disabled"])`))) : [t]), e;
	}, []);
}, Kc = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, qc = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? qc(t.shadowRoot) : t instanceof HTMLIFrameElement && Kc(function() {
			return t.contentWindow.document;
		}) ? qc(t.contentWindow.document) : t;
	}
}, Jc = function(e, t) {
	return e === t;
}, Yc = function(e, t) {
	return !!cc(e.querySelectorAll("iframe")).some(function(e) {
		return Jc(e, t);
	});
}, Xc = function(e, t) {
	return t === void 0 && (t = qc(uc(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Gc(e).some(function(e) {
		return Hc(e, t) || Yc(e, t);
	});
}, Zc = function(e) {
	e === void 0 && (e = document);
	var t = qc(e);
	return t ? cc(e.querySelectorAll(`[${Rs}]`)).some(function(e) {
		return Hc(e, t);
	}) : !1;
}, Qc = function(e, t) {
	return t.filter(Sc).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, $c = function(e, t) {
	return Sc(e) && e.name ? Qc(e, t) : e;
}, el = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add($c(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, tl = function(e) {
	return e[0] && e.length > 1 ? $c(e[0], e) : e[0];
}, nl = function(e, t) {
	return e.indexOf($c(t, e));
}, rl = "NEW_FOCUS", il = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = Tc(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? rl : d;
		if (d === -1) return rl;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = el(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = nl(e, t[0]), C = nl(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, al = function(e) {
	return function(t) {
		var n = yc(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, ol = function(e, t, n) {
	var r = Rc(e.map(function(e) {
		return e.node;
	}).filter(al(n)));
	return r && r.length ? tl(r) : tl(Rc(t));
}, sl = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && sl(e.parentNode.host || e.parentNode, t), t;
}, cl = function(e, t) {
	for (var n = sl(e), r = sl(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, ll = function(e, t, n) {
	var r = lc(e), i = lc(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = cl(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = cl(a, e);
			t && (o = !o || Hc(t, o) ? t : cl(t, o));
		});
	}), o;
}, ul = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Vc(n, t));
	}, []);
}, dl = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Dc);
}, fl = function(e, t) {
	var n = qc(lc(e).length > 0 ? document : uc(e).ownerDocument), r = Gc(e).filter(Ec), i = ll(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Bc(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Ec(t);
	});
	if (s[0]) {
		var c = Bc([i], a).map(function(e) {
			return e.node;
		}), l = dl(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = il(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = ol(o, d, ul(r, a)) || ol(o, u, ul(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, pl = function(e) {
	var t = Gc(e).filter(Ec), n = Ac(Fc([ll(e, e, t)], !0), !0, !0), r = Fc(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: Tc(t)
		};
	});
}, ml = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, hl = 0, gl = !1, _l = function(e, t, n) {
	n === void 0 && (n = {});
	var r = fl(e, t);
	if (!gl && r) {
		if (hl > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), gl = !0, setTimeout(function() {
				gl = !1;
			}, 1);
			return;
		}
		hl++, ml(r.node, n.focusOptions), hl--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function vl(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var yl = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: vl(n),
		parent: vl(n.parentElement),
		left: vl(n.previousElementSibling),
		right: vl(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: vl(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, bl = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = zc([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, xl = function(e) {
	var t = yl(e);
	return function() {
		return bl(t);
	};
}, Sl = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = lc(t);
	if (r.every(function(t) {
		return !Hc(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? zc(r, /* @__PURE__ */ new Map()) : Bc(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Cl = function(e, t) {
	var n = t ? zc(lc(e), /* @__PURE__ */ new Map()) : Bc(lc(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, wl = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, Tl = function(e, t, n) {
	t === void 0 && (t = {});
	var r = wl(t), i = Sl(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && ml(a.node, r.focusOptions);
	}
}, El = function(e, t) {
	t === void 0 && (t = {}), Tl(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, Dl = function(e, t) {
	t === void 0 && (t = {}), Tl(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, Ol = function(e, t, n) {
	var r = Cl(e, t.onlyTabbable ?? !0)[n];
	r && ml(r.node, t.focusOptions);
}, kl = function(e, t) {
	t === void 0 && (t = {}), Ol(e, t, "first");
}, Al = function(e, t) {
	t === void 0 && (t = {}), Ol(e, t, "last");
}, jl = function() {
	return document && document.activeElement === document.body;
}, Ml = function() {
	return jl() || Zc();
}, Nl = null, Pl = null, Fl = function() {
	return null;
}, Il = null, Ll = !1, Rl = !1, zl = function() {
	return !0;
}, Bl = function(e) {
	return (Nl.whiteList || zl)(e);
}, Vl = function(e, t) {
	Il = {
		observerNode: e,
		portaledElement: t
	};
}, Hl = function(e) {
	return Il && Il.portaledElement === e;
};
function Ul(e, t, n, r) {
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
var Wl = function(e) {
	return e ? !!Ll : Ll === "meanwhile";
}, Gl = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Kl = function(e, t) {
	return t.some(function(t) {
		return Gl(e, t, t);
	});
}, ql = function(e) {
	return Bc(e, /* @__PURE__ */ new Map());
}, Jl = function(e) {
	return !ql([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Yl = function() {
	var e = !1;
	if (Nl) {
		var t = Nl, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || Il && Il.portaledElement;
		if (jl() && Pl && Pl !== document.body && (!document.body.contains(Pl) || Jl(Pl))) {
			var u = Fl();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Zs).filter(Boolean));
			if ((!d || Bl(d)) && (r || function() {
				if (!Wl(o) || !c || !Pl || Rl) return !1;
				var e = ql(f), t = e.findIndex(function(e) {
					return e.node === Pl;
				});
				return t === 0 || t === e.length - 1;
			}() || !Ml() || !Pl && i) && (l && !(Xc(f) || d && Kl(d, f) || Hl(d, l)) && (document && !Pl && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = _l(f, Pl, { focusOptions: s }), Il = {})), Pl = document && document.activeElement, Pl !== document.body && (Fl = xl(Pl)), Ll = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = pl(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Ul(h, m.length, 1, m), Ul(h, -1, -1, m));
			}
		}
	}
	return e;
}, Xl = function(e) {
	Yl() && e && (e.stopPropagation(), e.preventDefault());
}, Zl = function() {
	return Xs(Yl);
}, Ql = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Vl(n, t);
}, $l = function() {
	return null;
}, eu = function(e) {
	var t = e.children;
	return /* @__PURE__ */ T.createElement("div", {
		onBlur: Zl,
		onFocus: Ql
	}, t);
};
eu.propTypes = {};
var tu = function() {
	Rl = !0;
}, nu = function() {
	Rl = !1, Ll = "just", Xs(function() {
		Ll = "meanwhile";
	});
}, ru = function() {
	document.addEventListener("focusin", Xl), document.addEventListener("focusout", Zl), window.addEventListener("focus", tu), window.addEventListener("blur", nu);
}, iu = function() {
	document.removeEventListener("focusin", Xl), document.removeEventListener("focusout", Zl), window.removeEventListener("focus", tu), window.removeEventListener("blur", nu);
};
function au(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var ou = {
	moveFocusInside: _l,
	focusInside: Xc,
	focusNextElement: El,
	focusPrevElement: Dl,
	focusFirstElement: kl,
	focusLastElement: Al,
	captureFocusRestore: xl
};
function su(e) {
	var t = e.slice(-1)[0];
	t && !Nl && ru();
	var n = Nl, r = n && t && t.id === n.id;
	Nl = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Pl = null, (!r || n.observed !== t.observed) && t.onActivation(ou), Yl(!0), Xs(Yl)) : (iu(), Pl = null);
}
Us.assignSyncMedium(Ql), Ws.assignMedium(Zl), Gs.assignMedium(function(e) {
	return e(ou);
}), Ms(Ks, sc(au, su)($l));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var cu, lu = function() {
	if (cu) return cu;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function uu() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = lu();
	return t && e.setAttribute("nonce", t), e;
}
function du(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fu(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var pu = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = uu()) && (du(t, n), fu(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, mu = function() {
	var e = pu();
	return function(t, n) {
		T.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, hu = function() {
	var e = mu();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, gu = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, _u = function(e) {
	return parseInt(e || "", 10) || 0;
}, vu = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		_u(n),
		_u(r),
		_u(i)
	];
}, yu = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return gu;
	var t = vu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, bu = hu(), xu = "data-scroll-locked", Su = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${bs} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${xu}] {
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
  
  .${vs} {
    right: ${s}px ${r};
  }
  
  .${ys} {
    margin-right: ${s}px ${r};
  }
  
  .${vs} .${vs} {
    right: 0 ${r};
  }
  
  .${ys} .${ys} {
    margin-right: 0 ${r};
  }
  
  body[${xu}] {
    ${xs}: ${s}px;
  }
`;
}, Cu = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, wu = function() {
	T.useEffect(function() {
		return document.body.setAttribute(xu, (Cu() + 1).toString()), function() {
			var e = Cu() - 1;
			e <= 0 ? document.body.removeAttribute(xu) : document.body.setAttribute(xu, e.toString());
		};
	}, []);
}, Tu = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	wu();
	var a = T.useMemo(function() {
		return yu(i);
	}, [i]);
	return T.createElement(bu, { styles: Su(a, !t, i, n ? "" : "!important") });
}, Eu = !1;
if (typeof window < "u") try {
	var Du = Object.defineProperty({}, "passive", { get: function() {
		return Eu = !0, !0;
	} });
	window.addEventListener("test", Du, Du), window.removeEventListener("test", Du, Du);
} catch {
	Eu = !1;
}
var Ou = Eu ? { passive: !1 } : !1, ku = function(e) {
	return e.tagName === "TEXTAREA";
}, Au = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ku(e) && n[t] === "visible");
}, ju = function(e) {
	return Au(e, "overflowY");
}, Mu = function(e) {
	return Au(e, "overflowX");
}, Nu = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Iu(e, r)) {
			var i = Lu(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Pu = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Fu = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Iu = function(e, t) {
	return e === "v" ? ju(t) : Mu(t);
}, Lu = function(e, t) {
	return e === "v" ? Pu(t) : Fu(t);
}, Ru = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, zu = function(e, t, n, r, i) {
	var a = Ru(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Lu(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Iu(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Bu = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vu = function(e) {
	return [e.deltaX, e.deltaY];
}, Hu = function(e) {
	return e && "current" in e ? e.current : e;
}, Uu = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Wu = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Gu = 0, Ku = [];
function qu(e) {
	var t = T.useRef([]), n = T.useRef([0, 0]), r = T.useRef(), i = T.useState(Gu++)[0], a = T.useState(hu)[0], o = T.useRef(e);
	T.useEffect(function() {
		o.current = e;
	}, [e]), T.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = u([e.lockRef.current], (e.shards || []).map(Hu), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = T.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Bu(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Nu(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Nu(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return zu(h, t, e, h === "h" ? s : c, !0);
	}, []), c = T.useCallback(function(e) {
		var n = e;
		if (!(!Ku.length || Ku[Ku.length - 1] !== a)) {
			var r = "deltaY" in n ? Vu(n) : Bu(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Uu(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Hu).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = T.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Ju(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = T.useCallback(function(e) {
		n.current = Bu(e), r.current = void 0;
	}, []), f = T.useCallback(function(t) {
		l(t.type, Vu(t), t.target, s(t, e.lockRef.current));
	}, []), p = T.useCallback(function(t) {
		l(t.type, Bu(t), t.target, s(t, e.lockRef.current));
	}, []);
	T.useEffect(function() {
		return Ku.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", c, Ou), document.addEventListener("touchmove", c, Ou), document.addEventListener("touchstart", d, Ou), function() {
			Ku = Ku.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Ou), document.removeEventListener("touchmove", c, Ou), document.removeEventListener("touchstart", d, Ou);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return T.createElement(T.Fragment, null, h ? T.createElement(a, { styles: Wu(i) }) : null, m ? T.createElement(Tu, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Ju(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Ms(Ns, qu);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var Yu = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Xu = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ new WeakMap(), Qu = {}, $u = 0, ed = function(e) {
	return e && (e.host || ed(e.parentNode));
}, td = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = ed(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, nd = function(e, t, n, r) {
	var i = td(t, Array.isArray(e) ? e : [e]);
	Qu[n] || (Qu[n] = /* @__PURE__ */ new WeakMap());
	var a = Qu[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Xu.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Xu.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Zu.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), $u++, function() {
		o.forEach(function(e) {
			var t = Xu.get(e) - 1, i = a.get(e) - 1;
			Xu.set(e, t), a.set(e, i), t || (Zu.has(e) || e.removeAttribute(r), Zu.delete(e)), i || e.removeAttribute(n);
		}), $u--, $u || (Xu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ new WeakMap(), Qu = {});
	};
}, rd = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Yu(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), nd(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, id = hu(), ad = "\n [" + ec + "] {\n   pointer-events: none !important;\n }\n", od = function() {
	return T.createElement(id, { styles: ad });
}, sd = function(e) {
	return "current" in e ? e.current : e;
};
function cd(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, u = (0, T.useRef)(null), d = (0, T.useRef)(0);
	return T.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(sd).some(function(t) {
				return t && t.contains(e.target) || t === e.target;
			}) || r && r(e);
		}, a = function(e) {
			t(e), d.current = e.touches.length;
		}, o = function(e) {
			d.current = e.touches.length;
		};
		if (c) return c.ownerDocument.addEventListener("keydown", e), c.ownerDocument.addEventListener("mousedown", t), c.ownerDocument.addEventListener("touchstart", a), c.ownerDocument.addEventListener("touchend", o), function() {
			c.ownerDocument.removeEventListener("keydown", e), c.ownerDocument.removeEventListener("mousedown", t), c.ownerDocument.removeEventListener("touchstart", a), c.ownerDocument.removeEventListener("touchend", o);
		};
	}, [
		c,
		r,
		n
	]), (0, T.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, T.useEffect)(function() {
		if (!(s || !c)) return rd(l([c], (i || []).map(sd)), c.ownerDocument.body, ec);
	}, [c, s]), (0, T.useEffect)(function() {
		return t({
			onMouseDown: function(e) {
				u.current = e.target;
			},
			onTouchStart: function(e) {
				u.current = e.target;
			}
		}), function() {
			t(!1);
		};
	}, []), T.createElement(od, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var ld = Ms($s, cd), ud = function(e) {
	return T.createElement(ld, g({}, e));
}, dd = T.forwardRef(function(e, t) {
	return T.createElement(nc, g({}, e, {
		ref: t,
		sideCar: ud
	}));
}), fd = class extends T.Component {
	constructor(e) {
		// istanbul ignore if
		if (super(e), this.rootName = "paragon-portal-root", typeof document > "u") this.rootElement = null;
		else if (document.getElementById(this.rootName)) this.rootElement = document.getElementById(this.rootName);
		else {
			let e = document.createElement("div");
			e.setAttribute("id", this.rootName), this.rootElement = document.body.appendChild(e);
		}
	}
	render() {
		// istanbul ignore next
		return this.rootElement ? /* @__PURE__ */ de.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function pd({ onClick: e }) {
	return /* @__PURE__ */ T.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function md({ children: e = null }) {
	return /* @__PURE__ */ T.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function hd({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, T.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ T.createElement(_s, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ T.createElement(fd, null, /* @__PURE__ */ T.createElement(dd, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, E.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ T.createElement(md, null, /* @__PURE__ */ T.createElement(pd, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var gd = /* @__PURE__ */ T.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, T.useContext)(gs), a = e, o = {
		...n,
		className: (0, E.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ T.createElement(a, o, t);
});
gd.propTypes = {
	as: V.default.elementType,
	children: V.default.node,
	className: V.default.string,
	onClick: V.default.func
}, gd.defaultProps = {
	as: ca,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var _d = /* @__PURE__ */ T.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ T.createElement(e, {
	...n,
	ref: r,
	className: (0, E.default)("pgn__modal-header", n.className)
}, t));
_d.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, _d.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function vd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ T.createElement(e, {
		...n,
		className: (0, E.default)("pgn__modal-title", n.className)
	}, t);
}
vd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, vd.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function yd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ T.createElement(e, {
		...n,
		className: (0, E.default)("pgn__modal-footer", n.className)
	}, t);
}
yd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, yd.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var bd = (e = !0) => {
	let t = (0, T.useRef)(null), [n, r] = (0, T.useState)(e);
	return (0, T.useEffect)(() => {
		try {
			if (t.current) {
				let e = new IntersectionObserver((e) => {
					e.forEach(({ isIntersecting: e }) => {
						r(e);
					});
				}, {});
				return e.observe(t.current), () => {
					e.disconnect();
				};
			}
		} catch (e) {
			if (!(e instanceof ReferenceError)) throw e;
		}
		return () => {};
	}, []), [n, t];
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogBody.js
function xd({ as: e, children: t, ...n }) {
	let [r, i] = bd(), [a, o] = bd(), s = (0, E.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ T.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("div", { ref: i }), /* @__PURE__ */ T.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ T.createElement("div", { ref: o })));
}
xd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, xd.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Sd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ T.createElement(e, {
		...n,
		className: (0, E.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Sd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, Sd.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Cd({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ T.createElement(e, {
		...r,
		className: (0, E.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Cd.propTypes = {
	as: V.default.elementType,
	backgroundSrc: V.default.string,
	children: V.default.node,
	className: V.default.string,
	style: V.default.shape({})
}, Cd.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function wd({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ T.createElement(e, {
		...n,
		className: (0, E.default)("pgn__modal-hero", n.className)
	}, t);
}
wd.propTypes = {
	as: V.default.elementType,
	children: V.default.node.isRequired,
	className: V.default.string
}, wd.defaultProps = {
	as: "div",
	className: void 0
}, wd.Content = Sd, wd.Background = Cd;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var Td = b({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function Ed({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: c, isFullscreenScroll: l = !1, className: u, isFullscreenOnMobile: d = !1, isBlocking: f = !1, zIndex: p, isOverflowVisible: m }) {
	let h = s(), g = c || h.formatMessage(Td.closeButtonText), _ = ta({ query: "(max-width: 767.98px)" }), v = d && _;
	return /* @__PURE__ */ T.createElement(hd, {
		isOpen: n,
		onClose: r,
		isBlocking: f,
		zIndex: p
	}, /* @__PURE__ */ T.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, E.default)("pgn__modal", {
			[`pgn__modal-${v ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": l,
			"pgn__modal-visible-overflow": m
		}, u)
	}, o && /* @__PURE__ */ T.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ T.createElement(gd, {
		as: wa,
		iconAs: sa,
		invertColors: a === "dark",
		src: fa,
		alt: g
	})), e));
}
Ed.Header = _d, Ed.Title = vd, Ed.Footer = yd, Ed.CloseButton = gd, Ed.Body = xd, Ed.Hero = wd;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var Dd = "Close";
function Od({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ T.createElement(Ed, { ...i }, /* @__PURE__ */ T.createElement(Ed.Header, null, /* @__PURE__ */ T.createElement(Ed.Title, null, i.title)), n, /* @__PURE__ */ T.createElement(Ed.Body, null, e), r, t && /* @__PURE__ */ T.createElement(Ed.Footer, null, t));
}
Od.propTypes = {
	children: V.default.node.isRequired,
	title: V.default.string.isRequired,
	onClose: V.default.func.isRequired,
	isOpen: V.default.bool,
	hasCloseButton: V.default.bool,
	size: V.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: V.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: V.default.string,
	className: V.default.string,
	isFullscreenScroll: V.default.bool,
	footerNode: V.default.node,
	beforeBodyNode: V.default.node,
	afterBodyNode: V.default.node
}, Od.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: Dd,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var kd = function(e) {
	return Ad(e) && !jd(e);
};
function Ad(e) {
	return !!e && typeof e == "object";
}
function jd(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Nd(e);
}
var Md = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Nd(e) {
	return e.$$typeof === Md;
}
function Pd(e) {
	return Array.isArray(e) ? [] : {};
}
function Fd(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Rd(Pd(e), e, t) : e;
}
function Id(e, t, n) {
	return e.concat(t).map(function(e) {
		return Fd(e, n);
	});
}
function Ld(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Fd(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Fd(t[i], n) : r[i] = Rd(e[i], t[i], n);
	}), r;
}
function Rd(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Id, n.isMergeableObject = n.isMergeableObject || kd;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Ld(e, t, n) : Fd(t, n);
}
Rd.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Rd(e, n, t);
	}, {});
};
var zd = Rd, Bd = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, Vd = typeof self == "object" && self && self.Object === Object && self, Hd = Bd || Vd || Function("return this")(), Ud = Hd.Symbol, Wd = Object.prototype, Gd = Wd.hasOwnProperty, Kd = Wd.toString, qd = Ud ? Ud.toStringTag : void 0;
function Jd(e) {
	var t = Gd.call(e, qd), n = e[qd];
	try {
		e[qd] = void 0;
		var r = !0;
	} catch {}
	var i = Kd.call(e);
	return r && (t ? e[qd] = n : delete e[qd]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var Yd = Object.prototype.toString;
function Xd(e) {
	return Yd.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var Zd = "[object Null]", Qd = "[object Undefined]", $d = Ud ? Ud.toStringTag : void 0;
function ef(e) {
	return e == null ? e === void 0 ? Qd : Zd : $d && $d in Object(e) ? Jd(e) : Xd(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function tf(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var nf = tf(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function rf(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var af = "[object Object]", of = Function.prototype, sf = Object.prototype, cf = of.toString, lf = sf.hasOwnProperty, uf = cf.call(Object);
function df(e) {
	if (!rf(e) || ef(e) != af) return !1;
	var t = nf(e);
	if (t === null) return !0;
	var n = lf.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && cf.call(n) == uf;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function ff() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function pf(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function mf(e, t) {
	for (var n = e.length; n--;) if (pf(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var hf = Array.prototype.splice;
function gf(e) {
	var t = this.__data__, n = mf(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : hf.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function _f(e) {
	var t = this.__data__, n = mf(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function vf(e) {
	return mf(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function yf(e, t) {
	var n = this.__data__, r = mf(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function bf(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
bf.prototype.clear = ff, bf.prototype.delete = gf, bf.prototype.get = _f, bf.prototype.has = vf, bf.prototype.set = yf;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function xf() {
	this.__data__ = new bf(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Sf(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Cf(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function wf(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Tf(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Ef = "[object AsyncFunction]", Df = "[object Function]", Of = "[object GeneratorFunction]", kf = "[object Proxy]";
function Af(e) {
	if (!Tf(e)) return !1;
	var t = ef(e);
	return t == Df || t == Of || t == Ef || t == kf;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var jf = Hd["__core-js_shared__"], Mf = function() {
	var e = /[^.]+$/.exec(jf && jf.keys && jf.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Nf(e) {
	return !!Mf && Mf in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Pf = Function.prototype.toString;
function Ff(e) {
	if (e != null) {
		try {
			return Pf.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var If = /[\\^$.*+?()[\]{}|]/g, Lf = /^\[object .+?Constructor\]$/, Rf = Function.prototype, zf = Object.prototype, Bf = Rf.toString, Vf = zf.hasOwnProperty, Hf = RegExp("^" + Bf.call(Vf).replace(If, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Uf(e) {
	return !Tf(e) || Nf(e) ? !1 : (Af(e) ? Hf : Lf).test(Ff(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function Wf(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function Gf(e, t) {
	var n = Wf(e, t);
	return Uf(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Kf = Gf(Hd, "Map"), qf = Gf(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function Jf() {
	this.__data__ = qf ? qf(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function Yf(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var Xf = "__lodash_hash_undefined__", Zf = Object.prototype.hasOwnProperty;
function Qf(e) {
	var t = this.__data__;
	if (qf) {
		var n = t[e];
		return n === Xf ? void 0 : n;
	}
	return Zf.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var $f = Object.prototype.hasOwnProperty;
function ep(e) {
	var t = this.__data__;
	return qf ? t[e] !== void 0 : $f.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var tp = "__lodash_hash_undefined__";
function np(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = qf && t === void 0 ? tp : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function rp(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
rp.prototype.clear = Jf, rp.prototype.delete = Yf, rp.prototype.get = Qf, rp.prototype.has = ep, rp.prototype.set = np;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function ip() {
	this.size = 0, this.__data__ = {
		hash: new rp(),
		map: new (Kf || bf)(),
		string: new rp()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function ap(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function op(e, t) {
	var n = e.__data__;
	return ap(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function sp(e) {
	var t = op(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function cp(e) {
	return op(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function lp(e) {
	return op(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function up(e, t) {
	var n = op(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function dp(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
dp.prototype.clear = ip, dp.prototype.delete = sp, dp.prototype.get = cp, dp.prototype.has = lp, dp.prototype.set = up;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var fp = 200;
function pp(e, t) {
	var n = this.__data__;
	if (n instanceof bf) {
		var r = n.__data__;
		if (!Kf || r.length < fp - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new dp(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function mp(e) {
	this.size = (this.__data__ = new bf(e)).size;
}
mp.prototype.clear = xf, mp.prototype.delete = Sf, mp.prototype.get = Cf, mp.prototype.has = wf, mp.prototype.set = pp;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function hp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var gp = function() {
	try {
		var e = Gf(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function _p(e, t, n) {
	t == "__proto__" && gp ? gp(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var vp = Object.prototype.hasOwnProperty;
function yp(e, t, n) {
	var r = e[t];
	(!(vp.call(e, t) && pf(r, n)) || n === void 0 && !(t in e)) && _p(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function bp(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? _p(n, s, c) : yp(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function xp(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Sp = "[object Arguments]";
function Cp(e) {
	return rf(e) && ef(e) == Sp;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var wp = Object.prototype, Tp = wp.hasOwnProperty, Ep = wp.propertyIsEnumerable, Dp = Cp(function() {
	return arguments;
}()) ? Cp : function(e) {
	return rf(e) && Tp.call(e, "callee") && !Ep.call(e, "callee");
}, Op = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function kp() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Ap = typeof exports == "object" && exports && !exports.nodeType && exports, jp = Ap && typeof module == "object" && module && !module.nodeType && module, Mp = jp && jp.exports === Ap ? Hd.Buffer : void 0, Np = (Mp ? Mp.isBuffer : void 0) || kp, Pp = 9007199254740991, Fp = /^(?:0|[1-9]\d*)$/;
function Ip(e, t) {
	var n = typeof e;
	return t ??= Pp, !!t && (n == "number" || n != "symbol" && Fp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Lp = 9007199254740991;
function Rp(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lp;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var zp = "[object Arguments]", Bp = "[object Array]", Vp = "[object Boolean]", Hp = "[object Date]", Up = "[object Error]", Wp = "[object Function]", Gp = "[object Map]", Kp = "[object Number]", qp = "[object Object]", Jp = "[object RegExp]", Yp = "[object Set]", Xp = "[object String]", Zp = "[object WeakMap]", Qp = "[object ArrayBuffer]", $p = "[object DataView]", em = "[object Float32Array]", tm = "[object Float64Array]", nm = "[object Int8Array]", rm = "[object Int16Array]", im = "[object Int32Array]", am = "[object Uint8Array]", om = "[object Uint8ClampedArray]", sm = "[object Uint16Array]", cm = "[object Uint32Array]", J = {};
J[em] = J[tm] = J[nm] = J[rm] = J[im] = J[am] = J[om] = J[sm] = J[cm] = !0, J[zp] = J[Bp] = J[Qp] = J[Vp] = J[$p] = J[Hp] = J[Up] = J[Wp] = J[Gp] = J[Kp] = J[qp] = J[Jp] = J[Yp] = J[Xp] = J[Zp] = !1;
function lm(e) {
	return rf(e) && Rp(e.length) && !!J[ef(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function um(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var dm = typeof exports == "object" && exports && !exports.nodeType && exports, fm = dm && typeof module == "object" && module && !module.nodeType && module, pm = fm && fm.exports === dm && Bd.process, mm = function() {
	try {
		return fm && fm.require && fm.require("util").types || pm && pm.binding && pm.binding("util");
	} catch {}
}(), hm = mm && mm.isTypedArray, gm = hm ? um(hm) : lm, _m = Object.prototype.hasOwnProperty;
function vm(e, t) {
	var n = Op(e), r = !n && Dp(e), i = !n && !r && Np(e), a = !n && !r && !i && gm(e), o = n || r || i || a, s = o ? xp(e.length, String) : [], c = s.length;
	for (var l in e) (t || _m.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ip(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var ym = Object.prototype;
function bm(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || ym);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var xm = tf(Object.keys, Object), Sm = Object.prototype.hasOwnProperty;
function Cm(e) {
	if (!bm(e)) return xm(e);
	var t = [];
	for (var n in Object(e)) Sm.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function wm(e) {
	return e != null && Rp(e.length) && !Af(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Tm(e) {
	return wm(e) ? vm(e) : Cm(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Em(e, t) {
	return e && bp(t, Tm(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Dm(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Om = Object.prototype.hasOwnProperty;
function km(e) {
	if (!Tf(e)) return Dm(e);
	var t = bm(e), n = [];
	for (var r in e) r == "constructor" && (t || !Om.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Am(e) {
	return wm(e) ? vm(e, !0) : km(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function jm(e, t) {
	return e && bp(t, Am(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Mm = typeof exports == "object" && exports && !exports.nodeType && exports, Nm = Mm && typeof module == "object" && module && !module.nodeType && module, Pm = Nm && Nm.exports === Mm ? Hd.Buffer : void 0, Fm = Pm ? Pm.allocUnsafe : void 0;
function Im(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Fm ? Fm(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Lm(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Rm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function zm() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Bm = Object.prototype.propertyIsEnumerable, Vm = Object.getOwnPropertySymbols, Hm = Vm ? function(e) {
	return e == null ? [] : (e = Object(e), Rm(Vm(e), function(t) {
		return Bm.call(e, t);
	}));
} : zm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function Um(e, t) {
	return bp(e, Hm(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function Wm(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var Gm = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Wm(t, Hm(e)), e = nf(e);
	return t;
} : zm;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function Km(e, t) {
	return bp(e, Gm(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function qm(e, t, n) {
	var r = t(e);
	return Op(e) ? r : Wm(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function Jm(e) {
	return qm(e, Tm, Hm);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function Ym(e) {
	return qm(e, Am, Gm);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var Xm = Gf(Hd, "DataView"), Zm = Gf(Hd, "Promise"), Qm = Gf(Hd, "Set"), $m = Gf(Hd, "WeakMap"), eh = "[object Map]", th = "[object Object]", nh = "[object Promise]", rh = "[object Set]", ih = "[object WeakMap]", ah = "[object DataView]", oh = Ff(Xm), sh = Ff(Kf), ch = Ff(Zm), lh = Ff(Qm), uh = Ff($m), dh = ef;
(Xm && dh(new Xm(/* @__PURE__ */ new ArrayBuffer(1))) != ah || Kf && dh(new Kf()) != eh || Zm && dh(Zm.resolve()) != nh || Qm && dh(new Qm()) != rh || $m && dh(new $m()) != ih) && (dh = function(e) {
	var t = ef(e), n = t == th ? e.constructor : void 0, r = n ? Ff(n) : "";
	if (r) switch (r) {
		case oh: return ah;
		case sh: return eh;
		case ch: return nh;
		case lh: return rh;
		case uh: return ih;
	}
	return t;
});
var fh = dh, ph = Object.prototype.hasOwnProperty;
function mh(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && ph.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var hh = Hd.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function gh(e) {
	var t = new e.constructor(e.byteLength);
	return new hh(t).set(new hh(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function _h(e, t) {
	var n = t ? gh(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var vh = /\w*$/;
function yh(e) {
	var t = new e.constructor(e.source, vh.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var bh = Ud ? Ud.prototype : void 0, xh = bh ? bh.valueOf : void 0;
function Sh(e) {
	return xh ? Object(xh.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Ch(e, t) {
	var n = t ? gh(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var wh = "[object Boolean]", Th = "[object Date]", Eh = "[object Map]", Dh = "[object Number]", Oh = "[object RegExp]", kh = "[object Set]", Ah = "[object String]", jh = "[object Symbol]", Mh = "[object ArrayBuffer]", Nh = "[object DataView]", Ph = "[object Float32Array]", Fh = "[object Float64Array]", Ih = "[object Int8Array]", Lh = "[object Int16Array]", Rh = "[object Int32Array]", zh = "[object Uint8Array]", Bh = "[object Uint8ClampedArray]", Vh = "[object Uint16Array]", Hh = "[object Uint32Array]";
function Uh(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Mh: return gh(e);
		case wh:
		case Th: return new r(+e);
		case Nh: return _h(e, n);
		case Ph:
		case Fh:
		case Ih:
		case Lh:
		case Rh:
		case zh:
		case Bh:
		case Vh:
		case Hh: return Ch(e, n);
		case Eh: return new r();
		case Dh:
		case Ah: return new r(e);
		case Oh: return yh(e);
		case kh: return new r();
		case jh: return Sh(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var Wh = Object.create, Gh = function() {
	function e() {}
	return function(t) {
		if (!Tf(t)) return {};
		if (Wh) return Wh(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function Kh(e) {
	return typeof e.constructor == "function" && !bm(e) ? Gh(nf(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var qh = "[object Map]";
function Jh(e) {
	return rf(e) && fh(e) == qh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var Yh = mm && mm.isMap, Xh = Yh ? um(Yh) : Jh, Zh = "[object Set]";
function Qh(e) {
	return rf(e) && fh(e) == Zh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var $h = mm && mm.isSet, eg = $h ? um($h) : Qh, tg = 1, ng = 2, rg = 4, ig = "[object Arguments]", ag = "[object Array]", og = "[object Boolean]", sg = "[object Date]", cg = "[object Error]", lg = "[object Function]", ug = "[object GeneratorFunction]", dg = "[object Map]", fg = "[object Number]", pg = "[object Object]", mg = "[object RegExp]", hg = "[object Set]", gg = "[object String]", _g = "[object Symbol]", vg = "[object WeakMap]", yg = "[object ArrayBuffer]", bg = "[object DataView]", xg = "[object Float32Array]", Sg = "[object Float64Array]", Cg = "[object Int8Array]", wg = "[object Int16Array]", Tg = "[object Int32Array]", Eg = "[object Uint8Array]", Dg = "[object Uint8ClampedArray]", Og = "[object Uint16Array]", kg = "[object Uint32Array]", Y = {};
Y[ig] = Y[ag] = Y[yg] = Y[bg] = Y[og] = Y[sg] = Y[xg] = Y[Sg] = Y[Cg] = Y[wg] = Y[Tg] = Y[dg] = Y[fg] = Y[pg] = Y[mg] = Y[hg] = Y[gg] = Y[_g] = Y[Eg] = Y[Dg] = Y[Og] = Y[kg] = !0, Y[cg] = Y[lg] = Y[vg] = !1;
function Ag(e, t, n, r, i, a) {
	var o, s = t & tg, c = t & ng, l = t & rg;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Tf(e)) return e;
	var u = Op(e);
	if (u) {
		if (o = mh(e), !s) return Lm(e, o);
	} else {
		var d = fh(e), f = d == lg || d == ug;
		if (Np(e)) return Im(e, s);
		if (d == pg || d == ig || f && !i) {
			if (o = c || f ? {} : Kh(e), !s) return c ? Km(e, jm(o, e)) : Um(e, Em(o, e));
		} else {
			if (!Y[d]) return i ? e : {};
			o = Uh(e, d, s);
		}
	}
	a ||= new mp();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), eg(e) ? e.forEach(function(r) {
		o.add(Ag(r, t, n, r, e, a));
	}) : Xh(e) && e.forEach(function(r, i) {
		o.set(i, Ag(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Ym : Jm : c ? Am : Tm)(e);
	return hp(m || e, function(r, i) {
		m && (i = r, r = e[i]), yp(o, i, Ag(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var jg = 1, Mg = 4;
function Ng(e) {
	return Ag(e, jg | Mg);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Pg = /* @__PURE__ */ t((/* @__PURE__ */ r(((e, t) => {
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
})))()), Fg = !0;
function Ig(e, t) {
	if (!Fg) {
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
var Lg = 4;
function Rg(e) {
	return Ag(e, Lg);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function zg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var Bg = "[object Symbol]";
function Vg(e) {
	return typeof e == "symbol" || rf(e) && ef(e) == Bg;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var Hg = "Expected a function";
function Ug(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(Hg);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Ug.Cache || dp)(), n;
}
Ug.Cache = dp;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var Wg = 500;
function Gg(e) {
	var t = Ug(e, function(e) {
		return n.size === Wg && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var Kg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qg = /\\(\\)?/g, Jg = Gg(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(Kg, function(e, n, r, i) {
		t.push(r ? i.replace(qg, "$1") : n || e);
	}), t;
}), Yg = Infinity;
function Xg(e) {
	if (typeof e == "string" || Vg(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -Yg ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var Zg = Infinity, Qg = Ud ? Ud.prototype : void 0, $g = Qg ? Qg.toString : void 0;
function e_(e) {
	if (typeof e == "string") return e;
	if (Op(e)) return zg(e, e_) + "";
	if (Vg(e)) return $g ? $g.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Zg ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function t_(e) {
	return e == null ? "" : e_(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function n_(e) {
	return Op(e) ? zg(e, Xg) : Vg(e) ? [e] : Lm(Jg(t_(e)));
}
c();
function X() {
	return X = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, X.apply(this, arguments);
}
function r_(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function i_(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function a_(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var o_ = /* @__PURE__ */ (0, T.createContext)(void 0);
o_.displayName = "FormikContext";
var s_ = o_.Provider;
o_.Consumer;
function c_() {
	var e = (0, T.useContext)(o_);
	return !e && Ig(!1), e;
}
var l_ = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Z = function(e) {
	return typeof e == "function";
}, u_ = function(e) {
	return typeof e == "object" && !!e;
}, d_ = function(e) {
	return String(Math.floor(Number(e))) === e;
}, f_ = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, p_ = function(e) {
	return T.Children.count(e) === 0;
}, m_ = function(e) {
	return u_(e) && Z(e.then);
};
function Q(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = n_(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function h_(e, t, n) {
	for (var r = Rg(e), i = r, a = 0, o = n_(t); a < o.length - 1; a++) {
		var s = o[a], c = Q(e, o.slice(0, a + 1));
		if (c && (u_(c) || Array.isArray(c))) i = i[s] = Rg(c);
		else {
			var l = o[a + 1];
			i = i[s] = d_(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function g_(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		u_(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, g_(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function __(e, t) {
	switch (t.type) {
		case "SET_VALUES": return X({}, e, { values: t.payload });
		case "SET_TOUCHED": return X({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Pg.default)(e.errors, t.payload) ? e : X({}, e, { errors: t.payload });
		case "SET_STATUS": return X({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return X({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return X({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return X({}, e, { values: h_(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return X({}, e, { touched: h_(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return X({}, e, { errors: h_(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return X({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return X({}, e, {
			touched: g_(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return X({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return X({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var v_ = {}, y_ = {};
function b_(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = i_(e, [
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
	}, d), p = (0, T.useRef)(f.initialValues), m = (0, T.useRef)(f.initialErrors || v_), h = (0, T.useRef)(f.initialTouched || y_), g = (0, T.useRef)(f.initialStatus), _ = (0, T.useRef)(!1), v = (0, T.useRef)({});
	(0, T.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, T.useState)(0)[1], b = (0, T.useRef)({
		values: Ng(f.initialValues),
		errors: Ng(f.initialErrors) || v_,
		touched: Ng(f.initialTouched) || y_,
		status: Ng(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, T.useCallback)(function(e) {
		var t = b.current;
		b.current = __(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, T.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(v_) : m_(i) ? i.then(function(e) {
				n(e || v_);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, T.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Z(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : C_(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(v_);
			}, function(n) {
				n.name === "ValidationError" ? e(S_(n)) : t(n);
			});
		});
	}, [f.validationSchema]), E = (0, T.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), D = (0, T.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Z(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return E(t, Q(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = h_(e, t[r], n)), e;
			}, {});
		});
	}, [E]), O = (0, T.useCallback)(function(e) {
		return Promise.all([
			D(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return zd.all([
				t,
				n,
				r
			], { arrayMerge: T_ });
		});
	}, [
		f.validate,
		f.validationSchema,
		D,
		C,
		w
	]), k = k_(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), O(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, T.useEffect)(function() {
		o && _.current === !0 && (0, Pg.default)(p.current, f.initialValues) && k(p.current);
	}, [o, k]);
	var A = (0, T.useCallback)(function(e) {
		var t = e && e.values ? e.values : p.current, n = e && e.errors ? e.errors : m.current ? m.current : f.initialErrors || {}, r = e && e.touched ? e.touched : h.current ? h.current : f.initialTouched || {}, i = e && e.status ? e.status : g.current ? g.current : f.initialStatus;
		p.current = t, m.current = n, h.current = r, g.current = i;
		var a = function() {
			S({
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
			var o = f.onReset(x.values, le);
			m_(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, T.useEffect)(function() {
		_.current === !0 && !(0, Pg.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, A(), o && k(p.current));
	}, [
		l,
		f.initialValues,
		A,
		o,
		k
	]), (0, T.useEffect)(function() {
		l && _.current === !0 && !(0, Pg.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || v_, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || v_
		}));
	}, [l, f.initialErrors]), (0, T.useEffect)(function() {
		l && _.current === !0 && !(0, Pg.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || y_, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || y_
		}));
	}, [l, f.initialTouched]), (0, T.useEffect)(function() {
		l && _.current === !0 && !(0, Pg.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var j = k_(function(e) {
		if (v.current[e] && Z(v.current[e].validate)) {
			var t = Q(x.values, e), n = v.current[e].validate(t);
			return m_(n) ? (S({
				type: "SET_ISVALIDATING",
				payload: !0
			}), n.then(function(e) {
				return e;
			}).then(function(t) {
				S({
					type: "SET_FIELD_ERROR",
					payload: {
						field: e,
						value: t
					}
				}), S({
					type: "SET_ISVALIDATING",
					payload: !1
				});
			})) : (S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: n
				}
			}), Promise.resolve(n));
		} else if (f.validationSchema) return S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), w(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: Q(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), M = (0, T.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), N = (0, T.useCallback)(function(e) {
		delete v.current[e];
	}, []), P = k_(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? k(x.values) : Promise.resolve();
	}), F = (0, T.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), I = k_(function(e, t) {
		var r = Z(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? k(r) : Promise.resolve();
	}), L = (0, T.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), R = k_(function(e, t, r) {
		var i = Z(t) ? t(Q(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? k(h_(x.values, e, i)) : Promise.resolve();
	}), z = (0, T.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!f_(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? D_(Q(x.values, n), u, l) : d && f ? E_(d) : l;
		}
		n && R(n, r);
	}, [R, x.values]), ee = k_(function(e) {
		if (f_(e)) return function(t) {
			return z(t, e);
		};
		z(e);
	}), te = k_(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? k(x.values) : Promise.resolve();
	}), ne = (0, T.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, te(t || r || i, !0);
	}, [te]), re = k_(function(e) {
		if (f_(e)) return function(t) {
			return ne(t, e);
		};
		ne(e);
	}), ie = (0, T.useCallback)(function(e) {
		Z(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ae = (0, T.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), oe = (0, T.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), se = k_(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), k().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = ue(), n === void 0) return;
				} catch (e) {
					throw e;
				}
				return Promise.resolve(n).then(function(e) {
					return _.current && S({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (_.current) throw S({ type: "SUBMIT_FAILURE" }), e;
				});
			} else if (_.current && (S({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), ce = k_(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), se().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), le = {
		resetForm: A,
		validateForm: k,
		validateField: j,
		setErrors: F,
		setFieldError: L,
		setFieldTouched: te,
		setFieldValue: R,
		setStatus: ae,
		setSubmitting: oe,
		setTouched: P,
		setValues: I,
		setFormikState: ie,
		submitForm: se
	}, ue = k_(function() {
		return u(x.values, le);
	}), de = k_(function(e) {
		e && e.preventDefault && Z(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Z(e.stopPropagation) && e.stopPropagation(), A();
	}), fe = (0, T.useCallback)(function(e) {
		return {
			value: Q(x.values, e),
			error: Q(x.errors, e),
			touched: !!Q(x.touched, e),
			initialValue: Q(p.current, e),
			initialTouched: !!Q(h.current, e),
			initialError: Q(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), pe = (0, T.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return R(e, t, n);
			},
			setTouched: function(t, n) {
				return te(e, t, n);
			},
			setError: function(t) {
				return L(e, t);
			}
		};
	}, [
		R,
		te,
		L
	]), B = (0, T.useCallback)(function(e) {
		var t = u_(e), n = t ? e.name : e, r = Q(x.values, n), i = {
			name: n,
			value: r,
			onChange: ee,
			onBlur: re
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		re,
		ee,
		x.values
	]), me = (0, T.useMemo)(function() {
		return !(0, Pg.default)(p.current, x.values);
	}, [p.current, x.values]), he = (0, T.useMemo)(function() {
		return s === void 0 || me ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Z(s) ? s(f) : s;
	}, [
		s,
		me,
		x.errors,
		f
	]);
	return X({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: re,
		handleChange: ee,
		handleReset: de,
		handleSubmit: ce,
		resetForm: A,
		setErrors: F,
		setFormikState: ie,
		setFieldTouched: te,
		setFieldValue: R,
		setFieldError: L,
		setStatus: ae,
		setSubmitting: oe,
		setTouched: P,
		setValues: I,
		submitForm: se,
		validateForm: k,
		validateField: j,
		isValid: he,
		dirty: me,
		unregisterField: N,
		registerField: M,
		getFieldProps: B,
		getFieldMeta: fe,
		getFieldHelpers: pe,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function x_(e) {
	var t = b_(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, T.useImperativeHandle)(a, function() {
		return t;
	}), (0, T.createElement)(s_, { value: t }, n ? (0, T.createElement)(n, t) : i ? i(t) : r ? Z(r) ? r(t) : p_(r) ? null : T.Children.only(r) : null);
}
function S_(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return h_(t, e.path, e.message);
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
			Q(t, o.path) || (t = h_(t, o.path, o.message));
		}
	}
	return t;
}
function C_(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = w_(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function w_(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || df(e) ? w_(e) : e === "" ? void 0 : e;
		}) : df(e[r]) ? t[r] = w_(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function T_(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? zd(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = zd(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function E_(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function D_(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var O_ = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? T.useLayoutEffect : T.useEffect;
function k_(e) {
	var t = (0, T.useRef)(e);
	return O_(function() {
		t.current = e;
	}), (0, T.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function A_(e) {
	var t = c_(), n = t.getFieldProps, r = t.getFieldMeta, i = t.getFieldHelpers, a = t.registerField, o = t.unregisterField, s = u_(e) ? e : { name: e }, c = s.name, l = s.validate;
	(0, T.useEffect)(function() {
		return c && a(c, { validate: l }), function() {
			c && o(c);
		};
	}, [
		a,
		o,
		c,
		l
	]), !c && Ig(!1);
	var u = (0, T.useMemo)(function() {
		return i(c);
	}, [i, c]);
	return [
		n(s),
		r(c),
		u
	];
}
function j_(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = i_(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = i_(c_(), ["validate", "validationSchema"]), u = l.registerField, d = l.unregisterField;
	(0, T.useEffect)(function() {
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
			var h = c.innerRef, g = i_(c, ["innerRef"]);
			return (0, T.createElement)(o, X({ ref: h }, f, g, { className: s }), i);
		}
		return (0, T.createElement)(o, X({
			field: f,
			form: l
		}, c, { className: s }), i);
	}
	var _ = a || "input";
	if (typeof _ == "string") {
		var v = c.innerRef, y = i_(c, ["innerRef"]);
		return (0, T.createElement)(_, X({ ref: v }, f, y, { className: s }), i);
	}
	return (0, T.createElement)(_, X({}, f, c, { className: s }), i);
}
var M_ = /* @__PURE__ */ (0, T.forwardRef)(function(e, t) {
	var n = e.action, r = i_(e, ["action"]), i = n ?? "#", a = c_(), o = a.handleReset, s = a.handleSubmit;
	return (0, T.createElement)("form", X({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
M_.displayName = "Form";
var N_ = function(e, t, n) {
	var r = L_(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, P_ = function(e, t, n) {
	var r = L_(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, F_ = function(e, t, n) {
	var r = L_(e);
	return r.splice(t, 0, n), r;
}, I_ = function(e, t, n) {
	var r = L_(e);
	return r[t] = n, r;
}, L_ = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(X({}, e, { length: t + 1 }));
}, R_ = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || u_(e) ? n(L_(e)) : e;
	};
}, z_ = /* @__PURE__ */ function(e) {
	r_(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = R_(r, e), o = R_(t, e), s = h_(n.values, a, e(Q(n.values, a))), c = r ? i(Q(n.errors, a)) : void 0, l = t ? o(Q(n.touched, a)) : void 0;
				return l_(c) && (c = void 0), l_(l) && (l = void 0), X({}, n, {
					values: s,
					errors: r ? h_(n.errors, a, c) : n.errors,
					touched: t ? h_(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(L_(t), [Ng(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return P_(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return N_(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return F_(n, e, t);
			}, function(t) {
				return F_(t, e, null);
			}, function(t) {
				return F_(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return I_(n, e, t);
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
		}, n.remove = n.remove.bind(a_(n)), n.pop = n.pop.bind(a_(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Pg.default)(Q(e.formik.values, e.name), Q(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? L_(n) : [];
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = i_(o, ["validate", "validationSchema"]), c = X({}, e, {
			form: s,
			name: a
		});
		return n ? (0, T.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : p_(i) ? null : T.Children.only(i) : null;
	}, t;
}(T.Component);
z_.defaultProps = { validateOnChange: !0 };
//#endregion
//#region src/lib/context.ts
var B_ = (0, T.createContext)(null), V_ = () => (0, T.useContext)(B_), $ = o(), H_ = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, T.useState)(null), { element: o } = (0, T.useContext)(_), s = V_(), c = (0, T.useRef)(null), l = o.getAttribute("data-usage-id");
	if ((0, T.useEffect)(() => {
		let e = async ({ data: e, source: t }) => {
			if (t === c.current?.contentWindow && e.type === "org.openedx.assets.selected.v1") try {
				e.data.length === 0 ? a(null) : a(e.data[0].externalUrl), n(null);
			} catch {
				n("Invalid response from server.");
			}
		};
		return window.addEventListener("message", e), () => window.removeEventListener("message", e);
	}, [n]), !s?.file_picker_url) return null;
	let u = new URL(s.file_picker_url);
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, $.jsx)(Od, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, $.jsxs)(D, { children: [
			/* @__PURE__ */ (0, $.jsx)(D.Spacer, {}),
			/* @__PURE__ */ (0, $.jsx)(ca, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, $.jsx)(ca, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, $.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: u.toString()
		})
	});
}, U_ = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, T.useState)(!1), [a, o] = (0, T.useState)(null), s = V_(), c = (0, T.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [
		/* @__PURE__ */ (0, $.jsxs)(ci, { children: [e, /* @__PURE__ */ (0, $.jsx)(ci.Append, { children: /* @__PURE__ */ (0, $.jsx)(ca, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, $.jsx)(q.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, $.jsx)(H_, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
}, W_ = () => {
	let [e] = A_("variant"), [t] = A_("image_position"), [n, , { setValue: r }] = A_("media_url"), [a] = A_("description"), o = e.value !== m.section, s = e.value === m.section, c = {
		xs: 12,
		sm: o ? 8 : 12,
		lg: o ? 10 : 12
	};
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "p-3",
		children: /* @__PURE__ */ (0, $.jsxs)(i, { children: [
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-display-name",
				xs: 12,
				children: [
					/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Display Name" }),
					/* @__PURE__ */ (0, $.jsx)(j_, {
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
				as: x,
				controlId: "cover-form-variant",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Variant" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
					as: "select",
					...e,
					children: [
						/* @__PURE__ */ (0, $.jsx)("option", {
							value: m.section,
							children: "Section Cover"
						}),
						/* @__PURE__ */ (0, $.jsx)("option", {
							value: m.course,
							children: "Course Cover"
						}),
						/* @__PURE__ */ (0, $.jsx)("option", {
							value: m.separator,
							children: "Separator"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-media-url",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image URL" }), /* @__PURE__ */ (0, $.jsx)(U_, {
					setValue: (e) => r(e),
					fileTypes: ["image"],
					children: /* @__PURE__ */ (0, $.jsx)(j_, {
						as: q.Control,
						name: "media_url",
						value: n.value
					})
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-media-alt-text",
				xs: 12,
				children: [
					/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Alt Text" }),
					/* @__PURE__ */ (0, $.jsx)(j_, {
						as: q.Control,
						name: "media_alt_text"
					}),
					/* @__PURE__ */ (0, $.jsx)(q.Text, {
						muted: !0,
						children: "Provide a description of your image for use with screen readers."
					})
				]
			}),
			s && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-image-position",
				xs: 12,
				sm: 6,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Image Position" }), /* @__PURE__ */ (0, $.jsxs)(q.Control, {
					as: "select",
					...t,
					children: [/* @__PURE__ */ (0, $.jsx)("option", {
						value: y.right,
						children: "Image Right"
					}), /* @__PURE__ */ (0, $.jsx)("option", {
						value: y.left,
						children: "Image Left"
					})]
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-top-header",
				...c,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Top Header" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "top_header"
				})]
			}),
			o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-top-header-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "top_header_color",
					type: "color",
					"aria-label": "Top header color"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-main-header",
				...c,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Main Header" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "main_header"
				})]
			}),
			o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-main-header-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "main_header_color",
					type: "color",
					"aria-label": "Main header color"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-subheader",
				...c,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Subheader" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "subheader"
				})]
			}),
			o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-subheader-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "subheader_color",
					type: "color",
					"aria-label": "Subheader color"
				})]
			}),
			/* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-description",
				...c,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Description" }), /* @__PURE__ */ (0, $.jsx)(q.Control, {
					as: "textarea",
					...a
				})]
			}),
			o && /* @__PURE__ */ (0, $.jsxs)(q.Group, {
				as: x,
				controlId: "cover-form-description-color",
				xs: 12,
				sm: 4,
				lg: 2,
				children: [/* @__PURE__ */ (0, $.jsx)(q.Label, { children: "Color" }), /* @__PURE__ */ (0, $.jsx)(j_, {
					as: q.Control,
					name: "description_color",
					type: "color",
					"aria-label": "Description color"
				})]
			})
		] })
	});
}, G_ = () => {
	let { runtime: e } = (0, T.useContext)(_), t = c_();
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "react-studio-block",
		children: /* @__PURE__ */ (0, $.jsxs)(f, {
			className: "editor-with-buttons",
			children: [/* @__PURE__ */ (0, $.jsx)("div", {
				className: "wrapper-comp-settings is-active",
				children: /* @__PURE__ */ (0, $.jsx)(W_, {})
			}), /* @__PURE__ */ (0, $.jsx)("div", {
				className: "xblock-actions",
				children: /* @__PURE__ */ (0, $.jsxs)(D, { children: [
					/* @__PURE__ */ (0, $.jsx)(D.Spacer, {}),
					/* @__PURE__ */ (0, $.jsx)(ca, {
						variant: "tertiary",
						onClick: () => e.notify("cancel", {}),
						children: "Cancel"
					}),
					/* @__PURE__ */ (0, $.jsx)(ca, {
						variant: "primary",
						onClick: t.submitForm,
						children: "Save"
					})
				] })
			})]
		})
	});
}, K_ = (e) => {
	let { runtime: t } = (0, T.useContext)(_), n = v("studio_save");
	return /* @__PURE__ */ (0, $.jsx)(x_, {
		initialValues: e,
		onSubmit: (e) => {
			h({
				saveUrl: n,
				data: e,
				runtime: t,
				errorMessage: "Failed to save cover block configuration"
			});
		},
		children: /* @__PURE__ */ (0, $.jsx)(G_, {})
	});
}, q_ = ".wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block .wrapper-comp-settings{max-height:var(--exemplar-block-studio-ui-max-height,calc(100vh - 69px));height:100%;overflow-y:scroll}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", J_ = (e, t, n) => {
	d({
		runtime: e,
		element: t,
		config: n.config,
		styles: q_
	})(/* @__PURE__ */ (0, $.jsxs)(B_.Provider, {
		value: n.config,
		children: [/* @__PURE__ */ (0, $.jsx)(K_, { ...n.data }), ","]
	}));
};
//#endregion
export { J_ as renderBlock };
