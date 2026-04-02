(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
  [12], {
    489: function _(e, c, a) {},
    509: function _(e, c, a) {


      a.r(c);
      var s = a(8),
        t = a(4),
        n = a(9),
        i = (a(54), a(23)),
        l = (a(91), a(63)),
        r = (a(45), a(65), a(66), a(111), a(248), a(125)),
        b = a(13),
        o = (a(489), a(1)),
        j = a(2),
        d = a.n(j),
        h = a(272),
        u = a(37),
        g = a(5),
        p = a(21),
        O = a.n(p),
        m = a(29),
        x = a(52),
        f = a(0),
        N = function N() {
          var e = Object(u["useAtomValue"])(x["a"]),
            c = e.fetch,
            a = Object(g["useState"])(!1),
            s = Object(b["a"])(a, 2),
            j = s[0],
            N = s[1],
            w = Object(g["useState"])(""),
            v = Object(b["a"])(w, 2),
            y = v[0],
            k = v[1],
            C = Object(h["a"])(function(e) {
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
            }),
            P = C.loading,
            T = C.run,
            I = Object(u["useAtomValue"])(x["b"]);
          return Object(g["useEffect"])(function() {
            null !== I && void 0 !== I && I.id && I.verify || O.a.toIndex({
              type: p["NavigateType"].switchTab
            });
          }, [I]), Object(f["jsxs"])(o["g"], {
            className: "p-3",
            children: [Object(f["jsx"])(l["a"], {
              id: "dialog-veri-code",
              title: "\u8F93\u5165\u6FC0\u6D3B\u7801",
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
                placeholder: "\u8BF7\u8F93\u5165\u6FC0\u6D3B\u7801",
                center: !0,
                value: y,
                onInput: function onInput(e) {
                  return k(e.detail);
                }
              })
            }), Object(f["jsxs"])(o["g"], {
              className: "post-content bg-white p-3",
              children: [Object(f["jsx"])(o["g"], {
                className: "h5-p",
                children: "\u5C0A\u656C\u7684\u7528\u6237\u4EEC\uFF1A"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-p",
                style: {
                  whiteSpace: "nowrap"
                },
                children: "\u6211\u4EEC\u975E\u5E38\u91CD\u89C6\u5E76\u611F\u8C22\u60A8\u5BF9\u6211\u4EEC\u4EA7\u54C1\u7684\u652F\u6301\u548C\u4FE1\u4EFB\u3002"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-p",
                children: "\u8FD1\u671F\uFF0C\u6211\u4EEC\u6CE8\u610F\u5230\u5E02\u573A\u4E0A\u51FA\u73B0\u4E86\u4E00\u4E9B\u672A\u7ECF\u6388\u6743\u7684\u5C71\u5BE8\u786C\u4EF6\uFF0C\u8FD9\u4E9B\u4EA7\u54C1\u4E0D\u4EC5\u4FB5\u72AF\u4E86\u6211\u4EEC\u7684\u77E5\u8BC6\u4EA7\u6743\uFF0C\u4E5F\u5BF9\u7528\u6237\u7684\u6570\u636E\u5B89\u5168\u548C\u4E2A\u4EBA\u9690\u79C1\u6784\u6210\u4E86\u6F5C\u5728\u98CE\u9669\u3002"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-p",
                children: "\u4E3A\u4E86\u4FDD\u62A4\u60A8\u7684\u6743\u76CA\uFF0C\u786E\u4FDD\u60A8\u4F7F\u7528\u7684\u662F\u6211\u4EEC\u5B98\u65B9\u8BA4\u8BC1\u7684\u6B63\u54C1\u786C\u4EF6\uFF0C\u6211\u4EEC\u51B3\u5B9A\u4ECE\u5373\u65E5\u8D77\u5BF9\u6240\u6709\u786C\u4EF6\u4EA7\u54C1\u5B9E\u65BD\u6FC0\u6D3B\u9A8C\u8BC1\u673A\u5236\u3002"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-b",
                children: "\u6FC0\u6D3B\u6D41\u7A0B\uFF1A"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-b",
                children: "1\u3001\u627E\u5230\u4EA7\u54C1\u8D2D\u4E70\u7684\u8BA2\u5355\u53F7\uFF0C\u590D\u5236\uFF0C\u70B9\u51FB\u8F93\u5165\u6FC0\u6D3B\u7801\u6309\u94AE\uFF0C\u7C98\u8D34\uFF1B"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-b",
                children: "2\u3001\u5982\u679C\u6FC0\u6D3B\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5E97\u94FA\u5BA2\u670D\u534F\u52A9\u6FC0\u6D3B\uFF1B"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-b",
                children: "3\u3001\u5982\u679C\u5E97\u94FA\u5BA2\u670D\u4EE5\u4EFB\u4F55\u7406\u7531\u65E0\u6CD5\u7ED9\u60A8\u6FC0\u6D3B\u6216\u8005\u5F15\u5BFC\u60A8\u4F7F\u7528APP\uFF0C\u90A3\u53EF\u80FD\u60A8\u8D2D\u4E70\u7684\u662F\u5C71\u5BE8\u4EA7\u54C1\uFF1B"
              }), Object(f["jsx"])(o["e"], {
                userSelect: !0,
                className: "h5-b",
                onClick: function onClick() {
                  d.a.openEmbeddedMiniProgram({
                    appId: "wxebadf544ddae62cb",
                    path: "pages/survey/index?sid=15026044&hash=dufi&navigateBackMiniProgram=true"
                  });
                },
                children: "4\u3001\u5982\u679C\u8054\u7CFB\u4E0D\u4E0A\u5546\u5BB6\uFF0C\u8BF7\u8BBF\u95EEhttps://wj.qq.com/s2/15026044/dufi/\u586B\u5199\u8D44\u6599\u5BA1\u6838\uFF1B"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-b",
                children: "5\u3001\u5982\u679C\u8D2D\u4E70\u7684\u662F\u3010TYPE-C\u5145\u7535\u7248\u5E0C\u5361\u4E4B\u77F3\u3011\uFF0C\u4F46\u662F\u8FD8\u662F\u51FA\u73B0\u6FC0\u6D3B\u7801\uFF0C\u8FD9\u79CD100%\u662F\u5C71\u5BE8\u4EA7\u54C1\uFF0C\u8BF7\u8054\u7CFB\u5E97\u94FA\u7EF4\u6743;"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-p",
                children: "\u6211\u4EEC\u6DF1\u77E5\u8FD9\u4E00\u53D8\u5316\u53EF\u80FD\u4F1A\u7ED9\u60A8\u5E26\u6765\u4E00\u4E9B\u4E0D\u4FBF\uFF0C\u4F46\u4E3A\u4E86\u7EF4\u62A4\u60A8\u7684\u6743\u76CA\u548C\u6211\u4EEC\u4EA7\u54C1\u7684\u5B89\u5168\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u8FD9\u662F\u5FC5\u8981\u7684\u63AA\u65BD\u3002"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-p",
                children: "\u6211\u4EEC\u5C06\u7EE7\u7EED\u52AA\u529B\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u66F4\u52A0\u5B89\u5168\u3001\u53EF\u9760\u7684\u4EA7\u54C1\u4F53\u9A8C\u3002"
              }), Object(f["jsx"])(o["g"], {
                className: "h5-p",
                children: "\u611F\u8C22\u60A8\u7684\u7406\u89E3\u548C\u652F\u6301\u3002"
              })]
            }), Object(f["jsxs"])(o["g"], {
              className: "post-submit-bar",
              children: [Object(f["jsx"])(o["g"], {
                className: "bar-inner",
                children: Object(f["jsx"])(o["g"], {
                  className: "w-100",
                  children: Object(f["jsxs"])(o["g"], {
                    className: "row gx-1",
                    children: [Object(f["jsx"])(o["g"], {
                      className: "col-8",
                      children: Object(f["jsx"])(i["a"], {
                        className: "btn btn-dark",
                        type: "primary",
                        disabled: P,
                        onClick: function onClick() {
                          N(!0);
                        },
                        block: !0,
                        children: "\u8F93\u5165\u6FC0\u6D3B\u7801"
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
                        children: "\u626B\u7801"
                      })
                    })]
                  })
                })
              }), Object(f["jsx"])(o["g"], {
                className: "bar-safe"
              })]
            })]
          });
        },
        w = {
          navigationBarTitleText: "\u7ED1\u5B9A\u6FC0\u6D3B"
        };
      Page(Object(s["createPageConfig"])(N, "pages/activate/index", {
        root: {
          cn: []
        }
      }, w || {})), c["default"] = N;
    }
  },
  [
    [509, 0, 1, 2, 3]
  ]
]);