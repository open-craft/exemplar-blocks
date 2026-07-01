import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, a as O, b as k, d as ee, et as A, f as te, g as ne, h as re, i as ie, j, k as ae, l as oe, m as se, n as ce, nt as le, o as ue, p as de, q as fe, r as pe, rt as me, t as he, tt as ge, u as _e, v as ve, w as ye, x as be, y as xe, z as Se } from "./Stack-DFva22SX.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var M = /* @__PURE__ */ me(ge()), Ce = /* @__PURE__ */ M.createContext(null), we = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
}, N = /* @__PURE__ */ me(g()), P = /* @__PURE__ */ me(c()), Te = /* @__PURE__ */ me(T()), Ee = /-(.)/g;
function De(e) {
	return e.replace(Ee, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Oe = [
	"className",
	"bsPrefix",
	"as"
], ke = function(e) {
	return e[0].toUpperCase() + De(e).slice(1);
};
function Ae(e, t) {
	var r = t === void 0 ? {} : t, i = r.displayName, a = i === void 0 ? ke(e) : i, s = r.Component, c = r.defaultProps, l = /* @__PURE__ */ M.forwardRef(function(t, r) {
		var i = t.className, a = t.bsPrefix, c = t.as, l = c === void 0 ? s || "div" : c, u = n(t, Oe), d = o(a, e);
		return /* @__PURE__ */ M.createElement(l, S({
			ref: r,
			className: (0, P.default)(i, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = a, l;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var je;
function Me(e, t) {
	if (!je) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		je = function(e, t) {
			return r.call(e, t);
		};
	}
	return je(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var Ne = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Pe(e, t) {
	return Ne(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function Fe(e) {
	let t = (0, M.useRef)(null);
	return (0, M.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function Ie() {
	let [, e] = (0, M.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function Le(e, t, n, r = !1) {
	let i = p(n);
	(0, M.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function Re(e, t, n = !1) {
	return Le((0, M.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var ze = /* @__PURE__ */ M.createContext(null), Be = function() {};
function Ve(e) {
	e === void 0 && (e = {});
	var t = (0, M.useContext)(ze), n = h(), r = n[0], i = n[1], a = (0, M.useRef)(!1), o = e, s = o.flip, c = o.offset, l = o.rootCloseEvent, u = o.fixed, d = u === void 0 ? !1 : u, f = o.popperConfig, p = f === void 0 ? {} : f, m = o.usePopper, g = m === void 0 ? !!t : m, _ = t?.show == null ? !!e.show : t.show, v = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	_ && !a.current && (a.current = !0);
	var y = function(e) {
		t?.toggle(!1, e);
	}, b = t || {}, x = b.drop, C = b.setMenu, w = b.menuElement, T = b.toggleElement, E = v ? "bottom-end" : "bottom-start";
	x === "up" ? E = v ? "top-end" : "top-start" : x === "right" ? E = v ? "right-end" : "right-start" : x === "left" && (E = v ? "left-end" : "left-start");
	var D = ne(T, w, de({
		placement: E,
		enabled: !!(g && _),
		enableEvents: _,
		offset: c,
		flip: s,
		fixed: d,
		arrowElement: r,
		popperConfig: p
	})), O = S({
		ref: C || Be,
		"aria-labelledby": T?.id
	}, D.attributes.popper, { style: D.styles.popper }), k = {
		show: _,
		alignEnd: v,
		hasShown: a.current,
		toggle: t?.toggle,
		popper: g ? D : null,
		arrowProps: g ? S({ ref: i }, D.attributes.arrow, { style: D.styles.arrow }) : {}
	};
	return se(w, y, {
		clickTrigger: l,
		disabled: !_
	}), [O, k];
}
var He = {
	children: N.default.func.isRequired,
	show: N.default.bool,
	alignEnd: N.default.bool,
	flip: N.default.bool,
	usePopper: N.default.oneOf([!0, !1]),
	popperConfig: N.default.object,
	rootCloseEvent: N.default.string
}, Ue = { usePopper: !0 };
function We(e) {
	var t = e.children, r = Ve(n(e, ["children"])), i = r[0], a = r[1];
	return /* @__PURE__ */ M.createElement(M.Fragment, null, a.hasShown ? t(i, a) : null);
}
We.displayName = "ReactOverlaysDropdownMenu", We.propTypes = He, We.defaultProps = Ue;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Ge = function() {};
function Ke() {
	var e = (0, M.useContext)(ze) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? Ge : r, a = e.setToggle, o = (0, M.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Ge,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var qe = { children: N.default.func.isRequired };
function Je(e) {
	var t = e.children, n = Ke(), r = n[0], i = n[1];
	return /* @__PURE__ */ M.createElement(M.Fragment, null, t(r, i));
}
Je.displayName = "ReactOverlaysDropdownToggle", Je.propTypes = qe;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var Ye = {
	children: N.default.node,
	drop: N.default.oneOf([
		"up",
		"left",
		"right",
		"down"
	]),
	focusFirstItemOnShow: N.default.oneOf([
		!1,
		!0,
		"keyboard"
	]),
	itemSelector: N.default.string,
	alignEnd: N.default.bool,
	show: N.default.bool,
	defaultShow: N.default.bool,
	onToggle: N.default.func
};
function Xe() {
	var e = Ie(), t = (0, M.useRef)(null);
	return [t, (0, M.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function Ze(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = v(i, r, a), d = u[0], f = u[1], h = Xe(), g = h[0], _ = h[1], y = g.current, b = Xe(), x = b[0], S = b[1], C = x.current, w = Fe(d), T = (0, M.useRef)(null), E = (0, M.useRef)(!1), D = (0, M.useCallback)(function(e, t) {
		f(e, t);
	}, [f]), O = (0, M.useMemo)(function() {
		return {
			toggle: D,
			drop: t,
			show: d,
			alignEnd: n,
			menuElement: y,
			toggleElement: C,
			setMenu: _,
			setToggle: S
		};
	}, [
		D,
		t,
		d,
		n,
		y,
		C,
		_,
		S
	]);
	y && w && !d && (E.current = y.contains(document.activeElement));
	var k = p(function() {
		C && C.focus && C.focus();
	}), ee = p(function() {
		var e = T.current, t = c;
		if (t ??= g.current && Me(g.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = Pe(g.current, s)[0];
			n && n.focus && n.focus();
		}
	});
	(0, M.useEffect)(function() {
		d ? ee() : E.current && (E.current = !1, k());
	}, [
		d,
		E,
		k,
		ee
	]), (0, M.useEffect)(function() {
		T.current = null;
	});
	var A = function(e, t) {
		if (!g.current) return null;
		var n = Pe(g.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return Re("keydown", function(e) {
		var t = e.key, n = e.target, r = g.current?.contains(n), i = x.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && !(!r && !i) && !(!g.current && t === "Tab")) switch (T.current = e.type, t) {
			case "ArrowUp":
				var a = A(n, -1);
				a && a.focus && a.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !d) f(!0, e);
				else {
					var o = A(n, 1);
					o && o.focus && o.focus();
				}
				return;
			case "Tab":
				m(document, "keyup", function(t) {
					var n;
					(t.key === "Tab" && !t.target || !((n = g.current) != null && n.contains(t.target))) && f(!1, e);
				}, { once: !0 });
				break;
			case "Escape":
				e.preventDefault(), e.stopPropagation(), f(!1, e);
				break;
			default:
		}
	}), /* @__PURE__ */ M.createElement(ze.Provider, { value: O }, l);
}
Ze.displayName = "ReactOverlaysDropdown", Ze.propTypes = Ye, Ze.Menu = We, Ze.Toggle = Je;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var Qe = /* @__PURE__ */ M.createContext(null);
Qe.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var $e = [
	"bsPrefix",
	"className",
	"children",
	"eventKey",
	"disabled",
	"href",
	"onClick",
	"onSelect",
	"active",
	"as"
], et = {
	as: j,
	disabled: !1
}, tt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.eventKey, c = e.disabled, l = e.href, u = e.onClick, d = e.onSelect, f = e.active, m = e.as, h = n(e, $e), g = o(r, "dropdown-item"), _ = (0, M.useContext)(Ce), v = ((0, M.useContext)(Qe) || {}).activeKey, y = we(s, l), b = f == null && y != null ? we(v) === y : f, x = p(function(e) {
		c || (u && u(e), _ && _(y, e), d && d(y, e));
	});
	return /* @__PURE__ */ M.createElement(m, S({}, h, {
		ref: t,
		href: l,
		disabled: c,
		className: (0, P.default)(i, g, b && "active", c && "disabled"),
		onClick: x
	}), a);
});
tt.displayName = "DropdownItem", tt.defaultProps = et;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var nt = /* @__PURE__ */ M.createContext(null);
nt.displayName = "NavbarContext", Se();
function rt(e, t) {
	return e;
}
re();
var it = [
	"bsPrefix",
	"className",
	"align",
	"alignRight",
	"rootCloseEvent",
	"flip",
	"show",
	"renderOnMount",
	"as",
	"popperConfig"
], at = N.default.oneOf(["left", "right"]);
N.default.oneOfType([
	at,
	N.default.shape({ sm: at }),
	N.default.shape({ md: at }),
	N.default.shape({ lg: at }),
	N.default.shape({ xl: at })
]);
var ot = {
	align: "left",
	alignRight: !1,
	flip: !0
}, st = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.align, s = e.alignRight, c = e.rootCloseEvent, l = e.flip, u = e.show, d = e.renderOnMount, f = e.as, p = f === void 0 ? "div" : f, m = e.popperConfig, h = n(e, it), g = (0, M.useContext)(nt), _ = o(r, "dropdown-menu"), v = ee(), y = v[0], b = v[1], x = [];
	if (a) if (typeof a == "object") {
		var C = Object.keys(a);
		if (C.length) {
			var w = C[0], T = a[w];
			s = T === "left", x.push(_ + "-" + w + "-" + T);
		}
	} else a === "right" && (s = !0);
	var E = Ve({
		flip: l,
		rootCloseEvent: c,
		show: u,
		alignEnd: s,
		usePopper: !g && x.length === 0,
		popperConfig: S({}, m, { modifiers: b.concat(m?.modifiers || []) })
	}), D = E[0], O = E[1], k = O.hasShown, A = O.popper, ne = O.show, re = O.alignEnd, ie = O.toggle;
	if (D.ref = te(y, te(rt(t, "DropdownMenu"), D.ref)), !k && !d) return null;
	typeof p != "string" && (D.show = ne, D.close = function() {
		return ie?.(!1);
	}, D.alignRight = re);
	var j = h.style;
	return A != null && A.placement && (j = S({}, h.style, D.style), h["x-placement"] = A.placement), /* @__PURE__ */ M.createElement(p, S({}, h, D, {
		style: j,
		className: P.default.apply(void 0, [
			i,
			_,
			ne && "show",
			re && _ + "-right"
		].concat(x))
	}));
});
st.displayName = "DropdownMenu", st.defaultProps = ot, _e();
var ct = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], lt = /* @__PURE__ */ M.forwardRef(function(e, r) {
	var i = e.bsPrefix, a = e.split, s = e.className, c = e.childBsPrefix, l = e.as, u = l === void 0 ? t : l, d = n(e, ct), f = o(i, "dropdown-toggle");
	c !== void 0 && (d.bsPrefix = c);
	var p = Ke()[0];
	return p.ref = te(p.ref, rt(r, "DropdownToggle")), /* @__PURE__ */ M.createElement(u, S({ className: (0, P.default)(s, f, a && f + "-split") }, p, d));
});
lt.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var ut = [
	"bsPrefix",
	"drop",
	"show",
	"className",
	"alignRight",
	"onSelect",
	"onToggle",
	"focusFirstItemOnShow",
	"as",
	"navbar"
], dt = Ae("dropdown-header", { defaultProps: { role: "heading" } }), ft = Ae("dropdown-divider", { defaultProps: { role: "separator" } }), pt = Ae("dropdown-item-text", { Component: "span" }), mt = { navbar: !1 }, ht = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = f(e, { show: "onToggle" }), i = r.bsPrefix, a = r.drop, s = r.show, c = r.className, l = r.alignRight, u = r.onSelect, d = r.onToggle, m = r.focusFirstItemOnShow, h = r.as, g = h === void 0 ? "div" : h;
	r.navbar;
	var _ = n(r, ut), v = (0, M.useContext)(Ce), y = o(i, "dropdown"), b = p(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), d && d(e, t, { source: n });
	}), x = p(function(e, t) {
		v && v(e, t), u && u(e, t), b(!1, t, "select");
	});
	return /* @__PURE__ */ M.createElement(Ce.Provider, { value: x }, /* @__PURE__ */ M.createElement(Ze, {
		drop: a,
		show: s,
		alignEnd: l,
		onToggle: b,
		focusFirstItemOnShow: m,
		itemSelector: "." + y + "-item:not(.disabled):not(:disabled)"
	}, /* @__PURE__ */ M.createElement(g, S({}, _, {
		ref: t,
		className: (0, P.default)(c, s && "show", (!a || a === "down") && y, a === "up" && "dropup", a === "right" && "dropright", a === "left" && "dropleft")
	}))));
});
ht.displayName = "Dropdown", ht.defaultProps = mt, ht.Divider = ft, ht.Header = dt, ht.Item = tt, ht.ItemText = pt, ht.Menu = st, ht.Toggle = lt;
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var gt = /* @__PURE__ */ le(((e, t) => {
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
}));
(/* @__PURE__ */ le(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(gt());
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
})))();
var _t = [
	"as",
	"className",
	"type",
	"tooltip"
], vt = {
	type: N.default.string,
	tooltip: N.default.bool,
	as: N.default.elementType
}, yt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c === void 0 ? !1 : c, u = n(e, _t);
	return /* @__PURE__ */ M.createElement(i, S({}, u, {
		ref: t,
		className: (0, P.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
yt.displayName = "Feedback", yt.propTypes = vt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var bt = /* @__PURE__ */ M.createContext({ controlId: void 0 }), xt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], St = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.type, l = c === void 0 ? "checkbox" : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = n(e, xt), v = (0, M.useContext)(bt), y = v.controlId, b = v.custom ? [a, "custom-control-input"] : [i, "form-check-input"], x = b[0], C = b[1];
	return i = o(x, C), /* @__PURE__ */ M.createElement(g, S({}, _, {
		ref: t,
		type: l,
		id: r || y,
		className: (0, P.default)(s, i, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
St.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Ct = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], wt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = n(e, Ct), l = (0, M.useContext)(bt), u = l.controlId, d = l.custom ? [i, "custom-control-label"] : [r, "form-check-label"], f = d[0], p = d[1];
	return r = o(f, p), /* @__PURE__ */ M.createElement("label", S({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, P.default)(a, r)
	}));
});
wt.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var Tt = [
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
], Et = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.inline, c = s === void 0 ? !1 : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, C = e.type, w = C === void 0 ? "checkbox" : C, T = e.label, E = e.children, D = e.custom, O = e.as, k = O === void 0 ? "input" : O, ee = n(e, Tt), A = w === "switch" ? !0 : D, te = A ? [a, "custom-control"] : [i, "form-check"], ne = te[0], re = te[1];
	i = o(ne, re);
	var ie = (0, M.useContext)(bt).controlId, j = (0, M.useMemo)(function() {
		return {
			controlId: r || ie,
			custom: A
		};
	}, [
		ie,
		A,
		r
	]), ae = A || T != null && T !== !1 && !E, oe = /* @__PURE__ */ M.createElement(St, S({}, ee, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: f,
		isInvalid: m,
		isStatic: !ae,
		disabled: u,
		as: k
	}));
	return /* @__PURE__ */ M.createElement(bt.Provider, { value: j }, /* @__PURE__ */ M.createElement("div", {
		style: y,
		className: (0, P.default)(v, i, A && "custom-" + w, c && i + "-inline")
	}, E || /* @__PURE__ */ M.createElement(M.Fragment, null, oe, ae && /* @__PURE__ */ M.createElement(wt, { title: x }, T), (f || m) && /* @__PURE__ */ M.createElement(yt, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
Et.displayName = "FormCheck", Et.Input = St, Et.Label = wt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var Dt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Ot = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.isValid, l = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = n(e, Dt), m = (0, M.useContext)(bt), h = m.controlId, g = m.custom, _ = "file", v = g ? [a, "custom-file-input"] : [i, "form-control-file"], y = v[0], b = v[1];
	return i = o(y, b), /* @__PURE__ */ M.createElement(f, S({}, p, {
		ref: t,
		id: r || h,
		type: _,
		lang: u,
		className: (0, P.default)(s, i, c && "is-valid", l && "is-invalid")
	}));
});
Ot.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var kt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], At = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = n(e, kt), l = (0, M.useContext)(bt), u = l.controlId, d = l.custom ? [i, "custom-file-label"] : [r, "form-file-label"], f = d[0], p = d[1];
	return r = o(f, p), /* @__PURE__ */ M.createElement("label", S({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, P.default)(a, r),
		"data-browse": c["data-browse"]
	}));
});
At.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var jt = [
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
], Mt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, C = e["data-browse"], w = e.as, T = w === void 0 ? "div" : w, E = e.inputAs, D = E === void 0 ? "input" : E, O = n(e, jt), k = b ? [a, "custom"] : [i, "form-file"], ee = k[0], A = k[1];
	i = o(ee, A);
	var te = "file", ne = (0, M.useContext)(bt).controlId, re = (0, M.useMemo)(function() {
		return {
			controlId: r || ne,
			custom: b
		};
	}, [
		ne,
		b,
		r
	]), ie = v != null && v !== !1 && !y, j = /* @__PURE__ */ M.createElement(Ot, S({}, O, {
		ref: t,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: D,
		lang: x
	}));
	return /* @__PURE__ */ M.createElement(bt.Provider, { value: re }, /* @__PURE__ */ M.createElement(T, {
		style: _,
		className: (0, P.default)(g, i, b && "custom-" + te)
	}, y || /* @__PURE__ */ M.createElement(M.Fragment, null, b ? /* @__PURE__ */ M.createElement(M.Fragment, null, j, ie && /* @__PURE__ */ M.createElement(At, { "data-browse": C }, v)) : /* @__PURE__ */ M.createElement(M.Fragment, null, ie && /* @__PURE__ */ M.createElement(At, null, v), j), (u || f) && /* @__PURE__ */ M.createElement(yt, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Mt.displayName = "FormFile", Mt.Input = Ot, Mt.Label = At;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Nt = [
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
], Pt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.type, s = e.size, c = e.htmlSize, l = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = n(e, Nt), x = (0, M.useContext)(bt).controlId, C = _ ? [i, "custom"] : [r, "form-control"], w = C[0], T = C[1];
	r = o(w, T);
	var E;
	if (h) {
		var D;
		E = (D = {}, D[r + "-plaintext"] = !0, D);
	} else if (a === "file") {
		var O;
		E = (O = {}, O[r + "-file"] = !0, O);
	} else if (a === "range") {
		var k;
		E = (k = {}, k[r + "-range"] = !0, k);
	} else if (y === "select" && _) {
		var ee;
		E = (ee = {}, ee[r + "-select"] = !0, ee[r + "-select-" + s] = s, ee);
	} else {
		var A;
		E = (A = {}, A[r] = !0, A[r + "-" + s] = s, A);
	}
	return /* @__PURE__ */ M.createElement(y, S({}, b, {
		type: a,
		size: c,
		ref: t,
		readOnly: g,
		id: l || x,
		className: (0, P.default)(u, E, f && "is-valid", m && "is-invalid")
	}));
});
Pt.displayName = "FormControl";
var Ft = Object.assign(Pt, { Feedback: yt }), It = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Lt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.controlId, c = e.as, l = c === void 0 ? "div" : c, u = n(e, It);
	r = o(r, "form-group");
	var d = (0, M.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ M.createElement(bt.Provider, { value: d }, /* @__PURE__ */ M.createElement(l, S({}, u, {
		ref: t,
		className: (0, P.default)(i, r)
	}), a));
});
Lt.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Rt = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], zt = {
	column: !1,
	srOnly: !1
}, Bt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "label" : r, a = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, u = e.htmlFor, d = n(e, Rt), f = (0, M.useContext)(bt).controlId;
	a = o(a, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var m = (0, P.default)(l, a, c && "sr-only", s && p);
	return u ||= f, s ? /* @__PURE__ */ M.createElement(ae, S({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /* @__PURE__ */ M.createElement(i, S({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
Bt.displayName = "FormLabel", Bt.defaultProps = zt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Vt = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Ht = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.as, s = a === void 0 ? "small" : a, c = e.muted, l = n(e, Vt);
	return r = o(r, "form-text"), /* @__PURE__ */ M.createElement(s, S({}, l, {
		ref: t,
		className: (0, P.default)(i, r, c && "text-muted")
	}));
});
Ht.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Ut = /* @__PURE__ */ M.forwardRef(function(e, t) {
	return /* @__PURE__ */ M.createElement(Et, S({}, e, {
		ref: t,
		type: "switch"
	}));
});
Ut.displayName = "Switch", Ut.Input = Et.Input, Ut.Label = Et.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Wt = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Gt = Ae("form-row"), Kt = { inline: !1 }, qt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.inline, a = e.className, s = e.validated, c = e.as, l = c === void 0 ? "form" : c, u = n(e, Wt);
	return r = o(r, "form"), /* @__PURE__ */ M.createElement(l, S({}, u, {
		ref: t,
		className: (0, P.default)(a, s && "was-validated", i && r + "-inline")
	}));
});
qt.displayName = "Form", qt.defaultProps = Kt, qt.Row = Gt, qt.Group = Lt, qt.Control = Ft, qt.Check = Et, qt.File = Mt, qt.Switch = Ut, qt.Label = Bt, qt.Text = Ht;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Jt = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Yt = /* @__PURE__ */ M.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.variant, a = e.animation, s = e.size, c = e.children, l = e.as, u = l === void 0 ? "div" : l, d = e.className, f = n(e, Jt);
	r = o(r, "spinner");
	var p = r + "-" + a;
	return /* @__PURE__ */ M.createElement(u, S({ ref: t }, f, { className: (0, P.default)(d, p, s && p + "-" + s, i && "text-" + i) }), c);
});
Yt.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Add.js
var Xt = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Zt = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Qt = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), $t = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), en = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), tn = (e) => /* @__PURE__ */ M.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), nn = (e) => /* @__PURE__ */ M.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), rn = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), an = (e) => /* @__PURE__ */ M.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ M.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function on(e) {
	return typeof e == "string" || e instanceof String;
}
function sn(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function cn(e, t) {
	return Array.isArray(t) ? cn(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var F = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function ln(e) {
	switch (e) {
		case F.LEFT: return F.FORCE_LEFT;
		case F.RIGHT: return F.FORCE_RIGHT;
		default: return e;
	}
}
function un(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function dn(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!dn(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!dn(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var fn = class {
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
		return !this.removedCount || this.insertedCount ? F.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? F.RIGHT : F.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function I(e, t) {
	return new I.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function pn(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? I.MaskedRegExp : on(e) ? I.MaskedPattern : e === Date ? I.MaskedDate : e === Number ? I.MaskedNumber : Array.isArray(e) || e === Array ? I.MaskedDynamic : I.Masked && e.prototype instanceof I.Masked ? e : I.Masked && e instanceof I.Masked ? e.constructor : e instanceof Function ? I.MaskedFunction : (console.warn("Mask not found for mask", e), I.Masked);
}
function mn(e) {
	if (!e) throw Error("Options in not defined");
	if (I.Masked) {
		if (e.prototype instanceof I.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof I.Masked ? { mask: e } : sn(e) && e.mask instanceof I.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...cn(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return sn(e) ? { ...e } : { mask: e };
}
function hn(e) {
	if (I.Masked && e instanceof I.Masked) return e;
	let t = mn(e), n = pn(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
I.createMask = hn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var gn = class {
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
I.MaskElement = gn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var _n = 90, vn = 89, yn = class extends gn {
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
		if (this._handlers.redo && (e.keyCode === _n && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === vn && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === _n && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
I.HTMLMaskElement = yn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var bn = class extends yn {
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
I.HTMLMaskElement = yn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var xn = class extends yn {
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
I.HTMLContenteditableMaskElement = xn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Sn = class e {
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
Sn.MAX_LENGTH = 100, I.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof gn ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new xn(e) : new bn(e), this.masked = hn(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Sn(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof I.Masked) && this.masked.constructor === pn(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof I.Masked ? e : hn({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, F.LEFT));
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
		let t = new fn({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : F.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== F.NONE && (a = this.masked.nearestInputPos(a, F.NONE)), this.updateControl(a), delete this._inputEvent;
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
var L = class e {
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
I.ChangeDetails = L;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var Cn = class {
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
}, wn = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Cn(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return on(e) && (e = new Cn(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new L({
			inserted: e,
			rawInserted: e
		})) : new L();
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
			a || (i = new L(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new L();
	}
	_appendEager() {
		return new L();
	}
	append(e, t, n) {
		if (!on(e)) throw Error("value should be string");
		let r = on(n) ? new Cn(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new L();
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
		return t === void 0 && (t = {}), L.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), L.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = F.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = ln(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new L();
		if (r !== F.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? F.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== F.NONE && c === this.rawInputValue) if (r === F.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new L({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === F.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !dn(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new L();
	}
};
wn.DEFAULTS = { skipInvalid: !0 }, wn.EMPTY_VALUES = [
	void 0,
	null,
	""
], I.Masked = wn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var Tn = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = on(t) ? new Cn(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof Cn) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof I.MaskedPattern)) return new Cn(this.toString()).appendTo(t);
		let n = new L();
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
			let n = "chunks" in t ? new e() : new Cn();
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
}, En = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, F.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, F.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, F.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, F.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, F.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, F.NONE), !0;
		});
	}
}, Dn = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new L();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = F.NONE);
		let n = this._value.length;
		switch (t) {
			case F.LEFT:
			case F.FORCE_LEFT: return 0;
			case F.NONE:
			case F.RIGHT:
			case F.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new L();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new L({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new L();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new Cn("");
	}
	appendTail(e) {
		return on(e) && (e = new Cn(String(e))), e.appendTo(this);
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
}, On = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = hn(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new L();
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
		if (t === void 0 && (t = {}), this.isFilled) return new L();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new L(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new L() : (this.isFilled = !0, new L({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new L();
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
		t === void 0 && (t = F.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case F.LEFT:
			case F.FORCE_LEFT: return this.isComplete ? r : 0;
			case F.RIGHT:
			case F.FORCE_RIGHT: return this.isComplete ? r : n;
			case F.NONE:
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
		return new L();
	}
};
On.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, I.MaskedRegExp = class extends wn {
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
var kn = class e extends wn {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, On.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = mn(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? hn(i) : new I.RepeatBlock(i);
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
			let c = s ? new On({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...mn(t[o]),
				parent: this
			}) : new Dn({
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
		let e = new L(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new L();
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
		let n = new Tn();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof Tn && (a.blockIndex = t), n.extend(a);
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
		let t = new L();
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
		if (t === void 0 && (t = F.NONE), !this._blocks.length) return 0;
		let n = new En(this, e);
		if (t === F.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === F.LEFT || t === F.FORCE_LEFT) {
			if (t === F.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === F.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === F.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === F.RIGHT || t === F.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === F.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, F.LEFT))) : e;
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
		let t = new L();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
kn.DEFAULTS = {
	...wn.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, kn.STOP_CHAR = "`", kn.ESCAPE_CHAR = "\\", kn.InputDefinition = On, kn.FixedDefinition = Dn, I.MaskedPattern = kn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var An = class extends kn {
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
		let t = new L();
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
I.MaskedRange = An;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var jn = "d{.}`m{.}`Y", Mn = class e extends kn {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: on(t) ? t : n
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
			mask: on(n) ? n : r,
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
Mn.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: An,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: An,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: An,
		from: 1900,
		to: 9999
	}
}), Mn.DEFAULTS = {
	...kn.DEFAULTS,
	mask: Date,
	pattern: jn,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, I.MaskedDate = Mn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var Nn = class e extends wn {
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
			let { expose: t, ...n } = mn(e), r = hn({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new L(), l = s?.state;
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
		let t = new L();
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
		let n = new L();
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
			return dn(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
Nn.DEFAULTS = {
	...wn.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, F.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, F.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, I.MaskedDynamic = Nn;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Pn = class e extends kn {
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
		let n = Math.min(this.nearestInputPos(0, F.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new L({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new Cn("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new L();
		let n = Math.min(super.nearestInputPos(0, F.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Pn.DEFAULTS = {
	...kn.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, I.MaskedEnum = Pn, I.MaskedFunction = class extends wn {
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
var Fn, In = class e extends wn {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + un(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(un).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(un(this.thousandsSeparator), "g");
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
		s ? l = new L({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new L()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new L({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case F.NONE:
			case F.LEFT:
			case F.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === F.FORCE_LEFT) return n;
				}
				break;
			}
			case F.RIGHT:
			case F.FORCE_RIGHT: {
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
Fn = In, In.UNMASKED_RADIX = ".", In.EMPTY_VALUES = [...wn.EMPTY_VALUES, 0], In.DEFAULTS = {
	...wn.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [Fn.UNMASKED_RADIX],
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
}, I.MaskedNumber = In;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Ln = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Rn(e, t, n) {
	t === void 0 && (t = Ln.MASKED), n === void 0 && (n = Ln.MASKED);
	let r = hn(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function zn(e, t, n, r) {
	return Rn(t, n, r)(e);
}
I.PIPE_TYPE = Ln, I.createPipe = Rn, I.pipe = zn, I.RepeatBlock = class extends kn {
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
		let { repeat: t, ...n } = mn(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = hn(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(hn(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new L();
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
	globalThis.IMask = I;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Bn = {
	mask: N.default.oneOfType([
		N.default.array,
		N.default.func,
		N.default.string,
		N.default.instanceOf(RegExp),
		N.default.oneOf([
			Date,
			Number,
			I.Masked
		]),
		N.default.instanceOf(I.Masked)
	]),
	value: N.default.any,
	unmask: N.default.oneOfType([N.default.bool, N.default.oneOf(["typed"])]),
	prepare: N.default.func,
	prepareChar: N.default.func,
	validate: N.default.func,
	commit: N.default.func,
	overwrite: N.default.oneOfType([N.default.bool, N.default.oneOf(["shift"])]),
	eager: N.default.oneOfType([N.default.bool, N.default.oneOf(["append", "remove"])]),
	skipInvalid: N.default.bool,
	onAccept: N.default.func,
	onComplete: N.default.func,
	placeholderChar: N.default.string,
	displayChar: N.default.string,
	lazy: N.default.bool,
	definitions: N.default.object,
	blocks: N.default.object,
	enum: N.default.arrayOf(N.default.string),
	maxLength: N.default.number,
	from: N.default.number,
	to: N.default.number,
	pattern: N.default.string,
	format: N.default.func,
	parse: N.default.func,
	autofix: N.default.oneOfType([N.default.bool, N.default.oneOf(["pad"])]),
	radix: N.default.string,
	thousandsSeparator: N.default.string,
	mapToRadix: N.default.arrayOf(N.default.string),
	scale: N.default.number,
	normalizeZeros: N.default.bool,
	padFractionalZeros: N.default.bool,
	min: N.default.oneOfType([N.default.number, N.default.instanceOf(Date)]),
	max: N.default.oneOfType([N.default.number, N.default.instanceOf(Date)]),
	dispatch: N.default.func,
	inputRef: N.default.oneOfType([N.default.func, N.default.shape({ current: N.default.object })])
}, Vn = Object.keys(Bn).filter((e) => e !== "value"), Hn = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Un = Vn.filter((e) => Hn.indexOf(e) < 0);
function Wn(e) {
	var t;
	let n = (t = class extends M.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = I(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Un.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Vn.forEach((e) => {
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
			return M.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Bn, M.forwardRef((e, t) => M.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Gn = Wn((e) => {
	let { inputRef: t, ...n } = e;
	return M.createElement("input", {
		...n,
		ref: t
	});
}), Kn = M.forwardRef((e, t) => M.createElement(Gn, {
	...e,
	ref: t
})), qn = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Jn = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Yn = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, M.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Xn = (e, t) => {
	let [n, r] = (0, M.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(oe(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, M.useState)(e);
		return (0, M.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Zn = (e) => e, Qn = /* @__PURE__ */ M.createContext({
	getControlProps: Zn,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Zn,
	getDescriptorProps: Zn,
	hasFormGroupProvider: !1
}), $n = () => M.useContext(Qn);
function er(e) {
	let [t, n] = (0, M.useState)(e);
	return [t, (e) => {
		(0, M.useEffect)(() => n(e), [e]);
	}];
}
function tr({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, M.useMemo)(() => t || oe("form-field"), [t]), [o, s] = Xn(a), [c, l] = Xn(a), [u, d] = er(!1), f = {
		getControlProps: (0, M.useCallback)((e) => {
			let t = u ? c : void 0;
			return qn({
				...e,
				"aria-describedby": (0, P.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, P.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ M.createElement(Qn.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var nr = {
	SMALL: "sm",
	LARGE: "lg"
}, rr = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, ir = {
	[rr.DEFAULT]: null,
	[rr.VALID]: Qt,
	[rr.INVALID]: en,
	[rr.WARNING]: an,
	[rr.CRITERIA_EMPTY]: rn,
	[rr.CRITERIA_VALID]: $t,
	[rr.CRITERIA_INVALID]: Zt
}, ar = ({ isInvalid: e, isValid: t }) => t ? rr.VALID : e ? rr.INVALID : rr.DEFAULT;
function or({ type: e, customIcon: t }) {
	if (t) return t;
	let n = ir[e];
	return n ? /* @__PURE__ */ M.createElement(ue, { src: n }) : null;
}
or.propTypes = {
	type: N.default.oneOf(Object.values(rr)),
	customIcon: N.default.node
}, or.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function sr({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, P.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ M.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ M.createElement(or, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ M.createElement("div", null, e));
}
sr.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	hasIcon: N.default.bool,
	type: N.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: N.default.node,
	muted: N.default.bool
}, sr.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function cr({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = $n(), a = n(t), o = (0, P.default)("pgn__form-control-description", t.className), s = t.type || ar({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ M.createElement(sr, {
		...a,
		className: o,
		type: s
	}, e);
}
cr.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	hasIcon: N.default.bool,
	type: N.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: N.default.node,
	muted: N.default.bool
}, cr.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function lr({ children: e }) {
	let { controlId: t } = $n();
	return /* @__PURE__ */ M.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ M.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ M.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
lr.propTypes = { children: N.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function ur({ children: e, location: t }) {
	return /* @__PURE__ */ M.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
ur.propTypes = {
	children: N.default.node.isRequired,
	location: N.default.oneOf(["leading", "trailing"])
}, ur.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function dr({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = $n(a), s = a.size || o.size;
	return /* @__PURE__ */ M.createElement("div", {
		className: (0, P.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === nr.LARGE,
			"pgn__form-control-decorator-group-sm": s === nr.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ M.createElement(ur, { location: "leading" }, t), n && /* @__PURE__ */ M.createElement(ur, { location: "trailing" }, n), r && /* @__PURE__ */ M.createElement(lr, null, r));
}
dr.propTypes = {
	children: N.default.node.isRequired,
	leadingElement: N.default.node,
	trailingElement: N.default.node,
	floatingLabel: N.default.node,
	className: N.default.string,
	size: N.default.oneOf([nr.SMALL, nr.LARGE])
}, dr.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var fr = /* @__PURE__ */ M.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = $n(), h = M.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Yn({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, M.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, M.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Jn(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ M.createElement(dr, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ M.createElement(Ft, {
		as: c ? Kn : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, P.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
fr.Feedback = cr, fr.Description = cr, fr.propTypes = {
	className: N.default.string,
	as: N.default.elementType,
	onChange: N.default.func,
	defaultValue: N.default.oneOfType([N.default.string, N.default.number]),
	value: N.default.oneOfType([N.default.string, N.default.number]),
	id: N.default.string,
	controlClassName: N.default.string,
	size: N.default.oneOf(["sm", "lg"]),
	leadingElement: N.default.node,
	trailingElement: N.default.node,
	floatingLabel: N.default.node,
	plaintext: N.default.bool,
	isValid: N.default.bool,
	isInvalid: N.default.bool,
	autoResize: N.default.bool,
	inputMask: N.default.string
}, fr.defaultProps = {
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
function pr({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = $n(), o = (0, P.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === nr.LARGE,
		"pgn__form-label-sm": r === nr.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ M.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function mr({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ M.createElement(a ?? "div", {
		...o,
		className: (0, P.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ M.createElement(tr, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var hr = /* @__PURE__ */ M.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), gr = () => (0, M.useContext)(hr);
function _r({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Jn(n, e.onBlur) : n,
			onFocus: e.onFocus ? Jn(r, e.onFocus) : r,
			onChange: e.onChange ? Jn(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ M.createElement(hr.Provider, { value: c }, e);
}
_r.propTypes = {
	children: N.default.node.isRequired,
	name: N.default.string.isRequired,
	onBlur: N.default.func,
	onFocus: N.default.func,
	onChange: N.default.func,
	value: N.default.string,
	defaultValue: N.default.string
}, _r.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var vr = /* @__PURE__ */ M.forwardRef((e, t) => {
	let { getControlProps: n } = $n(), { getRadioControlProps: r, hasRadioSetProvider: i } = gr(), a = n({
		...e,
		className: (0, P.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ M.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
vr.propTypes = { className: N.default.string }, vr.defaultProps = { className: void 0 };
var yr = /* @__PURE__ */ M.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ M.createElement(tr, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ M.createElement("div", { className: (0, P.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ M.createElement(vr, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ M.createElement("div", null, /* @__PURE__ */ M.createElement(pr, { className: r }, e), i && /* @__PURE__ */ M.createElement(cr, { hasIcon: !1 }, i)))));
yr.propTypes = {
	id: N.default.string,
	children: N.default.node.isRequired,
	className: N.default.string,
	controlClassName: N.default.string,
	labelClassName: N.default.string,
	description: N.default.node,
	isInvalid: N.default.bool,
	isValid: N.default.bool,
	disabled: N.default.bool
}, yr.defaultProps = {
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
function br({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ M.createElement(e, {
		className: (0, P.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
br.propTypes = {
	as: N.default.elementType,
	className: N.default.string,
	isInline: N.default.bool,
	children: N.default.node
}, br.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function xr({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = $n();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ M.createElement(_r, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ M.createElement(br, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
xr.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	name: N.default.string.isRequired,
	value: N.default.string,
	defaultValue: N.default.string,
	isInline: N.default.bool,
	onChange: N.default.func,
	onFocus: N.default.func,
	onBlur: N.default.func
}, xr.defaultProps = {
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
var Sr, Cr = new Uint8Array(16);
function wr() {
	if (!Sr && (Sr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Sr)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return Sr(Cr);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Tr = [];
for (let e = 0; e < 256; ++e) Tr.push((e + 256).toString(16).slice(1));
function Er(e, t = 0) {
	return Tr[e[t + 0]] + Tr[e[t + 1]] + Tr[e[t + 2]] + Tr[e[t + 3]] + "-" + Tr[e[t + 4]] + Tr[e[t + 5]] + "-" + Tr[e[t + 6]] + Tr[e[t + 7]] + "-" + Tr[e[t + 8]] + Tr[e[t + 9]] + "-" + Tr[e[t + 10]] + Tr[e[t + 11]] + Tr[e[t + 12]] + Tr[e[t + 13]] + Tr[e[t + 14]] + Tr[e[t + 15]];
}
var Dr = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function Or(e, t, n) {
	if (Dr.randomUUID && !t && !e) return Dr.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || wr)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Er(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var kr = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Ar = (e, t) => t.every((t) => e[t] !== void 0), jr = (e, t) => kr(e, (e) => Array.isArray(t) ? Ar(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Mr = /* @__PURE__ */ M.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, P.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ M.createElement(Yt, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ M.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Nr({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Pr({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Fr({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Nr({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Pr({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Ir(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, M.useRef)();
	return (0, M.useEffect)(() => {
		let e = (e) => {
			Fr({
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
var Lr = fe({
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
}), Rr = /* @__PURE__ */ (0, M.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: d, customErrorMessageText: f, onChange: p, helpMessage: m, ...h }, g) => {
	let _ = u(), v = (0, M.useRef)(), y = Ir({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, M.useState)(!1), [S, C] = (0, M.useState)(!1), [w, T] = (0, M.useState)(!1), [E, D] = (0, M.useState)(!1), [O, k] = (0, M.useState)(i?.userProvidedText || ""), [ee, A] = (0, M.useState)([]), [te, ne] = (0, M.useState)(null), [re, ie] = (0, M.useState)(!0), [j, ae] = (0, M.useState)(""), oe = (e) => {
		ne(e);
	}, se = () => {
		A([]), x(!1), ne(null);
	}, le = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		T(!0), D(!0), k(n), p && (!i || i && n !== i.selectionValue) && p({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), se(), t && t(e);
	};
	function de(t = "") {
		let n = M.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? Or();
			return /* @__PURE__ */ M.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => le(e, n),
				id: i,
				onFocus: () => oe(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let fe = () => {
		A(de(O)), ie(!0), ae(""), x(!0);
	}, pe = () => {
		b ? se() : fe();
	}, me = /* @__PURE__ */ M.createElement(ce, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? nn : tn,
		iconAs: ue,
		size: "sm",
		variant: "secondary",
		alt: b ? _.formatMessage(Lr.iconButtonClosed) : _.formatMessage(Lr.iconButtonOpened),
		onClick: pe
	}), he = () => {
		C(!0);
	}, ge = () => {
		if (d) {
			ie(!1), ae(f);
			return;
		}
		if (o && !w) {
			ie(!1), ae(s);
			return;
		}
		if (w && c && !E) {
			ie(!1), ae(l);
			return;
		}
		ie(!0), ae("");
	};
	(0, M.useImperativeHandle)(g, () => ({ updateErrorStateAndErrorMessage: ge }));
	let _e = () => {
		C(!1), se(), ge();
	}, ve = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), v && v.current.focus(), se();
				return;
			}
			e.key === "Tab" && _e();
		}
	}, ye = (e) => {
		y.current && !y.current.contains(e.target) && S && _e();
	};
	(0, M.useEffect)(() => (document.addEventListener("keydown", ve), document.addEventListener("click", ye, !0), () => {
		document.removeEventListener("click", ye, !0), document.removeEventListener("keydown", ve);
	})), (0, M.useEffect)(() => {
		k(i ? i.userProvidedText ?? "" : ""), T(!!i && !!i.userProvidedText), D(!!i && !!i.selectionValue);
	}, [i]);
	let be = () => {
		fe();
	}, xe = (e) => {
		let t = e.target.value;
		if (!t.length) {
			k(""), T(!1), D(!1), A([]), se(), p && p({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		T(!0);
		let n = de(t);
		A(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			D(!1), k(t), p && p({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		D(!0), k(r.props.children), p && p({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: Se } = $n(), Ce = Se(h);
	return /* @__PURE__ */ M.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: he
	}, /* @__PURE__ */ M.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${ee.length} options found`), /* @__PURE__ */ M.createElement(tr, {
		controlId: Ce.id,
		isInvalid: !re
	}, /* @__PURE__ */ M.createElement(fr, {
		ref: v,
		"aria-expanded": (ee.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: O,
		"aria-invalid": j,
		"aria-activedescendant": te,
		onChange: xe,
		onClick: be,
		trailingElement: me,
		"data-testid": "autosuggest-textbox-input",
		...Ce
	}), m && re && /* @__PURE__ */ M.createElement(cr, { type: "default" }, m), !re && /* @__PURE__ */ M.createElement(cr, {
		type: "invalid",
		"feedback-for": Ce.name
	}, j)), /* @__PURE__ */ M.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ M.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ M.createElement(Mr, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : ee.length > 0 && ee));
});
Rr.defaultProps = {
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
}, Rr.propTypes = {
	arrowKeyNavigationSelector: N.default.string,
	ignoredArrowKeysNames: N.default.arrayOf(N.default.string),
	isLoading: N.default.bool,
	className: N.default.string,
	floatingLabel: N.default.string,
	onChange: N.default.func,
	helpMessage: N.default.string,
	placeholder: N.default.string,
	value: N.default.shape({
		userProvidedText: N.default.string,
		selectionValue: N.default.string,
		selectionId: N.default.string
	}),
	isValueRequired: N.default.bool,
	valueRequiredErrorMessageText: jr(N.default.string, "isValueRequired"),
	isSelectionRequired: N.default.bool,
	selectionRequiredErrorMessageText: jr(N.default.string, "isSelectionRequired"),
	hasCustomError: N.default.bool,
	customErrorMessageText: jr(N.default.string, "hasCustomError"),
	name: N.default.string,
	readOnly: N.default.bool,
	children: N.default.node,
	screenReaderText: N.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function zr({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, P.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, M.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ M.createElement(M.Fragment, null, i && /* @__PURE__ */ M.createElement(ue, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ M.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ M.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ M.createElement(ue, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Br({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ M.createElement(zr, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, P.default)(t, "dropdown-item"),
		...r
	}, e);
}
Br.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Br.propTypes = {
	className: N.default.string,
	children: N.default.string,
	onClick: N.default.func
};
var Vr = /* @__PURE__ */ M.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Hr = () => (0, M.useContext)(Vr);
function Ur({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Jn(n, e.onBlur) : n,
			onFocus: e.onFocus ? Jn(r, e.onFocus) : r,
			onChange: e.onChange ? Jn(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ M.createElement(Vr.Provider, { value: c }, e);
}
Ur.propTypes = {
	children: N.default.node.isRequired,
	name: N.default.string,
	onBlur: N.default.func,
	onFocus: N.default.func,
	onChange: N.default.func,
	value: N.default.arrayOf(N.default.string),
	defaultValue: N.default.arrayOf(N.default.string)
}, Ur.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Wr = /* @__PURE__ */ M.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Hr(), a = M.useRef(), o = n || a, { getControlProps: s } = $n(), c = s({
		...t,
		className: (0, P.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), M.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ M.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Wr.propTypes = {
	isIndeterminate: N.default.bool,
	className: N.default.string
}, Wr.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Gr = /* @__PURE__ */ M.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Hr(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = $n();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ M.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ M.createElement(tr, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ M.createElement("div", {
		className: (0, P.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ M.createElement("div", null, /* @__PURE__ */ M.createElement(pr, { className: r }, e), i && /* @__PURE__ */ M.createElement(cr, { hasIcon: !1 }, i))));
});
Gr.propTypes = {
	id: N.default.string,
	children: N.default.node.isRequired,
	className: N.default.string,
	controlClassName: N.default.string,
	labelClassName: N.default.string,
	description: N.default.node,
	isInvalid: N.default.bool,
	isValid: N.default.bool,
	controlAs: N.default.elementType,
	floatLabelLeft: N.default.bool,
	disabled: N.default.bool
}, Gr.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Wr,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Kr = /* @__PURE__ */ M.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = M.useRef(), i = n || r, { getControlProps: a } = $n(), o = a({
		...t,
		className: (0, P.default)("pgn__form-switch-input", t.className)
	});
	return M.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ M.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Kr.propTypes = {
	isIndeterminate: N.default.bool,
	className: N.default.string
}, Kr.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var qr = /* @__PURE__ */ M.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ M.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ M.createElement(Gr, {
	className: (0, P.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Kr,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ M.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
qr.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	labelClassName: N.default.string,
	helperText: N.default.node,
	floatLabelLeft: N.default.bool
}, qr.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Jr({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = $n();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ M.createElement(Ur, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ M.createElement(br, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Jr.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	name: N.default.string.isRequired,
	value: N.default.arrayOf(N.default.string),
	defaultValue: N.default.arrayOf(N.default.string),
	isInline: N.default.bool,
	onChange: N.default.func,
	onFocus: N.default.func,
	onBlur: N.default.func
}, Jr.defaultProps = {
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
var Yr = Jr, R = qt;
R.Control = fr, R.Radio = yr, R.RadioSet = xr, R.Autosuggest = Rr, R.AutosuggestOption = Br, R.Checkbox = Gr, R.CheckboxSet = Jr, R.Switch = qr, R.SwitchSet = Yr, R.Label = pr, R.Group = mr, R.Text = sr;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Xr = /* @__PURE__ */ me(A()), Zr = /* @__PURE__ */ M.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Qr({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, M.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ M.createElement(Zr.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var $r = "right-scroll-bar-position", ei = "width-before-scroll-bar", ti = "with-scroll-bars-hidden", ni = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function ri(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function ii(e, t) {
	var n = (0, M.useState)(function() {
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
var ai = typeof window < "u" ? M.useLayoutEffect : M.useEffect, oi = /* @__PURE__ */ new WeakMap();
function si(e, t) {
	var n = ii(t || null, function(t) {
		return e.forEach(function(e) {
			return ri(e, t);
		});
	});
	return ai(function() {
		var t = oi.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || ri(e, null);
			}), i.forEach(function(e) {
				r.has(e) || ri(e, a);
			});
		}
		oi.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ci(e) {
	return e;
}
function li(e, t) {
	t === void 0 && (t = ci);
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
function ui(e, t) {
	return t === void 0 && (t = ci), li(e, t);
}
function di(e) {
	e === void 0 && (e = {});
	var t = li(null);
	return t.options = w({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var fi = function(e) {
	var t = e.sideCar, n = E(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return M.createElement(r, w({}, n));
};
fi.isSideCarExport = !0;
function pi(e, t) {
	return e.useMedium(t), fi;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var mi = di(), hi = function() {}, gi = M.forwardRef(function(e, t) {
	var n = M.useRef(null), r = M.useState({
		onScrollCapture: hi,
		onWheelCapture: hi,
		onTouchMoveCapture: hi
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = E(e, [
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
	]), x = f, S = si([n, t]), C = w(w({}, b), i);
	return M.createElement(M.Fragment, null, u && M.createElement(x, {
		sideCar: mi,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? M.cloneElement(M.Children.only(s), w(w({}, C), { ref: S })) : M.createElement(v, w({}, C, {
		className: c,
		ref: S
	}), s));
});
gi.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, gi.classNames = {
	fullWidth: ei,
	zeroRight: $r
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var _i = "data-focus-lock", vi = "data-focus-lock-disabled", yi = "data-no-focus-lock", bi = "data-autofocus-inside", xi = "data-no-autofocus", Si = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Ci = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Si
	}), n, n && /* @__PURE__ */ M.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: Si
	}));
};
Ci.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var wi = ui({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Ti = ui(), Ei = ui(), Di = di({
	async: !0,
	ssr: typeof document < "u"
}), Oi = /* @__PURE__ */ (0, M.createContext)(void 0), ki = [], Ai = /* @__PURE__ */ (0, M.forwardRef)(function(e, t) {
	var n, r = (0, M.useState)(), i = r[0], a = r[1], o = (0, M.useRef)(), s = (0, M.useRef)(!1), c = (0, M.useRef)(null), l = (0, M.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, g = h === void 0 ? !1 : h, _ = e.crossFrame, v = _ === void 0 ? !0 : _, y = e.autoFocus, b = y === void 0 ? !0 : y;
	e.allowTextSelection;
	var x = e.group, C = e.className, w = e.whiteList, T = e.hasPositiveIndices, E = e.shards, D = E === void 0 ? ki : E, O = e.as, k = O === void 0 ? "div" : O, ee = e.lockProps, A = ee === void 0 ? {} : ee, te = e.sideCar, ne = e.returnFocus, re = ne === void 0 ? !1 : ne, ie = e.focusOptions, j = e.onActivation, ae = e.onDeactivation, oe = (0, M.useState)({})[0], se = (0, M.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && j && j(o.current), s.current = !0, l();
	}, [j]), ce = (0, M.useCallback)(function() {
		s.current = !1, ae && ae(o.current), l();
	}, [ae]), le = (0, M.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof re == "function" ? re(n) : re;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [re]), ue = (0, M.useCallback)(function(e) {
		s.current && wi.useMedium(e);
	}, []), de = Ti.useMedium, fe = (0, M.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), pe = S((n = {}, n[vi] = f && "disabled", n[_i] = x, n), A), me = m !== !0, he = me && m !== "tail", ge = si([t, fe]), _e = (0, M.useMemo)(function() {
		return {
			observed: o,
			shards: D,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		D,
		o
	]);
	return /* @__PURE__ */ M.createElement(M.Fragment, null, me && [/* @__PURE__ */ M.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Si
	}), T ? /* @__PURE__ */ M.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: Si
	}) : null], !f && /* @__PURE__ */ M.createElement(te, {
		id: oe,
		sideCar: Di,
		observed: i,
		disabled: f,
		persistentFocus: g,
		crossFrame: v,
		autoFocus: b,
		whiteList: w,
		shards: D,
		onActivation: se,
		onDeactivation: ce,
		returnFocus: le,
		focusOptions: ie,
		noFocusGuards: m
	}), /* @__PURE__ */ M.createElement(k, S({ ref: ge }, pe, {
		className: C,
		onBlur: de,
		onFocus: ue
	}), /* @__PURE__ */ M.createElement(Oi.Provider, { value: _e }, u)), he && /* @__PURE__ */ M.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: Si
	}));
});
Ai.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function ji(e) {
	setTimeout(e, 1);
}
var Mi = function(e) {
	return e && "current" in e ? e.current : e;
}, Ni = Ai, Pi = di(), Fi = "data-focus-on-hidden", Ii = { preventScroll: !0 }, Li = M.forwardRef(function(e, t) {
	var n = M.useState(!1), r = n[0], i = n[1], a = M.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, u = e.shards, d = e.crossFrame, f = e.enabled, p = f === void 0 ? !0 : f, m = e.scrollLock, h = m === void 0 ? !0 : m, g = e.focusLock, _ = g === void 0 ? !0 : g, v = e.returnFocus, y = v === void 0 ? !0 : v, b = e.inert, x = e.allowPinchZoom, S = e.sideCar, C = e.className, T = e.shouldIgnore, D = e.preventScrollOnFocus, O = e.style, k = e.as, ee = e.gapMode, A = E(e, [
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
	]), te = S, ne = w(w({}, r), {
		as: k,
		style: O,
		sideCar: S,
		shards: u,
		allowPinchZoom: x,
		gapMode: ee,
		inert: b,
		enabled: p && h
	}), re = M.useCallback(function(e) {
		s(e);
	}, []), ie = M.useCallback(function() {
		s(null);
	}, []);
	return M.createElement(M.Fragment, null, M.createElement(Ni, {
		ref: t,
		sideCar: S,
		disabled: !(p && _),
		returnFocus: y,
		autoFocus: l,
		shards: u,
		crossFrame: d,
		onActivation: re,
		onDeactivation: ie,
		className: C,
		whiteList: T,
		lockProps: ne,
		focusOptions: D ? Ii : void 0,
		as: gi
	}, c), p && M.createElement(te, w({}, A, {
		sideCar: Pi,
		setLockProps: i,
		shards: u,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function Ri(e) {
	"@babel/helpers - typeof";
	return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ri(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function zi(e, t) {
	if (Ri(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Ri(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Bi(e) {
	var t = zi(e, "string");
	return Ri(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Vi(e, t, n) {
	return (t = Bi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Hi(e, t) {
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
				return /* @__PURE__ */ M.createElement(r, this.props);
			}, t;
		}(M.PureComponent);
		return Vi(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Ui = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Wi = function(e) {
	return Array.isArray(e) ? e : [e];
}, Gi = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Ki = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, qi = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Ji = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Yi = function(e) {
	return e.hasAttribute("inert");
}, Xi = function(e, t) {
	return !e || Ji(e) || !Ki(e) && !Yi(e) && t(qi(e));
}, Zi = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Xi(t, Zi.bind(void 0, e));
	return e.set(t, r), r;
}, Qi = function(e, t) {
	return e && !Ji(e) ? aa(e) ? t(qi(e)) : !1 : !0;
}, $i = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Qi(t, $i.bind(void 0, e));
	return e.set(t, r), r;
}, ea = function(e) {
	return e.dataset;
}, ta = function(e) {
	return e.tagName === "BUTTON";
}, na = function(e) {
	return e.tagName === "INPUT";
}, ra = function(e) {
	return na(e) && e.type === "radio";
}, ia = function(e) {
	return !((na(e) || ta(e)) && (e.type === "hidden" || e.disabled));
}, aa = function(e) {
	var t = e.getAttribute(xi);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, oa = function(e) {
	return !!(e && ea(e)?.focusGuard);
}, sa = function(e) {
	return !oa(e);
}, ca = function(e) {
	return !!e;
}, la = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, ua = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, da = function(e, t, n) {
	return Ui(e).map(function(e, t) {
		var r = ua(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(la);
}, fa = [
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
].join(","), pa = `${fa}, [data-focus-guard]`, ma = function(e, t) {
	return Ui((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? pa : fa) ? [n] : [], ma(n));
	}, []);
}, ha = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? ga([e.contentDocument.body], t) : [e];
}, ga = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = ma(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return ha(e, t);
		}));
		return e.concat(a, n.parentNode ? Ui(n.parentNode.querySelectorAll(fa)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, _a = function(e) {
	return Ui(e.querySelectorAll(`[${bi}]`)).map(function(e) {
		return ga([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, va = function(e, t) {
	return Ui(e).filter(function(e) {
		return Zi(t, e);
	}).filter(function(e) {
		return ia(e);
	});
}, ya = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Ui(e).filter(function(e) {
		return $i(t, e);
	});
}, ba = function(e, t, n) {
	return da(va(ga(e, n), t), !0, n);
}, xa = function(e, t) {
	return da(va(ga(e), t), !1);
}, Sa = function(e, t) {
	return va(_a(e), t);
}, Ca = function(e, t) {
	return e.shadowRoot ? Ca(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ui(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Ca(n, t) : !1;
		}
		return Ca(e, t);
	});
}, wa = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Ta = function(e) {
	return e.parentNode ? Ta(e.parentNode) : e;
}, Ea = function(e) {
	return Wi(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(_i);
		return e.push.apply(e, n ? wa(Ui(Ta(t).querySelectorAll(`[${_i}="${n}"]:not([${vi}="disabled"])`))) : [t]), e;
	}, []);
}, Da = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Oa = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? Oa(t.shadowRoot) : t instanceof HTMLIFrameElement && Da(function() {
			return t.contentWindow.document;
		}) ? Oa(t.contentWindow.document) : t;
	}
}, ka = function(e, t) {
	return e === t;
}, Aa = function(e, t) {
	return !!Ui(e.querySelectorAll("iframe")).some(function(e) {
		return ka(e, t);
	});
}, ja = function(e, t) {
	return t === void 0 && (t = Oa(Gi(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Ea(e).some(function(e) {
		return Ca(e, t) || Aa(e, t);
	});
}, Ma = function(e) {
	e === void 0 && (e = document);
	var t = Oa(e);
	return t ? Ui(e.querySelectorAll(`[${yi}]`)).some(function(e) {
		return Ca(e, t);
	}) : !1;
}, Na = function(e, t) {
	return t.filter(ra).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Pa = function(e, t) {
	return ra(e) && e.name ? Na(e, t) : e;
}, Fa = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Pa(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Ia = function(e) {
	return e[0] && e.length > 1 ? Pa(e[0], e) : e[0];
}, La = function(e, t) {
	return e.indexOf(Pa(t, e));
}, Ra = "NEW_FOCUS", za = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = oa(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Ra : d;
		if (d === -1) return Ra;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Fa(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = La(e, t[0]), C = La(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Ba = function(e) {
	return function(t) {
		var n = ea(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Va = function(e, t, n) {
	var r = ya(e.map(function(e) {
		return e.node;
	}).filter(Ba(n)));
	return r && r.length ? Ia(r) : Ia(ya(t));
}, Ha = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Ha(e.parentNode.host || e.parentNode, t), t;
}, Ua = function(e, t) {
	for (var n = Ha(e), r = Ha(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Wa = function(e, t, n) {
	var r = Wi(e), i = Wi(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Ua(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Ua(a, e);
			t && (o = !o || Ca(t, o) ? t : Ua(t, o));
		});
	}), o;
}, Ga = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(Sa(n, t));
	}, []);
}, Ka = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(ca);
}, qa = function(e, t) {
	var n = Oa(Wi(e).length > 0 ? document : Gi(e).ownerDocument), r = Ea(e).filter(sa), i = Wa(n || e, e, r), a = /* @__PURE__ */ new Map(), o = xa(r, a), s = o.filter(function(e) {
		var t = e.node;
		return sa(t);
	});
	if (s[0]) {
		var c = xa([i], a).map(function(e) {
			return e.node;
		}), l = Ka(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = za(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Va(o, d, Ga(r, a)) || Va(o, u, Ga(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Ja = function(e) {
	var t = Ea(e).filter(sa), n = da(ga([Wa(e, e, t)], !0), !0, !0), r = ga(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: oa(t)
		};
	});
}, Ya = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Xa = 0, Za = !1, Qa = function(e, t, n) {
	n === void 0 && (n = {});
	var r = qa(e, t);
	if (!Za && r) {
		if (Xa > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Za = !0, setTimeout(function() {
				Za = !1;
			}, 1);
			return;
		}
		Xa++, Ya(r.node, n.focusOptions), Xa--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function $a(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var eo = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: $a(n),
		parent: $a(n.parentElement),
		left: $a(n.previousElementSibling),
		right: $a(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: $a(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, to = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = ba([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, no = function(e) {
	var t = eo(e);
	return function() {
		return to(t);
	};
}, ro = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Wi(t);
	if (r.every(function(t) {
		return !Ca(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? ba(r, /* @__PURE__ */ new Map()) : xa(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, io = function(e, t) {
	var n = t ? ba(Wi(e), /* @__PURE__ */ new Map()) : xa(Wi(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, ao = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, oo = function(e, t, n) {
	t === void 0 && (t = {});
	var r = ao(t), i = ro(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Ya(a.node, r.focusOptions);
	}
}, so = function(e, t) {
	t === void 0 && (t = {}), oo(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, co = function(e, t) {
	t === void 0 && (t = {}), oo(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, lo = function(e, t, n) {
	var r = io(e, t.onlyTabbable ?? !0)[n];
	r && Ya(r.node, t.focusOptions);
}, uo = function(e, t) {
	t === void 0 && (t = {}), lo(e, t, "first");
}, fo = function(e, t) {
	t === void 0 && (t = {}), lo(e, t, "last");
}, po = function() {
	return document && document.activeElement === document.body;
}, mo = function() {
	return po() || Ma();
}, ho = null, go = null, _o = function() {
	return null;
}, vo = null, yo = !1, bo = !1, xo = function() {
	return !0;
}, So = function(e) {
	return (ho.whiteList || xo)(e);
}, Co = function(e, t) {
	vo = {
		observerNode: e,
		portaledElement: t
	};
}, wo = function(e) {
	return vo && vo.portaledElement === e;
};
function To(e, t, n, r) {
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
var Eo = function(e) {
	return e ? !!yo : yo === "meanwhile";
}, Do = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Oo = function(e, t) {
	return t.some(function(t) {
		return Do(e, t, t);
	});
}, ko = function(e) {
	return xa(e, /* @__PURE__ */ new Map());
}, Ao = function(e) {
	return !ko([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, jo = function() {
	var e = !1;
	if (ho) {
		var t = ho, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || vo && vo.portaledElement;
		if (po() && go && go !== document.body && (!document.body.contains(go) || Ao(go))) {
			var u = _o();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Mi).filter(Boolean));
			if ((!d || So(d)) && (r || function() {
				if (!Eo(o) || !c || !go || bo) return !1;
				var e = ko(f), t = e.findIndex(function(e) {
					return e.node === go;
				});
				return t === 0 || t === e.length - 1;
			}() || !mo() || !go && i) && (l && !(ja(f) || d && Oo(d, f) || wo(d, l)) && (document && !go && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = Qa(f, go, { focusOptions: s }), vo = {})), go = document && document.activeElement, go !== document.body && (_o = no(go)), yo = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Ja(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), To(h, m.length, 1, m), To(h, -1, -1, m));
			}
		}
	}
	return e;
}, Mo = function(e) {
	jo() && e && (e.stopPropagation(), e.preventDefault());
}, No = function() {
	return ji(jo);
}, Po = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || Co(n, t);
}, Fo = function() {
	return null;
}, Io = function(e) {
	var t = e.children;
	return /* @__PURE__ */ M.createElement("div", {
		onBlur: No,
		onFocus: Po
	}, t);
};
Io.propTypes = {};
var Lo = function() {
	bo = !0;
}, Ro = function() {
	bo = !1, yo = "just", ji(function() {
		yo = "meanwhile";
	});
}, zo = function() {
	document.addEventListener("focusin", Mo), document.addEventListener("focusout", No), window.addEventListener("focus", Lo), window.addEventListener("blur", Ro);
}, Bo = function() {
	document.removeEventListener("focusin", Mo), document.removeEventListener("focusout", No), window.removeEventListener("focus", Lo), window.removeEventListener("blur", Ro);
};
function Vo(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Ho = {
	moveFocusInside: Qa,
	focusInside: ja,
	focusNextElement: so,
	focusPrevElement: co,
	focusFirstElement: uo,
	focusLastElement: fo,
	captureFocusRestore: no
};
function Uo(e) {
	var t = e.slice(-1)[0];
	t && !ho && zo();
	var n = ho, r = n && t && t.id === n.id;
	ho = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (go = null, (!r || n.observed !== t.observed) && t.onActivation(Ho), jo(!0), ji(jo)) : (Bo(), go = null);
}
wi.assignSyncMedium(Po), Ti.assignMedium(No), Ei.assignMedium(function(e) {
	return e(Ho);
}), pi(Di, Hi(Vo, Uo)(Fo));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Wo, Go = function() {
	if (Wo) return Wo;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Ko() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Go();
	return t && e.setAttribute("nonce", t), e;
}
function qo(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Jo(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Yo = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ko()) && (qo(t, n), Jo(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Xo = function() {
	var e = Yo();
	return function(t, n) {
		M.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Zo = function() {
	var e = Xo();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Qo = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, $o = function(e) {
	return parseInt(e || "", 10) || 0;
}, es = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		$o(n),
		$o(r),
		$o(i)
	];
}, ts = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Qo;
	var t = es(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ns = Zo(), rs = "data-scroll-locked", is = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ti} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${rs}] {
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
  
  .${$r} {
    right: ${s}px ${r};
  }
  
  .${ei} {
    margin-right: ${s}px ${r};
  }
  
  .${$r} .${$r} {
    right: 0 ${r};
  }
  
  .${ei} .${ei} {
    margin-right: 0 ${r};
  }
  
  body[${rs}] {
    ${ni}: ${s}px;
  }
`;
}, as = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, os = function() {
	M.useEffect(function() {
		return document.body.setAttribute(rs, (as() + 1).toString()), function() {
			var e = as() - 1;
			e <= 0 ? document.body.removeAttribute(rs) : document.body.setAttribute(rs, e.toString());
		};
	}, []);
}, ss = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	os();
	var a = M.useMemo(function() {
		return ts(i);
	}, [i]);
	return M.createElement(ns, { styles: is(a, !t, i, n ? "" : "!important") });
}, cs = !1;
if (typeof window < "u") try {
	var ls = Object.defineProperty({}, "passive", { get: function() {
		return cs = !0, !0;
	} });
	window.addEventListener("test", ls, ls), window.removeEventListener("test", ls, ls);
} catch {
	cs = !1;
}
var us = cs ? { passive: !1 } : !1, ds = function(e) {
	return e.tagName === "TEXTAREA";
}, fs = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ds(e) && n[t] === "visible");
}, ps = function(e) {
	return fs(e, "overflowY");
}, ms = function(e) {
	return fs(e, "overflowX");
}, hs = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), vs(e, r)) {
			var i = ys(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, gs = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, _s = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, vs = function(e, t) {
	return e === "v" ? ps(t) : ms(t);
}, ys = function(e, t) {
	return e === "v" ? gs(t) : _s(t);
}, bs = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, xs = function(e, t, n, r, i) {
	var a = bs(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ys(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && vs(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Ss = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Cs = function(e) {
	return [e.deltaX, e.deltaY];
}, ws = function(e) {
	return e && "current" in e ? e.current : e;
}, Ts = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Es = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ds = 0, Os = [];
function ks(e) {
	var t = M.useRef([]), n = M.useRef([0, 0]), r = M.useRef(), i = M.useState(Ds++)[0], a = M.useState(Zo)[0], o = M.useRef(e);
	M.useEffect(function() {
		o.current = e;
	}, [e]), M.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = _([e.lockRef.current], (e.shards || []).map(ws), !0).filter(Boolean);
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
	var s = M.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Ss(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = hs(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = hs(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return xs(h, t, e, h === "h" ? s : c, !0);
	}, []), c = M.useCallback(function(e) {
		var n = e;
		if (!(!Os.length || Os[Os.length - 1] !== a)) {
			var r = "deltaY" in n ? Cs(n) : Ss(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Ts(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(ws).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = M.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: As(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = M.useCallback(function(e) {
		n.current = Ss(e), r.current = void 0;
	}, []), d = M.useCallback(function(t) {
		l(t.type, Cs(t), t.target, s(t, e.lockRef.current));
	}, []), f = M.useCallback(function(t) {
		l(t.type, Ss(t), t.target, s(t, e.lockRef.current));
	}, []);
	M.useEffect(function() {
		return Os.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, us), document.addEventListener("touchmove", c, us), document.addEventListener("touchstart", u, us), function() {
			Os = Os.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, us), document.removeEventListener("touchmove", c, us), document.removeEventListener("touchstart", u, us);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return M.createElement(M.Fragment, null, m ? M.createElement(a, { styles: Es(i) }) : null, p ? M.createElement(ss, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function As(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
pi(mi, ks);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var js = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Ms = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Ps = {}, Fs = 0, Is = function(e) {
	return e && (e.host || Is(e.parentNode));
}, Ls = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Is(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Rs = function(e, t, n, r) {
	var i = Ls(t, Array.isArray(e) ? e : [e]);
	Ps[n] || (Ps[n] = /* @__PURE__ */ new WeakMap());
	var a = Ps[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Ms.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Ms.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Ns.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Fs++, function() {
		o.forEach(function(e) {
			var t = Ms.get(e) - 1, i = a.get(e) - 1;
			Ms.set(e, t), a.set(e, i), t || (Ns.has(e) || e.removeAttribute(r), Ns.delete(e)), i || e.removeAttribute(n);
		}), Fs--, Fs || (Ms = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Ps = {});
	};
}, zs = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || js(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Rs(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Bs = Zo(), Vs = "\n [" + Fi + "] {\n   pointer-events: none !important;\n }\n", Hs = function() {
	return M.createElement(Bs, { styles: Vs });
}, Us = function(e) {
	return "current" in e ? e.current : e;
};
function Ws(t) {
	var n = t.setLockProps, r = t.onEscapeKey, i = t.onClickOutside, a = t.shards, o = t.onActivation, s = t.onDeactivation, c = t.noIsolation, l = t.activeNode, u = (0, M.useRef)(null), d = (0, M.useRef)(0);
	return M.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && r && r(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === u.current || e instanceof MouseEvent && e.button !== 0 || a && a.map(Us).some(function(t) {
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
	]), (0, M.useEffect)(function() {
		if (l) return o && o(l), function() {
			s && s();
		};
	}, [!!l]), (0, M.useEffect)(function() {
		if (!(c || !l)) return zs(e([l], (a || []).map(Us)), l.ownerDocument.body, Fi);
	}, [l, c]), (0, M.useEffect)(function() {
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
	}, []), M.createElement(Hs, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var Gs = pi(Pi, Ws), Ks = function(e) {
	return M.createElement(Gs, w({}, e));
}, qs = M.forwardRef(function(e, t) {
	return M.createElement(Li, w({}, e, {
		ref: t,
		sideCar: Ks
	}));
}), Js = class extends M.Component {
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
		return this.rootElement ? /* @__PURE__ */ Xr.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function Ys(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, M.useState)(e), s = (0, M.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, M.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, M.useCallback)(() => {
			(a ? c : s)();
		}, [
			a,
			s,
			c
		])
	];
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Dropdown/index.js
var Xs = /* @__PURE__ */ M.forwardRef(({ show: e, autoClose: t, onToggle: n, variant: r, className: i, ...a }, o) => {
	let [s, c] = M.useState(e), l = (e) => t === !1 ? e === "click" : t === "inside" ? e !== "rootClose" : t === "outside" ? e !== "select" : !0, u = (e, t, r) => {
		if (e) {
			c(!0), n?.(e, t, r);
			return;
		}
		let { source: i } = { ...r };
		t.currentTarget === document && (i !== "keydown" || t.key === "Escape") && (i = "rootClose"), l(i) && (c(!1), n?.(e, t, r));
	};
	return /* @__PURE__ */ M.createElement(ht, {
		className: (0, P.default)("pgn__dropdown", `pgn__dropdown-${r}`, i),
		"data-testid": "dropdown",
		onToggle: u,
		ref: o,
		show: s,
		...a
	});
});
Xs.propTypes = {
	autoClose: N.default.oneOfType([N.default.string, N.default.bool]),
	className: N.default.string,
	onToggle: N.default.func,
	show: N.default.bool,
	variant: N.default.oneOf(["light", "dark"])
}, Xs.defaultProps = {
	autoClose: !0,
	className: "",
	onToggle: void 0,
	show: !1,
	variant: "light"
};
var Zs = /* @__PURE__ */ M.forwardRef(({ as: e, bsPrefix: t, ...n }, r) => {
	let i = e === ce ? "pgn__dropdown-toggle-iconbutton" : t;
	return /* @__PURE__ */ M.createElement(lt, {
		...n,
		as: e,
		bsPrefix: i,
		ref: r
	});
});
Zs.propTypes = {
	as: N.default.elementType,
	bsPrefix: N.default.string,
	id: N.default.oneOfType([N.default.string, N.default.number]).isRequired
}, Zs.defaultProps = {
	as: O,
	bsPrefix: "dropdown-toggle"
}, Xs.Item = /* @__PURE__ */ M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ M.createElement(tt, {
	className: (0, P.default)(e, "pgn__dropdown-item"),
	ref: n,
	...t
})), Xs.Item.propTypes = { className: N.default.string }, Xs.Item.defaultProps = { className: void 0 }, Xs.Toggle = Zs, Xs.Menu = st, Xs.Header = ht.Header, Xs.Divider = ht.Divider;
//#endregion
//#region node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var Qs = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, $s = typeof window < "u" && window.document && window.document.createElement ? M.useLayoutEffect : M.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function ec(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
		!i(o) || !a(o) || (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? o.removeAttribute(e) : o.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function tc(e) {
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
			var r = t.elements[e], o = t.attributes[e] || {}, s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!i(r) || !a(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var nc = /* @__PURE__ */ D({ defaultModifiers: [
	r,
	xe,
	ye,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: ec,
		effect: tc,
		requires: ["computeStyles"]
	},
	k,
	y,
	ve,
	b,
	be
] }), rc = /* @__PURE__ */ me((/* @__PURE__ */ le(((e, t) => {
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
})))()), ic = [], ac = function(e, t, n) {
	n === void 0 && (n = {});
	var r = M.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || ic
	}, a = M.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = M.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				Xr.flushSync(function() {
					s({
						styles: Qs(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: Qs(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = M.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, rc.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = M.useRef();
	return $s(function() {
		u.current && u.current.setOptions(l);
	}, [l]), $s(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || nc)(e, t, l);
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
function oc({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, M.useState)(null), { styles: s, attributes: c } = ac(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /* @__PURE__ */ M.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
oc.defaultProps = { target: void 0 }, oc.propTypes = {
	children: N.default.node,
	target: N.default.shape({ current: N.default.shape({}) }),
	strategy: N.default.oneOf(["absolute", "fixed"]),
	placement: N.default.oneOf([
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
	modifiers: N.default.arrayOf(N.default.shape({}))
}, oc.defaultProps = {
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
var sc = {
	right: [-2, 10],
	left: [-2, 10]
};
function cc({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? Js : M.Fragment, u = sc[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ M.createElement(Qr, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ M.createElement(l, null, /* @__PURE__ */ M.createElement(oc, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ M.createElement(qs, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /* @__PURE__ */ M.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /* @__PURE__ */ M.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
cc.propTypes = {
	children: N.default.node.isRequired,
	onClose: N.default.func.isRequired,
	isOpen: N.default.bool.isRequired,
	isBlocking: N.default.bool,
	withPortal: N.default.bool,
	positionRef: N.default.oneOfType([N.default.func, N.default.shape({ current: N.default.shape({}) })]),
	placement: oc.propTypes.placement,
	hasArrow: N.default.bool
}, cc.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var z = d(), lc = ["top", "bottom"], uc = /* @__PURE__ */ M.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, M.useState)(!1), c = M.useRef(), l = a || c;
	return (0, M.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ M.createElement("div", {
		className: (0, P.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
uc.propTypes = {
	children: N.default.node.isRequired,
	position: N.default.oneOf(lc),
	offset: N.default.oneOfType([N.default.number, N.default.string]),
	className: N.default.string
}, uc.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function dc() {
	return (dc = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function fc(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function pc(e) {
	var t = (0, M.useRef)(e), n = (0, M.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var mc = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, hc = function(e) {
	return "touches" in e;
}, gc = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, _c = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = hc(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: mc((i.pageX - (r.left + gc(e).pageXOffset)) / r.width),
		top: mc((i.pageY - (r.top + gc(e).pageYOffset)) / r.height)
	};
}, vc = function(e) {
	!hc(e) && e.preventDefault();
}, yc = M.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = fc(e, ["onMove", "onKey"]), i = (0, M.useRef)(null), a = pc(t), o = pc(n), s = (0, M.useRef)(null), c = (0, M.useRef)(!1), l = (0, M.useMemo)(function() {
		var e = function(e) {
			vc(e), (hc(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(_c(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = gc(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (vc(t), !function(e, t) {
					return t && !hc(e);
				}(t, c.current) && r)) {
					if (hc(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(_c(r, t, s.current)), n(!0);
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
	return (0, M.useEffect)(function() {
		return f;
	}, [f]), M.createElement("div", dc({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), bc = function(e) {
	return e.filter(Boolean).join(" ");
}, xc = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = bc(["react-colorful__pointer", e.className]);
	return M.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, M.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, Sc = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var Cc = function(e) {
	return jc(wc(e));
}, wc = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? Sc(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? Sc(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, Tc = function(e) {
	return Ac(Oc(e));
}, Ec = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: Sc(e.h),
		s: Sc(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: Sc(i / 2),
		a: Sc(r, 2)
	};
}, Dc = function(e) {
	var t = Ec(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Oc = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: Sc(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: Sc(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: Sc(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: Sc(i, 2)
	};
}, kc = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, Ac = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? kc(Sc(255 * i)) : "";
	return "#" + kc(t) + kc(n) + kc(r) + a;
}, jc = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: Sc(60 * (s < 0 ? s + 6 : s)),
		s: Sc(a ? o / a * 100 : 0),
		v: Sc(a / 255 * 100),
		a: i
	};
}, Mc = M.memo(function(e) {
	var t = e.hue, n = e.onChange, r = bc(["react-colorful__hue", e.className]);
	return M.createElement("div", { className: r }, M.createElement(yc, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: mc(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": Sc(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, M.createElement(xc, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: Dc({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), Nc = M.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: Dc({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return M.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, M.createElement(yc, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: mc(t.s + 100 * e.left, 0, 100),
				v: mc(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + Sc(t.s) + "%, Brightness " + Sc(t.v) + "%"
	}, M.createElement(xc, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: Dc(t)
	})));
}), Pc = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, Fc = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || Pc(wc(e), wc(t));
};
function Ic(e, t, n) {
	var r = pc(n), i = (0, M.useState)(function() {
		return e.toHsva(t);
	}), a = i[0], o = i[1], s = (0, M.useRef)({
		color: t,
		hsva: a
	});
	return (0, M.useEffect)(function() {
		if (!e.equal(t, s.current.color)) {
			var n = e.toHsva(t);
			s.current = {
				hsva: n,
				color: t
			}, o(n);
		}
	}, [t, e]), (0, M.useEffect)(function() {
		var t;
		Pc(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
			hsva: a,
			color: t
		}, r(t));
	}, [
		a,
		e,
		r
	]), [a, (0, M.useCallback)(function(e) {
		o(function(t) {
			return Object.assign({}, t, e);
		});
	}, [])];
}
var Lc, Rc = typeof window < "u" ? M.useLayoutEffect : M.useEffect, zc = function() {
	return Lc || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, Bc = /* @__PURE__ */ new Map(), Vc = function(e) {
	Rc(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !Bc.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", Bc.set(t, n);
			var r = zc();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, Hc = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = fc(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, M.useRef)(null);
	Vc(s);
	var c = Ic(n, i, a), l = c[0], u = c[1], d = bc(["react-colorful", t]);
	return M.createElement("div", dc({}, o, {
		ref: s,
		className: d
	}), M.createElement(Nc, {
		hsva: l,
		onChange: u
	}), M.createElement(Mc, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, Uc = {
	defaultColor: "000",
	toHsva: Cc,
	fromHsva: function(e) {
		return Tc({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: Fc
}, Wc = function(e) {
	return M.createElement(Hc, dc({}, e, { colorModel: Uc }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function Gc({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = Ys(!1), [s, c] = M.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = M.useState(() => e === "" || l(u(e))), [p, m] = M.useState(() => e === "" ? "" : u(e)), [h, g] = M.useState(() => {
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
	return /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement("span", { className: "d-flex" }, /* @__PURE__ */ M.createElement(ie, {
		placement: "top",
		overlay: /* @__PURE__ */ M.createElement(pe, { id: "color-picker-tooltip" }, "Color picker")
	}, /* @__PURE__ */ M.createElement(O, {
		ref: c,
		className: (0, P.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /* @__PURE__ */ M.createElement(cc, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ M.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ M.createElement(Wc, {
		color: h,
		onChange: _
	}), /* @__PURE__ */ M.createElement(R.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /* @__PURE__ */ M.createElement("div", null, /* @__PURE__ */ M.createElement(R.Label, { className: "pgn__hex-label" }, "Hex"), /* @__PURE__ */ M.createElement(R.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /* @__PURE__ */ M.createElement(R.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
Gc.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, Gc.propTypes = {
	color: N.default.string,
	setColor: N.default.func.isRequired,
	className: N.default.string,
	size: N.default.oneOf(["sm", "md"])
};
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var Kc = function(e) {
	return qc(e) && !Jc(e);
};
function qc(e) {
	return !!e && typeof e == "object";
}
function Jc(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Xc(e);
}
var Yc = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Xc(e) {
	return e.$$typeof === Yc;
}
function Zc(e) {
	return Array.isArray(e) ? [] : {};
}
function Qc(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? tl(Zc(e), e, t) : e;
}
function $c(e, t, n) {
	return e.concat(t).map(function(e) {
		return Qc(e, n);
	});
}
function el(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Qc(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Qc(t[i], n) : r[i] = tl(e[i], t[i], n);
	}), r;
}
function tl(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || $c, n.isMergeableObject = n.isMergeableObject || Kc;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : el(e, t, n) : Qc(t, n);
}
tl.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return tl(e, n, t);
	}, {});
};
var nl = tl, rl = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, il = typeof self == "object" && self && self.Object === Object && self, al = rl || il || Function("return this")(), ol = al.Symbol, sl = Object.prototype, cl = sl.hasOwnProperty, ll = sl.toString, ul = ol ? ol.toStringTag : void 0;
function dl(e) {
	var t = cl.call(e, ul), n = e[ul];
	try {
		e[ul] = void 0;
		var r = !0;
	} catch {}
	var i = ll.call(e);
	return r && (t ? e[ul] = n : delete e[ul]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var fl = Object.prototype.toString;
function pl(e) {
	return fl.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var ml = "[object Null]", hl = "[object Undefined]", gl = ol ? ol.toStringTag : void 0;
function _l(e) {
	return e == null ? e === void 0 ? hl : ml : gl && gl in Object(e) ? dl(e) : pl(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function vl(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var yl = vl(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function bl(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var xl = "[object Object]", Sl = Function.prototype, Cl = Object.prototype, wl = Sl.toString, Tl = Cl.hasOwnProperty, El = wl.call(Object);
function Dl(e) {
	if (!bl(e) || _l(e) != xl) return !1;
	var t = yl(e);
	if (t === null) return !0;
	var n = Tl.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && wl.call(n) == El;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function Ol() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function kl(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function Al(e, t) {
	for (var n = e.length; n--;) if (kl(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var jl = Array.prototype.splice;
function Ml(e) {
	var t = this.__data__, n = Al(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : jl.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function Nl(e) {
	var t = this.__data__, n = Al(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function Pl(e) {
	return Al(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function Fl(e, t) {
	var n = this.__data__, r = Al(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function Il(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Il.prototype.clear = Ol, Il.prototype.delete = Ml, Il.prototype.get = Nl, Il.prototype.has = Pl, Il.prototype.set = Fl;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function Ll() {
	this.__data__ = new Il(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Rl(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function zl(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Bl(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Vl(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Hl = "[object AsyncFunction]", Ul = "[object Function]", Wl = "[object GeneratorFunction]", Gl = "[object Proxy]";
function Kl(e) {
	if (!Vl(e)) return !1;
	var t = _l(e);
	return t == Ul || t == Wl || t == Hl || t == Gl;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var ql = al["__core-js_shared__"], Jl = function() {
	var e = /[^.]+$/.exec(ql && ql.keys && ql.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Yl(e) {
	return !!Jl && Jl in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Xl = Function.prototype.toString;
function Zl(e) {
	if (e != null) {
		try {
			return Xl.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var Ql = /[\\^$.*+?()[\]{}|]/g, $l = /^\[object .+?Constructor\]$/, eu = Function.prototype, tu = Object.prototype, nu = eu.toString, ru = tu.hasOwnProperty, iu = RegExp("^" + nu.call(ru).replace(Ql, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function au(e) {
	return !Vl(e) || Yl(e) ? !1 : (Kl(e) ? iu : $l).test(Zl(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function ou(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function su(e, t) {
	var n = ou(e, t);
	return au(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var cu = su(al, "Map"), lu = su(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function uu() {
	this.__data__ = lu ? lu(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function du(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var fu = "__lodash_hash_undefined__", pu = Object.prototype.hasOwnProperty;
function mu(e) {
	var t = this.__data__;
	if (lu) {
		var n = t[e];
		return n === fu ? void 0 : n;
	}
	return pu.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var hu = Object.prototype.hasOwnProperty;
function gu(e) {
	var t = this.__data__;
	return lu ? t[e] !== void 0 : hu.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var _u = "__lodash_hash_undefined__";
function vu(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = lu && t === void 0 ? _u : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function yu(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
yu.prototype.clear = uu, yu.prototype.delete = du, yu.prototype.get = mu, yu.prototype.has = gu, yu.prototype.set = vu;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function bu() {
	this.size = 0, this.__data__ = {
		hash: new yu(),
		map: new (cu || Il)(),
		string: new yu()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function xu(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function Su(e, t) {
	var n = e.__data__;
	return xu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function Cu(e) {
	var t = Su(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function wu(e) {
	return Su(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function Tu(e) {
	return Su(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function Eu(e, t) {
	var n = Su(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function Du(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Du.prototype.clear = bu, Du.prototype.delete = Cu, Du.prototype.get = wu, Du.prototype.has = Tu, Du.prototype.set = Eu;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var Ou = 200;
function ku(e, t) {
	var n = this.__data__;
	if (n instanceof Il) {
		var r = n.__data__;
		if (!cu || r.length < Ou - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Du(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function Au(e) {
	this.size = (this.__data__ = new Il(e)).size;
}
Au.prototype.clear = Ll, Au.prototype.delete = Rl, Au.prototype.get = zl, Au.prototype.has = Bl, Au.prototype.set = ku;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function ju(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var Mu = function() {
	try {
		var e = su(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function Nu(e, t, n) {
	t == "__proto__" && Mu ? Mu(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var Pu = Object.prototype.hasOwnProperty;
function Fu(e, t, n) {
	var r = e[t];
	(!(Pu.call(e, t) && kl(r, n)) || n === void 0 && !(t in e)) && Nu(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function Iu(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Nu(n, s, c) : Fu(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function Lu(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Ru = "[object Arguments]";
function zu(e) {
	return bl(e) && _l(e) == Ru;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var Bu = Object.prototype, Vu = Bu.hasOwnProperty, Hu = Bu.propertyIsEnumerable, Uu = zu(function() {
	return arguments;
}()) ? zu : function(e) {
	return bl(e) && Vu.call(e, "callee") && !Hu.call(e, "callee");
}, Wu = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Gu() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Ku = typeof exports == "object" && exports && !exports.nodeType && exports, qu = Ku && typeof module == "object" && module && !module.nodeType && module, Ju = qu && qu.exports === Ku ? al.Buffer : void 0, Yu = (Ju ? Ju.isBuffer : void 0) || Gu, Xu = 9007199254740991, Zu = /^(?:0|[1-9]\d*)$/;
function Qu(e, t) {
	var n = typeof e;
	return t ??= Xu, !!t && (n == "number" || n != "symbol" && Zu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var $u = 9007199254740991;
function ed(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $u;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var td = "[object Arguments]", nd = "[object Array]", rd = "[object Boolean]", id = "[object Date]", ad = "[object Error]", od = "[object Function]", sd = "[object Map]", cd = "[object Number]", ld = "[object Object]", ud = "[object RegExp]", dd = "[object Set]", fd = "[object String]", pd = "[object WeakMap]", md = "[object ArrayBuffer]", hd = "[object DataView]", gd = "[object Float32Array]", _d = "[object Float64Array]", vd = "[object Int8Array]", yd = "[object Int16Array]", bd = "[object Int32Array]", xd = "[object Uint8Array]", Sd = "[object Uint8ClampedArray]", Cd = "[object Uint16Array]", wd = "[object Uint32Array]", B = {};
B[gd] = B[_d] = B[vd] = B[yd] = B[bd] = B[xd] = B[Sd] = B[Cd] = B[wd] = !0, B[td] = B[nd] = B[md] = B[rd] = B[hd] = B[id] = B[ad] = B[od] = B[sd] = B[cd] = B[ld] = B[ud] = B[dd] = B[fd] = B[pd] = !1;
function Td(e) {
	return bl(e) && ed(e.length) && !!B[_l(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function Ed(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var Dd = typeof exports == "object" && exports && !exports.nodeType && exports, Od = Dd && typeof module == "object" && module && !module.nodeType && module, kd = Od && Od.exports === Dd && rl.process, Ad = function() {
	try {
		return Od && Od.require && Od.require("util").types || kd && kd.binding && kd.binding("util");
	} catch {}
}(), jd = Ad && Ad.isTypedArray, Md = jd ? Ed(jd) : Td, Nd = Object.prototype.hasOwnProperty;
function Pd(e, t) {
	var n = Wu(e), r = !n && Uu(e), i = !n && !r && Yu(e), a = !n && !r && !i && Md(e), o = n || r || i || a, s = o ? Lu(e.length, String) : [], c = s.length;
	for (var l in e) (t || Nd.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Qu(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var Fd = Object.prototype;
function Id(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Fd);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var Ld = vl(Object.keys, Object), Rd = Object.prototype.hasOwnProperty;
function zd(e) {
	if (!Id(e)) return Ld(e);
	var t = [];
	for (var n in Object(e)) Rd.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Bd(e) {
	return e != null && ed(e.length) && !Kl(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Vd(e) {
	return Bd(e) ? Pd(e) : zd(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Hd(e, t) {
	return e && Iu(t, Vd(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Ud(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Wd = Object.prototype.hasOwnProperty;
function Gd(e) {
	if (!Vl(e)) return Ud(e);
	var t = Id(e), n = [];
	for (var r in e) r == "constructor" && (t || !Wd.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Kd(e) {
	return Bd(e) ? Pd(e, !0) : Gd(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function qd(e, t) {
	return e && Iu(t, Kd(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Jd = typeof exports == "object" && exports && !exports.nodeType && exports, Yd = Jd && typeof module == "object" && module && !module.nodeType && module, Xd = Yd && Yd.exports === Jd ? al.Buffer : void 0, Zd = Xd ? Xd.allocUnsafe : void 0;
function Qd(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Zd ? Zd(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function $d(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function ef(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function tf() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var nf = Object.prototype.propertyIsEnumerable, rf = Object.getOwnPropertySymbols, af = rf ? function(e) {
	return e == null ? [] : (e = Object(e), ef(rf(e), function(t) {
		return nf.call(e, t);
	}));
} : tf;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function of(e, t) {
	return Iu(e, af(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function sf(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var cf = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) sf(t, af(e)), e = yl(e);
	return t;
} : tf;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function lf(e, t) {
	return Iu(e, cf(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function uf(e, t, n) {
	var r = t(e);
	return Wu(e) ? r : sf(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function df(e) {
	return uf(e, Vd, af);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function ff(e) {
	return uf(e, Kd, cf);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var pf = su(al, "DataView"), mf = su(al, "Promise"), hf = su(al, "Set"), gf = su(al, "WeakMap"), _f = "[object Map]", vf = "[object Object]", yf = "[object Promise]", bf = "[object Set]", xf = "[object WeakMap]", Sf = "[object DataView]", Cf = Zl(pf), wf = Zl(cu), Tf = Zl(mf), Ef = Zl(hf), Df = Zl(gf), Of = _l;
(pf && Of(new pf(/* @__PURE__ */ new ArrayBuffer(1))) != Sf || cu && Of(new cu()) != _f || mf && Of(mf.resolve()) != yf || hf && Of(new hf()) != bf || gf && Of(new gf()) != xf) && (Of = function(e) {
	var t = _l(e), n = t == vf ? e.constructor : void 0, r = n ? Zl(n) : "";
	if (r) switch (r) {
		case Cf: return Sf;
		case wf: return _f;
		case Tf: return yf;
		case Ef: return bf;
		case Df: return xf;
	}
	return t;
});
var kf = Of, Af = Object.prototype.hasOwnProperty;
function jf(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Af.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var Mf = al.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function Nf(e) {
	var t = new e.constructor(e.byteLength);
	return new Mf(t).set(new Mf(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function Pf(e, t) {
	var n = t ? Nf(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var Ff = /\w*$/;
function If(e) {
	var t = new e.constructor(e.source, Ff.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var Lf = ol ? ol.prototype : void 0, Rf = Lf ? Lf.valueOf : void 0;
function zf(e) {
	return Rf ? Object(Rf.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Bf(e, t) {
	var n = t ? Nf(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var Vf = "[object Boolean]", Hf = "[object Date]", Uf = "[object Map]", Wf = "[object Number]", Gf = "[object RegExp]", Kf = "[object Set]", qf = "[object String]", Jf = "[object Symbol]", Yf = "[object ArrayBuffer]", Xf = "[object DataView]", Zf = "[object Float32Array]", Qf = "[object Float64Array]", $f = "[object Int8Array]", ep = "[object Int16Array]", tp = "[object Int32Array]", np = "[object Uint8Array]", rp = "[object Uint8ClampedArray]", ip = "[object Uint16Array]", ap = "[object Uint32Array]";
function op(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Yf: return Nf(e);
		case Vf:
		case Hf: return new r(+e);
		case Xf: return Pf(e, n);
		case Zf:
		case Qf:
		case $f:
		case ep:
		case tp:
		case np:
		case rp:
		case ip:
		case ap: return Bf(e, n);
		case Uf: return new r();
		case Wf:
		case qf: return new r(e);
		case Gf: return If(e);
		case Kf: return new r();
		case Jf: return zf(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var sp = Object.create, cp = function() {
	function e() {}
	return function(t) {
		if (!Vl(t)) return {};
		if (sp) return sp(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function lp(e) {
	return typeof e.constructor == "function" && !Id(e) ? cp(yl(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var up = "[object Map]";
function dp(e) {
	return bl(e) && kf(e) == up;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var fp = Ad && Ad.isMap, pp = fp ? Ed(fp) : dp, mp = "[object Set]";
function hp(e) {
	return bl(e) && kf(e) == mp;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var gp = Ad && Ad.isSet, _p = gp ? Ed(gp) : hp, vp = 1, yp = 2, bp = 4, xp = "[object Arguments]", Sp = "[object Array]", Cp = "[object Boolean]", wp = "[object Date]", Tp = "[object Error]", Ep = "[object Function]", Dp = "[object GeneratorFunction]", Op = "[object Map]", kp = "[object Number]", Ap = "[object Object]", jp = "[object RegExp]", Mp = "[object Set]", Np = "[object String]", Pp = "[object Symbol]", Fp = "[object WeakMap]", Ip = "[object ArrayBuffer]", Lp = "[object DataView]", Rp = "[object Float32Array]", zp = "[object Float64Array]", Bp = "[object Int8Array]", Vp = "[object Int16Array]", Hp = "[object Int32Array]", Up = "[object Uint8Array]", Wp = "[object Uint8ClampedArray]", Gp = "[object Uint16Array]", Kp = "[object Uint32Array]", V = {};
V[xp] = V[Sp] = V[Ip] = V[Lp] = V[Cp] = V[wp] = V[Rp] = V[zp] = V[Bp] = V[Vp] = V[Hp] = V[Op] = V[kp] = V[Ap] = V[jp] = V[Mp] = V[Np] = V[Pp] = V[Up] = V[Wp] = V[Gp] = V[Kp] = !0, V[Tp] = V[Ep] = V[Fp] = !1;
function qp(e, t, n, r, i, a) {
	var o, s = t & vp, c = t & yp, l = t & bp;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Vl(e)) return e;
	var u = Wu(e);
	if (u) {
		if (o = jf(e), !s) return $d(e, o);
	} else {
		var d = kf(e), f = d == Ep || d == Dp;
		if (Yu(e)) return Qd(e, s);
		if (d == Ap || d == xp || f && !i) {
			if (o = c || f ? {} : lp(e), !s) return c ? lf(e, qd(o, e)) : of(e, Hd(o, e));
		} else {
			if (!V[d]) return i ? e : {};
			o = op(e, d, s);
		}
	}
	a ||= new Au();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), _p(e) ? e.forEach(function(r) {
		o.add(qp(r, t, n, r, e, a));
	}) : pp(e) && e.forEach(function(r, i) {
		o.set(i, qp(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? ff : df : c ? Kd : Vd)(e);
	return ju(m || e, function(r, i) {
		m && (i = r, r = e[i]), Fu(o, i, qp(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Jp = 1, Yp = 4;
function Xp(e) {
	return qp(e, Jp | Yp);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Zp = /* @__PURE__ */ me((/* @__PURE__ */ le(((e, t) => {
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
})))()), Qp = !0;
function $p(e, t) {
	if (!Qp) {
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
var em = 4;
function tm(e) {
	return qp(e, em);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function nm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var rm = "[object Symbol]";
function im(e) {
	return typeof e == "symbol" || bl(e) && _l(e) == rm;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var am = "Expected a function";
function om(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(am);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (om.Cache || Du)(), n;
}
om.Cache = Du;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var sm = 500;
function cm(e) {
	var t = om(e, function(e) {
		return n.size === sm && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var lm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, um = /\\(\\)?/g, dm = cm(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(lm, function(e, n, r, i) {
		t.push(r ? i.replace(um, "$1") : n || e);
	}), t;
}), fm = Infinity;
function pm(e) {
	if (typeof e == "string" || im(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -fm ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var mm = Infinity, hm = ol ? ol.prototype : void 0, gm = hm ? hm.toString : void 0;
function _m(e) {
	if (typeof e == "string") return e;
	if (Wu(e)) return nm(e, _m) + "";
	if (im(e)) return gm ? gm.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -mm ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function vm(e) {
	return e == null ? "" : _m(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function ym(e) {
	return Wu(e) ? nm(e, pm) : im(e) ? [e] : $d(dm(vm(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function H() {
	return H = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, H.apply(this, arguments);
}
function bm(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function xm(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Sm(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Cm = /* @__PURE__ */ (0, M.createContext)(void 0);
Cm.displayName = "FormikContext";
var wm = Cm.Provider, Tm = Cm.Consumer;
function Em() {
	var e = (0, M.useContext)(Cm);
	return !e && $p(!1), e;
}
var Dm = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Om = function(e) {
	return typeof e == "function";
}, km = function(e) {
	return typeof e == "object" && !!e;
}, Am = function(e) {
	return String(Math.floor(Number(e))) === e;
}, jm = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Mm = function(e) {
	return M.Children.count(e) === 0;
}, Nm = function(e) {
	return km(e) && Om(e.then);
};
function Pm(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = ym(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function Fm(e, t, n) {
	for (var r = tm(e), i = r, a = 0, o = ym(t); a < o.length - 1; a++) {
		var s = o[a], c = Pm(e, o.slice(0, a + 1));
		if (c && (km(c) || Array.isArray(c))) i = i[s] = tm(c);
		else {
			var l = o[a + 1];
			i = i[s] = Am(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Im(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		km(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Im(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Lm(e, t) {
	switch (t.type) {
		case "SET_VALUES": return H({}, e, { values: t.payload });
		case "SET_TOUCHED": return H({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Zp.default)(e.errors, t.payload) ? e : H({}, e, { errors: t.payload });
		case "SET_STATUS": return H({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return H({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return H({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return H({}, e, { values: Fm(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return H({}, e, { touched: Fm(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return H({}, e, { errors: Fm(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return H({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return H({}, e, {
			touched: Im(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return H({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return H({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Rm = {}, zm = {};
function Bm(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = xm(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = H({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, M.useRef)(f.initialValues), m = (0, M.useRef)(f.initialErrors || Rm), h = (0, M.useRef)(f.initialTouched || zm), g = (0, M.useRef)(f.initialStatus), _ = (0, M.useRef)(!1), v = (0, M.useRef)({});
	(0, M.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, M.useState)(0)[1], b = (0, M.useRef)({
		values: Xp(f.initialValues),
		errors: Xp(f.initialErrors) || Rm,
		touched: Xp(f.initialTouched) || zm,
		status: Xp(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, M.useCallback)(function(e) {
		var t = b.current;
		b.current = Lm(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, M.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Rm) : Nm(i) ? i.then(function(e) {
				n(e || Rm);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, M.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Om(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Um(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Rm);
			}, function(n) {
				n.name === "ValidationError" ? e(Hm(n)) : t(n);
			});
		});
	}, [f.validationSchema]), T = (0, M.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), E = (0, M.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Om(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, Pm(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = Fm(e, t[r], n)), e;
			}, {});
		});
	}, [T]), D = (0, M.useCallback)(function(e) {
		return Promise.all([
			E(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return nl.all([
				t,
				n,
				r
			], { arrayMerge: Gm });
		});
	}, [
		f.validate,
		f.validationSchema,
		E,
		C,
		w
	]), O = Ym(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), D(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, M.useEffect)(function() {
		o && _.current === !0 && (0, Zp.default)(p.current, f.initialValues) && O(p.current);
	}, [o, O]);
	var k = (0, M.useCallback)(function(e) {
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
			var o = f.onReset(x.values, ge);
			Nm(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, M.useEffect)(function() {
		_.current === !0 && !(0, Zp.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, k(), o && O(p.current));
	}, [
		l,
		f.initialValues,
		k,
		o,
		O
	]), (0, M.useEffect)(function() {
		l && _.current === !0 && !(0, Zp.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Rm, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Rm
		}));
	}, [l, f.initialErrors]), (0, M.useEffect)(function() {
		l && _.current === !0 && !(0, Zp.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || zm, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || zm
		}));
	}, [l, f.initialTouched]), (0, M.useEffect)(function() {
		l && _.current === !0 && !(0, Zp.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var ee = Ym(function(e) {
		if (v.current[e] && Om(v.current[e].validate)) {
			var t = Pm(x.values, e), n = v.current[e].validate(t);
			return Nm(n) ? (S({
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
					value: Pm(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), A = (0, M.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), te = (0, M.useCallback)(function(e) {
		delete v.current[e];
	}, []), ne = Ym(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? O(x.values) : Promise.resolve();
	}), re = (0, M.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), ie = Ym(function(e, t) {
		var r = Om(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? O(r) : Promise.resolve();
	}), j = (0, M.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), ae = Ym(function(e, t, r) {
		var i = Om(t) ? t(Pm(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? O(Fm(x.values, e, i)) : Promise.resolve();
	}), oe = (0, M.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!jm(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? qm(Pm(x.values, n), u, l) : d && f ? Km(d) : l;
		}
		n && ae(n, r);
	}, [ae, x.values]), se = Ym(function(e) {
		if (jm(e)) return function(t) {
			return oe(t, e);
		};
		oe(e);
	}), ce = Ym(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? O(x.values) : Promise.resolve();
	}), le = (0, M.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, ce(t || r || i, !0);
	}, [ce]), ue = Ym(function(e) {
		if (jm(e)) return function(t) {
			return le(t, e);
		};
		le(e);
	}), de = (0, M.useCallback)(function(e) {
		Om(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), fe = (0, M.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), pe = (0, M.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), me = Ym(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), O().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = _e(), n === void 0) return;
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
	}), he = Ym(function(e) {
		e && e.preventDefault && Om(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Om(e.stopPropagation) && e.stopPropagation(), me().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), ge = {
		resetForm: k,
		validateForm: O,
		validateField: ee,
		setErrors: re,
		setFieldError: j,
		setFieldTouched: ce,
		setFieldValue: ae,
		setStatus: fe,
		setSubmitting: pe,
		setTouched: ne,
		setValues: ie,
		setFormikState: de,
		submitForm: me
	}, _e = Ym(function() {
		return u(x.values, ge);
	}), ve = Ym(function(e) {
		e && e.preventDefault && Om(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Om(e.stopPropagation) && e.stopPropagation(), k();
	}), ye = (0, M.useCallback)(function(e) {
		return {
			value: Pm(x.values, e),
			error: Pm(x.errors, e),
			touched: !!Pm(x.touched, e),
			initialValue: Pm(p.current, e),
			initialTouched: !!Pm(h.current, e),
			initialError: Pm(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), be = (0, M.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return ae(e, t, n);
			},
			setTouched: function(t, n) {
				return ce(e, t, n);
			},
			setError: function(t) {
				return j(e, t);
			}
		};
	}, [
		ae,
		ce,
		j
	]), xe = (0, M.useCallback)(function(e) {
		var t = km(e), n = t ? e.name : e, r = Pm(x.values, n), i = {
			name: n,
			value: r,
			onChange: se,
			onBlur: ue
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		ue,
		se,
		x.values
	]), Se = (0, M.useMemo)(function() {
		return !(0, Zp.default)(p.current, x.values);
	}, [p.current, x.values]), Ce = (0, M.useMemo)(function() {
		return s === void 0 || Se ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Om(s) ? s(f) : s;
	}, [
		s,
		Se,
		x.errors,
		f
	]);
	return H({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: ue,
		handleChange: se,
		handleReset: ve,
		handleSubmit: he,
		resetForm: k,
		setErrors: re,
		setFormikState: de,
		setFieldTouched: ce,
		setFieldValue: ae,
		setFieldError: j,
		setStatus: fe,
		setSubmitting: pe,
		setTouched: ne,
		setValues: ie,
		submitForm: me,
		validateForm: O,
		validateField: ee,
		isValid: Ce,
		dirty: Se,
		unregisterField: te,
		registerField: A,
		getFieldProps: xe,
		getFieldMeta: ye,
		getFieldHelpers: be,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Vm(e) {
	var t = Bm(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, M.useImperativeHandle)(a, function() {
		return t;
	}), (0, M.createElement)(wm, { value: t }, n ? (0, M.createElement)(n, t) : i ? i(t) : r ? Om(r) ? r(t) : Mm(r) ? null : M.Children.only(r) : null);
}
function Hm(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return Fm(t, e.path, e.message);
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
			Pm(t, o.path) || (t = Fm(t, o.path, o.message));
		}
	}
	return t;
}
function Um(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Wm(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Wm(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || Dl(e) ? Wm(e) : e === "" ? void 0 : e;
		}) : Dl(e[r]) ? t[r] = Wm(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Gm(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? nl(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = nl(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Km(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function qm(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Jm = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? M.useLayoutEffect : M.useEffect;
function Ym(e) {
	var t = (0, M.useRef)(e);
	return Jm(function() {
		t.current = e;
	}), (0, M.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var Xm = /* @__PURE__ */ (0, M.forwardRef)(function(e, t) {
	var n = e.action, r = xm(e, ["action"]), i = n ?? "#", a = Em(), o = a.handleReset, s = a.handleSubmit;
	return (0, M.createElement)("form", H({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Xm.displayName = "Form";
function Zm(e) {
	var t = function(t) {
		return (0, M.createElement)(Tm, null, function(n) {
			return !n && $p(!1), (0, M.createElement)(e, H({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, Te.default)(t, e);
}
var Qm = function(e, t, n) {
	var r = nh(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, $m = function(e, t, n) {
	var r = nh(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, eh = function(e, t, n) {
	var r = nh(e);
	return r.splice(t, 0, n), r;
}, th = function(e, t, n) {
	var r = nh(e);
	return r[t] = n, r;
}, nh = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(H({}, e, { length: t + 1 }));
}, rh = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || km(e) ? n(nh(e)) : e;
	};
}, ih = /* @__PURE__ */ function(e) {
	bm(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = rh(r, e), o = rh(t, e), s = Fm(n.values, a, e(Pm(n.values, a))), c = r ? i(Pm(n.errors, a)) : void 0, l = t ? o(Pm(n.touched, a)) : void 0;
				return Dm(c) && (c = void 0), Dm(l) && (l = void 0), H({}, n, {
					values: s,
					errors: r ? Fm(n.errors, a, c) : n.errors,
					touched: t ? Fm(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(nh(t), [Xp(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return $m(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Qm(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return eh(n, e, t);
			}, function(t) {
				return eh(t, e, null);
			}, function(t) {
				return eh(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return th(n, e, t);
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
		}, n.remove = n.remove.bind(Sm(n)), n.pop = n.pop.bind(Sm(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Zp.default)(Pm(e.formik.values, e.name), Pm(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? nh(n) : [];
			return t ||= r[e], Om(r.splice) && r.splice(e, 1), Om(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = xm(o, ["validate", "validationSchema"]), c = H({}, e, {
			form: s,
			name: a
		});
		return n ? (0, M.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : Mm(i) ? null : M.Children.only(i) : null;
	}, t;
}(M.Component);
ih.defaultProps = { validateOnChange: !0 };
var ah = /* @__PURE__ */ Zm(ih);
//#endregion
//#region src/card-carousel/studio-ui/components/CreateCarouselForm.tsx
function oh() {
	let { values: e, setFieldValue: t, handleChange: n } = Em();
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "p-4",
		children: [
			/* @__PURE__ */ (0, z.jsx)("h3", { children: "Create Card Carousel" }),
			/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [
				/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Display Name" }),
				/* @__PURE__ */ (0, z.jsx)(R.Text, {
					muted: !0,
					children: "Name of the XBlock component in Studio."
				}),
				/* @__PURE__ */ (0, z.jsx)(R.Control, {
					type: "text",
					name: "displayName",
					value: e.displayName,
					onChange: n
				})
			] }),
			/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [
				/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Card Layout" }),
				/* @__PURE__ */ (0, z.jsx)(R.Text, { children: "Choose whether cards in this carousel use a vertical or horizontal layout. You'll add and edit the cards in the next step." }),
				/* @__PURE__ */ (0, z.jsxs)(he, {
					direction: "horizontal",
					gap: 4,
					children: [/* @__PURE__ */ (0, z.jsxs)(O, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === "VERTICAL" ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", "VERTICAL"),
						children: [
							/* @__PURE__ */ (0, z.jsx)("p", { children: /* @__PURE__ */ (0, z.jsx)("span", {
								className: "material-icons-outlined",
								children: "splitscreen"
							}) }),
							/* @__PURE__ */ (0, z.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, z.jsx)("strong", { children: "Vertical Cards" })
							}),
							/* @__PURE__ */ (0, z.jsx)("p", {
								className: "small",
								children: "Content sits above and below"
							})
						]
					}), /* @__PURE__ */ (0, z.jsxs)(O, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === "HORIZONTAL" ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", "HORIZONTAL"),
						children: [
							/* @__PURE__ */ (0, z.jsx)("p", { children: /* @__PURE__ */ (0, z.jsx)("span", {
								className: "material-icons-outlined",
								children: "vertical_split"
							}) }),
							/* @__PURE__ */ (0, z.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, z.jsx)("strong", { children: "Horizontal Cards" })
							}),
							/* @__PURE__ */ (0, z.jsx)("p", {
								className: "small",
								children: "Content sits side-by-side"
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, z.jsxs)(R.Group, {
				className: "my-3",
				children: [/* @__PURE__ */ (0, z.jsx)(R.Checkbox, {
					name: "disableNumbering",
					checked: !e.disableNumbering,
					onChange: (e) => t("disableNumbering", !e.currentTarget.checked),
					children: "Add card numbers"
				}), /* @__PURE__ */ (0, z.jsx)(R.Text, {
					className: "small",
					children: "Displays progress. For e.g., (2/4)"
				})]
			}),
			/* @__PURE__ */ (0, z.jsxs)(R.Group, {
				className: "my-3",
				children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Background Color" }), /* @__PURE__ */ (0, z.jsx)(Gc, {
					color: e.backgroundColor,
					setColor: (e) => t("backgroundColor", e)
				})]
			})
		]
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ListItemContainer.tsx
function sh({ heading: e, index: t, onRemoveItem: n, children: r }) {
	return /* @__PURE__ */ (0, z.jsx)("div", {
		className: "m-2 bg-light-200",
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "border rounded-sm shadow-sm icon-item-form mb-4",
			children: [/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "d-flex justify-content-between border-bottom align-items-center",
				children: [/* @__PURE__ */ (0, z.jsx)("h5", {
					className: "ml-2 mb-0",
					children: e
				}), /* @__PURE__ */ (0, z.jsxs)(O, {
					variant: "tertiary",
					size: "sm",
					className: "d-flex align-items-center",
					onClick: () => n(t),
					children: [
						/* @__PURE__ */ (0, z.jsx)("span", {
							className: "material-icons-outlined text-danger",
							children: "delete_outline"
						}),
						" ",
						"Delete"
					]
				})]
			}), /* @__PURE__ */ (0, z.jsx)("div", {
				className: "p-2",
				children: r
			})]
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/icons.ts
var ch = /* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split(".");
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function lh(e) {
	return Array.isArray ? Array.isArray(e) : bh(e) === "[object Array]";
}
var uh = Infinity;
function dh(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -uh ? "-0" : t;
}
function fh(e) {
	return e == null ? "" : dh(e);
}
function ph(e) {
	return typeof e == "string";
}
function mh(e) {
	return typeof e == "number";
}
function hh(e) {
	return e === !0 || e === !1 || _h(e) && bh(e) == "[object Boolean]";
}
function gh(e) {
	return typeof e == "object";
}
function _h(e) {
	return gh(e) && e !== null;
}
function vh(e) {
	return e != null;
}
function yh(e) {
	return !e.trim().length;
}
function bh(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var xh = "Incorrect 'index' type", Sh = (e) => `Invalid value for key ${e}`, Ch = (e) => `Pattern length exceeds max of ${e}.`, wh = (e) => `Missing ${e} property in key`, Th = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Eh = Object.prototype.hasOwnProperty, Dh = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = Oh(e);
			this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
		}), this._keys.forEach((e) => {
			e.weight /= t;
		});
	}
	get(e) {
		return this._keyMap[e];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function Oh(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (ph(e) || lh(e)) r = e, t = kh(e), n = Ah(e);
	else {
		if (!Eh.call(e, "name")) throw Error(wh("name"));
		let o = e.name;
		if (r = o, Eh.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(Th(o));
		t = kh(o), n = Ah(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function kh(e) {
	return lh(e) ? e : e.split(".");
}
function Ah(e) {
	return lh(e) ? e.join(".") : e;
}
function jh(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (vh(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!vh(o)) return;
			if (a === t.length - 1 && (ph(o) || mh(o) || hh(o))) n.push(fh(o));
			else if (lh(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, ph(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var Mh = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, Nh = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Ph = {
	location: 0,
	threshold: .6,
	distance: 100
}, Fh = {
	useExtendedSearch: !1,
	getFn: jh,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, U = {
	...Nh,
	...Mh,
	...Ph,
	...Fh
}, Ih = /[^ ]+/g;
function Lh(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(Ih).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var Rh = class {
	constructor({ getFn: e = U.getFn, fieldNormWeight: t = U.fieldNormWeight } = {}) {
		this.norm = Lh(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
	}
	setSources(e = []) {
		this.docs = e;
	}
	setIndexRecords(e = []) {
		this.records = e;
	}
	setKeys(e = []) {
		this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
			this._keysMap[e.id] = t;
		});
	}
	create() {
		this.isCreated || !this.docs.length || (this.isCreated = !0, ph(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		ph(e) ? this._addString(e, t) : this._addObject(e, t);
	}
	removeAt(e) {
		this.records.splice(e, 1);
		for (let t = e, n = this.size(); t < n; t += 1) --this.records[t].i;
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_addString(e, t) {
		if (!vh(e) || yh(e)) return;
		let n = {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
		this.records.push(n);
	}
	_addObject(e, t) {
		let n = {
			i: t,
			$: {}
		};
		this.keys.forEach((t, r) => {
			let i = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
			if (vh(i)) {
				if (lh(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (vh(r)) if (ph(r) && !yh(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else lh(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (ph(i) && !yh(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[r] = e;
				}
			}
		}), this.records.push(n);
	}
	toJSON() {
		return {
			keys: this.keys,
			records: this.records
		};
	}
};
function zh(e, t, { getFn: n = U.getFn, fieldNormWeight: r = U.fieldNormWeight } = {}) {
	let i = new Rh({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(Oh)), i.setSources(t), i.create(), i;
}
function Bh(e, { getFn: t = U.getFn, fieldNormWeight: n = U.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new Rh({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Vh(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = U.distance, ignoreLocation: a = U.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Hh(e = [], t = U.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Uh = 32;
function Wh(e, t, n, { location: r = U.location, distance: i = U.distance, threshold: a = U.threshold, findAllMatches: o = U.findAllMatches, minMatchCharLength: s = U.minMatchCharLength, includeMatches: c = U.includeMatches, ignoreLocation: l = U.ignoreLocation } = {}) {
	if (t.length > Uh) throw Error(Ch(Uh));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Vh(t, {
			currentLocation: _,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		});
		if (p = Math.min(e, p), m = _ + u, h) {
			let e = 0;
			for (; e < u;) g[_ + e] = 1, e += 1;
		}
	}
	m = -1;
	let v = [], y = 1, b = u + d, x = 1 << u - 1;
	for (let r = 0; r < u; r += 1) {
		let a = 0, s = b;
		for (; a < s;) Vh(t, {
			errors: r,
			currentLocation: f + s,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) <= p ? a = s : b = s, s = Math.floor((b - a) / 2 + a);
		b = s;
		let c = Math.max(1, f - s + 1), _ = o ? d : Math.min(f + s, d) + u, S = Array(_ + 2);
		S[_ + 1] = (1 << r) - 1;
		for (let a = _; a >= c; --a) {
			let o = a - 1, s = n[e.charAt(o)];
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Vh(t, {
				errors: r,
				currentLocation: o,
				expectedLocation: f,
				distance: i,
				ignoreLocation: l
			}), y <= p)) {
				if (p = y, m = o, m <= f) break;
				c = Math.max(1, 2 * f - m);
			}
		}
		if (Vh(t, {
			errors: r + 1,
			currentLocation: f,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) > p) break;
		v = S;
	}
	let S = {
		isMatch: m >= 0,
		score: Math.max(.001, y)
	};
	if (h) {
		let e = Hh(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function Gh(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Kh = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), qh = class {
	constructor(e, { location: t = U.location, threshold: n = U.threshold, distance: r = U.distance, includeMatches: i = U.includeMatches, findAllMatches: a = U.findAllMatches, minMatchCharLength: o = U.minMatchCharLength, isCaseSensitive: s = U.isCaseSensitive, ignoreDiacritics: c = U.ignoreDiacritics, ignoreLocation: l = U.ignoreLocation } = {}) {
		if (this.options = {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		}, e = s ? e : e.toLowerCase(), e = c ? Kh(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Gh(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Uh) {
			let e = 0, t = d % Uh, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Uh), e), e += Uh;
			if (t) {
				let e = d - Uh;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Kh(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Wh(e, t, n, {
				location: i + p,
				distance: a,
				threshold: o,
				findAllMatches: s,
				minMatchCharLength: c,
				includeMatches: r,
				ignoreLocation: l
			});
			m && (f = !0), d += h, m && g && (u = [...u, ...g]);
		});
		let p = {
			isMatch: f,
			score: f ? d / this.chunks.length : 1
		};
		return f && r && (p.indices = u), p;
	}
}, Jh = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return Yh(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return Yh(e, this.singleRegex);
	}
	search() {}
};
function Yh(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Xh = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "exact";
	}
	static get multiRegex() {
		return /^="(.*)"$/;
	}
	static get singleRegex() {
		return /^=(.*)$/;
	}
	search(e) {
		let t = e === this.pattern;
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, this.pattern.length - 1]
		};
	}
}, Zh = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"$/;
	}
	static get singleRegex() {
		return /^!(.*)$/;
	}
	search(e) {
		let t = e.indexOf(this.pattern) === -1;
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, Qh = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "prefix-exact";
	}
	static get multiRegex() {
		return /^\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^\^(.*)$/;
	}
	search(e) {
		let t = e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, this.pattern.length - 1]
		};
	}
}, $h = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-prefix-exact";
	}
	static get multiRegex() {
		return /^!\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^!\^(.*)$/;
	}
	search(e) {
		let t = !e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, eg = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "suffix-exact";
	}
	static get multiRegex() {
		return /^"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^(.*)\$$/;
	}
	search(e) {
		let t = e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [e.length - this.pattern.length, e.length - 1]
		};
	}
}, tg = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-suffix-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^!(.*)\$$/;
	}
	search(e) {
		let t = !e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: t ? 0 : 1,
			indices: [0, e.length - 1]
		};
	}
}, ng = class extends Jh {
	constructor(e, { location: t = U.location, threshold: n = U.threshold, distance: r = U.distance, includeMatches: i = U.includeMatches, findAllMatches: a = U.findAllMatches, minMatchCharLength: o = U.minMatchCharLength, isCaseSensitive: s = U.isCaseSensitive, ignoreDiacritics: c = U.ignoreDiacritics, ignoreLocation: l = U.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new qh(e, {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		});
	}
	static get type() {
		return "fuzzy";
	}
	static get multiRegex() {
		return /^"(.*)"$/;
	}
	static get singleRegex() {
		return /^(.*)$/;
	}
	search(e) {
		return this._bitapSearch.searchIn(e);
	}
}, rg = class extends Jh {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "include";
	}
	static get multiRegex() {
		return /^'"(.*)"$/;
	}
	static get singleRegex() {
		return /^'(.*)$/;
	}
	search(e) {
		let t = 0, n, r = [], i = this.pattern.length;
		for (; (n = e.indexOf(this.pattern, t)) > -1;) t = n + i, r.push([n, t - 1]);
		let a = !!r.length;
		return {
			isMatch: a,
			score: a ? 0 : 1,
			indices: r
		};
	}
}, ig = [
	Xh,
	rg,
	Qh,
	$h,
	tg,
	eg,
	Zh,
	ng
], ag = ig.length, og = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, sg = "|";
function cg(e, t = {}) {
	return e.split(sg).map((e) => {
		let n = e.trim().split(og).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < ag;) {
				let e = ig[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < ag;) {
				let e = ig[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var lg = new Set([ng.type, rg.type]), ug = class {
	constructor(e, { isCaseSensitive: t = U.isCaseSensitive, ignoreDiacritics: n = U.ignoreDiacritics, includeMatches: r = U.includeMatches, minMatchCharLength: i = U.minMatchCharLength, ignoreLocation: a = U.ignoreLocation, findAllMatches: o = U.findAllMatches, location: s = U.location, threshold: c = U.threshold, distance: l = U.distance } = {}) {
		this.query = null, this.options = {
			isCaseSensitive: t,
			ignoreDiacritics: n,
			includeMatches: r,
			minMatchCharLength: i,
			findAllMatches: o,
			ignoreLocation: a,
			location: s,
			threshold: c,
			distance: l
		}, e = t ? e : e.toLowerCase(), e = n ? Kh(e) : e, this.pattern = e, this.query = cg(this.pattern, this.options);
	}
	static condition(e, t) {
		return t.useExtendedSearch;
	}
	searchIn(e) {
		let t = this.query;
		if (!t) return {
			isMatch: !1,
			score: 1
		};
		let { includeMatches: n, isCaseSensitive: r, ignoreDiacritics: i } = this.options;
		e = r ? e : e.toLowerCase(), e = i ? Kh(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						lg.has(e) ? o = [...o, ...l] : o.push(l);
					}
				} else {
					s = 0, a = 0, o.length = 0;
					break;
				}
			}
			if (a) {
				let e = {
					isMatch: !0,
					score: s / a
				};
				return n && (e.indices = o), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, dg = [];
function fg(...e) {
	dg.push(...e);
}
function pg(e, t) {
	for (let n = 0, r = dg.length; n < r; n += 1) {
		let r = dg[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new qh(e, t);
}
var mg = {
	AND: "$and",
	OR: "$or"
}, hg = {
	PATH: "$path",
	PATTERN: "$val"
}, gg = (e) => !!(e[mg.AND] || e[mg.OR]), _g = (e) => !!e[hg.PATH], vg = (e) => !lh(e) && gh(e) && !gg(e), yg = (e) => ({ [mg.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function bg(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = _g(e);
		if (!a && i.length > 1 && !gg(e)) return r(yg(e));
		if (vg(e)) {
			let r = a ? e[hg.PATH] : i[0], o = a ? e[hg.PATTERN] : e[r];
			if (!ph(o)) throw Error(Sh(r));
			let s = {
				keyId: Ah(r),
				pattern: o
			};
			return n && (s.searcher = pg(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			lh(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return gg(e) || (e = yg(e)), r(e);
}
function xg(e, { ignoreFieldNorm: t = U.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function Sg(e, t) {
	let n = e.matches;
	t.matches = [], vh(n) && n.forEach((e) => {
		if (!vh(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function Cg(e, t) {
	t.score = e.score;
}
function wg(e, t, { includeMatches: n = U.includeMatches, includeScore: r = U.includeScore } = {}) {
	let i = [];
	return n && i.push(Sg), r && i.push(Cg), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var Tg = class {
	constructor(e, t = {}, n) {
		this.options = {
			...U,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new Dh(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof Rh)) throw Error(xh);
		this._myIndex = t || zh(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		vh(e) && (this._docs.push(e), this._myIndex.add(e));
	}
	remove(e = () => !1) {
		let t = [];
		for (let n = 0, r = this._docs.length; n < r; n += 1) {
			let i = this._docs[n];
			e(i, n) && (this.removeAt(n), --n, --r, t.push(i));
		}
		return t;
	}
	removeAt(e) {
		this._docs.splice(e, 1), this._myIndex.removeAt(e);
	}
	getIndex() {
		return this._myIndex;
	}
	search(e, { limit: t = -1 } = {}) {
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = ph(e) ? ph(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return xg(s, { ignoreFieldNorm: o }), i && s.sort(a), mh(t) && t > -1 && (s = s.slice(0, t)), wg(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = pg(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!vh(e)) return;
			let { isMatch: a, score: o, indices: s } = t.searchIn(e);
			a && r.push({
				item: e,
				idx: n,
				matches: [{
					score: o,
					value: e,
					norm: i,
					indices: s
				}]
			});
		}), r;
	}
	_searchLogical(e) {
		let t = bg(e, this.options), n = (e, t, r) => {
			if (!e.children) {
				let { keyId: n, searcher: i } = e, a = this._findMatches({
					key: this._keyStore.get(n),
					value: this._myIndex.getValueForItemAtKeyId(t, n),
					searcher: i
				});
				return a && a.length ? [{
					idx: r,
					item: t,
					matches: a
				}] : [];
			}
			let i = [];
			for (let a = 0, o = e.children.length; a < o; a += 1) {
				let o = e.children[a], s = n(o, t, r);
				if (s.length) i.push(...s);
				else if (e.operator === mg.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (vh(e)) {
				let o = n(t, e, r);
				o.length && (i[r] || (i[r] = {
					idx: r,
					item: e,
					matches: []
				}, a.push(i[r])), o.forEach(({ matches: e }) => {
					i[r].matches.push(...e);
				}));
			}
		}), a;
	}
	_searchObjectList(e) {
		let t = pg(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!vh(e)) return;
			let a = [];
			n.forEach((n, r) => {
				a.push(...this._findMatches({
					key: n,
					value: e[r],
					searcher: t
				}));
			}), a.length && i.push({
				idx: r,
				item: e,
				matches: a
			});
		}), i;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!vh(t)) return [];
		let r = [];
		if (lh(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!vh(t)) return;
			let { isMatch: o, score: s, indices: c } = n.searchIn(t);
			o && r.push({
				score: s,
				key: e,
				value: t,
				idx: i,
				norm: a,
				indices: c
			});
		});
		else {
			let { v: i, n: a } = t, { isMatch: o, score: s, indices: c } = n.searchIn(i);
			o && r.push({
				score: s,
				key: e,
				value: i,
				norm: a,
				indices: c
			});
		}
		return r;
	}
};
Tg.version = "7.1.0", Tg.createIndex = zh, Tg.parseIndex = Bh, Tg.config = U, Tg.parseQuery = bg, fg(ug);
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/index.tsx
var Eg = (0, M.forwardRef)(({ variant: e, ...t }, n) => {
	let { onClick: r, ...i } = t, a = (0, M.useRef)(null);
	return (0, M.useEffect)(() => {
		let e = a.current;
		if (!e || !r) return;
		let t = r;
		return e.addEventListener("click", t), () => e.removeEventListener("click", t);
	}, [r]), /* @__PURE__ */ (0, z.jsx)("button", {
		ref: (0, M.useCallback)((e) => {
			a.current = e, typeof n == "function" ? n(e) : n && (n.current = e);
		}, [n]),
		...i,
		className: [i.className, e && `btn btn-${e}`].filter(Boolean).join(" "),
		type: "button"
	});
});
Eg.displayName = "IconSelectorToggle";
var Dg = (0, M.forwardRef)(({ show: e, close: t, alignRight: n, ...r }, i) => /* @__PURE__ */ (0, z.jsx)("div", {
	ref: i,
	...r
}));
Dg.displayName = "IconSelectorMenu";
function Og({ currentIcon: e, onIconSelected: t }) {
	let n = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split("."), [r, i] = (0, M.useState)(n), [a, o] = (0, M.useState)(""), s = (0, M.useId)(), c = new Tg(ch, {
		threshold: .3,
		minMatchCharLength: 2
	});
	function l(e) {
		let t = e.currentTarget.value;
		o(t), i(t === "" ? n : c.search(t).map((e) => e.item.toString()));
	}
	function u() {
		o(""), i(n);
	}
	function d(e) {
		e && t(e);
	}
	return /* @__PURE__ */ (0, z.jsxs)(Xs, {
		onSelect: d,
		onToggle: (e) => {
			e && u();
		},
		children: [/* @__PURE__ */ (0, z.jsx)(Xs.Toggle, {
			as: Eg,
			variant: e ? "outline-dark" : "success",
			className: "d-block icon-selector pb-1",
			id: s,
			children: /* @__PURE__ */ (0, z.jsx)("span", {
				className: "material-icons-outlined mb-0",
				children: e || "add"
			})
		}), /* @__PURE__ */ (0, z.jsx)(Xs.Menu, {
			as: Dg,
			className: "p-0 border-0",
			popperConfig: { strategy: "fixed" },
			children: /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "icon-list-popup border rounded-sm shadow",
				children: [/* @__PURE__ */ (0, z.jsx)(uc, { children: /* @__PURE__ */ (0, z.jsx)(R.Group, {
					size: "sm",
					children: /* @__PURE__ */ (0, z.jsx)(R.Control, {
						autoFocus: !0,
						type: "text",
						className: "m-0",
						placeholder: "Search icons",
						trailingElement: /* @__PURE__ */ (0, z.jsx)("span", {
							className: "material-icons-outlined medium text-gray-500",
							children: "search"
						}),
						value: a,
						onChange: l
					})
				}) }), /* @__PURE__ */ (0, z.jsx)("div", {
					className: "icon-list d-flex flex-wrap justify-items-start",
					children: r.map((e) => /* @__PURE__ */ (0, z.jsx)(Xs.Item, {
						as: "button",
						type: "button",
						eventKey: e,
						className: "icon-symbol p-2",
						children: /* @__PURE__ */ (0, z.jsx)("span", {
							className: "material-icons-outlined",
							children: e
						})
					}, e))
				})]
			})
		})]
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/HoverListItemForm.tsx
function kg({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = Em(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, z.jsx)(sh, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, {
				className: "x-small",
				children: "Main Text"
			}), /* @__PURE__ */ (0, z.jsx)(R.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s.description,
				onChange: i
			})] }), /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, z.jsxs)(R.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, z.jsx)(R.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, z.jsx)(Og, {
						currentIcon: s.icon || "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, z.jsxs)(R.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, z.jsx)(R.Label, {
						className: "x-small",
						children: "Hover Text"
					}), /* @__PURE__ */ (0, z.jsx)(R.Control, {
						as: "textarea",
						autoResize: !0,
						name: `${o}.hoverContent`,
						value: s.hoverContent,
						onChange: i
					})]
				})]
			})]
		})
	});
}
function Ag({ cardIndex: e }) {
	return /* @__PURE__ */ (0, z.jsx)(ah, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, z.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, z.jsx)(kg, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, z.jsx)(O, {
				variant: "success",
				onClick: () => t({
					description: "",
					hoverContent: "",
					icon: ""
				}),
				children: "Add List Item"
			})] });
		}
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ImageForm.tsx
function jg({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = Em(), [i, a] = (0, M.useState)(!1), o = `cards[${e}].secondaryContent`, s = t.cards[e].secondaryContent;
	function c(e) {
		a(e.currentTarget.checked), e.currentTarget.checked && r(`${o}.altText`, "");
	}
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Image Source URL" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
		name: `${o}.location`,
		value: s.location,
		onChange: n,
		placeholder: "URL"
	})] }), /* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [
		/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Alt Text" }),
		/* @__PURE__ */ (0, z.jsx)("div", {
			className: "mb-0",
			children: /* @__PURE__ */ (0, z.jsx)(R.Checkbox, {
				checked: i,
				onChange: c,
				size: "sm",
				children: "Decorative Image"
			})
		}),
		/* @__PURE__ */ (0, z.jsx)(R.Control, {
			name: `${o}.altText`,
			value: s.altText,
			onChange: n,
			placeholder: "Alt Text",
			disabled: i
		})
	] })] });
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconListItemForm.tsx
function Mg({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = Em(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, z.jsx)(sh, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, z.jsxs)(R.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, z.jsx)(R.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, z.jsx)(Og, {
						currentIcon: s?.icon ?? "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, z.jsxs)(R.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, z.jsx)(R.Label, {
						className: "x-small",
						children: "Heading"
					}), /* @__PURE__ */ (0, z.jsx)(R.Control, {
						type: "text",
						name: `${o}.title`,
						value: s?.title ?? "",
						onChange: i
					})]
				})]
			}), /* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, {
				className: "x-small",
				children: "Description"
			}), /* @__PURE__ */ (0, z.jsx)(R.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s?.description ?? "",
				onChange: i
			})] })]
		})
	});
}
function Ng({ cardIndex: e }) {
	return /* @__PURE__ */ (0, z.jsx)(ah, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, z.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, z.jsx)(Mg, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, z.jsx)(O, {
				variant: "success",
				onClick: () => t({
					icon: "",
					title: "",
					description: ""
				}),
				children: "Add List Item"
			})] });
		}
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ContentHiglightForm.tsx
function Pg({ cardIndex: e }) {
	let { values: t, handleChange: n } = Em(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Title" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
			name: `${r}.title`,
			value: i.title,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
			name: `${r}.subtitle`,
			value: i.subtitle,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Description" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
			as: "textarea",
			autoResize: !0,
			name: `${r}.description`,
			value: i.description,
			onChange: n
		})] })
	] });
}
//#endregion
//#region src/card-carousel/studio-ui/components/CardEditor.tsx
function Fg(e) {
	switch (e) {
		case "IMAGE": return {
			kind: e,
			location: "",
			altText: ""
		};
		case "CONTENT_HIGHLIGHT": return {
			kind: e,
			title: "",
			subtitle: "",
			description: ""
		};
		case "RICH_LIST": return {
			kind: e,
			items: [{
				icon: "",
				title: "",
				description: ""
			}]
		};
		case "HOVER_LIST": return {
			kind: e,
			items: [{
				icon: "",
				description: "",
				hoverContent: ""
			}]
		};
		default: return null;
	}
}
var Ig = {
	IMAGE: jg,
	RICH_LIST: Ng,
	CONTENT_HIGHLIGHT: Pg,
	HOVER_LIST: Ag
};
function Lg({ cardIndex: e }) {
	let { values: t, handleChange: n, handleBlur: r, setFieldValue: i } = Em(), [a, o] = (0, M.useState)(!1), s = t.cards[e], c = `cards[${e}]`, l = s.secondaryContent?.kind ? Ig[s.secondaryContent.kind] : null;
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "row mt-5",
		children: [/* @__PURE__ */ (0, z.jsxs)("div", {
			className: "col border-right",
			children: [
				/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Title" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
					name: `${c}.title`,
					value: s.title,
					onChange: n,
					onBlur: r
				})] }),
				/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
					name: `${c}.subtitle`,
					value: s.subtitle,
					onChange: n,
					onBlur: r
				})] }),
				s.secondaryContent?.kind !== "HOVER_LIST" && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
					/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Body Content" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
						as: "textarea",
						autoResize: !0,
						name: `${c}.description`,
						value: s?.description ?? "",
						onChange: n,
						onBlur: r
					})] }),
					/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Checkbox, {
						checked: a,
						onChange: (e) => {
							o(e.currentTarget.checked), e.currentTarget.checked || (i(`${c}.ctaLabel`, ""), i(`${c}.ctaLink`, ""));
						},
						children: "Add a button"
					}), /* @__PURE__ */ (0, z.jsx)(R.Text, { children: "Link to another page or resource" })] }),
					a && /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Button Label" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
						name: `${c}.ctaLabel`,
						value: s?.ctaLabel ?? "",
						onChange: n
					})] }), /* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Button Link" }), /* @__PURE__ */ (0, z.jsx)(R.Control, {
						name: `${c}.ctaLink`,
						value: s?.ctaLink ?? "",
						onChange: n
					})] })] })
				] })
			]
		}), /* @__PURE__ */ (0, z.jsx)("div", {
			className: "col",
			children: l && /* @__PURE__ */ (0, z.jsx)(l, { cardIndex: e })
		})]
	});
}
function Rg({ cardIndex: e }) {
	let { values: t, setFieldValue: n, handleChange: r, handleBlur: i } = Em(), a = t.cards[e], o = `cards[${e}]`;
	return /* @__PURE__ */ (0, z.jsxs)("div", { children: [
		/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [
			/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Card Name" }),
			/* @__PURE__ */ (0, z.jsx)(R.Text, {
				className: "micro",
				children: "Name of the card in Studio"
			}),
			/* @__PURE__ */ (0, z.jsx)(R.Control, {
				name: `${o}.name`,
				value: a.name,
				onChange: r,
				onBlur: i
			})
		] }),
		/* @__PURE__ */ (0, z.jsxs)(R.Group, { children: [/* @__PURE__ */ (0, z.jsx)(R.Label, { children: "Supporting Content" }), /* @__PURE__ */ (0, z.jsxs)(R.Control, {
			as: "select",
			name: `${o}.cardType`,
			value: a.secondaryContent?.kind ?? "UNKNOWN",
			onChange: (e) => {
				n(`${o}.cardType`, e.currentTarget.value), n(`${o}.secondaryContent`, Fg(e.currentTarget.value));
			},
			onBlur: i,
			children: [
				/* @__PURE__ */ (0, z.jsx)("option", {
					value: "UNKNOWN",
					children: "Choose Content Type"
				}),
				/* @__PURE__ */ (0, z.jsx)("option", {
					value: "IMAGE",
					children: "Image"
				}),
				/* @__PURE__ */ (0, z.jsx)("option", {
					value: "CONTENT_HIGHLIGHT",
					children: "Highlighted Text"
				}),
				/* @__PURE__ */ (0, z.jsx)("option", {
					value: "RICH_LIST",
					children: "Icon List"
				}),
				/* @__PURE__ */ (0, z.jsx)("option", {
					value: "HOVER_LIST",
					children: "Interactive List"
				})
			]
		})] }),
		a.secondaryContent?.kind && /* @__PURE__ */ (0, z.jsx)(Lg, { cardIndex: e })
	] });
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var zg = Symbol.for("preact-signals");
function Bg() {
	if (Wg > 1) Wg--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Jg;
			for (Jg = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); Ug !== void 0;) {
			var n = Ug;
			for (Ug = void 0, Gg++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && $g(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (Gg = 0, Wg--, t) throw e;
	}
}
function Vg(e) {
	if (Wg > 0) return e();
	qg = ++Kg, Wg++;
	try {
		return e();
	} finally {
		Bg();
	}
}
var W = void 0;
function G(e) {
	var t = W;
	W = void 0;
	try {
		return e();
	} finally {
		W = t;
	}
}
var Hg, Ug = void 0, Wg = 0, Gg = 0, Kg = 0, qg = 0, Jg = void 0, Yg = 0;
function Xg(e) {
	if (W !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== W) return t = {
			i: 0,
			S: e,
			p: W.s,
			n: void 0,
			t: W,
			e: void 0,
			x: void 0,
			r: t
		}, W.s !== void 0 && (W.s.n = t), W.s = t, e.n = t, 32 & W.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = W.s, t.n = void 0, W.s.n = t, W.s = t), t;
	}
}
function Zg(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Zg.prototype.brand = zg, Zg.prototype.h = function() {
	return !0;
}, Zg.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? G(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Zg.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && G(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Zg.prototype.subscribe = function(e) {
	var t = this;
	return c_(function() {
		var n = t.value, r = W;
		W = void 0;
		try {
			e(n);
		} finally {
			W = r;
		}
	}, { name: "sub" });
}, Zg.prototype.valueOf = function() {
	return this.value;
}, Zg.prototype.toString = function() {
	return this.value + "";
}, Zg.prototype.toJSON = function() {
	return this.value;
}, Zg.prototype.peek = function() {
	var e = W;
	W = void 0;
	try {
		return this.value;
	} finally {
		W = e;
	}
}, Object.defineProperty(Zg.prototype, "value", {
	get: function() {
		var e = Xg(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (Gg > 100) throw Error("Cycle detected");
			(function(e) {
				Wg !== 0 && Gg === 0 && e.l !== qg && (e.l = qg, Jg = {
					S: e,
					v: e.v,
					i: e.i,
					o: Jg
				});
			})(this), this.v = e, this.i++, Yg++, Wg++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Bg();
			}
		}
	}
});
function Qg(e, t) {
	return new Zg(e, t);
}
function $g(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function e_(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function t_(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function n_(e, t) {
	Zg.call(this, void 0), this.x = e, this.s = void 0, this.g = Yg - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
n_.prototype = new Zg(), n_.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Yg)) return !0;
	if (this.g = Yg, this.f |= 1, this.i > 0 && !$g(this)) return this.f &= -2, !0;
	var e = W;
	try {
		e_(this), W = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return W = e, t_(this), this.f &= -2, !0;
}, n_.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Zg.prototype.S.call(this, e);
}, n_.prototype.U = function(e) {
	if (this.t !== void 0 && (Zg.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, n_.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(n_.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Xg(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function r_(e, t) {
	return new n_(e, t);
}
function i_(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Wg++;
		var n = W;
		W = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, a_(e), t;
		} finally {
			W = n, Bg();
		}
	}
}
function a_(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, i_(e);
}
function o_(e) {
	if (W !== this) throw Error("Out-of-order effect");
	t_(this), W = e, this.f &= -2, 8 & this.f && a_(this), Bg();
}
function s_(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Hg && Hg.push(this);
}
s_.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, s_.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, i_(this), e_(this), Wg++;
	var e = W;
	return W = this, o_.bind(this, e);
}, s_.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Ug, Ug = this);
}, s_.prototype.d = function() {
	this.f |= 8, 1 & this.f || a_(this);
}, s_.prototype.dispose = function() {
	this.d();
};
function c_(e, t) {
	var n = new s_(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	var r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+state@0.3.2/node_modules/@dnd-kit/state/dist/index.mjs
var l_ = Object.create, u_ = Object.defineProperty, d_ = Object.defineProperties, f_ = Object.getOwnPropertyDescriptor, p_ = Object.getOwnPropertyDescriptors, m_ = Object.getOwnPropertySymbols, h_ = Object.prototype.hasOwnProperty, g_ = Object.prototype.propertyIsEnumerable, __ = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), v_ = (e) => {
	throw TypeError(e);
}, y_ = (e, t, n) => t in e ? u_(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, b_ = (e, t) => {
	for (var n in t ||= {}) h_.call(t, n) && y_(e, n, t[n]);
	if (m_) for (var n of m_(t)) g_.call(t, n) && y_(e, n, t[n]);
	return e;
}, x_ = (e, t) => d_(e, p_(t)), S_ = (e, t) => u_(e, "name", {
	value: t,
	configurable: !0
}), C_ = (e) => [
	,
	,
	,
	l_(e?.[__("metadata")] ?? null)
], w_ = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], T_ = (e) => e !== void 0 && typeof e != "function" ? v_("Function expected") : e, E_ = (e, t, n, r, i) => ({
	kind: w_[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? v_("Already initialized") : i.push(T_(e || null))
}), D_ = (e, t) => y_(t, __("metadata"), e[3]), O_ = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, k_ = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = w_[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && f_(d < 4 ? i : {
		get [n]() {
			return M_(this, a);
		},
		set [n](e) {
			return P_(this, a, e);
		}
	}, n));
	d ? p && d < 4 && S_(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : S_(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = E_(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => j_(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? M_ : F_)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => P_(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? T_(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? v_("Object expected") : (T_(o = s.get) && (v.get = o), T_(o = s.set) && (v.set = o), T_(o = s.init) && g.unshift(o));
	return d || D_(e, i), v && u_(i, n, v), p ? d ^ 4 ? a : v : i;
}, A_ = (e, t, n) => t.has(e) || v_("Cannot " + n), j_ = (e, t) => Object(t) === t ? e.has(t) : v_("Cannot use the \"in\" operator on this value"), M_ = (e, t, n) => (A_(e, t, "read from private field"), n ? n.call(e) : t.get(e)), N_ = (e, t, n) => t.has(e) ? v_("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), P_ = (e, t, n, r) => (A_(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), F_ = (e, t, n) => (A_(e, t, "access private method"), n);
function I_(e, t) {
	if (t) {
		let n;
		return r_(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return r_(e);
}
function L_(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !L_(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !L_(e[n], t[n])) : !1;
	}
	return !1;
}
function K({ get: e }, t) {
	return {
		init(e) {
			return Qg(e);
		},
		get() {
			return e.call(this).value;
		},
		set(t) {
			let n = e.call(this);
			n.peek() !== t && (n.value = t);
		}
	};
}
function R_(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = I_(e.bind(this)), n.set(this, t)), t.value;
	};
}
function z_(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, x_(b_({}, r), { enumerable: e }));
		});
	};
}
function B_(...e) {
	let t = e.map((e) => c_(e));
	return () => t.forEach((e) => e());
}
var V_, H_, U_, W_, G_, K_ = [K], q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov;
G_ = [K], W_ = [K], U_ = [z_()], H_ = [z_()], V_ = [z_()];
var sv = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, O_(q_, 5, this), N_(this, Q_), N_(this, J_, O_(q_, 8, this)), O_(q_, 11, this), N_(this, $_, O_(q_, 12, this)), O_(q_, 15, this), N_(this, rv, O_(q_, 16, this)), O_(q_, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return M_(this, Q_, av);
	}
	get initial() {
		return M_(this, Q_, X_);
	}
	get previous() {
		return M_(this, Q_, tv);
	}
	set current(e) {
		let t = G(() => M_(this, Q_, av));
		e && t && this.equals(t, e) || Vg(() => {
			M_(this, Q_, X_) || P_(this, Q_, e, Z_), P_(this, Q_, t, nv), P_(this, Q_, e, ov);
		});
	}
	reset(e = this.defaultValue) {
		Vg(() => {
			P_(this, Q_, void 0, nv), P_(this, Q_, e, Z_), P_(this, Q_, e, ov);
		});
	}
};
q_ = C_(null), J_ = /* @__PURE__ */ new WeakMap(), Q_ = /* @__PURE__ */ new WeakSet(), $_ = /* @__PURE__ */ new WeakMap(), rv = /* @__PURE__ */ new WeakMap(), Y_ = k_(q_, 20, "#initial", K_, Q_, J_), X_ = Y_.get, Z_ = Y_.set, ev = k_(q_, 20, "#previous", G_, Q_, $_), tv = ev.get, nv = ev.set, iv = k_(q_, 20, "#current", W_, Q_, rv), av = iv.get, ov = iv.set, k_(q_, 2, "current", U_, sv), k_(q_, 2, "initial", H_, sv), k_(q_, 2, "previous", V_, sv), D_(q_, sv);
function cv(e) {
	return G(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var lv, uv = class {
	constructor() {
		N_(this, lv, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? M_(this, lv).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return M_(this, lv).has(e) || M_(this, lv).set(e, /* @__PURE__ */ new Map()), M_(this, lv).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? M_(this, lv).get(e)?.clear() : void 0;
	}
};
lv = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var dv = Object.create, fv = Object.defineProperty, pv = Object.getOwnPropertyDescriptor, mv = Object.getOwnPropertySymbols, hv = Object.prototype.hasOwnProperty, gv = Object.prototype.propertyIsEnumerable, _v = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), vv = (e) => {
	throw TypeError(e);
}, yv = Math.pow, bv = (e, t, n) => t in e ? fv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xv = (e, t) => {
	for (var n in t ||= {}) hv.call(t, n) && bv(e, n, t[n]);
	if (mv) for (var n of mv(t)) gv.call(t, n) && bv(e, n, t[n]);
	return e;
}, Sv = (e, t) => fv(e, "name", {
	value: t,
	configurable: !0
}), Cv = (e) => [
	,
	,
	,
	dv(e?.[_v("metadata")] ?? null)
], wv = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Tv = (e) => e !== void 0 && typeof e != "function" ? vv("Function expected") : e, Ev = (e, t, n, r, i) => ({
	kind: wv[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? vv("Already initialized") : i.push(Tv(e || null))
}), Dv = (e, t) => bv(t, _v("metadata"), e[3]), Ov = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, kv = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = wv[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && pv(d < 4 ? i : {
		get [n]() {
			return Mv(this, a);
		},
		set [n](e) {
			return Pv(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Sv(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Sv(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Ev(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => jv(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Mv : Fv)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Pv(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Tv(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? vv("Object expected") : (Tv(o = s.get) && (v.get = o), Tv(o = s.set) && (v.set = o), Tv(o = s.init) && g.unshift(o));
	return d || Dv(e, i), v && fv(i, n, v), p ? d ^ 4 ? a : v : i;
}, Av = (e, t, n) => t.has(e) || vv("Cannot " + n), jv = (e, t) => Object(t) === t ? e.has(t) : vv("Cannot use the \"in\" operator on this value"), Mv = (e, t, n) => (Av(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nv = (e, t, n) => t.has(e) ? vv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Pv = (e, t, n, r) => (Av(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Fv = (e, t, n) => (Av(e, t, "access private method"), n), Iv = class e {
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	static delta(t, n) {
		return new e(t.x - n.x, t.y - n.y);
	}
	static distance(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	static equals(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	static from({ x: t, y: n }) {
		return new e(t, n);
	}
}, Lv = class e {
	constructor(e, t, n, r) {
		this.left = e, this.top = t, this.width = n, this.height = r, this.scale = {
			x: 1,
			y: 1
		};
	}
	get inverseScale() {
		return {
			x: 1 / this.scale.x,
			y: 1 / this.scale.y
		};
	}
	translate(t, n) {
		let { top: r, left: i, width: a, height: o, scale: s } = this, c = new e(i + t, r + n, a, o);
		return c.scale = xv({}, s), c;
	}
	get boundingRectangle() {
		let { width: e, height: t, left: n, top: r, right: i, bottom: a } = this;
		return {
			width: e,
			height: t,
			left: n,
			top: r,
			right: i,
			bottom: a
		};
	}
	get center() {
		let { left: e, top: t, right: n, bottom: r } = this;
		return new Iv((e + n) / 2, (t + r) / 2);
	}
	get area() {
		let { width: e, height: t } = this;
		return e * t;
	}
	equals(t) {
		if (!(t instanceof e)) return !1;
		let { left: n, top: r, width: i, height: a } = this;
		return n === t.left && r === t.top && i === t.width && a === t.height;
	}
	containsPoint(e) {
		let { top: t, left: n, bottom: r, right: i } = this;
		return t <= e.y && e.y <= r && n <= e.x && e.x <= i;
	}
	intersectionArea(t) {
		return t instanceof e ? Rv(this, t) : 0;
	}
	intersectionRatio(e) {
		let { area: t } = this, n = this.intersectionArea(e);
		return n / (e.area + t - n);
	}
	get bottom() {
		let { top: e, height: t } = this;
		return e + t;
	}
	get right() {
		let { left: e, width: t } = this;
		return e + t;
	}
	get aspectRatio() {
		let { width: e, height: t } = this;
		return e / t;
	}
	get corners() {
		return [
			{
				x: this.left,
				y: this.top
			},
			{
				x: this.right,
				y: this.top
			},
			{
				x: this.left,
				y: this.bottom
			},
			{
				x: this.right,
				y: this.bottom
			}
		];
	}
	static from({ top: t, left: n, width: r, height: i }) {
		return new e(n, t, r, i);
	}
	static delta(e, t, n = {
		x: "center",
		y: "center"
	}) {
		let r = (e, t) => {
			let r = n[t], i = t === "x" ? e.left : e.top, a = t === "x" ? e.width : e.height;
			return r == "start" ? i : r == "end" ? i + a : i + a / 2;
		};
		return Iv.delta({
			x: r(e, "x"),
			y: r(e, "y")
		}, {
			x: r(t, "x"),
			y: r(t, "y")
		});
	}
	static intersectionRatio(t, n) {
		return e.from(t).intersectionRatio(e.from(n));
	}
};
function Rv(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var zv, Bv, Vv, Hv, Uv, Wv = class extends (Vv = sv, Bv = [R_], zv = [R_], Vv) {
	constructor(e) {
		let t = Iv.from(e);
		super(t, (e, t) => Iv.equals(e, t)), Ov(Uv, 5, this), Nv(this, Hv, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Iv.delta(this.current, this.initial);
	}
	get direction() {
		let { current: e, previous: t } = this;
		if (!t) return null;
		let n = {
			x: e.x - t.x,
			y: e.y - t.y
		};
		return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(e) {
		let { current: t } = this, n = Iv.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Mv(this, Hv), o = (e) => Math.round(e / a * 100);
		Vg(() => {
			Pv(this, Hv, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Iv.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Uv = Cv(Vv), Hv = /* @__PURE__ */ new WeakMap(), kv(Uv, 2, "delta", Bv, Wv), kv(Uv, 2, "direction", zv, Wv), Dv(Uv, Wv);
function Gv({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(yv(r, 2) + yv(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var Kv = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Kv || {}), qv = Object.values(Kv), Jv = Object.create, Yv = Object.defineProperty, Xv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptor, Qv = Object.getOwnPropertyDescriptors, $v = Object.getOwnPropertySymbols, ey = Object.prototype.hasOwnProperty, ty = Object.prototype.propertyIsEnumerable, ny = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ry = (e) => {
	throw TypeError(e);
}, iy = (e, t, n) => t in e ? Yv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ay = (e, t) => {
	for (var n in t ||= {}) ey.call(t, n) && iy(e, n, t[n]);
	if ($v) for (var n of $v(t)) ty.call(t, n) && iy(e, n, t[n]);
	return e;
}, oy = (e, t) => Xv(e, Qv(t)), sy = (e, t) => Yv(e, "name", {
	value: t,
	configurable: !0
}), cy = (e, t) => {
	var n = {};
	for (var r in e) ey.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && $v) for (var r of $v(e)) t.indexOf(r) < 0 && ty.call(e, r) && (n[r] = e[r]);
	return n;
}, ly = (e) => [
	,
	,
	,
	Jv(e?.[ny("metadata")] ?? null)
], uy = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], dy = (e) => e !== void 0 && typeof e != "function" ? ry("Function expected") : e, fy = (e, t, n, r, i) => ({
	kind: uy[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? ry("Already initialized") : i.push(dy(e || null))
}), py = (e, t) => iy(t, ny("metadata"), e[3]), q = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, J = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = uy[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Zv(d < 4 ? i : {
		get [n]() {
			return gy(this, a);
		},
		set [n](e) {
			return _y(this, a, e);
		}
	}, n));
	d ? p && d < 4 && sy(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : sy(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = fy(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => hy(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? gy : vy)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => _y(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? dy(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? ry("Object expected") : (dy(o = s.get) && (v.get = o), dy(o = s.set) && (v.set = o), dy(o = s.init) && g.unshift(o));
	return d || py(e, i), v && Yv(i, n, v), p ? d ^ 4 ? a : v : i;
}, my = (e, t, n) => t.has(e) || ry("Cannot " + n), hy = (e, t) => Object(t) === t ? e.has(t) : ry("Cannot use the \"in\" operator on this value"), gy = (e, t, n) => (my(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Y = (e, t, n) => t.has(e) ? ry("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _y = (e, t, n, r) => (my(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), vy = (e, t, n) => (my(e, t, "access private method"), n);
function yy(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function by(e) {
	return (t) => yy(e, t);
}
function xy(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var Sy = [K], Cy, wy, Ty, Ey = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Y(this, wy, q(Cy, 8, this, !1)), q(Cy, 11, this), Y(this, Ty, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return G(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = c_(e.bind(this));
		return gy(this, Ty).add(t), t;
	}
	destroy() {
		gy(this, Ty).forEach((e) => e());
	}
	static configure(e) {
		return yy(this, e);
	}
};
Cy = ly(null), wy = /* @__PURE__ */ new WeakMap(), Ty = /* @__PURE__ */ new WeakMap(), J(Cy, 4, "disabled", Sy, Ey, wy), py(Cy, Ey);
var Dy = class extends Ey {}, Oy, ky = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Y(this, Oy, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(xy).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of gy(this, Oy)) if (!n.includes(e)) {
			if (e.prototype instanceof Dy) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		_y(this, Oy, n);
	}
	get(e) {
		return this.instances.get(e);
	}
	register(e, t) {
		let n = this.instances.get(e);
		if (n) return n.options !== t && (n.options = t), n;
		let r = new e(this.manager, t);
		return this.instances.set(e, r), r;
	}
	unregister(e) {
		let t = this.instances.get(e);
		t && (t.destroy(), this.instances.delete(e));
	}
	destroy() {
		for (let e of this.instances.values()) e.destroy();
		this.instances.clear();
	}
};
Oy = /* @__PURE__ */ new WeakMap();
function Ay(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var jy = [], My, Ny, Py = class extends Ey {
	constructor(e) {
		super(e), Y(this, My), Y(this, Ny), this.computeCollisions = this.computeCollisions.bind(this), _y(this, Ny, Qg(jy)), this.destroy = B_(() => {
			let e = this.computeCollisions(), t = G(() => this.manager.dragOperation.position.current);
			if (e !== jy) {
				let e = gy(this, My);
				if (_y(this, My, t), e && t.x == e.x && t.y == e.y) return;
			} else _y(this, My, void 0);
			gy(this, Ny).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		G(() => {
			e ? gy(this, Ny).value = this.computeCollisions() : _y(this, My, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return jy;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = G(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? jy : (s.sort(Ay), s);
	}
	get collisions() {
		return gy(this, Ny).value;
	}
};
My = /* @__PURE__ */ new WeakMap(), Ny = /* @__PURE__ */ new WeakMap();
var Fy = class {
	constructor() {
		this.registry = /* @__PURE__ */ new Map();
	}
	addEventListener(e, t) {
		let { registry: n } = this, r = new Set(n.get(e));
		return r.add(t), n.set(e, r), () => this.removeEventListener(e, t);
	}
	removeEventListener(e, t) {
		let { registry: n } = this, r = new Set(n.get(e));
		r.delete(t), n.set(e, r);
	}
	dispatch(e, ...t) {
		let { registry: n } = this, r = n.get(e);
		if (r) for (let e of r) e(...t);
	}
}, Iy = class extends Fy {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Ly(e, t = !0) {
	let n = !1;
	return oy(ay({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var Ry = class extends Dy {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = B_(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Ly({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			G(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, zy = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(zy || {}), By = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(By || {}), Vy, Hy, Uy, Wy, Gy, Ky, qy = [K], Jy, Yy;
Ky = [R_], Gy = [R_], Wy = [R_], Uy = [R_], Hy = [R_], Vy = [R_];
var Xy = class {
	constructor() {
		q(Jy, 5, this), Y(this, Yy, q(Jy, 8, this, "idle")), q(Jy, 11, this);
	}
	get current() {
		return this.value;
	}
	get idle() {
		return this.value === "idle";
	}
	get initializing() {
		return this.value === "initializing";
	}
	get initialized() {
		let { value: e } = this;
		return e !== "idle" && e !== "initialization-pending";
	}
	get dragging() {
		return this.value === "dragging";
	}
	get dropped() {
		return this.value === "dropped";
	}
	set(e) {
		this.value = e;
	}
};
Jy = ly(null), Yy = /* @__PURE__ */ new WeakMap(), J(Jy, 4, "value", qy, Xy, Yy), J(Jy, 2, "current", Ky, Xy), J(Jy, 2, "idle", Gy, Xy), J(Jy, 2, "initializing", Wy, Xy), J(Jy, 2, "initialized", Uy, Xy), J(Jy, 2, "dragging", Hy, Xy), J(Jy, 2, "dropped", Vy, Xy), py(Jy, Xy);
var Zy = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return G(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = Ly({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return G(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			Vg(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Ly({ operation: t.snapshot() });
			return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), n.abort(), n) : (t.status.set("initializing"), t.controller = n, this.manager.renderer.rendering.then(() => {
				if (n.signal.aborted) return;
				let { status: e } = t;
				e.current === "initializing" && (t.status.set("dragging"), this.manager.monitor.dispatch("dragstart", {
					nativeEvent: r,
					operation: t.snapshot(),
					cancelable: !1
				}));
			}), n);
		});
	}
	move(e) {
		return G(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = Ly({
				nativeEvent: e.event,
				operation: t.snapshot(),
				by: e.by,
				to: e.to
			}, e.cancelable ?? !0);
			(e.propagate ?? !0) && this.manager.monitor.dispatch("dragmove", i), queueMicrotask(() => {
				if (i.defaultPrevented) return;
				let n = e.to ?? {
					x: t.position.current.x + (e.by?.x ?? 0),
					y: t.position.current.y + (e.by?.y ?? 0)
				};
				t.position.current = n;
			});
		});
	}
	stop(e = {}) {
		return G(() => {
			let { dragOperation: t } = this.manager, { controller: n } = t;
			if (!n || n.signal.aborted) return;
			let r, i = () => {
				let e = {
					resume: () => {},
					abort: () => {}
				};
				return r = new Promise((t, n) => {
					e.resume = t, e.abort = n;
				}), e;
			};
			n.abort();
			let a = () => {
				this.manager.renderer.rendering.then(() => {
					t.status.set("dropped");
					let e = G(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = c_(() => {
							e?.status === "idle" && (n(), r());
						});
					} else this.manager.renderer.rendering.then(r);
				});
			};
			t.canceled = e.canceled ?? !1, this.manager.monitor.dispatch("dragend", {
				nativeEvent: e.event,
				operation: t.snapshot(),
				canceled: e.canceled ?? !1,
				suspend: i
			}), r ? r.then(a).catch(() => t.reset()) : a();
		});
	}
}, Qy, $y, eb, tb = [K], nb, rb, ib, ab, ob;
eb = [K], $y = [K], Qy = [K];
var sb = class {
	constructor(e, t) {
		Y(this, rb, q(nb, 8, this)), q(nb, 11, this), Y(this, ib, q(nb, 12, this)), q(nb, 15, this), Y(this, ab, q(nb, 16, this)), q(nb, 19, this), Y(this, ob, q(nb, 20, this)), q(nb, 23, this);
		let { effects: n, id: r, data: i = {}, disabled: a = !1, register: o = !0 } = e, s = r;
		this.manager = t, this.id = r, this.data = i, this.disabled = a, this.effects = () => [() => {
			let { id: e, manager: t } = this;
			if (e !== s) return t?.registry.register(this), () => t?.registry.unregister(this);
		}, ...n?.() ?? []], this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), t && o && queueMicrotask(this.register);
	}
	register() {
		return this.manager?.registry.register(this);
	}
	unregister() {
		var e;
		(e = this.manager) == null || e.registry.unregister(this);
	}
	destroy() {
		var e;
		(e = this.manager) == null || e.registry.unregister(this);
	}
};
nb = ly(null), rb = /* @__PURE__ */ new WeakMap(), ib = /* @__PURE__ */ new WeakMap(), ab = /* @__PURE__ */ new WeakMap(), ob = /* @__PURE__ */ new WeakMap(), J(nb, 4, "manager", tb, sb, rb), J(nb, 4, "id", eb, sb, ib), J(nb, 4, "data", $y, sb, ab), J(nb, 4, "disabled", Qy, sb, ob), py(nb, sb);
var cb = class {
	constructor() {
		this.map = Qg(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = B_(...t.effects());
			return this.cleanupFunctions.set(t, o), i;
		}, this.unregister = (e, t) => {
			let n = this.map.peek();
			if (n.get(e) !== t) return;
			this.cleanupFunctions.get(t)?.(), this.cleanupFunctions.delete(t);
			let r = new Map(n);
			r.delete(e), this.map.value = r;
		};
	}
	[Symbol.iterator]() {
		return this.map.peek().values();
	}
	get value() {
		return this.map.value.values();
	}
	has(e) {
		return this.map.value.has(e);
	}
	get(e) {
		return this.map.value.get(e);
	}
	destroy() {
		for (let e of this) this.cleanupFunctions.get(e)?.(), e.destroy();
		this.map.value = /* @__PURE__ */ new Map();
	}
}, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb = class extends (hb = sb, mb = [K], pb = [K], fb = [K], db = [R_], ub = [R_], lb = [R_], hb) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = cy(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), q(gb, 5, this), Y(this, _b, q(gb, 8, this)), q(gb, 11, this), Y(this, vb, q(gb, 12, this)), q(gb, 15, this), Y(this, yb, q(gb, 16, this, this.isDragSource ? "dragging" : "idle")), q(gb, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
	}
	get isDropping() {
		return this.status === "dropping" && this.isDragSource;
	}
	get isDragging() {
		return this.status === "dragging" && this.isDragSource;
	}
	get isDragSource() {
		return this.manager?.dragOperation.source?.id === this.id;
	}
};
gb = ly(hb), _b = /* @__PURE__ */ new WeakMap(), vb = /* @__PURE__ */ new WeakMap(), yb = /* @__PURE__ */ new WeakMap(), J(gb, 4, "type", mb, bb, _b), J(gb, 4, "modifiers", pb, bb, vb), J(gb, 4, "status", fb, bb, yb), J(gb, 2, "isDropping", db, bb), J(gb, 2, "isDragging", ub, bb), J(gb, 2, "isDragSource", lb, bb), py(gb, bb);
var xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb = class extends (Db = sb, Eb = [K], Tb = [K], wb = [K], Cb = [K], Sb = [K], xb = [R_], Db) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = cy(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), q(Ob, 5, this), Y(this, kb, q(Ob, 8, this)), q(Ob, 11, this), Y(this, Ab, q(Ob, 12, this)), q(Ob, 15, this), Y(this, jb, q(Ob, 16, this)), q(Ob, 19, this), Y(this, Mb, q(Ob, 20, this)), q(Ob, 23, this), Y(this, Nb, q(Ob, 24, this)), q(Ob, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
Ob = ly(Db), kb = /* @__PURE__ */ new WeakMap(), Ab = /* @__PURE__ */ new WeakMap(), jb = /* @__PURE__ */ new WeakMap(), Mb = /* @__PURE__ */ new WeakMap(), Nb = /* @__PURE__ */ new WeakMap(), J(Ob, 4, "accept", Eb, Pb, kb), J(Ob, 4, "type", Tb, Pb, Ab), J(Ob, 4, "collisionDetector", wb, Pb, jb), J(Ob, 4, "collisionPriority", Cb, Pb, Mb), J(Ob, 4, "shape", Sb, Pb, Nb), J(Ob, 2, "isDropTarget", xb, Pb), py(Ob, Pb);
var Fb = class extends Ey {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, Ib = class extends AbortController {
	constructor(e, t) {
		super(), this.constraints = e, this.onActivate = t, this.activated = !1;
		for (let t of e ?? []) t.controller = this;
	}
	onEvent(e) {
		if (!this.activated) if (this.constraints?.length) for (let t of this.constraints) t.onEvent(e);
		else this.activate(e);
	}
	activate(e) {
		this.activated || (this.activated = !0, this.onActivate(e));
	}
	abort(e) {
		this.activated = !1, super.abort(e);
	}
}, Lb, Rb = class {
	constructor(e) {
		this.options = e, Y(this, Lb);
	}
	set controller(e) {
		_y(this, Lb, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = gy(this, Lb)) == null || t.activate(e);
	}
};
Lb = /* @__PURE__ */ new WeakMap();
var zb = class extends Ey {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, Bb = class {
	constructor(e) {
		this.draggables = new cb(), this.droppables = new cb(), this.plugins = new ky(e), this.sensors = new ky(e), this.modifiers = new ky(e);
	}
	register(e, t) {
		if (e instanceof bb) return this.draggables.register(e.id, e);
		if (e instanceof Pb) return this.droppables.register(e.id, e);
		if (e.prototype instanceof zb) return this.modifiers.register(e, t);
		if (e.prototype instanceof Fb) return this.sensors.register(e, t);
		if (e.prototype instanceof Ey) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof sb) return e instanceof bb ? this.draggables.unregister(e.id, e) : e instanceof Pb ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof zb) return this.modifiers.unregister(e);
		if (e.prototype instanceof Fb) return this.sensors.unregister(e);
		if (e.prototype instanceof Ey) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb = [R_], Xb, Zb, Qb, X, $b, ex, tx, nx, rx, ix;
Jb = [K], qb = [K], Kb = [K], Gb = [K], Wb = [K], Ub = [R_], Hb = [R_], Vb = [R_];
var ax = class {
	constructor(e) {
		q(X, 5, this), Y(this, Xb), Y(this, Zb), Y(this, Qb, new sv(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Xy(), Y(this, $b, q(X, 8, this, !1)), q(X, 11, this), Y(this, ex, q(X, 12, this, null)), q(X, 15, this), Y(this, tx, q(X, 16, this, null)), q(X, 19, this), Y(this, nx, q(X, 20, this, null)), q(X, 23, this), Y(this, rx, q(X, 24, this, [])), q(X, 27, this), this.position = new Wv({
			x: 0,
			y: 0
		}), Y(this, ix, {
			x: 0,
			y: 0
		}), _y(this, Xb, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = gy(this, Qb);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? gy(this, Qb).current = e : gy(this, Qb).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = gy(this, Xb).registry.draggables.get(e);
		return t && _y(this, Zb, t), t ?? gy(this, Zb) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : gy(this, Xb).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(oy(ay({}, this.snapshot()), { transform: n }));
		return _y(this, ix, n), n;
	}
	snapshot() {
		return G(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: gy(this, ix),
			shape: this.shape ? cv(this.shape) : null,
			position: cv(this.position),
			status: cv(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		Vg(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, gy(this, Qb).reset(), this.position.reset({
				x: 0,
				y: 0
			}), _y(this, ix, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
X = ly(null), Xb = /* @__PURE__ */ new WeakMap(), Zb = /* @__PURE__ */ new WeakMap(), Qb = /* @__PURE__ */ new WeakMap(), $b = /* @__PURE__ */ new WeakMap(), ex = /* @__PURE__ */ new WeakMap(), tx = /* @__PURE__ */ new WeakMap(), nx = /* @__PURE__ */ new WeakMap(), rx = /* @__PURE__ */ new WeakMap(), ix = /* @__PURE__ */ new WeakMap(), J(X, 2, "shape", Yb, ax), J(X, 4, "canceled", Jb, ax, $b), J(X, 4, "activatorEvent", qb, ax, ex), J(X, 4, "sourceIdentifier", Kb, ax, tx), J(X, 4, "targetIdentifier", Gb, ax, nx), J(X, 4, "modifiers", Wb, ax, rx), J(X, 2, "source", Ub, ax), J(X, 2, "target", Hb, ax), J(X, 2, "transform", Vb, ax), py(X, ax);
var ox = { get rendering() {
	return Promise.resolve();
} };
function sx(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var cx = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = sx(t.plugins, []), r = sx(t.sensors, []), i = sx(t.modifiers, []), a = t.renderer ?? ox, o = new Iy(this);
		this.registry = new Bb(this), this.monitor = o, this.renderer = a, this.actions = new Zy(this), this.dragOperation = new ax(this), this.collisionObserver = new Py(this), this.plugins = [Ry, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = B_(() => {
			let e = G(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = xy(e);
				return new t(this, n);
			}) ?? t;
		});
		this.destroy = () => {
			c(), s();
		};
	}
	get plugins() {
		return this.registry.plugins.values;
	}
	set plugins(e) {
		this.registry.plugins.values = e;
	}
	get modifiers() {
		return this.registry.modifiers.values;
	}
	set modifiers(e) {
		this.registry.modifiers.values = e;
	}
	get sensors() {
		return this.registry.sensors.values;
	}
	set sensors(e) {
		this.registry.sensors.values = e;
	}
}, lx = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / Iv.distance(t.shape.center, n),
		type: By.PointerIntersection,
		priority: zy.High
	} : null;
}, ux = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = Iv.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: By.ShapeIntersection,
			priority: zy.Normal
		};
	}
	return null;
}, dx = (e) => lx(e) ?? ux(e), fx = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? Lv.from(r.current.boundingRectangle).corners : void 0, o = Lv.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + Iv.distance(Iv.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: By.Collision,
		priority: zy.Normal
	};
}, px = (e) => {
	throw TypeError(e);
}, mx = (e, t, n) => t.has(e) || px("Cannot " + n), Z = (e, t, n) => (mx(e, t, "read from private field"), t.get(e)), hx = (e, t, n) => t.has(e) ? px("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), gx = (e, t, n, r) => (mx(e, t, "write to private field"), t.set(e, n), n), _x = (e, t, n) => (mx(e, t, "access private method"), n);
function vx(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function yx(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (vx(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function bx(e) {
	let { width: t, height: n, top: r, left: i, bottom: a, right: o } = e.getBoundingClientRect();
	return {
		width: t,
		height: n,
		top: r,
		left: i,
		bottom: a,
		right: o
	};
}
function xx(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function Sx(e) {
	return "nodeType" in e;
}
function Cx(e) {
	return e ? xx(e) ? e : Sx(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function wx(e) {
	let { Document: t } = Cx(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function Tx(e) {
	return !e || xx(e) ? !1 : e instanceof Cx(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function Ex(e) {
	return e instanceof Cx(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Dx(e) {
	return e ? xx(e) ? e.document : Sx(e) ? wx(e) ? e : Tx(e) || Ex(e) ? e.ownerDocument : document : document : document;
}
function Ox(e) {
	let { documentElement: t } = Dx(e), n = Cx(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function kx(e, t) {
	if (Ax(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function Ax(e) {
	return e.tagName === "DETAILS";
}
function jx(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!kx(o)) {
			let e = o.getBoundingClientRect(), t = n * (e.bottom - e.top), i = n * (e.right - e.left), a = n * (e.bottom - e.top), s = n * (e.right - e.left);
			r = {
				top: Math.max(r.top, e.top - t),
				right: Math.min(r.right, e.right + i),
				bottom: Math.min(r.bottom, e.bottom + a),
				left: Math.max(r.left, e.left - s),
				width: 0,
				height: 0
			}, r.width = r.right - r.left, r.height = r.bottom - r.top;
		}
		o = o.parentElement;
	}
	let s = a.visualViewport, c = s?.offsetTop ?? 0, l = s?.offsetLeft ?? 0, u = s?.width ?? a.innerWidth, d = s?.height ?? a.innerHeight, f = n * d, p = n * u;
	return r = {
		top: Math.max(r.top, c - f),
		right: Math.min(r.right, l + u + p),
		bottom: Math.min(r.bottom, c + d + f),
		left: Math.max(r.left, l - p),
		width: 0,
		height: 0
	}, r.width = r.right - r.left, r.height = r.bottom - r.top, r.width < 0 && (r.width = 0), r.height < 0 && (r.height = 0), r;
}
function Mx(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var Nx = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Px(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...Px(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...Px(i.document, t));
		}
	} catch {}
	return n;
}
function Fx() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Ix() {
	let e = Fx() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function Lx(e) {
	return !e || !Sx(e) ? !1 : e instanceof Cx(e).ShadowRoot;
}
function Rx(e) {
	if (e && Sx(e)) {
		let t = e.getRootNode();
		if (Lx(t) || t instanceof Document) return t;
	}
	return Dx(e);
}
function zx(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Bx(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		Vx(e) && Vx(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), Hx(e) && Hx(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function Vx(e) {
	return "value" in e;
}
function Hx(e) {
	return e.tagName === "CANVAS";
}
function Ux(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Wx(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return Ux(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Wx(e) {
	return e?.tagName === "IFRAME";
}
var Gx = /* @__PURE__ */ new WeakMap();
function Kx(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var qx = class {
	constructor() {
		this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
			for (let e of this.entries) {
				let [t, { type: n, listener: r, options: i }] = e;
				t.removeEventListener(n, r, i);
			}
			this.entries.clear();
		};
	}
	bind(e, t) {
		let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t], i = [];
		for (let e of n) for (let t of r) {
			let { type: n, listener: r, options: a } = t, o = [e, t];
			e.addEventListener(n, r, a), this.entries.add(o), i.push(o);
		}
		return function() {
			for (let [e, { type: t, listener: n, options: r }] of i) e.removeEventListener(t, n, r);
		};
	}
};
function Jx(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function Yx(e) {
	let t = /* @__PURE__ */ new Set(), n = Jx(e);
	for (; n;) t.add(n), n = Jx(n);
	return t;
}
function Xx(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function Zx(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = Xx(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Qx(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function $x(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = jx(e, t);
	return n > 0 && r > 0;
}
var eS = Nx ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, tS, nS = class extends eS {
	constructor(e) {
		super((t) => {
			if (!Z(this, tS)) {
				gx(this, tS, !0);
				return;
			}
			e(t, this);
		}), hx(this, tS, !1);
	}
};
tS = /* @__PURE__ */ new WeakMap();
var rS = Array.from({ length: 100 }, (e, t) => t / 100), iS = 75, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, hx(this, pS), this.disconnect = () => {
			var e, t, n;
			gx(this, dS, !0), (e = Z(this, sS)) == null || e.disconnect(), (t = Z(this, cS)) == null || t.disconnect(), Z(this, lS).disconnect(), (n = Z(this, uS)) == null || n.remove();
		}, hx(this, aS, !0), hx(this, oS), hx(this, sS), hx(this, cS), hx(this, lS), hx(this, uS), hx(this, dS, !1), hx(this, fS, Zx(() => {
			var e;
			let { element: t } = this;
			if ((e = Z(this, cS)) == null || e.disconnect(), Z(this, dS) || !Z(this, aS) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = jx(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, gx(this, cS, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? Lv.intersectionRatio(r, jx(t)) : n.intersectionRatio) !== 1 && Z(this, fS).call(this);
			}, {
				threshold: rS,
				rootMargin: f,
				root: n
			})), Z(this, cS).observe(t), _x(this, pS, mS).call(this);
		}, iS)), this.boundingClientRect = e.getBoundingClientRect(), gx(this, aS, $x(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (gx(this, uS, document.createElement("div")), Z(this, uS).style.background = "rgba(0,0,0,0.15)", Z(this, uS).style.position = "fixed", Z(this, uS).style.pointerEvents = "none", i.body.appendChild(Z(this, uS))), gx(this, lS, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Z(this, aS);
			gx(this, aS, a), !(!o && !s) && (c && !a ? ((n = Z(this, cS)) == null || n.disconnect(), this.callback(null), (r = Z(this, sS)) == null || r.disconnect(), gx(this, sS, void 0), Z(this, uS) && (Z(this, uS).style.visibility = "hidden")) : Z(this, fS).call(this), a && !Z(this, sS) && (gx(this, sS, new nS(Z(this, fS))), Z(this, sS).observe(e)));
		}, {
			threshold: rS,
			root: i
		})), Z(this, aS) && !n.skipInitial && this.callback(this.boundingClientRect), Z(this, lS).observe(e);
	}
};
aS = /* @__PURE__ */ new WeakMap(), oS = /* @__PURE__ */ new WeakMap(), sS = /* @__PURE__ */ new WeakMap(), cS = /* @__PURE__ */ new WeakMap(), lS = /* @__PURE__ */ new WeakMap(), uS = /* @__PURE__ */ new WeakMap(), dS = /* @__PURE__ */ new WeakMap(), fS = /* @__PURE__ */ new WeakMap(), pS = /* @__PURE__ */ new WeakSet(), mS = function() {
	Z(this, dS) || (_x(this, pS, hS).call(this), !Qx(this.boundingClientRect, Z(this, oS)) && (this.callback(this.boundingClientRect), gx(this, oS, this.boundingClientRect)));
}, hS = function() {
	if (Z(this, uS)) {
		let { top: e, left: t, width: n, height: r } = jx(this.element);
		Z(this, uS).style.overflow = "hidden", Z(this, uS).style.visibility = "visible", Z(this, uS).style.top = `${Math.floor(e)}px`, Z(this, uS).style.left = `${Math.floor(t)}px`, Z(this, uS).style.width = `${Math.floor(n)}px`, Z(this, uS).style.height = `${Math.floor(r)}px`;
	}
};
var _S = /* @__PURE__ */ new WeakMap(), vS = /* @__PURE__ */ new WeakMap();
function yS(e, t) {
	let n = _S.get(e);
	return n ||= {
		disconnect: new gS(e, (t) => {
			let n = _S.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), _S.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (_S.delete(e), n.disconnect());
	};
}
function bS(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = yS(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function xS(e, t) {
	let n = e.ownerDocument;
	if (!vS.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), vS.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = vS.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), vS.delete(n));
	});
}
var SS, CS, wS, TS, ES = class {
	constructor(e, t, n) {
		this.callback = t, hx(this, SS), hx(this, CS, !1), hx(this, wS), hx(this, TS, Zx((e) => {
			if (!Z(this, CS) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Z(this, wS)) if (e.target.contains(t)) {
					this.callback(Z(this, SS).boundingClientRect);
					break;
				}
			}
		}, iS));
		let r = Yx(e), i = bS(r, t), a = xS(e, Z(this, TS));
		gx(this, wS, r), gx(this, SS, new gS(e, t, n)), this.disconnect = () => {
			Z(this, CS) || (gx(this, CS, !0), i(), a(), Z(this, SS).disconnect());
		};
	}
};
SS = /* @__PURE__ */ new WeakMap(), CS = /* @__PURE__ */ new WeakMap(), wS = /* @__PURE__ */ new WeakMap(), TS = /* @__PURE__ */ new WeakMap();
function DS(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function OS(e) {
	try {
		DS(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function kS(e) {
	return !Nx || !e ? !1 : e === Dx(e).scrollingElement;
}
function AS(e) {
	let t = Cx(e), n = kS(e) ? Ox(e) : bx(e), r = t.visualViewport, i = kS(e) ? {
		height: r?.height ?? t.innerHeight,
		width: r?.width ?? t.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, a = {
		current: {
			x: e.scrollLeft,
			y: e.scrollTop
		},
		max: {
			x: e.scrollWidth - i.width,
			y: e.scrollHeight - i.height
		}
	};
	return {
		rect: n,
		position: a,
		isTop: a.current.y <= 0,
		isLeft: a.current.x <= 0,
		isBottom: a.current.y >= a.max.y,
		isRight: a.current.x >= a.max.x
	};
}
function jS(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = AS(e), { x: s, y: c } = t ?? {
		x: 0,
		y: 0
	}, l = !n && o.current.y + c > 0, u = !r && o.current.y + c < o.max.y, d = !i && o.current.x + s > 0, f = !a && o.current.x + s < o.max.x;
	return {
		top: l,
		bottom: u,
		left: d,
		right: f,
		x: d || f,
		y: l || u
	};
}
var MS = class {
	constructor(e) {
		this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: e, resolvers: t } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let t of e) t();
			for (let e of t) e();
		};
	}
	schedule(e) {
		return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
	}
}, NS = new MS((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), PS = new MS((e) => setTimeout(e, 50)), FS = /* @__PURE__ */ new Map(), IS = FS.clear.bind(FS);
function LS(e, t = !1) {
	if (!t) return RS(e);
	let n = FS.get(e);
	return n || (n = RS(e), FS.set(e, n), PS.schedule(IS), n);
}
function RS(e) {
	return Cx(e).getComputedStyle(e);
}
function zS(e, t = LS(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function BS(e, t = LS(e, !0)) {
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" ? n.test(r) : !1;
	});
}
var VS = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function HS(e, t = VS) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (wx(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && Lx(t)) return o(t.host);
		if (!Tx(t)) return Ex(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = LS(t, !0);
		if (r && t === e || BS(t, s) && a.add(t), zS(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function US(e) {
	let [t] = HS(e, { limit: 1 });
	return t ?? null;
}
function WS(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = Jx(e);
	for (; r;) {
		if (r === t) return n;
		let e = bx(r), { x: i, y: a } = GS(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = Jx(r);
	}
	return n;
}
function GS(e, t = bx(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (Tx(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = LS(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function KS(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function qS(e) {
	if (e === "none") return null;
	let [t, n, r = "0"] = e.split(" "), i = {
		x: parseFloat(t),
		y: parseFloat(n),
		z: parseInt(r, 10)
	};
	return isNaN(i.x) && isNaN(i.y) ? null : {
		x: isNaN(i.x) ? 0 : i.x,
		y: isNaN(i.y) ? 0 : i.y,
		z: isNaN(i.z) ? 0 : i.z
	};
}
function JS(e) {
	let { scale: t, transform: n, translate: r } = e, i = KS(t), a = qS(r), o = YS(n);
	if (!o && !i && !a) return null;
	let s = {
		x: i?.x ?? 1,
		y: i?.y ?? 1
	}, c = {
		x: a?.x ?? 0,
		y: a?.y ?? 0
	}, l = {
		x: o?.x ?? 0,
		y: o?.y ?? 0,
		scaleX: o?.scaleX ?? 1,
		scaleY: o?.scaleY ?? 1
	};
	return {
		x: c.x + l.x,
		y: c.y + l.y,
		z: a?.z ?? 0,
		scaleX: s.x * l.scaleX,
		scaleY: s.y * l.scaleY
	};
}
function YS(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	} else if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
var XS = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(XS || {}), ZS = {
	x: .2,
	y: .2
}, QS = {
	x: 10,
	y: 10
};
function $S(e, t, n, r = 25, i = ZS, a = QS) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = AS(e), p = WS(e), m = JS(LS(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new Lv(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
		x: 0,
		y: 0
	}, y = {
		x: 0,
		y: 0
	}, b = {
		height: _.height * i.y,
		width: _.width * i.x
	};
	return (!l || g && !u) && s <= _.top + b.height && n?.y !== 1 && o >= _.left - a.x && o <= _.right + a.x ? (v.y = g ? 1 : -1, y.y = r * Math.abs((_.top + b.height - s) / b.height)) : (!u || g && !l) && s >= _.bottom - b.height && n?.y !== -1 && o >= _.left - a.x && o <= _.right + a.x && (v.y = g ? -1 : 1, y.y = r * Math.abs((_.bottom - b.height - s) / b.height)), (!f || h && !d) && o >= _.right - b.width && n?.x !== -1 && s >= _.top - a.y && s <= _.bottom + a.y ? (v.x = h ? -1 : 1, y.x = r * Math.abs((_.right - b.width - o) / b.width)) : (!d || h && !f) && o <= _.left + b.width && n?.x !== 1 && s >= _.top - a.y && s <= _.bottom + a.y && (v.x = h ? 1 : -1, y.x = r * Math.abs((_.left + b.width - o) / b.width)), {
		direction: v,
		speed: y
	};
}
function eC(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function tC(e, t = !1) {
	if (eC(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!Tx(e)) return e.scrollIntoView();
	var n = US(e);
	if (!Tx(n)) return;
	let r = LS(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function nC(e, t, n) {
	let { scaleX: r, scaleY: i, x: a, y: o } = t, s = e.left + a + (1 - r) * parseFloat(n), c = e.top + o + (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width * r : e.width, u = i ? e.height * i : e.height;
	return {
		width: l,
		height: u,
		top: c,
		right: s + l,
		bottom: c + u,
		left: s
	};
}
function rC(e, t, n) {
	let { scaleX: r, scaleY: i, x: a, y: o } = t, s = e.left - a - (1 - r) * parseFloat(n), c = e.top - o - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width / r : e.width, u = i ? e.height / i : e.height;
	return {
		width: l,
		height: u,
		top: c,
		right: s + l,
		bottom: c + u,
		left: s
	};
}
function iC({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function aC(e, t = LS(e).translate, n = !0) {
	if (n) {
		let t = yx(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = qS(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = qS(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var oC = new MS((e) => setTimeout(e, 0)), sC = /* @__PURE__ */ new Map(), cC = sC.clear.bind(sC);
function lC(e) {
	let t = e.ownerDocument, n = sC.get(t);
	if (n) return n;
	n = t.getAnimations(), sC.set(t, n), oC.schedule(cC);
	let r = n.filter((t) => vx(t.effect) && t.effect.target === e);
	return sC.set(e, r), n;
}
function uC(e, t) {
	let n = lC(e).filter((e) => {
		if (vx(e.effect)) {
			let { target: n } = e.effect;
			if ((n && t.isValidTarget?.call(t, n)) ?? !0) return e.effect.getKeyframes().some((e) => {
				for (let n of t.properties) if (e[n]) return !0;
			});
		}
	}).map((e) => {
		let { effect: t, currentTime: n } = e, r = t?.getComputedTiming().duration;
		if (!(e.pending || e.playState === "finished") && typeof r == "number" && typeof n == "number" && n < r) return e.currentTime = r, () => {
			e.currentTime = n;
		};
	});
	if (n.length > 0) return () => n.forEach((e) => e?.());
}
var dC = class extends Lv {
	constructor(e, t = {}) {
		let { frameTransform: n = WS(e), ignoreTransforms: r, getBoundingClientRect: i = bx } = t, a = uC(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || Fx()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = LS(e), p = JS(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = fC(e, f);
		a?.(), p && (d = rC(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = nC(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function fC(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = vx(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = JS({
				transform: typeof a == "string" && a ? a : t.transform,
				translate: typeof o == "string" && o ? o : t.translate,
				scale: typeof s == "string" && s ? s : t.scale
			});
			e && (r = r ? {
				x: r.x + e.x,
				y: r.y + e.y,
				z: r.z ?? e.z,
				scaleX: r.scaleX * e.scaleX,
				scaleY: r.scaleY * e.scaleY
			} : e);
		}
	}
	return r;
}
function pC(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var mC = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (pC(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (pC(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (pC(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function hC(e) {
	return e ? e instanceof Cx(e).Element || Sx(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function gC(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = Cx(e.target);
	return e instanceof t;
}
function _C(e) {
	if (!e) return !1;
	let { PointerEvent: t } = Cx(e.target);
	return e instanceof t;
}
function vC(e) {
	if (!hC(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || yC(e);
}
function yC(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var bC = {};
function xC(e) {
	let t = bC[e] == null ? 0 : bC[e] + 1;
	return bC[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var SC = Object.create, CC = Object.defineProperty, wC = Object.defineProperties, TC = Object.getOwnPropertyDescriptor, EC = Object.getOwnPropertyDescriptors, DC = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, kC = Object.prototype.propertyIsEnumerable, AC = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), jC = (e) => {
	throw TypeError(e);
}, MC = (e, t, n) => t in e ? CC(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, NC = (e, t) => {
	for (var n in t ||= {}) OC.call(t, n) && MC(e, n, t[n]);
	if (DC) for (var n of DC(t)) kC.call(t, n) && MC(e, n, t[n]);
	return e;
}, PC = (e, t) => wC(e, EC(t)), FC = (e, t) => CC(e, "name", {
	value: t,
	configurable: !0
}), IC = (e, t) => {
	var n = {};
	for (var r in e) OC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && DC) for (var r of DC(e)) t.indexOf(r) < 0 && kC.call(e, r) && (n[r] = e[r]);
	return n;
}, LC = (e) => [
	,
	,
	,
	SC(e?.[AC("metadata")] ?? null)
], RC = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], zC = (e) => e !== void 0 && typeof e != "function" ? jC("Function expected") : e, BC = (e, t, n, r, i) => ({
	kind: RC[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? jC("Already initialized") : i.push(zC(e || null))
}), VC = (e, t) => MC(t, AC("metadata"), e[3]), HC = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, UC = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = RC[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && TC(d < 4 ? i : {
		get [n]() {
			return Q(this, a);
		},
		set [n](e) {
			return KC(this, a, e);
		}
	}, n));
	d ? p && d < 4 && FC(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : FC(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = BC(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => GC(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Q : qC)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => KC(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? zC(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? jC("Object expected") : (zC(o = s.get) && (v.get = o), zC(o = s.set) && (v.set = o), zC(o = s.init) && g.unshift(o));
	return d || VC(e, i), v && CC(i, n, v), p ? d ^ 4 ? a : v : i;
}, WC = (e, t, n) => t.has(e) || jC("Cannot " + n), GC = (e, t) => Object(t) === t ? e.has(t) : jC("Cannot use the \"in\" operator on this value"), Q = (e, t, n) => (WC(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => t.has(e) ? jC("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), KC = (e, t, n, r) => (WC(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), qC = (e, t, n) => (WC(e, t, "access private method"), n), JC = {
	role: "button",
	roleDescription: "draggable"
}, YC = "dnd-kit-description", XC = "dnd-kit-announcement", ZC = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, QC = {
	dragstart({ operation: { source: e } }) {
		if (e) return `Picked up draggable item ${e.id}.`;
	},
	dragover({ operation: { source: e, target: t } }) {
		if (!(!e || e.id === t?.id)) return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
	},
	dragend({ operation: { source: e, target: t }, canceled: n }) {
		if (e) return n ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
	}
};
function $C(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function ew(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function tw(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var nw = ["dragover", "dragmove"], rw = class extends Ey {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = YC, announcement: i = XC } = {}, announcements: a = QC, screenReaderInstructions: o = ZC, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : xC(r), l = n ? `${i}-${n}` : xC(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => NS.schedule(m), g = iw(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, nw.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = ew(c, o.draggable), e.push(u)), d?.isConnected || (d = tw(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!$C(t) || Fx()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", JC.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", JC.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && NS.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function iw(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var aw = class extends Ey {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = I_(() => Dx(this.manager.dragOperation.source?.element));
		this.destroy = c_(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, ow = /* @__PURE__ */ new Map(), sw, cw, lw, uw, dw, fw, pw, mw, hw, gw, _w, vw, yw, bw = class extends (dw = Dy, uw = [K], lw = [R_], cw = [R_], sw = [R_], dw) {
	constructor(e) {
		super(e), HC(pw, 5, this), $(this, hw), $(this, fw, /* @__PURE__ */ new Set()), $(this, mw, HC(pw, 8, this, /* @__PURE__ */ new Set())), HC(pw, 11, this), this.registerEffect(qC(this, hw, gw));
	}
	register(e) {
		return Q(this, fw).add(e), () => {
			Q(this, fw).delete(e);
		};
	}
	addRoot(e) {
		return G(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			G(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return Rx(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return Rx(e?.element ?? null);
	}
	get roots() {
		let { status: e } = this.manager.dragOperation;
		if (e.initializing || e.initialized) {
			let e = [this.sourceRoot, this.targetRoot].filter((e) => e != null);
			return /* @__PURE__ */ new Set([...e, ...this.additionalRoots]);
		}
		return /* @__PURE__ */ new Set();
	}
};
pw = LC(dw), fw = /* @__PURE__ */ new WeakMap(), mw = /* @__PURE__ */ new WeakMap(), hw = /* @__PURE__ */ new WeakSet(), gw = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Q(this, fw)) t.push(qC(this, hw, _w).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, _w = function(e, t) {
	let n = ow.get(e);
	n || (n = /* @__PURE__ */ new Map(), ow.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = wx(e) ? qC(this, hw, vw).call(this, e, n, t) : qC(this, hw, yw).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, vw = function(e, t, n) {
	let r = e.createElement("style");
	r.textContent = n, e.head.prepend(r);
	let i = new MutationObserver((t) => {
		for (let n of t) for (let t of Array.from(n.removedNodes)) if (t === r) {
			e.head.prepend(r);
			return;
		}
	});
	return i.observe(e.head, { childList: !0 }), {
		refCount: 0,
		cleanup: () => {
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && ow.delete(e);
		}
	};
}, yw = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (Lx(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && ow.delete(e);
		}
	};
}, UC(pw, 4, "additionalRoots", uw, bw, mw), UC(pw, 2, "sourceRoot", lw, bw), UC(pw, 2, "targetRoot", cw, bw), UC(pw, 2, "roots", sw, bw), VC(pw, bw);
var xw = "data-dnd-", Sw = `${xw}dropping`, Cw = "--dnd-", ww = `${xw}dragging`, Tw = `${xw}placeholder`, Ew = [
	ww,
	Tw,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], Dw = ["view-transition-name"], Ow = `
  :is(:root,:host) [${ww}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${Cw}top, 0px) !important;
    left: var(${Cw}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${Cw}width, auto);
    max-width: var(${Cw}width, auto);
    height: var(${Cw}height, auto);
    max-height: var(${Cw}height, auto);
    transition: var(${Cw}transition) !important;
  }

  :is(:root,:host) [${Tw}] {
    transition: none;
  }

  :is(:root,:host) [${Tw}='hidden'] {
    visibility: hidden;
  }

  [${ww}] * {
    pointer-events: none !important;
  }

  [${ww}]:not([${Sw}]) {
    translate: var(${Cw}translate) !important;
  }

  [${ww}][style*='${Cw}scale'] {
    scale: var(${Cw}scale) !important;
    transform-origin: var(${Cw}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${ww}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${ww}]::backdrop, [${xw}overlay]:not([${ww}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function kw(e, t = "hidden") {
	return G(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = Aw(n, r.registry.droppables), a = [], o = Bx(n), { remove: s } = o;
		return jw(i, o, a), Mw(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function Aw(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${xw}${xC("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function jw(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Gx.set(o, a), n.push(() => {
			Gx.delete(o), r.proxy = void 0;
		});
	}
}
function Mw(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(Tw, t);
}
function Nw(e, t) {
	return e === t ? !0 : Jx(e) === Jx(t);
}
function Pw(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && hC(t) && t.hasAttribute("popover") && requestAnimationFrame(() => OS(t));
}
function Fw(e) {
	return e.tagName === "TR";
}
function Iw(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || Ew.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (pC(e) && pC(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (Dw.includes(e) || e.startsWith(Cw)) continue;
						let r = n.getPropertyValue(e);
						t.style.setProperty(e, r);
					}
				}
			} else a === null ? t.removeAttribute(r) : t.setAttribute(r, a);
		}
		i && n && (t.innerHTML = e.innerHTML);
	});
	return r.observe(e, {
		attributes: !0,
		subtree: !0,
		childList: !0
	}), r;
}
function Lw(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), OS(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), OS(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function Rw(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new dC(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = Ix();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, Cw), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Fw(e.element) && Fw(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new dC(e.feedbackElement);
	});
}
var zw = 250, Bw = "ease";
function Vw(e) {
	var t;
	let { animation: n } = e;
	if (typeof n == "function") {
		let t = n({
			element: e.element,
			feedbackElement: e.feedbackElement,
			placeholder: e.placeholder,
			translate: e.translate,
			moved: e.moved
		});
		Promise.resolve(t).then(() => {
			e.cleanup(), requestAnimationFrame(e.restoreFocus);
		});
		return;
	}
	let { duration: r = zw, easing: i = Bw } = n ?? {};
	OS(e.feedbackElement);
	let [, a] = yx(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: Nw(e.feedbackElement, o) ? null : void 0 }, c = new dC(e.feedbackElement, s), l = qS(LS(e.feedbackElement).translate) ?? e.translate, u = new dC(o, s), d = Lv.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, Cw), e.feedbackElement.setAttribute(Sw, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), iC({
		element: e.feedbackElement,
		keyframes: PC(NC(NC({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: zx(Cx(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(Sw), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var Hw, Uw, Ww, Gw, Kw, qw, Jw, Yw = class extends (Uw = Ey, Hw = [K], Uw) {
	constructor(e, t) {
		super(e, t), $(this, Kw), $(this, Gw, HC(Ww, 8, this)), HC(Ww, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(bw), r = n?.register(Ow);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(qC(this, Kw, qw).bind(this, n)), this.registerEffect(qC(this, Kw, Jw));
	}
};
Ww = LC(Uw), Gw = /* @__PURE__ */ new WeakMap(), Kw = /* @__PURE__ */ new WeakSet(), qw = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = Rx(t);
	if (n) return e.addRoot(n);
}, Jw = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = WS(u), f = WS(s), p = !Nw(s, u), m = new dC(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new mC(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: w, paddingBlockEnd: T, paddingInlineStart: E, paddingInlineEnd: D, borderInlineStartWidth: O, borderInlineEndWidth: k, borderBlockStartWidth: ee, borderBlockEndWidth: A } = LS(s), te = c === "clone", ne = C === "content-box", re = ne ? parseInt(E) + parseInt(D) + parseInt(O) + parseInt(k) : 0, ie = ne ? parseInt(w) + parseInt(T) + parseInt(ee) + parseInt(A) : 0, j = c !== "move" && !this.overlay ? kw(a, te ? "clone" : "hidden") : null, ae = G(() => gC(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = qS(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = G(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: oe } = l, se = v * d.scaleY + d.y, ce = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: ce,
		y: se
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = oe;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let le = {
		x: l.coordinates.x - ce,
		y: l.coordinates.y - se
	}, ue = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * oe.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * oe.y
	}, de = {
		x: le.x / d.scaleX + ue.width,
		y: le.y / d.scaleY + ue.height
	}, fe = {
		left: y + de.x,
		top: v + de.y
	};
	u.setAttribute(ww, "true");
	let pe = G(() => r.transform), me = l.translate ?? {
		x: 0,
		y: 0
	}, he = pe.x * d.scaleX + me.x, ge = pe.y * d.scaleY + me.y, _e = Ix();
	b.set({
		width: g - re,
		height: _ - ie,
		top: fe.top + _e.y,
		left: fe.left + _e.x,
		translate: `${he}px ${ge}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${oe.x * 100}% ${oe.y * 100}%`
	}, Cw), j && (s.insertAdjacentElement("afterend", j), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), DS(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), OS(u), u.addEventListener("beforetoggle", Pw));
	let ve, ye, be, xe = Rw({
		placeholder: j,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: oe,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: re,
		heightOffset: ie,
		delta: de,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => ve,
		getSavedCellWidths: () => be,
		setSavedCellWidths: (e) => {
			be = e;
		}
	}), Se = new dC(u);
	G(() => r.shape = Se);
	let M = Cx(u), Ce = (e) => {
		this.manager.actions.stop({ event: e });
	}, we = zx(M);
	ae && M.addEventListener("resize", Ce), G(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), j && (xe.observe(j), ve = Iw(s, j, te), ye = Lw(s, j, u));
	let N = t.dragOperation.source?.id, P = () => {
		if (!ae || N == null) return;
		let e = t.registry.draggables.get(N), n = e?.handle ?? e?.element;
		Tx(n) && n.focus();
	}, Te = () => {
		if (ve?.disconnect(), ye?.disconnect(), xe.disconnect(), M.removeEventListener("resize", Ce), DS(u) && (u.removeEventListener("beforetoggle", Pw), u.removeAttribute("popover")), u.removeAttribute(ww), b.reset(), be && Fw(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = be[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		j && (t || j.parentElement !== u.parentElement) && u.isConnected && j.replaceWith(u), j?.remove();
	}, Ee = n?.dropAnimation, De = this, Oe = B_(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = G(() => r.modifiers), s = G(() => r.shape?.current), c = ae && !we ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, Cw), ve?.takeRecords(), s && s !== Se && a && !o.length) {
				let e = Iv.delta(i, a);
				r.shape = Lv.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new dC(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = De.dropAnimation === void 0 ? Ee : De.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				Te();
				return;
			}
			t.renderer.rendering.then(() => {
				Vw({
					element: s,
					feedbackElement: u,
					placeholder: j,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => ve,
					cleanup: Te,
					restoreFocus: P
				});
			});
		}
	});
	return () => {
		Te(), Oe();
	};
}, UC(Ww, 4, "overlay", Hw, Yw, Gw), VC(Ww, Yw), Yw.configure = by(Yw);
var Xw = Yw, Zw = !0, Qw = !1, $w, eT, tT, nT = (tT = [K], XS.Forward), rT, iT, aT;
eT = ($w = [K], XS.Reverse);
var oT = class {
	constructor() {
		$(this, iT, HC(rT, 8, this, Zw)), HC(rT, 11, this), $(this, aT, HC(rT, 12, this, Zw)), HC(rT, 15, this);
	}
	isLocked(e) {
		return e === XS.Idle ? !1 : e == null ? this[XS.Forward] === Zw && this[XS.Reverse] === Zw : this[e] === Zw;
	}
	unlock(e) {
		e !== XS.Idle && (this[e] = Qw);
	}
};
rT = LC(null), iT = /* @__PURE__ */ new WeakMap(), aT = /* @__PURE__ */ new WeakMap(), UC(rT, 4, nT, tT, oT, iT), UC(rT, 4, eT, $w, oT, aT), VC(rT, oT);
var sT = [XS.Forward, XS.Reverse], cT = class {
	constructor() {
		this.x = new oT(), this.y = new oT();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, lT = class extends Ey {
	constructor(e) {
		super(e);
		let t = Qg(new cT()), n = null;
		this.signal = t, c_(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new cT();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: uT(i.x, n.x),
					y: uT(i.y, n.y)
				}, r = t.peek();
				Vg(() => {
					for (let t of qv) for (let n of sT) e[t] === n && r[t].unlock(n);
					t.value = r;
				});
			}
			n = i;
		});
	}
	get current() {
		return this.signal.peek();
	}
};
function uT(e, t) {
	return Math.sign(e - t);
}
var dT, fT, pT, mT, hT, gT, _T = class extends (fT = Dy, dT = [K], fT) {
	constructor(e) {
		super(e), $(this, mT, HC(pT, 8, this, !1)), HC(pT, 11, this), $(this, hT), $(this, gT, () => {
			if (!Q(this, hT)) return;
			let { element: e, by: t } = Q(this, hT);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return KC(this, hT, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: vT(n.x),
					y: vT(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = jS(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = $S(e, r, i);
						if (a) for (let e of qv) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Q(this, hT)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return KC(this, hT, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), NS.schedule(Q(this, gT)), !0;
							}
						}
					}
				}
			}
			return KC(this, hT, void 0), !1;
		};
		let t = null, n = null, r = I_(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = Ux(Rx(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = I_(() => {
			let t = r.value, { documentElement: i } = Dx(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = HS(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = HS(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, L_);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new lT(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !gC(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
pT = LC(fT), mT = /* @__PURE__ */ new WeakMap(), hT = /* @__PURE__ */ new WeakMap(), gT = /* @__PURE__ */ new WeakMap(), UC(pT, 4, "autoScrolling", dT, _T, mT), VC(pT, _T);
function vT(e) {
	return e > 0 ? XS.Forward : e < 0 ? XS.Reverse : XS.Idle;
}
var yT = new class {
	constructor(e) {
		this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
			let { tasks: e, resolvers: t } = this;
			this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
			for (let t of e) t();
			for (let e of t) e();
		};
	}
	schedule(e) {
		return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((e) => this.resolvers.add(e));
	}
}((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), bT = 10, xT = class extends Ey {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(_T);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = c_(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => yT.schedule(n.scroll), bT);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, ST = {
	capture: !0,
	passive: !0
}, CT, wT = class extends Dy {
	constructor(e) {
		super(e), $(this, CT), this.handleScroll = () => {
			Q(this, CT) ?? KC(this, CT, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), KC(this, CT, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = c_(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, ST), () => {
					e.removeEventListener("scroll", this.handleScroll, ST);
				};
			}
		});
	}
};
CT = /* @__PURE__ */ new WeakMap();
var TT = class extends Ey {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = c_(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), ET(), document.addEventListener("selectionchange", ET, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", ET, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function ET() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var DT = Object.freeze({
	offset: 10,
	keyboardCodes: {
		start: ["Space", "Enter"],
		cancel: ["Escape"],
		end: [
			"Space",
			"Enter",
			"Tab"
		],
		up: ["ArrowUp"],
		down: ["ArrowDown"],
		left: ["ArrowLeft"],
		right: ["ArrowRight"]
	},
	preventActivation(e, t) {
		let n = t.handle ?? t.element;
		return e.target !== n;
	}
}), OT, kT = class extends Fb {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, $(this, OT, []), this.listeners = new qx(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !hC(e.target) || t.disabled) return;
			let { keyboardCodes: r = DT.keyboardCodes, preventActivation: i = DT.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return c_(() => {
			let n = e.handle ?? e.element, r = (n) => {
				gC(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), tC(r);
		let { center: i } = new dC(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = Dx(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Q(this, OT).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = DT.keyboardCodes } = n ?? {};
		if (jT(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = jT(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		jT(e, r.up) ? this.handleMove("up", e) : jT(e, r.down) && this.handleMove("down", e), jT(e, r.left) ? this.handleMove("left", e) : jT(e, r.right) && this.handleMove("right", e);
	}
	handleEnd(e, t) {
		this.manager.actions.stop({
			event: e,
			canceled: t
		}), this.cleanup();
	}
	handleMove(e, t) {
		let { shape: n } = this.manager.dragOperation, r = t.shiftKey ? 5 : 1, i = {
			x: 0,
			y: 0
		}, a = this.options?.offset ?? DT.offset;
		if (typeof a == "number" && (a = {
			x: a,
			y: a
		}), n) {
			switch (e) {
				case "up":
					i = {
						x: 0,
						y: -a.y * r
					};
					break;
				case "down":
					i = {
						x: 0,
						y: a.y * r
					};
					break;
				case "left":
					i = {
						x: -a.x * r,
						y: 0
					};
					break;
				case "right":
					i = {
						x: a.x * r,
						y: 0
					};
					break;
			}
			(i.x || i.y) && (t.preventDefault(), this.manager.actions.move({
				event: t,
				by: i
			}));
		}
	}
	sideEffects() {
		let e = this.manager.registry.plugins.get(xT);
		e?.disabled === !1 && (e.disable(), Q(this, OT).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Q(this, OT).forEach((e) => e()), KC(this, OT, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
OT = /* @__PURE__ */ new WeakMap(), kT.configure = by(kT), kT.defaults = DT;
var AT = kT;
function jT(e, t) {
	return t.includes(e.code);
}
var MT, NT = class extends Rb {
	constructor() {
		super(...arguments), $(this, MT);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				KC(this, MT, Mx(e));
				break;
			case "pointermove":
				if (!Q(this, MT)) return;
				let { x: t, y: n } = Mx(e), r = {
					x: t - Q(this, MT).x,
					y: n - Q(this, MT).y
				}, { tolerance: i } = this.options;
				if (i && Gv(r, i)) {
					this.abort();
					return;
				}
				Gv(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		KC(this, MT, void 0);
	}
};
MT = /* @__PURE__ */ new WeakMap();
var PT, FT, IT = class extends Rb {
	constructor() {
		super(...arguments), $(this, PT), $(this, FT);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				KC(this, FT, Mx(e)), KC(this, PT, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Q(this, FT)) return;
				let { x: t, y: n } = Mx(e);
				Gv({
					x: t - Q(this, FT).x,
					y: n - Q(this, FT).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Q(this, PT) && (clearTimeout(Q(this, PT)), KC(this, FT, void 0), KC(this, PT, void 0));
	}
};
PT = /* @__PURE__ */ new WeakMap(), FT = /* @__PURE__ */ new WeakMap();
var LT = class {};
LT.Delay = IT, LT.Distance = NT;
var RT = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && hC(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new LT.Delay({
			value: 250,
			tolerance: 5
		})] : vC(r) && !e.defaultPrevented ? [new LT.Delay({
			value: 200,
			tolerance: 0
		})] : [new LT.Delay({
			value: 200,
			tolerance: 10
		}), new LT.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !hC(n) || t.handle?.contains(n) ? !1 : Kx(n);
	}
}), zT, BT = class extends Fb {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, $(this, zT, /* @__PURE__ */ new Set()), this.listeners = new qx(), this.latest = {
			event: void 0,
			coordinates: void 0
		}, this.handleMove = () => {
			let { event: e, coordinates: t } = this.latest;
			!e || !t || this.manager.actions.move({
				event: e,
				to: t
			});
		}, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	activationConstraints(e, t, n = this.options) {
		let { activationConstraints: r = RT.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return c_(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				_C(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (KT(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !hC(e.target) || t.disabled || HT(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = RT.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = Tx(i) && i.draggable && i.getAttribute("draggable") === "true", o = WS(t.element), { x: s, y: c } = Mx(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new Ib(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = Px(), f = this.listeners.bind(d, [
			{
				type: "pointermove",
				listener: (e) => this.handlePointerMove(e, t)
			},
			{
				type: "pointerup",
				listener: this.handlePointerUp,
				options: { capture: !0 }
			},
			{
				type: "pointercancel",
				listener: this.handleCancel
			},
			{
				type: "dragstart",
				listener: a ? this.handleCancel : UT,
				options: { capture: !0 }
			}
		]);
		Q(this, zT).add(() => {
			f(), this.initialCoordinates = void 0;
		});
	}
	handlePointerMove(e, t) {
		var n;
		if (this.controller?.activated === !1) {
			(n = this.controller) == null || n.onEvent(e);
			return;
		}
		if (this.manager.dragOperation.status.dragging) {
			let n = Mx(e), r = WS(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, NS.schedule(this.handleMove);
		}
	}
	handlePointerUp(e) {
		let { status: t } = this.manager.dragOperation;
		if (!t.idle) {
			e.preventDefault(), e.stopPropagation();
			let n = !t.initialized;
			this.manager.actions.stop({
				event: e,
				canceled: n
			});
		}
		this.cleanup();
	}
	handleKeyDown(e) {
		e.key === "Escape" && (e.preventDefault(), this.handleCancel(e));
	}
	handleStart(e, t) {
		let { manager: n, initialCoordinates: r } = this;
		if (!r || !n.dragOperation.status.idle || t.defaultPrevented) return;
		if (n.actions.start({
			coordinates: r,
			event: t,
			source: e
		}).signal.aborted) return this.cleanup();
		t.preventDefault();
		let i = Dx(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = hC(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: UT,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: UT
			},
			{
				type: "contextmenu",
				listener: UT
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Q(this, zT).add(o);
	}
	handleCancel(e) {
		let { dragOperation: t } = this.manager;
		t.status.initialized && this.manager.actions.stop({
			event: e,
			canceled: !0
		}), this.cleanup();
	}
	cleanup() {
		this.latest = {
			event: void 0,
			coordinates: void 0
		}, Q(this, zT).forEach((e) => e()), Q(this, zT).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
zT = /* @__PURE__ */ new WeakMap(), BT.configure = by(BT), BT.defaults = RT;
var VT = BT;
function HT(e) {
	return "sensor" in e;
}
function UT(e) {
	e.preventDefault();
}
function WT() {}
var GT = /* @__PURE__ */ new WeakSet();
function KT(e) {
	!e || GT.has(e) || (e.addEventListener("touchmove", WT, {
		capture: !1,
		passive: !1
	}), GT.add(e));
}
var qT = {
	modifiers: [],
	plugins: [
		rw,
		xT,
		aw,
		Xw,
		TT
	],
	sensors: [VT, AT]
}, JT = class extends cx {
	constructor(e = {}) {
		let t = sx(e.plugins, qT.plugins), n = sx(e.sensors, qT.sensors), r = sx(e.modifiers, qT.modifiers);
		super(PC(NC({}, e), {
			plugins: [
				wT,
				_T,
				bw,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, YT, XT, ZT, QT, $T, eE, tE, nE, rE = class extends (QT = bb, ZT = [K], XT = [K], YT = [K], QT) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = IC(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(NC({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(xy) ?? [...e.sensors]).map((t) => {
				let n = t instanceof Fb ? t : e.registry.register(t.plugin), r = t instanceof Fb ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), $(this, eE, HC($T, 8, this)), HC($T, 11, this), $(this, tE, HC($T, 12, this)), HC($T, 15, this), $(this, nE, HC($T, 16, this)), HC($T, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
$T = LC(QT), eE = /* @__PURE__ */ new WeakMap(), tE = /* @__PURE__ */ new WeakMap(), nE = /* @__PURE__ */ new WeakMap(), UC($T, 4, "handle", ZT, rE, eE), UC($T, 4, "element", XT, rE, tE), UC($T, 4, "feedback", YT, rE, nE), VC($T, rE);
var iE, aE, oE, sE, cE, lE, uE, dE, fE, pE, mE = class extends (oE = Pb, aE = [K], iE = [K], oE) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = IC(n, ["element", "effects"]);
		let { collisionDetector: o = dx } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new dC(n), i = G(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = Qg(!1);
		super(PC(NC({}, a), {
			collisionDetector: o,
			effects: () => [
				...i(),
				() => {
					let { element: e, manager: t } = this;
					if (!t) return;
					let { dragOperation: n } = t, { source: r } = n;
					c.value = !!(r && n.status.initialized && e && !this.disabled && this.accepts(r));
				},
				() => {
					let { element: e } = this;
					if (c.value && e) {
						let t = new ES(e, s);
						return () => {
							t.disconnect(), this.shape = void 0;
						};
					}
				},
				() => {
					if (this.manager?.dragOperation.status.initialized) return () => {
						this.shape = void 0;
					};
				}
			]
		}), t), $(this, fE), $(this, cE, HC(sE, 8, this)), HC(sE, 11, this), $(this, pE, HC(sE, 12, this)), HC(sE, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		KC(this, fE, e, dE);
	}
	get element() {
		return this.proxy ?? Q(this, fE, uE);
	}
};
sE = LC(oE), cE = /* @__PURE__ */ new WeakMap(), fE = /* @__PURE__ */ new WeakSet(), pE = /* @__PURE__ */ new WeakMap(), lE = UC(sE, 20, "#element", aE, fE, cE), uE = lE.get, dE = lE.set, UC(sE, 4, "proxy", iE, mE, pE), VC(sE, mE);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var hE = Object.create, gE = Object.defineProperty, _E = Object.defineProperties, vE = Object.getOwnPropertyDescriptor, yE = Object.getOwnPropertyDescriptors, bE = Object.getOwnPropertySymbols, xE = Object.prototype.hasOwnProperty, SE = Object.prototype.propertyIsEnumerable, CE = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), wE = (e) => {
	throw TypeError(e);
}, TE = (e, t, n) => t in e ? gE(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, EE = (e, t) => {
	for (var n in t ||= {}) xE.call(t, n) && TE(e, n, t[n]);
	if (bE) for (var n of bE(t)) SE.call(t, n) && TE(e, n, t[n]);
	return e;
}, DE = (e, t) => _E(e, yE(t)), OE = (e, t) => {
	var n = {};
	for (var r in e) xE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && bE) for (var r of bE(e)) t.indexOf(r) < 0 && SE.call(e, r) && (n[r] = e[r]);
	return n;
}, kE = (e) => [
	,
	,
	,
	hE(null)
], AE = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], jE = (e) => e !== void 0 && typeof e != "function" ? wE("Function expected") : e, ME = (e, t, n, r, i) => ({
	kind: AE[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? wE("Already initialized") : i.push(jE(e || null))
}), NE = (e, t) => TE(t, CE("metadata"), e[3]), PE = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, FE = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = AE[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, vE({
		get [n]() {
			return LE(this, a);
		},
		set [n](e) {
			return zE(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = ME(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? jE(s) && (v[h] = s) : typeof s != "object" || !s ? wE("Object expected") : (jE(o = s.get) && (v.get = o), jE(o = s.set) && (v.set = o), jE(o = s.init) && g.unshift(o));
	return v && gE(i, n, v), i;
}, IE = (e, t, n) => t.has(e) || wE("Cannot " + n), LE = (e, t, n) => (IE(e, t, "read from private field"), t.get(e)), RE = (e, t, n) => t.has(e) ? wE("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), zE = (e, t, n, r) => (IE(e, t, "write to private field"), t.set(e, n), n);
function BE(e) {
	return e instanceof xD || e instanceof bD;
}
var VE = 10, HE = class extends Ey {
	constructor(e) {
		super(e);
		let t = c_(() => {
			let { dragOperation: t } = e;
			if (gC(t.activatorEvent) && BE(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(_T);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!gC(e.nativeEvent) || !BE(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = UE(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				Vg(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && BE(e) || !e.element) continue;
						let n = e.shape, r = new dC(e.element, { getBoundingClientRect: (e) => jx(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + VE < r.center.y || s == "up" && u.y - VE > r.center.y || s == "left" && u.x - VE > r.center.x || s == "right" && u.x + VE < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, fx);
				Vg(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !BE(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					tC(u);
					let d = new dC(u);
					if (!d) return;
					let f = Lv.delta(d, Lv.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function UE(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var WE = Object.defineProperty, GE = Object.defineProperties, KE = Object.getOwnPropertyDescriptors, qE = Object.getOwnPropertySymbols, JE = Object.prototype.hasOwnProperty, YE = Object.prototype.propertyIsEnumerable, XE = (e, t, n) => t in e ? WE(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ZE = (e, t) => {
	for (var n in t ||= {}) JE.call(t, n) && XE(e, n, t[n]);
	if (qE) for (var n of qE(t)) YE.call(t, n) && XE(e, n, t[n]);
	return e;
}, QE = (e, t) => GE(e, KE(t));
function $E(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function eD(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function tD(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (eD(r)) {
				let i = r.initialIndex, a = r.index;
				return i === a || i < 0 || i >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, i, a);
			}
			return e;
		}
		if (!a && "index" in r && typeof r.index == "number") {
			let t = r.index;
			if (t !== s) return n(e, s, t);
		}
		return n(e, s, c);
	}
	let s = Object.entries(e), c = -1, l, u = -1, d;
	for (let [e, t] of s) if (c === -1 && (c = t.findIndex((e) => o(e, r.id)), c !== -1 && (l = e)), u === -1 && (u = t.findIndex((e) => o(e, i.id)), u !== -1 && (d = e)), c !== -1 && u !== -1) break;
	if (c === -1 && eD(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return QE(ZE({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return QE(ZE({}, e), {
			[i]: [...e[i].slice(0, a), ...e[i].slice(a + 1)],
			[o]: [
				...e[o].slice(0, s),
				c,
				...e[o].slice(s)
			]
		});
	}
	if (!r.manager) return e;
	let { dragOperation: f } = r.manager, p = f.shape?.current.center ?? f.position.current;
	if (d == null && i.id in e) {
		let t = i.shape && p.y > i.shape.center.y ? e[i.id].length : 0;
		d = i.id, u = t;
	}
	if (l == null || d == null || l === d && c === u) {
		if (l != null && l === d && c === u && eD(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return QE(ZE({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return QE(ZE({}, e), {
						[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
						[t]: [
							...e[t].slice(0, r.index),
							i,
							...e[t].slice(r.index)
						]
					});
				}
			}
		}
		return "preventDefault" in t && t.preventDefault(), e;
	}
	if (l === d) return QE(ZE({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return QE(ZE({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function nD(e, t) {
	return tD(e, t, $E);
}
var rD = "__default__", iD = class extends Ey {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof xD) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(sD(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!BE(i) || !BE(a) || i.sortable === a.sortable) return;
			let o = t(), s = i.sortable.group === a.sortable.group, c = o.get(i.sortable.group), l = s ? c : o.get(a.sortable.group);
			!c || !l || queueMicrotask(() => {
				e.defaultPrevented || n.renderer.rendering.then(() => {
					let r = t();
					for (let [e, t] of o.entries()) {
						let n = Array.from(t).entries();
						for (let [t, i] of n) if (i.index !== t || i.group !== e || !r.get(e)?.has(i)) return;
					}
					let u = i.sortable.element, d = a.sortable.element;
					if (!d || !u || !s && a.id === i.sortable.group) return;
					let f = sD(c), p = s ? f : sD(l), m = i.sortable.group ?? rD, h = a.sortable.group ?? rD, g = {
						[m]: f,
						[h]: p
					}, _ = nD(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), aD(u, v, d, y), Vg(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			BE(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = sD(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (aD(n, a.index, o, i.index), Vg(() => {
						for (let [t, n] of e.entries()) {
							let e = Array.from(n).values();
							for (let t of e) t.index = t.initialIndex, t.group = t.initialGroup;
						}
					}));
				});
			}));
		})];
		this.destroy = () => {
			for (let e of n) e();
		};
	}
};
function aD(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function oD(e, t) {
	return e.index - t.index;
}
function sD(e) {
	return Array.from(e).sort(oD);
}
var cD = [HE, iD], lD = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, uD = new uv(), dD, fD = [K], pD, mD, hD, gD, _D, vD;
dD = [K];
var yD = class {
	constructor(e, t) {
		RE(this, mD, PE(pD, 8, this)), PE(pD, 11, this), RE(this, hD), RE(this, gD), RE(this, _D, PE(pD, 12, this)), PE(pD, 15, this), RE(this, vD), this.register = () => (Vg(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			Vg(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			Vg(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = lD, plugins: l = cD } = n, u = OE(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new xD(u, t, this), this.draggable = new bD(DE(EE({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && uD.clear(this.manager), e?.dragging && uD.set(this.manager, this.id, G(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = LE(this, gD), i = LE(this, hD);
					(e !== r || t !== i) && (zE(this, gD, e), zE(this, hD, t), this.animate());
				},
				() => {
					let { target: e } = this, { feedback: t, isDragSource: n } = this.draggable;
					t == "move" && n && (this.droppable.disabled = !e);
				},
				() => {
					let { manager: e } = this;
					for (let t of l) e?.registry.register(t);
				},
				...r()
			],
			type: s,
			sensors: o
		}), t, this), zE(this, vD, u.element), this.manager = t, this.index = a, zE(this, gD, a), this.group = i, zE(this, hD, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return uD.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return uD.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		G(() => {
			let { manager: e, transition: t } = this, { shape: n } = this.droppable;
			if (!e) return;
			let { idle: r } = e.dragOperation.status;
			!n || !t || r && !t.idle || e.renderer.rendering.then(() => {
				let { element: r } = this;
				if (!r) return;
				let i = this.refreshShape();
				if (!i) return;
				let a = {
					x: n.boundingRectangle.left - i.boundingRectangle.left,
					y: n.boundingRectangle.top - i.boundingRectangle.top
				}, { translate: o } = LS(r), s = aC(r, o, !1), c = aC(r, o);
				if (a.x || a.y) {
					let n = zx(Cx(r)) ? DE(EE({}, t), { duration: 0 }) : t;
					iC({
						element: r,
						keyframes: { translate: [`${s.x + a.x}px ${s.y + a.y}px ${s.z}`, `${c.x}px ${c.y}px ${c.z}`] },
						options: n
					}).then(() => {
						e.dragOperation.status.dragging || (this.droppable.shape = void 0);
					});
				}
			});
		});
	}
	get manager() {
		return this.draggable.manager;
	}
	set manager(e) {
		Vg(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		Vg(() => {
			let t = LE(this, vD), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), zE(this, vD, e);
		});
	}
	get element() {
		let e = LE(this, vD);
		if (e) return Gx.get(e) ?? e ?? this.droppable.element;
	}
	set target(e) {
		this.droppable.element = e;
	}
	get target() {
		return this.droppable.element;
	}
	set source(e) {
		this.draggable.element = e;
	}
	get source() {
		return this.draggable.element;
	}
	get disabled() {
		return this.draggable.disabled && this.droppable.disabled;
	}
	set feedback(e) {
		this.draggable.feedback = e;
	}
	set disabled(e) {
		Vg(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		Vg(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		Vg(() => {
			this.droppable.id = e, this.draggable.id = e;
		});
	}
	get id() {
		return this.droppable.id;
	}
	set sensors(e) {
		this.draggable.sensors = e;
	}
	set modifiers(e) {
		this.draggable.modifiers = e;
	}
	set collisionPriority(e) {
		this.droppable.collisionPriority = e;
	}
	set collisionDetector(e) {
		this.droppable.collisionDetector = e ?? dx;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		Vg(() => {
			this.droppable.type = e, this.draggable.type = e;
		});
	}
	get type() {
		return this.draggable.type;
	}
	set accept(e) {
		this.droppable.accept = e;
	}
	get accept() {
		return this.droppable.accept;
	}
	get isDropTarget() {
		return this.droppable.isDropTarget;
	}
	get isDragSource() {
		return this.draggable.isDragSource;
	}
	get isDragging() {
		return this.draggable.isDragging;
	}
	get isDropping() {
		return this.draggable.isDropping;
	}
	get status() {
		return this.draggable.status;
	}
	refreshShape() {
		return this.droppable.refreshShape();
	}
	accepts(e) {
		return this.droppable.accepts(e);
	}
};
pD = kE(), mD = /* @__PURE__ */ new WeakMap(), hD = /* @__PURE__ */ new WeakMap(), gD = /* @__PURE__ */ new WeakMap(), _D = /* @__PURE__ */ new WeakMap(), vD = /* @__PURE__ */ new WeakMap(), FE(pD, 4, "index", fD, yD, mD), FE(pD, 4, "group", dD, yD, _D), NE(pD, yD);
var bD = class extends rE {
	constructor(e, t, n) {
		super(e, t), this.sortable = n;
	}
	get index() {
		return this.sortable.index;
	}
	get initialIndex() {
		return this.sortable.initialIndex;
	}
	get group() {
		return this.sortable.group;
	}
	get initialGroup() {
		return this.sortable.initialGroup;
	}
}, xD = class extends mE {
	constructor(e, t, n) {
		super(e, t), this.sortable = n;
	}
	get index() {
		return this.sortable.index;
	}
	get group() {
		return this.sortable.group;
	}
};
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/utilities.js
function SD(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function CD(e) {
	if (e != null) return SD(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var wD = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? M.useLayoutEffect : M.useEffect;
function TD() {
	let e = (0, M.useState)(0)[1];
	return (0, M.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function ED(e, t) {
	let n = (0, M.useRef)(/* @__PURE__ */ new Map()), r = TD();
	return wD(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return c_(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = G(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Xr.flushSync)(r) : r());
		});
	}, [e]), (0, M.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function DD(e, t) {
	e();
}
function OD(e) {
	let t = (0, M.useRef)(e);
	return wD(() => {
		t.current = e;
	}, [e]), t;
}
function kD(e, t, n = M.useEffect, r = Object.is) {
	let i = (0, M.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function AD(e, t) {
	let n = (0, M.useRef)(CD(e));
	wD(() => {
		let r = CD(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var jD = Object.getOwnPropertySymbols, MD = Object.prototype.hasOwnProperty, ND = Object.prototype.propertyIsEnumerable, PD = (e, t) => {
	var n = {};
	for (var r in e) MD.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && jD) for (var r of jD(e)) t.indexOf(r) < 0 && ND.call(e, r) && (n[r] = e[r]);
	return n;
}, FD = (0, M.createContext)(new JT()), ID = (0, M.memo)((0, M.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, M.useState)(0), i = (0, M.useRef)(null), a = (0, M.useRef)(null), o = (0, M.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, M.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return wD(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, M.useImperativeHandle)(t, () => o), null;
})), LD = [void 0, L_];
function RD(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = PD(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, M.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = sx(d, qT.plugins), h = sx(p, qT.sensors), g = sx(f, qT.modifiers), _ = OD(i), v = OD(a), y = OD(s), b = OD(o), x = OD(c), S = OD(r), C = zD(() => l.manager ?? new JT(l));
	return (0, M.useEffect)(() => {
		if (!u.current) throw Error("Renderer not found");
		let { renderer: e, trackRendering: t } = u.current, { monitor: n } = C;
		C.renderer = e;
		let r = [
			n.addEventListener("beforedragstart", (e) => {
				let n = _.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("dragstart", (e) => v.current?.call(v, e, C)),
			n.addEventListener("dragover", (e) => {
				let n = y.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("dragmove", (e) => {
				let n = b.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("dragend", (e) => {
				let n = x.current;
				n && t(() => n(e, C));
			}),
			n.addEventListener("collision", (e) => S.current?.call(S, e, C))
		];
		return () => r.forEach((e) => e());
	}, [C]), kD(m, () => C && (C.plugins = m), ...LD), kD(h, () => C && (C.sensors = h), ...LD), kD(g, () => C && (C.modifiers = g), ...LD), /* @__PURE__ */ (0, z.jsxs)(FD.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, z.jsx)(ID, {
			ref: u,
			children: n
		}), n]
	});
}
function zD(e) {
	let t = (0, M.useRef)(null);
	return t.current ||= e(), (0, M.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function BD() {
	return (0, M.useContext)(FD);
}
function VD(e) {
	let t = BD() ?? void 0, [n] = (0, M.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), wD(n.register, [t, n]), n;
}
var HD = Object.create, UD = Object.defineProperty, WD = Object.getOwnPropertyDescriptor, GD = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), KD = (e) => {
	throw TypeError(e);
}, qD = (e, t, n) => t in e ? UD(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, JD = (e) => [
	,
	,
	,
	HD(e?.[GD("metadata")] ?? null)
], YD = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], XD = (e) => e !== void 0 && typeof e != "function" ? KD("Function expected") : e, ZD = (e, t, n, r, i) => ({
	kind: YD[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? KD("Already initialized") : i.push(XD(e || null))
}), QD = (e, t) => qD(t, GD("metadata"), e[3]), $D = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, eO = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = YD[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, WD(i, n)), _ = r.length - 1; _ >= 0; _--) c = ZD(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, XD(o) && (g[m] = o);
	return g && UD(i, n, g), i;
}, tO = (e, t, n) => t.has(e) || KD("Cannot " + n), nO = (e, t, n) => (tO(e, t, "read from private field"), t.get(e)), rO = (e, t, n) => t.has(e) ? KD("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), iO = (e, t, n, r) => (tO(e, t, "write to private field"), t.set(e, n), n), aO = class e {
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	static delta(t, n) {
		return new e(t.x - n.x, t.y - n.y);
	}
	static distance(e, t) {
		return Math.hypot(e.x - t.x, e.y - t.y);
	}
	static equals(e, t) {
		return e.x === t.x && e.y === t.y;
	}
	static from({ x: t, y: n }) {
		return new e(t, n);
	}
}, oO, sO, cO, lO, uO, dO = class extends (cO = sv, sO = [R_], oO = [R_], cO) {
	constructor(e) {
		let t = aO.from(e);
		super(t, (e, t) => aO.equals(e, t)), $D(uO, 5, this), rO(this, lO, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return aO.delta(this.current, this.initial);
	}
	get direction() {
		let { current: e, previous: t } = this;
		if (!t) return null;
		let n = {
			x: e.x - t.x,
			y: e.y - t.y
		};
		return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(e) {
		let { current: t } = this, n = aO.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - nO(this, lO), o = (e) => Math.round(e / a * 100);
		Vg(() => {
			iO(this, lO, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(aO.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
uO = JD(cO), lO = /* @__PURE__ */ new WeakMap(), eO(uO, 2, "delta", sO, dO), eO(uO, 2, "direction", oO, dO), QD(uO, dO);
var fO = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(fO || {});
Object.values(fO);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var pO = Object.defineProperty, mO = Object.defineProperties, hO = Object.getOwnPropertyDescriptors, gO = Object.getOwnPropertySymbols, _O = Object.prototype.hasOwnProperty, vO = Object.prototype.propertyIsEnumerable, yO = (e, t, n) => t in e ? pO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, bO = (e, t) => {
	for (var n in t ||= {}) _O.call(t, n) && yO(e, n, t[n]);
	if (gO) for (var n of gO(t)) vO.call(t, n) && yO(e, n, t[n]);
	return e;
}, xO = (e, t) => mO(e, hO(t));
function SO(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = bO(bO({}, lD), e.transition), _ = VD((t) => new yD(xO(bO({}, e), {
		transition: g,
		register: !1,
		handle: CD(s),
		element: CD(o),
		target: CD(m),
		feedback: d
	}), t)), v = ED(_, CO);
	return kD(i, () => _.id = i), wD(() => {
		Vg(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), kD(h, () => _.type = h), kD(t, () => _.accept = t, void 0, L_), kD(a, () => a && (_.data = a)), kD(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, DD), AD(s, (e) => _.handle = e), AD(o, (e) => _.element = e), AD(m, (e) => _.target = e), kD(u, () => _.disabled = u === !0), kD(p, () => _.sensors = p), kD(n, () => _.collisionDetector = n), kD(r, () => _.collisionPriority = r), kD(d, () => _.feedback = d ?? "default"), kD(g, () => _.transition = g, void 0, L_), kD(f, () => _.modifiers = f, void 0, L_), kD(e.alignment, () => _.alignment = e.alignment), {
		sortable: v,
		get isDragging() {
			return v.isDragging;
		},
		get isDropping() {
			return v.isDropping;
		},
		get isDragSource() {
			return v.isDragSource;
		},
		get isDropTarget() {
			return v.isDropTarget;
		},
		handleRef: (0, M.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, M.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, M.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, M.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function CO(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var wO = Object.defineProperty, TO = Object.defineProperties, EO = Object.getOwnPropertyDescriptors, DO = Object.getOwnPropertySymbols, OO = Object.prototype.hasOwnProperty, kO = Object.prototype.propertyIsEnumerable, AO = (e, t, n) => t in e ? wO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, jO = (e, t) => {
	for (var n in t ||= {}) OO.call(t, n) && AO(e, n, t[n]);
	if (DO) for (var n of DO(t)) kO.call(t, n) && AO(e, n, t[n]);
	return e;
}, MO = (e, t) => TO(e, EO(t));
function NO(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function PO(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function FO(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (PO(r)) {
				let i = r.initialIndex, a = r.index;
				return i === a || i < 0 || i >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, i, a);
			}
			return e;
		}
		if (!a && "index" in r && typeof r.index == "number") {
			let t = r.index;
			if (t !== s) return n(e, s, t);
		}
		return n(e, s, c);
	}
	let s = Object.entries(e), c = -1, l, u = -1, d;
	for (let [e, t] of s) if (c === -1 && (c = t.findIndex((e) => o(e, r.id)), c !== -1 && (l = e)), u === -1 && (u = t.findIndex((e) => o(e, i.id)), u !== -1 && (d = e)), c !== -1 && u !== -1) break;
	if (c === -1 && PO(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return MO(jO({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return MO(jO({}, e), {
			[i]: [...e[i].slice(0, a), ...e[i].slice(a + 1)],
			[o]: [
				...e[o].slice(0, s),
				c,
				...e[o].slice(s)
			]
		});
	}
	if (!r.manager) return e;
	let { dragOperation: f } = r.manager, p = f.shape?.current.center ?? f.position.current;
	if (d == null && i.id in e) {
		let t = i.shape && p.y > i.shape.center.y ? e[i.id].length : 0;
		d = i.id, u = t;
	}
	if (l == null || d == null || l === d && c === u) {
		if (l != null && l === d && c === u && PO(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return MO(jO({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return MO(jO({}, e), {
						[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
						[t]: [
							...e[t].slice(0, r.index),
							i,
							...e[t].slice(r.index)
						]
					});
				}
			}
		}
		return "preventDefault" in t && t.preventDefault(), e;
	}
	if (l === d) return MO(jO({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return MO(jO({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function IO(e, t) {
	return FO(e, t, NO);
}
//#endregion
//#region src/card-carousel/studio-ui/utils.ts
function LO(e = []) {
	let t = e.length ? Math.max(...e.map((e) => e.id)) + 1 : 1;
	return {
		id: t,
		name: `Card #${t}`,
		title: "",
		subtitle: "",
		secondaryContent: null
	};
}
//#endregion
//#region src/card-carousel/studio-ui/components/CarouselEditor.tsx
function RO({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = SO({
		id: e,
		index: n
	});
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		ref: s,
		className: "d-flex justify-content-between p-2 border rounded-sm" + (r ? " bg-light-300" : ""),
		onClick: a,
		children: [/* @__PURE__ */ (0, z.jsx)("div", { children: t }), /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "d-flex align-items-center",
			children: [i && /* @__PURE__ */ (0, z.jsx)("button", {
				className: "btn btn-link p-0 text-danger",
				"aria-label": "Delete card",
				onClick: (e) => {
					e.stopPropagation(), o();
				},
				children: /* @__PURE__ */ (0, z.jsx)("span", {
					className: "material-icons-outlined",
					children: "delete_outline"
				})
			}), /* @__PURE__ */ (0, z.jsx)("span", {
				className: "material-icons-outlined text-light-600",
				children: "drag_indicator"
			})]
		})]
	});
}
function zO() {
	let { values: e, setFieldValue: t } = Em(), [n, r] = (0, M.useState)(0);
	return /* @__PURE__ */ (0, z.jsx)(RD, {
		onDragOver: (n) => t("cards", IO(e.cards, n)),
		children: /* @__PURE__ */ (0, z.jsx)(ah, {
			name: "cards",
			children: ({ push: t, remove: i }) => /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, z.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, z.jsx)(O, {
						variant: "primary",
						iconBefore: Xt,
						onClick: () => {
							t(LO(e.cards)), r(e.cards.length);
						},
						children: "Add Card"
					}), /* @__PURE__ */ (0, z.jsx)("div", {
						className: "mt-4",
						children: e.cards.map((t, a) => /* @__PURE__ */ (0, z.jsx)(RO, {
							id: t.id,
							cardName: t.name || `Card #${t.id}`,
							index: a,
							active: n === a,
							canDelete: e.cards.length > 1,
							onSelect: () => r(a),
							onDelete: () => {
								i(a), r((t) => Math.min(t, e.cards.length - 2));
							}
						}, t.id))
					})]
				}), /* @__PURE__ */ (0, z.jsx)("div", {
					className: "col-9 p-4",
					children: e.cards.length > 0 && /* @__PURE__ */ (0, z.jsx)(Rg, { cardIndex: n })
				})]
			})
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/ModalFooter.tsx
function BO({ runtime: e, showingEditor: t, onContinue: n }) {
	return /* @__PURE__ */ (0, z.jsx)(uc, {
		position: "bottom",
		className: "p-4 border-top card-carousel-editor-modal-footer justify-content-end",
		children: /* @__PURE__ */ (0, z.jsxs)(he, {
			direction: "horizontal",
			gap: 4,
			children: [/* @__PURE__ */ (0, z.jsx)(O, {
				variant: "light",
				className: "action-button",
				onClick: () => e.notify("cancel", {}),
				type: "button",
				children: "Cancel"
			}), t ? /* @__PURE__ */ (0, z.jsx)(O, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, z.jsx)(O, {
				type: "button",
				variant: "primary",
				className: "save-button",
				onClick: n,
				children: "Continue"
			})]
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/StudioUI.tsx
function VO({ runtime: e, saveUrl: t, initData: n }) {
	let [r, i] = (0, M.useState)(!1);
	return /* @__PURE__ */ (0, z.jsx)(Vm, {
		initialValues: n,
		onSubmit: (n) => {
			s({
				saveUrl: t,
				data: n,
				runtime: e,
				errorMessage: "Failed to save the card carousel."
			});
		},
		children: /* @__PURE__ */ (0, z.jsx)(Xm, { children: /* @__PURE__ */ (0, z.jsxs)("div", {
			className: "studio-ui d-flex flex-column justify-content-between",
			children: [r ? /* @__PURE__ */ (0, z.jsx)(zO, {}) : /* @__PURE__ */ (0, z.jsx)(oh, {}), /* @__PURE__ */ (0, z.jsx)(BO, {
				runtime: e,
				showingEditor: r,
				onContinue: (e) => {
					e.preventDefault(), i(!0);
				}
			})]
		}) })
	});
}
//#endregion
//#region src/card-carousel/studio-ui/StudioUI.css?inline
var HO = ".icon-selector.dropdown-toggle:after{display:none}.icon-list-popup{background-color:var(--pgn-color-body-bg);width:292px;min-height:242px;max-height:300px;overflow:scroll}button:not(:disabled).icon-symbol{background-color:var(--pgn-color-body-bg);width:auto;color:var(--pgn-color-gray-600);border:0}button:not(:disabled).icon-symbol:hover{background-color:var(--pgn-color-light);color:var(--pgn-color-primary)}button:not(:disabled).icon-symbol:focus{background-color:var(--pgn-color-light);color:var(--pgn-color-primary);border:0}.card-carousel-editor-modal-footer{background-color:var(--pgn-color-card-bg-base)}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block .wrapper-comp-settings{max-height:var(--exemplar-block-studio-ui-max-height,calc(100vh - 69px));height:100%;overflow-y:scroll}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}", UO = (e, t, n) => {
	let r = C(e), i = t.handlerUrl(e, "studio_save");
	(!n.data.cards || !n.data.cards.length) && (n.data.cards = [LO()]);
	let a = r.parentElement?.parentElement;
	a && (a.style.minHeight = "635px", a.style.maxHeight = "calc(100vh - 51px)", a.style.overflowY = "scroll"), x({
		runtime: t,
		element: e,
		config: n.config,
		styles: HO
	})(/* @__PURE__ */ (0, z.jsx)(VO, {
		saveUrl: i,
		runtime: t,
		initData: n.data
	}));
};
//#endregion
export { UO as renderBlock };
