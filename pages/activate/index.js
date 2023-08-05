(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 8 ], {
    485: function(e, t, c) {},
    501: function(e, t, c) {
        c.r(t);
        var a = c(8), n = c(4), s = c(9), r = (c(56), c(25)), i = (c(106), c(70)), o = (c(45), 
        c(64), c(65), c(111), c(248), c(125)), l = c(13), b = c(1), u = (c(485), c(2)), j = c.n(u), d = c(270), O = c(29), f = c(37), p = c(50), g = c(5), m = c(20), x = c.n(m), h = c(0), w = function() {
            var e = Object(f.useAtomValue)(p.a).fetch, t = Object(g.useState)(!1), c = Object(l.a)(t, 2), a = c[0], u = c[1], w = Object(g.useState)(""), N = Object(l.a)(w, 2), v = N[0], y = N[1], k = Object(d.a)(function(e) {
                return O.b.niceJsonMiniProgramV1UserVerifyPost({
                    code: e
                });
            }, {
                manual: !0,
                onSuccess: function(t) {
                    200 == +t.data.code && (null == e || e(), x.a.toUser({
                        type: m.NavigateType.switchTab
                    }));
                }
            }), C = k.loading, T = k.run, P = Object(f.useAtomValue)(p.b);
            return Object(g.useEffect)(function() {
                null != P && P.id && !P.verify || x.a.toIndex({
                    type: m.NavigateType.switchTab
                });
            }, [ P ]), Object(h.jsxs)(b.g, {
                className: "p-3",
                children: [ Object(h.jsx)(i.a, {
                    id: "dialog-veri-code",
                    title: "输入激活码",
                    showCancelButton: !0,
                    confirmButtonOpenType: "getUserInfo",
                    onConfirm: function() {
                        T(v);
                    },
                    show: a,
                    loading: C,
                    onClose: function() {
                        u(!1);
                    },
                    children: Object(h.jsx)(o.b, {
                        placeholder: "请输入激活码",
                        center: !0,
                        value: v,
                        onInput: function(e) {
                            return y(e.detail);
                        }
                    })
                }), Object(h.jsxs)(b.g, {
                    className: "post-submit-bar",
                    children: [ Object(h.jsx)(b.g, {
                        className: "bar-inner",
                        children: Object(h.jsx)(b.g, {
                            className: "w-100",
                            children: Object(h.jsxs)(b.g, {
                                className: "row gx-1",
                                children: [ Object(h.jsx)(b.g, {
                                    className: "col-8",
                                    children: Object(h.jsx)(r.a, {
                                        className: "btn btn-dark",
                                        type: "primary",
                                        disabled: C,
                                        onClick: function() {
                                            u(!0);
                                        },
                                        block: !0,
                                        children: "输入激活码"
                                    })
                                }), Object(h.jsx)(b.g, {
                                    className: "col-4",
                                    children: Object(h.jsx)(r.a, {
                                        className: "btn btn-dark",
                                        loading: C,
                                        onClick: Object(s.a)(Object(n.a)().mark(function e() {
                                            var t;
                                            return Object(n.a)().wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, j.a.scanCode({});

                                                  case 2:
                                                    t = e.sent, T(t.result);

                                                  case 4:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        })),
                                        type: "primary",
                                        block: !0,
                                        children: "相册"
                                    })
                                }) ]
                            })
                        })
                    }), Object(h.jsx)(b.g, {
                        className: "bar-safe"
                    }) ]
                }) ]
            });
        };
        Page(Object(a.createPageConfig)(w, "pages/activate/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "绑定激活"
        } || {})), t.default = w;
    }
}, [ [ 501, 0, 1, 2, 3 ] ] ]);