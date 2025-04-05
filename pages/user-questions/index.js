require("../../@babel/runtime/helpers/Arrayincludes");

var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");

var _slicedToArray2 = require("../../@babel/runtime/helpers/slicedToArray");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 38 ], {
    495: function _(e, t, n) {},
    496: function _(e, t, n) {},
    497: function _(e, t, n) {},
    505: function _(e, t, n) {
        "use strict";
        n.r(t);
        var c = n(8), l = (n(45), n(495), n(14)), a = n(18), s = n(24), r = n(0), i = n(5), o = n(1);
        function d(e) {
            var t = e.value, _e$accordion = e.accordion, n = _e$accordion === void 0 ? !1 : _e$accordion, _e$border = e.border, c = _e$border === void 0 ? !0 : _e$border, d = e.onOpen, u = e.onClose, b = e.onChange, j = e.style, O = e.className, h = e.children, m = Object(s["a"])(e, [ "value", "accordion", "border", "onOpen", "onClose", "onChange", "style", "className", "children" ]), _Object = Object(i["useState"])([]), _Object2 = _slicedToArray2(_Object, 2), g = _Object2[0], p = _Object2[1], x = Object(i["useCallback"])(function() {
                var e = [];
                if (t && !Array.isArray(t)) e.push(t.toString()); else if (t && Array.isArray(t)) {
                    n && t.length > 1 && console.warn("手风琴模式不支持传多个打开页签");
                    var _c = t.map(function(e) {
                        return e.toString();
                    });
                    e = _toConsumableArray2(_c);
                }
                return e;
            }, [ n, t ]);
            Object(i["useEffect"])(function() {
                var e = x();
                p(e);
            }, [ t ]);
            var f = function f(e, t) {
                var c = _toConsumableArray2(g);
                if (e) {
                    var _e = c.findIndex(function(e) {
                        return e === t;
                    });
                    c.splice(_e, 1), null === u || void 0 === u || u({
                        detail: t
                    });
                } else n ? c = [ t ] : c.push(t), null === d || void 0 === d || d({
                    detail: t
                });
                p(c), null === b || void 0 === b || b({
                    detail: c
                });
            }, v = Object(i["useMemo"])(function() {
                return i["Children"].map(h, function(e, t) {
                    return Object(i["cloneElement"])(e, {
                        isOpen: g.includes(e.props.name),
                        handleToggle: function handleToggle(e, t) {
                            return f(e, t);
                        },
                        index: t
                    });
                });
            }, [ h, g, f ]);
            return Object(r["jsx"])(o["g"], Object(a["a"])(Object(l["a"])({
                className: " van-collapse " + (c ? "van-hairline--top-bottom" : "") + " " + (O || ""),
                style: j
            }, m), {
                children: v
            }));
        }
        var u = d, b = (n(65), n(66), n(111), n(496), n(2)), j = n(12), O = n(119), h = n(39);
        var m = 0;
        function g(e) {
            var t = e.size, _e$name = e.name, n = _e$name === void 0 ? null : _e$name, _e$title = e.title, c = _e$title === void 0 ? "" : _e$title, _e$value = e.value, d = _e$value === void 0 ? "" : _e$value, u = e.icon, g = e.label, _e$disabled = e.disabled, p = _e$disabled === void 0 ? !1 : _e$disabled, _e$clickable = e.clickable, x = _e$clickable === void 0 ? !1 : _e$clickable, _e$border2 = e.border, f = _e$border2 === void 0 ? !0 : _e$border2, _e$isLink = e.isLink, v = _e$isLink === void 0 ? !0 : _e$isLink, y = e.renderTitle, N = e.renderIcon, T = e.renderRightIcon, k = e.renderValue, C = e.style, _ = e.className, I = e.children, S = e.index, w = e.isOpen, R = e.handleToggle, A = Object(s["a"])(e, [ "size", "name", "title", "value", "icon", "label", "disabled", "clickable", "border", "isLink", "renderTitle", "renderIcon", "renderRightIcon", "renderValue", "style", "className", "children", "index", "isOpen", "handleToggle" ]), _Object3 = Object(i["useState"])("auto"), _Object4 = _slicedToArray2(_Object3, 2), E = _Object4[0], L = _Object4[1], _Object5 = Object(i["useState"])(!1), _Object6 = _slicedToArray2(_Object5, 2), P = _Object6[0], z = _Object6[1], _Object7 = Object(i["useState"])(m++), _Object8 = _slicedToArray2(_Object7, 1), F = _Object8[0], J = Object(i["useRef"])(null), _Object9 = Object(i["useState"])(-1), _Object10 = _slicedToArray2(_Object9, 2), M = _Object10[0], V = _Object10[1], q = Object(i["useRef"])(!0);
            Object(i["useEffect"])(function() {
                setTimeout(function() {
                    var e = ".van-collapse >>> #content-class" + F;
                    Object(O["a"])(null, "" + e).then(function(e) {
                        e && (V(e.height), Object(b["nextTick"])(function() {
                            z(!0);
                        }));
                    });
                }, 33.33);
            }, [ I ]), Object(i["useEffect"])(function() {
                -1 !== M ? (J.current && clearTimeout(J.current), w ? (L(M + "px"), q.current = !1, 
                J.current = setTimeout(function() {
                    L("auto");
                }, 200)) : q.current || (L(M + "px"), J.current = setTimeout(function() {
                    L("0px");
                }, 200))) : L("0px");
            }, [ w, M, P ]);
            var B = Object(i["useCallback"])(function() {
                p || (q.current = !1, R && R(w, n));
            }, [ R, p, w, n ]);
            return Object(r["jsxs"])(o["g"], Object(a["a"])(Object(l["a"])({
                className: "van-collapse-item  " + (0 !== S ? "van-hairline--top" : "") + " " + (_ || ""),
                style: C
            }, A), {
                children: [ Object(r["jsx"])(h["b"], {
                    title: c,
                    icon: u,
                    value: d,
                    label: g,
                    isLink: v,
                    clickable: x,
                    size: t,
                    border: f && w,
                    className: j["b"]("collapse-item__title", {
                        disabled: p,
                        expanded: w
                    }) + " van-cell",
                    onClick: B,
                    renderTitle: Object(r["jsx"])(r["Fragment"], {
                        children: y
                    }),
                    renderIcon: Object(r["jsx"])(r["Fragment"], {
                        children: N
                    }),
                    renderRightIcon: Object(r["jsx"])(r["Fragment"], {
                        children: T
                    }),
                    children: k
                }), Object(r["jsx"])(o["g"], {
                    style: {
                        height: P ? "auto" : 0,
                        overflow: "hidden"
                    },
                    children: Object(r["jsx"])(o["g"], {
                        className: "van-collapse-item__content content-class",
                        style: {
                            height: E
                        },
                        children: Object(r["jsx"])(o["g"], {
                            id: "content-class" + F,
                            className: "van-collapse-item__content_wrapper",
                            children: I
                        })
                    })
                }) ]
            }));
        }
        var p = g, x = (n(93), n(44)), f = (n(497), n(272)), v = n(29), y = n(26), N = n(126), T = function T() {
            var e = Object(f["a"])(function() {
                return v["b"].niceJsonMiniProgramV1QuestionsGet();
            }), t = e.data, n = e.loading;
            if (n || !t) return Object(r["jsx"])(y["a"], {
                isPublic: !0,
                className: "d-flex flex-center justify-center py-4",
                children: Object(r["jsx"])(x["b"], {})
            });
            var c = t.data.data.list;
            return Object(r["jsx"])(y["a"], {
                children: Object(r["jsx"])(o["g"], {
                    className: "pb-4",
                    children: c.filter(function(e) {
                        return null !== e;
                    }).map(function(e, t) {
                        var n;
                        return Object(r["jsxs"])(u, {
                            accordion: !0,
                            border: !0,
                            className: "px-3 pt-3",
                            children: [ Object(r["jsxs"])(o["g"], {
                                className: "d-flex text-lg text-dark mb-2 mx-1",
                                children: [ Object(r["jsx"])(o["g"], {
                                    className: "icon-cat me-1"
                                }), null === e || void 0 === e || null === (n = e[0]) || void 0 === n || null === (n = n.category) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.name ]
                            }), e.map(function(e, t) {
                                return Object(r["jsx"])(p, {
                                    title: e.title,
                                    name: t,
                                    children: Object(r["jsx"])(o["g"], {
                                        dangerouslySetInnerHTML: {
                                            __html: Object(N["a"])(e.content)
                                        }
                                    })
                                });
                            }) ]
                        });
                    })
                })
            });
        }, k = {
            navigationBarTitleText: "常见问题"
        };
        Page(Object(c["createPageConfig"])(T, "pages/user-questions/index", {
            root: {
                cn: []
            }
        }, k || {})), t["default"] = T;
    }
}, [ [ 505, 0, 1, 2, 3 ] ] ]);