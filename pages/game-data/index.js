(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 22 ], {
    407: function _(e, t, n) {},
    512: function _(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(8), c = (n(54), n(23)), r = (n(48), n(19)), s = n(4), i = n(9), o = (n(93), 
        n(44)), b = n(13), j = n(1), u = (n(407), n(21)), l = n.n(u), f = n(272), O = n(29), d = n(2), g = n.n(d), x = n(25), h = n(123), m = n(5), p = n(26), w = n(51), v = n(126), y = n(0), N = function N() {
            var e = l.a.getParams(), t = e.id, n = Object(m["useState"])(!1), a = Object(b["a"])(n, 2), u = a[0], N = a[1], k = Object(m["useState"])([]), P = Object(b["a"])(k, 2), D = P[0], S = P[1], T = Object(m["useState"])(), C = Object(b["a"])(T, 2), J = C[0], _ = C[1], B = Object(f["a"])(function() {
                return O["b"].niceJsonMiniProgramV1GameDataDataIdGet(t);
            }, {
                ready: !!t,
                onSuccess: function onSuccess() {
                    g.a.stopPullDownRefresh();
                }
            }), G = B.data, I = B.loading, M = B.refresh;
            if (Object(m["useEffect"])(function() {
                return function() {
                    N(!1), S([]);
                };
            }, []), Object(d["usePullDownRefresh"])(function() {
                M();
            }), I || !G) return Object(y["jsx"])(p["a"], {
                className: "d-flex flex-center justify-center py-4",
                children: Object(y["jsx"])(o["b"], {})
            });
            var R = G.data.data, A = function() {
                var e = Object(i["a"])(Object(s["a"])().mark(function e() {
                    var t;
                    return Object(s["a"])().wrap(function(e) {
                        while (1) switch (e.prev = e.next) {
                          case 0:
                            return N(!0), e.next = 3, Object(x["a"])(R.bin_url).finally(function() {
                                N(!1);
                            });

                          case 3:
                            t = e.sent, _(t), S(Object(h["a"])(t));

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
            return Object(y["jsxs"])(p["a"], {
                children: [ Object(y["jsx"])(j["g"], {
                    className: "bg-white text-center p-4",
                    children: Object(y["jsx"])(r["a"], {
                        className: "w-168",
                        src: R.cover,
                        fit: "cover"
                    })
                }), Object(y["jsx"])(j["g"], {
                    className: "text-center text-muted p-2 bg-light",
                    children: "-详情介绍-"
                }), Object(y["jsx"])(j["g"], {
                    className: "post-content bg-white p-3",
                    dangerouslySetInnerHTML: {
                        __html: Object(v["a"])(R.content)
                    }
                }), Object(y["jsxs"])(j["g"], {
                    className: "post-submit-bar",
                    children: [ Object(y["jsx"])(j["g"], {
                        className: "bar-inner",
                        children: Object(y["jsx"])(c["a"], {
                            onClick: A,
                            loading: u,
                            className: "btn btn-dark",
                            icon: "sort",
                            type: "primary",
                            block: !0,
                            children: "写入数据"
                        })
                    }), Object(y["jsx"])(j["g"], {
                        className: "bar-safe"
                    }) ]
                }), D.length > 0 && Object(y["jsx"])(w["a"], {
                    commands: D,
                    silent: !1,
                    onWriteDone: function onWriteDone() {
                        l.a.back();
                    },
                    actionTitle: "",
                    showProgress: !0,
                    crc16: R.crc16,
                    rawFileArrayBuffer: J,
                    onDeviceConnected: function onDeviceConnected() {}
                }) ]
            });
        }, k = {
            navigationBarTitleText: "内容详情"
        };
        Page(Object(a["createPageConfig"])(N, "pages/game-data/index", {
            root: {
                cn: []
            }
        }, k || {})), t["default"] = N;
    }
}, [ [ 512, 0, 1, 2, 3 ] ] ]);