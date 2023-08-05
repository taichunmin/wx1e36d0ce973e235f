(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 16 ], {
    488: function(e, n, t) {},
    507: function(e, n, t) {
        t.r(n);
        var a = t(8), c = (t(56), t(25)), i = (t(52), t(22)), r = t(4), l = t(9), s = t(13), o = t(1), b = (t(488), 
        t(270)), j = t(29), u = t(5), d = t(24), O = t(123), m = t(26), f = t(57), x = t(20), g = t.n(x), v = t(62), h = t.n(v), p = t(61), w = t.n(p), k = t(34), N = t(0), y = function() {
            var e = Object(u.useState)(), n = Object(s.a)(e, 2), t = n[0], a = n[1], x = Object(u.useState)([]), v = Object(s.a)(x, 2), p = v[0], y = v[1], T = Object(b.a)(function() {
                return j.b.niceJsonMiniProgramV1FirmwaresGet(null == t ? void 0 : t.name);
            }, {
                ready: !(null == t || !t.name.trim()),
                refreshDeps: [ null == t ? void 0 : t.name ]
            }), C = T.data, D = T.loading, F = Object(u.useState)(!1), P = Object(s.a)(F, 2), S = P[0], J = P[1], V = Object(u.useState)(), B = Object(s.a)(V, 2), A = B[0], G = B[1], M = null == C ? void 0 : C.data.data, W = function() {
                var e = Object(l.a)(Object(r.a)().mark(function e() {
                    var n;
                    return Object(r.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return J(!0), e.next = 3, Object(d.a)((null == M ? void 0 : M.bin_url) || "", null == M ? void 0 : M.crc16).finally(function() {
                                J(!1);
                            });

                          case 3:
                            n = e.sent, G(n), y(Object(O.a)(n));

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), _ = !M || (null == M ? void 0 : M.version) === (null == t ? void 0 : t.firmwareVersion);
            return Object(N.jsx)(m.a, {
                children: Object(N.jsx)(f.a, {
                    actionTitle: "获取设备信息",
                    onDeviceConnected: function(e) {
                        a(e), e.isNewVersion || "amiibolink" !== e.name || (k.a.disconnect(), g.a.toToNewFirmware());
                    },
                    children: Object(N.jsxs)(N.Fragment, {
                        children: [ Object(N.jsx)(o.g, {
                            className: "text-center p-4",
                            children: Object(N.jsx)(i.a, {
                                className: "w-168",
                                src: "omllbolink" === (null == t ? void 0 : t.name) ? h.a : w.a,
                                fit: "cover"
                            })
                        }), _ || "amiibolink" === (null == t ? void 0 : t.name) ? Object(N.jsx)(o.g, {
                            className: "p-3",
                            children: Object(N.jsx)(o.g, {
                                children: Object(N.jsx)(c.a, {
                                    type: "default",
                                    disabled: !0,
                                    className: "btn btn-light",
                                    block: !0,
                                    children: "已是最新版本"
                                })
                            })
                        }) : Object(N.jsxs)(o.g, {
                            className: "p-3",
                            children: [ Object(N.jsx)(o.g, {
                                children: D ? Object(N.jsx)(c.a, {
                                    type: "default",
                                    className: "btn btn-light",
                                    block: !0,
                                    loading: D
                                }) : Object(N.jsx)(c.a, {
                                    type: "default",
                                    loading: S,
                                    onClick: W,
                                    className: "btn btn-light",
                                    block: !0,
                                    children: S ? "正在下载" : "立即更新"
                                })
                            }), Object(N.jsx)(o.g, {
                                className: "text-primary text-center text-xs p-2",
                                children: null == M ? void 0 : M.version
                            }) ]
                        }), p.length > 0 && Object(N.jsx)(f.a, {
                            onDeviceConnected: function() {},
                            actionTitle: "写入固件",
                            silent: !1,
                            showProgress: !0,
                            onWriteDone: function() {
                                k.a.disconnect(), g.a.back();
                            },
                            commands: p,
                            crc16: M.crc16,
                            rawFileArrayBuffer: A
                        }) ]
                    })
                })
            });
        };
        Page(Object(a.createPageConfig)(y, "pages/firmware/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "固件更新"
        } || {})), n.default = y;
    }
}, [ [ 507, 0, 1, 2, 3 ] ] ]);