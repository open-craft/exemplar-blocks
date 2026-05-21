import { C as e, a as t, c as n, d as r, f as i, l as a, n as o, s, t as c, u as l, x as u } from "./Container-DBuAOijI.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var d = /* @__PURE__ */ e(l()), f = /* @__PURE__ */ e(u()), p = [
	"bsPrefix",
	"className",
	"noGutters",
	"as"
], m = [
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
], h = { noGutters: !1 }, g = /* @__PURE__ */ f.forwardRef(function(e, t) {
	var r = e.bsPrefix, i = e.className, o = e.noGutters, c = e.as, l = c === void 0 ? "div" : c, u = n(e, p), h = s(r, "row"), g = h + "-cols", _ = [];
	return m.forEach(function(e) {
		var t = u[e];
		delete u[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && _.push("" + g + r + "-" + n);
	}), /* @__PURE__ */ f.createElement(l, a({ ref: t }, u, { className: d.default.apply(void 0, [
		i,
		h,
		o && "no-gutters"
	].concat(_)) }));
});
g.displayName = "Row", g.defaultProps = h;
//#endregion
//#region src/keypoint-block/student-ui/student-ui.tsx
var _ = i();
function v({ header: e, keypoints: n, buttonText: r, buttonLink: i, backgroundColor: a }) {
	return /* @__PURE__ */ (0, _.jsxs)(c, {
		className: "xblock-keypoints py-4 px-3",
		style: { backgroundColor: a },
		children: [
			e && /* @__PURE__ */ (0, _.jsx)("h2", {
				className: "font-weight-bold mb-4",
				children: e
			}),
			/* @__PURE__ */ (0, _.jsx)(g, { children: n.map((e, n) => /* @__PURE__ */ (0, _.jsxs)(t, {
				xs: 12,
				md: 6,
				className: "mb-3",
				children: [/* @__PURE__ */ (0, _.jsx)("h4", {
					className: "keypoint-label font-weight-bold mb-1",
					children: e.keypoint
				}), /* @__PURE__ */ (0, _.jsx)("p", {
					className: "text-gray-700 mb-0",
					children: e.description
				})]
			}, `kp-${n}`)) }),
			r && i && /* @__PURE__ */ (0, _.jsx)("div", {
				className: "d-flex justify-content-end mt-4",
				children: /* @__PURE__ */ (0, _.jsx)(o, {
					as: "a",
					href: i,
					variant: "dark",
					target: "_blank",
					rel: "noopener noreferrer",
					children: r
				})
			})
		]
	});
}
//#endregion
//#region src/keypoint-block/student-ui/style.scss?inline
var y = ".xblock-keypoints *,.xblock-keypoints :before,.xblock-keypoints :after{box-sizing:border-box}.xblock-keypoints .keypoint-label{color:var(--pgn-color-primary-base);font-size:1.1rem}.xblock-keypoints .text-gray-700{line-height:1.6}", b = (e, t, n) => {
	let { header: i, keypoints: a, button_text: o, button_link: s, background_color: c } = n.data;
	r({
		runtime: e,
		element: t,
		config: n.config,
		styles: y
	})(/* @__PURE__ */ (0, _.jsx)(v, {
		header: i || "",
		keypoints: a || [],
		buttonText: o || "",
		buttonLink: s || "",
		backgroundColor: c || ""
	}));
};
//#endregion
export { b as renderBlock };
