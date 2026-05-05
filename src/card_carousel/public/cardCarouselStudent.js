import { S as e, _ as t, a as n, d as r, f as i, h as a, i as o, l as s, m as c, n as l, o as u, p as d, r as f, t as p, u as m, v as h, w as g, y as _ } from "./Stack-CttXSWE5.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var v = /* @__PURE__ */ g(c()), y = /* @__PURE__ */ g(e()), b = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], x = { pill: !1 }, S = /* @__PURE__ */ y.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.variant, o = e.pill, s = e.className, c = e.as, l = c === void 0 ? "span" : c, u = i(e, b), f = r(n, "badge");
	return /* @__PURE__ */ y.createElement(l, d({ ref: t }, u, { className: (0, v.default)(s, f, o && f + "-pill", a && f + "-" + a) }));
});
S.displayName = "Badge", S.defaultProps = x;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var C = /* @__PURE__ */ g(m()), w = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], T = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], E = { noGutters: !1 }, D = /* @__PURE__ */ y.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.className, o = e.noGutters, s = e.as, c = s === void 0 ? "div" : s, l = i(e, w), u = r(n, "row"), f = u + "-cols", p = [];
	return T.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && p.push("" + f + r + "-" + n);
	}), /* @__PURE__ */ y.createElement(c, d({ ref: t }, l, { className: v.default.apply(void 0, [
		a,
		u,
		o && "no-gutters"
	].concat(p)) }));
});
D.displayName = "Row", D.defaultProps = E;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Badge/index.js
var ee = /* @__PURE__ */ y.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /* @__PURE__ */ y.createElement(S, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), te = (e) => /* @__PURE__ */ y.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",
	fill: "currentColor"
})), ne = (e) => /* @__PURE__ */ y.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), re = "pgn__overflow-scroll-item", ie = (e) => e?.offsetLeft || 0, ae = ({ overflowRef: e, activeChildElementIndex: t, childrenElements: n, scrollAnimationBehavior: r = "smooth", onScrollPrevious: i, onScrollNext: a, onChangeOffset: o, currentOffset: s, offset: c, offsetType: l = "percentage" }) => {
	let u = (0, y.useCallback)((e, t, n) => {
		let r = parseInt(e, 10);
		return t === "percentage" ? Math.round(r / 100 * n) : r;
	}, []);
	return {
		scrollToPrevious: (0, y.useCallback)(() => {
			if (!e) return;
			let a = (e) => e <= 0 ? n[0] : n[e], d = t - 1, f = ie(a(d));
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
		scrollToNext: (0, y.useCallback)(() => {
			if (!e) return;
			let i = n.length - 1, d = t + 1, f = d >= i, p = ie(f ? n[i] : n[d]);
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
}, oe = "pgn__overflow-scroll-overflow-container", se = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%", ce = "linear-gradient(to right, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%", le = "linear-gradient(to right, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 0%, black 10%, black 90%, var(--pgn-color-overflow-scroll-opacity-mask-transparent) 100%)", ue = ({ overflowRef: e, hasInteractiveChildren: t, disableScroll: n, disableOpacityMasks: r, isScrolledToStart: i, isScrolledToEnd: a }) => {
	(0, y.useEffect)(() => {
		if (!e) return;
		t && e.tabIndex !== "-1" && (e.tabIndex = "-1"), !t && e.tabIndex !== "0" && (e.tabIndex = "0");
		let o = globalThis.getComputedStyle(e), s = o.getPropertyValue("position"), c = o.getPropertyValue("overflow-x");
		if (e.classList.contains("pgn__overflow-scroll-overflow-container") || e.classList.add(oe), s !== "relative" && (e.style.position = "relative"), n && c !== "hidden" && (e.style.overflowX = "hidden"), !n && c !== "scroll" && (e.style.overflowX = "scroll"), r) e.style.removeProperty("mask-image"), e.style.removeProperty("webkit-mask-image");
		else {
			let t = (() => {
				if (i && !a) return ce;
				if (!i && a) return se;
				if (!i && !a) return le;
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
}, O = (e) => e ? Math.abs(Math.round(e.scrollLeft)) : 0, de = ({ overflowRef: e, childrenElements: t, activeChildElementIndex: n, onActiveChildElementIndexChange: r, disableScroll: i, onOverflowElementScrollLeftChange: a }) => {
	let [o, s] = (0, y.useState)(!1), [c, l] = (0, y.useState)(0), u = (0, y.useCallback)(({ isScrollingLeft: i }) => {
		let a = (e) => i ? e.offsetLeft : e.offsetLeft + e.offsetWidth;
		for (let i = 0; i < t.length; i++) {
			let o = t[i];
			if (a(o) > O(e)) {
				i !== n && r(i);
				break;
			}
		}
	}, [
		n,
		t,
		e,
		r
	]), d = (0, y.useCallback)((t) => {
		!e?.current || i || u({ isScrollingLeft: t.deltaX < 0 });
	}, [
		e,
		i,
		u
	]), f = (0, y.useCallback)(() => {
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
	]), p = (0, y.useCallback)(() => {
		let t = O(e);
		a(t), o && (u({ isScrollingLeft: t < c }), l(t));
	}, [
		o,
		e,
		u,
		c,
		a
	]), m = (0, y.useCallback)(() => {
		l(O(e)), s(!0);
	}, [e]), h = (0, y.useCallback)(() => {
		s(!1);
	}, []), g = (0, y.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && l(O(e));
	}, [e]), _ = (0, y.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && u({ isScrollingLeft: e.scrollLeft < c });
	}, [
		e,
		c,
		u
	]);
	return (0, y.useEffect)(() => {
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
}, k = ({ element: e, childQuerySelector: t }) => {
	if (!e) return [];
	let n = t || ".pgn__overflow-scroll-item", r = [...e.querySelectorAll(n)];
	return r.length, r;
}, fe = ({ overflowRef: e, childQuerySelector: t, onScrollPrevious: n, onScrollNext: r, hasInteractiveChildren: i = !1, disableScroll: a = !1, disableOpacityMasks: o = !1, scrollAnimationBehavior: s = "smooth", offset: c, offsetType: l = "percentage" }) => {
	let [u, d] = (0, y.useState)(0), [f, p] = (0, y.useState)(!0), [m, h] = (0, y.useState)(!0), [g, _] = (0, y.useState)(0), v = k({
		element: e,
		childQuerySelector: t
	});
	(0, y.useEffect)(() => {
		if (!e) return;
		let n = k({
			element: e,
			childQuerySelector: t
		}).reduce((e, t) => e + t.offsetWidth, 0);
		g <= Math.max(v[0]?.offsetLeft, 0) ? p(!0) : p(!1);
		let r = O(e), i = n > e.getBoundingClientRect().width || !1, a = r >= e.scrollWidth - e.clientWidth;
		h(!!(!i || a));
	}, [
		e,
		t,
		f,
		m,
		g,
		v
	]);
	let [b, x] = (0, y.useState)(0);
	de({
		overflowRef: e,
		childrenElements: v,
		activeChildElementIndex: b,
		onActiveChildElementIndexChange: (0, y.useCallback)((e) => {
			x(e);
		}, []),
		disableScroll: a,
		onOverflowElementScrollLeftChange: (0, y.useCallback)((e) => {
			_(e);
		}, [])
	}), ue({
		overflowRef: e,
		hasInteractiveChildren: i,
		disableScroll: a,
		disableOpacityMasks: o,
		isScrolledToStart: f,
		isScrolledToEnd: m
	});
	let { scrollToPrevious: S, scrollToNext: C } = ae({
		overflowRef: e,
		activeChildElementIndex: b,
		childrenElements: v,
		scrollAnimationBehavior: s,
		onScrollPrevious: (0, y.useCallback)(() => {
			x((e) => Math.max(e - 1, 0)), n && n();
		}, [n]),
		onScrollNext: (0, y.useCallback)(() => {
			x((e) => Math.min(e + 1, v.length - 1)), r && r();
		}, [v, r]),
		onChangeOffset: d,
		currentOffset: u,
		offset: c,
		offsetType: l
	});
	return {
		scrollToPrevious: S,
		scrollToNext: C,
		isScrolledToStart: f,
		isScrolledToEnd: m,
		activeChildElementIndex: b
	};
}, A = (e) => (0, y.useMemo)(() => y.Children.map(y.Children.toArray(e), (e) => (0, y.cloneElement)(e, { className: (0, v.default)(re, e.props.className) })), [e]), j = /* @__PURE__ */ (0, y.createContext)();
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScrollItems.js
function M({ children: e }) {
	return A(e);
}
M.propTypes = { children: C.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScroll.js
function N({ ariaLabel: e, children: t, childQuerySelector: n, hasInteractiveChildren: r, disableScroll: i, disableOpacityMasks: a, onScrollPrevious: o, onScrollNext: s, offset: c, offsetType: l }) {
	let [u, d] = (0, y.useState)(), { isScrolledToStart: f, isScrolledToEnd: p, scrollToPrevious: m, scrollToNext: h } = fe({
		childQuerySelector: n,
		hasInteractiveChildren: r,
		disableScroll: i,
		disableOpacityMasks: a,
		onScrollPrevious: o,
		onScrollNext: s,
		overflowRef: u,
		offset: c,
		offsetType: l
	}), g = (0, y.useMemo)(() => ({
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
	return /* @__PURE__ */ y.createElement("div", {
		className: "pgn__overflow-scroll",
		role: "region",
		"aria-label": e
	}, /* @__PURE__ */ y.createElement(j.Provider, { value: g }, t));
}
N.Items = M, N.propTypes = {
	ariaLabel: C.default.string.isRequired,
	children: C.default.node.isRequired,
	childQuerySelector: C.default.string,
	hasInteractiveChildren: C.default.bool,
	disableScroll: C.default.bool,
	disableOpacityMasks: C.default.bool,
	onScrollPrevious: C.default.func,
	onScrollNext: C.default.func,
	offset: C.default.oneOfType([C.default.number, C.default.string]),
	offsetType: C.default.oneOf(["percentage", "fixed"])
}, N.defaultProps = {
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
var P = /* @__PURE__ */ y.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y.createElement("div", {
	className: (0, v.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), F = "card", I = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"dark",
	"light"
], pe = ["white", "muted"], L = /* @__PURE__ */ y.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, v.default)(t, e ? `${e}-${F}` : F, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ y.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ y.createElement(P, null, o) : o);
});
L.propTypes = {
	prefix: C.default.string,
	bgColor: C.default.oneOf(I),
	textColor: C.default.oneOf([...I, ...pe]),
	borderColor: C.default.oneOf(I),
	hasBody: C.default.bool,
	as: C.default.elementType,
	className: C.default.string,
	children: C.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var R = /* @__PURE__ */ (0, y.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function me({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ y.createElement(R.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var he = y.createContext({}), ge = !0;
function _e({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = ge, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function z({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = y.useContext(he), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		..._e(u)
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
		let r = y.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(y.createElement(y.Fragment, { key: t }, r, y.createElement("br", null)));
	}
	return y.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? ge
	}, t ? m.map((e, n) => y.createElement(t, { key: n }, e)) : m);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var ve = 20, B = /* @__PURE__ */ y.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, y.useContext)(R), l = (0, y.useCallback)((e) => {
		if (/* @__PURE__ */ y.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ y.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ y.createElement("div", { className: (0, v.default)("pgn__card-header", t) }, /* @__PURE__ */ y.createElement(z, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ y.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ y.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ y.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ y.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
B.propTypes = {
	actions: C.default.node,
	className: C.default.string,
	title: C.default.node,
	size: C.default.oneOf(["sm", "md"]),
	subtitle: C.default.node,
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number
}, B.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: ve,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var ye = /* @__PURE__ */ (0, y.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ y.createElement("div", {
	className: (0, v.default)("pgn__card-divider", e),
	ref: n,
	...t
})), be = 100, V = /* @__PURE__ */ y.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, y.useContext)(R);
	return c ? /* @__PURE__ */ y.createElement("div", { className: (0, v.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ y.createElement(z, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ y.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ y.createElement("div", { className: "pgn__card-section-actions" }, r));
});
V.propTypes = {
	className: C.default.string,
	children: C.default.node,
	title: C.default.node,
	actions: C.default.node,
	muted: C.default.bool,
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number
}, V.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: be,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var xe = 18, H = /* @__PURE__ */ y.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, y.useContext)(R), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ y.createElement("div", { className: (0, v.default)(t, d) }, /* @__PURE__ */ y.createElement(z, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)(t, d),
		ref: s
	}, r && /* @__PURE__ */ y.createElement("div", { className: f }, r), e);
});
H.propTypes = {
	children: C.default.node,
	className: C.default.string,
	textElement: C.default.node,
	isStacked: C.default.bool,
	orientation: C.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number
}, H.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: xe,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var Se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", Ce = 140, we = 41, U = /* @__PURE__ */ y.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: h, isLoading: g } = (0, y.useContext)(R), [_, b] = (0, y.useState)(!1), [x, S] = (0, y.useState)(!1), C = `pgn__card-wrapper-image-cap ${h}`, w = () => /* @__PURE__ */ y.createElement(z, {
		containerClassName: "pgn__card-image-cap-loader",
		height: h === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /* @__PURE__ */ y.createElement(z, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (g) return /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)(C, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = Se : S(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)(d, C),
		ref: m
	}, !!e && /* @__PURE__ */ y.createElement(y.Fragment, null, p && !_ && w(), /* @__PURE__ */ y.createElement("img", {
		className: (0, v.default)("pgn__card-image-cap", { show: _ }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => b(!0),
		alt: n,
		loading: f
	})), !!r && /* @__PURE__ */ y.createElement(y.Fragment, null, p && !x && T(), /* @__PURE__ */ y.createElement("img", {
		className: (0, v.default)("pgn__card-logo-cap", { show: x }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: f
	})));
});
U.propTypes = {
	className: C.default.string,
	src: C.default.string,
	fallbackSrc: C.default.string,
	srcAlt: C.default.string,
	logoSrc: C.default.string,
	fallbackLogoSrc: C.default.string,
	logoAlt: C.default.string,
	skeletonHeight: C.default.number,
	skeletonWidth: C.default.number,
	logoSkeleton: C.default.bool,
	logoSkeletonHeight: C.default.number,
	logoSkeletonWidth: C.default.number,
	imageLoadingType: C.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: C.default.bool
}, U.defaultProps = {
	src: void 0,
	fallbackSrc: Se,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: Ce,
	logoSkeleton: !1,
	logoSkeletonHeight: we,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var W = /* @__PURE__ */ y.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...s }, c) => {
	let { isLoading: l } = (0, y.useContext)(R);
	return l ? /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: c
	}, /* @__PURE__ */ y.createElement(z, null)) : /* @__PURE__ */ y.createElement("div", {
		className: (0, v.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: c,
		...s
	}, /* @__PURE__ */ y.createElement("div", { className: "pgn__card-status__content" }, r && /* @__PURE__ */ y.createElement(o, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /* @__PURE__ */ y.createElement("div", { className: "pgn__card-status__message-content" }, i && /* @__PURE__ */ y.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /* @__PURE__ */ y.createElement("div", { className: "pgn__card-status__actions" }, a));
});
W.propTypes = {
	children: C.default.node.isRequired,
	className: C.default.string,
	icon: C.default.func,
	variant: C.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: C.default.oneOfType([C.default.element, C.default.string]),
	actions: C.default.node
}, W.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDeck.js
var G = /* @__PURE__ */ y.forwardRef(({ className: e, children: t, columnSizes: n, hasInteractiveChildren: r, canScrollHorizontal: i, hasOverflowScrollItems: a, hasEqualColumnHeights: o }, c) => {
	let l = (0, y.useMemo)(() => y.Children.map(t, (e) => /* @__PURE__ */ y.createElement(s, {
		...n,
		className: (0, v.default)("pgn__card-deck__card-item", { "pgn__card__disable-equal-column-heights": !o })
	}, e)), [
		t,
		n,
		o
	]), u = A(l), d = (0, y.useMemo)(() => a ? u : l, [
		a,
		u,
		l
	]);
	return /* @__PURE__ */ y.createElement("div", { className: (0, v.default)("pgn__card-deck", { "pgn__card-deck-has-horizontal-scroll": i }, e) }, /* @__PURE__ */ y.createElement(D, {
		className: "pgn__card-deck-row",
		tabIndex: r ? -1 : 0,
		ref: c
	}, d));
});
G.propTypes = {
	className: C.default.string,
	children: C.default.node.isRequired,
	columnSizes: C.default.shape({
		xs: C.default.number,
		sm: C.default.number,
		md: C.default.number,
		lg: C.default.number,
		xl: C.default.number
	}),
	hasInteractiveChildren: C.default.bool,
	canScrollHorizontal: C.default.bool,
	hasOverflowScrollItems: C.default.bool,
	hasEqualColumnHeights: C.default.bool
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
var K = /* @__PURE__ */ (0, y.createContext)();
function q({ columnSizes: e, hasInteractiveChildren: t, canScrollHorizontal: n, children: r, CardCarouselControls: i }) {
	let { overflowRef: a, setOverflowRef: o, isScrolledToStart: s, isScrolledToEnd: c, scrollToPrevious: l, scrollToNext: u } = (0, y.useContext)(j), d = (0, y.useMemo)(() => ({
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
	return /* @__PURE__ */ y.createElement(K.Provider, { value: d }, r);
}
q.propTypes = {
	children: C.default.node.isRequired,
	columnSizes: C.default.shape({
		xs: C.default.number,
		sm: C.default.number,
		md: C.default.number,
		lg: C.default.number,
		xl: C.default.number
	}),
	hasInteractiveChildren: C.default.bool,
	canScrollHorizontal: C.default.bool,
	CardCarouselControls: C.default.elementType
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
function Te({ children: e, as: t, className: n }) {
	let r = t || "h2";
	return /* @__PURE__ */ y.createElement(r, { className: (0, v.default)("pgn__card-carousel-title", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselSubtitle.js
function Ee({ children: e, as: t, className: n }) {
	let r = t || "p";
	return /* @__PURE__ */ y.createElement(r, { className: (0, v.default)("pgn__card-carousel-subtitle", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/messages.js
var De = h({
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
function Oe() {
	let { isScrolledToStart: e, isScrolledToEnd: t, scrollToPrevious: n, scrollToNext: r } = (0, y.useContext)(K), i = _();
	return e && t ? null : /* @__PURE__ */ y.createElement("div", { className: "pgn__card-carousel-controls" }, /* @__PURE__ */ y.createElement(p, {
		direction: "horizontal",
		gap: 1
	}, /* @__PURE__ */ y.createElement(l, {
		disabled: e,
		src: te,
		iconAs: o,
		alt: i.formatMessage(De.scrollToPrevious),
		onClick: n
	}), /* @__PURE__ */ y.createElement(l, {
		disabled: t,
		src: ne,
		iconAs: o,
		alt: i.formatMessage(De.scrollToNext),
		onClick: r
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselHeader.js
var ke = (e) => e ? /* @__PURE__ */ (0, y.isValidElement)(e) ? e : /* @__PURE__ */ y.createElement(Te, null, e) : null, Ae = (e) => e ? /* @__PURE__ */ (0, y.isValidElement)(e) ? e : /* @__PURE__ */ y.createElement(Ee, null, e) : null;
function J({ title: e, subtitle: t }) {
	let { CardCarouselControls: n } = (0, y.useContext)(K), r = n || Oe, i = ke(e), a = Ae(t);
	return /* @__PURE__ */ y.createElement("div", { className: "pgn__card-carousel-header" }, /* @__PURE__ */ y.createElement("div", null, i, a), /* @__PURE__ */ y.createElement(r, null));
}
J.propTypes = {
	title: C.default.node,
	subtitle: C.default.node
}, J.defaultProps = {
	title: void 0,
	subtitle: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselItems.js
function je({ children: e }) {
	let { columnSizes: t, hasInteractiveChildren: n, canScrollHorizontal: r, setOverflowRef: i } = (0, y.useContext)(K);
	return /* @__PURE__ */ y.createElement(G, {
		ref: i,
		columnSizes: t,
		hasInteractiveChildren: n,
		canScrollHorizontal: r,
		hasOverflowScrollItems: !0
	}, e);
}
je.propTypes = { children: C.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarousel.js
function Y({ ariaLabel: e, children: t, title: n, subtitle: r, columnSizes: i, hasInteractiveChildren: a, canScrollHorizontal: o, disableOpacityMasks: s, onScrollPrevious: c, onScrollNext: l, CardCarouselControls: u }) {
	return /* @__PURE__ */ y.createElement(N, {
		disableScroll: !o,
		hasInteractiveChildren: a,
		disableOpacityMasks: s,
		onScrollPrevious: c,
		onScrollNext: l,
		ariaLabel: e
	}, /* @__PURE__ */ y.createElement(q, {
		columnSizes: i,
		hasInteractiveChildren: a,
		canScrollHorizontal: o,
		CardCarouselControls: u
	}, /* @__PURE__ */ y.createElement("div", { className: "pgn__card-carousel" }, /* @__PURE__ */ y.createElement(J, {
		title: n,
		subtitle: r
	}), /* @__PURE__ */ y.createElement(je, null, t))));
}
Y.propTypes = {
	children: C.default.node.isRequired,
	ariaLabel: C.default.string.isRequired,
	title: C.default.node,
	subtitle: C.default.node,
	columnSizes: C.default.shape({
		xs: C.default.number,
		sm: C.default.number,
		md: C.default.number,
		lg: C.default.number,
		xl: C.default.number
	}),
	hasInteractiveChildren: C.default.bool,
	canScrollHorizontal: C.default.bool,
	disableOpacityMasks: C.default.bool,
	onScrollPrevious: C.default.func,
	onScrollNext: C.default.func,
	CardCarouselControls: C.default.elementType
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
var Me = [
	"light",
	"dark",
	"muted"
], X = /* @__PURE__ */ y.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ y.createElement(me, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ y.createElement(L, {
		...o,
		className: (0, v.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
X.propTypes = {
	className: C.default.string,
	orientation: C.default.oneOf(["vertical", "horizontal"]),
	isClickable: C.default.bool,
	isLoading: C.default.bool,
	variant: C.default.oneOf(Me),
	muted: C.default.bool
}, X.defaultProps = {
	...L.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Z = u(X, "Card", { muted: {
	deprType: n.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Z.Status = W, Z.Header = B, Z.Divider = ye, Z.Section = V, Z.Footer = H, Z.ImageCap = U, Z.Context = R, Z.Body = P;
//#endregion
//#region src/card-carousel/student-ui/components/ContentHighlight.tsx
var Q = t();
function Ne({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "p-4 bg-primary-500 h-100",
		style: r === "HORIZONTAL" ? {
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
function Pe({ items: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "p-4",
		children: e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsxs)(p, {
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
function Fe({ items: e }) {
	let [t, n] = (0, y.useState)(null);
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
var Ie = ({ orientation: e, secondaryContent: t, children: n }) => {
	let r = null;
	switch (t.kind) {
		case "IMAGE": return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Z.ImageCap, {
			src: t.location,
			srcAlt: t.altText
		}), n] });
		case "CONTENT_HIGHLIGHT":
			r = /* @__PURE__ */ (0, Q.jsx)(Ne, {
				...t,
				orientation: e
			});
			break;
		case "RICH_LIST":
			r = /* @__PURE__ */ (0, Q.jsx)(Pe, { ...t });
			break;
		default: return n;
	}
	let i = e === "HORIZONTAL" ? "d-flex w-100" : "d-flex flex-column h-100 justify-content-between", a = e === "HORIZONTAL" ? "flex-grow-1 w-50" : "flex-grow-1";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: i,
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: a,
			children: n
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: a,
			children: r
		})]
	});
};
function Le({ orientation: e, data: t, position: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Z, {
		orientation: e.toLowerCase(),
		children: /* @__PURE__ */ (0, Q.jsx)(Ie, {
			orientation: e,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, Q.jsxs)(Z.Body, { children: [
				n && /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "card-badge rounded-pill",
					children: /* @__PURE__ */ (0, Q.jsx)(ee, {
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
				t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(f, {
					variant: "primary",
					children: t.ctaLabel
				}) }),
				t.secondaryContent?.kind === "HOVER_LIST" && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(Fe, { ...t.secondaryContent }) })
			] })
		})
	});
}
//#endregion
//#region src/card-carousel/student-ui/StudentUI.tsx
function Re({ initData: { cards: e, displayName: t, orientation: n, disableNumbering: r } }) {
	return /* @__PURE__ */ (0, Q.jsx)(Y, {
		ariaLabel: t,
		title: t ? /* @__PURE__ */ (0, Q.jsx)("h3", { children: t }) : "",
		canScrollHorizontal: !0,
		disableOpacityMasks: !0,
		columnSizes: n === "HORIZONTAL" ? {
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
		children: e.map((t, i) => /* @__PURE__ */ (0, Q.jsx)(Le, {
			orientation: n,
			data: t,
			position: r ? "" : `${i + 1} / ${e.length}`
		}, i))
	});
}
//#endregion
//#region src/card-carousel/student-ui/main.tsx
var ze = (e, t, n) => {
	a(t, e)(/* @__PURE__ */ (0, Q.jsx)(Re, {
		runtime: t,
		initData: n
	}));
};
//#endregion
export { ze as renderBlock };
