var e = require("../../@babel/runtime/helpers/slicedToArray");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 22 ], {
    480: function(e, a, n) {},
    481: function(e, a, n) {},
    498: function(a, n, c) {
        c.r(n);
        var t = c(8), r = (c(52), c(22)), l = (c(45), c(64), c(65), c(111), c(248), c(480), 
        c(14)), o = c(18), i = c(23), s = c(0), d = c(5), u = c(1), h = c(12), b = c(125);
        var f = function(a) {
            var n = a.value, c = a.defaultValue, t = void 0 === c ? "" : c, r = a.label, f = a.focus, g = a.error, j = a.disabled, m = a.readonly, p = a.inputAlign, x = a.showAction, v = a.leftIcon, O = void 0 === v ? "search" : v, y = a.rightIcon, I = a.placeholder, C = a.placeholderStyle, N = a.actionText, k = void 0 === N ? "取消" : N, T = a.background, w = void 0 === T ? "#ffffff" : T, _ = a.maxlength, P = void 0 === _ ? -1 : _, A = a.shape, S = void 0 === A ? "square" : A, L = a.clearable, R = void 0 === L || L, B = a.clearTrigger, G = void 0 === B ? "focus" : B, D = a.clearIcon, F = void 0 === D ? "clear" : D, J = a.renderLabel, V = a.renderLeftIcon, q = a.renderRightIcon, M = a.renderAction, z = a.onFocus, E = a.onBlur, H = a.onChange, K = a.onClear, Q = a.onClickInput, U = a.onSearch, W = a.onCancel, X = a.style, Y = a.className, Z = Object(i.a)(a, [ "value", "defaultValue", "label", "focus", "error", "disabled", "readonly", "inputAlign", "showAction", "leftIcon", "rightIcon", "placeholder", "placeholderStyle", "actionText", "background", "maxlength", "shape", "clearable", "clearTrigger", "clearIcon", "renderLabel", "renderLeftIcon", "renderRightIcon", "renderAction", "onFocus", "onBlur", "onChange", "onClear", "onClickInput", "onSearch", "onCancel", "style", "className" ]), $ = Object(d.useMemo)(function() {
                return void 0 === n;
            }, [ n ]), ee = Object(d.useState)($ ? t : n), ae = e(ee, 2), ne = ae[0], ce = ae[1];
            Object(d.useEffect)(function() {
                $ || ce(n);
            }, [ $, n ]);
            var te = $ ? ne : n;
            return Object(s.jsxs)(u.g, Object(o.a)(Object(l.a)({
                className: "".concat(h.b("search", {
                    withaction: x || !!M
                }), "  ").concat(Y),
                style: h.c([ {
                    background: w
                }, X ])
            }, Z), {
                children: [ Object(s.jsxs)(u.g, {
                    className: h.b("search__content", [ S ]),
                    children: [ r ? Object(s.jsx)(u.g, {
                        className: "van-search__label",
                        children: r
                    }) : J, Object(s.jsx)(b.a, {
                        type: "text",
                        leftIcon: V ? "" : O,
                        rightIcon: q ? "" : y,
                        focus: f,
                        error: g,
                        border: !1,
                        confirmType: "search",
                        className: "van-search__field field-class",
                        value: te,
                        disabled: j,
                        readonly: m,
                        clearable: R,
                        clearTrigger: G,
                        clearIcon: F,
                        maxlength: P,
                        inputAlign: p,
                        placeholder: I,
                        "placeholder-style": C,
                        renderLeftIcon: V,
                        renderRightIcon: q,
                        style: "padding: 5px 10px 5px 0; background-color: transparent;",
                        onBlur: E,
                        onFocus: z,
                        onChange: function(e) {
                            $ && ce(e.detail), null == H || H(e);
                        },
                        onConfirm: U,
                        onClear: K,
                        onClickInput: Q
                    }) ]
                }), (x || M) && Object(s.jsx)(u.g, {
                    className: "van-search__action",
                    hoverClass: "van-search__action--hover",
                    hoverStayTime: 70,
                    children: M || Object(s.jsx)(u.g, {
                        onClick: function(e) {
                            setTimeout(function() {
                                ce(""), null == W || W(), Object.defineProperty(e, "detail", {
                                    value: ""
                                }), null == H || H(e);
                            }, 200);
                        },
                        className: "cancel-class",
                        children: k
                    })
                }) ]
            }));
        }, g = (c(92), c(44)), j = c(13), m = (c(481), c(26)), p = c(270), x = c(2), v = c.n(x), O = c(20), y = c.n(O), I = c(29), C = function() {
            var e = y.a.getParams().id, a = Object(p.a)(function() {
                return I.b.niceJsonMiniProgramV1GamesGameIdGet(e);
            }, {
                ready: !!e,
                onSuccess: function() {
                    v.a.stopPullDownRefresh();
                }
            }), n = a.data, c = a.loading, t = a.refresh, l = Object(d.useState)(""), o = Object(j.a)(l, 2), i = o[0], h = o[1];
            if (Object(x.usePullDownRefresh)(function() {
                t();
            }), c || !n) return Object(s.jsx)(m.a, {
                isPublic: !0,
                className: "d-flex flex-center justify-center py-4",
                children: Object(s.jsx)(g.b, {})
            });
            var b = n.data.data.list;
            return Object(s.jsxs)(m.a, {
                isPublic: !0,
                children: [ Object(s.jsx)(f, {
                    placeholder: "请输入搜索关键词",
                    value: i,
                    onChange: function(e) {
                        h(e.detail);
                    }
                }), Object(s.jsx)(u.g, {
                    className: "game-inner p-3",
                    children: Object(s.jsx)(u.g, {
                        className: "game-data-list row g-2",
                        children: b.filter(function(e) {
                            return e.title.includes(i);
                        }).map(function(e) {
                            return Object(s.jsx)(u.g, {
                                className: "col-6",
                                children: Object(s.jsxs)(u.g, {
                                    className: "item",
                                    onClick: function() {
                                        return y.a.toGameData({
                                            params: {
                                                id: e.id
                                            }
                                        });
                                    },
                                    children: [ Object(s.jsx)(u.g, {
                                        className: "media rounded",
                                        children: Object(s.jsx)(r.a, {
                                            className: "media-content",
                                            lazyLoad: !0,
                                            src: e.image,
                                            fit: "cover"
                                        })
                                    }), Object(s.jsx)(u.g, {
                                        className: "item-content pt-2 px-1 text-center",
                                        children: Object(s.jsx)(u.g, {
                                            className: "item-title",
                                            children: e.title
                                        })
                                    }) ]
                                })
                            }, e.id);
                        })
                    })
                }) ]
            });
        };
        Page(Object(t.createPageConfig)(C, "pages/game-search/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "搜索数据"
        } || {})), n.default = C;
    }
}, [ [ 498, 0, 1, 2, 3 ] ] ]);