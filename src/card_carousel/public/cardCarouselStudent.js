import { E as e, S as t, _ as n, a as r, b as i, c as a, f as o, g as s, h as c, i as l, l as u, m as d, n as f, o as p, p as m, r as h, s as g, t as _, v, w as y, y as b } from "./jsx-runtime-BX3CIW3f.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var x = t(), S = /* @__PURE__ */ e(n()), C = /* @__PURE__ */ e(y()), w = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], T = { pill: !1 }, E = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.pill, a = e.className, o = e.as, l = o === void 0 ? "span" : o, u = c(e, w), f = d(n, "badge");
	return /* @__PURE__ */ C.createElement(l, s({ ref: t }, u, { className: (0, S.default)(a, f, i && f + "-pill", r && f + "-" + r) }));
});
E.displayName = "Badge", E.defaultProps = T;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var D = /* @__PURE__ */ e(m()), ee = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], te = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], ne = { noGutters: !1 }, O = /* @__PURE__ */ C.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, a = e.as, o = a === void 0 ? "div" : a, l = c(e, ee), u = d(n, "row"), f = u + "-cols", p = [];
	return te.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && p.push("" + f + r + "-" + n);
	}), /* @__PURE__ */ C.createElement(o, s({ ref: t }, l, { className: S.default.apply(void 0, [
		r,
		u,
		i && "no-gutters"
	].concat(p)) }));
});
O.displayName = "Row", O.defaultProps = ne;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Badge/index.js
var re = /* @__PURE__ */ C.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /* @__PURE__ */ C.createElement(E, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), ie = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",
	fill: "currentColor"
})), ae = (e) => /* @__PURE__ */ C.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ C.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), oe = "pgn__overflow-scroll-item", k = (e) => e?.offsetLeft || 0, se = ({ overflowRef: e, activeChildElementIndex: t, childrenElements: n, scrollAnimationBehavior: r = "smooth", onScrollPrevious: i, onScrollNext: a, onChangeOffset: o, currentOffset: s, offset: c, offsetType: l = "percentage" }) => {
	let u = (0, C.useCallback)((e, t, n) => {
		let r = parseInt(e, 10);
		return t === "percentage" ? Math.round(r / 100 * n) : r;
	}, []);
	return {
		scrollToPrevious: (0, C.useCallback)(() => {
			if (!e) return;
			let a = (e) => e <= 0 ? n[0] : n[e], d = t - 1, f = k(a(d));
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
		scrollToNext: (0, C.useCallback)(() => {
			if (!e) return;
			let i = n.length - 1, d = t + 1, f = d >= i, p = k(f ? n[i] : n[d]);
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
}, ce = "pgn__overflow-scroll-overflow-container", le = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%", ue = "linear-gradient(to right, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%", de = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%)", fe = ({ overflowRef: e, hasInteractiveChildren: t, disableScroll: n, disableOpacityMasks: r, isScrolledToStart: i, isScrolledToEnd: a }) => {
	(0, C.useEffect)(() => {
		if (!e) return;
		t && e.tabIndex !== "-1" && (e.tabIndex = "-1"), !t && e.tabIndex !== "0" && (e.tabIndex = "0");
		let o = globalThis.getComputedStyle(e), s = o.getPropertyValue("position"), c = o.getPropertyValue("overflow-x");
		if (e.classList.contains("pgn__overflow-scroll-overflow-container") || e.classList.add(ce), s !== "relative" && (e.style.position = "relative"), n && c !== "hidden" && (e.style.overflowX = "hidden"), !n && c !== "scroll" && (e.style.overflowX = "scroll"), r) e.style.removeProperty("mask-image"), e.style.removeProperty("webkit-mask-image");
		else {
			let t = (() => {
				if (i && !a) return ue;
				if (!i && a) return le;
				if (!i && !a) return de;
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
}, A = (e) => e ? Math.abs(Math.round(e.scrollLeft)) : 0, pe = ({ overflowRef: e, childrenElements: t, activeChildElementIndex: n, onActiveChildElementIndexChange: r, disableScroll: i, onOverflowElementScrollLeftChange: a }) => {
	let [o, s] = (0, C.useState)(!1), [c, l] = (0, C.useState)(0), u = (0, C.useCallback)(({ isScrollingLeft: i }) => {
		let a = (e) => i ? e.offsetLeft : e.offsetLeft + e.offsetWidth;
		for (let i = 0; i < t.length; i++) {
			let o = t[i];
			if (a(o) > A(e)) {
				i !== n && r(i);
				break;
			}
		}
	}, [
		n,
		t,
		e,
		r
	]), d = (0, C.useCallback)((t) => {
		!e?.current || i || u({ isScrollingLeft: t.deltaX < 0 });
	}, [
		e,
		i,
		u
	]), f = (0, C.useCallback)(() => {
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
	]), p = (0, C.useCallback)(() => {
		let t = A(e);
		a(t), o && (u({ isScrollingLeft: t < c }), l(t));
	}, [
		o,
		e,
		u,
		c,
		a
	]), m = (0, C.useCallback)(() => {
		l(A(e)), s(!0);
	}, [e]), h = (0, C.useCallback)(() => {
		s(!1);
	}, []), g = (0, C.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && l(A(e));
	}, [e]), _ = (0, C.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && u({ isScrollingLeft: e.scrollLeft < c });
	}, [
		e,
		c,
		u
	]);
	return (0, C.useEffect)(() => {
		if (!e) return;
		let t = e;
		return t.addEventListener("focusin", f), t.addEventListener("keydown", g), t.addEventListener("keyup", _), t.addEventListener("scroll", p), i || (t.addEventListener("wheel", d), t.addEventListener("mousedown", m), t.addEventListener("mouseup", h)), () => {
			e && (t.removeEventListener("focusin", f), t.removeEventListener("keydown", g), t.removeEventListener("keyup", _), t.removeEventListener("scroll", p), i || (t?.removeEventListener("wheel", d), t?.removeEventListener("mousedown", m), t?.removeEventListener("mouseup", h)));
		};
	}, [
		e,
		i,
		d,
		f,
		g,
		_,
		p,
		h,
		m
	]), {
		updateActiveChildElementIndex: u,
		updateActiveChildElementOnWheel: d,
		updateActiveChildElementOnFocusIn: f,
		handleScrollEvent: p,
		handleMouseDownEvent: m,
		handleMouseUpEvent: h,
		updateActiveChildElementOnKeyDown: g,
		updateActiveChildElementOnKeyUp: _,
		isOverflowElementMouseDown: o,
		previousOverflowScrollLeft: c
	};
}, me = ({ element: e, childQuerySelector: t }) => {
	if (!e) return [];
	let n = t || ".pgn__overflow-scroll-item", r = [...e.querySelectorAll(n)];
	return r.length, r;
}, he = ({ overflowRef: e, childQuerySelector: t, onScrollPrevious: n, onScrollNext: r, hasInteractiveChildren: i = !1, disableScroll: a = !1, disableOpacityMasks: o = !1, scrollAnimationBehavior: s = "smooth", offset: c, offsetType: l = "percentage" }) => {
	let [u, d] = (0, C.useState)(0), [f, p] = (0, C.useState)(!0), [m, h] = (0, C.useState)(!0), [g, _] = (0, C.useState)(0), v = me({
		element: e,
		childQuerySelector: t
	});
	(0, C.useEffect)(() => {
		if (!e) return;
		let n = me({
			element: e,
			childQuerySelector: t
		}).reduce((e, t) => e + t.offsetWidth, 0);
		g <= Math.max(v[0]?.offsetLeft, 0) ? p(!0) : p(!1);
		let r = A(e), i = n > e.getBoundingClientRect().width || !1, a = r >= e.scrollWidth - e.clientWidth;
		h(!!(!i || a));
	}, [
		e,
		t,
		f,
		m,
		g,
		v
	]);
	let [y, b] = (0, C.useState)(0);
	pe({
		overflowRef: e,
		childrenElements: v,
		activeChildElementIndex: y,
		onActiveChildElementIndexChange: (0, C.useCallback)((e) => {
			b(e);
		}, []),
		disableScroll: a,
		onOverflowElementScrollLeftChange: (0, C.useCallback)((e) => {
			_(e);
		}, [])
	}), fe({
		overflowRef: e,
		hasInteractiveChildren: i,
		disableScroll: a,
		disableOpacityMasks: o,
		isScrolledToStart: f,
		isScrolledToEnd: m
	});
	let { scrollToPrevious: x, scrollToNext: S } = se({
		overflowRef: e,
		activeChildElementIndex: y,
		childrenElements: v,
		scrollAnimationBehavior: s,
		onScrollPrevious: (0, C.useCallback)(() => {
			b((e) => Math.max(e - 1, 0)), n && n();
		}, [n]),
		onScrollNext: (0, C.useCallback)(() => {
			b((e) => Math.min(e + 1, v.length - 1)), r && r();
		}, [v, r]),
		onChangeOffset: d,
		currentOffset: u,
		offset: c,
		offsetType: l
	});
	return {
		scrollToPrevious: x,
		scrollToNext: S,
		isScrolledToStart: f,
		isScrolledToEnd: m,
		activeChildElementIndex: y
	};
}, ge = (e) => (0, C.useMemo)(() => C.Children.map(C.Children.toArray(e), (e) => (0, C.cloneElement)(e, { className: (0, S.default)(oe, e.props.className) })), [e]), j = /* @__PURE__ */ (0, C.createContext)();
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScrollItems.js
function _e({ children: e }) {
	return ge(e);
}
_e.propTypes = { children: D.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScroll.js
function M({ ariaLabel: e, children: t, childQuerySelector: n, hasInteractiveChildren: r, disableScroll: i, disableOpacityMasks: a, onScrollPrevious: o, onScrollNext: s, offset: c, offsetType: l }) {
	let [u, d] = (0, C.useState)(), { isScrolledToStart: f, isScrolledToEnd: p, scrollToPrevious: m, scrollToNext: h } = he({
		childQuerySelector: n,
		hasInteractiveChildren: r,
		disableScroll: i,
		disableOpacityMasks: a,
		onScrollPrevious: o,
		onScrollNext: s,
		overflowRef: u,
		offset: c,
		offsetType: l
	}), g = (0, C.useMemo)(() => ({
		overflowRef: u,
		setOverflowRef: d,
		isScrolledToStart: f,
		isScrolledToEnd: p,
		scrollToPrevious: m,
		scrollToNext: h
	}), [
		u,
		d,
		f,
		p,
		m,
		h
	]);
	return /* @__PURE__ */ C.createElement("div", {
		className: "pgn__overflow-scroll",
		role: "region",
		"aria-label": e
	}, /* @__PURE__ */ C.createElement(j.Provider, { value: g }, t));
}
M.Items = _e, M.propTypes = {
	ariaLabel: D.default.string.isRequired,
	children: D.default.node.isRequired,
	childQuerySelector: D.default.string,
	hasInteractiveChildren: D.default.bool,
	disableScroll: D.default.bool,
	disableOpacityMasks: D.default.bool,
	onScrollPrevious: D.default.func,
	onScrollNext: D.default.func,
	offset: D.default.oneOfType([D.default.number, D.default.string]),
	offsetType: D.default.oneOf(["percentage", "fixed"])
}, M.defaultProps = {
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
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardBody.js
var N = /* @__PURE__ */ C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ C.createElement("div", {
	className: (0, S.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), P = "card", F = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"dark",
	"light"
], ve = ["white", "muted"], I = /* @__PURE__ */ C.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, S.default)(t, e ? `${e}-${P}` : P, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ C.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ C.createElement(N, null, o) : o);
});
I.propTypes = {
	prefix: D.default.string,
	bgColor: D.default.oneOf(F),
	textColor: D.default.oneOf([...F, ...ve]),
	borderColor: D.default.oneOf(F),
	hasBody: D.default.bool,
	as: D.default.elementType,
	className: D.default.string,
	children: D.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var L = /* @__PURE__ */ (0, C.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function ye({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ C.createElement(L.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var be = C.createContext({}), R = !0;
function xe({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = R, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function z({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = C.useContext(be), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...xe(u)
	}, f = "react-loading-skeleton";
	n && (f += ` ${n}`);
	let p = u.inline ?? !1, m = [], h = Math.ceil(e);
	for (let t = 0; t < h; t++) {
		let n = d;
		if (h > e && t === h - 1) {
			let t = n.width ?? "100%", r = e % 1, i = typeof t == "number" ? t * r : `calc(${t} * ${r})`;
			n = {
				...n,
				width: i
			};
		}
		let r = C.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(C.createElement(C.Fragment, { key: t }, r, C.createElement("br", null)));
	}
	return C.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? R
	}, t ? m.map((e, n) => C.createElement(t, { key: n }, e)) : m);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var Se = 20, B = /* @__PURE__ */ C.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, C.useContext)(L), l = (0, C.useCallback)((e) => {
		if (/* @__PURE__ */ C.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ C.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ C.createElement("div", { className: (0, S.default)("pgn__card-header", t) }, /* @__PURE__ */ C.createElement(z, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ C.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ C.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ C.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ C.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
B.propTypes = {
	actions: D.default.node,
	className: D.default.string,
	title: D.default.node,
	size: D.default.oneOf(["sm", "md"]),
	subtitle: D.default.node,
	skeletonHeight: D.default.number,
	skeletonWidth: D.default.number
}, B.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: Se,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var Ce = /* @__PURE__ */ (0, C.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ C.createElement("div", {
	className: (0, S.default)("pgn__card-divider", e),
	ref: n,
	...t
})), we = 100, V = /* @__PURE__ */ C.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, C.useContext)(L);
	return c ? /* @__PURE__ */ C.createElement("div", { className: (0, S.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ C.createElement(z, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ C.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ C.createElement("div", { className: "pgn__card-section-actions" }, r));
});
V.propTypes = {
	className: D.default.string,
	children: D.default.node,
	title: D.default.node,
	actions: D.default.node,
	muted: D.default.bool,
	skeletonHeight: D.default.number,
	skeletonWidth: D.default.number
}, V.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: we,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var Te = 18, H = /* @__PURE__ */ C.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, C.useContext)(L), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ C.createElement("div", { className: (0, S.default)(t, d) }, /* @__PURE__ */ C.createElement(z, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)(t, d),
		ref: s
	}, r && /* @__PURE__ */ C.createElement("div", { className: f }, r), e);
});
H.propTypes = {
	children: D.default.node,
	className: D.default.string,
	textElement: D.default.node,
	isStacked: D.default.bool,
	orientation: D.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: D.default.number,
	skeletonWidth: D.default.number
}, H.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: Te,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var Ee = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", De = 140, Oe = 41, U = /* @__PURE__ */ C.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: h, isLoading: g } = (0, C.useContext)(L), [_, v] = (0, C.useState)(!1), [y, b] = (0, C.useState)(!1), x = `pgn__card-wrapper-image-cap ${h}`, w = () => /* @__PURE__ */ C.createElement(z, {
		containerClassName: "pgn__card-image-cap-loader",
		height: h === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /* @__PURE__ */ C.createElement(z, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (g) return /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)(x, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = Ee : b(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)(d, x),
		ref: m
	}, !!e && /* @__PURE__ */ C.createElement(C.Fragment, null, p && !_ && w(), /* @__PURE__ */ C.createElement("img", {
		className: (0, S.default)("pgn__card-image-cap", { show: _ }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => v(!0),
		alt: n,
		loading: f
	})), !!r && /* @__PURE__ */ C.createElement(C.Fragment, null, p && !y && T(), /* @__PURE__ */ C.createElement("img", {
		className: (0, S.default)("pgn__card-logo-cap", { show: y }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => b(!0),
		alt: a,
		loading: f
	})));
});
U.propTypes = {
	className: D.default.string,
	src: D.default.string,
	fallbackSrc: D.default.string,
	srcAlt: D.default.string,
	logoSrc: D.default.string,
	fallbackLogoSrc: D.default.string,
	logoAlt: D.default.string,
	skeletonHeight: D.default.number,
	skeletonWidth: D.default.number,
	logoSkeleton: D.default.bool,
	logoSkeletonHeight: D.default.number,
	logoSkeletonWidth: D.default.number,
	imageLoadingType: D.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: D.default.bool
}, U.defaultProps = {
	src: void 0,
	fallbackSrc: Ee,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: De,
	logoSkeleton: !1,
	logoSkeletonHeight: Oe,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var W = /* @__PURE__ */ C.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, C.useContext)(L);
	return c ? /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /* @__PURE__ */ C.createElement(z, null)) : /* @__PURE__ */ C.createElement("div", {
		className: (0, S.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /* @__PURE__ */ C.createElement("div", { className: "pgn__card-status__content" }, r && /* @__PURE__ */ C.createElement(g, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /* @__PURE__ */ C.createElement("div", { className: "pgn__card-status__message-content" }, i && /* @__PURE__ */ C.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /* @__PURE__ */ C.createElement("div", { className: "pgn__card-status__actions" }, a));
});
W.propTypes = {
	children: D.default.node.isRequired,
	className: D.default.string,
	icon: D.default.func,
	variant: D.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: D.default.oneOfType([D.default.element, D.default.string]),
	actions: D.default.node
}, W.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDeck.js
var G = /* @__PURE__ */ C.forwardRef(({ className: e, children: t, columnSizes: n, hasInteractiveChildren: r, canScrollHorizontal: i, hasOverflowScrollItems: a, hasEqualColumnHeights: s }, c) => {
	let l = (0, C.useMemo)(() => C.Children.map(t, (e) => /* @__PURE__ */ C.createElement(o, {
		...n,
		className: (0, S.default)("pgn__card-deck__card-item", { "pgn__card__disable-equal-column-heights": !s })
	}, e)), [
		t,
		n,
		s
	]), u = ge(l), d = (0, C.useMemo)(() => a ? u : l, [
		a,
		u,
		l
	]);
	return /* @__PURE__ */ C.createElement("div", { className: (0, S.default)("pgn__card-deck", { "pgn__card-deck-has-horizontal-scroll": i }, e) }, /* @__PURE__ */ C.createElement(O, {
		className: "pgn__card-deck-row",
		tabIndex: r ? -1 : 0,
		ref: c
	}, d));
});
G.propTypes = {
	className: D.default.string,
	children: D.default.node.isRequired,
	columnSizes: D.default.shape({
		xs: D.default.number,
		sm: D.default.number,
		md: D.default.number,
		lg: D.default.number,
		xl: D.default.number
	}),
	hasInteractiveChildren: D.default.bool,
	canScrollHorizontal: D.default.bool,
	hasOverflowScrollItems: D.default.bool,
	hasEqualColumnHeights: D.default.bool
}, G.defaultProps = {
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
var K = /* @__PURE__ */ (0, C.createContext)();
function q({ columnSizes: e, hasInteractiveChildren: t, canScrollHorizontal: n, children: r, CardCarouselControls: i }) {
	let { overflowRef: a, setOverflowRef: o, isScrolledToStart: s, isScrolledToEnd: c, scrollToPrevious: l, scrollToNext: u } = (0, C.useContext)(j), d = (0, C.useMemo)(() => ({
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
	return /* @__PURE__ */ C.createElement(K.Provider, { value: d }, r);
}
q.propTypes = {
	children: D.default.node.isRequired,
	columnSizes: D.default.shape({
		xs: D.default.number,
		sm: D.default.number,
		md: D.default.number,
		lg: D.default.number,
		xl: D.default.number
	}),
	hasInteractiveChildren: D.default.bool,
	canScrollHorizontal: D.default.bool,
	CardCarouselControls: D.default.elementType
}, q.defaultProps = {
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
function ke({ children: e, as: t, className: n }) {
	let r = t || "h2";
	return /* @__PURE__ */ C.createElement(r, { className: (0, S.default)("pgn__card-carousel-title", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselSubtitle.js
function Ae({ children: e, as: t, className: n }) {
	let r = t || "p";
	return /* @__PURE__ */ C.createElement(r, { className: (0, S.default)("pgn__card-carousel-subtitle", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/messages.js
var je = v({
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
function Me() {
	let { isScrolledToStart: e, isScrolledToEnd: t, scrollToPrevious: n, scrollToNext: a } = (0, C.useContext)(K), o = i();
	return e && t ? null : /* @__PURE__ */ C.createElement("div", { className: "pgn__card-carousel-controls" }, /* @__PURE__ */ C.createElement(l, {
		direction: "horizontal",
		gap: 1
	}, /* @__PURE__ */ C.createElement(r, {
		disabled: e,
		src: ie,
		iconAs: g,
		alt: o.formatMessage(je.scrollToPrevious),
		onClick: n
	}), /* @__PURE__ */ C.createElement(r, {
		disabled: t,
		src: ae,
		iconAs: g,
		alt: o.formatMessage(je.scrollToNext),
		onClick: a
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselHeader.js
var Ne = (e) => e ? /* @__PURE__ */ (0, C.isValidElement)(e) ? e : /* @__PURE__ */ C.createElement(ke, null, e) : null, Pe = (e) => e ? /* @__PURE__ */ (0, C.isValidElement)(e) ? e : /* @__PURE__ */ C.createElement(Ae, null, e) : null;
function J({ title: e, subtitle: t }) {
	let { CardCarouselControls: n } = (0, C.useContext)(K), r = n || Me, i = Ne(e), a = Pe(t);
	return /* @__PURE__ */ C.createElement("div", { className: "pgn__card-carousel-header" }, /* @__PURE__ */ C.createElement("div", null, i, a), /* @__PURE__ */ C.createElement(r, null));
}
J.propTypes = {
	title: D.default.node,
	subtitle: D.default.node
}, J.defaultProps = {
	title: void 0,
	subtitle: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselItems.js
function Fe({ children: e }) {
	let { columnSizes: t, hasInteractiveChildren: n, canScrollHorizontal: r, setOverflowRef: i } = (0, C.useContext)(K);
	return /* @__PURE__ */ C.createElement(G, {
		ref: i,
		columnSizes: t,
		hasInteractiveChildren: n,
		canScrollHorizontal: r,
		hasOverflowScrollItems: !0
	}, e);
}
Fe.propTypes = { children: D.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarousel.js
function Y({ ariaLabel: e, children: t, title: n, subtitle: r, columnSizes: i, hasInteractiveChildren: a, canScrollHorizontal: o, disableOpacityMasks: s, onScrollPrevious: c, onScrollNext: l, CardCarouselControls: u }) {
	return /* @__PURE__ */ C.createElement(M, {
		disableScroll: !o,
		hasInteractiveChildren: a,
		disableOpacityMasks: s,
		onScrollPrevious: c,
		onScrollNext: l,
		ariaLabel: e
	}, /* @__PURE__ */ C.createElement(q, {
		columnSizes: i,
		hasInteractiveChildren: a,
		canScrollHorizontal: o,
		CardCarouselControls: u
	}, /* @__PURE__ */ C.createElement("div", { className: "pgn__card-carousel" }, /* @__PURE__ */ C.createElement(J, {
		title: n,
		subtitle: r
	}), /* @__PURE__ */ C.createElement(Fe, null, t))));
}
Y.propTypes = {
	children: D.default.node.isRequired,
	ariaLabel: D.default.string.isRequired,
	title: D.default.node,
	subtitle: D.default.node,
	columnSizes: D.default.shape({
		xs: D.default.number,
		sm: D.default.number,
		md: D.default.number,
		lg: D.default.number,
		xl: D.default.number
	}),
	hasInteractiveChildren: D.default.bool,
	canScrollHorizontal: D.default.bool,
	disableOpacityMasks: D.default.bool,
	onScrollPrevious: D.default.func,
	onScrollNext: D.default.func,
	CardCarouselControls: D.default.elementType
}, Y.defaultProps = {
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
var Ie = [
	"light",
	"dark",
	"muted"
], X = /* @__PURE__ */ C.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ C.createElement(ye, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ C.createElement(I, {
		...o,
		className: (0, S.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
X.propTypes = {
	className: D.default.string,
	orientation: D.default.oneOf(["vertical", "horizontal"]),
	isClickable: D.default.bool,
	isLoading: D.default.bool,
	variant: D.default.oneOf(Ie),
	muted: D.default.bool
}, X.defaultProps = {
	...I.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Z = u(X, "Card", { muted: {
	deprType: a.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Z.Status = W, Z.Header = B, Z.Divider = Ce, Z.Section = V, Z.Footer = H, Z.ImageCap = U, Z.Context = L, Z.Body = N;
//#endregion
//#region src/card-carousel/student-ui/components/ContentHighlight.tsx
var Q = _();
function Le({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "p-4 bg-primary-500 h-100",
		style: r === h.HORIZONTAL ? {
			borderTopRightRadius: "var(--pgn-size-border-radius-lg)",
			borderBottomRightRadius: "var(--pgn-size-border-radius-lg)"
		} : {
			borderBottomRightRadius: "var(--pgn-size-border-radius-lg)",
			borderBottomLeftRadius: "var(--pgn-size-border-radius-lg)"
		},
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h4", {
				className: "text-brand-400 h3 mb-4",
				children: t
			}),
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-light-100",
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-light-100",
				children: n
			})
		]
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/MaterialIcon.tsx
function $({ name: e, bg: t, fg: n, size: r }) {
	let i = `${r === "sm" ? "p-2" : "p-3"} ${t || "bg-secondary-500"} ${n || "text-light-100"} rounded-circle`, a = r === "sm" ? "2.5rem" : "3.5rem";
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: i,
		style: {
			width: a,
			height: a
		},
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "material-icons",
			children: e
		})
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/RichList.tsx
function Re({ items: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "p-4",
		children: e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsxs)(l, {
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, Q.jsx)($, { name: t.icon }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "ml-4",
				children: [/* @__PURE__ */ (0, Q.jsx)("h4", { children: t.title }), /* @__PURE__ */ (0, Q.jsx)("p", { children: t.description })]
			})]
		}), n < e.length - 1 && /* @__PURE__ */ (0, Q.jsx)("hr", {})] }, n))
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/HoverList.tsx
function ze({ items: e }) {
	let [t, n] = (0, C.useState)(null);
	return /* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "hover-list",
		children: e.map((e, r) => /* @__PURE__ */ (0, Q.jsx)("li", {
			className: `hover-list-item ${t === r ? "is-active" : ""}`,
			onClick: () => n(t === r ? null : r),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "hover-list-content-wrapper",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "hover-list-description",
					"aria-hidden": t === r,
					style: t === r ? {
						visibility: "hidden",
						opacity: 0
					} : {},
					children: e.description
				}), e.hoverContent && /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "hover-content",
					"aria-hidden": t !== r,
					style: t === r ? {
						visibility: "visible",
						opacity: 1
					} : {},
					children: [e.icon && /* @__PURE__ */ (0, Q.jsx)($, {
						name: e.icon,
						size: "sm",
						fg: "text-primary-500",
						bg: "bg-light-100"
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
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
var Be = ({ cardType: e, orientation: t, secondaryContent: n, children: r }) => {
	let i = null;
	switch (e) {
		case f.IMAGE: return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Z.ImageCap, {
			src: n.location,
			srcAlt: n.altText
		}), r] });
		case f.CONTENT_HIGHLIGHT:
			i = /* @__PURE__ */ (0, Q.jsx)(Le, {
				...n,
				orientation: t
			});
			break;
		case f.RICH_LIST:
			i = /* @__PURE__ */ (0, Q.jsx)(Re, { ...n });
			break;
		case f.HOVER_LIST:
		default: return r;
	}
	let a = t === h.HORIZONTAL ? "row" : "d-flex flex-column h-100 justify-content-between", o = t === h.HORIZONTAL ? "col" : "flex-grow-1";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: a,
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: o,
			children: r
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: o,
			children: i
		})]
	});
};
function Ve({ orientation: e, data: t, position: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Z, {
		orientation: e.toLowerCase(),
		children: /* @__PURE__ */ (0, Q.jsx)(Be, {
			orientation: e,
			cardType: t.cardType,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, Q.jsxs)(Z.Body, { children: [
				n && /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "card-badge rounded-pill",
					children: /* @__PURE__ */ (0, Q.jsx)(re, {
						variant: "primary",
						"aria-label": n,
						children: n
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(Z.Header, {
					title: t.title,
					subtitle: t.subtitle
				}),
				t.description && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: t.description }),
				t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(p, {
					variant: "primary",
					children: t.ctaLabel
				}) }),
				t.cardType === f.HOVER_LIST && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(ze, { ...t.secondaryContent }) })
			] })
		})
	});
}
//#endregion
//#region src/card-carousel/student-ui/StudentUI.tsx
function He({ initData: { cards: e, displayName: t, orientation: n, disableNumbering: r } }) {
	return /* @__PURE__ */ (0, Q.jsx)(Y, {
		ariaLabel: t,
		title: t ? /* @__PURE__ */ (0, Q.jsx)("h3", { children: t }) : "",
		canScrollHorizontal: !0,
		disableOpacityMasks: !0,
		columnSizes: n === h.HORIZONTAL ? {
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
		children: e.map((t, i) => /* @__PURE__ */ (0, Q.jsx)(Ve, {
			orientation: n,
			data: t,
			position: r ? "" : `${i + 1} / ${e.length}`
		}, i))
	});
}
//#endregion
//#region src/card-carousel/student-ui/main.tsx
var Ue = (e, t, n) => {
	(0, x.createRoot)(e && "jquery" in e ? e[0] : e).render(/* @__PURE__ */ (0, Q.jsx)(C.StrictMode, { children: /* @__PURE__ */ (0, Q.jsx)(b, {
		locale: "en",
		children: /* @__PURE__ */ (0, Q.jsx)(He, {
			runtime: t,
			initData: n
		})
	}) }));
};
//#endregion
export { Ue as renderBlock };
