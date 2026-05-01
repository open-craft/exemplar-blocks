import { S as e, _ as t, a as n, b as r, d as i, f as a, g as o, h as s, i as c, m as l, n as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _, w as v } from "./jsx-runtime-ycfb5HQk.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var y = r(), b = /* @__PURE__ */ v(s()), x = /* @__PURE__ */ v(e()), S = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], C = { pill: !1 }, w = /* @__PURE__ */ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.variant, i = e.pill, o = e.className, s = e.as, c = s === void 0 ? "span" : s, u = f(e, S), d = a(n, "badge");
	return /* @__PURE__ */ x.createElement(c, l({ ref: t }, u, { className: (0, b.default)(o, d, i && d + "-pill", r && d + "-" + r) }));
});
w.displayName = "Badge", w.defaultProps = C;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var T = /* @__PURE__ */ v(i()), E = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], ee = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], te = { noGutters: !1 }, D = /* @__PURE__ */ x.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.noGutters, o = e.as, s = o === void 0 ? "div" : o, c = f(e, E), u = a(n, "row"), d = u + "-cols", p = [];
	return ee.forEach(function(e) {
		var t = c[e];
		delete c[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && p.push("" + d + r + "-" + n);
	}), /* @__PURE__ */ x.createElement(s, l({ ref: t }, c, { className: b.default.apply(void 0, [
		r,
		u,
		i && "no-gutters"
	].concat(p)) }));
});
D.displayName = "Row", D.defaultProps = te;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Badge/index.js
var ne = /* @__PURE__ */ x.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /* @__PURE__ */ x.createElement(w, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), re = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z",
	fill: "currentColor"
})), ie = (e) => /* @__PURE__ */ x.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ x.createElement("path", {
	d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z",
	fill: "currentColor"
})), ae = "pgn__overflow-scroll-item", oe = (e) => e?.offsetLeft || 0, se = ({ overflowRef: e, activeChildElementIndex: t, childrenElements: n, scrollAnimationBehavior: r = "smooth", onScrollPrevious: i, onScrollNext: a, onChangeOffset: o, currentOffset: s, offset: c, offsetType: l = "percentage" }) => {
	let u = (0, x.useCallback)((e, t, n) => {
		let r = parseInt(e, 10);
		return t === "percentage" ? Math.round(r / 100 * n) : r;
	}, []);
	return {
		scrollToPrevious: (0, x.useCallback)(() => {
			if (!e) return;
			let a = (e) => e <= 0 ? n[0] : n[e], d = t - 1, f = oe(a(d));
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
		scrollToNext: (0, x.useCallback)(() => {
			if (!e) return;
			let i = n.length - 1, d = t + 1, f = d >= i, p = oe(f ? n[i] : n[d]);
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
	(0, x.useEffect)(() => {
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
}, O = (e) => e ? Math.abs(Math.round(e.scrollLeft)) : 0, pe = ({ overflowRef: e, childrenElements: t, activeChildElementIndex: n, onActiveChildElementIndexChange: r, disableScroll: i, onOverflowElementScrollLeftChange: a }) => {
	let [o, s] = (0, x.useState)(!1), [c, l] = (0, x.useState)(0), u = (0, x.useCallback)(({ isScrollingLeft: i }) => {
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
	]), d = (0, x.useCallback)((t) => {
		!e?.current || i || u({ isScrollingLeft: t.deltaX < 0 });
	}, [
		e,
		i,
		u
	]), f = (0, x.useCallback)(() => {
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
	]), p = (0, x.useCallback)(() => {
		let t = O(e);
		a(t), o && (u({ isScrollingLeft: t < c }), l(t));
	}, [
		o,
		e,
		u,
		c,
		a
	]), m = (0, x.useCallback)(() => {
		l(O(e)), s(!0);
	}, [e]), h = (0, x.useCallback)(() => {
		s(!1);
	}, []), g = (0, x.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && l(O(e));
	}, [e]), _ = (0, x.useCallback)((t) => {
		(t.key === "ArrowLeft" || t.key === "ArrowRight") && u({ isScrollingLeft: e.scrollLeft < c });
	}, [
		e,
		c,
		u
	]);
	return (0, x.useEffect)(() => {
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
}, me = ({ overflowRef: e, childQuerySelector: t, onScrollPrevious: n, onScrollNext: r, hasInteractiveChildren: i = !1, disableScroll: a = !1, disableOpacityMasks: o = !1, scrollAnimationBehavior: s = "smooth", offset: c, offsetType: l = "percentage" }) => {
	let [u, d] = (0, x.useState)(0), [f, p] = (0, x.useState)(!0), [m, h] = (0, x.useState)(!0), [g, _] = (0, x.useState)(0), v = k({
		element: e,
		childQuerySelector: t
	});
	(0, x.useEffect)(() => {
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
	let [y, b] = (0, x.useState)(0);
	pe({
		overflowRef: e,
		childrenElements: v,
		activeChildElementIndex: y,
		onActiveChildElementIndexChange: (0, x.useCallback)((e) => {
			b(e);
		}, []),
		disableScroll: a,
		onOverflowElementScrollLeftChange: (0, x.useCallback)((e) => {
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
	let { scrollToPrevious: S, scrollToNext: C } = se({
		overflowRef: e,
		activeChildElementIndex: y,
		childrenElements: v,
		scrollAnimationBehavior: s,
		onScrollPrevious: (0, x.useCallback)(() => {
			b((e) => Math.max(e - 1, 0)), n && n();
		}, [n]),
		onScrollNext: (0, x.useCallback)(() => {
			b((e) => Math.min(e + 1, v.length - 1)), r && r();
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
		activeChildElementIndex: y
	};
}, A = (e) => (0, x.useMemo)(() => x.Children.map(x.Children.toArray(e), (e) => (0, x.cloneElement)(e, { className: (0, b.default)(ae, e.props.className) })), [e]), j = /* @__PURE__ */ (0, x.createContext)();
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScrollItems.js
function M({ children: e }) {
	return A(e);
}
M.propTypes = { children: T.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/OverflowScroll/OverflowScroll.js
function N({ ariaLabel: e, children: t, childQuerySelector: n, hasInteractiveChildren: r, disableScroll: i, disableOpacityMasks: a, onScrollPrevious: o, onScrollNext: s, offset: c, offsetType: l }) {
	let [u, d] = (0, x.useState)(), { isScrolledToStart: f, isScrolledToEnd: p, scrollToPrevious: m, scrollToNext: h } = me({
		childQuerySelector: n,
		hasInteractiveChildren: r,
		disableScroll: i,
		disableOpacityMasks: a,
		onScrollPrevious: o,
		onScrollNext: s,
		overflowRef: u,
		offset: c,
		offsetType: l
	}), g = (0, x.useMemo)(() => ({
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
	return /* @__PURE__ */ x.createElement("div", {
		className: "pgn__overflow-scroll",
		role: "region",
		"aria-label": e
	}, /* @__PURE__ */ x.createElement(j.Provider, { value: g }, t));
}
N.Items = M, N.propTypes = {
	ariaLabel: T.default.string.isRequired,
	children: T.default.node.isRequired,
	childQuerySelector: T.default.string,
	hasInteractiveChildren: T.default.bool,
	disableScroll: T.default.bool,
	disableOpacityMasks: T.default.bool,
	onScrollPrevious: T.default.func,
	onScrollNext: T.default.func,
	offset: T.default.oneOfType([T.default.number, T.default.string]),
	offsetType: T.default.oneOf(["percentage", "fixed"])
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
var P = /* @__PURE__ */ x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ x.createElement("div", {
	className: (0, b.default)("pgn__card-body", e),
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
], he = ["white", "muted"], L = /* @__PURE__ */ x.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, b.default)(t, e ? `${e}-${F}` : F, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ x.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ x.createElement(P, null, o) : o);
});
L.propTypes = {
	prefix: T.default.string,
	bgColor: T.default.oneOf(I),
	textColor: T.default.oneOf([...I, ...he]),
	borderColor: T.default.oneOf(I),
	hasBody: T.default.bool,
	as: T.default.elementType,
	className: T.default.string,
	children: T.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var R = /* @__PURE__ */ (0, x.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function ge({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ x.createElement(R.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var _e = x.createContext({}), z = !0;
function ve({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = z, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function B({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = x.useContext(_e), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...ve(u)
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
		let r = x.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(x.createElement(x.Fragment, { key: t }, r, x.createElement("br", null)));
	}
	return x.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? z
	}, t ? m.map((e, n) => x.createElement(t, { key: n }, e)) : m);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var ye = 20, V = /* @__PURE__ */ x.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, x.useContext)(R), l = (0, x.useCallback)((e) => {
		if (/* @__PURE__ */ x.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ x.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ x.createElement("div", { className: (0, b.default)("pgn__card-header", t) }, /* @__PURE__ */ x.createElement(B, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ x.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ x.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ x.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ x.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
V.propTypes = {
	actions: T.default.node,
	className: T.default.string,
	title: T.default.node,
	size: T.default.oneOf(["sm", "md"]),
	subtitle: T.default.node,
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number
}, V.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: ye,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var be = /* @__PURE__ */ (0, x.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ x.createElement("div", {
	className: (0, b.default)("pgn__card-divider", e),
	ref: n,
	...t
})), xe = 100, H = /* @__PURE__ */ x.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, x.useContext)(R);
	return c ? /* @__PURE__ */ x.createElement("div", { className: (0, b.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ x.createElement(B, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ x.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ x.createElement("div", { className: "pgn__card-section-actions" }, r));
});
H.propTypes = {
	className: T.default.string,
	children: T.default.node,
	title: T.default.node,
	actions: T.default.node,
	muted: T.default.bool,
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number
}, H.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: xe,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var Se = 18, U = /* @__PURE__ */ x.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, x.useContext)(R), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ x.createElement("div", { className: (0, b.default)(t, d) }, /* @__PURE__ */ x.createElement(B, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)(t, d),
		ref: s
	}, r && /* @__PURE__ */ x.createElement("div", { className: f }, r), e);
});
U.propTypes = {
	children: T.default.node,
	className: T.default.string,
	textElement: T.default.node,
	isStacked: T.default.bool,
	orientation: T.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number
}, U.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: Se,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var Ce = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", we = 140, Te = 41, W = /* @__PURE__ */ x.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: h, isLoading: g } = (0, x.useContext)(R), [_, v] = (0, x.useState)(!1), [y, S] = (0, x.useState)(!1), C = `pgn__card-wrapper-image-cap ${h}`, w = () => /* @__PURE__ */ x.createElement(B, {
		containerClassName: "pgn__card-image-cap-loader",
		height: h === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /* @__PURE__ */ x.createElement(B, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (g) return /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)(C, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = Ce : S(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)(d, C),
		ref: m
	}, !!e && /* @__PURE__ */ x.createElement(x.Fragment, null, p && !_ && w(), /* @__PURE__ */ x.createElement("img", {
		className: (0, b.default)("pgn__card-image-cap", { show: _ }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => v(!0),
		alt: n,
		loading: f
	})), !!r && /* @__PURE__ */ x.createElement(x.Fragment, null, p && !y && T(), /* @__PURE__ */ x.createElement("img", {
		className: (0, b.default)("pgn__card-logo-cap", { show: y }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: f
	})));
});
W.propTypes = {
	className: T.default.string,
	src: T.default.string,
	fallbackSrc: T.default.string,
	srcAlt: T.default.string,
	logoSrc: T.default.string,
	fallbackLogoSrc: T.default.string,
	logoAlt: T.default.string,
	skeletonHeight: T.default.number,
	skeletonWidth: T.default.number,
	logoSkeleton: T.default.bool,
	logoSkeletonHeight: T.default.number,
	logoSkeletonWidth: T.default.number,
	imageLoadingType: T.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: T.default.bool
}, W.defaultProps = {
	src: void 0,
	fallbackSrc: Ce,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: we,
	logoSkeleton: !1,
	logoSkeletonHeight: Te,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var G = /* @__PURE__ */ x.forwardRef(({ className: e, children: t, variant: r, icon: i, title: a, actions: o, ...s }, c) => {
	let { isLoading: l } = (0, x.useContext)(R);
	return l ? /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: c
	}, /* @__PURE__ */ x.createElement(B, null)) : /* @__PURE__ */ x.createElement("div", {
		className: (0, b.default)("pgn__card-status", `pgn__card-status__${r}`, e),
		ref: c,
		...s
	}, /* @__PURE__ */ x.createElement("div", { className: "pgn__card-status__content" }, i && /* @__PURE__ */ x.createElement(n, {
		className: "pgn__card-status__content-icon",
		src: i
	}), /* @__PURE__ */ x.createElement("div", { className: "pgn__card-status__message-content" }, a && /* @__PURE__ */ x.createElement("div", { className: "pgn__card-status__heading" }, a), t)), !!o && /* @__PURE__ */ x.createElement("div", { className: "pgn__card-status__actions" }, o));
});
G.propTypes = {
	children: T.default.node.isRequired,
	className: T.default.string,
	icon: T.default.func,
	variant: T.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: T.default.oneOfType([T.default.element, T.default.string]),
	actions: T.default.node
}, G.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDeck.js
var K = /* @__PURE__ */ x.forwardRef(({ className: e, children: t, columnSizes: n, hasInteractiveChildren: r, canScrollHorizontal: i, hasOverflowScrollItems: a, hasEqualColumnHeights: o }, s) => {
	let c = (0, x.useMemo)(() => x.Children.map(t, (e) => /* @__PURE__ */ x.createElement(g, {
		...n,
		className: (0, b.default)("pgn__card-deck__card-item", { "pgn__card__disable-equal-column-heights": !o })
	}, e)), [
		t,
		n,
		o
	]), l = A(c), u = (0, x.useMemo)(() => a ? l : c, [
		a,
		l,
		c
	]);
	return /* @__PURE__ */ x.createElement("div", { className: (0, b.default)("pgn__card-deck", { "pgn__card-deck-has-horizontal-scroll": i }, e) }, /* @__PURE__ */ x.createElement(D, {
		className: "pgn__card-deck-row",
		tabIndex: r ? -1 : 0,
		ref: s
	}, u));
});
K.propTypes = {
	className: T.default.string,
	children: T.default.node.isRequired,
	columnSizes: T.default.shape({
		xs: T.default.number,
		sm: T.default.number,
		md: T.default.number,
		lg: T.default.number,
		xl: T.default.number
	}),
	hasInteractiveChildren: T.default.bool,
	canScrollHorizontal: T.default.bool,
	hasOverflowScrollItems: T.default.bool,
	hasEqualColumnHeights: T.default.bool
}, K.defaultProps = {
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
var q = /* @__PURE__ */ (0, x.createContext)();
function J({ columnSizes: e, hasInteractiveChildren: t, canScrollHorizontal: n, children: r, CardCarouselControls: i }) {
	let { overflowRef: a, setOverflowRef: o, isScrolledToStart: s, isScrolledToEnd: c, scrollToPrevious: l, scrollToNext: u } = (0, x.useContext)(j), d = (0, x.useMemo)(() => ({
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
	return /* @__PURE__ */ x.createElement(q.Provider, { value: d }, r);
}
J.propTypes = {
	children: T.default.node.isRequired,
	columnSizes: T.default.shape({
		xs: T.default.number,
		sm: T.default.number,
		md: T.default.number,
		lg: T.default.number,
		xl: T.default.number
	}),
	hasInteractiveChildren: T.default.bool,
	canScrollHorizontal: T.default.bool,
	CardCarouselControls: T.default.elementType
}, J.defaultProps = {
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
function Ee({ children: e, as: t, className: n }) {
	let r = t || "h2";
	return /* @__PURE__ */ x.createElement(r, { className: (0, b.default)("pgn__card-carousel-title", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselSubtitle.js
function De({ children: e, as: t, className: n }) {
	let r = t || "p";
	return /* @__PURE__ */ x.createElement(r, { className: (0, b.default)("pgn__card-carousel-subtitle", n) }, e);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/messages.js
var Oe = o({
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
function ke() {
	let { isScrolledToStart: e, isScrolledToEnd: t, scrollToPrevious: r, scrollToNext: i } = (0, x.useContext)(q), a = _();
	return e && t ? null : /* @__PURE__ */ x.createElement("div", { className: "pgn__card-carousel-controls" }, /* @__PURE__ */ x.createElement(u, {
		direction: "horizontal",
		gap: 1
	}, /* @__PURE__ */ x.createElement(p, {
		disabled: e,
		src: re,
		iconAs: n,
		alt: a.formatMessage(Oe.scrollToPrevious),
		onClick: r
	}), /* @__PURE__ */ x.createElement(p, {
		disabled: t,
		src: ie,
		iconAs: n,
		alt: a.formatMessage(Oe.scrollToNext),
		onClick: i
	})));
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselHeader.js
var Ae = (e) => e ? /* @__PURE__ */ (0, x.isValidElement)(e) ? e : /* @__PURE__ */ x.createElement(Ee, null, e) : null, je = (e) => e ? /* @__PURE__ */ (0, x.isValidElement)(e) ? e : /* @__PURE__ */ x.createElement(De, null, e) : null;
function Y({ title: e, subtitle: t }) {
	let { CardCarouselControls: n } = (0, x.useContext)(q), r = n || ke, i = Ae(e), a = je(t);
	return /* @__PURE__ */ x.createElement("div", { className: "pgn__card-carousel-header" }, /* @__PURE__ */ x.createElement("div", null, i, a), /* @__PURE__ */ x.createElement(r, null));
}
Y.propTypes = {
	title: T.default.node,
	subtitle: T.default.node
}, Y.defaultProps = {
	title: void 0,
	subtitle: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarouselItems.js
function Me({ children: e }) {
	let { columnSizes: t, hasInteractiveChildren: n, canScrollHorizontal: r, setOverflowRef: i } = (0, x.useContext)(q);
	return /* @__PURE__ */ x.createElement(K, {
		ref: i,
		columnSizes: t,
		hasInteractiveChildren: n,
		canScrollHorizontal: r,
		hasOverflowScrollItems: !0
	}, e);
}
Me.propTypes = { children: T.default.node.isRequired };
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardCarousel/CardCarousel.js
function X({ ariaLabel: e, children: t, title: n, subtitle: r, columnSizes: i, hasInteractiveChildren: a, canScrollHorizontal: o, disableOpacityMasks: s, onScrollPrevious: c, onScrollNext: l, CardCarouselControls: u }) {
	return /* @__PURE__ */ x.createElement(N, {
		disableScroll: !o,
		hasInteractiveChildren: a,
		disableOpacityMasks: s,
		onScrollPrevious: c,
		onScrollNext: l,
		ariaLabel: e
	}, /* @__PURE__ */ x.createElement(J, {
		columnSizes: i,
		hasInteractiveChildren: a,
		canScrollHorizontal: o,
		CardCarouselControls: u
	}, /* @__PURE__ */ x.createElement("div", { className: "pgn__card-carousel" }, /* @__PURE__ */ x.createElement(Y, {
		title: n,
		subtitle: r
	}), /* @__PURE__ */ x.createElement(Me, null, t))));
}
X.propTypes = {
	children: T.default.node.isRequired,
	ariaLabel: T.default.string.isRequired,
	title: T.default.node,
	subtitle: T.default.node,
	columnSizes: T.default.shape({
		xs: T.default.number,
		sm: T.default.number,
		md: T.default.number,
		lg: T.default.number,
		xl: T.default.number
	}),
	hasInteractiveChildren: T.default.bool,
	canScrollHorizontal: T.default.bool,
	disableOpacityMasks: T.default.bool,
	onScrollPrevious: T.default.func,
	onScrollNext: T.default.func,
	CardCarouselControls: T.default.elementType
}, X.defaultProps = {
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
var Ne = [
	"light",
	"dark",
	"muted"
], Z = /* @__PURE__ */ x.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ x.createElement(ge, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ x.createElement(L, {
		...o,
		className: (0, b.default)(n, "pgn__card", {
			horizontal: e === "horizontal",
			clickable: r,
			[`pgn__card-${c}`]: c
		}),
		ref: s,
		tabIndex: r ? 0 : -1
	}));
});
Z.propTypes = {
	className: T.default.string,
	orientation: T.default.oneOf(["vertical", "horizontal"]),
	isClickable: T.default.bool,
	isLoading: T.default.bool,
	variant: T.default.oneOf(Ne),
	muted: T.default.bool
}, Z.defaultProps = {
	...L.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Q = m(Z, "Card", { muted: {
	deprType: d.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Q.Status = G, Q.Header = V, Q.Divider = be, Q.Section = H, Q.Footer = U, Q.ImageCap = W, Q.Context = R, Q.Body = P;
//#endregion
//#region src/card-carousel/student-ui/components/ContentHighlight.tsx
var $ = h();
function Pe({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: "p-4 bg-primary-500 h-100",
		style: r === "HORIZONTAL" ? {
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
function Fe({ name: e, bg: t, fg: n, size: r }) {
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
function Ie({ items: e }) {
	return /* @__PURE__ */ (0, $.jsx)("div", {
		className: "p-4",
		children: e.map((t, n) => /* @__PURE__ */ (0, $.jsxs)("div", { children: [/* @__PURE__ */ (0, $.jsxs)(u, {
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, $.jsx)(Fe, { name: t.icon }), /* @__PURE__ */ (0, $.jsxs)("div", {
				className: "ml-4",
				children: [/* @__PURE__ */ (0, $.jsx)("h4", { children: t.title }), /* @__PURE__ */ (0, $.jsx)("p", { children: t.description })]
			})]
		}), n < e.length - 1 && /* @__PURE__ */ (0, $.jsx)("hr", {})] }, n))
	});
}
//#endregion
//#region src/card-carousel/student-ui/components/HoverList.tsx
function Le({ items: e }) {
	let [t, n] = (0, x.useState)(null);
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
					children: [e.icon && /* @__PURE__ */ (0, $.jsx)(Fe, {
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
var Re = ({ orientation: e, secondaryContent: t, children: n }) => {
	let r = null;
	switch (t.kind) {
		case "IMAGE": return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Q.ImageCap, {
			src: t.location,
			srcAlt: t.altText
		}), n] });
		case "CONTENT_HIGHLIGHT":
			r = /* @__PURE__ */ (0, $.jsx)(Pe, {
				...t,
				orientation: e
			});
			break;
		case "RICH_LIST":
			r = /* @__PURE__ */ (0, $.jsx)(Ie, { ...t });
			break;
		default: return n;
	}
	let i = e === "HORIZONTAL" ? "d-flex w-100" : "d-flex flex-column h-100 justify-content-between", a = e === "HORIZONTAL" ? "flex-grow-1 w-50" : "flex-grow-1";
	return /* @__PURE__ */ (0, $.jsxs)("div", {
		className: i,
		children: [/* @__PURE__ */ (0, $.jsx)("div", {
			className: a,
			children: n
		}), /* @__PURE__ */ (0, $.jsx)("div", {
			className: a,
			children: r
		})]
	});
};
function ze({ orientation: e, data: t, position: n }) {
	return /* @__PURE__ */ (0, $.jsx)(Q, {
		orientation: e.toLowerCase(),
		children: /* @__PURE__ */ (0, $.jsx)(Re, {
			orientation: e,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, $.jsxs)(Q.Body, { children: [
				n && /* @__PURE__ */ (0, $.jsx)("div", {
					className: "card-badge rounded-pill",
					children: /* @__PURE__ */ (0, $.jsx)(ne, {
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
				t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, $.jsx)(Q.Section, { children: /* @__PURE__ */ (0, $.jsx)(c, {
					variant: "primary",
					children: t.ctaLabel
				}) }),
				t.secondaryContent?.kind === "HOVER_LIST" && /* @__PURE__ */ (0, $.jsx)(Q.Section, { children: /* @__PURE__ */ (0, $.jsx)(Le, { ...t.secondaryContent }) })
			] })
		})
	});
}
//#endregion
//#region src/card-carousel/student-ui/StudentUI.tsx
function Be({ initData: { cards: e, displayName: t, orientation: n, disableNumbering: r } }) {
	return /* @__PURE__ */ (0, $.jsx)(X, {
		ariaLabel: t,
		title: t ? /* @__PURE__ */ (0, $.jsx)("h3", { children: t }) : "",
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
		children: e.map((t, i) => /* @__PURE__ */ (0, $.jsx)(ze, {
			orientation: n,
			data: t,
			position: r ? "" : `${i + 1} / ${e.length}`
		}, i))
	});
}
//#endregion
//#region src/card-carousel/student-ui/main.tsx
var Ve = (e, n, r) => {
	(0, y.createRoot)(e && "jquery" in e ? e[0] : e).render(/* @__PURE__ */ (0, $.jsx)(x.StrictMode, { children: /* @__PURE__ */ (0, $.jsx)(t, {
		locale: "en",
		children: /* @__PURE__ */ (0, $.jsx)(Be, {
			runtime: n,
			initData: r
		})
	}) }));
};
//#endregion
export { Ve as renderBlock };
