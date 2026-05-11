import { a as e, g as t, l as n, n as r, r as i, t as a, u as o } from "./utils-DMbtIBNi.js";
t();
var s = (e) => ({
	top_header: r("top_header", e.top_header_color),
	description: r("description", e.description_color),
	main_header: r("main_header", e.main_header_color),
	subheader: r("subheader", e.subheader_color)
}), c = i(), l = {
	course: (t) => {
		let r = s(t);
		return /* @__PURE__ */ (0, c.jsxs)(e, {
			fluid: !0,
			className: "course-cover px-0",
			"data-testid": "course-cover",
			children: [/* @__PURE__ */ (0, c.jsx)("div", {
				className: "course-cover-image-container",
				children: /* @__PURE__ */ (0, c.jsx)("img", {
					className: "course-cover-image",
					src: t.media_url,
					alt: t.media_alt_text
				})
			}), /* @__PURE__ */ (0, c.jsx)(n, {
				className: "full-height",
				children: /* @__PURE__ */ (0, c.jsx)(o, {
					xs: 12,
					lg: 6,
					className: "align-content-center order-lg-2 px-4",
					children: /* @__PURE__ */ (0, c.jsx)("div", {
						className: "text-container",
						children: /* @__PURE__ */ (0, c.jsxs)("div", {
							className: "text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5",
							children: [
								/* @__PURE__ */ (0, c.jsx)("div", {
									className: "lead",
									style: r.top_header,
									children: t.top_header
								}),
								/* @__PURE__ */ (0, c.jsx)("h1", {
									className: "display-1",
									style: r.main_header,
									children: t.main_header
								}),
								/* @__PURE__ */ (0, c.jsx)("p", {
									className: "subtitle my-3",
									style: r.subheader,
									children: t.subheader
								}),
								/* @__PURE__ */ (0, c.jsx)("p", {
									className: "body",
									style: r.description,
									children: t.description
								})
							]
						})
					})
				})
			})]
		});
	},
	section: (t) => /* @__PURE__ */ (0, c.jsx)(e, {
		fluid: !0,
		className: "section-cover px-0",
		"data-testid": "section-cover",
		children: /* @__PURE__ */ (0, c.jsxs)(n, {
			className: "g-0",
			children: [/* @__PURE__ */ (0, c.jsx)(o, {
				xs: 12,
				lg: 6,
				className: "order-lg-2",
				children: /* @__PURE__ */ (0, c.jsx)("img", {
					className: "section-block-image",
					src: t.media_url,
					alt: t.media_alt_text
				})
			}), /* @__PURE__ */ (0, c.jsx)(o, {
				xs: 12,
				lg: 6,
				className: "align-content-center px-4 pt-5 order-lg-1",
				children: /* @__PURE__ */ (0, c.jsxs)("div", {
					className: "text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5",
					children: [
						/* @__PURE__ */ (0, c.jsx)("div", {
							className: "lead",
							children: t.top_header
						}),
						/* @__PURE__ */ (0, c.jsx)("h1", {
							className: "display-1",
							children: t.main_header
						}),
						/* @__PURE__ */ (0, c.jsx)("p", {
							className: "subtitle my-3",
							children: t.subheader
						}),
						/* @__PURE__ */ (0, c.jsx)("p", {
							className: "body",
							children: t.description
						})
					]
				})
			})]
		})
	}),
	separator: (t) => {
		let r = s(t);
		return /* @__PURE__ */ (0, c.jsxs)(e, {
			fluid: !0,
			className: "separator-cover px-0",
			"data-testid": "separator",
			children: [/* @__PURE__ */ (0, c.jsx)("div", {
				className: "separator-cover-image-container",
				children: /* @__PURE__ */ (0, c.jsx)("img", {
					className: "separator-cover-image",
					src: t.media_url,
					alt: t.media_alt_text
				})
			}), /* @__PURE__ */ (0, c.jsx)(n, {
				className: "text-container",
				children: /* @__PURE__ */ (0, c.jsx)(o, {
					xs: 12,
					className: "order-lg-2 align-content-center text-center",
					children: /* @__PURE__ */ (0, c.jsxs)("div", {
						className: "text-content mx-0 me-sm-2 me-md-0 ms-lg-4 ms-lg-5",
						children: [
							/* @__PURE__ */ (0, c.jsx)("div", {
								className: "lead",
								style: r.top_header,
								children: t.top_header
							}),
							/* @__PURE__ */ (0, c.jsx)("h1", {
								className: "display-1 d-inline-block text-center",
								style: r.main_header,
								children: t.main_header
							}),
							/* @__PURE__ */ (0, c.jsx)("p", {
								className: "subtitle my-3 text-center",
								style: r.subheader,
								children: t.subheader
							}),
							/* @__PURE__ */ (0, c.jsx)("p", {
								className: "body",
								style: r.description,
								children: t.description
							})
						]
					})
				})
			})]
		});
	}
}, u = (e) => {
	let t = l[e.variant];
	return /* @__PURE__ */ (0, c.jsx)(t, { ...e });
}, d = (e, t, n) => {
	a(t, e)(/* @__PURE__ */ (0, c.jsx)(u, { ...n }));
};
//#endregion
export { d as renderBlock };
