import { c as e, d as t, f as n, h as r, l as i, n as a, o, p as s, r as c, t as l, u } from "./jsx-runtime-vjw70OPC.js";
//#region node_modules/.pnpm/react-bootstrap@1.6.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-bootstrap/esm/Row.js
var d = /* @__PURE__ */ r(t()), f = /* @__PURE__ */ r(s()), p = [
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
], h = { noGutters: !1 }, g = /* @__PURE__ */ f.forwardRef(function(t, n) {
	var r = t.bsPrefix, a = t.className, o = t.noGutters, s = t.as, c = s === void 0 ? "div" : s, l = i(t, p), h = e(r, "row"), g = h + "-cols", _ = [];
	return m.forEach(function(e) {
		var t = l[e];
		delete l[e];
		var n = typeof t == "object" && t ? t.cols : t, r = e === "xs" ? "" : "-" + e;
		n != null && _.push("" + g + r + "-" + n);
	}), /* @__PURE__ */ f.createElement(c, u({ ref: n }, l, { className: d.default.apply(void 0, [
		a,
		h,
		o && "no-gutters"
	].concat(_)) }));
});
g.displayName = "Row", g.defaultProps = h;
//#endregion
//#region src/keypoint-block/student-ui/student-ui.tsx
var _ = /* @__PURE__ */ r(n(), 1), v = l();
function y({ header: e, keypoints: t, buttonText: n, buttonLink: r }) {
	return /* @__PURE__ */ (0, v.jsxs)(a, {
		className: "xblock-keypoints py-4 px-3",
		children: [
			e && /* @__PURE__ */ (0, v.jsx)("h2", {
				className: "font-weight-bold mb-4",
				children: e
			}),
			/* @__PURE__ */ (0, v.jsx)(g, { children: t.map((e, t) => /* @__PURE__ */ (0, v.jsxs)(o, {
				xs: 12,
				md: 6,
				className: "mb-3",
				children: [/* @__PURE__ */ (0, v.jsx)("h4", {
					className: "keypoint-label font-weight-bold mb-1",
					children: e.keypoint
				}), /* @__PURE__ */ (0, v.jsx)("p", {
					className: "text-gray-700 mb-0",
					children: e.description
				})]
			}, `kp-${t}`)) }),
			n && r && /* @__PURE__ */ (0, v.jsx)("div", {
				className: "d-flex justify-content-end mt-4",
				children: /* @__PURE__ */ (0, v.jsx)(c, {
					as: "a",
					href: r,
					variant: "dark",
					target: "_blank",
					rel: "noopener noreferrer",
					children: n
				})
			})
		]
	});
}
//#endregion
//#region src/keypoint-block/student-ui/index.tsx
var b = (e, t, { header: n, keypoints: r, button_text: i, button_link: a }) => {
	let o = t && "jquery" in t ? t[0] : t;
	if (!o || !(o instanceof Element)) {
		console.error("Invalid DOM element provided to renderBlock:", t);
		return;
	}
	_.render(/* @__PURE__ */ (0, v.jsx)(f.StrictMode, { children: /* @__PURE__ */ (0, v.jsx)(y, {
		header: n || "",
		keypoints: r || [],
		buttonText: i || "",
		buttonLink: a || ""
	}) }), o);
};
//#endregion
export { b as renderBlock };
