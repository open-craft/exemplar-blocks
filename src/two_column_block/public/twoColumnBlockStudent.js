import { E as e, O as t, b as n, c as r, d as i, f as a, h as o, i as s, l as c, o as l, p as u, r as d, s as f, u as p, v as m, y as h } from "./types-oIjTXCTg.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Container.js
var g = /* @__PURE__ */ t(u()), _ = /* @__PURE__ */ t(e()), v = [
	"bsPrefix",
	"fluid",
	"as",
	"className"
], y = { fluid: !1 }, b = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.fluid, a = e.as, o = a === void 0 ? "div" : a, s = e.className, l = p(e, v), u = c(n, "container"), d = typeof r == "string" ? "-" + r : "-fluid";
	return /* @__PURE__ */ _.createElement(o, i({ ref: t }, l, { className: (0, g.default)(s, r ? "" + u + d : u) }));
});
b.displayName = "Container", b.defaultProps = y;
//#endregion
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var x = /* @__PURE__ */ t(r()), S = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
x.default.string, x.default.bool, x.default.bool, x.default.bool, x.default.bool;
var C = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, w = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, a = e.fluid, o = e.rounded, s = e.roundedCircle, l = e.thumbnail, u = p(e, S);
	n = c(n, "img");
	var d = (0, g.default)(a && n + "-fluid", o && "rounded", s && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ _.createElement("img", i({ ref: t }, u, { className: (0, g.default)(r, d) }));
});
w.displayName = "Image", w.defaultProps = C;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Launch.js
var T = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M19 19H5V5h7V3H3v18h18v-9h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z",
	fill: "currentColor"
})), E = /* @__PURE__ */ function(e) {
	return e.xs = "container-mw-xs", e.sm = "container-mw-sm", e.md = "container-mw-md", e.lg = "container-mw-lg", e.xl = "container-mw-xl", e;
}(E || {}), D = /* @__PURE__ */ (0, _.forwardRef)(({ size: e, children: t, as: n = "div", bsPrefix: r = "container", fluid: i = !0, ...a }, o) => /* @__PURE__ */ _.createElement(b, {
	...a,
	as: n,
	bsPrefix: r,
	fluid: i,
	ref: o,
	className: (0, g.default)(a.className, e && E[e])
}, t)), O = h({
	externalLinkAltText: {
		id: "Hyperlink.externalLinkAltText",
		defaultMessage: "in a new tab"
	},
	externalLinkTitle: {
		id: "Hyperlink.externalLinkTitle",
		defaultMessage: "Opens in a new tab"
	}
}), k = /* @__PURE__ */ (0, _.forwardRef)(({ as: e = "a", className: t, destination: r, children: i, target: a = "_self", onClick: o, externalLinkAlternativeText: c, externalLinkTitle: l, variant: u = "default", isInline: d = !1, showLaunchIcon: f = !0, ...p }, m) => {
	let h = n(), v;
	a === "_blank" && (p.rel = (() => {
		let { rel: e } = p;
		return e ? (e.includes("noopener") || (e += " noopener"), e.includes("noreferrer") || (e += " noreferrer"), e) : "noopener noreferrer";
	})(), f && (v = /* @__PURE__ */ _.createElement("span", {
		className: "pgn__hyperlink__external-icon",
		title: l || h.formatMessage(O.externalLinkTitle)
	}, /* @__PURE__ */ _.createElement(s, {
		src: T,
		screenReaderText: c || h.formatMessage(O.externalLinkAltText),
		style: {
			height: "1em",
			width: "1em"
		},
		"data-testid": "hyperlink-icon"
	}))));
	let y = { ...p };
	return r && (y.href = r), /* @__PURE__ */ _.createElement(e, {
		ref: m,
		className: (0, g.default)("pgn__hyperlink", `${u}-link`, {
			"standalone-link": !d,
			"inline-link": d
		}, t),
		target: a,
		onClick: o,
		...y
	}, i, v);
});
k.displayName = "Hyperlink";
//#endregion
//#region src/two-column-block/student-ui/App.tsx
var A = m(), j = ({ data: e }) => {
	let [t, n] = e.columns.ratio.split(":").map((e) => parseInt(e, 10));
	return /* @__PURE__ */ (0, A.jsx)(D, {
		className: "p-0",
		style: { backgroundColor: e.backgroundColor },
		children: /* @__PURE__ */ (0, A.jsx)(D, {
			size: "lg",
			children: /* @__PURE__ */ (0, A.jsxs)(l, {
				className: `xblock-two-column p-3 ${e.columns.order == "rightAboveLeft" ? "two-column-reverse" : ""}`,
				children: [/* @__PURE__ */ (0, A.jsx)(f, {
					xs: 12,
					sm: t,
					children: /* @__PURE__ */ (0, A.jsx)(M, { data: e.columns.left })
				}), /* @__PURE__ */ (0, A.jsx)(f, {
					xs: 12,
					sm: n,
					children: /* @__PURE__ */ (0, A.jsx)(M, { data: e.columns.right })
				})]
			})
		})
	});
}, M = ({ data: e }) => {
	switch (e.kind) {
		case "text": return /* @__PURE__ */ (0, A.jsx)(N, { data: e });
		case "lessonList": return /* @__PURE__ */ (0, A.jsx)(P, { data: e });
		case "lessonIntro": return /* @__PURE__ */ (0, A.jsx)(F, { data: e });
		case "imageGrid": return /* @__PURE__ */ (0, A.jsx)(I, { data: e });
		case "rawHTML": return /* @__PURE__ */ (0, A.jsx)(L, { data: e });
	}
}, N = ({ data: e }) => /* @__PURE__ */ (0, A.jsx)("div", {
	style: {
		display: "flex",
		minHeight: "100%",
		alignItems: e.verticalAlignment
	},
	children: /* @__PURE__ */ (0, A.jsx)("div", { dangerouslySetInnerHTML: { __html: e.content } })
}), P = ({ data: e }) => /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [
	/* @__PURE__ */ (0, A.jsx)("h5", { children: e.title }),
	/* @__PURE__ */ (0, A.jsx)("p", { children: e.text }),
	e.lessons.map((e) => /* @__PURE__ */ (0, A.jsxs)(l, {
		className: "lesson-list-item py-4",
		children: [/* @__PURE__ */ (0, A.jsx)(f, {
			xs: 2,
			className: "text-secondary font-weight-bold",
			children: e.id
		}), /* @__PURE__ */ (0, A.jsx)(f, {
			xs: 10,
			children: e.title
		})]
	}))
] }), F = ({ data: e }) => /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [
	/* @__PURE__ */ (0, A.jsx)("h4", {
		className: "mb-4.5",
		children: e.title
	}),
	/* @__PURE__ */ (0, A.jsxs)("h5", {
		className: "lh-lg",
		children: [
			/* @__PURE__ */ (0, A.jsx)("span", {
				className: "text-secondary",
				children: e.lesson.id ? e.lesson.id : null
			}),
			/* @__PURE__ */ (0, A.jsx)("br", {}),
			/* @__PURE__ */ (0, A.jsx)("span", { children: e.lesson.title })
		]
	}),
	/* @__PURE__ */ (0, A.jsx)("p", { children: e.summary }),
	(e.previousLesson || e.showStartLessonButton) && /* @__PURE__ */ (0, A.jsxs)(a, { children: [e.previousLesson && /* @__PURE__ */ (0, A.jsxs)(d, {
		className: "rounded-pill",
		variant: "outline-brand",
		href: e.previousLesson.url,
		children: ["Previous ", e.previousLesson.id]
	}), e.showStartLessonButton && /* @__PURE__ */ (0, A.jsxs)(d, {
		className: "rounded-pill",
		variant: "brand",
		href: e.lesson.url,
		children: ["Start ", e.lesson.id]
	})] })
] }), I = ({ data: e }) => {
	let t = e.bottomImage.onClickUrl ? /* @__PURE__ */ (0, A.jsx)(k, {
		className: "d-block w-100 bottom-image-grid-item overflow-hidden",
		showLaunchIcon: !1,
		target: "_blank",
		destination: e.bottomImage.onClickUrl,
		children: /* @__PURE__ */ (0, A.jsx)(w, {
			className: "w-100",
			fluid: !0,
			src: e.bottomImage.url,
			alt: e.bottomImage.alt
		})
	}) : /* @__PURE__ */ (0, A.jsx)(w, {
		className: "w-100 bottom-image-grid-item overflow-hidden",
		fluid: !0,
		src: e.bottomImage.url,
		alt: e.bottomImage.alt
	}), n = /* @__PURE__ */ (0, A.jsx)("div", {
		className: `d-flex align-items-center justify-content-${e.text.alignment} p-3 bottom-image-grid-item`,
		style: {
			backgroundColor: e.text.backgroundColor,
			height: "100%"
		},
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			className: e.text.fontSize == "large" ? "lead" : "",
			style: { color: e.text.color },
			children: e.text.content
		})
	}), [r, i] = e.bottomRowOrder == "imageText" ? [t, n] : [n, t];
	return /* @__PURE__ */ (0, A.jsx)(A.Fragment, { children: /* @__PURE__ */ (0, A.jsxs)(l, { children: [
		/* @__PURE__ */ (0, A.jsx)(f, {
			xs: 12,
			className: "pb-1",
			children: e.featuredImage.onClickUrl ? /* @__PURE__ */ (0, A.jsx)(k, {
				target: "_blank",
				className: "d-block w-100 top-image-grid-item overflow-hidden",
				showLaunchIcon: !1,
				destination: e.featuredImage.onClickUrl,
				children: /* @__PURE__ */ (0, A.jsx)(w, {
					fluid: !0,
					className: "w-100",
					src: e.featuredImage.url,
					alt: e.featuredImage.alt
				})
			}) : /* @__PURE__ */ (0, A.jsx)(w, {
				fluid: !0,
				className: "w-100 top-image-grid-item",
				src: e.featuredImage.url,
				alt: e.featuredImage.alt
			})
		}),
		/* @__PURE__ */ (0, A.jsx)(f, {
			xs: 6,
			className: "pr-1",
			children: r
		}),
		/* @__PURE__ */ (0, A.jsx)(f, {
			xs: 6,
			className: "pl-1",
			children: i
		})
	] }) });
}, L = ({ data: e }) => /* @__PURE__ */ (0, A.jsx)("div", {
	style: { minHeight: "100%" },
	dangerouslySetInnerHTML: { __html: e.html }
}), R = ".xblock-two-column .lesson-list-item+.lesson-list-item{border-top:1px solid var(--pgn-color-gray-200)}.xblock-two-column.two-column-reverse{flex-direction:column-reverse}@media (width>=576px){.xblock-two-column.two-column-reverse{flex-direction:row}}.xblock-two-column .pgn__action-row{justify-content:flex-start}.xblock-two-column .lh-lg{line-height:2em!important}.xblock-two-column .top-image-grid-item{border-top-left-radius:var(--pgn-two-column-block-image-size-border-radius-lg);border-top-right-radius:var(--pgn-two-column-block-image-size-border-radius-lg);border-bottom-left-radius:var(--pgn-two-column-block-image-size-border-radius-sm);border-bottom-right-radius:var(--pgn-two-column-block-image-size-border-radius-sm)}.xblock-two-column .bottom-image-grid-item{border-top-left-radius:var(--pgn-two-column-block-image-size-border-radius-sm);border-top-right-radius:var(--pgn-two-column-block-image-size-border-radius-sm);border-bottom-left-radius:var(--pgn-two-column-block-image-size-border-radius-lg);border-bottom-right-radius:var(--pgn-two-column-block-image-size-border-radius-lg)}", z = (e, t, n) => {
	o({
		runtime: e,
		element: t,
		config: n.config,
		styles: R
	})(/* @__PURE__ */ (0, A.jsx)(j, { data: n.data }));
};
//#endregion
export { z as renderBlock };
