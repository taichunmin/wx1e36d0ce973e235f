var _typeof2 = require("../../@babel/runtime/helpers/typeof");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 30 ], {
    405: function _(e, a, t) {},
    507: function _(e, a, t) {
        "use strict";
        t.r(a);
        var c = t(8), n = (t(54), t(23)), s = (t(48), t(19)), i = t(31), r = (t(93), t(44)), l = t(13), o = t(1), m = t(21), j = t.n(m), d = (t(405), 
        t(272)), g = t(2), b = t.n(g), u = t(29), f = t(26), x = t(5);
        function h(e) {
            var a, t, c = "";
            if ("string" == typeof e || "number" == typeof e) c += e; else if ("object" == _typeof2(e)) if (Array.isArray(e)) for (a = 0; a < e.length; a++) e[a] && (t = h(e[a])) && (c && (c += " "), 
            c += t); else for (a in e) e[a] && (c && (c += " "), c += a);
            return c;
        }
        function O() {
            for (var e, a, t = 0, c = ""; t < arguments.length; ) (e = arguments[t++]) && (a = h(e)) && (c && (c += " "), 
            c += a);
            return c;
        }
        var N = O, p = t(0), v = function v() {
            var e = j.a.getParams(), a = e.id, t = Object(d["a"])(function() {
                return u["b"].niceJsonMiniProgramV1GamesGameIdGet(a);
            }, {
                ready: !!a,
                onSuccess: function onSuccess() {
                    b.a.stopPullDownRefresh();
                }
            }), c = t.data, m = t.loading, h = t.refresh;
            Object(g["usePullDownRefresh"])(function() {
                h();
            });
            var O = Object(x["useState"])(0), v = Object(l["a"])(O, 2), y = v[0], w = v[1];
            if (m || !c) return Object(p["jsx"])(f["a"], {
                isPublic: !0,
                className: "d-flex flex-center justify-center py-4",
                children: Object(p["jsx"])(r["b"], {})
            });
            var k = c.data.data, P = k.game, C = k.list, G = Object(i["a"])(C || []).map(function(e) {
                return Object(i["a"])(e.data_category || []);
            }).reduce(function(e, a) {
                return a.forEach(function(a) {
                    e.map(function(e) {
                        return e.id;
                    }).includes(a.id) || e.push(a);
                }), e;
            }, []);
            return Object(p["jsxs"])(f["a"], {
                isPublic: !0,
                children: [ Object(p["jsx"])(s["a"], {
                    className: "game-poster",
                    src: "".concat(P.bg, "!resize=482"),
                    fit: "cover"
                }), Object(p["jsxs"])(o["g"], {
                    className: "game-inner p-3",
                    children: [ Object(p["jsxs"])(o["g"], {
                        className: "game-info mb-3",
                        children: [ Object(p["jsx"])(s["a"], {
                            className: "game-info-image",
                            src: "".concat(P.cover, "!resize=114"),
                            fit: "cover"
                        }), Object(p["jsxs"])(o["g"], {
                            className: "game-info-content",
                            children: [ Object(p["jsx"])(o["g"], {
                                className: "game-info-title text-lg mb-1",
                                children: P.name
                            }), Object(p["jsx"])(o["g"], {
                                className: "game-info-desc",
                                children: P.desc
                            }) ]
                        }) ]
                    }), Object(p["jsxs"])(o["g"], {
                        className: "row gx-2 mb-3",
                        children: [ Object(p["jsx"])(o["g"], {
                            className: "col-8",
                            children: Object(p["jsxs"])(o["g"], {
                                className: "game-tab",
                                children: [ G.length > 0 && Object(p["jsx"])(o["g"], {
                                    onClick: function onClick() {
                                        w(1);
                                    },
                                    className: N("item", 1 === y && "active"),
                                    children: "按奖励查看"
                                }), Object(p["jsx"])(o["g"], {
                                    onClick: function onClick() {
                                        w(0);
                                    },
                                    className: N("item", 0 === y && "active"),
                                    children: "按amiibo查看"
                                }) ]
                            })
                        }), Object(p["jsx"])(o["g"], {
                            className: "col-4",
                            children: Object(p["jsx"])(n["a"], {
                                className: "btn btn-dark",
                                icon: "search",
                                type: "primary",
                                round: !0,
                                block: !0,
                                onClick: function onClick() {
                                    return j.a.toGameSearch({
                                        params: {
                                            id: a
                                        }
                                    });
                                },
                                children: "搜索"
                            })
                        }) ]
                    }), 0 === y && Object(p["jsx"])(o["g"], {
                        className: "game-data-list row g-2",
                        children: Object(i["a"])(C || []).filter(function(e) {
                            return !e.data_category;
                        }).map(function(e) {
                            return Object(p["jsx"])(o["g"], {
                                className: "col-6",
                                children: Object(p["jsxs"])(o["g"], {
                                    className: "item",
                                    onClick: function onClick() {
                                        return j.a.toGameData({
                                            params: {
                                                id: e.id
                                            }
                                        });
                                    },
                                    children: [ Object(p["jsx"])(o["g"], {
                                        className: "media rounded",
                                        children: Object(p["jsx"])(s["a"], {
                                            className: "media-content",
                                            lazyLoad: !0,
                                            src: "".concat(e.image, "!resize=185"),
                                            fit: "cover"
                                        })
                                    }), Object(p["jsx"])(o["g"], {
                                        className: "item-content pt-2 px-1",
                                        children: Object(p["jsx"])(o["g"], {
                                            className: "item-title text-center",
                                            children: e.title
                                        })
                                    }) ]
                                })
                            }, e.id);
                        })
                    }), (1 === y || 0 === G.length) && Object(p["jsx"])(o["g"], {
                        children: G.map(function(e) {
                            return Object(p["jsxs"])(p["Fragment"], {
                                children: [ Object(p["jsx"])(o["g"], {
                                    className: "game-data-cat text-white mb-3 mt-5",
                                    children: Object(p["jsx"])(o["g"], {
                                        className: "catname",
                                        children: e.name
                                    })
                                }), Object(p["jsx"])(o["g"], {
                                    className: "game-data-list row g-2",
                                    children: Object(i["a"])(C || []).filter(function(a) {
                                        var t;
                                        return a.data_category && (null === (t = a.data_category) || void 0 === t ? void 0 : t.map(function(e) {
                                            return e.id;
                                        }).includes(e.id));
                                    }).map(function(e) {
                                        return Object(p["jsx"])(o["g"], {
                                            className: "col-6",
                                            children: Object(p["jsxs"])(o["g"], {
                                                className: "item",
                                                onClick: function onClick() {
                                                    return j.a.toGameData({
                                                        params: {
                                                            id: e.id
                                                        }
                                                    });
                                                },
                                                children: [ Object(p["jsx"])(o["g"], {
                                                    className: "media rounded",
                                                    children: Object(p["jsx"])(s["a"], {
                                                        className: "media-content",
                                                        lazyLoad: !0,
                                                        src: e.image,
                                                        fit: "cover"
                                                    })
                                                }), Object(p["jsx"])(o["g"], {
                                                    className: "item-content pt-2 px-1",
                                                    children: Object(p["jsx"])(o["g"], {
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
        }, y = {
            navigationBarTitleText: "数据",
            enablePullDownRefresh: !0
        };
        Page(Object(c["createPageConfig"])(v, "pages/game/index", {
            root: {
                cn: []
            }
        }, y || {})), a["default"] = v;
    }
}, [ [ 507, 0, 1, 2, 3 ] ] ]);