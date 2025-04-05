(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 34 ], {
    168: function _(e, t, n) {
        "use strict";
        (function(e) {
            n(91);
            var a = n(63), c = n(6), s = n(13), i = (n(48), n(19)), o = (n(93), n(44)), r = n(1), l = n(21), u = n.n(l), d = (n(402), 
            n(272)), j = n(2), p = n.n(j), f = n(29), m = n(26), b = n(5), x = n(0);
            function g() {
                var e = Object(d["a"])(function() {
                    return f["b"].niceJsonMiniProgramV1GamesGet();
                }), t = e.data, n = e.loading;
                if (n || !t) return Object(x["jsx"])(m["a"], {
                    isPublic: !0,
                    className: "d-flex flex-center justify-center py-4",
                    children: Object(x["jsx"])(o["b"], {})
                });
                var a = t.data.data.list;
                return Object(x["jsxs"])(m["a"], {
                    isPublic: !0,
                    children: [ Object(x["jsxs"])(r["g"], {
                        className: "date-heading d-flex flex-center text-lg text-secondary mb-2",
                        children: [ Object(x["jsx"])(r["g"], {
                            className: "icon-switch me-1"
                        }), "全部游戏" ]
                    }), Object(x["jsx"])(r["g"], {
                        className: "data-list row g-2",
                        children: null === a || void 0 === a ? void 0 : a.map(function(e) {
                            return Object(x["jsx"])(r["g"], {
                                className: "col-6",
                                children: Object(x["jsxs"])(r["g"], {
                                    className: "item",
                                    onClick: function onClick() {
                                        u.a.toGame({
                                            params: {
                                                id: e.id
                                            }
                                        });
                                    },
                                    children: [ Object(x["jsx"])(r["g"], {
                                        className: "media rounded",
                                        children: Object(x["jsx"])(i["a"], {
                                            className: "media-content",
                                            lazyLoad: !0,
                                            src: "".concat(e.cover, "!resize=185"),
                                            fit: "cover"
                                        })
                                    }), Object(x["jsx"])(r["g"], {
                                        className: "item-content pt-2 px-1",
                                        children: Object(x["jsx"])(r["g"], {
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
            var O = function O() {
                var t = Object(d["a"])(function() {
                    return f["b"].niceJsonMiniProgramV1HomeGet();
                }, {
                    onSuccess: function onSuccess() {
                        p.a.stopPullDownRefresh();
                    }
                }), n = t.data, i = t.loading, o = t.refresh, l = Object(b["useState"])({
                    open: !1,
                    content: "",
                    date: ""
                }), u = Object(s["a"])(l, 2), O = u[0], h = u[1];
                return Object(j["usePullDownRefresh"])(function() {
                    o();
                }), Object(b["useEffect"])(function() {
                    e.from([ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, 0, 0 ]);
                }, []), Object(b["useEffect"])(function() {
                    if (n) {
                        var e = n.data.data.announcement;
                        if (e) {
                            var t = p.a.getStorageSync("announcement_date");
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
                }, [ n ]), i || !n ? Object(x["jsx"])(r["g"], {
                    className: "p-3"
                }) : Object(x["jsxs"])(m["a"], {
                    isPublic: !0,
                    className: "p-3",
                    children: [ Object(x["jsx"])(a["a"], {
                        className: "message-popup",
                        title: "公告",
                        theme: "round-button",
                        message: O.content,
                        messageAlign: "left",
                        show: O.open,
                        onConfirm: function onConfirm() {
                            p.a.setStorage({
                                key: "announcement_date",
                                data: O.date
                            }), h(Object(c["a"])(Object(c["a"])({}, O), {}, {
                                open: !1
                            }));
                        }
                    }), Object(x["jsx"])("privacy-popup", {}), Object(x["jsx"])(g, {}) ]
                });
            };
            t["a"] = O;
        }).call(this, n(20)["Buffer"]);
    },
    391: function _(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(8), c = n(168), s = {
            navigationBarTitleText: "首页",
            enablePullDownRefresh: !0,
            usingComponents: {
                "privacy-popup": "../../components/privacyPopup/privacyPopup"
            }
        };
        Page(Object(a["createPageConfig"])(c["a"], "pages/index/index", {
            root: {
                cn: []
            }
        }, s || {}));
        t["default"] = c["a"];
    },
    402: function _(e, t, n) {}
}, [ [ 391, 0, 1, 2, 3 ] ] ]);