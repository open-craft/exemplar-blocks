import { a as e, c as t, d as n, f as r, h as i, i as a, l as o, m as s, n as c, o as l, p as u, r as d, s as f, t as p, u as m } from "./jsx-runtime-Qc-j99iU.js";
//#region node_modules/@openedx/paragon/dist/ActionRow/index.js
var h = /* @__PURE__ */ i(u()), g = /* @__PURE__ */ i(n());
function _({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ h.createElement(e, {
		...r,
		className: (0, g.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function v() {
	return /* @__PURE__ */ h.createElement("span", { className: "pgn__action-row-spacer" });
}
_.Spacer = v, (/* @__PURE__ */ s(((e, t) => {
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
//#region node_modules/uncontrollable/lib/esm/hook.js
function y(e, t, n) {
	var r = (0, h.useRef)(e !== void 0), i = (0, h.useState)(t), a = i[0], o = i[1], s = e !== void 0, c = r.current;
	return r.current = s, !s && c && a !== t && o(t), [s ? e : a, (0, h.useCallback)(function(e) {
		var t = [...arguments].slice(1);
		n && n.apply(void 0, [e].concat(t)), o(e);
	}, [n])];
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function b(e, t) {
	return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, b(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function x(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, b(e, t);
}
//#endregion
//#region node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
function S() {
	var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
	e != null && this.setState(e);
}
function C(e) {
	function t(t) {
		return this.constructor.getDerivedStateFromProps(e, t) ?? null;
	}
	this.setState(t.bind(this));
}
function w(e, t) {
	try {
		var n = this.props, r = this.state;
		this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
	} finally {
		this.props = n, this.state = r;
	}
}
S.__suppressDeprecationWarning = !0, C.__suppressDeprecationWarning = !0, w.__suppressDeprecationWarning = !0;
//#endregion
//#region node_modules/dom-helpers/esm/ownerDocument.js
function T(e) {
	return e && e.ownerDocument || document;
}
//#endregion
//#region node_modules/dom-helpers/esm/ownerWindow.js
function E(e) {
	var t = T(e);
	return t && t.defaultView || window;
}
//#endregion
//#region node_modules/dom-helpers/esm/getComputedStyle.js
function D(e, t) {
	return E(e).getComputedStyle(e, t);
}
//#endregion
//#region node_modules/dom-helpers/esm/hyphenate.js
var O = /([A-Z])/g;
function k(e) {
	return e.replace(O, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/dom-helpers/esm/hyphenateStyle.js
var A = /^ms-/;
function j(e) {
	return k(e).replace(A, "-ms-");
}
//#endregion
//#region node_modules/dom-helpers/esm/isTransform.js
var M = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function N(e) {
	return !!(e && M.test(e));
}
//#endregion
//#region node_modules/dom-helpers/esm/css.js
function P(e, t) {
	var n = "", r = "";
	if (typeof t == "string") return e.style.getPropertyValue(j(t)) || D(e).getPropertyValue(j(t));
	Object.keys(t).forEach(function(i) {
		var a = t[i];
		!a && a !== 0 ? e.style.removeProperty(j(i)) : N(i) ? r += i + "(" + a + ") " : n += j(i) + ": " + a + ";";
	}), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var F = { disabled: !1 }, I = h.createContext(null), L = function(e) {
	return e.scrollTop;
}, R = /* @__PURE__ */ i(r()), z = "unmounted", B = "exited", ee = "entering", te = "entered", ne = "exiting", re = /* @__PURE__ */ function(e) {
	x(t, e);
	function t(t, n) {
		var r = e.call(this, t, n) || this, i = n, a = i && !i.isMounting ? t.enter : t.appear, o;
		return r.appearStatus = null, t.in ? a ? (o = B, r.appearStatus = ee) : o = te : o = t.unmountOnExit || t.mountOnEnter ? z : B, r.state = { status: o }, r.nextCallback = null, r;
	}
	t.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: B } : null;
	};
	var n = t.prototype;
	return n.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, n.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = ee) : (n === "entering" || n === "entered") && (t = ne);
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
				var n = this.props.nodeRef ? this.props.nodeRef.current : R.findDOMNode(this);
				n && L(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: z });
	}, n.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [R.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || F.disabled) {
			this.safeSetState({ status: te }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: ee }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: te }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, n.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : R.findDOMNode(this);
		if (!t || F.disabled) {
			this.safeSetState({ status: B }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: ne }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: B }, function() {
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
		var n = this.props.nodeRef ? this.props.nodeRef.current : R.findDOMNode(this), r = e == null && !this.props.addEndListener;
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
		var r = o(t, [
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
		return /* @__PURE__ */ h.createElement(I.Provider, { value: null }, typeof n == "function" ? n(e, r) : h.cloneElement(h.Children.only(n), r));
	}, t;
}(h.Component);
re.contextType = I, re.propTypes = {};
function ie() {}
re.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: ie,
	onEntering: ie,
	onEntered: ie,
	onExit: ie,
	onExiting: ie,
	onExited: ie
}, re.UNMOUNTED = z, re.EXITED = B, re.ENTERING = ee, re.ENTERED = te, re.EXITING = ne;
//#endregion
//#region node_modules/dom-helpers/esm/canUseDOM.js
var ae = !!(typeof window < "u" && window.document && window.document.createElement), oe = !1, se = !1;
try {
	var ce = {
		get passive() {
			return oe = !0;
		},
		get once() {
			return se = oe = !0;
		}
	};
	ae && (window.addEventListener("test", ce, ce), window.removeEventListener("test", ce, !0));
} catch {}
function le(e, t, n, r) {
	if (r && typeof r != "boolean" && !se) {
		var i = r.once, a = r.capture, o = n;
		!se && i && (o = n.__once || function e(r) {
			this.removeEventListener(t, e, a), n.call(this, r);
		}, n.__once = o), e.addEventListener(t, o, oe ? r : a);
	}
	e.addEventListener(t, n, r);
}
//#endregion
//#region node_modules/dom-helpers/esm/removeEventListener.js
function ue(e, t, n, r) {
	var i = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
//#endregion
//#region node_modules/dom-helpers/esm/listen.js
function de(e, t, n, r) {
	return le(e, t, n, r), function() {
		ue(e, t, n, r);
	};
}
//#endregion
//#region node_modules/dom-helpers/esm/triggerEvent.js
function fe(e, t, n, r) {
	if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
		var i = document.createEvent("HTMLEvents");
		i.initEvent(t, n, r), e.dispatchEvent(i);
	}
}
//#endregion
//#region node_modules/dom-helpers/esm/transitionEnd.js
function pe(e) {
	var t = P(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function me(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1, i = setTimeout(function() {
		r || fe(e, "transitionend", !0);
	}, t + n), a = de(e, "transitionend", function() {
		r = !0;
	}, { once: !0 });
	return function() {
		clearTimeout(i), a();
	};
}
function he(e, t, n, r) {
	n ??= pe(e) || 0;
	var i = me(e, n, r), a = de(e, "transitionend", t);
	return function() {
		i(), a();
	};
}
//#endregion
//#region node_modules/react-bootstrap/esm/transitionEndListener.js
function ge(e, t) {
	var n = P(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function _e(e, t) {
	var n = he(e, function(r) {
		r.target === e && (n(), t(r));
	}, ge(e, "transitionDuration") + ge(e, "transitionDelay"));
}
//#endregion
//#region node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function ve(e) {
	e.offsetHeight;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useCommittedRef.js
function ye(e) {
	let t = (0, h.useRef)(e);
	return (0, h.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useEventCallback.js
function be(e) {
	let t = ye(e);
	return (0, h.useCallback)(function(...e) {
		return t.current && t.current(...e);
	}, [t]);
}
//#endregion
//#region node_modules/react-bootstrap/esm/Fade.js
var xe = ["className", "children"], Se, Ce = {
	in: !1,
	timeout: 300,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1
}, we = (Se = {}, Se[ee] = "show", Se[te] = "show", Se), Te = /* @__PURE__ */ h.forwardRef(function(e, t) {
	var n = e.className, r = e.children, i = o(e, xe), a = (0, h.useCallback)(function(e) {
		ve(e), i.onEnter && i.onEnter(e);
	}, [i]);
	return /* @__PURE__ */ h.createElement(re, m({
		ref: t,
		addEndListener: _e
	}, i, { onEnter: a }), function(e, t) {
		return /* @__PURE__ */ h.cloneElement(r, m({}, t, { className: (0, g.default)("fade", n, r.props.className, we[e]) }));
	});
});
Te.defaultProps = Ce, Te.displayName = "Fade";
//#endregion
//#region node_modules/dom-helpers/esm/camelize.js
var Ee = /-(.)/g;
function De(e) {
	return e.replace(Ee, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Oe = [
	"className",
	"bsPrefix",
	"as"
], ke = function(e) {
	return e[0].toUpperCase() + De(e).slice(1);
};
function Ae(e, n) {
	var r = n === void 0 ? {} : n, i = r.displayName, a = i === void 0 ? ke(e) : i, s = r.Component, c = r.defaultProps, l = /* @__PURE__ */ h.forwardRef(function(n, r) {
		var i = n.className, a = n.bsPrefix, c = n.as, l = c === void 0 ? s || "div" : c, u = o(n, Oe), d = t(a, e);
		return /* @__PURE__ */ h.createElement(l, m({
			ref: r,
			className: (0, g.default)(i, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = a, l;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useMounted.js
function je() {
	let e = (0, h.useRef)(!0), t = (0, h.useRef)(() => e.current);
	return (0, h.useEffect)(() => (e.current = !0, () => {
		e.current = !1;
	}), []), t.current;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useUpdatedRef.js
function Me(e) {
	let t = (0, h.useRef)(e);
	return t.current = e, t;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useWillUnmount.js
function Ne(e) {
	let t = Me(e);
	(0, h.useEffect)(() => () => t.current(), []);
}
//#endregion
//#region node_modules/@restart/hooks/esm/useTimeout.js
var Pe = 2 ** 31 - 1;
function Fe(e, t, n) {
	let r = n - Date.now();
	e.current = r <= Pe ? setTimeout(t, r) : setTimeout(() => Fe(e, t, n), Pe);
}
function Ie() {
	let e = je(), t = (0, h.useRef)();
	return Ne(() => clearTimeout(t.current)), (0, h.useMemo)(() => {
		let n = () => clearTimeout(t.current);
		function r(r, i = 0) {
			e() && (n(), i <= Pe ? t.current = setTimeout(r, i) : Fe(t, r, Date.now() + i));
		}
		return {
			set: r,
			clear: n,
			handleRef: t
		};
	}, []);
}
//#endregion
//#region node_modules/@restart/hooks/esm/useCallbackRef.js
function Le() {
	return (0, h.useState)(null);
}
//#endregion
//#region node_modules/@restart/hooks/esm/useSafeState.js
function Re(e) {
	let t = je();
	return [e[0], (0, h.useCallback)((n) => {
		if (t()) return e[1](n);
	}, [t, e[1]])];
}
var ze = "bottom", Be = "right", Ve = "left", He = "auto", Ue = [
	"top",
	ze,
	Be,
	Ve
], We = "start", Ge = "clippingParents", Ke = "viewport", qe = "popper", Je = "reference", Ye = /* @__PURE__ */ Ue.reduce(function(e, t) {
	return e.concat([t + "-" + We, t + "-end"]);
}, []), Xe = /* @__PURE__ */ [].concat(Ue, [He]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + We,
		t + "-end"
	]);
}, []), Ze = [
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
//#region node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function Qe(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function V(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function $e(e) {
	return e instanceof V(e).Element || e instanceof Element;
}
function et(e) {
	return e instanceof V(e).HTMLElement || e instanceof HTMLElement;
}
function tt(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof V(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/math.js
var nt = Math.max, rt = Math.min, it = Math.round;
//#endregion
//#region node_modules/@popperjs/core/lib/utils/userAgent.js
function at() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function ot() {
	return !/^((?!chrome|android).)*safari/i.test(at());
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function st(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && et(e) && (i = e.offsetWidth > 0 && it(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && it(r.height) / e.offsetHeight || 1);
	var o = ($e(e) ? V(e) : window).visualViewport, s = !ot() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
//#region node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function ct(e) {
	var t = st(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/contains.js
function lt(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && tt(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function ut(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function dt(e) {
	return V(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function ft(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(ut(e)) >= 0;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function pt(e) {
	return (($e(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function mt(e) {
	return ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (tt(e) ? e.host : null) || pt(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function ht(e) {
	return !et(e) || dt(e).position === "fixed" ? null : e.offsetParent;
}
function gt(e) {
	var t = /firefox/i.test(at());
	if (/Trident/i.test(at()) && et(e) && dt(e).position === "fixed") return null;
	var n = mt(e);
	for (tt(n) && (n = n.host); et(n) && ["html", "body"].indexOf(ut(n)) < 0;) {
		var r = dt(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function _t(e) {
	for (var t = V(e), n = ht(e); n && ft(n) && dt(n).position === "static";) n = ht(n);
	return n && (ut(n) === "html" || ut(n) === "body" && dt(n).position === "static") ? t : n || gt(e) || t;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function vt(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/within.js
function yt(e, t, n) {
	return nt(e, rt(t, n));
}
function bt(e, t, n) {
	var r = yt(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function xt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function St(e) {
	return Object.assign({}, xt(), e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function Ct(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/arrow.js
var wt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, St(typeof e == "number" ? Ct(e, Ue) : e);
};
function Tt(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Qe(n.placement), c = vt(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = wt(i.padding, n), d = ct(a), f = c === "y" ? "top" : Ve, p = c === "y" ? ze : Be, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = _t(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = yt(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function Et(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || lt(t.elements.popper, r) && (t.elements.arrow = r));
}
var Dt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Tt,
	effect: Et,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getVariation.js
function Ot(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var kt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function At(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: it(n * i) / i || 0,
		y: it(r * i) / i || 0
	};
}
function jt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = Ve, b = "top", x = window;
	if (l) {
		var S = _t(n), C = "clientHeight", w = "clientWidth";
		if (S === V(n) && (S = pt(n), dt(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = ze;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = Be;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && kt), O = u === !0 ? At({
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
function Mt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
		placement: Qe(t.placement),
		variation: Ot(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, jt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, jt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Nt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Mt,
	data: {}
}, Pt = { passive: !0 };
function Ft(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = V(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, Pt);
	}), s && c.addEventListener("resize", n.update, Pt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, Pt);
		}), s && c.removeEventListener("resize", n.update, Pt);
	};
}
var It = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Ft,
	data: {}
}, Lt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Rt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return Lt[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var zt = {
	start: "end",
	end: "start"
};
function Bt(e) {
	return e.replace(/start|end/g, function(e) {
		return zt[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Vt(e) {
	var t = V(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function Ht(e) {
	return st(pt(e)).left + Vt(e).scrollLeft;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function Ut(e, t) {
	var n = V(e), r = pt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = ot();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Ht(e),
		y: c
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Wt(e) {
	var t = pt(e), n = Vt(e), r = e.ownerDocument?.body, i = nt(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = nt(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Ht(e), s = -n.scrollTop;
	return dt(r || t).direction === "rtl" && (o += nt(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function Gt(e) {
	var t = dt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Kt(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : et(e) && Gt(e) ? e : Kt(mt(e));
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function qt(e, t) {
	t === void 0 && (t = []);
	var n = Kt(e), r = n === e.ownerDocument?.body, i = V(n), a = r ? [i].concat(i.visualViewport || [], Gt(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(qt(mt(a)));
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function Jt(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function Yt(e, t) {
	var n = st(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Xt(e, t, n) {
	return t === "viewport" ? Jt(Ut(e, n)) : $e(t) ? Yt(t, n) : Jt(Wt(pt(e)));
}
function Zt(e) {
	var t = qt(mt(e)), n = ["absolute", "fixed"].indexOf(dt(e).position) >= 0 && et(e) ? _t(e) : e;
	return $e(n) ? t.filter(function(e) {
		return $e(e) && lt(e, n) && ut(e) !== "body";
	}) : [];
}
function Qt(e, t, n, r) {
	var i = t === "clippingParents" ? Zt(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Xt(e, n, r);
		return t.top = nt(i.top, t.top), t.right = rt(i.right, t.right), t.bottom = rt(i.bottom, t.bottom), t.left = nt(i.left, t.left), t;
	}, Xt(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeOffsets.js
function $t(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Qe(r) : null, a = r ? Ot(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case ze:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case Be:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case Ve:
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
	var l = i ? vt(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case We:
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
//#region node_modules/@popperjs/core/lib/utils/detectOverflow.js
function en(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? Ge : s, l = n.rootBoundary, u = l === void 0 ? Ke : l, d = n.elementContext, f = d === void 0 ? qe : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = St(typeof g == "number" ? Ct(g, Ue) : g), v = f === "popper" ? Je : qe, y = e.rects.popper, b = e.elements[m ? v : f], x = Qt($e(b) ? b : b.contextElement || pt(e.elements.popper), c, u, o), S = st(e.elements.reference), C = $t({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = Jt(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
//#region node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function tn(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Xe : c, u = Ot(r), d = u ? s ? Ye : Ye.filter(function(e) {
		return Ot(e) === u;
	}) : Ue, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = en(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Qe(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/flip.js
function nn(e) {
	if (Qe(e) === "auto") return [];
	var t = Rt(e);
	return [
		Bt(e),
		t,
		Bt(t)
	];
}
function rn(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Qe(g) === g, v = c || (_ || !m ? [Rt(g)] : nn(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Qe(n) === "auto" ? tn(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Qe(E), O = Ot(E) === We, k = ["top", ze].indexOf(D) >= 0, A = k ? "width" : "height", j = en(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? Be : Ve : O ? ze : "top";
			b[A] > x[A] && (M = Rt(M));
			var N = Rt(M), P = [];
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
var an = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: rn,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/hide.js
function on(e, t, n) {
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
function sn(e) {
	return [
		"top",
		Be,
		ze,
		Ve
	].some(function(t) {
		return e[t] >= 0;
	});
}
function cn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = en(t, { elementContext: "reference" }), s = en(t, { altBoundary: !0 }), c = on(o, r), l = on(s, i, a), u = sn(c), d = sn(l);
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
var ln = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: cn
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/offset.js
function un(e, t, n) {
	var r = Qe(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function dn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Xe.reduce(function(e, n) {
		return e[n] = un(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var fn = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: dn
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function pn(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = $t({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var mn = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: pn,
	data: {}
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getAltAxis.js
function hn(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function gn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = en(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Qe(t.placement), v = Ot(t.placement), y = !v, b = vt(_), x = hn(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : Ve, A = b === "y" ? ze : Be, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === "start" ? C[j] : w[j], L = v === "start" ? -w[j] : -C[j], R = t.elements.arrow, z = p && R ? ct(R) : {
				width: 0,
				height: 0
			}, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xt(), ee = B[k], te = B[A], ne = yt(0, C[j], z[j]), re = y ? C[j] / 2 - F - ne - ee - E.mainAxis : I - ne - ee - E.mainAxis, ie = y ? -C[j] / 2 + F + ne + te + E.mainAxis : L + ne + te + E.mainAxis, ae = t.elements.arrow && _t(t.elements.arrow), oe = ae ? b === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, se = D?.[b] ?? 0, ce = M + re - se - oe, le = M + ie - se, ue = yt(p ? rt(N, ce) : N, M, p ? nt(P, le) : P);
			S[b] = ue, O[b] = ue - M;
		}
		if (s) {
			var de = b === "x" ? "top" : Ve, fe = b === "x" ? ze : Be, pe = S[x], me = x === "y" ? "height" : "width", he = pe + g[de], ge = pe - g[fe], _e = ["top", Ve].indexOf(_) !== -1, ve = D?.[x] ?? 0, ye = _e ? he : pe - C[me] - w[me] - ve + E.altAxis, be = _e ? pe + C[me] + w[me] - ve - E.altAxis : ge, xe = p && _e ? bt(ye, pe, be) : yt(p ? ye : he, pe, p ? be : ge);
			S[x] = xe, O[x] = xe - pe;
		}
		t.modifiersData[r] = O;
	}
}
var _n = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: gn,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function vn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function yn(e) {
	return e === V(e) || !et(e) ? Vt(e) : vn(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function bn(e) {
	var t = e.getBoundingClientRect(), n = it(t.width) / e.offsetWidth || 1, r = it(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function xn(e, t, n) {
	n === void 0 && (n = !1);
	var r = et(t), i = et(t) && bn(t), a = pt(t), o = st(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((ut(t) !== "body" || Gt(a)) && (s = yn(t)), et(t) ? (c = st(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ht(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/orderModifiers.js
function Sn(e) {
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
function Cn(e) {
	var t = Sn(e);
	return Ze.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/debounce.js
function wn(e) {
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
//#region node_modules/@popperjs/core/lib/utils/mergeByName.js
function Tn(e) {
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
//#region node_modules/@popperjs/core/lib/createPopper.js
var En = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Dn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function On(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? En : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, En, a),
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
					reference: $e(e) ? qt(e) : e.contextElement ? qt(e.contextElement) : [],
					popper: qt(t)
				};
				var s = Cn(Tn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (Dn(t, n)) {
						i.rects = {
							reference: xn(t, _t(n), i.options.strategy === "fixed"),
							popper: ct(n)
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
			update: wn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!Dn(e, t)) return c;
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
//#region node_modules/react-overlays/esm/popper.js
var kn = On({ defaultModifiers: [
	ln,
	mn,
	Nt,
	It,
	fn,
	an,
	_n,
	Dt
] }), An = function(e) {
	return {
		position: e,
		top: "0",
		left: "0",
		opacity: "0",
		pointerEvents: "none"
	};
}, jn = {
	name: "applyStyles",
	enabled: !1
}, Mn = {
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
}, Nn = [];
function Pn(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.enabled, a = i === void 0 ? !0 : i, s = r.placement, c = s === void 0 ? "bottom" : s, l = r.strategy, u = l === void 0 ? "absolute" : l, d = r.modifiers, f = d === void 0 ? Nn : d, p = o(r, [
		"enabled",
		"placement",
		"strategy",
		"modifiers"
	]), g = (0, h.useRef)(), _ = (0, h.useCallback)(function() {
		var e;
		(e = g.current) == null || e.update();
	}, []), v = (0, h.useCallback)(function() {
		var e;
		(e = g.current) == null || e.forceUpdate();
	}, []), y = Re((0, h.useState)({
		placement: c,
		update: _,
		forceUpdate: v,
		attributes: {},
		styles: {
			popper: An(u),
			arrow: {}
		}
	})), b = y[0], x = y[1], S = (0, h.useMemo)(function() {
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
	return (0, h.useEffect)(function() {
		!g.current || !a || g.current.setOptions({
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [S, jn])
		});
	}, [
		u,
		c,
		S,
		a
	]), (0, h.useEffect)(function() {
		if (!(!a || e == null || t == null)) return g.current = kn(e, t, m({}, p, {
			placement: c,
			strategy: u,
			modifiers: [].concat(f, [Mn, S])
		})), function() {
			g.current != null && (g.current.destroy(), g.current = void 0, x(function(e) {
				return m({}, e, {
					attributes: {},
					styles: { popper: An(u) }
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
//#region node_modules/dom-helpers/esm/contains.js
function Fn(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
//#endregion
//#region node_modules/warning/warning.js
var In = /* @__PURE__ */ s(((e, t) => {
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
//#region node_modules/react-overlays/esm/safeFindDOMNode.js
function Ln(e) {
	return e && "setState" in e ? R.findDOMNode(e) : e ?? null;
}
//#endregion
//#region node_modules/react-overlays/esm/ownerDocument.js
var Rn = (function(e) {
	return T(Ln(e));
}), zn = /* @__PURE__ */ i(In()), Bn = 27, Vn = function() {};
function Hn(e) {
	return e.button === 0;
}
function Un(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Wn = function(e) {
	return e && ("current" in e ? e.current : e);
};
function Gn(e, t, n) {
	var r = n === void 0 ? {} : n, i = r.disabled, a = r.clickTrigger, o = a === void 0 ? "click" : a, s = (0, h.useRef)(!1), c = t || Vn, l = (0, h.useCallback)(function(t) {
		var n = Wn(e);
		(0, zn.default)(!!n, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !n || Un(t) || !Hn(t) || !!Fn(n, (t.composedPath == null ? void 0 : t.composedPath()[0]) ?? t.target);
	}, [e]), u = be(function(e) {
		s.current || c(e);
	}), d = be(function(e) {
		e.keyCode === Bn && c(e);
	});
	(0, h.useEffect)(function() {
		if (!(i || e == null)) {
			var t = window.event, n = Rn(Wn(e)), r = de(n, o, l, !0), a = de(n, o, function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				u(e);
			}), s = de(n, "keyup", function(e) {
				if (e === t) {
					t = void 0;
					return;
				}
				d(e);
			}), c = [];
			return "ontouchstart" in n.documentElement && (c = [].slice.call(n.body.children).map(function(e) {
				return de(e, "mousemove", Vn);
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
//#region node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js
function Kn(e) {
	var t = {};
	return Array.isArray(e) ? (e?.forEach(function(e) {
		t[e.name] = e;
	}), t) : e || t;
}
function qn(e) {
	return e === void 0 && (e = {}), Array.isArray(e) ? e : Object.keys(e).map(function(t) {
		return e[t].name = t, e[t];
	});
}
function Jn(e) {
	var t = e.enabled, n = e.enableEvents, r = e.placement, i = e.flip, a = e.offset, o = e.fixed, s = e.containerPadding, c = e.arrowElement, l = e.popperConfig, u = l === void 0 ? {} : l, d = Kn(u.modifiers);
	return m({}, u, {
		placement: r,
		enabled: t,
		strategy: o ? "fixed" : u.strategy,
		modifiers: qn(m({}, d, {
			eventListeners: { enabled: n },
			preventOverflow: m({}, d.preventOverflow, { options: s ? m({ padding: s }, d.preventOverflow?.options) : d.preventOverflow?.options }),
			offset: { options: m({ offset: a }, d.offset?.options) },
			arrow: m({}, d.arrow, {
				enabled: !!c,
				options: m({}, d.arrow?.options, { element: c })
			}),
			flip: m({ enabled: !!i }, d.flip)
		}))
	});
}
//#endregion
//#region node_modules/@restart/hooks/esm/useMergedRefs.js
var Yn = (e) => !e || typeof e == "function" ? e : (t) => {
	e.current = t;
};
function Xn(e, t) {
	let n = Yn(e), r = Yn(t);
	return (e) => {
		n && n(e), r && r(e);
	};
}
function Zn(e, t) {
	return (0, h.useMemo)(() => Xn(e, t), [e, t]);
}
//#endregion
//#region node_modules/dom-helpers/esm/hasClass.js
function Qn(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/react-bootstrap/esm/usePopperMarginModifiers.js
function $n(e) {
	var t = window.getComputedStyle(e);
	return {
		top: parseFloat(t.marginTop) || 0,
		right: parseFloat(t.marginRight) || 0,
		bottom: parseFloat(t.marginBottom) || 0,
		left: parseFloat(t.marginLeft) || 0
	};
}
function er() {
	var e = (0, h.useRef)(null), n = (0, h.useRef)(null), r = (0, h.useRef)(null), i = t(void 0, "popover"), a = t(void 0, "dropdown-menu");
	return [(0, h.useCallback)(function(t) {
		!t || !(Qn(t, i) || Qn(t, a)) || (n.current = $n(t), t.style.margin = "0", e.current = t);
	}, [i, a]), [
		(0, h.useMemo)(function() {
			return {
				name: "offset",
				options: { offset: function(e) {
					var t = e.placement;
					if (!n.current) return [0, 0];
					var r = n.current, i = r.top, a = r.left, o = r.bottom, s = r.right;
					switch (t.split("-")[0]) {
						case "top": return [0, o];
						case "left": return [0, s];
						case "bottom": return [0, i];
						case "right": return [0, a];
						default: return [0, 0];
					}
				} }
			};
		}, [n]),
		(0, h.useMemo)(function() {
			return {
				name: "arrow",
				options: { padding: function() {
					if (!r.current) return 0;
					var e = r.current, t = e.top, n = e.right, i = t || n;
					return {
						top: i,
						left: i,
						right: i,
						bottom: i
					};
				} }
			};
		}, [r]),
		(0, h.useMemo)(function() {
			return {
				name: "popoverArrowMargins",
				enabled: !0,
				phase: "main",
				fn: function() {},
				requiresIfExists: ["arrow"],
				effect: function(t) {
					var n = t.state;
					if (!(!e.current || !n.elements.arrow || !Qn(e.current, i))) {
						if (n.modifiersData["arrow#persistent"]) {
							var a = $n(n.elements.arrow), o = a.top, s = a.right, c = o || s;
							n.modifiersData["arrow#persistent"].padding = {
								top: c,
								left: c,
								right: c,
								bottom: c
							};
						} else r.current = $n(n.elements.arrow);
						return n.elements.arrow.style.margin = "0", function() {
							n.elements.arrow && (n.elements.arrow.style.margin = "");
						};
					}
				}
			};
		}, [i])
	]];
}
//#endregion
//#region node_modules/prop-types-extra/lib/isRequiredForA11y.js
var tr = /* @__PURE__ */ s(((e, t) => {
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
})), nr = /* @__PURE__ */ s(((e, t) => {
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
})), rr = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(nr());
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
})), H = /* @__PURE__ */ i(f()), ir = [
	"as",
	"className",
	"type",
	"tooltip"
], ar = {
	type: H.default.string,
	tooltip: H.default.bool,
	as: H.default.elementType
}, or = /* @__PURE__ */ h.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, s = a === void 0 ? "valid" : a, c = e.tooltip, l = c === void 0 ? !1 : c, u = o(e, ir);
	return /* @__PURE__ */ h.createElement(r, m({}, u, {
		ref: t,
		className: (0, g.default)(i, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
or.displayName = "Feedback", or.propTypes = ar;
//#endregion
//#region node_modules/react-bootstrap/esm/FormContext.js
var sr = /* @__PURE__ */ h.createContext({ controlId: void 0 }), cr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], lr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.type, l = c === void 0 ? "checkbox" : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, _ = e.isStatic, v = e.as, y = v === void 0 ? "input" : v, b = o(e, cr), x = (0, h.useContext)(sr), S = x.controlId, C = x.custom ? [a, "custom-control-input"] : [i, "form-check-input"], w = C[0], T = C[1];
	return i = t(w, T), /* @__PURE__ */ h.createElement(y, m({}, b, {
		ref: n,
		type: l,
		id: r || S,
		className: (0, g.default)(s, i, d && "is-valid", p && "is-invalid", _ && "position-static")
	}));
});
lr.displayName = "FormCheckInput";
//#endregion
//#region node_modules/react-bootstrap/esm/FormCheckLabel.js
var ur = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], dr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = o(e, ur), l = (0, h.useContext)(sr), u = l.controlId, d = l.custom ? [i, "custom-control-label"] : [r, "form-check-label"], f = d[0], p = d[1];
	return r = t(f, p), /* @__PURE__ */ h.createElement("label", m({}, c, {
		ref: n,
		htmlFor: s || u,
		className: (0, g.default)(a, r)
	}));
});
dr.displayName = "FormCheckLabel", rr();
var fr = [
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
], pr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.inline, c = s === void 0 ? !1 : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, _ = p === void 0 ? !1 : p, v = e.feedbackTooltip, y = v === void 0 ? !1 : v, b = e.feedback, x = e.className, S = e.style, C = e.title, w = C === void 0 ? "" : C, T = e.type, E = T === void 0 ? "checkbox" : T, D = e.label, O = e.children, k = e.custom, A = e.as, j = A === void 0 ? "input" : A, M = o(e, fr), N = E === "switch" ? !0 : k, P = N ? [a, "custom-control"] : [i, "form-check"], F = P[0], I = P[1];
	i = t(F, I);
	var L = (0, h.useContext)(sr).controlId, R = (0, h.useMemo)(function() {
		return {
			controlId: r || L,
			custom: N
		};
	}, [
		L,
		N,
		r
	]), z = N || D != null && D !== !1 && !O, B = /* @__PURE__ */ h.createElement(lr, m({}, M, {
		type: E === "switch" ? "checkbox" : E,
		ref: n,
		isValid: f,
		isInvalid: _,
		isStatic: !z,
		disabled: u,
		as: j
	}));
	return /* @__PURE__ */ h.createElement(sr.Provider, { value: R }, /* @__PURE__ */ h.createElement("div", {
		style: S,
		className: (0, g.default)(x, i, N && "custom-" + E, c && i + "-inline")
	}, O || /* @__PURE__ */ h.createElement(h.Fragment, null, B, z && /* @__PURE__ */ h.createElement(dr, { title: w }, D), (f || _) && /* @__PURE__ */ h.createElement(or, {
		type: f ? "valid" : "invalid",
		tooltip: y
	}, b))));
});
pr.displayName = "FormCheck", pr.Input = lr, pr.Label = dr;
//#endregion
//#region node_modules/react-bootstrap/esm/FormFileInput.js
var mr = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], hr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.isValid, l = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = o(e, mr), _ = (0, h.useContext)(sr), v = _.controlId, y = _.custom, b = "file", x = y ? [a, "custom-file-input"] : [i, "form-control-file"], S = x[0], C = x[1];
	return i = t(S, C), /* @__PURE__ */ h.createElement(f, m({}, p, {
		ref: n,
		id: r || v,
		type: b,
		lang: u,
		className: (0, g.default)(s, i, c && "is-valid", l && "is-invalid")
	}));
});
hr.displayName = "FormFileInput";
//#endregion
//#region node_modules/react-bootstrap/esm/FormFileLabel.js
var gr = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], _r = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = o(e, gr), l = (0, h.useContext)(sr), u = l.controlId, d = l.custom ? [i, "custom-file-label"] : [r, "form-file-label"], f = d[0], p = d[1];
	return r = t(f, p), /* @__PURE__ */ h.createElement("label", m({}, c, {
		ref: n,
		htmlFor: s || u,
		className: (0, g.default)(a, r),
		"data-browse": c["data-browse"]
	}));
});
_r.displayName = "FormFileLabel";
//#endregion
//#region node_modules/react-bootstrap/esm/FormFile.js
var vr = [
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
], yr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, _ = p === void 0 ? !1 : p, v = e.feedback, y = e.className, b = e.style, x = e.label, S = e.children, C = e.custom, w = e.lang, T = e["data-browse"], E = e.as, D = E === void 0 ? "div" : E, O = e.inputAs, k = O === void 0 ? "input" : O, A = o(e, vr), j = C ? [a, "custom"] : [i, "form-file"], M = j[0], N = j[1];
	i = t(M, N);
	var P = "file", F = (0, h.useContext)(sr).controlId, I = (0, h.useMemo)(function() {
		return {
			controlId: r || F,
			custom: C
		};
	}, [
		F,
		C,
		r
	]), L = x != null && x !== !1 && !S, R = /* @__PURE__ */ h.createElement(hr, m({}, A, {
		ref: n,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: k,
		lang: w
	}));
	return /* @__PURE__ */ h.createElement(sr.Provider, { value: I }, /* @__PURE__ */ h.createElement(D, {
		style: b,
		className: (0, g.default)(y, i, C && "custom-" + P)
	}, S || /* @__PURE__ */ h.createElement(h.Fragment, null, C ? /* @__PURE__ */ h.createElement(h.Fragment, null, R, L && /* @__PURE__ */ h.createElement(_r, { "data-browse": T }, x)) : /* @__PURE__ */ h.createElement(h.Fragment, null, L && /* @__PURE__ */ h.createElement(_r, null, x), R), (u || f) && /* @__PURE__ */ h.createElement(or, {
		type: u ? "valid" : "invalid",
		tooltip: _
	}, v))));
});
yr.displayName = "FormFile", yr.Input = hr, yr.Label = _r;
//#endregion
//#region node_modules/react-bootstrap/esm/FormControl.js
var br = [
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
], xr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.type, s = e.size, c = e.htmlSize, l = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, _ = p === void 0 ? !1 : p, v = e.plaintext, y = e.readOnly, b = e.custom, x = e.as, S = x === void 0 ? "input" : x, C = o(e, br), w = (0, h.useContext)(sr).controlId, T = b ? [i, "custom"] : [r, "form-control"], E = T[0], D = T[1];
	r = t(E, D);
	var O;
	if (v) {
		var k;
		O = (k = {}, k[r + "-plaintext"] = !0, k);
	} else if (a === "file") {
		var A;
		O = (A = {}, A[r + "-file"] = !0, A);
	} else if (a === "range") {
		var j;
		O = (j = {}, j[r + "-range"] = !0, j);
	} else if (S === "select" && b) {
		var M;
		O = (M = {}, M[r + "-select"] = !0, M[r + "-select-" + s] = s, M);
	} else {
		var N;
		O = (N = {}, N[r] = !0, N[r + "-" + s] = s, N);
	}
	return /* @__PURE__ */ h.createElement(S, m({}, C, {
		type: a,
		size: c,
		ref: n,
		readOnly: y,
		id: l || w,
		className: (0, g.default)(u, O, f && "is-valid", _ && "is-invalid")
	}));
});
xr.displayName = "FormControl";
var Sr = Object.assign(xr, { Feedback: or }), Cr = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], wr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.controlId, c = e.as, l = c === void 0 ? "div" : c, u = o(e, Cr);
	r = t(r, "form-group");
	var d = (0, h.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ h.createElement(sr.Provider, { value: d }, /* @__PURE__ */ h.createElement(l, m({}, u, {
		ref: n,
		className: (0, g.default)(i, r)
	}), a));
});
wr.displayName = "FormGroup";
//#endregion
//#region node_modules/react-bootstrap/esm/FormLabel.js
var Tr = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Er = {
	column: !1,
	srOnly: !1
}, Dr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.as, i = r === void 0 ? "label" : r, a = e.bsPrefix, s = e.column, c = e.srOnly, u = e.className, d = e.htmlFor, f = o(e, Tr), p = (0, h.useContext)(sr).controlId;
	a = t(a, "form-label");
	var _ = "col-form-label";
	typeof s == "string" && (_ = _ + " " + _ + "-" + s);
	var v = (0, g.default)(u, a, c && "sr-only", s && _);
	return d ||= p, s ? /* @__PURE__ */ h.createElement(l, m({
		ref: n,
		as: "label",
		className: v,
		htmlFor: d
	}, f)) : /* @__PURE__ */ h.createElement(i, m({
		ref: n,
		className: v,
		htmlFor: d
	}, f));
});
Dr.displayName = "FormLabel", Dr.defaultProps = Er;
//#endregion
//#region node_modules/react-bootstrap/esm/FormText.js
var Or = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], kr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.className, a = e.as, s = a === void 0 ? "small" : a, c = e.muted, l = o(e, Or);
	return r = t(r, "form-text"), /* @__PURE__ */ h.createElement(s, m({}, l, {
		ref: n,
		className: (0, g.default)(i, r, c && "text-muted")
	}));
});
kr.displayName = "FormText";
//#endregion
//#region node_modules/react-bootstrap/esm/Switch.js
var Ar = /* @__PURE__ */ h.forwardRef(function(e, t) {
	return /* @__PURE__ */ h.createElement(pr, m({}, e, {
		ref: t,
		type: "switch"
	}));
});
Ar.displayName = "Switch", Ar.Input = pr.Input, Ar.Label = pr.Label;
//#endregion
//#region node_modules/react-bootstrap/esm/Form.js
var jr = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Mr = Ae("form-row"), Nr = { inline: !1 }, Pr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.inline, a = e.className, s = e.validated, c = e.as, l = c === void 0 ? "form" : c, u = o(e, jr);
	return r = t(r, "form"), /* @__PURE__ */ h.createElement(l, m({}, u, {
		ref: n,
		className: (0, g.default)(a, s && "was-validated", i && r + "-inline")
	}));
});
Pr.displayName = "Form", Pr.defaultProps = Nr, Pr.Row = Mr, Pr.Group = wr, Pr.Control = Sr, Pr.Check = pr, Pr.File = yr, Pr.Switch = Ar, Pr.Label = Dr, Pr.Text = kr;
//#endregion
//#region node_modules/react-overlays/esm/useWaitForDOMRef.js
var Fr = function(e) {
	var t;
	return typeof document > "u" ? null : e == null ? T().body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), (t = e) != null && t.nodeType && e || null);
};
function Ir(e, t) {
	var n = (0, h.useState)(function() {
		return Fr(e);
	}), r = n[0], i = n[1];
	if (!r) {
		var a = Fr(e);
		a && i(a);
	}
	return (0, h.useEffect)(function() {
		t && r && t(r);
	}, [t, r]), (0, h.useEffect)(function() {
		var t = Fr(e);
		t !== r && i(t);
	}, [e, r]), r;
}
//#endregion
//#region node_modules/react-overlays/esm/Overlay.js
var Lr = /* @__PURE__ */ h.forwardRef(function(e, t) {
	var n = e.flip, r = e.offset, i = e.placement, a = e.containerPadding, s = a === void 0 ? 5 : a, c = e.popperConfig, l = c === void 0 ? {} : c, u = e.transition, d = Le(), f = d[0], p = d[1], g = Le(), _ = g[0], v = g[1], y = Zn(p, t), b = Ir(e.container), x = Ir(e.target), S = (0, h.useState)(!e.show), C = S[0], w = S[1], T = Pn(x, f, Jn({
		placement: i,
		enableEvents: !!e.show,
		containerPadding: s || 5,
		flip: n,
		offset: r,
		arrowElement: _,
		popperConfig: l
	})), E = T.styles, D = T.attributes, O = o(T, ["styles", "attributes"]);
	e.show ? C && w(!1) : !e.transition && !C && w(!0);
	var k = function() {
		w(!0), e.onExited && e.onExited.apply(e, arguments);
	}, A = e.show || u && !C;
	if (Gn(f, e.onHide, {
		disabled: !e.rootClose || e.rootCloseDisabled,
		clickTrigger: e.rootCloseEvent
	}), !A) return null;
	var j = e.children(m({}, O, {
		show: !!e.show,
		props: m({}, D.popper, {
			style: E.popper,
			ref: y
		}),
		arrowProps: m({}, D.arrow, {
			style: E.arrow,
			ref: v
		})
	}));
	if (u) {
		var M = e.onExit, N = e.onExiting, P = e.onEnter, F = e.onEntering, I = e.onEntered;
		j = /* @__PURE__ */ h.createElement(u, {
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
	return b ? /* @__PURE__ */ R.createPortal(j, b) : null;
});
Lr.displayName = "Overlay", Lr.propTypes = {
	show: H.default.bool,
	placement: H.default.oneOf(Xe),
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
//#region node_modules/react-bootstrap/esm/Overlay.js
var Rr = [
	"children",
	"transition",
	"popperConfig"
], zr = [
	"props",
	"arrowProps",
	"show",
	"update",
	"forceUpdate",
	"placement",
	"state"
], Br = {
	transition: Te,
	rootClose: !1,
	show: !1,
	placement: "top"
};
function Vr(e, t) {
	var n = e.ref, r = t.ref;
	e.ref = n.__wrapped ||= function(e) {
		return n(Ln(e));
	}, t.ref = r.__wrapped ||= function(e) {
		return r(Ln(e));
	};
}
function Hr(e) {
	var t = e.children, n = e.transition, r = e.popperConfig, i = r === void 0 ? {} : r, a = o(e, Rr), s = (0, h.useRef)({}), c = er(), l = c[0], u = c[1], d = n === !0 ? Te : n || null;
	return /* @__PURE__ */ h.createElement(Lr, m({}, a, {
		ref: l,
		popperConfig: m({}, i, { modifiers: u.concat(i.modifiers || []) }),
		transition: d
	}), function(e) {
		var r = e.props, i = e.arrowProps, a = e.show, c = e.update;
		e.forceUpdate;
		var l = e.placement, u = e.state, d = o(e, zr);
		Vr(r, i);
		var f = Object.assign(s.current, {
			state: u,
			scheduleUpdate: c,
			placement: l,
			outOfBoundaries: u?.modifiersData.hide?.isReferenceHidden || !1
		});
		return typeof t == "function" ? t(m({}, d, r, {
			placement: l,
			show: a
		}, !n && a && { className: "show" }, {
			popper: f,
			arrowProps: i
		})) : /* @__PURE__ */ h.cloneElement(t, m({}, d, r, {
			placement: l,
			arrowProps: i,
			popper: f,
			className: (0, g.default)(t.props.className, !n && a && "show"),
			style: m({}, t.props.style, r.style)
		}));
	});
}
Hr.defaultProps = Br;
//#endregion
//#region node_modules/react-bootstrap/esm/OverlayTrigger.js
var Ur = [
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
], Wr = /* @__PURE__ */ function(e) {
	x(t, e);
	function t() {
		return e.apply(this, arguments) || this;
	}
	var n = t.prototype;
	return n.render = function() {
		return this.props.children;
	}, t;
}(h.Component);
function Gr(e) {
	return e && typeof e == "object" ? e : {
		show: e,
		hide: e
	};
}
function Kr(e, t, n) {
	var r = t[0], i = r.currentTarget, a = r.relatedTarget || r.nativeEvent[n];
	(!a || a !== i) && !Fn(i, a) && e.apply(void 0, t);
}
var qr = {
	defaultShow: !1,
	trigger: ["hover", "focus"]
};
function Jr(e) {
	var t = e.trigger, n = e.overlay, r = e.children, i = e.popperConfig, a = i === void 0 ? {} : i, s = e.show, c = e.defaultShow, l = c === void 0 ? !1 : c, u = e.onToggle, d = e.delay, f = e.placement, p = e.flip, g = p === void 0 ? f && f.indexOf("auto") !== -1 : p, _ = o(e, Ur), v = (0, h.useRef)(null), b = Ie(), x = (0, h.useRef)(""), S = y(s, l, u), C = S[0], w = S[1], T = Gr(d), E = typeof r == "function" ? {} : h.Children.only(r).props, D = E.onFocus, O = E.onBlur, k = E.onClick, A = (0, h.useCallback)(function() {
		return Ln(v.current);
	}, []), j = (0, h.useCallback)(function() {
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
	]), M = (0, h.useCallback)(function() {
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
	]), N = (0, h.useCallback)(function() {
		j();
		var e = [...arguments];
		D?.apply(void 0, e);
	}, [j, D]), P = (0, h.useCallback)(function() {
		M();
		var e = [...arguments];
		O?.apply(void 0, e);
	}, [M, O]), F = (0, h.useCallback)(function() {
		w(!C), k && k.apply(void 0, arguments);
	}, [
		k,
		w,
		C
	]), I = (0, h.useCallback)(function() {
		Kr(j, [...arguments], "fromElement");
	}, [j]), L = (0, h.useCallback)(function() {
		Kr(M, [...arguments], "toElement");
	}, [M]), R = t == null ? [] : [].concat(t), z = {};
	return R.indexOf("click") !== -1 && (z.onClick = F), R.indexOf("focus") !== -1 && (z.onFocus = N, z.onBlur = P), R.indexOf("hover") !== -1 && (z.onMouseOver = I, z.onMouseOut = L), /* @__PURE__ */ h.createElement(h.Fragment, null, typeof r == "function" ? r(m({}, z, { ref: v })) : /* @__PURE__ */ h.createElement(Wr, { ref: v }, /* @__PURE__ */ (0, h.cloneElement)(r, z)), /* @__PURE__ */ h.createElement(Hr, m({}, _, {
		show: C,
		onHide: M,
		flip: g,
		placement: f,
		popperConfig: a,
		target: A
	}), n));
}
Jr.defaultProps = qr;
//#endregion
//#region node_modules/react-bootstrap/esm/Spinner.js
var Yr = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Xr = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.variant, a = e.animation, s = e.size, c = e.children, l = e.as, u = l === void 0 ? "div" : l, d = e.className, f = o(e, Yr);
	r = t(r, "spinner");
	var p = r + "-" + a;
	return /* @__PURE__ */ h.createElement(u, m({ ref: n }, f, { className: (0, g.default)(d, p, s && p + "-" + s, i && "text-" + i) }), c);
});
Xr.displayName = "Spinner", tr();
var Zr = [
	"bsPrefix",
	"placement",
	"className",
	"style",
	"children",
	"arrowProps",
	"popper",
	"show"
], Qr = { placement: "right" }, $r = /* @__PURE__ */ h.forwardRef(function(e, n) {
	var r = e.bsPrefix, i = e.placement, a = e.className, s = e.style, c = e.children, l = e.arrowProps;
	e.popper, e.show;
	var u = o(e, Zr);
	r = t(r, "tooltip");
	var d = (i?.split("-") || [])[0];
	return /* @__PURE__ */ h.createElement("div", m({
		ref: n,
		style: s,
		role: "tooltip",
		"x-placement": d,
		className: (0, g.default)(a, r, "bs-tooltip-" + d)
	}, u), /* @__PURE__ */ h.createElement("div", m({ className: "arrow" }, l)), /* @__PURE__ */ h.createElement("div", { className: r + "-inner" }, c));
});
$r.defaultProps = Qr, $r.displayName = "Tooltip";
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var ei = function() {
	return ei = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, ei.apply(this, arguments);
};
function ti(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function ni(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/@formatjs/fast-memoize/lib/index.js
function ri(e, t) {
	var n = t && t.cache ? t.cache : pi, r = t && t.serializer ? t.serializer : di;
	return (t && t.strategy ? t.strategy : ci)(e, {
		cache: n,
		serializer: r
	});
}
function ii(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function ai(e, t, n, r) {
	var i = ii(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function oi(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function si(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function ci(e, t) {
	var n = e.length === 1 ? ai : oi;
	return si(e, this, n, t.cache.create(), t.serializer);
}
function li(e, t) {
	return si(e, this, oi, t.cache.create(), t.serializer);
}
function ui(e, t) {
	return si(e, this, ai, t.cache.create(), t.serializer);
}
var di = function() {
	return JSON.stringify(arguments);
};
function fi() {
	this.cache = Object.create(null);
}
fi.prototype.get = function(e) {
	return this.cache[e];
}, fi.prototype.set = function(e, t) {
	this.cache[e] = t;
};
var pi = { create: function() {
	return new fi();
} }, mi = {
	variadic: li,
	monadic: ui
};
//#endregion
//#region node_modules/@formatjs/ecma402-abstract/lib/utils.js
function hi(e, t, n) {
	if (n === void 0 && (n = Error), !e) throw new n(t);
}
ri(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.NumberFormat).bind.apply(e, ni([void 0], t, !1)))();
}, { strategy: mi.variadic }), ri(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.DateTimeFormat).bind.apply(e, ni([void 0], t, !1)))();
}, { strategy: mi.variadic }), ri(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.PluralRules).bind.apply(e, ni([void 0], t, !1)))();
}, { strategy: mi.variadic }), ri(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.Locale).bind.apply(e, ni([void 0], t, !1)))();
}, { strategy: mi.variadic }), ri(function() {
	for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
	return new ((e = Intl.ListFormat).bind.apply(e, ni([void 0], t, !1)))();
}, { strategy: mi.variadic });
var gi = {
	formats: {},
	messages: {},
	timeZone: void 0,
	defaultLocale: "en",
	defaultFormats: {},
	fallbackOnEmptyString: !0,
	onError: function(e) {},
	onWarn: function(e) {}
};
//#endregion
//#region node_modules/react-intl/lib/src/utils.js
function _i(e) {
	hi(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
ei(ei({}, gi), { textComponent: h.Fragment });
//#endregion
//#region node_modules/react-is/cjs/react-is.production.min.js
var vi = /* @__PURE__ */ s(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), yi = /* @__PURE__ */ s(((e, t) => {
	t.exports = vi();
}));
(/* @__PURE__ */ s(((e, t) => {
	var n = yi(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})))();
var bi = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = h.createContext(null)) : h.createContext(null);
bi.Consumer, bi.Provider;
var xi = bi;
//#endregion
//#region node_modules/react-intl/lib/src/components/useIntl.js
function Si() {
	var e = h.useContext(xi);
	return _i(e), e;
}
//#endregion
//#region node_modules/react-intl/lib/src/components/createFormattedComponent.js
var Ci;
(function(e) {
	e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Ci ||= {});
var wi;
(function(e) {
	e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(wi ||= {});
var Ti = function(e) {
	var t = Si(), n = e.value, r = e.children, i = ti(e, ["value", "children"]);
	return r(t.formatNumberToParts(n, i));
};
Ti.displayName = "FormattedNumberParts", Ti.displayName = "FormattedNumberParts";
function Ei(e) {
	var t = function(t) {
		var n = Si(), r = t.value, i = t.children, a = ti(t, ["value", "children"]), o = typeof r == "string" ? new Date(r || 0) : r;
		return i(e === "formatDate" ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
	};
	return t.displayName = wi[e], t;
}
function Di(e) {
	var t = function(t) {
		var n = Si(), r = t.value, i = t.children, a = ti(t, ["value", "children"]), o = n[e](r, a);
		if (typeof i == "function") return i(o);
		var s = n.textComponent || h.Fragment;
		return h.createElement(s, null, o);
	};
	return t.displayName = Ci[e], t;
}
//#endregion
//#region node_modules/react-intl/lib/index.js
function Oi(e) {
	return e;
}
Di("formatDate"), Di("formatTime"), Di("formatNumber"), Di("formatList"), Di("formatDisplayName"), Ei("formatDate"), Ei("formatTime");
//#endregion
//#region node_modules/@openedx/paragon/icons/es5/Add.js
var ki = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Ai = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), ji = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Mi = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Ni = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Pi = (e) => /* @__PURE__ */ h.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",
	fill: "currentColor"
})), Fi = (e) => /* @__PURE__ */ h.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Ii = (e) => /* @__PURE__ */ h.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Li = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Ri = (e) => /* @__PURE__ */ h.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ h.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
})), zi = [
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
], Bi = [
	"hover",
	"click",
	"focus"
];
function Vi(e) {
	return /* @__PURE__ */ h.createElement(Hr, { ...e });
}
function Hi(e) {
	return /* @__PURE__ */ h.createElement(Jr, { ...e }, e.children);
}
var Ui = H.default.oneOf(Bi);
Vi.propTypes = {
	children: H.default.node.isRequired,
	container: H.default.oneOfType([H.default.elementType, H.default.func]),
	onEnter: H.default.func,
	onEntered: H.default.func,
	onEntering: H.default.func,
	onExit: H.default.func,
	onExited: H.default.func,
	onExiting: H.default.func,
	onHide: H.default.func,
	placement: H.default.oneOf(zi),
	popperConfig: H.default.shape({}),
	rootClose: H.default.bool,
	rootCloseEvent: H.default.oneOf(["click", "mousedown"]),
	show: H.default.bool,
	target: H.default.oneOfType([H.default.elementType, H.default.func]),
	transition: H.default.oneOfType([H.default.object, H.default.bool])
}, Hi.propTypes = {
	children: H.default.oneOfType([H.default.element, H.default.func]).isRequired,
	overlay: H.default.oneOfType([H.default.element, H.default.func]).isRequired,
	defaultShow: H.default.bool,
	delay: H.default.oneOfType([H.default.number, H.default.shape({})]),
	flip: H.default.bool,
	onHide: H.default.func,
	onToggle: H.default.func,
	placement: H.default.oneOf(zi),
	popperConfig: H.default.shape({}),
	show: H.default.bool,
	target: H.default.instanceOf(EventTarget),
	trigger: H.default.oneOfType([Ui, H.default.arrayOf(Ui)])
}, Vi.defaultProps = {
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
	transition: Te
}, Hi.defaultProps = {
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
//#region node_modules/@openedx/paragon/dist/Tooltip/index.js
var Wi = [
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
], Gi = /* @__PURE__ */ h.forwardRef(({ children: e, variant: t, ...n }, r) => /* @__PURE__ */ h.createElement($r, {
	...n,
	className: (0, g.default)({ "tooltip-light": t === "light" }, n.className),
	ref: r
}, e));
Gi.propTypes = {
	...$r.propTypes,
	id: H.default.string.isRequired,
	placement: H.default.oneOf(Wi),
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
}, Gi.defaultProps = {
	...Gi.defaultProps,
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
//#region node_modules/@openedx/paragon/dist/IconButton/index.js
var Ki = /* @__PURE__ */ h.forwardRef(({ className: e, alt: t, invertColors: n = !1, icon: r, src: i, iconClassNames: o, onClick: s = () => {}, size: c = "md", variant: l = "primary", iconAs: u = a, isActive: d = !1, children: f, ...p }, m) => {
	let _ = n ? "inverse-" : "", v = d ? `${l}-` : "", y = u;
	return /* @__PURE__ */ h.createElement("button", {
		"aria-label": t,
		className: (0, g.default)("btn-icon", `btn-icon-${_}${l}`, `btn-icon-${c}`, { [`btn-icon-${_}${v}active`]: d }, e),
		onClick: s,
		type: "button",
		ref: m,
		...p
	}, /* @__PURE__ */ h.createElement("span", { className: "btn-icon__icon-container" }, y && /* @__PURE__ */ h.createElement(y, {
		className: (0, g.default)("btn-icon__icon", o),
		icon: r,
		src: i
	})));
});
function qi({ tooltipPlacement: e = "top", tooltipContent: t, ...n }) {
	let r = n.invertColors ? "inverse-" : "";
	return /* @__PURE__ */ h.createElement(Hi, {
		placement: e,
		overlay: /* @__PURE__ */ h.createElement(Gi, {
			id: `iconbutton-tooltip-${e}`,
			variant: r ? "light" : void 0
		}, t)
	}, /* @__PURE__ */ h.createElement(Ki, { ...n }));
}
Ki.IconButtonWithTooltip = qi;
//#endregion
//#region node_modules/imask/esm/core/utils.js
function Ji(e) {
	return typeof e == "string" || e instanceof String;
}
function Yi(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Xi(e, t) {
	return Array.isArray(t) ? Xi(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
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
function Zi(e) {
	switch (e) {
		case U.LEFT: return U.FORCE_LEFT;
		case U.RIGHT: return U.FORCE_RIGHT;
		default: return e;
	}
}
function Qi(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function $i(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!$i(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!$i(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/imask/esm/core/action-details.js
var ea = class {
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
//#region node_modules/imask/esm/core/holder.js
function W(e, t) {
	return new W.InputMask(e, t);
}
//#endregion
//#region node_modules/imask/esm/masked/factory.js
function ta(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? W.MaskedRegExp : Ji(e) ? W.MaskedPattern : e === Date ? W.MaskedDate : e === Number ? W.MaskedNumber : Array.isArray(e) || e === Array ? W.MaskedDynamic : W.Masked && e.prototype instanceof W.Masked ? e : W.Masked && e instanceof W.Masked ? e.constructor : e instanceof Function ? W.MaskedFunction : (console.warn("Mask not found for mask", e), W.Masked);
}
function na(e) {
	if (!e) throw Error("Options in not defined");
	if (W.Masked) {
		if (e.prototype instanceof W.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof W.Masked ? { mask: e } : Yi(e) && e.mask instanceof W.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Xi(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Yi(e) ? { ...e } : { mask: e };
}
function ra(e) {
	if (W.Masked && e instanceof W.Masked) return e;
	let t = na(e), n = ta(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
W.createMask = ra;
//#endregion
//#region node_modules/imask/esm/controls/mask-element.js
var ia = class {
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
W.MaskElement = ia;
//#endregion
//#region node_modules/imask/esm/controls/html-mask-element.js
var aa = 90, oa = 89, sa = class extends ia {
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
		if (this._handlers.redo && (e.keyCode === aa && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === oa && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === aa && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
W.HTMLMaskElement = sa;
//#endregion
//#region node_modules/imask/esm/controls/html-input-mask-element.js
var ca = class extends sa {
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
W.HTMLMaskElement = sa;
//#endregion
//#region node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var la = class extends sa {
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
W.HTMLContenteditableMaskElement = la;
//#endregion
//#region node_modules/imask/esm/controls/input-history.js
var ua = class e {
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
ua.MAX_LENGTH = 100, W.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof ia ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new la(e) : new ca(e), this.masked = ra(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new ua(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof W.Masked) && this.masked.constructor === ta(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof W.Masked ? e : ra({ mask: e });
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
		let t = new ea({
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
//#region node_modules/imask/esm/core/change-details.js
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
//#region node_modules/imask/esm/core/continuous-tail-details.js
var da = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new da(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Ji(e) && (e = new da(String(e))), e.appendTo(this);
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
		if (!Ji(e)) throw Error("value should be string");
		let r = Ji(n) ? new da(String(n)) : n;
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
		s && (r = Zi(r), c = this.extractInput(0, a, { raw: !0 }));
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
		return !$i(this, e);
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
//#region node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var fa = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Ji(t) ? new da(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof da) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof W.MaskedPattern)) return new da(this.toString()).appendTo(t);
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
			let n = "chunks" in t ? new e() : new da();
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
}, pa = class {
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
}, ma = class {
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
		return new da("");
	}
	appendTail(e) {
		return Ji(e) && (e = new da(String(e))), e.appendTo(this);
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
}, ha = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = ra(s), Object.assign(this, {
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
ha.DEFAULT_DEFINITIONS = {
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
//#region node_modules/imask/esm/masked/pattern.js
var q = class e extends K {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, ha.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = na(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? ra(i) : new W.RepeatBlock(i);
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
			let c = s ? new ha({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...na(t[o]),
				parent: this
			}) : new ma({
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
		let n = new fa();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof fa && (a.blockIndex = t), n.extend(a);
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
		let n = new pa(this, e);
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
}, q.STOP_CHAR = "`", q.ESCAPE_CHAR = "\\", q.InputDefinition = ha, q.FixedDefinition = ma, W.MaskedPattern = q;
//#endregion
//#region node_modules/imask/esm/masked/range.js
var ga = class extends q {
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
W.MaskedRange = ga;
//#endregion
//#region node_modules/imask/esm/masked/date.js
var _a = "d{.}`m{.}`Y", va = class e extends q {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Ji(t) ? t : n
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
			mask: Ji(n) ? n : r,
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
va.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: ga,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: ga,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: ga,
		from: 1900,
		to: 9999
	}
}), va.DEFAULTS = {
	...q.DEFAULTS,
	mask: Date,
	pattern: _a,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, W.MaskedDate = va;
//#endregion
//#region node_modules/imask/esm/masked/dynamic.js
var ya = class e extends K {
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
			let { expose: t, ...n } = na(e), r = ra({
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
			return $i(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
ya.DEFAULTS = {
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
}, W.MaskedDynamic = ya;
//#endregion
//#region node_modules/imask/esm/masked/enum.js
var ba = class e extends q {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new da("", e);
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
ba.DEFAULTS = {
	...q.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, W.MaskedEnum = ba, W.MaskedFunction = class extends K {
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
//#region node_modules/imask/esm/masked/number.js
var xa, Sa = class e extends K {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Qi(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Qi).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Qi(this.thousandsSeparator), "g");
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
xa = Sa, Sa.UNMASKED_RADIX = ".", Sa.EMPTY_VALUES = [...K.EMPTY_VALUES, 0], Sa.DEFAULTS = {
	...K.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [xa.UNMASKED_RADIX],
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
}, W.MaskedNumber = Sa;
//#endregion
//#region node_modules/imask/esm/masked/pipe.js
var Ca = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function wa(e, t, n) {
	t === void 0 && (t = Ca.MASKED), n === void 0 && (n = Ca.MASKED);
	let r = ra(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Ta(e, t, n, r) {
	return wa(t, n, r)(e);
}
W.PIPE_TYPE = Ca, W.createPipe = wa, W.pipe = Ta, W.RepeatBlock = class extends q {
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
		let { repeat: t, ...n } = na(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = ra(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(ra(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
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
//#region node_modules/imask/esm/index.js
try {
	globalThis.IMask = W;
} catch {}
//#endregion
//#region node_modules/react-imask/esm/mixin.js
var Ea = {
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
}, Da = Object.keys(Ea).filter((e) => e !== "value"), Oa = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], ka = Da.filter((e) => Oa.indexOf(e) < 0);
function Aa(e) {
	var t;
	let n = (t = class extends h.Component {
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
			return Object.keys(t).filter((e) => ka.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Da.forEach((e) => {
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
			return h.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Ea, h.forwardRef((e, t) => h.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/react-imask/esm/input.js
var ja = Aa((e) => {
	let { inputRef: t, ...n } = e;
	return h.createElement("input", {
		...n,
		ref: t
	});
}), Ma = h.forwardRef((e, t) => h.createElement(ja, {
	...e,
	ref: t
})), Na = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Pa = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Fa = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, h.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Ia = (t, n) => {
	let [r, i] = (0, h.useState)(n || []), a = (e) => (i((t) => [...t, e]), e), o = () => a(e(`${t}-`)), s = (e) => {
		i((t) => t.filter((t) => t !== e));
	};
	return [r, (e) => {
		let [t, n] = (0, h.useState)(e);
		return (0, h.useEffect)(() => (e ? a(e) : t || n(o()), () => s(t)), [t, e]), t;
	}];
}, La = (e) => e, Ra = /* @__PURE__ */ h.createContext({
	getControlProps: La,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: La,
	getDescriptorProps: La,
	hasFormGroupProvider: !1
}), J = () => h.useContext(Ra);
function za(e) {
	let [t, n] = (0, h.useState)(e);
	return [t, (e) => {
		(0, h.useEffect)(() => n(e), [e]);
	}];
}
function Ba({ children: t, controlId: n, isInvalid: r, isValid: i, size: a }) {
	let o = (0, h.useMemo)(() => n || e("form-field"), [n]), [s, c] = Ia(o), [l, u] = Ia(o), [d, f] = za(!1), p = {
		getControlProps: (0, h.useCallback)((e) => {
			let t = d ? l : void 0;
			return Na({
				...e,
				"aria-describedby": (0, g.default)(e["aria-describedby"], s) || void 0,
				"aria-labelledby": (0, g.default)(e["aria-labelledby"], t) || void 0,
				id: o
			});
		}, [
			d,
			s,
			l,
			o
		]),
		getLabelProps: (e) => {
			let t = u(e?.id);
			return d ? {
				...e,
				id: t
			} : {
				...e,
				htmlFor: o
			};
		},
		getDescriptorProps: (e) => {
			let t = c(e?.id);
			return {
				...e,
				id: t
			};
		},
		useSetIsControlGroupEffect: f,
		isControlGroup: d,
		controlId: o,
		isInvalid: r,
		isValid: i,
		size: a,
		hasFormGroupProvider: !0
	};
	return /* @__PURE__ */ h.createElement(Ra.Provider, { value: p }, t);
}
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/constants.js
var Va = {
	SMALL: "sm",
	LARGE: "lg"
}, Y = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Ha = {
	[Y.DEFAULT]: null,
	[Y.VALID]: ji,
	[Y.INVALID]: Ni,
	[Y.WARNING]: Ri,
	[Y.CRITERIA_EMPTY]: Li,
	[Y.CRITERIA_VALID]: Mi,
	[Y.CRITERIA_INVALID]: Ai
}, Ua = ({ isInvalid: e, isValid: t }) => t ? Y.VALID : e ? Y.INVALID : Y.DEFAULT;
function Wa({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Ha[e];
	return n ? /* @__PURE__ */ h.createElement(a, { src: n }) : null;
}
Wa.propTypes = {
	type: H.default.oneOf(Object.values(Y)),
	customIcon: H.default.node
}, Wa.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Ga({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, g.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ h.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ h.createElement(Wa, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ h.createElement("div", null, e));
}
Ga.propTypes = {
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
}, Ga.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Ka({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = J(), a = n(t), o = (0, g.default)("pgn__form-control-description", t.className), s = t.type || Ua({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ h.createElement(Ga, {
		...a,
		className: o,
		type: s
	}, e);
}
Ka.propTypes = {
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
}, Ka.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function qa({ children: e }) {
	let { controlId: t } = J();
	return /* @__PURE__ */ h.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ h.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ h.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
qa.propTypes = { children: H.default.node.isRequired };
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Ja({ children: e, location: t }) {
	return /* @__PURE__ */ h.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Ja.propTypes = {
	children: H.default.node.isRequired,
	location: H.default.oneOf(["leading", "trailing"])
}, Ja.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Ya({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = J(a), s = a.size || o.size;
	return /* @__PURE__ */ h.createElement("div", {
		className: (0, g.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Va.LARGE,
			"pgn__form-control-decorator-group-sm": s === Va.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ h.createElement(Ja, { location: "leading" }, t), n && /* @__PURE__ */ h.createElement(Ja, { location: "trailing" }, n), r && /* @__PURE__ */ h.createElement(qa, null, r));
}
Ya.propTypes = {
	children: H.default.node.isRequired,
	leadingElement: H.default.node,
	trailingElement: H.default.node,
	floatingLabel: H.default.node,
	className: H.default.string,
	size: H.default.oneOf([Va.SMALL, Va.LARGE])
}, Ya.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormControl.js
var Xa = /* @__PURE__ */ h.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = J(), _ = h.useRef(), v = u || _, y = l.size || m.size, [b, x] = Fa({
		defaultValue: l.defaultValue,
		value: l.value
	}), S = (0, h.useCallback)(() => {
		e === "textarea" && o && (!v.current.initialHeight && !v.current.offsets && (v.current.initialHeight = v.current.offsetHeight, v.current.offsets = v.current.offsetHeight - v.current.clientHeight), v.current.style.height = `${v.current.initialHeight}px`, v.current.style.height = `${v.current.scrollHeight + v.current.offsets}px`);
	}, [
		e,
		o,
		v
	]);
	(0, h.useEffect)(() => {
		S();
	}, [S]);
	let C = p({
		...l,
		onBlur: Pa(x, l.onBlur)
	}), w = (e) => {
		S(), s && s(e);
	};
	return /* @__PURE__ */ h.createElement(Ya, {
		size: y,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ h.createElement(Sr, {
		as: c ? Ma : e,
		ref: v,
		size: y,
		isInvalid: d,
		isValid: f,
		className: (0, g.default)(n, { "has-value": b }),
		onChange: w,
		mask: c,
		...C
	}));
});
Xa.Feedback = Ka, Xa.Description = Ka, Xa.propTypes = {
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
}, Xa.defaultProps = {
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
//#region node_modules/@openedx/paragon/dist/Form/FormLabel.js
function Za({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = J(), o = (0, g.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Va.LARGE,
		"pgn__form-label-sm": r === Va.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ h.createElement(c, s, e);
}
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormGroup.js
function Qa({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ h.createElement(a ?? "div", {
		...o,
		className: (0, g.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ h.createElement(Ba, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var $a = /* @__PURE__ */ h.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), eo = () => (0, h.useContext)($a);
function to({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Pa(n, e.onBlur) : n,
			onFocus: e.onFocus ? Pa(r, e.onFocus) : r,
			onChange: e.onChange ? Pa(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ h.createElement($a.Provider, { value: c }, e);
}
to.propTypes = {
	children: H.default.node.isRequired,
	name: H.default.string.isRequired,
	onBlur: H.default.func,
	onFocus: H.default.func,
	onChange: H.default.func,
	value: H.default.string,
	defaultValue: H.default.string
}, to.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormRadio.js
var no = /* @__PURE__ */ h.forwardRef((e, t) => {
	let { getControlProps: n } = J(), { getRadioControlProps: r, hasRadioSetProvider: i } = eo(), a = n({
		...e,
		className: (0, g.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ h.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
no.propTypes = { className: H.default.string }, no.defaultProps = { className: void 0 };
var ro = /* @__PURE__ */ h.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ h.createElement(Ba, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ h.createElement("div", { className: (0, g.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ h.createElement(no, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ h.createElement("div", null, /* @__PURE__ */ h.createElement(Za, { className: r }, e), i && /* @__PURE__ */ h.createElement(Ka, { hasIcon: !1 }, i)))));
ro.propTypes = {
	id: H.default.string,
	children: H.default.node.isRequired,
	className: H.default.string,
	controlClassName: H.default.string,
	labelClassName: H.default.string,
	description: H.default.node,
	isInvalid: H.default.bool,
	isValid: H.default.bool,
	disabled: H.default.bool
}, ro.defaultProps = {
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
//#region node_modules/@openedx/paragon/dist/Form/FormControlSet.js
function io({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ h.createElement(e, {
		className: (0, g.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
io.propTypes = {
	as: H.default.elementType,
	className: H.default.string,
	isInline: H.default.bool,
	children: H.default.node
}, io.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function ao({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = J();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ h.createElement(to, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ h.createElement(io, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
ao.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	name: H.default.string.isRequired,
	value: H.default.string,
	defaultValue: H.default.string,
	isInline: H.default.bool,
	onChange: H.default.func,
	onFocus: H.default.func,
	onBlur: H.default.func
}, ao.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/uuid/dist/esm-browser/rng.js
var oo, so = new Uint8Array(16);
function co() {
	if (!oo && (oo = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !oo)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return oo(so);
}
//#endregion
//#region node_modules/uuid/dist/esm-browser/stringify.js
var X = [];
for (let e = 0; e < 256; ++e) X.push((e + 256).toString(16).slice(1));
function lo(e, t = 0) {
	return X[e[t + 0]] + X[e[t + 1]] + X[e[t + 2]] + X[e[t + 3]] + "-" + X[e[t + 4]] + X[e[t + 5]] + "-" + X[e[t + 6]] + X[e[t + 7]] + "-" + X[e[t + 8]] + X[e[t + 9]] + "-" + X[e[t + 10]] + X[e[t + 11]] + X[e[t + 12]] + X[e[t + 13]] + X[e[t + 14]] + X[e[t + 15]];
}
var uo = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/uuid/dist/esm-browser/v4.js
function fo(e, t, n) {
	if (uo.randomUUID && !t && !e) return uo.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || co)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return lo(r);
}
//#endregion
//#region node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var po = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), mo = (e, t) => t.every((t) => e[t] !== void 0), ho = (e, t) => po(e, (e) => Array.isArray(t) ? mo(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), go = /* @__PURE__ */ h.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, g.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ h.createElement(Xr, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ h.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function _o({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function vo({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function yo({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && _o({
		event: e,
		currentIndex: s,
		activeElement: a
	}), vo({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function bo(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, h.useRef)();
	return (0, h.useEffect)(() => {
		let e = (e) => {
			yo({
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
//#region node_modules/@openedx/paragon/dist/Form/messages.js
var xo = Oi({
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
}), So = /* @__PURE__ */ (0, h.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: o, isValueRequired: s, valueRequiredErrorMessageText: c, isSelectionRequired: l, selectionRequiredErrorMessageText: u, hasCustomError: d, customErrorMessageText: f, onChange: p, helpMessage: m, ...g }, _) => {
	let v = Si(), y = (0, h.useRef)(), b = bo({
		selectors: t,
		ignoredKeys: n
	}), [x, S] = (0, h.useState)(!1), [C, w] = (0, h.useState)(!1), [T, E] = (0, h.useState)(!1), [D, O] = (0, h.useState)(!1), [k, A] = (0, h.useState)(i?.userProvidedText || ""), [j, M] = (0, h.useState)([]), [N, P] = (0, h.useState)(null), [F, I] = (0, h.useState)(!0), [L, R] = (0, h.useState)(""), z = (e) => {
		P(e);
	}, B = () => {
		M([]), S(!1), P(null);
	}, ee = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		E(!0), O(!0), A(n), p && (!i || i && n !== i.selectionValue) && p({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), B(), t && t(e);
	};
	function te(t = "") {
		let n = h.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? fo();
			return /* @__PURE__ */ h.cloneElement(e, {
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
		x ? B() : ne();
	}, ie = /* @__PURE__ */ h.createElement(Ki, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: x ? Ii : Fi,
		iconAs: a,
		size: "sm",
		variant: "secondary",
		alt: x ? v.formatMessage(xo.iconButtonClosed) : v.formatMessage(xo.iconButtonOpened),
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
	(0, h.useImperativeHandle)(_, () => ({ updateErrorStateAndErrorMessage: oe }));
	let se = () => {
		w(!1), B(), oe();
	}, ce = (e) => {
		if (C) {
			if (e.key === "Escape") {
				e.preventDefault(), y && y.current.focus(), B();
				return;
			}
			e.key === "Tab" && se();
		}
	}, le = (e) => {
		b.current && !b.current.contains(e.target) && C && se();
	};
	(0, h.useEffect)(() => (document.addEventListener("keydown", ce), document.addEventListener("click", le, !0), () => {
		document.removeEventListener("click", le, !0), document.removeEventListener("keydown", ce);
	})), (0, h.useEffect)(() => {
		A(i ? i.userProvidedText ?? "" : ""), E(!!i && !!i.userProvidedText), O(!!i && !!i.selectionValue);
	}, [i]);
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
	}, { getControlProps: fe } = J(), pe = fe(g);
	return /* @__PURE__ */ h.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: b,
		onFocus: ae
	}, /* @__PURE__ */ h.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${j.length} options found`), /* @__PURE__ */ h.createElement(Ba, {
		controlId: pe.id,
		isInvalid: !F
	}, /* @__PURE__ */ h.createElement(Xa, {
		ref: y,
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
		...pe
	}), m && F && /* @__PURE__ */ h.createElement(Ka, { type: "default" }, m), !F && /* @__PURE__ */ h.createElement(Ka, {
		type: "invalid",
		"feedback-for": pe.name
	}, L)), /* @__PURE__ */ h.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, o ? /* @__PURE__ */ h.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ h.createElement(go, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : j.length > 0 && j));
});
So.defaultProps = {
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
}, So.propTypes = {
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
	valueRequiredErrorMessageText: ho(H.default.string, "isValueRequired"),
	isSelectionRequired: H.default.bool,
	selectionRequiredErrorMessageText: ho(H.default.string, "isSelectionRequired"),
	hasCustomError: H.default.bool,
	customErrorMessageText: ho(H.default.string, "hasCustomError"),
	name: H.default.string,
	readOnly: H.default.bool,
	children: H.default.node,
	screenReaderText: H.default.string
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Co({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...o }) {
	let s = (0, g.default)(o.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, h.createElement)(e, {
		...o,
		className: s
	}, /* @__PURE__ */ h.createElement(h.Fragment, null, i && /* @__PURE__ */ h.createElement(a, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ h.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ h.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ h.createElement(a, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function wo({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ h.createElement(Co, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, g.default)(t, "dropdown-item"),
		...r
	}, e);
}
wo.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, wo.propTypes = {
	className: H.default.string,
	children: H.default.string,
	onClick: H.default.func
};
var To = /* @__PURE__ */ h.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Eo = () => (0, h.useContext)(To);
function Do({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Pa(n, e.onBlur) : n,
			onFocus: e.onFocus ? Pa(r, e.onFocus) : r,
			onChange: e.onChange ? Pa(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ h.createElement(To.Provider, { value: c }, e);
}
Do.propTypes = {
	children: H.default.node.isRequired,
	name: H.default.string,
	onBlur: H.default.func,
	onFocus: H.default.func,
	onChange: H.default.func,
	value: H.default.arrayOf(H.default.string),
	defaultValue: H.default.arrayOf(H.default.string)
}, Do.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Oo = /* @__PURE__ */ h.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Eo(), a = h.useRef(), o = n || a, { getControlProps: s } = J(), c = s({
		...t,
		className: (0, g.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), h.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ h.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Oo.propTypes = {
	isIndeterminate: H.default.bool,
	className: H.default.string
}, Oo.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ko = /* @__PURE__ */ h.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Eo(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = J();
	p(!0);
	let _ = f && !d ? {
		...m({}),
		role: "group"
	} : {}, v = /* @__PURE__ */ h.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ h.createElement(Ba, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ h.createElement("div", {
		className: (0, g.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		..._
	}, v, /* @__PURE__ */ h.createElement("div", null, /* @__PURE__ */ h.createElement(Za, { className: r }, e), i && /* @__PURE__ */ h.createElement(Ka, { hasIcon: !1 }, i))));
});
ko.propTypes = {
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
}, ko.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Oo,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Ao = /* @__PURE__ */ h.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = h.useRef(), i = n || r, { getControlProps: a } = J(), o = a({
		...t,
		className: (0, g.default)("pgn__form-switch-input", t.className)
	});
	return h.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ h.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Ao.propTypes = {
	isIndeterminate: H.default.bool,
	className: H.default.string
}, Ao.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var jo = /* @__PURE__ */ h.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ h.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ h.createElement(ko, {
	className: (0, g.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Ao,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ h.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
jo.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	labelClassName: H.default.string,
	helperText: H.default.node,
	floatLabelLeft: H.default.bool
}, jo.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Mo({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = J();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ h.createElement(Do, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ h.createElement(io, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Mo.propTypes = {
	children: H.default.node.isRequired,
	className: H.default.string,
	name: H.default.string.isRequired,
	value: H.default.arrayOf(H.default.string),
	defaultValue: H.default.arrayOf(H.default.string),
	isInline: H.default.bool,
	onChange: H.default.func,
	onFocus: H.default.func,
	onBlur: H.default.func
}, Mo.defaultProps = {
	className: void 0,
	value: void 0,
	defaultValue: void 0,
	isInline: !1,
	onChange: void 0,
	onFocus: void 0,
	onBlur: void 0
};
//#endregion
//#region node_modules/@openedx/paragon/dist/Form/FormSwitchSet.js
var No = Mo, Z = Pr;
Z.Control = Xa, Z.Radio = ro, Z.RadioSet = ao, Z.Autosuggest = So, Z.AutosuggestOption = wo, Z.Checkbox = ko, Z.CheckboxSet = Mo, Z.Switch = jo, Z.SwitchSet = No, Z.Label = Za, Z.Group = Qa, Z.Text = Ga;
//#endregion
//#region node_modules/@openedx/paragon/dist/Stack/index.js
var Po = /* @__PURE__ */ (0, h.forwardRef)(({ direction: e = "vertical", gap: t = 0, reversed: n = !1, children: r, className: i, ...a }, o) => /* @__PURE__ */ h.createElement("div", {
	ref: o,
	className: (0, g.default)(e === "horizontal" ? "pgn__hstack" : "pgn__vstack", t ? `pgn__stack-gap--${t}` : "", n ? "pgn__stack-reversed" : "", i),
	...a
}, r)), Q = p();
function Fo({ initialHeader: e, initialKeypoints: t, initialButtonText: n, initialButtonLink: r, studioSaveUrl: i, runtime: a }) {
	let [o, s] = h.useState(e), [l, u] = h.useState(t), [f, p] = h.useState(n), [m, g] = h.useState(r), v = () => {
		u([...l, {
			keypoint: "",
			description: ""
		}]);
	}, y = (e, t) => {
		let n = [...l];
		n[e] = {
			...n[e],
			...t
		}, u(n);
	}, b = (e) => {
		u(l.filter((t, n) => n !== e));
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(c, {
		className: "xblock-keypoints editor-with-buttons",
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "studio-editor-scroll",
			children: /* @__PURE__ */ (0, Q.jsxs)(Po, {
				direction: "vertical",
				gap: 3,
				className: "p-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)(Z.Group, { children: [/* @__PURE__ */ (0, Q.jsx)(Z.Label, { children: "Block Header" }), /* @__PURE__ */ (0, Q.jsx)(Z.Control, {
						value: o,
						onChange: (e) => s(e.target.value),
						placeholder: "e.g. Key Concepts to Explore"
					})] }),
					/* @__PURE__ */ (0, Q.jsxs)("div", { children: [
						/* @__PURE__ */ (0, Q.jsxs)(_, {
							className: "mb-2",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("h4", {
									className: "m-0",
									children: "Key Terms"
								}),
								/* @__PURE__ */ (0, Q.jsx)(_.Spacer, {}),
								/* @__PURE__ */ (0, Q.jsx)(d, {
									iconBefore: ki,
									onClick: v,
									size: "lg",
									children: "Add Key Term"
								})
							]
						}),
						l.length === 0 && /* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-muted",
							children: "No key terms added yet. Click \"Add Key Term\" to get started."
						}),
						l.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "keypoint-entry",
							children: [
								/* @__PURE__ */ (0, Q.jsxs)(_, {
									className: "mb-2",
									children: [
										/* @__PURE__ */ (0, Q.jsxs)("span", {
											className: "font-weight-bold",
											children: ["Term ", t + 1]
										}),
										/* @__PURE__ */ (0, Q.jsx)(_.Spacer, {}),
										/* @__PURE__ */ (0, Q.jsx)(d, {
											variant: "outline-danger",
											iconBefore: Pi,
											size: "lg",
											onClick: () => b(t),
											children: "Remove"
										})
									]
								}),
								/* @__PURE__ */ (0, Q.jsxs)(Z.Group, {
									className: "mb-2",
									children: [/* @__PURE__ */ (0, Q.jsx)(Z.Label, { children: "Label" }), /* @__PURE__ */ (0, Q.jsx)(Z.Control, {
										value: e.keypoint,
										onChange: (e) => y(t, { keypoint: e.target.value }),
										placeholder: "e.g. Fluid balance"
									})]
								}),
								/* @__PURE__ */ (0, Q.jsxs)(Z.Group, {
									className: "mb-0",
									children: [/* @__PURE__ */ (0, Q.jsx)(Z.Label, { children: "Description" }), /* @__PURE__ */ (0, Q.jsx)(Z.Control, {
										as: "textarea",
										rows: 3,
										value: e.description,
										onChange: (e) => y(t, { description: e.target.value }),
										placeholder: "e.g. The regulation of fluids within the body..."
									})]
								})
							]
						}, `keypoint-${t}`))
					] }),
					/* @__PURE__ */ (0, Q.jsxs)("div", { children: [
						/* @__PURE__ */ (0, Q.jsx)("h4", {
							className: "mb-2",
							children: "Action Button"
						}),
						/* @__PURE__ */ (0, Q.jsxs)(Z.Group, {
							className: "mb-2",
							children: [/* @__PURE__ */ (0, Q.jsx)(Z.Label, { children: "Button Text" }), /* @__PURE__ */ (0, Q.jsx)(Z.Control, {
								value: f,
								onChange: (e) => p(e.target.value),
								placeholder: "e.g. Glossary"
							})]
						}),
						/* @__PURE__ */ (0, Q.jsxs)(Z.Group, {
							className: "mb-0",
							children: [/* @__PURE__ */ (0, Q.jsx)(Z.Label, { children: "Button Link" }), /* @__PURE__ */ (0, Q.jsx)(Z.Control, {
								value: m,
								onChange: (e) => g(e.target.value),
								placeholder: "e.g. https://example.com/glossary"
							})]
						})
					] })
				]
			})
		})
	}), /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "xblock-actions",
		children: /* @__PURE__ */ (0, Q.jsxs)(_, { children: [
			/* @__PURE__ */ (0, Q.jsx)(_.Spacer, {}),
			/* @__PURE__ */ (0, Q.jsx)(d, {
				variant: "tertiary",
				size: "lg",
				onClick: () => a.notify("cancel", {}),
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, Q.jsx)(d, {
				variant: "primary",
				onClick: () => {
					a.notify("save", { state: "start" }), $.post(i, JSON.stringify({
						header: o,
						keypoints: l,
						button_text: f,
						button_link: m
					})).done(() => {
						a.notify("save", { state: "end" });
					}).fail(() => {
						a.notify("error", {
							title: "Save Error",
							message: "Failed to save keypoint configuration"
						});
					});
				},
				size: "lg",
				children: "Save"
			})
		] })
	})] });
}
//#endregion
//#region src/keypoint-block/studio-ui/index.tsx
var Io = (e, t, { header: n, keypoints: r, button_text: i, button_link: a }) => {
	let o = t && "jquery" in t ? t[0] : t;
	if (!o || !(o instanceof Element)) {
		console.error("Invalid DOM element provided to renderBlock:", t);
		return;
	}
	let s = e.handlerUrl(o, "studio_save");
	R.render(/* @__PURE__ */ (0, Q.jsx)(h.StrictMode, { children: /* @__PURE__ */ (0, Q.jsx)(Fo, {
		initialHeader: n || "",
		initialKeypoints: r || [],
		initialButtonText: i || "",
		initialButtonLink: a || "",
		studioSaveUrl: s,
		runtime: e
	}) }), o);
};
//#endregion
export { Io as renderBlock };
