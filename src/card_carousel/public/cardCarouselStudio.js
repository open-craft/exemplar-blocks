import { C as e, E as t, S as n, T as r, _ as i, a, b as o, d as s, f as c, g as l, h as u, i as d, m as f, n as p, o as m, p as h, r as g, s as _, t as v, u as y, v as b, w as x, x as S, y as C } from "./jsx-runtime-BX3CIW3f.js";
//#region node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/camelize.js
var w = /* @__PURE__ */ t(h()), T = /* @__PURE__ */ t(i()), ee = /* @__PURE__ */ t(S()), te = n(), E = /* @__PURE__ */ t(x()), ne = /-(.)/g;
function re(e) {
	return e.replace(ne, function(e, t) {
		return t.toUpperCase();
	});
}
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/createWithBsPrefix.js
var ie = [
	"className",
	"bsPrefix",
	"as"
], ae = function(e) {
	return e[0].toUpperCase() + re(e).slice(1);
};
function oe(e, t) {
	var n = t === void 0 ? {} : t, r = n.displayName, i = r === void 0 ? ae(e) : r, a = n.Component, o = n.defaultProps, s = /* @__PURE__ */ E.forwardRef(function(t, n) {
		var r = t.className, i = t.bsPrefix, o = t.as, s = o === void 0 ? a || "div" : o, c = u(t, ie), d = f(i, e);
		return /* @__PURE__ */ E.createElement(s, l({
			ref: n,
			className: (0, T.default)(r, d)
		}, c));
	});
	return s.defaultProps = o, s.displayName = i, s;
}
//#endregion
//#region node_modules/.pnpm/prop-types-extra@1.1.1_react@18.3.1/node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var se = /* @__PURE__ */ r(((e, t) => {
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
(/* @__PURE__ */ r(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = i;
	var n = r(se());
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
var ce = [
	"as",
	"className",
	"type",
	"tooltip"
], D = {
	type: w.default.string,
	tooltip: w.default.bool,
	as: w.default.elementType
}, le = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "div" : n, i = e.className, a = e.type, o = a === void 0 ? "valid" : a, s = e.tooltip, c = s === void 0 ? !1 : s, d = u(e, ce);
	return /* @__PURE__ */ E.createElement(r, l({}, d, {
		ref: t,
		className: (0, T.default)(i, o + "-" + (c ? "tooltip" : "feedback"))
	}));
});
le.displayName = "Feedback", le.propTypes = D;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormContext.js
var O = /* @__PURE__ */ E.createContext({ controlId: void 0 }), ue = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"type",
	"isValid",
	"isInvalid",
	"isStatic",
	"as"
], de = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.type, s = o === void 0 ? "checkbox" : o, c = e.isValid, d = c === void 0 ? !1 : c, p = e.isInvalid, m = p === void 0 ? !1 : p, h = e.isStatic, g = e.as, _ = g === void 0 ? "input" : g, v = u(e, ue), y = (0, E.useContext)(O), b = y.controlId, x = y.custom ? [i, "custom-control-input"] : [r, "form-check-input"], S = x[0], C = x[1];
	return r = f(S, C), /* @__PURE__ */ E.createElement(_, l({}, v, {
		ref: t,
		type: s,
		id: n || b,
		className: (0, T.default)(a, r, d && "is-valid", m && "is-invalid", h && "position-static")
	}));
});
de.displayName = "FormCheckInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheckLabel.js
var fe = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], pe = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = u(e, fe), s = (0, E.useContext)(O), c = s.controlId, d = s.custom ? [r, "custom-control-label"] : [n, "form-check-label"], p = d[0], m = d[1];
	return n = f(p, m), /* @__PURE__ */ E.createElement("label", l({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, T.default)(i, n)
	}));
});
pe.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormCheck.js
var me = [
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
], he = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.inline, o = a === void 0 ? !1 : a, s = e.disabled, c = s === void 0 ? !1 : s, d = e.isValid, p = d === void 0 ? !1 : d, m = e.isInvalid, h = m === void 0 ? !1 : m, g = e.feedbackTooltip, _ = g === void 0 ? !1 : g, v = e.feedback, y = e.className, b = e.style, x = e.title, S = x === void 0 ? "" : x, C = e.type, w = C === void 0 ? "checkbox" : C, ee = e.label, te = e.children, ne = e.custom, re = e.as, ie = re === void 0 ? "input" : re, ae = u(e, me), oe = w === "switch" ? !0 : ne, se = oe ? [i, "custom-control"] : [r, "form-check"], ce = se[0], D = se[1];
	r = f(ce, D);
	var ue = (0, E.useContext)(O).controlId, fe = (0, E.useMemo)(function() {
		return {
			controlId: n || ue,
			custom: oe
		};
	}, [
		ue,
		oe,
		n
	]), he = oe || ee != null && ee !== !1 && !te, ge = /* @__PURE__ */ E.createElement(de, l({}, ae, {
		type: w === "switch" ? "checkbox" : w,
		ref: t,
		isValid: p,
		isInvalid: h,
		isStatic: !he,
		disabled: c,
		as: ie
	}));
	return /* @__PURE__ */ E.createElement(O.Provider, { value: fe }, /* @__PURE__ */ E.createElement("div", {
		style: b,
		className: (0, T.default)(y, r, oe && "custom-" + w, o && r + "-inline")
	}, te || /* @__PURE__ */ E.createElement(E.Fragment, null, ge, he && /* @__PURE__ */ E.createElement(pe, { title: S }, ee), (p || h) && /* @__PURE__ */ E.createElement(le, {
		type: p ? "valid" : "invalid",
		tooltip: _
	}, v))));
});
he.displayName = "FormCheck", he.Input = de, he.Label = pe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileInput.js
var ge = [
	"id",
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"isValid",
	"isInvalid",
	"lang",
	"as"
], _e = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.className, o = e.isValid, s = e.isInvalid, c = e.lang, d = e.as, p = d === void 0 ? "input" : d, m = u(e, ge), h = (0, E.useContext)(O), g = h.controlId, _ = h.custom, v = "file", y = _ ? [i, "custom-file-input"] : [r, "form-control-file"], b = y[0], x = y[1];
	return r = f(b, x), /* @__PURE__ */ E.createElement(p, l({}, m, {
		ref: t,
		id: n || g,
		type: v,
		lang: c,
		className: (0, T.default)(a, r, o && "is-valid", s && "is-invalid")
	}));
});
_e.displayName = "FormFileInput";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFileLabel.js
var ve = [
	"bsPrefix",
	"bsCustomPrefix",
	"className",
	"htmlFor"
], ye = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.className, a = e.htmlFor, o = u(e, ve), s = (0, E.useContext)(O), c = s.controlId, d = s.custom ? [r, "custom-file-label"] : [n, "form-file-label"], p = d[0], m = d[1];
	return n = f(p, m), /* @__PURE__ */ E.createElement("label", l({}, o, {
		ref: t,
		htmlFor: a || c,
		className: (0, T.default)(i, n),
		"data-browse": o["data-browse"]
	}));
});
ye.displayName = "FormFileLabel";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormFile.js
var be = [
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
], xe = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.id, r = e.bsPrefix, i = e.bsCustomPrefix, a = e.disabled, o = a === void 0 ? !1 : a, s = e.isValid, c = s === void 0 ? !1 : s, d = e.isInvalid, p = d === void 0 ? !1 : d, m = e.feedbackTooltip, h = m === void 0 ? !1 : m, g = e.feedback, _ = e.className, v = e.style, y = e.label, b = e.children, x = e.custom, S = e.lang, C = e["data-browse"], w = e.as, ee = w === void 0 ? "div" : w, te = e.inputAs, ne = te === void 0 ? "input" : te, re = u(e, be), ie = x ? [i, "custom"] : [r, "form-file"], ae = ie[0], oe = ie[1];
	r = f(ae, oe);
	var se = "file", ce = (0, E.useContext)(O).controlId, D = (0, E.useMemo)(function() {
		return {
			controlId: n || ce,
			custom: x
		};
	}, [
		ce,
		x,
		n
	]), ue = y != null && y !== !1 && !b, de = /* @__PURE__ */ E.createElement(_e, l({}, re, {
		ref: t,
		isValid: c,
		isInvalid: p,
		disabled: o,
		as: ne,
		lang: S
	}));
	return /* @__PURE__ */ E.createElement(O.Provider, { value: D }, /* @__PURE__ */ E.createElement(ee, {
		style: v,
		className: (0, T.default)(_, r, x && "custom-" + se)
	}, b || /* @__PURE__ */ E.createElement(E.Fragment, null, x ? /* @__PURE__ */ E.createElement(E.Fragment, null, de, ue && /* @__PURE__ */ E.createElement(ye, { "data-browse": C }, y)) : /* @__PURE__ */ E.createElement(E.Fragment, null, ue && /* @__PURE__ */ E.createElement(ye, null, y), de), (c || p) && /* @__PURE__ */ E.createElement(le, {
		type: c ? "valid" : "invalid",
		tooltip: h
	}, g))));
});
xe.displayName = "FormFile", xe.Input = _e, xe.Label = ye, s();
var Se = [
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
], Ce = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.bsCustomPrefix, i = e.type, a = e.size, o = e.htmlSize, s = e.id, c = e.className, d = e.isValid, p = d === void 0 ? !1 : d, m = e.isInvalid, h = m === void 0 ? !1 : m, g = e.plaintext, _ = e.readOnly, v = e.custom, y = e.as, b = y === void 0 ? "input" : y, x = u(e, Se), S = (0, E.useContext)(O).controlId, C = v ? [r, "custom"] : [n, "form-control"], w = C[0], ee = C[1];
	n = f(w, ee);
	var te;
	if (g) {
		var ne;
		te = (ne = {}, ne[n + "-plaintext"] = !0, ne);
	} else if (i === "file") {
		var re;
		te = (re = {}, re[n + "-file"] = !0, re);
	} else if (i === "range") {
		var ie;
		te = (ie = {}, ie[n + "-range"] = !0, ie);
	} else if (b === "select" && v) {
		var ae;
		te = (ae = {}, ae[n + "-select"] = !0, ae[n + "-select-" + a] = a, ae);
	} else {
		var oe;
		te = (oe = {}, oe[n] = !0, oe[n + "-" + a] = a, oe);
	}
	return /* @__PURE__ */ E.createElement(b, l({}, x, {
		type: i,
		size: o,
		ref: t,
		readOnly: _,
		id: s || S,
		className: (0, T.default)(c, te, p && "is-valid", h && "is-invalid")
	}));
});
Ce.displayName = "FormControl";
var we = Object.assign(Ce, { Feedback: le }), Te = [
	"bsPrefix",
	"className",
	"children",
	"controlId",
	"as"
], Ee = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.children, a = e.controlId, o = e.as, s = o === void 0 ? "div" : o, c = u(e, Te);
	n = f(n, "form-group");
	var d = (0, E.useMemo)(function() {
		return { controlId: a };
	}, [a]);
	return /* @__PURE__ */ E.createElement(O.Provider, { value: d }, /* @__PURE__ */ E.createElement(s, l({}, c, {
		ref: t,
		className: (0, T.default)(r, n)
	}), i));
});
Ee.displayName = "FormGroup";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormLabel.js
var De = [
	"as",
	"bsPrefix",
	"column",
	"srOnly",
	"className",
	"htmlFor"
], Oe = {
	column: !1,
	srOnly: !1
}, ke = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.as, r = n === void 0 ? "label" : n, i = e.bsPrefix, a = e.column, o = e.srOnly, s = e.className, d = e.htmlFor, p = u(e, De), m = (0, E.useContext)(O).controlId;
	i = f(i, "form-label");
	var h = "col-form-label";
	typeof a == "string" && (h = h + " " + h + "-" + a);
	var g = (0, T.default)(s, i, o && "sr-only", a && h);
	return d ||= m, a ? /* @__PURE__ */ E.createElement(c, l({
		ref: t,
		as: "label",
		className: g,
		htmlFor: d
	}, p)) : /* @__PURE__ */ E.createElement(r, l({
		ref: t,
		className: g,
		htmlFor: d
	}, p));
});
ke.displayName = "FormLabel", ke.defaultProps = Oe;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/FormText.js
var Ae = [
	"bsPrefix",
	"className",
	"as",
	"muted"
], je = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.as, a = i === void 0 ? "small" : i, o = e.muted, s = u(e, Ae);
	return n = f(n, "form-text"), /* @__PURE__ */ E.createElement(a, l({}, s, {
		ref: t,
		className: (0, T.default)(r, n, o && "text-muted")
	}));
});
je.displayName = "FormText";
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Switch.js
var Me = /* @__PURE__ */ E.forwardRef(function(e, t) {
	return /* @__PURE__ */ E.createElement(he, l({}, e, {
		ref: t,
		type: "switch"
	}));
});
Me.displayName = "Switch", Me.Input = he.Input, Me.Label = he.Label;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Form.js
var Ne = [
	"bsPrefix",
	"inline",
	"className",
	"validated",
	"as"
], Pe = oe("form-row"), Fe = { inline: !1 }, Ie = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.inline, i = e.className, a = e.validated, o = e.as, s = o === void 0 ? "form" : o, c = u(e, Ne);
	return n = f(n, "form"), /* @__PURE__ */ E.createElement(s, l({}, c, {
		ref: t,
		className: (0, T.default)(i, a && "was-validated", r && n + "-inline")
	}));
});
Ie.displayName = "Form", Ie.defaultProps = Fe, Ie.Row = Pe, Ie.Group = Ee, Ie.Control = we, Ie.Check = he, Ie.File = xe, Ie.Switch = Me, Ie.Label = ke, Ie.Text = je;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Spinner.js
var Le = [
	"bsPrefix",
	"variant",
	"animation",
	"size",
	"children",
	"as",
	"className"
], Re = /* @__PURE__ */ E.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.animation, a = e.size, o = e.children, s = e.as, c = s === void 0 ? "div" : s, d = e.className, p = u(e, Le);
	n = f(n, "spinner");
	var m = n + "-" + i;
	return /* @__PURE__ */ E.createElement(c, l({ ref: t }, p, { className: (0, T.default)(d, m, a && m + "-" + a, r && "text-" + r) }), o);
});
Re.displayName = "Spinner";
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Cancel.js
var ze = (e) => /* @__PURE__ */ E.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z",
	fill: "currentColor"
})), Be = (e) => /* @__PURE__ */ E.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z",
	fill: "currentColor"
})), Ve = (e) => /* @__PURE__ */ E.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
	fill: "currentColor"
})), He = (e) => /* @__PURE__ */ E.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
	fill: "currentColor"
})), Ue = (e) => /* @__PURE__ */ E.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
	fill: "currentColor"
})), We = (e) => /* @__PURE__ */ E.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
	fill: "currentColor"
})), Ge = (e) => /* @__PURE__ */ E.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z",
	fill: "currentColor"
})), Ke = (e) => /* @__PURE__ */ E.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ E.createElement("path", {
	xmlns: "http://www.w3.org/2000/svg",
	d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
	fill: "currentColor"
}));
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/utils.js
function qe(e) {
	return typeof e == "string" || e instanceof String;
}
function Je(e) {
	var t;
	return typeof e == "object" && !!e && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function Ye(e, t) {
	return Array.isArray(t) ? Ye(e, (e, n) => t.includes(n)) : Object.entries(e).reduce((e, n) => {
		let [r, i] = n;
		return t(i, r) && (e[r] = i), e;
	}, {});
}
var k = {
	NONE: "NONE",
	LEFT: "LEFT",
	FORCE_LEFT: "FORCE_LEFT",
	RIGHT: "RIGHT",
	FORCE_RIGHT: "FORCE_RIGHT"
};
function Xe(e) {
	switch (e) {
		case k.LEFT: return k.FORCE_LEFT;
		case k.RIGHT: return k.FORCE_RIGHT;
		default: return e;
	}
}
function Ze(e) {
	return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function Qe(e, t) {
	if (t === e) return !0;
	let n = Array.isArray(t), r = Array.isArray(e), i;
	if (n && r) {
		if (t.length != e.length) return !1;
		for (i = 0; i < t.length; i++) if (!Qe(t[i], e[i])) return !1;
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
		for (i = 0; i < s.length; i++) if (!Qe(e[s[i]], t[s[i]])) return !1;
		return !0;
	} else if (t && e && typeof t == "function" && typeof e == "function") return t.toString() === e.toString();
	return !1;
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/action-details.js
var $e = class {
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
		return !this.removedCount || this.insertedCount ? k.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? k.RIGHT : k.LEFT;
	}
};
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/holder.js
function A(e, t) {
	return new A.InputMask(e, t);
}
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/factory.js
function et(e) {
	if (e == null) throw Error("mask property should be defined");
	return e instanceof RegExp ? A.MaskedRegExp : qe(e) ? A.MaskedPattern : e === Date ? A.MaskedDate : e === Number ? A.MaskedNumber : Array.isArray(e) || e === Array ? A.MaskedDynamic : A.Masked && e.prototype instanceof A.Masked ? e : A.Masked && e instanceof A.Masked ? e.constructor : e instanceof Function ? A.MaskedFunction : (console.warn("Mask not found for mask", e), A.Masked);
}
function tt(e) {
	if (!e) throw Error("Options in not defined");
	if (A.Masked) {
		if (e.prototype instanceof A.Masked) return { mask: e };
		let { mask: t = void 0, ...n } = e instanceof A.Masked ? { mask: e } : Je(e) && e.mask instanceof A.Masked ? e : {};
		if (t) {
			let e = t.mask;
			return {
				...Ye(t, (e, t) => !t.startsWith("_")),
				mask: t.constructor,
				_mask: e,
				...n
			};
		}
	}
	return Je(e) ? { ...e } : { mask: e };
}
function nt(e) {
	if (A.Masked && e instanceof A.Masked) return e;
	let t = tt(e), n = et(t.mask);
	if (!n) throw Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
	return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
A.createMask = nt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/mask-element.js
var rt = class {
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
A.MaskElement = rt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-mask-element.js
var it = 90, at = 89, ot = class extends rt {
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
		if (this._handlers.redo && (e.keyCode === it && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === at && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
		if (this._handlers.undo && e.keyCode === it && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
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
A.HTMLMaskElement = ot;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-input-mask-element.js
var st = class extends ot {
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
A.HTMLMaskElement = ot;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/html-contenteditable-mask-element.js
var ct = class extends ot {
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
A.HTMLContenteditableMaskElement = ct;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/controls/input-history.js
var lt = class e {
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
lt.MAX_LENGTH = 100, A.InputMask = class {
	constructor(e, t) {
		this.el = e instanceof rt ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new ct(e) : new st(e), this.masked = nt(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new lt(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
	}
	maskEquals(e) {
		return e == null || this.masked?.maskEquals(e);
	}
	get mask() {
		return this.masked.mask;
	}
	set mask(e) {
		if (this.maskEquals(e)) return;
		if (!(e instanceof A.Masked) && this.masked.constructor === et(e)) {
			this.masked.updateOptions({ mask: e });
			return;
		}
		let t = e instanceof A.Masked ? e : nt({ mask: e });
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
		this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, k.LEFT));
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
		let t = new $e({
			value: this.el.value,
			cursorPos: this.cursorPos,
			oldValue: this.displayValue,
			oldSelection: this._selection
		}), n = this.masked.rawInputValue, r = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
			input: !0,
			raw: !0
		}).offset, i = n === this.masked.rawInputValue ? t.removeDirection : k.NONE, a = this.masked.nearestInputPos(t.startChangePos + r, i);
		i !== k.NONE && (a = this.masked.nearestInputPos(a, k.NONE)), this.updateControl(a), delete this._inputEvent;
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
var j = class e {
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
A.ChangeDetails = j;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/core/continuous-tail-details.js
var ut = class {
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
}, dt = class e {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ut(this.extractInput(e, t), e);
	}
	appendTail(e) {
		return qe(e) && (e = new ut(String(e))), e.appendTo(this);
	}
	_appendCharRaw(e, t) {
		return e ? (this._value += e, new j({
			inserted: e,
			rawInserted: e
		})) : new j();
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
			a || (i = new j(), this.state = r, n && e && (n.state = e));
		}
		return i;
	}
	_appendPlaceholder() {
		return new j();
	}
	_appendEager() {
		return new j();
	}
	append(e, t, n) {
		if (!qe(e)) throw Error("value should be string");
		let r = qe(n) ? new ut(String(n)) : n;
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new j();
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
		return t === void 0 && (t = {}), j.normalize(this.prepare ? this.prepare(e, this, t) : e);
	}
	doPrepareChar(e, t) {
		return t === void 0 && (t = {}), j.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
	}
	doValidate(e) {
		return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
	}
	doCommit() {
		this.commit && this.commit(this.value, this);
	}
	splice(e, t, n, r, i) {
		n === void 0 && (n = ""), r === void 0 && (r = k.NONE), i === void 0 && (i = { input: !0 });
		let a = e + t, o = this.extractTail(a), s = this.eager === !0 || this.eager === "remove", c;
		s && (r = Xe(r), c = this.extractInput(0, a, { raw: !0 }));
		let l = e, u = new j();
		if (r !== k.NONE && (l = this.nearestInputPos(e, t > 1 && e !== 0 && !s ? k.NONE : r), u.tailShift = l - e), u.aggregate(this.remove(l)), s && r !== k.NONE && c === this.rawInputValue) if (r === k.FORCE_LEFT) {
			let e;
			for (; c === this.rawInputValue && (e = this.displayValue.length);) u.aggregate(new j({ tailShift: -1 })).aggregate(this.remove(e - 1));
		} else r === k.FORCE_RIGHT && o.unshift();
		return u.aggregate(this.append(n, i, o));
	}
	maskEquals(e) {
		return this.mask === e;
	}
	optionsIsChanged(e) {
		return !Qe(this, e);
	}
	typedValueEquals(t) {
		let n = this.typedValue;
		return t === n || e.EMPTY_VALUES.includes(t) && e.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
	}
	pad(e) {
		return new j();
	}
};
dt.DEFAULTS = { skipInvalid: !0 }, dt.EMPTY_VALUES = [
	void 0,
	null,
	""
], A.Masked = dt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pattern/chunk-tail-details.js
var ft = class e {
	constructor(e, t) {
		e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t;
	}
	toString() {
		return this.chunks.map(String).join("");
	}
	extend(t) {
		if (!String(t)) return;
		t = qe(t) ? new ut(String(t)) : t;
		let n = this.chunks[this.chunks.length - 1], r = n && (n.stop === t.stop || t.stop == null) && t.from === n.from + n.toString().length;
		if (t instanceof ut) r ? n.extend(t.toString()) : this.chunks.push(t);
		else if (t instanceof e) {
			if (t.stop == null) {
				let e;
				for (; t.chunks.length && t.chunks[0].stop == null;) e = t.chunks.shift(), e.from += t.from, this.extend(e);
			}
			t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
		}
	}
	appendTo(t) {
		if (!(t instanceof A.MaskedPattern)) return new ut(this.toString()).appendTo(t);
		let n = new j();
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
			let n = "chunks" in t ? new e() : new ut();
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
}, pt = class {
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
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, k.FORCE_LEFT), this.offset !== 0)) return !0;
		});
	}
	pushLeftBeforeInput() {
		return this._pushLeft(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, k.LEFT), !0;
		});
	}
	pushLeftBeforeRequired() {
		return this._pushLeft(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, k.LEFT), !0;
		});
	}
	pushRightBeforeFilled() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, k.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0;
		});
	}
	pushRightBeforeInput() {
		return this._pushRight(() => {
			if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, k.NONE), !0;
		});
	}
	pushRightBeforeRequired() {
		return this._pushRight(() => {
			if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, k.NONE), !0;
		});
	}
}, mt = class {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new j();
	}
	nearestInputPos(e, t) {
		t === void 0 && (t = k.NONE);
		let n = this._value.length;
		switch (t) {
			case k.LEFT:
			case k.FORCE_LEFT: return 0;
			case k.NONE:
			case k.RIGHT:
			case k.FORCE_RIGHT:
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
		if (t === void 0 && (t = {}), this.isFilled) return new j();
		let n = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !n) && !t.tail, i = new j({
			inserted: this.char,
			rawInserted: r ? this.char : ""
		});
		return this._value = this.char, this._isRawInput = r && (t.raw || t.input), i;
	}
	_appendEager() {
		return this._appendChar(this.char, { tail: !0 });
	}
	_appendPlaceholder() {
		let e = new j();
		return this.isFilled || (this._value = e.inserted = this.char), e;
	}
	extractTail() {
		return new ut("");
	}
	appendTail(e) {
		return qe(e) && (e = new ut(String(e))), e.appendTo(this);
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
}, ht = class {
	constructor(e) {
		let { parent: t, isOptional: n, placeholderChar: r, displayChar: i, lazy: a, eager: o, ...s } = e;
		this.masked = nt(s), Object.assign(this, {
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
		return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new j();
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
		if (t === void 0 && (t = {}), this.isFilled) return new j();
		let n = this.masked.state, r = this.masked._appendChar(e, this.currentMaskFlags(t));
		return r.inserted && this.doValidate(t) === !1 && (r = new j(), this.masked.state = n), !r.inserted && !this.isOptional && !this.lazy && !t.input && (r.inserted = this.placeholderChar), r.skip = !r.inserted && !this.isOptional, this.isFilled = !!r.inserted, r;
	}
	append(e, t, n) {
		return this.masked.append(e, this.currentMaskFlags(t), n);
	}
	_appendPlaceholder() {
		return this.isFilled || this.isOptional ? new j() : (this.isFilled = !0, new j({ inserted: this.placeholderChar }));
	}
	_appendEager() {
		return new j();
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
		t === void 0 && (t = k.NONE);
		let n = this.value.length, r = Math.min(Math.max(e, 0), n);
		switch (t) {
			case k.LEFT:
			case k.FORCE_LEFT: return this.isComplete ? r : 0;
			case k.RIGHT:
			case k.FORCE_RIGHT: return this.isComplete ? r : n;
			case k.NONE:
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
		return new j();
	}
};
ht.DEFAULT_DEFINITIONS = {
	0: /\d/,
	a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	"*": /./
}, A.MaskedRegExp = class extends dt {
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
var gt = class e extends dt {
	constructor(t) {
		super({
			...e.DEFAULTS,
			...t,
			definitions: Object.assign({}, ht.DEFAULT_DEFINITIONS, t?.definitions)
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
					let { expose: e, repeat: t, ...n } = tt(this.blocks[r]), i = {
						lazy: this.lazy,
						eager: this.eager,
						placeholderChar: this.placeholderChar,
						displayChar: this.displayChar,
						overwrite: this.overwrite,
						autofix: this.autofix,
						...n,
						repeat: t,
						parent: this
					}, o = t == null ? nt(i) : new A.RepeatBlock(i);
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
			let c = s ? new ht({
				isOptional: i,
				lazy: this.lazy,
				eager: this.eager,
				placeholderChar: this.placeholderChar,
				displayChar: this.displayChar,
				...tt(t[o]),
				parent: this
			}) : new mt({
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
		let e = new j(), t = this._mapPosToBlock(this.displayValue.length)?.index;
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
		let n = this._mapPosToBlock(this.displayValue.length), r = new j();
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
		let n = new ft();
		return e === t || this._forEachBlocksInRange(e, t, (e, t, r, i) => {
			let a = e.extractTail(r, i);
			a.stop = this._findStopBefore(t), a.from = this._blockStartPos(t), a instanceof ft && (a.blockIndex = t), n.extend(a);
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
		let t = new j();
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
		if (t === void 0 && (t = k.NONE), !this._blocks.length) return 0;
		let n = new pt(this, e);
		if (t === k.NONE) return n.pushRightBeforeInput() || (n.popState(), n.pushLeftBeforeInput()) ? n.pos : this.displayValue.length;
		if (t === k.LEFT || t === k.FORCE_LEFT) {
			if (t === k.LEFT) {
				if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
				n.popState();
			}
			if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === k.LEFT) {
				if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e || (n.popState(), n.ok && n.pos <= e)) return n.pos;
				n.popState();
			}
			return n.ok ? n.pos : t === k.FORCE_LEFT ? 0 : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : 0);
		}
		return t === k.RIGHT || t === k.FORCE_RIGHT ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === k.FORCE_RIGHT ? this.displayValue.length : (n.popState(), n.ok || (n.popState(), n.ok) ? n.pos : this.nearestInputPos(e, k.LEFT))) : e;
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
		let t = new j();
		return this._forEachBlocksInRange(0, this.displayValue.length, (n) => t.aggregate(n.pad(e))), t;
	}
};
gt.DEFAULTS = {
	...dt.DEFAULTS,
	lazy: !0,
	placeholderChar: "_"
}, gt.STOP_CHAR = "`", gt.ESCAPE_CHAR = "\\", gt.InputDefinition = ht, gt.FixedDefinition = mt, A.MaskedPattern = gt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/range.js
var _t = class extends gt {
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
		let t = new j();
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
A.MaskedRange = _t;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/date.js
var vt = "d{.}`m{.}`Y", yt = class e extends gt {
	static extractPatternOptions(e) {
		let { mask: t, pattern: n, ...r } = e;
		return {
			...r,
			mask: qe(t) ? t : n
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
			mask: qe(n) ? n : r,
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
yt.GET_DEFAULT_BLOCKS = () => ({
	d: {
		mask: _t,
		from: 1,
		to: 31,
		maxLength: 2
	},
	m: {
		mask: _t,
		from: 1,
		to: 12,
		maxLength: 2
	},
	Y: {
		mask: _t,
		from: 1900,
		to: 9999
	}
}), yt.DEFAULTS = {
	...gt.DEFAULTS,
	mask: Date,
	pattern: vt,
	format: (e, t) => e ? [
		String(e.getDate()).padStart(2, "0"),
		String(e.getMonth() + 1).padStart(2, "0"),
		e.getFullYear()
	].join(".") : "",
	parse: (e, t) => {
		let [n, r, i] = e.split(".").map(Number);
		return new Date(i, r - 1, n);
	}
}, A.MaskedDate = yt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/dynamic.js
var bt = class e extends dt {
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
			let { expose: t, ...n } = tt(e), r = nt({
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
		let r = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value, i = this.rawInputValue, a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : i, o = i.slice(a.length), s = this.currentMask, c = new j(), l = s?.state;
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
		let t = new j();
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
		let n = new j();
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
			return Qe(t, i) && t.maskEquals(r);
		}) : super.maskEquals(e);
	}
	typedValueEquals(e) {
		return !!this.currentMask?.typedValueEquals(e);
	}
};
bt.DEFAULTS = {
	...dt.DEFAULTS,
	dispatch: (e, t, n, r) => {
		if (!t.compiledMasks.length) return;
		let i = t.rawInputValue, a = t.compiledMasks.map((a, o) => {
			let s = t.currentMask === a, c = s ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, k.FORCE_LEFT);
			return a.rawInputValue === i ? s || a.remove(c) : (a.reset(), a.append(i, { raw: !0 })), a.append(e, t.currentMaskFlags(n)), a.appendTail(r), {
				index: o,
				weight: a.rawInputValue.length,
				totalInputPositions: a.totalInputPositions(0, Math.max(c, a.nearestInputPos(a.displayValue.length, k.FORCE_LEFT)))
			};
		});
		return a.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[a[0].index];
	}
}, A.MaskedDynamic = bt;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/enum.js
var xt = class e extends gt {
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
		let n = Math.min(this.nearestInputPos(0, k.FORCE_RIGHT), this.value.length), r = this.enum.filter((t) => this.matchValue(t, this.unmaskedValue + e, n));
		if (r.length) {
			r.length === 1 && this._forEachBlocksInRange(0, this.value.length, (e, n) => {
				let i = r[0][n];
				n >= this.value.length || i === e.value || (e.reset(), e._appendChar(i, t));
			});
			let e = super._appendCharRaw(r[0][this.value.length], t);
			return r.length === 1 && r[0].slice(this.unmaskedValue.length).split("").forEach((t) => e.aggregate(super._appendCharRaw(t))), e;
		}
		return new j({ skip: !this.isComplete });
	}
	extractTail(e, t) {
		return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new ut("", e);
	}
	remove(e, t) {
		if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), e === t) return new j();
		let n = Math.min(super.nearestInputPos(0, k.FORCE_RIGHT), this.value.length), r;
		for (r = e; r >= 0 && !(this.enum.filter((e) => this.matchValue(e, this.value.slice(n, r), n)).length > 1); --r);
		let i = super.remove(r, t);
		return i.tailShift += r - e, i;
	}
	get isComplete() {
		return this.enum.indexOf(this.value) >= 0;
	}
};
xt.DEFAULTS = {
	...gt.DEFAULTS,
	matchValue: (e, t, n) => e.indexOf(t, n) === n
}, A.MaskedEnum = xt, A.MaskedFunction = class extends dt {
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
var St, Ct = class e extends dt {
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
		let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""), t = (this.scale ? "(" + Ze(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
		this._numberRegExp = RegExp(e + "\\d*" + t), this._mapToRadixRegExp = RegExp("[" + this.mapToRadix.map(Ze).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Ze(this.thousandsSeparator), "g");
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
		s ? l = new j({
			inserted: this._value.slice(a.length),
			rawInserted: c ? "" : t,
			skip: c
		}) : (this._value = a, l = new j()), this._value = this._insertThousandsSeparators(this._value);
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
		return this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(n + r)), new j({ tailShift: (this._separatorsCountFromSlice(n) - i) * this.thousandsSeparator.length });
	}
	nearestInputPos(e, t) {
		if (!this.thousandsSeparator) return e;
		switch (t) {
			case k.NONE:
			case k.LEFT:
			case k.FORCE_LEFT: {
				let n = this._findSeparatorAround(e - 1);
				if (n >= 0) {
					let r = n + this.thousandsSeparator.length;
					if (e < r || this.value.length <= r || t === k.FORCE_LEFT) return n;
				}
				break;
			}
			case k.RIGHT:
			case k.FORCE_RIGHT: {
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
St = Ct, Ct.UNMASKED_RADIX = ".", Ct.EMPTY_VALUES = [...dt.EMPTY_VALUES, 0], Ct.DEFAULTS = {
	...dt.DEFAULTS,
	mask: Number,
	radix: ",",
	thousandsSeparator: "",
	mapToRadix: [St.UNMASKED_RADIX],
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
}, A.MaskedNumber = Ct;
//#endregion
//#region node_modules/.pnpm/imask@7.6.1/node_modules/imask/esm/masked/pipe.js
var wt = {
	MASKED: "value",
	UNMASKED: "unmaskedValue",
	TYPED: "typedValue"
};
function Tt(e, t, n) {
	t === void 0 && (t = wt.MASKED), n === void 0 && (n = wt.MASKED);
	let r = nt(e);
	return (e) => r.runIsolated((r) => (r[t] = e, r[n]));
}
function Et(e, t, n, r) {
	return Tt(t, n, r)(e);
}
A.PIPE_TYPE = wt, A.createPipe = Tt, A.pipe = Et, A.RepeatBlock = class extends gt {
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
		let { repeat: t, ...n } = tt(e);
		this._blockOpts = Object.assign({}, this._blockOpts, n);
		let r = nt(this._blockOpts);
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
		if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) return this._blocks.push(nt(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
	}
	_appendCharRaw(e, t) {
		t === void 0 && (t = {});
		let n = new j();
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
	globalThis.IMask = A;
} catch {}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/mixin.js
var Dt = {
	mask: w.default.oneOfType([
		w.default.array,
		w.default.func,
		w.default.string,
		w.default.instanceOf(RegExp),
		w.default.oneOf([
			Date,
			Number,
			A.Masked
		]),
		w.default.instanceOf(A.Masked)
	]),
	value: w.default.any,
	unmask: w.default.oneOfType([w.default.bool, w.default.oneOf(["typed"])]),
	prepare: w.default.func,
	prepareChar: w.default.func,
	validate: w.default.func,
	commit: w.default.func,
	overwrite: w.default.oneOfType([w.default.bool, w.default.oneOf(["shift"])]),
	eager: w.default.oneOfType([w.default.bool, w.default.oneOf(["append", "remove"])]),
	skipInvalid: w.default.bool,
	onAccept: w.default.func,
	onComplete: w.default.func,
	placeholderChar: w.default.string,
	displayChar: w.default.string,
	lazy: w.default.bool,
	definitions: w.default.object,
	blocks: w.default.object,
	enum: w.default.arrayOf(w.default.string),
	maxLength: w.default.number,
	from: w.default.number,
	to: w.default.number,
	pattern: w.default.string,
	format: w.default.func,
	parse: w.default.func,
	autofix: w.default.oneOfType([w.default.bool, w.default.oneOf(["pad"])]),
	radix: w.default.string,
	thousandsSeparator: w.default.string,
	mapToRadix: w.default.arrayOf(w.default.string),
	scale: w.default.number,
	normalizeZeros: w.default.bool,
	padFractionalZeros: w.default.bool,
	min: w.default.oneOfType([w.default.number, w.default.instanceOf(Date)]),
	max: w.default.oneOfType([w.default.number, w.default.instanceOf(Date)]),
	dispatch: w.default.func,
	inputRef: w.default.oneOfType([w.default.func, w.default.shape({ current: w.default.object })])
}, Ot = Object.keys(Dt).filter((e) => e !== "value"), kt = [
	"value",
	"unmask",
	"onAccept",
	"onComplete",
	"inputRef"
], At = Ot.filter((e) => kt.indexOf(e) < 0);
function jt(e) {
	var t;
	let n = (t = class extends E.Component {
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
			e === void 0 && (e = this._extractMaskOptionsFromProps(this.props)), this.maskRef = A(this.element, e).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
		}
		destroyMask() {
			this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
		}
		_extractMaskOptionsFromProps(e) {
			let { ...t } = e;
			return Object.keys(t).filter((e) => At.indexOf(e) < 0).forEach((e) => {
				delete t[e];
			}), t;
		}
		_extractNonMaskProps(e) {
			let { ...t } = e;
			return Ot.forEach((e) => {
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
			return E.createElement(e, {
				...this._extractNonMaskProps(this.props),
				inputRef: this._inputRef
			});
		}
	}, t.displayName = void 0, t.propTypes = void 0, t);
	return n.displayName = "IMask(" + (e.displayName || e.name || "Component") + ")", n.propTypes = Dt, E.forwardRef((e, t) => E.createElement(n, {
		...e,
		ref: t
	}));
}
//#endregion
//#region node_modules/.pnpm/react-imask@7.6.1_react@18.3.1/node_modules/react-imask/esm/input.js
var Mt = jt((e) => {
	let { inputRef: t, ...n } = e;
	return E.createElement("input", {
		...n,
		ref: t
	});
}), Nt = E.forwardRef((e, t) => E.createElement(Mt, {
	...e,
	ref: t
})), Pt = (e = {}) => Object.entries(e).reduce((e, [t, n]) => (n !== void 0 && (e[t] = n), e), {}), Ft = (...e) => (t) => {
	e.filter((e) => typeof e == "function").forEach((e) => e(t));
}, It = ({ defaultValue: e, value: t }) => {
	let [n, r] = (0, E.useState)(!!e || e === 0);
	return [!!t || t === 0 || n, (e) => r(!!e.target.value)];
}, Lt = (e, t) => {
	let [n, r] = (0, E.useState)(t || []), i = (e) => (r((t) => [...t, e]), e), a = () => i(y(`${e}-`)), o = (e) => {
		r((t) => t.filter((t) => t !== e));
	};
	return [n, (e) => {
		let [t, n] = (0, E.useState)(e);
		return (0, E.useEffect)(() => (e ? i(e) : t || n(a()), () => o(t)), [t, e]), t;
	}];
}, Rt = (e) => e, zt = /* @__PURE__ */ E.createContext({
	getControlProps: Rt,
	useSetIsControlGroupEffect: () => {},
	getLabelProps: Rt,
	getDescriptorProps: Rt,
	hasFormGroupProvider: !1
}), Bt = () => E.useContext(zt);
function Vt(e) {
	let [t, n] = (0, E.useState)(e);
	return [t, (e) => {
		(0, E.useEffect)(() => n(e), [e]);
	}];
}
function Ht({ children: e, controlId: t, isInvalid: n, isValid: r, size: i }) {
	let a = (0, E.useMemo)(() => t || y("form-field"), [t]), [o, s] = Lt(a), [c, l] = Lt(a), [u, d] = Vt(!1), f = {
		getControlProps: (0, E.useCallback)((e) => {
			let t = u ? c : void 0;
			return Pt({
				...e,
				"aria-describedby": (0, T.default)(e["aria-describedby"], o) || void 0,
				"aria-labelledby": (0, T.default)(e["aria-labelledby"], t) || void 0,
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
	return /* @__PURE__ */ E.createElement(zt.Provider, { value: f }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/constants.js
var Ut = {
	SMALL: "sm",
	LARGE: "lg"
}, Wt = {
	DEFAULT: "default",
	VALID: "valid",
	INVALID: "invalid",
	WARNING: "warning",
	CRITERIA_EMPTY: "criteria-empty",
	CRITERIA_VALID: "criteria-valid",
	CRITERIA_INVALID: "criteria-invalid"
}, Gt = {
	[Wt.DEFAULT]: null,
	[Wt.VALID]: Be,
	[Wt.INVALID]: He,
	[Wt.WARNING]: Ke,
	[Wt.CRITERIA_EMPTY]: Ge,
	[Wt.CRITERIA_VALID]: Ve,
	[Wt.CRITERIA_INVALID]: ze
}, Kt = ({ isInvalid: e, isValid: t }) => t ? Wt.VALID : e ? Wt.INVALID : Wt.DEFAULT;
function qt({ type: e, customIcon: t }) {
	if (t) return t;
	let n = Gt[e];
	return n ? /* @__PURE__ */ E.createElement(_, { src: n }) : null;
}
qt.propTypes = {
	type: w.default.oneOf(Object.values(Wt)),
	customIcon: w.default.node
}, qt.defaultProps = {
	type: void 0,
	customIcon: void 0
};
function Jt({ children: e, type: t, icon: n, muted: r, hasIcon: i, ...a }) {
	let o = (0, T.default)(a.className, "pgn__form-text", `pgn__form-text-${t}`, { "text-muted": r });
	return /* @__PURE__ */ E.createElement("div", {
		...a,
		className: o
	}, i && /* @__PURE__ */ E.createElement(qt, {
		customIcon: n,
		type: t
	}), /* @__PURE__ */ E.createElement("div", null, e));
}
Jt.propTypes = {
	children: w.default.node.isRequired,
	className: w.default.string,
	hasIcon: w.default.bool,
	type: w.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: w.default.node,
	muted: w.default.bool
}, Jt.defaultProps = {
	hasIcon: !0,
	type: "default",
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFeedback.js
function Yt({ children: e, ...t }) {
	let { getDescriptorProps: n, isInvalid: r, isValid: i } = Bt(), a = n(t), o = (0, T.default)("pgn__form-control-description", t.className), s = t.type || Kt({
		isInvalid: r,
		isValid: i
	});
	return /* @__PURE__ */ E.createElement(Jt, {
		...a,
		className: o,
		type: s
	}, e);
}
Yt.propTypes = {
	children: w.default.node.isRequired,
	className: w.default.string,
	hasIcon: w.default.bool,
	type: w.default.oneOf([
		"default",
		"valid",
		"invalid",
		"warning",
		"criteria-empty",
		"criteria-valid",
		"criteria-invalid"
	]),
	icon: w.default.node,
	muted: w.default.bool
}, Yt.defaultProps = {
	hasIcon: !0,
	type: void 0,
	icon: void 0,
	className: void 0,
	muted: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlFloatingLabel.js
function Xt({ children: e }) {
	let { controlId: t } = Bt();
	return /* @__PURE__ */ E.createElement("div", { className: "pgn__form-control-floating-label" }, /* @__PURE__ */ E.createElement("div", { className: "pgn__form-control-floating-label-content" }, /* @__PURE__ */ E.createElement("label", {
		className: "pgn__form-control-floating-label-text",
		htmlFor: t
	}, e)));
}
Xt.propTypes = { children: w.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecorator.js
function Zt({ children: e, location: t }) {
	return /* @__PURE__ */ E.createElement("div", { className: `pgn__form-control-decorator pgn__form-control-decorator-${t}` }, e);
}
Zt.propTypes = {
	children: w.default.node.isRequired,
	location: w.default.oneOf(["leading", "trailing"])
}, Zt.defaultProps = { location: "leading" };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControlDecoratorGroup.js
function Qt({ children: e, leadingElement: t, trailingElement: n, floatingLabel: r, className: i, ...a }) {
	let o = Bt(a), s = a.size || o.size;
	return /* @__PURE__ */ E.createElement("div", {
		className: (0, T.default)("pgn__form-control-decorator-group", {
			"has-prepended-node": !!t,
			"has-appended-node": !!n,
			"has-leading-element": !!t,
			"has-trailing-element": !!n,
			"has-floating-label": !!r,
			"pgn__form-control-decorator-group-lg": s === Ut.LARGE,
			"pgn__form-control-decorator-group-sm": s === Ut.SMALL
		}, i),
		...a
	}, e, t && /* @__PURE__ */ E.createElement(Zt, { location: "leading" }, t), n && /* @__PURE__ */ E.createElement(Zt, { location: "trailing" }, n), r && /* @__PURE__ */ E.createElement(Xt, null, r));
}
Qt.propTypes = {
	children: w.default.node.isRequired,
	leadingElement: w.default.node,
	trailingElement: w.default.node,
	floatingLabel: w.default.node,
	className: w.default.string,
	size: w.default.oneOf([Ut.SMALL, Ut.LARGE])
}, Qt.defaultProps = {
	leadingElement: void 0,
	trailingElement: void 0,
	floatingLabel: void 0,
	className: void 0,
	size: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormControl.js
var $t = /* @__PURE__ */ E.forwardRef(({ as: e, className: t, controlClassName: n, leadingElement: r, trailingElement: i, floatingLabel: a, autoResize: o, onChange: s, inputMask: c, ...l }, u) => {
	let { isInvalid: d, isValid: f, getControlProps: p, ...m } = Bt(), h = E.useRef(), g = u || h, _ = l.size || m.size, [v, y] = It({
		defaultValue: l.defaultValue,
		value: l.value
	}), b = (0, E.useCallback)(() => {
		e === "textarea" && o && (!g.current.initialHeight && !g.current.offsets && (g.current.initialHeight = g.current.offsetHeight, g.current.offsets = g.current.offsetHeight - g.current.clientHeight), g.current.style.height = `${g.current.initialHeight}px`, g.current.style.height = `${g.current.scrollHeight + g.current.offsets}px`);
	}, [
		e,
		o,
		g
	]);
	(0, E.useEffect)(() => {
		b();
	}, [b]);
	let x = p({
		...l,
		onBlur: Ft(y, l.onBlur)
	}), S = (e) => {
		b(), s && s(e);
	};
	return /* @__PURE__ */ E.createElement(Qt, {
		size: _,
		leadingElement: r,
		trailingElement: i,
		floatingLabel: a,
		className: t
	}, /* @__PURE__ */ E.createElement(we, {
		as: c ? Nt : e,
		ref: g,
		size: _,
		isInvalid: d,
		isValid: f,
		className: (0, T.default)(n, { "has-value": v }),
		onChange: S,
		mask: c,
		...x
	}));
});
$t.Feedback = Yt, $t.Description = Yt, $t.propTypes = {
	className: w.default.string,
	as: w.default.elementType,
	onChange: w.default.func,
	defaultValue: w.default.oneOfType([w.default.string, w.default.number]),
	value: w.default.oneOfType([w.default.string, w.default.number]),
	id: w.default.string,
	controlClassName: w.default.string,
	size: w.default.oneOf(["sm", "lg"]),
	leadingElement: w.default.node,
	trailingElement: w.default.node,
	floatingLabel: w.default.node,
	plaintext: w.default.bool,
	isValid: w.default.bool,
	isInvalid: w.default.bool,
	autoResize: w.default.bool,
	inputMask: w.default.string
}, $t.defaultProps = {
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
function en({ children: e, isInline: t = !1, ...n }) {
	let { size: r, isControlGroup: i, getLabelProps: a } = Bt(), o = (0, T.default)("pgn__form-label", {
		"pgn__form-label-inline": t,
		"pgn__form-label-lg": r === Ut.LARGE,
		"pgn__form-label-sm": r === Ut.SMALL
	}, n.className), s = a({
		...n,
		className: o
	}), c = i ? "p" : "label";
	return /* @__PURE__ */ E.createElement(c, s, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormGroup.js
function tn({ children: e, controlId: t, isInvalid: n = !1, isValid: r = !1, size: i, as: a, ...o }) {
	return /* @__PURE__ */ E.createElement(a ?? "div", {
		...o,
		className: (0, T.default)("pgn__form-group", o.className)
	}, /* @__PURE__ */ E.createElement(Ht, {
		controlId: t,
		isInvalid: n,
		isValid: r,
		size: i
	}, e));
}
var nn = /* @__PURE__ */ E.createContext({
	getRadioControlProps: (e) => e,
	hasRadioSetProvider: !1
}), rn = () => (0, E.useContext)(nn);
function an({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && a !== void 0, c = {
		name: t,
		value: a,
		defaultValue: o,
		getRadioControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Ft(n, e.onBlur) : n,
			onFocus: e.onFocus ? Ft(r, e.onFocus) : r,
			onChange: e.onChange ? Ft(i, e.onChange) : i,
			checked: s ? a === e.value : void 0,
			defaultChecked: s ? void 0 : o === e.value
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasRadioSetProvider: !0
	};
	return /* @__PURE__ */ E.createElement(nn.Provider, { value: c }, e);
}
an.propTypes = {
	children: w.default.node.isRequired,
	name: w.default.string.isRequired,
	onBlur: w.default.func,
	onFocus: w.default.func,
	onChange: w.default.func,
	value: w.default.string,
	defaultValue: w.default.string
}, an.defaultProps = {
	onBlur: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadio.js
var on = /* @__PURE__ */ E.forwardRef((e, t) => {
	let { getControlProps: n } = Bt(), { getRadioControlProps: r, hasRadioSetProvider: i } = rn(), a = n({
		...e,
		className: (0, T.default)("pgn__form-radio-input", e.className)
	});
	return i && (a = r(a)), /* @__PURE__ */ E.createElement("input", {
		...a,
		type: "radio",
		ref: t
	});
});
on.propTypes = { className: w.default.string }, on.defaultProps = { className: void 0 };
var sn = /* @__PURE__ */ E.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, ...s }, c) => /* @__PURE__ */ E.createElement(Ht, {
	controlId: s.id,
	isInvalid: a,
	isValid: o
}, /* @__PURE__ */ E.createElement("div", { className: (0, T.default)("pgn__form-radio", t, {
	"pgn__form-control-valid": o,
	"pgn__form-control-invalid": a,
	"pgn__form-control-disabled": s.disabled
}) }, /* @__PURE__ */ E.createElement(on, {
	ref: c,
	className: n,
	...s
}), /* @__PURE__ */ E.createElement("div", null, /* @__PURE__ */ E.createElement(en, { className: r }, e), i && /* @__PURE__ */ E.createElement(Yt, { hasIcon: !1 }, i)))));
sn.propTypes = {
	id: w.default.string,
	children: w.default.node.isRequired,
	className: w.default.string,
	controlClassName: w.default.string,
	labelClassName: w.default.string,
	description: w.default.node,
	isInvalid: w.default.bool,
	isValid: w.default.bool,
	disabled: w.default.bool
}, sn.defaultProps = {
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
function cn({ as: e, className: t, isInline: n, children: r, ...i }) {
	return /* @__PURE__ */ E.createElement(e, {
		className: (0, T.default)(t, {
			"pgn__form-control-set": !n,
			"pgn__form-control-set-inline": n
		}),
		...i
	}, r);
}
cn.propTypes = {
	as: w.default.elementType,
	className: w.default.string,
	isInline: w.default.bool,
	children: w.default.node
}, cn.defaultProps = {
	as: "div",
	className: void 0,
	isInline: !1,
	children: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormRadioSet.js
function ln({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Bt();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ E.createElement(an, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ E.createElement(cn, {
		role: "radiogroup",
		isInline: i,
		...d
	}, e));
}
ln.propTypes = {
	children: w.default.node.isRequired,
	className: w.default.string,
	name: w.default.string.isRequired,
	value: w.default.string,
	defaultValue: w.default.string,
	isInline: w.default.bool,
	onChange: w.default.func,
	onFocus: w.default.func,
	onBlur: w.default.func
}, ln.defaultProps = {
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
var un, dn = new Uint8Array(16);
function fn() {
	if (!un && (un = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !un)) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	return un(dn);
}
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var pn = [];
for (let e = 0; e < 256; ++e) pn.push((e + 256).toString(16).slice(1));
function mn(e, t = 0) {
	return pn[e[t + 0]] + pn[e[t + 1]] + pn[e[t + 2]] + pn[e[t + 3]] + "-" + pn[e[t + 4]] + pn[e[t + 5]] + "-" + pn[e[t + 6]] + pn[e[t + 7]] + "-" + pn[e[t + 8]] + pn[e[t + 9]] + "-" + pn[e[t + 10]] + pn[e[t + 11]] + pn[e[t + 12]] + pn[e[t + 13]] + pn[e[t + 14]] + pn[e[t + 15]];
}
var hn = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function gn(e, t, n) {
	if (hn.randomUUID && !t && !e) return hn.randomUUID();
	e ||= {};
	let r = e.random || (e.rng || fn)();
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		n ||= 0;
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return mn(r);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/utils/propTypes/utils.js
var _n = (e, t, n) => ((r, i, a, ...o) => t(r) && r[i] === void 0 ? /* @__PURE__ */ Error(`${a}: ${i} is required when ${n}`) : e(r, i, a, ...o)), vn = (e, t) => t.every((t) => e[t] !== void 0), yn = (e, t) => _n(e, (e) => Array.isArray(t) ? vn(e, t) : e[t] === !0, `${t} ${Array.isArray(t) ? "are defined" : "is truthy"}`), bn = /* @__PURE__ */ E.forwardRef(({ className: e, screenReaderText: t, ...n }, r) => {
	let i = {
		...n,
		className: (0, T.default)("pgn__spinner", e),
		role: t ? "status" : void 0
	};
	return /* @__PURE__ */ E.createElement(Re, {
		...i,
		ref: r
	}, t && /* @__PURE__ */ E.createElement("span", { className: "sr-only" }, t));
});
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/hooks/useArrowKeyNavigationHook.js
function xn({ event: e, currentIndex: t, activeElement: n }) {
	t !== -1 && (n.click(), e.preventDefault());
}
function Sn({ event: e, currentIndex: t, availableElements: n }) {
	t === -1 && n[0].focus();
	let r;
	(e.key === "ArrowDown" || e.key === "ArrowRight") && (r = n[(t + 1) % n.length]), (e.key === "ArrowUp" || e.key === "ArrowLeft") && (r = t - 1 < 0 ? n[t - 1 + n.length] : n[t - 1]), e.key === "End" && (r = n[n.length - 1]), e.key === "Home" && ([r] = n), r?.focus(), e.preventDefault();
}
function Cn({ event: e, ignoredKeys: t = [], parentNode: n, selectors: r = "a,button,input" }) {
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
	i === "Enter" && a && xn({
		event: e,
		currentIndex: s,
		activeElement: a
	}), Sn({
		event: e,
		currentIndex: s,
		availableElements: o
	});
}
function wn(e = {}) {
	let { selectors: t, ignoredKeys: n } = e, r = (0, E.useRef)();
	return (0, E.useEffect)(() => {
		let e = (e) => {
			Cn({
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
var Tn = b({
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
}), En = /* @__PURE__ */ (0, E.forwardRef)(({ children: e, arrowKeyNavigationSelector: t, ignoredArrowKeysNames: n, screenReaderText: r, value: i, isLoading: s, isValueRequired: c, valueRequiredErrorMessageText: l, isSelectionRequired: u, selectionRequiredErrorMessageText: d, hasCustomError: f, customErrorMessageText: p, onChange: m, helpMessage: h, ...g }, v) => {
	let y = o(), b = (0, E.useRef)(), x = wn({
		selectors: t,
		ignoredKeys: n
	}), [S, C] = (0, E.useState)(!1), [w, T] = (0, E.useState)(!1), [ee, te] = (0, E.useState)(!1), [ne, re] = (0, E.useState)(!1), [ie, ae] = (0, E.useState)(i?.userProvidedText || ""), [oe, se] = (0, E.useState)([]), [ce, D] = (0, E.useState)(null), [le, O] = (0, E.useState)(!0), [ue, de] = (0, E.useState)(""), fe = (e) => {
		D(e);
	}, pe = () => {
		se([]), C(!1), D(null);
	}, me = (e, t) => {
		let n = e.currentTarget.getAttribute("data-value"), r = e.currentTarget.id;
		te(!0), re(!0), ae(n), m && (!i || i && n !== i.selectionValue) && m({
			userProvidedText: n,
			selectionValue: n,
			selectionId: r
		}), pe(), t && t(e);
	};
	function he(t = "") {
		let n = E.Children.map(e, (e) => {
			let { children: t, onClick: n, ...r } = e.props, i = e.props.id ?? gn();
			return /* @__PURE__ */ E.cloneElement(e, {
				...r,
				children: t,
				"data-value": t,
				onClick: (e) => me(e, n),
				id: i,
				onFocus: () => fe(i)
			});
		});
		return t.length > 0 && (n = n.filter((e) => e.props.children.toLowerCase().includes(t.toLowerCase()))), n;
	}
	let ge = () => {
		se(he(ie)), O(!0), de(""), C(!0);
	}, _e = () => {
		S ? pe() : ge();
	}, ve = /* @__PURE__ */ E.createElement(a, {
		className: "pgn__form-autosuggest__icon-button",
		"data-testid": "autosuggest-iconbutton",
		tabIndex: "-1",
		src: S ? We : Ue,
		iconAs: _,
		size: "sm",
		variant: "secondary",
		alt: S ? y.formatMessage(Tn.iconButtonClosed) : y.formatMessage(Tn.iconButtonOpened),
		onClick: _e
	}), ye = () => {
		T(!0);
	}, be = () => {
		if (f) {
			O(!1), de(p);
			return;
		}
		if (c && !ee) {
			O(!1), de(l);
			return;
		}
		if (ee && u && !ne) {
			O(!1), de(d);
			return;
		}
		O(!0), de("");
	};
	(0, E.useImperativeHandle)(v, () => ({ updateErrorStateAndErrorMessage: be }));
	let xe = () => {
		T(!1), pe(), be();
	}, Se = (e) => {
		if (w) {
			if (e.key === "Escape") {
				e.preventDefault(), b && b.current.focus(), pe();
				return;
			}
			e.key === "Tab" && xe();
		}
	}, Ce = (e) => {
		x.current && !x.current.contains(e.target) && w && xe();
	};
	(0, E.useEffect)(() => (document.addEventListener("keydown", Se), document.addEventListener("click", Ce, !0), () => {
		document.removeEventListener("click", Ce, !0), document.removeEventListener("keydown", Se);
	})), (0, E.useEffect)(() => {
		ae(i ? i.userProvidedText ?? "" : ""), te(!!i && !!i.userProvidedText), re(!!i && !!i.selectionValue);
	}, [i]);
	let we = () => {
		ge();
	}, Te = (e) => {
		let t = e.target.value;
		if (!t.length) {
			ae(""), te(!1), re(!1), se([]), pe(), m && m({
				userProvidedText: "",
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		te(!0);
		let n = he(t);
		se(n);
		let r = n.find((e) => e.props.children.toLowerCase() === t.toLowerCase());
		if (!r) {
			re(!1), ae(t), m && m({
				userProvidedText: t,
				selectionValue: "",
				selectionId: ""
			});
			return;
		}
		re(!0), ae(r.props.children), m && m({
			userProvidedText: r.props.children,
			selectionValue: r.props.children,
			selectionId: r.props.id
		});
	}, { getControlProps: Ee } = Bt(), De = Ee(g);
	return /* @__PURE__ */ E.createElement("div", {
		className: "pgn__form-autosuggest__wrapper",
		ref: x,
		onFocus: ye
	}, /* @__PURE__ */ E.createElement("div", {
		"aria-live": "assertive",
		className: "sr-only",
		"data-testid": "autosuggest-screen-reader-options-count"
	}, `${oe.length} options found`), /* @__PURE__ */ E.createElement(Ht, {
		controlId: De.id,
		isInvalid: !le
	}, /* @__PURE__ */ E.createElement($t, {
		ref: b,
		"aria-expanded": (oe.length > 0).toString(),
		"aria-owns": "pgn__form-autosuggest__dropdown-box",
		role: "combobox",
		"aria-autocomplete": "list",
		autoComplete: "off",
		value: ie,
		"aria-invalid": ue,
		"aria-activedescendant": ce,
		onChange: Te,
		onClick: we,
		trailingElement: ve,
		"data-testid": "autosuggest-textbox-input",
		...De
	}), h && le && /* @__PURE__ */ E.createElement(Yt, { type: "default" }, h), !le && /* @__PURE__ */ E.createElement(Yt, {
		type: "invalid",
		"feedback-for": De.name
	}, ue)), /* @__PURE__ */ E.createElement("ul", {
		id: "pgn__form-autosuggest__dropdown-box",
		className: "pgn__form-autosuggest__dropdown",
		role: "listbox"
	}, s ? /* @__PURE__ */ E.createElement("div", { className: "pgn__form-autosuggest__dropdown-loading" }, /* @__PURE__ */ E.createElement(bn, {
		animation: "border",
		variant: "dark",
		screenReaderText: r,
		"data-testid": "autosuggest-loading-spinner"
	})) : oe.length > 0 && oe));
});
En.defaultProps = {
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
}, En.propTypes = {
	arrowKeyNavigationSelector: w.default.string,
	ignoredArrowKeysNames: w.default.arrayOf(w.default.string),
	isLoading: w.default.bool,
	className: w.default.string,
	floatingLabel: w.default.string,
	onChange: w.default.func,
	helpMessage: w.default.string,
	placeholder: w.default.string,
	value: w.default.shape({
		userProvidedText: w.default.string,
		selectionValue: w.default.string,
		selectionId: w.default.string
	}),
	isValueRequired: w.default.bool,
	valueRequiredErrorMessageText: yn(w.default.string, "isValueRequired"),
	isSelectionRequired: w.default.bool,
	selectionRequiredErrorMessageText: yn(w.default.string, "isSelectionRequired"),
	hasCustomError: w.default.bool,
	customErrorMessageText: yn(w.default.string, "hasCustomError"),
	name: w.default.string,
	readOnly: w.default.bool,
	children: w.default.node,
	screenReaderText: w.default.string
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Menu/MenuItem.js
function Dn({ as: e = "button", children: t, defaultSelected: n = !1, iconAfter: r, iconBefore: i, ...a }) {
	let o = (0, T.default)(a.className, "pgn__menu-item");
	return /* @__PURE__ */ (0, E.createElement)(e, {
		...a,
		className: o
	}, /* @__PURE__ */ E.createElement(E.Fragment, null, i && /* @__PURE__ */ E.createElement(_, {
		className: "btn-icon-before",
		src: i
	}), /* @__PURE__ */ E.createElement("span", { className: "pgn__menu-item-text" }, t), /* @__PURE__ */ E.createElement("span", { className: "pgn__menu-item-content-spacer" }), r && /* @__PURE__ */ E.createElement(_, {
		className: "btn-icon-after",
		src: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormAutosuggestOption.js
function On({ children: e, className: t, onClick: n, ...r }) {
	return /* @__PURE__ */ E.createElement(Dn, {
		as: "li",
		"data-testid": "autosuggest-optionitem",
		role: "option",
		tabIndex: "-1",
		onClick: n,
		className: (0, T.default)(t, "dropdown-item"),
		...r
	}, e);
}
On.defaultProps = {
	className: null,
	children: null,
	onClick: null
}, On.propTypes = {
	className: w.default.string,
	children: w.default.string,
	onClick: w.default.func
};
var kn = /* @__PURE__ */ E.createContext({
	getCheckboxControlProps: (e) => e,
	hasCheckboxSetProvider: !1
}), An = () => (0, E.useContext)(kn);
function jn({ children: e, name: t, onBlur: n, onFocus: r, onChange: i, value: a, defaultValue: o }) {
	let s = !o && Array.isArray(a), c = {
		name: t,
		value: a,
		defaultValue: o,
		getCheckboxControlProps: (e) => ({
			...e,
			name: t,
			onBlur: e.onBlur ? Ft(n, e.onBlur) : n,
			onFocus: e.onFocus ? Ft(r, e.onFocus) : r,
			onChange: e.onChange ? Ft(i, e.onChange) : i,
			checked: s ? a.includes(e.value) : void 0,
			defaultChecked: s ? void 0 : o && o.includes(e.value)
		}),
		onBlur: n,
		onFocus: r,
		onChange: i,
		hasCheckboxSetProvider: !0
	};
	return /* @__PURE__ */ E.createElement(kn.Provider, { value: c }, e);
}
jn.propTypes = {
	children: w.default.node.isRequired,
	name: w.default.string,
	onBlur: w.default.func,
	onFocus: w.default.func,
	onChange: w.default.func,
	value: w.default.arrayOf(w.default.string),
	defaultValue: w.default.arrayOf(w.default.string)
}, jn.defaultProps = {
	onBlur: void 0,
	name: void 0,
	onFocus: void 0,
	onChange: void 0,
	value: void 0,
	defaultValue: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckbox.js
var Mn = /* @__PURE__ */ E.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let { getCheckboxControlProps: r, hasCheckboxSetProvider: i } = An(), a = E.useRef(), o = n || a, { getControlProps: s } = Bt(), c = s({
		...t,
		className: (0, T.default)("pgn__form-checkbox-input", t.className)
	});
	return i && (c = r(c)), E.useEffect(() => {
		o.current && (o.current.indeterminate = e);
	}, [o, e]), /* @__PURE__ */ E.createElement("input", {
		type: "checkbox",
		...c,
		ref: o
	});
});
Mn.propTypes = {
	isIndeterminate: w.default.bool,
	className: w.default.string
}, Mn.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Nn = /* @__PURE__ */ E.forwardRef(({ children: e, className: t, controlClassName: n, labelClassName: r, description: i, isInvalid: a, isValid: o, controlAs: s, floatLabelLeft: c, ...l }, u) => {
	let { hasCheckboxSetProvider: d } = An(), { hasFormGroupProvider: f, useSetIsControlGroupEffect: p, getControlProps: m } = Bt();
	p(!0);
	let h = f && !d ? {
		...m({}),
		role: "group"
	} : {}, g = /* @__PURE__ */ E.createElement(s, {
		...l,
		className: n,
		ref: u
	});
	return /* @__PURE__ */ E.createElement(Ht, {
		controlId: l.id,
		isInvalid: a,
		isValid: o
	}, /* @__PURE__ */ E.createElement("div", {
		className: (0, T.default)("pgn__form-checkbox", t, {
			"pgn__form-control-valid": o,
			"pgn__form-control-invalid": a,
			"pgn__form-control-disabled": l.disabled,
			"pgn__form-control-label-left": !!c
		}),
		...h
	}, g, /* @__PURE__ */ E.createElement("div", null, /* @__PURE__ */ E.createElement(en, { className: r }, e), i && /* @__PURE__ */ E.createElement(Yt, { hasIcon: !1 }, i))));
});
Nn.propTypes = {
	id: w.default.string,
	children: w.default.node.isRequired,
	className: w.default.string,
	controlClassName: w.default.string,
	labelClassName: w.default.string,
	description: w.default.node,
	isInvalid: w.default.bool,
	isValid: w.default.bool,
	controlAs: w.default.elementType,
	floatLabelLeft: w.default.bool,
	disabled: w.default.bool
}, Nn.defaultProps = {
	id: void 0,
	className: void 0,
	controlClassName: void 0,
	labelClassName: void 0,
	description: void 0,
	isInvalid: !1,
	isValid: !1,
	controlAs: Mn,
	floatLabelLeft: !1,
	disabled: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormSwitch.js
var Pn = /* @__PURE__ */ E.forwardRef(({ isIndeterminate: e, ...t }, n) => {
	let r = E.useRef(), i = n || r, { getControlProps: a } = Bt(), o = a({
		...t,
		className: (0, T.default)("pgn__form-switch-input", t.className)
	});
	return E.useEffect(() => {
		i.current && (i.current.indeterminate = e);
	}, [i, e]), /* @__PURE__ */ E.createElement("input", {
		type: "checkbox",
		...o,
		ref: i
	});
});
Pn.propTypes = {
	isIndeterminate: w.default.bool,
	className: w.default.string
}, Pn.defaultProps = {
	isIndeterminate: !1,
	className: void 0
};
var Fn = /* @__PURE__ */ E.forwardRef(({ children: e, className: t, helperText: n, ...r }, i) => /* @__PURE__ */ E.createElement("div", { className: "d-inline-flex flex-column" }, /* @__PURE__ */ E.createElement(Nn, {
	className: (0, T.default)("pgn__form-switch", t),
	...r,
	role: "switch",
	ref: i,
	controlAs: Pn,
	isValid: null,
	isInvalid: null,
	description: null
}, e), n && /* @__PURE__ */ E.createElement("div", { className: "pgn__form-switch-helper-text" }, n)));
Fn.propTypes = {
	children: w.default.node.isRequired,
	className: w.default.string,
	labelClassName: w.default.string,
	helperText: w.default.node,
	floatLabelLeft: w.default.bool
}, Fn.defaultProps = {
	className: void 0,
	labelClassName: void 0,
	helperText: void 0,
	floatLabelLeft: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Form/FormCheckboxSet.js
function In({ children: e, name: t, value: n, defaultValue: r, isInline: i, onChange: a, onFocus: o, onBlur: s, ...c }) {
	let { getControlProps: l, useSetIsControlGroupEffect: u } = Bt();
	u(!0);
	let d = l(c);
	return /* @__PURE__ */ E.createElement(jn, {
		name: t,
		value: n,
		defaultValue: r,
		onFocus: o,
		onBlur: s,
		onChange: a
	}, /* @__PURE__ */ E.createElement(cn, {
		role: "group",
		isInline: i,
		...d
	}, e));
}
In.propTypes = {
	children: w.default.node.isRequired,
	className: w.default.string,
	name: w.default.string.isRequired,
	value: w.default.arrayOf(w.default.string),
	defaultValue: w.default.arrayOf(w.default.string),
	isInline: w.default.bool,
	onChange: w.default.func,
	onFocus: w.default.func,
	onBlur: w.default.func
}, In.defaultProps = {
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
var Ln = In, M = Ie;
M.Control = $t, M.Radio = sn, M.RadioSet = ln, M.Autosuggest = En, M.AutosuggestOption = On, M.Checkbox = Nn, M.CheckboxSet = In, M.Switch = Fn, M.SwitchSet = Ln, M.Label = en, M.Group = tn, M.Text = Jt;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Sticky/index.js
var Rn = /* @__PURE__ */ t(e(), 1), zn = ["top", "bottom"], Bn = /* @__PURE__ */ E.forwardRef(({ position: e, children: t, offset: n, className: r, ...i }, a) => {
	let [o, s] = (0, E.useState)(!1), c = E.useRef(), l = a || c;
	return (0, E.useLayoutEffect)(() => {
		if (l.current) {
			let t = l.current, n = window.getComputedStyle(t)[e || "top"], r = 1 + (parseInt(n, 10) || 0), i = new IntersectionObserver(([e]) => s(e.intersectionRatio < 1), {
				threshold: [1],
				rootMargin: e === "bottom" ? `0px 0px -${r}px 0px` : `-${r}px 0px 0px 0px`
			});
			return i.observe(t), () => {
				i.unobserve(t);
			};
		}
	}, [e, l]), /* @__PURE__ */ E.createElement("div", {
		className: (0, T.default)("pgn__sticky", `pgn__sticky-${e || "top"}`, n ? `pgn__sticky-offset--${n}` : "", { "pgn__sticky-shadow": o }, r),
		ref: l,
		...i
	}, t);
});
Bn.propTypes = {
	children: w.default.node.isRequired,
	position: w.default.oneOf(zn),
	offset: w.default.oneOfType([w.default.number, w.default.string]),
	className: w.default.string
}, Bn.defaultProps = {
	position: "top",
	offset: void 0,
	className: void 0
};
//#endregion
//#region node_modules/.pnpm/deepmerge@2.2.1/node_modules/deepmerge/dist/es.js
var Vn = function(e) {
	return Hn(e) && !Un(e);
};
function Hn(e) {
	return !!e && typeof e == "object";
}
function Un(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Gn(e);
}
var Wn = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Gn(e) {
	return e.$$typeof === Wn;
}
function Kn(e) {
	return Array.isArray(e) ? [] : {};
}
function qn(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? Xn(Kn(e), e, t) : e;
}
function Jn(e, t, n) {
	return e.concat(t).map(function(e) {
		return qn(e, n);
	});
}
function Yn(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = qn(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = qn(t[i], n) : r[i] = Xn(e[i], t[i], n);
	}), r;
}
function Xn(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || Jn, n.isMergeableObject = n.isMergeableObject || Vn;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : Yn(e, t, n) : qn(t, n);
}
Xn.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return Xn(e, n, t);
	}, {});
};
var Zn = Xn, Qn = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, $n = typeof self == "object" && self && self.Object === Object && self, er = Qn || $n || Function("return this")(), tr = er.Symbol, nr = Object.prototype, rr = nr.hasOwnProperty, ir = nr.toString, ar = tr ? tr.toStringTag : void 0;
function or(e) {
	var t = rr.call(e, ar), n = e[ar];
	try {
		e[ar] = void 0;
		var r = !0;
	} catch {}
	var i = ir.call(e);
	return r && (t ? e[ar] = n : delete e[ar]), i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var sr = Object.prototype.toString;
function cr(e) {
	return sr.call(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var lr = "[object Null]", ur = "[object Undefined]", dr = tr ? tr.toStringTag : void 0;
function fr(e) {
	return e == null ? e === void 0 ? ur : lr : dr && dr in Object(e) ? or(e) : cr(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function pr(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var mr = pr(Object.getPrototypeOf, Object);
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function hr(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isPlainObject.js
var gr = "[object Object]", _r = Function.prototype, vr = Object.prototype, yr = _r.toString, br = vr.hasOwnProperty, xr = yr.call(Object);
function Sr(e) {
	if (!hr(e) || fr(e) != gr) return !1;
	var t = mr(e);
	if (t === null) return !0;
	var n = br.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && yr.call(n) == xr;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function Cr() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function wr(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function Tr(e, t) {
	for (var n = e.length; n--;) if (wr(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var Er = Array.prototype.splice;
function Dr(e) {
	var t = this.__data__, n = Tr(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Er.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function Or(e) {
	var t = this.__data__, n = Tr(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function kr(e) {
	return Tr(this.__data__, e) > -1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function Ar(e, t) {
	var n = this.__data__, r = Tr(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function jr(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
jr.prototype.clear = Cr, jr.prototype.delete = Dr, jr.prototype.get = Or, jr.prototype.has = kr, jr.prototype.set = Ar;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function Mr() {
	this.__data__ = new jr(), this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function Nr(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function Pr(e) {
	return this.__data__.get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function Fr(e) {
	return this.__data__.has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function Ir(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var Lr = "[object AsyncFunction]", Rr = "[object Function]", zr = "[object GeneratorFunction]", Br = "[object Proxy]";
function Vr(e) {
	if (!Ir(e)) return !1;
	var t = fr(e);
	return t == Rr || t == zr || t == Lr || t == Br;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var Hr = er["__core-js_shared__"], Ur = function() {
	var e = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Wr(e) {
	return !!Ur && Ur in e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var Gr = Function.prototype.toString;
function Kr(e) {
	if (e != null) {
		try {
			return Gr.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var qr = /[\\^$.*+?()[\]{}|]/g, Jr = /^\[object .+?Constructor\]$/, Yr = Function.prototype, Xr = Object.prototype, Zr = Yr.toString, Qr = Xr.hasOwnProperty, $r = RegExp("^" + Zr.call(Qr).replace(qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function ei(e) {
	return !Ir(e) || Wr(e) ? !1 : (Vr(e) ? $r : Jr).test(Kr(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function ti(e, t) {
	return e?.[t];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function ni(e, t) {
	var n = ti(e, t);
	return ei(n) ? n : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var ri = ni(er, "Map"), ii = ni(Object, "create");
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function ai() {
	this.__data__ = ii ? ii(null) : {}, this.size = 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function oi(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var si = "__lodash_hash_undefined__", ci = Object.prototype.hasOwnProperty;
function li(e) {
	var t = this.__data__;
	if (ii) {
		var n = t[e];
		return n === si ? void 0 : n;
	}
	return ci.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var ui = Object.prototype.hasOwnProperty;
function di(e) {
	var t = this.__data__;
	return ii ? t[e] !== void 0 : ui.call(t, e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var fi = "__lodash_hash_undefined__";
function pi(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = ii && t === void 0 ? fi : t, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function mi(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
mi.prototype.clear = ai, mi.prototype.delete = oi, mi.prototype.get = li, mi.prototype.has = di, mi.prototype.set = pi;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function hi() {
	this.size = 0, this.__data__ = {
		hash: new mi(),
		map: new (ri || jr)(),
		string: new mi()
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function gi(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function _i(e, t) {
	var n = e.__data__;
	return gi(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function vi(e) {
	var t = _i(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function yi(e) {
	return _i(this, e).get(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function bi(e) {
	return _i(this, e).has(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function xi(e, t) {
	var n = _i(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function Si(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Si.prototype.clear = hi, Si.prototype.delete = vi, Si.prototype.get = yi, Si.prototype.has = bi, Si.prototype.set = xi;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var Ci = 200;
function wi(e, t) {
	var n = this.__data__;
	if (n instanceof jr) {
		var r = n.__data__;
		if (!ri || r.length < Ci - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Si(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function Ti(e) {
	this.size = (this.__data__ = new jr(e)).size;
}
Ti.prototype.clear = Mr, Ti.prototype.delete = Nr, Ti.prototype.get = Pr, Ti.prototype.has = Fr, Ti.prototype.set = wi;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function Ei(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var Di = function() {
	try {
		var e = ni(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function Oi(e, t, n) {
	t == "__proto__" && Di ? Di(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var ki = Object.prototype.hasOwnProperty;
function Ai(e, t, n) {
	var r = e[t];
	(!(ki.call(e, t) && wr(r, n)) || n === void 0 && !(t in e)) && Oi(e, t, n);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function ji(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Oi(n, s, c) : Ai(n, s, c);
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function Mi(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var Ni = "[object Arguments]";
function Pi(e) {
	return hr(e) && fr(e) == Ni;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var Fi = Object.prototype, Ii = Fi.hasOwnProperty, Li = Fi.propertyIsEnumerable, Ri = Pi(function() {
	return arguments;
}()) ? Pi : function(e) {
	return hr(e) && Ii.call(e, "callee") && !Li.call(e, "callee");
}, zi = Array.isArray;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function Bi() {
	return !1;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var Vi = typeof exports == "object" && exports && !exports.nodeType && exports, Hi = Vi && typeof module == "object" && module && !module.nodeType && module, Ui = Hi && Hi.exports === Vi ? er.Buffer : void 0, Wi = (Ui ? Ui.isBuffer : void 0) || Bi, Gi = 9007199254740991, Ki = /^(?:0|[1-9]\d*)$/;
function qi(e, t) {
	var n = typeof e;
	return t ??= Gi, !!t && (n == "number" || n != "symbol" && Ki.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var Ji = 9007199254740991;
function Yi(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ji;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var Xi = "[object Arguments]", Zi = "[object Array]", Qi = "[object Boolean]", $i = "[object Date]", ea = "[object Error]", ta = "[object Function]", na = "[object Map]", ra = "[object Number]", ia = "[object Object]", aa = "[object RegExp]", oa = "[object Set]", sa = "[object String]", ca = "[object WeakMap]", la = "[object ArrayBuffer]", ua = "[object DataView]", da = "[object Float32Array]", fa = "[object Float64Array]", pa = "[object Int8Array]", ma = "[object Int16Array]", ha = "[object Int32Array]", ga = "[object Uint8Array]", _a = "[object Uint8ClampedArray]", va = "[object Uint16Array]", ya = "[object Uint32Array]", N = {};
N[da] = N[fa] = N[pa] = N[ma] = N[ha] = N[ga] = N[_a] = N[va] = N[ya] = !0, N[Xi] = N[Zi] = N[la] = N[Qi] = N[ua] = N[$i] = N[ea] = N[ta] = N[na] = N[ra] = N[ia] = N[aa] = N[oa] = N[sa] = N[ca] = !1;
function ba(e) {
	return hr(e) && Yi(e.length) && !!N[fr(e)];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function xa(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var Sa = typeof exports == "object" && exports && !exports.nodeType && exports, Ca = Sa && typeof module == "object" && module && !module.nodeType && module, wa = Ca && Ca.exports === Sa && Qn.process, Ta = function() {
	try {
		return Ca && Ca.require && Ca.require("util").types || wa && wa.binding && wa.binding("util");
	} catch {}
}(), Ea = Ta && Ta.isTypedArray, Da = Ea ? xa(Ea) : ba, Oa = Object.prototype.hasOwnProperty;
function ka(e, t) {
	var n = zi(e), r = !n && Ri(e), i = !n && !r && Wi(e), a = !n && !r && !i && Da(e), o = n || r || i || a, s = o ? Mi(e.length, String) : [], c = s.length;
	for (var l in e) (t || Oa.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || qi(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var Aa = Object.prototype;
function ja(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Aa);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var Ma = pr(Object.keys, Object), Na = Object.prototype.hasOwnProperty;
function Pa(e) {
	if (!ja(e)) return Ma(e);
	var t = [];
	for (var n in Object(e)) Na.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function Fa(e) {
	return e != null && Yi(e.length) && !Vr(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function Ia(e) {
	return Fa(e) ? ka(e) : Pa(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function La(e, t) {
	return e && ji(t, Ia(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function Ra(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var za = Object.prototype.hasOwnProperty;
function Ba(e) {
	if (!Ir(e)) return Ra(e);
	var t = ja(e), n = [];
	for (var r in e) r == "constructor" && (t || !za.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function Va(e) {
	return Fa(e) ? ka(e, !0) : Ba(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function Ha(e, t) {
	return e && ji(t, Va(t), e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var Ua = typeof exports == "object" && exports && !exports.nodeType && exports, Wa = Ua && typeof module == "object" && module && !module.nodeType && module, Ga = Wa && Wa.exports === Ua ? er.Buffer : void 0, Ka = Ga ? Ga.allocUnsafe : void 0;
function qa(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Ka ? Ka(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function Ja(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function Ya(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function Xa() {
	return [];
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var Za = Object.prototype.propertyIsEnumerable, Qa = Object.getOwnPropertySymbols, $a = Qa ? function(e) {
	return e == null ? [] : (e = Object(e), Ya(Qa(e), function(t) {
		return Za.call(e, t);
	}));
} : Xa;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function eo(e, t) {
	return ji(e, $a(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function to(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var no = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) to(t, $a(e)), e = mr(e);
	return t;
} : Xa;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function ro(e, t) {
	return ji(e, no(e), t);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function io(e, t, n) {
	var r = t(e);
	return zi(e) ? r : to(r, n(e));
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function ao(e) {
	return io(e, Ia, $a);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function oo(e) {
	return io(e, Va, no);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var so = ni(er, "DataView"), co = ni(er, "Promise"), lo = ni(er, "Set"), uo = ni(er, "WeakMap"), fo = "[object Map]", po = "[object Object]", mo = "[object Promise]", ho = "[object Set]", go = "[object WeakMap]", _o = "[object DataView]", vo = Kr(so), yo = Kr(ri), bo = Kr(co), xo = Kr(lo), So = Kr(uo), Co = fr;
(so && Co(new so(/* @__PURE__ */ new ArrayBuffer(1))) != _o || ri && Co(new ri()) != fo || co && Co(co.resolve()) != mo || lo && Co(new lo()) != ho || uo && Co(new uo()) != go) && (Co = function(e) {
	var t = fr(e), n = t == po ? e.constructor : void 0, r = n ? Kr(n) : "";
	if (r) switch (r) {
		case vo: return _o;
		case yo: return fo;
		case bo: return mo;
		case xo: return ho;
		case So: return go;
	}
	return t;
});
var wo = Co, To = Object.prototype.hasOwnProperty;
function Eo(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && To.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var Do = er.Uint8Array;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function Oo(e) {
	var t = new e.constructor(e.byteLength);
	return new Do(t).set(new Do(e)), t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function ko(e, t) {
	var n = t ? Oo(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var Ao = /\w*$/;
function jo(e) {
	var t = new e.constructor(e.source, Ao.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var Mo = tr ? tr.prototype : void 0, No = Mo ? Mo.valueOf : void 0;
function Po(e) {
	return No ? Object(No.call(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function Fo(e, t) {
	var n = t ? Oo(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var Io = "[object Boolean]", Lo = "[object Date]", Ro = "[object Map]", zo = "[object Number]", Bo = "[object RegExp]", Vo = "[object Set]", Ho = "[object String]", Uo = "[object Symbol]", Wo = "[object ArrayBuffer]", Go = "[object DataView]", Ko = "[object Float32Array]", qo = "[object Float64Array]", Jo = "[object Int8Array]", Yo = "[object Int16Array]", Xo = "[object Int32Array]", Zo = "[object Uint8Array]", Qo = "[object Uint8ClampedArray]", $o = "[object Uint16Array]", es = "[object Uint32Array]";
function ts(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Wo: return Oo(e);
		case Io:
		case Lo: return new r(+e);
		case Go: return ko(e, n);
		case Ko:
		case qo:
		case Jo:
		case Yo:
		case Xo:
		case Zo:
		case Qo:
		case $o:
		case es: return Fo(e, n);
		case Ro: return new r();
		case zo:
		case Ho: return new r(e);
		case Bo: return jo(e);
		case Vo: return new r();
		case Uo: return Po(e);
	}
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var ns = Object.create, rs = function() {
	function e() {}
	return function(t) {
		if (!Ir(t)) return {};
		if (ns) return ns(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function is(e) {
	return typeof e.constructor == "function" && !ja(e) ? rs(mr(e)) : {};
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var as = "[object Map]";
function os(e) {
	return hr(e) && wo(e) == as;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var ss = Ta && Ta.isMap, cs = ss ? xa(ss) : os, ls = "[object Set]";
function us(e) {
	return hr(e) && wo(e) == ls;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var ds = Ta && Ta.isSet, fs = ds ? xa(ds) : us, ps = 1, ms = 2, hs = 4, gs = "[object Arguments]", _s = "[object Array]", vs = "[object Boolean]", ys = "[object Date]", bs = "[object Error]", xs = "[object Function]", Ss = "[object GeneratorFunction]", Cs = "[object Map]", ws = "[object Number]", Ts = "[object Object]", Es = "[object RegExp]", Ds = "[object Set]", Os = "[object String]", ks = "[object Symbol]", As = "[object WeakMap]", js = "[object ArrayBuffer]", Ms = "[object DataView]", Ns = "[object Float32Array]", Ps = "[object Float64Array]", Fs = "[object Int8Array]", Is = "[object Int16Array]", Ls = "[object Int32Array]", Rs = "[object Uint8Array]", zs = "[object Uint8ClampedArray]", Bs = "[object Uint16Array]", Vs = "[object Uint32Array]", P = {};
P[gs] = P[_s] = P[js] = P[Ms] = P[vs] = P[ys] = P[Ns] = P[Ps] = P[Fs] = P[Is] = P[Ls] = P[Cs] = P[ws] = P[Ts] = P[Es] = P[Ds] = P[Os] = P[ks] = P[Rs] = P[zs] = P[Bs] = P[Vs] = !0, P[bs] = P[xs] = P[As] = !1;
function Hs(e, t, n, r, i, a) {
	var o, s = t & ps, c = t & ms, l = t & hs;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Ir(e)) return e;
	var u = zi(e);
	if (u) {
		if (o = Eo(e), !s) return Ja(e, o);
	} else {
		var d = wo(e), f = d == xs || d == Ss;
		if (Wi(e)) return qa(e, s);
		if (d == Ts || d == gs || f && !i) {
			if (o = c || f ? {} : is(e), !s) return c ? ro(e, Ha(o, e)) : eo(e, La(o, e));
		} else {
			if (!P[d]) return i ? e : {};
			o = ts(e, d, s);
		}
	}
	a ||= new Ti();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), fs(e) ? e.forEach(function(r) {
		o.add(Hs(r, t, n, r, e, a));
	}) : cs(e) && e.forEach(function(r, i) {
		o.set(i, Hs(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? oo : ao : c ? Va : Ia)(e);
	return Ei(m || e, function(r, i) {
		m && (i = r, r = e[i]), Ai(o, i, Hs(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/cloneDeep.js
var Us = 1, Ws = 4;
function Gs(e) {
	return Hs(e, Us | Ws);
}
//#endregion
//#region node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var Ks = /* @__PURE__ */ t((/* @__PURE__ */ r(((e, t) => {
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
})))()), qs = !0;
function Js(e, t) {
	if (!qs) {
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
var Ys = 4;
function Xs(e) {
	return Hs(e, Ys);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function Zs(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var Qs = "[object Symbol]";
function $s(e) {
	return typeof e == "symbol" || hr(e) && fr(e) == Qs;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var ec = "Expected a function";
function tc(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(ec);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (tc.Cache || Si)(), n;
}
tc.Cache = Si;
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var nc = 500;
function rc(e) {
	var t = tc(e, function(e) {
		return n.size === nc && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var ic = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ac = /\\(\\)?/g, oc = rc(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(ic, function(e, n, r, i) {
		t.push(r ? i.replace(ac, "$1") : n || e);
	}), t;
}), sc = Infinity;
function cc(e) {
	if (typeof e == "string" || $s(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -sc ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var lc = Infinity, uc = tr ? tr.prototype : void 0, dc = uc ? uc.toString : void 0;
function fc(e) {
	if (typeof e == "string") return e;
	if (zi(e)) return Zs(e, fc) + "";
	if ($s(e)) return dc ? dc.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -lc ? "-0" : t;
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function pc(e) {
	return e == null ? "" : fc(e);
}
//#endregion
//#region node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toPath.js
function mc(e) {
	return zi(e) ? Zs(e, cc) : $s(e) ? [e] : Ja(oc(pc(e)));
}
//#endregion
//#region node_modules/.pnpm/formik@2.4.9_@types+react@18.3.28_react@18.3.1/node_modules/formik/dist/formik.esm.js
function F() {
	return F = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, F.apply(this, arguments);
}
function hc(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function gc(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function _c(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var vc = /* @__PURE__ */ (0, E.createContext)(void 0);
vc.displayName = "FormikContext";
var yc = vc.Provider, bc = vc.Consumer;
function xc() {
	var e = (0, E.useContext)(vc);
	return !e && Js(!1), e;
}
var Sc = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Cc = function(e) {
	return typeof e == "function";
}, wc = function(e) {
	return typeof e == "object" && !!e;
}, Tc = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Ec = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Dc = function(e) {
	return E.Children.count(e) === 0;
}, Oc = function(e) {
	return wc(e) && Cc(e.then);
};
function I(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = mc(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function kc(e, t, n) {
	for (var r = Xs(e), i = r, a = 0, o = mc(t); a < o.length - 1; a++) {
		var s = o[a], c = I(e, o.slice(0, a + 1));
		if (c && (wc(c) || Array.isArray(c))) i = i[s] = Xs(c);
		else {
			var l = o[a + 1];
			i = i[s] = Tc(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Ac(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		wc(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Ac(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function jc(e, t) {
	switch (t.type) {
		case "SET_VALUES": return F({}, e, { values: t.payload });
		case "SET_TOUCHED": return F({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Ks.default)(e.errors, t.payload) ? e : F({}, e, { errors: t.payload });
		case "SET_STATUS": return F({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return F({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return F({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return F({}, e, { values: kc(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return F({}, e, { touched: kc(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return F({}, e, { errors: kc(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return F({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return F({}, e, {
			touched: Ac(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return F({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return F({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Mc = {}, Nc = {};
function Pc(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = gc(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = F({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = (0, E.useRef)(f.initialValues), m = (0, E.useRef)(f.initialErrors || Mc), h = (0, E.useRef)(f.initialTouched || Nc), g = (0, E.useRef)(f.initialStatus), _ = (0, E.useRef)(!1), v = (0, E.useRef)({});
	(0, E.useEffect)(function() {
		return _.current = !0, function() {
			_.current = !1;
		};
	}, []);
	var y = (0, E.useState)(0)[1], b = (0, E.useRef)({
		values: Gs(f.initialValues),
		errors: Gs(f.initialErrors) || Mc,
		touched: Gs(f.initialTouched) || Nc,
		status: Gs(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), x = b.current, S = (0, E.useCallback)(function(e) {
		var t = b.current;
		b.current = jc(t, e), t !== b.current && y(function(e) {
			return e + 1;
		});
	}, []), C = (0, E.useCallback)(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Mc) : Oc(i) ? i.then(function(e) {
				n(e || Mc);
			}, function(e) {
				r(e);
			}) : n(i);
		});
	}, [f.validate]), w = (0, E.useCallback)(function(e, t) {
		var n = f.validationSchema, r = Cc(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Lc(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Mc);
			}, function(n) {
				n.name === "ValidationError" ? e(Ic(n)) : t(n);
			});
		});
	}, [f.validationSchema]), T = (0, E.useCallback)(function(e, t) {
		return new Promise(function(n) {
			return n(v.current[e].validate(t));
		});
	}, []), ee = (0, E.useCallback)(function(e) {
		var t = Object.keys(v.current).filter(function(e) {
			return Cc(v.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return T(t, I(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = kc(e, t[r], n)), e;
			}, {});
		});
	}, [T]), te = (0, E.useCallback)(function(e) {
		return Promise.all([
			ee(e),
			f.validationSchema ? w(e) : {},
			f.validate ? C(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return Zn.all([
				t,
				n,
				r
			], { arrayMerge: zc });
		});
	}, [
		f.validate,
		f.validationSchema,
		ee,
		C,
		w
	]), ne = Uc(function(e) {
		return e === void 0 && (e = x.values), S({
			type: "SET_ISVALIDATING",
			payload: !0
		}), te(e).then(function(e) {
			return _.current && (S({
				type: "SET_ISVALIDATING",
				payload: !1
			}), S({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	(0, E.useEffect)(function() {
		o && _.current === !0 && (0, Ks.default)(p.current, f.initialValues) && ne(p.current);
	}, [o, ne]);
	var re = (0, E.useCallback)(function(e) {
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
			var o = f.onReset(x.values, be);
			Oc(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	(0, E.useEffect)(function() {
		_.current === !0 && !(0, Ks.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, re(), o && ne(p.current));
	}, [
		l,
		f.initialValues,
		re,
		o,
		ne
	]), (0, E.useEffect)(function() {
		l && _.current === !0 && !(0, Ks.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Mc, S({
			type: "SET_ERRORS",
			payload: f.initialErrors || Mc
		}));
	}, [l, f.initialErrors]), (0, E.useEffect)(function() {
		l && _.current === !0 && !(0, Ks.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Nc, S({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Nc
		}));
	}, [l, f.initialTouched]), (0, E.useEffect)(function() {
		l && _.current === !0 && !(0, Ks.default)(g.current, f.initialStatus) && (g.current = f.initialStatus, S({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var ie = Uc(function(e) {
		if (v.current[e] && Cc(v.current[e].validate)) {
			var t = I(x.values, e), n = v.current[e].validate(t);
			return Oc(n) ? (S({
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
					value: I(t, e)
				}
			}), S({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), ae = (0, E.useCallback)(function(e, t) {
		var n = t.validate;
		v.current[e] = { validate: n };
	}, []), oe = (0, E.useCallback)(function(e) {
		delete v.current[e];
	}, []), se = Uc(function(e, t) {
		return S({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? ne(x.values) : Promise.resolve();
	}), ce = (0, E.useCallback)(function(e) {
		S({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), D = Uc(function(e, t) {
		var r = Cc(e) ? e(x.values) : e;
		return S({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? ne(r) : Promise.resolve();
	}), le = (0, E.useCallback)(function(e, t) {
		S({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), O = Uc(function(e, t, r) {
		var i = Cc(t) ? t(I(x.values, e)) : t;
		return S({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: i
			}
		}), (r === void 0 ? n : r) ? ne(kc(x.values, e, i)) : Promise.resolve();
	}), ue = (0, E.useCallback)(function(e, t) {
		var n = t, r = e, i;
		if (!Ec(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked;
			a.outerHTML;
			var d = a.options, f = a.multiple;
			n = t || s || c, r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? Vc(I(x.values, n), u, l) : d && f ? Bc(d) : l;
		}
		n && O(n, r);
	}, [O, x.values]), de = Uc(function(e) {
		if (Ec(e)) return function(t) {
			return ue(t, e);
		};
		ue(e);
	}), fe = Uc(function(e, t, n) {
		return t === void 0 && (t = !0), S({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? ne(x.values) : Promise.resolve();
	}), pe = (0, E.useCallback)(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id;
		n.outerHTML, fe(t || r || i, !0);
	}, [fe]), me = Uc(function(e) {
		if (Ec(e)) return function(t) {
			return pe(t, e);
		};
		pe(e);
	}), he = (0, E.useCallback)(function(e) {
		Cc(e) ? S({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : S({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ge = (0, E.useCallback)(function(e) {
		S({
			type: "SET_STATUS",
			payload: e
		});
	}, []), _e = (0, E.useCallback)(function(e) {
		S({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), ve = Uc(function() {
		return S({ type: "SUBMIT_ATTEMPT" }), ne().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = xe(), n === void 0) return;
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
	}), ye = Uc(function(e) {
		e && e.preventDefault && Cc(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Cc(e.stopPropagation) && e.stopPropagation(), ve().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), be = {
		resetForm: re,
		validateForm: ne,
		validateField: ie,
		setErrors: ce,
		setFieldError: le,
		setFieldTouched: fe,
		setFieldValue: O,
		setStatus: ge,
		setSubmitting: _e,
		setTouched: se,
		setValues: D,
		setFormikState: he,
		submitForm: ve
	}, xe = Uc(function() {
		return u(x.values, be);
	}), Se = Uc(function(e) {
		e && e.preventDefault && Cc(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Cc(e.stopPropagation) && e.stopPropagation(), re();
	}), Ce = (0, E.useCallback)(function(e) {
		return {
			value: I(x.values, e),
			error: I(x.errors, e),
			touched: !!I(x.touched, e),
			initialValue: I(p.current, e),
			initialTouched: !!I(h.current, e),
			initialError: I(m.current, e)
		};
	}, [
		x.errors,
		x.touched,
		x.values
	]), we = (0, E.useCallback)(function(e) {
		return {
			setValue: function(t, n) {
				return O(e, t, n);
			},
			setTouched: function(t, n) {
				return fe(e, t, n);
			},
			setError: function(t) {
				return le(e, t);
			}
		};
	}, [
		O,
		fe,
		le
	]), Te = (0, E.useCallback)(function(e) {
		var t = wc(e), n = t ? e.name : e, r = I(x.values, n), i = {
			name: n,
			value: r,
			onChange: de,
			onBlur: me
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		me,
		de,
		x.values
	]), Ee = (0, E.useMemo)(function() {
		return !(0, Ks.default)(p.current, x.values);
	}, [p.current, x.values]), De = (0, E.useMemo)(function() {
		return s === void 0 || Ee ? x.errors && Object.keys(x.errors).length === 0 : s !== !1 && Cc(s) ? s(f) : s;
	}, [
		s,
		Ee,
		x.errors,
		f
	]);
	return F({}, x, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: g.current,
		handleBlur: me,
		handleChange: de,
		handleReset: Se,
		handleSubmit: ye,
		resetForm: re,
		setErrors: ce,
		setFormikState: he,
		setFieldTouched: fe,
		setFieldValue: O,
		setFieldError: le,
		setStatus: ge,
		setSubmitting: _e,
		setTouched: se,
		setValues: D,
		submitForm: ve,
		validateForm: ne,
		validateField: ie,
		isValid: De,
		dirty: Ee,
		unregisterField: oe,
		registerField: ae,
		getFieldProps: Te,
		getFieldMeta: Ce,
		getFieldHelpers: we,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Fc(e) {
	var t = Pc(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return (0, E.useImperativeHandle)(a, function() {
		return t;
	}), (0, E.createElement)(yc, { value: t }, n ? (0, E.createElement)(n, t) : i ? i(t) : r ? Cc(r) ? r(t) : Dc(r) ? null : E.Children.only(r) : null);
}
function Ic(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return kc(t, e.path, e.message);
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
			I(t, o.path) || (t = kc(t, o.path, o.message));
		}
	}
	return t;
}
function Lc(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Rc(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Rc(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || Sr(e) ? Rc(e) : e === "" ? void 0 : e;
		}) : Sr(e[r]) ? t[r] = Rc(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function zc(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? Zn(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = Zn(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Bc(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function Vc(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var Hc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? E.useLayoutEffect : E.useEffect;
function Uc(e) {
	var t = (0, E.useRef)(e);
	return Hc(function() {
		t.current = e;
	}), (0, E.useCallback)(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
var Wc = /* @__PURE__ */ (0, E.forwardRef)(function(e, t) {
	var n = e.action, r = gc(e, ["action"]), i = n ?? "#", a = xc(), o = a.handleReset, s = a.handleSubmit;
	return (0, E.createElement)("form", F({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
Wc.displayName = "Form";
function Gc(e) {
	var t = function(t) {
		return (0, E.createElement)(bc, null, function(n) {
			return !n && Js(!1), (0, E.createElement)(e, F({}, t, { formik: n }));
		});
	}, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
	return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", (0, ee.default)(t, e);
}
var Kc = function(e, t, n) {
	var r = Xc(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, qc = function(e, t, n) {
	var r = Xc(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, Jc = function(e, t, n) {
	var r = Xc(e);
	return r.splice(t, 0, n), r;
}, Yc = function(e, t, n) {
	var r = Xc(e);
	return r[t] = n, r;
}, Xc = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(F({}, e, { length: t + 1 }));
}, Zc = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || wc(e) ? n(Xc(e)) : e;
	};
}, Qc = /* @__PURE__ */ function(e) {
	hc(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = Zc(r, e), o = Zc(t, e), s = kc(n.values, a, e(I(n.values, a))), c = r ? i(I(n.errors, a)) : void 0, l = t ? o(I(n.touched, a)) : void 0;
				return Sc(c) && (c = void 0), Sc(l) && (l = void 0), F({}, n, {
					values: s,
					errors: r ? kc(n.errors, a, c) : n.errors,
					touched: t ? kc(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(Xc(t), [Gs(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return qc(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return Kc(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return Jc(n, e, t);
			}, function(t) {
				return Jc(t, e, null);
			}, function(t) {
				return Jc(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return Yc(n, e, t);
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
		}, n.remove = n.remove.bind(_c(n)), n.pop = n.pop.bind(_c(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Ks.default)(I(e.formik.values, e.name), I(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? Xc(n) : [];
			return t ||= r[e], Cc(r.splice) && r.splice(e, 1), Cc(r.every) && r.every(function(e) {
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
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, o = t.formik, s = gc(o, ["validate", "validationSchema"]), c = F({}, e, {
			form: s,
			name: a
		});
		return n ? (0, E.createElement)(n, c) : r ? r(c) : i ? typeof i == "function" ? i(c) : Dc(i) ? null : E.Children.only(i) : null;
	}, t;
}(E.Component);
Qc.defaultProps = { validateOnChange: !0 };
var $c = /* @__PURE__ */ Gc(Qc), L = v();
function el() {
	let { values: e, setFieldValue: t, handleChange: n } = xc();
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "p-4",
		children: [
			/* @__PURE__ */ (0, L.jsx)("h3", { children: "Create Card Carousel" }),
			/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [
				/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Display Name" }),
				/* @__PURE__ */ (0, L.jsx)(M.Text, {
					muted: !0,
					children: "Name of the XBlock component in Studio."
				}),
				/* @__PURE__ */ (0, L.jsx)(M.Control, {
					type: "text",
					name: "displayName",
					value: e.displayName,
					onChange: n
				})
			] }),
			/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [
				/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Card Layout" }),
				/* @__PURE__ */ (0, L.jsx)(M.Text, { children: "Choose whether cards in this carousel use a vertical or horizontal layout. You'll add and edit the cards in the next step." }),
				/* @__PURE__ */ (0, L.jsxs)(d, {
					direction: "horizontal",
					gap: 4,
					children: [/* @__PURE__ */ (0, L.jsxs)(m, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === g.VERTICAL ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", g.VERTICAL),
						children: [
							/* @__PURE__ */ (0, L.jsx)("p", { children: /* @__PURE__ */ (0, L.jsx)("span", {
								className: "material-icons",
								children: "splitscreen"
							}) }),
							/* @__PURE__ */ (0, L.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, L.jsx)("strong", { children: "Vertical Cards" })
							}),
							/* @__PURE__ */ (0, L.jsx)("p", {
								className: "small",
								children: "Content sits above and below"
							})
						]
					}), /* @__PURE__ */ (0, L.jsxs)(m, {
						className: "flex flex-column mt-4 p-4",
						variant: e.orientation === g.HORIZONTAL ? "outline-success" : "outline-secondary",
						onClick: () => t("orientation", g.HORIZONTAL),
						children: [
							/* @__PURE__ */ (0, L.jsx)("p", { children: /* @__PURE__ */ (0, L.jsx)("span", {
								className: "material-icons",
								children: "vertical_split"
							}) }),
							/* @__PURE__ */ (0, L.jsx)("p", {
								className: "mt-0",
								children: /* @__PURE__ */ (0, L.jsx)("strong", { children: "Horizontal Cards" })
							}),
							/* @__PURE__ */ (0, L.jsx)("p", {
								className: "small",
								children: "Content sits side-by-side"
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, L.jsxs)(M.Group, {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, L.jsx)(M.Checkbox, {
					name: "disableNumbering",
					checked: !e.disableNumbering,
					onChange: (e) => t("disableNumbering", !e.currentTarget.checked),
					children: "Add card numbers"
				}), /* @__PURE__ */ (0, L.jsx)(M.Text, {
					className: "small",
					children: "Displays progress. For e.g., (2/4)"
				})]
			})
		]
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/ListItemContainer.tsx
function tl({ heading: e, index: t, onRemoveItem: n, children: r }) {
	return /* @__PURE__ */ (0, L.jsx)("div", {
		className: "m-2 bg-light-200",
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "border rounded-sm shadow-sm icon-item-form mb-4",
			children: [/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "d-flex justify-content-between border-bottom align-items-center",
				children: [/* @__PURE__ */ (0, L.jsx)("h5", {
					className: "ml-2 mb-0",
					children: e
				}), /* @__PURE__ */ (0, L.jsxs)(m, {
					variant: "tertiary",
					size: "sm",
					className: "d-flex align-items-center",
					onClick: () => n(t),
					children: [
						/* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons text-danger",
							children: "delete_outline"
						}),
						" ",
						"Delete"
					]
				})]
			}), /* @__PURE__ */ (0, L.jsx)("div", {
				className: "p-2",
				children: r
			})]
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/icons.ts
var nl = /* @__PURE__ */ "10k.10mp.11mp.123.12mp.13mp.14mp.15mp.16mp.17mp.18_up_rating.18mp.19mp.1k.1k_plus.1x_mobiledata.20mp.21mp.22mp.23mp.24mp.2k.2k_plus.2mp.30fps.30fps_select.360.3d_rotation.3g_mobiledata.3k.3k_plus.3mp.3p.4g_mobiledata.4g_plus_mobiledata.4k.4k_plus.4mp.5g.5k.5k_plus.5mp.60fps.60fps_select.6_ft_apart.6k.6k_plus.6mp.7k.7k_plus.7mp.8k.8k_plus.8mp.9k.9k_plus.9mp.abc.ac_unit.access_alarm.access_alarms.access_time.access_time_filled.accessibility.accessibility_new.accessible.accessible_forward.account_balance.account_balance_wallet.account_box.account_circle.account_tree.ad_units.adb.add.add_a_photo.add_alarm.add_alert.add_box.add_business.add_card.add_chart.add_circle.add_circle_outline.add_comment.add_home.add_home_work.add_ic_call.add_link.add_location.add_location_alt.add_moderator.add_photo_alternate.add_reaction.add_road.add_shopping_cart.add_task.add_to_drive.add_to_home_screen.add_to_photos.add_to_queue.addchart.adf_scanner.adjust.admin_panel_settings.ads_click.agriculture.air.airline_seat_flat.airline_seat_flat_angled.airline_seat_individual_suite.airline_seat_legroom_extra.airline_seat_legroom_normal.airline_seat_legroom_reduced.airline_seat_recline_extra.airline_seat_recline_normal.airline_stops.airlines.airplane_ticket.airplanemode_active.airplanemode_inactive.airplay.airport_shuttle.alarm.alarm_add.alarm_off.alarm_on.album.align_horizontal_center.align_horizontal_left.align_horizontal_right.align_vertical_bottom.align_vertical_center.align_vertical_top.all_inbox.all_inclusive.all_out.alt_route.alternate_email.analytics.anchor.android.animation.announcement.aod.apartment.api.app_blocking.app_registration.app_settings_alt.app_shortcut.approval.apps.apps_outage.architecture.archive.area_chart.arrow_back.arrow_back_ios.arrow_back_ios_new.arrow_circle_down.arrow_circle_left.arrow_circle_right.arrow_circle_up.arrow_downward.arrow_drop_down.arrow_drop_down_circle.arrow_drop_up.arrow_forward.arrow_forward_ios.arrow_left.arrow_outward.arrow_right.arrow_right_alt.arrow_upward.art_track.article.aspect_ratio.assessment.assignment.assignment_ind.assignment_late.assignment_return.assignment_returned.assignment_turned_in.assist_walker.assistant.assistant_direction.assistant_photo.assured_workload.atm.attach_email.attach_file.attach_money.attachment.attractions.attribution.audio_file.audiotrack.auto_awesome.auto_awesome_mosaic.auto_awesome_motion.auto_delete.auto_fix_high.auto_fix_normal.auto_fix_off.auto_graph.auto_mode.auto_stories.autofps_select.autorenew.av_timer.baby_changing_station.back_hand.backpack.backspace.backup.backup_table.badge.bakery_dining.balance.balcony.ballot.bar_chart.batch_prediction.bathroom.bathtub.battery_0_bar.battery_1_bar.battery_2_bar.battery_3_bar.battery_4_bar.battery_5_bar.battery_6_bar.battery_alert.battery_charging_full.battery_full.battery_saver.battery_std.battery_unknown.beach_access.bed.bedroom_baby.bedroom_child.bedroom_parent.bedtime.bedtime_off.beenhere.bento.bike_scooter.biotech.blender.blind.blinds.blinds_closed.block.bloodtype.bluetooth.bluetooth_audio.bluetooth_connected.bluetooth_disabled.bluetooth_drive.bluetooth_searching.blur_circular.blur_linear.blur_off.blur_on.bolt.book.book_online.bookmark.bookmark_add.bookmark_added.bookmark_border.bookmark_remove.bookmarks.border_all.border_bottom.border_clear.border_color.border_horizontal.border_inner.border_left.border_outer.border_right.border_style.border_top.border_vertical.boy.branding_watermark.breakfast_dining.brightness_1.brightness_2.brightness_3.brightness_4.brightness_5.brightness_6.brightness_7.brightness_auto.brightness_high.brightness_low.brightness_medium.broadcast_on_home.broadcast_on_personal.broken_image.browse_gallery.browser_not_supported.browser_updated.brunch_dining.brush.bubble_chart.bug_report.build.build_circle.bungalow.burst_mode.bus_alert.business.business_center.cabin.cable.cached.cake.calculate.calendar_month.calendar_today.calendar_view_day.calendar_view_month.calendar_view_week.call.call_end.call_made.call_merge.call_missed.call_missed_outgoing.call_received.call_split.call_to_action.camera.camera_alt.camera_enhance.camera_front.camera_indoor.camera_outdoor.camera_rear.camera_roll.cameraswitch.campaign.cancel.cancel_presentation.cancel_schedule_send.candlestick_chart.car_crash.car_rental.car_repair.card_giftcard.card_membership.card_travel.carpenter.cases.casino.cast.cast_connected.cast_for_education.castle.catching_pokemon.category.celebration.cell_tower.cell_wifi.center_focus_strong.center_focus_weak.chair.chair_alt.chalet.change_circle.change_history.charging_station.chat.chat_bubble.chat_bubble_outline.check.check_box.check_box_outline_blank.check_circle.check_circle_outline.checklist.checklist_rtl.checkroom.chevron_left.chevron_right.child_care.child_friendly.chrome_reader_mode.church.circle.circle_notifications.class.clean_hands.cleaning_services.clear.clear_all.close.close_fullscreen.closed_caption.closed_caption_disabled.closed_caption_off.cloud.cloud_circle.cloud_done.cloud_download.cloud_off.cloud_queue.cloud_sync.cloud_upload.co2.co_present.code.code_off.coffee.coffee_maker.collections.collections_bookmark.color_lens.colorize.comment.comment_bank.comments_disabled.commit.commute.compare.compare_arrows.compass_calibration.compost.compress.computer.confirmation_number.connect_without_contact.connected_tv.connecting_airports.construction.contact_emergency.contact_mail.contact_page.contact_phone.contact_support.contactless.contacts.content_copy.content_cut.content_paste.content_paste_go.content_paste_off.content_paste_search.contrast.control_camera.control_point.control_point_duplicate.cookie.copy_all.copyright.coronavirus.corporate_fare.cottage.countertops.create.create_new_folder.credit_card.credit_card_off.credit_score.crib.crisis_alert.crop.crop_16_9.crop_3_2.crop_5_4.crop_7_5.crop_din.crop_free.crop_landscape.crop_original.crop_portrait.crop_rotate.crop_square.cruelty_free.css.currency_bitcoin.currency_exchange.currency_franc.currency_lira.currency_pound.currency_ruble.currency_rupee.currency_yen.currency_yuan.curtains.curtains_closed.cyclone.dangerous.dark_mode.dashboard.dashboard_customize.data_array.data_exploration.data_object.data_saver_off.data_saver_on.data_thresholding.data_usage.dataset.dataset_linked.date_range.deblur.deck.dehaze.delete.delete_forever.delete_outline.delete_sweep.delivery_dining.density_large.density_medium.density_small.departure_board.description.deselect.design_services.desk.desktop_access_disabled.desktop_mac.desktop_windows.details.developer_board.developer_board_off.developer_mode.device_hub.device_thermostat.device_unknown.devices.devices_fold.devices_other.dialer_sip.dialpad.diamond.difference.dining.dinner_dining.directions.directions_bike.directions_boat.directions_boat_filled.directions_bus.directions_bus_filled.directions_car.directions_car_filled.directions_off.directions_railway.directions_railway_filled.directions_run.directions_subway.directions_subway_filled.directions_transit.directions_transit_filled.directions_walk.dirty_lens.disabled_by_default.disabled_visible.disc_full.discount.display_settings.diversity_1.diversity_2.diversity_3.dns.do_disturb.do_disturb_alt.do_disturb_off.do_disturb_on.do_not_disturb.do_not_disturb_alt.do_not_disturb_off.do_not_disturb_on.do_not_disturb_on_total_silence.do_not_step.do_not_touch.dock.document_scanner.domain.domain_add.domain_disabled.domain_verification.done.done_all.done_outline.donut_large.donut_small.door_back.door_front.door_sliding.doorbell.double_arrow.downhill_skiing.download.download_done.download_for_offline.downloading.drafts.drag_handle.drag_indicator.draw.drive_eta.drive_file_move.drive_file_move_rtl.drive_file_rename_outline.drive_folder_upload.dry.dry_cleaning.duo.dvr.dynamic_feed.dynamic_form.e_mobiledata.earbuds.earbuds_battery.east.edgesensor_high.edgesensor_low.edit.edit_attributes.edit_calendar.edit_location.edit_location_alt.edit_note.edit_notifications.edit_off.edit_road.egg.egg_alt.eject.elderly.elderly_woman.electric_bike.electric_bolt.electric_car.electric_meter.electric_moped.electric_rickshaw.electric_scooter.electrical_services.elevator.email.emergency.emergency_recording.emergency_share.emoji_emotions.emoji_events.emoji_food_beverage.emoji_nature.emoji_objects.emoji_people.emoji_symbols.emoji_transportation.energy_savings_leaf.engineering.enhanced_encryption.equalizer.error.error_outline.escalator.escalator_warning.euro.euro_symbol.ev_station.event.event_available.event_busy.event_note.event_repeat.event_seat.exit_to_app.expand.expand_circle_down.expand_less.expand_more.explicit.explore.explore_off.exposure.exposure_neg_1.exposure_neg_2.exposure_plus_1.exposure_plus_2.exposure_zero.extension.extension_off.face.face_2.face_3.face_4.face_5.face_6.face_retouching_natural.face_retouching_off.fact_check.factory.family_restroom.fast_forward.fast_rewind.fastfood.favorite.favorite_border.fax.featured_play_list.featured_video.feed.feedback.female.fence.festival.fiber_dvr.fiber_manual_record.fiber_new.fiber_pin.fiber_smart_record.file_copy.file_download.file_download_done.file_download_off.file_open.file_present.file_upload.filter.filter_1.filter_2.filter_3.filter_4.filter_5.filter_6.filter_7.filter_8.filter_9.filter_9_plus.filter_alt.filter_alt_off.filter_b_and_w.filter_center_focus.filter_drama.filter_frames.filter_hdr.filter_list.filter_list_off.filter_none.filter_tilt_shift.filter_vintage.find_in_page.find_replace.fingerprint.fire_extinguisher.fire_hydrant_alt.fire_truck.fireplace.first_page.fit_screen.fitbit.fitness_center.flag.flag_circle.flaky.flare.flash_auto.flash_off.flash_on.flashlight_off.flashlight_on.flatware.flight.flight_class.flight_land.flight_takeoff.flip.flip_camera_android.flip_camera_ios.flip_to_back.flip_to_front.flood.fluorescent.flutter_dash.fmd_bad.fmd_good.folder.folder_copy.folder_delete.folder_off.folder_open.folder_shared.folder_special.folder_zip.follow_the_signs.font_download.font_download_off.food_bank.forest.fork_left.fork_right.format_align_center.format_align_justify.format_align_left.format_align_right.format_bold.format_clear.format_color_fill.format_color_reset.format_color_text.format_indent_decrease.format_indent_increase.format_italic.format_line_spacing.format_list_bulleted.format_list_numbered.format_list_numbered_rtl.format_overline.format_paint.format_quote.format_shapes.format_size.format_strikethrough.format_textdirection_l_to_r.format_textdirection_r_to_l.format_underlined.fort.forum.forward.forward_10.forward_30.forward_5.forward_to_inbox.foundation.free_breakfast.free_cancellation.front_hand.fullscreen.fullscreen_exit.functions.g_mobiledata.g_translate.gamepad.games.garage.gas_meter.gavel.generating_tokens.gesture.get_app.gif.gif_box.girl.gite.golf_course.gpp_bad.gpp_good.gpp_maybe.gps_fixed.gps_not_fixed.gps_off.grade.gradient.grading.grain.graphic_eq.grass.grid_3x3.grid_4x4.grid_goldenratio.grid_off.grid_on.grid_view.group.group_add.group_off.group_remove.group_work.groups.groups_2.groups_3.h_mobiledata.h_plus_mobiledata.hail.handshake.handyman.hardware.hd.hdr_auto.hdr_auto_select.hdr_enhanced_select.hdr_off.hdr_off_select.hdr_on.hdr_on_select.hdr_plus.hdr_strong.hdr_weak.headphones.headphones_battery.headset.headset_mic.headset_off.healing.health_and_safety.hearing.hearing_disabled.heart_broken.heat_pump.height.help.help_center.help_outline.hevc.hexagon.hide_image.hide_source.high_quality.highlight.highlight_alt.highlight_off.hiking.history.history_edu.history_toggle_off.hive.hls.hls_off.holiday_village.home.home_max.home_mini.home_repair_service.home_work.horizontal_distribute.horizontal_rule.horizontal_split.hot_tub.hotel.hotel_class.hourglass_bottom.hourglass_disabled.hourglass_empty.hourglass_full.hourglass_top.house.house_siding.houseboat.how_to_reg.how_to_vote.html.http.https.hub.hvac.ice_skating.icecream.image.image_aspect_ratio.image_not_supported.image_search.imagesearch_roller.import_contacts.import_export.important_devices.inbox.incomplete_circle.indeterminate_check_box.info.input.insert_chart.insert_chart_outlined.insert_comment.insert_drive_file.insert_emoticon.insert_invitation.insert_link.insert_page_break.insert_photo.insights.install_desktop.install_mobile.integration_instructions.interests.interpreter_mode.inventory.inventory_2.invert_colors.invert_colors_off.ios_share.iron.iso.javascript.join_full.join_inner.join_left.join_right.kayaking.kebab_dining.key.key_off.keyboard.keyboard_alt.keyboard_arrow_down.keyboard_arrow_left.keyboard_arrow_right.keyboard_arrow_up.keyboard_backspace.keyboard_capslock.keyboard_command_key.keyboard_control_key.keyboard_double_arrow_down.keyboard_double_arrow_left.keyboard_double_arrow_right.keyboard_double_arrow_up.keyboard_hide.keyboard_option_key.keyboard_return.keyboard_tab.keyboard_voice.king_bed.kitchen.kitesurfing.label.label_important.label_off.lan.landscape.landslide.language.laptop.laptop_chromebook.laptop_mac.laptop_windows.last_page.launch.layers.layers_clear.leaderboard.leak_add.leak_remove.legend_toggle.lens.lens_blur.library_add.library_add_check.library_books.library_music.light.light_mode.lightbulb.lightbulb_circle.line_axis.line_style.line_weight.linear_scale.link.link_off.linked_camera.liquor.list.list_alt.live_help.live_tv.living.local_activity.local_airport.local_atm.local_bar.local_cafe.local_car_wash.local_convenience_store.local_dining.local_drink.local_fire_department.local_florist.local_gas_station.local_grocery_store.local_hospital.local_hotel.local_laundry_service.local_library.local_mall.local_movies.local_offer.local_parking.local_pharmacy.local_phone.local_pizza.local_play.local_police.local_post_office.local_printshop.local_see.local_shipping.local_taxi.location_city.location_disabled.location_off.location_on.location_searching.lock.lock_clock.lock_open.lock_person.lock_reset.login.logo_dev.logout.looks.looks_3.looks_4.looks_5.looks_6.looks_one.looks_two.loop.loupe.low_priority.loyalty.lte_mobiledata.lte_plus_mobiledata.luggage.lunch_dining.lyrics.macro_off.mail.mail_lock.mail_outline.male.man.man_2.man_3.man_4.manage_accounts.manage_history.manage_search.map.maps_home_work.maps_ugc.margin.mark_as_unread.mark_chat_read.mark_chat_unread.mark_email_read.mark_email_unread.mark_unread_chat_alt.markunread.markunread_mailbox.masks.maximize.media_bluetooth_off.media_bluetooth_on.mediation.medical_information.medical_services.medication.medication_liquid.meeting_room.memory.menu.menu_book.menu_open.merge.merge_type.message.mic.mic_external_off.mic_external_on.mic_none.mic_off.microwave.military_tech.minimize.minor_crash.miscellaneous_services.missed_video_call.mms.mobile_friendly.mobile_off.mobile_screen_share.mobiledata_off.mode.mode_comment.mode_edit.mode_edit_outline.mode_fan_off.mode_night.mode_of_travel.mode_standby.model_training.monetization_on.money.money_off.money_off_csred.monitor.monitor_heart.monitor_weight.monochrome_photos.mood.mood_bad.moped.more.more_horiz.more_time.more_vert.mosque.motion_photos_auto.motion_photos_off.motion_photos_on.motion_photos_pause.motion_photos_paused.mouse.move_down.move_to_inbox.move_up.movie.movie_creation.movie_filter.moving.mp.multiline_chart.multiple_stop.museum.music_note.music_off.music_video.my_location.nat.nature.nature_people.navigate_before.navigate_next.navigation.near_me.near_me_disabled.nearby_error.nearby_off.nest_cam_wired_stand.network_cell.network_check.network_locked.network_ping.network_wifi.network_wifi_1_bar.network_wifi_2_bar.network_wifi_3_bar.new_label.new_releases.newspaper.next_plan.next_week.nfc.night_shelter.nightlife.nightlight.nightlight_round.nights_stay.no_accounts.no_adult_content.no_backpack.no_cell.no_crash.no_drinks.no_encryption.no_encryption_gmailerrorred.no_flash.no_food.no_luggage.no_meals.no_meeting_room.no_photography.no_sim.no_stroller.no_transfer.noise_aware.noise_control_off.nordic_walking.north.north_east.north_west.not_accessible.not_interested.not_listed_location.not_started.note.note_add.note_alt.notes.notification_add.notification_important.notifications.notifications_active.notifications_none.notifications_off.notifications_paused.numbers.offline_bolt.offline_pin.offline_share.oil_barrel.on_device_training.ondemand_video.online_prediction.opacity.open_in_browser.open_in_full.open_in_new.open_in_new_off.open_with.other_houses.outbound.outbox.outdoor_grill.outlet.outlined_flag.output.padding.pages.pageview.paid.palette.pan_tool.pan_tool_alt.panorama.panorama_fish_eye.panorama_horizontal.panorama_horizontal_select.panorama_photosphere.panorama_photosphere_select.panorama_vertical.panorama_vertical_select.panorama_wide_angle.panorama_wide_angle_select.paragliding.park.party_mode.password.pattern.pause.pause_circle.pause_circle_filled.pause_circle_outline.pause_presentation.payment.payments.pedal_bike.pending.pending_actions.pentagon.people.people_alt.people_outline.percent.perm_camera_mic.perm_contact_calendar.perm_data_setting.perm_device_information.perm_identity.perm_media.perm_phone_msg.perm_scan_wifi.person.person_2.person_3.person_4.person_add.person_add_alt.person_add_alt_1.person_add_disabled.person_off.person_outline.person_pin.person_pin_circle.person_remove.person_remove_alt_1.person_search.personal_injury.personal_video.pest_control.pest_control_rodent.pets.phishing.phone.phone_android.phone_bluetooth_speaker.phone_callback.phone_disabled.phone_enabled.phone_forwarded.phone_iphone.phone_locked.phone_missed.phone_paused.phonelink.phonelink_erase.phonelink_lock.phonelink_off.phonelink_ring.phonelink_setup.photo.photo_album.photo_camera.photo_camera_back.photo_camera_front.photo_filter.photo_library.photo_size_select_actual.photo_size_select_large.photo_size_select_small.php.piano.piano_off.picture_as_pdf.picture_in_picture.picture_in_picture_alt.pie_chart.pie_chart_outline.pin.pin_drop.pin_end.pin_invoke.pinch.pivot_table_chart.pix.place.plagiarism.play_arrow.play_circle.play_circle_filled.play_circle_outline.play_disabled.play_for_work.play_lesson.playlist_add.playlist_add_check.playlist_add_check_circle.playlist_add_circle.playlist_play.playlist_remove.plumbing.plus_one.podcasts.point_of_sale.policy.poll.polyline.polymer.pool.portable_wifi_off.portrait.post_add.power.power_input.power_off.power_settings_new.precision_manufacturing.pregnant_woman.present_to_all.preview.price_change.price_check.print.print_disabled.priority_high.privacy_tip.private_connectivity.production_quantity_limits.propane.propane_tank.psychology.psychology_alt.public.public_off.publish.published_with_changes.punch_clock.push_pin.qr_code.qr_code_2.qr_code_scanner.query_builder.query_stats.question_answer.question_mark.queue.queue_music.queue_play_next.quickreply.quiz.r_mobiledata.radar.radio.radio_button_checked.radio_button_unchecked.railway_alert.ramen_dining.ramp_left.ramp_right.rate_review.raw_off.raw_on.read_more.real_estate_agent.receipt.receipt_long.recent_actors.recommend.record_voice_over.rectangle.recycling.redeem.redo.reduce_capacity.refresh.remember_me.remove.remove_circle.remove_circle_outline.remove_done.remove_from_queue.remove_moderator.remove_red_eye.remove_road.remove_shopping_cart.reorder.repartition.repeat.repeat_on.repeat_one.repeat_one_on.replay.replay_10.replay_30.replay_5.replay_circle_filled.reply.reply_all.report.report_gmailerrorred.report_off.report_problem.request_page.request_quote.reset_tv.restart_alt.restaurant.restaurant_menu.restore.restore_from_trash.restore_page.reviews.rice_bowl.ring_volume.rocket.rocket_launch.roller_shades.roller_shades_closed.roller_skating.roofing.room.room_preferences.room_service.rotate_90_degrees_ccw.rotate_90_degrees_cw.rotate_left.rotate_right.roundabout_left.roundabout_right.rounded_corner.route.router.rowing.rss_feed.rsvp.rtt.rule.rule_folder.run_circle.running_with_errors.rv_hookup.safety_check.safety_divider.sailing.sanitizer.satellite.satellite_alt.save.save_alt.save_as.saved_search.savings.scale.scanner.scatter_plot.schedule.schedule_send.schema.school.science.score.scoreboard.screen_lock_landscape.screen_lock_portrait.screen_lock_rotation.screen_rotation.screen_rotation_alt.screen_search_desktop.screen_share.screenshot.screenshot_monitor.scuba_diving.sd.sd_card.sd_card_alert.sd_storage.search.search_off.security.security_update.security_update_good.security_update_warning.segment.select_all.self_improvement.sell.send.send_and_archive.send_time_extension.send_to_mobile.sensor_door.sensor_occupied.sensor_window.sensors.sensors_off.sentiment_dissatisfied.sentiment_neutral.sentiment_satisfied.sentiment_satisfied_alt.sentiment_very_dissatisfied.sentiment_very_satisfied.set_meal.settings.settings_accessibility.settings_applications.settings_backup_restore.settings_bluetooth.settings_brightness.settings_cell.settings_ethernet.settings_input_antenna.settings_input_component.settings_input_composite.settings_input_hdmi.settings_input_svideo.settings_overscan.settings_phone.settings_power.settings_remote.settings_suggest.settings_system_daydream.settings_voice.severe_cold.shape_line.share.share_location.shield.shield_moon.shop.shop_2.shop_two.shopping_bag.shopping_basket.shopping_cart.shopping_cart_checkout.short_text.shortcut.show_chart.shower.shuffle.shuffle_on.shutter_speed.sick.sign_language.signal_cellular_0_bar.signal_cellular_4_bar.signal_cellular_alt.signal_cellular_alt_1_bar.signal_cellular_alt_2_bar.signal_cellular_connected_no_internet_0_bar.signal_cellular_connected_no_internet_4_bar.signal_cellular_no_sim.signal_cellular_nodata.signal_cellular_null.signal_cellular_off.signal_wifi_0_bar.signal_wifi_4_bar.signal_wifi_4_bar_lock.signal_wifi_bad.signal_wifi_connected_no_internet_4.signal_wifi_off.signal_wifi_statusbar_4_bar.signal_wifi_statusbar_connected_no_internet_4.signal_wifi_statusbar_null.signpost.sim_card.sim_card_alert.sim_card_download.single_bed.sip.skateboarding.skip_next.skip_previous.sledding.slideshow.slow_motion_video.smart_button.smart_display.smart_screen.smart_toy.smartphone.smoke_free.smoking_rooms.sms.sms_failed.snippet_folder.snooze.snowboarding.snowmobile.snowshoeing.soap.social_distance.solar_power.sort.sort_by_alpha.sos.soup_kitchen.source.south.south_america.south_east.south_west.spa.space_bar.space_dashboard.spatial_audio.spatial_audio_off.spatial_tracking.speaker.speaker_group.speaker_notes.speaker_notes_off.speaker_phone.speed.spellcheck.splitscreen.spoke.sports.sports_bar.sports_baseball.sports_basketball.sports_cricket.sports_esports.sports_football.sports_golf.sports_gymnastics.sports_handball.sports_hockey.sports_kabaddi.sports_martial_arts.sports_mma.sports_motorsports.sports_rugby.sports_score.sports_soccer.sports_tennis.sports_volleyball.square.square_foot.ssid_chart.stacked_bar_chart.stacked_line_chart.stadium.stairs.star.star_border.star_border_purple500.star_half.star_outline.star_purple500.star_rate.stars.start.stay_current_landscape.stay_current_portrait.stay_primary_landscape.stay_primary_portrait.sticky_note_2.stop.stop_circle.stop_screen_share.storage.store.store_mall_directory.storefront.storm.straight.straighten.stream.streetview.strikethrough_s.stroller.style.subdirectory_arrow_left.subdirectory_arrow_right.subject.subscript.subscriptions.subtitles.subtitles_off.subway.summarize.superscript.supervised_user_circle.supervisor_account.support.support_agent.surfing.surround_sound.swap_calls.swap_horiz.swap_horizontal_circle.swap_vert.swap_vertical_circle.swipe.swipe_down.swipe_down_alt.swipe_left.swipe_left_alt.swipe_right.swipe_right_alt.swipe_up.swipe_up_alt.swipe_vertical.switch_access_shortcut.switch_access_shortcut_add.switch_account.switch_camera.switch_left.switch_right.switch_video.synagogue.sync.sync_alt.sync_disabled.sync_lock.sync_problem.system_security_update.system_security_update_good.system_security_update_warning.system_update.system_update_alt.tab.tab_unselected.table_bar.table_chart.table_restaurant.table_rows.table_view.tablet.tablet_android.tablet_mac.tag.tag_faces.takeout_dining.tap_and_play.tapas.task.task_alt.taxi_alert.temple_buddhist.temple_hindu.terminal.terrain.text_decrease.text_fields.text_format.text_increase.text_rotate_up.text_rotate_vertical.text_rotation_angledown.text_rotation_angleup.text_rotation_down.text_rotation_none.text_snippet.textsms.texture.theater_comedy.theaters.thermostat.thermostat_auto.thumb_down.thumb_down_alt.thumb_down_off_alt.thumb_up.thumb_up_alt.thumb_up_off_alt.thumbs_up_down.thunderstorm.time_to_leave.timelapse.timeline.timer.timer_10.timer_10_select.timer_3.timer_3_select.timer_off.tips_and_updates.tire_repair.title.toc.today.toggle_off.toggle_on.token.toll.tonality.topic.tornado.touch_app.tour.toys.track_changes.traffic.train.tram.transcribe.transfer_within_a_station.transform.transgender.transit_enterexit.translate.travel_explore.trending_down.trending_flat.trending_up.trip_origin.troubleshoot.try.tsunami.tty.tune.tungsten.turn_left.turn_right.turn_sharp_left.turn_sharp_right.turn_slight_left.turn_slight_right.turned_in.turned_in_not.tv.tv_off.two_wheeler.type_specimen.u_turn_left.u_turn_right.umbrella.unarchive.undo.unfold_less.unfold_less_double.unfold_more.unfold_more_double.unpublished.unsubscribe.upcoming.update.update_disabled.upgrade.upload.upload_file.usb.usb_off.vaccines.vape_free.vaping_rooms.verified.verified_user.vertical_align_bottom.vertical_align_center.vertical_align_top.vertical_distribute.vertical_shades.vertical_shades_closed.vertical_split.vibration.video_call.video_camera_back.video_camera_front.video_chat.video_file.video_label.video_library.video_settings.video_stable.videocam.videocam_off.videogame_asset.videogame_asset_off.view_agenda.view_array.view_carousel.view_column.view_comfy.view_comfy_alt.view_compact.view_compact_alt.view_cozy.view_day.view_headline.view_in_ar.view_kanban.view_list.view_module.view_quilt.view_sidebar.view_stream.view_timeline.view_week.vignette.villa.visibility.visibility_off.voice_chat.voice_over_off.voicemail.volcano.volume_down.volume_mute.volume_off.volume_up.volunteer_activism.vpn_key.vpn_key_off.vpn_lock.vrpano.wallet.wallpaper.warehouse.warning.warning_amber.wash.watch.watch_later.watch_off.water.water_damage.water_drop.waterfall_chart.waves.waving_hand.wb_auto.wb_cloudy.wb_incandescent.wb_iridescent.wb_shade.wb_sunny.wb_twilight.wc.web.web_asset.web_asset_off.web_stories.webhook.weekend.west.whatshot.wheelchair_pickup.where_to_vote.widgets.width_full.width_normal.width_wide.wifi.wifi_1_bar.wifi_2_bar.wifi_calling.wifi_calling_3.wifi_channel.wifi_find.wifi_lock.wifi_off.wifi_password.wifi_protected_setup.wifi_tethering.wifi_tethering_error.wifi_tethering_off.wind_power.window.wine_bar.woman.woman_2.work.work_history.work_off.work_outline.workspace_premium.workspaces.wrap_text.wrong_location.wysiwyg.yard.youtube_searched_for.zoom_in.zoom_in_map.zoom_out.zoom_out_map".split(".");
//#endregion
//#region node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs
function rl(e) {
	return Array.isArray ? Array.isArray(e) : ml(e) === "[object Array]";
}
var il = Infinity;
function al(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -il ? "-0" : t;
}
function ol(e) {
	return e == null ? "" : al(e);
}
function sl(e) {
	return typeof e == "string";
}
function cl(e) {
	return typeof e == "number";
}
function ll(e) {
	return e === !0 || e === !1 || dl(e) && ml(e) == "[object Boolean]";
}
function ul(e) {
	return typeof e == "object";
}
function dl(e) {
	return ul(e) && e !== null;
}
function fl(e) {
	return e != null;
}
function pl(e) {
	return !e.trim().length;
}
function ml(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var hl = "Incorrect 'index' type", gl = (e) => `Invalid value for key ${e}`, _l = (e) => `Pattern length exceeds max of ${e}.`, vl = (e) => `Missing ${e} property in key`, yl = (e) => `Property 'weight' in key '${e}' must be a positive integer`, bl = Object.prototype.hasOwnProperty, xl = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = Sl(e);
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
function Sl(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (sl(e) || rl(e)) r = e, t = Cl(e), n = wl(e);
	else {
		if (!bl.call(e, "name")) throw Error(vl("name"));
		let o = e.name;
		if (r = o, bl.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(yl(o));
		t = Cl(o), n = wl(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function Cl(e) {
	return rl(e) ? e : e.split(".");
}
function wl(e) {
	return rl(e) ? e.join(".") : e;
}
function Tl(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (fl(e)) if (!t[a]) n.push(e);
		else {
			let o = e[t[a]];
			if (!fl(o)) return;
			if (a === t.length - 1 && (sl(o) || cl(o) || ll(o))) n.push(ol(o));
			else if (rl(o)) {
				r = !0;
				for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
			} else t.length && i(o, t, a + 1);
		}
	};
	return i(e, sl(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var El = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, Dl = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, Ol = {
	location: 0,
	threshold: .6,
	distance: 100
}, kl = {
	useExtendedSearch: !1,
	getFn: Tl,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, R = {
	...Dl,
	...El,
	...Ol,
	...kl
}, Al = /[^ ]+/g;
function jl(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(Al).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var Ml = class {
	constructor({ getFn: e = R.getFn, fieldNormWeight: t = R.fieldNormWeight } = {}) {
		this.norm = jl(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
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
		this.isCreated || !this.docs.length || (this.isCreated = !0, sl(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		sl(e) ? this._addString(e, t) : this._addObject(e, t);
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
		if (!fl(e) || pl(e)) return;
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
			if (fl(i)) {
				if (rl(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (fl(r)) if (sl(r) && !pl(r)) {
							let t = {
								v: r,
								i: n,
								n: this.norm.get(r)
							};
							e.push(t);
						} else rl(r) && r.forEach((e, n) => {
							t.push({
								nestedArrIndex: n,
								value: e
							});
						});
					}
					n.$[r] = e;
				} else if (sl(i) && !pl(i)) {
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
function Nl(e, t, { getFn: n = R.getFn, fieldNormWeight: r = R.fieldNormWeight } = {}) {
	let i = new Ml({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(Sl)), i.setSources(t), i.create(), i;
}
function Pl(e, { getFn: t = R.getFn, fieldNormWeight: n = R.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new Ml({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function Fl(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = R.distance, ignoreLocation: a = R.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function Il(e = [], t = R.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var Ll = 32;
function Rl(e, t, n, { location: r = R.location, distance: i = R.distance, threshold: a = R.threshold, findAllMatches: o = R.findAllMatches, minMatchCharLength: s = R.minMatchCharLength, includeMatches: c = R.includeMatches, ignoreLocation: l = R.ignoreLocation } = {}) {
	if (t.length > Ll) throw Error(_l(Ll));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = Fl(t, {
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
		for (; a < s;) Fl(t, {
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
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = Fl(t, {
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
		if (Fl(t, {
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
		let e = Il(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function zl(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var Bl = String.prototype.normalize ? ((e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((e) => e), Vl = class {
	constructor(e, { location: t = R.location, threshold: n = R.threshold, distance: r = R.distance, includeMatches: i = R.includeMatches, findAllMatches: a = R.findAllMatches, minMatchCharLength: o = R.minMatchCharLength, isCaseSensitive: s = R.isCaseSensitive, ignoreDiacritics: c = R.ignoreDiacritics, ignoreLocation: l = R.ignoreLocation } = {}) {
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
		}, e = s ? e : e.toLowerCase(), e = c ? Bl(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: zl(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > Ll) {
			let e = 0, t = d % Ll, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, Ll), e), e += Ll;
			if (t) {
				let e = d - Ll;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Bl(e) : e, this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = Rl(e, t, n, {
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
}, Hl = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return Ul(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return Ul(e, this.singleRegex);
	}
	search() {}
};
function Ul(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Wl = class extends Hl {
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
}, Gl = class extends Hl {
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
}, Kl = class extends Hl {
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
}, ql = class extends Hl {
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
}, Jl = class extends Hl {
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
}, Yl = class extends Hl {
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
}, Xl = class extends Hl {
	constructor(e, { location: t = R.location, threshold: n = R.threshold, distance: r = R.distance, includeMatches: i = R.includeMatches, findAllMatches: a = R.findAllMatches, minMatchCharLength: o = R.minMatchCharLength, isCaseSensitive: s = R.isCaseSensitive, ignoreDiacritics: c = R.ignoreDiacritics, ignoreLocation: l = R.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new Vl(e, {
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
}, Zl = class extends Hl {
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
}, Ql = [
	Wl,
	Zl,
	Kl,
	ql,
	Yl,
	Jl,
	Gl,
	Xl
], $l = Ql.length, eu = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, tu = "|";
function nu(e, t = {}) {
	return e.split(tu).map((e) => {
		let n = e.trim().split(eu).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < $l;) {
				let e = Ql[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < $l;) {
				let e = Ql[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var ru = new Set([Xl.type, Zl.type]), iu = class {
	constructor(e, { isCaseSensitive: t = R.isCaseSensitive, ignoreDiacritics: n = R.ignoreDiacritics, includeMatches: r = R.includeMatches, minMatchCharLength: i = R.minMatchCharLength, ignoreLocation: a = R.ignoreLocation, findAllMatches: o = R.findAllMatches, location: s = R.location, threshold: c = R.threshold, distance: l = R.distance } = {}) {
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
		}, e = t ? e : e.toLowerCase(), e = n ? Bl(e) : e, this.pattern = e, this.query = nu(this.pattern, this.options);
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
		e = r ? e : e.toLowerCase(), e = i ? Bl(e) : e;
		let a = 0, o = [], s = 0;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (a += 1, s += u, n) {
						let e = r.constructor.type;
						ru.has(e) ? o = [...o, ...l] : o.push(l);
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
}, au = [];
function ou(...e) {
	au.push(...e);
}
function su(e, t) {
	for (let n = 0, r = au.length; n < r; n += 1) {
		let r = au[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new Vl(e, t);
}
var cu = {
	AND: "$and",
	OR: "$or"
}, lu = {
	PATH: "$path",
	PATTERN: "$val"
}, uu = (e) => !!(e[cu.AND] || e[cu.OR]), du = (e) => !!e[lu.PATH], fu = (e) => !rl(e) && ul(e) && !uu(e), pu = (e) => ({ [cu.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function mu(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = du(e);
		if (!a && i.length > 1 && !uu(e)) return r(pu(e));
		if (fu(e)) {
			let r = a ? e[lu.PATH] : i[0], o = a ? e[lu.PATTERN] : e[r];
			if (!sl(o)) throw Error(gl(r));
			let s = {
				keyId: wl(r),
				pattern: o
			};
			return n && (s.searcher = su(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			rl(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return uu(e) || (e = pu(e)), r(e);
}
function hu(e, { ignoreFieldNorm: t = R.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function gu(e, t) {
	let n = e.matches;
	t.matches = [], fl(n) && n.forEach((e) => {
		if (!fl(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function _u(e, t) {
	t.score = e.score;
}
function vu(e, t, { includeMatches: n = R.includeMatches, includeScore: r = R.includeScore } = {}) {
	let i = [];
	return n && i.push(gu), r && i.push(_u), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var yu = class {
	constructor(e, t = {}, n) {
		this.options = {
			...R,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new xl(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof Ml)) throw Error(hl);
		this._myIndex = t || Nl(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		fl(e) && (this._docs.push(e), this._myIndex.add(e));
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
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = sl(e) ? sl(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return hu(s, { ignoreFieldNorm: o }), i && s.sort(a), cl(t) && t > -1 && (s = s.slice(0, t)), vu(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = su(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!fl(e)) return;
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
		let t = mu(e, this.options), n = (e, t, r) => {
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
				else if (e.operator === cu.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (fl(e)) {
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
		let t = su(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!fl(e)) return;
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
		if (!fl(t)) return [];
		let r = [];
		if (rl(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!fl(t)) return;
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
yu.version = "7.1.0", yu.createIndex = Nl, yu.parseIndex = Pl, yu.config = R, yu.parseQuery = mu, ou(iu);
//#endregion
//#region src/card-carousel/studio-ui/components/secondary-content/IconSelector/index.tsx
function bu({ currentIcon: e, onIconSelected: t }) {
	let n = /* @__PURE__ */ "search.home.info.check_circle.delete.visibility.book.favorite.description.lock.schedule.language.help_outline.verified.face.thumb_up.filter_alt.dashboard.event.fingerprint.list.help.paid.assignment.question_answer.article.lightbulb.credit_card.account_balance.trending_up".split("."), [r, i] = (0, E.useState)(n), [a, o] = (0, E.useState)(!1), s = (0, E.useRef)(null), c = new yu(nl, {
		threshold: .3,
		minMatchCharLength: 2
	});
	(0, E.useEffect)(() => {
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
	return /* @__PURE__ */ (0, L.jsxs)(m, {
		variant: e ? "outline-dark" : "success",
		ref: s,
		className: "d-block icon-selector pb-1",
		onClick: () => o(!0),
		children: [/* @__PURE__ */ (0, L.jsx)("span", {
			className: "material-icons mb-0",
			children: e || "add"
		}), /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "icon-list-popup border rounded-sm shadow",
			style: { display: a ? "block" : "none" },
			children: [/* @__PURE__ */ (0, L.jsx)(M.Group, {
				size: "sm",
				children: /* @__PURE__ */ (0, L.jsx)(M.Control, {
					type: "text",
					className: "m-0",
					placeholder: "Search icons",
					trailingElement: /* @__PURE__ */ (0, L.jsx)("span", {
						className: "material-icons medium text-gray-500",
						children: "search"
					}),
					onChange: l
				})
			}), /* @__PURE__ */ (0, L.jsx)("div", {
				className: "icon-list d-flex flex-wrap justify-items-start",
				children: r.map((e) => /* @__PURE__ */ (0, L.jsx)(m, {
					variant: "link",
					className: "icon-symbol p-2",
					onClick: (t) => u(t, e),
					children: /* @__PURE__ */ (0, L.jsx)("span", {
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
function xu({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = xc(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items[t];
	return /* @__PURE__ */ (0, L.jsx)(tl, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, {
				className: "x-small",
				children: "Main Text"
			}), /* @__PURE__ */ (0, L.jsx)(M.Control, {
				name: `${o}.description`,
				value: s.description,
				onChange: i
			})] }), /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, L.jsxs)(M.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, L.jsx)(M.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, L.jsx)(bu, {
						currentIcon: s.icon || "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, L.jsxs)(M.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, L.jsx)(M.Label, {
						className: "x-small",
						children: "Hover Text"
					}), /* @__PURE__ */ (0, L.jsx)(M.Control, {
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
function Su({ cardIndex: e }) {
	return /* @__PURE__ */ (0, L.jsx)($c, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, L.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, L.jsx)(xu, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, L.jsx)(m, {
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
function Cu({ cardIndex: e }) {
	let { values: t, handleChange: n, setFieldValue: r } = xc(), [i, a] = (0, E.useState)(!1), o = `cards[${e}].secondaryContent`, s = t.cards[e].secondaryContent;
	function c(e) {
		a(e.currentTarget.checked), e.currentTarget.checked && r(`${o}.altText`, "");
	}
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Image Source URL" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
		name: `${o}.location`,
		value: s.location,
		onChange: n,
		placeholder: "URL"
	})] }), /* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [
		/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Alt Text" }),
		/* @__PURE__ */ (0, L.jsx)("div", {
			className: "mb-0",
			children: /* @__PURE__ */ (0, L.jsx)(M.Checkbox, {
				checked: i,
				onChange: c,
				size: "sm",
				children: "Decorative Image"
			})
		}),
		/* @__PURE__ */ (0, L.jsx)(M.Control, {
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
function wu({ cardIndex: e, itemIndex: t, onRemove: n }) {
	let { values: r, handleChange: i, setFieldValue: a } = xc(), o = `cards[${e}].secondaryContent.items[${t}]`, s = r.cards[e].secondaryContent.items?.[t];
	return /* @__PURE__ */ (0, L.jsx)(tl, {
		heading: `List Item ${t + 1}`,
		index: t,
		onRemoveItem: n,
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "p-2",
			children: [/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "d-flex",
				children: [/* @__PURE__ */ (0, L.jsxs)(M.Group, {
					className: "flex-grow-0",
					children: [/* @__PURE__ */ (0, L.jsx)(M.Label, {
						className: "x-small",
						children: "Icon"
					}), /* @__PURE__ */ (0, L.jsx)(bu, {
						currentIcon: s?.icon ?? "",
						onIconSelected: (e) => a(`${o}.icon`, e)
					})]
				}), /* @__PURE__ */ (0, L.jsxs)(M.Group, {
					className: "flex-grow-1 ml-2",
					children: [/* @__PURE__ */ (0, L.jsx)(M.Label, {
						className: "x-small",
						children: "Heading"
					}), /* @__PURE__ */ (0, L.jsx)(M.Control, {
						type: "text",
						name: `${o}.title`,
						value: s?.title ?? "",
						onChange: i
					})]
				})]
			}), /* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, {
				className: "x-small",
				children: "Description"
			}), /* @__PURE__ */ (0, L.jsx)(M.Control, {
				as: "textarea",
				autoResize: !0,
				name: `${o}.description`,
				value: s?.description ?? "",
				onChange: i
			})] })]
		})
	});
}
function Tu({ cardIndex: e }) {
	return /* @__PURE__ */ (0, L.jsx)($c, {
		name: `cards[${e}].secondaryContent.items`,
		children: ({ push: t, remove: n, form: r }) => {
			let i = r.values.cards[e].secondaryContent.items;
			return /* @__PURE__ */ (0, L.jsxs)("div", { children: [i.map((t, r) => /* @__PURE__ */ (0, L.jsx)(wu, {
				cardIndex: e,
				itemIndex: r,
				onRemove: () => n(r)
			}, r)), /* @__PURE__ */ (0, L.jsx)(m, {
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
function Eu({ cardIndex: e }) {
	let { values: t, handleChange: n } = xc(), r = `cards[${e}].secondaryContent`, i = t.cards[e].secondaryContent;
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
		/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Title" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
			name: `${r}.title`,
			value: i.title,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
			name: `${r}.subtitle`,
			value: i.subtitle,
			onChange: n
		})] }),
		/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Description" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
			as: "textarea",
			name: `${r}.description`,
			value: i.description,
			onChange: n
		})] })
	] });
}
//#endregion
//#region src/card-carousel/studio-ui/components/CardEditor.tsx
function Du(e) {
	switch (e) {
		case p.IMAGE: return {
			location: "",
			altText: ""
		};
		case p.CONTENT_HIGHLIGHT: return {
			title: "",
			subtitle: "",
			description: ""
		};
		case p.RICH_LIST: return { items: [{
			icon: "",
			title: "",
			description: ""
		}] };
		case p.HOVER_LIST: return { items: [{
			icon: "",
			description: "",
			hoverContent: ""
		}] };
		default: return {
			location: "",
			altText: ""
		};
	}
}
var Ou = {
	[p.IMAGE]: Cu,
	[p.RICH_LIST]: Tu,
	[p.CONTENT_HIGHLIGHT]: Eu,
	[p.HOVER_LIST]: Su
};
function ku({ cardIndex: e, cardType: t }) {
	let { values: n, handleChange: r, handleBlur: i, setFieldValue: a } = xc(), [o, s] = (0, E.useState)(!1), c = n.cards[e], l = `cards[${e}]`, u = Ou[t];
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "row mt-5",
		children: [/* @__PURE__ */ (0, L.jsxs)("div", {
			className: "col border-right",
			children: [
				/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Title" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
					name: `${l}.title`,
					value: c.title,
					onChange: r,
					onBlur: i
				})] }),
				/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Subtitle" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
					name: `${l}.subtitle`,
					value: c.subtitle,
					onChange: r,
					onBlur: i
				})] }),
				t !== p.HOVER_LIST && /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
					/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Body Content" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
						as: "textarea",
						name: `${l}.description`,
						value: c?.description ?? "",
						onChange: r,
						onBlur: i
					})] }),
					/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Checkbox, {
						checked: o,
						onChange: (e) => {
							s(e.currentTarget.checked), e.currentTarget.checked || (a(`${l}.ctaLabel`, ""), a(`${l}.ctaLink`, ""));
						},
						children: "Add a button"
					}), /* @__PURE__ */ (0, L.jsx)(M.Text, { children: "Link to another page or resource" })] }),
					o && /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Button Label" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
						name: `${l}.ctaLabel`,
						value: c?.ctaLabel ?? "",
						onChange: r
					})] }), /* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Button Link" }), /* @__PURE__ */ (0, L.jsx)(M.Control, {
						name: `${l}.ctaLink`,
						value: c?.ctaLink ?? "",
						onChange: r
					})] })] })
				] })
			]
		}), /* @__PURE__ */ (0, L.jsx)("div", {
			className: "col",
			children: u && /* @__PURE__ */ (0, L.jsx)(u, { cardIndex: e })
		})]
	});
}
function Au({ cardIndex: e }) {
	let { values: t, setFieldValue: n, handleChange: r, handleBlur: i } = xc(), a = t.cards[e], o = `cards[${e}]`;
	return /* @__PURE__ */ (0, L.jsxs)("div", { children: [
		/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [
			/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Card Name" }),
			/* @__PURE__ */ (0, L.jsx)(M.Text, {
				className: "micro",
				children: "Name of the card in Studio"
			}),
			/* @__PURE__ */ (0, L.jsx)(M.Control, {
				name: `${o}.name`,
				value: a.name,
				onChange: r,
				onBlur: i
			})
		] }),
		/* @__PURE__ */ (0, L.jsxs)(M.Group, { children: [/* @__PURE__ */ (0, L.jsx)(M.Label, { children: "Supporting Content" }), /* @__PURE__ */ (0, L.jsxs)(M.Control, {
			as: "select",
			name: `${o}.cardType`,
			value: a.cardType ?? p.UNKNOWN,
			onChange: (e) => {
				n(`${o}.cardType`, e.currentTarget.value), n(`${o}.secondaryContent`, Du(e.currentTarget.value));
			},
			onBlur: i,
			children: [
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: p.UNKNOWN,
					children: "Choose Content Type"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: p.IMAGE,
					children: "Image"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: p.CONTENT_HIGHLIGHT,
					children: "Highlighted Text"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: p.RICH_LIST,
					children: "Icon List"
				}),
				/* @__PURE__ */ (0, L.jsx)("option", {
					value: p.HOVER_LIST,
					children: "Interactive List"
				})
			]
		})] }),
		a.cardType !== p.UNKNOWN && /* @__PURE__ */ (0, L.jsx)(ku, {
			cardIndex: e,
			cardType: a.cardType
		})
	] });
}
//#endregion
//#region node_modules/.pnpm/@preact+signals-core@1.14.1/node_modules/@preact/signals-core/dist/signals-core.module.js
var ju = Symbol.for("preact-signals");
function Mu() {
	if (Fu > 1) Fu--;
	else {
		var e, t = !1;
		for ((function() {
			var e = zu;
			for (zu = void 0; e !== void 0;) e.S.v === e.v && (e.S.i = e.i), e = e.o;
		})(); Pu !== void 0;) {
			var n = Pu;
			for (Pu = void 0, Iu++; n !== void 0;) {
				var r = n.u;
				if (n.u = void 0, n.f &= -3, !(8 & n.f) && Wu(n)) try {
					n.c();
				} catch (n) {
					t ||= (e = n, !0);
				}
				n = r;
			}
		}
		if (Iu = 0, Fu--, t) throw e;
	}
}
function z(e) {
	if (Fu > 0) return e();
	Ru = ++Lu, Fu++;
	try {
		return e();
	} finally {
		Mu();
	}
}
var B = void 0;
function V(e) {
	var t = B;
	B = void 0;
	try {
		return e();
	} finally {
		B = t;
	}
}
var Nu, Pu = void 0, Fu = 0, Iu = 0, Lu = 0, Ru = 0, zu = void 0, Bu = 0;
function Vu(e) {
	if (B !== void 0) {
		var t = e.n;
		if (t === void 0 || t.t !== B) return t = {
			i: 0,
			S: e,
			p: B.s,
			n: void 0,
			t: B,
			e: void 0,
			x: void 0,
			r: t
		}, B.s !== void 0 && (B.s.n = t), B.s = t, e.n = t, 32 & B.f && e.S(t), t;
		if (t.i === -1) return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = B.s, t.n = void 0, B.s.n = t, B.s = t), t;
	}
}
function Hu(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
Hu.prototype.brand = ju, Hu.prototype.h = function() {
	return !0;
}, Hu.prototype.S = function(e) {
	var t = this, n = this.t;
	n !== e && e.e === void 0 && (e.x = n, this.t = e, n === void 0 ? V(function() {
		var e;
		(e = t.W) == null || e.call(t);
	}) : n.e = e);
}, Hu.prototype.U = function(e) {
	var t = this;
	if (this.t !== void 0) {
		var n = e.e, r = e.x;
		n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && V(function() {
			var e;
			(e = t.Z) == null || e.call(t);
		}));
	}
}, Hu.prototype.subscribe = function(e) {
	var t = this;
	return $u(function() {
		var n = t.value, r = B;
		B = void 0;
		try {
			e(n);
		} finally {
			B = r;
		}
	}, { name: "sub" });
}, Hu.prototype.valueOf = function() {
	return this.value;
}, Hu.prototype.toString = function() {
	return this.value + "";
}, Hu.prototype.toJSON = function() {
	return this.value;
}, Hu.prototype.peek = function() {
	var e = B;
	B = void 0;
	try {
		return this.value;
	} finally {
		B = e;
	}
}, Object.defineProperty(Hu.prototype, "value", {
	get: function() {
		var e = Vu(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set: function(e) {
		if (e !== this.v) {
			if (Iu > 100) throw Error("Cycle detected");
			(function(e) {
				Fu !== 0 && Iu === 0 && e.l !== Ru && (e.l = Ru, zu = {
					S: e,
					v: e.v,
					i: e.i,
					o: zu
				});
			})(this), this.v = e, this.i++, Bu++, Fu++;
			try {
				for (var t = this.t; t !== void 0; t = t.x) t.t.N();
			} finally {
				Mu();
			}
		}
	}
});
function Uu(e, t) {
	return new Hu(e, t);
}
function Wu(e) {
	for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Gu(e) {
	for (var t = e.s; t !== void 0; t = t.n) {
		var n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Ku(e) {
	for (var t = e.s, n = void 0; t !== void 0;) {
		var r = t.p;
		t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
	}
	e.s = n;
}
function qu(e, t) {
	Hu.call(this, void 0), this.x = e, this.s = void 0, this.g = Bu - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
qu.prototype = new Hu(), qu.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Bu)) return !0;
	if (this.g = Bu, this.f |= 1, this.i > 0 && !Wu(this)) return this.f &= -2, !0;
	var e = B;
	try {
		Gu(this), B = this;
		var t = this.x();
		(16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return B = e, Ku(this), this.f &= -2, !0;
}, qu.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
	}
	Hu.prototype.S.call(this, e);
}, qu.prototype.U = function(e) {
	if (this.t !== void 0 && (Hu.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
	}
}, qu.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (var e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(qu.prototype, "value", { get: function() {
	if (1 & this.f) throw Error("Cycle detected");
	var e = Vu(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} });
function Ju(e, t) {
	return new qu(e, t);
}
function Yu(e) {
	var t = e.m;
	if (e.m = void 0, typeof t == "function") {
		Fu++;
		var n = B;
		B = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, Xu(e), t;
		} finally {
			B = n, Mu();
		}
	}
}
function Xu(e) {
	for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, Yu(e);
}
function Zu(e) {
	if (B !== this) throw Error("Out-of-order effect");
	Ku(this), B = e, this.f &= -2, 8 & this.f && Xu(this), Mu();
}
function Qu(e, t) {
	this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t?.name, Nu && Nu.push(this);
}
Qu.prototype.c = function() {
	var e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		var t = this.x();
		typeof t == "function" && (this.m = t);
	} finally {
		e();
	}
}, Qu.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, Yu(this), Gu(this), Fu++;
	var e = B;
	return B = this, Zu.bind(this, e);
}, Qu.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.u = Pu, Pu = this);
}, Qu.prototype.d = function() {
	this.f |= 8, 1 & this.f || Xu(this);
}, Qu.prototype.dispose = function() {
	this.d();
};
function $u(e, t) {
	var n = new Qu(e, t);
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
var ed = Object.create, td = Object.defineProperty, nd = Object.defineProperties, rd = Object.getOwnPropertyDescriptor, id = Object.getOwnPropertyDescriptors, ad = Object.getOwnPropertySymbols, od = Object.prototype.hasOwnProperty, sd = Object.prototype.propertyIsEnumerable, cd = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ld = (e) => {
	throw TypeError(e);
}, ud = (e, t, n) => t in e ? td(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, dd = (e, t) => {
	for (var n in t ||= {}) od.call(t, n) && ud(e, n, t[n]);
	if (ad) for (var n of ad(t)) sd.call(t, n) && ud(e, n, t[n]);
	return e;
}, fd = (e, t) => nd(e, id(t)), pd = (e, t) => td(e, "name", {
	value: t,
	configurable: !0
}), md = (e) => [
	,
	,
	,
	ed(e?.[cd("metadata")] ?? null)
], hd = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], gd = (e) => e !== void 0 && typeof e != "function" ? ld("Function expected") : e, _d = (e, t, n, r, i) => ({
	kind: hd[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? ld("Already initialized") : i.push(gd(e || null))
}), vd = (e, t) => ud(t, cd("metadata"), e[3]), yd = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, bd = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = hd[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && rd(d < 4 ? i : {
		get [n]() {
			return Cd(this, a);
		},
		set [n](e) {
			return Td(this, a, e);
		}
	}, n));
	d ? p && d < 4 && pd(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : pd(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = _d(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Sd(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Cd : Ed)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Td(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? gd(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? ld("Object expected") : (gd(o = s.get) && (v.get = o), gd(o = s.set) && (v.set = o), gd(o = s.init) && g.unshift(o));
	return d || vd(e, i), v && td(i, n, v), p ? d ^ 4 ? a : v : i;
}, xd = (e, t, n) => t.has(e) || ld("Cannot " + n), Sd = (e, t) => Object(t) === t ? e.has(t) : ld("Cannot use the \"in\" operator on this value"), Cd = (e, t, n) => (xd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wd = (e, t, n) => t.has(e) ? ld("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Td = (e, t, n, r) => (xd(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ed = (e, t, n) => (xd(e, t, "access private method"), n);
function Dd(e, t) {
	if (t) {
		let n;
		return Ju(() => {
			let r = e();
			return r && n && t(n, r) ? n : (n = r, r);
		});
	}
	return Ju(e);
}
function Od(e, t) {
	if (Object.is(e, t)) return !0;
	if (e === null || t === null) return !1;
	if (typeof e == "function" && typeof t == "function") return e === t;
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some((e, n) => !Od(e, t[n]));
	if (typeof e == "object" && typeof t == "object") {
		let n = Object.keys(e), r = Object.keys(t);
		return n.length === r.length ? !n.some((n) => !Od(e[n], t[n])) : !1;
	}
	return !1;
}
function H({ get: e }, t) {
	return {
		init(e) {
			return Uu(e);
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
function U(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	return function() {
		let t = n.get(this);
		return t || (t = Dd(e.bind(this)), n.set(this, t)), t.value;
	};
}
function kd(e = !0) {
	return function(t, n) {
		n.addInitializer(function() {
			let t = n.kind === "field" || n.static ? this : Object.getPrototypeOf(this), r = Object.getOwnPropertyDescriptor(t, n.name);
			r && Object.defineProperty(t, n.name, fd(dd({}, r), { enumerable: e }));
		});
	};
}
function Ad(...e) {
	let t = e.map((e) => $u(e));
	return () => t.forEach((e) => e());
}
var jd, Md, Nd, Pd, Fd, Id = [H], Ld, Rd, zd, Bd, Vd, Hd, Ud, Wd, Gd, Kd, qd, Jd, Yd, Xd;
Fd = [H], Pd = [H], Nd = [kd()], Md = [kd()], jd = [kd()];
var Zd = class {
	constructor(e, t = Object.is) {
		this.defaultValue = e, this.equals = t, yd(Ld, 5, this), wd(this, Hd), wd(this, Rd, yd(Ld, 8, this)), yd(Ld, 11, this), wd(this, Ud, yd(Ld, 12, this)), yd(Ld, 15, this), wd(this, qd, yd(Ld, 16, this)), yd(Ld, 19, this), this.reset = this.reset.bind(this), this.reset();
	}
	get current() {
		return Cd(this, Hd, Yd);
	}
	get initial() {
		return Cd(this, Hd, Bd);
	}
	get previous() {
		return Cd(this, Hd, Gd);
	}
	set current(e) {
		let t = V(() => Cd(this, Hd, Yd));
		e && t && this.equals(t, e) || z(() => {
			Cd(this, Hd, Bd) || Td(this, Hd, e, Vd), Td(this, Hd, t, Kd), Td(this, Hd, e, Xd);
		});
	}
	reset(e = this.defaultValue) {
		z(() => {
			Td(this, Hd, void 0, Kd), Td(this, Hd, e, Vd), Td(this, Hd, e, Xd);
		});
	}
};
Ld = md(null), Rd = /* @__PURE__ */ new WeakMap(), Hd = /* @__PURE__ */ new WeakSet(), Ud = /* @__PURE__ */ new WeakMap(), qd = /* @__PURE__ */ new WeakMap(), zd = bd(Ld, 20, "#initial", Id, Hd, Rd), Bd = zd.get, Vd = zd.set, Wd = bd(Ld, 20, "#previous", Fd, Hd, Ud), Gd = Wd.get, Kd = Wd.set, Jd = bd(Ld, 20, "#current", Pd, Hd, qd), Yd = Jd.get, Xd = Jd.set, bd(Ld, 2, "current", Nd, Zd), bd(Ld, 2, "initial", Md, Zd), bd(Ld, 2, "previous", jd, Zd), vd(Ld, Zd);
function Qd(e) {
	return V(() => {
		let t = {};
		for (let n in e) t[n] = e[n];
		return t;
	});
}
var $d, ef = class {
	constructor() {
		wd(this, $d, /* @__PURE__ */ new WeakMap());
	}
	get(e, t) {
		return e ? Cd(this, $d).get(e)?.get(t) : void 0;
	}
	set(e, t, n) {
		if (e) return Cd(this, $d).has(e) || Cd(this, $d).set(e, /* @__PURE__ */ new Map()), Cd(this, $d).get(e)?.set(t, n);
	}
	clear(e) {
		return e ? Cd(this, $d).get(e)?.clear() : void 0;
	}
};
$d = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/@dnd-kit+geometry@0.3.2/node_modules/@dnd-kit/geometry/dist/index.mjs
var tf = Object.create, nf = Object.defineProperty, rf = Object.getOwnPropertyDescriptor, af = Object.getOwnPropertySymbols, of = Object.prototype.hasOwnProperty, sf = Object.prototype.propertyIsEnumerable, cf = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), lf = (e) => {
	throw TypeError(e);
}, uf = Math.pow, df = (e, t, n) => t in e ? nf(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ff = (e, t) => {
	for (var n in t ||= {}) of.call(t, n) && df(e, n, t[n]);
	if (af) for (var n of af(t)) sf.call(t, n) && df(e, n, t[n]);
	return e;
}, pf = (e, t) => nf(e, "name", {
	value: t,
	configurable: !0
}), mf = (e) => [
	,
	,
	,
	tf(e?.[cf("metadata")] ?? null)
], hf = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], gf = (e) => e !== void 0 && typeof e != "function" ? lf("Function expected") : e, _f = (e, t, n, r, i) => ({
	kind: hf[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? lf("Already initialized") : i.push(gf(e || null))
}), vf = (e, t) => df(t, cf("metadata"), e[3]), yf = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, bf = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = hf[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && rf(d < 4 ? i : {
		get [n]() {
			return Cf(this, a);
		},
		set [n](e) {
			return Tf(this, a, e);
		}
	}, n));
	d ? p && d < 4 && pf(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : pf(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = _f(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => Sf(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Cf : Ef)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => Tf(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? gf(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? lf("Object expected") : (gf(o = s.get) && (v.get = o), gf(o = s.set) && (v.set = o), gf(o = s.init) && g.unshift(o));
	return d || vf(e, i), v && nf(i, n, v), p ? d ^ 4 ? a : v : i;
}, xf = (e, t, n) => t.has(e) || lf("Cannot " + n), Sf = (e, t) => Object(t) === t ? e.has(t) : lf("Cannot use the \"in\" operator on this value"), Cf = (e, t, n) => (xf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wf = (e, t, n) => t.has(e) ? lf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Tf = (e, t, n, r) => (xf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ef = (e, t, n) => (xf(e, t, "access private method"), n), Df = class e {
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
}, Of = class e {
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
		return c.scale = ff({}, s), c;
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
		return new Df((e + n) / 2, (t + r) / 2);
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
		return t instanceof e ? kf(this, t) : 0;
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
		return Df.delta({
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
function kf(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	return r < i && n < a ? o * s : 0;
}
var Af, jf, Mf, Nf, Pf, Ff = class extends (Mf = Zd, jf = [U], Af = [U], Mf) {
	constructor(e) {
		let t = Df.from(e);
		super(t, (e, t) => Df.equals(e, t)), yf(Pf, 5, this), wf(this, Nf, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Df.delta(this.current, this.initial);
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
		let { current: t } = this, n = Df.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Cf(this, Nf), o = (e) => Math.round(e / a * 100);
		z(() => {
			Tf(this, Nf, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Df.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
Pf = mf(Mf), Nf = /* @__PURE__ */ new WeakMap(), bf(Pf, 2, "delta", jf, Ff), bf(Pf, 2, "direction", Af, Ff), vf(Pf, Ff);
function If({ x: e, y: t }, n) {
	let r = Math.abs(e), i = Math.abs(t);
	return typeof n == "number" ? Math.sqrt(uf(r, 2) + uf(i, 2)) > n : "x" in n && "y" in n ? r > n.x && i > n.y : "x" in n ? r > n.x : "y" in n ? i > n.y : !1;
}
var Lf = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Lf || {}), Rf = Object.values(Lf), zf = Object.create, Bf = Object.defineProperty, Vf = Object.defineProperties, Hf = Object.getOwnPropertyDescriptor, Uf = Object.getOwnPropertyDescriptors, Wf = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, Kf = Object.prototype.propertyIsEnumerable, qf = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Jf = (e) => {
	throw TypeError(e);
}, Yf = (e, t, n) => t in e ? Bf(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Xf = (e, t) => {
	for (var n in t ||= {}) Gf.call(t, n) && Yf(e, n, t[n]);
	if (Wf) for (var n of Wf(t)) Kf.call(t, n) && Yf(e, n, t[n]);
	return e;
}, Zf = (e, t) => Vf(e, Uf(t)), Qf = (e, t) => Bf(e, "name", {
	value: t,
	configurable: !0
}), $f = (e, t) => {
	var n = {};
	for (var r in e) Gf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && Wf) for (var r of Wf(e)) t.indexOf(r) < 0 && Kf.call(e, r) && (n[r] = e[r]);
	return n;
}, ep = (e) => [
	,
	,
	,
	zf(e?.[qf("metadata")] ?? null)
], tp = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], np = (e) => e !== void 0 && typeof e != "function" ? Jf("Function expected") : e, rp = (e, t, n, r, i) => ({
	kind: tp[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Jf("Already initialized") : i.push(np(e || null))
}), ip = (e, t) => Yf(t, qf("metadata"), e[3]), W = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, G = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = tp[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && Hf(d < 4 ? i : {
		get [n]() {
			return sp(this, a);
		},
		set [n](e) {
			return cp(this, a, e);
		}
	}, n));
	d ? p && d < 4 && Qf(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Qf(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = rp(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => op(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? sp : lp)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => cp(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? np(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? Jf("Object expected") : (np(o = s.get) && (v.get = o), np(o = s.set) && (v.set = o), np(o = s.init) && g.unshift(o));
	return d || ip(e, i), v && Bf(i, n, v), p ? d ^ 4 ? a : v : i;
}, ap = (e, t, n) => t.has(e) || Jf("Cannot " + n), op = (e, t) => Object(t) === t ? e.has(t) : Jf("Cannot use the \"in\" operator on this value"), sp = (e, t, n) => (ap(e, t, "read from private field"), n ? n.call(e) : t.get(e)), K = (e, t, n) => t.has(e) ? Jf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), cp = (e, t, n, r) => (ap(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), lp = (e, t, n) => (ap(e, t, "access private method"), n);
function up(e, t) {
	return {
		plugin: e,
		options: t
	};
}
function dp(e) {
	return (t) => up(e, t);
}
function fp(e) {
	return typeof e == "function" ? {
		plugin: e,
		options: void 0
	} : e;
}
var pp = [H], mp, hp, gp, _p = class {
	constructor(e, t) {
		this.manager = e, this.options = t, K(this, hp, W(mp, 8, this, !1)), W(mp, 11, this), K(this, gp, /* @__PURE__ */ new Set());
	}
	enable() {
		this.disabled = !1;
	}
	disable() {
		this.disabled = !0;
	}
	isDisabled() {
		return V(() => this.disabled);
	}
	configure(e) {
		this.options = e;
	}
	registerEffect(e) {
		let t = $u(e.bind(this));
		return sp(this, gp).add(t), t;
	}
	destroy() {
		sp(this, gp).forEach((e) => e());
	}
	static configure(e) {
		return up(this, e);
	}
};
mp = ep(null), hp = /* @__PURE__ */ new WeakMap(), gp = /* @__PURE__ */ new WeakMap(), G(mp, 4, "disabled", pp, _p, hp), ip(mp, _p);
var vp = class extends _p {}, yp, bp = class {
	constructor(e) {
		this.manager = e, this.instances = /* @__PURE__ */ new Map(), K(this, yp, []);
	}
	get values() {
		return Array.from(this.instances.values());
	}
	set values(e) {
		let t = e.map(fp).reduceRight((e, t) => e.some(({ plugin: e }) => e === t.plugin) ? e : [t, ...e], []), n = t.map(({ plugin: e }) => e);
		for (let e of sp(this, yp)) if (!n.includes(e)) {
			if (e.prototype instanceof vp) continue;
			this.unregister(e);
		}
		for (let { plugin: e, options: n } of t) this.register(e, n);
		cp(this, yp, n);
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
yp = /* @__PURE__ */ new WeakMap();
function xp(e, t) {
	return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Sp = [], Cp, wp, Tp = class extends _p {
	constructor(e) {
		super(e), K(this, Cp), K(this, wp), this.computeCollisions = this.computeCollisions.bind(this), cp(this, wp, Uu(Sp)), this.destroy = Ad(() => {
			let e = this.computeCollisions(), t = V(() => this.manager.dragOperation.position.current);
			if (e !== Sp) {
				let e = sp(this, Cp);
				if (cp(this, Cp, t), e && t.x == e.x && t.y == e.y) return;
			} else cp(this, Cp, void 0);
			sp(this, wp).value = e;
		}, () => {
			let { dragOperation: e } = this.manager;
			e.status.initialized && this.forceUpdate();
		});
	}
	forceUpdate(e = !0) {
		V(() => {
			e ? sp(this, wp).value = this.computeCollisions() : cp(this, Cp, void 0);
		});
	}
	computeCollisions(e, t) {
		let { registry: n, dragOperation: r } = this.manager, { source: i, shape: a, status: o } = r;
		if (!o.initialized || !a) return Sp;
		let s = [], c = [];
		for (let a of e ?? n.droppables) {
			if (a.disabled || i && !a.accepts(i)) continue;
			let e = t ?? a.collisionDetector;
			if (!e) continue;
			c.push(a), a.shape;
			let n = V(() => e({
				droppable: a,
				dragOperation: r
			}));
			n && (a.collisionPriority != null && (n.priority = a.collisionPriority), s.push(n));
		}
		return c.length === 0 ? Sp : (s.sort(xp), s);
	}
	get collisions() {
		return sp(this, wp).value;
	}
};
Cp = /* @__PURE__ */ new WeakMap(), wp = /* @__PURE__ */ new WeakMap();
var Ep = class {
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
}, Dp = class extends Ep {
	constructor(e) {
		super(), this.manager = e;
	}
	dispatch(e, t) {
		let n = [t, this.manager];
		super.dispatch(e, ...n);
	}
};
function Op(e, t = !0) {
	let n = !1;
	return Zf(Xf({}, e), {
		cancelable: t,
		get defaultPrevented() {
			return n;
		},
		preventDefault() {
			t && (n = !0);
		}
	});
}
var kp = class extends vp {
	constructor(e) {
		super(e);
		let t = (e, t) => e.map(({ id: e }) => e).join("") === t.map(({ id: e }) => e).join(""), n = [];
		this.destroy = Ad(() => {
			let { dragOperation: t, collisionObserver: r } = e;
			t.status.initializing && (n = [], r.enable());
		}, () => {
			let { collisionObserver: r, monitor: i } = e, { collisions: a } = r;
			if (r.isDisabled()) return;
			let o = Op({ collisions: a });
			if (i.dispatch("collision", o), o.defaultPrevented || t(a, n)) return;
			n = a;
			let [s] = a;
			V(() => {
				s?.id !== e.dragOperation.target?.id && (r.disable(), e.actions.setDropTarget(s?.id).then(() => {
					r.enable();
				}));
			});
		});
	}
}, Ap = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Ap || {}), jp = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(jp || {}), Mp, Np, Pp, Fp, Ip, Lp, Rp = [H], zp, Bp;
Lp = [U], Ip = [U], Fp = [U], Pp = [U], Np = [U], Mp = [U];
var Vp = class {
	constructor() {
		W(zp, 5, this), K(this, Bp, W(zp, 8, this, "idle")), W(zp, 11, this);
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
zp = ep(null), Bp = /* @__PURE__ */ new WeakMap(), G(zp, 4, "value", Rp, Vp, Bp), G(zp, 2, "current", Lp, Vp), G(zp, 2, "idle", Ip, Vp), G(zp, 2, "initializing", Fp, Vp), G(zp, 2, "initialized", Pp, Vp), G(zp, 2, "dragging", Np, Vp), G(zp, 2, "dropped", Mp, Vp), ip(zp, Vp);
var Hp = class {
	constructor(e) {
		this.manager = e;
	}
	setDragSource(e) {
		let { dragOperation: t } = this.manager;
		t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
	}
	setDropTarget(e) {
		return V(() => {
			let { dragOperation: t } = this.manager, n = e ?? null;
			if (t.targetIdentifier === n) return Promise.resolve(!1);
			t.targetIdentifier = n;
			let r = Op({ operation: t.snapshot() });
			return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
		});
	}
	start(e) {
		return V(() => {
			let { dragOperation: t } = this.manager;
			if (e.source != null && this.setDragSource(e.source), !t.source) throw Error("Cannot start a drag operation without a drag source");
			if (!t.status.idle) throw Error("Cannot start a drag operation while another is active");
			let n = new AbortController(), { event: r, coordinates: i } = e;
			z(() => {
				t.status.set("initialization-pending"), t.shape = null, t.canceled = !1, t.activatorEvent = r ?? null, t.position.reset(i);
			});
			let a = Op({ operation: t.snapshot() });
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
		return V(() => {
			let { dragOperation: t } = this.manager, { status: n, controller: r } = t;
			if (!n.dragging || !r || r.signal.aborted) return;
			let i = Op({
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
		return V(() => {
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
					let e = V(() => t.source?.status === "dropping"), r = () => {
						t.controller === n && (t.controller = void 0), t.reset();
					};
					if (e) {
						let { source: e } = t, n = $u(() => {
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
}, Up, Wp, Gp, Kp = [H], qp, Jp, Yp, Xp, Zp;
Gp = [H], Wp = [H], Up = [H];
var Qp = class {
	constructor(e, t) {
		K(this, Jp, W(qp, 8, this)), W(qp, 11, this), K(this, Yp, W(qp, 12, this)), W(qp, 15, this), K(this, Xp, W(qp, 16, this)), W(qp, 19, this), K(this, Zp, W(qp, 20, this)), W(qp, 23, this);
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
qp = ep(null), Jp = /* @__PURE__ */ new WeakMap(), Yp = /* @__PURE__ */ new WeakMap(), Xp = /* @__PURE__ */ new WeakMap(), Zp = /* @__PURE__ */ new WeakMap(), G(qp, 4, "manager", Kp, Qp, Jp), G(qp, 4, "id", Gp, Qp, Yp), G(qp, 4, "data", Wp, Qp, Xp), G(qp, 4, "disabled", Up, Qp, Zp), ip(qp, Qp);
var $p = class {
	constructor() {
		this.map = Uu(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
			let n = this.map.peek(), r = n.get(e), i = () => this.unregister(e, t);
			if (r === t) return i;
			r && (this.cleanupFunctions.get(r)?.(), this.cleanupFunctions.delete(r));
			let a = new Map(n);
			a.set(e, t), this.map.value = a;
			let o = Ad(...t.effects());
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
}, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm = class extends (om = Qp, am = [H], im = [H], rm = [H], nm = [U], tm = [U], em = [U], om) {
	constructor(e, t) {
		var n = e, { modifiers: r, type: i, sensors: a } = n, o = $f(n, [
			"modifiers",
			"type",
			"sensors"
		]);
		super(o, t), W(sm, 5, this), K(this, cm, W(sm, 8, this)), W(sm, 11, this), K(this, lm, W(sm, 12, this)), W(sm, 15, this), K(this, um, W(sm, 16, this, this.isDragSource ? "dragging" : "idle")), W(sm, 19, this), this.type = i, this.sensors = a, this.modifiers = r, this.alignment = o.alignment;
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
sm = ep(om), cm = /* @__PURE__ */ new WeakMap(), lm = /* @__PURE__ */ new WeakMap(), um = /* @__PURE__ */ new WeakMap(), G(sm, 4, "type", am, dm, cm), G(sm, 4, "modifiers", im, dm, lm), G(sm, 4, "status", rm, dm, um), G(sm, 2, "isDropping", nm, dm), G(sm, 2, "isDragging", tm, dm), G(sm, 2, "isDragSource", em, dm), ip(sm, dm);
var fm, pm, mm, hm, gm, _m, vm, q, ym, bm, xm, Sm, Cm, wm = class extends (vm = Qp, _m = [H], gm = [H], hm = [H], mm = [H], pm = [H], fm = [U], vm) {
	constructor(e, t) {
		var n = e, { accept: r, collisionDetector: i, collisionPriority: a, type: o } = n, s = $f(n, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(s, t), W(q, 5, this), K(this, ym, W(q, 8, this)), W(q, 11, this), K(this, bm, W(q, 12, this)), W(q, 15, this), K(this, xm, W(q, 16, this)), W(q, 19, this), K(this, Sm, W(q, 20, this)), W(q, 23, this), K(this, Cm, W(q, 24, this)), W(q, 27, this), this.accept = r, this.collisionDetector = i, this.collisionPriority = a, this.type = o;
	}
	accepts(e) {
		let { accept: t } = this;
		return t ? typeof t == "function" ? t(e) : e.type ? Array.isArray(t) ? t.includes(e.type) : e.type === t : !1 : !0;
	}
	get isDropTarget() {
		return this.manager?.dragOperation.target?.id === this.id;
	}
};
q = ep(vm), ym = /* @__PURE__ */ new WeakMap(), bm = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap(), Sm = /* @__PURE__ */ new WeakMap(), Cm = /* @__PURE__ */ new WeakMap(), G(q, 4, "accept", _m, wm, ym), G(q, 4, "type", gm, wm, bm), G(q, 4, "collisionDetector", hm, wm, xm), G(q, 4, "collisionPriority", mm, wm, Sm), G(q, 4, "shape", pm, wm, Cm), G(q, 2, "isDropTarget", fm, wm), ip(q, wm);
var Tm = class extends _p {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
}, Em = class extends AbortController {
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
}, Dm, Om = class {
	constructor(e) {
		this.options = e, K(this, Dm);
	}
	set controller(e) {
		cp(this, Dm, e), e.signal.addEventListener("abort", () => this.abort());
	}
	activate(e) {
		var t;
		(t = sp(this, Dm)) == null || t.activate(e);
	}
};
Dm = /* @__PURE__ */ new WeakMap();
var km = class extends _p {
	constructor(e, t) {
		super(e, t), this.manager = e, this.options = t;
	}
	apply(e) {
		return e.transform;
	}
}, Am = class {
	constructor(e) {
		this.draggables = new $p(), this.droppables = new $p(), this.plugins = new bp(e), this.sensors = new bp(e), this.modifiers = new bp(e);
	}
	register(e, t) {
		if (e instanceof dm) return this.draggables.register(e.id, e);
		if (e instanceof wm) return this.droppables.register(e.id, e);
		if (e.prototype instanceof km) return this.modifiers.register(e, t);
		if (e.prototype instanceof Tm) return this.sensors.register(e, t);
		if (e.prototype instanceof _p) return this.plugins.register(e, t);
		throw Error("Invalid instance type");
	}
	unregister(e) {
		if (e instanceof Qp) return e instanceof dm ? this.draggables.unregister(e.id, e) : e instanceof wm ? this.droppables.unregister(e.id, e) : () => {};
		if (e.prototype instanceof km) return this.modifiers.unregister(e);
		if (e.prototype instanceof Tm) return this.sensors.unregister(e);
		if (e.prototype instanceof _p) return this.plugins.unregister(e);
		throw Error("Invalid instance type");
	}
	destroy() {
		this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
	}
}, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm = [U], Bm, Vm, Hm, J, Um, Wm, Gm, Km, qm, Jm;
Rm = [H], Lm = [H], Im = [H], Fm = [H], Pm = [H], Nm = [U], Mm = [U], jm = [U];
var Ym = class {
	constructor(e) {
		W(J, 5, this), K(this, Bm), K(this, Vm), K(this, Hm, new Zd(void 0, (e, t) => e && t ? e.equals(t) : e === t)), this.status = new Vp(), K(this, Um, W(J, 8, this, !1)), W(J, 11, this), K(this, Wm, W(J, 12, this, null)), W(J, 15, this), K(this, Gm, W(J, 16, this, null)), W(J, 19, this), K(this, Km, W(J, 20, this, null)), W(J, 23, this), K(this, qm, W(J, 24, this, [])), W(J, 27, this), this.position = new Ff({
			x: 0,
			y: 0
		}), K(this, Jm, {
			x: 0,
			y: 0
		}), cp(this, Bm, e);
	}
	get shape() {
		let { current: e, initial: t, previous: n } = sp(this, Hm);
		return !e || !t ? null : {
			current: e,
			initial: t,
			previous: n
		};
	}
	set shape(e) {
		e ? sp(this, Hm).current = e : sp(this, Hm).reset();
	}
	get source() {
		let e = this.sourceIdentifier;
		if (e == null) return null;
		let t = sp(this, Bm).registry.draggables.get(e);
		return t && cp(this, Vm, t), t ?? sp(this, Vm) ?? null;
	}
	get target() {
		let e = this.targetIdentifier;
		return e == null ? null : sp(this, Bm).registry.droppables.get(e) ?? null;
	}
	get transform() {
		let { x: e, y: t } = this.position.delta, n = {
			x: e,
			y: t
		};
		for (let e of this.modifiers) n = e.apply(Zf(Xf({}, this.snapshot()), { transform: n }));
		return cp(this, Jm, n), n;
	}
	snapshot() {
		return V(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: sp(this, Jm),
			shape: this.shape ? Qd(this.shape) : null,
			position: Qd(this.position),
			status: Qd(this.status),
			canceled: this.canceled
		}));
	}
	reset() {
		z(() => {
			this.status.set("idle"), this.sourceIdentifier = null, this.targetIdentifier = null, sp(this, Hm).reset(), this.position.reset({
				x: 0,
				y: 0
			}), cp(this, Jm, {
				x: 0,
				y: 0
			}), this.modifiers = [];
		});
	}
};
J = ep(null), Bm = /* @__PURE__ */ new WeakMap(), Vm = /* @__PURE__ */ new WeakMap(), Hm = /* @__PURE__ */ new WeakMap(), Um = /* @__PURE__ */ new WeakMap(), Wm = /* @__PURE__ */ new WeakMap(), Gm = /* @__PURE__ */ new WeakMap(), Km = /* @__PURE__ */ new WeakMap(), qm = /* @__PURE__ */ new WeakMap(), Jm = /* @__PURE__ */ new WeakMap(), G(J, 2, "shape", zm, Ym), G(J, 4, "canceled", Rm, Ym, Um), G(J, 4, "activatorEvent", Lm, Ym, Wm), G(J, 4, "sourceIdentifier", Im, Ym, Gm), G(J, 4, "targetIdentifier", Fm, Ym, Km), G(J, 4, "modifiers", Pm, Ym, qm), G(J, 2, "source", Nm, Ym), G(J, 2, "target", Mm, Ym), G(J, 2, "transform", jm, Ym), ip(J, Ym);
var Xm = { get rendering() {
	return Promise.resolve();
} };
function Zm(e, t) {
	return typeof e == "function" ? e(t) : e ?? t;
}
var Qm = class {
	constructor(e) {
		this.destroy = () => {
			this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((e) => e.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
		};
		let t = e ?? {}, n = Zm(t.plugins, []), r = Zm(t.sensors, []), i = Zm(t.modifiers, []), a = t.renderer ?? Xm, o = new Dp(this);
		this.registry = new Am(this), this.monitor = o, this.renderer = a, this.actions = new Hp(this), this.dragOperation = new Ym(this), this.collisionObserver = new Tp(this), this.plugins = [kp, ...n], this.modifiers = i, this.sensors = r;
		let { destroy: s } = this, c = Ad(() => {
			let e = V(() => this.dragOperation.modifiers), t = this.modifiers;
			for (let n of e) t.includes(n) || n.destroy();
			this.dragOperation.modifiers = (this.dragOperation.source?.modifiers)?.map((e) => {
				let { plugin: t, options: n } = fp(e);
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
}, $m = ({ dragOperation: e, droppable: t }) => {
	let n = e.position.current;
	if (!n) return null;
	let { id: r } = t;
	return t.shape && t.shape.containsPoint(n) ? {
		id: r,
		value: 1 / Df.distance(t.shape.center, n),
		type: jp.PointerIntersection,
		priority: Ap.High
	} : null;
}, eh = ({ dragOperation: e, droppable: t }) => {
	let { shape: n } = e;
	if (!t.shape || !n?.current) return null;
	let r = n.current.intersectionArea(t.shape);
	if (r) {
		let { position: i } = e, a = Df.distance(t.shape.center, i.current), o = r / (n.current.area + t.shape.area - r) / a;
		return {
			id: t.id,
			value: o,
			type: jp.ShapeIntersection,
			priority: Ap.Normal
		};
	}
	return null;
}, th = (e) => $m(e) ?? eh(e), nh = (e) => {
	let { dragOperation: t, droppable: n } = e, { shape: r, position: i } = t;
	if (!n.shape) return null;
	let a = r ? Of.from(r.current.boundingRectangle).corners : void 0, o = Of.from(n.shape.boundingRectangle).corners.reduce((e, t, n) => e + Df.distance(Df.from(t), a?.[n] ?? i.current), 0) / 4;
	return {
		id: n.id,
		value: 1 / o,
		type: jp.Collision,
		priority: Ap.Normal
	};
}, rh = (e) => {
	throw TypeError(e);
}, ih = (e, t, n) => t.has(e) || rh("Cannot " + n), Y = (e, t, n) => (ih(e, t, "read from private field"), t.get(e)), ah = (e, t, n) => t.has(e) ? rh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oh = (e, t, n, r) => (ih(e, t, "write to private field"), t.set(e, n), n), sh = (e, t, n) => (ih(e, t, "access private method"), n);
function ch(e) {
	return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function lh(e, t) {
	let n = e.getAnimations();
	if (n.length > 0) for (let e of n) {
		if (e.playState !== "running") continue;
		let { effect: n } = e, r = (ch(n) ? n.getKeyframes() : []).filter(t);
		if (r.length > 0) return [r[r.length - 1], e];
	}
	return null;
}
function uh(e) {
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
function dh(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function fh(e) {
	return "nodeType" in e;
}
function ph(e) {
	return e ? dh(e) ? e : fh(e) ? "defaultView" in e ? e.defaultView ?? window : e.ownerDocument?.defaultView ?? window : window : window;
}
function mh(e) {
	let { Document: t } = ph(e);
	return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function hh(e) {
	return !e || dh(e) ? !1 : e instanceof ph(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function gh(e) {
	return e instanceof ph(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function _h(e) {
	return e ? dh(e) ? e.document : fh(e) ? mh(e) ? e : hh(e) || gh(e) ? e.ownerDocument : document : document : document;
}
function vh(e) {
	let { documentElement: t } = _h(e), n = ph(e).visualViewport, r = n?.width ?? t.clientWidth, i = n?.height ?? t.clientHeight, a = n?.offsetTop ?? 0, o = n?.offsetLeft ?? 0;
	return {
		top: a,
		left: o,
		right: o + r,
		bottom: a + i,
		width: r,
		height: i
	};
}
function yh(e, t) {
	if (bh(e) && e.open === !1) return !1;
	let { overflow: n, overflowX: r, overflowY: i } = getComputedStyle(e);
	return n === "visible" && r === "visible" && i === "visible";
}
function bh(e) {
	return e.tagName === "DETAILS";
}
function xh(e, t = e.getBoundingClientRect(), n = 0) {
	let r = t, { ownerDocument: i } = e, a = i.defaultView ?? window, o = e.parentElement;
	for (; o && o !== i.documentElement;) {
		if (!yh(o)) {
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
function Sh(e) {
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var Ch = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function wh(e = document, t = /* @__PURE__ */ new Set()) {
	if (t.has(e)) return [];
	t.add(e);
	let n = [e];
	for (let r of Array.from(e.querySelectorAll("iframe, frame"))) try {
		let e = r.contentDocument;
		e && !t.has(e) && n.push(...wh(e, t));
	} catch {}
	try {
		let r = e.defaultView;
		if (r && r !== window.top) {
			let i = r.parent;
			i && i.document && i.document !== e && n.push(...wh(i.document, t));
		}
	} catch {}
	return n;
}
function Th() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Eh() {
	let e = Th() ? window.visualViewport : null;
	return {
		x: e?.offsetLeft ?? 0,
		y: e?.offsetTop ?? 0
	};
}
function Dh(e) {
	return !e || !fh(e) ? !1 : e instanceof ph(e).ShadowRoot;
}
function Oh(e) {
	if (e && fh(e)) {
		let t = e.getRootNode();
		if (Dh(t) || t instanceof Document) return t;
	}
	return _h(e);
}
function kh(e) {
	return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Ah(e) {
	let t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
	return Array.from(n.querySelectorAll(t)).forEach((e, t) => {
		let n = r[t];
		jh(e) && jh(n) && (e.type !== "file" && (e.value = n.value), e.type === "radio" && e.name && (e.name = `Cloned__${e.name}`)), Mh(e) && Mh(n) && n.width > 0 && n.height > 0 && e.getContext("2d")?.drawImage(n, 0, 0);
	}), n;
}
function jh(e) {
	return "value" in e;
}
function Mh(e) {
	return e.tagName === "CANVAS";
}
function Nh(e, { x: t, y: n }) {
	let r = e.elementFromPoint(t, n);
	if (Ph(r)) {
		let { contentDocument: e } = r;
		if (e) {
			let { left: i, top: a } = r.getBoundingClientRect();
			return Nh(e, {
				x: t - i,
				y: n - a
			});
		}
	}
	return r;
}
function Ph(e) {
	return e?.tagName === "IFRAME";
}
var Fh = /* @__PURE__ */ new WeakMap();
function Ih(e) {
	return !!e.closest("\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      a[href],\n      [contenteditable]:not([contenteditable=\"false\"])\n    ");
}
var Lh = class {
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
function Rh(e) {
	let t = e?.ownerDocument.defaultView;
	if (t && t.self !== t.parent) return t.frameElement;
}
function zh(e) {
	let t = /* @__PURE__ */ new Set(), n = Rh(e);
	for (; n;) t.add(n), n = Rh(n);
	return t;
}
function Bh(e, t) {
	let n = setTimeout(e, t);
	return () => clearTimeout(n);
}
function Vh(e, t) {
	let n = () => performance.now(), r, i;
	return function(...a) {
		let o = this;
		i ? (r?.(), r = Bh(() => {
			e.apply(o, a), i = n();
		}, t - (n() - i))) : (e.apply(o, a), i = n());
	};
}
function Hh(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function Uh(e, t = e.getBoundingClientRect()) {
	let { width: n, height: r } = xh(e, t);
	return n > 0 && r > 0;
}
var Wh = Ch ? ResizeObserver : class {
	observe() {}
	unobserve() {}
	disconnect() {}
}, Gh, Kh = class extends Wh {
	constructor(e) {
		super((t) => {
			if (!Y(this, Gh)) {
				oh(this, Gh, !0);
				return;
			}
			e(t, this);
		}), ah(this, Gh, !1);
	}
};
Gh = /* @__PURE__ */ new WeakMap();
var qh = Array.from({ length: 100 }, (e, t) => t / 100), Jh = 75, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og = class {
	constructor(e, t, n = {
		debug: !1,
		skipInitial: !1
	}) {
		this.element = e, this.callback = t, ah(this, rg), this.disconnect = () => {
			var e, t, n;
			oh(this, tg, !0), (e = Y(this, Zh)) == null || e.disconnect(), (t = Y(this, Qh)) == null || t.disconnect(), Y(this, $h).disconnect(), (n = Y(this, eg)) == null || n.remove();
		}, ah(this, Yh, !0), ah(this, Xh), ah(this, Zh), ah(this, Qh), ah(this, $h), ah(this, eg), ah(this, tg, !1), ah(this, ng, Vh(() => {
			var e;
			let { element: t } = this;
			if ((e = Y(this, Qh)) == null || e.disconnect(), Y(this, tg) || !Y(this, Yh) || !t.isConnected) return;
			let n = t.ownerDocument ?? document, { innerHeight: r, innerWidth: i } = n.defaultView ?? window, a = t.getBoundingClientRect(), { top: o, left: s, bottom: c, right: l } = xh(t, a), u = -Math.floor(o), d = -Math.floor(s), f = `${u}px ${-Math.floor(i - l)}px ${-Math.floor(r - c)}px ${d}px`;
			this.boundingClientRect = a, oh(this, Qh, new IntersectionObserver((e) => {
				let [n] = e, { intersectionRect: r } = n;
				(n.intersectionRatio === 1 ? Of.intersectionRatio(r, xh(t)) : n.intersectionRatio) !== 1 && Y(this, ng).call(this);
			}, {
				threshold: qh,
				rootMargin: f,
				root: n
			})), Y(this, Qh).observe(t), sh(this, rg, ig).call(this);
		}, Jh)), this.boundingClientRect = e.getBoundingClientRect(), oh(this, Yh, Uh(e, this.boundingClientRect));
		let r = !0;
		this.callback = (e) => {
			r && (r = !1, n.skipInitial) || t(e);
		};
		let i = e.ownerDocument;
		n?.debug && (oh(this, eg, document.createElement("div")), Y(this, eg).style.background = "rgba(0,0,0,0.15)", Y(this, eg).style.position = "fixed", Y(this, eg).style.pointerEvents = "none", i.body.appendChild(Y(this, eg))), oh(this, $h, new IntersectionObserver((t) => {
			var n, r;
			let { boundingClientRect: i, isIntersecting: a } = t[t.length - 1], { width: o, height: s } = i, c = Y(this, Yh);
			oh(this, Yh, a), !(!o && !s) && (c && !a ? ((n = Y(this, Qh)) == null || n.disconnect(), this.callback(null), (r = Y(this, Zh)) == null || r.disconnect(), oh(this, Zh, void 0), Y(this, eg) && (Y(this, eg).style.visibility = "hidden")) : Y(this, ng).call(this), a && !Y(this, Zh) && (oh(this, Zh, new Kh(Y(this, ng))), Y(this, Zh).observe(e)));
		}, {
			threshold: qh,
			root: i
		})), Y(this, Yh) && !n.skipInitial && this.callback(this.boundingClientRect), Y(this, $h).observe(e);
	}
};
Yh = /* @__PURE__ */ new WeakMap(), Xh = /* @__PURE__ */ new WeakMap(), Zh = /* @__PURE__ */ new WeakMap(), Qh = /* @__PURE__ */ new WeakMap(), $h = /* @__PURE__ */ new WeakMap(), eg = /* @__PURE__ */ new WeakMap(), tg = /* @__PURE__ */ new WeakMap(), ng = /* @__PURE__ */ new WeakMap(), rg = /* @__PURE__ */ new WeakSet(), ig = function() {
	Y(this, tg) || (sh(this, rg, ag).call(this), !Hh(this.boundingClientRect, Y(this, Xh)) && (this.callback(this.boundingClientRect), oh(this, Xh, this.boundingClientRect)));
}, ag = function() {
	if (Y(this, eg)) {
		let { top: e, left: t, width: n, height: r } = xh(this.element);
		Y(this, eg).style.overflow = "hidden", Y(this, eg).style.visibility = "visible", Y(this, eg).style.top = `${Math.floor(e)}px`, Y(this, eg).style.left = `${Math.floor(t)}px`, Y(this, eg).style.width = `${Math.floor(n)}px`, Y(this, eg).style.height = `${Math.floor(r)}px`;
	}
};
var sg = /* @__PURE__ */ new WeakMap(), cg = /* @__PURE__ */ new WeakMap();
function lg(e, t) {
	let n = sg.get(e);
	return n ||= {
		disconnect: new og(e, (t) => {
			let n = sg.get(e);
			n && n.callbacks.forEach((e) => e(t));
		}, { skipInitial: !0 }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	}, n.callbacks.add(t), sg.set(e, n), () => {
		n.callbacks.delete(t), n.callbacks.size === 0 && (sg.delete(e), n.disconnect());
	};
}
function ug(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = lg(r, t);
		n.add(e);
	}
	return () => n.forEach((e) => e());
}
function dg(e, t) {
	let n = e.ownerDocument;
	if (!cg.has(n)) {
		let e = new AbortController(), t = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (e) => t.forEach((t) => t(e)), {
			capture: !0,
			passive: !0,
			signal: e.signal
		}), cg.set(n, {
			disconnect: () => e.abort(),
			listeners: t
		});
	}
	let { listeners: r, disconnect: i } = cg.get(n) ?? {};
	return !r || !i ? () => {} : (r.add(t), () => {
		r.delete(t), r.size === 0 && (i(), cg.delete(n));
	});
}
var fg, pg, mg, hg, gg = class {
	constructor(e, t, n) {
		this.callback = t, ah(this, fg), ah(this, pg, !1), ah(this, mg), ah(this, hg, Vh((e) => {
			if (!Y(this, pg) && e.target && "contains" in e.target && typeof e.target.contains == "function") {
				for (let t of Y(this, mg)) if (e.target.contains(t)) {
					this.callback(Y(this, fg).boundingClientRect);
					break;
				}
			}
		}, Jh));
		let r = zh(e), i = ug(r, t), a = dg(e, Y(this, hg));
		oh(this, mg, r), oh(this, fg, new og(e, t, n)), this.disconnect = () => {
			Y(this, pg) || (oh(this, pg, !0), i(), a(), Y(this, fg).disconnect());
		};
	}
};
fg = /* @__PURE__ */ new WeakMap(), pg = /* @__PURE__ */ new WeakMap(), mg = /* @__PURE__ */ new WeakMap(), hg = /* @__PURE__ */ new WeakMap();
function _g(e) {
	return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function vg(e) {
	try {
		_g(e) && e.isConnected && e.hasAttribute("popover") && !e.matches(":popover-open") && e.showPopover();
	} catch {}
}
function yg(e) {
	return !Ch || !e ? !1 : e === _h(e).scrollingElement;
}
function bg(e) {
	let t = ph(e), n = yg(e) ? vh(e) : uh(e), r = t.visualViewport, i = yg(e) ? {
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
function xg(e, t) {
	let { isTop: n, isBottom: r, isLeft: i, isRight: a, position: o } = bg(e), { x: s, y: c } = t ?? {
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
var Sg = class {
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
}, Cg = new Sg((e) => {
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), wg = new Sg((e) => setTimeout(e, 50)), Tg = /* @__PURE__ */ new Map(), Eg = Tg.clear.bind(Tg);
function Dg(e, t = !1) {
	if (!t) return Og(e);
	let n = Tg.get(e);
	return n || (n = Og(e), Tg.set(e, n), wg.schedule(Eg), n);
}
function Og(e) {
	return ph(e).getComputedStyle(e);
}
function kg(e, t = Dg(e, !0)) {
	return t.position === "fixed" || t.position === "sticky";
}
function Ag(e, t = Dg(e, !0)) {
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
var jg = {
	excludeElement: !0,
	escapeShadowDOM: !0
};
function Mg(e, t = jg) {
	let { limit: n, excludeElement: r, escapeShadowDOM: i } = t, a = /* @__PURE__ */ new Set();
	function o(t) {
		if (n != null && a.size >= n || !t) return a;
		if (mh(t) && t.scrollingElement != null && !a.has(t.scrollingElement)) return a.add(t.scrollingElement), a;
		if (i && Dh(t)) return o(t.host);
		if (!hh(t)) return gh(t) ? o(t.parentElement) : a;
		if (a.has(t)) return a;
		let s = Dg(t, !0);
		if (r && t === e || Ag(t, s) && a.add(t), kg(t, s)) {
			let { scrollingElement: e } = t.ownerDocument;
			return e && a.add(e), a;
		}
		return o(t.parentNode);
	}
	return e ? o(e) : a;
}
function Ng(e) {
	let [t] = Mg(e, { limit: 1 });
	return t ?? null;
}
function Pg(e, t = window.frameElement) {
	let n = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!e) return n;
	let r = Rh(e);
	for (; r;) {
		if (r === t) return n;
		let e = uh(r), { x: i, y: a } = Fg(r, e);
		n.x += e.left, n.y += e.top, n.scaleX *= i, n.scaleY *= a, r = Rh(r);
	}
	return n;
}
function Fg(e, t = uh(e)) {
	let n = Math.round(t.width), r = Math.round(t.height);
	if (hh(e)) return {
		x: n / e.offsetWidth,
		y: r / e.offsetHeight
	};
	let i = Dg(e, !0);
	return {
		x: (parseFloat(i.width) || n) / n,
		y: (parseFloat(i.height) || r) / r
	};
}
function Ig(e) {
	if (e === "none") return null;
	let t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
	return isNaN(n) && isNaN(r) ? null : {
		x: isNaN(n) ? r : n,
		y: isNaN(r) ? n : r
	};
}
function Lg(e) {
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
function Rg(e) {
	let { scale: t, transform: n, translate: r } = e, i = Ig(t), a = Lg(r), o = zg(n);
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
function zg(e) {
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
var Bg = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Bg || {}), Vg = {
	x: .2,
	y: .2
}, Hg = {
	x: 10,
	y: 10
};
function Ug(e, t, n, r = 25, i = Vg, a = Hg) {
	let { x: o, y: s } = t, { rect: c, isTop: l, isBottom: u, isLeft: d, isRight: f } = bg(e), p = Pg(e), m = Rg(Dg(e, !0)), h = m === null ? !1 : m?.scaleX < 0, g = m === null ? !1 : m?.scaleY < 0, _ = new Of(c.left * p.scaleX + p.x, c.top * p.scaleY + p.y, c.width * p.scaleX, c.height * p.scaleY), v = {
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
function Wg(e) {
	return "scrollIntoViewIfNeeded" in e && typeof e.scrollIntoViewIfNeeded == "function";
}
function Gg(e, t = !1) {
	if (Wg(e)) {
		e.scrollIntoViewIfNeeded(t);
		return;
	}
	if (!hh(e)) return e.scrollIntoView();
	var n = Ng(e);
	if (!hh(n)) return;
	let r = Dg(n, !0), i = parseInt(r.getPropertyValue("border-top-width")), a = parseInt(r.getPropertyValue("border-left-width")), o = e.offsetTop - n.offsetTop < n.scrollTop, s = e.offsetTop - n.offsetTop + e.clientHeight - i > n.scrollTop + n.clientHeight, c = e.offsetLeft - n.offsetLeft < n.scrollLeft, l = e.offsetLeft - n.offsetLeft + e.clientWidth - a > n.scrollLeft + n.clientWidth, u = o && !s;
	(o || s) && t && (n.scrollTop = e.offsetTop - n.offsetTop - n.clientHeight / 2 - i + e.clientHeight / 2), (c || l) && t && (n.scrollLeft = e.offsetLeft - n.offsetLeft - n.clientWidth / 2 - a + e.clientWidth / 2), (o || s || c || l) && !t && e.scrollIntoView(u);
}
function Kg(e, t, n) {
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
function qg(e, t, n) {
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
function Jg({ element: e, keyframes: t, options: n }) {
	return e.animate(t, n).finished;
}
function Yg(e, t = Dg(e).translate, n = !0) {
	if (n) {
		let t = lh(e, (e) => "translate" in e);
		if (t) {
			let { translate: e = "" } = t[0];
			if (typeof e == "string") {
				let t = Lg(e);
				if (t) return t;
			}
		}
	}
	if (t) {
		let e = Lg(t);
		if (e) return e;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var Xg = new Sg((e) => setTimeout(e, 0)), Zg = /* @__PURE__ */ new Map(), Qg = Zg.clear.bind(Zg);
function $g(e) {
	let t = e.ownerDocument, n = Zg.get(t);
	if (n) return n;
	n = t.getAnimations(), Zg.set(t, n), Xg.schedule(Qg);
	let r = n.filter((t) => ch(t.effect) && t.effect.target === e);
	return Zg.set(e, r), n;
}
function e_(e, t) {
	let n = $g(e).filter((e) => {
		if (ch(e.effect)) {
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
var t_ = class extends Of {
	constructor(e, t = {}) {
		let { frameTransform: n = Pg(e), ignoreTransforms: r, getBoundingClientRect: i = uh } = t, a = e_(e, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (t) => (t !== e || Th()) && t.contains(e)
		}), o = i(e), { top: s, left: c, width: l, height: u } = o, d, f = Dg(e), p = Rg(f), m = {
			x: p?.scaleX ?? 1,
			y: p?.scaleY ?? 1
		}, h = n_(e, f);
		a?.(), p && (d = qg(o, p, f.transformOrigin), (r || h) && (s = d.top, c = d.left, l = d.width, u = d.height));
		let g = {
			width: d?.width ?? l,
			height: d?.height ?? u
		};
		if (h && !r && d) {
			let e = Kg(d, h, f.transformOrigin);
			s = e.top, c = e.left, l = e.width, u = e.height, m.x = h.scaleX, m.y = h.scaleY;
		}
		n && (r || (c *= n.scaleX, l *= n.scaleX, s *= n.scaleY, u *= n.scaleY), c += n.x, s += n.y), super(c, s, l, u), this.scale = m, this.intrinsicWidth = g.width, this.intrinsicHeight = g.height;
	}
};
function n_(e, t) {
	let n = e.getAnimations(), r = null;
	if (!n.length) return null;
	for (let e of n) {
		if (e.playState !== "running") continue;
		let n = ch(e.effect) ? e.effect.getKeyframes() : [], i = n[n.length - 1];
		if (!i) continue;
		let { transform: a, translate: o, scale: s } = i;
		if (a || o || s) {
			let e = Rg({
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
function r_(e) {
	return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var i_ = class {
	constructor(e) {
		this.element = e, this.initial = /* @__PURE__ */ new Map();
	}
	set(e, t = "") {
		let { element: n } = this;
		if (r_(n)) for (let [r, i] of Object.entries(e)) {
			let e = `${t}${r}`;
			this.initial.has(e) || this.initial.set(e, n.style.getPropertyValue(e)), n.style.setProperty(e, typeof i == "string" ? i : `${i}px`);
		}
	}
	remove(e, t = "") {
		let { element: n } = this;
		if (r_(n)) for (let r of e) {
			let e = `${t}${r}`;
			n.style.removeProperty(e);
		}
	}
	reset() {
		let { element: e } = this;
		if (r_(e)) {
			for (let [t, n] of this.initial) e.style.setProperty(t, n);
			e.getAttribute("style") === "" && e.removeAttribute("style");
		}
	}
};
function a_(e) {
	return e ? e instanceof ph(e).Element || fh(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function o_(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = ph(e.target);
	return e instanceof t;
}
function s_(e) {
	if (!e) return !1;
	let { PointerEvent: t } = ph(e.target);
	return e instanceof t;
}
function c_(e) {
	if (!a_(e)) return !1;
	let { tagName: t } = e;
	return t === "INPUT" || t === "TEXTAREA" || l_(e);
}
function l_(e) {
	return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var u_ = {};
function d_(e) {
	let t = u_[e] == null ? 0 : u_[e] + 1;
	return u_[e] = t, `${e}-${t}`;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/index.js
var f_ = Object.create, p_ = Object.defineProperty, m_ = Object.defineProperties, h_ = Object.getOwnPropertyDescriptor, g_ = Object.getOwnPropertyDescriptors, __ = Object.getOwnPropertySymbols, v_ = Object.prototype.hasOwnProperty, y_ = Object.prototype.propertyIsEnumerable, b_ = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), x_ = (e) => {
	throw TypeError(e);
}, S_ = (e, t, n) => t in e ? p_(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, C_ = (e, t) => {
	for (var n in t ||= {}) v_.call(t, n) && S_(e, n, t[n]);
	if (__) for (var n of __(t)) y_.call(t, n) && S_(e, n, t[n]);
	return e;
}, w_ = (e, t) => m_(e, g_(t)), T_ = (e, t) => p_(e, "name", {
	value: t,
	configurable: !0
}), E_ = (e, t) => {
	var n = {};
	for (var r in e) v_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && __) for (var r of __(e)) t.indexOf(r) < 0 && y_.call(e, r) && (n[r] = e[r]);
	return n;
}, D_ = (e) => [
	,
	,
	,
	f_(e?.[b_("metadata")] ?? null)
], O_ = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], k_ = (e) => e !== void 0 && typeof e != "function" ? x_("Function expected") : e, A_ = (e, t, n, r, i) => ({
	kind: O_[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? x_("Already initialized") : i.push(k_(e || null))
}), j_ = (e, t) => S_(t, b_("metadata"), e[3]), X = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, M_ = (e, t, n, r, i, a) => {
	var o, s, c, l, u, d = t & 7, f = !!(t & 8), p = !!(t & 16), m = d > 3 ? e.length + 1 : d ? f ? 1 : 2 : 0, h = O_[d + 5], g = d > 3 && (e[m - 1] = []), _ = e[m] || (e[m] = []), v = d && (!p && !f && (i = i.prototype), d < 5 && (d > 3 || !p) && h_(d < 4 ? i : {
		get [n]() {
			return Z(this, a);
		},
		set [n](e) {
			return F_(this, a, e);
		}
	}, n));
	d ? p && d < 4 && T_(a, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : T_(i, n);
	for (var y = r.length - 1; y >= 0; y--) l = A_(d, n, c = {}, e[3], _), d && (l.static = f, l.private = p, u = l.access = { has: p ? (e) => P_(i, e) : (e) => n in e }, d ^ 3 && (u.get = p ? (e) => (d ^ 1 ? Z : I_)(e, i, d ^ 4 ? a : v.get) : (e) => e[n]), d > 2 && (u.set = p ? (e, t) => F_(e, i, t, d ^ 4 ? a : v.set) : (e, t) => e[n] = t)), s = (0, r[y])(d ? d < 4 ? p ? a : v[h] : d > 4 ? void 0 : {
		get: v.get,
		set: v.set
	} : i, l), c._ = 1, d ^ 4 || s === void 0 ? k_(s) && (d > 4 ? g.unshift(s) : d ? p ? a = s : v[h] = s : i = s) : typeof s != "object" || !s ? x_("Object expected") : (k_(o = s.get) && (v.get = o), k_(o = s.set) && (v.set = o), k_(o = s.init) && g.unshift(o));
	return d || j_(e, i), v && p_(i, n, v), p ? d ^ 4 ? a : v : i;
}, N_ = (e, t, n) => t.has(e) || x_("Cannot " + n), P_ = (e, t) => Object(t) === t ? e.has(t) : x_("Cannot use the \"in\" operator on this value"), Z = (e, t, n) => (N_(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? x_("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), F_ = (e, t, n, r) => (N_(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), I_ = (e, t, n) => (N_(e, t, "access private method"), n), L_ = {
	role: "button",
	roleDescription: "draggable"
}, R_ = "dnd-kit-description", z_ = "dnd-kit-announcement", B_ = { draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel." }, V_ = {
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
function H_(e) {
	let t = e.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(t);
}
function U_(e, t) {
	let n = document.createElement("div");
	return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function W_(e) {
	let t = document.createElement("div");
	return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var G_ = ["dragover", "dragmove"], K_ = class extends _p {
	constructor(e, t) {
		super(e);
		let { id: n, idPrefix: { description: r = R_, announcement: i = z_ } = {}, announcements: a = V_, screenReaderInstructions: o = B_, debounce: s = 500 } = t ?? {}, c = n ? `${r}-${n}` : d_(r), l = n ? `${i}-${n}` : d_(i), u, d, f, p, m = (e = p) => {
			!f || !e || f?.nodeValue !== e && (f.nodeValue = e);
		}, h = () => Cg.schedule(m), g = q_(h, s), _ = Object.entries(a).map(([e, t]) => this.manager.monitor.addEventListener(e, (n, r) => {
			let i = f;
			if (!i) return;
			let a = t?.(n, r);
			a && i.nodeValue !== a && (p = a, G_.includes(e) ? g() : (h(), g.cancel()));
		})), v = () => {
			let e = [];
			u?.isConnected || (u = U_(c, o.draggable), e.push(u)), d?.isConnected || (d = W_(l), f = document.createTextNode(""), d.appendChild(f), e.push(d)), e.length > 0 && document.body.append(...e);
		}, y = /* @__PURE__ */ new Set();
		function b() {
			for (let e of y) e();
		}
		this.registerEffect(() => {
			y.clear();
			for (let e of this.manager.registry.draggables.value) {
				let t = e.handle ?? e.element;
				if (t) {
					(!u || !d) && y.add(v), (!H_(t) || Th()) && !t.hasAttribute("tabindex") && y.add(() => t.setAttribute("tabindex", "0")), !t.hasAttribute("role") && t.tagName.toLowerCase() !== "button" && y.add(() => t.setAttribute("role", L_.role)), t.hasAttribute("aria-roledescription") || y.add(() => t.setAttribute("aria-roledescription", L_.roleDescription)), t.hasAttribute("aria-describedby") || y.add(() => t.setAttribute("aria-describedby", c));
					for (let n of ["aria-pressed", "aria-grabbed"]) {
						let r = String(e.isDragging);
						t.getAttribute(n) !== r && y.add(() => t.setAttribute(n, r));
					}
					let n = String(e.disabled);
					t.getAttribute("aria-disabled") !== n && y.add(() => t.setAttribute("aria-disabled", n));
				}
			}
			y.size > 0 && Cg.schedule(b);
		}), this.destroy = () => {
			super.destroy(), u?.remove(), d?.remove(), _.forEach((e) => e());
		};
	}
};
function q_(e, t) {
	let n, r = () => {
		clearTimeout(n), n = setTimeout(e, t);
	};
	return r.cancel = () => clearTimeout(n), r;
}
var J_ = class extends _p {
	constructor(e, t) {
		super(e, t), this.manager = e;
		let n = Dd(() => _h(this.manager.dragOperation.source?.element));
		this.destroy = $u(() => {
			let { dragOperation: e } = this.manager, { cursor: t = "grabbing", nonce: r } = this.options ?? {};
			if (e.status.initialized) {
				let e = n.value, i = e.createElement("style");
				return r && i.setAttribute("nonce", r), i.textContent = `* { cursor: ${t} !important; }`, e.head.appendChild(i), () => i.remove();
			}
		});
	}
}, Y_ = /* @__PURE__ */ new Map(), X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv = class extends (ev = vp, $_ = [H], Q_ = [U], Z_ = [U], X_ = [U], ev) {
	constructor(e) {
		super(e), X(nv, 5, this), Q(this, iv), Q(this, tv, /* @__PURE__ */ new Set()), Q(this, rv, X(nv, 8, this, /* @__PURE__ */ new Set())), X(nv, 11, this), this.registerEffect(I_(this, iv, av));
	}
	register(e) {
		return Z(this, tv).add(e), () => {
			Z(this, tv).delete(e);
		};
	}
	addRoot(e) {
		return V(() => {
			let t = new Set(this.additionalRoots);
			t.add(e), this.additionalRoots = t;
		}), () => {
			V(() => {
				let t = new Set(this.additionalRoots);
				t.delete(e), this.additionalRoots = t;
			});
		};
	}
	get sourceRoot() {
		let { source: e } = this.manager.dragOperation;
		return Oh(e?.element ?? null);
	}
	get targetRoot() {
		let { target: e } = this.manager.dragOperation;
		return Oh(e?.element ?? null);
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
nv = D_(ev), tv = /* @__PURE__ */ new WeakMap(), rv = /* @__PURE__ */ new WeakMap(), iv = /* @__PURE__ */ new WeakSet(), av = function() {
	let { roots: e } = this, t = [];
	for (let n of e) for (let e of Z(this, tv)) t.push(I_(this, iv, ov).call(this, n, e));
	return () => {
		for (let e of t) e();
	};
}, ov = function(e, t) {
	let n = Y_.get(e);
	n || (n = /* @__PURE__ */ new Map(), Y_.set(e, n));
	let r = n.get(t);
	if (!r) {
		let i = mh(e) ? I_(this, iv, sv).call(this, e, n, t) : I_(this, iv, cv).call(this, e, n, t);
		if (!i) return () => {};
		r = i, n.set(t, r);
	}
	r.refCount++;
	let i = !1;
	return () => {
		i || (i = !0, r.refCount--, r.refCount === 0 && r.cleanup());
	};
}, sv = function(e, t, n) {
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
			i.disconnect(), r.remove(), t.delete(n), t.size === 0 && Y_.delete(e);
		}
	};
}, cv = function(e, t, n) {
	"adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets);
	let { CSSStyleSheet: r } = e.ownerDocument.defaultView ?? {};
	if (!r) return null;
	let i = new r();
	return i.replaceSync(n), e.adoptedStyleSheets.push(i), {
		refCount: 0,
		cleanup: () => {
			if (Dh(e) && e.host?.isConnected) {
				let t = e.adoptedStyleSheets.indexOf(i);
				t !== -1 && e.adoptedStyleSheets.splice(t, 1);
			}
			t.delete(n), t.size === 0 && Y_.delete(e);
		}
	};
}, M_(nv, 4, "additionalRoots", $_, lv, rv), M_(nv, 2, "sourceRoot", Q_, lv), M_(nv, 2, "targetRoot", Z_, lv), M_(nv, 2, "roots", X_, lv), j_(nv, lv);
var uv = "data-dnd-", dv = `${uv}dropping`, fv = "--dnd-", pv = `${uv}dragging`, mv = `${uv}placeholder`, hv = [
	pv,
	mv,
	"popover",
	"aria-pressed",
	"aria-grabbing"
], gv = ["view-transition-name"], _v = `
  :is(:root,:host) [${pv}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${fv}top, 0px) !important;
    left: var(${fv}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${fv}width, auto);
    max-width: var(${fv}width, auto);
    height: var(${fv}height, auto);
    max-height: var(${fv}height, auto);
    transition: var(${fv}transition) !important;
  }

  :is(:root,:host) [${mv}] {
    transition: none;
  }

  :is(:root,:host) [${mv}='hidden'] {
    visibility: hidden;
  }

  [${pv}] * {
    pointer-events: none !important;
  }

  [${pv}]:not([${dv}]) {
    translate: var(${fv}translate) !important;
  }

  [${pv}][style*='${fv}scale'] {
    scale: var(${fv}scale) !important;
    transform-origin: var(${fv}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${pv}][popover]) {
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
  [${pv}]::backdrop, [${uv}overlay]:not([${pv}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function vv(e, t = "hidden") {
	return V(() => {
		let { element: n, manager: r } = e;
		if (!n || !r) return;
		let i = yv(n, r.registry.droppables), a = [], o = Ah(n), { remove: s } = o;
		return bv(i, o, a), xv(o, t), o.remove = () => {
			a.forEach((e) => e()), s.call(o);
		}, o;
	});
}
function yv(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (r.element && (e === r.element || e.contains(r.element))) {
		let e = `${uv}${d_("dom-id")}`;
		r.element.setAttribute(e, ""), n.set(r, e);
	}
	return n;
}
function bv(e, t, n) {
	for (let [r, i] of e) {
		if (!r.element) continue;
		let e = `[${i}]`, a = t.matches(e) ? t : t.querySelector(e);
		if (r.element.removeAttribute(i), !a) continue;
		let o = r.element;
		r.proxy = a, a.removeAttribute(i), Fh.set(o, a), n.push(() => {
			Fh.delete(o), r.proxy = void 0;
		});
	}
}
function xv(e, t = "hidden") {
	e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(mv, t);
}
function Sv(e, t) {
	return e === t ? !0 : Rh(e) === Rh(t);
}
function Cv(e) {
	let { target: t } = e;
	"newState" in e && e.newState === "closed" && a_(t) && t.hasAttribute("popover") && requestAnimationFrame(() => vg(t));
}
function wv(e) {
	return e.tagName === "TR";
}
function Tv(e, t, n) {
	let r = new MutationObserver((r) => {
		let i = !1;
		for (let n of r) {
			if (n.target !== e) {
				i = !0;
				continue;
			}
			if (n.type !== "attributes") continue;
			let r = n.attributeName;
			if (r.startsWith("aria-") || hv.includes(r)) continue;
			let a = e.getAttribute(r);
			if (r === "style") {
				if (r_(e) && r_(t)) {
					let n = e.style;
					for (let e of Array.from(t.style)) n.getPropertyValue(e) === "" && t.style.removeProperty(e);
					for (let e of Array.from(n)) {
						if (gv.includes(e) || e.startsWith(fv)) continue;
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
function Ev(e, t, n) {
	let r = new MutationObserver((r) => {
		for (let i of r) if (i.addedNodes.length !== 0) for (let r of Array.from(i.addedNodes)) {
			if (r.contains(e) && e.nextElementSibling !== t) {
				e.insertAdjacentElement("afterend", t), vg(n);
				return;
			}
			if (r.contains(t) && t.previousElementSibling !== e) {
				t.insertAdjacentElement("beforebegin", e), vg(n);
				return;
			}
		}
	});
	return r.observe(e.ownerDocument.body, {
		childList: !0,
		subtree: !0
	}), r;
}
function Dv(e) {
	return new ResizeObserver(() => {
		var t;
		let n = new t_(e.placeholder, {
			frameTransform: e.frameTransform,
			ignoreTransforms: !0
		}), r = e.transformOrigin ?? {
			x: 1,
			y: 1
		}, i = (e.width - n.width) * r.x + e.delta.x, a = (e.height - n.height) * r.y + e.delta.y, o = Eh();
		if (e.styles.set({
			width: n.width - e.widthOffset,
			height: n.height - e.heightOffset,
			top: e.top + a + o.y,
			left: e.left + i + o.x
		}, fv), (t = e.getElementMutationObserver()) == null || t.takeRecords(), wv(e.element) && wv(e.placeholder)) {
			let t = Array.from(e.element.cells), n = Array.from(e.placeholder.cells);
			e.getSavedCellWidths() || e.setSavedCellWidths(t.map((e) => e.style.width));
			for (let [e, r] of t.entries()) {
				let t = n[e];
				r.style.width = `${t.getBoundingClientRect().width}px`;
			}
		}
		e.dragOperation.shape = new t_(e.feedbackElement);
	});
}
var Ov = 250, kv = "ease";
function Av(e) {
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
	let { duration: r = Ov, easing: i = kv } = n ?? {};
	vg(e.feedbackElement);
	let [, a] = lh(e.feedbackElement, (e) => "translate" in e) ?? [];
	a?.pause();
	let o = e.placeholder ?? e.element, s = { frameTransform: Sv(e.feedbackElement, o) ? null : void 0 }, c = new t_(e.feedbackElement, s), l = Lg(Dg(e.feedbackElement).translate) ?? e.translate, u = new t_(o, s), d = Of.delta(c, u, e.alignment), f = {
		x: l.x - d.x,
		y: l.y - d.y
	}, p = Math.round(c.intrinsicHeight) === Math.round(u.intrinsicHeight) ? {} : {
		minHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`],
		maxHeight: [`${c.intrinsicHeight}px`, `${u.intrinsicHeight}px`]
	}, m = Math.round(c.intrinsicWidth) === Math.round(u.intrinsicWidth) ? {} : {
		minWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`],
		maxWidth: [`${c.intrinsicWidth}px`, `${u.intrinsicWidth}px`]
	};
	e.styles.set({ transition: e.transition }, fv), e.feedbackElement.setAttribute(dv, ""), (t = e.getElementMutationObserver()) == null || t.takeRecords(), Jg({
		element: e.feedbackElement,
		keyframes: w_(C_(C_({}, p), m), { translate: [`${l.x}px ${l.y}px 0`, `${f.x}px ${f.y}px 0`] }),
		options: {
			duration: kh(ph(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? r : 0,
			easing: i
		}
	}).then(() => {
		e.feedbackElement.removeAttribute(dv), a?.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
	});
}
var jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv = class extends (Mv = _p, jv = [H], Mv) {
	constructor(e, t) {
		super(e, t), Q(this, Fv), Q(this, Pv, X(Nv, 8, this)), X(Nv, 11, this), this.state = {
			initial: {},
			current: {}
		};
		let n = e.registry.plugins.get(lv), r = n?.register(_v);
		if (r) {
			let e = this.destroy.bind(this);
			this.destroy = () => {
				r(), e();
			};
		}
		this.registerEffect(I_(this, Fv, Iv).bind(this, n)), this.registerEffect(I_(this, Fv, Lv));
	}
};
Nv = D_(Mv), Pv = /* @__PURE__ */ new WeakMap(), Fv = /* @__PURE__ */ new WeakSet(), Iv = function(e) {
	let { overlay: t } = this;
	if (!t || !e) return;
	let n = Oh(t);
	if (n) return e.addRoot(n);
}, Lv = function() {
	let { state: e, manager: t, options: n } = this, { dragOperation: r } = t, { position: i, source: a, status: o } = r;
	if (o.idle) {
		e.current = {}, e.initial = {};
		return;
	}
	if (!a) return;
	let { element: s, feedback: c } = a;
	if (!s || c === "none" || !o.initialized || o.initializing) return;
	let { initial: l } = e, u = this.overlay ?? s, d = Pg(u), f = Pg(s), p = !Sv(s, u), m = new t_(s, {
		frameTransform: p ? f : null,
		ignoreTransforms: !p
	}), h = {
		x: f.scaleX / d.scaleX,
		y: f.scaleY / d.scaleY
	}, { width: g, height: _, top: v, left: y } = m;
	p && (g /= h.x, _ /= h.y);
	let b = new i_(u), { transition: x, translate: S, boxSizing: C, paddingBlockStart: w, paddingBlockEnd: T, paddingInlineStart: ee, paddingInlineEnd: te, borderInlineStartWidth: E, borderInlineEndWidth: ne, borderBlockStartWidth: re, borderBlockEndWidth: ie } = Dg(s), ae = c === "clone", oe = C === "content-box", se = oe ? parseInt(ee) + parseInt(te) + parseInt(E) + parseInt(ne) : 0, ce = oe ? parseInt(w) + parseInt(T) + parseInt(re) + parseInt(ie) : 0, D = c !== "move" && !this.overlay ? vv(a, ae ? "clone" : "hidden") : null, le = V(() => o_(t.dragOperation.activatorEvent));
	if (S !== "none") {
		let e = Lg(S);
		e && !l.translate && (l.translate = e);
	}
	if (!l.transformOrigin) {
		let e = V(() => i.current);
		l.transformOrigin = {
			x: (e.x - y * d.scaleX - d.x) / (g * d.scaleX),
			y: (e.y - v * d.scaleY - d.y) / (_ * d.scaleY)
		};
	}
	let { transformOrigin: O } = l, ue = v * d.scaleY + d.y, de = y * d.scaleX + d.x;
	if (!l.coordinates && (l.coordinates = {
		x: de,
		y: ue
	}, h.x !== 1 || h.y !== 1)) {
		let { scaleX: e, scaleY: t } = f, { x: n, y: r } = O;
		l.coordinates.x += (g * e - g) * n, l.coordinates.y += (_ * t - _) * r;
	}
	l.dimensions ||= {
		width: g,
		height: _
	}, l.frameTransform ||= d;
	let fe = {
		x: l.coordinates.x - de,
		y: l.coordinates.y - ue
	}, pe = {
		width: (l.dimensions.width * l.frameTransform.scaleX - g * d.scaleX) * O.x,
		height: (l.dimensions.height * l.frameTransform.scaleY - _ * d.scaleY) * O.y
	}, me = {
		x: fe.x / d.scaleX + pe.width,
		y: fe.y / d.scaleY + pe.height
	}, he = {
		left: y + me.x,
		top: v + me.y
	};
	u.setAttribute(pv, "true");
	let ge = V(() => r.transform), _e = l.translate ?? {
		x: 0,
		y: 0
	}, ve = ge.x * d.scaleX + _e.x, ye = ge.y * d.scaleY + _e.y, be = Eh();
	b.set({
		width: g - se,
		height: _ - ce,
		top: he.top + be.y,
		left: he.left + be.x,
		translate: `${ve}px ${ye}px 0`,
		transition: x ? `${x}, translate 0ms linear` : "",
		scale: p ? `${h.x} ${h.y}` : "",
		"transform-origin": `${O.x * 100}% ${O.y * 100}%`
	}, fv), D && (s.insertAdjacentElement("afterend", D), n?.rootElement && (typeof n.rootElement == "function" ? n.rootElement(a) : n.rootElement).appendChild(s)), _g(u) && (u.hasAttribute("popover") || u.setAttribute("popover", "manual"), vg(u), u.addEventListener("beforetoggle", Cv));
	let xe, Se, Ce, we = Dv({
		placeholder: D,
		element: s,
		feedbackElement: u,
		frameTransform: d,
		transformOrigin: O,
		width: g,
		height: _,
		top: v,
		left: y,
		widthOffset: se,
		heightOffset: ce,
		delta: me,
		styles: b,
		dragOperation: r,
		getElementMutationObserver: () => xe,
		getSavedCellWidths: () => Ce,
		setSavedCellWidths: (e) => {
			Ce = e;
		}
	}), Te = new t_(u);
	V(() => r.shape = Te);
	let Ee = ph(u), De = (e) => {
		this.manager.actions.stop({ event: e });
	}, Oe = kh(Ee);
	le && Ee.addEventListener("resize", De), V(() => a.status) === "idle" && requestAnimationFrame(() => a.status = "dragging"), D && (we.observe(D), xe = Tv(s, D, ae), Se = Ev(s, D, u));
	let ke = t.dragOperation.source?.id, Ae = () => {
		if (!le || ke == null) return;
		let e = t.registry.draggables.get(ke), n = e?.handle ?? e?.element;
		hh(n) && n.focus();
	}, je = () => {
		if (xe?.disconnect(), Se?.disconnect(), we.disconnect(), Ee.removeEventListener("resize", De), _g(u) && (u.removeEventListener("beforetoggle", Cv), u.removeAttribute("popover")), u.removeAttribute(pv), b.reset(), Ce && wv(s)) {
			let e = Array.from(s.cells);
			for (let [t, n] of e.entries()) n.style.width = Ce[t] ?? "";
		}
		a.status = "idle";
		let t = e.current.translate != null;
		D && (t || D.parentElement !== u.parentElement) && u.isConnected && D.replaceWith(u), D?.remove();
	}, Me = n?.dropAnimation, Ne = this, Pe = Ad(() => {
		let { transform: t, status: n } = r;
		if (!(!t.x && !t.y && !e.current.translate) && n.dragging) {
			let n = l.translate ?? {
				x: 0,
				y: 0
			}, i = {
				x: t.x / d.scaleX + n.x,
				y: t.y / d.scaleY + n.y
			}, a = e.current.translate, o = V(() => r.modifiers), s = V(() => r.shape?.current), c = le && !Oe ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
			if (b.set({
				transition: `${x}, translate ${c}`,
				translate: `${i.x}px ${i.y}px 0`
			}, fv), xe?.takeRecords(), s && s !== Te && a && !o.length) {
				let e = Df.delta(i, a);
				r.shape = Of.from(s.boundingRectangle).translate(e.x * d.scaleX, e.y * d.scaleY);
			} else r.shape = new t_(u);
			e.current.translate = i;
		}
	}, function() {
		if (r.status.dropped) {
			this.dispose(), a.status = "dropping";
			let n = Ne.dropAnimation === void 0 ? Me : Ne.dropAnimation, r = e.current.translate, i = r != null;
			if (!r && s !== u && (r = {
				x: 0,
				y: 0
			}), !r || n === null) {
				je();
				return;
			}
			t.renderer.rendering.then(() => {
				Av({
					element: s,
					feedbackElement: u,
					placeholder: D,
					translate: r,
					moved: i,
					transition: x,
					alignment: a.alignment,
					styles: b,
					animation: n ?? void 0,
					getElementMutationObserver: () => xe,
					cleanup: je,
					restoreFocus: Ae
				});
			});
		}
	});
	return () => {
		je(), Pe();
	};
}, M_(Nv, 4, "overlay", jv, Rv, Pv), j_(Nv, Rv), Rv.configure = dp(Rv);
var zv = Rv, Bv = !0, Vv = !1, Hv, Uv, Wv, Gv = (Wv = [H], Bg.Forward), Kv, qv, Jv;
Uv = (Hv = [H], Bg.Reverse);
var Yv = class {
	constructor() {
		Q(this, qv, X(Kv, 8, this, Bv)), X(Kv, 11, this), Q(this, Jv, X(Kv, 12, this, Bv)), X(Kv, 15, this);
	}
	isLocked(e) {
		return e === Bg.Idle ? !1 : e == null ? this[Bg.Forward] === Bv && this[Bg.Reverse] === Bv : this[e] === Bv;
	}
	unlock(e) {
		e !== Bg.Idle && (this[e] = Vv);
	}
};
Kv = D_(null), qv = /* @__PURE__ */ new WeakMap(), Jv = /* @__PURE__ */ new WeakMap(), M_(Kv, 4, Gv, Wv, Yv, qv), M_(Kv, 4, Uv, Hv, Yv, Jv), j_(Kv, Yv);
var Xv = [Bg.Forward, Bg.Reverse], Zv = class {
	constructor() {
		this.x = new Yv(), this.y = new Yv();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
}, Qv = class extends _p {
	constructor(e) {
		super(e);
		let t = Uu(new Zv()), n = null;
		this.signal = t, $u(() => {
			let { status: r } = e.dragOperation;
			if (!r.initialized) {
				n = null, t.value = new Zv();
				return;
			}
			let { delta: i } = e.dragOperation.position;
			if (n) {
				let e = {
					x: $v(i.x, n.x),
					y: $v(i.y, n.y)
				}, r = t.peek();
				z(() => {
					for (let t of Rf) for (let n of Xv) e[t] === n && r[t].unlock(n);
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
function $v(e, t) {
	return Math.sign(e - t);
}
var ey, ty, ny, ry, iy, ay, oy = class extends (ty = vp, ey = [H], ty) {
	constructor(e) {
		super(e), Q(this, ry, X(ny, 8, this, !1)), X(ny, 11, this), Q(this, iy), Q(this, ay, () => {
			if (!Z(this, iy)) return;
			let { element: e, by: t } = Z(this, iy);
			t.y && (e.scrollTop += t.y), t.x && (e.scrollLeft += t.x);
		}), this.scroll = (e) => {
			if (this.disabled) return !1;
			let t = this.getScrollableElements();
			if (!t) return F_(this, iy, void 0), !1;
			let { position: n } = this.manager.dragOperation, r = n?.current;
			if (r) {
				let { by: n } = e ?? {}, i = n ? {
					x: sy(n.x),
					y: sy(n.y)
				} : void 0, a = i ? void 0 : this.scrollIntentTracker.current;
				if (a?.isLocked()) return !1;
				for (let e of t) {
					let t = xg(e, n);
					if (t.x || t.y) {
						let { speed: t, direction: o } = Ug(e, r, i);
						if (a) for (let e of Rf) a[e].isLocked(o[e]) && (t[e] = 0, o[e] = 0);
						if (o.x || o.y) {
							let { x: r, y: i } = n ?? o, a = r * t.x, s = i * t.y;
							if (a || s) {
								let t = Z(this, iy)?.by;
								if (this.autoScrolling && t && (t.x && !a || t.y && !s)) continue;
								return F_(this, iy, {
									element: e,
									by: {
										x: a,
										y: s
									}
								}), Cg.schedule(Z(this, ay)), !0;
							}
						}
					}
				}
			}
			return F_(this, iy, void 0), !1;
		};
		let t = null, n = null, r = Dd(() => {
			let { position: n, source: r } = e.dragOperation;
			if (!n) return null;
			let i = Nh(Oh(r?.element), n.current);
			return i && (t = i), i ?? t;
		}), i = Dd(() => {
			let t = r.value, { documentElement: i } = _h(t);
			if (!t || t === i) {
				let { target: t } = e.dragOperation, r = t?.element;
				if (r) {
					let e = Mg(r, { excludeElement: !1 });
					return n = e, e;
				}
			}
			if (t) {
				let e = Mg(t, { excludeElement: !1 });
				return this.autoScrolling && n && e.size < n?.size ? n : (n = e, e);
			}
			return n = null, null;
		}, Od);
		this.getScrollableElements = () => i.value, this.scrollIntentTracker = new Qv(e), this.destroy = e.monitor.addEventListener("dragmove", (t) => {
			this.disabled || t.defaultPrevented || !o_(e.dragOperation.activatorEvent) || !t.by || this.scroll({ by: t.by }) && t.preventDefault();
		});
	}
};
ny = D_(ty), ry = /* @__PURE__ */ new WeakMap(), iy = /* @__PURE__ */ new WeakMap(), ay = /* @__PURE__ */ new WeakMap(), M_(ny, 4, "autoScrolling", ey, oy, ry), j_(ny, oy);
function sy(e) {
	return e > 0 ? Bg.Forward : e < 0 ? Bg.Reverse : Bg.Idle;
}
var cy = new class {
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
}), ly = 10, uy = class extends _p {
	constructor(e, t) {
		super(e);
		let n = e.registry.plugins.get(oy);
		if (!n) throw Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = $u(() => {
			if (this.disabled) return;
			let { position: t, status: r } = e.dragOperation;
			if (r.dragging) if (n.scroll()) {
				n.autoScrolling = !0;
				let e = setInterval(() => cy.schedule(n.scroll), ly);
				return () => {
					clearInterval(e);
				};
			} else n.autoScrolling = !1;
		});
	}
}, dy = {
	capture: !0,
	passive: !0
}, fy, py = class extends vp {
	constructor(e) {
		super(e), Q(this, fy), this.handleScroll = () => {
			Z(this, fy) ?? F_(this, fy, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(!1), F_(this, fy, void 0);
			}, 50));
		};
		let { dragOperation: t } = this.manager;
		this.destroy = $u(() => {
			if (t.status.dragging) {
				let e = t.source?.element?.ownerDocument ?? document;
				return e.addEventListener("scroll", this.handleScroll, dy), () => {
					e.removeEventListener("scroll", this.handleScroll, dy);
				};
			}
		});
	}
};
fy = /* @__PURE__ */ new WeakMap();
var my = class extends _p {
	constructor(e, t) {
		super(e, t), this.manager = e, this.destroy = $u(() => {
			let { dragOperation: e } = this.manager, { nonce: t } = this.options ?? {};
			if (e.status.initialized) {
				let e = document.createElement("style");
				return t && e.setAttribute("nonce", t), e.textContent = "* { user-select: none !important; -webkit-user-select: none !important; }", document.head.appendChild(e), hy(), document.addEventListener("selectionchange", hy, { capture: !0 }), () => {
					document.removeEventListener("selectionchange", hy, { capture: !0 }), e.remove();
				};
			}
		});
	}
};
function hy() {
	var e;
	(e = document.getSelection()) == null || e.removeAllRanges();
}
var gy = Object.freeze({
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
}), _y, vy = class extends Tm {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Q(this, _y, []), this.listeners = new Lh(), this.handleSourceKeyDown = (e, t, n) => {
			if (this.disabled || e.defaultPrevented || !a_(e.target) || t.disabled) return;
			let { keyboardCodes: r = gy.keyboardCodes, preventActivation: i = gy.preventActivation } = n ?? {};
			r.start.includes(e.code) && this.manager.dragOperation.status.idle && (i?.(e, t) || this.handleStart(e, t, n));
		};
	}
	bind(e, t = this.options) {
		return $u(() => {
			let n = e.handle ?? e.element, r = (n) => {
				o_(n) && this.handleSourceKeyDown(n, e, t);
			};
			if (n) return n.addEventListener("keydown", r), () => {
				n.removeEventListener("keydown", r);
			};
		});
	}
	handleStart(e, t, n) {
		let { element: r } = t;
		if (!r) throw Error("Source draggable does not have an associated element");
		e.preventDefault(), e.stopImmediatePropagation(), Gg(r);
		let { center: i } = new t_(r);
		if (this.manager.actions.start({
			event: e,
			coordinates: {
				x: i.x,
				y: i.y
			},
			source: t
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		let a = _h(r), o = [this.listeners.bind(a, [{
			type: "keydown",
			listener: (e) => this.handleKeyDown(e, t, n),
			options: { capture: !0 }
		}])];
		Z(this, _y).push(...o);
	}
	handleKeyDown(e, t, n) {
		let { keyboardCodes: r = gy.keyboardCodes } = n ?? {};
		if (by(e, [...r.end, ...r.cancel])) {
			e.preventDefault();
			let t = by(e, r.cancel);
			this.handleEnd(e, t);
			return;
		}
		by(e, r.up) ? this.handleMove("up", e) : by(e, r.down) && this.handleMove("down", e), by(e, r.left) ? this.handleMove("left", e) : by(e, r.right) && this.handleMove("right", e);
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
		}, a = this.options?.offset ?? gy.offset;
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
		let e = this.manager.registry.plugins.get(uy);
		e?.disabled === !1 && (e.disable(), Z(this, _y).push(() => {
			e.enable();
		}));
	}
	cleanup() {
		Z(this, _y).forEach((e) => e()), F_(this, _y, []);
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
_y = /* @__PURE__ */ new WeakMap(), vy.configure = dp(vy), vy.defaults = gy;
var yy = vy;
function by(e, t) {
	return t.includes(e.code);
}
var xy, Sy = class extends Om {
	constructor() {
		super(...arguments), Q(this, xy);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				F_(this, xy, Sh(e));
				break;
			case "pointermove":
				if (!Z(this, xy)) return;
				let { x: t, y: n } = Sh(e), r = {
					x: t - Z(this, xy).x,
					y: n - Z(this, xy).y
				}, { tolerance: i } = this.options;
				if (i && If(r, i)) {
					this.abort();
					return;
				}
				If(r, this.options.value) && this.activate(e);
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		F_(this, xy, void 0);
	}
};
xy = /* @__PURE__ */ new WeakMap();
var Cy, wy, Ty = class extends Om {
	constructor() {
		super(...arguments), Q(this, Cy), Q(this, wy);
	}
	onEvent(e) {
		switch (e.type) {
			case "pointerdown":
				F_(this, wy, Sh(e)), F_(this, Cy, setTimeout(() => this.activate(e), this.options.value));
				break;
			case "pointermove":
				if (!Z(this, wy)) return;
				let { x: t, y: n } = Sh(e);
				If({
					x: t - Z(this, wy).x,
					y: n - Z(this, wy).y
				}, this.options.tolerance) && this.abort();
				break;
			case "pointerup":
				this.abort();
				break;
		}
	}
	abort() {
		Z(this, Cy) && (clearTimeout(Z(this, Cy)), F_(this, wy, void 0), F_(this, Cy, void 0));
	}
};
Cy = /* @__PURE__ */ new WeakMap(), wy = /* @__PURE__ */ new WeakMap();
var Ey = class {};
Ey.Delay = Ty, Ey.Distance = Sy;
var Dy = Object.freeze({
	activationConstraints(e, t) {
		let { pointerType: n, target: r } = e;
		if (!(n === "mouse" && a_(r) && (t.handle === r || t.handle?.contains(r)))) return n === "touch" ? [new Ey.Delay({
			value: 250,
			tolerance: 5
		})] : c_(r) && !e.defaultPrevented ? [new Ey.Delay({
			value: 200,
			tolerance: 0
		})] : [new Ey.Delay({
			value: 200,
			tolerance: 10
		}), new Ey.Distance({ value: 5 })];
	},
	preventActivation(e, t) {
		let { target: n } = e;
		return n === t.element || n === t.handle || !a_(n) || t.handle?.contains(n) ? !1 : Ih(n);
	}
}), Oy, ky = class extends Tm {
	constructor(e, t) {
		super(e), this.manager = e, this.options = t, Q(this, Oy, /* @__PURE__ */ new Set()), this.listeners = new Lh(), this.latest = {
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
		let { activationConstraints: r = Dy.activationConstraints } = n ?? {};
		return typeof r == "function" ? r(e, t) : r;
	}
	bind(e, t = this.options) {
		return $u(() => {
			let n = new AbortController(), { signal: r } = n, i = (n) => {
				s_(n) && this.handlePointerDown(n, e, t);
			}, a = [e.handle ?? e.element];
			t?.activatorElements && (a = Array.isArray(t.activatorElements) ? t.activatorElements : t.activatorElements(e));
			for (let e of a) e && (Fy(e.ownerDocument.defaultView), e.addEventListener("pointerdown", i, { signal: r }));
			return () => n.abort();
		});
	}
	handlePointerDown(e, t, n) {
		if (this.disabled || !e.isPrimary || e.button !== 0 || !a_(e.target) || t.disabled || jy(e) || !this.manager.dragOperation.status.idle) return;
		let { preventActivation: r = Dy.preventActivation } = n ?? {};
		if (r?.(e, t)) return;
		let { target: i } = e, a = hh(i) && i.draggable && i.getAttribute("draggable") === "true", o = Pg(t.element), { x: s, y: c } = Sh(e);
		this.initialCoordinates = {
			x: s * o.scaleX + o.x,
			y: c * o.scaleY + o.y
		};
		let l = this.activationConstraints(e, t, n);
		e.sensor = this;
		let u = new Em(l, (e) => this.handleStart(t, e));
		u.signal.onabort = () => this.handleCancel(e), u.onEvent(e), this.controller = u;
		let d = wh(), f = this.listeners.bind(d, [
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
				listener: a ? this.handleCancel : My,
				options: { capture: !0 }
			}
		]);
		Z(this, Oy).add(() => {
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
			let n = Sh(e), r = Pg(t.element);
			n.x = n.x * r.scaleX + r.x, n.y = n.y * r.scaleY + r.y, e.preventDefault(), e.stopPropagation(), this.latest.event = e, this.latest.coordinates = n, Cg.schedule(this.handleMove);
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
		let i = _h(t.target).body;
		i.setPointerCapture(t.pointerId);
		let a = a_(t.target) ? [t.target, i] : i, o = this.listeners.bind(a, [
			{
				type: "touchmove",
				listener: My,
				options: { passive: !1 }
			},
			{
				type: "click",
				listener: My
			},
			{
				type: "contextmenu",
				listener: My
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		Z(this, Oy).add(o);
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
		}, Z(this, Oy).forEach((e) => e()), Z(this, Oy).clear();
	}
	destroy() {
		this.cleanup(), this.listeners.clear();
	}
};
Oy = /* @__PURE__ */ new WeakMap(), ky.configure = dp(ky), ky.defaults = Dy;
var Ay = ky;
function jy(e) {
	return "sensor" in e;
}
function My(e) {
	e.preventDefault();
}
function Ny() {}
var Py = /* @__PURE__ */ new WeakSet();
function Fy(e) {
	!e || Py.has(e) || (e.addEventListener("touchmove", Ny, {
		capture: !1,
		passive: !1
	}), Py.add(e));
}
var Iy = {
	modifiers: [],
	plugins: [
		K_,
		uy,
		J_,
		zv,
		my
	],
	sensors: [Ay, yy]
}, Ly = class extends Qm {
	constructor(e = {}) {
		let t = Zm(e.plugins, Iy.plugins), n = Zm(e.sensors, Iy.sensors), r = Zm(e.modifiers, Iy.modifiers);
		super(w_(C_({}, e), {
			plugins: [
				py,
				oy,
				lv,
				...t
			],
			sensors: n,
			modifiers: r
		}));
	}
}, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky = class extends (Vy = dm, By = [H], zy = [H], Ry = [H], Vy) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [], handle: a, feedback: o = "default" } = n, s = E_(n, [
			"element",
			"effects",
			"handle",
			"feedback"
		]);
		super(C_({ effects: () => [...i(), () => {
			let { manager: e } = this;
			if (!e) return;
			let t = (this.sensors?.map(fp) ?? [...e.sensors]).map((t) => {
				let n = t instanceof Tm ? t : e.registry.register(t.plugin), r = t instanceof Tm ? void 0 : t.options;
				return n.bind(this, r);
			});
			return function() {
				t.forEach((e) => e());
			};
		}] }, s), t), Q(this, Uy, X(Hy, 8, this)), X(Hy, 11, this), Q(this, Wy, X(Hy, 12, this)), X(Hy, 15, this), Q(this, Gy, X(Hy, 16, this)), X(Hy, 19, this), this.element = r, this.handle = a, this.feedback = o;
	}
};
Hy = D_(Vy), Uy = /* @__PURE__ */ new WeakMap(), Wy = /* @__PURE__ */ new WeakMap(), Gy = /* @__PURE__ */ new WeakMap(), M_(Hy, 4, "handle", By, Ky, Uy), M_(Hy, 4, "element", zy, Ky, Wy), M_(Hy, 4, "feedback", Ry, Ky, Gy), j_(Hy, Ky);
var qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb = class extends (Yy = wm, Jy = [H], qy = [H], Yy) {
	constructor(e, t) {
		var n = e, { element: r, effects: i = () => [] } = n, a = E_(n, ["element", "effects"]);
		let { collisionDetector: o = th } = a, s = (e) => {
			let { manager: t, element: n } = this;
			if (!n || e === null) {
				this.shape = void 0;
				return;
			}
			if (!t) return;
			let r = new t_(n), i = V(() => this.shape);
			return r && i?.equals(r) ? i : (this.shape = r, r);
		}, c = Uu(!1);
		super(w_(C_({}, a), {
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
						let t = new gg(e, s);
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
		}), t), Q(this, tb), Q(this, Zy, X(Xy, 8, this)), X(Xy, 11, this), Q(this, nb, X(Xy, 12, this)), X(Xy, 15, this), this.element = r, this.refreshShape = () => s();
	}
	set element(e) {
		F_(this, tb, e, eb);
	}
	get element() {
		return this.proxy ?? Z(this, tb, $y);
	}
};
Xy = D_(Yy), Zy = /* @__PURE__ */ new WeakMap(), tb = /* @__PURE__ */ new WeakSet(), nb = /* @__PURE__ */ new WeakMap(), Qy = M_(Xy, 20, "#element", Jy, tb, Zy), $y = Qy.get, eb = Qy.set, M_(Xy, 4, "proxy", qy, rb, nb), j_(Xy, rb);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+dom@0.3.2/node_modules/@dnd-kit/dom/sortable.js
var ib = Object.create, ab = Object.defineProperty, ob = Object.defineProperties, sb = Object.getOwnPropertyDescriptor, cb = Object.getOwnPropertyDescriptors, lb = Object.getOwnPropertySymbols, ub = Object.prototype.hasOwnProperty, db = Object.prototype.propertyIsEnumerable, fb = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), pb = (e) => {
	throw TypeError(e);
}, mb = (e, t, n) => t in e ? ab(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, hb = (e, t) => {
	for (var n in t ||= {}) ub.call(t, n) && mb(e, n, t[n]);
	if (lb) for (var n of lb(t)) db.call(t, n) && mb(e, n, t[n]);
	return e;
}, gb = (e, t) => ob(e, cb(t)), _b = (e, t) => {
	var n = {};
	for (var r in e) ub.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && lb) for (var r of lb(e)) t.indexOf(r) < 0 && db.call(e, r) && (n[r] = e[r]);
	return n;
}, vb = (e) => [
	,
	,
	,
	ib(null)
], yb = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], bb = (e) => e !== void 0 && typeof e != "function" ? pb("Function expected") : e, xb = (e, t, n, r, i) => ({
	kind: yb[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? pb("Already initialized") : i.push(bb(e || null))
}), Sb = (e, t) => mb(t, fb("metadata"), e[3]), Cb = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) t & 1 ? a[i].call(n) : r = a[i].call(n, r);
	return r;
}, wb = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u, d = t & 7, f = !1, p = !1, m = e.length + 1, h = yb[d + 5], g = e[m - 1] = [], _ = e[m] || (e[m] = []), v = (i = i.prototype, sb({
		get [n]() {
			return Eb(this, a);
		},
		set [n](e) {
			return Ob(this, a, e);
		}
	}, n)), y = r.length - 1; y >= 0; y--) l = xb(d, n, c = {}, e[3], _), l.static = f, l.private = p, u = l.access = { has: (e) => n in e }, u.get = (e) => e[n], u.set = (e, t) => e[n] = t, s = (0, r[y])({
		get: v.get,
		set: v.set
	}, l), c._ = 1, s === void 0 ? bb(s) && (v[h] = s) : typeof s != "object" || !s ? pb("Object expected") : (bb(o = s.get) && (v.get = o), bb(o = s.set) && (v.set = o), bb(o = s.init) && g.unshift(o));
	return v && ab(i, n, v), i;
}, Tb = (e, t, n) => t.has(e) || pb("Cannot " + n), Eb = (e, t, n) => (Tb(e, t, "read from private field"), t.get(e)), Db = (e, t, n) => t.has(e) ? pb("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ob = (e, t, n, r) => (Tb(e, t, "write to private field"), t.set(e, n), n);
function kb(e) {
	return e instanceof ux || e instanceof lx;
}
var Ab = 10, jb = class extends _p {
	constructor(e) {
		super(e);
		let t = $u(() => {
			let { dragOperation: t } = e;
			if (o_(t.activatorEvent) && kb(t.source) && t.status.initialized) {
				let t = e.registry.plugins.get(oy);
				if (t) return t.disable(), () => t.enable();
			}
		}), n = e.monitor.addEventListener("dragmove", (e, t) => {
			queueMicrotask(() => {
				if (this.disabled || e.defaultPrevented || !e.nativeEvent) return;
				let { dragOperation: n } = t;
				if (!o_(e.nativeEvent) || !kb(n.source) || !n.shape) return;
				let { actions: r, collisionObserver: i, registry: a } = t, { by: o } = e;
				if (!o) return;
				let s = Mb(o), { source: c, target: l } = n, { center: u } = n.shape.current, d = [], f = [];
				z(() => {
					for (let e of a.droppables) {
						let { id: t } = e;
						if (!e.accepts(c) || t === l?.id && kb(e) || !e.element) continue;
						let n = e.shape, r = new t_(e.element, { getBoundingClientRect: (e) => xh(e, void 0, .2) });
						!r.height || !r.width || (s == "down" && u.y + Ab < r.center.y || s == "up" && u.y - Ab > r.center.y || s == "left" && u.x - Ab > r.center.x || s == "right" && u.x + Ab < r.center.x) && (d.push(e), e.shape = r, f.push(() => e.shape = n));
					}
				}), e.preventDefault(), i.disable();
				let p = i.computeCollisions(d, nh);
				z(() => f.forEach((e) => e()));
				let [m] = p;
				if (!m) return;
				let { id: h } = m, { index: g, group: _ } = c.sortable;
				r.setDropTarget(h).then(() => {
					let { source: e, target: t, shape: a } = n;
					if (!e || !kb(e) || !a) return;
					let { index: o, group: s, target: c } = e.sortable, l = g !== o || _ !== s, u = l ? c : t?.element;
					if (!u) return;
					Gg(u);
					let d = new t_(u);
					if (!d) return;
					let f = Of.delta(d, Of.from(a.current.boundingRectangle), e.alignment);
					r.move({ by: f }), l ? r.setDropTarget(e.id).then(() => i.enable()) : i.enable();
				});
			});
		});
		this.destroy = () => {
			n(), t();
		};
	}
};
function Mb(e) {
	let { x: t, y: n } = e;
	if (t > 0) return "right";
	if (t < 0) return "left";
	if (n > 0) return "down";
	if (n < 0) return "up";
}
var Nb = Object.defineProperty, Pb = Object.defineProperties, Fb = Object.getOwnPropertyDescriptors, Ib = Object.getOwnPropertySymbols, Lb = Object.prototype.hasOwnProperty, Rb = Object.prototype.propertyIsEnumerable, zb = (e, t, n) => t in e ? Nb(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Bb = (e, t) => {
	for (var n in t ||= {}) Lb.call(t, n) && zb(e, n, t[n]);
	if (Ib) for (var n of Ib(t)) Rb.call(t, n) && zb(e, n, t[n]);
	return e;
}, Vb = (e, t) => Pb(e, Fb(t));
function Hb(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ub(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Wb(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (Ub(r)) {
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
	if (c === -1 && Ub(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return Vb(Bb({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return Vb(Bb({}, e), {
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
		if (l != null && l === d && c === u && Ub(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return Vb(Bb({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return Vb(Bb({}, e), {
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
	if (l === d) return Vb(Bb({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return Vb(Bb({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function Gb(e, t) {
	return Wb(e, t, Hb);
}
var Kb = "__default__", qb = class extends _p {
	constructor(e) {
		super(e);
		let t = () => {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.registry.droppables) if (n instanceof ux) {
				let { sortable: e } = n, { group: r } = e, i = t.get(r);
				i || (i = /* @__PURE__ */ new Set(), t.set(r, i)), i.add(e);
			}
			for (let [e, n] of t) t.set(e, new Set(Xb(n)));
			return t;
		}, n = [e.monitor.addEventListener("dragover", (e, n) => {
			if (this.disabled) return;
			let { dragOperation: r } = n, { source: i, target: a } = r;
			if (!kb(i) || !kb(a) || i.sortable === a.sortable) return;
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
					let f = Xb(c), p = s ? f : Xb(l), m = i.sortable.group ?? Kb, h = a.sortable.group ?? Kb, g = {
						[m]: f,
						[h]: p
					}, _ = Gb(g, e);
					if (g === _) return;
					let v = _[h].indexOf(i.sortable), y = _[h].indexOf(a.sortable);
					n.collisionObserver.disable(), Jb(u, v, d, y), z(() => {
						for (let [e, t] of _[m].entries()) t.index = e;
						if (!s) for (let [e, t] of _[h].entries()) t.group = a.sortable.group, t.index = e;
					}), n.actions.setDropTarget(i.id).then(() => n.collisionObserver.enable());
				});
			});
		}), e.monitor.addEventListener("dragend", (e, n) => {
			if (!e.canceled) return;
			let { dragOperation: r } = n, { source: i } = r;
			kb(i) && (i.sortable.initialIndex === i.sortable.index && i.sortable.initialGroup === i.sortable.group || queueMicrotask(() => {
				let e = t(), r = e.get(i.sortable.initialGroup);
				r && n.renderer.rendering.then(() => {
					for (let [t, n] of e.entries()) {
						let e = Array.from(n).entries();
						for (let [n, r] of e) if (r.index !== n || r.group !== t) return;
					}
					let t = Xb(r), n = i.sortable.element, a = t[i.sortable.initialIndex], o = a?.element;
					!a || !o || !n || (Jb(n, a.index, o, i.index), z(() => {
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
function Jb(e, t, n, r) {
	let i = r < t ? "afterend" : "beforebegin";
	n.insertAdjacentElement(i, e);
}
function Yb(e, t) {
	return e.index - t.index;
}
function Xb(e) {
	return Array.from(e).sort(Yb);
}
var Zb = [jb, qb], Qb = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: !1
}, $b = new ef(), ex, tx = [H], nx, rx, ix, ax, ox, sx;
ex = [H];
var cx = class {
	constructor(e, t) {
		Db(this, rx, Cb(nx, 8, this)), Cb(nx, 11, this), Db(this, ix), Db(this, ax), Db(this, ox, Cb(nx, 12, this)), Cb(nx, 15, this), Db(this, sx), this.register = () => (z(() => {
			var e, t;
			(e = this.manager) == null || e.registry.register(this.droppable), (t = this.manager) == null || t.registry.register(this.draggable);
		}), () => this.unregister()), this.unregister = () => {
			z(() => {
				var e, t;
				(e = this.manager) == null || e.registry.unregister(this.droppable), (t = this.manager) == null || t.registry.unregister(this.draggable);
			});
		}, this.destroy = () => {
			z(() => {
				this.droppable.destroy(), this.draggable.destroy();
			});
		};
		var n = e, { effects: r = () => [], group: i, index: a, sensors: o, type: s, transition: c = Qb, plugins: l = Zb } = n, u = _b(n, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		this.droppable = new ux(u, t, this), this.draggable = new lx(gb(hb({}, u), {
			effects: () => [
				() => {
					let e = this.manager?.dragOperation.status;
					e?.initializing && this.id === this.manager?.dragOperation.source?.id && $b.clear(this.manager), e?.dragging && $b.set(this.manager, this.id, V(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					let { index: e, group: t, manager: n } = this, r = Eb(this, ax), i = Eb(this, ix);
					(e !== r || t !== i) && (Ob(this, ax, e), Ob(this, ix, t), this.animate());
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
		}), t, this), Ob(this, sx, u.element), this.manager = t, this.index = a, Ob(this, ax, a), this.group = i, Ob(this, ix, i), this.type = s, this.transition = c;
	}
	get initialIndex() {
		return $b.get(this.manager, this.id)?.initialIndex ?? this.index;
	}
	get initialGroup() {
		return $b.get(this.manager, this.id)?.initialGroup ?? this.group;
	}
	animate() {
		V(() => {
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
				}, { translate: o } = Dg(r), s = Yg(r, o, !1), c = Yg(r, o);
				if (a.x || a.y) {
					let n = kh(ph(r)) ? gb(hb({}, t), { duration: 0 }) : t;
					Jg({
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
		z(() => {
			this.draggable.manager = e, this.droppable.manager = e;
		});
	}
	set element(e) {
		z(() => {
			let t = Eb(this, sx), n = this.droppable.element, r = this.draggable.element;
			(!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Ob(this, sx, e);
		});
	}
	get element() {
		let e = Eb(this, sx);
		if (e) return Fh.get(e) ?? e ?? this.droppable.element;
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
		z(() => {
			this.droppable.disabled = e, this.draggable.disabled = e;
		});
	}
	set data(e) {
		z(() => {
			this.droppable.data = e, this.draggable.data = e;
		});
	}
	set handle(e) {
		this.draggable.handle = e;
	}
	set id(e) {
		z(() => {
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
		this.droppable.collisionDetector = e ?? th;
	}
	set alignment(e) {
		this.draggable.alignment = e;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(e) {
		z(() => {
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
nx = vb(), rx = /* @__PURE__ */ new WeakMap(), ix = /* @__PURE__ */ new WeakMap(), ax = /* @__PURE__ */ new WeakMap(), ox = /* @__PURE__ */ new WeakMap(), sx = /* @__PURE__ */ new WeakMap(), wb(nx, 4, "index", tx, cx, rx), wb(nx, 4, "group", ex, cx, ox), Sb(nx, cx);
var lx = class extends Ky {
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
}, ux = class extends rb {
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
function dx(e) {
	return typeof e == "object" && !!e && "current" in e;
}
function fx(e) {
	if (e != null) return dx(e) ? e.current ?? void 0 : e;
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/hooks.js
var px = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? E.useLayoutEffect : E.useEffect;
function mx() {
	let e = (0, E.useState)(0)[1];
	return (0, E.useCallback)(() => {
		e((e) => e + 1);
	}, [e]);
}
function hx(e, t) {
	let n = (0, E.useRef)(/* @__PURE__ */ new Map()), r = mx();
	return px(() => {
		if (!e) {
			n.current.clear();
			return;
		}
		return $u(() => {
			let i = !1, a = !1;
			for (let r of n.current) {
				let [o] = r, s = V(() => r[1]), c = e[o];
				s !== c && (i = !0, n.current.set(o, c), a = t?.(o, s, c) ?? !1);
			}
			i && (a ? (0, Rn.flushSync)(r) : r());
		});
	}, [e]), (0, E.useMemo)(() => e && new Proxy(e, { get(e, t) {
		let r = e[t];
		return n.current.set(t, r), r;
	} }), [e]);
}
function gx(e, t) {
	e();
}
function _x(e) {
	let t = (0, E.useRef)(e);
	return px(() => {
		t.current = e;
	}, [e]), t;
}
function vx(e, t, n = E.useEffect, r = Object.is) {
	let i = (0, E.useRef)(e);
	n(() => {
		let n = i.current;
		r(e, n) || (i.current = e, t(e, n));
	}, [t, e]);
}
function yx(e, t) {
	let n = (0, E.useRef)(fx(e));
	px(() => {
		let r = fx(e);
		r !== n.current && (n.current = r, t(r));
	});
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/index.js
var bx = Object.getOwnPropertySymbols, xx = Object.prototype.hasOwnProperty, Sx = Object.prototype.propertyIsEnumerable, Cx = (e, t) => {
	var n = {};
	for (var r in e) xx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && bx) for (var r of bx(e)) t.indexOf(r) < 0 && Sx.call(e, r) && (n[r] = e[r]);
	return n;
}, wx = (0, E.createContext)(new Ly()), Tx = (0, E.memo)((0, E.forwardRef)(({ children: e }, t) => {
	let [n, r] = (0, E.useState)(0), i = (0, E.useRef)(null), a = (0, E.useRef)(null), o = (0, E.useMemo)(() => ({
		renderer: { get rendering() {
			return i.current ?? Promise.resolve();
		} },
		trackRendering(e) {
			i.current ||= new Promise((e) => {
				a.current = e;
			}), (0, E.startTransition)(() => {
				e(), r((e) => e + 1);
			});
		}
	}), []);
	return px(() => {
		var e;
		(e = a.current) == null || e.call(a), i.current = null;
	}, [e, n]), (0, E.useImperativeHandle)(t, () => o), null;
})), Ex = [void 0, Od];
function Dx(e) {
	var t = e, { children: n, onCollision: r, onBeforeDragStart: i, onDragStart: a, onDragMove: o, onDragOver: s, onDragEnd: c } = t, l = Cx(t, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	let u = (0, E.useRef)(null), { plugins: d, modifiers: f, sensors: p } = l, m = Zm(d, Iy.plugins), h = Zm(p, Iy.sensors), g = Zm(f, Iy.modifiers), _ = _x(i), v = _x(a), y = _x(s), b = _x(o), x = _x(c), S = _x(r), C = Ox(() => l.manager ?? new Ly(l));
	return (0, E.useEffect)(() => {
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
	}, [C]), vx(m, () => C && (C.plugins = m), ...Ex), vx(h, () => C && (C.sensors = h), ...Ex), vx(g, () => C && (C.modifiers = g), ...Ex), /* @__PURE__ */ (0, L.jsxs)(wx.Provider, {
		value: C,
		children: [/* @__PURE__ */ (0, L.jsx)(Tx, {
			ref: u,
			children: n
		}), n]
	});
}
function Ox(e) {
	let t = (0, E.useRef)(null);
	return t.current ||= e(), (0, E.useInsertionEffect)(() => () => t.current?.destroy(), []), t.current;
}
function kx() {
	return (0, E.useContext)(wx);
}
function Ax(e) {
	let t = kx() ?? void 0, [n] = (0, E.useState)(() => e(t));
	return n.manager !== t && (n.manager = t), px(n.register, [t, n]), n;
}
var jx = Object.create, Mx = Object.defineProperty, Nx = Object.getOwnPropertyDescriptor, Px = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Fx = (e) => {
	throw TypeError(e);
}, Ix = (e, t, n) => t in e ? Mx(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Lx = (e) => [
	,
	,
	,
	jx(e?.[Px("metadata")] ?? null)
], Rx = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
], zx = (e) => e !== void 0 && typeof e != "function" ? Fx("Function expected") : e, Bx = (e, t, n, r, i) => ({
	kind: Rx[e],
	name: t,
	metadata: r,
	addInitializer: (e) => n._ ? Fx("Already initialized") : i.push(zx(e || null))
}), Vx = (e, t) => Ix(t, Px("metadata"), e[3]), Hx = (e, t, n, r) => {
	for (var i = 0, a = e[t >> 1], o = a && a.length; i < o; i++) a[i].call(n);
	return r;
}, Ux = (e, t, n, r, i, a) => {
	for (var o, s, c, l, u = t & 7, d = !1, f = !1, p = 2, m = Rx[u + 5], h = e[p] || (e[p] = []), g = (i = i.prototype, Nx(i, n)), _ = r.length - 1; _ >= 0; _--) c = Bx(u, n, s = {}, e[3], h), c.static = d, c.private = f, l = c.access = { has: (e) => n in e }, l.get = (e) => e[n], o = (0, r[_])(g[m], c), s._ = 1, zx(o) && (g[m] = o);
	return g && Mx(i, n, g), i;
}, Wx = (e, t, n) => t.has(e) || Fx("Cannot " + n), Gx = (e, t, n) => (Wx(e, t, "read from private field"), t.get(e)), Kx = (e, t, n) => t.has(e) ? Fx("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qx = (e, t, n, r) => (Wx(e, t, "write to private field"), t.set(e, n), n), Jx = class e {
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
}, Yx, Xx, Zx, Qx, $x, eS = class extends (Zx = Zd, Xx = [U], Yx = [U], Zx) {
	constructor(e) {
		let t = Jx.from(e);
		super(t, (e, t) => Jx.equals(e, t)), Hx($x, 5, this), Kx(this, Qx, 0), this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Jx.delta(this.current, this.initial);
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
		let { current: t } = this, n = Jx.from(e), r = {
			x: n.x - t.x,
			y: n.y - t.y
		}, i = Date.now(), a = i - Gx(this, Qx), o = (e) => Math.round(e / a * 100);
		z(() => {
			qx(this, Qx, i), this.velocity = {
				x: o(r.x),
				y: o(r.y)
			}, super.current = n;
		});
	}
	reset(e = this.defaultValue) {
		super.reset(Jx.from(e)), this.velocity = {
			x: 0,
			y: 0
		};
	}
};
$x = Lx(Zx), Qx = /* @__PURE__ */ new WeakMap(), Ux($x, 2, "delta", Xx, eS), Ux($x, 2, "direction", Yx, eS), Vx($x, eS);
var tS = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(tS || {});
Object.values(tS);
//#endregion
//#region node_modules/.pnpm/@dnd-kit+react@0.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/react/sortable.js
var nS = Object.defineProperty, rS = Object.defineProperties, iS = Object.getOwnPropertyDescriptors, aS = Object.getOwnPropertySymbols, oS = Object.prototype.hasOwnProperty, sS = Object.prototype.propertyIsEnumerable, cS = (e, t, n) => t in e ? nS(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, lS = (e, t) => {
	for (var n in t ||= {}) oS.call(t, n) && cS(e, n, t[n]);
	if (aS) for (var n of aS(t)) sS.call(t, n) && cS(e, n, t[n]);
	return e;
}, uS = (e, t) => rS(e, iS(t));
function dS(e) {
	let { accept: t, collisionDetector: n, collisionPriority: r, id: i, data: a, element: o, handle: s, index: c, group: l, disabled: u, feedback: d, modifiers: f, sensors: p, target: m, type: h } = e, g = lS(lS({}, Qb), e.transition), _ = Ax((t) => new cx(uS(lS({}, e), {
		transition: g,
		register: !1,
		handle: fx(s),
		element: fx(o),
		target: fx(m),
		feedback: d
	}), t)), v = hx(_, fS);
	return vx(i, () => _.id = i), px(() => {
		z(() => {
			_.group = l, _.index = c;
		});
	}, [
		_,
		l,
		c
	]), vx(h, () => _.type = h), vx(t, () => _.accept = t, void 0, Od), vx(a, () => a && (_.data = a)), vx(c, () => {
		_.manager?.dragOperation.status.idle && g?.idle && _.refreshShape();
	}, gx), yx(s, (e) => _.handle = e), yx(o, (e) => _.element = e), yx(m, (e) => _.target = e), vx(u, () => _.disabled = u === !0), vx(p, () => _.sensors = p), vx(n, () => _.collisionDetector = n), vx(r, () => _.collisionPriority = r), vx(d, () => _.feedback = d ?? "default"), vx(g, () => _.transition = g, void 0, Od), vx(f, () => _.modifiers = f, void 0, Od), vx(e.alignment, () => _.alignment = e.alignment), {
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
		handleRef: (0, E.useCallback)((e) => {
			_.handle = e ?? void 0;
		}, [_]),
		ref: (0, E.useCallback)((e) => {
			!e && _.element?.isConnected && !_.manager?.dragOperation.status.idle || (_.element = e ?? void 0);
		}, [_]),
		sourceRef: (0, E.useCallback)((e) => {
			!e && _.source?.isConnected && !_.manager?.dragOperation.status.idle || (_.source = e ?? void 0);
		}, [_]),
		targetRef: (0, E.useCallback)((e) => {
			!e && _.target?.isConnected && !_.manager?.dragOperation.status.idle || (_.target = e ?? void 0);
		}, [_])
	};
}
function fS(e, t, n) {
	return !!(e === "isDragSource" && !n && t);
}
//#endregion
//#region node_modules/.pnpm/@dnd-kit+helpers@0.3.2/node_modules/@dnd-kit/helpers/dist/index.js
var pS = Object.defineProperty, mS = Object.defineProperties, hS = Object.getOwnPropertyDescriptors, gS = Object.getOwnPropertySymbols, _S = Object.prototype.hasOwnProperty, vS = Object.prototype.propertyIsEnumerable, yS = (e, t, n) => t in e ? pS(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, bS = (e, t) => {
	for (var n in t ||= {}) _S.call(t, n) && yS(e, n, t[n]);
	if (gS) for (var n of gS(t)) vS.call(t, n) && yS(e, n, t[n]);
	return e;
}, xS = (e, t) => mS(e, hS(t));
function SS(e, t, n) {
	if (t === n) return e;
	let r = e.slice();
	return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function CS(e) {
	return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function wS(e, t, n) {
	let { source: r, target: i, canceled: a } = t.operation;
	if (!r || !i || a) return "preventDefault" in t && t.preventDefault(), e;
	let o = (e, t) => e === t || typeof e == "object" && "id" in e && e.id === t;
	if (Array.isArray(e)) {
		let s = e.findIndex((e) => o(e, r.id)), c = e.findIndex((e) => o(e, i.id));
		if (s === -1 || c === -1) {
			if (CS(r)) {
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
	if (c === -1 && CS(r)) {
		let i = r.initialGroup, a = r.initialIndex, o = r.group, s = r.index;
		if (i == null || o == null || !(i in e) || !(o in e) || i === o && a === s) return "preventDefault" in t && t.preventDefault(), e;
		if (i === o) return xS(bS({}, e), { [i]: n(e[i], a, s) });
		let c = e[i][a];
		return xS(bS({}, e), {
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
		if (l != null && l === d && c === u && CS(r)) {
			let t = r.group != null && r.group !== l, i = r.index !== c;
			if (t || i) {
				let t = r.group ?? l;
				if (t in e) {
					if (l === t) return xS(bS({}, e), { [l]: n(e[l], c, r.index) });
					let i = e[l][c];
					return xS(bS({}, e), {
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
	if (l === d) return xS(bS({}, e), { [l]: n(e[l], c, u) });
	let m = i.shape && Math.round(p.y) > Math.round(i.shape.center.y) ? 1 : 0, h = e[l][c];
	return xS(bS({}, e), {
		[l]: [...e[l].slice(0, c), ...e[l].slice(c + 1)],
		[d]: [
			...e[d].slice(0, u + m),
			h,
			...e[d].slice(u + m)
		]
	});
}
function TS(e, t) {
	return wS(e, t, SS);
}
//#endregion
//#region src/card-carousel/studio-ui/utils.ts
function ES(e = []) {
	let t = e.length ? Math.max(...e.map((e) => e.id)) + 1 : 1;
	return {
		id: t,
		name: `Card #${t}`,
		title: "",
		subtitle: "",
		cardType: p.UNKNOWN,
		secondaryContent: null
	};
}
//#endregion
//#region src/card-carousel/studio-ui/components/CarouselEditor.tsx
function DS({ id: e, cardName: t, index: n, active: r, canDelete: i, onSelect: a, onDelete: o }) {
	let { ref: s } = dS({
		id: e,
		index: n
	});
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		ref: s,
		className: "d-flex justify-content-between p-2 border rounded-sm" + (r ? " bg-light-300" : ""),
		onClick: a,
		children: [/* @__PURE__ */ (0, L.jsx)("div", { children: t }), /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "d-flex align-items-center",
			children: [i && /* @__PURE__ */ (0, L.jsx)("button", {
				className: "material-icons btn btn-link p-0 text-danger",
				"aria-label": "Delete card",
				onClick: (e) => {
					e.stopPropagation(), o();
				},
				children: "delete_outline"
			}), /* @__PURE__ */ (0, L.jsx)("span", {
				className: "material-icons text-light-600",
				children: "drag_indicator"
			})]
		})]
	});
}
function OS() {
	let { values: e, setFieldValue: t } = xc(), [n, r] = (0, E.useState)(0);
	return /* @__PURE__ */ (0, L.jsx)(Dx, {
		onDragOver: (n) => t("cards", TS(e.cards, n)),
		children: /* @__PURE__ */ (0, L.jsx)($c, {
			name: "cards",
			children: ({ push: t, remove: i }) => /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "row m-0 carousel-editor",
				children: [/* @__PURE__ */ (0, L.jsxs)("div", {
					className: "col-3 p-2 border-right",
					children: [/* @__PURE__ */ (0, L.jsxs)(m, {
						variant: "primary",
						onClick: () => {
							t(ES(e.cards)), r(e.cards.length);
						},
						children: [/* @__PURE__ */ (0, L.jsx)("span", {
							className: "material-icons",
							children: "add"
						}), " Add Card"]
					}), /* @__PURE__ */ (0, L.jsx)("div", {
						className: "mt-4",
						children: e.cards.map((t, a) => /* @__PURE__ */ (0, L.jsx)(DS, {
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
				}), /* @__PURE__ */ (0, L.jsx)("div", {
					className: "col-9 p-4",
					children: e.cards.length > 0 && /* @__PURE__ */ (0, L.jsx)(Au, { cardIndex: n })
				})]
			})
		})
	});
}
//#endregion
//#region src/card-carousel/studio-ui/components/ModalFooter.tsx
function kS({ runtime: e, showingEditor: t, onContinue: n }) {
	return /* @__PURE__ */ (0, L.jsx)(Bn, {
		position: "bottom",
		className: "p-4 border-top card-carousel-editor-modal-footer",
		children: /* @__PURE__ */ (0, L.jsxs)(d, {
			direction: "horizontal",
			gap: 4,
			children: [t ? /* @__PURE__ */ (0, L.jsx)(m, {
				variant: "primary",
				type: "submit",
				className: "save-button",
				children: "Save"
			}) : /* @__PURE__ */ (0, L.jsx)(m, {
				type: "button",
				variant: "primary",
				className: "save-button",
				onClick: n,
				children: "Continue"
			}), /* @__PURE__ */ (0, L.jsx)(m, {
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
function AS({ runtime: e, saveUrl: t, initData: n }) {
	let [r, i] = (0, E.useState)(!1);
	return /* @__PURE__ */ (0, L.jsx)(Fc, {
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
		children: /* @__PURE__ */ (0, L.jsx)(Wc, { children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "studio-ui d-flex flex-column justify-content-between",
			children: [r ? /* @__PURE__ */ (0, L.jsx)(OS, {}) : /* @__PURE__ */ (0, L.jsx)(el, {}), /* @__PURE__ */ (0, L.jsx)(kS, {
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
//#region src/card-carousel/studio-ui/main.tsx
var jS = (e, t, n) => {
	let r = e && "jquery" in e ? e[0] : e, i = t.handlerUrl(e, "studio_save");
	(!n.cards || !n.cards.length) && (n.cards = [ES()]);
	let a = r.parentElement?.parentElement;
	a && (a.style.minHeight = "635px"), (0, te.createRoot)(r).render(/* @__PURE__ */ (0, L.jsx)(E.StrictMode, { children: /* @__PURE__ */ (0, L.jsx)(C, {
		locale: "en",
		children: /* @__PURE__ */ (0, L.jsx)(AS, {
			saveUrl: i,
			runtime: t,
			initData: n
		})
	}) }));
};
//#endregion
export { jS as renderBlock };
