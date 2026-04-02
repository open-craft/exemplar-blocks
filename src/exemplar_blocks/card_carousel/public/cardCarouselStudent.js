import { a as e, c as t, i as n, l as r, n as i, o as a, r as o, s, t as c } from "./jsx-runtime-yUlpojg6.js";
//#region node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var l = /* @__PURE__ */ t(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
})), u = e(), d = /* @__PURE__ */ r(s());
function f() {
	return f = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, f.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function p(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
var m = /* @__PURE__ */ t(((e, t) => {
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
})), h = /* @__PURE__ */ r(l()), g = /* @__PURE__ */ r(a());
m();
//#endregion
//#region node_modules/.pnpm/uncontrollable@7.2.1_react@18.3.1/node_modules/uncontrollable/lib/esm/hook.js
function _(e, t, n) {
	var r = (0, d.useRef)(e !== void 0), i = (0, d.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, d.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function v(e, t) {
	return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, v(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function y(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, v(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function b() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function x(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function S(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
b.__suppressDeprecationWarning = !0, x.__suppressDeprecationWarning = !0, S.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/ThemeProvider.js
var C = /* @__PURE__ */ d.createContext({});
C.Consumer, C.Provider;
function w(e, t) {
	var n = (0, d.useContext)(C);
	return e || n[t] || t;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function T(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function E(e) {
	var t = T(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function D(e, t) {
	return E(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var O = /([A-Z])/g;
function k(e) {
	return e.replace(O, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var ee = /^ms-/;
function A(e) {
	return k(e).replace(ee, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var j = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function te(e) {
	return !!(e && j.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function M(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(A(t)) || D(e).getPropertyValue(A(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(A(i)) : te(i) ? r += i + "(" + a + ") " : n += A(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
var ne = /* @__PURE__ */ t(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), re = /* @__PURE__ */ t(((e, t) => {
	var n = ne();
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
})), N = /* @__PURE__ */ t(((e, t) => {
	t.exports = re()();
})), P = { disabled: !1 }, F = d.createContext(null), ie = function(e) {
	return e.scrollTop;
}, ae = "unmounted", I = "exited", L = "entering", oe = "entered", se = "exiting", R = /* @__PURE__ */ function(e) {
	y(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = I, r.appearStatus = L) : o = oe : o = t.unmountOnExit || t.mountOnEnter ? ae : I, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: I } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = L) : (n === "entering" || n === "entered") && (t = se);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : g.findDOMNode(this);
				n && ie(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: ae });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [g.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || P.disabled) {
			this.safeSetState({ status: oe }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: L }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: oe }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : g.findDOMNode(this);
		if (!t || P.disabled) {
			this.safeSetState({ status: I }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: se }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: I }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : g.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = p(t, [
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
		return /* @__PURE__ */ d.createElement(F.Provider, { value: null }, typeof n == "function" ? n(e, r) : d.cloneElement(d.Children.only(n), r));
	}, t;
}(d.Component);
R.contextType = F, R.propTypes = {};
function ce() {}
R.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: ce,
	onEntering: ce,
	onEntered: ce,
	onExit: ce,
	onExiting: ce,
	onExited: ce
}, R.UNMOUNTED = ae, R.EXITED = I, R.ENTERING = L, R.ENTERED = oe, R.EXITING = se;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/canUseDOM.js
var le = !!(typeof window < "u" && window.document && window.document.createElement), ue = !1, de = !1;
try {
	var fe = {
		get passive() {
			return ue = !0;
		},
		get once() {
			return de = ue = !0;
		}
	};
	le && (window.addEventListener("test", fe, fe), window.removeEventListener("test", fe, !0));
} catch {}
function pe(e, t, n, r) {
	if (r && typeof r != "boolean" && !de) {
		var i = r.once, a = r.capture, o = n;
		!de && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, ue ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeEventListener.js
function me(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/listen.js
function z(e, t, n, r) {
	return pe(e, t, n, r), function() {
		me(e, t, n, r);
	};
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/triggerEvent.js
function he(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/transitionEnd.js
function ge(e) {
	var t = M(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function _e(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || he(e, "transitionend", !0);
	}, t + n), a = z(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function ve(e, t, n, r) {
	n ??= ge(e) || 0;
	var i = _e(e, n, r), a = z(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/transitionEndListener.js
function ye(e, t) {
	var n = M(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function be(e, t) {
	var n = ve(e, function(r) {
		r.target === e && (n(), t(r));
	}, ye(e, "transitionDuration") + ye(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createChainedFunction.js
function xe() {
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
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Se(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function Ce(e) {
	let t = (0, d.useRef)(e);
	return (0, d.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function we(e) {
	let t = Ce(e);
	return (0, d.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var Te = ["className", "children"], Ee, De = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Oe = (Ee = {}, Ee[L] = "show", Ee[oe] = "show", Ee), ke = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = p(e, Te), a = (0, d.useCallback)(function(e) {
		Se(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ d.createElement(R, f({
		ref: t,
		addEndListener: be
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ d.cloneElement(r, f({}, t, { className: (0, h.default)("fade", n, r.props.className, Oe[e]) }));
	});
});
ke.defaultProps = De, ke.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SafeAnchor.js
var Ae = [
	"as",
	"disabled",
	"onKeyDown"
];
function je(e) {
	return !e || e.trim() === "#";
}
var Me = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "a" : n, i = e.disabled, a = e.onKeyDown, o = p(e, Ae), s = function(e) {
		var t = o.href, n = o.onClick;
		if ((i || je(t)) && e.preventDefault(), i) {
			e.stopPropagation();
			return;
		}
		n && n(e);
	};
	return je(o.href) && (o.role = o.role || "button", o.href = o.href || "#"), i && (o.tabIndex = -1, o["aria-disabled"] = !0), /* @__PURE__ */ d.createElement(r, f({ ref: t }, o, {
		onClick: s,
		onKeyDown: xe(function(e) {
			e.key === " " && (e.preventDefault(), s(e));
		}, a)
	}));
});
Me.displayName = "SafeAnchor";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var Ne = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], Pe = { pill: !1 }, Fe = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.pill, a = e.className, o = e.as, s = o === void 0 ? "span" : o, c = p(e, Ne), l = w(n, "badge");
	return /* @__PURE__ */ d.createElement(s, f({ ref: t }, c, { className: (0, h.default)(a, l, i && l + "-pill", r && l + "-" + r) }));
});
Fe.displayName = "Badge", Fe.defaultProps = Pe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Button.js
var Ie = [
	"bsPrefix",
	"variant",
	"size",
	"active",
	"className",
	"block",
	"type",
	"as"
], Le = {
	variant: "primary",
	active: !1,
	disabled: !1
}, Re = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.size, a = e.active, o = e.className, s = e.block, c = e.type, l = e.as, u = p(e, Ie), m = w(n, "btn"), g = (0, h.default)(o, m, a && "active", r && m + "-" + r, s && m + "-block", i && m + "-" + i);
	if (u.href) return /* @__PURE__ */ d.createElement(Me, f({}, u, {
		as: l,
		ref: t,
		className: (0, h.default)(g, u.disabled && "disabled")
	}));
	t && (u.ref = t), c ? u.type = c : l || (u.type = "button");
	var _ = l || "button";
	return /* @__PURE__ */ d.createElement(_, f({}, u, { className: g }));
});
Re.displayName = "Button", Re.defaultProps = Le;
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function ze() {
	let e = (0, d.useRef)(!0), t = (0, d.useRef)(() => e.current);
	return (0, d.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Be(e) {
	let t = (0, d.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Ve(e) {
	let t = Be(e);
	(0, d.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var He = 2 ** 31 - 1;
function Ue(e, t, n) {
	let r = n - Date.now();
	e.current = r <= He ? setTimeout(t, r) : setTimeout(() => Ue(e, t, n), He);
}
function We() {
	let e = ze(), t = (0, d.useRef)();
	return Ve(() => clearTimeout(t.current)), (0, d.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= He ? t.current = setTimeout(r, i) : Ue(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
var Ge = [
	"bsPrefix",
	"className",
	"as"
], Ke = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], qe = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "div" : i, o = p(e, Ge), s = w(n, "col"), c = [], l = [];
	return Ke.forEach(function(e) {
		var t = o[e];
		delete o[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 ? !0 : a, r = t.offset, i = t.order;
		} else n = t;
		var u = e === "xs" ? "" : "-" + e;
		n && c.push(n === !0 ? "" + s + u : "" + s + u + "-" + n), i != null && l.push("order" + u + "-" + i), r != null && l.push("offset" + u + "-" + r);
	}), c.length || c.push(s), /* @__PURE__ */ d.createElement(a, f({}, o, {
		ref: t,
		className: h.default.apply(void 0, [r].concat(c, l))
	}));
});
qe.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function Je() {
	return (0, d.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function Ye(e) {
	let t = ze();
	return [e[0], (0, d.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var B = "bottom", V = "right", H = "left", Xe = "auto", Ze = [
	"top",
	B,
	V,
	H
], Qe = "start", $e = "clippingParents", et = "viewport", tt = "popper", nt = "reference", rt = /* @__PURE__ */ Ze.reduce(function(e, t) {
	return e.concat([t + "-" + Qe, t + "-end"]);
}, []), it = /* @__PURE__ */ [].concat(Ze, [Xe]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Qe,
		t + "-end"
	]);
}, []), at = [
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
function U(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function W(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function ot(e) {
	return e instanceof W(e).Element || e instanceof Element;
}
function G(e) {
	return e instanceof W(e).HTMLElement || e instanceof HTMLElement;
}
function st(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof W(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var K = Math.max, ct = Math.min, lt = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function ut() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function dt() {
	return !/^((?!chrome|android).)*safari/i.test(ut());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function ft(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && G(e) && (i = e.offsetWidth > 0 && lt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && lt(r.height) / e.offsetHeight || 1);
	var o = (ot(e) ? W(e) : window).visualViewport, s = !dt() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function pt(e) {
	var t = ft(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function mt(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && st(n)) {
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
function q(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function J(e) {
	return W(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function ht(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(q(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Y(e) {
	return ((ot(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function gt(e) {
	return q(e) === "html" ? e : e.assignedSlot || e.parentNode || (st(e) ? e.host : null) || Y(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function _t(e) {
	return !G(e) || J(e).position === "fixed" ? null : e.offsetParent;
}
function vt(e) {
	var t = /firefox/i.test(ut());
	if (/Trident/i.test(ut()) && G(e) && J(e).position === "fixed") return null;
	var n = gt(e);
	for (st(n) && (n = n.host); G(n) && ["html", "body"].indexOf(q(n)) < 0;) {
		var r = J(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function yt(e) {
	for (var t = W(e), n = _t(e); n && ht(n) && J(n).position === "static";) n = _t(n);
	return n && (q(n) === "html" || q(n) === "body" && J(n).position === "static") ? t : n || vt(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function bt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function xt(e, t, n) {
	return K(e, ct(t, n));
}
function St(e, t, n) {
	var r = xt(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Ct() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function wt(e) {
	return Object.assign({}, Ct(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Tt(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Et = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, wt(typeof e == "number" ? Tt(e, Ze) : e);
};
function Dt(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = U(n.placement), c = bt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Et(i.padding, n), d = pt(a), f = c === "y" ? "top" : H, p = c === "y" ? B : V, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = yt(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = xt(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Ot(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || mt(t.elements.popper, r) && (t.elements.arrow = r));
}
var kt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Dt,
	effect: Ot,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function At(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var jt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Mt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: lt(n * i) / i || 0,
		y: lt(r * i) / i || 0
	};
}
function Nt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = H, b = "top", x = window;
	if (l) {
		var S = yt(n), C = "clientHeight", w = "clientWidth";
		if (S === W(n) && (S = Y(n), J(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = B;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = V;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && jt), O = u === !0 ? Mt({
		x: p,
		y: h
	}, W(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Pt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: U(t.placement),
		variation: At(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ft = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Pt,
	data: {}
}, It = { passive: !0 };
function Lt(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = W(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, It);
	}), s && c.addEventListener("resize", n.update, It), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, It);
		}), s && c.removeEventListener("resize", n.update, It);
	};
}
var Rt = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Lt,
	data: {}
}, zt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Bt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return zt[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Vt = {
	start: "end",
	end: "start"
};
function Ht(e) {
	return e.replace(/start|end/g, function(e) {
		return Vt[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Ut(e) {
	var t = W(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function Wt(e) {
	return ft(Y(e)).left + Ut(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function Gt(e, t) {
	var n = W(e), r = Y(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = dt();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Wt(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Kt(e) {
	var t = Y(e), n = Ut(e), r = e.ownerDocument?.body, i = K(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = K(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Wt(e), s = -n.scrollTop;
	return J(r || t).direction === "rtl" && (o += K(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function qt(e) {
	var t = J(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Jt(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(q(e)) >= 0 ? e.ownerDocument.body : G(e) && qt(e) ? e : Jt(gt(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Yt(e, t) {
	t === void 0 && (t = []);
	var n = Jt(e), r = n === e.ownerDocument?.body, i = W(n), a = r ? [i].concat(i.visualViewport || [], qt(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Yt(gt(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function Xt(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function Zt(e, t) {
	var n = ft(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Qt(e, t, n) {
	return t === "viewport" ? Xt(Gt(e, n)) : ot(t) ? Zt(t, n) : Xt(Kt(Y(e)));
}
function $t(e) {
	var t = Yt(gt(e)), n = ["absolute", "fixed"].indexOf(J(e).position) >= 0 && G(e) ? yt(e) : e;
	return ot(n) ? t.filter(function(e) {
		return ot(e) && mt(e, n) && q(e) !== "body";
	}) : [];
}
function en(e, t, n, r) {
	var i = t === "clippingParents" ? $t(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Qt(e, n, r);
		return t.top = K(i.top, t.top), t.right = ct(i.right, t.right), t.bottom = ct(i.bottom, t.bottom), t.left = K(i.left, t.left), t;
	}, Qt(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function tn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? U(r) : null, a = r ? At(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case B:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case V:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case H:
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
	var l = i ? bt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case Qe:
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
function nn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? $e : s, l = n.rootBoundary, u = l === void 0 ? et : l, d = n.elementContext, f = d === void 0 ? tt : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = wt(typeof g == "number" ? Tt(g, Ze) : g), v = f === "popper" ? nt : tt, y = e.rects.popper, b = e.elements[m ? v : f], x = en(ot(b) ? b : b.contextElement || Y(e.elements.popper), c, u, o), S = ft(e.elements.reference), C = tn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = Xt(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function rn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? it : c, u = At(r), d = u ? s ? rt : rt.filter(function(e) {
		return At(e) === u;
	}) : Ze, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = nn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[U(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function an(e) {
	if (U(e) === "auto") return [];
	var t = Bt(e);
	return [
		Ht(e),
		t,
		Ht(t)
	];
}
function on(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = U(g) === g, v = c || (_ || !m ? [Bt(g)] : an(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(U(n) === "auto" ? rn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = U(E), O = At(E) === Qe, k = ["top", B].indexOf(D) >= 0, ee = k ? "width" : "height", A = nn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), j = k ? O ? V : H : O ? B : "top";
			b[ee] > x[ee] && (j = Bt(j));
			var te = Bt(j), M = [];
			if (a && M.push(A[D] <= 0), s && M.push(A[j] <= 0, A[te] <= 0), M.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, M);
		}
		if (C) for (var ne = m ? 3 : 1, re = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, N = ne; N > 0 && re(N) !== "break"; N--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var sn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: on,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function cn(e, t, n) {
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
function ln(e) {
	return [
		"top",
		V,
		B,
		H
	].some(function(t) {
		return e[t] >= 0;
	});
}
function un(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = nn(t, { elementContext: "reference" }), s = nn(t, { altBoundary: !0 }), c = cn(o, r), l = cn(s, i, a), u = ln(c), d = ln(l);
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
var dn = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: un
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function fn(e, t, n) {
	var r = U(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function pn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = it.reduce(function(e, n) {
		return e[n] = fn(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var mn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: pn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function hn(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = tn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var gn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: hn,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function _n(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function vn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = nn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = U(t.placement), v = At(t.placement), y = !v, b = bt(_), x = _n(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : H, ee = b === "y" ? B : V, A = b === "y" ? "height" : "width", j = S[b], te = j + g[k], M = j - g[ee], ne = p ? -w[A] / 2 : 0, re = v === "start" ? C[A] : w[A], N = v === "start" ? -w[A] : -C[A], P = t.elements.arrow, F = p && P ? pt(P) : {
				width: 0,
				height: 0
			}, ie = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ct(), ae = ie[k], I = ie[ee], L = xt(0, C[A], F[A]), oe = y ? C[A] / 2 - ne - L - ae - E.mainAxis : re - L - ae - E.mainAxis, se = y ? -C[A] / 2 + ne + L + I + E.mainAxis : N + L + I + E.mainAxis, R = t.elements.arrow && yt(t.elements.arrow), ce = R ? b === "y" ? R.clientTop || 0 : R.clientLeft || 0 : 0, le = D?.[b] ?? 0, ue = j + oe - le - ce, de = j + se - le, fe = xt(p ? ct(te, ue) : te, j, p ? K(M, de) : M);
			S[b] = fe, O[b] = fe - j;
		}
		if (s) {
			var pe = b === "x" ? "top" : H, me = b === "x" ? B : V, z = S[x], he = x === "y" ? "height" : "width", ge = z + g[pe], _e = z - g[me], ve = ["top", H].indexOf(_) !== -1, ye = D?.[x] ?? 0, be = ve ? ge : z - C[he] - w[he] - ye + E.altAxis, xe = ve ? z + C[he] + w[he] - ye - E.altAxis : _e, Se = p && ve ? St(be, z, xe) : xt(p ? be : ge, z, p ? xe : _e);
			S[x] = Se, O[x] = Se - z;
		}
		t.modifiersData[r] = O;
	}
}
var yn = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: vn,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function bn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function xn(e) {
	return e === W(e) || !G(e) ? Ut(e) : bn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function Sn(e) {
	var t = e.getBoundingClientRect(), n = lt(t.width) / e.offsetWidth || 1, r = lt(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Cn(e, t, n) {
	n === void 0 && (n = !1);
	var r = G(t), i = G(t) && Sn(t), a = Y(t), o = ft(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((q(t) !== "body" || qt(a)) && (s = xn(t)), G(t) ? (c = ft(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Wt(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function wn(e) {
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
function Tn(e) {
	var t = wn(e);
	return at.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function En(e) {
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
function Dn(e) {
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
var On = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function kn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function An(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? On : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, On, a),
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
					reference: ot(e) ? Yt(e) : e.contextElement ? Yt(e.contextElement) : [],
					popper: Yt(t)
				};
				var s = Tn(Dn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (kn(t, n)) {
						i.rects = {
							reference: Cn(t, yt(n), i.options.strategy === "fixed"),
							popper: pt(n)
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
			update: En(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!kn(e, t)) return c;
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
var jn = An({ defaultModifiers: [
	dn,
	gn,
	Ft,
	Rt,
	mn,
	sn,
	yn,
	kt
] }), Mn = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Nn = {
	name: "applyStyles",
	enabled: !1
}, Pn = {
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
}, Fn = [];
function In(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, m = u === void 0 ? Fn : u, h = p(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), g = (0, d.useRef)(), _ = (0, d.useCallback)(function() {
		var e;
		(e = g.current) == null || e.update();
	}, []), v = (0, d.useCallback)(function() {
		var e;
		(e = g.current) == null || e.forceUpdate();
	}, []), y = Ye((0, d.useState)({
		placement: s,
		update: _,
		forceUpdate: v,
		attributes: {},
		styles: {
			popper: Mn(l),
			arrow: {}
		}
	})), b = y[0], x = y[1], S = (0, d.useMemo)(function() {
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
					update: _,
					forceUpdate: v,
					placement: t.placement
				});
			}
		};
	}, [
		_,
		v,
		x
	]);
	return (0, d.useEffect)(function() {
		!g.current || !a || g.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(m, [S, Nn])
		});
	}, [
		l,
		s,
		S,
		a
	]), (0, d.useEffect)(function() {
		if (!(!a || e == null || t == null)) return g.current = jn(e, t, f({}, h, {
			placement: s,
			strategy: l,
			modifiers: [].concat(m, [Pn, S])
		})), function() {
			g.current != null && (g.current.destroy(), g.current = void 0, x(function(e) {
				return f({}, e, {
					attributes: {},
					styles: { popper: Mn(l) }
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
function Ln(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/safeFindDOMNode.js
var Rn = /* @__PURE__ */ r((/* @__PURE__ */ t(((e, t) => {
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
})))());
function zn(e) {
	return e && "setState" in e ? g.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var Bn = (function(e) {
	return T(zn(e));
}), Vn = 27, Hn = function() {};
function Un(e) {
	return e.button === 0;
}
function Wn(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Gn = function(e) {
	return e && ("current" in e ? e.current : e);
};
function Kn(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, d.useRef)(!1), c = t || Hn, l = (0, d.useCallback)(function(t) {
		var n = Gn(e);
		(0, Rn.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || Wn(t) || !Un(t) || !!Ln(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = we(function(e) {
		s.current || c(e);
	}), f = we(function(e) {
		e.keyCode === Vn && c(e);
	});
	(0, d.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Bn(Gn(e)), r = z(n, o, l, !0), a = z(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = z(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				f(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return z(e, "mousemove", Hn);
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
		f
	]);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function qn(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function Jn(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function Yn(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = qn(u.modifiers);
	return f({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: Jn(f({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: f({}, d.preventOverflow, { options: s ? f({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: f({ offset: a }, d.offset?.options) },
			arrow: f({}, d.arrow, {
				enabled: !!c,
				options: f({}, d.arrow?.options, { element: c })
			}),
			flip: f({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var Xn = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function Zn(e, t) {
	let n = Xn(e), r = Xn(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function Qn(e, t) {
	return (0, d.useMemo)(() => Zn(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function $n(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function er(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function tr() {
	var e = (0, d.useRef)(null), t = (0, d.useRef)(null), n = (0, d.useRef)(null), r = w(void 0, "popover"), i = w(void 0, "dropdown-menu");
	return [(0, d.useCallback)(function(n) {
		!n || !($n(n, r) || $n(n, i)) || (t.current = er(n), n.style.margin = "0", e.current = n);
	}, [r, i]), [
		(0, d.useMemo)(function() {
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
		(0, d.useMemo)(function() {
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
		(0, d.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var i = t.state;
					if (!(!e.current || !i.elements.arrow || !$n(e.current, r))) {
						if (i.modifiersData["arrow#persistent"]) {
							var a = er(i.elements.arrow), o = a.top, s = a.right, c = o || s;
							i.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = er(i.elements.arrow);
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
var nr = /* @__PURE__ */ t(((e, t) => {
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
})), rr = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? T().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function ir(e, t) {
	var n = (0, d.useState)(function() {
		return rr(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = rr(e);
		a && i(a);
	}
	return (0, d.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, d.useEffect)(function() {
		var t = rr(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var X = /* @__PURE__ */ r(N()), ar = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = Je(), m = u[0], h = u[1], _ = Je(), v = _[0], y = _[1], b = Qn(h, t), x = ir(e.container), S = ir(e.target), C = (0, d.useState)(!e.show), w = C[0], T = C[1], E = In(S, m, Yn({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: v,
		popperConfig: c
	})), D = E.styles, O = E.attributes, k = p(E, ["styles", "attributes"]);
	e.show ? w && T(!1) : !e.transition && !w && T(!0);
	var ee = function() {
		T(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || l && !w;
	if (Kn(m, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(f({}, k, {
		show: !!e.show,
		props: f({}, O.popper, {
			style: D.popper,
			ref: b
		}),
		arrowProps: f({}, O.arrow, {
			style: D.arrow,
			ref: y
		})
	}));
	if (l) {
		var te = e.onExit, M = e.onExiting, ne = e.onEnter, re = e.onEntering, N = e.onEntered;
		j = /* @__PURE__ */ d.createElement(l, {
			in: e.show,
			appear: !0,
			onExit: te,
			onExiting: M,
			onExited: ee,
			onEnter: ne,
			onEntering: re,
			onEntered: N
		}, j);
	}
	return x ? /* @__PURE__ */ g.createPortal(j, x) : null;
});
ar.displayName = "Overlay", ar.propTypes = {
	show: X.default.bool,
	placement: X.default.oneOf(it),
	target: X.default.any,
	container: X.default.any,
	flip: X.default.bool,
	children: X.default.func.isRequired,
	containerPadding: X.default.number,
	popperConfig: X.default.object,
	rootClose: X.default.bool,
	rootCloseEvent: X.default.oneOf(["click", "mousedown"]),
	rootCloseDisabled: X.default.bool,
	onHide: function(e) {
		var t = [...arguments].slice(1);
		if (e.rootClose) {
			var n;
			return (n = X.default.func).isRequired.apply(n, [e].concat(t));
		}
		return X.default.func.apply(X.default, [e].concat(t));
	},
	transition: X.default.elementType,
	onEnter: X.default.func,
	onEntering: X.default.func,
	onEntered: X.default.func,
	onExit: X.default.func,
	onExiting: X.default.func,
	onExited: X.default.func
};
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Overlay.js
var or = [
	"children",
	"transition",
	"popperConfig"
], sr = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], cr = {
	transition: ke,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function lr(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(zn(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(zn(e));
	};
}
function ur(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = p(e, or), o = (0, d.useRef)({}), s = tr(), c = s[0], l = s[1], u = n === !0 ? ke : n || null;
	return /* @__PURE__ */ d.createElement(ar, f({}, a, {
		ref: c,
		popperConfig: f({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = p(e, sr);
		lr(r, i);
		var m = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(f({}, u, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: m,
			arrowProps: i
		})) : /* @__PURE__ */ d.cloneElement(t, f({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: m,
			className: (0, h.default)(t.props.className, !n && a && "show"),
			style: f({}, t.props.style, r.style)
		}));
	});
}
ur.defaultProps = cr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var dr = [
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
], fr = /* @__PURE__ */ function(e) {
	y(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(d.Component);
function pr(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function mr(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Ln(i, a) && e.apply(void 0, t);
}
var hr = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function gr(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, m = e.placement, h = e.flip, g = h === void 0 ? m && m.indexOf("auto") !== -1 : h, v = p(e, dr), y = (0, d.useRef)(null), b = We(), x = (0, d.useRef)(""), S = _(o, c, l), C = S[0], w = S[1], T = pr(u), E = typeof r == "function" ? {} : d.Children.only(r).props, D = E.onFocus, O = E.onBlur, k = E.onClick, ee = (0, d.useCallback)(function() {
		return zn(y.current);
	}, []), A = (0, d.useCallback)(function() {
		if (b.clear(), x.current = "show", !T.show) {
			w(!0);
			return;
		}
		b.set(function() {
			x.current === "show" && w(!0);
		}, T.show);
	}, [
		T.show,
		w,
		b
	]), j = (0, d.useCallback)(function() {
		if (b.clear(), x.current = "hide", !T.hide) {
			w(!1);
			return;
		}
		b.set(function() {
			x.current === "hide" && w(!1);
		}, T.hide);
	}, [
		T.hide,
		w,
		b
	]), te = (0, d.useCallback)(function() {
		A();
		var e = [...arguments];
		D?.apply(void 0, e);
	}, [A, D]), M = (0, d.useCallback)(function() {
		j();
		var e = [...arguments];
		O?.apply(void 0, e);
	}, [j, O]), ne = (0, d.useCallback)(function() {
		w(!C), k && k.apply(void 0, arguments);
	}, [
		k,
		w,
		C
	]), re = (0, d.useCallback)(function() {
		mr(A, [...arguments], "fromElement");
	}, [A]), N = (0, d.useCallback)(function() {
		mr(j, [...arguments], "toElement");
	}, [j]), P = t == null ? [] : [].concat(t), F = {};
	return P.indexOf("click") !== -1 && (F.onClick = ne), P.indexOf("focus") !== -1 && (F.onFocus = te, F.onBlur = M), P.indexOf("hover") !== -1 && (F.onMouseOver = re, F.onMouseOut = N), /* @__PURE__ */ d.createElement(d.Fragment, null, typeof r == "function" ? r(f({}, F, { ref: y })) : /* @__PURE__ */ d.createElement(fr, { ref: y }, /* @__PURE__ */ (0, d.cloneElement)(r, F)), /* @__PURE__ */ d.createElement(ur, f({}, v, {
		show: C,
		onHide: j,
		flip: g,
		placement: m,
		popperConfig: a,
		target: ee
	}), n));
}
gr.defaultProps = hr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var _r = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], vr = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], yr = { noGutters: !1 }, br = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, a = e.as, o = a === void 0 ? "div" : a, s = p(e, _r), c = w(n, "row"), l = c + "-cols", u = [];
	return vr.forEach(function(e) {
		var t = s[e];
		delete s[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && u.push("" + l + r + "-" + n);
	}), /* @__PURE__ */ d.createElement(o, f({ ref: t }, s, { className: h.default.apply(void 0, [
		r,
		c,
		i && "no-gutters"
	].concat(u)) }));
});
br.displayName = "Row", br.defaultProps = yr, nr();
var xr = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Sr = { placement: "right" }, Cr = /* @__PURE__ */ d.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.placement, i = e.className, a = e.style, o = e.children, s = e.arrowProps;
	e.popper, e.show;
	var c = p(e, xr);
	n = w(n, "tooltip");
	var l = (r?.split("-") || [])[0];
	return /* @__PURE__ */ d.createElement("div", f({
		ref: t,
		style: a,
		role: "tooltip",
		"x-placement": l,
		className: (0, h.default)(i, n, "bs-tooltip-" + l)
	}, c), /* @__PURE__ */ d.createElement("div", f({ className: "arrow" }, s)), /* @__PURE__ */ d.createElement("div", { className: n + "-inner" }, o));
});
Cr.defaultProps = Sr, Cr.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/newId.js
var wr = 0, Tr = (e = "id") => (wr += 1, `${e}${wr}`), Er = /* @__PURE__ */ function(e) {
	return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Dr(e, t, n) {
	class r extends d.Component {
		static displayName = `withDeprecatedProps(${t})`;
		constructor(e) {
			super(e), this.transformProps = this.transformProps.bind(this);
		}
		warn(e) {}
		transformProps(e, r) {
			if (n[r] === void 0) return e[r] = this.props[r], e;
			let { deprType: i, newName: a, expect: o, transform: s, message: c } = n[r];
			switch (i) {
				case Er.MOVED:
					this.warn(`${t}: The prop '${r}' has been moved to '${a}'.`), e[a] = this.props[r];
					break;
				case Er.REMOVED:
					this.warn(`${t}: The prop '${r}' has been removed. '${c}'`);
					break;
				case Er.FORMAT:
					o(this.props[r]) ? e[r] = this.props[r] : (this.warn(`${t}: The prop '${r}' expects a new format. ${c}`), e[r] = s(this.props[r], this.props));
					break;
				case Er.MOVED_AND_FORMAT: {
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
			return /* @__PURE__ */ d.createElement(e, { ...n }, this.props.children || t);
		}
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Icon/index.js
function Or({ src: e, id: t, className: n, hidden: r, screenReaderText: i, svgAttrs: a, size: o, ...s }) {
	if (e) {
		let r = a["aria-label"] || a["aria-labelledby"], c = { ...a };
		return r || (c["aria-label"] = void 0, c["aria-hidden"] = !0), /* @__PURE__ */ d.createElement("span", {
			className: (0, h.default)("pgn__icon", { [`pgn__icon__${o}`]: !!o }, n),
			id: t,
			...s
		}, /* @__PURE__ */ d.createElement(e, {
			role: "img",
			focusable: !1,
			...c
		}), i && /* @__PURE__ */ d.createElement("span", { className: "sr-only" }, i));
	}
	return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("span", {
		id: t || Tr("Icon"),
		className: n,
		"aria-hidden": r
	}), i && /* @__PURE__ */ d.createElement("span", { className: "sr-only" }, i));
}
Or.propTypes = {
	src: X.default.elementType,
	svgAttrs: X.default.shape({
		"aria-label": X.default.string,
		"aria-labelledby": X.default.string
	}),
	id: X.default.string,
	size: X.default.oneOf([
		"xs",
		"sm",
		"md",
		"lg"
	]),
	className: X.default.string,
	hidden: X.default.bool,
	screenReaderText: X.default.oneOfType([X.default.string, X.default.element])
}, Or.defaultProps = {
	src: null,
	svgAttrs: {},
	id: void 0,
	hidden: !0,
	screenReaderText: void 0,
	size: void 0,
	className: void 0
};
var kr = Dr(Or, "Icon", { className: {
	deprType: Er.FORMAT,
	expect: (e) => typeof e == "string",
	transform: (e) => Array.isArray(e) ? e.join(" ") : e,
	message: "It should be a string."
} }), Ar = /* @__PURE__ */ d.forwardRef(({ children: e, iconAfter: t, iconBefore: n, size: r, ...i }, a) => /* @__PURE__ */ d.createElement(Re, {
	size: r,
	...i,
	className: (0, h.default)(i.className),
	ref: a
}, n && /* @__PURE__ */ d.createElement(kr, {
	className: "btn-icon-before",
	size: r,
	src: n
}), e, t && /* @__PURE__ */ d.createElement(kr, {
	className: "btn-icon-after",
	size: r,
	src: t
}))), jr = /* @__PURE__ */ d.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /* @__PURE__ */ d.createElement(Fe, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), Mr = (e) => /* @__PURE__ */ d.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ d.createElement("path", {
	d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",
	fill: "currentColor"
})), Nr = (e) => /* @__PURE__ */ d.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ d.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), Pr = [
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
], Fr = [
	"hover",
	"click",
	"focus"
];
function Ir(e) {
	return /* @__PURE__ */ d.createElement(ur, { ...e });
}
function Lr(e) {
	return /* @__PURE__ */ d.createElement(gr, { ...e }, e.children);
}
var Rr = X.default.oneOf(Fr);
Ir.propTypes = {
	children: X.default.node.isRequired,
	container: X.default.oneOfType([X.default.elementType, X.default.func]),
	onEnter: X.default.func,
	onEntered: X.default.func,
	onEntering: X.default.func,
	onExit: X.default.func,
	onExited: X.default.func,
	onExiting: X.default.func,
	onHide: X.default.func,
	placement: X.default.oneOf(Pr),
	popperConfig: X.default.shape({}),
	rootClose: X.default.bool,
	rootCloseEvent: X.default.oneOf(["click", "mousedown"]),
	show: X.default.bool,
	target: X.default.oneOfType([X.default.elementType, X.default.func]),
	transition: X.default.oneOfType([X.default.object, X.default.bool])
}, Lr.propTypes = {
	children: X.default.oneOfType([X.default.element, X.default.func]).isRequired,
	overlay: X.default.oneOfType([X.default.element, X.default.func]).isRequired,
	defaultShow: X.default.bool,
	delay: X.default.oneOfType([X.default.number, X.default.shape({})]),
	flip: X.default.bool,
	onHide: X.default.func,
	onToggle: X.default.func,
	placement: X.default.oneOf(Pr),
	popperConfig: X.default.shape({}),
	show: X.default.bool,
	target: X.default.instanceOf(EventTarget),
	trigger: X.default.oneOfType([Rr, X.default.arrayOf(Rr)])
}, Ir.defaultProps = {
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
	transition: ke
}, Lr.defaultProps = {
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
var zr = [
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
], Br = /* @__PURE__ */ d.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ d.createElement(Cr, {
	...n,
	className: (0, h.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Br.propTypes = {
	...Cr.propTypes,
	id: X.default.string.isRequired,
	placement: X.default.oneOf(zr),
	arrowProps: X.default.shape({
		ref: X.default.oneOfType([X.default.func, X.default.shape({ current: X.default.element })]),
		style: X.default.shape({})
	}),
	show: X.default.bool,
	popper: X.default.shape({}),
	bsPrefix: X.default.string,
	children: X.default.node,
	className: X.default.string,
	variant: X.default.string
}, Br.defaultProps = {
	...Br.defaultProps,
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
var Vr = /* @__PURE__ */ d.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = kr, isActive: u = !1, children: f, ...p }, m) => {
	let g = n ? "inverse-" : "", _ = u ? `${c}-` : "", v = l;
	return /* @__PURE__ */ d.createElement("button", {
		"aria-label": t,
		className: (0, h.default)("btn-icon", `btn-icon-${g}${c}`, `btn-icon-${s}`, { [`btn-icon-${g}${_}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: m,
		...p
	}, /* @__PURE__ */ d.createElement("span", { className: "btn-icon__icon-container" }, v && /* @__PURE__ */ d.createElement(v, {
		className: (0, h.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Hr({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ d.createElement(Lr, {
		placement: e,
		overlay: /* @__PURE__ */ d.createElement(Br, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ d.createElement(Vr, { ...n }));
}
Vr.IconButtonWithTooltip = Hr;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/data/constants.js
var Ur = "pgn__overflow-scroll-item", Wr = (e) => e?.offsetLeft || 0, Gr = ({ overflowRef: e, activeChildElementIndex: t, childrenElements: n, scrollAnimationBehavior: r = "smooth", onScrollPrevious: i, onScrollNext: a, onChangeOffset: o, currentOffset: s, offset: c, offsetType: l = "percentage" }) => {
	let u = (0, d.useCallback)((e, t, n) => {
		let r = parseInt(e, 10);
		return t === "percentage" ? Math.round(r / 100 * n) : r;
	}, []);
	return {
		scrollToPrevious: (0, d.useCallback)(() => {
			if (!e) return;
			let a = (e) => e <= 0 ? n[0] : n[e], d = t - 1, f = Wr(a(d));
			c && (f = s - u(c, l, e.scrollWidth - e.clientWidth), o && o(f < 0 ? 0 : f)), e.scrollTo({
				left: f,
				behavior: r
			}), i && i({ currentActiveChildElementIndex: d <= 0 ? 0 : d });
		}, [
			e,
			t,
			c,
			r,
			i,
			n,
			u,
			l,
			s,
			o
		]),
		scrollToNext: (0, d.useCallback)(() => {
			if (!e) return;
			let i = n.length - 1, d = t + 1, f = d >= i, p = Wr(f ? n[i] : n[d]);
			if (c) {
				let t = e.scrollWidth - e.clientWidth;
				p = s + u(c, l, t), o && o(p > t ? t : p);
			}
			e.scrollTo({
				left: p,
				behavior: r
			}), a && a({ currentActiveChildElementIndex: f ? i : d });
		}, [
			e,
			n,
			t,
			c,
			r,
			a,
			u,
			l,
			s,
			o
		])
	};
}, Kr = "pgn__overflow-scroll-overflow-container", qr = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%", Jr = "linear-gradient(to right, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%", Yr = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%)", Xr = ({ overflowRef: e, hasInteractiveChildren: t, disableScroll: n, disableOpacityMasks: r, isScrolledToStart: i, isScrolledToEnd: a }) => {
	(0, d.useEffect)(() => {
		if (!e) return;
		t && e.tabIndex !== "-1" && (e.tabIndex = "-1"), !t && e.tabIndex !== "0" && (e.tabIndex = "0");
		let o = globalThis.getComputedStyle(e), s = o.getPropertyValue("position"), c = o.getPropertyValue("overflow-x");
		if (e.classList.contains("pgn__overflow-scroll-overflow-container") || e.classList.add(Kr), s !== "relative" && (e.style.position = "relative"), n && c !== "hidden" && (e.style.overflowX = "hidden"), !n && c !== "scroll" && (e.style.overflowX = "scroll"), r) e.style.removeProperty("mask-image"), e.style.removeProperty("webkit-mask-image");
		else {
			let t = (() => {
				if (i && !a) return Jr;
				if (!i && a) return qr;
				if (!i && !a) return Yr;
			})();
			t ? (e.style.maskImage = t, e.style.webkitMaskImage = t) : (e.style.removeProperty("mask-image"), e.style.removeProperty("webkit-mask-image"));
		}
	}, [
		e,
		t,
		n,
		r,
		i,
		a
	]);
}, Zr = (e) => e ? Math.abs(Math.round(e.scrollLeft)) : 0, Qr = ({ overflowRef: e, childrenElements: t, activeChildElementIndex: n, onActiveChildElementIndexChange: r, disableScroll: i, onOverflowElementScrollLeftChange: a }) => {
	let [o, s] = (0, d.useState)(!1), [c, l] = (0, d.useState)(0), u = (0, d.useCallback)(({ isScrollingLeft: i }) => {
		let a = (e) => i ? e.offsetLeft : e.offsetLeft + e.offsetWidth;
		for (let i = 0; i < t.length; i++) {
			let o = t[i];
			if (a(o) > Zr(e)) {
				i !== n && r(i);
				break;
			}
		}
	}, [
		n,
		t,
		e,
		r
	]), f = (0, d.useCallback)((t) => {
		!e?.current || i || u({ isScrollingLeft: t.deltaX < 0 });
	}, [
		e,
		i,
		u
	]), p = (0, d.useCallback)(() => {
		if (!(!e || e === document.activeElement)) {
			for (let e = 0; e < t.length; e++) if (t[e].contains(document.activeElement) && e !== n) {
				r(e);
				break;
			}
		}
	}, [
		e,
		n,
		t,
		r
	]), m = (0, d.useCallback)(() => {
		let t = Zr(e);
		a(t), o && (u({ isScrollingLeft: t < c }), l(t));
	}, [
		o,
		e,
		u,
		c,
		a
	]), h = (0, d.useCallback)(() => {
		l(Zr(e)), s(!0);
	}, [e]), g = (0, d.useCallback)(() => {
		s(!1);
	}, []), _ = (0, d.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && l(Zr(e));
	}, [e]), v = (0, d.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && u({ isScrollingLeft: e.scrollLeft < c });
	}, [
		e,
		c,
		u
	]);
	return (0, d.useEffect)(() => {
		if (!e) return;
		let t = e;
		return t.addEventListener("focusin", p), t.addEventListener("keydown", _), t.addEventListener("keyup", v), t.addEventListener("scroll", m), i || (t.addEventListener("wheel", f), t.addEventListener("mousedown", h), t.addEventListener("mouseup", g)), () => {
			e && (t.removeEventListener("focusin", p), t.removeEventListener("keydown", _), t.removeEventListener("keyup", v), t.removeEventListener("scroll", m), i || (t?.removeEventListener("wheel", f), t?.removeEventListener("mousedown", h), t?.removeEventListener("mouseup", g)));
		};
	}, [
		e,
		i,
		f,
		p,
		_,
		v,
		m,
		g,
		h
	]), {
		updateActiveChildElementIndex: u,
		updateActiveChildElementOnWheel: f,
		updateActiveChildElementOnFocusIn: p,
		handleScrollEvent: m,
		handleMouseDownEvent: h,
		handleMouseUpEvent: g,
		updateActiveChildElementOnKeyDown: _,
		updateActiveChildElementOnKeyUp: v,
		isOverflowElementMouseDown: o,
		previousOverflowScrollLeft: c
	};
}, $r = ({ element: e, childQuerySelector: t }) => {
	if (!e) return [];
	let n = t || ".pgn__overflow-scroll-item", r = [...e.querySelectorAll(n)];
	return r.length, r;
}, ei = ({ overflowRef: e, childQuerySelector: t, onScrollPrevious: n, onScrollNext: r, hasInteractiveChildren: i = !1, disableScroll: a = !1, disableOpacityMasks: o = !1, scrollAnimationBehavior: s = "smooth", offset: c, offsetType: l = "percentage" }) => {
	let [u, f] = (0, d.useState)(0), [p, m] = (0, d.useState)(!0), [h, g] = (0, d.useState)(!0), [_, v] = (0, d.useState)(0), y = $r({
		element: e,
		childQuerySelector: t
	});
	(0, d.useEffect)(() => {
		if (!e) return;
		let n = $r({
			element: e,
			childQuerySelector: t
		}).reduce((e, t) => e + t.offsetWidth, 0);
		_ <= Math.max(y[0]?.offsetLeft, 0) ? m(!0) : m(!1);
		let r = Zr(e), i = n > e.getBoundingClientRect().width || !1, a = r >= e.scrollWidth - e.clientWidth;
		g(!!(!i || a));
	}, [
		e,
		t,
		p,
		h,
		_,
		y
	]);
	let [b, x] = (0, d.useState)(0);
	Qr({
		overflowRef: e,
		childrenElements: y,
		activeChildElementIndex: b,
		onActiveChildElementIndexChange: (0, d.useCallback)((e) => {
			x(e);
		}, []),
		disableScroll: a,
		onOverflowElementScrollLeftChange: (0, d.useCallback)((e) => {
			v(e);
		}, [])
	}), Xr({
		overflowRef: e,
		hasInteractiveChildren: i,
		disableScroll: a,
		disableOpacityMasks: o,
		isScrolledToStart: p,
		isScrolledToEnd: h
	});
	let { scrollToPrevious: S, scrollToNext: C } = Gr({
		overflowRef: e,
		activeChildElementIndex: b,
		childrenElements: y,
		scrollAnimationBehavior: s,
		onScrollPrevious: (0, d.useCallback)(() => {
			x((e) => Math.max(e - 1, 0)), n && n();
		}, [n]),
		onScrollNext: (0, d.useCallback)(() => {
			x((e) => Math.min(e + 1, y.length - 1)), r && r();
		}, [y, r]),
		onChangeOffset: f,
		currentOffset: u,
		offset: c,
		offsetType: l
	});
	return {
		scrollToPrevious: S,
		scrollToNext: C,
		isScrolledToStart: p,
		isScrolledToEnd: h,
		activeChildElementIndex: b
	};
}, ti = (e) => (0, d.useMemo)(() => d.Children.map(d.Children.toArray(e), (e) => (0, d.cloneElement)(e, { className: (0, h.default)(Ur, e.props.className) })), [e]), ni = /* @__PURE__ */ (0, d.createContext)();
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScrollItems.js
function ri({ children: e }) {
	return ti(e);
}
ri.propTypes = { children: X.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScroll.js
function ii({ ariaLabel: e, children: t, childQuerySelector: n, hasInteractiveChildren: r, disableScroll: i, disableOpacityMasks: a, onScrollPrevious: o, onScrollNext: s, offset: c, offsetType: l }) {
	let [u, f] = (0, d.useState)(), { isScrolledToStart: p, isScrolledToEnd: m, scrollToPrevious: h, scrollToNext: g } = ei({
		childQuerySelector: n,
		hasInteractiveChildren: r,
		disableScroll: i,
		disableOpacityMasks: a,
		onScrollPrevious: o,
		onScrollNext: s,
		overflowRef: u,
		offset: c,
		offsetType: l
	}), _ = (0, d.useMemo)(() => ({
		overflowRef: u,
		setOverflowRef: f,
		isScrolledToStart: p,
		isScrolledToEnd: m,
		scrollToPrevious: h,
		scrollToNext: g
	}), [
		u,
		f,
		p,
		m,
		h,
		g
	]);
	return /* @__PURE__ */ d.createElement("div", {
		className: "pgn__overflow-scroll",
		role: "region",
		"aria-label": e
	}, /* @__PURE__ */ d.createElement(ni.Provider, { value: _ }, t));
}
ii.Items = ri, ii.propTypes = {
	ariaLabel: X.default.string.isRequired,
	children: X.default.node.isRequired,
	childQuerySelector: X.default.string,
	hasInteractiveChildren: X.default.bool,
	disableScroll: X.default.bool,
	disableOpacityMasks: X.default.bool,
	onScrollPrevious: X.default.func,
	onScrollNext: X.default.func,
	offset: X.default.oneOfType([X.default.number, X.default.string]),
	offsetType: X.default.oneOf(["percentage", "fixed"])
}, ii.defaultProps = {
	childQuerySelector: void 0,
	disableScroll: !1,
	hasInteractiveChildren: !1,
	disableOpacityMasks: !1,
	onScrollPrevious: void 0,
	onScrollNext: void 0,
	offset: void 0,
	offsetType: "percentage"
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Stack/index.js
var ai = /* @__PURE__ */ (0, d.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /* @__PURE__ */ d.createElement("div", {
	ref: o,
	className: (0, h.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r)), oi = /* @__PURE__ */ d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.createElement("div", {
	className: (0, h.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), si = "card", ci = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"dark",
	"light"
], li = ["white", "muted"], ui = /* @__PURE__ */ d.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, h.default)(t, e ? `${e}-${si}` : si, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ d.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ d.createElement(oi, null, o) : o);
});
ui.propTypes = {
	prefix: X.default.string,
	bgColor: X.default.oneOf(ci),
	textColor: X.default.oneOf([...ci, ...li]),
	borderColor: X.default.oneOf(ci),
	hasBody: X.default.bool,
	as: X.default.elementType,
	className: X.default.string,
	children: X.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var Z = /* @__PURE__ */ (0, d.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function di({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ d.createElement(Z.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var fi = d.createContext({}), pi = !0;
function mi({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = pi, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function hi({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = d.useContext(fi), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, f = {
		...o,
		...mi(u)
	}, p = "react-loading-skeleton";
	n && (p += ` ${n}`);
	let m = u.inline ?? !1, h = [], g = Math.ceil(e);
	for (let t = 0; t < g; t++) {
		let n = f;
		if (g > e && t === g - 1) {
			let t = n.width ?? "100%", r = e % 1, i = typeof t == "number" ? t * r : `calc(${t} * ${r})`;
			n = {
				...n,
				width: i
			};
		}
		let r = d.createElement("span", {
			className: p,
			style: n,
			key: t
		}, "‌");
		m ? h.push(r) : h.push(d.createElement(d.Fragment, { key: t }, r, d.createElement("br", null)));
	}
	return d.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? pi
	}, t ? h.map((e, n) => d.createElement(t, { key: n }, e)) : h);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var gi = 20, _i = /* @__PURE__ */ d.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, d.useContext)(Z), l = (0, d.useCallback)((e) => {
		if (/* @__PURE__ */ d.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ d.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ d.createElement("div", { className: (0, h.default)("pgn__card-header", t) }, /* @__PURE__ */ d.createElement(hi, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ d.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ d.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ d.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ d.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
_i.propTypes = {
	actions: X.default.node,
	className: X.default.string,
	title: X.default.node,
	size: X.default.oneOf(["sm", "md"]),
	subtitle: X.default.node,
	skeletonHeight: X.default.number,
	skeletonWidth: X.default.number
}, _i.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: gi,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var vi = /* @__PURE__ */ (0, d.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ d.createElement("div", {
	className: (0, h.default)("pgn__card-divider", e),
	ref: n,
	...t
})), yi = 100, bi = /* @__PURE__ */ d.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, d.useContext)(Z);
	return c ? /* @__PURE__ */ d.createElement("div", { className: (0, h.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ d.createElement(hi, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ d.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ d.createElement("div", { className: "pgn__card-section-actions" }, r));
});
bi.propTypes = {
	className: X.default.string,
	children: X.default.node,
	title: X.default.node,
	actions: X.default.node,
	muted: X.default.bool,
	skeletonHeight: X.default.number,
	skeletonWidth: X.default.number
}, bi.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: yi,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var xi = 18, Si = /* @__PURE__ */ d.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, d.useContext)(Z), u = o || c, f = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, p = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ d.createElement("div", { className: (0, h.default)(t, f) }, /* @__PURE__ */ d.createElement(hi, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)(t, f),
		ref: s
	}, r && /* @__PURE__ */ d.createElement("div", { className: p }, r), e);
});
Si.propTypes = {
	children: X.default.node,
	className: X.default.string,
	textElement: X.default.node,
	isStacked: X.default.bool,
	orientation: X.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: X.default.number,
	skeletonWidth: X.default.number
}, Si.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: xi,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var Ci = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", wi = 140, Ti = 41, Ei = /* @__PURE__ */ d.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: f, imageLoadingType: p, skeletonDuringImageLoad: m }, g) => {
	let { orientation: _, isLoading: v } = (0, d.useContext)(Z), [y, b] = (0, d.useState)(!1), [x, S] = (0, d.useState)(!1), C = `pgn__card-wrapper-image-cap ${_}`, w = () => /* @__PURE__ */ d.createElement(hi, {
		containerClassName: "pgn__card-image-cap-loader",
		height: _ === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /* @__PURE__ */ d.createElement(hi, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (v) return /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)(C, f),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = Ci : S(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)(f, C),
		ref: g
	}, !!e && /* @__PURE__ */ d.createElement(d.Fragment, null, m && !y && w(), /* @__PURE__ */ d.createElement("img", {
		className: (0, h.default)("pgn__card-image-cap", { show: y }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => b(!0),
		alt: n,
		loading: p
	})), !!r && /* @__PURE__ */ d.createElement(d.Fragment, null, m && !x && T(), /* @__PURE__ */ d.createElement("img", {
		className: (0, h.default)("pgn__card-logo-cap", { show: x }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: p
	})));
});
Ei.propTypes = {
	className: X.default.string,
	src: X.default.string,
	fallbackSrc: X.default.string,
	srcAlt: X.default.string,
	logoSrc: X.default.string,
	fallbackLogoSrc: X.default.string,
	logoAlt: X.default.string,
	skeletonHeight: X.default.number,
	skeletonWidth: X.default.number,
	logoSkeleton: X.default.bool,
	logoSkeletonHeight: X.default.number,
	logoSkeletonWidth: X.default.number,
	imageLoadingType: X.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: X.default.bool
}, Ei.defaultProps = {
	src: void 0,
	fallbackSrc: Ci,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: wi,
	logoSkeleton: !1,
	logoSkeletonHeight: Ti,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var Di = /* @__PURE__ */ d.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, d.useContext)(Z);
	return c ? /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /* @__PURE__ */ d.createElement(hi, null)) : /* @__PURE__ */ d.createElement("div", {
		className: (0, h.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /* @__PURE__ */ d.createElement("div", { className: "pgn__card-status__content" }, r && /* @__PURE__ */ d.createElement(kr, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /* @__PURE__ */ d.createElement("div", { className: "pgn__card-status__message-content" }, i && /* @__PURE__ */ d.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /* @__PURE__ */ d.createElement("div", { className: "pgn__card-status__actions" }, a));
});
Di.propTypes = {
	children: X.default.node.isRequired,
	className: X.default.string,
	icon: X.default.func,
	variant: X.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: X.default.oneOfType([X.default.element, X.default.string]),
	actions: X.default.node
}, Di.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDeck.js
var Oi = /* @__PURE__ */ d.forwardRef(({ className: e, children: t, columnSizes: n, hasInteractiveChildren: r, canScrollHorizontal: i, hasOverflowScrollItems: a, hasEqualColumnHeights: o }, s) => {
	let c = (0, d.useMemo)(() => d.Children.map(t, (e) => /* @__PURE__ */ d.createElement(qe, {
		...n,
		className: (0, h.default)("pgn__card-deck__card-item", { "pgn__card__disable-equal-column-heights": !o })
	}, e)), [
		t,
		n,
		o
	]), l = ti(c), u = (0, d.useMemo)(() => a ? l : c, [
		a,
		l,
		c
	]);
	return /* @__PURE__ */ d.createElement("div", { className: (0, h.default)("pgn__card-deck", { "pgn__card-deck-has-horizontal-scroll": i }, e) }, /* @__PURE__ */ d.createElement(br, {
		className: "pgn__card-deck-row",
		tabIndex: r ? -1 : 0,
		ref: s
	}, u));
});
Oi.propTypes = {
	className: X.default.string,
	children: X.default.node.isRequired,
	columnSizes: X.default.shape({
		xs: X.default.number,
		sm: X.default.number,
		md: X.default.number,
		lg: X.default.number,
		xl: X.default.number
	}),
	hasInteractiveChildren: X.default.bool,
	canScrollHorizontal: X.default.bool,
	hasOverflowScrollItems: X.default.bool,
	hasEqualColumnHeights: X.default.bool
}, Oi.defaultProps = {
	className: void 0,
	columnSizes: {
		sm: 12,
		lg: 6,
		xl: 4
	},
	hasInteractiveChildren: !1,
	canScrollHorizontal: !0,
	hasOverflowScrollItems: !1,
	hasEqualColumnHeights: !0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselProvider.js
var ki = /* @__PURE__ */ (0, d.createContext)();
function Ai({ columnSizes: e, hasInteractiveChildren: t, canScrollHorizontal: n, children: r, CardCarouselControls: i }) {
	let { overflowRef: a, setOverflowRef: o, isScrolledToStart: s, isScrolledToEnd: c, scrollToPrevious: l, scrollToNext: u } = (0, d.useContext)(ni), f = (0, d.useMemo)(() => ({
		overflowRef: a,
		setOverflowRef: o,
		columnSizes: e,
		hasInteractiveChildren: t,
		canScrollHorizontal: n,
		isScrolledToStart: s,
		isScrolledToEnd: c,
		scrollToPrevious: l,
		scrollToNext: u,
		CardCarouselControls: i
	}), [
		a,
		o,
		e,
		t,
		n,
		s,
		c,
		l,
		u,
		i
	]);
	return /* @__PURE__ */ d.createElement(ki.Provider, { value: f }, r);
}
Ai.propTypes = {
	children: X.default.node.isRequired,
	columnSizes: X.default.shape({
		xs: X.default.number,
		sm: X.default.number,
		md: X.default.number,
		lg: X.default.number,
		xl: X.default.number
	}),
	hasInteractiveChildren: X.default.bool,
	canScrollHorizontal: X.default.bool,
	CardCarouselControls: X.default.elementType
}, Ai.defaultProps = {
	columnSizes: {
		sm: 12,
		lg: 6,
		xl: 4
	},
	hasInteractiveChildren: !1,
	canScrollHorizontal: !0,
	CardCarouselControls: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselTitle.js
function ji({ children: e, as: t, className: n }) {
	let r = t || "h2";
	return /* @__PURE__ */ d.createElement(r, { className: (0, h.default)("pgn__card-carousel-title", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselSubtitle.js
function Mi({ children: e, as: t, className: n }) {
	let r = t || "p";
	return /* @__PURE__ */ d.createElement(r, { className: (0, h.default)("pgn__card-carousel-subtitle", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/messages.js
var Ni = i({
	scrollToPrevious: {
		id: "pgn.CardCarousel.scrollToPrevious",
		defaultMessage: "Scroll to previous",
		description: "Accessibility text describing the action for navigating a scrollable carousel to the previous element"
	},
	scrollToNext: {
		id: "pgn.CardCarousel.scrollToNext",
		defaultMessage: "Scroll to next",
		description: "Accessibility text describing the action for navigating a scrollable carousel to the next element"
	}
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselControls.js
function Pi() {
	let { isScrolledToStart: e, isScrolledToEnd: t, scrollToPrevious: r, scrollToNext: i } = (0, d.useContext)(ki), a = n();
	return e && t ? null : /* @__PURE__ */ d.createElement("div", { className: "pgn__card-carousel-controls" }, /* @__PURE__ */ d.createElement(ai, {
		direction: "horizontal",
		gap: 1
	}, /* @__PURE__ */ d.createElement(Vr, {
		disabled: e,
		src: Mr,
		iconAs: kr,
		alt: a.formatMessage(Ni.scrollToPrevious),
		onClick: r
	}), /* @__PURE__ */ d.createElement(Vr, {
		disabled: t,
		src: Nr,
		iconAs: kr,
		alt: a.formatMessage(Ni.scrollToNext),
		onClick: i
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselHeader.js
var Fi = (e) => e ? /* @__PURE__ */ (0, d.isValidElement)(e) ? e : /* @__PURE__ */ d.createElement(ji, null, e) : null, Ii = (e) => e ? /* @__PURE__ */ (0, d.isValidElement)(e) ? e : /* @__PURE__ */ d.createElement(Mi, null, e) : null;
function Li({ title: e, subtitle: t }) {
	let { CardCarouselControls: n } = (0, d.useContext)(ki), r = n || Pi, i = Fi(e), a = Ii(t);
	return /* @__PURE__ */ d.createElement("div", { className: "pgn__card-carousel-header" }, /* @__PURE__ */ d.createElement("div", null, i, a), /* @__PURE__ */ d.createElement(r, null));
}
Li.propTypes = {
	title: X.default.node,
	subtitle: X.default.node
}, Li.defaultProps = {
	title: void 0,
	subtitle: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselItems.js
function Ri({ children: e }) {
	let { columnSizes: t, hasInteractiveChildren: n, canScrollHorizontal: r, setOverflowRef: i } = (0, d.useContext)(ki);
	return /* @__PURE__ */ d.createElement(Oi, {
		ref: i,
		columnSizes: t,
		hasInteractiveChildren: n,
		canScrollHorizontal: r,
		hasOverflowScrollItems: !0
	}, e);
}
Ri.propTypes = { children: X.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarousel.js
function zi({ ariaLabel: e, children: t, title: n, subtitle: r, columnSizes: i, hasInteractiveChildren: a, canScrollHorizontal: o, disableOpacityMasks: s, onScrollPrevious: c, onScrollNext: l, CardCarouselControls: u }) {
	return /* @__PURE__ */ d.createElement(ii, {
		disableScroll: !o,
		hasInteractiveChildren: a,
		disableOpacityMasks: s,
		onScrollPrevious: c,
		onScrollNext: l,
		ariaLabel: e
	}, /* @__PURE__ */ d.createElement(Ai, {
		columnSizes: i,
		hasInteractiveChildren: a,
		canScrollHorizontal: o,
		CardCarouselControls: u
	}, /* @__PURE__ */ d.createElement("div", { className: "pgn__card-carousel" }, /* @__PURE__ */ d.createElement(Li, {
		title: n,
		subtitle: r
	}), /* @__PURE__ */ d.createElement(Ri, null, t))));
}
zi.propTypes = {
	children: X.default.node.isRequired,
	ariaLabel: X.default.string.isRequired,
	title: X.default.node,
	subtitle: X.default.node,
	columnSizes: X.default.shape({
		xs: X.default.number,
		sm: X.default.number,
		md: X.default.number,
		lg: X.default.number,
		xl: X.default.number
	}),
	hasInteractiveChildren: X.default.bool,
	canScrollHorizontal: X.default.bool,
	disableOpacityMasks: X.default.bool,
	onScrollPrevious: X.default.func,
	onScrollNext: X.default.func,
	CardCarouselControls: X.default.elementType
}, zi.defaultProps = {
	title: void 0,
	subtitle: void 0,
	columnSizes: {
		sm: 12,
		lg: 6,
		xl: 4
	},
	hasInteractiveChildren: !1,
	canScrollHorizontal: !0,
	disableOpacityMasks: !1,
	onScrollPrevious: void 0,
	onScrollNext: void 0,
	CardCarouselControls: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/index.js
var Bi = [
	"light",
	"dark",
	"muted"
], Vi = /* @__PURE__ */ d.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ d.createElement(di, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ d.createElement(ui, {
		...o,
		className: (0, h.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
Vi.propTypes = {
	className: X.default.string,
	orientation: X.default.oneOf(["vertical", "horizontal"]),
	isClickable: X.default.bool,
	isLoading: X.default.bool,
	variant: X.default.oneOf(Bi),
	muted: X.default.bool
}, Vi.defaultProps = {
	...ui.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Q = Dr(Vi, "Card", { muted: {
	deprType: Er.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Q.Status = Di, Q.Header = _i, Q.Divider = vi, Q.Section = bi, Q.Footer = Si, Q.ImageCap = Ei, Q.Context = Z, Q.Body = oi;
//#endregion
//#region src/card-carousel/types.ts
var Hi = /* @__PURE__ */ function(e) {
	return e.HORIZONTAL = "HORIZONTAL", e.VERTICAL = "VERTICAL", e;
}({}), Ui = /* @__PURE__ */ function(e) {
	return e.IMAGE = "IMAGE", e.CONTENT_HIGHLIGHT = "CONTENT_HIGHLIGHT", e.RICH_LIST = "RICH_LIST", e.HOVER_LIST = "HOVER_LIST", e;
}({}), $ = c();
function Wi({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "p-4 bg-primary-500 h-100",
		style: r === Hi.HORIZONTAL ? {
			borderTopRightRadius: "var(--pgn-size-border-radius-lg)",
			borderBottomRightRadius: "var(--pgn-size-border-radius-lg)"
		} : {
			borderBottomRightRadius: "var(--pgn-size-border-radius-lg)",
			borderBottomLeftRadius: "var(--pgn-size-border-radius-lg)"
		},
		children: [
			/* @__PURE__ */ (0, $.jsx)("h4", {
				className: "text-brand-400 h3 mb-4",
				children: t
			}),
			/* @__PURE__ */ (0, $.jsx)("h3", {
				className: "text-light-100",
				children: e
			}),
			/* @__PURE__ */ (0, $.jsx)("p", {
				className: "text-light-100",
				children: n
			})
		]
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/MaterialIcon.tsx
function Gi({ name: e, bg: t, fg: n, size: r }) {
	let i = `${r === "sm" ? "p-2" : "p-3"} ${t || "bg-secondary-500"} ${n || "text-light-100"} rounded-circle`, a = r === "sm" ? "2.5rem" : "3.5rem";
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: i,
		style: {
			width: a,
			height: a
		},
		children: /* @__PURE__ */ (0, $.jsx)("span", {
			className: "material-icons",
			children: e
		})
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/RichList.tsx
function Ki({ items: e }) {
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "p-4",
		children: e.map((t, n) => /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsxs)(ai, {
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, $.jsx)(Gi, { name: t.icon }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "ml-4",
				children: [/* @__PURE__ */ (0, $.jsx)("h4", { children: t.title }), /* @__PURE__ */ (0, $.jsx)("p", { children: t.description })]
			})]
		}), n < e.length - 1 && /* @__PURE__ */ (0, $.jsx)("hr", {})] }, n))
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/HoverList.tsx
function qi({ items: e }) {
	let [t, n] = (0, d.useState)(null);
	return /* @__PURE__ */ (0, $.jsx)("ol", {
		className: "hover-list",
		children: e.map((e, r) => /* @__PURE__ */ (0, $.jsx)("li", {
			className: `hover-list-item ${t === r ? "is-active" : ""}`,
			onClick: () => n(t === r ? null : r),
			children: /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "hover-list-content-wrapper",
				children: [/* @__PURE__ */ (0, $.jsx)("div", {
					className: "hover-list-description",
					"aria-hidden": t === r,
					style: t === r ? {
						visibility: "hidden",
						opacity: 0
					} : {},
					children: e.description
				}), e.hoverContent && /* @__PURE__ */ (0, $.jsxs)("div", {
					className: "hover-content",
					"aria-hidden": t !== r,
					style: t === r ? {
						visibility: "visible",
						opacity: 1
					} : {},
					children: [e.icon && /* @__PURE__ */ (0, $.jsx)(Gi, {
						name: e.icon,
						size: "sm",
						fg: "text-primary-500",
						bg: "bg-light-100"
					}), /* @__PURE__ */ (0, $.jsx)("div", {
						className: "ml-2",
						children: e.hoverContent
					})]
				})]
			})
		}, r))
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/ComplexCard.tsx
var Ji = ({ cardType: e, orientation: t, secondaryContent: n, children: r }) => {
	let i = null;
	switch (e) {
		case Ui.IMAGE: return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Q.ImageCap, {
			src: n.location,
			srcAlt: n.altText
		}), r] });
		case Ui.CONTENT_HIGHLIGHT:
			i = /* @__PURE__ */ (0, $.jsx)(Wi, {
				...n,
				orientation: t
			});
			break;
		case Ui.RICH_LIST:
			i = /* @__PURE__ */ (0, $.jsx)(Ki, { ...n });
			break;
		case Ui.HOVER_LIST:
		default: return r;
	}
	let a = t === Hi.HORIZONTAL ? "row" : "d-flex flex-column h-100 justify-content-between", o = t === Hi.HORIZONTAL ? "col" : "flex-grow-1";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: a,
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: o,
			children: r
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: o,
			children: i
		})]
	});
};
function Yi({ orientation: e, data: t, position: n }) {
	return /* @__PURE__ */ (0, $.jsx)(Q, {
		orientation: e.toLowerCase(),
		children: /* @__PURE__ */ (0, $.jsx)(Ji, {
			orientation: e,
			cardType: t.cardType,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, $.jsxs)(Q.Body, { children: [
				n && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "card-badge rounded-pill",
					children: /* @__PURE__ */ (0, $.jsx)(jr, {
						variant: "primary",
						"aria-label": n,
						children: n
					})
				}),
				/* @__PURE__ */ (0, $.jsx)(Q.Header, {
					title: t.title,
					subtitle: t.subtitle
				}),
				t.description && /* @__PURE__ */ (0, $.jsx)(Q.Section, { children: t.description }),
				t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, $.jsx)(Q.Section, { children: /* @__PURE__ */ (0, $.jsx)(Ar, {
					variant: "primary",
					children: t.ctaLabel
				}) }),
				t.cardType === Ui.HOVER_LIST && /* @__PURE__ */ (0, $.jsx)(Q.Section, { children: /* @__PURE__ */ (0, $.jsx)(qi, { ...t.secondaryContent }) })
			] })
		})
	});
}
//#endregion
//#region src/card-carousel/student-ui/StudentUI.tsx
function Xi({ initData: { cards: e, displayName: t, orientation: n, disableNumbering: r } }) {
	return /* @__PURE__ */ (0, $.jsx)(zi, {
		ariaLabel: t,
		title: t ? /* @__PURE__ */ (0, $.jsx)("h3", { children: t }) : "",
		canScrollHorizontal: !0,
		disableOpacityMasks: !0,
		columnSizes: n === Hi.HORIZONTAL ? {
			sm: 12,
			md: 10,
			lg: 10,
			xl: 11
		} : {
			sm: 12,
			md: 8,
			lg: 6,
			xl: 6
		},
		children: e.map((t, i) => /* @__PURE__ */ (0, $.jsx)(Yi, {
			orientation: n,
			data: t,
			position: r ? "" : `${i + 1} / ${e.length}`
		}, i))
	});
}
//#endregion
//#region src/card-carousel/student-ui/main.tsx
var Zi = (e, t, n) => {
	(0, u.createRoot)(e && "jquery" in e ? e[0] : e).render(/* @__PURE__ */ (0, $.jsx)(d.StrictMode, { children: /* @__PURE__ */ (0, $.jsx)(o, {
		locale: "en",
		children: /* @__PURE__ */ (0, $.jsx)(Xi, {
			runtime: t,
			initData: n
		})
	}) }));
};
//#endregion
export { Zi as renderBlock };
