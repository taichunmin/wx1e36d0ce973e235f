(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 14 ], {
    490: function(e, c, t) {},
    509: function(e, c, t) {
        t.r(c);
        var s = t(8), n = (t(56), t(25)), a = (t(52), t(22)), l = t(13), i = t(1), r = (t(490), 
        t(26)), b = t(61), j = t.n(b), d = t(5), o = t(57), x = t(62), m = t.n(x), O = t(0), g = function() {
            var e = Object(d.useState)(), c = Object(l.a)(e, 2), t = c[0], s = c[1];
            return Object(O.jsx)(r.a, {
                children: Object(O.jsxs)(o.a, {
                    actionTitle: "获取设备信息",
                    onDeviceConnected: function(e) {
                        s(e);
                    },
                    autoDisconnect: !0,
                    children: [ Object(O.jsxs)(i.g, {
                        className: "text-center p-4",
                        children: [ Object(O.jsx)(a.a, {
                            className: "w-168",
                            src: "omllbolink" === (null == t ? void 0 : t.name) ? m.a : j.a,
                            fit: "cover"
                        }), "omllbolink" === (null == t ? void 0 : t.name) && Object(O.jsxs)(i.g, {
                            className: "key-power text-sm text-success text-center",
                            children: [ Object(O.jsx)(i.g, {
                                className: "power-icon"
                            }), "电量", null == t ? void 0 : t.electricity, "%" ]
                        }) ]
                    }), t && Object(O.jsxs)(i.g, {
                        className: "p-3",
                        children: [ Object(O.jsx)(i.g, {
                            className: "text-center p-2",
                            children: "设备类型"
                        }), Object(O.jsx)(i.g, {
                            className: "mb-3",
                            children: Object(O.jsx)(n.a, {
                                type: "default",
                                disabled: !0,
                                className: "btn btn-light",
                                block: !0,
                                children: t.name
                            })
                        }), Object(O.jsx)(i.g, {
                            className: "text-center p-2",
                            children: "版本号"
                        }), Object(O.jsx)(i.g, {
                            className: "mb-3",
                            children: Object(O.jsx)(n.a, {
                                type: "default",
                                disabled: !0,
                                className: "btn btn-light",
                                block: !0,
                                children: t.firmwareVersion
                            })
                        }), t.deviceSN.trim() && Object(O.jsxs)(O.Fragment, {
                            children: [ Object(O.jsx)(i.g, {
                                className: "text-center p-2",
                                children: "SN唯一识别码"
                            }), Object(O.jsx)(i.g, {
                                children: Object(O.jsx)(n.a, {
                                    type: "default",
                                    disabled: !0,
                                    className: "btn btn-light",
                                    block: !0,
                                    children: t.deviceSN
                                })
                            }) ]
                        }) ]
                    }) ]
                })
            });
        };
        Page(Object(s.createPageConfig)(g, "pages/device-info/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "设备信息"
        } || {})), c.default = g;
    }
}, [ [ 509, 0, 1, 2, 3 ] ] ]);