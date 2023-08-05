(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 10 ], {
    484: function(e, s, c) {},
    500: function(e, s, c) {
        c.r(s);
        var t = c(8), a = (c(45), c(64), c(65), c(43)), i = (c(56), c(25)), l = (c(52), 
        c(22)), n = c(1), b = (c(484), c(62)), j = c.n(b), m = c(26), r = c(0), d = function() {
            return Object(r.jsxs)(m.a, {
                className: "p-3",
                children: [ Object(r.jsxs)(n.g, {
                    className: "binding-list row g-2",
                    children: [ Object(r.jsx)(n.g, {
                        className: "col-6 d-flex",
                        children: Object(r.jsxs)(n.g, {
                            className: "item block p-3",
                            children: [ Object(r.jsx)(l.a, {
                                className: "item-image w-64",
                                src: j.a,
                                fit: "cover"
                            }), Object(r.jsxs)(n.g, {
                                className: "item-content mt-3",
                                children: [ Object(r.jsx)(n.g, {
                                    className: "item-title",
                                    children: "设备识别码"
                                }), Object(r.jsx)(n.g, {
                                    className: "item-number text-xs text-muted van-ellipsis mt-1",
                                    children: "36011150314b336011150314b3"
                                }), Object(r.jsx)(n.g, {
                                    className: "item-action mt-3",
                                    children: Object(r.jsx)(i.a, {
                                        className: "btn btn-light",
                                        size: "small",
                                        type: "default",
                                        round: !0,
                                        block: !0,
                                        children: "设备解除"
                                    })
                                }) ]
                            }) ]
                        })
                    }), Object(r.jsx)(n.g, {
                        className: "col-6 d-flex",
                        children: Object(r.jsx)(n.g, {
                            className: "item block p-3 add",
                            children: Object(r.jsxs)(n.g, {
                                className: "item-content",
                                children: [ Object(r.jsx)(n.g, {
                                    className: "add-icon mb-3",
                                    children: Object(r.jsx)(a.b, {
                                        name: "plus",
                                        size: "32px",
                                        className: "icon"
                                    })
                                }), Object(r.jsx)(n.g, {
                                    className: "item-title text-muted",
                                    children: "添加设备"
                                }) ]
                            })
                        })
                    }) ]
                }), Object(r.jsxs)(n.g, {
                    className: "post-submit-bar",
                    children: [ Object(r.jsx)(n.g, {
                        className: "bar-inner",
                        children: Object(r.jsx)(i.a, {
                            className: "btn btn-dark",
                            type: "primary",
                            block: !0,
                            onClick: function() {
                                return Router.toBindingListStep1();
                            },
                            children: "开始绑定激活"
                        })
                    }), Object(r.jsx)(n.g, {
                        className: "bar-safe"
                    }) ]
                }) ]
            });
        };
        Page(Object(t.createPageConfig)(d, "pages/binding-list/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "绑定列表"
        } || {})), s.default = d;
    }
}, [ [ 500, 0, 1, 2, 3 ] ] ]);