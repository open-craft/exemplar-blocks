import { E as e, _ as t, c as n, d as r, f as i, g as a, i as o, l as s, m as c, o as l, p as u, r as d, s as f, u as p, v as m, w as h } from "./types-54JIFa6a.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Image.js
var g = /* @__PURE__ */ e(u()), _ = /* @__PURE__ */ e(h()), v = /* @__PURE__ */ e(n()), y = [
	"bsPrefix",
	"className",
	"fluid",
	"rounded",
	"roundedCircle",
	"thumbnail"
];
v.default.string, v.default.bool, v.default.bool, v.default.bool, v.default.bool;
var b = {
	fluid: !1,
	rounded: !1,
	roundedCircle: !1,
	thumbnail: !1
}, x = /* @__PURE__ */ _.forwardRef(function(e, t) {
	var n = e.bsPrefix, i = e.className, a = e.fluid, o = e.rounded, c = e.roundedCircle, l = e.thumbnail, u = p(e, y);
	n = s(n, "img");
	var d = (0, g.default)(a && n + "-fluid", o && "rounded", c && "rounded-circle", l && n + "-thumbnail");
	return /* @__PURE__ */ _.createElement("img", r({ ref: t }, u, { className: (0, g.default)(i, d) }));
});
x.displayName = "Image", x.defaultProps = b;
//#endregion
//#region node_modules/.pnpm/@openedx+paragon@23.19.1_@types+node@24.12.0_@types+react@18.3.28_jquery@3.7.1_popper.j_fc610710f75fd4edb6a9d3a95ceafa25/node_modules/@openedx/paragon/icons/es5/Launch.js
var S = (e) => /* @__PURE__ */ _.createElement("svg", {
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...e
}, /* @__PURE__ */ _.createElement("path", {
	d: "M19 19H5V5h7V3H3v18h18v-9h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z",
	fill: "currentColor"
})), C = t({
	externalLinkAltText: {
		id: "Hyperlink.externalLinkAltText",
		defaultMessage: "in a new tab"
	},
	externalLinkTitle: {
		id: "Hyperlink.externalLinkTitle",
		defaultMessage: "Opens in a new tab"
	}
}), w = /* @__PURE__ */ (0, _.forwardRef)(({ as: e = "a", className: t, destination: n, children: r, target: i = "_self", onClick: a, externalLinkAlternativeText: s, externalLinkTitle: c, variant: l = "default", isInline: u = !1, showLaunchIcon: d = !0, ...f }, p) => {
	let h = m(), v;
	i === "_blank" && (f.rel = (() => {
		let { rel: e } = f;
		return e ? (e.includes("noopener") || (e += " noopener"), e.includes("noreferrer") || (e += " noreferrer"), e) : "noopener noreferrer";
	})(), d && (v = /* @__PURE__ */ _.createElement("span", {
		className: "pgn__hyperlink__external-icon",
		title: c || h.formatMessage(C.externalLinkTitle)
	}, /* @__PURE__ */ _.createElement(o, {
		src: S,
		screenReaderText: s || h.formatMessage(C.externalLinkAltText),
		style: {
			height: "1em",
			width: "1em"
		},
		"data-testid": "hyperlink-icon"
	}))));
	let y = { ...f };
	return n && (y.href = n), /* @__PURE__ */ _.createElement(e, {
		ref: p,
		className: (0, g.default)("pgn__hyperlink", `${l}-link`, {
			"standalone-link": !u,
			"inline-link": u
		}, t),
		target: i,
		onClick: a,
		...y
	}, r, v);
});
w.displayName = "Hyperlink";
//#endregion
//#region src/two-column-block/student-ui/App.tsx
var T = a(), E = ({ data: e }) => {
	let [t, n] = e.columns.ratio.split(":").map((e) => parseInt(e, 10));
	return /* @__PURE__ */ (0, T.jsxs)(l, {
		className: `xblock-two-column p-3 ${e.columns.order == "rightAboveLeft" ? "two-column-reverse" : ""}`,
		style: { backgroundColor: e.backgroundColor },
		children: [/* @__PURE__ */ (0, T.jsx)(f, {
			xs: 12,
			sm: t,
			children: /* @__PURE__ */ (0, T.jsx)(D, { data: e.columns.left })
		}), /* @__PURE__ */ (0, T.jsx)(f, {
			xs: 12,
			sm: n,
			children: /* @__PURE__ */ (0, T.jsx)(D, { data: e.columns.right })
		})]
	});
}, D = ({ data: e }) => {
	switch (e.kind) {
		case "text": return /* @__PURE__ */ (0, T.jsx)(O, { data: e });
		case "lessonList": return /* @__PURE__ */ (0, T.jsx)(k, { data: e });
		case "lessonIntro": return /* @__PURE__ */ (0, T.jsx)(A, { data: e });
		case "imageGrid": return /* @__PURE__ */ (0, T.jsx)(j, { data: e });
		case "rawHTML": return /* @__PURE__ */ (0, T.jsx)(M, { data: e });
	}
}, O = ({ data: e }) => /* @__PURE__ */ (0, T.jsx)("div", {
	style: {
		display: "flex",
		minHeight: "100%",
		alignItems: e.verticalAlignment
	},
	children: /* @__PURE__ */ (0, T.jsx)("div", { dangerouslySetInnerHTML: { __html: e.content } })
}), k = ({ data: e }) => /* @__PURE__ */ (0, T.jsxs)(T.Fragment, { children: [
	/* @__PURE__ */ (0, T.jsx)("h2", { children: e.title }),
	/* @__PURE__ */ (0, T.jsx)("p", { children: e.text }),
	e.lessons.map((e) => /* @__PURE__ */ (0, T.jsxs)(l, {
		className: "lesson-list-item py-2",
		children: [/* @__PURE__ */ (0, T.jsx)(f, {
			xs: 2,
			className: "text-brand-600",
			children: e.id
		}), /* @__PURE__ */ (0, T.jsx)(f, {
			xs: 10,
			children: e.title
		})]
	}))
] }), A = ({ data: e }) => /* @__PURE__ */ (0, T.jsxs)(T.Fragment, { children: [
	/* @__PURE__ */ (0, T.jsx)("h2", { children: e.title }),
	/* @__PURE__ */ (0, T.jsxs)("h3", { children: [
		/* @__PURE__ */ (0, T.jsx)("span", {
			className: "text-brand-600",
			children: e.lesson.id ? e.lesson.id : null
		}),
		/* @__PURE__ */ (0, T.jsx)("br", {}),
		/* @__PURE__ */ (0, T.jsx)("span", { children: e.lesson.title })
	] }),
	/* @__PURE__ */ (0, T.jsx)("p", { children: e.summary }),
	(e.previousLesson || e.showStartLessonButton) && /* @__PURE__ */ (0, T.jsxs)(i, { children: [e.previousLesson && /* @__PURE__ */ (0, T.jsxs)(d, {
		variant: "outline-brand",
		href: e.previousLesson.url,
		children: ["Previous ", e.previousLesson.id]
	}), e.showStartLessonButton && /* @__PURE__ */ (0, T.jsxs)(d, {
		variant: "brand",
		href: e.lesson.url,
		children: ["Start ", e.lesson.id]
	})] })
] }), j = ({ data: e }) => {
	let t = /* @__PURE__ */ (0, T.jsx)(f, {
		xs: 6,
		children: e.bottomImage.onClickUrl ? /* @__PURE__ */ (0, T.jsx)(w, {
			showLaunchIcon: !1,
			target: "_blank",
			destination: e.bottomImage.onClickUrl,
			children: /* @__PURE__ */ (0, T.jsx)(x, {
				fluid: !0,
				src: e.bottomImage.url,
				alt: e.bottomImage.alt
			})
		}) : /* @__PURE__ */ (0, T.jsx)(x, {
			fluid: !0,
			src: e.bottomImage.url,
			alt: e.bottomImage.alt
		})
	}), n = /* @__PURE__ */ (0, T.jsx)(f, {
		xs: 6,
		children: /* @__PURE__ */ (0, T.jsx)("div", {
			className: `d-flex align-items-center justify-content-${e.text.alignment} p-3`,
			style: {
				backgroundColor: e.text.backgroundColor,
				height: "100%"
			},
			children: /* @__PURE__ */ (0, T.jsx)("div", {
				className: e.text.fontSize == "large" ? "lead" : "",
				style: { color: e.text.color },
				children: e.text.content
			})
		})
	}), r = e.bottomRowOrder == "imageText" ? [t, n] : [n, t];
	return /* @__PURE__ */ (0, T.jsx)(T.Fragment, { children: /* @__PURE__ */ (0, T.jsxs)(l, { children: [/* @__PURE__ */ (0, T.jsx)(f, {
		xs: 12,
		className: "pb-3",
		children: e.featuredImage.onClickUrl ? /* @__PURE__ */ (0, T.jsx)(w, {
			target: "_blank",
			showLaunchIcon: !1,
			destination: e.featuredImage.onClickUrl,
			children: /* @__PURE__ */ (0, T.jsx)(x, {
				fluid: !0,
				src: e.featuredImage.url,
				alt: e.featuredImage.alt
			})
		}) : /* @__PURE__ */ (0, T.jsx)(x, {
			fluid: !0,
			src: e.featuredImage.url,
			alt: e.featuredImage.alt
		})
	}), r] }) });
}, M = ({ data: e }) => /* @__PURE__ */ (0, T.jsx)("div", {
	style: { minHeight: "100%" },
	dangerouslySetInnerHTML: { __html: e.html }
}), N = (e, t, n) => {
	c(e, t)(/* @__PURE__ */ (0, T.jsx)(E, { data: n }));
};
//#endregion
export { N as renderBlock };
