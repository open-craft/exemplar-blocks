import { _ as e, a as t, c as n, i as r, l as i, n as a, o, p as s, s as c, t as l, u, y as d } from "./Button-BV7IPJRY.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var f = /* @__PURE__ */ d(i()), p = /* @__PURE__ */ d(e()), m = /* @__PURE__ */ d(t()), h = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
m.default.string, m.default.bool, m.default.bool, m.default.bool, m.default.bool;
var g = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, _ = /* @__PURE__ */ p.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.fluid, s = e.rounded, l = e.roundedCircle, u = e.thumbnail, d = c(e, h);
	r = o(r, "img");
	var m = (0, f.default)(a && r + "-fluid", s && "rounded", l && "rounded-circle", u && r + "-thumbnail");
	return /* @__PURE__ */ p.createElement("img", n({ ref: t }, d, { className: (0, f.default)(i, m) }));
});
_.displayName = "Image", _.defaultProps = g;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var v = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], y = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], b = { noGutters: !1 }, x = /* @__PURE__ */ p.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, a = e.noGutters, s = e.as, l = s === void 0 ? "div" : s, u = c(e, v), d = o(r, "row"), m = d + "-cols", h = [];
	return y.forEach(function(e) {
		var t = u[e];
		delete u[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && h.push("" + m + r + "-" + n);
	}), /* @__PURE__ */ p.createElement(l, n({ ref: t }, u, { className: f.default.apply(void 0, [
		i,
		d,
		a && "no-gutters"
	].concat(h)) }));
});
x.displayName = "Row", x.defaultProps = b;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/ArrowOutward.js
var S = (e) => /* @__PURE__ */ p.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	...e
}, /* @__PURE__ */ p.createElement("path", {
	d: "M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z",
	fill: "currentColor"
})), C = s(), w = ({ data: e }) => {
	let { scenarioData: t } = e;
	return /* @__PURE__ */ (0, C.jsx)("div", {
		className: "rounded-lg overflow-hidden xblock-unfolding-scenario-wrapper",
		children: /* @__PURE__ */ (0, C.jsxs)(x, {
			className: "p-0",
			children: [/* @__PURE__ */ (0, C.jsxs)(r, {
				xs: "12",
				md: "8",
				className: "p-5 d-flex flex-column",
				children: [
					/* @__PURE__ */ (0, C.jsxs)("div", {
						className: "scenario-name border border-primary d-flex align-items-center p-3 mb-5",
						children: [/* @__PURE__ */ (0, C.jsx)("div", {
							className: "border-right",
							children: /* @__PURE__ */ (0, C.jsx)(a, {
								src: S,
								className: "mr-2"
							})
						}), /* @__PURE__ */ (0, C.jsx)("span", {
							className: "ml-3",
							children: t.name
						})]
					}),
					/* @__PURE__ */ (0, C.jsx)("h4", {
						className: "text-secondary-700",
						children: t.introduction.heading
					}),
					/* @__PURE__ */ (0, C.jsx)("p", {
						className: "flex-grow-1",
						children: t.introduction.description
					}),
					/* @__PURE__ */ (0, C.jsx)("div", {
						className: "d-flex justify-content-end",
						children: /* @__PURE__ */ (0, C.jsx)(l, {
							variant: "unfolding-scenario-blue",
							className: "rounded-pill",
							children: "Launch Interactive"
						})
					})
				]
			}), /* @__PURE__ */ (0, C.jsx)(r, {
				xs: "12",
				md: "4",
				className: "p-0",
				children: /* @__PURE__ */ (0, C.jsx)(_, {
					src: t.introduction.imageURL,
					style: {
						objectFit: "cover",
						width: "100%",
						height: "100%"
					}
				})
			})]
		})
	});
}, T = ".xblock-unfolding-scenario-wrapper{--palette-darkest:var(--pgn-unfolding-scenario-palette-darkest,#285672);--palette-main:var(--pgn-unfolding-scenario-palette-main,#2f808e);--palette-medium:var(--pgn-unfolding-scenario-palette-medium,#8cc9d1);--palette-light:var(--pgn-unfolding-scenario-palette-light,#cdeaea);--palette-lightest:var(--pgn-unfolding-scenario-palette-lightest,#e0f2f2);--palette-offwhite:var(--pgn-unfolding-scenario-palette-offwhite,#e9f6f5);--color-btn-bg-blue:var(--pgn-unfolding-scenario-color-btn-bg-blue,#3376c3);--color-btn-hover-bg-blue:var(--pgn-unfolding-scenario-color-btn-hover-bg-blue,#1f4775);--color-btn-active-bg-blue:var(--pgn-unfolding-scenario-color-btn-active-bg-blue,#142f4e);--color-btn-text-blue:var(--pgn-unfolding-scenario-color-btn-text-blue,#fff);--btn-min-width:var(--pgn-unfolding-scenario-btn-min-width,200px);background-color:var(--palette-offwhite)}.xblock-unfolding-scenario-wrapper .scenario-name{font-size:calc(var(--pgn-typography-font-size-base) * 1.125);font-family:var(--pgn-typography-headings-font-family);font-weight:var(--pgn-typography-font-weight-bold);color:var(--palette-main);background-color:var(--palette-lightest);border-radius:var(--pgn-spacing-spacer-base);border-bottom-left-radius:0;border-color:var(--palette-medium)!important}.xblock-unfolding-scenario-wrapper .scenario-name .border-right{border-color:var(--palette-medium)!important}.xblock-unfolding-scenario-wrapper .scenario-name .pgn__icon{zoom:2}.xblock-unfolding-scenario-wrapper .btn-unfolding-scenario-blue{--pgn-btn-bg:var(--color-btn-bg-blue);--pgn-btn-color:var(--color-btn-text-blue);--pgn-btn-hover-color:var(--color-btn-text-blue);--pgn-btn-hover-bg:var(--color-btn-hover-bg-blue);--pgn-btn-focus-color:var(--color-btn-text-blue);--pgn-btn-focus-bg:var(--color-btn-bg-blue);--pgn-btn-focus-outline-color:var(--color-btn-bg-blue);--pgn-btn-active-color:var(--color-btn-text-blue);--pgn-btn-active-bg:var(--color-btn-active-bg-blue)}.xblock-unfolding-scenario-wrapper .btn-outline-unfolding-scenario-blue{--pgn-size-btn-border-width:2px;--pgn-btn-bg:transparent;--pgn-btn-color:var(--color-btn-bg-blue);--pgn-btn-border-color:var(--color-btn-bg-blue);--pgn-btn-hover-bg:var(--color-btn-text-blue);--pgn-btn-hover-color:var(--color-btn-hover-bg-blue);--pgn-btn-hover-border-color:var(--color-btn-hover-bg-blue);--pgn-btn-focus-bg:var(--color-btn-text-blue);--pgn-btn-focus-color:var(--color-btn-bg-blue);--pgn-btn-focus-border-color:var(--color-btn-bg-blue);--pgn-btn-focus-outline-color:var(--color-btn-bg-blue);--pgn-btn-active-bg:var(--color-btn-text-blue);--pgn-btn-active-color:var(--color-btn-active-bg-blue);--pgn-btn-active-border-color:var(--color-btn-active-bg-blue)}.xblock-unfolding-scenario-wrapper .btn{min-width:var(--btn-min-width);padding:var(--pgn-spacing-spacer-2-5) var(--pgn-spacing-spacer-4-5)}", E = (e, t, n) => {
	u({
		runtime: e,
		element: t,
		config: n.config,
		styles: T
	})(/* @__PURE__ */ (0, C.jsx)(w, { data: n.data }));
};
//#endregion
export { E as renderBlock };
