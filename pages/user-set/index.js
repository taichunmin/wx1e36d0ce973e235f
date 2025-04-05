(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 40 ], {
    498: function _(e, t, n) {},
    518: function _(e, t, n) {
        "use strict";
        n.r(t);
        var c = n(8), o = (n(162), n(71)), i = (n(163), n(39)), a = (n(249), n(60)), s = n(13), d = (n(498), 
        n(124)), r = n(26), u = n(51), b = n(5), j = n(34), l = n(47), f = n(2), h = n.n(f), O = n(0), x = function x() {
            var e = Object(d["a"])(), t = e.openAudio, n = e.setOpenAudio, c = Object(b["useState"])(), f = Object(s["a"])(c, 2), x = f[0], v = f[1], p = Object(b["useState"])(3), g = Object(s["a"])(p, 2), w = g[0], C = g[1];
            return Object(b["useEffect"])(function() {
                "undefined" !== typeof (null === x || void 0 === x ? void 0 : x.buzzer) && C(x.buzzer);
            }, [ x ]), Object(O["jsx"])(r["a"], {
                children: Object(O["jsx"])(u["a"], {
                    actionTitle: "音效设置",
                    autoDisconnect: !1,
                    silent: !0,
                    onDeviceConnected: function onDeviceConnected(e) {
                        v(e);
                    },
                    children: Object(O["jsxs"])(o["a"], {
                        className: "switch-block mt-2",
                        children: [ Object(O["jsx"])(i["b"], {
                            title: "音效设置",
                            icon: "music-o",
                            renderExtra: Object(O["jsx"])(a["a"], {
                                checked: t,
                                onChange: function onChange(e) {
                                    n(!!e.detail);
                                },
                                activeColor: "#ff2a23",
                                inactiveColor: "#dcdee0",
                                size: "24px"
                            })
                        }), w < 3 && Object(O["jsx"])(i["b"], {
                            title: "设备蜂鸣声",
                            icon: "music-o",
                            renderExtra: Object(O["jsx"])(a["a"], {
                                checked: 1 === w,
                                onChange: function onChange(e) {
                                    h.a.showLoading(), Object(l["a"])(e.detail ? 1 : 0).then(function(e) {
                                        h.a.hideLoading(), h.a.showToast({
                                            icon: "none",
                                            title: "设置成功"
                                        }), j["a"].deviceInfo.deviceMode = parseInt(e), C(j["a"].deviceInfo.deviceMode);
                                    }).catch(function() {
                                        h.a.hideLoading(), h.a.showToast({
                                            icon: "none",
                                            title: "设置失败"
                                        }), console.error(e);
                                    });
                                },
                                activeColor: "#ff2a23",
                                inactiveColor: "#dcdee0",
                                size: "24px"
                            })
                        }) ]
                    })
                })
            });
        }, v = {
            navigationBarTitleText: "音效设置"
        };
        Page(Object(c["createPageConfig"])(x, "pages/user-set/index", {
            root: {
                cn: []
            }
        }, v || {})), t["default"] = x;
    }
}, [ [ 518, 0, 1, 2, 3 ] ] ]);