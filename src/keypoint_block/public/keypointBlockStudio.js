import { C as e, S as t, _ as n, a as r, b as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y, v as b, x, y as S } from "./Button-Cm7YYHnH.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var C = /* @__PURE__ */ e(x()), w = /* @__PURE__ */ e(a());
function T({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ C.createElement(e, {
		...r,
		className: (0, w.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function E() {
	return /* @__PURE__ */ C.createElement("span", { className: "pgn__action-row-spacer" });
}
T.Spacer = E, (/* @__PURE__ */ t(((e, t) => {
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
function D(e, t, n) {
	var r = (0, C.useRef)(e !== void 0), i = (0, C.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, C.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function O(e, t) {
	return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, O(e, t);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function k(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, O(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-lifecycles-compat@3.0.4/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function A() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function j(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function M(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
A.__suppressDeprecationWarning = !0, j.__suppressDeprecationWarning = !0, M.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerDocument.js
function N(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/ownerWindow.js
function P(e) {
	var t = N(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/getComputedStyle.js
function F(e, t) {
	return P(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenate.js
var I = /([A-Z])/g;
function L(e) {
	return e.replace(I, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hyphenateStyle.js
var R = /^ms-/;
function z(e) {
	return L(e).replace(R, "-ms-");
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/isTransform.js
var ee = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function te(e) {
	return !!(e && ee.test(e));
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/css.js
function ne(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(z(t)) || F(e).getPropertyValue(z(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(z(i)) : te(i) ? r += i + "(" + a + ") " : n += z(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/config.js
var re = { disabled: !1 }, ie = C.createContext(null), ae = function(e) {
	return e.scrollTop;
}, B = /* @__PURE__ */ e(i()), oe = "unmounted", se = "exited", ce = "entering", le = "entered", ue = "exiting", de = /* @__PURE__ */ function(e) {
	k(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = se, r.appearStatus = ce) : o = le : o = t.unmountOnExit || t.mountOnEnter ? oe : se, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: se } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = ce) : (n === "entering" || n === "entered") && (t = ue);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : B.findDOMNode(this);
				n && ae(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: oe });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [B.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || re.disabled) {
			this.safeSetState({ status: le }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: ce }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: le }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : B.findDOMNode(this);
		if (!t || re.disabled) {
			this.safeSetState({ status: se }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: ue }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: se }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : B.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = m(t, [
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
		return /* @__PURE__ */ C.createElement(ie.Provider, { value: null }, typeof n == "function" ? n(e, r) : C.cloneElement(C.Children.only(n), r));
	}, t;
}(C.Component);
de.contextType = ie, de.propTypes = {};
function fe() {}
de.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: fe,
	onEntering: fe,
	onEntered: fe,
	onExit: fe,
	onExiting: fe,
	onExited: fe
}, de.UNMOUNTED = oe, de.EXITED = se, de.ENTERING = ce, de.ENTERED = le, de.EXITING = ue;
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
	var t = ne(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
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
	var n = ne(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function Te(e, t) {
	var n = Ce(e, function(r) {
		r.target === e && (n(), t(r));
	}, we(e, "transitionDuration") + we(e, "transitionDelay"));
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function Ee(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCommittedRef.js
function De(e) {
	let t = (0, C.useRef)(e);
	return (0, C.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventCallback.js
function Oe(e) {
	let t = De(e);
	return (0, C.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Fade.js
var ke = ["className", "children"], Ae, je = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, Me = (Ae = {}, Ae[ce] = "show", Ae[le] = "show", Ae), Ne = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = m(e, ke), a = (0, C.useCallback)(function(e) {
		Ee(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ C.createElement(de, _({
		ref: t,
		addEndListener: Te
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ C.cloneElement(r, _({}, t, { className: (0, w.default)("fade", n, r.props.className, Me[e]) }));
	});
});
Ne.defaultProps = je, Ne.displayName = "Fade";
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var Pe = /-(.)/g;
function Fe(e) {
	return e.replace(Pe, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Ie = [
	"className",
	"bsPrefix",
	"as"
], Le = function(e) {
	return e[0].toUpperCase() + Fe(e).slice(1);
};
function Re(e, t) {
	var n = t === void 0 ? {} : t, i = n.displayName, a = i === void 0 ? Le(e) : i, o = n.Component, s = n.defaultProps, c = /* @__PURE__ */ C.forwardRef(function(t, n) {
		var i = t.className, a = t.bsPrefix, s = t.as, c = s === void 0 ? o || "div" : s, l = m(t, Ie), u = r(a, e);
		return /* @__PURE__ */ C.createElement(c, _({
			ref: n,
			className: (0, w.default)(i, u)
		}, l));
	});
	return c.defaultProps = s, c.displayName = a, c;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMounted.js
function ze() {
	let e = (0, C.useRef)(!0), t = (0, C.useRef)(() => e.current);
	return (0, C.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useUpdatedRef.js
function Be(e) {
	let t = (0, C.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useWillUnmount.js
function Ve(e) {
	let t = Be(e);
	(0, C.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useTimeout.js
var He = 2 ** 31 - 1;
function Ue(e, t, n) {
	let r = n - Date.now();
	e.current = r <= He ? setTimeout(t, r) : setTimeout(() => Ue(e, t, n), He);
}
function We() {
	let e = ze(), t = (0, C.useRef)();
	return Ve(() => clearTimeout(t.current)), (0, C.useMemo)(() => {
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
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Col.js
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
], qe = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.className, a = e.as, o = a === void 0 ? "div" : a, s = m(e, Ge), c = r(n, "col"), l = [], u = [];
	return Ke.forEach(function(e) {
		var t = s[e];
		delete s[e];
		var n, r, i;
		if (typeof t == "object" && t) {
			var a = t.span;
			n = a === void 0 ? !0 : a, r = t.offset, i = t.order;
		} else n = t;
		var o = e === "xs" ? "" : "-" + e;
		n && l.push(n === !0 ? "" + c + o : "" + c + o + "-" + n), i != null && u.push("order" + o + "-" + i), r != null && u.push("offset" + o + "-" + r);
	}), l.length || l.push(c), /* @__PURE__ */ C.createElement(o, _({}, s, {
		ref: t,
		className: w.default.apply(void 0, [i].concat(l, u))
	}));
});
qe.displayName = "Col";
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useCallbackRef.js
function Je() {
	return (0, C.useState)(null);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useSafeState.js
function Ye(e) {
	let t = ze();
	return [e[0], (0, C.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var Xe = "bottom", Ze = "right", Qe = "left", $e = "auto", et = [
	"top",
	Xe,
	Ze,
	Qe
], tt = "start", nt = "clippingParents", rt = "viewport", it = "popper", at = "reference", ot = /* @__PURE__ */ et.reduce(function(e, t) {
	return e.concat([t + "-" + tt, t + "-end"]);
}, []), st = /* @__PURE__ */ [].concat(et, [$e]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + tt,
		t + "-end"
	]);
}, []), ct = [
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
function lt(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function V(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function ut(e) {
	return e instanceof V(e).Element || e instanceof Element;
}
function dt(e) {
	return e instanceof V(e).HTMLElement || e instanceof HTMLElement;
}
function ft(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof V(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var pt = Math.max, mt = Math.min, ht = Math.round;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function gt() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function _t() {
	return !/^((?!chrome|android).)*safari/i.test(gt());
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function vt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && dt(e) && (i = e.offsetWidth > 0 && ht(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ht(r.height) / e.offsetHeight || 1);
	var o = (ut(e) ? V(e) : window).visualViewport, s = !_t() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function yt(e) {
	var t = vt(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function bt(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && ft(n)) {
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
function xt(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function St(e) {
	return V(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function Ct(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(xt(e)) >= 0;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function wt(e) {
	return ((ut(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Tt(e) {
	return xt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ft(e) ? e.host : null) || wt(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Et(e) {
	return !dt(e) || St(e).position === "fixed" ? null : e.offsetParent;
}
function Dt(e) {
	var t = /firefox/i.test(gt());
	if (/Trident/i.test(gt()) && dt(e) && St(e).position === "fixed") return null;
	var n = Tt(e);
	for (ft(n) && (n = n.host); dt(n) && ["html", "body"].indexOf(xt(n)) < 0;) {
		var r = St(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Ot(e) {
	for (var t = V(e), n = Et(e); n && Ct(n) && St(n).position === "static";) n = Et(n);
	return n && (xt(n) === "html" || xt(n) === "body" && St(n).position === "static") ? t : n || Dt(e) || t;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function kt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function At(e, t, n) {
	return pt(e, mt(t, n));
}
function jt(e, t, n) {
	var r = At(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function Mt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function Nt(e) {
	return Object.assign({}, Mt(), e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Pt(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var Ft = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Nt(typeof e == "number" ? Pt(e, et) : e);
};
function It(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = lt(n.placement), c = kt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = Ft(i.padding, n), d = yt(a), f = c === "y" ? "top" : Qe, p = c === "y" ? Xe : Ze, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ot(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = At(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Lt(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || bt(t.elements.popper, r) && (t.elements.arrow = r));
}
var Rt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: It,
	effect: Lt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function zt(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var Bt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Vt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: ht(n * i) / i || 0,
		y: ht(r * i) / i || 0
	};
}
function Ht(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = Qe, b = "top", x = window;
	if (l) {
		var S = Ot(n), C = "clientHeight", w = "clientWidth";
		if (S === V(n) && (S = wt(n), St(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = Xe;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = Ze;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && Bt), O = u === !0 ? Vt({
		x: p,
		y: h
	}, V(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function Ut(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: lt(t.placement),
		variation: zt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ht(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ht(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Wt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Ut,
	data: {}
}, Gt = { passive: !0 };
function Kt(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = V(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Gt);
	}), s && c.addEventListener("resize", n.update, Gt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Gt);
		}), s && c.removeEventListener("resize", n.update, Gt);
	};
}
var qt = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Kt,
	data: {}
}, Jt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Yt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return Jt[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Xt = {
	start: "end",
	end: "start"
};
function Zt(e) {
	return e.replace(/start|end/g, function(e) {
		return Xt[e];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Qt(e) {
	var t = V(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function $t(e) {
	return vt(wt(e)).left + Qt(e).scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function en(e, t) {
	var n = V(e), r = wt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = _t();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + $t(e),
		y: c
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function tn(e) {
	var t = wt(e), n = Qt(e), r = e.ownerDocument?.body, i = pt(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = pt(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + $t(e), s = -n.scrollTop;
	return St(r || t).direction === "rtl" && (o += pt(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function nn(e) {
	var t = St(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function rn(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(xt(e)) >= 0 ? e.ownerDocument.body : dt(e) && nn(e) ? e : rn(Tt(e));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function an(e, t) {
	t === void 0 && (t = []);
	var n = rn(e), r = n === e.ownerDocument?.body, i = V(n), a = r ? [i].concat(i.visualViewport || [], nn(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(an(Tt(a)));
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function on(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function sn(e, t) {
	var n = vt(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function cn(e, t, n) {
	return t === "viewport" ? on(en(e, n)) : ut(t) ? sn(t, n) : on(tn(wt(e)));
}
function ln(e) {
	var t = an(Tt(e)), n = ["absolute", "fixed"].indexOf(St(e).position) >= 0 && dt(e) ? Ot(e) : e;
	return ut(n) ? t.filter(function(e) {
		return ut(e) && bt(e, n) && xt(e) !== "body";
	}) : [];
}
function un(e, t, n, r) {
	var i = t === "clippingParents" ? ln(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = cn(e, n, r);
		return t.top = pt(i.top, t.top), t.right = mt(i.right, t.right), t.bottom = mt(i.bottom, t.bottom), t.left = pt(i.left, t.left), t;
	}, cn(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function dn(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? lt(r) : null, a = r ? zt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case Xe:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case Ze:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case Qe:
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
	var l = i ? kt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case tt:
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
function fn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? nt : s, l = n.rootBoundary, u = l === void 0 ? rt : l, d = n.elementContext, f = d === void 0 ? it : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = Nt(typeof g == "number" ? Pt(g, et) : g), v = f === "popper" ? at : it, y = e.rects.popper, b = e.elements[m ? v : f], x = un(ut(b) ? b : b.contextElement || wt(e.elements.popper), c, u, o), S = vt(e.elements.reference), C = dn({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = on(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function pn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? st : c, u = zt(r), d = u ? s ? ot : ot.filter(function(e) {
		return zt(e) === u;
	}) : et, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = fn(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[lt(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function mn(e) {
	if (lt(e) === "auto") return [];
	var t = Yt(e);
	return [
		Zt(e),
		t,
		Zt(t)
	];
}
function hn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = lt(g) === g, v = c || (_ || !m ? [Yt(g)] : mn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(lt(n) === "auto" ? pn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = lt(E), O = zt(E) === tt, k = ["top", Xe].indexOf(D) >= 0, A = k ? "width" : "height", j = fn(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? Ze : Qe : O ? Xe : "top";
			b[A] > x[A] && (M = Yt(M));
			var N = Yt(M), P = [];
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
var gn = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: hn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function _n(e, t, n) {
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
function vn(e) {
	return [
		"top",
		Ze,
		Xe,
		Qe
	].some(function(t) {
		return e[t] >= 0;
	});
}
function yn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = fn(t, { elementContext: "reference" }), s = fn(t, { altBoundary: !0 }), c = _n(o, r), l = _n(s, i, a), u = vn(c), d = vn(l);
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
var bn = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: yn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function xn(e, t, n) {
	var r = lt(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Sn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = st.reduce(function(e, n) {
		return e[n] = xn(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Cn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Sn
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function wn(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = dn({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Tn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: wn,
	data: {}
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function En(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Dn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = fn(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = lt(t.placement), v = zt(t.placement), y = !v, b = kt(_), x = En(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : Qe, A = b === "y" ? Xe : Ze, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, z = p && R ? yt(R) : {
				width: 0,
				height: 0
			}, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Mt(), te = ee[k], ne = ee[A], re = At(0, C[j], z[j]), ie = y ? C[j] / 2 - F - re - te - E.mainAxis : I - re - te - E.mainAxis, ae = y ? -C[j] / 2 + F + re + ne + E.mainAxis : L + re + ne + E.mainAxis, B = t.elements.arrow && Ot(t.elements.arrow), oe = B ? b === "y" ? B.clientTop || 0 : B.clientLeft || 0 : 0, se = D?.[b] ?? 0, ce = M + ie - se - oe, le = M + ae - se, ue = At(p ? mt(N, ce) : N, M, p ? pt(P, le) : P);
			S[b] = ue, O[b] = ue - M;
		}
		if (s) {
			var de = b === "x" ? "top" : Qe, fe = b === "x" ? Xe : Ze, pe = S[x], me = x === "y" ? "height" : "width", he = pe + g[de], ge = pe - g[fe], _e = ["top", Qe].indexOf(_) !== -1, ve = D?.[x] ?? 0, ye = _e ? he : pe - C[me] - w[me] - ve + E.altAxis, be = _e ? pe + C[me] + w[me] - ve - E.altAxis : ge, xe = p && _e ? jt(ye, pe, be) : At(p ? ye : he, pe, p ? be : ge);
			S[x] = xe, O[x] = xe - pe;
		}
		t.modifiersData[r] = O;
	}
}
var On = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Dn,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function kn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function An(e) {
	return e === V(e) || !dt(e) ? Qt(e) : kn(e);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function jn(e) {
	var t = e.getBoundingClientRect(), n = ht(t.width) / e.offsetWidth || 1, r = ht(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function Mn(e, t, n) {
	n === void 0 && (n = !1);
	var r = dt(t), i = dt(t) && jn(t), a = wt(t), o = vt(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((xt(t) !== "body" || nn(a)) && (s = An(t)), dt(t) ? (c = vt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = $t(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Nn(e) {
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
function Pn(e) {
	var t = Nn(e);
	return ct.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function Fn(e) {
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
function In(e) {
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
var Ln = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Rn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function zn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Ln : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, Ln, a),
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
					reference: ut(e) ? an(e) : e.contextElement ? an(e.contextElement) : [],
					popper: an(t)
				};
				var s = Pn(In([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Rn(t, n)) {
						i.rects = {
							reference: Mn(t, Ot(n), i.options.strategy === "fixed"),
							popper: yt(n)
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
			update: Fn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Rn(e, t)) return c;
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
var Bn = zn({ defaultModifiers: [
	bn,
	Tn,
	Wt,
	qt,
	Cn,
	gn,
	On,
	Rt
] }), Vn = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, Hn = {
	name: "applyStyles",
	enabled: !1
}, Un = {
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
}, Wn = [];
function Gn(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, o = r.placement, s = o === void 0 ? "bottom" : o, c = r.strategy, l = c === void 0 ? "absolute" : c, u = r.modifiers, d = u === void 0 ? Wn : u, f = m(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), p = (0, C.useRef)(), h = (0, C.useCallback)(function() {
		var e;
		(e = p.current) == null || e.update();
	}, []), g = (0, C.useCallback)(function() {
		var e;
		(e = p.current) == null || e.forceUpdate();
	}, []), v = Ye((0, C.useState)({
		placement: s,
		update: h,
		forceUpdate: g,
		attributes: {},
		styles: {
			popper: Vn(l),
			arrow: {}
		}
	})), y = v[0], b = v[1], x = (0, C.useMemo)(function() {
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
	return (0, C.useEffect)(function() {
		!p.current || !a || p.current.setOptions({
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [x, Hn])
		});
	}, [
		l,
		s,
		x,
		a
	]), (0, C.useEffect)(function() {
		if (!(!a || e == null || t == null)) return p.current = Bn(e, t, _({}, f, {
			placement: s,
			strategy: l,
			modifiers: [].concat(d, [Un, x])
		})), function() {
			p.current != null && (p.current.destroy(), p.current = void 0, b(function(e) {
				return _({}, e, {
					attributes: {},
					styles: { popper: Vn(l) }
				});
			}));
		};
	}, [
		a,
		e,
		t
	]), y;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/contains.js
function Kn(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/.pnpm/warning@4.0.3/node_modules/warning/warning.js
var qn = /* @__PURE__ */ t(((e, t) => {
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
function Jn(e) {
	return e && "setState" in e ? B.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/ownerDocument.js
var Yn = (function(e) {
	return N(Jn(e));
}), Xn = /* @__PURE__ */ e(qn()), Zn = 27, Qn = function() {};
function $n(e) {
	return e.button === 0;
}
function er(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var tr = function(e) {
	return e && ("current" in e ? e.current : e);
};
function nr(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, C.useRef)(!1), c = t || Qn, l = (0, C.useCallback)(function(t) {
		var n = tr(e);
		(0, Xn.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || er(t) || !$n(t) || !!Kn(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = Oe(function(e) {
		s.current || c(e);
	}), d = Oe(function(e) {
		e.keyCode === Zn && c(e);
	});
	(0, C.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Yn(tr(e)), r = ye(n, o, l, !0), a = ye(n, o, function(e) {
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
				return ye(e, "mousemove", Qn);
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
function rr(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function ir(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function ar(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = rr(u.modifiers);
	return _({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: ir(_({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: _({}, d.preventOverflow, { options: s ? _({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: _({ offset: a }, d.offset?.options) },
			arrow: _({}, d.arrow, {
				enabled: !!c,
				options: _({}, d.arrow?.options, { element: c })
			}),
			flip: _({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useMergedRefs.js
var or = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function sr(e, t) {
	let n = or(e), r = or(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function cr(e, t) {
	return (0, C.useMemo)(() => sr(e, t), [e, t]);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
function lr(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function ur(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function dr() {
	var e = (0, C.useRef)(null), t = (0, C.useRef)(null), n = (0, C.useRef)(null), i = r(void 0, "popover"), a = r(void 0, "dropdown-menu");
	return [(0, C.useCallback)(function(n) {
		!n || !(lr(n, i) || lr(n, a)) || (t.current = ur(n), n.style.margin = "0", e.current = n);
	}, [i, a]), [
		(0, C.useMemo)(function() {
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
		(0, C.useMemo)(function() {
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
		(0, C.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var r = t.state;
					if (!(!e.current || !r.elements.arrow || !lr(e.current, i))) {
						if (r.modifiersData["arrow#persistent"]) {
							var a = ur(r.elements.arrow), o = a.top, s = a.right, c = o || s;
							r.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else n.current = ur(r.elements.arrow);
						return r.elements.arrow.style.margin = "0", function() {
							r.elements.arrow && (r.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [i])
	]];
}
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/isRequiredForA11y.js
var fr = /* @__PURE__ */ t(((e, t) => {
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
})), pr = /* @__PURE__ */ t(((e, t) => {
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
})), mr = /* @__PURE__ */ t(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(pr());
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
})), H = /* @__PURE__ */ e(u()), hr = [
	"as",
	"className",
	"type",
	"tooltip"
], gr = {
	type: H.default.string,
	tooltip: H.default.bool,
	as: H.default.elementType
}, _r = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s === void 0 ? !1 : s, l = m(e, hr);
	return /* @__PURE__ */ C.createElement(r, _({}, l, {
		ref: t,
		className: (0, w.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
_r.displayName = "Feedback", _r.propTypes = gr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var vr = /* @__PURE__ */ C.createContext({ controlId: void 0 }), yr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], br = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.type, c = s === void 0 ? "checkbox" : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, v = m(e, yr), y = (0, C.useContext)(vr), b = y.controlId, x = y.custom ? [a, "custom-control-input"] : [i, "form-check-input"], S = x[0], T = x[1];
	return i = r(S, T), /* @__PURE__ */ C.createElement(g, _({}, v, {
		ref: t,
		type: c,
		id: n || b,
		className: (0, w.default)(o, i, u && "is-valid", f && "is-invalid", p && "position-static")
	}));
});
br.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var xr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Sr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = m(e, xr), c = (0, C.useContext)(vr), l = c.controlId, u = c.custom ? [i, "custom-control-label"] : [n, "form-check-label"], d = u[0], f = u[1];
	return n = r(d, f), /* @__PURE__ */ C.createElement("label", _({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, w.default)(a, n)
	}));
});
Sr.displayName = "FormCheckLabel", mr();
var Cr = [
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
], wr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, o = e.inline, s = o === void 0 ? !1 : o, c = e.disabled, l = c === void 0 ? !1 : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, v = e.feedback, y = e.className, b = e.style, x = e.title, S = x === void 0 ? "" : x, T = e.type, E = T === void 0 ? "checkbox" : T, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = m(e, Cr), N = E === "switch" ? !0 : k, P = N ? [a, "custom-control"] : [i, "form-check"], F = P[0], I = P[1];
	i = r(F, I);
	var L = (0, C.useContext)(vr).controlId, R = (0, C.useMemo)(function() {
		return {
			controlId: n || L,
			custom: N
		};
	}, [
		L,
		N,
		n
	]), z = N || D != null && D !== !1 && !O, ee = /* @__PURE__ */ C.createElement(br, _({}, M, {
		type: E === "switch" ? "checkbox" : E,
		ref: t,
		isValid: d,
		isInvalid: p,
		isStatic: !z,
		disabled: l,
		as: j
	}));
	return /* @__PURE__ */ C.createElement(vr.Provider, { value: R }, /* @__PURE__ */ C.createElement("div", {
		style: b,
		className: (0, w.default)(y, i, N && "custom-" + E, s && i + "-inline")
	}, O || /* @__PURE__ */ C.createElement(C.Fragment, null, ee, z && /* @__PURE__ */ C.createElement(Sr, { title: S }, D), (d || p) && /* @__PURE__ */ C.createElement(_r, {
		type: d ? "valid" : "invalid",
		tooltip: g
	}, v))));
});
wr.displayName = "FormCheck", wr.Input = br, wr.Label = Sr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Tr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Er = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.isValid, c = e.isInvalid, l = e.lang, u = e.as, d = u === void 0 ? "input" : u, f = m(e, Tr), p = (0, C.useContext)(vr), h = p.controlId, g = p.custom, v = "file", y = g ? [a, "custom-file-input"] : [i, "form-control-file"], b = y[0], x = y[1];
	return i = r(b, x), /* @__PURE__ */ C.createElement(d, _({}, f, {
		ref: t,
		id: n || h,
		type: v,
		lang: l,
		className: (0, w.default)(o, i, s && "is-valid", c && "is-invalid")
	}));
});
Er.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Dr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Or = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.htmlFor, s = m(e, Dr), c = (0, C.useContext)(vr), l = c.controlId, u = c.custom ? [i, "custom-file-label"] : [n, "form-file-label"], d = u[0], f = u[1];
	return n = r(d, f), /* @__PURE__ */ C.createElement("label", _({}, s, {
		ref: t,
		htmlFor: o || l,
		className: (0, w.default)(a, n),
		"data-browse": s["data-browse"]
	}));
});
Or.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var kr = [
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
], Ar = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, o = e.disabled, s = o === void 0 ? !1 : o, c = e.isValid, l = c === void 0 ? !1 : c, u = e.isInvalid, d = u === void 0 ? !1 : u, f = e.feedbackTooltip, p = f === void 0 ? !1 : f, h = e.feedback, g = e.className, v = e.style, y = e.label, b = e.children, x = e.custom, S = e.lang, T = e["data-browse"], E = e.as, D = E === void 0 ? "div" : E, O = e.inputAs, k = O === void 0 ? "input" : O, A = m(e, kr), j = x ? [a, "custom"] : [i, "form-file"], M = j[0], N = j[1];
	i = r(M, N);
	var P = "file", F = (0, C.useContext)(vr).controlId, I = (0, C.useMemo)(function() {
		return {
			controlId: n || F,
			custom: x
		};
	}, [
		F,
		x,
		n
	]), L = y != null && y !== !1 && !b, R = /* @__PURE__ */ C.createElement(Er, _({}, A, {
		ref: t,
		isValid: l,
		isInvalid: d,
		disabled: s,
		as: k,
		lang: S
	}));
	return /* @__PURE__ */ C.createElement(vr.Provider, { value: I }, /* @__PURE__ */ C.createElement(D, {
		style: v,
		className: (0, w.default)(g, i, x && "custom-" + P)
	}, b || /* @__PURE__ */ C.createElement(C.Fragment, null, x ? /* @__PURE__ */ C.createElement(C.Fragment, null, R, L && /* @__PURE__ */ C.createElement(Or, { "data-browse": T }, y)) : /* @__PURE__ */ C.createElement(C.Fragment, null, L && /* @__PURE__ */ C.createElement(Or, null, y), R), (l || d) && /* @__PURE__ */ C.createElement(_r, {
		type: l ? "valid" : "invalid",
		tooltip: p
	}, h))));
});
Ar.displayName = "FormFile", Ar.Input = Er, Ar.Label = Or;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var jr = [
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
], Mr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.bsCustomPrefix, a = e.type, o = e.size, s = e.htmlSize, c = e.id, l = e.className, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, h = e.plaintext, g = e.readOnly, v = e.custom, y = e.as, b = y === void 0 ? "input" : y, x = m(e, jr), S = (0, C.useContext)(vr).controlId, T = v ? [i, "custom"] : [n, "form-control"], E = T[0], D = T[1];
	n = r(E, D);
	var O;
	if (h) {
		var k;
		O = (k = {}, k[n + "-plaintext"] = !0, k);
	} else if (a === "file") {
		var A;
		O = (A = {}, A[n + "-file"] = !0, A);
	} else if (a === "range") {
		var j;
		O = (j = {}, j[n + "-range"] = !0, j);
	} else if (b === "select" && v) {
		var M;
		O = (M = {}, M[n + "-select"] = !0, M[n + "-select-" + o] = o, M);
	} else {
		var N;
		O = (N = {}, N[n] = !0, N[n + "-" + o] = o, N);
	}
	return /* @__PURE__ */ C.createElement(b, _({}, x, {
		type: a,
		size: s,
		ref: t,
		readOnly: g,
		id: c || S,
		className: (0, w.default)(l, O, d && "is-valid", p && "is-invalid")
	}));
});
Mr.displayName = "FormControl";
var Nr = Object.assign(Mr, { Feedback: _r }), Pr = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Fr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.className, a = e.children, o = e.controlId, s = e.as, c = s === void 0 ? "div" : s, l = m(e, Pr);
	n = r(n, "form-group");
	var u = (0, C.useMemo)(function() {
		return { controlId: o };
	}, [o]);
	return /* @__PURE__ */ C.createElement(vr.Provider, { value: u }, /* @__PURE__ */ C.createElement(c, _({}, l, {
		ref: t,
		className: (0, w.default)(i, n)
	}), a));
});
Fr.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Ir = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Lr = {
	column: !1,
	srOnly: !1
}, Rr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.as, i = n === void 0 ? "label" : n, a = e.bsPrefix, o = e.column, s = e.srOnly, c = e.className, l = e.htmlFor, u = m(e, Ir), d = (0, C.useContext)(vr).controlId;
	a = r(a, "form-label");
	var f = "col-form-label";
	typeof o == "string" && (f = f + " " + f + "-" + o);
	var p = (0, w.default)(c, a, s && "sr-only", o && f);
	return l ||= d, o ? /* @__PURE__ */ C.createElement(qe, _({
		ref: t,
		as: "label",
		className: p,
		htmlFor: l
	}, u)) : /* @__PURE__ */ C.createElement(i, _({
		ref: t,
		className: p,
		htmlFor: l
	}, u));
});
Rr.displayName = "FormLabel", Rr.defaultProps = Lr;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var zr = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Br = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.className, a = e.as, o = a === void 0 ? "small" : a, s = e.muted, c = m(e, zr);
	return n = r(n, "form-text"), /* @__PURE__ */ C.createElement(o, _({}, c, {
		ref: t,
		className: (0, w.default)(i, n, s && "text-muted")
	}));
});
Br.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Vr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	return /* @__PURE__ */ C.createElement(wr, _({}, e, {
		ref: t,
		type: "switch"
	}));
});
Vr.displayName = "Switch", Vr.Input = wr.Input, Vr.Label = wr.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Hr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Ur = Re("form-row"), Wr = { inline: !1 }, Gr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.inline, a = e.className, o = e.validated, s = e.as, c = s === void 0 ? "form" : s, l = m(e, Hr);
	return n = r(n, "form"), /* @__PURE__ */ C.createElement(c, _({}, l, {
		ref: t,
		className: (0, w.default)(a, o && "was-validated", i && n + "-inline")
	}));
});
Gr.displayName = "Form", Gr.defaultProps = Wr, Gr.Row = Ur, Gr.Group = Fr, Gr.Control = Nr, Gr.Check = wr, Gr.File = Ar, Gr.Switch = Vr, Gr.Label = Rr, Gr.Text = Br;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Container.js
var Kr = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], qr = { fluid: !1 }, Jr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.fluid, a = e.as, o = a === void 0 ? "div" : a, s = e.className, c = m(e, Kr), l = r(n, "container"), u = typeof i == "string" ? "-" + i : "-fluid";
	return /* @__PURE__ */ C.createElement(o, _({ ref: t }, c, { className: (0, w.default)(s, i ? "" + l + u : l) }));
});
Jr.displayName = "Container", Jr.defaultProps = qr;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/useWaitForDOMRef.js
var Yr = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? N().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function Xr(e, t) {
	var n = (0, C.useState)(function() {
		return Yr(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Yr(e);
		a && i(a);
	}
	return (0, C.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, C.useEffect)(function() {
		var t = Yr(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Overlay.js
var Zr = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, o = a === void 0 ? 5 : a, s = e.popperConfig, c = s === void 0 ? {} : s, l = e.transition, u = Je(), d = u[0], f = u[1], p = Je(), h = p[0], g = p[1], v = cr(f, t), y = Xr(e.container), b = Xr(e.target), x = (0, C.useState)(!e.show), S = x[0], w = x[1], T = Gn(b, d, ar({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: o || 5,
		flip: n,
		offset: r,
		arrowElement: h,
		popperConfig: c
	})), E = T.styles, D = T.attributes, O = m(T, ["styles", "attributes"]);
	e.show ? S && w(!1) : !e.transition && !S && w(!0);
	var k = function() {
		w(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || l && !S;
	if (nr(d, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(_({}, O, {
		show: !!e.show,
		props: _({}, D.popper, {
			style: E.popper,
			ref: v
		}),
		arrowProps: _({}, D.arrow, {
			style: E.arrow,
			ref: g
		})
	}));
	if (l) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, I = e.onEntered;
		j = /* @__PURE__ */ C.createElement(l, {
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
	return y ? /* @__PURE__ */ B.createPortal(j, y) : null;
});
Zr.displayName = "Overlay", Zr.propTypes = {
	show: H.default.bool,
	placement: H.default.oneOf(st),
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
var Qr = [
	"children",
	"transition",
	"popperConfig"
], $r = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], ei = {
	transition: Ne,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function ti(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(Jn(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(Jn(e));
	};
}
function ni(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = m(e, Qr), o = (0, C.useRef)({}), s = dr(), c = s[0], l = s[1], u = n === !0 ? Ne : n || null;
	return /* @__PURE__ */ C.createElement(Zr, _({}, a, {
		ref: c,
		popperConfig: _({}, i, { modifiers: l.concat(i.modifiers || []) }),
		transition: u
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, s = e.update;
		e.forceUpdate;
		var c = e.placement, l = e.state, u = m(e, $r);
		ti(r, i);
		var d = Object.assign(o.current, {
			state: l,
			scheduleUpdate: s,
			placement: c,
			outOfBoundaries: l?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(_({}, u, r, {
			placement: c,
			show: a
		}, !n && a && { className: "show" }, {
			popper: d,
			arrowProps: i
		})) : /* @__PURE__ */ C.cloneElement(t, _({}, u, r, {
			placement: c,
			arrowProps: i,
			popper: d,
			className: (0, w.default)(t.props.className, !n && a && "show"),
			style: _({}, t.props.style, r.style)
		}));
	});
}
ni.defaultProps = ei;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/OverlayTrigger.js
var ri = [
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
], ii = /* @__PURE__ */ function(e) {
	k(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(C.Component);
function ai(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function oi(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Kn(i, a) && e.apply(void 0, t);
}
var si = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function ci(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, o = e.show, s = e.defaultShow, c = s === void 0 ? !1 : s, l = e.onToggle, u = e.delay, d = e.placement, f = e.flip, p = f === void 0 ? d && d.indexOf("auto") !== -1 : f, h = m(e, ri), g = (0, C.useRef)(null), v = We(), y = (0, C.useRef)(""), b = D(o, c, l), x = b[0], S = b[1], w = ai(u), T = typeof r == "function" ? {} : C.Children.only(r).props, E = T.onFocus, O = T.onBlur, k = T.onClick, A = (0, C.useCallback)(function() {
		return Jn(g.current);
	}, []), j = (0, C.useCallback)(function() {
		if (v.clear(), y.current = "show", !w.show) {
			S(!0);
			return;
		}
		v.set(function() {
			y.current === "show" && S(!0);
		}, w.show);
	}, [
		w.show,
		S,
		v
	]), M = (0, C.useCallback)(function() {
		if (v.clear(), y.current = "hide", !w.hide) {
			S(!1);
			return;
		}
		v.set(function() {
			y.current === "hide" && S(!1);
		}, w.hide);
	}, [
		w.hide,
		S,
		v
	]), N = (0, C.useCallback)(function() {
		j();
		var e = [...arguments];
		E?.apply(void 0, e);
	}, [j, E]), P = (0, C.useCallback)(function() {
		M();
		var e = [...arguments];
		O?.apply(void 0, e);
	}, [M, O]), F = (0, C.useCallback)(function() {
		S(!x), k && k.apply(void 0, arguments);
	}, [
		k,
		S,
		x
	]), I = (0, C.useCallback)(function() {
		oi(j, [...arguments], "fromElement");
	}, [j]), L = (0, C.useCallback)(function() {
		oi(M, [...arguments], "toElement");
	}, [M]), R = t == null ? [] : [].concat(t), z = {};
	return R.indexOf("click") !== -1 && (z.onClick = F), R.indexOf("focus") !== -1 && (z.onFocus = N, z.onBlur = P), R.indexOf("hover") !== -1 && (z.onMouseOver = I, z.onMouseOut = L), /* @__PURE__ */ C.createElement(C.Fragment, null, typeof r == "function" ? r(_({}, z, { ref: g })) : /* @__PURE__ */ C.createElement(ii, { ref: g }, /* @__PURE__ */ (0, C.cloneElement)(r, z)), /* @__PURE__ */ C.createElement(ni, _({}, h, {
		show: x,
		onHide: M,
		flip: p,
		placement: d,
		popperConfig: a,
		target: A
	}), n));
}
ci.defaultProps = si;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var li = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], ui = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.variant, a = e.animation, o = e.size, s = e.children, c = e.as, l = c === void 0 ? "div" : c, u = e.className, d = m(e, li);
	n = r(n, "spinner");
	var f = n + "-" + a;
	return /* @__PURE__ */ C.createElement(l, _({ ref: t }, d, { className: (0, w.default)(u, f, o && f + "-" + o, i && "text-" + i) }), s);
});
ui.displayName = "Spinner", fr();
var di = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], fi = { placement: "right" }, pi = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.placement, a = e.className, o = e.style, s = e.children, c = e.arrowProps;
	e.popper, e.show;
	var l = m(e, di);
	n = r(n, "tooltip");
	var u = (i?.split("-") || [])[0];
	return /* @__PURE__ */ C.createElement("div", _({
		ref: t,
		style: o,
		role: "tooltip",
		"x-placement": u,
		className: (0, w.default)(a, n, "bs-tooltip-" + u)
	}, l), /* @__PURE__ */ C.createElement("div", _({ className: "arrow" }, c)), /* @__PURE__ */ C.createElement("div", { className: n + "-inner" }, s));
});
pi.defaultProps = fi, pi.displayName = "Tooltip";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Add.js
var mi = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), hi = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), gi = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), _i = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), vi = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), yi = (e) => /* @__PURE__ */ C.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), bi = (e) => /* @__PURE__ */ C.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), xi = (e) => /* @__PURE__ */ C.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Si = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Ci = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), wi = [
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
], Ti = [
	"hover",
	"click",
	"focus"
];
function Ei(e) {
	return /* @__PURE__ */ C.createElement(ni, { ...e });
}
function Di(e) {
	return /* @__PURE__ */ C.createElement(ci, { ...e }, e.children);
}
var Oi = H.default.oneOf(Ti);
Ei.propTypes = {
	children: H.default.node.isRequired,
	container: H.default.oneOfType([H.default.elementType, H.default.func]),
	onEnter: H.default.func,
	onEntered: H.default.func,
	onEntering: H.default.func,
	onExit: H.default.func,
	onExited: H.default.func,
	onExiting: H.default.func,
	onHide: H.default.func,
	placement: H.default.oneOf(wi),
	popperConfig: H.default.shape({}),
	rootClose: H.default.bool,
	rootCloseEvent: H.default.oneOf(["click", "mousedown"]),
	show: H.default.bool,
	target: H.default.oneOfType([H.default.elementType, H.default.func]),
	transition: H.default.oneOfType([H.default.object, H.default.bool])
}, Di.propTypes = {
	children: H.default.oneOfType([H.default.element, H.default.func]).isRequired,
	overlay: H.default.oneOfType([H.default.element, H.default.func]).isRequired,
	defaultShow: H.default.bool,
	delay: H.default.oneOfType([H.default.number, H.default.shape({})]),
	flip: H.default.bool,
	onHide: H.default.func,
	onToggle: H.default.func,
	placement: H.default.oneOf(wi),
	popperConfig: H.default.shape({}),
	show: H.default.bool,
	target: H.default.instanceOf(EventTarget),
	trigger: H.default.oneOfType([Oi, H.default.arrayOf(Oi)])
}, Ei.defaultProps = {
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
	transition: Ne
}, Di.defaultProps = {
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
var ki = [
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
], Ai = /* @__PURE__ */ C.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ C.createElement(pi, {
	...n,
	className: (0, w.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Ai.propTypes = {
	...pi.propTypes,
	id: H.default.string.isRequired,
	placement: H.default.oneOf(ki),
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
}, Ai.defaultProps = {
	...Ai.defaultProps,
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
var ji = /* @__PURE__ */ C.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: a, onClick: o = () => {}, size: s = "md", variant: c = "primary", iconAs: l = p, isActive: u = !1, children: d, ...f }, m) => {
	let h = n ? "inverse-" : "", g = u ? `${c}-` : "", _ = l;
	return /* @__PURE__ */ C.createElement("button", {
		"aria-label": t,
		className: (0, w.default)("btn-icon", `btn-icon-${h}${c}`, `btn-icon-${s}`, { [`btn-icon-${h}${g}active`]: u }, e),
		onClick: o,
		type: "button",
		ref: m,
		...f
	}, /* @__PURE__ */ C.createElement("span", { className: "btn-icon__icon-container" }, _ && /* @__PURE__ */ C.createElement(_, {
		className: (0, w.default)("btn-icon__icon", a),
		icon: r,
		src: i
	})));
});
function Mi({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ C.createElement(Di, {
		placement: e,
		overlay: /* @__PURE__ */ C.createElement(Ai, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ C.createElement(ji, { ...n }));
}
ji.IconButtonWithTooltip = Mi;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Container/index.js
var Ni = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(Ni || {}), Pi = /* @__PURE__ */ (0, C.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ C.createElement(Jr, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, w.default)(a.className, e && Ni[e])
}, t));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Fi(e) {
	return typeof e == "string" || e instanceof String;
}
function Ii(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Li(e, t) {
	return Array.isArray(t) ? Li(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
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
function Ri(e) {
	switch (e) {
		case U.LEFT: return U.FORCE_LEFT;
		case U.RIGHT: return U.FORCE_RIGHT;
		default: return e;
	}
}
function zi(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Bi(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Bi(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Bi(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Vi = class {
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
function Hi(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? W.MaskedRegExp : Fi(e) ? W.MaskedPattern : e === Date ? W.MaskedDate : e === Number ? W.MaskedNumber : Array.isArray(e) || e === Array ? W.MaskedDynamic : W.Masked && e.prototype instanceof W.Masked ? e : W.Masked && e instanceof W.Masked ? e.constructor : e instanceof Function ? W.MaskedFunction : (console.warn("Mask not found for mask", e), W.Masked);
}
function Ui(e) {
	if (!e) throw Error("Options in not defined");
	if (W.Masked) {
		if (e.prototype instanceof W.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof W.Masked ? { mask: e } : Ii(e) && e.mask instanceof W.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Li(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Ii(e) ? { ...e } : { mask: e };
}
function Wi(e) {
	if (W.Masked && e instanceof W.Masked) return e;
	let t = Ui(e), n = Hi(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
W.createMask = Wi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var Gi = class {
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
W.MaskElement = Gi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var Ki = 90, qi = 89, Ji = class extends Gi {
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
		if (this._handlers.redo && (e.keyCode === Ki && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === qi && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === Ki && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
W.HTMLMaskElement = Ji;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var Yi = class extends Ji {
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
W.HTMLMaskElement = Ji;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var Xi = class extends Ji {
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
W.HTMLContenteditableMaskElement = Xi;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Zi = class e {
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
Zi.MAX_LENGTH = 100, W.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof Gi ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Xi(e) : new Yi(e), this.masked = Wi(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Zi(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof W.Masked) && this.masked.constructor === Hi(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof W.Masked ? e : Wi({ mask: e });
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
		let t = new Vi({
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
var Qi = class {
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
}, K = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Qi(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Fi(e) && (e = new Qi(String(e))), e.appendTo(this);
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
		if (!Fi(e)) throw Error("value should be string");
		let r = Fi(n) ? new Qi(String(n)) : n;
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
		s && (r = Ri(r), c = this.extractInput(0, a, { raw: !0 }));
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
		return !Bi(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new G();
	}
};
K.DEFAULTS = { skipInvalid: !0 }, K.EMPTY_VALUES = [
	void 0,
	null,
	""
], W.Masked = K;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var $i = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Fi(t) ? new Qi(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof Qi) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof W.MaskedPattern)) return new Qi(this.toString()).appendTo(t);
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
			let n = "chunks" in t ? new e() : new Qi();
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
}, ea = class {
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
}, ta = class {
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
		return new Qi("");
	}
	appendTail(e) {
		return Fi(e) && (e = new Qi(String(e))), e.appendTo(this);
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
}, na = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = Wi(s), Object.assign(this, {
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
na.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, W.MaskedRegExp = class extends K {
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
var q = class e extends K {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, na.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = Ui(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? Wi(i) : new W.RepeatBlock(i);
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
			let c = s ? new na({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...Ui(t[o]),
				parent: this
			}) : new ta({
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
		let n = new $i();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof $i && (a.blockIndex = t), n.extend(a);
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
		let n = new ea(this, e);
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
q.DEFAULTS = {
	...K.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, q.STOP_CHAR = "`", q.ESCAPE_CHAR = "\\", q.InputDefinition = na, q.FixedDefinition = ta, W.MaskedPattern = q;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var ra = class extends q {
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
W.MaskedRange = ra;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var ia = "d{.}`m{.}`Y", aa = class e extends q {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Fi(t) ? t : n
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
			mask: Fi(n) ? n : r,
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
aa.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: ra,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: ra,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: ra,
		from: 1900,
		to: 9999
	}
}), aa.DEFAULTS = {
	...q.DEFAULTS,
	mask: Date,
	pattern: ia,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, W.MaskedDate = aa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var oa = class e extends K {
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
			let { expose: t, ...n } = Ui(e), r = Wi({
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
			return Bi(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
oa.DEFAULTS = {
	...K.DEFAULTS,
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
}, W.MaskedDynamic = oa;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var sa = class e extends q {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Qi("", e);
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
sa.DEFAULTS = {
	...q.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, W.MaskedEnum = sa, W.MaskedFunction = class extends K {
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
var ca, la = class e extends K {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + zi(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(zi).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(zi(this.thousandsSeparator), "g");
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
ca = la, la.UNMASKED_RADIX = ".", la.EMPTY_VALUES = [...K.EMPTY_VALUES, 0], la.DEFAULTS = {
	...K.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [ca.UNMASKED_RADIX],
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
}, W.MaskedNumber = la;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var ua = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function da(e, t, n) {
	t === void 0 && (t = ua.MASKED), n === void 0 && (n = ua.MASKED);
	let r = Wi(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function fa(e, t, n, r) {
	return da(t, n, r)(e);
}
W.PIPE_TYPE = ua, W.createPipe = da, W.pipe = fa, W.RepeatBlock = class extends q {
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
		let { repeat: t, ...n } = Ui(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = Wi(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(Wi(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
var pa = {
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
}, ma = Object.keys(pa).filter((e) => e !== "value"), ha = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], ga = ma.filter((e) => ha.indexOf(e) < 0);
function _a(e) {
	var t;
	let n = (t = class extends C.Component {
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
			return Object.keys(t).filter((e) => ga.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return ma.forEach((e) => {
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
			return C.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = pa, C.forwardRef((e, t) => C.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var va = _a((e) => {
	let { inputRef: t, ...n } = e;
	return C.createElement("input", {
		...n,
		ref: t
	});
}), ya = C.forwardRef((e, t) => C.createElement(va, {
	...e,
	ref: t
})), ba = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), xa = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Sa = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, C.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Ca = (e, t) => {
	let [n, r] = (0, C.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(g(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, C.useState)(e);
		return (0, C.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, wa = (e) => e, Ta = /* @__PURE__ */ C.createContext({
	getControlProps: wa,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: wa,
	getDescriptorProps: wa,
	hasFormGroupProvider: !1
}), J = () => C.useContext(Ta);
function Ea(e) {
	let [t, n] = (0, C.useState)(e);
	return [t, (e) => {
		(0, C.useEffect)(() => n(e), [e]);
	}];
}
function Da({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, C.useMemo)(() => t || g("form-field"), [t]), [o, s] = Ca(a), [c, l] = Ca(a), [u, d] = Ea(!1), f = {
		getControlProps: (0, C.useCallback)((e) => {
			let t = u ? c : void 0;
			return ba({
				...e,
				"aria-describedby": (0, w.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, w.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ C.createElement(Ta.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Oa = {
	SMALL: "sm",
	LARGE: "lg"
}, ka = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Aa = {
	[ka.DEFAULT]: null,
	[ka.VALID]: gi,
	[ka.INVALID]: vi,
	[ka.WARNING]: Ci,
	[ka.CRITERIA_EMPTY]: Si,
	[ka.CRITERIA_VALID]: _i,
	[ka.CRITERIA_INVALID]: hi
}, ja = ({ isInvalid: e, isValid: t }) => t ? ka.VALID : e ? ka.INVALID : ka.DEFAULT;
function Ma({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Aa[e];
	return n ? /* @__PURE__ */ C.createElement(p, { src: n }) : null;
}
Ma.propTypes = {
	type: H.default.oneOf(Object.values(ka)),
	customIcon: H.default.node
}, Ma.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Na({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, w.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ C.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ C.createElement(Ma, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ C.createElement("div", null, e));
}
Na.propTypes = {
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
}, Na.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Pa({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = J(), a = n(t), o = (0, w.default)("pgn__form-control-description", t.className), s = t.type || ja({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ C.createElement(Na, {
		...a,
		className: o,
		type: s
	}, e);
}
Pa.propTypes = {
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
}, Pa.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function Fa({ children: e }) {
	let { controlId: t } = J();
	return /* @__PURE__ */ C.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ C.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ C.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
Fa.propTypes = { children: H.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Ia({ children: e, location: t }) {
	return /* @__PURE__ */ C.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Ia.propTypes = {
	children: H.default.node.isRequired,
	location: H.default.oneOf(["leading", "trailing"])
}, Ia.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function La({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = J(a), s = a.size || o.size;
	return /* @__PURE__ */ C.createElement("div", {
		className: (0, w.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Oa.LARGE,
			"pgn__form-control-decorator-group-sm": s === Oa.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ C.createElement(Ia, { location: "leading" }, t), n && /* @__PURE__ */ C.createElement(Ia, { location: "trailing" }, n), r && /* @__PURE__ */ C.createElement(Fa, null, r));
}
La.propTypes = {
	children: H.default.node.isRequired,
	leadingElement: H.default.node,
	trailingElement: H.default.node,
	floatingLabel: H.default.node,
	className: H.default.string,
	size: H.default.oneOf([Oa.SMALL, Oa.LARGE])
}, La.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Ra = /* @__PURE__ */ C.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = J(), h = C.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Sa({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, C.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, C.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: xa(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ C.createElement(La, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ C.createElement(Nr, {
		as: c ? ya : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, w.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
Ra.Feedback = Pa, Ra.Description = Pa, Ra.propTypes = {
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
}, Ra.defaultProps = {
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
function za({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = J(), o = (0, w.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Oa.LARGE,
		"pgn__form-label-sm": r === Oa.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ C.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Ba({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ C.createElement(a ?? "div", {
		...o,
		className: (0, w.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ C.createElement(Da, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var Va = /* @__PURE__ */ C.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), Ha = () => (0, C.useContext)(Va);
function Ua({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? xa(n, e.onBlur) : n,
			onFocus: e.onFocus ? xa(r, e.onFocus) : r,
			onChange: e.onChange ? xa(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ C.createElement(Va.Provider, { value: c }, e);
}
Ua.propTypes = {
	children: H.default.node.isRequired,
	name: H.default.string.isRequired,
	onBlur: H.default.func,
	onFocus: H.default.func,
	onChange: H.default.func,
	value: H.default.string,
	defaultValue: H.default.string
}, Ua.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var Wa = /* @__PURE__ */ C.forwardRef((e, t) => {
	let { getControlProps: n } = J(), { getRadioControlProps: r, hasRadioSetProvider: i } = Ha(), a = n({
		...e,
		className: (0, w.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ C.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
Wa.propTypes = { className: H.default.string }, Wa.defaultProps = { className: void 0 };
var Ga = /* @__PURE__ */ C.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ C.createElement(Da, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ C.createElement("div", { className: (0, w.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ C.createElement(Wa, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ C.createElement("div", null, /* @__PURE__ */ C.createElement(za, { className: r }, e), i && /* @__PURE__ */ C.createElement(Pa, { hasIcon: !1 }, i)))));
Ga.propTypes = {
	id: H.default.string,
	children: H.default.node.isRequired,
	className: H.default.string,
	controlClassName: H.default.string,
	labelClassName: H.default.string,
	description: H.default.node,
	isInvalid: H.default.bool,
	isValid: H.default.bool,
	disabled: H.default.bool
}, Ga.defaultProps = {
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
function Ka({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ C.createElement(e, {
		className: (0, w.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Ka.propTypes = {
	as: H.default.elementType,
	className: H.default.string,
	isInline: H.default.bool,
	children: H.default.node
}, Ka.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function qa({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = J();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ C.createElement(Ua, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ C.createElement(Ka, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
qa.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	name: H.default.string.isRequired,
	value: H.default.string,
	defaultValue: H.default.string,
	isInline: H.default.bool,
	onChange: H.default.func,
	onFocus: H.default.func,
	onBlur: H.default.func
}, qa.defaultProps = {
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
var Ja, Ya = new Uint8Array(16);
function Xa() {
	if (!Ja && (Ja = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ja)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Ja(Ya);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Y = [];
for (let e = 0; e < 256; ++e) Y.push((e + 256).toString(16).slice(1));
function Za(e, t = 0) {
	return Y[e[t + 0]] + Y[e[t + 1]] + Y[e[t + 2]] + Y[e[t + 3]] + "-" + Y[e[t + 4]] + Y[e[t + 5]] + "-" + Y[e[t + 6]] + Y[e[t + 7]] + "-" + Y[e[t + 8]] + Y[e[t + 9]] + "-" + Y[e[t + 10]] + Y[e[t + 11]] + Y[e[t + 12]] + Y[e[t + 13]] + Y[e[t + 14]] + Y[e[t + 15]];
}
var Qa = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function $a(e, t, n) {
	if (Qa.randomUUID && !t && !e) return Qa.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || Xa)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Za(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var eo = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), to = (e, t) => t.every((t) => e[t] !== void 0), no = (e, t) => eo(e, (e) => Array.isArray(t) ? to(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), ro = /* @__PURE__ */ C.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, w.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ C.createElement(ui, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ C.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function io({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function ao({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function oo({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && io({
		event: e,
		currentIndex: s,
		activeElement: a
	}), ao({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function so(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, C.useRef)();
	return (0, C.useEffect)(() => {
		let e = (e) => {
			oo({
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
var co = f({
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
}), lo = /* @__PURE__ */ (0, C.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: u, hasCustomError: d, customErrorMessageText: f, onChange: m, helpMessage: h, ...g }, _) => {
	let v = l(), y = (0, C.useRef)(), b = so({
		selectors: t,
		ignoredKeys: n
	}), [x, S] = (0, C.useState)(!1), [w, T] = (0, C.useState)(!1), [E, D] = (0, C.useState)(!1), [O, k] = (0, C.useState)(!1), [A, j] = (0, C.useState)(i?.userProvidedText || ""), [M, N] = (0, C.useState)([]), [P, F] = (0, C.useState)(null), [I, L] = (0, C.useState)(!0), [R, z] = (0, C.useState)(""), ee = (e) => {
		F(e);
	}, te = () => {
		N([]), S(!1), F(null);
	}, ne = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		D(!0), k(!0), j(n), m && (!i || i && n !== i.selectionValue) && m({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), te(), t && t(e);
	};
	function re(t = "") {
		let n = C.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? $a();
			return /* @__PURE__ */ C.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => ne(e, n),
				id: i,
				onFocus: () => ee(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let ie = () => {
		N(re(A)), L(!0), z(""), S(!0);
	}, ae = () => {
		x ? te() : ie();
	}, B = /* @__PURE__ */ C.createElement(ji, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: x ? xi : bi,
		iconAs: p,
		size: "sm",
		variant: "secondary",
		alt: x ? v.formatMessage(co.iconButtonClosed) : v.formatMessage(co.iconButtonOpened),
		onClick: ae
	}), oe = () => {
		T(!0);
	}, se = () => {
		if (d) {
			L(!1), z(f);
			return;
		}
		if (o && !E) {
			L(!1), z(s);
			return;
		}
		if (E && c && !O) {
			L(!1), z(u);
			return;
		}
		L(!0), z("");
	};
	(0, C.useImperativeHandle)(_, () => ({ updateErrorStateAndErrorMessage: se }));
	let ce = () => {
		T(!1), te(), se();
	}, le = (e) => {
		if (w) {
			if (e.key === "Escape") {
				e.preventDefault(), y && y.current.focus(), te();
				return;
			}
			e.key === "Tab" && ce();
		}
	}, ue = (e) => {
		b.current && !b.current.contains(e.target) && w && ce();
	};
	(0, C.useEffect)(() => (document.addEventListener("keydown", le), document.addEventListener("click", ue, !0), () => {
		document.removeEventListener("click", ue, !0), document.removeEventListener("keydown", le);
	})), (0, C.useEffect)(() => {
		j(i ? i.userProvidedText ?? "" : ""), D(!!i && !!i.userProvidedText), k(!!i && !!i.selectionValue);
	}, [i]);
	let de = () => {
		ie();
	}, fe = (e) => {
		let t = e.target.value;
		if (!t.length) {
			j(""), D(!1), k(!1), N([]), te(), m && m({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		D(!0);
		let n = re(t);
		N(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			k(!1), j(t), m && m({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		k(!0), j(r.props.children), m && m({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: pe } = J(), me = pe(g);
	return /* @__PURE__ */ C.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: b,
		onFocus: oe
	}, /* @__PURE__ */ C.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${M.length} options found`), /* @__PURE__ */ C.createElement(Da, {
		controlId: me.id,
		isInvalid: !I
	}, /* @__PURE__ */ C.createElement(Ra, {
		ref: y,
		"aria-expanded": (M.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: A,
		"aria-invalid": R,
		"aria-activedescendant": P,
		onChange: fe,
		onClick: de,
		trailingElement: B,
		"data-testid": "autosuggest-textbox-input",
		...me
	}), h && I && /* @__PURE__ */ C.createElement(Pa, { type: "default" }, h), !I && /* @__PURE__ */ C.createElement(Pa, {
		type: "invalid",
		"feedback-for": me.name
	}, R)), /* @__PURE__ */ C.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ C.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ C.createElement(ro, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : M.length > 0 && M));
});
lo.defaultProps = {
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
}, lo.propTypes = {
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
	valueRequiredErrorMessageText: no(H.default.string, "isValueRequired"),
	isSelectionRequired: H.default.bool,
	selectionRequiredErrorMessageText: no(H.default.string, "isSelectionRequired"),
	hasCustomError: H.default.bool,
	customErrorMessageText: no(H.default.string, "hasCustomError"),
	name: H.default.string,
	readOnly: H.default.bool,
	children: H.default.node,
	screenReaderText: H.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function uo({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, w.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, C.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ C.createElement(C.Fragment, null, i && /* @__PURE__ */ C.createElement(p, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ C.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ C.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ C.createElement(p, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function fo({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ C.createElement(uo, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, w.default)(t, "dropdown-item"),
		...r
	}, e);
}
fo.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, fo.propTypes = {
	className: H.default.string,
	children: H.default.string,
	onClick: H.default.func
};
var po = /* @__PURE__ */ C.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), mo = () => (0, C.useContext)(po);
function ho({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? xa(n, e.onBlur) : n,
			onFocus: e.onFocus ? xa(r, e.onFocus) : r,
			onChange: e.onChange ? xa(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ C.createElement(po.Provider, { value: c }, e);
}
ho.propTypes = {
	children: H.default.node.isRequired,
	name: H.default.string,
	onBlur: H.default.func,
	onFocus: H.default.func,
	onChange: H.default.func,
	value: H.default.arrayOf(H.default.string),
	defaultValue: H.default.arrayOf(H.default.string)
}, ho.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var go = /* @__PURE__ */ C.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = mo(), a = C.useRef(), o = n || a, { getControlProps: s } = J(), c = s({
		...t,
		className: (0, w.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), C.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ C.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
go.propTypes = {
	isIndeterminate: H.default.bool,
	className: H.default.string
}, go.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var _o = /* @__PURE__ */ C.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = mo(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = J();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ C.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ C.createElement(Da, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ C.createElement("div", {
		className: (0, w.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ C.createElement("div", null, /* @__PURE__ */ C.createElement(za, { className: r }, e), i && /* @__PURE__ */ C.createElement(Pa, { hasIcon: !1 }, i))));
});
_o.propTypes = {
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
}, _o.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: go,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var vo = /* @__PURE__ */ C.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = C.useRef(), i = n || r, { getControlProps: a } = J(), o = a({
		...t,
		className: (0, w.default)("pgn__form-switch-input", t.className)
	});
	return C.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ C.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
vo.propTypes = {
	isIndeterminate: H.default.bool,
	className: H.default.string
}, vo.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var yo = /* @__PURE__ */ C.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ C.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ C.createElement(_o, {
	className: (0, w.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: vo,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ C.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
yo.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	labelClassName: H.default.string,
	helperText: H.default.node,
	floatLabelLeft: H.default.bool
}, yo.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function bo({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = J();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ C.createElement(ho, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ C.createElement(Ka, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
bo.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	name: H.default.string.isRequired,
	value: H.default.arrayOf(H.default.string),
	defaultValue: H.default.arrayOf(H.default.string),
	isInline: H.default.bool,
	onChange: H.default.func,
	onFocus: H.default.func,
	onBlur: H.default.func
}, bo.defaultProps = {
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
var xo = bo, X = Gr;
X.Control = Ra, X.Radio = Ga, X.RadioSet = qa, X.Autosuggest = lo, X.AutosuggestOption = fo, X.Checkbox = _o, X.CheckboxSet = bo, X.Switch = yo, X.SwitchSet = xo, X.Label = za, X.Group = Ba, X.Text = Na;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var So = /* @__PURE__ */ C.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Co({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, C.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ C.createElement(So.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var wo = "right-scroll-bar-position", To = "width-before-scroll-bar", Eo = "with-scroll-bars-hidden", Do = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Oo(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function ko(e, t) {
	var n = (0, C.useState)(function() {
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
var Ao = typeof window < "u" ? C.useLayoutEffect : C.useEffect, jo = /* @__PURE__ */ new WeakMap();
function Mo(e, t) {
	var n = ko(t || null, function(t) {
		return e.forEach(function(e) {
			return Oo(e, t);
		});
	});
	return Ao(function() {
		var t = jo.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Oo(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Oo(e, a);
			});
		}
		jo.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function No(e) {
	return e;
}
function Po(e, t) {
	t === void 0 && (t = No);
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
function Fo(e, t) {
	return t === void 0 && (t = No), Po(e, t);
}
function Io(e) {
	e === void 0 && (e = {});
	var t = Po(null);
	return t.options = c({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Lo = function(e) {
	var t = e.sideCar, r = n(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return C.createElement(i, c({}, r));
};
Lo.isSideCarExport = !0;
function Ro(e, t) {
	return e.useMedium(t), Lo;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var zo = Io(), Bo = function() {}, Vo = C.forwardRef(function(e, t) {
	var r = C.useRef(null), i = C.useState({
		onScrollCapture: Bo,
		onWheelCapture: Bo,
		onTouchMoveCapture: Bo
	}), a = i[0], o = i[1], s = e.forwardProps, l = e.children, u = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, g = e.noIsolation, _ = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, x = e.gapMode, S = n(e, [
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
	]), w = m, T = Mo([r, t]), E = c(c({}, S), a);
	return C.createElement(C.Fragment, null, f && C.createElement(w, {
		sideCar: zo,
		removeScrollBar: d,
		shards: p,
		noRelative: h,
		noIsolation: g,
		inert: _,
		setCallbacks: o,
		allowPinchZoom: !!v,
		lockRef: r,
		gapMode: x
	}), s ? C.cloneElement(C.Children.only(l), c(c({}, E), { ref: T })) : C.createElement(b, c({}, E, {
		className: u,
		ref: T
	}), l));
});
Vo.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Vo.classNames = {
	fullWidth: To,
	zeroRight: wo
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var Ho = "data-focus-lock", Uo = "data-focus-lock-disabled", Wo = "data-no-focus-lock", Go = "data-autofocus-inside", Ko = "data-no-autofocus", qo = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Jo = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: qo
	}), n, n && /* @__PURE__ */ C.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: qo
	}));
};
Jo.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Yo = Fo({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Xo = Fo(), Zo = Fo(), Qo = Io({
	async: !0,
	ssr: typeof document < "u"
}), $o = /* @__PURE__ */ (0, C.createContext)(void 0), es = [], ts = /* @__PURE__ */ (0, C.forwardRef)(function(e, t) {
	var n, r = (0, C.useState)(), i = r[0], a = r[1], o = (0, C.useRef)(), s = (0, C.useRef)(!1), c = (0, C.useRef)(null), l = (0, C.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, g = h === void 0 ? !1 : h, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, w = e.className, T = e.whiteList, E = e.hasPositiveIndices, D = e.shards, O = D === void 0 ? es : D, k = e.as, A = k === void 0 ? "div" : k, j = e.lockProps, M = j === void 0 ? {} : j, N = e.sideCar, P = e.returnFocus, F = P === void 0 ? !1 : P, I = e.focusOptions, L = e.onActivation, R = e.onDeactivation, z = (0, C.useState)({})[0], ee = (0, C.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && L && L(o.current), s.current = !0, l();
	}, [L]), te = (0, C.useCallback)(function() {
		s.current = !1, R && R(o.current), l();
	}, [R]), ne = (0, C.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof F == "function" ? F(n) : F;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [F]), re = (0, C.useCallback)(function(e) {
		s.current && Yo.useMedium(e);
	}, []), ie = Xo.useMedium, ae = (0, C.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), B = _((n = {}, n[Uo] = f && "disabled", n[Ho] = S, n), M), oe = m !== !0, se = oe && m !== "tail", ce = Mo([t, ae]), le = (0, C.useMemo)(function() {
		return {
			observed: o,
			shards: O,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		O,
		o
	]);
	return /* @__PURE__ */ C.createElement(C.Fragment, null, oe && [/* @__PURE__ */ C.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: qo
	}), E ? /* @__PURE__ */ C.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: qo
	}) : null], !f && /* @__PURE__ */ C.createElement(N, {
		id: z,
		sideCar: Qo,
		observed: i,
		disabled: f,
		persistentFocus: g,
		crossFrame: y,
		autoFocus: x,
		whiteList: T,
		shards: O,
		onActivation: ee,
		onDeactivation: te,
		returnFocus: ne,
		focusOptions: I,
		noFocusGuards: m
	}), /* @__PURE__ */ C.createElement(A, _({ ref: ce }, B, {
		className: w,
		onBlur: ie,
		onFocus: re
	}), /* @__PURE__ */ C.createElement($o.Provider, { value: le }, u)), se && /* @__PURE__ */ C.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: qo
	}));
});
ts.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function ns(e) {
	setTimeout(e, 1);
}
var rs = function(e) {
	return e && "current" in e ? e.current : e;
}, is = ts, as = Io(), os = "data-focus-on-hidden", ss = { preventScroll: !0 }, cs = C.forwardRef(function(e, t) {
	var r = C.useState(!1), i = r[0], a = r[1], o = C.useState(null), s = o[0], l = o[1], u = e.children, d = e.autoFocus, f = e.shards, p = e.crossFrame, m = e.enabled, h = m === void 0 ? !0 : m, g = e.scrollLock, _ = g === void 0 ? !0 : g, v = e.focusLock, y = v === void 0 ? !0 : v, b = e.returnFocus, x = b === void 0 ? !0 : b, S = e.inert, w = e.allowPinchZoom, T = e.sideCar, E = e.className, D = e.shouldIgnore, O = e.preventScrollOnFocus, k = e.style, A = e.as, j = e.gapMode, M = n(e, [
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
	]), N = T, P = c(c({}, i), {
		as: A,
		style: k,
		sideCar: T,
		shards: f,
		allowPinchZoom: w,
		gapMode: j,
		inert: S,
		enabled: h && _
	}), F = C.useCallback(function(e) {
		l(e);
	}, []), I = C.useCallback(function() {
		l(null);
	}, []);
	return C.createElement(C.Fragment, null, C.createElement(is, {
		ref: t,
		sideCar: T,
		disabled: !(h && y),
		returnFocus: x,
		autoFocus: d,
		shards: f,
		crossFrame: p,
		onActivation: F,
		onDeactivation: I,
		className: E,
		whiteList: D,
		lockProps: P,
		focusOptions: O ? ss : void 0,
		as: Vo
	}, u), h && C.createElement(N, c({}, M, {
		sideCar: as,
		setLockProps: a,
		shards: f,
		activeNode: s
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function ls(e) {
	"@babel/helpers - typeof";
	return ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ls(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function us(e, t) {
	if (ls(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (ls(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function ds(e) {
	var t = us(e, "string");
	return ls(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function fs(e, t, n) {
	return (t = ds(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function ps(e, t) {
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
			k(t, e);
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
				return /* @__PURE__ */ C.createElement(r, this.props);
			}, t;
		}(C.PureComponent);
		return fs(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var ms = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, hs = function(e) {
	return Array.isArray(e) ? e : [e];
}, gs = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, _s = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, vs = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, ys = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, bs = function(e) {
	return e.hasAttribute("inert");
}, xs = function(e, t) {
	return !e || ys(e) || !_s(e) && !bs(e) && t(vs(e));
}, Ss = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = xs(t, Ss.bind(void 0, e));
	return e.set(t, r), r;
}, Cs = function(e, t) {
	return e && !ys(e) ? As(e) ? t(vs(e)) : !1 : !0;
}, ws = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Cs(t, ws.bind(void 0, e));
	return e.set(t, r), r;
}, Ts = function(e) {
	return e.dataset;
}, Es = function(e) {
	return e.tagName === "BUTTON";
}, Ds = function(e) {
	return e.tagName === "INPUT";
}, Os = function(e) {
	return Ds(e) && e.type === "radio";
}, ks = function(e) {
	return !((Ds(e) || Es(e)) && (e.type === "hidden" || e.disabled));
}, As = function(e) {
	var t = e.getAttribute(Ko);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, js = function(e) {
	return !!(e && Ts(e)?.focusGuard);
}, Ms = function(e) {
	return !js(e);
}, Ns = function(e) {
	return !!e;
}, Ps = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Fs = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Is = function(e, t, n) {
	return ms(e).map(function(e, t) {
		var r = Fs(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Ps);
}, Ls = [
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
].join(","), Rs = `${Ls}, [data-focus-guard]`, zs = function(e, t) {
	return ms((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? Rs : Ls) ? [n] : [], zs(n));
	}, []);
}, Bs = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? Vs([e.contentDocument.body], t) : [e];
}, Vs = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = zs(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return Bs(e, t);
		}));
		return e.concat(a, n.parentNode ? ms(n.parentNode.querySelectorAll(Ls)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, Hs = function(e) {
	return ms(e.querySelectorAll(`[${Go}]`)).map(function(e) {
		return Vs([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, Us = function(e, t) {
	return ms(e).filter(function(e) {
		return Ss(t, e);
	}).filter(function(e) {
		return ks(e);
	});
}, Ws = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), ms(e).filter(function(e) {
		return ws(t, e);
	});
}, Gs = function(e, t, n) {
	return Is(Us(Vs(e, n), t), !0, n);
}, Ks = function(e, t) {
	return Is(Us(Vs(e), t), !1);
}, qs = function(e, t) {
	return Us(Hs(e), t);
}, Js = function(e, t) {
	return e.shadowRoot ? Js(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ms(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Js(n, t) : !1;
		}
		return Js(e, t);
	});
}, Ys = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Xs = function(e) {
	return e.parentNode ? Xs(e.parentNode) : e;
}, Zs = function(e) {
	return hs(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(Ho);
		return e.push.apply(e, n ? Ys(ms(Xs(t).querySelectorAll(`[${Ho}="${n}"]:not([${Uo}="disabled"])`))) : [t]), e;
	}, []);
}, Qs = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, $s = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? $s(t.shadowRoot) : t instanceof HTMLIFrameElement && Qs(function() {
			return t.contentWindow.document;
		}) ? $s(t.contentWindow.document) : t;
	}
}, ec = function(e, t) {
	return e === t;
}, tc = function(e, t) {
	return !!ms(e.querySelectorAll("iframe")).some(function(e) {
		return ec(e, t);
	});
}, nc = function(e, t) {
	return t === void 0 && (t = $s(gs(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Zs(e).some(function(e) {
		return Js(e, t) || tc(e, t);
	});
}, rc = function(e) {
	e === void 0 && (e = document);
	var t = $s(e);
	return t ? ms(e.querySelectorAll(`[${Wo}]`)).some(function(e) {
		return Js(e, t);
	}) : !1;
}, ic = function(e, t) {
	return t.filter(Os).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, ac = function(e, t) {
	return Os(e) && e.name ? ic(e, t) : e;
}, oc = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(ac(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, sc = function(e) {
	return e[0] && e.length > 1 ? ac(e[0], e) : e[0];
}, cc = function(e, t) {
	return e.indexOf(ac(t, e));
}, lc = "NEW_FOCUS", uc = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = js(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? lc : d;
		if (d === -1) return lc;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = oc(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = cc(e, t[0]), C = cc(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, dc = function(e) {
	return function(t) {
		var n = Ts(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, fc = function(e, t, n) {
	var r = Ws(e.map(function(e) {
		return e.node;
	}).filter(dc(n)));
	return r && r.length ? sc(r) : sc(Ws(t));
}, pc = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && pc(e.parentNode.host || e.parentNode, t), t;
}, mc = function(e, t) {
	for (var n = pc(e), r = pc(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, hc = function(e, t, n) {
	var r = hs(e), i = hs(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = mc(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = mc(a, e);
			t && (o = !o || Js(t, o) ? t : mc(t, o));
		});
	}), o;
}, gc = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(qs(n, t));
	}, []);
}, _c = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Ns);
}, vc = function(e, t) {
	var n = $s(hs(e).length > 0 ? document : gs(e).ownerDocument), r = Zs(e).filter(Ms), i = hc(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Ks(r, a), s = o.filter(function(e) {
		var t = e.node;
		return Ms(t);
	});
	if (s[0]) {
		var c = Ks([i], a).map(function(e) {
			return e.node;
		}), l = _c(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = uc(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = fc(o, d, gc(r, a)) || fc(o, u, gc(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, yc = function(e) {
	var t = Zs(e).filter(Ms), n = Is(Vs([hc(e, e, t)], !0), !0, !0), r = Vs(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: js(t)
		};
	});
}, bc = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, xc = 0, Sc = !1, Cc = function(e, t, n) {
	n === void 0 && (n = {});
	var r = vc(e, t);
	if (!Sc && r) {
		if (xc > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Sc = !0, setTimeout(function() {
				Sc = !1;
			}, 1);
			return;
		}
		xc++, bc(r.node, n.focusOptions), xc--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function wc(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Tc = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: wc(n),
		parent: wc(n.parentElement),
		left: wc(n.previousElementSibling),
		right: wc(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: wc(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Ec = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Gs([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Dc = function(e) {
	var t = Tc(e);
	return function() {
		return Ec(t);
	};
}, Oc = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = hs(t);
	if (r.every(function(t) {
		return !Js(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Gs(r, /* @__PURE__ */ new Map()) : Ks(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, kc = function(e, t) {
	var n = t ? Gs(hs(e), /* @__PURE__ */ new Map()) : Ks(hs(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Ac = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, jc = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Ac(t), i = Oc(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && bc(a.node, r.focusOptions);
	}
}, Mc = function(e, t) {
	t === void 0 && (t = {}), jc(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, Nc = function(e, t) {
	t === void 0 && (t = {}), jc(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, Pc = function(e, t, n) {
	var r = kc(e, t.onlyTabbable ?? !0)[n];
	r && bc(r.node, t.focusOptions);
}, Fc = function(e, t) {
	t === void 0 && (t = {}), Pc(e, t, "first");
}, Ic = function(e, t) {
	t === void 0 && (t = {}), Pc(e, t, "last");
}, Lc = function() {
	return document && document.activeElement === document.body;
}, Rc = function() {
	return Lc() || rc();
}, zc = null, Z = null, Bc = function() {
	return null;
}, Vc = null, Hc = !1, Uc = !1, Wc = function() {
	return !0;
}, Gc = function(e) {
	return (zc.whiteList || Wc)(e);
}, Kc = function(e, t) {
	Vc = {
		observerNode: e,
		portaledElement: t
	};
}, qc = function(e) {
	return Vc && Vc.portaledElement === e;
};
function Jc(e, t, n, r) {
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
var Yc = function(e) {
	return e ? !!Hc : Hc === "meanwhile";
}, Xc = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Zc = function(e, t) {
	return t.some(function(t) {
		return Xc(e, t, t);
	});
}, Qc = function(e) {
	return Ks(e, /* @__PURE__ */ new Map());
}, $c = function(e) {
	return !Qc([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, el = function() {
	var e = !1;
	if (zc) {
		var t = zc, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || Vc && Vc.portaledElement;
		if (Lc() && Z && Z !== document.body && (!document.body.contains(Z) || $c(Z))) {
			var u = Bc();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(rs).filter(Boolean));
			if ((!d || Gc(d)) && (r || function() {
				if (!Yc(o) || !c || !Z || Uc) return !1;
				var e = Qc(f), t = e.findIndex(function(e) {
					return e.node === Z;
				});
				return t === 0 || t === e.length - 1;
			}() || !Rc() || !Z && i) && (l && !(nc(f) || d && Zc(d, f) || qc(d, l)) && (document && !Z && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Cc(f, Z, { focusOptions: s }), Vc = {})), Z = document && document.activeElement, Z !== document.body && (Bc = Dc(Z)), Hc = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = yc(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Jc(h, m.length, 1, m), Jc(h, -1, -1, m));
			}
		}
	}
	return e;
}, tl = function(e) {
	el() && e && (e.stopPropagation(), e.preventDefault());
}, nl = function() {
	return ns(el);
}, rl = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Kc(n, t);
}, il = function() {
	return null;
}, al = function(e) {
	var t = e.children;
	return /* @__PURE__ */ C.createElement("div", {
		onBlur: nl,
		onFocus: rl
	}, t);
};
al.propTypes = {};
var ol = function() {
	Uc = !0;
}, sl = function() {
	Uc = !1, Hc = "just", ns(function() {
		Hc = "meanwhile";
	});
}, cl = function() {
	document.addEventListener("focusin", tl), document.addEventListener("focusout", nl), window.addEventListener("focus", ol), window.addEventListener("blur", sl);
}, ll = function() {
	document.removeEventListener("focusin", tl), document.removeEventListener("focusout", nl), window.removeEventListener("focus", ol), window.removeEventListener("blur", sl);
};
function ul(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var dl = {
	moveFocusInside: Cc,
	focusInside: nc,
	focusNextElement: Mc,
	focusPrevElement: Nc,
	focusFirstElement: Fc,
	focusLastElement: Ic,
	captureFocusRestore: Dc
};
function fl(e) {
	var t = e.slice(-1)[0];
	t && !zc && cl();
	var n = zc, r = n && t && t.id === n.id;
	zc = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (Z = null, (!r || n.observed !== t.observed) && t.onActivation(dl), el(!0), ns(el)) : (ll(), Z = null);
}
Yo.assignSyncMedium(rl), Xo.assignMedium(nl), Zo.assignMedium(function(e) {
	return e(dl);
}), Ro(Qo, ps(ul, fl)(il));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var pl, ml = function() {
	if (pl) return pl;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function hl() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = ml();
	return t && e.setAttribute("nonce", t), e;
}
function gl(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _l(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var vl = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = hl()) && (gl(t, n), _l(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, yl = function() {
	var e = vl();
	return function(t, n) {
		C.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, bl = function() {
	var e = yl();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, xl = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Sl = function(e) {
	return parseInt(e || "", 10) || 0;
}, Cl = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Sl(n),
		Sl(r),
		Sl(i)
	];
}, wl = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return xl;
	var t = Cl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Tl = bl(), El = "data-scroll-locked", Dl = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Eo} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${El}] {
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
  
  .${wo} {
    right: ${s}px ${r};
  }
  
  .${To} {
    margin-right: ${s}px ${r};
  }
  
  .${wo} .${wo} {
    right: 0 ${r};
  }
  
  .${To} .${To} {
    margin-right: 0 ${r};
  }
  
  body[${El}] {
    ${Do}: ${s}px;
  }
`;
}, Ol = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, kl = function() {
	C.useEffect(function() {
		return document.body.setAttribute(El, (Ol() + 1).toString()), function() {
			var e = Ol() - 1;
			e <= 0 ? document.body.removeAttribute(El) : document.body.setAttribute(El, e.toString());
		};
	}, []);
}, Al = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	kl();
	var a = C.useMemo(function() {
		return wl(i);
	}, [i]);
	return C.createElement(Tl, { styles: Dl(a, !t, i, n ? "" : "!important") });
}, jl = !1;
if (typeof window < "u") try {
	var Ml = Object.defineProperty({}, "passive", { get: function() {
		return jl = !0, !0;
	} });
	window.addEventListener("test", Ml, Ml), window.removeEventListener("test", Ml, Ml);
} catch {
	jl = !1;
}
var Nl = jl ? { passive: !1 } : !1, Pl = function(e) {
	return e.tagName === "TEXTAREA";
}, Fl = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Pl(e) && n[t] === "visible");
}, Il = function(e) {
	return Fl(e, "overflowY");
}, Ll = function(e) {
	return Fl(e, "overflowX");
}, Rl = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Vl(e, r)) {
			var i = Hl(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, zl = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Bl = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Vl = function(e, t) {
	return e === "v" ? Il(t) : Ll(t);
}, Hl = function(e, t) {
	return e === "v" ? zl(t) : Bl(t);
}, Ul = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Wl = function(e, t, n, r, i) {
	var a = Ul(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Hl(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Vl(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Gl = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Kl = function(e) {
	return [e.deltaX, e.deltaY];
}, ql = function(e) {
	return e && "current" in e ? e.current : e;
}, Jl = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Yl = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Xl = 0, Zl = [];
function Ql(e) {
	var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), i = C.useState(Xl++)[0], a = C.useState(bl)[0], o = C.useRef(e);
	C.useEffect(function() {
		o.current = e;
	}, [e]), C.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = b([e.lockRef.current], (e.shards || []).map(ql), !0).filter(Boolean);
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
	var s = C.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Gl(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Rl(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Rl(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Wl(h, t, e, h === "h" ? s : c, !0);
	}, []), c = C.useCallback(function(e) {
		var n = e;
		if (!(!Zl.length || Zl[Zl.length - 1] !== a)) {
			var r = "deltaY" in n ? Kl(n) : Gl(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Jl(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(ql).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = C.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: $l(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = C.useCallback(function(e) {
		n.current = Gl(e), r.current = void 0;
	}, []), d = C.useCallback(function(t) {
		l(t.type, Kl(t), t.target, s(t, e.lockRef.current));
	}, []), f = C.useCallback(function(t) {
		l(t.type, Gl(t), t.target, s(t, e.lockRef.current));
	}, []);
	C.useEffect(function() {
		return Zl.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, Nl), document.addEventListener("touchmove", c, Nl), document.addEventListener("touchstart", u, Nl), function() {
			Zl = Zl.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Nl), document.removeEventListener("touchmove", c, Nl), document.removeEventListener("touchstart", u, Nl);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return C.createElement(C.Fragment, null, m ? C.createElement(a, { styles: Yl(i) }) : null, p ? C.createElement(Al, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function $l(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
Ro(zo, Ql);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var eu = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, tu = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap(), ru = {}, iu = 0, au = function(e) {
	return e && (e.host || au(e.parentNode));
}, ou = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = au(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, su = function(e, t, n, r) {
	var i = ou(t, Array.isArray(e) ? e : [e]);
	ru[n] || (ru[n] = /* @__PURE__ */ new WeakMap());
	var a = ru[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (tu.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				tu.set(e, c), a.set(e, l), o.push(e), c === 1 && i && nu.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), iu++, function() {
		o.forEach(function(e) {
			var t = tu.get(e) - 1, i = a.get(e) - 1;
			tu.set(e, t), a.set(e, i), t || (nu.has(e) || e.removeAttribute(r), nu.delete(e)), i || e.removeAttribute(n);
		}), iu--, iu || (tu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap(), ru = {});
	};
}, cu = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || eu(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), su(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, lu = bl(), uu = "\n [" + os + "] {\n   pointer-events: none !important;\n }\n", du = function() {
	return C.createElement(lu, { styles: uu });
}, fu = function(e) {
	return "current" in e ? e.current : e;
};
function pu(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, C.useRef)(null), u = (0, C.useRef)(0);
	return C.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(fu).some(function(t) {
				return t && t.contains(e.target) || t === e.target;
			}) || r && r(e);
		}, a = function(e) {
			t(e), u.current = e.touches.length;
		}, o = function(e) {
			u.current = e.touches.length;
		};
		if (c) return c.ownerDocument.addEventListener("keydown", e), c.ownerDocument.addEventListener("mousedown", t), c.ownerDocument.addEventListener("touchstart", a), c.ownerDocument.addEventListener("touchend", o), function() {
			c.ownerDocument.removeEventListener("keydown", e), c.ownerDocument.removeEventListener("mousedown", t), c.ownerDocument.removeEventListener("touchstart", a), c.ownerDocument.removeEventListener("touchend", o);
		};
	}, [
		c,
		r,
		n
	]), (0, C.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, C.useEffect)(function() {
		if (!(s || !c)) return cu(S([c], (i || []).map(fu)), c.ownerDocument.body, os);
	}, [c, s]), (0, C.useEffect)(function() {
		return t({
			onMouseDown: function(e) {
				l.current = e.target;
			},
			onTouchStart: function(e) {
				l.current = e.target;
			}
		}), function() {
			t(!1);
		};
	}, []), C.createElement(du, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var mu = Ro(as, pu), hu = function(e) {
	return C.createElement(mu, c({}, e));
}, gu = C.forwardRef(function(e, t) {
	return C.createElement(cs, c({}, e, {
		ref: t,
		sideCar: hu
	}));
}), _u = class extends C.Component {
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
		return this.rootElement ? /* @__PURE__ */ B.createPortal(this.props.children, this.rootElement) : null;
	}
}, vu = /* @__PURE__ */ (0, C.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /* @__PURE__ */ C.createElement("div", {
	ref: o,
	className: (0, w.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r));
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function yu(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, C.useState)(e), s = (0, C.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, C.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, C.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
//#endregion
//#region node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var bu = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, xu = typeof window < "u" && window.document && window.document.createElement ? C.useLayoutEffect : C.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function Su(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!dt(i) || !xt(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function Cu(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!dt(r) || !xt(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var wu = /* @__PURE__ */ zn({ defaultModifiers: [
	qt,
	Tn,
	Wt,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: Su,
		effect: Cu,
		requires: ["computeStyles"]
	},
	Cn,
	gn,
	On,
	Rt,
	bn
] }), Tu = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	var n = typeof Element < "u", r = typeof Map == "function", i = typeof Set == "function", a = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
	function o(e, t) {
		if (e === t) return !0;
		if (e && t && typeof e == "object" && typeof t == "object") {
			if (e.constructor !== t.constructor) return !1;
			var s, c, l;
			if (Array.isArray(e)) {
				if (s = e.length, s != t.length) return !1;
				for (c = s; c-- !== 0;) if (!o(e[c], t[c])) return !1;
				return !0;
			}
			var u;
			if (r && e instanceof Map && t instanceof Map) {
				if (e.size !== t.size) return !1;
				for (u = e.entries(); !(c = u.next()).done;) if (!t.has(c.value[0])) return !1;
				for (u = e.entries(); !(c = u.next()).done;) if (!o(c.value[1], t.get(c.value[0]))) return !1;
				return !0;
			}
			if (i && e instanceof Set && t instanceof Set) {
				if (e.size !== t.size) return !1;
				for (u = e.entries(); !(c = u.next()).done;) if (!t.has(c.value[0])) return !1;
				return !0;
			}
			if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
				if (s = e.length, s != t.length) return !1;
				for (c = s; c-- !== 0;) if (e[c] !== t[c]) return !1;
				return !0;
			}
			if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
			if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
			if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
			if (l = Object.keys(e), s = l.length, s !== Object.keys(t).length) return !1;
			for (c = s; c-- !== 0;) if (!Object.prototype.hasOwnProperty.call(t, l[c])) return !1;
			if (n && e instanceof Element) return !1;
			for (c = s; c-- !== 0;) if (!((l[c] === "_owner" || l[c] === "__v" || l[c] === "__o") && e.$$typeof) && !o(e[l[c]], t[l[c]])) return !1;
			return !0;
		}
		return e !== e && t !== t;
	}
	t.exports = function(e, t) {
		try {
			return o(e, t);
		} catch (e) {
			if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
			throw e;
		}
	};
})))()), Eu = [], Du = function(e, t, n) {
	n === void 0 && (n = {});
	var r = C.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || Eu
	}, a = C.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = C.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				B.flushSync(function() {
					s({
						styles: bu(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: bu(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = C.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, Tu.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = C.useRef();
	return xu(function() {
		u.current && u.current.setOptions(l);
	}, [l]), xu(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || wu)(e, t, l);
			return u.current = r, function() {
				r.destroy(), u.current = null;
			};
		}
	}, [
		e,
		t,
		n.createPopper
	]), {
		state: u.current ? u.current.state : null,
		styles: o.styles,
		attributes: o.attributes,
		update: u.current ? u.current.update : null,
		forceUpdate: u.current ? u.current.forceUpdate : null
	};
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/PopperElement.js
function Ou({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, C.useState)(null), { styles: s, attributes: c } = Du(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /* @__PURE__ */ C.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
Ou.defaultProps = { target: void 0 }, Ou.propTypes = {
	children: H.default.node,
	target: H.default.shape({ current: H.default.shape({}) }),
	strategy: H.default.oneOf(["absolute", "fixed"]),
	placement: H.default.oneOf([
		"auto",
		"auto-start",
		"auto-end",
		"top",
		"top-start",
		"top-end",
		"bottom",
		"bottom-start",
		"bottom-end",
		"right",
		"right-start",
		"right-end",
		"left",
		"left-start",
		"left-end"
	]),
	modifiers: H.default.arrayOf(H.default.shape({}))
}, Ou.defaultProps = {
	children: void 0,
	strategy: "absolute",
	placement: "bottom-start",
	modifiers: [{
		name: "flip",
		enabled: !0
	}, {
		name: "preventOverflow",
		options: { tether: !1 }
	}]
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalPopup.js
var ku = {
	right: [-2, 10],
	left: [-2, 10]
};
function Au({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? _u : C.Fragment, u = ku[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ C.createElement(Co, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ C.createElement(l, null, /* @__PURE__ */ C.createElement(Ou, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ C.createElement(gu, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /* @__PURE__ */ C.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /* @__PURE__ */ C.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
Au.propTypes = {
	children: H.default.node.isRequired,
	onClose: H.default.func.isRequired,
	isOpen: H.default.bool.isRequired,
	isBlocking: H.default.bool,
	withPortal: H.default.bool,
	positionRef: H.default.oneOfType([H.default.func, H.default.shape({ current: H.default.shape({}) })]),
	placement: Ou.propTypes.placement,
	hasArrow: H.default.bool
}, Au.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var ju = ["top", "bottom"], Mu = /* @__PURE__ */ C.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, C.useState)(!1), c = C.useRef(), l = a || c;
	return (0, C.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ C.createElement("div", {
		className: (0, w.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
Mu.propTypes = {
	children: H.default.node.isRequired,
	position: H.default.oneOf(ju),
	offset: H.default.oneOfType([H.default.number, H.default.string]),
	className: H.default.string
}, Mu.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function Nu() {
	return (Nu = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function Pu(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function Fu(e) {
	var t = (0, C.useRef)(e), n = (0, C.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var Iu = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Lu = function(e) {
	return "touches" in e;
}, Ru = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, zu = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = Lu(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: Iu((i.pageX - (r.left + Ru(e).pageXOffset)) / r.width),
		top: Iu((i.pageY - (r.top + Ru(e).pageYOffset)) / r.height)
	};
}, Bu = function(e) {
	!Lu(e) && e.preventDefault();
}, Vu = C.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = Pu(e, ["onMove", "onKey"]), i = (0, C.useRef)(null), a = Fu(t), o = Fu(n), s = (0, C.useRef)(null), c = (0, C.useRef)(!1), l = (0, C.useMemo)(function() {
		var e = function(e) {
			Bu(e), (Lu(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(zu(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = Ru(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (Bu(t), !function(e, t) {
					return t && !Lu(e);
				}(t, c.current) && r)) {
					if (Lu(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(zu(r, t, s.current)), n(!0);
				}
			},
			function(e) {
				var t = e.which || e.keyCode;
				t < 37 || t > 40 || (e.preventDefault(), o({
					left: t === 39 ? .05 : t === 37 ? -.05 : 0,
					top: t === 40 ? .05 : t === 38 ? -.05 : 0
				}));
			},
			n
		];
	}, [o, a]), u = l[0], d = l[1], f = l[2];
	return (0, C.useEffect)(function() {
		return f;
	}, [f]), C.createElement("div", Nu({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), Hu = function(e) {
	return e.filter(Boolean).join(" ");
}, Uu = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = Hu(["react-colorful__pointer", e.className]);
	return C.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, C.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, Q = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var Wu = function(e) {
	return Qu(Gu(e));
}, Gu = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? Q(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? Q(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, Ku = function(e) {
	return Zu(Yu(e));
}, qu = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: Q(e.h),
		s: Q(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: Q(i / 2),
		a: Q(r, 2)
	};
}, Ju = function(e) {
	var t = qu(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Yu = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: Q(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: Q(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: Q(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: Q(i, 2)
	};
}, Xu = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, Zu = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? Xu(Q(255 * i)) : "";
	return "#" + Xu(t) + Xu(n) + Xu(r) + a;
}, Qu = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: Q(60 * (s < 0 ? s + 6 : s)),
		s: Q(a ? o / a * 100 : 0),
		v: Q(a / 255 * 100),
		a: i
	};
}, $u = C.memo(function(e) {
	var t = e.hue, n = e.onChange, r = Hu(["react-colorful__hue", e.className]);
	return C.createElement("div", { className: r }, C.createElement(Vu, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: Iu(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": Q(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, C.createElement(Uu, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: Ju({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), ed = C.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: Ju({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return C.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, C.createElement(Vu, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: Iu(t.s + 100 * e.left, 0, 100),
				v: Iu(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + Q(t.s) + "%, Brightness " + Q(t.v) + "%"
	}, C.createElement(Uu, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: Ju(t)
	})));
}), td = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, nd = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || td(Gu(e), Gu(t));
};
function rd(e, t, n) {
	var r = Fu(n), i = (0, C.useState)(function() {
		return e.toHsva(t);
	}), a = i[0], o = i[1], s = (0, C.useRef)({
		color: t,
		hsva: a
	});
	return (0, C.useEffect)(function() {
		if (!e.equal(t, s.current.color)) {
			var n = e.toHsva(t);
			s.current = {
				hsva: n,
				color: t
			}, o(n);
		}
	}, [t, e]), (0, C.useEffect)(function() {
		var t;
		td(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
			hsva: a,
			color: t
		}, r(t));
	}, [
		a,
		e,
		r
	]), [a, (0, C.useCallback)(function(e) {
		o(function(t) {
			return Object.assign({}, t, e);
		});
	}, [])];
}
var id, ad = typeof window < "u" ? C.useLayoutEffect : C.useEffect, od = function() {
	return id || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, sd = /* @__PURE__ */ new Map(), cd = function(e) {
	ad(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !sd.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", sd.set(t, n);
			var r = od();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, ld = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = Pu(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, C.useRef)(null);
	cd(s);
	var c = rd(n, i, a), l = c[0], u = c[1], d = Hu(["react-colorful", t]);
	return C.createElement("div", Nu({}, o, {
		ref: s,
		className: d
	}), C.createElement(ed, {
		hsva: l,
		onChange: u
	}), C.createElement($u, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, ud = {
	defaultColor: "000",
	toHsva: Wu,
	fromHsva: function(e) {
		return Ku({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: nd
}, dd = function(e) {
	return C.createElement(ld, Nu({}, e, { colorModel: ud }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function fd({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = yu(!1), [s, c] = C.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = C.useState(() => e === "" || l(u(e))), [p, m] = C.useState(() => e === "" ? "" : u(e)), [h, g] = C.useState(() => {
		let t = u(e);
		return l(t) ? t : "#fff";
	}), _ = (e) => {
		if (e === "") {
			f(!0), t(""), m(""), g("#fff");
			return;
		}
		let n = u(e);
		if (l(n)) {
			f(!0), t(n), m(n), g(n);
			return;
		}
		f(!1), m(n), t(n);
	};
	return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("span", { className: "d-flex" }, /* @__PURE__ */ C.createElement(Di, {
		placement: "top",
		overlay: /* @__PURE__ */ C.createElement(Ai, { id: "color-picker-tooltip" }, "Color picker")
	}, /* @__PURE__ */ C.createElement(v, {
		ref: c,
		className: (0, w.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /* @__PURE__ */ C.createElement(Au, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ C.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ C.createElement(dd, {
		color: h,
		onChange: _
	}), /* @__PURE__ */ C.createElement(X.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /* @__PURE__ */ C.createElement("div", null, /* @__PURE__ */ C.createElement(X.Label, { className: "pgn__hex-label" }, "Hex"), /* @__PURE__ */ C.createElement(X.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /* @__PURE__ */ C.createElement(X.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
fd.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, fd.propTypes = {
	color: H.default.string,
	setColor: H.default.func.isRequired,
	className: H.default.string,
	size: H.default.oneOf(["sm", "md"])
};
//#endregion
//#region src/keypoint-block/studio-ui/studio-ui.tsx
var $ = h();
function pd({ initialHeader: e, initialKeypoints: t, initialSummary: n, initialButtonText: r, initialButtonLink: i, initialBackgroundColor: a }) {
	let { runtime: c } = (0, C.useContext)(d), l = s("studio_save"), [u, f] = C.useState(e), [p, m] = C.useState(t), [h, g] = C.useState(n), [_, y] = C.useState(r), [b, x] = C.useState(i), [S, w] = C.useState(a), E = () => {
		m([...p, {
			keypoint: "",
			description: ""
		}]);
	}, D = (e, t) => {
		let n = [...p];
		n[e] = {
			...n[e],
			...t
		}, m(n);
	}, O = (e) => {
		m(p.filter((t, n) => n !== e));
	};
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "react-studio-block",
		children: [/* @__PURE__ */ (0, $.jsx)(Pi, {
			className: "xblock-keypoints-studio editor-with-buttons",
			children: /* @__PURE__ */ (0, $.jsx)("div", {
				className: "wrapper-comp-settings is-active",
				children: /* @__PURE__ */ (0, $.jsxs)(vu, {
					direction: "vertical",
					className: "keypoints-studio-stack",
					children: [
						/* @__PURE__ */ (0, $.jsxs)(X.Group, { children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Block Header" }), /* @__PURE__ */ (0, $.jsx)(X.Control, {
							value: u,
							onChange: (e) => f(e.target.value),
							placeholder: "e.g. Key Concepts to Explore"
						})] }),
						/* @__PURE__ */ (0, $.jsxs)("div", { children: [
							/* @__PURE__ */ (0, $.jsxs)(T, {
								className: "keypoints-studio-row",
								children: [
									/* @__PURE__ */ (0, $.jsx)("h4", {
										className: "keypoints-studio-section-title",
										children: "Key Terms"
									}),
									/* @__PURE__ */ (0, $.jsx)(T.Spacer, {}),
									/* @__PURE__ */ (0, $.jsx)(v, {
										iconBefore: mi,
										onClick: E,
										children: "Add Key Term"
									})
								]
							}),
							p.length === 0 && /* @__PURE__ */ (0, $.jsx)("p", {
								className: "keypoints-studio-empty",
								children: "No key terms added yet. Click \"Add Key Term\" to get started."
							}),
							p.map((e, t) => /* @__PURE__ */ (0, $.jsxs)("div", {
								className: "keypoint-entry",
								children: [
									/* @__PURE__ */ (0, $.jsxs)(T, {
										className: "keypoints-studio-entry-header",
										children: [
											/* @__PURE__ */ (0, $.jsxs)("span", {
												className: "keypoints-studio-entry-title",
												children: ["Term ", t + 1]
											}),
											/* @__PURE__ */ (0, $.jsx)(T.Spacer, {}),
											/* @__PURE__ */ (0, $.jsx)(v, {
												variant: "outline-danger",
												iconBefore: yi,
												onClick: () => O(t),
												children: "Remove"
											})
										]
									}),
									/* @__PURE__ */ (0, $.jsxs)(X.Group, {
										className: "keypoints-studio-field",
										children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Label" }), /* @__PURE__ */ (0, $.jsx)(X.Control, {
											value: e.keypoint,
											onChange: (e) => D(t, { keypoint: e.target.value }),
											placeholder: "e.g. Fluid balance"
										})]
									}),
									/* @__PURE__ */ (0, $.jsxs)(X.Group, {
										className: "keypoints-studio-field keypoints-studio-field--last",
										children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Description" }), /* @__PURE__ */ (0, $.jsx)(X.Control, {
											as: "textarea",
											rows: 3,
											value: e.description,
											onChange: (e) => D(t, { description: e.target.value }),
											placeholder: "e.g. The regulation of fluids within the body..."
										})]
									})
								]
							}, `keypoint-${t}`))
						] }),
						/* @__PURE__ */ (0, $.jsxs)(X.Group, { children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Summary" }), /* @__PURE__ */ (0, $.jsx)(X.Control, {
							as: "textarea",
							rows: 4,
							value: h,
							onChange: (e) => g(e.target.value),
							placeholder: "e.g. These concepts form a connected sequence..."
						})] }),
						/* @__PURE__ */ (0, $.jsxs)(X.Group, {
							className: "keypoints-studio-field",
							children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Background Color" }), /* @__PURE__ */ (0, $.jsx)(fd, {
								color: S,
								setColor: w
							})]
						}),
						/* @__PURE__ */ (0, $.jsxs)("div", { children: [
							/* @__PURE__ */ (0, $.jsx)("h4", {
								className: "keypoints-studio-section-title",
								children: "Action Button"
							}),
							/* @__PURE__ */ (0, $.jsxs)(X.Group, {
								className: "keypoints-studio-field",
								children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Button Text" }), /* @__PURE__ */ (0, $.jsx)(X.Control, {
									value: _,
									onChange: (e) => y(e.target.value),
									placeholder: "e.g. Glossary"
								})]
							}),
							/* @__PURE__ */ (0, $.jsxs)(X.Group, {
								className: "keypoints-studio-field keypoints-studio-field--last",
								children: [/* @__PURE__ */ (0, $.jsx)(X.Label, { children: "Button Link" }), /* @__PURE__ */ (0, $.jsx)(X.Control, {
									value: b,
									onChange: (e) => x(e.target.value),
									placeholder: "e.g. https://example.com/glossary"
								})]
							})
						] })
					]
				})
			})
		}), /* @__PURE__ */ (0, $.jsx)(Mu, {
			position: "bottom",
			className: "xblock-actions keypoints-studio-actions",
			children: /* @__PURE__ */ (0, $.jsxs)(T, { children: [
				/* @__PURE__ */ (0, $.jsx)(T.Spacer, {}),
				/* @__PURE__ */ (0, $.jsx)(v, {
					variant: "tertiary",
					onClick: () => c.notify("cancel", {}),
					children: "Cancel"
				}),
				/* @__PURE__ */ (0, $.jsx)(v, {
					variant: "primary",
					onClick: () => {
						o({
							saveUrl: l,
							data: {
								header: u,
								keypoints: p,
								summary: h,
								button_text: _,
								button_link: b,
								background_color: S
							},
							runtime: c,
							errorMessage: "Failed to save keypoint configuration"
						});
					},
					children: "Save"
				})
			] })
		})]
	});
}
//#endregion
//#region src/keypoint-block/studio-ui/style.scss?inline
var md = ".wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.xblock-keypoints-studio .keypoints-studio-stack{gap:var(--pgn-exemplar-xblock-studio-section-gap,24px);padding:var(--pgn-exemplar-xblock-studio-stack-padding,16px)}.xblock-keypoints-studio .keypoints-studio-section-title{margin:0 0 var(--pgn-exemplar-xblock-studio-field-gap,16px);font-weight:700}.xblock-keypoints-studio .keypoints-studio-row,.xblock-keypoints-studio .keypoints-studio-entry-header{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.xblock-keypoints-studio .keypoints-studio-row .keypoints-studio-section-title{margin-bottom:0}.xblock-keypoints-studio .keypoints-studio-empty{color:var(--pgn-color-gray-500);margin:0}.xblock-keypoints-studio .keypoint-entry{border:1px solid var(--pgn-color-gray-200);border-radius:var(--pgn-exemplar-xblock-studio-entry-radius,8px);padding:var(--pgn-exemplar-xblock-studio-entry-padding,24px);margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px);background-color:var(--pgn-color-gray-100)}.xblock-keypoints-studio .keypoint-entry:last-child{margin-bottom:0}.xblock-keypoints-studio .keypoints-studio-entry-title{font-weight:700}.xblock-keypoints-studio .keypoints-studio-field{margin-bottom:var(--pgn-exemplar-xblock-studio-field-gap,16px)}.xblock-keypoints-studio .keypoints-studio-field--last{margin-bottom:0}.keypoints-studio-actions{padding:var(--pgn-exemplar-xblock-studio-actions-padding,16px)}", hd = (e, t, n) => {
	let { header: r, keypoints: i, summary: a, button_text: o, button_link: s, background_color: c } = n.data;
	y({
		runtime: e,
		element: t,
		config: n.config,
		styles: md
	})(/* @__PURE__ */ (0, $.jsx)(pd, {
		initialHeader: r || "",
		initialKeypoints: i || [],
		initialSummary: a || "",
		initialButtonText: o || "",
		initialButtonLink: s || "",
		initialBackgroundColor: c || ""
	}));
};
//#endregion
export { hd as renderBlock };
