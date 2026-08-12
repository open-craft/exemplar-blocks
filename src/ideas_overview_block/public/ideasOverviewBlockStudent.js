import { c as e, g as t, m as n, n as r, r as i, s as a, t as o } from "./Container-C23PCkNC.js";
//#region src/ideas-overview-block/student-ui/App.tsx
var s = t(), c = ({ data: t }) => /* @__PURE__ */ (0, s.jsx)(o, {
	className: "p-0",
	style: { backgroundColor: t.backgroundColor },
	children: /* @__PURE__ */ (0, s.jsxs)(o, {
		size: "lg",
		children: [
			t.content.header && /* @__PURE__ */ (0, s.jsx)(a, {
				className: "p-3 border-bottom",
				children: /* @__PURE__ */ (0, s.jsx)(e, {
					xs: 12,
					children: /* @__PURE__ */ (0, s.jsx)("div", { dangerouslySetInnerHTML: { __html: t.content.header } })
				})
			}),
			t.content.ideas.map((t, n) => /* @__PURE__ */ (0, s.jsxs)(a, {
				className: `p-3 ${n > 0 ? "border-top" : ""}`,
				children: [/* @__PURE__ */ (0, s.jsx)(e, {
					xs: 12,
					sm: 6,
					children: /* @__PURE__ */ (0, s.jsxs)("div", {
						className: "d-inline-flex align-items-center",
						children: [/* @__PURE__ */ (0, s.jsx)(i, {
							src: r,
							size: "lg",
							className: "text-info-500 mr-2"
						}), /* @__PURE__ */ (0, s.jsx)("span", {
							className: "font-weight-bold text-primary-500",
							children: t.title
						})]
					})
				}), /* @__PURE__ */ (0, s.jsx)(e, {
					xs: 12,
					sm: 6,
					children: /* @__PURE__ */ (0, s.jsx)("ul", { children: t.points.map((e) => /* @__PURE__ */ (0, s.jsx)("li", { dangerouslySetInnerHTML: { __html: e } })) })
				})]
			})),
			t.content.footer && /* @__PURE__ */ (0, s.jsx)(a, {
				className: "p-3 border-top",
				children: /* @__PURE__ */ (0, s.jsx)(e, {
					xs: 12,
					children: /* @__PURE__ */ (0, s.jsx)("div", { dangerouslySetInnerHTML: { __html: t.content.footer } })
				})
			})
		]
	})
}), l = (e, t, r) => {
	n({
		runtime: e,
		element: t,
		config: r.config,
		styles: ""
	})(/* @__PURE__ */ (0, s.jsx)(c, { data: r.data }));
};
//#endregion
export { l as renderBlock };
