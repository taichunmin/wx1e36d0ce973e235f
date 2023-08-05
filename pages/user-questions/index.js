require("../../@babel/runtime/helpers/Arrayincludes");

var e = require("../../@babel/runtime/helpers/toConsumableArray"), n = require("../../@babel/runtime/helpers/slicedToArray");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 32 ], {
    491: function(e, n, t) {},
    492: function(e, n, t) {},
    493: function(e, n, t) {},
    497: function(t, c, r) {
        r.r(c);
        var a = r(8), l = (r(45), r(491), r(14)), i = r(18), s = r(23), o = r(0), u = r(5), d = r(1);
        var b = function(t) {
            var c = t.value, r = t.accordion, a = void 0 !== r && r, b = t.border, j = void 0 === b || b, f = t.onOpen, O = t.onClose, h = t.onChange, m = t.style, v = t.className, p = t.children, g = Object(s.a)(t, [ "value", "accordion", "border", "onOpen", "onClose", "onChange", "style", "className", "children" ]), x = Object(u.useState)([]), y = n(x, 2), T = y[0], N = y[1], k = Object(u.useCallback)(function() {
                var n = [];
                if (c && !Array.isArray(c)) n.push(c.toString()); else if (c && Array.isArray(c)) {
                    a && c.length > 1 && console.warn("手风琴模式不支持传多个打开页签");
                    var t = c.map(function(e) {
                        return e.toString();
                    });
                    n = e(t);
                }
                return n;
            }, [ a, c ]);
            Object(u.useEffect)(function() {
                var e = k();
                N(e);
            }, [ c ]);
            var C = function(n, t) {
                var c = e(T);
                if (n) {
                    var r = c.findIndex(function(e) {
                        return e === t;
                    });
                    c.splice(r, 1), null == O || O({
                        detail: t
                    });
                } else a ? c = [ t ] : c.push(t), null == f || f({
                    detail: t
                });
                N(c), null == h || h({
                    detail: c
                });
            }, _ = Object(u.useMemo)(function() {
                return u.Children.map(p, function(e, n) {
                    return Object(u.cloneElement)(e, {
                        isOpen: T.includes(e.props.name),
                        handleToggle: function(e, n) {
                            return C(e, n);
                        },
                        index: n
                    });
                });
            }, [ p, T, C ]);
            return Object(o.jsx)(d.g, Object(i.a)(Object(l.a)({
                className: " van-collapse " + (j ? "van-hairline--top-bottom" : "") + " " + (v || ""),
                style: m
            }, g), {
                children: _
            }));
        }, j = (r(64), r(65), r(111), r(492), r(2)), f = r(12), O = r(119), h = r(39), m = 0;
        var v = function(e) {
            var t = e.size, c = e.name, r = void 0 === c ? null : c, a = e.title, b = void 0 === a ? "" : a, v = e.value, p = void 0 === v ? "" : v, g = e.icon, x = e.label, y = e.disabled, T = void 0 !== y && y, N = e.clickable, k = void 0 !== N && N, C = e.border, _ = void 0 === C || C, I = e.isLink, S = void 0 === I || I, w = e.renderTitle, A = e.renderIcon, R = e.renderRightIcon, q = e.renderValue, E = e.style, L = e.className, P = e.children, z = e.index, F = e.isOpen, J = e.handleToggle, M = Object(s.a)(e, [ "size", "name", "title", "value", "icon", "label", "disabled", "clickable", "border", "isLink", "renderTitle", "renderIcon", "renderRightIcon", "renderValue", "style", "className", "children", "index", "isOpen", "handleToggle" ]), V = Object(u.useState)("auto"), B = n(V, 2), G = B[0], H = B[1], Q = Object(u.useState)(!1), D = n(Q, 2), K = D[0], U = D[1], W = Object(u.useState)(m++), X = n(W, 1)[0], Y = Object(u.useRef)(null), Z = Object(u.useState)(-1), $ = n(Z, 2), ee = $[0], ne = $[1], te = Object(u.useRef)(!0);
            Object(u.useEffect)(function() {
                setTimeout(function() {
                    var e = ".van-collapse >>> #content-class" + X;
                    Object(O.a)(null, "" + e).then(function(e) {
                        e && (ne(e.height), Object(j.nextTick)(function() {
                            U(!0);
                        }));
                    });
                }, 33.33);
            }, [ P ]), Object(u.useEffect)(function() {
                -1 !== ee ? (Y.current && clearTimeout(Y.current), F ? (H(ee + "px"), te.current = !1, 
                Y.current = setTimeout(function() {
                    H("auto");
                }, 200)) : te.current || (H(ee + "px"), Y.current = setTimeout(function() {
                    H("0px");
                }, 200))) : H("0px");
            }, [ F, ee, K ]);
            var ce = Object(u.useCallback)(function() {
                T || (te.current = !1, J && J(F, r));
            }, [ J, T, F, r ]);
            return Object(o.jsxs)(d.g, Object(i.a)(Object(l.a)({
                className: "van-collapse-item  " + (0 !== z ? "van-hairline--top" : "") + " " + (L || ""),
                style: E
            }, M), {
                children: [ Object(o.jsx)(h.b, {
                    title: b,
                    icon: g,
                    value: p,
                    label: x,
                    isLink: S,
                    clickable: k,
                    size: t,
                    border: _ && F,
                    className: f.b("collapse-item__title", {
                        disabled: T,
                        expanded: F
                    }) + " van-cell",
                    onClick: ce,
                    renderTitle: Object(o.jsx)(o.Fragment, {
                        children: w
                    }),
                    renderIcon: Object(o.jsx)(o.Fragment, {
                        children: A
                    }),
                    renderRightIcon: Object(o.jsx)(o.Fragment, {
                        children: R
                    }),
                    children: q
                }), Object(o.jsx)(d.g, {
                    style: {
                        height: K ? "auto" : 0,
                        overflow: "hidden"
                    },
                    children: Object(o.jsx)(d.g, {
                        className: "van-collapse-item__content content-class",
                        style: {
                            height: G
                        },
                        children: Object(o.jsx)(d.g, {
                            id: "content-class" + X,
                            className: "van-collapse-item__content_wrapper",
                            children: P
                        })
                    })
                }) ]
            }));
        }, p = (r(92), r(44)), g = (r(493), r(270)), x = r(29), y = r(26), T = r(126), N = function() {
            var e = Object(g.a)(function() {
                return x.b.niceJsonMiniProgramV1QuestionsGet();
            }), n = e.data;
            if (e.loading || !n) return Object(o.jsx)(y.a, {
                isPublic: !0,
                className: "d-flex flex-center justify-center py-4",
                children: Object(o.jsx)(p.b, {})
            });
            var t = n.data.data.list;
            return Object(o.jsx)(y.a, {
                children: Object(o.jsx)(d.g, {
                    className: "pb-4",
                    children: t.filter(function(e) {
                        return null !== e;
                    }).map(function(e, n) {
                        var t;
                        return Object(o.jsxs)(b, {
                            accordion: !0,
                            border: !0,
                            className: "px-3 pt-3",
                            children: [ Object(o.jsxs)(d.g, {
                                className: "d-flex text-lg text-dark mb-2 mx-1",
                                children: [ Object(o.jsx)(d.g, {
                                    className: "icon-cat me-1"
                                }), null == e || null === (t = e[0]) || void 0 === t || null === (t = t.category) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.name ]
                            }), e.map(function(e, n) {
                                return Object(o.jsx)(v, {
                                    title: e.title,
                                    name: n,
                                    children: Object(o.jsx)(d.g, {
                                        dangerouslySetInnerHTML: {
                                            __html: Object(T.a)(e.content)
                                        }
                                    })
                                });
                            }) ]
                        });
                    })
                })
            });
        };
        Page(Object(a.createPageConfig)(N, "pages/user-questions/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "常见问题"
        } || {})), c.default = N;
    }
}, [ [ 497, 0, 1, 2, 3 ] ] ]);