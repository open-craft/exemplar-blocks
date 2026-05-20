import { A as e, B as t, C as n, D as r, E as i, F as a, H as o, I as s, L as c, M as l, N as u, O as d, P as f, R as p, S as m, T as h, V as g, _, a as v, b as y, d as b, f as x, g as S, h as C, i as ee, j as w, k as te, l as ne, m as T, n as re, o as ie, p as ae, r as oe, t as se, u as ce, v as le, w as E, x as D, y as ue, z as de } from "./Stack-DooHILoh.js";
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var O = /* @__PURE__ */ o(n()), k = /* @__PURE__ */ o(d()), fe = /* @__PURE__ */ o(f()), A = /* @__PURE__ */ o(t()), pe = /-(.)/g;
function me(e) {
	return e.replace(pe, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var he = [
	"className",
	"bsPrefix",
	"as"
], ge = function(e) {
	return e[0].toUpperCase() + me(e).slice(1);
};
function _e(e, t) {
	var n = t === void 0 ? {} : t, a = n.displayName, o = a === void 0 ? ge(e) : a, s = n.Component, c = n.defaultProps, l = /* @__PURE__ */ A.forwardRef(function(t, n) {
		var a = t.className, o = t.bsPrefix, c = t.as, l = c === void 0 ? s || "div" : c, u = i(t, he), d = E(o, e);
		return /* @__PURE__ */ A.createElement(l, r({
			ref: n,
			className: (0, k.default)(a, d)
		}, u));
	});
	return l.defaultProps = c, l.displayName = o, l;
}
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var ve = /* @__PURE__ */ g(((e, t) => {
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
(/* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(ve());
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
var ye = [
	"as",
	"className",
	"type",
	"tooltip"
], be = {
	type: O.default.string,
	tooltip: O.default.bool,
	as: O.default.elementType
}, xe = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.as, a = n === void 0 ? "div" : n, o = e.className, s = e.type, c = s === void 0 ? "valid" : s, l = e.tooltip, u = l === void 0 ? !1 : l, d = i(e, ye);
	return /* @__PURE__ */ A.createElement(a, r({}, d, {
		ref: t,
		className: (0, k.default)(o, c + "-" + (u ? "tooltip" : "feedback"))
	}));
});
xe.displayName = "Feedback", xe.propTypes = be;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var Se = /* @__PURE__ */ A.createContext({ controlId: void 0 }), Ce = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], we = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.id, a = e.bsPrefix, o = e.bsCustomPrefix, s = e.className, c = e.type, l = c === void 0 ? "checkbox" : c, u = e.isValid, d = u === void 0 ? !1 : u, f = e.isInvalid, p = f === void 0 ? !1 : f, m = e.isStatic, h = e.as, g = h === void 0 ? "input" : h, _ = i(e, Ce), v = (0, A.useContext)(Se), y = v.controlId, b = v.custom ? [o, "custom-control-input"] : [a, "form-check-input"], x = b[0], S = b[1];
	return a = E(x, S), /* @__PURE__ */ A.createElement(g, r({}, _, {
		ref: t,
		type: l,
		id: n || y,
		className: (0, k.default)(s, a, d && "is-valid", p && "is-invalid", m && "position-static")
	}));
});
we.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var Te = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Ee = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.htmlFor, c = i(e, Te), l = (0, A.useContext)(Se), u = l.controlId, d = l.custom ? [a, "custom-control-label"] : [n, "form-check-label"], f = d[0], p = d[1];
	return n = E(f, p), /* @__PURE__ */ A.createElement("label", r({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, k.default)(o, n)
	}));
});
Ee.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var De = [
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
], Oe = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.id, a = e.bsPrefix, o = e.bsCustomPrefix, s = e.inline, c = s === void 0 ? !1 : s, l = e.disabled, u = l === void 0 ? !1 : l, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.feedbackTooltip, g = h === void 0 ? !1 : h, _ = e.feedback, v = e.className, y = e.style, b = e.title, x = b === void 0 ? "" : b, S = e.type, C = S === void 0 ? "checkbox" : S, ee = e.label, w = e.children, te = e.custom, ne = e.as, T = ne === void 0 ? "input" : ne, re = i(e, De), ie = C === "switch" ? !0 : te, ae = ie ? [o, "custom-control"] : [a, "form-check"], oe = ae[0], se = ae[1];
	a = E(oe, se);
	var ce = (0, A.useContext)(Se).controlId, le = (0, A.useMemo)(function() {
		return {
			controlId: n || ce,
			custom: ie
		};
	}, [
		ce,
		ie,
		n
	]), D = ie || ee != null && ee !== !1 && !w, ue = /* @__PURE__ */ A.createElement(we, r({}, re, {
		type: C === "switch" ? "checkbox" : C,
		ref: t,
		isValid: f,
		isInvalid: m,
		isStatic: !D,
		disabled: u,
		as: T
	}));
	return /* @__PURE__ */ A.createElement(Se.Provider, { value: le }, /* @__PURE__ */ A.createElement("div", {
		style: y,
		className: (0, k.default)(v, a, ie && "custom-" + C, c && a + "-inline")
	}, w || /* @__PURE__ */ A.createElement(A.Fragment, null, ue, D && /* @__PURE__ */ A.createElement(Ee, { title: x }, ee), (f || m) && /* @__PURE__ */ A.createElement(xe, {
		type: f ? "valid" : "invalid",
		tooltip: g
	}, _))));
});
Oe.displayName = "FormCheck", Oe.Input = we, Oe.Label = Ee;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var ke = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], Ae = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.id, a = e.bsPrefix, o = e.bsCustomPrefix, s = e.className, c = e.isValid, l = e.isInvalid, u = e.lang, d = e.as, f = d === void 0 ? "input" : d, p = i(e, ke), m = (0, A.useContext)(Se), h = m.controlId, g = m.custom, _ = "file", v = g ? [o, "custom-file-input"] : [a, "form-control-file"], y = v[0], b = v[1];
	return a = E(y, b), /* @__PURE__ */ A.createElement(f, r({}, p, {
		ref: t,
		id: n || h,
		type: _,
		lang: u,
		className: (0, k.default)(s, a, c && "is-valid", l && "is-invalid")
	}));
});
Ae.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var je = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], Me = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.bsCustomPrefix, o = e.className, s = e.htmlFor, c = i(e, je), l = (0, A.useContext)(Se), u = l.controlId, d = l.custom ? [a, "custom-file-label"] : [n, "form-file-label"], f = d[0], p = d[1];
	return n = E(f, p), /* @__PURE__ */ A.createElement("label", r({}, c, {
		ref: t,
		htmlFor: s || u,
		className: (0, k.default)(o, n),
		"data-browse": c["data-browse"]
	}));
});
Me.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var Ne = [
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
], Pe = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.id, a = e.bsPrefix, o = e.bsCustomPrefix, s = e.disabled, c = s === void 0 ? !1 : s, l = e.isValid, u = l === void 0 ? !1 : l, d = e.isInvalid, f = d === void 0 ? !1 : d, p = e.feedbackTooltip, m = p === void 0 ? !1 : p, h = e.feedback, g = e.className, _ = e.style, v = e.label, y = e.children, b = e.custom, x = e.lang, S = e["data-browse"], C = e.as, ee = C === void 0 ? "div" : C, w = e.inputAs, te = w === void 0 ? "input" : w, ne = i(e, Ne), T = b ? [o, "custom"] : [a, "form-file"], re = T[0], ie = T[1];
	a = E(re, ie);
	var ae = "file", oe = (0, A.useContext)(Se).controlId, se = (0, A.useMemo)(function() {
		return {
			controlId: n || oe,
			custom: b
		};
	}, [
		oe,
		b,
		n
	]), ce = v != null && v !== !1 && !y, le = /* @__PURE__ */ A.createElement(Ae, r({}, ne, {
		ref: t,
		isValid: u,
		isInvalid: f,
		disabled: c,
		as: te,
		lang: x
	}));
	return /* @__PURE__ */ A.createElement(Se.Provider, { value: se }, /* @__PURE__ */ A.createElement(ee, {
		style: _,
		className: (0, k.default)(g, a, b && "custom-" + ae)
	}, y || /* @__PURE__ */ A.createElement(A.Fragment, null, b ? /* @__PURE__ */ A.createElement(A.Fragment, null, le, ce && /* @__PURE__ */ A.createElement(Me, { "data-browse": S }, v)) : /* @__PURE__ */ A.createElement(A.Fragment, null, ce && /* @__PURE__ */ A.createElement(Me, null, v), le), (u || f) && /* @__PURE__ */ A.createElement(xe, {
		type: u ? "valid" : "invalid",
		tooltip: m
	}, h))));
});
Pe.displayName = "FormFile", Pe.Input = Ae, Pe.Label = Me, ce();
var Fe = [
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
], Ie = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.bsCustomPrefix, o = e.type, s = e.size, c = e.htmlSize, l = e.id, u = e.className, d = e.isValid, f = d === void 0 ? !1 : d, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.plaintext, g = e.readOnly, _ = e.custom, v = e.as, y = v === void 0 ? "input" : v, b = i(e, Fe), x = (0, A.useContext)(Se).controlId, S = _ ? [a, "custom"] : [n, "form-control"], C = S[0], ee = S[1];
	n = E(C, ee);
	var w;
	if (h) {
		var te;
		w = (te = {}, te[n + "-plaintext"] = !0, te);
	} else if (o === "file") {
		var ne;
		w = (ne = {}, ne[n + "-file"] = !0, ne);
	} else if (o === "range") {
		var T;
		w = (T = {}, T[n + "-range"] = !0, T);
	} else if (y === "select" && _) {
		var re;
		w = (re = {}, re[n + "-select"] = !0, re[n + "-select-" + s] = s, re);
	} else {
		var ie;
		w = (ie = {}, ie[n] = !0, ie[n + "-" + s] = s, ie);
	}
	return /* @__PURE__ */ A.createElement(y, r({}, b, {
		type: o,
		size: c,
		ref: t,
		readOnly: g,
		id: l || x,
		className: (0, k.default)(u, w, f && "is-valid", m && "is-invalid")
	}));
});
Ie.displayName = "FormControl";
var Le = Object.assign(Ie, { Feedback: xe }), Re = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], ze = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.className, o = e.children, s = e.controlId, c = e.as, l = c === void 0 ? "div" : c, u = i(e, Re);
	n = E(n, "form-group");
	var d = (0, A.useMemo)(function() {
		return { controlId: s };
	}, [s]);
	return /* @__PURE__ */ A.createElement(Se.Provider, { value: d }, /* @__PURE__ */ A.createElement(l, r({}, u, {
		ref: t,
		className: (0, k.default)(a, n)
	}), o));
});
ze.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var Be = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Ve = {
	column: !1,
	srOnly: !1
}, He = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.as, a = n === void 0 ? "label" : n, o = e.bsPrefix, s = e.column, c = e.srOnly, l = e.className, u = e.htmlFor, d = i(e, Be), f = (0, A.useContext)(Se).controlId;
	o = E(o, "form-label");
	var p = "col-form-label";
	typeof s == "string" && (p = p + " " + p + "-" + s);
	var h = (0, k.default)(l, o, c && "sr-only", s && p);
	return u ||= f, s ? /* @__PURE__ */ A.createElement(m, r({
		ref: t,
		as: "label",
		className: h,
		htmlFor: u
	}, d)) : /* @__PURE__ */ A.createElement(a, r({
		ref: t,
		className: h,
		htmlFor: u
	}, d));
});
He.displayName = "FormLabel", He.defaultProps = Ve;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Ue = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], We = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.className, o = e.as, s = o === void 0 ? "small" : o, c = e.muted, l = i(e, Ue);
	return n = E(n, "form-text"), /* @__PURE__ */ A.createElement(s, r({}, l, {
		ref: t,
		className: (0, k.default)(a, n, c && "text-muted")
	}));
});
We.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Ge = /* @__PURE__ */ A.forwardRef(function(e, t) {
	return /* @__PURE__ */ A.createElement(Oe, r({}, e, {
		ref: t,
		type: "switch"
	}));
});
Ge.displayName = "Switch", Ge.Input = Oe.Input, Ge.Label = Oe.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Ke = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], qe = _e("form-row"), Je = { inline: !1 }, Ye = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.inline, o = e.className, s = e.validated, c = e.as, l = c === void 0 ? "form" : c, u = i(e, Ke);
	return n = E(n, "form"), /* @__PURE__ */ A.createElement(l, r({}, u, {
		ref: t,
		className: (0, k.default)(o, s && "was-validated", a && n + "-inline")
	}));
});
Ye.displayName = "Form", Ye.defaultProps = Je, Ye.Row = qe, Ye.Group = ze, Ye.Control = Le, Ye.Check = Oe, Ye.File = Pe, Ye.Switch = Ge, Ye.Label = He, Ye.Text = We;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Xe = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Ze = /* @__PURE__ */ A.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.variant, o = e.animation, s = e.size, c = e.children, l = e.as, u = l === void 0 ? "div" : l, d = e.className, f = i(e, Xe);
	n = E(n, "spinner");
	var p = n + "-" + o;
	return /* @__PURE__ */ A.createElement(u, r({ ref: t }, f, { className: (0, k.default)(d, p, s && p + "-" + s, a && "text-" + a) }), c);
});
Ze.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Add.js
var Qe = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
	fill: "currentColor"
})), $e = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), et = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), tt = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), nt = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), rt = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), it = (e) => /* @__PURE__ */ A.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), at = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), ot = (e) => /* @__PURE__ */ A.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ A.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function st(e) {
	return typeof e == "string" || e instanceof String;
}
function ct(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function lt(e, t) {
	return Array.isArray(t) ? lt(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var j = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function ut(e) {
	switch (e) {
		case j.LEFT: return j.FORCE_LEFT;
		case j.RIGHT: return j.FORCE_RIGHT;
		default: return e;
	}
}
function dt(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function ft(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!ft(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!ft(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var pt = class {
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
		return !this.removedCount || this.insertedCount ? j.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? j.RIGHT : j.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function M(e, t) {
	return new M.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function mt(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? M.MaskedRegExp : st(e) ? M.MaskedPattern : e === Date ? M.MaskedDate : e === Number ? M.MaskedNumber : Array.isArray(e) || e === Array ? M.MaskedDynamic : M.Masked && e.prototype instanceof M.Masked ? e : M.Masked && e instanceof M.Masked ? e.constructor : e instanceof Function ? M.MaskedFunction : (console.warn("Mask not found for mask", e), M.Masked);
}
function ht(e) {
	if (!e) throw Error("Options in not defined");
	if (M.Masked) {
		if (e.prototype instanceof M.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof M.Masked ? { mask: e } : ct(e) && e.mask instanceof M.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...lt(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return ct(e) ? { ...e } : { mask: e };
}
function gt(e) {
	if (M.Masked && e instanceof M.Masked) return e;
	let t = ht(e), n = mt(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
M.createMask = gt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var _t = class {
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
M.MaskElement = _t;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var vt = 90, yt = 89, bt = class extends _t {
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
		if (this._handlers.redo && (e.keyCode === vt && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === yt && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === vt && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
M.HTMLMaskElement = bt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var xt = class extends bt {
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
M.HTMLMaskElement = bt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var St = class extends bt {
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
M.HTMLContenteditableMaskElement = St;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var Ct = class e {
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
Ct.MAX_LENGTH = 100, M.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof _t ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new St(e) : new xt(e), this.masked = gt(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Ct(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof M.Masked) && this.masked.constructor === mt(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof M.Masked ? e : gt({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, j.LEFT));
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
		let t = new pt({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : j.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== j.NONE && (a = this.masked.nearestInputPos(a, j.NONE)), this.updateControl(a), delete this._inputEvent;
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
var N = class e {
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
M.ChangeDetails = N;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var wt = class {
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
}, Tt = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new wt(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return st(e) && (e = new wt(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new N({
			inserted: e,
			rawInserted: e
		})) : new N();
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
			a || (i = new N(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new N();
	}
	_appendEager() {
		return new N();
	}
	append(e, t, n) {
		if (!st(e)) throw Error("value should be string");
		let r = st(n) ? new wt(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new N();
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
		return t === void 0 && (t = {}), N.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), N.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = j.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = ut(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new N();
		if (r !== j.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? j.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== j.NONE && c === this.rawInputValue) if (r === j.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new N({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === j.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !ft(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new N();
	}
};
Tt.DEFAULTS = { skipInvalid: !0 }, Tt.EMPTY_VALUES = [
	void 0,
	null,
	""
], M.Masked = Tt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var Et = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = st(t) ? new wt(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof wt) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof M.MaskedPattern)) return new wt(this.toString()).appendTo(t);
		let n = new N();
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
			let n = "chunks" in t ? new e() : new wt();
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
}, Dt = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, j.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, j.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, j.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, j.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, j.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, j.NONE), !0;
		});
	}
}, Ot = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new N();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = j.NONE);
		let n = this._value.length;
		switch (t) {
			case j.LEFT:
			case j.FORCE_LEFT: return 0;
			case j.NONE:
			case j.RIGHT:
			case j.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new N();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new N({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new N();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new wt("");
	}
	appendTail(e) {
		return st(e) && (e = new wt(String(e))), e.appendTo(this);
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
}, kt = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = gt(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new N();
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
		if (t === void 0 && (t = {}), this.isFilled) return new N();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new N(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new N() : (this.isFilled = !0, new N({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new N();
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
		t === void 0 && (t = j.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case j.LEFT:
			case j.FORCE_LEFT: return this.isComplete ? r : 0;
			case j.RIGHT:
			case j.FORCE_RIGHT: return this.isComplete ? r : n;
			case j.NONE:
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
		return new N();
	}
};
kt.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, M.MaskedRegExp = class extends Tt {
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
var At = class e extends Tt {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, kt.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = ht(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? gt(i) : new M.RepeatBlock(i);
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
			let c = s ? new kt({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...ht(t[o]),
				parent: this
			}) : new Ot({
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
		let e = new N(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new N();
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
		let n = new Et();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof Et && (a.blockIndex = t), n.extend(a);
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
		let t = new N();
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
		if (t === void 0 && (t = j.NONE), !this._blocks.length) return 0;
		let n = new Dt(this, e);
		if (t === j.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === j.LEFT || t === j.FORCE_LEFT) {
			if (t === j.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === j.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === j.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === j.RIGHT || t === j.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === j.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, j.LEFT))) : e;
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
		let t = new N();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
At.DEFAULTS = {
	...Tt.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, At.STOP_CHAR = "`", At.ESCAPE_CHAR = "\\", At.InputDefinition = kt, At.FixedDefinition = Ot, M.MaskedPattern = At;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var jt = class extends At {
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
		let t = new N();
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
M.MaskedRange = jt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var Mt = "d{.}`m{.}`Y", Nt = class e extends At {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: st(t) ? t : n
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
			mask: st(n) ? n : r,
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
Nt.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: jt,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: jt,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: jt,
		from: 1900,
		to: 9999
	}
}), Nt.DEFAULTS = {
	...At.DEFAULTS,
	mask: Date,
	pattern: Mt,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, M.MaskedDate = Nt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var Pt = class e extends Tt {
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
			let { expose: t, ...n } = ht(e), r = gt({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new N(), l = s?.state;
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
		let t = new N();
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
		let n = new N();
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
			return ft(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
Pt.DEFAULTS = {
	...Tt.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, j.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, j.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, M.MaskedDynamic = Pt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var Ft = class e extends At {
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
		let n = Math.min(this.nearestInputPos(0, j.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new N({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new wt("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new N();
		let n = Math.min(super.nearestInputPos(0, j.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
Ft.DEFAULTS = {
	...At.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, M.MaskedEnum = Ft, M.MaskedFunction = class extends Tt {
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
var It, Lt = class e extends Tt {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + dt(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(dt).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(dt(this.thousandsSeparator), "g");
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
		s ? l = new N({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new N()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new N({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case j.NONE:
			case j.LEFT:
			case j.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === j.FORCE_LEFT) return n;
				}
				break;
			}
			case j.RIGHT:
			case j.FORCE_RIGHT: {
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
It = Lt, Lt.UNMASKED_RADIX = ".", Lt.EMPTY_VALUES = [...Tt.EMPTY_VALUES, 0], Lt.DEFAULTS = {
	...Tt.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [It.UNMASKED_RADIX],
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
}, M.MaskedNumber = Lt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var Rt = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function zt(e, t, n) {
	t === void 0 && (t = Rt.MASKED), n === void 0 && (n = Rt.MASKED);
	let r = gt(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Bt(e, t, n, r) {
	return zt(t, n, r)(e);
}
M.PIPE_TYPE = Rt, M.createPipe = zt, M.pipe = Bt, M.RepeatBlock = class extends At {
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
		let { repeat: t, ...n } = ht(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = gt(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(gt(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new N();
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
	globalThis.IMask = M;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Vt = {
	mask: O.default.oneOfType([
		O.default.array,
		O.default.func,
		O.default.string,
		O.default.instanceOf(RegExp),
		O.default.oneOf([
			Date,
			Number,
			M.Masked
		]),
		O.default.instanceOf(M.Masked)
	]),
	value: O.default.any,
	unmask: O.default.oneOfType([O.default.bool, O.default.oneOf(["typed"])]),
	prepare: O.default.func,
	prepareChar: O.default.func,
	validate: O.default.func,
	commit: O.default.func,
	overwrite: O.default.oneOfType([O.default.bool, O.default.oneOf(["shift"])]),
	eager: O.default.oneOfType([O.default.bool, O.default.oneOf(["append", "remove"])]),
	skipInvalid: O.default.bool,
	onAccept: O.default.func,
	onComplete: O.default.func,
	placeholderChar: O.default.string,
	displayChar: O.default.string,
	lazy: O.default.bool,
	definitions: O.default.object,
	blocks: O.default.object,
	enum: O.default.arrayOf(O.default.string),
	maxLength: O.default.number,
	from: O.default.number,
	to: O.default.number,
	pattern: O.default.string,
	format: O.default.func,
	parse: O.default.func,
	autofix: O.default.oneOfType([O.default.bool, O.default.oneOf(["pad"])]),
	radix: O.default.string,
	thousandsSeparator: O.default.string,
	mapToRadix: O.default.arrayOf(O.default.string),
	scale: O.default.number,
	normalizeZeros: O.default.bool,
	padFractionalZeros: O.default.bool,
	min: O.default.oneOfType([O.default.number, O.default.instanceOf(Date)]),
	max: O.default.oneOfType([O.default.number, O.default.instanceOf(Date)]),
	dispatch: O.default.func,
	inputRef: O.default.oneOfType([O.default.func, O.default.shape({ current: O.default.object })])
}, Ht = Object.keys(Vt).filter((e) => e !== "value"), Ut = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], Wt = Ht.filter((e) => Ut.indexOf(e) < 0);
function Gt(e) {
	var t;
	let n = (t = class extends A.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = M(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => Wt.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Ht.forEach((e) => {
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
			return A.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Vt, A.forwardRef((e, t) => A.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Kt = Gt((e) => {
	let { inputRef: t, ...n } = e;
	return A.createElement("input", {
		...n,
		ref: t
	});
}), qt = A.forwardRef((e, t) => A.createElement(Kt, {
	...e,
	ref: t
})), Jt = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Yt = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, Xt = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, A.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Zt = (e, t) => {
	let [n, r] = (0, A.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(ne(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, A.useState)(e);
		return (0, A.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Qt = (e) => e, $t = /* @__PURE__ */ A.createContext({
	getControlProps: Qt,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Qt,
	getDescriptorProps: Qt,
	hasFormGroupProvider: !1
}), en = () => A.useContext($t);
function tn(e) {
	let [t, n] = (0, A.useState)(e);
	return [t, (e) => {
		(0, A.useEffect)(() => n(e), [e]);
	}];
}
function nn({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, A.useMemo)(() => t || ne("form-field"), [t]), [o, s] = Zt(a), [c, l] = Zt(a), [u, d] = tn(!1), f = {
		getControlProps: (0, A.useCallback)((e) => {
			let t = u ? c : void 0;
			return Jt({
				...e,
				"aria-describedby": (0, k.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, k.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ A.createElement($t.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var rn = {
	SMALL: "sm",
	LARGE: "lg"
}, an = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, on = {
	[an.DEFAULT]: null,
	[an.VALID]: et,
	[an.INVALID]: nt,
	[an.WARNING]: ot,
	[an.CRITERIA_EMPTY]: at,
	[an.CRITERIA_VALID]: tt,
	[an.CRITERIA_INVALID]: $e
}, sn = ({ isInvalid: e, isValid: t }) => t ? an.VALID : e ? an.INVALID : an.DEFAULT;
function cn({ type: e, customIcon: t }) {
	if (t) return t;
	let n = on[e];
	return n ? /* @__PURE__ */ A.createElement(ie, { src: n }) : null;
}
cn.propTypes = {
	type: O.default.oneOf(Object.values(an)),
	customIcon: O.default.node
}, cn.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function ln({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, k.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ A.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ A.createElement(cn, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ A.createElement("div", null, e));
}
ln.propTypes = {
	children: O.default.node.isRequired,
	className: O.default.string,
	hasIcon: O.default.bool,
	type: O.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: O.default.node,
	muted: O.default.bool
}, ln.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function un({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = en(), a = n(t), o = (0, k.default)("pgn__form-control-description", t.className), s = t.type || sn({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ A.createElement(ln, {
		...a,
		className: o,
		type: s
	}, e);
}
un.propTypes = {
	children: O.default.node.isRequired,
	className: O.default.string,
	hasIcon: O.default.bool,
	type: O.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: O.default.node,
	muted: O.default.bool
}, un.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function dn({ children: e }) {
	let { controlId: t } = en();
	return /* @__PURE__ */ A.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ A.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ A.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
dn.propTypes = { children: O.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function fn({ children: e, location: t }) {
	return /* @__PURE__ */ A.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
fn.propTypes = {
	children: O.default.node.isRequired,
	location: O.default.oneOf(["leading", "trailing"])
}, fn.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function pn({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = en(a), s = a.size || o.size;
	return /* @__PURE__ */ A.createElement("div", {
		className: (0, k.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === rn.LARGE,
			"pgn__form-control-decorator-group-sm": s === rn.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ A.createElement(fn, { location: "leading" }, t), n && /* @__PURE__ */ A.createElement(fn, { location: "trailing" }, n), r && /* @__PURE__ */ A.createElement(dn, null, r));
}
pn.propTypes = {
	children: O.default.node.isRequired,
	leadingElement: O.default.node,
	trailingElement: O.default.node,
	floatingLabel: O.default.node,
	className: O.default.string,
	size: O.default.oneOf([rn.SMALL, rn.LARGE])
}, pn.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var mn = /* @__PURE__ */ A.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = en(), h = A.useRef(), g = u || h, _ = l.size || m.size, [v, y] = Xt({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, A.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, A.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Yt(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ A.createElement(pn, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ A.createElement(Le, {
		as: c ? qt : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, k.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
mn.Feedback = un, mn.Description = un, mn.propTypes = {
	className: O.default.string,
	as: O.default.elementType,
	onChange: O.default.func,
	defaultValue: O.default.oneOfType([O.default.string, O.default.number]),
	value: O.default.oneOfType([O.default.string, O.default.number]),
	id: O.default.string,
	controlClassName: O.default.string,
	size: O.default.oneOf(["sm", "lg"]),
	leadingElement: O.default.node,
	trailingElement: O.default.node,
	floatingLabel: O.default.node,
	plaintext: O.default.bool,
	isValid: O.default.bool,
	isInvalid: O.default.bool,
	autoResize: O.default.bool,
	inputMask: O.default.string
}, mn.defaultProps = {
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
function hn({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = en(), o = (0, k.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === rn.LARGE,
		"pgn__form-label-sm": r === rn.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ A.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function gn({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ A.createElement(a ?? "div", {
		...o,
		className: (0, k.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ A.createElement(nn, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var _n = /* @__PURE__ */ A.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), vn = () => (0, A.useContext)(_n);
function yn({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Yt(n, e.onBlur) : n,
			onFocus: e.onFocus ? Yt(r, e.onFocus) : r,
			onChange: e.onChange ? Yt(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ A.createElement(_n.Provider, { value: c }, e);
}
yn.propTypes = {
	children: O.default.node.isRequired,
	name: O.default.string.isRequired,
	onBlur: O.default.func,
	onFocus: O.default.func,
	onChange: O.default.func,
	value: O.default.string,
	defaultValue: O.default.string
}, yn.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var bn = /* @__PURE__ */ A.forwardRef((e, t) => {
	let { getControlProps: n } = en(), { getRadioControlProps: r, hasRadioSetProvider: i } = vn(), a = n({
		...e,
		className: (0, k.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ A.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
bn.propTypes = { className: O.default.string }, bn.defaultProps = { className: void 0 };
var xn = /* @__PURE__ */ A.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ A.createElement(nn, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ A.createElement("div", { className: (0, k.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ A.createElement(bn, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement(hn, { className: r }, e), i && /* @__PURE__ */ A.createElement(un, { hasIcon: !1 }, i)))));
xn.propTypes = {
	id: O.default.string,
	children: O.default.node.isRequired,
	className: O.default.string,
	controlClassName: O.default.string,
	labelClassName: O.default.string,
	description: O.default.node,
	isInvalid: O.default.bool,
	isValid: O.default.bool,
	disabled: O.default.bool
}, xn.defaultProps = {
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
function Sn({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ A.createElement(e, {
		className: (0, k.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
Sn.propTypes = {
	as: O.default.elementType,
	className: O.default.string,
	isInline: O.default.bool,
	children: O.default.node
}, Sn.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function Cn({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = en();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ A.createElement(yn, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ A.createElement(Sn, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
Cn.propTypes = {
	children: O.default.node.isRequired,
	className: O.default.string,
	name: O.default.string.isRequired,
	value: O.default.string,
	defaultValue: O.default.string,
	isInline: O.default.bool,
	onChange: O.default.func,
	onFocus: O.default.func,
	onBlur: O.default.func
}, Cn.defaultProps = {
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
var wn, Tn = new Uint8Array(16);
function En() {
	if (!wn && (wn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !wn)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return wn(Tn);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var Dn = [];
for (let e = 0; e < 256; ++e) Dn.push((e + 256).toString(16).slice(1));
function On(e, t = 0) {
	return Dn[e[t + 0]] + Dn[e[t + 1]] + Dn[e[t + 2]] + Dn[e[t + 3]] + "-" + Dn[e[t + 4]] + Dn[e[t + 5]] + "-" + Dn[e[t + 6]] + Dn[e[t + 7]] + "-" + Dn[e[t + 8]] + Dn[e[t + 9]] + "-" + Dn[e[t + 10]] + Dn[e[t + 11]] + Dn[e[t + 12]] + Dn[e[t + 13]] + Dn[e[t + 14]] + Dn[e[t + 15]];
}
var kn = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function An(e, t, n) {
	if (kn.randomUUID && !t && !e) return kn.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || En)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return On(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var jn = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), Mn = (e, t) => t.every((t) => e[t] !== void 0), Nn = (e, t) => jn(e, (e) => Array.isArray(t) ? Mn(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), Pn = /* @__PURE__ */ A.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, k.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ A.createElement(Ze, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ A.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function Fn({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function In({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Ln({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && Fn({
		event: e,
		currentIndex: s,
		activeElement: a
	}), In({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function Rn(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, A.useRef)();
	return (0, A.useEffect)(() => {
		let e = (e) => {
			Ln({
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
var zn = l({
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
}), Bn = /* @__PURE__ */ (0, A.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: a, isValueRequired: o, valueRequiredErrorMessageText: s, isSelectionRequired: c, selectionRequiredErrorMessageText: l, hasCustomError: d, customErrorMessageText: f, onChange: p, helpMessage: m, ...h }, g) => {
	let _ = u(), v = (0, A.useRef)(), y = Rn({
		selectors: t,
		ignoredKeys: n
	}), [b, x] = (0, A.useState)(!1), [S, C] = (0, A.useState)(!1), [ee, w] = (0, A.useState)(!1), [te, ne] = (0, A.useState)(!1), [T, ae] = (0, A.useState)(i?.userProvidedText || ""), [oe, se] = (0, A.useState)([]), [ce, le] = (0, A.useState)(null), [E, D] = (0, A.useState)(!0), [ue, de] = (0, A.useState)(""), O = (e) => {
		le(e);
	}, k = () => {
		se([]), x(!1), le(null);
	}, fe = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		w(!0), ne(!0), ae(n), p && (!i || i && n !== i.selectionValue) && p({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), k(), t && t(e);
	};
	function pe(t = "") {
		let n = A.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? An();
			return /* @__PURE__ */ A.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => fe(e, n),
				id: i,
				onFocus: () => O(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let me = () => {
		se(pe(T)), D(!0), de(""), x(!0);
	}, he = () => {
		b ? k() : me();
	}, ge = /* @__PURE__ */ A.createElement(re, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: b ? it : rt,
		iconAs: ie,
		size: "sm",
		variant: "secondary",
		alt: b ? _.formatMessage(zn.iconButtonClosed) : _.formatMessage(zn.iconButtonOpened),
		onClick: he
	}), _e = () => {
		C(!0);
	}, ve = () => {
		if (d) {
			D(!1), de(f);
			return;
		}
		if (o && !ee) {
			D(!1), de(s);
			return;
		}
		if (ee && c && !te) {
			D(!1), de(l);
			return;
		}
		D(!0), de("");
	};
	(0, A.useImperativeHandle)(g, () => ({ updateErrorStateAndErrorMessage: ve }));
	let ye = () => {
		C(!1), k(), ve();
	}, be = (e) => {
		if (S) {
			if (e.key === "Escape") {
				e.preventDefault(), v && v.current.focus(), k();
				return;
			}
			e.key === "Tab" && ye();
		}
	}, xe = (e) => {
		y.current && !y.current.contains(e.target) && S && ye();
	};
	(0, A.useEffect)(() => (document.addEventListener("keydown", be), document.addEventListener("click", xe, !0), () => {
		document.removeEventListener("click", xe, !0), document.removeEventListener("keydown", be);
	})), (0, A.useEffect)(() => {
		ae(i ? i.userProvidedText ?? "" : ""), w(!!i && !!i.userProvidedText), ne(!!i && !!i.selectionValue);
	}, [i]);
	let Se = () => {
		me();
	}, Ce = (e) => {
		let t = e.target.value;
		if (!t.length) {
			ae(""), w(!1), ne(!1), se([]), k(), p && p({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		w(!0);
		let n = pe(t);
		se(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			ne(!1), ae(t), p && p({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		ne(!0), ae(r.props.children), p && p({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: we } = en(), Te = we(h);
	return /* @__PURE__ */ A.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: y,
		onFocus: _e
	}, /* @__PURE__ */ A.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${oe.length} options found`), /* @__PURE__ */ A.createElement(nn, {
		controlId: Te.id,
		isInvalid: !E
	}, /* @__PURE__ */ A.createElement(mn, {
		ref: v,
		"aria-expanded": (oe.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: T,
		"aria-invalid": ue,
		"aria-activedescendant": ce,
		onChange: Ce,
		onClick: Se,
		trailingElement: ge,
		"data-testid": "autosuggest-textbox-input",
		...Te
	}), m && E && /* @__PURE__ */ A.createElement(un, { type: "default" }, m), !E && /* @__PURE__ */ A.createElement(un, {
		type: "invalid",
		"feedback-for": Te.name
	}, ue)), /* @__PURE__ */ A.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, a ? /* @__PURE__ */ A.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ A.createElement(Pn, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : oe.length > 0 && oe));
});
Bn.defaultProps = {
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
}, Bn.propTypes = {
	arrowKeyNavigationSelector: O.default.string,
	ignoredArrowKeysNames: O.default.arrayOf(O.default.string),
	isLoading: O.default.bool,
	className: O.default.string,
	floatingLabel: O.default.string,
	onChange: O.default.func,
	helpMessage: O.default.string,
	placeholder: O.default.string,
	value: O.default.shape({
		userProvidedText: O.default.string,
		selectionValue: O.default.string,
		selectionId: O.default.string
	}),
	isValueRequired: O.default.bool,
	valueRequiredErrorMessageText: Nn(O.default.string, "isValueRequired"),
	isSelectionRequired: O.default.bool,
	selectionRequiredErrorMessageText: Nn(O.default.string, "isSelectionRequired"),
	hasCustomError: O.default.bool,
	customErrorMessageText: Nn(O.default.string, "hasCustomError"),
	name: O.default.string,
	readOnly: O.default.bool,
	children: O.default.node,
	screenReaderText: O.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Vn({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, k.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, A.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ A.createElement(A.Fragment, null, i && /* @__PURE__ */ A.createElement(ie, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ A.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ A.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ A.createElement(ie, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function Hn({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ A.createElement(Vn, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, k.default)(t, "dropdown-item"),
		...r
	}, e);
}
Hn.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, Hn.propTypes = {
	className: O.default.string,
	children: O.default.string,
	onClick: O.default.func
};
var Un = /* @__PURE__ */ A.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), Wn = () => (0, A.useContext)(Un);
function Gn({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Yt(n, e.onBlur) : n,
			onFocus: e.onFocus ? Yt(r, e.onFocus) : r,
			onChange: e.onChange ? Yt(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ A.createElement(Un.Provider, { value: c }, e);
}
Gn.propTypes = {
	children: O.default.node.isRequired,
	name: O.default.string,
	onBlur: O.default.func,
	onFocus: O.default.func,
	onChange: O.default.func,
	value: O.default.arrayOf(O.default.string),
	defaultValue: O.default.arrayOf(O.default.string)
}, Gn.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Kn = /* @__PURE__ */ A.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = Wn(), a = A.useRef(), o = n || a, { getControlProps: s } = en(), c = s({
		...t,
		className: (0, k.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), A.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ A.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Kn.propTypes = {
	isIndeterminate: O.default.bool,
	className: O.default.string
}, Kn.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var qn = /* @__PURE__ */ A.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = Wn(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = en();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ A.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ A.createElement(nn, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ A.createElement("div", {
		className: (0, k.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement(hn, { className: r }, e), i && /* @__PURE__ */ A.createElement(un, { hasIcon: !1 }, i))));
});
qn.propTypes = {
	id: O.default.string,
	children: O.default.node.isRequired,
	className: O.default.string,
	controlClassName: O.default.string,
	labelClassName: O.default.string,
	description: O.default.node,
	isInvalid: O.default.bool,
	isValid: O.default.bool,
	controlAs: O.default.elementType,
	floatLabelLeft: O.default.bool,
	disabled: O.default.bool
}, qn.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Kn,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Jn = /* @__PURE__ */ A.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = A.useRef(), i = n || r, { getControlProps: a } = en(), o = a({
		...t,
		className: (0, k.default)("pgn__form-switch-input", t.className)
	});
	return A.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ A.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Jn.propTypes = {
	isIndeterminate: O.default.bool,
	className: O.default.string
}, Jn.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Yn = /* @__PURE__ */ A.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ A.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ A.createElement(qn, {
	className: (0, k.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Jn,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ A.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Yn.propTypes = {
	children: O.default.node.isRequired,
	className: O.default.string,
	labelClassName: O.default.string,
	helperText: O.default.node,
	floatLabelLeft: O.default.bool
}, Yn.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function Xn({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = en();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ A.createElement(Gn, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ A.createElement(Sn, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
Xn.propTypes = {
	children: O.default.node.isRequired,
	className: O.default.string,
	name: O.default.string.isRequired,
	value: O.default.arrayOf(O.default.string),
	defaultValue: O.default.arrayOf(O.default.string),
	isInline: O.default.bool,
	onChange: O.default.func,
	onFocus: O.default.func,
	onBlur: O.default.func
}, Xn.defaultProps = {
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
var Zn = Xn, P = Ye;
P.Control = mn, P.Radio = xn, P.RadioSet = Cn, P.Autosuggest = Bn, P.AutosuggestOption = Hn, P.Checkbox = qn, P.CheckboxSet = Xn, P.Switch = Yn, P.SwitchSet = Zn, P.Label = hn, P.Group = gn, P.Text = ln;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Modal/ModalContext.js
var Qn = /* @__PURE__ */ o(de()), $n = /* @__PURE__ */ A.createContext({
	onClose: () => {},
	isOpen: !1,
	isBlocking: !1
});
function er({ onClose: e, isOpen: t, isBlocking: n = !1, children: r = null }) {
	let i = (0, A.useMemo)(() => ({
		onClose: e,
		isOpen: t,
		isBlocking: n
	}), [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ A.createElement($n.Provider, { value: i }, r);
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var tr = "right-scroll-bar-position", nr = "width-before-scroll-bar", rr = "with-scroll-bars-hidden", ir = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function ar(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.28_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
function or(e, t) {
	var n = (0, A.useState)(function() {
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
var sr = typeof window < "u" ? A.useLayoutEffect : A.useEffect, cr = /* @__PURE__ */ new WeakMap();
function lr(e, t) {
	var n = or(t || null, function(t) {
		return e.forEach(function(e) {
			return ar(e, t);
		});
	});
	return sr(function() {
		var t = cr.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || ar(e, null);
			}), i.forEach(function(e) {
				r.has(e) || ar(e, a);
			});
		}
		cr.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ur(e) {
	return e;
}
function dr(e, t) {
	t === void 0 && (t = ur);
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
function fr(e, t) {
	return t === void 0 && (t = ur), dr(e, t);
}
function pr(e) {
	e === void 0 && (e = {});
	var t = dr(null);
	return t.options = a({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.28_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var mr = function(e) {
	var t = e.sideCar, n = s(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return A.createElement(r, a({}, n));
};
mr.isSideCarExport = !0;
function hr(e, t) {
	return e.useMedium(t), mr;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.28_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var gr = pr(), _r = function() {}, vr = A.forwardRef(function(e, t) {
	var n = A.useRef(null), r = A.useState({
		onScrollCapture: _r,
		onWheelCapture: _r,
		onTouchMoveCapture: _r
	}), i = r[0], o = r[1], c = e.forwardProps, l = e.children, u = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, g = e.noIsolation, _ = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, x = e.gapMode, S = s(e, [
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
	]), C = m, ee = lr([n, t]), w = a(a({}, S), i);
	return A.createElement(A.Fragment, null, f && A.createElement(C, {
		sideCar: gr,
		removeScrollBar: d,
		shards: p,
		noRelative: h,
		noIsolation: g,
		inert: _,
		setCallbacks: o,
		allowPinchZoom: !!v,
		lockRef: n,
		gapMode: x
	}), c ? A.cloneElement(A.Children.only(l), a(a({}, w), { ref: ee })) : A.createElement(b, a({}, w, {
		className: u,
		ref: ee
	}), l));
});
vr.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, vr.classNames = {
	fullWidth: nr,
	zeroRight: tr
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
var yr = "data-focus-lock", br = "data-focus-lock-disabled", xr = "data-no-focus-lock", Sr = "data-autofocus-inside", Cr = "data-no-autofocus", wr = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
}, Tr = function(e) {
	var t = e.children, n = t === void 0 ? null : t;
	return /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: wr
	}), n, n && /* @__PURE__ */ A.createElement("div", {
		key: "guard-last",
		"data-focus-guard": !0,
		"data-focus-auto-guard": !0,
		style: wr
	}));
};
Tr.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/medium.js
var Er = fr({}, function(e) {
	return {
		target: e.target,
		currentTarget: e.currentTarget
	};
}), Dr = fr(), Or = fr(), kr = pr({
	async: !0,
	ssr: typeof document < "u"
}), Ar = /* @__PURE__ */ (0, A.createContext)(void 0), jr = [], Mr = /* @__PURE__ */ (0, A.forwardRef)(function(e, t) {
	var n, i = (0, A.useState)(), a = i[0], o = i[1], s = (0, A.useRef)(), c = (0, A.useRef)(!1), l = (0, A.useRef)(null), u = (0, A.useState)({})[1], d = e.children, f = e.disabled, p = f === void 0 ? !1 : f, m = e.noFocusGuards, h = m === void 0 ? !1 : m, g = e.persistentFocus, _ = g === void 0 ? !1 : g, v = e.crossFrame, y = v === void 0 ? !0 : v, b = e.autoFocus, x = b === void 0 ? !0 : b;
	e.allowTextSelection;
	var S = e.group, C = e.className, ee = e.whiteList, w = e.hasPositiveIndices, te = e.shards, ne = te === void 0 ? jr : te, T = e.as, re = T === void 0 ? "div" : T, ie = e.lockProps, ae = ie === void 0 ? {} : ie, oe = e.sideCar, se = e.returnFocus, ce = se === void 0 ? !1 : se, le = e.focusOptions, E = e.onActivation, D = e.onDeactivation, ue = (0, A.useState)({})[0], de = (0, A.useCallback)(function(e) {
		var t = e.captureFocusRestore;
		if (!l.current) {
			var n = document?.activeElement;
			l.current = n, n !== document.body && (l.current = t(n));
		}
		s.current && E && E(s.current), c.current = !0, u();
	}, [E]), O = (0, A.useCallback)(function() {
		c.current = !1, D && D(s.current), u();
	}, [D]), k = (0, A.useCallback)(function(e) {
		var t = l.current;
		if (t) {
			var n = (typeof t == "function" ? t() : t) || document.body, r = typeof ce == "function" ? ce(n) : ce;
			if (r) {
				var i = typeof r == "object" ? r : void 0;
				l.current = null, e ? Promise.resolve().then(function() {
					return n.focus(i);
				}) : n.focus(i);
			}
		}
	}, [ce]), fe = (0, A.useCallback)(function(e) {
		c.current && Er.useMedium(e);
	}, []), pe = Dr.useMedium, me = (0, A.useCallback)(function(e) {
		s.current !== e && (s.current = e, o(e));
	}, []), he = r((n = {}, n[br] = p && "disabled", n[yr] = S, n), ae), ge = h !== !0, _e = ge && h !== "tail", ve = lr([t, me]), ye = (0, A.useMemo)(function() {
		return {
			observed: s,
			shards: ne,
			enabled: !p,
			get active() {
				return c.current;
			}
		};
	}, [
		p,
		c,
		ne,
		s
	]);
	return /* @__PURE__ */ A.createElement(A.Fragment, null, ge && [/* @__PURE__ */ A.createElement("div", {
		key: "guard-first",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: wr
	}), w ? /* @__PURE__ */ A.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 1,
		style: wr
	}) : null], !p && /* @__PURE__ */ A.createElement(oe, {
		id: ue,
		sideCar: kr,
		observed: a,
		disabled: p,
		persistentFocus: _,
		crossFrame: y,
		autoFocus: x,
		whiteList: ee,
		shards: ne,
		onActivation: de,
		onDeactivation: O,
		returnFocus: k,
		focusOptions: le,
		noFocusGuards: h
	}), /* @__PURE__ */ A.createElement(re, r({ ref: ve }, he, {
		className: C,
		onBlur: pe,
		onFocus: fe
	}), /* @__PURE__ */ A.createElement(Ar.Provider, { value: ye }, d)), _e && /* @__PURE__ */ A.createElement("div", {
		"data-focus-guard": !0,
		tabIndex: p ? -1 : 0,
		style: wr
	}));
});
Mr.propTypes = {};
//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.7_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-lock/dist/es2015/util.js
function Nr(e) {
	setTimeout(e, 1);
}
var Pr = function(e) {
	return e && "current" in e ? e.current : e;
}, Fr = Mr, Ir = pr(), Lr = "data-focus-on-hidden", Rr = { preventScroll: !0 }, zr = A.forwardRef(function(e, t) {
	var n = A.useState(!1), r = n[0], i = n[1], o = A.useState(null), c = o[0], l = o[1], u = e.children, d = e.autoFocus, f = e.shards, p = e.crossFrame, m = e.enabled, h = m === void 0 ? !0 : m, g = e.scrollLock, _ = g === void 0 ? !0 : g, v = e.focusLock, y = v === void 0 ? !0 : v, b = e.returnFocus, x = b === void 0 ? !0 : b, S = e.inert, C = e.allowPinchZoom, ee = e.sideCar, w = e.className, te = e.shouldIgnore, ne = e.preventScrollOnFocus, T = e.style, re = e.as, ie = e.gapMode, ae = s(e, [
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
	]), oe = ee, se = a(a({}, r), {
		as: re,
		style: T,
		sideCar: ee,
		shards: f,
		allowPinchZoom: C,
		gapMode: ie,
		inert: S,
		enabled: h && _
	}), ce = A.useCallback(function(e) {
		l(e);
	}, []), le = A.useCallback(function() {
		l(null);
	}, []);
	return A.createElement(A.Fragment, null, A.createElement(Fr, {
		ref: t,
		sideCar: ee,
		disabled: !(h && y),
		returnFocus: x,
		autoFocus: d,
		shards: f,
		crossFrame: p,
		onActivation: ce,
		onDeactivation: le,
		className: w,
		whiteList: te,
		lockProps: se,
		focusOptions: ne ? Rr : void 0,
		as: vr
	}, u), h && A.createElement(oe, a({}, ae, {
		sideCar: Ir,
		setLockProps: i,
		shards: f,
		activeNode: c
	})));
});
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function Br(e) {
	"@babel/helpers - typeof";
	return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Br(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Vr(e, t) {
	if (Br(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Br(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function Hr(e) {
	var t = Vr(e, "string");
	return Br(t) == "symbol" ? t : t + "";
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Ur(e, t, n) {
	return (t = Hr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@18.3.1/node_modules/react-clientside-effect/lib/index.es.js
function Wr(e, t) {
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
			h(t, e);
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
				return /* @__PURE__ */ A.createElement(r, this.props);
			}, t;
		}(A.PureComponent);
		return Ur(s, "displayName", "SideEffect(" + n(r) + ")"), s;
	};
}
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var Gr = function(e) {
	for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
	return t;
}, Kr = function(e) {
	return Array.isArray(e) ? e : [e];
}, qr = function(e) {
	return Array.isArray(e) ? e[0] : e;
}, Jr = function(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !1;
	var t = window.getComputedStyle(e, null);
	return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Yr = function(e) {
	return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode;
}, Xr = function(e) {
	return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, Zr = function(e) {
	return e.hasAttribute("inert");
}, Qr = function(e, t) {
	return !e || Xr(e) || !Jr(e) && !Zr(e) && t(Yr(e));
}, $r = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = Qr(t, $r.bind(void 0, e));
	return e.set(t, r), r;
}, ei = function(e, t) {
	return e && !Xr(e) ? si(e) ? t(Yr(e)) : !1 : !0;
}, ti = function(e, t) {
	var n = e.get(t);
	if (n !== void 0) return n;
	var r = ei(t, ti.bind(void 0, e));
	return e.set(t, r), r;
}, ni = function(e) {
	return e.dataset;
}, ri = function(e) {
	return e.tagName === "BUTTON";
}, ii = function(e) {
	return e.tagName === "INPUT";
}, ai = function(e) {
	return ii(e) && e.type === "radio";
}, oi = function(e) {
	return !((ii(e) || ri(e)) && (e.type === "hidden" || e.disabled));
}, si = function(e) {
	var t = e.getAttribute(Cr);
	return ![
		!0,
		"true",
		""
	].includes(t);
}, ci = function(e) {
	return !!(e && ni(e)?.focusGuard);
}, li = function(e) {
	return !ci(e);
}, ui = function(e) {
	return !!e;
}, di = function(e, t) {
	var n = Math.max(0, e.tabIndex), r = Math.max(0, t.tabIndex), i = n - r, a = e.index - t.index;
	if (i) {
		if (!n) return 1;
		if (!r) return -1;
	}
	return i || a;
}, fi = function(e) {
	return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
}, pi = function(e, t, n) {
	return Gr(e).map(function(e, t) {
		var r = fi(e);
		return {
			node: e,
			index: t,
			tabIndex: n && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
		};
	}).filter(function(e) {
		return !t || e.tabIndex >= 0;
	}).sort(di);
}, mi = [
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
].join(","), hi = `${mi}, [data-focus-guard]`, gi = function(e, t) {
	return Gr((e.shadowRoot || e).children).reduce(function(e, n) {
		return e.concat(n.matches(t ? hi : mi) ? [n] : [], gi(n));
	}, []);
}, _i = function(e, t) {
	return e instanceof HTMLIFrameElement && e.contentDocument?.body ? vi([e.contentDocument.body], t) : [e];
}, vi = function(e, t) {
	return e.reduce(function(e, n) {
		var r, i = gi(n, t), a = (r = []).concat.apply(r, i.map(function(e) {
			return _i(e, t);
		}));
		return e.concat(a, n.parentNode ? Gr(n.parentNode.querySelectorAll(mi)).filter(function(e) {
			return e === n;
		}) : []);
	}, []);
}, yi = function(e) {
	return Gr(e.querySelectorAll(`[${Sr}]`)).map(function(e) {
		return vi([e]);
	}).reduce(function(e, t) {
		return e.concat(t);
	}, []);
}, bi = function(e, t) {
	return Gr(e).filter(function(e) {
		return $r(t, e);
	}).filter(function(e) {
		return oi(e);
	});
}, xi = function(e, t) {
	return t === void 0 && (t = /* @__PURE__ */ new Map()), Gr(e).filter(function(e) {
		return ti(t, e);
	});
}, Si = function(e, t, n) {
	return pi(bi(vi(e, n), t), !0, n);
}, Ci = function(e, t) {
	return pi(bi(vi(e), t), !1);
}, wi = function(e, t) {
	return bi(yi(e), t);
}, Ti = function(e, t) {
	return e.shadowRoot ? Ti(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Gr(e.children).some(function(e) {
		if (e instanceof HTMLIFrameElement) {
			var n = e.contentDocument?.body;
			return n ? Ti(n, t) : !1;
		}
		return Ti(e, t);
	});
}, Ei = function(e) {
	for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1) for (var i = r + 1; i < n; i += 1) {
		var a = e[r].compareDocumentPosition(e[i]);
		(a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
	}
	return e.filter(function(e, n) {
		return !t.has(n);
	});
}, Di = function(e) {
	return e.parentNode ? Di(e.parentNode) : e;
}, Oi = function(e) {
	return Kr(e).filter(Boolean).reduce(function(e, t) {
		var n = t.getAttribute(yr);
		return e.push.apply(e, n ? Ei(Gr(Di(t).querySelectorAll(`[${yr}="${n}"]:not([${br}="disabled"])`))) : [t]), e;
	}, []);
}, ki = function(e) {
	try {
		return e();
	} catch {
		return;
	}
}, Ai = function(e) {
	if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
		var t = e.activeElement;
		return t.shadowRoot ? Ai(t.shadowRoot) : t instanceof HTMLIFrameElement && ki(function() {
			return t.contentWindow.document;
		}) ? Ai(t.contentWindow.document) : t;
	}
}, ji = function(e, t) {
	return e === t;
}, Mi = function(e, t) {
	return !!Gr(e.querySelectorAll("iframe")).some(function(e) {
		return ji(e, t);
	});
}, Ni = function(e, t) {
	return t === void 0 && (t = Ai(qr(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Oi(e).some(function(e) {
		return Ti(e, t) || Mi(e, t);
	});
}, Pi = function(e) {
	e === void 0 && (e = document);
	var t = Ai(e);
	return t ? Gr(e.querySelectorAll(`[${xr}]`)).some(function(e) {
		return Ti(e, t);
	}) : !1;
}, Fi = function(e, t) {
	return t.filter(ai).filter(function(t) {
		return t.name === e.name;
	}).filter(function(e) {
		return e.checked;
	})[0] || e;
}, Ii = function(e, t) {
	return ai(e) && e.name ? Fi(e, t) : e;
}, Li = function(e) {
	var t = /* @__PURE__ */ new Set();
	return e.forEach(function(n) {
		return t.add(Ii(n, e));
	}), e.filter(function(e) {
		return t.has(e);
	});
}, Ri = function(e) {
	return e[0] && e.length > 1 ? Ii(e[0], e) : e[0];
}, zi = function(e, t) {
	return e.indexOf(Ii(t, e));
}, Bi = "NEW_FOCUS", Vi = function(e, t, n, r, i) {
	var a = e.length, o = e[0], s = e[a - 1], c = ci(r);
	if (!(r && e.indexOf(r) >= 0)) {
		var l = r === void 0 ? -1 : n.indexOf(r), u = i ? n.indexOf(i) : l, d = i ? e.indexOf(i) : -1;
		if (l === -1) return d === -1 ? Bi : d;
		if (d === -1) return Bi;
		var f = l - u, p = n.indexOf(o), m = n.indexOf(s), h = Li(n), g = r === void 0 ? -1 : h.indexOf(r), _ = i ? h.indexOf(i) : g, v = h.filter(function(e) {
			return e.tabIndex >= 0;
		}), y = r === void 0 ? -1 : v.indexOf(r), b = i ? v.indexOf(i) : y, x = y >= 0 && b >= 0 ? b - y : _ - g;
		if (!f && d >= 0 || t.length === 0) return d;
		var S = zi(e, t[0]), C = zi(e, t[t.length - 1]);
		if (l <= p && c && Math.abs(f) > 1) return C;
		if (l >= m && c && Math.abs(f) > 1) return S;
		if (f && Math.abs(x) > 1) return d;
		if (l <= p) return C;
		if (l > m) return S;
		if (f) return Math.abs(f) > 1 ? d : (a + d + f) % a;
	}
}, Hi = function(e) {
	return function(t) {
		var n = ni(t)?.autofocus;
		return t.autofocus || n !== void 0 && n !== "false" || e.indexOf(t) >= 0;
	};
}, Ui = function(e, t, n) {
	var r = xi(e.map(function(e) {
		return e.node;
	}).filter(Hi(n)));
	return r && r.length ? Ri(r) : Ri(xi(t));
}, Wi = function(e, t) {
	return t === void 0 && (t = []), t.push(e), e.parentNode && Wi(e.parentNode.host || e.parentNode, t), t;
}, Gi = function(e, t) {
	for (var n = Wi(e), r = Wi(t), i = 0; i < n.length; i += 1) {
		var a = n[i];
		if (r.indexOf(a) >= 0) return a;
	}
	return !1;
}, Ki = function(e, t, n) {
	var r = Kr(e), i = Kr(t), a = r[0], o = !1;
	return i.filter(Boolean).forEach(function(e) {
		o = Gi(o || e, e) || o, n.filter(Boolean).forEach(function(e) {
			var t = Gi(a, e);
			t && (o = !o || Ti(t, o) ? t : Gi(t, o));
		});
	}), o;
}, qi = function(e, t) {
	return e.reduce(function(e, n) {
		return e.concat(wi(n, t));
	}, []);
}, Ji = function(e, t) {
	var n = /* @__PURE__ */ new Map();
	return t.forEach(function(e) {
		return n.set(e.node, e);
	}), e.map(function(e) {
		return n.get(e);
	}).filter(ui);
}, Yi = function(e, t) {
	var n = Ai(Kr(e).length > 0 ? document : qr(e).ownerDocument), r = Oi(e).filter(li), i = Ki(n || e, e, r), a = /* @__PURE__ */ new Map(), o = Ci(r, a), s = o.filter(function(e) {
		var t = e.node;
		return li(t);
	});
	if (s[0]) {
		var c = Ci([i], a).map(function(e) {
			return e.node;
		}), l = Ji(c, s), u = l.map(function(e) {
			return e.node;
		}), d = l.filter(function(e) {
			return e.tabIndex >= 0;
		}).map(function(e) {
			return e.node;
		}), f = Vi(u, d, c, n, t);
		if (f === "NEW_FOCUS") {
			var p = Ui(o, d, qi(r, a)) || Ui(o, u, qi(r, a));
			if (p) return { node: p };
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
		return f === void 0 ? f : l[f];
	}
}, Xi = function(e) {
	var t = Oi(e).filter(li), n = pi(vi([Ki(e, e, t)], !0), !0, !0), r = vi(t, !1);
	return n.map(function(e) {
		var t = e.node;
		return {
			node: t,
			index: e.index,
			lockItem: r.indexOf(t) >= 0,
			guard: ci(t)
		};
	});
}, Zi = function(e, t) {
	e && ("focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
}, Qi = 0, $i = !1, ea = function(e, t, n) {
	n === void 0 && (n = {});
	var r = Yi(e, t);
	if (!$i && r) {
		if (Qi > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), $i = !0, setTimeout(function() {
				$i = !1;
			}, 1);
			return;
		}
		Qi++, Zi(r.node, n.focusOptions), Qi--;
	}
};
//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function ta(e) {
	if (!e) return null;
	if (typeof WeakRef > "u") return function() {
		return e || null;
	};
	var t = e ? new WeakRef(e) : null;
	return function() {
		return t?.deref() || null;
	};
}
var na = function(e) {
	if (!e) return null;
	for (var t = [], n = e; n && n !== document.body;) t.push({
		current: ta(n),
		parent: ta(n.parentElement),
		left: ta(n.previousElementSibling),
		right: ta(n.nextElementSibling)
	}), n = n.parentElement;
	return {
		element: ta(e),
		stack: t,
		ownerDocument: e.ownerDocument
	};
}, ra = function(e) {
	if (e) for (var t = e.stack, n = e.ownerDocument, r = /* @__PURE__ */ new Map(), i = 0, a = t; i < a.length; i++) {
		var o = a[i], s = o.parent?.call(o);
		if (s && n.contains(s)) {
			for (var c = o.left?.call(o), l = o.current(), u = s.contains(l) ? l : void 0, d = o.right?.call(o), f = Si([s], r), p = u ?? c?.nextElementSibling ?? d ?? c; p;) {
				for (var m = 0, h = f; m < h.length; m++) {
					var g = h[m];
					if (p?.contains(g.node)) return g.node;
				}
				p = p.nextElementSibling;
			}
			if (f.length) return f[0].node;
		}
	}
}, ia = function(e) {
	var t = na(e);
	return function() {
		return ra(t);
	};
}, aa = function(e, t, n) {
	if (!e || !t) return console.error("no element or scope given"), {};
	var r = Kr(t);
	if (r.every(function(t) {
		return !Ti(t, e);
	})) return console.error("Active element is not contained in the scope"), {};
	var i = n ? Si(r, /* @__PURE__ */ new Map()) : Ci(r, /* @__PURE__ */ new Map()), a = i.findIndex(function(t) {
		return t.node === e;
	});
	if (a !== -1) return {
		prev: i[a - 1],
		next: i[a + 1],
		first: i[0],
		last: i[i.length - 1]
	};
}, oa = function(e, t) {
	var n = t ? Si(Kr(e), /* @__PURE__ */ new Map()) : Ci(Kr(e), /* @__PURE__ */ new Map());
	return {
		first: n[0],
		last: n[n.length - 1]
	};
}, sa = function(e) {
	return Object.assign({
		scope: document.body,
		cycle: !0,
		onlyTabbable: !0
	}, e);
}, ca = function(e, t, n) {
	t === void 0 && (t = {});
	var r = sa(t), i = aa(e, r.scope, r.onlyTabbable);
	if (i) {
		var a = n(i, r.cycle);
		a && Zi(a.node, r.focusOptions);
	}
}, la = function(e, t) {
	t === void 0 && (t = {}), ca(e, t, function(e, t) {
		var n = e.next, r = e.first;
		return n || t && r;
	});
}, ua = function(e, t) {
	t === void 0 && (t = {}), ca(e, t, function(e, t) {
		var n = e.prev, r = e.last;
		return n || t && r;
	});
}, da = function(e, t, n) {
	var r = oa(e, t.onlyTabbable ?? !0)[n];
	r && Zi(r.node, t.focusOptions);
}, fa = function(e, t) {
	t === void 0 && (t = {}), da(e, t, "first");
}, pa = function(e, t) {
	t === void 0 && (t = {}), da(e, t, "last");
}, ma = function() {
	return document && document.activeElement === document.body;
}, ha = function() {
	return ma() || Pi();
}, ga = null, _a = null, va = function() {
	return null;
}, ya = null, ba = !1, xa = !1, Sa = function() {
	return !0;
}, Ca = function(e) {
	return (ga.whiteList || Sa)(e);
}, wa = function(e, t) {
	ya = {
		observerNode: e,
		portaledElement: t
	};
}, Ta = function(e) {
	return ya && ya.portaledElement === e;
};
function Ea(e, t, n, r) {
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
var Da = function(e) {
	return e ? !!ba : ba === "meanwhile";
}, Oa = function e(t, n, r) {
	return n && (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, ka = function(e, t) {
	return t.some(function(t) {
		return Oa(e, t, t);
	});
}, Aa = function(e) {
	return Ci(e, /* @__PURE__ */ new Map());
}, ja = function(e) {
	return !Aa([e.parentNode]).some(function(t) {
		return t.node === e;
	});
}, Ma = function() {
	var e = !1;
	if (ga) {
		var t = ga, n = t.observed, r = t.persistentFocus, i = t.autoFocus, a = t.shards, o = t.crossFrame, s = t.focusOptions, c = t.noFocusGuards, l = n || ya && ya.portaledElement;
		if (ma() && _a && _a !== document.body && (!document.body.contains(_a) || ja(_a))) {
			var u = va();
			u && u.focus();
		}
		var d = document && document.activeElement;
		if (l) {
			var f = [l].concat(a.map(Pr).filter(Boolean));
			if ((!d || Ca(d)) && (r || function() {
				if (!Da(o) || !c || !_a || xa) return !1;
				var e = Aa(f), t = e.findIndex(function(e) {
					return e.node === _a;
				});
				return t === 0 || t === e.length - 1;
			}() || !ha() || !_a && i) && (l && !(Ni(f) || d && ka(d, f) || Ta(d, l)) && (document && !_a && d && !i ? (d.blur && d.blur(), document.body.focus()) : (e = ea(f, _a, { focusOptions: s }), ya = {})), _a = document && document.activeElement, _a !== document.body && (va = ia(_a)), ba = !1), document && d !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var p = document && document.activeElement, m = Xi(f), h = m.map(function(e) {
					return e.node;
				}).indexOf(p);
				h > -1 && (m.filter(function(e) {
					var t = e.guard, n = e.node;
					return t && n.dataset.focusAutoGuard;
				}).forEach(function(e) {
					return e.node.removeAttribute("tabIndex");
				}), Ea(h, m.length, 1, m), Ea(h, -1, -1, m));
			}
		}
	}
	return e;
}, Na = function(e) {
	Ma() && e && (e.stopPropagation(), e.preventDefault());
}, Pa = function() {
	return Nr(Ma);
}, Fa = function(e) {
	var t = e.target, n = e.currentTarget;
	n.contains(t) || wa(n, t);
}, Ia = function() {
	return null;
}, La = function(e) {
	var t = e.children;
	return /* @__PURE__ */ A.createElement("div", {
		onBlur: Pa,
		onFocus: Fa
	}, t);
};
La.propTypes = {};
var Ra = function() {
	xa = !0;
}, za = function() {
	xa = !1, ba = "just", Nr(function() {
		ba = "meanwhile";
	});
}, Ba = function() {
	document.addEventListener("focusin", Na), document.addEventListener("focusout", Pa), window.addEventListener("focus", Ra), window.addEventListener("blur", za);
}, Va = function() {
	document.removeEventListener("focusin", Na), document.removeEventListener("focusout", Pa), window.removeEventListener("focus", Ra), window.removeEventListener("blur", za);
};
function Ha(e) {
	return e.filter(function(e) {
		return !e.disabled;
	});
}
var Ua = {
	moveFocusInside: ea,
	focusInside: Ni,
	focusNextElement: la,
	focusPrevElement: ua,
	focusFirstElement: fa,
	focusLastElement: pa,
	captureFocusRestore: ia
};
function Wa(e) {
	var t = e.slice(-1)[0];
	t && !ga && Ba();
	var n = ga, r = n && t && t.id === n.id;
	ga = t, n && !r && (n.onDeactivation(), e.filter(function(e) {
		return e.id === n.id;
	}).length || n.returnFocus(!t)), t ? (_a = null, (!r || n.observed !== t.observed) && t.onActivation(Ua), Ma(!0), Nr(Ma)) : (Va(), _a = null);
}
Er.assignSyncMedium(Fa), Dr.assignMedium(Pa), Or.assignMedium(function(e) {
	return e(Ua);
}), hr(kr, Wr(Ha, Wa)(Ia));
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Ga, Ka = function() {
	if (Ga) return Ga;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.28_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function qa() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Ka();
	return t && e.setAttribute("nonce", t), e;
}
function Ja(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ya(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Xa = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = qa()) && (Ja(t, n), Ya(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Za = function() {
	var e = Xa();
	return function(t, n) {
		A.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Qa = function() {
	var e = Za();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, $a = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, eo = function(e) {
	return parseInt(e || "", 10) || 0;
}, to = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		eo(n),
		eo(r),
		eo(i)
	];
}, no = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return $a;
	var t = to(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, ro = Qa(), io = "data-scroll-locked", ao = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${rr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${io}] {
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
  
  .${tr} {
    right: ${s}px ${r};
  }
  
  .${nr} {
    margin-right: ${s}px ${r};
  }
  
  .${tr} .${tr} {
    right: 0 ${r};
  }
  
  .${nr} .${nr} {
    margin-right: 0 ${r};
  }
  
  body[${io}] {
    ${ir}: ${s}px;
  }
`;
}, oo = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, so = function() {
	A.useEffect(function() {
		return document.body.setAttribute(io, (oo() + 1).toString()), function() {
			var e = oo() - 1;
			e <= 0 ? document.body.removeAttribute(io) : document.body.setAttribute(io, e.toString());
		};
	}, []);
}, co = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	so();
	var a = A.useMemo(function() {
		return no(i);
	}, [i]);
	return A.createElement(ro, { styles: ao(a, !t, i, n ? "" : "!important") });
}, lo = !1;
if (typeof window < "u") try {
	var uo = Object.defineProperty({}, "passive", { get: function() {
		return lo = !0, !0;
	} });
	window.addEventListener("test", uo, uo), window.removeEventListener("test", uo, uo);
} catch {
	lo = !1;
}
var fo = lo ? { passive: !1 } : !1, po = function(e) {
	return e.tagName === "TEXTAREA";
}, mo = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !po(e) && n[t] === "visible");
}, ho = function(e) {
	return mo(e, "overflowY");
}, go = function(e) {
	return mo(e, "overflowX");
}, _o = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), bo(e, r)) {
			var i = xo(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, vo = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, yo = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, bo = function(e, t) {
	return e === "v" ? ho(t) : go(t);
}, xo = function(e, t) {
	return e === "v" ? vo(t) : yo(t);
}, So = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Co = function(e, t, n, r, i) {
	var a = So(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = xo(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && bo(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, wo = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, To = function(e) {
	return [e.deltaX, e.deltaY];
}, Eo = function(e) {
	return e && "current" in e ? e.current : e;
}, Do = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Oo = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, ko = 0, Ao = [];
function jo(e) {
	var t = A.useRef([]), n = A.useRef([0, 0]), r = A.useRef(), i = A.useState(ko++)[0], a = A.useState(Qa)[0], o = A.useRef(e);
	A.useEffect(function() {
		o.current = e;
	}, [e]), A.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = c([e.lockRef.current], (e.shards || []).map(Eo), !0).filter(Boolean);
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
	var s = A.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = wo(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = _o(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = _o(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Co(h, t, e, h === "h" ? s : c, !0);
	}, []), l = A.useCallback(function(e) {
		var n = e;
		if (!(!Ao.length || Ao[Ao.length - 1] !== a)) {
			var r = "deltaY" in n ? To(n) : wo(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Do(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(Eo).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), u = A.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Mo(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = A.useCallback(function(e) {
		n.current = wo(e), r.current = void 0;
	}, []), f = A.useCallback(function(t) {
		u(t.type, To(t), t.target, s(t, e.lockRef.current));
	}, []), p = A.useCallback(function(t) {
		u(t.type, wo(t), t.target, s(t, e.lockRef.current));
	}, []);
	A.useEffect(function() {
		return Ao.push(a), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, fo), document.addEventListener("touchmove", l, fo), document.addEventListener("touchstart", d, fo), function() {
			Ao = Ao.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", l, fo), document.removeEventListener("touchmove", l, fo), document.removeEventListener("touchstart", d, fo);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return A.createElement(A.Fragment, null, h ? A.createElement(a, { styles: Oo(i) }) : null, m ? A.createElement(co, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Mo(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
hr(gr, jo);
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var No = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Po = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Io = {}, Lo = 0, Ro = function(e) {
	return e && (e.host || Ro(e.parentNode));
}, zo = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ro(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Bo = function(e, t, n, r) {
	var i = zo(t, Array.isArray(e) ? e : [e]);
	Io[n] || (Io[n] = /* @__PURE__ */ new WeakMap());
	var a = Io[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Po.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Po.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Fo.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Lo++, function() {
		o.forEach(function(e) {
			var t = Po.get(e) - 1, i = a.get(e) - 1;
			Po.set(e, t), a.set(e, i), t || (Fo.has(e) || e.removeAttribute(r), Fo.delete(e)), i || e.removeAttribute(n);
		}), Lo--, Lo || (Po = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Io = {});
	};
}, Vo = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || No(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Bo(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Ho = Qa(), Uo = "\n [" + Lr + "] {\n   pointer-events: none !important;\n }\n", Wo = function() {
	return A.createElement(Ho, { styles: Uo });
}, Go = function(e) {
	return "current" in e ? e.current : e;
};
function Ko(e) {
	var t = e.setLockProps, n = e.onEscapeKey, r = e.onClickOutside, i = e.shards, a = e.onActivation, o = e.onDeactivation, s = e.noIsolation, c = e.activeNode, l = (0, A.useRef)(null), u = (0, A.useRef)(0);
	return A.useEffect(function() {
		var e = function(e) {
			e.defaultPrevented || (e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) && n && n(e);
		}, t = function(e) {
			e.defaultPrevented || e.target === l.current || e instanceof MouseEvent && e.button !== 0 || i && i.map(Go).some(function(t) {
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
	]), (0, A.useEffect)(function() {
		if (c) return a && a(c), function() {
			o && o();
		};
	}, [!!c]), (0, A.useEffect)(function() {
		if (!(s || !c)) return Vo(p([c], (i || []).map(Go)), c.ownerDocument.body, Lr);
	}, [c, s]), (0, A.useEffect)(function() {
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
	}, []), A.createElement(Wo, null);
}
//#endregion
//#region node_modules/.pnpm/react-focus-on@3.10.2_@types+react@18.3.28_react@18.3.1/node_modules/react-focus-on/dist/es2015/sidecar.js
var qo = hr(Ir, Ko), Jo = function(e) {
	return A.createElement(qo, a({}, e));
}, Yo = A.forwardRef(function(e, t) {
	return A.createElement(zr, a({}, e, {
		ref: t,
		sideCar: Jo
	}));
}), Xo = class extends A.Component {
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
		return this.rootElement ? /* @__PURE__ */ Qn.createPortal(this.props.children, this.rootElement) : null;
	}
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useToggleHook.js
function Zo(e = !1, t = {}) {
	let { handleToggleOn: n, handleToggleOff: r, handleToggle: i } = t, [a, o] = (0, A.useState)(e), s = (0, A.useCallback)(() => {
		o(!0), n?.(), i?.(!0);
	}, [n, i]), c = (0, A.useCallback)(() => {
		o(!1), r?.(), i?.(!1);
	}, [r, i]);
	return [
		a,
		s,
		c,
		(0, A.useCallback)(() => {
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
var Qo = function(e) {
	return e.reduce(function(e, t) {
		var n = t[0];
		return e[n] = t[1], e;
	}, {});
}, $o = typeof window < "u" && window.document && window.document.createElement ? A.useLayoutEffect : A.useEffect;
//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function es(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!D(i) || !y(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function ts(e) {
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
			!D(r) || !y(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var ns = /* @__PURE__ */ b({ defaultModifiers: [
	_,
	ae,
	le,
	{
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: es,
		effect: ts,
		requires: ["computeStyles"]
	},
	T,
	S,
	x,
	ue,
	C
] }), rs = /* @__PURE__ */ o((/* @__PURE__ */ g(((e, t) => {
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
})))()), is = [], as = function(e, t, n) {
	n === void 0 && (n = {});
	var r = A.useRef(null), i = {
		onFirstUpdate: n.onFirstUpdate,
		placement: n.placement || "bottom",
		strategy: n.strategy || "absolute",
		modifiers: n.modifiers || is
	}, a = A.useState({
		styles: {
			popper: {
				position: i.strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	}), o = a[0], s = a[1], c = A.useMemo(function() {
		return {
			name: "updateState",
			enabled: !0,
			phase: "write",
			fn: function(e) {
				var t = e.state, n = Object.keys(t.elements);
				Qn.flushSync(function() {
					s({
						styles: Qo(n.map(function(e) {
							return [e, t.styles[e] || {}];
						})),
						attributes: Qo(n.map(function(e) {
							return [e, t.attributes[e]];
						}))
					});
				});
			},
			requires: ["computeStyles"]
		};
	}, []), l = A.useMemo(function() {
		var e = {
			onFirstUpdate: i.onFirstUpdate,
			placement: i.placement,
			strategy: i.strategy,
			modifiers: [].concat(i.modifiers, [c, {
				name: "applyStyles",
				enabled: !1
			}])
		};
		return (0, rs.default)(r.current, e) ? r.current || e : (r.current = e, e);
	}, [
		i.onFirstUpdate,
		i.placement,
		i.strategy,
		i.modifiers,
		c
	]), u = A.useRef();
	return $o(function() {
		u.current && u.current.setOptions(l);
	}, [l]), $o(function() {
		if (!(e == null || t == null)) {
			var r = (n.createPopper || ns)(e, t, l);
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
function os({ children: e, target: t, strategy: n, placement: r, modifiers: i }) {
	let [a, o] = (0, A.useState)(null), { styles: s, attributes: c } = as(t, a, {
		modifiers: i,
		strategy: n,
		placement: r
	});
	return t ? /* @__PURE__ */ A.createElement("div", {
		ref: o,
		style: {
			...s.popper,
			zIndex: 2e3
		},
		...c.popper
	}, e) : null;
}
os.defaultProps = { target: void 0 }, os.propTypes = {
	children: O.default.node,
	target: O.default.shape({ current: O.default.shape({}) }),
	strategy: O.default.oneOf(["absolute", "fixed"]),
	placement: O.default.oneOf([
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
	modifiers: O.default.arrayOf(O.default.shape({}))
}, os.defaultProps = {
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
var ss = {
	right: [-2, 10],
	left: [-2, 10]
};
function cs({ children: e, onClose: t, isOpen: n, positionRef: r, isBlocking: i, withPortal: a, placement: o, hasArrow: s, ...c }) {
	let l = a ? Xo : A.Fragment, u = ss[o] || [0, 10], d = [{
		name: "eventListeners",
		options: { scroll: !1 }
	}, {
		name: "offset",
		options: { offset: () => u }
	}], f = (e) => {
		e.type !== "touchstart" && t();
	};
	return /* @__PURE__ */ A.createElement(er, {
		onClose: t,
		isOpen: n,
		isBlocking: i
	}, /* @__PURE__ */ A.createElement(l, null, /* @__PURE__ */ A.createElement(os, {
		modifiers: s ? d : null,
		target: r,
		placement: o,
		...c
	}, /* @__PURE__ */ A.createElement(Yo, {
		scrollLock: !1,
		enabled: n,
		onEscapeKey: t,
		onClickOutside: f
	}, n && /* @__PURE__ */ A.createElement("div", { className: "pgn__modal-popup__tooltip" }, e, s && /* @__PURE__ */ A.createElement("div", {
		id: "arrow",
		"data-testid": "modal-popup-arrow",
		className: `pgn__modal-popup__arrow pgn__modal-popup__arrow-${o}`,
		"data-popper-arrow": ""
	}))))));
}
cs.propTypes = {
	children: O.default.node.isRequired,
	onClose: O.default.func.isRequired,
	isOpen: O.default.bool.isRequired,
	isBlocking: O.default.bool,
	withPortal: O.default.bool,
	positionRef: O.default.oneOfType([O.default.func, O.default.shape({ current: O.default.shape({}) })]),
	placement: os.propTypes.placement,
	hasArrow: O.default.bool
}, cs.defaultProps = {
	isBlocking: !1,
	withPortal: !1,
	placement: "bottom-start",
	positionRef: null,
	hasArrow: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var F = w(), ls = ["top", "bottom"], us = /* @__PURE__ */ A.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, A.useState)(!1), c = A.useRef(), l = a || c;
	return (0, A.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ A.createElement("div", {
		className: (0, k.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
us.propTypes = {
	children: O.default.node.isRequired,
	position: O.default.oneOf(ls),
	offset: O.default.oneOfType([O.default.number, O.default.string]),
	className: O.default.string
}, us.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs
function ds() {
	return (ds = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}).apply(this, arguments);
}
function fs(e, t) {
	if (e == null) return {};
	var n, r, i = {}, a = Object.keys(e);
	for (r = 0; r < a.length; r++) t.indexOf(n = a[r]) >= 0 || (i[n] = e[n]);
	return i;
}
function ps(e) {
	var t = (0, A.useRef)(e), n = (0, A.useRef)(function(e) {
		t.current && t.current(e);
	});
	return t.current = e, n.current;
}
var ms = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, hs = function(e) {
	return "touches" in e;
}, gs = function(e) {
	return e && e.ownerDocument.defaultView || self;
}, _s = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = hs(t) ? function(e, t) {
		for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
		return e[0];
	}(t.touches, n) : t;
	return {
		left: ms((i.pageX - (r.left + gs(e).pageXOffset)) / r.width),
		top: ms((i.pageY - (r.top + gs(e).pageYOffset)) / r.height)
	};
}, vs = function(e) {
	!hs(e) && e.preventDefault();
}, ys = A.memo(function(e) {
	var t = e.onMove, n = e.onKey, r = fs(e, ["onMove", "onKey"]), i = (0, A.useRef)(null), a = ps(t), o = ps(n), s = (0, A.useRef)(null), c = (0, A.useRef)(!1), l = (0, A.useMemo)(function() {
		var e = function(e) {
			vs(e), (hs(e) ? e.touches.length > 0 : e.buttons > 0) && i.current ? a(_s(i.current, e, s.current)) : n(!1);
		}, t = function() {
			return n(!1);
		};
		function n(n) {
			var r = c.current, a = gs(i.current), o = n ? a.addEventListener : a.removeEventListener;
			o(r ? "touchmove" : "mousemove", e), o(r ? "touchend" : "mouseup", t);
		}
		return [
			function(e) {
				var t = e.nativeEvent, r = i.current;
				if (r && (vs(t), !function(e, t) {
					return t && !hs(e);
				}(t, c.current) && r)) {
					if (hs(t)) {
						c.current = !0;
						var o = t.changedTouches || [];
						o.length && (s.current = o[0].identifier);
					}
					r.focus(), a(_s(r, t, s.current)), n(!0);
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
	return (0, A.useEffect)(function() {
		return f;
	}, [f]), A.createElement("div", ds({}, r, {
		onTouchStart: u,
		onMouseDown: u,
		className: "react-colorful__interactive",
		ref: i,
		onKeyDown: d,
		tabIndex: 0,
		role: "slider"
	}));
}), bs = function(e) {
	return e.filter(Boolean).join(" ");
}, xs = function(e) {
	var t = e.color, n = e.left, r = e.top, i = r === void 0 ? .5 : r, a = bs(["react-colorful__pointer", e.className]);
	return A.createElement("div", {
		className: a,
		style: {
			top: 100 * i + "%",
			left: 100 * n + "%"
		}
	}, A.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: t }
	}));
}, Ss = function(e, t, n) {
	return t === void 0 && (t = 0), n === void 0 && (n = 10 ** t), Math.round(n * e) / n;
};
360 / (2 * Math.PI);
var Cs = function(e) {
	return js(ws(e));
}, ws = function(e) {
	return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? {
		r: parseInt(e[0] + e[0], 16),
		g: parseInt(e[1] + e[1], 16),
		b: parseInt(e[2] + e[2], 16),
		a: e.length === 4 ? Ss(parseInt(e[3] + e[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(e.substring(0, 2), 16),
		g: parseInt(e.substring(2, 4), 16),
		b: parseInt(e.substring(4, 6), 16),
		a: e.length === 8 ? Ss(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
	};
}, Ts = function(e) {
	return As(Os(e));
}, Es = function(e) {
	var t = e.s, n = e.v, r = e.a, i = (200 - t) * n / 100;
	return {
		h: Ss(e.h),
		s: Ss(i > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0),
		l: Ss(i / 2),
		a: Ss(r, 2)
	};
}, Ds = function(e) {
	var t = Es(e);
	return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Os = function(e) {
	var t = e.h, n = e.s, r = e.v, i = e.a;
	t = t / 360 * 6, n /= 100, r /= 100;
	var a = Math.floor(t), o = r * (1 - n), s = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
	return {
		r: Ss(255 * [
			r,
			s,
			o,
			o,
			c,
			r
		][l]),
		g: Ss(255 * [
			c,
			r,
			r,
			s,
			o,
			o
		][l]),
		b: Ss(255 * [
			o,
			o,
			c,
			r,
			r,
			s
		][l]),
		a: Ss(i, 2)
	};
}, ks = function(e) {
	var t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}, As = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = i < 1 ? ks(Ss(255 * i)) : "";
	return "#" + ks(t) + ks(n) + ks(r) + a;
}, js = function(e) {
	var t = e.r, n = e.g, r = e.b, i = e.a, a = Math.max(t, n, r), o = a - Math.min(t, n, r), s = o ? a === t ? (n - r) / o : a === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
	return {
		h: Ss(60 * (s < 0 ? s + 6 : s)),
		s: Ss(a ? o / a * 100 : 0),
		v: Ss(a / 255 * 100),
		a: i
	};
}, Ms = A.memo(function(e) {
	var t = e.hue, n = e.onChange, r = bs(["react-colorful__hue", e.className]);
	return A.createElement("div", { className: r }, A.createElement(ys, {
		onMove: function(e) {
			n({ h: 360 * e.left });
		},
		onKey: function(e) {
			n({ h: ms(t + 360 * e.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": Ss(t),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, A.createElement(xs, {
		className: "react-colorful__hue-pointer",
		left: t / 360,
		color: Ds({
			h: t,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), Ns = A.memo(function(e) {
	var t = e.hsva, n = e.onChange, r = { backgroundColor: Ds({
		h: t.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return A.createElement("div", {
		className: "react-colorful__saturation",
		style: r
	}, A.createElement(ys, {
		onMove: function(e) {
			n({
				s: 100 * e.left,
				v: 100 - 100 * e.top
			});
		},
		onKey: function(e) {
			n({
				s: ms(t.s + 100 * e.left, 0, 100),
				v: ms(t.v - 100 * e.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + Ss(t.s) + "%, Brightness " + Ss(t.v) + "%"
	}, A.createElement(xs, {
		className: "react-colorful__saturation-pointer",
		top: 1 - t.v / 100,
		left: t.s / 100,
		color: Ds(t)
	})));
}), Ps = function(e, t) {
	if (e === t) return !0;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}, Fs = function(e, t) {
	return e.toLowerCase() === t.toLowerCase() || Ps(ws(e), ws(t));
};
function Is(e, t, n) {
	var r = ps(n), i = (0, A.useState)(function() {
		return e.toHsva(t);
	}), a = i[0], o = i[1], s = (0, A.useRef)({
		color: t,
		hsva: a
	});
	return (0, A.useEffect)(function() {
		if (!e.equal(t, s.current.color)) {
			var n = e.toHsva(t);
			s.current = {
				hsva: n,
				color: t
			}, o(n);
		}
	}, [t, e]), (0, A.useEffect)(function() {
		var t;
		Ps(a, s.current.hsva) || e.equal(t = e.fromHsva(a), s.current.color) || (s.current = {
			hsva: a,
			color: t
		}, r(t));
	}, [
		a,
		e,
		r
	]), [a, (0, A.useCallback)(function(e) {
		o(function(t) {
			return Object.assign({}, t, e);
		});
	}, [])];
}
var Ls, Rs = typeof window < "u" ? A.useLayoutEffect : A.useEffect, zs = function() {
	return Ls || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, Bs = /* @__PURE__ */ new Map(), Vs = function(e) {
	Rs(function() {
		var t = e.current ? e.current.ownerDocument : document;
		if (t !== void 0 && !Bs.has(t)) {
			var n = t.createElement("style");
			n.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", Bs.set(t, n);
			var r = zs();
			r && n.setAttribute("nonce", r), t.head.appendChild(n);
		}
	}, []);
}, Hs = function(e) {
	var t = e.className, n = e.colorModel, r = e.color, i = r === void 0 ? n.defaultColor : r, a = e.onChange, o = fs(e, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), s = (0, A.useRef)(null);
	Vs(s);
	var c = Is(n, i, a), l = c[0], u = c[1], d = bs(["react-colorful", t]);
	return A.createElement("div", ds({}, o, {
		ref: s,
		className: d
	}), A.createElement(Ns, {
		hsva: l,
		onChange: u
	}), A.createElement(Ms, {
		hue: l.h,
		onChange: u,
		className: "react-colorful__last-control"
	}));
}, Us = {
	defaultColor: "000",
	toHsva: Cs,
	fromHsva: function(e) {
		return Ts({
			h: e.h,
			s: e.s,
			v: e.v,
			a: 1
		});
	},
	equal: Fs
}, Ws = function(e) {
	return A.createElement(Hs, ds({}, e, { colorModel: Us }));
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/ColorPicker/index.js
function Gs({ color: e, setColor: t, className: n, size: r }) {
	let [i, a, o] = Zo(!1), [s, c] = A.useState(null), l = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => e.startsWith("#") ? e.slice(0, 7) : `#${e}`.slice(0, 7), [d, f] = A.useState(() => e === "" || l(u(e))), [p, m] = A.useState(() => e === "" ? "" : u(e)), [h, g] = A.useState(() => {
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
	return /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("span", { className: "d-flex" }, /* @__PURE__ */ A.createElement(ee, {
		placement: "top",
		overlay: /* @__PURE__ */ A.createElement(oe, { id: "color-picker-tooltip" }, "Color picker")
	}, /* @__PURE__ */ A.createElement(v, {
		ref: c,
		className: (0, k.default)(n, "pgn__color-picker", `pgn__color-picker-${r}`),
		style: { ...e && d ? { background: `${e}` } : {} },
		onClick: a
	}))), /* @__PURE__ */ A.createElement(cs, {
		positionRef: s,
		isOpen: i,
		style: { background: "black" },
		onClose: o
	}, /* @__PURE__ */ A.createElement("div", {
		className: "pgn__color-modal rounded shadow",
		style: { textAlign: "start" }
	}, /* @__PURE__ */ A.createElement(Ws, {
		color: h,
		onChange: _
	}), /* @__PURE__ */ A.createElement(P.Group, {
		className: "pgn__hex-form",
		size: "sm"
	}, /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement(P.Label, { className: "pgn__hex-label" }, "Hex"), /* @__PURE__ */ A.createElement(P.Control, {
		className: "pgn__hex-field",
		isInvalid: !d,
		value: p,
		onChange: (e) => _(e.target.value),
		"data-testid": "hex-input",
		spellCheck: "false"
	})), !d && /* @__PURE__ */ A.createElement(P.Control.Feedback, {
		className: "pgn__color-error",
		type: "invalid"
	}, "Colors must be in hexadecimal format.")))));
}
Gs.defaultProps = {
	color: "",
	className: void 0,
	size: "md"
}, Gs.propTypes = {
	color: O.default.string,
	setColor: O.default.func.isRequired,
	className: O.default.string,
	size: O.default.oneOf(["sm", "md"])
};
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var Ks = function(e) {
	return qs(e) && !Js(e);
};
function qs(e) {
	return !!e && typeof e == "object";
}
function Js(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Xs(e);
}
var Ys = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Xs(e) {
	return e.$$typeof === Ys;
}
function Zs(e) {
	return Array.isArray(e) ? [] : {};
}
function Qs(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? tc(Zs(e), e, t) : e;
}
function $s(e, t, n) {
	return e.concat(t).map(function(e) {
		return Qs(e, n);
	});
}
function ec(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Qs(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Qs(t[i], n) : r[i] = tc(e[i], t[i], n);
	}), r;
}
function tc(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || $s, n.isMergeableObject = n.isMergeableObject || Ks;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : ec(e, t, n) : Qs(t, n);
}
tc.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return tc(e, n, t);
	}, {});
};
var nc = tc, rc = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, ic = typeof self == "object" && self && self.Object === Object && self, ac = rc || ic || Function("return this")(), oc = ac.Symbol, sc = Object.prototype, cc = sc.hasOwnProperty, lc = sc.toString, uc = oc ? oc.toStringTag : void 0;
function dc(e) {
	var t = cc.call(e, uc), n = e[uc];
	try {
		e[uc] = void 0;
		var r = !0;
	} catch {}
	var i = lc.call(e);
	return r && (t ? e[uc] = n : delete e[uc]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var fc = Object.prototype.toString;
function pc(e) {
	return fc.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var mc = "[object Null]", hc = "[object Undefined]", gc = oc ? oc.toStringTag : void 0;
function _c(e) {
	return e == null ? e === void 0 ? hc : mc : gc && gc in Object(e) ? dc(e) : pc(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function vc(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var yc = vc(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function bc(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var xc = "[object Object]", Sc = Function.prototype, Cc = Object.prototype, wc = Sc.toString, Tc = Cc.hasOwnProperty, Ec = wc.call(Object);
function Dc(e) {
	if (!bc(e) || _c(e) != xc) return !1;
	var t = yc(e);
	if (t === null) return !0;
	var n = Tc.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && wc.call(n) == Ec;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function Oc() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function kc(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function Ac(e, t) {
	for (var n = e.length; n--;) if (kc(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var jc = Array.prototype.splice;
function Mc(e) {
	var t = this.__data__, n = Ac(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : jc.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function Nc(e) {
	var t = this.__data__, n = Ac(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function Pc(e) {
	return Ac(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function Fc(e, t) {
	var n = this.__data__, r = Ac(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function Ic(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ic.prototype.clear = Oc, Ic.prototype.delete = Mc, Ic.prototype.get = Nc, Ic.prototype.has = Pc, Ic.prototype.set = Fc;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function Lc() {
	this.__data__ = new Ic(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Rc(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function zc(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Bc(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Vc(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Hc = "[object AsyncFunction]", Uc = "[object Function]", Wc = "[object GeneratorFunction]", Gc = "[object Proxy]";
function Kc(e) {
	if (!Vc(e)) return !1;
	var t = _c(e);
	return t == Uc || t == Wc || t == Hc || t == Gc;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var qc = ac["__core-js_shared__"], Jc = function() {
	var e = /[^.]+$/.exec(qc && qc.keys && qc.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Yc(e) {
	return !!Jc && Jc in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Xc = Function.prototype.toString;
function Zc(e) {
	if (e != null) {
		try {
			return Xc.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var Qc = /[\\^$.*+?()[\]{}|]/g, $c = /^\[object .+?Constructor\]$/, el = Function.prototype, tl = Object.prototype, nl = el.toString, rl = tl.hasOwnProperty, il = RegExp("^" + nl.call(rl).replace(Qc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function al(e) {
	return !Vc(e) || Yc(e) ? !1 : (Kc(e) ? il : $c).test(Zc(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function ol(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function sl(e, t) {
	var n = ol(e, t);
	return al(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var cl = sl(ac, "Map"), ll = sl(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function ul() {
	this.__data__ = ll ? ll(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function dl(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var fl = "__lodash_hash_undefined__", pl = Object.prototype.hasOwnProperty;
function ml(e) {
	var t = this.__data__;
	if (ll) {
		var n = t[e];
		return n === fl ? void 0 : n;
	}
	return pl.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var hl = Object.prototype.hasOwnProperty;
function gl(e) {
	var t = this.__data__;
	return ll ? t[e] !== void 0 : hl.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var _l = "__lodash_hash_undefined__";
function vl(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = ll && t === void 0 ? _l : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function yl(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
yl.prototype.clear = ul, yl.prototype.delete = dl, yl.prototype.get = ml, yl.prototype.has = gl, yl.prototype.set = vl;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function bl() {
	this.size = 0, this.__data__ = {
		hash: new yl(),
		map: new (cl || Ic)(),
		string: new yl()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function xl(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function Sl(e, t) {
	var n = e.__data__;
	return xl(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function Cl(e) {
	var t = Sl(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function wl(e) {
	return Sl(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function Tl(e) {
	return Sl(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function El(e, t) {
	var n = Sl(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function Dl(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Dl.prototype.clear = bl, Dl.prototype.delete = Cl, Dl.prototype.get = wl, Dl.prototype.has = Tl, Dl.prototype.set = El;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var Ol = 200;
function kl(e, t) {
	var n = this.__data__;
	if (n instanceof Ic) {
		var r = n.__data__;
		if (!cl || r.length < Ol - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Dl(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function Al(e) {
	this.size = (this.__data__ = new Ic(e)).size;
}
Al.prototype.clear = Lc, Al.prototype.delete = Rc, Al.prototype.get = zc, Al.prototype.has = Bc, Al.prototype.set = kl;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function jl(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var Ml = function() {
	try {
		var e = sl(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function Nl(e, t, n) {
	t == "__proto__" && Ml ? Ml(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var Pl = Object.prototype.hasOwnProperty;
function Fl(e, t, n) {
	var r = e[t];
	(!(Pl.call(e, t) && kc(r, n)) || n === void 0 && !(t in e)) && Nl(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function Il(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Nl(n, s, c) : Fl(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function Ll(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Rl = "[object Arguments]";
function zl(e) {
	return bc(e) && _c(e) == Rl;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var Bl = Object.prototype, Vl = Bl.hasOwnProperty, Hl = Bl.propertyIsEnumerable, Ul = zl(function() {
	return arguments;
}()) ? zl : function(e) {
	return bc(e) && Vl.call(e, "callee") && !Hl.call(e, "callee");
}, Wl = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Gl() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Kl = typeof exports == "object" && exports && !exports.nodeType && exports, ql = Kl && typeof module == "object" && module && !module.nodeType && module, Jl = ql && ql.exports === Kl ? ac.Buffer : void 0, Yl = (Jl ? Jl.isBuffer : void 0) || Gl, Xl = 9007199254740991, Zl = /^(?:0|[1-9]\d*)$/;
function Ql(e, t) {
	var n = typeof e;
	return t ??= Xl, !!t && (n == "number" || n != "symbol" && Zl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var $l = 9007199254740991;
function eu(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $l;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var tu = "[object Arguments]", nu = "[object Array]", ru = "[object Boolean]", iu = "[object Date]", au = "[object Error]", ou = "[object Function]", su = "[object Map]", cu = "[object Number]", lu = "[object Object]", uu = "[object RegExp]", du = "[object Set]", fu = "[object String]", pu = "[object WeakMap]", mu = "[object ArrayBuffer]", hu = "[object DataView]", gu = "[object Float32Array]", _u = "[object Float64Array]", vu = "[object Int8Array]", yu = "[object Int16Array]", bu = "[object Int32Array]", xu = "[object Uint8Array]", Su = "[object Uint8ClampedArray]", Cu = "[object Uint16Array]", wu = "[object Uint32Array]", I = {};
I[gu] = I[_u] = I[vu] = I[yu] = I[bu] = I[xu] = I[Su] = I[Cu] = I[wu] = !0, I[tu] = I[nu] = I[mu] = I[ru] = I[hu] = I[iu] = I[au] = I[ou] = I[su] = I[cu] = I[lu] = I[uu] = I[du] = I[fu] = I[pu] = !1;
function Tu(e) {
	return bc(e) && eu(e.length) && !!I[_c(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function Eu(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var Du = typeof exports == "object" && exports && !exports.nodeType && exports, Ou = Du && typeof module == "object" && module && !module.nodeType && module, ku = Ou && Ou.exports === Du && rc.process, Au = function() {
	try {
		return Ou && Ou.require && Ou.require("util").types || ku && ku.binding && ku.binding("util");
	} catch {}
}(), ju = Au && Au.isTypedArray, Mu = ju ? Eu(ju) : Tu, Nu = Object.prototype.hasOwnProperty;
function Pu(e, t) {
	var n = Wl(e), r = !n && Ul(e), i = !n && !r && Yl(e), a = !n && !r && !i && Mu(e), o = n || r || i || a, s = o ? Ll(e.length, String) : [], c = s.length;
	for (var l in e) (t || Nu.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ql(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var Fu = Object.prototype;
function Iu(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Fu);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var Lu = vc(Object.keys, Object), Ru = Object.prototype.hasOwnProperty;
function zu(e) {
	if (!Iu(e)) return Lu(e);
	var t = [];
	for (var n in Object(e)) Ru.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Bu(e) {
	return e != null && eu(e.length) && !Kc(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Vu(e) {
	return Bu(e) ? Pu(e) : zu(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function Hu(e, t) {
	return e && Il(t, Vu(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Uu(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var Wu = Object.prototype.hasOwnProperty;
function Gu(e) {
	if (!Vc(e)) return Uu(e);
	var t = Iu(e), n = [];
	for (var r in e) r == "constructor" && (t || !Wu.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Ku(e) {
	return Bu(e) ? Pu(e, !0) : Gu(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function qu(e, t) {
	return e && Il(t, Ku(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Ju = typeof exports == "object" && exports && !exports.nodeType && exports, Yu = Ju && typeof module == "object" && module && !module.nodeType && module, Xu = Yu && Yu.exports === Ju ? ac.Buffer : void 0, Zu = Xu ? Xu.allocUnsafe : void 0;
function Qu(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Zu ? Zu(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function $u(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function ed(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function td() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var nd = Object.prototype.propertyIsEnumerable, rd = Object.getOwnPropertySymbols, id = rd ? function(e) {
	return e == null ? [] : (e = Object(e), ed(rd(e), function(t) {
		return nd.call(e, t);
	}));
} : td;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function ad(e, t) {
	return Il(e, id(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function od(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var sd = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) od(t, id(e)), e = yc(e);
	return t;
} : td;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function cd(e, t) {
	return Il(e, sd(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function ld(e, t, n) {
	var r = t(e);
	return Wl(e) ? r : od(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function ud(e) {
	return ld(e, Vu, id);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function dd(e) {
	return ld(e, Ku, sd);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var fd = sl(ac, "DataView"), pd = sl(ac, "Promise"), md = sl(ac, "Set"), hd = sl(ac, "WeakMap"), gd = "[object Map]", _d = "[object Object]", vd = "[object Promise]", yd = "[object Set]", bd = "[object WeakMap]", xd = "[object DataView]", Sd = Zc(fd), Cd = Zc(cl), wd = Zc(pd), Td = Zc(md), Ed = Zc(hd), Dd = _c;
(fd && Dd(new fd(/* @__PURE__ */ new ArrayBuffer(1))) != xd || cl && Dd(new cl()) != gd || pd && Dd(pd.resolve()) != vd || md && Dd(new md()) != yd || hd && Dd(new hd()) != bd) && (Dd = function(e) {
	var t = _c(e), n = t == _d ? e.constructor : void 0, r = n ? Zc(n) : "";
	if (r) switch (r) {
		case Sd: return xd;
		case Cd: return gd;
		case wd: return vd;
		case Td: return yd;
		case Ed: return bd;
	}
	return t;
});
var Od = Dd, kd = Object.prototype.hasOwnProperty;
function Ad(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && kd.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var jd = ac.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function Md(e) {
	var t = new e.constructor(e.byteLength);
	return new jd(t).set(new jd(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function Nd(e, t) {
	var n = t ? Md(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var Pd = /\w*$/;
function Fd(e) {
	var t = new e.constructor(e.source, Pd.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var Id = oc ? oc.prototype : void 0, Ld = Id ? Id.valueOf : void 0;
function Rd(e) {
	return Ld ? Object(Ld.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function zd(e, t) {
	var n = t ? Md(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var Bd = "[object Boolean]", Vd = "[object Date]", Hd = "[object Map]", Ud = "[object Number]", Wd = "[object RegExp]", Gd = "[object Set]", Kd = "[object String]", qd = "[object Symbol]", Jd = "[object ArrayBuffer]", Yd = "[object DataView]", Xd = "[object Float32Array]", Zd = "[object Float64Array]", Qd = "[object Int8Array]", $d = "[object Int16Array]", ef = "[object Int32Array]", tf = "[object Uint8Array]", nf = "[object Uint8ClampedArray]", rf = "[object Uint16Array]", af = "[object Uint32Array]";
function of(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Jd: return Md(e);
		case Bd:
		case Vd: return new r(+e);
		case Yd: return Nd(e, n);
		case Xd:
		case Zd:
		case Qd:
		case $d:
		case ef:
		case tf:
		case nf:
		case rf:
		case af: return zd(e, n);
		case Hd: return new r();
		case Ud:
		case Kd: return new r(e);
		case Wd: return Fd(e);
		case Gd: return new r();
		case qd: return Rd(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var sf = Object.create, cf = function() {
	function e() {}
	return function(t) {
		if (!Vc(t)) return {};
		if (sf) return sf(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function lf(e) {
	return typeof e.constructor == "function" && !Iu(e) ? cf(yc(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var uf = "[object Map]";
function df(e) {
	return bc(e) && Od(e) == uf;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var ff = Au && Au.isMap, pf = ff ? Eu(ff) : df, mf = "[object Set]";
function hf(e) {
	return bc(e) && Od(e) == mf;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var gf = Au && Au.isSet, _f = gf ? Eu(gf) : hf, vf = 1, yf = 2, bf = 4, xf = "[object Arguments]", Sf = "[object Array]", Cf = "[object Boolean]", wf = "[object Date]", Tf = "[object Error]", Ef = "[object Function]", Df = "[object GeneratorFunction]", Of = "[object Map]", kf = "[object Number]", Af = "[object Object]", jf = "[object RegExp]", Mf = "[object Set]", Nf = "[object String]", Pf = "[object Symbol]", Ff = "[object WeakMap]", If = "[object ArrayBuffer]", Lf = "[object DataView]", Rf = "[object Float32Array]", zf = "[object Float64Array]", Bf = "[object Int8Array]", Vf = "[object Int16Array]", Hf = "[object Int32Array]", Uf = "[object Uint8Array]", Wf = "[object Uint8ClampedArray]", Gf = "[object Uint16Array]", Kf = "[object Uint32Array]", L = {};
L[xf] = L[Sf] = L[If] = L[Lf] = L[Cf] = L[wf] = L[Rf] = L[zf] = L[Bf] = L[Vf] = L[Hf] = L[Of] = L[kf] = L[Af] = L[jf] = L[Mf] = L[Nf] = L[Pf] = L[Uf] = L[Wf] = L[Gf] = L[Kf] = !0, L[Tf] = L[Ef] = L[Ff] = !1;
function qf(e, t, n, r, i, a) {
	var o, s = t & vf, c = t & yf, l = t & bf;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Vc(e)) return e;
	var u = Wl(e);
	if (u) {
		if (o = Ad(e), !s) return $u(e, o);
	} else {
		var d = Od(e), f = d == Ef || d == Df;
		if (Yl(e)) return Qu(e, s);
		if (d == Af || d == xf || f && !i) {
			if (o = c || f ? {} : lf(e), !s) return c ? cd(e, qu(o, e)) : ad(e, Hu(o, e));
		} else {
			if (!L[d]) return i ? e : {};
			o = of(e, d, s);
		}
	}
	a ||= new Al();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), _f(e) ? e.forEach(function(r) {
		o.add(qf(r, t, n, r, e, a));
	}) : pf(e) && e.forEach(function(r, i) {
		o.set(i, qf(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? dd : ud : c ? Ku : Vu)(e);
	return jl(m || e, function(r, i) {
		m && (i = r, r = e[i]), Fl(o, i, qf(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Jf = 1, Yf = 4;
function Xf(e) {
	return qf(e, Jf | Yf);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Zf = /* @__PURE__ */ o((/* @__PURE__ */ g(((e, t) => {
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
})))()), Qf = !0;
function $f(e, t) {
	if (!Qf) {
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
var ep = 4;
function tp(e) {
	return qf(e, ep);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function np(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var rp = "[object Symbol]";
function ip(e) {
	return typeof e == "symbol" || bc(e) && _c(e) == rp;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var ap = "Expected a function";
function op(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(ap);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (op.Cache || Dl)(), n;
}
op.Cache = Dl;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var sp = 500;
function cp(e) {
	var t = op(e, function(e) {
		return n.size === sp && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var lp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, up = /\\(\\)?/g, dp = cp(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(lp, function(e, n, r, i) {
		t.push(r ? i.replace(up, "$1") : n || e);
	}), t;
}), fp = Infinity;
function pp(e) {
	if (typeof e == "string" || ip(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -fp ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var mp = Infinity, hp = oc ? oc.prototype : void 0, gp = hp ? hp.toString : void 0;
function _p(e) {
	if (typeof e == "string") return e;
	if (Wl(e)) return np(e, _p) + "";
	if (ip(e)) return gp ? gp.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -mp ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function vp(e) {
	return e == null ? "" : _p(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function yp(e) {
	return Wl(e) ? np(e, pp) : ip(e) ? [e] : $u(dp(vp(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function R() {
	return R = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, R.apply(this, arguments);
}
function bp(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function xp(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Sp(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Cp = /* @__PURE__ */ (0, A.createContext)(void 0);
Cp.displayName = "FormikContext";
var wp = Cp.Provider, Tp = Cp.Consumer;
function Ep() {
	var e = (0, A.useContext)(Cp);
	return !e && $f(!1), e;
}
var Dp = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Op = function(e) {
	return typeof e == "function";
}, kp = function(e) {
	return typeof e == "object" && !!e;
}, Ap = function(e) {
	return String(Math.floor(Number(e))) === e;
}, jp = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Mp = function(e) {
	return A.Children.count(e) === 0;
}, Np = function(e) {
	return kp(e) && Op(e.then);
};
function Pp(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = yp(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function Fp(e, t, n) {
	for (var r = tp(e), i = r, a = 0, o = yp(t); a < o.length - 1; a++) {
		var s = o[a], c = Pp(e, o.slice(0, a + 1));
		if (c && (kp(c) || Array.isArray(c))) i = i[s] = tp(c);
		else {
			var l = o[a + 1];
			i = i[s] = Ap(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Ip(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		kp(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Ip(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Lp(e, t) {
	switch (t.type) {
		case "SET_VALUES": return R({}, e, { values: t.payload });
		case "SET_TOUCHED": return R({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Zf.default)(e.errors, t.payload) ? e : R({}, e, { errors: t.payload });
		case "SET_STATUS": return R({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return R({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return R({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return R({}, e, { values: Fp(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return R({}, e, { touched: Fp(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return R({}, e, { errors: Fp(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return R({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return R({}, e, {
			touched: Ip(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return R({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return R({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Rp = {}, zp = {};
function Bp(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = xp(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = R({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, A.useRef)(f.initialValues), m = (0, A.useRef)(f.initialErrors || Rp), h = (0, A.useRef)(f.initialTouched || zp), g = (0, A.useRef)(f.initialStatus), _ = (0, A.useRef)(!1), v = (0, A.useRef)({});
	(0, A.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, A.useState)(0)[1], b = (0, A.useRef)({
		values: Xf(f.initialValues),
		errors: Xf(f.initialErrors) || Rp,
		touched: Xf(f.initialTouched) || zp,
		status: Xf(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, A.useCallback)(function(e) {
		var t = b.current;
		b.current = Lp(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, A.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Rp) : Np(i) ? i.then(function(e) {
				n(e || Rp);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), ee = (0, A.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Op(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Up(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Rp);
			}, function(n) {
				n.name === "ValidationError" ? e(Hp(n)) : t(n);
			});
		});
	}, [f.validationSchema]), w = (0, A.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), te = (0, A.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Op(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return w(t, Pp(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = Fp(e, t[r], n)), e;
			}, {});
		});
	}, [w]), ne = (0, A.useCallback)(function(e) {
		return Promise.all([
			te(e),
			f.validationSchema ? ee(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return nc.all([
				t,
				n,
				r
			], { arrayMerge: Gp });
		});
	}, [
		f.validate,
		f.validationSchema,
		te,
		C,
		ee
	]), T = Yp(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), ne(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, A.useEffect)(function() {
		o && _.current === !0 && (0, Zf.default)(p.current, f.initialValues) && T(p.current);
	}, [o, T]);
	var re = (0, A.useCallback)(function(e) {
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
			var o = f.onReset(x.values, ve);
			Np(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, A.useEffect)(function() {
		_.current === !0 && !(0, Zf.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, re(), o && T(p.current));
	}, [
		l,
		f.initialValues,
		re,
		o,
		T
	]), (0, A.useEffect)(function() {
		l && _.current === !0 && !(0, Zf.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Rp, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Rp
		}));
	}, [l, f.initialErrors]), (0, A.useEffect)(function() {
		l && _.current === !0 && !(0, Zf.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || zp, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || zp
		}));
	}, [l, f.initialTouched]), (0, A.useEffect)(function() {
		l && _.current === !0 && !(0, Zf.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var ie = Yp(function(e) {
		if (v.current[e] && Op(v.current[e].validate)) {
			var t = Pp(x.values, e), n = v.current[e].validate(t);
			return Np(n) ? (S({
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
		}), ee(x.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			S({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: Pp(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), ae = (0, A.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), oe = (0, A.useCallback)(function(e) {
		delete v.current[e];
	}, []), se = Yp(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? T(x.values) : Promise.resolve();
	}), ce = (0, A.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), le = Yp(function(e, t) {
		var r = Op(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? T(r) : Promise.resolve();
	}), E = (0, A.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), D = Yp(function(e, t, r) {
		var i = Op(t) ? t(Pp(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? T(Fp(x.values, e, i)) : Promise.resolve();
	}), ue = (0, A.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!jp(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? qp(Pp(x.values, n), u, l) : d && f ? Kp(d) : l;
		}
		n && D(n, r);
	}, [D, x.values]), de = Yp(function(e) {
		if (jp(e)) return function(t) {
			return ue(t, e);
		};
		ue(e);
	}), O = Yp(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? T(x.values) : Promise.resolve();
	}), k = (0, A.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, O(t || r || i, !0);
	}, [O]), fe = Yp(function(e) {
		if (jp(e)) return function(t) {
			return k(t, e);
		};
		k(e);
	}), pe = (0, A.useCallback)(function(e) {
		Op(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), me = (0, A.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), he = (0, A.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), ge = Yp(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), T().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = ye(), n === void 0) return;
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
	}), _e = Yp(function(e) {
		e && e.preventDefault && Op(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Op(e.stopPropagation) && e.stopPropagation(), ge().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), ve = {
		resetForm: re,
		validateForm: T,
		validateField: ie,
		setErrors: ce,
		setFieldError: E,
		setFieldTouched: O,
		setFieldValue: D,
		setStatus: me,
		setSubmitting: he,
		setTouched: se,
		setValues: le,
		setFormikState: pe,
		submitForm: ge
	}, ye = Yp(function() {
		return u(x.values, ve);
	}), be = Yp(function(e) {
		e && e.preventDefault && Op(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Op(e.stopPropagation) && e.stopPropagation(), re();
	}), xe = (0, A.useCallback)(function(e) {
		return {
			value: Pp(x.values, e),
			error: Pp(x.errors, e),
			touched: !!Pp(x.touched, e),
			initialValue: Pp(p.current, e),
			initialTouched: !!Pp(h.current, e),
			initialError: Pp(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), Se = (0, A.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return D(e, t, n);
			},
			setTouched: function(t, n) {
				return O(e, t, n);
			},
			setError: function(t) {
				return E(e, t);
			}
		};
	}, [
		D,
		O,
		E
	]), Ce = (0, A.useCallback)(function(e) {
		var t = kp(e), n = t ? e.name : e, r = Pp(x.values, n), i = {
			name: n,
			value: r,
			onChange: de,
			onBlur: fe
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		fe,
		de,
		x.values
	]), we = (0, A.useMemo)(function() {
		return !(0, Zf.default)(p.current, x.values);
	}, [p.current, x.values]), Te = (0, A.useMemo)(function() {
		return s === void 0 || we ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Op(s) ? s(f) : s;
	}, [
		s,
		we,
		x.errors,
		f
	]);
	return R({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: fe,
		handleChange: de,
		handleReset: be,
		handleSubmit: _e,
		resetForm: re,
		setErrors: ce,
		setFormikState: pe,
		setFieldTouched: O,
		setFieldValue: D,
		setFieldError: E,
		setStatus: me,
		setSubmitting: he,
		setTouched: se,
		setValues: le,
		submitForm: ge,
		validateForm: T,
		validateField: ie,
		isValid: Te,
		dirty: we,
		unregisterField: oe,
		registerField: ae,
		getFieldProps: Ce,
		getFieldMeta: xe,
		getFieldHelpers: Se,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Vp(e) {
	var t = Bp(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, A.useImperativeHandle)(a, function() {
		return t;
	}), (0, A.createElement)(wp, { value: t }, n ? (0, A.createElement)(n, t) : i ? i(t) : r ? Op(r) ? r(t) : Mp(r) ? null : A.Children.only(r) : null);
}
function Hp(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return Fp(t, e.path, e.message);
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
			Pp(t, o.path) || (t = Fp(t, o.path, o.message));
		}
	}
	return t;
}
function Up(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Wp(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Wp(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || Dc(e) ? Wp(e) : e === "" ? void 0 : e;
		}) : Dc(e[r]) ? t[r] = Wp(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Gp(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? nc(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = nc(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Kp(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function qp(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Jp = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? A.useLayoutEffect : A.useEffect;
function Yp(e) {
	var t = (0, A.useRef)(e);
	return Jp(function() {
		t.current = e;
	}), (0, A.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var Xp = /* @__PURE__ */ (0, A.forwardRef)(function(e, t) {
	var n = e.action, r = xp(e, ["action"]), i = n ?? "#", a = Ep(), o = a.handleReset, s = a.handleSubmit;
	return (0, A.createElement)("form", R({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Xp.displayName = "Form";
function Zp(e) {
	var t = function(t) {
		return (0, A.createElement)(Tp, null, function(n) {
			return !n && $f(!1), (0, A.createElement)(e, R({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, fe.default)(t, e);
}
var Qp = function(e, t, n) {
	var r = nm(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, $p = function(e, t, n) {
	var r = nm(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, em = function(e, t, n) {
	var r = nm(e);
	return r.splice(t, 0, n), r;
}, tm = function(e, t, n) {
	var r = nm(e);
	return r[t] = n, r;
}, nm = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(R({}, e, { length: t + 1 }));
}, rm = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || kp(e) ? n(nm(e)) : e;
	};
}, im = /* @__PURE__ */ function(e) {
	bp(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = rm(r, e), o = rm(t, e), s = Fp(n.values, a, e(Pp(n.values, a))), c = r ? i(Pp(n.errors, a)) : void 0, l = t ? o(Pp(n.touched, a)) : void 0;
				return Dp(c) && (c = void 0), Dp(l) && (l = void 0), R({}, n, {
					values: s,
					errors: r ? Fp(n.errors, a, c) : n.errors,
					touched: t ? Fp(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(nm(t), [Xf(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return $p(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Qp(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return em(n, e, t);
			}, function(t) {
				return em(t, e, null);
			}, function(t) {
				return em(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return tm(n, e, t);
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
		}, n.remove = n.remove.bind(Sp(n)), n.pop = n.pop.bind(Sp(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Zf.default)(Pp(e.formik.values, e.name), Pp(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? nm(n) : [];
			return t ||= r[e], Op(r.splice) && r.splice(e, 1), Op(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = xp(o, ["validate", "validationSchema"]), c = R({}, e, {
			form: s,
			name: a
		});
		return n ? (0, A.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : Mp(i) ? null : A.Children.only(i) : null;
	}, t;
}(A.Component);
im.defaultProps = { validateOnChange: !0 };
var am = /* @__PURE__ */ Zp(im);
//#endregion
//#region src/card-carousel/studio-ui/components/CreateCarouselForm.tsx
function om() {
	let { values: e, setFieldValue: t, handleChange: n } = Ep();
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "p-4",
		children: [
			/* @__PURE__ */ (0, F.jsx)("h3", { children: "Create Card Carousel" }),
			/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [
				/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Display Name" }),
				/* @__PURE__ */ (0, F.jsx)(P.Text, {
					muted: !0,
					children: "Name of the XBlock component in Studio."
				}),
				/* @__PURE__ */ (0, F.jsx)(P.Control, {
					type: "text",
					name: "displayName",
					value: e.displayName,
					onChange: n
				})
			] }),
			/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [
				/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Card Layout" }),
				/* @__PURE__ */ (0, F.jsx)(P.Text, { children: "Choose whether cards in this carousel use a vertical or horizontal layout. You'll add and edit the cards in the next step." }),
				/* @__PURE__ */ (0, F.jsxs)(se, {
					direction: "horizontal",
					gap: 4,
					children: [/* @__PURE__ */ (0, F.jsxs)(v, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === "VERTICAL" ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", "VERTICAL"),
						children: [
							/* @__PURE__ */ (0, F.jsx)("p", { children: /* @__PURE__ */ (0, F.jsx)("span", {
								className: "material-icons",
								children: "splitscreen"
							}) }),
							/* @__PURE__ */ (0, F.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, F.jsx)("strong", { children: "Vertical Cards" })
							}),
							/* @__PURE__ */ (0, F.jsx)("p", {
								className: "small",
								children: "Content sits above and below"
							})
						]
					}), /* @__PURE__ */ (0, F.jsxs)(v, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === "HORIZONTAL" ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", "HORIZONTAL"),
						children: [
							/* @__PURE__ */ (0, F.jsx)("p", { children: /* @__PURE__ */ (0, F.jsx)("span", {
								className: "material-icons",
								children: "vertical_split"
							}) }),
							/* @__PURE__ */ (0, F.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, F.jsx)("strong", { children: "Horizontal Cards" })
							}),
							/* @__PURE__ */ (0, F.jsx)("p", {
								className: "small",
								children: "Content sits side-by-side"
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, F.jsxs)(P.Group, {
				className: "my-3",
				children: [/* @__PURE__ */ (0, F.jsx)(P.Checkbox, {
					name: "disableNumbering",
					checked: !e.disableNumbering,
					onChange: (e) => t("disableNumbering", !e.currentTarget.checked),
					children: "Add card numbers"
				}), /* @__PURE__ */ (0, F.jsx)(P.Text, {
					className: "small",
					children: "Displays progress. For e.g., (2/4)"
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)(P.Group, {
				className: "my-3",
				children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Background Color" }), /* @__PURE__ */ (0, F.jsx)(Gs, {
					color: e.backgroundColor,
					setColor: (e) => t("backgroundColor", e)
				})]
			})
		]
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ListItemContainer.tsx
function sm({ heading: e, index: t, onRemoveItem: n, children: r }) {
	return /* @__PURE__ */ (0, F.jsx)("div", {
		className: "m-2 bg-light-200",
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "border rounded-sm shadow-sm icon-item-form mb-4",
			children: [/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "d-flex justify-content-between border-bottom align-items-center",
				children: [/* @__PURE__ */ (0, F.jsx)("h5", {
					className: "ml-2 mb-0",
					children: e
				}), /* @__PURE__ */ (0, F.jsxs)(v, {
					variant: "tertiary",
					size: "sm",
					className: "d-flex align-items-center",
					onClick: () => n(t),
					children: [
						/* @__PURE__ */ (0, F.jsx)("span", {
							className: "material-icons text-danger",
							children: "delete_outline"
						}),
						" ",
						"Delete"
					]
				})]
			}), /* @__PURE__ */ (0, F.jsx)("div", {
				className: "p-2",
				children: r
			})]
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/icons.ts
var cm = /* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split(".");
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function lm(e) {
	return Array.isArray ? Array.isArray(e) : bm(e) === "[object Array]";
}
var um = Infinity;
function dm(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -um ? "-0" : t;
}
function fm(e) {
	return e == null ? "" : dm(e);
}
function pm(e) {
	return typeof e == "string";
}
function mm(e) {
	return typeof e == "number";
}
function hm(e) {
	return e === !0 || e === !1 || _m(e) && bm(e) == "[object Boolean]";
}
function gm(e) {
	return typeof e == "object";
}
function _m(e) {
	return gm(e) && e !== null;
}
function vm(e) {
	return e != null;
}
function ym(e) {
	return !e.trim().length;
}
function bm(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var xm = "Incorrect 'index' type", Sm = (e) => `Invalid value for key ${e}`, Cm = (e) => `Pattern length exceeds max of ${e}.`, wm = (e) => `Missing ${e} property in key`, Tm = (e) => `Property 'weight' in key '${e}' must be a positive integer`, Em = Object.prototype.hasOwnProperty, Dm = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = Om(e);
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
function Om(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (pm(e) || lm(e)) r = e, t = km(e), n = Am(e);
	else {
		if (!Em.call(e, "name")) throw Error(wm("name"));
		let o = e.name;
		if (r = o, Em.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(Tm(o));
		t = km(o), n = Am(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function km(e) {
	return lm(e) ? e : e.split(".");
}
function Am(e) {
	return lm(e) ? e.join(".") : e;
}
function jm(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (vm(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!vm(o)) return;
			if (a === t.length - 1 && (pm(o) || mm(o) || hm(o))) n.push(fm(o));
			else if (lm(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, pm(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var Mm = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, Nm = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Pm = {
	location: 0,
	threshold: .6,
	distance: 100
}, Fm = {
	useExtendedSearch: !1,
	getFn: jm,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, z = {
	...Nm,
	...Mm,
	...Pm,
	...Fm
}, Im = /[^ ]+/g;
function Lm(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(Im).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var Rm = class {
	constructor({ getFn: e = z.getFn, fieldNormWeight: t = z.fieldNormWeight } = {}) {
		this.norm = Lm(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
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
		this.isCreated || !this.docs.length || (this.isCreated = !0, pm(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		pm(e) ? this._addString(e, t) : this._addObject(e, t);
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
		if (!vm(e) || ym(e)) return;
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
			if (vm(i)) {
				if (lm(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (vm(r)) if (pm(r) && !ym(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else lm(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (pm(i) && !ym(i)) {
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
function zm(e, t, { getFn: n = z.getFn, fieldNormWeight: r = z.fieldNormWeight } = {}) {
	let i = new Rm({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(Om)), i.setSources(t), i.create(), i;
}
function Bm(e, { getFn: t = z.getFn, fieldNormWeight: n = z.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new Rm({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Vm(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = z.distance, ignoreLocation: a = z.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Hm(e = [], t = z.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Um = 32;
function Wm(e, t, n, { location: r = z.location, distance: i = z.distance, threshold: a = z.threshold, findAllMatches: o = z.findAllMatches, minMatchCharLength: s = z.minMatchCharLength, includeMatches: c = z.includeMatches, ignoreLocation: l = z.ignoreLocation } = {}) {
	if (t.length > Um) throw Error(Cm(Um));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Vm(t, {
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
		for (; a < s;) Vm(t, {
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
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Vm(t, {
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
		if (Vm(t, {
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
		let e = Hm(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function Gm(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Km = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), qm = class {
	constructor(e, { location: t = z.location, threshold: n = z.threshold, distance: r = z.distance, includeMatches: i = z.includeMatches, findAllMatches: a = z.findAllMatches, minMatchCharLength: o = z.minMatchCharLength, isCaseSensitive: s = z.isCaseSensitive, ignoreDiacritics: c = z.ignoreDiacritics, ignoreLocation: l = z.ignoreLocation } = {}) {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Km(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: Gm(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Um) {
			let e = 0, t = d % Um, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Um), e), e += Um;
			if (t) {
				let e = d - Um;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Km(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Wm(e, t, n, {
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
}, Jm = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return Ym(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return Ym(e, this.singleRegex);
	}
	search() {}
};
function Ym(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Xm = class extends Jm {
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
}, Zm = class extends Jm {
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
}, Qm = class extends Jm {
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
}, $m = class extends Jm {
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
}, eh = class extends Jm {
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
}, th = class extends Jm {
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
}, nh = class extends Jm {
	constructor(e, { location: t = z.location, threshold: n = z.threshold, distance: r = z.distance, includeMatches: i = z.includeMatches, findAllMatches: a = z.findAllMatches, minMatchCharLength: o = z.minMatchCharLength, isCaseSensitive: s = z.isCaseSensitive, ignoreDiacritics: c = z.ignoreDiacritics, ignoreLocation: l = z.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new qm(e, {
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
}, rh = class extends Jm {
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
}, ih = [
	Xm,
	rh,
	Qm,
	$m,
	th,
	eh,
	Zm,
	nh
], ah = ih.length, oh = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, sh = "|";
function ch(e, t = {}) {
	return e.split(sh).map((e) => {
		let n = e.trim().split(oh).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < ah;) {
				let e = ih[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < ah;) {
				let e = ih[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var lh = new Set([nh.type, rh.type]), uh = class {
	constructor(e, { isCaseSensitive: t = z.isCaseSensitive, ignoreDiacritics: n = z.ignoreDiacritics, includeMatches: r = z.includeMatches, minMatchCharLength: i = z.minMatchCharLength, ignoreLocation: a = z.ignoreLocation, findAllMatches: o = z.findAllMatches, location: s = z.location, threshold: c = z.threshold, distance: l = z.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Km(e) : e, this.pattern = e, this.query = ch(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Km(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						lh.has(e) ? o = [...o, ...l] : o.push(l);
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
}, dh = [];
function fh(...e) {
	dh.push(...e);
}
function ph(e, t) {
	for (let n = 0, r = dh.length; n < r; n += 1) {
		let r = dh[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new qm(e, t);
}
var mh = {
	AND: "$and",
	OR: "$or"
}, hh = {
	PATH: "$path",
	PATTERN: "$val"
}, gh = (e) => !!(e[mh.AND] || e[mh.OR]), _h = (e) => !!e[hh.PATH], vh = (e) => !lm(e) && gm(e) && !gh(e), yh = (e) => ({ [mh.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function bh(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = _h(e);
		if (!a && i.length > 1 && !gh(e)) return r(yh(e));
		if (vh(e)) {
			let r = a ? e[hh.PATH] : i[0], o = a ? e[hh.PATTERN] : e[r];
			if (!pm(o)) throw Error(Sm(r));
			let s = {
				keyId: Am(r),
				pattern: o
			};
			return n && (s.searcher = ph(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			lm(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return gh(e) || (e = yh(e)), r(e);
}
function xh(e, { ignoreFieldNorm: t = z.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function Sh(e, t) {
	let n = e.matches;
	t.matches = [], vm(n) && n.forEach((e) => {
		if (!vm(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function Ch(e, t) {
	t.score = e.score;
}
function wh(e, t, { includeMatches: n = z.includeMatches, includeScore: r = z.includeScore } = {}) {
	let i = [];
	return n && i.push(Sh), r && i.push(Ch), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var Th = class {
	constructor(e, t = {}, n) {
		this.options = {
			...z,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new Dm(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof Rm)) throw Error(xm);
		this._myIndex = t || zm(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		vm(e) && (this._docs.push(e), this._myIndex.add(e));
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
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = pm(e) ? pm(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return xh(s, { ignoreFieldNorm: o }), i && s.sort(a), mm(t) && t > -1 && (s = s.slice(0, t)), wh(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = ph(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!vm(e)) return;
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
		let t = bh(e, this.options), n = (e, t, r) => {
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
				else if (e.operator === mh.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (vm(e)) {
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
		let t = ph(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!vm(e)) return;
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
		if (!vm(t)) return [];
		let r = [];
		if (lm(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!vm(t)) return;
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
Th.version = "7.1.0", Th.createIndex = zm, Th.parseIndex = Bm, Th.config = z, Th.parseQuery = bh, fh(uh);
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/index.tsx
function Eh({ currentIcon: e, onIconSelected: t }) {
	let n = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split("."), [r, i] = (0, A.useState)(n), [a, o] = (0, A.useState)(!1), s = (0, A.useRef)(null), c = new Th(cm, {
		threshold: .3,
		minMatchCharLength: 2
	});
	(0, A.useEffect)(() => {
		function e(e) {
			s.current && !s.current.contains(e.target) && o(!1);
		}
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []);
	function l(e) {
		let t = e.currentTarget.value;
		if (t !== "") {
			i(c.search(t).map((e) => e.item.toString()));
			return;
		}
		i(n);
	}
	function u(e, n) {
		e.stopPropagation(), t(n), o(!1);
	}
	return /* @__PURE__ */ (0, F.jsxs)(v, {
		variant: e ? "outline-dark" : "success",
		ref: s,
		className: "d-block icon-selector pb-1",
		onClick: () => o(!0),
		children: [/* @__PURE__ */ (0, F.jsx)("span", {
			className: "material-icons mb-0",
			children: e || "add"
		}), /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "icon-list-popup border rounded-sm shadow",
			style: { display: a ? "block" : "none" },
			children: [/* @__PURE__ */ (0, F.jsx)(P.Group, {
				size: "sm",
				children: /* @__PURE__ */ (0, F.jsx)(P.Control, {
					type: "text",
					className: "m-0",
					placeholder: "Search icons",
					trailingElement: /* @__PURE__ */ (0, F.jsx)("span", {
						className: "material-icons medium text-gray-500",
						children: "search"
					}),
					onChange: l
				})
			}), /* @__PURE__ */ (0, F.jsx)("div", {
				className: "icon-list d-flex flex-wrap justify-items-start",
				children: r.map((e) => /* @__PURE__ */ (0, F.jsx)(v, {
					variant: "link",
					className: "icon-symbol p-2",
					onClick: (t) => u(t, e),
					children: /* @__PURE__ */ (0, F.jsx)("span", {
						className: "material-icons",
						children: e
					}, e)
				}, e))
			})]
		})]
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/HoverListItemForm.tsx
function Dh({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = Ep(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, F.jsx)(sm, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, {
				className: "x-small",
				children: "Main Text"
			}), /* @__PURE__ */ (0, F.jsx)(P.Control, {
				name: `${o}.description`,
				value: s.description,
				onChange: i
			})] }), /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, F.jsxs)(P.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, F.jsx)(P.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, F.jsx)(Eh, {
						currentIcon: s.icon || "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, F.jsxs)(P.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, F.jsx)(P.Label, {
						className: "x-small",
						children: "Hover Text"
					}), /* @__PURE__ */ (0, F.jsx)(P.Control, {
						type: "text",
						name: `${o}.hoverContent`,
						value: s.hoverContent,
						onChange: i
					})]
				})]
			})]
		})
	});
}
function Oh({ cardIndex: e }) {
	return /* @__PURE__ */ (0, F.jsx)(am, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, F.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, F.jsx)(Dh, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, F.jsx)(v, {
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
function kh({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = Ep(), [i, a] = (0, A.useState)(!1), o = `cards[${e}].secondaryContent`, s = t.cards[e].secondaryContent;
	function c(e) {
		a(e.currentTarget.checked), e.currentTarget.checked && r(`${o}.altText`, "");
	}
	return /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Image Source URL" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
		name: `${o}.location`,
		value: s.location,
		onChange: n,
		placeholder: "URL"
	})] }), /* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [
		/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Alt Text" }),
		/* @__PURE__ */ (0, F.jsx)("div", {
			className: "mb-0",
			children: /* @__PURE__ */ (0, F.jsx)(P.Checkbox, {
				checked: i,
				onChange: c,
				size: "sm",
				children: "Decorative Image"
			})
		}),
		/* @__PURE__ */ (0, F.jsx)(P.Control, {
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
function Ah({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = Ep(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, F.jsx)(sm, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, F.jsxs)(P.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, F.jsx)(P.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, F.jsx)(Eh, {
						currentIcon: s?.icon ?? "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, F.jsxs)(P.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, F.jsx)(P.Label, {
						className: "x-small",
						children: "Heading"
					}), /* @__PURE__ */ (0, F.jsx)(P.Control, {
						type: "text",
						name: `${o}.title`,
						value: s?.title ?? "",
						onChange: i
					})]
				})]
			}), /* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, {
				className: "x-small",
				children: "Description"
			}), /* @__PURE__ */ (0, F.jsx)(P.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s?.description ?? "",
				onChange: i
			})] })]
		})
	});
}
function jh({ cardIndex: e }) {
	return /* @__PURE__ */ (0, F.jsx)(am, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, F.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, F.jsx)(Ah, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, F.jsx)(v, {
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
function Mh({ cardIndex: e }) {
	let { values: t, handleChange: n } = Ep(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
	return /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
		/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Title" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
			name: `${r}.title`,
			value: i.title,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
			name: `${r}.subtitle`,
			value: i.subtitle,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Description" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
			as: "textarea",
			name: `${r}.description`,
			value: i.description,
			onChange: n
		})] })
	] });
}
//#endregion
//#region src/card-carousel/studio-ui/components/CardEditor.tsx
function Nh(e) {
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
var Ph = {
	IMAGE: kh,
	RICH_LIST: jh,
	CONTENT_HIGHLIGHT: Mh,
	HOVER_LIST: Oh
};
function Fh({ cardIndex: e }) {
	let { values: t, handleChange: n, handleBlur: r, setFieldValue: i } = Ep(), [a, o] = (0, A.useState)(!1), s = t.cards[e], c = `cards[${e}]`, l = s.secondaryContent?.kind ? Ph[s.secondaryContent.kind] : null;
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "row mt-5",
		children: [/* @__PURE__ */ (0, F.jsxs)("div", {
			className: "col border-right",
			children: [
				/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Title" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
					name: `${c}.title`,
					value: s.title,
					onChange: n,
					onBlur: r
				})] }),
				/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
					name: `${c}.subtitle`,
					value: s.subtitle,
					onChange: n,
					onBlur: r
				})] }),
				s.secondaryContent?.kind !== "HOVER_LIST" && /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
					/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Body Content" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
						as: "textarea",
						name: `${c}.description`,
						value: s?.description ?? "",
						onChange: n,
						onBlur: r
					})] }),
					/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Checkbox, {
						checked: a,
						onChange: (e) => {
							o(e.currentTarget.checked), e.currentTarget.checked || (i(`${c}.ctaLabel`, ""), i(`${c}.ctaLink`, ""));
						},
						children: "Add a button"
					}), /* @__PURE__ */ (0, F.jsx)(P.Text, { children: "Link to another page or resource" })] }),
					a && /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Button Label" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
						name: `${c}.ctaLabel`,
						value: s?.ctaLabel ?? "",
						onChange: n
					})] }), /* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Button Link" }), /* @__PURE__ */ (0, F.jsx)(P.Control, {
						name: `${c}.ctaLink`,
						value: s?.ctaLink ?? "",
						onChange: n
					})] })] })
				] })
			]
		}), /* @__PURE__ */ (0, F.jsx)("div", {
			className: "col",
			children: l && /* @__PURE__ */ (0, F.jsx)(l, { cardIndex: e })
		})]
	});
}
function Ih({ cardIndex: e }) {
	let { values: t, setFieldValue: n, handleChange: r, handleBlur: i } = Ep(), a = t.cards[e], o = `cards[${e}]`;
	return /* @__PURE__ */ (0, F.jsxs)("div", { children: [
		/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [
			/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Card Name" }),
			/* @__PURE__ */ (0, F.jsx)(P.Text, {
				className: "micro",
				children: "Name of the card in Studio"
			}),
			/* @__PURE__ */ (0, F.jsx)(P.Control, {
				name: `${o}.name`,
				value: a.name,
				onChange: r,
				onBlur: i
			})
		] }),
		/* @__PURE__ */ (0, F.jsxs)(P.Group, { children: [/* @__PURE__ */ (0, F.jsx)(P.Label, { children: "Supporting Content" }), /* @__PURE__ */ (0, F.jsxs)(P.Control, {
			as: "select",
			name: `${o}.cardType`,
			value: a.secondaryContent?.kind ?? "UNKNOWN",
			onChange: (e) => {
				n(`${o}.cardType`, e.currentTarget.value), n(`${o}.secondaryContent`, Nh(e.currentTarget.value));
			},
			onBlur: i,
			children: [
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "UNKNOWN",
					children: "Choose Content Type"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "IMAGE",
					children: "Image"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "CONTENT_HIGHLIGHT",
					children: "Highlighted Text"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "RICH_LIST",
					children: "Icon List"
				}),
				/* @__PURE__ */ (0, F.jsx)("option", {
					value: "HOVER_LIST",
					children: "Interactive List"
				})
			]
		})] }),
		a.secondaryContent?.kind && /* @__PURE__ */ (0, F.jsx)(Fh, { cardIndex: e })
	] });
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var Lh = Symbol.for("preact-signals");
function Rh() {
	if (Vh > 1) Vh--;
	else {
		var e, t = !1;
		for ((function() {
			var e = Gh;
			for (Gh = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); Bh !== void 0;) {
			var n = Bh;
			for (Bh = void 0, Hh++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && Xh(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (Hh = 0, Vh--, t) throw e;
	}
}
function B(e) {
	if (Vh > 0) return e();
	Wh = ++Uh, Vh++;
	try {
		return e();
	} finally {
		Rh();
	}
}
var V = void 0;
function H(e) {
	var t = V;
	V = void 0;
	try {
		return e();
	} finally {
		V = t;
	}
}
var zh, Bh = void 0, Vh = 0, Hh = 0, Uh = 0, Wh = 0, Gh = void 0, Kh = 0;
function qh(e) {
	if (V !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== V) return t = {
			i: 0,
			S: e,
			p: V.s,
			n: void 0,
			t: V,
			e: void 0,
			x: void 0,
			r: t
		}, V.s !== void 0 && (V.s.n = t), V.s = t, e.n = t, 32 & V.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = V.s, t.n = void 0, V.s.n = t, V.s = t), t;
	}
}
function Jh(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Jh.prototype.brand = Lh, Jh.prototype.h = function() {
	return !0;
}, Jh.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? H(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Jh.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && H(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Jh.prototype.subscribe = function(e) {
	var t = this;
	return ag(function() {
		var n = t.value, r = V;
		V = void 0;
		try {
			e(n);
		} finally {
			V = r;
		}
	}, { name: "sub" });
}, Jh.prototype.valueOf = function() {
	return this.value;
}, Jh.prototype.toString = function() {
	return this.value + "";
}, Jh.prototype.toJSON = function() {
	return this.value;
}, Jh.prototype.peek = function() {
	var e = V;
	V = void 0;
	try {
		return this.value;
	} finally {
		V = e;
	}
}, Object.defineProperty(Jh.prototype, "value", {
	get: function() {
		var e = qh(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (Hh > 100) throw Error("Cycle detected");
			(function(e) {
				Vh !== 0 && Hh === 0 && e.l !== Wh && (e.l = Wh, Gh = {
					S: e,
					v: e.v,
					i: e.i,
					o: Gh
				});
			})(this), this.v = e, this.i++, Kh++, Vh++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Rh();
			}
		}
	}
});
function Yh(e, t) {
	return new Jh(e, t);
}
function Xh(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Zh(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Qh(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function $h(e, t) {
	Jh.call(this, void 0), this.x = e, this.s = void 0, this.g = Kh - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
$h.prototype = new Jh(), $h.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Kh)) return !0;
	if (this.g = Kh, this.f |= 1, this.i > 0 && !Xh(this)) return this.f &= -2, !0;
	var e = V;
	try {
		Zh(this), V = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return V = e, Qh(this), this.f &= -2, !0;
}, $h.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Jh.prototype.S.call(this, e);
}, $h.prototype.U = function(e) {
	if (this.t !== void 0 && (Jh.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, $h.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty($h.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = qh(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function eg(e, t) {
	return new $h(e, t);
}
function tg(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Vh++;
		var n = V;
		V = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, ng(e), t;
		} finally {
			V = n, Rh();
		}
	}
}
function ng(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, tg(e);
}
function rg(e) {
	if (V !== this) throw Error("Out-of-order effect");
	Qh(this), V = e, this.f &= -2, 8 & this.f && ng(this), Rh();
}
function ig(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, zh && zh.push(this);
}
ig.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, ig.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, tg(this), Zh(this), Vh++;
	var e = V;
	return V = this, rg.bind(this, e);
}, ig.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Bh, Bh = this);
}, ig.prototype.d = function() {
	this.f |= 8, 1 & this.f || ng(this);
}, ig.prototype.dispose = function() {
	this.d();
};
function ag(e, t) {
	var n = new ig(e, t);
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
var og = Object.create, sg = Object.defineProperty, cg = Object.defineProperties, lg = Object.getOwnPropertyDescriptor, ug = Object.getOwnPropertyDescriptors, dg = Object.getOwnPropertySymbols, fg = Object.prototype.hasOwnProperty, pg = Object.prototype.propertyIsEnumerable, mg = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), hg = (e) => {
	throw TypeError(e);
}, gg = (e, t, n) => t in e ? sg(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, _g = (e, t) => {
	for (var n in t ||= {}) fg.call(t, n) && gg(e, n, t[n]);
	if (dg) for (var n of dg(t)) pg.call(t, n) && gg(e, n, t[n]);
	return e;
}, vg = (e, t) => cg(e, ug(t)), yg = (e, t) => sg(e, "name", {
	value: t,
	configurable: !0
}), bg = (e) => [
	,
	,
	,
	og(e?.[mg("metadata")] ?? null)
], xg = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], Sg = (e) => e !== void 0 && typeof e != "function" ? hg("Function expected") : e, Cg = (e, t, n, r, i) => ({
	kind: xg[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? hg("Already initialized") : i.push(Sg(e || null))
}), wg = (e, t) => gg(t, mg("metadata"), e[3]), Tg = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, Eg = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = xg[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && lg(d < 4 ? i : {
		get [n]() {
			return kg(this, a);
		},
		set [n](e) {
			return jg(this, a, e);
		}
	}, n));
	d ? p && d < 4 && yg(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : yg(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = Cg(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Og(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? kg : Mg)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => jg(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? Sg(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? hg("Object expected") : (Sg(o = s.get) && (v.get = o), Sg(o = s.set) && (v.set = o), Sg(o = s.init) && g.unshift(o));
	return d || wg(e, i), v && sg(i, n, v), p ? d ^ 4 ? a : v : i;
}, Dg = (e, t, n) => t.has(e) || hg("Cannot " + n), Og = (e, t) => Object(t) === t ? e.has(t) : hg("Cannot use the \"in\" operator on this value"), kg = (e, t, n) => (Dg(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ag = (e, t, n) => t.has(e) ? hg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), jg = (e, t, n, r) => (Dg(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Mg = (e, t, n) => (Dg(e, t, "access private method"), n);
function Ng(e, t) {
	if (t) {
		let n;
		return eg(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return eg(e);
}
function Pg(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !Pg(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !Pg(e[n], t[n])) : !1;
	}
	return !1;
}
function U({ get: e }, t) {
	return {
		init(e) {
			return Yh(e);
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
function W(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = Ng(e.bind(this)), n.set(this, t)), t.value;
	};
}
function Fg(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, vg(_g({}, r), { enumerable: e }));
		});
	};
}
function Ig(...e) {
	let t = e.map((e) => ag(e));
	return () => t.forEach((e) => e());
}
var Lg, Rg, zg, Bg, Vg, Hg = [U], Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_;
Vg = [U], Bg = [U], zg = [Fg()], Rg = [Fg()], Lg = [Fg()];
var r_ = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, Tg(Ug, 5, this), Ag(this, Jg), Ag(this, Wg, Tg(Ug, 8, this)), Tg(Ug, 11, this), Ag(this, Yg, Tg(Ug, 12, this)), Tg(Ug, 15, this), Ag(this, $g, Tg(Ug, 16, this)), Tg(Ug, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return kg(this, Jg, t_);
	}
	get initial() {
		return kg(this, Jg, Kg);
	}
	get previous() {
		return kg(this, Jg, Zg);
	}
	set current(e) {
		let t = H(() => kg(this, Jg, t_));
		e && t && this.equals(t, e) || B(() => {
			kg(this, Jg, Kg) || jg(this, Jg, e, qg), jg(this, Jg, t, Qg), jg(this, Jg, e, n_);
		});
	}
	reset(e = this.defaultValue) {
		B(() => {
			jg(this, Jg, void 0, Qg), jg(this, Jg, e, qg), jg(this, Jg, e, n_);
		});
	}
};
Ug = bg(null), Wg = /* @__PURE__ */ new WeakMap(), Jg = /* @__PURE__ */ new WeakSet(), Yg = /* @__PURE__ */ new WeakMap(), $g = /* @__PURE__ */ new WeakMap(), Gg = Eg(Ug, 20, "#initial", Hg, Jg, Wg), Kg = Gg.get, qg = Gg.set, Xg = Eg(Ug, 20, "#previous", Vg, Jg, Yg), Zg = Xg.get, Qg = Xg.set, e_ = Eg(Ug, 20, "#current", Bg, Jg, $g), t_ = e_.get, n_ = e_.set, Eg(Ug, 2, "current", zg, r_), Eg(Ug, 2, "initial", Rg, r_), Eg(Ug, 2, "previous", Lg, r_), wg(Ug, r_);
function i_(e) {
	return H(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var a_, o_ = class {
	constructor() {
		Ag(this, a_, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? kg(this, a_).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return kg(this, a_).has(e) || kg(this, a_).set(e, /* @__PURE__ */ new Map()), kg(this, a_).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? kg(this, a_).get(e)?.clear() : void 0;
	}
};
a_ = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var s_ = Object.create, c_ = Object.defineProperty, l_ = Object.getOwnPropertyDescriptor, u_ = Object.getOwnPropertySymbols, d_ = Object.prototype.hasOwnProperty, f_ = Object.prototype.propertyIsEnumerable, p_ = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), m_ = (e) => {
	throw TypeError(e);
}, h_ = Math.pow, g_ = (e, t, n) => t in e ? c_(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, __ = (e, t) => {
	for (var n in t ||= {}) d_.call(t, n) && g_(e, n, t[n]);
	if (u_) for (var n of u_(t)) f_.call(t, n) && g_(e, n, t[n]);
	return e;
}, v_ = (e, t) => c_(e, "name", {
	value: t,
	configurable: !0
}), y_ = (e) => [
	,
	,
	,
	s_(e?.[p_("metadata")] ?? null)
], b_ = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], x_ = (e) => e !== void 0 && typeof e != "function" ? m_("Function expected") : e, S_ = (e, t, n, r, i) => ({
	kind: b_[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? m_("Already initialized") : i.push(x_(e || null))
}), C_ = (e, t) => g_(t, p_("metadata"), e[3]), w_ = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, T_ = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = b_[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && l_(d < 4 ? i : {
		get [n]() {
			return O_(this, a);
		},
		set [n](e) {
			return A_(this, a, e);
		}
	}, n));
	d ? p && d < 4 && v_(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : v_(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = S_(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => D_(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? O_ : j_)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => A_(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? x_(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? m_("Object expected") : (x_(o = s.get) && (v.get = o), x_(o = s.set) && (v.set = o), x_(o = s.init) && g.unshift(o));
	return d || C_(e, i), v && c_(i, n, v), p ? d ^ 4 ? a : v : i;
}, E_ = (e, t, n) => t.has(e) || m_("Cannot " + n), D_ = (e, t) => Object(t) === t ? e.has(t) : m_("Cannot use the \"in\" operator on this value"), O_ = (e, t, n) => (E_(e, t, "read from private field"), n ? n.call(e) : t.get(e)), k_ = (e, t, n) => t.has(e) ? m_("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), A_ = (e, t, n, r) => (E_(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), j_ = (e, t, n) => (E_(e, t, "access private method"), n), M_ = class e {
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
}, N_ = class e {
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
		return c.scale = __({}, s), c;
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
		return new M_((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? P_(this, t) : 0;
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
		return M_.delta({
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
function P_(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var F_, I_, L_, R_, z_, B_ = class extends (L_ = r_, I_ = [W], F_ = [W], L_) {
	constructor(e) {
		let t = M_.from(e);
		super(t, (e, t) => M_.equals(e, t)), w_(z_, 5, this), k_(this, R_, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return M_.delta(this.current, this.initial);
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
		let { current: t } = this, n = M_.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - O_(this, R_), o = (e) => Math.round(e / a * 100);
		B(() => {
			A_(this, R_, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(M_.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
z_ = y_(L_), R_ = /* @__PURE__ */ new WeakMap(), T_(z_, 2, "delta", I_, B_), T_(z_, 2, "direction", F_, B_), C_(z_, B_);
function V_({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(h_(r, 2) + h_(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var H_ = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(H_ || {}), U_ = Object.values(H_), W_ = Object.create, G_ = Object.defineProperty, K_ = Object.defineProperties, q_ = Object.getOwnPropertyDescriptor, J_ = Object.getOwnPropertyDescriptors, Y_ = Object.getOwnPropertySymbols, X_ = Object.prototype.hasOwnProperty, Z_ = Object.prototype.propertyIsEnumerable, Q_ = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), $_ = (e) => {
	throw TypeError(e);
}, ev = (e, t, n) => t in e ? G_(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, tv = (e, t) => {
	for (var n in t ||= {}) X_.call(t, n) && ev(e, n, t[n]);
	if (Y_) for (var n of Y_(t)) Z_.call(t, n) && ev(e, n, t[n]);
	return e;
}, nv = (e, t) => K_(e, J_(t)), rv = (e, t) => G_(e, "name", {
	value: t,
	configurable: !0
}), iv = (e, t) => {
	var n = {};
	for (var r in e) X_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Y_) for (var r of Y_(e)) t.indexOf(r) < 0 && Z_.call(e, r) && (n[r] = e[r]);
	return n;
}, av = (e) => [
	,
	,
	,
	W_(e?.[Q_("metadata")] ?? null)
], ov = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], sv = (e) => e !== void 0 && typeof e != "function" ? $_("Function expected") : e, cv = (e, t, n, r, i) => ({
	kind: ov[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? $_("Already initialized") : i.push(sv(e || null))
}), lv = (e, t) => ev(t, Q_("metadata"), e[3]), G = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, K = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = ov[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && q_(d < 4 ? i : {
		get [n]() {
			return fv(this, a);
		},
		set [n](e) {
			return pv(this, a, e);
		}
	}, n));
	d ? p && d < 4 && rv(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : rv(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = cv(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => dv(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? fv : mv)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => pv(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? sv(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? $_("Object expected") : (sv(o = s.get) && (v.get = o), sv(o = s.set) && (v.set = o), sv(o = s.init) && g.unshift(o));
	return d || lv(e, i), v && G_(i, n, v), p ? d ^ 4 ? a : v : i;
}, uv = (e, t, n) => t.has(e) || $_("Cannot " + n), dv = (e, t) => Object(t) === t ? e.has(t) : $_("Cannot use the \"in\" operator on this value"), fv = (e, t, n) => (uv(e, t, "read from private field"), n ? n.call(e) : t.get(e)), q = (e, t, n) => t.has(e) ? $_("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), pv = (e, t, n, r) => (uv(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), mv = (e, t, n) => (uv(e, t, "access private method"), n);
function hv(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function gv(e) {
	return (t) => hv(e, t);
}
function _v(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var vv = [U], yv, bv, xv, Sv = class {
	constructor(e, t) {
		this.manager = e, this.options = t, q(this, bv, G(yv, 8, this, !1)), G(yv, 11, this), q(this, xv, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return H(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = ag(e.bind(this));
		return fv(this, xv).add(t), t;
	}
	destroy() {
		fv(this, xv).forEach((e) => e());
	}
	static configure(e) {
		return hv(this, e);
	}
};
yv = av(null), bv = /* @__PURE__ */ new WeakMap(), xv = /* @__PURE__ */ new WeakMap(), K(yv, 4, "disabled", vv, Sv, bv), lv(yv, Sv);
var Cv = class extends Sv {}, wv, Tv = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), q(this, wv, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(_v).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of fv(this, wv)) if (!n.includes(e)) {
			if (e.prototype instanceof Cv) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		pv(this, wv, n);
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
wv = /* @__PURE__ */ new WeakMap();
function Ev(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Dv = [], Ov, kv, Av = class extends Sv {
	constructor(e) {
		super(e), q(this, Ov), q(this, kv), this.computeCollisions = this.computeCollisions.bind(this), pv(this, kv, Yh(Dv)), this.destroy = Ig(() => {
			let e = this.computeCollisions(), t = H(() => this.manager.dragOperation.position.current);
			if (e !== Dv) {
				let e = fv(this, Ov);
				if (pv(this, Ov, t), e && t.x == e.x && t.y == e.y) return;
			} else pv(this, Ov, void 0);
			fv(this, kv).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		H(() => {
			e ? fv(this, kv).value = this.computeCollisions() : pv(this, Ov, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return Dv;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = H(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? Dv : (s.sort(Ev), s);
	}
	get collisions() {
		return fv(this, kv).value;
	}
};
Ov = /* @__PURE__ */ new WeakMap(), kv = /* @__PURE__ */ new WeakMap();
var jv = class {
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
}, Mv = class extends jv {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Nv(e, t = !0) {
	let n = !1;
	return nv(tv({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var Pv = class extends Cv {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = Ig(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Nv({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			H(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Fv = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Fv || {}), Iv = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Iv || {}), Lv, Rv, zv, Bv, Vv, Hv, Uv = [U], Wv, Gv;
Hv = [W], Vv = [W], Bv = [W], zv = [W], Rv = [W], Lv = [W];
var Kv = class {
	constructor() {
		G(Wv, 5, this), q(this, Gv, G(Wv, 8, this, "idle")), G(Wv, 11, this);
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
Wv = av(null), Gv = /* @__PURE__ */ new WeakMap(), K(Wv, 4, "value", Uv, Kv, Gv), K(Wv, 2, "current", Hv, Kv), K(Wv, 2, "idle", Vv, Kv), K(Wv, 2, "initializing", Bv, Kv), K(Wv, 2, "initialized", zv, Kv), K(Wv, 2, "dragging", Rv, Kv), K(Wv, 2, "dropped", Lv, Kv), lv(Wv, Kv);
var qv = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return H(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = Nv({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return H(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			B(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Nv({ operation: t.snapshot() });
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
		return H(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = Nv({
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
		return H(() => {
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
					let e = H(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = ag(() => {
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
}, Jv, Yv, Xv, Zv = [U], Qv, $v, ey, ty, ny;
Xv = [U], Yv = [U], Jv = [U];
var ry = class {
	constructor(e, t) {
		q(this, $v, G(Qv, 8, this)), G(Qv, 11, this), q(this, ey, G(Qv, 12, this)), G(Qv, 15, this), q(this, ty, G(Qv, 16, this)), G(Qv, 19, this), q(this, ny, G(Qv, 20, this)), G(Qv, 23, this);
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
Qv = av(null), $v = /* @__PURE__ */ new WeakMap(), ey = /* @__PURE__ */ new WeakMap(), ty = /* @__PURE__ */ new WeakMap(), ny = /* @__PURE__ */ new WeakMap(), K(Qv, 4, "manager", Zv, ry, $v), K(Qv, 4, "id", Xv, ry, ey), K(Qv, 4, "data", Yv, ry, ty), K(Qv, 4, "disabled", Jv, ry, ny), lv(Qv, ry);
var iy = class {
	constructor() {
		this.map = Yh(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = Ig(...t.effects());
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
}, ay, oy, sy, cy, ly, uy, dy, fy, py, my, hy, gy = class extends (dy = ry, uy = [U], ly = [U], cy = [U], sy = [W], oy = [W], ay = [W], dy) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = iv(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), G(fy, 5, this), q(this, py, G(fy, 8, this)), G(fy, 11, this), q(this, my, G(fy, 12, this)), G(fy, 15, this), q(this, hy, G(fy, 16, this, this.isDragSource ? "dragging" : "idle")), G(fy, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
fy = av(dy), py = /* @__PURE__ */ new WeakMap(), my = /* @__PURE__ */ new WeakMap(), hy = /* @__PURE__ */ new WeakMap(), K(fy, 4, "type", uy, gy, py), K(fy, 4, "modifiers", ly, gy, my), K(fy, 4, "status", cy, gy, hy), K(fy, 2, "isDropping", sy, gy), K(fy, 2, "isDragging", oy, gy), K(fy, 2, "isDragSource", ay, gy), lv(fy, gy);
var _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay = class extends (Cy = ry, Sy = [U], xy = [U], by = [U], yy = [U], vy = [U], _y = [W], Cy) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = iv(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), G(wy, 5, this), q(this, Ty, G(wy, 8, this)), G(wy, 11, this), q(this, Ey, G(wy, 12, this)), G(wy, 15, this), q(this, Dy, G(wy, 16, this)), G(wy, 19, this), q(this, Oy, G(wy, 20, this)), G(wy, 23, this), q(this, ky, G(wy, 24, this)), G(wy, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
wy = av(Cy), Ty = /* @__PURE__ */ new WeakMap(), Ey = /* @__PURE__ */ new WeakMap(), Dy = /* @__PURE__ */ new WeakMap(), Oy = /* @__PURE__ */ new WeakMap(), ky = /* @__PURE__ */ new WeakMap(), K(wy, 4, "accept", Sy, Ay, Ty), K(wy, 4, "type", xy, Ay, Ey), K(wy, 4, "collisionDetector", by, Ay, Dy), K(wy, 4, "collisionPriority", yy, Ay, Oy), K(wy, 4, "shape", vy, Ay, ky), K(wy, 2, "isDropTarget", _y, Ay), lv(wy, Ay);
var jy = class extends Sv {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, My = class extends AbortController {
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
}, Ny, Py = class {
	constructor(e) {
		this.options = e, q(this, Ny);
	}
	set controller(e) {
		pv(this, Ny, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = fv(this, Ny)) == null || t.activate(e);
	}
};
Ny = /* @__PURE__ */ new WeakMap();
var Fy = class extends Sv {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, Iy = class {
	constructor(e) {
		this.draggables = new iy(), this.droppables = new iy(), this.plugins = new Tv(e), this.sensors = new Tv(e), this.modifiers = new Tv(e);
	}
	register(e, t) {
		if (e instanceof gy) return this.draggables.register(e.id, e);
		if (e instanceof Ay) return this.droppables.register(e.id, e);
		if (e.prototype instanceof Fy) return this.modifiers.register(e, t);
		if (e.prototype instanceof jy) return this.sensors.register(e, t);
		if (e.prototype instanceof Sv) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof ry) return e instanceof gy ? this.draggables.unregister(e.id, e) : e instanceof Ay ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof Fy) return this.modifiers.unregister(e);
		if (e.prototype instanceof jy) return this.sensors.unregister(e);
		if (e.prototype instanceof Sv) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy = [W], Ky, qy, Jy, J, Yy, Xy, Zy, Qy, $y, eb;
Wy = [U], Uy = [U], Hy = [U], Vy = [U], By = [U], zy = [W], Ry = [W], Ly = [W];
var tb = class {
	constructor(e) {
		G(J, 5, this), q(this, Ky), q(this, qy), q(this, Jy, new r_(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Kv(), q(this, Yy, G(J, 8, this, !1)), G(J, 11, this), q(this, Xy, G(J, 12, this, null)), G(J, 15, this), q(this, Zy, G(J, 16, this, null)), G(J, 19, this), q(this, Qy, G(J, 20, this, null)), G(J, 23, this), q(this, $y, G(J, 24, this, [])), G(J, 27, this), this.position = new B_({
			x: 0,
			y: 0
		}), q(this, eb, {
			x: 0,
			y: 0
		}), pv(this, Ky, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = fv(this, Jy);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? fv(this, Jy).current = e : fv(this, Jy).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = fv(this, Ky).registry.draggables.get(e);
		return t && pv(this, qy, t), t ?? fv(this, qy) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : fv(this, Ky).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(nv(tv({}, this.snapshot()), { transform: n }));
		return pv(this, eb, n), n;
	}
	snapshot() {
		return H(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: fv(this, eb),
			shape: this.shape ? i_(this.shape) : null,
			position: i_(this.position),
			status: i_(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		B(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, fv(this, Jy).reset(), this.position.reset({
				x: 0,
				y: 0
			}), pv(this, eb, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
J = av(null), Ky = /* @__PURE__ */ new WeakMap(), qy = /* @__PURE__ */ new WeakMap(), Jy = /* @__PURE__ */ new WeakMap(), Yy = /* @__PURE__ */ new WeakMap(), Xy = /* @__PURE__ */ new WeakMap(), Zy = /* @__PURE__ */ new WeakMap(), Qy = /* @__PURE__ */ new WeakMap(), $y = /* @__PURE__ */ new WeakMap(), eb = /* @__PURE__ */ new WeakMap(), K(J, 2, "shape", Gy, tb), K(J, 4, "canceled", Wy, tb, Yy), K(J, 4, "activatorEvent", Uy, tb, Xy), K(J, 4, "sourceIdentifier", Hy, tb, Zy), K(J, 4, "targetIdentifier", Vy, tb, Qy), K(J, 4, "modifiers", By, tb, $y), K(J, 2, "source", zy, tb), K(J, 2, "target", Ry, tb), K(J, 2, "transform", Ly, tb), lv(J, tb);
var nb = { get rendering() {
	return Promise.resolve();
} };
function rb(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var ib = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = rb(t.plugins, []), r = rb(t.sensors, []), i = rb(t.modifiers, []), a = t.renderer ?? nb, o = new Mv(this);
		this.registry = new Iy(this), this.monitor = o, this.renderer = a, this.actions = new qv(this), this.dragOperation = new tb(this), this.collisionObserver = new Av(this), this.plugins = [Pv, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = Ig(() => {
			let e = H(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = _v(e);
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
}, ab = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / M_.distance(t.shape.center, n),
		type: Iv.PointerIntersection,
		priority: Fv.High
	} : null;
}, ob = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = M_.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: Iv.ShapeIntersection,
			priority: Fv.Normal
		};
	}
	return null;
}, sb = (e) => ab(e) ?? ob(e), cb = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? N_.from(r.current.boundingRectangle).corners : void 0, o = N_.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + M_.distance(M_.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: Iv.Collision,
		priority: Fv.Normal
	};
}, lb = (e) => {
	throw TypeError(e);
}, ub = (e, t, n) => t.has(e) || lb("Cannot " + n), Y = (e, t, n) => (ub(e, t, "read from private field"), t.get(e)), db = (e, t, n) => t.has(e) ? lb("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), fb = (e, t, n, r) => (ub(e, t, "write to private field"), t.set(e, n), n), pb = (e, t, n) => (ub(e, t, "access private method"), n);
function mb(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function hb(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (mb(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function gb(e) {
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
function _b(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function vb(e) {
	return "nodeType" in e;
}
function yb(e) {
	return e ? _b(e) ? e : vb(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function bb(e) {
	let { Document: t } = yb(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function xb(e) {
	return !e || _b(e) ? !1 : e instanceof yb(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function Sb(e) {
	return e instanceof yb(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Cb(e) {
	return e ? _b(e) ? e.document : vb(e) ? bb(e) ? e : xb(e) || Sb(e) ? e.ownerDocument : document : document : document;
}
function wb(e) {
	let { documentElement: t } = Cb(e), n = yb(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function Tb(e, t) {
	if (Eb(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function Eb(e) {
	return e.tagName === "DETAILS";
}
function Db(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!Tb(o)) {
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
function Ob(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var kb = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Ab(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...Ab(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...Ab(i.document, t));
		}
	} catch {}
	return n;
}
function jb() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Mb() {
	let e = jb() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function Nb(e) {
	return !e || !vb(e) ? !1 : e instanceof yb(e).ShadowRoot;
}
function Pb(e) {
	if (e && vb(e)) {
		let t = e.getRootNode();
		if (Nb(t) || t instanceof Document) return t;
	}
	return Cb(e);
}
function Fb(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Ib(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		Lb(e) && Lb(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), Rb(e) && Rb(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function Lb(e) {
	return "value" in e;
}
function Rb(e) {
	return e.tagName === "CANVAS";
}
function zb(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Bb(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return zb(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Bb(e) {
	return e?.tagName === "IFRAME";
}
var Vb = /* @__PURE__ */ new WeakMap();
function Hb(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var Ub = class {
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
function Wb(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function Gb(e) {
	let t = /* @__PURE__ */ new Set(), n = Wb(e);
	for (; n;) t.add(n), n = Wb(n);
	return t;
}
function Kb(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function qb(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = Kb(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Jb(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function Yb(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = Db(e, t);
	return n > 0 && r > 0;
}
var Xb = kb ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, Zb, Qb = class extends Xb {
	constructor(e) {
		super((t) => {
			if (!Y(this, Zb)) {
				fb(this, Zb, !0);
				return;
			}
			e(t, this);
		}), db(this, Zb, !1);
	}
};
Zb = /* @__PURE__ */ new WeakMap();
var $b = Array.from({ length: 100 }, (e, t) => t / 100), ex = 75, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, db(this, lx), this.disconnect = () => {
			var e, t, n;
			fb(this, sx, !0), (e = Y(this, rx)) == null || e.disconnect(), (t = Y(this, ix)) == null || t.disconnect(), Y(this, ax).disconnect(), (n = Y(this, ox)) == null || n.remove();
		}, db(this, tx, !0), db(this, nx), db(this, rx), db(this, ix), db(this, ax), db(this, ox), db(this, sx, !1), db(this, cx, qb(() => {
			var e;
			let { element: t } = this;
			if ((e = Y(this, ix)) == null || e.disconnect(), Y(this, sx) || !Y(this, tx) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = Db(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, fb(this, ix, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? N_.intersectionRatio(r, Db(t)) : n.intersectionRatio) !== 1 && Y(this, cx).call(this);
			}, {
				threshold: $b,
				rootMargin: f,
				root: n
			})), Y(this, ix).observe(t), pb(this, lx, ux).call(this);
		}, ex)), this.boundingClientRect = e.getBoundingClientRect(), fb(this, tx, Yb(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (fb(this, ox, document.createElement("div")), Y(this, ox).style.background = "rgba(0,0,0,0.15)", Y(this, ox).style.position = "fixed", Y(this, ox).style.pointerEvents = "none", i.body.appendChild(Y(this, ox))), fb(this, ax, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Y(this, tx);
			fb(this, tx, a), !(!o && !s) && (c && !a ? ((n = Y(this, ix)) == null || n.disconnect(), this.callback(null), (r = Y(this, rx)) == null || r.disconnect(), fb(this, rx, void 0), Y(this, ox) && (Y(this, ox).style.visibility = "hidden")) : Y(this, cx).call(this), a && !Y(this, rx) && (fb(this, rx, new Qb(Y(this, cx))), Y(this, rx).observe(e)));
		}, {
			threshold: $b,
			root: i
		})), Y(this, tx) && !n.skipInitial && this.callback(this.boundingClientRect), Y(this, ax).observe(e);
	}
};
tx = /* @__PURE__ */ new WeakMap(), nx = /* @__PURE__ */ new WeakMap(), rx = /* @__PURE__ */ new WeakMap(), ix = /* @__PURE__ */ new WeakMap(), ax = /* @__PURE__ */ new WeakMap(), ox = /* @__PURE__ */ new WeakMap(), sx = /* @__PURE__ */ new WeakMap(), cx = /* @__PURE__ */ new WeakMap(), lx = /* @__PURE__ */ new WeakSet(), ux = function() {
	Y(this, sx) || (pb(this, lx, dx).call(this), !Jb(this.boundingClientRect, Y(this, nx)) && (this.callback(this.boundingClientRect), fb(this, nx, this.boundingClientRect)));
}, dx = function() {
	if (Y(this, ox)) {
		let { top: e, left: t, width: n, height: r } = Db(this.element);
		Y(this, ox).style.overflow = "hidden", Y(this, ox).style.visibility = "visible", Y(this, ox).style.top = `${Math.floor(e)}px`, Y(this, ox).style.left = `${Math.floor(t)}px`, Y(this, ox).style.width = `${Math.floor(n)}px`, Y(this, ox).style.height = `${Math.floor(r)}px`;
	}
};
var px = /* @__PURE__ */ new WeakMap(), mx = /* @__PURE__ */ new WeakMap();
function hx(e, t) {
	let n = px.get(e);
	return n ||= {
		disconnect: new fx(e, (t) => {
			let n = px.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), px.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (px.delete(e), n.disconnect());
	};
}
function gx(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = hx(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function _x(e, t) {
	let n = e.ownerDocument;
	if (!mx.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), mx.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = mx.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), mx.delete(n));
	});
}
var vx, yx, bx, xx, Sx = class {
	constructor(e, t, n) {
		this.callback = t, db(this, vx), db(this, yx, !1), db(this, bx), db(this, xx, qb((e) => {
			if (!Y(this, yx) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Y(this, bx)) if (e.target.contains(t)) {
					this.callback(Y(this, vx).boundingClientRect);
					break;
				}
			}
		}, ex));
		let r = Gb(e), i = gx(r, t), a = _x(e, Y(this, xx));
		fb(this, bx, r), fb(this, vx, new fx(e, t, n)), this.disconnect = () => {
			Y(this, yx) || (fb(this, yx, !0), i(), a(), Y(this, vx).disconnect());
		};
	}
};
vx = /* @__PURE__ */ new WeakMap(), yx = /* @__PURE__ */ new WeakMap(), bx = /* @__PURE__ */ new WeakMap(), xx = /* @__PURE__ */ new WeakMap();
function Cx(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function wx(e) {
	try {
		Cx(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function Tx(e) {
	return !kb || !e ? !1 : e === Cb(e).scrollingElement;
}
function Ex(e) {
	let t = yb(e), n = Tx(e) ? wb(e) : gb(e), r = t.visualViewport, i = Tx(e) ? {
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
function Dx(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = Ex(e), { x: s, y: c } = t ?? {
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
var Ox = class {
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
}, kx = new Ox((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), Ax = new Ox((e) => setTimeout(e, 50)), jx = /* @__PURE__ */ new Map(), Mx = jx.clear.bind(jx);
function Nx(e, t = !1) {
	if (!t) return Px(e);
	let n = jx.get(e);
	return n || (n = Px(e), jx.set(e, n), Ax.schedule(Mx), n);
}
function Px(e) {
	return yb(e).getComputedStyle(e);
}
function Fx(e, t = Nx(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function Ix(e, t = Nx(e, !0)) {
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
var Lx = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function Rx(e, t = Lx) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (bb(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && Nb(t)) return o(t.host);
		if (!xb(t)) return Sb(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = Nx(t, !0);
		if (r && t === e || Ix(t, s) && a.add(t), Fx(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function zx(e) {
	let [t] = Rx(e, { limit: 1 });
	return t ?? null;
}
function Bx(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = Wb(e);
	for (; r;) {
		if (r === t) return n;
		let e = gb(r), { x: i, y: a } = Vx(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = Wb(r);
	}
	return n;
}
function Vx(e, t = gb(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (xb(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = Nx(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function Hx(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Ux(e) {
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
function Wx(e) {
	let { scale: t, transform: n, translate: r } = e, i = Hx(t), a = Ux(r), o = Gx(n);
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
function Gx(e) {
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
var Kx = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Kx || {}), qx = {
	x: .2,
	y: .2
}, Jx = {
	x: 10,
	y: 10
};
function Yx(e, t, n, r = 25, i = qx, a = Jx) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = Ex(e), p = Bx(e), m = Wx(Nx(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new N_(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function Xx(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function Zx(e, t = !1) {
	if (Xx(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!xb(e)) return e.scrollIntoView();
	var n = zx(e);
	if (!xb(n)) return;
	let r = Nx(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function Qx(e, t, n) {
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
function $x(e, t, n) {
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
function eS({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function tS(e, t = Nx(e).translate, n = !0) {
	if (n) {
		let t = hb(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = Ux(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = Ux(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var nS = new Ox((e) => setTimeout(e, 0)), rS = /* @__PURE__ */ new Map(), iS = rS.clear.bind(rS);
function aS(e) {
	let t = e.ownerDocument, n = rS.get(t);
	if (n) return n;
	n = t.getAnimations(), rS.set(t, n), nS.schedule(iS);
	let r = n.filter((t) => mb(t.effect) && t.effect.target === e);
	return rS.set(e, r), n;
}
function oS(e, t) {
	let n = aS(e).filter((e) => {
		if (mb(e.effect)) {
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
var sS = class extends N_ {
	constructor(e, t = {}) {
		let { frameTransform: n = Bx(e), ignoreTransforms: r, getBoundingClientRect: i = gb } = t, a = oS(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || jb()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = Nx(e), p = Wx(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = cS(e, f);
		a?.(), p && (d = $x(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = Qx(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function cS(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = mb(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = Wx({
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
function lS(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var uS = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (lS(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (lS(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (lS(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function dS(e) {
	return e ? e instanceof yb(e).Element || vb(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function fS(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = yb(e.target);
	return e instanceof t;
}
function pS(e) {
	if (!e) return !1;
	let { PointerEvent: t } = yb(e.target);
	return e instanceof t;
}
function mS(e) {
	if (!dS(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || hS(e);
}
function hS(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var gS = {};
function _S(e) {
	let t = gS[e] == null ? 0 : gS[e] + 1;
	return gS[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var vS = Object.create, yS = Object.defineProperty, bS = Object.defineProperties, xS = Object.getOwnPropertyDescriptor, SS = Object.getOwnPropertyDescriptors, CS = Object.getOwnPropertySymbols, wS = Object.prototype.hasOwnProperty, TS = Object.prototype.propertyIsEnumerable, ES = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), DS = (e) => {
	throw TypeError(e);
}, OS = (e, t, n) => t in e ? yS(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, kS = (e, t) => {
	for (var n in t ||= {}) wS.call(t, n) && OS(e, n, t[n]);
	if (CS) for (var n of CS(t)) TS.call(t, n) && OS(e, n, t[n]);
	return e;
}, AS = (e, t) => bS(e, SS(t)), jS = (e, t) => yS(e, "name", {
	value: t,
	configurable: !0
}), MS = (e, t) => {
	var n = {};
	for (var r in e) wS.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && CS) for (var r of CS(e)) t.indexOf(r) < 0 && TS.call(e, r) && (n[r] = e[r]);
	return n;
}, NS = (e) => [
	,
	,
	,
	vS(e?.[ES("metadata")] ?? null)
], PS = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], FS = (e) => e !== void 0 && typeof e != "function" ? DS("Function expected") : e, IS = (e, t, n, r, i) => ({
	kind: PS[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? DS("Already initialized") : i.push(FS(e || null))
}), LS = (e, t) => OS(t, ES("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, RS = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = PS[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && xS(d < 4 ? i : {
		get [n]() {
			return Z(this, a);
		},
		set [n](e) {
			return VS(this, a, e);
		}
	}, n));
	d ? p && d < 4 && jS(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : jS(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = IS(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => BS(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Z : HS)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => VS(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? FS(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? DS("Object expected") : (FS(o = s.get) && (v.get = o), FS(o = s.set) && (v.set = o), FS(o = s.init) && g.unshift(o));
	return d || LS(e, i), v && yS(i, n, v), p ? d ^ 4 ? a : v : i;
}, zS = (e, t, n) => t.has(e) || DS("Cannot " + n), BS = (e, t) => Object(t) === t ? e.has(t) : DS("Cannot use the \"in\" operator on this value"), Z = (e, t, n) => (zS(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? DS("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), VS = (e, t, n, r) => (zS(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), HS = (e, t, n) => (zS(e, t, "access private method"), n), US = {
	role: "button",
	roleDescription: "draggable"
}, WS = "dnd-kit-description", GS = "dnd-kit-announcement", KS = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, qS = {
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
function JS(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function YS(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function XS(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var ZS = ["dragover", "dragmove"], QS = class extends Sv {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = WS, announcement: i = GS } = {}, announcements: a = qS, screenReaderInstructions: o = KS, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : _S(r), l = n ? `${i}-${n}` : _S(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => kx.schedule(m), g = $S(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, ZS.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = YS(c, o.draggable), e.push(u)), d?.isConnected || (d = XS(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!JS(t) || jb()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", US.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", US.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && kx.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function $S(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var eC = class extends Sv {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = Ng(() => Cb(this.manager.dragOperation.source?.element));
		this.destroy = ag(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, tC = /* @__PURE__ */ new Map(), nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC = class extends (oC = Cv, aC = [U], iC = [W], rC = [W], nC = [W], oC) {
	constructor(e) {
		super(e), X(cC, 5, this), Q(this, uC), Q(this, sC, /* @__PURE__ */ new Set()), Q(this, lC, X(cC, 8, this, /* @__PURE__ */ new Set())), X(cC, 11, this), this.registerEffect(HS(this, uC, dC));
	}
	register(e) {
		return Z(this, sC).add(e), () => {
			Z(this, sC).delete(e);
		};
	}
	addRoot(e) {
		return H(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			H(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return Pb(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return Pb(e?.element ?? null);
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
cC = NS(oC), sC = /* @__PURE__ */ new WeakMap(), lC = /* @__PURE__ */ new WeakMap(), uC = /* @__PURE__ */ new WeakSet(), dC = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Z(this, sC)) t.push(HS(this, uC, fC).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, fC = function(e, t) {
	let n = tC.get(e);
	n || (n = /* @__PURE__ */ new Map(), tC.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = bb(e) ? HS(this, uC, pC).call(this, e, n, t) : HS(this, uC, mC).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, pC = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && tC.delete(e);
		}
	};
}, mC = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (Nb(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && tC.delete(e);
		}
	};
}, RS(cC, 4, "additionalRoots", aC, hC, lC), RS(cC, 2, "sourceRoot", iC, hC), RS(cC, 2, "targetRoot", rC, hC), RS(cC, 2, "roots", nC, hC), LS(cC, hC);
var gC = "data-dnd-", _C = `${gC}dropping`, vC = "--dnd-", yC = `${gC}dragging`, bC = `${gC}placeholder`, xC = [
	yC,
	bC,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], SC = ["view-transition-name"], CC = `
  :is(:root,:host) [${yC}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${vC}top, 0px) !important;
    left: var(${vC}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${vC}width, auto);
    max-width: var(${vC}width, auto);
    height: var(${vC}height, auto);
    max-height: var(${vC}height, auto);
    transition: var(${vC}transition) !important;
  }

  :is(:root,:host) [${bC}] {
    transition: none;
  }

  :is(:root,:host) [${bC}='hidden'] {
    visibility: hidden;
  }

  [${yC}] * {
    pointer-events: none !important;
  }

  [${yC}]:not([${_C}]) {
    translate: var(${vC}translate) !important;
  }

  [${yC}][style*='${vC}scale'] {
    scale: var(${vC}scale) !important;
    transform-origin: var(${vC}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${yC}][popover]) {
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
  [${yC}]::backdrop, [${gC}overlay]:not([${yC}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function wC(e, t = "hidden") {
	return H(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = TC(n, r.registry.droppables), a = [], o = Ib(n), { remove: s } = o;
		return EC(i, o, a), DC(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function TC(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${gC}${_S("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function EC(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Vb.set(o, a), n.push(() => {
			Vb.delete(o), r.proxy = void 0;
		});
	}
}
function DC(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(bC, t);
}
function OC(e, t) {
	return e === t ? !0 : Wb(e) === Wb(t);
}
function kC(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && dS(t) && t.hasAttribute("popover") && requestAnimationFrame(() => wx(t));
}
function AC(e) {
	return e.tagName === "TR";
}
function jC(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || xC.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (lS(e) && lS(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (SC.includes(e) || e.startsWith(vC)) continue;
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
function MC(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), wx(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), wx(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function NC(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new sS(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = Mb();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, vC), (t = e.getElementMutationObserver()) == null || t.takeRecords(), AC(e.element) && AC(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new sS(e.feedbackElement);
	});
}
var PC = 250, FC = "ease";
function IC(e) {
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
	let { duration: r = PC, easing: i = FC } = n ?? {};
	wx(e.feedbackElement);
	let [, a] = hb(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: OC(e.feedbackElement, o) ? null : void 0 }, c = new sS(e.feedbackElement, s), l = Ux(Nx(e.feedbackElement).translate) ?? e.translate, u = new sS(o, s), d = N_.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, vC), e.feedbackElement.setAttribute(_C, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), eS({
		element: e.feedbackElement,
		keyframes: AS(kS(kS({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: Fb(yb(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(_C), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var LC, RC, zC, BC, VC, HC, UC, WC = class extends (RC = Sv, LC = [U], RC) {
	constructor(e, t) {
		super(e, t), Q(this, VC), Q(this, BC, X(zC, 8, this)), X(zC, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(hC), r = n?.register(CC);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(HS(this, VC, HC).bind(this, n)), this.registerEffect(HS(this, VC, UC));
	}
};
zC = NS(RC), BC = /* @__PURE__ */ new WeakMap(), VC = /* @__PURE__ */ new WeakSet(), HC = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = Pb(t);
	if (n) return e.addRoot(n);
}, UC = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = Bx(u), f = Bx(s), p = !OC(s, u), m = new sS(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new uS(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: ee, paddingBlockEnd: w, paddingInlineStart: te, paddingInlineEnd: ne, borderInlineStartWidth: T, borderInlineEndWidth: re, borderBlockStartWidth: ie, borderBlockEndWidth: ae } = Nx(s), oe = c === "clone", se = C === "content-box", ce = se ? parseInt(te) + parseInt(ne) + parseInt(T) + parseInt(re) : 0, le = se ? parseInt(ee) + parseInt(w) + parseInt(ie) + parseInt(ae) : 0, E = c !== "move" && !this.overlay ? wC(a, oe ? "clone" : "hidden") : null, D = H(() => fS(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = Ux(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = H(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: ue } = l, de = v * d.scaleY + d.y, O = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: O,
		y: de
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = ue;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let k = {
		x: l.coordinates.x - O,
		y: l.coordinates.y - de
	}, fe = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * ue.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * ue.y
	}, A = {
		x: k.x / d.scaleX + fe.width,
		y: k.y / d.scaleY + fe.height
	}, pe = {
		left: y + A.x,
		top: v + A.y
	};
	u.setAttribute(yC, "true");
	let me = H(() => r.transform), he = l.translate ?? {
		x: 0,
		y: 0
	}, ge = me.x * d.scaleX + he.x, _e = me.y * d.scaleY + he.y, ve = Mb();
	b.set({
		width: g - ce,
		height: _ - le,
		top: pe.top + ve.y,
		left: pe.left + ve.x,
		translate: `${ge}px ${_e}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${ue.x * 100}% ${ue.y * 100}%`
	}, vC), E && (s.insertAdjacentElement("afterend", E), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), Cx(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), wx(u), u.addEventListener("beforetoggle", kC));
	let ye, be, xe, Se = NC({
		placeholder: E,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: ue,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: ce,
		heightOffset: le,
		delta: A,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => ye,
		getSavedCellWidths: () => xe,
		setSavedCellWidths: (e) => {
			xe = e;
		}
	}), Ce = new sS(u);
	H(() => r.shape = Ce);
	let we = yb(u), Te = (e) => {
		this.manager.actions.stop({ event: e });
	}, Ee = Fb(we);
	D && we.addEventListener("resize", Te), H(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), E && (Se.observe(E), ye = jC(s, E, oe), be = MC(s, E, u));
	let De = t.dragOperation.source?.id, Oe = () => {
		if (!D || De == null) return;
		let e = t.registry.draggables.get(De), n = e?.handle ?? e?.element;
		xb(n) && n.focus();
	}, ke = () => {
		if (ye?.disconnect(), be?.disconnect(), Se.disconnect(), we.removeEventListener("resize", Te), Cx(u) && (u.removeEventListener("beforetoggle", kC), u.removeAttribute("popover")), u.removeAttribute(yC), b.reset(), xe && AC(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = xe[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		E && (t || E.parentElement !== u.parentElement) && u.isConnected && E.replaceWith(u), E?.remove();
	}, Ae = n?.dropAnimation, je = this, Me = Ig(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = H(() => r.modifiers), s = H(() => r.shape?.current), c = D && !Ee ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, vC), ye?.takeRecords(), s && s !== Ce && a && !o.length) {
				let e = M_.delta(i, a);
				r.shape = N_.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new sS(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = je.dropAnimation === void 0 ? Ae : je.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				ke();
				return;
			}
			t.renderer.rendering.then(() => {
				IC({
					element: s,
					feedbackElement: u,
					placeholder: E,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => ye,
					cleanup: ke,
					restoreFocus: Oe
				});
			});
		}
	});
	return () => {
		ke(), Me();
	};
}, RS(zC, 4, "overlay", LC, WC, BC), LS(zC, WC), WC.configure = gv(WC);
var GC = WC, KC = !0, qC = !1, JC, YC, XC, ZC = (XC = [U], Kx.Forward), QC, $C, ew;
YC = (JC = [U], Kx.Reverse);
var tw = class {
	constructor() {
		Q(this, $C, X(QC, 8, this, KC)), X(QC, 11, this), Q(this, ew, X(QC, 12, this, KC)), X(QC, 15, this);
	}
	isLocked(e) {
		return e === Kx.Idle ? !1 : e == null ? this[Kx.Forward] === KC && this[Kx.Reverse] === KC : this[e] === KC;
	}
	unlock(e) {
		e !== Kx.Idle && (this[e] = qC);
	}
};
QC = NS(null), $C = /* @__PURE__ */ new WeakMap(), ew = /* @__PURE__ */ new WeakMap(), RS(QC, 4, ZC, XC, tw, $C), RS(QC, 4, YC, JC, tw, ew), LS(QC, tw);
var nw = [Kx.Forward, Kx.Reverse], rw = class {
	constructor() {
		this.x = new tw(), this.y = new tw();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, iw = class extends Sv {
	constructor(e) {
		super(e);
		let t = Yh(new rw()), n = null;
		this.signal = t, ag(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new rw();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: aw(i.x, n.x),
					y: aw(i.y, n.y)
				}, r = t.peek();
				B(() => {
					for (let t of U_) for (let n of nw) e[t] === n && r[t].unlock(n);
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
function aw(e, t) {
	return Math.sign(e - t);
}
var ow, sw, cw, lw, uw, dw, fw = class extends (sw = Cv, ow = [U], sw) {
	constructor(e) {
		super(e), Q(this, lw, X(cw, 8, this, !1)), X(cw, 11, this), Q(this, uw), Q(this, dw, () => {
			if (!Z(this, uw)) return;
			let { element: e, by: t } = Z(this, uw);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return VS(this, uw, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: pw(n.x),
					y: pw(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = Dx(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = Yx(e, r, i);
						if (a) for (let e of U_) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Z(this, uw)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return VS(this, uw, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), kx.schedule(Z(this, dw)), !0;
							}
						}
					}
				}
			}
			return VS(this, uw, void 0), !1;
		};
		let t = null, n = null, r = Ng(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = zb(Pb(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = Ng(() => {
			let t = r.value, { documentElement: i } = Cb(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = Rx(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = Rx(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, Pg);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new iw(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !fS(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
cw = NS(sw), lw = /* @__PURE__ */ new WeakMap(), uw = /* @__PURE__ */ new WeakMap(), dw = /* @__PURE__ */ new WeakMap(), RS(cw, 4, "autoScrolling", ow, fw, lw), LS(cw, fw);
function pw(e) {
	return e > 0 ? Kx.Forward : e < 0 ? Kx.Reverse : Kx.Idle;
}
var mw = new class {
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
}), hw = 10, gw = class extends Sv {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(fw);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = ag(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => mw.schedule(n.scroll), hw);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, _w = {
	capture: !0,
	passive: !0
}, vw, yw = class extends Cv {
	constructor(e) {
		super(e), Q(this, vw), this.handleScroll = () => {
			Z(this, vw) ?? VS(this, vw, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), VS(this, vw, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = ag(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, _w), () => {
					e.removeEventListener("scroll", this.handleScroll, _w);
				};
			}
		});
	}
};
vw = /* @__PURE__ */ new WeakMap();
var bw = class extends Sv {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = ag(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), xw(), document.addEventListener("selectionchange", xw, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", xw, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function xw() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var Sw = Object.freeze({
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
}), Cw, ww = class extends jy {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Q(this, Cw, []), this.listeners = new Ub(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !dS(e.target) || t.disabled) return;
			let { keyboardCodes: r = Sw.keyboardCodes, preventActivation: i = Sw.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return ag(() => {
			let n = e.handle ?? e.element, r = (n) => {
				fS(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), Zx(r);
		let { center: i } = new sS(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = Cb(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Z(this, Cw).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = Sw.keyboardCodes } = n ?? {};
		if (Ew(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = Ew(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		Ew(e, r.up) ? this.handleMove("up", e) : Ew(e, r.down) && this.handleMove("down", e), Ew(e, r.left) ? this.handleMove("left", e) : Ew(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? Sw.offset;
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
		let e = this.manager.registry.plugins.get(gw);
		e?.disabled === !1 && (e.disable(), Z(this, Cw).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Z(this, Cw).forEach((e) => e()), VS(this, Cw, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
Cw = /* @__PURE__ */ new WeakMap(), ww.configure = gv(ww), ww.defaults = Sw;
var Tw = ww;
function Ew(e, t) {
	return t.includes(e.code);
}
var Dw, Ow = class extends Py {
	constructor() {
		super(...arguments), Q(this, Dw);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				VS(this, Dw, Ob(e));
				break;
			case "pointermove":
				if (!Z(this, Dw)) return;
				let { x: t, y: n } = Ob(e), r = {
					x: t - Z(this, Dw).x,
					y: n - Z(this, Dw).y
				}, { tolerance: i } = this.options;
				if (i && V_(r, i)) {
					this.abort();
					return;
				}
				V_(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		VS(this, Dw, void 0);
	}
};
Dw = /* @__PURE__ */ new WeakMap();
var kw, Aw, jw = class extends Py {
	constructor() {
		super(...arguments), Q(this, kw), Q(this, Aw);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				VS(this, Aw, Ob(e)), VS(this, kw, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Z(this, Aw)) return;
				let { x: t, y: n } = Ob(e);
				V_({
					x: t - Z(this, Aw).x,
					y: n - Z(this, Aw).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Z(this, kw) && (clearTimeout(Z(this, kw)), VS(this, Aw, void 0), VS(this, kw, void 0));
	}
};
kw = /* @__PURE__ */ new WeakMap(), Aw = /* @__PURE__ */ new WeakMap();
var Mw = class {};
Mw.Delay = jw, Mw.Distance = Ow;
var Nw = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && dS(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new Mw.Delay({
			value: 250,
			tolerance: 5
		})] : mS(r) && !e.defaultPrevented ? [new Mw.Delay({
			value: 200,
			tolerance: 0
		})] : [new Mw.Delay({
			value: 200,
			tolerance: 10
		}), new Mw.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !dS(n) || t.handle?.contains(n) ? !1 : Hb(n);
	}
}), Pw, Fw = class extends jy {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Q(this, Pw, /* @__PURE__ */ new Set()), this.listeners = new Ub(), this.latest = {
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
		let { activationConstraints: r = Nw.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return ag(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				pS(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (Vw(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !dS(e.target) || t.disabled || Lw(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = Nw.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = xb(i) && i.draggable && i.getAttribute("draggable") === "true", o = Bx(t.element), { x: s, y: c } = Ob(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new My(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = Ab(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : Rw,
				options: { capture: !0 }
			}
		]);
		Z(this, Pw).add(() => {
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
			let n = Ob(e), r = Bx(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, kx.schedule(this.handleMove);
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
		let i = Cb(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = dS(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: Rw,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: Rw
			},
			{
				type: "contextmenu",
				listener: Rw
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Z(this, Pw).add(o);
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
		}, Z(this, Pw).forEach((e) => e()), Z(this, Pw).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
Pw = /* @__PURE__ */ new WeakMap(), Fw.configure = gv(Fw), Fw.defaults = Nw;
var Iw = Fw;
function Lw(e) {
	return "sensor" in e;
}
function Rw(e) {
	e.preventDefault();
}
function zw() {}
var Bw = /* @__PURE__ */ new WeakSet();
function Vw(e) {
	!e || Bw.has(e) || (e.addEventListener("touchmove", zw, {
		capture: !1,
		passive: !1
	}), Bw.add(e));
}
var Hw = {
	modifiers: [],
	plugins: [
		QS,
		gw,
		eC,
		GC,
		bw
	],
	sensors: [Iw, Tw]
}, Uw = class extends ib {
	constructor(e = {}) {
		let t = rb(e.plugins, Hw.plugins), n = rb(e.sensors, Hw.sensors), r = rb(e.modifiers, Hw.modifiers);
		super(AS(kS({}, e), {
			plugins: [
				yw,
				fw,
				hC,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, Ww, Gw, Kw, qw, Jw, Yw, Xw, Zw, Qw = class extends (qw = gy, Kw = [U], Gw = [U], Ww = [U], qw) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = MS(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(kS({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(_v) ?? [...e.sensors]).map((t) => {
				let n = t instanceof jy ? t : e.registry.register(t.plugin), r = t instanceof jy ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), Q(this, Yw, X(Jw, 8, this)), X(Jw, 11, this), Q(this, Xw, X(Jw, 12, this)), X(Jw, 15, this), Q(this, Zw, X(Jw, 16, this)), X(Jw, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
Jw = NS(qw), Yw = /* @__PURE__ */ new WeakMap(), Xw = /* @__PURE__ */ new WeakMap(), Zw = /* @__PURE__ */ new WeakMap(), RS(Jw, 4, "handle", Kw, Qw, Yw), RS(Jw, 4, "element", Gw, Qw, Xw), RS(Jw, 4, "feedback", Ww, Qw, Zw), LS(Jw, Qw);
var $w, eT, tT, nT, rT, iT, aT, oT, sT, cT, lT = class extends (tT = Ay, eT = [U], $w = [U], tT) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = MS(n, ["element", "effects"]);
		let { collisionDetector: o = sb } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new sS(n), i = H(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = Yh(!1);
		super(AS(kS({}, a), {
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
						let t = new Sx(e, s);
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
		}), t), Q(this, sT), Q(this, rT, X(nT, 8, this)), X(nT, 11, this), Q(this, cT, X(nT, 12, this)), X(nT, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		VS(this, sT, e, oT);
	}
	get element() {
		return this.proxy ?? Z(this, sT, aT);
	}
};
nT = NS(tT), rT = /* @__PURE__ */ new WeakMap(), sT = /* @__PURE__ */ new WeakSet(), cT = /* @__PURE__ */ new WeakMap(), iT = RS(nT, 20, "#element", eT, sT, rT), aT = iT.get, oT = iT.set, RS(nT, 4, "proxy", $w, lT, cT), LS(nT, lT);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var uT = Object.create, dT = Object.defineProperty, fT = Object.defineProperties, pT = Object.getOwnPropertyDescriptor, mT = Object.getOwnPropertyDescriptors, hT = Object.getOwnPropertySymbols, gT = Object.prototype.hasOwnProperty, _T = Object.prototype.propertyIsEnumerable, vT = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), yT = (e) => {
	throw TypeError(e);
}, bT = (e, t, n) => t in e ? dT(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, xT = (e, t) => {
	for (var n in t ||= {}) gT.call(t, n) && bT(e, n, t[n]);
	if (hT) for (var n of hT(t)) _T.call(t, n) && bT(e, n, t[n]);
	return e;
}, ST = (e, t) => fT(e, mT(t)), CT = (e, t) => {
	var n = {};
	for (var r in e) gT.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && hT) for (var r of hT(e)) t.indexOf(r) < 0 && _T.call(e, r) && (n[r] = e[r]);
	return n;
}, wT = (e) => [
	,
	,
	,
	uT(null)
], TT = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], ET = (e) => e !== void 0 && typeof e != "function" ? yT("Function expected") : e, DT = (e, t, n, r, i) => ({
	kind: TT[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? yT("Already initialized") : i.push(ET(e || null))
}), OT = (e, t) => bT(t, vT("metadata"), e[3]), kT = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, AT = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = TT[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, pT({
		get [n]() {
			return MT(this, a);
		},
		set [n](e) {
			return PT(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = DT(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? ET(s) && (v[h] = s) : typeof s != "object" || !s ? yT("Object expected") : (ET(o = s.get) && (v.get = o), ET(o = s.set) && (v.set = o), ET(o = s.init) && g.unshift(o));
	return v && dT(i, n, v), i;
}, jT = (e, t, n) => t.has(e) || yT("Cannot " + n), MT = (e, t, n) => (jT(e, t, "read from private field"), t.get(e)), NT = (e, t, n) => t.has(e) ? yT("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), PT = (e, t, n, r) => (jT(e, t, "write to private field"), t.set(e, n), n);
function FT(e) {
	return e instanceof gE || e instanceof hE;
}
var IT = 10, LT = class extends Sv {
	constructor(e) {
		super(e);
		let t = ag(() => {
			let { dragOperation: t } = e;
			if (fS(t.activatorEvent) && FT(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(fw);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!fS(e.nativeEvent) || !FT(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = RT(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				B(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && FT(e) || !e.element) continue;
						let n = e.shape, r = new sS(e.element, { getBoundingClientRect: (e) => Db(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + IT < r.center.y || s == "up" && u.y - IT > r.center.y || s == "left" && u.x - IT > r.center.x || s == "right" && u.x + IT < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, cb);
				B(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !FT(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					Zx(u);
					let d = new sS(u);
					if (!d) return;
					let f = N_.delta(d, N_.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function RT(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var zT = Object.defineProperty, BT = Object.defineProperties, VT = Object.getOwnPropertyDescriptors, HT = Object.getOwnPropertySymbols, UT = Object.prototype.hasOwnProperty, WT = Object.prototype.propertyIsEnumerable, GT = (e, t, n) => t in e ? zT(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, KT = (e, t) => {
	for (var n in t ||= {}) UT.call(t, n) && GT(e, n, t[n]);
	if (HT) for (var n of HT(t)) WT.call(t, n) && GT(e, n, t[n]);
	return e;
}, qT = (e, t) => BT(e, VT(t));
function JT(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function YT(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function XT(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (YT(r)) {
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
	if (c === -1 && YT(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return qT(KT({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return qT(KT({}, e), {
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
		if (l != null && l === d && c === u && YT(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return qT(KT({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return qT(KT({}, e), {
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
	if (l === d) return qT(KT({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return qT(KT({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function ZT(e, t) {
	return XT(e, t, JT);
}
var QT = "__default__", $T = class extends Sv {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof gE) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(nE(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!FT(i) || !FT(a) || i.sortable === a.sortable) return;
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
					let f = nE(c), p = s ? f : nE(l), m = i.sortable.group ?? QT, h = a.sortable.group ?? QT, g = {
						[m]: f,
						[h]: p
					}, _ = ZT(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), eE(u, v, d, y), B(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			FT(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = nE(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (eE(n, a.index, o, i.index), B(() => {
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
function eE(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function tE(e, t) {
	return e.index - t.index;
}
function nE(e) {
	return Array.from(e).sort(tE);
}
var rE = [LT, $T], iE = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, aE = new o_(), oE, sE = [U], cE, lE, uE, dE, fE, pE;
oE = [U];
var mE = class {
	constructor(e, t) {
		NT(this, lE, kT(cE, 8, this)), kT(cE, 11, this), NT(this, uE), NT(this, dE), NT(this, fE, kT(cE, 12, this)), kT(cE, 15, this), NT(this, pE), this.register = () => (B(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			B(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			B(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = iE, plugins: l = rE } = n, u = CT(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new gE(u, t, this), this.draggable = new hE(ST(xT({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && aE.clear(this.manager), e?.dragging && aE.set(this.manager, this.id, H(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = MT(this, dE), i = MT(this, uE);
					(e !== r || t !== i) && (PT(this, dE, e), PT(this, uE, t), this.animate());
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
		}), t, this), PT(this, pE, u.element), this.manager = t, this.index = a, PT(this, dE, a), this.group = i, PT(this, uE, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return aE.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return aE.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		H(() => {
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
				}, { translate: o } = Nx(r), s = tS(r, o, !1), c = tS(r, o);
				if (a.x || a.y) {
					let n = Fb(yb(r)) ? ST(xT({}, t), { duration: 0 }) : t;
					eS({
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
		B(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		B(() => {
			let t = MT(this, pE), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), PT(this, pE, e);
		});
	}
	get element() {
		let e = MT(this, pE);
		if (e) return Vb.get(e) ?? e ?? this.droppable.element;
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
		B(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		B(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		B(() => {
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
		this.droppable.collisionDetector = e ?? sb;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		B(() => {
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
cE = wT(), lE = /* @__PURE__ */ new WeakMap(), uE = /* @__PURE__ */ new WeakMap(), dE = /* @__PURE__ */ new WeakMap(), fE = /* @__PURE__ */ new WeakMap(), pE = /* @__PURE__ */ new WeakMap(), AT(cE, 4, "index", sE, mE, lE), AT(cE, 4, "group", oE, mE, fE), OT(cE, mE);
var hE = class extends Qw {
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
}, gE = class extends lT {
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
function _E(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function vE(e) {
	if (e != null) return _E(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var yE = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? A.useLayoutEffect : A.useEffect;
function bE() {
	let e = (0, A.useState)(0)[1];
	return (0, A.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function xE(e, t) {
	let n = (0, A.useRef)(/* @__PURE__ */ new Map()), r = bE();
	return yE(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return ag(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = H(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Qn.flushSync)(r) : r());
		});
	}, [e]), (0, A.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function SE(e, t) {
	e();
}
function CE(e) {
	let t = (0, A.useRef)(e);
	return yE(() => {
		t.current = e;
	}, [e]), t;
}
function wE(e, t, n = A.useEffect, r = Object.is) {
	let i = (0, A.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function TE(e, t) {
	let n = (0, A.useRef)(vE(e));
	yE(() => {
		let r = vE(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var EE = Object.getOwnPropertySymbols, DE = Object.prototype.hasOwnProperty, OE = Object.prototype.propertyIsEnumerable, kE = (e, t) => {
	var n = {};
	for (var r in e) DE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && EE) for (var r of EE(e)) t.indexOf(r) < 0 && OE.call(e, r) && (n[r] = e[r]);
	return n;
}, AE = (0, A.createContext)(new Uw()), jE = (0, A.memo)((0, A.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, A.useState)(0), i = (0, A.useRef)(null), a = (0, A.useRef)(null), o = (0, A.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, A.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return yE(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, A.useImperativeHandle)(t, () => o), null;
})), ME = [void 0, Pg];
function NE(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = kE(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, A.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = rb(d, Hw.plugins), h = rb(p, Hw.sensors), g = rb(f, Hw.modifiers), _ = CE(i), v = CE(a), y = CE(s), b = CE(o), x = CE(c), S = CE(r), C = PE(() => l.manager ?? new Uw(l));
	return (0, A.useEffect)(() => {
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
	}, [C]), wE(m, () => C && (C.plugins = m), ...ME), wE(h, () => C && (C.sensors = h), ...ME), wE(g, () => C && (C.modifiers = g), ...ME), /* @__PURE__ */ (0, F.jsxs)(AE.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, F.jsx)(jE, {
			ref: u,
			children: n
		}), n]
	});
}
function PE(e) {
	let t = (0, A.useRef)(null);
	return t.current ||= e(), (0, A.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function FE() {
	return (0, A.useContext)(AE);
}
function IE(e) {
	let t = FE() ?? void 0, [n] = (0, A.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), yE(n.register, [t, n]), n;
}
var LE = Object.create, RE = Object.defineProperty, zE = Object.getOwnPropertyDescriptor, BE = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), VE = (e) => {
	throw TypeError(e);
}, HE = (e, t, n) => t in e ? RE(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, UE = (e) => [
	,
	,
	,
	LE(e?.[BE("metadata")] ?? null)
], WE = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], GE = (e) => e !== void 0 && typeof e != "function" ? VE("Function expected") : e, KE = (e, t, n, r, i) => ({
	kind: WE[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? VE("Already initialized") : i.push(GE(e || null))
}), qE = (e, t) => HE(t, BE("metadata"), e[3]), JE = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, YE = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = WE[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, zE(i, n)), _ = r.length - 1; _ >= 0; _--) c = KE(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, GE(o) && (g[m] = o);
	return g && RE(i, n, g), i;
}, XE = (e, t, n) => t.has(e) || VE("Cannot " + n), ZE = (e, t, n) => (XE(e, t, "read from private field"), t.get(e)), QE = (e, t, n) => t.has(e) ? VE("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), $E = (e, t, n, r) => (XE(e, t, "write to private field"), t.set(e, n), n), eD = class e {
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
}, tD, nD, rD, iD, aD, oD = class extends (rD = r_, nD = [W], tD = [W], rD) {
	constructor(e) {
		let t = eD.from(e);
		super(t, (e, t) => eD.equals(e, t)), JE(aD, 5, this), QE(this, iD, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return eD.delta(this.current, this.initial);
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
		let { current: t } = this, n = eD.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - ZE(this, iD), o = (e) => Math.round(e / a * 100);
		B(() => {
			$E(this, iD, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(eD.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
aD = UE(rD), iD = /* @__PURE__ */ new WeakMap(), YE(aD, 2, "delta", nD, oD), YE(aD, 2, "direction", tD, oD), qE(aD, oD);
var sD = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(sD || {});
Object.values(sD);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var cD = Object.defineProperty, lD = Object.defineProperties, uD = Object.getOwnPropertyDescriptors, dD = Object.getOwnPropertySymbols, fD = Object.prototype.hasOwnProperty, pD = Object.prototype.propertyIsEnumerable, mD = (e, t, n) => t in e ? cD(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, hD = (e, t) => {
	for (var n in t ||= {}) fD.call(t, n) && mD(e, n, t[n]);
	if (dD) for (var n of dD(t)) pD.call(t, n) && mD(e, n, t[n]);
	return e;
}, gD = (e, t) => lD(e, uD(t));
function _D(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = hD(hD({}, iE), e.transition), _ = IE((t) => new mE(gD(hD({}, e), {
		transition: g,
		register: !1,
		handle: vE(s),
		element: vE(o),
		target: vE(m),
		feedback: d
	}), t)), v = xE(_, vD);
	return wE(i, () => _.id = i), yE(() => {
		B(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), wE(h, () => _.type = h), wE(t, () => _.accept = t, void 0, Pg), wE(a, () => a && (_.data = a)), wE(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, SE), TE(s, (e) => _.handle = e), TE(o, (e) => _.element = e), TE(m, (e) => _.target = e), wE(u, () => _.disabled = u === !0), wE(p, () => _.sensors = p), wE(n, () => _.collisionDetector = n), wE(r, () => _.collisionPriority = r), wE(d, () => _.feedback = d ?? "default"), wE(g, () => _.transition = g, void 0, Pg), wE(f, () => _.modifiers = f, void 0, Pg), wE(e.alignment, () => _.alignment = e.alignment), {
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
		handleRef: (0, A.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, A.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, A.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, A.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function vD(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var yD = Object.defineProperty, bD = Object.defineProperties, xD = Object.getOwnPropertyDescriptors, SD = Object.getOwnPropertySymbols, CD = Object.prototype.hasOwnProperty, wD = Object.prototype.propertyIsEnumerable, TD = (e, t, n) => t in e ? yD(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ED = (e, t) => {
	for (var n in t ||= {}) CD.call(t, n) && TD(e, n, t[n]);
	if (SD) for (var n of SD(t)) wD.call(t, n) && TD(e, n, t[n]);
	return e;
}, DD = (e, t) => bD(e, xD(t));
function OD(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function kD(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function AD(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (kD(r)) {
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
	if (c === -1 && kD(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return DD(ED({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return DD(ED({}, e), {
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
		if (l != null && l === d && c === u && kD(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return DD(ED({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return DD(ED({}, e), {
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
	if (l === d) return DD(ED({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return DD(ED({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function jD(e, t) {
	return AD(e, t, OD);
}
//#endregion
//#region src/card-carousel/studio-ui/utils.ts
function MD(e = []) {
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
function ND({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = _D({
		id: e,
		index: n
	});
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		ref: s,
		className: "d-flex justify-content-between p-2 border rounded-sm" + (r ? " bg-light-300" : ""),
		onClick: a,
		children: [/* @__PURE__ */ (0, F.jsx)("div", { children: t }), /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "d-flex align-items-center",
			children: [i && /* @__PURE__ */ (0, F.jsx)("button", {
				className: "btn btn-link p-0 text-danger",
				"aria-label": "Delete card",
				onClick: (e) => {
					e.stopPropagation(), o();
				},
				children: /* @__PURE__ */ (0, F.jsx)("span", {
					className: "material-icons",
					children: "delete_outline"
				})
			}), /* @__PURE__ */ (0, F.jsx)("span", {
				className: "material-icons text-light-600",
				children: "drag_indicator"
			})]
		})]
	});
}
function PD() {
	let { values: e, setFieldValue: t } = Ep(), [n, r] = (0, A.useState)(0);
	return /* @__PURE__ */ (0, F.jsx)(NE, {
		onDragOver: (n) => t("cards", jD(e.cards, n)),
		children: /* @__PURE__ */ (0, F.jsx)(am, {
			name: "cards",
			children: ({ push: t, remove: i }) => /* @__PURE__ */ (0, F.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, F.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, F.jsx)(v, {
						variant: "primary",
						iconBefore: Qe,
						onClick: () => {
							t(MD(e.cards)), r(e.cards.length);
						},
						children: "Add Card"
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "mt-4",
						children: e.cards.map((t, a) => /* @__PURE__ */ (0, F.jsx)(ND, {
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
				}), /* @__PURE__ */ (0, F.jsx)("div", {
					className: "col-9 p-4",
					children: e.cards.length > 0 && /* @__PURE__ */ (0, F.jsx)(Ih, { cardIndex: n })
				})]
			})
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/ModalFooter.tsx
function FD({ runtime: e, showingEditor: t, onContinue: n }) {
	return /* @__PURE__ */ (0, F.jsx)(us, {
		position: "bottom",
		className: "p-4 border-top card-carousel-editor-modal-footer",
		children: /* @__PURE__ */ (0, F.jsxs)(se, {
			direction: "horizontal",
			gap: 4,
			children: [t ? /* @__PURE__ */ (0, F.jsx)(v, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, F.jsx)(v, {
				type: "button",
				variant: "primary",
				className: "save-button",
				onClick: n,
				children: "Continue"
			}), /* @__PURE__ */ (0, F.jsx)(v, {
				variant: "secondary",
				className: "action-button",
				onClick: () => e.notify("cancel", {}),
				type: "button",
				children: "Cancel"
			})]
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/StudioUI.tsx
function ID({ runtime: e, saveUrl: t, initData: n }) {
	let [r, i] = (0, A.useState)(!1);
	return /* @__PURE__ */ (0, F.jsx)(Vp, {
		initialValues: n,
		onSubmit: async (n) => {
			e.notify("save", { state: "start" }), $.post(t, JSON.stringify(n)).done(() => {
				e.notify("save", { state: "end" });
			}).fail(() => {
				e.notify("error", {
					title: "Save Error",
					message: "Failed to save the card carousel."
				});
			});
		},
		children: /* @__PURE__ */ (0, F.jsx)(Xp, { children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "studio-ui d-flex flex-column justify-content-between",
			children: [r ? /* @__PURE__ */ (0, F.jsx)(PD, {}) : /* @__PURE__ */ (0, F.jsx)(om, {}), /* @__PURE__ */ (0, F.jsx)(FD, {
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
var LD = ".icon-selector{position:relative}.icon-list-popup{z-index:100;background-color:var(--pgn-color-body-bg);width:242px;min-height:242px;max-height:300px;position:absolute;top:0;left:0;overflow:scroll}.icon-symbol{background-color:var(--pgn-color-body-bg);color:var(--pgn-color-body-base);border:0}.icon-symbol:hover{background-color:var(--pgn-color-light)}.icon-symbol:focus{background-color:var(--pgn-color-light);border:0}.carousel-editor{overflow-y:scroll}.modal-lg .carousel-editor{max-height:540px}.modal-fullscreen .carousel-editor{height:calc(100vh - 140px)}.card-carousel-editor-modal-footer{background-color:var(--pgn-color-card-bg-base)}.wrapper.xblock-iframe-content .xblock-v1-studio_view{display:flex}.react-studio-block{flex-grow:1}.react-studio-block *,.react-studio-block :before,.react-studio-block :after{box-sizing:border-box}.react-studio-block .wrapper-comp-settings{max-height:calc(100vh - 69px);overflow-y:scroll}.react-studio-block{margin-bottom:0!important}.modal-lg .react-studio-block .wrapper-comp-settings{max-height:366px}.xblock-actions{border-top:1px solid var(--pgn-color-gray-200);background:var(--pgn-color-white);z-index:1;justify-content:flex-end;gap:.5em;padding:.75em 1em;display:flex;position:sticky;bottom:0;box-shadow:0 -2px 6px #0000000d}.react-colorful{-webkit-user-select:none;user-select:none;cursor:default;flex-direction:column;width:200px;height:200px;display:flex;position:relative}.react-colorful__saturation{background-image:linear-gradient(#0000,#000),linear-gradient(90deg,#fff,#fff0);border-color:#0000 #0000 #000;border-bottom-style:solid;border-bottom-width:12px;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__pointer-fill,.react-colorful__alpha-gradient{content:\"\";pointer-events:none;border-radius:inherit;position:absolute;inset:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px #0000000d}.react-colorful__hue,.react-colorful__alpha{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;touch-action:none;outline:none;position:absolute;inset:0}.react-colorful__pointer{z-index:1;box-sizing:border-box;background-color:#fff;border:2px solid #fff;border-radius:50%;width:28px;height:28px;position:absolute;transform:translate(-50%,-50%);box-shadow:0 2px 4px #0003}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%)scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill-opacity=\\\".05\\\"><rect x=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/><rect y=\\\"8\\\" width=\\\"8\\\" height=\\\"8\\\"/></svg>\")}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}.studio-ui{flex-grow:1;min-height:635px}.xmodule_CardCarouselXBlock,.xblock-studio_view-card_carousel{display:flex}.xmodule_CardCarouselXBlock form,.xblock-studio_view-card_carousel form{flex-grow:1;display:flex}", RD = (t, n, r) => {
	let i = e(t), a = n.handlerUrl(t, "studio_save");
	(!r.cards || !r.cards.length) && (r.cards = [MD()]);
	let o = i.parentElement?.parentElement;
	o && (o.style.minHeight = "635px"), te(n, t, r, LD)(/* @__PURE__ */ (0, F.jsx)(ID, {
		saveUrl: a,
		runtime: n,
		initData: r
	}));
};
//#endregion
export { RD as renderBlock };
