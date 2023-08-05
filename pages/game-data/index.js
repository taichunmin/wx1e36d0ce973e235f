(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 18 ], {
    403: function(e, t, n) {},
    504: function(e, t, n) {
        n.r(t);
        var a = n(8), c = (n(56), n(25)), r = (n(52), n(22)), s = n(4), i = n(9), o = (n(92), 
        n(44)), b = n(13), j = n(1), u = (n(403), n(20)), l = n.n(u), f = n(270), O = n(29), d = n(2), g = n.n(d), x = n(24), m = n(123), p = n(5), h = n(26), w = n(57), v = n(126), y = n(0), N = function() {
            var e = l.a.getParams().id, t = Object(p.useState)(!1), n = Object(b.a)(t, 2), a = n[0], u = n[1], N = Object(p.useState)([]), k = Object(b.a)(N, 2), P = k[0], D = k[1], S = Object(p.useState)(), T = Object(b.a)(S, 2), C = T[0], J = T[1], _ = Object(f.a)(function() {
                return O.b.niceJsonMiniProgramV1GameDataDataIdGet(e);
            }, {
                ready: !!e,
                onSuccess: function() {
                    g.a.stopPullDownRefresh();
                }
            }), B = _.data, G = _.loading, I = _.refresh;
            if (Object(p.useEffect)(function() {
                return function() {
                    u(!1), D([]);
                };
            }, []), Object(d.usePullDownRefresh)(function() {
                I();
            }), G || !B) return Object(y.jsx)(h.a, {
                className: "d-flex flex-center justify-center py-4",
                children: Object(y.jsx)(o.b, {})
            });
            var M = B.data.data, R = function() {
                var e = Object(i.a)(Object(s.a)().mark(function e() {
                    var t;
                    return Object(s.a)().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return u(!0), e.next = 3, Object(x.a)(M.bin_url).finally(function() {
                                u(!1);
                            });

                          case 3:
                            t = e.sent, J(t), D(Object(m.a)(t));

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }();
            return Object(y.jsxs)(h.a, {
                children: [ Object(y.jsx)(j.g, {
                    className: "bg-white text-center p-4",
                    children: Object(y.jsx)(r.a, {
                        className: "w-168",
                        src: M.cover,
                        fit: "cover"
                    })
                }), Object(y.jsx)(j.g, {
                    className: "text-center text-muted p-2 bg-light",
                    children: "-详情介绍-"
                }), Object(y.jsx)(j.g, {
                    className: "post-content bg-white p-3",
                    dangerouslySetInnerHTML: {
                        __html: Object(v.a)(M.content)
                    }
                }), Object(y.jsxs)(j.g, {
                    className: "post-submit-bar",
                    children: [ Object(y.jsx)(j.g, {
                        className: "bar-inner",
                        children: Object(y.jsx)(c.a, {
                            onClick: R,
                            loading: a,
                            className: "btn btn-dark",
                            icon: "sort",
                            type: "primary",
                            block: !0,
                            children: "写入数据"
                        })
                    }), Object(y.jsx)(j.g, {
                        className: "bar-safe"
                    }) ]
                }), P.length > 0 && Object(y.jsx)(w.a, {
                    commands: P,
                    silent: !1,
                    onWriteDone: function() {
                        l.a.back();
                    },
                    actionTitle: "",
                    showProgress: !0,
                    crc16: M.crc16,
                    rawFileArrayBuffer: C,
                    onDeviceConnected: function() {}
                }) ]
            });
        };
        Page(Object(a.createPageConfig)(N, "pages/game-data/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "内容详情"
        } || {})), t.default = N;
    }
}, [ [ 504, 0, 1, 2, 3 ] ] ]);