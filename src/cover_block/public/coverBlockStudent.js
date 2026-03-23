import { _ as e, a as t, f as n, h as r, i, n as a, o, r as s, t as c, y as l } from "./jsx-runtime-14-nx7qZ.js";
//#region src/cover-block/lib/utils.ts
var u = r(), d = /* @__PURE__ */ l(e(), 1), f = (e) => ({
	top_header: a("top_header", e.top_header_color),
	description: a("description", e.description_color),
	main_header: a("main_header", e.main_header_color),
	subheader: a("subheader", e.subheader_color)
}), p = c(), m = {
	course: (e) => {
		let n = f(e);
		return /* @__PURE__ */ (0, p.jsxs)(i, {
			fluid: !0,
			className: "course-cover px-0",
			"data-testid": "course-cover",
			children: [/* @__PURE__ */ (0, p.jsx)("div", {
				className: "course-cover-image-container",
				children: /* @__PURE__ */ (0, p.jsx)("img", {
					className: "course-cover-image",
					src: e.media_url,
					alt: e.media_alt_text
				})
			}), /* @__PURE__ */ (0, p.jsx)(t, {
				className: "full-height",
				children: /* @__PURE__ */ (0, p.jsx)(o, {
					xs: 12,
					lg: 6,
					className: "align-content-center order-lg-2 px-4",
					children: /* @__PURE__ */ (0, p.jsx)("div", {
						className: "text-container",
						children: /* @__PURE__ */ (0, p.jsxs)("div", {
							className: "text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5",
							children: [
								/* @__PURE__ */ (0, p.jsx)("div", {
									className: "lead",
									style: n.top_header,
									children: e.top_header
								}),
								/* @__PURE__ */ (0, p.jsx)("h1", {
									className: "display-1",
									style: n.main_header,
									children: e.main_header
								}),
								/* @__PURE__ */ (0, p.jsx)("p", {
									className: "subtitle my-3",
									style: n.subheader,
									children: e.subheader
								}),
								/* @__PURE__ */ (0, p.jsx)("p", {
									className: "body",
									style: n.description,
									children: e.description
								})
							]
						})
					})
				})
			})]
		});
	},
	section: (e) => /* @__PURE__ */ (0, p.jsx)(i, {
		fluid: !0,
		className: "section-cover px-0",
		"data-testid": "section-cover",
		children: /* @__PURE__ */ (0, p.jsxs)(t, {
			className: "g-0",
			children: [/* @__PURE__ */ (0, p.jsx)(o, {
				xs: 12,
				lg: 6,
				className: "order-lg-2",
				children: /* @__PURE__ */ (0, p.jsx)("img", {
					className: "section-block-image",
					src: e.media_url,
					alt: e.media_alt_text
				})
			}), /* @__PURE__ */ (0, p.jsx)(o, {
				xs: 12,
				lg: 6,
				className: "align-content-center px-4 pt-5 order-lg-1",
				children: /* @__PURE__ */ (0, p.jsxs)("div", {
					className: "text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5",
					children: [
						/* @__PURE__ */ (0, p.jsx)("div", {
							className: "lead",
							children: e.top_header
						}),
						/* @__PURE__ */ (0, p.jsx)("h1", {
							className: "display-1",
							children: e.main_header
						}),
						/* @__PURE__ */ (0, p.jsx)("p", {
							className: "subtitle my-3",
							children: e.subheader
						}),
						/* @__PURE__ */ (0, p.jsx)("p", {
							className: "body",
							children: e.description
						})
					]
				})
			})]
		})
	}),
	separator: (e) => {
		let n = f(e);
		return /* @__PURE__ */ (0, p.jsxs)(i, {
			fluid: !0,
			className: "separator-cover px-0",
			"data-testid": "separator",
			children: [/* @__PURE__ */ (0, p.jsx)("div", {
				className: "separator-cover-image-container",
				children: /* @__PURE__ */ (0, p.jsx)("img", {
					className: "separator-cover-image",
					src: e.media_url,
					alt: e.media_alt_text
				})
			}), /* @__PURE__ */ (0, p.jsx)(t, {
				className: "text-container",
				children: /* @__PURE__ */ (0, p.jsx)(o, {
					xs: 12,
					className: "order-lg-2 align-content-center text-center",
					children: /* @__PURE__ */ (0, p.jsxs)("div", {
						className: "text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5",
						children: [
							/* @__PURE__ */ (0, p.jsx)("div", {
								className: "lead",
								style: n.top_header,
								children: e.top_header
							}),
							/* @__PURE__ */ (0, p.jsx)("h1", {
								className: "display-1 d-inline-block text-center",
								style: n.main_header,
								children: e.main_header
							}),
							/* @__PURE__ */ (0, p.jsx)("p", {
								className: "subtitle my-3 text-center",
								style: n.subheader,
								children: e.subheader
							}),
							/* @__PURE__ */ (0, p.jsx)("p", {
								className: "body",
								style: n.description,
								children: e.description
							})
						]
					})
				})
			})]
		});
	}
}, h = (e) => {
	let t = m[e.variant];
	return /* @__PURE__ */ (0, p.jsx)(t, { ...e });
}, g = (e, t, r) => {
	(0, u.createRoot)(s(e)).render(/* @__PURE__ */ (0, p.jsx)(d.StrictMode, { children: /* @__PURE__ */ (0, p.jsx)(n, {
		locale: "en",
		children: /* @__PURE__ */ (0, p.jsx)(h, { ...r })
	}) }));
};
//#endregion
export { g as renderBlock };
