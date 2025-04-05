(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 42 ], {
    169: function _(e, a, t) {
        e.exports = t.p + "pages/user/avatar.jpg";
    },
    170: function _(e, a, t) {
        e.exports = t.p + "pages/user/userbg.jpg";
    },
    487: function _(e, a, t) {},
    513: function _(e, a, t) {
        "use strict";
        t.r(a);
        var c = t(8), s = (t(162), t(71)), n = (t(163), t(39)), i = (t(54), t(23)), r = (t(48), 
        t(19)), l = t(6), o = t(1), j = t(21), u = t.n(j), d = (t(487), t(37)), b = t(52), x = t(25), f = t(272), m = t(2), g = t.n(m), O = t(35), p = t.n(O), h = t(29), v = t(169), N = t.n(v), k = t(170), w = t.n(k), C = t(0), M = function M() {
            var e = Object(d["useAtomValue"])(b["a"]), a = e.fetch, t = Object(f["a"])(function() {
                return g.a.login().then(function(e) {
                    var a = e.code;
                    return p.a.post(h["a"] + "/nice-json/mini-program/v1/signup", {
                        nickname: "用户".concat("".concat(1e3 + Math.floor(2e3 * Math.random()))),
                        code: a
                    });
                });
            }, {
                manual: !0,
                onSuccess: function onSuccess(e) {
                    var t = e.data;
                    t && (h["c"].defaults.headers = Object(l["a"])(Object(l["a"])({}, p.a.defaults.headers), {}, {
                        NICETHEME: null === t || void 0 === t ? void 0 : t.data.token
                    }), null === a || void 0 === a || a());
                }
            }), c = t.run, s = t.loading;
            return Object(C["jsxs"])(o["g"], {
                className: "user-poster",
                children: [ Object(C["jsx"])(r["a"], {
                    className: "user-bg",
                    src: w.a,
                    fit: "cover"
                }), Object(C["jsx"])(o["g"], {
                    className: "user-info p-3",
                    children: Object(C["jsxs"])(o["g"], {
                        className: "d-flex flex-fill flex-center",
                        children: [ Object(C["jsx"])(r["a"], {
                            className: "flex-avatar w-48",
                            src: N.a,
                            fit: "cover"
                        }), Object(C["jsx"])(o["g"], {
                            className: "flex-fill ms-2",
                            children: Object(C["jsx"])(o["g"], {
                                className: "text-lg",
                                children: "登录以使用小程序"
                            })
                        }), Object(C["jsx"])(i["a"], {
                            onClick: c,
                            className: "btn btn-dark",
                            type: "primary",
                            size: "small",
                            loading: s,
                            round: !0,
                            children: "登录"
                        }) ]
                    })
                }) ]
            });
        }, L = function L() {
            var e = Object(d["useAtomValue"])(b["b"]), a = function a() {
                return !0;
            };
            return Object(C["jsxs"])(o["g"], {
                children: [ null !== e && void 0 !== e && e.id ? Object(C["jsxs"])(o["g"], {
                    className: "user-poster",
                    children: [ Object(C["jsx"])(r["a"], {
                        className: "user-bg",
                        src: w.a,
                        fit: "cover"
                    }), Object(C["jsx"])(o["g"], {
                        className: "user-info p-3",
                        children: Object(C["jsxs"])(o["g"], {
                            className: "d-flex flex-fill flex-center",
                            children: [ Object(C["jsx"])(r["a"], {
                                className: "flex-avatar w-48",
                                src: e.avatar ? Object(x["b"])(e.avatar || "") : N.a,
                                fit: "cover"
                            }), Object(C["jsxs"])(o["g"], {
                                className: "flex-fill ms-2",
                                children: [ Object(C["jsx"])(o["g"], {
                                    className: "text-lg",
                                    children: e.nickname
                                }), Object(C["jsxs"])(o["g"], {
                                    className: "text-sm text-muted",
                                    children: [ "ID: ", e.id ]
                                }) ]
                            }) ]
                        })
                    }) ]
                }) : Object(C["jsx"])(M, {}), Object(C["jsx"])(C["Fragment"], {
                    children: (null === e || void 0 === e ? void 0 : e.id) && a() && Object(C["jsxs"])(C["Fragment"], {
                        children: [ Object(C["jsx"])(s["a"], {
                            className: "mt-2",
                            children: Object(C["jsx"])(n["b"], {
                                title: "模式设置",
                                icon: "exchange",
                                isLink: !0,
                                onClick: function onClick() {
                                    return u.a.toBindingMode();
                                }
                            })
                        }), Object(C["jsxs"])(s["a"], {
                            className: "mt-2",
                            children: [ Object(C["jsx"])(n["b"], {
                                title: "设备信息",
                                icon: "description",
                                isLink: !0,
                                onClick: function onClick() {
                                    return u.a.toDeviceInfo();
                                }
                            }), Object(C["jsx"])(n["b"], {
                                title: "固件更新",
                                icon: "upgrade",
                                isLink: !0,
                                onClick: function onClick() {
                                    return u.a.toFirmware();
                                }
                            }), Object(C["jsx"])(n["b"], {
                                title: "音效设置",
                                icon: "music-o",
                                isLink: !0,
                                onClick: function onClick() {
                                    return u.a.toUserSet();
                                }
                            }) ]
                        }) ]
                    })
                }) ]
            });
        }, S = {
            navigationBarTitleText: "我的",
            enableShareAppMessage: !1,
            navigationStyle: "custom"
        };
        Page(Object(c["createPageConfig"])(L, "pages/user/index", {
            root: {
                cn: []
            }
        }, S || {})), a["default"] = L;
    }
}, [ [ 513, 0, 1, 2, 3 ] ] ]);