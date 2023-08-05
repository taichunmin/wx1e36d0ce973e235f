(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 28 ], {
    168: function(e, t, n) {
        (function(e) {
            n(106);
            var a = n(70), c = n(6), s = n(13), i = (n(52), n(22)), o = (n(92), n(44)), r = n(1), l = n(20), d = n.n(l), u = (n(398), 
            n(270)), j = n(2), f = n.n(j), b = n(29), m = n(26), x = n(5), g = n(0);
            function O() {
                var e = Object(u.a)(function() {
                    return b.b.niceJsonMiniProgramV1GamesGet();
                }), t = e.data;
                if (e.loading || !t) return Object(g.jsx)(m.a, {
                    isPublic: !0,
                    className: "d-flex flex-center justify-center py-4",
                    children: Object(g.jsx)(o.b, {})
                });
                var n = t.data.data.list;
                return Object(g.jsxs)(m.a, {
                    isPublic: !0,
                    children: [ Object(g.jsxs)(r.g, {
                        className: "date-heading d-flex flex-center text-lg text-secondary mb-2",
                        children: [ Object(g.jsx)(r.g, {
                            className: "icon-switch me-1"
                        }), "全部游戏" ]
                    }), Object(g.jsx)(r.g, {
                        className: "data-list row g-2",
                        children: null == n ? void 0 : n.map(function(e) {
                            return Object(g.jsx)(r.g, {
                                className: "col-6",
                                children: Object(g.jsxs)(r.g, {
                                    className: "item",
                                    onClick: function() {
                                        d.a.toGame({
                                            params: {
                                                id: e.id
                                            }
                                        });
                                    },
                                    children: [ Object(g.jsx)(r.g, {
                                        className: "media rounded",
                                        children: Object(g.jsx)(i.a, {
                                            className: "media-content",
                                            lazyLoad: !0,
                                            src: "".concat(e.cover, "!resize=185"),
                                            fit: "cover"
                                        })
                                    }), Object(g.jsx)(r.g, {
                                        className: "item-content pt-2 px-1",
                                        children: Object(g.jsx)(r.g, {
                                            className: "item-title text-center",
                                            children: e.name
                                        })
                                    }) ]
                                })
                            }, e.id);
                        })
                    }) ]
                });
            }
            t.a = function() {
                var t = Object(u.a)(function() {
                    return b.b.niceJsonMiniProgramV1HomeGet();
                }, {
                    onSuccess: function() {
                        f.a.stopPullDownRefresh();
                    }
                }), n = t.data, i = t.loading, o = t.refresh, l = Object(x.useState)({
                    open: !1,
                    content: "",
                    date: ""
                }), d = Object(s.a)(l, 2), p = d[0], h = d[1];
                return Object(j.usePullDownRefresh)(function() {
                    o();
                }), Object(x.useEffect)(function() {
                    e.from([ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, 0, 0 ]);
                }, []), Object(x.useEffect)(function() {
                    if (n) {
                        var e = n.data.data.announcement;
                        if (e) {
                            var t = f.a.getStorageSync("announcement_date");
                            t ? new Date(e.date) > new Date(t) && h({
                                open: !0,
                                content: e.content,
                                date: e.updated_at
                            }) : h({
                                open: !0,
                                content: e.content,
                                date: e.updated_at
                            });
                        }
                    }
                }, [ n ]), i || !n ? Object(g.jsx)(r.g, {
                    className: "p-3"
                }) : Object(g.jsxs)(m.a, {
                    isPublic: !0,
                    className: "p-3",
                    children: [ Object(g.jsx)(a.a, {
                        className: "message-popup",
                        title: "公告",
                        theme: "round-button",
                        message: p.content,
                        messageAlign: "left",
                        show: p.open,
                        onConfirm: function() {
                            f.a.setStorage({
                                key: "announcement_date",
                                data: p.date
                            }), h(Object(c.a)(Object(c.a)({}, p), {}, {
                                open: !1
                            }));
                        }
                    }), Object(g.jsx)(O, {}) ]
                });
            };
        }).call(this, n(19).Buffer);
    },
    387: function(e, t, n) {
        n.r(t);
        var a = n(8), c = n(168);
        Page(Object(a.createPageConfig)(c.a, "pages/index/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "首页",
            enablePullDownRefresh: !0
        } || {})), t.default = c.a;
    },
    398: function(e, t, n) {}
}, [ [ 387, 0, 1, 2, 3 ] ] ]);