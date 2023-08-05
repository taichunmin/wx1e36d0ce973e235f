(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 36 ], {
    169: function(e, a, t) {
        e.exports = t.p + "pages/user/avatar.jpg";
    },
    170: function(e, a, t) {
        e.exports = t.p + "pages/user/userbg.jpg";
    },
    483: function(e, a, t) {},
    505: function(e, a, t) {
        t.r(a);
        var c = t(8), s = (t(162), t(71)), n = (t(163), t(39)), i = (t(56), t(25)), r = (t(52), 
        t(22)), l = t(6), o = t(1), j = t(20), u = t.n(j), b = (t(483), t(37)), d = t(50), x = t(24), f = t(270), m = t(2), g = t.n(m), O = t(35), p = t.n(O), h = t(29), v = t(169), N = t.n(v), k = t(170), C = t.n(k), w = t(0), y = function() {
            var e = Object(b.useAtomValue)(d.a).fetch, a = Object(f.a)(function() {
                return g.a.login().then(function(e) {
                    var a = e.code;
                    return p.a.post(h.a + "/nice-json/mini-program/v1/signup", {
                        nickname: "用户".concat("".concat(1e3 + Math.floor(2e3 * Math.random()))),
                        code: a
                    });
                });
            }, {
                manual: !0,
                onSuccess: function(a) {
                    var t = a.data;
                    t && (h.c.defaults.headers = Object(l.a)(Object(l.a)({}, p.a.defaults.headers), {}, {
                        NICETHEME: null == t ? void 0 : t.data.token
                    }), null == e || e());
                }
            }), t = a.run, c = a.loading;
            return Object(w.jsxs)(o.g, {
                className: "user-poster",
                children: [ Object(w.jsx)(r.a, {
                    className: "user-bg",
                    src: C.a,
                    fit: "cover"
                }), Object(w.jsx)(o.g, {
                    className: "user-info p-3",
                    children: Object(w.jsxs)(o.g, {
                        className: "d-flex flex-fill flex-center",
                        children: [ Object(w.jsx)(r.a, {
                            className: "flex-avatar w-48",
                            src: N.a,
                            fit: "cover"
                        }), Object(w.jsx)(o.g, {
                            className: "flex-fill ms-2",
                            children: Object(w.jsx)(o.g, {
                                className: "text-lg",
                                children: "登录以使用小程序"
                            })
                        }), Object(w.jsx)(i.a, {
                            onClick: t,
                            className: "btn btn-dark",
                            type: "primary",
                            size: "small",
                            loading: c,
                            round: !0,
                            children: "登录"
                        }) ]
                    })
                }) ]
            });
        }, M = function() {
            var e = Object(b.useAtomValue)(d.b), a = null == e ? void 0 : e.verify;
            return Object(w.jsxs)(o.g, {
                children: [ null != e && e.id ? Object(w.jsxs)(o.g, {
                    className: "user-poster",
                    children: [ Object(w.jsx)(r.a, {
                        className: "user-bg",
                        src: C.a,
                        fit: "cover"
                    }), Object(w.jsx)(o.g, {
                        className: "user-info p-3",
                        children: Object(w.jsxs)(o.g, {
                            className: "d-flex flex-fill flex-center",
                            children: [ Object(w.jsx)(r.a, {
                                className: "flex-avatar w-48",
                                src: e.avatar ? Object(x.b)(e.avatar || "") : N.a,
                                fit: "cover"
                            }), Object(w.jsxs)(o.g, {
                                className: "flex-fill ms-2",
                                children: [ Object(w.jsx)(o.g, {
                                    className: "text-lg",
                                    children: e.nickname
                                }), Object(w.jsxs)(o.g, {
                                    className: "text-sm text-muted",
                                    children: [ "ID: ", e.id ]
                                }) ]
                            }), a && Object(w.jsx)(i.a, {
                                className: "btn btn-dark",
                                type: "primary",
                                size: "small",
                                round: !0,
                                onClick: function() {
                                    u.a.toActivate();
                                },
                                children: "激活小程序"
                            }) ]
                        })
                    }) ]
                }) : Object(w.jsx)(y, {}), Object(w.jsx)(w.Fragment, {
                    children: (null == e ? void 0 : e.id) && (null == e || !e.verify || e.license) && Object(w.jsxs)(w.Fragment, {
                        children: [ Object(w.jsx)(s.a, {
                            className: "mt-2",
                            children: Object(w.jsx)(n.b, {
                                title: "模式设置",
                                icon: "exchange",
                                isLink: !0,
                                onClick: function() {
                                    return u.a.toBindingMode();
                                }
                            })
                        }), Object(w.jsxs)(s.a, {
                            className: "mt-2",
                            children: [ Object(w.jsx)(n.b, {
                                title: "设备信息",
                                icon: "description",
                                isLink: !0,
                                onClick: function() {
                                    return u.a.toDeviceInfo();
                                }
                            }), Object(w.jsx)(n.b, {
                                title: "固件更新",
                                icon: "upgrade",
                                isLink: !0,
                                onClick: function() {
                                    return u.a.toFirmware();
                                }
                            }), Object(w.jsx)(n.b, {
                                title: "音效设置",
                                icon: "music-o",
                                isLink: !0,
                                onClick: function() {
                                    return u.a.toUserSet();
                                }
                            }) ]
                        }) ]
                    })
                }) ]
            });
        };
        Page(Object(c.createPageConfig)(M, "pages/user/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "我的",
            enableShareAppMessage: !1,
            navigationStyle: "custom"
        } || {})), a.default = M;
    }
}, [ [ 505, 0, 1, 2, 3 ] ] ]);