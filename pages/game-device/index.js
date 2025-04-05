(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 24 ], {
    268: function _(e, t, c) {
        e.exports = c.p + "assets/images/key2_1.png";
    },
    269: function _(e, t, c) {
        e.exports = c.p + "assets/images/key_1.png";
    },
    501: function _(e, t, c) {},
    522: function _(e, t, c) {
        "use strict";
        c.r(t);
        var s = c(8), n = (c(91), c(63)), a = c(4), i = c(9), l = (c(54), c(23)), j = (c(48), 
        c(19)), r = c(13), o = c(1), b = (c(501), c(268)), m = c.n(b), x = c(269), d = c.n(x), O = c(5), g = c(51), h = c(58), u = c.n(h), p = c(57), f = c.n(p), v = c(0), N = function N() {
            var e = Object(O["useState"])(), t = Object(r["a"])(e, 2), c = t[0], s = t[1], b = Object(O["useState"])(!1), x = Object(r["a"])(b, 2), h = x[0], p = x[1], N = Object(O["useState"])(!1), w = Object(r["a"])(N, 2), k = w[0], y = w[1];
            return Object(O["useEffect"])(function() {
                null !== c && void 0 !== c && c.name ? y(!0) : y(!1);
            }, [ c ]), console.log(c), Object(v["jsxs"])(o["g"], {
                children: [ Object(v["jsxs"])(o["g"], {
                    className: "device-tips p-4",
                    children: [ Object(v["jsx"])(o["g"], {
                        className: "fw-bold text-danger text-xl text-center mb-4",
                        children: "产品真伪识别"
                    }), Object(v["jsxs"])(o["g"], {
                        className: "text-center mb-3",
                        children: [ Object(v["jsx"])(j["a"], {
                            className: "device-img-3 mx-auto",
                            src: m.a,
                            fit: "widthFix"
                        }), Object(v["jsx"])(o["g"], {
                            className: "text-xs text-muted mt-2",
                            children: "希卡之石主题智能扣"
                        }) ]
                    }), Object(v["jsxs"])(o["g"], {
                        className: "device-content-p mb-3",
                        children: [ "目前在市面上我们发现了一些希卡之石的山寨产品，通过仿制在各个平台进行销售，在此建议各位买到此类产品都用户对出售商家进行申请", Object(v["jsx"])(o["e"], {
                            children: "假一赔十"
                        }), "并对商品进行", Object(v["jsx"])(o["e"], {
                            children: "仅退款+投诉"
                        }), "处理。我们会在后期对山寨产品进行技术识别，并对产品锁定，届时将无法使用，请购买官方正品，以免影响您的使用权益。" ]
                    }), Object(v["jsx"])(o["g"], {
                        className: "text-center mb-3",
                        children: Object(v["jsx"])(j["a"], {
                            className: "device-img-1",
                            src: "https://nfctag.nfcreader.net/uploads/t.png",
                            fit: "widthFix"
                        })
                    }), Object(v["jsxs"])(o["g"], {
                        className: "device-content-p mb-3",
                        children: [ "官方正品在连接蓝牙之后，会出现 ", Object(v["jsx"])(o["e"], {
                            children: "希卡之石"
                        }), "图标，并且有", Object(v["jsx"])(o["e"], {
                            children: "电量"
                        }), "显示，山寨版本只有显示黑色钥匙扣。", Object(v["jsx"])(j["a"], {
                            className: "device-img-2",
                            src: d.a,
                            fit: "widthFix"
                        }) ]
                    }), Object(v["jsx"])(o["g"], {
                        className: "height-safe"
                    }) ]
                }), Object(v["jsxs"])(o["g"], {
                    className: "post-submit-bar",
                    children: [ Object(v["jsx"])(o["g"], {
                        className: "bar-inner",
                        children: Object(v["jsx"])(l["a"], {
                            className: "btn btn-primary",
                            type: "primary",
                            onClick: function onClick() {
                                p(!0);
                            },
                            block: !0,
                            children: "连接蓝牙，判断真伪"
                        })
                    }), Object(v["jsx"])(o["g"], {
                        className: "bar-safe"
                    }) ]
                }), Object(v["jsx"])(n["a"], {
                    id: "device-connection-dialog",
                    title: "设备信息",
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    closeOnClickOverlay: !1,
                    show: k,
                    children: c && Object(v["jsxs"])(v["Fragment"], {
                        children: [ Object(v["jsxs"])(o["g"], {
                            className: "text-center",
                            children: [ Object(v["jsx"])(j["a"], {
                                className: "w-168",
                                src: "omllbolink" === (null === c || void 0 === c ? void 0 : c.name) ? u.a : f.a,
                                fit: "cover"
                            }), "omllbolink" === (null === c || void 0 === c ? void 0 : c.name) || "omllbomini" === (null === c || void 0 === c ? void 0 : c.name) && Object(v["jsxs"])(o["g"], {
                                className: "key-power text-sm text-success text-center",
                                children: [ Object(v["jsx"])(o["g"], {
                                    className: "power-icon"
                                }), "电量", null === c || void 0 === c ? void 0 : c.electricity, "%" ]
                            }) ]
                        }), Object(v["jsx"])(o["g"], {
                            className: "text-muted px-4 pb-4 text-center",
                            children: Object(v["jsxs"])(o["g"], {
                                className: "text",
                                children: [ "omllbolink" === c.name && Object(v["jsx"])(v["Fragment"], {
                                    children: "当前设备为希卡之石主题amiibo智能扣"
                                }), "omllbomini" === c.name && Object(v["jsx"])(v["Fragment"], {
                                    children: "当前设备为普通amiibo钥匙扣"
                                }), "amiibolink" === c.name && Object(v["jsx"])(v["Fragment"], {
                                    children: "当前设备为普通amiibo钥匙扣"
                                }) ]
                            })
                        }), Object(v["jsx"])(o["g"], {
                            className: "p-3",
                            children: Object(v["jsx"])(l["a"], {
                                type: "primary",
                                className: "btn btn-primary",
                                block: !0,
                                onClick: Object(i["a"])(Object(a["a"])().mark(function e() {
                                    return Object(a["a"])().wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            y(!1), p(!1), s(null);

                                          case 3:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                })),
                                children: "我知道了"
                            })
                        }) ]
                    })
                }), h && Object(v["jsx"])(g["a"], {
                    actionTitle: "获取设备信息",
                    onDeviceConnected: function onDeviceConnected(e) {
                        s(e);
                    },
                    autoDisconnect: !0
                }) ]
            });
        }, w = {
            navigationBarTitleText: "设备"
        };
        Page(Object(s["createPageConfig"])(N, "pages/game-device/index", {
            root: {
                cn: []
            }
        }, w || {})), t["default"] = N;
    }
}, [ [ 522, 0, 1, 2, 3 ] ] ]);