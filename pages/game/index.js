var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 24 ], {
    401: function(e, a, t) {},
    499: function(a, t, c) {
        c.r(t);
        var n = c(8), s = (c(56), c(25)), i = (c(52), c(22)), r = c(31), l = (c(92), c(44)), o = c(13), m = c(1), j = c(20), d = c.n(j), b = (c(401), 
        c(270)), g = c(2), u = c.n(g), f = c(29), x = c(26), h = c(5);
        function O(a) {
            var t, c, n = "";
            if ("string" == typeof a || "number" == typeof a) n += a; else if ("object" == e(a)) if (Array.isArray(a)) for (t = 0; t < a.length; t++) a[t] && (c = O(a[t])) && (n && (n += " "), 
            n += c); else for (t in a) a[t] && (n && (n += " "), n += t);
            return n;
        }
        var N = function() {
            for (var e, a, t = 0, c = ""; t < arguments.length; ) (e = arguments[t++]) && (a = O(e)) && (c && (c += " "), 
            c += a);
            return c;
        }, p = c(0), v = function() {
            var e = d.a.getParams().id, a = Object(b.a)(function() {
                return f.b.niceJsonMiniProgramV1GamesGameIdGet(e);
            }, {
                ready: !!e,
                onSuccess: function() {
                    u.a.stopPullDownRefresh();
                }
            }), t = a.data, c = a.loading, n = a.refresh;
            Object(g.usePullDownRefresh)(function() {
                n();
            });
            var j = Object(h.useState)(0), O = Object(o.a)(j, 2), v = O[0], y = O[1];
            if (c || !t) return Object(p.jsx)(x.a, {
                isPublic: !0,
                className: "d-flex flex-center justify-center py-4",
                children: Object(p.jsx)(l.b, {})
            });
            var w = t.data.data, k = w.game, P = w.list, C = Object(r.a)(P || []).map(function(e) {
                return Object(r.a)(e.data_category || []);
            }).reduce(function(e, a) {
                return a.forEach(function(a) {
                    e.map(function(e) {
                        return e.id;
                    }).includes(a.id) || e.push(a);
                }), e;
            }, []);
            return Object(p.jsxs)(x.a, {
                isPublic: !0,
                children: [ Object(p.jsx)(i.a, {
                    className: "game-poster",
                    src: "".concat(k.bg, "!resize=482"),
                    fit: "cover"
                }), Object(p.jsxs)(m.g, {
                    className: "game-inner p-3",
                    children: [ Object(p.jsxs)(m.g, {
                        className: "game-info mb-3",
                        children: [ Object(p.jsx)(i.a, {
                            className: "game-info-image",
                            src: "".concat(k.cover, "!resize=114"),
                            fit: "cover"
                        }), Object(p.jsxs)(m.g, {
                            className: "game-info-content",
                            children: [ Object(p.jsx)(m.g, {
                                className: "game-info-title text-lg mb-1",
                                children: k.name
                            }), Object(p.jsx)(m.g, {
                                className: "game-info-desc",
                                children: k.desc
                            }) ]
                        }) ]
                    }), Object(p.jsxs)(m.g, {
                        className: "row gx-2 mb-3",
                        children: [ Object(p.jsx)(m.g, {
                            className: "col-8",
                            children: Object(p.jsxs)(m.g, {
                                className: "game-tab",
                                children: [ C.length > 0 && Object(p.jsx)(m.g, {
                                    onClick: function() {
                                        y(1);
                                    },
                                    className: N("item", 1 === v && "active"),
                                    children: "按奖励查看"
                                }), Object(p.jsx)(m.g, {
                                    onClick: function() {
                                        y(0);
                                    },
                                    className: N("item", 0 === v && "active"),
                                    children: "按amiibo查看"
                                }) ]
                            })
                        }), Object(p.jsx)(m.g, {
                            className: "col-4",
                            children: Object(p.jsx)(s.a, {
                                className: "btn btn-dark",
                                icon: "search",
                                type: "primary",
                                round: !0,
                                block: !0,
                                onClick: function() {
                                    return d.a.toGameSearch({
                                        params: {
                                            id: e
                                        }
                                    });
                                },
                                children: "搜索"
                            })
                        }) ]
                    }), 0 === v && Object(p.jsx)(m.g, {
                        className: "game-data-list row g-2",
                        children: Object(r.a)(P || []).filter(function(e) {
                            return !e.data_category;
                        }).map(function(e) {
                            return Object(p.jsx)(m.g, {
                                className: "col-6",
                                children: Object(p.jsxs)(m.g, {
                                    className: "item",
                                    onClick: function() {
                                        return d.a.toGameData({
                                            params: {
                                                id: e.id
                                            }
                                        });
                                    },
                                    children: [ Object(p.jsx)(m.g, {
                                        className: "media rounded",
                                        children: Object(p.jsx)(i.a, {
                                            className: "media-content",
                                            lazyLoad: !0,
                                            src: "".concat(e.image, "!resize=185"),
                                            fit: "cover"
                                        })
                                    }), Object(p.jsx)(m.g, {
                                        className: "item-content pt-2 px-1",
                                        children: Object(p.jsx)(m.g, {
                                            className: "item-title text-center",
                                            children: e.title
                                        })
                                    }) ]
                                })
                            }, e.id);
                        })
                    }), (1 === v || 0 === C.length) && Object(p.jsx)(m.g, {
                        children: C.map(function(e) {
                            return Object(p.jsxs)(p.Fragment, {
                                children: [ Object(p.jsx)(m.g, {
                                    className: "game-data-cat text-white mb-3 mt-5",
                                    children: Object(p.jsx)(m.g, {
                                        className: "catname",
                                        children: e.name
                                    })
                                }), Object(p.jsx)(m.g, {
                                    className: "game-data-list row g-2",
                                    children: Object(r.a)(P || []).filter(function(a) {
                                        var t;
                                        return a.data_category && (null === (t = a.data_category) || void 0 === t ? void 0 : t.map(function(e) {
                                            return e.id;
                                        }).includes(e.id));
                                    }).map(function(e) {
                                        return Object(p.jsx)(m.g, {
                                            className: "col-6",
                                            children: Object(p.jsxs)(m.g, {
                                                className: "item",
                                                onClick: function() {
                                                    return d.a.toGameData({
                                                        params: {
                                                            id: e.id
                                                        }
                                                    });
                                                },
                                                children: [ Object(p.jsx)(m.g, {
                                                    className: "media rounded",
                                                    children: Object(p.jsx)(i.a, {
                                                        className: "media-content",
                                                        lazyLoad: !0,
                                                        src: e.image,
                                                        fit: "cover"
                                                    })
                                                }), Object(p.jsx)(m.g, {
                                                    className: "item-content pt-2 px-1",
                                                    children: Object(p.jsx)(m.g, {
                                                        className: "item-title text-center",
                                                        children: e.title
                                                    })
                                                }) ]
                                            })
                                        }, e.id);
                                    })
                                }) ]
                            });
                        })
                    }) ]
                }) ]
            });
        };
        Page(Object(n.createPageConfig)(v, "pages/game/index", {
            root: {
                cn: []
            }
        }, {
            navigationBarTitleText: "数据",
            enablePullDownRefresh: !0
        } || {})), t.default = v;
    }
}, [ [ 499, 0, 1, 2, 3 ] ] ]);