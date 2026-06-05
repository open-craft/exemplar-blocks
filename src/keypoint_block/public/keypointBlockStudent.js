import { d as e, m as t, n, t as r } from "./Container-DiwZDjXy.js";
//#region src/keypoint-block/student-ui/student-ui.tsx
var i = t();
function a({ header: e, keypoints: t, buttonText: a, buttonLink: o, backgroundColor: s }) {
	return /* @__PURE__ */ (0, i.jsx)("div", {
		className: "xblock-keypoints",
		style: { backgroundColor: s },
		children: /* @__PURE__ */ (0, i.jsxs)(r, {
			size: "xl",
			className: "p-4",
			children: [
				e && /* @__PURE__ */ (0, i.jsx)("h2", {
					className: "font-weight-bold mb-4",
					children: e
				}),
				/* @__PURE__ */ (0, i.jsx)("div", {
					className: "keypoints-card-grid",
					children: t.map((e, t) => /* @__PURE__ */ (0, i.jsxs)("div", {
						className: "keypoint",
						children: [/* @__PURE__ */ (0, i.jsx)("h4", {
							className: "keypoint-label font-weight-bold mb-1",
							children: e.keypoint
						}), /* @__PURE__ */ (0, i.jsx)("p", {
							className: "text-gray-700 mb-0",
							children: e.description
						})]
					}, `kp-${t}`))
				}),
				a && o && /* @__PURE__ */ (0, i.jsx)("div", {
					className: "d-flex justify-content-end mt-4",
					children: /* @__PURE__ */ (0, i.jsx)(n, {
						as: "a",
						href: o,
						variant: "dark",
						target: "_blank",
						rel: "noopener noreferrer",
						children: a
					})
				})
			]
		})
	});
}
//#endregion
//#region src/keypoint-block/student-ui/style.scss?inline
var o = ".xblock-keypoints *,.xblock-keypoints :before,.xblock-keypoints :after{box-sizing:border-box}.xblock-keypoints .keypoints-card-grid{column-gap:var(--pgn-spacing-grid-gutter-width);row-gap:var(--pgn-spacing-grid-gutter-width);grid-template-columns:1fr 1fr;display:grid}.xblock-keypoints .keypoint-label{color:var(--pgn-color-primary-base);font-size:1.1rem}.xblock-keypoints .text-gray-700{line-height:1.6}.xblock-keypoints .keypoint{padding:var(--pgn-spacing-alert-padding-y) var(--pgn-spacing-alert-padding-x);background-color:var(--pgn-color-white);border-radius:var(--pgn-size-card-border-radius-base)}", s = (t, n, r) => {
	let { header: s, keypoints: c, button_text: l, button_link: u, background_color: d } = r.data;
	e({
		runtime: t,
		element: n,
		config: r.config,
		styles: o
	})(/* @__PURE__ */ (0, i.jsx)(a, {
		header: s || "",
		keypoints: c || [],
		buttonText: l || "",
		buttonLink: u || "",
		backgroundColor: d || ""
	}));
};
//#endregion
export { s as renderBlock };
