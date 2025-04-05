var _slicedToArray2 = require("../../@babel/runtime/helpers/slicedToArray");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 28 ], {
    484: function _(e, a, n) {},
    485: function _(e, a, n) {},
    506: function _(e, a, n) {
        "use strict";
        n.r(a);
        var c = n(8), t = (n(48), n(19)), r = (n(45), n(65), n(66), n(111), n(248), n(484), 
        n(14)), l = n(18), o = n(24), s = n(0), i = n(5), d = n(1), u = n(12), h = n(125);
        function b(e) {
            var a = e.value, _e$defaultValue = e.defaultValue, n = _e$defaultValue === void 0 ? "" : _e$defaultValue, c = e.label, t = e.focus, b = e.error, f = e.disabled, g = e.readonly, j = e.inputAlign, m = e.showAction, _e$leftIcon = e.leftIcon, p = _e$leftIcon === void 0 ? "search" : _e$leftIcon, x = e.rightIcon, O = e.placeholder, v = e.placeholderStyle, _e$actionText = e.actionText, y = _e$actionText === void 0 ? "取消" : _e$actionText, _e$background = e.background, I = _e$background === void 0 ? "#ffffff" : _e$background, _e$maxlength = e.maxlength, C = _e$maxlength === void 0 ? -1 : _e$maxlength, _e$shape = e.shape, N = _e$shape === void 0 ? "square" : _e$shape, _e$clearable = e.clearable, k = _e$clearable === void 0 ? !0 : _e$clearable, _e$clearTrigger = e.clearTrigger, w = _e$clearTrigger === void 0 ? "focus" : _e$clearTrigger, _e$clearIcon = e.clearIcon, T = _e$clearIcon === void 0 ? "clear" : _e$clearIcon, _ = e.renderLabel, P = e.renderLeftIcon, S = e.renderRightIcon, A = e.renderAction, L = e.onFocus, R = e.onBlur, B = e.onChange, G = e.onClear, D = e.onClickInput, F = e.onSearch, J = e.onCancel, V = e.style, M = e.className, $ = Object(o["a"])(e, [ "value", "defaultValue", "label", "focus", "error", "disabled", "readonly", "inputAlign", "showAction", "leftIcon", "rightIcon", "placeholder", "placeholderStyle", "actionText", "background", "maxlength", "shape", "clearable", "clearTrigger", "clearIcon", "renderLabel", "renderLeftIcon", "renderRightIcon", "renderAction", "onFocus", "onBlur", "onChange", "onClear", "onClickInput", "onSearch", "onCancel", "style", "className" ]), q = Object(i["useMemo"])(function() {
                return "undefined" === typeof a;
            }, [ a ]), _Object = Object(i["useState"])(q ? n : a), _Object2 = _slicedToArray2(_Object, 2), z = _Object2[0], E = _Object2[1], H = function H(e) {
                q && E(e.detail), null === B || void 0 === B || B(e);
            }, K = function K(e) {
                setTimeout(function() {
                    E(""), null === J || void 0 === J || J(), Object.defineProperty(e, "detail", {
                        value: ""
                    }), null === B || void 0 === B || B(e);
                }, 200);
            };
            Object(i["useEffect"])(function() {
                q || E(a);
            }, [ q, a ]);
            var Q = q ? z : a;
            return Object(s["jsxs"])(d["g"], Object(l["a"])(Object(r["a"])({
                className: "".concat(u["b"]("search", {
                    withaction: m || !!A
                }), "  ").concat(M),
                style: u["c"]([ {
                    background: I
                }, V ])
            }, $), {
                children: [ Object(s["jsxs"])(d["g"], {
                    className: u["b"]("search__content", [ N ]),
                    children: [ c ? Object(s["jsx"])(d["g"], {
                        className: "van-search__label",
                        children: c
                    }) : _, Object(s["jsx"])(h["a"], {
                        type: "text",
                        leftIcon: P ? "" : p,
                        rightIcon: S ? "" : x,
                        focus: t,
                        error: b,
                        border: !1,
                        confirmType: "search",
                        className: "van-search__field field-class",
                        value: Q,
                        disabled: f,
                        readonly: g,
                        clearable: k,
                        clearTrigger: w,
                        clearIcon: T,
                        maxlength: C,
                        inputAlign: j,
                        placeholder: O,
                        "placeholder-style": v,
                        renderLeftIcon: P,
                        renderRightIcon: S,
                        style: "padding: 5px 10px 5px 0; background-color: transparent;",
                        onBlur: R,
                        onFocus: L,
                        onChange: H,
                        onConfirm: F,
                        onClear: G,
                        onClickInput: D
                    }) ]
                }), (m || A) && Object(s["jsx"])(d["g"], {
                    className: "van-search__action",
                    hoverClass: "van-search__action--hover",
                    hoverStayTime: 70,
                    children: A || Object(s["jsx"])(d["g"], {
                        onClick: K,
                        className: "cancel-class",
                        children: y
                    })
                }) ]
            }));
        }
        var f = b, g = (n(93), n(44)), j = n(13), m = (n(485), n(26)), p = n(272), x = n(2), O = n.n(x), v = n(21), y = n.n(v), I = n(29), C = function C() {
            var e = y.a.getParams(), a = e.id, n = Object(p["a"])(function() {
                return I["b"].niceJsonMiniProgramV1GamesGameIdGet(a);
            }, {
                ready: !!a,
                onSuccess: function onSuccess() {
                    O.a.stopPullDownRefresh();
                }
            }), c = n.data, r = n.loading, l = n.refresh, o = Object(i["useState"])(""), u = Object(j["a"])(o, 2), h = u[0], b = u[1];
            if (Object(x["usePullDownRefresh"])(function() {
                l();
            }), r || !c) return Object(s["jsx"])(m["a"], {
                isPublic: !0,
                className: "d-flex flex-center justify-center py-4",
                children: Object(s["jsx"])(g["b"], {})
            });
            var v = c.data.data.list;
            return Object(s["jsxs"])(m["a"], {
                isPublic: !0,
                children: [ Object(s["jsx"])(f, {
                    placeholder: "请输入搜索关键词",
                    value: h,
                    onChange: function onChange(e) {
                        b(e.detail);
                    }
                }), Object(s["jsx"])(d["g"], {
                    className: "game-inner p-3",
                    children: Object(s["jsx"])(d["g"], {
                        className: "game-data-list row g-2",
                        children: v.filter(function(e) {
                            return e.title.includes(h);
                        }).map(function(e) {
                            return Object(s["jsx"])(d["g"], {
                                className: "col-6",
                                children: Object(s["jsxs"])(d["g"], {
                                    className: "item",
                                    onClick: function onClick() {
                                        return y.a.toGameData({
                                            params: {
                                                id: e.id
                                            }
                                        });
                                    },
                                    children: [ Object(s["jsx"])(d["g"], {
                                        className: "media rounded",
                                        children: Object(s["jsx"])(t["a"], {
                                            className: "media-content",
                                            lazyLoad: !0,
                                            src: e.image,
                                            fit: "cover"
                                        })
                                    }), Object(s["jsx"])(d["g"], {
                                        className: "item-content pt-2 px-1 text-center",
                                        children: Object(s["jsx"])(d["g"], {
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
        }, N = {
            navigationBarTitleText: "搜索数据"
        };
        Page(Object(c["createPageConfig"])(C, "pages/game-search/index", {
            root: {
                cn: []
            }
        }, N || {})), a["default"] = C;
    }
}, [ [ 506, 0, 1, 2, 3 ] ] ]);