import { _ as e, a as t, c as n, i as r, l as i, n as a, t as o, v as s, w as c } from "./apiTypes-CCMVIwg9.js";
c();
var l = (e) => ({
	top_header: t("top_header", e.top_header_color),
	description: t("description", e.description_color),
	main_header: t("main_header", e.main_header_color),
	subheader: t("subheader", e.subheader_color)
}), u = n(), d = (t) => {
	let n = l(t);
	return /* @__PURE__ */ (0, u.jsxs)(i, {
		fluid: !0,
		className: "course-cover position-relative px-0",
		"data-testid": "course-cover",
		children: [/* @__PURE__ */ (0, u.jsx)("div", {
			className: "course-cover-image-container position-absolute w-100 h-100",
			children: /* @__PURE__ */ (0, u.jsx)("img", {
				className: "course-cover-image w-100 h-100",
				src: t.media_url,
				alt: t.media_alt_text
			})
		}), /* @__PURE__ */ (0, u.jsx)(e, {
			className: "h-100 mx-0",
			children: /* @__PURE__ */ (0, u.jsx)(s, {
				xs: 12,
				md: 10,
				lg: 6,
				xl: 5,
				className: "d-flex align-items-center order-lg-2 px-4 px-sm-5 px-lg-5 ml-lg-4",
				children: /* @__PURE__ */ (0, u.jsx)("div", {
					className: "text-container w-100 pl-5",
					children: /* @__PURE__ */ (0, u.jsxs)("div", {
						className: "text-content w-100 mw-sm ml-lg-5",
						children: [
							/* @__PURE__ */ (0, u.jsx)("h2", {
								className: "lead font-weight-bold mb-3",
								style: n.top_header,
								children: t.top_header
							}),
							/* @__PURE__ */ (0, u.jsx)("h2", {
								className: "font-weight-bold mb-3",
								style: n.main_header,
								children: t.main_header
							}),
							/* @__PURE__ */ (0, u.jsx)("h5", {
								className: "subtitle h5 font-weight-bold mb-3 w-100 mw-xs",
								style: n.subheader,
								children: t.subheader
							}),
							/* @__PURE__ */ (0, u.jsx)("p", {
								className: "body mb-0 w-100 mw-xs",
								style: n.description,
								children: t.description
							})
						]
					})
				})
			})
		})]
	});
}, f = (t) => {
	let n = t.image_position === o.left, r = n ? "order-lg-1" : "order-lg-2", a = n ? "order-lg-2" : "order-lg-1", c = n ? "pl-lg-5" : "pr-lg-5";
	return /* @__PURE__ */ (0, u.jsx)(i, {
		fluid: !1,
		className: "section-cover px-md-0 px-2",
		"data-testid": "section-cover",
		children: /* @__PURE__ */ (0, u.jsxs)(e, {
			className: "g-0 justify-content-center align-items-center",
			children: [/* @__PURE__ */ (0, u.jsx)(s, {
				xs: 12,
				lg: 5,
				className: `${r} d-flex justify-content-center px-3 px-sm-2 py-5`,
				children: /* @__PURE__ */ (0, u.jsx)("img", {
					className: "section-block-image w-100 mx-auto d-block",
					src: t.media_url,
					alt: t.media_alt_text
				})
			}), /* @__PURE__ */ (0, u.jsx)(s, {
				xs: 12,
				lg: 5,
				className: `${a} d-flex align-items-center py-5 px-3 px-sm-5 px-lg-0`,
				children: /* @__PURE__ */ (0, u.jsxs)("div", {
					className: `text-content w-100 mw-xs ${c}`,
					children: [
						/* @__PURE__ */ (0, u.jsx)("div", {
							className: "lead h4 font-weight-bold mb-3",
							children: t.top_header
						}),
						/* @__PURE__ */ (0, u.jsx)("h2", {
							className: "font-weight-bold mb-4",
							children: t.main_header
						}),
						/* @__PURE__ */ (0, u.jsx)("h5", {
							className: "subtitle font-weight-bold mb-4 w-100 mw-xs",
							children: t.subheader
						}),
						/* @__PURE__ */ (0, u.jsx)("p", {
							className: "body mb-0 w-100 mw-xs",
							children: t.description
						})
					]
				})
			})]
		})
	});
}, p = (t) => {
	let n = l(t);
	return /* @__PURE__ */ (0, u.jsxs)(i, {
		fluid: !0,
		className: "separator-cover position-relative px-0",
		"data-testid": "separator",
		children: [/* @__PURE__ */ (0, u.jsx)("div", {
			className: "separator-cover-image-container position-absolute w-100 h-100",
			children: /* @__PURE__ */ (0, u.jsx)("img", {
				className: "separator-cover-image w-100 h-100",
				src: t.media_url,
				alt: t.media_alt_text
			})
		}), /* @__PURE__ */ (0, u.jsx)(e, {
			className: "text-container justify-content-center mx-0 h-100",
			children: /* @__PURE__ */ (0, u.jsx)(s, {
				xs: 12,
				md: 10,
				lg: 8,
				xl: 6,
				className: "order-lg-2 d-flex h-100 align-items-center justify-content-center text-center px-3 px-sm-4 px-lg-0",
				children: /* @__PURE__ */ (0, u.jsxs)("div", {
					className: "text-content w-100 mx-auto mw-sm",
					children: [
						/* @__PURE__ */ (0, u.jsx)("div", {
							className: "lead mb-3",
							style: n.top_header,
							children: t.top_header
						}),
						/* @__PURE__ */ (0, u.jsx)("h1", {
							className: "display-1 font-weight-bold text-center mb-0",
							style: n.main_header,
							children: t.main_header
						}),
						/* @__PURE__ */ (0, u.jsx)("h4", {
							className: "mt-4 mb-4 text-center",
							style: n.subheader,
							children: t.subheader
						}),
						/* @__PURE__ */ (0, u.jsx)("p", {
							className: "body mx-auto mb-0 font-weight-bold w-100 mw-sm",
							style: n.description,
							children: t.description
						})
					]
				})
			})
		})]
	});
}, m = {
	[a.course]: d,
	[a.section]: f,
	[a.separator]: p
}, h = (e) => {
	let t = m[e.variant];
	return /* @__PURE__ */ (0, u.jsx)(t, { ...e });
}, g = ".section-block-image,.separator-cover-image,.course-cover-image{object-fit:cover}.section-cover{--cover-height:460px}.separator-cover,.course-cover{--cover-height:550px}.section-block-image{height:var(--cover-height);border-radius:var(--pgn-size-card-image-border-radius);max-height:80lvh}.separator-cover-image-container,.course-cover-image-container{z-index:0;inset:0;overflow:clip}.separator-cover,.course-cover{height:var(--cover-height)}@media (width>=768px){.section-cover,.separator-cover,.course-cover{--cover-height:680px}}@media (width>=992px){.section-cover,.separator-cover,.course-cover{--cover-height:800px}}.section-cover .lead,.course-cover .lead,.section-cover .subtitle,.course-cover .subtitle{font-weight:var(--pgn-typography-font-weight-bold)}.section-cover .lead,.course-cover .lead,.section-cover .subtitle,.course-cover .subtitle,.separator-cover .lead{line-height:var(--pgn-typography-line-height-base)}.section-cover .lead{font-size:var(--pgn-typography-font-size-h4-base);color:var(--pgn-wgu-color-text-main-lake)}.course-cover .lead{font-size:var(--pgn-typography-font-size-h3-base)}.course-cover .subtitle{font-size:var(--pgn-typography-font-size-h5-base);letter-spacing:0}.section-cover .body,.course-cover .body{font-size:var(--pgn-typography-font-size-base);line-height:var(--pgn-typography-line-height-sm);letter-spacing:0}.separator-cover .lead{font-size:var(--pgn-typography-font-size-h6-base);font-weight:var(--pgn-typography-font-weight-semi-bold)}.separator-cover .display-1{font-size:var(--pgn-typography-font-size-display-mobile-1)}.separator-cover h4{font-size:var(--pgn-typography-font-size-h5-base)}.separator-cover .body{font-size:var(--pgn-typography-font-size-base);line-height:var(--pgn-typography-line-height-lg)}@media (width>=768px){.separator-cover .lead{font-size:var(--pgn-typography-font-size-h5-base)}.separator-cover .display-1{font-size:var(--pgn-typography-font-size-display-1)}.separator-cover h4{font-size:var(--pgn-typography-font-size-h4-base)}.separator-cover .body{font-size:var(--pgn-typography-font-size-lg)}}", _ = (e, t, n) => {
	r({
		runtime: t,
		element: e,
		config: n.config,
		styles: g
	})(/* @__PURE__ */ (0, u.jsx)(h, { ...n.data }));
};
//#endregion
export { _ as renderBlock };
