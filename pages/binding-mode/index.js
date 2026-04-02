(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
  [16], {
    491: function _(e, n, t) {},
    514: function _(e, n, t) {


      t.r(n);
      var c = t(8),
        i = (t(162), t(71)),
        o = (t(163), t(39)),
        a = (t(249), t(60)),
        r = (t(48), t(19)),
        s = t(6),
        l = t(4),
        d = t(9),
        u = t(13),
        b = t(1),
        j = (t(491), t(58)),
        f = t.n(j),
        h = t(57),
        x = t.n(h),
        v = t(5),
        O = t(53),
        p = t(26),
        m = t(51),
        w = t(2),
        k = t.n(w),
        g = t(34),
        C = t(47),
        L = t(0),
        T = function T() {
          var e = Object(v["useState"])(),
            n = Object(u["a"])(e, 2),
            t = n[0],
            c = n[1],
            j = Object(v["useState"])(0),
            h = Object(u["a"])(j, 2),
            w = h[0],
            T = h[1];
          Object(v["useEffect"])(function() {
            "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.deviceMode) && T(t.deviceMode);
          }, [t]);
          var y = function() {
              var e = Object(d["a"])(Object(l["a"])().mark(function e() {
                return Object(l["a"])().wrap(function(e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return k.a.showLoading(), e.next = 3, g["a"].writeTask({
                        asList: [O["d"]],
                        shouldDisconnect: !1
                      }).then(function() {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u6062\u590D\u51FA\u5382\u8BBE\u7F6E\u6210\u529F"
                        });
                      }).catch(function(e) {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u6062\u590D\u51FA\u5382\u8BBE\u7F6E\u5931\u8D25"
                        }), console.log(e);
                      });
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function() {
                return e.apply(this, arguments);
              };
            }(),
            N = function() {
              var e = Object(d["a"])(Object(l["a"])().mark(function e(n) {
                return Object(l["a"])().wrap(function(e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return k.a.showLoading(), e.next = 3, g["a"].writeTask({
                        asList: [Object(s["a"])(Object(s["a"])({}, O["i"]), {}, {
                          payload: [n]
                        })],
                        shouldDisconnect: !1
                      }).then(function() {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u5207\u6362\u6210\u529F"
                        }), g["a"].deviceInfo.deviceMode = n, T(n);
                      }).catch(function(e) {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u5207\u6362\u5931\u8D25"
                        }), console.log(e);
                      });
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function(n) {
                return e.apply(this, arguments);
              };
            }(),
            E = function() {
              var e = Object(d["a"])(Object(l["a"])().mark(function e(n) {
                return Object(l["a"])().wrap(function(e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return k.a.showLoading(), e.next = 3, Object(C["e"])(n).then(function() {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u5207\u6362\u6210\u529F"
                        }), g["a"].deviceInfo.deviceMode = n, T(n);
                      }).catch(function(e) {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u5207\u6362\u5931\u8D25"
                        }), console.error(e);
                      });
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function(n) {
                return e.apply(this, arguments);
              };
            }(),
            z = function() {
              var e = Object(d["a"])(Object(l["a"])().mark(function e() {
                return Object(l["a"])().wrap(function(e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return k.a.showLoading(), e.next = 3, Object(C["b"])().then(function() {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u6062\u590D\u51FA\u5382\u8BBE\u7F6E\u6210\u529F"
                        });
                      }).catch(function(e) {
                        k.a.hideLoading(), k.a.showToast({
                          icon: "none",
                          title: "\u6062\u590D\u51FA\u5382\u8BBE\u7F6E\u5931\u8D25"
                        }), console.log(e);
                      });
                    case 3:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function() {
                return e.apply(this, arguments);
              };
            }(),
            D = function() {
              var e = Object(d["a"])(Object(l["a"])().mark(function e(n) {
                return Object(l["a"])().wrap(function(e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      if ("amiibolink" !== (null === t || void 0 === t ? void 0 : t.name)) {
                        e.next = 5;
                        break;
                      }
                      return e.next = 3, N(n);
                    case 3:
                      e.next = 8;
                      break;
                    case 5:
                      if ("omllbolink" !== (null === t || void 0 === t ? void 0 : t.name) && "omllbomini" !== (null === t || void 0 === t ? void 0 : t.name)) {
                        e.next = 8;
                        break;
                      }
                      return e.next = 8, E(n);
                    case 8:
                    case "end":
                      return e.stop();
                  }
                }, e);
              }));
              return function(n) {
                return e.apply(this, arguments);
              };
            }();
          return Object(L["jsx"])(p["a"], {
            children: Object(L["jsxs"])(m["a"], {
              actionTitle: "\u5207\u6362\u8BBE\u5907\u6A21\u5F0F",
              autoDisconnect: !1,
              silent: !0,
              onDeviceConnected: function onDeviceConnected(e) {
                c(e);
              },
              children: [Object(L["jsx"])(b["g"], {
                className: "text-center p-4",
                children: Object(L["jsx"])(r["a"], {
                  className: "w-168",
                  src: "omllbolink" === (null === t || void 0 === t ? void 0 : t.name) ? f.a : x.a,
                  fit: "cover"
                })
              }), Object(L["jsxs"])(b["g"], {
                className: "px-3",
                children: ["amiibolink" === (null === t || void 0 === t ? void 0 : t.name) && Object(L["jsx"])(b["g"], {
                  className: "card py-1",
                  children: Object(L["jsxs"])(i["a"], {
                    className: "switch-block",
                    children: [Object(L["jsx"])(o["b"], {
                      onClick: function onClick() {
                        D(1);
                      },
                      title: "\u65E0\u9650\u6A21\u5F0F\uFF08\u624B\u52A8\uFF09",
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 1 === w
                      })
                    }), Object(L["jsx"])(o["b"], {
                      title: "\u6587\u4EF6\u5207\u6362\u6A21\u5F0F",
                      onClick: function onClick() {
                        D(2);
                      },
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 2 === w
                      })
                    }), null !== t && void 0 !== t && t.isNewVersion ? Object(L["jsx"])(o["b"], {
                      title: "\u65E0\u9650\u6A21\u5F0F\uFF08\u81EA\u52A8\uFF09",
                      onClick: function onClick() {
                        D(4);
                      },
                      border: !1,
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 4 === w
                      })
                    }) : Object(L["jsx"])(o["b"], {
                      title: "\u65E0\u9650\u6A21\u5F0F\uFF08\u81EA\u52A8\uFF09",
                      onClick: function onClick() {
                        D(3);
                      },
                      border: !1,
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 3 === w
                      })
                    })]
                  })
                }), ("omllbolink" === (null === t || void 0 === t ? void 0 : t.name) || "omllbomini" === (null === t || void 0 === t ? void 0 : t.name)) && Object(L["jsx"])(b["g"], {
                  className: "card py-1",
                  children: Object(L["jsxs"])(i["a"], {
                    className: "switch-block",
                    children: [Object(L["jsx"])(o["b"], {
                      onClick: function onClick() {
                        D(1);
                      },
                      title: "\u65E0\u9650\u6A21\u5F0F\uFF08\u624B\u52A8\uFF09",
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 1 === w
                      })
                    }), Object(L["jsx"])(o["b"], {
                      title: "\u6587\u4EF6\u5207\u6362\u6A21\u5F0F",
                      onClick: function onClick() {
                        D(3);
                      },
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 3 === w
                      })
                    }), Object(L["jsx"])(o["b"], {
                      title: "\u65E0\u9650\u6A21\u5F0F\uFF08\u81EA\u52A8\uFF09",
                      onClick: function onClick() {
                        D(2);
                      },
                      border: !1,
                      renderExtra: Object(L["jsx"])(a["a"], {
                        activeColor: "#ff2a23",
                        inactiveColor: "#dcdee0",
                        size: "24px",
                        checked: 2 === w
                      })
                    })]
                  })
                }), (null === t || void 0 === t ? void 0 : t.isNewVersion) && Object(L["jsx"])(b["g"], {
                  className: "text-center text-muted px-2 py-3",
                  onClick: function onClick() {
                    y();
                  },
                  children: "\u6062\u590D\u51FA\u5382\u8BBE\u7F6E"
                }), ("omllbolink" === (null === t || void 0 === t ? void 0 : t.name) || "omllbomini" === (null === t || void 0 === t ? void 0 : t.name)) && Object(L["jsx"])(b["g"], {
                  className: "text-center text-muted px-2 py-3",
                  onClick: function onClick() {
                    z();
                  },
                  children: "\u6062\u590D\u51FA\u5382\u8BBE\u7F6E"
                })]
              })]
            })
          });
        },
        y = {
          navigationBarTitleText: "\u6A21\u5F0F\u8BBE\u7F6E"
        };
      Page(Object(c["createPageConfig"])(T, "pages/binding-mode/index", {
        root: {
          cn: []
        }
      }, y || {})), n["default"] = T;
    }
  },
  [
    [514, 0, 1, 2, 3]
  ]
]);