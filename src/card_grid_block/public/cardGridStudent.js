import { A as e, O as t, a as n, d as r, f as i, g as a, i as o, m as s, n as c, p as l, r as u, s as d, t as f, u as p, y as m } from "./Stack-CMSfB8yk.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Badge.js
var h = /* @__PURE__ */ e(s()), g = /* @__PURE__ */ e(t()), _ = [
	"bsPrefix",
	"variant",
	"pill",
	"className",
	"as"
], v = { pill: !1 }, y = /* @__PURE__ */ g.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.variant, o = e.pill, s = e.className, c = e.as, u = c === void 0 ? "span" : c, d = i(e, _), f = r(n, "badge");
	return /* @__PURE__ */ g.createElement(u, l({ ref: t }, d, { className: (0, h.default)(s, f, o && f + "-pill", a && f + "-" + a) }));
});
y.displayName = "Badge", y.defaultProps = v;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Container.js
var b = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], x = { fluid: !1 }, S = /* @__PURE__ */ g.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.fluid, o = e.as, s = o === void 0 ? "div" : o, c = e.className, u = i(e, b), d = r(n, "container"), f = typeof a == "string" ? "-" + a : "-fluid";
	return /* @__PURE__ */ g.createElement(s, l({ ref: t }, u, { className: (0, h.default)(c, a ? "" + d + f : d) }));
});
S.displayName = "Container", S.defaultProps = x;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var C = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], w = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], T = { noGutters: !1 }, E = /* @__PURE__ */ g.forwardRef(function(e, t) {
	var n = e.bsPrefix, a = e.className, o = e.noGutters, s = e.as, c = s === void 0 ? "div" : s, u = i(e, C), d = r(n, "row"), f = d + "-cols", p = [];
	return w.forEach(function(e) {
		var t = u[e];
		delete u[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && p.push("" + f + r + "-" + n);
	}), /* @__PURE__ */ g.createElement(c, l({ ref: t }, u, { className: h.default.apply(void 0, [
		a,
		d,
		o && "no-gutters"
	].concat(p)) }));
});
E.displayName = "Row", E.defaultProps = T;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Badge/index.js
var ee = /* @__PURE__ */ g.forwardRef(({ as: e = "span", variant: t = "primary", pill: n = !1, bsPrefix: r = "badge", ...i }, a) => /* @__PURE__ */ g.createElement(y, {
	as: e,
	variant: t,
	pill: n,
	bsPrefix: r,
	...i,
	ref: a
})), D = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(D || {}), O = /* @__PURE__ */ (0, g.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ g.createElement(S, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, h.default)(a.className, e && D[e])
}, t)), k = /* @__PURE__ */ e(p()), A = /* @__PURE__ */ g.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ g.createElement("div", {
	className: (0, h.default)("pgn__card-body", e),
	ref: r,
	...n
}, t)), j = "card", M = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info",
	"dark",
	"light"
], te = ["white", "muted"], N = /* @__PURE__ */ g.forwardRef(({ prefix: e, className: t, bgColor: n, textColor: r, borderColor: i, hasBody: a = !1, children: o, as: s = "div", ...c }, l) => {
	let u = (0, h.default)(t, e ? `${e}-${j}` : j, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`);
	return /* @__PURE__ */ g.createElement(s, {
		ref: l,
		...c,
		className: u
	}, a ? /* @__PURE__ */ g.createElement(A, null, o) : o);
});
N.propTypes = {
	prefix: k.default.string,
	bgColor: k.default.oneOf(M),
	textColor: k.default.oneOf([...M, ...te]),
	borderColor: k.default.oneOf(M),
	hasBody: k.default.bool,
	as: k.default.elementType,
	className: k.default.string,
	children: k.default.node
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardContext.js
var P = /* @__PURE__ */ (0, g.createContext)({
	orientation: "vertical",
	isLoading: !1,
	variant: "light"
});
function ne({ orientation: e = "vertical", children: t, isLoading: n = !1, variant: r = "light" }) {
	return /* @__PURE__ */ g.createElement(P.Provider, { value: {
		orientation: e,
		isLoading: n,
		variant: r
	} }, t);
}
//#endregion
//#region node_modules/.pnpm/react-loading-skeleton@3.5.0_react@18.3.1/node_modules/react-loading-skeleton/dist/index.js
var re = g.createContext({}), F = !0;
function I({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: a, direction: o, duration: s, enableAnimation: c = F, customHighlightBackground: l }) {
	let u = {};
	return o === "rtl" && (u["--animation-direction"] = "reverse"), typeof s == "number" && (u["--animation-duration"] = `${s}s`), c || (u["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (u.width = n), (typeof r == "string" || typeof r == "number") && (u.height = r), (typeof i == "string" || typeof i == "number") && (u.borderRadius = i), a && (u.borderRadius = "50%"), e !== void 0 && (u["--base-color"] = e), t !== void 0 && (u["--highlight-color"] = t), typeof l == "string" && (u["--custom-highlight-background"] = l), u;
}
function L({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: a = !1, style: o, ...s }) {
	let c = g.useContext(re), l = { ...s };
	for (let [e, t] of Object.entries(s)) t === void 0 && delete l[e];
	let u = {
		...c,
		...l,
		circle: a
	}, d = {
		...o,
		...I(u)
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
		let r = g.createElement("span", {
			className: f,
			style: n,
			key: t
		}, "‌");
		p ? m.push(r) : m.push(g.createElement(g.Fragment, { key: t }, r, g.createElement("br", null)));
	}
	return g.createElement("span", {
		className: r,
		"data-testid": i,
		"aria-live": "polite",
		"aria-busy": u.enableAnimation ?? F
	}, t ? m.map((e, n) => g.createElement(t, { key: n }, e)) : m);
}
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardHeader.js
var R = 20, z = /* @__PURE__ */ g.forwardRef(({ actions: e, className: t, size: n, subtitle: r, title: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, g.useContext)(P), l = (0, g.useCallback)((e) => {
		if (/* @__PURE__ */ g.isValidElement(e)) {
			let { children: t } = e.props, r = {
				size: n,
				children: Array.isArray(t) ? t.map(l) : l(t)
			};
			return /* @__PURE__ */ g.cloneElement(e, r);
		}
		return e;
	}, [n]);
	return c ? /* @__PURE__ */ g.createElement("div", { className: (0, h.default)("pgn__card-header", t) }, /* @__PURE__ */ g.createElement(L, {
		containerClassName: "pgn__card-header-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-header", t),
		ref: s
	}, /* @__PURE__ */ g.createElement("div", { className: "pgn__card-header-content" }, i && /* @__PURE__ */ g.createElement("div", { className: `pgn__card-header-title-${n}` }, i), r && /* @__PURE__ */ g.createElement("div", { className: `pgn__card-header-subtitle-${n}` }, r)), e && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-header-actions" }, n === "md" ? e : l(e)));
});
z.propTypes = {
	actions: k.default.node,
	className: k.default.string,
	title: k.default.node,
	size: k.default.oneOf(["sm", "md"]),
	subtitle: k.default.node,
	skeletonHeight: k.default.number,
	skeletonWidth: k.default.number
}, z.defaultProps = {
	actions: null,
	className: null,
	size: "md",
	title: null,
	subtitle: null,
	skeletonHeight: R,
	skeletonWidth: null
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardDivider.js
var B = /* @__PURE__ */ (0, g.forwardRef)(({ className: e, ...t }, n) => /* @__PURE__ */ g.createElement("div", {
	className: (0, h.default)("pgn__card-divider", e),
	ref: n,
	...t
})), V = 100, H = /* @__PURE__ */ g.forwardRef(({ className: e, children: t, title: n, actions: r, muted: i, skeletonHeight: a, skeletonWidth: o }, s) => {
	let { isLoading: c } = (0, g.useContext)(P);
	return c ? /* @__PURE__ */ g.createElement("div", { className: (0, h.default)("pgn__card-section", e, { "is-muted": i }) }, /* @__PURE__ */ g.createElement(L, {
		containerClassName: "pgn__card-section-loader",
		height: a,
		width: o
	})) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-section", e, { "is-muted": i }),
		ref: s
	}, n && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-section-title" }, n), t, r && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-section-actions" }, r));
});
H.propTypes = {
	className: k.default.string,
	children: k.default.node,
	title: k.default.node,
	actions: k.default.node,
	muted: k.default.bool,
	skeletonHeight: k.default.number,
	skeletonWidth: k.default.number
}, H.defaultProps = {
	children: null,
	className: void 0,
	title: void 0,
	actions: void 0,
	muted: !1,
	skeletonHeight: V,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFooter.js
var U = 18, W = /* @__PURE__ */ g.forwardRef(({ children: e, className: t, isStacked: n, textElement: r, skeletonHeight: i, skeletonWidth: a, orientation: o }, s) => {
	let { orientation: c, isLoading: l } = (0, g.useContext)(P), u = o || c, d = `pgn__card-footer ${u}${n ? "-stacked" : ""}`, f = `pgn__card-footer-text ${u}${n ? "-stacked" : ""}`;
	return l ? /* @__PURE__ */ g.createElement("div", { className: (0, h.default)(t, d) }, /* @__PURE__ */ g.createElement(L, {
		containerClassName: "pgn__card-footer-loader",
		height: i,
		width: a
	})) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)(t, d),
		ref: s
	}, r && /* @__PURE__ */ g.createElement("div", { className: f }, r), e);
});
W.propTypes = {
	children: k.default.node,
	className: k.default.string,
	textElement: k.default.node,
	isStacked: k.default.bool,
	orientation: k.default.oneOf(["horizontal", "vertical"]),
	skeletonHeight: k.default.number,
	skeletonWidth: k.default.number
}, W.defaultProps = {
	children: null,
	className: void 0,
	textElement: void 0,
	isStacked: !1,
	orientation: void 0,
	skeletonHeight: U,
	skeletonWidth: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardFallbackDefaultImage.js
var G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAYAAAB/AhJnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgB7dRBEYBADACxwuDf5j0QUXywiYhc7zk7APzd3gNAgvABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIoQPECF8gAjhA0QIHyBC+AARwgeIED5AhPABIp4BaNpp2Q/3/wfPkGyXOQAAAABJRU5ErkJggg==", K = 140, q = 41, J = /* @__PURE__ */ g.forwardRef(({ src: e, fallbackSrc: t, srcAlt: n, logoSrc: r, fallbackLogoSrc: i, logoAlt: a, skeletonHeight: o, skeletonWidth: s, logoSkeleton: c, logoSkeletonHeight: l, logoSkeletonWidth: u, className: d, imageLoadingType: f, skeletonDuringImageLoad: p }, m) => {
	let { orientation: _, isLoading: v } = (0, g.useContext)(P), [y, b] = (0, g.useState)(!1), [x, S] = (0, g.useState)(!1), C = `pgn__card-wrapper-image-cap ${_}`, w = () => /* @__PURE__ */ g.createElement(L, {
		containerClassName: "pgn__card-image-cap-loader",
		height: _ === "horizontal" ? "100%" : o,
		width: s
	}), T = () => /* @__PURE__ */ g.createElement(L, {
		containerClassName: "pgn__card-logo-cap",
		height: l,
		width: u
	});
	if (v) return /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)(C, d),
		"data-testid": "image-loader-wrapper"
	}, w(), c && T());
	let E = (e, t, n) => {
		let { currentTarget: r } = e;
		if (!t || r.src.endsWith(t)) {
			n === "imageCap" ? r.src = G : S(!1);
			return;
		}
		r.src = t;
	};
	return /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)(d, C),
		ref: m
	}, !!e && /* @__PURE__ */ g.createElement(g.Fragment, null, p && !y && w(), /* @__PURE__ */ g.createElement("img", {
		className: (0, h.default)("pgn__card-image-cap", { show: y }),
		src: e,
		onError: (e) => E(e, t, "imageCap"),
		onLoad: () => b(!0),
		alt: n,
		loading: f
	})), !!r && /* @__PURE__ */ g.createElement(g.Fragment, null, p && !x && T(), /* @__PURE__ */ g.createElement("img", {
		className: (0, h.default)("pgn__card-logo-cap", { show: x }),
		src: r,
		onError: (e) => E(e, i, "logoCap"),
		onLoad: () => S(!0),
		alt: a,
		loading: f
	})));
});
J.propTypes = {
	className: k.default.string,
	src: k.default.string,
	fallbackSrc: k.default.string,
	srcAlt: k.default.string,
	logoSrc: k.default.string,
	fallbackLogoSrc: k.default.string,
	logoAlt: k.default.string,
	skeletonHeight: k.default.number,
	skeletonWidth: k.default.number,
	logoSkeleton: k.default.bool,
	logoSkeletonHeight: k.default.number,
	logoSkeletonWidth: k.default.number,
	imageLoadingType: k.default.oneOf(["eager", "lazy"]),
	skeletonDuringImageLoad: k.default.bool
}, J.defaultProps = {
	src: void 0,
	fallbackSrc: G,
	logoSrc: void 0,
	fallbackLogoSrc: void 0,
	className: void 0,
	srcAlt: void 0,
	logoAlt: void 0,
	skeletonHeight: K,
	logoSkeleton: !1,
	logoSkeletonHeight: q,
	skeletonWidth: void 0,
	logoSkeletonWidth: void 0,
	imageLoadingType: "eager",
	skeletonDuringImageLoad: !1
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/CardStatus.js
var Y = /* @__PURE__ */ g.forwardRef(({ className: e, children: t, variant: n, icon: r, title: i, actions: a, ...o }, s) => {
	let { isLoading: c } = (0, g.useContext)(P);
	return c ? /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-status", e),
		"data-testid": "card-status-skeleton",
		ref: s
	}, /* @__PURE__ */ g.createElement(L, null)) : /* @__PURE__ */ g.createElement("div", {
		className: (0, h.default)("pgn__card-status", `pgn__card-status__${n}`, e),
		ref: s,
		...o
	}, /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__content" }, r && /* @__PURE__ */ g.createElement(u, {
		className: "pgn__card-status__content-icon",
		src: r
	}), /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__message-content" }, i && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__heading" }, i), t)), !!a && /* @__PURE__ */ g.createElement("div", { className: "pgn__card-status__actions" }, a));
});
Y.propTypes = {
	children: k.default.node.isRequired,
	className: k.default.string,
	icon: k.default.func,
	variant: k.default.oneOf([
		"primary",
		"success",
		"danger",
		"warning"
	]),
	title: k.default.oneOfType([k.default.element, k.default.string]),
	actions: k.default.node
}, Y.defaultProps = {
	className: void 0,
	icon: void 0,
	variant: "warning",
	title: void 0,
	actions: void 0
};
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/dist/Card/index.js
var ie = [
	"light",
	"dark",
	"muted"
], X = /* @__PURE__ */ g.forwardRef(({ orientation: e, isLoading: t, className: n, isClickable: r, muted: i, variant: a, ...o }, s) => {
	let c = i ? "muted" : a;
	return /* @__PURE__ */ g.createElement(ne, {
		orientation: e,
		isLoading: t,
		variant: c
	}, /* @__PURE__ */ g.createElement(N, {
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
X.propTypes = {
	className: k.default.string,
	orientation: k.default.oneOf(["vertical", "horizontal"]),
	isClickable: k.default.bool,
	isLoading: k.default.bool,
	variant: k.default.oneOf(ie),
	muted: k.default.bool
}, X.defaultProps = {
	...N.defaultProps,
	className: void 0,
	orientation: "vertical",
	isClickable: !1,
	variant: "light",
	isLoading: !1
};
var Z = n(X, "Card", { muted: {
	deprType: o.REMOVED,
	message: "Use \"variant\" prop instead, i.e. variant=\"muted\""
} });
Z.Status = Y, Z.Header = z, Z.Divider = B, Z.Section = H, Z.Footer = W, Z.ImageCap = J, Z.Context = P, Z.Body = A;
//#endregion
//#region src/card/common/student-ui/ContentHighlight.tsx
var Q = m();
function ae({ title: e, subtitle: t, description: n, orientation: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "p-5 bg-primary-500 h-100",
		style: r === "HORIZONTAL" ? {
			borderTopRightRadius: "var(--pgn-size-border-radius-lg)",
			borderBottomRightRadius: "var(--pgn-size-border-radius-lg)"
		} : {
			borderBottomRightRadius: "var(--pgn-size-border-radius-lg)",
			borderBottomLeftRadius: "var(--pgn-size-border-radius-lg)"
		},
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h4", {
				className: "text-accent",
				children: t
			}),
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-light-100 mb-3",
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
//#region src/card/common/student-ui/MaterialIcon.tsx
function $({ name: e, bg: t, fg: n, size: r }) {
	let i = `${r === "sm" ? "p-2" : "p-3"} ${t || "bg-secondary-500"} ${n || "text-light-100"} rounded-circle`, a = r === "sm" ? "2.5rem" : "3.5rem";
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: i,
		style: {
			width: a,
			height: a
		},
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "material-icons-outlined",
			children: e
		})
	});
}
//#endregion
//#region src/card/common/student-ui/RichList.tsx
function oe({ items: e }) {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "p-4 pt-5",
		children: e.map((t, n) => /* @__PURE__ */ (0, Q.jsxs)("div", { children: [/* @__PURE__ */ (0, Q.jsxs)(f, {
			direction: "horizontal",
			children: [/* @__PURE__ */ (0, Q.jsx)($, { name: t.icon }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "ml-4",
				children: [/* @__PURE__ */ (0, Q.jsx)("h4", { children: t.title }), /* @__PURE__ */ (0, Q.jsx)("p", { children: t.description })]
			})]
		}), n < e.length - 1 && /* @__PURE__ */ (0, Q.jsx)("hr", {})] }, n))
	});
}
//#endregion
//#region src/card/common/student-ui/HoverList.tsx
function se({ items: e }) {
	let [t, n] = (0, g.useState)(null);
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
//#region src/card/common/student-ui/ComplexCard.tsx
var ce = ({ orientation: e, secondaryContent: t, children: n }) => {
	let r = null;
	switch (t?.kind) {
		case "IMAGE": return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Z.ImageCap, {
			src: t.location,
			srcAlt: t.altText
		}), n] });
		case "CONTENT_HIGHLIGHT":
			r = /* @__PURE__ */ (0, Q.jsx)(ae, {
				...t,
				orientation: e
			});
			break;
		case "RICH_LIST":
			r = /* @__PURE__ */ (0, Q.jsx)(oe, { ...t });
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
function le({ orientation: e, data: t, position: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Z, {
		orientation: e.toLowerCase(),
		className: "complex-card",
		children: /* @__PURE__ */ (0, Q.jsx)(ce, {
			orientation: e,
			secondaryContent: t.secondaryContent,
			children: /* @__PURE__ */ (0, Q.jsxs)(Z.Body, {
				className: t.secondaryContent?.kind === "IMAGE" && e === "HORIZONTAL" ? "w-50 p-3" : "p-3",
				children: [
					n && /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "card-badge",
						children: /* @__PURE__ */ (0, Q.jsx)(ee, {
							variant: "primary",
							"aria-label": n,
							className: "rounded-pill",
							children: n
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(Z.Header, {
						title: t.title,
						subtitle: t.subtitle
					}),
					t.description && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: t.description }),
					t.ctaLabel && t.ctaLink && /* @__PURE__ */ (0, Q.jsx)(Z.Section, {
						className: "d-flex justify-content-end",
						children: /* @__PURE__ */ (0, Q.jsx)(c, {
							variant: "accent",
							className: "rounded-pill px-6",
							children: /* @__PURE__ */ (0, Q.jsx)("strong", { children: t.ctaLabel })
						})
					}),
					t.secondaryContent?.kind === "HOVER_LIST" && /* @__PURE__ */ (0, Q.jsx)(Z.Section, { children: /* @__PURE__ */ (0, Q.jsx)(se, { ...t.secondaryContent }) })
				]
			})
		})
	});
}
//#endregion
//#region src/card/card-grid/student-ui/StudentUI.tsx
function ue({ initData: { cards: e, description: t, orientation: n, backgroundColor: r, footerDescription: i } }) {
	let a = {
		sm: 12,
		md: 6,
		lg: 4
	};
	n === "HORIZONTAL" && (a.lg = 6);
	let o = {};
	return e.length === 1 ? o = {
		lg: {
			span: a.lg,
			offset: a.lg
		},
		md: {
			span: 6,
			offset: 3
		}
	} : e.length == 2 && n !== "HORIZONTAL" && (o = { lg: {
		span: a.lg,
		offset: a.lg / 2
	} }), /* @__PURE__ */ (0, Q.jsx)("div", {
		style: { backgroundColor: r },
		className: "card-grid-xblock py-4",
		children: /* @__PURE__ */ (0, Q.jsxs)(O, { children: [
			/* @__PURE__ */ (0, Q.jsx)(E, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
				dangerouslySetInnerHTML: { __html: t },
				className: "col"
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(E, { children: e.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(d, {
				...a,
				className: "d-flex my-3",
				...t === 0 && o,
				children: /* @__PURE__ */ (0, Q.jsx)(le, {
					orientation: n,
					data: e,
					position: ""
				}, t)
			})) }),
			/* @__PURE__ */ (0, Q.jsx)(E, {
				className: "my-4",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					dangerouslySetInnerHTML: { __html: i },
					className: "col"
				})
			})
		] })
	});
}
//#endregion
//#region src/card/common/student-ui/main.css?inline
var de = ".complex-card{--pgn-color-headings-base:var(--ccblk-typography-headings-color);--ccblk-spacing-badge-spacer-x:var(--pgn-spacing-card-spacer-x);--ccblk-spacing-badge-spacer-y:var(--pgn-spacing-card-spacer-y);--ccblk-typography-headings-color:var(--pgn-color-headings-base)}.complex-card .text-accent{color:var(--pgn-color-accent-a)}.complex-card .btn-accent{background-color:var(--pgn-color-accent-a);color:var(--pgn-color-light-100);background-image:unset}.complex-card .card-badge{margin:var(--pgn-spacing-card-spacer-x);margin-bottom:0}.complex-card .card-badge .badge{padding:var(--ccblk-spacing-badge-spacer-y) var(--ccblk-spacing-badge-spacer-x);font-family:var(--pgn-typography-headings-font-family);font-size:var(--pgn-typography-font-size-h5-base);font-weight:var(--pgn-typography-headings-font-weight)}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal{max-width:50%!important}.complex-card .pgn__card .pgn__card-wrapper-image-cap.horizontal .pgn__card-image-cap{max-width:100%!important}.complex-card .pgn__card .pgn__card-header .pgn__card-header-content{margin-top:var(--pgn-spacing-card-spacer-x)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-title-md{font-family:var(--pgn-typography-headings-font-family);color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-h4-base)}.complex-card .pgn__card .pgn__card-header .pgn__card-header-subtitle-md{color:var(--ccblk-typography-headings-color);font-size:var(--pgn-typography-font-size-base);font-weight:700;font-family:var(--pgn-typography-headings-font-family)}.horizontal .hover-list{column-count:2;column-gap:calc(var(--pgn-spacing-spacer-base) * 2)!important}.hover-list-description,.hover-content{padding:calc(var(--pgn-spacing-spacer-base))}.hover-list-content-wrapper{min-height:calc(( var(--pgn-spacing-spacer-base) + var(--pgn-typography-font-size-base) * var(--pgn-typography-line-height-base) ) * 2);position:relative}.hover-list-description{opacity:1;visibility:visible;z-index:0}.hover-content{background-color:var(--pgn-color-primary-500);width:100%;color:var(--pgn-color-light-100);border-radius:var(--pgn-size-border-radius-base);opacity:0;visibility:hidden;z-index:10;align-items:center;display:flex;position:absolute;top:0;left:0}.hover-list-item:has(.hover-content){cursor:pointer}:is(.hover-list-item:has(.hover-content):hover,.hover-list-item:has(.hover-content).is-active){list-style:none;margin-left:calc(var(--pgn-spacing-spacer-base) * -2.5)!important}.hover-list-item:has(.hover-content):hover .hover-list-description{opacity:0;visibility:hidden}.hover-list-item:has(.hover-content):hover .hover-content{opacity:1;visibility:visible}.hover-content-icon-wrapper{color:var(--pgn-color-light-100);margin-right:var(--pgn-spacing-spacer-base)}.material-icons-outlined{text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";direction:ltr;font-family:Material Icons Outlined;font-size:24px;font-style:normal;font-weight:400;line-height:1;display:inline-block}", fe = (e, t, n) => {
	a({
		runtime: t,
		element: e,
		config: n.config,
		styles: de
	})(/* @__PURE__ */ (0, Q.jsx)(ue, {
		runtime: t,
		initData: n.data
	}));
};
//#endregion
export { fe as renderBlock };
