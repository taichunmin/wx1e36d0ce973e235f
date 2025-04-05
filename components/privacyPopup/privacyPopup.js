(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([ [ 7 ], {
    502: function _(t, e) {
        Component({
            data: {
                title: "用户隐私保护提示",
                desc1: "感谢您使用NFC Tag Pro助手，您使用本小程序前应当阅井同意",
                urlTitle: "《用户隐私保护指引》",
                desc2: "当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法进入小程序。",
                innerShow: !1,
                height: 0
            },
            lifetimes: {
                attached: function attached() {
                    var t = this;
                    wx.getPrivacySetting ? wx.getPrivacySetting({
                        success: function success(e) {
                            console.log("是否需要授权：", e.needAuthorization, "隐私协议的名称为：", e.privacyContractName), 
                            e.needAuthorization ? t.popUp() : t.triggerEvent("agree");
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
}, [ [ 502, 0 ] ] ]);