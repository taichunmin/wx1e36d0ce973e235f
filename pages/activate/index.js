(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 12 ], {
    489: function _(e, c, a) {},
    509: function _(e, c, a) {
        "use strict";
        a.r(c);
        var s = a(8), t = a(4), n = a(9), i = (a(54), a(23)), l = (a(91), a(63)), r = (a(45), 
        a(65), a(66), a(111), a(248), a(125)), b = a(13), o = (a(489), a(1)), j = a(2), d = a.n(j), h = a(272), u = a(37), g = a(5), p = a(21), O = a.n(p), m = a(29), x = a(52), f = a(0), N = function N() {
            var e = Object(u["useAtomValue"])(x["a"]), c = e.fetch, a = Object(g["useState"])(!1), s = Object(b["a"])(a, 2), j = s[0], N = s[1], w = Object(g["useState"])(""), v = Object(b["a"])(w, 2), y = v[0], k = v[1], C = Object(h["a"])(function(e) {
                return m["b"].niceJsonMiniProgramV1UserVerifyPost({
                    code: e
                });
            }, {
                manual: !0,
                onSuccess: function onSuccess(e) {
                    var a = e.data.code;
                    200 === +a && (null === c || void 0 === c || c(), O.a.toIndex({
                        type: p["NavigateType"].switchTab
                    }));
                }
            }), P = C.loading, T = C.run, I = Object(u["useAtomValue"])(x["b"]);
            return Object(g["useEffect"])(function() {
                null !== I && void 0 !== I && I.id && I.verify || O.a.toIndex({
                    type: p["NavigateType"].switchTab
                });
            }, [ I ]), Object(f["jsxs"])(o["g"], {
                className: "p-3",
                children: [ Object(f["jsx"])(l["a"], {
                    id: "dialog-veri-code",
                    title: "输入激活码",
                    showCancelButton: !0,
                    confirmButtonOpenType: "getUserInfo",
                    onConfirm: function onConfirm() {
                        T(y);
                    },
                    show: j,
                    loading: P,
                    onClose: function onClose() {
                        N(!1);
                    },
                    children: Object(f["jsx"])(r["b"], {
                        placeholder: "请输入激活码",
                        center: !0,
                        value: y,
                        onInput: function onInput(e) {
                            return k(e.detail);
                        }
                    })
                }), Object(f["jsxs"])(o["g"], {
                    className: "post-content bg-white p-3",
                    children: [ Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        children: "尊敬的用户们："
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: "我们非常重视并感谢您对我们产品的支持和信任。"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        children: "近期，我们注意到市场上出现了一些未经授权的山寨硬件，这些产品不仅侵犯了我们的知识产权，也对用户的数据安全和个人隐私构成了潜在风险。"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        children: "为了保护您的权益，确保您使用的是我们官方认证的正品硬件，我们决定从即日起对所有硬件产品实施激活验证机制。"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-b",
                        children: "激活流程："
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-b",
                        children: "1、找到产品购买的订单号，复制，点击输入激活码按钮，粘贴；"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-b",
                        children: "2、如果激活失败，请联系店铺客服协助激活；"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-b",
                        children: "3、如果店铺客服以任何理由无法给您激活或者引导您使用APP，那可能您购买的是山寨产品；"
                    }), Object(f["jsx"])(o["e"], {
                        userSelect: !0,
                        className: "h5-b",
                        onClick: function onClick() {
                            d.a.openEmbeddedMiniProgram({
                                appId: "wxebadf544ddae62cb",
                                path: "pages/survey/index?sid=15026044&hash=dufi&navigateBackMiniProgram=true"
                            });
                        },
                        children: "4、如果联系不上商家，请访问https://wj.qq.com/s2/15026044/dufi/填写资料审核；"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-b",
                        children: "5、如果购买的是【TYPE-C充电版希卡之石】，但是还是出现激活码，这种100%是山寨产品，请联系店铺维权;"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        children: "我们深知这一变化可能会给您带来一些不便，但为了维护您的权益和我们产品的安全，我们认为这是必要的措施。"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        children: "我们将继续努力，为您提供更加安全、可靠的产品体验。"
                    }), Object(f["jsx"])(o["g"], {
                        className: "h5-p",
                        children: "感谢您的理解和支持。"
                    }) ]
                }), Object(f["jsxs"])(o["g"], {
                    className: "post-submit-bar",
                    children: [ Object(f["jsx"])(o["g"], {
                        className: "bar-inner",
                        children: Object(f["jsx"])(o["g"], {
                            className: "w-100",
                            children: Object(f["jsxs"])(o["g"], {
                                className: "row gx-1",
                                children: [ Object(f["jsx"])(o["g"], {
                                    className: "col-8",
                                    children: Object(f["jsx"])(i["a"], {
                                        className: "btn btn-dark",
                                        type: "primary",
                                        disabled: P,
                                        onClick: function onClick() {
                                            N(!0);
                                        },
                                        block: !0,
                                        children: "输入激活码"
                                    })
                                }), Object(f["jsx"])(o["g"], {
                                    className: "col-4",
                                    children: Object(f["jsx"])(i["a"], {
                                        className: "btn btn-dark",
                                        loading: P,
                                        onClick: Object(n["a"])(Object(t["a"])().mark(function e() {
                                            var c;
                                            return Object(t["a"])().wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, d.a.scanCode({});

                                                  case 2:
                                                    c = e.sent, T(c.result);

                                                  case 4:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        })),
                                        type: "primary",
                                        block: !0,
                                        children: "扫码"
                                    })
                                }) ]
                            })
                        })
                    }), Object(f["jsx"])(o["g"], {
                        className: "bar-safe"
                    }) ]
                }) ]
            });
        }, w = {
            navigationBarTitleText: "绑定激活"
        };
        Page(Object(s["createPageConfig"])(N, "pages/activate/index", {
            root: {
                cn: []
            }
        }, w || {})), c["default"] = N;
    }
}, [ [ 509, 0, 1, 2, 3 ] ] ]);