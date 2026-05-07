import { C as e, D as t, T as n, _ as r, a as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, p, s as m, t as h, u as g, v as _ } from "./jsx-runtime-ggv8YFDF.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var v = /* @__PURE__ */ t(f()), y = /* @__PURE__ */ t(n()), b = /* @__PURE__ */ t(d()), x = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
b.default.string, b.default.bool, b.default.bool, b.default.bool, b.default.bool;
var S = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, C = /* @__PURE__ */ y.forwardRef(function(e, t) {
	var n = e.bsPrefix, r = e.className, i = e.fluid, a = e.rounded, c = e.roundedCircle, l = e.thumbnail, u = o(e, x);
	n = g(n, "img");
	var d = (0, v.default)(i && n + "-fluid", a && "rounded", c && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ y.createElement("img", s({ ref: t }, u, { className: (0, v.default)(r, d) }));
});
C.displayName = "Image", C.defaultProps = S;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Launch.js
var w = (e) => /* @__PURE__ */ y.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ y.createElement("path", {
	d: "M19 19H5V5h7V3H3v18h18v-9h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z",
	fill: "currentColor"
})), T = c({
	externalLinkAltText: {
		id: "Hyperlink.externalLinkAltText",
		defaultMessage: "in a new tab"
	},
	externalLinkTitle: {
		id: "Hyperlink.externalLinkTitle",
		defaultMessage: "Opens in a new tab"
	}
}), E = /* @__PURE__ */ (0, y.forwardRef)(({ as: e = "a", className: t, destination: n, children: r, target: a = "_self", onClick: o, externalLinkAlternativeText: s, externalLinkTitle: c, variant: l = "default", isInline: u = !1, showLaunchIcon: d = !0, ...f }, p) => {
	let m = _(), h;
	a === "_blank" && (f.rel = (() => {
		let { rel: e } = f;
		return e ? (e.includes("noopener") || (e += " noopener"), e.includes("noreferrer") || (e += " noreferrer"), e) : "noopener noreferrer";
	})(), d && (h = /* @__PURE__ */ y.createElement("span", {
		className: "pgn__hyperlink__external-icon",
		title: c || m.formatMessage(T.externalLinkTitle)
	}, /* @__PURE__ */ y.createElement(i, {
		src: w,
		screenReaderText: s || m.formatMessage(T.externalLinkAltText),
		style: {
			height: "1em",
			width: "1em"
		},
		"data-testid": "hyperlink-icon"
	}))));
	let g = { ...f };
	return n && (g.href = n), /* @__PURE__ */ y.createElement(e, {
		ref: p,
		className: (0, v.default)("pgn__hyperlink", `${l}-link`, {
			"standalone-link": !u,
			"inline-link": u
		}, t),
		target: a,
		onClick: o,
		...g
	}, r, h);
});
E.displayName = "Hyperlink";
//#endregion
//#region src/two-column-block/student-ui/main.scss
var D = e(), O = h(), k = ({ data: e }) => {
	let [t, n] = e.columns.ratio.split(":").map((e) => parseInt(e, 10));
	return /* @__PURE__ */ (0, O.jsxs)(m, {
		className: `xblock-two-column p-3 ${e.columns.order == "rightAboveLeft" ? "two-column-reverse" : ""}`,
		style: { backgroundColor: e.backgroundColor },
		children: [/* @__PURE__ */ (0, O.jsx)(a, {
			xs: 12,
			sm: t,
			children: /* @__PURE__ */ (0, O.jsx)(A, { data: e.columns.left })
		}), /* @__PURE__ */ (0, O.jsx)(a, {
			xs: 12,
			sm: n,
			children: /* @__PURE__ */ (0, O.jsx)(A, { data: e.columns.right })
		})]
	});
}, A = ({ data: e }) => {
	switch (e.kind) {
		case "text": return /* @__PURE__ */ (0, O.jsx)(j, { data: e });
		case "lessonList": return /* @__PURE__ */ (0, O.jsx)(M, { data: e });
		case "lessonIntro": return /* @__PURE__ */ (0, O.jsx)(N, { data: e });
		case "imageGrid": return /* @__PURE__ */ (0, O.jsx)(P, { data: e });
		case "embed": return /* @__PURE__ */ (0, O.jsx)(F, { data: e });
	}
}, j = ({ data: e }) => /* @__PURE__ */ (0, O.jsx)("div", {
	style: {
		display: "flex",
		minHeight: "100%",
		alignItems: e.verticalAlignment
	},
	children: /* @__PURE__ */ (0, O.jsx)("div", { dangerouslySetInnerHTML: { __html: e.content } })
}), M = ({ data: e }) => /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
	/* @__PURE__ */ (0, O.jsx)("h2", { children: e.title }),
	/* @__PURE__ */ (0, O.jsx)("p", { children: e.text }),
	e.lessons.map((e) => /* @__PURE__ */ (0, O.jsxs)(m, {
		className: "lesson-list-item py-2",
		children: [/* @__PURE__ */ (0, O.jsx)(a, {
			xs: 2,
			className: "text-brand-600",
			children: e.id
		}), /* @__PURE__ */ (0, O.jsx)(a, {
			xs: 10,
			children: e.title
		})]
	}))
] }), N = ({ data: e }) => /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
	/* @__PURE__ */ (0, O.jsx)("h2", { children: e.title }),
	/* @__PURE__ */ (0, O.jsxs)("h3", { children: [
		/* @__PURE__ */ (0, O.jsx)("span", {
			className: "text-brand-600",
			children: e.lesson.id ? e.lesson.id : null
		}),
		/* @__PURE__ */ (0, O.jsx)("br", {}),
		/* @__PURE__ */ (0, O.jsx)("span", { children: e.lesson.title })
	] }),
	/* @__PURE__ */ (0, O.jsx)("p", { children: e.summary }),
	(e.previousLesson || e.showStartLessonButton) && /* @__PURE__ */ (0, O.jsxs)(p, { children: [e.previousLesson && /* @__PURE__ */ (0, O.jsxs)(u, {
		variant: "outline-brand",
		href: e.previousLesson.url,
		children: ["Previous ", e.previousLesson.id]
	}), e.showStartLessonButton && /* @__PURE__ */ (0, O.jsxs)(u, {
		variant: "brand",
		href: e.lesson.url,
		children: ["Start ", e.lesson.id]
	})] })
] }), P = ({ data: e }) => {
	let t = /* @__PURE__ */ (0, O.jsx)(a, {
		xs: 6,
		children: e.bottomImage.onClickUrl ? /* @__PURE__ */ (0, O.jsx)(E, {
			showLaunchIcon: !1,
			target: "_blank",
			destination: e.bottomImage.onClickUrl,
			children: /* @__PURE__ */ (0, O.jsx)(C, {
				fluid: !0,
				src: e.bottomImage.url,
				alt: e.bottomImage.alt
			})
		}) : /* @__PURE__ */ (0, O.jsx)(C, {
			fluid: !0,
			src: e.bottomImage.url,
			alt: e.bottomImage.alt
		})
	}), n = /* @__PURE__ */ (0, O.jsx)(a, {
		xs: 6,
		children: /* @__PURE__ */ (0, O.jsx)("div", {
			className: `d-flex align-items-center justify-content-${e.text.alignment} p-3`,
			style: {
				backgroundColor: e.text.backgroundColor,
				height: "100%"
			},
			children: /* @__PURE__ */ (0, O.jsx)("div", {
				className: e.text.fontSize == "large" ? "lead" : "",
				style: { color: e.text.color },
				children: e.text.content
			})
		})
	}), r = e.bottomRowOrder == "imageText" ? [t, n] : [n, t];
	return /* @__PURE__ */ (0, O.jsx)(O.Fragment, { children: /* @__PURE__ */ (0, O.jsxs)(m, { children: [/* @__PURE__ */ (0, O.jsx)(a, {
		xs: 12,
		className: "pb-3",
		children: e.featuredImage.onClickUrl ? /* @__PURE__ */ (0, O.jsx)(E, {
			target: "_blank",
			showLaunchIcon: !1,
			destination: e.featuredImage.onClickUrl,
			children: /* @__PURE__ */ (0, O.jsx)(C, {
				fluid: !0,
				src: e.featuredImage.url,
				alt: e.featuredImage.alt
			})
		}) : /* @__PURE__ */ (0, O.jsx)(C, {
			fluid: !0,
			src: e.featuredImage.url,
			alt: e.featuredImage.alt
		})
	}), r] }) });
}, F = ({ data: e }) => /* @__PURE__ */ (0, O.jsx)("div", {
	style: { minHeight: "100%" },
	dangerouslySetInnerHTML: { __html: e.html }
}), I = (e, t, n) => {
	(0, D.createRoot)(l(t)).render(/* @__PURE__ */ (0, O.jsx)(y.StrictMode, { children: /* @__PURE__ */ (0, O.jsx)(r, {
		locale: "en",
		children: /* @__PURE__ */ (0, O.jsx)(k, { data: n })
	}) }));
};
//#endregion
export { I as renderBlock };
