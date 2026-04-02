(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
  [18], {
    494: function _(e, c, t) {},
    517: function _(e, c, t) {


      t.r(c);
      var s = t(8),
        n = (t(54), t(23)),
        a = (t(48), t(19)),
        l = t(13),
        i = t(1),
        r = (t(494), t(26)),
        b = t(57),
        j = t.n(b),
        d = t(5),
        o = t(51),
        x = t(58),
        m = t.n(x),
        O = t(0),
        g = function g() {
          var e = Object(d["useState"])(),
            c = Object(l["a"])(e, 2),
            t = c[0],
            s = c[1];
          return Object(O["jsx"])(r["a"], {
            children: Object(O["jsxs"])(o["a"], {
              actionTitle: "\u83B7\u53D6\u8BBE\u5907\u4FE1\u606F",
              onDeviceConnected: function onDeviceConnected(e) {
                s(e);
              },
              autoDisconnect: !0,
              children: [Object(O["jsxs"])(i["g"], {
                className: "text-center p-4",
                children: [Object(O["jsx"])(a["a"], {
                  className: "w-168",
                  src: "omllbolink" === (null === t || void 0 === t ? void 0 : t.name) ? m.a : j.a,
                  fit: "cover"
                }), "omllbolink" === (null === t || void 0 === t ? void 0 : t.name) && Object(O["jsxs"])(i["g"], {
                  className: "key-power text-sm text-success text-center",
                  children: [Object(O["jsx"])(i["g"], {
                    className: "power-icon"
                  }), "\u7535\u91CF", null === t || void 0 === t ? void 0 : t.electricity, "%"]
                })]
              }), t && Object(O["jsxs"])(i["g"], {
                className: "p-3",
                children: [Object(O["jsx"])(i["g"], {
                  className: "text-center p-2",
                  children: "\u8BBE\u5907\u7C7B\u578B"
                }), Object(O["jsx"])(i["g"], {
                  className: "mb-3",
                  children: Object(O["jsx"])(n["a"], {
                    type: "default",
                    disabled: !0,
                    className: "btn btn-light",
                    block: !0,
                    children: t.name
                  })
                }), Object(O["jsx"])(i["g"], {
                  className: "text-center p-2",
                  children: "\u7248\u672C\u53F7"
                }), Object(O["jsx"])(i["g"], {
                  className: "mb-3",
                  children: Object(O["jsx"])(n["a"], {
                    type: "default",
                    disabled: !0,
                    className: "btn btn-light",
                    block: !0,
                    children: t.firmwareVersion
                  })
                }), t.deviceSN.trim() && Object(O["jsxs"])(O["Fragment"], {
                  children: [Object(O["jsx"])(i["g"], {
                    className: "text-center p-2",
                    children: "SN\u552F\u4E00\u8BC6\u522B\u7801"
                  }), Object(O["jsx"])(i["g"], {
                    children: Object(O["jsx"])(n["a"], {
                      type: "default",
                      disabled: !0,
                      className: "btn btn-light",
                      block: !0,
                      children: t.deviceSN
                    })
                  })]
                })]
              })]
            })
          });
        },
        h = {
          navigationBarTitleText: "\u8BBE\u5907\u4FE1\u606F"
        };
      Page(Object(s["createPageConfig"])(g, "pages/device-info/index", {
        root: {
          cn: []
        }
      }, h || {})), c["default"] = g;
    }
  },
  [
    [517, 0, 1, 2, 3]
  ]
]);