(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 12 ], {
    487: function(e, n, t) {},
    506: function(e, n, t) {
        t.r(n);
        var c = t(8), o = (t(162), t(71)), i = (t(163), t(39)), a = (t(249), t(58)), r = (t(52), 
        t(22)), s = t(6), l = t(4), d = t(9), u = t(13), b = t(1), j = (t(487), t(62)), f = t.n(j), x = t(61), h = t.n(x), O = t(5), v = t(51), p = t(26), m = t(57), k = t(2), w = t.n(k), g = t(34), C = t(47), L = t(0), T = function() {
            var e = Object(O.useState)(), n = Object(u.a)(e, 2), t = n[0], c = n[1], j = Object(O.useState)(0), x = Object(u.a)(j, 2), k = x[0], T = x[1];
            Object(O.useEffect)(function() {
                void 0 !== (null == t ? void 0 : t.deviceMode) && T(t.deviceMode);
            }, [ t ]);
            var N = function() {
                var e = Object(d.a)(Object(l.a)().mark(function e() {
                    return Object(l.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return w.a.showLoading(), e.next = 3, g.a.writeTask({
                                asList: [ v.d ],
                                shouldDisconnect: !1
                            }).then(function() {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "恢复出厂设置成功"
                                });
                            }).catch(function(e) {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "恢复出厂设置失败"
                                }), console.log(e);
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), y = function() {
                var e = Object(d.a)(Object(l.a)().mark(function e(n) {
                    return Object(l.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return w.a.showLoading(), e.next = 3, g.a.writeTask({
                                asList: [ Object(s.a)(Object(s.a)({}, v.i), {}, {
                                    payload: [ n ]
                                }) ],
                                shouldDisconnect: !1
                            }).then(function() {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "切换成功"
                                }), g.a.deviceInfo.deviceMode = n, T(n);
                            }).catch(function(e) {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "切换失败"
                                }), console.log(e);
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), E = function() {
                var e = Object(d.a)(Object(l.a)().mark(function e(n) {
                    return Object(l.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return w.a.showLoading(), e.next = 3, Object(C.e)(n).then(function() {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "切换成功"
                                }), g.a.deviceInfo.deviceMode = n, T(n);
                            }).catch(function(e) {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "切换失败"
                                }), console.error(e);
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }(), z = function() {
                var e = Object(d.a)(Object(l.a)().mark(function e() {
                    return Object(l.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return w.a.showLoading(), e.next = 3, Object(C.b)().then(function() {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "恢复出厂设置成功"
                                });
                            }).catch(function(e) {
                                w.a.hideLoading(), w.a.showToast({
                                    icon: "none",
                                    title: "恢复出厂设置失败"
                                }), console.log(e);
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), D = function() {
                var e = Object(d.a)(Object(l.a)().mark(function e(n) {
                    return Object(l.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if ("amiibolink" !== (null == t ? void 0 : t.name)) {
                                e.next = 5;
                                break;
                            }
                            return e.next = 3, y(n);

                          case 3:
                            e.next = 8;
                            break;

                          case 5:
                            if ("omllbolink" !== (null == t ? void 0 : t.name) && "omllbomini" !== (null == t ? void 0 : t.name)) {
                                e.next = 8;
                                break;
                            }
                            return e.next = 8, E(n);

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(n) {
                    return e.apply(this, arguments);
                };
            }();
            return Object(L.jsx)(p.a, {
                children: Object(L.jsxs)(m.a, {
                    actionTitle: "切换设备模式",
                    autoDisconnect: !1,
                    silent: !0,
                    onDeviceConnected: function(e) {
                        c(e);
                    },
                    children: [ Object(L.jsx)(b.g, {
                        className: "text-center p-4",
                        children: Object(L.jsx)(r.a, {
                            className: "w-168",
                            src: "omllbolink" === (null == t ? void 0 : t.name) ? f.a : h.a,
                            fit: "cover"
                        })
                    }), Object(L.jsxs)(b.g, {
                        className: "px-3",
                        children: [ "amiibolink" === (null == t ? void 0 : t.name) && Object(L.jsx)(b.g, {
                            className: "card py-1",
                            children: Object(L.jsxs)(o.a, {
                                className: "switch-block",
                                children: [ Object(L.jsx)(i.b, {
                                    onClick: function() {
                                        D(1);
                                    },
                                    title: "无限模式（手动）",
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 1 === k
                                    })
                                }), Object(L.jsx)(i.b, {
                                    title: "文件切换模式",
                                    onClick: function() {
                                        D(2);
                                    },
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 2 === k
                                    })
                                }), null != t && t.isNewVersion ? Object(L.jsx)(i.b, {
                                    title: "无限模式（自动）",
                                    onClick: function() {
                                        D(4);
                                    },
                                    border: !1,
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 4 === k
                                    })
                                }) : Object(L.jsx)(i.b, {
                                    title: "无限模式（自动）",
                                    onClick: function() {
                                        D(3);
                                    },
                                    border: !1,
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 3 === k
                                    })
                                }) ]
                            })
                        }), ("omllbolink" === (null == t ? void 0 : t.name) || "omllbomini" === (null == t ? void 0 : t.name)) && Object(L.jsx)(b.g, {
                            className: "card py-1",
                            children: Object(L.jsxs)(o.a, {
                                className: "switch-block",
                                children: [ Object(L.jsx)(i.b, {
                                    onClick: function() {
                                        D(1);
                                    },
                                    title: "无限模式（手动）",
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 1 === k
                                    })
                                }), Object(L.jsx)(i.b, {
                                    title: "文件切换模式",
                                    onClick: function() {
                                        D(3);
                                    },
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 3 === k
                                    })
                                }), Object(L.jsx)(i.b, {
                                    title: "无限模式（自动）",
                                    onClick: function() {
                                        D(2);
                                    },
                                    border: !1,
                                    renderExtra: Object(L.jsx)(a.a, {
                                        activeColor: "#ff2a23",
                                        inactiveColor: "#dcdee0",
                                        size: "24px",
                                        checked: 2 === k
                                    })
                                }) ]
                            })
                        }), (null == t ? void 0 : t.isNewVersion) && Object(L.jsx)(b.g, {
                            className: "text-center text-muted px-2 py-3",
                            onClick: function() {
                                N();
                            },
                            children: "恢复出厂设置"
                        }), ("omllbolink" === (null == t ? void 0 : t.name) || "omllbomini" === (null == t ? void 0 : t.name)) && Object(L.jsx)(b.g, {
                            className: "text-center text-muted px-2 py-3",
                            onClick: function() {
                                z();
                            },
                            children: "恢复出厂设置"
                        }) ]
                    }) ]
                })
            });
        };
        Page(Object(c.createPageConfig)(T, "pages/binding-mode/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "模式设置"
        } || {})), n.default = T;
    }
}, [ [ 506, 0, 1, 2, 3 ] ] ]);