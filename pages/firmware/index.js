(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 20 ], {
    492: function _(e, n, t) {},
    515: function _(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(8), c = (t(54), t(23)), i = (t(48), t(19)), o = t(4), r = t(9), l = t(13), s = t(1), d = (t(492), 
        t(272)), b = t(29), j = t(5), u = t(25), v = t(123), O = t(26), m = t(51), x = t(21), f = t.n(x), g = t(58), h = t.n(g), p = t(57), w = t.n(p), k = t(34), N = t(0), y = function y() {
            var e = Object(j["useState"])(), n = Object(l["a"])(e, 2), t = n[0], a = n[1], x = Object(j["useState"])([]), g = Object(l["a"])(x, 2), p = g[0], y = g[1], T = Object(d["a"])(function() {
                return b["b"].niceJsonMiniProgramV1FirmwaresGet(null === t || void 0 === t ? void 0 : t.name);
            }, {
                ready: !(null === t || void 0 === t || !t.name.trim()),
                refreshDeps: [ null === t || void 0 === t ? void 0 : t.name ]
            }), C = T.data, D = T.loading, F = Object(j["useState"])(!1), P = Object(l["a"])(F, 2), S = P[0], J = P[1], V = Object(j["useState"])(), B = Object(l["a"])(V, 2), A = B[0], G = B[1], M = null === C || void 0 === C ? void 0 : C.data.data, W = function() {
                var e = Object(r["a"])(Object(o["a"])().mark(function e() {
                    var n;
                    return Object(o["a"])().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return J(!0), e.next = 3, Object(u["a"])((null === M || void 0 === M ? void 0 : M.bin_url) || "", null === M || void 0 === M ? void 0 : M.crc16).finally(function() {
                                J(!1);
                            });

                          case 3:
                            n = e.sent, G(n), y(Object(v["a"])(n));

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), _ = !M || (null === M || void 0 === M ? void 0 : M.version) === (null === t || void 0 === t ? void 0 : t.firmwareVersion);
            return Object(N["jsx"])(O["a"], {
                children: Object(N["jsx"])(m["a"], {
                    actionTitle: "获取设备信息",
                    onDeviceConnected: function onDeviceConnected(e) {
                        a(e), e.isNewVersion || "amiibolink" !== e.name || (k["a"].disconnect(), f.a.toToNewFirmware());
                    },
                    children: Object(N["jsxs"])(N["Fragment"], {
                        children: [ Object(N["jsx"])(s["g"], {
                            className: "text-center p-4",
                            children: Object(N["jsx"])(i["a"], {
                                className: "w-168",
                                src: "omllbolink" === (null === t || void 0 === t ? void 0 : t.name) ? h.a : w.a,
                                fit: "cover"
                            })
                        }), _ || "amiibolink" === (null === t || void 0 === t ? void 0 : t.name) ? Object(N["jsx"])(s["g"], {
                            className: "p-3",
                            children: Object(N["jsx"])(s["g"], {
                                children: Object(N["jsx"])(c["a"], {
                                    type: "default",
                                    disabled: !0,
                                    className: "btn btn-light",
                                    block: !0,
                                    children: "已是最新版本"
                                })
                            })
                        }) : Object(N["jsxs"])(s["g"], {
                            className: "p-3",
                            children: [ Object(N["jsx"])(s["g"], {
                                children: D ? Object(N["jsx"])(c["a"], {
                                    type: "default",
                                    className: "btn btn-light",
                                    block: !0,
                                    loading: D
                                }) : Object(N["jsx"])(c["a"], {
                                    type: "default",
                                    loading: S,
                                    onClick: W,
                                    className: "btn btn-light",
                                    block: !0,
                                    children: S ? "正在下载" : "立即更新"
                                })
                            }), Object(N["jsx"])(s["g"], {
                                className: "text-primary text-center text-xs p-2",
                                children: null === M || void 0 === M ? void 0 : M.version
                            }) ]
                        }), p.length > 0 && Object(N["jsx"])(m["a"], {
                            onDeviceConnected: function onDeviceConnected() {},
                            actionTitle: "写入固件",
                            silent: !1,
                            showProgress: !0,
                            onWriteDone: function onWriteDone() {
                                k["a"].disconnect(), f.a.back();
                            },
                            commands: p,
                            crc16: M.crc16,
                            rawFileArrayBuffer: A
                        }) ]
                    })
                })
            });
        }, T = {
            navigationBarTitleText: "固件更新"
        };
        Page(Object(a["createPageConfig"])(y, "pages/firmware/index", {
            root: {
                cn: []
            }
        }, T || {})), n["default"] = y;
    }
}, [ [ 515, 0, 1, 2, 3 ] ] ]);