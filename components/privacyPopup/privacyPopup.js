(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
  [7], {
    502: function _(t, e) {
      Component({
        data: {
          title: "\u7528\u6237\u9690\u79C1\u4FDD\u62A4\u63D0\u793A",
          desc1: "\u611F\u8C22\u60A8\u4F7F\u7528NFC Tag Pro\u52A9\u624B\uFF0C\u60A8\u4F7F\u7528\u672C\u5C0F\u7A0B\u5E8F\u524D\u5E94\u5F53\u9605\u4E95\u540C\u610F",
          urlTitle: "\u300A\u7528\u6237\u9690\u79C1\u4FDD\u62A4\u6307\u5F15\u300B",
          desc2: "\u5F53\u60A8\u70B9\u51FB\u540C\u610F\u5E76\u5F00\u59CB\u65F6\u7528\u4EA7\u54C1\u670D\u52A1\u65F6\uFF0C\u5373\u8868\u793A\u4F60\u5DF2\u7406\u89E3\u5E76\u540C\u606F\u8BE5\u6761\u6B3E\u5185\u5BB9\uFF0C\u8BE5\u6761\u6B3E\u5C06\u5BF9\u60A8\u4EA7\u751F\u6CD5\u5F8B\u7EA6\u675F\u529B\u3002\u5982\u60A8\u62D2\u7EDD\uFF0C\u5C06\u65E0\u6CD5\u8FDB\u5165\u5C0F\u7A0B\u5E8F\u3002",
          innerShow: !1,
          height: 0
        },
        lifetimes: {
          attached: function attached() {
            var t = this;
            wx.getPrivacySetting ? wx.getPrivacySetting({
              success: function success(e) {
                console.log("\u662F\u5426\u9700\u8981\u6388\u6743\uFF1A", e.needAuthorization, "\u9690\u79C1\u534F\u8BAE\u7684\u540D\u79F0\u4E3A\uFF1A", e.privacyContractName), e.needAuthorization ? t.popUp() : t.triggerEvent("agree");
              },
              fail: function fail() {},
              complete: function complete() {}
            }) : this.triggerEvent("agree");
          }
        },
        methods: {
          handleDisagree: function handleDisagree(t) {
            wx.exitMiniProgram(), this.triggerEvent("disagree"), this.disPopUp();
          },
          handleAgree: function handleAgree(t) {
            this.triggerEvent("agree"), this.disPopUp();
          },
          popUp: function popUp() {
            this.setData({
              innerShow: !0
            });
          },
          disPopUp: function disPopUp() {
            this.setData({
              innerShow: !1
            });
          },
          openPrivacyContract: function openPrivacyContract() {
            wx.openPrivacyContract({
              success: function success(t) {
                console.log("openPrivacyContract success");
              },
              fail: function fail(t) {
                console.error("openPrivacyContract fail", t);
              }
            });
          }
        }
      });
    }
  },
  [
    [502, 0]
  ]
]);