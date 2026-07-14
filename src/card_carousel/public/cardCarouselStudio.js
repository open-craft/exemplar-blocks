import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as ee, Z as T, _ as E, a as D, b as O, d as te, et as k, f as ne, g as re, h as ie, i as ae, it as A, j as oe, k as se, l as ce, m as le, n as ue, nt as de, o as fe, p as pe, q as me, r as he, rt as ge, t as _e, tt as ve, u as ye, v as be, w as xe, x as Se, y as Ce, z as we } from "./Stack-CsmU_T-L.js";
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ActionRow/index.js
var j = /* @__PURE__ */ A(de()), M = /* @__PURE__ */ A(c());
function Te({ as: e = "div", isStacked: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ j.createElement(e, {
		...r,
		className: (0, M.default)(r.className, {
			"pgn__action-row": !t,
			"pgn__action-row-stacked": t
		})
	}, n);
}
function Ee() {
	return /* @__PURE__ */ j.createElement("span", { className: "pgn__action-row-spacer" });
}
Te.Spacer = Ee;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/SelectableContext.js
var De = /* @__PURE__ */ j.createContext(null), Oe = function(e, t) {
	return t === void 0 && (t = null), e == null ? t || null : String(e);
}, N = /* @__PURE__ */ A(g()), ke = /* @__PURE__ */ A(w()), Ae = /-(.)/g;
function je(e) {
	return e.replace(Ae, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var Me = [
	"className",
	"bsPrefix",
	"as"
], Ne = function(e) {
	return e[0].toUpperCase() + je(e).slice(1);
};
function Pe(e, t) {
	var r = t === void 0 ? {} : t, i = r.displayName, a = i === void 0 ? Ne(e) : i, s = r.Component, c = r.defaultProps, l = /* @__PURE__ */ j.forwardRef(function(t, r) {
		var i = t.className, a = t.bsPrefix, c = t.as, l = c === void 0 ? s || "div" : c, u = n(t, Me), d = o(a, e);
		return /* @__PURE__ */ j.createElement(l, S({
			ref: r,
			className: (0, M.default)(i, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = a, l;
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/matches.js
var Fe;
function Ie(e, t) {
	if (!Fe) {
		var n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector;
		Fe = function(e, t) {
			return r.call(e, t);
		};
	}
	return Fe(e, t);
}
//#endregion
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/querySelectorAll.js
var Le = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Re(e, t) {
	return Le(e.querySelectorAll(t));
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/usePrevious.js
function ze(e) {
	let t = (0, j.useRef)(null);
	return (0, j.useEffect)(() => {
		t.current = e;
	}), t.current;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useForceUpdate.js
function Be() {
	let [, e] = (0, j.useReducer)((e) => !e, !1);
	return e;
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useEventListener.js
function Ve(e, t, n, r = !1) {
	let i = p(n);
	(0, j.useEffect)(() => {
		let n = typeof e == "function" ? e() : e;
		return n.addEventListener(t, i, r), () => n.removeEventListener(t, i, r);
	}, [e]);
}
//#endregion
//#region node_modules/.pnpm/@restart+hooks@0.4.16_react@18.3.1/node_modules/@restart/hooks/esm/useGlobalListener.js
function He(e, t, n = !1) {
	return Ve((0, j.useCallback)(() => document, []), e, t, n);
}
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownContext.js
var Ue = /* @__PURE__ */ j.createContext(null), We = function() {};
function Ge(e) {
	e === void 0 && (e = {});
	var t = (0, j.useContext)(Ue), n = h(), r = n[0], i = n[1], a = (0, j.useRef)(!1), o = e, s = o.flip, c = o.offset, l = o.rootCloseEvent, u = o.fixed, d = u === void 0 ? !1 : u, f = o.popperConfig, p = f === void 0 ? {} : f, m = o.usePopper, g = m === void 0 ? !!t : m, _ = t?.show == null ? !!e.show : t.show, v = t?.alignEnd == null ? e.alignEnd : t.alignEnd;
	_ && !a.current && (a.current = !0);
	var y = function(e) {
		t?.toggle(!1, e);
	}, b = t || {}, x = b.drop, C = b.setMenu, w = b.menuElement, ee = b.toggleElement, T = v ? "bottom-end" : "bottom-start";
	x === "up" ? T = v ? "top-end" : "top-start" : x === "right" ? T = v ? "right-end" : "right-start" : x === "left" && (T = v ? "left-end" : "left-start");
	var E = re(ee, w, pe({
		placement: T,
		enabled: !!(g && _),
		enableEvents: _,
		offset: c,
		flip: s,
		fixed: d,
		arrowElement: r,
		popperConfig: p
	})), D = S({
		ref: C || We,
		"aria-labelledby": ee?.id
	}, E.attributes.popper, { style: E.styles.popper }), O = {
		show: _,
		alignEnd: v,
		hasShown: a.current,
		toggle: t?.toggle,
		popper: g ? E : null,
		arrowProps: g ? S({ ref: i }, E.attributes.arrow, { style: E.styles.arrow }) : {}
	};
	return le(w, y, {
		clickTrigger: l,
		disabled: !_
	}), [D, O];
}
var Ke = {
	children: N.default.func.isRequired,
	show: N.default.bool,
	alignEnd: N.default.bool,
	flip: N.default.bool,
	usePopper: N.default.oneOf([!0, !1]),
	popperConfig: N.default.object,
	rootCloseEvent: N.default.string
}, qe = { usePopper: !0 };
function Je(e) {
	var t = e.children, r = Ge(n(e, ["children"])), i = r[0], a = r[1];
	return /* @__PURE__ */ j.createElement(j.Fragment, null, a.hasShown ? t(i, a) : null);
}
Je.displayName = "ReactOverlaysDropdownMenu", Je.propTypes = Ke, Je.defaultProps = qe;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/DropdownToggle.js
var Ye = function() {};
function Xe() {
	var e = (0, j.useContext)(Ue) || {}, t = e.show, n = t === void 0 ? !1 : t, r = e.toggle, i = r === void 0 ? Ye : r, a = e.setToggle, o = (0, j.useCallback)(function(e) {
		i(!n, e);
	}, [n, i]);
	return [{
		ref: a || Ye,
		onClick: o,
		"aria-haspopup": !0,
		"aria-expanded": !!n
	}, {
		show: n,
		toggle: i
	}];
}
var Ze = { children: N.default.func.isRequired };
function Qe(e) {
	var t = e.children, n = Xe(), r = n[0], i = n[1];
	return /* @__PURE__ */ j.createElement(j.Fragment, null, t(r, i));
}
Qe.displayName = "ReactOverlaysDropdownToggle", Qe.propTypes = Ze;
//#endregion
//#region node_modules/.pnpm/react-overlays@5.2.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-overlays/esm/Dropdown.js
var $e = {
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
function et() {
	var e = Be(), t = (0, j.useRef)(null);
	return [t, (0, j.useCallback)(function(n) {
		t.current = n, e();
	}, [e])];
}
function tt(e) {
	var t = e.drop, n = e.alignEnd, r = e.defaultShow, i = e.show, a = e.onToggle, o = e.itemSelector, s = o === void 0 ? "* > *" : o, c = e.focusFirstItemOnShow, l = e.children, u = v(i, r, a), d = u[0], f = u[1], h = et(), g = h[0], _ = h[1], y = g.current, b = et(), x = b[0], S = b[1], C = x.current, w = ze(d), ee = (0, j.useRef)(null), T = (0, j.useRef)(!1), E = (0, j.useCallback)(function(e, t) {
		f(e, t);
	}, [f]), D = (0, j.useMemo)(function() {
		return {
			toggle: E,
			drop: t,
			show: d,
			alignEnd: n,
			menuElement: y,
			toggleElement: C,
			setMenu: _,
			setToggle: S
		};
	}, [
		E,
		t,
		d,
		n,
		y,
		C,
		_,
		S
	]);
	y && w && !d && (T.current = y.contains(document.activeElement));
	var O = p(function() {
		C && C.focus && C.focus();
	}), te = p(function() {
		var e = ee.current, t = c;
		if (t ??= g.current && Ie(g.current, "[role=menu]") ? "keyboard" : !1, !(t === !1 || t === "keyboard" && !/^key.+$/.test(e))) {
			var n = Re(g.current, s)[0];
			n && n.focus && n.focus();
		}
	});
	(0, j.useEffect)(function() {
		d ? te() : T.current && (T.current = !1, O());
	}, [
		d,
		T,
		O,
		te
	]), (0, j.useEffect)(function() {
		ee.current = null;
	});
	var k = function(e, t) {
		if (!g.current) return null;
		var n = Re(g.current, s), r = n.indexOf(e) + t;
		return r = Math.max(0, Math.min(r, n.length)), n[r];
	};
	return He("keydown", function(e) {
		var t = e.key, n = e.target, r = g.current?.contains(n), i = x.current?.contains(n);
		if (!(/input|textarea/i.test(n.tagName) && (t === " " || t !== "Escape" && r)) && !(!r && !i) && !(!g.current && t === "Tab")) switch (ee.current = e.type, t) {
			case "ArrowUp":
				var a = k(n, -1);
				a && a.focus && a.focus(), e.preventDefault();
				return;
			case "ArrowDown":
				if (e.preventDefault(), !d) f(!0, e);
				else {
					var o = k(n, 1);
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
	}), /* @__PURE__ */ j.createElement(Ue.Provider, { value: D }, l);
}
tt.displayName = "ReactOverlaysDropdown", tt.propTypes = $e, tt.Menu = Je, tt.Toggle = Qe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavContext.js
var nt = /* @__PURE__ */ j.createContext(null);
nt.displayName = "NavContext";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/DropdownItem.js
var rt = [
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
], it = {
	as: oe,
	disabled: !1
}, at = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.eventKey, c = e.disabled, l = e.href, u = e.onClick, d = e.onSelect, f = e.active, m = e.as, h = n(e, rt), g = o(r, "dropdown-item"), _ = (0, j.useContext)(De), v = ((0, j.useContext)(nt) || {}).activeKey, y = Oe(s, l), b = f == null && y != null ? Oe(v) === y : f, x = p(function(e) {
		c || (u && u(e), _ && _(y, e), d && d(y, e));
	});
	return /* @__PURE__ */ j.createElement(m, S({}, h, {
		ref: t,
		href: l,
		disabled: c,
		className: (0, M.default)(i, g, b && "active", c && "disabled"),
		onClick: x
	}), a);
});
at.displayName = "DropdownItem", at.defaultProps = it;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/NavbarContext.js
var ot = /* @__PURE__ */ j.createContext(null);
ot.displayName = "NavbarContext", we();
function st(e, t) {
	return e;
}
ie();
var ct = [
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
], lt = N.default.oneOf(["left", "right"]);
N.default.oneOfType([
	lt,
	N.default.shape({ sm: lt }),
	N.default.shape({ md: lt }),
	N.default.shape({ lg: lt }),
	N.default.shape({ xl: lt })
]);
var ut = {
	align: "left",
	alignRight: !1,
	flip: !0
}, dt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.align, s = e.alignRight, c = e.rootCloseEvent, l = e.flip, u = e.show, d = e.renderOnMount, f = e.as, p = f === void 0 ? "div" : f, m = e.popperConfig, h = n(e, ct), g = (0, j.useContext)(ot), _ = o(r, "dropdown-menu"), v = te(), y = v[0], b = v[1], x = [];
	if (a) if (typeof a == "object") {
		var C = Object.keys(a);
		if (C.length) {
			var w = C[0], ee = a[w];
			s = ee === "left", x.push(_ + "-" + w + "-" + ee);
		}
	} else a === "right" && (s = !0);
	var T = Ge({
		flip: l,
		rootCloseEvent: c,
		show: u,
		alignEnd: s,
		usePopper: !g && x.length === 0,
		popperConfig: S({}, m, { modifiers: b.concat(m?.modifiers || []) })
	}), E = T[0], D = T[1], O = D.hasShown, k = D.popper, re = D.show, ie = D.alignEnd, ae = D.toggle;
	if (E.ref = ne(y, ne(st(t, "DropdownMenu"), E.ref)), !O && !d) return null;
	typeof p != "string" && (E.show = re, E.close = function() {
		return ae?.(!1);
	}, E.alignRight = ie);
	var A = h.style;
	return k != null && k.placement && (A = S({}, h.style, E.style), h["x-placement"] = k.placement), /* @__PURE__ */ j.createElement(p, S({}, h, E, {
		style: A,
		className: M.default.apply(void 0, [
			i,
			_,
			re && "show",
			ie && _ + "-right"
		].concat(x))
	}));
});
dt.displayName = "DropdownMenu", dt.defaultProps = ut, ye();
var ft = [
	"bsPrefix",
	"split",
	"className",
	"childBsPrefix",
	"as"
], pt = /* @__PURE__ */ j.forwardRef(function(e, r) {
	var i = e.bsPrefix, a = e.split, s = e.className, c = e.childBsPrefix, l = e.as, u = l === void 0 ? t : l, d = n(e, ft), f = o(i, "dropdown-toggle");
	c !== void 0 && (d.bsPrefix = c);
	var p = Xe()[0];
	return p.ref = ne(p.ref, st(r, "DropdownToggle")), /* @__PURE__ */ j.createElement(u, S({ className: (0, M.default)(s, f, a && f + "-split") }, p, d));
});
pt.displayName = "DropdownToggle";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Dropdown.js
var mt = [
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
], ht = Pe("dropdown-header", { defaultProps: { role: "heading" } }), gt = Pe("dropdown-divider", { defaultProps: { role: "separator" } }), _t = Pe("dropdown-item-text", { Component: "span" }), vt = { navbar: !1 }, yt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = f(e, { show: "onToggle" }), i = r.bsPrefix, a = r.drop, s = r.show, c = r.className, l = r.alignRight, u = r.onSelect, d = r.onToggle, m = r.focusFirstItemOnShow, h = r.as, g = h === void 0 ? "div" : h;
	r.navbar;
	var _ = n(r, mt), v = (0, j.useContext)(De), y = o(i, "dropdown"), b = p(function(e, t, n) {
		n === void 0 && (n = t.type), t.currentTarget === document && (n !== "keydown" || t.key === "Escape") && (n = "rootClose"), d && d(e, t, { source: n });
	}), x = p(function(e, t) {
		v && v(e, t), u && u(e, t), b(!1, t, "select");
	});
	return /* @__PURE__ */ j.createElement(De.Provider, { value: x }, /* @__PURE__ */ j.createElement(tt, {
		drop: a,
		show: s,
		alignEnd: l,
		onToggle: b,
		focusFirstItemOnShow: m,
		itemSelector: "." + y + "-item:not(.disabled):not(:disabled)"
	}, /* @__PURE__ */ j.createElement(g, S({}, _, {
		ref: t,
		className: (0, M.default)(c, s && "show", (!a || a === "down") && y, a === "up" && "dropup", a === "right" && "dropright", a === "left" && "dropleft")
	}))));
});
yt.displayName = "Dropdown", yt.defaultProps = vt, yt.Divider = gt, yt.Header = ht, yt.Item = at, yt.ItemText = _t, yt.Menu = dt, yt.Toggle = pt;
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var bt = /* @__PURE__ */ ge(((e, t) => {
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
(/* @__PURE__ */ ge(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(bt());
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
var xt = [
	"as",
	"className",
	"type",
	"tooltip"
], St = {
	type: N.default.string,
	tooltip: N.default.bool,
	as: N.default.elementType
}, Ct = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "div" : r, a = e.className, o = e.type, s = o === void 0 ? "valid" : o, c = e.tooltip, l = c === void 0 ? !1 : c, u = n(e, xt);
	return /* @__PURE__ */ j.createElement(i, S({}, u, {
		ref: t,
		className: (0, M.default)(a, s + "-" + (l ? "tooltip" : "feedback"))
	}));
});
Ct.displayName = "Feedback", Ct.propTypes = St;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var wt = /* @__PURE__ */ j.createContext({ controlId: void 0 }), Tt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], Et = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.type, l = c === void 0 ? "checkbox" : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = n(e, Tt), v = (0, j.useContext)(wt), y = v.controlId, b = v.custom ? [a, "custom-control-input"] : [i, "form-check-input"], x = b[0], C = b[1];
	return i = o(x, C), /* @__PURE__ */ j.createElement(g, S({}, _, {
		ref: t,
		type: l,
		id: r || y,
		className: (0, M.default)(s, i, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
Et.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Dt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Ot = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = n(e, Dt), l = (0, j.useContext)(wt), u = l.controlId, d = l.custom ? [i, "custom-control-label"] : [r, "form-check-label"], f = d[0], p = d[1];
	return r = o(f, p), /* @__PURE__ */ j.createElement("label", S({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, M.default)(a, r)
	}));
});
Ot.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var kt = [
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
], At = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.inline, c = s === void 0 ? !1 : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, C = e.type, w = C === void 0 ? "checkbox" : C, ee = e.label, T = e.children, E = e.custom, D = e.as, O = D === void 0 ? "input" : D, te = n(e, kt), k = w === "switch" ? !0 : E, ne = k ? [a, "custom-control"] : [i, "form-check"], re = ne[0], ie = ne[1];
	i = o(re, ie);
	var ae = (0, j.useContext)(wt).controlId, A = (0, j.useMemo)(function() {
		return {
			controlId: r || ae,
			custom: k
		};
	}, [
		ae,
		k,
		r
	]), oe = k || ee != null && ee !== !1 && !T, se = /* @__PURE__ */ j.createElement(Et, S({}, te, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: f,
		isInvalid: m,
		isStatic: !oe,
		disabled: u,
		as: O
	}));
	return /* @__PURE__ */ j.createElement(wt.Provider, { value: A }, /* @__PURE__ */ j.createElement("div", {
		style: y,
		className: (0, M.default)(v, i, k && "custom-" + w, c && i + "-inline")
	}, T || /* @__PURE__ */ j.createElement(j.Fragment, null, se, oe && /* @__PURE__ */ j.createElement(Ot, { title: x }, ee), (f || m) && /* @__PURE__ */ j.createElement(Ct, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
At.displayName = "FormCheck", At.Input = Et, At.Label = Ot;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var jt = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Mt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.className, c = e.isValid, l = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = n(e, jt), m = (0, j.useContext)(wt), h = m.controlId, g = m.custom, _ = "file", v = g ? [a, "custom-file-input"] : [i, "form-control-file"], y = v[0], b = v[1];
	return i = o(y, b), /* @__PURE__ */ j.createElement(f, S({}, p, {
		ref: t,
		id: r || h,
		type: _,
		lang: u,
		className: (0, M.default)(s, i, c && "is-valid", l && "is-invalid")
	}));
});
Mt.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var Nt = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Pt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, s = e.htmlFor, c = n(e, Nt), l = (0, j.useContext)(wt), u = l.controlId, d = l.custom ? [i, "custom-file-label"] : [r, "form-file-label"], f = d[0], p = d[1];
	return r = o(f, p), /* @__PURE__ */ j.createElement("label", S({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, M.default)(a, r),
		"data-browse": c["data-browse"]
	}));
});
Pt.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Ft = [
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
], It = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.id, i = e.bsPrefix, a = e.bsCustomPrefix, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, C = e["data-browse"], w = e.as, ee = w === void 0 ? "div" : w, T = e.inputAs, E = T === void 0 ? "input" : T, D = n(e, Ft), O = b ? [a, "custom"] : [i, "form-file"], te = O[0], k = O[1];
	i = o(te, k);
	var ne = "file", re = (0, j.useContext)(wt).controlId, ie = (0, j.useMemo)(function() {
		return {
			controlId: r || re,
			custom: b
		};
	}, [
		re,
		b,
		r
	]), ae = v != null && v !== !1 && !y, A = /* @__PURE__ */ j.createElement(Mt, S({}, D, {
		ref: t,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: E,
		lang: x
	}));
	return /* @__PURE__ */ j.createElement(wt.Provider, { value: ie }, /* @__PURE__ */ j.createElement(ee, {
		style: _,
		className: (0, M.default)(g, i, b && "custom-" + ne)
	}, y || /* @__PURE__ */ j.createElement(j.Fragment, null, b ? /* @__PURE__ */ j.createElement(j.Fragment, null, A, ae && /* @__PURE__ */ j.createElement(Pt, { "data-browse": C }, v)) : /* @__PURE__ */ j.createElement(j.Fragment, null, ae && /* @__PURE__ */ j.createElement(Pt, null, v), A), (u || f) && /* @__PURE__ */ j.createElement(Ct, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
It.displayName = "FormFile", It.Input = Mt, It.Label = Pt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormControl.js
var Lt = [
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
], Rt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.bsCustomPrefix, a = e.type, s = e.size, c = e.htmlSize, l = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = n(e, Lt), x = (0, j.useContext)(wt).controlId, C = _ ? [i, "custom"] : [r, "form-control"], w = C[0], ee = C[1];
	r = o(w, ee);
	var T;
	if (h) {
		var E;
		T = (E = {}, E[r + "-plaintext"] = !0, E);
	} else if (a === "file") {
		var D;
		T = (D = {}, D[r + "-file"] = !0, D);
	} else if (a === "range") {
		var O;
		T = (O = {}, O[r + "-range"] = !0, O);
	} else if (y === "select" && _) {
		var te;
		T = (te = {}, te[r + "-select"] = !0, te[r + "-select-" + s] = s, te);
	} else {
		var k;
		T = (k = {}, k[r] = !0, k[r + "-" + s] = s, k);
	}
	return /* @__PURE__ */ j.createElement(y, S({}, b, {
		type: a,
		size: c,
		ref: t,
		readOnly: g,
		id: l || x,
		className: (0, M.default)(u, T, f && "is-valid", m && "is-invalid")
	}));
});
Rt.displayName = "FormControl";
var zt = Object.assign(Rt, { Feedback: Ct }), Bt = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Vt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.children, s = e.controlId, c = e.as, l = c === void 0 ? "div" : c, u = n(e, Bt);
	r = o(r, "form-group");
	var d = (0, j.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ j.createElement(wt.Provider, { value: d }, /* @__PURE__ */ j.createElement(l, S({}, u, {
		ref: t,
		className: (0, M.default)(i, r)
	}), a));
});
Vt.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Ht = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Ut = {
	column: !1,
	srOnly: !1
}, Wt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.as, i = r === void 0 ? "label" : r, a = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, u = e.htmlFor, d = n(e, Ht), f = (0, j.useContext)(wt).controlId;
	a = o(a, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var m = (0, M.default)(l, a, c && "sr-only", s && p);
	return u ||= f, s ? /* @__PURE__ */ j.createElement(se, S({
		ref: t,
		as: "label",
		className: m,
		htmlFor: u
	}, d)) : /* @__PURE__ */ j.createElement(i, S({
		ref: t,
		className: m,
		htmlFor: u
	}, d));
});
Wt.displayName = "FormLabel", Wt.defaultProps = Ut;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Gt = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], Kt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.as, s = a === void 0 ? "small" : a, c = e.muted, l = n(e, Gt);
	return r = o(r, "form-text"), /* @__PURE__ */ j.createElement(s, S({}, l, {
		ref: t,
		className: (0, M.default)(i, r, c && "text-muted")
	}));
});
Kt.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var qt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	return /* @__PURE__ */ j.createElement(At, S({}, e, {
		ref: t,
		type: "switch"
	}));
});
qt.displayName = "Switch", qt.Input = At.Input, qt.Label = At.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Jt = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Yt = Pe("form-row"), Xt = { inline: !1 }, Zt = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.inline, a = e.className, s = e.validated, c = e.as, l = c === void 0 ? "form" : c, u = n(e, Jt);
	return r = o(r, "form"), /* @__PURE__ */ j.createElement(l, S({}, u, {
		ref: t,
		className: (0, M.default)(a, s && "was-validated", i && r + "-inline")
	}));
});
Zt.displayName = "Form", Zt.defaultProps = Xt, Zt.Row = Yt, Zt.Group = Vt, Zt.Control = zt, Zt.Check = At, Zt.File = It, Zt.Switch = qt, Zt.Label = Wt, Zt.Text = Kt;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/InputGroup.js
var Qt = [
	"bsPrefix",
	"size",
	"hasValidation",
	"className",
	"as"
], $t = Pe("input-group-append"), en = Pe("input-group-prepend"), tn = Pe("input-group-text", { Component: "span" }), nn = function(e) {
	return /* @__PURE__ */ j.createElement(tn, null, /* @__PURE__ */ j.createElement("input", S({ type: "checkbox" }, e)));
}, rn = function(e) {
	return /* @__PURE__ */ j.createElement(tn, null, /* @__PURE__ */ j.createElement("input", S({ type: "radio" }, e)));
}, an = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.size, a = e.hasValidation, s = e.className, c = e.as, l = c === void 0 ? "div" : c, u = n(e, Qt);
	return r = o(r, "input-group"), /* @__PURE__ */ j.createElement(l, S({ ref: t }, u, { className: (0, M.default)(s, r, i && r + "-" + i, a && "has-validation") }));
});
an.displayName = "InputGroup", an.Text = tn, an.Radio = rn, an.Checkbox = nn, an.Append = $t, an.Prepend = en;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var on = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], sn = /* @__PURE__ */ j.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.variant, a = e.animation, s = e.size, c = e.children, l = e.as, u = l === void 0 ? "div" : l, d = e.className, f = n(e, on);
	r = o(r, "spinner");
	var p = r + "-" + a;
	return /* @__PURE__ */ j.createElement(u, S({ ref: t }, f, { className: (0, M.default)(d, p, s && p + "-" + s, i && "text-" + i) }), c);
});
sn.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/css-mediaquery@0.1.2/node_modules/css-mediaquery/index.js
var cn = /* @__PURE__ */ ge(((e) => {
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
})), ln = /* @__PURE__ */ ge(((e, t) => {
	var n = cn().match, r = typeof window < "u" ? window.matchMedia : null;
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
})), un = /[A-Z]/g, dn = /^ms-/, fn = {};
function pn(e) {
	return "-" + e.toLowerCase();
}
function mn(e) {
	if (fn.hasOwnProperty(e)) return fn[e];
	var t = e.replace(un, pn);
	return fn[e] = dn.test(t) ? "-" + t : t;
}
//#endregion
//#region node_modules/.pnpm/shallow-equal@3.1.0/node_modules/shallow-equal/dist/index.modern.mjs
function hn(e, t) {
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
var gn = /* @__PURE__ */ A(ln()), _n = N.default.oneOfType([N.default.string, N.default.number]), vn = {
	all: N.default.bool,
	grid: N.default.bool,
	aural: N.default.bool,
	braille: N.default.bool,
	handheld: N.default.bool,
	print: N.default.bool,
	projection: N.default.bool,
	screen: N.default.bool,
	tty: N.default.bool,
	tv: N.default.bool,
	embossed: N.default.bool
}, yn = {
	orientation: N.default.oneOf(["portrait", "landscape"]),
	scan: N.default.oneOf(["progressive", "interlace"]),
	aspectRatio: N.default.string,
	deviceAspectRatio: N.default.string,
	height: _n,
	deviceHeight: _n,
	width: _n,
	deviceWidth: _n,
	color: N.default.bool,
	colorIndex: N.default.bool,
	monochrome: N.default.bool,
	resolution: _n,
	type: Object.keys(vn)
}, { type: bn, ...xn } = yn, Sn = {
	minAspectRatio: N.default.string,
	maxAspectRatio: N.default.string,
	minDeviceAspectRatio: N.default.string,
	maxDeviceAspectRatio: N.default.string,
	minHeight: _n,
	maxHeight: _n,
	minDeviceHeight: _n,
	maxDeviceHeight: _n,
	minWidth: _n,
	maxWidth: _n,
	minDeviceWidth: _n,
	maxDeviceWidth: _n,
	minColor: N.default.number,
	maxColor: N.default.number,
	minColorIndex: N.default.number,
	maxColorIndex: N.default.number,
	minMonochrome: N.default.number,
	maxMonochrome: N.default.number,
	minResolution: _n,
	maxResolution: _n,
	...xn
}, Cn = {
	all: {
		...vn,
		...Sn
	},
	types: vn,
	matchers: yn,
	features: Sn
}, wn = (e) => `not ${e}`, Tn = (e, t) => {
	let n = mn(e);
	return typeof t == "number" && (t = `${t}px`), t === !0 ? n : t === !1 ? wn(n) : `(${n}: ${t})`;
}, En = (e) => e.join(" and "), Dn = (e) => {
	let t = [];
	return Object.keys(Cn.all).forEach((n) => {
		let r = e[n];
		r != null && t.push(Tn(n, r));
	}), En(t);
}, On = (0, j.createContext)(void 0), kn = (e) => e.query || Dn(e), An = (e) => {
	if (e) return Object.keys(e).reduce((t, n) => (t[mn(n)] = e[n], t), {});
}, jn = () => {
	let e = (0, j.useRef)(!1);
	return (0, j.useEffect)(() => {
		e.current = !0;
	}, []), e.current;
}, Mn = (e) => {
	let t = (0, j.useContext)(On), n = () => An(e) || An(t), [r, i] = (0, j.useState)(n);
	return (0, j.useEffect)(() => {
		let e = n();
		hn(r, e) || i(e);
	}, [e, t]), r;
}, Nn = (e) => {
	let t = () => kn(e), [n, r] = (0, j.useState)(t);
	return (0, j.useEffect)(() => {
		let e = t();
		n !== e && r(e);
	}, [e]), n;
}, Pn = (e, t) => {
	let n = () => (0, gn.default)(e, t || {}, !!t), [r, i] = (0, j.useState)(n), a = jn();
	return (0, j.useEffect)(() => {
		if (a) {
			let e = n();
			return i(e), () => {
				e && e.dispose();
			};
		}
	}, [e, t]), r;
}, Fn = (e) => {
	let [t, n] = (0, j.useState)(e.matches);
	return (0, j.useEffect)(() => {
		let t = (e) => {
			n(e.matches);
		};
		return e.addListener(t), n(e.matches), () => {
			e.removeListener(t);
		};
	}, [e]), t;
}, In = (e, t, n) => {
	let r = Mn(t), i = Nn(e);
	if (!i) throw Error("Invalid or missing MediaQuery!");
	let a = Pn(i, r), o = Fn(a), s = jn();
	return (0, j.useEffect)(() => {
		s && n && n(o);
	}, [o]), (0, j.useEffect)(() => () => {
		a && a.dispose();
	}, []), o;
}, Ln = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), Rn = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), zn = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Bn = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), Vn = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Hn = (e) => /* @__PURE__ */ j.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), Un = (e) => /* @__PURE__ */ j.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Wn = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Gn = (e) => /* @__PURE__ */ j.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ j.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function Kn(e) {
	return typeof e == "string" || e instanceof String;
}
function qn(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Jn(e, t) {
	return Array.isArray(t) ? Jn(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var P = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function Yn(e) {
	switch (e) {
		case P.LEFT: return P.FORCE_LEFT;
		case P.RIGHT: return P.FORCE_RIGHT;
		default: return e;
	}
}
function Xn(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Zn(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Zn(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Zn(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var Qn = class {
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
		return !this.removedCount || this.insertedCount ? P.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? P.RIGHT : P.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function F(e, t) {
	return new F.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function $n(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? F.MaskedRegExp : Kn(e) ? F.MaskedPattern : e === Date ? F.MaskedDate : e === Number ? F.MaskedNumber : Array.isArray(e) || e === Array ? F.MaskedDynamic : F.Masked && e.prototype instanceof F.Masked ? e : F.Masked && e instanceof F.Masked ? e.constructor : e instanceof Function ? F.MaskedFunction : (console.warn("Mask not found for mask", e), F.Masked);
}
function er(e) {
	if (!e) throw Error("Options in not defined");
	if (F.Masked) {
		if (e.prototype instanceof F.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof F.Masked ? { mask: e } : qn(e) && e.mask instanceof F.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Jn(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return qn(e) ? { ...e } : { mask: e };
}
function tr(e) {
	if (F.Masked && e instanceof F.Masked) return e;
	let t = er(e), n = $n(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
F.createMask = tr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var nr = class {
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
F.MaskElement = nr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var rr = 90, ir = 89, ar = class extends nr {
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
		if (this._handlers.redo && (e.keyCode === rr && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === ir && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === rr && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
F.HTMLMaskElement = ar;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var or = class extends ar {
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
F.HTMLMaskElement = ar;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var sr = class extends ar {
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
F.HTMLContenteditableMaskElement = sr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var cr = class e {
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
cr.MAX_LENGTH = 100, F.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof nr ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new sr(e) : new or(e), this.masked = tr(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new cr(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof F.Masked) && this.masked.constructor === $n(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof F.Masked ? e : tr({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, P.LEFT));
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
		let t = new Qn({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : P.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== P.NONE && (a = this.masked.nearestInputPos(a, P.NONE)), this.updateControl(a), delete this._inputEvent;
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
var I = class e {
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
F.ChangeDetails = I;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var lr = class {
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
}, ur = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new lr(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return Kn(e) && (e = new lr(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new I({
			inserted: e,
			rawInserted: e
		})) : new I();
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
			a || (i = new I(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new I();
	}
	_appendEager() {
		return new I();
	}
	append(e, t, n) {
		if (!Kn(e)) throw Error("value should be string");
		let r = Kn(n) ? new lr(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new I();
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
		return t === void 0 && (t = {}), I.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), I.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = P.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = Yn(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new I();
		if (r !== P.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? P.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== P.NONE && c === this.rawInputValue) if (r === P.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new I({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === P.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Zn(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new I();
	}
};
ur.DEFAULTS = { skipInvalid: !0 }, ur.EMPTY_VALUES = [
	void 0,
	null,
	""
], F.Masked = ur;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var dr = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = Kn(t) ? new lr(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof lr) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof F.MaskedPattern)) return new lr(this.toString()).appendTo(t);
		let n = new I();
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
			let n = "chunks" in t ? new e() : new lr();
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
}, fr = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, P.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, P.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, P.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, P.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, P.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, P.NONE), !0;
		});
	}
}, pr = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new I();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = P.NONE);
		let n = this._value.length;
		switch (t) {
			case P.LEFT:
			case P.FORCE_LEFT: return 0;
			case P.NONE:
			case P.RIGHT:
			case P.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new I();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new I({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new I();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new lr("");
	}
	appendTail(e) {
		return Kn(e) && (e = new lr(String(e))), e.appendTo(this);
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
}, mr = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = tr(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new I();
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
		if (t === void 0 && (t = {}), this.isFilled) return new I();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new I(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new I() : (this.isFilled = !0, new I({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new I();
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
		t === void 0 && (t = P.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case P.LEFT:
			case P.FORCE_LEFT: return this.isComplete ? r : 0;
			case P.RIGHT:
			case P.FORCE_RIGHT: return this.isComplete ? r : n;
			case P.NONE:
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
		return new I();
	}
};
mr.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, F.MaskedRegExp = class extends ur {
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
var hr = class e extends ur {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, mr.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = er(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? tr(i) : new F.RepeatBlock(i);
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
			let c = s ? new mr({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...er(t[o]),
				parent: this
			}) : new pr({
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
		let e = new I(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new I();
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
		let n = new dr();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof dr && (a.blockIndex = t), n.extend(a);
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
		let t = new I();
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
		if (t === void 0 && (t = P.NONE), !this._blocks.length) return 0;
		let n = new fr(this, e);
		if (t === P.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === P.LEFT || t === P.FORCE_LEFT) {
			if (t === P.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === P.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === P.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === P.RIGHT || t === P.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === P.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, P.LEFT))) : e;
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
		let t = new I();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
hr.DEFAULTS = {
	...ur.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, hr.STOP_CHAR = "`", hr.ESCAPE_CHAR = "\\", hr.InputDefinition = mr, hr.FixedDefinition = pr, F.MaskedPattern = hr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var gr = class extends hr {
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
		let t = new I();
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
F.MaskedRange = gr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var _r = "d{.}`m{.}`Y", vr = class e extends hr {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: Kn(t) ? t : n
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
			mask: Kn(n) ? n : r,
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
vr.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: gr,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: gr,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: gr,
		from: 1900,
		to: 9999
	}
}), vr.DEFAULTS = {
	...hr.DEFAULTS,
	mask: Date,
	pattern: _r,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, F.MaskedDate = vr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var yr = class e extends ur {
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
			let { expose: t, ...n } = er(e), r = tr({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new I(), l = s?.state;
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
		let t = new I();
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
		let n = new I();
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
			return Zn(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
yr.DEFAULTS = {
	...ur.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, P.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, P.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, F.MaskedDynamic = yr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var br = class e extends hr {
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
		let n = Math.min(this.nearestInputPos(0, P.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new I({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new lr("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new I();
		let n = Math.min(super.nearestInputPos(0, P.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
br.DEFAULTS = {
	...hr.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, F.MaskedEnum = br, F.MaskedFunction = class extends ur {
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
var xr, Sr = class e extends ur {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Xn(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Xn).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Xn(this.thousandsSeparator), "g");
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
		s ? l = new I({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new I()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new I({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case P.NONE:
			case P.LEFT:
			case P.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === P.FORCE_LEFT) return n;
				}
				break;
			}
			case P.RIGHT:
			case P.FORCE_RIGHT: {
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
xr = Sr, Sr.UNMASKED_RADIX = ".", Sr.EMPTY_VALUES = [...ur.EMPTY_VALUES, 0], Sr.DEFAULTS = {
	...ur.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [xr.UNMASKED_RADIX],
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
}, F.MaskedNumber = Sr;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Cr = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function wr(e, t, n) {
	t === void 0 && (t = Cr.MASKED), n === void 0 && (n = Cr.MASKED);
	let r = tr(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Tr(e, t, n, r) {
	return wr(t, n, r)(e);
}
F.PIPE_TYPE = Cr, F.createPipe = wr, F.pipe = Tr, F.RepeatBlock = class extends hr {
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
		let { repeat: t, ...n } = er(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = tr(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(tr(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new I();
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
	globalThis.IMask = F;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Er = {
	mask: N.default.oneOfType([
		N.default.array,
		N.default.func,
		N.default.string,
		N.default.instanceOf(RegExp),
		N.default.oneOf([
			Date,
			Number,
			F.Masked
		]),
		N.default.instanceOf(F.Masked)
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
}, Dr = Object.keys(Er).filter((e) => e !== "value"), Or = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], kr = Dr.filter((e) => Or.indexOf(e) < 0);
function Ar(e) {
	var t;
	let n = (t = class extends j.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = F(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => kr.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Dr.forEach((e) => {
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
			return j.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Er, j.forwardRef((e, t) => j.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var jr = Ar((e) => {
	let { inputRef: t, ...n } = e;
	return j.createElement("input", {
		...n,
		ref: t
	});
}), Mr = j.forwardRef((e, t) => j.createElement(jr, {
	...e,
	ref: t
})), Nr = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Pr = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Fr = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, j.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Ir = (e, t) => {
	let [n, r] = (0, j.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(ce(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, j.useState)(e);
		return (0, j.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Lr = (e) => e, Rr = /* @__PURE__ */ j.createContext({
	getControlProps: Lr,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Lr,
	getDescriptorProps: Lr,
	hasFormGroupProvider: !1
}), zr = () => j.useContext(Rr);
function Br(e) {
	let [t, n] = (0, j.useState)(e);
	return [t, (e) => {
		(0, j.useEffect)(() => n(e), [e]);
	}];
}
function Vr({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, j.useMemo)(() => t || ce("form-field"), [t]), [o, s] = Ir(a), [c, l] = Ir(a), [u, d] = Br(!1), f = {
		getControlProps: (0, j.useCallback)((e) => {
			let t = u ? c : void 0;
			return Nr({
				...e,
				"aria-describedby": (0, M.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, M.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ j.createElement(Rr.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Hr = {
	SMALL: "sm",
	LARGE: "lg"
}, Ur = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Wr = {
	[Ur.DEFAULT]: null,
	[Ur.VALID]: zn,
	[Ur.INVALID]: Vn,
	[Ur.WARNING]: Gn,
	[Ur.CRITERIA_EMPTY]: Wn,
	[Ur.CRITERIA_VALID]: Bn,
	[Ur.CRITERIA_INVALID]: Rn
}, Gr = ({ isInvalid: e, isValid: t }) => t ? Ur.VALID : e ? Ur.INVALID : Ur.DEFAULT;
function Kr({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Wr[e];
	return n ? /* @__PURE__ */ j.createElement(fe, { src: n }) : null;
}
Kr.propTypes = {
	type: N.default.oneOf(Object.values(Ur)),
	customIcon: N.default.node
}, Kr.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function qr({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, M.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ j.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ j.createElement(Kr, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ j.createElement("div", null, e));
}
qr.propTypes = {
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
}, qr.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Jr({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = zr(), a = n(t), o = (0, M.default)("pgn__form-control-description", t.className), s = t.type || Gr({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ j.createElement(qr, {
		...a,
		className: o,
		type: s
	}, e);
}
Jr.propTypes = {
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
}, Jr.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function Yr({ children: e }) {
	let { controlId: t } = zr();
	return /* @__PURE__ */ j.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ j.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ j.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
Yr.propTypes = { children: N.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Xr({ children: e, location: t }) {
	return /* @__PURE__ */ j.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Xr.propTypes = {
	children: N.default.node.isRequired,
	location: N.default.oneOf(["leading", "trailing"])
}, Xr.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Zr({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = zr(a), s = a.size || o.size;
	return /* @__PURE__ */ j.createElement("div", {
		className: (0, M.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Hr.LARGE,
			"pgn__form-control-decorator-group-sm": s === Hr.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ j.createElement(Xr, { location: "leading" }, t), n && /* @__PURE__ */ j.createElement(Xr, { location: "trailing" }, n), r && /* @__PURE__ */ j.createElement(Yr, null, r));
}
Zr.propTypes = {
	children: N.default.node.isRequired,
	leadingElement: N.default.node,
	trailingElement: N.default.node,
	floatingLabel: N.default.node,
	className: N.default.string,
	size: N.default.oneOf([Hr.SMALL, Hr.LARGE])
}, Zr.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var Qr = /* @__PURE__ */ j.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = zr(), h = j.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Fr({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, j.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, j.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Pr(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ j.createElement(Zr, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ j.createElement(zt, {
		as: c ? Mr : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, M.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
Qr.Feedback = Jr, Qr.Description = Jr, Qr.propTypes = {
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
}, Qr.defaultProps = {
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
function $r({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = zr(), o = (0, M.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Hr.LARGE,
		"pgn__form-label-sm": r === Hr.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ j.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function ei({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ j.createElement(a ?? "div", {
		...o,
		className: (0, M.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ j.createElement(Vr, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var ti = /* @__PURE__ */ j.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), ni = () => (0, j.useContext)(ti);
function ri({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Pr(n, e.onBlur) : n,
			onFocus: e.onFocus ? Pr(r, e.onFocus) : r,
			onChange: e.onChange ? Pr(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ j.createElement(ti.Provider, { value: c }, e);
}
ri.propTypes = {
	children: N.default.node.isRequired,
	name: N.default.string.isRequired,
	onBlur: N.default.func,
	onFocus: N.default.func,
	onChange: N.default.func,
	value: N.default.string,
	defaultValue: N.default.string
}, ri.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var ii = /* @__PURE__ */ j.forwardRef((e, t) => {
	let { getControlProps: n } = zr(), { getRadioControlProps: r, hasRadioSetProvider: i } = ni(), a = n({
		...e,
		className: (0, M.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ j.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
ii.propTypes = { className: N.default.string }, ii.defaultProps = { className: void 0 };
var ai = /* @__PURE__ */ j.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ j.createElement(Vr, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ j.createElement("div", { className: (0, M.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ j.createElement(ii, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ j.createElement("div", null, /* @__PURE__ */ j.createElement($r, { className: r }, e), i && /* @__PURE__ */ j.createElement(Jr, { hasIcon: !1 }, i)))));
ai.propTypes = {
	id: N.default.string,
	children: N.default.node.isRequired,
	className: N.default.string,
	controlClassName: N.default.string,
	labelClassName: N.default.string,
	description: N.default.node,
	isInvalid: N.default.bool,
	isValid: N.default.bool,
	disabled: N.default.bool
}, ai.defaultProps = {
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
function oi({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ j.createElement(e, {
		className: (0, M.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
oi.propTypes = {
	as: N.default.elementType,
	className: N.default.string,
	isInline: N.default.bool,
	children: N.default.node
}, oi.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function si({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = zr();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ j.createElement(ri, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ j.createElement(oi, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
si.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	name: N.default.string.isRequired,
	value: N.default.string,
	defaultValue: N.default.string,
	isInline: N.default.bool,
	onChange: N.default.func,
	onFocus: N.default.func,
	onBlur: N.default.func
}, si.defaultProps = {
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
var ci, li = new Uint8Array(16);
function ui() {
	if (!ci && (ci = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ci)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return ci(li);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var di = [];
for (let e = 0; e < 256; ++e) di.push((e + 256).toString(16).slice(1));
function fi(e, t = 0) {
	return di[e[t + 0]] + di[e[t + 1]] + di[e[t + 2]] + di[e[t + 3]] + "-" + di[e[t + 4]] + di[e[t + 5]] + "-" + di[e[t + 6]] + di[e[t + 7]] + "-" + di[e[t + 8]] + di[e[t + 9]] + "-" + di[e[t + 10]] + di[e[t + 11]] + di[e[t + 12]] + di[e[t + 13]] + di[e[t + 14]] + di[e[t + 15]];
}
var pi = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function mi(e, t, n) {
	if (pi.randomUUID && !t && !e) return pi.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || ui)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return fi(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var hi = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), gi = (e, t) => t.every((t) => e[t] !== void 0), _i = (e, t) => hi(e, (e) => Array.isArray(t) ? gi(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), vi = /* @__PURE__ */ j.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, M.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ j.createElement(sn, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ j.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function yi({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function bi({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function xi({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && yi({
		event: e,
		currentIndex: s,
		activeElement: a
	}), bi({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Si(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, j.useRef)();
	return (0, j.useEffect)(() => {
		let e = (e) => {
			xi({
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
var Ci = u({
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
}), wi = /* @__PURE__ */ (0, j.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: u, customErrorMessageText: d, onChange: f, helpMessage: p, ...m }, h) => {
	let g = ee(), _ = (0, j.useRef)(), v = Si({
		selectors: t,
		ignoredKeys: n
	}), [y, b] = (0, j.useState)(!1), [x, S] = (0, j.useState)(!1), [C, w] = (0, j.useState)(!1), [T, E] = (0, j.useState)(!1), [D, O] = (0, j.useState)(i?.userProvidedText || ""), [te, k] = (0, j.useState)([]), [ne, re] = (0, j.useState)(null), [ie, ae] = (0, j.useState)(!0), [A, oe] = (0, j.useState)(""), se = (e) => {
		re(e);
	}, ce = () => {
		k([]), b(!1), re(null);
	}, le = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		w(!0), E(!0), O(n), f && (!i || i && n !== i.selectionValue) && f({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), ce(), t && t(e);
	};
	function de(t = "") {
		let n = j.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? mi();
			return /* @__PURE__ */ j.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => le(e, n),
				id: i,
				onFocus: () => se(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let pe = () => {
		k(de(D)), ae(!0), oe(""), b(!0);
	}, me = () => {
		y ? ce() : pe();
	}, he = /* @__PURE__ */ j.createElement(ue, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: y ? Un : Hn,
		iconAs: fe,
		size: "sm",
		variant: "secondary",
		alt: y ? g.formatMessage(Ci.iconButtonClosed) : g.formatMessage(Ci.iconButtonOpened),
		onClick: me
	}), ge = () => {
		S(!0);
	}, _e = () => {
		if (u) {
			ae(!1), oe(d);
			return;
		}
		if (o && !C) {
			ae(!1), oe(s);
			return;
		}
		if (C && c && !T) {
			ae(!1), oe(l);
			return;
		}
		ae(!0), oe("");
	};
	(0, j.useImperativeHandle)(h, () => ({ updateErrorStateAndErrorMessage: _e }));
	let ve = () => {
		S(!1), ce(), _e();
	}, ye = (e) => {
		if (x) {
			if (e.key === "Escape") {
				e.preventDefault(), _ && _.current.focus(), ce();
				return;
			}
			e.key === "Tab" && ve();
		}
	}, be = (e) => {
		v.current && !v.current.contains(e.target) && x && ve();
	};
	(0, j.useEffect)(() => (document.addEventListener("keydown", ye), document.addEventListener("click", be, !0), () => {
		document.removeEventListener("click", be, !0), document.removeEventListener("keydown", ye);
	})), (0, j.useEffect)(() => {
		O(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), E(!!i && !!i.selectionValue);
	}, [i]);
	let xe = () => {
		pe();
	}, Se = (e) => {
		let t = e.target.value;
		if (!t.length) {
			O(""), w(!1), E(!1), k([]), ce(), f && f({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		w(!0);
		let n = de(t);
		k(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			E(!1), O(t), f && f({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		E(!0), O(r.props.children), f && f({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: Ce } = zr(), we = Ce(m);
	return /* @__PURE__ */ j.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: v,
		onFocus: ge
	}, /* @__PURE__ */ j.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${te.length} options found`), /* @__PURE__ */ j.createElement(Vr, {
		controlId: we.id,
		isInvalid: !ie
	}, /* @__PURE__ */ j.createElement(Qr, {
		ref: _,
		"aria-expanded": (te.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: D,
		"aria-invalid": A,
		"aria-activedescendant": ne,
		onChange: Se,
		onClick: xe,
		trailingElement: he,
		"data-testid": "autosuggest-textbox-input",
		...we
	}), p && ie && /* @__PURE__ */ j.createElement(Jr, { type: "default" }, p), !ie && /* @__PURE__ */ j.createElement(Jr, {
		type: "invalid",
		"feedback-for": we.name
	}, A)), /* @__PURE__ */ j.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ j.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ j.createElement(vi, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : te.length > 0 && te));
});
wi.defaultProps = {
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
}, wi.propTypes = {
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
	valueRequiredErrorMessageText: _i(N.default.string, "isValueRequired"),
	isSelectionRequired: N.default.bool,
	selectionRequiredErrorMessageText: _i(N.default.string, "isSelectionRequired"),
	hasCustomError: N.default.bool,
	customErrorMessageText: _i(N.default.string, "hasCustomError"),
	name: N.default.string,
	readOnly: N.default.bool,
	children: N.default.node,
	screenReaderText: N.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Ti({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, M.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, j.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ j.createElement(j.Fragment, null, i && /* @__PURE__ */ j.createElement(fe, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ j.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ j.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ j.createElement(fe, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Ei({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ j.createElement(Ti, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, M.default)(t, "dropdown-item"),
		...r
	}, e);
}
Ei.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Ei.propTypes = {
	className: N.default.string,
	children: N.default.string,
	onClick: N.default.func
};
var Di = /* @__PURE__ */ j.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Oi = () => (0, j.useContext)(Di);
function ki({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Pr(n, e.onBlur) : n,
			onFocus: e.onFocus ? Pr(r, e.onFocus) : r,
			onChange: e.onChange ? Pr(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ j.createElement(Di.Provider, { value: c }, e);
}
ki.propTypes = {
	children: N.default.node.isRequired,
	name: N.default.string,
	onBlur: N.default.func,
	onFocus: N.default.func,
	onChange: N.default.func,
	value: N.default.arrayOf(N.default.string),
	defaultValue: N.default.arrayOf(N.default.string)
}, ki.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Ai = /* @__PURE__ */ j.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Oi(), a = j.useRef(), o = n || a, { getControlProps: s } = zr(), c = s({
		...t,
		className: (0, M.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), j.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ j.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Ai.propTypes = {
	isIndeterminate: N.default.bool,
	className: N.default.string
}, Ai.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var ji = /* @__PURE__ */ j.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Oi(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = zr();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ j.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ j.createElement(Vr, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ j.createElement("div", {
		className: (0, M.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ j.createElement("div", null, /* @__PURE__ */ j.createElement($r, { className: r }, e), i && /* @__PURE__ */ j.createElement(Jr, { hasIcon: !1 }, i))));
});
ji.propTypes = {
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
}, ji.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Ai,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Mi = /* @__PURE__ */ j.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = j.useRef(), i = n || r, { getControlProps: a } = zr(), o = a({
		...t,
		className: (0, M.default)("pgn__form-switch-input", t.className)
	});
	return j.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ j.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Mi.propTypes = {
	isIndeterminate: N.default.bool,
	className: N.default.string
}, Mi.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Ni = /* @__PURE__ */ j.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ j.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ j.createElement(ji, {
	className: (0, M.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Mi,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ j.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Ni.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	labelClassName: N.default.string,
	helperText: N.default.node,
	floatLabelLeft: N.default.bool
}, Ni.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Pi({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = zr();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ j.createElement(ki, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ j.createElement(oi, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Pi.propTypes = {
	children: N.default.node.isRequired,
	className: N.default.string,
	name: N.default.string.isRequired,
	value: N.default.arrayOf(N.default.string),
	defaultValue: N.default.arrayOf(N.default.string),
	isInline: N.default.bool,
	onChange: N.default.func,
	onFocus: N.default.func,
	onBlur: N.default.func
}, Pi.defaultProps = {
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
var Fi = Pi, L = Zt;
L.Control = Qr, L.Radio = ai, L.RadioSet = si, L.Autosuggest = wi, L.AutosuggestOption = Ei, L.Checkbox = ji, L.CheckboxSet = Pi, L.Switch = Ni, L.SwitchSet = Fi, L.Label = $r, L.Group = ei, L.Text = qr;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Ii = /* @__PURE__ */ A(ve()), Li = /* @__PURE__ */ j.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function Ri({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, j.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ j.createElement(Li.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zi = "right-scroll-bar-position", Bi = "width-before-scroll-bar", Vi = "with-scroll-bars-hidden", Hi = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ui(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function Wi(e, t) {
	var n = (0, j.useState)(function() {
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
var Gi = typeof window < "u" ? j.useLayoutEffect : j.useEffect, Ki = /* @__PURE__ */ new WeakMap();
function qi(e, t) {
	var n = Wi(t || null, function(t) {
		return e.forEach(function(e) {
			return Ui(e, t);
		});
	});
	return Gi(function() {
		var t = Ki.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ui(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ui(e, a);
			});
		}
		Ki.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Ji(e) {
	return e;
}
function Yi(e, t) {
	t === void 0 && (t = Ji);
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
function Xi(e, t) {
	return t === void 0 && (t = Ji), Yi(e, t);
}
function Zi(e) {
	e === void 0 && (e = {});
	var t = Yi(null);
	return t.options = T({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var Qi = function(e) {
	var t = e.sideCar, n = _(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return j.createElement(r, T({}, n));
};
Qi.isSideCarExport = !0;
function $i(e, t) {
	return e.useMedium(t), Qi;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var ea = Zi(), ta = function() {}, na = j.forwardRef(function(e, t) {
	var n = j.useRef(null), r = j.useState({
		onScrollCapture: ta,
		onWheelCapture: ta,
		onTouchMoveCapture: ta
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = _(e, [
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
	]), S = f, C = qi([n, t]), w = T(T({}, x), i);
	return j.createElement(j.Fragment, null, u && j.createElement(S, {
		sideCar: ea,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: b
	}), o ? j.cloneElement(j.Children.only(s), T(T({}, w), { ref: C })) : j.createElement(y, T({}, w, {
		className: c,
		ref: C
	}), s));
});
na.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, na.classNames = {
	fullWidth: Bi,
	zeroRight: zi
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var ra = "data-focus-lock", ia = "data-focus-lock-disabled", aa = "data-no-focus-lock", oa = "data-autofocus-inside", sa = "data-no-autofocus", ca = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, la = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: ca
	}), n, n && /* @__PURE__ */ j.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: ca
	}));
};
la.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var ua = Xi({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), da = Xi(), fa = Xi(), pa = Zi({
	async: !0,
	ssr: typeof document < "u"
}), ma = /* @__PURE__ */ (0, j.createContext)(void 0), ha = [], ga = /* @__PURE__ */ (0, j.forwardRef)(function(e, t) {
	var n, r = (0, j.useState)(), i = r[0], a = r[1], o = (0, j.useRef)(), s = (0, j.useRef)(!1), c = (0, j.useRef)(null), l = (0, j.useState)({})[1], u = e.children, d = e.disabled, f = d === void 0 ? !1 : d, p = e.noFocusGuards, m = p === void 0 ? !1 : p, h = e.persistentFocus, g = h === void 0 ? !1 : h, _ = e.crossFrame, v = _ === void 0 ? !0 : _, y = e.autoFocus, b = y === void 0 ? !0 : y;
	e.allowTextSelection;
	var x = e.group, C = e.className, w = e.whiteList, ee = e.hasPositiveIndices, T = e.shards, E = T === void 0 ? ha : T, D = e.as, O = D === void 0 ? "div" : D, te = e.lockProps, k = te === void 0 ? {} : te, ne = e.sideCar, re = e.returnFocus, ie = re === void 0 ? !1 : re, ae = e.focusOptions, A = e.onActivation, oe = e.onDeactivation, se = (0, j.useState)({})[0], ce = (0, j.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!c.current) {
			var n = document?.activeElement;
			c.current = n, n !== document.body && (c.current = t(n));
		}
		o.current && A && A(o.current), s.current = !0, l();
	}, [A]), le = (0, j.useCallback)(function() {
		s.current = !1, oe && oe(o.current), l();
	}, [oe]), ue = (0, j.useCallback)(function(e) {
		var t = c.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof ie == "function" ? ie(n) : ie;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				c.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [ie]), de = (0, j.useCallback)(function(e) {
		s.current && ua.useMedium(e);
	}, []), fe = da.useMedium, pe = (0, j.useCallback)(function(e) {
		o.current !== e && (o.current = e, a(e));
	}, []), me = S((n = {}, n[ia] = f && "disabled", n[ra] = x, n), k), he = m !== !0, ge = he && m !== "tail", _e = qi([t, pe]), ve = (0, j.useMemo)(function() {
		return {
			observed: o,
			shards: E,
			enabled: !f,
			get active() {
				return s.current;
			}
		};
	}, [
		f,
		s,
		E,
		o
	]);
	return /* @__PURE__ */ j.createElement(j.Fragment, null, he && [/* @__PURE__ */ j.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: ca
	}), ee ? /* @__PURE__ */ j.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 1,
		style: ca
	}) : null], !f && /* @__PURE__ */ j.createElement(ne, {
		id: se,
		sideCar: pa,
		observed: i,
		disabled: f,
		persistentFocus: g,
		crossFrame: v,
		autoFocus: b,
		whiteList: w,
		shards: E,
		onActivation: ce,
		onDeactivation: le,
		returnFocus: ue,
		focusOptions: ae,
		noFocusGuards: m
	}), /* @__PURE__ */ j.createElement(O, S({ ref: _e }, me, {
		className: C,
		onBlur: fe,
		onFocus: de
	}), /* @__PURE__ */ j.createElement(ma.Provider, { value: ve }, u)), ge && /* @__PURE__ */ j.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: f ? -1 : 0,
		style: ca
	}));
});
ga.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function _a(e) {
	setTimeout(e, 1);
}
var va = function(e) {
	return e && "current" in e ? e.current : e;
}, ya = ga, ba = Zi(), xa = "data-focus-on-hidden", Sa = { preventScroll: !0 }, Ca = j.forwardRef(function(e, t) {
	var n = j.useState(!1), r = n[0], i = n[1], a = j.useState(null), o = a[0], s = a[1], c = e.children, l = e.autoFocus, u = e.shards, d = e.crossFrame, f = e.enabled, p = f === void 0 ? !0 : f, m = e.scrollLock, h = m === void 0 ? !0 : m, g = e.focusLock, v = g === void 0 ? !0 : g, y = e.returnFocus, b = y === void 0 ? !0 : y, x = e.inert, S = e.allowPinchZoom, C = e.sideCar, w = e.className, ee = e.shouldIgnore, E = e.preventScrollOnFocus, D = e.style, O = e.as, te = e.gapMode, k = _(e, [
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
	]), ne = C, re = T(T({}, r), {
		as: O,
		style: D,
		sideCar: C,
		shards: u,
		allowPinchZoom: S,
		gapMode: te,
		inert: x,
		enabled: p && h
	}), ie = j.useCallback(function(e) {
		s(e);
	}, []), ae = j.useCallback(function() {
		s(null);
	}, []);
	return j.createElement(j.Fragment, null, j.createElement(ya, {
		ref: t,
		sideCar: C,
		disabled: !(p && v),
		returnFocus: b,
		autoFocus: l,
		shards: u,
		crossFrame: d,
		onActivation: ie,
		onDeactivation: ae,
		className: w,
		whiteList: ee,
		lockProps: re,
		focusOptions: E ? Sa : void 0,
		as: na
	}, c), p && j.createElement(ne, T({}, k, {
		sideCar: ba,
		setLockProps: i,
		shards: u,
		activeNode: o
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function wa(e) {
	"@babel/helpers - typeof";
	return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, wa(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Ta(e, t) {
	if (wa(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (wa(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Ea(e) {
	var t = Ta(e, "string");
	return wa(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Da(e, t, n) {
	return (t = Ea(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Oa(e, t) {
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
				return /* @__PURE__ */ j.createElement(r, this.props);
			}, t;
		}(j.PureComponent);
		return Da(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var ka = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Aa = function(e) {
	return Array.isArray(e) ? e : [e];
}, ja = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Ma = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Na = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Pa = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Fa = function(e) {
	return e.hasAttribute("inert");
}, Ia = function(e, t) {
	return !e || Pa(e) || !Ma(e) && !Fa(e) && t(Na(e));
}, La = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Ia(t, La.bind(void 0, e));
	return e.set(t, r), r;
}, Ra = function(e, t) {
	return e && !Pa(e) ? Ga(e) ? t(Na(e)) : !1 : !0;
}, za = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Ra(t, za.bind(void 0, e));
	return e.set(t, r), r;
}, Ba = function(e) {
	return e.dataset;
}, Va = function(e) {
	return e.tagName === "BUTTON";
}, Ha = function(e) {
	return e.tagName === "INPUT";
}, Ua = function(e) {
	return Ha(e) && e.type === "radio";
}, Wa = function(e) {
	return !((Ha(e) || Va(e)) && (e.type === "hidden" || e.disabled));
}, Ga = function(e) {
	var t = e.getAttribute(sa);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, Ka = function(e) {
	return !!(e && Ba(e)?.focusGuard);
}, qa = function(e) {
	return !Ka(e);
}, Ja = function(e) {
	return !!e;
}, Ya = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, Xa = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, Za = function(e, t, n) {
	return ka(e).map(function(e, t) {
		var r = Xa(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(Ya);
}, Qa = [
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
].join(","), $a = `${Qa}, [data-focus-guard]`, eo = function(e, t) {
	return ka((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? $a : Qa) ? [n] : [], eo(n));
	}, []);
}, to = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? no([e.contentDocument.body], t) : [e];
}, no = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = eo(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return to(e, t);
		}));
		return e.concat(a, n.parentNode ? ka(n.parentNode.querySelectorAll(Qa)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, ro = function(e) {
	return ka(e.querySelectorAll(`[${oa}]`)).map(function(e) {
		return no([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, io = function(e, t) {
	return ka(e).filter(function(e) {
		return La(t, e);
	}).filter(function(e) {
		return Wa(e);
	});
}, ao = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), ka(e).filter(function(e) {
		return za(t, e);
	});
}, oo = function(e, t, n) {
	return Za(io(no(e, n), t), !0, n);
}, so = function(e, t) {
	return Za(io(no(e), t), !1);
}, co = function(e, t) {
	return io(ro(e), t);
}, lo = function(e, t) {
	return e.shadowRoot ? lo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ka(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? lo(n, t) : !1;
		}
		return lo(e, t);
	});
}, uo = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, fo = function(e) {
	return e.parentNode ? fo(e.parentNode) : e;
}, po = function(e) {
	return Aa(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(ra);
		return e.push.apply(e, n ? uo(ka(fo(t).querySelectorAll(`[${ra}="${n}"]:not([${ia}="disabled"])`))) : [t]), e;
	}, []);
}, mo = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, ho = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? ho(t.shadowRoot) : t instanceof HTMLIFrameElement && mo(function() {
			return t.contentWindow.document;
		}) ? ho(t.contentWindow.document) : t;
	}
}, go = function(e, t) {
	return e === t;
}, _o = function(e, t) {
	return !!ka(e.querySelectorAll("iframe")).some(function(e) {
		return go(e, t);
	});
}, vo = function(e, t) {
	return t === void 0 && (t = ho(ja(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : po(e).some(function(e) {
		return lo(e, t) || _o(e, t);
	});
}, yo = function(e) {
	e === void 0 && (e = document);
	var t = ho(e);
	return t ? ka(e.querySelectorAll(`[${aa}]`)).some(function(e) {
		return lo(e, t);
	}) : !1;
}, bo = function(e, t) {
	return t.filter(Ua).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, xo = function(e, t) {
	return Ua(e) && e.name ? bo(e, t) : e;
}, So = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(xo(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Co = function(e) {
	return e[0] && e.length > 1 ? xo(e[0], e) : e[0];
}, wo = function(e, t) {
	return e.indexOf(xo(t, e));
}, To = "NEW_FOCUS", Eo = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = Ka(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? To : d;
		if (d === -1) return To;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = So(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = wo(e, t[0]), C = wo(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Do = function(e) {
	return function(t) {
		var n = Ba(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Oo = function(e, t, n) {
	var r = ao(e.map(function(e) {
		return e.node;
	}).filter(Do(n)));
	return r && r.length ? Co(r) : Co(ao(t));
}, ko = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && ko(e.parentNode.host || e.parentNode, t), t;
}, Ao = function(e, t) {
	for (var n = ko(e), r = ko(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, jo = function(e, t, n) {
	var r = Aa(e), i = Aa(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Ao(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Ao(a, e);
			t && (o = !o || lo(t, o) ? t : Ao(t, o));
		});
	}), o;
}, Mo = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(co(n, t));
	}, []);
}, No = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(Ja);
}, Po = function(e, t) {
	var n = ho(Aa(e).length > 0 ? document : ja(e).ownerDocument), r = po(e).filter(qa), i = jo(n || e, e, r), a = /* @__PURE__ */ new Map(), o = so(r, a), s = o.filter(function(e) {
		var t = e.node;
		return qa(t);
	});
	if (s[0]) {
		var c = so([i], a).map(function(e) {
			return e.node;
		}), l = No(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Eo(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Oo(o, d, Mo(r, a)) || Oo(o, u, Mo(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Fo = function(e) {
	var t = po(e).filter(qa), n = Za(no([jo(e, e, t)], !0), !0, !0), r = no(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: Ka(t)
		};
	});
}, Io = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Lo = 0, Ro = !1, zo = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Po(e, t);
	if (!Ro && r) {
		if (Lo > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ro = !0, setTimeout(function() {
				Ro = !1;
			}, 1);
			return;
		}
		Lo++, Io(r.node, n.focusOptions), Lo--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function Bo(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var Vo = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: Bo(n),
		parent: Bo(n.parentElement),
		left: Bo(n.previousElementSibling),
		right: Bo(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: Bo(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, Ho = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = oo([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, Uo = function(e) {
	var t = Vo(e);
	return function() {
		return Ho(t);
	};
}, Wo = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Aa(t);
	if (r.every(function(t) {
		return !lo(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? oo(r, /* @__PURE__ */ new Map()) : so(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, Go = function(e, t) {
	var n = t ? oo(Aa(e), /* @__PURE__ */ new Map()) : so(Aa(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, Ko = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, qo = function(e, t, n) {
	t === void 0 && (t = {});
	var r = Ko(t), i = Wo(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Io(a.node, r.focusOptions);
	}
}, Jo = function(e, t) {
	t === void 0 && (t = {}), qo(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, Yo = function(e, t) {
	t === void 0 && (t = {}), qo(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, Xo = function(e, t, n) {
	var r = Go(e, t.onlyTabbable ?? !0)[n];
	r && Io(r.node, t.focusOptions);
}, Zo = function(e, t) {
	t === void 0 && (t = {}), Xo(e, t, "first");
}, Qo = function(e, t) {
	t === void 0 && (t = {}), Xo(e, t, "last");
}, $o = function() {
	return document && document.activeElement === document.body;
}, es = function() {
	return $o() || yo();
}, ts = null, ns = null, rs = function() {
	return null;
}, is = null, as = !1, os = !1, ss = function() {
	return !0;
}, cs = function(e) {
	return (ts.whiteList || ss)(e);
}, ls = function(e, t) {
	is = {
		observerNode: e,
		portaledElement: t
	};
}, us = function(e) {
	return is && is.portaledElement === e;
};
function ds(e, t, n, r) {
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
var fs = function(e) {
	return e ? !!as : as === "meanwhile";
}, ps = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, ms = function(e, t) {
	return t.some(function(t) {
		return ps(e, t, t);
	});
}, hs = function(e) {
	return so(e, /* @__PURE__ */ new Map());
}, gs = function(e) {
	return !hs([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, _s = function() {
	var e = !1;
	if (ts) {
		var t = ts, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || is && is.portaledElement;
		if ($o() && ns && ns !== document.body && (!document.body.contains(ns) || gs(ns))) {
			var u = rs();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(va).filter(Boolean));
			if ((!d || cs(d)) && (r || function() {
				if (!fs(o) || !c || !ns || os) return !1;
				var e = hs(f), t = e.findIndex(function(e) {
					return e.node === ns;
				});
				return t === 0 || t === e.length - 1;
			}() || !es() || !ns && i) && (l && !(vo(f) || d && ms(d, f) || us(d, l)) && (document && !ns && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = zo(f, ns, { focusOptions: s }), is = {})), ns = document && document.activeElement, ns !== document.body && (rs = Uo(ns)), as = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Fo(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), ds(h, m.length, 1, m), ds(h, -1, -1, m));
			}
		}
	}
	return e;
}, vs = function(e) {
	_s() && e && (e.stopPropagation(), e.preventDefault());
}, ys = function() {
	return _a(_s);
}, bs = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || ls(n, t);
}, xs = function() {
	return null;
}, Ss = function(e) {
	var t = e.children;
	return /* @__PURE__ */ j.createElement("div", {
		onBlur: ys,
		onFocus: bs
	}, t);
};
Ss.propTypes = {};
var Cs = function() {
	os = !0;
}, ws = function() {
	os = !1, as = "just", _a(function() {
		as = "meanwhile";
	});
}, Ts = function() {
	document.addEventListener("focusin", vs), document.addEventListener("focusout", ys), window.addEventListener("focus", Cs), window.addEventListener("blur", ws);
}, Es = function() {
	document.removeEventListener("focusin", vs), document.removeEventListener("focusout", ys), window.removeEventListener("focus", Cs), window.removeEventListener("blur", ws);
};
function Ds(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Os = {
	moveFocusInside: zo,
	focusInside: vo,
	focusNextElement: Jo,
	focusPrevElement: Yo,
	focusFirstElement: Zo,
	focusLastElement: Qo,
	captureFocusRestore: Uo
};
function ks(e) {
	var t = e.slice(-1)[0];
	t && !ts && Ts();
	var n = ts, r = n && t && t.id === n.id;
	ts = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (ns = null, (!r || n.observed !== t.observed) && t.onActivation(Os), _s(!0), _a(_s)) : (Es(), ns = null);
}
ua.assignSyncMedium(bs), da.assignMedium(ys), fa.assignMedium(function(e) {
	return e(Os);
}), $i(pa, Oa(Ds, ks)(xs));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var As, js = function() {
	if (As) return As;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function Ms() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = js();
	return t && e.setAttribute("nonce", t), e;
}
function Ns(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ps(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Fs = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ms()) && (Ns(t, n), Ps(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Is = function() {
	var e = Fs();
	return function(t, n) {
		j.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Ls = function() {
	var e = Is();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Rs = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, zs = function(e) {
	return parseInt(e || "", 10) || 0;
}, Bs = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		zs(n),
		zs(r),
		zs(i)
	];
}, Vs = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Rs;
	var t = Bs(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Hs = Ls(), Us = "data-scroll-locked", Ws = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Vi} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Us}] {
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
  
  .${zi} {
    right: ${s}px ${r};
  }
  
  .${Bi} {
    margin-right: ${s}px ${r};
  }
  
  .${zi} .${zi} {
    right: 0 ${r};
  }
  
  .${Bi} .${Bi} {
    margin-right: 0 ${r};
  }
  
  body[${Us}] {
    ${Hi}: ${s}px;
  }
`;
}, Gs = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Ks = function() {
	j.useEffect(function() {
		return document.body.setAttribute(Us, (Gs() + 1).toString()), function() {
			var e = Gs() - 1;
			e <= 0 ? document.body.removeAttribute(Us) : document.body.setAttribute(Us, e.toString());
		};
	}, []);
}, qs = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Ks();
	var a = j.useMemo(function() {
		return Vs(i);
	}, [i]);
	return j.createElement(Hs, { styles: Ws(a, !t, i, n ? "" : "!important") });
}, Js = !1;
if (typeof window < "u") try {
	var Ys = Object.defineProperty({}, "passive", { get: function() {
		return Js = !0, !0;
	} });
	window.addEventListener("test", Ys, Ys), window.removeEventListener("test", Ys, Ys);
} catch {
	Js = !1;
}
var Xs = Js ? { passive: !1 } : !1, Zs = function(e) {
	return e.tagName === "TEXTAREA";
}, Qs = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Zs(e) && n[t] === "visible");
}, $s = function(e) {
	return Qs(e, "overflowY");
}, ec = function(e) {
	return Qs(e, "overflowX");
}, tc = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ic(e, r)) {
			var i = ac(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, nc = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, rc = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ic = function(e, t) {
	return e === "v" ? $s(t) : ec(t);
}, ac = function(e, t) {
	return e === "v" ? nc(t) : rc(t);
}, oc = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, sc = function(e, t, n, r, i) {
	var a = oc(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ac(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ic(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, cc = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, lc = function(e) {
	return [e.deltaX, e.deltaY];
}, uc = function(e) {
	return e && "current" in e ? e.current : e;
}, dc = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, fc = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, pc = 0, mc = [];
function hc(t) {
	var n = j.useRef([]), r = j.useRef([0, 0]), i = j.useRef(), a = j.useState(pc++)[0], o = j.useState(Ls)[0], s = j.useRef(t);
	j.useEffect(function() {
		s.current = t;
	}, [t]), j.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var n = e([t.lockRef.current], (t.shards || []).map(uc), !0).filter(Boolean);
			return n.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), n.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = j.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = cc(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = tc(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = tc(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return sc(h, t, e, h === "h" ? o : c, !0);
	}, []), l = j.useCallback(function(e) {
		var t = e;
		if (!(!mc.length || mc[mc.length - 1] !== o)) {
			var r = "deltaY" in t ? lc(t) : cc(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && dc(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(uc).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = j.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: gc(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = j.useCallback(function(e) {
		r.current = cc(e), i.current = void 0;
	}, []), f = j.useCallback(function(e) {
		u(e.type, lc(e), e.target, c(e, t.lockRef.current));
	}, []), p = j.useCallback(function(e) {
		u(e.type, cc(e), e.target, c(e, t.lockRef.current));
	}, []);
	j.useEffect(function() {
		return mc.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Xs), document.addEventListener("touchmove", l, Xs), document.addEventListener("touchstart", d, Xs), function() {
			mc = mc.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Xs), document.removeEventListener("touchmove", l, Xs), document.removeEventListener("touchstart", d, Xs);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return j.createElement(j.Fragment, null, h ? j.createElement(o, { styles: fc(a) }) : null, m ? j.createElement(qs, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function gc(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
$i(ea, hc);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var _c = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, vc = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), bc = {}, xc = 0, Sc = function(e) {
	return e && (e.host || Sc(e.parentNode));
}, Cc = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Sc(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, wc = function(e, t, n, r) {
	var i = Cc(t, Array.isArray(e) ? e : [e]);
	bc[n] || (bc[n] = /* @__PURE__ */ new WeakMap());
	var a = bc[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (vc.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				vc.set(e, c), a.set(e, l), o.push(e), c === 1 && i && yc.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), xc++, function() {
		o.forEach(function(e) {
			var t = vc.get(e) - 1, i = a.get(e) - 1;
			vc.set(e, t), a.set(e, i), t || (yc.has(e) || e.removeAttribute(r), yc.delete(e)), i || e.removeAttribute(n);
		}), xc--, xc || (vc = /* @__PURE__ */ new WeakMap(), vc = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap(), bc = {});
	};
}, Tc = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || _c(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), wc(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Ec = Ls(), Dc = "\n [" + xa + "] {\n   pointer-events: none !important;\n }\n", Oc = function() {
	return j.createElement(Ec, { styles: Dc });
}, kc = function(e) {
	return "current" in e ? e.current : e;
};
function Ac(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, j.useRef)(null), u = (0, j.useRef)(0);
	return j.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(kc).some(function(t) {
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
	]), (0, j.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, j.useEffect)(function() {
		if (!(s || !c)) return Tc(k([c], (i || []).map(kc)), c.ownerDocument.body, xa);
	}, [c, s]), (0, j.useEffect)(function() {
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
	}, []), j.createElement(Oc, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var jc = $i(ba, Ac), Mc = function(e) {
	return j.createElement(jc, T({}, e));
}, Nc = j.forwardRef(function(e, t) {
	return j.createElement(Ca, T({}, e, {
		ref: t,
		sideCar: Mc
	}));
}), Pc = class extends j.Component {
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
		return this.rootElement ? /* @__PURE__ */ Ii.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalLayer.js
function Fc({ onClick: e }) {
	return /* @__PURE__ */ j.createElement("div", {
		className: "pgn__modal-backdrop",
		onClick: e,
		onKeyDown: e,
		"data-testid": "modal-backdrop",
		role: "presentation"
	});
}
// istanbul ignore next
function Ic({ children: e = null }) {
	return /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-content-container" }, e);
}
function Lc({ children: e, onClose: t, isOpen: n, isBlocking: r = !1, zIndex: i }) {
	if ((0, j.useEffect)(() => (n ? document.body.classList.add("pgn__hidden-scroll-padding-right") : document.body.classList.remove("pgn__hidden-scroll-padding-right"), () => {
		document.body.classList.remove("pgn__hidden-scroll-padding-right");
	}), [n]), !n) return null;
	let a = r ? void 0 : t;
	return /* @__PURE__ */ j.createElement(Ri, {
		onClose: t,
		isOpen: n,
		isBlocking: r
	}, /* @__PURE__ */ j.createElement(Pc, null, /* @__PURE__ */ j.createElement(Nc, {
		allowPinchZoom: !0,
		scrollLock: !0,
		enabled: n,
		onEscapeKey: a,
		onClickOutside: a,
		className: (0, M.default)("pgn__modal-layer", i ? `zindex-${i}` : "")
	}, /* @__PURE__ */ j.createElement(Ic, null, /* @__PURE__ */ j.createElement(Fc, { onClick: a }), e))));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalCloseButton.js
var Rc = /* @__PURE__ */ j.forwardRef(({ as: e, children: t, ...n }, r) => {
	let { onClose: i } = (0, j.useContext)(Li), a = e, o = {
		...n,
		className: (0, M.default)("pgn__modal-close-button", n.className),
		onClick: () => {
			i(), n.onClick && n.onClick();
		},
		ref: r
	};
	return /* @__PURE__ */ j.createElement(a, o, t);
});
Rc.propTypes = {
	as: N.default.elementType,
	children: N.default.node,
	className: N.default.string,
	onClick: N.default.func
}, Rc.defaultProps = {
	as: D,
	onClick: void 0,
	className: void 0,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeader.js
var zc = /* @__PURE__ */ j.forwardRef(({ as: e = "div", children: t, ...n }, r) => /* @__PURE__ */ j.createElement(e, {
	...n,
	ref: r,
	className: (0, M.default)("pgn__modal-header", n.className)
}, t));
zc.propTypes = {
	as: N.default.elementType,
	children: N.default.node.isRequired,
	className: N.default.string
}, zc.defaultProps = {
	as: "div",
	className: ""
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogTitle.js
function Bc({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-title", n.className)
	}, t);
}
Bc.propTypes = {
	as: N.default.elementType,
	children: N.default.node.isRequired,
	className: N.default.string
}, Bc.defaultProps = {
	as: "h2",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogFooter.js
function Vc({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-footer", n.className)
	}, t);
}
Vc.propTypes = {
	as: N.default.elementType,
	children: N.default.node.isRequired,
	className: N.default.string
}, Vc.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useIsVisibleHook.js
var Hc = (e = !0) => {
	let t = (0, j.useRef)(null), [n, r] = (0, j.useState)(e);
	return (0, j.useEffect)(() => {
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
function Uc({ as: e, children: t, ...n }) {
	let [r, i] = Hc(), [a, o] = Hc(), s = (0, M.default)("pgn__modal-body", n.className, {
		"pgn__modal-body-scroll-top": r,
		"pgn__modal-body-scroll-bottom": a
	});
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: s
	}, /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("div", { ref: i }), /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-body-content" }, t), /* @__PURE__ */ j.createElement("div", { ref: o })));
}
Uc.propTypes = {
	as: N.default.elementType,
	children: N.default.node.isRequired,
	className: N.default.string
}, Uc.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroContent.js
function Wc({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-hero-content", n.className)
	}, t);
}
Wc.propTypes = {
	as: N.default.elementType,
	children: N.default.node.isRequired,
	className: N.default.string
}, Wc.defaultProps = {
	as: "div",
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHeroBackground.js
function Gc({ as: e, backgroundSrc: t, children: n, ...r }) {
	return /* @__PURE__ */ j.createElement(e, {
		...r,
		className: (0, M.default)("pgn__modal-hero-bg", r.className),
		style: {
			backgroundImage: t ? `url(${t})` : void 0,
			...r.style
		}
	}, n);
}
Gc.propTypes = {
	as: N.default.elementType,
	backgroundSrc: N.default.string,
	children: N.default.node,
	className: N.default.string,
	style: N.default.shape({})
}, Gc.defaultProps = {
	as: "div",
	backgroundSrc: void 0,
	children: null,
	className: void 0,
	style: {}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialogHero.js
function Kc({ as: e, children: t, ...n }) {
	return /* @__PURE__ */ j.createElement(e, {
		...n,
		className: (0, M.default)("pgn__modal-hero", n.className)
	}, t);
}
Kc.propTypes = {
	as: N.default.elementType,
	children: N.default.node.isRequired,
	className: N.default.string
}, Kc.defaultProps = {
	as: "div",
	className: void 0
}, Kc.Content = Wc, Kc.Background = Gc;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/messages.js
var qc = u({ closeButtonText: {
	id: "pgn.Modal.closeButon",
	defaultMessage: "Close",
	description: "Accessible name for the close button in the modal dialog"
} });
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalDialog.js
function Jc({ children: e, title: t, isOpen: n = !1, onClose: r, size: i = "md", variant: a = "default", hasCloseButton: o = !0, closeLabel: s, isFullscreenScroll: c = !1, className: l, isFullscreenOnMobile: u = !1, isBlocking: d = !1, zIndex: f, isOverflowVisible: p }) {
	let m = ee(), h = s || m.formatMessage(qc.closeButtonText), g = In({ query: "(max-width: 767.98px)" }), _ = u && g;
	return /* @__PURE__ */ j.createElement(Lc, {
		isOpen: n,
		onClose: r,
		isBlocking: d,
		zIndex: f
	}, /* @__PURE__ */ j.createElement("div", {
		role: "dialog",
		"aria-label": t,
		className: (0, M.default)("pgn__modal", {
			[`pgn__modal-${_ ? "fullscreen" : i}`]: i,
			[`pgn__modal-${a}`]: a,
			"pgn__modal-scroll-fullscreen": c,
			"pgn__modal-visible-overflow": p
		}, l)
	}, o && /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-close-container" }, /* @__PURE__ */ j.createElement(Rc, {
		as: ue,
		iconAs: fe,
		invertColors: a === "dark",
		src: Vn,
		alt: h
	})), e));
}
Jc.Header = zc, Jc.Title = Bc, Jc.Footer = Vc, Jc.CloseButton = Rc, Jc.Body = Uc, Jc.Hero = Kc;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function Yc(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, j.useState)(e), s = (0, j.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, j.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, j.useCallback)(() => {
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
var Xc = /* @__PURE__ */ j.forwardRef(({ show: e, autoClose: t, onToggle: n, variant: r, className: i, ...a }, o) => {
	let [s, c] = j.useState(e), l = (e) => t === !1 ? e === "click" : t === "inside" ? e !== "rootClose" : t === "outside" ? e !== "select" : !0, u = (e, t, r) => {
		if (e) {
			c(!0), n?.(e, t, r);
			return;
		}
		let { source: i } = { ...r };
		t.currentTarget === document && (i !== "keydown" || t.key === "Escape") && (i = "rootClose"), l(i) && (c(!1), n?.(e, t, r));
	};
	return /* @__PURE__ */ j.createElement(yt, {
		className: (0, M.default)("pgn__dropdown", `pgn__dropdown-${r}`, i),
		"data-testid": "dropdown",
		onToggle: u,
		ref: o,
		show: s,
		...a
	});
});
Xc.propTypes = {
	autoClose: N.default.oneOfType([N.default.string, N.default.bool]),
	className: N.default.string,
	onToggle: N.default.func,
	show: N.default.bool,
	variant: N.default.oneOf(["light", "dark"])
}, Xc.defaultProps = {
	autoClose: !0,
	className: "",
	onToggle: void 0,
	show: !1,
	variant: "light"
};
var Zc = /* @__PURE__ */ j.forwardRef(({ as: e, bsPrefix: t, ...n }, r) => {
	let i = e === ue ? "pgn__dropdown-toggle-iconbutton" : t;
	return /* @__PURE__ */ j.createElement(pt, {
		...n,
		as: e,
		bsPrefix: i,
		ref: r
	});
});
Zc.propTypes = {
	as: N.default.elementType,
	bsPrefix: N.default.string,
	id: N.default.oneOfType([N.default.string, N.default.number]).isRequired
}, Zc.defaultProps = {
	as: D,
	bsPrefix: "dropdown-toggle"
}, Xc.Item = /* @__PURE__ */ j.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ j.createElement(at, {
	className: (0, M.default)(e, "pgn__dropdown-item"),
	ref: n,
	...t
})), Xc.Item.propTypes = { className: N.default.string }, Xc.Item.defaultProps = { className: void 0 }, Xc.Toggle = Zc, Xc.Menu = dt, Xc.Header = yt.Header, Xc.Divider = yt.Divider;
//#endregion
//#region node_modules/.pnpm/react-popper@2.3.0_@popperjs+core@2.11.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-popper/lib/esm/utils.js
var Qc = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, $c = typeof window < "u" && window.document && window.document.createElement ? j.useLayoutEffect : j.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function el(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e];
		!i(o) || !a(o) || (Object.assign(o.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? o.removeAttribute(e) : o.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function tl(e) {
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
var nl = /* @__PURE__ */ E({ defaultModifiers: [
	r,
	Ce,
	xe,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: el,
		effect: tl,
		requires: ["computeStyles"]
	},
	O,
	y,
	be,
	b,
	Se
] }), rl = /* @__PURE__ */ A((/* @__PURE__ */ ge(((e, t) => {
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
})))()), il = [], al = function(e, t, n) {
	n === void 0 && (n = {});
	var r = j.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || il
	}, a = j.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = j.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				Ii.flushSync(function() {
					s({
						styles: Qc(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: Qc(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = j.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, rl.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = j.useRef();
	return $c(function() {
		u.current && u.current.setOptions(l);
	}, [l]), $c(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || nl)(e, t, l);
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
function ol({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, j.useState)(null), { styles: s, attributes: c } = al(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /* @__PURE__ */ j.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
ol.defaultProps = { target: void 0 }, ol.propTypes = {
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
}, ol.defaultProps = {
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
var sl = {
	right: [-2, 10],
	left: [-2, 10]
};
function cl({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? Pc : j.Fragment, u = sl[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ j.createElement(Ri, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ j.createElement(l, null, /* @__PURE__ */ j.createElement(ol, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ j.createElement(Nc, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /* @__PURE__ */ j.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /* @__PURE__ */ j.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
cl.propTypes = {
	children: N.default.node.isRequired,
	onClose: N.default.func.isRequired,
	isOpen: N.default.bool.isRequired,
	isBlocking: N.default.bool,
	withPortal: N.default.bool,
	positionRef: N.default.oneOfType([N.default.func, N.default.shape({ current: N.default.shape({}) })]),
	placement: ol.propTypes.placement,
	hasArrow: N.default.bool
}, cl.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/StandardModal.js
var ll = "Close";
function ul({ children: e, footerNode: t, beforeBodyNode: n, afterBodyNode: r, ...i }) {
	return /* @__PURE__ */ j.createElement(Jc, { ...i }, /* @__PURE__ */ j.createElement(Jc.Header, null, /* @__PURE__ */ j.createElement(Jc.Title, null, i.title)), n, /* @__PURE__ */ j.createElement(Jc.Body, null, e), r, t && /* @__PURE__ */ j.createElement(Jc.Footer, null, t));
}
ul.propTypes = {
	children: N.default.node.isRequired,
	title: N.default.string.isRequired,
	onClose: N.default.func.isRequired,
	isOpen: N.default.bool,
	hasCloseButton: N.default.bool,
	size: N.default.oneOf([
		"sm",
		"md",
		"lg",
		"xl",
		"fullscreen"
	]),
	variant: N.default.oneOf([
		"default",
		"warning",
		"danger",
		"success",
		"dark"
	]),
	closeLabel: N.default.string,
	className: N.default.string,
	isFullscreenScroll: N.default.bool,
	footerNode: N.default.node,
	beforeBodyNode: N.default.node,
	afterBodyNode: N.default.node
}, ul.defaultProps = {
	isOpen: !1,
	hasCloseButton: !0,
	size: "md",
	variant: "default",
	closeLabel: ll,
	className: void 0,
	isFullscreenScroll: !1,
	footerNode: null,
	beforeBodyNode: null,
	afterBodyNode: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var R = me(), dl = ["top", "bottom"], fl = /* @__PURE__ */ j.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, j.useState)(!1), c = j.useRef(), l = a || c;
	return (0, j.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ j.createElement("div", {
		className: (0, M.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
fl.propTypes = {
	children: N.default.node.isRequired,
	position: N.default.oneOf(dl),
	offset: N.default.oneOfType([N.default.number, N.default.string]),
	className: N.default.string
}, fl.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function pl() {
	return (pl = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function ml(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function hl(e) {
	var t = (0, j.useRef)(e), n = (0, j.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var gl = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, _l = function(e) {
	return "touches" in e;
}, vl = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, yl = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = _l(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: gl((i.pageX - (r.left + vl(e).pageXOffset)) / r.width),
		top: gl((i.pageY - (r.top + vl(e).pageYOffset)) / r.height)
	};
}, bl = function(e) {
	!_l(e) && e.preventDefault();
}, xl = j.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = ml(e, ["onMove", "onKey"]), i = (0, j.useRef)(null), a = hl(t), o = hl(n), s = (0, j.useRef)(null), c = (0, j.useRef)(!1), l = (0, j.useMemo)(function() {
		var e = function(e) {
			bl(e), (_l(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(yl(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = vl(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (bl(t), !function(e, t) {
					return t && !_l(e);
				}(t, c.current) && r)) {
					if (_l(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(yl(r, t, s.current)), n(!0);
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
	return (0, j.useEffect)(function() {
		return f;
	}, [f]), j.createElement("div", pl({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), Sl = function(e) {
	return e.filter(Boolean).join(" ");
}, Cl = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = Sl(["react-colorful__pointer", e.className]);
	return j.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, j.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, wl = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var Tl = function(e) {
	return Nl(El(e));
}, El = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? wl(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? wl(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, Dl = function(e) {
	return Ml(Al(e));
}, Ol = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: wl(e.h),
		s: wl(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: wl(i / 2),
		a: wl(r, 2)
	};
}, kl = function(e) {
	var t = Ol(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Al = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: wl(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: wl(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: wl(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: wl(i, 2)
	};
}, jl = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, Ml = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? jl(wl(255 * i)) : "";
	return "#" + jl(t) + jl(n) + jl(r) + a;
}, Nl = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: wl(60 * (s < 0 ? s + 6 : s)),
		s: wl(a ? o / a * 100 : 0),
		v: wl(a / 255 * 100),
		a: i
	};
}, Pl = j.memo(function(e) {
	var t = e.hue, n = e.onChange, r = Sl(["react-colorful__hue", e.className]);
	return j.createElement("div", { className: r }, j.createElement(xl, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: gl(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": wl(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, j.createElement(Cl, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: kl({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), Fl = j.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: kl({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return j.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, j.createElement(xl, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: gl(t.s + 100 * e.left, 0, 100),
				v: gl(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + wl(t.s) + "%, Brightness " + wl(t.v) + "%"
	}, j.createElement(Cl, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: kl(t)
	})));
}), Il = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, Ll = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || Il(El(e), El(t));
};
function Rl(e, t, n) {
	var r = hl(n), i = (0, j.useState)(function() {
		return e.toHsva(t);
	}), a = i[0], o = i[1], s = (0, j.useRef)({
		color: t,
		hsva: a
	});
	return (0, j.useEffect)(function() {
		if (!e.equal(t, s.current.color)) {
			var n = e.toHsva(t);
			s.current = {
				hsva: n,
				color: t
			}, o(n);
		}
	}, [t, e]), (0, j.useEffect)(function() {
		var t;
		Il(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
			hsva: a,
			color: t
		}, r(t));
	}, [
		a,
		e,
		r
	]), [a, (0, j.useCallback)(function(e) {
		o(function(t) {
			return Object.assign({}, t, e);
		});
	}, [])];
}
var zl, Bl = typeof window < "u" ? j.useLayoutEffect : j.useEffect, Vl = function() {
	return zl || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, Hl = /* @__PURE__ */ new Map(), Ul = function(e) {
	Bl(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !Hl.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", Hl.set(t, n);
			var r = Vl();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, Wl = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = ml(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, j.useRef)(null);
	Ul(s);
	var c = Rl(n, i, a), l = c[0], u = c[1], d = Sl(["react-colorful", t]);
	return j.createElement("div", pl({}, o, {
		ref: s,
		className: d
	}), j.createElement(Fl, {
		hsva: l,
		onChange: u
	}), j.createElement(Pl, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, Gl = {
	defaultColor: "000",
	toHsva: Tl,
	fromHsva: function(e) {
		return Dl({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: Ll
}, Kl = function(e) {
	return j.createElement(Wl, pl({}, e, { colorModel: Gl }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function ql({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = Yc(!1), [s, c] = j.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = j.useState(() => e === "" || l(u(e))), [p, m] = j.useState(() => e === "" ? "" : u(e)), [h, g] = j.useState(() => {
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
	return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("span", { className: "d-flex" }, /* @__PURE__ */ j.createElement(ae, {
		placement: "top",
		overlay: /* @__PURE__ */ j.createElement(he, { id: "color-picker-tooltip" }, "Color picker")
	}, /* @__PURE__ */ j.createElement(D, {
		ref: c,
		className: (0, M.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /* @__PURE__ */ j.createElement(cl, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ j.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ j.createElement(Kl, {
		color: h,
		onChange: _
	}), /* @__PURE__ */ j.createElement(L.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /* @__PURE__ */ j.createElement("div", null, /* @__PURE__ */ j.createElement(L.Label, { className: "pgn__hex-label" }, "Hex"), /* @__PURE__ */ j.createElement(L.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /* @__PURE__ */ j.createElement(L.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
ql.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, ql.propTypes = {
	color: N.default.string,
	setColor: N.default.func.isRequired,
	className: N.default.string,
	size: N.default.oneOf(["sm", "md"])
};
//#endregion
//#region src/lib/context.ts
var Jl = (0, j.createContext)(null), Yl = () => (0, j.useContext)(Jl), Xl = function(e) {
	return Zl(e) && !Ql(e);
};
function Zl(e) {
	return !!e && typeof e == "object";
}
function Ql(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || eu(e);
}
var $l = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function eu(e) {
	return e.$$typeof === $l;
}
function tu(e) {
	return Array.isArray(e) ? [] : {};
}
function nu(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? au(tu(e), e, t) : e;
}
function ru(e, t, n) {
	return e.concat(t).map(function(e) {
		return nu(e, n);
	});
}
function iu(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = nu(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = nu(t[i], n) : r[i] = au(e[i], t[i], n);
	}), r;
}
function au(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || ru, n.isMergeableObject = n.isMergeableObject || Xl;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : iu(e, t, n) : nu(t, n);
}
au.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return au(e, n, t);
	}, {});
};
var ou = au, su = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, cu = typeof self == "object" && self && self.Object === Object && self, lu = su || cu || Function("return this")(), uu = lu.Symbol, du = Object.prototype, fu = du.hasOwnProperty, pu = du.toString, mu = uu ? uu.toStringTag : void 0;
function hu(e) {
	var t = fu.call(e, mu), n = e[mu];
	try {
		e[mu] = void 0;
		var r = !0;
	} catch {}
	var i = pu.call(e);
	return r && (t ? e[mu] = n : delete e[mu]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var gu = Object.prototype.toString;
function _u(e) {
	return gu.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var vu = "[object Null]", yu = "[object Undefined]", bu = uu ? uu.toStringTag : void 0;
function xu(e) {
	return e == null ? e === void 0 ? yu : vu : bu && bu in Object(e) ? hu(e) : _u(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function Su(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var Cu = Su(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function wu(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var Tu = "[object Object]", Eu = Function.prototype, Du = Object.prototype, Ou = Eu.toString, ku = Du.hasOwnProperty, Au = Ou.call(Object);
function ju(e) {
	if (!wu(e) || xu(e) != Tu) return !1;
	var t = Cu(e);
	if (t === null) return !0;
	var n = ku.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Ou.call(n) == Au;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function Mu() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function Nu(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function Pu(e, t) {
	for (var n = e.length; n--;) if (Nu(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var Fu = Array.prototype.splice;
function Iu(e) {
	var t = this.__data__, n = Pu(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Fu.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function Lu(e) {
	var t = this.__data__, n = Pu(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function Ru(e) {
	return Pu(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function zu(e, t) {
	var n = this.__data__, r = Pu(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function Bu(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Bu.prototype.clear = Mu, Bu.prototype.delete = Iu, Bu.prototype.get = Lu, Bu.prototype.has = Ru, Bu.prototype.set = zu;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function Vu() {
	this.__data__ = new Bu(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Hu(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Uu(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Wu(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Gu(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Ku = "[object AsyncFunction]", qu = "[object Function]", Ju = "[object GeneratorFunction]", Yu = "[object Proxy]";
function Xu(e) {
	if (!Gu(e)) return !1;
	var t = xu(e);
	return t == qu || t == Ju || t == Ku || t == Yu;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var Zu = lu["__core-js_shared__"], Qu = function() {
	var e = /[^.]+$/.exec(Zu && Zu.keys && Zu.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function $u(e) {
	return !!Qu && Qu in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var ed = Function.prototype.toString;
function td(e) {
	if (e != null) {
		try {
			return ed.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var nd = /[\\^$.*+?()[\]{}|]/g, rd = /^\[object .+?Constructor\]$/, id = Function.prototype, ad = Object.prototype, od = id.toString, sd = ad.hasOwnProperty, cd = RegExp("^" + od.call(sd).replace(nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function ld(e) {
	return !Gu(e) || $u(e) ? !1 : (Xu(e) ? cd : rd).test(td(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function ud(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function dd(e, t) {
	var n = ud(e, t);
	return ld(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var fd = dd(lu, "Map"), pd = dd(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function md() {
	this.__data__ = pd ? pd(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function hd(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var gd = "__lodash_hash_undefined__", _d = Object.prototype.hasOwnProperty;
function vd(e) {
	var t = this.__data__;
	if (pd) {
		var n = t[e];
		return n === gd ? void 0 : n;
	}
	return _d.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var yd = Object.prototype.hasOwnProperty;
function bd(e) {
	var t = this.__data__;
	return pd ? t[e] !== void 0 : yd.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var xd = "__lodash_hash_undefined__";
function Sd(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = pd && t === void 0 ? xd : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function Cd(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Cd.prototype.clear = md, Cd.prototype.delete = hd, Cd.prototype.get = vd, Cd.prototype.has = bd, Cd.prototype.set = Sd;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function wd() {
	this.size = 0, this.__data__ = {
		hash: new Cd(),
		map: new (fd || Bu)(),
		string: new Cd()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function Td(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function Ed(e, t) {
	var n = e.__data__;
	return Td(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function Dd(e) {
	var t = Ed(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function Od(e) {
	return Ed(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function kd(e) {
	return Ed(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function Ad(e, t) {
	var n = Ed(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function jd(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
jd.prototype.clear = wd, jd.prototype.delete = Dd, jd.prototype.get = Od, jd.prototype.has = kd, jd.prototype.set = Ad;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var Md = 200;
function Nd(e, t) {
	var n = this.__data__;
	if (n instanceof Bu) {
		var r = n.__data__;
		if (!fd || r.length < Md - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new jd(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function Pd(e) {
	this.size = (this.__data__ = new Bu(e)).size;
}
Pd.prototype.clear = Vu, Pd.prototype.delete = Hu, Pd.prototype.get = Uu, Pd.prototype.has = Wu, Pd.prototype.set = Nd;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function Fd(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var Id = function() {
	try {
		var e = dd(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function Ld(e, t, n) {
	t == "__proto__" && Id ? Id(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var Rd = Object.prototype.hasOwnProperty;
function zd(e, t, n) {
	var r = e[t];
	(!(Rd.call(e, t) && Nu(r, n)) || n === void 0 && !(t in e)) && Ld(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function Bd(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Ld(n, s, c) : zd(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function Vd(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Hd = "[object Arguments]";
function Ud(e) {
	return wu(e) && xu(e) == Hd;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var Wd = Object.prototype, Gd = Wd.hasOwnProperty, Kd = Wd.propertyIsEnumerable, qd = Ud(function() {
	return arguments;
}()) ? Ud : function(e) {
	return wu(e) && Gd.call(e, "callee") && !Kd.call(e, "callee");
}, Jd = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Yd() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Xd = typeof exports == "object" && exports && !exports.nodeType && exports, Zd = Xd && typeof module == "object" && module && !module.nodeType && module, Qd = Zd && Zd.exports === Xd ? lu.Buffer : void 0, $d = (Qd ? Qd.isBuffer : void 0) || Yd, ef = 9007199254740991, tf = /^(?:0|[1-9]\d*)$/;
function nf(e, t) {
	var n = typeof e;
	return t ??= ef, !!t && (n == "number" || n != "symbol" && tf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var rf = 9007199254740991;
function af(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rf;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var of = "[object Arguments]", sf = "[object Array]", cf = "[object Boolean]", lf = "[object Date]", uf = "[object Error]", df = "[object Function]", ff = "[object Map]", pf = "[object Number]", mf = "[object Object]", hf = "[object RegExp]", gf = "[object Set]", _f = "[object String]", vf = "[object WeakMap]", yf = "[object ArrayBuffer]", bf = "[object DataView]", xf = "[object Float32Array]", Sf = "[object Float64Array]", Cf = "[object Int8Array]", wf = "[object Int16Array]", Tf = "[object Int32Array]", Ef = "[object Uint8Array]", Df = "[object Uint8ClampedArray]", Of = "[object Uint16Array]", kf = "[object Uint32Array]", z = {};
z[xf] = z[Sf] = z[Cf] = z[wf] = z[Tf] = z[Ef] = z[Df] = z[Of] = z[kf] = !0, z[of] = z[sf] = z[yf] = z[cf] = z[bf] = z[lf] = z[uf] = z[df] = z[ff] = z[pf] = z[mf] = z[hf] = z[gf] = z[_f] = z[vf] = !1;
function Af(e) {
	return wu(e) && af(e.length) && !!z[xu(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function jf(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var Mf = typeof exports == "object" && exports && !exports.nodeType && exports, Nf = Mf && typeof module == "object" && module && !module.nodeType && module, Pf = Nf && Nf.exports === Mf && su.process, Ff = function() {
	try {
		return Nf && Nf.require && Nf.require("util").types || Pf && Pf.binding && Pf.binding("util");
	} catch {}
}(), If = Ff && Ff.isTypedArray, Lf = If ? jf(If) : Af, Rf = Object.prototype.hasOwnProperty;
function zf(e, t) {
	var n = Jd(e), r = !n && qd(e), i = !n && !r && $d(e), a = !n && !r && !i && Lf(e), o = n || r || i || a, s = o ? Vd(e.length, String) : [], c = s.length;
	for (var l in e) (t || Rf.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || nf(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var Bf = Object.prototype;
function Vf(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Bf);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var Hf = Su(Object.keys, Object), Uf = Object.prototype.hasOwnProperty;
function Wf(e) {
	if (!Vf(e)) return Hf(e);
	var t = [];
	for (var n in Object(e)) Uf.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Gf(e) {
	return e != null && af(e.length) && !Xu(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Kf(e) {
	return Gf(e) ? zf(e) : Wf(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function qf(e, t) {
	return e && Bd(t, Kf(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Jf(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Yf = Object.prototype.hasOwnProperty;
function Xf(e) {
	if (!Gu(e)) return Jf(e);
	var t = Vf(e), n = [];
	for (var r in e) r == "constructor" && (t || !Yf.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Zf(e) {
	return Gf(e) ? zf(e, !0) : Xf(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function Qf(e, t) {
	return e && Bd(t, Zf(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var $f = typeof exports == "object" && exports && !exports.nodeType && exports, ep = $f && typeof module == "object" && module && !module.nodeType && module, tp = ep && ep.exports === $f ? lu.Buffer : void 0, np = tp ? tp.allocUnsafe : void 0;
function rp(e, t) {
	if (t) return e.slice();
	var n = e.length, r = np ? np(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function ip(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function ap(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function op() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var sp = Object.prototype.propertyIsEnumerable, cp = Object.getOwnPropertySymbols, lp = cp ? function(e) {
	return e == null ? [] : (e = Object(e), ap(cp(e), function(t) {
		return sp.call(e, t);
	}));
} : op;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function up(e, t) {
	return Bd(e, lp(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function dp(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var fp = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) dp(t, lp(e)), e = Cu(e);
	return t;
} : op;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function pp(e, t) {
	return Bd(e, fp(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function mp(e, t, n) {
	var r = t(e);
	return Jd(e) ? r : dp(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function hp(e) {
	return mp(e, Kf, lp);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function gp(e) {
	return mp(e, Zf, fp);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var _p = dd(lu, "DataView"), vp = dd(lu, "Promise"), yp = dd(lu, "Set"), bp = dd(lu, "WeakMap"), xp = "[object Map]", Sp = "[object Object]", Cp = "[object Promise]", wp = "[object Set]", Tp = "[object WeakMap]", Ep = "[object DataView]", Dp = td(_p), Op = td(fd), kp = td(vp), Ap = td(yp), jp = td(bp), Mp = xu;
(_p && Mp(new _p(/* @__PURE__ */ new ArrayBuffer(1))) != Ep || fd && Mp(new fd()) != xp || vp && Mp(vp.resolve()) != Cp || yp && Mp(new yp()) != wp || bp && Mp(new bp()) != Tp) && (Mp = function(e) {
	var t = xu(e), n = t == Sp ? e.constructor : void 0, r = n ? td(n) : "";
	if (r) switch (r) {
		case Dp: return Ep;
		case Op: return xp;
		case kp: return Cp;
		case Ap: return wp;
		case jp: return Tp;
	}
	return t;
});
var Np = Mp, Pp = Object.prototype.hasOwnProperty;
function Fp(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Pp.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var Ip = lu.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function Lp(e) {
	var t = new e.constructor(e.byteLength);
	return new Ip(t).set(new Ip(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function Rp(e, t) {
	var n = t ? Lp(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var zp = /\w*$/;
function Bp(e) {
	var t = new e.constructor(e.source, zp.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var Vp = uu ? uu.prototype : void 0, Hp = Vp ? Vp.valueOf : void 0;
function Up(e) {
	return Hp ? Object(Hp.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Wp(e, t) {
	var n = t ? Lp(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var Gp = "[object Boolean]", Kp = "[object Date]", qp = "[object Map]", Jp = "[object Number]", Yp = "[object RegExp]", Xp = "[object Set]", Zp = "[object String]", Qp = "[object Symbol]", $p = "[object ArrayBuffer]", em = "[object DataView]", tm = "[object Float32Array]", nm = "[object Float64Array]", rm = "[object Int8Array]", im = "[object Int16Array]", am = "[object Int32Array]", om = "[object Uint8Array]", sm = "[object Uint8ClampedArray]", cm = "[object Uint16Array]", lm = "[object Uint32Array]";
function um(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case $p: return Lp(e);
		case Gp:
		case Kp: return new r(+e);
		case em: return Rp(e, n);
		case tm:
		case nm:
		case rm:
		case im:
		case am:
		case om:
		case sm:
		case cm:
		case lm: return Wp(e, n);
		case qp: return new r();
		case Jp:
		case Zp: return new r(e);
		case Yp: return Bp(e);
		case Xp: return new r();
		case Qp: return Up(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var dm = Object.create, fm = function() {
	function e() {}
	return function(t) {
		if (!Gu(t)) return {};
		if (dm) return dm(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function pm(e) {
	return typeof e.constructor == "function" && !Vf(e) ? fm(Cu(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var mm = "[object Map]";
function hm(e) {
	return wu(e) && Np(e) == mm;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var gm = Ff && Ff.isMap, _m = gm ? jf(gm) : hm, vm = "[object Set]";
function ym(e) {
	return wu(e) && Np(e) == vm;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var bm = Ff && Ff.isSet, xm = bm ? jf(bm) : ym, Sm = 1, Cm = 2, wm = 4, Tm = "[object Arguments]", Em = "[object Array]", Dm = "[object Boolean]", Om = "[object Date]", km = "[object Error]", Am = "[object Function]", jm = "[object GeneratorFunction]", Mm = "[object Map]", Nm = "[object Number]", Pm = "[object Object]", Fm = "[object RegExp]", Im = "[object Set]", Lm = "[object String]", Rm = "[object Symbol]", zm = "[object WeakMap]", Bm = "[object ArrayBuffer]", Vm = "[object DataView]", Hm = "[object Float32Array]", Um = "[object Float64Array]", Wm = "[object Int8Array]", Gm = "[object Int16Array]", Km = "[object Int32Array]", qm = "[object Uint8Array]", Jm = "[object Uint8ClampedArray]", Ym = "[object Uint16Array]", Xm = "[object Uint32Array]", B = {};
B[Tm] = B[Em] = B[Bm] = B[Vm] = B[Dm] = B[Om] = B[Hm] = B[Um] = B[Wm] = B[Gm] = B[Km] = B[Mm] = B[Nm] = B[Pm] = B[Fm] = B[Im] = B[Lm] = B[Rm] = B[qm] = B[Jm] = B[Ym] = B[Xm] = !0, B[km] = B[Am] = B[zm] = !1;
function Zm(e, t, n, r, i, a) {
	var o, s = t & Sm, c = t & Cm, l = t & wm;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Gu(e)) return e;
	var u = Jd(e);
	if (u) {
		if (o = Fp(e), !s) return ip(e, o);
	} else {
		var d = Np(e), f = d == Am || d == jm;
		if ($d(e)) return rp(e, s);
		if (d == Pm || d == Tm || f && !i) {
			if (o = c || f ? {} : pm(e), !s) return c ? pp(e, Qf(o, e)) : up(e, qf(o, e));
		} else {
			if (!B[d]) return i ? e : {};
			o = um(e, d, s);
		}
	}
	a ||= new Pd();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), xm(e) ? e.forEach(function(r) {
		o.add(Zm(r, t, n, r, e, a));
	}) : _m(e) && e.forEach(function(r, i) {
		o.set(i, Zm(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? gp : hp : c ? Zf : Kf)(e);
	return Fd(m || e, function(r, i) {
		m && (i = r, r = e[i]), zd(o, i, Zm(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Qm = 1, $m = 4;
function eh(e) {
	return Zm(e, Qm | $m);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var th = /* @__PURE__ */ A((/* @__PURE__ */ ge(((e, t) => {
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
})))()), nh = !0;
function rh(e, t) {
	if (!nh) {
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
var ih = 4;
function ah(e) {
	return Zm(e, ih);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function oh(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var sh = "[object Symbol]";
function ch(e) {
	return typeof e == "symbol" || wu(e) && xu(e) == sh;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var lh = "Expected a function";
function uh(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(lh);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (uh.Cache || jd)(), n;
}
uh.Cache = jd;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var dh = 500;
function fh(e) {
	var t = uh(e, function(e) {
		return n.size === dh && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var ph = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, mh = /\\(\\)?/g, hh = fh(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(ph, function(e, n, r, i) {
		t.push(r ? i.replace(mh, "$1") : n || e);
	}), t;
}), gh = Infinity;
function _h(e) {
	if (typeof e == "string" || ch(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -gh ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var vh = Infinity, yh = uu ? uu.prototype : void 0, bh = yh ? yh.toString : void 0;
function xh(e) {
	if (typeof e == "string") return e;
	if (Jd(e)) return oh(e, xh) + "";
	if (ch(e)) return bh ? bh.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -vh ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function Sh(e) {
	return e == null ? "" : xh(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function Ch(e) {
	return Jd(e) ? oh(e, _h) : ch(e) ? [e] : ip(hh(Sh(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function V() {
	return V = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, V.apply(this, arguments);
}
function wh(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Th(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Eh(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Dh = /* @__PURE__ */ (0, j.createContext)(void 0);
Dh.displayName = "FormikContext";
var Oh = Dh.Provider, kh = Dh.Consumer;
function Ah() {
	var e = (0, j.useContext)(Dh);
	return !e && rh(!1), e;
}
var jh = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Mh = function(e) {
	return typeof e == "function";
}, Nh = function(e) {
	return typeof e == "object" && !!e;
}, Ph = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Fh = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Ih = function(e) {
	return j.Children.count(e) === 0;
}, Lh = function(e) {
	return Nh(e) && Mh(e.then);
};
function Rh(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Ch(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function zh(e, t, n) {
	for (var r = ah(e), i = r, a = 0, o = Ch(t); a < o.length - 1; a++) {
		var s = o[a], c = Rh(e, o.slice(0, a + 1));
		if (c && (Nh(c) || Array.isArray(c))) i = i[s] = ah(c);
		else {
			var l = o[a + 1];
			i = i[s] = Ph(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Bh(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		Nh(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Bh(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Vh(e, t) {
	switch (t.type) {
		case "SET_VALUES": return V({}, e, { values: t.payload });
		case "SET_TOUCHED": return V({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, th.default)(e.errors, t.payload) ? e : V({}, e, { errors: t.payload });
		case "SET_STATUS": return V({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return V({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return V({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return V({}, e, { values: zh(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return V({}, e, { touched: zh(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return V({}, e, { errors: zh(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return V({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return V({}, e, {
			touched: Bh(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return V({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return V({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Hh = {}, Uh = {};
function Wh(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = Th(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = V({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, j.useRef)(f.initialValues), m = (0, j.useRef)(f.initialErrors || Hh), h = (0, j.useRef)(f.initialTouched || Uh), g = (0, j.useRef)(f.initialStatus), _ = (0, j.useRef)(!1), v = (0, j.useRef)({});
	(0, j.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, j.useState)(0)[1], b = (0, j.useRef)({
		values: eh(f.initialValues),
		errors: eh(f.initialErrors) || Hh,
		touched: eh(f.initialTouched) || Uh,
		status: eh(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, j.useCallback)(function(e) {
		var t = b.current;
		b.current = Vh(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, j.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Hh) : Lh(i) ? i.then(function(e) {
				n(e || Hh);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, j.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Mh(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : qh(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Hh);
			}, function(n) {
				n.name === "ValidationError" ? e(Kh(n)) : t(n);
			});
		});
	}, [f.validationSchema]), ee = (0, j.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), T = (0, j.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Mh(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return ee(t, Rh(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = zh(e, t[r], n)), e;
			}, {});
		});
	}, [ee]), E = (0, j.useCallback)(function(e) {
		return Promise.all([
			T(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return ou.all([
				t,
				n,
				r
			], { arrayMerge: Yh });
		});
	}, [
		f.validate,
		f.validationSchema,
		T,
		C,
		w
	]), D = $h(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), E(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, j.useEffect)(function() {
		o && _.current === !0 && (0, th.default)(p.current, f.initialValues) && D(p.current);
	}, [o, D]);
	var O = (0, j.useCallback)(function(e) {
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
			var o = f.onReset(x.values, _e);
			Lh(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, j.useEffect)(function() {
		_.current === !0 && !(0, th.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, O(), o && D(p.current));
	}, [
		l,
		f.initialValues,
		O,
		o,
		D
	]), (0, j.useEffect)(function() {
		l && _.current === !0 && !(0, th.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Hh, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Hh
		}));
	}, [l, f.initialErrors]), (0, j.useEffect)(function() {
		l && _.current === !0 && !(0, th.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Uh, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Uh
		}));
	}, [l, f.initialTouched]), (0, j.useEffect)(function() {
		l && _.current === !0 && !(0, th.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var te = $h(function(e) {
		if (v.current[e] && Mh(v.current[e].validate)) {
			var t = Rh(x.values, e), n = v.current[e].validate(t);
			return Lh(n) ? (S({
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
					value: Rh(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), k = (0, j.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), ne = (0, j.useCallback)(function(e) {
		delete v.current[e];
	}, []), re = $h(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? D(x.values) : Promise.resolve();
	}), ie = (0, j.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), ae = $h(function(e, t) {
		var r = Mh(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? D(r) : Promise.resolve();
	}), A = (0, j.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), oe = $h(function(e, t, r) {
		var i = Mh(t) ? t(Rh(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? D(zh(x.values, e, i)) : Promise.resolve();
	}), se = (0, j.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!Fh(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Zh(Rh(x.values, n), u, l) : d && f ? Xh(d) : l;
		}
		n && oe(n, r);
	}, [oe, x.values]), ce = $h(function(e) {
		if (Fh(e)) return function(t) {
			return se(t, e);
		};
		se(e);
	}), le = $h(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? D(x.values) : Promise.resolve();
	}), ue = (0, j.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, le(t || r || i, !0);
	}, [le]), de = $h(function(e) {
		if (Fh(e)) return function(t) {
			return ue(t, e);
		};
		ue(e);
	}), fe = (0, j.useCallback)(function(e) {
		Mh(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), pe = (0, j.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), me = (0, j.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), he = $h(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), D().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = ve(), n === void 0) return;
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
	}), ge = $h(function(e) {
		e && e.preventDefault && Mh(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Mh(e.stopPropagation) && e.stopPropagation(), he().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), _e = {
		resetForm: O,
		validateForm: D,
		validateField: te,
		setErrors: ie,
		setFieldError: A,
		setFieldTouched: le,
		setFieldValue: oe,
		setStatus: pe,
		setSubmitting: me,
		setTouched: re,
		setValues: ae,
		setFormikState: fe,
		submitForm: he
	}, ve = $h(function() {
		return u(x.values, _e);
	}), ye = $h(function(e) {
		e && e.preventDefault && Mh(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Mh(e.stopPropagation) && e.stopPropagation(), O();
	}), be = (0, j.useCallback)(function(e) {
		return {
			value: Rh(x.values, e),
			error: Rh(x.errors, e),
			touched: !!Rh(x.touched, e),
			initialValue: Rh(p.current, e),
			initialTouched: !!Rh(h.current, e),
			initialError: Rh(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), xe = (0, j.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return oe(e, t, n);
			},
			setTouched: function(t, n) {
				return le(e, t, n);
			},
			setError: function(t) {
				return A(e, t);
			}
		};
	}, [
		oe,
		le,
		A
	]), Se = (0, j.useCallback)(function(e) {
		var t = Nh(e), n = t ? e.name : e, r = Rh(x.values, n), i = {
			name: n,
			value: r,
			onChange: ce,
			onBlur: de
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		de,
		ce,
		x.values
	]), Ce = (0, j.useMemo)(function() {
		return !(0, th.default)(p.current, x.values);
	}, [p.current, x.values]), we = (0, j.useMemo)(function() {
		return s === void 0 || Ce ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Mh(s) ? s(f) : s;
	}, [
		s,
		Ce,
		x.errors,
		f
	]);
	return V({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: de,
		handleChange: ce,
		handleReset: ye,
		handleSubmit: ge,
		resetForm: O,
		setErrors: ie,
		setFormikState: fe,
		setFieldTouched: le,
		setFieldValue: oe,
		setFieldError: A,
		setStatus: pe,
		setSubmitting: me,
		setTouched: re,
		setValues: ae,
		submitForm: he,
		validateForm: D,
		validateField: te,
		isValid: we,
		dirty: Ce,
		unregisterField: ne,
		registerField: k,
		getFieldProps: Se,
		getFieldMeta: be,
		getFieldHelpers: xe,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Gh(e) {
	var t = Wh(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, j.useImperativeHandle)(a, function() {
		return t;
	}), (0, j.createElement)(Oh, { value: t }, n ? (0, j.createElement)(n, t) : i ? i(t) : r ? Mh(r) ? r(t) : Ih(r) ? null : j.Children.only(r) : null);
}
function Kh(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return zh(t, e.path, e.message);
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
			Rh(t, o.path) || (t = zh(t, o.path, o.message));
		}
	}
	return t;
}
function qh(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Jh(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Jh(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || ju(e) ? Jh(e) : e === "" ? void 0 : e;
		}) : ju(e[r]) ? t[r] = Jh(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Yh(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? ou(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = ou(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Xh(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Zh(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Qh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j.useLayoutEffect : j.useEffect;
function $h(e) {
	var t = (0, j.useRef)(e);
	return Qh(function() {
		t.current = e;
	}), (0, j.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var eg = /* @__PURE__ */ (0, j.forwardRef)(function(e, t) {
	var n = e.action, r = Th(e, ["action"]), i = n ?? "#", a = Ah(), o = a.handleReset, s = a.handleSubmit;
	return (0, j.createElement)("form", V({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
eg.displayName = "Form";
function tg(e) {
	var t = function(t) {
		return (0, j.createElement)(kh, null, function(n) {
			return !n && rh(!1), (0, j.createElement)(e, V({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, ke.default)(t, e);
}
var ng = function(e, t, n) {
	var r = og(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, rg = function(e, t, n) {
	var r = og(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, ig = function(e, t, n) {
	var r = og(e);
	return r.splice(t, 0, n), r;
}, ag = function(e, t, n) {
	var r = og(e);
	return r[t] = n, r;
}, og = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(V({}, e, { length: t + 1 }));
}, sg = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || Nh(e) ? n(og(e)) : e;
	};
}, cg = /* @__PURE__ */ function(e) {
	wh(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = sg(r, e), o = sg(t, e), s = zh(n.values, a, e(Rh(n.values, a))), c = r ? i(Rh(n.errors, a)) : void 0, l = t ? o(Rh(n.touched, a)) : void 0;
				return jh(c) && (c = void 0), jh(l) && (l = void 0), V({}, n, {
					values: s,
					errors: r ? zh(n.errors, a, c) : n.errors,
					touched: t ? zh(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(og(t), [eh(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return rg(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return ng(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return ig(n, e, t);
			}, function(t) {
				return ig(t, e, null);
			}, function(t) {
				return ig(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return ag(n, e, t);
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
		}, n.remove = n.remove.bind(Eh(n)), n.pop = n.pop.bind(Eh(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, th.default)(Rh(e.formik.values, e.name), Rh(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? og(n) : [];
			return t ||= r[e], Mh(r.splice) && r.splice(e, 1), Mh(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = Th(o, ["validate", "validationSchema"]), c = V({}, e, {
			form: s,
			name: a
		});
		return n ? (0, j.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : Ih(i) ? null : j.Children.only(i) : null;
	}, t;
}(j.Component);
cg.defaultProps = { validateOnChange: !0 };
var lg = /* @__PURE__ */ tg(cg);
//#endregion
//#region src/card-carousel/studio-ui/components/CreateCarouselForm.tsx
function ug() {
	let { values: e, setFieldValue: t, handleChange: n } = Ah();
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "p-4",
		children: [
			/* @__PURE__ */ (0, R.jsx)("h3", { children: "Create Card Carousel" }),
			/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [
				/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Display Name" }),
				/* @__PURE__ */ (0, R.jsx)(L.Text, {
					muted: !0,
					children: "Name of the XBlock component in Studio."
				}),
				/* @__PURE__ */ (0, R.jsx)(L.Control, {
					type: "text",
					name: "displayName",
					value: e.displayName,
					onChange: n
				})
			] }),
			/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [
				/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Card Layout" }),
				/* @__PURE__ */ (0, R.jsx)(L.Text, { children: "Choose whether cards in this carousel use a vertical or horizontal layout. You'll add and edit the cards in the next step." }),
				/* @__PURE__ */ (0, R.jsxs)(_e, {
					direction: "horizontal",
					gap: 4,
					children: [/* @__PURE__ */ (0, R.jsxs)(D, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === "VERTICAL" ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", "VERTICAL"),
						children: [
							/* @__PURE__ */ (0, R.jsx)("p", { children: /* @__PURE__ */ (0, R.jsx)("span", {
								className: "material-icons-outlined",
								children: "splitscreen"
							}) }),
							/* @__PURE__ */ (0, R.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, R.jsx)("strong", { children: "Vertical Cards" })
							}),
							/* @__PURE__ */ (0, R.jsx)("p", {
								className: "small",
								children: "Content sits above and below"
							})
						]
					}), /* @__PURE__ */ (0, R.jsxs)(D, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === "HORIZONTAL" ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", "HORIZONTAL"),
						children: [
							/* @__PURE__ */ (0, R.jsx)("p", { children: /* @__PURE__ */ (0, R.jsx)("span", {
								className: "material-icons-outlined",
								children: "vertical_split"
							}) }),
							/* @__PURE__ */ (0, R.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, R.jsx)("strong", { children: "Horizontal Cards" })
							}),
							/* @__PURE__ */ (0, R.jsx)("p", {
								className: "small",
								children: "Content sits side-by-side"
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, R.jsxs)(L.Group, {
				className: "my-3",
				children: [/* @__PURE__ */ (0, R.jsx)(L.Checkbox, {
					name: "disableNumbering",
					checked: !e.disableNumbering,
					onChange: (e) => t("disableNumbering", !e.currentTarget.checked),
					children: "Add card numbers"
				}), /* @__PURE__ */ (0, R.jsx)(L.Text, {
					className: "small",
					children: "Displays progress. For e.g., (2/4)"
				})]
			}),
			/* @__PURE__ */ (0, R.jsxs)(L.Group, {
				className: "my-3",
				children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Background Color" }), /* @__PURE__ */ (0, R.jsx)(ql, {
					color: e.backgroundColor,
					setColor: (e) => t("backgroundColor", e)
				})]
			})
		]
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ListItemContainer.tsx
function dg({ heading: e, index: t, onRemoveItem: n, children: r }) {
	return /* @__PURE__ */ (0, R.jsx)("div", {
		className: "m-2 bg-light-200",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "border rounded-sm shadow-sm icon-item-form mb-4",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "d-flex justify-content-between border-bottom align-items-center",
				children: [/* @__PURE__ */ (0, R.jsx)("h5", {
					className: "ml-2 mb-0",
					children: e
				}), /* @__PURE__ */ (0, R.jsxs)(D, {
					variant: "tertiary",
					size: "sm",
					className: "d-flex align-items-center",
					onClick: () => n(t),
					children: [
						/* @__PURE__ */ (0, R.jsx)("span", {
							className: "material-icons-outlined text-danger",
							children: "delete_outline"
						}),
						" ",
						"Delete"
					]
				})]
			}), /* @__PURE__ */ (0, R.jsx)("div", {
				className: "p-2",
				children: r
			})]
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/icons.ts
var fg = /* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split(".");
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function pg(e) {
	return Array.isArray ? Array.isArray(e) : wg(e) === "[object Array]";
}
var mg = Infinity;
function hg(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -mg ? "-0" : t;
}
function gg(e) {
	return e == null ? "" : hg(e);
}
function _g(e) {
	return typeof e == "string";
}
function vg(e) {
	return typeof e == "number";
}
function yg(e) {
	return e === !0 || e === !1 || xg(e) && wg(e) == "[object Boolean]";
}
function bg(e) {
	return typeof e == "object";
}
function xg(e) {
	return bg(e) && e !== null;
}
function Sg(e) {
	return e != null;
}
function Cg(e) {
	return !e.trim().length;
}
function wg(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var Tg = "Incorrect 'index' type", Eg = (e) => `Invalid value for key ${e}`, Dg = (e) => `Pattern length exceeds max of ${e}.`, Og = (e) => `Missing ${e} property in key`, kg = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Ag = Object.prototype.hasOwnProperty, jg = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = Mg(e);
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
function Mg(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (_g(e) || pg(e)) r = e, t = Ng(e), n = Pg(e);
	else {
		if (!Ag.call(e, "name")) throw Error(Og("name"));
		let o = e.name;
		if (r = o, Ag.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(kg(o));
		t = Ng(o), n = Pg(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function Ng(e) {
	return pg(e) ? e : e.split(".");
}
function Pg(e) {
	return pg(e) ? e.join(".") : e;
}
function Fg(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (Sg(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!Sg(o)) return;
			if (a === t.length - 1 && (_g(o) || vg(o) || yg(o))) n.push(gg(o));
			else if (pg(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, _g(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var Ig = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, Lg = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Rg = {
	location: 0,
	threshold: .6,
	distance: 100
}, zg = {
	useExtendedSearch: !1,
	getFn: Fg,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, H = {
	...Lg,
	...Ig,
	...Rg,
	...zg
}, Bg = /[^ ]+/g;
function Vg(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(Bg).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var Hg = class {
	constructor({ getFn: e = H.getFn, fieldNormWeight: t = H.fieldNormWeight } = {}) {
		this.norm = Vg(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
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
		this.isCreated || !this.docs.length || (this.isCreated = !0, _g(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		_g(e) ? this._addString(e, t) : this._addObject(e, t);
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
		if (!Sg(e) || Cg(e)) return;
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
			if (Sg(i)) {
				if (pg(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (Sg(r)) if (_g(r) && !Cg(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else pg(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (_g(i) && !Cg(i)) {
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
function Ug(e, t, { getFn: n = H.getFn, fieldNormWeight: r = H.fieldNormWeight } = {}) {
	let i = new Hg({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(Mg)), i.setSources(t), i.create(), i;
}
function Wg(e, { getFn: t = H.getFn, fieldNormWeight: n = H.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new Hg({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Gg(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = H.distance, ignoreLocation: a = H.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Kg(e = [], t = H.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var qg = 32;
function Jg(e, t, n, { location: r = H.location, distance: i = H.distance, threshold: a = H.threshold, findAllMatches: o = H.findAllMatches, minMatchCharLength: s = H.minMatchCharLength, includeMatches: c = H.includeMatches, ignoreLocation: l = H.ignoreLocation } = {}) {
	if (t.length > qg) throw Error(Dg(qg));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Gg(t, {
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
		for (; a < s;) Gg(t, {
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
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Gg(t, {
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
		if (Gg(t, {
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
		let e = Kg(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function Yg(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Xg = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), Zg = class {
	constructor(e, { location: t = H.location, threshold: n = H.threshold, distance: r = H.distance, includeMatches: i = H.includeMatches, findAllMatches: a = H.findAllMatches, minMatchCharLength: o = H.minMatchCharLength, isCaseSensitive: s = H.isCaseSensitive, ignoreDiacritics: c = H.ignoreDiacritics, ignoreLocation: l = H.ignoreLocation } = {}) {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Xg(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Yg(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > qg) {
			let e = 0, t = d % qg, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, qg), e), e += qg;
			if (t) {
				let e = d - qg;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Xg(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Jg(e, t, n, {
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
}, Qg = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return $g(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return $g(e, this.singleRegex);
	}
	search() {}
};
function $g(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var e_ = class extends Qg {
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
}, t_ = class extends Qg {
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
}, n_ = class extends Qg {
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
}, r_ = class extends Qg {
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
}, i_ = class extends Qg {
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
}, a_ = class extends Qg {
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
}, o_ = class extends Qg {
	constructor(e, { location: t = H.location, threshold: n = H.threshold, distance: r = H.distance, includeMatches: i = H.includeMatches, findAllMatches: a = H.findAllMatches, minMatchCharLength: o = H.minMatchCharLength, isCaseSensitive: s = H.isCaseSensitive, ignoreDiacritics: c = H.ignoreDiacritics, ignoreLocation: l = H.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new Zg(e, {
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
}, s_ = class extends Qg {
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
}, c_ = [
	e_,
	s_,
	n_,
	r_,
	a_,
	i_,
	t_,
	o_
], l_ = c_.length, u_ = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, d_ = "|";
function f_(e, t = {}) {
	return e.split(d_).map((e) => {
		let n = e.trim().split(u_).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < l_;) {
				let e = c_[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < l_;) {
				let e = c_[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var p_ = new Set([o_.type, s_.type]), m_ = class {
	constructor(e, { isCaseSensitive: t = H.isCaseSensitive, ignoreDiacritics: n = H.ignoreDiacritics, includeMatches: r = H.includeMatches, minMatchCharLength: i = H.minMatchCharLength, ignoreLocation: a = H.ignoreLocation, findAllMatches: o = H.findAllMatches, location: s = H.location, threshold: c = H.threshold, distance: l = H.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Xg(e) : e, this.pattern = e, this.query = f_(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Xg(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						p_.has(e) ? o = [...o, ...l] : o.push(l);
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
}, h_ = [];
function g_(...e) {
	h_.push(...e);
}
function __(e, t) {
	for (let n = 0, r = h_.length; n < r; n += 1) {
		let r = h_[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new Zg(e, t);
}
var v_ = {
	AND: "$and",
	OR: "$or"
}, y_ = {
	PATH: "$path",
	PATTERN: "$val"
}, b_ = (e) => !!(e[v_.AND] || e[v_.OR]), x_ = (e) => !!e[y_.PATH], S_ = (e) => !pg(e) && bg(e) && !b_(e), C_ = (e) => ({ [v_.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function w_(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = x_(e);
		if (!a && i.length > 1 && !b_(e)) return r(C_(e));
		if (S_(e)) {
			let r = a ? e[y_.PATH] : i[0], o = a ? e[y_.PATTERN] : e[r];
			if (!_g(o)) throw Error(Eg(r));
			let s = {
				keyId: Pg(r),
				pattern: o
			};
			return n && (s.searcher = __(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			pg(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return b_(e) || (e = C_(e)), r(e);
}
function T_(e, { ignoreFieldNorm: t = H.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function E_(e, t) {
	let n = e.matches;
	t.matches = [], Sg(n) && n.forEach((e) => {
		if (!Sg(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function D_(e, t) {
	t.score = e.score;
}
function O_(e, t, { includeMatches: n = H.includeMatches, includeScore: r = H.includeScore } = {}) {
	let i = [];
	return n && i.push(E_), r && i.push(D_), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var k_ = class {
	constructor(e, t = {}, n) {
		this.options = {
			...H,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new jg(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof Hg)) throw Error(Tg);
		this._myIndex = t || Ug(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		Sg(e) && (this._docs.push(e), this._myIndex.add(e));
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
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = _g(e) ? _g(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return T_(s, { ignoreFieldNorm: o }), i && s.sort(a), vg(t) && t > -1 && (s = s.slice(0, t)), O_(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = __(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!Sg(e)) return;
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
		let t = w_(e, this.options), n = (e, t, r) => {
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
				else if (e.operator === v_.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (Sg(e)) {
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
		let t = __(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!Sg(e)) return;
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
		if (!Sg(t)) return [];
		let r = [];
		if (pg(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!Sg(t)) return;
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
k_.version = "7.1.0", k_.createIndex = Ug, k_.parseIndex = Wg, k_.config = H, k_.parseQuery = w_, g_(m_);
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/index.tsx
var A_ = (0, j.forwardRef)(({ variant: e, ...t }, n) => {
	let { onClick: r, ...i } = t, a = (0, j.useRef)(null);
	return (0, j.useEffect)(() => {
		let e = a.current;
		if (!e || !r) return;
		let t = r;
		return e.addEventListener("click", t), () => e.removeEventListener("click", t);
	}, [r]), /* @__PURE__ */ (0, R.jsx)("button", {
		ref: (0, j.useCallback)((e) => {
			a.current = e, typeof n == "function" ? n(e) : n && (n.current = e);
		}, [n]),
		...i,
		className: [i.className, e && `btn btn-${e}`].filter(Boolean).join(" "),
		type: "button"
	});
});
A_.displayName = "IconSelectorToggle";
var j_ = (0, j.forwardRef)(({ show: e, close: t, alignRight: n, ...r }, i) => /* @__PURE__ */ (0, R.jsx)("div", {
	ref: i,
	...r
}));
j_.displayName = "IconSelectorMenu";
function M_({ currentIcon: e, onIconSelected: t }) {
	let n = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split("."), [r, i] = (0, j.useState)(n), [a, o] = (0, j.useState)(""), s = (0, j.useId)(), c = new k_(fg, {
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
	return /* @__PURE__ */ (0, R.jsxs)(Xc, {
		onSelect: d,
		onToggle: (e) => {
			e && u();
		},
		children: [/* @__PURE__ */ (0, R.jsx)(Xc.Toggle, {
			as: A_,
			variant: e ? "outline-dark" : "success",
			className: "d-block icon-selector pb-1",
			id: s,
			children: /* @__PURE__ */ (0, R.jsx)("span", {
				className: "material-icons-outlined mb-0",
				children: e || "add"
			})
		}), /* @__PURE__ */ (0, R.jsx)(Xc.Menu, {
			as: j_,
			className: "p-0 border-0",
			popperConfig: { strategy: "fixed" },
			children: /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "icon-list-popup border rounded-sm shadow",
				children: [/* @__PURE__ */ (0, R.jsx)(fl, { children: /* @__PURE__ */ (0, R.jsx)(L.Group, {
					size: "sm",
					children: /* @__PURE__ */ (0, R.jsx)(L.Control, {
						autoFocus: !0,
						type: "text",
						className: "m-0",
						placeholder: "Search icons",
						trailingElement: /* @__PURE__ */ (0, R.jsx)("span", {
							className: "material-icons-outlined medium text-gray-500",
							children: "search"
						}),
						value: a,
						onChange: l
					})
				}) }), /* @__PURE__ */ (0, R.jsx)("div", {
					className: "icon-list d-flex flex-wrap justify-items-start",
					children: r.map((e) => /* @__PURE__ */ (0, R.jsx)(Xc.Item, {
						as: "button",
						type: "button",
						eventKey: e,
						className: "icon-symbol p-2",
						children: /* @__PURE__ */ (0, R.jsx)("span", {
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
function N_({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = Ah(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, R.jsx)(dg, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, {
				className: "x-small",
				children: "Main Text"
			}), /* @__PURE__ */ (0, R.jsx)(L.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s.description,
				onChange: i
			})] }), /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, R.jsxs)(L.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, R.jsx)(L.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, R.jsx)(M_, {
						currentIcon: s.icon || "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, R.jsxs)(L.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, R.jsx)(L.Label, {
						className: "x-small",
						children: "Hover Text"
					}), /* @__PURE__ */ (0, R.jsx)(L.Control, {
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
function P_({ cardIndex: e }) {
	return /* @__PURE__ */ (0, R.jsx)(lg, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, R.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, R.jsx)(N_, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, R.jsx)(D, {
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
//#region src/shared/components/FilePickerModal.tsx
var F_ = ({ fileTypes: e, onFileSelect: t, onError: n, onClose: r }) => {
	let [i, a] = (0, j.useState)(null), { element: o } = (0, j.useContext)(x), s = Yl(), c = (0, j.useRef)(null), l = o.getAttribute("data-usage-id");
	if ((0, j.useEffect)(() => {
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
	return u.searchParams.set("multiSelect", "false"), u.searchParams.set("embedded", "true"), e && u.searchParams.set("fileTypes", e.join(",")), u.searchParams.set("usageKey", l), /* @__PURE__ */ (0, R.jsx)(ul, {
		title: "File Picker",
		size: "xl",
		isOpen: !0,
		className: "bg-light-200",
		onClose: r,
		footerNode: /* @__PURE__ */ (0, R.jsxs)(Te, { children: [
			/* @__PURE__ */ (0, R.jsx)(Te.Spacer, {}),
			/* @__PURE__ */ (0, R.jsx)(D, {
				variant: "tertiary",
				onClick: r,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, R.jsx)(D, {
				disabled: !i,
				onClick: async () => {
					await t(i);
				},
				children: "Use Selected File"
			})
		] }),
		isOverflowVisible: !0,
		children: /* @__PURE__ */ (0, R.jsx)("iframe", {
			title: "File Picker",
			ref: c,
			width: "100%",
			height: "800",
			src: u.toString()
		})
	});
}, I_ = ({ children: e, setValue: t, fileTypes: n = null }) => {
	let [r, i] = (0, j.useState)(!1), [a, o] = (0, j.useState)(null), s = Yl(), c = (0, j.useCallback)(async (e) => {
		try {
			await t(e), o(null);
		} catch (e) {
			o(e.message);
		}
		i(!1);
	}, [t]);
	return s?.file_picker_url ? /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)(an, { children: [e, /* @__PURE__ */ (0, R.jsx)(an.Append, { children: /* @__PURE__ */ (0, R.jsx)(D, {
			variant: "outline-secondary",
			onClick: () => i(!0),
			children: "Select File"
		}) })] }),
		a && /* @__PURE__ */ (0, R.jsx)(L.Control.Feedback, {
			type: "default",
			children: a
		}),
		r && /* @__PURE__ */ (0, R.jsx)(F_, {
			fileTypes: n,
			onFileSelect: c,
			onError: o,
			onClose: () => i(!1)
		})
	] }) : e;
};
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ImageForm.tsx
function L_({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = Ah(), [i, a] = (0, j.useState)(!1), o = `cards[${e}].secondaryContent`, s = t.cards[e].secondaryContent;
	function c(e) {
		a(e.currentTarget.checked), e.currentTarget.checked && r(`${o}.altText`, "");
	}
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Image Source URL" }), /* @__PURE__ */ (0, R.jsx)(I_, {
		setValue: (e) => r(`${o}.location`, e),
		fileTypes: ["image"],
		children: /* @__PURE__ */ (0, R.jsx)(L.Control, {
			name: `${o}.location`,
			value: s.location,
			onChange: n,
			placeholder: "URL"
		})
	})] }), /* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [
		/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Alt Text" }),
		/* @__PURE__ */ (0, R.jsx)("div", {
			className: "mb-0",
			children: /* @__PURE__ */ (0, R.jsx)(L.Checkbox, {
				checked: i,
				onChange: c,
				size: "sm",
				children: "Decorative Image"
			})
		}),
		/* @__PURE__ */ (0, R.jsx)(L.Control, {
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
function R_({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = Ah(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, R.jsx)(dg, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, R.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, R.jsxs)(L.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, R.jsx)(L.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, R.jsx)(M_, {
						currentIcon: s?.icon ?? "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, R.jsxs)(L.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, R.jsx)(L.Label, {
						className: "x-small",
						children: "Heading"
					}), /* @__PURE__ */ (0, R.jsx)(L.Control, {
						type: "text",
						name: `${o}.title`,
						value: s?.title ?? "",
						onChange: i
					})]
				})]
			}), /* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, {
				className: "x-small",
				children: "Description"
			}), /* @__PURE__ */ (0, R.jsx)(L.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s?.description ?? "",
				onChange: i
			})] })]
		})
	});
}
function z_({ cardIndex: e }) {
	return /* @__PURE__ */ (0, R.jsx)(lg, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, R.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, R.jsx)(R_, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, R.jsx)(D, {
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
function B_({ cardIndex: e }) {
	let { values: t, handleChange: n } = Ah(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
	return /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
		/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Title" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
			name: `${r}.title`,
			value: i.title,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
			name: `${r}.subtitle`,
			value: i.subtitle,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Description" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
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
function V_(e) {
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
var H_ = {
	IMAGE: L_,
	RICH_LIST: z_,
	CONTENT_HIGHLIGHT: B_,
	HOVER_LIST: P_
};
function U_({ cardIndex: e }) {
	let { values: t, handleChange: n, handleBlur: r, setFieldValue: i } = Ah(), [a, o] = (0, j.useState)(!1), s = t.cards[e], c = `cards[${e}]`, l = s.secondaryContent?.kind ? H_[s.secondaryContent.kind] : null;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "row mt-5",
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "col border-right",
			children: [
				/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Title" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
					name: `${c}.title`,
					value: s.title,
					onChange: n,
					onBlur: r
				})] }),
				/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
					name: `${c}.subtitle`,
					value: s.subtitle,
					onChange: n,
					onBlur: r
				})] }),
				s.secondaryContent?.kind !== "HOVER_LIST" && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [
					/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Body Content" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
						as: "textarea",
						autoResize: !0,
						name: `${c}.description`,
						value: s?.description ?? "",
						onChange: n,
						onBlur: r
					})] }),
					/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Checkbox, {
						checked: a,
						onChange: (e) => {
							o(e.currentTarget.checked), e.currentTarget.checked || (i(`${c}.ctaLabel`, ""), i(`${c}.ctaLink`, ""));
						},
						children: "Add a button"
					}), /* @__PURE__ */ (0, R.jsx)(L.Text, { children: "Link to another page or resource" })] }),
					a && /* @__PURE__ */ (0, R.jsxs)(R.Fragment, { children: [/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Button Label" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
						name: `${c}.ctaLabel`,
						value: s?.ctaLabel ?? "",
						onChange: n
					})] }), /* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Button Link" }), /* @__PURE__ */ (0, R.jsx)(L.Control, {
						name: `${c}.ctaLink`,
						value: s?.ctaLink ?? "",
						onChange: n
					})] })] })
				] })
			]
		}), /* @__PURE__ */ (0, R.jsx)("div", {
			className: "col",
			children: l && /* @__PURE__ */ (0, R.jsx)(l, { cardIndex: e })
		})]
	});
}
function W_({ cardIndex: e }) {
	let { values: t, setFieldValue: n, handleChange: r, handleBlur: i } = Ah(), a = t.cards[e], o = `cards[${e}]`;
	return /* @__PURE__ */ (0, R.jsxs)("div", { children: [
		/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [
			/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Card Name" }),
			/* @__PURE__ */ (0, R.jsx)(L.Text, {
				className: "micro",
				children: "Name of the card in Studio"
			}),
			/* @__PURE__ */ (0, R.jsx)(L.Control, {
				name: `${o}.name`,
				value: a.name,
				onChange: r,
				onBlur: i
			})
		] }),
		/* @__PURE__ */ (0, R.jsxs)(L.Group, { children: [/* @__PURE__ */ (0, R.jsx)(L.Label, { children: "Supporting Content" }), /* @__PURE__ */ (0, R.jsxs)(L.Control, {
			as: "select",
			name: `${o}.cardType`,
			value: a.secondaryContent?.kind ?? "UNKNOWN",
			onChange: (e) => {
				n(`${o}.cardType`, e.currentTarget.value), n(`${o}.secondaryContent`, V_(e.currentTarget.value));
			},
			onBlur: i,
			children: [
				/* @__PURE__ */ (0, R.jsx)("option", {
					value: "UNKNOWN",
					children: "Choose Content Type"
				}),
				/* @__PURE__ */ (0, R.jsx)("option", {
					value: "IMAGE",
					children: "Image"
				}),
				/* @__PURE__ */ (0, R.jsx)("option", {
					value: "CONTENT_HIGHLIGHT",
					children: "Highlighted Text"
				}),
				/* @__PURE__ */ (0, R.jsx)("option", {
					value: "RICH_LIST",
					children: "Icon List"
				}),
				/* @__PURE__ */ (0, R.jsx)("option", {
					value: "HOVER_LIST",
					children: "Interactive List"
				})
			]
		})] }),
		a.secondaryContent?.kind && /* @__PURE__ */ (0, R.jsx)(U_, { cardIndex: e })
	] });
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var G_ = Symbol.for("preact-signals");
function K_() {
	if (Y_ > 1) Y_--;
	else {
		var e, t = !1;
		for ((function() {
			var e = $_;
			for ($_ = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); J_ !== void 0;) {
			var n = J_;
			for (J_ = void 0, X_++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && iv(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (X_ = 0, Y_--, t) throw e;
	}
}
function U(e) {
	if (Y_ > 0) return e();
	Q_ = ++Z_, Y_++;
	try {
		return e();
	} finally {
		K_();
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
var q_, J_ = void 0, Y_ = 0, X_ = 0, Z_ = 0, Q_ = 0, $_ = void 0, ev = 0;
function tv(e) {
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
function nv(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
nv.prototype.brand = G_, nv.prototype.h = function() {
	return !0;
}, nv.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? G(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, nv.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && G(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, nv.prototype.subscribe = function(e) {
	var t = this;
	return pv(function() {
		var n = t.value, r = W;
		W = void 0;
		try {
			e(n);
		} finally {
			W = r;
		}
	}, { name: "sub" });
}, nv.prototype.valueOf = function() {
	return this.value;
}, nv.prototype.toString = function() {
	return this.value + "";
}, nv.prototype.toJSON = function() {
	return this.value;
}, nv.prototype.peek = function() {
	var e = W;
	W = void 0;
	try {
		return this.value;
	} finally {
		W = e;
	}
}, Object.defineProperty(nv.prototype, "value", {
	get: function() {
		var e = tv(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (X_ > 100) throw Error("Cycle detected");
			(function(e) {
				Y_ !== 0 && X_ === 0 && e.l !== Q_ && (e.l = Q_, $_ = {
					S: e,
					v: e.v,
					i: e.i,
					o: $_
				});
			})(this), this.v = e, this.i++, ev++, Y_++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				K_();
			}
		}
	}
});
function rv(e, t) {
	return new nv(e, t);
}
function iv(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function av(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function ov(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function sv(e, t) {
	nv.call(this, void 0), this.x = e, this.s = void 0, this.g = ev - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
sv.prototype = new nv(), sv.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === ev)) return !0;
	if (this.g = ev, this.f |= 1, this.i > 0 && !iv(this)) return this.f &= -2, !0;
	var e = W;
	try {
		av(this), W = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return W = e, ov(this), this.f &= -2, !0;
}, sv.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	nv.prototype.S.call(this, e);
}, sv.prototype.U = function(e) {
	if (this.t !== void 0 && (nv.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, sv.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(sv.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = tv(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function cv(e, t) {
	return new sv(e, t);
}
function lv(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Y_++;
		var n = W;
		W = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, uv(e), t;
		} finally {
			W = n, K_();
		}
	}
}
function uv(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, lv(e);
}
function dv(e) {
	if (W !== this) throw Error("Out-of-order effect");
	ov(this), W = e, this.f &= -2, 8 & this.f && uv(this), K_();
}
function fv(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, q_ && q_.push(this);
}
fv.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, fv.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, lv(this), av(this), Y_++;
	var e = W;
	return W = this, dv.bind(this, e);
}, fv.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = J_, J_ = this);
}, fv.prototype.d = function() {
	this.f |= 8, 1 & this.f || uv(this);
}, fv.prototype.dispose = function() {
	this.d();
};
function pv(e, t) {
	var n = new fv(e, t);
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
var mv = Object.create, hv = Object.defineProperty, gv = Object.defineProperties, _v = Object.getOwnPropertyDescriptor, vv = Object.getOwnPropertyDescriptors, yv = Object.getOwnPropertySymbols, bv = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable, Sv = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Cv = (e) => {
	throw TypeError(e);
}, wv = (e, t, n) => t in e ? hv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Tv = (e, t) => {
	for (var n in t ||= {}) bv.call(t, n) && wv(e, n, t[n]);
	if (yv) for (var n of yv(t)) xv.call(t, n) && wv(e, n, t[n]);
	return e;
}, Ev = (e, t) => gv(e, vv(t)), Dv = (e, t) => hv(e, "name", {
	value: t,
	configurable: !0
}), Ov = (e) => [
	,
	,
	,
	mv(e?.[Sv("metadata")] ?? null)
], kv = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Av = (e) => e !== void 0 && typeof e != "function" ? Cv("Function expected") : e, jv = (e, t, n, r, i) => ({
	kind: kv[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Cv("Already initialized") : i.push(Av(e || null))
}), Mv = (e, t) => wv(t, Sv("metadata"), e[3]), Nv = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Pv = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = kv[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && _v(d < 4 ? i : {
		get [n]() {
			return Lv(this, a);
		},
		set [n](e) {
			return zv(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Dv(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Dv(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = jv(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Iv(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Lv : Bv)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => zv(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Av(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Cv("Object expected") : (Av(o = s.get) && (v.get = o), Av(o = s.set) && (v.set = o), Av(o = s.init) && g.unshift(o));
	return d || Mv(e, i), v && hv(i, n, v), p ? d ^ 4 ? a : v : i;
}, Fv = (e, t, n) => t.has(e) || Cv("Cannot " + n), Iv = (e, t) => Object(t) === t ? e.has(t) : Cv("Cannot use the \"in\" operator on this value"), Lv = (e, t, n) => (Fv(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rv = (e, t, n) => t.has(e) ? Cv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), zv = (e, t, n, r) => (Fv(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Bv = (e, t, n) => (Fv(e, t, "access private method"), n);
function Vv(e, t) {
	if (t) {
		let n;
		return cv(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return cv(e);
}
function Hv(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !Hv(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !Hv(e[n], t[n])) : !1;
	}
	return !1;
}
function K({ get: e }, t) {
	return {
		init(e) {
			return rv(e);
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
function Uv(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = Vv(e.bind(this)), n.set(this, t)), t.value;
	};
}
function Wv(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, Ev(Tv({}, r), { enumerable: e }));
		});
	};
}
function Gv(...e) {
	let t = e.map((e) => pv(e));
	return () => t.forEach((e) => e());
}
var Kv, qv, Jv, Yv, Xv, Zv = [K], Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy;
Xv = [K], Yv = [K], Jv = [Wv()], qv = [Wv()], Kv = [Wv()];
var fy = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, Nv(Qv, 5, this), Rv(this, ry), Rv(this, $v, Nv(Qv, 8, this)), Nv(Qv, 11, this), Rv(this, iy, Nv(Qv, 12, this)), Nv(Qv, 15, this), Rv(this, cy, Nv(Qv, 16, this)), Nv(Qv, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return Lv(this, ry, uy);
	}
	get initial() {
		return Lv(this, ry, ty);
	}
	get previous() {
		return Lv(this, ry, oy);
	}
	set current(e) {
		let t = G(() => Lv(this, ry, uy));
		e && t && this.equals(t, e) || U(() => {
			Lv(this, ry, ty) || zv(this, ry, e, ny), zv(this, ry, t, sy), zv(this, ry, e, dy);
		});
	}
	reset(e = this.defaultValue) {
		U(() => {
			zv(this, ry, void 0, sy), zv(this, ry, e, ny), zv(this, ry, e, dy);
		});
	}
};
Qv = Ov(null), $v = /* @__PURE__ */ new WeakMap(), ry = /* @__PURE__ */ new WeakSet(), iy = /* @__PURE__ */ new WeakMap(), cy = /* @__PURE__ */ new WeakMap(), ey = Pv(Qv, 20, "#initial", Zv, ry, $v), ty = ey.get, ny = ey.set, ay = Pv(Qv, 20, "#previous", Xv, ry, iy), oy = ay.get, sy = ay.set, ly = Pv(Qv, 20, "#current", Yv, ry, cy), uy = ly.get, dy = ly.set, Pv(Qv, 2, "current", Jv, fy), Pv(Qv, 2, "initial", qv, fy), Pv(Qv, 2, "previous", Kv, fy), Mv(Qv, fy);
function py(e) {
	return G(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var my, hy = class {
	constructor() {
		Rv(this, my, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? Lv(this, my).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return Lv(this, my).has(e) || Lv(this, my).set(e, /* @__PURE__ */ new Map()), Lv(this, my).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? Lv(this, my).get(e)?.clear() : void 0;
	}
};
my = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var gy = Object.create, _y = Object.defineProperty, vy = Object.getOwnPropertyDescriptor, yy = Object.getOwnPropertySymbols, by = Object.prototype.hasOwnProperty, xy = Object.prototype.propertyIsEnumerable, Sy = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Cy = (e) => {
	throw TypeError(e);
}, wy = Math.pow, Ty = (e, t, n) => t in e ? _y(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ey = (e, t) => {
	for (var n in t ||= {}) by.call(t, n) && Ty(e, n, t[n]);
	if (yy) for (var n of yy(t)) xy.call(t, n) && Ty(e, n, t[n]);
	return e;
}, Dy = (e, t) => _y(e, "name", {
	value: t,
	configurable: !0
}), Oy = (e) => [
	,
	,
	,
	gy(e?.[Sy("metadata")] ?? null)
], ky = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Ay = (e) => e !== void 0 && typeof e != "function" ? Cy("Function expected") : e, jy = (e, t, n, r, i) => ({
	kind: ky[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Cy("Already initialized") : i.push(Ay(e || null))
}), My = (e, t) => Ty(t, Sy("metadata"), e[3]), Ny = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Py = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = ky[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && vy(d < 4 ? i : {
		get [n]() {
			return Ly(this, a);
		},
		set [n](e) {
			return zy(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Dy(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Dy(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = jy(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Iy(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Ly : By)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => zy(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Ay(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Cy("Object expected") : (Ay(o = s.get) && (v.get = o), Ay(o = s.set) && (v.set = o), Ay(o = s.init) && g.unshift(o));
	return d || My(e, i), v && _y(i, n, v), p ? d ^ 4 ? a : v : i;
}, Fy = (e, t, n) => t.has(e) || Cy("Cannot " + n), Iy = (e, t) => Object(t) === t ? e.has(t) : Cy("Cannot use the \"in\" operator on this value"), Ly = (e, t, n) => (Fy(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ry = (e, t, n) => t.has(e) ? Cy("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), zy = (e, t, n, r) => (Fy(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), By = (e, t, n) => (Fy(e, t, "access private method"), n), Vy = class e {
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
}, Hy = class e {
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
		return c.scale = Ey({}, s), c;
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
		return new Vy((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? Uy(this, t) : 0;
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
		return Vy.delta({
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
function Uy(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var Wy, Gy, Ky, qy, Jy, Yy = class extends (Ky = fy, Gy = [Uv], Wy = [Uv], Ky) {
	constructor(e) {
		let t = Vy.from(e);
		super(t, (e, t) => Vy.equals(e, t)), Ny(Jy, 5, this), Ry(this, qy, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Vy.delta(this.current, this.initial);
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
		let { current: t } = this, n = Vy.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Ly(this, qy), o = (e) => Math.round(e / a * 100);
		U(() => {
			zy(this, qy, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Vy.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Jy = Oy(Ky), qy = /* @__PURE__ */ new WeakMap(), Py(Jy, 2, "delta", Gy, Yy), Py(Jy, 2, "direction", Wy, Yy), My(Jy, Yy);
function Xy({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(wy(r, 2) + wy(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var Zy = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Zy || {}), Qy = Object.values(Zy), $y = Object.create, eb = Object.defineProperty, tb = Object.defineProperties, nb = Object.getOwnPropertyDescriptor, rb = Object.getOwnPropertyDescriptors, ib = Object.getOwnPropertySymbols, ab = Object.prototype.hasOwnProperty, ob = Object.prototype.propertyIsEnumerable, sb = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), cb = (e) => {
	throw TypeError(e);
}, lb = (e, t, n) => t in e ? eb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ub = (e, t) => {
	for (var n in t ||= {}) ab.call(t, n) && lb(e, n, t[n]);
	if (ib) for (var n of ib(t)) ob.call(t, n) && lb(e, n, t[n]);
	return e;
}, db = (e, t) => tb(e, rb(t)), fb = (e, t) => eb(e, "name", {
	value: t,
	configurable: !0
}), pb = (e, t) => {
	var n = {};
	for (var r in e) ab.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && ib) for (var r of ib(e)) t.indexOf(r) < 0 && ob.call(e, r) && (n[r] = e[r]);
	return n;
}, mb = (e) => [
	,
	,
	,
	$y(e?.[sb("metadata")] ?? null)
], hb = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], gb = (e) => e !== void 0 && typeof e != "function" ? cb("Function expected") : e, _b = (e, t, n, r, i) => ({
	kind: hb[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? cb("Already initialized") : i.push(gb(e || null))
}), vb = (e, t) => lb(t, sb("metadata"), e[3]), q = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, J = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = hb[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && nb(d < 4 ? i : {
		get [n]() {
			return xb(this, a);
		},
		set [n](e) {
			return Sb(this, a, e);
		}
	}, n));
	d ? p && d < 4 && fb(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : fb(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = _b(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => bb(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? xb : Cb)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Sb(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? gb(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? cb("Object expected") : (gb(o = s.get) && (v.get = o), gb(o = s.set) && (v.set = o), gb(o = s.init) && g.unshift(o));
	return d || vb(e, i), v && eb(i, n, v), p ? d ^ 4 ? a : v : i;
}, yb = (e, t, n) => t.has(e) || cb("Cannot " + n), bb = (e, t) => Object(t) === t ? e.has(t) : cb("Cannot use the \"in\" operator on this value"), xb = (e, t, n) => (yb(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Y = (e, t, n) => t.has(e) ? cb("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Sb = (e, t, n, r) => (yb(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Cb = (e, t, n) => (yb(e, t, "access private method"), n);
function wb(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function Tb(e) {
	return (t) => wb(e, t);
}
function Eb(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var Db = [K], Ob, kb, Ab, jb = class {
	constructor(e, t) {
		this.manager = e, this.options = t, Y(this, kb, q(Ob, 8, this, !1)), q(Ob, 11, this), Y(this, Ab, /* @__PURE__ */ new Set());
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
		let t = pv(e.bind(this));
		return xb(this, Ab).add(t), t;
	}
	destroy() {
		xb(this, Ab).forEach((e) => e());
	}
	static configure(e) {
		return wb(this, e);
	}
};
Ob = mb(null), kb = /* @__PURE__ */ new WeakMap(), Ab = /* @__PURE__ */ new WeakMap(), J(Ob, 4, "disabled", Db, jb, kb), vb(Ob, jb);
var Mb = class extends jb {}, Nb, Pb = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), Y(this, Nb, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(Eb).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of xb(this, Nb)) if (!n.includes(e)) {
			if (e.prototype instanceof Mb) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		Sb(this, Nb, n);
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
Nb = /* @__PURE__ */ new WeakMap();
function Fb(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Ib = [], Lb, Rb, zb = class extends jb {
	constructor(e) {
		super(e), Y(this, Lb), Y(this, Rb), this.computeCollisions = this.computeCollisions.bind(this), Sb(this, Rb, rv(Ib)), this.destroy = Gv(() => {
			let e = this.computeCollisions(), t = G(() => this.manager.dragOperation.position.current);
			if (e !== Ib) {
				let e = xb(this, Lb);
				if (Sb(this, Lb, t), e && t.x == e.x && t.y == e.y) return;
			} else Sb(this, Lb, void 0);
			xb(this, Rb).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		G(() => {
			e ? xb(this, Rb).value = this.computeCollisions() : Sb(this, Lb, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return Ib;
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
		return c.length === 0 ? Ib : (s.sort(Fb), s);
	}
	get collisions() {
		return xb(this, Rb).value;
	}
};
Lb = /* @__PURE__ */ new WeakMap(), Rb = /* @__PURE__ */ new WeakMap();
var Bb = class {
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
}, Vb = class extends Bb {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Hb(e, t = !0) {
	let n = !1;
	return db(ub({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var Ub = class extends Mb {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = Gv(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Hb({ collisions: a });
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
}, Wb = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Wb || {}), Gb = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Gb || {}), Kb, qb, Jb, Yb, Xb, Zb, Qb = [K], $b, ex;
Zb = [Uv], Xb = [Uv], Yb = [Uv], Jb = [Uv], qb = [Uv], Kb = [Uv];
var tx = class {
	constructor() {
		q($b, 5, this), Y(this, ex, q($b, 8, this, "idle")), q($b, 11, this);
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
$b = mb(null), ex = /* @__PURE__ */ new WeakMap(), J($b, 4, "value", Qb, tx, ex), J($b, 2, "current", Zb, tx), J($b, 2, "idle", Xb, tx), J($b, 2, "initializing", Yb, tx), J($b, 2, "initialized", Jb, tx), J($b, 2, "dragging", qb, tx), J($b, 2, "dropped", Kb, tx), vb($b, tx);
var nx = class {
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
			let r = Hb({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return G(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			U(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Hb({ operation: t.snapshot() });
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
			let i = Hb({
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
						let { source: e } = t, n = pv(() => {
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
}, rx, ix, ax, ox = [K], sx, cx, lx, ux, dx;
ax = [K], ix = [K], rx = [K];
var fx = class {
	constructor(e, t) {
		Y(this, cx, q(sx, 8, this)), q(sx, 11, this), Y(this, lx, q(sx, 12, this)), q(sx, 15, this), Y(this, ux, q(sx, 16, this)), q(sx, 19, this), Y(this, dx, q(sx, 20, this)), q(sx, 23, this);
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
sx = mb(null), cx = /* @__PURE__ */ new WeakMap(), lx = /* @__PURE__ */ new WeakMap(), ux = /* @__PURE__ */ new WeakMap(), dx = /* @__PURE__ */ new WeakMap(), J(sx, 4, "manager", ox, fx, cx), J(sx, 4, "id", ax, fx, lx), J(sx, 4, "data", ix, fx, ux), J(sx, 4, "disabled", rx, fx, dx), vb(sx, fx);
var px = class {
	constructor() {
		this.map = rv(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = Gv(...t.effects());
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
}, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx, wx, Tx = class extends (bx = fx, yx = [K], vx = [K], _x = [K], gx = [Uv], hx = [Uv], mx = [Uv], bx) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = pb(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), q(xx, 5, this), Y(this, Sx, q(xx, 8, this)), q(xx, 11, this), Y(this, Cx, q(xx, 12, this)), q(xx, 15, this), Y(this, wx, q(xx, 16, this, this.isDragSource ? "dragging" : "idle")), q(xx, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
xx = mb(bx), Sx = /* @__PURE__ */ new WeakMap(), Cx = /* @__PURE__ */ new WeakMap(), wx = /* @__PURE__ */ new WeakMap(), J(xx, 4, "type", yx, Tx, Sx), J(xx, 4, "modifiers", vx, Tx, Cx), J(xx, 4, "status", _x, Tx, wx), J(xx, 2, "isDropping", gx, Tx), J(xx, 2, "isDragging", hx, Tx), J(xx, 2, "isDragSource", mx, Tx), vb(xx, Tx);
var Ex, Dx, Ox, kx, Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx = class extends (Mx = fx, jx = [K], Ax = [K], kx = [K], Ox = [K], Dx = [K], Ex = [Uv], Mx) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = pb(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), q(Nx, 5, this), Y(this, Px, q(Nx, 8, this)), q(Nx, 11, this), Y(this, Fx, q(Nx, 12, this)), q(Nx, 15, this), Y(this, Ix, q(Nx, 16, this)), q(Nx, 19, this), Y(this, Lx, q(Nx, 20, this)), q(Nx, 23, this), Y(this, Rx, q(Nx, 24, this)), q(Nx, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
Nx = mb(Mx), Px = /* @__PURE__ */ new WeakMap(), Fx = /* @__PURE__ */ new WeakMap(), Ix = /* @__PURE__ */ new WeakMap(), Lx = /* @__PURE__ */ new WeakMap(), Rx = /* @__PURE__ */ new WeakMap(), J(Nx, 4, "accept", jx, zx, Px), J(Nx, 4, "type", Ax, zx, Fx), J(Nx, 4, "collisionDetector", kx, zx, Ix), J(Nx, 4, "collisionPriority", Ox, zx, Lx), J(Nx, 4, "shape", Dx, zx, Rx), J(Nx, 2, "isDropTarget", Ex, zx), vb(Nx, zx);
var Bx = class extends jb {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, Vx = class extends AbortController {
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
}, Hx, Ux = class {
	constructor(e) {
		this.options = e, Y(this, Hx);
	}
	set controller(e) {
		Sb(this, Hx, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = xb(this, Hx)) == null || t.activate(e);
	}
};
Hx = /* @__PURE__ */ new WeakMap();
var Wx = class extends jb {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, Gx = class {
	constructor(e) {
		this.draggables = new px(), this.droppables = new px(), this.plugins = new Pb(e), this.sensors = new Pb(e), this.modifiers = new Pb(e);
	}
	register(e, t) {
		if (e instanceof Tx) return this.draggables.register(e.id, e);
		if (e instanceof zx) return this.droppables.register(e.id, e);
		if (e.prototype instanceof Wx) return this.modifiers.register(e, t);
		if (e.prototype instanceof Bx) return this.sensors.register(e, t);
		if (e.prototype instanceof jb) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof fx) return e instanceof Tx ? this.draggables.unregister(e.id, e) : e instanceof zx ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof Wx) return this.modifiers.unregister(e);
		if (e.prototype instanceof Bx) return this.sensors.unregister(e);
		if (e.prototype instanceof jb) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS = [Uv], tS, nS, rS, X, iS, aS, oS, sS, cS, lS;
$x = [K], Qx = [K], Zx = [K], Xx = [K], Yx = [K], Jx = [Uv], qx = [Uv], Kx = [Uv];
var uS = class {
	constructor(e) {
		q(X, 5, this), Y(this, tS), Y(this, nS), Y(this, rS, new fy(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new tx(), Y(this, iS, q(X, 8, this, !1)), q(X, 11, this), Y(this, aS, q(X, 12, this, null)), q(X, 15, this), Y(this, oS, q(X, 16, this, null)), q(X, 19, this), Y(this, sS, q(X, 20, this, null)), q(X, 23, this), Y(this, cS, q(X, 24, this, [])), q(X, 27, this), this.position = new Yy({
			x: 0,
			y: 0
		}), Y(this, lS, {
			x: 0,
			y: 0
		}), Sb(this, tS, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = xb(this, rS);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? xb(this, rS).current = e : xb(this, rS).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = xb(this, tS).registry.draggables.get(e);
		return t && Sb(this, nS, t), t ?? xb(this, nS) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : xb(this, tS).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(db(ub({}, this.snapshot()), { transform: n }));
		return Sb(this, lS, n), n;
	}
	snapshot() {
		return G(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: xb(this, lS),
			shape: this.shape ? py(this.shape) : null,
			position: py(this.position),
			status: py(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		U(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, xb(this, rS).reset(), this.position.reset({
				x: 0,
				y: 0
			}), Sb(this, lS, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
X = mb(null), tS = /* @__PURE__ */ new WeakMap(), nS = /* @__PURE__ */ new WeakMap(), rS = /* @__PURE__ */ new WeakMap(), iS = /* @__PURE__ */ new WeakMap(), aS = /* @__PURE__ */ new WeakMap(), oS = /* @__PURE__ */ new WeakMap(), sS = /* @__PURE__ */ new WeakMap(), cS = /* @__PURE__ */ new WeakMap(), lS = /* @__PURE__ */ new WeakMap(), J(X, 2, "shape", eS, uS), J(X, 4, "canceled", $x, uS, iS), J(X, 4, "activatorEvent", Qx, uS, aS), J(X, 4, "sourceIdentifier", Zx, uS, oS), J(X, 4, "targetIdentifier", Xx, uS, sS), J(X, 4, "modifiers", Yx, uS, cS), J(X, 2, "source", Jx, uS), J(X, 2, "target", qx, uS), J(X, 2, "transform", Kx, uS), vb(X, uS);
var dS = { get rendering() {
	return Promise.resolve();
} };
function fS(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var pS = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = fS(t.plugins, []), r = fS(t.sensors, []), i = fS(t.modifiers, []), a = t.renderer ?? dS, o = new Vb(this);
		this.registry = new Gx(this), this.monitor = o, this.renderer = a, this.actions = new nx(this), this.dragOperation = new uS(this), this.collisionObserver = new zb(this), this.plugins = [Ub, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = Gv(() => {
			let e = G(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = Eb(e);
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
}, mS = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / Vy.distance(t.shape.center, n),
		type: Gb.PointerIntersection,
		priority: Wb.High
	} : null;
}, hS = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = Vy.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: Gb.ShapeIntersection,
			priority: Wb.Normal
		};
	}
	return null;
}, gS = (e) => mS(e) ?? hS(e), _S = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? Hy.from(r.current.boundingRectangle).corners : void 0, o = Hy.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + Vy.distance(Vy.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: Gb.Collision,
		priority: Wb.Normal
	};
}, vS = (e) => {
	throw TypeError(e);
}, yS = (e, t, n) => t.has(e) || vS("Cannot " + n), Z = (e, t, n) => (yS(e, t, "read from private field"), t.get(e)), bS = (e, t, n) => t.has(e) ? vS("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xS = (e, t, n, r) => (yS(e, t, "write to private field"), t.set(e, n), n), SS = (e, t, n) => (yS(e, t, "access private method"), n);
function CS(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function wS(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (CS(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function TS(e) {
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
function ES(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function DS(e) {
	return "nodeType" in e;
}
function OS(e) {
	return e ? ES(e) ? e : DS(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function kS(e) {
	let { Document: t } = OS(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function AS(e) {
	return !e || ES(e) ? !1 : e instanceof OS(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function jS(e) {
	return e instanceof OS(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function MS(e) {
	return e ? ES(e) ? e.document : DS(e) ? kS(e) ? e : AS(e) || jS(e) ? e.ownerDocument : document : document : document;
}
function NS(e) {
	let { documentElement: t } = MS(e), n = OS(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function PS(e, t) {
	if (FS(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function FS(e) {
	return e.tagName === "DETAILS";
}
function IS(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!PS(o)) {
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
function LS(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var RS = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function zS(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...zS(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...zS(i.document, t));
		}
	} catch {}
	return n;
}
function BS() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function VS() {
	let e = BS() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function HS(e) {
	return !e || !DS(e) ? !1 : e instanceof OS(e).ShadowRoot;
}
function US(e) {
	if (e && DS(e)) {
		let t = e.getRootNode();
		if (HS(t) || t instanceof Document) return t;
	}
	return MS(e);
}
function WS(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function GS(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		KS(e) && KS(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), qS(e) && qS(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function KS(e) {
	return "value" in e;
}
function qS(e) {
	return e.tagName === "CANVAS";
}
function JS(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (YS(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return JS(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function YS(e) {
	return e?.tagName === "IFRAME";
}
var XS = /* @__PURE__ */ new WeakMap();
function ZS(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var QS = class {
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
function $S(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function eC(e) {
	let t = /* @__PURE__ */ new Set(), n = $S(e);
	for (; n;) t.add(n), n = $S(n);
	return t;
}
function tC(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function nC(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = tC(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function rC(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function iC(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = IS(e, t);
	return n > 0 && r > 0;
}
var aC = RS ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, oC, sC = class extends aC {
	constructor(e) {
		super((t) => {
			if (!Z(this, oC)) {
				xS(this, oC, !0);
				return;
			}
			e(t, this);
		}), bS(this, oC, !1);
	}
};
oC = /* @__PURE__ */ new WeakMap();
var cC = Array.from({ length: 100 }, (e, t) => t / 100), lC = 75, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC, xC = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, bS(this, vC), this.disconnect = () => {
			var e, t, n;
			xS(this, gC, !0), (e = Z(this, fC)) == null || e.disconnect(), (t = Z(this, pC)) == null || t.disconnect(), Z(this, mC).disconnect(), (n = Z(this, hC)) == null || n.remove();
		}, bS(this, uC, !0), bS(this, dC), bS(this, fC), bS(this, pC), bS(this, mC), bS(this, hC), bS(this, gC, !1), bS(this, _C, nC(() => {
			var e;
			let { element: t } = this;
			if ((e = Z(this, pC)) == null || e.disconnect(), Z(this, gC) || !Z(this, uC) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = IS(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, xS(this, pC, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? Hy.intersectionRatio(r, IS(t)) : n.intersectionRatio) !== 1 && Z(this, _C).call(this);
			}, {
				threshold: cC,
				rootMargin: f,
				root: n
			})), Z(this, pC).observe(t), SS(this, vC, yC).call(this);
		}, lC)), this.boundingClientRect = e.getBoundingClientRect(), xS(this, uC, iC(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (xS(this, hC, document.createElement("div")), Z(this, hC).style.background = "rgba(0,0,0,0.15)", Z(this, hC).style.position = "fixed", Z(this, hC).style.pointerEvents = "none", i.body.appendChild(Z(this, hC))), xS(this, mC, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Z(this, uC);
			xS(this, uC, a), !(!o && !s) && (c && !a ? ((n = Z(this, pC)) == null || n.disconnect(), this.callback(null), (r = Z(this, fC)) == null || r.disconnect(), xS(this, fC, void 0), Z(this, hC) && (Z(this, hC).style.visibility = "hidden")) : Z(this, _C).call(this), a && !Z(this, fC) && (xS(this, fC, new sC(Z(this, _C))), Z(this, fC).observe(e)));
		}, {
			threshold: cC,
			root: i
		})), Z(this, uC) && !n.skipInitial && this.callback(this.boundingClientRect), Z(this, mC).observe(e);
	}
};
uC = /* @__PURE__ */ new WeakMap(), dC = /* @__PURE__ */ new WeakMap(), fC = /* @__PURE__ */ new WeakMap(), pC = /* @__PURE__ */ new WeakMap(), mC = /* @__PURE__ */ new WeakMap(), hC = /* @__PURE__ */ new WeakMap(), gC = /* @__PURE__ */ new WeakMap(), _C = /* @__PURE__ */ new WeakMap(), vC = /* @__PURE__ */ new WeakSet(), yC = function() {
	Z(this, gC) || (SS(this, vC, bC).call(this), !rC(this.boundingClientRect, Z(this, dC)) && (this.callback(this.boundingClientRect), xS(this, dC, this.boundingClientRect)));
}, bC = function() {
	if (Z(this, hC)) {
		let { top: e, left: t, width: n, height: r } = IS(this.element);
		Z(this, hC).style.overflow = "hidden", Z(this, hC).style.visibility = "visible", Z(this, hC).style.top = `${Math.floor(e)}px`, Z(this, hC).style.left = `${Math.floor(t)}px`, Z(this, hC).style.width = `${Math.floor(n)}px`, Z(this, hC).style.height = `${Math.floor(r)}px`;
	}
};
var SC = /* @__PURE__ */ new WeakMap(), CC = /* @__PURE__ */ new WeakMap();
function wC(e, t) {
	let n = SC.get(e);
	return n ||= {
		disconnect: new xC(e, (t) => {
			let n = SC.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), SC.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (SC.delete(e), n.disconnect());
	};
}
function TC(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = wC(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function EC(e, t) {
	let n = e.ownerDocument;
	if (!CC.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), CC.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = CC.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), CC.delete(n));
	});
}
var DC, OC, kC, AC, jC = class {
	constructor(e, t, n) {
		this.callback = t, bS(this, DC), bS(this, OC, !1), bS(this, kC), bS(this, AC, nC((e) => {
			if (!Z(this, OC) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Z(this, kC)) if (e.target.contains(t)) {
					this.callback(Z(this, DC).boundingClientRect);
					break;
				}
			}
		}, lC));
		let r = eC(e), i = TC(r, t), a = EC(e, Z(this, AC));
		xS(this, kC, r), xS(this, DC, new xC(e, t, n)), this.disconnect = () => {
			Z(this, OC) || (xS(this, OC, !0), i(), a(), Z(this, DC).disconnect());
		};
	}
};
DC = /* @__PURE__ */ new WeakMap(), OC = /* @__PURE__ */ new WeakMap(), kC = /* @__PURE__ */ new WeakMap(), AC = /* @__PURE__ */ new WeakMap();
function MC(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function NC(e) {
	try {
		MC(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function PC(e) {
	return !RS || !e ? !1 : e === MS(e).scrollingElement;
}
function FC(e) {
	let t = OS(e), n = PC(e) ? NS(e) : TS(e), r = t.visualViewport, i = PC(e) ? {
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
function IC(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = FC(e), { x: s, y: c } = t ?? {
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
var LC = class {
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
}, RC = new LC((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), zC = new LC((e) => setTimeout(e, 50)), BC = /* @__PURE__ */ new Map(), VC = BC.clear.bind(BC);
function HC(e, t = !1) {
	if (!t) return UC(e);
	let n = BC.get(e);
	return n || (n = UC(e), BC.set(e, n), zC.schedule(VC), n);
}
function UC(e) {
	return OS(e).getComputedStyle(e);
}
function WC(e, t = HC(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function GC(e, t = HC(e, !0)) {
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
var KC = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function qC(e, t = KC) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (kS(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && HS(t)) return o(t.host);
		if (!AS(t)) return jS(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = HC(t, !0);
		if (r && t === e || GC(t, s) && a.add(t), WC(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function JC(e) {
	let [t] = qC(e, { limit: 1 });
	return t ?? null;
}
function YC(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = $S(e);
	for (; r;) {
		if (r === t) return n;
		let e = TS(r), { x: i, y: a } = XC(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = $S(r);
	}
	return n;
}
function XC(e, t = TS(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (AS(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = HC(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function ZC(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function QC(e) {
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
function $C(e) {
	let { scale: t, transform: n, translate: r } = e, i = ZC(t), a = QC(r), o = ew(n);
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
function ew(e) {
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
var tw = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(tw || {}), nw = {
	x: .2,
	y: .2
}, rw = {
	x: 10,
	y: 10
};
function iw(e, t, n, r = 25, i = nw, a = rw) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = FC(e), p = YC(e), m = $C(HC(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new Hy(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function aw(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function ow(e, t = !1) {
	if (aw(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!AS(e)) return e.scrollIntoView();
	var n = JC(e);
	if (!AS(n)) return;
	let r = HC(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function sw(e, t, n) {
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
function cw(e, t, n) {
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
function lw({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function uw(e, t = HC(e).translate, n = !0) {
	if (n) {
		let t = wS(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = QC(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = QC(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var dw = new LC((e) => setTimeout(e, 0)), fw = /* @__PURE__ */ new Map(), pw = fw.clear.bind(fw);
function mw(e) {
	let t = e.ownerDocument, n = fw.get(t);
	if (n) return n;
	n = t.getAnimations(), fw.set(t, n), dw.schedule(pw);
	let r = n.filter((t) => CS(t.effect) && t.effect.target === e);
	return fw.set(e, r), n;
}
function hw(e, t) {
	let n = mw(e).filter((e) => {
		if (CS(e.effect)) {
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
var gw = class extends Hy {
	constructor(e, t = {}) {
		let { frameTransform: n = YC(e), ignoreTransforms: r, getBoundingClientRect: i = TS } = t, a = hw(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || BS()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = HC(e), p = $C(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = _w(e, f);
		a?.(), p && (d = cw(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = sw(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function _w(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = CS(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = $C({
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
function vw(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var yw = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (vw(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (vw(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (vw(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function bw(e) {
	return e ? e instanceof OS(e).Element || DS(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function xw(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = OS(e.target);
	return e instanceof t;
}
function Sw(e) {
	if (!e) return !1;
	let { PointerEvent: t } = OS(e.target);
	return e instanceof t;
}
function Cw(e) {
	if (!bw(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || ww(e);
}
function ww(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var Tw = {};
function Ew(e) {
	let t = Tw[e] == null ? 0 : Tw[e] + 1;
	return Tw[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var Dw = Object.create, Ow = Object.defineProperty, kw = Object.defineProperties, Aw = Object.getOwnPropertyDescriptor, jw = Object.getOwnPropertyDescriptors, Mw = Object.getOwnPropertySymbols, Nw = Object.prototype.hasOwnProperty, Pw = Object.prototype.propertyIsEnumerable, Fw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Iw = (e) => {
	throw TypeError(e);
}, Lw = (e, t, n) => t in e ? Ow(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Rw = (e, t) => {
	for (var n in t ||= {}) Nw.call(t, n) && Lw(e, n, t[n]);
	if (Mw) for (var n of Mw(t)) Pw.call(t, n) && Lw(e, n, t[n]);
	return e;
}, zw = (e, t) => kw(e, jw(t)), Bw = (e, t) => Ow(e, "name", {
	value: t,
	configurable: !0
}), Vw = (e, t) => {
	var n = {};
	for (var r in e) Nw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Mw) for (var r of Mw(e)) t.indexOf(r) < 0 && Pw.call(e, r) && (n[r] = e[r]);
	return n;
}, Hw = (e) => [
	,
	,
	,
	Dw(e?.[Fw("metadata")] ?? null)
], Uw = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Ww = (e) => e !== void 0 && typeof e != "function" ? Iw("Function expected") : e, Gw = (e, t, n, r, i) => ({
	kind: Uw[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Iw("Already initialized") : i.push(Ww(e || null))
}), Kw = (e, t) => Lw(t, Fw("metadata"), e[3]), qw = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Jw = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = Uw[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Aw(d < 4 ? i : {
		get [n]() {
			return Q(this, a);
		},
		set [n](e) {
			return Zw(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Bw(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Bw(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Gw(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Xw(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Q : Qw)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Zw(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Ww(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Iw("Object expected") : (Ww(o = s.get) && (v.get = o), Ww(o = s.set) && (v.set = o), Ww(o = s.init) && g.unshift(o));
	return d || Kw(e, i), v && Ow(i, n, v), p ? d ^ 4 ? a : v : i;
}, Yw = (e, t, n) => t.has(e) || Iw("Cannot " + n), Xw = (e, t) => Object(t) === t ? e.has(t) : Iw("Cannot use the \"in\" operator on this value"), Q = (e, t, n) => (Yw(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $ = (e, t, n) => t.has(e) ? Iw("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Zw = (e, t, n, r) => (Yw(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Qw = (e, t, n) => (Yw(e, t, "access private method"), n), $w = {
	role: "button",
	roleDescription: "draggable"
}, eT = "dnd-kit-description", tT = "dnd-kit-announcement", nT = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, rT = {
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
function iT(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function aT(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function oT(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var sT = ["dragover", "dragmove"], cT = class extends jb {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = eT, announcement: i = tT } = {}, announcements: a = rT, screenReaderInstructions: o = nT, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : Ew(r), l = n ? `${i}-${n}` : Ew(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => RC.schedule(m), g = lT(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, sT.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = aT(c, o.draggable), e.push(u)), d?.isConnected || (d = oT(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!iT(t) || BS()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", $w.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", $w.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && RC.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function lT(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var uT = class extends jb {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = Vv(() => MS(this.manager.dragOperation.source?.element));
		this.destroy = pv(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, dT = /* @__PURE__ */ new Map(), fT, pT, mT, hT, gT, _T, vT, yT, bT, xT, ST, CT, wT, TT = class extends (gT = Mb, hT = [K], mT = [Uv], pT = [Uv], fT = [Uv], gT) {
	constructor(e) {
		super(e), qw(vT, 5, this), $(this, bT), $(this, _T, /* @__PURE__ */ new Set()), $(this, yT, qw(vT, 8, this, /* @__PURE__ */ new Set())), qw(vT, 11, this), this.registerEffect(Qw(this, bT, xT));
	}
	register(e) {
		return Q(this, _T).add(e), () => {
			Q(this, _T).delete(e);
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
		return US(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return US(e?.element ?? null);
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
vT = Hw(gT), _T = /* @__PURE__ */ new WeakMap(), yT = /* @__PURE__ */ new WeakMap(), bT = /* @__PURE__ */ new WeakSet(), xT = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Q(this, _T)) t.push(Qw(this, bT, ST).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, ST = function(e, t) {
	let n = dT.get(e);
	n || (n = /* @__PURE__ */ new Map(), dT.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = kS(e) ? Qw(this, bT, CT).call(this, e, n, t) : Qw(this, bT, wT).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, CT = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && dT.delete(e);
		}
	};
}, wT = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (HS(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && dT.delete(e);
		}
	};
}, Jw(vT, 4, "additionalRoots", hT, TT, yT), Jw(vT, 2, "sourceRoot", mT, TT), Jw(vT, 2, "targetRoot", pT, TT), Jw(vT, 2, "roots", fT, TT), Kw(vT, TT);
var ET = "data-dnd-", DT = `${ET}dropping`, OT = "--dnd-", kT = `${ET}dragging`, AT = `${ET}placeholder`, jT = [
	kT,
	AT,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], MT = ["view-transition-name"], NT = `
  :is(:root,:host) [${kT}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${OT}top, 0px) !important;
    left: var(${OT}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${OT}width, auto);
    max-width: var(${OT}width, auto);
    height: var(${OT}height, auto);
    max-height: var(${OT}height, auto);
    transition: var(${OT}transition) !important;
  }

  :is(:root,:host) [${AT}] {
    transition: none;
  }

  :is(:root,:host) [${AT}='hidden'] {
    visibility: hidden;
  }

  [${kT}] * {
    pointer-events: none !important;
  }

  [${kT}]:not([${DT}]) {
    translate: var(${OT}translate) !important;
  }

  [${kT}][style*='${OT}scale'] {
    scale: var(${OT}scale) !important;
    transform-origin: var(${OT}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${kT}][popover]) {
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
  [${kT}]::backdrop, [${ET}overlay]:not([${kT}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function PT(e, t = "hidden") {
	return G(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = FT(n, r.registry.droppables), a = [], o = GS(n), { remove: s } = o;
		return IT(i, o, a), LT(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function FT(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${ET}${Ew("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function IT(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), XS.set(o, a), n.push(() => {
			XS.delete(o), r.proxy = void 0;
		});
	}
}
function LT(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(AT, t);
}
function RT(e, t) {
	return e === t ? !0 : $S(e) === $S(t);
}
function zT(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && bw(t) && t.hasAttribute("popover") && requestAnimationFrame(() => NC(t));
}
function BT(e) {
	return e.tagName === "TR";
}
function VT(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || jT.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (vw(e) && vw(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (MT.includes(e) || e.startsWith(OT)) continue;
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
function HT(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), NC(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), NC(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function UT(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new gw(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = VS();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, OT), (t = e.getElementMutationObserver()) == null || t.takeRecords(), BT(e.element) && BT(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new gw(e.feedbackElement);
	});
}
var WT = 250, GT = "ease";
function KT(e) {
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
	let { duration: r = WT, easing: i = GT } = n ?? {};
	NC(e.feedbackElement);
	let [, a] = wS(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: RT(e.feedbackElement, o) ? null : void 0 }, c = new gw(e.feedbackElement, s), l = QC(HC(e.feedbackElement).translate) ?? e.translate, u = new gw(o, s), d = Hy.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, OT), e.feedbackElement.setAttribute(DT, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), lw({
		element: e.feedbackElement,
		keyframes: zw(Rw(Rw({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: WS(OS(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(DT), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var qT, JT, YT, XT, ZT, QT, $T, eE = class extends (JT = jb, qT = [K], JT) {
	constructor(e, t) {
		super(e, t), $(this, ZT), $(this, XT, qw(YT, 8, this)), qw(YT, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(TT), r = n?.register(NT);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(Qw(this, ZT, QT).bind(this, n)), this.registerEffect(Qw(this, ZT, $T));
	}
};
YT = Hw(JT), XT = /* @__PURE__ */ new WeakMap(), ZT = /* @__PURE__ */ new WeakSet(), QT = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = US(t);
	if (n) return e.addRoot(n);
}, $T = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = YC(u), f = YC(s), p = !RT(s, u), m = new gw(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new yw(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: w, paddingBlockEnd: ee, paddingInlineStart: T, paddingInlineEnd: E, borderInlineStartWidth: D, borderInlineEndWidth: O, borderBlockStartWidth: te, borderBlockEndWidth: k } = HC(s), ne = c === "clone", re = C === "content-box", ie = re ? parseInt(T) + parseInt(E) + parseInt(D) + parseInt(O) : 0, ae = re ? parseInt(w) + parseInt(ee) + parseInt(te) + parseInt(k) : 0, A = c !== "move" && !this.overlay ? PT(a, ne ? "clone" : "hidden") : null, oe = G(() => xw(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = QC(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = G(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: se } = l, ce = v * d.scaleY + d.y, le = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: le,
		y: ce
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = se;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let ue = {
		x: l.coordinates.x - le,
		y: l.coordinates.y - ce
	}, de = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * se.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * se.y
	}, fe = {
		x: ue.x / d.scaleX + de.width,
		y: ue.y / d.scaleY + de.height
	}, pe = {
		left: y + fe.x,
		top: v + fe.y
	};
	u.setAttribute(kT, "true");
	let me = G(() => r.transform), he = l.translate ?? {
		x: 0,
		y: 0
	}, ge = me.x * d.scaleX + he.x, _e = me.y * d.scaleY + he.y, ve = VS();
	b.set({
		width: g - ie,
		height: _ - ae,
		top: pe.top + ve.y,
		left: pe.left + ve.x,
		translate: `${ge}px ${_e}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${se.x * 100}% ${se.y * 100}%`
	}, OT), A && (s.insertAdjacentElement("afterend", A), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), MC(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), NC(u), u.addEventListener("beforetoggle", zT));
	let ye, be, xe, Se = UT({
		placeholder: A,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: se,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: ie,
		heightOffset: ae,
		delta: fe,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => ye,
		getSavedCellWidths: () => xe,
		setSavedCellWidths: (e) => {
			xe = e;
		}
	}), Ce = new gw(u);
	G(() => r.shape = Ce);
	let we = OS(u), j = (e) => {
		this.manager.actions.stop({ event: e });
	}, M = WS(we);
	oe && we.addEventListener("resize", j), G(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), A && (Se.observe(A), ye = VT(s, A, ne), be = HT(s, A, u));
	let Te = t.dragOperation.source?.id, Ee = () => {
		if (!oe || Te == null) return;
		let e = t.registry.draggables.get(Te), n = e?.handle ?? e?.element;
		AS(n) && n.focus();
	}, De = () => {
		if (ye?.disconnect(), be?.disconnect(), Se.disconnect(), we.removeEventListener("resize", j), MC(u) && (u.removeEventListener("beforetoggle", zT), u.removeAttribute("popover")), u.removeAttribute(kT), b.reset(), xe && BT(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = xe[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		A && (t || A.parentElement !== u.parentElement) && u.isConnected && A.replaceWith(u), A?.remove();
	}, Oe = n?.dropAnimation, N = this, ke = Gv(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = G(() => r.modifiers), s = G(() => r.shape?.current), c = oe && !M ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, OT), ye?.takeRecords(), s && s !== Ce && a && !o.length) {
				let e = Vy.delta(i, a);
				r.shape = Hy.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new gw(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = N.dropAnimation === void 0 ? Oe : N.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				De();
				return;
			}
			t.renderer.rendering.then(() => {
				KT({
					element: s,
					feedbackElement: u,
					placeholder: A,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => ye,
					cleanup: De,
					restoreFocus: Ee
				});
			});
		}
	});
	return () => {
		De(), ke();
	};
}, Jw(YT, 4, "overlay", qT, eE, XT), Kw(YT, eE), eE.configure = Tb(eE);
var tE = eE, nE = !0, rE = !1, iE, aE, oE, sE = (oE = [K], tw.Forward), cE, lE, uE;
aE = (iE = [K], tw.Reverse);
var dE = class {
	constructor() {
		$(this, lE, qw(cE, 8, this, nE)), qw(cE, 11, this), $(this, uE, qw(cE, 12, this, nE)), qw(cE, 15, this);
	}
	isLocked(e) {
		return e === tw.Idle ? !1 : e == null ? this[tw.Forward] === nE && this[tw.Reverse] === nE : this[e] === nE;
	}
	unlock(e) {
		e !== tw.Idle && (this[e] = rE);
	}
};
cE = Hw(null), lE = /* @__PURE__ */ new WeakMap(), uE = /* @__PURE__ */ new WeakMap(), Jw(cE, 4, sE, oE, dE, lE), Jw(cE, 4, aE, iE, dE, uE), Kw(cE, dE);
var fE = [tw.Forward, tw.Reverse], pE = class {
	constructor() {
		this.x = new dE(), this.y = new dE();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, mE = class extends jb {
	constructor(e) {
		super(e);
		let t = rv(new pE()), n = null;
		this.signal = t, pv(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new pE();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: hE(i.x, n.x),
					y: hE(i.y, n.y)
				}, r = t.peek();
				U(() => {
					for (let t of Qy) for (let n of fE) e[t] === n && r[t].unlock(n);
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
function hE(e, t) {
	return Math.sign(e - t);
}
var gE, _E, vE, yE, bE, xE, SE = class extends (_E = Mb, gE = [K], _E) {
	constructor(e) {
		super(e), $(this, yE, qw(vE, 8, this, !1)), qw(vE, 11, this), $(this, bE), $(this, xE, () => {
			if (!Q(this, bE)) return;
			let { element: e, by: t } = Q(this, bE);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return Zw(this, bE, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: CE(n.x),
					y: CE(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = IC(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = iw(e, r, i);
						if (a) for (let e of Qy) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Q(this, bE)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return Zw(this, bE, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), RC.schedule(Q(this, xE)), !0;
							}
						}
					}
				}
			}
			return Zw(this, bE, void 0), !1;
		};
		let t = null, n = null, r = Vv(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = JS(US(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = Vv(() => {
			let t = r.value, { documentElement: i } = MS(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = qC(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = qC(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, Hv);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new mE(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !xw(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
vE = Hw(_E), yE = /* @__PURE__ */ new WeakMap(), bE = /* @__PURE__ */ new WeakMap(), xE = /* @__PURE__ */ new WeakMap(), Jw(vE, 4, "autoScrolling", gE, SE, yE), Kw(vE, SE);
function CE(e) {
	return e > 0 ? tw.Forward : e < 0 ? tw.Reverse : tw.Idle;
}
var wE = new class {
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
}), TE = 10, EE = class extends jb {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(SE);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = pv(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => wE.schedule(n.scroll), TE);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, DE = {
	capture: !0,
	passive: !0
}, OE, kE = class extends Mb {
	constructor(e) {
		super(e), $(this, OE), this.handleScroll = () => {
			Q(this, OE) ?? Zw(this, OE, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), Zw(this, OE, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = pv(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, DE), () => {
					e.removeEventListener("scroll", this.handleScroll, DE);
				};
			}
		});
	}
};
OE = /* @__PURE__ */ new WeakMap();
var AE = class extends jb {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = pv(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), jE(), document.addEventListener("selectionchange", jE, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", jE, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function jE() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var ME = Object.freeze({
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
}), NE, PE = class extends Bx {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, $(this, NE, []), this.listeners = new QS(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !bw(e.target) || t.disabled) return;
			let { keyboardCodes: r = ME.keyboardCodes, preventActivation: i = ME.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return pv(() => {
			let n = e.handle ?? e.element, r = (n) => {
				xw(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), ow(r);
		let { center: i } = new gw(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = MS(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Q(this, NE).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = ME.keyboardCodes } = n ?? {};
		if (IE(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = IE(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		IE(e, r.up) ? this.handleMove("up", e) : IE(e, r.down) && this.handleMove("down", e), IE(e, r.left) ? this.handleMove("left", e) : IE(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? ME.offset;
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
		let e = this.manager.registry.plugins.get(EE);
		e?.disabled === !1 && (e.disable(), Q(this, NE).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Q(this, NE).forEach((e) => e()), Zw(this, NE, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
NE = /* @__PURE__ */ new WeakMap(), PE.configure = Tb(PE), PE.defaults = ME;
var FE = PE;
function IE(e, t) {
	return t.includes(e.code);
}
var LE, RE = class extends Ux {
	constructor() {
		super(...arguments), $(this, LE);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Zw(this, LE, LS(e));
				break;
			case "pointermove":
				if (!Q(this, LE)) return;
				let { x: t, y: n } = LS(e), r = {
					x: t - Q(this, LE).x,
					y: n - Q(this, LE).y
				}, { tolerance: i } = this.options;
				if (i && Xy(r, i)) {
					this.abort();
					return;
				}
				Xy(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Zw(this, LE, void 0);
	}
};
LE = /* @__PURE__ */ new WeakMap();
var zE, BE, VE = class extends Ux {
	constructor() {
		super(...arguments), $(this, zE), $(this, BE);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				Zw(this, BE, LS(e)), Zw(this, zE, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Q(this, BE)) return;
				let { x: t, y: n } = LS(e);
				Xy({
					x: t - Q(this, BE).x,
					y: n - Q(this, BE).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Q(this, zE) && (clearTimeout(Q(this, zE)), Zw(this, BE, void 0), Zw(this, zE, void 0));
	}
};
zE = /* @__PURE__ */ new WeakMap(), BE = /* @__PURE__ */ new WeakMap();
var HE = class {};
HE.Delay = VE, HE.Distance = RE;
var UE = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && bw(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new HE.Delay({
			value: 250,
			tolerance: 5
		})] : Cw(r) && !e.defaultPrevented ? [new HE.Delay({
			value: 200,
			tolerance: 0
		})] : [new HE.Delay({
			value: 200,
			tolerance: 10
		}), new HE.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !bw(n) || t.handle?.contains(n) ? !1 : ZS(n);
	}
}), WE, GE = class extends Bx {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, $(this, WE, /* @__PURE__ */ new Set()), this.listeners = new QS(), this.latest = {
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
		let { activationConstraints: r = UE.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return pv(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				Sw(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (ZE(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !bw(e.target) || t.disabled || qE(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = UE.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = AS(i) && i.draggable && i.getAttribute("draggable") === "true", o = YC(t.element), { x: s, y: c } = LS(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new Vx(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = zS(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : JE,
				options: { capture: !0 }
			}
		]);
		Q(this, WE).add(() => {
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
			let n = LS(e), r = YC(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, RC.schedule(this.handleMove);
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
		let i = MS(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = bw(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: JE,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: JE
			},
			{
				type: "contextmenu",
				listener: JE
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Q(this, WE).add(o);
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
		}, Q(this, WE).forEach((e) => e()), Q(this, WE).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
WE = /* @__PURE__ */ new WeakMap(), GE.configure = Tb(GE), GE.defaults = UE;
var KE = GE;
function qE(e) {
	return "sensor" in e;
}
function JE(e) {
	e.preventDefault();
}
function YE() {}
var XE = /* @__PURE__ */ new WeakSet();
function ZE(e) {
	!e || XE.has(e) || (e.addEventListener("touchmove", YE, {
		capture: !1,
		passive: !1
	}), XE.add(e));
}
var QE = {
	modifiers: [],
	plugins: [
		cT,
		EE,
		uT,
		tE,
		AE
	],
	sensors: [KE, FE]
}, $E = class extends pS {
	constructor(e = {}) {
		let t = fS(e.plugins, QE.plugins), n = fS(e.sensors, QE.sensors), r = fS(e.modifiers, QE.modifiers);
		super(zw(Rw({}, e), {
			plugins: [
				kE,
				SE,
				TT,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, eD, tD, nD, rD, iD, aD, oD, sD, cD = class extends (rD = Tx, nD = [K], tD = [K], eD = [K], rD) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = Vw(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(Rw({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(Eb) ?? [...e.sensors]).map((t) => {
				let n = t instanceof Bx ? t : e.registry.register(t.plugin), r = t instanceof Bx ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), $(this, aD, qw(iD, 8, this)), qw(iD, 11, this), $(this, oD, qw(iD, 12, this)), qw(iD, 15, this), $(this, sD, qw(iD, 16, this)), qw(iD, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
iD = Hw(rD), aD = /* @__PURE__ */ new WeakMap(), oD = /* @__PURE__ */ new WeakMap(), sD = /* @__PURE__ */ new WeakMap(), Jw(iD, 4, "handle", nD, cD, aD), Jw(iD, 4, "element", tD, cD, oD), Jw(iD, 4, "feedback", eD, cD, sD), Kw(iD, cD);
var lD, uD, dD, fD, pD, mD, hD, gD, _D, vD, yD = class extends (dD = zx, uD = [K], lD = [K], dD) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = Vw(n, ["element", "effects"]);
		let { collisionDetector: o = gS } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new gw(n), i = G(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = rv(!1);
		super(zw(Rw({}, a), {
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
						let t = new jC(e, s);
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
		}), t), $(this, _D), $(this, pD, qw(fD, 8, this)), qw(fD, 11, this), $(this, vD, qw(fD, 12, this)), qw(fD, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		Zw(this, _D, e, gD);
	}
	get element() {
		return this.proxy ?? Q(this, _D, hD);
	}
};
fD = Hw(dD), pD = /* @__PURE__ */ new WeakMap(), _D = /* @__PURE__ */ new WeakSet(), vD = /* @__PURE__ */ new WeakMap(), mD = Jw(fD, 20, "#element", uD, _D, pD), hD = mD.get, gD = mD.set, Jw(fD, 4, "proxy", lD, yD, vD), Kw(fD, yD);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var bD = Object.create, xD = Object.defineProperty, SD = Object.defineProperties, CD = Object.getOwnPropertyDescriptor, wD = Object.getOwnPropertyDescriptors, TD = Object.getOwnPropertySymbols, ED = Object.prototype.hasOwnProperty, DD = Object.prototype.propertyIsEnumerable, OD = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), kD = (e) => {
	throw TypeError(e);
}, AD = (e, t, n) => t in e ? xD(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, jD = (e, t) => {
	for (var n in t ||= {}) ED.call(t, n) && AD(e, n, t[n]);
	if (TD) for (var n of TD(t)) DD.call(t, n) && AD(e, n, t[n]);
	return e;
}, MD = (e, t) => SD(e, wD(t)), ND = (e, t) => {
	var n = {};
	for (var r in e) ED.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && TD) for (var r of TD(e)) t.indexOf(r) < 0 && DD.call(e, r) && (n[r] = e[r]);
	return n;
}, PD = (e) => [
	,
	,
	,
	bD(null)
], FD = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], ID = (e) => e !== void 0 && typeof e != "function" ? kD("Function expected") : e, LD = (e, t, n, r, i) => ({
	kind: FD[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? kD("Already initialized") : i.push(ID(e || null))
}), RD = (e, t) => AD(t, OD("metadata"), e[3]), zD = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, BD = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = FD[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, CD({
		get [n]() {
			return HD(this, a);
		},
		set [n](e) {
			return WD(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = LD(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? ID(s) && (v[h] = s) : typeof s != "object" || !s ? kD("Object expected") : (ID(o = s.get) && (v.get = o), ID(o = s.set) && (v.set = o), ID(o = s.init) && g.unshift(o));
	return v && xD(i, n, v), i;
}, VD = (e, t, n) => t.has(e) || kD("Cannot " + n), HD = (e, t, n) => (VD(e, t, "read from private field"), t.get(e)), UD = (e, t, n) => t.has(e) ? kD("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), WD = (e, t, n, r) => (VD(e, t, "write to private field"), t.set(e, n), n);
function GD(e) {
	return e instanceof EO || e instanceof TO;
}
var KD = 10, qD = class extends jb {
	constructor(e) {
		super(e);
		let t = pv(() => {
			let { dragOperation: t } = e;
			if (xw(t.activatorEvent) && GD(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(SE);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!xw(e.nativeEvent) || !GD(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = JD(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				U(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && GD(e) || !e.element) continue;
						let n = e.shape, r = new gw(e.element, { getBoundingClientRect: (e) => IS(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + KD < r.center.y || s == "up" && u.y - KD > r.center.y || s == "left" && u.x - KD > r.center.x || s == "right" && u.x + KD < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, _S);
				U(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !GD(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					ow(u);
					let d = new gw(u);
					if (!d) return;
					let f = Hy.delta(d, Hy.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function JD(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var YD = Object.defineProperty, XD = Object.defineProperties, ZD = Object.getOwnPropertyDescriptors, QD = Object.getOwnPropertySymbols, $D = Object.prototype.hasOwnProperty, eO = Object.prototype.propertyIsEnumerable, tO = (e, t, n) => t in e ? YD(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, nO = (e, t) => {
	for (var n in t ||= {}) $D.call(t, n) && tO(e, n, t[n]);
	if (QD) for (var n of QD(t)) eO.call(t, n) && tO(e, n, t[n]);
	return e;
}, rO = (e, t) => XD(e, ZD(t));
function iO(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function aO(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function oO(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (aO(r)) {
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
	if (c === -1 && aO(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return rO(nO({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return rO(nO({}, e), {
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
		if (l != null && l === d && c === u && aO(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return rO(nO({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return rO(nO({}, e), {
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
	if (l === d) return rO(nO({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return rO(nO({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function sO(e, t) {
	return oO(e, t, iO);
}
var cO = "__default__", lO = class extends jb {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof EO) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(fO(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!GD(i) || !GD(a) || i.sortable === a.sortable) return;
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
					let f = fO(c), p = s ? f : fO(l), m = i.sortable.group ?? cO, h = a.sortable.group ?? cO, g = {
						[m]: f,
						[h]: p
					}, _ = sO(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), uO(u, v, d, y), U(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			GD(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = fO(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (uO(n, a.index, o, i.index), U(() => {
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
function uO(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function dO(e, t) {
	return e.index - t.index;
}
function fO(e) {
	return Array.from(e).sort(dO);
}
var pO = [qD, lO], mO = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, hO = new hy(), gO, _O = [K], vO, yO, bO, xO, SO, CO;
gO = [K];
var wO = class {
	constructor(e, t) {
		UD(this, yO, zD(vO, 8, this)), zD(vO, 11, this), UD(this, bO), UD(this, xO), UD(this, SO, zD(vO, 12, this)), zD(vO, 15, this), UD(this, CO), this.register = () => (U(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			U(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			U(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = mO, plugins: l = pO } = n, u = ND(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new EO(u, t, this), this.draggable = new TO(MD(jD({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && hO.clear(this.manager), e?.dragging && hO.set(this.manager, this.id, G(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = HD(this, xO), i = HD(this, bO);
					(e !== r || t !== i) && (WD(this, xO, e), WD(this, bO, t), this.animate());
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
		}), t, this), WD(this, CO, u.element), this.manager = t, this.index = a, WD(this, xO, a), this.group = i, WD(this, bO, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return hO.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return hO.get(this.manager, this.id)?.initialGroup ?? this.group;
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
				}, { translate: o } = HC(r), s = uw(r, o, !1), c = uw(r, o);
				if (a.x || a.y) {
					let n = WS(OS(r)) ? MD(jD({}, t), { duration: 0 }) : t;
					lw({
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
		U(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		U(() => {
			let t = HD(this, CO), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), WD(this, CO, e);
		});
	}
	get element() {
		let e = HD(this, CO);
		if (e) return XS.get(e) ?? e ?? this.droppable.element;
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
		U(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		U(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		U(() => {
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
		this.droppable.collisionDetector = e ?? gS;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		U(() => {
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
vO = PD(), yO = /* @__PURE__ */ new WeakMap(), bO = /* @__PURE__ */ new WeakMap(), xO = /* @__PURE__ */ new WeakMap(), SO = /* @__PURE__ */ new WeakMap(), CO = /* @__PURE__ */ new WeakMap(), BD(vO, 4, "index", _O, wO, yO), BD(vO, 4, "group", gO, wO, SO), RD(vO, wO);
var TO = class extends cD {
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
}, EO = class extends yD {
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
function DO(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function OO(e) {
	if (e != null) return DO(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var kO = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j.useLayoutEffect : j.useEffect;
function AO() {
	let e = (0, j.useState)(0)[1];
	return (0, j.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function jO(e, t) {
	let n = (0, j.useRef)(/* @__PURE__ */ new Map()), r = AO();
	return kO(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return pv(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = G(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Ii.flushSync)(r) : r());
		});
	}, [e]), (0, j.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function MO(e, t) {
	e();
}
function NO(e) {
	let t = (0, j.useRef)(e);
	return kO(() => {
		t.current = e;
	}, [e]), t;
}
function PO(e, t, n = j.useEffect, r = Object.is) {
	let i = (0, j.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function FO(e, t) {
	let n = (0, j.useRef)(OO(e));
	kO(() => {
		let r = OO(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var IO = Object.getOwnPropertySymbols, LO = Object.prototype.hasOwnProperty, RO = Object.prototype.propertyIsEnumerable, zO = (e, t) => {
	var n = {};
	for (var r in e) LO.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && IO) for (var r of IO(e)) t.indexOf(r) < 0 && RO.call(e, r) && (n[r] = e[r]);
	return n;
}, BO = (0, j.createContext)(new $E()), VO = (0, j.memo)((0, j.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, j.useState)(0), i = (0, j.useRef)(null), a = (0, j.useRef)(null), o = (0, j.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, j.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return kO(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, j.useImperativeHandle)(t, () => o), null;
})), HO = [void 0, Hv];
function UO(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = zO(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, j.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = fS(d, QE.plugins), h = fS(p, QE.sensors), g = fS(f, QE.modifiers), _ = NO(i), v = NO(a), y = NO(s), b = NO(o), x = NO(c), S = NO(r), C = WO(() => l.manager ?? new $E(l));
	return (0, j.useEffect)(() => {
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
	}, [C]), PO(m, () => C && (C.plugins = m), ...HO), PO(h, () => C && (C.sensors = h), ...HO), PO(g, () => C && (C.modifiers = g), ...HO), /* @__PURE__ */ (0, R.jsxs)(BO.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, R.jsx)(VO, {
			ref: u,
			children: n
		}), n]
	});
}
function WO(e) {
	let t = (0, j.useRef)(null);
	return t.current ||= e(), (0, j.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function GO() {
	return (0, j.useContext)(BO);
}
function KO(e) {
	let t = GO() ?? void 0, [n] = (0, j.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), kO(n.register, [t, n]), n;
}
var qO = Object.create, JO = Object.defineProperty, YO = Object.getOwnPropertyDescriptor, XO = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ZO = (e) => {
	throw TypeError(e);
}, QO = (e, t, n) => t in e ? JO(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, $O = (e) => [
	,
	,
	,
	qO(e?.[XO("metadata")] ?? null)
], ek = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], tk = (e) => e !== void 0 && typeof e != "function" ? ZO("Function expected") : e, nk = (e, t, n, r, i) => ({
	kind: ek[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? ZO("Already initialized") : i.push(tk(e || null))
}), rk = (e, t) => QO(t, XO("metadata"), e[3]), ik = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, ak = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = ek[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, YO(i, n)), _ = r.length - 1; _ >= 0; _--) c = nk(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, tk(o) && (g[m] = o);
	return g && JO(i, n, g), i;
}, ok = (e, t, n) => t.has(e) || ZO("Cannot " + n), sk = (e, t, n) => (ok(e, t, "read from private field"), t.get(e)), ck = (e, t, n) => t.has(e) ? ZO("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), lk = (e, t, n, r) => (ok(e, t, "write to private field"), t.set(e, n), n), uk = class e {
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
}, dk, fk, pk, mk, hk, gk = class extends (pk = fy, fk = [Uv], dk = [Uv], pk) {
	constructor(e) {
		let t = uk.from(e);
		super(t, (e, t) => uk.equals(e, t)), ik(hk, 5, this), ck(this, mk, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return uk.delta(this.current, this.initial);
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
		let { current: t } = this, n = uk.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - sk(this, mk), o = (e) => Math.round(e / a * 100);
		U(() => {
			lk(this, mk, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(uk.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
hk = $O(pk), mk = /* @__PURE__ */ new WeakMap(), ak(hk, 2, "delta", fk, gk), ak(hk, 2, "direction", dk, gk), rk(hk, gk);
var _k = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(_k || {});
Object.values(_k);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var vk = Object.defineProperty, yk = Object.defineProperties, bk = Object.getOwnPropertyDescriptors, xk = Object.getOwnPropertySymbols, Sk = Object.prototype.hasOwnProperty, Ck = Object.prototype.propertyIsEnumerable, wk = (e, t, n) => t in e ? vk(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Tk = (e, t) => {
	for (var n in t ||= {}) Sk.call(t, n) && wk(e, n, t[n]);
	if (xk) for (var n of xk(t)) Ck.call(t, n) && wk(e, n, t[n]);
	return e;
}, Ek = (e, t) => yk(e, bk(t));
function Dk(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = Tk(Tk({}, mO), e.transition), _ = KO((t) => new wO(Ek(Tk({}, e), {
		transition: g,
		register: !1,
		handle: OO(s),
		element: OO(o),
		target: OO(m),
		feedback: d
	}), t)), v = jO(_, Ok);
	return PO(i, () => _.id = i), kO(() => {
		U(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), PO(h, () => _.type = h), PO(t, () => _.accept = t, void 0, Hv), PO(a, () => a && (_.data = a)), PO(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, MO), FO(s, (e) => _.handle = e), FO(o, (e) => _.element = e), FO(m, (e) => _.target = e), PO(u, () => _.disabled = u === !0), PO(p, () => _.sensors = p), PO(n, () => _.collisionDetector = n), PO(r, () => _.collisionPriority = r), PO(d, () => _.feedback = d ?? "default"), PO(g, () => _.transition = g, void 0, Hv), PO(f, () => _.modifiers = f, void 0, Hv), PO(e.alignment, () => _.alignment = e.alignment), {
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
		handleRef: (0, j.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, j.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, j.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, j.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function Ok(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var kk = Object.defineProperty, Ak = Object.defineProperties, jk = Object.getOwnPropertyDescriptors, Mk = Object.getOwnPropertySymbols, Nk = Object.prototype.hasOwnProperty, Pk = Object.prototype.propertyIsEnumerable, Fk = (e, t, n) => t in e ? kk(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ik = (e, t) => {
	for (var n in t ||= {}) Nk.call(t, n) && Fk(e, n, t[n]);
	if (Mk) for (var n of Mk(t)) Pk.call(t, n) && Fk(e, n, t[n]);
	return e;
}, Lk = (e, t) => Ak(e, jk(t));
function Rk(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function zk(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Bk(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (zk(r)) {
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
	if (c === -1 && zk(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Lk(Ik({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Lk(Ik({}, e), {
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
		if (l != null && l === d && c === u && zk(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Lk(Ik({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Lk(Ik({}, e), {
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
	if (l === d) return Lk(Ik({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Lk(Ik({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Vk(e, t) {
	return Bk(e, t, Rk);
}
//#endregion
//#region src/card-carousel/studio-ui/utils.ts
function Hk(e = []) {
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
function Uk({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = Dk({
		id: e,
		index: n
	});
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		ref: s,
		className: "d-flex justify-content-between p-2 border rounded-sm" + (r ? " bg-light-300" : ""),
		onClick: a,
		children: [/* @__PURE__ */ (0, R.jsx)("div", { children: t }), /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "d-flex align-items-center",
			children: [i && /* @__PURE__ */ (0, R.jsx)("button", {
				className: "btn btn-link p-0 text-danger",
				"aria-label": "Delete card",
				onClick: (e) => {
					e.stopPropagation(), o();
				},
				children: /* @__PURE__ */ (0, R.jsx)("span", {
					className: "material-icons-outlined",
					children: "delete_outline"
				})
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: "material-icons-outlined text-light-600",
				children: "drag_indicator"
			})]
		})]
	});
}
function Wk() {
	let { values: e, setFieldValue: t } = Ah(), [n, r] = (0, j.useState)(0);
	return /* @__PURE__ */ (0, R.jsx)(UO, {
		onDragOver: (n) => t("cards", Vk(e.cards, n)),
		children: /* @__PURE__ */ (0, R.jsx)(lg, {
			name: "cards",
			children: ({ push: t, remove: i }) => /* @__PURE__ */ (0, R.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, R.jsx)(D, {
						variant: "primary",
						iconBefore: Ln,
						onClick: () => {
							t(Hk(e.cards)), r(e.cards.length);
						},
						children: "Add Card"
					}), /* @__PURE__ */ (0, R.jsx)("div", {
						className: "mt-4",
						children: e.cards.map((t, a) => /* @__PURE__ */ (0, R.jsx)(Uk, {
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
				}), /* @__PURE__ */ (0, R.jsx)("div", {
					className: "col-9 p-4",
					children: e.cards.length > 0 && /* @__PURE__ */ (0, R.jsx)(W_, { cardIndex: n })
				})]
			})
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/ModalFooter.tsx
function Gk({ runtime: e, showingEditor: t, onContinue: n }) {
	return /* @__PURE__ */ (0, R.jsx)(fl, {
		position: "bottom",
		className: "p-4 border-top card-carousel-editor-modal-footer justify-content-end",
		children: /* @__PURE__ */ (0, R.jsxs)(_e, {
			direction: "horizontal",
			gap: 4,
			children: [/* @__PURE__ */ (0, R.jsx)(D, {
				variant: "light",
				className: "action-button",
				onClick: () => e.notify("cancel", {}),
				type: "button",
				children: "Cancel"
			}), t ? /* @__PURE__ */ (0, R.jsx)(D, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, R.jsx)(D, {
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
function Kk({ runtime: e, saveUrl: t, initData: n }) {
	let [r, i] = (0, j.useState)(!1);
	return /* @__PURE__ */ (0, R.jsx)(Gh, {
		initialValues: n,
		onSubmit: (n) => {
			d({
				saveUrl: t,
				data: n,
				runtime: e,
				errorMessage: "Failed to save the card carousel."
			});
		},
		children: /* @__PURE__ */ (0, R.jsx)(eg, { children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "studio-ui d-flex flex-column justify-content-between",
			children: [r ? /* @__PURE__ */ (0, R.jsx)(Wk, {}) : /* @__PURE__ */ (0, R.jsx)(ug, {}), /* @__PURE__ */ (0, R.jsx)(Gk, {
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
var qk = ".icon-selector.dropdown-toggle:after{display:none}.icon-list-popup{background-color:var(--pgn-color-body-bg);width:292px;min-height:242px;max-height:300px;overflow:scroll}button:not(:disabled).icon-symbol{background-color:var(--pgn-color-body-bg);width:auto;color:var(--pgn-color-gray-600);border:0}button:not(:disabled).icon-symbol:hover{background-color:var(--pgn-color-light);color:var(--pgn-color-primary)}button:not(:disabled).icon-symbol:focus{background-color:var(--pgn-color-light);color:var(--pgn-color-primary);border:0}.card-carousel-editor-modal-footer{background-color:var(--pgn-color-card-bg-base)}.xblock-root .input-group .pgn__form-control-decorator-group{margin-right:0}.xblock-root .input-group .pgn__form-control-decorator-group .form-control{border-top-right-radius:0;border-bottom-right-radius:0}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.xblock-root,.xblock-root .react-studio-block,.xblock-root .react-studio-block .container-fluid{height:100%}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block{margin-bottom:0!important}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}", Jk = (e, t, n) => {
	let r = s(e), i = t.handlerUrl(e, "studio_save");
	(!n.data.cards || !n.data.cards.length) && (n.data.cards = [Hk()]);
	let a = r.parentElement?.parentElement;
	a && (a.style.minHeight = "635px", a.style.maxHeight = "calc(100vh - 51px)", a.style.overflowY = "scroll"), C({
		runtime: t,
		element: e,
		config: n.config,
		styles: qk
	})(/* @__PURE__ */ (0, R.jsx)(Jl.Provider, {
		value: n.config,
		children: /* @__PURE__ */ (0, R.jsx)(Kk, {
			saveUrl: i,
			runtime: t,
			initData: n.data
		})
	}));
};
//#endregion
export { Jk as renderBlock };
