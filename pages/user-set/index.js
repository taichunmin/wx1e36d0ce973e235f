(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 34 ], {
    494: function(e, t, c) {},
    510: function(e, t, c) {
        c.r(t);
        var n = c(8), o = (c(162), c(71)), i = (c(163), c(39)), a = (c(249), c(58)), s = c(13), d = (c(494), 
        c(124)), r = c(26), u = c(57), b = c(5), j = c(34), l = c(47), f = c(2), h = c.n(f), O = c(0), x = function() {
            var e = Object(d.a)(), t = e.openAudio, c = e.setOpenAudio, n = Object(b.useState)(), f = Object(s.a)(n, 2), x = f[0], v = f[1], p = Object(b.useState)(3), g = Object(s.a)(p, 2), w = g[0], C = g[1];
            return Object(b.useEffect)(function() {
                void 0 !== (null == x ? void 0 : x.buzzer) && C(x.buzzer);
            }, [ x ]), Object(O.jsx)(r.a, {
                children: Object(O.jsx)(u.a, {
                    actionTitle: "音效设置",
                    autoDisconnect: !1,
                    silent: !0,
                    onDeviceConnected: function(e) {
                        v(e);
                    },
                    children: Object(O.jsxs)(o.a, {
                        className: "switch-block mt-2",
                        children: [ Object(O.jsx)(i.b, {
                            title: "音效设置",
                            icon: "music-o",
                            renderExtra: Object(O.jsx)(a.a, {
                                checked: t,
                                onChange: function(e) {
                                    c(!!e.detail);
                                },
                                activeColor: "#ff2a23",
                                inactiveColor: "#dcdee0",
                                size: "24px"
                            })
                        }), w < 3 && Object(O.jsx)(i.b, {
                            title: "设备蜂鸣声",
                            icon: "music-o",
                            renderExtra: Object(O.jsx)(a.a, {
                                checked: 1 === w,
                                onChange: function(e) {
                                    h.a.showLoading(), Object(l.a)(e.detail ? 1 : 0).then(function(e) {
                                        h.a.hideLoading(), h.a.showToast({
                                            icon: "none",
                                            title: "设置成功"
                                        }), j.a.deviceInfo.deviceMode = parseInt(e), C(j.a.deviceInfo.deviceMode);
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
        };
        Page(Object(n.createPageConfig)(x, "pages/user-set/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "音效设置"
        } || {})), t.default = x;
    }
}, [ [ 510, 0, 1, 2, 3 ] ] ]);